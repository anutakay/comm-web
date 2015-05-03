var main = require('./main'),
    operations = require('./operations'),
    buildings = require('./buildings'),
    actions = require('./actions');

module.exports = function (app) {
    app.get('/', main.home);
    app.get('/operations', operations.list);
    app.get('/operation/:id', operations.entity);
    app.get('/buildings', buildings.list);
    app.get('/building/:id', buildings.entity);
    app.get('/actions', actions.list);
    app.get('/action/:id', actions.entity);
}