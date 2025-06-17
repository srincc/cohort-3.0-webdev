const express = require("express");
const { UserModel, TodoModel } = require("./db");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

const JWT_SECRET = "ashshfs@123";

const app = express();
app.use(express.json());

mongoose.connect(
  "mongodb+srv://shriyanshthakur12:bqAJdqbPw1mziyuv@cluster0.bjhqu42.mongodb.net/todo-app-database"
);

app.post("/signup", async function (req, res) {
  const email = req.body.email;
  const password = req.body.password;
  const name = req.body.name;

  await UserModel.create({
    email: email,
    password: password,
    name: name,
  });

  console.log("signed up");

  res.json({
    message: "you are signed up",
  });
});

app.post("/signin", async function (req, res) {
  const email = req.body.email;
  const password = req.body.password;

  const user = await UserModel.findOne({
    email: email,
    password: password,
  });

  console.log("signed in user is : " + user);
  console.log("signed in user's id is : " + user._id.toString());

  if (user) {
    const token = jwt.sign(
      {
        id: user._id.toString(),
      },
      JWT_SECRET
    );
    res.json({
      token: token,
    });
  } else {
    res.status(403).json({
      message: "Incorrect Credentials",
    });
  }
});

app.post("/todo", auth, async function (req, res) {
  const userId = req.userId;
  const title = req.body.title;
  const done = req.body.done;

  await TodoModel.create({
    title: title,
    done: done,
    userId: userId,
  });

  res.json({
    message: "Todo created",
  });
});

app.get("/todos", auth, async function (req, res) {
  const userId = req.userId;

  const todos = await TodoModel.find({
    userId: userId,
  });

  res.json({
    todos: todos,
  });
});

function auth(req, res, next) {
  const token = req.headers.token;

  const decodeData = jwt.verify(token, JWT_SECRET);

  console.log("authenticated user's id is : " + decodeData.id);

  if (decodeData) {
    req.userId = decodeData.id;
    next();
  } else {
    res.status(403).json({
      message: "Incorrect credentials",
    });
  }
}

app.listen(3000);
