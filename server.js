var express = require('express');
var app = express();
var path = require('path');

var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extendd: true}));

app.use(require('./controllers/index'));

app.get('/api/films', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.use(express.static('client/build'));


app.listen(3000, function() {
  console.log('App running on port ' + this.address().port);
})