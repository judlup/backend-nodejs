/**
 * Employee.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  datastore: "default",
  tableName: "Employees",
  primaryKey: "EmployeeID",
  attributes: {
    EmployeeID: { type: "number", autoIncrement: true },
    LastName: { type: "string", required: true },
    FirstName: { type: "string", required: true },
    Title: { type: "string", required: true },
    TitleOfCourtesy: { type: "string", required: true },
    BirthDate: { type: "number", required: true },
    HireDate: { type: "number", required: true },
    Address: { type: "string", required: true },
    City: { type: "string", required: true },
    Region: { type: "string", required: true },
    PostalCode: { type: "string", required: true },
    Country: { type: "string", required: true },
    HomePhone: { type: "string", required: true },
    Extension: { type: "string", required: true },
    Photo: { type: "string", required: true },
    Notes: { type: "string", required: true },
    ReportsTo: { type: "number", required: true },
    PhotoPath: { type: "string", required: true },
  },
};
