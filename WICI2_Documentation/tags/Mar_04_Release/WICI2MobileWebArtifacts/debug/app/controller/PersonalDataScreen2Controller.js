ensureNamespaceExists();

WICI.PersonalDataScreen2Controller = function(activationItems, argTranslator, argMessageDialog) {
    var logPrefix = '[WICI.PersonalDataScreen2Controller]::';
	var $screenContainer = $("#PersonalDataScreen2");

	var translator = null;
	var messageDialog = null;
	var connectivityController = null;
	
	var	userPostalCode;
	var userStreetNumber;
	
	this.show = show;
	this.init = init;
	this.hide = hide;
	
	var flow = null;
	var addressLookupButton1Enabled = false;
	var addressLookupButton2Enabled = false;
	
	var $addressLookupButtonClicked = null;
	
	//---------------------------------------------------------------------------------------
	this.syncUserData = syncUserData; //luk: get user entered data here...
    var refs = {
            postalcode:         '#personalData2_Address_PostalCode_TextField',
            streetnumber:       '#personalData2_Address_StreetNumber_TextField',
            
            addressline1:       '#personalData2_Address_AddressLine1_TextField',
            addressline2:       '#personalData2_Address_AddressLine2_TextField',
            city:               '#personalData2_Address_City_TextField',
            suiteunit:          '#personalData2_Address_SuiteUnit_TextField',
            province:           '#personalData2_Address_Province_TextField',
            
            housingpayment:     '#personalData2_Address_MonthlyPayment_TextField',
            
            //luk: radio buttons:
            house:              '#personalData2_ResidenceTypeArea',
            house_Own:          '#personalData2_Address_Own_RadioButton',
            house_Rent:         '#personalData2_Address_Rent_RadioButton',
            house_Parents:      '#personalData2_Address_Parents_RadioButton',
            house_Other:        '#personalData2_Address_Other_RadioButton',
            
            //luk: TODO: Needed other control here...
            years:              '#personalData2_Address_Duration_years_TextField',
            months:             '#personalData2_Address_Duration_months_TextField',
            
            //luk: div is used to show/hide all prevAddress section
            previousAddressArea:'#personalData2_PreviousAddressArea',
            
            postalcode_prev:    '#personalData2_PreviousAddress_PostalCode_TextField',
            streetnumber_prev:  '#personalData2_PreviousAddress_StreetNumber_TextField',
            
            addressline1_prev:  '#personalData2_PreviousAddress_AddressLine1_TextField',
            addressline2_prev:  '#personalData2_PreviousAddress_AddressLine2_TextField',
            city_prev:          '#personalData2_PreviousAddress_City_TextField',
            suiteunit_prev:     '#personalData2_PreviousAddress_SuiteUnit_TextField',
            province_prev:      '#personalData2_PreviousAddress_Province_TextField'
    };
    var model =new WICI.BaseModel({
        name: 'personalData2_Address',
        refs: refs, //luk: with this model can return 'uiid' of the vaidated item!
        data:[
            {name: 'postalcode',            value: null, validation: {type: 'postal',     message: '',      group: [1]} },
            {name: 'streetnumber',          value: null, validation: {type: 'streetNumber',     message: '',      group: [1]} },

            {name: 'addressline1',          value: null, validation: {type: 'addressLine',   message: '',      group: [1]} },
            {name: 'addressline2',          value: null, validation: {type: 'addressLine',   message: '',      group: [1], canBeEmpty: true} },
            {name: 'suiteunit',             value: null, validation: null },
            {name: 'city',                  value: null, validation: {type: 'city',       message: '',      group: [1]} },
            {name: 'province',              value: null, validation: {type: 'presence',   message: '',      group: [1]} },
            
            {name: 'house',                 value: null, validation: {type: 'presence',   message: '',      group: [1]} },
            {name: 'housingpayment',        value: null, validation: {type: 'format',     message: '',      group: [1], matcher: /^[0-9\,]{1,4}$/,   canBeEmpty: true} },
            
            {name: 'years',                 value: null, validation: {type: 'presence',   message: '',      group: [1]} },
            {name: 'months',                value: null, validation: null },
            
            {name: 'postalcode_prev',       value: null, validation: {type: 'postal',     message: '',      group: [2]} },
            {name: 'streetnumber_prev',     value: null, validation: {type: 'streetNumber',     message: '',      group: [2]} },

            {name: 'addressline1_prev',     value: null, validation: {type: 'addressLine',   message: '',      group: [2]} },
            {name: 'addressline2_prev',     value: null, validation: {type: 'addressLine',   message: '',      group: [2], canBeEmpty: true} },
            {name: 'city_prev',             value: null, validation: {type: 'city',       message: '',      group: [2]} },
            {name: 'suiteunit_prev',        value: null, validation: null },
            {name: 'province_prev',         value: null, validation: {type: 'presence',   message: '',      group: [2]} }
       ]
    });    
    
    //---------------------------------------------------------------------------------------
	function init( argFlow ) {
        var sMethod = 'init() ';
        console.log(logPrefix + sMethod);
        
        flow = argFlow;        
        translator = argTranslator;         //(AA)Dependency Injection Principle: Allows for proper unit testing
        messageDialog = argMessageDialog;   //(AA)Dependency Injection Principle: Allows for proper unit testing
		
		connectivityController = new WICI.ConnectivityController(new WICI.ConnectionStatus(), null, translator, WICI.AppConfig.ConnectivityConfig);
		connectivityController.init();
		
		// luk: update reference to the current data model:
        if (!activationItems) {
            console.log(logPrefix + sMethod + ' "activationItems" is null!!!');
            activationItems = {};
        }
        var currentModel = activationItems.getModel(model.name);
        if (!currentModel) {
            activationItems.addModel(model);
        } else {
            model = currentModel;
        }
		
		createView();
		bindEvents();
		
		populateProvinces();
		restoreCreditCardData();
		
	
		// Set masks for UI elements
        setUIElementsMasks();
        
        createSliders();
	}    
	//---------------------------------------------------------------------------------------
	
	function createSliders(){

		$(refs.months).slider();
		$(refs.years).slider();
	}

	//---------------------------------------------------------------------------------------
    //luk: collect user data from UI to 'model' obj
    function syncUserData(){
        var sMethod = 'syncUserData() ';
        console.log(logPrefix + sMethod);

        model.set('postalcode',     $(refs.postalcode).val().toUpperCase());
        model.set('streetnumber',   $(refs.streetnumber).val().toUpperCase());
        model.set('addressline1',   $(refs.addressline1).val().toUpperCase());
        model.set('addressline2',   $(refs.addressline2).val().toUpperCase());
        model.set('suiteunit',      $(refs.suiteunit).val());
        model.set('city',           $(refs.city).val().toUpperCase());
        model.set('province',       $(refs.province).val());

        //luk: it's radiobuttons - the 'sync' is done in bind method!
        //model.set('house',          $(refs.house).val());
        model.set('housingpayment', $(refs.housingpayment).val());
        model.set('years',          $(refs.years).val());
        model.set('months',         $(refs.months).val());
        
        model.set('postalcode_prev',    $(refs.postalcode_prev).val().toUpperCase());
        model.set('streetnumber_prev',  $(refs.streetnumber_prev).val().toUpperCase());
        model.set('addressline1_prev',  $(refs.addressline1_prev).val().toUpperCase());
        model.set('addressline2_prev',  $(refs.addressline2_prev).val().toUpperCase());
        model.set('city_prev',          $(refs.city_prev).val().toUpperCase());
        model.set('suiteunit_prev',     $(refs.suiteunit_prev).val());
        model.set('province_prev',      $(refs.province_prev).val());
        
        console.log(logPrefix + sMethod +' model data: \n'+model.toString());
    }
    //---------------------------------------------------------------------------------------
    function onDurationChangesHandler(){
        var sMethod = 'onDurationChangesHandler() ';
        console.log(logPrefix + sMethod);
        
        //luk: 1) get user data
        //luk: 2) decide show/hide prev address whole section
        
        syncUserData();
        
        if(model.get('years')>=2 || 
                (model.get('years')==='' && model.get('months')==='')){ //luk: if all values empty - the screen is opened first time 
            $(refs.previousAddressArea).hide();
        }
        else{
            $(refs.previousAddressArea).show();
        }
        
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
/*	function captureCreditCardData(){
	    var sMethod = "captureCreditCardData()";
        console.log(logPrefix + sMethod);
        
		activationItems.personalData2_Address_PostalCode 			= 		$(refs.postalcode).val();
		activationItems.personalData2_Address_StreetNumber			= 		$(refs.streetnumber).val();
		activationItems.personalData2_Address_AddressLine1			=		$(refs.addressline1).val();
		activationItems.personalData2_Address_AddressLine2			=		$(refs.addressline2).val();
		activationItems.personalData2_Address_SuiteUnit				=		$(refs.suiteunit).val();
		activationItems.personalData2_Address_City					=		$(refs.city).val();
		activationItems.personalData2_Address_Province				=		$(refs.province).val();
			
		activationItems.personalData2_Address_HousingStatus			=		model.get('house');
		activationItems.personalData2_Address_MonthlyPayment		=		$(refs.housingpayment).val();
		activationItems.personalData2_Address_Duration_Years		=		$(refs.years).val();	
		activationItems.personalData2_Address_Duration_Months		=		$(refs.months).val();
		
		activationItems.personalData2_PreviousAddress_PostalCode 	= 		$(refs.postalcode_prev).val();
		activationItems.personalData2_PreviousAddress_StreetNumber	= 		$(refs.streetnumber_prev).val();
		activationItems.personalData2_PreviousAddress_AddressLine1	=		$(refs.addressline1_prev).val();
		activationItems.personalData2_PreviousAddress_AddressLine2	=		$(refs.addressline2_prev).val();
		activationItems.personalData2_PreviousAddress_SuiteUnit		=		$(refs.suiteunit_prev).val();
		activationItems.personalData2_PreviousAddress_City			=		$(refs.city_prev).val();
		activationItems.personalData2_PreviousAddress_Province		=		$(refs.province_prev).val();
	}*/
	//---------------------------------------------------------------------------------------
	//luk: this is a 'reverse' method for [syncUserData()]
	function restoreCreditCardData(){
	    var sMethod = "restoreCreditCardData()";
        console.log(logPrefix + sMethod);

		$(refs.postalcode).val(model.get('postalcode'));
		$(refs.streetnumber).val( model.get('streetnumber'));
		$(refs.addressline1).val( model.get('addressline1')); 
		$(refs.addressline2).val(model.get('addressline2'));  
		$(refs.suiteunit).val(model.get('suiteunit'));    
		$(refs.city).val(model.get('city'));              
		$(refs.province).val(model.get('province'));
		
		$(refs.housingpayment).val(model.get('housingpayment'));
		$(refs.years).val(model.get('years'));
		$(refs.months).val(model.get('months'));
		
		$(refs.postalcode_prev).val(model.get('postalcode_prev'));
		$(refs.streetnumber_prev).val(model.get('streetnumber_prev'));
		$(refs.addressline1_prev).val(model.get('addressline1_prev'));
		$(refs.addressline2_prev).val(model.get('addressline2_prev'));
		$(refs.suiteunit_prev).val(model.get('suiteunit_prev'));
		$(refs.city_prev).val(model.get('city_prev'));
		$(refs.province_prev).val(model.get('province_prev'));
		
		//luk: ui logic related to values:
		updateResidenceTypeRadioButtons();
		onDurationChangesHandler();
	}
	//---------------------------------------------------------------------------------------
	function updateResidenceTypeRadioButtons() {
        clearRadios();
        switch (model.get('house')) {
        case 'M':
            $(refs.house_Own).addClass('ui-btn-active');
            break;
        case 'R':
            $(refs.house_Rent).addClass('ui-btn-active');
            break;
        case 'P':
            $(refs.house_Parents).addClass('ui-btn-active');
            break;
        case 'O':
            $(refs.house_Other).addClass('ui-btn-active');
            break;
        }
    }
    //---------------------------------------------------------------------------------------
    function setUIElementsMasks() {
        //luk: TODO: find out if it's possible to use mask for postal code
        //$(refs.postalcode).mask('A9A9A9');
    }
	//---------------------------------------------------------------------------------------
	function show(){
		$screenContainer.show();
		translator.run("PersonalDataScreen2");
	}
	//---------------------------------------------------------------------------------------
	function hide(){
		$screenContainer.hide();
	}
	//---------------------------------------------------------------------------------------
	function createView() {
		$screenContainer.empty();
		assembleNavigationBarAtTop();
		assemblePageHTML($screenContainer, "#WICIPersonalDataScreen2-template");
		hideAddressLookupSelectionDropDowns();
		$screenContainer.addClass("breadcrumbPadding");		
		initFields();
	}
	
	function hideAddressLookupSelectionDropDowns(){
		$("#addressLookup_Address_AddressLine1_MultipleControl").hide();
		$("#addressLookup_Address_AddressLine2_MultipleControl").hide();
		$("#addressLookup_PreviousAddress_AddressLine1_MultipleControl").hide();
		$("#addressLookup_PreviousAddress_AddressLine2_MultipleControl").hide();
	}
	
	//---------------------------------------------------------------------------------------
	
	function assembleNavigationBarAtTop() {
        $("#pageHeader-template").template("pageHeader");
        $.tmpl("pageHeader", {
            "previousButtonId" : "PersonalDataScreen2_PrevButton",
            "nextButtonId" : "PersonalDataScreen2_NextButton",
        }).appendTo("#PersonalDataScreen2");
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
        
		bindNavigationButtons();
		bindAddressHandlingControls();
		bindRadioButtons();
		bindRealTimeDurationControl();
	}	
    //---------------------------------------------------------------------------------------
	function bindRadioButtons(){
		//luk: bind to 'Residence Type (house)' radio battons:
		$(refs.house_Own).click(function(){
            clearRadios();
            $(refs.house_Own).addClass('ui-btn-active');
            model.set('house', 'M');
        });
		$(refs.house_Rent).click(function(){
            clearRadios();
            $(refs.house_Rent).addClass('ui-btn-active');
            model.set('house', 'R');
        });
		$(refs.house_Parents).click(function(){
            clearRadios();
            $(refs.house_Parents).addClass('ui-btn-active');
            model.set('house', 'P');
        });
		$(refs.house_Other).click(function(){
            clearRadios();
            $(refs.house_Other).addClass('ui-btn-active');
            model.set('house', 'O');
        });		
	}
	 //---------------------------------------------------------------------------------------
	function bindAddressHandlingControls(){
		$("#personalData2_AddressLookupButton").click(function(){
			if(addressLookupButton1Enabled){
				$addressLookupButtonClicked = $("#personalData2_AddressLookupButton");
				invokeAddressLookup( $("#personalData2_Address_PostalCode_TextField"),$("#personalData2_Address_StreetNumber_TextField"), addressLookupSuccess, addressLookupFail );
			}
		});		
		
		$("#personalData2_Address_PostalCode_TextField").click(function(){
			setInterval(function(){ handleRealTimeKeyStrokes($("#personalData2_Address_PostalCode_TextField")); }, 100);
		});	
		$("#personalData2_Address_StreetNumber_TextField").click(function(){
			setInterval(function(){ handleRealTimeKeyStrokes($("#personalData2_Address_StreetNumber_TextField")); }, 100);
		});
		
		$("#personalData2_PreviousAddressLookupButton").click(function(){
			if(addressLookupButton2Enabled){
				$addressLookupButtonClicked = $("#personalData2_PreviousAddressLookupButton");
				invokeAddressLookup( $("#personalData2_PreviousAddress_PostalCode_TextField"),$("#personalData2_PreviousAddress_StreetNumber_TextField"), addressLookupSuccess, addressLookupFail );				
			}
		});

		$("#personalData2_PreviousAddress_PostalCode_TextField").click(function(){
			setInterval(function(){ handleRealTimeKeyStrokes($("#personalData2_PreviousAddress_PostalCode_TextField")); }, 100);
		});	
		$("#personalData2_PreviousAddress_StreetNumber_TextField").click(function(){
			setInterval(function(){ handleRealTimeKeyStrokes($("#personalData2_PreviousAddress_StreetNumber_TextField")); }, 100);
		});
		
		////////////////////////////////////////////////////////////////////////////////////////////
		
		$("#personalData2_Address_AddressLine1_SelectField").change(function(){
			$("#personalData2_Address_AddressLine1_TextField").val($("#personalData2_Address_AddressLine1_SelectField").val());
		});

		$("#personalData2_Address_AddressLine2_SelectField").change(function(){
			$("#personalData2_Address_AddressLine2_TextField").val($("#personalData2_Address_AddressLine2_SelectField").val());
		});

		$("#personalData2_PreviousAddress_AddressLine1_SelectField").change(function(){
			$("#personalData2_PreviousAddress_AddressLine1_TextField").val($("#personalData2_PreviousAddress_AddressLine1_SelectField").val());
		});

		$("#personalData2_PreviousAddress_AddressLine2_SelectField").change(function(){
			$("#personalData2_PreviousAddress_AddressLine2_TextField").val($("#personalData2_PreviousAddress_AddressLine2_SelectField").val());
		});
	}
	 //---------------------------------------------------------------------------------------
	function bindRealTimeDurationControl(){	
		//luk: bind to duration control edit event:
		$(refs.years).change(function(){
            onDurationChangesHandler();
        });   
        
	}
	 //---------------------------------------------------------------------------------------
	function bindNavigationButtons(){
        $('#PersonalDataScreen2_NextButton').click(function() {
            showNextScreen();
        });
        $('#PersonalDataScreen2_PrevButton').click(function() {
        	showPrevScreen();
        });        		
	}
	//---------------------------------------------------------------------------------------
	function handleRealTimeKeyStrokes($argField){
		if($argField.attr('id')=="personalData2_Address_PostalCode_TextField" || $argField.attr('id')=="personalData2_Address_StreetNumber_TextField")
			updateAddressLookupButtonState($("#personalData2_Address_PostalCode_TextField"),$("#personalData2_Address_StreetNumber_TextField"),$("#personalData2_AddressLookupButton"));
		if($argField.attr('id')=="personalData2_PreviousAddress_PostalCode_TextField" || $argField.attr('id')=="personalData2_PreviousAddress_StreetNumber_TextField")						
			updateAddressLookupButtonState($("#personalData2_PreviousAddress_PostalCode_TextField"),$("#personalData2_PreviousAddress_StreetNumber_TextField"),$("#personalData2_PreviousAddressLookupButton"));
	}
	//---------------------------------------------------------------------------------------
	function initFields(){
		updateAddressLookupButtonState($("#personalData2_Address_PostalCode_TextField"),$("#personalData2_Address_StreetNumber_TextField"),$("#personalData2_AddressLookupButton"));
		updateAddressLookupButtonState($("#personalData2_PreviousAddress_PostalCode_TextField"),$("#personalData2_PreviousAddress_StreetNumber_TextField"),$("#personalData2_PreviousAddressLookupButton"));
	}
	//---------------------------------------------------------------------------------------
	function disableAddressLookupButton( $argButtonID ){		
		$argButtonID.removeClass("greenflat");
		$argButtonID.addClass("grayflat");
		if( $argButtonID.attr('id')=="personalData2_AddressLookupButton" )
			addressLookupButton1Enabled=false;
		if( $argButtonID.attr('id')=="personalData2_PreviousAddressLookupButton")
			addressLookupButton2Enabled=false;
	}
	//---------------------------------------------------------------------------------------
	function enableAddressLookupButton( $argButtonID ){
		$argButtonID.removeClass('grayflat');
		$argButtonID.addClass("greenflat");
		if( $argButtonID.attr('id')=="personalData2_AddressLookupButton" )
			addressLookupButton1Enabled=true;
		if( $argButtonID.attr('id')=="personalData2_PreviousAddressLookupButton" )
			addressLookupButton2Enabled=true;
	}
	//---------------------------------------------------------------------------------------
	function updateAddressLookupButtonState( $argPostalCodeFieldID, $argStreetNumberFieldID, $argAddressLookupButtonID ){
		var postalCode = $argPostalCodeFieldID.val();
		var streetNumber = $argStreetNumberFieldID.val();		
		if( postalCode==="" || streetNumber==="" )
			disableAddressLookupButton($argAddressLookupButtonID);
		else
			enableAddressLookupButton($argAddressLookupButtonID);
	}	
	//---------------------------------------------------------------------------------------
	function clearRadios(){
	    var sMethod = 'clearRadios() ';
        console.log(logPrefix + sMethod);
        
		$(refs.house_Own).removeClass('ui-btn-active');
		$(refs.house_Rent).removeClass('ui-btn-active');
		$(refs.house_Parents).removeClass('ui-btn-active');
		$(refs.house_Other).removeClass('ui-btn-active');
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
        
		new WICI.LoadingIndicatorController().hide();		
		if( argResponse && !_.isEmpty(argResponse)){			
			var lookupHelper = new WICI.AddressLookupResponseHelper();
			lookupHelper.setAddressResponseObject(argResponse);
			
			console.log("Address Line 1:" + lookupHelper.getAddressLine1() );
			console.log("Address Line 2:" + lookupHelper.getAddressLine2() );
			console.log("City:" + lookupHelper.getCityName());
			console.log("Province:" + lookupHelper.getProvince());
			if($addressLookupButtonClicked.attr('id')=="personalData2_AddressLookupButton" )
			{
				if( lookupHelper.getAddressLine1().length>1){
					$("#addressLookup_Address_AddressLine1_MultipleControl").show();
					repopulateAddressLineControl(lookupHelper.getAddressLine1(),$("#personalData2_Address_AddressLine1_SelectField"));
				}				
				if( lookupHelper.getAddressLine1().length<=1){
					$("#addressLookup_Address_AddressLine1_MultipleControl").hide();
					$("#personalData2_Address_AddressLine1_TextField").val(lookupHelper.getAddressLine1());
				}
				if( lookupHelper.getAddressLine2().length>1){
					$("#addressLookup_Address_AddressLine2_MultipleControl").show();
					repopulateAddressLineControl(lookupHelper.getAddressLine2(),$("#personalData2_Address_AddressLine2_SelectField"));
				}				
				if( lookupHelper.getAddressLine2().length<=1){
					$("#addressLookup_Address_AddressLine2_MultipleControl").hide();
					$("#personalData2_Address_AddressLine2_TextField").val(lookupHelper.getAddressLine2());
				}
				$("#personalData2_Address_City_TextField").val(lookupHelper.getCityName());
				$("#personalData2_Address_Province_TextField").val(lookupHelper.getProvince());
			}
			else if($addressLookupButtonClicked.attr('id')=="personalData2_PreviousAddressLookupButton")
			{
				if( lookupHelper.getAddressLine1().length>1){
					$("#addressLookup_PreviousAddress_AddressLine1_MultipleControl").show();
					repopulateAddressLineControl(lookupHelper.getAddressLine1(),$("#personalData2_PreviousAddress_AddressLine1_SelectField"));
				}				
				if( lookupHelper.getAddressLine1().length<=1){
					$("#addressLookup_PreviousAddress_AddressLine1_MultipleControl").hide();
					$("#personalData2_PreviousAddress_AddressLine1_TextField").val(lookupHelper.getAddressLine1());
				}
				if( lookupHelper.getAddressLine2().length>1){
					$("#addressLookup_PreviousAddress_AddressLine2_MultipleControl").show();
					repopulateAddressLineControl(lookupHelper.getAddressLine2(),$("#personalData2_PreviousAddress_AddressLine2_SelectField"));
				}				
				if( lookupHelper.getAddressLine2().length<=1){
					$("#addressLookup_PreviousAddress_AddressLine2_MultipleControl").hide();
					$("#personalData2_PreviousAddress_AddressLine2_TextField").val(lookupHelper.getAddressLine2());
				}
				$("#personalData2_PreviousAddress_City_TextField").val(lookupHelper.getCityName());
				$("#personalData2_PreviousAddress_Province_TextField").val(lookupHelper.getProvince());
			}
		}
		else{
			messageDialog.error(translator.translateKey("addressLookup_noResults"));
		}
	}
	function addressLookupFail( argResponse ){
		new WICI.LoadingIndicatorController().hide();
		messageDialog.error(translator.translateKey("addressLookup_failedMessage"));
	}
	//---------------------------------------------------------------------------------------
	function repopulateAddressLineControl(argArrayOfAddressLines, argControlToPopulate) {
        if (argArrayOfAddressLines) {
            argControlToPopulate.empty();
            $.each(argArrayOfAddressLines, function(index, item) {
            	var addressOption = buildOptionItem(item,item);
                argControlToPopulate.append(addressOption);
            });
        }
    }
	//---------------------------------------------------------------------------------------
	function buildOptionItem( argDisplayText, argValue){
		return "<option value='" + argValue + "'>" + argDisplayText + "</option>"; 
	}

	//---------------------------------------------------------------------------------------
	function showPrevScreen(){
	    syncUserData(); // luk: here we preserving all user changes
		flow.back();
	}	
	//---------------------------------------------------------------------------------------
	function showNextScreen(){
        var sMethod = 'showNextScreen() ';
        console.log(logPrefix + sMethod);
        
        syncUserData();

        if (app.validationsOn) {
            app.validationDecorator.clearErrArrtibute();            //luk: remove all errors highlighting
            
            //luk: validate group 1
            var rez = model.validate(1);
            app.validationDecorator.applyErrAttribute(rez);         //luk: highlight error fields if any
            
            //luk: if duration is less then 2 years - validate group 2:
            var rez2 =[];
            if((model.get('years')>=2)===false){
                rez2 = model.validate(2);
                app.validationDecorator.applyErrAttribute(rez2);     //luk: highlight error fields if any
            }
            
            if (rez.length > 0 || rez2.length>0) {
                return; // luk: cannot pass untill all errors are fixed
            }
        }
        //captureCreditCardData();
		flow.next();
	}
	//---------------------------------------------------------------------------------------
};