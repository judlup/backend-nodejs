/**
 * Territory.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  datastore: "default",
  tableName: "Territories",
  primaryKey: "TerritoryID",
  attributes: {
    TerritoryID: { type: "number", autoIncrement: true },
    TerritoryDescription: { type: "number", required: true },
    RegionID: { type: "number", required: true },
  },
};
