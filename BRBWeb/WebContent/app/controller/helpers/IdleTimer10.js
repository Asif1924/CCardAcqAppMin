ensureNamespaceExists();


BRB.IdleTimeService = function(document,callback,timeoutWarningCallback) {
	var logPrefix = '[BRB.IdleTimeService]::';
	
	var idleTime = 0; 			
	var idleIncrement = BRB.AppConfig.BackgroundServicesConfig.IDLE_INCREMENT;
	var timeToFinishSession = BRB.AppConfig.BackgroundServicesConfig.TIME_TO_FINISH_APP_SESSION_IF_USER_INACTIVE;
	var timeToShowMessage = BRB.AppConfig.BackgroundServicesConfig.TIME_TO_SHOW_POPUP_MESSAGE_IF_USER_INACTIVE;
	var idleIntervalId = null;	
	var serviceStateEnum = {
			working			: "working",
			stopped			: "stopped"
		};
	var timeoutWarningFlag = false; 
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
		// var sMethod = 'setServiceState() setServiceState:' + state;
		serviceState = state;
	};
	//---------------------------------------------------------------------------------------
	var init = function(){
		// var sMethod = 'init()';
		idleTime = 0;
		setServiceState(serviceStateEnum.stopped);
		
		clearInterval(idleIntervalId);
	};
	//---------------------------------------------------------------------------------------
	function timerIncrement() {
		var sMethod = 'timerIncrement()' + " idleTime: "+idleTime;
		idleTime = idleTime + 1;
		// BRB.Log(logPrefix + sMethod + " idleTime " + idleTime + " : timeToShowMessage : " + timeToShowMessage);
		if(idleTime == timeToFinishSession && callback !== null){
			callback();
		}
		// US4653
		if(idleTime == timeToShowMessage && timeoutWarningCallback !== null && !timeoutWarningFlag){
			timeoutWarningFlag = true;
			timeoutWarningCallback();
		}
	}
	//---------------------------------------------------------------------------------------
	this.start = function() {
		var sMethod = 'start() ';
		if(getServiceState() !== serviceStateEnum.stopped){
			BRB.Log(logPrefix + sMethod + "WARNING!!! service is in progress!!! Stop it before restarting!");
			return;
		}
		
		init();
		
		idleIntervalId = this.setInterval(timerIncrement, idleIncrement); 
		setServiceState(serviceStateEnum.working);
	};
	this.setInterval = function(timerIncrement, idleIncrement){
		return setInterval(timerIncrement, idleIncrement);
	}; 
	//---------------------------------------------------------------------------------------	 
	this.stop = function() {
		// var sMethod = 'stop() ';
		init();
	};
	//---------------------------------------------------------------------------------------
	this.getIdleTime = function() {
		// var sMethod = 'getIdleTime() ';
		if(getServiceState() === serviceStateEnum.stopped){
			return 0;
		}
		
		return idleTime;
	};
	//---------------------------------------------------------------------------------------
	var subscribeToUserEvents = function() {
		// var sMethod = 'subscribeToUserEvents() ';
		if(!document || !document.mousemove){
			return;
		}
		//Zero the idle timer on mouse movement.
		document.mousemove(function (e) {
			// var sMethod = 'mousemove()';
			//BRB.Log.log(logPrefix + sMethod);
			
			if(getServiceState() === serviceStateEnum.stopped){
				return;
			}
			stopSelf();
			restartSelf();
	    });

		if(!document.keypress){
			return;
		}

		document.keypress(function (e) {
			// var sMethod = 'keypress()';
			if(getServiceState() === serviceStateEnum.stopped){
				return;
			}
			stopSelf();
			restartSelf();
	    });
	};
	var stopSelf = this.stop;
	var restartSelf = this.start;
	//---------------------------------------------------------------------------------------
	init();
	subscribeToUserEvents();
	//---------------------------------------------------------------------------------------
};