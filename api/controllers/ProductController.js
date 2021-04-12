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
    const categoryName = values.categoryName ? values.categoryName : "";
    const supplierName = values.supplierName ? values.supplierName : "";
    // Like operator
    let result = await Product.find({ ProductName: { contains: productName } });

    res.status(200).json(result);
  },
};
