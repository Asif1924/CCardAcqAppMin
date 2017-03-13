ensureNamespaceExists();
WICI.PendingScreenController = function(activationItems, argTranslator, argMessageDialog) {
    var logPrefix = '[WICI.PendingScreenController]::';
    var screenName = "PendingScreen";
    
    var sMethod = 'constructor() ';
    console.log(logPrefix + sMethod);    
    
    var screenID = "#" + screenName;
    var $screenContainer = $(screenID);
    this.isShown = false;
    
    var retrievalTokenRefNum="";
    var retrievalPhoneNumber = "";
    var responseObject;
    var attemptCount = 0;
    
	var pollingConfig = {
		pollDelay		: WICI.AppConfig.PendingFeature.Interval,
		pollMaxTime		: (WICI.AppConfig.PendingFeature.MaxTries * WICI.AppConfig.PendingFeature.Interval )
	};
	
    var translator;
    var messageDialog;
    var respAn = new WICI.PollingResponseAnalyzer();
    var connectivityController = null;
    var pollingController = null;
    
    var pendingScreenState;    

    this.show = show;
    this.init = init;
    this.hide = hide;
    this.destroy = destroy;
    
    var self = this;
    var flow = null;
    
    var refs = {
    	printButton		:	"#pendingScreen_PrintButton", 
    	emailButton		: 	"#pendingScreen_EmailButton",
    	attempt			: 	"#pendingScreen_Attempt",
    	tokenField		:	"#pendingScreenReferenceField",
    	phoneField		:	"#pendingScreenPhoneNumberField",
    	checkAppButton	: 	"#checkApplicationStatusButton",
    	staticMessage	:	"#pendingScreen_StaticStatusMessage",
    	dynamicMessage	:	"#pendingScreen_DynamicStatusMessage",
    	pollDelay		:	"#pendingScreen_pollDelay",
    	maxAttempts		:	"#pendingScreen_maxAttempts",
    	attemptNumber	:	"#pendingScreen_AttemptNumber"
    };
    var model =new WICI.BaseModel({
        name: 'pendingData',
        refs: refs,
        data:[
            {notField:true, name: 'submitFailed_Counter',  value: 1, validation: null }
        ]
    });

    // ---------------------------------------------------------------------------------------

    function init(argFlow, argState, argRetrievalParams, argResponse) {
        var sMethod = 'init() ';
        console.log(logPrefix + sMethod + " argState = " + argState + ", argRetrievalParams = " + argRetrievalParams + ", argResponse = " + argResponse);
        this.isShown = false;
        
        pendingScreenState = argState;
        responseObject = argResponse;
        attemptCount = 1;
        if(pendingScreenState==="RETRIEVEPEND_START"){
        	retrievalTokenRefNum = argRetrievalParams.retrievalToken.toUpperCase();
        	retrievalPhoneNumber = argRetrievalParams.phoneNumber;
        	
        }
        
        if(pendingScreenState==="INSESSION"){        	        	
        	retrievalTokenRefNum = respAn.getRetrievalToken(argResponse).toUpperCase();
        	retrievalPhoneNumber = activationItems.getModel("personalData").get("homePhone");
        	activationItems.setAccountApplicationResponse(argResponse);
        	activationItems.setNewAccountApplicationResponse(argResponse);
        	console.log(logPrefix + sMethod + "INSESSION Retrieval Data=" + retrievalTokenRefNum + "," + retrievalPhoneNumber);
        }
        
        flow = argFlow;
        translator = argTranslator; 
        messageDialog = argMessageDialog; 
        createView();
        bindEvents();
        
    }

    this.clearFields = function(){
    	$(refs.tokenField).val("");
    	$(refs.phoneField).val("");
    }
    
    function show() {    	
        var sMethod = 'show() ';
        console.log(logPrefix + sMethod + "pendingScreenState = " + pendingScreenState);
        
        $screenContainer.show();        
        translator.run(screenName);
        app.selectorReduceHelper.init();
        this.isShown=true;
        
        $(refs.staticMessage).show();
        $(refs.dynamicMessage).hide();
        
        if(pendingScreenState==="INSESSION" || pendingScreenState==="RETRIEVEPEND_START"){
            $(refs.staticMessage).hide();
            $(refs.dynamicMessage).show();
            var pollDelayDisplay = pollingConfig.pollDelay/1000;
            $(refs.pollDelay).text(pollDelayDisplay);
            $(refs.maxAttempts).text(WICI.AppConfig.PendingFeature.MaxTries);
        	retrievePendingApplication(retrievalTokenRefNum,retrievalPhoneNumber);        	
        }
    }

    function hide() {    	
        var sMethod = 'hide() ';
        console.log(logPrefix + sMethod)

        $(".pageHeader").remove();        
        $screenContainer.hide();        
        this.isShown=false;
    }
    
    function destroy(){
        var sMethod = 'destroy() ';
        console.log(logPrefix + sMethod)

        //UAT Defects #44 – Polling issue (critical) 
        //pollingController.stopPolling();
        pollingController.destroyPolling();
        
    	hide();
    	app.navigationController.adhocPendingScreen = null;
    }

    // ---------------------------------------------------------------------------------------

    function createView() {
        var sMethod = 'createView() ';
        console.log(logPrefix + sMethod)

        $screenContainer.empty();
        assembleNavigationBarAtTop();
        
        assemblePageHTML($screenContainer, "#WICI"+screenName+"-template");

        $screenContainer.addClass("breadcrumbPadding");
        $screenContainer.addClass("pageHeaderPadding");
    }

    // ---------------------------------------------------------------------------------------

    function assembleNavigationBarAtTop() {
        $("#pageHeader-template").template("pageHeader");
        $.tmpl("pageHeader", {
            "logo_En" : translator.currentLanguageEnglish(),
            "settingsButtonId" : "PendingScreen_SettingsButton"
        }).appendTo(screenID);
        $('#PendingScreen_SettingsButton').addClass('rightPosition');
    }
    
    // ---------------------------------------------------------------------------------------
    function assemblePageHTML($element, templateName) {
        $(templateName).template("pendingScreen");
        cardTypeGlobal = activationItems.getModel('chooseProductModel').get('productCard')
        cardNameGlobal = "chooseProduct_NoSpecificCard";
        if(cardTypeGlobal!==null)
        	cardNameGlobal = activationItems.getCardFriendlyName(cardTypeGlobal);        
        
        $.tmpl("pendingScreen",
            {
        		"pendingScreenState": pendingScreenState,
                "cardName": cardNameGlobal,  
                "token": retrievalTokenRefNum,
                "attempt": model.get('submitFailed_Counter'),
                activationItems: activationItems
            }
        ).appendTo($element);
    }

    // US4084
    function addProgComp() {
    	$('#progress').parent().addClass("marginTopPlus15");
        $('#completed').parent().addClass("marginTopPlus15");
        $('#completed').parent().addClass("hidden");
        $('#progress').parent().removeClass("hidden");
    }
    
    function bindEvents() {
        var sMethod = 'bindEvents() ';
        console.log(logPrefix + sMethod);
        
        // US4084
        var pollingInterval = WICI.AppConfig.PendingFeature.Interval;
        
        var pbar = jQMProgressBar('progressbar')
        .setOuterTheme('b')
        .setInnerTheme('e')
        .isMini(true)
        .setMax(10)
        .setStartFrom(0)
        .setInterval(pollingInterval)
        .showCounter(true)
        .build()
        .run();
	        
        addProgComp();
        
        $(document).on('complete', '#progressbar', function () {
			$('#progress').parent().addClass("hidden");
	        $('#completed').parent().removeClass("hidden");
		});

        $(refs.printButton).click(function() {
        	printToken(retrievalTokenRefNum);
        });

        $(refs.emailButton).click(function() {
            self.hide();
            app.flowController.startApplication();
        });
        
        $(refs.checkAppButton).click(function(){
        	console.log(logPrefix + sMethod + $(refs.tokenField).val().toUpperCase());
        	console.log(logPrefix + sMethod + $(refs.phoneField).val());
        	retrievePendingApplication( $(refs.tokenField).val().toUpperCase(), $(refs.phoneField).val());
        })
        
        flow.bindSettingsButtonEvent();
    }
    
    this.updateAttemptNumber = updateAttemptNumber;
    function updateAttemptNumber( argAttemptNumber ){
    	$(refs.attemptNumber).text(argAttemptNumber);
    	//pulse();
    }
    
    function pulse(){
    	$(refs.dynamicMessage).fadeToggle(100);
    }
    
    function retrievePendingApplication( argToken, argPhoneNumber ){
        var sMethod = 'retrievePendingApplication() ';
        console.log(logPrefix + sMethod);
        
        console.log(logPrefix + sMethod + " attempting to retrieve pending application for "+argToken+","+argPhoneNumber);
        
        // US4282
        activationItems.setHomePhone(argPhoneNumber);
        console.log(logPrefix + sMethod + " pendingScreenPhoneNumber :: " + activationItems.getHomePhone());
    	
    	if( pendingScreenState==="RETRIEVEPEND" ){

    		// US3436 
    		// In retrieving application, page should not move to Pending screen.
    		// Based on response it should show message or go to Print screen
    		
    		// New Code Start  
    		new WICI.LoadingIndicatorController().show();
    		connectivityController = new WICI.ConnectivityController(new WICI.ConnectionStatus(), messageDialog, translator, WICI.AppConfig.ConnectivityConfig);
    		connectivityController.init();    		
    	            var requestParams = {
    	            		retrievalToken	:	retrievalTokenRefNum || argToken,
    	                   	phone			:	argPhoneNumber,
    	                   	action			:	"retrievePend",    
    	            };
	         pollingController = new WICI.PollingController(connectivityController, requestParams, singlepollResponseReceived, pollFailed, "RETRIEVEPEND",$.noop,null);
    	     pollingController.singlePoll();
    		// New Code End
    		
    		// Old Code Start
    	     /*app.navigationController.adhocPendingScreen = new WICI.PendingScreenController(activationItems, translator, messageDialog);
 	    	app.navigationController.adhocPendingScreen.init(flow,"RETRIEVEPEND_START",{ retrievalToken:retrievalTokenRefNum || argToken, phoneNumber:argPhoneNumber},responseObject);
 	    	app.navigationController.adhocPendingScreen.show();*/	
    		// Old Code End    		    			    
    	}
    	
    	if( pendingScreenState==="RETRIEVEPEND_START" || pendingScreenState==="INSESSION") {
    		
    		//new WICI.LoadingIndicatorController().show();
    		connectivityController = new WICI.ConnectivityController(new WICI.ConnectionStatus(), messageDialog, translator, WICI.AppConfig.ConnectivityConfig);
    		connectivityController.init();

    		var requestParams = {
    			retrievalToken	:	retrievalTokenRefNum || argToken,
               	phone			:	argPhoneNumber,
               	action			:	"retrievePend",           	
            };
    		pollingController = new WICI.PollingController(connectivityController, requestParams, pollResponseReceived, pollFailed, "RETRIEVEPEND", pollTriggered, pollingConfig);
    		pollingController.startPolling();    	
    	}	
    }

    function pollTriggered( argResponse ){
        var sMethod = 'pollTriggered() ';
        console.log(logPrefix + sMethod );
        attemptCount++
    	updateAttemptNumber(attemptCount);
    	console.log(logPrefix + sMethod + "attempCount=" + attemptCount);           
    }
    
    // US3436 Single Poll - Start
    function singlepollResponseReceived( argResponse ){
        var sMethod = 'singlepollResponseReceived() ';
        console.log(logPrefix + sMethod );
        if(argResponse)
        	console.log(logPrefix + sMethod + " isError:" + argResponse.error+ " msg:"+argResponse.msg+ " data: "+argResponse.data);        
        if( respAn.isApprovedResponse(argResponse) || respAn.isDeclinedResponse(argResponse) )
        	successPendPoll(argResponse);
        else if( respAn.isPendingResponse(argResponse) )
        {
        	new WICI.LoadingIndicatorController().hide();
        	// Pend dialog
        	messageDialog.info(translator.translateKey("pendingScreen_ApplicationPending"));         	
        }
        else
        	failedPendPoll(argResponse);
    }
    // US3436 Single Poll - End
    
    function pollResponseReceived( argResponse ){
        var sMethod = 'pollResponseReceived() ';
        console.log(logPrefix + sMethod );
        if(argResponse)
        	console.log(logPrefix + sMethod + " isError:" + argResponse.error+ " msg:"+argResponse.msg+ " data: "+argResponse.data);
        
        if( respAn.isApprovedResponse(argResponse) || respAn.isDeclinedResponse(argResponse) )
        	successPendPoll(argResponse);
        else if( respAn.isPendingResponse(argResponse) )
        {  
        	updateAttemptNumber(attemptCount++);
        	console.log(logPrefix + sMethod + "attempCount=" + attemptCount);        	
        	pollingController.immediatePoll();
        }
        else
        	failedPendPoll(argResponse);
    }

    function pollFailed(argResponse){
        var sMethod = 'pollFailed() ';
        console.log(logPrefix + sMethod );
        // old code begin -  before  UAT #44 - Re poll
        	if(argResponse)
    	     	console.log(logPrefix + sMethod + " isError:" + argResponse.error+ " msg:"+argResponse.msg+ " data: "+argResponse.data);
        	failedPendPoll(argResponse);
        //old code end
       
       //New code begin 
       // if(argResponse)
       // 	{
       // 	console.log(logPrefix + sMethod + " isError:" + argResponse.error+ " msg:"+argResponse.msg+ " data: "+argResponse.data);
      //  failedPendPoll(argResponse);
       // 	}
       //new code end 
        
        
    }    
    
    // ---------------------------------------------------------------------------------------
    function setupPrinterMacAddress (macAddress) {
        app.zebraPrinterWrapper.setPrinterMacAddress(macAddress, storePrinterMacAddressCallback, storePrinterMacAddressCallback);
    }
    
    function showPrinterSetupAccountProfileDialog(setupPrinterMacAddressCallback) {
        if (app.accountProfileHelper.isAdminProfile()) {
            messageDialog.printerSetup(app.zebraPrinterWrapper.getPrinterMacAddress(), setupPrinterMacAddressCallback);

            return;
        }

        app.accountProfileHelper.showNoPrinterSetupWarning ();
    }
    
    function printTokenSuccess(){    	
    	new WICI.LoadingIndicatorController().hide();    	
    	messageDialog.confirm(translator.translateKey("printResponseStatusMsg"), printTokenConfirmationYes, printTokenConfirmationNo, translator.translateKey("printResponseStatusTitle"));        
    }
    
    function printTokenFailed(){
    	new WICI.LoadingIndicatorController().hide();
    	messageDialog.error(translator.translateKey("pendingScreen_PrintToken_Error"), translator.translateKey("errorDialog_defaultTitle"), $.noop);
    }
    
    function printToken (argToken) {
        var sMethod = 'printToken() ';
        console.log(logPrefix + sMethod + " token=" + argToken + ", retrievalTokenRefNum=" + retrievalTokenRefNum);
        
    	var isDevice = new WICI.DeviceDetectionHelper().any();
    	if(isDevice){    	
            if (!app.zebraPrinterWrapper.verifyPrinterMacAddress() ) {
                showPrinterSetupAccountProfileDialog (setupPrinterMacAddress);
                return;
            }
            try{
                new WICI.LoadingIndicatorController().show();
                app.zebraPrinterWrapper.printToken( retrievalTokenRefNum || argToken, printTokenSuccess, printTokenFailed);
                //WICI.TokenPrinterHelper.printToken(token).then(printTokenSuccess()).fail(printTokenFailed());
            }
            catch( exception ){
                new WICI.LoadingIndicatorController().hide();
            }
    	}else{
    		messageDialog.info("Token = " + retrievalTokenRefNum || argToken, "Web Printer",printTokenSuccess);
    		printTokenSuccess();    		
    	}
    }

    function printTokenConfirmationYes (){
        var sMethod = 'printTokenConfirmationYes() ';
        console.log(logPrefix + sMethod);
        self.hide();
        app.flowController.startApplication();
    }

    function printTokenConfirmationNo (argToken){
        var sMethod = 'printTokenConfirmationNo() ';
        console.log(logPrefix + sMethod);

        //new WICI.BluetoothToggler().toggle(printToken,printTokenSuccess); //old code UAT #89 March31st 
        //WICI.BluetothHelper.toggle().done(printToken);        
        //WICI.BluetothHelper.toggle().fail(printTokenSuccess);                
        WICI.BluetothHelper.toggle().done(printToken).fail(printTokenSuccess); //new code
    }    
    
    function successPendPoll( argResponse ) {
        var sMethod = 'successPendPoll() ';
        console.log(logPrefix + sMethod);
        
        new WICI.LoadingIndicatorController().hide();
        // UAT Defect #103 - Start
		hide();
		// End
    	activationItems.setAccountApplicationResponse(respAn.getWICIResponse(argResponse));
    	activationItems.setNewAccountApplicationResponse(argResponse);
    	// US3436
    	// Here redirect screen happens, based on response.   	     	    
    	/*if(respAn.isPendingResponse( argResponse )){    		
    		messageDialog.info(translator.translateKey("pendingScreen_ApplicationPending"));    		
    	} else if( respAn.isApprovedResponse(argResponse) || respAn.isDeclinedResponse(argResponse) ){    		
    		var pendScreenInfo = { fromPendScreen:true,activationItemsFromServer:respAn.getActivationItems(argResponse),accountApplicationResponse:argResponse };
    	    app.navigationController.adhocPrintDemoScreen = new WICI.PrintDemoScreenController(activationItems, argTranslator, argMessageDialog, pendScreenInfo);
    	    app.navigationController.adhocPrintDemoScreen.init(flow);
    	    app.navigationController.adhocPrintDemoScreen.show();   			
    	}*/
    	    	
    	var pendScreenInfo = { fromPendScreen:true,activationItemsFromServer:respAn.getActivationItems(argResponse),accountApplicationResponse:argResponse };
    	app.navigationController.adhocPrintDemoScreen = new WICI.PrintDemoScreenController(activationItems, argTranslator, argMessageDialog, pendScreenInfo);
    	app.navigationController.adhocPrintDemoScreen.init(flow);
    	app.navigationController.adhocPrintDemoScreen.show();
    	return;
    }

    function failedPendPoll(argResponse) {
        var sMethod = 'failedPendPoll() ';
        console.log(logPrefix + sMethod);
        // US4084
        setTimeout(function(){
			var pbar = jQMProgressBar('progressbar')
	        .setOuterTheme('b')
	        .setInnerTheme('e')
	        .isMini(true)
	        .setValue(10)
	        .build()
	        .run();
        },100);
        
        addProgComp();
        
        $(document).on('complete', '#progressbar', function () {
			$('#progress').parent().addClass("hidden");
	        $('#completed').parent().removeClass("hidden");
		});

        var errorKey = "pendingScreen_RetrieveFailed";
        new WICI.LoadingIndicatorController().hide();
       	messageDialog.error(translator.translateKey(errorKey));
    }
    

 };
