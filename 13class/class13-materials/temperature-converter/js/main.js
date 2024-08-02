//Write your pseduo code first! 

document.getElementById('submit').addEventListener('click' , getAndShowFarenheit );

function getAndShowFarenheit() {
//take the temperature in Celsius as input

let tempInCelsius = document.getElementById('tempInCelsius').value ;

console.log(tempInCelsius);
//convert the Celsius in to Farenheit

let tempInFarenheit = ( tempInCelsius * 9/5 ) + 32;

//show the temperature to user

document.getElementById('displayTemperature').innerText = tempInFarenheit ;

}