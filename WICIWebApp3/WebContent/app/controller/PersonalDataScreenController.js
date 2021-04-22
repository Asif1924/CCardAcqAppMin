ensureNamespaceExists();

WICI.PersonalDataScreenController = function(activationItems, argTranslator,
                                             argMessageDialog) {
    var logPrefix = '[WICI.PersonalDataScreenController]::';
    var $screenContainer = $('#PersonalDataScreen');
    var translator = null;
    var messageDialog = null;
    var connectivityController = null;
    var isDebugMode;

    this.show = show;
    this.init = init;
    this.hide = hide;

    var flow = null;
    var showQCHealthCard = false;
    var validator = new WICI.Validator();
    var addressNotFoundFlag = false;
    var IDScan = false;
    
    var scannedExpiryDate;
    var expirydateForQC = "";
    var month;
    var expiryDate;
    var year ,formatedMonth;
    var isContinueButton = false;
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
        // vZE-161
        expiryDateMonth: '#expiryDate_month',
        expiryDateDay: '#expiryDate_day',
        expiryDateYear: '#expiryDate_year',

        correspondence : '#personalData_Correspondence_Group',
        correspondence_eng : '#personalData_English_RadioButton',
        correspondence_fre : '#personalData_French_RadioButton',
        
        nextButton: ".PersonalDataScreen_NextButton",
        prevButton: ".PersonalDataScreen_PrevButton",
        
        streetAddress:      		'#streetAddress',
        enterAddressManuallyButton: '#personalData_EnterAddressManuallyButton',
        editAddressButton: 			'#personalData_EditAddressButton',
        acceptButton:  				'#personalData_AcceptButton',
        
        streetPreviousAddress:      		'#streetPreviousAddress',
        enterAddressManuallyPreviousButton: '#personalData_EnterAddressManuallyPreviousButton',
        editAddressPreviousButton: 			'#personalData_EditAddressPreviousButton',
        acceptPreviousButton:  				'#personalData_AcceptPreviousButton',
        
        postalcode:         '#personalData_Address_PostalCode_TextField',
        streetnumber:       '#personalData_Address_StreetNumber_TextField',
        addressline1:       '#personalData_Address_AddressLine1_TextField',
        addressline2:       '#personalData_Address_AddressLine2_TextField',
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
        addressline2_prev:  '#personalData_PreviousAddress_AddressLine2_TextField',
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
		{ notField: true, name : 'expiryDateMonth', value : null, validation : { type : 'idExpiryDate', message : '', group: [ 1 ] } },
		{ notField: true, name : 'expiryDateDay', value : null, validation : { type : 'idExpiryDate', message : '', group: [ 1 ] } },
		{ notField: true, name : 'expiryDateYear', value : null, validation : { type : 'idExpiryDate', message : '', group: [ 1 ] } },
		{ notField: true, name: 'scanFlag', value: null },
		{ notField: true, name: 'response', value: null },
		{ name: 'DSAScore',  		value: null, validation: null },
		{ name: 'treatmentCode',  	value: null, validation: null },
		{ name: 'tmxProfileID',  	value: null, validation: null },
		{ name: 'PIISource',  		value: null, validation: null },
		{ name: 'IDScan',  			value: null, validation: null },
        { name: 'manualFill',  		value: null, validation: null }
      ]
    });
    var addressModel = new WICI.BaseModel({
        name : 'personalData2_Address',
        refs : refs,
        data : [
        	{name: 'streetAddress',			value: null, validation: {type: 'presence',     message: '', group: [3], canBeEmpty: true} },
        	{name: 'streetPreviousAddress', value: null, validation: {type: 'presence',     message: '', group: [3], canBeEmpty: true} },
            {name: 'addressline1', value: null, validation: {type: 'addressLinePOBox',  message: '', group: [3]} },
            {name: 'addressline2', value: null, validation: {type: 'addressLine',  message: '', group: [3], canBeEmpty: true} },
            {name: 'suiteunit',    value: null, validation: {type: 'suiteUnit',    message: '', group: [3], canBeEmpty: true} },
            {name: 'city',         value: null, validation: {type: 'city',         message: '', group: [3]} },
            {name: 'province',     value: null, validation: {type: 'presence',     message: '', group: [3]} },
            {name: 'postalcode',   value: null, validation: {type: 'postal',       message: '', group: [3]} },
            {notField: true, name: 'scannedSuitunit', 		value: null },
            {notField: true, name: 'scannedStrtNoAndName', 	value: null },
            {notField: true, name: 'scannedAddressline1', 	value: null },
    		{notField: true, name: 'scannedAddressline2', 	value: null },
    		{notField: true, name: 'scannedCity', 			value: null },
    		{notField: true, name: 'scannedProvince', 		value: null },
    		{notField: true, name: 'scannedPostalcode', 	value: null },
    		{notField: true, name: 'canadaPostSuitunit', 	value: null },
    		{notField: true, name: 'canadaPostAddressline1',value: null },
    		{notField: true, name: 'canadaPostAddressline2',value: null },
    		{notField: true, name: 'canadaPostCity', 		value: null },
    		{notField: true, name: 'canadaPostProvince', 	value: null },
    		{notField: true, name: 'canadaPostPostalcode', 	value: null },
            {name: 'house',             value: null, validation: {type: 'presence',     message: '', group: [3]} },
            {name: 'housingpayment',    value: null, validation: {type: 'format',       message: '', group: [3], matcher: /^[0-9\,]{1,4}$/} },
            {name: 'years',             value: null, validation: {type: 'presence',     message: '', group: [5]} },
            {name: 'months',            value: null, validation: {type: 'presence',     message: '', group: [5]} },
            
            {name: 'addressline1_prev', value: null, validation: {type: 'addressLinePOBox',  message: '', group: [4]} },
            {name: 'addressline2_prev', value: null, validation: {type: 'addressLine',  message: '', group: [4], canBeEmpty: true} },
            {name: 'suiteunit_prev',    value: null, validation: {type: 'suiteUnit',    message: '', group: [4], canBeEmpty: true} },
            {name: 'city_prev',         value: null, validation: {type: 'city',         message: '', group: [4]} },
            {name: 'province_prev',     value: null, validation: {type: 'presence',     message: '', group: [4]} },
            {name: 'postalcode_prev',   value: null, validation: {type: 'postal',       message: '', group: [4]} },
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
        populateExpiryDateMonthList();
        setUIElementsMasks();
        hideShowMoneyAdvantage();
        hideCanadaPostManualEdit();
        hideCanadaPostPreviousAddrManualEdit();
        showHideAddressLine2();
        applyPaddingForResidanceType();
		setLoyaltyMembershipNumberPrefix();
		updatePlaceholderLanguage();
		hideIdExpiryDateErrorMessage_dialog();
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
        $screenContainer.addClass("breadcrumbPadding");
        assembleNavigationBarAtBottom();
        updatePlaceholderLanguage();
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
        	var expiryDateVal = $(refs.expiryDateYear).val()+"-"+$(refs.expiryDateMonth).val()+"-"+$(refs.expiryDateDay).val();
       	 
       	    if(expiryDateVal != "null") {
            	if (scanFlag){
            		// Don't save any values. Keep the existing value in model.
            	} else {
            		currModel.set('idExpiryDate', expiryDateVal);
            	}
            }
        }
        // VZE-161
        console.log(logPrefix + sMethod + " expiryDateMonth :: after sync:: " + $(refs.expiryDateMonth).val());
        console.log(logPrefix + sMethod + " expiryDateDay :: after sync:: " + $(refs.expiryDateDay).val());
        console.log(logPrefix + sMethod + " expiryDateYear :: after sync:: " + $(refs.expiryDateYear).val());

        // US4168
        currModel.set('age', models.personalDataModel.calculateAge(models.personalDataModel));
        console.log(logPrefix + sMethod + " age :: after sync:: " + currModel.get('age'));
        
        currModel = models.addressModel;

        currModel.set('postalcode',     $(refs.postalcode).val().toUpperCase());
        currModel.set('addressline1',   $(refs.addressline1).val().toUpperCase());
        currModel.set('addressline2',   $(refs.addressline2).val().toUpperCase());
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
        
        currModel.set('flipPrevWasInCanada', $(refs.flipPrevWasInCanada + ' ' + 'option:selected').val());
        
        if(currModel.get('flipPrevWasInCanada') === 'Y') {
        	currModel.set('postalcode_prev',    $(refs.postalcode_prev).val().toUpperCase());
            currModel.set('addressline1_prev',  $(refs.addressline1_prev).val().toUpperCase());
            currModel.set('addressline2_prev',  $(refs.addressline2_prev).val().toUpperCase());
            currModel.set('city_prev',          $(refs.city_prev).val().toUpperCase());
            currModel.set('suiteunit_prev',     $(refs.suiteunit_prev).val().toUpperCase());
            if(currModel.get('province_prev')) {
				currModel.set('province_prev',      currModel.get('province_prev'));
			} else {
				currModel.set('province_prev',      $(refs.province_prev).val());
			}
        }        
        
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
		restorePopulateExpiryDateList();
        $(refs.loyaltyMembershipNumber).val(currModel.get('loyaltyMembershipNumber'));
        $(refs.placeofissue).val(currModel.get('placeofissue'));
        $(refs.idtype).val(currModel.get('idtype'));
        $(refs.idnumbers).val(currModel.get('idnumbers'));
        $(refs.firstName).val(currModel.get('firstName'));
        $(refs.initial).val(currModel.get('initial'));
        $(refs.lastName).val(currModel.get('lastName'));
        $(refs.birthDate).val(currModel.get('birthDate'));
        // US4365
        $(refs.idExpiryDate).val(currModel.get('expiryDateMonth')+"-"+currModel.get('expiryDateDay')+"-"+currModel.get('expiryDateYear'));
        $(refs.expiryDateYear).val(currModel.get('expiryDateYear'));
        $(refs.expiryDateMonth).val(currModel.get('expiryDateMonth'));
        $(refs.expiryDateDay).val(currModel.get('expiryDateDay'));
        
		if(models.personalDataModel.get('scanFlag')) {
			disableScannedDriversLicenceFields();
		}
        currModel = models.addressModel;

		console.log(logPrefix + sMethod + ' model data: ' + currModel.toString());
		list = new WICI.ProvincesList();
        $('#address_line1').text(currModel.get('addressline1'));
        $('#address_line2').text(currModel.get('addressline2'));
        $('#address_unit').text(currModel.get('suiteunit'));
        if($(refs.suiteunit).val())
        	$('#address_unit_hyphen').show();
        else 
        	$('#address_unit_hyphen').hide();
        $('#address_city').text(currModel.get('city'));
        $.each(list.data, function (index, item) {
          if(item.value === currModel.get('province')){
           $('#address_province').text(translator.translateKey(item.text));
           }
        });
        $('#address_postalcode').text(currModel.get('postalcode'));

        $('#address_previousLine1').text(currModel.get('addressline1_prev'));
        $('#address_previousLine2').text(currModel.get('addressline2_prev'));
        $('#address_preunit').text(currModel.get('suiteunit_prev'));
        $('#address_previousCity').text(currModel.get('city_prev'));
        $.each(list.data, function (index, item) {
          if(item.value === currModel.get('province_prev')){
           $('#address_previousProvince').text(translator.translateKey(item.text));
           }
        });
        $('#address_previousPostalcode').text(currModel.get('postalcode_prev'));
        
        $(refs.postalcode).val(currModel.get('postalcode'));
        $(refs.addressline1).val(currModel.get('addressline1'));
        $(refs.addressline2).val(currModel.get('addressline2'));
        $(refs.suiteunit).val(currModel.get('suiteunit'));
        $(refs.city).val(currModel.get('city'));
        $(refs.province).val(currModel.get('province'));

        $(refs.housingpayment).val(currModel.get('housingpayment'));
        $(refs.years).val(currModel.get('years'));
        $(refs.months).val(currModel.get('months'));

        $(refs.postalcode_prev).val(currModel.get('postalcode_prev'));
        $(refs.addressline1_prev).val(currModel.get('addressline1_prev'));
        $(refs.addressline2_prev).val(currModel.get('addressline2_prev'));
        $(refs.suiteunit_prev).val(currModel.get('suiteunit_prev'));
        $(refs.city_prev).val(currModel.get('city_prev'));
        $(refs.province_prev).val(currModel.get('province_prev'));

        updateResidenceTypeRadioButtons();
		updateTitleRadioButtons();
		updateCorrespondenceRadioButtons();
        onDurationChangesHandler();
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
        
         hideIdExpiryDateErrorMessage_dialog();
        $(refs.streetAddress).live('paste, input', function(e) {
        	models.personalDataModel.set('manualFill', true);
	        var fields = [
	        	{ element: "streetAddress", field: "" },
	            { element: "AddressLine1", 	field: "Line1", 		mode: pca.fieldMode.POPULATE },
	            { element: "AddressLine2", 	field: "Line2", 		mode: pca.fieldMode.POPULATE },
	            { element: "multi-unit", 	field: "{AcMua}", 		mode: pca.fieldMode.POPULATE },
	            { element: "city", 			field: "City", 			mode: pca.fieldMode.POPULATE },
	            { element: "provinceCode", 	field: "ProvinceCode", 	mode: pca.fieldMode.POPULATE },
	            { element: "postcode", 		field: "PostalCode",	mode: pca.fieldMode.POPULATE }
	        ],
	        options = {
	        	key: "gz38-nt61-zz89-db43"
	        },
	        control = new pca.Address(fields, options);
			control.options.bar = options.bar || {};
			control.options.bar.showCountry = false;
			control.options.bar.showLogo = true;
			control.listen('populate', function(){
				app.validationDecorator.clearErrArrtibute();
				$('#personalInfo_canadaPost_SearchedAddress').show();
		     	$('#personalData_canadaPostAddressDescription1').show();
		     	$('#personalInfo_canadaPost_addressSearch_instructions').hide();
		     	$('#personalData_enterAddressManuallySection').hide();
		     	$(refs.editAddressButton).removeClass('hideElement');
		     	$(refs.enterAddressManuallyButton).addClass('hideElement');
                $(refs.acceptButton).addClass('hideElement');
                if($(refs.addressline1).val().indexOf("-") !== -1) {
					var addressLinewithUnitNumber = [];
					addressLinewithUnitNumber = $(refs.addressline1).val().split('-');
					var addressline1Full = '';
			    	for(i=1;i<addressLinewithUnitNumber.length;i++) {
			    		addressline1Full += addressLinewithUnitNumber[i] + "-";
			    	}
			    	console.log(logPrefix + sMethod + "addressline1Full : " + addressline1Full.substring(0, addressline1Full.length-1));
						
					// If Unit No is more then 6 char then consider as addressline1 instead of Unit no
					if(addressLinewithUnitNumber[0].length > 6){
						$('#address_unit').text('');
						$('#address_line1').text($(refs.addressline1).val());
						$(refs.suiteunit).val("");
						$('#address_unit_hyphen').hide();
					}else{
						$('#address_unit_hyphen').show();
						$('#address_unit').text(addressLinewithUnitNumber[0]);
                        $('#address_line1').text(addressline1Full.substring(0, addressline1Full.length-1));
                        $(refs.suiteunit).val(addressLinewithUnitNumber[0]);
                        $(refs.addressline1).val(addressline1Full.substring(0, addressline1Full.length-1));
					}
				} else {
					$('#address_unit_hyphen').hide();
					$('#address_unit').text("");
					$('#address_line1').text($(refs.addressline1).val());
				}
				// VZE-125
                if($(refs.addressline2).val() != '') {
                   $('#address_line2').show();
                   $('#addressline2_br').removeClass('hideElement');
	               $('#address_line2').text($(refs.addressline2).val());
                } else {
	               $('#addressline2_br').addClass('hideElement');
                   $('#address_line2').hide();
                }
                //$('#address_line2').text($(refs.addressline2).val());
                $('#address_city').text($(refs.city).val());
                list = new WICI.ProvincesList(),
                $.each(list.data, function (index, item) {
	              if(item.value === $(refs.province).val()){
		           $('#address_province').text(translator.translateKey(item.text));
	               }
                });
                var postalCodeval = $(refs.postalcode).val().split(" ").join(""); 
                $('#address_postalcode').text(postalCodeval);
                $(refs.postalcode).val(postalCodeval);
                models.addressModel.set("province",$(refs.province).val());
                
                if($(refs.city).val() != '' && $(refs.province).val() != '' && $(refs.city).val().length >= 18) 
                	invokeAbbreviateCityname($(refs.city).val().toUpperCase(), $(refs.province).val(), abbreviateCitynameSuccess, abbreviateCitynameFail);
			});
        });
        
        $(refs.enterAddressManuallyButton).click(function() {
        	console.log(refs.enterAddressManuallyButton + '::click');
        	
        	models.personalDataModel.set('manualFill', true);
        	$(refs.enterAddressManuallyButton).addClass('hideElement');
        	$(refs.acceptButton).removeClass('hideElement');
        	$('#personalData_enterAddressManuallySection').show();
        	$('#personalInfo_canadaPost_SearchedAddress').hide();
        	$('#personalInfo_canadaPost_addressSearch_instructions').hide();
        	$('#personalData_canadaPostAddressDescription1').show();
        });
        
        $(refs.editAddressButton).click(function() {
        	console.log(refs.enterAddressManuallyButton + '::click');
        	
        	models.personalDataModel.set('manualFill', true);
        	$(refs.editAddressButton).addClass('hideElement');
        	$(refs.acceptButton).removeClass('hideElement');
        	$('#personalData_enterAddressManuallySection').show();
        	$('#personalInfo_canadaPost_SearchedAddress').show();
        	$('#personalInfo_canadaPost_addressSearch_instructions').hide();
        	$('#personalData_canadaPostAddressDescription1').show();
            $('#contactInfomation_infomation_button').hide();
            $('#personalInfo_pre_year_informationButton').hide();
        });
        
        $(refs.acceptButton).click(function() {
        	console.log(refs.acceptButton + '::click');
        	models.personalDataModel.set('manualFill', true);
        	app.validationDecorator.clearErrArrtibute();
        	var postrez = [];
            if($(refs.suiteunit).val() && !validator.suiteUnit($(refs.suiteunit).val().toUpperCase()))
            	postrez.push({name: 'suiteunit', err: '', uiid: refs.suiteunit});
            if(!$(refs.addressline1).val().toUpperCase() && !validator.addressLine($(refs.addressline1).val().toUpperCase())){
	            postrez.push({name: 'addressline1', err: '', uiid: refs.addressline1});
	        }else{
	               var regex = new RegExp(/^[A-Za-z0-9àèìòùáéóíúý .'/&-]{1,40}$/);
	               var isValid = $(refs.addressline1).val().toUpperCase().match(regex);
	               if(isValid){
	                    var poBoxArray = ["P O B O X","P O BO X","P O BOX","PO BOX","PO Box","po box","P.o box","P.O Box","P.O. Box","p.o box","p.o. box","postal box","Postal Box","postal Box","Postal box","CP","Cp","cP","cp","C.P","c.P","C.p","c.p","C.P.","c.p.","Case Postale","Case postale","case postale","Case postale"];
	                    $.each(poBoxArray, function (index, item) {
	                      if($(refs.addressline1).val().toLowerCase().includes(item.toLowerCase())){
	                    	  $('#contactInfomation_infomation_button').show();
	                    	  postrez.push({name: 'addressline1', err: '', uiid: refs.addressline1});
	                      }
	                    });
	               }else{
	                    postrez.push({name: 'addressline1', err: '', uiid: refs.addressline1});
	               }
            }
            if($(refs.addressline2).val() && !validator.addressLine($(refs.addressline2).val().toUpperCase()))
            	postrez.push({name: 'addressline2', err: '', uiid: refs.addressline2});
            if(!validator.city($(refs.city).val().toUpperCase()))
            	postrez.push({name: 'city', err: '', uiid: refs.city});
            if($(refs.province).val() == "null")
            	postrez.push({name: 'province', err: '', uiid: refs.province});
            if(!validator.postalCode($(refs.postalcode).val().toUpperCase()))
            	postrez.push({name: 'postalcode', err: '', uiid: refs.postalcode});
            
            console.log(refs.acceptButton + '::click' + postrez.length);
            if(postrez.length > 0) {
            	app.validationDecorator.applyErrAttribute(postrez);
                	if($(refs.city).val() != '' && $(refs.province).val() != '' && $(refs.city).val().length >= 18) 
                		invokeAbbreviateCityname($(refs.city).val().toUpperCase(), $(refs.province).val(), abbreviateCitynameSuccess, abbreviateCitynameFail);
            } else {
                if($(refs.city).val().length >= 18) 
                	invokeAbbreviateCityname($(refs.city).val().toUpperCase(), $(refs.province).val(), abbreviateCitynameSuccess, abbreviateCitynameFail);
            	
	            $('#address_unit').text($(refs.suiteunit).val());
	            if($(refs.suiteunit).val())
	            	$('#address_unit_hyphen').show();
	            else 
	            	$('#address_unit_hyphen').hide();
                $('#address_line1').text($(refs.addressline1).val());
                 // VZE-125
                if($(refs.addressline2).val() != ''){
                   $('#address_line2').show();
                   $('#addressline2_br').removeClass('hideElement');
	               $('#address_line2').text($(refs.addressline2).val());
                }else{
	               $('#addressline2_br').addClass('hideElement');
                   $('#address_line2').hide();
                }
                $('#address_city').text($(refs.city).val());
                $.each(list.data, function (index, item) {
                  if(item.value === $(refs.province).val()){
                   $('#address_province').text(translator.translateKey(item.text));
                   }
                });
                var postalCodeval = $(refs.postalcode).val().split(" ").join("");
            	$('#address_postalcode').text(postalCodeval);
                
            	$(refs.editAddressButton).removeClass('hideElement');
            	$(refs.acceptButton).addClass('hideElement');
            	$('#personalData_enterAddressManuallySection').hide();
            	$('#personalInfo_canadaPost_SearchedAddress').show();
            }
        });
       
        $(refs.suiteunit).live('paste, input', function(e) {
            console.log(refs.suiteunit + '::suiteunit');
            $('#address_unit').text($(refs.suiteunit).val().toUpperCase());
            if($(refs.suiteunit).val())
            	$('#address_unit_hyphen').show();
            else 
            	$('#address_unit_hyphen').hide();
        });
        $(refs.addressline1).live('paste, input', function(e) {
            console.log(refs.addressline1 + '::addressline1');
            $('#address_line1').text($(refs.addressline1).val().toUpperCase());
        });
        $(refs.addressline2).live('paste, input', function(e) {
            console.log(refs.addressline2 + '::addressline2');
            $('#address_line2').text($(refs.addressline2).val().toUpperCase());
        });
        $(refs.city).live('paste, input', function(e) {
            console.log(refs.city + '::city');
            $('#address_city').text($(refs.city).val().toUpperCase());
        });

        $(refs.province).live('paste, input', function(e) {
            console.log(refs.province + '::province');
            list = new WICI.ProvincesList(),
            $.each(list.data, function (index, item) {
	              if(item.value === $(refs.province).val()){
		           $('#address_province').text(translator.translateKey(item.text));
	               }
            });    
        });
        $(refs.postalcode).live('paste, input', function(e) {
           console.log(refs.postalcode + '::postalcode');
            var postalCodeval = $(refs.postalcode).val().split(" ").join(""); 
            $('#address_postalcode').text(postalCodeval);
        });
            
        $(refs.streetPreviousAddress).live('paste, input', function(e) {
	        var fields = [
	        	{ element: "streetPreviousAddress", field: "" },
	            { element: "previousAddressLine1", 			field: "Line1", 		mode: pca.fieldMode.POPULATE },
	            { element: "previousAddressLine2", 			field: "Line2", 		mode: pca.fieldMode.POPULATE },
	            { element: "previousMulti-unit", 			field: "{AcMua}", 		mode: pca.fieldMode.POPULATE },
	            { element: "previousCity", 					field: "City", 			mode: pca.fieldMode.POPULATE },
	            { element: "previousProvinceCode", 			field: "ProvinceCode", 	mode: pca.fieldMode.POPULATE },
	            { element: "previousPostalcode", 			field: "PostalCode",	mode: pca.fieldMode.POPULATE }
	        ],
	        options = {
	        	key: "gz38-nt61-zz89-db43"
	        },
	        control = new pca.Address(fields, options);
			control.options.bar = options.bar || {};
			control.options.bar.showCountry = false;
			control.options.bar.showLogo = true;
			control.listen('populate', function(){
				app.validationDecorator.clearErrArrtibute();
				$('#personalInfo_canadaPost_SearchedPreviousAddress').show();
		     	$('#personalData_canadaPostPreviousAddressDescription1').show();
		     	$('#personalInfo_canadaPost_PreviousAddressSearch_instructions').hide();
		     	$('#personalData_enterAddressManuallyPreviousSection').hide();
		     	$(refs.editAddressPreviousButton).removeClass('hideElement');
		     	$(refs.enterAddressManuallyPreviousButton).addClass('hideElement');
		     	$(refs.acceptPreviousButton).addClass('hideElement');
                if($(refs.addressline1_prev).val().indexOf("-") !== -1){
					var addressLinewithUnitNumberPre = [];
					addressLinewithUnitNumberPre = $(refs.addressline1_prev).val().split('-');
					var addressline1PrevFull = '';
			    	for(i=1;i<addressLinewithUnitNumberPre.length;i++) {
			    		addressline1PrevFull += addressLinewithUnitNumberPre[i] + "-";
			    	}
			    	console.log(logPrefix + sMethod + "addressline1PrevFull : " + addressline1PrevFull.substring(0, addressline1PrevFull.length-1));
			    	
					// If Unit No is more then 6 char then consider as addressline1 instead of Unit no
					if(addressLinewithUnitNumberPre[0].length > 6){
						$('#address_preunit').text('');
						$('#address_previousLine1').text($(refs.addressline1_prev).val());
						$(refs.suiteunit_prev).val("");
						$('#address_preunit_hyphen').hide();
					}else{
						$('#address_preunit_hyphen').show();
						$('#address_preunit').text(addressLinewithUnitNumberPre[0]);
                        $('#address_previousLine1').text(addressline1PrevFull.substring(0, addressline1PrevFull.length-1));
                        $(refs.suiteunit_prev).val(addressLinewithUnitNumberPre[0]);
                        $(refs.addressline1_prev).val(addressline1PrevFull.substring(0, addressline1PrevFull.length-1));
					}
				}else{
					$('#address_preunit_hyphen').hide();
					$('#address_preunit').text("");
					$('#address_previousLine1').text($(refs.addressline1_prev).val());
				}
				// VZE-125
				if($(refs.addressline2_prev).val() != ''){
                   $('#address_previousLine2').show();
                   $('#address_previousLine2_br').removeClass('hideElement');
	               $('address_previousLine2').text($(refs.addressline2_prev).val());
                }else{
	               $('#address_previousLine2_br').addClass('hideElement');
                   $('#address_previousLine2').hide();
                }
                $('#address_previousCity').text($(refs.city_prev).val());
                list = new WICI.ProvincesList(),
                $.each(list.data, function (index, item) {
	              if(item.value === $(refs.province_prev).val()){
		           $('#address_previousProvince').text(translator.translateKey(item.text));
	               }
                });
                var postalCodeval = $(refs.postalcode_prev).val().split(" ").join(""); 
                $('#address_previousPostalcode').text(postalCodeval);
                $(refs.postalcode_prev).val(postalCodeval);
                models.addressModel.set("province_prev",$(refs.province_prev).val());
                
                if($(refs.city_prev).val() != '' && $(refs.province_prev).val() != '' && $(refs.city_prev).val().length >= 18) 
            		invokeAbbreviateCitynamePrev($(refs.city_prev).val().toUpperCase(), $(refs.province_prev).val(), abbreviateCitynamePrevSuccess, abbreviateCitynamePrevFail);
			});
        });
        
        $(refs.enterAddressManuallyPreviousButton).click(function() {
        	console.log(refs.enterAddressManuallyPreviousButton + '::click');
        	$(refs.enterAddressManuallyPreviousButton).addClass('hideElement');
        	$(refs.acceptPreviousButton).removeClass('hideElement');
        	$('#personalData_enterAddressManuallyPreviousSection').show();
        	$('#personalInfo_canadaPost_SearchedPreviousAddress').hide();
        	$('#personalInfo_canadaPost_PreviousAddressSearch_instructions').hide();
        	$('#personalData_canadaPostPreviousAddressDescription1').show();
        });
        
        $(refs.editAddressPreviousButton).click(function() {
        	console.log(refs.editAddressPreviousButton + '::click');
        	$(refs.editAddressPreviousButton).addClass('hideElement');
        	$(refs.acceptPreviousButton).removeClass('hideElement');
        	$('#personalData_enterAddressManuallyPreviousSection').show();
        	$('#personalInfo_canadaPost_SearchedPreviousAddress').show();
        	$('#personalInfo_canadaPost_PreviousAddressSearch_instructions').hide();
        	$('#personalData_canadaPostPreviousAddressDescription1').show();
            $('#contactInfomation_infomation_button').hide();
            $('#personalInfo_pre_year_informationButton').hide();
        });
        
        $(refs.acceptPreviousButton).click(function() {
        	console.log(refs.acceptPreviousButton + '::click');
            
        	app.validationDecorator.clearErrArrtibute();
        	var postrez = [];
        	
            if($(refs.suiteunit_prev).val() && !validator.suiteUnit($(refs.suiteunit_prev).val().toUpperCase()))
            	postrez.push({name: 'suiteunit_prev', err: '', uiid: refs.suiteunit_prev});
            if(!$(refs.addressline1_prev).val().toUpperCase() && !validator.addressLine($(refs.addressline1_prev).val().toUpperCase())){
	            postrez.push({name: 'addressline1_prev', err: '', uiid: refs.addressline1_prev});
	        }else{
	        	var regex = new RegExp(/^[A-Za-z0-9àèìòùáéóíúý .'/&-]{1,40}$/);
	               var isValid = $(refs.addressline1_prev).val().toUpperCase().match(regex);
	               if(isValid){
	                    var poBoxArray = ["P O B O X","P O BO X","P O BOX","PO BOX","PO Box","po box","P.o box","P.O Box","P.O. Box","p.o box","p.o. box","postal box","Postal Box","postal Box","Postal box","CP","Cp","cP","cp","C.P","c.P","C.p","c.p","C.P.","c.p.","Case Postale","Case postale","case postale","Case postale"];
	                    $.each(poBoxArray, function (index, item) {
	                      if($(refs.addressline1_prev).val().toLowerCase().includes(item.toLowerCase())){
	                    	  $('#personalInfo_pre_year_informationButton').show();
	                    	  postrez.push({name: 'addressline1_prev', err: '', uiid: refs.addressline1_prev});
	                      }
	                    });
	               }else{
	                    postrez.push({name: 'addressline1_prev', err: '', uiid: refs.addressline1_prev});
	               }
            }
            if($(refs.addressline2_prev).val() && !validator.addressLine($(refs.addressline2_prev).val().toUpperCase()))
            	postrez.push({name: 'addressline2_prev', err: '', uiid: refs.addressline2_prev});
            if(!validator.city($(refs.city_prev).val().toUpperCase()))
            	postrez.push({name: 'city_prev', err: '', uiid: refs.city_prev});
            if($(refs.province_prev).val() == "null")
            	postrez.push({name: 'province_prev', err: '', uiid: refs.province_prev});
            if(!validator.postalCode($(refs.postalcode_prev).val().toUpperCase()))
            	postrez.push({name: 'postalcode_prev', err: '', uiid: refs.postalcode_prev});
            
            console.log(refs.acceptButton + '::click' + postrez.length);
            if(postrez.length > 0) {
            	app.validationDecorator.applyErrAttribute(postrez);
                	if($(refs.city_prev).val() != '' && $(refs.province_prev).val() != '' && $(refs.city_prev).val().length >= 18) 
                		invokeAbbreviateCitynamePrev($(refs.city_prev).val().toUpperCase(), $(refs.province_prev).val(), abbreviateCitynamePrevSuccess, abbreviateCitynamePrevFail);
            } else {
                if($(refs.city_prev).val().length >= 18) 
                	invokeAbbreviateCitynamePrev($(refs.city_prev).val().toUpperCase(), $(refs.province_prev).val(), abbreviateCitynamePrevSuccess, abbreviateCitynamePrevFail);
            	
	            $('#address_preunit').text($(refs.suiteunit_prev).val());
	            if($(refs.suiteunit_prev).val())
	            	$('#address_preunit_hyphen').show();
	            else 
	            	$('#address_preunit_hyphen').hide();
            	$('#address_previousLine1').text($(refs.addressline1_prev).val());
                // VZE-125
                if($(refs.addressline2_prev).val() != ''){
                   $('#address_previousLine2').show();
                   $('#address_previousLine2_br').removeClass('hideElement');
	               $('address_previousLine2').text($(refs.addressline2_prev).val());
                }else{
	               $('#address_previousLine2_br').addClass('hideElement');
                   $('#address_previousLine2').hide();
                }
                $('#address_previousCity').text($(refs.city_prev).val());
                list = new WICI.ProvincesList(),
                $.each(list.data, function (index, item) {
	              if(item.value === $(refs.province_prev).val()){
		           $('#address_previousProvince').text(translator.translateKey(item.text));
	               }
                });
                var postalCodeval = $(refs.postalcode_prev).val().split(" ").join(""); 
                $('#address_previousPostalcode').text(postalCodeval);
            	$(refs.editAddressPreviousButton).removeClass('hideElement');
            	$(refs.acceptPreviousButton).addClass('hideElement');
            	$('#personalData_enterAddressManuallyPreviousSection').hide();
            	$('#personalInfo_canadaPost_SearchedPreviousAddress').show();
            }
        });
        $(refs.suiteunit_prev).live('paste, input', function(e) {
            console.log(refs.suiteunit_prev + '::suiteunit_prev');
            $('#address_preunit').text($(refs.suiteunit_prev).val());
            if($(refs.suiteunit_prev).val())
            	$('#address_preunit_hyphen').show();
            else 
            	$('#address_preunit_hyphen').hide();
        });
        $(refs.addressline1_prev).live('paste, input', function(e) {
            console.log(refs.addressline1_prev + '::addressline1_prev');
            $('#address_previousLine1').text($(refs.addressline1_prev).val());
        });
        $(refs.addressline2_prev).live('paste, input', function(e) {
            console.log(refs.addressline1_prev + '::addressline1_prev');
            $('#address_previousLine2').text($(refs.addressline2_prev).val());
        });
        $(refs.city_prev).live('paste, input', function(e) {
            console.log(refs.city_prev + '::city_prev');
            $('#address_previousCity').text($(refs.city_prev).val());
        });

      
        $(refs.addressline1_prev).on('keypress', function (event) {
		    var regex = new RegExp("^[a-zA-Z0-9 ]+$");
		    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
		    if (!regex.test(key)) {
		       event.preventDefault();
		       return false;
		    }
        });
        $(refs.province_prev).live('paste, input', function(e) {
            console.log(refs.province_prev + '::province_prev');
            list = new WICI.ProvincesList(),
            $.each(list.data, function (index, item) {
	              if(item.value === $(refs.province_prev).val()){
		           $('#address_previousProvince').text(translator.translateKey(item.text));
	               }
            });    
        });
        $(refs.postalcode_prev).live('paste, input', function(e) {
           console.log(refs.postalcode_prev + '::postalcode_prev');
			var postalCodevalPre = $(refs.postalcode_prev).val().split(" ").join(""); 
            $('#address_previousPostalcode').text(postalCodevalPre);
            
        });
            
        $(refs.postalcode_prev).live('paste, input', function(e) {
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
            $(refs.expiryDateYear).val("null");
            $(refs.expiryDateMonth).val("null");
            $(refs.expiryDateDay).val("null");
			models.personalDataModel.set('scanFlag', false);
			models.personalDataModel.set('placeofissue', '');
			models.personalDataModel.set('idtype', '');
			console.log(refs.placeofissue + '::change :: ' + models.personalDataModel.get('placeofissue') + " " + models.personalDataModel.get('idtype'));
            populateIdTypesList();
            showHideQCHealthCard();
            populateExpiryDateMonthList();
        });
        // VZE-161
         $(refs.expiryDateMonth).change(function(event) {
            console.log(refs.expiryDateMonth + '::change');
            var currModel = models.personalDataModel;
            currModel.set('expiryDateMonth', $(refs.expiryDateMonth).val());
            populateExpiryDateMonthList();
        });
        $(refs.expiryDateYear).change(function(event) {
            console.log(refs.expiryDateYear + '::change');
            var currModel = models.personalDataModel;
            currModel.set('expiryDateYear', $(refs.expiryDateYear).val());
            populateExpiryDateMonthList();
        });
		// US4364        
        $(refs.idtype).change(function(event) {
            console.log(refs.idtype + '::change');
            populateExpiryDateMonthList();
            populateIdTypesList();
            showHideQCHealthCard();
        });
        $(refs.expiryDateDay).change(function(event) {
            console.log(refs.expiryDateDay + '::change');
            var currModel = models.personalDataModel;
            currModel.set('expiryDateDay', $(refs.expiryDateDay).val());
            populateExpiryDateMonthList();
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
            console.log('translatorFinished' + '::change');
            populateIdTypesList();
            showHideQCHealthCard();
            applyPaddingForResidanceType();
            populateExpiryDateMonthList();
            checkForMsButton();
            checkAddressProvince();
            updatePlaceholderLanguage();
        });


        $(refs.nextButton).click(function() {
        	// VZE-161
        	if(IDScan){
        		showNextScreen();
        	}else{
        		if(isInputDateSameAsToday()){
     		       showIdExpiryDateErrorMessage_dialog()
     	        }else{
     		      showNextScreen();
     	        }
        	}
        });
        $(refs.prevButton).click(function() {
            showPrevScreen();
        });

        var currModel = models.personalDataModel;

        $("#personalData_ScanIdButton").click(function() {
	        app.validationDecorator.clearErrArrtibute();
            messageDialog.scan(null, onScanSuccessCallback, onScanErrorCallback, null, null, translator);
        });

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
        // VZE-161
        $("#idExpiryDateContinueButton").click(function(){
	        hideIdExpiryDateErrorMessage_dialog();
	        isContinueButton = true;
	        showNextScreen();
        });
   
        $("#idExpiryDateCancelButton").click(function(){
        	isContinueButton = false;
        	hideIdExpiryDateErrorMessage_dialog();
        	showNextScreen();
        });
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
        
        $(refs.province_prev).on("change", function() {
        	console.log(refs.province_prev + '::change');
        	models.addressModel.set("province_prev", $(refs.province_prev).val());
    	});
        
        $.subscribe('translatorFinished',function(){
            console.log('translatorFinished subscribe()');
            populateProvinces();
            populateIdTypesProvinces();
            showHideQCHealthCard();
            applyPaddingForResidanceType();
            populateExpiryDateMonthList();
            $(refs.province).val(models.addressModel.get("province"));
			$(refs.province_prev).val(models.addressModel.get("province_prev"));
        });

        checkForMsButton();
    }
   // VZE-161
   // ---------------------------------------------------------------------------------------
	function populateExpiryDateMonthList(takeDayByYearNMonth) {
		var sMethod = 'populateExpiryDateMonthList() ';
		console.log(logPrefix + sMethod);
		
		if(takeDayByYearNMonth) {
        	syncUserData(true);
        }else {
        	syncUserData();
        }
		var controlRef = $(refs.expiryDateMonth);
		var controlRefYear = $(refs.expiryDateYear);
		var controlRefDay = $(refs.expiryDateDay);
		
		controlRef.empty();
		controlRefYear.empty();
		controlRefDay.empty();
		
		selected = models.personalDataModel.get('expiryDateMonth');
		selectedYear = models.personalDataModel.get('expiryDateYear');
		selectedDay = models.personalDataModel.get('expiryDateDay');
	     
		
		let currentYear = new Date().getFullYear();
		var pastYear = currentYear - 1;
		var list = new WICI.ExpiryDateMonthList();

		var optTemplYear = '<option value="' + null + '" ';
			optTemplYear = optTemplYear + '>' + translator.translateKey("ExpiryDateYear_null")
					+ '</option>';
			controlRefYear.append(optTemplYear);
		for (var y = 0; y < 50; y++) {
            var optTemplYear = '<option value="' + pastYear + '" ';
			optTemplYear = optTemplYear + '>' + pastYear
					+ '</option>';
			controlRefYear.append(optTemplYear);
		    pastYear++;
  		}
		
		$.each(list.data, function(index, item) {
			var optTempl = '<option value="' + item.value + '" ';
			optTempl = optTempl + '>' + translator.translateKey(item.text)
					+ '</option>';
			controlRef.append(optTempl);
			
		});

		var year = parseInt(selectedYear);
        console.log(logPrefix + sMethod + "selectedYear :" + selectedYear + " : " + (typeof year) );
		var month = parseInt(selected);
        console.log(logPrefix + sMethod + "selectedMonth :" + selected +" : "+ (typeof month));
		//get the last day, so the number of days in that month
		var days = new Date(year, month, 0).getDate();
        console.log(logPrefix + sMethod + "Calculated days :" + days);
		var optTemplDay = '<option value="' + null + '" ';
	       optTemplDay = optTemplDay + '>' + translator.translateKey("ExpiryDateDay_null")
					+ '</option>';
			controlRefDay.append(optTemplDay);
			
		    //lets create the days of that month
		for (var d = 1; d <= days; d++) {
			if(d.toString().length == 1){
				d = "0" + d;
			 }
              var optTemplDay = '<option value="' + d + '" ';
				optTemplDay = optTemplDay + '>' + d
						+ '</option>';
				controlRefDay.append(optTemplDay);
           }
		if (selectedYear) {
			$(refs.expiryDateYear + " [value='" + selectedYear + "']")
					.attr("selected", "selected");
		}
		if (selected) {
			$(refs.expiryDateMonth + " [value='" + selected + "']")
					.attr("selected", "selected");
		}
        if (selectedDay) {
			$(refs.expiryDateDay + " [value='" + selectedDay + "']")
					.attr("selected", "selected");
		}
		
	}
    //---VZE-161------------------------------------------------------------------------------------
	function showIdExpiryDateErrorMessage_dialog() {
		$("#idExpiryDateErrorMessageDialog-container").show();
        
	}
	//---VZE-161------------------------------------------------------------------------------------
	function hideIdExpiryDateErrorMessage_dialog() {
		$("#idExpiryDateErrorMessageDialog-container").hide();
        
	}
	
    // ---------------------------------------------------------------------------------------
    function updatePlaceholderLanguage() {
	    var sMethod = logPrefix + 'updatePlaceholderLanguage';
        if (app.translator.getCurrentLanguage() === "en") {
	        $('#streetAddress').attr('placeholder', '  Start typing a street address or postal code'); 
            $('#personalData_Address_SuiteUnit_TextField').attr('placeholder', ' Unit #');
            $('#personalData_Address_AddressLine1_TextField').attr('placeholder', ' Street Number, Street Name');
            $('#personalData_Address_AddressLine2_TextField').attr('placeholder', ' Mailing Address Line 2');
            $('#personalData_Address_City_TextField').attr('placeholder', ' City');
            $('#personalData_Address_Province_TextField').attr('placeholder', ' Province');
            $('#personalData_Address_PostalCode_TextField').attr('placeholder', ' L#L#L#');
            // Previous address 
            $('#streetPreviousAddress').attr('placeholder', '  Start typing a street address or postal code'); 
            $('#personalData_PreviousAddress_SuiteUnit_TextField').attr('placeholder', ' Unit #');
            $('#personalData_PreviousAddress_AddressLine1_TextField').attr('placeholder', ' Street Number, Street Name');
            $('#personalData_PreviousAddress_AddressLine2_TextField').attr('placeholder', ' Mailing Address Line 2');
            $('#personalData_PreviousAddress_City_TextField').attr('placeholder', ' City');
            $('#personalData_PreviousAddress_Province_TextField').attr('placeholder', ' Province');
            $('#personalData_PreviousAddress_PostalCode_TextField').attr('placeholder', ' L#L#L#');
        } else {
	        $('#streetAddress').attr('placeholder', '  Commencez à entrer une adresse ou un code postal'); 
            $('#personalData_Address_SuiteUnit_TextField').attr('placeholder', ' No unité');
            $('#personalData_Address_AddressLine1_TextField').attr('placeholder', ' Adresse postale ligne 1*');
            $('#personalData_Address_AddressLine2_TextField').attr('placeholder', ' Adresse postale ligne 2');
            $('#personalData_Address_City_TextField').attr('placeholder', ' Ville*');
            $('#personalData_Address_Province_TextField').attr('placeholder', ' Province*');
            $('#personalData_Address_PostalCode_TextField').attr('placeholder', ' Code postal*');
            // Previous address 
            $('#streetPreviousAddress').attr('placeholder', '  Commencez à entrer une adresse ou un code postal'); 
            $('#personalData_PreviousAddress_SuiteUnit_TextField').attr('placeholder', ' No unité');
            $('#personalData_PreviousAddress_AddressLine1_TextField').attr('placeholder', ' Adresse postale ligne 1*');
            $('#personalData_PreviousAddress_AddressLine2_TextField').attr('placeholder', ' Adresse postale ligne 2');
            $('#personalData_PreviousAddress_City_TextField').attr('placeholder', ' Ville*');
            $('#personalData_PreviousAddress_Province_TextField').attr('placeholder', ' Province*');
            $('#personalData_PreviousAddress_PostalCode_TextField').attr('placeholder', ' Code postal*');
        }
    }
    //---------------------------------------------------------------------------------------
    function hideCanadaPostManualEdit(){
    	if(models.addressModel.get("postalcode")) {
    		$('#personalInfo_canadaPost_SearchedAddress').show();
    		$('#personalData_canadaPostAddressDescription1').show();
        	$(refs.editAddressButton).removeClass('hideElement');
        	$(refs.acceptButton).addClass('hideElement');
        	$(refs.enterAddressManuallyButton).addClass('hideElement');
        	$('#personalData_enterAddressManuallySection').hide();
        	$('#personalInfo_canadaPost_addressSearch_instructions').hide();
        	$('#contactInfomation_infomation_button').hide();
            $('#personalInfo_pre_year_informationButton').hide();
            if($(refs.suiteunit).val())
            	$('#address_preunit_hyphen').show();
            else 
            	$('#address_preunit_hyphen').hide();
            if($(refs.addressline2).val() != ''){
                $('#address_line2').show();
                $('#addressline2_br').removeClass('hideElement');
	            $('#address_line2').text($(refs.addressline2).val());
            }else{
	            $('#addressline2_br').addClass('hideElement');
                $('#address_line2').hide();
            }
    	} else {
    		$(refs.editAddressButton).addClass('hideElement');
        	$(refs.acceptButton).addClass('hideElement');
        	$('#personalInfo_canadaPost_SearchedAddress').hide();
            $('#personalData_enterAddressManuallySection').hide();
            $('#personalData_canadaPostAddressDescription1').hide();
            $('#contactInfomation_infomation_button').hide();
            $('#personalInfo_pre_year_informationButton').hide();
    	}
    }
    //---------------------------------------------------------------------------------------
    function hideCanadaPostPreviousAddrManualEdit(){
    	if(models.addressModel.get("postalcode_prev")) {
    		$('#personalInfo_canadaPost_SearchedPreviousAddress').show();
    		$('#personalData_canadaPostPreviousAddressDescription1').show();
        	$(refs.editAddressPreviousButton).removeClass('hideElement');
        	$(refs.acceptPreviousButton).addClass('hideElement');
        	$(refs.enterAddressManuallyPreviousButton).addClass('hideElement');
        	$('#personalData_enterAddressManuallyPreviousSection').hide();
        	$('#personalInfo_canadaPost_PreviousAddressSearch_instructions').hide();
        	if($(refs.suiteunit_prev).val())
            	$('#address_preunit_hyphen').show();
            else 
            	$('#address_preunit_hyphen').hide();
        	if($(refs.addressline2_prev).val() != ''){
                $('#address_previousLine2').show();
                $('#address_previousLine2_br').removeClass('hideElement');
	            $('address_previousLine2').text($(refs.addressline2_prev).val());
            }else{
	            $('#address_previousLine2_br').addClass('hideElement');
                $('#address_previousLine2').hide();
            }
    	} else {
    		$(refs.editAddressPreviousButton).addClass('hideElement');
    		$(refs.acceptPreviousButton).addClass('hideElement');
    		$('#personalInfo_canadaPost_SearchedPreviousAddress').hide();
        	$('#personalData_enterAddressManuallyPreviousSection').hide();
        	$('#personalData_canadaPostPreviousAddressDescription1').hide();
       }
    }
    //---------------------------------------------------------------------------------------
    function checkAddressProvince() {
    	list = new WICI.ProvincesList();
    	$.each(list.data, function (index, item) {
            if(item.value === $(refs.province).val()){
             $('#address_province').text(translator.translateKey(item.text));
             }
          });
        $.each(list.data, function (index, item) {
          if(item.value === $(refs.province_prev).val()){
           $('#address_previousProvince').text(translator.translateKey(item.text));
           }
        });
    }
    //---------------------------------------------------------------------------------------
    function showHideAddressLine2() {
    	if(app.getAddressLine2Flag() == 'Y') {
    		$('#personalData_AddressLine2Section').removeClass('hideElement');
    		$('#personalData_PreviousAddressLine2Section').removeClass('hideElement');
    	} else {
    		$('#personalData_AddressLine2Section').addClass('hideElement');
    		$('#personalData_PreviousAddressLine2Section').addClass('hideElement');
    	}
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
	function restorePopulateExpiryDateList() {
        var sMethod = 'restorePopulateExpiryDateList() ',
            currModel, expiryMonthValue,expiryYearValue,expiryDayValue, controlRefMonth,controlRefDay,controlRefYear, list;
        console.log(logPrefix + sMethod);

        currModel = models.personalDataModel;
        expiryYearValue = currModel.get('expiryDateYear');
        expiryMonthValue = currModel.get('expiryDateMonth');
        expiryDayValue = currModel.get('expiryDateDay');
		console.log(logPrefix + sMethod + " expiryYearValue : " + expiryYearValue + (typeof expiryYearValue) +" expiryMonthValue : " + expiryMonthValue + "expiryDayValue : " + expiryDayValue);
        
        controlRefYear = $(refs.expiryDateYear);
        controlRefMonth = $(refs.expiryDateMonth);
        controlRefDay = $(refs.expiryDateDay);
       
        controlRefYear.empty();
        controlRefMonth.empty();
        controlRefDay.empty();
        list = new WICI.ExpiryDateMonthList();

        $.each(list.data, function (index, item) {
            var optTempl = '<option value="' +
                item.value +
                '">' +
                translator.translateKey(item.text) +
                '</option>';
            controlRefMonth.append(optTempl);
        });

       if(expiryYearValue !== "null" || expiryYearValue !== null){
	      console.log(logPrefix + sMethod + "null check  for Year");
	      var optTemplYear = '<option value="' +
                expiryYearValue +
                '">' +
                expiryYearValue +
                '</option>';
            controlRefYear.append(optTemplYear);
        }
       if(expiryDayValue !== "null" || expiryDayValue !== null){
	     console.log(logPrefix + sMethod + "null check  for Day");
	     var optTemplDay = '<option value="' +
                expiryDayValue +
                '">' +
                expiryDayValue +
                '</option>';
            controlRefDay.append(optTemplDay);
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
    function invokeAbbreviateCitynamePrev( city, province, argSuccessCB, argFailureCB ){
        new WICI.LoadingIndicatorController().show();
        connectivityController.AbbreviateCityname(city,province,argSuccessCB,argFailureCB);
    }
    //---------------------------------------------------------------------------------------
    function abbreviateCitynamePrevSuccess(argResponse) {
    	var sMethod = "abbreviateCitynamePrevSuccess() :: ";
    	
    	new WICI.LoadingIndicatorController().hide();
    	if(argResponse && argResponse.data && argResponse.data.abrivatedCityLookup == "Y") {
    		// Previous City name is abbreviated
    		$(refs.city_prev).removeClass('errorField');
        	console.log(logPrefix + sMethod + "Previous City name is abbreviated.");
        	var currAddrModel = models.addressModel;
    		currAddrModel.set('city_prev', argResponse.data.abbrevaitedCityName);
    		$(refs.city_prev).val(currAddrModel.get('city_prev'));
    		$('#address_previousCity').text(currAddrModel.get('city_prev'));
        } else if(argResponse && argResponse.data && argResponse.data.abrivatedCityLookup == "N") {
        	// Previous City name is not abbreviated
        	console.log(logPrefix + sMethod + "Previous City name is not abbreviated.");
        }
    }
    //---------------------------------------------------------------------------------------
    function abbreviateCitynamePrevFail(argResponse) {
    	var sMethod = "abbreviateCitynamePrevFail() :: ";
    	
    	// City name abbreviation failed
    	new WICI.LoadingIndicatorController().hide();
    	console.log(logPrefix + sMethod + "Previous City name abbreviation failed.");
    }
    //---------------------------------------------------------------------------------------
    function invokeAbbreviateCityname( city, province, argSuccessCB, argFailureCB ){
        new WICI.LoadingIndicatorController().show();
        connectivityController.AbbreviateCityname(city,province,argSuccessCB,argFailureCB);
    }
    //---------------------------------------------------------------------------------------
    function abbreviateCitynameSuccess(argResponse) {
    	var sMethod = "abbreviateCitynameSuccess() :: ";
    	
    	new WICI.LoadingIndicatorController().hide();
    	if(argResponse && argResponse.data && argResponse.data.abrivatedCityLookup == "Y") {
    		// City name is abbreviated
    		$(refs.city).removeClass('errorField');
        	console.log(logPrefix + sMethod + "City name is abbreviated.");
        	var currAddrModel = models.addressModel;
    		currAddrModel.set('scannedCity', argResponse.data.abbrevaitedCityName);
    		$(refs.city).val(currAddrModel.get('scannedCity'));
    		$('#address_city').text(currAddrModel.get('scannedCity'));
        } else if(argResponse && argResponse.data && argResponse.data.abrivatedCityLookup == "N") {
        	// City name is not abbreviated
        	console.log(logPrefix + sMethod + "City name is not abbreviated.");
        }
    }
    //---------------------------------------------------------------------------------------
    function abbreviateCitynameFail(argResponse) {
    	var sMethod = "abbreviateCitynameFail() :: ";
    	
    	// City name abbreviation failed
    	new WICI.LoadingIndicatorController().hide();
    	console.log(logPrefix + sMethod + "City name abbreviation failed.");
    }
    //---------------------------------------------------------------------------------------
    function invokeAddressLookup( line1, line2, city, province, postalcode, argSuccessCB, argFailureCB ){
        new WICI.LoadingIndicatorController().show();
        connectivityController.AddressLookup(line1,line2,city,province,postalcode,argSuccessCB,argFailureCB);
    }
    //---------------------------------------------------------------------------------------
    function addressLookupSuccess( argResponse ){
        var sMethod = "addressLookupSuccess() :: ";
        console.log(logPrefix + sMethod + JSON.stringify(argResponse));
        
        if(argResponse && argResponse.data && argResponse.data.abrivatedCityLookup == "Y") {
        	new WICI.LoadingIndicatorController().hide();
        	console.log(logPrefix + sMethod + "City name is abbreviated.");
        	var currAddrModel = models.addressModel;
    		currAddrModel.set('scannedCity', argResponse.data.abbrevaitedCityName);
    		$(refs.city).val(currAddrModel.get('scannedCity'));
    		$('#address_city').text(currAddrModel.get('scannedCity'));
        } else if(argResponse && argResponse.data && argResponse.data.abrivatedCityLookup == "N") {
        	new WICI.LoadingIndicatorController().hide();
        	// City name is not abbreviated
        	console.log(logPrefix + sMethod + "City name is not abbreviated.");
        } else {
            var currModel = models.addressModel;
            
            new WICI.LoadingIndicatorController().hide();
            if( argResponse && !argResponse.error && !_.isEmpty(argResponse.data)){
                var lookupHelper = new WICI.AddressLookupResponseHelper();

                lookupHelper.setAddressResponseObject(argResponse.data);

                console.log("Address Line 1:" + lookupHelper.getAddressLine1() );
                console.log("Address Line 2:" + lookupHelper.getAddressLine2() );
                console.log("City:" + lookupHelper.getCityName());
                console.log("Province:" + lookupHelper.getProvince());
                console.log("PostalCode:" + 	lookupHelper.getPostalCode());
                console.log("AddressValidationFlag:" + 	lookupHelper.getAddressStatus());
                if(argResponse && argResponse.data){
                	console.log("addressNotfound:" + argResponse.data.addressNotfound);
                	console.log("servicefailure:" + argResponse.data.servicefailure); 
                }
                
                setScannedAddressInModel();
                
                var currAddrModel = models.addressModel;
                //currAddrModel.set('canadaPostSuitunit', rez.addressLine1_Unit);
                currAddrModel.set('canadaPostAddressline1', lookupHelper.getAddressLine1());
        		currAddrModel.set('canadaPostAddressline2', '');
        		currAddrModel.set('canadaPostCity', lookupHelper.getCityName());
        		currAddrModel.set('canadaPostProvince', lookupHelper.getProvince());
        		currAddrModel.set('canadaPostPostalcode', lookupHelper.getPostalCode());
        		
        		if(argResponse.data && argResponse.data.servicefailure) {
                	// Canada post AddressComplete service unavailable
                	// So populate scanned address
                	populateScannedFields(true);

        		} else if(argResponse.data && argResponse.data.addressNotfound) {
                	// Scanned address not found in Canada post AddressComplete
                	// So show address not found pop up
                	addressNotFoundFlag = true;
                	populateScannedFields();
                	
                	var scannedMessage = "<br>";
                    scannedMessage += currAddrModel.get('scannedAddressline1') + "<br>";
                    if(currAddrModel.get('scannedAddressline2') != ''){
                    	scannedMessage += currAddrModel.get('scannedAddressline2') + "<br>";
                    }
                    scannedMessage += currAddrModel.get('scannedCity') + ", " + currAddrModel.get('scannedProvince') + "<br>";
                    scannedMessage += currAddrModel.get('scannedPostalcode') + "<br>";
                    scannedMessage += "<br>";
                    messageDialog.canadaPostAddressNotFound(translator.translateKey("personalData_AddressNotFound_Message"), 
                        		scannedMessage, translator.translateKey("personalData_CanadaPostNotFindAddress"), 
                        		translator.translateKey("personalData_AddressNotFound_Title"), $.noop);
                } else if(lookupHelper.getAddressStatus()) {
                	// Scanned address and Canada post address matches
                	// So populate the scanned address in the UI
                	
                	continueWithScannedAddress();
                } else if(!lookupHelper.getAddressStatus()) {
                	// Scanned address and Canada post address doesn't match. Show pop up
                	
                    var scannedAddressMessage = "<br>";
                    scannedAddressMessage += currAddrModel.get('scannedAddressline1') + "<br>";
                    if(currAddrModel.get('scannedAddressline2') != ''){
                    	scannedAddressMessage += currAddrModel.get('scannedAddressline2') + "<br>";
                    }
                    scannedAddressMessage += currAddrModel.get('scannedCity') + ", " + currAddrModel.get('scannedProvince') + "<br>";
                    scannedAddressMessage += currAddrModel.get('scannedPostalcode') + "<br>";
                    scannedAddressMessage += "<br>";
                    
                    var canadaPostMessage = "<br>";
                    canadaPostMessage += lookupHelper.getAddressLine1() + " " + lookupHelper.getAddressLine2() + "<br>";
                    canadaPostMessage += lookupHelper.getCityName() + ", " + lookupHelper.getProvince() + "<br>";
                    canadaPostMessage += lookupHelper.getPostalCode() + "<br>";
                    canadaPostMessage += "<br>";
                    
                    messageDialog.canadaPost(translator.translateKey("personalData_AddressScannedAs"), 
                    		scannedAddressMessage, translator.translateKey("personalData_AddressCanadaPostFormat"),
                    		canadaPostMessage, continueWithCanadaPostAddress, continueWithScannedAddress, 
                    		translator.translateKey("personalData_AddressConfirmation_Title"));
                }
            }
        }
    }
    function setScannedAddressInModel() {
    	var sMethod = "setScannedAddressInModel()";
    	console.log(logPrefix + sMethod);
    	
    	var currModel = models.personalDataModel;
        console.log(logPrefix + sMethod + " Scanned Response from Model : " + JSON.stringify(currModel.get('response')));
    	var parser = new WICI.ScanDataMappingHelper(), rez;
    	var response = currModel.get('response');
    	rez = parser.parse(response.data);
    	    			
		var currAddrModel = models.addressModel;
        if (parser.checkSupportedID(response.data, ['PDF417']) > 0) {
        	try {
        		rez = parser.parse(response.data);
        		currAddrModel.set('province', rez.addressProvince);
        		currAddrModel.set('scannedSuitunit', removeAccents(rez.addressLine1_Unit));
        		currAddrModel.set('scannedStrtNoAndName', 
        				rez.addressLine1_CivicStreetNumber == null ? rez.addressLine1_StreetName : rez.addressLine1_CivicStreetNumber + " " + rez.addressLine1_StreetName);
        		currAddrModel.set('scannedAddressline1', removeAccents(rez.addressLine1));
        		currAddrModel.set('scannedAddressline2', removeAccents(rez.addressLine2));
        		currAddrModel.set('scannedCity', removeAccents(rez.addressCity));
        		currAddrModel.set('scannedProvince', rez.addressProvince);
        		currAddrModel.set('scannedPostalcode', rez.addressPostal);
        	} catch (e) {
            	console.log(logPrefix + sMethod + " Exception: " + e);
            }
        } else if(parser.checkSupportedID(response.data, ['ANSI']) > 0) {
        	rez = parser.parse(response.data);   
        	currAddrModel.set('province', rez.idProvince);
        	const idProvince = JSON.stringify(rez.idProvince);
            if(rez.idProvince == 'AB'){
    			try{
    	             const rezNewABDL = parser.parseNewABDL(response.data);
    	             currAddrModel.set('scannedSuitunit', removeAccents(rezNewABDL.addressLine1_Unit));
             		 currAddrModel.set('scannedStrtNoAndName', 
             				rezNewABDL.addressLine1_CivicStreetNumber == null ? rezNewABDL.addressLine1_StreetName : rezNewABDL.addressLine1_CivicStreetNumber + " " + rezNewABDL.addressLine1_StreetName);
             		 currAddrModel.set('scannedAddressline1', removeAccents(rezNewABDL.addressLine1));
             		 currAddrModel.set('scannedAddressline2', removeAccents(rezNewABDL.addressLine2));
             		 currAddrModel.set('scannedCity', removeAccents(rezNewABDL.addressCity));
             		 currAddrModel.set('scannedProvince', rezNewABDL.addressProvince);
             		 currAddrModel.set('scannedPostalcode', rezNewABDL.addressPostal);
    			} catch (e) {
                	console.log(logPrefix + sMethod + " Exception: " + e);
                }
    		} else {
    			try {
    				 const rezNew = parser.parse(response.data);
    				 currAddrModel.set('scannedSuitunit', removeAccents(rezNew.addressLine1_Unit));
             		 currAddrModel.set('scannedStrtNoAndName', 
             				rez.addressLine1_CivicStreetNumber == null ? rezNew.addressLine1_StreetName : rezNew.addressLine1_CivicStreetNumber + " " + rezNew.addressLine1_StreetName);
             		 currAddrModel.set('scannedAddressline1', removeAccents(rezNew.addressLine1));
             		 currAddrModel.set('scannedAddressline2', removeAccents(rezNew.addressLine2));
             		 currAddrModel.set('scannedCity', removeAccents(rezNew.addressCity));
             		 currAddrModel.set('scannedProvince', rezNew.addressProvince);
             		 currAddrModel.set('scannedPostalcode', rezNew.addressPostal);
                } catch (e) {
                	console.log(logPrefix + sMethod + " Exception: " + e);
                }
    		}
		} else { 
			try{
				 const rezNewDL = parser.parseNewDL(response.data);
				 currAddrModel.set('province', rezNewDL.addressProvince);
				 currAddrModel.set('scannedSuitunit', removeAccents(rezNewDL.addressLine1_Unit));
         		 currAddrModel.set('scannedStrtNoAndName', 
         				rez.addressLine1_CivicStreetNumber == null ? rezNewDL.addressLine1_StreetName : rezNewDL.addressLine1_CivicStreetNumber + " " + rezNewDL.addressLine1_StreetName);
         		 currAddrModel.set('scannedAddressline1', removeAccents(rezNewDL.addressLine1));
         		 currAddrModel.set('scannedAddressline2', '');
         		 currAddrModel.set('scannedCity', removeAccents(rezNewDL.addressCity));
         		 currAddrModel.set('scannedProvince', rezNewDL.addressProvince);
         		 currAddrModel.set('scannedPostalcode', rezNewDL.addressPostal);
	           } catch (e) {
	        	console.log(logPrefix + sMethod + " Exception: " + e);
	        }
		}
        
        console.log(logPrefix + sMethod + " scannedStrtNoAndName from Model : " + currAddrModel.get('scannedStrtNoAndName'));
    }
    function displayAddress(flag) {
    	var sMethod = "displayAddress()";
    	console.log(logPrefix + sMethod);
    	
    	var currAddrModel = models.addressModel;
    	$('#personalInfo_canadaPost_SearchedAddress').show();
     	$('#personalData_canadaPostAddressDescription1').show();
     	$('#personalInfo_canadaPost_addressSearch_instructions').hide();
     	$('#personalData_enterAddressManuallySection').hide();
     	$('#address_unit_hyphen').hide();
     	$(refs.editAddressButton).removeClass('hideElement');
     	$(refs.enterAddressManuallyButton).addClass('hideElement');
        $(refs.acceptButton).addClass('hideElement');
        
        if(flag) {
        	var postalCodeval = currAddrModel.get('scannedPostalcode').split(" ").join("");
        	$('#address_unit').text('');
        	$('#address_line1').text(currAddrModel.get('scannedAddressline1'));
            $('#address_line2').text(currAddrModel.get('scannedAddressline2'));
            $('#address_city').text(currAddrModel.get('scannedCity'));
            list = new WICI.ProvincesList();
            $.each(list.data, function (index, item) {
              if(item.value === currAddrModel.get('scannedProvince')){
               $('#address_province').text(translator.translateKey(item.text));
               }
            });
            $('#address_postalcode').text(postalCodeval);
            
            $(refs.suiteunit).val(currAddrModel.get('scannedSuitunit'));
            $(refs.addressline1).val(removeAccents(currAddrModel.get('scannedStrtNoAndName')));
            $(refs.addressline2).val(currAddrModel.get('scannedAddressline2'));
            $(refs.city).val(currAddrModel.get('scannedCity'));
            $(refs.province).val(currAddrModel.get('scannedProvince'));
            $(refs.postalcode).val(postalCodeval);
            showHideAddressLine2Text();
        } else {
        	var postalCodeval = currAddrModel.get('canadaPostPostalcode').split(" ").join("");
        	//$('#address_line1').text(currAddrModel.get('canadaPostAddressline1'));
            $('#address_line2').text(currAddrModel.get('canadaPostAddressline2'));
            //$('#address_unit').text('');
            $('#address_city').text(currAddrModel.get('canadaPostCity'));
            list = new WICI.ProvincesList();
            $.each(list.data, function (index, item) {
              if(item.value === currAddrModel.get('canadaPostProvince')){
               $('#address_province').text(translator.translateKey(item.text));
               }
            });
            $('#address_postalcode').text(postalCodeval);
            
            if(currAddrModel.get('canadaPostAddressline1').indexOf("-") !== -1){
				var addressLinewithUnitNumber = [];
				addressLinewithUnitNumber = currAddrModel.get('canadaPostAddressline1').split('-');
				var addressline1Full = '';
		    	for(i=1;i<addressLinewithUnitNumber.length;i++) {
		    		addressline1Full += addressLinewithUnitNumber[i] + "-";
		    	}
		    	console.log(logPrefix + sMethod + "addressline1Full : " + addressline1Full.substring(0, addressline1Full.length-1));
		    	
		    	if(addressLinewithUnitNumber[0].length > 6){
					$('#address_unit').text('');
					$('#address_line1').text(currAddrModel.get('canadaPostAddressline1'));
					$(refs.addressline1).val(currAddrModel.get('canadaPostAddressline1'));
					$(refs.suiteunit).val("");
					$('#address_unit_hyphen').hide();
				}else{
					$('#address_unit_hyphen').show();
					$('#address_unit').text(addressLinewithUnitNumber[0]);
	                $('#address_line1').text(addressline1Full.substring(0, addressline1Full.length-1));
	                $(refs.suiteunit).val(addressLinewithUnitNumber[0]);
	                $(refs.addressline1).val(addressline1Full.substring(0, addressline1Full.length-1));
				}
			} else {
				$('#address_line1').text(currAddrModel.get('canadaPostAddressline1'));
				$(refs.suiteunit).val("");
				$(refs.addressline1).val(currAddrModel.get('canadaPostAddressline1'));
			}
            
            //$(refs.suiteunit).val("");
            //$(refs.addressline1).val(currAddrModel.get('canadaPostAddressline1'));
            $(refs.addressline2).val("");
            $(refs.city).val(currAddrModel.get('canadaPostCity'));
            $(refs.province).val(currAddrModel.get('canadaPostProvince'));
            $(refs.postalcode).val(postalCodeval);
        }
        
        if(addressNotFoundFlag) {
        	$(refs.editAddressButton).addClass('hideElement');
        	$(refs.acceptButton).removeClass('hideElement');
        	$('#personalData_enterAddressManuallySection').show();
        	$('#personalInfo_canadaPost_SearchedAddress').show();
        	$('#personalInfo_canadaPost_addressSearch_instructions').hide();
        	$('#personalData_canadaPostAddressDescription1').show();
            $('#contactInfomation_infomation_button').hide();
            $('#personalInfo_pre_year_informationButton').hide();
        }
    }
    function showHideAddressLine2Text() {
    	if($(refs.addressline2).val() != ''){
        	$('#address_line2').show();
        	$('#addressline2_br').removeClass('hideElement');
        	$('#address_line2').text($(refs.addressline2).val());
        } else {
        	$('#addressline2_br').addClass('hideElement');
        	$('#address_line2').hide();
        }
    }
    function continueWithScannedAddress() {
        var sMethod = 'continueWithScannedAddress()';
        console.log(logPrefix + sMethod);
        
        new WICI.LoadingIndicatorController().hide();
        populateScannedFields(true);
    }
    function continueWithCanadaPostAddress() {
    	var sMethod = 'continueWithCanadaPostAddress()';
        console.log(logPrefix + sMethod);
        
        new WICI.LoadingIndicatorController().hide();
        populateScannedFields(false);
    }
    function populateScannedFields(flag) {
    	var sMethod = 'populateScannedFields()';
        console.log(logPrefix + sMethod);
        
    	var currModel = models.personalDataModel;
        console.log(logPrefix + sMethod + " Scanned Response from Model : " + JSON.stringify(currModel.get('response')));
		
        var response = currModel.get('response');
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
                expiryDate: scannedExpiryDate
            },
            rez, scanned, prop;
            populateExpiryDateMonthList();
        	if (parser.checkSupportedID(response.data, ['PDF417']) > 0) {
        	try {
                rez = parser.parse(response.data);   
                var idType = JSON.stringify(rez.idType);
                var idNumber = JSON.stringify(rez.idNumber);
                var idProvince = JSON.stringify(rez.idProvince);
                var idExpiryDate = JSON.stringify(rez.expiryDate);
                
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
                if(idExpiryDate != "null"){
                	populateScannedExpiryDateFields(idExpiryDate);
                }
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
            const idProvince = JSON.stringify(rez.idProvince);
            var idExpiryDate = JSON.stringify(rez.expiryDate);
            
            if(rez.idProvince == 'AB'){
    			try{
    				 const rezNewABDL = parser.parseNewABDL(response.data);
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
    	             if(idExpiryDate != "null"){
    	            	 populateScannedExpiryDateFields(idExpiryDate);
    	               }
    	           
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
                    var idExpiryDate = JSON.stringify(rezNew.expiryDate);
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
                    if(idExpiryDate != "null"){
                    	populateScannedExpiryDateFields(idExpiryDate);
   	                }
                        
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
	        	   const rezNewDL = parser.parseNewDL(response.data);
	               const idTypeNewDL = JSON.stringify(rezNewDL.idType);
	               const idNumberNewDL = JSON.stringify(rezNewDL.idNumber);
	               var idExpiryDate = JSON.stringify(rezNewDL.expiryDate);
	               
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
	               if(idExpiryDate != "null"){
	            	   populateScannedExpiryDateFields(idExpiryDate);
	   	           }
	               disableScannedDriversLicenceFields();
	           }catch (e) {
	           	if(isDebugMode){
	                messageDialog.error(e,translator.translateKey('errorDialog_defaultTitle'),$.noop);
	            }
	        	console.log(logPrefix + sMethod + " Exception: " + e);
	        }
		}
        if($(refs.addressline2).val() != ''){
        	$('#address_line2').show();
        	$('#addressline2_br').removeClass('hideElement');
        	$('#address_line2').text($(refs.addressline2).val());
        }else{
        	$('#addressline2_br').addClass('hideElement');
        	$('#address_line2').hide();
        }
        if(addressNotFoundFlag) {
        	displayAddress(true);
        } else {
        	if(flag) {
                displayAddress(true);
            } else {
                displayAddress(false);
            }
        }
        validateExpirtDateCOVID19();
    }
    // ---------------------------------------------------------------------------------------
    function addressLookupFail( argResponse ){
        new WICI.LoadingIndicatorController().hide();
        
        setScannedAddressInModel();
        populateScannedFields(true);
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
            var streetAddressFlag = false;
            var streetAddressPrevFlag = false;
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
               
               //custom validation for previous address
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
                var covidRez = [];
                covidRez = validateExpirtDateCOVID19();
                
                //custom validation for Canada Post address
                var address_postalcode = $('#address_postalcode').text();
                if(!address_postalcode) {
                	streetAddressFlag = true;
             	    temprez.push({name: 'streetAddress', err: '', uiid: refs.streetAddress});
                }
                
                //custom validation for Canada Post previous address
                if(enteredYears < 2) {                    	                    		                   
                	if (models.addressModel.get('flipPrevWasInCanada') === 'Y') {	                    	
                		var address_previousPostalcode = $('#address_previousPostalcode').text();
                        if(!address_previousPostalcode) {
                        	streetAddressPrevFlag = true;
                     	    temprez.push({name: 'streetPreviousAddress', err: '', uiid: refs.streetPreviousAddress});
                        }
                        if( verifyCurrentandPrevAddress()){
	
	                     
	                       temprez.push({name: 'addressline1_prev', err: '', uiid: refs.addressline1_prev});
                           temprez.push({name: 'city_prev', err: '', uiid: refs.city_prev});
                           temprez.push({name: 'postalcode_prev', err: '', uiid: refs.postalcode_prev});
                           temprez.push({name: 'province_prev', err: '', uiid: refs.province_prev});

                            if( !isEmpty($(refs.suiteunit).val()) && !isEmpty($(refs.suiteunit_prev).val()) ){
				               temprez.push({name: 'suiteunit_prev', err: '', uiid: refs.suiteunit_prev});
		                     }
	
	
                         }




                    } 
                }
                
                var validator = new WICI.Validator();
                if(!validator.addressLinePOBox($(refs.addressline1).val().toUpperCase())) {
                	if($(refs.addressline1).val()!=''){
                        $('#personalData_enterAddressManuallySection').show();
                        $(refs.editAddressButton).addClass('hideElement');
			        	$(refs.acceptButton).removeClass('hideElement');
			        	$('#personalInfo_canadaPost_SearchedAddress').show();
			        	$('#personalInfo_canadaPost_addressSearch_instructions').hide();
			        	$('#personalData_canadaPostAddressDescription1').show();
			        	$('#contactInfomation_infomation_button').show();
                     }
                }  else {
                    $('#contactInfomation_infomation_button').hide();
                }
                
                if(!validator.suiteUnit($(refs.suiteunit).val().toUpperCase())) {
                	if($(refs.suiteunit).val()!=''){
                		showAddressFieldsError();
                     }
                } 
                
                if(!validator.addressLine($(refs.addressline2).val().toUpperCase())) {
                	if($(refs.addressline2).val()!=''){
                		showAddressFieldsError();
                     }
                }
                if(!validator.city($(refs.city).val().toUpperCase())) {
                	if($(refs.city).val()!=''){
                		showAddressFieldsError();
                     }
                }
                
                if(!validator.postalCode($(refs.postalcode).val().toUpperCase())) {
                	if($(refs.postalcode).val()!=''){
                		showAddressFieldsError();
                     }
                }
                
                if(!validator.addressLinePOBox($(refs.addressline1_prev).val().toUpperCase())) {
                	if($(refs.addressline1_prev).val()!=''){
	                     $('#personalInfo_pre_year_informationButton').show();
                         $(refs.editAddressPreviousButton).addClass('hideElement');
			        	 $(refs.acceptPreviousButton).removeClass('hideElement');
			        	 $('#personalData_enterAddressManuallyPreviousSection').show();
			        	 $('#personalInfo_canadaPost_SearchedPreviousAddress').show();
			        	 $('#personalInfo_canadaPost_PreviousAddressSearch_instructions').hide();
			        	 $('#personalData_canadaPostPreviousAddressDescription1').show();
			             $('#personalInfo_pre_year_informationButton').show();
                      }
                } else {
                    $('#personalInfo_pre_year_informationButton').hide();
                }
                
                if(!validator.suiteUnit($(refs.suiteunit_prev).val().toUpperCase())) {
                	if($(refs.suiteunit_prev).val()!=''){
                		showPrevAddressFieldsError();
                     }
                } 
                
                if(!validator.addressLine($(refs.addressline2_prev).val().toUpperCase())) {
                	if($(refs.addressline2_prev).val()!=''){
                		showPrevAddressFieldsError();
                     }
                }
                if(!validator.city($(refs.city_prev).val().toUpperCase())) {
                	if($(refs.city_prev).val()!=''){
                		showPrevAddressFieldsError();
                     }
                }
                
                if(!validator.postalCode($(refs.postalcode_prev).val().toUpperCase())) {
                	if($(refs.postalcode_prev).val()!=''){
                		showPrevAddressFieldsError();
                     }
                }
                if(covidRez !== null && covidRez.length>0){
                	rez = rez.concat(covidRez);
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
                validateExpirtDateCOVID19();
                // US4781
                app.validationDecorator.applyErrAttribute(rez);
                // US4112
                if(!valid){
                	app.validationDecorator.focusControl(refs.idnumbers);                	
                }
                if(streetAddressFlag) {
                	app.validationDecorator.focusControl(refs.streetAddress);
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
                              
            var ageValidation = models.personalDataModel.validateAge(models.personalDataModel, models.addressModel.get('province'));
            var rez = [];
            if (ageValidation != null) {
                rez.push(ageValidation);
                if(ageValidation.err != "personalData_DOB_120YearsError") {
                	messageDialog.error(
                            translator.translateKey(ageValidation.err), null,
                            selectDOBFileld);
                }
                app.validationDecorator.applyErrAttribute(rez, true);
                app.validationDecorator.focusControl(refs.birthDate);
                return;
            }
            if(streetAddressPrevFlag) {
            	app.validationDecorator.focusControl(refs.streetPreviousAddress);
            }
            
            // current and prev address not Identical validation.
            
            
                     
            
            
            syncUserData();
        }
        
        /*if(!app.getDemoMode()) 
        	if($(refs.city).val() != '' && $(refs.province).val() != '' && $(refs.city).val().length >= 18) 
        		invokeAbbreviateCityname($(refs.city).val().toUpperCase(), $(refs.province).val(), abbreviateCitynameSuccess, abbreviateCitynameFail);
        
        if(!app.getDemoMode()) 
        	if($(refs.city_prev).val() != '' && $(refs.province_prev).val() != '' && $(refs.city_prev).val().length >= 18) 
        		invokeAbbreviateCitynamePrev($(refs.city_prev).val().toUpperCase(), $(refs.province_prev).val(), abbreviateCitynamePrevSuccess, abbreviateCitynamePrevFail);*/
        
        var currPersModel = models.personalDataModel;
        
        console.log(logPrefix + sMethod + " IDScan : " + currPersModel.get('IDScan') + " ManualFill : " + currPersModel.get('manualFill'));
        if(currPersModel.get('IDScan') && currPersModel.get('manualFill')) {
        	currPersModel.set('PIISource', '4');
        } else if(currPersModel.get('manualFill')){
        	currPersModel.set('PIISource', '9');
        } else if(currPersModel.get('IDScan')) {
        	currPersModel.set('PIISource', '3');
        }
        console.log(logPrefix + sMethod + " PIISource : " + currPersModel.get('PIISource') );
        
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
        		firstName + " " + lastName + " " + birthDate + " " + province + " " + postCode + " " + city + " " + addressline1 + " " + suiteunit + " " + addressline2 + " " + sin);
        
        if(emailAddress != '') {
        	invokeTMXEmailage( loginId,storePostCode,mfgSerial,phoneNumber,phone_Type,emailAddress,
            		firstName,lastName,birthDate,province,postCode,city,addressline1,suiteunit,addressline2,sin, tMXEmailageSuccess, tMXEmailageFailure );
        } else {
        	var currModel = models.personalDataModel;
            currModel.set('DSAScore', '');
            currModel.set('treatmentCode', '');
            currModel.set('tmxProfileID', '');
        	flow.next();
        }
    }
    
    function showAddressFieldsError() {
    	$('#personalData_enterAddressManuallySection').show();
        $(refs.editAddressButton).addClass('hideElement');
    	$(refs.acceptButton).removeClass('hideElement');
    	$('#personalInfo_canadaPost_SearchedAddress').show();
    	$('#personalInfo_canadaPost_addressSearch_instructions').hide();
    	$('#personalData_canadaPostAddressDescription1').show();
        $('#personalInfo_pre_year_informationButton').hide();
    }
    
    function showPrevAddressFieldsError() {
        $(refs.editAddressPreviousButton).addClass('hideElement');
   	 	$(refs.acceptPreviousButton).removeClass('hideElement');
   	 	$('#personalData_enterAddressManuallyPreviousSection').show();
   	 	$('#personalInfo_canadaPost_SearchedPreviousAddress').show();
   	 	$('#personalInfo_canadaPost_PreviousAddressSearch_instructions').hide();
   	 	$('#personalData_canadaPostPreviousAddressDescription1').show();
    }
    
    function invokeTMXEmailage(loginId,storePostCode,mfgSerial,phoneNumber,phone_Type,emailAddress,
    		firstName,lastName,birthDate,province,postCode,city,addressline1,suiteunit,addressline2,sin, argSuccessCB, argFailureCB) {
    	var sMethod = "invokeTMXEmailage() :: ";
    	console.log(logPrefix + sMethod);
    	
    	new WICI.LoadingIndicatorController().show();
    	connectivityController.TMXEmailage(loginId,storePostCode,mfgSerial,phoneNumber,phone_Type,emailAddress,
        		firstName,lastName,birthDate,province,postCode,city,addressline1,suiteunit,addressline2,sin,argSuccessCB,argFailureCB);
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
    //---------------------------------------------------------------------------------------
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
	    var sMethod = "onScanSuccessCallback() : ";
	    
    	var currModel = models.personalDataModel;
		currModel.set('response', response);
		console.log(logPrefix + sMethod + " response : " + JSON.stringify(currModel.get('response')));
		
		var response = currModel.get('response');
		clearFieldsData();
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
            }, rez;
    	
        if (parser.checkSupportedID(response.data, ['PDF417']) > 0) {
        	try {
        		rez = parser.parse(response.data);
	            if (!containsAny(rez, mapping)) {
                    throw ('ERROR! Got the empty data.');
                } else {
                	//VZE-210
                	
                	if(isAnyScannedFieldEmpty(rez)){
                		// show VZE-210 Dialog
                		enableScannedDriversLicenceFields();
                		clearFieldsData();
                		messageDialog.scanFailedErrorMessage(translator.translateKey("scanFaildErrorMessageTitle"),translator.translateKey("scanFaildErrorMessageOne"),translator.translateKey("scanFaildErrorMessageTwo"), okCallback,translator.translateKey('scanFaildErrorMessageOkButton'), translator);
                	}else{
						currModel.set('IDScan', true);
                		invokeAddressLookup(rez.addressLine1, '', rez.addressCity, 
                				rez.addressProvince, rez.addressPostal, addressLookupSuccess, addressLookupFail);
                	}
                	
                }
        	} catch (e) {
        		enableScannedDriversLicenceFields();
            	clearFieldsData();
            	messageDialog.scanFailedErrorMessage(translator.translateKey("scanFaildErrorMessageTitle"),translator.translateKey("scanFaildErrorMessageOne"),translator.translateKey("scanFaildErrorMessageTwo"), okCallback,translator.translateKey('scanFaildErrorMessageOkButton'), translator);
            	console.log(logPrefix + sMethod + " Exception: " + e);
            }
        } else if(parser.checkSupportedID(response.data, ['ANSI']) > 0) {
        	rez = parser.parse(response.data);   
        	const idProvince = JSON.stringify(rez.idProvince);
            if(rez.idProvince == 'AB'){
    			try{
    	             const rezNewABDL = parser.parseNewABDL(response.data);
    	             if (!containsAny(rezNewABDL, mapping)) {
    	            	 throw ('ERROR! Got the empty data.');
    	             } else {
    	            	//VZE-210
    	                if(isAnyScannedFieldEmpty(rezNewABDL)){
    	                		// show VZE-210 Dialog
    	                	    enableScannedDriversLicenceFields();
                    		    clearFieldsData();
    	                		messageDialog.scanFailedErrorMessage(translator.translateKey("scanFaildErrorMessageTitle"),translator.translateKey("scanFaildErrorMessageOne"),translator.translateKey("scanFaildErrorMessageTwo"), okCallback,translator.translateKey('scanFaildErrorMessageOkButton'), translator);
    	                 }else{
							 currModel.set('IDScan', true);
    	                	 invokeAddressLookup(rezNewABDL.addressLine1, '', rezNewABDL.addressCity, 
        	            			 rezNewABDL.addressProvince, rezNewABDL.addressPostal, addressLookupSuccess, addressLookupFail);
    	                 }
    	            	 
    	             }
    			} catch (e) {
    				enableScannedDriversLicenceFields();
                	clearFieldsData();
                	messageDialog.scanFailedErrorMessage(translator.translateKey("scanFaildErrorMessageTitle"),translator.translateKey("scanFaildErrorMessageOne"),translator.translateKey("scanFaildErrorMessageTwo"), okCallback,translator.translateKey('scanFaildErrorMessageOkButton'), translator);
                	console.log(logPrefix + sMethod + " Exception: " + e);
                }
    		} else {
    			try {
    				 const rezNew = parser.parse(response.data); 
	   	             if (!containsAny(rezNew, mapping)) {
	   	            	 throw ('ERROR! Got the empty data.');
	   	             } else {
	   	                //VZE-210
	    	             if(isAnyScannedFieldEmpty(rezNew)){
	    	               // show VZE-210 Dialog
	    	               enableScannedDriversLicenceFields();
	                 	   clearFieldsData();
	    	               messageDialog.scanFailedErrorMessage(translator.translateKey("scanFaildErrorMessageTitle"),translator.translateKey("scanFaildErrorMessageOne"),translator.translateKey("scanFaildErrorMessageTwo"), okCallback,translator.translateKey('scanFaildErrorMessageOkButton'), translator);
	    	             }else{
							currModel.set('IDScan', true);
	    	                invokeAddressLookup(rezNew.addressLine1, '', rezNew.addressCity, 
	 	   	            			rezNew.addressProvince, rezNew.addressPostal, addressLookupSuccess, addressLookupFail);
	    	             }
	   	            	
	   	             }
	   	 	         
                } catch (e) {
                	enableScannedDriversLicenceFields();
                	clearFieldsData();
                	messageDialog.scanFailedErrorMessage(translator.translateKey("scanFaildErrorMessageTitle"),translator.translateKey("scanFaildErrorMessageOne"),translator.translateKey("scanFaildErrorMessageTwo"), okCallback,translator.translateKey('scanFaildErrorMessageOkButton'), translator);
                	console.log(logPrefix + sMethod + " Exception: " + e);
                }
    		}
		} else { 
			try{
				 const rezNewDL = parser.parseNewDL(response.data);
  	             if (!containsAny(rezNewDL, mapping)) {
 	            	 throw ('ERROR! Got the empty data.');
 	             } else {
 	            	//VZE-210
    	             if(isAnyScannedFieldEmpty(rezNewDL)){
    	               // show VZE-210 Dialog
    	               enableScannedDriversLicenceFields();
                 	   clearFieldsData();
    	               messageDialog.scanFailedErrorMessage(translator.translateKey("scanFaildErrorMessageTitle"),translator.translateKey("scanFaildErrorMessageOne"),translator.translateKey("scanFaildErrorMessageTwo"), okCallback,translator.translateKey('scanFaildErrorMessageOkButton'), translator);
    	             }else{
						currModel.set('IDScan', true);
    	                invokeAddressLookup(rezNewDL.addressLine1, '', rezNewDL.addressCity, 
    	 	            			rezNewDL.addressProvince, rezNewDL.addressPostal, addressLookupSuccess, addressLookupFail); 
    	             }
 	            	
 	             }
	           } catch (e) {
	        	    enableScannedDriversLicenceFields();
	            	clearFieldsData();
	            	messageDialog.scanFailedErrorMessage(translator.translateKey("scanFaildErrorMessageTitle"),translator.translateKey("scanFaildErrorMessageOne"),translator.translateKey("scanFaildErrorMessageTwo"), okCallback,translator.translateKey('scanFaildErrorMessageOkButton'), translator);
	            	console.log(logPrefix + sMethod + " Exception: " + e);
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
    // VZE-210
    function okCallback() {
        var sMethod = logPrefix + '[okCallback]: ';
        console.log(sMethod);
        enableScannedDriversLicenceFields();
		clearFieldsData();
    }  
    // VZE-210
    function clearFieldsData(){
    	var sMethod = logPrefix + '[clearDataFromFields]: ';
        console.log(sMethod);
    	var currModel = models.personalDataModel;
        currModel.set('placeofissue', 'null');
        currModel.set('idtype', 'null');
        currModel.set('idnumbers', '');
        currModel.set('firstName', '');
        currModel.set('initial', '');
        currModel.set('lastName', '');
        currModel.set('birthDate', 'null');
        currModel.set('idExpiryDate', '');
        currModel.set('expiryDateMonth', 'null');
        currModel.set('expiryDateYear', 'null');
        currModel.set('expiryDateDay', 'null');
        $(refs.placeofissue).val('');
     	$(refs.idtype).val('');
     	$(refs.idnumbers).val('');
     	$(refs.firstName).val('');
     	$(refs.initial).val('');
     	$(refs.lastName).val('');
     	$(refs.birthDate).val('');
     	$(refs.expiryDateYear).val('');
     	$(refs.expiryDateMonth).val('');
     	$(refs.expiryDateDay).val('');
    }
    // ---------------------------------------------------------------------------------------
    // VZE-210
    function enableScannedDriversLicenceFields(){
    	$(refs.placeofissue).prop('disabled', false);
     	$(refs.idtype).prop('disabled', false);
     	$(refs.idnumbers).prop('disabled', false);
     	$(refs.firstName).prop('disabled', false);
     	$(refs.initial).prop('disabled', false);
     	$(refs.lastName).prop('disabled', false);
     	$(refs.birthDate).prop('disabled', false);
     	$(refs.expiryDateYear).prop('disabled', false);
     	$(refs.expiryDateMonth).prop('disabled', false);
     	$(refs.expiryDateDay).prop('disabled', false);
     	$(refs.placeofissue).removeAttr('disabled');
     	$(refs.idtype).removeAttr('disabled');
     	$(refs.idnumbers).removeAttr('disabled');
     	$(refs.firstName).removeAttr('disabled');
     	$(refs.initial).removeAttr('disabled');
     	$(refs.lastName).removeAttr('disabled');
     	$(refs.birthDate).removeAttr('disabled');
     	$(refs.expiryDateYear).removeAttr('disabled');
     	$(refs.expiryDateMonth).removeAttr('disabled');
     	$(refs.expiryDateDay).removeAttr('disabled');
    }
    // ---------------------------------------------------------------------------------------
    // US4535
    function disableScannedDriversLicenceFields(){
    	$(refs.placeofissue).prop('disabled', true);
    	$(refs.idtype).prop('disabled', true);
    	$(refs.idnumbers).prop('disabled', true);
    	//$(refs.idExpiryDate).prop('disabled', true);
    	$(refs.firstName).prop('disabled', true);
    	$(refs.initial).prop('disabled', true);
    	$(refs.lastName).prop('disabled', true);
    	$(refs.birthDate).prop('disabled', true);
    	$(refs.expiryDateYear).prop('disabled', true);
    	$(refs.expiryDateMonth).prop('disabled', true);	
    	$(refs.expiryDateDay).prop('disabled', true);
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
   //------------------------------------------------------------------------------------------------------------------------------
    function isInputDateSameAsToday(){
	    var sMethod = "isInputDateSameAsToday()";
        var expiryDateVal;
	    var aestTime;
    	var aestDate;
    	var stringDate;
    	var inputDateYear;
    	var inputDateMonth;
        var inputDateDay;
        var todaysDate = new Date();
	    console.log(logPrefix + sMethod + "todaysDate :  " + todaysDate);
	    var todayDateFormat = moment(todaysDate).format('MM-DD-YYYY').split("-");
	    console.log(logPrefix + sMethod + "todayDateFormat :  " + todayDateFormat);
	    var todayMonth = parseInt((todayDateFormat[0]));
	    var todayDay =  parseInt(todayDateFormat[1]);
	    var todayYear = parseInt(todayDateFormat[2]);
	    console.log(logPrefix + sMethod + "todayMonth :  " + todayMonth + " todayDay : "+ todayDay + "Year : "+todayYear);
        if($(refs.expiryDateYear).val() !== "null" && $(refs.expiryDateMonth).val() !== "null" && $(refs.expiryDateDay).val() !== "null"){
	           expiryDateVal = $(refs.expiryDateYear).val()+"-"+$(refs.expiryDateMonth).val()+"-"+$(refs.expiryDateDay).val();
               console.log(logPrefix + sMethod + "expiryDateVal :: " + expiryDateVal);
	           aestTime = new Date(expiryDateVal).toLocaleString("en-US", {timeZone: "America/Toronto"});
               console.log(logPrefix + sMethod + "aestTime :: " + aestTime);
    	       aestDate = new Date(aestTime).toISOString();
    	       stringDate  = aestDate.substr(0, 10).split("-");
    	       inputDateYear = parseInt(stringDate[0]);
    	       inputDateMonth = parseInt(stringDate[1]);
               inputDateDay = parseInt(stringDate[2]);
               console.log(logPrefix + sMethod + "inputDateYear :  " + inputDateYear + " inputDateMonth : "+ inputDateMonth + "inputDateDay : "+inputDateDay);
        }
        if((todayYear == inputDateYear) && ( todayMonth == inputDateMonth) && (todayDay == inputDateDay)){
	           console.log("same date as todays date'");
	           return true;
        }else{
	           return false;
        }
    }
    //--VZE-161----------------------------------------------------------------------------------------------------------------------------
    function populateScannedExpiryDateFields(scannedExpiryDate){
    	var sMethod = "populateScannedExpiryDateFields(scannedExpiryDate)";
		console.log(logPrefix + sMethod);
		var scannedYear;
        var scannedMonth;
        var scannedDay;
        var currModel = models.personalDataModel;
        
    	if(scannedExpiryDate != "null"){
          	 var scannedDate  = scannedExpiryDate.split("-");
          	 console.log("scannedDate :: "+scannedDate);
          	 scannedYear = scannedDate[0].substr(1,4);
         	 scannedMonth = scannedDate[1];
         	 scannedDay = scannedDate[2].substr(0,2);
         	 currModel.set('expiryDateYear', scannedYear);
         	 currModel.set('expiryDateMonth', scannedMonth);
             currModel.set('expiryDateDay', scannedDay);
             populateExpiryDateMonthList();
             var expiryDateVal = scannedYear+"-"+scannedMonth+"-"+scannedDay;
             currModel.set('idExpiryDate', expiryDateVal);
             console.log("scannedYear :: "+scannedYear);
             console.log("scannedMonth :: "+scannedMonth);
             console.log("scannedDay :: "+scannedDay);
             $(refs.expiryDate_Area).show();
          	 $(refs.expiryDateYear + ' [value="' + scannedYear + '"]').attr(
                   'selected', 'selected'
               );
          	 $(refs.expiryDateMonth + ' [value="' + scannedMonth + '"]').attr(
                   'selected', 'selected'
               );
          	populateExpiryDateMonthList();
          	 $(refs.expiryDateDay + ' [value="' + scannedDay + '"]').attr(
                   'selected', 'selected'
             );
          }
    }
   //------------------------------------------------------------------------------------------------------------------------------
    // VZE-52
    function validateExpirtDateCOVID19() {
    	var sMethod = "validateExpirtDateCOVID19()";
		console.log(logPrefix + sMethod);
        
        var rez =[];
        var aestTime;
    	var aestDate;
    	var stringDate;
    	var inputDateYear;
    	var inputDateMonth;
    	var inputDateDay;
    	var covid19Year =  parseInt(translator.translateKey("pesonalData_covid19LockDownYear"));
    	var covid19Month = parseInt(translator.translateKey("pesonalData_covid19LockDownMonth"));
    	var covid19Day = parseInt(translator.translateKey("pesonalData_covid19LockDownDay"));
        console.log(logPrefix + sMethod + "covid19Year :  " + covid19Year + " covid19Month : "+ covid19Month + "covid19Day : "+covid19Day); 
        console.log(logPrefix + sMethod + "Entered Year :  " + $(refs.expiryDateYear).val() + " Entered Month : "+ $(refs.expiryDateMonth).val() + "Entered Day : "+$(refs.expiryDateDay).val());
        var todaysDate = new Date();
	    console.log(logPrefix + sMethod + "todaysDate :  " + todaysDate);
	    var todayDateFormat = moment(todaysDate).format('MM-DD-YYYY').split("-");
	    console.log(logPrefix + sMethod + "todayDateFormat :  " + todayDateFormat);
	    var todayMonth = parseInt((todayDateFormat[0]));
	    var todayDay =  parseInt(todayDateFormat[1]);
	    var todayYear = parseInt(todayDateFormat[2]);
	    console.log(logPrefix + sMethod + "todayMonth :  " + todayMonth + " todayDay : "+ todayDay + "Year : "+todayYear);
	    todaysDate.setDate(todaysDate.getDate() - 1);
	    var yesterdayDate = moment(todaysDate).format('MM-DD-YYYY').split("-");
	    var yesterdayMonth = parseInt((yesterdayDate[0]));
	    var yesterdayDay =  parseInt(yesterdayDate[1]);
	    var yesterdayYear = parseInt(yesterdayDate[2]);
	    console.log(logPrefix + sMethod + "yesterdayYear :  " + yesterdayYear + " yesterdayMonth : "+ yesterdayMonth + "yesterdayDay : "+yesterdayDay);
         
        if($(refs.expiryDateYear).val() === "null"  && $(refs.expiryDateMonth).val() === "null"  && $(refs.expiryDateDay).val() ==="null" ){
        	rez.push({name: 'expiryDateYear', err: 'personalData1_validation_expiryDate', uiid: refs.expiryDateYear});
        	rez.push({name: 'expiryDateMonth', err: 'personalData1_validation_expiryDate', uiid: refs.expiryDateMonth});
        	rez.push({name: 'expiryDateDay', err: 'personalData1_validation_expiryDate', uiid: refs.expiryDateDay});
        }else{
	        var expiryDateVal = $(refs.expiryDateYear).val()+"-"+$(refs.expiryDateMonth).val()+"-"+$(refs.expiryDateDay).val();
            console.log(logPrefix + sMethod + "expiryDateVal :: " + expiryDateVal);
	        aestTime = new Date(expiryDateVal).toLocaleString("en-US", {timeZone: "America/Toronto"});
            console.log(logPrefix + sMethod + "aestTime :: " + aestTime);
    	    aestDate = new Date(aestTime).toISOString();
    	    stringDate  = aestDate.substr(0, 10).split("-");
    	    inputDateYear = parseInt(stringDate[0]);
    	    inputDateMonth = parseInt(stringDate[1]);
            inputDateDay = parseInt(stringDate[2]);
            console.log(logPrefix + sMethod + "inputDateYear :  " + inputDateYear + " inputDateMonth : "+ inputDateMonth + "inputDateDay : "+inputDateDay);
            if(((covid19Year == inputDateYear) && (covid19Month < inputDateMonth))){
		        console.log("condition 1");
	    		// true 
		        rez = null;
	    	}else if((covid19Year > inputDateYear)){
		        console.log("condition 2");
		        rez.push({name: 'expiryDateYear', err: 'personalData1_validation_expiryDate', uiid: refs.expiryDateYear});
		        rez.push({name: 'expiryDateMonth', err: 'personalData1_validation_expiryDate', uiid: refs.expiryDateMonth});
		        rez.push({name: 'expiryDateDay', err: 'personalData1_validation_expiryDate', uiid: refs.expiryDateDay});
	    	}else if((covid19Year == inputDateYear) &&  (inputDateMonth < covid19Month)){
		        console.log("condition 3");
		        rez.push({name: 'expiryDateYear', err: 'personalData1_validation_expiryDate', uiid: refs.expiryDateYear});
		        rez.push({name: 'expiryDateMonth', err: 'personalData1_validation_expiryDate', uiid: refs.expiryDateMonth});
		        rez.push({name: 'expiryDateDay', err: 'personalData1_validation_expiryDate', uiid: refs.expiryDateDay});
	    	}else if((covid19Year == inputDateYear) && ((inputDateMonth == covid19Month)) && (covid19Day == inputDateDay ) ){
		       console.log("condition 4");
		        rez = null;
	    	}else if(((covid19Year == inputDateYear) && ((inputDateMonth == covid19Month)) && (covid19Day == inputDateDay )) ||((inputDateYear <= yesterdayYear) && (inputDateMonth == yesterdayMonth) &&  (inputDateDay < yesterdayDay )) ){
	    		console.log("condition 5");
	    		rez = null;
	    	}else if((inputDateYear === todayYear) &&(inputDateMonth === todayMonth) &&(inputDateDay === todayDay ) ){
	    		if(IDScan){
	    			// VZE-26 : Change rule from ID Exp must be = > today to ID Exp must be = > 03-01-2020
	    			rez = null;
	    		}else{
	    			 // Manually entered an expiry date 
	    			if(isContinueButton){
	    				// continue button - skip validation
		    			rez = null;
		    		}else{
		    			// cancel button - do the validation
		    			rez.push({name: 'expiryDateYear', err: 'personalData1_validation_expiryDate', uiid: refs.expiryDateYear});
			    		rez.push({name: 'expiryDateMonth', err: 'personalData1_validation_expiryDate', uiid: refs.expiryDateMonth});
			    		rez.push({name: 'expiryDateDay', err: 'personalData1_validation_expiryDate', uiid: refs.expiryDateDay});
		    		}
	    		}
	        }else{
	        	rez =null;
	    	}
            return rez;
        } 
    }
    function isAnyScannedFieldEmpty(rez){
    	var sMethod = 'isAnyScannedFieldEmpty(rez) ';
        console.log(logPrefix + sMethod);
        const idProvince = JSON.stringify(rez.idProvince);
        const idNumber = JSON.stringify(rez.idNumber);
        const firstName = JSON.stringify(rez.firstName);
        const lastName = JSON.stringify(rez.lastName);
        const dateOfBirth = JSON.stringify(rez.dateOfBirth);
        const expiryDate = JSON.stringify(rez.expiryDate);
        if((rez.idProvince == '' || !rez.idProvince) ||
        	 (rez.idNumber == '' || !rez.idNumber) ||
        	   (rez.firstName == '' || !rez.firstName) ||
        		(rez.lastName == '' || !rez.lastName) ||
        		 (rez.dateOfBirth == '' || !rez.dateOfBirth) ||
        		   (rez.expiryDate == '' || !rez.expiryDate)){
        	return true;
        }else{
        	return false;
        }
    }
    //------------------------------------------------------------------------------------------------------------------------------
	function removeAccents(str) {
		var sMethod = 'removeAccents() ';
        console.log(logPrefix + sMethod);
        
	    const accents = translator.translateKey("accents"),
		  accents_out = translator.translateKey("accents_out"),
		  accents_map = new Map();
		for (const i in accents)
			accents_map.set(accents.charCodeAt(i), accents_out.charCodeAt(i))
			
		const nstr = new Array(str.length);
		let x, i;
		for (i = 0; i < nstr.length; i++)
			nstr[i] = accents_map.get(x = str.charCodeAt(i)) || x;
		return String.fromCharCode.apply(null, nstr);
	}
	
	
	
	
	 
	  function verifyCurrentandPrevAddress(){
		  var sMethod = 'verifyCurrentandPrevAddress() ';
		 if( !isEmpty($(refs.addressline1).val()) && !isEmpty($(refs.addressline1_prev).val()) && trim($(refs.addressline1).val()).toLowerCase() == trim($(refs.addressline1_prev).val()).toLowerCase()  ){
			 
		  if( !isEmpty($(refs.city).val()) && !isEmpty($(refs.city_prev).val()) && trim($(refs.city).val()).toLowerCase() == trim($(refs.city_prev).val()).toLowerCase()  ){
				
				
		   if( !isEmpty($(refs.postalcode).val()) && !isEmpty($(refs.postalcode_prev).val()) && trim($(refs.postalcode).val()).toLowerCase() == trim($(refs.postalcode_prev).val()).toLowerCase()  ){
				console.log('postalCode matches');
			
			if( !isEmpty($(refs.province).val()) && !isEmpty($(refs.province_prev).val()) && trim( $(refs.province).val()).toLowerCase() == trim($(refs.province_prev).val()).toLowerCase()  ){
				
				
				
		// suitnumber validation for current and previoues address	
		    if( !isEmpty($(refs.suiteunit).val()) && !isEmpty($(refs.suiteunit_prev).val()) ){
					
			if(  trim( $(refs.suiteunit).val()).toLowerCase() == trim($(refs.suiteunit_prev).val()).toLowerCase()  ) {
				 console.log('current adddress and previou unitnumbe same');
			     preAddressInputDisplay();
				return true;
				              
		        }
  					 else {
	 				return false;
                }
 
           }
         // end suitnumber validtion for current and previous address
				
        	preAddressInputDisplay();
				return true;
	
				
			 }

				}
			}

		}
		return false;
	};
	
	 function trim(value) {
		return value.replace(/^\s+|\s+$/g, "");
	}
	;

	function isEmpty(val) {
		return (val === undefined || val == null || val.length <= 0) ? true
				: false;
	}
	; 
	
	function preAddressInputDisplay(){
		
		$(refs.editAddressPreviousButton).addClass('hideElement');
        	$(refs.acceptPreviousButton).removeClass('hideElement');
        	$('#personalData_enterAddressManuallyPreviousSection').show();
        	$('#personalInfo_canadaPost_SearchedPreviousAddress').show();
        	$('#personalInfo_canadaPost_PreviousAddressSearch_instructions').hide();
        	$('#personalData_canadaPostPreviousAddressDescription1').show();
            $('#contactInfomation_infomation_button').hide();
            $('#personalInfo_pre_year_informationButton').hide();
		
	}
	
};
