// Q1. EventEmitter & Event Loop - School Bell System
const EventEmitter = require('events');
const fs = require('fs');

const bell = new EventEmitter();

// Register listeners (what should happen when an event is triggered)
bell.on('classStart', (period) => {
  console.log(`🔔 classStart: Period ${period} has started!`);
});

bell.on('classEnd', (period) => {
  console.log(`🔔 classEnd: Period ${period} has ended!`);
});

console.log('--- School bell system started ---');

// Event loop demo: schedule three different async callbacks
setTimeout(() => console.log('setTimeout      -> ring bell'), 0);
setImmediate(() => console.log('setImmediate    -> ring bell'));
process.nextTick(() => console.log('process.nextTick -> ring bell'));

// Trigger the events (emit() runs the listeners synchronously)
bell.emit('classStart', 1);
bell.emit('classEnd', 1);

console.log('--- End of main script ---');

// Bonus: inside an I/O callback, setImmediate ALWAYS beats setTimeout
fs.readFile(__filename, () => {
  console.log('\n[Inside an I/O callback]');
  setTimeout(() => console.log('setTimeout      -> ring bell (I/O)'), 0);
  setImmediate(() => console.log('setImmediate    -> ring bell (I/O)'));
});