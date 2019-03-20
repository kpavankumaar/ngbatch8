interface Customer {
    readonly firstName: string;
    lastName: string;

}

let user:Customer = {
    firstName:'srikanth',
    lastName:'rao'
}
user.firstName = 'Krishna';
user.lastName = 'radhe';
// const declaration for obj value shouldnot change but properties of the object can be changed
// readonly properties are specific for the object prop their values cannot be reassigned
const obj = {
    name:'ravi',
    age:25
}
obj.name = 'srk';
let sampleArr:number[] = [1,2,3,4];
let readonlyArr: ReadonlyArray<number> = sampleArr;
readonlyArr[0] = 5;
readonlyArr.push(10);
readonlyArr.slice(1,3);
sampleArr = readonlyArr;

class Engine {
    constructor(protected val:string){
    //  this.engineType =val;    
    }
    engineType:string;
    start(){
        console.log("start the engine",this.engineType);
    }
}
let car = new Engine();
car.start();
class Transmission extends Engine{
    clutch = 'testClutch';

    constructor(){
        super('new Engine');
        console.log(this.val);
        console.log(this.engineType);
    }

}
class PetrolMachine extends Transmission{
    color='grey';
    
}

let petrolCar = new PetrolMachine()

petrolCar.start();
petrolCar.engineType
petrolCar.val;

interface PartsOfMobile{
    ram:string;
    processor:string;
}
class Mobile implements PartsOfMobile{
     ram ='4gb'
     processor = 'snapdragon';
     private battery:string;
    constructor(private model){

    }
    
    public set setBatteryVal(v : string) {
        this.battery = v;
    }
    
    public get getBatteryVal() : string {
        return this.battery;
    }
    

}
let samsungPhone = new Mobile('J7');
samsungPhone.setBatteryVal = '3000mah';

