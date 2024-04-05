ensureNamespaceExists();

GENERICWEBAPP.ConnectivityControllerErrors = function(messageDialog, translate, isSilent) {
	var logPrefix = '[GENERICWEBAPP.ConnectivityControllerErrors]::';
	
	if (isSilent === undefined){
		isSilent = false;
	}
	
	if(!messageDialog){
		console.log(logPrefix + 'WARNING!!!!!!!!! the [messageDialog] is null or not specified!');
		messageDialog = {};
		messageDialog.error = function(){};
	}

	function hideLoadingScreenAndShowUnableToConnectError( argCaller ) {
		$("#requestFailed").addClass('show');
	}
	this.hideLoadingScreenAndShowUnableToConnectError = hideLoadingScreenAndShowUnableToConnectError;

};