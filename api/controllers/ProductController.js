/**
 * ProductController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  index: async function (req, res) {
    // Catch values from url and query
    const values = req.allParams();
    const page = values.page ? values.page : 1;
    const limit = values.limit ? values.limit : 10;
    const order = values.order ? values.order : "ASC";
    // Look for records using parameters to paginate
    let result = await Product.find()
      .paginate({
        page: page,
        limit: limit,
      })
      .populate("CategoryID")
      .populate("SupplierID")
      .sort("ProductID " + order);
    // Set Picture to Base64
    result.forEach((element, index) => {
      result[index].CategoryID.Picture = element.CategoryID.Picture.toString(
        "base64"
      );
    });
    // Response
    const data = {
      currentPage: page,
      items: result,
      perPage: limit,
      total: await Product.count(),
    };
    res.status(200).json(data);
  },

  search: async function (req, res) {
    const values = req.allParams();
    const productName = values.productName ? values.productName : "";
    // const categoryName = values.categoryName ? values.categoryName : "";
    // const supplierName = values.supplierName ? values.supplierName : "";

    let result = await Product.find()
      .populate("CategoryID")
      .populate("SupplierID");
    let response = result.filter((item) =>
      item.ProductName.toLowerCase().includes(productName.toLowerCase())
    );

    res.status(200).json(response);
  },

  list: async function (req, res) {
    const values = req.allParams();

    const response = await Product.find({ ProductID: values.id })
      .populate("CategoryID")
      .populate("SupplierID");

    response.forEach((element, index) => {
      response[index].CategoryID.Picture = element.CategoryID.Picture.toString(
        "base64"
      );
    });

    res.status(200).json(response);
  },

  add: async function (req, res) {
    const values = req.allParams();

    const response = await Product.create(values).fetch();

    res.status(200).json(response);
  },

  edit: async function (req, res) {
    const values = req.allParams();
    const data = {
      ProductID: values.id,
      CategoryID: values.CategoryID,
      Discontinued: values.Discontinued,
      ProductName: values.ProductName,
      QuantityPerUnit: values.QuantityPerUnit,
      SupplierID: values.SupplierID,
      UnitPrice: values.UnitPrice,
      UnitsInStock: values.UnitsInStock,
      UnitsOnOrder: values.UnitsOnOrder,
      ReOrderLevel: values.ReOrderLevel,
    };
    const response = await Product.update({ ProductID: values.id })
      .set(data)
      .fetch();

    res.status(204).json(response);
  },
};
