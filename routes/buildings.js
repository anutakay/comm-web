exports.main = function(req, res) {
  res.render('index', { title: res.__('buildings.long') } );
}

exports.entity = function(req, res) {
  res.send('building ' + req.params.id);
}