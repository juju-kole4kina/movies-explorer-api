const router = require('express').Router();

const routerUser = require('./users');
const routerMovie = require('./movies');

router.use(routerUser);
router.use(routerMovie);

module.export = router;
