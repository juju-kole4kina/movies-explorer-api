const router = require('express').Router();

const auth = require('../middleware/auth');

const routeSign = require('./sign');
const routeUsers = require('./users');
const routeMovies = require('./movies');

router.use(routeSign);
router.use(auth);
router.use(routeUsers);
router.use(routeMovies);

module.exports = router;
