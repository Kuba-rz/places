const express = require('express')
const { check } = require('express-validator')


const { getUsers, signup, login } = require('../controllers/users-controller')

const router = express.Router()


router.get('/', getUsers)

router.post('/signup', [
    check('name', 'Name is invalid').not().isEmpty(),
    check('email', 'Email is invalid').normalizeEmail() // Test@test.com => test@test.com
        .isEmail(),
    check('password', 'Password is invalid').isLength({ min: 6 })
], signup)

router.post('/login', login)


module.exports = router