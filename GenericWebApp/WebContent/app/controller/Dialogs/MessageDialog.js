ensureNamespaceExists();

GENERICWEBAPP.MessageDialog = function(translate){

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
