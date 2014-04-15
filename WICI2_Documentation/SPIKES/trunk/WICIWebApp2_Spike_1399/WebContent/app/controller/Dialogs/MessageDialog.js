ensureNamespaceExists();

WICI.MessageDialog = function(translate){
	var dialogQueue = new WICI.DialogQueue();
	
	this.error = error;
	this.info = info;
	this.confirm = confirm;
	this.htmlConfirm = htmlConfirm;
	this.settings = settings;
	this.printerSetup = printerSetup;
	this.barcode = barcode;
	
	function error(message, title, callback, uiDecoration, dialogTemplateOverride){
		console.log("MessageDialog.error: message=" + message);
		var parsedMessageArray = parseMessage(message);
		var dialog = new WICI.OkDialog(parsedMessageArray,
				buildTitle(title, "errorDialog_defaultTitle"),
				translate.translateKey("messageDialog_ok"),
				buildCallback(callback),
				uiDecoration,
				determineDialogTemplate(dialogTemplateOverride));
		dialogQueue.enqueue(dialog);
	}
	
	function info(message, title, callback, uiDecoration, dialogTemplateOverride){
		var parsedMessageArray = parseMessage(message);
		var dialog = new WICI.OkDialog(
				parsedMessageArray,
				buildTitle(title, "infoDialog_defaultTitle"),
				translate.translateKey("messageDialog_ok"),
				buildCallback(callback),
				uiDecoration,
				determineDialogTemplate(dialogTemplateOverride));
		dialogQueue.enqueue(dialog);
	}
	
	function confirm(message, yesCallback, noCallback, title, yesButton, noButton) {
		var dialog = new WICI.ConfirmMessageDialog(message,
				buildCallback(yesCallback),
				buildCallback(noCallback),
				buildTitle(title, "confirmDialog_defaultTitle"),
				buildButton(yesButton, "confirmDialog_yes"),
				buildButton(noButton, "confirmDialog_no"));
		dialogQueue.enqueue(dialog);
	}

	function htmlConfirm(message, yesCallback, noCallback, title, yesButton, noButton) {
		var dialog = new WICI.HTMLConfirmMessageDialog(message,
				buildCallback(yesCallback),
				buildCallback(noCallback),
				buildTitle(title, "confirmDialog_defaultTitle"),
				buildButton(yesButton, "confirmDialog_yes"),
				buildButton(noButton, "confirmDialog_no"));
		dialogQueue.enqueue(dialog);
	}
	
	function settings(isAdminProfile, logOutCallback, chooseProductCallback, printerSetupCallback, testPrintCallback, toggleLanguageCallback, 
						title, logOutButton, chooseProductButton, printerSetupButton, testPrintButton, toggleLanguageButton, chancelButton) {
		var dialog = new WICI.SettingsDialog(translate, isAdminProfile,
		        buildCallback(logOutCallback),
				buildCallback(chooseProductCallback),
				buildCallback(printerSetupCallback),
				buildCallback(testPrintCallback),
				buildCallback(toggleLanguageCallback),
				buildTitle(title, "settings_defaultTitle"),
				buildButton(logOutButton, "settings_logOutButton"),
				buildButton(chooseProductButton, "settings_chooseProductButton"),
				buildButton(printerSetupButton, "settings_printerSetupButton"),
				buildButton(testPrintButton, "settings_testPrintButton"),
				buildButton(toggleLanguageButton, ""),
				buildButton(chancelButton, "settings_chancelButton")
				);
		dialogQueue.enqueue(dialog);
	}
	
	function printerSetup (lastMacAddress, yesCallback, noCallback, title, yesButton, noButton) {	    
        var dialog = new WICI.PrinterSetupDialog(
                lastMacAddress,
                buildTitle(title, "printerSetupDialog_defaultTitle"),
                buildCallback(yesCallback),
                buildCallback(noCallback),                
                buildButton(yesButton, "printerSetupDialog_yes"),
                buildButton(noButton, "printerSetupDialog_no"));
        dialogQueue.enqueue(dialog);
	}
	
	function screen(message, yesCallback, noCallback, title, yesButton, noButton) {
		var dialog = new WICI.ScreenDialog(message,
				buildCallback(yesCallback),
				buildCallback(noCallback),
				buildTitle(title, "screenDialog_defaultTitle"),
				buildButton(yesButton, "confirmDialog_yes"),
				buildButton(noButton, "confirmDialog_no"));
		dialogQueue.enqueue(dialog);
	}
	
	function barcode(message, title, callback, uiDecoration, barcodeBitmap){
		var parsedMessageArray = parseMessage(message);
		var dialog = new WICI.BarcodeDialog(
				parsedMessageArray,
				buildTitle(title, "infoDialog_defaultTitle"),
				translate.translateKey("messageDialog_ok"),
				buildCallback(callback),
				uiDecoration,
				"barcodeDialog-template", 
				barcodeBitmap);
		dialogQueue.enqueue(dialog);
	}
	
	function buildTitle(title, defaultTitleTranslationKey){
		return title || translate.translateKey(defaultTitleTranslationKey);
	}
	
	function buildButton(button, defaultButtonTranslationKey){
		return button || translate.translateKey(defaultButtonTranslationKey);
	}
	
	function buildCallback(callback){
		return callback || $.noop;
	}
	
	function determineDialogTemplate(dialogTemplateOverride){
		return dialogTemplateOverride || "messageDialog-template";
	}
	
	function parseMessage(message) {
		if(!message){
			return [];
		} 
		if(typeof message !== "string") {
			return message;
		}
		return message.trim().split("\n");
	}
};