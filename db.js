const mongoose = require("mongoose");
const connection = mongoose.connect(
  "mongodb+srv://parbhat:parbhat@cluster0.ejzfwgs.mongodb.net/?retryWrites=true&w=majority"
);
module.exports = { connection };
