ensureNamespaceExists();

WICI.PersonalDataScreenController = function(activationItems, argTranslator,
                                             argMessageDialog) {

    var logPrefix = '[WICI.PersonalDataScreenController]::';
    var $screenContainer = $('#PersonalDataScreen');
    var translator = null;
    var messageDialog = null;
    var connectivityController = null;

    var	userPostalCode;
    var userStreetNumber;
    this.show = show;
    this.init = init;
    this.hide = hide;

    var flow = null;
    var addressLookupButton1Enabled = false;
    var addressLookupButton2Enabled = false;

    var $addressLookupButtonClicked = null;
    this.syncUserData = syncUserData;
    var refs = {
        moneyAdvantageContainer :   '#personalData_MyCTMArea',
        loyaltyMembershipNumber :   '#personalData_CTMNumber_TextField',

        placeofissue : '#personalData_PlaceOfIssue_TextField',
        idtype : '#personalData_IDType_TextField',
        idnumbers : '#personalData_IDNumber_TextField',

        title : '#personalData_Title_Group',
        title_MR : '#personalData_MR_RadioButton',
        title_MRS : '#personalData_MRS_RadioButton',
        title_MISS : '#personalData_MISS_RadioButton',
        title_MS : '#personalData_MS_RadioButton',

        firstName : '#personalData_FirstName_TextField',
        initial : '#personalData_Initial_TextField',
        lastName : '#personalData_LastName_TextField',

        birthDate : '#personalData_DateOfBirth_TextField',

        email : '#personalData_EmailAddress_TextField',
        homePhone : '#personalData_HomePhone_TextField',
        cellPhone : '#personalData_CellPhone_TextField',

        correspondence : '#personalData_Correspondence_Group',
        correspondence_eng : '#personalData_English_RadioButton',
        correspondence_fre : '#personalData_French_RadioButton',

        receiveemailArea:'#personalData_ReceiveEmailArea',
        receiveEmail : '#personalData_ReceiveEmail_Group',
        receiveemail_optin : '#personalData_Optin_RadioButton',
        receiveemail_optout : '#personalData_Optout_RadioButton',
        nextButton: ".PersonalDataScreen_NextButton",
        prevButton: ".PersonalDataScreen_PrevButton",
        postalcode:         '#personalData_Address_PostalCode_TextField',
        streetnumber:       '#personalData_Address_StreetNumber_TextField',

        addressline1:       '#personalData_Address_AddressLine1_TextField',
        city:               '#personalData_Address_City_TextField',
        suiteunit:          '#personalData_Address_SuiteUnit_TextField',
        province:           '#personalData_Address_Province_TextField',

        housingpayment:     '#personalData_Address_MonthlyPayment_TextField',

        house:              '#personalData_ResidenceTypeArea',
        house_Own:          '#personalData_Address_Own_RadioButton',
        house_Rent:         '#personalData_Address_Rent_RadioButton',
        house_Parents:      '#personalData_Address_Parents_RadioButton',
        house_Other:        '#personalData_Address_Other_RadioButton',

        durationRegion:		'#personalData_Duration',
        years:              '#personalData_Address_Duration_years_TextField',
        months:             '#personalData_Address_Duration_months_TextField',

        previousAddressArea:'#personalData_PreviousAddressArea',

        postalcode_prev:    '#personalData_PreviousAddress_PostalCode_TextField',
        streetnumber_prev:  '#personalData_PreviousAddress_StreetNumber_TextField',

        addressline1_prev:  '#personalData_PreviousAddress_AddressLine1_TextField',

        city_prev:          '#personalData_PreviousAddress_City_TextField',
        suiteunit_prev:     '#personalData_PreviousAddress_SuiteUnit_TextField',
        province_prev:      '#personalData_PreviousAddress_Province_TextField'
    };
    var validationGrroupsCol = 5;
    var prevAdressValidationIndex = 4;
    var durationValidationIndex = 5;
    var emailValidationIndex = 2;
    var personalDataValidationMax = 2;
    var personalDataModel = new WICI.BaseModel({
        name : 'personalData',
        refs : refs,
        data : [ {
            name: 'loyaltyMembershipNumber',
            value: null,
            validation: {
                type: 'mod10',
                message: 'personalData1_validation_loyaltyMembershipNumber',
                canBeEmpty: true,
                minlength: 16,
                group: [ 1 ]
            }
        }, {
            name : 'placeofissue',
            value : null,
            validation : {
                type : 'presence',
                message : 'personalData1_validation_placeofissue',
                group: [ 1 ]
            }
        }, {
            name : 'idtype',
            value : null,
            validation : {
                type : 'presence',
                message : 'personalData1_validation_idtype',
                group: [ 1 ]
            }
        }, {
            name : 'idnumbers',
            value : null,
            validation : {
                type : 'format',
                message : 'personalData1_validation_idnumbers',
                matcher : /^[A-Z0-9\,\_\'\-\.\~\@\[\]\}\{\)\(]{1,20}$/,
                group: [ 1 ]
            }
        },

            {
                name : 'title',
                value : null,
                validation : null
            }, {
                name : 'firstName',
                value : null,
                validation : {
                    type : 'personName',
                    message : 'personalData1_validation_firstName',
                    group: [ 1 ]
                }
            }, {
                name : 'initial',
                value : null,
                validation : {
                    type : 'format',
                    message : 'personalData1_validation_initial',
                    matcher : /^[A-Z]{1}/,
                    canBeEmpty : true,
                    group: [ 1 ]

                }
            }, {
                name : 'lastName',
                value : null,
                validation : {
                    type : 'personName',
                    message : 'personalData1_validation_lastName',
                    group: [ 1 ]
                }
            },

            {
                name : 'birthDate',
                value : null,
                validation : {
                    type : 'birthDate',
                    message : 'personalData1_validation_birthDate',
                    group: [ 1 ]
                }
            }, {
                name : 'email',
                value : null,
                validation : {
                    type : 'email',
                    message : 'personalData1_validation_email',
                    canBeEmpty : true,
                    group: [ 1 ]
                }
            },{
                name : 'receiveEmail',
                value : null,
                validation : {
                    type : 'presence',
                    message : 'personalData1_validation_ReceiveEmail',
                    group: [ 2 ]
                }
            },{
                name : 'homePhone',
                value : null,
                validation : {
                    type : 'phone',
                    message : 'personalData1_validation_homePhone',
                    group: [ 1 ]
                }
            }, {
                name : 'cellPhone',
                value : null,
                validation : {
                    type : 'phone',
                    message : 'personalData1_validation_cellPhone',
                    canBeEmpty : true,
                    group: [ 1 ]
                }
            }, {
                name : 'correspondence',
                value : null,
                validation : {
                    type : 'presence',
                    message : 'personalData1_validation_correspondence',
                    group: [ 1 ]
                }
            } ]
    });
    var addressModel = new WICI.BaseModel({
        name : 'personalData2_Address',
        refs : refs,
        data : [
            {name: 'postalcode',   value: null, validation: {type: 'postal',       message: '', group: [3]} },
            {name: 'streetnumber', value: null, validation: {type: 'streetNumber', message: '', group: [3]} },
            {name: 'addressline1', value: null, validation: {type: 'addressLine',  message: '', group: [3]} },
            {name: 'addressline2', value: null, validation: {type: 'addressLine',  message: '', group: [3], canBeEmpty: true} },
            {name: 'suiteunit',    value: null, validation: {type: 'suiteUnit',    message: '', group: [3], canBeEmpty: true} },
            {name: 'city',         value: null, validation: {type: 'city',         message: '', group: [3]} },
            {name: 'province',     value: null, validation: {type: 'presence',     message: '', group: [3]} },

            {notField: true, name: 'addressline1_Array', value: null },
            {notField: true, name: 'addressline2_Array', value: null },

            {name: 'house',             value: null, validation: {type: 'presence',     message: '', group: [3]} },
            {name: 'housingpayment',    value: null, validation: {type: 'format',       message: '', group: [3], matcher: /^[0-9\,]{1,4}$/, canBeEmpty: true} },

            {name: 'years',             value: null, validation: {type: 'presence',     message: '', group: [5]} },
            {name: 'months',            value: null, validation: {type: 'presence',     message: '', group: [5]} },

            {name: 'postalcode_prev',   value: null, validation: {type: 'postal',       message: '', group: [4]} },
            {name: 'streetnumber_prev', value: null, validation: {type: 'streetNumber', message: '', group: [4]} },
            {name: 'addressline1_prev', value: null, validation: {type: 'addressLine',  message: '', group: [4]} },
            {name: 'addressline2_prev', value: null, validation: {type: 'addressLine',  message: '', group: [4], canBeEmpty: true} },
            {name: 'city_prev',         value: null, validation: {type: 'city',         message: '', group: [4]} },
            {name: 'suiteunit_prev',    value: null, validation: {type: 'suiteUnit',    message: '', group: [4], canBeEmpty: true} },
            {name: 'province_prev',     value: null, validation: {type: 'presence',     message: '', group: [4]} },

            {notField:true, name: 'addressline1_prev_Array', value: null } ]
    });
    var models = {
        personalDataModel:personalDataModel,
        addressModel: addressModel
    };
    this.innerModels = models;

    // ---------------------------------------------------------------------------------------
    function init(argFlow) {
        var sMethod = 'init() ';
        console.log(logPrefix + sMethod);

        flow = argFlow;
        translator = argTranslator; // (AA)Dependency Injection Principle:
        // Allows for proper unit testing
        messageDialog = argMessageDialog; // (AA)Dependency Injection
        // Principle: Allows for proper unit
        // testing
        connectivityController = new WICI.ConnectivityController(new WICI.ConnectionStatus(), messageDialog, translator, WICI.AppConfig.ConnectivityConfig);
        connectivityController.init();

        if (!activationItems) {
            console.log(logPrefix + sMethod + ' "activationItems" is null!!!');
            activationItems = {};
        }
        var currentModels = {};

        $.each( models, function( modelID, model ) {
            var currModel = activationItems.getModel(model.name);
            if (!currModel) {
                activationItems.addModel(model);
            } else {
                models[modelID] = currModel;
            }
        });

        createView();
        bindEvents();

        populateProvinces();
        populateIdTypesList();

        // Set masks for UI elements
        setUIElementsMasks();

        restoreCreditCardData();

        onEmailChangesHandler();
        hideShowMoneyAdvantage();
    }
    // ---------------------------------------------------------------------------------------
    function show() {
        $screenContainer.show();
        translator.run('PersonalDataScreen');
        app.selectorReduceHelper.init();
    }
    // ---------------------------------------------------------------------------------------
    function hide() {
        $screenContainer.hide();
    }
    //---------------------------------------------------------------------------------------
    function updateResidenceTypeRadioButtons() {
        clearRadios('residence');
        switch (models.addressModel.get('house')) {
            case 'O':
                $(refs.house_Own).addClass('ui-btn-active');
                break;
            case 'R':
                $(refs.house_Rent).addClass('ui-btn-active');
                break;
            case 'P':
                $(refs.house_Parents).addClass('ui-btn-active');
                break;
            case 'M':
                $(refs.house_Other).addClass('ui-btn-active');
                break;
        }
    }
    // ---------------------------------------------------------------------------------------
    function setUIElementsMasks() {
        // Set phone fields mask
        $('.fieldValuesPhoneField').mask('999-999-9999', {
            placeholder : "",
            useDelimeter : true,
            delimeter : '-'
        });
        $(refs.housingpayment).autoNumeric('init', {aSign:' $ ',vMin:'0.00', vMax:'9999.99', mDec:'0', wEmpty: 'sign'});

        $(refs.years).durationControl('createControl');
        $(refs.months).durationControl('createControl');

        $(refs.years).autoNumeric('init', {aSign:'',vMin:'0', vMax:'100', mDec:'0'});
        $(refs.months).autoNumeric('init', {aSign:'',vMin:'0', vMax:'11', mDec:'0'});

        $(refs.loyaltyMembershipNumber).autoNumeric('init', {aSign:'',vMin:'0', vMax:'9999999999999999', mDec:'0',wEmpty: '', aSep:''});
    }
    // ---------------------------------------------------------------------------------------
    function createView() {
        $screenContainer.empty();
        assembleNavigationBarAtTop();
        WICI.BreadcrumbsHelper.assembleBreadcrumbs(2, $screenContainer, activationItems);
        assemblePageHTML($screenContainer, '#WICIPersonalDataScreen-template');
        hideAddressLookupSelectionDropDowns();
        $screenContainer.addClass("breadcrumbPadding");
        assembleNavigationBarAtBottom();
        initFields();
    }
    // ---------------------------------------------------------------------------------------
    function hideAddressLookupSelectionDropDowns(){
        $("#addressLookup_Address_AddressLine1_MultipleControl").hide();
        $("#addressLookup_Address_AddressLine2_MultipleControl").hide();
        $("#addressLookup_PreviousAddress_AddressLine1_MultipleControl").hide();
        $("#addressLookup_PreviousAddress_AddressLine2_MultipleControl").hide();
    }
    //---------------------------------------------------------------------------------------
    function disableAddressline2(){
        $(refs.addressline2).prop('disabled', true);
        $(refs.addressline2_prev).prop('disabled', true);
    }
    //---------------------------------------------------------------------------------------
    function assembleNavigationBarAtTop() {
        $("#pageHeader-template").template("pageHeader");
        $.tmpl("pageHeader", {
            "logo_En" : translator.currentLanguageEnglish(),
            "nextButtonId" : refs.nextButton.replace(".",""),
            "settingsButtonId" : "PersonalDataScreen_SettingsButton",
            "previousButtonId" : refs.prevButton.replace(".","")
        }).appendTo("#PersonalDataScreen");
    }
    // ---------------------------------------------------------------------------------------
    function assembleNavigationBarAtBottom(){
        $("#pageFooter-template").template("pageFooter");
        $.tmpl("pageFooter", {
            "nextButtonId" : refs.nextButton.replace(".",""),
            "previousButtonId" : refs.prevButton.replace(".","")
        }).appendTo("#PersonalDataScreen");
    }
    // ---------------------------------------------------------------------------------------
    function assemblePageHTML($element, templateName) {
        $(templateName).tmpl().appendTo($element);
    }
    // ---------------------------------------------------------------------------------------
    function syncUserData() {
        var sMethod = 'syncUserData() ';
        console.log(logPrefix + sMethod);
        var currModel = models.personalDataModel;
        currModel.set('loyaltyMembershipNumber', $(refs.loyaltyMembershipNumber).val()) ;

        currModel.set('placeofissue', $(refs.placeofissue).val());

        currModel.set('idtype', $(refs.idtype).val());
        currModel.set('idnumbers', $(refs.idnumbers).val().toUpperCase());

        currModel.set('firstName', $(refs.firstName).val().toUpperCase());
        currModel.set('initial', $(refs.initial).val().toUpperCase());
        currModel.set('lastName', $(refs.lastName).val().toUpperCase());

        currModel.set('birthDate', $(refs.birthDate).val());
        currModel.set('email', $(refs.email).val());
        currModel.set('homePhone', $(refs.homePhone).val().replace(/-/g, ''));
        currModel.set('cellPhone', $(refs.cellPhone).val().replace(/-/g, ''));

        currModel = models.addressModel;

        currModel.set('postalcode',     $(refs.postalcode).val().toUpperCase());
        currModel.set('streetnumber',   $(refs.streetnumber).val().toUpperCase());
        currModel.set('addressline1',   $(refs.addressline1).val().toUpperCase());
        currModel.set('addressline2',   '');
        currModel.set('suiteunit',      $(refs.suiteunit).val().toUpperCase());
        currModel.set('city',           $(refs.city).val().toUpperCase());
        currModel.set('province',       $(refs.province).val());

        currModel.set('housingpayment', $(refs.housingpayment).val().replace(/,/g,'').replace(' $ ','').replace('.',','));
        currModel.set('years',          $(refs.years).val());
        currModel.set('months',         $(refs.months).val());

        currModel.set('postalcode_prev',    $(refs.postalcode_prev).val().toUpperCase());
        currModel.set('streetnumber_prev',  $(refs.streetnumber_prev).val().toUpperCase());
        currModel.set('addressline1_prev',  $(refs.addressline1_prev).val().toUpperCase());
        currModel.set('addressline2_prev',  '');
        currModel.set('city_prev',          $(refs.city_prev).val().toUpperCase());
        currModel.set('suiteunit_prev',     $(refs.suiteunit_prev).val().toUpperCase());
        currModel.set('province_prev',      $(refs.province_prev).val());

        for (var currModel in models) {
            console.log(logPrefix + sMethod + ' model data: ' + currModel.toString());
        }

    }
    // ---------------------------------------------------------------------------------------
    function restoreCreditCardData() {
        var sMethod = "restoreCreditCardData()";
        console.log(logPrefix + sMethod);

        var currModel = models.personalDataModel;

        $(refs.loyaltyMembershipNumber).val(currModel.get('loyaltyMembershipNumber'));
        $(refs.placeofissue).val(currModel.get('placeofissue'));
        $(refs.idtype).val(currModel.get('idtype'));
        $(refs.idnumbers).val(currModel.get('idnumbers'));
        $(refs.firstName).val(currModel.get('firstName'));
        $(refs.initial).val(currModel.get('initial'));
        $(refs.lastName).val(currModel.get('lastName'));
        $(refs.birthDate).val(currModel.get('birthDate'));
        $(refs.email).val(currModel.get('email'));
        $(refs.homePhone).val(currModel.get('homePhone'));
        $(refs.cellPhone).val(currModel.get('cellPhone'));

        currModel = models.addressModel;

        $(refs.postalcode).val(currModel.get('postalcode'));
        $(refs.streetnumber).val( currModel.get('streetnumber'));
        $(refs.addressline1).val( currModel.get('addressline1'));

        $(refs.suiteunit).val(currModel.get('suiteunit'));
        $(refs.city).val(currModel.get('city'));
        $(refs.province).val(currModel.get('province'));

        $(refs.housingpayment).val(currModel.get('housingpayment'));
        $(refs.years).val(currModel.get('years'));
        $(refs.months).val(currModel.get('months'));

        $(refs.postalcode_prev).val(currModel.get('postalcode_prev'));
        $(refs.streetnumber_prev).val(currModel.get('streetnumber_prev'));
        $(refs.addressline1_prev).val(currModel.get('addressline1_prev'));

        $(refs.suiteunit_prev).val(currModel.get('suiteunit_prev'));
        $(refs.city_prev).val(currModel.get('city_prev'));
        $(refs.province_prev).val(currModel.get('province_prev'));

        updateResidenceTypeRadioButtons();
        onDurationChangesHandler();
        updateLookUpControls();
        onEmailChangesHandler();
    }
    //---------------------------------------------------------------------------------------
    function updateLookUpControls()
    {
        var currModel = models.addressModel;
        if(currModel.get('addressline1_Array'))
        {
            if( currModel.get('addressline1_Array') && currModel.get('addressline1_Array').length>1){
                $("#addressLookup_Address_AddressLine1_MultipleControl").show();
                repopulateAddressLineControl(currModel.get('addressline1_Array'),$("#personalData_Address_AddressLine1_SelectField"), 'addressline1_Array');
            }
            if(currModel.get('addressline1_Array') &&  currModel.get('addressline1_Array').length<=1){
                $("#addressLookup_Address_AddressLine1_MultipleControl").hide();
                $("#personalData_Address_AddressLine1_TextField").val(currModel.get('addressline1_Array'));
            }
        }

        if(currModel.get('addressline1_prev_Array'))
        {
            if( currModel.get('addressline1_prev_Array') && currModel.get('addressline1_prev_Array').length>1){
                $("#addressLookup_PreviousAddress_AddressLine1_MultipleControl").show();
                repopulateAddressLineControl(model.get('addressline1_prev_Array'),$("#personalData_PreviousAddress_AddressLine1_SelectField"), 'addressline1_prev_Array');
            }
            if(currModel.get('addressline1_prev_Array') && currModel.get('addressline1_prev_Array').length<=1){
                $("#addressLookup_PreviousAddress_AddressLine1_MultipleControl").hide();
                $("#personalData_PreviousAddress_AddressLine1_TextField").val(currModel.get('addressline1_prev_Array'));
            }
        }

        updateAddressLookupButtonState($("#personalData_Address_PostalCode_TextField"),$("#personalData_Address_StreetNumber_TextField"),$("#personalData_AddressLookupButton"));
        updateAddressLookupButtonState($("#personalData_PreviousAddress_PostalCode_TextField"),$("#personalData_PreviousAddress_StreetNumber_TextField"),$("#personalData_PreviousAddressLookupButton"));
    }
    //-----------------------------------------------------------------------------------------
    function repopulateAddressLineControl(argArrayOfAddressLines,
                                          argControlToPopulate, argDataMember) {
        if (argArrayOfAddressLines) {
            argControlToPopulate.empty();
            models.addressModel.set(argDataMember, argArrayOfAddressLines);
            $.each(argArrayOfAddressLines, function(index, item) {
                var addressOption = buildOptionItem(item, item);
                argControlToPopulate.append(addressOption);
            });
        }
    }
    // ---------------------------------------------------------------------------------------
    function buildOptionItem(argDisplayText, argValue) {
        argDataMember = argDisplayText;
        return "<option value='" + argValue + "'>" + argDisplayText
            + "</option>";
    }
    //-----------------------------------------------------------------------------------------
    function onEmailChangesHandler(){
        var sMethod = 'onEmailChangesHandler() ';
        console.log(logPrefix + sMethod);

        var currModel = models.personalDataModel;

        syncUserData();
        validEmail = /^[_a-z0-9-][_a-z0-9-]+(\.[_a-z0-9+]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/i;
        console.log("validEmail : " + validEmail.test(currModel.get('email').trim()));
        clearRadios('receiveEmail');

        if(validEmail.test(currModel.get('email').trim()) != true ){
            $(refs.receiveemailArea).hide();
        }
        else{
            $(refs.receiveemailArea).show();
        }
    }

    //----------------------------------------------------------------------------------------
    function bindRealTimeEmailControl(){
        $(refs.email).change(function(){
            onEmailChangesHandler();
        });
    }
    //---------------------------------------------------------------------------------------
    function onDurationChangesHandler(){
        var sMethod = 'onDurationChangesHandler() ';
        console.log(logPrefix + sMethod);

        syncUserData();

        var currModel = models.addressModel;

        if(currModel.get('years')>=2 || (currModel.get('years')==='' && currModel.get('months')==='')){
            $(refs.previousAddressArea).hide();
        }
        else{
            $(refs.previousAddressArea).show();
        }

    }
    //-----------------------------------------------------------------------------------------
    function bindEvents() {
        var sMethod = 'bindEvents() ';
        console.log(logPrefix + sMethod);

        bindRealTimeEmailControl();

        $(refs.postalcode).live('paste, input', function(e) {
            var self = $(this);

            setTimeout(function(){
                if(self.val().indexOf(' ') != -1 || self.val().length > 6) {
                    self.val(self.val().replace(' ', '').substring(0, 6));
                }
            },100);
        });

        $(refs.initial).live('paste, input', function(e) {
            var self = $(this);

            setTimeout(function(){
                if(self.val().length > 1) {
                    self.val(self.val().substring(0, 1));
                }
            },100);
        });

        $(refs.placeofissue).change(function(event) {
            console.log(refs.placeofissue + '::change');
            populateIdTypesList();
        });


        $.subscribe('translatorFinished', function(event) {
            console.log(refs.placeofissue + '::change');
            populateIdTypesList();
            ///********************///
            //According to user story with number 829
            checkForMsButton();
        });


        $(refs.nextButton).click(function() {
            showNextScreen();
        });
        $(refs.prevButton).click(function() {
            showPrevScreen();
        });

        var currModel = models.personalDataModel;

        $("#personalData_ScanIdButton").click(function() {
            messageDialog.scan(null, onScanSuccessCallback, onScanErrorCallback, null, null, translator);
        });

        $(refs.title_MR).click(function() {
            clearRadios('title');
            $(refs.title_MR).addClass('ui-btn-active');
            models.personalDataModel.set('title', 'MR');
        });
        $(refs.title_MRS).click(function() {
            clearRadios('title');
            $(refs.title_MRS).addClass('ui-btn-active');
            models.personalDataModel.set('title', 'MRS');
        });
        $(refs.title_MISS).click(function() {
            clearRadios('title');
            $(refs.title_MISS).addClass('ui-btn-active');
            models.personalDataModel.set('title', 'MISS');
        });
        $(refs.title_MS).click(function() {
            clearRadios('title');
            $(refs.title_MS).addClass('ui-btn-active');
            models.personalDataModel.set('title', 'MS');
        });
        $(refs.correspondence_eng).click(function() {
            clearRadios('correspondence');
            $(refs.correspondence_eng).addClass('ui-btn-active');
            models.personalDataModel.set('correspondence', 'E');
        });
        $(refs.correspondence_fre).click(function() {
            clearRadios('correspondence');
            $(refs.correspondence_fre).addClass('ui-btn-active');
            models.personalDataModel.set('correspondence', 'F');
        });

        $(refs.receiveemail_optin).click(function() {
            clearRadios('receiveEmail');
            $(refs.receiveemail_optin).addClass('ui-btn-active');
            models.personalDataModel.set('receiveEmail', 'Y');
        });
        $(refs.receiveemail_optout).click(function() {
            clearRadios('receiveEmail');
            $(refs.receiveemail_optout).addClass('ui-btn-active');
            models.personalDataModel.set('receiveEmail', 'N');
        });
        bindAddressHandlingControls();
        bindRadioButtons();
        bindRealTimeDurationControl();

        currModel = models.addressModel;

        $(refs.province).on("change", function() {
            console.log(refs.province + '::change');
            models.addressModel.set("province", $(refs.province).val());
        });

        $.subscribe('translatorFinished',function(){
            console.log(refs.province + 'subscribe(translatorFinished)');
            populateProvinces();
            $(refs.province).val(models.addressModel.get("province"));

        });

        $(refs.province_prev).on("change", function() {
            console.log(refs.province_prev + '::change');
            models.addressModel.set("province_prev", $(refs.province_prev).val());
        });

        $.subscribe('translatorFinished',function(){
            console.log(refs.province_prev + 'subscribe(translatorFinished)');
            populateProvinces();
            $(refs.province_prev).val(models.addressModel.get("province_prev"));
        });

        checkForMsButton();
    }
    //---------------------------------------------------------------------------------------
    function bindRealTimeDurationControl(){
        $(refs.years).change(function(){
            onDurationChangesHandler();
        });

        $(refs.months).change(function(){
            onDurationChangesHandler();
        });

    }
    //---------------------------------------------------------------------------------------
    function initFields(){
        updateAddressLookupButtonState($("#personalData_Address_PostalCode_TextField"),$("#personalData_Address_StreetNumber_TextField"),$("#personalData_AddressLookupButton"));
        updateAddressLookupButtonState($("#personalData_PreviousAddress_PostalCode_TextField"),$("#personalData_PreviousAddress_StreetNumber_TextField"),$("#personalData_PreviousAddressLookupButton"));
    }
    //---------------------------------------------------------------------------------------
    function disableAddressLookupButton( $argButtonID ){
        $argButtonID.removeClass("greenflat");
        $argButtonID.addClass("grayflat");
        if( $argButtonID.attr('id')=="personalData_AddressLookupButton" )
            addressLookupButton1Enabled=false;
        if( $argButtonID.attr('id')=="personalData_PreviousAddressLookupButton")
            addressLookupButton2Enabled=false;
    }
    //---------------------------------------------------------------------------------------
    function enableAddressLookupButton( $argButtonID ){
        $argButtonID.removeClass('grayflat');
        $argButtonID.addClass("greenflat");
        if( $argButtonID.attr('id')=="personalData_AddressLookupButton" )
            addressLookupButton1Enabled=true;
        if( $argButtonID.attr('id')=="personalData_PreviousAddressLookupButton" )
            addressLookupButton2Enabled=true;
    }
    //---------------------------------------------------------------------------------------
    function updateAddressLookupButtonState( $argPostalCodeFieldID, $argStreetNumberFieldID, $argAddressLookupButtonID ){
        var postalCode = $argPostalCodeFieldID.val();
        var streetNumber = $argStreetNumberFieldID.val();

        if( postalCode==="" || streetNumber==="")
            disableAddressLookupButton($argAddressLookupButtonID);
        else
            enableAddressLookupButton($argAddressLookupButtonID);
    }
    //---------------------------------------------------------------------------------------
    function bindRadioButtons() {
        var currModel = models.addressModel;
        $(refs.house_Own).click(function(){
            clearRadios('residence');
            $(refs.house_Own).addClass('ui-btn-active');
            models.addressModel.set('house', 'O');
        });
        $(refs.house_Rent).click(function(){
            clearRadios('residence');
            $(refs.house_Rent).addClass('ui-btn-active');
            models.addressModel.set('house', 'R');
        });
        $(refs.house_Parents).click(function(){
            clearRadios('residence');
            $(refs.house_Parents).addClass('ui-btn-active');
            models.addressModel.set('house', 'P');
        });
        $(refs.house_Other).click(function(){
            clearRadios('residence');
            $(refs.house_Other).addClass('ui-btn-active');
            models.addressModel.set('house', 'M');
        });
    }
    //---------------------------------------------------------------------------------------
    function bindAddressHandlingControls() {
        var currModel = models.addressModel;
        $("#personalData_AddressLookupButton").click(function(){
            if(addressLookupButton1Enabled){
                $addressLookupButtonClicked = $("#personalData_AddressLookupButton");

                var postalCode = $(refs.postalcode).val();
                var validationResult = currModel.validateFieldByName('postalcode', postalCode.toUpperCase());
                if(validationResult.length === 0)
                {
                    if (app.validationsOn) {
                        app.validationDecorator.clearErrArrtibute();
                    }

                    invokeAddressLookup( $("#personalData_Address_PostalCode_TextField"),$("#personalData_Address_StreetNumber_TextField"), addressLookupSuccess, addressLookupFail );
                }
                else
                {
                    if (app.validationsOn) {
                        app.validationDecorator.applyErrAttribute(validationResult);
                    }
                }
            }
        });

        $("#personalData_Address_PostalCode_TextField").click(function(){
            setInterval(function(){ handleRealTimeKeyStrokes($("#personalData_Address_PostalCode_TextField")); }, 100);
        });
        $("#personalData_Address_StreetNumber_TextField").click(function(){
            setInterval(function(){ handleRealTimeKeyStrokes($("#personalData_Address_StreetNumber_TextField")); }, 100);
        });

        $("#personalData_PreviousAddressLookupButton").click(function(){
            if(addressLookupButton2Enabled){
                $addressLookupButtonClicked = $("#personalData_PreviousAddressLookupButton");

                var postalCode = $(refs.postalcode_prev).val();
                var validationResult = currModel.validateFieldByName('postalcode_prev', postalCode.toUpperCase());
                if(validationResult.length === 0)
                {
                    if (app.validationsOn) {
                        app.validationDecorator.clearErrArrtibute();
                    }

                    invokeAddressLookup( $("#personalData_PreviousAddress_PostalCode_TextField"),$("#personalData_PreviousAddress_StreetNumber_TextField"), addressLookupSuccess, addressLookupFail );
                }
                else
                {
                    if (app.validationsOn) {
                        app.validationDecorator.applyErrAttribute(validationResult);
                    }
                }
            }
        });

        $("#personalData_PreviousAddress_PostalCode_TextField").click(function(){
            setInterval(function(){ handleRealTimeKeyStrokes($("#personalData_PreviousAddress_PostalCode_TextField")); }, 100);
        });
        $("#personalData_PreviousAddress_StreetNumber_TextField").click(function(){
            setInterval(function(){ handleRealTimeKeyStrokes($("#personalData_PreviousAddress_StreetNumber_TextField")); }, 100);
        });

        ////////////////////////////////////////////////////////////////////////////////////////////

        $("#personalData_Address_AddressLine1_SelectField").change(function(){
            $("#personalData_Address_AddressLine1_TextField").val($("#personalData_Address_AddressLine1_SelectField").val());
        });

        $("#personalData_PreviousAddress_AddressLine1_SelectField").change(function(){
            $("#personalData_PreviousAddress_AddressLine1_TextField").val($("#personalData_PreviousAddress_AddressLine1_SelectField").val());
        });

    }
    //---------------------------------------------------------------------------------------
    function handleRealTimeKeyStrokes($argField){
        if($argField.attr('id')=="personalData_Address_PostalCode_TextField" || $argField.attr('id')=="personalData_Address_StreetNumber_TextField")
            updateAddressLookupButtonState($("#personalData_Address_PostalCode_TextField"),$("#personalData_Address_StreetNumber_TextField"),$("#personalData_AddressLookupButton"));
        if($argField.attr('id')=="personalData_PreviousAddress_PostalCode_TextField" || $argField.attr('id')=="personalData_PreviousAddress_StreetNumber_TextField")
            updateAddressLookupButtonState($("#personalData_PreviousAddress_PostalCode_TextField"),$("#personalData_PreviousAddress_StreetNumber_TextField"),$("#personalData_PreviousAddressLookupButton"));
    }

    function checkForMsButton(){
        if(translator.currentLanguageEnglish()){
            showMsButton();
        } else {
            hideMsButton();
        }
    }

    function hideMsButton() {
        var currModel = models.personalDataModel;
        $(refs.title_MS).hide();
        $(refs.title_MISS).addClass('ui-corner-right ui-controlgroup-last');
        if (currModel.get('title') === 'MS') {
            clearRadios('title');
            $(refs.title_MISS).addClass('ui-btn-active');
        }
    }
    function showMsButton() {
        var currModel = models.personalDataModel;
        $(refs.title_MISS).removeClass('ui-corner-right ui-controlgroup-last');
        $(refs.title_MS).show();
        if (currModel.get('title') === 'MISS') {
            clearRadios('title');
            $(refs.title_MS).addClass('ui-btn-active');
        }
    }
    // ---------------------------------------------------------------------------------------
    function clearRadios(radioGroup) {
        var currModel = models.personalDataModel;
        if (radioGroup === 'title') {
            $(refs.title_MR).removeClass('ui-btn-active');
            $(refs.title_MRS).removeClass('ui-btn-active');
            $(refs.title_MISS).removeClass('ui-btn-active');
            $(refs.title_MS).removeClass('ui-btn-active');
        } else if (radioGroup === 'correspondence') {
            $(refs.correspondence_eng).removeClass('ui-btn-active');
            $(refs.correspondence_fre).removeClass('ui-btn-active');
        } else if (radioGroup === 'receiveEmail') {
            $(refs.receiveemail_optin).removeClass('ui-btn-active');
            $(refs.receiveemail_optout).removeClass('ui-btn-active');
            currModel.set('receiveEmail', null);
        } else if (radioGroup === 'residence') {
            $(refs.house_Own).removeClass('ui-btn-active');
            $(refs.house_Rent).removeClass('ui-btn-active');
            $(refs.house_Parents).removeClass('ui-btn-active');
            $(refs.house_Other).removeClass('ui-btn-active');

        }
    }

    // ---------------------------------------------------------------------------------------
    function populateProvinces() {
        var sMethod = 'populateProvinces() ',
            list = new WICI.ProvincesList(),
            optTempl = '',
            provinceDropDowns;

        console.log(logPrefix + sMethod);

        $.each(list.data, function (index, item) {
            optTempl += '<option value="' +
                item.value +
                '">' +
                translator.translateKey(item.text) +
                '</option>';
        });

        provinceDropDowns = {
            personalDataModel: {
                placeofissue: refs.placeofissue
            },
            addressModel: {
                province: refs.province,
                province_prev: refs.province_prev
            }
        };

        $.each(provinceDropDowns, function (modelName, dropdowns) {
            $.each(dropdowns, function (dropdownName, dropdown) {
                var controlRef, curSelection;

                controlRef = $(dropdown);
                controlRef.empty();
                controlRef.append(optTempl);
                curSelection = models[modelName].get(dropdownName);

                if (curSelection) {
                    $(dropdown + ' [value="' + curSelection + '"]').attr(
                        'selected', 'selected'
                    );
                }
            });
        });
    }

    // ---------------------------------------------------------------------------------------
    function populateIdTypesList(takeIdTypeByProvince) {
        var sMethod = 'populateIdTypesList() ',
            currModel, provinceValue, idType, controlRef, list;

        console.log(logPrefix + sMethod);

        syncUserData();

        currModel = models.personalDataModel;
        provinceValue = currModel.get('placeofissue');
        idType = currModel.get('idtype');

        controlRef = $(refs.idtype);

        controlRef.empty();
        populateProvinces();

        list = new WICI.IdTypesList();
        list.data = list.getDataByProvince(provinceValue);

        $.each(list.data, function (index, item) {
            var optTempl = '<option value="' +
                item.value +
                '">' +
                translator.translateKey(item.text) +
                '</option>';
            controlRef.append(optTempl);
        });

        if (idType || $.inArray(provinceValue, ['BC', 'AB', 'NS', 'NB', 'NL', 'SK', 'MB', 'PE', 'NT', 'NU', 'YT', 'ON']) != -1) {
            if (!idType && takeIdTypeByProvince) {
                idType = provinceValue;
            }

            $(refs.idtype + ' [value="' + idType + '"]').attr(
                'selected', 'selected'
            );
        }

        if (provinceValue) {
            $(refs.placeofissue + ' [value="' + provinceValue + '"]').attr(
                'selected', 'selected'
            );
        }
    }

    //---------------------------------------------------------------------------------------
    function updateAddressLookupButtonState( $argPostalCodeFieldID, $argStreetNumberFieldID, $argAddressLookupButtonID ){
        var postalCode = $argPostalCodeFieldID.val();
        var streetNumber = $argStreetNumberFieldID.val();

        if( postalCode==="" || streetNumber==="")
            disableAddressLookupButton($argAddressLookupButtonID);
        else
            enableAddressLookupButton($argAddressLookupButtonID);
    }
    //---------------------------------------------------------------------------------------
    function invokeAddressLookup( $argPCodeFieldID, $argStreetNumberFieldID, argSuccessCB, argFailureCB ){
        new WICI.LoadingIndicatorController().show();
        userPostalCode = $argPCodeFieldID.val();
        userStreetNumber = $argStreetNumberFieldID.val();
        connectivityController.AddressLookup(userPostalCode,userStreetNumber,argSuccessCB,argFailureCB);
    }
    //---------------------------------------------------------------------------------------
    function addressLookupSuccess( argResponse ){
        var sMethod = "addressLookupSuccess(argResponse)";
        console.log(logPrefix + sMethod);

        var currModel = models.addressModel;

        new WICI.LoadingIndicatorController().hide();
        if( argResponse && !argResponse.error && !_.isEmpty(argResponse.data)){
            var lookupHelper = new WICI.AddressLookupResponseHelper();

            lookupHelper.setAddressResponseObject(argResponse.data);

            console.log("Address Line 1:" + lookupHelper.getAddressLine1() );
            console.log("Address Line 2:" + lookupHelper.getAddressLine2() );
            console.log("City:" + lookupHelper.getCityName());
            console.log("Province:" + lookupHelper.getProvince());

            if($addressLookupButtonClicked.attr('id')=="personalData_AddressLookupButton" )
            {
                currModel.set("province", lookupHelper.getProvince());
                selectedPersonalProvince = lookupHelper.getProvince();

                /* US2825 WICI - Address Look Up Enhancement
                 * if( lookupHelper.getAddressLine1().length>1){
	                    $("#addressLookup_Address_AddressLine1_MultipleControl").show();
	                    repopulateAddressLineControl(lookupHelper.getAddressLine1(),$("#personalData_Address_AddressLine1_SelectField"), 'addressline1_Array');
	                    $("#personalData_Address_AddressLine1_SelectField").prop('selectedIndex', -1);
	                }
	                if( lookupHelper.getAddressLine1().length<=1){
	                    $("#addressLookup_Address_AddressLine1_MultipleControl").hide();
	                    $("#personalData_Address_AddressLine1_TextField").val(lookupHelper.getAddressLine1());
	                }
	
	                $("#personalData_Address_City_TextField").val(lookupHelper.getCityName());
	                $("#personalData_Address_Province_TextField").val(lookupHelper.getProvince());
                 * */
                
                // US2825 begin 
                if( lookupHelper.getAddressLine1().length < 1 ) {            	
                	$("#personalData_Address_AddressLine1_TextField").val("");
                	$("#addressLookup_Address_AddressLine1_MultipleControl").hide();
                	$("#personalData_Address_SuiteUnit_TextField").val("");
                	$("#personalData_Address_City_TextField").val("");
                	$("#personalData_Address_Province_TextField").val("");            	
                	messageDialog.error(translator.translateKey("addressLookup_noResults"));
                } else
	            {	
                	if( lookupHelper.getAddressLine1().length>1){
	                    $("#addressLookup_Address_AddressLine1_MultipleControl").show();
	                    repopulateAddressLineControl(lookupHelper.getAddressLine1(),$("#personalData_Address_AddressLine1_SelectField"), 'addressline1_Array');
	                    $("#personalData_Address_AddressLine1_SelectField").prop('selectedIndex', -1);
	                }
	                if( lookupHelper.getAddressLine1().length<=1){
	                    $("#addressLookup_Address_AddressLine1_MultipleControl").hide();
	                    $("#personalData_Address_AddressLine1_TextField").val(lookupHelper.getAddressLine1());
	                }
	
	                $("#personalData_Address_City_TextField").val(lookupHelper.getCityName());
	                $("#personalData_Address_Province_TextField").val(lookupHelper.getProvince());
	           }
               // End
            }
             else if ($addressLookupButtonClicked.attr('id') == "personalData_PreviousAddressLookupButton") {
				currModel.set("province_prev", lookupHelper.getProvince());
				selectedPrevProvince = lookupHelper.getProvince();

				 // US2825 begin
				if (lookupHelper.getAddressLine1().length < 1) {
					$("#personalData_PreviousAddress_AddressLine1_TextField").val("");
                	$("#addressLookup_PreviousAddress_AddressLine1_MultipleControl").hide();
                	$("#personalData_PreviousAddress_SuiteUnit_TextField").val("");
                	$("#personalData_PreviousAddress_City_TextField").val("");
                	$("#personalData_PreviousAddress_Province_TextField").val("");
                	messageDialog.error(translator.translateKey("addressLookup_noResults"));
				} else {  //End
					if (lookupHelper.getAddressLine1().length > 1) {
						$("#addressLookup_PreviousAddress_AddressLine1_MultipleControl")
								.show();
						repopulateAddressLineControl(lookupHelper.getAddressLine1(),$("#personalData_PreviousAddress_AddressLine1_SelectField"),'addressline1_prev_Array');
						$("#personalData_PreviousAddress_AddressLine1_SelectField").prop('selectedIndex', -1);
					}
					if (lookupHelper.getAddressLine1().length <= 1) {
						$(
								"#addressLookup_PreviousAddress_AddressLine1_MultipleControl")
								.hide();
						$(
								"#personalData_PreviousAddress_AddressLine1_TextField")
								.val(lookupHelper.getAddressLine1());
					}

					$("#personalData_PreviousAddress_City_TextField").val(
							lookupHelper.getCityName());
					$("#personalData_PreviousAddress_Province_TextField").val(
							lookupHelper.getProvince());
				}
				
			}
        }
        else{
            messageDialog.error(translator.translateKey("addressLookup_noResults"));
        }
    }

    // ---------------------------------------------------------------------------------------
    function addressLookupFail( argResponse ){
        new WICI.LoadingIndicatorController().hide();
        messageDialog.error(translator.translateKey("addressLookup_failedMessage"));
    }
    //---------------------------------------------------------------------------------------
    function showPrevScreen() {
        var sMethod = 'showPrevScreen() ';
        console.log(logPrefix + sMethod);
        flow.back();
    }
    // ---------------------------------------------------------------------------------------
    function showNextScreen() {
        var sMethod = 'showNextScreen() ';
        console.log(logPrefix + sMethod);

        syncUserData();

        if (app.validationsOn) {
            app.validationDecorator.clearErrArrtibute();
            var validationGroupsRez = [];
            var rez = [];
            var c1;
            var currModel = models.addressModel;
            var enteredYears = models.addressModel.get('years');
            var enteredMonthes = models.addressModel.get('months');
            var temprez;
            validEmail = /^[_a-z0-9-][_a-z0-9-]+(\.[_a-z0-9+]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/i;
            for (var i = 1; i <= validationGrroupsCol; i++) {
               if (i <= personalDataValidationMax ) {
                    temprez = models.personalDataModel.validate(i);
               } else {
                    temprez = models.addressModel.validate(i);
               }

                //custom validation for e-mail
                if (i === emailValidationIndex && validEmail.test(models.personalDataModel.get('email').trim()) != true ) {
                    continue;
                }
                //custom validation for previous adress
                if (i === prevAdressValidationIndex) {
                    if ( enteredYears >= 2) {
                        continue;
                    }
                }
                //custom validation for duration
                if (i === durationValidationIndex) {
                    if (temprez.length == 2) {
                        temprez.splice(1);
                        temprez[0].uiid = refs.durationRegion;
                    } else {
                        if (temprez.length == 1) {
                            if (!(parseInt(models.addressModel.get('years'), 10) || parseInt(models.addressModel.get('months'), 10))) {
                                temprez[0].uiid = refs.durationRegion;
                            } else {
                                temprez = [];
                            }

                        } else {
                            temprez = [];
                        }
                    }
                }

                rez = rez.concat(temprez);
            }

            // CASL Validation -------------------------------------------------

            //------------------------------------------------------------------
            if (rez.length > 0) {
                var errStrArr = [];
                $.each(rez, function(index, item) {
                    errStrArr.push(translator.translateKey(item.err));
                });

                app.validationDecorator.applyErrAttribute(rez);
                return;
            }

            var edgeValidation = models.personalDataModel.validateAge(models.personalDataModel);
            var rez = [];
            if (edgeValidation != null) {
                rez.push(edgeValidation);
                messageDialog.error(
                    translator.translateKey(edgeValidation.err), null,
                    selectDOBFileld);
                app.validationDecorator.applyErrAttribute(rez, true);
                return;
            }
        }

        flow.next();
    }

    function selectDOBFileld() {
        app.validationDecorator.focusControl(refs.birthDate);
    }

    //---------------------------------------------------------------------------------------
    function hideShowMoneyAdvantage (){

        cardTypeGlobal = activationItems.getModel('chooseProductModel').get('productCard')
        if(cardTypeGlobal === 'OMC') {
            $(refs.moneyAdvantageContainer).show();
        }
        else {
            $(refs.moneyAdvantageContainer).hide();
        }
    }

    // ---------------------------------------------------------------------------------------
    function onScanSuccessCallback(response) {
        var parser = new WICI.ScanDataMappingHelper(),
            mapping = {
                idProvince: refs.placeofissue,
                idNumber: refs.idnumbers,
                firstName: refs.firstName,
                middleName_Initial: refs.initial,
                lastName: refs.lastName,
                dateOfBirth: refs.birthDate,
                addressPostal: refs.postalcode,
                addressLine1_CivicStreetNumber: refs.streetnumber,
                addressLine1_StreetName: refs.addressline1,
                addressCity: refs.city,
                addressLine1_Unit: refs.suiteunit,
                addressProvince: refs.province
            },
            rez, scanned, prop;

        try {
            rez = parser.parse(response.data);
            if (!containsAny(rez, mapping)) {
                throw ('ERROR! Got the empty data.');
            }
            for (prop in mapping) {
                $(mapping[prop]).val(rez[prop]);
            }

            // Populate the id-types dropdown and set the id-type.
            populateIdTypesList(true);
            $(refs.idtype + ' [value="' + rez.idType + '"]').attr(
                'selected', 'selected'
            );
        } catch (e) {
            messageDialog.error(
                translator.translateKey('scanID_parsingErrorText'),
                translator.translateKey('personalData_Scan_Id_Label'),
                $.noop
            );
        }
    }

    // ---------------------------------------------------------------------------------------
    function onScanErrorCallback(response) {
        var sMethod = logPrefix + '[onScanErrorCallback]: ',
            prop;

        for (prop in response) {
            console.log(sMethod + prop + ': ' + response[prop]);
        }
    }

    // ---------------------------------------------------------------------------------------
    function containsAny(obj, keys) {
        var key;

        for (key in keys) {
            if (obj[key]) {
                return true;
            }
        }

        return false;
    }
};
