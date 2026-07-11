const express = require("express");
const router = express.Router();

const controller = require("../controllers/podController");

router.get("/", controller.getPods);

module.exports = router;