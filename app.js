var express = require('express'),
    app = express(),   
    middleware = require('./middleware')(app, express),
    config = require('./config');

app.listen(config.port, function() {
  console.log("Express server listening on port %d in %s mode",
              config.port,
              app.settings.env);
});