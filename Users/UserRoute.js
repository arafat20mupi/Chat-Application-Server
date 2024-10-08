// UserRoute.js
const express = require('express');
const { registerUser, loginUser, getUsers } = require('./UserController');
const router = express.Router();

// Define routes
router.post('/register', registerUser); 
router.post('/login', loginUser); 
router.get('/users', getUsers); 

module.exports = router;
