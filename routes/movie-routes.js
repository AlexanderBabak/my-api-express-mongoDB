const express = require('express');

const {
    getMovies,
    getMovie,
    deleteMovie,
    addMovie,
    updateMovie,
} = require('../controllers/movie-controller');

const router = express.Router();

router.get('/api/movies', getMovies);
router.get('/api/movies/:id', getMovie);
router.delete('/api/movies/:id', deleteMovie);
router.post('/api/movies', addMovie);
router.patch('/api/movies/:id', updateMovie);

module.exports = router;
