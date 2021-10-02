package crudcontrollers

import (
	"github.com/Akkadius/spire/database"
	"github.com/Akkadius/spire/http/routes"
	"github.com/Akkadius/spire/models"
	"fmt"
	"github.com/labstack/echo/v4"
	"github.com/sirupsen/logrus"
	"net/http"
	"strconv"
)

type NameFilterController struct {
	db     *database.DatabaseResolver
	logger *logrus.Logger
}

func NewNameFilterController(
	db *database.DatabaseResolver,
	logger *logrus.Logger,
) *NameFilterController {
	return &NameFilterController{
		db:     db,
		logger: logger,
	}
}

func (e *NameFilterController) Routes() []*routes.Route {
	return []*routes.Route{
		routes.RegisterRoute(http.MethodDelete, "name_filter/:name_filter", e.deleteNameFilter, nil),
		routes.RegisterRoute(http.MethodGet, "name_filter/:name_filter", e.getNameFilter, nil),
		routes.RegisterRoute(http.MethodGet, "name_filters", e.listNameFilters, nil),
		routes.RegisterRoute(http.MethodPost, "name_filters/bulk", e.getNameFiltersBulk, nil),
		routes.RegisterRoute(http.MethodPatch, "name_filter/:name_filter", e.updateNameFilter, nil),
		routes.RegisterRoute(http.MethodPut, "name_filter", e.createNameFilter, nil),
	}
}

// listNameFilters godoc
// @Id listNameFilters
// @Summary Lists NameFilters
// @Accept json
// @Produce json
// @Tags NameFilter
// @Param includes query string false "Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names "
// @Param where query string false "Filter on specific fields. Multiple conditions [.] separated Example: col_like_value.col2__val2"
// @Param whereOr query string false "Filter on specific fields (Chained ors). Multiple conditions [.] separated Example: col_like_value.col2__val2"
// @Param limit query string false "Rows to limit in response (Default: 10,000)"
// @Param orderBy query string false "Order by [field]"
// @Param orderDirection query string false "Order by field direction"
// @Param select query string false "Column names [.] separated to fetch specific fields in response"
// @Success 200 {array} models.NameFilter
// @Failure 500 {string} string "Bad query request"
// @Router /name_filters [get]
func (e *NameFilterController) listNameFilters(c echo.Context) error {
	var results []models.NameFilter
	err := e.db.QueryContext(models.NameFilter{}, c).Find(&results).Error
	if err != nil {
		return c.JSON(http.StatusInternalServerError, echo.Map{"error": err})
	}

	return c.JSON(http.StatusOK, results)
}

// getNameFilter godoc
// @Id getNameFilter
// @Summary Gets NameFilter
// @Accept json
// @Produce json
// @Tags NameFilter
// @Param id path int true "Id"
// @Param includes query string false "Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names "
// @Param select query string false "Column names [.] separated to fetch specific fields in response"
// @Success 200 {array} models.NameFilter
// @Failure 404 {string} string "Entity not found"
// @Failure 500 {string} string "Cannot find param"
// @Failure 500 {string} string "Bad query request"
// @Router /name_filter/{id} [get]
func (e *NameFilterController) getNameFilter(c echo.Context) error {
	nameFilterId, err := strconv.Atoi(c.Param("name_filter"))
	if err != nil {
		return c.JSON(http.StatusInternalServerError, echo.Map{"error": "Cannot find param"})
	}

	var result models.NameFilter
	err = e.db.QueryContext(models.NameFilter{}, c).First(&result, nameFilterId).Error
	if err != nil {
		return c.JSON(http.StatusInternalServerError, echo.Map{"error": err})
	}

	if result.ID == 0 {
		return c.JSON(http.StatusNotFound, echo.Map{"error": "Cannot find entity"})
	}

	return c.JSON(http.StatusOK, result)
}

// updateNameFilter godoc
// @Id updateNameFilter
// @Summary Updates NameFilter
// @Accept json
// @Produce json
// @Tags NameFilter
// @Param id path int true "Id"
// @Param name_filter body models.NameFilter true "NameFilter"
// @Success 200 {array} models.NameFilter
// @Failure 404 {string} string "Cannot find entity"
// @Failure 500 {string} string "Error binding to entity"
// @Failure 500 {string} string "Error updating entity"
// @Router /name_filter/{id} [patch]
func (e *NameFilterController) updateNameFilter(c echo.Context) error {
	nameFilter := new(models.NameFilter)
	if err := c.Bind(nameFilter); err != nil {
		return c.JSON(
			http.StatusInternalServerError,
			echo.Map{"error": fmt.Sprintf("Error binding to entity: [%v]", err)},
		)
	}

    entity := models.NameFilter{}
	err := e.db.Get(models.NameFilter{}, c).Model(&models.NameFilter{}).First(&entity, nameFilter.ID).Error
	if err != nil || nameFilter.ID == 0 {
		return c.JSON(http.StatusNotFound, echo.Map{"error": "Cannot find entity"})
	}

	err = e.db.Get(models.NameFilter{}, c).Model(&entity).Updates(&nameFilter).Error
	if err != nil {
		return c.JSON(http.StatusInternalServerError, echo.Map{"error": fmt.Sprintf("Error updating entity: [%v]", err)})
	}

	return c.JSON(http.StatusOK, nameFilter)
}

// createNameFilter godoc
// @Id createNameFilter
// @Summary Creates NameFilter
// @Accept json
// @Produce json
// @Param name_filter body models.NameFilter true "NameFilter"
// @Tags NameFilter
// @Success 200 {array} models.NameFilter
// @Failure 500 {string} string "Error binding to entity"
// @Failure 500 {string} string "Error inserting entity"
// @Router /name_filter [put]
func (e *NameFilterController) createNameFilter(c echo.Context) error {
	nameFilter := new(models.NameFilter)
	if err := c.Bind(nameFilter); err != nil {
		return c.JSON(
			http.StatusInternalServerError,
			echo.Map{"error": fmt.Sprintf("Error binding to entity: [%v]", err)},
		)
	}

	err := e.db.Get(models.NameFilter{}, c).Model(&models.NameFilter{}).Create(&nameFilter).Error
	if err != nil {
		return c.JSON(
			http.StatusInternalServerError,
			echo.Map{"error": fmt.Sprintf("Error inserting entity: [%v]", err)},
		)
	}

	return c.JSON(http.StatusOK, nameFilter)
}

// deleteNameFilter godoc
// @Id deleteNameFilter
// @Summary Deletes NameFilter
// @Accept json
// @Produce json
// @Tags NameFilter
// @Param id path int true "Id"
// @Success 200 {string} string "Entity deleted successfully"
// @Failure 404 {string} string "Cannot find entity"
// @Failure 500 {string} string "Error binding to entity"
// @Failure 500 {string} string "Error deleting entity"
// @Router /name_filter/{id} [delete]
func (e *NameFilterController) deleteNameFilter(c echo.Context) error {
	nameFilterId, err := strconv.Atoi(c.Param("name_filter"))
	if err != nil {
		e.logger.Error(err)
	}

	nameFilter := new(models.NameFilter)
	err = e.db.Get(models.NameFilter{}, c).Model(&models.NameFilter{}).First(&nameFilter, nameFilterId).Error
	if err != nil || nameFilter.ID == 0 {
		return c.JSON(http.StatusNotFound, echo.Map{"error": "Cannot find entity"})
	}

	err = e.db.Get(models.NameFilter{}, c).Model(&models.NameFilter{}).Delete(&nameFilter).Error
	if err != nil {
		return c.JSON(http.StatusInternalServerError, echo.Map{"error": "Error deleting entity"})
	}

	return c.JSON(http.StatusOK, echo.Map{"success": "Entity deleted successfully"})
}

// getNameFiltersBulk godoc
// @Id getNameFiltersBulk
// @Summary Gets NameFilters in bulk
// @Accept json
// @Produce json
// @Param Body body BulkFetchByIdsGetRequest true "body"
// @Tags NameFilter
// @Success 200 {array} models.NameFilter
// @Failure 500 {string} string "Bad query request"
// @Router /name_filters/bulk [post]
func (e *NameFilterController) getNameFiltersBulk(c echo.Context) error {
	var results []models.NameFilter

	r := new(BulkFetchByIdsGetRequest)
	if err := c.Bind(r); err != nil {
		return c.JSON(
			http.StatusInternalServerError,
			echo.Map{"error": fmt.Sprintf("Error binding to bulk request: [%v]", err)},
		)
	}

	if len(r.IDs) == 0 {
		return c.JSON(
			http.StatusOK,
			echo.Map{"error": fmt.Sprintf("Missing request field data 'ids'")},
		)
	}

	err := e.db.QueryContext(models.NameFilter{}, c).Find(&results, r.IDs).Error
	if err != nil {
		return c.JSON(http.StatusInternalServerError, echo.Map{"error": err})
	}

	return c.JSON(http.StatusOK, results)
}
