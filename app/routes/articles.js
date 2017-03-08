var express = require('express');
var router = express.Router();

router.get('/articles', function(req, res) {
	res.render('articles', {
		pageTitle: 'Articles'
	});
});

module.exports = router;