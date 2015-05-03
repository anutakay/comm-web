var express = require('express');
var i18n = require("i18n");

i18n.configure({
    locales:['ru', 'en'],
    defaultLocale: 'ru',
    directory: __dirname + '/locales',
    objectNotation: true
});

var app = express.createServer();

app.configure(function() {
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.helpers({
    'l': i18n.__,
    'ln': i18n.__n
  }); 

  app.use( express.methodOverride() );
  app.use( express.bodyParser() );

  app.use(i18n.init);
  app.use(app.router);  
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

app.get('/', function(req, res) {
    res.render('index', { title: res.__('main.long') } );
});

app.get('/operations', function(req, res) {
    res.render('index', { title: res.__('operations.long') } );
});

app.get('/operation/:id', function(req, res) {
    res.send('operation ' + req.params.id);
});

app.get('/buildings', function(req, res) {
     res.render('index', { title: res.__('buildings.long') } );
});

app.get('/building/:id', function(req, res) {
    res.send('building ' + req.params.id);
});

app.get('/actions', function(req, res) {
    res.render('index', { title: res.__('actions.long') } );
});

app.get('/action/:id', function(req, res) {
    res.send('action ' + req.params.id);
});