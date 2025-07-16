const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const storyRoutes = require('./routes/story');
app.use('/api/story', storyRoutes);

// Basic route
app.get('/', (req, res) => {
  res.json({ message: 'TaleCraft Server is running!' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
