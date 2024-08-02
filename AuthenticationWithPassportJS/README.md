- will be able to add todo
- will be able to remove todo
- will be able to mark as complete
- edit the todos

- append new todos at the end


## routes : 

### GET /

homepage for signup and signin

### GET /showTodos

homepage for showing the user his or her todos (after the auth setup is done)

- we get {userId }
- we render {todo , isCompleted} to userTodo.ejs

### POST /createTodo

- For the creation of Todos

- we get {userId : userId , todo : todo } from the body of POST req

- we create {userId : userId , todo : todo , completed : false} and redirect the user to showTodos page to get his updated list of Todos.

### PUT /editTodos
- we get {userId , editedTodo , isCompleted:false}
- To change the Todos contents

### DELETE /deleteTodo

- To delete the selected todo
- server get {todoId } From the queryParams

### PUT /markAsDone

- Marks A Todo As Done
- get a todoId from Params
- update isCompleted to true
- redirect to showTodos

## signin signup login routes : 

### POST /signup 
 - Create a User that does not exist yet


### GET /login
 - if the user exists , give him access to his data


### DB SCHEMA : 

##### Todo : 
- userEmail : string
- todo : string
- completed : boolean


#### User : 
- userEmail : string
- userPass : string

(NOT VALIDATING USER INPUT FOR NOW)