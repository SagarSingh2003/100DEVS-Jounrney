


//--- Harder
//On click of the h1

document.querySelector('h1').addEventListener('click' , checkAge);

function checkAge(){

    //Take the value from the input
    let age = document.querySelector('#danceDanceRevolution').value ;
    //Place the result of the conditional in the paragraph

    //Create a conditonal that checks their age
    //If under 16, tell them they can not drive
    //If under 18, tell them they can't hate from outside the club, because they can't even get in
    //If under 21, tell them they can not drink
    //If under 25, tell them they can not rent cars affordably
    //If under 30, tell them they can not rent fancy cars affordably
    //If under over 30, tell them there is nothing left to look forward too

    age = Number(age);

    if (age < 16){
        document.querySelector('p').innerText = "You cannot Drive";
    }else if (age > 16 && age < 18){
        document.querySelector('p').innerText = "You can't hate from outside the club";

    }else if (age >18 && age < 21){
        document.querySelector('p').innerText = "You cannot Drink"
    }else if (age > 21 && age < 25){
        document.querySelector('p').innerText = "You cannot rent cars affordably";
    }else if (age > 25 && age < 30){
        document.querySelector('p').innerText = "You cannot rent fancy cars affordably";
    }else {
        document.querySelector('p').innerText = "There is nothing to look forward to";
    }

}
