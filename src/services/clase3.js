const { Clase3Provider } = require("../providers/clase3");

class Clase3Services {
  static getObjServ(req, res) {
    let getObj = Clase3Provider.getObjProv;
    return getObj;
  }

  static postObjServ(req, res) {
    const { name } = req.body;
    let newObj = Clase3Provider.postObjProv(name);
    return newObj;
  }

  static async putObjServ() {
    Clase3Provider.putObjProv();
  }

  static async deleteObjServ() {
    Clase3Provider.deleteObjProv();
  }

  static async patchObjServ() {
    Clase3Provider.patchObjProv();
  }
}

module.exports = {
  Clase3Services,
};
