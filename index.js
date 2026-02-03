require('dotenv').config();
const express = require('express');
console.log('Initializing backend application...');
const cors = require('cors');
const path = require('path');
const app = express();
const port = process.env.PORT || 3001;

// Import routes
const authRoutes = require('./routes/auth');
const universityRoutes = require('./routes/universities');

app.use(cors());
app.use(express.json());

// API routes
app.use('/api/auth', authRoutes);
app.use('/api/universities', universityRoutes);


// Health check endpoint (required for Render)
app.get('/api/health', (req, res) => {
  res.json({
    status: "ok",
    message: "Backend is running 🚀"
  });
});

app.get('/', (req, res) => {
  res.send('unifriend run');
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}

module.exports = app;
