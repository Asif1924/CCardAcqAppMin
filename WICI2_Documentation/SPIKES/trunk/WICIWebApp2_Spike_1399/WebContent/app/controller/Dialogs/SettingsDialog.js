ensureNamespaceExists();

WICI.SettingsDialog = function(translate, isAdminProfile, logOutCallback, chooseProductCallback, printerSetupCallback, testPrintCallback, toggleLanguageCallback,  
								title, logOutButton, chooseProductButton, printerSetupButton, testPrintButton, toggleLanguageButton, chancelButton)
{
	var dialogViewHelper = new WICI.DialogViewHelper();
	
	var action = "";
	var showing = false;
	var isAdminUser = isAdminProfile;
	
	this.isShowing = isShowing;
	this.show = show;
	
	function show(showNextDialogCallback) {
		appendDialog();
		dialogViewHelper.showDialog();
		addEvents(showNextDialogCallback);
		showing = true;
	}

	function isShowing() {
		return showing;
	}
	
	function appendDialog(){
		$("#settingsDialog-template").template("dialogTemplate");
		$.tmpl("dialogTemplate", {
			title : title,
			logOutButton : logOutButton,
			chooseProductButton: chooseProductButton,
			printerSetupButton: printerSetupButton,
			testPrintButton: testPrintButton,
			toggleLanguageButton: toggleLanguageButton,
			chancelButton: chancelButton
		}).appendTo("body");
		
		if(chooseProductCallback === null || chooseProductCallback === $.noop)
		{
			$('#settings_chooseProductButton').addClass('hideElement');
		}
		
		// Hide Printer Setup button for non Admin users
		if (!isAdminUser) {
		    $('#settings_printerSetupButton').addClass('hideElement');
		}
		
		if(testPrintCallback === null || testPrintCallback === $.noop)
		{
			$('#settings_testPrintButton').addClass('hideElement');
		}
		
		if(translate.getCurrentLanguageFSDPFormat() === 'E') 
		{
			$('#settings_toggleLanguageButton').text("Français");
		} 
		else 
		{
			$('#settings_toggleLanguageButton').text("English");
		}
		
		if(toggleLanguageCallback === null || toggleLanguageCallback === $.noop)
		{
			$('#settings_toggleLanguageButton').addClass('hideElement');
		}		
	}
	
	function addEvents(showNextDialogCallback){
		// DANGER, we use .one( but remember to make sure the events don't stack up if making changes
		$("#settings_logOutButton").on("click", function(event){
			action = "logOut";
		});
		
		$("#settings_chooseProductButton").on("click", function(event){
			action = "chooseProduct";
		});
		
		$("#settings_printerSetupButton").on("click", function(event){
			action = "printerSetup";
		});
		
		$("#settings_printerSetupButton").on("click", function(event){
			action = "printerSetup";
		});		
		
		$("#settings_testPrintButton").on("click", function(event){
			action = "testPrint";
		});

		$("#settings_toggleLanguageButton").on("click", function(event){
			action = "toggleLanguage";
		});
		
		$("#" + dialogViewHelper.getMessageDialogId()).one('pagehide.DART', function(){
			dialogViewHelper.removeDialog();
			try {
				if (action === "logOut")
				{
					logOutCallback();
				}
				else if(action === "chooseProduct")
				{
					chooseProductCallback();
				}
				else if(action === "printerSetup")
				{
					printerSetupCallback();
				}
				else if(action === "testPrint")
				{
					testPrintCallback();
				}	
				else if(action === "toggleLanguage")
				{
					toggleLanguageCallback();
				}
				
			} catch (e) {
				console.log("Internal WICI error after Settings dialog box :: " + e);
			}
			showing = false;
			
			showNextDialogCallback();
		});
	}
	
};