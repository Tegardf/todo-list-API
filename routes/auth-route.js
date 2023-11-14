const express = require('express')
const bcrypt = require ('bcrypt')
const jwt = require('jsonwebtoken')
const { loginUser, registerUser } = require('../controller/auth-controller')

const route = express.Router()

route.post('/login', loginUser)
route.post('/register', registerUser)

module.exports = route