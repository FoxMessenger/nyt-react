// ----------------------------
// dependencies
// ----------------------------
const express = require('express');
const router = express.Router();
const Article = require("../models/Article.js");

// ----------------------------
// Routes
// ----------------------------

// all saved articles
router.get('/api/savedarticles', (req, res) => {
    Article.find({}).exec((err, data) => {
        if (err) {
            console.log(err);
        } else {
            res.json(data);
        }
    });
});

// save an article
router.post('/api/saved', (req, res) => {
   	const newArticle = new Article(req.body);
    newArticle.save((err, data) => {
        if (err) {
            console.log(err);
        } else {
            console.log(data)
        }
    });
});

// delete an article
router.get('/api/deletearticle/:articleId', (req, res) => {
    Article.findOneAndRemove({'_id': req.params.articleId}).exec((err, data) => {
    	if (err) {
        	console.log(err);
    	} else {
        	res.json(data)
        }
    })
});

// main page
router.get('/', (req, res) => {
    res.sendFile('/public/index.html');
})

module.exports = router;

