ensureNamespaceExists();


WICI.IdleTimeService = function(document) {
	var logPrefix = '[WICI.IdleTimeService]::';
	
	var idleTime = new Date().getTime();
    var justAbandoned = false;

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
		//console.log(logPrefix + sMethod + "idleTime: "+idleTime  +" service state: "+ getServiceState());
		
		if(getServiceState() === serviceStateEnum.stopped){
			console.log(logPrefix + sMethod + "WARNING!!! service is not started!");
			return 0;
		}

		var currentTime = new Date().getTime();
        //console.log("currentTime = " + currentTime + "; idleTime = " + idleTime + "; diff = " + (currentTime - idleTime) + "; in minutes = " + ((currentTime - idleTime) / 60000));

        return (currentTime - idleTime) / 60000;
	};
	//---------------------------------------------------------------------------------------
	this.setAbandoned = function() {
		var sMethod = 'setAbandoned() ';
		console.log(logPrefix + sMethod + "idleTime: "+idleTime  +" service state: "+ getServiceState());

		if(getServiceState() === serviceStateEnum.stopped){
			console.log(logPrefix + sMethod + "WARNING!!! service is not started!");
			return 0;
		}

        justAbandoned = true;
	};
	//---------------------------------------------------------------------------------------
	var subscribeToUserEvents = function() {
		var sMethod = 'subscribeToUserEvents() ';
		console.log(logPrefix + sMethod);

        document.on('mousemove keydown touchstart touchend', function (e) {
            if(getServiceState() === serviceStateEnum.stopped){
				return;
			}

            if(!justAbandoned) {
                idleTime = new Date().getTime();
            }
            justAbandoned = false;
	    });
	};
    //---------------------------------------------------------------------------------------
	init();
	subscribeToUserEvents();
	//---------------------------------------------------------------------------------------
};