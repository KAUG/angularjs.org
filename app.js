var express = require('express'),
    http = require('http'),
    path = require('path');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 8000);
  app.use(express.logger('dev'));
  app.use(express.static(path.join(__dirname, '/ko')));
  app.use('/css', express.static(path.join(__dirname, '/css')));
  app.use('/js', express.static(path.join(__dirname, '/js')));
  app.use('/img', express.static(path.join(__dirname, '/img')));
  app.use('/font', express.static(path.join(__dirname, '/font')));
  app.use('/google-code-prettify', express.static(path.join(__dirname, '/google-code-prettify')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
