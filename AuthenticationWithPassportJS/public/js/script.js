
async function markAsDone(todoId){
    console.log('mark as done : ' , todoId);
    await fetch(`/todo/markAsDone/${todoId}` , {
        method : "PUT"
    });

    window.location.reload();
    
}

async function deleteTodo(todoId){
    console.log( 'delete : ' , todoId);
    await fetch( `/todo/deleteTodo/${todoId}` , {
        method: 'DELETE'
    }) 

    console.log('ahahaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa**************************')
    window.location.reload();
    
}