ensureNamespaceExists();

WICI.FinancialScreenController = function(activationItems, argTranslator,
                                          argMessageDialog) {
    var logPrefix = '[WICI.FinancialScreenController]::';
    var $screenContainer = $("#FinancialScreen");
    var isDebugMode = activationItems.getModel('loginScreen').get('isDebugMode');

    var translator;
    var messageDialog;
	var flow = null;
	var prepopulatedTypes = {
        'R': '',
        'U': '',
        'H': '',
    };
	var jobDescListResponse = null; 
	var jobDescListArray = null;

    this.show = show;
    this.init = init;
    this.hide = hide;
    this.syncUserData = syncUserData;

    // ---------------------------------------------------------------------------------------
    var refs = {
        // US3621
    	jobDescription : '#finEmpInfo_JobDescription_Input_TextField',
        jobDescriptionOtherArea : '#finEmpInfo_JobDescriptionOtherArea',
        jobDescriptionOther	:	'#finEmpInfo_JobDescription_TextField',
		employmentType : '#finEmpInfo_EmplType_TextField',
		employmentArea : '#FE_EmploymentArea1',
        jobCategory : '#finEmpInfo_JobCategory_SelectField',
        employerName : '#finEmpInfo_EmployerName_TextField',
        employerCity : '#finEmpInfo_EmployerCity_TextField',
        employerPhone : '#finEmpInfo_EmployerPhone_TextField',
        howLongCurrentEmployer : '#finEmpInfo_HowLongCurrentEmployer_TextField',
        grossIncome : '#finEmpInfo_GrossIncome_TextField',
        // US3960
        grossHouseholdIncome : '#finEmpInfo_GrossHouseholdIncome_TextField',
        sin : '#finEmpInfo_SIN_TextField',
        howLongYears : '#finEmpInfo_Years_Slider',
        howLongMonthes : '#finEmpInfo_Months_Slider',
        durationRegion : '#finEmpInfo_Duration',
        months_Slider : '#finEmpInfo_Months_Slider',
        years_Slider : '#finEmpInfo_Years_Slider',
        tdGrossIncomeLable : "#finEmpInfo_GrossIncome_Lable",
        tdGrossIncomeValue : "#finEmpInfo_GrossIncome_Value",
        // US3960
        tdGrossHouseholdIncomeLable : "#finEmpInfo_GrossHouseholdIncome_Lable",
        tdGrossHouseholdIncomeValue : "#finEmpInfo_GrossHouseholdIncome_Value",

		cardVISAMCAMEX : '#flipVISAMCAMEX',
        cardBankLoan : '#flipBankLoan',
        cardStoreCard : '#flipStoreCard',
        cardChequingAcct : '#flipChequingAcct',
        cardGasCard : '#flipGasCard',
        cardSavingsAcct : '#flipSavingsAcct',        
    };

    // ---------------------------------------------------------------------------------------
    var model = new WICI.BaseModel({
        name : 'financialData',
        refs : refs,
        data : [
            { name : 'employmentType', 		 value : null, 	validation : { type : 'presence', 		message : '', group : [ 1 ] } },
			{ name : 'jobCategory', 		 value : null, 	validation : { type : 'presence', 		message : '', group : [ 1 ] } },
			{ name : 'employerName', 		 value : null, 	validation : { type : 'employerName', 	message : '', group : [ 1 ] } },
 			{ name : 'employerCity', 		 value : null, 	validation : { type : 'city', 			message : '', group : [ 1 ] } },
			{ name : 'employerPhone', 		 value : null,  validation : { type : 'phone', 			message : '', group : [ 1 ] } },
            { name : 'howLongYears', 		 value : null,	validation : { type : 'presence', 		message : '', group : [ 3 ] } },
			{ name : 'howLongMonthes', 		 value : null, 	validation : { type : 'presence', 		message : '', canBeEmpty : true, group : [ 3 ] } },
            { name : 'grossIncome', 		 value : null, 	validation : { type : 'format', 		message : '', matcher : /\d+/, group : [ 2 ] } },
            // US3960
            { name : 'grossHouseholdIncome', value : null, 	validation : { type : 'format', 		message : '', canBeEmpty : true, /*matcher : /\d+/,*/ group : [ 2 ] } },
            { name : 'sin', 				 value : null, 	validation : { type : 'sin', 			message : '', canBeEmpty : true, group : [ 2 ] } },
			{ name : 'jobDescription', 		 value : null,  validation : { type : 'presence', 		message : '', group : [ 1 ] } },
            { name : 'jobDescriptionOther',  value : null,  validation : { type : 'presence', 		message : '', group : [ 1 ] } },
			{ name : 'employmentTypeDSS', 	 value : null, 	validation : null },
			{ name : 'jobDescSuccessFlag', 	 value : null, 	validation : null, notField: true },
			{ notField: true, name: 'englishValue', value: null },
			{ notField: true, name: 'frenchValue', value: null },
			{ notField: true, name: 'storedValue', value: null },
			{ notField: true, name: 'insurance_CPType_Available', value: null },
			{ name : 'insurance_CPType_Offered',  value: null, validation: null},
			{ name : 'insurance_CPType_Selected', value: null, validation: null},
			{ name : 'cpEligibilityCheck_Counter', 		 value : null,  validation : null },
			{ name : 'cardVISAMCAMEX', 		 value : null,  validation : null },
			{ name : 'cardBankLoan', 		 value : null,  validation : null },
			{ name : 'cardStoreCard', 		 value : null,  validation : null },
			{ name : 'cardChequingAcct', 	 value : null,  validation : null },
			{ name : 'cardGasCard', 		 value : null,  validation : null },
			{ name : 'cardSavingsAcct', 	 value : null,  validation : null },
			{ notField:true,  name: 'prev_employmentType', 	validation : null, value: null },
			{ notField:true,  name: 'prev_jobCategory', 	validation : null, value: null },
			{ notField:true,  name: 'prev_jobDescription', 	validation : null, value: null },
			{ notField:true,  name: 'prev_jobDescriptionOther', validation : null, value: null },
			{ notField:true,  name: 'insuranceSelected', 	validation : null, value: null },
        ]
    });
    this.innerModel = model;

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

        createView();
        bindEvents();
        alignI_icon();
        var currentModel = activationItems.getModel(model.name);
        var currentFocus;

        if (!currentModel) {
            activationItems.addModel(model);
        } else {
            model = currentModel;
        }
        onUnHiredStatusClick();
        populateEmplTypes();
        populateJobCategories();
		hideJobDescriptionOtherField();
		retrieveJobDescription();
        restoreCreditCardData();
        setUIElementsMasks();
		if(model.get('insurance_CPType_Available') == null) {
			model.set('insurance_CPType_Available', "TBD");
		}
    }

    // ---------------------------------------------------------------------------------------
    function restoreCreditCardData() {
        var sMethod = "restoreCreditCardData()";
        console.log(logPrefix + sMethod);
        if(app.translator.getCurrentLanguage() === "en"){
        	 $(refs.jobDescription).val(model.get('englishValue'));
        }else{
        	 $(refs.jobDescription).val(model.get('frenchValue'));
        }
        closeAllLists($(refs.jobDescription));
        $(refs.jobCategory).val(model.get('jobCategory'));
        $(refs.employerName).val(model.get('employerName'));
        $(refs.employerCity).val(model.get('employerCity'));
        $(refs.employerPhone).val(model.get('employerPhone'));
        $(refs.months_Slider).val(model.get('howLongMonthes'));
        $(refs.years_Slider).val(model.get('howLongYears'));
        if (model.get('grossIncome')) {
            $(refs.grossIncome).val(model.get('grossIncome').replace(',', '.'));
        }
        // US3960
        if (model.get('grossHouseholdIncome')) {
            $(refs.grossHouseholdIncome).val(model.get('grossHouseholdIncome').replace(',', '.'));
        }
        $(refs.sin).val(model.get('sin'));
		if(model.get('jobDescription') == "Other") {
			displayJobDescriptionOtherField(false);
		}
    }
    // ---------------------------------------------------------------------------------------
    function syncUserData() {
        var sMethod = 'syncUserData() ';
        console.log(logPrefix + sMethod);

		var emplType = $(refs.employmentType).val();
		if(emplType) {
			switch (emplType) {
				case 'F':
					model.set('employmentTypeDSS', 'FULL_TIME');
					break;
				case 'S':
					model.set('employmentTypeDSS', 'SEASONAL_CONTRACT_TEMPORARY');
					break;
				case 'P':
					model.set('employmentTypeDSS', 'PART_TIME_GREATER_THAN_EQUAL_TO_25_HRS');
					break;
				case 'O':
					model.set('employmentTypeDSS', 'PART_TIME_LESS_THAN_25_HRS');
					break;
				case 'R':
					model.set('employmentTypeDSS', 'RETIRED');
					break;
				case 'H':
					model.set('employmentTypeDSS', 'HOMEMAKER');
					break;
				case 'U':
					model.set('employmentTypeDSS', 'UNEMPLOYED');
					break;
				default:
					model.set('employmentTypeDSS', null);
					break;
			}
		}

        if (!(emplType in  prepopulatedTypes)) {
            model.set('jobCategory', $(refs.jobCategory).val());
            if($(refs.jobDescription).val() == "Other"){
        		model.set('jobDescription', "Other");
        	}else{
        		if(model.get('storedValue')){
        			model.set('jobDescription', model.get('storedValue'));
        		}else{
        			model.set('jobDescription', $(refs.jobDescription).val());
        		}
        	}
			model.set('jobDescriptionOther', $(refs.jobDescriptionOther).val().toUpperCase());
            model.set('employerName', $(refs.employerName).val().toUpperCase());
            model.set('employerCity', $(refs.employerCity).val().toUpperCase());
            model.set('employerPhone', $(refs.employerPhone).val().replace(/-/g, ''));
            model.set('howLongMonthes', $(refs.months_Slider).val());
            model.set('howLongYears', $(refs.years_Slider).val());
        }
        model.set('grossIncome', $(refs.grossIncome).val().replace(/,/g, '').replace(' $ ', '').replace('.', ','));
        // US3960
        model.set('grossHouseholdIncome', $(refs.grossHouseholdIncome).val().replace(/,/g, '').replace(' $ ', '').replace('.', ','));
        model.set('sin', $(refs.sin).val());

		model.set('cardVISAMCAMEX', null);
        model.set('cardBankLoan', null);
        model.set('cardStoreCard', null);
        model.set('cardChequingAcct', null);
        model.set('cardGasCard', null);
        model.set('cardSavingsAcct', null);

        console.log(logPrefix + sMethod + ' model data: ' + model.toString());
    }
	// ---------------------------------------------------------------------------------------
	function retrieveJobDescription() {
		invokeRetrieveJobDescription(retrieveJobDescriptionSuccess, retrieveJobDescriptionFailure);
	}
	function invokeRetrieveJobDescription(argSuccessCB, argFailureCB) {
    	var sMethod = "invokeRetrieveJobDescription() :: ";
    	console.log(logPrefix + sMethod);
    	
    	new WICI.LoadingIndicatorController().show();
    	connectivityController.RetrieveJobDescription(argSuccessCB,argFailureCB);
    }
    
    function retrieveJobDescriptionSuccess(argResponse) {
    	var sMethod = "retrieveJobDescriptionSuccess()";
        console.log(logPrefix + sMethod );
        
        new WICI.LoadingIndicatorController().hide();
        if(!argResponse.error) {
        	try {
				model.set('jobDescSuccessFlag', true);
				jobDescListResponse = argResponse;
				jobDescListArray = argResponse;
        	} catch (e) {
        		console.log(logPrefix + sMethod + "Exception : " + e);
        	}
        } else {
			model.set('jobDescSuccessFlag', false);
			displayJobDescriptionOtherField(false);
		}
    }
   
    function retrieveJobDescriptionFailure(argResponse) {
    	var sMethod = "retrieveJobDescriptionFailure(argResponse)";
        console.log(logPrefix + sMethod);
        
        new WICI.LoadingIndicatorController().hide();
		model.set('jobDescSuccessFlag', false);
        displayJobDescriptionOtherField(false);
    }
    // ---------------------------------------------------------------------------------------
    function populateJobCategories() {
        var sMethod = 'populateJobCategories() ';
        console.log(logPrefix + sMethod);

        var controlRef = $(refs.jobCategory);
        controlRef.empty();
        
        var jobCategoryVal = model.get('jobCategory');

        var list = new WICI.JobCategoriesList();
        $.each(list.data, function(index, item) {
        // US3621
        	if (!($.inArray(item.value, ['HO', 'RT', 'UN']) != -1)) {
	        	if (!item.hidden) {
	                var optTempl = '<option value="' + item.value + '">'
	                    + translator.translateKey(item.text) + '</option>';
	                controlRef.append(optTempl);
	            }
            }
        });

        if (jobCategoryVal) {
            $(refs.jobCategory + " [value='" + jobCategoryVal + "']").attr(
                "selected", "selected");
        }
        var emplType, emplTypesWithDefaults;
        emplType = model.get('employmentType');
        emplTypesWithDefaults = {
            H : '',
            U : '',
            R : ''
        };
        if (emplType in emplTypesWithDefaults) {
            hideSelectOptions(refs.jobCategory);
        }
    }    
	//---------------------------------------------------------------------------------------
	function displayJobDescriptionOtherField(jobDescflag) {
		var sMethod = 'displayJobDescriptionOtherField() ';
        console.log(logPrefix + sMethod);
        $(refs.jobDescriptionOtherArea).show();
		$.each(model.data, function(index, item) {
            if(item.name == "jobDescriptionOther") {
         		item.validation.canBeEmpty = false;
         	}
        });
		
		if(!jobDescflag) {
			model.set('jobDescription', "other");
			model.set('jobDescriptionOther', translator.translateKey('finEmpInfoJobDesc_Other'));
	        $(refs.jobDescription).val(translator.translateKey('finEmpInfoJobDesc_Other'));
	        $(refs.jobDescriptionOther).val(translator.translateKey('finEmpInfoJobDesc_Other'));
			$(refs.jobDescription).addClass('fieldValuesTextField');
		}
		if(!model.get('jobDescSuccessFlag')){
			$(refs.jobDescription).prop('disabled', 'disabled');
		}else{
			$(refs.jobDescription).removeAttr('disabled');
		}
	}
	//---------------------------------------------------------------------------------------
	function hideJobDescriptionOtherField() {
		var sMethod = 'hideJobDescriptionOtherField() ';
        console.log(logPrefix + sMethod);

		$(refs.jobDescriptionOther).val(null);
		$(refs.jobDescriptionOtherArea).hide();
		$.each(model.data, function(index, item) {
            if(item.name == "jobDescriptionOther") {
         		item.validation.canBeEmpty = true;
         	}
        });
	}
	//---------------------------------------------------------------------------------------
	function initializeJobDescSearchField() {
		$(refs.jobDescription).select2({
			/* Sort data using localeCompare */
  			sorter: data => data.sort((a, b) => a.text.localeCompare(b.text)),
		});
	}
	
    function populateEmplTypes(doNotClear) {
        var sMethod = 'populateEmplTypes() ';
        console.log(logPrefix + sMethod);

        var controlRef = $(refs.employmentType);
        controlRef.empty();
        var employmentType = model.get('employmentType');

        var list = new WICI.EmploymentStatusList();
        $.each(list.data, function(index, item) {
            var optTempl = '<option value="' + item.value + '">'
                + translator.translateKey(item.text) + '</option>';
            controlRef.append(optTempl);
        });

        if (employmentType) {
            $(refs.employmentType + " [value='" + employmentType + "']").attr(
                "selected", "selected");
        }
        if (!doNotClear) {
        	updateEmploymentType();
        }
    }
    // ---------------------------------------------------------------------------------------
    function show() {
        $screenContainer.show();
        translator.run("FinancialScreen");
        app.selectorReduceHelper.init();
    }
    // ---------------------------------------------------------------------------------------
    function setUIElementsMasks() {
        // Set phone fields mask
        $(refs.employerPhone).mask('999-999-9999', {
            placeholder : "",
            useDelimeter : true,
            delimeter : '-'
        });

        $(refs.years_Slider).durationControl('createControl');
        $(refs.months_Slider).durationControl('createControl');

        $(refs.years_Slider).autoNumeric('init', {
            aSign : '',
            vMin : '0',
            vMax : '100',
            mDec : '0'
        });
        $(refs.months_Slider).autoNumeric('init', {
            aSign : '',
            vMin : '0',
            vMax : '11',
            mDec : '0'
        });

        $(refs.grossIncome).autoNumeric('init', {
            aSign : ' $ ',
            vMin : '0',
            vMax : '999999',
            mDec : '0',
            wEmpty : 'sign'
        });
        
        // US3960
        $(refs.grossHouseholdIncome).autoNumeric('init', {
            aSign : ' $ ',
            vMin : '0',
            vMax : '999999',
            mDec : '0',
            wEmpty : 'sign'
        });

        $(refs.sin).mask('999999999', {
            placeholder : ""
        });
    }
    // ---------------------------------------------------------------------------------------
    function hide() {
        $screenContainer.hide();
    }
    // ---------------------------------------------------------------------------------------
    function createView() {
        $screenContainer.empty();
        assembleNavigationBarAtTop();
        // US4637
        WICI.BreadcrumbsHelper.assembleBreadcrumbs(4, $screenContainer, activationItems);
        assemblePageHTML($screenContainer, "#WICIFinancialScreen-template");
        assembleNavigationBarAtBottom();
        $screenContainer.addClass("breadcrumbPadding");
        $('#financialScreen_infomation_phone').hide();
    }
    // ---------------------------------------------------------------------------------------
    function assembleNavigationBarAtTop() {
        $("#pageHeader-template").template("pageHeader");
        $.tmpl("pageHeader", {
            "logo_En" : translator.currentLanguageEnglish(),
            "previousButtonId" : "FinancialScreen_PrevButton",
            "nextButtonId" : "FinancialScreen_NextButton",
            "settingsButtonId" : "FinancialScreen_SettingsButton"
        }).appendTo("#FinancialScreen");
    }
    // ---------------------------------------------------------------------------------------
    function assembleNavigationBarAtBottom(){
        $("#pageFooter-template").template("pageFooter");
        $.tmpl("pageFooter", {
            "previousButtonId" : "FinancialScreen_PrevButton",
            "nextButtonId" : "FinancialScreen_NextButton"
            }
        ).appendTo("#FinancialScreen");
    }
    // ---------------------------------------------------------------------------------------
    function assemblePageHTML($element, templateName) {
        $(templateName).tmpl().appendTo($element);
    }
    // ---------------------------------------------------------------------------------------
    function updateEmploymentType(ignoreCategory) {
        clearGrossIncomeTableRowStyles();
        app.validationDecorator.clearErrArrtibute();

        switch (model.get('employmentType')) {
            case 'F':
                onHiredStatusClick();
                break;
            case 'S':
                onHiredStatusClick();
                break;
			case 'P':
                onHiredStatusClick();
                break;
            case 'O':
                onHiredStatusClick();
                break;
            case 'H':
                onPrepopulatedStatusClick('HO', 'finEmpInfo_Homemaker');
                break;
            case 'R':
                onPrepopulatedStatusClick('RT', 'finEmpInfo_Retired');
                break;
            case 'U':
                onPrepopulatedStatusClick('UN', 'finEmpInfo_Unemployed');
                break;
            default:
                onUnHiredStatusClick(ignoreCategory);
                break;
        }
    }

    function blankDetails () {
        $(refs.jobCategory).val(null);
        $(refs.employerName).val(null);
        $(refs.employerCity).val(null);
        $(refs.employerPhone).val(null);
        $(refs.months_Slider).val(null);
        $(refs.years_Slider).val(null);
    	$(refs.jobDescription).val(null);
    }

    function onHiredStatusClick() {
        $(refs.jobDescriptionOtherArea).hide();  	
    	
        blankDetails();
        $(refs.jobCategory + " [value='" + 'null' + "']").attr(
            "selected", "selected");
        showSelectOptions(refs.jobCategory);

        $(refs.employmentArea).show();

        $(refs.tdGrossIncomeLable).addClass('fieldLabelsCell');
        $(refs.tdGrossIncomeValue).addClass('fieldValuesCell');
        // US3960
        $(refs.tdGrossHouseholdIncomeLable).addClass('fieldLabelsCell');
        $(refs.tdGrossHouseholdIncomeValue).addClass('fieldValuesCell');

        $(refs.employmentArea).show();
        $(refs.tdGrossIncomeLable).addClass('withBorderTop');
        $(refs.tdGrossIncomeValue).addClass('withBorderTop');
        // US3960
        $(refs.tdGrossHouseholdIncomeLable).addClass('withBorderTop');
        $(refs.tdGrossHouseholdIncomeValue).addClass('withBorderTop');
    }

    function onUnHiredStatusClick(category, categoryTranslationKey, ignoreCategory) {
        blankDetails();

        if(!!category && !!categoryTranslationKey) {
        	$(refs.jobCategory).val(category);
            $(refs.jobCategory).trigger('change');
            model.set('jobCategory', category);
            $(refs.jobCategory + " [value='" + category + "']").attr("selected", "selected");
            hideSelectOptions(refs.jobCategory, category);
        }

        $(refs.tdGrossIncomeLable).addClass('fieldLabelsCell');
        $(refs.tdGrossIncomeValue).addClass('fieldValuesCell');
        // US3960
        $(refs.tdGrossHouseholdIncomeLable).addClass('fieldLabelsCell');
        $(refs.tdGrossHouseholdIncomeValue).addClass('fieldValuesCell');

        $(refs.employmentArea).show();
        $(refs.tdGrossIncomeLable).addClass('withBorderTop');
        $(refs.tdGrossIncomeValue).addClass('withBorderTop');
        // US3960
        $(refs.tdGrossHouseholdIncomeLable).addClass('withBorderTop');
        $(refs.tdGrossHouseholdIncomeValue).addClass('withBorderTop');
    }

    function onPrepopulatedStatusClick(category, title) {
        var addressModel = activationItems.getModel('personalData2_Address');
        var _title = translator.translateKey(title);
        model.set('jobCategory', category);
        model.set('employerName', _title);
		console.log("onPrepopulatedStatusClick() :: jobCategory : " + model.get('jobCategory') + ' :: employerName : ' + model.get('employerName'));
        model.set('jobDescription', _title);

        model.set('employerCity',addressModel.get('city_prev')||addressModel.get('city'));
        model.set('howLongYears',99);

        $(refs.tdGrossIncomeLable).addClass('fieldLabelsTopCell');
        $(refs.tdGrossIncomeValue).addClass('fieldValuesTopCell');
        // US3960
        $(refs.tdGrossHouseholdIncomeLable).addClass('fieldLabelsCell');
        $(refs.tdGrossHouseholdIncomeValue).addClass('fieldValuesCell');

        $(refs.employmentArea).hide();
        $(refs.tdGrossIncomeLable).removeClass('withBorderTop');
        $(refs.tdGrossIncomeValue).removeClass('withBorderTop');
        // US3960
        $(refs.tdGrossHouseholdIncomeLable).addClass('withBorderTop');
        $(refs.tdGrossHouseholdIncomeValue).addClass('withBorderTop');
    }

    function clearGrossIncomeTableRowStyles() {
        $(refs.tdGrossIncomeLable).removeClass('fieldLabelsCell');
        $(refs.tdGrossIncomeValue).removeClass('fieldValuesCell');
        // US3960
        $(refs.tdGrossHouseholdIncomeLable).addClass('fieldLabelsCell');
        $(refs.tdGrossHouseholdIncomeValue).addClass('fieldValuesCell');

        $(refs.tdGrossIncomeLable).removeClass('fieldLabelsTopCell');
        $(refs.tdGrossIncomeValue).removeClass('fieldValuesTopCell');
        // US3960
        $(refs.tdGrossHouseholdIncomeLable).addClass('withBorderTop');
        $(refs.tdGrossHouseholdIncomeValue).addClass('withBorderTop');
    }
    // ---------------------------------------------------------------------------------------
    function bindEvents() {
        $('.FinancialScreen_NextButton').click(function() {
            showNextScreen();
        });
        $('.FinancialScreen_PrevButton').click(function() {
            showPrevScreen();
        });

        $(refs.jobCategory).on("change", function() {
            console.log(refs.jobCategory + '::change');
            model.set("jobCategory", $(refs.jobCategory).val());
        });
               
        $(refs.jobDescription).live("input", function(e) {
          	console.log(refs.jobDescription + '::input');
          	$(refs.jobDescription).addClass('fieldValuesTextField');
          	populatejobDescriptionList($(refs.jobDescription));      
  	  	});
       
     	$(refs.jobDescription).on("change", function() {
       	 	console.log(refs.jobDescription + '::change');
       	 	if(model.get('jobDescSuccessFlag')){
       	 		if($(refs.jobDescription).val()){
        	 	   model.set('jobDescription',model.get('storedValue'));
        	 	}
       	 	}else{
       	 	   model.set('englishValue', "");
               model.set('frenchValue', "");
               model.set('storedValue', "");
       	 	   model.set('jobDescription',$(refs.jobDescription).val());
       	 	}
       	 	
			if($(refs.jobDescription).val() == "Other") {
				jobDescriptionOtherField(model.get('englishValue'));
			}else if($(refs.jobDescription).val() == "Autre"){
				jobDescriptionOtherField(model.get('frenchValue'));
			}else {
				hideJobDescriptionOtherField();
			}
      	});
	  	$(refs.jobDescriptionOther).live('paste, input', function(e) {
            var self = $(this);
            setTimeout(function() {
                if(self.val().length > 19) {
                    self.val(self.val().substring(0, 19));
                }
            },100);
            closeAllLists();
        });

        $.subscribe('translatorFinished', function() {
            console.log(refs.employmentType + 'subscribe(translatorFinished)');
            // US4636
            $(refs.employmentType).val(model.get("employmentType"));           
            populateEmplTypes(true);
            $(refs.employmentType).val(model.get("employmentType"));
			populateJobCategories();
            $(refs.jobCategory).val(model.get("jobCategory"));
            alignI_icon();
            populatejobDescriptionList($(refs.jobDescription));
            if(app.translator.getCurrentLanguage() === "en"){
            	if($(refs.jobDescription).val() !=''){
            		$(refs.jobDescription).val(model.get('englishValue'));
            		closeAllLists();
            	}
            }else{
            	if($(refs.jobDescription).val() !=''){
            		$(refs.jobDescription).val(model.get('frenchValue'));
            		closeAllLists();
            	}
            }
        });

        $(refs.employmentType).on("change", function() {
            console.log(refs.employmentType + '::change');
            model.set("employmentType", $(refs.employmentType).val());
            // US4636
            model.set('jobCategory', null);
			model.set('jobDescriptionOther', null);
			// VZE-566
			model.set('jobDescription', null);
			$(refs.jobDescriptionOther).val(null);
			$(refs.jobDescription).val(null);
            $('#financialScreen_infomation_phone').hide();
            updateEmploymentType(true);
			if(!model.get('jobDescSuccessFlag')) {
				displayJobDescriptionOtherField(false);
			}
        });
    }
    
    function populatejobDescriptionList(jdInput){
    	var sMethod = 'populatejobDescriptionList(jdInput) ';
        console.log(logPrefix + sMethod + "jdInput : " + jdInput);
        console.log(logPrefix + sMethod +  JSON.stringify(jobDescListArray.data.jobDescriptionList));
        var a, b, i;
        var val= jdInput.val();
        var enValue;
        var frValue;
        var stValue;
	      //close any already open lists of autocompleted values
	      closeAllLists();
	      if (!val) { return false;}
	      currentFocus = -1;
	      //create a DIV element that will contain the items (values):
	      a = document.createElement("DIV");
	      a.setAttribute("id", "jobDescription" + "autocomplete-list");
	      a.setAttribute("class", "autocomplete-items");
	      //append the DIV element as a child of the autocomplete container:
	      const menu = document.querySelector("#finEmpInfo_JobDescription_Input_TextField");
	      menu.parentNode.appendChild(a);
	      //this.parentNode.appendChild(a);
	      //for each item in the array.
	      console.log("jobDescription :: "+  JSON.stringify(jobDescListArray.data.jobDescriptionList));
	      const filteredDataEnglish = jobDescListArray.data.jobDescriptionList.filter(item => item.englishDescription.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toUpperCase().includes(val.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toUpperCase()));
	      const filteredDataFrench = jobDescListArray.data.jobDescriptionList.filter(item => item.frenchDescription.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toUpperCase().includes(val.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toUpperCase()));
	      console.log("jobDescription :: filteredDataEnglish : " + JSON.stringify(filteredDataEnglish));
	      console.log("jobDescription :: filteredDataFrench : " + JSON.stringify(filteredDataFrench));
	      if(app.translator.getCurrentLanguage() === "en"){
	    	  //English JD
	    	  for (i = 0; i < filteredDataEnglish.length; i++){
	  	          //create a DIV element for each matching element:
	  	          b = document.createElement("DIV");
	  	          //make the matching letters bold:
	  	          b.innerHTML += filteredDataEnglish[i].englishDescription;
	  	          //insert a input field that will hold the current array item's value:
	  	          b.innerHTML += "<input type='hidden' value='" + filteredDataEnglish[i].englishDescription + "'>";
	  	          b.innerHTML += "<input type='hidden' value='" + filteredDataEnglish[i].frenchDescription + "'>";
	  	          b.innerHTML += "<input type='hidden' value='" + filteredDataEnglish[i].storedValue + "'>";
	  	          //execute a function when someone clicks on the item value (DIV element):
	  	          b.addEventListener("click", function(e) {
	  	          //insert the value for the autocomplete text field:
	  	              enValue = filteredDataEnglish[$(this).index()].englishDescription;
	  	              frValue = filteredDataEnglish[$(this).index()].frenchDescription;
	  	              stValue = filteredDataEnglish[$(this).index()].storedValue;
	  	              model.set('englishValue', enValue);
	  	              model.set('frenchValue', frValue);
	  	              model.set('storedValue', stValue);
	  	              $(refs.jobDescription).val(enValue);
	  	              jobDescriptionOtherField(enValue);
	  	              model.set('jobDescription', stValue);
	  	              //close the list of autocompleted values,
	  	              // (or any other open lists of autocompleted values:*/
	  	              closeAllLists();
	  	          });
	  	          a.appendChild(b);
	    	  }
	      }else{
	    	  // French JD
	    	  for (i = 0; i < filteredDataFrench.length; i++){
	  	          //create a DIV element for each matching element:
	  	          b = document.createElement("DIV");
	  	          //make the matching letters bold:
	  	          b.innerHTML += filteredDataFrench[i].frenchDescription;
	  	          //insert a input field that will hold the current array item's value:
	  	          b.innerHTML += "<input type='hidden' value='" + filteredDataFrench[i].englishDescription + "'>";
	  	          b.innerHTML += "<input type='hidden' value='" + filteredDataFrench[i].frenchDescription + "'>";
	  	          b.innerHTML += "<input type='hidden' value='" + filteredDataFrench[i].storedValue + "'>";
	  	          //execute a function when someone clicks on the item value (DIV element):
	  	          b.addEventListener("click", function(e) {
	  	          //insert the value for the autocomplete text field:
	  	              enValue = filteredDataFrench[$(this).index()].englishDescription;
	  	              frValue = filteredDataFrench[$(this).index()].frenchDescription;
	  	              stValue = filteredDataFrench[$(this).index()].storedValue;
	  	              model.set('englishValue', enValue);
	  	              model.set('frenchValue', frValue);
	  	              model.set('storedValue', stValue);
	  	              $(refs.jobDescription).val(frValue);
	  	              jobDescriptionOtherField(frValue);
	  	              model.set('jobDescription', stValue);
	  	              //close the list of autocompleted values,
	  	              // (or any other open lists of autocompleted values:*/
	  	              closeAllLists();
	  	          });
	  	          a.appendChild(b);
	    	  }
	      }
    }
    //--------------------------------------------------------------------------------------------
    function  jobDescriptionOtherField(jobDescValue){
    	sMethod = "jobDescriptionOtherField(jobDescValue)";
    	console.log(sMethod + "jobDescValue :: " + jobDescValue);
   	    console.log(refs.jobDescription + '::value ' + $(refs.jobDescription).val());
		if(jobDescValue == "Other" || jobDescValue == "Autre") {
			$(refs.jobDescriptionOther).val(translator.translateKey('finEmpInfoJobDesc_Other'));
			displayJobDescriptionOtherField(false);
		} else {
			hideJobDescriptionOtherField();
		}
    }
 	// ---------------------------------------------------------------------------------------
	function alignI_icon() {
		if(app.translator.getCurrentLanguage() === "en") {
        	$('#financialScreen_infomation_phone').addClass('financial_info_i_en');
        	$('#financialScreen_infomation_phone').removeClass('financial_info_i_fr');
        } else {
        	$('#financialScreen_infomation_phone').removeClass('financial_info_i_en');
        	$('#financialScreen_infomation_phone').addClass('financial_info_i_fr');
        }
	}
    // ---------------------------------------------------------------------------------------
    function showPrevScreen() {
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

            var rez;
            // VZE-279
            let rezPhone = [];
            var employmentType = model.get('employmentType');
            let employeePhone = model.get('employerPhone');
            // VZE-286 : New phone number field validation 
            var employeePhoneValidate = app.validationDecorator.phoneValidation($(refs.employerPhone).val() , refs.employerPhone, true );
            if(!employeePhoneValidate){
            	rezPhone.push(refs.employerPhone);
            	$(refs.employerPhone).addClass('errorField');
            	app.validationDecorator.focusControl(refs.employerPhone);
            	$('#financialScreen_infomation_phone').show();
            }else{
            	$('#financialScreen_infomation_phone').hide();
            }
            
            // group 2 validation only
            //if (employmentType == 'R' || employmentType == 'H' || employmentType == 'U') {
            //    rez = model.validate(2);
            //} else {
                rez = employmentType in prepopulatedTypes ? [] : model.validate(1);
                var rez1 = model.validate(2);
                var rez3 = employmentType in prepopulatedTypes ? [] : model.validate(4);
                var rez2 = model.validate(3);
                if (rez2.length == 2) {
                    rez2.splice(1);
                    rez2[0].uiid = refs.durationRegion;
                } else {
                    if (rez2.length == 1) {
                        if ((model.get('howLongYears') == '0' && model
                            .get('howLongMonthes') == '')
                            || (model.get('howLongYears') == '' && model
                                .get('howLongMonthes') == '0')) {
                            rez2[0].uiid = refs.durationRegion;
                        } else {
                            rez2 = [];
                        }
                    } else {
                        rez2 = [];
                    }
                }
                
                rez = rez.concat(rez1, rez2, rez3);
           //}
            
            if (rez.length > 0) {
                app.validationDecorator.applyErrAttribute(rez);
                return;
            }
            if(rezPhone.length>0){
            	  app.validationDecorator.applyErrAttribute(rezPhone);
                 return;
            }
        }
        if (checkGrossAnnualIncome(model.get('grossIncome')) && checkGrossAnnualHouseholdIncome(model.get('grossHouseholdIncome'))) {
			cpEligibilityConditionCheck();
        }

    }
    // US3960
    function grossAnnualHouseholdIncome(){   
		var sMethod = "grossAnnualHouseholdIncome() :: "; 	
        if (checkGrossAnnualHouseholdIncome(model.get('grossHouseholdIncome'))) {
            cpEligibilityConditionCheck();
        }
    }
	function cpEligibilityConditionCheck() {
		var sMethod = "checkCPEligibility() :: ";
    	console.log(logPrefix + sMethod);

		if(preCheckConditions()) {
			console.log(logPrefix + sMethod + " previous values :: " + model.get('prev_employmentType') + " " + model.get('prev_jobCategory') + " "
				 + model.get('prev_jobDescription') + " " + model.get('prev_jobDescriptionOther'));
			console.log(logPrefix + sMethod + " current values :: " + model.get('employmentTypeDSS') + " " + model.get('jobCategory') + " "
				 + model.get('jobDescription') + " " + model.get('jobDescriptionOther'));
			// First time page loads, then call CP Check eligibility
			if(model.get('prev_employmentType') == null && model.get('prev_jobCategory') == null &&
				model.get('prev_jobDescription') == null && model.get('prev_jobDescriptionOther') == null) {
				model.set('cpEligibilityCheck_Counter', getCPCheckCounter() + 1);
				console.log(logPrefix + sMethod + " First time page loads : " + model.get('cpEligibilityCheck_Counter'));
				checkCPEligibility(checkCPEligibilitySuccess, checkCPEligibilityFailure);
			} else if(model.get('prev_employmentType') != model.get('employmentTypeDSS') || model.get('prev_jobCategory') != model.get('jobCategory') ||
				model.get('prev_jobDescription') != model.get('jobDescription') || model.get('prev_jobDescriptionOther') != model.get('jobDescriptionOther') ||
				activationItems.getModel('personalData2_Address').get('editedCPFlag')) {
				model.set('insurance_CPType_Available', "TBD");
				model.set('cpEligibilityCheck_Counter', getCPCheckCounter() + 1);
				console.log(logPrefix + sMethod +" Value changes in model : " + model.get('cpEligibilityCheck_Counter'));
				if(model.get('insurance_CPType_Available') == "TBD") {
					checkCPEligibility(checkCPEligibilitySuccess, checkCPEligibilityFailure);						
				} else {
					flowNext();
				}	
			} else {
				flowNext();
			}
		} else {
			// These conditions are not eligible for Insurance
			model.set('insurance_CPType_Available', "NONE");
			model.set('insurance_CPType_Offered', "");
			model.set('insurance_CPType_Selected', "");
			flowNext();
		}
	} 
	// ---------------------------------------------------------------------------------------
	function checkCPEligibility(argSuccessCB, argFailureCB) {
    	var sMethod = "checkCPEligibility() :: ";
    	console.log(logPrefix + sMethod);
    	
		var dateOfBirth = activationItems.getModel('personalData').get('birthDate'),
		jobCategory = model.get('jobCategory'),
		jobStatus = model.get('employmentTypeDSS'),
		province = activationItems.getModel('personalData2_Address').get('province'),
		productCode = activationItems.getModel('chooseProductModel').get('productCard'),
		jobDescription = "",
		correlationID = activationItems.getModel('contactInfoScreen').get('applicationReferenceID');
		if(model.get('jobDescription') == "Other") {
			jobDescription = model.get('jobDescriptionOther');
		} else {
			jobDescription = model.get('jobDescription');
		}
    	new WICI.LoadingIndicatorController().show();
    	connectivityController.CheckCPEligibility(dateOfBirth,jobCategory,jobStatus,province,productCode,jobDescription,correlationID,argSuccessCB,argFailureCB);
    }
    
    function checkCPEligibilitySuccess(argResponse) {
    	var sMethod = "checkCPEligibilitySuccess(argResponse)";
        console.log(logPrefix + sMethod + JSON.stringify(argResponse));
        
        new WICI.LoadingIndicatorController().hide();
		if(!argResponse.error) {
        	try {
				model.set('insurance_CPType_Available', argResponse.data.cpType);
				model.set('insurance_CPType_Offered', argResponse.data.cpType);
        	} catch (e) {
        		console.log(logPrefix + sMethod + "Exception : " + e);
        	}
        } else if(argResponse.error){
			model.set('insurance_CPType_Available', "NONE");
			model.set('insurance_CPType_Offered', "ERROR");
			model.set('insurance_CPType_Selected', "");
		}
		flowNext();
    }
   
    function checkCPEligibilityFailure(argResponse) {
    	var sMethod = "checkCPEligibilityFailure(argResponse)";
        console.log(logPrefix + sMethod);
        
        new WICI.LoadingIndicatorController().hide();
		model.set('insurance_CPType_Available', "NONE");
		model.set('insurance_CPType_Offered', "ERROR");
		model.set('insurance_CPType_Selected', "");
		flowNext();
    }

	function getCPCheckCounter() {
    	var sMethod = 'getCPCheckCounter() ';
    	console.log(logPrefix + sMethod);

    	var counter = 0;
    	try {
    		if (model.get('cpEligibilityCheck_Counter') !== null && model.get('cpEligibilityCheck_Counter') !=='') {
    			counter = parseInt(model.get('cpEligibilityCheck_Counter'));
    		}
    	} catch(ex) {
        	console.log(logPrefix + sMethod + " Exception: " + ex);
    	}
        return counter;
    }

	function preCheckConditions() {
		var sMethod = 'preCheckConditions() ';
        console.log(logPrefix + sMethod);

		var enableOP = false;
	   	if( activationItems.getModel('loginScreen').get('employerID').toUpperCase() !== "E") {
	    	enableOP = true;
	    }
	    console.log(logPrefix + sMethod + activationItems.getModel('loginScreen').get('outletProvince'));
	    if( activationItems.getModel('loginScreen').get('outletProvince') != null){
	    	if (activationItems.getModel('loginScreen') .get('outletProvince') === 'SK' || activationItems.getModel('loginScreen') .get('outletProvince') === 'MB') {
	 			if (activationItems.getModel('loginScreen').get('employerID').toUpperCase() === 'K') {
	 				enableOP = true;
	 			} else {
	 				enableOP = false;
	 			}
	 		}
			if (activationItems.getModel('loginScreen') .get('outletProvince') === 'YT') {
				enableOP = false;
	    	}
			if (activationItems.getModel('loginScreen') .get('outletProvince')  === 'AB') {
				enableOP = false;
			}
			if (activationItems.getModel('loginScreen') .get('outletProvince') === 'QC') {
				if (activationItems.getModel('loginScreen').get('employerID').toUpperCase() === 'C' || activationItems.getModel('loginScreen').get('employerID') === 'K') {
					enableOP= true;
				} else {
					enableOP= false;
				}
			}
	    }   	 
		if (activationItems.getModel('personalData') != null && activationItems.getModel('personalData').get('placeofissue') != null && activationItems.getModel('personalData').get('placeofissue') === 'YT'){
			 if (activationItems.getModel('loginScreen').get('employerID').toUpperCase() !== 'E') {
				 enableOP= true;
			 }
	    }
		if ( activationItems.getModel('personalData2_Address') != null && activationItems.getModel('personalData2_Address').get('province') != null && activationItems.getModel('personalData2_Address').get('province') === 'YT') {
			if (activationItems.getModel('loginScreen').get('employerID') !== 'E') {
				 enableOP= true;
			}
		}
		if (activationItems.getModel('personalData') != null){
			var personalDataModel = activationItems.getModel('personalData');
		    console.log(" age "+personalDataModel.get('age'));
		    if(personalDataModel.get('age') > 76) {
		        enableOP= false;
		    }
		}
		if(model.get('employmentTypeDSS') == "UNEMPLOYED") {
	    	enableOP = false;
	    }
	    console.log(logPrefix + sMethod + " enableOP :: " + enableOP);
    	return enableOP;
	} 
	
    function flowNext() {
		var sMethod = 'flowNext() :: ';
		
		var empType = model.get('employmentTypeDSS'), jobCat = model.get('jobCategory'),
		jobDesc = model.get('jobDescription'), jobDescOt = model.get('jobDescriptionOther');
		console.log(logPrefix + sMethod + empType + " " + jobCat + " " + jobDesc + " " + jobDescOt);
		model.set('prev_employmentType', empType);
        model.set('prev_jobCategory', jobCat);
		model.set('prev_jobDescription', jobDesc);
        model.set('prev_jobDescriptionOther', jobDescOt);
		console.log(logPrefix + sMethod + model.get('prev_employmentType') + " " + model.get('prev_jobCategory')
		 + " " + model.get('prev_jobDescription') + " " + model.get('prev_jobDescriptionOther'));
        flow.next();
    }

    function checkGrossAnnualIncome(value) {
        var sMethod = '[checkGrossAnnualIncome() value = ] ' + value;

        if (value === null || value === '') {
            return true;
        }

        try {
            var grossAnnualIncome = parseInt(value);

            if (grossAnnualIncome <= 4999) {
                var message = translator
                    .translateKey('financialData_grossIncomeError1')
                    + value.replace(',', '.').replace(
                        /(\d)(?=(\d{3})+\b)/g, '$1,')
                    + translator
                        .translateKey('financialData_grossIncomeError2');
                messageDialog.htmlConfirm(message, grossAnnualHouseholdIncome,
                    highlightGrossAnnualIncome);
                return false;
            }
		        } 
        catch (error) {
			if (isDebugMode) {
				messageDialog.info(error, translator
                        .translateKey('errorDialog_defaultTitle'));
				return false;
			} else {
				console.log(sMethod + ' ERROR!!!!:' + err);
			}
		}
        return true;
    }

    // US3960
    function checkGrossAnnualHouseholdIncome(value) {
        var sMethod = '[checkGrossAnnualHouseholdIncome() value = ] ' + value;

        if (value === null || value === '') {
            return true;
        }

        try {
            var grossAnnualHouseholdIncomeval = parseInt(value);

            if (grossAnnualHouseholdIncomeval <= 4999) {
                var message = translator
                    .translateKey('financialData_grossHouseholdIncomeError1')
                    + value.replace(',', '.').replace(
                        /(\d)(?=(\d{3})+\b)/g, '$1,')
                    + translator
                        .translateKey('financialData_grossHouseholdIncomeError2');
                messageDialog.htmlConfirm(message, flowNext,
                		highlightGrossAnnualHouseholdIncome);
                return false;
            }
        } catch (error) {
        	if(isDebugMode){
				messageDialog.info(error, translator
                        .translateKey('errorDialog_defaultTitle'));
				return false;
        	}
        	else{
            console.log(sMethod + ' ERROR!!!!:' + err);
        	}
        }
        return true;
    }
    
    function highlightGrossAnnualIncome() {
        var rez = [];
        rez.push({
            name : 'grossIncome',
            err : '',
            uiid : refs.grossIncome
        });
        app.validationDecorator.applyErrAttribute(rez);
    }
    // US3960
    function highlightGrossAnnualHouseholdIncome() {
        var rez = [];
        rez.push({
            name : 'grossHouseholdIncome',
            err : '',
            uiid : refs.grossHouseholdIncome
        });
        app.validationDecorator.applyErrAttribute(rez);
    }

    function hideSelectOptions(dropdown, option) {
        var options = $(dropdown).children(), len = options.length;
        for (var i = 0; i < len; i++) {
            $(options[i]).css('display', 'none');
        }
    }

    function showSelectOptions(dropdown) {
        var options = $(dropdown).children(), len  = options.length;
        for (var i = 0; i < len; i++) {
             $(options[i]).css('display', '');
        }
    }
    //VZE-566
    function closeAllLists(elmnt) {
	    /*close all autocomplete lists in the document,
	    except the one passed as an argument:*/
    	var sMethod = "closeAllLists()";
    	console.log(logPrefix + sMethod);
	    var x = document.getElementsByClassName("autocomplete-items");
	    for (var i = 0; i < x.length; i++) {
	      if (elmnt != x[i] && elmnt != $(refs.jobDescription)) {
	      x[i].parentNode.removeChild(x[i]);
	    }
	  }
	}

 };
