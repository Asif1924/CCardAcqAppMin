ensureNamespaceExists();

BRB.CreditDisclosureMessageDialog = function(costOfCreditDisclosure_Title, disclosureLeft1, disclosureRight1,
												disclosureLeft2, disclosureRight2, disclosureLeft3, disclosureRight3,
													disclosureLeft4, disclosureRight4, disclosureLeft5, disclosureRight5,
														disclosureLeft6, disclosureRight6, effectiveDate, printDownload_LinkText, 
															yesCallback, noCallback, title, yesButton, noButton, translator){
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
		$("#creditDisclosureMessageDialog-template").template("dialogTemplate");
		$.tmpl("dialogTemplate", {
			title : ' ',
			costOfCreditDisclosure_Title : costOfCreditDisclosure_Title,
			disclosureLeft1 : disclosureLeft1,
			disclosureRight1 : translator.translateKey("Overview_NS_DisclosureRight1"),
			disclosureLeft2 : disclosureLeft2,
			disclosureRight2 : translator.translateKey("Overview_NS_DisclosureRight2"),
			disclosureLeft3 : disclosureLeft3,
			disclosureRight3 : translator.translateKey("Overview_NS_DisclosureRight3"),
			disclosureLeft4 : disclosureLeft4,
			disclosureRight4 : translator.translateKey("Overview_NS_DisclosureRight4"),
			disclosureLeft5 : disclosureLeft5,
			disclosureRight5 : translator.translateKey("Overview_NS_DisclosureRight5"),
			disclosureLeft6 : disclosureLeft6,
			disclosureRight6 : translator.translateKey("Overview_NS_DisclosureRight6"),
			effectiveDate : translator.translateKey("Overview_NS_EffectiveDate"),
			printDownload_LinkText : translator.translateKey("overview_PrintDownload_LinkText"),
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