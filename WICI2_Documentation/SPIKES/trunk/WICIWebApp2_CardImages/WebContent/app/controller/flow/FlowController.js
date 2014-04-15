ensureNamespaceExists();

WICI.FlowController = function(activationItems, backOutFlowCallback, screensDefinitions, finishFlowCallback, terminateFlowAbruptly, translate, messageDialog) { 
    var logPrefix = ' ---- [WICI.FlowController]::';
	var self = this;

	var createdScreens = [];
	var activeScreenName = null;
	var activeScreen = null;
	var backStack = [];
	
	var testPrintFailedAttempts = null;
	
	//---------------------------------------------------------------------------------------	
	//entry point into flow
	function start() {
	    var sMethod = 'start() ';
        console.log(logPrefix + sMethod);
        
		showScreen(screensDefinitions['start'].transitionOut());
	}
	this.start = start;
	//---------------------------------------------------------------------------------------	
	function showScreen(screenName) {
	    var sMethod = 'showScreen() ';
        console.log(logPrefix + sMethod+' screenName:'+screenName);
        
		activeScreen = createScreen(screenName);

		activeScreen.show();

		activeScreenName = screenName;
		afterPageLikelyShown();
		
		bindSettingsButtonEvent();
	}
	this.showScreen = showScreen;
	//---------------------------------------------------------------------------------------	
	function next() {
	    var sMethod = 'next() ';
        console.log(logPrefix + sMethod);
        
		// choose the next key, then show it
	    try{
	        var transitionOut = screensDefinitions[activeScreenName].transitionOut;
	        nextFromTransitionFunction(transitionOut);
	    }
	    catch(ex){
	        console.log(logPrefix + sMethod +'ERROR!!! Exception:'+ex);
	        back(); 
	    }
	}
	this.next = next;
	//---------------------------------------------------------------------------------------	
	
	function nextAfterFailure() {		
		// choose the next key, then show it
		nextFromTransitionFunction(retrieveTransitionFunctionOnFailure());
	}
	this.nextAfterFailure = nextAfterFailure;
	//---------------------------------------------------------------------------------------	
	function retrieveTransitionFunctionOnFailure() {
		var transitionOnFailure = screensDefinitions[activeScreenName].transitionOnFailure;
		if(transitionOnFailure === undefined) {
			transitionOnFailure = function(){return "noAction";};
		}
		return transitionOnFailure;
	}
	//---------------------------------------------------------------------------------------	

	function nextFromTransitionFunction(transitionFunction) {
		var activeScreenNameTemp = transitionFunction();
		if (activeScreenNameTemp === 'done') {
			finishFlow();
		} else if(activeScreenNameTemp === 'noAction') {
			// do nothing TODO fix when the else bellow is fixed.
		}else if (activeScreenNameTemp && activeScreenNameTemp !== '') {
			createdScreens.push({
				screen : activeScreen,
				name : activeScreenName
			});
			backStack.push(defaultBack);
			
			exitCurrentScreen();
			showScreen(activeScreenNameTemp);
		} else {
			//TODO: consolidate this with the if else : This is for entering a sub flow.  the transition out function does not return a screen name
			
			exitCurrentScreen();
		}
	}
	//---------------------------------------------------------------------------------------	
	function afterPageLikelyShown() {
		window.scrollTo(0, 0);
	}
	//---------------------------------------------------------------------------------------	
	function back() {
	    var sMethod = 'back() ';
        console.log(logPrefix + sMethod);
        
		var backCall = backStack.pop();
		
		// if nothing on the stack, exit flow
		if (backCall === undefined) {
			backOutOfFlow();
			return;
		}
		
		// call the function which was on the top of the back stack
		backCall();
	}
	this.back = back;
	//---------------------------------------------------------------------------------------	
	function backWithFailure() {
		back();
		if (activeScreen.returnedFromFailure !== undefined) {
			activeScreen.returnedFromFailure();
		}
	}
	this.backWithFailure = backWithFailure;
	//---------------------------------------------------------------------------------------	
	function showScreenAfterFlow(subFlow, screenName) {
		createdScreens.push({
			screen : activeScreen,
			name : activeScreenName
		});
		createdScreens.push(subFlow.getActiveScreen());
		backStack.push(backToFlow);
		showScreen(screenName);
	}
	this.showScreenAfterFlow = showScreenAfterFlow;
	//---------------------------------------------------------------------------------------	
	function hasBack() {
		return backStack.length !== 0;
	}
	this.hasBack = hasBack;
	//---------------------------------------------------------------------------------------	
	function finishFlow() {
		var sMethod = 'finishFlow() ';
        console.log(logPrefix + sMethod);
        
		exitCurrentScreen();
		finishFlowCallback();
		afterPageLikelyShown();
	}
	//---------------------------------------------------------------------------------------	
	function backOutOfFlow() {
		var sMethod = 'backOutOfFlow() ';
        console.log(logPrefix + sMethod);
        
		exitCurrentScreen();
		backOutFlowCallback();
		afterPageLikelyShown();
	}
	//---------------------------------------------------------------------------------------
	function forceExitFlow() {
		var sMethod = 'forceExitFlow()';
		console.log(logPrefix + sMethod);
		
		exitCurrentScreen();
		terminateFlowAbruptly();
		afterPageLikelyShown();
	}
	this.forceExitFlow = forceExitFlow;
	//---------------------------------------------------------------------------------------
	
	function backIntoParentFlow() {
		restoreActiveScreen();
	}
	this.backIntoParentFlow = backIntoParentFlow;
	//---------------------------------------------------------------------------------------	
	function getActiveScreen() {
		return {
			screen : activeScreen,
			name : activeScreenName
		};
	}
	this.getActiveScreen = getActiveScreen;
	//---------------------------------------------------------------------------------------	
	// implementation methods
	function createScreen(screen) {
		var sMethod = 'createScreen() ';
        console.log(logPrefix + sMethod);
        
		var screenConstructor = screensDefinitions[screen].screenConstructor;
		var newScreen = new screenConstructor(activationItems, translate, messageDialog );

		newScreen.init(self);

		return newScreen;
	}
	//---------------------------------------------------------------------------------------	
	function defaultBack() {
		exitCurrentScreen();
		popActiveScreen();
		restoreActiveScreen();
	}
	//---------------------------------------------------------------------------------------	
	function popActiveScreen() {
		var previousScreen = createdScreens.pop();
		activeScreenName = previousScreen.name;
		activeScreen = previousScreen.screen;
	}
	//---------------------------------------------------------------------------------------	
	function restoreActiveScreen() {
		if (activeScreen.returnTo !== undefined) {
			activeScreen.returnTo();
		}

		activeScreen.show();
		afterPageLikelyShown();
	}
	//---------------------------------------------------------------------------------------	
	function exitCurrentScreen() {
		activeScreen.hide();
	}
	//---------------------------------------------------------------------------------------	
	function backToFlow() {
		var sMethod = 'backToFlow() ';
        console.log(logPrefix + sMethod);
        
		defaultBack();
		
		//  The current screen was another flows screen
		var storedScreen = createdScreens.pop();
		activeScreenName = storedScreen.name;
		activeScreen = storedScreen.screen;
	}
	//---------------------------------------------------------------------------------------	
	function bindSettingsButtonEvent()
	{
		var sMethod = 'bindSettingsButtonEvent() ';
        console.log(logPrefix + sMethod);
        
		if($('.pageNavigationButton.settings').length != 0)
		{
			$.each($('.pageNavigationButton.settings'), function(index, item) 
				{  
		            if($(item).attr('inited')!='true')
		            {
		            	$(item).attr('inited', 'true');
		    			
		            	$(item).click(function() {
		            		
		            		if($('#messageDialog').length != 0)
		            		{
		            			return;
		            		}
		    				if($(item).attr('chooseProductMenuItem') && $(item).attr('chooseProductMenuItem') === 'false')
		    				{
		    					messageDialog.settings(app.accountProfileHelper.isAdminProfile(), logOutClick, null, printerSetupClick, testPrintClick, toggleLanguageClick);
		    				}
		    				else
		    				{
		    					messageDialog.settings(app.accountProfileHelper.isAdminProfile(), logOutClick, chooseProductClick, printerSetupClick, testPrintClick, toggleLanguageClick);
		    				}	
		    	        });
		            }
	        });
		}
	}
	//---------------------------------------------------------------------------------------	
	function printerSetupClick()
	{
	    var sMethod = 'printerSetupClick() ';
        console.log(logPrefix + sMethod);
	    try{	       
	        messageDialog.printerSetup(app.zebraPrinterWrapper.getPrinterMacAddress(), setupPrinterMacAddress);
	    } catch (err){
	        console.log(logPrefix + sMethod + "ERROR: " + err);
	    }
	}
	
	function testPrintClick()
	{
		var sMethod = 'testPrintClick() ';
		console.log(logPrefix + sMethod);
		
		testPrintFailedAttempts = 0;
		
		testPrintYes();
	}
	
	function toggleLanguageClick()
	{
		var sMethod = 'toggleLanguageClick() ';
		console.log(logPrefix + sMethod);
		
		translate.toggleLanguage();
		
		app.language.setLanguage(translate.getCurrentLanguageFSDPFormat());
		
//		if(translate.getCurrentLanguageFSDPFormat() === 'E') {
//			$('#settings_toggleLanguageButton').text("Français");
//		} else {
//			$('#settings_toggleLanguageButton').text("English");
//		}		
	}
	
	//---------------------------------------------------------------------------------------
	function testPrintYes () {
	    new WICI.LoadingIndicatorController().show();
	    app.zebraPrinterWrapper.testPrint(printTestFileSuccess, printTestFileFailure);	    
	}
	
	//---------------------------------------------------------------------------------------
    function printTestFileSuccess(result) {
        var sMethod = 'printTestFileSuccess() ';
        console.log(logPrefix + sMethod);
       
        new WICI.LoadingIndicatorController().hide();                
        messageDialog.confirm(translate.translateKey("testPrintStatusMsg"), $.noop, testPrintConfirmationNo, translate.translateKey("printResponseStatusTitle"));
    }
    //---------------------------------------------------------------------------------------
    function printTestFileFailure(error) {
        var sMethod = 'printTestFileFailure() ';
        console.log(logPrefix + sMethod);
        
        new WICI.LoadingIndicatorController().hide();        
        messageDialog.confirm(translate.translateKey("testPrintStatusMsg"), $.noop, testPrintConfirmationNo, translate.translateKey("printResponseStatusTitle"));
    }
    //---------------------------------------------------------------------------------------
    function testPrintConfirmationNo () {
        var sMethod = 'printConfirmationNo() ';
        console.log(logPrefix + sMethod);
        
        console.log(logPrefix + sMethod + "::testPrintFailedAttempts::" + testPrintFailedAttempts);
     
		if (testPrintFailedAttempts > WICI.AppConfig.TestPrintConfig.MAX_TEST_PRINT_RETRIES - 1) {
			testPrintFailedAttempts = 0;
//    	        if (app.accountProfileHelper.isAdminProfile()) {
//    	            messageDialog.printerSetup(app.zebraPrinterWrapper.getPrinterMacAddress(), setupPrinterMacAddressCallback);    
//    	        } else {
//    	        	app.accountProfileHelper.showNoPrinterSetupWarning();
//    	        }
			
	        app.accountProfileHelper.showNoPrinterSetupWarning();
		} else {
			console.log(logPrefix + sMethod + "::FALSE::");
			++testPrintFailedAttempts;    			
    		testPrintYes();
		}
    }
    
    
	//---------------------------------------------------------------------------------------	
	function setupPrinterMacAddress (macAddress) {	    
	    var sMethod = 'setupPrinterMacAddress() ';
        console.log(logPrefix + sMethod);
        
	    app.zebraPrinterWrapper.setPrinterMacAddress(macAddress, storePrinterMacAddressCallback, storePrinterMacAddressCallback);
	}	
	//---------------------------------------------------------------------------------------
    function storePrinterMacAddressCallback () {   
        var sMethod = 'storePrinterMacAddressCallback() ';
        console.log(logPrefix + sMethod);
        
        messageDialog.confirm(translate.translateKey("confirmDialogPritTest_Message"), testPrintYes, $.noop);
    }       
    
	//---------------------------------------------------------------------------------------	
	function logOutClick()
	{	    
	    var sMethod = 'logOutClick() ';
        console.log(logPrefix + sMethod);
        
        messageDialog.htmlConfirm(translate.translateKey("settings_exitMessage"), logOut, $.noop, 
        						translate.translateKey("backButtonPrompt_title"));
	}
	//---------------------------------------------------------------------------------------	
	function logOut()
	{
		var sMethod = 'logOut() ';
        console.log(logPrefix + sMethod);
        
		forceExitFlow();
        activationItems.clearAllModels();
        app.init();
	}
	this.logOut = logOut;
	//---------------------------------------------------------------------------------------	
	function chooseProductClick()
	{
		var sMethod = 'chooseProductClick() ';
        console.log(logPrefix + sMethod);
        
        messageDialog.htmlConfirm(translate.translateKey("settings_exitMessage"), goToChooseProduct, $.noop, 
        						  translate.translateKey("backButtonPrompt_title"));
	}
	//---------------------------------------------------------------------------------------	
	function goToChooseProduct()
	{
		var sMethod = 'goToChooseProduct() ';
        console.log(logPrefix + sMethod);
		
		forceExitFlow();
        activationItems.clearToLoginScreen();
        start();
	}
	
	this.startApplication = goToChooseProduct;
	//---------------------------------------------------------------------------------------	
};
