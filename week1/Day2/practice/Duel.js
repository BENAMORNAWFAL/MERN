class Effect{
    constructor(name,cost,text,stat,magnitude){
        this.name=name;
        this.cost=cost;
        this.text=text;
        this.stat=stat;
        this.magnitude=magnitude;
    }

    
}

class Unit{
    constructor(name,cost,power,resilience){
        this.name=name;
        this.cost=cost;
        this.power=power;
        this.resilience=resilience;
    }
    play=(n)=>this.resilience+=n;
    play2=(n)=>this.power+=n;
    show=()=> console.log(`${this.name} , ${this.cost} , ${this.power} , ${this.resilience}`)
    
}


const Unit1= new Unit("Red Belt Ninja",3,3,4)
const Unit2= new Unit("Black Belt Ninja",4,5,4)

const Effect1= new Effect("Hard Algorithm",2,"increase target's resilience by 3","resilience",+3)
const Effect2= new Effect("Unhandled Promise Rejection",1,"reduce target's resilience by 2","resilience",-2)
const Effect3= new Effect("Pair Programming",3,"increase target's power by 2","power",+2)


Unit1.play(n=3);
Unit1.show();
Unit1.play(n=-2);
Unit1.show();
Unit1.play2(n=2);
Unit1.show();
