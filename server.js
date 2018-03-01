var express = require('express');
var app = express();
var bodyParser = require('body-parser')

app.get('/', function(req,res) {
	res.status(200).json({'message': 'got it'});
});

app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
