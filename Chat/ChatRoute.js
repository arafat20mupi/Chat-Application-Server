const express = require('express');
const { sendMessage, getMessagesBetweenUsers } = require('./ChatController');
const router = express.Router();

// Route to send a message
router.post('/messages', sendMessage);

// Route to get messages between two users
router.get('/messages/:sender/:receiver', getMessagesBetweenUsers);

module.exports = router;
