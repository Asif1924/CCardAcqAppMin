ensureNamespaceExists();

WICI.ConfirmMessageDialog = function(message, yesCallback, noCallback, title, yesButton, noButton, restrictnoCallbackOnClose, autoClose, autoCloseCallback) {
	var dialogViewHelper = new WICI.DialogViewHelper(),
	 	answerIsYes = false,
	 	showing = false;
    var checkDialogClose = false;	 	

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
		checkDialogClose = true;
		console.log("checkDialogClose"+checkDialogClose);
		
		$("#confirm_confirmButton").one("click", function(event){
			answerIsYes = true;
			checkDialogClose = false;
		});
   
       $("#confirm_cancelButton").one("click", function(event){
			answerIsYes = false;
			checkDialogClose = false;			
		});
                       
		$("#" + dialogViewHelper.getMessageDialogId()).one('pagehide.DART', {restrictNoCallbackOnClose: restrictNoCallbackOnClose}, function(event) {
			dialogViewHelper.removeDialog();
			try {
			    
				if (answerIsYes){
				     checkDialogClose = false;
				     console.log("checkDialogClose"+checkDialogClose);
				     console.log("answerIsYes" + answerIsYes +"yesCallback()");
					 yesCallback();
				}	
				else {
				        if(!checkDialogClose){
				           checkDialogClose = false;
				           if (!event.data.restrictNoCallbackOnClose.value) {
					           console.log("answerIsYes" + answerIsYes +"noCallback()");
						       noCallback();
					       } 
					     }else{
					         console.log("checkDialogClose"+checkDialogClose);
				             console.log("answerIsYes" + answerIsYes +"yesCallback()");
					         yesCallback();
					     }
				}
				
			} catch (e) {
				console.log("Internal WICI error after Confirm dialog box");
			}
			showing = false;
			showNextDialogCallback();
		});
	}

};
