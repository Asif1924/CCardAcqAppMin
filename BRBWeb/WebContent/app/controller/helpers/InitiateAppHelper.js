ensureNamespaceExists();

BRB.InitiateAppHelper = function() {
	var logPrefix = ' ----- [BRB.InitiateAppHelper]::';
	var transactionIdParamName = "transactionId";
	var languageParamName = "lang";
	var cardTypeParamName = "cardType";
	var pcidParamName = "pcid";
	var transactionId = null;
	var language = null;
	var cardType = null;
	var pcid = null;
	this.isDeleteCustomerDataRequestSent = false;
	
	function getUrlParam (paramName) {
		var results = new RegExp('[\\?&]' + paramName + '=([^&#]*)').exec(window.location.href);
		return results != null ? results[1] : 0;
	};
	
	this.getTransactionParam = function () {
		var sMethod = 'getTransactionParam()::';
		if (!transactionId && _.isEmpty(transactionId)) {
			transactionId = getUrlParam(transactionIdParamName);
		}
		BRB.Log(logPrefix + sMethod + "transactionId is: " + transactionId);
		
		return transactionId;
	};
	
	this.generateTransactionId = function () {
		var sMethod = 'generateTransactionId()::';
	    var d = new Date().getTime();
	    var transactionId = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
	        var r = (d + Math.random()*16)%16 | 0;
	        d = Math.floor(d/16);
	        return (c=='x' ? r : (r&0x3|0x8)).toString(16);
	    });
	    transactionId = transactionId + "moa";
	    BRB.Log(logPrefix + sMethod + "transactionId is: " + transactionId);
	    
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
	
	// US3627
	this.getCardTypeParam = function () {
		var sMethod = 'getCardTypeParam()::';			
		if (!cardType && _.isEmpty(cardType)) {
			cardType = getUrlParam(cardTypeParamName);
		}
		BRB.Log(logPrefix + sMethod + "cardType is: " + cardType);
		return cardType;		
	};
	
	// US4281
	this.getDictionaryInfo = function (messageDialog, translator, argSuccessCB, argFailureCB) {
		var sMethod = 'getDictionaryInfo():: ';
		var connectivityController = new BRB.ConnectivityController(new BRB.ConnectionStatus(), messageDialog, translator, BRB.AppConfig.ConnectivityConfig);
		connectivityController.init();
		
		BRB.Log(logPrefix + sMethod + "transactionId is: " + app.getTransactionId());		
		connectivityController.getDictionaryInfo(app.getTransactionId(), argSuccessCB, argFailureCB);		
	};
	
	this.getCustomerData = function (messageDialog, translator, argSuccessCB, argFailureCB) {
		var sMethod = 'getCustomerData():: ';
		var connectivityController = new BRB.ConnectivityController(new BRB.ConnectionStatus(), messageDialog, translator, BRB.AppConfig.ConnectivityConfig);
		connectivityController.init();
		BRB.Log(logPrefix + sMethod + "transactionId is: " + app.getTransactionId());
		if(app.getIsMOARequest()) {
			connectivityController.getCustomerData(app.getTransactionId(), argSuccessCB, argFailureCB);
		} else {
			connectivityController.getCustomerData(this.getTransactionParam(), argSuccessCB, argFailureCB);
		}
		// Old connectivityController.getCustomerData(this.getTransactionParam(), argSuccessCB, argFailureCB);
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
			else if (app.getIsMOARequest())
				{
				BRB.Log(logPrefix + sMethod + 'MOA transactionId and no record in the table!!!');
				this.isDeleteCustomerDataRequestSent = true;
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
	
	this.getPCIDParam = function () {
		var sMethod = 'getPCIDParam()::';			
		if (!pcid && _.isEmpty(pcid)) {
			pcid = getUrlParam(pcidParamName);
		}
		BRB.Log(logPrefix + sMethod + "PCID is: " + pcid);
		return pcid;		
	};
};