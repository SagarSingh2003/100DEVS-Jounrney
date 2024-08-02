const authController = require('../controller/auth');
const checkUserExists = require('../middleware/signup')
const checkAuth = require('../middleware/signin');

const passport = require('passport');
const LocalStrategy = require('passport-local');
const user = require('../model/user');
const bcrypt =require('bcrypt');



const router = require('express').Router();

// Router :

router.get('/' , (req ,res) => {
    res.render('index');
});

router.get('/signin' , (req,res) => {
    res.render('signin')
})

router.get('/signup' , (req ,res) => {
    res.render('signup')
})

router.post('/signup/createUser' , checkUserExists ,  authController.createUser );

router.get('/signin/password' , async (req , res , next) => {
    console.log("this is username :::::::::::::::: " , req.query.username);
    const User  = await  user.findOne({userEmail : req.query.username}).exec();
    const id = User._id;
    console.log(id);
    req.session.userId = id;
    next();
},
    passport.authenticate('local', {
        failureRedirect: '/auth/signin',
        failureMessage: true   
    }), 
(req ,res , next) => {
    console.log("this is to checck : " , req.session.userId);
    console.log('authentication successful')
    res.redirect('/todo/showTodos');
});


module.exports = router;