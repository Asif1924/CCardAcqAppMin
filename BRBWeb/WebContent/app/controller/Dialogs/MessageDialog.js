ensureNamespaceExists();

BRB.MessageDialog = function(translate){
	var dialogQueue = new BRB.DialogQueue();
	
	this.error = error;
	this.info = info;
	this.confirm = confirm;
	this.htmlReqirementEligibilityConfirm = htmlReqirementEligibilityConfirm;
	this.htmlConfirm = htmlConfirm;
	this.htmlCreditDisclosureInfo = htmlCreditDisclosureInfo;
	this.settings = settings;
	
	function error(message, title, callback, uiDecoration, dialogTemplateOverride){
		BRB.Log("MessageDialog.error: message=" + message);
		var parsedMessageArray = parseMessage(message);
		var dialog = new BRB.OkDialog(parsedMessageArray,
				buildTitle(title, "errorDialog_defaultTitle"),
				translate.translateKey("messageDialog_ok"),
				buildCallback(callback),
				uiDecoration,
				determineDialogTemplate(dialogTemplateOverride));
		dialogQueue.enqueue(dialog);
	}
	
	function info(message, title, callback, uiDecoration, dialogTemplateOverride){
		var parsedMessageArray = parseMessage(message);
		var dialog = new BRB.OkDialog(
				parsedMessageArray,
				buildTitle(title, "infoDialog_defaultTitle"),
				translate.translateKey("messageDialog_ok"),
				buildCallback(callback),
				uiDecoration,
				determineDialogTemplate(dialogTemplateOverride));
		dialogQueue.enqueue(dialog);
	}
	
	function confirm(message, yesCallback, noCallback, title, yesButton, noButton) {
		var dialog = new BRB.ConfirmMessageDialog(message,
				buildCallback(yesCallback),
				buildCallback(noCallback),
				buildTitle(title, "confirmDialog_defaultTitle"),
				buildButton(yesButton, "confirmDialog_yes"),
				buildButton(noButton, "confirmDialog_no"));
		dialogQueue.enqueue(dialog);
	}

	function htmlConfirm(message, yesCallback, noCallback, title, yesButton, noButton) {
		var dialog = new BRB.HTMLConfirmMessageDialog(message,
				buildCallback(yesCallback),
				buildCallback(noCallback),
				buildTitle(title, "confirmDialog_defaultTitle"),
				buildButton(yesButton, "confirmDialog_yes"),
				buildButton(noButton, "confirmDialog_no"));
		dialogQueue.enqueue(dialog);
	}
	
	function htmlReqirementEligibilityConfirm(message, yesCallback, noCallback, yesButton, noButton) {
		var dialog = new BRB.HTMLConfirmEligibiltyReqirementMessageDialog(message,
				buildCallback(yesCallback),
				buildCallback(noCallback),
				buildButton(yesButton, "confirmDialog_yes"),
				buildButton(noButton, "confirmDialog_no"));
		dialogQueue.enqueue(dialog);
	}
	function htmlCreditDisclosureInfo( startButton, yesCallback, translate ) {
		var dialog = new BRB.HTMLCreditDisclosureInfo(
				buildButton(startButton, "overview_startApplication_Button_Label"),
				buildCallback(yesCallback),
				translate);
		dialogQueue.enqueue(dialog);
	}
	
	function settings(isAdminProfile, logOutCallback, chooseProductCallback, printerSetupCallback,
						title, logOutButton, chooseProductButton, printerSetupButton, chancelButton) {
		var dialog = new BRB.SettingsDialog(isAdminProfile,
		        buildCallback(logOutCallback),
				buildCallback(chooseProductCallback),
				buildCallback(printerSetupCallback),
				buildTitle(title, "settings_defaultTitle"),
				buildButton(logOutButton, "settings_logOutButton"),
				buildButton(chooseProductButton, "settings_chooseProductButton"),
				buildButton(printerSetupButton, "settings_printerSetupButton"),
				buildButton(chancelButton, "settings_chancelButton")
				);
		dialogQueue.enqueue(dialog);
	}
	
	
	function screen(message, yesCallback, noCallback, title, yesButton, noButton) {
		var dialog = new BRB.ScreenDialog(message,
				buildCallback(yesCallback),
				buildCallback(noCallback),
				buildTitle(title, "screenDialog_defaultTitle"),
				buildButton(yesButton, "confirmDialog_yes"),
				buildButton(noButton, "confirmDialog_no"));
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
		return $.trim(message).split("\n");
	}
};