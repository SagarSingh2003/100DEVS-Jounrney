//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
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

