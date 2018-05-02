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
            signatureScreenOmcCard:"#signatureScreenOmcCard",
            signatureScreenOmzCard:"#signatureScreenOmzCard",
            signatureScreenProductCard:"#signatureScreenProductList",
            image: '#SignatureImage',
            chartImage:'#omzChartImage'	
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
                {notField:true, name: 'sigcardSelection', value: false, validation: null},
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
		displayProductTitle();			
        restoreCreditCardData();        
        // US3766
        parseCardNameAndType();
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
		    // This is the part where jSignature is initialized.
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
	function displayProductTitle()
	{
		 $('#triangle_world_ELite_MasterCardNote').hide();
		 $('#sigworldElite_MasterCardNote_OMZ').hide();
	     $('#worldElite_MasterCard').hide();
	     $('#worldElite_MasterCard_License1').hide();
	     $('#sigworldElite_MasterCardNote').hide();
	     $('#omz_signatureScreen_Licence_Content').hide();
	     $('.omz_overview_CostOfCreditDisclosure').hide();
	     var eligbleFlag =verifyCardValidation();
	     if(eligbleFlag){
		    $('#omz_image').show();
		    $('#omp_image').hide();
		    $(refs.image).attr('src', "app/images/omx_en.png");
			$(refs.singnatureCardName).html(cardNameGlobal);
	     }
	     else{
			$('#SignatureScreen_OMZContents').hide();
			 $('#omz_image').hide();
			 $('#omp_image').show();
			 model.set('sigcardSelection', false);
			 if( activationItems.getModel('chooseProductModel').get('productCard')  === 'OMZ' ){
				 $(refs.image).attr('src', "app/images/omx_en.png");
				 activationItems.getModel('chooseProductModel').set('productCard', 'OMX');
			 }
		 }
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
		updateOmxCardLanguage();
		updateOmzCardLanguage();
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
            toggleChartImage () ;
            updateOmzCardLanguage();
            updateOmxCardLanguage();
            if(  activationItems.getModel('chooseProductModel').get('productCard') === 'OMZ' && model.get('sigcardSelection') && verifyCardValidation() ){
            	OMZCardContentDisplay();
            }
            if(activationItems.getModel('chooseProductModel').get('productCard') === 'OMX' && model.get('sigcardSelection') ){
            	OMXCardContentDislay();
            }
        });
        
      $(refs.signatureScreenOmzCard).click(function() {
			OMZCardContentDisplay();

		});

		$(refs.signatureScreenOmcCard).click(function() {
			OMXCardContentDislay();

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
        model.set('sigcardSelection',   model.get('sigcardSelection'));

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
       
        if(  activationItems.getModel('chooseProductModel').get('productCard') === 'OMZ' && model.get('sigcardSelection') && verifyCardValidation() ){
        	OMZCardContentDisplay();
        }
        if(activationItems.getModel('chooseProductModel').get('productCard') === 'OMX' && model.get('sigcardSelection') ){
        	OMXCardContentDislay();
        }
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
		cardTypeGlobal = activationItems.getModel('chooseProductModel').get('productCard');
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
	function bindHandler(){		  
       parseCardNameAndType();
       $(refs.proceedButton).removeClass('grayflat');
       $(refs.proceedButton).addClass('greenflat');
       $(refs.proceedButton).bind('click',bindHandler);
	}
	function clearCardsSelection() {
		
        $("#signatureScreen_WorldEliteCardContent").removeClass('creditCardSelectedBgColor');
        $("#signatureScreen_TriangleCardContent").removeClass('creditCardSelectedBgColor');
	}
	// ---------------------------------------------------------------------------------------
    function updateSelectedCardStyle(card) {
        clearCardsSelection();
        card.addClass('creditCardSelectedBgColor');
    }
	function toggleChartImage () {
		 var img = $(refs.chartImage);
         var src = img.prop('src');
         var lang = translator.getCurrentLanguage();
         img.prop('src', src.replace(src.slice(-6, -4), lang));
	}
	function updateOmxCardLanguage() {
	       if (app.translator.getCurrentLanguage() === "en") {
	           $("#signatureScreenOmcCard").removeClass("fr_card");
	           $("#signatureScreenOmcCard").addClass("en_card");
	           $("#sigScreen_WorldEliteCardTitle_1").removeClass("sigScreen_WorldEliteCardTitle_fr").addClass("sigScreen_WorldEliteCardTitle");
	           $("#sigScreen_WorldEliteCardTitle_2").removeClass("sigScreen_WorldEliteCardTitle_fr").addClass("sigScreen_WorldEliteCardTitle");
	           $("#sigScreen_WorldEliteCardTitle_3").removeClass("sigScreen_WorldEliteCardTitle_fr").addClass("sigScreen_WorldEliteCardTitle");
	           $("#overviewCostOfCreditDisclosure").hide();
	           $("#overviewCostOfCreditDisclosureOMZ").show();
	           $("#omzChartImage").attr('src',"app/images/triangle_comparison_chart_EN.png");
	       } else {
	           $("#signatureScreenOmcCard").removeClass("en_card");
	           $("#signatureScreenOmcCard").addClass("fr_card");
	           $("#sigScreen_WorldEliteCardTitle_1").removeClass("sigScreen_WorldEliteCardTitle").addClass("sigScreen_WorldEliteCardTitle_fr");
	           $("#sigScreen_WorldEliteCardTitle_2").removeClass("sigScreen_WorldEliteCardTitle").addClass("sigScreen_WorldEliteCardTitle_fr");
	           $("#sigScreen_WorldEliteCardTitle_3").removeClass("sigScreen_WorldEliteCardTitle").addClass("sigScreen_WorldEliteCardTitle_fr");
	           $("#overviewCostOfCreditDisclosure").show();
	           $("#overviewCostOfCreditDisclosureOMZ").hide();
	           $("#omzChartImage").attr('src',"app/images/triangle_comparison_chart_FR.png");
	       }
	   }
	   
	   function updateOmzCardLanguage() {
	       if (app.translator.getCurrentLanguage() === "en") {
	           $("#signatureScreenOmzCard").removeClass("fr_card");
	           $("#signatureScreenOmzCard").addClass("en_card");
	           $("#sigScreen_WorldEliteCardTitle_1").removeClass("sigScreen_WorldEliteCardTitle_fr").addClass("sigScreen_WorldEliteCardTitle");
	           $("#sigScreen_WorldEliteCardTitle_2").removeClass("sigScreen_WorldEliteCardTitle_fr").addClass("sigScreen_WorldEliteCardTitle");
	           $("#sigScreen_WorldEliteCardTitle_3").removeClass("sigScreen_WorldEliteCardTitle_fr").addClass("sigScreen_WorldEliteCardTitle");
	           $("#overviewCostOfCreditDisclosure").hide();
	           $("#overviewCostOfCreditDisclosureOMZ").show();
	           $("#omzChartImage").attr('src',"app/images/triangle_comparison_chart_EN.png");
	       } else {
	           $("#signatureScreenOmzCard").removeClass("en_card");
	           $("#signatureScreenOmzCard").addClass("fr_card");
	           $("#sigScreen_WorldEliteCardTitle_1").removeClass("sigScreen_WorldEliteCardTitle").addClass("sigScreen_WorldEliteCardTitle_fr");
	           $("#sigScreen_WorldEliteCardTitle_2").removeClass("sigScreen_WorldEliteCardTitle").addClass("sigScreen_WorldEliteCardTitle_fr");
	           $("#sigScreen_WorldEliteCardTitle_3").removeClass("sigScreen_WorldEliteCardTitle").addClass("sigScreen_WorldEliteCardTitle_fr");
	           $("#overviewCostOfCreditDisclosure").show();
	           $("#overviewCostOfCreditDisclosureOMZ").hide();
	           $("#omzChartImage").attr('src',"app/images/triangle_comparison_chart_FR.png");
	       }
	   }
	   
	function toggleCardImage () {
		 var img = $(refs.image);
           var src = img.prop('src');
           var lang = translator.getCurrentLanguage();
           img.prop('src', src.replace(src.slice(-6, -4), lang));
	}
	
	function verifyCardValidation(){
	    if(activationItems.getModel('chooseProductModel').get('productCard') == 'OMX' ||  activationItems.getModel('chooseProductModel').get('productCard') == 'OMZ'){
			 return (activationItems.getModel('financialData').get('grossIncome') >= 80000 || activationItems.getModel('financialData').get('grossHouseholdIncome')>= 150000)? true :false; 
		}
	}
	

   function OMZCardContentDisplay() {
		$('#triangle_world_ELite_MasterCardNote').show();
		$('#sigworldElite_MasterCardNote_OMZ').show();
		$('#worldElite_MasterCard').show();
		$('#triangle_MasterCard_License1').hide();
		$('#worldElite_MasterCard_License1').show();
		$('#omz_signatureScreen_Licence_Content').show();
		$('#omx_signatureScreen_Licence_Content').hide();
		$('.omz_overview_CostOfCreditDisclosure').show();
		$('.omx_overview_CostOfCreditDisclosure').hide();
		$('#triangelMasterCard').hide();
		$('#sigworldElite_MasterCardNote').show();
		$('#sigtriangelMasterCardNote').hide();
		updateSelectedCardStyle($('#signatureScreen_WorldEliteCardContent'));
		$(refs.image).attr('src', "app/images/omz_en.png");
		activationItems.getModel('chooseProductModel').set('productCard', 'OMZ');
		model.set('sigcardSelection', true);
	}
	
	function OMXCardContentDislay(){
		$('#triangle_world_ELite_MasterCardNote').hide();
		$('#sigworldElite_MasterCardNote_OMZ').hide();
		$('#worldElite_MasterCard').hide();
		$('.omz_overview_CostOfCreditDisclosure').hide();
		$('.omx_overview_CostOfCreditDisclosure').show();
		$('#omz_signatureScreen_Licence_Content').hide();
		$('#omx_signatureScreen_Licence_Content').show();
		$('#worldElite_MasterCard_License1').hide();
		$('#triangle_MasterCard_License1').show();
		$('#triangelMasterCard').show();
		$('#sigworldElite_MasterCardNote').hide();
		$('#sigtriangelMasterCardNote').show();
		updateSelectedCardStyle($('#signatureScreen_TriangleCardContent'));
		$(refs.image).attr('src', "app/images/omx_en.png");
        model.set('sigcardSelection',   true);
        activationItems.getModel('chooseProductModel').set('productCard', 'OMX');
	}

};
