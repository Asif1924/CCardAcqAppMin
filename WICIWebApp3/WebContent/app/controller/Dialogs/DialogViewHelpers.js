ensureNamespaceExists();

WICI.DialogViewHelper = function() {

	var MESSAGE_DIALOG_ID = "messageDialog",
		autoCloseTimerId = null,
		dialogObj = null;

	function showDialog(){
		$.mobile.changePage('#' + MESSAGE_DIALOG_ID, 'pop', true, true);
		$('body').bind('touchmove', function(e){e.preventDefault();});
		$('body').addClass('stop-scrolling');
		$('html').addClass('stop-htmlscroll');
	}

	function removeDialog(){
		$("#" + MESSAGE_DIALOG_ID).remove();
		$('body').unbind('touchmove');
		$('body').removeClass('stop-scrolling');
		$('html').removeClass('stop-htmlscroll');
	}

	function getMessageDialogId () {
		return MESSAGE_DIALOG_ID;
	}

	function startAutoCloseTimer (dialog, callback, timeout, restrictDialogNoCallback) {
		dialogObj = dialogObj || dialog;
		var timeout = timeout || WICI.AppConfig.PrintDialogAutoCloseDelay;
	    autoCloseTimerId = setTimeout(function () {
	        if (dialogObj.isShowing()) {
	        		if (restrictDialogNoCallback && dialog.setRestrictNoCallback) {
	        			dialog.setRestrictNoCallback(true);
	        		}
	        	
	        	if (callback && typeof callback === 'function') {
	        		callback();
	        	}

	            $("#" + getMessageDialogId()).dialog('close');
	        }
	    }.bind(this), timeout);
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
