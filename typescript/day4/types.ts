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


