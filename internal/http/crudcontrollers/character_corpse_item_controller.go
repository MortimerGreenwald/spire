package crudcontrollers

import (
	"fmt"
	"github.com/Akkadius/spire/internal/auditlog"
	"github.com/Akkadius/spire/internal/database"
	"github.com/Akkadius/spire/internal/http/routes"
	"github.com/Akkadius/spire/internal/models"
	"github.com/labstack/echo/v4"
	"github.com/sirupsen/logrus"
	"gorm.io/gorm"
	"gorm.io/gorm/clause"
	"net/http"
	"strconv"
	"strings"
)

type CharacterCorpseItemController struct {
	db       *database.DatabaseResolver
	logger   *logrus.Logger
	auditLog *auditlog.UserEvent
}

func NewCharacterCorpseItemController(
	db *database.DatabaseResolver,
	logger *logrus.Logger,
	auditLog *auditlog.UserEvent,
) *CharacterCorpseItemController {
	return &CharacterCorpseItemController{
		db:       db,
		logger:   logger,
		auditLog: auditLog,
	}
}

func (e *CharacterCorpseItemController) Routes() []*routes.Route {
	return []*routes.Route{
		routes.RegisterRoute(http.MethodGet, "character_corpse_item/:corpseId", e.getCharacterCorpseItem, nil),
		routes.RegisterRoute(http.MethodGet, "character_corpse_items", e.listCharacterCorpseItems, nil),
		routes.RegisterRoute(http.MethodGet, "character_corpse_items/count", e.getCharacterCorpseItemsCount, nil),
		routes.RegisterRoute(http.MethodPut, "character_corpse_item", e.createCharacterCorpseItem, nil),
		routes.RegisterRoute(http.MethodDelete, "character_corpse_item/:corpseId", e.deleteCharacterCorpseItem, nil),
		routes.RegisterRoute(http.MethodPatch, "character_corpse_item/:corpseId", e.updateCharacterCorpseItem, nil),
		routes.RegisterRoute(http.MethodPost, "character_corpse_items/bulk", e.getCharacterCorpseItemsBulk, nil),
	}
}

// listCharacterCorpseItems godoc
// @Id listCharacterCorpseItems
// @Summary Lists CharacterCorpseItems
// @Accept json
// @Produce json
// @Tags CharacterCorpseItem
// @Param includes query string false "Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names"
// @Param where query string false "Filter on specific fields. Multiple conditions [.] separated Example: col_like_value.col2__val2"
// @Param whereOr query string false "Filter on specific fields (Chained ors). Multiple conditions [.] separated Example: col_like_value.col2__val2"
// @Param groupBy query string false "Group by field. Multiple conditions [.] separated Example: field1.field2"
// @Param limit query string false "Rows to limit in response (Default: 10,000)"
// @Param page query int 0 "Pagination page"
// @Param orderBy query string false "Order by [field]"
// @Param orderDirection query string false "Order by field direction"
// @Param select query string false "Column names [.] separated to fetch specific fields in response"
// @Success 200 {array} models.CharacterCorpseItem
// @Failure 500 {string} string "Bad query request"
// @Router /character_corpse_items [get]
func (e *CharacterCorpseItemController) listCharacterCorpseItems(c echo.Context) error {
	var results []models.CharacterCorpseItem
	err := e.db.QueryContext(models.CharacterCorpseItem{}, c).Find(&results).Error
	if err != nil {
		return c.JSON(http.StatusInternalServerError, echo.Map{"error": err})
	}

	return c.JSON(http.StatusOK, results)
}

// getCharacterCorpseItem godoc
// @Id getCharacterCorpseItem
// @Summary Gets CharacterCorpseItem
// @Accept json
// @Produce json
// @Tags CharacterCorpseItem
// @Param id path int true "Id"
// @Param includes query string false "Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names"
// @Param select query string false "Column names [.] separated to fetch specific fields in response"
// @Success 200 {array} models.CharacterCorpseItem
// @Failure 404 {string} string "Entity not found"
// @Failure 500 {string} string "Cannot find param"
// @Failure 500 {string} string "Bad query request"
// @Router /character_corpse_item/{id} [get]
func (e *CharacterCorpseItemController) getCharacterCorpseItem(c echo.Context) error {
	var params []interface{}
	var keys []string

	// primary key param
	corpseId, err := strconv.Atoi(c.Param("corpseId"))
	if err != nil {
		return c.JSON(http.StatusInternalServerError, echo.Map{"error": "Cannot find param [CorpseId]"})
	}
	params = append(params, corpseId)
	keys = append(keys, "corpse_id = ?")

	// key param [equip_slot] position [2] type [int]
	if len(c.QueryParam("equip_slot")) > 0 {
		equipSlotParam, err := strconv.Atoi(c.QueryParam("equip_slot"))
		if err != nil {
			return c.JSON(http.StatusInternalServerError, echo.Map{"error": fmt.Sprintf("Error parsing query param [equip_slot] err [%s]", err.Error())})
		}

		params = append(params, equipSlotParam)
		keys = append(keys, "equip_slot = ?")
	}

	// query builder
	var result models.CharacterCorpseItem
	query := e.db.QueryContext(models.CharacterCorpseItem{}, c)
	for i, _ := range keys {
		query = query.Where(keys[i], params[i])
	}

	// grab first entry
	err = query.First(&result).Error
	if err != nil {
		return c.JSON(http.StatusInternalServerError, echo.Map{"error": err.Error()})
	}

	// couldn't find entity
	if result.CorpseId == 0 {
		return c.JSON(http.StatusNotFound, echo.Map{"error": "Cannot find entity"})
	}

	return c.JSON(http.StatusOK, result)
}

// updateCharacterCorpseItem godoc
// @Id updateCharacterCorpseItem
// @Summary Updates CharacterCorpseItem
// @Accept json
// @Produce json
// @Tags CharacterCorpseItem
// @Param id path int true "Id"
// @Param character_corpse_item body models.CharacterCorpseItem true "CharacterCorpseItem"
// @Success 200 {array} models.CharacterCorpseItem
// @Failure 404 {string} string "Cannot find entity"
// @Failure 500 {string} string "Error binding to entity"
// @Failure 500 {string} string "Error updating entity"
// @Router /character_corpse_item/{id} [patch]
func (e *CharacterCorpseItemController) updateCharacterCorpseItem(c echo.Context) error {
	request := new(models.CharacterCorpseItem)
	if err := c.Bind(request); err != nil {
		return c.JSON(
			http.StatusInternalServerError,
			echo.Map{"error": fmt.Sprintf("Error binding to entity [%v]", err.Error())},
		)
	}

	var params []interface{}
	var keys []string

	// primary key param
	corpseId, err := strconv.Atoi(c.Param("corpseId"))
	if err != nil {
		return c.JSON(http.StatusInternalServerError, echo.Map{"error": "Cannot find param [CorpseId]"})
	}
	params = append(params, corpseId)
	keys = append(keys, "corpse_id = ?")

	// key param [equip_slot] position [2] type [int]
	if len(c.QueryParam("equip_slot")) > 0 {
		equipSlotParam, err := strconv.Atoi(c.QueryParam("equip_slot"))
		if err != nil {
			return c.JSON(http.StatusInternalServerError, echo.Map{"error": fmt.Sprintf("Error parsing query param [equip_slot] err [%s]", err.Error())})
		}

		params = append(params, equipSlotParam)
		keys = append(keys, "equip_slot = ?")
	}

	// query builder
	var result models.CharacterCorpseItem
	query := e.db.QueryContext(models.CharacterCorpseItem{}, c)
	for i, _ := range keys {
		query = query.Where(keys[i], params[i])
	}

	// grab first entry
	err = query.First(&result).Error
	if err != nil {
		return c.JSON(http.StatusInternalServerError, echo.Map{"error": fmt.Sprintf("Cannot find entity [%s]", err.Error())})
	}

	// save top-level using only changes
	diff := database.ResultDifference(result, request)
	err = query.Session(&gorm.Session{FullSaveAssociations: false}).Updates(diff).Error
	if err != nil {
		return c.JSON(http.StatusInternalServerError, echo.Map{"error": fmt.Sprintf("Error updating entity [%v]", err.Error())})
	}

	// log update event
	if e.db.GetSpireDb() != nil && len(diff) > 0 {
		// build ids
		var ids []string
		for i, _ := range keys {
			param := fmt.Sprintf("%v", params[i])
			ids = append(ids, fmt.Sprintf("%v", strings.ReplaceAll(keys[i], "?", param)))
		}
		// build fields updated
		var fieldsUpdated []string
		for k, v := range diff {
			fieldsUpdated = append(fieldsUpdated, fmt.Sprintf("%v = %v", k, v))
		}
		// record event
		event := fmt.Sprintf("Updated [CharacterCorpseItem] [%v] fields [%v]", strings.Join(ids, ", "), strings.Join(fieldsUpdated, ", "))
		e.auditLog.LogUserEvent(c, "UPDATE", event)
	}

	return c.JSON(http.StatusOK, request)
}

// createCharacterCorpseItem godoc
// @Id createCharacterCorpseItem
// @Summary Creates CharacterCorpseItem
// @Accept json
// @Produce json
// @Param character_corpse_item body models.CharacterCorpseItem true "CharacterCorpseItem"
// @Tags CharacterCorpseItem
// @Success 200 {array} models.CharacterCorpseItem
// @Failure 500 {string} string "Error binding to entity"
// @Failure 500 {string} string "Error inserting entity"
// @Router /character_corpse_item [put]
func (e *CharacterCorpseItemController) createCharacterCorpseItem(c echo.Context) error {
	characterCorpseItem := new(models.CharacterCorpseItem)
	if err := c.Bind(characterCorpseItem); err != nil {
		return c.JSON(
			http.StatusInternalServerError,
			echo.Map{"error": fmt.Sprintf("Error binding to entity [%v]", err.Error())},
		)
	}

	db := e.db.Get(models.CharacterCorpseItem{}, c).Model(&models.CharacterCorpseItem{})

	// save associations
	if c.QueryParam("save_associations") != "true" {
		db = db.Omit(clause.Associations)
	}

	err := db.Create(&characterCorpseItem).Error
	if err != nil {
		return c.JSON(
			http.StatusInternalServerError,
			echo.Map{"error": fmt.Sprintf("Error inserting entity [%v]", err.Error())},
		)
	}

	// log create event
	if e.db.GetSpireDb() != nil {
		// diff between an empty model and the created
		diff := database.ResultDifference(models.CharacterCorpseItem{}, characterCorpseItem)
		// build fields created
		var fields []string
		for k, v := range diff {
			fields = append(fields, fmt.Sprintf("%v = %v", k, v))
		}
		// record event
		event := fmt.Sprintf("Created [CharacterCorpseItem] [%v] data [%v]", characterCorpseItem.CorpseId, strings.Join(fields, ", "))
		e.auditLog.LogUserEvent(c, "CREATE", event)
	}

	return c.JSON(http.StatusOK, characterCorpseItem)
}

// deleteCharacterCorpseItem godoc
// @Id deleteCharacterCorpseItem
// @Summary Deletes CharacterCorpseItem
// @Accept json
// @Produce json
// @Tags CharacterCorpseItem
// @Param id path int true "corpseId"
// @Success 200 {string} string "Entity deleted successfully"
// @Failure 404 {string} string "Cannot find entity"
// @Failure 500 {string} string "Error binding to entity"
// @Failure 500 {string} string "Error deleting entity"
// @Router /character_corpse_item/{id} [delete]
func (e *CharacterCorpseItemController) deleteCharacterCorpseItem(c echo.Context) error {
	var params []interface{}
	var keys []string

	// primary key param
	corpseId, err := strconv.Atoi(c.Param("corpseId"))
	if err != nil {
		e.logger.Error(err)
	}
	params = append(params, corpseId)
	keys = append(keys, "corpse_id = ?")

	// key param [equip_slot] position [2] type [int]
	if len(c.QueryParam("equip_slot")) > 0 {
		equipSlotParam, err := strconv.Atoi(c.QueryParam("equip_slot"))
		if err != nil {
			return c.JSON(http.StatusInternalServerError, echo.Map{"error": fmt.Sprintf("Error parsing query param [equip_slot] err [%s]", err.Error())})
		}

		params = append(params, equipSlotParam)
		keys = append(keys, "equip_slot = ?")
	}

	// query builder
	var result models.CharacterCorpseItem
	query := e.db.QueryContext(models.CharacterCorpseItem{}, c)
	for i, _ := range keys {
		query = query.Where(keys[i], params[i])
	}

	// grab first entry
	err = query.First(&result).Error
	if err != nil {
		return c.JSON(http.StatusInternalServerError, echo.Map{"error": err.Error()})
	}

	err = query.Limit(10000).Delete(&result).Error
	if err != nil {
		return c.JSON(http.StatusInternalServerError, echo.Map{"error": "Error deleting entity"})
	}

	// log delete event
	if e.db.GetSpireDb() != nil {
		// build ids
		var ids []string
		for i, _ := range keys {
			param := fmt.Sprintf("%v", params[i])
			ids = append(ids, fmt.Sprintf("%v", strings.ReplaceAll(keys[i], "?", param)))
		}
		// record event
		event := fmt.Sprintf("Deleted [CharacterCorpseItem] [%v] keys [%v]", result.CorpseId, strings.Join(ids, ", "))
		e.auditLog.LogUserEvent(c, "DELETE", event)
	}

	return c.JSON(http.StatusOK, echo.Map{"success": "Entity deleted successfully"})
}

// getCharacterCorpseItemsBulk godoc
// @Id getCharacterCorpseItemsBulk
// @Summary Gets CharacterCorpseItems in bulk
// @Accept json
// @Produce json
// @Param Body body BulkFetchByIdsGetRequest true "body"
// @Tags CharacterCorpseItem
// @Success 200 {array} models.CharacterCorpseItem
// @Failure 500 {string} string "Bad query request"
// @Router /character_corpse_items/bulk [post]
func (e *CharacterCorpseItemController) getCharacterCorpseItemsBulk(c echo.Context) error {
	var results []models.CharacterCorpseItem

	r := new(BulkFetchByIdsGetRequest)
	if err := c.Bind(r); err != nil {
		return c.JSON(
			http.StatusInternalServerError,
			echo.Map{"error": fmt.Sprintf("Error binding to bulk request: [%v]", err.Error())},
		)
	}

	if len(r.IDs) == 0 {
		return c.JSON(
			http.StatusOK,
			echo.Map{"error": fmt.Sprintf("Missing request field data 'ids'")},
		)
	}

	err := e.db.QueryContext(models.CharacterCorpseItem{}, c).Find(&results, r.IDs).Error
	if err != nil {
		return c.JSON(http.StatusInternalServerError, echo.Map{"error": err.Error()})
	}

	return c.JSON(http.StatusOK, results)
}

// getCharacterCorpseItemsCount godoc
// @Id getCharacterCorpseItemsCount
// @Summary Counts CharacterCorpseItems
// @Accept json
// @Produce json
// @Tags CharacterCorpseItem
// @Param includes query string false "Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names"
// @Param where query string false "Filter on specific fields. Multiple conditions [.] separated Example: col_like_value.col2__val2"
// @Param whereOr query string false "Filter on specific fields (Chained ors). Multiple conditions [.] separated Example: col_like_value.col2__val2"
// @Param groupBy query string false "Group by field. Multiple conditions [.] separated Example: field1.field2"
// @Param limit query string false "Rows to limit in response (Default: 10,000)"
// @Param page query int 0 "Pagination page"
// @Param orderBy query string false "Order by [field]"
// @Param orderDirection query string false "Order by field direction"
// @Param select query string false "Column names [.] separated to fetch specific fields in response"
// @Success 200 {array} models.CharacterCorpseItem
// @Failure 500 {string} string "Bad query request"
// @Router /character_corpse_items/count [get]
func (e *CharacterCorpseItemController) getCharacterCorpseItemsCount(c echo.Context) error {
	var count int64
	err := e.db.QueryContext(models.CharacterCorpseItem{}, c).Count(&count).Error
	if err != nil {
		return c.JSON(http.StatusInternalServerError, echo.Map{"error": err})
	}

	return c.JSON(http.StatusOK, echo.Map{"count": count})
}