ensureNamespaceExists();

WICI.PersonalDataScreenController = function(activationItems, argTranslator,
		argMessageDialog) {
	
	var logPrefix = '[WICI.PersonalDataScreenController]::';
	var $screenContainer = $('#PersonalDataScreen');
	var translator = null;
	var messageDialog = null;

	this.show = show;
	this.init = init;
	this.hide = hide;

	var flow = null;

	this.syncUserData = syncUserData;
	var refs = {
		
		moneyAdvantageContainer : 	'#personalData_MyCTMArea',
	    loyaltyMembershipNumber	:	'#personalData_CTMNumber_TextField',
    			
		placeofissue : '#personalData_PlaceOfIssue_TextField',
		idtype : '#personalData_IDType_TextField',
		idnumbers : '#personalData_IDNumber_TextField',

		title : '#personalData_Title_Group',
		title_MR : '#personalData_MR_RadioButton',
		title_MRS : '#personalData_MRS_RadioButton',
		title_MISS : '#personalData_MISS_RadioButton',
		title_MS : '#personalData_MS_RadioButton',
//		title_DR : '#personalData_DR_RadioButton',

		firstName : '#personalData_FirstName_TextField',
		initial : '#personalData_Initial_TextField',
		lastName : '#personalData_LastName_TextField',

		birthDate : '#personalData_DateOfBirth_TextField',

		email : '#personalData_EmailAddress_TextField',
		homePhone : '#personalData_HomePhone_TextField',
		cellPhone : '#personalData_CellPhone_TextField',

		correspondence : '#personalData_Correspondence_Group',
		correspondence_eng : '#personalData_English_RadioButton',
		correspondence_fre : '#personalData_French_RadioButton',
			
		receiveemailArea:'#personalData_ReceiveEmailArea',
		receiveEmail : '#personalData_ReceiveEmail_Group',
		receiveemail_optin : '#personalData_Optin_RadioButton',
		receiveemail_optout : '#personalData_Optout_RadioButton'
			
	};
	
	var model = new WICI.BaseModel({
		name : 'personalData',
		refs : refs,
		data : [ {
			name: 'loyaltyMembershipNumber',
			value: null, validation: {
				type: 'mod10', 
				message: 'personalData1_validation_loyaltyMembershipNumber', 
				canBeEmpty: true, 
				minlength: 16,
				group: [ 1 ]
			 }
		}, {
			name : 'placeofissue',
			value : null,
			validation : {
				type : 'presence',
				message : 'personalData1_validation_placeofissue',
				group: [ 1 ]
			 }
		}, {
			name : 'idtype',
			value : null,
			validation : {
				type : 'presence',
				message : 'personalData1_validation_idtype',
				group: [ 1 ]
			}
		}, {
			name : 'idnumbers',
			value : null,
			validation : {
				type : 'format',
				message : 'personalData1_validation_idnumbers',
				matcher : /^[A-Z0-9\,\_\'\-\.\~\@\[\]\}\{\)\(]{1,20}$/,
				group: [ 1 ]
			}
		},

		{
			name : 'title',
			value : null,
			validation : null
		}, {
			name : 'firstName',
			value : null,
			validation : {
				type : 'personName',
				message : 'personalData1_validation_firstName',
				group: [ 1 ]
			}
		}, {
			name : 'initial',
			value : null,
			validation : {
				type : 'format',
				message : 'personalData1_validation_initial',
				matcher : /^[A-Z]{1}/,				
				canBeEmpty : true,
				group: [ 1 ]
				
			}
		}, {
			name : 'lastName',
			value : null,
			validation : {
				type : 'personName',
				message : 'personalData1_validation_lastName',
				group: [ 1 ]
			}
		},

		{
			name : 'birthDate',
			value : null,
			validation : {
				type : 'birthDate',
				message : 'personalData1_validation_birthDate',
				group: [ 1 ]
			}
		}, {
			name : 'email',
			value : null,
			validation : {
				type : 'email',
				message : 'personalData1_validation_email',
				canBeEmpty : true,
				group: [ 1 ]
			}
		},{
			name : 'receiveEmail',
			value : null,
			validation : {
				type : 'presence',
				message : 'personalData1_validation_ReceiveEmail',
				group: [ 2 ]
			}
		},{
			name : 'homePhone',
			value : null,
			validation : {
				type : 'phone',
				message : 'personalData1_validation_homePhone',
				group: [ 1 ]
			}
		}, {
			name : 'cellPhone',
			value : null,
			validation : {
				type : 'phone',
				message : 'personalData1_validation_cellPhone',
				canBeEmpty : true,
				group: [ 1 ]
			}
		}, {
			name : 'correspondence',
			value : null,
			validation : {
				type : 'presence',
				message : 'personalData1_validation_correspondence',
				group: [ 1 ]
			}
		} ]
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
		populateIdTypesList();

		// Set masks for UI elements
		setUIElementsMasks();
		
		onEmailChangesHandler(); 
		hideShowMoneyAdvantage ();
		
	}
	// ---------------------------------------------------------------------------------------
	function show() {
		$screenContainer.show();
		translator.run('PersonalDataScreen');
		app.selectorReduceHelper.init();
	}
	// ---------------------------------------------------------------------------------------
	function hide() {
		$screenContainer.hide();
	}
	// ---------------------------------------------------------------------------------------
	function setUIElementsMasks() {
		// Set phone fields mask
		$('.fieldValuesPhoneField').mask('999-999-9999', {
			placeholder : "",
			useDelimeter : true,
			delimeter : '-'
		});
		$(refs.loyaltyMembershipNumber).autoNumeric('init', {aSign:'',vMin:'0', vMax:'9999999999999999', mDec:'0',wEmpty: '', aSep:''});
		
	}
	// ---------------------------------------------------------------------------------------
	function createView() {
		$screenContainer.empty();
		assembleNavigationBarAtTop();
		assemblePageHTML($screenContainer, '#WICIPersonalDataScreen-template');
		$screenContainer.addClass("breadcrumbPadding");
	}
	// ---------------------------------------------------------------------------------------
	function assembleNavigationBarAtTop() {
		$("#pageHeader-template").template("pageHeader");
		$.tmpl("pageHeader", {
			"logo_En" : translator.currentLanguageEnglish(),
			"nextButtonId" : "PersonalDataScreen_NextButton",
			"settingsButtonId" : "PersonalDataScreen_SettingsButton"
		}).appendTo("#PersonalDataScreen");
	}
	// ---------------------------------------------------------------------------------------
	function assemblePageHTML($element, templateName) {
		var html = $(templateName).tmpl();
		$element.append(html);
	}

	// ---------------------------------------------------------------------------------------
	function syncUserData() {
		var sMethod = 'syncUserData() ';
		console.log(logPrefix + sMethod);
	   	
    	model.set('loyaltyMembershipNumber', $(refs.loyaltyMembershipNumber).val()) ;
    	
		model.set('placeofissue', $(refs.placeofissue).val());

		model.set('idtype', $(refs.idtype).val());
		model.set('idnumbers', $(refs.idnumbers).val().toUpperCase());

		model.set('firstName', $(refs.firstName).val().toUpperCase());
		model.set('initial', $(refs.initial).val().toUpperCase());
		model.set('lastName', $(refs.lastName).val().toUpperCase());

		model.set('birthDate', $(refs.birthDate).val());
		model.set('email', $(refs.email).val());
		model.set('homePhone', $(refs.homePhone).val().replace(/-/g, ''));
		model.set('cellPhone', $(refs.cellPhone).val().replace(/-/g, ''));

		console.log(logPrefix + sMethod + ' model data: ' + model.toString());
	}
	// ---------------------------------------------------------------------------------------
	function restoreCreditCardData() {
		var sMethod = "restoreCreditCardData()";
		console.log(logPrefix + sMethod);
		
		$(refs.loyaltyMembershipNumber).val(model.get('loyaltyMembershipNumber'));
		
		$(refs.placeofissue).val(model.get('placeofissue'));
		$(refs.idtype).val(model.get('idtype'));
		$(refs.idnumbers).val(model.get('idnumbers'));
		$(refs.firstName).val(model.get('firstName'));
		$(refs.initial).val(model.get('initial'));
		$(refs.lastName).val(model.get('lastName'));
		$(refs.birthDate).val(model.get('birthDate'));
		$(refs.email).val(model.get('email'));
		$(refs.homePhone).val(model.get('homePhone'));
		$(refs.cellPhone).val(model.get('cellPhone'));
		onEmailChangesHandler(); 
	}
	//-----------------------------------------------------------------------------------------
	function onEmailChangesHandler(){
	        var sMethod = 'onEmailChangesHandler() ';
	        console.log(logPrefix + sMethod);
	        
	        syncUserData();
	        validEmail = /^[_a-z0-9-][_a-z0-9-]+(\.[_a-z0-9+]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/i;
	        console.log("validEmail : " + validEmail.test(model.get('email').trim()));
	        clearRadios('receiveEmail');
	        if(validEmail.test(model.get('email').trim()) != true ){  
	            $(refs.receiveemailArea).hide();
	        }
	        else{
	        	//$(refs.receiveemail_optin).removeClass('ui-btn-active');
				//$(refs.receiveemail_optout).removeClass('ui-btn-active');				
	        	$(refs.receiveemailArea).show();
	        }
	 }
	
	//----------------------------------------------------------------------------------------
	function bindRealTimeEmailControl(){	
		$(refs.email).change(function(){
            onEmailChangesHandler();
        });
	}	
	//-----------------------------------------------------------------------------------------
   function bindEvents() {
		var sMethod = 'bindEvents() ';
		console.log(logPrefix + sMethod);

		bindRealTimeEmailControl();
		
		$(refs.placeofissue).change(function(event) {
			console.log(refs.placeofissue + '::change');
			populateIdTypesList();
		});
		
		
		$(refs.placeofissue).bind('translatorFinished', function(event) {
			console.log(refs.placeofissue + '::change');
			populateIdTypesList();
			///********************///
			//According to user story with number 829
			checkForMsButton();
		});


		$('#PersonalDataScreen_NextButton').click(function() {
			showNextScreen();
		});
		$('#PersonalDataScreen_PrevButton').click(function() {
			showPrevScreen();
		});

		$(refs.title_MR).click(function() {
			clearRadios('title');
			$(refs.title_MR).addClass('ui-btn-active');
			model.set('title', 'MR');
		});
		$(refs.title_MRS).click(function() {
			clearRadios('title');
			$(refs.title_MRS).addClass('ui-btn-active');
			model.set('title', 'MRS');
		});
		$(refs.title_MISS).click(function() {
			clearRadios('title');
			$(refs.title_MISS).addClass('ui-btn-active');
			model.set('title', 'MISS');
		});
		$(refs.title_MS).click(function() {
			clearRadios('title');
			$(refs.title_MS).addClass('ui-btn-active');
			model.set('title', 'MS');
		});
//		$(refs.title_DR).click(function() {
//			clearRadios('title');
//			$(refs.title_DR).addClass('ui-btn-active');
//			model.set('title', 'DR');
//		});
		$(refs.correspondence_eng).click(function() {
			clearRadios('correspondence');
			$(refs.correspondence_eng).addClass('ui-btn-active');
			model.set('correspondence', 'E');
		});
		$(refs.correspondence_fre).click(function() {
			clearRadios('correspondence');
			$(refs.correspondence_fre).addClass('ui-btn-active');
			model.set('correspondence', 'F');
		});
		
		$(refs.receiveemail_optin).click(function() {
			clearRadios('receiveEmail');
			$(refs.receiveemail_optin).addClass('ui-btn-active');
			model.set('receiveEmail', 'Y');
		});
		$(refs.receiveemail_optout).click(function() {
			clearRadios('receiveEmail');
			$(refs.receiveemail_optout).addClass('ui-btn-active');
			model.set('receiveEmail', 'N');
		});
		
		checkForMsButton();
	}
	function checkForMsButton(){
		if(translator.currentLanguageEnglish()){
			showMsButton();
		} else { 
			hideMsButton();
		}
	}
	
	function hideMsButton(){
		$(refs.title_MS).hide();
		$(refs.title_MISS).addClass('ui-corner-right ui-controlgroup-last');
		if (model.get('title') === 'MS') {
			clearRadios('title');
			$(refs.title_MISS).addClass('ui-btn-active');
		}
	}
	function showMsButton(){
		$(refs.title_MISS).removeClass('ui-corner-right ui-controlgroup-last');
		$(refs.title_MS).show();
		if (model.get('title') === 'MISS') {
			clearRadios('title');
			$(refs.title_MS).addClass('ui-btn-active');
		}		
	}
	// ---------------------------------------------------------------------------------------
	function clearRadios(radioGroup) {
		if (radioGroup === 'title') {
			$(refs.title_MR).removeClass('ui-btn-active');
			$(refs.title_MRS).removeClass('ui-btn-active');
			$(refs.title_MISS).removeClass('ui-btn-active');
			$(refs.title_MS).removeClass('ui-btn-active');
//			$(refs.title_DR).removeClass('ui-btn-active');
		} else if (radioGroup === 'correspondence') {
			$(refs.correspondence_eng).removeClass('ui-btn-active');
			$(refs.correspondence_fre).removeClass('ui-btn-active');
		} else if (radioGroup === 'receiveEmail') {
			$(refs.receiveemail_optin).removeClass('ui-btn-active');
			$(refs.receiveemail_optout).removeClass('ui-btn-active');
			model.set('receiveEmail', null);
		}
	}
	// ---------------------------------------------------------------------------------------
	function populateProvinces() {
		var sMethod = 'populateProvinces() ';
		console.log(logPrefix + sMethod);

//		if ($(refs.placeofissue + ' option').length > 1) {
//			console.log(logPrefix + sMethod
//					+ " select control is already populated.");
//			return;
//		}

		var controlRef = $(refs.placeofissue);
		controlRef.empty();

		var list = new WICI.ProvincesList();
		$.each(list.data, function(index, item) {
			var optTempl = '<option value="' + item.value + '">'
					+ translator.translateKey(item.text) + '</option>';
			controlRef.append(optTempl);
		});
	}
	// ---------------------------------------------------------------------------------------
	function populateIdTypesList() {
		var sMethod = 'populateIdTypesList() ';
		console.log(logPrefix + sMethod);

		syncUserData();
		var provinceValue = model.get('placeofissue');
		var idType = model.get('idtype');

		var controlRef = $(refs.idtype);
		controlRef.empty();
		//if (provinceValue === null) {
			populateProvinces();
		//}

		var list = new WICI.IdTypesList();
		list.data = list.getDataByProvince(provinceValue);

		$.each(list.data, function(index, item) {
			var optTempl = '<option value="' + item.value + '">'
					+ translator.translateKey(item.text) + '</option>';
			controlRef.append(optTempl);
		});

		if (idType) {
			$(refs.idtype + " [value='" + idType + "']").attr("selected",
					"selected");
		}
		if(provinceValue){
			$(refs.placeofissue + " [value='" + provinceValue + "']").attr("selected",
			"selected");
		}
	}
	// ---------------------------------------------------------------------------------------
	function showPrevScreen() {
		var sMethod = 'showPrevScreen() ';
		console.log(logPrefix + sMethod);
		flow.back();
	}
	// ---------------------------------------------------------------------------------------
	function showNextScreen() {
		var sMethod = 'showNextScreen() ';
		console.log(logPrefix + sMethod);

		syncUserData();

		if (app.validationsOn) {
			app.validationDecorator.clearErrArrtibute();

			var rez = [];
			var rez1 = [];
			var rez2 = [];
			
			rez1 = model.validate(1);
			
			//CASL Validation   ---------------------------------------------------------------------
			
			validEmail = /^[_a-z0-9-][_a-z0-9-]+(\.[_a-z0-9+]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/i;
	        if(validEmail.test(model.get('email').trim()) == true ){  
	        	rez2 = model.validate(2);
	        
	        }
	        rez = rez.concat(rez1, rez2);
			//--------------------------------------------------------------------
	        if (rez.length > 0) {
				var errStrArr = [];
				$.each(rez, function(index, item) {
					errStrArr.push(translator.translateKey(item.err));
				});

				app.validationDecorator.applyErrAttribute(rez);
				return;
			}
	        
	        
			var edgeValidation = model.validateAge(model);
			var rez = [];
			if (edgeValidation != null) {
				rez.push(edgeValidation);
				messageDialog.error(
						translator.translateKey(edgeValidation.err), null,
						selectDOBFileld);
				app.validationDecorator.applyErrAttribute(rez, true);
				return;
			}
		}
		// updateCreditCardData();
		//$(refs.placeofissue).unbind('translatorFinished');
		flow.next();
	}

	function selectDOBFileld() {
		app.validationDecorator.focusControl(refs.birthDate);
	}
	
	//---------------------------------------------------------------------------------------
	function hideShowMoneyAdvantage (){
		
		cardTypeGlobal = activationItems.getModel('chooseProductModel').get('productCard')
		if(cardTypeGlobal === 'OMC') {
			$(refs.moneyAdvantageContainer).show();	
		}
		else {
			$(refs.moneyAdvantageContainer).hide();	
		}
	}
	// ---------------------------------------------------------------------------------------
};