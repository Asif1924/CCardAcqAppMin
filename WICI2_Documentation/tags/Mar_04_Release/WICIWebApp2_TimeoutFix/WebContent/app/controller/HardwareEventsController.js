ensureNamespaceExists();

WICI.HardwareEventsController = function( argTranslator, argMessageDialog) {
    var isPromptToExitDlgShown = false;
    
	function trapBackButton() {
		console.log("HardwareEventsController.trapBackButton");
		document.addEventListener("deviceready", bindBackButton, false);
	}
	this.trapBackButton = trapBackButton;

	function bindBackButton() {
		console.log("HardwareEventsController.bindBackButton");
		document.addEventListener("backbutton", promptToExit, false);
		$(window).unload(restoreDefaultBackButton);
	}

	function restoreDefaultBackButton() {
		console.log("HardwareEventsController.restoreDefaultBackButton");
		try {
			navigator.app.overrideBackbutton(false);
		}
		catch (ex) {
			console.log(ex);
		}
	}

	function promptToExit(event) {
		console.log("HardwareEventsController.promptToExit");
		event.preventDefault();
		
		if (isPromptToExitDlgShown) {
		    return;
		}	
		
		isPromptToExitDlgShown = true;
		
		(new WICI.DialogCloseHelper()).closeAllDialogs();
		
		argMessageDialog.htmlConfirm(argTranslator.translateKey("backButtonPrompt_message"), quitApplication, promptToExitCancel, 
									argTranslator.translateKey("backButtonPrompt_title"));
	}	
	
	function quitApplication() {
	    isPromptToExitDlgShown = false;
		navigator.app.exitApp();		
	}
	
	function promptToExitCancel() {
        isPromptToExitDlgShown = false;                
    }
};