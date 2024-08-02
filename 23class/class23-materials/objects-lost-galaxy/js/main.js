//Create a dog object that has four properties and three methods
function NewDog(){
    this.color = "brown";
    this.tail = "1";
    this.legs = "4";
    this.eyes = "2";

    this.doesItBark = function (){
        console.log("bark bark !!!");
    };

    this.doesItSit = function (){
        console.log("yes i sit !!!");
    }

    this.comeSit = function(){
        console.log("here i come");
    }

}