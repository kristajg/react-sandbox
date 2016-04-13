var express = require('express');
var app = express();
var path = require('path');

app.set('port', process.env.PORT || 5000);
app.use(express.static(__dirname + '/dist'));

app.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname, 'dist', 'index.html'))
});

app.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});