ensureNamespaceExists();

BRB.CustomerTransactionModel = function() {	
	var _transactionId = "";
	var _email = "";
	var _firstName = "";
	var _lastName = "";
	var _addressLine1 = "";
	var _addressLine2 = "";
	var _city = "";
	var _province = "";
	var _loyaltyNumber = "";
	var _postalCode = "";
	var _phoneNumber = "";
	// US4580
	var _requestingSystem = "";
	
	this.initialize = function (
			transactionId, 		
			email, 
			firstName, 
			lastName,
			addressLine1,
			addressLine2,
			city, 
			province,
			loyaltyNumber,
			postalCode,
			phoneNumber,
			requestingSystem) {		
		_transactionId = transactionId;
		_email = email;
		_firstName = firstName;
		_lastName = lastName;		
		_addressLine1 = addressLine1;
		_addressLine2 = addressLine2;
		_city = city;
		_province = province;
		_loyaltyNumber = loyaltyNumber;
		_postalCode = postalCode;
		_phoneNumber = phoneNumber;
		_requestingSystem = requestingSystem;
	};		
	//---------------------------------------------------------------------------------------
	this.getTransactionId = function() {
		return _transactionId;		
	};
	//---------------------------------------------------------------------------------------
	this.setTransactionId = function(transactionId) {
		_transactionId = transactionId;
	};	
	//---------------------------------------------------------------------------------------
	this.getEmail = function() {
		return _email;		
	};
	//---------------------------------------------------------------------------------------
	this.setEmail = function(email) {
		_email = email;
	};
	//---------------------------------------------------------------------------------------	
	this.getFirstName = function (){
		return _firstName;
	};
	//---------------------------------------------------------------------------------------
	this.setFirstName = function (firstName){
		_firstName = firstName;
	};
	//---------------------------------------------------------------------------------------
	this.getLastName = function (){
		return _lastName;
	};
	//---------------------------------------------------------------------------------------
	this.setLastName = function (lastName){
		_lastName = lastName;
	};
	//---------------------------------------------------------------------------------------
	this.getCity = function(){
		return _city;
	};
	//---------------------------------------------------------------------------------------
	this.setCity = function(city){
		_city = city;
	};
	//---------------------------------------------------------------------------------------
	this.getProvince = function(){
		return _province;
	};
	//---------------------------------------------------------------------------------------
	this.setProvince = function(province){
		_province = province;
	};
	//---------------------------------------------------------------------------------------
	this.getLoyaltyNumber = function(){
		return _loyaltyNumber;
	};
	//---------------------------------------------------------------------------------------
	this.setLoyaltyNumber = function(loyaltyNumber){
		_loyaltyNumber = loyaltyNumber;
	};
	//---------------------------------------------------------------------------------------
	this.getPostalCode = function(){
		return _postalCode;
	};
	//---------------------------------------------------------------------------------------
	this.setPostalCode = function(postalCode){
		_postalCode = postalCode;
	};
	//---------------------------------------------------------------------------------------
	this.getPhoneNumber = function(){
		return _phoneNumber;
	};
	//---------------------------------------------------------------------------------------
	this.setPhoneNumber = function(phoneNumber){
		_phoneNumber = phoneNumber;
	};
	//---------------------------------------------------------------------------------------
	this.getAddressLine1 = function(){
		return _addressLine1;
	};
	//---------------------------------------------------------------------------------------
	this.setAddressLine1 = function(addressLine1){
		_addressLine1 = addressLine1;
	};
	//---------------------------------------------------------------------------------------
	this.getAddressLine2 = function(){
		return _addressLine2;
	};
	//---------------------------------------------------------------------------------------
	this.setAddressLine2 = function(addressLine2){
		_addressLine2 = addressLine2;
	};
	//---------------------------------------------------------------------------------------
	this.getRequestingSystem = function(){
		return _requestingSystem;
	};
	//---------------------------------------------------------------------------------------
	this.setRequestingSystem = function(requestingSystem){
		_requestingSystem = requestingSystem;
	};
	
};