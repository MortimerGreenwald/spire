package crudcontrollers

import (
	"fmt"
	"github.com/Akkadius/spire/internal/database"
	"github.com/Akkadius/spire/internal/http/routes"
	"github.com/Akkadius/spire/internal/models"
	"github.com/labstack/echo/v4"
	"github.com/sirupsen/logrus"
	"net/http"
	"strconv"
)

type GlobalLootController struct {
	db	 *database.DatabaseResolver
	logger *logrus.Logger
}

func NewGlobalLootController(
	db *database.DatabaseResolver,
	logger *logrus.Logger,
) *GlobalLootController {
	return &GlobalLootController{
		db:	 db,
		logger: logger,
	}
}

func (e *GlobalLootController) Routes() []*routes.Route {
	return []*routes.Route{
		routes.RegisterRoute(http.MethodGet, "global_loot/:id", e.getGlobalLoot, nil),
		routes.RegisterRoute(http.MethodGet, "global_loots", e.listGlobalLoots, nil),
		routes.RegisterRoute(http.MethodPut, "global_loot", e.createGlobalLoot, nil),
		routes.RegisterRoute(http.MethodDelete, "global_loot/:id", e.deleteGlobalLoot, nil),
		routes.RegisterRoute(http.MethodPatch, "global_loot/:id", e.updateGlobalLoot, nil),
		routes.RegisterRoute(http.MethodPost, "global_loots/bulk", e.getGlobalLootsBulk, nil),
	}
}

// listGlobalLoots godoc
// @Id listGlobalLoots
// @Summary Lists GlobalLoots
// @Accept json
// @Produce json
// @Tags GlobalLoot
// @Param includes query string false "Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names "
// @Param where query string false "Filter on specific fields. Multiple conditions [.] separated Example: col_like_value.col2__val2"
// @Param whereOr query string false "Filter on specific fields (Chained ors). Multiple conditions [.] separated Example: col_like_value.col2__val2"
// @Param groupBy query string false "Group by field. Multiple conditions [.] separated Example: field1.field2"
// @Param limit query string false "Rows to limit in response (Default: 10,000)"
// @Param orderBy query string false "Order by [field]"
// @Param orderDirection query string false "Order by field direction"
// @Param select query string false "Column names [.] separated to fetch specific fields in response"
// @Success 200 {array} models.GlobalLoot
// @Failure 500 {string} string "Bad query request"
// @Router /global_loots [get]
func (e *GlobalLootController) listGlobalLoots(c echo.Context) error {
	var results []models.GlobalLoot
	err := e.db.QueryContext(models.GlobalLoot{}, c).Find(&results).Error
	if err != nil {
		return c.JSON(http.StatusInternalServerError, echo.Map{"error": err})
	}

	return c.JSON(http.StatusOK, results)
}

// getGlobalLoot godoc
// @Id getGlobalLoot
// @Summary Gets GlobalLoot
// @Accept json
// @Produce json
// @Tags GlobalLoot
// @Param id path int true "Id"
// @Param includes query string false "Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names "
// @Param select query string false "Column names [.] separated to fetch specific fields in response"
// @Success 200 {array} models.GlobalLoot
// @Failure 404 {string} string "Entity not found"
// @Failure 500 {string} string "Cannot find param"
// @Failure 500 {string} string "Bad query request"
// @Router /global_loot/{id} [get]
func (e *GlobalLootController) getGlobalLoot(c echo.Context) error {
	var params []interface{}
	var keys []string

	// primary key param
	id, err := strconv.Atoi(c.Param("id"))
	if err != nil {
		return c.JSON(http.StatusInternalServerError, echo.Map{"error": "Cannot find param [Id]"})
	}
	params = append(params, id)
	keys = append(keys, "id = ?")

	// query builder
	var result models.GlobalLoot
	query := e.db.QueryContext(models.GlobalLoot{}, c)
	for i, _ := range keys {
		query = query.Where(keys[i], params[i])
	}

	// grab first entry
	err = query.First(&result).Error
	if err != nil {
		return c.JSON(http.StatusInternalServerError, echo.Map{"error": err.Error()})
	}

	// couldn't find entity
	if result.ID == 0 {
		return c.JSON(http.StatusNotFound, echo.Map{"error": "Cannot find entity"})
	}

	return c.JSON(http.StatusOK, result)
}

// updateGlobalLoot godoc
// @Id updateGlobalLoot
// @Summary Updates GlobalLoot
// @Accept json
// @Produce json
// @Tags GlobalLoot
// @Param id path int true "Id"
// @Param global_loot body models.GlobalLoot true "GlobalLoot"
// @Success 200 {array} models.GlobalLoot
// @Failure 404 {string} string "Cannot find entity"
// @Failure 500 {string} string "Error binding to entity"
// @Failure 500 {string} string "Error updating entity"
// @Router /global_loot/{id} [patch]
func (e *GlobalLootController) updateGlobalLoot(c echo.Context) error {
	request := new(models.GlobalLoot)
	if err := c.Bind(request); err != nil {
		return c.JSON(
			http.StatusInternalServerError,
			echo.Map{"error": fmt.Sprintf("Error binding to entity [%v]", err.Error())},
		)
	}

	var params []interface{}
	var keys []string

	// primary key param
	id, err := strconv.Atoi(c.Param("id"))
	if err != nil {
		return c.JSON(http.StatusInternalServerError, echo.Map{"error": "Cannot find param [Id]"})
	}
	params = append(params, id)
	keys = append(keys, "id = ?")

	// query builder
	var result models.GlobalLoot
	query := e.db.QueryContext(models.GlobalLoot{}, c)
	for i, _ := range keys {
		query = query.Where(keys[i], params[i])
	}

	// grab first entry
	err = query.First(&result).Error
	if err != nil {
		return c.JSON(http.StatusInternalServerError, echo.Map{"error": fmt.Sprintf("Cannot find entity [%s]", err.Error())})
	}

	err = query.Select("*").Updates(&request).Error
	if err != nil {
		return c.JSON(http.StatusInternalServerError, echo.Map{"error": fmt.Sprintf("Error updating entity [%v]", err.Error())})
	}

	return c.JSON(http.StatusOK, request)
}

// createGlobalLoot godoc
// @Id createGlobalLoot
// @Summary Creates GlobalLoot
// @Accept json
// @Produce json
// @Param global_loot body models.GlobalLoot true "GlobalLoot"
// @Tags GlobalLoot
// @Success 200 {array} models.GlobalLoot
// @Failure 500 {string} string "Error binding to entity"
// @Failure 500 {string} string "Error inserting entity"
// @Router /global_loot [put]
func (e *GlobalLootController) createGlobalLoot(c echo.Context) error {
	globalLoot := new(models.GlobalLoot)
	if err := c.Bind(globalLoot); err != nil {
		return c.JSON(
			http.StatusInternalServerError,
			echo.Map{"error": fmt.Sprintf("Error binding to entity [%v]", err.Error())},
		)
	}

	err := e.db.Get(models.GlobalLoot{}, c).Model(&models.GlobalLoot{}).Create(&globalLoot).Error
	if err != nil {
		return c.JSON(
			http.StatusInternalServerError,
			echo.Map{"error": fmt.Sprintf("Error inserting entity [%v]", err.Error())},
		)
	}

	return c.JSON(http.StatusOK, globalLoot)
}

// deleteGlobalLoot godoc
// @Id deleteGlobalLoot
// @Summary Deletes GlobalLoot
// @Accept json
// @Produce json
// @Tags GlobalLoot
// @Param id path int true "id"
// @Success 200 {string} string "Entity deleted successfully"
// @Failure 404 {string} string "Cannot find entity"
// @Failure 500 {string} string "Error binding to entity"
// @Failure 500 {string} string "Error deleting entity"
// @Router /global_loot/{id} [delete]
func (e *GlobalLootController) deleteGlobalLoot(c echo.Context) error {
	var params []interface{}
	var keys []string

	// primary key param
	id, err := strconv.Atoi(c.Param("id"))
	if err != nil {
		e.logger.Error(err)
	}
	params = append(params, id)
	keys = append(keys, "id = ?")

	// query builder
	var result models.GlobalLoot
	query := e.db.QueryContext(models.GlobalLoot{}, c)
	for i, _ := range keys {
		query = query.Where(keys[i], params[i])
	}

	// grab first entry
	err = query.First(&result).Error
	if err != nil {
		return c.JSON(http.StatusInternalServerError, echo.Map{"error": err.Error()})
	}

	err = e.db.Get(models.GlobalLoot{}, c).Model(&models.GlobalLoot{}).Delete(&result).Error
	if err != nil {
		return c.JSON(http.StatusInternalServerError, echo.Map{"error": "Error deleting entity"})
	}

	return c.JSON(http.StatusOK, echo.Map{"success": "Entity deleted successfully"})
}

// getGlobalLootsBulk godoc
// @Id getGlobalLootsBulk
// @Summary Gets GlobalLoots in bulk
// @Accept json
// @Produce json
// @Param Body body BulkFetchByIdsGetRequest true "body"
// @Tags GlobalLoot
// @Success 200 {array} models.GlobalLoot
// @Failure 500 {string} string "Bad query request"
// @Router /global_loots/bulk [post]
func (e *GlobalLootController) getGlobalLootsBulk(c echo.Context) error {
	var results []models.GlobalLoot

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

	err := e.db.QueryContext(models.GlobalLoot{}, c).Find(&results, r.IDs).Error
	if err != nil {
		return c.JSON(http.StatusInternalServerError, echo.Map{"error": err.Error()})
	}

	return c.JSON(http.StatusOK, results)
}
