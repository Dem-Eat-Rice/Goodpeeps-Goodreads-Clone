const express = require('express');
const asyncHandler = require('express-async-handler');
const { Movie } = require('../../db/models');

const router = express.Router();

function changeParamsToUseableId(req) {
    //Looking for a dynamic way to query the database. I think this works and it's hilarious cuz it seems ridiculous and inefficient.
    const id = req.url.split('/').join('');
    // title = id.split('-').join(' '); LOL

    return id
}

router.get('/', asyncHandler(async (req, res) => {
    const movies = await Movie.findAll();
    return res.json(movies);
}));

router.get('/:id', asyncHandler(async (req, res) => {

    const id = changeParamsToUseableId(req);

    const movie = await Movie.findOne({
        where: {
            id: id
        }
    })
    
    return res.json(movie);
}));





module.exports = router;