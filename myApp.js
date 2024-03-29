var express = require('express');
const Process = require("process");
var app = express();
const dotenv = require('dotenv');
dotenv.config();
app.use("/public", express.static(__dirname + "/public"));
app.get("/",function(req, res) {
 res.sendFile(__dirname + "/views/index.html");
})
app.get("/:word/echo",(req,res,next)=>{
    console.log(req.params)
    res.json(
        {
            echo: req.params.word
        }
    )
})

// don't know why it is not working.
app.get("/", (req, res) => {
    var reponse;
    if (process.env.MESSAGE_STYLE === "uppercase") {
        response = "Hello World".toUpperCase();
    } else {
        response = "Hello World";
    }
    res.json({
        message: response
    });
})
module.exports = app;
