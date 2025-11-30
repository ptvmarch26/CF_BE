const express = require("express");
const router = express.Router();
const menuController = require("../controllers/Menu.controller");

router.post("/", menuController.createMenu);
router.get("/", menuController.getMenus);
router.get("/:id", menuController.getMenuById);
router.put("/:id", menuController.updateMenu);

module.exports = router;
