function findSumTillHundred(){
        findSum();
}

let sum = 0;

function findSum(){
    for(let i = 0; i < 100000; i++){
        sum = sum + i;
    }

    console.log(sum);
}


setTimeout( findSumTillHundred , 1000);
console.log('hello world');