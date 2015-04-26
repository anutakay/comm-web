var express = require('express');

var app = express.createServer();

app.get('/', function(req, res) {
    res.send('hello world');
});

app.configure(function() {
    app.use( express.methodOverride() );
    app.use( express.bodyParser() );
    app.use(app.router);

    app.set('view engine', 'ejs');
});

app.configure('development', function() {
  app.use( express.errorHandler({ dumpExceptions: true, showStack: true }) );
});

app.configure('production', function() {
  app.use( express.errorHandler() );
});

app.listen(3000, function() {
  console.log("Express server listening on port %d in %s mode",
              app.address().port,
              app.settings.env);
});