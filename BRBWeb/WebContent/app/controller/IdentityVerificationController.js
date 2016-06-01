ensureNamespaceExists();

BRB.IdentityVerificationController = function(activationItems, argTranslator, argMessageDialog) {
    var logPrefix = '[BRB.IdentityVerificationController]::';
	var $screenContainer = $("#IdentityVerificationScreen");

	var translator = null;
	var messageDialog = null;
	var connectivityController = null;
	var indexOfPressedButtons = [];
	this.show = show;
	this.init = init;
	this.hide = hide;
	
	var flow = null;
	var  identityExamQuestionTimer = null;
	var tuFailed = false;

	//---------------------------------------------------------------------------------------
	this.syncUserData = syncUserData; 
    var refs = {
    		cardsContainer					:	'#IdentityVerification_CardsContainer',
    		examTable						:   '#identityVerification_ExamTable',
    		continueButtonContainer			:   '#identityVerification_continueButtonContainer',
    		continueButton					:   '#identityVerification_ContinueButton',
    		
    		subminQuestion1Button			:   '#identityVerification_Question1Submit',
    		subminQuestion1Rect				:	"#identityVerification_Question1SubmitRect",
    		subminQuestion1Triangle			:   '#identityVerification_Question1SubmitTriangle',
    		Question1SubmitContainer		:   '#identityVerification_Question1SubmitContainer',
    		
    		subminQuestion2Button			:   '#identityVerification_Question2Submit',
    		subminQuestion2Rect				:	"#identityVerification_Question2SubmitRect",
    		subminQuestion2Triangle			:   '#identityVerification_Question2SubmitTriangle',
    		Question2SubmitContainer		:   '#identityVerification_Question2SubmitContainer',
    		
    		subminQuestion3Button			:   '#identityVerification_Question3Submit',
    		subminQuestion3Rect				:	"#identityVerification_Question3SubmitRect",
    		subminQuestion3Triangle			:   '#identityVerification_Question3SubmitTriangle',
    		Question3SubmitContainer		:   '#identityVerification_Question3SubmitContainer',
    		
    		subminQuestion4Button			:   '#identityVerification_Question4Submit',
    		subminQuestion4Rect				:	"#identityVerification_Question4SubmitRect",
    		subminQuestion4Triangle			:   '#identityVerification_Question4SubmitTriangle',
    		Question4SubmitContainer		:   '#identityVerification_Question4SubmitContainer',
    		
    		userName						:	'#identityVerification_UserName',
    		userNameFull					:	'#identityVerification_UserNameFull',
    		
    		exam1							:	'#exam1',
    		exam1_Answer					:	'input[name=Exam1_Answer]',
    		
    		exam2							:	'#exam2',
    		exam2_Answer					:	'input[name=Exam2_Answer]',
    		
    		exam3							:	'#exam3',
    		exam3_Answer					:	'input[name=Exam3_Answer]',
    		
    		exam4							:	'#exam4',
    		exam4_Answer					:	'input[name=Exam4_Answer]',
    		
    		examFinalStep					:	'#examFinalStep',
    		examFinalStepPending			:	'#examFinalStepPending',
    		tuPendingending					:	'#tu_pendingending',
    		customerEmail					:	'#identityVerification_customerEmail',
    		userNameFull					:	'#identityVerification_UserNameFull',
    		cardNumber						:	'#identityVerification_CardNumber',
    		cardPanNumber					:	'#identityVerification_Pan_Number',
    		cardLimit						:	'#identityVerification_CardLimit',
    		cardAPR							:	'#identityVerification_CardAPR',
    		continueShoppingBuutonId2		:	'#continueShoppingBuutonId2',
    		continueShoppingBuutonId1		:	'#continueShoppingBuutonId1',
    		languageButton 					: 	'#IdentityVerification_LanguageButton',
    		footerNote	 					: 	'#identityVerification_FooterNote',
    		continueButton	 				: 	'.continueButtonClick',
    		titleBlock 						:   '#identityVerification_TitleBlock'
    			
    };
    var model = new BRB.BaseModel({
        name: 'identityVerification',
        refs: refs, 
        data:[
              { name: 'tuExamResult',    value: null, validation: null },
              { name: 'transactionId',    value: null, validation: null },
              { name: 'maskedPan',    value: null, validation: null },
              { name: 'cashApr',    value: null, validation: null },
              { name: 'apr',    value: null, validation: null },
              { name: 'creditLimit',    value: null, validation: null },
              { name: 'expiryDate',    value: null, validation: null }
       ]
    });        
    //---------------------------------------------------------------------------------------
	function init( argFlow ) {
        var sMethod = 'init() ';
        BRB.Log(logPrefix + sMethod);
        BRB.AppConfig.TrackingScreenID = 11;
        flow = argFlow;        
        translator = argTranslator;         //(AA)Dependency Injection Principle: Allows for proper unit testing
        messageDialog = argMessageDialog;   //(AA)Dependency Injection Principle: Allows for proper unit testing
		
		connectivityController = new BRB.ConnectivityController(new BRB.ConnectionStatus(), messageDialog, translator, BRB.AppConfig.ConnectivityConfig);
		connectivityController.init();
		
        if (!activationItems) {
            BRB.Log(logPrefix + sMethod + ' "activationItems" is null!!!');
            activationItems = {};
        }
        var currentModel = activationItems.getModel(model.name);
        if (!currentModel) {
            activationItems.addModel(model);
        } else {
            model = currentModel;
        }
		
        // Initialize IidentityExam question timer 
        identityExamQuestionTimer = new BRB.IdentityExamQuestionTimer();
        
		createView();
		bindEvents();
		fillControlsWithData();	
		
		// Hide language button
		$(refs.languageButton).hide();
	}    
	//---------------------------------------------------------------------------------------
	function fillControlsWithData()
	{
		var sMethod = 'fillControlsWithData() ';
		BRB.Log(logPrefix + sMethod);
		
		var currentModel = activationItems.getModel('personalInformation');
        if (currentModel !== null) {
            var userData = currentModel.get('firstName') + ' ' + currentModel.get('lastName');
            $(refs.userName).text(userData.substring(0, 13));
            $(refs.userNameFull).text(userData);
            $(refs.customerEmail).attr('href','mailto:'+currentModel.get('email'))
            					 .text(currentModel.get('email'));
        }
	}
	//---------------------------------------------------------------------------------------
    function syncUserData(){
        var sMethod = 'syncUserData() ';
        BRB.Log(logPrefix + sMethod);
        BRB.Log(logPrefix + sMethod +' model data: \n'+model.toString());
    }
    //---------------------------------------------------------------------------------------
	function show(){
		$screenContainer.show();
		translator.run("IdentityVerificationScreen");
		var identityExamModel = app.identityExamHelper.getIdentityExamModel();
		if (identityExamModel.isIdentityExamResponseValid()){
			setQuestions(identityExamModel);
			new BRB.LoadingIndicatorController().hide();
		} else {
			tuFailed = true;
	        var adjudicationModel = app.adjudicationHelper.getAdjudicationModel();
	        if (adjudicationModel.getIsSuccessful()){
	        	adjudicationSuccess(adjudicationModel.getAdjudicationResponseObject());
	        }else{
	        	adjudicationFailed(adjudicationModel.getAdjudicationResponseObject());
	        }
		}
		
		// Start answer timer
		updateIdentityExamQuestionTimer();
		
		// Work around IE8 page-proofs issue
		updatePageStylesheet();
	}
	//---------------------------------------------------------------------------------------
	function updatePageStylesheet() {
		// Work around IE8 round corners issue
		var ieUIHelper = new BRB.IeUIHelper();				

		ieUIHelper.roundLeftCornersForTag(
										  [$("#identityVerification_Question1SubmitRect"),
		                                   $("#identityVerification_Question2SubmitRect"),
		                                   $("#identityVerification_Question3SubmitRect"),
		                                   $("#identityVerification_Question4SubmitRect"),
		                                   $("#identityVerification_ContinueButton1Rect"),
		                                   $("#identityVerification_ContinueButton2Rect")],		                                   
		                                   10);
	}
	//---------------------------------------------------------------------------------------
	function hide(){
		$screenContainer.hide();
	}
	//---------------------------------------------------------------------------------------
	function createView() {
		$screenContainer.empty();
		assembleNavigationBarAtTop();		
		assemblePageHTML($screenContainer, "#BRBIdentityVerification-template");			
		$screenContainer.find('#BreadcrumbTrailArea1').addClass('breadcrumbPaddingConfirmation');
	}	
	//---------------------------------------------------------------------------------------	
	function assembleNavigationBarAtTop() {
        $("#pageHeader-template").template("pageHeader");
        $.tmpl("pageHeader", {
        	"switchLanguageButtonId" : "IdentityVerification_LanguageButton"
            /*"previousButtonId" : "IdentityVerification_PrevButton",*/
        }).appendTo("#IdentityVerificationScreen");
    }
	//---------------------------------------------------------------------------------------
	function assemblePageHTML($element, templateName) {
		var html = $(templateName).tmpl(); 
		$element.append(html);
	}
	//---------------------------------------------------------------------------------------
	function setQuestions(identityExamModel, questionIndex){		
		for (var i = 0; i < identityExamModel.getQuestions().length; i++){
			$('#question'+ (questionIndex ? questionIndex: i)).text(identityExamModel.getQuestions()[i].text);
			for(var j = 0; j < identityExamModel.getQuestions()[i].possibleAnswers.length; j++){
				$('#Exam'+(questionIndex ? questionIndex: i)+'Answer'+j).text(identityExamModel.getQuestions()[i].possibleAnswers[j].text)
				.parent().parent().removeClass('hideElement');
			}
		}
	}
	//---------------------------------------------------------------------------------------
	function setFourthQuestion() {
		var identityExamModel = app.identityExamHelper.getIdentityExamModel();
		setQuestions(identityExamModel, 3);
	}
	//---------------------------------------------------------------------------------------
    function bindEvents(){
	    var sMethod = 'bindEvents() ';
        BRB.Log(logPrefix + sMethod);
        
		bindNavigationButtons();
		
		$(refs.continueButton).on("mousedown mouseup", function(e){
		    $(refs.continueButton).toggleClass( "active", e.type === "mousedown" );
		});
		
		$(refs.subminQuestion1Button).on("mousedown mouseup", function(e){
		    $(refs.subminQuestion1Button).toggleClass( "active", e.type === "mousedown" );
		});
		
		$(refs.subminQuestion2Button).on("mousedown mouseup", function(e){
		    $(refs.subminQuestion2Button).toggleClass( "active", e.type === "mousedown" );
		});
		
		$(refs.subminQuestion3Button).on("mousedown mouseup", function(e){
		    $(refs.subminQuestion3Button).toggleClass( "active", e.type === "mousedown" );
		});
		
		$(refs.subminQuestion4Button).on("mousedown mouseup", function(e){
		    $(refs.subminQuestion4Button).toggleClass( "active", e.type === "mousedown" );
		});
		
		$(refs.exam1_Answer).change(function() {
			enableButton(1);
		});
		
		$(refs.exam2_Answer).change(function() {
			enableButton(2);
		});
		
		$(refs.exam3_Answer).change(function() {
			enableButton(3);
		});
		
		$(refs.exam4_Answer).change(function() {
			enableButton(4);
		});
		
		$(refs.languageButton).on("mouseup", function() {
			updateNumericValuesFormat();
        });        		
		
		disableButtons();
		
		$(refs.continueButton).on("mouseup", function(){
			app.closeBRBWebWindow();
		});
	}	
    //---------------------------------------------------------------------------------------
    function updateNumericValuesFormat() {
		var cardLimitText = $(refs.cardLimit).text();
		var cardAPRText = $(refs.cardAPR).text();
		
		if (translator.isCurrentLanguageEnglish()) {
			if (cardLimitText) {
				$(refs.cardLimit).text(cardLimitText.toString().replace('$', '').replace(',', ' ') + ' $');
			}
			if (cardAPRText) {
				$(refs.cardAPR).text(cardAPRText.toString().replace('%', '').replace('.', ',') + ' %');
			}
		} else {
			if (cardLimitText) {
				$(refs.cardLimit).text('$' + cardLimitText.toString().replace(' $', '').replace(' ', ','));
			}
			if (cardAPRText) {
				$(refs.cardAPR).text(cardAPRText.toString().replace(' %', '').replace(',', '.') + '%');
			}			
		}
    }
	//---------------------------------------------------------------------------------------
	function bindNavigationButtons(){
        $('#IdentityVerification_PrevButton').on("mouseup", function() {
        	showPrevScreen();
        });        		
	}
	//---------------------------------------------------------------------------------------
	function showPrevScreen(){
	    syncUserData();
	    BRB.AppConfig.TrackingScreenID = 5;
		flow.back();
	}
	//---------------------------------------------------------------------------------------
	function enableButton(index) {
		updateSibmitQuestionBtn(index);
	}
	//---------------------------------------------------------------------------------------
	function updateSibmitQuestionBtn(questionIndex) {
		$('#identityVerification_Question' + questionIndex + 'SubmitRect').removeClass('continueButtonInactiveBG');        	  
		$('#identityVerification_Question' + questionIndex + 'SubmitTriangle').removeClass('continueButtonGrayTriangle');
		
		$('#identityVerification_Question' + questionIndex + 'Submit').on("mouseup", function() {
			// Get IdentityExamModel
			if(indexOfPressedButtons[questionIndex]) return;
			indexOfPressedButtons[questionIndex] = true;
			var identityExamModel = app.identityExamHelper.getIdentityExamModel();

			var arrayIndex = questionIndex == 4 ? 0 : questionIndex - 1;
			
			// Save answer id
			identityExamModel.setAnswerId(arrayIndex, $('input[name=Exam' + questionIndex + '_Answer]:checked').val());
				
			// Save answer time
			identityExamModel.setAnswerTime(arrayIndex, identityExamQuestionTimer.getAnswerTotalSeconds());
			
			// Hide current question
			if (questionIndex < 3){
				$('#exam' + questionIndex).hide();
			}		
						
			// Send request to the server for 3th and 4th questions
			if (questionIndex == 3 || questionIndex == 4) { 			
				invokeScoreIdentityExam(scoreIdentityExamSuccess, scoreIdentityExamFail);
			}
			
			// Reset timer
			updateIdentityExamQuestionTimer();
		});	
	}
	//---------------------------------------------------------------------------------------
	function disableButtons(){
		$(refs.exam4).hide();
		$(refs.subminQuestion1Rect).addClass('continueButtonInactiveBG');        	  
		$(refs.subminQuestion1Triangle).addClass('continueButtonGrayTriangle'); 
		$(refs.subminQuestion2Rect).addClass('continueButtonInactiveBG');        	  
		$(refs.subminQuestion2Triangle).addClass('continueButtonGrayTriangle'); 
		$(refs.subminQuestion3Rect).addClass('continueButtonInactiveBG');        	  
		$(refs.subminQuestion3Triangle).addClass('continueButtonGrayTriangle'); 
		$(refs.subminQuestion4Rect).addClass('continueButtonInactiveBG');        	  
		$(refs.subminQuestion4Triangle).addClass('continueButtonGrayTriangle');
	}
	//---------------------------------------------------------------------------------------
	function invokeScoreIdentityExam( argSuccessCB, argFailureCB ){
		// Stop session timeout service

		app.sessionTimeoutActionService.stop();
		
		// Show loading indicator
		new BRB.LoadingIndicatorController().showIdentityVerificationLoading(translator.translateKey("confirmation_ScreenIndicator"));
		var identityExamModel = app.identityExamHelper.getIdentityExamModel();
		connectivityController.ScoreIdentityExam(identityExamModel.getIdentityExamObject(), argSuccessCB, argFailureCB);		
	}
	//---------------------------------------------------------------------------------------
	function scoreIdentityExamSuccess( argResponse ){
		var sMethod = "scoreIdentityExamSuccess(argResponse)";
		BRB.Log(sMethod + '::Response::' + argResponse);
		if (argResponse.error == true) {
			BRB.Log(sMethod + '::Response Error::' + argResponse.msg);
			showErrorPendingScreen();
			return;
		}
		var identityExamModel = app.identityExamHelper.updateIdentityExamResponseObject(argResponse);
		if (identityExamModel.isFourthQuestionPresentInResponse()) {
			BRB.Log(sMethod + '::Fourth Question Presents In Response');
			new BRB.LoadingIndicatorController().hide();
			identityExamModel = app.identityExamHelper.updateIdentityExamResponseObject(argResponse);
			$(refs.exam3).hide();
			setFourthQuestion();
			$(refs.exam4).show();
		}else if (argResponse.data && 
				  argResponse.data.accountAppResponse && 
				  argResponse.data.accountAppResponse.appStatus){
			adjudicationSuccess(argResponse);
		}else {
			BRB.Log(sMethod + '::FAILED');
			showErrorPendingScreen();
		}	    
	}
	//---------------------------------------------------------------------------------------
	function scoreIdentityExamFail( argResponse ){
		var sMethod = "scoreIdentityExamFail(argResponse)";
		BRB.Log(sMethod);
//		invokeAdjudication(adjudicationSuccess, adjudicationFailed);
		app.flowStateHelper.setBRBTransIdRecordAlreadyDeleted();
		showErrorPendingScreen();
	}
	//---------------------------------------------------------------------------------------
	function showMessageForDataValidationIssue()
	{ 
		var sMethod = "showMessageForDataValidationIssue";
		BRB.Log(sMethod);
		
		new BRB.LoadingIndicatorController().hide();
		messageDialog.info(translator.translateKey("identityVerification_ApplicationDataValidatonFailed"), "InitAccountApplication", $.noop); 
	}
	//---------------------------------------------------------------------------------------
	function adjudicationSuccess(argResponse){
		var sMethod = "adjudicationSuccess()";   
        BRB.Log(logPrefix + sMethod);
        BRB.Log(logPrefix + sMethod + " isError:" + argResponse.error+ " msg:"+argResponse.msg+ " data: "+argResponse.data);
        updateAdjudicationModel(argResponse, true);
        if (argResponse.error == true) {
    		BRB.Log(sMethod + '::Response Error::' + argResponse.msg);
    		showErrorPendingScreen();
    		return;
        }
        var response = getAAResponse();
        if (response && response.appStatus && response.appStatus == "APPROVED"){
        	BRB.Log(sMethod + '::Response APPROVED::' + argResponse.msg);
        	setAdjudicationData(argResponse);
        	return;
        }
        if (response && response.appStatus && response.appStatus == "PENDING"){
        	BRB.Log(sMethod + '::Response PENDING::' + argResponse.msg);       	
        	showPendingScreen();
        	return;
        }
        if (response && response.appStatus && response.appStatus == "DECLINED"){
        	BRB.Log(sMethod + '::Response DECLINED::' + argResponse.msg);       	
        	showPendingScreen();
        	return;
        }
 	}

	//---------------------------------------------------------------------------------------
	function adjudicationFailed(argResponse){
		var sMethod = "adjudicationFailed(argResponse)";
		BRB.Log(logPrefix + sMethod);
        BRB.Log(logPrefix + sMethod + "\n" + argResponse);
        updateAdjudicationModel(argResponse, false);
        new BRB.LoadingIndicatorController().hide();
//      showPendingScreen();
        showErrorPendingScreen();
	}
	//---------------------------------------------------------------------------------------
	function updateAdjudicationModel(argResponse, isSuccessful){
		// TODO need to add global variable for ignoring sending request for deleting 
		var sMethod = "updateAdjudicationModel()";   
        BRB.Log(logPrefix + sMethod);
		app.flowStateHelper.setBRBTransIdRecordAlreadyDeleted();
        var adjudicationHelper = app.adjudicationHelper;
        adjudicationHelper.updateAdjudicationResponseObject(argResponse);
        var adjudicationModel = adjudicationHelper.getAdjudicationModel();
        adjudicationModel.setIsSuccessful(isSuccessful);
	}
	//---------------------------------------------------------------------------------------
	function getAAResponse(){		
        var adjudicationModel = app.adjudicationHelper.getAdjudicationModel();
        return adjudicationModel.getAAResponse();
	}
	//---------------------------------------------------------------------------------------
	function updateIdentityExamQuestionTimer () {
		var sMethod = '::updateIdentityExamQuestionTimer() ';
	    BRB.Log(logPrefix + sMethod);
	   
		if(identityExamQuestionTimer.isTimerAlive()){
	    	identityExamQuestionTimer.resetTimer();
	    } else {	    
	    	identityExamQuestionTimer.startTimer(true);
	    }
	}
	//---------------------------------------------------------------------------------------
	function getScoringResult(){
		var identityExamModel = app.identityExamHelper.getIdentityExamModel();
		model.set("tuExamResult",identityExamModel.getTuExamResult());
		model.set("transactionId", identityExamModel.getBrbTransactionId());
	}
	//---------------------------------------------------------------------------------------
	function setAdjudicationData(argResponse){
		var resp = argResponse.data.accountAppResponse;	
		showCongratulationScreen();
		$(refs.cardNumber).text(resp.accountNumber + '*');
		showPanNumberOnCreditCardImage(resp.accountNumber);
		if (translator.isCurrentLanguageEnglish()) {
			$(refs.cardLimit).text('$' + numberWithSeparators(resp.creditLimit));
			$(refs.cardAPR).text(resp.apr + '%');
		} else {
			$(refs.cardLimit).text(numberWithSeparators(resp.creditLimit) + ' $');
			$(refs.cardAPR).text(resp.apr.toString().replace('.', ',') + ' %');
		}
	}
	//---------------------------------------------------------------------------------------
	function showPanNumberOnCreditCardImage(strValue){
		var cardPanNumber = new String(strValue);
		$(refs.cardPanNumber).text(getRightViewForPANNumber(cardPanNumber));
		/*2016-03-15 chrch: Changing word spacing for responsive (US3964) */
		$('.custormerCreditCardNumber').css('word-spacing', '10px');
	}
	//---------------------------------------------------------------------------------------
	function getRightViewForPANNumber(str){
		var result = "";
		for(var i=0,end=4,start=0; i<=3 && i<str.length; ++i,start = end,end += 4){
			result += (str.substring(start, end) + " ").toUpperCase();
		}
		return result;
	}
	//---------------------------------------------------------------------------------------
	function showCongratulationScreen(){
		app.flowStateHelper.setFlowFinish();
    	hideGroupOfBlocksOnResult();
        resizeSuccessBlockHeight();
        // Show header language button
        $(refs.examFinalStep).show();
        /*2016-03-11 chrch: updating css for display (US3964) */
        $(refs.examFinalStep).css('display', 'inline-block');
		$(refs.languageButton).show();
		new BRB.LoadingIndicatorController().hide();
	}
	//---------------------------------------------------------------------------------------
	function showPendingScreen(){
		if (tuFailed){
			showErrorPendingScreen();
			return;
		}
		app.flowStateHelper.setFlowFinish();
		hideGroupOfBlocksOnResult();
		resizeMessageBlockHeight();
		$(refs.examFinalStepPending).show();
		// Show header language button
		$(refs.languageButton).show();
		new BRB.LoadingIndicatorController().hide();
	}
	//---------------------------------------------------------------------------------------
	function showErrorPendingScreen(){/*First case if response FAILED*/
		app.flowStateHelper.setFlowFinish();
		hideGroupOfBlocksOnResult();
		resizeMessageTUBlockHeight();
		$(refs.examFinalStepPending).show();
		$(refs.tuPendingending).show();
		// Show header language button
		$(refs.languageButton).show();
		new BRB.LoadingIndicatorController().hide();
	}
	//---------------------------------------------------------------------------------------
	function resizeMessageBlockHeight(){
		$(refs.cardsContainer).addClass ("cards_pending");
		$(refs.examTable).removeClass("examTableHeightCards examTableHeight_TU_Pending");
		$(refs.cardsContainer).removeClass("cards cards_TU_pending");
	}
	//---------------------------------------------------------------------------------------
	function resizeMessageTUBlockHeight(){
		$(refs.cardsContainer).addClass ("cards_TU_pending");
		$(refs.examTable).removeClass("examTableHeightCards examTableHeightPending ");
		$(refs.cardsContainer).removeClass("cards cards_pending ");
	}
	//---------------------------------------------------------------------------------------
	function resizeSuccessBlockHeight(){
		$(refs.cardsContainer).addClass ("cards_success");
		$(refs.examTable).removeClass("examTableHeightCards examTableHeightPending examTableHeight_TU_Pending");
		$(refs.cardsContainer).removeClass("cards cards_pending cards_TU_pending");
	}
	//---------------------------------------------------------------------------------------
	function shouldUpdateCTProfile (){
		var confirmationModel = activationItems.getModel("confirmation");		
		return confirmationModel.get('updateCTProfileYesNo')==true; 
	}
	//---------------------------------------------------------------------------------------
	function numberWithSeparators(val) {
		if (translator.isCurrentLanguageEnglish()) {
			return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		} else {
			return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
		}
	}
	//---------------------------------------------------------------------------------------
	function hideGroupOfBlocksOnResult() {
		$(".card").hide();
		$('#protection_note').hide();
		$(refs.footerNote).hide();
		$(refs.titleBlock).hide();
	}
};
