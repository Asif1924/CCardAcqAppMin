ensureNamespaceExists();
// US4637 - WICI - Addition of email page
WICI.EmailInformationController = function(activationItems, argTranslator, argMessageDialog) {
    var logPrefix = '[WICI.EmailInformationController]::';
    var $screenContainer = $("#EmailInfoScreen");
    var translator = null;
    var messageDialog = null;

    this.show = show;
    this.hide = hide;
    this.init = init;
    var chooseProductModel = null;
    
    var	flow = null;

    this.syncUserData = syncUserData;
    var nextButtonEnabled = false;
    var isEmailNotEntered = false;
    var refs = {
        emaill : '#personalData_EmailAddress_TextField',
        receiveEmail	: '#receiveEmail_CheckBox',
        estmt_consent	:	"#receiveEstmtConsent_CheckBox",
        receiveemail_optin : '#personalData_Optin_RadioButton',
        receiveemail_optout : '#personalData_Optout_RadioButton',
        receiveemailArea:  '#personalData_ReceiveEmailArea',
        nextButton: ".EmailInfoScreen_NextButton",
        prevButton: ".EmailInfoScreen_PrevButton",
    };

    var model = new WICI.BaseModel({
        name: 'emailInfoScreen',
        refs: refs,
        data: [{
            name : 'email',
            value : null,
            validation : {
                type : 'email',
                message : 'personalData1_validation_email',
                canBeEmpty : (($(refs.emaill).val() !== '') || ($(refs.emaill).val() !== null) ) ? false : true,
                group: [ 1 ]
            }
        },{
            name : 'receiveEmail',
            value : null,
            validation : {
                type : 'presence',
                message : 'personalData1_validation_ReceiveEmail',
                group: [ 2 ]
            }
        },
        {
            name : 'estmt_consent',
            value : null,
            validation : {
                type : 'presence',
                message : 'personalData1_validation_ReceiveEmail',
                group: [ 2 ]
            }
        },
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
        showGrayNextButton();
        createView();
        bindEvents();
        initModel();
        restoreCreditCardData();
        var email = activationItems.getModel('emailInfoScreen').get('email');
        if(email !== null){
        	console.log(logPrefix + sMethod + " Email :::"+ model.get('email'));
        	showRedNextButton();
        	nextButtonEnabled = true;
        }
        if (app.translator.getCurrentLanguage() === "fr") {
            $('#personalData_EmailAddress_TextField').attr("placeholder", "Entrez votre adresse de courriel ici...");
            }
            else{
             $('#personalData_EmailAddress_TextField').attr("placeholder", "Enter your email here…");
            }
    }
    // ---------------------------------------------------------------------------------------
    function syncUserData() {
        var sMethod = 'syncUserData() ';
        console.log(logPrefix + sMethod);
        var emailValue = $(refs.emaill).val();
        var receiveEmailYesNo = $(refs.receiveEmail).val();
        console.log(logPrefix + sMethod + " emailValue : " + emailValue);
        
        model.set('email',emailValue);        
        if($(refs.receiveEmail).is(':checked')){
        	model.set('receiveEmail', 'Y');
        } else{
        	model.set('receiveEmail', 'OPERATIONAL');
        }
        if($(refs.estmt_consent).is(':checked')){
        	model.set('estmt_consent', 'Y');
        } else{
        	model.set('estmt_consent', 'N');
        }
        console.log(logPrefix + sMethod + ' model data: \n' + model.toString());
    }
   // ---------------------------------------------------------------------------------------
    function restoreCreditCardData() {
        var sMethod = "restoreCreditCardData()";
        console.log(logPrefix + sMethod);
        
        $(refs.emaill).val(model.get('email'));
        console.log(logPrefix + sMethod + model.get('email'));
        if( model.get('email') !== null){
        	$(refs.receiveEmail).val(model.get('receiveEmail'));
            console.log(logPrefix + sMethod + model.get('receiveEmail'));
        	 if(model.isEmail_valid($(refs.emaill).val().trim())){
                 $(refs.receiveemailArea).show();
             }
        }
        updateReceiveEmailRadioButtons();
    }
    // ---------------------------------------------------------------------------------------
    function show() {
        $screenContainer.show();
        translator.run("EmailInfoScreen");
    }
    // ---------------------------------------------------------------------------------------
    function hide() {
        $screenContainer.hide();
    }
    // ---------------------------------------------------------------------------------------
    function createView() {
        $screenContainer.empty();
        assembleNavigationBarAtTop();
        WICI.BreadcrumbsHelper.assembleBreadcrumbs(3, $screenContainer, activationItems);
        assemblePageHTML($screenContainer, '#WICIEmailInfoScreen-template');
        $screenContainer.addClass("breadcrumbPadding");
        assembleNavigationBarAtBottom();
        showGrayNextButton();
       }
    // ---------------------------------------------------------------------------------------
    function assembleNavigationBarAtTop() {
        $("#pageHeader-template").template("pageHeader");
        $.tmpl("pageHeader", {
            "logo_En" : translator.currentLanguageEnglish(),
            "previousButtonId" : "EmailInfoScreen_PrevButton",
            "nextButtonId" : "EmailInfoScreen_NextButton",
            "settingsButtonId" : "EmailInfoScreen_SettingsButton"
        }).appendTo("#EmailInfoScreen");
    }

    // ---------------------------------------------------------------------------------------
    function assembleNavigationBarAtBottom(){
        $("#pageFooter-template").template("pageFooter");
        $.tmpl("pageFooter", {
            "previousButtonId" : "EmailInfoScreen_PrevButton",
            "nextButtonId" : "EmailInfoScreen_NextButton"
            }
        ).appendTo("#EmailInfoScreen");
    }
    // ---------------------------------------------------------------------------------------
    function bindEvents() {
        var sMethod = 'bindEvents() ';
        console.log(logPrefix + sMethod);
        
           	$('.EmailInfoScreen_NextButton').click(function() {
           		if(nextButtonEnabled){
           		     showNextScreen();
           		}
           		
               });
             console.log("nextButtonEnabled :: "+ nextButtonEnabled);
             console.log(logPrefix + sMethod + "Email :: " + $(refs.emaill).val());
        $('.EmailInfoScreen_PrevButton').click(function() {
        		 showPrevScreen();
        });                              
        
        $(refs.receiveEmail).click(function() {
        	console.log(logPrefix + sMethod + "receiveEmail_CheckBox :: " + $(refs.receiveEmail).is(':checked'));
        	if($(refs.receiveEmail).is(':checked'))
        		model.set('receiveEmail', 'Y');
        	else
        		model.set('receiveEmail', 'OPERATIONAL');
        });
        
        $(refs.estmt_consent).click(function() {
        	console.log(logPrefix + sMethod + "estmt_consent_CheckBox :: " + $(refs.estmt_consent).is(':checked'));
        	if($(refs.estmt_consent).is(':checked'))
        		model.set('estmt_consent', 'Y');
        	else
        		model.set('estmt_consent', 'N');
        });

        $.subscribe('translatorFinished',function(){
        	console.log('Language :: change');
            toggleImage();
            if (app.translator.getCurrentLanguage() === "fr") {
            $('#personalData_EmailAddress_TextField').attr("placeholder", "Entrez votre adresse de courriel ici...");
            }
            else{
             $('#personalData_EmailAddress_TextField').attr("placeholder", "Enter your email here…");
            }
        });
        
        if($(refs.emaill).val() === null || $(refs.emaill).val()  === ''){
        	isEmailNotEntered = true;
        	setTimeout(function(){
                showRedNextButton();
                handleRealTimeKeyStrokes($("#personalData_EmailAddress_TextField"));
                nextButtonEnabled = true;
            },10000);
        }
        
        if($(refs.emaill).val() !== null || $(refs.emaill).val() !== ''){
        	 $(refs.emaill).live('paste, input', function(e) {
            	if(($(refs.emaill).val() !== null) || ($(refs.emaill).val() !== '')){
            		      setTimeout(function(){
                             showRedNextButton();
                             if(model.isEmail_valid($(refs.emaill).val().trim())!= true){
                                 $(refs.receiveemailArea).hide();
                             }
                             else{
                            	 $(refs.receiveemailArea).show();
                             }
                 	         handleRealTimeKeyStrokes($("#personalData_EmailAddress_TextField"));
                 	         nextButtonEnabled = true;
                 	         
                 },10);
            	}
             });
        }
        
        if($(refs.receiveemailArea).val() === null || $(refs.receiveemailArea).val() === ''){
        	$(refs.receiveemailArea).hide();
        }else{
        	$(refs.receiveemailArea).show();
        }
       updateOmxCardLanguage();
       updateOmpOmrCardLanguage();
    }
   // ---------------------------------------------------------------------------------------
    function toggleImage() {
    	var sMethod = " :: toggleImage() :: ";
    	
        if(chooseProductModel.get('productCard') ===  "OMX" || chooseProductModel.get('productCard') ===  "OMZ"){
     	   updateOmxCardLanguage();
        }else if(chooseProductModel.get('productCard') === "OMP" || chooseProductModel.get('productCard') === "OMR"){
     	   updateOmpOmrCardLanguage();
        }
    }
    // ---------------------------------------------------------------------------------------
    function assemblePageHTML($element, templateName) {
        $(templateName).tmpl({
        	activationItems: activationItems,
            } ).appendTo($element);
    }
    // ---------------------------------------------------------------------------------------
    function showNextScreen() {
    	var sMethod = 'showNextScreen() ';
        console.log(logPrefix + sMethod);
        
    	syncUserData();
    	
        if (app.validationsOn) {
        	app.validationDecorator.clearErrArrtibute();
        	            
            if (nextButtonEnabled) {
            	if(model.get('email') === null || model.get('email') === ''){
            		console.log(" isEmailNotEntered ::" + isEmailNotEntered);
            		console.log("User don't wants to provide email id ");
            	}else{
            		console.log("User want to provide email id ");
            	var rez = model.validate(1);
            	console.log("nextButtonEnabled :" + nextButtonEnabled);
            	if(model.isEmail_valid($(refs.emaill).val().trim())!= true){
                   console.log("Email is not valid");
                   rez[0].uiid = refs.emaill;
                   console.log("rez.length ::"+ rez.length);
                   if (rez.length > 0) {                    
                       app.validationDecorator.applyErrAttribute(rez);
                       return;
                   }
                }
                else{
                	console.log("Email is valid");
                	var rez1 = model.validate(2);
                	if(((model.get("receiveEmail") !== "OPERATIONAL") && (model.get("receiveEmail") !== "Y")) ||(model.get("receiveEmail") === null)){
                	
                		rez1[0].uiid = refs.receiveEmail;
                		console.log("rez1.length ::"+ rez1.length);
                		if (rez1.length > 0) {
                            app.validationDecorator.applyErrAttribute(rez1);
                            return;
                        }
                	}
                }
            }
            }else if((($(refs.emaill).val() !== null) || ($(refs.emaill).val() !== ' ')) && ($(refs.receiveEmail).val() !== null)){
            	 console.log(" comimg from previous page !!");	
            	 console.log(" Email id is already provided from previous page !!");
            }
        }        
        flow.next();
    }
    // ---------------------------------------------------------------------------------------
    function showPrevScreen() {
    	var sMethod = 'showPrevScreen() ';
    	syncUserData();
        console.log(logPrefix + sMethod);
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
    	//$(refs.nextButton).addClass('ui-btn-up-g');
    	//$(refs.nextButton).removeClass('ui-btn-up-r');
    }
    
 // ---------------------------------------------------------------------------------------
    function clearRadios(radioGroup) {
    	var sMethod="clearRadios";
    	console.log(logPrefix + sMethod);
    	console.log("Email id :"+model.get('email'));
        if (radioGroup === 'receiveEmail') {
            $(refs.receiveemail_optin).removeClass('ui-btn-active');
            $(refs.receiveemail_optout).removeClass('ui-btn-active');            
            model.set('receiveEmail', null);
        } 
    }
    
    //-----------------------------------------------------------------------------------------
    function onEmailChangesHandler(){
        var sMethod = 'onEmailChangesHandler() ';
        console.log(logPrefix + sMethod);
        syncUserData();
    	
        console.log("Email :" + logPrefix + sMethod + model.get('email'));
        $(refs.receiveemailArea).show();
        //clearRadios('receiveEmail');
        if(model.isEmail_valid($(refs.emaill).val().trim())!= true){
            $(refs.receiveemailArea).hide();
        }
        else{
            $(refs.receiveemailArea).show();
        }
    }
    
  //----------------------------------------------------------------------------------------
    function bindRealTimeEmailControl(){
    	var sMethod = 'bindRealTimeEmailControl() ';
        console.log(logPrefix + sMethod);
        $(refs.emaill).change(function(){
        	showRedNextButton();
            onEmailChangesHandler();
        });
    }
    //---------------------------------------------------------------------------------------
    function disableNextButton( $argButtonID ){
    	var sMethod = 'disableNextButton() ';
        console.log(logPrefix + sMethod);
        $argButtonID.removeClass("ui-btn-up-r");
        $argButtonID.addClass("ui-btn-up-g");
        if( $argButtonID.attr('id')=="EmailInfoScreen_NextButton" )
            nextButtonEnabled=false;
    }
    
    //---------------------------------------------------------------------------------------
    function enableNextButton( $argButtonID ){
    	var sMethod = 'enableNextButton() ';
        console.log(logPrefix + sMethod);
        $argButtonID.removeClass('ui-btn-up-g');
        $argButtonID.addClass("ui-btn-up-r");
        if( $argButtonID.attr('id')=="EmailInfoScreen_NextButton" ){
        	nextButtonEnabled=true;
        	showRedNextButton();
        }
    }
    //---------------------------------------------------------------------------------------
    function updateNextButtonState( $argEmailAddressFieldID, $argNextButtonID ){
    	var sMethod = 'updateNextButtonState() ';
        console.log(logPrefix + sMethod);
        var emailAddress = $argEmailAddressFieldID.val();

        if( emailAddress ===" ")
        	disableNextButton($argNextButtonID);
        else{
        	enableNextButton($argNextButtonID);
        }
        	
    }
    //---------------------------------------------------------------------------------------
    function handleRealTimeKeyStrokes($argField){
    	var sMethod = 'handleRealTimeKeyStrokes() ';
        console.log(logPrefix + sMethod);
        if($argField.attr('id')=="personalData_EmailAddress_TextField")
        	updateNextButtonState($("#personalData_EmailAddress_TextField"),$("#EmailInfoScreen_NextButton"));
    }
  //---------------------------------------------------------------------------------------
    function initFields(){
    	updateNextButtonState($("#personalData_EmailAddress_TextField"),$("#EmailInfoScreen_NextButton"));
    }
    
    //----------------------------------------------------------------------------------------
    function updateOmxCardLanguage() {
    	var sMethod = 'updateOmxCardLanguage() ';
        console.log(logPrefix + sMethod);
        // Choose what card to display: English or French.
        if (app.translator.getCurrentLanguage() === "en") {
            $("#omxCardEmailInfo").removeClass("fr_card");
            $("#omxCardEmailInfo").addClass("en_card");
        } else {
            $("#omxCardEmailInfo").removeClass("en_card");
            $("#omxCardEmailInfo").addClass("fr_card");
        }
    }
    
    //----------------------------------------------------------------------------------------
    function updateOmpOmrCardLanguage() {
    	var sMethod = 'updateOmpOmrCardLanguage() ';
        console.log(logPrefix + sMethod);
        // Choose what card to display: English or French.
        if (app.translator.getCurrentLanguage() === "en") {
            $("#emailInfo_OMR_OMP_image").removeClass("emailInfo_OMR_OMP_cardImage_fr");
            $("#emailInfo_OMR_OMP_image").addClass("emailInfo_OMR_OMP_cardImage");
        } else {
            $("#emailInfo_OMR_OMP_image").removeClass("emailInfo_OMR_OMP_cardImage");
            $("#emailInfo_OMR_OMP_image").addClass("emailInfo_OMR_OMP_cardImage_fr");
        }
        
    }
    //---------------------------------------------------------------------------------------
    function updateReceiveEmailRadioButtons() {
    	var sMethod = 'updateReceiveEmailRadioButtons() ';
        console.log(logPrefix + sMethod);
        switch (model.get('receiveEmail')) {
            case 'Y':
                $(refs.receiveemail_optin).addClass('ui-btn-active');
                break;
            case 'OPERATIONAL':
                $(refs.receiveemail_optout).addClass('ui-btn-active');
                break;
           
        }
    }
};
