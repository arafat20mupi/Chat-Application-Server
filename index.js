// index.js
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

const ChatRoute = require('./Chat/ChatRoute');
const UserRoute = require('./Users/UserRoute'); 

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
const uri = process.env.MONGO_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.get('/', (req, res) => {
  res.send('Server is running');
});

app.use('/api', ChatRoute);
app.use('/api' , UserRoute )
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
