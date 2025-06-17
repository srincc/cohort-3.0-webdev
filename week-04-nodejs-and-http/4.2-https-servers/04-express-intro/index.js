// creating http server
// express

const express = require("express");
const app = express();

// route handlers
app.get('/', (req, res) => {
  res.send('Hello World');
});

//start listening to the port
app.listen(3000);