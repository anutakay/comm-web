var express = require('express'),
    app = express.createServer(),   
    middleware = require('./middleware')(app, express),
    config = require('./config');

app.listen(config.port, function() {
  console.log("Express server listening on port %d in %s mode",
              app.address().port,
              app.settings.env);
});