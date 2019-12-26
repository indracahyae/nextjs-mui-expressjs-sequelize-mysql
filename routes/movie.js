var express = require('express');
var router = express.Router();

const c_movie = require('../controllers').movie;

// route here
// router.get('/', c_movie.moviePage);
router.get('/getMovie', c_movie.getMovie);
router.get('/detailMovie/:id', c_movie.detailMovie);

module.exports = router;