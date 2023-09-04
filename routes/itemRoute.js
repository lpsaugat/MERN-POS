const router = require("express").Router();
const itemController = require("../controller/itemController");
const verifyToken = require("./Authentication");

router.get("/items", itemController.getItems);

router.post("/items", itemController.createItems);

router.put("/items", itemController.updateItems);

module.exports = router;
