ensureNamespaceExists();

BRB.SettingsDialog = function(isAdminProfile, logOutCallback, chooseProductCallback, printerSetupCallback, title, 
								logOutButton, chooseProductButton, printerSetupButton, chancelButton)
{
	var dialogViewHelper = new BRB.DialogViewHelper();
	
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
			chooseProductButton : chooseProductButton,
			printerSetupButton	: printerSetupButton,
			chancelButton : chancelButton
		}).appendTo("body");
		
		if(chooseProductCallback === null || chooseProductCallback === $.noop)
		{
			$('#settings_chooseProductButton').addClass('hideElement');
		}
		
		// Hide Printer Setup button for non Admin users
		if (!isAdminUser) {
		    $('#settings_printerSetupButton').addClass('hideElement');
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
		
		$("#settings_chancelButton").on("click", function(event){
			action = "";
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
				
			} catch (e) {
				BRB.Log("Internal BRB error after Settings dialog box");
			}
			showing = false;
			
			showNextDialogCallback();
		});
	}
	
};