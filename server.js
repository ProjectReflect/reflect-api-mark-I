var express = require('express');
var app = express();
var http = require('http')
var port = process.env.PORT ||1337;
var device;

console.log("hi");

var api = require('./app/api.js')

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// routes to api
app.use('/api',api);
app.use(express.static(__dirname + '/public'));


app.listen(port, function(err) {
	if (err) {
		console.log(err);
	}
	else {
		console.log('Listening on '+ port)
	}
});
