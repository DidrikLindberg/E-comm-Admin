require ("dotenv").config();
const mongoose = require("mongoose");
require ('dotenv').config()

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/ecomdb"
);


module.exports = mongoose.connection;
