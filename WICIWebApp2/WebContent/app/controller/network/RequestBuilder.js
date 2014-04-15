ensureNamespaceExists();

WICI.RequestBuilder = function() {
	var middlewareName = "";
	var physicalServerURL = "";
	var serviceName = "";
	var httpType = "";
	var params = {};

	this.init = function(requestDetails) {
		this.setRequestDetails(requestDetails);
		
	};
	
	function addAuthfieldValue (argParams){
		var params = argParams;
		var mfgSerial = null;
		var bldSerial = null;
		
		if( app.deviceInfoHelper && app.deviceInfoHelper.getDeviceInfo() )
		{
			mfgSerial = app.deviceInfoHelper.getDeviceInfo().MfgSerial;
			bldSerial = app.deviceInfoHelper.getDeviceInfo().BuildSerial;
		}
		else
		{
			//"authfieldValue": { MfgSerial : "20:50:00:00:00:00", BuildSerial : "4123123123123" }
			mfgSerial = "20:50:00:00:00:00";
			bldSerial = "4123123123123";
		}		
		
		var serialNumbers = {
			MfgSerial : mfgSerial,
			BuildSerial : bldSerial
		};
		
		if ($.isArray(params)){
			return params.push({authfieldvalue:serialNumbers});
		}else{
			//return params + "&authfieldValue=" + serialNumbers;
			//this.setParams(params);
			return params.authfieldValue=serialNumbers;
		}
	};
	this.getHttpType = function(){
		return httpType;		  
	};	
	this.setHttpType = function( argHttpType ){
		httpType = argHttpType;		  
	};	
	this.setRequestDetails = function(requestDetails) {
		if (requestDetails !== null) {
			physicalServerURL = requestDetails.physicalServerURL || "/";
			middlewareName = requestDetails.middlewareName;
			serviceName = requestDetails.serviceName;
			httpType = requestDetails.httpType;
			//params = requestDetails.params;
			this.setParams(requestDetails.params);
		}
	};
	this.setParams = function(requestParams) {
		params = requestParams || {};
		addAuthfieldValue(params);
	};
	this.buildRequest = function() {
		var requestURL = (_.isEmpty(_.keys(params))) ? this.getURLString() : this.getURLString();
		if(httpType=="GET")
		{
			requestURL += "?" + this.getParamString();	
		}
		return requestURL;
	};
	this.getURLString = function() {
		//var wiciRootFolder = applicationPath.substring(0, applicationPath.indexOf(thisWebappName));
		var wiciRootFolder = physicalServerURL;
		return wiciRootFolder + middlewareName + "/" + serviceName;
	};
	this.getParamString = function() {
		var strParams = JSON.parse(JSON.stringify(params));
		if(httpType=="GET"){
			return $.param(getCleanedParams(strParams));	
		}else if (httpType=="POST"){
			return JSON.stringify(strParams);
		}		
	};
	
	function getCleanedParams(argParams) {
		for (var param in argParams) {
			if (argParams[param] === null || argParams[param] === undefined) {
				delete argParams[param];
			}
		}
		return argParams;
	};
};