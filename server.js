// Dependencies
var express = require('express');
var compression = require('compression');
var swig = require('swig');
var path = require('path');
var config = require('./config');

var app = express();

// Configure
app.use(compression({ threshold: 512 }));
app.use(express.static(path.join(__dirname, 'Content')));
app.engine('html', swig.renderFile);
app.set('views', path.join(__dirname, 'View'));
app.set('view engine', 'html');

// Load routes
require('./route')(app);

app.listen(config.get('port'));
console.log('Running on port: ' + config.get('port'));

module.exports = app;