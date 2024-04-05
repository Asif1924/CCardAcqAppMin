ensureNamespaceExists();

GENERICWEBAPP.SPARouter = function(activationItems, backOutFlowCallback, screensDefinitions, finishFlowCallback, terminateFlowAbruptly, translate, messageDialog) { 
	var self = this;

	var createdScreens = [];
	var activeScreenName = null;
	var activeScreen = null;
	var backStack = [];

	//entry point into flow
	function start() {
		showScreen(screensDefinitions['start'].transitionOut());
	}
	this.start = start;

	function showScreen(screenName) {
		activeScreen = createScreen(screenName);

		activeScreen.show();

		activeScreenName = screenName;
		afterPageLikelyShown();
	}
	this.showScreen = showScreen;

	function next() {
		
		// choose the next key, then show it
		var transitionOut = screensDefinitions[activeScreenName].transitionOut;
		nextFromTransitionFunction(transitionOut);
	}
	this.next = next;
	
	function nextAfterFailure() {
		
		// choose the next key, then show it
		nextFromTransitionFunction(retrieveTransitionFunctionOnFailure());
	}
	this.nextAfterFailure = nextAfterFailure;
	
	function retrieveTransitionFunctionOnFailure() {
		var transitionOnFailure = screensDefinitions[activeScreenName].transitionOnFailure;
		if(transitionOnFailure === undefined) {
			transitionOnFailure = function(){return "noAction";};
		}
		return transitionOnFailure;
	}
	

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
	
	function afterPageLikelyShown() {
		window.scrollTo(0, 0);
	}

	function back() {
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
	
	function backWithFailure() {
		back();
		if (activeScreen.returnedFromFailure !== undefined) {
			activeScreen.returnedFromFailure();
		}
	}
	this.backWithFailure = backWithFailure;
	
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

	function hasBack() {
		return backStack.length !== 0;
	}
	this.hasBack = hasBack;
	
	function finishFlow() {
		exitCurrentScreen();
		finishFlowCallback();
		afterPageLikelyShown();
	}
	
	function backOutOfFlow() {
		exitCurrentScreen();
		backOutFlowCallback();
		afterPageLikelyShown();
	}
	
	function forceExitFlow() {
		exitCurrentScreen();
		terminateFlowAbruptly();
		afterPageLikelyShown();
	}
	this.forceExitFlow = forceExitFlow;
	
	
	function backIntoParentFlow() {
		restoreActiveScreen();
	}
	this.backIntoParentFlow = backIntoParentFlow;

	function getActiveScreen() {
		return {
			screen : activeScreen,
			name : activeScreenName
		};
	}
	this.getActiveScreen = getActiveScreen;

	// implementation methods
	function createScreen(screen) {
		var screenConstructor = screensDefinitions[screen].screenConstructor;
		var newScreen = new screenConstructor(activationItems, translate, messageDialog );

		newScreen.init(self);

		return newScreen;
	}

	function defaultBack() {
		exitCurrentScreen();
		popActiveScreen();
		restoreActiveScreen();
	}
	
	function popActiveScreen() {
		var previousScreen = createdScreens.pop();
		activeScreenName = previousScreen.name;
		activeScreen = previousScreen.screen;
	}
	
	function restoreActiveScreen() {
		if (activeScreen.returnTo !== undefined) {
			activeScreen.returnTo();
		}

		activeScreen.show();
		afterPageLikelyShown();
	}
	
	function exitCurrentScreen() {
		activeScreen.hide();
	}
	
	function backToFlow() {
		defaultBack();
		
		//  The current screen was another flows screen
		var storedScreen = createdScreens.pop();
		activeScreenName = storedScreen.name;
		activeScreen = storedScreen.screen;
	}
	
};
