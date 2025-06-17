const express = require("express");
const app = express();

// function that returns a boolean if the age of person is more than 14
// function isOldEnough(age) {
//   if (age > 14) {
//     return true;
//   } else {
//     return false;
//   }
// }

// app.get("/ride2", function (req, res) {
//   if (isOldEnough(req.query.age)) {
//     res.json({
//       msg: "you have sucessfully riden the ride 2",
//     });
//   } else {
//     res.status(411).json({
//       msg: "sorry you are not of age yet",
//     });
//   }
// });

// app.get("/ride1", function (req, res) {
//   if (isOldEnough(req.query.age)) {
//     res.json({
//       msg: "you have sucessfully riden the ride 1",
//     });
//   } else {
//     res.status(411).json({
//       msg: "sorry you are not of age yet",
//     });
//   }
// });

function isOldEnoughMiddleware(req,res,next){
  const age = req.query.age;
  if(age>=14){
    next();
  }
  else{
    res.json({
      msg: "sorry you are not of age yet"
    })
  }
}

// app.use(isOldEnoughMiddleware); // global middleware

app.get("/ride2",isOldEnoughMiddleware, function (req, res) {
  res.json({
    msg: "you have sucessfully riden the ride 2",
  });
});

app.get("/ride1",isOldEnoughMiddleware, function (req, res) {
  res.json({
    msg: "you have sucessfully riden the ride 1",
  });
});

app.listen(3000);
