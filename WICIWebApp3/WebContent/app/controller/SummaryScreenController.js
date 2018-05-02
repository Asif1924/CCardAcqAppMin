ensureNamespaceExists();

WICI.SummaryScreenController = function(activationItems, argTranslator, argMessageDialog) {
    var logPrefix = '[WICI.SummaryScreenController]::';
    var $screenContainer = $('#SummaryScreen');
    var screenContainerTemplateId = '#WICISummaryScreen-template';
    var translator = null;
    var messageDialog = null;
    var valideteSubmitFields = false;
    var connectivityController = null;
    var pollingController =  null;
    var isAliveInterval = null;
    this.syncUserData = syncUserData;
    this.show = show;
    this.init = init;
    this.hide = hide;
    var respAn = new WICI.PollingResponseAnalyzer();
    var	flow = null;

    var refs = {
        submitBtn   			:   '#summary_SubmitButton',
        prevBtn     			:   '.summaryScreen_PrevButton',
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
        // US3960
        grossHouseholdIncome	:	'#summary_grossHouseholdIncome',
        nameTitle				:	'#summary_nameTitle',
        promoCode               :   '#promocode',
        icon                    :   '.logoIcon',
        // US4364
        expiryDate_id			:	"#expiryDate_id"
    };
    var submitButtonEnabled = false;

    var dataFields = [];
    dataFields.push({notField:true, name: 'submitFailed_Counter',  value: null, validation: null });
    checkedElements = [];
    var itemsToSet = {};

    if (activationItems.getModel('loginScreen').get('employerID').toUpperCase() !== "E") {
        refs.summaryAgentID = "#summaryAgentIDTextField";
        dataFields.push({
                    name: 'summaryAgentID',
                    value: null,
                    validation: {
                        type: 'format',
                        message: '',
                        matcher: activationItems.getModel('loginScreen').get('agentID'),
                        group: [1]
                    }
                });
        checkedElements.push({uiid:refs.summaryAgentID});
        itemsToSet.summaryAgentID = refs.summaryAgentID;
    } else {
        refs.summaryFirstName = '#summaryFirstNameTextField';
        refs.summaryLastName = "#summaryLastNameTextField";
        dataFields.push({
                    name: 'summaryFirstName',  value: null,
                    validation: {
                        type: 'format',
                        message: '',
                        matcher: activationItems.getModel('loginScreen').get('firstName'),
                        group: [1]
                    }
                },
                {
                    name: 'summaryLastName',
                    value: null,
                    validation: {
                        type: 'format',
                        message: '',
                        matcher: activationItems.getModel('loginScreen').get('lastName'),
                        group: [1]
                    }
                });
        checkedElements.push({uiid:refs.summaryFirstName}, {uiid:refs.summaryLastName});
        itemsToSet.summaryFirstName = refs.summaryFirstName;
        itemsToSet.summaryLastName = refs.summaryLastName;
    }
    var model =new WICI.BaseModel({
    	name: 'summaryData',
    	refs: refs,
        data:dataFields
    });
    //---------------------------------------------------------------------------------------
    function init( argFlow ) {
        var sMethod = 'init() ';
        console.log(logPrefix + sMethod);

        //app.isAliveService.start();
        flow = argFlow;
        messageDialog = argMessageDialog; 	//(AA)Dependency Injection Principle: Allows for proper unit testing
        translator = argTranslator; 		//(AA)Dependency Injection Principle: Allows for proper unit testing
        
        //pendingScreen = new WICI.PendingScreenController(activationItems, translator, messageDialog, flow);
        
        createView();
        disableSubmitButton();
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
        
        checkExpiryDateField();

        $(refs.grossIncome).html(activationItems.getFormatedCurrency(activationItems.getModel('financialData').get('grossIncome')));
        
        // US3960
        $(refs.grossHouseholdIncome).html(activationItems.getFormatedCurrency(activationItems.getModel('financialData').get('grossHouseholdIncome')));

		$(refs.housingpayment).html(activationItems.getFormatedCurrency(activationItems.getModel('personalData2_Address').get('housingpayment')));

    	$(refs.nameTitle).html(activationItems.getNameTitleByValue(activationItems.getModel('personalData').get('title')));
    	
        // US4698 - Enable bluetooth on click of submit application
        // WICI.BluetothHelper.toggle();

    }

    function permanentlyEnableSubmitButton(){
		$(refs.summaryStatusReady).show();
		$(refs.summaryStatusNotReady).hide();
    }
    //---------------------------------------------------------------------------------------
	function updateSubmitBtnState() {
		var sMethod = 'updateSubmitBtnState() ';
		console.log(logPrefix + sMethod);

		$(refs.summaryStatusNotReady).show();
		$(refs.summaryStatusReady).hide();

		clearInterval(isAliveInterval);

		isAliveInterval = setInterval(function() {
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

        showExpiryDatePersonalData();
        showBirthDatePersonalData();
        showBirthDateSupCard();
        showSignDateSignModel();
    }
    //---------------------------------------------------------------------------------------
    function hide() {
		var sMethod = 'hide() ';
		console.log(logPrefix + sMethod);

		app.isAliveService.stop();
		clearInterval(isAliveInterval);

        $screenContainer.hide();
    }
    //---------------------------------------------------------------------------------------
    function createView() {
        $screenContainer.empty();
        assembleNavigationBarAtTop();
        // US4637
        WICI.BreadcrumbsHelper.assembleBreadcrumbs(7, $screenContainer, activationItems);
        assemblePageHTML($screenContainer, screenContainerTemplateId);
        $screenContainer.addClass("breadcrumbPadding");
        assembleNavigationBarAtBottom();
        adjustSignatureSize();
    }
    //---------------------------------------------------------------------------------------
	function adjustSignatureSize() {
		var signatureWidth = 325;
		var signatureHeigth = 100;
		if (window && window.devicePixelRatio) {
			var ratio = window.devicePixelRatio;
			$(".signatureSummary").css('width',
					(signatureWidth / ratio) + 'px')
								  .css('height',
					(signatureHeigth / ratio) + 'px');
		}
	}
    // ---------------------------------------------------------------------------------------
	function assembleNavigationBarAtTop() {
        $("#pageHeader-template").template("pageHeader");
        $.tmpl("pageHeader", {
        	"logo_En" : translator.currentLanguageEnglish(),
            "previousButtonId" :    refs.prevBtn.replace('.',''),
            "settingsButtonId" 		: "summaryScreen_SettingsButton",
            //"nextButtonId" :        refs.nextBtn.replace('#','')
        }).appendTo("#SummaryScreen");

        $('#summaryScreen_SettingsButton').addClass('rightPosition');
    }
        // ---------------------------------------------------------------------------------------
    function assembleNavigationBarAtBottom(){
        $("#pageFooter-template").template("pageFooter");
        $.tmpl("pageFooter", {
            "previousButtonId" :    refs.prevBtn.replace('.','')
            }
        ).appendTo("#SummaryScreen");
    }
    //---------------------------------------------------------------------------------------
    function assemblePageHTML($element, templateName) {
		$(templateName).template("summaryScreenPage");
		$.tmpl("summaryScreenPage",{
            activationItems: activationItems,
            isNotEmployee: activationItems.getModel('loginScreen').get('employerID').toUpperCase !== 'E'
     }).appendTo($element);
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

        $.subscribe("translatorFinished",function(){
        	showBirthDatePersonalData();
        });
        
        // US4364
        $.subscribe("translatorFinished",function(){
        	showExpiryDatePersonalData();
        });
        
        $.subscribe("translatorFinished",function(){
        	showBirthDateSupCard();
        });
        $.subscribe("translatorFinished",function(){
        	showSignDateSignModel();
        });
        $.subscribe('translatorFinished', function(event) {
			console.log(refs.grossIncome + 'subscribe(translatorFinished)');
			console.log(refs.grossHouseholdIncome + 'subscribe(translatorFinished)');
			
			$(refs.grossIncome).html(activationItems.getFormatedCurrency(activationItems.getModel('financialData').get('grossIncome')));
			// US3960
			$(refs.grossHouseholdIncome).html(activationItems.getFormatedCurrency(activationItems.getModel('financialData').get('grossHouseholdIncome')));
		});
        $.subscribe('translatorFinished', function(event) {
			console.log(refs.housingpayment + 'subscribe(translatorFinished)');

        	$(refs.nameTitle).html(activationItems.getNameTitleByValue(activationItems.getModel('personalData').get('title')));
			$(refs.housingpayment).html(activationItems.getFormatedCurrency(activationItems.getModel('personalData2_Address').get('housingpayment')));
		});
        $(refs.icon).click(function() {
            togglePromoCode();
        });
        bindSubmitHandlingControls();
    }
    // US4364 ---------------------------------------------------------------------------------------
    function checkExpiryDateField() {
    	var sMethod = " checkExpiryDateField() :: "; 
    	
    	var idType = activationItems.getModel('personalData').get('idtype');
    	var provinceValue = activationItems.getModel('personalData').get('placeofissue');
    	
    	// US4364
        console.log(logPrefix + sMethod + " provinceValue : " + provinceValue + " idType : " + idType);
        if ( ($.inArray(idType, ['DR', 'PA', 'PR', 'IN', 'SC', 'BC', 'AB', 'NS', 'NB', 'NL', 'SK', 'MB', 'PE', 'NT', 'NU', 'YT', 'ON']) != -1) || 
        		($.inArray(provinceValue, ['QC', 'NB', 'NL', 'SK', 'NU']) != -1 && $.inArray(idType, ['HE']) != -1))  {
        	$("#personalData_IDNumber_Label").removeClass("fieldLabelsBottomCell");
        	$("#personalData_IDNumber_Label").addClass("fieldLabelsCell fieldCellSize33");
        	$("#personalData_ExpiryDate").removeClass("fieldLabelsCell");
        	$("#personalData_ExpiryDate").addClass("fieldLabelsBottomCell");
        	$("#expiryDate_id").removeClass("fieldLabelsCell");
        	$("#expiryDate_id").addClass("fieldLabelsCell fieldValuesBottomCell");
        	$("#summary_TellUsAboutYourself_ExpiryDate_Area").show();
        } else if(($.inArray(provinceValue, ['AB']) != -1 && $.inArray(idType, ['HE']) != -1) || $.inArray(idType, ['BI', 'CI', 'RE']) != -1) {
        	$("#personalData_IDNumber_Label").removeClass("fieldLabelsCell");
        	$("#personalData_IDNumber_Label").addClass("fieldLabelsBottomCell");
        	$("#personalData_IDNumber_Value").removeClass("fieldLabelsCell");
        	$("#personalData_IDNumber_Value").addClass("fieldLabelsCell fieldValuesBottomCell");
        	$("#summary_TellUsAboutYourself_ExpiryDate_Area").hide();
        } else {
        	// Expiry date will be hidden for any new fields added in ID Type.
        	// To enable Expiry date, have to add logic in this above conditions
        	$("#personalData_IDNumber_Label").removeClass("fieldLabelsCell");
        	$("#personalData_IDNumber_Label").addClass("fieldLabelsBottomCell");
        	$("#personalData_IDNumber_Value").removeClass("fieldLabelsCell");
        	$("#personalData_IDNumber_Value").addClass("fieldLabelsCell fieldValuesBottomCell");
        	$("#summary_TellUsAboutYourself_ExpiryDate_Area").hide();
        }
    }
    // ---------------------------------------------------------------------------------------
    function bindSubmitHandlingControls(){
        for (var item in itemsToSet) {
            $(itemsToSet[item]).on('input', updateSubmitState);
        }
    }
    //---------------------------------------------------------------------------------------
    function disableSubmitButton(){
        $(refs.submitBtn).removeClass("greenflat");
        $(refs.submitBtn).addClass("grayflat");
        $(refs.submitBtn).prop("disabled",true);
        submitButtonEnabled = false;
    }
    //---------------------------------------------------------------------------------------
    function enableSubmitButton(){
        $(refs.submitBtn).removeClass("grayflat");
        $(refs.submitBtn).addClass("greenflat");
        $(refs.submitBtn).prop("disabled",false);
        submitButtonEnabled = true;
    }
    //---------------------------------------------------------------------------------------
    function updateSubmitState() {
        if (checkInputsNotEmpty()) {
            enableSubmitButton();
        } else {
            disableSubmitButton();
        }
    }
    //---------------------------------------------------------------------------------------
    function syncUserData() {
        var sMethod = 'syncUserData() ';
        console.log(logPrefix + sMethod);
        for (var item in itemsToSet) {
            model.set(item, $(itemsToSet[item]).val().toLowerCase());
        }
        console.log(logPrefix + sMethod + ' model data: \n' + model.toString());
    }
    // ---------------------------------------------------------------------------------------
    function showPrevScreen() {
        flow.back();

        app.isAliveService.stop();
		clearInterval(isAliveInterval);
    }
    // ---------------------------------------------------------------------------------------
    function initiateAccountApplicationProcess() {
        var sMethod = 'initiateAccountApplicationProcess() ';
        console.log(logPrefix + sMethod);
        
        syncUserData();
        if (app.validationsOn) {
            if (!submitButtonEnabled) {
                return;
            }
            app.validationDecorator.clearErrArrtibute();
            var rez = [];
            rez = model.validate(1);
            //--------------------------------------------------------------------
            if (rez.length > 0) {
                app.validationDecorator.applyErrAttribute(checkedElements);
                return;
            }
        }

		if ($(refs.submitBtn).hasClass('grayflat')) {
			console.log(logPrefix + sMethod	+ " Click on disabled Submitt btn detected!");
			return;
		}

        mapEmploymentType();

        try{

            if(getErrorsCounter() >= getMaxSubmissionRetries())
            {
            	messageDialog.error(translator.translateKey('summary_submitError'));
            	$(refs.submitBtn).addClass('grayflat');
            	return;
            }

        	new WICI.LoadingIndicatorController().show();

        	if( new WICI.CreditCardApplicationDataValidator(activationItems).fieldsAreValid()){
        		// US3462 
        		// Print Coupon after submit app if cardtype is OMC
        		if(activationItems.getModel('chooseProductModel').get('productCard') == "OMX" ||
        			activationItems.getModel('chooseProductModel').get('productCard') == "OMZ"){
        			printCoupon();
        		}             
        		connectivityController.initAccountApplication(activationItems,successInitActivate,failedInitActivate);
        	}else{
        		showMessageForDataValidationIssue();
        	}
        }
        catch(Ex){
        	failedInitActivate();
        }
    }
    
    // US3462
    //---------------------------------------------------------------------------------------
   /* old code - back end issues  fix -  function printCoupon() {
        var sMethod = 'printCoupon() ';
        console.log(logPrefix + sMethod);
        var isDevice = new WICI.DeviceDetectionHelper().any();
        
        if( isDevice ){
        
            if (!app.zebraPrinterWrapper.verifyPrinterMacAddress() ) {
                showPrinterSetupAccountProfileDialog (setupPrinterMacAddress);
                return;
            }
            new WICI.LoadingIndicatorController().show();
            try {                
                
                app.zebraPrinterWrapper.printCoupon(
                    activationItems,
                    printFileSuccess,
                    printFileFailure);
            }
            catch (error){
                console.log(logPrefix + sMethod +"::[ERROR]::[" + error +"]");
            }
        }else{
        	// Web print
        }
        return;
    }*/
    
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
						printFileSuccess, printFileFailure);

			} else {
				// Web print
			}
		} catch (error) {
			console.log(logPrefix + sMethod + "::[ERROR]::[" + error + "]");
		}
		return;
    }
    
  //---------------------------------------------------------------------------------------
    function printFileSuccess(result) {
        var sMethod = 'printFileSuccess() ';
        console.log(logPrefix + sMethod);
    }
    //---------------------------------------------------------------------------------------
    function printFileFailure() {
        var sMethod = 'printFileFailure() ';
        console.log(logPrefix + sMethod);
    }

    function showMessageForDataValidationIssue(){
    	new WICI.LoadingIndicatorController().hide();
    	messageDialog.info(translator.translateKey("summary_dataIntegrity_Error"),"InitAccountApplication",$.noop);
    }

    function successInitActivate( argResponse ){
        var sMethod = 'successInitActivate() ';
        console.log(logPrefix + sMethod + " isError:" + argResponse.error+ " msg:"+argResponse.msg+ " data: "+argResponse.data);

        //if( !argResponse.error ){
        //AA (01/03/2015)
        //We are using the ResponseAnalyzer here on the InitAccountApplication response, but
        //only for checking if the response is in error and nothing more, since most of the 
        //public methods of the ResponseAnalzyer were designed mainly for checking the 
        //AccountApplication response and not necessarily the InitAccountApplication response, we
        //are safe to use it here in this manner
        if( !respAn.isErrorResponse(argResponse) ){ 
            var requestParams = {
               	transactionID	:	argResponse.data,
               	action			:	"retrieve"
            };
            pollingController = new WICI.PollingController(connectivityController, requestParams, pollResponseReceived, pollFailed, "INSESSION",$.noop,null);
            pollingController.startPolling();
            //console.log("QueueTransactionID from Middleware:" + QueueTransactionID);
            console.log("QueueTransactionID from Middleware:" + requestParams.transactionID);
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
        	console.log(logPrefix + sMethod + " isError:" + argResponse.error+ " msg:"+argResponse.msg+ " data: "+ JSON.stringify(argResponse.data));
        
        if( respAn.isValidResponse(argResponse) )
        	successActivate(argResponse);
        else
        	failedActivate(argResponse);
        /*
        if( argResponse && !_.isEmpty(argResponse) && !argResponse.error && argResponse.data ){
        	if( argResponse.data.appStatus==="PENDING" || argResponse.data.appStatus==="APPROVED" || argResponse.data.appStatus==="DECLINED"){
        		successActivate(argResponse);
        	}                    	
        }else
        	failedActivate(argResponse);
        */
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
		
        //if ( argResponse && !_.isEmpty(argResponse) && !argResponse.error) {
        if ( respAn.isValidResponse(argResponse) ) {

		    //if( argResponse.data.appStatus==="APPROVED" || argResponse.data.appStatus==="DECLINED"){
		    if( respAn.isApprovedResponse(argResponse) || respAn.isDeclinedResponse(argResponse) || (WICI.AppConfig.PendingFeature.TreatPendsLikeDeclines && respAn.isPendingResponse(argResponse)) ){
		    	//activationItems.setAccountApplicationResponse(argResponse);
		    	activationItems.setAccountApplicationResponse(respAn.getWICIResponse(argResponse));
		    	activationItems.setNewAccountApplicationResponse(argResponse);		    	
		    	
		    	var pendScreenInfo = { isPendToApproved:false,fromPendScreen:true,activationItemsFromServer:respAn.getActivationItems(argResponse),accountApplicationResponse:argResponse };
		    	app.navigationController.adhocPrintDemoScreen = new WICI.PrintDemoScreenController(activationItems, argTranslator, argMessageDialog, pendScreenInfo);
		    	app.navigationController.adhocPrintDemoScreen.init(flow);
		    	// app.navigationController.adhocPrintDemoScreen.show();
		    	flow.next();
		    	return;
		    }
		    
		    //if( argResponse.data.appStatus==="PENDING" ){
		    if( !WICI.AppConfig.PendingFeature.TreatPendsLikeDeclines && respAn.isPendingResponse(argResponse) ){
		    	activationItems.setAccountApplicationResponse(argResponse);
		    	//activationItems.setAccountApplicationResponse(respAn.getWICIResponse(argResponse));
		    	activationItems.setNewAccountApplicationResponse(argResponse);
		    	console.log(logPrefix + sMethod + "Pending Page logic here: AppStatus=" + respAn.getAppStatus(argResponse));
		    	if( respAn.isNewResponseType(argResponse))
		    		console.log(logPrefix + sMethod + "New Pending Page Response: RetrievalToken=" + respAn.getRetrievalToken(argResponse) );
		    	hide();
		    	app.navigationController.adhocPendingScreen = new WICI.PendingScreenController(activationItems, translator, messageDialog);
		    	app.navigationController.adhocPendingScreen.init(flow,"INSESSION",null,argResponse);
		    	app.navigationController.adhocPendingScreen.show();
		    }
		    	
		} else {
	        messageDialog.error(translator.translateKey("summary_SubmitApplicationError"));
		}

		app.isAliveService.stop();
		clearInterval(isAliveInterval);
		model.set('submitFailed_Counter', null);
    }
    // ---------------------------------------------------------------------------------------
    function failedActivate(argResponse) {
        var sMethod = 'failedActivate() ';
        console.log(logPrefix + sMethod);
        console.log(logPrefix + sMethod + " MaxRetrievals = " + WICI.AppConfig.PendingFeature.MaxRetrievalsForApproved);
        
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
        } else if (!respAn.isWithinRetrievalThreshold(argResponse)){
        	messageDialog.error(translator.translateKey("pendingScreen_RetrieveFailed"));
        } else {
        	// messageDialog.error(translator.translateKey("summary_SubmitApplicationError"));
        	
        	// US3626        	        	    	
        	new WICI.LoadingIndicatorController().hide();
            hide();
            var respdummy = JSON.parse('{"error":false,"msg":"COMPLETE","data":{"ResponseData":{"error":false,"msg":"","data":{"appStatus":"DECLINED"}},"RetrievalToken":"7381029CD7DD","TransactionState":"COMPLETE"}}');     
        	
         	activationItems.setAccountApplicationResponse(respAn.getWICIResponse(respdummy));
        	activationItems.setNewAccountApplicationResponse(respdummy);
             
            var pendScreenInfo = { isPendToApproved:false,fromPendScreen:true,activationItemsFromServer:respAn.getActivationItems(respdummy),accountApplicationResponse:respdummy };
        	app.navigationController.adhocPrintDemoScreen = new WICI.PrintDemoScreenController(activationItems, argTranslator, argMessageDialog, pendScreenInfo);
        	app.navigationController.adhocPrintDemoScreen.init(flow);
        	app.navigationController.adhocPrintDemoScreen.show();
        	return;
            
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

    // US4364
    function showExpiryDatePersonalData(){
    	console.log(logPrefix + " showExpiryDatePersonalData() ");
    	if(typeof activationItems.getModel('personalData') != 'undefined'  && activationItems.getModel('personalData') != null && activationItems.getModel('personalData').get('idExpiryDate')) {
    		console.log(logPrefix + " showExpiryDatePersonalData() " + moment(activationItems.getFormatedDate(activationItems.getModel('personalData').get('idExpiryDate')), 'MMMM DD, YYYY').format('DD MMMM YYYY'));
    		$(refs.expiryDate_id).text(moment(activationItems.getFormatedDate(activationItems.getModel('personalData').get('idExpiryDate')), 'MMMM DD, YYYY').format('DD MMMM YYYY'));
    	}
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
    function checkInputsNotEmpty () {
        for (var item in itemsToSet) {
            if (! $(itemsToSet[item]).val()) {
                return false;
            }
        }
        return true;
    }
    function mapEmploymentType () {
        if (!( activationItems.getModel('financialData').get('employmentType') in {F: "", P: "",S: ""})) {
            activationItems.getModel('financialData').set('employmentType', 'F');
        }

    }
    function togglePromoCode () {
        var temp = activationItems.getModel('chooseProductModel').get('agencyPromoCode');
        activationItems.getModel('chooseProductModel').set('agencyPromoCode',  togglePromoCode.code);
        togglePromoCode.code = temp;
        $(refs.icon).toggleClass('logoIconClicked');
        $(refs.icon).toggleClass('logoIconUnclicked');
    }
    togglePromoCode.code = app.translator.translateKey('ATTN');
};
