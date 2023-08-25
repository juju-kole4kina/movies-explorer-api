const router = require('express').Router();
const { ValidatorUpdateUserData } = require('../middleware/validators');
const {
  getCurrentUser,
  updateUserData,
} = require('../controllers/users');

router.get('/users/me', getCurrentUser);
router.patch('/users/me', ValidatorUpdateUserData, updateUserData);

module.exports = router;
