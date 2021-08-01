var express = require('express');
const Process = require("process");
var app = express();
const dotenv = require('dotenv');
dotenv.config();
app.use("/public", express.static(__dirname + "/public"));
app.use( (req,res,next) =>{
    console.log(req.method+" "+req.path+" - "+req.ip);
    next();
});
app.get("/",function(req, res) {
 res.sendFile(__dirname + "/views/index.html");
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
