const express = require('express');
const asyncHandler = require('express-async-handler');
const { MoviesShelf, Shelf, Movie } = require('../../db/models')
const { requireAuth } = require('../../utils/auth');

const router = express.Router();

// async function createShelf(data) {
//     const shelf = await Shelf.create(data);
//     console.log(res.json(shelf))
//     // console.log(shelf.toJSON())
//     // return shelf.toJSON();
// }

router.get('/', requireAuth, asyncHandler(async (req, res) => {
    const myMovies = await MoviesShelf.findAll();
    const shelf = await Shelf.create({});
    console.log(req.body)
    return res.json(myMovies);
}));

// router.post('/', requireAuth, asyncHandler(async (req, res) => {

// }));

module.exports = router;