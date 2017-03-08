var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
	var data = req.app.get('appData');
	var allArticles = [];

	data.articles.forEach(function(item) {
		allArticles = item.title;
	});

	res.render('index', {
	pageTitle: 'Home',
	pageID: 'home',
	articles: allArticles
	});
});

module.exports = router;
