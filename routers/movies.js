const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const {
  createSaveMovie,
  getSaveMovies,
  deleteSaveMovie,
} = require('../controllers/movies');

router.post('/movies', celebrate({
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
}), createSaveMovie);
router.get('/movies', getSaveMovies);
router.delete('/movies/:movieId', celebrate({
  params: Joi.object().keys({
    movieId: Joi.string().length(24).hex(),
  }),
}), deleteSaveMovie);

module.exports = router;
