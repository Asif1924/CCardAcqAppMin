ensureNamespaceExists();

WICI.FinancialScreenController = function(activationItems, argTranslator,
                                          argMessageDialog) {
    var logPrefix = '[WICI.FinancialScreenController]::';

    var $screenContainer = $("#FinancialScreen");

    var translator;
    var messageDialog;

    this.show = show;
    this.init = init;
    this.hide = hide;

    var flow = null;

    var prepopulatedTypes = {
        'R': '',
        'U': '',
        'H': "",
    };


    this.syncUserData = syncUserData;

    // ---------------------------------------------------------------------------------------

    var refs = {
        jobTitle : '#finEmpInfo_JobTitle_TextField',
        // US3621
        jobTitleOtherArea : '#finEmpInfo_JobTitleOtherArea',
        jobTitle_SelectField	:	'#finEmpInfo_JobTitle_SelectField',
        jobCategory : '#finEmpInfo_JobCategory_SelectField',
        employerName : '#finEmpInfo_EmployerName_TextField',

        employerCity : '#finEmpInfo_EmployerCity_TextField',

        employerPhone : '#finEmpInfo_EmployerPhone_TextField',
        howLongCurrentEmployer : '#finEmpInfo_HowLongCurrentEmployer_TextField',

        grossIncome : '#finEmpInfo_GrossIncome_TextField',
        // US3960
        grossHouseholdIncome : '#finEmpInfo_GrossHouseholdIncome_TextField',

        sin : '#finEmpInfo_SIN_TextField',

        employmentType : '#finEmpInfo_EmplType_TextField',

        howLongYears : '#finEmpInfo_Years_Slider',
        howLongMonthes : '#finEmpInfo_Months_Slider',

        cardVISAMCAMEX : '#flipVISAMCAMEX',
        cardBankLoan : '#flipBankLoan',
        cardStoreCard : '#flipStoreCard',
        cardChequingAcct : '#flipChequingAcct',
        cardGasCard : '#flipGasCard',
        cardSavingsAcct : '#flipSavingsAcct',
        employmentArea : '#FE_EmploymentArea1',

        durationRegion : '#finEmpInfo_Duration',
        months_Slider : '#finEmpInfo_Months_Slider',
        years_Slider : '#finEmpInfo_Years_Slider',

        tdGrossIncomeLable : "#finEmpInfo_GrossIncome_Lable",
        tdGrossIncomeValue : "#finEmpInfo_GrossIncome_Value",
        // US3960
        tdGrossHouseholdIncomeLable : "#finEmpInfo_GrossHouseholdIncome_Lable",
        tdGrossHouseholdIncomeValue : "#finEmpInfo_GrossHouseholdIncome_Value",        
        
        flipVISAMCAMEX_no : "#flipVISAMCAMEX_no",
        flipVISAMCAMEX_yes : "#flipVISAMCAMEX_yes",
        flipBankLoan_no : "#flipBankLoan_no",
        flipBankLoan_yes : "#flipBankLoan_yes",
        flipStoreCard_no : "#flipStoreCard_no",
        flipStoreCard_yes : "#flipStoreCard_yes",
        flipChequingAcct_no : "#flipChequingAcct_no",
        flipChequingAcct_yes : "#flipChequingAcct_yes",
        flipGasCard_no : "#flipGasCard_no",
        flipGasCard_yes : "#flipGasCard_yes",
        flipSavingsAcct_no : "#flipSavingsAcct_no",
        flipSavingsAcct_yes : "#flipSavingsAcct_yes"

    };

    // ---------------------------------------------------------------------------------------

    var model = new WICI.BaseModel({
        name : 'financialData',
        refs : refs,
        data : [

            {
                name : 'cardVISAMCAMEX',
                value : null,
                validation : null
            }, {
                name : 'cardBankLoan',
                value : null,
                validation : null
            }, {
                name : 'cardStoreCard',
                value : null,
                validation : null
            }, {
                name : 'cardChequingAcct',
                value : null,
                validation : null
            }, {
                name : 'cardGasCard',
                value : null,
                validation : null
            }, {
                name : 'cardSavingsAcct',
                value : null,
                validation : null
            },

            {
                name : 'employmentType',
                value : null,
                validation : {
                    type : 'presence',
                    message : '',
                    group : [ 1 ]
                }
            },
			// US3621
            {
                name : 'jobTitle',
                value : null,
                validation : {
                    type : 'jobTitle',
                    message : 'financialData_validation_jobTitle',
                    group : [ 1 ]
                }
            },
            {
                name : 'jobTitle_SelectField',
                value : null,
                validation : {
                    type : 'presence',
                    message : 'financialData_validation_jobTitle',
                    group : [ 1 ]
                }
            },
            {
                name : 'jobTitle_temp',
                value : null,
                validation : null
            },{
                name : 'jobCategory',
                value : null,
                validation : {
                    type : 'presence',
                    message : 'financialData_validation_jobCategory',
                    group : [ 1 ]
                }
            }, {
                name : 'employerName',
                value : null,
                validation : {
                    type : 'employerName',
                    message : 'financialData_validation_employerName',
                    group : [ 1 ]
                }
            },

            {
                name : 'employerCity',
                value : null,
                validation : {
                    type : 'city',
                    message : 'financialData_validation_employerCity',
                    group : [ 1 ]
                }
            }, {
                name : 'employerPhone',
                value : null,
                validation : {
                    type : 'phone',
                    message : '',
                    canBeEmpty : true,
                    group : [ 1 ]
                }
            },

            {
                name : 'howLongYears',
                value : null,
                validation : {
                    type : 'presence',
                    message : '',
                    group : [ 3 ]
                }
            }, {
                name : 'howLongMonthes',
                value : null,
                validation : {
                    type : 'presence',
                    message : '',
                    group : [ 3 ]
                }
            },

            {
                name : 'grossIncome',
                value : null,
                validation : {
                    type : 'format',
                    message : 'financialData_validation_grossIncome',
                    matcher : /\d+/,
                    group : [ 2 ]
                }
            },
            // US3960
            {
                name : 'grossHouseholdIncome',
                value : null,
                validation : {
                    type : 'format',
                    message : 'financialData_validation_grossHouseholdIncome',
                    canBeEmpty : true,
                    /*matcher : /\d+/,*/
                    group : [ 2 ]
                }
            },
            {
                name : 'sin',
                value : null,
                validation : {
                    type : 'sin',
                    message : 'financialData_validation_sin',
                    canBeEmpty : true,
                    group : [ 2 ]
                }
            }

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

        createView();
        bindEvents();

        var currentModel = activationItems.getModel(model.name);

        if (!currentModel) {
            activationItems.addModel(model);
        } else {
            model = currentModel;
        }
        onUnHiredStatusClick();
        populateEmplTypes();

        populateJobCategories();

        restoreCreditCardData();

        setUIElementsMasks();

        createFlips();
    }

    // ---------------------------------------------------------------------------------------

    function setSlidersText() {

        $(
                refs.flipVISAMCAMEX_no + "," + refs.flipBankLoan_no + ","
                + refs.flipStoreCard_no + "," + refs.flipStoreCard_no
                + "," + refs.flipChequingAcct_no + ","
                + refs.flipGasCard_no + "," + refs.flipSavingsAcct_no)
            .text(translator.translateKey("no"));
        $(
                refs.flipVISAMCAMEX_yes + "," + refs.flipBankLoan_yes + ","
                + refs.flipStoreCard_yes + "," + refs.flipStoreCard_yes
                + "," + refs.flipChequingAcct_yes + ","
                + refs.flipGasCard_yes + "," + refs.flipSavingsAcct_yes)
            .text(translator.translateKey("yes"));
    }

    function createSliders() {

        $(refs.cardVISAMCAMEX).slider();
        $(refs.cardBankLoan).slider();
        $(refs.cardStoreCard).slider();
        $(refs.cardChequingAcct).slider();
        $(refs.cardGasCard).slider();
        $(refs.cardSavingsAcct).slider();
    }

    function createFlips() {

        setSlidersText();
        createSliders();
    }

    // ---------------------------------------------------------------------------------------

    function restoreCreditCardData() {
        var sMethod = "restoreCreditCardData()";
        console.log(logPrefix + sMethod);

        $(refs.cardVISAMCAMEX).val(model.get('cardVISAMCAMEX'));
        $(refs.cardBankLoan).val(model.get('cardBankLoan'));
        $(refs.cardStoreCard).val(model.get('cardStoreCard'));
        $(refs.cardChequingAcct).val(model.get('cardChequingAcct'));
        $(refs.cardGasCard).val(model.get('cardGasCard'));
        $(refs.cardSavingsAcct).val(model.get('cardSavingsAcct'));

        // US3621
        var filteredData = new WICI.JobTitlesList();
        var jobTitle_temp = model.get('jobTitle_temp');
        var jobTitle_text = filteredData.getJobTitleTextByJobValue(jobTitle_temp);
                
        if(jobTitle_temp === null) {
        	$(refs.jobTitle).val(null);        	
        	populateJobTitlesList();
        } else if ($.inArray(jobTitle_temp, ['TR_OR', 'DR_OR', 'MI_OR', 'PR_OR', 'FA_OR', 'GU_OR', 'MA_OR', 'OW_OR', 'OT_OR', 'SA_OR', 'SE_OR', 'RE_OR', 'LA_OR', 'OF_OR']) != -1) {
        	populateJobTitlesList(true);
        	$(refs.jobTitle_SelectField + ' [value="' + jobTitle_temp + '"]').attr( 'selected', 'selected' );
        	$(refs.jobTitle).val(model.get('jobTitle'));
        	        	console.log("RestorePopulate Title" + model.get('jobTitle'));
        	$(refs.jobTitleOtherArea).show();
    	} else {    		
    		$(refs.jobTitle_SelectField + ' [value="' + jobTitle_temp + '"]').attr( 'selected', 'selected' );
    		$(refs.jobTitle).val(translator.translateKey(jobTitle_text));
    		$(refs.jobTitleOtherArea).hide();
    	}
               
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

        // $(refs.grossIncome).val(model.get('grossIncome'));
        $(refs.sin).val(model.get('sin'));
    }
    // ---------------------------------------------------------------------------------------

    function syncUserData() {
        var sMethod = 'syncUserData() ';
        console.log(logPrefix + sMethod);

        getSelectedBankingProducts();

        var emplType = model.get('employmentType');

        if (!(emplType in  prepopulatedTypes)) {
        // US3621
        	var filteredData = new WICI.JobTitlesListMapper();
        	console.log(logPrefix + sMethod+" : "+filteredData.getJobTitleByJobValue($(refs.jobTitle_SelectField).val()));
        	
        	var jobTitle_ref = $(refs.jobTitle_SelectField).val();
        	model.set('jobTitle_SelectField', $(refs.jobTitle_SelectField).val());
        	if ($.inArray(jobTitle_ref, ['TR_OR', 'DR_OR', 'MI_OR', 'PR_OR', 'FA_OR', 'GU_OR', 'MA_OR', 'OW_OR', 'OT_OR', 'SA_OR', 'SE_OR', 'RE_OR', 'LA_OR', 'OF_OR']) != -1) {
        		model.set('jobTitle', $(refs.jobTitle).val().toUpperCase());
        		model.set('jobTitle_temp', $(refs.jobTitle_SelectField).val());
        	} else {
        		model.set('jobTitle', filteredData.getJobTitleByJobValue($(refs.jobTitle_SelectField).val()));
        		model.set('jobTitle_temp', $(refs.jobTitle_SelectField).val());
        	}
        	
            model.set('jobCategory', $(refs.jobCategory).val());
            model.set('employerName', $(refs.employerName).val().toUpperCase());

            model.set('employerCity', $(refs.employerCity).val().toUpperCase());

            model.set('employerPhone', $(refs.employerPhone).val()
                .replace(/-/g, ''));

            model.set('howLongMonthes', $(refs.months_Slider).val());
            model.set('howLongYears', $(refs.years_Slider).val());

        }

        model.set('grossIncome', $(refs.grossIncome).val().replace(/,/g, '')
            .replace(' $ ', '').replace('.', ','));
        // model.set('grossIncome', $(refs.grossIncome).val());
        // US3960
        model.set('grossHouseholdIncome', $(refs.grossHouseholdIncome).val().replace(/,/g, '')
                .replace(' $ ', '').replace('.', ','));
        
        model.set('sin', $(refs.sin).val());

        console.log(logPrefix + sMethod + ' model data: ' + model.toString());
    }
    // ---------------------------------------------------------------------------------------

    function getSelectedBankingProducts() {

        model.set('cardVISAMCAMEX', null);
        model.set('cardBankLoan', null);
        model.set('cardStoreCard', null);
        model.set('cardChequingAcct', null);
        model.set('cardGasCard', null);
        model.set('cardSavingsAcct', null);
    }

    // ---------------------------------------------------------------------------------------

    function populateJobCategories() {
        var sMethod = 'populateJobCategories() ';
        console.log(logPrefix + sMethod);

        var controlRef = $(refs.jobCategory);
        controlRef.empty();
        // US3621
        var jobTitle = model.get('jobTitle'); 
        
        if(!jobTitle){
	        $(refs.jobTitleOtherArea).hide();
	    	$(refs.jobTitle).show();
	    	$(refs.jobTitle).val(null);
        } else if(jobTitle){
        	populateJobTitlesList(true);
        }
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
            H: '',
            U: '',
            O: ''
        };
        if (emplType in emplTypesWithDefaults) {
            hideSelectOptions(refs.jobCategory);
        } else {
            // debugger;
            // $(refs.jobCategory).val(model.get('jobCategory'));
            // $(refs.employerName).val(model.get('employerName'));

            // $(refs.employerCity).val(model.get('employerCity'));

            // $(refs.employerPhone).val(model.get('employerPhone'));

            // $(refs.months_Slider).val(model.get('howLongMonthes'));
            // $(refs.years_Slider).val(model.get('howLongYears'));
        }
        // US3621
        var jobTitle_temp = model.get('jobTitle_temp');
        if(jobTitle_temp === null) {
        	populateJobTitlesList();
        }
    }
    // ---------------------------------------------------------------------------------------
    
    // US3621 - Start    
    // ---------------------------------------------------------------------------------------
    function populateJobTitlesList(restore) {
        var sMethod = 'populateJobTitlesList() ',
            currModel, categoryValue, jobTitle, jobTitle_temp, controlRef, list;

        console.log(logPrefix + sMethod);                
        
        categoryValue = model.get('jobCategory');
        jobTitle = model.get('jobTitle');
        jobTitle_temp = model.get('jobTitle_temp');
        var filteredData = new WICI.JobTitlesList();
        
        console.log(sMethod+" : "+categoryValue+" : "+jobTitle);               
        
        if ($.inArray(categoryValue, ['HO', 'RT', 'UN']) != -1) {
        	$(refs.jobTitleOtherArea).hide();        	                
        }            
        else if ($.inArray(categoryValue, ['DR', 'GU', 'LA', 'MA', 'MI', 'OF', 'OW', 'FA', 'PR', 'RE', 'SA', 'SE', 'TR', 'OT', 'ST']) != -1) {        	                	        	
        	if($(refs.jobTitle).val()){
        		model.set('jobTitle', $(refs.jobTitle).val());        		
        	} else {
        		$(refs.jobTitle).val(null);
        	}       	        
        	$(refs.jobTitleOtherArea).hide();
        	
        	 controlRef = $(refs.jobTitle_SelectField);
             controlRef.empty();
             
             list = new WICI.JobTitlesList();
             list.data = list.getDataByCategory(categoryValue);
             $.each(list.data, function (index, item) {
                 var optTempl = '<option value="' +
                 	 item.value +
                     '">' +
                     translator.translateKey(item.text) +
                     '</option>';
                 controlRef.append(optTempl);
                 console.log(item.value + " : " + item.text + " : " + translator.translateKey(item.text));
             });
            if(model.get('jobTitle_temp')){ 
            	var filteredMapperData = new WICI.JobTitlesListMapper();
                
            	if( filteredMapperData.getJobTitleByJobValue(jobTitle) === null ){
            		$(refs.jobTitle_SelectField + ' [value="' + jobTitle_temp + '"]').attr( 'selected', 'selected' );
                	$(refs.jobTitle).val();
                	$(refs.jobTitleOtherArea).hide();
            	} else if ($.inArray(jobTitle_temp, ['TR_OR', 'DR_OR', 'MI_OR', 'PR_OR', 'FA_OR', 'GU_OR', 'MA_OR', 'OW_OR', 'OT_OR', 'SA_OR', 'SE_OR', 'RE_OR', 'LA_OR', 'OF_OR']) != -1) { 
                	$(refs.jobTitle_SelectField + ' [value="' + jobTitle_temp + '"]').attr( 'selected', 'selected' );
                	$(refs.jobTitle).val();          
                	if(restore) {
                		$(refs.jobTitleOtherArea).show();
                		$(refs.jobTitle).val(model.get('jobTitle'));
                	}
                	else {
                		$(refs.jobTitleOtherArea).hide();
                	}
            	} else {                 		
            		$(refs.jobTitle_SelectField + ' [value="' + jobTitle_temp + '"]').attr( 'selected', 'selected' );
            		$(refs.jobTitle).val(translator.translateKey(filteredData.getJobTitleTextByJobValue(jobTitle_temp)));
            		$(refs.jobTitleOtherArea).hide();
            	}            	
            }
            
            if (categoryValue) {
                $(refs.jobCategory + ' [value="' + categoryValue + '"]').attr(
                    'selected', 'selected'
                );
            }
        }   
    }

    //---------------------------------------------------------------------------------------
    // End
    
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

    function validateFields(argSuccessCallback, argFailureCallback) {
        var sMethod = 'validateFields() ';
        console.log(logPrefix + sMethod);

        var validator = new WICI.Validator();
        syncUserData();

        if (!validator.notEmpty(agentIDTextField)) {
            argFailureCallback(translator
                .translateKey("loginScreen_AgentID_Label"));
        } else {
            argSuccessCallback();
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
                onHiredStatusClick('FT', ignoreCategory);
                break;
            case 'P':
                onHiredStatusClick('PT', ignoreCategory);
                break;
            case 'S':
                onHiredStatusClick('SS', ignoreCategory);
                break;
            case 'H':
                onPrepopulatedStatusClick('HO', 'jobCategoriesList_HO');
                break;
            case 'R':
                onPrepopulatedStatusClick('RT', 'jobCategoriesList_RT');
                break;
            case 'U':
                onPrepopulatedStatusClick('UN', 'jobCategoriesList_UN');
                break;
            case 'O':
            	onUnHiredStatusClick('OT', ignoreCategory);
                break;
            default:
                onUnHiredStatusClick(ignoreCategory);
                break;
        }
    }

    function blankDetails () {
        $(refs.jobTitle).val(null);
        $(refs.jobCategory).val(null);
        $(refs.employerName).val(null);
        $(refs.employerCity).val(null);
        $(refs.employerPhone).val(null);

        $(refs.months_Slider).val(null);
        $(refs.years_Slider).val(null);
        
        // US3621
        $(refs.jobTitle_SelectField).empty();
    	
    }

    function onHiredStatusClick(category, ignoreCategory) {
        /*if(!ignoreCategory) {
            $(refs.jobCategory).val(category);
            $(refs.jobCategory).trigger('change');
        }*/
    	
    	// US3621        
        $(refs.jobTitleOtherArea).hide();  	
    	
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
            //if(!ignoreCategory) {
                $(refs.jobCategory).val(category);
                $(refs.jobCategory).trigger('change');
                 model.set('jobCategory', category);
                $(refs.jobCategory + " [value='" + category + "']").attr(
                    "selected", "selected");
                hideSelectOptions(refs.jobCategory, category);
           // }
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

    function onPrepopulatedStatusClick (category, title) {

        var addressModel = activationItems.getModel('personalData2_Address');
        var _title = translator.translateKey(title).toUpperCase();
        model.set('jobCategory', category);
        model.set('employerName', _title);
        model.set('jobTitle', _title);
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
            populateJobTitlesList();
        });
        
        // US3621        
        $(refs.jobTitle).on("change", function() {
       	 	console.log(refs.jobTitle + '::change');
       	 	model.set('jobTitle', $(refs.jobTitle).val());
        });
        
        $(refs.jobTitle).live('paste, input', function(e) {
            var self = $(this);

            setTimeout(function(){
                if(self.val().indexOf(' ') != -1 || self.val().length > 30) {
                    self.val(self.val().replace(' ', '').substring(0, 30));
                    model.set('jobTitle', $(refs.jobTitle).val());
                }
            },100);
        });
        
        $(refs.jobTitle_SelectField).on("change", function() {
            console.log(refs.jobTitle_SelectField + '::change');
            var jobTitle = $(refs.jobTitle_SelectField).val();
            var filteredData = new WICI.JobTitlesList();
            var filteredMapperData = new WICI.JobTitlesListMapper();
            
            if( filteredMapperData.getJobTitleByJobValue(jobTitle) === null ){
            	$(refs.jobTitleOtherArea).hide();
            } else if ($.inArray(jobTitle, ['TR_OR', 'DR_OR', 'MI_OR', 'PR_OR', 'FA_OR', 'GU_OR', 'MA_OR', 'OW_OR', 'OT_OR', 'SA_OR', 'SE_OR', 'RE_OR', 'LA_OR', 'OF_OR']) != -1) {                    	        	
            	$(refs.jobTitleOtherArea).show();
            	$(refs.jobTitle).val(null).removeAttr('disabled');            	
            	$(refs.jobTitle).addClass('upperCaseField');            	
            	model.set('jobTitle_temp', jobTitle);
            } else {
            	model.set('jobTitle', filteredMapperData.getJobTitleByJobValue($(refs.jobTitle_SelectField).val()));
            	$(refs.jobTitle).val(model.get('jobTitle'));
            	model.set('jobTitle_temp', jobTitle);            
            	$(refs.jobTitleOtherArea).hide();
            }                        
        });

        $.subscribe('translatorFinished', function() {
            console.log(refs.employmentType + 'subscribe(translatorFinished)');
            // US4636
            $(refs.employmentType).val(model.get("employmentType"));           
            populateEmplTypes(true);
            $(refs.employmentType).val(model.get("employmentType"));
        });

        $.subscribe('translatorFinished', function() {
            console.log(refs.jobCategory + 'subscribe(translatorFinished)');
            populateJobCategories();
            $(refs.jobCategory).val(model.get("jobCategory"));
        });

        $(refs.employmentType).on("change", function() {
            console.log(refs.employmentType + '::change');
            model.set("employmentType", $(refs.employmentType).val());
            // US4636
            model.set('jobCategory', null);
            model.set('jobTitle', null);
            model.set('jobTitle_temp', null);
            updateEmploymentType(true);
        });



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
            var employmentType = model.get('employmentType');
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
                    errStrArr.push(translator.translateKey(item.err));
                });

                app.validationDecorator.applyErrAttribute(rez);

                // app.messageDialog.error(errStrArr);
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

            if (grossAnnualIncome <= 5000) {
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
        } catch (error) {
            console.log(sMethod + ' ERROR!!!!:' + err);
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

            if (grossAnnualHouseholdIncomeval <= 5000) {
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
            console.log(sMethod + ' ERROR!!!!:' + err);
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

    function showSelectOptions (dropdown) {
        var options = $(dropdown).children(), len  = options.length;
        for (var i = 0; i < len; i++) {
             $(options[i]).css('display', '');
        }
    }

 };
