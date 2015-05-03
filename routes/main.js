exports.home = function(req, res, next) {
  	res.render('index', { title: res.__('main.long') } );
};