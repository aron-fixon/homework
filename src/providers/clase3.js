const { Object } = require("../models/clase3");

class Clase3Provider {
  static getObjProv(req, res) {
    const msg = {
      msg: "/GET Route to All Objects",
    };
    return msg;
  }

  static postObjProv(req, res) {
    const { name } = req.body;
    let newObj = `/POST Route to NEW Object ${name}`;
    return newObj;
  }

  static async putObjProv() {
    return JSON.stringify("/PUT Route to ONE Object");
  }

  static async patchObjProv() {
    return JSON.stringify("/PATCH Route to ONE Object");
  }

  static async deleteObjProv() {
    return JSON.stringify("/DELETE Route to ONE Object");
  }
}

module.exports = {
  Clase3Provider,
};
