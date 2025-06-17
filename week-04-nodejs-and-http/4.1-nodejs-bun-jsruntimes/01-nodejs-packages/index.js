// external packages
// use file extension .mjs for ES modules why? https://nodejs.org/api/esm.html#esm_mandatory_file_extensions

// import chalk from "chalk";

// console.log(chalk.blue("Hello, world!"));
// console.log(chalk.red.bold("This is an error message."));
// console.log(chalk.green.underline("This is a success message."));


// internal packages

const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "a.txt");

fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});