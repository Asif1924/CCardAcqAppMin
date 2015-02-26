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
        jobCategory : '#finEmpInfo_JobCategory_TextField',
        employerName : '#finEmpInfo_EmployerName_TextField',

        employerCity : '#finEmpInfo_EmployerCity_TextField',

        employerPhone : '#finEmpInfo_EmployerPhone_TextField',
        howLongCurrentEmployer : '#finEmpInfo_HowLongCurrentEmployer_TextField',

        grossIncome : '#finEmpInfo_GrossIncome_TextField',

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

            {
                name : 'jobTitle',
                value : null,
                validation : {
                    type : 'jobTitle',
                    message : 'financialData_validation_jobTitle',
                    group : [ 4 ]
                }
            }, {
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
                    type : 'personName',
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
            }, {
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

        $(refs.jobTitle).val(model.get('jobTitle'));
        $(refs.jobCategory).val(model.get('jobCategory'));
        $(refs.employerName).val(model.get('employerName'));
        $(refs.employerCity).val(model.get('employerCity'));
        $(refs.employerPhone).val(model.get('employerPhone'));
        $(refs.months_Slider).val(model.get('howLongMonthes'));
        $(refs.years_Slider).val(model.get('howLongYears'));

        if (model.get('grossIncome')) {
            $(refs.grossIncome).val(model.get('grossIncome').replace(',', '.'));
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
            model.set('jobTitle', $(refs.jobTitle).val().toUpperCase());
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
        model.set('sin', $(refs.sin).val());

        console.log(logPrefix + sMethod + ' model data: ' + model.toString());
    }
    // ---------------------------------------------------------------------------------------

    function getSelectedBankingProducts() {

        model.set('cardVISAMCAMEX', $(
                refs.cardVISAMCAMEX + ' ' + 'option:selected').val());
        model.set('cardBankLoan',
            $(refs.cardBankLoan + ' ' + 'option:selected').val());
        model.set('cardStoreCard', $(
                refs.cardStoreCard + ' ' + 'option:selected').val());
        model.set('cardChequingAcct', $(
                refs.cardChequingAcct + ' ' + 'option:selected').val());
        model.set('cardGasCard', $(refs.cardGasCard + ' ' + 'option:selected')
            .val());
        model.set('cardSavingsAcct', $(
                refs.cardSavingsAcct + ' ' + 'option:selected').val());
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
            if (!item.hidden) {
                var optTempl = '<option value="' + item.value + '">'
                    + translator.translateKey(item.text) + '</option>';
                controlRef.append(optTempl);
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
    }
    // ---------------------------------------------------------------------------------------
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
        WICI.BreadcrumbsHelper.assembleBreadcrumbs(3, $screenContainer, activationItems);
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
    }

    function onHiredStatusClick(category, ignoreCategory) {
        /*if(!ignoreCategory) {
            $(refs.jobCategory).val(category);
            $(refs.jobCategory).trigger('change');
        }*/
        blankDetails();
        $(refs.jobCategory + " [value='" + 'null' + "']").attr(
            "selected", "selected");
        showSelectOptions(refs.jobCategory);


        $(refs.employmentArea).show();

        $(refs.tdGrossIncomeLable).addClass('fieldLabelsCell');
        $(refs.tdGrossIncomeValue).addClass('fieldValuesCell');

        $(refs.employmentArea).show();
        $(refs.tdGrossIncomeLable).addClass('withBorderTop');
        $(refs.tdGrossIncomeValue).addClass('withBorderTop');


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

        $(refs.employmentArea).show();
        $(refs.tdGrossIncomeLable).addClass('withBorderTop');
        $(refs.tdGrossIncomeValue).addClass('withBorderTop');

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

        $(refs.employmentArea).hide();
        $(refs.tdGrossIncomeLable).removeClass('withBorderTop');
        $(refs.tdGrossIncomeValue).removeClass('withBorderTop');
    }

    function clearGrossIncomeTableRowStyles() {
        $(refs.tdGrossIncomeLable).removeClass('fieldLabelsCell');
        $(refs.tdGrossIncomeValue).removeClass('fieldValuesCell');

        $(refs.tdGrossIncomeLable).removeClass('fieldLabelsTopCell');
        $(refs.tdGrossIncomeValue).removeClass('fieldValuesTopCell');

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

        $.subscribe('translatorFinished', function() {
            console.log(refs.employmentType + 'subscribe(translatorFinished)');
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
                rez = model.validate(1);
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
        if (checkGrossAnnualIncome(model.get('grossIncome'))) {
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
                messageDialog.htmlConfirm(message, flowNext,
                    highlightGrossAnnualIncome);
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
