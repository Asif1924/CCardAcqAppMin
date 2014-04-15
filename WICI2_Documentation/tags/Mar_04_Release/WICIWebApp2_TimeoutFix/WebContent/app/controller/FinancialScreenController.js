ensureNamespaceExists();

WICI.FinancialScreenController = function(activationItems, argTranslator, argMessageDialog) {
	var logPrefix = '[WICI.FinancialScreenController]::';

	var $screenContainer = $("#FinancialScreen");

	var translator;
	var messageDialog;
	
	this.show = show;
	this.init = init;
	this.hide = hide;
	
	var flow = null;
	
	this.syncUserData = syncUserData;
	
    //---------------------------------------------------------------------------------------
	
	var refs = {
    		jobTitle:       		'#finEmpInfo_JobTitle_TextField',
    		jobCategory:   			'#finEmpInfo_JobCategory_TextField',
    		employerName:      		'#finEmpInfo_EmployerName_TextField',
            
    		employerCity:          	'#finEmpInfo_EmployerCity_TextField',
            
    		employerPhone:        	'#finEmpInfo_EmployerPhone_TextField',
    		howLongCurrentEmployer:	'#finEmpInfo_HowLongCurrentEmployer_TextField',
            
    		grossIncome:      		'#finEmpInfo_GrossIncome_TextField',
            
    		sin:          			'#finEmpInfo_SIN_TextField', 
    		
    		employmentType			:'#finEmpInfo_EmpType_Group',
    		employmentTypeFullTime:	'#finEmpInfo_EmploymentTypeFullTime_RadioButton',
    		employmentTypePartTime:	'#finEmpInfo_EmploymentTypePartTime_RadioButton',
    		employmentTypeSeasonal	:'#finEmpInfo_EmploymentTypeSeasonal_RadioButton',
    		employmentTypeRetired	:'#finEmpInfo_EmploymentTypeRetired_RadioButton',
    		
    		howLongYears:              '#finEmpInfo_Years_Slider',
    		howLongMonthes:             '#finEmpInfo_Months_Slider',
    			
    		cardVISAMCAMEX			:'#flipVISAMCAMEX',
    		cardBankLoan			:'#flipBankLoan',
    		cardStoreCard			:'#flipStoreCard',
    		cardChequingAcct		:'#flipChequingAcct',
    		cardGasCard				:'#flipGasCard',
    		cardSavingsAcct			:'#flipSavingsAcct',
    		employmentArea 			: '#FE_EmploymentArea1',
    		
    		durationRegion:			'#finEmpInfo_Duration',
    		months_Slider 			: '#finEmpInfo_Months_Slider',
    		years_Slider 			: '#finEmpInfo_Years_Slider',
    		
    		tdGrossIncomeLable		: "#finEmpInfo_GrossIncome_Lable",
    		tdGrossIncomeValue		: "#finEmpInfo_GrossIncome_Value"
    			
    		
    };
    
    //---------------------------------------------------------------------------------------
	
	var model =new WICI.BaseModel({
		name: 'financialData',
        refs: refs, 
        data:[
                
              	{name: 'cardVISAMCAMEX',  			value: null, validation: null },
              	{name: 'cardBankLoan',  			value: null, validation: null },
              	{name: 'cardStoreCard',  			value: null, validation: null },
              	{name: 'cardChequingAcct',  		value: null, validation: null },
              	{name: 'cardGasCard',  				value: null, validation: null },
              	{name: 'cardSavingsAcct',  			value: null, validation: null },
              	
              	{name: 'employmentType',  			value: null, validation: { type: 'presence',    message: '', group: [1] }},
                
              	{name: 'jobTitle',  				value: null, validation: {type: 'presence', message: 'financialData_validation_jobTitle', group: [1]} },
                {name: 'jobCategory',       		value: null, validation: {type: 'presence', message: 'financialData_validation_jobCategory', group: [1]}},
                {name: 'employerName',     			value: null, validation: {type: 'personName', message: 'financialData_validation_employerName', group: [1]}},
                
                {name: 'employerCity',         		value: null, validation: { type: 'presence', message: 'financialData_validation_employerCity', group: [1] } },
                {name: 'employerPhone',      		value: null, validation: { type: 'phone',       message: '' , canBeEmpty: true , group: [1]} },
                
                {name: 'howLongYears',			    value: null, validation: {type: 'presence',   message: '',      group: [3]} },
                {name: 'howLongMonthes',    		value: null, validation: {type: 'presence',   message: '',      group: [3]} },
                
                {name: 'grossIncome',     			value: null, validation: { type: 'format', message: 'financialData_validation_grossIncome', matcher: /\d+/ , group: [2]} },
                {name: 'sin',         				value: null, validation: { type: 'sin', message: 'financialData_validation_sin', canBeEmpty: true, group: [2] } }
                
                ]
    });    
	
    //---------------------------------------------------------------------------------------
    
	function init( argFlow ) {
        var sMethod = 'init() ';
        console.log(logPrefix + sMethod);
        
        flow = argFlow;        
        translator = argTranslator; 		//(AA)Dependency Injection Principle: Allows for proper unit testing
        messageDialog = argMessageDialog; 	//(AA)Dependency Injection Principle: Allows for proper unit testing
		
		createView();
		bindEvents();
		
		
		
		var currentModel = activationItems.getModel(model.name);
        
		if (!currentModel) {
            activationItems.addModel(model);
        } else {
            model = currentModel;
        }
		
		populateJobCategories();
		
		restoreCreditCardData();
		
		setUIElementsMasks();
		
		createFlips();
		createSliders();
	}
	
    //---------------------------------------------------------------------------------------
	
	function createFlips (){

		$(refs.cardVISAMCAMEX).slider();
		$(refs.cardBankLoan).slider();
		$(refs.cardStoreCard).slider();
		$(refs.cardChequingAcct).slider();
		$(refs.cardGasCard).slider();
		$(refs.cardSavingsAcct).slider();
	}
	
    //---------------------------------------------------------------------------------------

	function createSliders(){

		//$(refs.months_Slider).slider();
		//$(refs.years_Slider).slider();
	}

	
    //---------------------------------------------------------------------------------------
    function restoreCreditCardData(){
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
        
        if(model.get('grossIncome'))
        {
        	$(refs.grossIncome).val(model.get('grossIncome').replace(',','.'));
        }
        
        //$(refs.grossIncome).val(model.get('grossIncome'));
        $(refs.sin).val(model.get('sin'));
        
        updateEmploymentTypeRadioButtons();
        
    }
    //---------------------------------------------------------------------------------------

	
	function syncUserData(){
        var sMethod = 'syncUserData() ';
        console.log(logPrefix + sMethod);
        
        getSelectedBankingProducts();
        
        model.set('jobTitle', $(refs.jobTitle).val().toUpperCase());
        model.set('jobCategory', $(refs.jobCategory).val());
        model.set('employerName',  $(refs.employerName).val().toUpperCase());
        
        model.set('employerCity',  $(refs.employerCity).val().toUpperCase());
        
        model.set('employerPhone',   $(refs.employerPhone).val().replace(/-/g,''));
        
        model.set('howLongMonthes',   $(refs.months_Slider).val());
        model.set('howLongYears',   $(refs.years_Slider).val());
        
        model.set('grossIncome', $(refs.grossIncome).val().replace(/,/g,'').replace(' $ ','').replace('.',','));
        //model.set('grossIncome',  $(refs.grossIncome).val());
        model.set('sin',      $(refs.sin).val());
        
        
        console.log(logPrefix + sMethod +' model data: '+model.toString());
    }
    //---------------------------------------------------------------------------------------

	function getSelectedBankingProducts(){
		
		model.set('cardVISAMCAMEX',      $(refs.cardVISAMCAMEX + ' ' + 'option:selected').val());
		model.set('cardBankLoan',     	 $(refs.cardBankLoan + ' ' + 'option:selected').val());
		model.set('cardStoreCard',   	 $(refs.cardStoreCard + ' ' + 'option:selected').val());
		model.set('cardChequingAcct',    $(refs.cardChequingAcct + ' ' + 'option:selected').val());
		model.set('cardGasCard',     	 $(refs.cardGasCard + ' ' + 'option:selected').val());
		model.set('cardSavingsAcct',     $(refs.cardSavingsAcct + ' ' + 'option:selected').val());
	}

	//---------------------------------------------------------------------------------------
	
    function populateJobCategories(){
        var sMethod = 'populateJobCategories() ';
        console.log(logPrefix + sMethod);
                
        if($(refs.jobCategory+' option').length>1){
            console.log(logPrefix + sMethod +" select control is already populated.");
            return;
        }
        
        var controlRef=$(refs.jobCategory);
        controlRef.empty();
        
        var list = new WICI.JobCategoriesList();
        $.each(list.data, function(index, item) {  
            var optTempl = '<option value="' +item.value+ '">'+translator.translateKey(item.text)+'</option>';            
            controlRef.append(optTempl);
        });
    }
	//---------------------------------------------------------------------------------------
	
	function validateFields( argSuccessCallback, argFailureCallback ){
        var sMethod = 'validateFields() ';
        console.log(logPrefix + sMethod);
        
        var validator = new WICI.Validator();
        syncUserData();
        
        if(!validator.notEmpty(agentIDTextField)){
            argFailureCallback(translator.translateKey("loginScreen_AgentID_Label"));
        }else{
            argSuccessCallback();
        }
        
    }
    //---------------------------------------------------------------------------------------
	
	
	function show(){
		$screenContainer.show();
		translator.run("FinancialScreen");
	}
	
    //---------------------------------------------------------------------------------------
	
	function setUIElementsMasks() {
		// Set phone fields mask
		$(refs.employerPhone).mask('999-999-9999', {placeholder:"", useDelimeter:true, delimeter:'-'});
		
		
		$(refs.years_Slider).durationControl('createControl');
		$(refs.months_Slider).durationControl('createControl');
		
		$(refs.years_Slider).autoNumeric('init', {aSign:'',vMin:'0', vMax:'100', mDec:'0'});
    	$(refs.months_Slider).autoNumeric('init', {aSign:'',vMin:'0', vMax:'11', mDec:'0'});
    	
    	$(refs.grossIncome).autoNumeric('init', {aSign:' $ ',vMin:'0', vMax:'999999', mDec:'0', wEmpty: 'sign'});
        
    	$(refs.sin).mask('999999999', {placeholder:""});
    }

	//---------------------------------------------------------------------------------------
	
	function hide(){
		$screenContainer.hide();
	}
	
    //---------------------------------------------------------------------------------------
	
	function createView() {
		$screenContainer.empty();
		assembleNavigationBarAtTop();
		assemblePageHTML($screenContainer, "#WICIFinancialScreen-template");
		$screenContainer.addClass("breadcrumbPadding");				
	}

    //---------------------------------------------------------------------------------------
	
	function assembleNavigationBarAtTop(){
		$("#pageHeader-template").template("pageHeader");
		$.tmpl("pageHeader", 
			{ 													
				"previousButtonId" 		: "FinancialScreen_PrevButton", 
				"nextButtonId" 			: "FinancialScreen_NextButton",
				"settingsButtonId" 		: "FinancialScreen_SettingsButton"
			}
		).appendTo("#FinancialScreen");
	}
	
    //---------------------------------------------------------------------------------------
	
	function assemblePageHTML($element, templateName) {
		var html = $(templateName).tmpl(); 
		$element.append(html);
	}

	//---------------------------------------------------------------------------------------	
	function updateEmploymentTypeRadioButtons() {
        clearRadios();
        clearGrossIncomeTableRowStyles();
        app.validationDecorator.clearErrArrtibute();
        
        switch (model.get('employmentType')) {
        case 'F':
        	$(refs.employmentTypeFullTime).addClass('ui-btn-active');
        	makeSimpleRow();
        	$(refs.employmentArea).show();
            break;
        case 'P':
        	$(refs.employmentTypePartTime).addClass('ui-btn-active');
        	makeSimpleRow();
        	$(refs.employmentArea).show();
            break;
        case 'S':
        	$(refs.employmentTypeSeasonal).addClass('ui-btn-active');
        	makeSimpleRow();

        	$(refs.employmentArea).show();
            break;
        case 'R':
        	$(refs.employmentTypeRetired).addClass('ui-btn-active');
        	makeTopRow();
        	$(refs.employmentArea).hide();
        default:
        	makeTopRow();
        	$(refs.employmentArea).hide();
            break;
        }
    }
	
	function clearGrossIncomeTableRowStyles()
	{
		$(refs.tdGrossIncomeLable).removeClass('fieldLabelsCell');
    	$(refs.tdGrossIncomeValue).removeClass('fieldValuesCell');
    	
    	$(refs.tdGrossIncomeLable).removeClass('fieldLabelsTopCell');
    	$(refs.tdGrossIncomeValue).removeClass('fieldValuesTopCell');
	}
	
	function makeTopRow()
	{
		$(refs.tdGrossIncomeLable).addClass('fieldLabelsTopCell');
    	$(refs.tdGrossIncomeValue).addClass('fieldValuesTopCell');
	}
	
	function makeSimpleRow()
	{
		$(refs.tdGrossIncomeLable).addClass('fieldLabelsCell');
    	$(refs.tdGrossIncomeValue).addClass('fieldValuesCell');
	}
	//---------------------------------------------------------------------------------------
	
	function bindEvents(){
        $('#FinancialScreen_NextButton').click(function() {
            showNextScreen();
        });
        $('#FinancialScreen_PrevButton').click(function() {
        	showPrevScreen();
        });
                
        $(refs.employmentTypeFullTime).click(changeEmploymentType);
        $(refs.employmentTypePartTime).click(changeEmploymentType);
        $(refs.employmentTypeSeasonal).click(changeEmploymentType);
        $(refs.employmentTypeRetired).click(changeEmploymentType);
	}	
	
	function changeEmploymentType()
	{
		if($(this).attr('itemValue') !== null)
		{
			model.set('employmentType', $(this).attr('itemValue'));
			updateEmploymentTypeRadioButtons();
		}
	}
	
    //---------------------------------------------------------------------------------------
	
	function clearRadios(){
		$(refs.employmentTypeFullTime).removeClass('ui-btn-active');
		$(refs.employmentTypePartTime).removeClass('ui-btn-active');
		$(refs.employmentTypeSeasonal).removeClass('ui-btn-active');
		$(refs.employmentTypeRetired).removeClass('ui-btn-active');
	}
	
    //---------------------------------------------------------------------------------------
	
	function showPrevScreen(){
		syncUserData();
		flow.back();
	}
	
    //---------------------------------------------------------------------------------------
	
	function showNextScreen(){		
		var sMethod = 'showNextScreen() ';
        console.log(logPrefix + sMethod);
        
        syncUserData();

        if (app.validationsOn) {
            app.validationDecorator.clearErrArrtibute();            
            
            var rez;
            // group 2 validation only
            if(model.get('employmentType') == 'R')
            {
            	rez = model.validate(2);
            }
            else
            {
            	rez = model.validate(1);
            	var rez1 = model.validate(2);
            	
            	var rez2 = model.validate(3);
            	if(rez2.length == 2)
            	{
            		rez2.splice(1);
            		rez2[0].uiid = refs.durationRegion;
            	}
            	else
            	{
            		if(rez2.length == 1)
            		{
            			if((model.get('howLongYears') == '0' && model.get('howLongMonthes') == '') || 
            					(model.get('howLongYears') == '' && model.get('howLongMonthes') == '0'))
            			{
            				rez2[0].uiid = refs.durationRegion;
            			}
            			else
                		{
                			rez2 = [];
                		}
            		}
            		else
            		{
            			rez2 = [];
            		}
            	}
            	
            	rez = rez.concat(rez1, rez2);
            }
            
            if (rez.length > 0) {
                var errStrArr =[];
                $.each(rez, function(index, item) {
                    errStrArr.push(translator.translateKey(item.err));
                });
                
                app.validationDecorator.applyErrAttribute(rez);    
                
//                app.messageDialog.error(errStrArr);
                return; 
            }
        }
        if(checkGrossAnnualIncome(model.get('grossIncome')))
        {
        	flowNext();
        }
	}
	
	function flowNext(){
		flow.next();
	}
	
	function checkGrossAnnualIncome(value)
	{
		var sMethod = '[checkGrossAnnualIncome() value = ] ' + value;
		
		if(value === null || value ==='')
		{
			return true;
		}
		
		try
		{
			var grossAnnualIncome = parseInt(value);
			
			if(grossAnnualIncome <= 5000)
			{
				var message = translator.translateKey('financialData_grossIncomeError1') +  value.replace(',','.').replace(/(\d)(?=(\d{3})+\b)/g,'$1,') 
									+ translator.translateKey('financialData_grossIncomeError2');
				messageDialog.htmlConfirm(message, flowNext, highlightGrossAnnualIncome);
				return false;
			}
		}
		catch(error)
		{
			console.log(sMethod+ ' ERROR!!!!:' + err);	
		}
		return true;
	}
	
	function highlightGrossAnnualIncome()
	{
		var rez= []; 
		rez.push({name: 'grossIncome', err: '', uiid: refs.grossIncome});
		app.validationDecorator.applyErrAttribute(rez);
	}
    //---------------------------------------------------------------------------------------
};