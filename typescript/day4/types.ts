function test(num1:number , num2:number= 10){
    console.log(num1 + num2);
}

test(10,20);
let first_Name : string;
first_Name = '';
let data : [string,number];
data = ['krishna',20];
data.push('srk');

let friends:string[];
friends = ['ravi','krishna','srikanth',30];
let friendsList : Array<string | number>
friendsList = ['ravi','krishna','srikanth',30];

interface Obj {
    name:string,
    age:number,
    education?: string,
    [index:string]:string | number
}

let studentData: Obj;

studentData = {
    'name' :'ravi',
    'age': 20,
    'education' : ''
}
let studentData1:Obj = {
    name :'ravi',
    age: 20,
}
studentData.address = 'hyderabad';

interface Obj_1 {
    firstName:string,
    vehicle?:string,
    
}
function test_1(name:{firstName:string}){
    console.log(name);
}
// test_1('ravi');
// test_1(10);

test_1({firstName:'ravi'});
function test_2(name:Obj_1):Array<any>{
    return [10,20];
};
test_2({firstName:'krishna',vehicle:''});

let testObj:Obj_1 = {
    firstName:'krishna',
    vehicle:'srikanth',
    
}

interface TypeDefForFunction {
    firstName:string;
    test():number;
}
let preDefFn : TypeDefForFunction;
preDefFn = {
    firstName: 'ravi',
    test:function(){
        return 10
    }
}
function test_3():TypeDefForFunction{
    return preDefFn;
}