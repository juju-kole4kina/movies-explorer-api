const router = require('express').Router();
const { getCurrenrUser, updateUserData } = require('../controllers/users');

router.get('/users/me', getCurrenrUser());
router.patch('/users/me', updateUserData());

module.exports = router;
