const express = require('express');
const path = require('path');
var request = require('request');
const app = express();

var options = {
  url: 'https://erply-challenge.herokuapp.com/list',
  headers: {
    AUTH: 'fae7b9f6-6363-45a1-a9c9-3def2dae206d'
  }
};

app.route('/api/').get((req, res) => {
  request(options, function(error, response, body) {
    res.send(body);
  });
});
app.use(express.static(__dirname + '/dist/erply-webshop'));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/erply-webshop/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
