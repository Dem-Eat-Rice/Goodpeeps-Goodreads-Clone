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

    paramsStatusComparison = paramsConversion(req.params);

    const myMovies = await MoviesShelf.findAll({
        include: [Shelf, Movie],
        where: {
            status: paramsStatusComparison,
        }
    });

    //I'm positive there was a better way to do this whole thing, however brain is now potato. Like 1845-1849 potato. Refactor later after studying frontend.
    for (i = 0; i < myMovies.length; i++) {
        const shelfTable = myMovies[i].Shelf;
        const userId = shelfTable.userId;
        const currentUser = req.user;
        const currentUserId = currentUser.id;

        if (userId === currentUserId) {
            return res.json(myMovies[i]);
        }
    }
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