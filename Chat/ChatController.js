// ChatController.js
const Chat = require("./ChatSchema");

// Send message function
const sendMessage = async (req, res) => {
    const { sender, receiver, message } = req.body; // Include sender and receiver

    if (!message || message.trim() === "") {
        return res.status(400).send({ message: 'Message cannot be empty' });
    }

    const chat = new Chat({ message, sender, receiver }); // Save sender and receiver

    try {
        await chat.save();
        res.status(201).send(chat);
    } catch (error) {
        console.error('Error saving message:', error);
        res.status(500).send({ message: 'Failed to send message' });
    }
};



// In your message controller
const getMessagesBetweenUsers = async (req, res) => {
    const { sender, receiver } = req.params;

    try {
        const messages = await Chat.find({
            $or: [
                { sender, receiver },
                { sender: receiver, receiver: sender }
            ]
        }).sort({ timestamp: -1 });

        res.send(messages);
    } catch (error) {
        console.error('Error fetching messages:', error);
        res.status(500).send({ message: 'Failed to fetch messages' });
    }
};


module.exports = {
    sendMessage,
    getMessagesBetweenUsers,
};
