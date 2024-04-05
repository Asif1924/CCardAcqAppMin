ensureNamespaceExists();

GENERICWEBAPP.START_TIME = new Date().getTime() + "-";

GENERICWEBAPP.ConnectivityController = function(connectionStatus, messageDialog, translate, config) {
    var logPrefix = '[GENERICWEBAPP.ConnectivityController]::';
	var connRequestBuilder = null;
	var ajaxCallTimeout = 0;
	
	var serviceNameEnum = GENERICWEBAPP.ServiceNameEnum;
	
	var isDemoConnection = function(){
		if(app && app.getDemoMode){
			return app.getDemoMode();
		}
		return false;
	};

	this.init = function() {
		console.log("GENERICWEBAPP.ConnectivityController");
		connRequestBuilder = new GENERICWEBAPP.RequestBuilder();
		ajaxCallTimeout = config.SINGLE_CONNECTION_TIMEOUT;
	};	
	
	function buildRequestBaseURL(argServiceName, argParams) {
		var requestParams = {
								physicalServerURL : GENERICWEBAPP.physicalserverURL,
								middlewareName: GENERICWEBAPP.middlewareName,
								serviceName: argServiceName,
								params: argParams || {}
							};

		connRequestBuilder.init(requestParams);
		return connRequestBuilder.buildRequest();
	}
	
    this.Login = function(argEmployerID, argAgentID, argUserID, argPassword, argUserLocation, argAPKVersion, argSuccessCallback, argFailureCallback, offlineCallback) {
    	var sMethod = 'Login() ';
        console.log(logPrefix + sMethod);
        
    	var connectivityErrors = new GENERICWEBAPP.ConnectivityControllerErrors(messageDialog, translate);

		var requestParams = {
			"employerID": argEmployerID,
			"agentID": argAgentID,
	      	"userLocation": argUserLocation,
	      	"apkVersion": argAPKVersion
		};
		connRequestBuilder.setHttpType( "POST" );
		connRequestBuilder.setParams(requestParams);

		var wrappedErrorCallback = function(jqXHR, textStatus, errorThrown) {
    		if (sessionLiveCheck(jqXHR)) {
    			console.log("Login Error Response: " + textStatus + "\n" + errorThrown);
    			argFailureCallback();
			} else {
				connectivityErrors.hideLoadingScreenAndShowUnableToConnectError("Login");
        	}
    	};

		AJAXrequest(
			{
				serviceName: serviceNameEnum.Login,
				httpVerb: connRequestBuilder.getHttpType(),
				requestParams: connRequestBuilder.getParamString()
			},
			argSuccessCallback,
			wrappedErrorCallback,
			$.noop,
			$.noop,
			offlineCallback
		);
    };


	/**
	 * @param {Object} descriptor
	 * @param {Function} successCallback
	 * @param {Function} failureCallback
	 * @param {Function} [beforeSendCall]
	 * @param {Function} [onCompleteCall]
	 * @param {Function} [offlineCallback]
	 * @returns {jqXHR} $.ajax result object
	 */
    function AJAXrequest(descriptor, successCallback, failureCallback, beforeSendCall, onCompleteCall, offlineCallback) {
		var sMethod = 'AJAXrequest() ';
		console.log(logPrefix + sMethod);
		var url, defer;
		if (descriptor.serviceName) {
			url = buildRequestBaseURL(descriptor.serviceName);
		} else {
			url = descriptor.url;
		}
		
		console.log(logPrefix + sMethod + "httpVerb: " + descriptor.httpVerb + " url: "+ url);
		console.log(logPrefix + sMethod + "params: \n" + descriptor.requestParams);

		beforeSendCall = beforeSendCall || $.noop;
		onCompleteCall = onCompleteCall || $.noop;
		offlineCallback = offlineCallback || failureCallback;
		var isSilent = descriptor.isSilent || false;
		
		var callTimeout = descriptor.callTimeout || ajaxCallTimeout;
		console.log(logPrefix + sMethod + "callTimeout: "+callTimeout);

		var ajaxContext = this;
		var ajaxArguments = arguments;

		if (isDemoConnection()){
			console.log(logPrefix + sMethod + " starting demo ajax request...");
			(new GENERICWEBAPP.DemoAjax()).AJAXrequest(descriptor.serviceName, descriptor.httpVerb, descriptor.requestParams, successCallback, failureCallback, beforeSendCall, onCompleteCall, isSilent, callTimeout, descriptor.dataType||'json');
			return;
		}


		if (connectionStatus.healthy()) {
			defer = $.ajax({
				url : url,
				//contentType : "application/x-www-form-urlencoded; charset=utf-8",
				type : descriptor.httpVerb,
				dataType : descriptor.dataType || 'json',
				beforeSend : beforeSendCall,
				timeout : callTimeout,
				data : descriptor.requestParams,
				success : onCompleteCall(), 
				
				error : function(jqXHR, textStatus, errorThrow)  {
					var headers = jqXHR.getAllResponseHeaders();
					var offline = headers === '';
					if (offline) {
						console.log(logPrefix + sMethod + 'offline');

						offlineCallback();
						onCompleteCall();
					} else {
						failureCallback.apply(null, arguments);
						onCompleteCall();
					}
				}
			});
		} else {
			// TODO: what to do here
			new GENERICWEBAPP.LoadingIndicatorController().hide();
			if (!isSilent) {
				var connectivityErrors = new GENERICWEBAPP.ConnectivityControllerErrors(messageDialog, translate);
				connectivityErrors.hideLoadingScreenAndShowNetworkDownError();
			}

			onCompleteCall();
		}
		return defer;
    }

    function sessionLiveCheck(jqXHR) {
    	var sMethod = 'sessionLiveCheck() ';
        console.log(logPrefix + sMethod);
		//TODO: Implement logic to determine what qualifies a live session
		return true;
	}
    

};