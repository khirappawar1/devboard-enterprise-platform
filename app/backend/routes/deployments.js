const express = require("express");
const router = express.Router();

const controller = require("../controllers/deploymentController");

router.get("/", controller.getDeployments);

module.exports = router;