//  *************** Sign in **************** //

var express = require('express');
var router = express.Router();
var Posts = require('../db.json').users;
var request = require(request);

//  Get the sign-in
router.get('/', function(req,res,next){
    res.render('sign in',{
        title: 'sign in',
        signInError: req.app.locals.signError,
    })
});

//  Need to sign in
router.post('/', function(req,res,next){

    // Get information from the body
    var logUser = req.body.username;

    // log password
    var logPassword = req.body.password;

    for(var i = 0; i<users.length; i++){

        // if user and password are correct
        if ((users[i].username == logUser || users[i].email == logUser) && users[i].password == logPassword){
            // Create cookie
            res.cookie('usersId', users[i].id);

            //  Sets logUser to the correct username
            logUser = users[i].username;
            console.log(req.cookies);

            // Sets correct sign in variables
            req.app.locals.user = logUser;
            req.app.locals.userIndex = i;
            req.app.locals.signError = 'Log in Successful';
            
            //  message redirect to the homePage after sign in
            res.redirect('/');
        }
    };
    //  Check if user is signed in correctly
    if (req.app.locals.user != logUser) {
        req.app.locals.signInError = 'Username or password incorrect !';
    };
    //  redirct to sign in page
    res.redirect('/sign-in');
});

module.exports = router;