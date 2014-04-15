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
            
    		employerProvince:      	'#finEmpInfo_EmployerProvince_TextField',
    		employerPhone:        	'#finEmpInfo_EmployerPhone_TextField',
    		howLongCurrentEmployer:	'#finEmpInfo_HowLongCurrentEmployer_TextField',
            
    		grossIncome:      		'#finEmpInfo_GrossIncome_TextField',
            
    		sin:          			'#finEmpInfo_SIN_TextField', 
    		
    		employmentType			:'#finEmpInfo_EmpType_Group',
    		employmentTypeFullTime:	'#finEmpInfo_EmploymentTypeFullTime_RadioButton',
    		employmentTypePartTime:	'#finEmpInfo_EmploymentTypePartTime_RadioButton',
    		employmentTypeSeasonal	:'#finEmpInfo_EmploymentTypeSeasonal_RadioButton',
    		employmentTypeRetired	:'#finEmpInfo_EmploymentTypeRetired_RadioButton',
    			
    		cardVISAMCAMEX			:'#flipVISAMCAMEX',
    		cardBankLoan			:'#flipBankLoan',
    		cardStoreCard			:'#flipStoreCard',
    		cardChequingAcct		:'#flipChequingAcct',
    		cardGasCard				:'#flipGasCard',
    		cardSavingsAcct			:'#flipSavingsAcct',
    		employmentArea 			: '#FE_EmploymentArea1',
    		months_Slider 			: '#finEmpInfo_Months_Slider',
    		years_Slider 			: '#finEmpInfo_Years_Slider'
    		
    		
    		
    		
    			
    };
    
    //---------------------------------------------------------------------------------------
	
	var model =new WICI.BaseModel({
        refs: refs, 
        data:[
                
              	{name: 'cardVISAMCAMEX',  			value: null, validation: null },
              	{name: 'cardBankLoan',  			value: null, validation: null },
              	{name: 'cardStoreCard',  			value: null, validation: null },
              	{name: 'cardChequingAcct',  		value: null, validation: null },
              	{name: 'cardGasCard',  				value: null, validation: null },
              	{name: 'cardSavingsAcct',  			value: null, validation: null },
              	
              	{name: 'employmentType',  			value: null, validation: { type: 'presence',    message: '' }},
                
              	{name: 'jobTitle',  				value: null, validation: {type: 'presence', message: 'financialData_validation_jobTitle', group: [1]} },
                {name: 'jobCategory',       		value: null, validation: {type: 'presence', message: 'financialData_validation_jobCategory', group: [1]}},
                {name: 'employerName',     			value: null, validation: {type: 'format', message: 'financialData_validation_employerName', matcher: /^[A-Z0-9\,\_\'\-\.\~\@\[\]\}\{\)\(]{1,20}$/, group: [1]}},
                
                {name: 'employerCity',         		value: null, validation: { type: 'presence', message: 'financialData_validation_employerCity', group: [1] } },
                {name: 'employerProvince',     		value: null, validation: { type: 'presence', message: 'financialData_validation_employerProvince'}, group: [1] },
                {name: 'employerPhone',      		value: null, validation: { type: 'phone', message: 'financialData_validation_employerPhone', group: [1]} },
                
                {name: 'howLongYears',			    value: null, validation: { type: 'format', message: 'financialData_validation_howLongCurrentEmployer', matcher: /^[a-zA-Z0-9_\-]{1,30}/, group: [1]} },
                {name: 'howLongMonthes',    		value: null, validation: { type: 'format', message: 'financialData_validation_howLongCurrentEmployer', matcher: /^[a-zA-Z0-9_\-]{1,30}/, group: [1]} },
                
                {name: 'grossIncome',     			value: null, validation: { type: 'format', message: 'financialData_validation_grossIncome', matcher: /\d+/ , group: [2]} },
                {name: 'sin',         				value: null, validation: { type: 'presence', message: 'financialData_validation_sin', canBeEmpty: true, group: [2] } }
                
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
		
		populateJobCategories();
		populateProvinces();
		
		setUIElementsMasks();
		
		createFlips();
		createSliders();
		
		$(refs.employmentArea).hide();
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

		$(refs.months_Slider).slider();
		$(refs.years_Slider).slider();
	}

	
	
	
	function syncUserData(){
        var sMethod = 'syncUserData() ';
        console.log(logPrefix + sMethod);
        
        getSelectedBankingProducts();
        
        model.set('jobTitle', $(refs.jobTitle).val().toUpperCase());
        model.set('jobCategory', $(refs.jobCategory).val());
        model.set('employerName',  $(refs.employerName).val().toUpperCase());
        
        model.set('employerCity',  $(refs.employerCity).val().toUpperCase());
        
        model.set('employerProvince',  $(refs.employerProvince).val());
        model.set('employerPhone',   $(refs.employerPhone).val().replace(/-/g,''));
        
        model.set('howLongMonthes',   $(refs.months_Slider).val());
        model.set('howLongYears',   $(refs.years_Slider).val());

        model.set('grossIncome',  $(refs.grossIncome).val());
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
	
    function populateProvinces(){
        var sMethod = 'populateProvinces() ';
        console.log(logPrefix + sMethod);
        
        if($(refs.employerProvince+' option').length>1){
            console.log(logPrefix + sMethod +" select control is already populated.");
            return;
        }
        
        var controlRef=$(refs.employerProvince);
        controlRef.empty();
        
        var list = new WICI.ProvincesList();
        $.each(list.data, function(index, item) {  
            var optTempl = '<option value="' +item.value+ '">'+translator.translateKey(item.text)+'</option>';            
            controlRef.append(optTempl);
        });
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
		$(refs.employerPhone).mask('999-999-9999');
		
		
		$(refs.howLongCurrentEmployer).mask('999');
		$(refs.grossIncome).mask('999999');
        $(refs.sin).mask('999999999');
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
			}
		).appendTo("#FinancialScreen");
	}
	
    //---------------------------------------------------------------------------------------
	
	function assemblePageHTML($element, templateName) {
		var html = $(templateName).tmpl(); 
		$element.append(html);
	}
	
    //---------------------------------------------------------------------------------------
	
	function bindEvents(){
        $('#FinancialScreen_NextButton').click(function() {
            showNextScreen();
        });
        $('#FinancialScreen_PrevButton').click(function() {
        	showPrevScreen();
        });
                
        $(refs.employmentTypeFullTime).click(function(){
			clearRadios();
			$(refs.employmentTypeFullTime).addClass('ui-btn-active');
			model.set('employmentType', 'F');
			$(refs.employmentArea).show();
		});
		
        $(refs.employmentTypePartTime).click(function(){
			clearRadios();
			$(refs.employmentTypePartTime).addClass('ui-btn-active');
			model.set('employmentType', 'P');
			$(refs.employmentArea).show();
		});

        $(refs.employmentTypeSeasonal).click(function(){
			clearRadios();
			$(refs.employmentTypeSeasonal).addClass('ui-btn-active');
			model.set('employmentType', 'S');
			$(refs.employmentArea).show();
		});

        $(refs.employmentTypeRetired).click(function(){
			clearRadios();
			$(refs.employmentTypeRetired).addClass('ui-btn-active');
			model.set('employmentType', 'R');
			$(refs.employmentArea).hide();
		});
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
            	var rez = model.validate(2);
            }
            else
            {
            	var rez = model.validate();
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
        flow.next();
	}
    //---------------------------------------------------------------------------------------
};