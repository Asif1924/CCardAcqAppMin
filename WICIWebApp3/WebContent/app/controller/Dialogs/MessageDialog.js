ensureNamespaceExists();

WICI.MessageDialog = function(translate){
	var dialogQueue = new WICI.DialogQueue();

	this.error = error;
	this.info = info;
	this.close = close;
	this.confirm = confirm;
	this.confirmAgent = confirmAgent;
	this.htmlConfirm = htmlConfirm;
	this.settings = settings;
	this.printerSetup = printerSetup;
	this.scan = scan;
	this.scanLoyalty = scanLoyalty;
	this.homePhone = homePhone;
	this.legalHandout = legalHandout;
	//US4892
	this.qcDistributionGuide = qcDistributionGuide;
	// US4495
	this.verifyTestPrint = verifyTestPrint;

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
	// US4282 
	function homePhone(messageOne,messageTwo, yesCallback, noCallback, title, yesButton, noButton) {
		var dialog = new WICI.HomePhoneConfirmReprintMessageDialog(
		        messageOne,
		        messageTwo,
                buildTitle(title, "homePhoneMessage_Title"),
                buildCallback(yesCallback),
                buildCallback(noCallback),
                buildButton(yesButton, "homePhoneConfirmButton"));
		dialogQueue.enqueue(dialog);
		return dialog;
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
	function close(message, title, callback, uiDecoration, dialogTemplateOverride){
		var parsedMessageArray = parseMessage(message);
		var dialog = new WICI.OkDialog(
				parsedMessageArray,
				buildTitle(title, "infoDialog_defaultTitle"),
				translate.translateKey("messageDialog_Close"),
				buildCallback(callback),
				uiDecoration,
				determineDialogTemplate(dialogTemplateOverride));
		dialogQueue.enqueue(dialog);
	}
	// US4495 
	function verifyTestPrint(message, title, callback, uiDecoration, dialogTemplateOverride){
		var parsedMessageArray = parseMessage(message);
		var dialog = new WICI.OkDialog(
				parsedMessageArray,
				buildTitle(title, "testPrintVerify_Title"),
				translate.translateKey("testPrintVerify_Contionue_Button"),
				buildCallback(callback),
				uiDecoration,
				determineDialogTemplate(dialogTemplateOverride));
		dialogQueue.enqueue(dialog);
	}
	
	function confirm(message, yesCallback, noCallback, title, yesButton, noButton, autoClose, autoCloseCallback) {
		var dialog = new WICI.ConfirmMessageDialog(message,
				buildCallback(yesCallback),
				buildCallback(noCallback),
				buildTitle(title, "confirmDialog_defaultTitle"),
				buildButton(yesButton, "yes"),
				buildButton(noButton, "no"),
				autoClose,
				autoCloseCallback);
		dialogQueue.enqueue(dialog);
		return dialog;
	}
	
	function qcDistributionGuide(message, yesCallback, noCallback, title, yesButton, noButton) {
		var dialog = new WICI.QCDistributionGuideMessageDialoge(message,
				buildCallback(yesCallback),
				buildCallback(noCallback),
				buildTitle(title, "optionalProductScreen_Handoutprompts_Title"),
				buildButton(yesButton, "optionalProductQCYES"),
				buildButton(noButton, "optionalProductQCNO"));
		dialogQueue.enqueue(dialog);
		return dialog;
	}
	
	function confirmAgent(messageOne, messageTwo, yesCallback, noCallback, title, yesButton, noButton, autoClose, autoCloseCallback) {
		var dialog = new WICI.ConfirmMessageForAgentDialog(messageOne, messageTwo,
				buildCallback(yesCallback),
				buildCallback(noCallback),
				buildTitle(title, "confirmDialog_defaultTitle"),
				buildButton(yesButton, "yes"),
				buildButton(noButton, "no"),
				autoClose,
				autoCloseCallback);
		dialogQueue.enqueue(dialog);
		return dialog;
	}

	function htmlConfirm(message, yesCallback, noCallback, title, yesButton, noButton) {
		var dialog = new WICI.HTMLConfirmMessageDialog(message,
				buildCallback(yesCallback),
				buildCallback(noCallback),
				buildTitle(title, "confirmDialog_defaultTitle"),
				buildButton(yesButton, "yes"),
				buildButton(noButton, "no"));
		dialogQueue.enqueue(dialog);
	}
	
	
	// US5414 : new dialog for legal handout with signature
	function legalHandout(message, pleasesign, clearsignature, yesCallback, noCallback, title, yesButton, noButton) {
		var dialog = new WICI.LegalHandoutAttestationSignatureDialog(message,
				pleasesign,
				clearsignature,
				buildCallback(yesCallback),
				buildCallback(noCallback),
				buildTitle(title, "confirmDialog_defaultTitle"),
				buildButton(yesButton, "yes"),
				buildButton(noButton, "no"));
		dialogQueue.enqueue(dialog);
	}

	function settings(isAdminProfile, isAdminRole, logOutCallback, chooseProductCallback, printerSetupCallback, testPrintCallback, retrieveCallback, reEstablishWifiCallback, toggleLanguageCallback, manageRepsCallback,  
						title, logOutButton, chooseProductButton, printerSetupButton, testPrintButton, retrieveButton, reEstablishWifiButton, toggleLanguageButton, manageRepsButton, chancelButton) {
		var dialog = new WICI.SettingsDialog(translate, isAdminProfile, isAdminRole,
		        buildCallback(logOutCallback),
				buildCallback(chooseProductCallback),
				buildCallback(printerSetupCallback),
				buildCallback(testPrintCallback),
				buildCallback(retrieveCallback),
				buildCallback(reEstablishWifiCallback),
				buildCallback(toggleLanguageCallback),
				buildCallback(manageRepsCallback),
				buildTitle(title, "settings"),
				buildButton(logOutButton, "settings_logOutButton"),
				buildButton(chooseProductButton, "settings_chooseProductButton"),
				buildButton(printerSetupButton, "settings_printerSetupButton"),
				buildButton(testPrintButton, "settings_testPrintButton"),
				buildButton(retrieveButton, "settings_retrieveButton"),
				buildButton(reEstablishWifiButton, "settings_reEstablishWifiButton"),
				buildButton(toggleLanguageButton, ""),
				buildButton(manageRepsButton, "settings_manageRepsButton"),
				buildButton(chancelButton, "cancel")
				);
		dialogQueue.enqueue(dialog);
	}

	function printerSetup (lastMacAddress, yesCallback, noCallback, title, yesButton, noButton) {
        var dialog = new WICI.PrinterSetupDialog(
                lastMacAddress,
                buildTitle(title, "settings_printerSetupButton"),
                buildCallback(yesCallback),
                buildCallback(noCallback),
                buildButton(yesButton, "printerSetupDialog_yes"),
                buildButton(noButton, "printerSetupDialog_no"),
                translate);
        dialogQueue.enqueue(dialog);
	}
	function scan(title, onScanSuccessCallback, onScanErrorCallback, yesButton, noButton, translate) {
		console.log("MessageDialog.Scan:");
		var dialog = new WICI.ScanDialog(
				buildTitle(title, "personalData_Scan_Id_Label"),
                buildCallback(onScanSuccessCallback),
                buildCallback(onScanErrorCallback),
                buildButton(yesButton, "scanDialog_yes"),
                buildButton(noButton, "cancel"),
                translate);
		dialogQueue.enqueue(dialog);
	}
	// US3625 Loyalty Scanner
	function scanLoyalty(title, onScanSuccessCallback, onScanErrorCallback, yesButton, noButton, translate) {
		console.log("MessageDialog.Scan:");
		var dialog = new WICI.ScanLoyaltyDialog(
				buildTitle(title, "personalData_Scan_Loyalty_Dialog_Label"),
                buildCallback(onScanSuccessCallback),
                buildCallback(onScanErrorCallback),
                buildButton(yesButton, "scanLoyaltyDialog_yes"),
                buildButton(noButton, "cancel"),
                translate);
		dialogQueue.enqueue(dialog);
	}
	
	function screen(message, yesCallback, noCallback, title, yesButton, noButton) {
		var dialog = new WICI.ScreenDialog(message,
				buildCallback(yesCallback),
				buildCallback(noCallback),
				buildTitle(title, "screenDialog_defaultTitle"),
				buildButton(yesButton, "yes"),
				buildButton(noButton, "no"));
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
