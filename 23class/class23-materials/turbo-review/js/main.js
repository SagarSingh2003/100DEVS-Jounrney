// *Variables*
// Declare a variable and assign it to a sentance as a string. Alert if the sentance is a question
const sentence = "this is a sentence ?"
// const regEx = /\?/;
// const question = regEx.test(sentence);

// if(question){
//     alert('It was a question');
// }



const question = sentence.endsWith("?");
if(question){
    alert('It was a question');
}

//Declare a variable, assign it a string of multiple words, replace every "jr. dev" with "software engineer", and print it to the console

let newSentence = "hey i am a jr.dev from india , a jr.dev yes that's right a jr.dev";
const newRegEx = /jr\.dev/

let replaceThing;

while(newRegEx.test(newSentence)){
    newSentence = newSentence.replace(newRegEx , "software engineer");
    console.log(newSentence);
}   

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible

function returnRPS(){
    const number = Math.random() * 3;
    // console.log(Math.floor(number));

    if(Math.floor(number) == 0){
        return "rock";
    }else if(Math.floor(number) == 1){
        return "paper";
    }else{
        return "scissor"
    }
}


// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function


function game(userChoice){
    const botMove = returnRPS();
    console.log(userChoice);
    console.log(botMove);

    // rock > scissor , paper > rock , scissor > paper
    if(userChoice == "rock" && botMove == "scissor" ){
        return "you Won !";
    }else if(userChoice == "paper" && botMove == "rock"){
        return "you Won !";
    }else if(userChoice == "scissor" && botMove == "paper"){
        return "you Won !";
    }else if(userChoice == botMove){
        return "tie"
    }else{
        return "bot Won !";
    }
}

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.

function playGameHowManyTimes(n){
    let botwincount = 0;
    let userwincount = 0;

    for(let i = 0 ; i < n ; i++){
        let userChoice = prompt("please enter your move rock , paper or scissor?" , "rock")
        const outcome = game(userChoice);
        if(outcome === "bot Won !"){
            botwincount++
            console.log(`bot won ${botwincount} times`);        
        }else if(outcome === "you Won !"){
            userwincount++;
            console.log(`user won ${userwincount} times`);
        }else{
            console.log("it was a tie nobody won")
        }
    }

    if (botwincount > userwincount){
        return "bot won the game , you suck!";
    }else if (botwincount < userwincount){
        return "user won the game , bot suck!";
    }else{
        return "sagar won ! YOU BOTH SUCK"; 
    }
}   