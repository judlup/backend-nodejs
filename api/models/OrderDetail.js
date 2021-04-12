/**
 * OrderDetail.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  datastore: "default",
  tableName: "OrderDetails",
  primaryKey: "OrderDetailID",
  attributes: {
    OrderDetailID: { type: "number", autoIncrement: true },
    OrderID: { type: "number", required: true },
    ProductID: { type: "number", required: true },
    UnitPrice: { type: "number", required: true },
    Quantity: { type: "number", required: true },
    Discount: { type: "number", required: true },
  },
};
