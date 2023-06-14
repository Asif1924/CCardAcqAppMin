ensureNamespaceExists();

WICI.TrainingModuleAttestationScreenController = function (activationItems, argTranslator, argMessageDialog) {
    var logPrefix = '[WICI.TrainingModuleAttestationScreenController]::';
    var $screenContainer = $("#AttestTrainingScreen");
    var screenname = "AttestTrainingScreen_PageContents";
    var translator = argTranslator;
    var messageDialog = null;
    var isDebugMode;
    // VZE-107
    var signatureControl;
    var validateNameFields = true;
    var signaturevalidation = false;
    var validateOtherStaff = false;
    var isCustomerSignatureDiloge = false;
    var saveAttestationFlag = false;
    var saveAttestTrainingResponse = null;

    this.show = show;
    this.init = init;
    this.hide = hide;
    var selectedProvince = "";

    var flow = null;
    var self = this;

    var loginModel = activationItems.getModel('loginScreen');
    var trainingModule = activationItems.getModel('trainingModuleScreen');
    var fistName = "";
    var lastName = "";
    var storeLocationNumber = "";
    var employeerNumberID = "";
    var contentVersion = "";
    var retailNetWork = "";


    this.syncUserData = syncUserData;
    var refs = {
        businessStoreNo: '#locationNumberTextField2',
        firstName: '#firstNameTextField2',
        lastName: '#lastNameTextField2',
        employeeNumberId: '#employeeNumberIDTextField2',
        attestButtonId: '#attestTrainingScreen_next',
        signatureArea: '#attest_training_completion',
        signature: '#signatureOfTrainee',
        signature_trainee: '#attestScreen_SignatureContainer',
        resetSignature: '#signature_Reset_Button_attest_Screen',
        atestScreenLanguage_choser: '#attestTrainingScreen_LanguageButton',
        emailArea: '#employeeEmailArea',
        email: '#EmailAddress_TextField',
        attestTrainingSlider: '#attestTrainingSlider',
        attestTraining_yes: '#attestTraining_yes',
        attestTraing_no: '#attestTraining_no',
        attestToggleArea: '#OtherStaff_TitleAreaYesNO'
    };

    var model = new WICI.BaseModel({
        name: 'AttestTrainingScreen',
        refs: refs,
        data: [
           // { name: 'email', value: null, validation: { type: 'emailAttest', message: '', group: [1] } },
            { name: 'businessStoreNo', value: null, validation: { type: 'presence', message: '', matcher: /^[a-zA-Z0-9]{1,5}$/, group: [1] } },
            { name: 'firstName', value: null, validation: { type: 'format', message: '', matcher: /^[a-zA-Z]{1,30}$/, group: [2] } },
            { name: 'lastName', value: null, validation: { type: 'format', message: '', matcher: /^[a-zA-Z]{1,30}$/, group: [2] } },
            { name: 'employeeNumberId', value: null, validation: { type: 'format', message: '', group: [1], matcher: /[1-9]{1,9}/, canBeEmpty: true } },
            { name: 'signature_trainee', value: null, validation: { type: 'presence', message: '', group: [2] } },
            { name: 'userSignatureAttest', value: null, validation: { type: 'presence', message: 'signatureScreen_validation_signature' } },
            { name: 'saveAttestationFlag', value: null, validation: null, notField: true },
            { name: 'userSignatureNativeAttest', value: null, validation: null },
            { name: 'attestTraining', value: null, validation: null }
        ]
    });
    this.innerModel = model;
    // ---------------------------------------------------------------------------------------
    function init(argFlow) {
        var sMethod = 'init() ';
        console.log(logPrefix + sMethod);
        translator = argTranslator;
        // Create app language instance
        if (translator) {
            app.language = new WICI.AppLanguage();
            app.language.init(translator);
        } else {
            console.log(logPrefix + ' ERROR: Translator is NULL');
        }
        flow = argFlow;
        translator = argTranslator;
        messageDialog = argMessageDialog; // (AA)Dependency Injection
        // Principle: Allows for proper unit
        connectivityController = new WICI.ConnectivityController(new WICI.ConnectionStatus(), messageDialog, translator, WICI.AppConfig.ConnectivityConfig);
        connectivityController.init();

        initModel();
        createView();
        bindEvents();
        createSlider();
        createAttestTrainingFlips();
        deActivateAttestButton();
        setToggleLanguageSlider(translator.getCurrentLanguageFSDPFormat());

        fistName = activationItems.getModel('loginScreen').get('firstName').toUpperCase();
        lastName = activationItems.getModel('loginScreen').get('lastName').toUpperCase();
        storeLocationNumber = activationItems.getModel('loginScreen').get('businessStoreNo');
        retailNetWork = activationItems.getModel('loginScreen').get('retailNetWork');
        contentVersion = activationItems.getModel('trainingModuleScreen').get('trainingContentVersion');

        $(refs.businessStoreNo).replaceWith(storeLocationNumber);
        $(refs.firstName).replaceWith(fistName);
        $(refs.lastName).replaceWith(lastName);

        var checkrow = activationItems.getModel('loginScreen').get('retailNetWork');
        if (checkrow == "MARKS") {
            $(refs.employeeNumberId).closest('tr').removeClass('hidden');
            $(refs.employeeNumberId).replaceWith(activationItems.getModel('loginScreen').get('employeeNumberId'));
        }
        if (checkrow == "SPORTS") {
            $(refs.employeeNumberId).closest('tr').removeClass('hidden');
            $(refs.employeeNumberId).replaceWith(activationItems.getModel('loginScreen').get('employeeNumberId'));
        }
        if (checkrow == "PHL") {
            $(refs.employeeNumberId).closest('tr').removeClass('hidden');
            $(refs.employeeNumberId).replaceWith(activationItems.getModel('loginScreen').get('employeeNumberId'));
        }

    }
    // ---------------------------------------------------------------------------------------
    function initModel() {
        // Get model from the store
        var currentModel = activationItems.getModel(model.name);
        if (!currentModel) {
            activationItems.addModel(model);
        } else {
            model = currentModel;
        }
    }
    function createAttestTrainingFlips() {
        var sMethod = 'createAttestTrainingFlips() ';
        console.log(logPrefix + sMethod);
        $(refs.attestTraining_yes).text(translator.translateKey("yes"));
        $(refs.attestTraing_no).text(translator.translateKey("no"));
        $(refs.attestTrainingSlider).slider();
    }
    //----------------------------------------------------------------------------------------
    function createSlider() {
        $(refs.atestScreenLanguage_choser).slider();
    }
    //---------------------------------------------------------------------------------------
    function setToggleLanguageSlider(language) {
        console.log('setToggleLanguageSlider : ' + language);
        $(refs.atestScreenLanguage_choser).val(language);
        $(refs.atestScreenLanguage_choser).slider("refresh");
    }
    // ---------------------------------------------------------------------------------------
    function show() {
        $screenContainer.show();
        translator.run("AttestTrainingScreen");
        translator.run();
        // Initialize signature if it not jet initialized
        if (!signatureControl) {
            // This is the part where jSignature is initialized.
            signatureInit();

            $(refs.signature).bind('change', onSignatureChaged);
        }
    }
    function deActivateAttestButton() {
        // Check if apply button is disabled
        var isActive = $(refs.attestButtonId).hasClass('greenflat');
        // If Apply button is disabled make it enabled
        if (isActive) {
            showGrayAttestButton();
            // Unbind with click event
            //$(refs.attestButtonId).unbind("click");
        };
    }

    function activateAttestButton() {
        // Check if apply button is disabled
        var isActive = $(refs.attestButtonId).hasClass('greenflat');
        // If Apply button is disabled make it enabled
        if (!isActive) {
            showGreenAttestButton();
            // Unbind with click event            
            //$(refs.attestButtonId).bind("click", function () {
            //    invokeSaveAttestation(storeLocationNumber, fistName, lastName, ($(refs.signature).jSignature('getData', 'native').length > 0 ? 'data:' + $(refs.signature).jSignature('getData', 'image').join(',') : null), employeerNumberID, contentVersion, handleSuccessfulAttestTrainingRequest, failedAttestTraining);
                //showNextScreen();
            //});            
        };
    }    
    // ---------------------------------------------------------------------------------------
    function showGreenAttestButton() {
        $(refs.attestButtonId).removeClass('grayflat');
        $(refs.attestButtonId).addClass('greenflat');
    }
    function showGrayAttestButton() {
        $(refs.attestButtonId).removeClass('greenflat');
        $(refs.attestButtonId).addClass('grayflat');
    }
    // ---------------------------------------------------------------------------------------
    function hide() {
        $screenContainer.hide();
    }
    // ---------------------------------------------------------------------------------------
    function createView() {
        $screenContainer.empty();
        $(refs.attestToggleArea).hide();
        assembleNavigationBarAtTop();
        //WICI.BreadcrumbsHelper.assembleBreadcrumbs(3, $screenContainer, activationItems);
        assemblePageHTML($screenContainer, "#AttestTrainingScreen-template");
        $screenContainer.addClass("breadcrumbPadding");
        $(refs.emailArea).hide();
    }

    // ---------------------------------------------------------------------------------------
    function assembleNavigationBarAtTop() {
        $("#pageHeaderTrainingModule-template").template("pageHeader");
        $.tmpl("pageHeader", {
            "previousButtonId": "attestTrainingScreen_PrevButton",
            "languageButtonId": "attestTrainingScreen_LanguageButton",
        }).appendTo("#AttestTrainingScreen");
    }
    // ---------------------------------------------------------------------------------------
    function assemblePageHTML($element, templateName) {
        $(templateName).tmpl({
            activationItems: activationItems,
            isNotEmployee: activationItems.getModel('loginScreen').get('employerID').toUpperCase !== 'E',
        }).appendTo($element);
    }

    //---------------------------------------------------------------------------------------
    function signatureInit() {
        if (model.get('userSignatureNativeAttest')) {
            signatureControl = $(refs.signature).jSignature({
                'signatureLine': true
            });
            $(refs.signature).jSignature('setData',
                model.get('userSignatureNativeAttest'), 'native');
            onSignatureChaged();
        } else {
            // This is the part where jSignature is initialized.
            signatureControl = $(refs.signature).jSignature();
        }
    }
    // ---------------------------------------------------------------------------------------
    function bindEvents() {
        var sMethod = 'bindEvents() ';
        console.log(logPrefix + sMethod);
        createAttestTrainingFlips();

        $(refs.attestButtonId).click(function () {
            console.log(logPrefix + sMethod + "finishButtonId : click attest ");
            console.log("clicked attest");
            var signatureData = $(refs.signature).jSignature('getData', 'native').length > 0 ? 'data:' + $(refs.signature).jSignature('getData', 'image').join(',') : null;
            invokeSaveAttestation(retailNetWork,storeLocationNumber, fistName, lastName, signatureData, employeerNumberID, contentVersion, handleSuccessfulAttestTrainingRequest, failedAttestTraining);
            //showNextScreen();
        });

        $('.attestTrainingScreen_PrevButton').click(function () {
            showPrevScreen();
        });

        // $(refs.email).keyup((function () {
        //     signaturevalidation = true;
        //     validateEmail = true;
        //     setTimeout(function () {
        //         validateFields();
        //     }, 1000)
        // }));

        $(refs.atestScreenLanguage_choser).on("change", function () {
            translator.toggleLanguage(true);
            app.language.setLanguage(translator.getCurrentLanguageFSDPFormat());
            createAttestTrainingFlips();
        });

        $(refs.attestTrainingSlider).on("change", function () {
            var sliderValue = $(refs.attestTrainingSlider + ' ' + 'option:selected').val();
            model.set('attestTraining', sliderValue);
        });
        $.subscribe('translatorFinished', function () {
            $(refs.attestTrainingSlider).slider("refresh");
            createAttestTrainingFlips();
        });
        app.flowController.bindSettingsButtonEvent();

    }
    // ---------------------------------------------------------------------------------------
    function handleSuccessfulAttestTrainingRequest(argResponse) {
        var sMethod = 'handleSuccessfulAttestTrainingRequest() ';
        console.log(logPrefix + sMethod);
        if (!argResponse.error) {
            try {
                model.set('saveAttestationFlag', true);
                saveAttestTrainingResponse = argResponse;
                console.log(logPrefix + sMethod + "saveAttestTrainingResponse : " + JSON.stringify(saveAttestTrainingResponse));
            } catch (e) {
                console.log(logPrefix + sMethod + "Exception : " + e);
            }
        } else {
            model.set('saveAttestationFlag', false);
        }
        $.when(messageDialog.info(translator.translateKey("attestationScreen_ConfirmDialogAttestationDone"),translator.translateKey("attestationScreen_ConfirmDialogTitle"), $.noop)).then(finishAttestationFlow());        
    }
 
    // ---------------------------------------------------------------------------------------
    function failedAttestTraining(argResponse) {
        var sMethod = 'handleSuccessfulAttestTrainingRequest() ';
        console.log(logPrefix + sMethod);
        new WICI.LoadingIndicatorController().hide();
    }
    // ----------------------------------------------------------------------------------------
    function syncUserData() {
        var sMethod = 'syncUserData() ';
        console.log(logPrefix + sMethod);
        model.set('businessStoreNo', activationItems.getModel('loginScreen').get('businessStoreNo'));
        model.set('firstName', activationItems.getModel('loginScreen').get('firstName').toLowerCase());
        model.set('lastName', activationItems.getModel('loginScreen').get('lastName').toLowerCase());
        model.set('employeeNumberId', activationItems.getModel('loginScreen').get('employeeNumberId'));
        model.set('signature_trainee', $(refs.signature).jSignature('getData', 'native').length > 0 ? 'data:' + $(refs.signature).jSignature('getData', 'image').join(',') : null);
        model.set('userSignatureAttest', $(refs.signature).jSignature('getData', 'native').length > 0 ? 'data:' + $(refs.signature).jSignature('getData', 'image').join(',') : null);
        model.set('userSignatureNativeAttest', $(refs.signature).jSignature('getData', 'native'));
        var sliderValue = $(refs.attestTrainingSlider + ' ' + 'option:selected').val();
        model.set('attestTraining', sliderValue);
        var emailValue = $(refs.email).val();
        console.log(logPrefix + sMethod + " emailValue : " + emailValue);
        model.set('email', emailValue);
        console.log(logPrefix + sMethod + ' model data: \n' + model.toString());

    }
    // ---------------------------------------------------------------------------------------

    function validateFields() {
        var sMethod = 'validateFields() ';
        console.log(logPrefix + sMethod);
        syncUserData();
        rez = [];
        if (app.validationsOn) {
            app.validationDecorator.clearErrArrtibute();
            if (validateNameFields) {
                var rez2 = model.validate(2);
                app.validationDecorator.applyErrAttribute(rez2);

                //if (rez.length == 0 && rez2.length == 0) {
                if ( rez2.length == 0) {
                    showGreenAttestButton();
                    // $(refs.attestButtonId).bind("click", function () {
                    //     invokeSaveAttestation(storeLocationNumber, fistName, lastName, ($(refs.signature).jSignature('getData', 'native').length > 0 ? 'data:' + $(refs.signature).jSignature('getData', 'image').join(',') : null), employeerNumberID, contentVersion, handleSuccessfulAttestTrainingRequest, failedAttestTraining);
                    //     showNextScreen();
                    // });
                }
                else {
                    deActivateAttestButton();
                }
            }
        }
    }
    //---------------------------------------------------------------------------------------
    function invokeSaveAttestation(argRetailNetwork,argStoreLocationNumber, argFirstName, argLastName, argSignature, argEmployeeNumber, argTrainingContentVersion, argSuccessCallback, argFailureCallback) {
        var sMethod = 'invokeSaveAttestation() ';
        console.log(logPrefix + sMethod);
        connectivityController.SaveTrainingAttestation(argRetailNetwork,argStoreLocationNumber, argFirstName, argLastName, argSignature, argEmployeeNumber, argTrainingContentVersion, argSuccessCallback, argFailureCallback);
    }

    // ---------------------------------------------------------------------------------------
    function showPrevScreen() {
        var sMethod = 'showPrevScreen() ';
        console.log(logPrefix + sMethod);
        flow.back();        
    }

    // ---------------------------------------------------------------------------------------
    function finishAttestationFlow() {
        var sMethod = 'showNextScreen() ';
        console.log(logPrefix + sMethod);


        syncUserData();
        app.abandonApplicationTriggerActionService.start();
        logout();

        //app.flow.back();
        //app.flow.back();
        //app.flow.back();
    }    
    //----------------------------------------------------------------------------------------
    function logout() {
        app.flowController.logOut(self);
    }
    //---------------------------------------------------------------------------------------
    function onSignatureChaged(e) {
        var sMethod = 'onSignatureChaged() ';
        console.log(logPrefix + sMethod);
        if ($(refs.signature).jSignature('getData', 'native').length > 0) {
            $(refs.resetSignature).removeClass('grayflat');
            $(refs.resetSignature).addClass('blackflat');
            $(refs.resetSignature).bind('click', onResetSignature1Clicked);
        }
        model.set('userSignatureNativeAttest', $(refs.signature).jSignature('getData', 'native'));
        activateAttestButton();
    }
    //---------------------------------------------------------------------------------------
    function onResetSignature1Clicked() {
        var sMethod = 'onResetSignatureClicked() ';
        console.log(logPrefix + sMethod);
        // Clear canvas
        //  $(refs.signature).jSignature('reset');
        $(refs.signature).jSignature('setData', [], 'native');
        $(refs.resetSignature).removeClass('darkgrayflat');
        $(refs.resetSignature).addClass('grayflat');
        $(refs.resetSignature).unbind('click', onResetSignature1Clicked);
        deActivateAttestButton();
    }
    // ---------------------------------------------------------------------------------------
};
