class Engine {
    constructor(val:string){
     this.engineType =val;    
    }
    engineType:string;
    start(){
        console.log("start the engine");
    }
}
let car = new Engine();
car.start();
class Transmission extends Engine{
    clutch = 'testClutch';
    constructor(){
        super('new Engine');
    }
}
class PetrolMachine extends Transmission{
    color='grey';
}

let petrolCar = new PetrolMachine()

petrolCar.start();
petrolCar.engineType

