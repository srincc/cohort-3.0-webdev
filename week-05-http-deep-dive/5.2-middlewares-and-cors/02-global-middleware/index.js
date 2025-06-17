const express = require("express");

const app = express();

let requestCount = 0;

// create a middleware function that logs the total number of requests
function requestIncreaser(req, res, next) {
    // increment the requestCount by 1
    requestCount++;

    // log the total number of requests
    console.log(`Total Number of Requests = ${requestCount}`);

    // call the next middleware function in the stack
    next();
}

// use the requestIncreaser middleware for all routes
app.use(requestIncreaser);

// This way of defining middleware is called global middleware, which is used for all routes written below it

app.get("/sum", function (req, res) {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans: a + b,
    });
});

app.get("/subtract", function (req, res) {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans: a - b,
    });
});

app.get("/multiply", function (req, res) {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans: a * b,
    });
});

app.get("/divide", function (req, res) {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans: a / b,
    });
});

// Start the server on port 3000
app.listen(3000);