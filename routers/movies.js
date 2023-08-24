const router = require('express').Router();
const {
  ValidatorCreateSaveMovie,
  ValidatorDeleteSaveMovie,
} = require('../middleware/validators');
const {
  createSaveMovie,
  getSaveMovies,
  deleteSaveMovie,
} = require('../controllers/movies');

router.post('/movies', ValidatorCreateSaveMovie, createSaveMovie);
router.get('/movies', getSaveMovies);
router.delete('/movies/:movieId', ValidatorDeleteSaveMovie, deleteSaveMovie);

module.exports = router;
