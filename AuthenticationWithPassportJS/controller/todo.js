const todos = require('../model/todo')

module.exports = {
    showTodos : async function(req ,res){
        console.log(req.session);
        console.log('entered showTodos')
        //this should work : *********************** req.userId from auth controller userId is being sent in the req .

        
        if(!('passport' in req.session)){
            res.redirect('/auth/signin');
            return ;
        }

        const userId = req.session.passport.user ;

        

            console.log("user Id ............ " , userId);
            try{

                const data = await todos.find({userId}).exec();

                console.log(data);
                res.render('userTodo' , {data : data});
            }catch(err){
                console.log(err);
            }
        

    },

    createTodo : async function(req, res){
        console.log("creatiiiiiiiiing todooooooooooooooooo");
        console.log(req.session);
        const userId = req.session.passport.user;
        console.log(userId);
        const todo = req.body.todo;
        
        try{
            const createTodo = await todos.create({userId : userId , todo : todo});    
            if(createTodo){
                res.redirect('/todo/showTodos');
            }
        
        }catch(err){
            console.log(err);
            process.exit(1);
        }   
    },
    
    deleteTodos: async function(req ,res){
        const todoId = req.params.todoId;
        try{
            const data = await todos.deleteOne({_id : todoId}).exec();  
            console.log('deleted Todo : ' , todoId);
            res.json({
                "msg" : "deleted Todo"
            })
        }catch(err){
            console.log(err);
        }
    },

    markAsDone: async function(req , res , next){
        const todoId = req.params.todoId;

        try{
            const data = await todos.updateOne({_id : todoId} , {$set : { isCompleted : true}}).exec();    
            console.log('got here!....');
            res.json({
                "msg" : "mark Todo as done"
            })
        }catch(err){
            console.log(err);
        } 
    }

}