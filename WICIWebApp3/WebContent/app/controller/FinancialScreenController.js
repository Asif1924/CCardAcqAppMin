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

    this.show = show;
    this.init = init;
    this.hide = hide;
    this.syncUserData = syncUserData;

    // ---------------------------------------------------------------------------------------
    var refs = {
        // US3621
        jobDescription : '#finEmpInfo_JobDescription_SelectField',
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
			{ name : 'cardVISAMCAMEX', 		 value : null,  validation : null },
			{ name : 'cardBankLoan', 		 value : null,  validation : null },
			{ name : 'cardStoreCard', 		 value : null,  validation : null },
			{ name : 'cardChequingAcct', 	 value : null,  validation : null },
			{ name : 'cardGasCard', 		 value : null,  validation : null },
			{ name : 'cardSavingsAcct', 	 value : null,  validation : null },
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
    }

    // ---------------------------------------------------------------------------------------
    function restoreCreditCardData() {
        var sMethod = "restoreCreditCardData()";
        console.log(logPrefix + sMethod);

		$("#select2-finEmpInfo_JobDescription_SelectField-container").val(model.get('jobDescription'));
		$(refs.jobDescription + " [value='" + model.get('jobDescription') + "']").attr("selected", "selected");
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
			displayJobDescriptionOtherField(true);
			$(refs.jobDescriptionOther).val(model.get('jobDescriptionOther'));
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
			model.set('jobDescription', $(refs.jobDescription).val());
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
    	var sMethod = "retrieveJobDescriptionSuccess(argResponse)";
        console.log(logPrefix + sMethod + JSON.stringify(argResponse));
        
        new WICI.LoadingIndicatorController().hide();
        if(!argResponse.error) {
        	try {
				model.set('jobDescSuccessFlag', true);
				initializeJobDescSearchField();
				jobDescListResponse = argResponse;
        		populateJobDescription(jobDescListResponse);
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
			var controlRef = $(refs.jobDescription);
	        controlRef.empty();
			model.set('jobDescription', 'Other');
	        var jobDescription = model.get('jobDescription');
	
	        var optTempl = '<option value="' + "Other" + '">'
	                + translator.translateKey('finEmpInfoJobDesc_Other') + '</option>';
			console.log(logPrefix + sMethod + optTempl);
	        controlRef.append(optTempl);
			$(refs.jobDescription).addClass('fieldValuesTextField');
	
	        if (jobDescription) {
	            $(refs.jobDescription + " [value='" + jobDescription + "']").attr("selected", "selected");
				$(refs.jobDescription).prop('disabled', 'disabled');
	        }
		}

	}
	//---------------------------------------------------------------------------------------
	function hideJobDescriptionOtherField() {
		var sMethod = 'hideJobDescriptionOtherField() ';
        console.log(logPrefix + sMethod);

		$(refs.jobDescription).removeClass('fieldValuesTextField');
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
	//---------------------------------------------------------------------------------------
	function populateJobDescription(jobDescListResponse) {
        var sMethod = 'populateJobDescription() ';
        console.log(logPrefix + sMethod + JSON.stringify(jobDescListResponse.data.jobDescriptionList));

		var jobDescription = model.get('jobDescription');
		
		var controlRef = $(refs.jobDescription);
	    controlRef.empty();
	
		var jobDesc_null = '<option value="' + null + '" ' + '>' + " " + '</option>';
		controlRef.append(jobDesc_null);
	
	    $.each(jobDescListResponse.data.jobDescriptionList, function(index, item) {
			if(app.translator.getCurrentLanguage() === "en") {
				var optTempl = '<option value="' + item.storedValue + '">'
	             	+ translator.translateKey(item.englishDescription) + '</option>';
			} else {
				var optTempl = '<option value="' + item.storedValue + '">'
	                + translator.translateKey(item.frenchDescription) + '</option>';
			}
	        controlRef.append(optTempl);
	    });

		if (jobDescription) {
			$("#select2-finEmpInfo_JobDescription_SelectField-container").val(jobDescription);
            $(refs.jobDescription + " [value='" + jobDescription + "']").attr("selected", "selected");
        }
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
        //$(refs.jobTitle_SelectField).empty();
    	//$(refs.jobDescription).val(null);
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
        
		$(refs.jobDescription).on("change", function() {
       	 	console.log(refs.jobDescription + '::change');
       	 	model.set('jobDescription', $(refs.jobDescription).val());
			if($(refs.jobDescription).val().toUpperCase() == "OTHER") {
				displayJobDescriptionOtherField(true);
			} else {
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
			populateJobDescription(jobDescListResponse);
        });

        $(refs.employmentType).on("change", function() {
            console.log(refs.employmentType + '::change');
            model.set("employmentType", $(refs.employmentType).val());
            // US4636
            model.set('jobCategory', null);
            model.set('jobDescription', null);
			model.set('jobDescriptionOther', null);
			$("#select2-finEmpInfo_JobDescription_SelectField-container").empty();
			$(refs.jobDescriptionOther).val(null);
			$(refs.jobDescription + " [value='" + null + "']").attr("selected", "selected");
            $('#financialScreen_infomation_phone').hide();
            updateEmploymentType(true);
			if(!model.get('jobDescSuccessFlag')) {
				displayJobDescriptionOtherField(false);
			}
        });
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
                var errStrArr = [];
                $.each(rez, function(index, item) {
					if(item.name == "jobDescription") {
						console.log(logPrefix + sMethod + "jobDescription error");
						item.uiid = ".select2-selection.select2-selection--single";
					}
					console.log(logPrefix + sMethod + " item.uiid :: " + item.uiid);
                    errStrArr.push(translator.translateKey(item.err));
                });

                app.validationDecorator.applyErrAttribute(rez);
                return;
            }
            if(rezPhone.length>0){
            	  app.validationDecorator.applyErrAttribute(rezPhone);
                 return;
            }
        }
        if (checkGrossAnnualIncome(model.get('grossIncome')) && checkGrossAnnualHouseholdIncome(model.get('grossHouseholdIncome'))) {
            flowNext();
        }

    }
    
    // US3960
    function grossAnnualHouseholdIncome(){    	
        if (checkGrossAnnualHouseholdIncome(model.get('grossHouseholdIncome'))) {
            flowNext();
        }
    }

    function flowNext() {
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

 };
