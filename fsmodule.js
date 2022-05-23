const fs = require("fs");

// Run On Non Blocking IO Module
fs.readFile("file.txt", (err, data) => {
  if (err) {
    console.log("Error reading file.txt", err);
  }
  if (data) {
    console.log("Data of file.txt", data.toString());
  }
});
// Donot Run On Non Blocking IO Module
const result = fs.readFileSync("file.txt");
console.log("result", result.toString());

// Run On Non Blocking IO Module
fs.writeFile(
  "files.docx",
  "hello world is already a hello world and will to be replaced by a new hello world.",
  () => {
    console.log("Content Written to file");
  }
);

// Donot run On Non Blocking IO Module

const writtenDataOnFile = fs.writeFileSync(
  "files.docx",
  "hello world is already a hello world and will to be replaced by a new hello world."
);
console.log("writtenDataOnFile", writtenDataOnFile);