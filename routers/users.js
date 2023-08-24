const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const {
  getCurrentUser,
  updateUserData,
} = require('../controllers/users');

router.get('/users/me', getCurrentUser);
router.patch('/users/me', celebrate({
  body: Joi.object().keys({
    name: Joi.string().required(true).min(2).max(30),
    email: Joi.string().required(true).email({ minDomainSegments: 2, tlds: { allow: true } }),
  }),
}), updateUserData);

module.exports = router;
