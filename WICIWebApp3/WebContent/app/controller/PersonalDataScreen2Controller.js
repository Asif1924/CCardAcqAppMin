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
	this.syncUserData = syncUserData; 
    var refs = {
            postalcode:         '#personalData2_Address_PostalCode_TextField',
            streetnumber:       '#personalData2_Address_StreetNumber_TextField',
            
            addressline1:       '#personalData2_Address_AddressLine1_TextField',
            //addressline2:       '#personalData2_Address_AddressLine2_TextField',
            city:               '#personalData2_Address_City_TextField',
            suiteunit:          '#personalData2_Address_SuiteUnit_TextField',
            province:           '#personalData2_Address_Province_TextField',
            
            housingpayment:     '#personalData2_Address_MonthlyPayment_TextField',
            
            house:              '#personalData2_ResidenceTypeArea',
            house_Own:          '#personalData2_Address_Own_RadioButton',
            house_Rent:         '#personalData2_Address_Rent_RadioButton',
            house_Parents:      '#personalData2_Address_Parents_RadioButton',
            house_Other:        '#personalData2_Address_Other_RadioButton',
            
            durationRegion:		'#personalData2_Duration',
            years:              '#personalData2_Address_Duration_years_TextField',
            months:             '#personalData2_Address_Duration_months_TextField',
            
            previousAddressArea:'#personalData2_PreviousAddressArea',
            
            postalcode_prev:    '#personalData2_PreviousAddress_PostalCode_TextField',
            streetnumber_prev:  '#personalData2_PreviousAddress_StreetNumber_TextField',
            
            addressline1_prev:  '#personalData2_PreviousAddress_AddressLine1_TextField',
            //addressline2_prev:  '#personalData2_PreviousAddress_AddressLine2_TextField',
            city_prev:          '#personalData2_PreviousAddress_City_TextField',
            suiteunit_prev:     '#personalData2_PreviousAddress_SuiteUnit_TextField',
            province_prev:      '#personalData2_PreviousAddress_Province_TextField'
    };
    var model =new WICI.BaseModel({
        name: 'personalData2_Address',
        refs: refs, 
        data:[
            {name: 'postalcode',   value: null, validation: {type: 'postal',	   message: '', group: [1]} },
            {name: 'streetnumber', value: null, validation: {type: 'streetNumber', message: '', group: [1]} },

            {name: 'addressline1', value: null, validation: {type: 'addressLine',  message: '', group: [1]} },
            {name: 'addressline2', value: null, validation: {type: 'addressLine',  message: '', group: [1], canBeEmpty: true} },
            {name: 'suiteunit',    value: null, validation: {type: 'suiteUnit',    message: '', group: [1], canBeEmpty: true} },
            {name: 'city',         value: null, validation: {type: 'city',         message: '', group: [1]} },
            {name: 'province',     value: null, validation: {type: 'presence',     message: '', group: [1]} },
            
            {notField: true, name: 'addressline1_Array', value: null },
            {notField: true, name: 'addressline2_Array', value: null },
            
            {name: 'house',             value: null, validation: {type: 'presence',     message: '', group: [1]} },
			// US4039
            {name: 'housingpayment',    value: null, validation: {type: 'format',       message: '', group: [1], matcher: /^[0-9\,]{1,4}$/ } },
            
            {name: 'years',             value: null, validation: {type: 'presence',     message: '', group: [3]} },
            {name: 'months',            value: null, validation: {type: 'presence',     message: '', group: [3]} },
            
            {name: 'postalcode_prev',   value: null, validation: {type: 'postal',       message: '', group: [2]} },
            {name: 'streetnumber_prev', value: null, validation: {type: 'streetNumber', message: '', group: [2]} },

            {name: 'addressline1_prev', value: null, validation: {type: 'addressLine',  message: '', group: [2]} },
            {name: 'addressline2_prev', value: null, validation: {type: 'addressLine',  message: '', group: [2], canBeEmpty: true} },
            {name: 'city_prev',         value: null, validation: {type: 'city',         message: '', group: [2]} },
            {name: 'suiteunit_prev',    value: null, validation: {type: 'suiteUnit',    message: '', group: [2], canBeEmpty: true} },
            {name: 'province_prev',     value: null, validation: {type: 'presence',     message: '', group: [2]} },
            
            {notField:true, name: 'addressline1_prev_Array', value: null },
            //{notField:true, name: 'addressline2_prev_Array', value: null },
       ]
    });    
    
    this.innerModel = model;
    
    //---------------------------------------------------------------------------------------
	function init( argFlow ) {
        var sMethod = 'init() ';
        console.log(logPrefix + sMethod);
        
        flow = argFlow;        
        translator = argTranslator;         //(AA)Dependency Injection Principle: Allows for proper unit testing
        messageDialog = argMessageDialog;   //(AA)Dependency Injection Principle: Allows for proper unit testing
		
		connectivityController = new WICI.ConnectivityController(new WICI.ConnectionStatus(), messageDialog, translator, WICI.AppConfig.ConnectivityConfig);
		connectivityController.init();
		
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
		populatePrevProvinces();
		restoreCreditCardData();
		
        setUIElementsMasks();
        
        createSliders();
      
        //initSpinInputs();
	}    
	//---------------------------------------------------------------------------------------
	
	function initSpinInputs() {
		
		$('<div class="spindec spinbutton">-</div>').insertBefore(".durationInput");
		$('<div class="spininc spinbutton">+</div>').insertAfter(".durationInput");
		  
		$(".spinbutton").on("click", function() {
		
			var $button = $(this);
		    var oldValue = $button.parent().find("input").val();
		    
		    var maxValue = $button.parent().find("input").attr('max');
		    var minValue = $button.parent().find("input").attr('min');
		
		    var newVal = parseFloat(oldValue);
		    
		    if ($button.text() == "+") {
		    	if (parseFloat(oldValue) < parseFloat(maxValue)) {
		    		newVal = parseFloat(oldValue) + 1;
		    	}
		  	} else {
		  		// Don't allow decrementing below zero
		  		if (oldValue > 0) {
		  			newVal = parseFloat(oldValue) - 1;
			    } else {
			    	newVal = 0;
			    }
			}
		
		    if(isNaN(newVal)) {
		    	newVal = 0;
		    }
		    
		    $button.parent().find("input").val(newVal);
		});
	}
	
	
	function createSliders(){

		//$(refs.months).slider();
		//$(refs.years).slider();
	}

	//---------------------------------------------------------------------------------------
    function syncUserData(){
        var sMethod = 'syncUserData() ';
        console.log(logPrefix + sMethod);

        model.set('postalcode',     $(refs.postalcode).val().toUpperCase());
        model.set('streetnumber',   $(refs.streetnumber).val().toUpperCase());
        model.set('addressline1',   $(refs.addressline1).val().toUpperCase());
       // model.set('addressline2',   $(refs.addressline2).val().toUpperCase());
        model.set('addressline2',   '');
        model.set('suiteunit',      $(refs.suiteunit).val().toUpperCase());
        model.set('city',           $(refs.city).val().toUpperCase());
        model.set('province',       $(refs.province).val());

        //model.set('house',          $(refs.house).val());
        model.set('housingpayment', $(refs.housingpayment).val().replace(/,/g,'').replace(' $ ','').replace('.',','));
        //model.set('housingpayment', $(refs.housingpayment).val());
        model.set('years',          $(refs.years).val());
        model.set('months',         $(refs.months).val());
        
        model.set('postalcode_prev',    $(refs.postalcode_prev).val().toUpperCase());
        model.set('streetnumber_prev',  $(refs.streetnumber_prev).val().toUpperCase());
        model.set('addressline1_prev',  $(refs.addressline1_prev).val().toUpperCase());
        //model.set('addressline2_prev',  $(refs.addressline2_prev).val().toUpperCase()); 
        model.set('addressline2_prev',  '');
        model.set('city_prev',          $(refs.city_prev).val().toUpperCase());
        model.set('suiteunit_prev',     $(refs.suiteunit_prev).val().toUpperCase());
        model.set('province_prev',      $(refs.province_prev).val());
        
        console.log(logPrefix + sMethod +' model data: \n'+model.toString());
    }
    //---------------------------------------------------------------------------------------
    function onDurationChangesHandler(){
        var sMethod = 'onDurationChangesHandler() ';
        console.log(logPrefix + sMethod);
        
        syncUserData();
        
        if(model.get('years')>=2 || (model.get('years')==='' && model.get('months')==='')){  
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
		var provinceVal = model.get('province');
        var controlRef=$(refs.province);
        controlRef.empty();
        var list = new WICI.ProvincesList();
        $.each(list.data, function(index, item) {  
            var optTempl = '<option value="' +item.value+ '">'+translator.translateKey(item.text)+'</option>';            
            controlRef.append(optTempl);
        });
        
		if(provinceVal){
		$(refs.province + " [value='" + provinceVal + "']").attr("selected",
		"selected");
		}
    	}
    function populatePrevProvinces(){
        var sMethod = 'populatePrevProvinces() ';
        console.log(logPrefix + sMethod);
		var province_prevVal = model.get('province_prev');
        var controlRefPrev=$(refs.province_prev);
        controlRefPrev.empty();
        var prevlist = new WICI.ProvincesList();
        $.each(prevlist.data, function(index, item) {  
            var optTemplPrev = '<option value="' +item.value+ '">'+translator.translateKey(item.text)+'</option>';            
            controlRefPrev.append(optTemplPrev);
        });
		if(province_prevVal){
			$(refs.province_prev + " [value='" + province_prevVal + "']").attr("selected",
			"selected");
		}
    }

	//---------------------------------------------------------------------------------------
	function restoreCreditCardData(){
	    var sMethod = "restoreCreditCardData()";
        console.log(logPrefix + sMethod);
        
		$(refs.postalcode).val(model.get('postalcode'));
		$(refs.streetnumber).val( model.get('streetnumber'));
		$(refs.addressline1).val( model.get('addressline1')); 
		/* changes for task CTCOFSMB-1431, disabling address line 2 
		$(refs.addressline2).val(model.get('addressline2'));  
		*/
		$(refs.suiteunit).val(model.get('suiteunit'));    
		$(refs.city).val(model.get('city'));              
		$(refs.province).val(model.get('province'));
		
		$(refs.housingpayment).val(model.get('housingpayment'));
		$(refs.years).val(model.get('years'));
		$(refs.months).val(model.get('months'));
		
		$(refs.postalcode_prev).val(model.get('postalcode_prev'));
		$(refs.streetnumber_prev).val(model.get('streetnumber_prev'));
		$(refs.addressline1_prev).val(model.get('addressline1_prev'));
		/* changes for task CTCOFSMB-1431, disabling address line 2 
		$(refs.addressline2_prev).val(model.get('addressline2_prev'));
		*/
		$(refs.suiteunit_prev).val(model.get('suiteunit_prev'));
		$(refs.city_prev).val(model.get('city_prev'));
		$(refs.province_prev).val(model.get('province_prev'));
		
		updateResidenceTypeRadioButtons();
		onDurationChangesHandler();
		updateLookUpControls();
	}
	//---------------------------------------------------------------------------------------
	function updateLookUpControls()
	{
		if(model.get('addressline1_Array'))
		{
			if( model.get('addressline1_Array') && model.get('addressline1_Array').length>1){
				$("#addressLookup_Address_AddressLine1_MultipleControl").show();
				repopulateAddressLineControl(model.get('addressline1_Array'),$("#personalData2_Address_AddressLine1_SelectField"), 'addressline1_Array');
			}				
			if(model.get('addressline1_Array') &&  model.get('addressline1_Array').length<=1){
				$("#addressLookup_Address_AddressLine1_MultipleControl").hide();
				$("#personalData2_Address_AddressLine1_TextField").val(model.get('addressline1_Array'));
			}
		}
		/* changes for task CTCOFSMB-1431, disabling address line 2 
		if(model.get('addressline2_Array'))
		{
			if( model.get('addressline2_Array') && model.get('addressline2_Array').length>1){
				$("#addressLookup_Address_AddressLine2_MultipleControl").show();
				repopulateAddressLineControl(model.get('addressline2_Array'),$("#personalData2_Address_AddressLine2_SelectField"), 'addressline2_Array');
			}				
			if( model.get('addressline2_Array') && model.get('addressline2_Array').length<=1){
				$("#addressLookup_Address_AddressLine2_MultipleControl").hide();
				$(refs.addressline2).val(model.get('addressline2_Array'));
			}
		}*/
		
		if(model.get('addressline1_prev_Array'))
		{
			if( model.get('addressline1_prev_Array') && model.get('addressline1_prev_Array').length>1){
				$("#addressLookup_PreviousAddress_AddressLine1_MultipleControl").show();
				repopulateAddressLineControl(model.get('addressline1_prev_Array'),$("#personalData2_PreviousAddress_AddressLine1_SelectField"), 'addressline1_prev_Array');
			}				
			if(model.get('addressline1_prev_Array') && model.get('addressline1_prev_Array').length<=1){
				$("#addressLookup_PreviousAddress_AddressLine1_MultipleControl").hide();
				$("#personalData2_PreviousAddress_AddressLine1_TextField").val(model.get('addressline1_prev_Array'));
			}
		}
		/* changes for task CTCOFSMB-1431, disabling address line 2 
		if(model.get('addressline2_prev_Array'))
		{
			if( model.get('addressline2_prev_Array') && model.get('addressline2_prev_Array').length>1){
				$("#addressLookup_PreviousAddress_AddressLine2_MultipleControl").show();
				repopulateAddressLineControl(model.get('addressline2_prev_Array'),$("#personalData2_PreviousAddress_AddressLine2_SelectField"), 'addressline2_prev_Array');
			}				
			if( model.get('addressline2_prev_Array') && model.get('addressline2_prev_Array').length<=1){
				$("#addressLookup_PreviousAddress_AddressLine2_MultipleControl").hide();
				$(refs.addressline2_prev).val(model.get('addressline2_prev_Array'));
			}
		}*/
		
		updateAddressLookupButtonState($("#personalData2_Address_PostalCode_TextField"),$("#personalData2_Address_StreetNumber_TextField"),$("#personalData2_AddressLookupButton"));
		updateAddressLookupButtonState($("#personalData2_PreviousAddress_PostalCode_TextField"),$("#personalData2_PreviousAddress_StreetNumber_TextField"),$("#personalData2_PreviousAddressLookupButton"));
	}
	
	//---------------------------------------------------------------------------------------
	function updateResidenceTypeRadioButtons() {
        clearRadios();
        switch (model.get('house')) {
        case 'O':
            $(refs.house_Own).addClass('ui-btn-active');
            break;
        case 'R':
            $(refs.house_Rent).addClass('ui-btn-active');
            break;
        case 'P':
            $(refs.house_Parents).addClass('ui-btn-active');
            break;
        case 'M':
            $(refs.house_Other).addClass('ui-btn-active');
            break;
        }
    }
    //---------------------------------------------------------------------------------------
    function setUIElementsMasks() {
        //$(refs.postalcode).mask('A9A9A9');
    	$(refs.housingpayment).autoNumeric('init', {aSign:' $ ',vMin:'0.00', vMax:'9999.99', mDec:'0', wEmpty: 'sign'});
    	
    	//$(refs.years).mask('999');
    	//$(refs.months).mask('99');
    	$(refs.years).durationControl('createControl');
    	$(refs.months).durationControl('createControl');
    	
    	$(refs.years).autoNumeric('init', {aSign:'',vMin:'0', vMax:'100', mDec:'0'});
    	$(refs.months).autoNumeric('init', {aSign:'',vMin:'0', vMax:'11', mDec:'0'});
    }
	//---------------------------------------------------------------------------------------
	function show(){
		var sMethod = "show";
		console.log(logPrefix + sMethod);
		$screenContainer.show();
		translator.run("PersonalDataScreen2");
		app.selectorReduceHelper.init();
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
		//disableAddressline2();
			//personalData2_Address_Duration_years_TextField_Up
		//$("#personalData2_Address_Duration_years_TextField_Up").css("width", "30px");
	}
	function hideAddressLookupSelectionDropDowns(){
		$("#addressLookup_Address_AddressLine1_MultipleControl").hide();
		$("#addressLookup_Address_AddressLine2_MultipleControl").hide();
		$("#addressLookup_PreviousAddress_AddressLine1_MultipleControl").hide();
		$("#addressLookup_PreviousAddress_AddressLine2_MultipleControl").hide();
	}
	//---------------------------------------------------------------------------------------
	function disableAddressline2(){
		$(refs.addressline2).prop('disabled', true);
		$(refs.addressline2_prev).prop('disabled', true);
	}
	//---------------------------------------------------------------------------------------
	function assembleNavigationBarAtTop() {
        $("#pageHeader-template").template("pageHeader");
        $.tmpl("pageHeader", {
        	"logo_En" : translator.currentLanguageEnglish(),
            "previousButtonId" : "PersonalDataScreen2_PrevButton",
            "nextButtonId" : "PersonalDataScreen2_NextButton",
            "settingsButtonId" : "PersonalDataScreen2_SettingsButton"
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
		
		$(refs.province).on("change", function() {			
			console.log(refs.province + '::change');
			model.set("province", $(refs.province).val());
		});
		
		$(refs.province).bind('translatorFinished',function(){
				console.log(refs.province + 'bind(translatorFinished)');
				populateProvinces();	
				$(refs.province).val(model.get("province"));

		});
		
		$(refs.province_prev).on("change", function() {			
			console.log(refs.province_prev + '::change');
			model.set("province_prev", $(refs.province_prev).val());
		});
		
		$(refs.province_prev).bind('translatorFinished',function(){
				console.log(refs.province_prev + 'bind(translatorFinished)');
				populatePrevProvinces();	
				$(refs.province_prev).val(model.get("province_prev"));
		});
		
	}	
    //---------------------------------------------------------------------------------------
	function bindRadioButtons(){
		$(refs.house_Own).click(function(){
            clearRadios();
            $(refs.house_Own).addClass('ui-btn-active');
            model.set('house', 'O');
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
            model.set('house', 'M');
        });		
	}
	 //---------------------------------------------------------------------------------------
	function bindAddressHandlingControls(){
		$("#personalData2_AddressLookupButton").click(function(){
			if(addressLookupButton1Enabled){
				$addressLookupButtonClicked = $("#personalData2_AddressLookupButton");
				
				var postalCode = $(refs.postalcode).val();
				var validationResult = model.validateFieldByName('postalcode', postalCode.toUpperCase());
				if(validationResult.length === 0)
				{
					if (app.validationsOn) {
						app.validationDecorator.clearErrArrtibute();
					}
					
					invokeAddressLookup( $("#personalData2_Address_PostalCode_TextField"),$("#personalData2_Address_StreetNumber_TextField"), addressLookupSuccess, addressLookupFail );
				}
				else
				{
					if (app.validationsOn) {
						app.validationDecorator.applyErrAttribute(validationResult);
					}
				}
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
				
				var postalCode = $(refs.postalcode_prev).val();
				var validationResult = model.validateFieldByName('postalcode_prev', postalCode.toUpperCase());
				if(validationResult.length === 0)
				{
					if (app.validationsOn) {
						app.validationDecorator.clearErrArrtibute();
					}
				
					invokeAddressLookup( $("#personalData2_PreviousAddress_PostalCode_TextField"),$("#personalData2_PreviousAddress_StreetNumber_TextField"), addressLookupSuccess, addressLookupFail );
				}
				else
				{
					if (app.validationsOn) {
						app.validationDecorator.applyErrAttribute(validationResult);
					}
				}
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
		/* changes for task CTCOFSMB-1431, disabling address line 2 
		$("#personalData2_Address_AddressLine2_SelectField").change(function(){
			$(refs.addressline2).val($("#personalData2_Address_AddressLine2_SelectField").val());
		});*/

		$("#personalData2_PreviousAddress_AddressLine1_SelectField").change(function(){
			$("#personalData2_PreviousAddress_AddressLine1_TextField").val($("#personalData2_PreviousAddress_AddressLine1_SelectField").val());
		});
		/*	changes for task CTCOFSMB-1431, disabling address line 2 
		$("#personalData2_PreviousAddress_AddressLine2_SelectField").change(function(){
			$(refs.addressline2_prev).val($("#personalData2_PreviousAddress_AddressLine2_SelectField").val());
		});*/
	}
	 //---------------------------------------------------------------------------------------
	function bindRealTimeDurationControl(){	
		$(refs.years).change(function(){
            onDurationChangesHandler();
        });   
		
		$(refs.months).change(function(){
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
		
		if( postalCode==="" || streetNumber==="")
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
		if( argResponse && !argResponse.error && !_.isEmpty(argResponse.data)){			
			var lookupHelper = new WICI.AddressLookupResponseHelper();
			
			lookupHelper.setAddressResponseObject(argResponse.data);
			
			console.log("Address Line 1:" + lookupHelper.getAddressLine1() );
			console.log("Address Line 2:" + lookupHelper.getAddressLine2() );
			console.log("City:" + lookupHelper.getCityName());
			console.log("Province:" + lookupHelper.getProvince());

			if($addressLookupButtonClicked.attr('id')=="personalData2_AddressLookupButton" )
			{
				model.set("province", lookupHelper.getProvince());
				selectedPersonalProvince = lookupHelper.getProvince();
				// US2825 WICI - Address Look Up Enhancement 
				if( lookupHelper.getAddressLine1().length < 1 ) {            	
                	$("#personalData2_Address_AddressLine1_TextField").val("");
                	$("#personalData2_Address_SuiteUnit_TextField").val("");
                	$("#personalData2_Address_City_TextField").val("");
                	$("#personalData2_Address_Province_TextField").val("");            	
                	messageDialog.error(translator.translateKey("addressLookup_noResults"));
                } else {
				if( lookupHelper.getAddressLine1().length>1){
					$("#addressLookup_Address_AddressLine1_MultipleControl").show();
					repopulateAddressLineControl(lookupHelper.getAddressLine1(),$("#personalData2_Address_AddressLine1_SelectField"), 'addressline1_Array');
					$("#personalData2_Address_AddressLine1_SelectField").prop('selectedIndex', -1);
				}				
				if( lookupHelper.getAddressLine1().length<=1){
					$("#addressLookup_Address_AddressLine1_MultipleControl").hide();
					$("#personalData2_Address_AddressLine1_TextField").val(lookupHelper.getAddressLine1());
				}
				/*	changes for task CTCOFSMB-1431, disabling address line 2 
				if( lookupHelper.getAddressLine2().length>1){
					$("#addressLookup_Address_AddressLine2_MultipleControl").show();
					repopulateAddressLineControl(lookupHelper.getAddressLine2(),$("#personalData2_Address_AddressLine2_SelectField"), 'addressline2_Array');
					$("#personalData2_Address_AddressLine2_SelectField").prop('selectedIndex', -1);
				}				
				if( lookupHelper.getAddressLine2().length<=1){
					$("#addressLookup_Address_AddressLine2_MultipleControl").hide();
					$(refs.addressline2).val(lookupHelper.getAddressLine2());
				}*/
				$("#personalData2_Address_City_TextField").val(lookupHelper.getCityName());
				$("#personalData2_Address_Province_TextField").val(lookupHelper.getProvince());
                }
			}
			else if($addressLookupButtonClicked.attr('id')=="personalData2_PreviousAddressLookupButton")
			{
				model.set("province_prev", lookupHelper.getProvince());
				selectedPrevProvince = lookupHelper.getProvince();
				if( lookupHelper.getAddressLine1() == null || lookupHelper.getAddressLine1() == "" ) {            	
                	$("#personalData2_Address_AddressLine1_TextField").val("");
                	$("#personalData2_Address_SuiteUnit_TextField").val("");
                	$("#personalData2_Address_City_TextField").val("");
                	$("#personalData2_Address_Province_TextField").val("");            	
                	messageDialog.error(translator.translateKey("addressLookup_noResults"));
                } else {
						if( lookupHelper.getAddressLine1().length>1){
							$("#addressLookup_PreviousAddress_AddressLine1_MultipleControl").show();
							repopulateAddressLineControl(lookupHelper.getAddressLine1(),$("#personalData2_PreviousAddress_AddressLine1_SelectField"), 'addressline1_prev_Array');
							$("#personalData2_PreviousAddress_AddressLine1_SelectField").prop('selectedIndex', -1);
						}				
						if( lookupHelper.getAddressLine1().length<=1){
							$("#addressLookup_PreviousAddress_AddressLine1_MultipleControl").hide();
							$("#personalData2_PreviousAddress_AddressLine1_TextField").val(lookupHelper.getAddressLine1());
						}
						/*	changes for task CTCOFSMB-1431, disabling address line 2 				
						if( lookupHelper.getAddressLine2().length>1){
							$("#addressLookup_PreviousAddress_AddressLine2_MultipleControl").show();
							repopulateAddressLineControl(lookupHelper.getAddressLine2(),$("#personalData2_PreviousAddress_AddressLine2_SelectField"), 'addressline2_prev_Array');
							$("#personalData2_PreviousAddress_AddressLine2_SelectField").prop('selectedIndex', -1);
						}				
						if( lookupHelper.getAddressLine2().length<=1){
							$("#addressLookup_PreviousAddress_AddressLine2_MultipleControl").hide();
							$(refs.addressline2_prev).val(lookupHelper.getAddressLine2());
						}*/
						$("#personalData2_PreviousAddress_City_TextField").val(lookupHelper.getCityName());
						$("#personalData2_PreviousAddress_Province_TextField").val(lookupHelper.getProvince());
				}
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
	function repopulateAddressLineControl(argArrayOfAddressLines, argControlToPopulate, argDataMember) {
        if (argArrayOfAddressLines) {
            argControlToPopulate.empty();
            model.set(argDataMember, argArrayOfAddressLines);
            $.each(argArrayOfAddressLines, function(index, item) {
            	var addressOption = buildOptionItem(item,item, argDataMember);
                argControlToPopulate.append(addressOption);
            });
        }
    }
	//---------------------------------------------------------------------------------------
	function buildOptionItem( argDisplayText, argValue){
		// US3598
        return "<option value=\"" + argValue + "\">" + argDisplayText + "</option>"; 
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
            

            var rez = model.validate(1);
            var rez1 =[];
            var enteredYears = model.get('years');
            var enteredMonthes = model.get('months');
            
            if(enteredYears != '' && (model.get('years')>=2)===false){
                rez1 = model.validate(2);
            }
            
            if(enteredYears === '' && enteredMonthes != '' && enteredMonthes != null)
            {
            	rez1 = model.validate(2);
            }
            
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
        			if((model.get('years') == '0' && model.get('months') == '') || 
        					(model.get('years') == '' && model.get('months') == '0'))
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

            if (rez.length > 0) {
                app.validationDecorator.applyErrAttribute(rez);    
                return; 
            }
            
            var prevModel = activationItems.getModel('personalData');
            
            var edgeValidation = model.validateAge(prevModel, model.get('province'));
            var rez = [];
            if(edgeValidation != null)
            {
            	rez.push(edgeValidation);
            	messageDialog.error(translator.translateKey(edgeValidation.err), null, showPrevScreen);
            	app.validationDecorator.applyErrAttribute(rez, true);
            	return;
            }
        }
        //captureCreditCardData();
		flow.next();
	}
	//---------------------------------------------------------------------------------------
};