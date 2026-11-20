console.log('1. Start (synchronous)');

setTimeout(() => console.log('5. setTimeout (timers phase)'), 0);

setImmediate(() => console.log('6. setImmediate (check phase)'));

process.nextTick(() => console.log('3. process.nextTick (runs before promises)'));

Promise.resolve().then(() => console.log('4. Promise microtask'));

console.log('2. End (synchronous)');