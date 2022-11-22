const { v4: uuid } = require('uuid')

const HttpError = require('../models/http-error')

const DUMMY_USERS = [
    {
        id: 1,
        name: 'Kuba',
        email: 'kuba@test.com'
    },
    {
        id: 2,
        name: 'Kala',
        email: 'kala@test.com'
    },
    {
        id: 3,
        name: 'Oskar',
        email: 'oskar@test.com'
    },
    {
        id: 4,
        name: 'Wiola',
        email: 'wiola@test.com'
    },
    {
        id: 5,
        name: 'Piotr',
        email: 'piotr@test.com'
    }
]

const getUsers = (req, res, next) => {
    res.status(200).json({ 'users': DUMMY_USERS })
}


function signup(req, res, next) {

    const { name, email } = req.body
    if (!name || !email) {
        throw new HttpError('Please provide a name and an email', 401)
    }
    const hasUser = DUMMY_USERS.find(user => user.email == email)
    if (hasUser) {
        throw new HttpError('A user with this email address already exists', 422)
    }
    const newUser = { id: uuid(), name, email }
    DUMMY_USERS.push(newUser)
    res.status(201).json({ 'message': 'uploaded succesfully' })
}


const login = function (req, res, next) {
    const { name, email } = req.body
    const user = DUMMY_USERS.find(user => user.email == email)
    if (!user) {
        throw new HttpError('Could not find a user with this email', 401)
    }
    res.json({ 'user': user })
}


module.exports = { getUsers, signup, login }