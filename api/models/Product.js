/**
 * Product.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  datastore: "default",
  tableName: "Products",
  primaryKey: "ProductID",
  attributes: {
    ProductID: { type: "number", autoIncrement: true },
    ProductName: { type: "string", required: true },
    QuantityPerUnit: { type: "number", required: true },
    UnitPrice: { type: "number", required: true },
    UnitsInStock: { type: "number", required: true },
    UnitsOnOrder: { type: "number", required: true },
    ReOrderLevel: { type: "number", required: true },
    Discontinued: { type: "number", required: true },

    // Relations
    CategoryID: { model: "category" },
    SupplierID: { model: "supplier" },
  },
};
