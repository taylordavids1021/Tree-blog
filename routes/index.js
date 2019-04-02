var express = require('express');
var router = express.Router();
var Post = require('../db.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });


var data = {
  title: 'tree-blog',
  posts: Post,
  message: false
};

res.render('index', data);
});

var x = 'image'

function image() {
  var x = document.getElementById("blog-image").src;
}
// module.exports = router;
// This is our index

//app listen on this port
app.listen(8080);