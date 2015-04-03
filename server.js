var express = require('express');         // useful for serving web content
var app = express();                      // useful for serving web content
var models = require('./models');
// var RSVP = require('rsvp');

// app.get('/tweets', function(req, res) {

app.use(express.static(__dirname + '/app'));

var server = app.listen(3008, function() {
    console.log('Listening on port %d', server.address().port);
});