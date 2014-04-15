ensureNamespaceExists();

WICI.RequestBuilder = function() {
	var middlewareName = "";
	var thisWebappName = "";
	var applicationPath = "";
	var physicalServerURL = "";
	var serviceName = "";
	var params = {};

	this.init = function(requestDetails) {
		this.setRequestDetails(requestDetails);		
	};
	this.setRequestDetails = function(requestDetails) {
		if (requestDetails !== null) {
			physicalServerURL = requestDetails.physicalServerURL || "/";
			applicationPath = requestDetails.applicationPath;
			middlewareName = requestDetails.middlewareName;
			thisWebappName = requestDetails.thisWebappName;
			serviceName = requestDetails.serviceName;
			params = requestDetails.params;
		}
	};
	this.setParams = function(requestParams) {
		params = requestParams;
	};
	this.buildRequest = function() {
		var requestURL = (_.isEmpty(_.keys(params))) ? this.getURLString() : this.getURLString() + "?" + this.getParamString();
		return requestURL;
	};
	this.getURLString = function() {
		//var wiciRootFolder = applicationPath.substring(0, applicationPath.indexOf(thisWebappName));
		var wiciRootFolder = physicalServerURL;
		return wiciRootFolder + middlewareName + "/" + serviceName;
	};
	this.getParamString = function() {
		return $.param(this.getCleanedParams());
	};
	this.getCleanedParams = function() {
		for (var param in params) {
			if (params[param] === null || params[param] === undefined) {
				delete params[param];
			}
		}
		return params;
	};
};