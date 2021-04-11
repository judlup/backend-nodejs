/**
 * CategoryController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
const fs = require("fs");

module.exports = {
  index: async function (req, res) {
    let category = await Category.find({ isDeleted: 0 });
    let result = [];
    category.forEach((element) => {
      result.push({
        CategoryID: element.CategoryID,
        CategoryName: element.CategoryName,
        Description: element.Description,
        Picture: element.Picture.toString("base64"),
      });
    });
    return res.status(200).json(result);
  },

  list: async function (req, res) {
    const values = req.allParams();
    let category = await Category.find({
      isDeleted: 0,
      CategoryID: values.id,
    });
    let result = [];
    category.forEach((element) => {
      result.push({
        CategoryID: element.CategoryID,
        CategoryName: element.CategoryName,
        Description: element.Description,
        Picture: element.Picture.toString("base64"),
      });
    });
    return res.status(200).json(result);
  },

  add: async function (req, res) {
    const values = req.allParams();
    let image;
    req.file("Picture").upload(async (err, uploadedFiles) => {
      if (err) {
        return res.serverError(err);
      }
      image = fs.readFileSync(uploadedFiles[0].fd);
      const data = {
        CategoryName: values.CategoryName,
        Description: values.Description,
        Picture: image,
      };
      const result = await Category.create(data).fetch();
      return res.status(201).json(result);
    });
  },

  edit: async function (req, res) {
    const values = req.allParams();
    const data = {
      CategoryName: values.CategoryName,
      Description: values.Description,
    };

    const result = await Category.update({ CategoryID: values.CategoryID })
      .set(data)
      .fetch();
    return res.status(204).json(result);
  },

  delete: async function (req, res) {
    const values = req.allParams();
    const result = await Category.update({
      CategoryID: values.id,
    })
      .set({ isDeleted: true })
      .fetch();
    return res.status(204).json(result);
  },
};
