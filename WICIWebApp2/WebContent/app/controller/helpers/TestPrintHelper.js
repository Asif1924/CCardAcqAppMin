	ensureNamespaceExists();

WICI.TestPrintHelper = function(translate, messageDialog) {
    var logPrefix = ' ---- [WICI.TestPrintHelper]::';
    var instance = {};
    var dialogViewHelper = new WICI.DialogViewHelper();
    var testPrintFailedAttempts = 0;
    var timeout;
    var loadingIndicator = new WICI.LoadingIndicatorController;
    var indicatorHideTimeout;

    function clearLoadingTimeout () {
        indicatorHideTimeout = null;
    }
    //---------------------------------------------------------------------------------------
    function testPrintClick()
    {
        var sMethod = 'testPrintClick() ';
        console.log(logPrefix + sMethod);

        testPrintFailedAttempts = 0;
        testPrintYes();
    }

	function testPrintYes () {
	   indicatorHideTimeout = setTimeout(function(){ 
            printTestFileFailure();
        }, WICI.AppConfig.TestPrintConfig.timeout);

        loadingIndicator.show();
	    app.zebraPrinterWrapper.testPrint(printTestFileSuccess, printTestFileFailure);
	}

	//---------------------------------------------------------------------------------------
    function printTestFileSuccess(result) {
        var sMethod = 'printTestFileSuccess() ';
        console.log(logPrefix + sMethod);
        clearTimeout(indicatorHideTimeout);
        loadingIndicator.hide();
        var dialog = messageDialog.confirm(translate.translateKey("testPrintStatusMsg"), $.noop, testPrintConfirmationNo, translate.translateKey("printResponseStatusTitle"));
        
        (new WICI.DialogViewHelper()).startAutoCloseTimer(dialog, clearLoadingTimeout);

    }
    //---------------------------------------------------------------------------------------
    function printTestFileFailure(error) {
        var sMethod = 'printTestFileFailure() ';
        console.log(logPrefix + sMethod);
        clearTimeout(indicatorHideTimeout);
        loadingIndicator.hide();
        var dialog = messageDialog.confirm(translate.translateKey("testPrintStatusMsg"), $.noop, testPrintConfirmationNo, translate.translateKey("printResponseStatusTitle"));
       (new WICI.DialogViewHelper()).startAutoCloseTimer(dialog, clearLoadingTimeout);

    }
    //---------------------------------------------------------------------------------------
    function testPrintConfirmationNo () {
        var sMethod = 'printConfirmationNo() ';
        console.log(logPrefix + sMethod);

        console.log(logPrefix + sMethod + "::testPrintFailedAttempts::" + testPrintFailedAttempts);

		if (testPrintFailedAttempts > WICI.AppConfig.TestPrintConfig.MAX_TEST_PRINT_RETRIES - 1) {
			testPrintFailedAttempts = 0;
//    	        if (app.accountProfileHelper.isAdminProfile()) {
//    	            messageDialog.printerSetup(app.zebraPrinterWrapper.getPrinterMacAddress(), setupPrinterMacAddressCallback);
//    	        } else {
//    	        	app.accountProfileHelper.showNoPrinterSetupWarning();
//    	        }

	        app.accountProfileHelper.showNoPrinterSetupWarning();
		} else {
			console.log(logPrefix + sMethod + "::FALSE::");
			++testPrintFailedAttempts;
            WICI.BluetothHelper.toggle().done(testPrintYes).fail(alert);
            indicatorHideTimeout = setTimeout(function(){ 
                printTestFileFailure();
            }, WICI.AppConfig.TestPrintConfig.timeout);
		}
    }
    //---------------------------------------------------------------------------------------
    function printerSetupClick()
    {
        var sMethod = 'printerSetupClick() ';
        console.log(logPrefix + sMethod);
        try{
            messageDialog.printerSetup(app.zebraPrinterWrapper.getPrinterMacAddress(), setupPrinterMacAddress);

        } catch (err){
            console.log(logPrefix + sMethod + "ERROR: " + err);
        }
    }
//---------------------------------------------------------------------------------------
    function setupPrinterMacAddress (macAddress) {
        var sMethod = 'setupPrinterMacAddress() ';
        console.log(logPrefix + sMethod);

        app.zebraPrinterWrapper.setPrinterMacAddress(macAddress, storePrinterMacAddressCallback, storePrinterMacAddressCallback);
    }
    //---------------------------------------------------------------------------------------
    function storePrinterMacAddressCallback () {
        var sMethod = 'storePrinterMacAddressCallback() ';
        console.log(logPrefix + sMethod);

        messageDialog.confirm(translate.translateKey("confirmDialogPritTest_Message"), testPrintYes, $.noop);
    }

    instance.testPrint = testPrintClick;
    instance.setup = printerSetupClick;
    instance.setMacAddressForDebug = setupPrinterMacAddress;

    return instance;
};
