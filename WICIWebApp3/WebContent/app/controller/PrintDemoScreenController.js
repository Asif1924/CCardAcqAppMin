ensureNamespaceExists();

WICI.PrintDemoScreenController = function(activationItems, argTranslator, argMessageDialog, argPendScreenInfo) {
    var logPrefix = '[WICI.PrintDemoScreenController]::';
    var $screenContainer = $("#PrintDemoScreen");
    var translator;
    var messageDialog;
    var	flow = null;
    var testPrintFailedAttempts = 0;
    var approvedPrintFailedAttempts = 0;
    
    var appStatus = "";
    var tokenValue;
    var respAn = null;
    var activationItemsFromServer = null;
    var fromPendScreen = false;
    var self = this;
    var employerID;
    
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
        tokenField				:	'#printScreenTokenField'
    };

    var model = new WICI.BaseModel({
        name: 'printScreen',
        refs: refs,
        data:[]
    });
    //---------------------------------------------------------------------------------------
    function init( argFlow ) {
        var sMethod = 'init() ';
        console.log(logPrefix + sMethod);

        flow = argFlow;
        messageDialog = argMessageDialog; 	//(AA)Dependency Injection Principle: Allows for proper unit testing
        translator = argTranslator; 		//(AA)Dependency Injection Principle: Allows for proper unit testing

        respAn = new WICI.PollingResponseAnalyzer();        
        tokenValue = respAn.getRetrievalToken(activationItems.getNewAccountApplicationResponse());
        employerID = activationItems.getModel('loginScreen').get('employerID');
        
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
        createView();
        $(refs.tokenField).val(tokenValue);
        $(refs.printButton).hide();
        bindEvents();			
    }
    //---------------------------------------------------------------------------------------
    function syncUserData(){
        var sMethod = 'syncUserData() ';
        console.log(logPrefix + sMethod);
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
        	WICI.BreadcrumbsHelper.assembleBreadcrumbs(6, $screenContainer, activationItems);
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
        
        return (activationItems.getCardFriendlyNameWithoutReg(activationItems.getModel('chooseProductModel').get('productCard')));
    }
    
    function getKeyForApplicationStatus(  ){
        var sMethod = 'getKeyForApplicationStatus() ';
        //console.log(logPrefix + sMethod + " status=" + activationItems.getAccountApplicationStatus());
        if(appStatus==="DECLINED")
        	return "printScreen_ApplicationDeclined";
        
   		return activationItems.getAccountApplicationStatus();     		
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
            fromPendingScreen:fromPendScreen
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
        
        rePrintAttemptCheck();
    }
    //---------------------------------------------------------------------------------------
    function printFileFailure() {
        var sMethod = 'printFileFailure() ';
        console.log(logPrefix + sMethod);
        
        rePrintAttemptCheck();
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
        
        if(appStatus == "APPROVED" && cardType == "OMC") {
        	WICI.BluetothHelper.toggle().done(rePrintFile).fail(alert);
        } else {
        	WICI.BluetothHelper.toggle().done(printFile).fail(alert);
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
};