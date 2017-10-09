ensureNamespaceExists();

BRB.MaxTimeoutHelper = function(serviceName) {
	var logPrefix = '[BRB.MaxTimeoutHelper:: ' + serviceName + ' ]::';
	
	// var serviceName = serviceName;
	var actionMethod = null;	
	var checkInterval; 
	var checkIntervalId = null;
	
	var serviceStateEnum = {
			working			: "working",
			stopped			: "stopped"
		};
	var serviceState = serviceStateEnum.stopped;	
	//---------------------------------------------------------------------------------------
	this.setCheckInterval = function(value) {				
		if (value) {
			checkInterval = value * 1000 * 60;
		}
		else {
			checkInterval = 1000 * 60;
		}			
	};
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
	var init = function(){
		var sMethod = 'init()';
		BRB.Log(logPrefix + sMethod);
		
		setServiceState(serviceStateEnum.stopped);
		
		clearInterval(checkIntervalId);
	};
	//---------------------------------------------------------------------------------------
	function checkIntervalMethod() {
		var sMethod = 'checkIntervalMethod()';
		BRB.Log(logPrefix + sMethod);		
		
		if(actionMethod){
			actionMethod();		
		}
	}
	//---------------------------------------------------------------------------------------
	this.start = function() {
		var sMethod = 'start() ';
		BRB.Log(logPrefix + sMethod);		
	
		if(!actionMethod){
			BRB.Log(logPrefix + sMethod + "WARNING!!! [actionMethod] is null!!!");
			return false;
		}
		
		if(getServiceState() !== serviceStateEnum.stopped){
			BRB.Log(logPrefix + sMethod + "WARNING!!! service is in progress!!! Stop it before restarting!");
			return false;
		}	
		
		if(!checkInterval && _IsEmpty(checkInterval)){
			BRB.Log(logPrefix + sMethod + "WARNING!!! [checkInterval] is not define!!!");
			return false;
		}
		
		init();

		checkIntervalId = setInterval(checkIntervalMethod, checkInterval); 
		setServiceState(serviceStateEnum.working);
		
		return true;
	};	
	//---------------------------------------------------------------------------------------	 
	this.stop = function() {
		var sMethod = 'stop() ';
		BRB.Log(logPrefix + sMethod);
		
		init();
	};
	//---------------------------------------------------------------------------------------
	this.setActionMethod = function(methodRef){
		var sMethod = 'setActionMethod()';
		BRB.Log(logPrefix + sMethod);
		
		if(typeof methodRef !== "function"){
			BRB.Log(logPrefix + sMethod + "WARNING!!! [methodRef] is null!!!");
			return false;
		}
		
		actionMethod = methodRef;
		return true;
	};
	//---------------------------------------------------------------------------------------
};