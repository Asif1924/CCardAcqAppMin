ensureNamespaceExists();

BRB.OkDialog = function(message, title, buttonLabel, callback, uiDecoration, dialogTemplate) {
	var itemizedList;
	var liClass;
	
	var showing = false;
	var dialogViewHelper = new BRB.DialogViewHelper();
	
	this.show = show;
	this.isShowing = isShowing;
	
	function show(showNextDialogCallback){
		initializeDisplayOptions();
		appendDialog();
		dialogViewHelper.showDialog();
		addEvents(showNextDialogCallback);
		showing = true;
	}
	
	function isShowing() {
		return showing;
	}
	

	function initializeDisplayOptions() {
		itemizedList = false;
		liClass = "";
		if (uiDecoration) {
			if (uiDecoration.itemizedList)
				itemizedList = true;
			if (uiDecoration.liClass)
				liClass = uiDecoration.liClass;
		}
	}
	
	function addEvents(showNextDialogCallback){
		$("#" + dialogViewHelper.getMessageDialogId()).one('pagehide.DART',function() {
			dialogViewHelper.removeDialog();
			try {
				callback();
			} catch (e) {
				BRB.Log("BRB.OkDialog.addEvents: Internal DART error after OK dialog box");
			}
			showing = false;

			showNextDialogCallback();
		});		
		
		$("#launchAndroidBrowser").click(function(){			
			BRB.Log("BRB.OkDialog.addEvents: launchAndroidBrowser clicked");
			navigator.app.loadUrl(BRB.stubUpgradeHyperlink, { openExternal:true } );
		});
		
		$("#launchSafari").click(function(){			
			BRB.Log("BRB.OkDialog.addEvents: launchSafari clicked");
			navigator.app.loadUrl(BRB.stubUpgradeHyperlink, { openExternal:true } );
		});

	}
	
	function appendDialog(){
		$("#" + dialogTemplate).template("dialogTemplate");
		$.tmpl("dialogTemplate", {
			title : title,
			message : message,
			itemizedList : itemizedList,
			liClass : liClass,
			button : buttonLabel,
			messageDialogId : dialogViewHelper.getMessageDialogId()
		}).appendTo("body");
	}	
	
};