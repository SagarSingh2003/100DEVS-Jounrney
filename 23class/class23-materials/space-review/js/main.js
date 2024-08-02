//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.

arrOfNum = [1 , 1 , 1 , 1 , 1 , 1];
const sum = arrOfNum.reduce((num , c) => num + c , 0);
console.log(sum);
//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared

function squareTheArr(arrOfNum){
    return arrOfNum.map(num => num * num )
}

//Create a function that takes string
//Print the reverse of that string to the console

function reverseString(inputString){
    const reverseString = inputString.split('').reverse().join("");
    console.log(reverseString);
    return reverseString
}

//Create a function that takes in a string
//Alert if the string is a palindrome or not

function checkPalindrome(inputString){
    if(inputString === reverseString(inputString)){
        return "yes sir"
    }

    return "no sir";
}
