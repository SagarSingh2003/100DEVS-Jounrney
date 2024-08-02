// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console

let favoriteHoliday ;

favoriteHoliday = 'Chhat Puja';

console.log(favoriteHoliday.toUpperCase());

//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)

let newString = 'Hello World!'

let subString = newString.slice(newString.length - 3 , newString.length );

alert(subString);


// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.


function Subtract5Num( n1 , n2 , n3 , n4 , n5){
    let Subtraction = 100 - (n1 + n2 + n3 + n4 + n5);
    
    alert(Math.abs(Subtraction));
}

Subtract5Num( 19, 30 , 49 , 59 , 99);

// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.

function findLowestAndHighest(n1 , n2 , n3){
    if (n1 > n2 ){

        if(n2 > n3){
            console.log(`${n1} is the highest and ${n3} is the lowest`);
        }else{
            console.log(`${n1} is the highest and ${n2} is the lowest`);
        }
    }else if(n2 > n3){

        if(n1> n3){
            console.log(`${n2} is the highest and ${n3} is the lowest`);
        }else{
            console.log(`${n2} is the highest and ${n1} is the lowest`);
        }
    }else if(n3 > n1){

        if(n1 > n2){
            console.log(`${n3} is the highest and ${n2} is the lowest`);
        }else{
            console.log(`${n3} is the highest and ${n1} is the lowest`);
        }
    }
}

findLowestAndHighest( 3 , 10 , 4);

// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.

function HeadOrTAils(){
    let gambleNumber = Math.floor((Math.random() * 2));
    if (gambleNumber === 0){
        console.log('Heads');
    }else if(gambleNumber === 1){
        console.log('Tails');
    }
}

HeadOrTAils();

//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times where x is the number passed into the function. Call the function.

function CallHeadsOrTails(n){
    for (i = 0 ; i < n ; i++){
        HeadOrTAils();
    }
}

CallHeadsOrTails(4);