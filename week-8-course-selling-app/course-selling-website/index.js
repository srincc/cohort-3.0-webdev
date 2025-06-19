const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config();

const { userRouter } = require("./Routes/user");
const { courseRouter } = require("./Routes/course");
const { adminRouter } = require("./Routes/admin");

const app = express();

// Router
app.use("/api/v1/user", userRouter);
app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/course", courseRouter);

async function main() {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("db connected");
    app.listen(3000);
    console.log("started listening on port 3000");
}
main();