// server.js

const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Serve static assets from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Fallback: serve index.html for any unmatched routes (for SPAs)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
