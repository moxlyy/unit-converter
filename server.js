require('dotenv').config(); // Load environment variables from .env file

const express = require('express');
const conversions = require('./src/conversions');

const app = express();
const PORT = process.env.PORT || 3000; // Use PORT from .env or default to 3000

app.use(express.json());

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the Unit Converter Web Interface!');
});

// /convert route
app.get('/convert', (req, res) => {
  const { value, sourceUnit, targetUnit } = req.query;

  // Validate query parameters
  if (!value || !sourceUnit || !targetUnit) {
    return res.status(400).json({ error: 'Missing required query parameters.' });
  }

  // Perform the conversion
  const result = conversions.convert(parseFloat(value), sourceUnit, targetUnit);

  // Handle unsupported conversions
  if (result === 'Conversion not supported.') {
    return res.status(400).json({ error: 'Conversion not supported.' });
  }

  // Return the result
  res.json({ value, sourceUnit, targetUnit, result });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});