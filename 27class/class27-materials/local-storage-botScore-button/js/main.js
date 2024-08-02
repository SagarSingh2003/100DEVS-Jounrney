//Create a button that adds 1 to a botScore stored in localStorage 

document.querySelector('button').addEventListener('click' , anothaOne)
const historyCount = localStorage.getItem('count');
document.querySelector('h2').innerHTML = historyCount;

function anothaOne(){

    let botCount = localStorage.getItem('count');
    botCount = Number(botCount) + 1;
    localStorage.setItem('count' , botCount);


    document.querySelector('h2').innerText = botCount;

}
