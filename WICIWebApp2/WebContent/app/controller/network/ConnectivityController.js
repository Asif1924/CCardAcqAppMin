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
								middlewareName: WICI.middlewareName,
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
        connRequestBuilder.setHttpType( "POST" );
        if (!isDemoConnection() &&  !connectionStatus.healthy()) {
			setTimeout(failureCallback, 500);	
			return;
		}
        
        //function AJAXrequest(url, httpVerb, requestParams, successCallback, failureCallback, beforeSendCall, onCompleteCall, isSilent) 
        AJAXrequest(
        	serviceNameEnum.IsAlive,
        	connRequestBuilder.getHttpType(),
            null,  
            successCallback,
            failureCallback, null, null, isSilent, 3000   
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

        //var requestParams = argCreditCardData.getGroupedData();
		var requestParams = { 
			accountApplicationData : argCreditCardData.getGroupedData()
		};
        console.log("---argCreditCardData=" + argCreditCardData);
        
        connRequestBuilder.setHttpType( "POST" );
        connRequestBuilder.setParams(requestParams);
        
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
        	connRequestBuilder.getHttpType(),
            connRequestBuilder.getParamString(),
            argSuccessCallback,
            wrappedErrorCallback    //failureCallback
        );
    };

	this.poll = function (argRequestParams, argSuccessCallback, argFailureCallback, argIsSilent ){
        var sMethod = 'pollAccountApplicationQueue() ';
        console.log(logPrefix + sMethod);

        argFailureCallback = argFailureCallback || $.noop;

        var connectivityErrors = new WICI.ConnectivityControllerErrors(messageDialog, translate, argIsSilent);

        connRequestBuilder.setHttpType( "POST" );
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
        		serviceNameEnum.PollAccountApplicationResponse,
        		connRequestBuilder.getHttpType(),
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
		connRequestBuilder.setHttpType( "POST" );
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
			connRequestBuilder.getHttpType(),
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
		connRequestBuilder.setHttpType( "POST" );
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
			connRequestBuilder.getHttpType(),
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
		connRequestBuilder.setHttpType( "POST" );
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
			connRequestBuilder.getHttpType(),
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
				//success : successCallback,
				
				success : function(arg){
					// Generic check if application is logged in an is authorized 
					if(!checkForLoginAuthorizationFailed(arg))					
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
    
    function checkForLoginAuthorizationFailed(arg){
    	if(arg && arg.data && arg.data.isAuthorizationFailed)
		{  
    		new WICI.LoadingIndicatorController().hide();
    		if (navigator.app){
    			messageDialog.error( app.translator.translateKey("unauthorized_Device"), app.translator.translateKey("errorDialog_defaultTitle"), navigator.app.exitApp);
    		}
    		return true;    		
		}else if(arg && arg.data && arg.data.isFailedLogin){			
			logout();
			return true;
		}
    	return false;
    }
    function logout(){
    	if(app.flowController){
			app.flowController.logOut();
		}
    }

};