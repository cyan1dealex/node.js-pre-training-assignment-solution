const fs = require("fs");

console.log("=== Start ===");

fs.readFile(__filename, () => {
  console.log("fs.readFile");

  setTimeout(() => console.log("Timer in readFile"), 0);
  setImmediate(() => console.log("Immediate in readFile"));

  process.nextTick(() => console.log("NextTick in readFile"));
});

setTimeout(() => {
  console.log("Timer");
  process.nextTick(() => console.log("NextTick in Timer"));
}, 0);

setImmediate(() => {
  console.log("Immediate");
  process.nextTick(() => console.log("NextTick in Immediate"));
});

process.nextTick(() => {
  console.log("NextTick");
  process.nextTick(() => console.log("Nested NextTick"));
});

console.log("=== End ===");
