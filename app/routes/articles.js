var express = require('express');
var router = express.Router();


// Create route to Articles Page
router.get('/articles', function(req, res) {
	var data = req.app.get('appData');
	

	// Collect all articles and their inner attributes
	var allArticles = [];
	data.articles.forEach(function(item) {
		allArticles = item.title;
	});

	// Function to identify unique values in an array
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
	
	// function pushIt() {
	// 	test.push("Kevin");
	// };

	// pushIt();

	// function run() {
	// 	allArticles.forEach(function(item) {
	//       item.author;
	//       item.title;
	// 	});
	// };

	res.render('articles', {
		pageTitle: 'Articles', 
		pageID: 'articles',
		articles: allArticles,
		authors: allAuthors,
		test: byXavier
	});
});


// Create route to individual articles pages

// router.get('/articles/:articleid', function(req, res) {
// 	var data = req.app.get('appData');

// 	var articles = [];

// 	data.articles.forEach(function(item) {
// 		if (item.shortname == req.params.articleid) {
// 			articles.push(item);
// 		}
// 	});

// 	res.render('articles', {
// 		pageTitle: 'Article Info',
// 		articles: articles,
// 		pageID: 'articleDetail'
// 	});
// });

module.exports = router;