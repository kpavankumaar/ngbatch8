// example 1 for let declaretion for closures
// function test_1() {
//     let a = 20;
//     return function () {
//         console.log(a + 30);
//     };

// }
// let testResultForLetDec = test_1();
// testResultForLetDec();

// const declaretion
// const first_Name = 'ravi';
// first_Name = 'krishna';

// arrow functions or lamda functions
var forLamdaFn = () => {
    return 10;
}
let num = forLamdaFn();
console.log(num);