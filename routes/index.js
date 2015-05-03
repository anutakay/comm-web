module.exports = function (app) {

  app.get('/', function(req, res) {
  	console.log('main');
    res.render('index', 
    			{ title: res.__('main.long') } );
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
}