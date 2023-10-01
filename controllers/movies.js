const Movie = require('../models/movie');

const NotFoundError = require('../errors/not-found-err');
const BadRequestError = require('../errors/bad-request-err');
const ForbittenError = require('../errors/forbitten-err');

const {
  BAD_REQUEST_ERROR_MESSAGE,
  NOT_FOUND_ERROR_MESSAGE,
  FORBITTEN_ERROR_MESSAGE,
  VALIDATION_ERROR_NAME,
  CASTOM_ERROR_NAME,
} = require('../utils/constants');

const createSaveMovie = (req, res, next) => {
  const {
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    nameRU,
    nameEN,
    thumbnail,
    movieId,
  } = req.body;

  Movie.create({
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    nameRU,
    nameEN,
    thumbnail,
    movieId,
    owner: req.user._id,
  })
    .then((movie) => res.send(movie))
    .catch((err) => {
      if (err.name === VALIDATION_ERROR_NAME) {
        next(new BadRequestError(BAD_REQUEST_ERROR_MESSAGE));
        return;
      }
      next(err);
    });
};

const getSaveMovies = (req, res, next) => {
  Movie.find({ owner: req.user._id })
    .then((movies) => res.send(movies))
    .catch(next);
};

const deleteSaveMovie = (req, res, next) => {
  const { _id } = req.params;
  Movie.findById(_id)
    .then((movie) => {
      if (!movie) {
        throw new NotFoundError(NOT_FOUND_ERROR_MESSAGE);
      }
      if (req.user._id === movie.owner.toString()) {
        Movie.findByIdAndRemove(_id)
          .then((isMovie) => res.send(isMovie));
      } else {
        throw new ForbittenError(FORBITTEN_ERROR_MESSAGE);
      }
    })
    .catch((err) => {
      if (err.name === CASTOM_ERROR_NAME) {
        next(new BadRequestError(BAD_REQUEST_ERROR_MESSAGE));
        return;
      }
      next(err);
    });
};

module.exports = {
  createSaveMovie,
  getSaveMovies,
  deleteSaveMovie,
};
