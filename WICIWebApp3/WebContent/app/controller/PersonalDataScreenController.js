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

        // US4365
        idExpiryDate : '#personalData_ExpiryDate_TextField',
        expiryDate_Area : '#personalData_ExpiryDate_Area',

      //  email : '#personalData_EmailAddress_TextField',
        homePhone : '#personalData_HomePhone_TextField',
        cellPhone : '#personalData_CellPhone_TextField',

        correspondence : '#personalData_Correspondence_Group',
        correspondence_eng : '#personalData_English_RadioButton',
        correspondence_fre : '#personalData_French_RadioButton',
        
      //  receiveemailArea:'#personalData_ReceiveEmailArea',
       // receiveEmail : '#personalData_ReceiveEmail_Group',
       // receiveemail_optin : '#personalData_Optin_RadioButton',
       // receiveemail_optout : '#personalData_Optout_RadioButton',
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
        
        // US3623        
        flipPrevWasInCanada_no	:	'#flipPrevWasInCanada_no',
        flipPrevWasInCanada_yes	:	'#flipPrevWasInCanada_yes',
        flipPrevWasInCanada	:		'#flipPrevWasInCanada',        
        personalData_PreviousAddressYesNO	:	'#personalData_PreviousAddressYesNO',
        
        postalcode_prev:    '#personalData_PreviousAddress_PostalCode_TextField',
        streetnumber_prev:  '#personalData_PreviousAddress_StreetNumber_TextField',

        addressline1_prev:  '#personalData_PreviousAddress_AddressLine1_TextField',

        city_prev:          '#personalData_PreviousAddress_City_TextField',
        suiteunit_prev:     '#personalData_PreviousAddress_SuiteUnit_TextField',
        province_prev:      '#personalData_PreviousAddress_Province_TextField',
        
        // US4709
        homePhoneRadioGroup     	    :   '#primaryPhoneRadioGroup',
        cellPhoneRadioGroup		        :   '#secondaryPhoneRadioGroup',
        //consentYesOrNoRadioButton       :   '#consentYesOrNoRadioButton',
        yes_CheckField					:	'#yes_CheckField',
        nothanks_CheckField				:	'#nothanks_CheckField',
        primaryMobile_CheckField		:	'#primaryMobile_CheckField',
        primaryLandline_CheckField		:	'#primaryLandline_CheckField',
        secondaryLandline_CheckField	:	'#secondaryLandline_CheckField',
        secondaryMobile_CheckField		:	'#secondaryMobile_CheckField',
        mobilePayments					:	'#mobilePayments'
    };
    var validationGrroupsCol = 5;
    var prevAdressValidationIndex = 4;
    var durationValidationIndex = 5;
    //var emailValidationIndex = 2;
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
                type : 'idFormat',
                message : 'personalData1_validation_idnumbers',
                // US4112
                matcher : /^[a-zA-Z0-9\-\s]{1,20}$/,
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
            }, {
                name : 'birthDate',
                value : null,
                validation : {
                    type : 'birthDate',
                    message : 'personalData1_validation_birthDate',
                    group: [ 1 ]
                }
            },
            // US4365
            {
                name : 'idExpiryDate',
                value : null,
                validation : {
                    type : 'idExpiryDate',
                    message : 'personalData1_validation_expiryDate',                    
                    group: [ 1 ]
                }
            },
            // US4168
            {
                name : 'age',
                value : null,
                validation : null
            },
            /*{
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
            },*/
            {
                name : 'homePhone',
                value : null,
                validation : {
                    type : 'phone',
                    message : 'personalData1_validation_homePhone',
                    canBeEmpty : false,
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
            }, {
                name : 'homePhoneRadioGroup',
                value : null,
                validation : {
                    type : 'termsAndConditions',
                    message : 'personalData1_validation_primaryRadio',
                    canBeEmpty : false,
                    group: [ 1 ]
                }
            }, {
                name : 'cellPhoneRadioGroup',
                value : null,
                validation : {
                    type : 'termsAndConditions',
                    message : 'personalData1_validation_secondaryRadio',
                    canBeEmpty : true,
                    group: [ 1 ]
                }
            }, {
                name : 'consentYesOrNoRadioButton',
                value : null,
                validation : null
            },
            
            //{ name: 'consentGranted',     		 value: null, validation: null },
            { notField:true, name: 'MSISDN',     value: null, validation: null },
            { notField: true, name: 'primaryMobile_CheckField',       value: null },
            { notField: true, name: 'primaryLandline_CheckField',     value: null },
            { notField: true, name: 'secondaryLandline_CheckField',   value: null },
            { notField: true, name: 'secondaryMobile_CheckField',     value: null },
            
            { notField: true, name: 'yes_CheckField',   value: null },
            { notField: true, name: 'nothanks_CheckField',     value: null },
            ]
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
            // US4039
            {name: 'housingpayment',    value: null, validation: {type: 'format',       message: '', group: [3], matcher: /^[0-9\,]{1,4}$/} },

            {name: 'years',             value: null, validation: {type: 'presence',     message: '', group: [5]} },
            {name: 'months',            value: null, validation: {type: 'presence',     message: '', group: [5]} },

            {name: 'postalcode_prev',   value: null, validation: {type: 'postal',       message: '', group: [4]} },
            {name: 'streetnumber_prev', value: null, validation: {type: 'streetNumber', message: '', group: [4]} },
            {name: 'addressline1_prev', value: null, validation: {type: 'addressLine',  message: '', group: [4]} },
            {name: 'addressline2_prev', value: null, validation: {type: 'addressLine',  message: '', group: [4], canBeEmpty: true} },
            {name: 'city_prev',         value: null, validation: {type: 'city',         message: '', group: [4]} },
            {name: 'suiteunit_prev',    value: null, validation: {type: 'suiteUnit',    message: '', group: [4], canBeEmpty: true} },
            {name: 'province_prev',     value: null, validation: {type: 'presence',     message: '', group: [4]} },
            // US3623            
            {name: 'flipPrevWasInCanada',  value: null, validation: null },
            
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

        populateIdTypesProvinces();
        populateProvinces();
        populateIdTypesList();

        // Set masks for UI elements
        setUIElementsMasks();

        restoreCreditCardData();

        // onEmailChangesHandler();
        hideShowMoneyAdvantage();
        
        // US3623
         createFlips();
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
    function syncUserData(scanFlag) {
        var sMethod = 'syncUserData() ';
        console.log(logPrefix + sMethod);
        var currModel = models.personalDataModel;
        currModel.set('loyaltyMembershipNumber', $(refs.loyaltyMembershipNumber).val()) ;

        currModel.set('placeofissue', $(refs.placeofissue).val());
        
        console.log(logPrefix + sMethod + " idtype :: before sync :: " + $(refs.idtype).val());        
        // US4210
        /*if($(refs.idtype).val() == "SC") {
        	currModel.set('idtype', 'HE');
        } else {
        	currModel.set('idtype', $(refs.idtype).val());
        }*/
        // DE1667
        if($(refs.idtype).val() != "null") {
        	if (scanFlag){
        		// Don't save any values. Keep the existing value in model.
        	} else {
        		currModel.set('idtype', $(refs.idtype).val());
        	}
        }
        
        console.log(logPrefix + sMethod + " idtype :: after sync:: " + currModel.get('idtype'));
        
        // currModel.set('idtype', $(refs.idtype).val());
        currModel.set('idnumbers', $(refs.idnumbers).val().toUpperCase().replace(/\s/g,''));

        currModel.set('firstName', $(refs.firstName).val().toUpperCase());
        currModel.set('initial', $(refs.initial).val().toUpperCase());
        currModel.set('lastName', $(refs.lastName).val().toUpperCase());
        currModel.set('birthDate', $(refs.birthDate).val());
        
        // US4365
        currModel.set('idExpiryDate', $(refs.idExpiryDate).val());
        
        // US4168
        currModel.set('age', models.personalDataModel.calculateAge(models.personalDataModel));
        console.log(logPrefix + sMethod + " age :: after sync:: " + currModel.get('age'));
        
        currModel.set('primaryMobile_CheckField',      $(refs.primaryMobile_CheckField).is(':checked') ? 'Y' : 'N');
        currModel.set('primaryLandline_CheckField',    $(refs.primaryLandline_CheckField).is(':checked') ? 'Y' : 'N');
        currModel.set('secondaryLandline_CheckField',  $(refs.secondaryLandline_CheckField).is(':checked') ? 'Y' : 'N');
        currModel.set('secondaryMobile_CheckField',    $(refs.secondaryMobile_CheckField).is(':checked') ? 'Y' : 'N');                
        
        currModel.set('homePhoneRadioGroup', isPrimaryPhoneSelected(currModel));
        currModel.set('cellPhoneRadioGroup', isSecondaryPhoneSelected(currModel));
                
        //currModel.set('email', $(refs.email).val());
        //currModel.set('homePhone', $(refs.homePhone).val().replace(/-/g, ''));
        //currModel.set('cellPhone', $(refs.cellPhone).val().replace(/-/g, ''));

        var primaryPhone = $(refs.homePhone).val().replace(/-/g, '');
        var secondaryPhone = $(refs.cellPhone).val().replace(/-/g, '');
        
        /*if(!$(refs.mobilePayments).hasClass('hideElement')){
        	currModel.set('yes_CheckField',  $(refs.yes_CheckField).is(':checked') ? 'Y' : 'N');
            currModel.set('nothanks_CheckField',    $(refs.nothanks_CheckField).is(':checked') ? 'Y' : 'N');
            //currModel.set('consentYesOrNoRadioButton', isConsentGrantedSelected(currModel));
        }*/
        
        currModel.set('homePhone', primaryPhone);
        currModel.set('cellPhone', secondaryPhone);
        console.log(logPrefix + sMethod + " model home phone :: " + currModel.get('homePhone'));
        console.log(logPrefix + sMethod + " model cell phone :: " + currModel.get('cellPhone'));
        	
        // This logic is for filtering the mobile number entered in UI
        // Only for sending to Enstream request
        // Reprint logic for saving number is added here
        if(primaryPhone !== "") {
        	activationItems.setHomePhone(currModel.get('homePhone'));
        		if($(refs.primaryMobile_CheckField).is(':checked')) {
        			activationItems.setMobilePhone(primaryPhone);
        		}
        }
        if(secondaryPhone !== "") {
        	activationItems.setHomePhone(currModel.get('cellPhone'));
        		if($(refs.secondaryMobile_CheckField).is(':checked')) {
        			activationItems.setMobilePhone(secondaryPhone);
        		}
        }
        if(primaryPhone !== "" && secondaryPhone !== "") {
        	activationItems.setHomePhone(currModel.get('homePhone'));
        		if($(refs.primaryMobile_CheckField).is(':checked') && $(refs.secondaryMobile_CheckField).is(':checked')) {
        			activationItems.setMobilePhone(primaryPhone);
        		}
        }
        console.log(logPrefix + sMethod + " Mobile Number :: " + activationItems.getMobilePhone());
        
		// US4282
        //activationItems.setHomePhone(currModel.get('homePhone'));
        console.log(logPrefix + sMethod + " PersonalData HomePhone : " + activationItems.getHomePhone());
        
        // US4797
       // activationItems.setConsentGranted(currModel.get('consentGranted'));
        //console.log(logPrefix + sMethod + " activationItems.getConsentGranted() : " + activationItems.getConsentGranted());
        
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
        
        // US3623 Start
        currModel.set('flipPrevWasInCanada', $(refs.flipPrevWasInCanada + ' ' + 'option:selected').val());
        
        if(currModel.get('flipPrevWasInCanada') === 'Y') {
        	currModel.set('postalcode_prev',    $(refs.postalcode_prev).val().toUpperCase());
            currModel.set('streetnumber_prev',  $(refs.streetnumber_prev).val().toUpperCase());
            currModel.set('addressline1_prev',  $(refs.addressline1_prev).val().toUpperCase());
            currModel.set('addressline2_prev',  '');
            currModel.set('city_prev',          $(refs.city_prev).val().toUpperCase());
            currModel.set('suiteunit_prev',     $(refs.suiteunit_prev).val().toUpperCase());
            currModel.set('province_prev',      $(refs.province_prev).val());
        }        
        // End               
        for (var currModel in models) {
            console.log(logPrefix + sMethod + ' model data: ' + currModel.toString());
        }
        
        

    }
    // ---------------------------------------------------------------------------------------
    function isPrimaryPhoneSelected (currentModel) {
        return  currentModel.get('primaryMobile_CheckField') == 'Y' ||
        currentModel.get('primaryLandline_CheckField') == 'Y';
    }
    // ---------------------------------------------------------------------------------------
    function isSecondaryPhoneSelected (currentModel) {
        return currentModel.get('secondaryLandline_CheckField') == 'Y' ||
        currentModel.get('secondaryMobile_CheckField') == 'Y';
    }
    // ---------------------------------------------------------------------------------------
    /*function isConsentGrantedSelected(currentModel) {
        return (currentModel.get('consentGranted') !== 'Y' &&
        currentModel.get('consentGranted') !== 'N');
    }*/    
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
        //$(refs.email).val(currModel.get('email'));
        $(refs.homePhone).val(currModel.get('homePhone'));
        $(refs.cellPhone).val(currModel.get('cellPhone'));
        // US4365
        $(refs.idExpiryDate).val(currModel.get('idExpiryDate'));
        
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
        // onEmailChangesHandler();
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
        // US3598
        var displayText = argDisplayText.replace(/ {N}| {Y}/gi, '');        
        return "<option value=\"" + argValue + "\">" + displayText + "</option>";
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
    /*function bindRealTimeEmailControl(){
        $(refs.email).change(function(){
            onEmailChangesHandler();
        });
    }*/
    //---------------------------------------------------------------------------------------
    function onDurationChangesHandler(){
        var sMethod = 'onDurationChangesHandler() ';
        console.log(logPrefix + sMethod);

        syncUserData();   
        // US3623                            
        var currModel = models.addressModel;        
        if(currModel.get('years')>=2 || (currModel.get('years')==='' && currModel.get('months')==='')){
            $(refs.previousAddressArea).hide();
            $(refs.personalData_PreviousAddressYesNO).hide();
        }
        else {        	
        	$(refs.personalData_PreviousAddressYesNO).show();
        	if(currModel.get('flipPrevWasInCanada') === 'Y') {
        		$(refs.previousAddressArea).show();                
        	}            
        }

    }
   
    //-----------------------------------------------------------------------------------------
    function bindEvents() {
        var sMethod = 'bindEvents() ';
        console.log(logPrefix + sMethod);

        // bindRealTimeEmailControl();

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
        
        // US4709
        var currModel = models.personalDataModel;
        // Hide Mobile payments if no radio button is slected for primary and cecondary phone 
        /*if(!($(refs.primaryLandline_CheckField).is(':checked')) && !($(refs.secondaryLandline_CheckField).is(':checked')) && !($(refs.primaryMobile_CheckField).is(':checked')) && !($(refs.secondaryMobile_CheckField).is(':checked'))){
        	hideElement();
    		currModel.set('consentGranted', 'N');
    	}*/

        $(refs.placeofissue).change(function(event) {
            console.log(refs.placeofissue + '::change');
            populateIdTypesList();
        });

		// US4364        
        $(refs.idtype).change(function(event) {
            console.log(refs.idtype + '::change');
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
       // US3625 Loyalty Scanner
        $("#personalData_ScanLoyaltyButton").click(function() {
            messageDialog.scanLoyalty(null, onScanLoyaltySuccessCallback, onScanErrorCallback, null, null, translator);
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
        
        /*$(refs.receiveemail_optin).click(function() {
            clearRadios('receiveEmail');
            $(refs.receiveemail_optin).addClass('ui-btn-active');
            models.personalDataModel.set('receiveEmail', 'Y');
        });
        $(refs.receiveemail_optout).click(function() {
            clearRadios('receiveEmail');
            $(refs.receiveemail_optout).addClass('ui-btn-active');
            models.personalDataModel.set('receiveEmail', 'N');
        });*/
        bindAddressHandlingControls();
        bindRadioButtons();
        bindRealTimeDurationControl();

        currModel = models.addressModel;

        // US3623        
        $(refs.flipPrevWasInCanada).on("change", function() {
        	console.log(refs.flipPrevWasInCanada + '::change');
        	models.addressModel.set('flipPrevWasInCanada', $(refs.flipPrevWasInCanada + ' ' + 'option:selected').val());
        	bindPreviousAddress();        	
        });
        
        $(refs.province).on("change", function() {
            console.log(refs.province + '::change');
            models.addressModel.set("province", $(refs.province).val());
        });

        $.subscribe('translatorFinished',function(){
            console.log(refs.province + 'subscribe(translatorFinished)');
            populateProvinces();
            // US4078
            populateIdTypesProvinces();
            
            $(refs.province).val(models.addressModel.get("province"));

        });

        $(refs.province_prev).on("change", function() {
            console.log(refs.province_prev + '::change');
            models.addressModel.set("province_prev", $(refs.province_prev).val());
        });

        $.subscribe('translatorFinished',function(){
            console.log(refs.province_prev + 'subscribe(translatorFinished)');
            populateProvinces();
            // US4078
            populateIdTypesProvinces();
            
            $(refs.province_prev).val(models.addressModel.get("province_prev"));
        });

        checkForMsButton();
    }
    //---------------------------------------------------------------------------------------    
	// US3623 Start
    function setSlidersText() {
    	models.addressModel.set('flipPrevWasInCanada', $(refs.flipPrevWasInCanada + ' ' + 'option:selected').val());
        $(refs.flipPrevWasInCanada_no).text(translator.translateKey("no"));
        $(refs.flipPrevWasInCanada_yes).text(translator.translateKey("yes"));
    }

    function createSliders() {
        $(refs.flipPrevWasInCanada).slider();
    }

    function createFlips() {
        setSlidersText();
        createSliders();
    }
    
    function bindPreviousAddress() {
    	var flipPrevWasInCanada = models.addressModel.get('flipPrevWasInCanada');
    	
    	if(flipPrevWasInCanada === 'Y') {
    		$(refs.previousAddressArea).show();            
    	} else if(flipPrevWasInCanada === 'N') {
    		$(refs.previousAddressArea).hide();            
    	}    	
    }
	// End
    // ---------------------------------------------------------------------------------------
    
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
		// US4251
        $("#personalData_Address_AddressLine1_SelectField").change(function(){        	
        	var displayValue = $("#personalData_Address_AddressLine1_SelectField").val();
        	var aptFlag = displayValue.slice(displayValue.length-3, displayValue.length);
            $("#personalData_Address_AddressLine1_TextField").val($("#personalData_Address_AddressLine1_SelectField").val().replace(/ {N}| {Y}/gi, ''));
            if(aptFlag == "{N}" || aptFlag == "{Y}") {
            	validateAptSuitUnit(aptFlag.substring(1, 2));
            }
        });
		// US4251
        $("#personalData_PreviousAddress_AddressLine1_SelectField").change(function(){
        	var displayValue = $("#personalData_PreviousAddress_AddressLine1_SelectField").val();
        	var aptFlag = displayValue.slice(displayValue.length-3, displayValue.length);
            $("#personalData_PreviousAddress_AddressLine1_TextField").val($("#personalData_PreviousAddress_AddressLine1_SelectField").val().replace(/ {N}| {Y}/gi, ''));
            if(aptFlag == "{N}" || aptFlag == "{Y}") {
            	validatePrevAddrAptSuitUnit(aptFlag.substring(1, 2));
            }
            // $("#personalData_PreviousAddress_AddressLine1_TextField").val($("#personalData_PreviousAddress_AddressLine1_SelectField").val());
        });

    }
    //---------------------------------------------------------------------------------------
    // US4251
    function validateAptSuitUnit(argAptFlag) {
    	var sMethod = "validateAptSuitUnit() :: ";
    	console.log(logPrefix + sMethod + "argAptFlag : " + argAptFlag);    	    	
    	if(argAptFlag == "Y") {
        	var canBeEmptyFlag = true;
        	$.each(models.addressModel.data, function(index, item) {
				if(item.name == "suiteunit") {
					canBeEmptyFlag = item.validation.canBeEmpty = false;
				}
			});
            var validationResult = models.addressModel.validateAptFlag('suiteunit', canBeEmptyFlag);
            if(validationResult.length === 0) {
                if (app.validationsOn) {
                    app.validationDecorator.clearErrArrtibute();
                }
            }
            else {
                if (app.validationsOn) {
                    app.validationDecorator.applyErrAttribute(validationResult);
                }
            }
        } else {
        	// No validation for apt/suit/unit field for aptFlag No.
        }
    }
    //---------------------------------------------------------------------------------------
    function validatePrevAddrAptSuitUnit(argAptFlag) {
    	var sMethod = "validatePrevAddrAptSuitUnit() :: ";
    	console.log(logPrefix + sMethod + "argAptFlag : " + argAptFlag);    	    	
    	if(argAptFlag == "Y") {
        	var canBeEmptyFlag = true;
        	$.each(models.addressModel.data, function(index, item) {
				if(item.name == "suiteunit") {
					canBeEmptyFlag = item.validation.canBeEmpty = false;
				}
			});
            var validationResult = models.addressModel.validateAptFlag('suiteunit_prev', canBeEmptyFlag);
            if(validationResult.length === 0) {
                if (app.validationsOn) {
                    app.validationDecorator.clearErrArrtibute();
                }
            }
            else {
                if (app.validationsOn) {
                    app.validationDecorator.applyErrAttribute(validationResult);
                }
            }
        } else {
        	// No validation for apt/suit/unit field for aptFlag No.
        }
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
        }/*
        else if (radioGroup === 'receiveEmail') {
            $(refs.receiveemail_optin).removeClass('ui-btn-active');
            $(refs.receiveemail_optout).removeClass('ui-btn-active');
            currModel.set('receiveEmail', null);
        }*/ 
        else if (radioGroup === 'residence') {
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
    
    // US4078
    // ---------------------------------------------------------------------------------------
    function populateIdTypesProvinces() {
        var sMethod = 'idTypesPopulateProvinces() ',
            idTypesProvincesList = new WICI.IdTypesProvincesList(),
            optTempl = '',
            provinceDropDowns;

        console.log(logPrefix + sMethod);

        $.each(idTypesProvincesList.data, function (index, item) {
            optTempl += '<option value="' +
                item.value +
                '">' +
                translator.translateKey(item.text) +
                '</option>';
        });

        idTypesProvinceDropDowns = {
            personalDataModel: {
                placeofissue: refs.placeofissue
            }
        };

        $.each(idTypesProvinceDropDowns, function (modelName, dropdowns) {
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

		// DE1667
        if(takeIdTypeByProvince) {
        	syncUserData(true);
        } else {
        	syncUserData();
        }
        
        currModel = models.personalDataModel;
        provinceValue = currModel.get('placeofissue');
        idType = currModel.get('idtype');

        controlRef = $(refs.idtype);

        controlRef.empty();
        populateIdTypesProvinces();

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
        
        // US4364
        console.log(logPrefix + sMethod + " provinceValue : " + provinceValue + " idType : " + idType);
        // DE1667
        if(takeIdTypeByProvince) {
        	if($.inArray(idType, ['DR']) != -1) {
        		$("#personalData_IDNumber").removeClass("fieldLabelsBottomCell");
            	$("#personalData_IDNumber").addClass("fieldLabelsCell");
            	$("#personalData_ExpiryDate").removeClass("fieldLabelsCell");
            	$("#personalData_ExpiryDate").addClass("fieldLabelsBottomCell");
            	            	
            	$.each(models.personalDataModel.data, function(index, item) {
            		if(item.name == "idExpiryDate") {
         				item.validation.canBeEmpty = false;
         			}
         		});
            	 
            	$(refs.expiryDate_Area).show();
        	} else {
        		$("#personalData_IDNumber").removeClass("fieldLabelsCell");
            	$("#personalData_IDNumber").addClass("fieldLabelsBottomCell");
            	$(refs.idExpiryDate).val("");
            	
            	$.each(models.personalDataModel.data, function(index, item) {
          			if(item.name == "idExpiryDate") {
          				item.validation.canBeEmpty = true;
          			}
          		});
            	
            	$(refs.expiryDate_Area).hide();
        	}
        } else {
        	if ( ($.inArray(idType, ['DR', 'PA', 'PR', 'IN', 'SC', 'BC', 'AB', 'NS', 'NB', 'NL', 'SK', 'MB', 'PE', 'NT', 'NU', 'YT', 'ON']) != -1) || 
            		($.inArray(provinceValue, ['QC', 'NB', 'NL', 'SK', 'NU']) != -1 && $.inArray(idType, ['HE']) != -1))  {
            	$("#personalData_IDNumber").removeClass("fieldLabelsBottomCell");
            	$("#personalData_IDNumber").addClass("fieldLabelsCell");
            	$("#personalData_ExpiryDate").removeClass("fieldLabelsCell");
            	$("#personalData_ExpiryDate").addClass("fieldLabelsBottomCell");
            	console.log(" idExpiryDate : " + $(refs.idExpiryDate).val());
            	if ($(refs.idExpiryDate).val()){
            		// Do nothing to retain the entered value
            	} else {
            		$(refs.idExpiryDate).val("");
            	}

            	$.each(models.personalDataModel.data, function(index, item) {
            		if(item.name == "idExpiryDate") {
         				item.validation.canBeEmpty = false;
         			}
         		});
            	 
            	$(refs.expiryDate_Area).show();
            } else if(($.inArray(provinceValue, ['AB']) != -1 && $.inArray(idType, ['HE']) != -1) || $.inArray(idType, ['BI', 'CI', 'RE']) != -1) {
            	
            	console.log("Hiding Expiry date field...");
            	
            	$("#personalData_IDNumber").removeClass("fieldLabelsCell");
            	$("#personalData_IDNumber").addClass("fieldLabelsBottomCell");
            	$(refs.idExpiryDate).val("");
            	
           	 	$.each(models.personalDataModel.data, function(index, item) {
           	 		if(item.name == "idExpiryDate") {
           	 			item.validation.canBeEmpty = true;
           	 		}
           	 	});
            	
            	$(refs.expiryDate_Area).hide();
            } else {
            	
            	console.log("Default Hiding Expiry date field...");
            	
            	// Expiry date will be hidden for any new fields added in ID Type.
            	// To enable Expiry date, have to add logic in this above conditions
            	$("#personalData_IDNumber").removeClass("fieldLabelsCell");
            	$("#personalData_IDNumber").addClass("fieldLabelsBottomCell");
            	$(refs.idExpiryDate).val("");
            	
            	$.each(models.personalDataModel.data, function(index, item) {
          			if(item.name == "idExpiryDate") {
          				item.validation.canBeEmpty = true;
          			}
          		});
            	
            	$(refs.expiryDate_Area).hide();
            }
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
                   		// US4251
	                    var addressLine;
	                    if (lookupHelper.getAddressLine1()) {
	                        $.each(lookupHelper.getAddressLine1(), function(index, item) {
	                        	addressLine = item;
	                        });
	                    }
	                    var aptFlag = addressLine.slice(addressLine.length-3, addressLine.length).substring(1, 2);
	                    $("#personalData_Address_AddressLine1_TextField").val(addressLine.replace(/ {N}| {Y}/gi, ''));
	                    validateAptSuitUnit(aptFlag);	                    
	                    // $("#personalData_Address_AddressLine1_TextField").val(lookupHelper.getAddressLine1());
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
						// US4251
						$("#addressLookup_PreviousAddress_AddressLine1_MultipleControl").hide();
						var addressLine;
	                    if (lookupHelper.getAddressLine1()) {
	                        $.each(lookupHelper.getAddressLine1(), function(index, item) {
	                        	addressLine = item;
	                        });
	                    }
	                    var aptFlag = addressLine.slice(addressLine.length-3, addressLine.length).substring(1, 2);
	                    $("#personalData_PreviousAddress_AddressLine1_TextField").val(addressLine.replace(/ {N}| {Y}/gi, ''));
	                    validatePrevAddrAptSuitUnit(aptFlag);	
						// $("#personalData_PreviousAddress_AddressLine1_TextField").val(lookupHelper.getAddressLine1());
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
        
        // US4251 - to make apt field optional
        $.each(models.addressModel.data, function(index, item) {
			if(item.name == "suiteunit") {
				canBeEmptyFlag = item.validation.canBeEmpty = true;
			}
		});
        
        if (app.validationsOn) {
            app.validationDecorator.clearErrArrtibute();
            var validationGroupsRez = [];
            var rez = [];
            var c1;
            var currModel = models.addressModel;
            var enteredYears = models.addressModel.get('years');
            var enteredMonthes = models.addressModel.get('months');
            // US4112
            // Id validation start here
            valid =  app.validationDecorator.idNumberValidation(models.personalDataModel,refs.idnumbers);
            // US4781
            // Phone number validation based on canBeEmpty true or false
            if($(refs.homePhone).val() !== '' && $(refs.cellPhone).val() !== '') {
            	console.log(logPrefix + sMethod + "HomePhone and CellPhone are not null");
            	setFlag(false, false);
            } else if($(refs.homePhone).val() !== '' && $(refs.cellPhone).val() === '') {
            	console.log(logPrefix + sMethod + "HomePhone is not null and CellPhone is null");
            	setFlag(false, true);
            } else if($(refs.homePhone).val() === '' && $(refs.cellPhone).val() !== '') {
            	console.log(logPrefix + sMethod + "HomePhone is null and CellPhone is not null");
            	setFlag(true, false);
            } else if($(refs.homePhone).val() === '' && $(refs.cellPhone).val() === '') {
            	console.log(logPrefix + sMethod + "HomePhone and CellPhone are null");
            	setFlag(false, true);
            } 
            
            if($(refs.homePhone).val() === '' && 
            		($(refs.primaryLandline_CheckField).is(':checked') || $(refs.primaryMobile_CheckField).is(':checked'))) {
            	console.log(logPrefix + sMethod + "HomePhone is null and radio button is checked");
            	setFlag(false, true);
            } 
            
            if($(refs.cellPhone).val() === '' && 
            		($(refs.secondaryLandline_CheckField).is(':checked') || $(refs.secondaryMobile_CheckField).is(':checked'))) {
            	console.log(logPrefix + sMethod + "CellPhone is null and radio button is checked");
            	setFlag(true, false);
            }
            
            if(($(refs.homePhone).val() === '' && $(refs.cellPhone).val() === '') && 
            		(($(refs.primaryLandline_CheckField).is(':checked') || $(refs.primaryMobile_CheckField).is(':checked'))) &&
            		($(refs.secondaryLandline_CheckField).is(':checked') || $(refs.secondaryMobile_CheckField).is(':checked'))) {
            	console.log(logPrefix + sMethod + "HomePhone and CellPhone are null and homephone radio and cellphone radio are checked");
            	setFlag(false, false);
            }
            
            var temprez;
       		// validEmail = /^[_a-z0-9-][_a-z0-9-]+(\.[_a-z0-9+]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/i;
            for (var i = 1; i <= validationGrroupsCol; i++) {
               if (i <= personalDataValidationMax ) {
                    temprez = models.personalDataModel.validate(i);
               } else {
                    temprez = models.addressModel.validate(i);
               }
               
                //custom validation for e-mail
                /*if (i === emailValidationIndex && validEmail.test(models.personalDataModel.get('email').trim()) != true ) {
                    continue;
                }*/
                //custom validation for previous adress
               if (i === prevAdressValidationIndex) {
                    if ( enteredYears >= 2) {                    	
                        continue;
                    } else if ( enteredYears < 2) {                    	                    		                   
                    	if (models.addressModel.get('flipPrevWasInCanada') === 'N') {	                    	
	                    	continue;
	                    } 
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
                
                // US4781
                app.validationDecorator.applyErrAttribute(rez);
                // US4112
                if(!valid){
                	app.validationDecorator.focusControl(refs.idnumbers);                	
                }
                syncUserData();
                return;
            }
            // US4112
            else{
            	 if(!valid){
                 	app.validationDecorator.focusControl(refs.idnumbers);
                 	 return;
                 }
            }
                              
            var edgeValidation = models.personalDataModel.validateAge(models.personalDataModel, models.addressModel.get('province'));
            var rez = [];
            if (edgeValidation != null) {
                rez.push(edgeValidation);
                messageDialog.error(
                    translator.translateKey(edgeValidation.err), null,
                    selectDOBFileld);
                app.validationDecorator.applyErrAttribute(rez, true);
                return;
            }
            
            syncUserData();
        }
        // US4781
        updatePhoneNumberInModel();
        flow.next();
    }
    // US4781
    // setting canBeEmpty flag based on the input entered
    function setFlag(argHomeFlag, argPhoneFlag) {
    	var sMethod = 'setFlag() ';
        console.log(logPrefix + sMethod);
    	$.each(models.personalDataModel.data, function(index, item) {
    		if(item.name == "homePhone") {
				item.validation.canBeEmpty = argHomeFlag;
				console.log(logPrefix + sMethod + " homePhone :: canBeEmpty " + item.validation.canBeEmpty);
			}
			if(item.name == "cellPhone") {
				item.validation.canBeEmpty = argPhoneFlag;
				console.log(logPrefix + sMethod + " cellPhone :: canBeEmpty " + item.validation.canBeEmpty);
			}
			if(item.name == "homePhoneRadioGroup") {
				item.validation.canBeEmpty = argHomeFlag;
				console.log(logPrefix + sMethod + " homePhoneRadioGroup :: canBeEmpty " + item.validation.canBeEmpty);
			}
			if(item.name == "cellPhoneRadioGroup") {
				item.validation.canBeEmpty = argPhoneFlag;
				console.log(logPrefix + sMethod + " cellPhoneRadioGroup :: canBeEmpty " + item.validation.canBeEmpty);
			}
		});
    }

    function selectDOBFileld() {
        app.validationDecorator.focusControl(refs.birthDate);
    }

    //---------------------------------------------------------------------------------------
    function hideShowMoneyAdvantage (){

        cardTypeGlobal = activationItems.getModel('chooseProductModel').get('productCard');
        if(cardTypeGlobal === 'OMX') {
            $(refs.moneyAdvantageContainer).show();
        }
        else {
            $(refs.moneyAdvantageContainer).hide();
        }
    }

    function mod10(value, length) {
        var luhnArr = [0, 2, 4, 6, 8, 1, 3, 5, 7, 9],
            counter = 0,
            odd = false,
            incNum, i;

        for (i = value.length - 1; i >= 0; --i) {
            incNum = parseInt(value.charAt(i), 10);
            counter += (odd =! odd) ? incNum : luhnArr[incNum];
        }

        if (!(_.isString(value) && value.length >= length)) {
            return false;
        }

        if ((counter % 10) === 0) {
            return true;
        } else {
            return false;
        }
    };
    
    // US3625 Loyalty Scanner
    // ---------------------------------------------------------------------------------------
    function onScanLoyaltySuccessCallback(response) {
         
    	console.log('onScanLoyaltySuccessCallback - response: ' + response.data);
    	
        try {
            rez = response.data;
            if (!rez) {
                throw ('ERROR! Got the empty data.');
            }
            if((rez.indexOf('PDF') === -1) && (mod10(rez,16)) )
            {	
               	$('#personalData_CTMNumber_TextField').val(rez);
            }else
            	{
            	$('#personalData_CTMNumber_TextField').val('');
            	messageDialog.error(
            			 translator.translateKey('scanLoyalty_parsingErrorText'),
                         translator.translateKey('personalData_Scan_Loyalty_Dialog_Label'),
                         $.noop
                );
            }
             
        } catch (e) {
        	$('#personalData_CTMNumber_TextField').val('');
            messageDialog.error(
                 translator.translateKey('scanLoyalty_parsingErrorText'),
                 translator.translateKey('personalData_Scan_Loyalty_Dialog_Label'),
                     $.noop
            );
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
                addressProvince: refs.province,
                expiryDate: refs.idExpiryDate
            },
            rez, scanned, prop;
        // US4451
        if (parser.checkSupportedID(response.data, ['ANSI']) > 0) {
        	try {
                // DE1667
                rez = parser.parse(response.data);            
                var idType = JSON.stringify(rez.idType);
                var idNumber = JSON.stringify(rez.idNumber);
                var idProvince = JSON.stringify(rez.idProvince);
                
                var currModel = models.personalDataModel;
                
                if(idType != "null" && idProvince != "null" && idNumber != "null" ) {
                  if( idProvince.split('"').join('') === "MB" && idType.split('"').join('') === "DR" ) {
                	  idNumberValue  = idNumber.split('*').join('');
                	  currModel.set("idnumbers", idNumberValue.split('"').join(''));
                	  rez.idNumber = currModel.get('idnumbers');
                  } 
                }
                
                if(idType != "null") {
                	currModel.set('idtype', idType.split('"').join(''));
                }
                
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
                
                // US4535
                disableScannedDriversLicenceFields();                       
            } catch (e) {
                messageDialog.error(
                    translator.translateKey('scanID_parsingErrorText'),
                    translator.translateKey('personalData_Scan_Id_Label'),
                    $.noop
                );
            }
        } else {
        	try {
                rez = parser.parseNewDL(response.data);
                var idType = JSON.stringify(rez.idType);
                var idNumber = JSON.stringify(rez.idNumber);
              
                var currModel = models.personalDataModel;
          	    currModel.set("idnumbers", parseInt(idNumber));
               	currModel.set('idtype', idType.split('"').join(''));
                
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
                
                disableScannedDriversLicenceFields();                       
            } catch (e) {
                messageDialog.error(
                    translator.translateKey('scanID_parsingErrorText'),
                    translator.translateKey('personalData_Scan_Id_Label'),
                    $.noop
                );
            }
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
    // US4535
    function disableScannedDriversLicenceFields(){
    	$(refs.placeofissue).prop('disabled', true);
    	$(refs.idtype).prop('disabled', true);
    	$(refs.idnumbers).prop('disabled', true);
    	$(refs.idExpiryDate).prop('disabled', true);
    	$(refs.firstName).prop('disabled', true);
    	$(refs.initial).prop('disabled', true);
    	$(refs.lastName).prop('disabled', true);
    	$(refs.birthDate).prop('disabled', true);
    }
    // US4709
    // ---------------------------------------------------------------------------------------
    /*function hideElement(){
    	var sMethod = logPrefix + '[hideElement]: ';
    	console.log(sMethod);
    	
    	var loginModel = activationItems.getModel('loginScreen');
        console.log(logPrefix + sMethod + " enableEnstreamAuth "+loginModel.get('enableEnstreamAuth'));
    	if(loginModel.get('enableEnstreamAuth')){
    	    $(refs.mobilePayments).addClass('hideElement');
    	}
    }*/
    // US4781  
    // ---------------------------------------------------------------------------------------
    function updatePhoneNumberInModel()
    {
    	var sMethod = "updatePhoneNumberInModel()";
    	var primaryPhone = $(refs.homePhone).val().replace(/-/g, '');
        var secondaryPhone = $(refs.cellPhone).val().replace(/-/g, '');
        
        var currModel = models.personalDataModel;
    	console.log(logPrefix + sMethod + " secondaryPhone :: " +secondaryPhone + "primaryPhone : "+primaryPhone + "primary mobile checked :" +$(refs.primaryMobile_CheckField).is(':checked'));
            
        if(($(refs.primaryLandline_CheckField).is(':checked') && (primaryPhone !== "")) && ($(refs.secondaryLandline_CheckField).is(':checked')) && (secondaryPhone !== "") ) {
    		console.log(logPrefix + sMethod +" 4 : primary  landline checked :"+ $(refs.primaryLandline_CheckField).is(':checked') + 
    				" secondary landline checked :" +$(refs.secondaryLandline_CheckField).is(':checked')+ "primaryPhone :"+ primaryPhone + "secondaryPhone :: "+secondaryPhone);
    		currModel.set('homePhone', primaryPhone);
        	currModel.set('cellPhone', secondaryPhone);        	        	
    	} else if($(refs.primaryMobile_CheckField).is(':checked') && $(refs.secondaryMobile_CheckField).is(':checked') && (primaryPhone !== "") && (secondaryPhone !== "")) {
    		console.log(logPrefix + sMethod +" 5 : primary  mobile checked :"+ $(refs.primaryMobile_CheckField).is(':checked') + 
    				" secondary mobile checked :" +$(refs.secondaryMobile_CheckField).is(':checked')+ "primaryPhone :"+ primaryPhone + "secondaryPhone :: "+secondaryPhone);
    		currModel.set('homePhone', secondaryPhone);
        	currModel.set('cellPhone', primaryPhone);
    	} else if(($(refs.primaryLandline_CheckField).is(':checked')) && (primaryPhone !== "") && ($(refs.secondaryMobile_CheckField).is(':checked')) && (secondaryPhone !== "")) {
    		console.log(logPrefix + sMethod +" 6 : primary  landline checked :"+ $(refs.primaryLandline_CheckField).is(':checked')
    				+ " secondary mobile checked :" +$(refs.secondaryMobile_CheckField).is(':checked')+ "primaryPhone :"+ primaryPhone + "secondaryPhone :: "+secondaryPhone);
    		currModel.set('homePhone', primaryPhone);
        	currModel.set('cellPhone', secondaryPhone);
    	} else if(($(refs.primaryMobile_CheckField).is(':checked')) && (primaryPhone !== "")  && ($(refs.secondaryLandline_CheckField).is(':checked')) && (secondaryPhone !== "")) {
    		console.log(logPrefix + sMethod +" 7 : primary  mobile checked :"+ $(refs.primaryMobile_CheckField).is(':checked')
    				+ " secondary landline checked :" +$(refs.secondaryLandline_CheckField).is(':checked')+ "primaryPhone :"+ primaryPhone + "secondaryPhone :: "+secondaryPhone);
    		currModel.set('homePhone', secondaryPhone);
        	currModel.set('cellPhone', primaryPhone);        	        	
    	} else if($(refs.secondaryMobile_CheckField).is(':checked') && (secondaryPhone !== "") ) {
    		console.log(logPrefix + sMethod +" 8 : secondary mobile  mobile checked :"+ $(refs.secondaryMobile_CheckField).is(':checked')+ "secondaryPhone :: "+secondaryPhone);
    		currModel.set('homePhone', secondaryPhone);
        	currModel.set('cellPhone', secondaryPhone);        	        	
    	} else if($(refs.primaryLandline_CheckField).is(':checked') && (primaryPhone !== "") ) {
    		console.log(logPrefix + sMethod + " 2 :  primaryPhone : "+primaryPhone + " primary landline checked  :" +$(refs.primaryLandline_CheckField).is(':checked'));
    		currModel.set('homePhone', primaryPhone);
    		// this is for confirmation screen
    		currModel.set('cellPhone', "");    		    		
    	} else if($(refs.secondaryLandline_CheckField).is(':checked') && (secondaryPhone !== "") ) {
    		console.log(logPrefix + sMethod + " 3 : secondary landline checked :" +$(refs.secondaryLandline_CheckField).is(':checked'));
    		currModel.set('homePhone', secondaryPhone);
    		// this is for confirmation screen
    		currModel.set('cellPhone', "");    		    		
    	} else if($(refs.primaryMobile_CheckField).is(':checked') && (primaryPhone !== "") && (secondaryPhone === "")) {
        	
        	console.log(logPrefix + sMethod + "  1  : secondaryPhone :: " +secondaryPhone + "primaryPhone : "+primaryPhone + "primary mobile checked :" +$(refs.primaryMobile_CheckField).is(':checked'));
        	currModel.set('homePhone', primaryPhone);
            currModel.set('cellPhone', primaryPhone);            
    	}
    	
        console.log(logPrefix + sMethod + " model home phone :: " +currModel.get('homePhone'));
        console.log(logPrefix + sMethod + " model cell phone :: " +currModel.get('cellPhone'));
    };
    
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
