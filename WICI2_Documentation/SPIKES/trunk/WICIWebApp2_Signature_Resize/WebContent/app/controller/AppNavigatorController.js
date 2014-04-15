ensureNamespaceExists();

WICI.AppNavigatorController = function() {
	var translator = null;
	var messageDialog = null;
	
	this.init = init;
	
	function init(argTranslator, argMessageDialog){
		new WICI.LoadingIndicatorController().hide();
		
		translator = argTranslator;
		messageDialog = argMessageDialog;
		
		var loginScreen = new WICI.LoginScreenController();
		loginScreen.init(translator, messageDialog);
		loginScreen.show();		
	}
};