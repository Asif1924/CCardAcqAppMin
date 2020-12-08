ensureNamespaceExists();

WICI.PersonalDataScreenController = function(activationItems, argTranslator,
                                             argMessageDialog) {

    var logPrefix = '[WICI.PersonalDataScreenController]::';
    var $screenContainer = $('#PersonalDataScreen');
    var translator = null;
    var messageDialog = null;
    var connectivityController = null;
    var isDebugMode;

    var userPostalCode;
    var userStreetNumber;
    this.show = show;
    this.init = init;
    this.hide = hide;

    var flow = null;
    var addressLookupButton1Enabled = false;
    var addressLookupButton2Enabled = false;
    var showQCHealthCard = false;
    var isAliveInterval = null;
    
    var expirydateForQC = "";
    var month;
    var expiryDate;
    var year ,formatedMonth;
    var $addressLookupButtonClicked = null;
    this.syncUserData = syncUserData;
    var refs = {
        moneyAdvantageContainer :   '#personalData_MyCTMArea',
        loyaltyMembershipNumber :   '#personalData_CTMNumber_TextField',
		loyaltyMembershipNumberPrefix  :	'#personalData_CTMNumber_TextField_Prefix',
		
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

        correspondence : '#personalData_Correspondence_Group',
        correspondence_eng : '#personalData_English_RadioButton',
        correspondence_fre : '#personalData_French_RadioButton',
        
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
        // US5131 WICI - Add Student Housing label to Residence Type list
        house_student:      '#personalData_Address_Student_RadioButton',

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
        
        // US5131
        
        recidance_own       : '#residance_Own',
        residance_Rent      : '#residance_Rent',
        residance_Parents   : '#residance_Parents',
        residance_Student   : '#residance_Student',
        residance_Other     : '#residance_Other',
        
        // US4709
        mobilePayments					:	'#mobilePayments',
        month_expirydate_QC_healthCard  :   '#personalData_month_of_expirydate',
        year_expirydate_QC_healthCard   :   '#personalData_year_of_expirydate',
    };
    var validationGrroupsCol = 5;
    var prevAdressValidationIndex = 4;
    var durationValidationIndex = 5;
    var personalDataValidationMax = 2;
    var personalDataModel = new WICI.BaseModel({
        name : 'personalData',
        refs : refs,
        data : [ 
		{ name: 'loyaltyMembershipNumber', 	value: null,  validation : { type : 'mod10', 		message : '', group: [ 1 ], canBeEmpty: true, minlength: 16 } },
		{ name : 'placeofissue', 			value : null, validation : { type : 'presence', 	message : '', group: [ 1 ] } },
		{ name : 'idtype', 					value : null, validation : { type : 'presence', 	message : '', group: [ 1 ] } },
		{ name : 'idnumbers', 				value : null, validation : { type : 'idFormat', 	message : '', group: [ 1 ], matcher : /^[a-zA-Z0-9\-\s]{1,20}$/ } },
		{ name : 'title', 					value : null, validation : null },
		{ name : 'firstName', 				value : null, validation : { type : 'personName',   message : '', group: [ 1 ] } },
		{ name : 'initial', 				value : null, validation : { type : 'format', 	    message : '', group: [ 1 ], matcher : /^[A-Z]{1}/, canBeEmpty : true } },
		{ name : 'lastName', 				value : null, validation : { type : 'personName',   message : '', group: [ 1 ] } },
		{ name : 'birthDate', 				value : null, validation : { type : 'birthDate',    message : '', group: [ 1 ] } },
        { name : 'idExpiryDate', 			value : null, validation : { type : 'idExpiryDate', message : '', group: [ 1 ] } },
        { name : 'age', 					value : null, validation : null },
		{ name : 'correspondence', 			value : null, validation : { type : 'presence', 	message : '', group: [ 1 ] } },
		{notField: true, name: 'scanFlag', value: null },
		{name: 'DSAScore',  value: null, validation: null },
		{name: 'treatmentCode',  value: null, validation: null },
		{name: 'tmxProfileID',  value: null, validation: null },
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
			{notField: true, name: 'addressline1_prev_Array', value: null },
            {name: 'house',             value: null, validation: {type: 'presence',     message: '', group: [3]} },
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
            {name: 'flipPrevWasInCanada',  value: null, validation: null }]
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
        isDebugMode = activationItems.getModel('loginScreen').get('isDebugMode');
        
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
		createFlips();
		restoreCreditCardData();
        populateIdTypesProvinces();
        populateProvinces();
        populateIdTypesList();
        showHideQCHealthCard();
        populateMonthOfExpiryDate();
        populateYearOfExpiryDate();
        setUIElementsMasks();
        hideShowMoneyAdvantage();
        applyPaddingForResidanceType();
		setLoyaltyMembershipNumberPrefix();
    }
    // ---------------------------------------------------------------------------------------
	function setLoyaltyMembershipNumberPrefix() {
		$(refs.loyaltyMembershipNumberPrefix).val("636574");
		$(refs.loyaltyMembershipNumberPrefix).attr('disabled', 'disabled');
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
            // US5131 WICI - Add Student Housing label to Residence Type list    
            case 'S':
            	$(refs.house_student).addClass('ui-btn-active');
            	break;     
            case 'M':
                $(refs.house_Other).addClass('ui-btn-active');
                break;
        }
    }
	//---------------------------------------------------------------------------------------
    function updateTitleRadioButtons() {
        clearRadios('title');
        switch (models.personalDataModel.get('title')) {
            case 'MR':
                $(refs.title_MR).addClass('ui-btn-active');
                break;
            case 'MRS':
                $(refs.title_MRS).addClass('ui-btn-active');
                break;
            case 'MISS':
                $(refs.title_MISS).addClass('ui-btn-active');
                break;
            case 'MS':
            	$(refs.title_MS).addClass('ui-btn-active');
            	break;     
        }
    }
	//---------------------------------------------------------------------------------------
    function updateCorrespondenceRadioButtons() {
        clearRadios('correspondence');
        switch (models.personalDataModel.get('correspondence')) {
            case 'E':
                $(refs.correspondence_eng).addClass('ui-btn-active');
                break;
            case 'F':
                $(refs.correspondence_fre).addClass('ui-btn-active');
                break;
        }
    }
    // ---------------------------------------------------------------------------------------
    function setUIElementsMasks() {
        $(refs.housingpayment).autoNumeric('init', {aSign:' $ ',vMin:'0.00', vMax:'9999.99', mDec:'0', wEmpty: 'sign'});

        $(refs.years).durationControl('createControl');
        $(refs.months).durationControl('createControl');

        $(refs.years).autoNumeric('init', {aSign:'',vMin:'0', vMax:'100', mDec:'0'});
        $(refs.months).autoNumeric('init', {aSign:'',vMin:'0', vMax:'11', mDec:'0'});

        $(refs.loyaltyMembershipNumber).autoNumeric('init', {aSign:'',vMin:'0', vMax:'9999999999', mDec:'0',wEmpty: '', aSep:'', lZero: 'keep'});
    }
    // ---------------------------------------------------------------------------------------
    function createView() {
        $screenContainer.empty();
        assembleNavigationBarAtTop();
        WICI.BreadcrumbsHelper.assembleBreadcrumbs(3, $screenContainer, activationItems);
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
        console.log(logPrefix + sMethod + " " + $(refs.loyaltyMembershipNumberPrefix).val()+$(refs.loyaltyMembershipNumber).val());

        var currModel = models.personalDataModel;
		if($(refs.loyaltyMembershipNumber).val() == null || $(refs.loyaltyMembershipNumber).val() == '') {
			currModel.set('loyaltyMembershipNumber', $(refs.loyaltyMembershipNumber).val()) ;
		} else {
			currModel.set('loyaltyMembershipNumber', $(refs.loyaltyMembershipNumberPrefix).val()+$(refs.loyaltyMembershipNumber).val()) ;
		}
		console.log(logPrefix + sMethod + " loyaltyMembershipNumber in model " + currModel.get('loyaltyMembershipNumber'));
		
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
        
        currModel.set('idnumbers', $(refs.idnumbers).val().toUpperCase().replace(/\s/g,''));

        currModel.set('firstName', $(refs.firstName).val().toUpperCase());
        currModel.set('initial', $(refs.initial).val().toUpperCase());
        currModel.set('lastName', $(refs.lastName).val().toUpperCase());
        currModel.set('birthDate', $(refs.birthDate).val());
        
        // US4365
      
        if(showQCHealthCard){
        	if(currModel.get('placeofissue') != null && currModel.get('idtype') != null  && currModel.get('placeofissue') == 'QC' && currModel.get('idtype') == 'HE'){
              expiryDateQC_HE = getExpiryDateQC_HE(formatedMonth, year);
              console.log(logPrefix + sMethod + "expirydateForQC :: "  + expiryDateQC_HE );
              currModel.set('idExpiryDate', expiryDateQC_HE);
         	}
        } 
        else{
        	 currModel.set('idExpiryDate', $(refs.idExpiryDate).val());
        }
        
        // US4168
        currModel.set('age', models.personalDataModel.calculateAge(models.personalDataModel));
        console.log(logPrefix + sMethod + " age :: after sync:: " + currModel.get('age'));
        
        currModel = models.addressModel;

        currModel.set('postalcode',     $(refs.postalcode).val().toUpperCase());
        currModel.set('streetnumber',   $(refs.streetnumber).val().toUpperCase());
        currModel.set('addressline1',   $(refs.addressline1).val().toUpperCase());
        currModel.set('addressline2',   '');
        currModel.set('suiteunit',      $(refs.suiteunit).val().toUpperCase());
        currModel.set('city',           $(refs.city).val().toUpperCase());
		if(currModel.get('province')) {
			currModel.set('province',       currModel.get('province'));
		} else {
			currModel.set('province',       $(refs.province).val());
		}
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
			if(currModel.get('province_prev')) {
				currModel.set('province_prev',      currModel.get('province_prev'));
			} else {
				currModel.set('province_prev',      $(refs.province_prev).val());
			}
        }        
        // End               
        for (var currModel in models) {
            console.log(logPrefix + sMethod + ' model data: ' + currModel.toString());
        }
		console.log(logPrefix + sMethod + ' model data: ' + models.personalDataModel.toString());
		console.log(logPrefix + sMethod + ' model data: ' + models.addressModel.toString());
    }
    // ---------------------------------------------------------------------------------------
    function restoreCreditCardData() {
        var sMethod = "restoreCreditCardData()";
        console.log(logPrefix + sMethod);

		for (var currModel in models) {
            console.log(logPrefix + sMethod + ' model data: ' + currModel.toString());
        }

        var currModel = models.personalDataModel;

		console.log(logPrefix + sMethod + ' model data: ' + currModel.toString());
		populateIdTypesProvinces();
		restorePopulateIdTypesList();
        $(refs.loyaltyMembershipNumber).val(currModel.get('loyaltyMembershipNumber'));
        $(refs.placeofissue).val(currModel.get('placeofissue'));
        $(refs.idtype).val(currModel.get('idtype'));
        $(refs.idnumbers).val(currModel.get('idnumbers'));
        $(refs.firstName).val(currModel.get('firstName'));
        $(refs.initial).val(currModel.get('initial'));
        $(refs.lastName).val(currModel.get('lastName'));
        $(refs.birthDate).val(currModel.get('birthDate'));
        // US4365
        $(refs.idExpiryDate).val(currModel.get('idExpiryDate'));
        
		if(models.personalDataModel.get('scanFlag')) {
			disableScannedDriversLicenceFields();
		}
        currModel = models.addressModel;

		console.log(logPrefix + sMethod + ' model data: ' + currModel.toString());

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
		updateTitleRadioButtons();
		updateCorrespondenceRadioButtons();
        onDurationChangesHandler();
        updateLookUpControls();
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
                repopulateAddressLineControl(currModel.get('addressline1_prev_Array'),$("#personalData_PreviousAddress_AddressLine1_SelectField"), 'addressline1_prev_Array');
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
    //---------------------------------------------------------------------------------------
    function onDurationChangesHandler(){
        var sMethod = 'onDurationChangesHandler() ';
        console.log(logPrefix + sMethod);

        syncUserData();   
        // US3623                            
        var currModel = models.addressModel;
		console.log(logPrefix + sMethod + currModel.get('years') + currModel.get('months'));

		if(currModel.get('years') >=2 || (currModel.get('years') === '' && currModel.get('months') === '')){
            $(refs.previousAddressArea).hide();
            $(refs.personalData_PreviousAddressYesNO).hide();
        } else if(currModel.get('years') === null && currModel.get('months') === null) {
			$(refs.previousAddressArea).hide();
            $(refs.personalData_PreviousAddressYesNO).hide();
		} else {        	
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

        $(refs.placeofissue).change(function(event) {
            console.log(refs.placeofissue + '::change');
            //US5558
            $(refs.idtype).val(" ")
            $(refs.idnumbers).val(" ");
            $(refs.idExpiryDate).val(" ");
			models.personalDataModel.set('scanFlag', false);
			models.personalDataModel.set('placeofissue', '');
			models.personalDataModel.set('idtype', '');
			console.log(refs.placeofissue + '::change :: ' + models.personalDataModel.get('placeofissue') + " " + models.personalDataModel.get('idtype'));
            populateIdTypesList();
            showHideQCHealthCard();
        });

		// US4364        
        $(refs.idtype).change(function(event) {
            console.log(refs.idtype + '::change');
            populateIdTypesList();
            showHideQCHealthCard();
        });
    
        $(refs.month_expirydate_QC_healthCard).change(function(event) {
            console.log(refs.month_expirydate_QC_healthCard + '::change');
           month =  $("#personalData_month_of_expirydate :selected").text();
           formatedMonth = ("0" + month).slice(-2);
           console.log(refs.month_expirydate_QC_healthCard + '::change' + "month :: " + formatedMonth + typeof parseInt(formatedMonth)  );
        });
        
        $(refs.year_expirydate_QC_healthCard).change(function(event) {
            console.log(refs.year_expirydate_QC_healthCard + '::change');
            year =  $("#personalData_year_of_expirydate :selected").text();
            console.log(refs.year_expirydate_QC_healthCard + '::change' + "year :: " + year);
            
        });

        $.subscribe('translatorFinished', function(event) {
            console.log(refs.placeofissue + '::change');
            populateIdTypesList();
            showHideQCHealthCard();
            // US5131
            applyPaddingForResidanceType();
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
            // DF-99 fix
	        app.validationDecorator.clearErrArrtibute();
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
            showHideQCHealthCard();
            // US5131
            applyPaddingForResidanceType();
            $(refs.province).val(models.addressModel.get("province"));
			$(refs.province_prev).val(models.addressModel.get("province_prev"));

        });

        $(refs.province_prev).on("change", function() {
            console.log(refs.province_prev + '::change');
            models.addressModel.set("province_prev", $(refs.province_prev).val());
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
	//---------------------------------------------------------------------------------------
    function createSliders() {
        $(refs.flipPrevWasInCanada).slider();
    }
	//---------------------------------------------------------------------------------------
    function createFlips() {
        setSlidersText();
        createSliders();
    }
    //---------------------------------------------------------------------------------------
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
        // US5131 WICI - Add Student Housing label to Residence Type list
        $(refs.house_student).click(function(){
        	clearRadios('residence');
        	$(refs.house_student).addClass('ui-btn-active');
        	models.addressModel.set('house', 'S');
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
	//---------------------------------------------------------------------------------------
    function checkForMsButton(){
        if(translator.currentLanguageEnglish()){
            showMsButton();
        } else {
            hideMsButton();
        }
    }
	//---------------------------------------------------------------------------------------
    function hideMsButton() {
        var currModel = models.personalDataModel;
        $(refs.title_MS).hide();
        $(refs.title_MISS).addClass('ui-corner-right ui-controlgroup-last');
        if (currModel.get('title') === 'MS') {
            clearRadios('title');
            $(refs.title_MISS).addClass('ui-btn-active');
        }
    }
	//---------------------------------------------------------------------------------------
    function showMsButton() {
        var currModel = models.personalDataModel;
        $(refs.title_MISS).removeClass('ui-corner-right ui-controlgroup-last');
        $(refs.title_MS).show();
        if (currModel.get('title') === 'MISS') {
            clearRadios('title');
            $(refs.title_MS).addClass('ui-btn-active');
        }
    }
    //---------------------------------------------------------------------------------------
    // US4782 :  WICI - QC Health Card Expiry
    function showHideQCHealthCard() {
       var sMethod = "showHideQCHealthCard :: ";
        console.log(logPrefix + sMethod);

        var currModel = models.personalDataModel;
        var province =  currModel.get('placeofissue');
        var idType = currModel.get('idtype');
        console.log(logPrefix + sMethod +"province :: " + province + "idType :: " + idType);
        if(province != null && idType!= null && province=='QC' && idType =='HE'){
                showQCHealthCard = true;
               $("#personalData_ExpiryDate_Area").hide();
               $("#personalData_ExpiryDate_for_QC_healthCard").show();
        }else{
               showQCHealthCard = false;
               $("#personalData_ExpiryDate_for_QC_healthCard").hide();
        }
    }
	//---------------------------------------------------------------------------------------
    // US5131 WICI - Add Student Housing label to Residence Type list
    function applyPaddingForResidanceType(){
    	if(!translator.currentLanguageEnglish()){
    		 $(refs.recidance_own).addClass('paddingForResidancytype');
    		 $(refs.residance_Rent).addClass('paddingForResidancytype')
    		 $(refs.residance_Parents).addClass('paddingForResidancytype')
    		 $(refs.residance_Student).addClass('paddingForResidancytype')
    		 $(refs.residance_Other).addClass('paddingForResidancytype')
    	}else{
    		$(refs.recidance_own).removeClass('paddingForResidancytype');
   		 	$(refs.residance_Rent).removeClass('paddingForResidancytype')
   		 	$(refs.residance_Parents).removeClass('paddingForResidancytype')
   		 	$(refs.residance_Student).removeClass('paddingForResidancytype')
   		 	$(refs.residance_Other).removeClass('paddingForResidancytype')
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
        } else if (radioGroup === 'residence') {
            $(refs.house_Own).removeClass('ui-btn-active');
            $(refs.house_Rent).removeClass('ui-btn-active');
            $(refs.house_Parents).removeClass('ui-btn-active');
            $(refs.house_Other).removeClass('ui-btn-active');
            // US5131 WICI - Add Student Housing label to Residence Type list
            $(refs.house_student).removeClass('ui-btn-active');
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
	function restorePopulateIdTypesList() {
        var sMethod = 'restorePopulateIdTypesList() ',
            currModel, provinceValue, idType, controlRef, list;
        console.log(logPrefix + sMethod);

        currModel = models.personalDataModel;
        provinceValue = currModel.get('placeofissue');
        idType = currModel.get('idtype');
		console.log(logPrefix + sMethod + " provinceValue : " + provinceValue + " idType : " + idType);

        controlRef = $(refs.idtype);
        controlRef.empty();
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
            if (!idType) {
                idType = provinceValue;
            }
            $(refs.idtype + ' [value="' + idType + '"]').attr(
                'selected', 'selected'
            );
        }
	}
 	// ---------------------------------------------------------------------------------------
    function populateMonthOfExpiryDate() {
        var sMethod = 'populateMonthOfExpiryDate() ',
            //listOfMonth = monthList(),
            optTempl = '';
        
        var arrMonth = [];
        arrMonth.push("MM");
        for (var i = 1; i <= 12; i++) {
              arrMonth.push(i);
        }

        for(var j= 0; j<arrMonth.length; j++){
              optTempl += '<option value="' +j+
                              '">'+arrMonth[j] +'</option>';        
        }
        
        var controlRef;
        controlRef = $("#personalData_month_of_expirydate");
        controlRef.empty();
        controlRef.append(optTempl);
    }
	// ---------------------------------------------------------------------------------------
    function populateYearOfExpiryDate() {
        var sMethod = 'populateYearOfExpiryDate() ',
            optTempl = '';
            
        var date = new Date();
        var year = date.getFullYear();
        var yearStart = year;
        var yearEnd = year + 50;
        var arrYear = [];
        arrYear.push("YYYY");
        for (var i = yearStart; i <= yearEnd; i++) {
              arrYear.push(i);
        }
        
        for(var j= 0; j<arrYear.length; j++){
              optTempl += '<option value="' +j+
                              '">'+ arrYear[j] +'</option>';
        }
        
        var controlRef;
        controlRef = $("#personalData_year_of_expirydate");
        controlRef.empty();
        controlRef.append(optTempl);
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
        //US5558
        currModel = models.personalDataModel;
        currModel.set('idtype', $(refs.idtype).val());
        console.log(logPrefix + sMethod + " provinceValue : " + provinceValue + " idType : " + currModel.get('idType'));
        
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
            	
            	$.each(models.personalDataModel.data, function(index, item) {
          			if(item.name == "idExpiryDate") {
          				item.validation.canBeEmpty = true;
          			}
          		});
            	if ($(refs.idExpiryDate).val()){
            		// Do nothing to retain the entered value
            		$(refs.expiryDate_Area).show();
            	} else {
            		$(refs.idExpiryDate).val("");
            		$(refs.expiryDate_Area).hide();
            	}
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
		syncUserData();
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
            var rezQC_HE = [];
            var c1;
            var personalModel = models.personalDataModel;
            var currModel = models.addressModel;
            var enteredYears = models.addressModel.get('years');
            var enteredMonthes = models.addressModel.get('months');
            // US4112
            // Id validation start here
            valid =  app.validationDecorator.idNumberValidation(models.personalDataModel,refs.idnumbers);
            
            if(showQCHealthCard){
            	var currentDate = new Date();
            	var currentMonth = currentDate.getMonth();
            
            	var expiryDateQC_HE = getExpiryDateQC_HE(formatedMonth, year);
            	var expiryDateYear = expiryDateQC_HE.slice(0,4);
            	var expiryDateMonth = expiryDateQC_HE.slice(5,7);
            	console.log(logPrefix + sMethod + "month :: " + expiryDateMonth + " year :: " + expiryDateYear);
                if(personalModel.get('placeofissue') != null && personalModel.get('idtype') != null  && personalModel.get('placeofissue') == 'QC' && personalModel.get('idtype') == 'HE'){
                	if((parseInt(expiryDateYear)==currentDate.getFullYear()) && (parseInt(expiryDateMonth)) >= (currentMonth+1)){
                		// Don't do anything 
                	}else if((parseInt(expiryDateMonth)) <= (currentMonth+1) && (parseInt(expiryDateYear)==currentDate.getFullYear())){
                		rezQC_HE.push($(refs.month_expirydate_QC_healthCard));
                    	$("#personalData_month_of_expirydate").addClass('errorField');
                    	app.validationDecorator.focusControl("#personalData_month_of_expirydate"); 
                	}else
                	{
                		// If nothing is selected (Month or Year)
                		if($("#personalData_month_of_expirydate :selected").text() == "MM" && $("#personalData_year_of_expirydate :selected").text() == "YYYY"){
                      	  rezQC_HE.push($(refs.month_expirydate_QC_healthCard));
                      	  rezQC_HE.push($(refs.year_expirydate_QC_healthCard));
                      	  $("#personalData_month_of_expirydate").addClass('errorField');
                      	  $("#personalData_year_of_expirydate").addClass('errorField');
                        }else if($("#personalData_year_of_expirydate :selected").text() == "YYYY"){
                      	  rezQC_HE.push($(refs.year_expirydate_QC_healthCard));
                      	  $("#personalData_year_of_expirydate").addClass('errorField');
                        }else if($("#personalData_month_of_expirydate :selected").text() == "MM"){
                      	  rezQC_HE.push($(refs.month_expirydate_QC_healthCard));
                      	  $("#personalData_month_of_expirydate").addClass('errorField');
                        }
                        if(rezQC_HE.length>0){
                      	  app.validationDecorator.applyErrAttribute(rezQC_HE);
                           return;
                        }
                	}
                 }
               
             } 
            
            var temprez;
       		// validEmail = /^[_a-z0-9-][_a-z0-9-]+(\.[_a-z0-9+]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/i;
            for (var i = 1; i <= validationGrroupsCol; i++) {
               if (i <= personalDataValidationMax ) {
                    temprez = models.personalDataModel.validate(i);
               } else {
                    temprez = models.addressModel.validate(i);
               }
               
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
                // VZE-52
                var covid19DateValidation = validateExpirtDateCOVID19();
                var covidRez = [];
                if(covid19DateValidation != null){
             	   covidRez.push(covid19DateValidation);
             	   app.validationDecorator.applyErrAttribute(covidRez, true);
             	   
                }
                rez = rez.concat(covidRez);
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
        
        var loginModel = activationItems.getModel('loginScreen');
        var contactInfoScreenModel = activationItems.getModel('contactInfoScreen');
        
        var loginId='';
        if(loginModel.get('employerID') !== 'E') {
        	loginId = loginModel.get('employerID') + loginModel.get('agentID');
        }
        
        var storePostCode = loginModel.get('outletPostalcode');
        var mfgSerial;
        if(app.deviceInfoHelper && app.deviceInfoHelper.getDeviceInfo()) {
			mfgSerial = app.deviceInfoHelper.getDeviceInfo().MfgSerial;
		} else {
			mfgSerial = "SCOOBY";
		}
        
        var phoneNumber;
        var phone_Type;
        
        if(contactInfoScreenModel.get('primaryMobile_CheckField') == 'Y') {
        	phoneNumber = contactInfoScreenModel.get('homePhone');
        	phone_Type = "mobile";
        } else if(contactInfoScreenModel.get('primaryLandline_CheckField') == 'Y') {
        	phoneNumber = contactInfoScreenModel.get('homePhone');
            phone_Type = "home";
        } else if(contactInfoScreenModel.get('secondaryMobile_CheckField') == 'Y') {
        	phoneNumber = contactInfoScreenModel.get('cellPhone');
        	phone_Type = "mobile";
        } else if(contactInfoScreenModel.get('secondaryLandline_CheckField') == 'Y') {
        	phoneNumber = contactInfoScreenModel.get('cellPhone');
        	phone_Type = "home";
        } else {
        	phoneNumber = '';
        	phone_Type = '';
        }
        
        var emailAddress = contactInfoScreenModel.get('email');
        
        var currModel = models.personalDataModel;
        
        var firstName = currModel.get('firstName');
        var lastName = currModel.get('lastName');
        var birthDate = currModel.get('birthDate').replace(new RegExp('-', 'g'), '');
        
        currModel = models.addressModel;
        
        var province = currModel.get('province');
        var postCode = currModel.get('postalcode');
        var city = currModel.get('city');
        var addressline1 = currModel.get("addressline1");
        var streetnumber = currModel.get("streetnumber");
        var suiteunit = currModel.get('suiteunit');
        var addressline2 = currModel.get('addressline2');
        
        var financialScreenModel = activationItems.getModel('financialData');
        var sin='';
        
        try {
            sin = financialScreenModel.get('sin');
            console.log(logPrefix + sMethod + " sin : " + sin);
        } catch (e) {
        	console.log(e);  
        }
        
        console.log(logPrefix + sMethod + " " + loginId + " " + storePostCode + " " + mfgSerial + " " + phoneNumber + " " + phone_Type + " " + emailAddress + " " + 
        		firstName + " " + lastName + " " + birthDate + " " + province + " " + postCode + " " + city + " " + addressline1 + " " + streetnumber + " " + suiteunit + " " + addressline2 + " " + sin);
        
        if(emailAddress != '') {
        	invokeTMXEmailage( loginId,storePostCode,mfgSerial,phoneNumber,phone_Type,emailAddress,
            		firstName,lastName,birthDate,province,postCode,city,addressline1,streetnumber,suiteunit,addressline2,sin, tMXEmailageSuccess, tMXEmailageFailure );
        } else {
        	var currModel = models.personalDataModel;
            currModel.set('DSAScore', '');
            currModel.set('treatmentCode', '');
            currModel.set('tmxProfileID', '');
        	flow.next();
        }
    }
    
    function invokeTMXEmailage(loginId,storePostCode,mfgSerial,phoneNumber,phone_Type,emailAddress,
    		firstName,lastName,birthDate,province,postCode,city,addressline1,streetnumber,suiteunit,addressline2,sin, argSuccessCB, argFailureCB) {
    	var sMethod = "invokeTMXEmailage() :: ";
    	console.log(logPrefix + sMethod);
    	
    	new WICI.LoadingIndicatorController().show();
    	connectivityController.TMXEmailage(loginId,storePostCode,mfgSerial,phoneNumber,phone_Type,emailAddress,
        		firstName,lastName,birthDate,province,postCode,city,addressline1,streetnumber,suiteunit,addressline2,sin,argSuccessCB,argFailureCB);
    }
    
    function tMXEmailageSuccess(argResponse) {
    	var sMethod = "tMXEmailageSuccess(argResponse)";
        console.log(logPrefix + sMethod + JSON.stringify(argResponse));
        
        new WICI.LoadingIndicatorController().hide();
        if(!argResponse.error) {
        	try {
        		var currModel = models.personalDataModel;
                currModel.set('DSAScore', argResponse.data.fpsTrustscore);
                currModel.set('treatmentCode', argResponse.data.requestResult);
                currModel.set('tmxProfileID', argResponse.data.tmxProfileID);
                flow.next();
        	} catch (e) {
        		console.log(logPrefix + sMethod + "Exception : " + e);
        		flow.next();
        	}
        } else {
        	flow.next();
        }
    }
    
    function tMXEmailageFailure(argResponse) {
    	var sMethod = "tMXEmailageFailure(argResponse)";
        console.log(logPrefix + sMethod);
        
        new WICI.LoadingIndicatorController().hide();
        var currModel = models.personalDataModel;
        currModel.set('DSAScore', '');
        currModel.set('treatmentCode', '');
        currModel.set('tmxProfileID', '');
        flow.next();
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
			console.log('onScanLoyaltySuccessCallback - : rez ' + rez.substring(0, 6) + " :: " + rez.substring(6, 16));
			
            if (!rez) {
                throw ('ERROR! Got the empty data.');
            }

			if(rez.substring(0, 6) == "636574") {
				if((rez.indexOf('PDF') === -1) && (mod10(rez,16)) )
	            {	
	               	$('#personalData_CTMNumber_TextField').val(rez.substring(6, 16));
	            } else
	            	{
	            	$('#personalData_CTMNumber_TextField').val('');
	            	messageDialog.error(
	            			 translator.translateKey('scanLoyalty_parsingErrorText'),
	                         translator.translateKey('personalData_Scan_Loyalty_Dialog_Label'),
	                         $.noop
	                );
	            }
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
        	if(isDebugMode){
                messageDialog.error(e,translator.translateKey('errorDialog_defaultTitle'),$.noop);
            }
        	console.log(logPrefix + sMethod + " Exception: " + e);
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
        if (parser.checkSupportedID(response.data, ['PDF417']) > 0) {
        	try {
                // DE1667
                rez = parser.parse(response.data);   
                var idType = JSON.stringify(rez.idType);
                var idNumber = JSON.stringify(rez.idNumber);
                var idProvince = JSON.stringify(rez.idProvince);
                
                var currModel = models.personalDataModel;
				currModel.set('scanFlag', true);
                
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
            	if(isDebugMode){
                    messageDialog.error(e,translator.translateKey('errorDialog_defaultTitle'),$.noop);
                }
            	console.log(logPrefix + sMethod + " Exception: " + e);
            }
        } else if(parser.checkSupportedID(response.data, ['ANSI']) > 0) {
        	rez = parser.parse(response.data);   
            const idType = JSON.stringify(rez.idType);
            const idNumber = JSON.stringify(rez.idNumber);
            const idProvince = JSON.stringify(rez.idProvince);
            if(rez.idProvince == 'AB'){
    			try{
    				 const  rezNewABDL = parser.parseNewABDL(response.data);
    	             const idTypeAB = rezNewABDL.idType;                     
    	             const idNumberAB = JSON.stringify(rezNewABDL.idNumber);
    	             const idProvinceAB = JSON.stringify(rezNewABDL.idProvince);
    	             
    	             var currModel = models.personalDataModel;
					 currModel.set('scanFlag', true);
				
    	             if(idTypeAB != "null") {
    	             	currModel.set('idtype', idTypeAB);
    	             }
    	             if(idProvinceAB != "null") {
    	              	currModel.set('placeofissue', idProvince);
    	              }
    	             if (!containsAny(rezNewABDL, mapping)) {
    	                 throw ('ERROR! Got the empty data.');
    	             }
    	             
    	             for (prop in mapping) {
    	                 $(mapping[prop]).val(rezNewABDL[prop]);
    	             }

    	             // Populate the id-types dropdown and set the id-type.
    	             populateIdTypesList(true);
    	             $(refs.idtype + ' [value="' + rezNewABDL.idType + '"]').attr(
    	                 'selected', 'selected'
    	             );
    	             
    	             // US4535
    	             disableScannedDriversLicenceFields(); 
    			
    			}catch (e) {
                	if(isDebugMode){
                        messageDialog.error(e,translator.translateKey('errorDialog_defaultTitle'),$.noop);
                    }
                	console.log(logPrefix + sMethod + " Exception: " + e);
                }
    		}else {
    			try {
                    const rezNew = parser.parse(response.data);   
                    const idType = JSON.stringify(rezNew.idType);
                    const idNumber = JSON.stringify(rezNew.idNumber);
                    const idProvince = JSON.stringify(rezNew.idProvince);
                    var currModel = models.personalDataModel;
					currModel.set('scanFlag', true);
                    
                    if(idType != "null" && idProvince != "null" && idNumber != "null" ) {
                      if( idProvince.split('"').join('') === "MB" && idType.split('"').join('') === "DR" ) {
                    	  idNumberValue  = idNumber.split('*').join('');
                    	  currModel.set("idnumbers", idNumberValue.split('"').join(''));
                    	  rezNew.idNumber = currModel.get('idnumbers');
                      } 
                    }
                    
                    if(idType != "null") {
                    	currModel.set('idtype', idType.split('"').join(''));
                    }
                    
                    if (!containsAny(rezNew, mapping)) {
                        throw ('ERROR! Got the empty data.');
                    }
                    
                    for (prop in mapping) {
                        $(mapping[prop]).val(rezNew[prop]);
                    }

                    // Populate the id-types dropdown and set the id-type.
                    populateIdTypesList(true);
                    $(refs.idtype + ' [value="' + rezNew.idType + '"]').attr(
                        'selected', 'selected'
                    );
                    
                    // US4535
                    disableScannedDriversLicenceFields();                       
                } catch (e) {
                	if(isDebugMode){
                        messageDialog.error(e,translator.translateKey('errorDialog_defaultTitle'),$.noop);
                    }
                	console.log(logPrefix + sMethod + " Exception: " + e);
                }
    		}
		}else { 
			try{
	        	   const  rezNewDL = parser.parseNewDL(response.data);
	               const idTypeNewDL = JSON.stringify(rezNewDL.idType);
	               const idNumberNewDL = JSON.stringify(rezNewDL.idNumber);
	             
	               var currModel = models.personalDataModel;
				   currModel.set('scanFlag', true);
	         	   currModel.set("idnumbers", parseInt(idNumberNewDL));
	               currModel.set('idtype', idTypeNewDL.split('"').join(''));
	               
	               if (!containsAny(rezNewDL, mapping)) {
	                   throw ('ERROR! Got the empty data.');
	               }
	               
	               for (prop in mapping) {
	                   $(mapping[prop]).val(rezNewDL[prop]);
	               }

	               // Populate the id-types dropdown and set the id-type.
	               populateIdTypesList(true);
	               $(refs.idtype + ' [value="' + rezNewDL.idType + '"]').attr(
	                   'selected', 'selected'
	               );
	               
	               disableScannedDriversLicenceFields();
	        	 
	           }catch (e) {
	           	if(isDebugMode){
	                messageDialog.error(e,translator.translateKey('errorDialog_defaultTitle'),$.noop);
	            }
	        	console.log(logPrefix + sMethod + " Exception: " + e);
	        }
		}
        validateExpirtDateCOVID19();
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
  // US4782 - ExpiryDate for QC Health card  
 // ---------------------------------------------------------------------------------------
    function getExpiryDateQC_HE(formatedMonth , year) {
    	var sMethod = "getExpiryDateQC_HE(month , year)";
    	
    	var intYear = parseInt(year);
        var intMonth = parseInt(formatedMonth);
        expiryDate = new Date(intYear,intMonth-1,1);
        console.log(logPrefix + sMethod + "expiryDate ::" + expiryDate);
        var currentDate = new Date();
  
        var y = expiryDate.getFullYear();
        var m = expiryDate.getMonth();
        console.log(logPrefix + sMethod + "year ::" + y + " Month  :: " +  m);
        // expirydate should be grater then current date 
        if(y >= currentDate.getFullYear()){
        	expiryDate = new Date(y,m+1,0);
        }
        var yearfn = expiryDate.getFullYear();
        var intMonth = expiryDate.getMonth() + 1;
        var monthfn = ("0" + intMonth).slice(-2);
        console.log(logPrefix + sMethod + " yearfn :: " + yearfn + " monthfn  :: " +  monthfn + "dayfn ::" + expiryDate.getDate());
        expirydateForQC = expiryDate.getFullYear() + "-"+ monthfn + "-" + expiryDate.getDate();
        console.log(logPrefix + sMethod + "expirydateForQC :: "  + expirydateForQC );
        return expirydateForQC;
    }
    // VZE-52
    function validateExpirtDateCOVID19() {
    	var sMethod = "validateExpirtDateCOVID19()";
		console.log(logPrefix + sMethod);

    	var rez;
    	var covid19Year =  parseInt(translator.translateKey("pesonalData_covid19LockDownYear"));
    	var covid19Month = parseInt(translator.translateKey("pesonalData_covid19LockDownMonth"));
    	var covid19Day = parseInt(translator.translateKey("pesonalData_covid19LockDownDay"));
    	var aestTime = new Date($(refs.idExpiryDate).val()).toLocaleString("en-US", {timeZone: "America/Toronto"});
    	var aestDate = new Date(aestTime).toISOString();
    	var stringDate  = aestDate.substr(0, 10).split("-");
    	var inputDateYear = parseInt(stringDate[0]);
    	var inputDateMonth = parseInt(stringDate[1]);
    	var inputDateDay = parseInt(stringDate[2]);
        var todaysDate = new Date();
        todaysDate.setDate(todaysDate.getDate() - 1);
        var yesterdayDate = moment(todaysDate).format('MM-DD-YYYY').split("-");
        var yesterdayMonth = parseInt((yesterdayDate[0]));
        var yesterdayDay =  parseInt(yesterdayDate[1]);
        var yesterdayYear = parseInt(yesterdayDate[2]);
    	var currModel = models.personalDataModel;
 		var item = currModel.getItemByName('idExpiryDate');
     	var itemName =  item === null ? '' : item.name;
     	var itemuiid = currModel.refs == null ? '' : currModel.refs[item.name];

    	if(((covid19Year == inputDateYear) && (covid19Month < inputDateMonth))){
    		rez = null;  // true 
    	}else if((covid19Year > inputDateYear)){
    		rez= {name: itemName, err: 'personalData1_validation_expiryDate', uiid: itemuiid};
    	}else if((covid19Year == inputDateYear) &&  (inputDateMonth < covid19Month)){
    		rez= {name: itemName, err: 'personalData1_validation_expiryDate', uiid: itemuiid};
    	}else if((covid19Year == inputDateYear) && ((inputDateMonth == covid19Month)) && (covid19Day == inputDateDay ) ){
    		rez = null;
    	}else if(((covid19Year == inputDateYear) && ((inputDateMonth == covid19Month)) && (covid19Day == inputDateDay )) ||((inputDateYear <= yesterdayYear) && (inputDateMonth == yesterdayMonth) &&  (inputDateDay < yesterdayDay )) ){
    		rez = null;
    	}else{
    		// Expiry date is less then yesterday 
            // DL is expired 
    		if((inputDateYear <= yesterdayYear) && (inputDateMonth == yesterdayMonth) &&  (inputDateDay <= yesterdayDay )){
    			rez= {name: itemName, err: 'personalData1_validation_expiryDate', uiid: itemuiid};
    		}else{
    			rez = null;
    		}
    	}
    	return rez;
    }
};
