const router = require('express').Router();

const routeSign = require('./sign');
const routeUsers = require('./users');

router.use(routeSign);

router.use(routeUsers);

module.exports = router;
