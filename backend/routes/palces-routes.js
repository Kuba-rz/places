const express = require('express')

const { getPlaceByUserId, getPlaceById } = require('../controllers/places-controller')
const router = express.Router()


router.get('/', (req, res) => {
    console.log('Get request in places')
    res.json({ message: 'It works' })
})

router.get('/user/:uid', getPlaceByUserId)

router.get('/:pid', getPlaceById)


module.exports = router