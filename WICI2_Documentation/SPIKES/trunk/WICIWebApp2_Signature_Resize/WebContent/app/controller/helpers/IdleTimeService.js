ensureNamespaceExists();


WICI.IdleTimeService = function(document) {
	var logPrefix = '[WICI.IdleTimeService]::';
	
	var idleTime = 0; 			
	var idleIncrement = WICI.AppConfig.BackgroundServicesConfig.IDLE_INCREMENT;
	var idleIntervalId = null;	
	
	var serviceStateEnum = {
			working			: "working",
			stopped			: "stopped"
		};
	//---------------------------------------------------------------------------------------
	this.setIdleIncrement = function(value) {
		idleIncrement = value;
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
		
		idleTime = 0;
		setServiceState(serviceStateEnum.stopped);
		
		clearInterval(idleIntervalId);
	};
	//---------------------------------------------------------------------------------------
	function timerIncrement() {
		var sMethod = 'timerIncrement()' + " idleTime: "+idleTime;
		console.log(logPrefix + sMethod);
		
		idleTime = idleTime + 1;
	}
	//---------------------------------------------------------------------------------------
	this.start = function() {
		var sMethod = 'start() ';
		console.log(logPrefix + sMethod);
		
		if(getServiceState() !== serviceStateEnum.stopped){
			console.log(logPrefix + sMethod + "WARNING!!! service is in progress!!! Stop it before restarting!");
			return;
		}
		
		init();
		
		idleIntervalId = setInterval(timerIncrement, idleIncrement); 
		setServiceState(serviceStateEnum.working);
	};
	//---------------------------------------------------------------------------------------	 
	this.stop = function() {
		var sMethod = 'stop() ';
		console.log(logPrefix + sMethod + "idleIntervalId: "+idleIntervalId);
		
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
		
		return idleTime;
	};
	//---------------------------------------------------------------------------------------
	var subscribeToUserEvents = function() {
		var sMethod = 'subscribeToUserEvents() ';
		console.log(logPrefix + sMethod);
		
		if(!document || !document.mousemove){
			console.log(logPrefix + sMethod + " WARNING: 'document' is null or have no mousemove event!");
			return;
		}
		
		//Zero the idle timer on mouse movement.
		document.mousemove(function (e) {
			var sMethod = 'mousemove()';
			//console.log(logPrefix + sMethod);
			
			if(getServiceState() === serviceStateEnum.stopped){
				return;
			}
			
	        idleTime = 0;
	    });

		if(!document.keypress){
			console.log(logPrefix + sMethod + " WARNING: 'document' have no keypress event!");
			return;
		}

		document.keypress(function (e) {
			var sMethod = 'keypress()';
			//console.log(logPrefix + sMethod);

			if(getServiceState() === serviceStateEnum.stopped){
				return;
			}

	        idleTime = 0;
	    });
	};
	//---------------------------------------------------------------------------------------
	init();
	subscribeToUserEvents();
	//---------------------------------------------------------------------------------------
};