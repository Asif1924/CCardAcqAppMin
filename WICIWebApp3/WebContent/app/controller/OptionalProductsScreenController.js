ensureNamespaceExists();

WICI.OptionalProductsScreenController = function(activationItems, argTranslator, argMessageDialog) {
    var logPrefix = '[WICI.OptionalProductsScreenController]::';
    var $screenContainer = $('#OptionalProductsScreen');
    var translator =    null;
    var messageDialog = null;
    var QcEnrollAgree = true;
   
    this.show = show;
    this.init = init;
    this.hide = hide;

    var	flow = null;
    var signatureControl1;
    var signatureControl2;
    this.syncUserData = syncUserData;
    // US3981
    var loginModel = activationItems.getModel('loginScreen');
    var chooseProductModel = activationItems.getModel('chooseProductModel');
    var outletProvince;
    var refs = {
        resetSignature1					: 	'#signature_Reset_Button1',
        resetSignature2					: 	'#signature_Reset_Button2',
        proceedButton			     	: 	'#optionalProducts_ProceedButton',
        
		optionalProducts_CheckArea		:	'#optionalProductsTable',
		
		signature_CPLD				    : 	'#signature_CPLD',
		signDateCPLD					: 	'#optionalProducts_SignDateCPLD',
        userSignature_CPLD				: 	'#optionalProductsScreen_CPLD_SingnatureContainer',
		optionalProducts_CPLD_Item		:   '#optionalProductsCreditProtectorLifeAndDisabilityItem',
        optionalProducts_CPLD           :   '#optionalProducts_CPLD_CheckField',
        optionalProducts_CPLD_Area      :   '#optionalProducts_CPLD_Area',
        optionalProducts_CPLD_Table     :   '#optionalProducts_CPLD_Table',
        optionalProducts_CPLD_Agreement :   '#optionalProducts_CPLD_Agreement',
        optionalProducts_CPLD_AcceptBox	:	'#optionalProduct_CPLD_AcceptBox_Area',
        optionalProducts_CPLD_Title    	:   '#OptionalProductsScreen_PageContents_CPLD_Title',
        optionalProducts_CPLD_Details	:   '#OptionalProductsScreen_PageContents_CPLD_Details',
		lineSeparatorForCPLD			:	'#lineSeparatorForCPLD',
		optionalProducts_terms_CPLD		:   '#op_cp_footer_termsandconditions_cpld',
		optionalProducts_CPLDItem 		: 	'#optionalProductsCreditProtectorLifeAndDisabilityItem',

		signature_CPC					: 	'#signature_CPC',
		signDateCPC					    : 	'#optionalProducts_SignDateCPC',
		userSignature_CPC				: 	'#optionalProductsScreen_CPC_SignatureContainer',
        optionalProducts_CPC_Item		:   '#optionalProductsCreditProtectorCompleteItem',
        optionalProducts_CPC            :   '#optionalProducts_CPC_YesNoTextField',
        optionalProducts_CPC_Area       :   '#optionalProducts_CPC_Area',
        optionalProducts_CPC_Table      :   '#optionalProducts_CPC_Table',
        optionalProducts_CPC_Agreement  :   '#optionalProducts_CPC_Agreement',
        optionalProducts_CPC_AcceptBox	:	'#optionalProducts_CPC_AcceptBox_Area',
        optionalProducts_CPC_Title    	:   '#OptionalProductsScreen_PageContents_CPC_Title',
        optionalProducts_CPC_Details	:   '#OptionalProductsScreen_PageContents_CPC_Details',
        lineSeparatorForCPC				:	'#lineSeparatorForCPC',
		optionalProducts_terms_CPC 		:   '#op_cp_footer_termsandconditions_cpc',
		optionalProducts_CPCItem		:	'#optionalProductsCreditProtectorCompleteItem',
		
        optionalProducts_NA_Item		:   '#optionalProductsNACheckFieldItem',
        optionalProducts_NA             :   '#optionalProducts_NA_CheckField',
        optionalProducts_Area			:	'#optionalProducts_Area',
        language_slider_CPC_QC          : 	'#language_slider_CPC_QC',
        language_slider_CPLD            :   '#language_slider_CPLD',
        CPLD_Consent_1                  :   '#CPLD_Consent_1',
        CPLD_Consent_2                  :   '#CPLD_Consent_2'
    };

    var model = new WICI.BaseModel({
        name: 'OptionalProductsModel',
        refs: refs,
        data:[
			{ name: 'optionalProducts_CPLD_AcceptBox', value: null, validation: {type: 'termsAndConditions', message: '', group: [2]}},
            { name: 'optionalProducts_CPC_AcceptBox', value: null, validation: {type: 'termsAndConditions', message: '', group: [3]}},
            { name: 'userSignature_CPLD', value: null, validation: {type: 'presence', message: '', group: [2]}},
            { name: 'userSignature_CPC', value: null, validation: {type: 'presence', message: '', group: [3]}},
			{ name: 'signDate',  value: null, validation: {type: 'presence', message: 'signatureScreen_validation_signDate'}},
            { name: 'insuranceCode', value: null, validation: null},
            { name: 'insuranceAgreedFlag', value: null, validation: null},
            { notField: true, name: 'userSignatureNative_CPLD', value: null, validation: null},
            { notField: true, name: 'userSignatureNative_CPC', value: null, validation: null},
            { notField: true, name: 'optionalProducts_CPLD_Agreement', value: null },
            { notField: true, name: 'optionalProducts_CPC_Agreement', value: null },
			{ notField: true, name: 'optionalProducts_CPLD',     value: null },
            { notField: true, name: 'optionalProducts_CPC',     value: null },
            { notField: true, name: 'optionalProducts_NA',     value: null },
            { notField: true, name: 'optionalProducts_CheckArea',    value: null, validation: {type: 'termsAndConditions',     message: 'additionalInformation_NoRadioSelecedError', group:[1]}}
        ]
    });
    //---------------------------------------------------------------------------------------
    function init( argFlow ) {
        var sMethod = 'init() ';
        console.log(logPrefix + sMethod);

        flow = argFlow;
        messageDialog = argMessageDialog; 	//(AA)Dependency Injection Principle: Allows for proper unit testing
        translator = argTranslator; 		//(AA)Dependency Injection Principle: Allows for proper unit testing
        outletProvince = getOutletProvince();
        var currentModel = activationItems.getModel(model.name);
        if (!currentModel) {
            activationItems.addModel(model);
        } else {
            model = currentModel;
        }
		console.log(logPrefix + sMethod + " OptionalProductsModel :: insuranceSelected : " + activationItems.getModel("financialData").get('insuranceSelected'));

        createView();
        bindEvents();
        //hideOptionalProductsSections();
        restoreCreditCardData();
		var insurance_CPType_Available = activationItems.getModel("financialData").get('insurance_CPType_Available').toUpperCase();
		console.log(logPrefix + sMethod + " insurance_CPType_Available :: " + insurance_CPType_Available);
		console.log(logPrefix + sMethod + " insuranceUsecase :: " + activationItems.getModel("financialData").get('insuranceUsecase'));
		
		if(insurance_CPType_Available == "CP_COMPLETE") {
			hideCPLD_Content();
			showCPC_Content();
			restoreCPCData();
		} else if(insurance_CPType_Available == "CP_LIFEDISABILITY") {
			hideCPC_Content();
			showCPLD_Content();
			restoreCPLDData();
		}
		
		if(activationItems.getModel("financialData").get('insuranceSelected') == "NA") {
			$(refs.optionalProducts_NA).prop('checked', true);
		}
		
        // To ensure the DIVS are styled based on the checkbox state on navigation into the page
        toggleAllWarningDIVs();

		if(activationItems.getModel("financialData").get('insuranceUsecase') == "USECASE_THREE") {
			activationItems.getModel("financialData").set('insuranceUsecase', null);
			$("#useCaseThree-container").show();
		}
		 hideLanguageSliderandConsentText();
		 bill96TextforQC();
		 bill96TextforCPC_QC();
		 hideToggleforROC();
    }
    
  //---------------------------------------------------------------------------------------
	function getOutletProvince(){
	    if (loginModel != null && loginModel.get('userLocationResponse') != null) {
                var locationHelper = new WICI.UserLocationResponseHelper();
                locationHelper.setUserLocationResponseObject(loginModel.get('userLocationResponse'));
                outletProvince = locationHelper.getOutletProvince();
        }
        return outletProvince;
	      
	 }
    //---------------------------------------------------------------------------------------
    function syncUserData() {
        var sMethod = 'syncUserData() ';
        console.log(logPrefix + sMethod);

        model.set('signDate',   Date.now().toString('yyyy-MM-dd'));
        model.set('signDateCPLD',   Date.now().toString('yyyy-MM-dd'));
        model.set('signDateCPC',   Date.now().toString('yyyy-MM-dd'));
        model.set('modelsData', activationItems.getDataStringTillModel(model.name));

        model.set('optionalProducts_CPLD', $(refs.optionalProducts_CPLD).is(':checked') ? 'Y' : 'N');
        model.set('optionalProducts_CPC', $(refs.optionalProducts_CPC).is(':checked') ? 'Y' : 'N');
        model.set('optionalProducts_NA', $(refs.optionalProducts_NA).is(':checked') ? 'Y' : 'N');
        // Save CPLD stuff
		model.set('optionalProducts_CPLD_AcceptBox',   $(refs.optionalProducts_CPLD_Agreement).is(':checked') ? 'Y' : 'N');
        
        if (model.get('optionalProducts_CPLD') == 'Y') {
            model.set('userSignature_CPLD',  $(refs.signature_CPLD).jSignature('getData', 'native').length > 0 ? 'data:' + $(refs.signature_CPLD).jSignature('getData', 'image').join(',') : null );
            model.set('userSignatureNative_CPLD',  $(refs.signature_CPLD).jSignature('getData', 'native'));
        }
        // Save CPC stuff
		model.set('optionalProducts_CPC_AcceptBox',   $(refs.optionalProducts_CPC_Agreement).is(':checked') ? 'Y' : 'N');
		
        if (model.get('optionalProducts_CPC') == 'Y') {
            model.set('userSignature_CPC',  $(refs.signature_CPC).jSignature('getData', 'native').length > 0 ? 'data:' + $(refs.signature_CPC).jSignature('getData', 'image').join(',') : null );
            model.set('userSignatureNative_CPC',  $(refs.signature_CPC).jSignature('getData', 'native'));
        }

        model.set('insuranceCode',  'N'); //by default
        model.set('insuranceAgreedFlag',  'N'); //by default

		if(model.get('optionalProducts_CPC_AcceptBox') == 'Y') {
			activationItems.getModel("financialData").set('insurance_CPType_Selected', "CP_Complete");
			activationItems.getModel("financialData").set('insuranceSelected', "CP_Complete");
            model.set('insuranceCode', 'WE' );
            model.set('insuranceAgreedFlag',  'Y');
        } else if(model.get('optionalProducts_CPLD_AcceptBox') == 'Y') {
			activationItems.getModel("financialData").set('insurance_CPType_Selected', "CP_LifeDisability");
			activationItems.getModel("financialData").set('insuranceSelected', "CP_LifeDisability");
            model.set('insuranceCode', 'NE' );
            model.set('insuranceAgreedFlag',  'Y');
        } else if($(refs.optionalProducts_NA).is(':checked')) {
			activationItems.getModel("financialData").set('insurance_CPType_Selected', "");
			activationItems.getModel("financialData").set('insuranceSelected', "NA");
            model.set('insuranceCode',  'N');
            model.set('insuranceAgreedFlag',  'N');
        } else if(!$(refs.optionalProducts_NA).is(':checked')) {
			activationItems.getModel("financialData").set('insuranceSelected', null);
		}

        model.set('optionalProducts_CheckArea',  isOptionalInsuranceSelected(model));

        console.log(logPrefix + sMethod + ' model data: ' + model.toString());
        /****** SET translator for CreditCardAplication  *****/
        activationItems.setTranslator(translator);
    }
    function hideToggleforROC(){
    	var outletProvince = getOutletProvince();
		if(outletProvince !=="QC"){
			$('#QC_langSlider').hide();
			$('#languageSlider_CPC_QC').hide();
		}
	}
    //---------------------------------------------------------------------------------------
    function restoreCreditCardData(){
        var sMethod = "restoreCreditCardData()";
        console.log(logPrefix + sMethod);

        var dataEnteredInThePrevScreens = activationItems.getDataStringTillModel(model.name);
        var savedData = model.get('modelsData');
        var dataEqual = true;

        if(savedData === null) {
            model.set('modelsData', dataEnteredInThePrevScreens);
        } else {
            if(dataEnteredInThePrevScreens.length !== savedData.length || dataEnteredInThePrevScreens !== savedData) {
                dataEqual = false;
            }
        }

        if(!dataEqual) {
            model.set('userSignature_CPLD', null);
            model.set('userSignature_CPC', null);
        }

        //when restoring page state - get states of radiobuttons from model and set them
        $(refs.optionalProducts_CPLD).prop('checked', model.get('optionalProducts_CPLD') === 'Y' ? true : false);
        $(refs.optionalProducts_CPC).prop('checked', model.get('optionalProducts_CPC') === 'Y' ? true : false);
        $(refs.optionalProducts_NA).prop('checked', model.get('optionalProducts_NA') === 'Y' ? true : false);
        console.log(model);

        //when restoring page state - get states of checkboxes from model and set them
        $(refs.optionalProducts_CPLD_Agreement).attr('checked', model.get('optionalProducts_CPLD_AcceptBox') === 'Y' ? true : false);
        $(refs.optionalProducts_CPC_Agreement).attr('checked', model.get('optionalProducts_CPC_AcceptBox') === 'Y' ? true : false);

        if(model.get('optionalProducts_CPLD') == 'Y' || model.get('optionalProducts_CPC') == 'Y' ) {
        	QcEnrollAgree = false;
        	console.log(logPrefix + QcEnrollAgree);
        }

		if(activationItems.getModel("financialData").get('insuranceSelected') == "NA") {
			$(refs.optionalProducts_NA).prop('checked', true);
		}
    }
    //---------------------------------------------------------------------------------------
    function show() {
        $screenContainer.show();
        translator.run('OptionalProductsScreen');

        // Show selected product info
        showHideOptionalProductsCPLD();
        showHideOptionalProductsCPC();
    }
    //---------------------------------------------------------------------------------------
    function hide() {
        $screenContainer.hide();
    }
    //---------------------------------------------------------------------------------------
    function createView() {
        $screenContainer.empty();
        assembleNavigationBarAtTop();
        // US4637
        WICI.BreadcrumbsHelper.assembleBreadcrumbs(6, $screenContainer, activationItems);
        assemblePageHTML($screenContainer, '#WICIOptionalProductsScreen-template');
        assembleNavigationBarAtBottom();
        $screenContainer.addClass("breadcrumbPadding");
    }
    //---------------------------------------------------------------------------------------
    function assembleNavigationBarAtTop(){
        $("#pageHeader-template").template("pageHeader");
        $.tmpl("pageHeader",
            { 	"logo_En" : translator.currentLanguageEnglish(),
                "previousButtonId" 		: "OptionalProductsScreen_PrevButton",
                "settingsButtonId" 		: "OptionalProductsScreen_SettingsButton",
            }
        ).appendTo("#OptionalProductsScreen");

        $('#OptionalProductsScreen_SettingsButton').removeClass('rightPosition');
    }
    // ---------------------------------------------------------------------------------------
    function assembleNavigationBarAtBottom(){
        $("#pageFooter-template").template("pageFooter");
        $.tmpl("pageFooter", {
                "previousButtonId"       : "OptionalProductsScreen_PrevButton"
            }
        ).appendTo("#OptionalProductsScreen");
    }
    // ---------------------------------------------------------------------------------------
    function assemblePageHTML ($element, templateName) {    	
    	// UAT 39 - CP Revitalization, Missed Requirement
    	var personalSK = activationItems.getModel("personalData2_Address").get('province') === 'SK';
    	var chooseProductSK = activationItems.getModel("chooseProductModel").get('province') === 'SK';
    	$(templateName).template("optionalScreenPage");
		$.tmpl("optionalScreenPage",{
            activationItems: activationItems,
            cpEnable : personalSK || chooseProductSK 
     }).appendTo($element);
    }
    //---------------------------------------------------------------------------------------
    function hideOptionalProductsSections() {
        $(refs.optionalProducts_CPLD_Area).hide();
        $(refs.optionalProducts_CPC_Area).hide();
    }
    //---------------------------------------------------------------------------------------
    function onResetSignature1Clicked() {
        var sMethod = 'onResetSignatureClicked() ';
        console.log(logPrefix + sMethod);
        // Clear canvas
        $(refs.signature_CPLD).jSignature('reset');
        $(refs.resetSignature1).removeClass('darkgrayflat');
        $(refs.resetSignature1).addClass('grayflat');
        $(refs.resetSignature1).unbind('click', onResetSignature1Clicked);
    }
    //---------------------------------------------------------------------------------------
    function onResetSignature2Clicked() {
        var sMethod = 'onResetSignatureClicked() ';
        console.log(logPrefix + sMethod);
        // Clear canvas
        $(refs.signature_CPC).jSignature('reset');
        $(refs.resetSignature2).removeClass('darkgrayflat');
        $(refs.resetSignature2).addClass('grayflat');
        $(refs.resetSignature2).unbind('click', onResetSignature2Clicked);
    }
    //---------------------------------------------------------------------------------------
    function bindEvents() {
        var sMethod = 'bindEvents() ';
        console.log(logPrefix + sMethod);
    	bill96TextforCPC_QC();
        $('.OptionalProductsScreen_PrevButton').click(function() {
            showPrevScreen();
        });

		$("#useCaseThreeOk").click(function(){
			$("#useCaseThree-container").hide();
        });

        $(refs.proceedButton).click(function(){
            console.log("optionalProducts_ProceedButton.click");
            showNextScreen();
        });

        $(refs.optionalProducts_CPLD).change(function() {
		    // if NA  is checked
        	if($(refs.optionalProducts_NA).is(':checked')) {
        	     $(refs.optionalProducts_NA).attr('checked', false);
        	}
            updateOptionalProductsVisibility();
			if(!$(refs.optionalProducts_CPLD).is(':checked')){
				onResetSignature1Clicked();
			}

            //  US5108 : WICI - Update to QC Distribution Guide pop-up - on radio button state change
			if($(refs.optionalProducts_CPLD).is(':checked')){
				if(loginModel.get('employerID').toUpperCase() !== 'E' && activationItems.getModel("chooseProductModel").get('province').toUpperCase() === 'QC') {
					$screenContainer.addClass('stop-htmlscroll');
					messageDialog.qcDistributionGuide(translator.translateKey("optionalProductScreen_Handoutprompts_YesNo_Message"),
                			handleHandoutpromptsYes, handleHandoutpromptsNo, translator.translateKey("optionalProductScreen_Handoutprompts_Title"));
            	}	 
			}
        });

        $(refs.optionalProducts_CPC).change(function() {
        	// if NA  is checked
        	if($(refs.optionalProducts_NA).is(':checked')) {
        	     $(refs.optionalProducts_NA).attr('checked', false);
        	}
            updateOptionalProductsVisibility();
            if(!$(refs.optionalProducts_CPC).is(':checked')){
				onResetSignature2Clicked();
			}
			
			// US5108 : WICI - Update to QC Distribution Guide pop-up - on radio button state change
            if($(refs.optionalProducts_CPC).is(':checked')){
                if(loginModel.get('employerID').toUpperCase() !== 'E' && activationItems.getModel("chooseProductModel").get('province').toUpperCase() === 'QC') {
                	$screenContainer.addClass('stop-htmlscroll');      	
                	messageDialog.qcDistributionGuide(translator.translateKey("optionalProductScreen_Handoutprompts_YesNo_Message"),
               				    handleHandoutpromptsYes, handleHandoutpromptsNo, translator.translateKey("optionalProductScreen_Handoutprompts_Title"));
               }
            }
        });

        $(refs.optionalProducts_NA).change(function() {
        	 $(refs.optionalProducts_CPC_Area).hide();
			 $(refs.optionalProducts_CPLD_Area).hide();
        	 // CPC is checked
        	 if($(refs.optionalProducts_CPC).is(':checked')) {
        	      $(refs.optionalProducts_CPC).attr('checked', false);
        	      $(refs.optionalProducts_CPC_Agreement).attr('checked', false);
				  onResetSignature2Clicked();
        	 }
			 // CPLD is checked
			 if($(refs.optionalProducts_CPLD).is(':checked')) {
        	      $(refs.optionalProducts_CPLD).attr('checked', false);
        	      $(refs.optionalProducts_CPLD_Agreement).attr('checked', false);
				  onResetSignature1Clicked();
        	 }
            updateOptionalProductsVisibility();
        });

        $.subscribe('translatorFinished',function(){
		   if(outletProvince === "QC" ){
		    $(refs.language_slider_CPLD).attr('checked',false);
		    $(refs.language_slider_CPC_QC).attr('checked',false);
		   }
		   	bill96TextforQC();
		    bill96TextforCPC_QC();
			hideLanguageSliderandConsentText();
            showDateCPLD();
			showDateCPC();
			hideToggleforROC();
        });

        $(refs.optionalProducts_CPLD_Agreement).click(function(){
        	QcEnrollAgree = true;
            toggleWarningDIV($(refs.optionalProducts_CPLD_Agreement), "CPLD");
        });

        $(refs.optionalProducts_CPC_Agreement).click(function(){
        	QcEnrollAgree = true;
            toggleWarningDIV($(refs.optionalProducts_CPC_Agreement), "CPC");
        });
        $(refs.language_slider_CPC_QC).change(function () {
		  var isChecked = $(this).is(':checked');		      
          if (isChecked == false) {
            $("#CPC_QC1").html(WICI.dictionary_fr.OP_CPC_P_bold);
            $("#CPC_QC2").html(WICI.dictionary_fr.OP_CPC_disclosure);
            $("#CPC_QC3").html(WICI.dictionary_fr.OP_CPC_coverage);
            $("#CPC_QC4").html(WICI.dictionary_fr.OP_CPC_important);
            $("#CPC_QC5").html(WICI.dictionary_fr.OP_CPC_creator_group1);
           	$("#CPC_QC6").html(WICI.dictionary_fr.OP_CPC_creator_group2);
           	$("#CPC_QC7").html(WICI.dictionary_fr.OP_CPC_creator_group3);
           	$("#CPC_QC8").html(WICI.dictionary_fr.OP_CPC_creator_group4);
           	$("#CPC_QC9").html(WICI.dictionary_fr.OP_CPC_creator_group5);
           	$("#CPC_QC10").html(WICI.dictionary_fr.OP_CPC_premium);
           	$("#CPC_QC11").html(WICI.dictionary_fr.OP_CPC_premium_p);
           	$("#CPC_QC12").html(WICI.dictionary_fr.OP_CPC_eligibility);
           	$("#CPC_QC13").html(WICI.dictionary_fr.OP_CPC_eligibility_p);
           	$("#CPC_QC14").html(WICI.dictionary_fr.OP_CPC_benefits);
           	$("#CPC_QC15").html(WICI.dictionary_fr.OP_CPC_paybenefits_p);
           	$("#CPC_QC16").html(WICI.dictionary_fr.OP_CPC_employed);
           	$("#CPC_QC17").html(WICI.dictionary_fr.OP_CPC_youmust_p);
           	$("#CPC_QC18").html(WICI.dictionary_fr.OP_CPC_Li_1_employed);
           	$("#CPC_QC19").html(WICI.dictionary_fr.OP_CPC_li_2_experience);
           	$("#CPC_QC20").html(WICI.dictionary_fr.OP_CPC_Li_3_remain);
           	$("#CPC_QC21").html(WICI.dictionary_fr.OP_CPC_or);
           	$("#CPC_QC22").html(WICI.dictionary_fr.OP_CPC_selfemployed);
           	$("#CPC_QC23").html(WICI.dictionary_fr.OP_CPC_youmust_p);
           	$("#CPC_QC24").html(WICI.dictionary_fr.OP_CPC_Li_2_1_selfemployed);
           	$("#CPC_QC25").html(WICI.dictionary_fr.OP_CPC_Li_2_2_experience);
           	$("#CPC_QC26").html(WICI.dictionary_fr.OP_CPC_Li_2_3_remain);
           	$("#CPC_QC27").html(WICI.dictionary_fr.OP_CPC_monthly_benefits_p);
           	$("#CPC_QC28").html(WICI.dictionary_fr.OP_CPC_monthly_benefits_20_p);
           	$("#CPC_QC29").html(WICI.dictionary_fr.OP_CPC_monthly_benefits_10_p);
           	$("#CPC_QC30").html(WICI.dictionary_fr.OP_CPC_outstanding_p);
           	$("#CPC_QC31").html(WICI.dictionary_fr.OP_CPC_initail_benefit_p);
           	$("#CPC_QC32").html(WICI.dictionary_fr.OP_CPC_all_p);
           	$("#CPC_QC33").html(WICI.dictionary_fr.OP_CPC_no_p);
           	$("#CPC_QC34").html(WICI.dictionary_fr.OP_CPC_totaldisability);
           	$("#CPC_QC35").html(WICI.dictionary_fr.OP_CPC_insurer);
           	$("#CPC_QC36").html(WICI.dictionary_fr.OP_CPC_Li_1_were);
           	$("#CPC_QC37").html(WICI.dictionary_fr.OP_CPC_Li_2_unable);
           	$("#CPC_QC38").html(WICI.dictionary_fr.OP_CPC_Li_3_regular);
           	$("#CPC_QC39").html(WICI.dictionary_fr.OP_CPC_monthly_2_benefits_p);
           	$("#CPC_QC40").html(WICI.dictionary_fr.OP_CPC_monthly_2_benefits_20_p);
           	$("#CPC_QC41").html(WICI.dictionary_fr.OP_CPC_monthly_2_benefits_10_p);
           	$("#CPC_QC42").html(WICI.dictionary_fr.OP_CPC_2_outstanding_p);
           	$("#CPC_QC43").html(WICI.dictionary_fr.OP_CPC_2_initail_benefit_p);
           	$("#CPC_QC44").html(WICI.dictionary_fr.OP_CPC_2_all_p);
           	$("#CPC_QC45").html(WICI.dictionary_fr.OP_CPC_life_coverage);
           	$("#CPC_QC46").html(WICI.dictionary_fr.OP_CPC_life_coverage_para1);
           	$("#CPC_QC47").html(WICI.dictionary_fr.OP_CPC_life_coverage_para2);
           	$("#CPC_QC48").html(WICI.dictionary_fr.OP_CPC_life_coverage_para3);
           	$("#CPC_QC49").html(WICI.dictionary_fr.OP_CPC_claim_procedures);
           	$("#CPC_QC50").html(WICI.dictionary_fr.OP_CPC_claim_procedures_para1);
           	$("#CPC_QC51").html(WICI.dictionary_fr.OP_CPC_claim_procedures_para2);
           	$("#CPC_QC52").html(WICI.dictionary_fr.OP_CPC_claim_procedures_para3);
           	$("#CPC_QC53").html(WICI.dictionary_fr.OP_CPC_termination);
           	$("#CPC_QC54").html(WICI.dictionary_fr.OP_CPC_termination_para1);
           	$("#CPC_QC55").html(WICI.dictionary_fr.OP_CPC_termination_para2);
           	$("#CPC_QC56").html(WICI.dictionary_fr.OP_CPC_termination_list1);
           	$("#CPC_QC57").html(WICI.dictionary_fr.OP_CPC_termination_list2);
           	$("#CPC_QC58").html(WICI.dictionary_fr.OP_CPC_termination_list3);
           	$("#CPC_QC59").html(WICI.dictionary_fr.OP_CPC_termination_list4);
           	$("#CPC_QC60").html(WICI.dictionary_fr.OP_CPC_termination_list5);
           	$("#CPC_QC61").html(WICI.dictionary_fr.OP_CPC_termination_list6);
           	$("#CPC_QC62").html(WICI.dictionary_fr.OP_CPC_creditor);
           	$("#CPC_QC63").html(WICI.dictionary_fr.OP_CPC_creditor_para1);
           	$("#CPC_QC64").html(WICI.dictionary_fr.OP_CPC_Enrolling_you_agree_this);
           	$("#CPC_QC65").html(WICI.dictionary_fr.OP_CPC_Enrolling_you_agree_this_1);
           	$("#CPC_QC66").html(WICI.dictionary_fr.OP_CPC_Enrolling_you_agree_this_2);
           	$("#CPC_QC67").html(WICI.dictionary_fr.OP_CPC_Enrolling_you_agree_this_3);
           	$("#CPC_QC68").html(WICI.dictionary_fr.OP_CPC_Enrolling_you_agree_this_4);
           	$("#CPC_QC69").html(WICI.dictionary_fr.OP_CPC_Enrolling_you_agree_this_5);
           	$("#CPC_QC70").html(WICI.dictionary_fr.OP_CPC_Enrolling_you_agree_this_6);
           	$("#CPC_QC71").html(WICI.dictionary_fr.OP_CPC_Enrolling_you_agree_this_7);
           	$("#CPC_QC72").html(WICI.dictionary_fr.OP_CPC_Enrolling_you_agree_this_8);
           	$("#CPC_QC73").html(WICI.dictionary_fr.OP_CPC_Enrolling_you_agree_this_9);
           	$("#CPC_QC74").html(WICI.dictionary_fr.OP_CPC_Enrolling_you_agree_this_10);
           	$("#CPC_QC75").html(WICI.dictionary_fr.OP_CPC_Enrolling_you_agree_this_11);
           	$("#CPC_QC76").html(WICI.dictionary_fr.OP_CPC_Enrolling_you_agree_this_12);
           	$("#CPC_QC77").html(WICI.dictionary_fr.OP_CPC_Enrolling_you_agree_this_13);
           	$("#CPC_QC78").html(WICI.dictionary_fr.OP_CPC_liketoenroll);
           	$("#CPC_QC78").html(WICI.dictionary_fr.OP_CPC_consentyesorno);
          } else {
       		$("#CPC_QC1").html(WICI.dictionary_en.OP_CPC_P_bold);
            $("#CPC_QC2").html(WICI.dictionary_en.OP_CPC_disclosure);
            $("#CPC_QC3").html(WICI.dictionary_en.OP_CPC_coverage);
            $("#CPC_QC4").html(WICI.dictionary_en.OP_CPC_important);
            $("#CPC_QC5").html(WICI.dictionary_en.OP_CPC_creator_group1);
           	$("#CPC_QC6").html(WICI.dictionary_en.OP_CPC_creator_group2);
           	$("#CPC_QC7").html(WICI.dictionary_en.OP_CPC_creator_group3);
           	$("#CPC_QC8").html(WICI.dictionary_en.OP_CPC_creator_group4);
           	$("#CPC_QC9").html(WICI.dictionary_en.OP_CPC_creator_group5);
           	$("#CPC_QC10").html(WICI.dictionary_en.OP_CPC_premium);
           	$("#CPC_QC11").html(WICI.dictionary_en.OP_CPC_premium_p);
           	$("#CPC_QC12").html(WICI.dictionary_en.OP_CPC_eligibility);
           	$("#CPC_QC13").html(WICI.dictionary_en.OP_CPC_eligibility_p);
           	$("#CPC_QC14").html(WICI.dictionary_en.OP_CPC_benefits);
           	$("#CPC_QC15").html(WICI.dictionary_en.OP_CPC_paybenefits_p);
           	$("#CPC_QC16").html(WICI.dictionary_en.OP_CPC_employed);
           	$("#CPC_QC17").html(WICI.dictionary_en.OP_CPC_youmust_p);
           	$("#CPC_QC18").html(WICI.dictionary_en.OP_CPC_Li_1_employed);
           	$("#CPC_QC19").html(WICI.dictionary_en.OP_CPC_li_2_experience);
           	$("#CPC_QC20").html(WICI.dictionary_en.OP_CPC_Li_3_remain);
           	$("#CPC_QC21").html(WICI.dictionary_en.OP_CPC_or);
           	$("#CPC_QC22").html(WICI.dictionary_en.OP_CPC_selfemployed);
           	$("#CPC_QC23").html(WICI.dictionary_en.OP_CPC_youmust_p);
           	$("#CPC_QC24").html(WICI.dictionary_en.OP_CPC_Li_2_1_selfemployed);
           	$("#CPC_QC25").html(WICI.dictionary_en.OP_CPC_Li_2_2_experience);
           	$("#CPC_QC26").html(WICI.dictionary_en.OP_CPC_Li_2_3_remain);
           	$("#CPC_QC27").html(WICI.dictionary_en.OP_CPC_monthly_benefits_p);
           	$("#CPC_QC28").html(WICI.dictionary_en.OP_CPC_monthly_benefits_20_p);
           	$("#CPC_QC29").html(WICI.dictionary_en.OP_CPC_monthly_benefits_10_p);
           	$("#CPC_QC30").html(WICI.dictionary_en.OP_CPC_outstanding_p);
           	$("#CPC_QC31").html(WICI.dictionary_en.OP_CPC_initail_benefit_p);
           	$("#CPC_QC32").html(WICI.dictionary_en.OP_CPC_all_p);
           	$("#CPC_QC33").html(WICI.dictionary_en.OP_CPC_no_p);
           	$("#CPC_QC34").html(WICI.dictionary_en.OP_CPC_totaldisability);
           	$("#CPC_QC35").html(WICI.dictionary_en.OP_CPC_insurer);
           	$("#CPC_QC36").html(WICI.dictionary_en.OP_CPC_Li_1_were);
           	$("#CPC_QC37").html(WICI.dictionary_en.OP_CPC_Li_2_unable);
           	$("#CPC_QC38").html(WICI.dictionary_en.OP_CPC_Li_3_regular);
           	$("#CPC_QC39").html(WICI.dictionary_en.OP_CPC_monthly_2_benefits_p);
           	$("#CPC_QC40").html(WICI.dictionary_en.OP_CPC_monthly_2_benefits_20_p);
           	$("#CPC_QC41").html(WICI.dictionary_en.OP_CPC_monthly_2_benefits_10_p);
           	$("#CPC_QC42").html(WICI.dictionary_en.OP_CPC_2_outstanding_p);
           	$("#CPC_QC43").html(WICI.dictionary_en.OP_CPC_2_initail_benefit_p);
           	$("#CPC_QC44").html(WICI.dictionary_en.OP_CPC_2_all_p);
           	$("#CPC_QC45").html(WICI.dictionary_en.OP_CPC_life_coverage);
           	$("#CPC_QC46").html(WICI.dictionary_en.OP_CPC_life_coverage_para1);
           	$("#CPC_QC47").html(WICI.dictionary_en.OP_CPC_life_coverage_para2);
           	$("#CPC_QC48").html(WICI.dictionary_en.OP_CPC_life_coverage_para3);
           	$("#CPC_QC49").html(WICI.dictionary_en.OP_CPC_claim_procedures);
           	$("#CPC_QC50").html(WICI.dictionary_en.OP_CPC_claim_procedures_para1);
           	$("#CPC_QC51").html(WICI.dictionary_en.OP_CPC_claim_procedures_para2);
           	$("#CPC_QC52").html(WICI.dictionary_en.OP_CPC_claim_procedures_para3);
           	$("#CPC_QC53").html(WICI.dictionary_en.OP_CPC_termination);
           	$("#CPC_QC54").html(WICI.dictionary_en.OP_CPC_termination_para1);
           	$("#CPC_QC55").html(WICI.dictionary_en.OP_CPC_termination_para2);
           	$("#CPC_QC56").html(WICI.dictionary_en.OP_CPC_termination_list1);
           	$("#CPC_QC57").html(WICI.dictionary_en.OP_CPC_termination_list2);
           	$("#CPC_QC58").html(WICI.dictionary_en.OP_CPC_termination_list3);
           	$("#CPC_QC59").html(WICI.dictionary_en.OP_CPC_termination_list4);
           	$("#CPC_QC60").html(WICI.dictionary_en.OP_CPC_termination_list5);
           	$("#CPC_QC61").html(WICI.dictionary_en.OP_CPC_termination_list6);
           	$("#CPC_QC62").html(WICI.dictionary_en.OP_CPC_creditor);
           	$("#CPC_QC63").html(WICI.dictionary_en.OP_CPC_creditor_para1);
           	$("#CPC_QC64").html(WICI.dictionary_en.OP_CPC_Enrolling_you_agree_this);
           	$("#CPC_QC65").html(WICI.dictionary_en.OP_CPC_Enrolling_you_agree_this_1);
           	$("#CPC_QC66").html(WICI.dictionary_en.OP_CPC_Enrolling_you_agree_this_2);
           	$("#CPC_QC67").html(WICI.dictionary_en.OP_CPC_Enrolling_you_agree_this_3);
           	$("#CPC_QC68").html(WICI.dictionary_en.OP_CPC_Enrolling_you_agree_this_4);
           	$("#CPC_QC69").html(WICI.dictionary_en.OP_CPC_Enrolling_you_agree_this_5);
           	$("#CPC_QC70").html(WICI.dictionary_en.OP_CPC_Enrolling_you_agree_this_6);
           	$("#CPC_QC71").html(WICI.dictionary_en.OP_CPC_Enrolling_you_agree_this_7);
           	$("#CPC_QC72").html(WICI.dictionary_en.OP_CPC_Enrolling_you_agree_this_8);
           	$("#CPC_QC73").html(WICI.dictionary_en.OP_CPC_Enrolling_you_agree_this_9);
           	$("#CPC_QC74").html(WICI.dictionary_en.OP_CPC_Enrolling_you_agree_this_10);
           	$("#CPC_QC75").html(WICI.dictionary_en.OP_CPC_Enrolling_you_agree_this_11);
           	$("#CPC_QC76").html(WICI.dictionary_en.OP_CPC_Enrolling_you_agree_this_12);
           	$("#CPC_QC77").html(WICI.dictionary_en.OP_CPC_Enrolling_you_agree_this_13);
           	$("#CPC_QC78").html(WICI.dictionary_en.OP_CPC_liketoenroll);
           	$("#CPC_QC78").html(WICI.dictionary_en.OP_CPC_consentyesorno);
          }
      });
       	$(refs.language_slider_CPLD).change(function () {
		    var isChecked = $(this).is(':checked');		      
            if (isChecked == false) {
			$('#CPLD_bold').html(WICI.dictionary_fr.OP_CPLD_P_bold);
			$('#CPLD_disclose').html(WICI.dictionary_fr.OP_CPLD_disclosure);
			$('#CPLD_Coverage').html(WICI.dictionary_fr.OP_CPLD_coverage);
			$('#CPLD_important').html(WICI.dictionary_fr.OP_CPLD_important);
			$('#CPLD_group1').html(WICI.dictionary_fr.OP_CPLD_creator_group1);
		    $('#CPLD_group2').html(WICI.dictionary_fr.OP_CPLD_creator_group2);
		    $('#CPLD_group3').html(WICI.dictionary_fr.OP_CPLD_creator_group3);		
	        $('#CPLD_group4').html(WICI.dictionary_fr.OP_CPLD_creator_group4);	
		    $('#CPLD_group5').html(WICI.dictionary_fr.OP_CPLD_creator_group5);
		    $('#CPLD_premium').html(WICI.dictionary_fr.OP_CPLD_premium);
		    $('#CPLD_premium_p').html(WICI.dictionary_fr.OP_CPLD_premium_p);
		    $('#CPLD_eligibility').html(WICI.dictionary_fr.OP_CPLD_eligibility);
		    $('#CPLD_eligibility_p').html(WICI.dictionary_fr.OP_CPLD_eligibility_p);
		    $('#CPLD_benefits').html(WICI.dictionary_fr.OP_CPLD_benefits);
		    $('#CPLD_insurer').html(WICI.dictionary_fr.OP_CPLD_insurer);
		    $('#CPLD_insurer_para1').html(WICI.dictionary_fr.OP_CPLD_insurer_para1);
		    $('#CPLD_insurer_para2').html(WICI.dictionary_fr.OP_CPLD_insurer_para2);
		    $('#CPLD_monthly_benefits_p').html(WICI.dictionary_fr.OP_CPLD_monthly_benefits_p);
		    $('#CPLD_monthly_benefits_20_p').html(WICI.dictionary_fr.OP_CPLD_monthly_benefits_20_p);
		    $('#CPLD_monthly_benefits_10_p').html(WICI.dictionary_fr.OP_CPLD_monthly_benefits_10_p);
		    $('#CPLD_outstanding_p').html(WICI.dictionary_fr.OP_CPLD_outstanding_p);
		    $('#CPLD_initial_benefit').html(WICI.dictionary_fr.OP_CPLD_initail_benefit_p);
		    $('#CPLD_all_p').html(WICI.dictionary_fr.OP_CPLD_all_p);
		    $('#CPLD_life_coverage').html(WICI.dictionary_fr.OP_CPLD_life_coverage);
		    $('#CPLD_life_coverage_p1').html(WICI.dictionary_fr.OP_CPLD_life_coverage_para1);
		    $('#CPLD_life_coverage_p2').html(WICI.dictionary_fr.OP_CPLD_life_coverage_para2);
		    $('#CPLD_life_coverage_p3').html(WICI.dictionary_fr.OP_CPLD_life_coverage_para3);
		    $('#CPLD_claim_procedure').html(WICI.dictionary_fr.OP_CPLD_claim_procedures);
		    $('#CPLD_claim_procedure_p1').html(WICI.dictionary_fr.OP_CPLD_claim_procedures_para1);
		    $('#CPLD_claim_procedure_p2').html(WICI.dictionary_fr.OP_CPLD_claim_procedures_para2);
		    $('#CPLD_claim_procedure_p3').html(WICI.dictionary_fr.OP_CPLD_claim_procedures_para3);	    
		    $('#CPLD_termination').html(WICI.dictionary_fr.OP_CPLD_termination);
		    $('#CPLD_termination_p1').html(WICI.dictionary_fr.OP_CPLD_termination_para1);
		    $('#CPLD_termination_p2').html(WICI.dictionary_fr.OP_CPLD_termination_para2);
		    $('#CPLD_termination_l1').html(WICI.dictionary_fr.OP_CPLD_termination_list1);
		    $('#CPLD_termination_l2').html(WICI.dictionary_fr.OP_CPLD_termination_list2);
		    $('#CPLD_termination_l3').html(WICI.dictionary_fr.OP_CPLD_termination_list3);
		    $('#CPLD_termination_l4').html(WICI.dictionary_fr.OP_CPLD_termination_list4);
	        $('#CPLD_termination_l5').html(WICI.dictionary_fr.OP_CPLD_termination_list5);
		    $('#CPLD_termination_l6').html(WICI.dictionary_fr.OP_CPLD_termination_list6);    
		    $('#CPLD_creditor').html(WICI.dictionary_fr.OP_CPLD_creditor);
		    $('#CPLD_creditor_p1').html(WICI.dictionary_fr.OP_CPLD_creditor_para1);
		    $('#CPLD_Enrolling').html(WICI.dictionary_fr.OP_CPLD_Enrolling_you_agree_this);
		    $('#CPLD_Enrolling_1').html(WICI.dictionary_fr.OP_CPLD_Enrolling_you_agree_this_1);
		    $('#CPLD_Enrolling_2').html(WICI.dictionary_fr.OP_CPLD_Enrolling_you_agree_this_2);
		    $('#CPLD_Enrolling_3').html(WICI.dictionary_fr.OP_CPLD_Enrolling_you_agree_this_3);
		    $('#CPLD_Enrolling_4').html(WICI.dictionary_fr.OP_CPLD_Enrolling_you_agree_this_4);
		    $('#CPLD_Enrolling_5').html(WICI.dictionary_fr.OP_CPLD_Enrolling_you_agree_this_5);
		    $('#CPLD_Enrolling_6').html(WICI.dictionary_fr.OP_CPLD_Enrolling_you_agree_this_6);
		    $('#CPLD_Enrolling_7').html(WICI.dictionary_fr.OP_CPLD_Enrolling_you_agree_this_7);
		    $('#CPLD_Enrolling_8').html(WICI.dictionary_fr.OP_CPLD_Enrolling_you_agree_this_8);
		    $('#CPLD_Enrolling_9').html(WICI.dictionary_fr.OP_CPLD_Enrolling_you_agree_this_9);
		    $('#CPLD_Enrolling_10').html(WICI.dictionary_fr.OP_CPLD_Enrolling_you_agree_this_10);
		    $('#CPLD_Enrolling_11').html(WICI.dictionary_fr.OP_CPLD_Enrolling_you_agree_this_11);
		    $('#CPLD_Enrolling_12').html(WICI.dictionary_fr.OP_CPLD_Enrolling_you_agree_this_12);
		    $('#CPLD_Enrolling_13').html(WICI.dictionary_fr.OP_CPLD_Enrolling_you_agree_this_13);
		    $('#CPLD_liketoenroll').html(WICI.dictionary_fr.OP_CPLD_liketoenroll);
		    $('#CPLD_consentyesorno').html(WICI.dictionary_fr.OP_CPLD_consentyesorno);		

            } else {
		    $('#CPLD_bold').html(WICI.dictionary_en.OP_CPLD_P_bold);
		    $('#CPLD_disclose').html(WICI.dictionary_en.OP_CPLD_disclosure);
		    $('#CPLD_Coverage').html(WICI.dictionary_en.OP_CPLD_coverage);
		    $('#CPLD_important').html(WICI.dictionary_en.OP_CPLD_important);
		    $('#CPLD_group1').html(WICI.dictionary_en.OP_CPLD_creator_group1);
		    $('#CPLD_group2').html(WICI.dictionary_en.OP_CPLD_creator_group2);
		    $('#CPLD_group3').html(WICI.dictionary_en.OP_CPLD_creator_group3);		
		    $('#CPLD_group4').html(WICI.dictionary_en.OP_CPLD_creator_group4);	
		    $('#CPLD_group5').html(WICI.dictionary_en.OP_CPLD_creator_group5);
		    $('#CPLD_premium').html(WICI.dictionary_en.OP_CPLD_premium);
		    $('#CPLD_premium_p').html(WICI.dictionary_en.OP_CPLD_premium_p);
		    $('#CPLD_eligibility').html(WICI.dictionary_en.OP_CPLD_eligibility);
		    $('#CPLD_eligibility_p').html(WICI.dictionary_en.OP_CPLD_eligibility_p);
		    $('#CPLD_benefits').html(WICI.dictionary_en.OP_CPLD_benefits);
		    $('#CPLD_insurer').html(WICI.dictionary_en.OP_CPLD_insurer);
		    $('#CPLD_insurer_para1').html(WICI.dictionary_en.OP_CPLD_insurer_para1);
		    $('#CPLD_insurer_para2').html(WICI.dictionary_en.OP_CPLD_insurer_para2);
		    $('#CPLD_monthly_benefits_p').html(WICI.dictionary_en.OP_CPLD_monthly_benefits_p);
		    $('#CPLD_monthly_benefits_20_p').html(WICI.dictionary_en.OP_CPLD_monthly_benefits_20_p);
		    $('#CPLD_monthly_benefits_10_p').html(WICI.dictionary_en.OP_CPLD_monthly_benefits_10_p);
		    $('#CPLD_outstanding_p').html(WICI.dictionary_en.OP_CPLD_outstanding_p);
		    $('#CPLD_initial_benefit').html(WICI.dictionary_en.OP_CPLD_initail_benefit_p);
		    $('#CPLD_all_p').html(WICI.dictionary_en.OP_CPLD_all_p);
		    $('#CPLD_life_coverage').html(WICI.dictionary_en.OP_CPLD_life_coverage);
		    $('#CPLD_life_coverage_p1').html(WICI.dictionary_en.OP_CPLD_life_coverage_para1);
		    $('#CPLD_life_coverage_p2').html(WICI.dictionary_en.OP_CPLD_life_coverage_para2);
		    $('#CPLD_life_coverage_p3').html(WICI.dictionary_en.OP_CPLD_life_coverage_para3);
		    $('#CPLD_claim_procedure').html(WICI.dictionary_en.OP_CPLD_claim_procedures);
		    $('#CPLD_claim_procedure_p1').html(WICI.dictionary_en.OP_CPLD_claim_procedures_para1);
		    $('#CPLD_claim_procedure_p2').html(WICI.dictionary_en.OP_CPLD_claim_procedures_para2);
		    $('#CPLD_claim_procedure_p3').html(WICI.dictionary_en.OP_CPLD_claim_procedures_para3);	    
		    $('#CPLD_termination').html(WICI.dictionary_en.OP_CPLD_termination);
		    $('#CPLD_termination_p1').html(WICI.dictionary_en.OP_CPLD_termination_para1);
		    $('#CPLD_termination_p2').html(WICI.dictionary_en.OP_CPLD_termination_para2);
		    $('#CPLD_termination_l1').html(WICI.dictionary_en.OP_CPLD_termination_list1);
		    $('#CPLD_termination_l2').html(WICI.dictionary_en.OP_CPLD_termination_list2);
		    $('#CPLD_termination_l3').html(WICI.dictionary_en.OP_CPLD_termination_list3);
		    $('#CPLD_termination_l4').html(WICI.dictionary_en.OP_CPLD_termination_list4);
		    $('#CPLD_termination_l5').html(WICI.dictionary_en.OP_CPLD_termination_list5);
		    $('#CPLD_termination_l6').html(WICI.dictionary_en.OP_CPLD_termination_list6);    
		    $('#CPLD_creditor').html(WICI.dictionary_en.OP_CPLD_creditor);
		    $('#CPLD_creditor_p1').html(WICI.dictionary_en.OP_CPLD_creditor_para1);
		    $('#CPLD_Enrolling').html(WICI.dictionary_en.OP_CPLD_Enrolling_you_agree_this);
		    $('#CPLD_Enrolling_1').html(WICI.dictionary_en.OP_CPLD_Enrolling_you_agree_this_1);
		    $('#CPLD_Enrolling_2').html(WICI.dictionary_en.OP_CPLD_Enrolling_you_agree_this_2);
		    $('#CPLD_Enrolling_3').html(WICI.dictionary_en.OP_CPLD_Enrolling_you_agree_this_3);
		    $('#CPLD_Enrolling_4').html(WICI.dictionary_en.OP_CPLD_Enrolling_you_agree_this_4);
		    $('#CPLD_Enrolling_5').html(WICI.dictionary_en.OP_CPLD_Enrolling_you_agree_this_5);
		    $('#CPLD_Enrolling_6').html(WICI.dictionary_en.OP_CPLD_Enrolling_you_agree_this_6);
		    $('#CPLD_Enrolling_7').html(WICI.dictionary_en.OP_CPLD_Enrolling_you_agree_this_7);
		    $('#CPLD_Enrolling_8').html(WICI.dictionary_en.OP_CPLD_Enrolling_you_agree_this_8);
		    $('#CPLD_Enrolling_9').html(WICI.dictionary_en.OP_CPLD_Enrolling_you_agree_this_9);
		    $('#CPLD_Enrolling_10').html(WICI.dictionary_en.OP_CPLD_Enrolling_you_agree_this_10);
		    $('#CPLD_Enrolling_11').html(WICI.dictionary_en.OP_CPLD_Enrolling_you_agree_this_11);
		    $('#CPLD_Enrolling_12').html(WICI.dictionary_en.OP_CPLD_Enrolling_you_agree_this_12);
		    $('#CPLD_Enrolling_13').html(WICI.dictionary_en.OP_CPLD_Enrolling_you_agree_this_13);
		    $('#CPLD_liketoenroll').html(WICI.dictionary_en.OP_CPLD_liketoenroll);
		    $('#CPLD_consentyesorno').html(WICI.dictionary_en.OP_CPLD_consentyesorno);
            }
        });
    }
    //---------------------------------------------------------------------------------------
    function hideLanguageSliderandConsentText(){
		if(outletProvince =="QC"){
			if(app.translator.getCurrentLanguage() === "en"){
				// QC .. EN
				$('#QC_langSlider').show();
				$('#languageSlider_CPC_QC').show();
				$('#warningText1CPLD_QC').show();
				$('#warningText1CPLD').hide();				
				$("#warningText1CPC_QC").show();
				$("#warningText1CPC").hide();
			}else{
				// QC .. FR
				$('#QC_langSlider').hide();
				$('#languageSlider_CPC_QC').hide();
				$("#warningText1CPC_QC").hide();
				$("#warningText1CPC").show();
				$('#warningText1CPLD').show();
				$('#warningText1CPLD_QC').hide();
				
			}
		}else{
			//outlet province : ROC
				$('#QC_langSlider').hide();
				$('#languageSlider_CPC_QC').hide();
				$("#warningText1CPC_QC").hide();
				$("#warningText1CPC").show();
				$('#warningText1CPLD_QC').hide();
				$('#warningText1CPLD').show();
		}
	}
  //---------------------------------------------------------------------------------------
	function bill96TextforCPC_QC(){
		 if(app.translator.getCurrentLanguage() === "en" && outletProvince ==="QC" ){
			$('#switch_CPC_QC').show();
			$("#CPC_QC1").html(WICI.dictionary_fr.OP_CPC_P_bold);
            $("#CPC_QC2").html(WICI.dictionary_fr.OP_CPC_disclosure);
            $("#CPC_QC3").html(WICI.dictionary_fr.OP_CPC_coverage);
            $("#CPC_QC4").html(WICI.dictionary_fr.OP_CPC_important);
            $("#CPC_QC5").html(WICI.dictionary_fr.OP_CPC_creator_group1);
         	$("#CPC_QC6").html(WICI.dictionary_fr.OP_CPC_creator_group2);
         	$("#CPC_QC7").html(WICI.dictionary_fr.OP_CPC_creator_group3);
         	$("#CPC_QC8").html(WICI.dictionary_fr.OP_CPC_creator_group4);
         	$("#CPC_QC9").html(WICI.dictionary_fr.OP_CPC_creator_group5);
         	$("#CPC_QC10").html(WICI.dictionary_fr.OP_CPC_premium);
         	$("#CPC_QC11").html(WICI.dictionary_fr.OP_CPC_premium_p);
         	$("#CPC_QC12").html(WICI.dictionary_fr.OP_CPC_eligibility);
         	$("#CPC_QC13").html(WICI.dictionary_fr.OP_CPC_eligibility_p);
         	$("#CPC_QC14").html(WICI.dictionary_fr.OP_CPC_benefits);
         	$("#CPC_QC15").html(WICI.dictionary_fr.OP_CPC_paybenefits_p);
         	$("#CPC_QC16").html(WICI.dictionary_fr.OP_CPC_employed);
         	$("#CPC_QC17").html(WICI.dictionary_fr.OP_CPC_youmust_p);
         	$("#CPC_QC18").html(WICI.dictionary_fr.OP_CPC_Li_1_employed);
         	$("#CPC_QC19").html(WICI.dictionary_fr.OP_CPC_li_2_experience);
         	$("#CPC_QC20").html(WICI.dictionary_fr.OP_CPC_Li_3_remain);
         	$("#CPC_QC21").html(WICI.dictionary_fr.OP_CPC_or);
         	$("#CPC_QC22").html(WICI.dictionary_fr.OP_CPC_selfemployed);
         	$("#CPC_QC23").html(WICI.dictionary_fr.OP_CPC_youmust_p);
         	$("#CPC_QC24").html(WICI.dictionary_fr.OP_CPC_Li_2_1_selfemployed);
         	$("#CPC_QC25").html(WICI.dictionary_fr.OP_CPC_Li_2_2_experience);
         	$("#CPC_QC26").html(WICI.dictionary_fr.OP_CPC_Li_2_3_remain);
         	$("#CPC_QC27").html(WICI.dictionary_fr.OP_CPC_monthly_benefits_p);
         	$("#CPC_QC28").html(WICI.dictionary_fr.OP_CPC_monthly_benefits_20_p);
         	$("#CPC_QC29").html(WICI.dictionary_fr.OP_CPC_monthly_benefits_10_p);
         	$("#CPC_QC30").html(WICI.dictionary_fr.OP_CPC_outstanding_p);
         	$("#CPC_QC31").html(WICI.dictionary_fr.OP_CPC_initail_benefit_p);
         	$("#CPC_QC32").html(WICI.dictionary_fr.OP_CPC_all_p);
         	$("#CPC_QC33").html(WICI.dictionary_fr.OP_CPC_no_p);
         	$("#CPC_QC34").html(WICI.dictionary_fr.OP_CPC_totaldisability);
         	$("#CPC_QC35").html(WICI.dictionary_fr.OP_CPC_insurer);
         	$("#CPC_QC36").html(WICI.dictionary_fr.OP_CPC_Li_1_were);
         	$("#CPC_QC37").html(WICI.dictionary_fr.OP_CPC_Li_2_unable);
         	$("#CPC_QC38").html(WICI.dictionary_fr.OP_CPC_Li_3_regular);
         	$("#CPC_QC39").html(WICI.dictionary_fr.OP_CPC_monthly_2_benefits_p);
         	$("#CPC_QC40").html(WICI.dictionary_fr.OP_CPC_monthly_2_benefits_20_p);
         	$("#CPC_QC41").html(WICI.dictionary_fr.OP_CPC_monthly_2_benefits_10_p);
         	$("#CPC_QC42").html(WICI.dictionary_fr.OP_CPC_2_outstanding_p);
         	$("#CPC_QC43").html(WICI.dictionary_fr.OP_CPC_2_initail_benefit_p);
         	$("#CPC_QC44").html(WICI.dictionary_fr.OP_CPC_2_all_p);
         	$("#CPC_QC45").html(WICI.dictionary_fr.OP_CPC_life_coverage);
         	$("#CPC_QC46").html(WICI.dictionary_fr.OP_CPC_life_coverage_para1);
         	$("#CPC_QC47").html(WICI.dictionary_fr.OP_CPC_life_coverage_para2);
         	$("#CPC_QC48").html(WICI.dictionary_fr.OP_CPC_life_coverage_para3);
         	$("#CPC_QC49").html(WICI.dictionary_fr.OP_CPC_claim_procedures);
         	$("#CPC_QC50").html(WICI.dictionary_fr.OP_CPC_claim_procedures_para1);
         	$("#CPC_QC51").html(WICI.dictionary_fr.OP_CPC_claim_procedures_para2);
         	$("#CPC_QC52").html(WICI.dictionary_fr.OP_CPC_claim_procedures_para3);
         	$("#CPC_QC53").html(WICI.dictionary_fr.OP_CPC_termination);
         	$("#CPC_QC54").html(WICI.dictionary_fr.OP_CPC_termination_para1);
         	$("#CPC_QC55").html(WICI.dictionary_fr.OP_CPC_termination_para2);
         	$("#CPC_QC56").html(WICI.dictionary_fr.OP_CPC_termination_list1);
         	$("#CPC_QC57").html(WICI.dictionary_fr.OP_CPC_termination_list2);
         	$("#CPC_QC58").html(WICI.dictionary_fr.OP_CPC_termination_list3);
         	$("#CPC_QC59").html(WICI.dictionary_fr.OP_CPC_termination_list4);
         	$("#CPC_QC60").html(WICI.dictionary_fr.OP_CPC_termination_list5);
         	$("#CPC_QC61").html(WICI.dictionary_fr.OP_CPC_termination_list6);
         	$("#CPC_QC62").html(WICI.dictionary_fr.OP_CPC_creditor);
         	$("#CPC_QC63").html(WICI.dictionary_fr.OP_CPC_creditor_para1);
         	$("#CPC_QC64").html(WICI.dictionary_fr.OP_CPC_Enrolling_you_agree_this);
         	$("#CPC_QC65").html(WICI.dictionary_fr.OP_CPC_Enrolling_you_agree_this_1);
         	$("#CPC_QC66").html(WICI.dictionary_fr.OP_CPC_Enrolling_you_agree_this_2);
         	$("#CPC_QC67").html(WICI.dictionary_fr.OP_CPC_Enrolling_you_agree_this_3);
         	$("#CPC_QC68").html(WICI.dictionary_fr.OP_CPC_Enrolling_you_agree_this_4);
         	$("#CPC_QC69").html(WICI.dictionary_fr.OP_CPC_Enrolling_you_agree_this_5);
         	$("#CPC_QC70").html(WICI.dictionary_fr.OP_CPC_Enrolling_you_agree_this_6);
         	$("#CPC_QC71").html(WICI.dictionary_fr.OP_CPC_Enrolling_you_agree_this_7);
         	$("#CPC_QC72").html(WICI.dictionary_fr.OP_CPC_Enrolling_you_agree_this_8);
         	$("#CPC_QC73").html(WICI.dictionary_fr.OP_CPC_Enrolling_you_agree_this_9);
         	$("#CPC_QC74").html(WICI.dictionary_fr.OP_CPC_Enrolling_you_agree_this_10);
         	$("#CPC_QC75").html(WICI.dictionary_fr.OP_CPC_Enrolling_you_agree_this_11);
         	$("#CPC_QC76").html(WICI.dictionary_fr.OP_CPC_Enrolling_you_agree_this_12);
         	$("#CPC_QC77").html(WICI.dictionary_fr.OP_CPC_Enrolling_you_agree_this_13);
         	$("#CPC_QC78").html(WICI.dictionary_fr.OP_CPC_liketoenroll);
         	$("#CPC_QC78").html(WICI.dictionary_fr.OP_CPC_consentyesorno);
         }else if((app.translator.getCurrentLanguage() === "fr") && outletProvince ==="QC" ){
        	 $('#switch_CPC_QC').hide();
        	 $("#CPC_QC1").html(WICI.dictionary_fr.OP_CPC_P_bold);
        	 $("#CPC_QC2").html(WICI.dictionary_fr.OP_CPC_disclosure);
        	 $("#CPC_QC3").html(WICI.dictionary_fr.OP_CPC_coverage);
        	 $("#CPC_QC4").html(WICI.dictionary_fr.OP_CPC_important);
        	 $("#CPC_QC5").html(WICI.dictionary_fr.OP_CPC_creator_group1);
         	$("#CPC_QC6").html(WICI.dictionary_fr.OP_CPC_creator_group2);
         	$("#CPC_QC7").html(WICI.dictionary_fr.OP_CPC_creator_group3);
         	$("#CPC_QC8").html(WICI.dictionary_fr.OP_CPC_creator_group4);
         	$("#CPC_QC9").html(WICI.dictionary_fr.OP_CPC_creator_group5);
         	$("#CPC_QC10").html(WICI.dictionary_fr.OP_CPC_premium);
         	$("#CPC_QC11").html(WICI.dictionary_fr.OP_CPC_premium_p);
         	$("#CPC_QC12").html(WICI.dictionary_fr.OP_CPC_eligibility);
         	$("#CPC_QC13").html(WICI.dictionary_fr.OP_CPC_eligibility_p);
         	$("#CPC_QC14").html(WICI.dictionary_fr.OP_CPC_benefits);
         	$("#CPC_QC15").html(WICI.dictionary_fr.OP_CPC_paybenefits_p);
         	$("#CPC_QC16").html(WICI.dictionary_fr.OP_CPC_employed);
         	$("#CPC_QC17").html(WICI.dictionary_fr.OP_CPC_youmust_p);
         	$("#CPC_QC18").html(WICI.dictionary_fr.OP_CPC_Li_1_employed);
         	$("#CPC_QC19").html(WICI.dictionary_fr.OP_CPC_li_2_experience);
         	$("#CPC_QC20").html(WICI.dictionary_fr.OP_CPC_Li_3_remain);
         	$("#CPC_QC21").html(WICI.dictionary_fr.OP_CPC_or);
         	$("#CPC_QC22").html(WICI.dictionary_fr.OP_CPC_selfemployed);
         	$("#CPC_QC23").html(WICI.dictionary_fr.OP_CPC_youmust_p);
         	$("#CPC_QC24").html(WICI.dictionary_fr.OP_CPC_Li_2_1_selfemployed);
         	$("#CPC_QC25").html(WICI.dictionary_fr.OP_CPC_Li_2_2_experience);
         	$("#CPC_QC26").html(WICI.dictionary_fr.OP_CPC_Li_2_3_remain);
         	$("#CPC_QC27").html(WICI.dictionary_fr.OP_CPC_monthly_benefits_p);
         	$("#CPC_QC28").html(WICI.dictionary_fr.OP_CPC_monthly_benefits_20_p);
         	$("#CPC_QC29").html(WICI.dictionary_fr.OP_CPC_monthly_benefits_10_p);
         	$("#CPC_QC30").html(WICI.dictionary_fr.OP_CPC_outstanding_p);
         	$("#CPC_QC31").html(WICI.dictionary_fr.OP_CPC_initail_benefit_p);
         	$("#CPC_QC32").html(WICI.dictionary_fr.OP_CPC_all_p);
         	$("#CPC_QC33").html(WICI.dictionary_fr.OP_CPC_no_p);
         	$("#CPC_QC34").html(WICI.dictionary_fr.OP_CPC_totaldisability);
         	$("#CPC_QC35").html(WICI.dictionary_fr.OP_CPC_insurer);
         	$("#CPC_QC36").html(WICI.dictionary_fr.OP_CPC_Li_1_were);
         	$("#CPC_QC37").html(WICI.dictionary_fr.OP_CPC_Li_2_unable);
         	$("#CPC_QC38").html(WICI.dictionary_fr.OP_CPC_Li_3_regular);
         	$("#CPC_QC39").html(WICI.dictionary_fr.OP_CPC_monthly_2_benefits_p);
         	$("#CPC_QC40").html(WICI.dictionary_fr.OP_CPC_monthly_2_benefits_20_p);
         	$("#CPC_QC41").html(WICI.dictionary_fr.OP_CPC_monthly_2_benefits_10_p);
         	$("#CPC_QC42").html(WICI.dictionary_fr.OP_CPC_2_outstanding_p);
         	$("#CPC_QC43").html(WICI.dictionary_fr.OP_CPC_2_initail_benefit_p);
         	$("#CPC_QC44").html(WICI.dictionary_fr.OP_CPC_2_all_p);
         	$("#CPC_QC45").html(WICI.dictionary_fr.OP_CPC_life_coverage);
         	$("#CPC_QC46").html(WICI.dictionary_fr.OP_CPC_life_coverage_para1);
         	$("#CPC_QC47").html(WICI.dictionary_fr.OP_CPC_life_coverage_para2);
         	$("#CPC_QC48").html(WICI.dictionary_fr.OP_CPC_life_coverage_para3);
         	$("#CPC_QC49").html(WICI.dictionary_fr.OP_CPC_claim_procedures);
         	$("#CPC_QC50").html(WICI.dictionary_fr.OP_CPC_claim_procedures_para1);
         	$("#CPC_QC51").html(WICI.dictionary_fr.OP_CPC_claim_procedures_para2);
         	$("#CPC_QC52").html(WICI.dictionary_fr.OP_CPC_claim_procedures_para3);
         	$("#CPC_QC53").html(WICI.dictionary_fr.OP_CPC_termination);
         	$("#CPC_QC54").html(WICI.dictionary_fr.OP_CPC_termination_para1);
         	$("#CPC_QC55").html(WICI.dictionary_fr.OP_CPC_termination_para2);
         	$("#CPC_QC56").html(WICI.dictionary_fr.OP_CPC_termination_list1);
         	$("#CPC_QC57").html(WICI.dictionary_fr.OP_CPC_termination_list2);
         	$("#CPC_QC58").html(WICI.dictionary_fr.OP_CPC_termination_list3);
         	$("#CPC_QC59").html(WICI.dictionary_fr.OP_CPC_termination_list4);
         	$("#CPC_QC60").html(WICI.dictionary_fr.OP_CPC_termination_list5);
         	$("#CPC_QC61").html(WICI.dictionary_fr.OP_CPC_termination_list6);
         	$("#CPC_QC62").html(WICI.dictionary_fr.OP_CPC_creditor);
         	$("#CPC_QC63").html(WICI.dictionary_fr.OP_CPC_creditor_para1);
         	$("#CPC_QC64").html(WICI.dictionary_fr.OP_CPC_Enrolling_you_agree_this);
         	$("#CPC_QC65").html(WICI.dictionary_fr.OP_CPC_Enrolling_you_agree_this_1);
         	$("#CPC_QC66").html(WICI.dictionary_fr.OP_CPC_Enrolling_you_agree_this_2);
         	$("#CPC_QC67").html(WICI.dictionary_fr.OP_CPC_Enrolling_you_agree_this_3);
         	$("#CPC_QC68").html(WICI.dictionary_fr.OP_CPC_Enrolling_you_agree_this_4);
         	$("#CPC_QC69").html(WICI.dictionary_fr.OP_CPC_Enrolling_you_agree_this_5);
         	$("#CPC_QC70").html(WICI.dictionary_fr.OP_CPC_Enrolling_you_agree_this_6);
         	$("#CPC_QC71").html(WICI.dictionary_fr.OP_CPC_Enrolling_you_agree_this_7);
         	$("#CPC_QC72").html(WICI.dictionary_fr.OP_CPC_Enrolling_you_agree_this_8);
         	$("#CPC_QC73").html(WICI.dictionary_fr.OP_CPC_Enrolling_you_agree_this_9);
         	$("#CPC_QC74").html(WICI.dictionary_fr.OP_CPC_Enrolling_you_agree_this_10);
         	$("#CPC_QC75").html(WICI.dictionary_fr.OP_CPC_Enrolling_you_agree_this_11);
         	$("#CPC_QC76").html(WICI.dictionary_fr.OP_CPC_Enrolling_you_agree_this_12);
         	$("#CPC_QC77").html(WICI.dictionary_fr.OP_CPC_Enrolling_you_agree_this_13);
         	$("#CPC_QC78").html(WICI.dictionary_fr.OP_CPC_liketoenroll);
         	$("#CPC_QC78").html(WICI.dictionary_fr.OP_CPC_consentyesorno);
         }else if(app.translator.getCurrentLanguage() === "en"  || app.translator.getCurrentLanguage() === "fr" || outletProvince !== "QC"){
        	$("#CPC_QC1").html(translator.translateKey("OP_CPC_P_bold"));
            $("#CPC_QC2").html(translator.translateKey("OP_CPC_disclosure"));
            $("#CPC_QC3").html(translator.translateKey("OP_CPC_coverage"));
            $("#CPC_QC4").html(translator.translateKey("OP_CPC_important"));
            $("#CPC_QC5").html(translator.translateKey("OP_CPC_creator_group1"));
         	$("#CPC_QC6").html(translator.translateKey("OP_CPC_creator_group2"));
         	$("#CPC_QC7").html(translator.translateKey("OP_CPC_creator_group3"));
         	$("#CPC_QC8").html(translator.translateKey("OP_CPC_creator_group4"));
         	$("#CPC_QC9").html(translator.translateKey("OP_CPC_creator_group5"));
         	$("#CPC_QC10").html(translator.translateKey("OP_CPC_premium"));
         	$("#CPC_QC11").html(translator.translateKey("OP_CPC_premium_p"));
         	$("#CPC_QC12").html(translator.translateKey("OP_CPC_eligibility"));
         	$("#CPC_QC13").html(translator.translateKey("OP_CPC_eligibility_p"));
         	$("#CPC_QC14").html(translator.translateKey("OP_CPC_benefits"));
         	$("#CPC_QC15").html(translator.translateKey("OP_CPC_paybenefits_p"));
         	$("#CPC_QC16").html(translator.translateKey("OP_CPC_employed"));
         	$("#CPC_QC17").html(translator.translateKey("OP_CPC_youmust_p"));
         	$("#CPC_QC18").html(translator.translateKey("OP_CPC_Li_1_employed"));
         	$("#CPC_QC19").html(translator.translateKey("OP_CPC_li_2_experience"));
         	$("#CPC_QC20").html(translator.translateKey("OP_CPC_Li_3_remain"));
         	$("#CPC_QC21").html(translator.translateKey("OP_CPC_or"));
         	$("#CPC_QC22").html(translator.translateKey("OP_CPC_selfemployed"));
         	$("#CPC_QC23").html(translator.translateKey("OP_CPC_youmust_p"));
         	$("#CPC_QC24").html(translator.translateKey("OP_CPC_Li_2_1_selfemployed"));
         	$("#CPC_QC25").html(translator.translateKey("OP_CPC_Li_2_2_experience"));
         	$("#CPC_QC26").html(translator.translateKey("OP_CPC_Li_2_3_remain"));
         	$("#CPC_QC27").html(translator.translateKey("OP_CPC_monthly_benefits_p"));
         	$("#CPC_QC28").html(translator.translateKey("OP_CPC_monthly_benefits_20_p"));
         	$("#CPC_QC29").html(translator.translateKey("OP_CPC_monthly_benefits_10_p"));
         	$("#CPC_QC30").html(translator.translateKey("OP_CPC_outstanding_p"));
         	$("#CPC_QC31").html(translator.translateKey("OP_CPC_initail_benefit_p"));
         	$("#CPC_QC32").html(translator.translateKey("OP_CPC_all_p"));
         	$("#CPC_QC33").html(translator.translateKey("OP_CPC_no_p"));
         	$("#CPC_QC34").html(translator.translateKey("OP_CPC_totaldisability"));
         	$("#CPC_QC35").html(translator.translateKey("OP_CPC_insurer"));
         	$("#CPC_QC36").html(translator.translateKey("OP_CPC_Li_1_were"));
         	$("#CPC_QC37").html(translator.translateKey("OP_CPC_Li_2_unable"));
         	$("#CPC_QC38").html(translator.translateKey("OP_CPC_Li_3_regular"));
         	$("#CPC_QC39").html(translator.translateKey("OP_CPC_monthly_2_benefits_p"));
         	$("#CPC_QC40").html(translator.translateKey("OP_CPC_monthly_2_benefits_20_p"));
         	$("#CPC_QC41").html(translator.translateKey("OP_CPC_monthly_2_benefits_10_p"));
         	$("#CPC_QC42").html(translator.translateKey("OP_CPC_2_outstanding_p"));
         	$("#CPC_QC43").html(translator.translateKey("OP_CPC_2_initail_benefit_p"));
         	$("#CPC_QC44").html(translator.translateKey("OP_CPC_2_all_p"));
         	$("#CPC_QC45").html(translator.translateKey("OP_CPC_life_coverage"));
         	$("#CPC_QC46").html(translator.translateKey("OP_CPC_life_coverage_para1"));
         	$("#CPC_QC47").html(translator.translateKey("OP_CPC_life_coverage_para2"));
         	$("#CPC_QC48").html(translator.translateKey("OP_CPC_life_coverage_para3"));
         	$("#CPC_QC49").html(translator.translateKey("OP_CPC_claim_procedures"));
         	$("#CPC_QC50").html(translator.translateKey("OP_CPC_claim_procedures_para1"));
         	$("#CPC_QC51").html(translator.translateKey("OP_CPC_claim_procedures_para2"));
         	$("#CPC_QC52").html(translator.translateKey("OP_CPC_claim_procedures_para3"));
         	$("#CPC_QC53").html(translator.translateKey("OP_CPC_termination"));
         	$("#CPC_QC54").html(translator.translateKey("OP_CPC_termination_para1"));
         	$("#CPC_QC55").html(translator.translateKey("OP_CPC_termination_para2"));
         	$("#CPC_QC56").html(translator.translateKey("OP_CPC_termination_list1"));
         	$("#CPC_QC57").html(translator.translateKey("OP_CPC_termination_list2"));
         	$("#CPC_QC58").html(translator.translateKey("OP_CPC_termination_list3"));
         	$("#CPC_QC59").html(translator.translateKey("OP_CPC_termination_list4"));
         	$("#CPC_QC60").html(translator.translateKey("OP_CPC_termination_list5"));
         	$("#CPC_QC61").html(translator.translateKey("OP_CPC_termination_list6"));
         	$("#CPC_QC62").html(translator.translateKey("OP_CPC_creditor"));
         	$("#CPC_QC63").html(translator.translateKey("OP_CPC_creditor_para1"));
         	$("#CPC_QC64").html(translator.translateKey("OP_CPC_Enrolling_you_agree_this"));
         	$("#CPC_QC65").html(translator.translateKey("OP_CPC_Enrolling_you_agree_this_1"));
         	$("#CPC_QC66").html(translator.translateKey("OP_CPC_Enrolling_you_agree_this_2"));
         	$("#CPC_QC67").html(translator.translateKey("OP_CPC_Enrolling_you_agree_this_3"));
         	$("#CPC_QC68").html(translator.translateKey("OP_CPC_Enrolling_you_agree_this_4"));
         	$("#CPC_QC69").html(translator.translateKey("OP_CPC_Enrolling_you_agree_this_5"));
         	$("#CPC_QC70").html(translator.translateKey("OP_CPC_Enrolling_you_agree_this_6"));
         	$("#CPC_QC71").html(translator.translateKey("OP_CPC_Enrolling_you_agree_this_7"));
         	$("#CPC_QC72").html(translator.translateKey("OP_CPC_Enrolling_you_agree_this_8"));
         	$("#CPC_QC73").html(translator.translateKey("OP_CPC_Enrolling_you_agree_this_9"));
         	$("#CPC_QC74").html(translator.translateKey("OP_CPC_Enrolling_you_agree_this_10"));
         	$("#CPC_QC75").html(translator.translateKey("OP_CPC_Enrolling_you_agree_this_11"));
         	$("#CPC_QC76").html(translator.translateKey("OP_CPC_Enrolling_you_agree_this_12"));
         	$("#CPC_QC77").html(translator.translateKey("OP_CPC_Enrolling_you_agree_this_13"));
         	$("#CPC_QC78").html(translator.translateKey("OP_CPC_liketoenroll"));
         	$("#CPC_QC78").html(translator.translateKey("OP_CPC_consentyesorno"));
         }else{
        	$("#CPC_QC1").html(translator.translateKey("OP_CPC_P_bold"));
            $("#CPC_QC2").html(translator.translateKey("OP_CPC_disclosure"));
            $("#CPC_QC3").html(translator.translateKey("OP_CPC_coverage"));
            $("#CPC_QC4").html(translator.translateKey("OP_CPC_important"));
            $("#CPC_QC5").html(translator.translateKey("OP_CPC_creator_group1"));
         	$("#CPC_QC6").html(translator.translateKey("OP_CPC_creator_group2"));
         	$("#CPC_QC7").html(translator.translateKey("OP_CPC_creator_group3"));
         	$("#CPC_QC8").html(translator.translateKey("OP_CPC_creator_group4"));
         	$("#CPC_QC9").html(translator.translateKey("OP_CPC_creator_group5"));
         	$("#CPC_QC10").html(translator.translateKey("OP_CPC_premium"));
         	$("#CPC_QC11").html(translator.translateKey("OP_CPC_premium_p"));
         	$("#CPC_QC12").html(translator.translateKey("OP_CPC_eligibility"));
         	$("#CPC_QC13").html(translator.translateKey("OP_CPC_eligibility_p"));
         	$("#CPC_QC14").html(translator.translateKey("OP_CPC_benefits"));
         	$("#CPC_QC15").html(translator.translateKey("OP_CPC_paybenefits_p"));
         	$("#CPC_QC16").html(translator.translateKey("OP_CPC_employed"));
         	$("#CPC_QC17").html(translator.translateKey("OP_CPC_youmust_p"));
         	$("#CPC_QC18").html(translator.translateKey("OP_CPC_Li_1_employed"));
         	$("#CPC_QC19").html(translator.translateKey("OP_CPC_li_2_experience"));
         	$("#CPC_QC20").html(translator.translateKey("OP_CPC_Li_3_remain"));
         	$("#CPC_QC21").html(translator.translateKey("OP_CPC_or"));
         	$("#CPC_QC22").html(translator.translateKey("OP_CPC_selfemployed"));
         	$("#CPC_QC23").html(translator.translateKey("OP_CPC_youmust_p"));
         	$("#CPC_QC24").html(translator.translateKey("OP_CPC_Li_2_1_selfemployed"));
         	$("#CPC_QC25").html(translator.translateKey("OP_CPC_Li_2_2_experience"));
         	$("#CPC_QC26").html(translator.translateKey("OP_CPC_Li_2_3_remain"));
         	$("#CPC_QC27").html(translator.translateKey("OP_CPC_monthly_benefits_p"));
         	$("#CPC_QC28").html(translator.translateKey("OP_CPC_monthly_benefits_20_p"));
         	$("#CPC_QC29").html(translator.translateKey("OP_CPC_monthly_benefits_10_p"));
         	$("#CPC_QC30").html(translator.translateKey("OP_CPC_outstanding_p"));
         	$("#CPC_QC31").html(translator.translateKey("OP_CPC_initail_benefit_p"));
         	$("#CPC_QC32").html(translator.translateKey("OP_CPC_all_p"));
         	$("#CPC_QC33").html(translator.translateKey("OP_CPC_no_p"));
         	$("#CPC_QC34").html(translator.translateKey("OP_CPC_totaldisability"));
         	$("#CPC_QC35").html(translator.translateKey("OP_CPC_insurer"));
         	$("#CPC_QC36").html(translator.translateKey("OP_CPC_Li_1_were"));
         	$("#CPC_QC37").html(translator.translateKey("OP_CPC_Li_2_unable"));
         	$("#CPC_QC38").html(translator.translateKey("OP_CPC_Li_3_regular"));
         	$("#CPC_QC39").html(translator.translateKey("OP_CPC_monthly_2_benefits_p"));
         	$("#CPC_QC40").html(translator.translateKey("OP_CPC_monthly_2_benefits_20_p"));
         	$("#CPC_QC41").html(translator.translateKey("OP_CPC_monthly_2_benefits_10_p"));
         	$("#CPC_QC42").html(translator.translateKey("OP_CPC_2_outstanding_p"));
         	$("#CPC_QC43").html(translator.translateKey("OP_CPC_2_initail_benefit_p"));
         	$("#CPC_QC44").html(translator.translateKey("OP_CPC_2_all_p"));
         	$("#CPC_QC45").html(translator.translateKey("OP_CPC_life_coverage"));
         	$("#CPC_QC46").html(translator.translateKey("OP_CPC_life_coverage_para1"));
         	$("#CPC_QC47").html(translator.translateKey("OP_CPC_life_coverage_para2"));
         	$("#CPC_QC48").html(translator.translateKey("OP_CPC_life_coverage_para3"));
         	$("#CPC_QC49").html(translator.translateKey("OP_CPC_claim_procedures"));
         	$("#CPC_QC50").html(translator.translateKey("OP_CPC_claim_procedures_para1"));
         	$("#CPC_QC51").html(translator.translateKey("OP_CPC_claim_procedures_para2"));
         	$("#CPC_QC52").html(translator.translateKey("OP_CPC_claim_procedures_para3"));
         	$("#CPC_QC53").html(translator.translateKey("OP_CPC_termination"));
         	$("#CPC_QC54").html(translator.translateKey("OP_CPC_termination_para1"));
         	$("#CPC_QC55").html(translator.translateKey("OP_CPC_termination_para2"));
         	$("#CPC_QC56").html(translator.translateKey("OP_CPC_termination_list1"));
         	$("#CPC_QC57").html(translator.translateKey("OP_CPC_termination_list2"));
         	$("#CPC_QC58").html(translator.translateKey("OP_CPC_termination_list3"));
         	$("#CPC_QC59").html(translator.translateKey("OP_CPC_termination_list4"));
         	$("#CPC_QC60").html(translator.translateKey("OP_CPC_termination_list5"));
         	$("#CPC_QC61").html(translator.translateKey("OP_CPC_termination_list6"));
         	$("#CPC_QC62").html(translator.translateKey("OP_CPC_creditor"));
         	$("#CPC_QC63").html(translator.translateKey("OP_CPC_creditor_para1"));
         	$("#CPC_QC64").html(translator.translateKey("OP_CPC_Enrolling_you_agree_this"));
         	$("#CPC_QC65").html(translator.translateKey("OP_CPC_Enrolling_you_agree_this_1"));
         	$("#CPC_QC66").html(translator.translateKey("OP_CPC_Enrolling_you_agree_this_2"));
         	$("#CPC_QC67").html(translator.translateKey("OP_CPC_Enrolling_you_agree_this_3"));
         	$("#CPC_QC68").html(translator.translateKey("OP_CPC_Enrolling_you_agree_this_4"));
         	$("#CPC_QC69").html(translator.translateKey("OP_CPC_Enrolling_you_agree_this_5"));
         	$("#CPC_QC70").html(translator.translateKey("OP_CPC_Enrolling_you_agree_this_6"));
         	$("#CPC_QC71").html(translator.translateKey("OP_CPC_Enrolling_you_agree_this_7"));
         	$("#CPC_QC72").html(translator.translateKey("OP_CPC_Enrolling_you_agree_this_8"));
         	$("#CPC_QC73").html(translator.translateKey("OP_CPC_Enrolling_you_agree_this_9"));
         	$("#CPC_QC74").html(translator.translateKey("OP_CPC_Enrolling_you_agree_this_10"));
         	$("#CPC_QC75").html(translator.translateKey("OP_CPC_Enrolling_you_agree_this_11"));
         	$("#CPC_QC76").html(translator.translateKey("OP_CPC_Enrolling_you_agree_this_12"));
         	$("#CPC_QC77").html(translator.translateKey("OP_CPC_Enrolling_you_agree_this_13"));
         	$("#CPC_QC78").html(translator.translateKey("OP_CPC_liketoenroll"));
         	$("#CPC_QC78").html(translator.translateKey("OP_CPC_consentyesorno"));
     
         }
	}
 //---------------------------------------------------------------------------------------
	//---------------------------------------------------------------------------------------
	function bill96TextforQC(){
		 if(app.translator.getCurrentLanguage() === "en" && outletProvince ==="QC" ){
			$('#CPLD_bold').html(WICI.dictionary_fr.OP_CPLD_P_bold);
			$('#CPLD_disclose').html(WICI.dictionary_fr.OP_CPLD_disclosure);
			$('#CPLD_Coverage').html(WICI.dictionary_fr.OP_CPLD_coverage);
			$('#CPLD_important').html(WICI.dictionary_fr.OP_CPLD_important);
			$('#CPLD_group1').html(WICI.dictionary_fr.OP_CPLD_creator_group1);
		    $('#CPLD_group2').html(WICI.dictionary_fr.OP_CPLD_creator_group2);
		    $('#CPLD_group3').html(WICI.dictionary_fr.OP_CPLD_creator_group3);		
	        $('#CPLD_group4').html(WICI.dictionary_fr.OP_CPLD_creator_group4);	
		    $('#CPLD_group5').html(WICI.dictionary_fr.OP_CPLD_creator_group5);
		    $('#CPLD_premium').html(WICI.dictionary_fr.OP_CPLD_premium);
		    $('#CPLD_premium_p').html(WICI.dictionary_fr.OP_CPLD_premium_p);
		    $('#CPLD_eligibility').html(WICI.dictionary_fr.OP_CPLD_eligibility);
		    $('#CPLD_eligibility_p').html(WICI.dictionary_fr.OP_CPLD_eligibility_p);
		    $('#CPLD_benefits').html(WICI.dictionary_fr.OP_CPLD_benefits);
		    $('#CPLD_insurer').html(WICI.dictionary_fr.OP_CPLD_insurer);
		    $('#CPLD_insurer_para1').html(WICI.dictionary_fr.OP_CPLD_insurer_para1);
		    $('#CPLD_insurer_para2').html(WICI.dictionary_fr.OP_CPLD_insurer_para2);
		    $('#CPLD_monthly_benefits_p').html(WICI.dictionary_fr.OP_CPLD_monthly_benefits_p);
		    $('#CPLD_monthly_benefits_20_p').html(WICI.dictionary_fr.OP_CPLD_monthly_benefits_20_p);
		    $('#CPLD_monthly_benefits_10_p').html(WICI.dictionary_fr.OP_CPLD_monthly_benefits_10_p);
		    $('#CPLD_outstanding_p').html(WICI.dictionary_fr.OP_CPLD_outstanding_p);
		    $('#CPLD_initial_benefit').html(WICI.dictionary_fr.OP_CPLD_initail_benefit_p);
		    $('#CPLD_all_p').html(WICI.dictionary_fr.OP_CPLD_all_p);
		    $('#CPLD_life_coverage').html(WICI.dictionary_fr.OP_CPLD_life_coverage);
		    $('#CPLD_life_coverage_p1').html(WICI.dictionary_fr.OP_CPLD_life_coverage_para1);
		    $('#CPLD_life_coverage_p2').html(WICI.dictionary_fr.OP_CPLD_life_coverage_para2);
		    $('#CPLD_life_coverage_p3').html(WICI.dictionary_fr.OP_CPLD_life_coverage_para3);
		    $('#CPLD_claim_procedure').html(WICI.dictionary_fr.OP_CPLD_claim_procedures);
		    $('#CPLD_claim_procedure_p1').html(WICI.dictionary_fr.OP_CPLD_claim_procedures_para1);
		    $('#CPLD_claim_procedure_p2').html(WICI.dictionary_fr.OP_CPLD_claim_procedures_para2);
		    $('#CPLD_claim_procedure_p3').html(WICI.dictionary_fr.OP_CPLD_claim_procedures_para3);	    
		    $('#CPLD_termination').html(WICI.dictionary_fr.OP_CPLD_termination);
		    $('#CPLD_termination_p1').html(WICI.dictionary_fr.OP_CPLD_termination_para1);
		    $('#CPLD_termination_p2').html(WICI.dictionary_fr.OP_CPLD_termination_para2);
		    $('#CPLD_termination_l1').html(WICI.dictionary_fr.OP_CPLD_termination_list1);
		    $('#CPLD_termination_l2').html(WICI.dictionary_fr.OP_CPLD_termination_list2);
		    $('#CPLD_termination_l3').html(WICI.dictionary_fr.OP_CPLD_termination_list3);
		    $('#CPLD_termination_l4').html(WICI.dictionary_fr.OP_CPLD_termination_list4);
	        $('#CPLD_termination_l5').html(WICI.dictionary_fr.OP_CPLD_termination_list5);
		    $('#CPLD_termination_l6').html(WICI.dictionary_fr.OP_CPLD_termination_list6);    
		    $('#CPLD_creditor').html(WICI.dictionary_fr.OP_CPLD_creditor);
		    $('#CPLD_creditor_p1').html(WICI.dictionary_fr.OP_CPLD_creditor_para1);
		    $('#CPLD_Enrolling').html(WICI.dictionary_fr.OP_CPLD_Enrolling_you_agree_this);
		    $('#CPLD_Enrolling_1').html(WICI.dictionary_fr.OP_CPLD_Enrolling_you_agree_this_1);
		    $('#CPLD_Enrolling_2').html(WICI.dictionary_fr.OP_CPLD_Enrolling_you_agree_this_2);
		    $('#CPLD_Enrolling_3').html(WICI.dictionary_fr.OP_CPLD_Enrolling_you_agree_this_3);
		    $('#CPLD_Enrolling_4').html(WICI.dictionary_fr.OP_CPLD_Enrolling_you_agree_this_4);
		    $('#CPLD_Enrolling_5').html(WICI.dictionary_fr.OP_CPLD_Enrolling_you_agree_this_5);
		    $('#CPLD_Enrolling_6').html(WICI.dictionary_fr.OP_CPLD_Enrolling_you_agree_this_6);
		    $('#CPLD_Enrolling_7').html(WICI.dictionary_fr.OP_CPLD_Enrolling_you_agree_this_7);
		    $('#CPLD_Enrolling_8').html(WICI.dictionary_fr.OP_CPLD_Enrolling_you_agree_this_8);
		    $('#CPLD_Enrolling_9').html(WICI.dictionary_fr.OP_CPLD_Enrolling_you_agree_this_9);
		    $('#CPLD_Enrolling_10').html(WICI.dictionary_fr.OP_CPLD_Enrolling_you_agree_this_10);
		    $('#CPLD_Enrolling_11').html(WICI.dictionary_fr.OP_CPLD_Enrolling_you_agree_this_11);
		    $('#CPLD_Enrolling_12').html(WICI.dictionary_fr.OP_CPLD_Enrolling_you_agree_this_12);
		    $('#CPLD_Enrolling_13').html(WICI.dictionary_fr.OP_CPLD_Enrolling_you_agree_this_13);
		    $('#CPLD_liketoenroll').html(WICI.dictionary_fr.OP_CPLD_liketoenroll);
		    $('#CPLD_consentyesorno').html(WICI.dictionary_fr.OP_CPLD_consentyesorno);
		    
		    
         }
         else if(app.translator.getCurrentLanguage() === "fr" && outletProvince ==="QC" ){
	        $('#CPLD_bold').html(WICI.dictionary_fr.OP_CPLD_P_bold);
			$('#CPLD_disclose').html(WICI.dictionary_fr.OP_CPLD_disclosure);
			$('#CPLD_Coverage').html(WICI.dictionary_fr.OP_CPLD_coverage);
			$('#CPLD_important').html(WICI.dictionary_fr.OP_CPLD_important);
			$('#CPLD_group1').html(WICI.dictionary_fr.OP_CPLD_creator_group1);
		    $('#CPLD_group2').html(WICI.dictionary_fr.OP_CPLD_creator_group2);
		    $('#CPLD_group3').html(WICI.dictionary_fr.OP_CPLD_creator_group3);		
	        $('#CPLD_group4').html(WICI.dictionary_fr.OP_CPLD_creator_group4);	
		    $('#CPLD_group5').html(WICI.dictionary_fr.OP_CPLD_creator_group5);
		    $('#CPLD_premium').html(WICI.dictionary_fr.OP_CPLD_premium);
		    $('#CPLD_premium_p').html(WICI.dictionary_fr.OP_CPLD_premium_p);
		    $('#CPLD_eligibility').html(WICI.dictionary_fr.OP_CPLD_eligibility);
		    $('#CPLD_eligibility_p').html(WICI.dictionary_fr.OP_CPLD_eligibility_p);
		    $('#CPLD_benefits').html(WICI.dictionary_fr.OP_CPLD_benefits);
		    $('#CPLD_insurer').html(WICI.dictionary_fr.OP_CPLD_insurer);
		    $('#CPLD_insurer_para1').html(WICI.dictionary_fr.OP_CPLD_insurer_para1);
		    $('#CPLD_insurer_para2').html(WICI.dictionary_fr.OP_CPLD_insurer_para2);
		    $('#CPLD_monthly_benefits_p').html(WICI.dictionary_fr.OP_CPLD_monthly_benefits_p);
		    $('#CPLD_monthly_benefits_20_p').html(WICI.dictionary_fr.OP_CPLD_monthly_benefits_20_p);
		    $('#CPLD_monthly_benefits_10_p').html(WICI.dictionary_fr.OP_CPLD_monthly_benefits_10_p);
		    $('#CPLD_outstanding_p').html(WICI.dictionary_fr.OP_CPLD_outstanding_p);
		    $('#CPLD_initial_benefit').html(WICI.dictionary_fr.OP_CPLD_initail_benefit_p);
		    $('#CPLD_all_p').html(WICI.dictionary_fr.OP_CPLD_all_p);
		    $('#CPLD_life_coverage').html(WICI.dictionary_fr.OP_CPLD_life_coverage);
		    $('#CPLD_life_coverage_p1').html(WICI.dictionary_fr.OP_CPLD_life_coverage_para1);
		    $('#CPLD_life_coverage_p2').html(WICI.dictionary_fr.OP_CPLD_life_coverage_para2);
		    $('#CPLD_life_coverage_p3').html(WICI.dictionary_fr.OP_CPLD_life_coverage_para3);
		    $('#CPLD_claim_procedure').html(WICI.dictionary_fr.OP_CPLD_claim_procedures);
		    $('#CPLD_claim_procedure_p1').html(WICI.dictionary_fr.OP_CPLD_claim_procedures_para1);
		    $('#CPLD_claim_procedure_p2').html(WICI.dictionary_fr.OP_CPLD_claim_procedures_para2);
		    $('#CPLD_claim_procedure_p3').html(WICI.dictionary_fr.OP_CPLD_claim_procedures_para3);	    
		    $('#CPLD_termination').html(WICI.dictionary_fr.OP_CPLD_termination);
		    $('#CPLD_termination_p1').html(WICI.dictionary_fr.OP_CPLD_termination_para1);
		    $('#CPLD_termination_p2').html(WICI.dictionary_fr.OP_CPLD_termination_para2);
		    $('#CPLD_termination_l1').html(WICI.dictionary_fr.OP_CPLD_termination_list1);
		    $('#CPLD_termination_l2').html(WICI.dictionary_fr.OP_CPLD_termination_list2);
		    $('#CPLD_termination_l3').html(WICI.dictionary_fr.OP_CPLD_termination_list3);
		    $('#CPLD_termination_l4').html(WICI.dictionary_fr.OP_CPLD_termination_list4);
	        $('#CPLD_termination_l5').html(WICI.dictionary_fr.OP_CPLD_termination_list5);
		    $('#CPLD_termination_l6').html(WICI.dictionary_fr.OP_CPLD_termination_list6);    
		    $('#CPLD_creditor').html(WICI.dictionary_fr.OP_CPLD_creditor);
		    $('#CPLD_creditor_p1').html(WICI.dictionary_fr.OP_CPLD_creditor_para1);
		    $('#CPLD_Enrolling').html(WICI.dictionary_fr.OP_CPLD_Enrolling_you_agree_this);
		    $('#CPLD_Enrolling_1').html(WICI.dictionary_fr.OP_CPLD_Enrolling_you_agree_this_1);
		    $('#CPLD_Enrolling_2').html(WICI.dictionary_fr.OP_CPLD_Enrolling_you_agree_this_2);
		    $('#CPLD_Enrolling_3').html(WICI.dictionary_fr.OP_CPLD_Enrolling_you_agree_this_3);
		    $('#CPLD_Enrolling_4').html(WICI.dictionary_fr.OP_CPLD_Enrolling_you_agree_this_4);
		    $('#CPLD_Enrolling_5').html(WICI.dictionary_fr.OP_CPLD_Enrolling_you_agree_this_5);
		    $('#CPLD_Enrolling_6').html(WICI.dictionary_fr.OP_CPLD_Enrolling_you_agree_this_6);
		    $('#CPLD_Enrolling_7').html(WICI.dictionary_fr.OP_CPLD_Enrolling_you_agree_this_7);
		    $('#CPLD_Enrolling_8').html(WICI.dictionary_fr.OP_CPLD_Enrolling_you_agree_this_8);
		    $('#CPLD_Enrolling_9').html(WICI.dictionary_fr.OP_CPLD_Enrolling_you_agree_this_9);
		    $('#CPLD_Enrolling_10').html(WICI.dictionary_fr.OP_CPLD_Enrolling_you_agree_this_10);
		    $('#CPLD_Enrolling_11').html(WICI.dictionary_fr.OP_CPLD_Enrolling_you_agree_this_11);
		    $('#CPLD_Enrolling_12').html(WICI.dictionary_fr.OP_CPLD_Enrolling_you_agree_this_12);
		    $('#CPLD_Enrolling_13').html(WICI.dictionary_fr.OP_CPLD_Enrolling_you_agree_this_13);
		    $('#CPLD_liketoenroll').html(WICI.dictionary_fr.OP_CPLD_liketoenroll);
		    $('#CPLD_consentyesorno').html(WICI.dictionary_fr.OP_CPLD_consentyesorno);

         }
         else if(outletProvince !== "QC"){
		    $('#CPLD_bold').html(translator.translateKey("OP_CPLD_P_bold"));
		    $('#CPLD_disclose').html(translator.translateKey("OP_CPLD_disclosure"));
		    $('#CPLD_Coverage').html(translator.translateKey("OP_CPLD_coverage"));
		    $('#CPLD_important').html(translator.translateKey("OP_CPLD_important"));
		    $('#CPLD_group1').html(translator.translateKey("OP_CPLD_creator_group1"));
		    $('#CPLD_group2').html(translator.translateKey("OP_CPLD_creator_group2"));
		    $('#CPLD_group3').html(translator.translateKey("OP_CPLD_creator_group3"));		
		    $('#CPLD_group4').html(translator.translateKey("OP_CPLD_creator_group4"));	
		    $('#CPLD_group5').html(translator.translateKey("OP_CPLD_creator_group5"));
		    $('#CPLD_premium').html(translator.translateKey("OP_CPLD_premium"));
		    $('#CPLD_premium_p').html(translator.translateKey("OP_CPLD_premium_p"));
		    $('#CPLD_eligibility').html(translator.translateKey("OP_CPLD_eligibility"));
		    $('#CPLD_eligibility_p').html(translator.translateKey("OP_CPLD_eligibility_p"));
		    $('#CPLD_benefits').html(translator.translateKey("OP_CPLD_benefits"));
		    $('#CPLD_insurer').html(translator.translateKey("OP_CPLD_insurer"));
		    $('#CPLD_insurer_para1').html(translator.translateKey("OP_CPLD_insurer_para1"));
		    $('#CPLD_insurer_para2').html(translator.translateKey("OP_CPLD_insurer_para2"));
		    $('#CPLD_monthly_benefits_p').html(translator.translateKey("OP_CPLD_monthly_benefits_p"));
		    $('#CPLD_monthly_benefits_20_p').html(translator.translateKey("OP_CPLD_monthly_benefits_20_p"));
		    $('#CPLD_monthly_benefits_10_p').html(translator.translateKey("OP_CPLD_monthly_benefits_10_p"));
		    $('#CPLD_outstanding_p').html(translator.translateKey("OP_CPLD_outstanding_p"));
		    $('#CPLD_initial_benefit').html(translator.translateKey("OP_CPLD_initail_benefit_p"));
		    $('#CPLD_all_p').html(translator.translateKey("OP_CPLD_all_p"));
		    $('#CPLD_life_coverage').html(translator.translateKey("OP_CPLD_life_coverage"));
		    $('#CPLD_life_coverage_p1').html(translator.translateKey("OP_CPLD_life_coverage_para1"));
		    $('#CPLD_life_coverage_p2').html(translator.translateKey("OP_CPLD_life_coverage_para2"));
		    $('#CPLD_life_coverage_p3').html(translator.translateKey("OP_CPLD_life_coverage_para3"));
		    $('#CPLD_claim_procedure').html(translator.translateKey("OP_CPLD_claim_procedures"));
		    $('#CPLD_claim_procedure_p1').html(translator.translateKey("OP_CPLD_claim_procedures_para1"));
		    $('#CPLD_claim_procedure_p2').html(translator.translateKey("OP_CPLD_claim_procedures_para2"));
		    $('#CPLD_claim_procedure_p3').html(translator.translateKey("OP_CPLD_claim_procedures_para3"));	    
		    $('#CPLD_termination').html(translator.translateKey("OP_CPLD_termination"));
		    $('#CPLD_termination_p1').html(translator.translateKey("OP_CPLD_termination_para1"));
		    $('#CPLD_termination_p2').html(translator.translateKey("OP_CPLD_termination_para2"));
		    $('#CPLD_termination_l1').html(translator.translateKey("OP_CPLD_termination_list1"));
		    $('#CPLD_termination_l2').html(translator.translateKey("OP_CPLD_termination_list2"));
		    $('#CPLD_termination_l3').html(translator.translateKey("OP_CPLD_termination_list3"));
		    $('#CPLD_termination_l4').html(translator.translateKey("OP_CPLD_termination_list4"));
		    $('#CPLD_termination_l5').html(translator.translateKey("OP_CPLD_termination_list5"));
		    $('#CPLD_termination_l6').html(translator.translateKey("OP_CPLD_termination_list6"));    
		    $('#CPLD_creditor').html(translator.translateKey("OP_CPLD_creditor"));
		    $('#CPLD_creditor_p1').html(translator.translateKey("OP_CPLD_creditor_para1"));
		    $('#CPLD_Enrolling').html(translator.translateKey("OP_CPLD_Enrolling_you_agree_this"));
		    $('#CPLD_Enrolling_1').html(translator.translateKey("OP_CPLD_Enrolling_you_agree_this_1"));
		    $('#CPLD_Enrolling_2').html(translator.translateKey("OP_CPLD_Enrolling_you_agree_this_2"));
		    $('#CPLD_Enrolling_3').html(translator.translateKey("OP_CPLD_Enrolling_you_agree_this_3"));
		    $('#CPLD_Enrolling_4').html(translator.translateKey("OP_CPLD_Enrolling_you_agree_this_4"));
		    $('#CPLD_Enrolling_5').html(translator.translateKey("OP_CPLD_Enrolling_you_agree_this_5"));
		    $('#CPLD_Enrolling_6').html(translator.translateKey("OP_CPLD_Enrolling_you_agree_this_6"));
		    $('#CPLD_Enrolling_7').html(translator.translateKey("OP_CPLD_Enrolling_you_agree_this_7"));
		    $('#CPLD_Enrolling_8').html(translator.translateKey("OP_CPLD_Enrolling_you_agree_this_8"));
		    $('#CPLD_Enrolling_9').html(translator.translateKey("OP_CPLD_Enrolling_you_agree_this_9"));
		    $('#CPLD_Enrolling_10').html(translator.translateKey("OP_CPLD_Enrolling_you_agree_this_10"));
		    $('#CPLD_Enrolling_11').html(translator.translateKey("OP_CPLD_Enrolling_you_agree_this_11"));
		    $('#CPLD_Enrolling_12').html(translator.translateKey("OP_CPLD_Enrolling_you_agree_this_12"));
		    $('#CPLD_Enrolling_13').html(translator.translateKey("OP_CPLD_Enrolling_you_agree_this_13"));
		    $('#CPLD_liketoenroll').html(translator.translateKey("OP_CPLD_liketoenroll"));
		    $('#CPLD_consentyesorno').html(translator.translateKey("OP_CPLD_consentyesorno"));
         }
	}
    
    //---------------------------------------------------------------------------------------
    function updateOptionalProductsVisibility() {
        showHideOptionalProductsCPC();
        showHideOptionalProductsCPLD();
        toggleAllWarningDIVs();
    }
    //---------------------------------------------------------------------------------------
    function createSignatureControl1() {
        if (!signatureControl1) {
            // Restore signature
            if (model.get('userSignatureNative_CPLD')) {
                // Create signature object
                signatureControl1 = $(refs.signature_CPLD).jSignature({'signatureLine': true});
                // Restore signature content
                $(refs.signature_CPLD).jSignature("setData", model.get('userSignatureNative_CPLD'), 'native');
                // Apply some dependencies
                onSignatureChaged1();
            } else {
                signatureControl1 = $(refs.signature_CPLD).jSignature();
            }

            $(refs.signature_CPLD).bind('change', onSignatureChaged1);
            showDateCPLD();
        }
    }
    // ---------------------------------------------------------------------------------------
    function showDateCPLD(){
        $(refs.signDateCPLD).text(moment().format('DD MMMM YYYY'));
    }
    // ---------------------------------------------------------------------------------------
    function createSignatureControl2() {
        if (!signatureControl2) {
            // Restore signature
            if (model.get('userSignatureNative_CPC')) {
                // Create signature object
                signatureControl2 = $(refs.signature_CPC).jSignature({'signatureLine': true});
                // Restore signature content
                $(refs.signature_CPC).jSignature("setData", model.get('userSignatureNative_CPC'), 'native');
                // Apply some dependencies
                onSignatureChaged2();
            } else {
                signatureControl2 = $(refs.signature_CPC).jSignature();
            }

            $(refs.signature_CPC).bind('change', onSignatureChaged2);
            showDateCPC();
        }
    }
    // ---------------------------------------------------------------------------------------
    function showDateCPC(){
        $(refs.signDateCPC).text(moment().format('DD MMMM YYYY'));
    }
    //---------------------------------------------------------------------------------------
    function showHideOptionalProductsCPLD(){
        var sMethod = 'showHideOptionalProductsCPLD() ';
        console.log(logPrefix + sMethod);

        if (!$(refs.optionalProducts_CPLD).is(':checked')) {
            $(refs.optionalProducts_CPLD_Area).hide();
            $(refs.optionalProducts_CPLD_Agreement).attr('checked', false);
        } else {
            $(refs.optionalProducts_CPLD_Area).show();
            createSignatureControl1();
        }
    }
    //---------------------------------------------------------------------------------------
    function showHideOptionalProductsCPC(){
        var sMethod = 'showHideOptionalProductsCPC() ';
        console.log(logPrefix + sMethod);

        if(!$(refs.optionalProducts_CPC).is(':checked')) {
            $(refs.optionalProducts_CPC_Area).hide();
            $(refs.optionalProducts_CPC_Agreement).attr('checked', false);
        } else {
            $(refs.optionalProducts_CPC_Area).show();
            createSignatureControl2();
        }
    }
    //---------------------------------------------------------------------------------------
    function hidePAandCP(){
        $(refs.optionalProducts_CPC_Title).hide();
        $(refs.optionalProducts_CPC_Details).hide();
       	$(refs.optionalProducts_CPLD_Item).hide();
       	$(refs.lineSeparatorForCPLD).hide();
       	$(refs.optionalProducts_CPLD_Table).hide();
       	$(refs.optionalProducts_CPC_Item).hide();
       	$(refs.lineSeparatorForCPC).hide();
       	$(refs.optionalProducts_CPC_Table).hide();
       	$(refs.optionalProducts_CPLD).attr('checked', false);
       	$(refs.optionalProducts_CPLD_Agreement).attr('checked', false);
       	$(refs.optionalProducts_CPC).attr('checked', false);
       	$(refs.optionalProducts_CPC_Agreement).attr('checked', false);
    }
	//---------------------------------------------------------------------------------------
	function hideCPC_Content() {
		$(refs.optionalProducts_CPC_Title).hide();
        $(refs.optionalProducts_CPC_Details).hide();
		$(refs.optionalProducts_terms_CPC).hide();
		$(refs.optionalProducts_CPCItem).hide();
		$(refs.lineSeparatorForCPC).hide();		
	}
	//---------------------------------------------------------------------------------------
	function showCPC_Content() {
		$(refs.optionalProducts_CPC_Title).show();
        $(refs.optionalProducts_CPC_Details).show();
		$(refs.optionalProducts_terms_CPC).show();
		$(refs.optionalProducts_CPCItem).show();
		$(refs.lineSeparatorForCPC).show();		
	}	
	//---------------------------------------------------------------------------------------
	function hideCPLD_Content() {
		$(refs.optionalProducts_CPLD_Title).hide();
        $(refs.optionalProducts_CPLD_Details).hide();
		$(refs.optionalProducts_terms_CPLD).hide();
		$(refs.optionalProducts_CPLDItem).hide();
		$(refs.lineSeparatorForCPLD).hide();
	}
	//---------------------------------------------------------------------------------------
	function showCPLD_Content() {
		$(refs.optionalProducts_CPLD_Title).show();
        $(refs.optionalProducts_CPLD_Details).show();
		$(refs.optionalProducts_terms_CPLD).show();
		$(refs.optionalProducts_CPLDItem).show();
		$(refs.lineSeparatorForCPLD).show();		
	}
	//---------------------------------------------------------------------------------------
	function restoreCPCData() {
		if (activationItems.getModel("financialData").get('insuranceSelected') == "CP_Complete") {
			$(refs.optionalProducts_CPC).prop('checked', true);
		}
	}
	//---------------------------------------------------------------------------------------
	function restoreCPLDData() {
		if(activationItems.getModel("financialData").get('insuranceSelected') == "CP_LifeDisability") {
			$(refs.optionalProducts_CPLD).prop('checked', true);
		}
	}
    //---------------------------------------------------------------------------------------
    function onSignatureChaged1(e) {
        var sMethod = 'onSignatureChaged1() ';
        console.log(logPrefix + sMethod);

        if ($(refs.signature_CPLD).jSignature('getData', 'native').length > 0) {
            $(refs.resetSignature1).removeClass('grayflat');
            $(refs.resetSignature1).addClass('blackflat');
            $(refs.resetSignature1).bind('click', onResetSignatureClicked1);
        }
        model.set('userSignatureNative_CPLD',  $(refs.signature_CPLD).jSignature('getData', 'native'));
    }
    //---------------------------------------------------------------------------------------
    function onSignatureChaged2(e) {
        var sMethod = 'onSignatureChaged2() ';
        console.log(logPrefix + sMethod);

        if ($(refs.signature_CPC).jSignature('getData', 'native').length > 0) {
            $(refs.resetSignature2).removeClass('grayflat');
            $(refs.resetSignature2).addClass('blackflat');
            $(refs.resetSignature2).bind('click', onResetSignatureClicked2);
        }
        model.set('userSignatureNative_CPC',  $(refs.signature_CPC).jSignature('getData', 'native'));
    }
    //---------------------------------------------------------------------------------------
    function onResetSignatureClicked1() {
        var sMethod = 'onResetSignatureClicked() ';
        console.log(logPrefix + sMethod);

        $(refs.signature_CPLD).jSignature ('setData', [], 'native');
        $(refs.resetSignature1).removeClass('blackflat');
        $(refs.resetSignature1).addClass('grayflat');
        $(refs.resetSignature1).unbind('click', onResetSignatureClicked1);
    }
    //---------------------------------------------------------------------------------------
    function onResetSignatureClicked2() {
        var sMethod = 'onResetSignatureClicked() ';
        console.log(logPrefix + sMethod);

        $(refs.signature_CPC).jSignature ('setData', [], 'native');
        $(refs.resetSignature2).removeClass('blackflat');
        $(refs.resetSignature2).addClass('grayflat');
        $(refs.resetSignature2).unbind('click', onResetSignatureClicked2);
    }
    //---------------------------------------------------------------------------------------
    function showPrevScreen() {
        var sMethod = 'showPrevScreen() ';
        console.log(logPrefix + sMethod);

        syncUserData();
        flow.back();
    }
    //---------------------------------------------------------------------------------------
    function isOptionalInsuranceSelected (currentModel) {
        return  currentModel.get('optionalProducts_CPLD') == 'Y' ||
            currentModel.get('optionalProducts_CPC') == 'Y' ||
            currentModel.get('optionalProducts_NA') == 'Y';
    }
    //---------------------------------------------------------------------------------------
    function showNextScreen() {
        var sMethod = 'showNextScreen() ';
        console.log(logPrefix + sMethod);

        syncUserData();

        if (app.validationsOn) {
            app.validationDecorator.clearErrArrtibute();

            var rez1 = [];
            var rez2 = [];
            var rez3 = [];
            var rez4 = [];
            if(model.get('optionalProducts_CPLD') == 'Y') {
                rez1 = model.validate(2);
            }

            if (model.get('optionalProducts_CPC') == 'Y') {
                rez2 = model.validate(3);
            }

            if (!model.get('optionalProducts_CheckArea')){
                rez4 = model.validate(1);
            }

            var rez = rez1.concat(rez2);
            rez = rez.concat(rez3, rez4);

            if (rez.length > 0) {
                var errStrArr =[];
                $.each(rez, function(index, item) {
                    errStrArr.push(translator.translateKey(item.err));
                });
                app.validationDecorator.applyErrAttribute(rez);
                return;
            }
        }
        flow.next();
    }   
    // ---------------------------------------------------------------------------------------
    function handleHandoutpromptsNo() {
        var sMethod = 'handleHandoutpromptsNo()';
        console.log(logPrefix + sMethod);
        $screenContainer.addClass('stop-htmlscroll');
        messageDialog.qcDistributionGuide(translator.translateKey("optionalProductScreen_Handoutprompts_YesNo_Message"), 
        		handleHandoutpromptsYes, handleHandoutpromptsNo,  translator.translateKey("optionalProductScreen_Handoutprompts_Title"));
    }
    // ---------------------------------------------------------------------------------------    
    function handleHandoutpromptsYes() {
    	QcEnrollAgree = false;
    	$screenContainer.removeClass('stop-htmlscroll');
        var sMethod = 'handleHandoutpromptsYes()';
        // console.log(logPrefix + QcEnrollAgree);
        console.log(logPrefix + sMethod);
        // flow.next();
    }
    // US3981 - End
    //---------------------------------------------------------------------------------------
    function toggleWarningDIV(objCheckbox, targetItemsSuffix) {
        console.log(targetItemsSuffix);
        if (objCheckbox.is(":checked")) {
            $("#warningDIV" + targetItemsSuffix).removeClass("warningDIV").addClass("warningDIVCleared");
            $("#warningHeader" + targetItemsSuffix).removeClass("warningHeader").addClass("warningHeaderCleared");
            $("#warningText" + targetItemsSuffix).removeClass("warningText").addClass("warningTextCleared");
			$("#warningText1" + targetItemsSuffix).removeClass("warningText1").addClass("warningText1Cleared");
			$('#warningText1CPLD_QC').removeClass("warningText1").addClass("warningText1Cleared");
		    $('#warningText1CPC_QC').removeClass("warningText1").addClass("warningText1Cleared");
        } else {
            $("#warningDIV" + targetItemsSuffix).removeClass("warningDIVCleared").addClass("warningDIV");
            $("#warningHeader" + targetItemsSuffix).removeClass("warningHeaderCleared").addClass("warningHeader");
            $("#warningText" + targetItemsSuffix).removeClass("warningTextCleared").addClass("warningText");
			$("#warningText1" + targetItemsSuffix).removeClass("warningText1Cleared").addClass("warningText1");
			$('#warningText1CPLD_QC').removeClass("warningText1Cleared").addClass("warningText1");
			$('#warningText1CPC_QC').removeClass("warningText1Cleared").addClass("warningText1");
        }
    }
	//---------------------------------------------------------------------------------------
    function toggleAllWarningDIVs() {
        toggleWarningDIV($(refs.optionalProducts_CPLD_Agreement), "CPLD");
        toggleWarningDIV($(refs.optionalProducts_CPC_Agreement), "CPC");
		toggleWarningDIV($(refs.optionalProducts_CPLD_AcceptBox), "CPLD");
		toggleWarningDIV($(refs.optionalProducts_CPC_AcceptBox), "CPC");
    }
};
