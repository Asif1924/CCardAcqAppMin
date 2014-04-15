ensureNamespaceExists();

WICI.TriggerActionService = function(serviceName) {
	var logPrefix = '[WICI.TriggerActionService:: '+serviceName+' ]::';
	
	var triggerMethod = null;	//function(){console.log(logPrefix+" trigger method is undefined!"); return false;};
	var actionMethod = null;	//function(){console.log(logPrefix+" action method is undefined!");};
	
	var checkInterval = WICI.AppConfig.BackgroundServicesConfig.TRIGGER_ACTION_SERVICE_UPDATE;
	var checkIntervalId = null;
	
	var serviceStateEnum = {
			working			: "working",
			stopped			: "stopped"
		};
	var serviceState = serviceStateEnum.stopped;
	//---------------------------------------------------------------------------------------
	this.setCheckInterval = function(value) {
		checkInterval = value;
	};
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
	var init = function(){
		var sMethod = 'init()';
		console.log(logPrefix + sMethod);
		
		setServiceState(serviceStateEnum.stopped);
		
		clearInterval(checkIntervalId);
	};
	//---------------------------------------------------------------------------------------
	function checkIntervalMethod() {
		var sMethod = 'checkIntervalMethod()';
		console.log(logPrefix + sMethod);
		
		if(triggerMethod && actionMethod && triggerMethod()){
			actionMethod();
			
			stop();
		}
	}
	//---------------------------------------------------------------------------------------
	this.start = function() {
		var sMethod = 'start() ';
		console.log(logPrefix + sMethod);
		
		if(!triggerMethod){
			console.log(logPrefix + sMethod + "WARNING!!! [triggerMethod] is null!!!");
			return false;
		}
		if(!actionMethod){
			console.log(logPrefix + sMethod + "WARNING!!! [actionMethod] is null!!!");
			return false;
		}
		
		if(getServiceState() !== serviceStateEnum.stopped){
			console.log(logPrefix + sMethod + "WARNING!!! service is in progress!!! Stop it before restarting!");
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
		console.log(logPrefix + sMethod);
		
		init();
	};
	var stop = this.stop;
	//---------------------------------------------------------------------------------------
	this.setTriggerMethod = function(methodRef){
		var sMethod = 'setTriggerMethod()';
		console.log(logPrefix + sMethod);
		
		if(typeof methodRef !== "function"){
			console.log(logPrefix + sMethod + "WARNING!!! [methodRef] is null!!!");
			return false;
		}
		
		triggerMethod = methodRef;
		return true;
	};
	//---------------------------------------------------------------------------------------
	this.setActionMethod = function(methodRef){
		var sMethod = 'setActionMethod()';
		console.log(logPrefix + sMethod);
		
		if(typeof methodRef !== "function"){
			console.log(logPrefix + sMethod + "WARNING!!! [methodRef] is null!!!");
			return false;
		}
		
		actionMethod = methodRef;
		return true;
	};
	//---------------------------------------------------------------------------------------
	init();
};