// Q2. File Handling using fs module - Student Attendance List (attendance.txt)
const fs = require('fs');
const readline = require('readline');

const FILE = 'attendance.txt';

// Create the file if it doesn't exist yet
if (!fs.existsSync(FILE)) fs.writeFileSync(FILE, '');

// ---------- Helper functions ----------
function readNames() {
  return fs
    .readFileSync(FILE, 'utf8')
    .split('\n')
    .map((n) => n.trim())
    .filter(Boolean); // remove empty lines
}

function saveNames(names) {
  fs.writeFileSync(FILE, names.length ? names.join('\n') + '\n' : '');
}

// ---------- CRUD operations ----------
function addName(name) {
  if (!name) return console.log('Name cannot be empty.');
  const names = readNames();
  if (names.some((n) => n.toLowerCase() === name.toLowerCase())) {
    return console.log(`"${name}" is already in the list.`);
  }
  names.push(name);
  saveNames(names);
  console.log(`Added: ${name}`);
}

function showNames() {
  const names = readNames();
  if (names.length === 0) return console.log('Attendance list is empty.');
  console.log('\nAttendance List:');
  names.forEach((n, i) => console.log(`  ${i + 1}. ${n}`));
}

function updateName(oldName, newName) {
  if (!newName) return console.log('New name cannot be empty.');
  const names = readNames();
  const index = names.findIndex((n) => n.toLowerCase() === oldName.toLowerCase());
  if (index === -1) return console.log(`"${oldName}" not found.`);
  names[index] = newName;
  saveNames(names);
  console.log(`Updated: ${oldName} -> ${newName}`);
}

function deleteName(name) {
  const names = readNames();
  const index = names.findIndex((n) => n.toLowerCase() === name.toLowerCase());
  if (index === -1) return console.log(`"${name}" not found.`);
  names.splice(index, 1);
  saveNames(names);
  console.log(`Deleted: ${name}`);
}

// ---------- Menu ----------
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const ask = (question) => new Promise((resolve) => rl.question(question, resolve));

async function main() {
  while (true) {
    console.log('\n===== Attendance Menu =====');
    console.log('1. Add a student');
    console.log('2. Show all students');
    console.log('3. Update a student name');
    console.log('4. Delete a student');
    console.log('5. Exit');

    const choice = (await ask('Choose an option (1-5): ')).trim();

    switch (choice) {
      case '1':
        addName((await ask('Enter student name: ')).trim());
        break;
      case '2':
        showNames();
        break;
      case '3': {
        const oldName = (await ask('Enter the name to update: ')).trim();
        const newName = (await ask('Enter the new name: ')).trim();
        updateName(oldName, newName);
        break;
      }
      case '4':
        deleteName((await ask('Enter the name to delete: ')).trim());
        break;
      case '5':
        console.log('Goodbye!');
        rl.close();
        return;
      default:
        console.log('Invalid option, try again.');
    }
  }
}

main();