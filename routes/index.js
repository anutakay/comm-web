var main = require('./main'),
    operations = require('./operations'),
    buildings = require('./buildings'),
    actions = require('./actions');

module.exports = function (app) {
  app.get('/', main.home);
  app.get('/operations', operations.main);
  app.get('/operation/:id', operations.entity);
  app.get('/buildings', buildings.main);
  app.get('/building/:id', buildings.entity);
  app.get('/actions', actions.main);
  app.get('/action/:id', actions.entity);
}