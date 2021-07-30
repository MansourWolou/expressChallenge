var express = require('express');
const Process = require("process");
var app = express();
const dotenv = require('dotenv');
dotenv.config();
const  msg = `${Process.env.MESSAGE_STYLE}`;


console.log( msg);
//app.use(express.static(__dirname + "/public"));
app.use("/public", express.static(__dirname + "/public"));
app.get("/",function(req, res) {
 res.sendFile(__dirname + "/views/index.html");
})

app.get("/json", (req, res) => {
    let rslt;
    if (msg === "uppercase"){
      rslt = {message: "HELLO JSON"};
     }else {
      rslt = {message: "hello json"};
     }
res.json(rslt)

});




















 module.exports = app;
