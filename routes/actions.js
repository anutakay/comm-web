exports.list = function(req, res) {
  res.render('index', { title: res.__('actions.long') } );
}

exports.entity = function(req, res) {
  res.send('actions ' + req.params.id);
}