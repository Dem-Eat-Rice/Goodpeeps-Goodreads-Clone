const express = require('express');
const asyncHandler = require('express-async-handler');
const { Movie } = require('../../db/models');
const { requireAuth } = require('../../utils/auth');

const router = express.Router();


router.get('/', requireAuth, asyncHandler(async (req, res) => {
    const movies = await Movie.findAll();
    return res.json(movies);
}));

router.get('/:id', requireAuth, asyncHandler(async (req, res) => {

    const movie = await Movie.findOne({
        where: {
            id: req.params.id
        }
    })

    return res.json(movie);
}));





module.exports = router;