ensureNamespaceExists();

WICI.PollingController = function( argConnectivityController, argServiceName, argRequestParams, argSuccessCallback, argFailureCallback) {
	var logPrefix = '[WICI.PollingController]::';
	var timeout = "";
	var startTime = new Date();
	var elapsed = 0;

	function startPolling() {
		var sMethod = "startPolling";
		console.log(logPrefix+sMethod);
		startTime = new Date();
		elapsed = 0;
		doPollWait();
	};
	this.startPolling = startPolling;

	function doPollWait(){
		var sMethod = "doPollWait";
		console.log(logPrefix+sMethod);
		timeout = setTimeout(poll, WICI.AppConfig.PollingConfig.POLL_DELAY);
	};

	function poll(){
		var sMethod = "poll";
		console.log(logPrefix+sMethod);
		elapsed = new Date() - startTime;

		console.log("elapsed time=" + elapsed);

		if(elapsed <= WICI.AppConfig.PollingConfig.POLL_MAXTIME)
		{
			console.log("polling...");
			argConnectivityController.poll(argServiceName, argRequestParams, responseReceived, responseFailed, doPollWait);
		}
		else
		{
			stopPolling();
		}
	}

	function responseReceived( argResponse ){
		var sMethod = "responseReceived";
		console.log(logPrefix+sMethod);
		console.log( "responseReceived:" + argResponse);
		if( argResponse==="" || argResponse===null )
			doPollWait();
		else{
			if( argResponse && !argResponse.error ){
				console.log("---attempting to purge request");
	            var purgeRequestParams = {
	                   	transactionID	:	argRequestParams.transactionID,
	                   	action			:	"purge"
	            };
				argConnectivityController.poll(WICI.ServiceNameEnum.PollAccountApplicationResponse, purgeRequestParams, $.noop, $.noop, $.noop);
				argSuccessCallback(argResponse);
			}else if (argResponse && argResponse.error){
				stopPolling();
				//argFailureCallback(argResponse);
			}
		}
	}

	function responseFailed( argResponse ){
		var sMethod = "responseFailed";
		console.log(logPrefix+sMethod);
		if( argResponse )
			console.log( "responseFailed:" + argResponse);
		stopPolling();
		argFailureCallback(argResponse);
	}

	function stopPolling(){
		var sMethod = "stopPolling";
		console.log(logPrefix+sMethod);
		clearTimeout(timeout);
		argFailureCallback();
	};
	this.stopPolling = stopPolling;

	function immediatePoll(){
		var sMethod = "immediatePoll";
		console.log(logPrefix+sMethod);
		stopPolling();
		poll();
	};
	this.immediatePoll = immediatePoll;
};