//LIBRERIAS
const express = require("express");
const router = express.Router();
//ENRUTADORES
const authRouter = require("./auth");
const pokemonRouter = require("./pokemonApi");
const javascriptRouter = require("./javascript");
const repasoRouter = require("./repaso");
//MIDDLEWARES

router.use("/auth", authRouter);
router.use("/pokemonapi", pokemonRouter);
router.use("/javascript", javascriptRouter);
router.get("/repaso", repasoRouter);

module.exports = router;
