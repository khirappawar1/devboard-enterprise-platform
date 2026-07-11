const express = require("express");
const router = express.Router();

const controller = require("../controllers/nodeController");

router.get("/", controller.getNodes);

module.exports = router;