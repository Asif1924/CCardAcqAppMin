ensureNamespaceExists();


WICI.IdleTimeService = function(document) {
	var logPrefix = '[WICI.IdleTimeService]::';
	
	var idleTime = new Date().getTime();
	
	var serviceStateEnum = {
			working			: "working",
			stopped			: "stopped"
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
		
		idleTime = new Date().getTime();
		setServiceState(serviceStateEnum.stopped);
	};
	//---------------------------------------------------------------------------------------
	this.start = function() {
		var sMethod = 'start() ';
		console.log(logPrefix + sMethod);
		
		if(getServiceState() !== serviceStateEnum.stopped){
			console.log(logPrefix + sMethod + "WARNING!!! service is in progress!!! Stop it before restarting!");
			return;
		}
		
		init();
		
		setServiceState(serviceStateEnum.working);
	};
	//---------------------------------------------------------------------------------------	 
	this.stop = function() {
		var sMethod = 'stop() ';
		console.log(logPrefix + sMethod);
		
		init();
	};
	//---------------------------------------------------------------------------------------
	this.getIdleTime = function() {
		var sMethod = 'getIdleTime() ';
		console.log(logPrefix + sMethod + "idleTime: "+idleTime  +" service state: "+ getServiceState());
		
		if(getServiceState() === serviceStateEnum.stopped){
			console.log(logPrefix + sMethod + "WARNING!!! service is not started!");
			return 0;
		}
		
		return (new Date().getTime() - idleTime) / 60000;
	};
	//---------------------------------------------------------------------------------------
	var subscribeToUserEvents = function() {
		var sMethod = 'subscribeToUserEvents() ';
		console.log(logPrefix + sMethod);
		
        document.on('blur change click contextmenu focusin focusout hashchange keydown mousedown scroll select touchstart touchend touchcancel touchleave', function (e) {
			if(getServiceState() === serviceStateEnum.stopped){
				return;
			}
	        idleTime = new Date().getTime();
	    });
	};
	//---------------------------------------------------------------------------------------
	init();
	subscribeToUserEvents();
	//---------------------------------------------------------------------------------------
};