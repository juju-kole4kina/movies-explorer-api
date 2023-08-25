const bcrypt = require('bcryptjs');
const jsonwebtoken = require('jsonwebtoken');

const User = require('../models/user');
const NotFoundError = require('../errors/not-found-err');
const BadRequestError = require('../errors/bad-request-err');
const ConflictError = require('../errors/conflict-err');

const {
  BAD_REQUEST_ERROR_MESSAGE,
  NOT_FOUND_ERROR_MESSAGE,
  CONFLICT_ERROR_MESSAGE,
  DUPLICATE_KEY_ERROR_CODE,
  VALIDATION_ERROR_NAME,
} = require('../utils/constants');

const { NODE_ENV, JWT_SECRET } = require('../utils/config');

const createUser = (req, res, next) => {
  const { name, email, password } = req.body;
  bcrypt.hash(password, 10)
    .then((hash) => User.create({
      name, email, password: hash,
    }))
    .then((user) => {
      res.send({ _id: user._id, name, email });
    })
    .catch((err) => {
      if (err.code === DUPLICATE_KEY_ERROR_CODE) {
        next(new ConflictError(CONFLICT_ERROR_MESSAGE));
        return;
      }
      if (err.name === VALIDATION_ERROR_NAME) {
        next(new BadRequestError(BAD_REQUEST_ERROR_MESSAGE));
        return;
      }
      next(err);
    });
};

const login = (req, res, next) => {
  const { email, password } = req.body;

  User.findUserByCredentials(email, password)
    .then((user) => {
      const token = jsonwebtoken.sign({ _id: user.id }, NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret', { expiresIn: '7d' });
      res.cookie('jwt', token, {
        maxAge: 3600000 * 24 * 7,
        httpOnly: true,
        sameSite: true,
      }).send({ token });
    })
    .catch(next);
};

const getCurrentUser = (req, res, next) => {
  User.findById(req.user._id)
    .then((user) => {
      if (!user) {
        throw new NotFoundError(NOT_FOUND_ERROR_MESSAGE);
      }
      res.send(user);
    })
    .catch(next);
};

const updateUserData = (req, res, next) => {
  const { name, email } = req.body;

  User.findByIdAndUpdate(req.user._id, { name, email }, { new: true, runValidators: true })
    .then((user) => {
      if (!user) {
        throw new NotFoundError(NOT_FOUND_ERROR_MESSAGE);
      }
      res.send(user);
    })
    .catch((err) => {
      if (err.name === VALIDATION_ERROR_NAME) {
        next(new BadRequestError(BAD_REQUEST_ERROR_MESSAGE));
        return;
      }
      if (err.code === DUPLICATE_KEY_ERROR_CODE) {
        next(new ConflictError(CONFLICT_ERROR_MESSAGE));
        return;
      }
      next(err);
    });
};

module.exports = {
  createUser,
  login,
  getCurrentUser,
  updateUserData,
};
