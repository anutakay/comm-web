module.exports = function (app, express) {
  var router = require('../routes'),
	  i18n = require('i18n'),
    session = require('express-session'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    methodOverride = require('method-override'),
    errorHandler = require('errorhandler'),
    mongoStore = require('connect-mongo')(session),
    mongoose = require('mongoose');

  i18n.configure({
    locales:['ru', 'en'],
    defaultLocale: 'ru',
    directory: __dirname + '/../locales',
    objectNotation: true
  });
  
  app.set('views', __dirname + '/../views');
  app.set('view engine', 'ejs');
  /*app.helpers({
    'l': i18n.__,
    'ln': i18n.__n
  });*/

  app.use( bodyParser() );
  app.use( cookieParser() );
  app.use( session({
    secret: "my_secret"
  }) );
  app.use( methodOverride() );
  app.use(i18n.init);
  
  router(app); 

  app.use( errorHandler({ dumpExceptions: true, showStack: true }) );
}