//--- Easy
//create a variable and assign it a number

let num = 50;


//minus 10 from that number

num -= 10;

//print that number to the console

console.log(num);


//--- Medium
//create a variable that holds a value from the input



//--- Hard
//create a variable that holds the h1

let h1Holder = document.querySelector('h1')

//add an event listener to that element that console logs the sum of the two previous variables

h1Holder.addEventListener('click' , sum);

function sum() {

    let inputVal = document.querySelector('#danceDanceRevolution').value;

    //add 25 to that number

    inputVal = Number(inputVal) + 25;

    //alert that number

    alert(inputVal);

    sum = inputVal + num;
    console.log(sum);
}
