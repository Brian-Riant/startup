// server.js
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const startupRoutes = require('./routes/startupRoutes');

const morgan = require('morgan');


const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use('/startups', startupRoutes);
// Use morgan middleware for logging HTTP requests
app.use(morgan('dev'));

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/startupDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Error connecting to MongoDB:', err));

// Define routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
