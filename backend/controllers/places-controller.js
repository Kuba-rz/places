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