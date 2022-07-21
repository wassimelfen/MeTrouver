const express = require("express");
const categories = require("../controllers/categories");
const router = express.Router();

router.route("/add").post(categories.add_categories);

router.route("/findOnen/:_id").get(categories.find_one_categories);

router.route("/addMany").post(categories.add_many_categories);

router.route("/updateOne/:_id").put(categories.update_one_categories);

router.route("/deleteOne/:_id").delete(categories.delete_one_categories);

router.route("/findAll").get(categories.find_all_categories);

module.exports = router;
