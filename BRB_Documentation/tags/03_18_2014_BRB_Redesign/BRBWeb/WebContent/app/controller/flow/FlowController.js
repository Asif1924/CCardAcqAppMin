ensureNamespaceExists();

BRB.FlowController = function(activationItems, backOutFlowCallback, screensDefinitions, finishFlowCallback, terminateFlowAbruptly, translate, messageDialog) { 
    var logPrefix = ' ---- [BRB.FlowController]::';
	var self = this;

	var createdScreens = [];
	var activeScreenName = null;
	var activeScreen = null;
	var backStack = [];
	//---------------------------------------------------------------------------------------	
	//entry point into flow
	function start() {
	    var sMethod = 'start() ';
        BRB.Log(logPrefix + sMethod);
        
		showScreen(screensDefinitions['start'].transitionOut());
	}
	this.start = start;
	//---------------------------------------------------------------------------------------	
	function showScreen(screenName) {
	    var sMethod = 'showScreen() ';
        BRB.Log(logPrefix + sMethod+' screenName:'+screenName);
        
		activeScreen = createScreen(screenName);

		activeScreen.show();

		activeScreenName = screenName;
		afterPageLikelyShown();
		
		bindLanguageButtonEvent();
	}
	this.showScreen = showScreen;
	//---------------------------------------------------------------------------------------	
	function next() {
	    var sMethod = 'next() ';
        BRB.Log(logPrefix + sMethod);
        
		// choose the next key, then show it
	    try{
	        var transitionOut = screensDefinitions[activeScreenName].transitionOut;
	        nextFromTransitionFunction(transitionOut);
	    }
	    catch(ex){
	        BRB.Log(logPrefix + sMethod +'ERROR!!! Exception:'+ex);
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
        BRB.Log(logPrefix + sMethod);
        
		var backCall = backStack.pop();
		
		// if nothing on the stack, exit flow
		if (backCall === undefined) {
			backOutOfFlow();
			return;
		}
		
		// call the function which was on the top of the back stack
		backCall();
		bindLanguageButtonEvent();
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
        BRB.Log(logPrefix + sMethod);
        
		exitCurrentScreen();
		finishFlowCallback();
		afterPageLikelyShown();
	}
	//---------------------------------------------------------------------------------------	
	function backOutOfFlow() {
		var sMethod = 'backOutOfFlow() ';
        BRB.Log(logPrefix + sMethod);
        
		exitCurrentScreen();
		backOutFlowCallback();
		afterPageLikelyShown();
	}
	//---------------------------------------------------------------------------------------
	function forceExitFlow() {
		var sMethod = 'forceExitFlow()';
		BRB.Log(logPrefix + sMethod);
		
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
        BRB.Log(logPrefix + sMethod);
        
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
        BRB.Log(logPrefix + sMethod);
        
		defaultBack();
		
		//  The current screen was another flows screen
		var storedScreen = createdScreens.pop();
		activeScreenName = storedScreen.name;
		activeScreen = storedScreen.screen;
	}
	//---------------------------------------------------------------------------------------	
	function bindLanguageButtonEvent()
	{
		var sMethod = 'bindLanguageButtonEvent() ';
        BRB.Log(logPrefix + sMethod);

        if($('.languageLink').length != 0)
		{
			$.each($('.languageLink'), function(index, item) {  
							    
				if ($(item).attr('inited') != 'true') {
		            $(item).attr('inited', 'true');
		            updateLanguageLink($(item));
		    			
		            $(item).click(function() {
		            	translate.toggleLanguage();
		            	updateLanguageLink($(this));
		    	    });
		        }
	        });
		}
	}
	//---------------------------------------------------------------------------------------
	function updateLanguageLink(link)
	{
		if(translate.isCurrentLanguageEnglish())
		{
			link.text("Francais");
		}
		else
		{
			link.text("English");
			
		}
	}
	//---------------------------------------------------------------------------------------	
	function logOutClick()
	{	    
	    var sMethod = 'logOutClick() ';
        BRB.Log(logPrefix + sMethod);
        
        messageDialog.htmlConfirm(translate.translateKey("settings_exitMessage"), logOut, $.noop, 
        						translate.translateKey("backButtonPrompt_title"));
	}
	//---------------------------------------------------------------------------------------	
	function logOut()
	{
		var sMethod = 'logOut() ';
        BRB.Log(logPrefix + sMethod);
        
		forceExitFlow();
        activationItems.clearAllModels();
        app.init();
	}
	this.logOut = logOut;
	//---------------------------------------------------------------------------------------	
	function chooseProductClick()
	{
		var sMethod = 'chooseProductClick() ';
        BRB.Log(logPrefix + sMethod);
        
        messageDialog.htmlConfirm(translate.translateKey("settings_exitMessage"), goToChooseProduct, $.noop, 
        						  translate.translateKey("backButtonPrompt_title"));
	}
	//---------------------------------------------------------------------------------------	
	function goToChooseProduct()
	{
		var sMethod = 'goToChooseProduct() ';
        BRB.Log(logPrefix + sMethod);
		
		forceExitFlow();
        activationItems.clearToLoginScreen();
        start();
	}
	
	this.startApplication = goToChooseProduct;
	//---------------------------------------------------------------------------------------	
};
