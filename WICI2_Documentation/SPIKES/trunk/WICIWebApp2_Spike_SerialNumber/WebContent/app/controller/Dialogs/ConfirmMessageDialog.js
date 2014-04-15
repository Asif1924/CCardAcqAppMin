ensureNamespaceExists();

WICI.ConfirmMessageDialog = function(message, yesCallback, noCallback, title, yesButton, noButton){
	var dialogViewHelper = new WICI.DialogViewHelper();
	
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
		$("#confirmMessageDialog-template").template("dialogTemplate");
		$.tmpl("dialogTemplate", {
			title : title,
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
				console.log("Internal WICI error after Confirm dialog box");
			}
			showing = false;
			showNextDialogCallback();
		});
	}
	
};