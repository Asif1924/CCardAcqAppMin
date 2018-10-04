ensureNamespaceExists();

BRB.HTMLCreditDisclosureInfo = function (startButton, yesCallback, translate ){
	
	var dialogViewHelper = new BRB.DialogViewHelper();
	var answerIsYes = false;
	var showing = false;
 	var translator = null;
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
		
		 translator = translate;
		
		$("#htmlCreditDisclosureInfo-template").template("dialogTemplate");
		
		$.tmpl("dialogTemplate", {
			message :                      translator.translateKey("creditDisclosure_TitleText"),
			overview_Title :               translator.translateKey("overview_CostOfCreditDisclosure_Title"),
			overview_NS_DisclosureLeft1 :  translator.translateKey("overview_NS_DisclosureLeft1") ,
			Overview_NS_DisclosureRight1 : translator.translateKey("Overview_NS_DisclosureRight1"),
			overview_NS_DisclosureLeft2 :  translator.translateKey("overview_NS_DisclosureLeft2"),
			Overview_NS_DisclosureRight2 : translator.translateKey("Overview_NS_DisclosureRight2"),
			overview_NS_DisclosureLeft3 :  translator.translateKey("overview_NS_DisclosureLeft3"),
			Overview_NS_DisclosureRight3 : translator.translateKey("Overview_NS_DisclosureRight3"),
			overview_NS_DisclosureLeft4 :  translator.translateKey("overview_NS_DisclosureLeft4") ,
			Overview_NS_DisclosureRight4 : translator.translateKey("Overview_NS_DisclosureRight4"),
			overview_NS_DisclosureLeft5 :  translator.translateKey("overview_NS_DisclosureLeft5") ,
			Overview_NS_DisclosureRight5 : translator.translateKey("Overview_NS_DisclosureRight5") ,
			overview_NS_DisclosureLeft6 :  translator.translateKey("overview_NS_DisclosureLeft6"),
			Overview_NS_DisclosureRight6 : translator.translateKey("Overview_NS_DisclosureRight6") ,
			Overview_NS_EffectiveDate :    translator.translateKey("Overview_NS_EffectiveDate"),
			overview_PrintDownload_LinkText : translator.translateKey("overview_PrintDownload_LinkText") ,
			startButton : startButton ,
			noButton :translator.translateKey("overview_startApplication_Button_Label")  
			
		}).appendTo("body");
	}
	
/*	function showOMXContent(){
		
		BRB.Log("showOMXContent method");
		$("#OMX_title").show();
		$("#OMX_image").show();
		$("#OMZ_title").hide();
		$("#OMZ_image").hide();
		$("#personalInfo_CTM_OMZ").hide();
		$("#personalInfo_CTM_OMX").show();
		$("#personalInfo_LegalText2_OMZ_ID").hide();
		$("#personalInfo_LegalText2_OMX_ID").show();
		$("#personalInfo_LegalText20_OMZ_ID").hide();
		$("#personalInfo_LegalText20_OMX_ID").show();
		
	  } */
	

	
	function addEvents(showNextDialogCallback) {
		// DANGER, we use .one( but remember to make sure the events don't stack
		// up if making changes
		/*$("#start_confirmButton").one("click", function(event) {
			(new BRB.DialogCloseHelper()).closeAllDialogs();
			showOMXContent();
		    $('body').unbind('touchmove');
			$('body').removeClass('stop-scrolling');
			showing = false;
			//showNextDialog();
			event.preventDefault();
			
		});*/
		
		$("#start_confirmButton").one("click", function(event){
			answerIsYes = true;
		  });
		
		$("#" + dialogViewHelper.getMessageDialogId()).one('pagehide.DART', function(){
			dialogViewHelper.removeDialog();
			try {
				if (answerIsYes){
					yesCallback();
				}
			 } catch (e) {
				BRB.Log("Internal BRB error after Confirm dialog box");
			 }
			showing = false;
			showNextDialogCallback();
		});
	  }
	
	
	
	

};