const express = require("express");
const jwt = require("jsonwebtoken");

const jwt_secret = "iloveher";

const app = express();

app.use(express.json()); // to get access to req.body or parse post req body

const users = [];

app.post("/signup", function (req, res) {
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

app.post("/signin", function (req, res) {
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

app.get("/me", function (req, res) {
  const token = req.headers.authorization;
  const decodedInformation = jwt.verify(token, jwt_secret);
  const username = decodedInformation.username;

  const foundUser = users.find(function (u) {
    if (u.username == username) {
      return true;
    } else {
      false;
    }
  });

  if (foundUser) {
    res.json({
      username: foundUser.username,
      password: foundUser.password,
    });
  } else {
    res.json({
      message: "Unauthorized token",
    });
  }
});

app.listen(3000);
