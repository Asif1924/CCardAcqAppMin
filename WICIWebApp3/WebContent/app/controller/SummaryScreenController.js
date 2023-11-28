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
    var isDebugMode;
    this.syncUserData = syncUserData;
    this.show = show;
    this.init = init;
    this.hide = hide;
    var respAn = new WICI.PollingResponseAnalyzer();
    var	flow = null;

    var refs = {
        submitBtn   			:   '#summary_SubmitButton',
		dupeSubmitBtn   		:   '#summary_DupeSubmitButton',
		testSubmitButton		:	'#summary_TestSubmitButton',
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
        expiryDate_id			:	"#expiryDate_id",
		summary_JobDescription	:	"#summary_JobDescription"
    };
    var submitButtonEnabled = false;
	var testSubmitButtonEnabled = false;
	var dupeSubmitButtonEnabled = false;
	var pollStartedFlag = false;

    var dataFields = [];
    dataFields.push({notField:true, name: 'submitFailed_Counter',  value: null, validation: null },
					{notField:true, name: 'submitCounter',  	   value: null, validation: null });
    checkedElements = [];
    var itemsToSet = {};

    if(activationItems.getModel('loginScreen').get('employerID').toUpperCase() !== "E") {
        refs.summaryAgentID = "#summaryAgentIDTextField";
        dataFields.push({
                    name: 'summaryAgentID',
                    value: null,
                    validation: {
                        type: 'equalCheck',
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
                        type: 'equalCheck',
                        message: '',
                        matcher: activationItems.getModel('loginScreen').get('firstName'),
                        group: [1]
                    }
                },
                {
                    name: 'summaryLastName',
                    value: null,
                    validation: {
                        type: 'equalCheck',
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
		// WICI-241
		//getLocation();
        bindEvents();
        var currentModel = activationItems.getModel(model.name);

		if (!currentModel) {
            activationItems.addModel(model);
        } else {
            model = currentModel;
        }

        connectivityController = new WICI.ConnectivityController(new WICI.ConnectionStatus(), messageDialog, translator, WICI.AppConfig.ConnectivityConfig);
        connectivityController.init();

		if(app.getTestSubmitButtonEnableFlag() == "Y") {
			//$(refs.submitBtn).hide();
			$(refs.testSubmitButton).hide();
		} else {
			$(refs.dupeSubmitBtn).hide();
			$(refs.testSubmitButton).hide();
		}
		$(refs.prevBtn).show();
		
        checkExpiryDateField();
        showHideAddressLine2();

        $(refs.grossIncome).html(activationItems.getFormatedCurrency(activationItems.getModel('financialData').get('grossIncome')));
        
        // US3960
        $(refs.grossHouseholdIncome).html(activationItems.getFormatedCurrency(activationItems.getModel('financialData').get('grossHouseholdIncome')));

		$(refs.housingpayment).html(activationItems.getModel('personalData2_Address').get('housingpayment'));

    	$(refs.nameTitle).html(activationItems.getNameTitleByValue(activationItems.getModel('personalData').get('title')));
		if(activationItems.getModel('financialData').get('jobDescNCatSuccessFlag')) {
			var jobDesc_Text = $('#finEmpInfo_JobDescription_Input_TextField').val();
			console.log(logPrefix + sMethod + jobDesc_Text);
			$(refs.summary_JobDescription).html(jobDesc_Text);
		}
    	
		console.log(logPrefix + sMethod + " insuranceUsecase :: " + activationItems.getModel("financialData").get('insuranceUsecase'));
		console.log(logPrefix + sMethod + " summary Ins available :: " + activationItems.getModel("financialData").get('summary_insurance_CPType_Available'));
        // US4698 - Enable bluetooth on click of submit application
        // WICI.BluetothHelper.toggle();
		if(activationItems.getModel("financialData").get('insuranceUsecase') == "USECASE_FOUR") {
			activationItems.getModel("financialData").set('insuranceUsecase', null);
			$("#useCaseFour-container").show();
		}
		model.set('submitCounter', 0);
    }

    //---------------------------------------------------------------------------------------
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
        WICI.BreadcrumbsHelper.assembleBreadcrumbs(8, $screenContainer, activationItems);
        assemblePageHTML($screenContainer, screenContainerTemplateId);
        $screenContainer.addClass("breadcrumbPadding");
        assembleNavigationBarAtBottom();
        adjustSignatureSize();
    }
	//---------------------------------------------------------------------------------------
	function getLocation() {	
		var sMethod = 'getLocation() :: ';
        console.log(logPrefix + sMethod);

		app.geoLocationHelper = new WICI.GeoLocationHelper();
        app.geoLocationHelper.getCoordinates(getLocationSuccess, getLocationFailure);        
    }

	function getLocationSuccess(coordinates) {
        var sMethod = 'getLocationSuccess() ';
        console.log(logPrefix + sMethod + " Coordinates : " + coordinates);
		var result = eval('('+coordinates+')' );
		console.log(logPrefix + sMethod + " coordinates : " + result.longitude + " :: " + result.latitude);
		
		activationItems.getModel('loginScreen').set('longitude', result.longitude);
		activationItems.getModel('loginScreen').set('latitude', result.latitude);			
	}
	
	function getLocationFailure(result) {
        var sMethod = 'getLocationFailure() ';
        console.log(logPrefix + sMethod + " Exception is: " + result);  
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

		$("#useCaseFourOk").click(function(){
			$("#useCaseFour-container").hide();
        });

        $(refs.prevBtn).click(function() {
            showPrevScreen();
        });

        $(refs.submitBtn).click(function() {
            initiateAccountApplicationProcess();
        });

        $(refs.dupeSubmitBtn).click(function() {
            initiateDupeAccountApplicationProcess();
        });

        $(refs.testSubmitButton).click(function() {
            initiateTestAccountApplicationProcess();
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
			setTimeout(function() {
                var jobDesc_Text = $('#finEmpInfo_JobDescription_Input_TextField').val();
				console.log("subscribe(translatorFinished) : " + jobDesc_Text);
				$(refs.summary_JobDescription).html(jobDesc_Text);
            },100);
		});
        $.subscribe('translatorFinished', function(event) {
			console.log(refs.housingpayment + 'subscribe(translatorFinished)');

        	$(refs.nameTitle).html(activationItems.getNameTitleByValue(activationItems.getModel('personalData').get('title')));
			$(refs.housingpayment).html(activationItems.getModel('personalData2_Address').get('housingpayment'));
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
    //---------------------------------------------------------------------------------------
    function showHideAddressLine2() {
    	if(app.getAddressLine2Flag() == 'Y') {
    		$('#summary_AddressLine2').removeClass('hideElement');
    		$('#summary_PreviousAddressLine2').removeClass('hideElement');
    		$('#summary_SupAddressLine2').removeClass('hideElement');
    	} else {
    		$('#summary_AddressLine2').addClass('hideElement');
    		$('#summary_PreviousAddressLine2').addClass('hideElement');
    		$('#summary_SupAddressLine2').addClass('hideElement');
    	}
    }
    // ---------------------------------------------------------------------------------------
    function bindSubmitHandlingControls(){
        for (var item in itemsToSet) {
            $(itemsToSet[item]).on('input', updateSubmitState);
        }
		if(app.getTestSubmitButtonEnableFlag() == "Y") {
			for (var item in itemsToSet) {
            	$(itemsToSet[item]).on('input', updateTestSubmitState);
        	}
			for (var item in itemsToSet) {
            	$(itemsToSet[item]).on('input', updateDupeSubmitState);
        	}
		}
    }
	//---------------------------------------------------------------------------------------
    function disableDupeSubmitButton(){
        $(refs.dupeSubmitBtn).removeClass("greenflat");
        $(refs.dupeSubmitBtn).addClass("grayflat");
        $(refs.dupeSubmitBtn).prop("disabled",true);
        dupeSubmitButtonEnabled = false;
    }
    //---------------------------------------------------------------------------------------
    function enableDupeSubmitButton(){
        $(refs.dupeSubmitBtn).removeClass("grayflat");
        $(refs.dupeSubmitBtn).addClass("greenflat");
        $(refs.dupeSubmitBtn).prop("disabled",false);
        dupeSubmitButtonEnabled = true;
    }
    //---------------------------------------------------------------------------------------
    function updateDupeSubmitState() {
        if (checkInputsNotEmpty()) {
            enableDupeSubmitButton();
        } else {
            disableDupeSubmitButton();
        }
    }
	//---------------------------------------------------------------------------------------
    function disableTestSubmitButton(){
        $(refs.testSubmitButton).removeClass("greenflat");
        $(refs.testSubmitButton).addClass("grayflat");
        $(refs.testSubmitButton).prop("disabled",true);
        testSubmitButtonEnabled = false;
    }
    //---------------------------------------------------------------------------------------
    function enableTestSubmitButton(){
        $(refs.testSubmitButton).removeClass("grayflat");
        $(refs.testSubmitButton).addClass("greenflat");
        $(refs.testSubmitButton).prop("disabled",false);
        testSubmitButtonEnabled = true;
    }
    //---------------------------------------------------------------------------------------
    function updateTestSubmitState() {
        if (checkInputsNotEmpty()) {
            enableTestSubmitButton();
        } else {
            disableTestSubmitButton();
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
	function initiateDupeAccountApplicationProcess() {
        var sMethod = 'initiateDupeAccountApplicationProcess() ';
        console.log(logPrefix + sMethod);

        syncUserData();
        if(app.validationsOn) {
            if(!dupeSubmitButtonEnabled) {
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

		if ($(refs.dupeSubmitBtn).hasClass('grayflat')) {
			console.log(logPrefix + sMethod	+ " Click on disabled Submitt btn detected!");
			return;
		}
		
        try{
            if(getErrorsCounter() >= getMaxSubmissionRetries()) {
            	messageDialog.error(translator.translateKey('summary_submit3AttemptError'));
            	$(refs.dupeSubmitBtn).addClass('grayflat');
            	return;
            }

			if(dupeSubmitButtonEnabled) {
				model.set('submitCounter', getSubmitCounter() + 1);
			}
			
			if( new WICI.CreditCardApplicationDataValidator(activationItems).fieldsAreValid()){
				// VZE-478
				if($.inArray(activationItems.getModel('loginScreen').get('retailNetWork'), ["MARKS", "SPORTS"]) != '-1') {
					printCoupon();
				}
        		connectivityController.initAccountApplication(activationItems,successDupeInitActivate,failedDupeInitActivate);
        	} else {
        		showMessageForDataValidationIssue();
        	}
			
			console.log(logPrefix + sMethod + " submitCounter : " + model.get('submitCounter'));
			hideBackButton();
        } catch(Ex){
        	// US5294 : WICI - Debug Mode          	
        	if(isDebugMode){
                messageDialog.error(Ex,translator.translateKey('errorDialog_defaultTitle'),$.noop);
            }
        	console.log(logPrefix + sMethod + " Exception: " + Ex);
        	failedDupeInitActivate();
        }		
	}
	// ---------------------------------------------------------------------------------------
	function initiateTestAccountApplicationProcess() {
        var sMethod = 'initiateTestAccountApplicationProcess() ';
        console.log(logPrefix + sMethod);

		connectivityController.initAccountApplication(activationItems, successDupeInitActivate, failedDupeInitActivate);
	}
	// ---------------------------------------------------------------------------------------
    function initiateAccountApplicationProcess() {
        var sMethod = 'initiateAccountApplicationProcess() ';
        console.log(logPrefix + sMethod);
        
        syncUserData();
        if(app.validationsOn) {
            if(!submitButtonEnabled) {
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

		if(pollStartedFlag) {
			disableSubmitButton();
		}

		if ($(refs.submitBtn).hasClass('grayflat')) {
			console.log(logPrefix + sMethod	+ " Click on disabled Submitt btn detected!");
			return;
		}
		
		new WICI.LoadingIndicatorController().show();
		
        try{
            if(getErrorsCounter() >= getMaxSubmissionRetries()) {
				new WICI.LoadingIndicatorController().hide();
            	messageDialog.error(translator.translateKey('summary_submit3AttemptError'));
            	$(refs.submitBtn).addClass('grayflat');
            	return;
            }

			if(submitButtonEnabled) {
				model.set('submitCounter', getSubmitCounter() + 1);
			}
			
			if( new WICI.CreditCardApplicationDataValidator(activationItems).fieldsAreValid()){
				console.log(logPrefix + sMethod + " longitude : " + activationItems.getModel('loginScreen').get('longitude'));
				// VZE-478
				if($.inArray(activationItems.getModel('loginScreen').get('retailNetWork'), ["MARKS", "SPORTS"]) != '-1') {
					printCoupon();
				}
        		connectivityController.initAccountApplication(activationItems,successInitActivate,failedInitActivate);
        	} else {
        		showMessageForDataValidationIssue();
        	}
			
			console.log(logPrefix + sMethod + " submitCounter : " + model.get('submitCounter'));
			hideBackButton();
			//disableSubmitButton();
        } catch(Ex){
        	// US5294 : WICI - Debug Mode          	
        	if(isDebugMode){
                messageDialog.error(Ex,translator.translateKey('errorDialog_defaultTitle'),$.noop);
            }
        	console.log(logPrefix + sMethod + " Exception: " + Ex);
        	failedInitActivate();
        }
    }
	//---------------------------------------------------------------------------------------
	function hideBackButton() {
		$(refs.prevBtn).hide();
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
				app.zebraPrinterWrapper.printCoupon(translator, activationItems,
						printFileSuccess, printFileFailure);
			} else {
				// Web print
			}
		} catch (error) {
			// US5294 : WICI - Debug Mode          	
			if(isDebugMode){
                messageDialog.error(error,translator.translateKey('errorDialog_defaultTitle'),$.noop);
            }
        	console.log(logPrefix + sMethod + " Exception: " + error);
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

    function successInitActivate(argResponse){
        var sMethod = 'successInitActivate() ';
		console.log(logPrefix + sMethod + JSON.stringify(argResponse));
        //console.log(logPrefix + sMethod + " isError:" + argResponse.error+ " msg:"+argResponse.msg+ " data: "+argResponse.data);
		
		disableSubmitButton();
        if(!respAn.isErrorResponse(argResponse)){
			if(respAn.isPendingResponse(argResponse)) {
				new WICI.LoadingIndicatorController().hide();
		    	activationItems.setAccountApplicationResponse(argResponse);
		    	activationItems.setNewAccountApplicationResponse(argResponse);
		    	console.log(logPrefix + sMethod + "Pending Page logic here: AppStatus=" + respAn.getAppStatus(argResponse));
		    	if( respAn.isNewResponseType(argResponse))
		    		console.log(logPrefix + sMethod + "New Pending Page Response: RetrievalToken=" + respAn.getRetrievalToken(argResponse) );
		    	hide();
		    	app.navigationController.adhocPendingScreen = new WICI.PendingScreenController(activationItems, translator, messageDialog);
		    	app.navigationController.adhocPendingScreen.init(flow,"INSESSION",null,argResponse);
		    	app.navigationController.adhocPendingScreen.show();
			} else {
				pollStartedFlag = true;
				var requestParams = {
               		transactionID	:	argResponse.data,
               		action			:	"retrieve"
            	};
            	pollingController = new WICI.PollingController(connectivityController, requestParams, pollResponseReceived, pollFailed, "INSESSION",$.noop,null);
            	pollingController.startPolling();
            	console.log("QueueTransactionID from Middleware:" + requestParams.transactionID);
			}
        } else
        	failedInitActivate( argResponse );
    }

    function failedInitActivate( argResponse ){
        var sMethod = 'failedInitActivate() ';
        if(argResponse)
        	console.log(logPrefix + sMethod + " isError:" + argResponse.error+ " msg:"+argResponse.msg+ " data: "+argResponse.data);

		pollStartedFlag = false;
		enableSubmitButton();
        new WICI.LoadingIndicatorController().hide();
 		if(!respAn.isErrorResponse(argResponse)){
			if(respAn.isPendingResponse(argResponse)) {
		    	activationItems.setAccountApplicationResponse(argResponse);
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
			messageDialog.info(translator.translateKey("summary_submitUpdatedError"),"InitAccountApplication",$.noop);
		}
    }

	function successDupeInitActivate(argResponse){
        var sMethod = 'successDupeInitActivate() ';
		console.log(logPrefix + sMethod + JSON.stringify(argResponse));
		
		new WICI.LoadingIndicatorController().hide();
		
		if(app.getTestSubmitButtonEnableFlag() == "Y") {
			//$(refs.submitBtn).hide();
			$(refs.dupeSubmitBtn).hide();
			$(refs.testSubmitButton).show();
		}
		
        if(!respAn.isErrorResponse(argResponse)) {
			if(respAn.isPendingResponse(argResponse)) {
		    	activationItems.setAccountApplicationResponse(argResponse);
		    	activationItems.setNewAccountApplicationResponse(argResponse);
		    	console.log(logPrefix + sMethod + "Pending Page logic here: AppStatus=" + respAn.getAppStatus(argResponse));
		    	if( respAn.isNewResponseType(argResponse))
		    		console.log(logPrefix + sMethod + "New Pending Page Response: RetrievalToken=" + respAn.getRetrievalToken(argResponse) );
		    	hide();
		    	app.navigationController.adhocPendingScreen = new WICI.PendingScreenController(activationItems, translator, messageDialog);
		    	app.navigationController.adhocPendingScreen.init(flow,"INSESSION",null,argResponse);
		    	app.navigationController.adhocPendingScreen.show();
			}
        } else
        	failedInitActivate( argResponse );
    }

    function failedDupeInitActivate( argResponse ){
        var sMethod = 'failedDupeInitActivate() ';
        if(argResponse)
        	console.log(logPrefix + sMethod + " isError:" + argResponse.error+ " msg:"+argResponse.msg+ " data: "+argResponse.data);

        new WICI.LoadingIndicatorController().hide();

		if(!respAn.isErrorResponse(argResponse)){
			if(respAn.isPendingResponse(argResponse)) {
		    	activationItems.setAccountApplicationResponse(argResponse);
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
			messageDialog.info(translator.translateKey("summary_submitUpdatedError"),"InitAccountApplication",$.noop);
		}
    }

    function pollResponseReceived( argResponse ){
        var sMethod = 'pollResponseReceived() ';
        console.log(logPrefix + sMethod );
        if(argResponse)
        	console.log(logPrefix + sMethod + " isError:" + argResponse.error+ " msg:"+argResponse.msg+ " data: "+ JSON.stringify(argResponse.data));
        
        if(respAn.isValidResponse(argResponse))
        	successActivate(argResponse);
        else
        	failedActivate(argResponse);
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
		
        if (respAn.isValidResponse(argResponse)) {
		    if(respAn.isApprovedResponse(argResponse) || respAn.isDeclinedResponse(argResponse) || (WICI.AppConfig.PendingFeature.TreatPendsLikeDeclines && respAn.isPendingResponse(argResponse))){
		    	activationItems.setAccountApplicationResponse(respAn.getWICIResponse(argResponse));
		    	activationItems.setNewAccountApplicationResponse(argResponse);		    	
		    	
		    	var pendScreenInfo = { isPendToApproved:false,fromPendScreen:false,activationItemsFromServer:respAn.getActivationItems(argResponse),accountApplicationResponse:argResponse };
		    	app.navigationController.adhocPrintDemoScreen = new WICI.PrintDemoScreenController(activationItems, argTranslator, argMessageDialog, pendScreenInfo);
		    	app.navigationController.adhocPrintDemoScreen.init(flow);
		    	flow.next();
		    	return;
		    }
		    
		    if(!WICI.AppConfig.PendingFeature.TreatPendsLikeDeclines && respAn.isPendingResponse(argResponse)){
		    	activationItems.setAccountApplicationResponse(argResponse);
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
        	messageDialog.error(translator.translateKey('summary_submit3AttemptError'));
        	$(refs.submitBtn).addClass('grayflat');
        	$(refs.submitBtn).removeClass('greenflat');
        } else if (!respAn.isWithinRetrievalThreshold(argResponse)){
        	messageDialog.error(translator.translateKey("pendingScreen_RetrieveFailed"));
        } else {
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
    		// US5294 : WICI - Debug Mode          	
    		if(isDebugMode){
                messageDialog.error(ex,translator.translateKey('errorDialog_defaultTitle'),$.noop);
            }
        	console.log(logPrefix + sMethod + " Exception: " + ex);
    	}
    	return maxRetries;
    }

    function getErrorsCounter() {
    	var sMethod = 'getErrorsCounter() ';
    	console.log(logPrefix + sMethod);
    	var counter = 0;
    	try {
    		if (model.get('submitFailed_Counter') !== null && model.get('submitFailed_Counter') !=='') {
    			counter = parseInt(model.get('submitFailed_Counter'));
    		}
    	} catch(ex) {
    		// US5294 : WICI - Debug Mode          	
    		if(isDebugMode){
                messageDialog.error(ex,translator.translateKey('errorDialog_defaultTitle'),$.noop);
            }
        	console.log(logPrefix + sMethod + " Exception: " + ex);
    	}
        return counter;
    }

	function getSubmitCounter() {
    	var sMethod = 'getSubmitCounter() ';
    	console.log(logPrefix + sMethod);
    	var counter = 0;
    	if (model.get('submitCounter') !== null && model.get('submitCounter') !== '') {
    		counter = parseInt(model.get('submitCounter'));
    	}
        return counter;
    }	

    // US4364
    function showExpiryDatePersonalData(){
    	var sMethod = "showExpiryDatePersonalData :: ";
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
