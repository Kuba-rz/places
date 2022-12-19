const express = require('express')
const { check } = require('express-validator')

const { getPlaceByUserId, getPlaceById, createPlace, updatePlace, deletePlace } = require('../controllers/places-controller')
const router = express.Router()


router.get('/', (req, res) => {
    console.log('Get request in places')
    res.json({ message: 'It works' })
})

router.get('/user/:uid', getPlaceByUserId)

router.get('/:pid', getPlaceById)

router.post('/',
    [
        check('title', 'Title is invalid').not().isEmpty(),
        check('description', 'Description is invalid').isLength({ min: 5 }),
        check('address', 'Address is invalid').not().isEmpty()
    ],
    createPlace)

router.patch('/:pid',
    [
        check('title', 'Title is invalid').not().isEmpty(),
        check('description', 'Description is invalid').isLength({ min: 5 }),
        check('address', 'Address is invalid').not().isEmpty()
    ],
    updatePlace)

router.delete('/:pid', deletePlace)


module.exports = router