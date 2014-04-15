ensureNamespaceExists();

WICI.DialogViewHelper = function() {
	
	var MESSAGE_DIALOG_ID = "messageDialog";
	
	this.getMessageDialogId = getMessageDialogId;
	this.showDialog = showDialog;
	this.removeDialog = removeDialog;
	
	function showDialog(){
		$.mobile.changePage('#' + MESSAGE_DIALOG_ID, 'pop', true, true);
	}
	
	function removeDialog(){
		$("#" + MESSAGE_DIALOG_ID).remove();
	}
	
	function getMessageDialogId () {
		return MESSAGE_DIALOG_ID;
	}
	
};