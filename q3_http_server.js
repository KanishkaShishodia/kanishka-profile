// Q3. HTTP Server - Tea Stall
const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' }); // status code 200
  res.end('Welcome to NodeJS!');
});

server.listen(PORT, () => {
  console.log(`Tea stall server running at http://localhost:${PORT}`);
});