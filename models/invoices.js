const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let InvoicesSchema = Schema({
  status: { type: String, enum: ["paid", "pending"], default: "pending" },
  product_list: { type: String },
  total_price: { type: Number },
  invoice: { type: String }
});

module.exports = mongoose.model("Invoices", InvoicesSchema);
