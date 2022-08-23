//LIBRERIAS
const express = require("express");
const router = express.Router();
//CONTROLADORES
const userController = require("../controllers/");
router.post("/create", userController);
router.post("/login", userController);

module.exports = router;
