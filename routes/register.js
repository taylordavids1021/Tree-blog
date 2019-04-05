//  ************ Register ************** //

var express = require('express');
var router = express.Router();
var Posts = require('../db.json').users;
var request = require(request);

//  Get the register page 
router.get('/', function(req,res,next){
    res.render('register',{
        title: 'register',
        thisError: req.app.locals.regError,
    })
});
// Create a new user
router.post('/', function(req,res,next){

    // used user
    var usernameUsed;

    // Set ID to last id in users +1
    var id = users[users.length-1].id;
    id = Number(id)+1;

    //  to check if the username is already used
    var logUser = req.body.username;

    //  checking through users for used name
    for(var i = 0; i<users.length; i++){

    //  check if users name already exists
    if(logUser ==users[i].username){
    usernameUsed = true;

    console.log(usernameUsed);
        }
    }
    //  if user name is not available create a new membership account
    if (usernameUsed != true){
        request({
            url: 'http://localhost:8080/user',
            method: Posts,
            form: {
                id: id,
                username: req.body.username,
                email: req.body.email,
                password: req.body.password,
            },
            function(error,response,body){
            res.render('register',{message: 'Account succesfully added'});
        }
    });

    req.app.locals.regError = 'registration Succesful'

    //  goes to sign in page after register
    res.redirect('/sign-in');
}
else if(usernameUsed == true){
    req.app.locals.regError = 'Username already in use';
}
res.redirect('/sign-in');
})

module.exports = router;