var express = require('express');
var router = express.Router();

/* GET home page. */
module.exports = function(app) {
	app.get('/', function(req, res, next) {
	  res.render('index', { 
	  	title: 'Blog' 
	  });
	});

	app.get('/register', function (req, res) {
		res.render('register', {
			title: 'Register'
		});
	});
}

module.exports = router;
