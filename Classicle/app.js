// CLASSICLE V1

var express = require("express"),
	app = express(),
	mongoose = require("mongoose"),
	passport = require("passport"),
	LocalStrategy = require("passport-local"),
	User = require("./user");

app.set("view engine", "ejs");
app.use(express.static("public"));
app.get("/", function(req, res){
	res.render("landing")
});



app.listen(process.env.PORT, process.env.IP, function(){
	console.log("Classicle Server has started!");
});