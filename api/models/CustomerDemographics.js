/**
 * CustomerDemographic.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  datastore: "default",
  tableName: "CustomerDemographics",
  primaryKey: "CustomerTypeID",
  attributes: {
    CustomerTypeID: { type: "number", autoIncrement: true },
    CustomerDesc: { type: "string", required: true },
  },
};
