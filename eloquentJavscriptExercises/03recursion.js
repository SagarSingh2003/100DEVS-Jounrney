// Description: 

// We’ve seen that % (the remainder operator) can be used to test whether a number is even or odd by using % 2 to see whether it’s divisible by two. Here’s another way to define whether a positive whole number is even or odd:

//     Zero is even.

//     One is odd.

//     For any other number N, its evenness is the same as N - 2.

// Define a recursive function isEven corresponding to this description. The function should accept a single parameter (a positive, whole number) and return a Boolean.

// Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this?




// ========================================================


// Your code here.

const isEven = ( num ) => {
  	
	function decrease2(newNum){
 
        if (num === 0) {
            return "true";
        }else if (num === 1) {
            return  "false";
        }else if( num < 0){
            return "inappropriate value entered please enter a whole number";
        }else{
          	num -= 2;
          	console.log(num);
            return decrease2(num);
          	
        }
     
    }
  
  return decrease2(num);
  
 
  
  	
}

console.log(isEven(4));
// → true
console.log(isEven(75));
console.log(isEven(-1));
// → ??