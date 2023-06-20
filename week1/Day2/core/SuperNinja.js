
class Ninja{
    constructor(name,health,speed=3,strength=3){
        //attributes
        this.name=name;
        this.health=health;
        this.speed=speed;
        this.strength=strength;
    }
    
    //methods
    sayName=()=>{return console.log(`Ninjas name ${this.name}`)};
    showStats=()=>{ return console.log(`Ninja info : name ${this.name}, health ${this.health},strength ${this.strength}, speed ${this.speed}`)};
    drinkSake=()=>{this.health+=10;return console.log(`The health are ${this.health}`)};
    
}
    



// const ninja1 = new Ninja("Hyabusa",10);
// ninja1.sayName();
// ninja1.showStats();
// ninja1.drinkSake();

class Sensei extends Ninja{
    constructor(name,health=200,speed=10,strength=10,wisdom=10){
    super(name,health,speed,strength);
    this.wisdom=wisdom;
    }
    speakWisdom(){
        superSensei.drinkSake();
    }
    
}


const superSensei = new Sensei("Master Splinter");

superSensei.speakWisdom();
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"
