const router = require('express').Router();

const auth = require('../middleware/auth');

const NotFoundError = require('../errors/not-found-err');
const { NOT_FOUND_ERROR_MESSAGE } = require('../utils/constants');

const routeSign = require('./sign');
const routeUsers = require('./users');
const routeMovies = require('./movies');
const routeSignout = require('./signout');

router.use(routeSign);

router.use(auth);

router.use(routeUsers);
router.use(routeMovies);
router.use(routeSignout);

router.use((req, res, next) => {
  next(new NotFoundError(NOT_FOUND_ERROR_MESSAGE));
});

module.exports = router;
