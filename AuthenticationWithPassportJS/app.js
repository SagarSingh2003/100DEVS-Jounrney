// const ejs = require('ejs');
const LocalStrategy = require('passport-local');
const user = require('./model/user');
const bcrypt =require('bcrypt');

const express = require('express');
const connectDB = require('./config/db');
const passport = require('passport');
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo');
const cookieParser = require('cookie-parser');
const csrf = require('csurf');
const todoRoute = require('./routes/todo');
const authRoute = require('./routes/auth')
const app = express();
const session = require('express-session');
const {v4 : uuidv4 } = require('uuid');

require('dotenv').config({path : './config/.env'});

//Connect to DB
connectDB();

app.use(session({
    genid : function(req){
        return uuidv4();
    },
    secret: 'keyboard cat',
    resave: false, // don't save session if unmodified
    saveUninitialized: true, // don't create session until something stored
    store: MongoStore.create({
        mongoUrl : process.env.DB_String
    })
}));


passport.use(new LocalStrategy(
    async function (username, password, done) {
        console.log('entered localStrategy');
        const User = await user.findOne({ userEmail: username }).exec();
            
        
        console.log('this is username' , username , password);
        const hashedPass = await bcrypt.hash(password , 10 );
        // if (err) { return done(err); }
        if (!User) { return done(null, false , {"msg" : `${username} Email Not Found please signup`}); }

        if(!User.userPass){return done(null , false , {"msg" : `you have signed in with a singin provider please sign in with your username and password to login this method`})};
        if (!bcrypt.compare(hashedPass  , User.userPass)) { return done(null, false , {"msg" : "password wrong please enter the right password"});}
        // req.session.userId = User._id;
        return done(null, User);
      
    }
));

passport.serializeUser(function(user, cb) {
    console.log('serializing user started ...')
    process.nextTick(function() {
      return cb(null, user._id);
    });
    console.log('serializing user complete ...')
});


// passport.deserializeUser(function(user, cb) {
//         process.nextTick(function() {
//             return cb(null, user);
//         });
// });

passport.deserializeUser(async function(id, cb) {
    console.log('deserializing user started ...');

    try{
        const User = await user.findOne({_id : id }).exec();
        
        if(User){
            
            console.log('user id : ' , User._id);
            console.log('deserializing user complete');
            return cb(null, User);   
        }else{
            console.log('user not found');
        }
    }catch(err){
        console.log(err);
    }

});

// setting the middlewares


app.set('view engine' , 'ejs');
app.use(express.json());

app.use(express.urlencoded({extended : false}));


app.use(passport.authenticate('session' ,  { failureRedirect: '/', failWithError: "/hello" }));


app.use(express.static('public'));

console.log('getting here 1');


app.get('/' , (req ,res) => {
    console.log('getting here 3');
    res.render('index');
});


console.log('getting here 2');

app.use('/auth', authRoute);

app.use('/todo' , todoRoute );


app.listen(3000 , () => {
    console.log('Server listening at port 3000');
});