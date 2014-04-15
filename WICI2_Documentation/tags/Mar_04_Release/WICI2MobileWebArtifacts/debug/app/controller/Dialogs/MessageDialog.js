ensureNamespaceExists();

WICI.MessageDialog = function(translate){
	var dialogQueue = new WICI.DialogQueue();
	
	this.error = error;
	this.info = info;
	this.confirm = confirm;
	
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