// *Variables*
// Create a variable and console log the value

let variable = 2003;
console.log(variable);

// Create a variable, add 10 to it, and alert the value

let newVar = 2003;
newVar += 10;

alert(newVar);

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference

function subtractFourNum(a , b , c , d){
    alert(a - b - c - d);
}

// Create a function that divides one number by another and returns the remainder

function ShowRemainder(a , b ){
    return ( a % b);
}

subtractFourNum(2 , 3 , 4 , 5);
ShowRemainder( 10 , 2);

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji

function AddTwoNum(a , b) {
    let sum = a + b;
    if (sum > 50) {
        alert('Jumanji');
    }
}



// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA

function MultiplyThreeNum(a , b , c){
    let product = a * b * c;
    if (product % 3 == 0){
        alert('ZEBRA');
    }
}


AddTwoNum( 3 , 55);
MultiplyThreeNum( 9 , 10 , 3);