// example 1 for let decalaration for closures
// function test_1() {
//     let a = 20;
//     return function () {
//         console.log(a + 30);
//     };

// }
// let testResultForLetDec = test_1();
// testResultForLetDec();
// const first_Name = 'ravi';
// first_Name = 'krishna';

// arrow functions or lamda functions
var forLamdaFn = (sample) => {
    console.log(sample * 2);
    console.log(this);
} ;
let num = forLamdaFn(3);
console.log(num);

let LamdaFnForThisKeyword = () => {
    console.log(this);
    this.name = 'krishna';
}
// var obj = new LamdaFnForThisKeyword();
// console.log(obj);
let obj_1 = {
    name:'krishna',
    test : ()=>{
        console.log(this);
    }
}
console.log(obj_1.test());