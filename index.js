var express = require('express');
var app = express();
var list = [];
var noDuplicity = [];

// create a route
app.get('/', function (req, res) {
 res.send('Hello World!');
});

app.get('/greetings/:user', function(req, res){
 res.send('Hello ' + req.params.user);
 var name = req.params.user;
 list.push(name);
});

app.get('/greeted', function(req, res) {
res.send(list);
});

//start the server
var server = app.listen(3000, function () {

 var host = server.address().address;
 var port = server.address().port;

 console.log('Example app listening at http://%s:%s', host, port);

});
