const bcrypt = require('bcryptjs');
const jsonwebtoken = require('jsonwebtoken');
const User = require('../models/user');
const { NODE_ENV, JWT_SECRET } = require('../utils/config');

const createUser = (req, res) => {
  const { name, email, password } = req.body;
  bcrypt.hash(password, 10)
    .then((hash) => {
      User.create({
        name,
        email,
        password: hash,
      });
    })
    // .then((user) => res.send({
    //   _id: user._id,
    //   name: user.name,
    //   email: user.email,
    // }))
    .then((user) => res.send({ data: user }))
    .catch((err) => res.send({ message: err.message }));
};

const login = (req, res) => {
  const { email, password } = req.body;

  User.findUserByCredentials(email, password)
    .then((user) => {
      const token = jsonwebtoken.sign({ _id: user.id }, NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret', { expiresIn: '7d' });
      res.cookie('jwt', token, {
        maxAge: 3600000 * 24 * 7,
        httpOnly: true,
        sameSite: true,
      }).send(token);
    })
    .catch((err) => res.send({ message: err.message }));
};

const getCurrentUser = (req, res) => {
  User.findById(req.user._id)
    .then((user) => res.send(user))
    .catch((err) => res.send({ message: err.message }));
};

const updateUserData = (req, res) => {
  const { name, email } = req.body;

  User.findByIdAndUpdate(req.user._id, { name, email }, { new: true, runValidators: true })
    .then((user) => res.send(user))
    .chatch((err) => res.send({ message: err.message }));
};

module.exports = {
  createUser,
  login,
  getCurrentUser,
  updateUserData,
};
