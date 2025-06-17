// Let’s look at the code to read from a file asynchronously. Here, we pass in a function as an argument. This function is called a callback since the function gets called-back when the file is read or when an error occurs.

// fs.readFile is a function that takes a file path, a encoding, and a callback function. It will read the file and call the callback function with the contents of the file.

const fs = require('fs');
fs.readFile("a.txt","utf-8", function(err, contents){
  console.log(contents)
});

// setTimeout is a function that takes a callback function and a delay in milliseconds. It will call the callback function after the delay.
function run() {
	console.log("I will run after 1s");
}
setTimeout(run, 1000);
console.log("I will run immedietely");