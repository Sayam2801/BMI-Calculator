//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req,res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/",function(req,res) {
  var w = Number(req.body.weight);
  var h = Number(req.body.height);

  var bmi = w/(h*h);
  res.send("Your BMI is "+Math.round(bmi*100)/100);
});

app.listen(8080, function() {
  console.log("Server is running on port 8080.");
});
