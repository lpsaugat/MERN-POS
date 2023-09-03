const itemModel = require("../models/items");

const controller = {};

controller.getItems = async (req, res) => {
  var items = {};
  items = await itemModel.find();
  res.status(200).json(items);
};

controller.updateItems = async (req, res) => {
  const updateItem = await itemModel.findOneAndUpdate(
    { _id: req.body.id },
    { ...req.body },
    { new: true, validators: true }
  );
  if (updateItem) {
    res.status(200).json("Item has been updated");
  } else {
    res.status(500).json("There was an error");
  }
};

controller.postItems = async (req, res) => {
  const newItem = await itemModel.create({ ...req.body });
  if (newItem) {
    res.status(200).json("Item has been added");
  } else {
    res.status(500).json("There was an error");
  }
};
