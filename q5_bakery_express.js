// Q5. Express.js with HTML pages - Bakery Website
// Setup:  npm init -y   then   npm install express
const express = require('express');

const app = express();
const PORT = 3000;

const BAKERY_NAME = 'Sweet Crumbs Bakery';

// Shared page layout (navigation bar + basic styling)
function page(title, content) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title} | ${BAKERY_NAME}</title>
  <style>
    body { font-family: Arial, sans-serif; margin: 0; background: #fff8f0; color: #4a2c1a; }
    nav { background: #8b4513; padding: 14px 24px; }
    nav a { color: #fff; margin-right: 20px; text-decoration: none; font-weight: bold; }
    nav a:hover { text-decoration: underline; }
    main { max-width: 700px; margin: 40px auto; padding: 0 20px; }
    li { margin: 8px 0; font-size: 18px; }
  </style>
</head>
<body>
  <nav>
    <a href="/">Home</a>
    <a href="/menu">Menu</a>
    <a href="/contact">Contact</a>
  </nav>
  <main>${content}</main>
</body>
</html>`;
}

// Home page
app.get('/', (req, res) => {
  res.send(
    page(
      'Home',
      `<h1>🥐 ${BAKERY_NAME}</h1>
       <p>Welcome! Freshly baked cakes, pastries and breads, made with love every morning.</p>`
    )
  );
});

// Menu page
app.get('/menu', (req, res) => {
  res.send(
    page(
      'Menu',
      `<h1>Our Menu</h1>
       <ul>
         <li>🎂 Chocolate Cake</li>
         <li>🍰 Black Forest Cake</li>
         <li>🥐 Butter Croissant</li>
         <li>🥧 Apple Pie</li>
         <li>🧁 Vanilla Cupcake</li>
         <li>🍞 Whole Wheat Bread</li>
       </ul>`
    )
  );
});

// Contact page
app.get('/contact', (req, res) => {
  res.send(
    page(
      'Contact',
      `<h1>Contact Us</h1>
       <p><strong>Phone:</strong> +91 98765 43210</p>
       <p><strong>Address:</strong> 12, Main Market Road, Meerut, Uttar Pradesh</p>`
    )
  );
});

// 404 page for any other route
app.use((req, res) => {
  res.status(404).send(page('Not Found', '<h1>404 - Page not found</h1>'));
});

app.listen(PORT, () => {
  console.log(`Bakery website running at http://localhost:${PORT}`);
});