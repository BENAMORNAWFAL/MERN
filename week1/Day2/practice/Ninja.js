
class Ninja{
    constructor(name){
        //attributes
        this.name=name;
        this.health=10;
        this.speed=3
        this.strength=3;
    }
    
    //methods
    sayName=()=>{return console.log(`Ninjas name ${this.name}`)}
    showStats=()=>{ return console.log(`Ninja info : ${this.name}, ${this.strength}, ${this.speed}, ${this.health}`)}
    drinkSake=()=>{this.health+=10;
                    return console.log(`The health are ${this.health}`)}
}
    



const ninja1 = new Ninja("Hyabusa");

ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake()
