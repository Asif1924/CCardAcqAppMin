ensureNamespaceExists();

WICI.UserLocationResponseHelper = function() {
	
	//{"message":"SUCCESS","outletName":"GASBAR              ","outletNumber":"1893","outletStreet":"311 Confederation Dr.         ","outletCity":"Saskatoon                ","outletProvince":"SK","outletPostal":"S7L5C6"};
	var 	userLocationResponseObject = null;
	
	this.setUserLocationResponseObject 		=	setUserLocationResponseObject;
	this.userLocationSuccessful 			=	userLocationSuccessful;
	this.getOutletName 						=	getOutletName;
	this.getOutletNumber		 			=	getOutletNumber;
	this.getOutletStreet 					=	getOutletStreet;
	this.getOutletCity						=	getOutletCity;
	this.getOutletProvince					=	getOutletProvince;
	this.getOutletPostal					=	getOutletPostal;		
	
	function setUserLocationResponseObject( argUserLocationResponseObject ){
		userLocationResponseObject = argUserLocationResponseObject;
	}
	
	function userLocationSuccessful(){
		return ( userLocationResponseObject && userLocationResponseObject.message==="SUCCESS"); 
	}
	
	function getOutletName(){
		return userLocationResponseObject === null ? null : userLocationResponseObject.outletName;
	}
	
	function getOutletNumber(){
		return userLocationResponseObject === null ? null : userLocationResponseObject.outletNumber;
	}
	
	function getOutletStreet(){
		return userLocationResponseObject === null ? null : userLocationResponseObject.outletStreet;
	}
	
	function getOutletCity(){
		return userLocationResponseObject === null ? null : userLocationResponseObject.outletCity;
	}
	
	function getOutletProvince(){
		return userLocationResponseObject === null ? null : userLocationResponseObject.outletProvince;
	}
	
	function getOutletPostal(){
		return userLocationResponseObject === null ? null : userLocationResponseObject.outletPostal;
	}
};