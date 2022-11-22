const { v4: uuid } = require('uuid')

const DUMMY_USERS = [
    {
        id: 1,
        name: 'Kuba'
    },
    {
        id: 2,
        name: 'Kala'
    },
    {
        id: 3,
        name: 'Oskar'
    },
    {
        id: 4,
        name: 'Wiola'
    },
    {
        id: 5,
        name: 'Piotr'
    }
]

const getUsers = (req, res, next) => {
    res.status(200).json({ 'users': DUMMY_USERS })
}


function signup(req, res, next) {

    const { name } = req.body
    const newUser = { id: uuid(), name }
    DUMMY_USERS.push(newUser)
    res.json({ 'message': 'uploaded succesfully' })
}


//const signup = (req, res, next) => {
//    const { name } = req.body
//    const newUser = { id: uuid(), name }
//    DUMMY_USERS.push(newUser)
//    res.json({ 'message': 'uploaded succesfully' })
//}
//
//
//const login = (req, res, next) => {
//    const { name } = req.body
//    const user = DUMMY_USERS.find(user => user.name == name)
//    res.json({ 'user': user })
//}


const login = function (req, res, next) {
    const { name } = req.body
    const user = DUMMY_USERS.find(user => user.name == name)
    res.json({ 'user': user })
}


module.exports = { getUsers, signup, login }