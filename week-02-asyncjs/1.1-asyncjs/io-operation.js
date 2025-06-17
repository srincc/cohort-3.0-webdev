// A require statement lets you import code/functions export from another file/module.
// The fs module is a built-in module that lets you read from and write to the file system.
// The readFileSync function is a synchronous function that reads the contents of a file synchronously.
// input output heavy operations are blocking operations, they will not return until the operation is complete.

const fs = require("fs");

const contents = fs.readFileSync("a.txt", "utf-8");
console.log(contents);

const contents2 = fs.readFileSync("b.txt", "utf-8");
console.log(contents2);