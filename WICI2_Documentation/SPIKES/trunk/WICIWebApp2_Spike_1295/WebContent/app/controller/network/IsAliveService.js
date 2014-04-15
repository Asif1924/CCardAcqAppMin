ensureNamespaceExists();

WICI.IsAliveService = function() {
	var logPrefix = '[WICI.IsAliveService]::';
	var interval = WICI.AppConfig.ConnectivityConfig.IS_ALIVE_REQUEST_INTERVAL;

	var timerId = null; 
	
	var isAliveState = false; 
	
	var connectivityController = null;
	var translator = new WICI.Translate($.i18n, WICI.AppConfig.LanguageEnum);
	translator.init();
	connectivityController = new WICI.ConnectivityController(new WICI.ConnectionStatus(), null, translator, WICI.AppConfig.ConnectivityConfig);
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
		console.log(logPrefix + sMethod);
		
		if(getServiceState() !== serviceStateEnum.unknown &&
				getServiceState() !== serviceStateEnum.stopped){
			console.log(logPrefix + sMethod + "WARNING!!! service is in progress!!! Stop it before restarting!");
			return;
		}
		
		setServiceState(serviceStateEnum.unknown);
		
		doTimeoutRequest(0); 
	};
	//---------------------------------------------------------------------------------------	 
	this.stop = function() {
		var sMethod = 'stop() ';
		console.log(logPrefix + sMethod + "timerId: "+timerId);
		
		setServiceState(serviceStateEnum.stopped);
		
		clearTimeout(timerId);
		
	};
	//---------------------------------------------------------------------------------------
	this.isAlive = function() {
		var sMethod = 'isAlive() ';
		console.log(logPrefix + sMethod +" isAliveState:"+ isAliveState + " service state: "+ getServiceState());
		
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
		console.log(logPrefix + sMethod);
		
		serviceState = state;
	};
	//---------------------------------------------------------------------------------------
	var doTimeoutRequest = function(intervalArg){
		var sMethod = 'doTimeoutRequest() ';
		//console.log(logPrefix + sMethod);
		
		if(getServiceState() === serviceStateEnum.stopped){
			//no need to send another request
			console.log(logPrefix + sMethod + " service is stopped so we cannot send next request!");
			return;
		}
		
		if(typeof intervalArg === "undefined"){
			intervalArg = getInterval();
		}
		
		console.log(logPrefix + sMethod+ " request will be send in (ms): "+intervalArg+ " isAlive: " + isAlive());
		timerId = setTimeout(sendRequest, intervalArg);
	};
	//---------------------------------------------------------------------------------------
	var sendRequest = function(){
		var sMethod = 'sendRequest() ';
		console.log(logPrefix + sMethod);
		setServiceState(serviceStateEnum.sending);
		
		setServiceState(serviceStateEnum.waitResponse);
		connectivityController.isAlive(requestSuccess, requestFailed, true);
	};
	//---------------------------------------------------------------------------------------
	var requestSuccess = function(){
		var sMethod = 'requestSuccess() ';
		console.log(logPrefix + sMethod);
		
		setServiceState(serviceStateEnum.haveResponse);
		isAliveState = true;
		doTimeoutRequest();
	};
	//---------------------------------------------------------------------------------------
	var requestFailed = function(){
		var sMethod = 'requestFailed() ';
		console.log(logPrefix + sMethod + " WARNING! IsAlive request failed!!!");
		
		setServiceState(serviceStateEnum.haveResponse);
		isAliveState = false;
		doTimeoutRequest();
	};

};