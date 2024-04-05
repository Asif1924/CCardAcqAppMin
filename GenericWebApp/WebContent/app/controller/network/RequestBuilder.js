ensureNamespaceExists();

GENERICWEBAPP.RequestBuilder = function() {
	var middlewareName = "";
	var physicalServerURL = "";
	var serviceName = "";
	var httpType = "";
	var params = {};

	this.init = function(requestDetails) {
		this.setRequestDetails(requestDetails);
		
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
	};
	this.buildRequest = function() {
		var requestURL = this.getURLString();
		if(httpType=="GET"){
			requestURL += "?" + this.getParamString();	
		}
		return requestURL;
	};
	this.getURLString = function() {		
		var RootFolder = physicalServerURL;
		return RootFolder + middlewareName + "/" + serviceName;
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