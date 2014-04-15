ensureNamespaceExists();

WICI.ConnectivityControllerErrors = function(messageDialog, translate, isSilent) {
	if (isSilent === undefined)
		isSilent = false;

	function hideLoadingScreen() {
		WICI.AppNavigatorController.hideLoadingScreen();
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