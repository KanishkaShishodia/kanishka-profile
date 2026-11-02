const http = require('http');
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('Hello World\n');
    res.write('This is my first Node.js server\n');
    res.write('I am learning Node.js\n');
    res.write('Node.js is a JavaScript runtime built on Chrome\'s V8 JavaScript engine\n');
    res.end('This is my page\n');
});
server.listen(4000, () =>
    console.log('Server running at http://localhost:4000/'));