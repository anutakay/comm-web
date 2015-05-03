exports.list = function(req, res) {
  res.render('index', { title: res.__('operations.long') } );
}

exports.entity = function(req, res) {
  res.send('operation ' + req.params.id);
}