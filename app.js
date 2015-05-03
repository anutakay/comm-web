var express = require('express'),
    app = express.createServer(),   
    middleware = require('./middleware')(app, express);

app.listen(3000, function() {
  console.log("Express server listening on port %d in %s mode",
              app.address().port,
              app.settings.env);
});