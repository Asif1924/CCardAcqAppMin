ensureNamespaceExists();

BRB.ConfirmationController = function(activationItems, argTranslator, argMessageDialog) {
    var logPrefix = '[BRB.ConfirmationController]::';
	var $screenContainer = $("#ConfirmationScreen");

	var translator = null;
	var messageDialog = null;
	var connectivityController = null;
	var wasSkSelectedOnEditScreen = false;
	this.show = show;
	this.init = init;
	this.hide = hide;
	
	var flow = null;	
	
	//---------------------------------------------------------------------------------------
	this.syncUserData = syncUserData; 
    var refs = {
    		continueButtonContainer			:   '#confirmation_continueButtonContainer',
    		continueButton					:   '#confirmation_continueButton',
    		
    		backButtonContainer				:   '#confirmation_BackButtonContainer',
    		backButton						:   '#confirmation_BackButton',
    		
    		privacyArea                     :   '#confirmation_Privacy_Area',
    		applicationAuthorizationYesNo   :   '#confirmation_Application_Authorization_CheckBox_Field',    		
    		updateCTProfileYesNo			:   '#confirmation_Update_CT_Profile_CheckBox_Field',
    		editAboutYourselfButton			:	"#confirmation_AboutYourself_EditButton",
    		personalNameTitle	        	:	"#personalNameTitle",
    		additionalNameTitle				:	"#additionalNameTitle",
    		confirmationProvince			:	"#confirmationProvince",
    		suplementaryCardProvince		:	"#sup_card_province_for_prev_address",
    		additionInfoPrevAddress			:	"#aditional_information_previous_address",
    		editEmploymentButton			:	"#confirmation_EmploymentInformation_EditButton",
    		editFinancialButton				:	"#confirmation_FinancialInformation_EditButton",
    		editGetSuplementaryCardButton   :   "#confirmation_GetSuplementaryCard_EditButton",
    		editInsuranceButton				:	"#confirmation_Insurance_EditButton",
    		confirmation_date_of_birth		:	"#confirmation_date_of_birth",
    		confirmation_at_this_addres		:	"#confirmation_at_this_addres",
    		birth_day_sup_card_section		:	"#birth_day_sup_card_section",
    		howLongMonthes_conf_employment_section	:	"#howLongMonthes_conf_employment_section",
    		languageButton					:	"#Confirmation_LanguageButton"
    };
    var model = new BRB.BaseModel({
        name: 'confirmation',
        refs: refs, 
        data:[
                 { notField: true, name: 'privacyArea',   value: null, validation: {type: 'presence',     message: 'additionalInformation_AgreeToTermsError'}},
                 { name: 'applicationAuthorizationYesNo', value: null, validation: null },
                 { name: 'updateCTProfileYesNo', value: false, validation: null }
       ]
    });    
    //---------------------------------------------------------------------------------------
	function init( argFlow ) {
        var sMethod = 'init() ';
        BRB.Log(logPrefix + sMethod);
        BRB.AppConfig.TrackingScreenID = 5;
        flow = argFlow;        
        translator = argTranslator;         //(AA)Dependency Injection Principle: Allows for proper unit testing
        messageDialog = argMessageDialog;   //(AA)Dependency Injection Principle: Allows for proper unit testing

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
        
        connectivityController = new BRB.ConnectivityController(new BRB.ConnectionStatus(), messageDialog, translator, BRB.AppConfig.ConnectivityConfig);
        connectivityController.init();
        
        createView();
        wasSkSelectedOnEditScreen = app.getCurrentProvince();
        populateAreas();
        
        bindEvents();
        
        restoreCheckBoxes();
	}    
	//---------------------------------------------------------------------------------------
	function populateAreas() {
	     populateAboutYourselfArea();
	     populateEmploymentInformationfArea();
	     populateFinancialInformationfArea();
	     populateGetSuplementaryCardfArea();
	     populateInsurancefArea();
	}
	//---------------------------------------------------------------------------------------
	function restoreCheckBoxes(){
		var authYN = model.get('applicationAuthorizationYesNo');
		$(refs.applicationAuthorizationYesNo).attr('checked',authYN);
		var updateCTP = model.get('updateCTProfileYesNo');
		$(refs.updateCTProfileYesNo).attr('checked',updateCTP);
	}
	//---------------------------------------------------------------------------------------
    function syncUserData(){
        var sMethod = 'syncUserData() ';
        BRB.Log(logPrefix + sMethod);        
        
        model.set('applicationAuthorizationYesNo', $(refs.applicationAuthorizationYesNo).is(':checked'));
        model.set('updateCTProfileYesNo', $(refs.updateCTProfileYesNo).is(':checked'));
        
        var isPrivacyApplied = model.get('applicationAuthorizationYesNo');
        
        model.set('privacyArea', isPrivacyApplied);
        
        BRB.Log(logPrefix + sMethod +' model data: \n'+model.toString());
    }
	//---------------------------------------------------------------------------------------
	function restoreCreditCardData(){
	    var sMethod = "restoreCreditCardData()";
        BRB.Log(logPrefix + sMethod);
	}
	//---------------------------------------------------------------------------------------
	function show(){
		$screenContainer.show();
		translator.run("ConfirmationScreen");
		
		// Work around IE8 page-proofs issue
		updatePageStylesheet();
		
	}
	//---------------------------------------------------------------------------------------
	function updatePageStylesheet() {
		// Work around IE8 round corners issue
		var ieUIHelper = new BRB.IeUIHelper();		
				
		ieUIHelper.roundRightCornersForTag([$("#confirmation_BackButtonHref")]);
		ieUIHelper.roundLeftCornersForTag([$("#confirmation_ContinueButtonHref")]);
	}
	//---------------------------------------------------------------------------------------
	function hide(){
		$screenContainer.hide();
	}
	//---------------------------------------------------------------------------------------
	function createView() {
		$screenContainer.empty();
		assembleNavigationBarAtTop();
		//assemblePageHTML($screenContainer, "#creditCardDescription-template");
		assemblePageHTML($screenContainer, "#BRBConfirmation-template");
		/*2016-02-16 chrch: Confirmation Screen - removing breadcrumbPaddingConfirmation class for responsive */
		//$screenContainer.find('#BreadcrumbTrailArea1').addClass('breadcrumbPaddingConfirmation');		
	}
	//---------------------------------------------------------------------------------------
	function assembleNavigationBarAtTop() {
        $("#pageHeader-template").template("pageHeader");
        $.tmpl("pageHeader", {
        	"switchLanguageButtonId" : "Confirmation_LanguageButton"
            /*"previousButtonId" : "Confirmation_PrevButton",
            "nextButtonId" : "Confirmation_NextButton",*/
        }).appendTo("#ConfirmationScreen");
    }
	//---------------------------------------------------------------------------------------
	function assemblePageHTML($element, templateName) {
		/*var html = $(templateName).tmpl(); 
		$element.append(html);*/	
		
	    $(templateName).template("confirmationScreenPage");     
        $.tmpl("confirmationScreenPage",{activationItems:activationItems}).appendTo($element);        
	}
	//---------------------------------------------------------------------------------------
    function bindEvents(){
	    var sMethod = 'bindEvents() ';
        BRB.Log(logPrefix + sMethod);
        
		$(refs.continueButton).on("mouseup", function(){
            BRB.Log("Confirmation_continueButton.click");
            if (showNextScreen()) {
            	$(refs.continueButton).removeClass("active");
            	$(refs.continueButton).unbind();
            }
        });
		
		$(refs.backButton).on("mouseup", function(){
            BRB.Log("Confirmation_backButton.click");
            showPrevScreen();
        });
		
		$(refs.continueButton).on("mousedown mouseup", function(e){
		    $(refs.continueButton).toggleClass( "active", e.type === "mousedown" );
		});
		
		$(refs.backButton).on("mousedown mouseup", function(e){
		    $(refs.backButton).toggleClass( "active", e.type === "mousedown" );
		});		
		
		$('#print').on("mouseup", function(){
			var helper = new BRB.PrintHelper();
			helper.print("#Confirmation_PageContents");
		});
		
		$(refs.languageButton).on("mouseup", function() {
			formatGrossIncometValues();
		});
	}	
    //---------------------------------------------------------------------------------------
    function formatGrossIncometValues() {
    	var val = activationItems.getModel('personalInformation').get('grossIncome');
    	//US3961
    	var	val2 = activationItems.getModel('personalInformation').get('grossHouseholdIncome');
    	if (translator.isCurrentLanguageEnglish()) {
    		$("#confirmation_FinancialInformation_GrossAnnualIncome").text(val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + ' $');
    		// US3961
    		$("#confirmation_FinancialInformation_GrossAnnualHouseholdIncome").text(val2.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + ' $');    		   		
		} else {
			$("#confirmation_FinancialInformation_GrossAnnualIncome").text('$' + val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
    		// US3961
			$("#confirmation_FinancialInformation_GrossAnnualHouseholdIncome").text('$' + val2.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));					
		}
    }
    //---------------------------------------------------------------------------------------
    function formatPhoneValues() {
    	var val = activationItems.getModel('personalInformation').get('primaryPhone');
    	$("#confirmation_AboutYourSelf_PrimaryPhone").text(activationItems.getFormattedPhoneNumber(val));
    	var val2 = activationItems.getModel('additionalInformation').get('primaryPhone');
    	$("#confirmation_SuplementaryCard_Phone").text(activationItems.getFormattedPhoneNumber(val2));
    }
    //---------------------------------------------------------------------------------------
    function translateDates () {
		var localModel = activationItems.getModel('personalInformation');
		if (localModel !== null) {
			$(refs.confirmation_at_this_addres).text(
					activationItems
							.getMonthNameByIndex(localModel.get('sinceMonths')));
			$(refs.confirmation_date_of_birth).text(
					activationItems
							.getMonthNameFromDate(localModel.get('birthDate')));
			$(refs.howLongMonthes_conf_employment_section).text(
					activationItems
							.getMonthNameByIndex(localModel.get('howLongMonthes')));
		}
		localModel = activationItems.getModel('additionalInformation');
		if (localModel !== null) {
			$(refs.birth_day_sup_card_section).text(
					activationItems
							.getMonthNameFromDate(localModel.get('birthDate')));
		}
    }
    //---------------------------------------------------------------------------------------
	function popUp_PersonalInformationEditScreen(onPopupHideHandler, blockName){
		$screenContainer.fadeOut(1000);
		var loadAsPopup = true;
		var editAboutYourselfScreen = new BRB.PersonalInformationController(activationItems, translator, messageDialog, loadAsPopup);
		var screenBelow = $screenContainer; 
		editAboutYourselfScreen.popup(screenBelow, onPopupHideHandler, blockName, flow);
	}	
	//---------------------------------------------------------------------------------------
	function popUp_OptionalProductsScreen(onPopupHideHandler, blockName,wasOptionalProductsCleared){
		$screenContainer.fadeOut(1000);
		var loadAsPopup = true;
		var editOptionalProductsScreen = new BRB.AdditionalInformationController(activationItems, translator, messageDialog, loadAsPopup);
		var screenBelow = $screenContainer; 
		editOptionalProductsScreen.popup(screenBelow, onPopupHideHandler, blockName, flow,wasOptionalProductsCleared);
	}	
	//---------------------------------------------------------------------------------------
	function showPrevScreen(){
	    syncUserData(); 
	    BRB.AppConfig.TrackingScreenID = 4;
		flow.back();
	}	
	//---------------------------------------------------------------------------------------
	function showNextScreen(){
        var sMethod = 'showNextScreen() ';
        BRB.Log(logPrefix + sMethod);
        
        syncUserData();

        if (app.validationsOn) {
            app.validationDecorator.clearErrArrtibute();

            var rez = model.validate();
            if (rez.length > 0) {
                app.validationDecorator.applyErrAttribute(rez, false, translator);    
                return false; 
            }
        }
        
        invokeIdentityExam( identityExamSuccess, identityExamFail );
        return true;
	}
	//---------------------------------------------------------------------------------------
	function invokeIdentityExam( argSuccessCB, argFailureCB ){
		new BRB.LoadingIndicatorController().showIdentityVerificationLoading(translator.translateKey("confirmation_ScreenIndicator"));
		var identityExamParams = app.identityExamHelper.constructParamsForUserData(activationItems,translator.getCurrentLanguage());
		connectivityController.IdentityExam(identityExamParams, argSuccessCB, argFailureCB);
	}
	//---------------------------------------------------------------------------------------
	function identityExamSuccess( argResponse ){
		var sMethod = "identityExamSuccess(argResponse)";
		BRB.Log(logPrefix + sMethod + '::Server Response::' +  JSON != undefined ? JSON.stringify(argResponse):'');
		new BRB.LoadingIndicatorController().hide();
		if (argResponse.error != true){
			if(argResponse.data && argResponse.data.identityExam){
				var identityExamModel = app.identityExamHelper.updateIdentityExamResponseObject(argResponse);		
				BRB.Log(sMethod + '::Identity Exam Result::' +  identityExamModel.getResult() );
				BRB.Log(sMethod + '::Identity Exam ID::' +  identityExamModel.getId() );
			}else if(argResponse.data && 
					 argResponse.data.accountAppResponse && 
					 argResponse.data.accountAppResponse.appStatus){
				setAdjudicationState(true, argResponse);
			}		
		}
		flow.next();
	}
	//---------------------------------------------------------------------------------------
	function identityExamFail( argResponse ){
		var sMethod = "identityExamFail(argResponse)";
		BRB.Log(logPrefix + sMethod + '::Server Response::' + argResponse);
		setAdjudicationState(false, argResponse);
		flow.next();
	}
	//---------------------------------------------------------------------------------------
	function setAdjudicationState(argIsSuccessful,argResponse){
        var adjudicationHelper = app.adjudicationHelper;
        adjudicationHelper.updateAdjudicationResponseObject(argResponse);
        var adjudicationModel = adjudicationHelper.getAdjudicationModel();
        adjudicationModel.setIsSuccessful(argIsSuccessful);
	}
	//---------------------------------------------------------------------------------------
	function showMessageForDataValidationIssue()
	{ 
		new BRB.LoadingIndicatorController().hide();
		messageDialog.info(translator.translateKey("identityVerification_ApplicationDataValidatonFailed"), "InitAccountApplication", $.noop); 
	}
	//---------------------------------------------------------------------------------------
	function translateTitleAndProvince() {
		$(refs.personalNameTitle).text(activationItems.getNameTitleByValue(activationItems.getModel('personalInformation').get('title')));
		$(refs.additionalNameTitle).text(activationItems.getNameTitleByValue(activationItems.getModel('additionalInformation').get('title')));
		$(refs.confirmationProvince).text(activationItems.getProvinceNameByValue(activationItems.getModel('personalInformation').get('province')));		
		$(refs.additionInfoPrevAddress).text(activationItems.getProvinceNameByValue(activationItems.getModel('personalInformation').get('province_prev')));
		$(refs.suplementaryCardProvince).text(activationItems.getProvinceNameByValue(activationItems.getModel('additionalInformation').get('province')));
	}
	//---------------------------------------------------------------------------------------
	function bindMonthToggle(){
		$(refs.confirmation_date_of_birth).on('translationStop',function(){
			translateDates();
			translateTitleAndProvince();
			formatPhoneValues();
		});
	}
	//---------------------------------------------------------------------------------------
	function populateAboutYourselfArea () {	
		BRB.AppConfig.TrackingScreenID = 5;
		$("#confirmation_AboutYourselfArea").empty();
		$("#BRBConfirmationAboutYourSelfSection-template").tmpl({activationItems:activationItems}).appendTo("#confirmation_AboutYourselfArea");
		bindMonthToggle();
		translator.run("ConfirmationScreen");
		if(wasSkSelectedOnEditScreen != app.getCurrentProvince()){
			// for the first time launch wasSkSelectedOnEditScreen will be the same as isSkSelectedFrlag
			var needToChangeCancelButtonBehavior = false;
			populateInsurancefArea ();
			if(app.getCurrentProvince() == 'SK' ){ // we check SK on prev screen and need to check f
				var wasPaSelected = activationItems.getModel('additionalInformation').get('optionalInsurance_PA');
				var wasCpSelected = activationItems.getModel('additionalInformation').get('optionalInsurance_CP');
				if(wasPaSelected || wasCpSelected){
					activationItems.getModel('additionalInformation').set('optionalInsurance_PA','null');
					activationItems.getModel('additionalInformation').set('optionalInsurance_CP','null');
					needToChangeCancelButtonBehavior = true;
				}
			}
			popUp_OptionalProductsScreen(populateInsurancefArea, 'insurancefArea', needToChangeCancelButtonBehavior);
		}
		wasSkSelectedOnEditScreen = app.getCurrentProvince();
		
		$(refs.editAboutYourselfButton).on("mouseup", function(){
			BRB.AppConfig.TrackingScreenID = 6;
			popUp_PersonalInformationEditScreen(populateAboutYourselfArea, 'aboutYourself');
		});
	}
	//---------------------------------------------------------------------------------------	
	function populateEmploymentInformationfArea () {
		BRB.AppConfig.TrackingScreenID = 5;
		$("#confirmation_EmploymentInformationArea").empty();
		$("#BRBConfirmationEmploymentSection-template").tmpl({activationItems:activationItems}).appendTo("#confirmation_EmploymentInformationArea");
		bindMonthToggle();
		translator.run("ConfirmationScreen");
		$(refs.editEmploymentButton).on("mouseup", function(){
			BRB.AppConfig.TrackingScreenID = 7;
			popUp_PersonalInformationEditScreen(populateEmploymentInformationfArea, 'employmentInformation');
		});
	}
	//---------------------------------------------------------------------------------------
	function populateFinancialInformationfArea () {	
		var sMethod = "populateFinancialInformationfArea() :: ";
		BRB.AppConfig.TrackingScreenID = 5;
		$("#confirmation_FinancialInformationArea").empty();
		$("#BRBConfirmationFinancialSection-template").tmpl({activationItems:activationItems}).appendTo("#confirmation_FinancialInformationArea");
		bindMonthToggle();
		translator.run("ConfirmationScreen");
		var val = activationItems.getModel('personalInformation').get('grossHouseholdIncome');
		BRB.Log(logPrefix + sMethod + val);
		if (translator.isCurrentLanguageEnglish()) {
			$("#confirmation_FinancialInformation_GrossAnnualIncome").text('$' + activationItems.getFormattedGrossAnnualIncome(activationItems.getModel('personalInformation').get('grossIncome')));
			// US3961
			$("#confirmation_FinancialInformation_GrossAnnualHouseholdIncome").text('$' + activationItems.getFormattedGrossAnnualHouseholdIncome(activationItems.getModel('personalInformation').get('grossHouseholdIncome')));		
		} else {
			$("#confirmation_FinancialInformation_GrossAnnualIncome").text(activationItems.getFormattedGrossAnnualIncome(activationItems.getModel('personalInformation').get('grossIncome')) + ' $');
			// US3961
			$("#confirmation_FinancialInformation_GrossAnnualHouseholdIncome").text(activationItems.getFormattedGrossAnnualHouseholdIncome(activationItems.getModel('personalInformation').get('grossHouseholdIncome')) + ' $');		
		}
		$(refs.editFinancialButton).on("mouseup", function(){
			BRB.AppConfig.TrackingScreenID = 8;
			popUp_PersonalInformationEditScreen(populateFinancialInformationfArea, 'financialInformation');
		});	
	}
	//---------------------------------------------------------------------------------------
	function populateGetSuplementaryCardfArea () {
		BRB.AppConfig.TrackingScreenID = 5;
		$("#confirmation_GetSuplementaryCardArea").empty();
		$("#BRBConfirmationSuplementaryCardSection-template").tmpl({activationItems:activationItems}).appendTo("#confirmation_GetSuplementaryCardArea");
		bindMonthToggle();
		translator.run("ConfirmationScreen");
		$(refs.editGetSuplementaryCardButton).on("mouseup", function(){
			BRB.AppConfig.TrackingScreenID = 9;
			popUp_OptionalProductsScreen(populateGetSuplementaryCardfArea, 'suplementaryCardArea');
		});	
	}	
	//---------------------------------------------------------------------------------------
	function populateInsurancefArea () {
		BRB.AppConfig.TrackingScreenID = 5;
		$("#confirmation_OptionalInsuranceArea").empty();
		$("#BRBConfirmationOptionalInsuranceSection-template").tmpl({activationItems:activationItems}).appendTo("#confirmation_OptionalInsuranceArea");
		bindMonthToggle();
		translator.run("ConfirmationScreen");
		$(refs.editInsuranceButton).on("mouseup", function(){
			BRB.AppConfig.TrackingScreenID = 10;
			popUp_OptionalProductsScreen(populateInsurancefArea, 'insurancefArea');
		});	
	}
};