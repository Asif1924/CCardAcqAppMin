ensureNamespaceExists();

BRB.AppNavigatorController = function() {
	var translator = null;
	var messageDialog = null;
	
	this.init = init;
	
	function init(argTranslator, argMessageDialog){
		new BRB.LoadingIndicatorController().hide();
		
		translator = argTranslator;
		messageDialog = argMessageDialog;
		
		creditCardData = new BRB.CreditCardApplicationData();
		app.flowController = new BRB.NewCustomerCreditCardAcquisitionFlow(creditCardData, translator, messageDialog);
		app.flowController.start();			
		
	}
};