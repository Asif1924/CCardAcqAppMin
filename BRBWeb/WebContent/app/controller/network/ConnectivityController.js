ensureNamespaceExists();

BRB.ConnectivityController = function(connectionStatus, messageDialog, translate, config) {
    var logPrefix = '[BRB.ConnectivityController]::';
	//var connRequestBuilder = null;
	var ajaxCallTimeout = 0;

	var serviceNameEnum = BRB.ServiceNameEnum;

	var isDemoConnection = function(){
		if(app && app.getDemoMode){
			return app.getDemoMode();
		}
		return false;
	};

	this.init = function() {
		BRB.Log("BRB.ConnectivityController");		
		ajaxCallTimeout = config.SINGLE_CONNECTION_TIMEOUT;
	};

	function getRequestBuilder(argServiceName, argParams, httpType) {
		var connRequestBuilder = new BRB.RequestBuilder(argServiceName, argParams, httpType);
		
		return connRequestBuilder;
	}
	//---------------------------------------------------------------------------------------
    this.isAlive = function(successCallback, argFailureCallback, isSilent) {
        var sMethod = 'isAlive() ';
        BRB.Log(logPrefix + sMethod);

        argFailureCallback = argFailureCallback || $.noop;

        if (!isDemoConnection() &&  !connectionStatus.healthy()) {
			setTimeout(argFailureCallback, 500);
			return;
		}

        //function AJAXrequest(url, httpVerb, requestParams, successCallback, argFailureCallback, beforeSendCall, onCompleteCall, isSilent)
        AJAXrequest(
        	serviceNameEnum.IsAlive,
            "GET",
            null,
            successCallback,
            argFailureCallback, null, null, isSilent, 3000
        );
    };
    // US4281
    //---------------------------------------------------------------------------------------
    this.getDictionaryInfo = function(argTransactionId, argSuccessCallback, argFailureCallback) {
    	var sMethod = 'getDictionaryInfo() ';
        BRB.Log(logPrefix + sMethod + argTransactionId);

		var params = {
      		  "brbTransactionId" : argTransactionId
		};

		AJAXrequest(
			serviceNameEnum.DictionaryInfo,
        	"POST",
        	params,
        	argSuccessCallback,
        	argFailureCallback
		);
    };
    //---------------------------------------------------------------------------------------
    this.IdentityExam = function(params, argSuccessCallback, argFailureCallback) {
    	BRB.Log("IdentityExam");
		AJAXrequest(
			serviceNameEnum.IdentityExam,
        	"POST",
        	params,
        	argSuccessCallback,
        	argFailureCallback
		);
    };
    // ---------------------------------------------------------------------------------------
    this.ScoreIdentityExam = function(params, argSuccessCallback, argFailureCallback) {
    	BRB.Log("ScoreIdentityExam");
		AJAXrequest(
			serviceNameEnum.ScoreIdentityExam,
        	"POST",
        	params,
        	argSuccessCallback,
        	argFailureCallback
		);
    };
    // ---------------------------------------------------------------------------------------
    this.getCustomerData = function (argTransactionId, argSuccessCallback, argFailureCallback) {
		var sMethod = 'getCustomerData() ';
        BRB.Log(logPrefix + sMethod);

		var params = {
      		  "brbTransactionId" : argTransactionId
		};

		AJAXrequest(
			serviceNameEnum.InitiateBRBWeb,
        	"POST",
        	params,
        	argSuccessCallback,
        	argFailureCallback
		);
	};
	// ---------------------------------------------------------------------------------------
	this.removeCustomerData = function (argTransactionId, argSuccessCallback, argFailureCallback, argScenario) {
		var sMethod = 'removeCustomerData() ';
        BRB.Log(logPrefix + sMethod + "::Transaction ID::" + argTransactionId);

		var params = {
      		  "brbTransactionId" : argTransactionId,
      		  "scenario"	  :	argScenario
		};

		AJAXrequest(
			serviceNameEnum.CompletionBRBWeb,
	        "POST",
	        params,
	        argSuccessCallback,
	        argFailureCallback
		);
	};
	// US4281
    // ---------------------------------------------------------------------------------------
    this.loadDictionary = function(language, scriptURL, argSuccessCallback, argFailureCallback, argBeforesenCallback, argCompleteCallback) {
    	BRB.Log("loadDictionary :: " + language + scriptURL);     	   	
    	
    	AJAXrequest(
			{
				url: scriptURL,
				dataType: "script",
				callTimeout: config.SINGLE_CONNECTION_TIMEOUT
			}, 
			"POST",
			null,
        	argSuccessCallback,
        	argFailureCallback,
        	argBeforesenCallback,
        	argCompleteCallback
		);
    };
    // ---------------------------------------------------------------------------------------
	 function AJAXrequest(serviceName, httpVerb, requestParams, successCallback, argFailureCallback, beforeSendCall, onCompleteCall, isSilent, callTimeout) {
			var sMethod = 'AJAXrequest() ';
			BRB.Log(logPrefix + sMethod);		
			    	
			var requestBuilder = getRequestBuilder(serviceName, requestParams, httpVerb);
			var url;
			if(serviceName.url) {
				url = serviceName.url;
				callTimeout = serviceName.callTimeout;
			} else {
				url = requestBuilder.getURLString();
			}
			
			BRB.Log(logPrefix + sMethod + "httpVerb: " + httpVerb + " url: "+ url);
			// BRB.Log(logPrefix + sMethod + "params: \n" + JSON.stringify(requestParams));
			BRB.Log(logPrefix + sMethod + "requestBuilder params: \n" + requestBuilder.getParamString());

			beforeSendCall = beforeSendCall || $.noop;
			onCompleteCall = onCompleteCall || $.noop;
			isSilent = isSilent || false;

			callTimeout = callTimeout || ajaxCallTimeout;
			BRB.Log(logPrefix + sMethod + "callTimeout: "+callTimeout);

			if(isDemoConnection()){
				BRB.Log(logPrefix + sMethod + " starting demo ajax request...");
				(new BRB.DemoAjax()).AJAXrequest(serviceName, httpVerb, requestParams, successCallback, argFailureCallback, beforeSendCall, onCompleteCall, isSilent, callTimeout);
				return;
			}
			
			if (connectionStatus.healthy()) {
				$.ajax({
					url : url,
					async: serviceName != serviceNameEnum.CompletionBRBWeb,
					// contentType : "application/x-www-form-urlencoded; charset=utf-8",
					type : httpVerb,
					dataType : serviceName.dataType || 'json',
					beforeSend : beforeSendCall,
					timeout : callTimeout,
					data : requestBuilder.getParamString(),
					success : function(arg){
						BRB.Log(logPrefix + sMethod + " success :: " + serviceName.dataType);
						if(serviceName.dataType == "script") {
							successCallback(arg);
						}
						if(arg.data && arg.data.isFailedLogin)
						{
							app.flowController.logOut();
						}
						else
						{
							//according to user story with number 1322
							if(arg.error && arg.data && arg.data  == '409'){
								// need to track already persisted  values
								BRB.Log(logPrefix + sMethod + "arg.data :: "+ arg.data);
								app.flowStateHelper.setTokenExpired();
								app.initiateAppHelper.isDeleteCustomerDataRequestSent = true;
								app.closeBRBWebWindow();
							} else {
								successCallback(arg);
							}
						}
					},

					error : argFailureCallback,
					complete : onCompleteCall
				});
			} else {
				new BRB.LoadingIndicatorController().hide();
				if (!isSilent) {
					var connectivityErrors = new BRB.ConnectivityControllerErrors(messageDialog, translate);
					connectivityErrors.hideLoadingScreenAndShowNetworkDownError();
				}

				onCompleteCall();
			}
	    };
	    
};