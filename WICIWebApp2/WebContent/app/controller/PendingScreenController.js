ensureNamespaceExists();
WICI.PendingScreenController = function(activationItems, argTranslator, argMessageDialog, argFlow) {
    var logPrefix = '[WICI.FinancialScreenController]::';
    var screenName = "PendingScreen";
    var screenID = "#" + screenName;
    var $screenContainer = $(screenID);

    var translator;
    var messageDialog;
    var respAn = new WICI.PollingResponseAnalyzer();
    var connectivityController = null;
    var pollingController = null;
    
    var pendingScreenState;

    this.show = show;
    this.init = init;
    this.hide = hide;
    var self = this;
    var flow = argFlow;
    var refs = {
       printButton		:	"#pendingScreen_PrintButton", 
       emailButton		: 	"#pendingScreen_EmailButton",
       attempt			: 	"#pendingScreen_Attempt",
       tokenField		:	"#pendingScreenReferenceField",
       phoneField		:	"#pendingScreenPhoneNumberField",
       checkAppButton	: 	"#checkApplicationStatusButton"
    };
    var model =new WICI.BaseModel({
        name: 'pendingData',
        refs: refs,
        data:[
            {notField:true, name: 'submitFailed_Counter',  value: 1, validation: null }
        ]
    });

    // ---------------------------------------------------------------------------------------

    function init(argFlow,argState) {
        var sMethod = 'init() ';
        console.log(logPrefix + sMethod);
        
        
        pendingScreenState = argState;
        this.model = model;
        flow = argFlow;
        translator = argTranslator; 
        messageDialog = argMessageDialog; 
        createView();
        bindEvents();
        
    }

    // ---------------------------------------------------------------------------------------

    function show() {
        $screenContainer.show();
        translator.run(screenName);
        app.selectorReduceHelper.init();
    }

    // ---------------------------------------------------------------------------------------

    function hide() {
        $screenContainer.hide();
    }

    // ---------------------------------------------------------------------------------------

    function createView() {
        $screenContainer.empty();
        assembleNavigationBarAtTop();
        assemblePageHTML($screenContainer, "#WICI"+screenName+"-template");
    }

    // ---------------------------------------------------------------------------------------

    function assembleNavigationBarAtTop() {
        $("#pageHeader-template").template("pageHeader");
        $.tmpl("pageHeader", {
            "logo_En" : translator.currentLanguageEnglish(),
            "settingsButtonId" : "PendingScreen_SettingsButton"
        }).appendTo(screenID);
    }

    // ---------------------------------------------------------------------------------------
    function assemblePageHTML($element, templateName) {
        $(templateName).template("pendingScreen");
        cardTypeGlobal = activationItems.getModel('chooseProductModel').get('productCard')
        cardNameGlobal = activationItems.getCardFriendlyName(cardTypeGlobal);
        $.tmpl("pendingScreen",
            {
        		"pendingScreenState": pendingScreenState,
                "cardName": cardNameGlobal,  
                "token": respAn.getRetrievalToken(activationItems.getAccountApplicationResponse()),
                "attempt": model.get('submitFailed_Counter')
            }
        ).appendTo($element);
    }
   
    // ---------------------------------------------------------------------------------------
    function bindEvents() {
        var sMethod = 'bindEvents() ';
        console.log(logPrefix + sMethod);

        $(refs.printButton).click(function() {
            print(respAn.getRetrievalToken(activationItems.getAccountApplicationResponse()));
        });

        $(refs.emailButton).click(function() {
            self.hide();
            app.flowController.startApplication();
        });
        
        $(refs.checkAppButton).click(function(){
        	console.log(logPrefix + sMethod + $(refs.tokenField).val());
        	console.log(logPrefix + sMethod + $(refs.phoneField).val());
        	retrievePendingApplication($(refs.tokenField).val(), $(refs.phoneField).val());
        })

    }
    
    function retrievePendingApplication( argToken, argPhoneNumber ){
    	
    	new WICI.LoadingIndicatorController().show();
    	
        connectivityController = new WICI.ConnectivityController(new WICI.ConnectionStatus(), messageDialog, translator, WICI.AppConfig.ConnectivityConfig);
        connectivityController.init();

        var requestParams = {
        		retrievalToken	:	argToken,
               	phone			:	argPhoneNumber,
               	action			:	"retrievePend",           	
            };
        pollingController = new WICI.PollingController(connectivityController, requestParams, pollResponseReceived, pollFailed).startPolling();
    	
    }

    function pollResponseReceived( argResponse ){
        var sMethod = 'pollResponseReceived() ';
        console.log(logPrefix + sMethod );
        if(argResponse)
        	console.log(logPrefix + sMethod + " isError:" + argResponse.error+ " msg:"+argResponse.msg+ " data: "+argResponse.data);
        
        if( respAn.isApprovedResponse(argResponse) || respAn.isDeclinedResponse(argResponse) )
        	successPendPoll(argResponse);
        else if( respAn.isPendingResponse(argResponse) )
        	pollingController.immediatePoll();
        else
        	failedPendPoll(argResponse);
    }

    function pollFailed(argResponse){
        var sMethod = 'pollFailed() ';
        console.log(logPrefix + sMethod );
        if(argResponse)
        	console.log(logPrefix + sMethod + " isError:" + argResponse.error+ " msg:"+argResponse.msg+ " data: "+argResponse.data);
        failedPendPoll(argResponse);
    }    
    
    // ---------------------------------------------------------------------------------------
    function print (token) {
         WICI.TokenPrinterHelper.printToken(token).then(function() {
            self.hide();
            app.flowController.startApplication();
         }, function() {
            messageDialog.error('printToken_error', 'errorDialog_defaultTitle', $.noop);
         });
    }

    function successPendPoll( argResponse ) {
        var sMethod = 'successPendPoll() ';
        console.log(logPrefix + sMethod);

        new WICI.LoadingIndicatorController().hide();
		
    	activationItems.setAccountApplicationResponse(respAn.getWICIResponse(argResponse));

    }
    // ---------------------------------------------------------------------------------------
    function failedPendPoll(argResponse) {
        var sMethod = 'failedPendPoll() ';
        console.log(logPrefix + sMethod);

        new WICI.LoadingIndicatorController().hide();

       	messageDialog.error(translator.translateKey("summary_SubmitApplicationError"));
       	
    }
    

 };
