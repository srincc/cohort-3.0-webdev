const express = require("express");
const jwt = require("jsonwebtoken");

const jwt_secret = "iloveher";

const app = express();

app.use(express.json()); // to get access to req.body or parse post req body

const users = [];

function logger(req,res,next){
  console.log(req.method + "request come!");
  next();
}

// localhost:3000
app.get("/", function(req,res){
  res.sendFile(__dirname + "/public/index.html")
})

app.post("/signup",logger, function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  users.push({
    username: username,
    password: password,
  });

  res.json({
    message: "you are signed up",
  });

  console.log(users);
});

app.post("/signin", logger, function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  const foundUser = users.find(function (u) {
    if (u.username == username && u.password == password) {
      return true;
    } else {
      return false;
    }
  });

  if (foundUser) {
    const token = jwt.sign(
      {
        username: username,
      },
      jwt_secret
    );

    // foundUser.token = token; // no need to store jwt in db
    res.header("jwt", token);
    res.json({
      token: token,
    });
  } else {
    res.status(403).send({
      message: "Invalid username or password",
    });
  }
  console.log(users);
});

// auth middleware
function auth(req, res, next) {
  const token = req.headers.authorization;
  const decodedData = jwt.verify(token, jwt_secret);
  const username = decodedData.username;
  if (username) {
    req.username = username;
    next();
  } else {
    res.json({
      message: "you are not logged in",
    });
  }
}

app.get("/me",logger, auth, function (req, res) {
  const foundUser = users.find(function (u) {
    if (u.username == req.username) {
      return true;
    } else {
      false;
    }
  });

  res.json({
    username: foundUser.username,
    password: foundUser.password,
  });
});

app.listen(3000);
