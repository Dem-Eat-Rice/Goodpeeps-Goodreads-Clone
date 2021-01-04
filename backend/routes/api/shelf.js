const express = require('express');
const asyncHandler = require('express-async-handler');
const { values } = require('sequelize/types/lib/operators');
const { MoviesShelf, Shelf, Movie, User } = require('../../db/models')
const { requireAuth } = require('../../utils/auth');

const router = express.Router();


router.get('/', requireAuth, asyncHandler(async (req, res) => {
    const user = req.user.toJSON();
   

    const shelf = await Shelf.findAll({
        where: {
            userId: user.id
        },
        include: User
    });

    return res.json(shelf);
}))

router.get('/:name', requireAuth, asyncHandler(async (req, res) => {

    paramsStatusComparison = paramsConversion(req.params);
    console.log(req.user);

    const myMovies = await MoviesShelf.findAll({
        include: [Shelf, Movie],
        where: {
            status: paramsStatusComparison,
            userId: req.user.id,
        }
    });

    return res.json(myMovies);   
}));

router.post('/', requireAuth, asyncHandler(async (req, res) => {

    const status = req.status;
    const review = req.review;
    const shelfID = req.shelfId;
    const movieId = req.movieId;
    const createdAt = req.createdAt;
    const updatedAt = req.updatedAt;
    const movieOnShelf = await MoviesShelf.create({
        status,
        review,
        shelfId,
        movieId,
        createdAt,
        updatedAt,
    });
    return res.redirect(`${req.baseUrl}${req.path}`);
}))







function paramsConversion(nonConvertedParams) {

    nonConvertedParams = nonConvertedParams.name;
    const paramsWordArray = nonConvertedParams.split('-');
    const capitalizedFirstLetterOfParamsWordArray = paramsWordArray.map(word => {
        word = [...word];
        capitalizedLetter = word[0].toUpperCase();
        word.splice(0, 1, capitalizedLetter);

        let capitalizedWordArray = word.join('');

        return capitalizedWordArray;
    })

    const convertedParams = capitalizedFirstLetterOfParamsWordArray.join(' ');

    return convertedParams;
};
    
module.exports = router;