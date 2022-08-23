//LIBRERIAS
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("welcome to pokemonApi section");
});

module.exports = router;
