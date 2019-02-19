function PassPortData(firstName,lastName,age,education,gender,adhaarId,houseNumber,street,city,state,country){
	this.firstName = firstName;
	this.lastName = lastName;
	this.age = age;
	this.eduction = education;
	this.gender = gender;
	this.adhaarId = adhaarId;
	this.address = new Address(houseNumber,street,city,state,country);
}
function Address(houseNumber,street,city,state,country){
	this.hNo= houseNumber;
	this.street = street;
	this.city = city;
	this.state = state;
	this.country = country;
}
var user1 = new PassPortData("varun","reddy",21,'btech',"male",1,"1-2-3","lb nagar","hyderabad","Telangana",'India')

