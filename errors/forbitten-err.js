const { FORBITTEN_ERROR_CODE } = require('../utils/constants');

class Forbitten extends Error {
  constructor(message) {
    super(message);
    this.statusCode = FORBITTEN_ERROR_CODE;
  }
}

module.exports = Forbitten;
