var express = require('express');
var router = express.Router();

router.get('/articles', function(req, res) {
	var data = req.app.get('appData');
	var allArticles = [];

	data.articles.forEach(function(item) {
		allArticles = item.title;
	});


	// function pushIt() {
	// 	test.push("Kevin");
	// };

	// pushIt();


	
	function onlyUnique(value, index, self) {
		return self.indexOf(value) === index;
	}

	// Create an array of unique authors
 	var allAuthors = []
 	data.articles.forEach(function(item) {
 		allAuthors.push(item.author);
 	});
	allAuthors = allAuthors.filter(onlyUnique);


	// Create an array of articles by the author Michael Xavier
	var byXavier = [];
	data.articles.forEach(function(item) {
		if(item.author == 'Michael Xavier') {
			byXavier.push(item.title, item.author);
		};
	});


	// Create an array of articles for each unique author
	




	res.render('articles', {
		pageTitle: 'Articles', 
		pageID: 'articles',
		articles: allArticles,
		authors: allAuthors,
		test: byXavier
	});
});

module.exports = router;