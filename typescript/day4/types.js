function test(num1, num2) {
    if (num2 === void 0) { num2 = 10; }
    console.log(num1 + num2);
}
test(10, 20);
var first_Name;
first_Name = '';
var data;
data = ['krishna', 20];
data.push('srk');
var friends;
friends = ['ravi', 'krishna', 'srikanth', 30];
var friendsList;
friendsList = ['ravi', 'krishna', 'srikanth', 30];
var studentData;
studentData = {
    'name': 'ravi',
    'age': 20,
    'education': ''
};
var studentData1 = {
    name: 'ravi',
    age: 20
};
studentData.address = 'hyderabad';
function test_1(name) {
    console.log(name);
}
// test_1('ravi');
// test_1(10);
test_1({ firstName: 'ravi' });
function test_2(name) {
}
test_2({ firstName: 'krishna' });
