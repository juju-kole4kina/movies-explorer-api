const { UNAUTHORIZATION_ERROR_CODE } = require('../utils/constants');

class Unauthorization extends Error {
  constructor(message) {
    super(message);
    this.statusCode = UNAUTHORIZATION_ERROR_CODE;
  }
}

module.exports = Unauthorization;
