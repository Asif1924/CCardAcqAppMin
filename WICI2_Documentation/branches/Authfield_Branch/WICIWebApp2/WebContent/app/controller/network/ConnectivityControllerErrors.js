ensureNamespaceExists();

WICI.ConnectivityControllerErrors = function(messageDialog, translate, isSilent) {
	var logPrefix = '[WICI.ConnectivityControllerErrors]::';
	
	if (isSilent === undefined){
		isSilent = false;
	}
	
	if(!messageDialog){
		console.log(logPrefix + 'WARNING!!!!!!!!! the [messageDialog] is null or not specified!');
		messageDialog = {};
		messageDialog.error = function(){};
	}
	

	function hideLoadingScreen() {
		var sMethod = 'hideLoadingScreen() ';
		console.log(logPrefix + sMethod);
		
		try {
			WICI.AppNavigatorController.hideLoadingScreen();
		} catch (e) {
			console.log(logPrefix + sMethod+' Exception: '+e);
		}
	}

	function hideLoadingScreenAndShowNetworkDownError() {
		//console.log("ConnectivityControllerErrors.hideLoadingScreenAndShowNetworkDownError");
		if (!isSilent) {
			hideLoadingScreen();
			messageDialog.error(translate.translateKey("connectionError_networkDown"));
		}
	}
	this.hideLoadingScreenAndShowNetworkDownError = hideLoadingScreenAndShowNetworkDownError;

	function hideLoadingScreenAndShowUnableToConnectError( argCaller ) {
		//console.log("ConnectivityControllerErrors.hideLoadingScreenAndShowUnableToConnectError(" + argCaller + ")");
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