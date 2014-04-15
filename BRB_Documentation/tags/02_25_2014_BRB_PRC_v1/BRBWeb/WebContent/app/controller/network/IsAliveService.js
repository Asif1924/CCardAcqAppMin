ensureNamespaceExists();

BRB.IsAliveService = function() {
	var logPrefix = '[BRB.IsAliveService]::';
	var interval = BRB.AppConfig.ConnectivityConfig.IS_ALIVE_REQUEST_INTERVAL;

	var timerId = null; 
	
	var isAliveState = false; 
	
	var connectivityController = null;
	var translator = new BRB.Translate($.i18n, BRB.AppConfig.LanguageEnum);
	translator.init();
	connectivityController = new BRB.ConnectivityController(new BRB.ConnectionStatus(), null, translator, BRB.AppConfig.ConnectivityConfig);
    connectivityController.init();
    

		
	var serviceStateEnum = {
		unknown			: "notStarted",
		sending			: "sending",
		waitResponse	: "waitResponse",
		haveResponse	: "haveResponse",
		stopped			: "stopped"
	};
	
	var serviceState = serviceStateEnum.unknown;

	//---------------------------------------------------------------------------------------
	this.setInterval = function(value){
		interval = value;
	};
	//---------------------------------------------------------------------------------------
	this.getInterval = function(){
		return interval;
	};
	var getInterval = this.getInterval;
	//---------------------------------------------------------------------------------------
	this.start = function() {
		var sMethod = 'start() ';
		BRB.Log(logPrefix + sMethod);
		
		if(getServiceState() !== serviceStateEnum.unknown &&
				getServiceState() !== serviceStateEnum.stopped){
			BRB.Log(logPrefix + sMethod + "WARNING!!! service is in progress!!! Stop it before restarting!");
			return;
		}
		
		setServiceState(serviceStateEnum.unknown);
		
		doTimeoutRequest(0); 
	};
	//---------------------------------------------------------------------------------------	 
	this.stop = function() {
		var sMethod = 'stop() ';
		BRB.Log(logPrefix + sMethod + "timerId: "+timerId);
		
		setServiceState(serviceStateEnum.stopped);
		
		clearTimeout(timerId);
		
	};
	//---------------------------------------------------------------------------------------
	this.isAlive = function() {
		var sMethod = 'isAlive() ';
		BRB.Log(logPrefix + sMethod +" isAliveState:"+ isAliveState + " service state: "+ getServiceState());
		
		if(getServiceState() !== serviceStateEnum.haveResponse){
			return false;
		}
		
		return isAliveState;
	};
	var isAlive = this.isAlive;
	//---------------------------------------------------------------------------------------
	this.getServiceState = function() {
		return serviceState;
	};
	var getServiceState = this.getServiceState;
	//---------------------------------------------------------------------------------------
	var setServiceState = function(state){
		var sMethod = 'setServiceState() setServiceState:' + state;
		BRB.Log(logPrefix + sMethod);
		
		serviceState = state;
	};
	//---------------------------------------------------------------------------------------
	var doTimeoutRequest = function(intervalArg){
		var sMethod = 'doTimeoutRequest() ';
		//BRB.Log(logPrefix + sMethod);
		
		if(getServiceState() === serviceStateEnum.stopped){
			//no need to send another request
			BRB.Log(logPrefix + sMethod + " service is stopped so we cannot send next request!");
			return;
		}
		
		if(typeof intervalArg === "undefined"){
			intervalArg = getInterval();
		}
		
		BRB.Log(logPrefix + sMethod+ " request will be send in (ms): "+intervalArg+ " isAlive: " + isAlive());
		timerId = setTimeout(sendRequest, intervalArg);
	};
	//---------------------------------------------------------------------------------------
	var sendRequest = function(){
		var sMethod = 'sendRequest() ';
		BRB.Log(logPrefix + sMethod);
		setServiceState(serviceStateEnum.sending);
		
		setServiceState(serviceStateEnum.waitResponse);
		connectivityController.isAlive(requestSuccess, requestFailed, true);
	};
	//---------------------------------------------------------------------------------------
	var requestSuccess = function(){
		var sMethod = 'requestSuccess() ';
		BRB.Log(logPrefix + sMethod);
		
		setServiceState(serviceStateEnum.haveResponse);
		isAliveState = true;
		doTimeoutRequest();
	};
	//---------------------------------------------------------------------------------------
	var requestFailed = function(){
		var sMethod = 'requestFailed() ';
		BRB.Log(logPrefix + sMethod + " WARNING! IsAlive request failed!!!");
		
		setServiceState(serviceStateEnum.haveResponse);
		isAliveState = false;
		doTimeoutRequest();
	};

};