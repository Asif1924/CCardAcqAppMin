ensureNamespaceExists();

BRB.ConnectivityControllerErrors = function(messageDialog, translate, isSilent) {
	var logPrefix = '[BRB.ConnectivityControllerErrors]::';
	
	if (isSilent === undefined){
		isSilent = false;
	}
	
	if(!messageDialog){
		BRB.Log(logPrefix + 'WARNING!!!!!!!!! the [messageDialog] is null or not specified!');
		messageDialog = {};
		messageDialog.error = function(){};
	}
	

	function hideLoadingScreen() {
		var sMethod = 'hideLoadingScreen() ';
		BRB.Log(logPrefix + sMethod);
		
		try {
			BRB.AppNavigatorController.hideLoadingScreen();
		} catch (e) {
			BRB.Log(logPrefix + sMethod+' Exception: '+e);
		}
	}

	function hideLoadingScreenAndShowNetworkDownError() {
		//BRB.Log("ConnectivityControllerErrors.hideLoadingScreenAndShowNetworkDownError");
		if (!isSilent) {
			hideLoadingScreen();
			messageDialog.error(translate.translateKey("connectionError_networkDown"));
		}
	}
	this.hideLoadingScreenAndShowNetworkDownError = hideLoadingScreenAndShowNetworkDownError;

	function hideLoadingScreenAndShowUnableToConnectError( argCaller ) {
		//BRB.Log("ConnectivityControllerErrors.hideLoadingScreenAndShowUnableToConnectError(" + argCaller + ")");
		if (!isSilent) {
			if (argCaller)	// note temp argument for debug-tracking
				argCaller = argCaller + ": ";
			else
				argCaller = "";
			hideLoadingScreen();
			messageDialog.error( argCaller + translate.translateKey("connectionError_unableToConnect"));
		}
	}
	this.hideLoadingScreenAndShowUnableToConnectError = hideLoadingScreenAndShowUnableToConnectError;

};