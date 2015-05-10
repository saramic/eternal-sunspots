var express = require('express');
var app = express();

app.use(express.static('public'));
app.use('/pure', express.static('bower_components/pure'));

app.set('port', (process.env.PORT || 5000));

app.set('view engine', 'jade');

app.get('/', function(request, response) {
  response.render('simulator')
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
