const Movie = require('../models/movie');

const createSaveMovie = (req, res) => {
  const {
    country,
    director,
    duration,
    year,
    description,
    image,
    trailer,
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
    trailer,
    nameRU,
    nameEN,
    thumbnail,
    movieId,
    owner: req.user._id,
  })
    .then((movie) => res.send(movie))
    .catch((err) => res.send({ message: err.message }));
};

const getSaveMovies = (req, res) => {
  Movie.find({ owner: req.user._id })
    .then((movies) => res.send(movies))
    .catch((err) => res.send({ message: err.message }));
};

const deleteSaveMovie = (req, res) => {
  const { movieId } = req.params;
  Movie.findById(movieId)
    .then((movie) => {
      if (req.user._id === movie.owner.toString()) {
        Movie.findByIdAndRemove(movieId)
          .then((isMovie) => res.send(isMovie));
      }
    })
    .catch((err) => res.send({ message: err.message }));
};

module.exports = {
  createSaveMovie,
  getSaveMovies,
  deleteSaveMovie,
};
