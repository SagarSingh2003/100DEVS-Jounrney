// *Variables*
// Create a variable and console log the value

let varibale = 'hello World!';
console.log(variable); 

// Create a variable, add 10 to it, and alert the value

let num1 = 10;
num1 += 10;
alert(num1);

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference

function subtractFourNumbersAndAlert(a , b , c , d){
    let result = a - b - c -d ;
    alert(result);
}

// Create a function that divides one number by another and returns the remainder

function divideAndreturn(a  ,b){
    let result = a % b;
    return result;
}

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji

function alertJumanji(a , b ){
    let sum = a + b ;
    if (sum > 50){
        alert('Jumanji');
    }
}

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA

function multiplyThreeNum(a , b , c){
    let result = a * b * c;
    if (result % 3 === 0){
        alert("ZEBRA");
    }
}
//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in

function logWORD( word , num){
    for (i=0 ; i < num ; i++){
        console.log(word);
    }
}