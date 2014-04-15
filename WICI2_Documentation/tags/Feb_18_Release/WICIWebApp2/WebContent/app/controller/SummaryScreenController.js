ensureNamespaceExists();

WICI.SummaryScreenController = function(activationItems, argTranslator, argMessageDialog) {
    var logPrefix = '[WICI.SummaryScreenController]::';
    var $screenContainer = $('#SummaryScreen');
    var screenContainerTemplateId = '#WICISummaryScreen-template';
    var translator = null; 
    var messageDialog = null; 
    
    var connectivityController = null;
    
    var intervalId = null; 

    this.show = show;
    this.init = init;
    this.hide = hide;
    
    var	flow = null;
    
    var refs = {
        submitBtn   			:   '#summary_SubmitButton',
        prevBtn     			:   '#summaryScreen_PrevButton',
        //nextBtn				:	"#summaryScreen_NextButton",
        summaryStatusNotReady	:	'#summary_Status_NotReady',
        summaryStatusReady		:	'#summary_Status_Ready',
        birthDate_id_1	 		: 	'#birthDate_id_1',
        birthDate_id_2			:	'#birthDate_id_2',
        signDate_id_1			: 	'#signDate_id_1',
        signDate_id_2			:	'#signDate_id_2',
        signDate_id_3			:	'#signDate_id_3',
        signDate_id_4			:	'#signDate_id_4',
        housingpayment			:	'#summary_housingpayment',
        grossIncome				:	'#summary_grossIncome',
        nameTitle				:	'#summary_nameTitle'
    };
    
    var model =new WICI.BaseModel({
    	name: 'summaryData',
    	refs: refs, 
        data:[
                
                {notField:true, name: 'submitFailed_Counter',  value: null, validation: null },
             ]
    });    
    //---------------------------------------------------------------------------------------
    function init( argFlow ) {
        var sMethod = 'init() ';
        console.log(logPrefix + sMethod);
        
        //app.isAliveService.start();
        
        flow = argFlow;        
        messageDialog = argMessageDialog; 	//(AA)Dependency Injection Principle: Allows for proper unit testing
        translator = argTranslator; 		//(AA)Dependency Injection Principle: Allows for proper unit testing
        
        createView();        
        bindEvents();
        
        var currentModel = activationItems.getModel(model.name);
        
		if (!currentModel) {
            activationItems.addModel(model);
        } else {
            model = currentModel;
        }
        
        connectivityController = new WICI.ConnectivityController(new WICI.ConnectionStatus(), messageDialog, translator, WICI.AppConfig.ConnectivityConfig);
        connectivityController.init();
        
        //updateSubmitBtnState();
        permanentlyEnableSubmitButton();
        
        $(refs.grossIncome).html(activationItems.getFormatedCurrency(activationItems.getModel('financialData').get('grossIncome')));
				
		$(refs.housingpayment).html(activationItems.getFormatedCurrency(activationItems.getModel('personalData2_Address').get('housingpayment')));
		
    	$(refs.nameTitle).html(activationItems.getNameTitleByValue(activationItems.getModel('personalData').get('title')));
		
    }

    function permanentlyEnableSubmitButton(){
		$(refs.submitBtn).addClass('greenflat');
		$(refs.submitBtn).removeClass('grayflat');

		$(refs.summaryStatusReady).show();
		$(refs.summaryStatusNotReady).hide();
    }    
    //---------------------------------------------------------------------------------------
	function updateSubmitBtnState() {
		var sMethod = 'updateSubmitBtnState() ';
		console.log(logPrefix + sMethod);
		
		$(refs.summaryStatusNotReady).show();
		$(refs.summaryStatusReady).hide();
		
		clearInterval(intervalId);
		
		intervalId = setInterval(function() {
			console.log(logPrefix + sMethod + " isAlive:" + app.isAliveService.isAlive());

			if(!app.isAliveService.isAlive()){	
				$(refs.submitBtn).addClass('grayflat');
				$(refs.submitBtn).removeClass('greenflat');
				
				$(refs.summaryStatusReady).hide();
				$(refs.summaryStatusNotReady).show();
			}
			else{
				$(refs.submitBtn).addClass('greenflat');
				$(refs.submitBtn).removeClass('grayflat');
				
				$(refs.summaryStatusReady).show();
				$(refs.summaryStatusNotReady).hide();
			}
			

		}, WICI.AppConfig.ConnectivityConfig.SUBMIT_BTN_CHECK_INTERVAL);
	}

    // ---------------------------------------------------------------------------------------
    function show() {
        $screenContainer.show();
        translator.run('SummaryScreen');
        
        showBirthDatePersonalData();
        showBirthDateSupCard();
        showSignDateSignModel();
    }
    //---------------------------------------------------------------------------------------
    function hide() {
		var sMethod = 'hide() ';
		console.log(logPrefix + sMethod);

		app.isAliveService.stop();
		clearInterval(intervalId);
		
        $screenContainer.hide();
    }
    //---------------------------------------------------------------------------------------
    function createView() {
        $screenContainer.empty();
        assembleNavigationBarAtTop();
        assemblePageHTML($screenContainer, screenContainerTemplateId);
        $screenContainer.addClass("breadcrumbPadding");
    }
    //---------------------------------------------------------------------------------------
	function assembleNavigationBarAtTop() {
        $("#pageHeader-template").template("pageHeader");
        $.tmpl("pageHeader", {
        	"logo_En" : translator.currentLanguageEnglish(),
            "previousButtonId" :    refs.prevBtn.replace('#',''),
            "settingsButtonId" 		: "summaryScreen_SettingsButton"
            //"nextButtonId" :        refs.nextBtn.replace('#','')    
        }).appendTo("#SummaryScreen");
        
        $('#summaryScreen_SettingsButton').addClass('rightPosition');
    }    
    //---------------------------------------------------------------------------------------
    function assemblePageHTML($element, templateName) {
		$(templateName).template("summaryScreenPage");		
		$.tmpl("summaryScreenPage",{activationItems:activationItems}).appendTo($element);        
    }
    // ---------------------------------------------------------------------------------------
    function bindEvents() {
        var sMethod = 'bindEvents() ';
        console.log(logPrefix + sMethod);

        $(refs.prevBtn).click(function() {
            showPrevScreen();
        });

        $(refs.submitBtn).click(function() {
            initiateAccountApplicationProcess();
        });
        
        $(refs.nextBtn).click(function() {
            flow.next();
        }); 
        $(refs.birthDate_id_1).bind("translatorFinished",function(){
        	showBirthDatePersonalData();
        });
        $(refs.birthDate_id_2).bind("translatorFinished",function(){
        	showBirthDateSupCard();
        });
        $(refs.signDate_id_1).bind("translatorFinished",function(){
        	showSignDateSignModel();
        });
        $(refs.grossIncome).bind('translatorFinished', function(event) {
			console.log(refs.grossIncome + 'bind(translatorFinished)');
				
			$(refs.grossIncome).html(activationItems.getFormatedCurrency(activationItems.getModel('financialData').get('grossIncome')));
		});
        $(refs.housingpayment).bind('translatorFinished', function(event) {
			console.log(refs.housingpayment + 'bind(translatorFinished)');
			
        	$(refs.nameTitle).html(activationItems.getNameTitleByValue(activationItems.getModel('personalData').get('title')));
			$(refs.housingpayment).html(activationItems.getFormatedCurrency(activationItems.getModel('personalData2_Address').get('housingpayment')));
		});
    }
    // ---------------------------------------------------------------------------------------
    function showPrevScreen() {
        flow.back();
        
        app.isAliveService.stop();
		clearInterval(intervalId);
    }
    // ---------------------------------------------------------------------------------------
    function initiateAccountApplicationProcess() {
        var sMethod = 'showNextScreen() ';
        console.log(logPrefix + sMethod);
        
		if ($(refs.submitBtn).hasClass('grayflat')) {
			console.log(logPrefix + sMethod	+ " Click on disabled Submitt btn detected!");
			return;
		}
        
        try{
            
            if(getErrorsCounter() >= getMaxSubmissionRetries())
            {
            	messageDialog.error(translator.translateKey('summary_submitError'));
            	$(refs.submitBtn).addClass('grayflat');
            	return;
            }
        	
        	new WICI.LoadingIndicatorController().show();
            //connectivityController.activateTest(activationItems,successActivate,failedActivate);
        	
        	if( new WICI.CreditCardApplicationDataValidator(activationItems).fieldsAreValid()){
        		connectivityController.initAccountApplication(activationItems,successInitActivate,failedInitActivate);
        	}else{
        		showMessageForDataValidationIssue();
        	}
        }
        catch(Ex){
        	failedInitActivate();
        }
    }

    function showMessageForDataValidationIssue(){
    	new WICI.LoadingIndicatorController().hide();
    	messageDialog.info(translator.translateKey("summary_dataIntegrity_Error"),"InitAccountApplication",$.noop);    	
    }
    
    function successInitActivate( argResponse ){
        var sMethod = 'successInitActivate() ';
        console.log(logPrefix + sMethod + " isError:" + argResponse.error+ " msg:"+argResponse.msg+ " data: "+argResponse.data);

        if( !argResponse.error ){
            var requestParams = {
               	transactionID	:	argResponse.data,
               	action			:	"retrieve"
            };
            new WICI.PollingController(connectivityController,WICI.ServiceNameEnum.PollAccountApplicationResponse, requestParams, pollResponseReceived, pollFailed).startPolling();
        }
        else
        	failedInitActivate( argResponse );
    }

    function failedInitActivate( argResponse ){
        var sMethod = 'failedInitActivate() ';
        if(argResponse)
        	console.log(logPrefix + sMethod + " isError:" + argResponse.error+ " msg:"+argResponse.msg+ " data: "+argResponse.data);

        new WICI.LoadingIndicatorController().hide();
    	messageDialog.info(translator.translateKey("summary_submitInitError"),"InitAccountApplication",$.noop);
    }

    function pollResponseReceived( argResponse ){
        var sMethod = 'pollResponseReceived() ';
        console.log(logPrefix + sMethod );
        if(argResponse)
        	console.log(logPrefix + sMethod + " isError:" + argResponse.error+ " msg:"+argResponse.msg+ " data: "+argResponse.data);
        successActivate(argResponse);
    }

    function pollFailed(argResponse){
        var sMethod = 'pollFailed() ';
        console.log(logPrefix + sMethod );
        if(argResponse)
        	console.log(logPrefix + sMethod + " isError:" + argResponse.error+ " msg:"+argResponse.msg+ " data: "+argResponse.data);
        failedActivate(argResponse);
    }
    // ---------------------------------------------------------------------------------------
    function successActivate( argResponse ) {
        var sMethod = 'successActivate() ';
        console.log(logPrefix + sMethod);
        if(argResponse)
        	console.log(logPrefix + sMethod + " isError:" + argResponse.error+ " msg:"+argResponse.msg+ " data: "+argResponse.data);
        new WICI.LoadingIndicatorController().hide();
		if ( argResponse && !_.isEmpty(argResponse) && !argResponse.error) {

		    console.log(logPrefix + sMethod + " appStatus:" + argResponse.data.appStatus);
		    
            activationItems.setAccountApplicationResponse(argResponse);
            
			flow.next();
		} else {    
	        messageDialog.error(translator.translateKey("summary_SubmitApplicationError"));			
		}
		
		app.isAliveService.stop();
		clearInterval(intervalId);
		model.set('submitFailed_Counter', null);
    }
    // ---------------------------------------------------------------------------------------
    function failedActivate(argResponse) {
        var sMethod = 'failedActivate() ';
        console.log(logPrefix + sMethod);
        if (argResponse) {
        	console.log(logPrefix + sMethod + "\n" + argResponse);
        }
        new WICI.LoadingIndicatorController().hide();

        model.set('submitFailed_Counter', getErrorsCounter() + 1);
        console.log("--error count=" + getErrorsCounter());        
        
        if (getErrorsCounter() >= getMaxSubmissionRetries()) {
        	messageDialog.error(translator.translateKey('summary_submitError'));
        	$(refs.submitBtn).addClass('grayflat');
        	$(refs.submitBtn).removeClass('greenflat');
        } else {
        	messageDialog.error(translator.translateKey("summary_SubmitApplicationError"));
        }
    }
    
    function getMaxSubmissionRetries() {
    	var sMethod = 'getMaxSubmissionRetries() ';
    	console.log(logPrefix + sMethod);
    	var maxRetries = 0;
    	try {
    		if (WICI.AppConfig.SubmissionConfig.MAX_SUBMISSION_RETRIES && WICI.AppConfig.SubmissionConfig.MAX_SUBMISSION_RETRIES != '') {
    			maxRetries = parseInt(WICI.AppConfig.SubmissionConfig.MAX_SUBMISSION_RETRIES);
    		}
    	} catch(ex) {
    		console.log(logPrefix + sMethod + "\n" + 'ERROR: ' + ex);
    	}
    	return maxRetries;
    }
    
    function getErrorsCounter() {
    	var sMethod = 'getMaxSubmissionRetries() ';
    	console.log(logPrefix + sMethod);    	
    	var counter = 0; 
    	try {    	
    		if (model.get('submitFailed_Counter') !== null && model.get('submitFailed_Counter') !=='') {
    			counter = parseInt(model.get('submitFailed_Counter'));
    		}
    	} catch(ex) {
    		console.log(logPrefix + sMethod + "\n" + 'ERROR: ' + ex);
    	}
        return counter;
    }
    
    function showBirthDatePersonalData(){
    	if(typeof activationItems.getModel('personalData') != 'undefined'  && activationItems.getModel('personalData') != null && activationItems.getModel('personalData').get('birthDate')) {
    		$(refs.birthDate_id_1).text(moment(activationItems.getFormatedDate(activationItems.getModel('personalData').get('birthDate')), 'MMMM DD, YYYY').format('DD MMMM YYYY'));
    	}
    }
    function showBirthDateSupCard(){
    	if(typeof activationItems.getModel('supCardRequestData') != 'undefined'  && activationItems.getModel('supCardRequestData') != null && activationItems.getModel('supCardRequestData').get('birthDate')) {
    		$(refs.birthDate_id_2).text(moment(activationItems.getFormatedDate(activationItems.getModel('supCardRequestData').get('birthDate')), 'MMMM DD, YYYY').format('DD MMMM YYYY'));
    	}
    }
    function showSignDateSignModel(){
    	if(typeof activationItems.getModel('signatureModel') != 'undefined'  && activationItems.getModel('signatureModel') != null && activationItems.getModel('signatureModel').get('signDate')) {
    		$(refs.signDate_id_1 + "," + refs.signDate_id_2 +","+ refs.signDate_id_3 +","+ refs.signDate_id_4).
    		text(moment(activationItems.getFormatedDate(activationItems.getModel('signatureModel').get('signDate')), 'MMMM DD, YYYY').format('DD MMMM YYYY'));
    	}
    }
};