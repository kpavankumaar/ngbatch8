var num = 10;
console.log(num + 20);
function run(){
    console.log(num)
}
// let, const, lambda 

function details(name){
    var age = 20;
    return function(lang){
        console.log(name + lang);
    }
}
var updateLang = details('ravi');
updateLang('Telugu');
function iterator(i){
    setTimeout(function(){
        console.log(i)
    },1000);
}
for(var i = 0 ; i < 10 ; i++){
    iterator(i);
};