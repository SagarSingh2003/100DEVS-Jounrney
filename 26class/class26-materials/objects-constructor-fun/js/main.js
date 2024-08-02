//Create a constructor with 4 properties and 3 methods

function PizzaMaker(company , toppings ,sauce){
    this.company = `${company}`;
    this.toppings = `${toppings}`;
    this.deliveryTime = `loading...`;
    this.sauce = `${sauce}`;

    this.deliver = function(){
        alert('ding Dong !!! pizza here !!!!!');
    }

    this.eat = function(){
        alert('brrrrrrrrrrrrrrrrrrrrrrr');
    }
}