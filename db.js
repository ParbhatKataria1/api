const mongoose = require("mongoose");
require("dotenv").config();
const connection = mongoose.connect(
  "mongodb+srv://parbhat:parbhat@cluster0.6xmkaq5.mongodb.net/users?retryWrites=true&w=majority"
);
module.exports = { connection };
