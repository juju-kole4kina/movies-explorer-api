const router = require('express').Router();
const {
  getCurrentUser,
  updateUserData,
} = require('../controllers/users');

router.get('/users/me', getCurrentUser);
router.patch('users/me', updateUserData);

module.exports = router;
