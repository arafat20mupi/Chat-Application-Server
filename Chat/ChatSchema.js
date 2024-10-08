const mongoose = require('mongoose');

const ChatSchema = new mongoose.Schema({
    sender: {
        type: String,
        required: true,  // The email or ID of the sender
    },
    receiver: {
        type: String,
        required: true,  // The email or ID of the receiver
    },
    message: {
        type: String,
        required: true,  // The message text
    },
    timestamp: {
        type: Date,
        default: Date.now  // Automatically set the timestamp when the message is created
    }
});

module.exports = mongoose.model('Chat', ChatSchema);
