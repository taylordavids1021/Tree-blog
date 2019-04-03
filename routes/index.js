var express = require('express');
var router = express.Router();
var Posts = require('../db.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });

// title
var data = {
  title: 'Tree-blog',
  posts: Posts,
  message: false
};

res.render('index', data);

// nav bar
// var nav = {
//   home : 'home',
//   blog: 'blog archive',
//   login: 'log in',
//   sign: 'sign in',
//   new: 'new post'
// }

// res.render('index', nav);

});
module.exports = router;