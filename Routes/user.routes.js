const express = require("express");
const { Model } = require("../model/user.model");
const user = express.Router();

user.get("/", async (req, res) => {
  try {
    let data = await Model.find();
    res.status(200).send(data);
  } catch (error) {
    res.status(400).send({ msg: "there is an error in getting the data" });
  }
});

user.post("/", async (req, res) => {
  let item = req.body;
  console.log(item);
  try {
    let data = new Model(item);
    await data.save();
    res.status(200).send({ msg: "user has been created" });
  } catch (error) {
    res.status(400).send({ msg: "user has been created" });
  }
});

user.delete("/:id", async (req, res) => {
  let id = req.params.id;
  try {
    let data = await Model.findByIdAndDelete(id);
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
    let data = await Model.findByIdAndUpdate(id, item, {new:true})
    console.log(data)
    res.status(200).send({ msg: "the data is updated" });
  } catch (error) {
    res.status(400).send({ msg: "the data is not updated" });
  }
});

module.exports = { user };
