const express = require("express");
const { connection } = require("./db");
const { user } = require("./Routes/user.routes.js");
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const app = express();
// app.use(cors())
app.use(express.json());

app.use("/user", user);

// const options = {
//   definition: {
//     openapi: "3.0.0",
//     info: {
//       title: "Hello World",
//       version: "1.0.0",
//     },
//     servers: [{
//         url:"http://localhost:4500" // change
//     }],
//   },
//   apis: ["./routes/*.js"], // change files containing annotations as above
// };

// const openapiSpecification = swaggerJSDoc(options);
// app.use(
//   "/documentations",
//   swaggerUi.serve,
//   swaggerUi.setup(openapiSpecification)
// );

app.listen(4500, async (req, res) => {
  try {
    await connection;
    console.log("database is running");
  } catch (error) {
    console.log("database is not running");
  }
});
