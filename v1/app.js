// CLASSICLE V1

var express = require("express"),
	app = express(),
	mongoose = require("mongoose"),
	passport = require("passport"),
	LocalStrategy = require("passport-local"),
	User = require("./user"),
	MongoClient = require('mongodb').MongoClient,
	//route
	path = require('path'),
	// favicon = require('serve-favicon'),
	// logger = require('morgan'),
	// cookieParser = require('cookie-parser'),
	bodyParser = require("body-parser");

//var routes = require('./routes/index');
var users = require('./routes/users');
var custom = require('./routes/custom');
var index = require('./routes/index');

mongoose.connect("mongodb://localhost/yelp_scene", {useNewUrlParser: true}, {useUnifiedTopology: true});


app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'views'));
app.use(express.static("public"));



//routes
//app.use('/', routes);
app.use('/users', users);
app.use('/custom', custom);
app.use('/index', index);

//landing page
app.get("/", function(req, res){
	res.render("landing")
});

// Here is our post route
app.post('/', function(req, res) {
});





app.listen(process.env.PORT, process.env.IP, function(){
	console.log("Classicle Server has started!");
});