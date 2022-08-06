package models

type Task struct {
	ID                    uint               `json:"id" gorm:"Column:id"`
	Type                  int8               `json:"type" gorm:"Column:type"`
	Duration              uint               `json:"duration" gorm:"Column:duration"`
	DurationCode          int8               `json:"duration_code" gorm:"Column:duration_code"`
	Title                 string             `json:"title" gorm:"Column:title"`
	Description           string             `json:"description" gorm:"Column:description"`
	Reward                string             `json:"reward" gorm:"Column:reward"`
	Rewardid              uint               `json:"rewardid" gorm:"Column:rewardid"`
	Cashreward            uint               `json:"cashreward" gorm:"Column:cashreward"`
	Xpreward              int                `json:"xpreward" gorm:"Column:xpreward"`
	Rewardmethod          uint8              `json:"rewardmethod" gorm:"Column:rewardmethod"`
	RewardPoints          int                `json:"reward_points" gorm:"Column:reward_points"`
	RewardPointType       int                `json:"reward_point_type" gorm:"Column:reward_point_type"`
	Minlevel              uint8              `json:"minlevel" gorm:"Column:minlevel"`
	Maxlevel              uint8              `json:"maxlevel" gorm:"Column:maxlevel"`
	LevelSpread           uint               `json:"level_spread" gorm:"Column:level_spread"`
	MinPlayers            uint               `json:"min_players" gorm:"Column:min_players"`
	MaxPlayers            uint               `json:"max_players" gorm:"Column:max_players"`
	Repeatable            uint8              `json:"repeatable" gorm:"Column:repeatable"`
	FactionReward         int                `json:"faction_reward" gorm:"Column:faction_reward"`
	CompletionEmote       string             `json:"completion_emote" gorm:"Column:completion_emote"`
	ReplayTimerGroup      uint               `json:"replay_timer_group" gorm:"Column:replay_timer_group"`
	ReplayTimerSeconds    uint               `json:"replay_timer_seconds" gorm:"Column:replay_timer_seconds"`
	RequestTimerGroup     uint               `json:"request_timer_group" gorm:"Column:request_timer_group"`
	RequestTimerSeconds   uint               `json:"request_timer_seconds" gorm:"Column:request_timer_seconds"`
	DzTemplateId          uint               `json:"dz_template_id" gorm:"Column:dz_template_id"`
	LockActivityId        int                `json:"lock_activity_id" gorm:"Column:lock_activity_id"`
	TaskActivities        []TaskActivity     `json:"task_activities,omitempty" gorm:"foreignKey:taskid;references:id"`
	Tasksets              []Taskset          `json:"tasksets,omitempty" gorm:"foreignKey:taskid;references:id"`
	AlternateCurrency     *AlternateCurrency `json:"alternate_currency,omitempty" gorm:"foreignKey:reward_point_type;references:id"`
}

func (Task) TableName() string {
    return "tasks"
}

func (Task) Relationships() []string {
    return []string{
		"AlternateCurrency",
		"AlternateCurrency.Item",
		"AlternateCurrency.Item.AlternateCurrencies",
		"AlternateCurrency.Item.CharacterCorpseItems",
		"AlternateCurrency.Item.DiscoveredItems",
		"AlternateCurrency.Item.Doors",
		"AlternateCurrency.Item.Doors.Item",
		"AlternateCurrency.Item.Fishings",
		"AlternateCurrency.Item.Fishings.Item",
		"AlternateCurrency.Item.Fishings.NpcType",
		"AlternateCurrency.Item.Fishings.NpcType.AlternateCurrency",
		"AlternateCurrency.Item.Fishings.NpcType.Loottable",
		"AlternateCurrency.Item.Fishings.NpcType.Loottable.LoottableEntries",
		"AlternateCurrency.Item.Fishings.NpcType.Loottable.LoottableEntries.Lootdrop",
		"AlternateCurrency.Item.Fishings.NpcType.Loottable.LoottableEntries.Lootdrop.LootdropEntries",
		"AlternateCurrency.Item.Fishings.NpcType.Loottable.LoottableEntries.Lootdrop.LootdropEntries.Item",
		"AlternateCurrency.Item.Fishings.NpcType.Loottable.LoottableEntries.Lootdrop.LootdropEntries.Lootdrop",
		"AlternateCurrency.Item.Fishings.NpcType.Loottable.LoottableEntries.Lootdrop.LoottableEntries",
		"AlternateCurrency.Item.Fishings.NpcType.Loottable.LoottableEntries.Loottable",
		"AlternateCurrency.Item.Fishings.NpcType.Loottable.NpcTypes",
		"AlternateCurrency.Item.Fishings.NpcType.Merchantlists",
		"AlternateCurrency.Item.Fishings.NpcType.Merchantlists.Items",
		"AlternateCurrency.Item.Fishings.NpcType.Merchantlists.NpcTypes",
		"AlternateCurrency.Item.Fishings.NpcType.NpcEmotes",
		"AlternateCurrency.Item.Fishings.NpcType.NpcFactions",
		"AlternateCurrency.Item.Fishings.NpcType.NpcFactions.NpcFactionEntries",
		"AlternateCurrency.Item.Fishings.NpcType.NpcFactions.NpcFactionEntries.FactionList",
		"AlternateCurrency.Item.Fishings.NpcType.NpcSpell",
		"AlternateCurrency.Item.Fishings.NpcType.NpcSpell.NpcSpellsEntries",
		"AlternateCurrency.Item.Fishings.NpcType.NpcSpell.NpcSpellsEntries.SpellsNew",
		"AlternateCurrency.Item.Fishings.NpcType.NpcSpell.NpcSpellsEntries.SpellsNew.Aura",
		"AlternateCurrency.Item.Fishings.NpcType.NpcSpell.NpcSpellsEntries.SpellsNew.Aura.SpellsNew",
		"AlternateCurrency.Item.Fishings.NpcType.NpcSpell.NpcSpellsEntries.SpellsNew.BlockedSpells",
		"AlternateCurrency.Item.Fishings.NpcType.NpcSpell.NpcSpellsEntries.SpellsNew.Damageshieldtypes",
		"AlternateCurrency.Item.Fishings.NpcType.NpcSpell.NpcSpellsEntries.SpellsNew.Items",
		"AlternateCurrency.Item.Fishings.NpcType.NpcSpell.NpcSpellsEntries.SpellsNew.NpcSpellsEntries",
		"AlternateCurrency.Item.Fishings.NpcType.NpcSpell.NpcSpellsEntries.SpellsNew.SpellBuckets",
		"AlternateCurrency.Item.Fishings.NpcType.NpcSpell.NpcSpellsEntries.SpellsNew.SpellGlobals",
		"AlternateCurrency.Item.Fishings.NpcType.NpcTypesTint",
		"AlternateCurrency.Item.Fishings.NpcType.Spawnentries",
		"AlternateCurrency.Item.Fishings.NpcType.Spawnentries.NpcType",
		"AlternateCurrency.Item.Fishings.NpcType.Spawnentries.Spawngroup",
		"AlternateCurrency.Item.Fishings.NpcType.Spawnentries.Spawngroup.Spawn2",
		"AlternateCurrency.Item.Fishings.NpcType.Spawnentries.Spawngroup.Spawn2.Spawnentries",
		"AlternateCurrency.Item.Fishings.NpcType.Spawnentries.Spawngroup.Spawn2.Spawngroup",
		"AlternateCurrency.Item.Fishings.Zone",
		"AlternateCurrency.Item.Forages",
		"AlternateCurrency.Item.Forages.Item",
		"AlternateCurrency.Item.Forages.Zone",
		"AlternateCurrency.Item.GroundSpawns",
		"AlternateCurrency.Item.GroundSpawns.Zone",
		"AlternateCurrency.Item.ItemTicks",
		"AlternateCurrency.Item.Keyrings",
		"AlternateCurrency.Item.LootdropEntries",
		"AlternateCurrency.Item.LootdropEntries.Item",
		"AlternateCurrency.Item.LootdropEntries.Lootdrop",
		"AlternateCurrency.Item.LootdropEntries.Lootdrop.LootdropEntries",
		"AlternateCurrency.Item.LootdropEntries.Lootdrop.LoottableEntries",
		"AlternateCurrency.Item.LootdropEntries.Lootdrop.LoottableEntries.Lootdrop",
		"AlternateCurrency.Item.LootdropEntries.Lootdrop.LoottableEntries.Loottable",
		"AlternateCurrency.Item.LootdropEntries.Lootdrop.LoottableEntries.Loottable.LoottableEntries",
		"AlternateCurrency.Item.LootdropEntries.Lootdrop.LoottableEntries.Loottable.NpcTypes",
		"AlternateCurrency.Item.LootdropEntries.Lootdrop.LoottableEntries.Loottable.NpcTypes.AlternateCurrency",
		"AlternateCurrency.Item.LootdropEntries.Lootdrop.LoottableEntries.Loottable.NpcTypes.Loottable",
		"AlternateCurrency.Item.LootdropEntries.Lootdrop.LoottableEntries.Loottable.NpcTypes.Merchantlists",
		"AlternateCurrency.Item.LootdropEntries.Lootdrop.LoottableEntries.Loottable.NpcTypes.Merchantlists.Items",
		"AlternateCurrency.Item.LootdropEntries.Lootdrop.LoottableEntries.Loottable.NpcTypes.Merchantlists.NpcTypes",
		"AlternateCurrency.Item.LootdropEntries.Lootdrop.LoottableEntries.Loottable.NpcTypes.NpcEmotes",
		"AlternateCurrency.Item.LootdropEntries.Lootdrop.LoottableEntries.Loottable.NpcTypes.NpcFactions",
		"AlternateCurrency.Item.LootdropEntries.Lootdrop.LoottableEntries.Loottable.NpcTypes.NpcFactions.NpcFactionEntries",
		"AlternateCurrency.Item.LootdropEntries.Lootdrop.LoottableEntries.Loottable.NpcTypes.NpcFactions.NpcFactionEntries.FactionList",
		"AlternateCurrency.Item.LootdropEntries.Lootdrop.LoottableEntries.Loottable.NpcTypes.NpcSpell",
		"AlternateCurrency.Item.LootdropEntries.Lootdrop.LoottableEntries.Loottable.NpcTypes.NpcSpell.NpcSpellsEntries",
		"AlternateCurrency.Item.LootdropEntries.Lootdrop.LoottableEntries.Loottable.NpcTypes.NpcSpell.NpcSpellsEntries.SpellsNew",
		"AlternateCurrency.Item.LootdropEntries.Lootdrop.LoottableEntries.Loottable.NpcTypes.NpcSpell.NpcSpellsEntries.SpellsNew.Aura",
		"AlternateCurrency.Item.LootdropEntries.Lootdrop.LoottableEntries.Loottable.NpcTypes.NpcSpell.NpcSpellsEntries.SpellsNew.Aura.SpellsNew",
		"AlternateCurrency.Item.LootdropEntries.Lootdrop.LoottableEntries.Loottable.NpcTypes.NpcSpell.NpcSpellsEntries.SpellsNew.BlockedSpells",
		"AlternateCurrency.Item.LootdropEntries.Lootdrop.LoottableEntries.Loottable.NpcTypes.NpcSpell.NpcSpellsEntries.SpellsNew.Damageshieldtypes",
		"AlternateCurrency.Item.LootdropEntries.Lootdrop.LoottableEntries.Loottable.NpcTypes.NpcSpell.NpcSpellsEntries.SpellsNew.Items",
		"AlternateCurrency.Item.LootdropEntries.Lootdrop.LoottableEntries.Loottable.NpcTypes.NpcSpell.NpcSpellsEntries.SpellsNew.NpcSpellsEntries",
		"AlternateCurrency.Item.LootdropEntries.Lootdrop.LoottableEntries.Loottable.NpcTypes.NpcSpell.NpcSpellsEntries.SpellsNew.SpellBuckets",
		"AlternateCurrency.Item.LootdropEntries.Lootdrop.LoottableEntries.Loottable.NpcTypes.NpcSpell.NpcSpellsEntries.SpellsNew.SpellGlobals",
		"AlternateCurrency.Item.LootdropEntries.Lootdrop.LoottableEntries.Loottable.NpcTypes.NpcTypesTint",
		"AlternateCurrency.Item.LootdropEntries.Lootdrop.LoottableEntries.Loottable.NpcTypes.Spawnentries",
		"AlternateCurrency.Item.LootdropEntries.Lootdrop.LoottableEntries.Loottable.NpcTypes.Spawnentries.NpcType",
		"AlternateCurrency.Item.LootdropEntries.Lootdrop.LoottableEntries.Loottable.NpcTypes.Spawnentries.Spawngroup",
		"AlternateCurrency.Item.LootdropEntries.Lootdrop.LoottableEntries.Loottable.NpcTypes.Spawnentries.Spawngroup.Spawn2",
		"AlternateCurrency.Item.LootdropEntries.Lootdrop.LoottableEntries.Loottable.NpcTypes.Spawnentries.Spawngroup.Spawn2.Spawnentries",
		"AlternateCurrency.Item.LootdropEntries.Lootdrop.LoottableEntries.Loottable.NpcTypes.Spawnentries.Spawngroup.Spawn2.Spawngroup",
		"AlternateCurrency.Item.Merchantlists",
		"AlternateCurrency.Item.Merchantlists.Items",
		"AlternateCurrency.Item.Merchantlists.NpcTypes",
		"AlternateCurrency.Item.Merchantlists.NpcTypes.AlternateCurrency",
		"AlternateCurrency.Item.Merchantlists.NpcTypes.Loottable",
		"AlternateCurrency.Item.Merchantlists.NpcTypes.Loottable.LoottableEntries",
		"AlternateCurrency.Item.Merchantlists.NpcTypes.Loottable.LoottableEntries.Lootdrop",
		"AlternateCurrency.Item.Merchantlists.NpcTypes.Loottable.LoottableEntries.Lootdrop.LootdropEntries",
		"AlternateCurrency.Item.Merchantlists.NpcTypes.Loottable.LoottableEntries.Lootdrop.LootdropEntries.Item",
		"AlternateCurrency.Item.Merchantlists.NpcTypes.Loottable.LoottableEntries.Lootdrop.LootdropEntries.Lootdrop",
		"AlternateCurrency.Item.Merchantlists.NpcTypes.Loottable.LoottableEntries.Lootdrop.LoottableEntries",
		"AlternateCurrency.Item.Merchantlists.NpcTypes.Loottable.LoottableEntries.Loottable",
		"AlternateCurrency.Item.Merchantlists.NpcTypes.Loottable.NpcTypes",
		"AlternateCurrency.Item.Merchantlists.NpcTypes.Merchantlists",
		"AlternateCurrency.Item.Merchantlists.NpcTypes.NpcEmotes",
		"AlternateCurrency.Item.Merchantlists.NpcTypes.NpcFactions",
		"AlternateCurrency.Item.Merchantlists.NpcTypes.NpcFactions.NpcFactionEntries",
		"AlternateCurrency.Item.Merchantlists.NpcTypes.NpcFactions.NpcFactionEntries.FactionList",
		"AlternateCurrency.Item.Merchantlists.NpcTypes.NpcSpell",
		"AlternateCurrency.Item.Merchantlists.NpcTypes.NpcSpell.NpcSpellsEntries",
		"AlternateCurrency.Item.Merchantlists.NpcTypes.NpcSpell.NpcSpellsEntries.SpellsNew",
		"AlternateCurrency.Item.Merchantlists.NpcTypes.NpcSpell.NpcSpellsEntries.SpellsNew.Aura",
		"AlternateCurrency.Item.Merchantlists.NpcTypes.NpcSpell.NpcSpellsEntries.SpellsNew.Aura.SpellsNew",
		"AlternateCurrency.Item.Merchantlists.NpcTypes.NpcSpell.NpcSpellsEntries.SpellsNew.BlockedSpells",
		"AlternateCurrency.Item.Merchantlists.NpcTypes.NpcSpell.NpcSpellsEntries.SpellsNew.Damageshieldtypes",
		"AlternateCurrency.Item.Merchantlists.NpcTypes.NpcSpell.NpcSpellsEntries.SpellsNew.Items",
		"AlternateCurrency.Item.Merchantlists.NpcTypes.NpcSpell.NpcSpellsEntries.SpellsNew.NpcSpellsEntries",
		"AlternateCurrency.Item.Merchantlists.NpcTypes.NpcSpell.NpcSpellsEntries.SpellsNew.SpellBuckets",
		"AlternateCurrency.Item.Merchantlists.NpcTypes.NpcSpell.NpcSpellsEntries.SpellsNew.SpellGlobals",
		"AlternateCurrency.Item.Merchantlists.NpcTypes.NpcTypesTint",
		"AlternateCurrency.Item.Merchantlists.NpcTypes.Spawnentries",
		"AlternateCurrency.Item.Merchantlists.NpcTypes.Spawnentries.NpcType",
		"AlternateCurrency.Item.Merchantlists.NpcTypes.Spawnentries.Spawngroup",
		"AlternateCurrency.Item.Merchantlists.NpcTypes.Spawnentries.Spawngroup.Spawn2",
		"AlternateCurrency.Item.Merchantlists.NpcTypes.Spawnentries.Spawngroup.Spawn2.Spawnentries",
		"AlternateCurrency.Item.Merchantlists.NpcTypes.Spawnentries.Spawngroup.Spawn2.Spawngroup",
		"AlternateCurrency.Item.ObjectContents",
		"AlternateCurrency.Item.Objects",
		"AlternateCurrency.Item.Objects.Item",
		"AlternateCurrency.Item.Objects.Zone",
		"AlternateCurrency.Item.StartingItems",
		"AlternateCurrency.Item.StartingItems.Item",
		"AlternateCurrency.Item.StartingItems.Zone",
		"AlternateCurrency.Item.Tasks",
		"AlternateCurrency.Item.TradeskillRecipeEntries",
		"AlternateCurrency.Item.TradeskillRecipeEntries.TradeskillRecipe",
		"AlternateCurrency.Item.TributeLevels",
		"TaskActivities",
		"TaskActivities.Goallists",
		"TaskActivities.NpcType",
		"TaskActivities.NpcType.AlternateCurrency",
		"TaskActivities.NpcType.AlternateCurrency.Item",
		"TaskActivities.NpcType.AlternateCurrency.Item.AlternateCurrencies",
		"TaskActivities.NpcType.AlternateCurrency.Item.CharacterCorpseItems",
		"TaskActivities.NpcType.AlternateCurrency.Item.DiscoveredItems",
		"TaskActivities.NpcType.AlternateCurrency.Item.Doors",
		"TaskActivities.NpcType.AlternateCurrency.Item.Doors.Item",
		"TaskActivities.NpcType.AlternateCurrency.Item.Fishings",
		"TaskActivities.NpcType.AlternateCurrency.Item.Fishings.Item",
		"TaskActivities.NpcType.AlternateCurrency.Item.Fishings.NpcType",
		"TaskActivities.NpcType.AlternateCurrency.Item.Fishings.Zone",
		"TaskActivities.NpcType.AlternateCurrency.Item.Forages",
		"TaskActivities.NpcType.AlternateCurrency.Item.Forages.Item",
		"TaskActivities.NpcType.AlternateCurrency.Item.Forages.Zone",
		"TaskActivities.NpcType.AlternateCurrency.Item.GroundSpawns",
		"TaskActivities.NpcType.AlternateCurrency.Item.GroundSpawns.Zone",
		"TaskActivities.NpcType.AlternateCurrency.Item.ItemTicks",
		"TaskActivities.NpcType.AlternateCurrency.Item.Keyrings",
		"TaskActivities.NpcType.AlternateCurrency.Item.LootdropEntries",
		"TaskActivities.NpcType.AlternateCurrency.Item.LootdropEntries.Item",
		"TaskActivities.NpcType.AlternateCurrency.Item.LootdropEntries.Lootdrop",
		"TaskActivities.NpcType.AlternateCurrency.Item.LootdropEntries.Lootdrop.LootdropEntries",
		"TaskActivities.NpcType.AlternateCurrency.Item.LootdropEntries.Lootdrop.LoottableEntries",
		"TaskActivities.NpcType.AlternateCurrency.Item.LootdropEntries.Lootdrop.LoottableEntries.Lootdrop",
		"TaskActivities.NpcType.AlternateCurrency.Item.LootdropEntries.Lootdrop.LoottableEntries.Loottable",
		"TaskActivities.NpcType.AlternateCurrency.Item.LootdropEntries.Lootdrop.LoottableEntries.Loottable.LoottableEntries",
		"TaskActivities.NpcType.AlternateCurrency.Item.LootdropEntries.Lootdrop.LoottableEntries.Loottable.NpcTypes",
		"TaskActivities.NpcType.AlternateCurrency.Item.Merchantlists",
		"TaskActivities.NpcType.AlternateCurrency.Item.Merchantlists.Items",
		"TaskActivities.NpcType.AlternateCurrency.Item.Merchantlists.NpcTypes",
		"TaskActivities.NpcType.AlternateCurrency.Item.ObjectContents",
		"TaskActivities.NpcType.AlternateCurrency.Item.Objects",
		"TaskActivities.NpcType.AlternateCurrency.Item.Objects.Item",
		"TaskActivities.NpcType.AlternateCurrency.Item.Objects.Zone",
		"TaskActivities.NpcType.AlternateCurrency.Item.StartingItems",
		"TaskActivities.NpcType.AlternateCurrency.Item.StartingItems.Item",
		"TaskActivities.NpcType.AlternateCurrency.Item.StartingItems.Zone",
		"TaskActivities.NpcType.AlternateCurrency.Item.Tasks",
		"TaskActivities.NpcType.AlternateCurrency.Item.TradeskillRecipeEntries",
		"TaskActivities.NpcType.AlternateCurrency.Item.TradeskillRecipeEntries.TradeskillRecipe",
		"TaskActivities.NpcType.AlternateCurrency.Item.TributeLevels",
		"TaskActivities.NpcType.Loottable",
		"TaskActivities.NpcType.Loottable.LoottableEntries",
		"TaskActivities.NpcType.Loottable.LoottableEntries.Lootdrop",
		"TaskActivities.NpcType.Loottable.LoottableEntries.Lootdrop.LootdropEntries",
		"TaskActivities.NpcType.Loottable.LoottableEntries.Lootdrop.LootdropEntries.Item",
		"TaskActivities.NpcType.Loottable.LoottableEntries.Lootdrop.LootdropEntries.Item.AlternateCurrencies",
		"TaskActivities.NpcType.Loottable.LoottableEntries.Lootdrop.LootdropEntries.Item.AlternateCurrencies.Item",
		"TaskActivities.NpcType.Loottable.LoottableEntries.Lootdrop.LootdropEntries.Item.CharacterCorpseItems",
		"TaskActivities.NpcType.Loottable.LoottableEntries.Lootdrop.LootdropEntries.Item.DiscoveredItems",
		"TaskActivities.NpcType.Loottable.LoottableEntries.Lootdrop.LootdropEntries.Item.Doors",
		"TaskActivities.NpcType.Loottable.LoottableEntries.Lootdrop.LootdropEntries.Item.Doors.Item",
		"TaskActivities.NpcType.Loottable.LoottableEntries.Lootdrop.LootdropEntries.Item.Fishings",
		"TaskActivities.NpcType.Loottable.LoottableEntries.Lootdrop.LootdropEntries.Item.Fishings.Item",
		"TaskActivities.NpcType.Loottable.LoottableEntries.Lootdrop.LootdropEntries.Item.Fishings.NpcType",
		"TaskActivities.NpcType.Loottable.LoottableEntries.Lootdrop.LootdropEntries.Item.Fishings.Zone",
		"TaskActivities.NpcType.Loottable.LoottableEntries.Lootdrop.LootdropEntries.Item.Forages",
		"TaskActivities.NpcType.Loottable.LoottableEntries.Lootdrop.LootdropEntries.Item.Forages.Item",
		"TaskActivities.NpcType.Loottable.LoottableEntries.Lootdrop.LootdropEntries.Item.Forages.Zone",
		"TaskActivities.NpcType.Loottable.LoottableEntries.Lootdrop.LootdropEntries.Item.GroundSpawns",
		"TaskActivities.NpcType.Loottable.LoottableEntries.Lootdrop.LootdropEntries.Item.GroundSpawns.Zone",
		"TaskActivities.NpcType.Loottable.LoottableEntries.Lootdrop.LootdropEntries.Item.ItemTicks",
		"TaskActivities.NpcType.Loottable.LoottableEntries.Lootdrop.LootdropEntries.Item.Keyrings",
		"TaskActivities.NpcType.Loottable.LoottableEntries.Lootdrop.LootdropEntries.Item.LootdropEntries",
		"TaskActivities.NpcType.Loottable.LoottableEntries.Lootdrop.LootdropEntries.Item.Merchantlists",
		"TaskActivities.NpcType.Loottable.LoottableEntries.Lootdrop.LootdropEntries.Item.Merchantlists.Items",
		"TaskActivities.NpcType.Loottable.LoottableEntries.Lootdrop.LootdropEntries.Item.Merchantlists.NpcTypes",
		"TaskActivities.NpcType.Loottable.LoottableEntries.Lootdrop.LootdropEntries.Item.ObjectContents",
		"TaskActivities.NpcType.Loottable.LoottableEntries.Lootdrop.LootdropEntries.Item.Objects",
		"TaskActivities.NpcType.Loottable.LoottableEntries.Lootdrop.LootdropEntries.Item.Objects.Item",
		"TaskActivities.NpcType.Loottable.LoottableEntries.Lootdrop.LootdropEntries.Item.Objects.Zone",
		"TaskActivities.NpcType.Loottable.LoottableEntries.Lootdrop.LootdropEntries.Item.StartingItems",
		"TaskActivities.NpcType.Loottable.LoottableEntries.Lootdrop.LootdropEntries.Item.StartingItems.Item",
		"TaskActivities.NpcType.Loottable.LoottableEntries.Lootdrop.LootdropEntries.Item.StartingItems.Zone",
		"TaskActivities.NpcType.Loottable.LoottableEntries.Lootdrop.LootdropEntries.Item.Tasks",
		"TaskActivities.NpcType.Loottable.LoottableEntries.Lootdrop.LootdropEntries.Item.TradeskillRecipeEntries",
		"TaskActivities.NpcType.Loottable.LoottableEntries.Lootdrop.LootdropEntries.Item.TradeskillRecipeEntries.TradeskillRecipe",
		"TaskActivities.NpcType.Loottable.LoottableEntries.Lootdrop.LootdropEntries.Item.TributeLevels",
		"TaskActivities.NpcType.Loottable.LoottableEntries.Lootdrop.LootdropEntries.Lootdrop",
		"TaskActivities.NpcType.Loottable.LoottableEntries.Lootdrop.LoottableEntries",
		"TaskActivities.NpcType.Loottable.LoottableEntries.Loottable",
		"TaskActivities.NpcType.Loottable.NpcTypes",
		"TaskActivities.NpcType.Merchantlists",
		"TaskActivities.NpcType.Merchantlists.Items",
		"TaskActivities.NpcType.Merchantlists.Items.AlternateCurrencies",
		"TaskActivities.NpcType.Merchantlists.Items.AlternateCurrencies.Item",
		"TaskActivities.NpcType.Merchantlists.Items.CharacterCorpseItems",
		"TaskActivities.NpcType.Merchantlists.Items.DiscoveredItems",
		"TaskActivities.NpcType.Merchantlists.Items.Doors",
		"TaskActivities.NpcType.Merchantlists.Items.Doors.Item",
		"TaskActivities.NpcType.Merchantlists.Items.Fishings",
		"TaskActivities.NpcType.Merchantlists.Items.Fishings.Item",
		"TaskActivities.NpcType.Merchantlists.Items.Fishings.NpcType",
		"TaskActivities.NpcType.Merchantlists.Items.Fishings.Zone",
		"TaskActivities.NpcType.Merchantlists.Items.Forages",
		"TaskActivities.NpcType.Merchantlists.Items.Forages.Item",
		"TaskActivities.NpcType.Merchantlists.Items.Forages.Zone",
		"TaskActivities.NpcType.Merchantlists.Items.GroundSpawns",
		"TaskActivities.NpcType.Merchantlists.Items.GroundSpawns.Zone",
		"TaskActivities.NpcType.Merchantlists.Items.ItemTicks",
		"TaskActivities.NpcType.Merchantlists.Items.Keyrings",
		"TaskActivities.NpcType.Merchantlists.Items.LootdropEntries",
		"TaskActivities.NpcType.Merchantlists.Items.LootdropEntries.Item",
		"TaskActivities.NpcType.Merchantlists.Items.LootdropEntries.Lootdrop",
		"TaskActivities.NpcType.Merchantlists.Items.LootdropEntries.Lootdrop.LootdropEntries",
		"TaskActivities.NpcType.Merchantlists.Items.LootdropEntries.Lootdrop.LoottableEntries",
		"TaskActivities.NpcType.Merchantlists.Items.LootdropEntries.Lootdrop.LoottableEntries.Lootdrop",
		"TaskActivities.NpcType.Merchantlists.Items.LootdropEntries.Lootdrop.LoottableEntries.Loottable",
		"TaskActivities.NpcType.Merchantlists.Items.LootdropEntries.Lootdrop.LoottableEntries.Loottable.LoottableEntries",
		"TaskActivities.NpcType.Merchantlists.Items.LootdropEntries.Lootdrop.LoottableEntries.Loottable.NpcTypes",
		"TaskActivities.NpcType.Merchantlists.Items.Merchantlists",
		"TaskActivities.NpcType.Merchantlists.Items.ObjectContents",
		"TaskActivities.NpcType.Merchantlists.Items.Objects",
		"TaskActivities.NpcType.Merchantlists.Items.Objects.Item",
		"TaskActivities.NpcType.Merchantlists.Items.Objects.Zone",
		"TaskActivities.NpcType.Merchantlists.Items.StartingItems",
		"TaskActivities.NpcType.Merchantlists.Items.StartingItems.Item",
		"TaskActivities.NpcType.Merchantlists.Items.StartingItems.Zone",
		"TaskActivities.NpcType.Merchantlists.Items.Tasks",
		"TaskActivities.NpcType.Merchantlists.Items.TradeskillRecipeEntries",
		"TaskActivities.NpcType.Merchantlists.Items.TradeskillRecipeEntries.TradeskillRecipe",
		"TaskActivities.NpcType.Merchantlists.Items.TributeLevels",
		"TaskActivities.NpcType.Merchantlists.NpcTypes",
		"TaskActivities.NpcType.NpcEmotes",
		"TaskActivities.NpcType.NpcFactions",
		"TaskActivities.NpcType.NpcFactions.NpcFactionEntries",
		"TaskActivities.NpcType.NpcFactions.NpcFactionEntries.FactionList",
		"TaskActivities.NpcType.NpcSpell",
		"TaskActivities.NpcType.NpcSpell.NpcSpellsEntries",
		"TaskActivities.NpcType.NpcSpell.NpcSpellsEntries.SpellsNew",
		"TaskActivities.NpcType.NpcSpell.NpcSpellsEntries.SpellsNew.Aura",
		"TaskActivities.NpcType.NpcSpell.NpcSpellsEntries.SpellsNew.Aura.SpellsNew",
		"TaskActivities.NpcType.NpcSpell.NpcSpellsEntries.SpellsNew.BlockedSpells",
		"TaskActivities.NpcType.NpcSpell.NpcSpellsEntries.SpellsNew.Damageshieldtypes",
		"TaskActivities.NpcType.NpcSpell.NpcSpellsEntries.SpellsNew.Items",
		"TaskActivities.NpcType.NpcSpell.NpcSpellsEntries.SpellsNew.Items.AlternateCurrencies",
		"TaskActivities.NpcType.NpcSpell.NpcSpellsEntries.SpellsNew.Items.AlternateCurrencies.Item",
		"TaskActivities.NpcType.NpcSpell.NpcSpellsEntries.SpellsNew.Items.CharacterCorpseItems",
		"TaskActivities.NpcType.NpcSpell.NpcSpellsEntries.SpellsNew.Items.DiscoveredItems",
		"TaskActivities.NpcType.NpcSpell.NpcSpellsEntries.SpellsNew.Items.Doors",
		"TaskActivities.NpcType.NpcSpell.NpcSpellsEntries.SpellsNew.Items.Doors.Item",
		"TaskActivities.NpcType.NpcSpell.NpcSpellsEntries.SpellsNew.Items.Fishings",
		"TaskActivities.NpcType.NpcSpell.NpcSpellsEntries.SpellsNew.Items.Fishings.Item",
		"TaskActivities.NpcType.NpcSpell.NpcSpellsEntries.SpellsNew.Items.Fishings.NpcType",
		"TaskActivities.NpcType.NpcSpell.NpcSpellsEntries.SpellsNew.Items.Fishings.Zone",
		"TaskActivities.NpcType.NpcSpell.NpcSpellsEntries.SpellsNew.Items.Forages",
		"TaskActivities.NpcType.NpcSpell.NpcSpellsEntries.SpellsNew.Items.Forages.Item",
		"TaskActivities.NpcType.NpcSpell.NpcSpellsEntries.SpellsNew.Items.Forages.Zone",
		"TaskActivities.NpcType.NpcSpell.NpcSpellsEntries.SpellsNew.Items.GroundSpawns",
		"TaskActivities.NpcType.NpcSpell.NpcSpellsEntries.SpellsNew.Items.GroundSpawns.Zone",
		"TaskActivities.NpcType.NpcSpell.NpcSpellsEntries.SpellsNew.Items.ItemTicks",
		"TaskActivities.NpcType.NpcSpell.NpcSpellsEntries.SpellsNew.Items.Keyrings",
		"TaskActivities.NpcType.NpcSpell.NpcSpellsEntries.SpellsNew.Items.LootdropEntries",
		"TaskActivities.NpcType.NpcSpell.NpcSpellsEntries.SpellsNew.Items.LootdropEntries.Item",
		"TaskActivities.NpcType.NpcSpell.NpcSpellsEntries.SpellsNew.Items.LootdropEntries.Lootdrop",
		"TaskActivities.NpcType.NpcSpell.NpcSpellsEntries.SpellsNew.Items.LootdropEntries.Lootdrop.LootdropEntries",
		"TaskActivities.NpcType.NpcSpell.NpcSpellsEntries.SpellsNew.Items.LootdropEntries.Lootdrop.LoottableEntries",
		"TaskActivities.NpcType.NpcSpell.NpcSpellsEntries.SpellsNew.Items.LootdropEntries.Lootdrop.LoottableEntries.Lootdrop",
		"TaskActivities.NpcType.NpcSpell.NpcSpellsEntries.SpellsNew.Items.LootdropEntries.Lootdrop.LoottableEntries.Loottable",
		"TaskActivities.NpcType.NpcSpell.NpcSpellsEntries.SpellsNew.Items.LootdropEntries.Lootdrop.LoottableEntries.Loottable.LoottableEntries",
		"TaskActivities.NpcType.NpcSpell.NpcSpellsEntries.SpellsNew.Items.LootdropEntries.Lootdrop.LoottableEntries.Loottable.NpcTypes",
		"TaskActivities.NpcType.NpcSpell.NpcSpellsEntries.SpellsNew.Items.Merchantlists",
		"TaskActivities.NpcType.NpcSpell.NpcSpellsEntries.SpellsNew.Items.Merchantlists.Items",
		"TaskActivities.NpcType.NpcSpell.NpcSpellsEntries.SpellsNew.Items.Merchantlists.NpcTypes",
		"TaskActivities.NpcType.NpcSpell.NpcSpellsEntries.SpellsNew.Items.ObjectContents",
		"TaskActivities.NpcType.NpcSpell.NpcSpellsEntries.SpellsNew.Items.Objects",
		"TaskActivities.NpcType.NpcSpell.NpcSpellsEntries.SpellsNew.Items.Objects.Item",
		"TaskActivities.NpcType.NpcSpell.NpcSpellsEntries.SpellsNew.Items.Objects.Zone",
		"TaskActivities.NpcType.NpcSpell.NpcSpellsEntries.SpellsNew.Items.StartingItems",
		"TaskActivities.NpcType.NpcSpell.NpcSpellsEntries.SpellsNew.Items.StartingItems.Item",
		"TaskActivities.NpcType.NpcSpell.NpcSpellsEntries.SpellsNew.Items.StartingItems.Zone",
		"TaskActivities.NpcType.NpcSpell.NpcSpellsEntries.SpellsNew.Items.Tasks",
		"TaskActivities.NpcType.NpcSpell.NpcSpellsEntries.SpellsNew.Items.TradeskillRecipeEntries",
		"TaskActivities.NpcType.NpcSpell.NpcSpellsEntries.SpellsNew.Items.TradeskillRecipeEntries.TradeskillRecipe",
		"TaskActivities.NpcType.NpcSpell.NpcSpellsEntries.SpellsNew.Items.TributeLevels",
		"TaskActivities.NpcType.NpcSpell.NpcSpellsEntries.SpellsNew.NpcSpellsEntries",
		"TaskActivities.NpcType.NpcSpell.NpcSpellsEntries.SpellsNew.SpellBuckets",
		"TaskActivities.NpcType.NpcSpell.NpcSpellsEntries.SpellsNew.SpellGlobals",
		"TaskActivities.NpcType.NpcTypesTint",
		"TaskActivities.NpcType.Spawnentries",
		"TaskActivities.NpcType.Spawnentries.NpcType",
		"TaskActivities.NpcType.Spawnentries.Spawngroup",
		"TaskActivities.NpcType.Spawnentries.Spawngroup.Spawn2",
		"TaskActivities.NpcType.Spawnentries.Spawngroup.Spawn2.Spawnentries",
		"TaskActivities.NpcType.Spawnentries.Spawngroup.Spawn2.Spawngroup",
		"Tasksets",
	}
}

func (Task) Connection() string {
    return "eqemu_content"
}
