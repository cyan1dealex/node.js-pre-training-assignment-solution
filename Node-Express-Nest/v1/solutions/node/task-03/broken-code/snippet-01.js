const fs = require("fs").promises;

let counter = 0;
const results = [];

async function processFiles() {
  const files = ["file1.txt", "file2.txt", "file3.txt"];

  for (let i = 0; i < files.length; i++) {
    fs.readFile(files[i], "utf8")
      .then((content) => {
        counter++;
        results[i] = content.toUpperCase();

        if (counter === files.length) {
          console.log("All files processed:", results);
        }
      })
      .catch((err) => {
        console.error(`Error reading ${files[i]}:`, err.message);
        // Create the file for testing
        fs.writeFile(files[i], `Content of ${files[i]}`).then(() =>
          console.log(`Created ${files[i]}`)
        );
      });
  }
}

processFiles();
