const { User } = require("../models/user");

class UsersProvider {
  static async insertNewUser(newUser) {
    let createdUser;
    try {
      createdUser = await User.create(newUser);
    } catch (error) {
      throw new Error();
    }
    return createdUser;
  }
}

class UserQueryProvider {
  static async checkUserName(username) {
    let checkName = await User.findOne({
      where: { name: username },
    });
    if (checkName) {
      throw new ReferenceError("Username already exists");
    }
    return null;
  }
}

module.exports = {
  UsersProvider,
  UserQueryProvider,
};
