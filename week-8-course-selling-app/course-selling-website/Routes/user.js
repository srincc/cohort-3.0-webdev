// const express = require("express");
// const Router = express.Router;
// or
// const {Router} = require("express"); //object destructuring syntax

const { Router } = require("express");
const { userModel, courseModel, purchaseModel } = require("../db");
const jwt = require("jsonwebtoken");
const { JWT_USER_PASSWORD } = require("../config");
const { userMiddleware } = require("../middleware/user");

const userRouter = Router();

userRouter.post("/signup", async function (req, res) {
  const { email, password, firstName, lastName } = req.body;

  await userModel.create({
    email,
    password,
    firstName,
    lastName,
  });

  res.json({
    message: "signup sucessful",
  });
});

userRouter.post("/signin", async function (req, res) {
  const { email, password } = req.body;

  const user = await userModel.findOne({
    email,
    password,
  });

  if (user) {
    const token = jwt.sign(
      {
        id: user._id,
      },
      JWT_USER_PASSWORD
    );

    res.json({
      token: token,
    });
  } else {
    res.json({
      message: "invalid credentials",
    });
  }
});

userRouter.get("/purchases", userMiddleware, async function (req, res) {
  const userId = req.userId;

  console.log(purchaseModel);
  const purchases = await purchaseModel.find({
    userId,
  });

  //   let purchasedCourseIds = [];
  //   for (let i = 0; i < purchases.length; i++) {
  //     purchasedCourseIds.push(purchases[i].courseId);
  //   }

  const coursesData = await courseModel.find({
    // _id: { $in: purchasedCourseIds },
    _id: { $in: purchases.map((x) => x.courseId) },
  });

  res.json({
    purchases,
    coursesData,
  });
});

module.exports = {
  userRouter: userRouter,
};
