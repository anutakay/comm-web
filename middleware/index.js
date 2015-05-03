module.exports = function (app, express) {
    var i18n = require('i18n'),
      session = require('express-session'),
      expressLayouts = require('express-ejs-layouts'),
      bodyParser = require('body-parser'),
      cookieParser = require('cookie-parser'),
      methodOverride = require('method-override'),
      errorHandler = require('errorhandler'),
      MongoStore = require('connect-mongo')(session),
      mongoose = require('mongoose');

    i18n.configure({
      locales:['ru', 'en'],
      defaultLocale: 'ru',
      directory: __dirname + '/../locales',
      objectNotation: true
    });
  
    app.set('views', __dirname + '/../views');
    app.set('view engine', 'ejs');

    app.use( bodyParser() );
    app.use( cookieParser() );
    app.use( session({  
      secret: "my_secret",
      store: new MongoStore({
        // Basic usage
        host: 'localhost', // Default, optional
        port: 27017, // Default, optional
        db: 'comm-web-database' // Required
      }) 
    }) );
    app.use( methodOverride() );
    app.use(i18n.init);
    app.use(expressLayouts);
    app.use( errorHandler({ dumpExceptions: true, showStack: true }) );
}