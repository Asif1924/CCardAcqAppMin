/**
 * @author Oleksandr_Moroziuk
 */

ensureNamespaceExists();

WICI.OptionalProductsScreenController = function(activationItems, argTranslator, argMessageDialog) {
    var logPrefix = '[WICI.OptionalProductsScreenController]::';
    var $screenContainer = $('#OptionalProductsScreen');
    var translator =    null;
    var messageDialog = null;

    this.show = show;
    this.init = init;
    this.hide = hide;

    var	flow = null;
    var signatureControl1;
    var signatureControl2;
    var signatureControl3;
    this.syncUserData = syncUserData;
    // US3981
    var loginModel = activationItems.getModel('loginScreen');
    var chooseProductModel = activationItems.getModel('chooseProductModel');
    var refs = {
        signature_PA				    : 	'#signature_PA',
        signature_CP					: 	'#signature_CP',
        signature_IW					: 	'#signature_IW',
        resetSignature1					: 	'#signature_Reset_Button1',
        resetSignature2					: 	'#signature_Reset_Button2',
        resetSignature3					: 	'#signature_Reset_Button3',
        flipCreditProtector 		    : 	'#flipCreditProtector',
        creditProtectorYesOption	    : 	'#creditProtectorYesOption',
        acceptAgreement			    	: 	'#optionalProducts_AcceptConditions',
        userAcceptAgreement		    	: 	'#optionalProducts_AgreementBoxContainer',
        proceedButton			     	: 	'#optionalProducts_ProceedButton',
        signDatePA					    : 	'#optionalProducts_SignDatePA',
        signDateCP					    : 	'#optionalProducts_SignDateCP',
        signDateIW					    : 	'#optionalProducts_SignDateIW',

        userSingnature_PA				: 	'#optionalProductsScreen_PA_SingnatureContainer',
        userSingnature_CP				: 	'#optionalProductsScreen_CP_SingnatureContainer',
        userSingnature_IW				: 	'#optionalProductsScreen_IW_SingnatureContainer',

        optionalProducts_PA_Item		:   '#optionalProductsProtectionAdvantageItem',
        optionalProducts_PA             :   '#optionalProducts_PA_CheckField',
        optionalProducts_PA_Area        :   '#optionalProducts_PA_Area',
        optionalProducts_PA_Table       :   '#optionalProducts_PA_Table',
        optionalProducts_PA_Agreement   :   '#optionalProducts_PA_Agreement',
        optionalProduct_PA_AcceptBox	:	'#optionalProduct_PA_AcceptBox_Area',

        // US4168
        optionalProducts_CPInsurance	:	'#optionalProducts_CPInsuranceTextField',
        optionalProducts_TC25_CP_Text	:	'#optionalProducts_TermsAndConditions25_CP_Text',
        optionalProducts_CP_Item		:   '#optionalProductsCreditProtectorItem',
        optionalProducts_CP             :   '#optionalProducts_YesNoTextField',
        optionalProducts_CP_Area        :   '#optionalProducts_CP_Area',
        optionalProducts_CP_Table       :   '#optionalProducts_CP_Table',
        optionalProducts_CP_Agreement   :   '#optionalProducts_CP_Agreement',
        optionalProduct_CP_AcceptBox	:	'#optionalProduct_CP_AcceptBox_Area',
        optionalProduct_CP_description  :   '#section_1',
        optionalProduct_CP_title        :   '#title_1',
        
        optionalProducts_IW_Item		:   '#optionalProductsIdentityWatchItem',
        optionalProducts_IW_Area        :   '#optionalProducts_IW_Area',
        optionalProducts_IW_Table       :   '#optionalProducts_IW_Table',
        optionalProducts_IW             :   '#optionalProducts_IW_CheckField',
        optionalProducts_IW_Lable       :   '#optionalProducts_IW_TextField',
        optionalProducts_IW_Agreement   :   '#optionalProducts_IW_Agreement',
        optionalProduct_IW_AcceptBox	:	'#optionalProduct_IW_AcceptBox_Area',
        optionalProduct_IW_title        :   '#title_IW',

        optionalProducts_NA_Item		:   '#optionalProductsNACheckFieldItem',
        optionalProducts_NA             :   '#optionalProducts_NA_CheckField',
        optionalProducts_Area			:	'#optionalProducts_Area',

        optionalProducts_CheckArea		:	'#optionalProductsTable'
    };

    var model = new WICI.BaseModel({
        name: 'OptionalProductsModel',
        refs: refs,
        data:[
            { notField: true, name: 'optionalProducts_PA',     value: null },
            { notField: true, name: 'optionalProducts_CP',     value: null },
            { notField: true, name: 'optionalProducts_IW',     value: null },
            { notField: true, name: 'optionalProducts_NA',     value: null },

            { notField: true, name: 'optionalProduct_PA_AcceptBox', value: null, validation: {type: 'termsAndConditions', message: '', group: [2]}},
            { notField: true, name: 'optionalProduct_CP_AcceptBox', value: null, validation: {type: 'termsAndConditions', message: '', group: [3]}},
            { notField: true, name: 'optionalProduct_IW_AcceptBox', value: null, validation: {type: 'termsAndConditions', message: '', group: [4]}},

            { name: 'userSingnature_PA', value: null, validation: {type: 'presence', message: '', group: [2]}},
            { name: 'userSingnature_CP', value: null, validation: {type: 'presence', message: '', group: [3]}},
            { name: 'userSingnature_IW', value: null, validation: {type: 'presence', message: '', group: [4]}},

            {name: 'userSingnature', value: null, validation: {type: 'presence', message: 'signatureScreen_validation_signature'}},

            { notField: true, name: 'userSingnatureNative_PA', value: null, validation: null},
            { notField: true, name: 'userSingnatureNative_CP', value: null, validation: null},
            { notField: true, name: 'userSingnatureNative_IW', value: null, validation: null},

            { notField: true, name: 'optionalProducts_PA_Agreement', value: null },
            { notField: true, name: 'optionalProducts_CP_Agreement', value: null },
            { notField: true, name: 'optionalProducts_IW_Agreement', value: null },

            {name: 'signDate',  value: null, validation: {type: 'presence', message: 'signatureScreen_validation_signDate'}},
            {name: 'insuranceCode', value: null, validation: null},

            {name: 'insuranceAgreedFlag', value: null, validation: null},

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

        createView();

        bindEvents();

        $(refs.creditProtectorYesOption).hide();

        hideOptionalProductsSections();

        restoreCreditCardData();

        createFlips();

        // US4083 - Code changes Reverted
   		// removePAandCPifSKProvince();

        // US4168
        hidePAandCPAgeRestriction();
        
        // To ensure the DIVS are styled based on the checkbox state on navigation into the page
        toggleAllWarningDIVs();
    }

    //---------------------------------------------------------------------------------------
    function syncUserData() {
        var sMethod = 'syncUserData() ';
        console.log(logPrefix + sMethod);

        model.set('creditProtectorYesNo',   $(refs.flipCreditProtector + ' ' + 'option:selected').val());

        model.set('userAcceptAgreement',   $(refs.acceptAgreement).is(':checked') ? 'Y' : 'N');

        model.set('signDate',   Date.now().toString('yyyy-MM-dd'));

        model.set('signDatePA',   Date.now().toString('yyyy-MM-dd'));
        model.set('signDateCP',   Date.now().toString('yyyy-MM-dd'));
        model.set('signDateIW',   Date.now().toString('yyyy-MM-dd'));

        model.set('modelsData', activationItems.getDataStringTillModel(model.name));


        model.set('optionalProducts_PA',   $(refs.optionalProducts_PA).is(':checked') ? 'Y' : 'N');
        model.set('optionalProducts_CP',   $(refs.optionalProducts_CP).is(':checked') ? 'Y' : 'N');
        model.set('optionalProducts_IW',   $(refs.optionalProducts_IW).is(':checked') ? 'Y' : 'N');
        model.set('optionalProducts_NA',   $(refs.optionalProducts_NA).is(':checked') ? 'Y' : 'N');


        // Save PA stuff
        model.set('optionalProduct_PA_AcceptBox',   $(refs.optionalProducts_PA_Agreement).is(':checked') ? 'Y' : 'N');
        if (model.get('optionalProducts_PA') == 'Y') {
            model.set('userSingnature_PA',  $(refs.signature_PA).jSignature('getData', 'native').length > 0 ? 'data:' + $(refs.signature_PA).jSignature('getData', 'image').join(',') : null );
            model.set('userSingnatureNative_PA',  $(refs.signature_PA).jSignature('getData', 'native'));
            model.set('userSingnature',  $(refs.signature_PA).jSignature('getData', 'native').length > 0 ? 'data:' + $(refs.signature_PA).jSignature('getData', 'image').join(',') : null );
            model.set('userSingnatureNative',  $(refs.signature).jSignature('getData', 'native'));
        }
        // Save CP stuff
        model.set('optionalProduct_CP_AcceptBox',   $(refs.optionalProducts_CP_Agreement).is(':checked') ? 'Y' : 'N');
        if (model.get('optionalProducts_CP') == 'Y') {
            model.set('userSingnature_CP',  $(refs.signature_CP).jSignature('getData', 'native').length > 0 ? 'data:' + $(refs.signature_CP).jSignature('getData', 'image').join(',') : null );
            model.set('userSingnatureNative_CP',  $(refs.signature_CP).jSignature('getData', 'native'));
            model.set('userSingnature',  $(refs.signature_CP).jSignature('getData', 'native').length > 0 ? 'data:' + $(refs.signature_CP).jSignature('getData', 'image').join(',') : null );
            model.set('userSingnatureNative',  $(refs.signature).jSignature('getData', 'native'));
        }
        // Save IW stuff
        model.set('optionalProduct_IW_AcceptBox',   $(refs.optionalProducts_IW_Agreement).is(':checked') ? 'Y' : 'N');
        if (model.get('optionalProducts_IW') == 'Y') {
            model.set('userSingnature_IW',  $(refs.signature_IW).jSignature('getData', 'native').length > 0 ? 'data:' + $(refs.signature_IW).jSignature('getData', 'image').join(',') : null );
            model.set('userSingnatureNative_IW',  $(refs.signature_IW).jSignature('getData', 'native'));
            model.set('userSingnature',  $(refs.signature_IW).jSignature('getData', 'native').length > 0 ? 'data:' + $(refs.signature_IW).jSignature('getData', 'image').join(',') : null );
            model.set('userSingnatureNative',  $(refs.signature).jSignature('getData', 'native'));
        }

        model.set('insuranceCode',  'N');//by default
        model.set('insuranceAgreedFlag',  'N');//by default

        if(model.get('optionalProduct_PA_AcceptBox') == 'Y') {
            model.set('insuranceCode', 'W4' );
            model.set('insuranceAgreedFlag',  'Y');
        }

        if(model.get('optionalProduct_CP_AcceptBox') == 'Y') {
            model.set('insuranceCode', 'CP' );
            model.set('insuranceAgreedFlag',  'Y');
        }

        if(model.get('optionalProduct_IW_AcceptBox') == 'Y') {
            model.set('insuranceCode', 'IL' );
            model.set('insuranceAgreedFlag',  'Y');
        }

        if($(refs.optionalProducts_NA).is(':checked')) {
            model.set('insuranceCode',  'N');
            model.set('insuranceAgreedFlag',  'N');
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

        if(savedData === null)
        {
            model.set('modelsData', dataEnteredInThePrevScreens);
        }
        else
        {
            if(dataEnteredInThePrevScreens.length !== savedData.length || dataEnteredInThePrevScreens !== savedData)
            {
                dataEqual = false;
            }
        }

        if(!dataEqual)
        {
            model.set('userAcceptAgreement', 'N');
            model.set('userSingnature_PA', null);
            model.set('userSingnature_CP', null);
            model.set('userSingnature_IW', null);
            model.set('userSingnatureNative', null);
        }

        $(refs.flipCreditProtector).val(model.get('creditProtectorYesNo'));

        $(refs.acceptAgreement).prop('checked', model.get('userAcceptAgreement') === 'Y' ? true : false );

        //when restoring page state - get states of radiobuttons from model and set them
        $(refs.optionalProducts_PA).prop('checked', model.get('optionalProducts_PA') === 'Y' ? true : false);
        $(refs.optionalProducts_CP).prop('checked', model.get('optionalProducts_CP') === 'Y' ? true : false);
        $(refs.optionalProducts_IW).prop('checked', model.get('optionalProducts_IW') === 'Y' ? true : false);
        $(refs.optionalProducts_NA).prop('checked', model.get('optionalProducts_NA') === 'Y' ? true : false);
        console.log(model);

        //when restoring page state - get states of checkboxes from model and set them
        $(refs.optionalProducts_PA_Agreement).attr('checked', model.get('optionalProduct_PA_AcceptBox') === 'Y' ? true : false);
        $(refs.optionalProducts_CP_Agreement).attr('checked', model.get('optionalProduct_CP_AcceptBox') === 'Y' ? true : false);
        $(refs.optionalProducts_IW_Agreement).attr('checked', model.get('optionalProduct_IW_AcceptBox') === 'Y' ? true : false);
    }
    //---------------------------------------------------------------------------------------
    function updatePanelsVisibility(show)
    {
        if(show == 'Y')
        {
            $(refs.creditProtectorYesOption).show();
            //createSignatureControl();
        }
        else
        {
            $(refs.creditProtectorYesOption).hide();
        }
    }
    //---------------------------------------------------------------------------------------
    function createFlips (){
        $(refs.flipCreditProtector).slider();
    }
    //---------------------------------------------------------------------------------------
    function show() {
        $screenContainer.show();

        if(model.get('creditProtectorYesNo') == 'Y')
        {
            updatePanelsVisibility(model.get('creditProtectorYesNo'));
        }

        translator.run('OptionalProductsScreen');

        // Show selected product info
        showHideOptionalProductsPA();
        showHideOptionalProductsCP();
        showHideOptionalProductsIW();
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
                //"nextButtonId" 			: "OptionalProductsScreen_NextButton"
            }
        ).appendTo("#OptionalProductsScreen");

        $('#OptionalProductsScreen_SettingsButton').addClass('rightPosition');
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
        $(refs.optionalProducts_PA_Area).hide();
        $(refs.optionalProducts_CP_Area).hide();
        $(refs.optionalProducts_IW_Area).hide();
    }
    //---------------------------------------------------------------------------------------
    function onResetSignature1Clicked () {
        var sMethod = 'onResetSignatureClicked() ';
        console.log(logPrefix + sMethod);

        // Clear canvas
        $(refs.signature_PA).jSignature('reset');
        $(refs.resetSignature1).removeClass('darkgrayflat');
        $(refs.resetSignature1).addClass('grayflat');
        $(refs.resetSignature1).unbind('click', onResetSignature1Clicked);
    }
    //---------------------------------------------------------------------------------------
    function onResetSignature2Clicked () {
        var sMethod = 'onResetSignatureClicked() ';
        console.log(logPrefix + sMethod);
        // Clear canvas
        $(refs.signature_CP).jSignature('reset');
        $(refs.resetSignature2).removeClass('darkgrayflat');
        $(refs.resetSignature2).addClass('grayflat');
        $(refs.resetSignature2).unbind('click', onResetSignature2Clicked);
    }
    //---------------------------------------------------------------------------------------
    function onResetSignature3Clicked () {
        var sMethod = 'onResetSignatureClicked() ';
        console.log(logPrefix + sMethod);
        // Clear canvas
        $(refs.signature_IW).jSignature('reset');
        $(refs.resetSignature3).removeClass('darkgrayflat');
        $(refs.resetSignature3).addClass('grayflat');
        $(refs.resetSignature3).unbind('click', onResetSignature3Clicked);
    }
    //---------------------------------------------------------------------------------------

    function bindEvents() {
        var sMethod = 'bindEvents() ';
        console.log(logPrefix + sMethod);

//        $('#OptionalProductsScreen_NextButton').click(function() {
//            showNextScreen();
//        });
        $('.OptionalProductsScreen_PrevButton').click(function() {
            showPrevScreen();
        });

        $(refs.proceedButton).click(function(){
            console.log("optionalProducts_ProceedButton.click");
            showNextScreen();
        });

        $(refs.flipCreditProtector).change(function() {
            updatePanelsVisibility($(this).val());
        });

        $(refs.optionalProducts_PA).change(function() {
            //
            //$(refs.optionalProducts_PA_Lable).text(translator.translateKey(activationItems.getCheckBoxValueFriendlyName($(refs.optionalProducts_PA).is(':checked'))));
            updateOptionalProductsVisibility();
        });

        $(refs.optionalProducts_CP).change(function() {
            //$(refs.optionalProductsYesNoLable).text(translator.translateKey(activationItems.getCheckBoxValueFriendlyName($(refs.optionalProducts_CP).is(':checked'))));
            updateOptionalProductsVisibility();
        });

        $(refs.optionalProducts_IW).change(function() {
            //$(refs.optionalProducts_IW_Lable).text(translator.translateKey(activationItems.getCheckBoxValueFriendlyName($(refs.optionalProducts_IW).is(':checked'))));
            updateOptionalProductsVisibility();
        });


        $(refs.optionalProducts_NA).change(function() {
            updateOptionalProductsVisibility();
        });

        $.subscribe('translatorFinished',function(){
            showDatePa();
        });
        $.subscribe('translatorFinished',function(){
            showDateCp();
        });
        $.subscribe('translatorFinished',function(){
            showDateIW();
        });

        $(refs.optionalProducts_PA_Agreement).click(function(){
            toggleWarningDIV($(refs.optionalProducts_PA_Agreement), "PA");
        });

        $(refs.optionalProducts_CP_Agreement).click(function(){
            toggleWarningDIV($(refs.optionalProducts_CP_Agreement), "CP");
        });

        $(refs.optionalProducts_IW_Agreement).click(function(){
            toggleWarningDIV($(refs.optionalProducts_IW_Agreement), "IW");
        });

    }
    //---------------------------------------------------------------------------------------
    function updateOptionalProductsVisibility()
    {
        showHideOptionalProductsIW();
        showHideOptionalProductsCP();
        showHideOptionalProductsPA();

        // TODO: refactor this code - move to separated methods
        $(refs.signature_PA).jSignature ('setData', [], 'native');
        $(refs.resetSignature1).removeClass('blackflat');
        $(refs.resetSignature1).addClass('grayflat');
        $(refs.resetSignature1).unbind('click', onResetSignatureClicked1);
        $(refs.signature_CP).jSignature ('setData', [], 'native');
        $(refs.resetSignature2).removeClass('blackflat');
        $(refs.resetSignature2).addClass('grayflat');
        $(refs.resetSignature2).unbind('click', onResetSignatureClicked2);
        $(refs.signature_IW).jSignature ('setData', [], 'native');
        $(refs.resetSignature3).removeClass('blackflat');
        $(refs.resetSignature3).addClass('grayflat');
        $(refs.resetSignature3).unbind('click', onResetSignatureClicked3);

        toggleAllWarningDIVs();
    }
    //---------------------------------------------------------------------------------------
    function createSignatureControl1() {
        if (!signatureControl1) {
            // Restore signature
//        	fixSignatureWidth();
            if (model.get('userSingnatureNative_PA')) {
                // Create signature object
                signatureControl1 = $(refs.signature_PA).jSignature({'signatureLine': true});
                // Restore signature content
                $(refs.signature_PA).jSignature("setData", model.get('userSingnatureNative_PA'), 'native');
                // Apply some dependencies
                onSignatureChaged1();
            } else {
                signatureControl1 = $(refs.signature_PA).jSignature();
            }

            $(refs.signature_PA).bind('change', onSignatureChaged1);
            showDatePa();
        }
    }
    // ---------------------------------------------------------------------------------------
    function showDatePa(){
        $(refs.signDatePA).text(moment().format('DD MMMM YYYY'));
    }
    // ---------------------------------------------------------------------------------------
    function createSignatureControl2() {
        if (!signatureControl2) {
//        	fixSignatureWidth();
            // Restore signature
            if (model.get('userSingnatureNative_CP')) {
                // Create signature object
                signatureControl2 = $(refs.signature_CP).jSignature({'signatureLine': true});
                // Restore signature content
                $(refs.signature_CP).jSignature("setData", model.get('userSingnatureNative_CP'), 'native');
                // Apply some dependencies
                onSignatureChaged2();
            } else {
                signatureControl2 = $(refs.signature_CP).jSignature();
            }

            $(refs.signature_CP).bind('change', onSignatureChaged2);
            showDateCp();
        }
    }
    // ---------------------------------------------------------------------------------------
    function showDateCp(){
        $(refs.signDateCP).text(moment().format('DD MMMM YYYY'));
    }
    // ---------------------------------------------------------------------------------------
    function createSignatureControl3() {
        if (!signatureControl3) {
            // Restore signature
//        	fixSignatureWidth();
            if (model.get('userSingnatureNative_IW')) {
                // Create signature object
                signatureControl3 = $(refs.signature_IW).jSignature({'signatureLine': true});
                // Restore signature content
                $(refs.signature_IW).jSignature("setData", model.get('userSingnatureNative_IW'), 'native');
                onSignatureChaged3();
            } else {
                signatureControl3 = $(refs.signature_IW).jSignature();
            }

            $(refs.signature_IW).bind('change', onSignatureChaged3);
            showDateIW();
        }
    }
//    function fixSignatureWidth(){
//    	var signatureWidth = 600;
//		if(window && window.devicePixelRatio) {
//			 $(".sugnatureFixes").css('width', (signatureWidth/window.devicePixelRatio)+'px');
//		}
//    }
    // ---------------------------------------------------------------------------------------
    function showDateIW(){
        $(refs.signDateIW).text(moment().format('DD MMMM YYYY'));
    }
    //---------------------------------------------------------------------------------------
    function showHideOptionalProductsPA(){
        var sMethod = 'showHideOptionalProductsPA() ';
        console.log(logPrefix + sMethod);

        if (!$(refs.optionalProducts_PA).is(':checked')) {
            $(refs.optionalProducts_PA_Area).hide();
            //$(refs.signature_PA).jSignature('reset');
            $(refs.optionalProducts_PA_Agreement).attr('checked', false);
        }
        else{
            $(refs.optionalProducts_PA_Area).show();
            createSignatureControl1();
        }
    }
    //---------------------------------------------------------------------------------------
    function showHideOptionalProductsCP(){
        var sMethod = 'showHideOptionalProductsCP() ';
        console.log(logPrefix + sMethod);

        if (!$(refs.optionalProducts_CP).is(':checked')) {
            $(refs.optionalProducts_CP_Area).hide();
            //$(refs.signature_CP).jSignature('reset');
            $(refs.optionalProducts_CP_Agreement).attr('checked', false);
        }
        else{
            $(refs.optionalProducts_CP_Area).show();
            // Initialize signature if it not jet initialized
            createSignatureControl2();
        }
    }
    //---------------------------------------------------------------------------------------
    function showHideOptionalProductsIW(){
        var sMethod = 'showHideOptionalProductsIW() ';
        console.log(logPrefix + sMethod);

        if (!$(refs.optionalProducts_IW).is(':checked')) {
            $(refs.optionalProducts_IW_Area).hide();
            //$(refs.signature_IW).jSignature('reset');
            $(refs.optionalProducts_IW_Agreement).attr('checked', false);
        }
        else{
            $(refs.optionalProducts_IW_Area).show();
            createSignatureControl3();
        }
    }
    //---------------------------------------------------------------------------------------
    //Delete Protection Advantage and Credit Protector items for SK province
    function removePAandCPifSKProvince() {
 	var personalDataModel = activationItems.getModel("personalData2_Address");
 	// UAT 39 - CP Revitalization, Missed Requirement
 	var chooseProductDataModel = activationItems.getModel('chooseProductModel');
 	console.log("---------"+"chooseProductDataModel: "+chooseProductDataModel.get('province')+"--------");
 	console.log("---------"+"personalDataModel: "+personalDataModel.get('province')+"--------"); 	
       if(chooseProductDataModel.get('province') === 'SK' || personalDataModel.get('province') === 'SK') {       		
            $(refs.optionalProducts_PA_Item).hide();//Protection Advantage hiding
            $('#lineSeparatorForPA').hide();
            $(refs.optionalProducts_CP_Item).hide();//Credit Protector hiding
            $('#lineSeparatorForCP').hide();
            // Hiding PA and CP content and unchecking selected PA/CP
            $(refs.optionalProducts_PA).attr('checked', false);
            $(refs.optionalProducts_PA_Table).hide();
            $(refs.optionalProducts_PA_Agreement).attr('checked', false);
            $(refs.optionalProducts_CP).attr('checked', false);
            $(refs.optionalProducts_CP_Table).hide();
            $(refs.optionalProducts_CP_Agreement).attr('checked', false);
            $(refs.title_IW).show();
        };
    }
    //---------------------------------------------------------------------------------------
    // US4168
    function hidePAandCPAgeRestriction(){
    	var sMethod = " hidePAandCPAgeRestriction() :: ";    	
        var personalDataModel = activationItems.getModel('personalData');
        console.log(logPrefix + sMethod + " age "+personalDataModel.get('age'));
        if(personalDataModel.get('age') > 76) {
        	$(refs.optionalProducts_PA_Item).hide();//Protection Advantage hiding
            $('#lineSeparatorForPA').hide();
            $(refs.optionalProducts_CP_Item).hide();//Credit Protector hiding
            $('#lineSeparatorForCP').hide();
            // Hiding PA and CP content and unchecking selected PA/CP
            $(refs.optionalProducts_PA).attr('checked', false);
            $(refs.optionalProducts_PA_Table).hide();
            $(refs.optionalProducts_PA_Agreement).attr('checked', false);
            $(refs.optionalProducts_CP).attr('checked', false);
            $(refs.optionalProducts_CP_Table).hide();
            $(refs.optionalProducts_CP_Agreement).attr('checked', false);
            $(refs.optionalProducts_CPInsurance).hide();
            $(refs.optionalProducts_TC25_CP_Text).hide();
            $(refs.optionalProduct_CP_description).hide();
            $(refs.optionalProduct_title_arrow_cp).hide();
            $(refs.title_IW).show();
            $(refs.optionalProduct_CP_title).hide();
        }
    	
    }
    //---------------------------------------------------------------------------------------
    function onSignatureChaged1 (e) {
        var sMethod = 'onSignatureChaged1() ';
        console.log(logPrefix + sMethod);

        if ($(refs.signature_PA).jSignature('getData', 'native').length > 0) {
            $(refs.resetSignature1).removeClass('grayflat');
            $(refs.resetSignature1).addClass('blackflat');
            $(refs.resetSignature1).bind('click', onResetSignatureClicked1);

        }
        model.set('userSingnatureNative',  $(refs.signature_PA).jSignature('getData', 'native'));
    }
    //---------------------------------------------------------------------------------------
    function onSignatureChaged2 (e) {
        var sMethod = 'onSignatureChaged2() ';
        console.log(logPrefix + sMethod);

        if ($(refs.signature_CP).jSignature('getData', 'native').length > 0) {
            $(refs.resetSignature2).removeClass('grayflat');
            //$(refs.resetSignature).addClass('darkgrayflat');
            $(refs.resetSignature2).addClass('blackflat');
            $(refs.resetSignature2).bind('click', onResetSignatureClicked2);

        }
        model.set('userSingnatureNative',  $(refs.signature_CP).jSignature('getData', 'native'));
    }
    //---------------------------------------------------------------------------------------
    function onSignatureChaged3 (e) {
        var sMethod = 'onSignatureChaged3() ';
        console.log(logPrefix + sMethod);
        if ($(refs.signature_IW).jSignature('getData', 'native').length > 0) {
            $(refs.resetSignature3).removeClass('grayflat');
            //$(refs.resetSignature).addClass('darkgrayflat');
            $(refs.resetSignature3).addClass('blackflat');
            $(refs.resetSignature3).bind('click', onResetSignatureClicked3);

        }
        model.set('userSingnatureNative',  $(refs.signature_IW).jSignature('getData', 'native'));
    }
    //---------------------------------------------------------------------------------------
    function onResetSignatureClicked1 () {
        var sMethod = 'onResetSignatureClicked() ';
        console.log(logPrefix + sMethod);

        $(refs.signature_PA).jSignature ('setData', [], 'native');
        //$(refs.resetSignature).removeClass('darkgrayflat');
        $(refs.resetSignature1).removeClass('blackflat');
        $(refs.resetSignature1).addClass('grayflat');
        $(refs.resetSignature1).unbind('click', onResetSignatureClicked1);
    }
    //---------------------------------------------------------------------------------------
    function onResetSignatureClicked2 () {
        var sMethod = 'onResetSignatureClicked() ';
        console.log(logPrefix + sMethod);
        $(refs.signature_CP).jSignature ('setData', [], 'native');
        //$(refs.resetSignature).removeClass('darkgrayflat');
        $(refs.resetSignature2).removeClass('blackflat');
        $(refs.resetSignature2).addClass('grayflat');
        $(refs.resetSignature2).unbind('click', onResetSignatureClicked2);
    }
    //---------------------------------------------------------------------------------------
    function onResetSignatureClicked3 () {
        var sMethod = 'onResetSignatureClicked() ';
        console.log(logPrefix + sMethod);
        $(refs.signature_IW).jSignature ('setData', [], 'native');
        //$(refs.resetSignature).removeClass('darkgrayflat');
        $(refs.resetSignature3).removeClass('blackflat');
        $(refs.resetSignature3).addClass('grayflat');
        $(refs.resetSignature3).unbind('click', onResetSignatureClicked3);
    }
    //---------------------------------------------------------------------------------------
    function showPrevScreen(){
        var sMethod = 'showPrevScreen() ';
        console.log(logPrefix + sMethod);
        syncUserData();
        flow.back();
    }
    //---------------------------------------------------------------------------------------
    function isOptionalInsuranceSelected (currentModel) {
        return  currentModel.get('optionalProducts_PA') == 'Y' ||
            currentModel.get('optionalProducts_CP') == 'Y' ||
            currentModel.get('optionalProducts_IW') == 'Y' ||
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
            if(model.get('optionalProducts_PA') == 'Y')  {
                rez1 = model.validate(2);
            }

            if (model.get('optionalProducts_CP') == 'Y') {
                rez2 = model.validate(3);
            }

            if (model.get('optionalProducts_IW') == 'Y') {
                rez3 = model.validate(4);
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

        // US3981 - Start
        if(loginModel.get('employerID').toUpperCase() !== 'E' 
        	&& chooseProductModel.get('province').toUpperCase() === 'QC') {        	
        	if(model.get('optionalProducts_PA') == 'Y' || model.get('optionalProducts_CP') == 'Y') {
        		messageDialog.htmlConfirm(translator.translateKey("optionalProductScreen_Handoutprompts_YesNo_Message"), 
                		handleHandoutpromptsYes, handleHandoutpromptsNo, translator.translateKey("optionalProductScreen_Handoutprompts_Title"));
        	} else {
                flow.next();
            }       	
        } else {
            flow.next();
        }
        // Old code
        // flow.next();
    }   
    // ---------------------------------------------------------------------------------------
    function handleHandoutpromptsNo() {
        var sMethod = 'handleHandoutpromptsNo()';
        console.log(logPrefix + sMethod);
        messageDialog.info(translator.translateKey("optionalProductScreen_Handoutprompts_Ok_Message")
        		, translator.translateKey("optionalProductScreen_Handoutprompts_Title"), $.noop);
    }
    // ---------------------------------------------------------------------------------------    
    function handleHandoutpromptsYes() {
        var sMethod = 'handleHandoutpromptsYes()';
        console.log(logPrefix + sMethod);
        flow.next();
    }
    // US3981 - End
    //---------------------------------------------------------------------------------------
    function toggleWarningDIV(objCheckbox, targetItemsSuffix)
    {
        console.log(targetItemsSuffix);
        if (objCheckbox.is(":checked"))
        {
            $("#warningDIV" + targetItemsSuffix).removeClass("warningDIV").addClass("warningDIVCleared");
            $("#warningHeader" + targetItemsSuffix).removeClass("warningHeader").addClass("warningHeaderCleared");
            $("#warningText" + targetItemsSuffix).removeClass("warningText").addClass("warningTextCleared");
        }
        else
        {
            $("#warningDIV" + targetItemsSuffix).removeClass("warningDIVCleared").addClass("warningDIV");
            $("#warningHeader" + targetItemsSuffix).removeClass("warningHeaderCleared").addClass("warningHeader");
            $("#warningText" + targetItemsSuffix).removeClass("warningTextCleared").addClass("warningText");
        }
    }

    function toggleAllWarningDIVs()
    {
        toggleWarningDIV($(refs.optionalProducts_PA_Agreement), "PA");
        toggleWarningDIV($(refs.optionalProducts_CP_Agreement), "CP");
        toggleWarningDIV($(refs.optionalProducts_IW_Agreement), "IW");
    }
};
