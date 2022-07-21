const mongoose = require("mongoose");
const Categories = require("../models/categories");

module.exports = {
  add_categories: async (req, res) => {
    try {
      let categories = req.body;

      const savedcategories = await Categories.create(categories);
      res.send(savedcategories);
    } catch (error) {
      res.send(error);
    }
  },
  add_many_categories: async (req, res) => {
    try {
      let categories = req.body;
      const savedcategories = await Categories.insertMany(categories);
      res.send(savedcategories);
    } catch (error) {
      res.send(error);
    }
  },
  find_one_categories: async (req, res) => {
    try {
      let id = req.params._id;
      const categories = await Categories.findById(id);
      res.send(categories);
    } catch (error) {
      res.send(error);
    }
  },
  find_many_categories: async (req, res) => {
    try {
      let ids = req.body.ids.map((id) => mongoose.Types.ObjectId(id));
      const categories = await Categories.find({
        _id: { $in: ids },
      });
      res.send(categories);
    } catch (error) {
      res.send(error);
    }
  },
  find_all_categories: async (req, res) => {
    try {
      const categories = await Categories.find();
      res.send(categories);
    } catch (error) {
      res.send(error);
    }
  },
  update_one_categories: async (req, res) => {
    try {
      let categories = req.body;
      let id = req.params._id;
      console.log(id, categories);
      const updatedcategories = await Categories.findByIdAndUpdate(
        id,
        categories
      );
      res.send(updatedcategories);
    } catch (error) {
      res.send(error);
    }
  },
  delete_one_categories: async (req, res) => {
    try {
      let id = req.params._id;
      const deletedcategories = await Categories.findByIdAndRemove(id);
      res.send(deletedcategories);
    } catch (error) {
      res.send(error);
    }
  },
};
