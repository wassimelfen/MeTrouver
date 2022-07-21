const mongoose = require("mongoose");

const categories = mongoose.Schema(
  {
    name: String,
    type: String,
  },
  { timestamps: true, versionKey: false }
);

module.exports = mongoose.model("Categories", categories);
