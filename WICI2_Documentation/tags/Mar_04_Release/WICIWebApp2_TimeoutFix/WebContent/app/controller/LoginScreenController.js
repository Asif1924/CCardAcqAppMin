ensureNamespaceExists();

WICI.LoginScreenController = function() {
	var logPrefix = '[WICI.LoginScreenController]::';
	var $screenContainer = $("#WICILoginScreen");
	var translator					=	null;
	var messageDialog				=	null;	

	var creditCardData = null;
	var connectivityController = null;
	
	this.show = show;
	this.hide = hide;
	this.init = init;
	
	this.syncUserData = syncUserData;
	

	var refs = {
		employerID		: '#employerIDTextField',
		//userID			: '#userIDTextField',
		agentID			: '#agentIDTextField',
		//passwordFieldID : '#passwordTextField',
		locationFieldID : '#locationNumberTextField',

		loginButtonID	: '#loginScreen_LoginButton',
		CTFSLogo		: '#CTFSLogo'
	};
    
    var model =new WICI.BaseModel({
        name: 'loginScreen',
        refs: refs, 
        data:[
            {name: 'employerID',							value: null, validation: {type: 'format',     message: '',      matcher: /^[a-zA-Z0-9]{1}$/,		group: [1]} },
            //{name: 'userID',							  	value: null, validation: {type: 'presence',     message: '',      group: [1]} },
            //{notField:true, name: 'passwordFieldID',      	value: null, validation: {type: 'presence',     message: '',      group: [1]} },
            {name: 'locationFieldID',       			  	value: null, validation: {type: 'presence',   	message: '',      group: [1]} },
            {name: 'agentID',           				  	value: null, validation: {type: 'format',   	message: '',	matcher: /^[a-zA-Z0-9]{1,20}$/,      group: [1]} },
            {notField:true, name: 'userLocationResponse', 	value: null, validation: null }
       ]
    }); 
    // ---------------------------------------------------------------------------------------
	function init( argTranslator, argMessageDialog) {	
		var sMethod = 'init() ';
		console.log(logPrefix + sMethod);

		translator=argTranslator;
		messageDialog=argMessageDialog;
		
		connectivityController = new WICI.ConnectivityController(new WICI.ConnectionStatus(), messageDialog, translator, WICI.AppConfig.ConnectivityConfig);
		connectivityController.init();
		
		createView();
		bindEvents();		
	}
	// ---------------------------------------------------------------------------------------
    function syncUserData(){
        var sMethod = 'syncUserData() ';
        console.log(logPrefix + sMethod);

        model.set('employerID', $(refs.employerID).val());
        //model.set('userID', $(refs.userID).val());
		model.set('agentID', $(refs.agentID).val());
		//model.set('passwordFieldID', $(refs.passwordFieldID).val());
		model.set('locationFieldID', $(refs.locationFieldID).val());
        
        console.log(logPrefix + sMethod +' model data: \n'+model.toString());
    }	
	function show(){
		$screenContainer.show();		
		translator.run("WICILoginScreen");
	}

	function hide(){
		$screenContainer.hide();
	}
	
	function createView() {
		$screenContainer.empty();
		assembleTitleHTML($screenContainer, "#WICILoginScreen-template");
		
		$(refs.locationFieldID).autoNumeric('init', {aSign:'',vMin:'0', vMax:'9999', mDec:'0', aSep: ''});
		//$(refs.agentID).autoNumeric('init', {aSign:'',vMin:'0', vMax:'99999999999999999999', mDec:'0', aSep: ''});
	}
	
    function assembleTitleHTML($element, templateName) {
		var html = $(templateName).tmpl(); 
		$element.prepend(html);
	}
    // ---------------------------------------------------------------------------------------
	function bindEvents(){
		var sMethod = 'bindEvents() ';
        console.log(logPrefix + sMethod);
        
		$(refs.loginButtonID).click(function(){
			//invokeLogin( $(refs.employerID).val(), $(refs.userID).val(), $(refs.passwordFieldID).val(), $(refs.locationFieldID).val(), handleSuccessfulLoginRequest, failedLogin);			
			invokeLogin( $(refs.employerID).val(), $(refs.agentID).val(), "", "", $(refs.locationFieldID).val(), handleSuccessfulLoginRequest, failedLogin);
			//new WICI.LoadingIndicatorController().show();
			//connectivityController.GetVersion(handleGetVersionSuccess,handleGetVersionFailed,handleGetVersionComplete);
		});
		
		$(refs.CTFSLogo).on('taphold', showVersions );
	}
	
	function showVersions(){
		var constructedMessage = "Version = " + WICI.version + "<br>";
		constructedMessage	+= "Physical Server = " + WICI.physicalserverURL + "<br>";
		constructedMessage	+= "Middleware = " + WICI.middlewareName + "<br>";
		constructedMessage	+= "Web Application = " + WICI.thisWebappName + "<br>";
		
		messageDialog.info(constructedMessage, "Versions Information", $.noop);
		console.log(constructedMessage);
	}
	
	// ---------------------------------------------------------------------------------------
	function invokeLogin( argEmployerID, argAgentID, user, password, locationID, argSuccessCB, argFailureCB ){
		var sMethod = 'invokeLogin() ';
        console.log(logPrefix + sMethod);
        
        syncUserData();
        if (app.validationsOn) {
            app.validationDecorator.clearErrArrtibute();            
            

            var rez = model.validate(1);
            app.validationDecorator.applyErrAttribute(rez);        
            
            if (rez.length > 0 ) {
                return; 
            }
        }
        /*
        var isDemoMode = (user.toLowerCase() === WICI.AppConfig.DemoUserCredentials.login && 
                password.toLowerCase() === WICI.AppConfig.DemoUserCredentials.password &&
                locationID === WICI.AppConfig.DemoUserCredentials.locationID);
        */
        var isDemoMode =   (	
        					argEmployerID.toLowerCase() === WICI.AppConfig.DemoUserCredentials.employerID.toLowerCase() &&
        					argAgentID.toLowerCase() === WICI.AppConfig.DemoUserCredentials.agentID.toLowerCase() &&
                			locationID === WICI.AppConfig.DemoUserCredentials.locationID.toLowerCase()                 			
                			);

        app.setDemoMode(isDemoMode);
        
        /*
        var isBypassMode = (user.toLowerCase() === WICI.AppConfig.AdminBypassCredentials.login && 
                password.toLowerCase() === WICI.AppConfig.AdminBypassCredentials.password
                );
        */        
        var isBypassMode = (
        					argEmployerID.toLowerCase() === WICI.AppConfig.AdminBypassCredentials.employerID.toLowerCase() &&
        					argAgentID.toLowerCase() === WICI.AppConfig.AdminBypassCredentials.agentID.toLowerCase() &&
        					locationID === WICI.AppConfig.AdminBypassCredentials.locationID.toLowerCase()
        					);
        
		if (isBypassMode) {
			//console.log(logPrefix + sMethod	+ " WARNING! BYPASS CODE IS USED!!!");
			model.set('userID', 'epamfmr');
			model.set('passwordFieldID', 'epamfmr');
			
			new WICI.LoadingIndicatorController().show();
			handleLookupYes();
			//checkForPrintSetupWarning ();
			return;
		}
        
		if (!connectivityController.Login){
			failedLogin();
			return;
		}
		
        new WICI.LoadingIndicatorController().show();
		connectivityController.Login(argEmployerID,argAgentID,user,password,locationID,argSuccessCB,argFailureCB);
        //connectivityController.GetVersion(argSuccessCB,argFailureCB);
		
	}
	
	function handleGetVersionSuccess( argResponse ){
		new WICI.LoadingIndicatorController().hide();
		//{"version":"1.0.0.Eclipse.dev"}
		var message = "";
		if(argResponse)
			message = argResponse.version;
		messageDialog.info( message, "Version Success", $.noop());
	}
	
	function handleGetVersionFailed( argXHR, argStatus, argError ){
		new WICI.LoadingIndicatorController().hide();
		//{"version":"1.0.0.Eclipse.dev"}
		var message = "<br>" + argXHR + "<br>" + argStatus + "<br>" + argError + "<br>"; 
		messageDialog.error( message, "Version Fail", $.noop());
	}
	
	function handleGetVersionComplete( argResponse ){
		new WICI.LoadingIndicatorController().hide();
		//{"version":"1.0.0.Eclipse.dev"}
		var message = "";
		if(argResponse)
			message = argResponse.version;
		messageDialog.info( message, "Version Complete", $.noop());
	}
	
	// ---------------------------------------------------------------------------------------
	function handleSuccessfulLoginRequest( argResponse ){	   
		var loginHelper = new WICI.LoginResponseHelper();
		loginHelper.setLoginResponseObject(argResponse);
		
		var userLocationResponse = argResponse.data.checkLocation;
		
		// Save account profile info
        app.accountProfileHelper.initialize(argResponse.data.roles);
		
		if (loginHelper.loginSuccessful()){
			respondToUserLocationLookup( userLocationResponse );		
		}else{
			failedLogin(argResponse);
		}		
	}
	// ---------------------------------------------------------------------------------------
	function failedLogin( argResponse ){
		var loginHelper = new WICI.LoginResponseHelper();
		loginHelper.setLoginResponseObject(argResponse);
		
		new WICI.LoadingIndicatorController().hide();
		//messageDialog.error( translator.translateKey("loginScreen_FailureMessage"), translator.translateKey("loginScreen_Dialog_ErrorTitle"), enableLoginCredentialsFieldsAndFocusAgentIDField);
		messageDialog.error( translator.translateKey(loginHelper.getBundleCodeForErrorMessage()), translator.translateKey("loginScreen_Dialog_ErrorTitle"), enableLoginCredentialsFieldsAndFocusAgentIDField);
	}
	// ---------------------------------------------------------------------------------------	
	function respondToUserLocationLookup( argLookupResponse ){
		
		if( argLookupResponse ){
			var locationHelper = new WICI.UserLocationResponseHelper();
			
			locationHelper.setUserLocationResponseObject(argLookupResponse);
			
			var outletStreet 		= 	locationHelper.getOutletStreet();
			var outletCity 			= 	locationHelper.getOutletCity();
			var outletProvince		=	locationHelper.getOutletProvince();
			var	outletPostal		=	locationHelper.getOutletPostal();
			
			var constructedMessage = translator.translateKey("loginScreen_UserLookup_ConfirmMessage");
			constructedMessage += "<br>";
			constructedMessage += "<br>";
			constructedMessage += outletStreet.trim() + "<br>";
			constructedMessage += outletCity.trim() + ", " + outletProvince.trim() + "<br>";
			constructedMessage += outletPostal.trim() + "<br>";
			constructedMessage += "<br>";
			
			messageDialog.htmlConfirm(constructedMessage, handleLookupYes, handleLookupNo, translator.translateKey("loginScreen_UserLookupDialog_NormalTitle"));
			model.set('userLocationResponse', argLookupResponse);
		}
		else{
			handleLookupFailed();
			model.set('userLocationResponse', null);
		}
	}
	// ---------------------------------------------------------------------------------------
	function handleLookupFailed(){
		new WICI.LoadingIndicatorController().hide();	
		messageDialog.error(
				translator.translateKey("loginScreen_UserLookup_FailedMessage"),
				translator.translateKey("loginScreen_UserLookupDialog_ErrorTitle"),
				disableLoginCredentialsFieldsAndFocusLocationField);
	}
	// ---------------------------------------------------------------------------------------
	function handleLookupNo(){	
	    new WICI.LoadingIndicatorController().hide();
		disableLoginCredentialsFieldsAndFocusLocationField();
	}
	// ---------------------------------------------------------------------------------------
	function disableLoginCredentialsFieldsAndFocusLocationField(){
		$(refs.userID).attr('disabled','disabled');
		$(refs.agentID).attr('disabled','disabled');
		$(refs.passwordFieldID).attr('disabled','disabled');
		$(refs.locationFieldID).focus();
	}
	// ---------------------------------------------------------------------------------------
	function enableLoginCredentialsFieldsAndFocusAgentIDField(){
		$(refs.userID).removeAttr('disabled');
		$(refs.agentID).removeAttr('disabled');
		$(refs.passwordFieldID).removeAttr('disabled');
		$(refs.userID).focus();
	}
	// ---------------------------------------------------------------------------------------
	function handleLookupYes() {
	    var sMethod = 'handleLookupYes()';
        console.log(logPrefix + sMethod);
	    try {
	        // Retrieve latest printer mac address
	        app.zebraPrinterWrapper.getStoredPrinterMacAddress(retrievePrinterMacAdrSuccess, retrievePrinterMacAdrFailure);
	    } catch (err)
	    {
	        console.log(logPrefix + sMethod + " Intiate ERROR: " + err);
	        checkForPrintSetupWarning ();
	    }
	}
	// ---------------------------------------------------------------------------------------
	function showNextScreen() {
        new WICI.LoadingIndicatorController().hide();        
		$screenContainer.hide();
		creditCardData = new WICI.CreditCardApplicationData();
		creditCardData.addModel(model);
		
		//app.creditCardData = new WICI.CreditCardApplication();
		//app.creditCardData.addModel(model);
		app.flowController = new WICI.NewCustomerCreditCardAcquisitionFlow(creditCardData, translator, messageDialog);
		app.flowController.start();		
	}
	// ---------------------------------------------------------------------------------------	
    function retrievePrinterMacAdrSuccess(result) {
        new WICI.LoadingIndicatorController().hide();
        
        // Save latest printer mac address
        app.zebraPrinterWrapper.setPrinterMacAddress(result);
        
        checkForPrintSetupWarning ();
    }
    //---------------------------------------------------------------------------------------
    function retrievePrinterMacAdrFailure(error) {
        new WICI.LoadingIndicatorController().hide();
        
        checkForPrintSetupWarning ();
    }
    //---------------------------------------------------------------------------------------
    function checkForPrintSetupWarning () {
        if (!app.accountProfileHelper.isAdminProfile() && !app.zebraPrinterWrapper.verifyPrinterMacAddress ()) {
            app.accountProfileHelper.showNoPrinterSetupWarning(function() { showNextScreen(); });
        } else {
            showNextScreen();
        }
    }
    //---------------------------------------------------------------------------------------    
};