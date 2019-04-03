// get before you delete

var express = require('express');
var router = express.Router();
var Post = require('../db.json');

router.get('/', function(req, res, next){
console.log(req.params.postId);

// Make a post request to our data base
resquest({
    url: 'http://localhost:3004/post'+ req.params.postId,
    method: 'DELETE',
    },
    function(error,response,body){
        var data = {
            title: 'tree-blog',
            posts: Post,
            message: 'successfully deleted'
          };
          res.redirect('..');
    });
});

module.exports = router;