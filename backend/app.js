const express = require('express')
const bodyParser = require('body-parser')

const placesRoutes = require('./routes/palces-routes')

const app = express()

app.use('/api/places', placesRoutes) // => /api/places/...

app.listen(5000, () => {
    console.log('Listening on 5000')
})