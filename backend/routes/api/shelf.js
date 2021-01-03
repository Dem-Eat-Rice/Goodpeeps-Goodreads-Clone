const express = require('express');
const asyncHandler = require('express-async-handler');
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

    paramsStatusComparison = paramsConversion(req.params)

    const myMovies = await MoviesShelf.findAll({
        include: [Shelf, Movie],
        where: {
            status: paramsStatusComparison
        }
    });

    return res.json(myMovies);
}));


//functions

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