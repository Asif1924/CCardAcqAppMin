ensureNamespaceExists();

BRB.RequestBuilder = function(argServiceName, argParams, argHttpType) {
	var middlewareName = BRB.middlewareName;
	var thisWebappName = BRB.thisWebappName;
	var applicationPath = window.location.pathname;
	var physicalServerURL = BRB.physicalserverURL;
	var serviceName = argServiceName;
	var httpType = argHttpType;
	var params = argParams || {};
	
	this.setParams = function(requestParams) {
		params = requestParams;
	};
	
	/*this.buildRequest = function() {
		var requestURL = (_.isEmpty(_.keys(params))) ? this.getURLString() : this.getURLString() + "?" + this.getParamString();
		return requestURL;
	};*/
	
	this.getURLString = function() {
		//var brbRootFolder = physicalServerURL;
		//var brbRootFolder = applicationPath.substring(0,applicationPath.indexOf(thisWebappName));
		var brbRootFolder = window.location.protocol + "//" + window.location.host;
		return brbRootFolder + "/" + middlewareName + "/" + serviceName;
	};
	this.getParamString = function() {
		var strParams = JSON.parse(JSON.stringify(params));
		addTrackingScreenID(strParams);
		if(httpType=="GET"){
			return $.param(getCleanedParams(strParams));
		}else if (httpType=="POST"){
			return JSON.stringify(strParams);
		}
		return {};
	};
	function getCleanedParams (argParams) {
		for (var param in argParams) {
			if (argParams[param] === null || argParams[param] === undefined) {
				delete argParams[param];
			}
		}
		return argParams;
	};
	
	function addTrackingScreenID(argParams){
		var params = argParams;
	if(app.getIsMOARequest()) {
		if ($.isArray(params)){
			params.push({brbTransactionId:app.moacustomerTransactionModel.getTransactionId()});
			return params.push({TrackingScreenID:BRB.AppConfig.TrackingScreenID});
		}else{
			params.brbTransactionId = app.moacustomerTransactionModel.getTransactionId();
			return params.TrackingScreenID = BRB.AppConfig.TrackingScreenID;
		}
	} else {
		if ($.isArray(params)){
			params.push({brbTransactionId:app.customerTransactionModel.getTransactionId()});
			return params.push({TrackingScreenID:BRB.AppConfig.TrackingScreenID});
		}else{
			params.brbTransactionId = app.customerTransactionModel.getTransactionId();
			return params.TrackingScreenID = BRB.AppConfig.TrackingScreenID;
		}
	}
		// Old Code
		/*if ($.isArray(params)){
			params.push({brbTransactionId:app.customerTransactionModel.getTransactionId()});
			return params.push({TrackingScreenID:BRB.AppConfig.TrackingScreenID});
		}else{
			params.brbTransactionId = app.customerTransactionModel.getTransactionId();
			return params.TrackingScreenID = BRB.AppConfig.TrackingScreenID;
		}*/		
	}
};