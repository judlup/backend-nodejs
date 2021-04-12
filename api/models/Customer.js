/**
 * Customer.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  datastore: "default",
  tableName: "Customers",
  primaryKey: "CustomerID",
  attributes: {
    CustomerID: { type: "number", autoIncrement: true },
    CompanyName: { type: "string", required: true },
    ContactName: { type: "string", required: true },
    ContactTitle: { type: "string", required: true },
    Address: { type: "string", required: true },
    City: { type: "string", required: true },
    Region: { type: "string", required: true },
    PostalCode: { type: "string", required: true },
    Country: { type: "string", required: true },
    Phone: { type: "string", required: true },
    Fax: { type: "string", required: true },
  },
};
