ensureNamespaceExists();

WICI.TrainingModuleStartScreenController = function (activationItems, argTranslator, argResponse, argMessageDialog) {
    var logPrefix = '[WICI.TrainingModuleStartScreenController]::';
    var $screenContainer = $("#TrainingModuleStartScreen");
    var screenname = "trainingModuleStartScreen_PageContents";
    var translator = null;

    var messageDialog = null;
    var validateNameFields = true;
    var validateOtherStaff = false;
    var isDebugMode;
    // VZE-107
    var signatureControl;
    var isCustomerSignatureDiloge = false;

    this.show = show;
    this.init = init;
    this.hide = hide;
    var selectedProvince = "";

    var flow = null;
    var self = this;

    var loginModel = activationItems.getModel('loginScreen');

    this.syncUserData = syncUserData;
    var refs = {
        startTrainingButtonID: '#startTrainingScreen_startTraining',
        businessStoreNo: '#locationNumberTextField1',
        firstName: '#firstNameTextField1',
        lastName: '#lastNameTextField1',
        employeeNumberId: '#employeeNumberIDTextField1',
        language_choser: '#language_choser',
        flipStaffMemberYesNo: '#flipStaffMember',
        flipStaffMember_no: '#flipStaffMember_no',
        flipStaffMember_yes: '#flipStaffMember_yes',
        employeeNumberRowId: '#employeeNumberID_Row',
        language_choser: '#trainingModuleStartScreen_LanguageButton',
    };

    var model = new WICI.BaseModel({
        name: 'trainingModuleStartScreen',
        refs: refs,
        data: [
            { name: 'businessStoreNo', value: null, validation: { type: 'presence', message: '', matcher: /^[a-zA-Z0-9]{1,5}$/, group: [1] } },
            { name: 'firstName', value: null, validation: { type: 'format', message: '', matcher: /^[a-zA-Z]{1,30}$/, group: [2] } },
            { name: 'lastName', value: null, validation: { type: 'format', message: '', matcher: /^[a-zA-Z]{1,30}$/, group: [2] } },
            { name: 'employeeNumberId', value: null, validation: { type: 'format', message: '', group: [1], matcher: /[1-9]{1,9}/, canBeEmpty: true } },
            //{ notField: true, name: 'retailNetWork', value: null, validation: { type: 'presence', message: 'RetailNetWork is not selected', group: [1], canBeEmpty: true } },
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
        translator = argTranslator; // (AA)Dependency Injection Principle:
        // Allows for proper unit testing
        messageDialog = argMessageDialog; // (AA)Dependency Injection
        // Principle: Allows for proper unit
        // testing
        initModel();
        createView();
        bindEvents();
        createSlider();

        setToggleLanguageSlider(translator.getCurrentLanguageFSDPFormat());
        setFrenchlogo();

        $(refs.businessStoreNo).replaceWith(activationItems.getModel('loginScreen').get('businessStoreNo'));
        $(refs.firstName).replaceWith(activationItems.getModel('loginScreen').get('firstName').toUpperCase());
        $(refs.lastName).replaceWith(activationItems.getModel('loginScreen').get('lastName').toUpperCase());

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

    //----------------------------------------------------------------------------------------
    function setFrenchCTMlogo() {
        if (translator.getCurrentLanguageFSDPFormat() === "F") {
            app.translationExtender.changeCTMLogoToFrench();
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
    // ---------------------------------------------------------------------------------------
    function show() {
        $screenContainer.show();
        translator.run('TrainingModuleStartScreen');
    }
    // ---------------------------------------------------------------------------------------
    function hide() {
        $screenContainer.hide();
    }
    // ---------------------------------------------------------------------------------------
    function createView() {
        $screenContainer.empty();
        assembleNavigationBarAtTop();

        //WICI.BreadcrumbsHelper.assembleBreadcrumbs(1, $screenContainer, activationItems);
        assemblePageHTML($screenContainer, "#TrainingModuleStartScreen-template");
        $screenContainer.addClass("breadcrumbPadding");
    }

    function createSlider() {
        $(refs.language_choser).slider();
    }

    // ---------------------------------------------------------------------------------------
    function assembleNavigationBarAtTop() {
        $("#pageHeaderTrainingModule-template").template("pageHeader");
        $.tmpl("pageHeader", {
            "previousButtonId": "trainingModuleStartScreen_PrevButton",
            "languageButtonId": "trainingModuleStartScreen_LanguageButton",
        }).appendTo("#TrainingModuleStartScreen");

    }
    // ---------------------------------------------------------------------------------------
    function assemblePageHTML($element, templateName) {
        // VZE-107
        $(templateName).tmpl({
            // US3767 
            activationItems: activationItems,
            isNotEmployee: activationItems.getModel('loginScreen').get('employerID').toUpperCase !== 'E',
        }).appendTo($element);
    }
    // ---------------------------------------------------------------------------------------
    function bindEvents() {
        var sMethod = 'bindEvents() ';
        console.log(logPrefix + sMethod);


        $(refs.startTrainingButtonID).click(function () {
            console.log(logPrefix + sMethod + "startTrainingButtonID : click ");
            //Why is validateFields being called from this screen???!?!!!
            //This screen does not give the user the abaility to input
            //any values; it simply carries over the values passed in
            //from the LoginScreen, which have already been validated!!!
            //validateFields();
            showNextScreen();
        });
        $(refs.language_choser).on("change", function () {
            translator.toggleLanguage(true);
            app.language.setLanguage(translator.getCurrentLanguageFSDPFormat());
            createFlips();
            // WICI-83 
            createModuleFlips();
            if (validateOtherStaff) {
                $(refs.flipStaffMemberYesNo).slider("refresh");
            }
            populateNetworkRetailList();
        });

        $('.trainingModuleStartScreen_PrevButton').click(function () {
            logout();

            //AA 10/27/2022
            //This works but gives a blank page which
            //means there's a wiring issue from the start of the flow
            //which makes sense since the start page is null
            //If we want to persist login details after backing out
            //of the training start screen, we'll need to adjust
            //the training flow
            //app.flowController.forceExitFlow(); 
            
        });

        $.subscribe('translatorFinished', function () {

        });
        app.flowController.bindSettingsButtonEvent();
    }
    //----------------------------------------------------------------------------------------
    function logout() {
        app.flowController.logOut(self);
    }
    //----------------------------------------------------------------------------------------
    function syncUserData() {
        var sMethod = 'syncUserData() ';
        console.log(logPrefix + sMethod);
        //model.set('passwordFieldID', $(refs.passwordFieldID).val());

        model.set('businessStoreNo', activationItems.getModel('loginScreen').get('businessStoreNo'));
        model.set('firstName', activationItems.getModel('loginScreen').get('firstName').toLowerCase());
        model.set('lastName', activationItems.getModel('loginScreen').get('lastName').toLowerCase());
        model.set('employeeNumberId', activationItems.getModel('loginScreen').get('employeeNumberId'));

        console.log(logPrefix + sMethod + ' model data: \n' + model.toString());
    }


    function validateFields() {
        var sMethod = 'validateFields() ';
        console.log(logPrefix + sMethod);
        var rez3 = [];
        syncUserData();
        if (app.validationsOn) {
            app.validationDecorator.clearErrArrtibute();

            var rez = model.validate(1);
            app.validationDecorator.applyErrAttribute(rez);
            console.log(logPrefix + sMethod + "validateOtherStaff :: " + validateOtherStaff);
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

        if (rez.length == 0 && rez2.length == 0) {
            showNextScreen();
        }
    }
    function createSlider() {
        $(refs.language_choser).slider();
    }

    function setToggleLanguageSlider(language) {
        console.log('setToggleLanguageSlider : ' + language);
        $(refs.language_choser).val(language);

        $(refs.language_choser).slider("refresh");
        if (validateOtherStaff) {
            $(refs.flipStaffMemberYesNo).slider("refresh");
        }
        createFlips();
    }
    function createFlips() {
        var sMethod = 'createFlips() ';
        console.log(logPrefix + sMethod);
        $(refs.flipStaffMember_no).text(translator.translateKey("no"));
        $(refs.flipStaffMember_yes).text(translator.translateKey("yes"));
        $(refs.flipStaffMemberYesNo).slider();
    }

    //----------------------------------------------------------------------------------------

    function setFrenchlogo() {
        if (!translator.currentLanguageEnglish()) {
            //translator.changeLogoToFrench();
            app.translationExtender.changeLogoToFrench();
        }
    }

    //----------------------------------------------------------------------------------------
    function showNextScreen() {
        var sMethod = 'showNextScreen() ';
        console.log(logPrefix + sMethod);

        syncUserData();
        flow.next();
        //app.abandonApplicationTriggerActionService.start();
    }

};
