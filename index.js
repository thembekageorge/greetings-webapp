var express = require('express');
var app = express();
var list = [];
var noDuplicity = [];
var counter = 0;
var name ;

// create a route
app.get('/', function (req, res) {
 res.send('You did not enter a name');
});

app.get('/greetings/:user', function(req, res){
 res.send('Hello ' + req.params.user);
  name = req.params.user;
if(noDuplicity.indexOf(name) === -1){
  noDuplicity.push(name)
}
   list.push(name);
   counter++;
});

app.get('/greeted/', function(req, res) {
res.send(noDuplicity);
});

app.get('/counter/:user', function(req, res) {
res.send('You have been greeted: ' + counter + ' times.');
});


var server = app.listen(3000, function () {

 var host = server.address().address;
 var port = server.address().port;

 console.log('Listening at http://%s:%s', host, port);

});
