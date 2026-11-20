const EventEmitter = require('events');

// Acts like a DOM element (e.g. a button)
const button = new EventEmitter();

button.on('click', () => console.log('Button clicked!'));
button.on('click', () => console.log('Second click handler ran'));
button.on('mouseover', () => console.log('Mouse is over the button'));

// Handler that runs only once, like { once: true } in the DOM
button.once('focus', () => console.log('Button focused (fires only once)'));

// Simulate user actions
button.emit('mouseover');
button.emit('click');
button.emit('focus');
button.emit('focus'); // ignored, since the handler was registered with once()

// Removing a listener, like removeEventListener
function temp() { console.log('Temporary handler'); }
button.on('keypress', temp);
button.emit('keypress');
button.off('keypress', temp);
button.emit('keypress'); // nothing happens