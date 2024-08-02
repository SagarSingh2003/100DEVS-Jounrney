//---Easy
//create a function that subtracts two numbers and alerts the difference

function Subtract(a , b){
    let result = a - b ;
    alert(result);
}

// Subtract(50 , 30);
//create a function that divides three numbers and console logs the quotient

function divide( a , b , c){
    let result = (a/b)/c;
    console.log(result);
}

// divide( 40 , 2 , 10);

//create a function that multiplys three numbers and returns the product

function multiply(a , b, c) {
    let result = a * b * c;
    return result;
}

let result = multiply( 2 , 3 , 4);
console.log(result);

//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number

function Medium(a, b , c) {
    result = (a + b) % c;
    alert(result);
}
//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number

function Hard(a , b , c , d ){
    let multiplication = a * b;
    if (multiplication > 100){
        console.log( c + d);
    }else if (multiplication < 100){
        console.log(c - d);
    }else {
        alert(( a * b * c )/ d );
    }
}