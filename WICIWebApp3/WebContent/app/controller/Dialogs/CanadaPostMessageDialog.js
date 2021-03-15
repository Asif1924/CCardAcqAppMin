ensureNamespaceExists();

WICI.CanadaPostMessageDialog = function(scannedAddressTitle, scannedAddressMessage, canadaPostTitle, canadaPostMessage, yesCallback, noCallback, title, acceptButton, continueButton){
	var dialogViewHelper = new WICI.DialogViewHelper();
	
	var answerIsYes = false;
	var answerIsNo = false;
	var showing = false;
	
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
		$("#canadaPostMessageDialog-template").template("dialogTemplate");
		$.tmpl("dialogTemplate", {
			title: title,
			scannedAddressTitle : scannedAddressTitle,
			scannedAddressMessage : scannedAddressMessage,
			canadaPostTitle : canadaPostTitle,
			canadaPostMessage : canadaPostMessage,
			acceptButton : acceptButton,
			continueButton : continueButton
		}).appendTo("body");
	}
	
	function addEvents(showNextDialogCallback){
		// DANGER, we use .one( but remember to make sure the events don't stack up if making changes
		$("#confirm_confirmButton").one("click", function(event){
			answerIsYes = true;
		});
		
		$("#confirm_cancelButton").one("click", function(event){
			answerIsNo = true;
		});
		
		$("#" + dialogViewHelper.getMessageDialogId()).one('pagehide.DART', function(){
			dialogViewHelper.removeDialog();
			try {
				if (answerIsYes)
					yesCallback();
				else if(answerIsNo)
					noCallback();
				else
					throw new Error("invalid selection");
			} catch (e) {
				console.log("Internal WICI error after Confirm dialog box" + e);
			}
			showing = false;
			showNextDialogCallback();
		});
	}
	
};