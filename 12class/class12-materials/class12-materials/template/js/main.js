//take userinput for temp in celcius

document.getElementById('okSignal').addEventListener('click' , tempInCelcius);

let tempInC = 0;

function tempInCelcius (){
    tempInC = document.querySelector('#tempInCelcius').value ;




    //convert it into farenheit

    let tempInFarenheit = ((tempInC/5)*9)+ 32 ;

    //show it to the user

    document.getElementById('displayTemperature').innerText = tempInFarenheit; 


}


