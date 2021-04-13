/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {
  /***************************************************************************
   *                                                                          *
   * Make the view located at `views/homepage.ejs` your home page.            *
   *                                                                          *
   * (Alternatively, remove this and add an `index.html` file in your         *
   * `assets` directory)                                                      *
   *                                                                          *
   ***************************************************************************/

  "/": { view: "pages/homepage" },

  // Category
  "GET /api/category": "CategoryController.index",
  "GET /api/categories/:id/products": "CategoryController.list",
  "POST /api/category": "CategoryController.add",
  "PUT /api/category": "CategoryController.edit",
  "DELETE /api/category/:id": "CategoryController.delete",

  // Product
  "GET /api/products": "ProductController.index",
  "GET /api/products/search": "ProductController.search",
  "GET /api/products/:id": "ProductController.list",
  "POST /api/products": "ProductController.add",
  "PUT /api/products/:id": "ProductController.edit",

  // Supplier
  "GET /api/suppliers/:id": "SupplierController.list",
  "GET /api/suppliers/:id/products": "SupplierController.products",
  "DELETE /api/suppliers/:id": "SupplierController.delete",
  /***************************************************************************
   *                                                                          *
   * More custom routes here...                                               *
   * (See https://sailsjs.com/config/routes for examples.)                    *
   *                                                                          *
   * If a request to a URL doesn't match any of the routes in this file, it   *
   * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
   * not match any of those, it is matched against static assets.             *
   *                                                                          *
   ***************************************************************************/
};
