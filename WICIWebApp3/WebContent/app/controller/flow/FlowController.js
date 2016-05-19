ensureNamespaceExists();

WICI.FlowController = function(activationItems, backOutFlowCallback, screensDefinitions, finishFlowCallback, terminateFlowAbruptly, translate, messageDialog) { 
    var logPrefix = ' ---- [WICI.FlowController]::';
	var self = this;

	var createdScreens = [];
	var activeScreenName = null;
	var activeScreen = null;
	var backStack = [];
	
	var testPrintFailedAttempts = null;
	var printerMethods = new WICI.TestPrintHelper(translate, messageDialog);
	var testPrintClick = printerMethods.testPrint;
	var printerSetupClick = printerMethods.setup;
	
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
		// window.scrollTo(0, 0);
		// time out is added to apply the scroll, after confirm dialog for Handout prompt
		setTimeout(function(){
			window.scrollTo(0, 0);
	    },500);
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
	
	/*
	this.tearDownNavigationBarAtTop = tearDownNavigationBarAtTop;
	
    function tearDownNavigationBarAtTop() {
        $("#pageHeader-template").template("pageHeader");
        $.tmpl("pageHeader", {
            "logo_En" : translator.currentLanguageEnglish(),
            "settingsButtonId" : "PendingScreen_SettingsButton",
            "isNotEmployee" : activationItems.getModel('loginScreen').get('employerID').toLowerCase() !== "e"
        }).appendTo("#ChooseProductScreen");

        $('#chooseProductScreen_SettingsButton').addClass('rightPosition');
        $('#chooseProductScreen_SettingsButton').attr("chooseProductMenuItem",
            "false")
    }	
	*/
	this.bindSettingsButtonEvent = bindSettingsButtonEvent;
	
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
		    					messageDialog.settings(app.accountProfileHelper.isAdminProfile(), logOutClick, null, printerSetupClick, testPrintClick, retrieveClick, reEstablishWifiClick, toggleLanguageClick);
		    				}
		    				else
		    				{
		    					messageDialog.settings(app.accountProfileHelper.isAdminProfile(), logOutClick, chooseProductClick, printerSetupClick, testPrintClick, retrieveClick, reEstablishWifiClick, toggleLanguageClick);
		    				}	
		    	        });
		            }
	        });
		}
	}
	//---------------------------------------------------------------------------------------	
	
	
	function toggleLanguageClick()
	{
		var sMethod = 'toggleLanguageClick() ';
		console.log(logPrefix + sMethod);

		try {
			translate.toggleLanguage();
		} catch (e) {
			console.log(logPrefix + sMethod + ' Exception: ' + e);
		} finally {
			// even if .toggleLanguage throw exception language still should be changed in Java plugin
			app.language.setLanguage(translate.getCurrentLanguageFSDPFormat());
		}
	}

	function logOutClick()
	{	    
	    var sMethod = 'logOutClick() ';
        console.log(logPrefix + sMethod);
        
        messageDialog.htmlConfirm(translate.translateKey("backButtonPrompt_message"), logOut, $.noop, translate.translateKey("backButtonPrompt_title"));
	}
    this.logOutClick = logOutClick;

	function logOut(argScreen)
	{
		var sMethod = 'logOut() ';
        console.log(logPrefix + sMethod);
        /*
        if(argScreen){
        	console.log(logPrefix + sMethod + " argScreen =" + argScreen);
        	argScreen.hide();
        }*/
        
        hidePendingScreen();
		forceExitFlow();
        activationItems.clearAllModels();        
        app.init();
	}
	this.logOut = logOut;
	
	function hidePendingScreen(){
		var sMethod = 'hidePendingScreen() ';
        console.log(logPrefix + sMethod);  
        if( app.navigationController.adhocPendingScreen!==null )
        	app.navigationController.adhocPendingScreen.destroy();
        if( app.navigationController.adhocPrintDemoScreen!==null )
        	app.navigationController.adhocPrintDemoScreen.destroy();
	}
	this.hidePendingScreen = hidePendingScreen;	
	
	function chooseProductClick()
	{
		var sMethod = 'chooseProductClick() ';
        console.log(logPrefix + sMethod);
        
        messageDialog.htmlConfirm(translate.translateKey("backButtonPrompt_message"), goToChooseProduct, $.noop, 
        						  translate.translateKey("backButtonPrompt_title"));
	}
	//---------------------------------------------------------------------------------------	
	function goToChooseProduct()
	{
		var sMethod = 'goToChooseProduct() ';
        console.log(logPrefix + sMethod);
        
        hidePendingScreen();        
		forceExitFlow();
        activationItems.clearToLoginScreen();        
        start();
	}
	
	function exitFlow_clearActivationItems_startOver(){
		forceExitFlow();
        activationItems.clearToLoginScreen();        
        start();		
	}
	
	function retrieveClick()
	{
		var sMethod = 'retrieveClick() ';
        console.log(logPrefix + sMethod);
        if(app.navigationController.adhocPendingScreen && !app.navigationController.adhocPendingScreen.isShown){
        	messageDialog.htmlConfirm(translate.translateKey("pendingScreen_Retrieve_InvocationMessage"), handleRetrieveClick, $.noop, translate.translateKey("pendingScreen_Retrieve_Title"));
        }else if(!app.navigationController.adhocPendingScreen && app.navigationController.adhocPendingScreen===null){
        	handleRetrieveClick();
        }else if(app.navigationController.adhocPendingScreen && app.navigationController.adhocPendingScreen.isShown ){
        	app.navigationController.adhocPendingScreen.clearFields();
        }
	}
	
	function handleRetrieveClick(){
		var sMethod = 'handleRetrieveClick() ';
        console.log(logPrefix + sMethod);
        
        //Instantiate and init the pending screen
        if( app.navigationController.adhocPendingScreen===null ){
            console.log(logPrefix + sMethod + " Instantiating pending screen for the first time...");
         	app.navigationController.adhocPendingScreen = new WICI.PendingScreenController(activationItems, translate, messageDialog, self);
         	app.navigationController.adhocPendingScreen.init(self, "RETRIEVEPEND", activeScreenName, null);
        }
        
        //Show the pending screen if not already showing
        if( app.navigationController.adhocPendingScreen!==null && !app.navigationController.adhocPendingScreen.isShown ){
            console.log(logPrefix + sMethod + " Attempting to show pending screen...");
        	exitFlow_clearActivationItems_startOver();
            
         	app.navigationController.adhocPendingScreen.show();
            activeScreen.hide();
         	bindSettingsButtonEvent();
         	return;
        }
        //When the user clicks again on "Retrieve Application" in the settings menu
        //and the pending screen is currently showing
        if(app.navigationController.adhocPendingScreen!==null && app.navigationController.adhocPendingScreen.isShown){
        	console.log(logPrefix + sMethod + " Pending screen already shown, just clear fields...");
        	
        	new WICI.LoadingScreenIndicator().show();
        	exitFlow_clearActivationItems_startOver();        	
        	app.navigationController.adhocPendingScreen.clearFields();
        	new WICI.LoadingScreenIndicator().hide();
        	return;
        }
		
	}
	
	function reEstablishWifiClick() {
		var deferred = WICI.WIFIHelper.createWICINetwork();
		deferred.done(function() {
			console.log('WIFIHelper.createWICINetwork success');
			messageDialog.info(translate.translateKey('settings_reEstablishWifiSuccess'), translate.translateKey("infoDialog_defaultTitle"));

		});
		deferred.fail(function(msg) {
			console.log('WIFIHelper.createWICINetwork fail: ' + msg);
			messageDialog.error(translate.translateKey('settings_reEstablishWifiFailure'), translate.translateKey("errorDialog_defaultTitle"));
		});
	}

	
	this.startApplication = goToChooseProduct;
	//---------------------------------------------------------------------------------------	
};
