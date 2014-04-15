ensureNamespaceExists();

BRB.DialogQueue = function(){
	var stackRep = [];
	var currentDialog = null;
	
	this.enqueue = enqueue;
	
	function enqueue (dialog) {
		stackRep.push(dialog);
		showNextDialogIfPossible();
	}
	
	function showNextDialogIfPossible() {
		if((!currentDialog || !currentDialog.isShowing()) && stackRep.length != 0) {
			currentDialog = stackRep[0];
			stackRep.removeAt(0);
			currentDialog.show(showNextDialogIfPossible);
			$( "div[data-role='dialog']" ).css('z-index', '100');
		}
	}
};