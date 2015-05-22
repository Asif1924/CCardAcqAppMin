ensureNamespaceExists();

WICI.PollingController = function( argConnectivityController, argRequestParams, argSuccessCallback, argFailureCallback, argPendingPageType, argPollTriggerCallback, argPollingConfig ) {
	var logPrefix = '[WICI.PollingController]::';
	var timeout = "";
	var startTime = new Date();
	var elapsed = 0;
	var respAn = new WICI.PollingResponseAnalyzer();
	var pendingPageType=argPendingPageType;

	var delay = 0;
	var maxTime = 0;
	
	function startPolling() {
		var sMethod = "startPolling";
		console.log(logPrefix+sMethod);
		
		delay = WICI.AppConfig.PollingConfig.POLL_DELAY;
		maxTime = WICI.AppConfig.PollingConfig.POLL_MAXTIME;
		if( argPollingConfig ){
			delay = argPollingConfig.pollDelay;
			maxTime = argPollingConfig.pollMaxTime;
		}
			
		console.log(logPrefix+sMethod + " delay=" + delay);
		console.log(logPrefix+sMethod + " maxTime=" + maxTime);
		
		startTime = new Date();
		elapsed = 0;
		doPollWait();
	};
	this.startPolling = startPolling;

	function doPollWait() {
		var sMethod = "doPollWait";
		console.log(logPrefix+sMethod);

		timeout = setTimeout(poll, delay );
	};
	
	// US3436 Single Poll - start	
	this.singlePoll = singlePoll;
	
	function singlePoll() {
		var sMethod = "singlePoll";
		console.log(logPrefix+sMethod);			
		console.log("polling...");
		argConnectivityController.poll(argRequestParams, singlePollResponseReceived, responseFailed, doPollWait);		
	}
	// US3436 Single Poll - end
	
	function poll() {
		var sMethod = "poll";
		console.log(logPrefix+sMethod);
		elapsed = new Date() - startTime;

		console.log("elapsed time=" + elapsed);

		if (elapsed <= maxTime) {
			console.log("polling...");
			argConnectivityController.poll(argRequestParams, responseReceived, responseFailed, doPollWait);
		} else {
			stopPolling();
		}
	}
	
	function pendFeatureEnabled(){
		return !(WICI.AppConfig.PendingFeature.TreatPendsLikeDeclines);  
	}
	
	// US3436 Single Poll - start
	function singlePollResponseReceived(argResponse) {
		var sMethod = "singlePollResponseReceived";
		console.log( logPrefix+sMethod );
		
		if( responseCanBeRetrieved(argResponse) ){
			console.log( logPrefix+sMethod+"  response can be retrieved..." );
							
				console.log( logPrefix+sMethod+"  pendingPageType=" + pendingPageType );
				if( pendingPageType === "RETRIEVEPEND" )
				{
					if( (responseExistsNotEmptyHasDataAndDataHasAppStatusThatIsValid(argResponse) && responseIsApprovedOrDeclined(argResponse)) ||  responseIsPending(argResponse) ) 
					{
						argSuccessCallback(argResponse);
					} else {
						argFailureCallback(argResponse);
					}				
				}								
		}		
		else{
			console.log( logPrefix+sMethod+"  response cannot be retrieved..." );
			//stopPolling(respAn.getData(argResponse));
			stopPolling(argResponse);
		}
	}
	// US3436 Single Poll - end

	function responseReceived(argResponse) {
		var sMethod = "responseReceived";
		console.log( logPrefix+sMethod );
		console.log( logPrefix+sMethod+"  pendFeatureEnabled()=" + pendFeatureEnabled() );
		if( responseCanBeRetrieved(argResponse) ){
			console.log( logPrefix+sMethod+"  response can be retrieved..." );
			if( !pendFeatureEnabled() )
			{ 
				
				if( responseIsNullOrEmpty(argResponse) || responseExistsNoErrorButNotSufficient(argResponse) )
				{
					console.log( logPrefix+sMethod+"  continue polling...");
					doPollWait();
				}
				else if( responseExistsNotEmptyHasDataAndDataHasAppStatusThatIsValid(argResponse) ) 
				{
					console.log( logPrefix+sMethod + " Application Status:" + respAn.getAppStatus(argResponse));					
					//argSuccessCallback(argResponse);
				} 
				else if (responseExistsAndHasError(argResponse)) 
				{
					console.log( logPrefix+sMethod+"  error in response...");
					stopPolling(respAn.getData(argResponse));			
				}			
			}
			else if ( pendFeatureEnabled() )
			{
				
				console.log( logPrefix+sMethod+"  pendingPageType=" + pendingPageType );
				if( pendingPageType==="INSESSION" )
				{
					if ( responseExistsNoErrorButNotSufficient(argResponse) )
					{
						//argPollResponseReceivedCallback(argResponse);
						argPollTriggerCallback(argResponse);
						doPollWait();
					}
					else if( responseExistsNotEmptyHasDataAndDataHasAppStatusThatIsValid(argResponse) ) 
					{
						argSuccessCallback(argResponse);
					}
					else if (responseExistsAndHasError(argResponse)) 
					{
						stopPolling(respAn.getData(argResponse));			
					}				
				}			
				else if( pendingPageType==="RETRIEVEPEND" )
				{
					if ( responseIsPending(argResponse) )
					{
						argPollTriggerCallback(argResponse);
						doPollWait();
					}
					else if ( responseExistsNoErrorButNotSufficient(argResponse) ) 
					{
						stopPolling(respAn.getData(argResponse));
					}
					else if( responseExistsNotEmptyHasDataAndDataHasAppStatusThatIsValid(argResponse) && responseIsApprovedOrDeclined(argResponse) ) 
					{
						argSuccessCallback(argResponse);
					}				
				}			
			}			
		}
		else if (responseIsNullOrEmpty(argResponse) || responseExistsNoErrorButNotSufficient(argResponse))
		{
			doPollWait();
		}
		else{
			console.log( logPrefix+sMethod+"  response cannot be retrieved..." );
			//stopPolling(respAn.getData(argResponse));
			stopPolling(argResponse);
		}


	}

	function responseCanBeRetrieved( argResponse ){
		return respAn.isWithinRetrievalThreshold(argResponse);
	}
	
	function responseIsApprovedAndAlreadyRetrievedOnce( argResponse ){
		return respAn.isApprovedResponse(argResponse) && respAn.getRetrievalCount(argResponse)!==null && respAn.getRetrievalCount(argResponse)==="1";
	}
	
	function responseIsApprovedOrDeclined( argResponse ){
		return respAn.isApprovedResponse(argResponse) || respAn.isDeclinedResponse(argResponse);
	}
	
	function responseIsPending( argResponse ){
		return respAn.isPendingResponse(argResponse);
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
	
	//UAT Defects #44 – Polling issue (critical) 
	function destroyPolling(){
		var sMethod = "destroyPolling";
		console.log(logPrefix+sMethod);
		clearTimeout(timeout);
	};
	this.destroyPolling = destroyPolling;
	

	function immediatePoll(){
		var sMethod = "immediatePoll";
		console.log(logPrefix+sMethod);
		stopPolling();
		poll();
	};
	this.immediatePoll = immediatePoll;
};