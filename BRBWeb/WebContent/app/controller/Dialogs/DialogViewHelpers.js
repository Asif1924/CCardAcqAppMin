ensureNamespaceExists();

BRB.DialogViewHelper = function() {
	
	var MESSAGE_DIALOG_ID = "messageDialog";
	
	this.getMessageDialogId = getMessageDialogId;
	this.showDialog = showDialog;
	this.removeDialog = removeDialog;
	
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
	
};