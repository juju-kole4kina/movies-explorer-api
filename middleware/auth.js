const jsonwebtoken = require('jsonwebtoken');
const { NODE_ENV, JWT_SECRET } = require('../utils/config');
const UnauthorizationError = require('../errors/unauthorization-err');
const { UNAUTHORIZATION_ERROR_MESSAGE } = require('../utils/constants');

const auth = (req, res, next) => {
  const { jwt } = req.cookies;

  if (!jwt) {
    next(new UnauthorizationError(UNAUTHORIZATION_ERROR_MESSAGE));
    return;
  }

  let payload;

  try {
    payload = jsonwebtoken.verify(jwt, NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret');
  } catch (err) {
    next(err);
  }

  req.user = payload;

  next();
};

module.exports = auth;
