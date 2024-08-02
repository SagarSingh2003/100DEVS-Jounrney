const router = require('express').Router();
const todoController = require('../controller/todo');
// const  = require('../controller/auth');

router.get('/showTodos' , todoController.showTodos);

router.post('/createTodo' , todoController.createTodo);


router.put('/markAsDone/:todoId', todoController.markAsDone , todoController.showTodos);

router.delete('/deleteTodo/:todoId' , todoController.deleteTodos);


module.exports = router;