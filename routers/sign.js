const router = require('express').Router();
const {
  ValidatorCreateUser,
  ValidatorLogin,
} = require('../middleware/validators');
const { createUser, login } = require('../controllers/users');

router.post('/signup', ValidatorCreateUser, createUser);
router.post('/signin', ValidatorLogin, login);

module.exports = router;
