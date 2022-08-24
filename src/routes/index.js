//LIBRERIAS
const express = require("express");
const router = express.Router();
//ENRUTADORES
const authRouter = require("./auth");
const clase3Router = require("./clase3Express");
const pokemonRouter = require("./pokemonApi");
const javascriptRouter = require("./javascript");
const repasoRouter = require("./repaso");
//MIDDLEWARES

router.use("/auth", authRouter);
router.use("/clase3", clase3Router);
router.use("/pokemonapi", pokemonRouter);
router.use("/javascript", javascriptRouter);
router.get("/repaso", repasoRouter);

module.exports = router;
