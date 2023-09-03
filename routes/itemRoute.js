const router = require("express").Router();
const itemController = require("../controller/itemController");
const itemController = require("../controller/itemController");

const verifyToken = require("./Authentication");

router.get("/items", verifyToken, itemController.getItems);

router.post("/items", verifyToken, itemController.getItems);

router.put("/items", verifyToken, itemController.getItems);
