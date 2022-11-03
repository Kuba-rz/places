const express = require('express')
const bodyParser = require('body-parser')

const placesRoutes = require('./routes/palces-routes')

const app = express()

app.use('/api/places', placesRoutes) // => /api/places/...

app.use((error, req, res, next) => {
    if (res.headerSent) {
        return next(error)
    }

    res.status(error.code || 500).json({ message: error.message || 'Something went wrong!' })
})

app.listen(5000, () => {
    console.log('Listening on 5000')
})