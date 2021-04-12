/**
 * CustomerCustomerDemo.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  datastore: "default",
  tableName: "CustomerCustomerDemo",
  primaryKey: "CustomerDemoID",
  attributes: {
    CustomerDemoID: { type: "number", autoIncrement: true },
    CustomerID: { type: "number", required: true },
    CustomerTypeID: { type: "number", required: true },
  },
};
