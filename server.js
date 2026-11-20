const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

function serveHTML(res, fileName) {
  const filePath = path.join(__dirname, 'views', fileName);
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Error loading page');
      return;
    }
    res.setHeader('Content-Type', 'text/html');
    res.send(data);
  });
}

app.get('/', (req, res) => serveHTML(res, 'index.html'));
app.get('/about', (req, res) => serveHTML(res, 'about.html'));
app.get('/contact', (req, res) => serveHTML(res, 'contact.html'));

app.listen(3000, () => console.log('Server running on http://localhost:3000'));