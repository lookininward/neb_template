var express = require('express');
var router = express.Router();

router.get('/articles', function(req, res) {
	res.render('articles');
	// res.send(`
	// 	<h1>What the Hello</h1>
	// 	`);
});

module.exports = router;