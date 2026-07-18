const fs = require("fs");
const util = require("util");

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

function processData() {
  console.log("Starting data processing...");

  // Mix of promises and callbacks - BROKEN!
  readFile("input.txt", "utf8")
    .then((data) => {
      console.log("File read successfully");

      // Process data
      const processedData = data.toUpperCase();

      // Write with callback instead of promise - WRONG!
      fs.writeFile("output.txt", processedData, (err) => {
        if (err) {
          console.error("Write error:", err);
          return;
        }

        console.log("File written successfully");

        // Read again with promise - INCONSISTENT!
        readFile("output.txt", "utf8")
          .then((verifyData) => {
            console.log("Verification successful");
            console.log("Data length:", verifyData.length);
          })
          .catch((err) => {
            console.error("Verification error:", err);
          });
      });
    })
    .catch((err) => {
      console.error("Read error:", err);

      // Create file if it doesn't exist
      fs.writeFile("input.txt", "Hello World!", (writeErr) => {
        if (writeErr) {
          console.error("Could not create input file:", writeErr);
        } else {
          console.log("Created input file, please run again");
        }
      });
    });
}

processData();
