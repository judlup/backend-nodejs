/**
 * Order.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  datastore: "default",
  tableName: "Orders",
  primaryKey: "OrderID",
  attributes: {
    OrderID: { type: "number", autoIncrement: true },
    CustomerID: { type: "number", required: true },
    EmployeeID: { type: "number", required: true },
    OrderDate: { type: "number", required: true },
    RequiredDate: { type: "number" },
    ShippedDate: { type: "number" },
    ShipVia: { type: "number", required: true },
    Freight: { type: "number" },
    ShipName: { type: "string" },
    ShipAddress: { type: "string" },
    ShipCity: { type: "string" },
    ShipRegion: { type: "string" },
    ShipPostalCode: { type: "string" },
    ShipCountry: { type: "string" },
  },
};
