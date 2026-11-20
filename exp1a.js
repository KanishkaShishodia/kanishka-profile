const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}
const emitter = new MyEmitter();

emitter.on('greet', (name) => {
  console.log(`Hello, ${name}!`);
});

emitter.on('exit', () => {
  console.log('Exiting... Goodbye!');
});

emitter.emit('greet', 'Student');
emitter.emit('exit');