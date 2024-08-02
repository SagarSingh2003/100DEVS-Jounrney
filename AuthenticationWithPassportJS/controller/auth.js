const user = require('../model/user')
const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = {
    createUser : async function(req ,res){
        const userEmail = req.body.userEmail;
        const password = req.body.userPass;
        const hashedPass = req.hashedPass;
        console.log(hashedPass);
        
        try{
            let userId ;
            const userData = await user.create({userEmail : req.body.userEmail , userPass : `${hashedPass}`});
            req.userId = userData._id;
            console.log(req.userId);
            console.log(userData);
            res.redirect('/auth/signin');
        }catch(err){
            console.log(err);
            res.redirect('/auth/signup');
        }
    },

    // checkUserExists : async function(req ,res){
    //     .
    // }
}