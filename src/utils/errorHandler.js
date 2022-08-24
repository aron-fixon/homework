const { httpStatus4, httpStatus5 } = require("../helpers/httpStatus");

class ErrorHandler extends Error {
  static e404 = "not found";
}

module.exports = {
  ErrorHandler,
};
