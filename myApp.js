var express = require('express');
var app = express();

console.log(__dirname + "/public/style.css");
//app.use(express.static(__dirname + "/public"));
app.use("/public", express.static(__dirname + "/public"));
app.get("/",function(req, res) {
 res.sendFile(__dirname + "/views/index.html");
})





















 module.exports = app;
