const router = require('express').Router();

const auth = require('../middleware/auth');

const routeSign = require('./sign');
const routeUsers = require('./users');

router.use(routeSign);
router.use(auth);
router.use(routeUsers);

module.exports = router;
