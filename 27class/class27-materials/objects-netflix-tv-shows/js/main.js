//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods

class NetTVShowMaker{
    constructor(howmuchlove , howmuchaction, howmuchdrama , howmuchhorror){
        this.quantityOfLove = `{${howmuchlove}}`;
        this.quantityOfAction = `${howmuchaction}`;
        this.quantityOfDrama = `${howmuchdrama}`;
        this.quantityOfHorror = `${howmuchhorror}`;
    }

    piracyAllowed(){
        console.log(`piracy is allowed so , hail o pirates have your feast`);
    }

    play(){
        console.log(`playing this shit.....`);
    }

    stop(){
        console.log(`stopping this shit....`);
    }
}

