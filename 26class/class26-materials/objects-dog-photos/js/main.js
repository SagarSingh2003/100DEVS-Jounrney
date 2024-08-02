//Get a dog photo from the dog.ceo api and place the photo in the DOM
fetch("https://dog.ceo/api/breeds/image/random")
.then(res => res.json()
.then(dogdata => {
    console.log(dogdata.message);
    document.querySelector("img").src = `${dogdata.message}`;
}))
.catch(err => {
    console.log(err);
})

async function getCockTail(){

    const res = await fetch("https://thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic");
    console.log(res);
    const drinksData = await res.json()
    console.log(drinksData.drinks[0]);
    

    let counter = 0;


    function getDrink(){
        
        
        let reqDrink = drinksData.drinks[counter];
        
        document.getElementById("drink").src = `${reqDrink.strDrinkThumb}`;
        document.getElementById("drinkName").innerHTML = `${reqDrink.strDrink}`;
        
        counter++


        if(reqDrink != null){

            setTimeout(() => {
                getDrink();
            }, 3000);
        }
        
    }
    getDrink();


}
