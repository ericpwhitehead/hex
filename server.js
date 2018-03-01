var express = require('express');
var app = express();
var bodyParser = require('body-parser')

app.get('/', function(req,res) {
	res.status(200).json({'message': 'got it'});
});

app.listen(3000, () => 
  console.log('Example app listening on port 3000!')
);

