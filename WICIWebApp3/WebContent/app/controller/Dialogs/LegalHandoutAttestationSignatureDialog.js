ensureNamespaceExists();

WICI.LegalHandoutAttestationSignatureDialog = function(message,pleasesign,clearsignature, yesCallback, noCallback, title, yesButton, noButton){
	var dialogViewHelper = new WICI.DialogViewHelper();
	
	var answerIsYes = false;
	var showing = false;
	var signatureControl;
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
		$("#legalHandoutAttestationSignatureDialog-template").template("dialogTemplate");
		$.tmpl("dialogTemplate", {
			title : title,
			message : message,
			pleasesign_text : pleasesign,
			clearsignature_text : clearsignature,
			yesButton : yesButton,
			noButton : noButton
		}).appendTo("body");
	}
	
	function addEvents(showNextDialogCallback){
		

		// Initialize signature if it not jet initialized
		if (!signatureControl) {
		    // This is the part where jSignature is initialized.
			signatureInit();

		    $("#signatureLegalHandOut").bind('change', onSignatureChaged);
		    
		}
		showHideYesNoButton();
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
	
	function signatureInit() {
		if ($("#signatureLegalHandOut").jSignature('getData', 'native')) {
			signatureControl = $("#signatureLegalHandOut").jSignature({
				'signatureLine' : true
			});
			$("#signatureLegalHandOut").jSignature('setData',
					$("#signatureLegalHandOut").jSignature('getData', 'native'), 'native');
			onSignatureChaged();
		} else {
			// This is the part where jSignature is initialized.
			signatureControl = $("#signatureLegalHandOut").jSignature();
		}
	}
	
	function onSignatureChaged (e) {
	    var sMethod = 'onSignatureChaged() ';
        console.log(sMethod);
        showHideYesNoButton();
        if ($("#signatureLegalHandOut").jSignature('getData', 'native').length > 0) {
            $("#signature_Reset_Button_legalHandout").removeClass('grayflat');
            //$(refs.resetSignature).addClass('darkgrayflat');
            $("#signature_Reset_Button_legalHandout").addClass('blackflat');
            $("#signature_Reset_Button_legalHandout").bind('click', onResetSignatureClicked);
        }
       
	}
	function onResetSignatureClicked () {
	    var sMethod = 'onResetSignatureClicked() ';
	    console.log(sMethod);
	    $("#signatureLegalHandOut").jSignature ('setData', [], 'native');
        //$(refs.resetSignature).removeClass('darkgrayflat');
	    $("#signature_Reset_Button_legalHandout").removeClass('blackflat');
        $("#signature_Reset_Button_legalHandout").addClass('grayflat');
        $("#signature_Reset_Button_legalHandout").unbind('click', onResetSignatureClicked);
	}
	function showHideYesNoButton(){
	    if ($("#signatureLegalHandOut").jSignature('getData', 'native').length > 0){
	       showYesNoBtn();
	    }else {
	       hideYesNoBtn();
	    }        
	}
	
	function showYesNoBtn () {
	  $("#YesNoButtonContainer").show();
	  $('#YesNoButtonContainer').css('display', '');
	}

	function hideYesNoBtn () {
	  $("#YesNoButtonContainer").hide();
	}
	
};