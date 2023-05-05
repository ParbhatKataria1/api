const express = require("express");
const { connection } = require("./db");
const { user } = require("./Routes/user.routes");
const app = express();
const cors = require('cors');
app.use(cors())
app.use(express.json());

app.use('/', user)

app.listen(process.env.port, async (req, res) => {
  try {
    await connection;
    console.log("server is running");
  } catch (error) {
    console.log("server is not running");
  }
});
