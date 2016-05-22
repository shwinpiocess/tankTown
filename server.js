var express = require('express');
var app     = express();
var http    = require('http').Server(app);
var port    = process.env.PORT || 8080;

app.use(express.static(__dirname + '/dist/css'));
app.use(express.static(__dirname + '/dist/js'));
app.use(express.static(__dirname + '/dist/img'));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/dist/views/index.html');
});

http.listen(port, function(){
  console.log('node up ' + port);
});