ensureNamespaceExists();

BRB.PersonalInformationController = function(activationItems, argTranslator, argMessageDialog, argPopup) {
	
    var logPrefix = '[BRB.PersonalInformationController]::';
	var $screenContainer = $("#PersonalInformationScreen");

	var translator = null;
	var messageDialog = null;
	var connectivityController = null;	
	
	this.show = show;
	this.init = init;
	this.hide = hide;
	
	var flow = null;
	var savedFlow = null;
	var screenBelow = null;
	var blockName = null;
	var popupHideEventHandler = null;	
	var loyaltyMembershipNumberPrefix = 636574;
	var _validationResult = [];
	var isPrevAddressEnable = false;
	var emptyString ="";
	
	//---------------------------------------------------------------------------------------
	this.syncUserData = syncUserData;
	
    var refs = {    		
    		continueButtonContainer			:   '#personalInformation_continueButtonContainer',
    		cancelButtonContainer			:	'#personalInformation_cancelButtonContainer',
    		continueButton					:   '#personalInformation_ContinueButton',
    		cancelButton					:   '#personalInformation_CancelButton',
    		makeCorrectionSection			:	'#makeCorrectionSection',
    		
    		loyaltyMembershipNumber			:	'#personalInformation_MoneyAdvantage_TextField',
    		moneyAdvantageContainer 		: 	'#personalInformation_MoneyAdvantage_FieldContainer',
    		//loyaltyMembershipNumberPrefix	:	'#personalInformation_MoneyAdvantagePrefix_TextField',
    		
    		provincesDropDown				:	'#personalInformation_Province_TextField',
    		employmentType_DropDown			:	'#personalInformation_EmploymentType_TextField',
    		residentialStatus_DropDown		:	'#personalInformation_ResidentialStatus_TextField',
    		jobTitle_DropDown				:	'#personalInformation_JobTitle_TextField',
    		// US3622    		
    		jobDesc_OtherArea				:	'#personalInformation_JobDescription_OtherArea',
    		jobTitle_SelectField			:	'#personalInformation_JobDescription_SelectField',
    		jobDescription_temp				:	'#personalInformation_JobDescription_SelectField',
    		
    		prevProvincesDropDown			:	'#personalInformation_PrevProvince_TextField',
    		
    		title							:	'#personalInformation_Title_TextField',
    		firstName						:	'#personalInformation_FirstName_TextField',
    		initial							:	'#personalInformation_Initial_TextField',
    		lastName						:	'#personalInformation_LastName_TextField',
    		
    		dateOfBirth_Month				:	'#personalData_DateOfBirth_Month',
    		dateOfBirth_Day					:	'#personalData_DateOfBirth_Day',
    		dateOfBirth_Year				:	'#personalInformation_DateOfBirth_Year',
    		
    		email							:	'#personalInformation_Email_TextField',
    		receiveEmail					:	'#personalInformation_ReceiveEmail_TextField',
    		correspondence					:	'#personalInformation_PreferredLanguage_Area',
    		correspondenceEnglish			:	'#personalInformation_LanguageEnglish',
    		correspondenceFrench			:	'#personalInformation_LanguageFrench',
    		
    		homePhone1					:	'#personalInformation_HomePhone1_TextField',
    		homePhone2					:	'#personalInformation_HomePhone2_TextField',
    		homePhone3					:	'#personalInformation_HomePhone3_TextField',
    		
    		homePhone					:	"#personalInformation_HomePhone_Control",
    		
    		sin								:	'#personalInformation_SocialInsurance',
    		sin1							:	'#personalInformation_SocialInsurance1_TextField',
    		sin2							:	'#personalInformation_SocialInsurance2_TextField',
    		sin3							:	'#personalInformation_SocialInsurance3_TextField',
    		
    		streetnumber					:	'#personalInformation_StreetNumber_TextField',
    		addressline1					:	'#personalInformation_StreetName_TextField',
    		suiteunit						:	'#personalInformation_Suite_TextField',
    		city							:	'#personalInformation_City_TextField',
    		province						:	'#personalInformation_Province_TextField',
    		
    		postalcode1						:	"#personalInformation_PostalCode1_TextField",
    		postalcode2						:	"#personalInformation_PostalCode2_TextField",
    		postalcode						:	"#personalInformation_PostalCode_Control",
    		
    		house							:	"#personalInformation_ResidentialStatus_TextField",
    		housingPaymentContainer			:	"#personalInformation_MonthlyHousingPayment_Container",
    		housingpaymentDollar			:	"#personalInformation_MonthlyHousingPaymentDollar",
    		housingpayment					:	"#personalInformation_MonthlyHousingPayment_TextField",
    		sinceYears						:	"#personalInformation_AddressSince_Year",
    		sinceMonths						:	"#personalInformation_AddressSince_Month",
    		
    		streetnumber_prev				:	"#personalInformation_PrevStreetNumber_TextField",
    		addressline1_prev				:	"#personalInformation_PrevStreetName_TextField",
    		suiteunit_prev					:	"#personalInformation_PrevSuite_TextField",
    		city_prev						:	"#personalInformation_PrevCity_TextField",
    		province_prev					:	"#personalInformation_PrevProvince_TextField",
    		
    		postalcode1_prev				:	"#personalInformation_PrevPostalCode1_TextField",
    		postalcode2_prev				:	"#personalInformation_PrevPostalCode2_TextField",
    		postalcode_prev					:	"#personalInformation_PostalCodePrev_Control",
    		
    		birthDate						:	"#personalInformation_DateOfBirth_Control",
    		
    		employmentType					:	'#personalInformation_EmploymentType_TextField',
    		employerName					:   '#personalInformation_Employer_TextField',
    		employerCity					:   '#personalInformation_EmployerCity_TextField',
    		jobTitle						:   '#personalInformation_JobTitle_TextField',
    		jobDescription					:   '#personalInformation_JobDescription_TextField',
    		howLongYears					:   '#personalInformation_EmployerSince_Year',
    		howLongMonthes					:   '#personalInformation_EmployerSince_Month',
    		
    		grossIncomeContainer			:	"#personalInformation_GrossAnnualIncome_Container",
    		grossIncomeDollarEn				:	"#personalInformation_GrossAnnualIncome_Dollar_En",
    		grossIncome						:   "#personalInformation_GrossAnnualIncome_TextField",
    		grossIncomeDollarFr				:	"#personalInformation_GrossAnnualIncome_Dollar_Fr",
    		
    		// US3961
    		grossHouseholdIncomeContainer	:	"#personalInformation_GrossAnnualHouseholdIncome_Container",
    		grossHouseholdIncomeDollarEn	:	"#personalInformation_GrossAnnualHouseholdIncome_Dollar_En",
    		grossHouseholdIncome			:   "#personalInformation_GrossAnnualHouseholdIncome_TextField",
    		grossHouseholdIncomeDollarFr	:	"#personalInformation_GrossAnnualHouseholdIncome_Dollar_Fr",
    		
    		cardVISAMCAMEX					:   '#personalInformation_CreditCard_TextField',
    		cardBankLoan					:   '#personalInformation_BankLoan_TextField',
    		cardStoreCard					:   '#personalInformation_StoreCard_TextField',
    		cardChequingAcct				:   '#personalInformation_ChequingAccount_TextField',
    		cardGasCard						:   '#personalInformation_GasCard_TextField',
    		cardSavingsAcct					:   '#personalInformation_SavingsAccount_TextField',
    		
    		prevAddressArea					:	'#prevAddressArea',
    		employerInformationArea			:	'#employerInformationArea',
    			
    		aboutYourselfBlock 				:	'#personalData_AboutYourselfArea',
    		employmentInformationBlock 		:	'#personalData_EmploymentInformationArea',
    		financialInformationBlock 		:	'#personalData_FinancialInformationArea',
    		
    		requiredFieldIndicatorLabels    :	".requiredFieldIndicatorLabelBlock",
    		
    		useMyCTProfileButton			:	'#useMyCTProfileButton',
    		
    		blockNameAboutYourself			:	'aboutYourself',
    		blockNameEmploymentInformation	:	'employmentInformation',
    		blockFinancialInformation		:	'financialInformation',
    		breadcrumbTrailArea				:	'#PersonalInformationScreen #BreadcrumbTrailArea1',
    		steps2                          :   '#PersonalInformationScreen #steps2',
    		personalInformation_YearID		:	'#personalInformation_YearID',
    		personalInformation_AddressSince_YearID		:	'#personalInformation_AddressSince_YearID',
    		personalInformation_EmployerSince_YearID		:	'#personalInformation_EmployerSince_YearID',
            personalInformation_Horizontal_Line_1  : '#Page_2_HR_line_1',
            personalInformation_Horizontal_Line_2  : '#Page_2_HR_line_2',
            phone_Type : '#personalInformation_PhoneType_TextField',
            personalInfoGrossHouseholdIncomeTable		:	"#personalInfoGrossHouseholdIncomeTable"
            
    };
    
    var model = new BRB.BaseModel({
        name: 'personalInformation',
        refs: refs, 
        data:[
                {name: 'title',         			value: null, validation: null},
                {name: 'loyaltyMembershipNumber',   value: null, validation: {type: 'minSize', message: 'personalInformation_LoyaltyMembershipNumberError', canBeEmpty: true, minlength: 16, group: [1]}},
               // {name: 'loyaltyMembershipNumberPrefix',   value:null, validation: {type: 'minSize', message: 'personalInformation_LoyaltyMembershipNumberPreError', minlength: 6, group: [1]}},
                {notField:true, name: 'loyaltyMembershipNumberInternal',  value: null, validation: null },
                {name: 'firstName',     			value: null, validation: { type: 'personName',  message: 'personalInformation_FirstNameError', group:[1]} },
                {name: 'initial',       			value: null, validation: { type: 'format',      message: '', group:[1], matcher: /^[a-z\u00C0-\u017F]{1}/i, canBeEmpty: true } },
                {name: 'lastName',      			value: null, validation: { type: 'personName',  message: 'personalInformation_LastNameError',group:[1] } },
                {notField:true, name: 'dateOfBirth_Month',     	value: null, validation: { type: 'month',    message: 'personalInformation_DateofBirthMonthError',group:[1] } },
                {notField:true, name: 'dateOfBirth_Day',     	value: null, validation: { type: 'day',    message: 'personalInformation_DateofBirthDateError',group:[1] } },
                {notField:true, name: 'dateOfBirth_Year',     	value: null, validation: { type: 'year',    message: 'personalInformation_DateofBirthYearError',group:[1] } },
                {name: 'birthDate',     			value: null, validation: null },
                //US4219  if age is >76 hide CP and PA
                {name : 'age',value : null,validation : null},
                {name: 'email',         			value: null, validation: { type: 'email',       message: 'personalInformation_EmailAddressError',group:[1]} },
                {name: 'receiveEmail',				value: false, validation: null },
                {name: 'correspondence',			value: null, validation: { type: 'presence',    message: 'personalInformation_PreferredLanguageError',group:[1]} },
                {name: 'homePhone',     			value: null, validation: { type: 'phone',       message: 'personalInformation_PrimaryPhoneError', group:[1] } },
                {name: 'phone_Type',         		value: null, validation: { type: 'presence',   message: ' ', group:[1]} },
                {name: 'sin',         				value: null, validation: { type: 'sin', message: 'personalInformation_SINError', canBeEmpty: true, group: [1] } },
                {name: 'streetnumber',          	value: null, validation: {type: 'streetNumber',     message: 'personalInformation_StreetError', group:[1]} },
                {name: 'addressline1',          	value: null, validation: {type: 'addressLine',   	message: 'personalInformation_StreetNameError', group:[1]} },
                {name: 'suiteunit',             	value: null, validation: {type: 'suiteUnit',       message: 'personalInformation_AptError', canBeEmpty: true, group:[1]}  },
                {name: 'city',                  	value: null, validation: {type: 'city',       message: 'personalInformation_CityError', group:[1]}},
                {name: 'province',              	value: null, validation: {type: 'presence',   message: 'personalInformation_ProvinceError', group:[1]}},
                {name: 'postalcode',            	value: null, validation: {type: 'postal',     message: 'personalInformation_PostalCodeError', group:[1]}},
/*                {notField:true, name: 'postalcode1',            	value: null, validation: {type: 'postalCodeFirstPart',     message: '', group:[1]}},
                {notField:true, name: 'postalcode2',            	value: null, validation: {type: 'postalCodeSecondPart',     message: '', group:[1]}},*/
                {name: 'house',                 	value: null, validation: {type: 'presence',   message: 'personalInformation_ResidentialStatusError', group:[1]} },
                {name: 'housingpayment',        	value: null, validation: {type: 'format',     message: 'personalInformation_MonthlyHousingPaymentError', group:[1], matcher: /^[0-9\,]{1,4}$/}, containerUiid: 'housingPaymentContainer' },
                {name: 'sinceMonths',               value: null, validation: {type: 'month',   message: 'personalInformation_SinceMonthError', group:[1]} },
                {name: 'sinceYears',                value: null, validation: {type: 'year',   message: 'personalInformation_SinceYearError' , group:[1]} },
                {name: 'isPrevAddressExist',        value: false, validation: null },
                {name: 'streetnumber_prev',     	value: null, validation: {type: 'streetNumber',     message: 'personalInformation_StreetError', group:[2]} },
                {name: 'addressline1_prev',     	value: null, validation: {type: 'addressLine',   message: 'personalInformation_StreetNameError', group:[2]} },
                {name: 'suiteunit_prev',        	value: null, validation: {type: 'suiteUnit',       message: 'personalInformation_AptError', group:[2], canBeEmpty: true} },
                {name: 'city_prev',             	value: null, validation: {type: 'city',       message: 'personalInformation_CityError', group:[2]} },
                {name: 'province_prev',         	value: null, validation: {type: 'presence',   message: 'personalInformation_ProvinceError', group:[2]} },
                /*{notField:true, name: 'postalcode1_prev',     	  	value: null, validation: {type: 'postalCodeFirstPart',     message: '', group:[2]} },
                {notField:true, name: 'postalcode2_prev',     	  	value: null, validation: {type: 'postalCodeSecondPart',     message: '', group:[2]} },*/
                {name: 'postalcode_prev',     	  	value: null, validation: {type: 'postal',     message: 'personalInformation_PostalCodeError', group:[2]} },
                {name: 'employmentType',  			value: null, validation: { type: 'presence',    message: 'personalInformation_EmploymentTypeError', group:[3]}},
                {name: 'employerName',     			value: null, validation: {type: 'employerName', message: 'personalInformation_EmployerError', group:[4]}},
                {name: 'employerCity',         		value: null, validation: { type: 'city', message: 'personalInformation_EmployerCityError', group:[4]} },
                {name: 'jobTitle',  				value: null, validation: {type: 'presence', message: 'personalInformation_JobTitleError', group:[4]} },
                // US3622
                {name: 'jobDescription_temp',       value: null, validation: {type: 'presence', message: 'personalInformation_JobDescriptionError', group:[4]} },
                {name: 'jobDescription',       		value: null, validation: {type: 'jobDescription', message: 'personalInformation_JobDescriptionError', group:[4]}},
                                
                {name: 'howLongMonthes',    		value: null, validation: {type: 'month',   message: 'personalInformation_EmployerSinceMonthError', group:[4]} },
                {name: 'howLongYears',			    value: null, validation: {type: 'year',   message: 'personalInformation_EmployerSinceYearError', group:[4]} },
                {name: 'grossIncome',     			value: null, validation: { type: 'format', message: 'personalInformation_GrossAnnualIncomeError_OMX', matcher: /\d+/, group:[5] }, containerUiid: 'grossIncomeContainer' },
                // US3961
                {name: 'grossHouseholdIncome',   	value: null, validation: { type: 'format', message: 'personalInformation_GrossAnnualHouseholdIncomeError', matcher: /\d+/, group:[5], canBeEmpty: true }, containerUiid: 'grossHouseholdIncomeContainer' },
                
                {name: 'cardVISAMCAMEX',  			value: null, validation: null },
              	{name: 'cardBankLoan',  			value: null, validation: null },
              	{name: 'cardStoreCard',  			value: null, validation: null },
              	{name: 'cardChequingAcct',  		value: null, validation: null },
              	{name: 'cardGasCard',  				value: null, validation: null },
              	{name: 'cardSavingsAcct',  			value: null, validation: null },
              	{name: 'isAnyBankingProducts',      value: null, validation: null },
              	{name: 'cellPhone', value: null, validation: null }, 	
           ]
    });    
    
    var profileInfoModel = app.customerTransactionModel;
    
    //---------------------------------------------------------------------------------------
	function init( argFlow ) {
        var sMethod = 'init() ';
        BRB.Log(logPrefix + sMethod);
        
        if(!argPopup) {
        	BRB.AppConfig.TrackingScreenID = 3;
        } 
        
        cardTypeGlobal = activationItems.getModel('overview').get('cardType');
		BRB.Log(logPrefix + sMethod +"cardType :: "+ cardTypeGlobal);  
      
		
        flow = argFlow;  
        translator = argTranslator;         //(AA)Dependency Injection Principle: Allows for proper unit testing
        messageDialog = argMessageDialog;   //(AA)Dependency Injection Principle: Allows for proper unit testing
		
		connectivityController = new BRB.ConnectivityController(new BRB.ConnectionStatus(), messageDialog, translator, BRB.AppConfig.ConnectivityConfig);
		connectivityController.init();
        
        var currentModel = activationItems.getModel(model.name);
        if (!currentModel) {
            activationItems.addModel(model);
        } else {
            model = currentModel;
        }
        isPrevAddressEnable = model.get('isPrevAddressExist');
//        if (!profileInfoModel) {
//        	profileInfoModel = new BRB.CustomerTransactionModel();
//        	
//        	// ==================================== ^^^^^^^^^^ ===================================
//        	profileInfoModel.initialize(0, 0,
//        			'some_one@server.com',
//        			'Some',
//        			'One',
//        			'123, First Street',
//        			'Second Street',
//        			'The City',
//        			'NS',
//        			'A1A1A1',
//        			'1231231234');
//        	// ==================================== ^^^^^^^^^^ ===================================        	
//        }
//        
        
		createView();
		hideOMXContent();
		//dispalyEligibilityRequirement();
//		fillControlsWithData();		
//		bindEvents();
//		
//		bindRealTimeDurationControl();
//		bindEmploymentTypeControl();
		setUIElementsMasks('init');
		hideSubContainers();
		
		if (argFlow == null) {		
			// Work around IE8 page-proofs issue
			updatePageStylesheet(true);			
		}
		
		toggle10XImege();
		toggleHeader();		
	}
	//---------------------------------------------------------------------------------------
	function hideSubContainers(){
		$(refs.prevAddressArea).hide();
		$(refs.employerInformationArea).hide();
		$(refs.makeCorrectionSection).hide();		 
		hideNovaScotiaSection ();	
	}
	
	function createAndIsertToDomInputsWithPlaceHolder(){
		var personalInformation_YearID= createInputWithPlaceHolder('personalInformation_Year','personalInformation_DateOfBirth_Year',refs.personalInformation_YearID);
		inputPlaceholder(personalInformation_YearID);
		var personalInformationAddressSinceYear = createInputWithPlaceHolder('personalInformation_Year','personalInformation_AddressSince_Year',refs.personalInformation_AddressSince_YearID);
		inputPlaceholder(personalInformationAddressSinceYear);
		var personalInformationEmployerSinceYear = createInputWithPlaceHolder('personalInformation_Year','personalInformation_EmployerSince_Year',refs.personalInformation_EmployerSince_YearID);
		inputPlaceholder(personalInformationEmployerSinceYear);
	}
	
	function createInputWithPlaceHolder(data_translation_key,idValue,idElementToappendAffter){
		var placeholderValue = translator.translateKey(data_translation_key);
		/*2016-03-11 chrch: Changing type for responsive (US3964)*/
		var input = "<input class='fieldValuesTextField dateOfBirthYearField' id='" + idValue + "' placeholder='" + placeholderValue +"' type='tel' maxlength='4'/>";
		$(idElementToappendAffter).append(input);
		return document.getElementById(idValue);
	}
	
	//---------------------------------------------------------------------------------------
	function hideNovaScotiaSection (){
		//US3011 var overviewModel = activationItems.getModel('overview');
		//US3011 if(overviewModel.get('provinces') !== 'NS') {
		//US3011 $(refs.moneyAdvantageContainer).hide(); 	
		//US3011 }
	}
	
	//---------------------------------------------------------------------------------------	
	function focusFirstElement() {
		if (argPopup) {
        	if (blockName) {
    			if (blockName === refs.blockNameAboutYourself) {
    				$(refs.title).focus();
    				$(refs.title).select();
    			} else if(blockName === refs.blockFinancialInformation) {
    				$(refs.grossIncome).focus();
    			} else if(blockName === refs.blockNameEmploymentInformation) {
    				$(refs.employmentType_DropDown).focus();
    				$(refs.employmentType_DropDown).select();
    			}
    		}
        } else {
			$(refs.title).focus();
			$(refs.title).select();
		}
	}
	
	//---------------------------------------------------------------------------------------
	function restoreAboutYourselfUserData() {
		var sMethod = "restoreAboutYourselfUserData()";
        BRB.Log(logPrefix + sMethod);
        $(refs.title).val(app.ie9SelectHelper.getRightSelectValue(model.get('title')));
        $(refs.firstName).val(model.get('firstName'));
        
        $(refs.initial).val(model.get('initial'));
        $(refs.lastName).val(model.get('lastName'));
        $(refs.dateOfBirth_Month).val(app.ie9SelectHelper.getRightSelectValue(model.get('dateOfBirth_Month')));
        //$(refs.dateOfBirth_Month).val(model.get('dateOfBirth_Month'));
        $(refs.dateOfBirth_Day).val(model.get('dateOfBirth_Day'));
        $(refs.dateOfBirth_Year).val(model.get('dateOfBirth_Year'));
    	
        $(refs.email).val(model.get('email'));
        
        $(refs.homePhone1).val(model.get('homePhone').substr(0, 3));
        $(refs.homePhone2).val(model.get('homePhone').substr(3, 3));
        $(refs.homePhone3).val(model.get('homePhone').substr(6, 4));
        $(refs.phone_Type).val(app.ie9SelectHelper.getRightSelectValue(model.get('phone_Type')));
        
        sin = model.get('sin');
        if (sin) {
	        $(refs.sin1).val(sin.substr(0, 3));
	        $(refs.sin2).val(sin.substr(3, 3));
	        $(refs.sin3).val(sin.substr(6, 3));
        } else {
	        $(refs.sin1).val('');
	        $(refs.sin2).val('');
	        $(refs.sin3).val('');
        }
        
        $(refs.streetnumber).val(model.get('streetnumber'));
        $(refs.addressline1).val(model.get('addressline1'));
        $(refs.suiteunit).val(model.get('suiteunit'));
        $(refs.city).val(model.get('city'));
        //$(refs.province).val(model.get('province'));
        $(refs.province).val(app.ie9SelectHelper.getRightSelectValue(model.get('province')));
        
        $(refs.postalcode1).val(model.get('postalcode').substr(0, 3));
        $(refs.postalcode2).val(model.get('postalcode').substr(3, 3));
        $(refs.house).val(model.get('house'));
        $(refs.housingpayment).val(numberWithSeparators(model.get('housingpayment').toString().replace(',', '').replace(' ', '')));

        $(refs.sinceYears).val(model.get('sinceYears'));
        $(refs.sinceMonths).val(app.ie9SelectHelper.getRightSelectValue(model.get('sinceMonths')));
        //$(refs.sinceMonths).val(model.get('sinceMonths'));
        
        $(refs.receiveEmail).prop('checked', model.get('receiveEmail') == 'Y' ? true : false);
        
        
        $(refs.correspondenceEnglish).prop('checked', model.get('correspondence') === 'E' ? true : false);
        $(refs.correspondenceFrench).prop('checked', model.get('correspondence') === 'F' ? true : false);
        
        $(refs.streetnumber_prev).val(model.get('streetnumber_prev'));
        $(refs.addressline1_prev).val(model.get('addressline1_prev'));
        $(refs.city_prev).val(model.get('city_prev'));
        $(refs.suiteunit_prev).val(model.get('suiteunit_prev'));
        $(refs.province_prev).val(app.ie9SelectHelper.getRightSelectValue(model.get('province_prev')));
        //$(refs.province_prev).val(model.get('province_prev'));
        
        $(refs.postalcode1_prev).val(model.get('postalcode_prev').substr(0, 3));
        $(refs.postalcode2_prev).val(model.get('postalcode_prev').substr(3, 3));
        
        $(refs.loyaltyMembershipNumber).val(model.get('loyaltyMembershipNumberInternal'));
       // $(refs.loyaltyMembershipNumberPrefix).val(model.get('loyaltyMembershipNumberPrefix'));
        restoreSinceYearsField();
        toggle10XImege();
        toggleHeader();
	}
	
	function restoreSinceYearsField() {
		if (model.get('isPrevAddressExist')) {
			$(refs.prevAddressArea).show(); 
	  	} else {
		  	$(refs.prevAddressArea).hide();
		}
	}
	
	//---------------------------------------------------------------------------------------
	function restoreFinancialInformationUserData() {
		var sMethod = "restoreFinancialInformationUserData()";
        BRB.Log(logPrefix + sMethod);
        $(refs.grossIncome).val(numberWithSeparators(model.get('grossIncome').toString().replace(',', '').replace(' ', '')));
        // US3961
        $(refs.grossHouseholdIncome).val(numberWithSeparators(model.get('grossHouseholdIncome').toString().replace(',', '').replace(' ', '')));
        
        $(refs.cardVISAMCAMEX).prop('checked', model.get('cardVISAMCAMEX') == 'Y' ? true : false);
        $(refs.cardBankLoan).prop('checked', model.get('cardBankLoan') == 'Y' ? true : false);
        $(refs.cardStoreCard).prop('checked', model.get('cardStoreCard') == 'Y' ? true : false);
        $(refs.cardChequingAcct).prop('checked', model.get('cardChequingAcct') == 'Y' ? true : false);
        $(refs.cardGasCard).prop('checked', model.get('cardGasCard') == 'Y' ? true : false);
        $(refs.cardSavingsAcct).prop('checked', model.get('cardSavingsAcct') == 'Y' ? true : false);
	}
	
	//---------------------------------------------------------------------------------------
	function restoreEmploymentInformationUserData() {
		var sMethod = "restoreEmploymentInformationUserData()";
        BRB.Log(logPrefix + sMethod);
        
        $(refs.employmentType).val(app.ie9SelectHelper.getRightSelectValue(model.get('employmentType')));
        //$(refs.employmentType).val(model.get('employmentType'));
        $(refs.employerName).val(model.get('employerName'));
        $(refs.employerCity).val(model.get('employerCity'));
        $(refs.jobTitle).val(model.get('jobTitle'));
        
        // US3622        
        var filteredData = new BRB.JobDescListMapping();
        var jobDescription_temp = model.get('jobDescription_temp');
                        
        if(jobDescription_temp === null) {
        	$(refs.jobDescription).val(null);        	        	
        } else if ($.inArray(jobDescription_temp, ['TR_OR', 'DR_OR', 'MI_OR', 'PR_OR', 'FA_OR', 'GU_OR', 'MA_OR', 'OW_OR', 'OT_OR', 'SA_OR', 'SE_OR', 'RE_OR', 'LA_OR', 'OF_OR']) != -1) {
        	populateJobTitlesList(true);
        	$(refs.jobTitle_SelectField + ' [value="' + jobDescription_temp + '"]').attr( 'selected', 'selected' );
        	$(refs.jobDescription).val(model.get('jobDescription'));        	
        	$(refs.jobDesc_OtherArea).show();
    	} else {
    		populateJobTitlesList();
    		$(refs.jobTitle_SelectField + ' [value="' + jobDescription_temp + '"]').attr( 'selected', 'selected' );
    		$(refs.jobDescription).val(filteredData.getJobDescByJobValue(jobDescription_temp));
    		$(refs.jobDesc_OtherArea).hide();
    	}

        $(refs.howLongMonthes).val(model.get('howLongMonthes'));
        $(refs.howLongYears).val(model.get('howLongYears'));
        
        updateEmployerInformationArea();
	}
	
	//---------------------------------------------------------------------------------------
	function restoreCreditCardData() {
	    var sMethod = "restoreCreditCardData()";
        BRB.Log(logPrefix + sMethod);

        if (argPopup) {
        	if (blockName) {
    			if (blockName === refs.blockNameAboutYourself) {
    				restoreAboutYourselfUserData();
    			} else if (blockName === refs.blockFinancialInformation) {
    				restoreFinancialInformationUserData();
    			} else if (blockName === refs.blockNameEmploymentInformation) {
    				restoreEmploymentInformationUserData();
    			}
    		}
        }
	}
	
	//---------------------------------------------------------------------------------------
	function restoreAllData() {
	    var sMethod = "restoreAllData()";
        BRB.Log(logPrefix + sMethod);

    	restoreAboutYourselfUserData();
    	restoreFinancialInformationUserData();
    	restoreEmploymentInformationUserData();
	}
	
	//---------------------------------------------------------------------------------------
	function restoreDataAfterTranslation() {
	    var sMethod = "restoreDataAfterTranslation()";
        BRB.Log(logPrefix + sMethod);
        $(refs.title).val(app.ie9SelectHelper.getRightSelectValue(model.get('title')));
        $(refs.dateOfBirth_Month).val(app.ie9SelectHelper.getRightSelectValue(model.get('dateOfBirth_Month')));
        $(refs.dateOfBirth_Day).val(app.ie9SelectHelper.getRightSelectValue(model.get('dateOfBirth_Day')));
        //$(refs.dateOfBirth_Month).val(model.get('dateOfBirth_Month'));
        //$(refs.dateOfBirth_Day).val(model.get('dateOfBirth_Day'));
        $(refs.dateOfBirth_Year).val(model.get('dateOfBirth_Year'));
        $(refs.province).val(app.ie9SelectHelper.getRightSelectValue(model.get('province')));
        //$(refs.province).val(model.get('province'));
        $(refs.house).val(model.get('house'));
        $(refs.sinceYears).val(model.get('sinceYears'));
        //$(refs.sinceMonths).val(model.get('sinceMonths'));
        $(refs.sinceMonths).val(app.ie9SelectHelper.getRightSelectValue(model.get('sinceMonths')));
        $(refs.province_prev).val(app.ie9SelectHelper.getRightSelectValue(model.get('province_prev')));
        //$(refs.province_prev).val(model.get('province_prev'));
        $(refs.employmentType).val(app.ie9SelectHelper.getRightSelectValue(model.get('employmentType')));
        //$(refs.employmentType).val(model.get('employmentType'));
        $(refs.jobTitle).val(model.get('jobTitle'));
        $(refs.howLongMonthes).val(model.get('howLongMonthes'));
        $(refs.howLongYears).val(model.get('howLongYears')); 
        $(refs.phone_Type).val(app.ie9SelectHelper.getRightSelectValue(model.get('phone_Type')));
        // US3622
        restoreEmploymentInformationUserData();
        updateEmployerInformationArea();
	}
	
	//---------------------------------------------------------------------------------------
	function bindRealTimeDurationControl() {	
		$(refs.sinceYears).change(function() {
            onDurationChangesHandler();
        });   
		
		$(refs.sinceMonths).change(function() {
            onDurationChangesHandler();
        });   
	}
	
	//---------------------------------------------------------------------------------------
	function bindEmploymentTypeControl(){	
		$(refs.employmentType).change(function() {		    
		    //model.set('employmentType', $(refs.employmentType).val().toUpperCase());		    
			updateEmployerInformationArea();
        });
		
		$(refs.employmentType).keyup(function() {
			// fix for FireFox Bug CTCOFSMB-664
			updateEmployerInformationArea();
        });		
	}
	
	//---------------------------------------------------------------------------------------
	function updateEmployerInformationArea() {
		var sMethod = "updateEmployerInformationArea() :: ";
		BRB.Log(logPrefix + sMethod + $(refs.employmentType).val());
		if (_.isEmpty($(refs.employmentType).val()) || $(refs.employmentType).val().toUpperCase() ==='R' || $(refs.employmentType).val()=='null') {
			$(refs.employerInformationArea).hide();
		} else {
			$(refs.employerInformationArea).show();
		}
	}
	
	//---------------------------------------------------------------------------------------
    function onDurationChangesHandler() {
        var sMethod = 'onDurationChangesHandler() ';
        BRB.Log(logPrefix + sMethod);
        
        //syncUserData();
        
        var enteredDate = null;
        var tmp = $(refs.sinceYears).val();
        if (tmp === 'null' || tmp === 'Year' || tmp === 'Année') { 
        	tmp = null;
        }
        
        var sinceYears =  tmp;
        var todaysDate = new Date();
        var sinceMonths = $(refs.sinceMonths).val() === 'null' ? null : $(refs.sinceMonths).val();
        var currentMonth = todaysDate.getMonth();
        var currMonth = currentMonth+1;
        var currentYear = todaysDate.getFullYear();
        if (sinceYears != null && sinceMonths != null) {
        	enteredDate = new Date(sinceYears, sinceMonths, 1);
        }
        
        var fullYears = model.getFullYears(enteredDate);
        if((sinceMonths==currMonth) && (sinceYears==currentYear)){
        	$(refs.prevAddressArea).show();
    		model.set('isPrevAddressExist', true);
        } else if (enteredDate == null || fullYears >=2 || fullYears < 0) {	
        	if (!argPopup) {
        		$(refs.prevAddressArea).hide();
        		model.set('isPrevAddressExist', false);
        	} else {
        		$(refs.prevAddressArea).hide();
        		isPrevAddressEnable = false;
        	}
        } else if (!argPopup) {
        		$(refs.prevAddressArea).show();
        		model.set('isPrevAddressExist', true);
        } else {
        	$(refs.prevAddressArea).show();
        	isPrevAddressEnable = true;
        }
    }
    
    //---------------------------------------------------------------------------------------
    function syncAboutYourselfUserData(currentModel){
    	var sMethod = 'syncAboutYourselfUserData() ';
        BRB.Log(logPrefix + sMethod);
        
        if((currentModel == null) || (currentModel === undefined)) {
        	currentModel = model;
        }

        currentModel.set('title', 			  $(refs.title).val());
        currentModel.set('firstName',  		  $(refs.firstName).val().toUpperCase());
        currentModel.set('initial',    		  $(refs.initial).val().toUpperCase());
        currentModel.set('lastName',   		  $(refs.lastName).val().toUpperCase());
        currentModel.set('dateOfBirth_Month', $(refs.dateOfBirth_Month).val());
        currentModel.set('dateOfBirth_Day',   $(refs.dateOfBirth_Day).val());
        currentModel.set('dateOfBirth_Year',  $(refs.dateOfBirth_Year).val());
        if (($(refs.dateOfBirth_Month).val() == "null") || ($(refs.dateOfBirth_Day).val() == "null") || ($(refs.dateOfBirth_Year).val() === "")) {
        	currentModel.set('birthDate',  	null);
        } else {
        	currentModel.set('birthDate',  	$(refs.dateOfBirth_Year).val() + "-" + $(refs.dateOfBirth_Month).val() + "-" + $(refs.dateOfBirth_Day).val());
        }
        
        currentModel.set('email',      		$(refs.email).val().toUpperCase().replace(/\s+/g, ''));
        currentModel.set('age', model.calculateAge(model));
        BRB.Log(logPrefix + sMethod + " age :: after sync:: " + model.calculateAge(model));
        
       // currentModel.set('phone_Type', $(refs.phone_Type).val());
        currentModel.set('homePhone' , $(refs.homePhone1).val() + $(refs.homePhone2).val() + $(refs.homePhone3).val());
        
       // BRB.Log(logPrefix + sMethod + " homePhone :: after sync:: " + $(refs.homePhone1).val() + $(refs.homePhone2).val() + $(refs.homePhone3).val());
		
		//console.log('syncAboutYourselfUserData the phone_Type.'+model.get('tempPhoneType'));
		
		if(currentModel.get('phone_Type') == 'Mobile' ){
			currentModel.set('cellPhone' , currentModel.get('homePhone'));
		  }
            
        currentModel.set('sin',      		_.isEmpty($(refs.sin1).val() + $(refs.sin2).val() + $(refs.sin3).val()) ? null : $(refs.sin1).val() + $(refs.sin2).val() + $(refs.sin3).val());
        currentModel.set('streetnumber',   	$(refs.streetnumber).val().toUpperCase());
        currentModel.set('addressline1',   	$(refs.addressline1).val().toUpperCase());
        currentModel.set('suiteunit',      	$(refs.suiteunit).val().toUpperCase());
        currentModel.set('city',           	$(refs.city).val().toUpperCase());
        currentModel.set('province',       	$(refs.province).val());
        /*model.set('postalcode1',     	$(refs.postalcode1).val().toUpperCase());
        model.set('postalcode2',     	$(refs.postalcode2).val().toUpperCase());*/
        currentModel.set('postalcode',     	$(refs.postalcode1).val().toUpperCase() + $(refs.postalcode2).val().toUpperCase());
        currentModel.set('house',          	$(refs.house).val()==='null' ?  null :  $(refs.house).val());
        currentModel.set('housingpayment', 	$(refs.housingpayment).val().replace(/,/g,'').replace(' $ ','').replace('.',',').replace(' ',''));
        currentModel.set('sinceYears',         $(refs.sinceYears).val() ==='null' ? null : $(refs.sinceYears).val());
        currentModel.set('sinceMonths',        $(refs.sinceMonths).val() === 'null' ? null : $(refs.sinceMonths).val());
        currentModel.set('receiveEmail', $(refs.receiveEmail).is(':checked') == true ? 'Y':'N');
        currentModel.set('correspondence', getCorrespondence());
        currentModel.set('streetnumber_prev',  $(refs.streetnumber_prev).val().toUpperCase());
        currentModel.set('addressline1_prev',  $(refs.addressline1_prev).val().toUpperCase());
        currentModel.set('city_prev',          $(refs.city_prev).val().toUpperCase());
        currentModel.set('suiteunit_prev',     $(refs.suiteunit_prev).val().toUpperCase());
        currentModel.set('province_prev',      $(refs.province_prev).val());
        /*model.set('postalcode1_prev',   $(refs.postalcode1_prev).val().toUpperCase());
        model.set('postalcode2_prev',   $(refs.postalcode2_prev).val().toUpperCase());*/
        currentModel.set('postalcode_prev',    $(refs.postalcode1_prev).val().toUpperCase() + $(refs.postalcode2_prev).val().toUpperCase());
        
        var membershipNumber = $(refs.loyaltyMembershipNumber).val();
        // model.set('loyaltyMembershipNumberPrefix', $(refs.loyaltyMembershipNumberPrefix).val()) ;
        //currentModel.set('loyaltyMembershipNumberPrefix', $(refs.loyaltyMembershipNumberPrefix).val()) ;
        if (membershipNumber && membershipNumber.length > 0 && membershipNumber != "636574") {        
        	model.set('loyaltyMembershipNumberInternal', $(refs.loyaltyMembershipNumber).val()) ;        	
        	model.set('loyaltyMembershipNumber', model.get('loyaltyMembershipNumberInternal')) ;
        	currentModel.set('loyaltyMembershipNumberInternal', model.get('loyaltyMembershipNumberInternal') ) ;
        	currentModel.set('loyaltyMembershipNumber', model.get('loyaltyMembershipNumber')) ;
        } else {
        	model.set('loyaltyMembershipNumberInternal', null);
        	model.set('loyaltyMembershipNumber', null);
        	currentModel.set('loyaltyMembershipNumberInternal', null);
        	currentModel.set('loyaltyMembershipNumber', null);
        }
    }
    
    //---------------------------------------------------------------------------------------    
    function syncEmploymentInformationUserData(currentModel){
    	var sMethod = 'syncEmploymentInformationUserData() ';
        BRB.Log(logPrefix + sMethod);
        
        if ((currentModel == null) || (currentModel === undefined)) {
        	currentModel = model;
        }
        currentModel.set('employmentType',  	$(refs.employmentType).val());
        currentModel.set('employerName',  		$(refs.employerName).val().toUpperCase());
        currentModel.set('employerCity',  		$(refs.employerCity).val().toUpperCase());
        // currentModel.set('jobTitle', 			$(refs.jobTitle).val() ==='null' ? null : $(refs.jobTitle).val().toUpperCase());
        currentModel.set('jobTitle', 			$(refs.jobTitle).val() ==='null' ? null : $(refs.jobTitle).val());
        currentModel.set('jobDescription', 	$(refs.jobDescription).val().toUpperCase());
        // US3622        
        currentModel.set('jobDescription_temp', 	$(refs.jobTitle_SelectField).val());
        currentModel.set('howLongMonthes',   	$(refs.howLongMonthes).val());
        currentModel.set('howLongYears',   	$(refs.howLongYears).val());
    }
    
    //---------------------------------------------------------------------------------------
    function syncFinancialInformationUserData(currentModel){
    	var sMethod = 'syncFinancialInformationUserData() :: ';
        BRB.Log(logPrefix + sMethod + " grossHouseholdIncome " + $(refs.grossHouseholdIncome).val());
        
        if((currentModel == null) || (currentModel === undefined)) {
        	currentModel = model;
        }
        //currentModel.set('grossIncome', 		$(refs.grossIncome).val().replace(/,/g,'').replace(' $ ','').replace('.',',').replace(' ', ''));               
        currentModel.set('grossIncome', 		$(refs.grossIncome).val().replace(/,/g,'').replace(' $ ','').replace(' ', '').replace(',', ''));
        // US3961        
        currentModel.set('grossHouseholdIncome',$(refs.grossHouseholdIncome).val().replace(/,/g,'').replace(' $ ','').replace(' ', '').replace(',', ''));
        
        currentModel.set('cardVISAMCAMEX',   	$(refs.cardVISAMCAMEX).is(':checked') == true ? 'Y':'N');
        currentModel.set('cardBankLoan',   	$(refs.cardBankLoan).is(':checked') == true ? 'Y':'N');
        currentModel.set('cardStoreCard',   	$(refs.cardStoreCard).is(':checked') == true ? 'Y':'N');
        currentModel.set('cardChequingAcct',   $(refs.cardChequingAcct).is(':checked') == true ? 'Y':'N');
        currentModel.set('cardGasCard',   		$(refs.cardGasCard).is(':checked') == true ? 'Y':'N');
        currentModel.set('cardSavingsAcct',   	$(refs.cardSavingsAcct).is(':checked') == true ? 'Y':'N');
        currentModel.set('isAnyBankingProducts', isAnyBankingProductSelected());
    }
    
    function syncAllUserData(){
    	var sMethod = 'syncAllUserData() ';
        BRB.Log(logPrefix + sMethod);
        syncAboutYourselfUserData();
        syncFinancialInformationUserData();
        syncEmploymentInformationUserData();
    }
    
    //---------------------------------------------------------------------------------------
    function syncUserData(currentModel){
        var sMethod = 'syncUserData() ';
        BRB.Log(logPrefix + sMethod);
        
        if (blockName) {
			if (blockName === refs.blockNameAboutYourself) {
				syncAboutYourselfUserData(currentModel);
			} else if (blockName === refs.blockFinancialInformation) {
				syncFinancialInformationUserData(currentModel);
			} else if (blockName === refs.blockNameEmploymentInformation) {
				syncEmploymentInformationUserData(currentModel);
			}
		} else {
        	syncAllUserData();
        }
        
       
        BRB.Log(logPrefix + sMethod +' model data: \n' + model.toString());
    }
    
	//---------------------------------------------------------------------------------------
    function getCorrespondence(){
    	var correspondence = null;
        if($(refs.correspondenceEnglish).is(":checked")==true)
        {
        	correspondence = 'E';
        }
        else if($(refs.correspondenceFrench).is(':checked')==true)
        {
        	correspondence = 'F';
        }
        return correspondence;
    }
    
	//---------------------------------------------------------------------------------------
    function isAnyBankingProductSelected (){
        return model.get('cardVISAMCAMEX') == 'Y' || 
        model.get('cardBankLoan') == 'Y' ||
        model.get('cardStoreCard') == 'Y' ||
        model.get('cardChequingAcct') == 'Y' ||
        model.get('cardGasCar') == 'Y' ||
        model.get('cardSavingsAcct') == 'Y';
    }
    
	//---------------------------------------------------------------------------------------
	function show() {
		$screenContainer.show();
		translator.run("PersonalInformationScreen");
		fillControlsWithData();
		bindEvents();		
		bindRealTimeDurationControl();
		bindEmploymentTypeControl();
		setUIElementsMasks('update');
		restoreDataAfterTranslation();
		setMoneyNumericFormat();
		
		// Work around IE8 page-proofs issue
		updatePageStylesheet();
	}
	
	//---------------------------------------------------------------------------------------
	function updatePageStylesheet(isPoup) {
		// Work around IE8 round corners issue
		var ieUIHelper = new BRB.IeUIHelper();
		if (ieUIHelper.needToAddValueToInput()) {
			addValuesToInputs(ieUIHelper);
		}
		if (isPoup) {
			ieUIHelper.roundAllCornersForTag([$("#personalInformation_cancelChangesButtonHref"),
			                                  $("#personalInformation_saveChangesButtonHref")]);
		} else {		
			ieUIHelper.roundAllCornersForTag([$("#useMyCTProfileButton")]);
			ieUIHelper.roundLeftCornersForTag([$("#personalInformation_continueButtonHref")]);
		}
	}
	
	//---------------------------------------------------------------------------------------
	function hideUseMyCTProfileContainer() {
		$("#useMyCTProfileButton").hide();
		$("#useMyCTProfileLabel").hide();
		$("#useMyCTProfileInformation_Container").css('height','0px');
		$("#useMyCTProfileInformation_Container").css('margin-top','0px');
		$("#useMyCTProfileInformation_Container").css('margin-bottom','0px');
		$("#useMyCTProfileInformation_Cell").css('height','5px');
	}
	
	function popup(argScreenBelow, popupHideCallback, argBlockName, argFlow) {
		
		var sMethod = 'popup() ';
        BRB.Log(logPrefix + sMethod);
		
		screenBelow = argScreenBelow;
		blockName = argBlockName;
		popupHideEventHandler = popupHideCallback;
		savedFlow = argFlow;
		init(null);
		$screenContainer.fadeIn(1000);
		hideUseMyCTProfileContainer();
		translator.run("PersonalInformationScreen");
		fillControlsWithData();
		bindEvents();			
		bindRealTimeDurationControl();
		bindEmploymentTypeControl();
		setUIElementsMasks('update');
		restoreCreditCardData();
		setMoneyNumericFormat();
		focusFirstElement();
	}
	this.popup = popup;	
	
	function restoreScreenBelow(){
		var currentModel = jQuery.extend(true, {}, model);
		syncUserData(currentModel);
		var validationResult = [];
		
		if (app.validationsOn) {
            app.validationDecorator.clearErrArrtibute();
            if (argPopup) {
            	if (blockName) {
        			if (blockName === refs.blockNameAboutYourself) {
        				validationResult = validateAboutYourselfBlock(currentModel);
        			} else if(blockName === refs.blockFinancialInformation) {
        				validationResult = validateFinancialInformationBlock(currentModel);
        			} else if(blockName === refs.blockNameEmploymentInformation) {
        				validationResult = validateEmploymentInformationBlock(currentModel);
        			}
        		}
            }
		}
		
		if (validationResult.length > 0) {
            app.validationDecorator.applyErrAttribute(validationResult, false, translator);
            $(refs.makeCorrectionSection).show();
            return; 
        }
		
		syncUserData();
		if (isPrevAddressEnable != model.get('isPrevAddressExist')) {
			model.set('isPrevAddressExist',isPrevAddressEnable);
		}
		
		if (blockName) {
			// Removing addition of null to the popupHideEventHandler
			//US3961
			// popupHideEventHandler required for grossAnnualHouseholdIncomeCheck pop up
			checkGrossAnnualIncome(model.get('grossIncome'), grossAnnualHouseholdIncomeCheck, blockName === refs.blockFinancialInformation);
			
			/*if (checkGrossAnnualIncome(model.get('grossIncome'), hidePopupWindow, blockName === refs.blockFinancialInformation)) {
				popupHideEventHandler = null;
			}*/
		}
	}
	//US3961
    function grossAnnualHouseholdIncomeCheck(){
    	if (blockName) {
	    	if (checkGrossAnnualHouseholdIncome(model.get('grossHouseholdIncome'), hidePopupWindow, blockName === refs.blockFinancialInformation)) {
				popupHideEventHandler = null;
			}
    	}
    }
	//---------------------------------------------------------------------------------------
	function hidePopupWindow() {
		argPopup = false;
		blockName = null;
		init(savedFlow);
		restoreAboutYourselfUserData();
		restoreFinancialInformationUserData();
		restoreEmploymentInformationUserData();		
		hide();
		screenBelow.fadeIn(1000);
		popupHideEventHandler();
	}
	
	//---------------------------------------------------------------------------------------
	function hide(){
		$screenContainer.hide();
	}
	
	//---------------------------------------------------------------------------------------
	function createView() {
		$screenContainer.empty();
		
		if (!argPopup) {
			assembleNavigationBarAtTop();
			//note order is important
			assemblePageHTML($screenContainer, "#BRBPersonalInformation-template");
			insertAfterElement($(refs.steps2), "#personalInformationCreditCardDescription-template");
			$screenContainer.addClass("breadcrumbPadding");
		} else {
			assemblePageHTML($screenContainer, "#BRBPersonalInformation-template");
		}
		
		
		if (blockName) {	
			$(refs.breadcrumbTrailArea).hide();
			$(refs.aboutYourselfBlock).hide();
			$(refs.financialInformationBlock).hide();
			$(refs.employmentInformationBlock).hide();
			
			if(blockName === refs.blockNameAboutYourself) {
				$(refs.aboutYourselfBlock).show();
			} else if (blockName === refs.blockFinancialInformation) {
				$(refs.financialInformationBlock).show();
			} else if (blockName === refs.blockNameEmploymentInformation) {
				$(refs.employmentInformationBlock).show();
			}
		}
		createAndIsertToDomInputsWithPlaceHolder();
		bindInputTranslations();
		 toggle10XImege();
		 toggleHeader();
	}
	
	//---------------------------------------------------------------------------------------
	function assembleNavigationBarAtTop() {
        $("#pageHeader-template").template("pageHeader");
        $.tmpl("pageHeader", {
        	"switchLanguageButtonId" : "PersonalInformation_LanguageButton", "isMOA":isMOA , "cardType":cardTypeGlobal
        }).appendTo("#PersonalInformationScreen");
    }
	
	//---------------------------------------------------------------------------------------
	function assemblePageHTML($element, templateName) {
		var isMOA =  app.getIsMOARequest();
		BRB.Log("assemblePageHTML() :: " + isMOA);
		var html = $(templateName).tmpl({'screenIsPopup':argPopup, 'isMOA':isMOA , 'cardType':cardTypeGlobal}); 
		$element.append(html);
	}
	
	//---------------------------------------------------------------------------------------
	function insertAfterElement($element, templateName) {
		var html = $(templateName).tmpl({'screenIsPopup':false, 'cardType':cardTypeGlobal}); 
		$element.after(html);
	}
	
	//---------------------------------------------------------------------------------------
    function bindEvents() {
	    var sMethod = 'bindEvents() ';
        BRB.Log(logPrefix + sMethod);
        unbindEvents();
		bindNavigationButtons();
		bindAutoTabbing();
		$(refs.continueButton).on("mouseup",function(){
            BRB.Log("PersonalInformation_continueButton.click");
            
            if(argPopup) {
            	restoreScreenBelow();
            } else {
            	showNextScreen();	
            }
        });	   
		
		$(refs.cancelButton).on("mouseup",function() {
			hidePopupWindow();
		});
		
		$(refs.useMyCTProfileButton).on("mousedown mouseup", function(e) {
			 $(refs.useMyCTProfileButton).toggleClass( "active", e.type === "mousedown" );
		});
		
		$(refs.continueButtonContainer).on("mousedown mouseup", function(e) {
		    $(refs.continueButton).toggleClass( "active", e.type === "mousedown" );
		});
		
		$(refs.cancelButtonContainer).on("mousedown mouseup", function(e) {
		    $(refs.cancelButton).toggleClass( "active", e.type === "mousedown" );
		});
		
		/* 2016-02-11 chrch: Change class name due to responsive (US3964) */
		$(".ctfsTooltip").on('click mouseout', function(e){
			if(e.type === 'click'){
				$(this).children("span").addClass("hint");
			}else if (e.type === 'mouseout'){
				$(this).children("span").removeClass("hint");
			}
		});
		
		$(refs.useMyCTProfileButton).on("mouseup", function(){
			useCTProfileInformation();
		});
		
		$(refs.title).change(function() {
			model.set('title', $(refs.title).val());
		});
		
		// US3622
		$(refs.jobTitle_DropDown).change(function() {
			model.set("jobTitle", $(refs.jobTitle_DropDown).val());
			populateJobTitlesList();
		});
		
		$(refs.jobTitle_SelectField).change(function() {			
			bindJobTitleOther();
		});
		$(refs.phone_Type).change(function() {
			model.set('phone_Type', $(refs.phone_Type).val());
			model.set('homePhone' , $(refs.homePhone1).val() + $(refs.homePhone2).val() + $(refs.homePhone3).val());
			//console.log('the primary phone value '+ model.get('homePhone') +  'the phone Type ' + model.get('phone_Type') );
			if(model.get('phone_Type') == 'Mobile' ){
				model.set('cellPhone' , model.get('homePhone'));
				
			  }
		});
		
		if(!argPopup) {
			bindTranslationCallbacks();
		}
	}
    
    // US3622
    function bindJobTitleOther() {
    	var sMethod = 'bindJobTitleOther', jobTitle;
    	
    	$(refs.jobDesc_OtherArea).hide();
    
    	jobTitle = $(refs.jobTitle_SelectField).val();    
    	var filteredMapperData = new BRB.JobDescListMapping();
    	$(refs.jobDescription).val(filteredMapperData.getJobDescByJobValue(jobTitle));
    	model.set('jobDescription', $(refs.jobDescription).val());
    	model.set('jobDescription_temp', $(refs.jobTitle_SelectField).val());
    	
    	if ($.inArray(jobTitle, ['TR_OR', 'DR_OR', 'MI_OR', 'PR_OR', 'FA_OR', 'GU_OR', 'MA_OR', 'OW_OR', 'OT_OR', 'SA_OR', 'SE_OR', 'RE_OR', 'LA_OR', 'OF_OR']) != -1) {
    		$(refs.jobDesc_OtherArea).show();
    		$(refs.jobDescription).val(null);
    	} else {
    		$(refs.jobDesc_OtherArea).hide();
    	}
    	    	    	
    }
    
    function bindTranslationCallbacks() {
		$('#choseProduct').bind('translationStart', function() {
			syncAllUserData();
		});
		$('#choseProduct').bind('translationStop', function() {
			unbindEvents();
			fillControlsWithData();
			bindEvents();			
			bindRealTimeDurationControl();
			bindEmploymentTypeControl();
			setUIElementsMasks('update');
			validationDecorate(_validationResult, true);
			restoreDataAfterTranslation();
			setMoneyNumericFormat();
			updatePageStylesheet();
			toggle10XImege();
			toggleHeader();
		});
    }
    
    function setMoneyNumericFormat() {
        if(translator.isCurrentLanguageEnglish()) {
        	$(refs.housingpaymentDollar).show();
        	$(refs.housingpayment).val($(refs.housingpayment).val().toString().replace(' ', ','));
        	$(refs.grossIncome).val($(refs.grossIncome).val().toString().replace(' ', ','));
        	$(refs.grossIncomeDollarEn).show();
        	$(refs.grossIncomeDollarFr).hide();
        	// US3961
        	$(refs.grossHouseholdIncome).val($(refs.grossHouseholdIncome).val().toString().replace(' ', ','));
        	$(refs.grossHouseholdIncomeDollarEn).show();
        	$(refs.grossHouseholdIncomeDollarFr).hide();
        } else {
        	$(refs.housingpaymentDollar).hide();
        	$(refs.housingpayment).val($(refs.housingpayment).val().toString().replace(',', ' '));
        	$(refs.grossIncome).val($(refs.grossIncome).val().toString().replace(',', ' '));
        	$(refs.grossIncomeDollarFr).show();
        	$(refs.grossIncomeDollarEn).hide();
        	// US3961
        	$(refs.grossHouseholdIncome).val($(refs.grossHouseholdIncome).val().toString().replace(',', ' '));
        	$(refs.grossHouseholdIncomeDollarFr).show();
        	$(refs.grossHouseholdIncomeDollarEn).hide();
        }
    }
    
    function bindInputTranslations() {
    	$(refs.dateOfBirth_Year).on('translationStop',function() {
    		addValuesToInputs();
		});
    }
    
    function addValuesToInputs(ie8Helper) {
    	var translatedText = translator.translateKey('personalInformation_Year');
    	if(ie8Helper) {
    		var value = $('#personalInformation_DateOfBirth_Year').val();
    		// need to restore state
    		if( value == "" || value == null || value === 'Year' || value === 'Année'){
    			$('#personalInformation_DateOfBirth_Year').val(translatedText);
    		}
    		value  = $('#personalInformation_AddressSince_Year').val();
    		if( value == "" || value == null || value === 'Year' || value === 'Année'){
    			$('#personalInformation_AddressSince_Year').val(translatedText);
    		}
    		value  = $('#personalInformation_EmployerSince_Year').val();
    		if( value == "" || value == null || value === 'Year' || value === 'Année'){
    			$('#personalInformation_EmployerSince_Year').val(translatedText);
    		}
    		return;
    	}
		
		$('#personalInformation_DateOfBirth_Year').attr('placeholder',translatedText);
		$('#personalInformation_AddressSince_Year').attr('placeholder',translatedText);
		$('#personalInformation_EmployerSince_Year').attr('placeholder',translatedText);
    }
    
    //---------------------------------------------------------------------------------------
	function bindAutoTabbing() {
		
		$(refs.homePhone1).keyup(function(event) {
			if ($(this).val().length == 3) {
				if (event.keyCode != 9) {
					$(refs.homePhone2).focus();
					$(refs.homePhone2).select();
				}
			}
		});
		
		$(refs.homePhone2).keyup(function(event) {
			if ($(this).val().length == 3) {
				if (event.keyCode != 9) {
					$(refs.homePhone3).focus();
				}
			}
		});
		
		$(refs.sin1).keyup(function(event) {
			if ($(this).val().length == 3) {
				if (event.keyCode != 9) {
					$(refs.sin2).focus();
				}
			}
		});
		
		$(refs.sin2).keyup(function(event) {
			if ($(this).val().length == 3) {
				if (event.keyCode != 9) {
					$(refs.sin3).focus();
				}
			}
		});
		
		$(refs.postalcode1).keyup(function(event) {
			if ($(this).val().length == 3) {
				if (event.keyCode != 9) {
					$(refs.postalcode2).focus();
				}
			}
		});
		
		$(refs.postalcode1_prev).keyup(function(event) {
			if ($(this).val().length == 3) {
				if (event.keyCode != 9) {
					$(refs.postalcode2_prev).focus();
				}
			}
		});
    }
	
    //---------------------------------------------------------------------------------------
    function unbindEvents() {
	    var sMethod = 'unbindEvents() ';
        BRB.Log(logPrefix + sMethod);        
		bindNavigationButtons();		
		$(refs.continueButton).unbind();		
		$(refs.cancelButton).unbind();		
		$(refs.continueButtonContainer).unbind();
		$(".tooltip").unbind();		
		$(refs.cancelButtonContainer).unbind();
		$(refs.useMyCTProfileButton).unbind();
		$('#choseProduct').unbind();
		$(refs.sinceYears).unbind();
		$(refs.sinceMonths).unbind();
		$(refs.employmentType).unbind();
		$(refs.homePhone1).unbind();
		$(refs.homePhone2).unbind();
		$(refs.sin1).unbind();
		$(refs.sin2).unbind();
		$(refs.postalcode1).unbind();
		$(refs.postalcode1_prev).unbind();
	}
    
    //---------------------------------------------------------------------------------------
    function useCTProfileInformation() {
		var sMethod = "useCTProfileInformation()";
        BRB.Log(logPrefix + sMethod);
        
        if (profileInfoModel) {
        	$(refs.firstName).val(profileInfoModel.getFirstName());
        	$(refs.lastName).val(profileInfoModel.getLastName());
        	$(refs.email).val(profileInfoModel.getEmail());
        	$(refs.city).val(profileInfoModel.getCity());
        	$(refs.province).val(profileInfoModel.getProvince());
        	$(refs.loyaltyMembershipNumber).val(profileInfoModel.getLoyaltyNumber());
        	
        	var profilePostalCode = profileInfoModel.getPostalCode();
        	if (profilePostalCode) {
            	$(refs.postalcode1).val(profilePostalCode.substr(0, 3));
            	$(refs.postalcode2).val(profilePostalCode.substr(3, 3));       		
        	}
                
        	var homePhone = profileInfoModel.getPhoneNumber();
        	if (homePhone) {
            	$(refs.homePhone1).val(homePhone.substr(0, 3));
            	$(refs.homePhone2).val(homePhone.substr(3, 3));
            	$(refs.homePhone3).val(homePhone.substr(6, 4));        		
        	}

        	// parse AddressLine value
            var address1Line = profileInfoModel.getAddressLine1();
        	var address2Line = profileInfoModel.getAddressLine2();
        	if (address1Line) {
        		var separatorExists = true;
	        	var separatorPos = 0;
        	
	        	// get Street Number separator position
	        	var commaSeparator = address1Line.indexOf(',');
	        	var spaceSeparator = address1Line.indexOf(' ');
	        	if (commaSeparator === -1) {
	        		if (spaceSeparator === -1) {
	        			separatorExists = false;
	        		} else {
	        			separatorPos = spaceSeparator;
	        		}
	        	} else {
	        		if (spaceSeparator === -1) {
	        			separatorPos = commaSeparator;
	        		} else {
	        			if (commaSeparator < spaceSeparator) {
	        				separatorPos = commaSeparator;
	        			} else {
	        				separatorPos = spaceSeparator;
	        			}
	        		}
	        	}
	        	
	        	// check if Street Number separator exists...
	        	if (separatorExists) {
	        		// check if the string starts with a number...
	        		var streetNum = address1Line.substring(0, separatorPos);
	        		var streetName = address1Line.substring(separatorPos + 1);
	        		if (streetNum.match(/[0-9]/)) {
	        			// ...then store the number into StreetNumber field
	        			$(refs.streetnumber).val(streetNum);
	        			// ...and the remaining text (with AddressLine2 value, in case it exists) into the AddressLine1 field 
	        			if (!address2Line) {
	        				$(refs.addressline1).val(streetName);
	        			} else {
	        				$(refs.addressline1).val(streetName + ', ' + address2Line);
	        			}
	        		} else {
	        			// leave StreetNumber field empty and store the text (with AddressLine2 value, in case it exists) into the AddressLine1 field
	        			$(refs.streetnumber).val('');
	        			if (!address2Line) {
	        				$(refs.addressline1).val(address1Line);
	        			} else {
	        				$(refs.addressline1).val(address1Line + ', ' + address2Line);
	        			}
	        		}
	        	} else {
	    			// leave StreetNumber field empty and store the text (with AddressLine2 value, in case it exists) into the AddressLine1 field
	    			$(refs.streetnumber).val('');
	    			$(refs.addressline1).val(address1Line);
	    			if (!address2Line) {
	    				$(refs.addressline1).val(address1Line);
	    			} else {
	    				$(refs.addressline1).val(address1Line + ', ' + address2Line);
	    			}    			
	        	}	        			
        	} else {
        		// ...AddressLine1 value is empty, so leave the StreetNumber field empty and store the AddressLine2 value, in case it exists, into the AddressLine1 field
        		$(refs.streetnumber).val('');
        		if (!address2Line) {
        			$(refs.addressline1).val('');
        		} else {
        			$(refs.addressline1).val(address2Line);
        		}
        	}
        }
    }
    
	// ---------------------------------------------------------------------------------------
	function bindNavigationButtons(){
        $('#PersonalInformation_NextButton').on("mouseup",function() {
            showNextScreen();
        });
        $('#PersonalInformation_PrevButton').on("mouseup",function() {
        	showPrevScreen();
        });        		
	}
	
	// ---------------------------------------------------------------------------------------
	function fillControlsWithData() {
		var provincesList = new BRB.ProvincesList(translator);
		provincesList.fillSelectControl(refs.provincesDropDown);
		provincesList.fillSelectControl(refs.prevProvincesDropDown);
		
		var titlesList = new BRB.TitlesList(translator);
		titlesList.fillSelectControl(refs.title);

		if (!translator.isCurrentLanguageEnglish()) {
			if (model.get('title') == 'MISS') {
				model.set('title', 'MS');
			}						
			$("#personalInformation_Title_TextField").focus();
			$("#personalInformation_Title_TextField [value='MISS']").remove();
		}
		
		var monthsList = new BRB.MonthsList(translator);
		monthsList.fillSelectControl(refs.dateOfBirth_Month);
		monthsList.fillSelectControl(refs.sinceMonths);
		monthsList.fillSelectControl(refs.howLongMonthes);
		
		var employmentTypeList = new BRB.EmploymentTypeList(translator);
		employmentTypeList.fillSelectControl(refs.employmentType_DropDown);
		
		var residentialStatusesList = new BRB.ResidentialStatusesList(translator);
		residentialStatusesList.fillSelectControl(refs.residentialStatus_DropDown);
		
		var jobTitlesList = new BRB.JobTitlesList(translator);
		jobTitlesList.fillSelectControl(refs.jobTitle_DropDown);
		
		var phoneTypeList = new BRB.PhoneTypeList(translator);
		 phoneTypeList.fillSelectControl(refs.phone_Type);
		
		
		
		fillDaysControl(refs.dateOfBirth_Day);
		toggle10XImege();
		toggleHeader();
		// US3622
	    $(refs.jobDesc_OtherArea).hide();	   		
	}
	
	//---------------------------------------------------------------------------------------
	// US3622
	function populateJobTitlesList(restore) {
		var sMethod = "populateJobTitlesList() :: ";
		BRB.Log(logPrefix + sMethod + $(refs.jobTitle_DropDown).val());
		
		var jobTitle, jobDescription_temp, controlRef;
		
		jobTitle = model.get('jobTitle');
		jobDescription_temp = model.get('jobDescription_temp');				
				
		/*if ($.inArray(jobTitle, ['HO', 'RT', 'UN', 'ST']) != -1) {
			$(refs.jobDesc_OtherArea).hide();        	                
        }            
        else */if ($.inArray(jobTitle, ['DR', 'GU', 'LA', 'MA', 'MI', 'OF', 'OW', 'FA', 'PR', 'RE', 'SA', 'SE', 'TR', 'OT', 'HO', 'RT', 'UN', 'ST']) != -1) {        	                	        	
        	if($(refs.jobDescription).val()){
        		model.set('jobDescription', $(refs.jobDescription).val());        		
        	} else {
        		$(refs.jobDescription).val(null);
        	}
		
		$(refs.jobDesc_OtherArea).hide();				
	     
		if(_.isEmpty($(refs.jobTitle_DropDown).val()) || $(refs.jobTitle_DropDown).val()=='null') {			
			$(refs.jobDescription).val(null);
			$(refs.jobDesc_OtherArea).hide();
			$(refs.jobTitle_SelectField).empty();
		} else {
			var JobDescOption = new BRB.JobDescOptionList(translator);
		    JobDescOption.fillJobDesc(jobTitle);
		}
	    
	      	
        if(model.get('jobDescription')){ 
        	var filteredMapperData = new BRB.JobDescListMapping(translator);
            
        	if( filteredMapperData.getJobDescByJobValue(jobDescription_temp) === null ){
        		$(refs.jobTitle_SelectField + ' [value="' + jobDescription_temp + '"]').attr( 'selected', 'selected' );
            	$(refs.jobDescription).val();
            	$(refs.jobDesc_OtherArea).hide();
        	} else if ($.inArray(jobDescription_temp, ['TR_OR', 'DR_OR', 'MI_OR', 'PR_OR', 'FA_OR', 'GU_OR', 'MA_OR', 'OW_OR', 'OT_OR', 'SA_OR', 'SE_OR', 'RE_OR', 'LA_OR', 'OF_OR']) != -1) { 
            	$(refs.jobTitle_SelectField + ' [value="' + jobDescription_temp + '"]').attr( 'selected', 'selected' );
            	$(refs.jobDescription).val();          
            	if(restore) {
            		$(refs.jobDesc_OtherArea).show();
            		$(refs.jobDescription).val(model.get('jobDescription'));
            	}
            	else {
            		$(refs.jobDesc_OtherArea).hide();
            	}
        	} else {                 		
        		$(refs.jobTitle_SelectField + ' [value="' + jobDescription_temp + '"]').attr( 'selected', 'selected' );
        		$(refs.jobDescription).val(filteredMapperData.getJobDescByJobValue(jobDescription_temp));
        		$(refs.jobDesc_OtherArea).hide();
        	}            	
        }
        if (jobTitle) {
            $(refs.jobTitle + ' [value="' + jobTitle + '"]').attr(
                'selected', 'selected'
            );
        }
    }
        
	}
	
	//---------------------------------------------------------------------------------------
	function fillDaysControl(controlId) {
		var sMethod = 'fillDaysControl() ';
        BRB.Log(logPrefix + sMethod);
        
        if ($(controlId+' option').length > 1) {
            BRB.Log(logPrefix + sMethod +" select control is already populated.");
            return;
        }
        
        var controlRef = $(controlId);
        controlRef.empty();
        
        var optTemplFirst = '<option value="null">' + translator.translateKey('daySelect_Text') + '</option>';            
        controlRef.append(optTemplFirst);
        
        for (var i=1; i<32; i++) {
        	var optTempl = '<option value="' + i + '">' + i + '</option>';            
            controlRef.append(optTempl);
        }
	}
	
	//---------------------------------------------------------------------------------------
	function setUIElementsMasks(formatType) {
		if (translator.isCurrentLanguageEnglish()) {
			$(refs.grossIncome).autoNumeric(formatType, {aSign: '', vMin: '0', vMax:'999999', mDec: '0', wEmpty: 'sign', aSep: ','});
			// US3961
			$(refs.grossHouseholdIncome).autoNumeric(formatType, {aSign: '', vMin: '0', vMax:'999999', mDec: '0', wEmpty: 'sign', aSep: ','});
			
			$(refs.housingpayment).autoNumeric(formatType, {aSign: '', vMin: '0', vMax:'9999', mDec: '0', wEmpty: 'sign', aSep: ','});
		} else {
			$(refs.grossIncome).autoNumeric(formatType, {aSign: '', vMin: '0', vMax: '999999', mDec: '0', wEmpty: 'sign', aSep: ' '});
			// US3961
			$(refs.grossHouseholdIncome).autoNumeric(formatType, {aSign: '', vMin: '0', vMax: '999999', mDec: '0', wEmpty: 'sign', aSep: ' '});
			
			$(refs.housingpayment).autoNumeric(formatType, {aSign: '', vMin: '0', vMax: '9999', mDec: '0', wEmpty: 'sign', aSep: ' '});			
		}
		
		$(refs.homePhone1).numeric();
		$(refs.homePhone2).numeric();
		$(refs.homePhone3).numeric();
		
		$(refs.sin1).numeric();
		$(refs.sin2).numeric();
		$(refs.sin3).numeric();
		
		varCurrentYear = 1900 + Date.now().getYear();
		
		$(refs.dateOfBirth_Year).autoNumeric('init', {aSign: '',vMin:'0', vMax:varCurrentYear, mDec:'0', wEmpty: '', aSep:''});
		$(refs.howLongYears).autoNumeric('init', {aSign:'',vMin:'0', vMax:varCurrentYear, mDec:'0', wEmpty: '', aSep:''});
		$(refs.sinceYears).autoNumeric('init', {aSign:'',vMin:'0', vMax:varCurrentYear, mDec:'0', wEmpty: '', aSep:''});
				 
		$(refs.initial).alpha({nocaps : false});
		
		//$(refs.loyaltyMembershipNumber).autoNumeric('init', {aSign:'',vMin:'0', vMax:'9999999999', mDec:'0',wEmpty: '', aSep:''});
	}
	
	//---------------------------------------------------------------------------------------
	function showPrevScreen() {
	    syncUserData();
	    if (model.get('province') == "NS") {
	    	BRB.AppConfig.TrackingScreenID = 2;
	    } else {
	    	BRB.AppConfig.TrackingScreenID = 1;
	    }	    
		flow.back();
	}	
	
	//---------------------------------------------------------------------------------------
	function showNextScreen() {
        var sMethod = 'showNextScreen() ';
        BRB.Log(logPrefix + sMethod);

        syncUserData();

        if (!validate() ) {
        	return;
        }
        $(refs.makeCorrectionSection).hide();
        if (!OMZIncomeValidation(model.get('grossIncome'), model.get('grossHouseholdIncome')) ) {
        	return;
        }
       
      
		// US3961        
        checkGrossAnnualIncome(model.get('grossIncome'), grossAnnualHouseholdIncome, true);
        
         /*if( activationItems.getModel('overview').get('cardType') == "OMX"){
		 checkGrossIncomeOMX(model.get('grossIncome'), grossAnnualHouseholdIncome, true);
	      }*/
        
        
        // checkGrossAnnualIncome(model.get('grossIncome'), flowNext, true); // Old
	}	
	
	// US3961
	//---------------------------------------------------------------------------------------
    function grossAnnualHouseholdIncome(){    	
		checkGrossAnnualHouseholdIncome(model.get('grossHouseholdIncome'), flowNext, true);
    }
	
	//---------------------------------------------------------------------------------------
	function flowNext() {
		flow.next();
	}
	
	//---------------------------------------------------------------------------------------
	function checkGrossAnnualIncome(value, agreeCallback, isDialogToBeShown) {
		var sMethod = '[checkGrossAnnualIncome()] :: value = ' + value;

		if ((value === null) || (value === '')) {
			return true;
		}

		try {
			var formattedValue = value;

			if ((parseInt(value.replace(' ', '').replace(',', '')) <= 5000) && isDialogToBeShown) {

				var message = translator
						.translateKey('personalInformation_grossIncomeError1')
						+ numberWithSeparators(formattedValue)
						+ translator
								.translateKey('personalInformation_grossIncomeError2');
				messageDialog.htmlConfirm(message, agreeCallback,  highlightGrossAnnualIncome);
				
				return false;
			}
		} catch (error) {
			BRB.Log(sMethod + ' ERROR!!!!:' + err);
		}
		agreeCallback();
		return true;
	}
	
	// US3961
	//---------------------------------------------------------------------------------------
	function checkGrossAnnualHouseholdIncome(value, agreeCallback, isDialogToBeShown) {
		var sMethod = '[checkGrossAnnualHouseholdIncome()] :: value = ' + value;

		if ((value === null) || (value === '')) {
			// Optional field for Household Income field. Even if nothing is entered, we should be going to next screen
			agreeCallback();
			return true;
		}

		try {
			var formattedValue = value;

			if ((parseInt(value.replace(' ', '').replace(',', '')) <= 5000) && isDialogToBeShown) {

				var message = translator
						.translateKey('personalInformation_grossHouseholdIncomeError1')
						+ numberWithSeparators(formattedValue)
						+ translator
								.translateKey('personalInformation_grossHouseholdIncomeError2');
				messageDialog.htmlConfirm(message, agreeCallback,  highlightGrossAnnualHouseholdIncome);
				
				return false;
			}
		} catch (error) {
			BRB.Log(sMethod + ' ERROR!!!!:' + err);
		}
		agreeCallback();
		return true;
	}
	// End
	
	//---------------------------------------------------------------------------------------
/*	
		
	function checkGrossIncomeOMX(value, agreeCallback, isDialogToBeShown) {
		var sMethod = '[checkGrossAnnualIncome()] :: value = ' + value;

		if ((value === null) || (value === '')) {
			return true;
		}

		try {
			var formattedValue = value;

			if ((parseInt(value.replace(' ', '').replace(',', '')) <= 5000) && isDialogToBeShown) {

				var message = translator
						.translateKey('personalInformation_grossIncomeError1')
						+ numberWithSeparators(formattedValue)
						+ translator
								.translateKey('personalInformation_grossIncomeError2');
				messageDialog.confirm(message, agreeCallback,  highlightGrossAnnualIncome, emptyString , translator
						.translateKey('confirmDialog_yes'), translator
						.translateKey('confirmDialog_no'));
				
				return false;
			}
		} catch (error) {
			BRB.Log(sMethod + ' ERROR!!!!:' + error);
		}
		agreeCallback();
		return true;
	}*/
	
	
	
	
	//---------------------------------------------------------------------------------------
	function highlightGrossAnnualIncome() {
		var rez = [];
		rez.push({
			name : 'grossIncome',
			err : 'personalInformation_GrossAnnualIncomeError_OMZ',
			uiid: refs.grossIncome
		});
		
		app.validationDecorator.applyErrAttribute(rez, false, translator);		
	}
	
	// US3961
	//---------------------------------------------------------------------------------------	
	function highlightGrossAnnualHouseholdIncome() {
		var rez = [];
		rez.push({
			name : 'grossHouseholdIncome',
			err : 'personalInformation_GrossAnnualHouseholdIncomeError',
			uiid: refs.grossHouseholdIncome
		});
		
		app.validationDecorator.applyErrAttribute(rez, false, translator);		
	}
	//---------------------------------------------------------------------------------------
	function validate(skeepFocus) {
		
		funcRes = true;
		_validationResult = [];
		
	    if (app.validationsOn) {
            app.validationDecorator.clearErrArrtibute();            
            
            var validationResult = validateAboutYourselfBlock();
            validationResult = validationResult.concat(validateEmploymentInformationBlock(), validateFinancialInformationBlock());
            
            _validationResult = validationResult;
        	
            funcRes = validationDecorate(validationResult, skeepFocus);
        }
	    
	    return funcRes;
	}
	
	//---------------------------------------------------------------------------------------
	function validationDecorate(validationResult, skeepFocus) {
		
		if (validationResult.length > 0) {
			app.validationDecorator.applyErrAttribute(validationResult, skeepFocus ? true: false, translator);
			$(refs.makeCorrectionSection).show();
			return false; 
        }
		
		return true;
	}
	
	//---------------------------------------------------------------------------------------
	function validateAboutYourselfBlock(currentModel) {
		
		var sMethod = 'validateAboutYourselfBlock() ';
        BRB.Log(logPrefix + sMethod);   
        
        if ((currentModel === null) || (currentModel === undefined)) {
        	currentModel = model;
        }
        
        var validationResult = currentModel.validate(1);

        var birthDate = currentModel.get('birthDate');
        if ((birthDate === null) || (birthDate === 'null') || 
        	(birthDate === "") || (birthDate === undefined)) {
        
        	validationResult.push({name: 'birthdate', err: 'personalInformation_DateofBirthMonthError', uiid: refs.dateOfBirth_Month});
        	validationResult.push({name: 'birthdate', err: 'personalInformation_DateofBirthDateError', uiid: refs.dateOfBirth_Day});
        	validationResult.push({name: 'birthdate', err: 'personalInformation_DateofBirthYearError', uiid: refs.dateOfBirth_Year});
        	
        } else if (!currentModel.validateForFutureDate(birthDate)) {
        	
        	validationResult.push({name: 'birthdate', err: 'personalInformation_FutureDateError', uiid: refs.dateOfBirth_Month});
        	validationResult.push({name: 'birthdate', err: 'personalInformation_FutureDateError', uiid: refs.dateOfBirth_Day});
        	validationResult.push({name: 'birthdate', err: 'personalInformation_FutureDateError', uiid: refs.dateOfBirth_Year});
        	
    	} else {
        	var edgeValidation = currentModel.validateAge(birthDate, currentModel.get('province'), refs.birthDate);
    		if (edgeValidation != null) {
    			validationResult.push(edgeValidation);
    		}	    		
    	}

    	if (!currentModel.isEmptyValue('sinceYears') && !currentModel.isEmptyValue('sinceMonths')) {
    		
	   		var sinceDate = new Date(currentModel.get('sinceYears'), currentModel.get('sinceMonths'), 1);
	   		
	    	if (currentModel.getFullYears(sinceDate) < 2) {
	    		validationResult = validationResult.concat(currentModel.validate(2));
	    	}
	    	
    		var dateParts = '';
    		var birthDay = '';
    		if (birthDate) { 
	   			dateParts = birthDate.split("-");
	   			birthDay = '-' + dateParts[2];
    		}
	    	
	    	var sinceModelDate = currentModel.get('sinceYears') + "-" +  currentModel.get('sinceMonths') + birthDay;
			if (!currentModel.validateForFutureYearMonth(sinceModelDate, birthDate)) {
				validationResult.push({name: 'sinceYears', err: 'personalInformation_FutureDateError', uiid: refs.sinceYears});
				validationResult.push({name: 'sinceMonths', err: 'personalInformation_FutureDateError', uiid: refs.sinceMonths});
			} else if (!model.validateForTimePeriod(model.get('sinceYears'), model.get('sinceMonths'))) {
				
				// personal Information FutureDate Error message seems to be not corresponded to this validation type !!! 
				validationResult.push({name: 'sinceYears', err: 'personalInformation_FutureDateError', uiid: refs.sinceYears});
				validationResult.push({name: 'sinceMonths', err: 'personalInformation_FutureDateError', uiid: refs.sinceMonths});
				// !!!
			}
	    } else if (currentModel.isEmptyValue('sinceYears')) {
			validationResult.push({name: 'sinceYears', err: 'personalInformation_SinceYearError', uiid: refs.sinceYears});
		} else {
			validationResult.push({name: 'sinceMonths', err: 'personalInformation_SinceMonthError', uiid: refs.sinceMonths});
		}
        
        return validationResult;
	}

	//---------------------------------------------------------------------------------------
	function validateFinancialInformationBlock(currentModel) {
		var sMethod = 'validateFinancialInformationBlock() ';
        BRB.Log(logPrefix + sMethod);
        
        if ((currentModel === null) || (currentModel === undefined)) {
        	currentModel = model;
        }
            
        
        return currentModel.validate(5);
	}	
	
	//---------------------------------------------------------------------------------------
	function validateEmploymentInformationBlock(currentModel) {
		var sMethod = 'validateEmploymentInformationBlock() ';
        BRB.Log(logPrefix + sMethod);
        
        if ((currentModel === null) || (currentModel === undefined)) {
        	currentModel = model;
        }

        var employmentType = currentModel.get('employmentType');
        var validationResult = currentModel.validate(3);
        if ((employmentType != null) && (employmentType.toUpperCase() != 'R') && (employmentType != 'null')) {
        	validationResult = validationResult.concat(currentModel.validate(4));
        }
        
        if ((employmentType != null) && (employmentType != 'null') && (employmentType.toUpperCase() != 'R') && 
        	!currentModel.isEmptyValue('howLongYears') && !currentModel.isEmptyValue('howLongMonthes')) {
        	
   			var sinceModelDate = currentModel.get('howLongYears') + "-" +  currentModel.get('howLongMonthes') + "-1";
       		if (!currentModel.validateForFutureYearMonth(sinceModelDate, currentModel.get('birthDate'))) {
       			validationResult.push({name: 'howLongYears', err: 'personalInformation_EmployerSinceYearError', uiid: refs.howLongYears});
       			validationResult.push({name: 'howLongMonthes', err: 'personalInformation_EmployerSinceMonthError', uiid: refs.howLongMonthes});
       		} else if (!currentModel.validateForTimePeriod(currentModel.get('howLongYears'), currentModel.get('howLongMonthes'))) {
       			validationResult.push({name: 'howLongYears', err: 'personalInformation_EmployerSinceYearError', uiid: refs.howLongYears});      
       			validationResult.push({name: 'howLongMonthes', err: 'personalInformation_EmployerSinceMonthError', uiid: refs.howLongMonthes});
       		}
    	}
        
        return validationResult;
	}
	
	//---------------------------------------------------------------------------------------
	function numberWithSeparators(val) {
		
		var sepChar = ',';
		var strValue = val.toString();
		
		if (!translator.isCurrentLanguageEnglish()) {
			sepChar = ' ';
		}
		
		return strValue.replace(/\B(?=(\d{3})+(?!\d))/g, sepChar);;
	}
	function toggle10XImege() {
		if (app.ieUIHelper.isIe8Browser()){
		   app.ieUIHelper.toggleNSImege(translator);
		}else{
			translator.getCurrentLanguage() == 'en' ? $('#PersonalInformationScreen a#topBanner10XImage').addClass(
			'topBanner10XImageBlock').removeClass(
			'topBanner10XImageBlock_fr') : $('#PersonalInformationScreen a#topBanner10XImage')
			.addClass('topBanner10XImageBlock_fr').removeClass(
					'topBanner10XImageBlock');  
		}
	}  
	function toggleHeader(){
		if(translator.getCurrentLanguage() == 'en'){
			$(refs.personalInformation_Horizontal_Line_1).removeClass('Width_TD_08');
			$(refs.personalInformation_Horizontal_Line_1).addClass('Width_TD_16');
			$(refs.personalInformation_Horizontal_Line_2).removeClass('Width_TD_08');
			$(refs.personalInformation_Horizontal_Line_2).addClass('Width_TD_16');
		}else {
			$(refs.personalInformation_Horizontal_Line_1).removeClass('Width_TD_16');
			$(refs.personalInformation_Horizontal_Line_1).addClass('Width_TD_08');
			$(refs.personalInformation_Horizontal_Line_2).removeClass('Width_TD_16');
			$(refs.personalInformation_Horizontal_Line_2).addClass('Width_TD_08');
		}
	}
	
   function OMZIncomeValidation(grossIncome, houseHoldIncome) {
	    var sMethod = 'OMZIncomeValidation() ';
	    BRB.Log(logPrefix + sMethod);
	    if (grossIncome < 80000 && activationItems.getModel('overview').get('cardType') == "OMZ" && houseHoldIncome >= 150000 &&   model.get('house') == 'O' ) {
		   return true;
		 }
		 if (grossIncome < 80000 && activationItems.getModel('overview').get('cardType') == "OMZ" ) {
			 dispalyEligibilityRequirement();
			return  false;
		 }
		 return true;
	
   }
 
 
 //US4995
  function dispalyEligibilityRequirement()
  {   var sMethod = 'dispalyEligibilityRequirement() ';
      BRB.Log(logPrefix + sMethod );
      var message = translator
		.translateKey('personalInformation_EligibilityText');
      messageDialog.htmlReqirementEligibilityConfirm(message, yesCallback , noCallback);
      return false;
      
   } 
	
    function yesCallback() {
		var sMethod = 'yesCallback() ';
        BRB.Log(logPrefix + sMethod);
        var startButton = translator
		.translateKey('overview_startApplication_Button_Label');
        var noButton = translator
		.translateKey('confirmDialog_no');
        messageDialog.htmlCreditDisclosureInfo(startButton, redirectOMXCard , translator);
        
	}
	
	function noCallback() {
		var sMethod = 'noCallback() ';
        BRB.Log(logPrefix + sMethod);
	}
	
	function hideOMXContent() {		
		var sMethod = 'hideOMXContent() ';
        BRB.Log(logPrefix + sMethod);
		$("#OMX_title").hide();
		$("#OMX_image").hide();
		$("#OMZ_title").show();
	    $("#OMZ_image").show();
	    $("#personalInfo_CTM_OMZ").show();
		$("#personalInfo_CTM_OMX").hide();
		$("#personalInfo_LegalText2_OMZ_ID").show();
		$("#personalInfo_LegalText2_OMX_ID").hide();
		$("#personalInfo_LegalText20_OMZ_ID").show();
		$("#personalInfo_LegalText20_OMX_ID").hide();
	}
	
	function showOMXContent(){
		BRB.Log("showOMXContent method");
		$("#OMX_title").show();
		$("#OMX_image").show();
		$("#OMZ_title").hide();
		$("#OMZ_image").hide();
		$("#personalInfo_CTM_OMZ").hide();
		$("#personalInfo_CTM_OMX").show();
		$("#personalInfo_LegalText2_OMZ_ID").hide();
		$("#personalInfo_LegalText2_OMX_ID").show();
		$("#personalInfo_LegalText20_OMZ_ID").hide();
		$("#personalInfo_LegalText20_OMX_ID").show();
		
	  } 
	
	
	function redirectOMXCard() {
		var sMethod = 'redirectOMXCard() ';
        BRB.Log(logPrefix + sMethod);
        activationItems.getModel('overview').set('cardType', "OMX");
        showOMXContent();
	}
	
	

  };
