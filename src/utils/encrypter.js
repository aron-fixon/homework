const bcrypt = require("bcrypt");

class CryptPassword {
  static encrypt(unhashedPassw) {
    let saltRounds = 10;
    let salt = bcrypt.genSalt(saltRounds);
    let hashPassw = bcrypt.hash(unhashedPassw, salt);

    return hashPassw;
  }

  static decrypt(userId, hashedPassw) {}
}

module.exports = {
  CryptPassword,
};
