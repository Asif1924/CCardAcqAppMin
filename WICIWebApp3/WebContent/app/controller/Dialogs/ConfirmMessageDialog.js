ensureNamespaceExists();

WICI.ConfirmMessageDialog = function(message, yesCallback, noCallback, title, yesButton, noButton, restrictnoCallbackOnClose, autoClose, autoCloseCallback) {
	var dialogViewHelper = new WICI.DialogViewHelper(),
	 	answerIsYes = false,
	 	showing = false;

	this.isShowing = isShowing;
	this.show = show;
	var restrictNoCallbackOnClose = {value: false}; //this must be an object to use "call by reference, not call by value"
	
	this.setRestrictNoCallback = function(val) {
		restrictNoCallbackOnClose.value = val;
	};

	function show(showNextDialogCallback) {
		appendDialog();
		dialogViewHelper.showDialog();
		addEvents(showNextDialogCallback);
		showing = true;

		if (autoClose) {
			dialogViewHelper.startAutoCloseTimer(this, autoCloseCallback);
		}
	}

	function isShowing() {
		return showing;
	}

	function appendDialog() {
		$("#confirmMessageDialog-template").template("dialogTemplate");
		$.tmpl("dialogTemplate", {
			title : title,
			message : message,
			yesButton : yesButton,
			noButton : noButton
		}).appendTo("body");
	}

	function addEvents(showNextDialogCallback) {
		// DANGER, we use .one( but remember to make sure the events don't stack up if making changes
		$("#confirm_confirmButton").one("click", function(event){
			answerIsYes = true;
		});

		$("#" + dialogViewHelper.getMessageDialogId()).one('pagehide.DART', {restrictNoCallbackOnClose: restrictNoCallbackOnClose}, function(event) {
			dialogViewHelper.removeDialog();
			try {
				if (answerIsYes)
					yesCallback();
				else
					if (!event.data.restrictNoCallbackOnClose.value) {
						noCallback();
					}
			} catch (e) {
				console.log("Internal WICI error after Confirm dialog box");
			}
			showing = false;
			showNextDialogCallback();
		});
	}

};
