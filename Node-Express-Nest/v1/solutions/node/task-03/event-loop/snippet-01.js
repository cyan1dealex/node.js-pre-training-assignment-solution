console.log("Start");

setTimeout(() => console.log("Timer 1"), 0);
setTimeout(() => console.log("Timer 2"), 0);

setImmediate(() => console.log("Immediate 1"));
setImmediate(() => console.log("Immediate 2"));

process.nextTick(() => console.log("Next Tick 1"));
process.nextTick(() => console.log("Next Tick 2"));

Promise.resolve().then(() => console.log("Promise 1"));
Promise.resolve().then(() => console.log("Promise 2"));

console.log("End");
