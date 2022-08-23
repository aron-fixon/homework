const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("welcome to the Jaguar house");
});
router.get("/test", function (req, res, next) {
  res.send("Hello World!");
  next();
});
router.post("/test", function (req, res) {
  res.send(req.body);
});
/**
 * req.params y req.query(uso de ? y &)
 * app/:parametro_de_prueba ----> req.params
 * app?query_de_prueba ----> req.query
 */
router.post("test/:parametro", (req, res) => {});

module.exports = router;
