const { clase3Services, Clase3Services } = require("../services/clase3");
const { err } = require("../utils/errorHandler");
const { httpStatus2 } = require("../helpers/httpStatus");
const { reset } = require("nodemon");

class Clase3Controller {
  static getAllObjects(req, res) {
    let allObj;
    try {
      allObj = Clase3Services.getObjServ;
    } catch (error) {
      res.status(500).send("An error has occurred, please try again");
      reset();
    }
    res.send(allObj);
  }

  static postObject(req, res) {
    let { name } = req.body;

    let newObj;
    try {
      newObj = Clase3Services.postObjServ(name);
    } catch (error) {
      return res.status(500).send("An error has occurred, please try again");
      reset();
    }
    return res.status(201).json(
      {
        msg: "New Object is created",
      },
      newObj
    );
  }

  static async putObject(req, res) {
    Clase3Services.putObjServ;
  }

  static async deleteObject(req, res) {
    Clase3Services.deleteObjServ;
  }

  static async patchObject(req, res) {
    Clase3Services.patchObjServ;
  }
}

module.exports = {
  Clase3Controller,
};
