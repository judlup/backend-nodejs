/**
 * EmployeeTerritories.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  datastore: "default",
  tableName: "EmployeeTerritories",
  primaryKey: "EmployeeTerritoryID",
  attributes: {
    EmployeeTerritoryID: { type: "number", autoIncrement: true },
    EmployeeID: { type: "number", required: true },
    TerritoryID: { type: "number", required: true },
  },
};
