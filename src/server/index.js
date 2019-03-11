const express = require('express');
const path = require('path');
const app = express();
var config = require('../common/config');

app.use(express.static(__dirname + '/../../public'));
app.use(express.static(__dirname + '/../../vendor'));
app.use(function(req, res, next) {
  res.sendFile(path.resolve(__dirname + '/../../public/index.html'));
});

app.listen(config.port);
console.log("Vue App starting on port: %d", config.port);
