const bcrypt = require('bcryptjs');
const User = require('../models/user');

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
    .then((user) => res.send({
      _id: user._id,
      name: user.name,
      email: user.email,
    }))
    .catch((err) => res.send({ message: err.message }));
};

const login = (req, res) => {};

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
