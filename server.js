var express = require('express');
var app = express();
var bodyParser = require('body-parser')

app.get('/', function(req,res) {
	res.status(200).json({'message': 'got it'});
});

var port = process.env.port || 3000;

app.listen(port);

