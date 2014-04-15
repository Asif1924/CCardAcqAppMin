ensureNamespaceExists();

WICI.SupCardRequestScreenController = function(activationItems, argTranslator, argMessageDialog) {
    var logPrefix = '[WICI.SupCardRequestScreenController]::';
	var $screenContainer = $("#SupplementaryCardRequestScreen");//supCardRequest_TitleArea SupCard_PersonalDetailsArea
	
	this.show = show;
	this.init = init;
	this.hide = hide;
	
	var flow = null;
	
	var translator =    null; 
    var messageDialog = null; 
    
    var addressLookupButtonEnabled = false;
	//var $addressLookupButtonClicked = null;
	var connectivityController = null;
	
    this.syncUserData = syncUserData; 
    var refs = {
    	flipCardYesNo				:	'#flipSupplementaryCard',
		flipSameAddress				:	'#flipSameAddress',
            
        firstName					:	'#supCardRequest_FirstName_TextField',
        initial						:	'#supCardRequest_Initial_TextField',
        lastName					:	'#supCardRequest_LastName_TextField',
        birthDate					:	'#supCardRequest_DateOfBirth_TextField',
        phone						:	'#supCardRequest_Telephone_TextField',
        
        cardRequestFor				:	'#supCardRequestType_Group',
        cardRequest_Spouse			:	'#supCardRequest_Spouse_RadioButton',
        cardRequest_Son				:	'#supCardRequest_Son_RadioButton',
        cardRequest_Daughter		:	'#supCardRequest_Daughter_RadioButton',
        cardRequest_Relative		:	'#supCardRequest_Relative_RadioButton',
        cardRequest_Other			:	'#supCardRequest_Other_RadioButton',

        cardDetailsPanel			:	'#supCardDetailsPanel',
        addressPanel				:	'#supAddressPanel',
        
        postalCode					:	'#sup_PostalCode',
        addressLine1				:	'#sup_AddressLine1_TextField',
        addressLine2				:	'#sup_AddressLine2_TextField',
        suiteUnit					:	'#sup_SuiteUnit_TextField',
        city						:	'#sup_City_TextField',
        province					:	'#sup_Province_TextField',
        
        addressLine1_MultipleControl	: '#addressLookup_sup_AddressLine1_MultipleControl',
        addressLine2_MultipleControl	: '#addressLookup_sup_AddressLine2_MultipleControl',
        
        addressLine1_SelectField		: '#sup_AddressLine1_SelectField',
        addressLine2_SelectField		: '#sup_AddressLine2_SelectField',
        
        addressLookupButton			: '#sup_AddressLookupButton',
        
        streetNumber				: '#sup_Address_StreetNumber_TextField'
        

    };
   
    var model =new WICI.BaseModel({
    	name:	'supCardRequestData',
    	refs:	refs,
        data:[
                
                {name: 'cardYesNo',     	value: null, validation: null },
                
                {name: 'cardRequestFor',    value: null, validation: {type: 'presence',   message: '',      group: [1]} },
                
                {name: 'firstName',    		value: null, validation: { type: 'personName', message: '', group: [1] }},
                {name: 'lastName',      	value: null, validation: { type: 'personName', message: '', group: [1] } },
                {name: 'initial',       	value: null, validation: { type: 'format', message: '', matcher: /^[A-Z]{1}/, group: [1], canBeEmpty: true } },
                {name: 'birthDate',     	value: null, validation: { type: 'birthDate', message: '', group: [1]  }},
                {name: 'phone',     		value: null, validation: { type: 'phone', message: 'Enter valid Phone', group: [1]  }},
                
                {name: 'sameAddressYesNo',  value: null, validation: null },
                
                {notField:true, name: 'addressLine1_Array',  value: null, validation: null },
                {notField:true, name: 'addressLine2_Array',  value: null, validation: null },
                
                {name: 'postalCode',     	value: null, validation: {type: 'postal',     message: '', group: [2] }},
                {name: 'streetNumber',      value: null, validation: {type: 'streetNumber',     message: '',      group: [2]} },
                {name: 'addressLine1',  	value: null, validation: {type: 'addressLine',   message: '',      group: [2]} },
                {name: 'addressLine2',    	value: null, validation: {type: 'addressLine',   message: '',      group: [2], canBeEmpty: true} },
                {name: 'suiteUnit',     	value: null, validation: {type: 'suiteUnit',       message: '',      group: [2], canBeEmpty: true}  },
                {name: 'city',     			value: null, validation: {type: 'city',       message: '', group: [2] }},
                {name: 'province',     		value: null, validation: {type: 'presence',   message: '', group: [2] }}
                
                ]
    });    
    
    //---------------------------------------------------------------------------------------
    
    function restoreCreditCardData(){
        var sMethod = "restoreCreditCardData()";
        console.log(logPrefix + sMethod);

        $(refs.flipCardYesNo).val(model.get('cardYesNo'));
        
        $(refs.firstName).val(model.get('firstName'));
        $(refs.lastName).val(model.get('lastName'));
        $(refs.initial).val(model.get('initial'));
        $(refs.birthDate).val(model.get('birthDate'));
        $(refs.phone).val(model.get('phone'));
        

		if (model.get('sameAddressYesNo')) {
			$(refs.flipSameAddress).val(model.get('sameAddressYesNo'));
		}	
        
        $(refs.postalCode).val(model.get('postalCode'));
        $(refs.addressLine1).val(model.get('addressLine1'));
        $(refs.addressLine2).val(model.get('addressLine2'));
        $(refs.suiteUnit).val(model.get('suiteUnit'));
        $(refs.streetNumber).val(model.get('streetNumber'));
        $(refs.city).val(model.get('city'));
        $(refs.province).val(model.get('province'));
        
        updateSupCardRequestForRadioButtons();
        updatePanelsVisibility();
        
        updateLookUpControls(model.get('addressLine1_Array'), model.get('addressLine2_Array'));
    }
    
    //---------------------------------------------------------------------------------------
    function updateLookUpControls($addressLine1, $addressLine2)
    {
		var sMethod = "updateLookUpControls()";
		console.log(logPrefix + sMethod);

		if($addressLine1 && $addressLine1.length>1){
			$(refs.addressLine1_MultipleControl).show();
			repopulateAddressLineControl($addressLine1,$(refs.addressLine1_SelectField), 'addressLine1_Array');
			$(refs.addressLine1_SelectField).prop('selectedIndex', -1);
		}				
		if( $addressLine1 && $addressLine1.length<=1){
			$(refs.addressLine1_MultipleControl).hide();
			$(refs.addressLine1).val($addressLine1);
		}
		if( $addressLine2 && $addressLine2.length>1){
			$(refs.addressLine2_MultipleControl).show();
			repopulateAddressLineControl($addressLine2,$(refs.addressLine2_SelectField), 'addressLine2_Array');
			$(refs.addressLine2_SelectField).prop('selectedIndex', -1);
		}				
		if( $addressLine2 && $addressLine2 <= 1){
			$(refs.addressLine2_MultipleControl).hide();
			$(refs.addressLine2).val($addressLine2);
		}
		
		updateAddressLookupButtonState($(refs.postalCode), $(refs.streetNumber), $(refs.addressLookupButton));
    }
    //---------------------------------------------------------------------------------------
    
    function updateSupCardRequestForRadioButtons() {
        clearRadios();
		switch (model.get('cardRequestFor')) {
		case 'SPOU':
			$(refs.cardRequest_Spouse).addClass('ui-btn-active');
			break;
		case 'SON':
			$(refs.cardRequest_Son).addClass('ui-btn-active');
			break;
		case 'DAUG':
			$(refs.cardRequest_Daughter).addClass('ui-btn-active');
			break;
		case 'RELA':
			$(refs.cardRequest_Relative).addClass('ui-btn-active');
			break;
		case 'OTHE':
			$(refs.cardRequest_Other).addClass('ui-btn-active');
			break;
		}
    }

    // ---------------------------------------------------------------------------------------
    
    function init( argFlow ) {
        var sMethod = 'init() ';
        console.log(logPrefix + sMethod);

        flow = argFlow;
		translator = argTranslator;
		messageDialog = argMessageDialog; 	

		createView();
		bindEvents();
		
		var currentModel = activationItems.getModel(model.name);
        if (!currentModel) {
            activationItems.addModel(model);
        } else {
            model = currentModel;
        }
        
		
		$(refs.cardDetailsPanel).hide();
		$(refs.addressPanel).hide();
		
		$(refs.flipSameAddress).val('Y');
		
		populateProvinces();
		restoreCreditCardData();
		
		$(refs.flipCardYesNo).slider();
		$(refs.flipSameAddress).slider();
		
		$(refs.phone).mask('999-999-9999', {placeholder:"", useDelimeter:true, delimeter:'-'});
		
		connectivityController = new WICI.ConnectivityController(new WICI.ConnectionStatus(), messageDialog, translator, WICI.AppConfig.ConnectivityConfig);
		connectivityController.init();
	}
    
    function hideAddressLookupSelectionDropDowns(){
		$(refs.addressLine1_MultipleControl).hide();
		$(refs.addressLine2_MultipleControl).hide();
	}
    
    //---------------------------------------------------------------------------------------
    function updatePanelsVisibility()
     {
		if (model.get('cardYesNo') == 'N') {
			$(refs.cardDetailsPanel).hide();
			$(refs.addressPanel).hide();
		} else if (model.get('cardYesNo') == 'Y') {
			$(refs.cardDetailsPanel).show();
			if (model.get('sameAddressYesNo') == 'Y') {
				$(refs.addressPanel).hide();
			} else if (model.get('sameAddressYesNo') == 'N') {
				$(refs.addressPanel).show();
			}
		}
	}
    // ---------------------------------------------------------------------------------------
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
		hideAddressLookupSelectionDropDowns();
	}
	//---------------------------------------------------------------------------------------
	function assembleNavigationBarAtTop() {
		$("#pageHeader-template").template("pageHeader");
		$.tmpl(
			"pageHeader",
			{
				"previousButtonId"	: "SupplementaryCardRequestScreen_PrevButton",
				"nextButtonId"		: "SupplementaryCardRequestScreen_NextButton",
				"settingsButtonId"	: "SupplementaryCardRequestScreen_SettingsButton"
			}).appendTo("#SupplementaryCardRequestScreen");
	}
    //---------------------------------------------------------------------------------------
	function assemblePageHTML($element, templateName) {
		var html = $(templateName).tmpl(); 
		$element.append(html);
	}
	//---------------------------------------------------------------------------------------
	function bindEvents() {
		var sMethod = 'bindEvents() ';
		console.log(logPrefix + sMethod);

		bindNavigationHandlingControls();
		bindAddressHandlingControls();
		bindRadioHandlingControls();
	}	
	// ---------------------------------------------------------------------------------------
	function bindNavigationHandlingControls() {
		$('#SupplementaryCardRequestScreen_NextButton').click(function() {
			showNextScreen();
		});
		$('#SupplementaryCardRequestScreen_PrevButton').click(function() {
			showPrevScreen();
		});
	}
	// ---------------------------------------------------------------------------------------
	function bindRadioHandlingControls()
	{
		$(refs.flipCardYesNo).change(function() {
			if ("Y" == $(this).val()) {
				$(refs.cardDetailsPanel).show();
				showHideAddressPanel($(refs.flipSameAddress).val());
			} else {
				$(refs.cardDetailsPanel).hide();
				$(refs.addressPanel).hide();
			}
		});

		$(refs.flipSameAddress).change(function() {
			showHideAddressPanel($(this).val());
		});
		
		$(refs.cardRequest_Spouse).click(function(){
			clearRadios();
			$(refs.cardRequest_Spouse).addClass('ui-btn-active');
			model.set('cardRequestFor', 'SPOU');
		});
		
        $(refs.cardRequest_Son).click(function(){
			clearRadios();
			$(refs.cardRequest_Son).addClass('ui-btn-active');
			model.set('cardRequestFor', 'SON');
		});
        
        $(refs.cardRequest_Daughter).click(function(){
			clearRadios();
			$(refs.cardRequest_Daughter).addClass('ui-btn-active');
			model.set('cardRequestFor', 'DAUG');
		});
        
        $(refs.cardRequest_Relative).click(function(){
			clearRadios();
			$(refs.cardRequest_Relative).addClass('ui-btn-active');
			model.set('cardRequestFor', 'RELA');
		});

        $(refs.cardRequest_Other).click(function(){
			clearRadios();
			$(refs.cardRequest_Other).addClass('ui-btn-active');
			model.set('cardRequestFor', 'OTHE');
		});
	}
	//---------------------------------------------------------------------------------------
	function handleRealTimeKeyStrokes($argPostalCodeFieldID, $argStreetNumberFieldID, $argAddressLookupButtonID){
		updateAddressLookupButtonState($argPostalCodeFieldID, $argStreetNumberFieldID, $argAddressLookupButtonID);
	}
	//---------------------------------------------------------------------------------------
	function initFields(){
		updateAddressLookupButtonState($(refs.postalCode),$(refs.streetNumber),$(refs.addressLookupButton));
	}
	//---------------------------------------------------------------------------------------
	function disableAddressLookupButton( $argButtonID ){		
		$argButtonID.removeClass("greenflat");
		$argButtonID.addClass("grayflat");
		addressLookupButtonEnabled=false;

	}
	//---------------------------------------------------------------------------------------
	function enableAddressLookupButton( $argButtonID ){
		$argButtonID.removeClass('grayflat');
		$argButtonID.addClass("greenflat");
		addressLookupButtonEnabled=true;
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
	function bindAddressHandlingControls(){
		$(refs.addressLookupButton).click(function(){
			if(addressLookupButtonEnabled)
			{
				var postalCode = $(refs.postalCode).val();
				var validationResult = model.validateFieldByName('postalCode', postalCode.toUpperCase()); 
				if(validationResult.length === 0)
				{
					if (app.validationsOn) {
						app.validationDecorator.clearErrArrtibute();
					}
					invokeAddressLookup( $(refs.postalCode),$(refs.streetNumber), addressLookupSuccess, addressLookupFail );
				}
				else
				{
					if (app.validationsOn) {
						app.validationDecorator.applyErrAttribute(validationResult);
					}
				}
			}
		});		
		
		$(refs.postalCode).click(function(){
			setInterval(function(){ handleRealTimeKeyStrokes($(refs.postalCode), $(refs.streetNumber), $(refs.addressLookupButton)); }, 100);
		});	
		$(refs.streetNumber).click(function(){
			setInterval(function(){ handleRealTimeKeyStrokes($(refs.postalCode), $(refs.streetNumber), $(refs.addressLookupButton)); }, 100);
		});
		
		////////////////////////////////////////////////////////////////////////////////////////////
		
		$(refs.addressLine1_SelectField).change(function(){
			$(refs.addressLine1).val($(refs.addressLine1_SelectField).val());
		});

		$(refs.addressLine1_SelectField).change(function(){
			$(refs.addressLine2).val($(refs.addressLine2_SelectField).val());
		});
	}
	//---------------------------------------------------------------------------------------
	function invokeAddressLookup( $argPCodeFieldID, $argStreetNumberFieldID, argSuccessCB, argFailureCB ){
		var sMethod = "invokeAddressLookup()";
		console.log(logPrefix + sMethod);

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

			updateLookUpControls(lookupHelper.getAddressLine1(), lookupHelper.getAddressLine2());
			
			$(refs.city).val(lookupHelper.getCityName());
			$(refs.province).val(lookupHelper.getProvince());
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
				var addressOption = buildOptionItem(item, item);
				argControlToPopulate.append(addressOption);
			});
		}
	}
	// ---------------------------------------------------------------------------------------
	function buildOptionItem( argDisplayText, argValue){
		argDataMember = argDisplayText;
		return "<option value='" + argValue + "'>" + argDisplayText + "</option>"; 
	}

	//---------------------------------------------------------------------------------------
	function showHideAddressPanel(value) {
		if ("Y" == value) {
			$(refs.addressPanel).hide();
		} else {
			$(refs.addressPanel).show();
		}
	}
	// ---------------------------------------------------------------------------------------
	function clearRadios(){
		$(refs.cardRequest_Spouse).removeClass('ui-btn-active');
		$(refs.cardRequest_Son).removeClass('ui-btn-active');
		$(refs.cardRequest_Daughter).removeClass('ui-btn-active');
		$(refs.cardRequest_Relative).removeClass('ui-btn-active');
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
        model.set('streetNumber',  $(refs.streetNumber).val().toUpperCase());
        model.set('city',  $(refs.city).val().toUpperCase());
        model.set('province',  $(refs.province).val());

        console.log(logPrefix + sMethod +' model data: '+model.toString());
    }

    //---------------------------------------------------------------------------------------
    function populateProvinces(){
        var sMethod = 'populateProvinces() ';
        console.log(logPrefix + sMethod);
        
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
	function showPrevScreen() {
		syncUserData();
		flow.back();
	}    
    //---------------------------------------------------------------------------------------
	function showNextScreen() {
		var sMethod = 'showNextScreen() ';
		console.log(logPrefix + sMethod);

		syncUserData();

		var isValidationError = false;
		if (app.validationsOn) {
			app.validationDecorator.clearErrArrtibute();

			var rez = [];
			var rez1 = [];
			var rez2 = [];

			if (model.get('cardYesNo') == 'Y') {
				rez1 = model.validate(1);
				if (model.get('sameAddressYesNo') == 'N') {
					rez2 = model.validate(2);
				}

				rez = rez.concat(rez1, rez2);

				if (rez.length > 0) {
					app.validationDecorator.applyErrAttribute(rez);
					return;
				}
			}
		}

		flow.next();
	}
    //---------------------------------------------------------------------------------------
	
};