/**
 * Region.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  datastore: "default",
  tabbleName: "Region",
  primaryKey: "RegionID",
  attributes: {
    RegionID: { type: "number", autoIncrement: true },
    RegionDescription: { type: "string", required: true },
  },
};
