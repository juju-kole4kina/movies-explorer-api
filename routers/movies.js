const router = require('express').Router();
const {
  getSaveMovies,
  createMovieCard,
  deleteMovieCard,
} = require('../controllers/movies');

router.get('/movies', getSaveMovies());
router.post('/movies', createMovieCard());
router.delete('/movies/:_id', deleteMovieCard());

module.exports = router;
