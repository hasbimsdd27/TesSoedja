const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let ProductsSchema = Schema({
  name: { type: String },
  description: { type: String },
  price: { type: Number }
});

module.exports = mongoose.model("Products", ProductsSchema);
