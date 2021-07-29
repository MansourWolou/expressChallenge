var express = require('express');
var app = express();

console.log(__dirname + "/views/index.html");
app.use("/",function (req,res){
 express.static(__dirname + "/public/style.css");
})
app.get("/",function(req, res) {
 res.sendFile(__dirname + "/views/index.html");
})





















 module.exports = app;
