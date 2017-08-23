var express = require('express');
var app = express();
var list = [];
var noDup = [];
var name = '';
var map = new Object();
// var bodyParser = require('body-parser');

app.get('/', function(req, res) {
  res.send('You did not enter a name');
});

app.get('/greetings/:user', function(req, res) {
  res.send('Hello, ' + req.params.user + '!');
  name = req.params.user;
  if (noDup.indexOf(name) === -1) {
    noDup.push(name);
  }
  list.push(name);
});

app.get('/greeted/', function(req, res) {
  res.send("People greeted : " + noDup);
});

// app.get('/counter/', function(req, res) {
//   res.send("People greeted : " + noDup);
// });

app.get('/counter/:user', function(req, res) {
  name = req.params.user;
  for (var i = 0; i < list.length; i++) {
    if (map[list[i]] != null) {
      map[list[i]] += 1;
    } else {
      map[list[i]] = 1;
    }
  res.send('Hello, '+ name + ' has been greeted: ' + map[list[i]] + ' times.');
  }
});



var server = app.listen(3000, function() {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Listening at http://%s:%s', host, port);

});
