const express = require('express')

const router = express.Router()

router.get('/', async (req, res) => {
    res.render('pages/index', {
        h1: 'Primeira página EJS'
    })
})

module.exports = router