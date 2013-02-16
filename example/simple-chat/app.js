/*jshint laxcomma:true*/

var sio
  , chat
  , counter = 1
  , http = require('http')
  , express = require('express')
  , app = express();

app.configure(function () {
  app.use(express['static'](__dirname + '/public'));
});

app.get('/', function (req, res) {
  res.redirect('index.html');
});

var server = app.listen(8080);
sio = require('socket.io').listen(server);
chat = require('../../lib/chat.io').createChat(sio.of('/chat'));

sio.configure(function () {
  sio.of('/chat').authorization(function(handshake, callback) {
    handshake.nickname = 'Guest' + counter++;
    callback(null, true);
  });
});
