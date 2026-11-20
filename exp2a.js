const fs = require('fs');
const file = 'sample.txt';

// CREATE
fs.writeFileSync(file, 'Hello, this is the first line.\n');
console.log('File created');

// READ
let data = fs.readFileSync(file, 'utf8');
console.log('File content:\n' + data);

// UPDATE (append)
fs.appendFileSync(file, 'This line was appended.\n');
console.log('File updated');
console.log('New content:\n' + fs.readFileSync(file, 'utf8'));

// RENAME
fs.renameSync(file, 'renamed.txt');
console.log('File renamed to renamed.txt');

// DELETE
fs.unlinkSync('renamed.txt');
console.log('File deleted');