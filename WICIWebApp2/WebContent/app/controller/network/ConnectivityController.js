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
        
        AJAXrequest(
        	{
        		serviceName: 	serviceNameEnum.IsAlive,
        		httpVerb: 	connRequestBuilder.getHttpType(),
            	isSilent: 	isSilent,
            	callTimeout: 	3000 
            },
            successCallback,
            failureCallback  
        );
    };

    this.initAccountApplication = function(argCreditCardData, argSuccessCallback, argFailureCallback, argIsSilent) {
        var sMethod = 'initAccountApplication() ';
        console.log(logPrefix + sMethod);

        argFailureCallback = argFailureCallback || $.noop;

        var connectivityErrors = new WICI.ConnectivityControllerErrors(messageDialog, translate, argIsSilent);

        console.log("---setting init params");
        var loginScreenModel 		= argCreditCardData.getModel("loginScreen");
		var agentID 				= loginScreenModel.get("agentID");
		
		//WASA2 Fix - QueueTransactionID to be generating from middle ware
		//var queueTransactionID 		= new WICI.UniqueIDGenerator().getUniqueID(agentID);

		console.log("---loginScreenModel=" + loginScreenModel );
		console.log("---agentID=" + agentID);
		//console.log("---queueTransactionID=" + queueTransactionID);  //WASA2 Fix 

		//argCreditCardData.setQueueTransactionID(queueTransactionID);  //WASA2 Fix 

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
        	{
        		serviceName: 	serviceNameEnum.InitAccountApplication,
        		httpVerb: 	connRequestBuilder.getHttpType(),
				requestParams: 	connRequestBuilder.getParamString()
        	},        		
            argSuccessCallback,
            wrappedErrorCallback    //failureCallback
        );
    };

	this.poll = function(argRequestParams, argSuccessCallback, argFailureCallback, argIsSilent) {
        var sMethod = 'pollAccountApplicationResponse() ';
        console.log(logPrefix + sMethod);

        argFailureCallback = argFailureCallback || $.noop;

        var connectivityErrors = new WICI.ConnectivityControllerErrors(messageDialog, translate, argIsSilent);

        connRequestBuilder.setHttpType("POST");
		connRequestBuilder.setParams(argRequestParams);

        var wrappedErrorCallback = function(jqXHR, textStatus, errorThrown) {
            if (sessionLiveCheck(jqXHR)) {
                console.log("AccountApplication Error Response: " + textStatus + "\n" + errorThrown);
                argFailureCallback();
            } else {
                connectivityErrors.hideLoadingScreenAndShowUnableToConnectError("poll");
            }
        };
        AJAXrequest(
        	{
        		serviceName: 	serviceNameEnum.PollAccountApplicationResponse,
        		httpVerb: 	connRequestBuilder.getHttpType(),
				requestParams: 	connRequestBuilder.getParamString()
            },
            argSuccessCallback,
            wrappedErrorCallback
        );
	};

    //---------------------------------------------------------------------------------------
    this.Login = function(argEmployerID, argAgentID, argUserID, argPassword, argUserLocation, argAPKVersion, argSuccessCallback, argFailureCallback, offlineCallback) {
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

    this.GetVersion = function(argSuccessCallback, argFailureCallback, argCompleteCallback) {
    	console.log("GetVersion");
    	var connectivityErrors = new WICI.ConnectivityControllerErrors(messageDialog, translate);
		var requestParams = {};
		connRequestBuilder.setHttpType("POST");
		connRequestBuilder.setParams(requestParams);

		var wrappedErrorCallback = function(jqXHR, textStatus, errorThrown) {
    		if (sessionLiveCheck(jqXHR)) {
    			console.log("GetVersion Error Response: " + textStatus + "\n" + errorThrown);
    			argFailureCallback(jqXHR,textStatus,errorThrown);
			} else {
				connectivityErrors.hideLoadingScreenAndShowUnableToConnectError("GetVersion");
        	}
    	};

		AJAXrequest(
			{
				serviceName: 	serviceNameEnum.GetVersion,
				httpVerb: 	connRequestBuilder.getHttpType(),
				requestParams: 	connRequestBuilder.getParamString()
			},
			
        	argSuccessCallback,
        	wrappedErrorCallback,
        	$.noop(),
        	argCompleteCallback
		);
    };

    this.loadDictionary = function(language, scriptURL, argSuccessCallback, argFailureCallback, argBeforesenCallback, argCompleteCallback) {
    	console.log("loadDictionary");
    	var connectivityErrors = new WICI.ConnectivityControllerErrors(messageDialog, translate);
		var requestParams = {};
		connRequestBuilder.setHttpType("POST");

		var wrappedErrorCallback = function(jqXHR, textStatus, errorThrown) {
    		if(sessionLiveCheck(jqXHR)){
    			console.log("loadDictionary Error Response: " + textStatus + "\n" + errorThrown);
    			argFailureCallback(jqXHR,textStatus,errorThrown);
			} else {
				connectivityErrors.hideLoadingScreenAndShowUnableToConnectError("loadDictionary");
        	}
    	};

		return AJAXrequest(
			{
				dataType: 	"script",
				httpVerb: 	connRequestBuilder.getHttpType(),
				url: scriptURL,
				callTimeout : WICI.AppConfig.ConnectivityConfig.SCRIPT_REQUEST_INTERVAL
			},
        	argSuccessCallback,
        	wrappedErrorCallback,
        	argBeforesenCallback,
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
			{
				serviceName: 	serviceNameEnum.AddressLookup,
				httpVerb: 	connRequestBuilder.getHttpType(),
				requestParams: 	connRequestBuilder.getParamString()
			},
        	argSuccessCallback,
        	wrappedErrorCallback
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
			(new WICI.DemoAjax()).AJAXrequest(descriptor.serviceName, descriptor.httpVerb, descriptor.requestParams, successCallback, failureCallback, beforeSendCall, onCompleteCall, isSilent, callTimeout, descriptor.dataType||'json');
			return;
		}

		/**
		 * @param {Number} count retry count left
		 */
		function tryConnect(count) {
			console.log(logPrefix + sMethod + 'tryConnection('+count+')');
			if (count === 0) {
				offlineCallback();
				return;
			}

			var deferred = WICI.WIFIHelper.tryConnect;
			deferred.done(function() {
				console.log(logPrefix + sMethod + 'connection reestablished, retry AJAXrequest...');
				AJAXrequest.apply(ajaxContext, ajaxArguments);
			});
			deferred.fail(function() {
				tryConnect(count--);
			});
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
				success : function(arg){
					// Generic check if application is logged in an is authorized 
					if (!checkForLoginAuthorizationFailed(arg)) {
						successCallback(arg);
					}
					onCompleteCall();
				}, 
				
				error : function(jqXHR, textStatus, errorThrow)  {
					var headers = jqXHR.getAllResponseHeaders();
					var offline = headers === '';
					if (offline) {
						console.log(logPrefix + sMethod + 'offline');
						// TODO: uncomment to enable autoconnect
						//if (WICI.AppConfig.ConnectivityConfig.AUTO_CONNECT_WIFI) {
						//	tryConnect(WICI.AppConfig.ConnectivityConfig.AUTO_CONNECT_RETRIES);
						//}
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
			new WICI.LoadingIndicatorController().hide();
			if (!isSilent) {
				var connectivityErrors = new WICI.ConnectivityControllerErrors(messageDialog, translate);
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