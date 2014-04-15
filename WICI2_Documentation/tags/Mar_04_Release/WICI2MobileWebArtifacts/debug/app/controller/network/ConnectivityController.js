ensureNamespaceExists();

WICI.ConnectivityController = function(connectionStatus, messageDialog, translate, config) {
	
	var connRequestBuilder = null;
	var ajaxCallTimeout = 0;

	this.init = function() {
		console.log("WICI.ConnectivityController");
		connRequestBuilder = new WICI.RequestBuilder();
		ajaxCallTimeout = config.SINGLE_CONNECTION_TIMEOUT;
	};	
	
	function buildRequestBaseURL(argServiceName, argParams) {
		var requestParams = {
								physicalServerURL : WICI.physicalserverURL,
								applicationPath : window.location.pathname,
								middlewareName: WICI.middlewareName,
								thisWebappName: WICI.thisWebappName,
								serviceName: argServiceName,
								params: argParams || {}
							};

		connRequestBuilder.init(requestParams);
		return connRequestBuilder.buildRequest();
	}	
	
    this.AddressLookup = function(argPostalCode, argStreetNumber, argSuccessCallback, argFailureCallback) {
    	console.log("AddressLookup");
    	var connectivityErrors = new WICI.ConnectivityControllerErrors(messageDialog, translate);
    	var serviceName = "AddressLookup";
		var requestURL = buildRequestBaseURL(serviceName);
		var requestParams = {
      		  "postalCode":argPostalCode,
      		  "streetNumber":argStreetNumber
			};
		connRequestBuilder.setParams(requestParams);

		var wrappedErrorCallback = function(jqXHR, textStatus, errorThrown) {
    		if(sessionLiveCheck(jqXHR)){
    			console.log("AddressLookup Error Response: " + textStatus + "\n" + errorThrown);
    			argFailureCallback();
			} else {
				connectivityErrors.hideLoadingScreenAndShowUnableToConnectError("AddressLookup");
        	}
    	};
		
		AJAXrequest(
        	requestURL,
        	"GET",
        	connRequestBuilder.getParamString(),
        	argSuccessCallback,
        	wrappedErrorCallback
		);
    };
   
    function AJAXrequest(url, httpVerb, requestParams, successCallback, failureCallback, beforeSendCall, onCompleteCall, isSilent) {
    	//console.log("AJAXRequest url=" + url);
		beforeSendCall = beforeSendCall || $.noop;
		onCompleteCall = onCompleteCall || $.noop;
		isSilent = isSilent || false;

    	if (connectionStatus.healthy()) {
	        $.ajax({
	            url: url,
	            contentType: "application/x-www-form-urlencoded; charset=utf-8",
	            type: httpVerb,
	            dataType: 'json',
	    		beforeSend: beforeSendCall,
	    		timeout: ajaxCallTimeout,
	            data: requestParams,
	            success: successCallback,
	            error: failureCallback,
	            complete: onCompleteCall
	        });
    	}
    	else {
    		if (!isSilent) {
    			var connectivityErrors = new WICI.ConnectivityControllerErrors(messageDialog, translate);
    			connectivityErrors.hideLoadingScreenAndShowNetworkDownError();
    		}
			onCompleteCall();
    	}
    }
    function sessionLiveCheck(jqXHR) {
    	var result = true;
    	//TODO: Implement logic to determine what qualifies a live session 
    	return result;
    }    
};