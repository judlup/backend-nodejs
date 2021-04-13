/**
 * SuppliersController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  list: async function (req, res) {
    const values = req.allParams();
    const response = await Supplier.find({ SupplierID: values.id });

    res.status(200).json(response);
  },

  products: async function (req, res) {
    const values = req.allParams();
    const response = await Supplier.find({ SupplierID: values.id }).populate(
      "Products"
    );

    res.status(200).json(response);
  },

  delete: async function (req, res) {
    const values = req.allParams();

    const response = await Supplier.destroy({ SupplierID: values.id });

    res.status(200).json(response);
  },
};
