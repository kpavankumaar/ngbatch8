function PassPortData(firstName,lastName,age,education,gender,adhaarId,addressArrItem){
	this.firstName = firstName;
	this.lastName = lastName;
	this.age = age;
	this.education = education;
	this.gender = gender;
	this.adhaarId = adhaarId;
	// this.generalData = function(){
	// 	console.log(this.firstName, this.lastName);
	// }
	// this.address = new Address(houseNumber,street,city,state,country);
	// Address.call(this,houseNumber,street,city,state,country);
	Address.apply(this,addressArrItem);
}

function Address(houseNumber,street,city,state,country){
	this.hNo= houseNumber;
	this.street = street;
	this.city = city;
	this.state = state;
	this.country = country;
	console.log('arguments',arguments);
}
Address.prototype.addressDetails = function(){
	console.log(this.hNo, this.street);
}

PassPortData.prototype = Object.create(Address.prototype);
PassPortData.prototype.generalData = function(){
	console.log(this.firstName, this.lastName);
}
PassPortData.prototype.constructor = PassPortData;


var user1 = new PassPortData("varun","reddy",21,'btech',"male",1,["1-2-3","lb nagar","hyderabad","Telangana",'India'])
var user2 = new PassPortData("srikanth","rao",21,'btech',"male",1,["1-2-3","lb nagar","hyderabad","Telangana",'India'])
user2.generalData = function(){
	console.log(this.firstName, this.lastName, this.age);
};

// bind method
var obj ={};
function multiples (a,b){
		console.log(a * b);
}
var multipleOf3 =  multiples.bind(obj,3);

function sampleName (a,b){

	return function(b){
			console.log(a*b);
	}
}





