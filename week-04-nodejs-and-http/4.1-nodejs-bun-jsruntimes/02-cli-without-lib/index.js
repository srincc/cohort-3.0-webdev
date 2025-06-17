const fs = require("fs");

function countWords(fileName) {
  const file = fs.readFileSync(fileName, "utf-8");
  const words = file.split(" ");
  console.log(words.length);
}

countWords(process.argv[2]); // process.argv[2] is the first argument passed to the script


