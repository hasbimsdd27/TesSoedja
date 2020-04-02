const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let UserSchema = Schema({
  username: { type: String },
  isSeller: { type: Boolean },
  password: { type: String }
});

module.exports = mongoose.model("Users", UserSchema);
