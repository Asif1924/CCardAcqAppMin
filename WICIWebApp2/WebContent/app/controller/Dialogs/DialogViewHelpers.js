ensureNamespaceExists();

WICI.DialogViewHelper = function() {

	var MESSAGE_DIALOG_ID = "messageDialog",
		autoCloseTimerId = null,
		dialogObj = null;

	function showDialog(){
		$.mobile.changePage('#' + MESSAGE_DIALOG_ID, 'pop', true, true);
		$('body').bind('touchmove', function(e){e.preventDefault();});
		$('body').addClass('stop-scrolling');
	}

	function removeDialog(){
		$("#" + MESSAGE_DIALOG_ID).remove();
		$('body').unbind('touchmove');
		$('body').removeClass('stop-scrolling');
	}

	function getMessageDialogId () {
		return MESSAGE_DIALOG_ID;
	}

	function startAutoCloseTimer (dialog, callback) {
		dialogObj = dialogObj || dialog;

	    autoCloseTimerId = setTimeout(function () {
	        if (dialogObj.isShowing()) {
	        	if (callback && typeof callback === 'function') {
	        		callback();
	        	}

	            $("#" + getMessageDialogId()).dialog('close');
	        }
	    }.bind(this), WICI.AppConfig.PrintDialogAutoCloseDelay);
	}

	function resetAutoCloseTimer () {
	    clearTimeout(autoCloseTimerId);
	    startAutoCloseTimer();
	}

	this.getMessageDialogId = getMessageDialogId;
	this.showDialog = showDialog;
	this.removeDialog = removeDialog;
	this.startAutoCloseTimer = startAutoCloseTimer;
	this.resetAutoCloseTimer = resetAutoCloseTimer;
};
