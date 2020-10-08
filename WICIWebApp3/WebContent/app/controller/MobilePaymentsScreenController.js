ensureNamespaceExists();
WICI.MobilePaymentsScreenController = function(activationItems, argTranslator, argMessageDialog) {
    var logPrefix = '[WICI.MobilePaymentsScreenController]::';
    var $screenContainer = $("#MobilePaymentsScreen");
    var translator = null;
    var messageDialog = null;

    this.show = show;
    this.hide = hide;
    this.init = init;
    var chooseProductModel = null;
    
    var	flow = null;

    this.syncUserData = syncUserData;
    var nextButtonEnabled = false;
    
    var refs = {
        mobilePhone : '#mobilePayment_mobilePhone_TextField',
        mobilePhoneField : '#mobilePhoneField',
        androidPayCheckField : '#androidPay_CheckField',
        applePaycheckField :   '#applePay_CheckField',
        noThanksCheckField :   '#nothanks_CheckField',
        nextButton: ".MobilePaymentsScreen_NextButton",
        prevButton: ".MobilePaymentsScreen_PrevButton",
       
    };

    var model = new WICI.BaseModel({
        name: 'mobilePaymentsScreen',
        refs: refs,
        data: [{
            name : 'mobilePhone',
            value : null,
            validation : {
                type : 'phone',
                message : 'personalData1_validation_cellPhone',
                canBeEmpty : true,
                group: [ 1 ]
            }
        
        },
        {name: 'androidPayCheckField', value: null, validation: {type: 'presence', message: 'ProvincesList_null'}},
        {name: 'applePaycheckField', value: null, validation: {type: 'presence', message: 'ProvincesList_null'}},
        {name: 'noThanksCheckField', value: null, validation: {type: 'presence', message: 'ProvincesList_null'}},
        { name: 'consentGranted',    value: null, validation: null }

        ]
    });
    this.innerModel = model;
    
    // ---------------------------------------------------------------------------------------
    function init(argFlow) {
        var sMethod = 'init() ';
        console.log(logPrefix + sMethod);
      
        flow = argFlow;
        translator = argTranslator;
        messageDialog = argMessageDialog;
        chooseProductModel = activationItems.getModel('chooseProductModel');
    	console.log(logPrefix + sMethod + "cardType :: " + chooseProductModel.get('productCard'));
        hideNextButton();
        createView();
        bindEvents();
        initModel();
        restoreCreditCardData();
        showHideMobilePhoneFields();
        var mobilePhone = activationItems.getModel('mobilePaymentsScreen').get('mobilePhone');
        if(mobilePhone !== null){
        	console.log(logPrefix + sMethod + " mobilePhone :::"+ model.get('mobilePhone'));
        	showRedNextButton();
        	nextButtonEnabled = true;
        }
    }
    // ---------------------------------------------------------------------------------------
    function syncUserData() {
        var sMethod = 'syncUserData() ';
        console.log(logPrefix + sMethod);
        console.log(logPrefix + sMethod + "cellPhone from Personal Info page  :: " + activationItems.getModel('contactInfoScreen').get('cellPhone'));
        model.set('androidPayCheckField', $(refs.androidPayCheckField).is(':checked') ? 'Y' : 'N');
        model.set('applePaycheckField',   $(refs.applePaycheckField).is(':checked') ? 'Y' : 'N');
        model.set('noThanksCheckField',   $(refs.noThanksCheckField).is(':checked') ? 'Y' : 'N');
        
        if($(refs.mobilePhoneField).hasClass('hideElement')){
        	model.set('mobilePhone', '');
        } else {
        	activationItems.getModel('contactInfoScreen').set('cellPhone', $(refs.mobilePhone).val());
      	    model.set('mobilePhone',  $(refs.mobilePhone).val());  
        }
        console.log(logPrefix + sMethod + "Mobile phone :: " + $(refs.mobilePhone).val());
        if($(refs.androidPayCheckField).is(':checked')) {
        	model.set('consentGranted', 'G');
        	console.log(logPrefix + sMethod + "consentGranted : G");
        }else if($(refs.applePaycheckField).is(':checked')) {
        	model.set('consentGranted', 'A');
        	console.log(logPrefix + sMethod + "consentGranted : A");
        }else if($(refs.noThanksCheckField).is(':checked')) {
        	model.set('consentGranted', 'N');
        	console.log(logPrefix + sMethod + "consentGranted : N");
        }
        activationItems.setConsentGranted(model.get('consentGranted'));
        
        if(!$(refs.mobilePhoneField).hasClass('hideElement')) {
		        if($(refs.mobilePhone).val() != '') {     	
		        	activationItems.getModel('contactInfoScreen').set("cellPhone", $(refs.mobilePhone).val());
		        } else if($('#contactInfo_CellPhone_TextField').val().replace(/-/g, '') != '' && $(refs.mobilePhone).val() == '') {
		        	if(($('#secondaryLandline_CheckField').is(':checked'))){
		        		activationItems.getModel('contactInfoScreen').set("cellPhone", activationItems.getModel('contactInfoScreen').get('cellPhone'));
		        	} else if ($('#primaryLandline_CheckField').is(':checked') && ($('#secondaryLandline_CheckField').is(':checked'))) {
		        		activationItems.getModel('contactInfoScreen').set("cellPhone", activationItems.getModel('contactInfoScreen').get('cellPhone'));
		        	} else {
		        		activationItems.getModel('contactInfoScreen').set("cellPhone", $('#contactInfo_CellPhone_TextField').val());
		        	}		        	
		        } else if($(refs.mobilePhone).val() == '') {
		        	activationItems.getModel('contactInfoScreen').set("cellPhone", '');
		        }
        }
        console.log(logPrefix + sMethod + ' model data: \n' + model.toString());
        showHideMobilePhoneFields();
        if(!$(refs.mobilePhoneField).hasClass('hideElement') &&  $(refs.mobilePhone).val() != '') {
        			activationItems.setMobilePhone($(refs.mobilePhone).val());
        }
    }
    // ---------------------------------------------------------------------------------------
    function restoreCreditCardData() {
        var sMethod = "restoreCreditCardData()";
        console.log(logPrefix + sMethod);
        showHideMobilePhoneFields();
        if(model.get('mobilePhone') != ''){
        	$(refs.mobilePhone).val(model.get('mobilePhone'));
        }
        console.log(logPrefix + sMethod + model.get('mobilePhone'));
        updateRadioButtonsState();
        showHideMobilePhoneFields();
    }
    // ---------------------------------------------------------------------------------------
    function show() {
        $screenContainer.show();
        translator.run("MobilePaymentsScreen");
    }
    // ---------------------------------------------------------------------------------------
    function hide() {
        $screenContainer.hide();
    }
    // ---------------------------------------------------------------------------------------
    function createView() {
        $screenContainer.empty();
        assembleNavigationBarAtTop();
        WICI.BreadcrumbsHelper.assembleBreadcrumbs(7, $screenContainer, activationItems);
        assemblePageHTML($screenContainer, '#WICIMobilePaymentsScreen-template');
        $screenContainer.addClass("breadcrumbPadding");
        //assembleDisclaimerAtBottom();
        assembleNavigationBarAtBottom();
        hideNextButton();
       }
    // ---------------------------------------------------------------------------------------
    function assembleNavigationBarAtTop() {
        $("#pageHeader-template").template("pageHeader");
        $.tmpl("pageHeader", {
            "logo_En" : translator.currentLanguageEnglish(),
            "previousButtonId" : "MobilePaymentsScreen_PrevButton",
            "nextButtonId" : "MobilePaymentsScreen_NextButton",
            "settingsButtonId" : "MobilePaymentsScreen_SettingsButton"
        }).appendTo("#MobilePaymentsScreen");
    }
    // ---------------------------------------------------------------------------------------
    function assembleNavigationBarAtBottom(){
        $("#pageFooter-template").template("pageFooter");
        $.tmpl("pageFooter", {
            "previousButtonId" : "MobilePaymentsScreen_PrevButton",
            "nextButtonId" : "MobilePaymentsScreen_NextButton"
            }
        ).appendTo("#MobilePaymentsScreen");
    }
    // ---------------------------------------------------------------------------------------
    function assembleDisclaimerAtBottom(){
        $("#MobilePaymentNotePageFooter-template").template("pageFooter");
        $.tmpl("pageFooter",{}).appendTo("#MobilePaymentsScreen");
    }
    // ---------------------------------------------------------------------------------------
    function bindEvents() {
        var sMethod = 'bindEvents() ';
        console.log(logPrefix + sMethod);
        
        $('.MobilePaymentsScreen_NextButton').click(function() {
        	showNextScreen();
        });
        console.log("nextButtonEnabled :: "+ nextButtonEnabled);

        $('.MobilePaymentsScreen_PrevButton').click(function() {
        	showPrevScreen();
        });
                
        $.subscribe('translatorFinished',function(){
        	console.log('Language :: change');
            
        }); 
        
        $(refs.androidPayCheckField).change(function() {
        	console.log(logPrefix + sMethod + "GooglePay change");
        	 model.set('consentGranted', 'G');
        	 showRedNextButton();
        });
        $(refs.applePaycheckField).change(function() {
        	 console.log(logPrefix + sMethod + "ApplePay change");
        	 model.set('consentGranted', 'A');
        	 showRedNextButton();
        });
        
        $(refs.noThanksCheckField).change(function() {
        	console.log(logPrefix + sMethod + "NoThanks change");
        	 model.set('consentGranted', 'N');
        	 showRedNextButton();
        });
        
        	if($(refs.mobilePhone).val() !== null || $(refs.mobilePhone).val() !== ''){
              	 $(refs.mobilePhone).live('paste, input', function(e) {
                  	if(($(refs.mobilePhone).val() !== null) || ($(refs.mobilePhone).val() !== '')){
                  		setTimeout(function(){
                        	showRedNextButton();                                  
                       	    handleRealTimeKeyStrokes($("#mobilePayment_mobilePhone_TextField"));
                       	    nextButtonEnabled = true;                       	         
                       },10);
                  	}
                   });
              }
        	
        setTimeout(function(){
            showRedNextButton();
            nextButtonEnabled = true;
        },10000);
        showHideMobilePhoneFields();  
    }    
    // ---------------------------------------------------------------------------------------
    function assemblePageHTML($element, templateName) {
        $(templateName).tmpl({
        	activationItems: activationItems,
        }).appendTo($element);
    }    
    // ---------------------------------------------------------------------------------------
    function showNextScreen() {
    	var sMethod = 'showNextScreen() ';
        console.log(logPrefix + sMethod);
        
    	syncUserData();    	
        if (app.validationsOn) {
        	app.validationDecorator.clearErrArrtibute();
        	        	 
        	 var validator = new WICI.Validator();
        	 var rez = model.validate(1);
        	 
        	 if(model.get('mobilePhone') != ''){
        	 	 if(($(refs.mobilePhone).val() !== null || $(refs.mobilePhone).val() != ' ') && !$(refs.mobilePhone).val().match(/^[0-9]{10}$/)){
        			 rez[0].uiid = refs.mobilePhone;
        			 console.log("rez.length ::"+ rez.length);
                        if (rez.length > 0) {                    
                       	 app.validationDecorator.focusControl(refs.mobilePhone);
                         app.validationDecorator.applyErrAttribute(rez);
                         return;
                     }
        		 }
        	 }
        	 
	        if(!$(refs.androidPayCheckField).is(':checked') && !$(refs.applePaycheckField).is(':checked') && !$(refs.noThanksCheckField).is(':checked')){
	         		console.log(logPrefix + sMethod + "Radio button is not selcted");
	         		$('#consentGrantedRadioButtons').addClass('errorField');
	         		return;
	        }
      }
      flow.next();
    }     
    // ---------------------------------------------------------------------------------------
    function showPrevScreen() {
    	var sMethod = 'showPrevScreen() ';
    	console.log(logPrefix + sMethod);
    	
    	syncUserData();        
        flow.back();
    }
    // ---------------------------------------------------------------------------------------
    function initModel() {
        // Get model from the store
        var currentModel = activationItems.getModel(model.name);
        console.log("currentModel " + currentModel);
        if (!currentModel) {
            activationItems.addModel(model);
        } else {
            model = currentModel;
        }
    }
    // ---------------------------------------------------------------------------------------
    function showRedNextButton(){
    	$(refs.nextButton).show();
    	$(refs.nextButton).addClass('ui-btn-up-r');
    	$(refs.nextButton).removeClass('ui-btn-up-g');
    }
    function showGrayNextButton(){
    	$(refs.nextButton).hide();
    }
    // ---------------------------------------------------------------------------------------
    function hideNextButton() {
    	$(refs.nextButton).hide();
    } 
    //---------------------------------------------------------------------------------------
    function handleRealTimeKeyStrokes($argField){
    	var sMethod = 'handleRealTimeKeyStrokes() ';
        console.log(logPrefix + sMethod);
        if($argField.attr('id')=="mobilePhoneField")
        	updateNextButtonState($("#mobilePayment_mobilePhone_TextField"),$("#mobilePayment_mobilePhone_TextField"));
    }
    //---------------------------------------------------------------------------------------
    function updateNextButtonState( $argMobilePhoneFieldID, $argNextButtonID ){
    	var sMethod = 'updateNextButtonState() ';
        console.log(logPrefix + sMethod);
        var mobilePhone = $argMobilePhoneFieldID.val();

        if( mobilePhone ===" ")
        	disableNextButton($argNextButtonID);
        else{
        	enableNextButton($argNextButtonID);
        }
        	
    }
    //---------------------------------------------------------------------------------------
    function disableNextButton( $argButtonID ){
    	var sMethod = 'disableNextButton() ';
        console.log(logPrefix + sMethod);
        $argButtonID.removeClass("ui-btn-up-r");
        $argButtonID.addClass("ui-btn-up-g");
        if( $argButtonID.attr('id')=="MobilePaymentsScreen_NextButton" )
            nextButtonEnabled=false;
    }    
    //---------------------------------------------------------------------------------------
    function enableNextButton( $argButtonID ){
    	var sMethod = 'enableNextButton() ';
        console.log(logPrefix + sMethod);
        $argButtonID.removeClass('ui-btn-up-g');
        $argButtonID.addClass("ui-btn-up-r");
        if( $argButtonID.attr('id')=="MobilePaymentsScreen_NextButton" ){
        	nextButtonEnabled=true;
        	showRedNextButton();
        }
    }
    //---------------------------------------------------------------------------------------
    function updateRadioButtonsState() {
    	var sMethod = 'updateRadioButtonsState() ';
        console.log(logPrefix + sMethod);
        switch (model.get('consentGranted')) {
            case 'G':
                $(refs.androidPayCheckField).prop("checked", true);
                break;
            case 'A':
                $(refs.applePaycheckField).prop("checked", true);
                break;    
            case 'N':
                $(refs.noThanksCheckField).prop("checked", true);
                break;
           
        }
    }
    // ---------------------------------------------------------------------------------------
    function showHideMobilePhoneFields() {
    	var sMethod = 'showHideMobilePhoneFields() ';
        console.log(logPrefix + sMethod);
        console.log(logPrefix + sMethod + $('#primaryLandline_CheckField').is(':checked'));
    	if ($('#primaryLandline_CheckField').is(':checked') && ($('#secondaryMobile_CheckField').is(':checked'))){
    		$(refs.mobilePhoneField).addClass('hideElement');
    	}else if ($('#primaryLandline_CheckField').is(':checked') && ($('#secondaryLandline_CheckField').is(':checked'))){
    		$(refs.mobilePhoneField).addClass('hideElement');
    	}else if($('#primaryMobile_CheckField').is(':checked') && ($('#secondaryLandline_CheckField').is(':checked'))){
    		$(refs.mobilePhoneField).addClass('hideElement');
    	}else if($('#primaryMobile_CheckField').is(':checked') && ($('#secondaryMobile_CheckField').is(':checked'))){
    		$(refs.mobilePhoneField).addClass('hideElement');
    	}else if($('#primaryLandline_CheckField').is(':checked')){
    		$(refs.mobilePhoneField).removeClass('hideElement');
    	}else if(($('#secondaryLandline_CheckField').is(':checked'))){
    		$(refs.mobilePhoneField).removeClass('hideElement');
    	}else if($('#primaryMobile_CheckField').is(':checked')){
    		$(refs.mobilePhoneField).addClass('hideElement');
    	}else if($('#secondaryMobile_CheckField').is(':checked')){
    		$(refs.mobilePhoneField).addClass('hideElement');
    	}else {
    		$(refs.mobilePhoneField).removeClass('hideElement');
    	}
    } 
};
