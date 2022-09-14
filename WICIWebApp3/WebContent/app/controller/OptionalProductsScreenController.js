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
            showDateCPLD();
			showDateCPC();
        });

        $(refs.optionalProducts_CPLD_Agreement).click(function(){
        	QcEnrollAgree = true;
            toggleWarningDIV($(refs.optionalProducts_CPLD_Agreement), "CPLD");
        });

        $(refs.optionalProducts_CPC_Agreement).click(function(){
        	QcEnrollAgree = true;
            toggleWarningDIV($(refs.optionalProducts_CPC_Agreement), "CPC");
        });
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
        } else {
            $("#warningDIV" + targetItemsSuffix).removeClass("warningDIVCleared").addClass("warningDIV");
            $("#warningHeader" + targetItemsSuffix).removeClass("warningHeaderCleared").addClass("warningHeader");
            $("#warningText" + targetItemsSuffix).removeClass("warningTextCleared").addClass("warningText");
			$("#warningText1" + targetItemsSuffix).removeClass("warningText1Cleared").addClass("warningText1");
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
