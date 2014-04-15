ensureNamespaceExists();

BRB.PersonInformationHelper = function() {
	
	var 	addressResponseObject = null;
	
	var _email = "sdlkfj@sdfl.we";
	var _firstName = "sadffsd";
	var _lastName = "askldfjl";
	var _streetAddress = "sdfjl jdsfkj";
	var _city = "sdfl";
	var _province = "asdf";
	var _postalCode = "dljsdf";
	var _phone = "1111111111";
	var _address1 = "sdfalkjdflkajsdf1";
	var _address2 = "sdfalkjdflkajsdf2";
	var _street = "sdlfkjlksdf";
	var _streetName = "jkhasdfk";
	var _apt = "sdfa";
	var _suite = "asdf";
	
	
	this.getEmail = function() {
		return _email;
		
	};
	this.setEmail = function(email) {
		_email = email;
	};
	
	this.getFirstName = function (){
		return _firstName;
	};
	this.setFirstName = function (firstName){
		_firstName = firstName;
	};
	
	this.getLastName = function (){
		return _lastName;
	};
	this.setLastName = function (lastName){
		_lastName = lastName;
	};
	
	this.getStreetAddress = function(){
		return _streetAddress;
	};
	this.setStreetAddress = function(streetAddress){
		_streetAddress = streetAddress;
	};
	
	this.getCity = function(){
		return _city;
	};
	this.setCity = function(city){
		_city = city;
	};
	
	this.getProvince = function(){
		return _province;
	};
	this.setProvince = function(province){
		_province = province;
	};
	
	this.getPostalCode = function(){
		return _postalCode;
	};
	this.setPostalCode = function(postalCode){
		_postalCode = postalCode;
	};
	
	this.getPhone = function(){
		return _phone;
	};
	this.setPhone = function(phone){
		_phone = phone;
	};
	
	this.getAddress1 = function(){
		return _address1;
	};
	this.setAddress1 = function(address1){
		_address1 = address1;
	};
	
	this.getAddress2 = function(){
		return _address2;
	};
	this.setAddress2 = function(address2){
		_address2 = address2;
	};
	
	this.getStreet = function(){
		return _street;
	};
	this.setStreet = function(street){
		_street = street;
	};
	
	this.getStreetName = function(){
		return _streetName;
	};
	this.setStreetName = function(streetName){
		_streetName = streetName;
	};
	
	this.getApt = function(){
		return _apt;
	};
	this.setApt = function(apt){
		_apt = apt;
	};
	
	this.getSuite = function(){
		return _suite;
	};
	this.setSuite = function(suite){
		_suite = suite;
	};
	
		
	function setAddressResponseObject(argAddressResponseObject){
		addressResponseObject = argAddressResponseObject;
	}
	
};