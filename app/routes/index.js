var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
	res.render('index.ejs', {
		pageTitle: 'Home'
	});
});

module.exports = router;