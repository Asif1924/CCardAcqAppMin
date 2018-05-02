ensureNamespaceExists();

WICI.InstantIssuanceSetupInsScreenController = function(activationItems, argTranslator, argMessageDialog) {
    var logPrefix = '[WICI.InstantIssuanceSetupInsScreenController]::';
    var translator;
    var messageDialog;
    var	flow = null;
    
    var self = this;
    var screenName = "InstantIssuanceSetupInsScreen";
    var screenID = "#" + screenName;
    var $screenContainer = $(screenID);
    
    var creditCardNumber = "";
    var expiryDate = "";
    var chooseProductModel = null;
    
    this.show = show;
    this.hide = hide;
    this.init = init;
    this.destroy=destroy;

    this.syncUserData = syncUserData;

    var refs = {
    		startNewApplicationBtn  : 	'#instantIssuanceSetupIns_StartNewApplicationButton',
            logOutBtn               : 	'#instantIssuanceSetupIns_LogOutButton',
    		printScreen_DoneButton	:	"#printScreen_DoneButton",
    		image					:	"#androidAppleMobileImage",
    		setupInsSecurityCodeLabel:	"#setupInsSecurityCodeLabel"
    };

    var model = new WICI.BaseModel({
        name: 'InstantIssuanceSetupInsScreen',
        refs: refs,
        data:[
             
              ]
    });
    //---------------------------------------------------------------------------------------
    function init( argFlow ) {
        var sMethod = 'init() ';
        console.log(logPrefix + sMethod);

        flow = argFlow;
        messageDialog = argMessageDialog; 	//(AA)Dependency Injection Principle: Allows for proper unit testing
        translator = argTranslator; 		//(AA)Dependency Injection Principle: Allows for proper unit testing
        
        chooseProductModel = activationItems.getModel('chooseProductModel');
        try {
			var isDevice = new WICI.DeviceDetectionHelper().any();
	
			if (isDevice) {
				app.zebraPrinterWrapper.getDecryptedAccountNumber(activationItems, decryptPANSuccess, decryptPANFailure);
			} else {
				// Web print
				// app.zebraPrinterWrapper.getDecryptedAccountNumber(activationItems, decryptPANSuccess, decryptPANFailure);
			}
		} catch (error) {
			console.log(logPrefix + sMethod + "::[ERROR]::[" + error + "]");
		}
        //app.zebraPrinterWrapper.getDecryptedAccountNumber(activationItems, decryptPANSuccess, decryptPANFailure);
        
        getFormattedExpirydate();
        
        createView();
        alignSecurityCode();
        bindEvents();
        syncUserData();
        
        app.idleTimeService.stop();
        app.logOutTriggerActionService.stop();
        app.abandonApplicationTriggerActionService.stop();
    }
    //---------------------------------------------------------------------------------------
    function syncUserData(){
        var sMethod = 'syncUserData() ';
        
        // console.log(logPrefix + sMethod + ' model data: ' + model.toString());
    }
    //---------------------------------------------------------------------------------------
    function show(){
        var sMethod = 'show() ';
        console.log(logPrefix + sMethod);
        
        $screenContainer.show();        
        translator.run(screenName);
    	
    }
    //---------------------------------------------------------------------------------------
    function hide(){
        var sMethod = 'hide() ';
        console.log(logPrefix + sMethod);
    	
    	$(".pageHeader").remove();
        $screenContainer.hide();
    }
    
    function destroy(){
        var sMethod = 'destroy() ';
        console.log(logPrefix + sMethod);
    	
    	hide();
    	app.navigationController.adhocPrintDemoScreen = null;
    }    
    
    //---------------------------------------------------------------------------------------
    
    function createView() {
        var sMethod = 'createView() ';
        console.log(logPrefix + sMethod);

        $screenContainer.empty();
        assembleNavigationBarAtTop();
        WICI.BreadcrumbsHelper.assembleBreadcrumbs(7, $screenContainer, activationItems);
        
        assemblePageHTML($screenContainer, "#WICI"+screenName+"-template");

        $screenContainer.addClass("breadcrumbPadding");
        $screenContainer.addClass("pageHeaderPadding");
        
        // US4800
        toggleImage();
    }

    // ---------------------------------------------------------------------------------------

    function assembleNavigationBarAtTop() {
        $("#pageHeader-template").template("pageHeader");
        $.tmpl("pageHeader", {
            "logo_En" : translator.currentLanguageEnglish(),
            "settingsButtonId" : "InstantIssuanceSetupInsScreen_SettingsButton"
        }).appendTo(screenID);
    }
    
    // ---------------------------------------------------------------------------------------
    function assemblePageHTML($element, templateName) {
    	var resCardType = null;
        $(templateName).template("InstantIssuanceSetupInsScreen");
        
        if(app.getDemoMode()) {
        	creditCardNumber = activationItems.getModel('printScreen').get('PAN');
        } else {
        	creditCardNumber = activationItems.getModel('printScreen').get('accountNumber');
        }
        
        if(app.getDemoMode()) {
        	if(activationItems.getModel('financialData').get('grossIncome') == "88888") {
        		resCardType = activationItems.getRespCardType();
        	} else {
        		resCardType = activationItems.getModel('chooseProductModel').get('productCard');
        	}
        } else {
        	resCardType = activationItems.getRespCardType();
        }
        
        console.log(logPrefix + " resCardType : " + resCardType);
        
        $.tmpl("InstantIssuanceSetupInsScreen",
            {
                "cardNumber": creditCardNumber.substr(0, 4) + "&nbsp;" + creditCardNumber.substr(4, 4) + "&nbsp;" + creditCardNumber.substr(8,4)+ "&nbsp;" + creditCardNumber.substr(12,4),  
                "expiryDate": expiryDate,
                activationItems: activationItems,
                resCardType: resCardType
            }
        ).appendTo($element);
    }
    
    //---------------------------------------------------------------------------------------
    function bindEvents(){

    	$(refs.startNewApplicationBtn).click(function(){
            messageDialog.htmlConfirm(translator.translateKey("print_StartNewApplicationMessage"), startNewApplication, $.noop, translator.translateKey("backButtonPrompt_title"));
        });

        $(refs.logOutBtn).click(function(){
        	handleLogout();
        });
        
        app.flowController.bindSettingsButtonEvent();

        $(refs.printScreen_DoneButton).click(function(){
        	var sMethod = 'printScreen_DoneButton() ';
            console.log(logPrefix + sMethod);

            hide();
         	app.navigationController.adhocPendingScreen = new WICI.InstantIssuanceSetupCompleteScreenController(activationItems, translator, messageDialog);
	    	app.navigationController.adhocPendingScreen.init(flow);
	    	app.navigationController.adhocPendingScreen.show();
        });
        
        $.subscribe('translatorFinished',function(){
        	console.log('Language :: change');
        	toggleImage();
        	alignSecurityCode();
        });
        
        // US4800
        updateOmpCardLanguageAndroid();
        updateOmrCardLanguageAndroid();
        updateOmxCardLanguageAndroid();
        updateOmzCardLanguageAndroid();
        
        updateOmpCardLanguageIos();
        updateOmrCardLanguageIos();
        updateOmxCardLanguageIos();
        updateOmzCardLanguageIos();
    }
    
    function handleLogout(){
   		hide();
    	app.flowController.logOutClick(self);
    }
    
    //---------------------------------------------------------------------------------------
    function startNewApplication(){
        flow.startApplication();
    }
    //---------------------------------------------------------------------------------------
	function decryptPANSuccess(result) {
	    var sMethod = 'decryptPANSuccess() ';
	    console.log(logPrefix + sMethod);
	    
	    console.log(logPrefix + sMethod + " result from decrypt : " + result + " : " + JSON.stringify(result));
	    creditCardNumber = result;
	}
	//---------------------------------------------------------------------------------------
	function decryptPANFailure(error) {
	    var sMethod = 'decryptPANFailure() ';
	    console.log(logPrefix + sMethod);
	    
	    console.log(logPrefix + sMethod + " error : " + error);
	}
	
	function getFormattedExpirydate() {
		var sMethod = 'getFormattedExpirydate() ';
	    console.log(logPrefix + sMethod);
	    
	    var argExpiryDate = activationItems.getModel('printScreen').get('expiryDate');
	    
		return expiryDate = argExpiryDate.substring(argExpiryDate.length - 2, argExpiryDate.length)+"/"+argExpiryDate.substring(0, argExpiryDate.length - 2);
	}
	
	// ---------------------------------------------------------------------------------------
    function toggleImage() {
    	var sMethod = " :: toggleImage() :: ";
    	console.log(logPrefix + sMethod);
        if(chooseProductModel.get('productCard') === "OMX"){
        	updateOmxCardLanguageAndroid();
        	updateOmxCardLanguageIos();
        }else if(chooseProductModel.get('productCard') === "OMP"){
        	updateOmpCardLanguageAndroid();
        	updateOmpCardLanguageIos();        	
        }else if(chooseProductModel.get('productCard') === "OMR"){
        	updateOmrCardLanguageAndroid();
        	updateOmrCardLanguageIos();
       }else if(chooseProductModel.get('productCard') === "OMZ"){
    	  updateOmzCardLanguageAndroid();
    	  updateOmzCardLanguageIos();
    }
    }
	// US4800 
    function updateOmpCardLanguageAndroid() {
        // Choose what card to display: English or French.
        if (app.translator.getCurrentLanguage() === "en") {
            $("#ompCard_setUpPageAndroid").removeClass("fr_card");
            $("#ompCard_setUpPageAndroid").addClass("en_card");
        } else {
            $("#ompCard_setUpPageAndroid").removeClass("en_card");
            $("#ompCard_setUpPageAndroid").addClass("fr_card");
        }
    }
    
    function updateOmrCardLanguageAndroid() {
        // Choose what card to display: English or French.
        if (app.translator.getCurrentLanguage() === "en") {
            $("#omrCard_setUpPageAndroid").removeClass("fr_card");
            $("#omrCard_setUpPageAndroid").addClass("en_card");
        } else {
            $("#omrCard_setUpPageAndroid").removeClass("en_card");
            $("#omrCard_setUpPageAndroid").addClass("fr_card");
        }
    }
    
    function updateOmxCardLanguageAndroid() {
        // Choose what card to display: English or French.
        if (app.translator.getCurrentLanguage() === "en") {
            $("#omxCard_setUpPageAndroid").removeClass("fr_card");
            $("#omxCard_setUpPageAndroid").addClass("en_card");
        } else {
            $("#omxCard_setUpPageAndroid").removeClass("en_card");
            $("#omxCard_setUpPageAndroid").addClass("fr_card");
        }
    }
    
    function updateOmxCardLanguageIos() {
        // Choose what card to display: English or French.
        if (app.translator.getCurrentLanguage() === "en") {
            $("#omxCard_setUpPageIos").removeClass("fr_card");
            $("#omxCard_setUpPageIos").addClass("en_card");
        } else {
            $("#omxCard_setUpPageIos").removeClass("en_card");
            $("#omxCard_setUpPageIos").addClass("fr_card");
        }
    }
    
    function updateOmzCardLanguageAndroid() {
        // Choose what card to display: English or French.
        if (app.translator.getCurrentLanguage() === "en") {
            $("#omzCard_setUpPageAndroid").removeClass("fr_card");
            $("#omzCard_setUpPageAndroid").addClass("en_card");
        } else {
            $("#omzCard_setUpPageAndroid").removeClass("en_card");
            $("#omzCard_setUpPageAndroid").addClass("fr_card");
        }
    }
    
    function updateOmzCardLanguageIos() {
        // Choose what card to display: English or French.
        if (app.translator.getCurrentLanguage() === "en") {
            $("#omzCard_setUpPageIos").removeClass("fr_card");
            $("#omzCard_setUpPageIos").addClass("en_card");
        } else {
            $("#omzCard_setUpPageIos").removeClass("en_card");
            $("#omzCard_setUpPageIos").addClass("fr_card");
        }
    }
    
    
    function updateOmrCardLanguageIos() {
        // Choose what card to display: English or French.
        if (app.translator.getCurrentLanguage() === "en") {
            $("#omrCard_setUpPageIos").removeClass("fr_card");
            $("#omrCard_setUpPageIos").addClass("en_card");
        } else {
            $("#omrCard_setUpPageIos").removeClass("en_card");
            $("#omrCard_setUpPageIos").addClass("fr_card");
        }
    }
    
    function updateOmpCardLanguageIos() {
        // Choose what card to display: English or French.
        if (app.translator.getCurrentLanguage() === "en") {
            $("#ompCard_setUpPageIos").removeClass("fr_card");
            $("#ompCard_setUpPageIos").addClass("en_card");
        } else {
            $("#ompCard_setUpPageIos").removeClass("en_card");
            $("#ompCard_setUpPageIos").addClass("fr_card");
        }
    }
    
	function alignSecurityCode() {
		var sMethod = 'alignSecurityCode() ';
	    console.log(logPrefix + sMethod);
	    
	    if(translator.getCurrentLanguage() === 'en') {
	    	$(refs.setupInsSecurityCodeLabel).addClass("setupInsTableWidth");
	    	$(refs.setupInsSecurityCodeLabel).removeClass("setupInsTableWidth_fr");
	    } else {
	    	$(refs.setupInsSecurityCodeLabel).addClass("setupInsTableWidth_fr");
	    	$(refs.setupInsSecurityCodeLabel).removeClass("setupInsTableWidth");
	    }
	}
};