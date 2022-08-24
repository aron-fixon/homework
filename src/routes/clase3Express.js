const express = require("express");
const router = express.Router();
//CONTROLLER
const { Clase3Controller } = require("../controllers/clase3");

router.get("/", Clase3Controller.getAllObjects);
router.post("/post", Clase3Controller.postObject);
router.put("/put/:name", Clase3Controller.putObject);
router.delete("/delete/:name", Clase3Controller.deleteObject);
router.patch("/patch", Clase3Controller.patchObject);

module.exports = router;
