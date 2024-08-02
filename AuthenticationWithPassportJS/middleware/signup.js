const bcrypt = require('bcrypt');
const user = require('../model/user');

const saltRounds = 10;

async function checkUserExists( req , res , next){
    const email = req.body.userEmail;
    const pass = req.body.userPass;
    console.log("this is email : " , email);
    console.log("this is pass : ", pass);
    
    try{

        const userExists = await user.find({userEmail : email});
        console.log(userExists , "userExists**************************************");

        if(userExists.length != 0){
            //*************************have to provide a message here that says the user exists please sign in */
                res.redirect('/auth/signin');
            
        }else{
            const hashedPass = await bcrypt.hash(pass , 10);
            req.hashedPass = hashedPass;
            next();
            console.log('checked user does not exists')
        }

    }catch(err){
        console.log(err);
    }
        
};

module.exports = checkUserExists;