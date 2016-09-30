ensureNamespaceExists();

BRB.BRBWebApp = function() {
	var logPrefix = ' ----- [BRB.BRBWebApp]::';

	this.messageDialog = null;
	this.translator = null;
	this.validationsOn = false;
	this.validationDecorator = null;
	this.creditCardData = null;
	this.customerTransactionModel = null;
	// US3627
	this.MOACustomerTransactionModel = null;
	
	this.identityExamHelper = null;
	this.adjudicationHelper = null;
	this.initiateAppHelper = null;
	this.sessionTimeoutActionService = null;
	this.idleTimeService = null;
	this.ieUIHelper = null;
	this.ie9SelectHelper = null;
	this.flowStateHelper = null;
	var isDemoMode = false;
	var windowIsAlredyClosing = false;
	this.translationExtender = null;
	var transactionId = null;
	
	this.getTransactionId = function() {
		return transactionId;
	};
	
	this.setTransactionId = function(bValue) {
		transactionId = bValue;
    };
	
	this.getDemoMode = function() {
		return isDemoMode;
	};
	this.setDemoMode = function(bValue) {
		isDemoMode = bValue;
	};
	
	var isMOARequest = false;
	
	this.getIsMOARequest = function() {
        return isMOARequest;
    };
	this.setIsMOARequest = function(bValue) {
        isMOARequest = bValue;
    };

	this.flowController = null;

	// ---------------------------------------------------------------------------------------
	// Global override for jQuery Mobile Dialogs to make the backgrounds
	// transparent
	$(function() {
		$('div[data-role="dialog"]').live('pagebeforeshow', function(e, ui) {
			ui.prevPage.addClass("ui-dialog-background ");
		});

		$('div[data-role="dialog"]').live('pagehide', function(e, ui) {
			$(".ui-dialog-background ").removeClass("ui-dialog-background ");
		});
	});
	// ---------------------------------------------------------------------------------------
	this.init = function() {
		var sMethod = 'init() ';
		BRB.Log(logPrefix + sMethod);
		BRB.AppConfig.TrackingScreenID = 0;
		
		initMomentJsFrenchLanguage();
		
		this.translationExtender = new BRB.TranslationExtender();
		this.translationExtender.init();	
		
		this.translator = new BRB.Translate($.i18n, BRB.AppConfig.LanguageEnum);
		
		this.initiateAppHelper = new BRB.InitiateAppHelper();
		
		this.translator.init(this.initiateAppHelper.getLanguageParam());
		
		this.flowStateHelper = new BRB.FlowStateHelper();
		this.ie9SelectHelper = new BRB.IE9SelectsHelper();
		this.ieUIHelper = new BRB.IeUIHelper();
		if (this.ieUIHelper.isIe8Browser()){
			this.ieUIHelper.addStylesForIE8();
		}
		
		if (this.messageDialog === null) {
			this.messageDialog = new BRB.MessageDialog(this.translator);
		}

		this.validationDecorator = new BRB.ValidationDecorator();

		// Old Code
		/*this.customerTransactionModel = new BRB.CustomerTransactionModel();
		this.customerTransactionModel.setTransactionId(this.initiateAppHelper.getTransactionParam());*/

		if(this.initiateAppHelper.getTransactionParam() != 0) {
			this.setIsMOARequest(false);
		} else {
			// Block ctfs.com flow BRB URL
			// this.setIsMOARequest(true);
		}
		
		this.customerTransactionModel = new BRB.CustomerTransactionModel();
		this.moacustomerTransactionModel = new BRB.MOACustomerTransactionModel();
		 
		if(this.getIsMOARequest()) {
			 this.setTransactionId(this.initiateAppHelper.generateTransactionId());
			 this.moacustomerTransactionModel.setTransactionId(this.getTransactionId());
			 this.moacustomerTransactionModel.setCardType(this.initiateAppHelper.getCardTypeParam());
        } else {
             this.customerTransactionModel.setTransactionId(this.initiateAppHelper.getTransactionParam());
        }
		
		this.identityExamHelper = new BRB.IdentityExamHelper();
		this.adjudicationHelper = new BRB.AdjudicationHelper();
		
		if(this.idleTimeService!==null){
			this.idleTimeService.stop();
		}
		this.idleTimeService = new BRB.IdleTimeService($(document),stopAll);	
		this.idleTimeService.start();
		this.sessionTimeoutActionService = new BRB.MaxTimeoutHelper( "SESSION_TIMEOUT_SERVICE");

		// Set timer interval
		this.sessionTimeoutActionService.setCheckInterval(BRB.AppConfig.BackgroundServicesConfig.SESSION_TIMEOUT);

		// Initialize session timeout event handler
		this.sessionTimeoutActionService.setActionMethod(sessionTimeoutEventHandler);

		disableFormSubmission();

		this.validationsOn = true;

		$.support.cors = true;

		var shouldLaunchNormally = new BRB.DummyPageLauncher();
		shouldLaunchNormally.setDummyPageProperty(BRB.activateDummyPage);

		if (!shouldLaunchNormally.getDummyPageProperty()) {
			new BRB.AppNavigatorController().init(this.translator,this.messageDialog);
		} else {
			var $self = this;

			new BRB.LoadingIndicatorController().showIdentityVerificationLoading(
					app.translator.translateKey("app_loading"));
//			new BRB.LoadingIndicatorController().show();

			if(this.getIsMOARequest()) {
				new BRB.LoadingIndicatorController().hide();
				$self.customerTransactionModel
				.initialize(
						this.getTransactionId(),												
						"",
						"",
						"",
						"",
						"",
						"",
						"",												
						"",												
						"",
						"");
				new BRB.AppNavigatorController().init($self.translator, $self.messageDialog);
			} else {
				this.initiateAppHelper.getCustomerData(
						this.translator,
						this.messageDialog,
						function(argResponse) {
							new BRB.LoadingIndicatorController().hide();
							BRB
									.Log($self.logPrefix
											+ '[getCustomerData]:OnSuccess:Is Error:'
											+ argResponse.error);

							if (argResponse.error) {
								$self.messageDialog
										.error(
												argResponse.msg,
												$self.translator
														.translateKey("initiate_BRB_Web_App_ErrorTitle"),
												$self.closeBRBWebWindow);

								return;
							}

							var serverResponse = argResponse.data;
							BRB
							.Log(JSON.stringify(serverResponse));
							$self.customerTransactionModel
									.initialize(
											serverResponse.transactionId,												
											serverResponse.email,
											serverResponse.firstName,
											serverResponse.lastName,
											serverResponse.addressLine1,
											serverResponse.addressLine2,
											serverResponse.city,
											serverResponse.province,												
											serverResponse.loyaltyNumber,												
											serverResponse.postalCode,
											serverResponse.phoneNumber);

							new BRB.AppNavigatorController().init(
									$self.translator, $self.messageDialog);
						},
						function(argResponse) {
							new BRB.LoadingIndicatorController().hide();
							BRB.Log($self.logPrefix
									+ '[getCustomerData]:OnFailure');

							$self.messageDialog
									.error(
											$self.translator
													.translateKey('initiate_BRB_Web_App_ErrorMsg'),
											$self.translator
													.translateKey("initiate_BRB_Web_App_ErrorTitle"),
											$self.closeBRBWebWindow);
						});
			}
		}
	};
	function initMomentJsFrenchLanguage() {
		var prevLanguage = moment.lang();
		if(prevLanguage === 'en'){
		moment
				.lang(
						'fr',
						{
							months : "Janvier_Février_Mars_Avril_Mai_Juin_Juillet_Août_Septembre_Octobre_Novembre_Décembre"
									.split("_"),
							monthsShort : "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc."
									.split("_"),
							weekdays : "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi"
									.split("_"),
							weekdaysShort : "dim._lun._mar._mer._jeu._ven._sam."
									.split("_"),
							weekdaysMin : "Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),
							longDateFormat : {
								LT : "HH:mm",
								L : "DD/MM/YYYY",
								LL : "D MMMM YYYY",
								LLL : "D MMMM YYYY LT",
								LLLL : "dddd D MMMM YYYY LT"
							},
							calendar : {
								sameDay : "[Aujourd'hui à] LT",
								nextDay : '[Demain à] LT',
								nextWeek : 'dddd [à] LT',
								lastDay : '[Hier à] LT',
								lastWeek : 'dddd [dernier à] LT',
								sameElse : 'L'
							},
							relativeTime : {
								future : "dans %s",
								past : "il y a %s",
								s : "quelques secondes",
								m : "une minute",
								mm : "%d minutes",
								h : "une heure",
								hh : "%d heures",
								d : "un jour",
								dd : "%d jours",
								M : "un mois",
								MM : "%d mois",
								y : "une année",
								yy : "%d années"
							},
							ordinal : function(number) {
								return number + (number === 1 ? 'er' : 'ème');
							},
							week : {
								dow : 1, // Monday is the first day of the
											// week.
								doy : 4
							// The week that contains Jan 4th is the first week
							// of the year.
							}
						});
		moment.lang(prevLanguage);
		}
	}
	// ---------------------------------------------------------------------------------------
	function disableFormSubmission() {
		var sMethod = 'disableFormSubmission() ';
		BRB.Log(logPrefix + sMethod);

		$("form").live("submit", function(event) {
			event.preventDefault();
		});
	}
	;
	// ---------------------------------------------------------------------------------------
	function sessionTimeoutEventHandler() {
		var sMethod = 'sessionTimeoutEventHandler() ';
		BRB.Log(logPrefix + sMethod
				+ " SESSION_TIMEOUT_SERVICE :: setActionMethod");
			stopAll();
	}
	// ---------------------------------------------------------------------------------------
	this.closeBRBWebWindow = function() {
		var sMethod = 'closeBRBWebWindow() ';
		BRB.Log(logPrefix + sMethod);		
				
		// Do some stuff before window have been closed
		app.removeCustomerData(true);    		
	};
	// ---------------------------------------------------------------------------------------
	this.onBeforeCloseWindow = function() {		
		var sMethod = 'onBeforeCloseWindow() ';
		BRB.Log(logPrefix + sMethod);	
		
		// Check if delete data request have been sent		
		if (app.initiateAppHelper.isDeleteCustomerDataRequestSent) {
			return;
		}
		app.flowStateHelper.setAbandonTermination();
		if(windowIsAlredyClosing){// if window.close() was called but window does not  close already.  
			return;
		}
		app.removeCustomerData();                    	    	
		BRB.Log(logPrefix + " after remove customer data" + sMethod);
		// Wait while delete Customer data request have been sent
		//while (!app.initiateAppHelper.isDeleteCustomerDataRequestSent) {                  	    		
		//}	
	};
	// ---------------------------------------------------------------------------------------
	this.removeCustomerData = function (closeCurrentWindow) {	
		var sMethod = 'closeBRBWebWindow() ';
			
		new BRB.LoadingIndicatorController().showIdentityVerificationLoading(
				app.translator.translateKey("app_loading"));		
//		new BRB.LoadingIndicatorController().show();
		if(app.flowStateHelper.isTokenExpired()){
			stopAll(forceCloseCurrentWindow);
			//to prevent send data to server in FireFox.
			return;
		}
		//according to US 1343.
		if(app.flowStateHelper.isRowWithTransIdAlreadyDeleted()){
			needToForceClose(true);
			//to prevent send data to server in FireFox.
			BRB.Log("isRowWithTransIdAlreadyDeleted");	
			return;
		}
		
		app.initiateAppHelper.removeCustomerData(this.translator,
				this.messageDialog,
				function(argResponse) {
					BRB.Log(logPrefix + sMethod + "::SUCCESS RESPONSE:: " + argResponse);
					app.initiateAppHelper.isDeleteCustomerDataRequestSent = true;
					new BRB.LoadingIndicatorController().hide();
					
					needToForceClose (closeCurrentWindow);
				}, 
				function(error) {
					BRB.Log(logPrefix + sMethod + "::Request FAILED:: " + error);
					app.initiateAppHelper.isDeleteCustomerDataRequestSent = false;
					new BRB.LoadingIndicatorController().hide();					
				
					needToForceClose (closeCurrentWindow);
				});
	};
	// ---------------------------------------------------------------------------------------
	function needToForceClose(closeCurrentWindow){
		if (closeCurrentWindow) {
			BRB.Log("needToForceClose");	
			forceCloseCurrentWindow();
		}
	}
	function forceCloseCurrentWindow () {
		var sMethod = 'forceCloseCurrentWindow() ';
		BRB.Log(logPrefix + sMethod);		
		windowIsAlredyClosing = true;
		window.open('', '_self');
		window.close();	
				
		// if window doesn't close itself, then show message dialog. Current
		// situation may occur in FireFox browser.
		if(this.messageDialog != null && this.translator != null){ // current situation may occur in IE8. 
		this.messageDialog.info(this.translator
				.translateKey("identityVerification_FireFoxProblem"));
		}
	};
	// ---------------------------------------------------------------------------------------
	function stopAll(callBack) {	
		var sMethod = 'stopAll() ';
		BRB.Log(logPrefix + sMethod);		
		try {			
			(new BRB.DialogCloseHelper()).closeAllDialogs();
			app.sessionTimeoutActionService.stop();
			
			app.messageDialog.error( 
					app.translator.translateKey("session_Expired_ErrorMsg"),
					app.translator.translateKey("session_Expired_ErrorTitle"),callBack ? callBack :  app.closeBRBWebWindow);			
		} catch (e) {
			BRB.Log(logPrefix + sMethod + " Exception: " + e);
		}
	};
	// ---------------------------------------------------------------------------------------	
   this.isSkSelected = function isSkSelected(){
		 var overViewModel = creditCardData.getModel("personalInformation");
	        if(overViewModel != null && overViewModel != undefined){
	        	var province = overViewModel.get("province");
	        	// according to user story 1165
	        	 return province == 'SK';
	        }
   }
   this.isNSSelected = function isNSSelected(){
		 var overViewModel = creditCardData.getModel("overview");
	        if(overViewModel != null && overViewModel != undefined){
	        	var province = overViewModel.get("provinces");
	        	// according to user story 1165
	        	 return province == 'NS';
	        }
 }
   this.getCurrentProvince = function getCurrentProvince(){
		 var overViewModel = creditCardData.getModel("personalInformation");
	        if(overViewModel != null && overViewModel != undefined){
	        	var province = overViewModel.get("province");
	        	 return province ;
	        }
 }
};
