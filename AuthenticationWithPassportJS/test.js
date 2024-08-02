const flash = require('flash');
const express = require('express');
const session = require('express-session');
const parseurl = require('parseurl');
const {v4 : uuidv4 } = require('uuid');

//session data is stored serverSide.
//cookie parser middleware is not necessary anymore because it reads and writes cookies on req/res directly. Using cookie-parser may result in issues if the secret is not the same between this module and cookie-parser.
//memory store is not good for storing sessions , it will leak memory under most conditions and does not scale.
//
const app = express();

app.use(session({
    genid : function(req){
        return uuidv4();
    },
    cookie : {_expires :  new Date( Date.now() + (30 * 86400 * 1000))},
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}))


app.use(flash());

app.use( (req ,res , next) => {

    req.flash('message' , 'hello!');
    next();
})

app.use((req , res ,next) => {

    
    if(!req.session.views){
        req.session.views = {};
    }

    const pathname = parseurl(req).pathname
    req.session.views[pathname] = (req.session.views[pathname] || 0) + 1;
    
    req.session.save(function(err) {
        if(err) console.log(err ,"in saving session");
        console.log('session saved');
        next();
    })
})

app.get('/' , (req ,res , next) => {
    console.log(req.session);
    res.send(`you have viewed this page :  ${ req.session.views['/']} times`);
    
})


app.get('/redirectMe' , (req ,res) => {

    req.session.destroy(function(err) {
        if(err) console.log(err);
        console.log('regenerated');
        res.redirect('/');
    })
})

app.listen(3000);