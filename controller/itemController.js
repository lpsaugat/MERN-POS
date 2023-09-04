const itemModel = require("../models/items");
const imagePath = require("../middleware/storage");

const controller = {};

controller.getItems = async (req, res) => {
  try {
    console.log("GET ITEMES");
    var items = {};
    items = await itemModel.find();
    res.status(200).json(items);
  } catch (err) {
    console.log(err);
  }
};

controller.updateItems = async (req, res) => {
  let updateItem;
  if (!req.file) {
    updateItem = await itemModel.findOneAndUpdate(
      { _id: req.body.id },
      { ...req.body },
      { new: true, validators: true }
    );
  } else {
    imagePath.single(req.file.image);
    updateItem = await itemModel.findOneAndUpdate(
      { _id: req.body.id },
      { ...req.body, image: req.file.image },
      { new: true, validators: true }
    );
  }

  if (updateItem) {
    res.status(200).json("Item has been updated");
  } else {
    res.status(500).json("There was an error");
  }
};

controller.createItems = async (req, res) => {
  console.log("EHEHEH");
  if (!req.file) {
    return res.status(400).json("Please upload Image");
  }

  const newItem = await itemModel.create({
    ...req.body,
    image: req.file.image,
  });

  if (newItem) {
    res.status(200).json("Item has been added");
  } else {
    res.status(500).json("There was an error");
  }
};

module.exports = controller;
