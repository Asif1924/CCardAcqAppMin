ensureNamespaceExists();

BRB.HTMLConfirmEligibiltyReqirementMessageDialog = function(message, yesCallback, noCallback, yesButton, noButton){
	var dialogViewHelper = new BRB.DialogViewHelper();
	
	var answerIsYes = false;
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
		$("#htmlConfirmEligibilityReqirementMessageDialog-template").template("dialogTemplate");
		$.tmpl("dialogTemplate", {
			message : message,
			yesButton : yesButton,
			noButton : noButton
		}).appendTo("body");
	}
	
	function addEvents(showNextDialogCallback){
		// DANGER, we use .one( but remember to make sure the events don't stack up if making changes
		$("#confirm_confirmButton").one("click", function(event){
			answerIsYes = true;
		});
		
		$("#" + dialogViewHelper.getMessageDialogId()).one('pagehide.DART', function(){
			dialogViewHelper.removeDialog();
			try {
				if (answerIsYes)
					yesCallback();
				else
					noCallback();
			} catch (e) {
				BRB.Log("Internal BRB error after Confirm dialog box");
			}
			showing = false;
			showNextDialogCallback();
		});
	}
	
};