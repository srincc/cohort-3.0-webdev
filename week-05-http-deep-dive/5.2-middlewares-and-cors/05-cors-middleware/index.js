const express = require("express");
const cors =  require("cors");

const app = express();

app.use(express.json());

// to allow cors - (cross origin resource sharing)
app.use(cors()); 

//to allow cors with options/selectively
// app.use(cors(), {
//     origin: "http://localhost:5000",
//     methods: "GET, POST",
//     allowedHeaders: "Content-Type, Authorization",
//     hosts: ["localhost:5000", "localhost:3000"],
// });

// to host frontend and backend on same url
// app.get("/", function(req,res){
//     res.sendFile(__dirname + "/public/index.html")
// })

app.post("/sum", function(req,res){
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);

    res.json({
        answer : a + b
    })
})

app.listen(3000);