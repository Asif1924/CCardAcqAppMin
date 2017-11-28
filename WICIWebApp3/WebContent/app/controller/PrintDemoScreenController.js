ensureNamespaceExists();

WICI.PrintDemoScreenController = function(activationItems, argTranslator, argMessageDialog, argPendScreenInfo) {
    var logPrefix = '[WICI.PrintDemoScreenController]::';
    var $screenContainer = $("#PrintDemoScreen");
    var translator;
    var messageDialog;
    var	flow = null;
    var testPrintFailedAttempts = 0;
    var approvedPrintFailedAttempts = 0;
    var homePhoneDisplayAttempt = 0;
    
    var appStatus = "";
    var tokenValue;
    var respAn = null;
    var activationItemsFromServer = null;
    var fromPendScreen = false;
    var self = this;
    var employerID;
    var homePhonePersonalInfo = "";
    
    var argTransactionID = "";
    var argMSISDN = "";
    var argConsentGranted = "";
    var argDeviceType = "";

    var connectivityController = null;
    
    var PAN = "";
    var expiryDate = "";
    
    this.show = show;
    this.hide = hide;
    this.init = init;
    this.destroy=destroy;

    this.syncUserData = syncUserData;

    var refs = {
        prevBtn     			: 	'#printScreen_PrevButton',
        startNewApplicationBtn  : 	'#print_StartNewApplicationButton',
        logOutBtn               : 	'#print_LogOutButton',
        printButton             :   '#printScreen_PrintButton',
        tokenField				:	'#printScreenTokenField',
        printScreenAndroidPay   :   '#printScreenAndroidPay_CheckField',
        printScreenApplePay     :   '#printScreenApplePay_CheckField',
        printScreenBeginSetup   :   '#printScreen_BeginSetupButton',
    };

    var model = new WICI.BaseModel({
        name: 'printScreen',
        refs: refs,
        data:[
              { notField: true, name: 'printScreenAndroidPay',     value: null },
              { notField: true, name: 'printScreenApplePay',     value: null },
              { notField: true, name: 'keyForDisplayingCardSelection',     value: null },
              { notField: true, name: 'keyForDisplayingApplicationStatus',     value: null },
              { notField: true, name: 'PAN',     value: null },
              { notField: true, name: 'expiryDate',     value: null },
              { notField: true, name: 'deviceType',     value: null },
              { notField: true, name: 'appStatus',     value: null },
              { notField: true, name: 'accountNumber',     value: null },
              { notField: true, name: 'MSISDN',     value: null },
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
        
        connectivityController = new WICI.ConnectivityController(new WICI.ConnectionStatus(), messageDialog, translator, WICI.AppConfig.ConnectivityConfig);
        connectivityController.init();

        respAn = new WICI.PollingResponseAnalyzer();        
        tokenValue = respAn.getRetrievalToken(activationItems.getNewAccountApplicationResponse());
        employerID = activationItems.getModel('loginScreen').get('employerID');
        homePhonePersonalInfo = activationItems.getHomePhone();
        argMSISDN = activationItems.getMobilePhone();
        
        console.log(logPrefix + sMethod + " homePhonePendingInfo : " + activationItems.getHomePhone() + " : " + homePhonePersonalInfo );
        console.log(logPrefix + sMethod + " Mobile Number : " + activationItems.getMobilePhone() );
        
        model.set('appStatus', respAn.getAppStatus(activationItems.getNewAccountApplicationResponse()));
        console.log(logPrefix + sMethod + " appStatus ::: " + model.get('appStatus'));
        
        if(respAn.getAppStatus(activationItems.getNewAccountApplicationResponse()) === 'APPROVED') {
        	PAN = respAn.getPAN(activationItems.getNewAccountApplicationResponse());
            expiryDate = respAn.getExpiryDate(activationItems.getNewAccountApplicationResponse());
            argTransactionID = respAn.getTransactionID(activationItems.getNewAccountApplicationResponse());
            // argMSISDN = respAn.getMSISDN(activationItems.getNewAccountApplicationResponse());
            argConsentGranted = respAn.getConsentGranted(activationItems.getNewAccountApplicationResponse());
            console.log(logPrefix + sMethod + " argMSISDN : " + argMSISDN + " argConsentGranted : " + argConsentGranted);
            
            model.set('PAN', PAN);
            model.set('expiryDate', expiryDate);
            model.set('MSISDN', argMSISDN);
            console.log(logPrefix + sMethod + " PAN=" + PAN + " expiryDate : " + expiryDate + " tokenValue : " + tokenValue);
            console.log(logPrefix + sMethod + " argTransactionID=" + argTransactionID + " argMSISDN : " + argMSISDN + " argConsentGranted : " + argConsentGranted);
        } 
        
        if(argPendScreenInfo){
            console.log(logPrefix + sMethod + " activationItemsFromServer=" + argPendScreenInfo.activationItemsFromServer);
            
            appStatus = respAn.getAppStatus(respAn.getWICIResponse(argPendScreenInfo.accountApplicationResponse));
            console.log(logPrefix + sMethod + " appStatus=" + appStatus);
            
            if(argPendScreenInfo.activationItemsFromServer){
            	activationItemsFromServer = argPendScreenInfo.activationItemsFromServer;
            	fromPendScreen = argPendScreenInfo.fromPendScreen;
            }	
            console.log(logPrefix + sMethod + " fromPendScreen : " + fromPendScreen);
            if( fromPendScreen ){
            	var currentAccountApplicationResponse =  respAn.getWICIResponse(argPendScreenInfo.accountApplicationResponse);
            	var newAccountApplicationResponse = argPendScreenInfo.accountApplicationResponse;
            	
            	activationItems = new WICI.ServerActivationItemsMapper().mapToActivationItems( activationItemsFromServer );
            	activationItems.setAccountApplicationResponse(currentAccountApplicationResponse);
            	activationItems.setNewAccountApplicationResponse(newAccountApplicationResponse);

            	console.log(logPrefix + sMethod + "  activationItems.getAccountApplicationStatus()=" + activationItems.getAccountApplicationStatus());
            }
        }
        
        testPrintFailedAttempts = 0;
        approvedPrintFailedAttempts = 0;
        homePhoneDisplayAttempt = 0;
        createView();
        $(refs.tokenField).val(tokenValue);
        $(refs.printButton).hide();
        bindEvents();
        syncUserData();
    }
    //---------------------------------------------------------------------------------------
    function syncUserData(){
        var sMethod = 'syncUserData() ';
        
        model.set('printScreenAndroidPay',   $(refs.printScreenAndroidPay).is(':checked') ? 'Y' : 'N');
        model.set('printScreenApplePay',   $(refs.printScreenApplePay).is(':checked') ? 'Y' : 'N');
        
        if(model.get('printScreenAndroidPay') === 'Y') {
        	model.set('deviceType', "ANDROID");
        } else if(model.get('printScreenApplePay') === 'Y') {
        	model.set('deviceType',"APPLE");
        }
        console.log(logPrefix + sMethod + ' model data: ' + model.toString());
    }
    //---------------------------------------------------------------------------------------
    function show(){
        var sMethod = 'show() ';
        console.log(logPrefix + sMethod);
    	
        $(refs.tokenField).val(tokenValue);
        
        $screenContainer.show();
        translator.run("PrintDemoScreen");

        if (app.zebraPrinterWrapper.verifyPrinterMacAddress ()){
        	console.log(logPrefix + sMethod + ":: PrinterMACAddress is good");
            printFile();
        }
        else {
        	console.log(logPrefix + sMethod + ":: PrinterMACAddress no good, show PrinterSetupDialog");
            showPrinterSetupAccountProfileDialog(setupPrinterMacAddress);
        }
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
        if( !fromPendScreen ){
        	WICI.BreadcrumbsHelper.assembleBreadcrumbs(7, $screenContainer, activationItems);
        }
        assemblePageHTML($screenContainer, "#WICIPrintDemoScreen-template");
        $screenContainer.addClass("breadcrumbPadding");
    }

    //---------------------------------------------------------------------------------------
    function assembleNavigationBarAtTop() {
        var sMethod = 'assembleNavigationBarAtTop() ';
        console.log(logPrefix + sMethod);
        
        $("#pageHeader-template").template("pageHeader");
        $.tmpl("pageHeader", {
            "logo_En" : translator.currentLanguageEnglish(),
            //"previousButtonId" 		:    refs.prevBtn.replace('#',''),
            "settingsButtonId" 		: "printScreen_SettingsButton"
            //"nextButtonId" :        "summaryScreen_NextButton"
        }).appendTo("#PrintDemoScreen");

        $('#printScreen_SettingsButton').addClass('rightPosition');
    }

    function getKeyForCardSelection(  ){
        var sMethod = 'getKeyForCardSelection() ';
        //console.log(logPrefix + sMethod + " card=" + activationItems.getCardFriendlyName(activationItems.getModel('chooseProductModel').get('productCard')));
        if(appStatus==="DECLINED")
            return "chooseProduct_NoSpecificCard";
       
          //  return (activationItems.getCardFriendlyName(activationItems.getModel('chooseProductModel').get('productCard')));
        model.set('keyForDisplayingCardSelection', activationItems.getCardFriendlyNameWithoutReg(activationItems.getModel('chooseProductModel').get('productCard')));
        return (activationItems.getCardFriendlyNameWithoutReg(activationItems.getModel('chooseProductModel').get('productCard')));
    }
    
    function getKeyForApplicationStatus(  ){
        var sMethod = 'getKeyForApplicationStatus() ';
        //console.log(logPrefix + sMethod + " status=" + activationItems.getAccountApplicationStatus());
        if(appStatus==="DECLINED")
        	return "printScreen_ApplicationDeclined";
        
        model.set('keyForDisplayingApplicationStatus', activationItems.getAccountApplicationStatus());
   		return activationItems.getAccountApplicationStatus();     		
    }
    
    function getConsentGrantedFlag() {
    	var sMethod = 'getConsentGrantedFlag() ';
        console.log(logPrefix + sMethod );
        
        return activationItems.getAppResponseConsentGranted();
    }
    
    function getArgTransactionID() {
    	var sMethod = 'getArgTransactionID() ';
        console.log(logPrefix + sMethod );
        
        return activationItems.getAppResponseTransactionID();
    }

    function getArgPAN() {
    	var sMethod = 'getArgPAN() ';
        console.log(logPrefix + sMethod );
        
        return activationItems.getAppResponsePAN();
    }
    
    function assemblePageHTML($element, templateName) {
       var sMethod = 'assemblePageHTML() ';
       console.log(logPrefix + sMethod);
       
       $(templateName).template("printDemoScreenPage");
        $.tmpl("printDemoScreenPage", {
              keyForDisplayingCardSelection: getKeyForCardSelection(),
              keyForDisplayingApplicationStatus: getKeyForApplicationStatus(),
            activationItems: activationItems,
            tokenValue:tokenValue,
            appStatus:appStatus,
            fromPendingScreen:fromPendScreen,
            consentGranted: argConsentGranted,
            appStatusFromResponse: respAn.getAppStatus(activationItems.getNewAccountApplicationResponse())
        }).appendTo($element);
    }
    //---------------------------------------------------------------------------------------
    function bindEvents(){
        $(refs.prevBtn).click(function(){
            showPrevScreen();
        });

        $(refs.startNewApplicationBtn).click(function(){
            messageDialog.htmlConfirm(translator.translateKey("print_StartNewApplicationMessage"), startNewApplication, $.noop, translator.translateKey("backButtonPrompt_title"));
        });

        $(refs.logOutBtn).click(function(){
        	handleLogout();
        });

        $(refs.printButton).click(function() {
            var sMethod = 'printButton_onClick() ';
            console.log(logPrefix + sMethod);

            // Print response again
            WICI.BluetothHelper.toggle().done(printFile).fail(alert);
        });
        app.flowController.bindSettingsButtonEvent();
        
        $(refs.printScreenAndroidPay).change(function() {
        	syncUserData();
        });
        
        $(refs.printScreenApplePay).change(function() {
        	syncUserData();
        });
        
        $(refs.printScreenBeginSetup).click(function() {
        	var sMethod = 'printScreenBeginSetupClick() ';
            console.log(logPrefix + sMethod + " argTransactionID : " + argTransactionID + " PAN : " + PAN + " argMSISDN : " + argMSISDN + " DeviceType : " + model.get('deviceType') );

            new WICI.LoadingIndicatorController().show();
            
            try {
    			var isDevice = new WICI.DeviceDetectionHelper().any();
    	
    			if (isDevice) {
    				app.zebraPrinterWrapper.getDecryptedAccountNumber(activationItems, decryptPANSuccess, decryptPANFailure);
    			} else {
    				// Web print
    				model.set('accountNumber', "6666555544443333");
    				argDeviceType = model.get('deviceType');
    		        connectivityController.InstantIssuance(argTransactionID, PAN, argMSISDN, argDeviceType, successInitActivate,failedInitActivate);
    			}
    		} catch (error) {
    			console.log(logPrefix + sMethod + "::[ERROR]::[" + error + "]");
    		}
        });
        
    }
    
    function handleLogout(){
    	if(fromPendScreen)
    	hide();
    	app.flowController.logOutClick(self);
    }
    
    //---------------------------------------------------------------------------------------
    function startNewApplication(){
        flow.startApplication();
    }
    //---------------------------------------------------------------------------------------

    function showPrevScreen(){
        //syncUserData();
        flow.back();
    }
    //---------------------------------------------------------------------------------------
    function showNextScreen(){
        //syncUserData();
        flow.next();
    }
    //---------------------------------------------------------------------------------------
	function decryptPANSuccess(response) {
	    var sMethod = 'decryptPANSuccess() ';
	    console.log(logPrefix + sMethod + " response from decrypt : " + response);
	    
	    model.set('accountNumber', response);
	    
	    console.log(logPrefix + sMethod + " argTransactionID : " + argTransactionID + " PAN : " + PAN + " argMSISDN : " + argMSISDN + " DeviceType : " + model.get('deviceType') );
	    argDeviceType = model.get('deviceType');
        connectivityController.InstantIssuance(argTransactionID, PAN, argMSISDN, argDeviceType, successInitActivate,failedInitActivate);
	}
	//---------------------------------------------------------------------------------------
	function decryptPANFailure(error) {
	    var sMethod = 'decryptPANFailure() ';
	    console.log(logPrefix + sMethod + " error : " + error);
	    
	    new WICI.LoadingIndicatorController().hide();
        hide();
     	app.navigationController.adhocPendingScreen = new WICI.InstantIssuanceSetupCompleteScreenController(activationItems, translator, messageDialog);
    	app.navigationController.adhocPendingScreen.init(flow);
    	app.navigationController.adhocPendingScreen.show();
	}
	//---------------------------------------------------------------------------------------
    function successInitActivate( argResponse ){
        var sMethod = 'successInitActivate() ';
        console.log(logPrefix + sMethod + " isError:" + argResponse.error+ " msg:"+argResponse.msg+ " enstreamResponse: "+argResponse.enstreamResponse);

        new WICI.LoadingIndicatorController().hide();
        if( !argResponse.error && argResponse.enstreamResponse === 'Y' ){ 
        	hide();
         	app.navigationController.adhocPendingScreen = new WICI.InstantIssuanceSetupInsScreenController(activationItems, translator, messageDialog);
	    	app.navigationController.adhocPendingScreen.init(flow);
	    	app.navigationController.adhocPendingScreen.show();
        } else {
        	hide();
         	app.navigationController.adhocPendingScreen = new WICI.InstantIssuanceSetupCompleteScreenController(activationItems, translator, messageDialog);
	    	app.navigationController.adhocPendingScreen.init(flow);
	    	app.navigationController.adhocPendingScreen.show();
        }
    }

    function failedInitActivate( argResponse ){
        var sMethod = 'failedInitActivate() ';
        if(argResponse)
        	console.log(logPrefix + sMethod + " isError:" + argResponse.error+ " msg:"+argResponse.msg+ " enstreamResponse: "+argResponse.enstreamResponse);

        new WICI.LoadingIndicatorController().hide();
        hide();
     	app.navigationController.adhocPendingScreen = new WICI.InstantIssuanceSetupCompleteScreenController(activationItems, translator, messageDialog);
    	app.navigationController.adhocPendingScreen.init(flow);
    	app.navigationController.adhocPendingScreen.show();
    }
    //---------------------------------------------------------------------------------------
    function printFile() {
        var sMethod = 'printFile() ';
        console.log(logPrefix + sMethod);
        var isDevice = new WICI.DeviceDetectionHelper().any();
        var respAn = new WICI.PollingResponseAnalyzer();
        
        if( isDevice ){
            if (!app.zebraPrinterWrapper.verifyPrinterMacAddress() ) {
                showPrinterSetupAccountProfileDialog (setupPrinterMacAddress);

                return;
            }

            try
            {
                new WICI.LoadingIndicatorController().show();

                // Get application server response                
                //var applicationResponse = activationItems.getAccountApplicationResponse().data;
                var applicationResponseData = respAn.getData(activationItems.getAccountApplicationResponse());
                console.log(logPrefix + sMethod + "app response = " + respAn.getAppStatus(activationItems.getAccountApplicationResponse()) );
                //messageDialog.info(applicationResponse.data, "Print Info");
                console.log(logPrefix + sMethod + " fromPendScreen :: " + fromPendScreen);
                
                if(fromPendScreen){
                	//activationItems = argPendScreenInfo.activationItemsFromServer;
                	activationItems = new WICI.ServerActivationItemsMapper().mapToActivationItems(argPendScreenInfo.activationItemsFromServer);
                }
                
                app.zebraPrinterWrapper.printFile(
                    activationItems,
                    applicationResponseData,
                    printFileSuccess,
                    printFileFailure);
            }
            catch (error){
                console.log(logPrefix + sMethod +"::[ERROR]::[" + error +"]");
                new WICI.LoadingIndicatorController().hide();
                //printFileFailure();
                //messageDialog = app.messageDialog;
                //messageDialog.error(error, "Print File Failed");
            }
        }else{
            var applicationResponse = respAn.getWICIResponse(activationItems.getAccountApplicationResponse());
        	messageDialog.info("Receipt printed status = " + respAn.getAppStatus(applicationResponse), "Web Printer");
        	printFileSuccess();
        }

    }
    //---------------------------------------------------------------------------------------
    function rePrintFile() {
        var sMethod = 'rePrintFile() ';
        console.log(logPrefix + sMethod);
        var isDevice = new WICI.DeviceDetectionHelper().any();
        var respAn = new WICI.PollingResponseAnalyzer();
        
        if( isDevice ){
            if (!app.zebraPrinterWrapper.verifyPrinterMacAddress() ) {
                showPrinterSetupAccountProfileDialog (setupPrinterMacAddress);

                return;
            }

            try
            {
                new WICI.LoadingIndicatorController().show();

                // Get application server response                
                //var applicationResponse = activationItems.getAccountApplicationResponse().data;
                var applicationResponseData = respAn.getData(activationItems.getAccountApplicationResponse());
                console.log(logPrefix + sMethod + "app response = " + respAn.getAppStatus(activationItems.getAccountApplicationResponse()) );
                //messageDialog.info(applicationResponse.data, "Print Info");
                console.log(logPrefix + sMethod + " fromPendScreen :: " + fromPendScreen);
                
                if(fromPendScreen){
                	//activationItems = argPendScreenInfo.activationItemsFromServer;
                	activationItems = new WICI.ServerActivationItemsMapper().mapToActivationItems(argPendScreenInfo.activationItemsFromServer);
                }
                
                app.zebraPrinterWrapper.printFile(
                    activationItems,
                    applicationResponseData,
                    rePrintFileSuccess,
                    rePrintFileFailure);
            }
            catch (error){
                console.log(logPrefix + sMethod +"::[ERROR]::[" + error +"]");
                new WICI.LoadingIndicatorController().hide();
                //printFileFailure();
                //messageDialog = app.messageDialog;
                //messageDialog.error(error, "Print File Failed");
            }
        }else{
            var applicationResponse = respAn.getWICIResponse(activationItems.getAccountApplicationResponse());
        	messageDialog.info("Receipt printed status = " + respAn.getAppStatus(applicationResponse), "Web Printer");
        	rePrintFileSuccess();
        }

    }
    //---------------------------------------------------------------------------------------
    function printCoupon() {
		var sMethod = 'printCoupon() ';
		console.log(logPrefix + sMethod);
		try {
			var isDevice = new WICI.DeviceDetectionHelper().any();
	
			if (isDevice) {
	
				if (!app.zebraPrinterWrapper.verifyPrinterMacAddress()) {
					app.accountProfileHelper.showNoPrinterSetupWarning ();	
					return;
				}
				new WICI.LoadingIndicatorController().show();
	
				app.zebraPrinterWrapper.printCoupon(activationItems,
						printCouponSuccess, printCouponFailure);
	
			} else {
				// Web print
			}
		} catch (error) {
			console.log(logPrefix + sMethod + "::[ERROR]::[" + error + "]");
		}
		return;
	}
	
	//---------------------------------------------------------------------------------------
	function printCouponSuccess(result) {
	    var sMethod = 'printCouponSuccess() ';
	    console.log(logPrefix + sMethod);
	    
	    new WICI.LoadingIndicatorController().hide();
	}
	//---------------------------------------------------------------------------------------
	function printCouponFailure() {
	    var sMethod = 'printCouponFailure() ';
	    console.log(logPrefix + sMethod);
	    
	    new WICI.LoadingIndicatorController().hide();
	}
    //---------------------------------------------------------------------------------------
    function setupPrinterMacAddress (macAddress) {
        app.zebraPrinterWrapper.setPrinterMacAddress(macAddress, storePrinterMacAddressCallback, storePrinterMacAddressCallback);
    }
    //---------------------------------------------------------------------------------------
    function storePrinterMacAddressCallback () {
        var sMethod = 'storePrinterMacAddressCallback() ';
        console.log(logPrefix + sMethod);

        messageDialog.confirm(translator.translateKey("confirmDialogPritTest_Message"), testPrintYes, testPrintNo);
    }
    //---------------------------------------------------------------------------------------
    function testPrintNo () {
        var sMethod = 'testPrintNo() ';
        console.log(logPrefix + sMethod);

        printFile();
    }
    //---------------------------------------------------------------------------------------
    function testPrintYes () {
        var sMethod = 'testPrintYes() ';
        console.log(logPrefix + sMethod);

        new WICI.LoadingIndicatorController().show();
        app.zebraPrinterWrapper.testPrint(printTestFileSuccess, printTestFileFailure);
    }
    //---------------------------------------------------------------------------------------
    function printTestFileSuccess(result) {
        var sMethod = 'printTestFileSuccess() ';
        console.log(logPrefix + sMethod);

        new WICI.LoadingIndicatorController().hide();
        messageDialog.confirm(translator.translateKey("testPrintStatusMsg"), testPrintConfirmationYes, testPrintConfirmationNo, translator.translateKey("printResponseStatusTitle"));
    }
    //---------------------------------------------------------------------------------------
    function printTestFileFailure(error) {
        var sMethod = 'printTestFileFailure() ';
        console.log(logPrefix + sMethod);

        new WICI.LoadingIndicatorController().hide();
        messageDialog.confirm(translator.translateKey("testPrintStatusMsg"), testPrintConfirmationYes, testPrintConfirmationNo, translator.translateKey("printResponseStatusTitle"));
    }
    //---------------------------------------------------------------------------------------
    function testPrintConfirmationYes () {
        var sMethod = 'testPrintConfirmationYes() ';
        console.log(logPrefix + sMethod);

        printFile();
    }
    //---------------------------------------------------------------------------------------
    function testPrintConfirmationNo () {
        var sMethod = 'testPrintConfirmationNo() ';
        console.log(logPrefix + sMethod);

        if (testPrintFailedAttempts > WICI.AppConfig.TestPrintConfig.MAX_TEST_PRINT_RETRIES - 1) {
            testPrintFailedAttempts = 0;
            showPrinterSetupAccountProfileDialog(setupPrinterMacAddress);
        } else {
            ++testPrintFailedAttempts;
            WICI.BluetothHelper.toggle().done(testPrintYes).fail(alert);
        }
    }
    //---------------------------------------------------------------------------------------
    function printFileSuccess(result) {
        var sMethod = 'printFileSuccess() ';
        console.log(logPrefix + sMethod);
        
        // US4414 & US4282
        console.log(logPrefix + sMethod + " employerID :: " + employerID);
        if(employerID != "E") {
        	rePrintAttemptCheck();
        } else {
        	messageDialog.confirm(translator.translateKey("printResponseStatusMsg"), printConfirmationYes, printConfirmationNo, translator.translateKey("printResponseStatusTitle"));
        }
    }
    //---------------------------------------------------------------------------------------
    function printFileFailure() {
        var sMethod = 'printFileFailure() ';
        console.log(logPrefix + sMethod);
        
        new WICI.LoadingIndicatorController().hide();
        
        // US4414 & US4282
        console.log(logPrefix + sMethod + " employerID :: " + employerID);
        if(employerID != "E") {
        	rePrintAttemptCheck();
        } else {
        	messageDialog.confirm(translator.translateKey("printResponseStatusMsg"), printConfirmationYes, printConfirmationNo, translator.translateKey("printResponseStatusTitle"));
        }
    }
    //---------------------------------------------------------------------------------------
    function rePrintFileSuccess(result) {
        var sMethod = 'rePrintFileSuccess() ';
        console.log(logPrefix + sMethod);
        
        printCoupon();
    }
    //---------------------------------------------------------------------------------------
    function rePrintFileFailure() {
        var sMethod = 'rePrintFileFailure() ';
        console.log(logPrefix + sMethod);
        
        new WICI.LoadingIndicatorController().hide();
    }
    //---------------------------------------------------------------------------------------
    // US4282
    function homePhoneDisplayAttemptCheck() {
    	var sMethod = 'homePhoneDisplayCheck() ';
    	console.log(logPrefix + sMethod + " homePhoneDisplayAttempt : " + homePhoneDisplayAttempt);
	    if (homePhoneDisplayAttempt > WICI.AppConfig.homePhoneDisplayConfig.MAX_HOME_PHONE_DISPLAY - 1) {
	    	homePhoneDisplayAttempt = 0;
	      	new WICI.LoadingIndicatorController().hide();
	    } else {
	        ++homePhoneDisplayAttempt;
	        console.log(logPrefix + sMethod + " homePhoneDisplayAttempt else condition : " + homePhoneDisplayAttempt);
	        homePhoneDisplaycheck();  
	    }        
    }
    //---------------------------------------------------------------------------------------
    function homePhoneDisplaycheck() {
    	var sMethod = 'homePhoneDisplaycheck() ';
    	var cardType = activationItems.getModel('chooseProductModel').get('productCard');
        console.log(logPrefix + sMethod + " employerID : " + employerID + " cardType : " + cardType);
         var applicationResponseData = respAn.getData(activationItems.getAccountApplicationResponse());
         appStatus = respAn.getAppStatus(activationItems.getAccountApplicationResponse());   
        
     	if(appStatus == "APPROVED" && employerID != "E" && (cardType == "OMC" || cardType == "OMP" || cardType == "OMR") ) {
      		 messageDialog.homePhone(translator.translateKey("homePhoneInputTitle_one"),translator.translateKey("homePhoneInputTitle_two"), homePhoneconfirmYes, translator.translateKey("homePhoneMessage_Title")); 
       	} else {
       		// No homephone display  other than FMR and OMC/OMP/OMR.
            // Don't show homePhoneDialog . Hide dialog. 
       		new WICI.LoadingIndicatorController().hide();
      	}
    }
    //---------------------------------------------------------------------------------------
    function rePrintAttemptCheck() {
    	var sMethod = 'rePrintAttemptCheck() ';
    	console.log(logPrefix + sMethod + " approvedPrintFailedAttempts : " + approvedPrintFailedAttempts);
	    if (approvedPrintFailedAttempts > WICI.AppConfig.approvedPrintConfig.MAX_APPROVED_PRINT_RETRIES - 1) {
	    	approvedPrintFailedAttempts = 0;
	      	new WICI.LoadingIndicatorController().hide();
	    } else {
	        ++approvedPrintFailedAttempts;
	        console.log(logPrefix + sMethod + " approvedPrintFailedAttempts else condition : " + approvedPrintFailedAttempts);
	        // US4164
	        rePrintcheck();
	    }        
    }
    //---------------------------------------------------------------------------------------
    // US4164
    function rePrintcheck() {
    	var sMethod = 'rePrintcheck() ';
    	var cardType = activationItems.getModel('chooseProductModel').get('productCard');
        console.log(logPrefix + sMethod + " employerID : " + employerID + " cardType : " + cardType);
        
     	if(employerID != "E" && (cardType == "OMC" || cardType == "OMP" || cardType == "OMR") ) {
      		messageDialog.confirm(translator.translateKey("printResponseStatusMsg"), printConfirmationYes, printConfirmationNo, translator.translateKey("printResponseStatusTitle"));
       	} else {
       		// No reprint other than FMR and OMC/OMP/OMR.
            // Don't show rePrintDialog. Hide dialog. 
       		new WICI.LoadingIndicatorController().hide();
      	}
    }
    //---------------------------------------------------------------------------------------
    function printConfirmationYes (){
        var sMethod = 'printConfirmationYes() ';
        console.log(logPrefix + sMethod);
        
        new WICI.LoadingIndicatorController().hide();
    }
    //---------------------------------------------------------------------------------------
    function printConfirmationNo() {
        var sMethod = 'printConfirmationNo() ';        
        console.log(logPrefix + sMethod);
        
        console.log(logPrefix + sMethod + " employerID :: " + employerID + " appStatus :: " + appStatus);
        // US4307
        if(argPendScreenInfo) {
            console.log(logPrefix + sMethod + " activationItemsFromServer=" + argPendScreenInfo.activationItemsFromServer);            
            if(argPendScreenInfo.activationItemsFromServer){
            	activationItemsFromServer = argPendScreenInfo.activationItemsFromServer;
            	fromPendScreen = argPendScreenInfo.fromPendScreen;
            }	
            
            console.log(logPrefix + sMethod + " fromPendScreen : " + fromPendScreen);
            if( fromPendScreen ) {
            	var currentAccountApplicationResponse =  respAn.getWICIResponse(argPendScreenInfo.accountApplicationResponse);
            	var newAccountApplicationResponse = argPendScreenInfo.accountApplicationResponse;
            	
            	activationItems = new WICI.ServerActivationItemsMapper().mapToActivationItems( activationItemsFromServer );
            	activationItems.setAccountApplicationResponse(currentAccountApplicationResponse);
            	activationItems.setNewAccountApplicationResponse(newAccountApplicationResponse);
            	
            	console.log(logPrefix + sMethod + "  activationItems.getAccountApplicationStatus()=" + activationItems.getAccountApplicationStatus());
            	
            	appStatus = respAn.getAppStatus(respAn.getWICIResponse(argPendScreenInfo.accountApplicationResponse));
                console.log(logPrefix + sMethod + "app response = " + appStatus );
            }
        }
        
        var applicationResponseData = respAn.getData(activationItems.getAccountApplicationResponse());
        appStatus = respAn.getAppStatus(activationItems.getAccountApplicationResponse());        
        console.log(logPrefix + sMethod + "appStatus = " + appStatus );
        
        var cardType = activationItems.getModel('chooseProductModel').get('productCard');
        console.log(logPrefix + sMethod + " cardType : " + cardType);
        
        // US4414
        if(employerID != "E" && appStatus == "APPROVED" && (cardType == "OMP" || cardType == "OMR" || cardType == "OMC")) {
             new WICI.LoadingIndicatorController().hide();
             messageDialog.homePhone(translator.translateKey("homePhoneInputTitle_one"),translator.translateKey("homePhoneInputTitle_two"), homePhoneconfirmYes, translator.translateKey("homePhoneMessage_Title"));
        } else {
        	printFile();
        }        
        
    }
    //---------------------------------------------------------------------------------------
	// US4164
    function approvedPrintFailedAttempts() {
        return approvedPrintFailedAttempts;
    }
    //---------------------------------------------------------------------------------------
    function testPrintFailedAttempts() {
        return testPrintFailedAttempts;
    }
    //---------------------------------------------------------------------------------------
    function showPrinterSetupAccountProfileDialog(setupPrinterMacAddressCallback) {
        if (app.accountProfileHelper.isAdminProfile()) {
            messageDialog.printerSetup(app.zebraPrinterWrapper.getPrinterMacAddress(), setupPrinterMacAddressCallback);

            return;
        }

        app.accountProfileHelper.showNoPrinterSetupWarning ();
    }
    // US4282 Starts
    function homePhoneconfirmYes(homePhone){
      var sMethod = "homePhoneconfirmYes() :: ";
      console.log(logPrefix + sMethod);
      
      console.log(logPrefix + sMethod + " homePhone : "+homePhone);
      
      console.log(logPrefix + sMethod + " employerID :: " + employerID + " appStatus :: " + appStatus);
        if(argPendScreenInfo) {
            console.log(logPrefix + sMethod + " activationItemsFromServer=" + argPendScreenInfo.activationItemsFromServer);            
            if(argPendScreenInfo.activationItemsFromServer){
            	activationItemsFromServer = argPendScreenInfo.activationItemsFromServer;
            	fromPendScreen = argPendScreenInfo.fromPendScreen;
            }	
            
            console.log(logPrefix + sMethod + " fromPendScreen : " + fromPendScreen);
            if( fromPendScreen ) {
            	var currentAccountApplicationResponse =  respAn.getWICIResponse(argPendScreenInfo.accountApplicationResponse);
            	var newAccountApplicationResponse = argPendScreenInfo.accountApplicationResponse;
            	
            	activationItems = new WICI.ServerActivationItemsMapper().mapToActivationItems( activationItemsFromServer );
            	activationItems.setAccountApplicationResponse(currentAccountApplicationResponse);
            	activationItems.setNewAccountApplicationResponse(newAccountApplicationResponse);
            	
            	console.log(logPrefix + sMethod + "  activationItems.getAccountApplicationStatus()=" + activationItems.getAccountApplicationStatus());
            	
            	appStatus = respAn.getAppStatus(respAn.getWICIResponse(argPendScreenInfo.accountApplicationResponse));
                console.log(logPrefix + sMethod + "app response = " + appStatus );
            }
        }
        
        var applicationResponseData = respAn.getData(activationItems.getAccountApplicationResponse());
        appStatus = respAn.getAppStatus(activationItems.getAccountApplicationResponse());        
        console.log(logPrefix + sMethod + "appStatus = " + appStatus );
        
        var cardType = activationItems.getModel('chooseProductModel').get('productCard');
        console.log(logPrefix + sMethod + " cardType : " + cardType);
            
         // homePhonePersonalInfo = activationItems.getModel('personalData').get('homePhone');
		console.log(logPrefix + sMethod + " homePhonePersonalInfo : " + homePhonePersonalInfo ); 
	   
	        if(homePhone !== null && homePhonePersonalInfo !== null){	      
	            if(homePhone === homePhonePersonalInfo){
	                
	                // check for status and card type then print 
	            	var applicationResponseData = respAn.getData(activationItems.getAccountApplicationResponse());
	                appStatus = respAn.getAppStatus(activationItems.getAccountApplicationResponse());        
    	            console.log(logPrefix + sMethod + "appStatus = " + appStatus );
        
                	var cardType = activationItems.getModel('chooseProductModel').get('productCard');
	                console.log(logPrefix + sMethod + " cardType : " + cardType);
	                
	                if(employerID != "E" && appStatus == "APPROVED" && cardType == "OMC") {
        	             rePrintFile();
              	    } else {
              	         printFile();
              	    }	    
	      }
	      else{
	          homePhoneDisplayAttemptCheck();
	      }
	  }
      
}
// US4282 Ends
};