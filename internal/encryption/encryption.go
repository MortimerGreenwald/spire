package encryption

import (
	"crypto/aes"
	"crypto/cipher"
	"crypto/rand"
	"crypto/subtle"
	"encoding/base64"
	"encoding/hex"
	"fmt"
	"github.com/Akkadius/spire/internal/env"
	"github.com/Akkadius/spire/internal/serverconfig"
	"github.com/sirupsen/logrus"
	"golang.org/x/crypto/argon2"
	"io"
	"math/big"
	"strings"
)

type PasswordConfig struct {
	time    uint32
	memory  uint32
	threads uint8
	keyLen  uint32
}

type Encrypter struct {
	logger         *logrus.Logger
	serverconfig   *serverconfig.EQEmuServerConfig
	encryptionKey  string
	passwordConfig *PasswordConfig
}

func (e *Encrypter) GetEncryptionKey() string {
	return fmt.Sprintf("%x", e.encryptionKey)
}

func (e *Encrypter) SetEncryptionKey(encryptionKey string) {
	e.encryptionKey = encryptionKey
}

func NewEncrypter(
	logger *logrus.Logger,
	serverconfig *serverconfig.EQEmuServerConfig,
) *Encrypter {
	e := &Encrypter{
		logger:       logger,
		serverconfig: serverconfig,
		passwordConfig: &PasswordConfig{
			time:    1,
			memory:  64 * 1024,
			threads: 4,
			keyLen:  32,
		},
	}

	e.initializeEncryption()
	e.encryptionKey = e.loadEncryptionKey()

	if len(e.encryptionKey) == 0 {
		e.logger.Fatal("Encryption key is invalid")
	}

	return e
}

func (e *Encrypter) Encrypt(text string, keyString string) string {
	key, _ := hex.DecodeString(keyString)
	plaintext := []byte(text)

	block, err := aes.NewCipher(key)
	if err != nil {
		e.logger.Error(err)
	}

	aesGCM, err := cipher.NewGCM(block)
	if err != nil {
		e.logger.Error(err)
	}

	nonce := make([]byte, aesGCM.NonceSize())
	if _, err = io.ReadFull(rand.Reader, nonce); err != nil {
		e.logger.Error(err)
	}

	ciphertext := aesGCM.Seal(nonce, nonce, plaintext, nil)

	return fmt.Sprintf("%x", ciphertext)
}

func (e *Encrypter) Decrypt(encryptedString string, keyString string) string {
	key, _ := hex.DecodeString(keyString)
	enc, _ := hex.DecodeString(encryptedString)

	//Create a new Cipher Block from the key
	block, err := aes.NewCipher(key)
	if err != nil {
		e.logger.Error(err)
	}

	//Create a new GCM
	aesGCM, err := cipher.NewGCM(block)
	if err != nil {
		e.logger.Error(err)
	}

	//Get the nonce size
	nonceSize := aesGCM.NonceSize()

	//Extract the nonce from the encrypted data
	nonce, ciphertext := enc[:nonceSize], enc[nonceSize:]

	//Decrypt the data
	plaintext, err := aesGCM.Open(nil, nonce, ciphertext, nil)
	if err != nil {
		e.logger.Error(err)
	}

	return fmt.Sprintf("%s", plaintext)
}

func (e *Encrypter) loadEncryptionKey() string {
	if e.serverconfig.Exists() {
		c := e.serverconfig.Get()
		if len(c.Spire.EncryptionKey) != 0 {
			e.logger.Debug("[encryption] Using eqemu server config encryption key")
			return c.Spire.EncryptionKey
		}
	} else if env.IsEnvLoaded() && len(env.Get("APP_KEY", "")) != 0 {
		e.logger.Debug("[encryption] Using [.env] encryption key")
		return env.Get("APP_KEY", "")
	}

	return ""
}

func (e *Encrypter) initializeEncryption() {
	if e.serverconfig.Exists() {
		c := e.serverconfig.Get()
		if len(c.Spire.EncryptionKey) == 0 {
			c.Spire.EncryptionKey = e.generateRandomHash()
			e.logger.Infoln("[encryption] Initialized encryption key in EQEmu server config [spire:encryption_key]")
			e.serverconfig.Save(c)
		}
	} else if env.IsEnvLoaded() && len(env.Get("APP_KEY", "")) == 0 {
		e.logger.Fatal("[encryption] Application key is not defined, it must be set in [.env]")
	}
}

func (e *Encrypter) generateRandomHash() string {
	hash, err := GenerateRandomString(32)
	if err != nil {
		e.logger.Error(err)
	}

	return hash
}

func GenerateRandomString(n int) (string, error) {
	const letters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-"
	ret := make([]byte, n)
	for i := 0; i < n; i++ {
		num, err := rand.Int(rand.Reader, big.NewInt(int64(len(letters))))
		if err != nil {
			return "", err
		}
		ret[i] = letters[num.Int64()]
	}

	return string(ret), nil
}

// ComparePassword is used to compare a user-inputted password to a hash to see
// if the password matches or not.
func (e *Encrypter) ComparePassword(password, hash string) (bool, error) {
	parts := strings.Split(hash, "$")

	c := e.passwordConfig
	_, err := fmt.Sscanf(parts[3], "m=%d,t=%d,p=%d", &c.memory, &c.time, &c.threads)
	if err != nil {
		return false, err
	}

	salt, err := base64.RawStdEncoding.DecodeString(parts[4])
	if err != nil {
		return false, err
	}

	decodedHash, err := base64.RawStdEncoding.DecodeString(parts[5])
	if err != nil {
		return false, err
	}
	c.keyLen = uint32(len(decodedHash))

	comparisonHash := argon2.IDKey([]byte(password), salt, c.time, c.memory, c.threads, c.keyLen)

	return subtle.ConstantTimeCompare(decodedHash, comparisonHash) == 1, nil
}

// GeneratePassword is used to generate a new password hash for storing and
// comparing at a later date.
func (e *Encrypter) GeneratePassword(password string) (string, error) {
	c := e.passwordConfig

	// Generate a Salt
	salt := make([]byte, 16)
	if _, err := rand.Read(salt); err != nil {
		return "", err
	}

	hash := argon2.IDKey([]byte(password), salt, c.time, c.memory, c.threads, c.keyLen)

	// Base64 encode the salt and hashed password.
	b64Salt := base64.RawStdEncoding.EncodeToString(salt)
	b64Hash := base64.RawStdEncoding.EncodeToString(hash)

	format := "$argon2id$v=%d$m=%d,t=%d,p=%d$%s$%s"
	full := fmt.Sprintf(format, argon2.Version, c.memory, c.time, c.threads, b64Salt, b64Hash)
	return full, nil
}
