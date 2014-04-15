ensureNamespaceExists();

WICI.SupCardRequestScreenController = function(activationItems, argTranslator, argMessageDialog) {
    var logPrefix = '[WICI.SupCardRequestScreenController]::';
	var $screenContainer = $("#SupplementaryCardRequestScreen");//supCardRequest_TitleArea SupCard_PersonalDetailsArea

	var translator;
	var messageDialog;
	
	this.show = show;
	this.init = init;
	this.hide = hide;
	
	var flow = null;
	
	var translator =    null; //luk: see 'init()'
    var messageDialog = null; //luk: see 'init()'
	
    this.syncUserData = syncUserData; //luk: get user entered data here...
    var refs = {

            
    	flipCardYesNo				:	'#flipSupplementaryCard',
        flipSameAddress				:	'#flipSameAddress',
            
        firstName					:	'#supCardRequest_FirstName_TextField',
        initial						:	'#supCardRequest_Initial_TextField',
        lastName					:	'#supCardRequest_LastName_TextField',
        birthDate					:	'#supCardRequest_DateOfBirth_TextField',
        phone						:	'#supCardRequest_Telephone_TextField',
        
        cardRequest_Spouse		  	:	'#supCardRequest_Spouse_RadioButton',
        cardRequest_ChildDependant 	:	'#supCardRequest_ChildDependant_RadioButton',
        cardRequest_Other 			:	'#supCardRequest_Other_RadioButton',
        	
        cardDetailsPanel			:	'#supCardDetailsPanel',
        addressPanel				:	'#supAddressPanel',
        
        postalCode					:	'#sup_PostalCode',
        addressLine1				:	'#sup_AddressLine1_TextField',
        addressLine2				:	'#sup_AddressLine2_TextField',
        suiteUnit					:	'#sup_SuiteUnit_TextField',
        city						:	'#sup_City_TextField',
        province					:	'#sup_Province_TextField'

    };
   
    var model =new WICI.BaseModel({
        refs: refs, //luk: with this model can return 'uiid' of the vaidated item!
        data:[
                
                {name: 'cardYesNo',     	value: null, validation: null },
                {name: 'cardRequestFor',    value: null, validation: null },
                
                {name: 'firstName',    		value: null, validation: { type: 'format', message: 'Enter valid First Name', matcher: /^[a-zA-Z0-9_\-]{1,30}/, group: [1] }},
                {name: 'lastName',      	value: null, validation: { type: 'format', message: 'Enter valid Last Name', matcher: /^[a-zA-Z0-9_\-]{1,30}/, group: [1] } },
                {name: 'initial',       	value: null, validation: { type: 'format', message: 'Enter valid Initial', matcher: /^[a-zA-Z0-9_\-]{1,30}/, group: [1], canBeEmpty: true } },
                {name: 'birthDate',     	value: null, validation: { type: 'presence', message: '', group: [1]  }},
                {name: 'phone',     		value: null, validation: { type: 'phone', message: 'Enter valid Phone', group: [1]  }},
                
                {name: 'sameAddressYesNo',  value: null, validation: null },
                
                {name: 'postalCode',     	value: null, validation: {type: 'postal',     message: '', group: [2] }},
                {name: 'addressLine1',  	value: null, validation: {type: 'addressLine',   message: '',      group: [2]} },
                {name: 'addressLine2',    	value: null, validation: {type: 'addressLine',   message: '',      group: [2], canBeEmpty: true} },
                {name: 'suiteUnit',     	value: null, validation: null },
                {name: 'city',     			value: null, validation: {type: 'city',       message: '', group: [2] }},
                {name: 'province',     		value: null, validation: {type: 'presence',   message: '', group: [2] }}
                
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
		
		$(refs.cardDetailsPanel).hide();
		$(refs.addressPanel).hide();
		
		$(refs.flipCardYesNo).slider();
		$(refs.flipSameAddress).slider();
		
		$(refs.phone).mask('999-999-9999');
		
		populateProvinces();
	}
    
    //---------------------------------------------------------------------------------------
	
    function populateProvinces(){
        var sMethod = 'populateProvinces() ';
        console.log(logPrefix + sMethod);
        
        //luk: province list is constant so no need to re-populate it!
        if($(refs.province+' option').length>1){
            console.log(logPrefix + sMethod +" select control is already populated.");
            return;
        }
        
        var controlRef=$(refs.province);
        controlRef.empty();
        
        var list = new WICI.ProvincesList();
        $.each(list.data, function(index, item) {  
            var optTempl = '<option value="' +item.value+ '">'+translator.translateKey(item.text)+'</option>';            
            controlRef.append(optTempl);
        });
        
        //luk: the second list:
        controlRef=$(refs.province_prev);
        controlRef.empty();
        
        $.each(list.data, function(index, item) {  
            var optTempl = '<option value="' +item.value+ '">'+translator.translateKey(item.text)+'</option>';            
            controlRef.append(optTempl);
        });
    }
    //---------------------------------------------------------------------------------------
	
	function show(){
		$screenContainer.show();
		translator.run("SupplementaryCardRequestScreen");
	}

	//---------------------------------------------------------------------------------------
	
	function hide(){
		$screenContainer.hide();
	}

	//---------------------------------------------------------------------------------------
	
	function createView() {
		$screenContainer.empty();
		assembleNavigationBarAtTop();
		assemblePageHTML($screenContainer, "#WICISupCardScreen-template");
		$screenContainer.addClass("breadcrumbPadding");				
	}

	//---------------------------------------------------------------------------------------
	
	function assembleNavigationBarAtTop(){
		$("#pageHeader-template").template("pageHeader");
		$.tmpl("pageHeader", 
			{ 													
				"previousButtonId" 		: "SupplementaryCardRequestScreen_PrevButton", 
				"nextButtonId" 			: "SupplementaryCardRequestScreen_NextButton", 			
			}
		).appendTo("#SupplementaryCardRequestScreen");
	}
	
    //---------------------------------------------------------------------------------------
	
	function assemblePageHTML($element, templateName) {
		var html = $(templateName).tmpl(); 
		$element.append(html);
	}

	//---------------------------------------------------------------------------------------
	
	function bindEvents(){
	    
	    var sMethod = 'bindEvents() ';
	    console.log(logPrefix + sMethod);
	    
        $(refs.flipCardYesNo).change(function(){
            if("Y" == $(this).val()){
            	$(refs.cardDetailsPanel).show();
            }
            else
            {
            	$(refs.cardDetailsPanel).hide();
            }
	    });
	    
        $(refs.flipSameAddress).change(function(){
            if("Y" == $(this).val()){
            	$(refs.addressPanel).hide();
            	
            }
            else
            {
            	$(refs.addressPanel).show();
            }
	    });
		

        
        $('#SupplementaryCardRequestScreen_NextButton').click(function() {
            showNextScreen();
        });		
        $('#SupplementaryCardRequestScreen_PrevButton').click(function() {
        	showPrevScreen();
        });	        
        
        
        
        $(refs.cardRequest_Spouse).click(function(){
			clearRadios();
			$(refs.cardRequest_Spouse).addClass('ui-btn-active');
			model.set('cardRequestFor', 'S');
		});
		
        $(refs.cardRequest_ChildDependant).click(function(){
			clearRadios();
			$(refs.cardRequest_ChildDependant).addClass('ui-btn-active');
			model.set('cardRequestFor', 'C');
		});

        $(refs.cardRequest_Other).click(function(){
			clearRadios();
			$(refs.cardRequest_Other).addClass('ui-btn-active');
			model.set('cardRequestFor', 'O');
		});
	}	

	//---------------------------------------------------------------------------------------

	
	function clearRadios(){
		$(refs.cardRequest_Spouse).removeClass('ui-btn-active');
		$(refs.cardRequest_ChildDependant).removeClass('ui-btn-active');
		$(refs.cardRequest_Other).removeClass('ui-btn-active');
	}

	//---------------------------------------------------------------------------------------	
    function syncUserData(){
        var sMethod = 'syncUserData() ';
        console.log(logPrefix + sMethod);
  
        model.set('cardYesNo',      $(refs.flipCardYesNo + ' ' + 'option:selected').val());
        
        model.set('firstName',  $(refs.firstName).val().toUpperCase());
        model.set('initial',    $(refs.initial).val().toUpperCase());
        model.set('lastName',   $(refs.lastName).val().toUpperCase());
        model.set('birthDate',  $(refs.birthDate).val());
        model.set('phone',  $(refs.phone).val().replace(/-/g,''));
        
        model.set('sameAddressYesNo',      $(refs.flipSameAddress + ' ' + 'option:selected').val());
        
        model.set('postalCode',  $(refs.postalCode).val().toUpperCase());
        model.set('addressLine1',  $(refs.addressLine1).val().toUpperCase());
        model.set('addressLine2',  $(refs.addressLine2).val().toUpperCase());
        model.set('suiteUnit',  $(refs.suiteUnit).val().toUpperCase());
        model.set('city',  $(refs.city).val().toUpperCase());
        model.set('province',  $(refs.province).val());

        console.log(logPrefix + sMethod +' model data: '+model.toString());
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

    function populateProvinces(){
        var sMethod = 'populateProvinces() ';
        console.log(logPrefix + sMethod);
        
        //luk: placeofissues list is constant so no need to re-populate it!
        if($(refs.province+' option').length>1){
            console.log(logPrefix + sMethod +" select control is already populated.");
            return;
        }
        
        var controlRef=$(refs.province);
        controlRef.empty();
        
        var list = new WICI.ProvincesList();
        $.each(list.data, function(index, item) {  
            var optTempl = '<option value="' +item.value+ '">'+translator.translateKey(item.text)+'</option>';            
            controlRef.append(optTempl);
        });
    }
    //---------------------------------------------------------------------------------------
    function showPrevScreen(){
    	flow.back();
    }    
    //---------------------------------------------------------------------------------------
    function showNextScreen() {
    	var sMethod = 'showNextScreen() ';
        console.log(logPrefix + sMethod);
        
        syncUserData();

        if (app.validationsOn) {
            app.validationDecorator.clearErrArrtibute();
            
	        if(model.get('cardYesNo') == 'Y')
	        {
	        	var rez = model.validate(1);
	        	
	        	if (rez.length > 0) {
	                app.validationDecorator.applyErrAttribute(rez);
	                return;
	        	}
	        	
	        	if(model.get('sameAddressYesNo') == 'N')
	        	{
	        		var rez2 = model.validate(2);
	        		
	        		if (rez2.length > 0) {
		                app.validationDecorator.applyErrAttribute(rez2);
		                return; 
		        	}
	        	}
	        }
        }
        flow.next();
    }
    //---------------------------------------------------------------------------------------
	
};