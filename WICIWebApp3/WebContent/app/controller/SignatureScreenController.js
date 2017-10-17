ensureNamespaceExists();

WICI.SignatureScreenController = function(activationItems, argTranslator, argMessageDialog) {
	var logPrefix = '[WICI.SignatureScreenController]::';
	var $screenContainer = $("#SignatureScreen");
	var messageDialog;
	var translator;

	this.show = show;
	this.init = init;
	this.hide = hide;
	var signatureControl;
	var signatureDate = "";
  var cardNameGlobal;
  var cardTypeGlobal;

	var flow = null;

	var refs = {
	        signature:  '#signature',
            resetSignature: '#signature_Reset_Button',
            applySignature: '#signature_Apply_Button',
            capturedSignature:  "#captured_Signature",
            proceedButton:  "#signatureScreen_ProceedButton",
            acceptAgreement:  "#signatureScreen_AcceptAgreement",
            userAcceptAgreement: '#signatureScreen_AgreementBoxContainer',
            signDate:   '#signatureScreen_SignDate',
            userSingnature: '#signatureScreen_SingnatureContainer',
            singnatureCardName: '#singnatureCardName',
            image: '#SignatureImage'
    };
	//---------------------------------------------------------------------------------------
    var model = new WICI.BaseModel({
        name: 'signatureModel',
        refs: refs,
        data:[
                {name: 'userAcceptAgreement',   value: null, validation: {type: 'termsAndConditions', message: 'signatureScreen_validation_acceptAgreement'}},
                {name: 'userSingnature', value: null, validation: {type: 'presence', message: 'signatureScreen_validation_signature'}},

                {notField:true, name: 'userSingnatureNative', value: null, validation: null},
                {notField:true, name: 'modelsData', value: null, validation: null},

                {name: 'signDate',  value: null, validation: {type: 'presence', message: 'signatureScreen_validation_signDate'}}
             ]
    });
    //---------------------------------------------------------------------------------------
	function init( argFlow ) {
		var sMethod = 'init() ';
        console.log(logPrefix + sMethod);

        flow = argFlow;
        translator = argTranslator; 		//(AA)Dependency Injection Principle: Allows for proper unit testing
        messageDialog = argMessageDialog; 	//(AA)Dependency Injection Principle: Allows for proper unit testing

        // Initialize model
        initModel();

        // Added for warning section
				parseCardNameAndType();

				createView();
				toggleCardImage();
				bindEvents();
        restoreCreditCardData();        
        // US3766
        parseCardNameAndType();
        
        displayProductTitle();
        toggleWarningDIV();
	}
	//---------------------------------------------------------------------------------------
    function initModel() {
        // Get model from the store
        var currentModel = activationItems.getModel(model.name);
        if (!currentModel) {
            activationItems.addModel(model);
        } else {
            model = currentModel;
        }
    }
	//---------------------------------------------------------------------------------------
	function show(){
		$screenContainer.show();
		translator.run("SignatureScreen");

		// Initialize signature if it not jet initialized
		if (!signatureControl) {
//			fixSignatureWidth();
		    // This is the part where jSignature is initialized.
		    //signatureControl = $(refs.signature).jSignature();
			signatureInit();


		    $(refs.signature).bind('change', onSignatureChaged);
		    showSignatureDate();
		}
	}
	//---------------------------------------------------------------------------------------
	function signatureInit() {
		if (model.get('userSingnatureNative')) {
			signatureControl = $(refs.signature).jSignature({
				'signatureLine' : true
			});
			$(refs.signature).jSignature('setData',
					model.get('userSingnatureNative'), 'native');
			onSignatureChaged();
		} else {
			// This is the part where jSignature is initialized.
			signatureControl = $(refs.signature).jSignature();
		}
	}
	//---------------------------------------------------------------------------------------
	function showSignatureDate() {
		// Initialize signature date
		signatureDate = moment().format('DD MMMM YYYY');

        $(refs.signDate).text(signatureDate);
	}
	//---------------------------------------------------------------------------------------
//    function fixSignatureWidth(){
//    	//flexibly adjust signature width
//    	var signatureWidth = 600;
//		if(window && window.devicePixelRatio) {
//			 $(".sugnatureFixes").css('width', (signatureWidth/window.devicePixelRatio)+'px');
//		}
//    }
	//---------------------------------------------------------------------------------------
	function displayProductTitle()
	{
		$(refs.singnatureCardName).html(cardNameGlobal);
	}
	//---------------------------------------------------------------------------------------
	function hide(){
		$screenContainer.hide();
	}
	//---------------------------------------------------------------------------------------
	function createView() {
		$screenContainer.empty();
		assembleNavigationBarAtTop();
        // US4637
        WICI.BreadcrumbsHelper.assembleBreadcrumbs(5, $screenContainer, activationItems);
		assemblePageHTML($screenContainer, "#WICISignatureScreen-template");
		assembleNavigationBarAtBottom();
		$screenContainer.addClass("breadcrumbPadding");
	}
	//---------------------------------------------------------------------------------------
	function assembleNavigationBarAtTop(){
		$("#pageHeader-template").template("pageHeader");
		$.tmpl("pageHeader",
			{ 	"logo_En" : translator.currentLanguageEnglish(),
				"previousButtonId" 		: "SignatureScreen_PrevButton",
				"settingsButtonId" 		: "SignatureScreen_SettingsButton"
				//"nextButtonId" 			: "SignatureScreen_NextButton",
			}
		).appendTo("#SignatureScreen");

		$('#SignatureScreen_SettingsButton').addClass('rightPosition');
	}
	// ---------------------------------------------------------------------------------------
	function assembleNavigationBarAtBottom(){
		$("#pageFooter-template").template("pageFooter");
		$.tmpl("pageFooter", {
				"previousButtonId" 		: "SignatureScreen_PrevButton"
			}
		).appendTo("#SignatureScreen");
	}
	//---------------------------------------------------------------------------------------
	function assemblePageHTML($element, templateName) {
		$(templateName).template("signatureScreenPage");
		var nameOfCustomer = "";
		if(activationItems.getModel('personalData')!==null){
			nameOfCustomer = activationItems.getModel('personalData').get('firstName') + ' ' + activationItems.getModel('personalData').get('lastName');
		}
		$.tmpl("signatureScreenPage",{
			"ClientName":nameOfCustomer,
			"CardType":cardTypeGlobal,
			"CardName":cardNameGlobal
				}).appendTo($element);
	}
	//---------------------------------------------------------------------------------------
	function bindEvents(){
        $('#signatureScreen_ProceedButton').click(function() {
            showNextScreen();
        });
        $('.SignatureScreen_PrevButton').click(function() {
        	showPrevScreen();
        });
        $(window).bind( 'orientationchange', function(e){
        });
        $.subscribe('translatorFinished',function(e){
        	showSignatureDate();
        });
        $.subscribe('translatorFinished',function(e){
            parseCardNameAndType();
            displayProductTitle();
        });
        // Bind to the checkbox
        $('#signatureScreen_AcceptAgreement').click(function() {
        	toggleWarningDIV();
        });
        $.subscribe('translatorFinished',toggleCardImage);
	}
	//---------------------------------------------------------------------------------------
	function onSignatureChaged (e) {
	    var sMethod = 'onSignatureChaged() ';
        console.log(logPrefix + sMethod);
        if ($(refs.signature).jSignature('getData', 'native').length > 0) {
            $(refs.resetSignature).removeClass('grayflat');
            //$(refs.resetSignature).addClass('darkgrayflat');
            $(refs.resetSignature).addClass('blackflat');
            $(refs.resetSignature).bind('click', onResetSignatureClicked);
        }
        model.set('userSingnatureNative',  $(refs.signature).jSignature('getData', 'native'));
	}
	//---------------------------------------------------------------------------------------
	function onResetSignatureClicked () {
	    var sMethod = 'onResetSignatureClicked() ';
	    console.log(logPrefix + sMethod);
	    $(refs.signature).jSignature ('setData', [], 'native');
        //$(refs.resetSignature).removeClass('darkgrayflat');
	    $(refs.resetSignature).removeClass('blackflat');
        $(refs.resetSignature).addClass('grayflat');
        $(refs.resetSignature).unbind('click', onResetSignatureClicked);
	}
	//---------------------------------------------------------------------------------------
	function showPrevScreen(){
	    var sMethod = 'showPrevScreen() ';
        console.log(logPrefix + sMethod);
        syncUserData();
		flow.back();
	}
	//---------------------------------------------------------------------------------------
	function showNextScreen(){
	    var sMethod = 'showNextScreen() ';
        console.log(logPrefix + sMethod);
	    syncUserData();
	    if (app.validationsOn) {
            app.validationDecorator.clearErrArrtibute();

            var rez = model.validate();
            if (rez.length > 0) {
                var errStrArr =[];
                $.each(rez, function(index, item) {
                    errStrArr.push(translator.translateKey(item.err));
                });
                app.validationDecorator.applyErrAttribute(rez);
                return;
            }
        }
	    //$.unsubscribe('translatorFinished');
		flow.next();
	}
	//---------------------------------------------------------------------------------------
	function syncUserData() {
        var sMethod = 'syncUserData() ';
        console.log(logPrefix + sMethod);
        model.set('userAcceptAgreement',   $(refs.acceptAgreement).is(':checked') ? 'Y' : 'N');
        model.set('userSingnature',  $(refs.signature).jSignature('getData', 'native').length > 0 ? 'data:' + $(refs.signature).jSignature('getData', 'image').join(',') : null );
        model.set('userSingnatureNative',  $(refs.signature).jSignature('getData', 'native'));

        model.set('signDate',   Date.now().toString('yyyy-MM-dd'));

        model.set('modelsData', activationItems.getDataStringTillModel(model.name));

        console.log(logPrefix + sMethod + ' model data: ' + model.toString());
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
        	model.set('userSingnature', null);
        	model.set('userSingnatureNative', null);
        }

        $(refs.acceptAgreement).prop('checked', model.get('userAcceptAgreement') === 'Y' ? true : false );
    	var sign = model.get('userSingnature');

    }
	//---------------------------------------------------------------------------------------

	function parseCardNameAndType()
	{
		cardTypeGlobal = activationItems.getModel('chooseProductModel').get('productCard')
		cardNameGlobal = activationItems.getCardFriendlyName(cardTypeGlobal);
		cardNameGlobal = translator.translateKey(cardNameGlobal).replace("<br>", "");
	}

	//---------------------------------------------------------------------------------------
	function toggleWarningDIV(){
		 if ($("#signatureScreen_AcceptAgreement").is(":checked"))
	   {
	   		$("#warningDIVSig").removeClass("warningDIV").addClass("warningDIVCleared");
	   		$("#warningHeaderSig").removeClass("warningHeader").addClass("warningHeaderCleared");
	   		$("#warningTableSig").removeClass("warningTable").addClass("warningTableCleared");
	   }
	   else
	   {
	   		$("#warningDIVSig").removeClass("warningDIVCleared").addClass("warningDIV");
	   		$("#warningHeaderSig").removeClass("warningHeaderCleared").addClass("warningHeader");
	   		$("#warningTableSig").removeClass("warningTableCleared").addClass("warningTable");
	   }
	}

	function toggleCardImage () {
		 var img = $(refs.image);
           var src = img.prop('src');
           var lang = translator.getCurrentLanguage();
           img.prop('src', src.replace(src.slice(-6, -4), lang));
	}
};
