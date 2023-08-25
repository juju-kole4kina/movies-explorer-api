const { celebrate, Joi } = require('celebrate');

const ValidatorCreateUser = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required(true).min(2).max(30),
    email: Joi.string().required(true).email({ minDomainSegments: 2, tlds: { allow: true } }),
    password: Joi.string().required(true),
  }),
});

const ValidatorLogin = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required(true).email({ minDomainSegments: 2, tlds: { allow: true } }),
    password: Joi.string().required(true),
  }),
});

const ValidatorUpdateUserData = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required(true).min(2).max(30),
    email: Joi.string().required(true).email({ minDomainSegments: 2, tlds: { allow: true } }),
  }),
});

const ValidatorCreateSaveMovie = celebrate({
  body: Joi.object().keys({
    country: Joi.string().required(true),
    director: Joi.string().required(true),
    duration: Joi.number().required(true),
    year: Joi.string().required(true),
    description: Joi.string().required(true),
    image: Joi.string().required(true).pattern(/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w.-]+)+[\w\-._~:/?#[\]@!$&'()*+,;=.]+$/),
    trailerLink: Joi.string().required(true).pattern(/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w.-]+)+[\w\-._~:/?#[\]@!$&'()*+,;=.]+$/),
    nameRU: Joi.string().required(true),
    nameEN: Joi.string().required(true),
    thumbnail: Joi.string().required(true).pattern(/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w.-]+)+[\w\-._~:/?#[\]@!$&'()*+,;=.]+$/),
    movieId: Joi.number().required(true),
  }),
});

const ValidatorDeleteSaveMovie = celebrate({
  params: Joi.object().keys({
    movieId: Joi.string().length(24).hex(),
  }),
});

module.exports = {
  ValidatorCreateUser,
  ValidatorLogin,
  ValidatorUpdateUserData,
  ValidatorCreateSaveMovie,
  ValidatorDeleteSaveMovie,
};
