ensureNamespaceExists();

WICI.SettingsDialog = function(translate, isAdminProfile, isAdminRole, logOutCallback, chooseProductCallback, printerSetupCallback, testPrintCallback, retrieveCallback, toggleLanguageCallback, manageRepsCallback,
								title, logOutButton, chooseProductButton, printerSetupButton, testPrintButton, retrieveButton, toggleLanguageButton, manageRepsButton, chancelButton)
{
	var dialogViewHelper = new WICI.DialogViewHelper();
	
	var action = "";
	var showing = false;
	var isAdminUser = isAdminProfile;
	var isSuperAdminOrAdminRole = isAdminRole;
	
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
			chancelButton: chancelButton,
			retrieveButton: retrieveButton,
			retrieveButtonDisplayed: WICI.AppConfig.PendingFeature.AllowAppRetrieval,
			manageRepsButton: manageRepsButton
		}).appendTo("body");
		
		if(chooseProductCallback === null || chooseProductCallback === $.noop)
		{
			$('#settings_chooseProductButton').addClass('hideElement');
		}
		console.log("SetingsDialog : isSuperAdminOrAdminRole :: " + isSuperAdminOrAdminRole);
		// Hide MangeReps button for non Admin users
		if (!isSuperAdminOrAdminRole) {
		    $('#settings_manageRepsButton').addClass('hideElement');
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
		
		$("#settings_testPrintButton").on("click", function(event){
			action = "testPrint";
		});

		$("#settings_toggleLanguageButton").on("click", function(event){
			action = "toggleLanguage";
		});
		
		$("#settings_retrieveButton").on("click", function(event){
			action = "retrieve";
		});
		
		$("#settings_manageRepsButton").on("click", function(event){
			action = "manageReps";
		});
		
		$("#" + dialogViewHelper.getMessageDialogId()).one('pagehide.DART', function(){
			dialogViewHelper.removeDialog();
			try {
				switch(action) {
					case "logOut": logOutCallback();
						break;
					case "chooseProduct": chooseProductCallback();
						break;
					case "printerSetup": printerSetupCallback();
						break;
					case "testPrint": testPrintCallback();
						break;
					case "toggleLanguage": toggleLanguageCallback();
						break;
					case "retrieve": retrieveCallback();
						break;
					case "manageReps": manageRepsCallback();
						break;
					default:  throw new Error("invalid selection");
						break;
				}
			} catch (e) {
				console.log("Internal WICI error after Settings dialog box :: " + e);
			}
			showing = false;
			
			showNextDialogCallback();
		});
	}
			
};