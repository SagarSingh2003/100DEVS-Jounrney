//Arrays

//Create and array of tv shows. Loop through and print each show to the console

let tvShows = ['friends' , 'daredevil' , 'Taarak Mehta Ka OOlta Chashma'];

tvShows.forEach(tvShow => {console.log(tvShow)});


//Create and array of numbers

let arrOfNumbers = [1 , 22 , 33 , 18 , 21];
//Return a new array of numbers that includes every even number from the previous Arrays

let evenArr = arrOfNumbers.filter( arrOfNumber => {
    return (arrOfNumber % 2 === 0 );
})

console.log(evenArr);

//Create a function that takes in an array of numbers

function ArrOfNumber(arr1){

    for ( let i = 0 ; i < arr1.length() ; i++){
        
        function findHighestNumber(){
            if ( arr1[i] > arr[i-1]){
                highest = i
            }
        }

    }
}
//Alert the sum of the second lowest and the second highest number



