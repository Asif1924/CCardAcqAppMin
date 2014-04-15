ensureNamespaceExists();

WICI.START_TIME = new Date().getTime() + "-";

WICI.ConnectivityController = function(connectionStatus, messageDialog, translate, config) {
    var logPrefix = '[WICI.ConnectivityController]::';
	var connRequestBuilder = null;
	var ajaxCallTimeout = 0;
	
	var serviceNameEnum = WICI.ServiceNameEnum;
	
	var isDemoConnection = function(){
		if(app && app.getDemoMode){
			return app.getDemoMode();
		}
		return false;
	};

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
	//---------------------------------------------------------------------------------------
    this.isAlive = function(successCallback, failureCallback, isSilent) {
        var sMethod = 'isAlive() ';
        console.log(logPrefix + sMethod);
        
        failureCallback = failureCallback || $.noop;

        if (!isDemoConnection() &&  !connectionStatus.healthy()) {
			setTimeout(failureCallback, 500);	
			return;
		}
        
        //function AJAXrequest(url, httpVerb, requestParams, successCallback, failureCallback, beforeSendCall, onCompleteCall, isSilent) 
        AJAXrequest(
        	serviceNameEnum.IsAlive,
            "GET",
            null,  
            successCallback,
            failureCallback, null, null, isSilent, 3000   
        );
    };
	//---------------------------------------------------------------------------------------
    this.activateTest = function(creditCardData, successCallback, failureCallback, isSilent) {
        var sMethod = 'activateTest() ';
        console.log(logPrefix + sMethod);
        
        failureCallback = failureCallback || $.noop;

        var connectivityErrors = new WICI.ConnectivityControllerErrors(messageDialog, translate, isSilent);

        //var requestParams = creditCardData.getAllData();
        var requestParams = creditCardData.getGroupedData(); 
        var wrappedErrorCallback = function(jqXHR, textStatus, errorThrown) {
            if(sessionLiveCheck(jqXHR)){
                console.log("AccountApplication Error Response: " + textStatus + "\n" + errorThrown);
                failureCallback();
            } else {
                connectivityErrors.hideLoadingScreenAndShowUnableToConnectError("AccountApplication");
            }
        };
        
        AJAXrequest(
        	serviceNameEnum.AccountApplication,
            "POST",
            JSON.stringify(requestParams),  //connRequestBuilder.getParamString(),
            successCallback,
            wrappedErrorCallback    //failureCallback
        );
    };

    this.initAccountApplication = function( argCreditCardData, argSuccessCallback, argFailureCallback, argIsSilent) {
        var sMethod = 'initAccountApplication() ';
        console.log(logPrefix + sMethod);

        argFailureCallback = argFailureCallback || $.noop;

        var connectivityErrors = new WICI.ConnectivityControllerErrors(messageDialog, translate, argIsSilent);

        console.log("---setting init params");
        var loginScreenModel 		= argCreditCardData.getModel("loginScreen");
		var agentID 				= loginScreenModel.get("agentID");
		var queueTransactionID 		= new WICI.UniqueIDGenerator().getUniqueID(agentID);

		console.log("---loginScreenModel=" + loginScreenModel );
		console.log("---agentID=" + agentID);
		console.log("---queueTransactionID=" + queueTransactionID);

		argCreditCardData.setQueueTransactionID(queueTransactionID);

        var requestParams = argCreditCardData.getGroupedData();
        console.log("---argCreditCardData=" + argCreditCardData);

        var wrappedErrorCallback = function(jqXHR, textStatus, errorThrown) {
            if(sessionLiveCheck(jqXHR)){
                console.log("initAccountApplication Error Response: " + textStatus + "\n" + errorThrown);
                argFailureCallback();
            } else {
                connectivityErrors.hideLoadingScreenAndShowUnableToConnectError("initAccountApplication");
            }
        };

        console.log("Invoking initAccountApplication request now...");
        AJAXrequest(
        	serviceNameEnum.InitAccountApplication,
            "POST",
            JSON.stringify(requestParams),  //connRequestBuilder.getParamString(),
            argSuccessCallback,
            wrappedErrorCallback    //failureCallback
        );
    };

	this.poll = function ( argServiceName, argRequestParams, argSuccessCallback, argFailureCallback, argIsSilent ){
        var sMethod = 'pollAccountApplicationQueue() ';
        console.log(logPrefix + sMethod);

        argFailureCallback = argFailureCallback || $.noop;

        var connectivityErrors = new WICI.ConnectivityControllerErrors(messageDialog, translate, argIsSilent);

		connRequestBuilder.setParams(argRequestParams);

        var wrappedErrorCallback = function(jqXHR, textStatus, errorThrown) {
            if(sessionLiveCheck(jqXHR)){
                console.log("AccountApplication Error Response: " + textStatus + "\n" + errorThrown);
                argFailureCallback();
            } else {
                connectivityErrors.hideLoadingScreenAndShowUnableToConnectError("poll");
            }
        };
        AJAXrequest(
        		argServiceName,
            	"GET",
            	connRequestBuilder.getParamString(),
            	argSuccessCallback,
            	wrappedErrorCallback
        );
	};

    //---------------------------------------------------------------------------------------
    this.Login = function(argEmployerID, argAgentID, argUserID, argPassword, argUserLocation, argAPKVersion, argSuccessCallback, argFailureCallback) {
    	var sMethod = 'Login() ';
        console.log(logPrefix + sMethod);
        
    	var connectivityErrors = new WICI.ConnectivityControllerErrors(messageDialog, translate);
    	//Old login parameters are orphaned now but they may come back at some time in the future
    	/*
		var requestParams = {
      		  "userID":argUserID,
      		  "password":argPassword,
      		  "userLocation":argUserLocation
			};
		*/
		var requestParams = {
			"employerID": argEmployerID,
			"agentID": argAgentID,
	      	"userLocation": argUserLocation,
	      	"apkVersion": argAPKVersion 
		};
		
		connRequestBuilder.setParams(requestParams);

		var wrappedErrorCallback = function(jqXHR, textStatus, errorThrown) {
    		if(sessionLiveCheck(jqXHR)){
    			console.log("Login Error Response: " + textStatus + "\n" + errorThrown);
    			argFailureCallback();
			} else {
				connectivityErrors.hideLoadingScreenAndShowUnableToConnectError("Login");
        	}
    	};
		
		AJAXrequest(
			serviceNameEnum.Login,
        	"GET",
        	connRequestBuilder.getParamString(),
        	argSuccessCallback,
        	wrappedErrorCallback
		);
    };

    this.GetVersion = function(argSuccessCallback, argFailureCallback,argCompleteCallback) {
    	console.log("GetVersion");
    	var connectivityErrors = new WICI.ConnectivityControllerErrors(messageDialog, translate);
		var requestParams = {
			};
		connRequestBuilder.setParams(requestParams);

		var wrappedErrorCallback = function(jqXHR, textStatus, errorThrown) {
    		if(sessionLiveCheck(jqXHR)){
    			console.log("GetVersion Error Response: " + textStatus + "\n" + errorThrown);
    			argFailureCallback(jqXHR,textStatus,errorThrown);
			} else {
				connectivityErrors.hideLoadingScreenAndShowUnableToConnectError("GetVersion");
        	}
    	};

		AJAXrequest(
			serviceNameEnum.GetVersion,
        	"GET",
        	connRequestBuilder.getParamString(),
        	argSuccessCallback,
        	wrappedErrorCallback,
        	$.noop(),
        	argCompleteCallback
		);
    };

    // ---------------------------------------------------------------------------------------
    this.AddressLookup = function(argPostalCode, argStreetNumber, argSuccessCallback, argFailureCallback) {
    	console.log("AddressLookup");
    	var connectivityErrors = new WICI.ConnectivityControllerErrors(messageDialog, translate);
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
			serviceNameEnum.AddressLookup,
        	"GET",
        	connRequestBuilder.getParamString(),
        	argSuccessCallback,
        	wrappedErrorCallback
		);
    };
   
    function AJAXrequest(serviceName, httpVerb, requestParams, successCallback, failureCallback, beforeSendCall, onCompleteCall, isSilent, callTimeout) {
		var sMethod = 'AJAXrequest() ';
		console.log(logPrefix + sMethod);

		var url = buildRequestBaseURL(serviceName);
		console.log(logPrefix + sMethod + "httpVerb: " + httpVerb + " url: "+ url);
		console.log(logPrefix + sMethod + "params: \n" + requestParams);

		beforeSendCall = beforeSendCall || $.noop;
		onCompleteCall = onCompleteCall || $.noop;
		isSilent = isSilent || false;
		
		callTimeout = callTimeout || ajaxCallTimeout; 
		console.log(logPrefix + sMethod + "callTimeout: "+callTimeout);

		if(isDemoConnection()){
			console.log(logPrefix + sMethod + " starting demo ajax request...");
			(new WICI.DemoAjax()).AJAXrequest(serviceName, httpVerb, requestParams, successCallback, failureCallback, beforeSendCall, onCompleteCall, isSilent, callTimeout);
			return;
		}
		
		if (connectionStatus.healthy()) {
			$.ajax({
				url : url,
				contentType : "application/x-www-form-urlencoded; charset=utf-8",
				type : httpVerb,
				dataType : 'json',
				beforeSend : beforeSendCall,
				timeout : callTimeout,
				data : requestParams,
				success : function(arg){
					if(arg && arg.data && arg.data.isFailedLogin)
					{
						app.flowController.logOut();
					}
					else
					{
						successCallback(arg);
					}
				}, 
					
				error : failureCallback,
				complete : onCompleteCall
			});
		} else {
			new WICI.LoadingIndicatorController().hide();
			if (!isSilent) {
				var connectivityErrors = new WICI.ConnectivityControllerErrors(messageDialog, translate);
				connectivityErrors.hideLoadingScreenAndShowNetworkDownError();
			}

			onCompleteCall();
		}
    }

    function sessionLiveCheck(jqXHR) {
    	var sMethod = 'sessionLiveCheck() ';
        console.log(logPrefix + sMethod);
		var result = true;
		//TODO: Implement logic to determine what qualifies a live session 
		return result;
	}    
};