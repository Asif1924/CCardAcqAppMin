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
		return ( (addressResponseObject.standardAddressLine1 && !_.isEmpty(addressResponseObject) )? addressResponseObject.standardAddressLine1 : "");
	}
	function getAddressLine2() {
		return ( (addressResponseObject.standardAddressLine2 && !_.isEmpty(addressResponseObject) )? addressResponseObject.standardAddressLine2 : "");
	}
	function getProvince(){
		return ( (addressResponseObject.standardProvince && !_.isEmpty(addressResponseObject)) ? addressResponseObject.standardProvince : "");		
	}
	function getCityName(){
		return ( (addressResponseObject.standardCityName && !_.isEmpty(addressResponseObject))? addressResponseObject.standardCityName : "");
	}
	function getPostalCode(){
		return ( (addressResponseObject.standardPostalCode && !_.isEmpty(addressResponseObject))? addressResponseObject.standardPostalCode : "");
	}
	function getAddressStatus(){
		return ( (addressResponseObject.addressStatus && !_.isEmpty(addressResponseObject)) ? addressResponseObject.addressStatus : "");
	}
};