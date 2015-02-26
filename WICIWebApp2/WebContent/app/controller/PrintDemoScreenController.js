ensureNamespaceExists();

WICI.PrintDemoScreenController = function(activationItems, argTranslator, argMessageDialog) {
    var logPrefix = '[WICI.PrintDemoScreenController]::';
    var $screenContainer = $("#PrintDemoScreen");
    var translator;
    var messageDialog;
    var	flow = null;
    var testPrintFailedAttempts = 0;

    this.show = show;
    this.hide = hide;
    this.init = init;

    this.syncUserData = syncUserData;

    var refs = {
        prevBtn     			: 	'#printScreen_PrevButton',
        startNewApplicationBtn  : 	'#print_StartNewApplicationButton',
        logOutBtn               : 	'#print_LogOutButton',
        printButton             :   '#printScreen_PrintButton'
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

        testPrintFailedAttempts = 0;

        createView();

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
        $screenContainer.hide();
    }
    //---------------------------------------------------------------------------------------
    function createView() {
        $screenContainer.empty();
        assembleNavigationBarAtTop();
        WICI.BreadcrumbsHelper.assembleBreadcrumbs(6, $screenContainer, activationItems);
        assemblePageHTML($screenContainer, "#WICIPrintDemoScreen-template");
        $screenContainer.addClass("breadcrumbPadding");
    }

    //---------------------------------------------------------------------------------------
    function assembleNavigationBarAtTop() {
        $("#pageHeader-template").template("pageHeader");
        $.tmpl("pageHeader", {
            "logo_En" : translator.currentLanguageEnglish(),
            //"previousButtonId" 		:    refs.prevBtn.replace('#',''),
            "settingsButtonId" 		: "printScreen_SettingsButton"
            //"nextButtonId" :        "summaryScreen_NextButton"
        }).appendTo("#PrintDemoScreen");

        $('#printScreen_SettingsButton').addClass('rightPosition');
    }

    //---------------------------------------------------------------------------------------
    function assemblePageHTML($element, templateName) {
        $(templateName).template("printDemoScreenPage");
        $.tmpl("printDemoScreenPage", {
            activationItems: activationItems
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
            app.flowController.logOutClick();
        });

        $(refs.printButton).click(function() {
            var sMethod = 'printButton_onClick() ';
            console.log(logPrefix + sMethod);

            // Print response again
            WICI.BluetothHelper.toggle().done(printFile).fail(alert);
        });
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

        if (!app.zebraPrinterWrapper.verifyPrinterMacAddress() ) {
            showPrinterSetupAccountProfileDialog (setupPrinterMacAddress);

            return;
        }

        try
        {
            new WICI.LoadingIndicatorController().show();

            // Get application server response
            var respAn = new WICI.PollingResponseAnalyzer();
            //var applicationResponse = activationItems.getAccountApplicationResponse().data;
            var applicationResponse = respAn.getWICIResponse(activationItems.getAccountApplicationResponse()).data;
            console.log(logPrefix + sMethod + "app response = "+applicationResponse.appStatus);
            //messageDialog.info(applicationResponse.data, "Print Info");
            
            app.zebraPrinterWrapper.printFile(
                activationItems,
                applicationResponse,
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
        var sMethod = 'printConfirmationNo() ';
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

        new WICI.LoadingIndicatorController().hide();
        messageDialog.confirm(translator.translateKey("printResponseStatusMsg"), printConfirmationYes, printConfirmationNo, translator.translateKey("printResponseStatusTitle"));
    }
    //---------------------------------------------------------------------------------------
    function printFileFailure() {
        var sMethod = 'printFileFailure() ';
        console.log(logPrefix + sMethod);

        new WICI.LoadingIndicatorController().hide();
        messageDialog.confirm(translator.translateKey("printResponseStatusMsg"), printConfirmationYes, printConfirmationNo, translator.translateKey("printResponseStatusTitle"));
    }
    //---------------------------------------------------------------------------------------
    function printConfirmationYes (){
        var sMethod = 'printConfirmationYes() ';
        console.log(logPrefix + sMethod);
    }
    //---------------------------------------------------------------------------------------
    function printConfirmationNo (){
        var sMethod = 'printConfirmationNo() ';
        console.log(logPrefix + sMethod);

        // Print response again
        WICI.BluetothHelper.toggle().done(printFile).fail(alert);
    }

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