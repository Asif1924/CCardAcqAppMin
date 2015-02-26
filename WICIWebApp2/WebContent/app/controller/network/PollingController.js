ensureNamespaceExists();

WICI.PollingController = function( argConnectivityController, argRequestParams, argSuccessCallback, argFailureCallback) {
	var logPrefix = '[WICI.PollingController]::';
	var timeout = "";
	var startTime = new Date();
	var elapsed = 0;
	var respAn = new WICI.PollingResponseAnalyzer();

	function startPolling() {
		var sMethod = "startPolling";
		console.log(logPrefix+sMethod);
		startTime = new Date();
		elapsed = 0;
		doPollWait();
	};
	this.startPolling = startPolling;

	function doPollWait() {
		var sMethod = "doPollWait";
		console.log(logPrefix+sMethod);
		timeout = setTimeout(poll, WICI.AppConfig.PollingConfig.POLL_DELAY);
	};

	function poll() {
		var sMethod = "poll";
		console.log(logPrefix+sMethod);
		elapsed = new Date() - startTime;

		console.log("elapsed time=" + elapsed);

		if (elapsed <= WICI.AppConfig.PollingConfig.POLL_MAXTIME) {
			console.log("polling...");
			argConnectivityController.poll(argRequestParams, responseReceived, responseFailed, doPollWait);
		} else {
			stopPolling();
		}
	}

	function responseReceived(argResponse) {
		var sMethod = "responseReceived";
		console.log( logPrefix+sMethod );		
		if( responseIsNullOrEmpty(argResponse) || responseExistsNoErrorButNotSufficient(argResponse)  ){
			doPollWait();
		}			
		else{
			if( responseExistsNotEmptyHasDataAndDataHasAppStatusThatIsValid(argResponse) ){
				console.log( logPrefix+sMethod + " Application Status:" + respAn.getAppStatus(argResponse));
				argSuccessCallback(argResponse);
			} else if (responseExistsAndHasError(argResponse)) {
				stopPolling(respAn.getData(argResponse));
			}
		}
	}

	function responseExistsAndHasError( argResponse ){
		return respAn.isErrorResponse(argResponse);
	}
	
	function responseExistsNotEmptyHasDataAndDataHasAppStatusThatIsValid( argResponse ){
		return respAn.isValidResponse(argResponse);
	}
	
	function responseIsNullOrEmpty( argResponse ){
		return respAn.isBadResponse(argResponse);
	}
	
	function responseExistsNoErrorButNotSufficient( argResponse ){
		return respAn.isIndeterminableResponse(argResponse);
	}
	
	function responseFailed(argResponse){
		var sMethod = "responseFailed";
		console.log(logPrefix + sMethod);
		if( argResponse )
			console.log( "responseFailed:" + argResponse);
		stopPolling(argResponse);
	}

	function stopPolling(argResponse){
		var sMethod = "stopPolling";
		console.log(logPrefix+sMethod);
		clearTimeout(timeout);
		argFailureCallback(argResponse);
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