module.exports = function (app, express) {
  var router = require('../routes'),
	  i18n = require('i18n');

  i18n.configure({
    locales:['ru', 'en'],
    defaultLocale: 'ru',
    directory: __dirname + '/../locales',
    objectNotation: true
  });
  
  app.configure(function() {
  	app.set('views', __dirname + '/../views');
    app.set('view engine', 'ejs');
    app.helpers({
      'l': i18n.__,
      'ln': i18n.__n
    });

    app.use( express.bodyParser() );
    app.use( express.methodOverride() );
    app.use(i18n.init);
    app.use(app.router);
  });

  app.configure('development', function() {
    app.use( express.errorHandler({ dumpExceptions: true, showStack: true }) );
  });

  app.configure('production', function() {
   app.use( express.errorHandler() );
  });

  router(app); 

}