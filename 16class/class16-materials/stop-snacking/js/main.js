//Create a function that grabs the number of snacks from the input and tells you to stop that many times

function DoNotSnack(){
    document.querySelector('#stops').innerText = ""
    let noOfSnacks = document.querySelector('input').value;
    
    for ( i=0 ; i< Number(noOfSnacks); i++){
        document.querySelector('#stops').innerText += " stop " ;
    }
}

document.querySelector('#help').addEventListener('click' , DoNotSnack);