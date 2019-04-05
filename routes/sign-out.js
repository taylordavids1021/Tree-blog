//  ************* Sign out ************* //

var express = require('express');
var router = express.Router();
var request = require(request);

//  Get the sign out page 
router.get('/', function(req,res,next){
    //  set default
    res.app.locals.login = false;
    req.app.locals.user = '';
    req.app.locals.signIn = '';
    req.app.locals.reqError = '';

    //  create a cookie
    res.cookie('usersId');

    console.log(req.users.cookies.userId);

    // redirect to homepage after sign up
    res.redirect('/');
});

module.exports = router;