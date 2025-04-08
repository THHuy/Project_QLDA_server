const express = require("express");
const homeController = require("../../app/controllers/home/homeController");

const router = express.Router();
router.get("/", homeController.index);
module.exports = router;
