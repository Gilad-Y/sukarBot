const express = require("express");
const router = express.Router();
const clientsController = require("../controller/clientsController");

// Example route (add your actual routes here)
router.get("/", clientsController.getAllClients);
router.get("/blockUpdate/:user", clientsController.getBlockUpdate);
module.exports = router;
