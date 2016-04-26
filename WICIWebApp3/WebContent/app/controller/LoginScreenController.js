ensureNamespaceExists();

WICI.LoginScreenController = function(app) {
    var logPrefix = '[WICI.LoginScreenController]::';
    var $screenContainer = $("#WICILoginScreen");
    var translator = null;
    var messageDialog = null;

    var creditCardData = null;
    var connectivityController = null;
    var testPrintFailedAttempts = null;

    var validateNameFields = false;

    var latestDictionary = null; //dictionaryInfo

    this.show = show;
    this.hide = hide;
    this.init = init;

    this.syncUserData = syncUserData;


    var refs = {
        employerID: '#employerIDTextField',
        //userID            : '#userIDTextField',
        agentID: '#agentIDTextField',
        //passwordFieldID : '#passwordTextField',
        locationFieldID: '#locationNumberTextField',
        firstName: '#firstNameTextField',
        lastName: '#lastNameTextField',

        loginButtonID: '#loginScreen_LoginButton',
        CTFSLogo: '#CTFSLogo',
        language_choser: '#language_choser',
        logoType: '#CTFSLogo',
        testPrintButtonID: '#loginScreen_TestPrintButton'
    };

    var model = new WICI.BaseModel({
        name: 'loginScreen',
        refs: refs,
        data: [{
            name: 'employerID',
            value: null,
            validation: {
                type: 'format',
                message: '',
                matcher: /^[a-zA-Z0-9]{1}$/,
                group: [1]
            }
        }, {
            name: 'firstName',
            value: null,
            validation: {
                type: 'format',
                message: '',
                matcher: /^[a-zA-Z]{1,30}$/,
                group: [2]
            }
        }, {
            name: 'lastName',
            value: null,
            validation: {
                type: 'format',
                message: '',
                matcher: /^[a-zA-Z]{1,30}$/,
                group: [2]
            }
        },
            //{name: 'userID',                              value: null, validation: {type: 'presence',     message: '',      group: [1]} },
            //{notField:true, name: 'passwordFieldID',          value: null, validation: {type: 'presence',     message: '',      group: [1]} },
            {
                name: 'locationFieldID',
                value: null,
                validation: {
                    type: 'presence',
                    message: '',
                    group: [1]
                }
            }, {
                name: 'agentID',
                value: null,
                validation: {
                    type: 'format',
                    message: '',
                    matcher: /^[a-zA-Z0-9]{1,8}$/,
                    group: [1]
                }
            }, {
                notField: true,
                name: 'userLocationResponse',
                value: null,
                validation: null
            }
        ]
    });
    this.innerModel = model;
    // ---------------------------------------------------------------------------------------
    function init(argTranslator, argMessageDialog) {
        var sMethod = 'init() ';
        console.log(logPrefix + sMethod);

        translator = argTranslator;
        messageDialog = argMessageDialog;

        // Create app language instance
        if (translator) {
            app.language = new WICI.AppLanguage();
            app.language.init(translator);
        } else {
            console.log(logPrefix + ' ERROR: Translator is NULL');
        }

        // Create app version instance
        //app.apkVersionHelper = new WICI.AppAPKVersionHelper();
        //app.apkVersionHelper.init();

        connectivityController = new WICI.ConnectivityController(new WICI.ConnectionStatus(), messageDialog, translator, WICI.AppConfig.ConnectivityConfig);
        connectivityController.init();
        createView();
        createSlider();
        bindEvents();

        setToggleLanguageSlider(translator.getCurrentLanguageFSDPFormat());
        setFrenchlogo();

    }

    function setFrenchlogo() {
        if (!translator.currentLanguageEnglish()) {
            //translator.changeLogoToFrench();
            app.translationExtender.changeLogoToFrench();
        }
    }
    // ---------------------------------------------------------------------------------------
    function syncUserData() {
        var sMethod = 'syncUserData() ';
        console.log(logPrefix + sMethod);
        model.set('employerID', $(refs.employerID).val().toUpperCase());
        //model.set('userID', $(refs.userID).val());
        model.set('agentID', $(refs.agentID).val().toLowerCase());
        //model.set('passwordFieldID', $(refs.passwordFieldID).val());
        model.set('locationFieldID', $(refs.locationFieldID).val().toLowerCase());

        if (validateNameFields) {
            model.set('firstName', $(refs.firstName).val().toLowerCase());
            model.set('lastName', $(refs.lastName).val().toLowerCase());
        }

        console.log(logPrefix + sMethod + ' model data: \n' + model.toString());
    }

    function show() {
        $screenContainer.show();

        //      // Create app language instance
        //      app.language = new WICI.AppLanguage();
        //      app.language.init(translator);

        translator.run("WICILoginScreen");
    }

    function hide() {
        $screenContainer.hide();
    }

    function createView() {
        $screenContainer.empty();
        assembleTitleHTML($screenContainer, "#WICILoginScreen-template");

        $(refs.locationFieldID).autoNumeric('init', {
            aSign: '',
            vMin: '0',
            vMax: '9999',
            mDec: '0',
            aSep: ''
        });
       }

    function createSlider() {
        $(refs.language_choser).slider();
    }

    function setToggleLanguageSlider(language) {
        console.log('setToggleLanguageSlider : ' + language);
        $(refs.language_choser).val(language);
        $(refs.language_choser).slider("refresh");
    }

    function assembleTitleHTML($element, templateName) {
        var html = $(templateName).tmpl();
        $element.prepend(html);
    }

    function bindEvents() {
        var sMethod = 'bindEvents() ';
        console.log(logPrefix + sMethod);

        $(refs.loginButtonID).click(function() {
            generateAgentId();
            invokeLogin($(refs.employerID).val().toUpperCase(), $(refs.agentID).val(), "", "", $(refs.locationFieldID).val(), $(refs.firstName).val(), $(refs.lastName).val(), app.apkVersionHelper.getAPKVersion(), handleSuccessfulLoginRequest, failedLogin);
        });

        $(refs.testPrintButtonID).click(new WICI.TestPrintHelper(translator, messageDialog).testPrint);

        $(refs.CTFSLogo).on('taphold', showVersions);
        /*Added by DPS**********************/

        $(refs.language_choser).on("change", function() {
            translator.toggleLanguage(true);
            app.language.setLanguage(translator.getCurrentLanguageFSDPFormat());
        });
        /****************************/

        // listen to the EmployerId blur
        $(refs.employerID).on('input', employerIdChanged);
    }

    function generateAgentId() {
        var agentId = {},
            employerId = $(refs.employerID).val().toUpperCase();

        if (employerId === 'E') {
            agentId.firstName = getFirstFourChars($(refs.firstName).val());
            agentId.lastName = getFirstFourChars($(refs.lastName).val());

            if (agentId.firstName && agentId.lastName) {
                agentId = agentId.firstName + agentId.lastName;

                $(refs.agentID).val(agentId);
            }
        }
    }

    function getFirstFourChars(string) {
        return string.length > 0 && string.slice(0, 4);
    }

    function employerIdChanged(e) {
        switch (e.target.value.toUpperCase()) {
            case 'E':
                changeFormForEmployer();
                validateNameFields = true;
                break;
            default:
                resetForm();
                validateNameFields = false;
        }
    }

    function resetForm() {
        var firstNameRow = $(refs.firstName).closest('tr'),
            lastNameRow = $(refs.lastName).closest('tr'),
            agentIdRow = $(refs.agentID).closest('tr');

        if (agentIdRow.hasClass('hidden')) {
            $(refs.agentID).closest('tr').removeClass('hidden');
        }

        if (!firstNameRow.hasClass('hidden')) {
            firstNameRow.addClass('hidden');
        }

        if (!lastNameRow.hasClass('hidden')) {
            lastNameRow.addClass('hidden');
        }
    }

    function changeFormForEmployer() {
        //hideAgentIdField
        $(refs.agentID).closest('tr').addClass('hidden');
        //showNameFields
        $(refs.firstName).closest('tr').removeClass('hidden');
        $(refs.lastName).closest('tr').removeClass('hidden');
    }

    function showVersions() {
        var constructedMessage = "WebApp Version = " + WICI.version + "<br>";
        constructedMessage += "APK Version = " + app.apkVersionHelper.getAPKVersion() + "<br>";
        constructedMessage += "Device Info = { MfgSerial : " + app.deviceInfoHelper.getDeviceInfo().MfgSerial + ", BuildSerial : " + app.deviceInfoHelper.getDeviceInfo().BuildSerial + " } <br>";
        constructedMessage += "Physical Server = " + WICI.physicalserverURL + "<br>";
        constructedMessage += "Middleware = " + WICI.middlewareName + "<br>";
        constructedMessage += "Web Application = " + WICI.thisWebappName + "<br>";
        constructedMessage += "Dictionary Version = " + WICI.LocalStorageHelper(window).getVersion("unversioned") + "<br>";

        messageDialog.info(constructedMessage, "Versions Information", $.noop);
        console.log(constructedMessage);
    }

    // ---------------------------------------------------------------------------------------
    function invokeLogin(argEmployerID, argAgentID, user, password, locationID, argFirstName, argLastName, apkVersion, argSuccessCB, argFailureCB) {
        var sMethod = 'invokeLogin() ';
        console.log(logPrefix + sMethod);

        function checkDemoCredentials (curCredentials, account) {
            for (var prop in curCredentials) if (curCredentials.hasOwnProperty(prop)) {
                if (curCredentials[prop] && account[prop]) {
                    if (account[prop] instanceof Array) {
                        if (account[prop].indexOf(curCredentials[prop]) === -1) {
                            return false ;
                        }
                    } else {
                        if (curCredentials[prop].toLowerCase() !== account[prop].toLowerCase()) {
                            return false;
                        }
                   }
                }
            }
            return true;
        }

        function checkDemoMode(curCredentials, demoCredentials) {
            var rez;
            for (var account in demoCredentials) if (demoCredentials.hasOwnProperty(account)) {
                rez = true;
                rez = checkDemoCredentials(curCredentials, demoCredentials[account]);
                if (rez) {
                    return true;
                }
            }
            return false;
        }


        syncUserData();
        if (app.validationsOn) {
            app.validationDecorator.clearErrArrtibute();

            var rez = model.validate(1);
            app.validationDecorator.applyErrAttribute(rez);

            if (validateNameFields) {
                var rez2 = model.validate(2);
                app.validationDecorator.applyErrAttribute(rez2);

                if (rez.length > 0 || rez2.length > 0) {
                    return;
                }
            } else if (rez.length > 0) {
                return;
            }
        }
        /*
         var isDemoMode = (user.toLowerCase() === WICI.AppConfig.DemoUserCredentials.login &&
         password.toLowerCase() === WICI.AppConfig.DemoUserCredentials.password &&
         locationID === WICI.AppConfig.DemoUserCredentials.locationID);
         */
        var credentials = {
            employerID: argEmployerID,
            agentID: argAgentID,
            firstName: argFirstName,
            lastName: argLastName
        };
        var isDemoMode = checkDemoMode(credentials, WICI.AppConfig.DemoCredentials);

        app.setDemoMode(isDemoMode);


        /*
         var isBypassMode = (user.toLowerCase() === WICI.AppConfig.AdminBypassCredentials.login &&
         password.toLowerCase() === WICI.AppConfig.AdminBypassCredentials.password
         );
         */
        var isBypassMode = checkDemoCredentials(credentials, WICI.AppConfig.DemoCredentials.admin);

        if (isBypassMode) {
            //console.log(logPrefix + sMethod   + " WARNING! BYPASS CODE IS USED!!!");
            model.set('userID', 'epamfmr');
            model.set('passwordFieldID', 'epamfmr');

            new WICI.LoadingIndicatorController().show();
            handleLookupYes();
            checkForPrintSetupWarning();
            return;
        }

        if (!connectivityController.Login) {
            failedLogin();
            return;
        }

        new WICI.LoadingIndicatorController().show();

        if (apkVersion == null || apkVersion === undefined) {
            messageDialog.error( translator.translateKey("incorrect_Apk_Version_Dialog"), translator.translateKey("errorDialog_defaultTitle"), navigator.app.exitApp);
        }

        connectivityController.Login(argEmployerID, argAgentID, user, password, locationID, apkVersion, argSuccessCB, argFailureCB);

        if (WICI.AppConfig.BluetoothConfig.TOGGLEBT_AT_LOGIN === true) {
            WICI.BluetothHelper.toggle();
        }
    }
    // ---------------------------------------------------------------------------------------
    function handleSuccessfulLoginRequest(argResponse) {
        var sMethod = 'handleSuccessfulLoginRequest() ';
        console.log(logPrefix + sMethod);
    	
        var loginHelper = new WICI.LoginResponseHelper();
        loginHelper.setLoginResponseObject(argResponse);

        //var userLocationResponse = null;
        if (argResponse.data) {
            //userLocationResponse = argResponse.data.checkLocation;
            // Save account profile info
            app.accountProfileHelper.initialize(argResponse.data.roles);
        }

        if (loginHelper.loginSuccessful()) {
            if (!app.getDemoMode()) {
            	
            	if( loginHelper.getPendRetrievalConfig() )
            		WICI.AppConfig.PendingFeature.MaxRetrievalsForApproved = loginHelper.getPendRetrievalConfig().MaxRetrievalsForApproved;
            	
            	console.log(logPrefix + sMethod + "-WICI.AppConfig.PendingFeature.MaxRetrievalsForApproved=" + WICI.AppConfig.PendingFeature.MaxRetrievalsForApproved);
            	
                $.when.apply(null, retrieveLatestDictionary(argResponse)).always(function() {
                    respondToUserLocationLookup(argResponse);
                });
            } else {
                respondToUserLocationLookup(argResponse);
            }

        } else if (loginHelper.incorrectApkVersion() && navigator.app) {
            //actual version of apk is incorrect
            messageDialog.error(translator.translateKey("incorrect_Apk_Version_Dialog"), translator.translateKey("errorDialog_defaultTitle"), navigator.app.exitApp);
        } else {
            failedLogin(argResponse);
        }
    }

    function retrieveLatestDictionary(argResponse, argCallBack ) {

        //new WICI.LoadingIndicatorController().show();

        var dictionaryInfoHelper = new WICI.DictionaryInfoHelper(argResponse.data.dictionaryInfo);

        //var dictionaryLoadingHelper = new WICI.DictionaryLoadingHelper(messageDialog, translator, dictionaryInfoHelper.getLatestDictionaryInfo());
        var dictionaryLoadingHelper = new WICI.DictionaryLoadingHelper(app.messageDialog, app.translator, dictionaryInfoHelper.getLatestDictionaryInfo(argResponse.data.dictionaryInfo), WICI);

        //dictionaryLoadingHelper.determineUpdateDictionaryOrQuit();
        return dictionaryLoadingHelper.determineUpdateDictionaryOrQuit();
    }

    // ---------------------------------------------------------------------------------------
    function failedLogin(argResponse) {
        var loginHelper = new WICI.LoginResponseHelper();
        loginHelper.setLoginResponseObject(argResponse);

        new WICI.LoadingIndicatorController().hide();
        //messageDialog.error( translator.translateKey("loginScreen_FailureMessage"), translator.translateKey("loginScreen_Dialog_ErrorTitle"), enableLoginCredentialsFieldsAndFocusAgentIDField);
        messageDialog.error(translator.translateKey(loginHelper.getBundleCodeForErrorMessage()), translator.translateKey("loginScreen_Dialog_ErrorTitle"), enableLoginCredentialsFieldsAndFocusAgentIDField);
    }
    // ---------------------------------------------------------------------------------------
    function respondToUserLocationLookup(argResponse) {
        var userLocationResponse = argResponse.data.checkLocation;
        if (userLocationResponse) {
            var locationHelper = new WICI.UserLocationResponseHelper();

            locationHelper.setUserLocationResponseObject(userLocationResponse);

            var outletStreet = locationHelper.getOutletStreet();
            var outletCity = locationHelper.getOutletCity();
            var outletProvince = locationHelper.getOutletProvince();
            var outletPostal = locationHelper.getOutletPostal();

            var constructedMessage = translator.translateKey("loginScreen_UserLookup_ConfirmMessage");
            constructedMessage += "<br>";
            constructedMessage += "<br>";
            constructedMessage += outletStreet.trim() + "<br>";
            constructedMessage += outletCity.trim() + ", " + outletProvince.trim() + "<br>";
            constructedMessage += outletPostal.trim() + "<br>";
            constructedMessage += "<br>";
            if (app.getDemoMode()) {
                constructedMessage += translator.translateKey("loginScreen_DemoModeAlert").replace(/\n/g, "<br>");
            }

            messageDialog.htmlConfirm(constructedMessage, handleLookupYes, handleLookupNo, translator.translateKey("loginScreen_UserLookupDialog_NormalTitle"));
            model.set('userLocationResponse', userLocationResponse);
        } else {
            handleLookupFailed();
            model.set('userLocationResponse', null);
        }
    }
    // ---------------------------------------------------------------------------------------
    function handleLookupFailed() {
        new WICI.LoadingIndicatorController().hide();
        messageDialog.error(
            translator.translateKey("loginScreen_UserLookup_FailedMessage"),
            translator.translateKey("loginScreen_UserLookupDialog_ErrorTitle"),
            disableLoginCredentialsFieldsAndFocusLocationField);
    }
    // ---------------------------------------------------------------------------------------
    function handleLookupNo() {
        new WICI.LoadingIndicatorController().hide();
        disableLoginCredentialsFieldsAndFocusLocationField();
    }
    // ---------------------------------------------------------------------------------------
    function disableLoginCredentialsFieldsAndFocusLocationField() {
        $(refs.userID).attr('disabled', 'disabled');
        $(refs.agentID).attr('disabled', 'disabled');
        $(refs.passwordFieldID).attr('disabled', 'disabled');
        $(refs.locationFieldID).focus();
    }
    // ---------------------------------------------------------------------------------------
    function enableLoginCredentialsFieldsAndFocusAgentIDField() {
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
        } catch (err) {
            console.log(logPrefix + sMethod + " Intiate ERROR: " + err);
            checkForPrintSetupWarning();
        }
    }
    // ---------------------------------------------------------------------------------------
    function showNextScreen() {
        new WICI.LoadingIndicatorController().hide();



        var locationHelper = new WICI.UserLocationResponseHelper();
        locationHelper.setUserLocationResponseObject(model.get('userLocationResponse'));
        var outletProvince = locationHelper.getOutletProvince();

        $screenContainer.hide();

        creditCardData = new WICI.CreditCardApplicationData();
        creditCardData.addModel(model);
        app.flowController = new WICI.NewCustomerCreditCardAcquisitionFlow(creditCardData, translator, messageDialog);
        app.flowController.start();
        testPrintOnLogin(WICI.AppConfig.TestPrintConfig.TEST_PRINT_ON_LOGIN, app.getDemoMode(), (new WICI.DeviceDetectionHelper).any());
    }
    // ---------------------------------------------------------------------------------------
    function retrievePrinterMacAdrSuccess(result) {
        new WICI.LoadingIndicatorController().hide();

        // Save latest printer mac address
        app.zebraPrinterWrapper.setPrinterMacAddress(result);

        checkForPrintSetupWarning();
    }
    //---------------------------------------------------------------------------------------
    function retrievePrinterMacAdrFailure(error) {
        new WICI.LoadingIndicatorController().hide();

        checkForPrintSetupWarning();
    }
    //---------------------------------------------------------------------------------------
    function checkForPrintSetupWarning() {
        if (!app.accountProfileHelper.isAdminProfile() && !app.zebraPrinterWrapper.verifyPrinterMacAddress()) {
            app.accountProfileHelper.showNoPrinterSetupWarning(function() {
                showNextScreen();
            });
        } else {
            showNextScreen();
        }
    }
    //-------------------------------------------------------------------------------------
    function testPrintOnLogin (isTurnedOn, isDemo, isDevice) {
        //if (isTurnedOn && isDemo && isDevice) {
    	if (isTurnedOn && isDevice) {
            new WICI.TestPrintHelper(translator, messageDialog).testPrint();
        }
    }
};
