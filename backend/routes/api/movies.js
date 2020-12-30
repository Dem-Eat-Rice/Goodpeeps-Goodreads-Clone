const express = require('express');
const db = require('../../db')
const router = express.Router();

router.get('/', async (req, res) => {
    const movies = await db.Mov.findAll();
    console.log(movies)
    return res.json(movies);
})

module.exports = router;