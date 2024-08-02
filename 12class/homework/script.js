document.getElementById('powerButton').onclick = getPowerOfNumber;

function getPowerOfNumber () {
    let num = getNumber();
    let exponent = getExponent();

    let power = getPower(num , exponent);


    document.getElementById('Ex').innerHTML = power;
    
}   

function getNumber(){
    let num = prompt('Enter the Number');
    return num;
}

function getExponent(){
    let exponent = prompt('Enter the exponent value please');
    return exponent; 
}

function getPower( x , y){
    let power = x ** y;
    return power;
}

