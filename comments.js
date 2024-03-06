// Create web server
const express = require('express');
const app = express();

// Run server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

// Send response
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/api/comments', (req, res) => {
  res.send('Hello World');
});
