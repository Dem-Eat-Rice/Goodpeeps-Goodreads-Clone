const express = require('express');
const asyncHandler = require('express-async-handler');
const { Movie } = require('../../db/models');


const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
    const movies = await Movie.findAll();
    return res.json(movies);
}));




module.exports = router;