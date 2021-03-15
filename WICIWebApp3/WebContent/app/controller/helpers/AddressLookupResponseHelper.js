ensureNamespaceExists();

WICI.AddressLookupResponseHelper = function() {
	
	var 	addressResponseObject = null;
	
	this.getAddressLine1=getAddressLine1;
	this.getAddressLine2=getAddressLine2;
	this.getProvince=getProvince;
	this.getCityName=getCityName;
	this.getPostalCode=getPostalCode;
	this.getAddressStatus=getAddressStatus;
	this.setAddressResponseObject=setAddressResponseObject;
	
	function setAddressResponseObject(argAddressResponseObject){
		addressResponseObject = argAddressResponseObject;
	}
	
	function getAddressLine1() {
		return ( (addressResponseObject.addressLine1 && !_.isEmpty(addressResponseObject) )? addressResponseObject.addressLine1 : "");
	}
	function getAddressLine2() {
//		disabled address line 2 functionality 		
//		return ( (addressResponseObject.standardAddressLine2 && !_.isEmpty(addressResponseObject) )? addressResponseObject.standardAddressLine2 : "");
		return '';
	}
	function getProvince(){
		return ( (addressResponseObject.province && !_.isEmpty(addressResponseObject)) ? addressResponseObject.province : "");		
	}
	function getCityName(){
		return ( (addressResponseObject.city && !_.isEmpty(addressResponseObject))? addressResponseObject.city : "");
	}
	function getPostalCode(){
		return ( (addressResponseObject.postalCode && !_.isEmpty(addressResponseObject))? addressResponseObject.postalCode : "");
	}
	function getAddressStatus(){
		return ( (addressResponseObject.addressValidation && !_.isEmpty(addressResponseObject)) ? addressResponseObject.addressValidation : "");
	}
};