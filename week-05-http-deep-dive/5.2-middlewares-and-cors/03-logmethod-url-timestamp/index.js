//Create a middleware function that logs the method, URL and timestamp of the request

const express = require("express");

const app = express();

// create a middleware function that logs the method, URL and timestamp of the request
function loggerMiddleware(req, res, next) {
    // log the method, URL and timestamp of the request
    console.log(`Method: ${req.method}`);
    console.log(`URL: ${req.protocol}://${req.get('host')}${req.url}`);
    console.log(`Timestamp: ${new Date()}`);

    // call the next middleware function in the stack
    next();
}

// use the loggerMiddleware for all routes
app.use(loggerMiddleware);


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