ensureNamespaceExists();

WICI.SummaryScreenController = function(activationItems, argTranslator, argMessageDialog) {
    var logPrefix = '[WICI.SummaryScreenController]::';
    var $screenContainer = $('#SummaryScreen');
    var screenContainerTemplateId = '#WICISummaryScreen-template';
    var translator = null;
    var messageDialog = null;
    var valideteSubmitFields = false;
    var connectivityController = null;
    var isAliveInterval = null;
    this.syncUserData = syncUserData;
    this.show = show;
    this.init = init;
    this.hide = hide;
    var pendingScreen;
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
        nameTitle				:	'#summary_nameTitle',
        promoCode               :   '#promocode',
        icon                    :   '.logoIcon'
    };
    var submitButtonEnabled = false;

    var dataFields = [];
    dataFields.push({notField:true, name: 'submitFailed_Counter',  value: null, validation: null });
    checkedElements = [];
    var itemsToSet = {};

    if (activationItems.getModel('loginScreen').get('employerID').toLowerCase() !== "e") {
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

        $(refs.grossIncome).html(activationItems.getFormatedCurrency(activationItems.getModel('financialData').get('grossIncome')));

		$(refs.housingpayment).html(activationItems.getFormatedCurrency(activationItems.getModel('personalData2_Address').get('housingpayment')));

    	$(refs.nameTitle).html(activationItems.getNameTitleByValue(activationItems.getModel('personalData').get('title')));

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
        WICI.BreadcrumbsHelper.assembleBreadcrumbs(6, $screenContainer, activationItems);
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
            isNotEmployee: activationItems.getModel('loginScreen').get('employerID') !== 'e'
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
        $.subscribe("translatorFinished",function(){
        	showBirthDateSupCard();
        });
        $.subscribe("translatorFinished",function(){
        	showSignDateSignModel();
        });
        $.subscribe('translatorFinished', function(event) {
			console.log(refs.grossIncome + 'subscribe(translatorFinished)');

			$(refs.grossIncome).html(activationItems.getFormatedCurrency(activationItems.getModel('financialData').get('grossIncome')));
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
            new WICI.PollingController(connectivityController, requestParams, pollResponseReceived, pollFailed).startPolling();
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
        	console.log(logPrefix + sMethod + " isError:" + argResponse.error+ " msg:"+argResponse.msg+ " data: "+argResponse.data);
        
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

		    console.log(logPrefix + sMethod + " appStatus:" + respAn.getAppStatus(argResponse) );

		    //if( argResponse.data.appStatus==="APPROVED" || argResponse.data.appStatus==="DECLINED"){
		    if( respAn.isApprovedResponse(argResponse) || respAn.isDeclinedResponse(argResponse) || (WICI.AppConfig.PendingFeature.TreatPendsLikeDeclines && respAn.isPendingResponse(argResponse)) ){
		    	//activationItems.setAccountApplicationResponse(argResponse);
		    	activationItems.setAccountApplicationResponse(respAn.getWICIResponse(argResponse));
	            flow.next();
	            return;
		    }
		    
		    //if( argResponse.data.appStatus==="PENDING" ){
		    if( !WICI.AppConfig.PendingFeature.TreatPendsLikeDeclines && respAn.isPendingResponse(argResponse) ){
		    	//alert( "Pending logic here");
		    	//activationItems.setAccountApplicationResponse(argResponse);
		    	activationItems.setAccountApplicationResponse(argResponse);
		    	console.log(logPrefix + sMethod + "Pending Page logic here: AppStatus=" + respAn.getAppStatus(argResponse));
		    	if( respAn.isNewResponseType(argResponse))
		    		console.log(logPrefix + sMethod + "New Pending Page Response: RetrievalToken=" + respAn.getRetrievalToken(argResponse) );
		    	hide();
		    	pendingScreen = new WICI.PendingScreenController(activationItems, translator, messageDialog, flow);
		    	pendingScreen.init(flow,"ShowOnly");
		    	pendingScreen.show();
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
