var express = require('express');
var router = express.Router();
var bd = require('../db.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', {

  // title
  var data = {
  title: 'Tree-blog',
  blog: bd,
  message: false
  }

  res.render('index', data);
});

module.exports = router;