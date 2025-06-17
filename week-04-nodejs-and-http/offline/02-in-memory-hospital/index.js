const express = require("express");
const app = express();

app.use(express.json()); // middlewares - to be learned

const user = [
  {
    name: "john",
    kidneys: [
      {
        healthy: true,
      },
    ],
  },
];

// showing all the kidneys detail of an user
app.get("/", function (req, res) {
  const johnKidneys = user[0].kidneys;
  const noOfKidneys = johnKidneys.length;
  let noOfHealthyKidneys = 0;
  for (let i = 0; i < johnKidneys.length; i++) {
    if (johnKidneys[i].healthy) {
      noOfHealthyKidneys = noOfHealthyKidneys + 1;
    }
  }
  const noOfUnhealthyKidneys = noOfKidneys - noOfHealthyKidneys;
  res.json({
    noOfKidneys,
    noOfHealthyKidneys,
    noOfUnhealthyKidneys,
  });
});

// adding kidneys (healthy or unhealthy)
app.post("/", function (req, res) {
  const isHealthy = req.body.isHealthy;
  user[0].kidneys.push({
    healthy: isHealthy,
  });
  res.json({
    msg: "done!",
  });
});

// changing all the kidneys to healthy
app.put("/", function (req, res) {
  if (isThereAtleastOneUnhealthyKidney()) {
    for (let i = 0; i < user[0].kidneys.length; i++) {
      user[0].kidneys[i].healthy = true;
    }
    res.json({});
  } else {
    res.status(411).json({
      msg: "no unhealthy kidney found",
    });
  }
});

// removing all the unhealthy kidneys
app.delete("/", function (req, res) {
  if (isThereAtleastOneUnhealthyKidney()) {
    const newKidneys = [];
    for (let i = 0; i < user[0].kidneys.length; i++) {
      if (user[0].kidneys.healthy) {
        newKidneys.push({
          healthy: true,
        });
      }
    }
    user[0].kidneys = newKidneys;
    res.json({
      msg: "done",
    });
  } else {
    res.status(411).json({
      msg: "you dont have any bad kidney",
    });
  }
  5;
});

function isThereAtleastOneUnhealthyKidney() {
  let atleastOneUnhealthyKidney = false;
  for (let i = 0; i < user[0].kidneys.length; i++) {
    if (!user[0].kidneys[i].healthy) {
      atleastOneUnhealthyKidney = true;
    }
  }
  return atleastOneUnhealthyKidney;
}

app.listen(3000);
