var num = 10;
console.log(num + 20);
function run() {
    console.log(num);
}
// let, const, lambda 
function details(name) {
    var age = 20;
    return function (lang) {
        console.log(name + lang);
    };
}
var updateLang = details('ravi');
updateLang('Telugu');
function iterator(num_1) {
    setTimeout(function () {
        console.log(num_1);
    }, 1000);
}
for (let i = 0; i < 10; i++) {
    // iterator(i);
    var testFn = function () {
        console.log(i);
    }
    setTimeout(testFn, 1000);
};
let name_1 = 'srikanth';
