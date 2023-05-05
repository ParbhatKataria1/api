const express = require("express");
const { AuthModel } = require("../model/user.model");
const user = express.Router();

/**
 * @swagger
 * components:
 *     schemas:
 *         User:
 *             type:object
 *             properties:
 *                 id:
 *                     type:string
 *                     description:this is auto generated
 *                 name:
 *                     type:string
 *                     description:this is the name of the user
 *                 age:
 *                     type:integer
 *                     description:this is the age of the user
 *
 */

/**
 * @swagger
 * /user:
 *   get:
 *     summary:it is used to get the details of the users.
 *     tags:[Users]
 *     responses:
 *       200:
 *         description:the request was being made is successfull
 *           content:
 *             application/json
 *               schema:
 *                 type:array
 *                   item:
 *                     $res:"#components/schemas/User"
 */


user.get("/", async (req, res) => {
  console.log("first");
  try {
    console.log("seocnd");
    let data = await AuthModel.find();
    console.log("third");
    res.status(200).send(data);
  } catch (error) {
    res.status(400).send({ msg: "there is an error in getting the data" });
  }
});

user.post("/", async (req, res) => {
  let item = req.body;
  console.log(item);
  try {
    let data = new AuthModel(item);
    await data.save();
    res.status(200).send({ msg: "user has been created" });
  } catch (error) {
    res.status(400).send({ msg: "user has been created" });
  }
});

user.delete("/:id", async (req, res) => {
  let id = req.params.id;
  try {
    let data = await AuthModel.findByIdAndDelete(id);
    res.status(200).send({ msg: "the data has been deleted" });
  } catch (error) {
    res.status(400).send({ msg: "error in deleting the data" });
  }
});

user.patch("/:id", async (req, res) => {
  let id = req.params.id;
  let item = req.body;
  console.log(item);
  try {
    let data = await AuthModel.findByIdAndUpdate(id, item, { new: true });
    console.log(data);
    res.status(200).send({ msg: "the data is updated" });
  } catch (error) {
    res.status(400).send({ msg: "the data is not updated" });
  }
});

module.exports = { user };
