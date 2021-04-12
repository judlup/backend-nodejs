/**
 * Category.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  datastore: "default",
  tableName: "Categories",
  primaryKey: "CategoryID",
  attributes: {
    CategoryID: { type: "number", autoIncrement: true },
    CategoryName: {
      type: "string",
      required: true,
    },
    Description: { type: "string", allowNull: true },
    Picture: { type: "ref", columnType: "mediumblob" },
    isDeleted: { type: "boolean", defaultsTo: false },

    // Relations
    Products: {
      collection: "product",
      via: "CategoryID",
    },
  },
};
