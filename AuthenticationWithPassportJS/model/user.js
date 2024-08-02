const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userEmail : {
        type : String,
        required : true
    }, 
    userPass : {
        type: String,
        required: true
    }
});

const user = mongoose.model('user' , userSchema)


// async function createData(){

//     const data = await user.create({userEmail : 'iamsagar762@gmail.com' , userPass: 'sagarismyname'});

// }
// createData();

module.exports = user;

