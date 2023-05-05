const express = require("express");
const { connection } = require("./db");
const { user } = require("./routes/user.routes.js");
const app = express();
const cors = require('cors');
require('dotenv').config();
// app.use(cors())
app.use(express.json());

app.use('/user', user)

app.listen(4500, async (req, res) => {
  try {
    await connection;
    console.log("server is running");
  } catch (error) {
    console.log("server is not running");
  }
});
