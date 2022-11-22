const express = require('express')
const bodyParser = require('body-parser')

const placesRoutes = require('./routes/palces-routes')
const userRoutes = require('./routes/user-routes')
const HttpError = require('./models/http-error')

const app = express()

app.use(bodyParser.json())

app.use('/api/places', placesRoutes) // => /api/places/...
app.use('/api/users', userRoutes) // => /api/routes...

app.use((req, res, next) => {
    next(new HttpError('This route could not be found', 404))
})

app.use((error, req, res, next) => {
    if (res.headerSent) {
        return next(error)
    }

    res.status(error.code || 500).json({ message: error.message || 'Something went wrong!' })
})

app.listen(5000, () => {
    console.log('Listening on 5000')
})