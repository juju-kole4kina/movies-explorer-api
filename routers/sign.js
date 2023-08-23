const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const { createUser, login } = require('../controllers/users');

router.post('/signup', celebrate({
  body: Joi.object().keys({
    name: Joi.string().required(true).min(2).max(30),
    email: Joi.string().required(true).email({ minDomainSegments: 2, tlds: { allow: true } }),
    password: Joi.string().required(true),
  }),
}), createUser);
router.post('/signin', celebrate({
  body: Joi.object().keys({
    email: Joi.string().required(true).email({ minDomainSegments: 2, tlds: { allow: true } }),
    password: Joi.string().required(true),
  }),
}), login);

module.exports = router;
