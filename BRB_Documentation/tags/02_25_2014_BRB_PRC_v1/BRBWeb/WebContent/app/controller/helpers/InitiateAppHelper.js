ensureNamespaceExists();

BRB.InitiateAppHelper = function() {
	var logPrefix = ' ----- [BRB.InitiateAppHelper]::';
	var transactionIdParamName = "transactionId";
	var languageParamName = "lang";
	var transactionId = null;
	var language = null;
	this.isDeleteCustomerDataRequestSent = false;
	
	function getUrlParam (paramName) {
		var results = new RegExp('[\\?&]' + paramName + '=([^&#]*)').exec(window.location.href);
		return results != null ? results[1] : 0;
	};
	
	this.getTransactionParam = function () {
		if (!transactionId && _.isEmpty(transactionId)) {
			transactionId = getUrlParam(transactionIdParamName);
		}		
		
		return transactionId;
	};
	
	this.getLanguageParam = function () {
		var sMethod = 'getLanguageParam()::';			
		if (!language && _.isEmpty(language)) {
			language = getUrlParam(languageParamName);
		}
		
		BRB.Log(logPrefix + sMethod + "Language is: " + language);
		
		return language == BRB.AppConfig.LanguageEnum.french ? 
				BRB.AppConfig.LanguageEnum.french : BRB.AppConfig.LanguageEnum.english;		
	};
	
	this.getCustomerData = function (messageDialog, translator, argSuccessCB, argFailureCB) {		
		var connectivityController = new BRB.ConnectivityController(new BRB.ConnectionStatus(), messageDialog, translator, BRB.AppConfig.ConnectivityConfig);
		connectivityController.init();
				
		connectivityController.getCustomerData(this.getTransactionParam(), argSuccessCB, argFailureCB);
	};
	
	this.removeCustomerData = function (messageDialog, translator, argSuccessCB, argFailureCB) {
		var sMethod = 'removeCustomerData()::';
		
		this.isDeleteCustomerDataRequestSent = false;
		try {
			BRB.Log(logPrefix + sMethod + 'Transaction ID::' + transactionId);

			if (!transactionId && _.isEmpty(transactionId)) {
				BRB.Log(logPrefix + sMethod + 'transactionId is empty!!!');

				return;
			}

			var connectivityController = new BRB.ConnectivityController(
					new BRB.ConnectionStatus(), messageDialog, translator,
					BRB.AppConfig.ConnectivityConfig);
			connectivityController.init();
			
			// Show indicator
			new BRB.LoadingIndicatorController().showIdentityVerificationLoading(
					app.translator.translateKey("app_loading"));
//			new BRB.LoadingIndicatorController().show();
			// according to 1046.
			var str = app.flowStateHelper.getStringHelperState(); 
			connectivityController.removeCustomerData(transactionId,
					argSuccessCB, argFailureCB, str);
		}
		finally {			
			this.isDeleteCustomerDataRequestSent = true;
		}		
	};
};