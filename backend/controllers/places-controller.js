const HttpError = require('../models/http-error')

const DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'Empire State Building',
        description: 'One of the most famous sky scrapers in the world!',
        imageUrl:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
        address: '20 W 34th St, New York, NY 10001',
        location: {
            lat: 40.7484405,
            lng: -73.9878584
        },
        creator: 'u1'
    },
    {
        id: 'p2',
        title: 'Montenegro Bar',
        description: 'Nice clear water',
        imageUrl:
            'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/02/83/bf/queens-beach.jpg?w=600&h=400&s=1',
        address: 'Montenegro Bar',
        location: {
            lat: 42.1021539,
            lng: 19.0522341
        },
        creator: 'u2'
    }
]

const getPlaceById = (req, res, next) => {
    const place = DUMMY_PLACES.find(place => place.id == req.params.pid)
    if (!place) {
        throw new HttpError('Could not find a place for the provided place ID', 404)
    } else {
        res.json({ message: `Yay we got ${place.title}` })
    }
}

const getPlaceByUserId = (req, res, next) => {
    const uid = req.params.uid
    const places = DUMMY_PLACES.filter(place => place.creator == uid)
    if (!places.length) {
        next(new HttpError('Could not find a place for the provided user ID', 404))
    } else {
        res.json({ places })
    }
}

module.exports = { getPlaceByUserId, getPlaceById }
