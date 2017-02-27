var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var jokes = require('./routes/jokes');
var port = 3000;


// initial jokes provided by the client


// static file requests
app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));


// routes
app.use('/jokes', jokes);

// Send index.html file
app.get('/', function(req, res) {
  res.sendFile(path.resolve('server/public/views/index.html'));
});

// Start the server!
app.listen(port, function() {
  console.log("Node listening on port " + port);
});
