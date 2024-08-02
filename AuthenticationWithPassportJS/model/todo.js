const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    userId : {
        type : mongoose.Types.ObjectId,
        ref : 'user',
        required : true
    }, 
    todo : {
        type : String,
        required : true
    },
    isCompleted : {
        type : Boolean,
        required : true,
        default : false
    }
    
})


const todos = mongoose.model('todo' , todoSchema);

module.exports = todos;