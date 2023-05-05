const express = require("express");
const { connection } = require("./db");
const { user } = require("./routes/user.routes.js");
const app = express();
// app.use(cors())
app.use(express.json());

app.use('/user', user)

app.listen(4500, async (req, res) => {
  try {
    await connection;
    console.log("database is running");
  } catch (error) {
    console.log("database is not running");
  }
});
