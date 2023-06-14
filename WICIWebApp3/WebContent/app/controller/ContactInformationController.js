ensureNamespaceExists();
WICI.ContactInformationController = function(activationItems, argTranslator, argMessageDialog) {
	var logPrefix = '[WICI.ContactInformationController]::';
	var $screenContainer = $("#ContactInfoScreen");
	var translator = null;
	var messageDialog = null;

	this.show = show;
	this.hide = hide;
	this.init = init;

	var flow = null;
	var loginModel = activationItems.getModel('loginScreen');
	this.syncUserData = syncUserData;
	var outletProvince;
	var refs = {
		email: '#contactInfo_EmailAddress_TextField',
		receiveEmail: '#receiveEmail_CheckBox',
		estmt_consent: "#receiveEstmtConsent_CheckBox",
		nextButton: ".EmailInfoScreen_NextButton",
		prevButton: ".EmailInfoScreen_PrevButton",
		homePhone: '#contactInfo_HomePhone_TextField',
		cellPhone: '#contactInfo_CellPhone_TextField',
		homePhoneRadioGroup: '#primaryPhoneRadioGroup',
		cellPhoneRadioGroup: '#secondaryPhoneRadioGroup',
		primaryMobile_CheckField: '#primaryMobile_CheckField',
		primaryLandline_CheckField: '#primaryLandline_CheckField',
		secondaryLandline_CheckField: '#secondaryLandline_CheckField',
		secondaryMobile_CheckField: '#secondaryMobile_CheckField',
		language_slider   :  '#language_slider',
	};

	var contactDataValidationMax = 2;

	var model = new WICI.BaseModel({
		name: 'contactInfoScreen',
		refs: refs,
		data: [
			{ name: 'homePhone', value: null, validation: {  message: 'personalData1_validation_homePhone', group: [1] } },
			{ name: 'cellPhone', value: null, validation: {  message: 'personalData1_validation_cellPhone', group: [1] } },
			{ name: 'homePhoneRadioGroup', value: null, validation: {  message: 'personalData1_validation_primaryRadio', canBeEmpty: false, group: [1] } },
			{ name: 'cellPhoneRadioGroup', value: null, validation: {  message: 'personalData1_validation_secondaryRadio', canBeEmpty: true, group: [1] } },
			{ name: 'primaryMobile_CheckField', value: null },
			{ name: 'primaryLandline_CheckField', value: null },
			{ name: 'secondaryMobile_CheckField', value: null },
			{ name: 'secondaryLandline_CheckField', value: null },
			{ name: 'email', value: null, validation: { type: 'email', message: 'personalData1_validation_email', canBeEmpty: (($(refs.email).val() !== '') || ($(refs.email).val() !== null)) ? false : true, group: [1] } },
			{ name: 'receiveEmail', value: null, validation: { type: 'presence', message: 'personalData1_validation_ReceiveEmail', group: [2] } },
			{ name: 'estmt_consent', value: null, validation: { type: 'presence', message: 'personalData1_validation_ReceiveEmail', group: [2] } },
			{ name: 'applicationReferenceID', value: null, validation: null },
		]
	});
	this.innerModel = model;

	// ---------------------------------------------------------------------------------------
	function init(argFlow) {
		var sMethod = 'init() ';
		console.log(logPrefix + sMethod);

		flow = argFlow;
		translator = argTranslator;
		messageDialog = argMessageDialog;
		outletProvince = getOutletProvince();
		createView();
		bindEvents();
		initModel();
		// Set masks for UI elements
		setUIElementsMasks();
		disableCheckBox();
		alignI_icon();
		restoreCreditCardData();
		createFlipsForLanguage();
		bill96TextforQC();
		hideLanguageSliderForROCandFr();
		hideToogleforROC();
		model.set('applicationReferenceID', generateGUID().toUpperCase());
		console.log(logPrefix + sMethod + " GUID :: " + model.get('applicationReferenceID'));
	}
	// ---------------------------------------------------------------------------------------
	function syncUserData() {
		var sMethod = 'syncUserData() ';
		console.log(logPrefix + sMethod);

		model.set('primaryMobile_CheckField', $(refs.primaryMobile_CheckField).is(':checked') ? 'Y' : 'N');
		model.set('primaryLandline_CheckField', $(refs.primaryLandline_CheckField).is(':checked') ? 'Y' : 'N');
		model.set('secondaryLandline_CheckField', $(refs.secondaryLandline_CheckField).is(':checked') ? 'Y' : 'N');
		model.set('secondaryMobile_CheckField', $(refs.secondaryMobile_CheckField).is(':checked') ? 'Y' : 'N');
		model.set('homePhoneRadioGroup', model.get('primaryMobile_CheckField') == 'Y' || model.get('primaryLandline_CheckField') == 'Y');
		model.set('cellPhoneRadioGroup', model.get('secondaryLandline_CheckField') == 'Y' || model.get('secondaryMobile_CheckField') == 'Y');

		var primaryPhone = $(refs.homePhone).val().replace(/-/g, '');
		var secondaryPhone = $(refs.cellPhone).val().replace(/-/g, '');
		model.set('homePhone', primaryPhone);
		model.set('cellPhone', secondaryPhone);

		// This logic is for filtering the mobile number entered in UI
		// Only for sending to Enstream request
		// Reprint logic for saving number is added here
		if (primaryPhone !== "") {
			activationItems.setHomePhone(model.get('homePhone'));
			if ($(refs.primaryMobile_CheckField).is(':checked')) {
				activationItems.setMobilePhone(primaryPhone);
			}
		}
		if (secondaryPhone !== "") {
			activationItems.setHomePhone(model.get('cellPhone'));
			if ($(refs.secondaryMobile_CheckField).is(':checked')) {
				activationItems.setMobilePhone(secondaryPhone);
			}
		}
		if (primaryPhone !== "" && secondaryPhone !== "") {
			activationItems.setHomePhone(model.get('homePhone'));
			if ($(refs.primaryMobile_CheckField).is(':checked') && $(refs.secondaryMobile_CheckField).is(':checked')) {
				activationItems.setMobilePhone(primaryPhone);
			}
		}
		console.log(logPrefix + sMethod + " Mobile Number :: " + activationItems.getMobilePhone());
		console.log(logPrefix + sMethod + " HomePhone : " + activationItems.getHomePhone());

		var emailValue = $(refs.email).val();
		console.log(logPrefix + sMethod + " emailValue : " + emailValue);

		model.set('email', emailValue);
		if ($(refs.receiveEmail).is(':checked')) {
			model.set('receiveEmail', 'Y');
		} else {
			model.set('receiveEmail', 'OPERATIONAL');
		}
		if ($(refs.estmt_consent).is(':checked')) {
			model.set('estmt_consent', 'Y');
		} else {
			model.set('estmt_consent', 'N');
		}
		console.log(logPrefix + sMethod + ' model data: \n' + model.toString());
	}
	//---------------------------------------------------------------------------------------
	function getOutletProvince(){
	    if (loginModel != null && loginModel.get('userLocationResponse') != null) {
                var locationHelper = new WICI.UserLocationResponseHelper();
                locationHelper.setUserLocationResponseObject(loginModel.get('userLocationResponse'));
                outletProvince = locationHelper.getOutletProvince();
        }
        return outletProvince;
	      
	 }
	//----------------------------------------------------------------------------------------
	
	function createFlipsForLanguage() {
        var sMethod = 'createFlips() ';
        console.log(logPrefix + sMethod);
    }
	//---------------------------------------------------------------------------------------
	function bill96TextforQC(){
		 if(app.translator.getCurrentLanguage() === "en" && outletProvince ==="QC" ){
			$("#p1_QC").empty();
			$("#p2_QC").empty();
         	$("#p1_QC").html(WICI.dictionary_fr.contactInfo_Para51);
  	       	$("#p2_QC").html(WICI.dictionary_fr.contactInfo_Para52);
  	       	$("#eStatmenent_title").html(WICI.dictionary_fr.contactInfo_Heading5);
  	       	$("#title_eStatment_td").removeClass("borderRadius11");
         }else if(app.translator.getCurrentLanguage() === "fr" && outletProvince ==="QC" ){
        	$("#p1_QC").empty();
			$("#p2_QC").empty();
         	$("#p1_QC").html(WICI.dictionary_fr.contactInfo_Para51);
  	        $("#p2_QC").html(WICI.dictionary_fr.contactInfo_Para52);
  	        $("#eStatmenent_title").html(WICI.dictionary_fr.contactInfo_Heading5);
  	        $("#title_eStatment_td").addClass("borderRadius11");
         }else if(app.translator.getCurrentLanguage() === "en"  || app.translator.getCurrentLanguage() === "fr" || outletProvince !== "QC"){
        	 $("#p1_QC").empty();
			 $("#p2_QC").empty();
        	 $("#p1_QC").html(translator.translateKey("contactInfo_Para51"));
   	         $("#p2_QC").html(translator.translateKey("contactInfo_Para52"));
   	         $("#eStatmenent_title").html(translator.translateKey("contactInfo_Heading5"));
   	         $("#title_eStatment_td").addClass("borderRadius11");
         }else{
        	 $("#p1_QC").empty();
			 $("#p2_QC").empty();
        	 $("#p1_QC").html(translator.translateKey("contactInfo_Para51"));
   	         $("#p2_QC").html(translator.translateKey("contactInfo_Para52"));
   	         $("#eStatmenent_title").html(translator.translateKey("contactInfo_Heading5"));
   	         $("#title_eStatment_td").addClass("borderRadius11");
         }
	}
	// ---------------------------------------------------------------------------------------
	function generateGUID() {
		var sMethod = "generateGUID()";
		console.log(logPrefix + sMethod);
		
	    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
	    	(c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
	  	);
	}
	// ---------------------------------------------------------------------------------------
	function restoreCreditCardData() {
		var sMethod = "restoreCreditCardData()";
		console.log(logPrefix + sMethod);

		$(refs.homePhone).val(model.get('homePhone'));
		$(refs.cellPhone).val(model.get('cellPhone'));
		$(refs.email).val(model.get('email'));
	}
	// ---------------------------------------------------------------------------------------
	function show() {
		$screenContainer.show();
		translator.run("ContactInfoScreen");
	}
	// ---------------------------------------------------------------------------------------
	function hide() {
		$screenContainer.hide();
	}
	// ---------------------------------------------------------------------------------------
	function createView() {
		$screenContainer.empty();
		assembleNavigationBarAtTop();
		WICI.BreadcrumbsHelper.assembleBreadcrumbs(2, $screenContainer, activationItems);
		assemblePageHTML($screenContainer, '#WICIContactInfoScreen-template');
		$screenContainer.addClass("breadcrumbPadding");
		assembleNavigationBarAtBottom();
	    $('#contactInfomation_infomation_phone').hide();
		
	}
	// ---------------------------------------------------------------------------------------
	function assembleNavigationBarAtTop() {
		$("#pageHeader-template").template("pageHeader");
		$.tmpl("pageHeader", {
			"logo_En": translator.currentLanguageEnglish(),
			"previousButtonId": "EmailInfoScreen_PrevButton",
			"nextButtonId": "EmailInfoScreen_NextButton",
			"settingsButtonId": "EmailInfoScreen_SettingsButton"
		}).appendTo("#ContactInfoScreen");
	}

	// ---------------------------------------------------------------------------------------
	function assembleNavigationBarAtBottom() {
		$("#pageFooter-template").template("pageFooter");
		$.tmpl("pageFooter", {
			"previousButtonId": "EmailInfoScreen_PrevButton",
			"nextButtonId": "EmailInfoScreen_NextButton"
		}
		).appendTo("#ContactInfoScreen");
	}
	// ---------------------------------------------------------------------------------------
	function bindEvents() {
		var sMethod = 'bindEvents() ';
		console.log(logPrefix + sMethod);

		$('.EmailInfoScreen_NextButton').click(function() {
			showNextScreen();
		});

		$('.EmailInfoScreen_PrevButton').click(function() {
			showPrevScreen();
		});
		
		$(refs.email).live('paste, input', function(e) {
			var self = $(this);
			if(self.val() == null || self.val() == '') {
				disableCheckBox();
			}else {
				enableCheckBox();
			}
        });
		
		$.subscribe('translatorFinished', function(event) {
            console.log('translatorFinished' + '::change');
            alignI_icon();
            hideToogleforROC();
            hideLanguageSliderForROCandFr();
            if(outletProvince ==="QC" ){
			  $(refs.language_slider).attr('checked',false);
			    $("#p1_QC").html(WICI.dictionary_fr.contactInfo_Para51);
     	        $("#p2_QC").html(WICI.dictionary_fr.contactInfo_Para52);
     	        $("#eStatmenent_title").html(WICI.dictionary_fr.contactInfo_Heading5);
		    }
            
        });
		
		//createFlipsForLanguage();
		$(refs.language_slider).change(function () {
			 var controlRef = $("#bill96_text");
		     controlRef.empty();
		      var isChecked = $(this).is(':checked');		      
            if (isChecked == false) {
                $("#p1_QC").html(WICI.dictionary_fr.contactInfo_Para51);
     	        $("#p2_QC").html(WICI.dictionary_fr.contactInfo_Para52);
     	        $("#eStatmenent_title").html(WICI.dictionary_fr.contactInfo_Heading5);
            } else {
            	$("#p1_QC").html(WICI.dictionary_en.contactInfo_Para51);
     	       	$("#p2_QC").html(WICI.dictionary_en.contactInfo_Para52);
     	       	$("#eStatmenent_title").html(WICI.dictionary_en.contactInfo_Heading5);
            }
        });
	}
	// ---------------------------------------------------------------------------------------
	function alignI_icon() {
		if(app.translator.getCurrentLanguage() === "en") {
        	$('#contactInfomation_infomation_phone').addClass('marginleft_i_icon');
        	$('#contactInfomation_infomation_phone').removeClass('marginleft_i_icon_fr');
        } else {
        	$('#contactInfomation_infomation_phone').removeClass('marginleft_i_icon');
        	$('#contactInfomation_infomation_phone').addClass('marginleft_i_icon_fr');
        }
	}
	function hideToogleforROC(){
		var outletProvince = getOutletProvince();
		if(outletProvince !=="QC"){
			$('#language_Slider_for_QC').hide();
		}
	}
	// ---------------------------------------------------------------------------------------
	function hideLanguageSliderForROCandFr(){
		var outletProvince = getOutletProvince();		
		if(outletProvince =="QC"){
			if(app.translator.getCurrentLanguage() === "en"){
				// QC .. EN
				$('#language_Slider_for_QC').show();
				$("#bill96_text_QC").show();
				$("#bill96_text").show();
				$('#QC_I_Confirm1').show();
				$('#QC_I_Confirm2').show();
			}else{
				// QC .. FR
				$("#bill96_text").hide();
				$('#language_Slider_for_QC').hide();
				$('#QC_I_Confirm1').hide();
				$('#QC_I_Confirm2').hide();
			}
		}else{
			//outlet province : ROC
			$("#bill96_text_QC").show();
			$("#p1_QC").empty();
			$("#p2_QC").empty();
       	 	$("#p1_QC").html(translator.translateKey("contactInfo_Para51"));
  	        $("#p2_QC").html(translator.translateKey("contactInfo_Para52"));
  	        $("#eStatmenent_title").html(translator.translateKey("contactInfo_Heading5"));
			$('#language_Slider_for_QC').hide();
			$('#QC_I_Confirm1').hide();
			$('#QC_I_Confirm2').hide();
		}
		
	}
	
	// ---------------------------------------------------------------------------------------
	function assemblePageHTML($element, templateName) {
		$(templateName).tmpl({
			activationItems: activationItems,
			outletProvince: getOutletProvince(),
			language_EN: translator.currentLanguageEnglish(),
		}).appendTo($element);
	}
	// ---------------------------------------------------------------------------------------
	function showNextScreen() {
		var sMethod = 'showNextScreen() ';
		console.log(logPrefix + sMethod);

		syncUserData();

		if (app.validationsOn) {
			app.validationDecorator.clearErrArrtibute();

			var temprez;
			var rez = [];
			
			for (var i = 1; i <= 1; i++) {
				if (i <= contactDataValidationMax) {
					temprez = model.validate(i);
				}
				rez = rez.concat(temprez);
			}

			if (rez.length > 0) {
				var errStrArr = [];
				$.each(rez, function(index, item) {
					errStrArr.push(translator.translateKey(item.err));
				});

				// US4781
				app.validationDecorator.applyErrAttribute(rez);
				syncUserData();
				return;
			}
			
			var skip = false;
			var primaryMobile = app.validationDecorator.phoneValidation($(refs.homePhone).val() , refs.homePhone, false );

		    if ($(refs.homePhone).val() === '') {
				app.validationDecorator.applyNumberIdError(refs.homePhone);
				primaryMobile = false;
			}

		    if(!primaryMobile){
		    	$('#contactInfomation_infomation_phone').show();
		        app.validationDecorator.applyNumberIdError(refs.homePhoneRadioGroup);
		        if($(refs.primaryLandline_CheckField).is(':checked') || $(refs.primaryMobile_CheckField).is(':checked')){		        		 
		        	$(refs.homePhoneRadioGroup).removeClass('errorField');
		        }
		        	return;
		        } else{
		        	skip = true;
		        	app.validationDecorator.clearErrArrtibute();
		        	$('#contactInfomation_infomation_phone').hide();
		        	 if($(refs.primaryLandline_CheckField).is(':checked') || $(refs.primaryMobile_CheckField).is(':checked')){
		        		 console.log('error removed');
		        		 $(refs.homePhoneRadioGroup).removeClass('errorField');
		        	 }
		        	 if( !$(refs.primaryLandline_CheckField).is(':checked') &&  !$(refs.primaryMobile_CheckField).is(':checked')){
		        		 app.validationDecorator.applyNumberIdError(refs.homePhoneRadioGroup);
		        		 return;
		        	 }
		        }
		        if(  !$(refs.secondaryLandline_CheckField).is(':checked') && !$(refs.secondaryMobile_CheckField).is(':checked') && $(refs.cellPhone).val().length > 0 ){
		    	   skip = false;
		        }
		       
		        if(  $(refs.secondaryLandline_CheckField).is(':checked') || $(refs.secondaryMobile_CheckField).is(':checked') ){
		    	   skip = false;
		        }
		        
		        var secondryPhone = app.validationDecorator.phoneValidation($(refs.cellPhone).val() , refs.cellPhone, false );  
		        if ($(refs.cellPhone).val() === '') {
					app.validationDecorator.applyNumberIdError(refs.cellPhone);
					secondryPhone = false;
				}
		        console.log(' skip cellphone ' +skip);
		        if(!secondryPhone && !skip){
		        	$('#contactInfomation_infomation_phone').show();
		        	 app.validationDecorator.applyNumberIdError(refs.cellPhoneRadioGroup);
		        	 if($(refs.secondaryLandline_CheckField).is(':checked') || $(refs.secondaryMobile_CheckField).is(':checked')){
		        		 
		        		 $(refs.cellPhoneRadioGroup).removeClass('errorField');
		        	 }
		        	 
		        	 if( !$(refs.secondaryMobile_CheckField).is(':checked') &&  !$(refs.secondaryLandline_CheckField).is(':checked')){
		        		 
		        		 app.validationDecorator.applyNumberIdError(refs.cellPhoneRadioGroup);
		        		 return;
		        	 }
		        	 return;
		        }else{
		        	$('#contactInfomation_infomation_phone').hide();
		        	app.validationDecorator.clearErrArrtibute();
		        	 if( !$(refs.secondaryMobile_CheckField).is(':checked') &&  !$(refs.secondaryLandline_CheckField).is(':checked') && $(refs.cellPhone).val().length > 0){
		        		 app.validationDecorator.applyNumberIdError(refs.cellPhoneRadioGroup);
		        		 return;
		        	 }
		        	
		        }
		}
		
		//updatePhoneNumberInModel();
		flow.next();
	}
	// ---------------------------------------------------------------------------------------
	function showPrevScreen() {
		var sMethod = 'showPrevScreen() ';
		console.log(logPrefix + sMethod);
		flow.back();
	}
	// ---------------------------------------------------------------------------------------
	// setting canBeEmpty flag based on the input entered
	function setFlag(argHomeFlag, argPhoneFlag) {
		var sMethod = 'setFlag() ';
		console.log(logPrefix + sMethod);
		$.each(model.data, function(index, item) {
			/*if (item.name == "homePhone") {
				item.validation.canBeEmpty = argHomeFlag;
				console.log(logPrefix + sMethod + " homePhone :: canBeEmpty " + item.validation.canBeEmpty);
			}*/
			if (item.name == "cellPhone") {
				item.validation.canBeEmpty = argPhoneFlag;
				console.log(logPrefix + sMethod + " cellPhone :: canBeEmpty " + item.validation.canBeEmpty);
			}
			if (item.name == "homePhoneRadioGroup") {
				item.validation.canBeEmpty = argHomeFlag;
				console.log(logPrefix + sMethod + " homePhoneRadioGroup :: canBeEmpty " + item.validation.canBeEmpty);
			}
			if (item.name == "cellPhoneRadioGroup") {
				item.validation.canBeEmpty = argPhoneFlag;
				console.log(logPrefix + sMethod + " cellPhoneRadioGroup :: canBeEmpty " + item.validation.canBeEmpty);
			}
		});
	}
	// ---------------------------------------------------------------------------------------
	function updatePhoneNumberInModel() {
		var sMethod = "updatePhoneNumberInModel()";
		var primaryPhone = $(refs.homePhone).val().replace(/-/g, '');
		var secondaryPhone = $(refs.cellPhone).val().replace(/-/g, '');

		console.log(logPrefix + sMethod + " secondaryPhone :: " + secondaryPhone + "primaryPhone : " + primaryPhone + "primary mobile checked :" + $(refs.primaryMobile_CheckField).is(':checked'));

		if (($(refs.primaryLandline_CheckField).is(':checked') && (primaryPhone !== "")) && ($(refs.secondaryLandline_CheckField).is(':checked')) && (secondaryPhone !== "")) {
			console.log(logPrefix + sMethod + " 4 : primary  landline checked :" + $(refs.primaryLandline_CheckField).is(':checked') +
				" secondary landline checked :" + $(refs.secondaryLandline_CheckField).is(':checked') + "primaryPhone :" + primaryPhone + "secondaryPhone :: " + secondaryPhone);
			model.set('homePhone', primaryPhone);
			model.set('cellPhone', secondaryPhone);
		} else if ($(refs.primaryMobile_CheckField).is(':checked') && $(refs.secondaryMobile_CheckField).is(':checked') && (primaryPhone !== "") && (secondaryPhone !== "")) {
			console.log(logPrefix + sMethod + " 5 : primary  mobile checked :" + $(refs.primaryMobile_CheckField).is(':checked') +
				" secondary mobile checked :" + $(refs.secondaryMobile_CheckField).is(':checked') + "primaryPhone :" + primaryPhone + "secondaryPhone :: " + secondaryPhone);
			model.set('homePhone', secondaryPhone);
			model.set('cellPhone', primaryPhone);
		} else if (($(refs.primaryLandline_CheckField).is(':checked')) && (primaryPhone !== "") && ($(refs.secondaryMobile_CheckField).is(':checked')) && (secondaryPhone !== "")) {
			console.log(logPrefix + sMethod + " 6 : primary  landline checked :" + $(refs.primaryLandline_CheckField).is(':checked')
				+ " secondary mobile checked :" + $(refs.secondaryMobile_CheckField).is(':checked') + "primaryPhone :" + primaryPhone + "secondaryPhone :: " + secondaryPhone);
			model.set('homePhone', primaryPhone);
			model.set('cellPhone', secondaryPhone);
		} else if (($(refs.primaryMobile_CheckField).is(':checked')) && (primaryPhone !== "") && ($(refs.secondaryLandline_CheckField).is(':checked')) && (secondaryPhone !== "")) {
			console.log(logPrefix + sMethod + " 7 : primary  mobile checked :" + $(refs.primaryMobile_CheckField).is(':checked')
				+ " secondary landline checked :" + $(refs.secondaryLandline_CheckField).is(':checked') + "primaryPhone :" + primaryPhone + "secondaryPhone :: " + secondaryPhone);
			model.set('homePhone', secondaryPhone);
			model.set('cellPhone', primaryPhone);
		} else if ($(refs.secondaryMobile_CheckField).is(':checked') && (secondaryPhone !== "")) {
			console.log(logPrefix + sMethod + " 8 : secondary mobile  mobile checked :" + $(refs.secondaryMobile_CheckField).is(':checked') + "secondaryPhone :: " + secondaryPhone);
			model.set('homePhone', secondaryPhone);
			model.set('cellPhone', secondaryPhone);
		} else if ($(refs.primaryLandline_CheckField).is(':checked') && (primaryPhone !== "")) {
			console.log(logPrefix + sMethod + " 2 :  primaryPhone : " + primaryPhone + " primary landline checked  :" + $(refs.primaryLandline_CheckField).is(':checked'));
			model.set('homePhone', primaryPhone);
			// this is for confirmation screen
			model.set('cellPhone', "");
		} else if ($(refs.secondaryLandline_CheckField).is(':checked') && (secondaryPhone !== "")) {
			console.log(logPrefix + sMethod + " 3 : secondary landline checked :" + $(refs.secondaryLandline_CheckField).is(':checked'));
			model.set('homePhone', secondaryPhone);
			// this is for confirmation screen
			model.set('cellPhone', "");
		} else if ($(refs.primaryMobile_CheckField).is(':checked') && (primaryPhone !== "") && (secondaryPhone === "")) {

			console.log(logPrefix + sMethod + "  1  : secondaryPhone :: " + secondaryPhone + "primaryPhone : " + primaryPhone + "primary mobile checked :" + $(refs.primaryMobile_CheckField).is(':checked'));
			model.set('homePhone', primaryPhone);
			model.set('cellPhone', primaryPhone);
		}

		console.log(logPrefix + sMethod + " model home phone :: " + model.get('homePhone'));
		console.log(logPrefix + sMethod + " model cell phone :: " + model.get('cellPhone'));
	};
	// ---------------------------------------------------------------------------------------
	function initModel() {
		// Get model from the store
		var currentModel = activationItems.getModel(model.name);
		console.log("currentModel " + currentModel);
		if (!currentModel) {
			activationItems.addModel(model);
		} else {
			model = currentModel;
		}
	}
	// ---------------------------------------------------------------------------------------
	function setUIElementsMasks() {
		// Set phone fields mask
		$('.contactInfoUIMask').mask('999-999-9999', {
			placeholder: "",
			useDelimeter: true,
			delimeter: '-'
		});
	}
	// ---------------------------------------------------------------------------------------
	function disableCheckBox() {
		$(refs.estmt_consent). prop("checked", false);
		$(refs.receiveEmail). prop("checked", false);
		$(refs.estmt_consent).prop('disabled', true);
		$(refs.receiveEmail).prop('disabled', true);
	}
	// ---------------------------------------------------------------------------------------
	function enableCheckBox() {
		$(refs.estmt_consent).prop('disabled', false);
		$(refs.receiveEmail).prop('disabled', false);
	}
	// ---------------------------------------------------------------------------------------
	
 
};
