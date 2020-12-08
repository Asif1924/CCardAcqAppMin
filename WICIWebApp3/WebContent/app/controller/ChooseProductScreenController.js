ensureNamespaceExists();

WICI.ChooseProductScreenController = function(activationItems, argTranslator,
                                              argMessageDialog) {
    var logPrefix = '[WICI.ChooseProductScreenController]::';
    var $screenContainer = $("#ChooseProductScreen");
    var translator = null;
    var messageDialog = null;
    var isDebugMode;
    // VZE-107
    var signatureControl;
    var isCustomerSignatureDiloge = false;
    
    this.show = show;
    this.init = init;
    this.hide = hide;
    var selectedProvince = "";

    var flow = null;
    var self = this;

    var loginModel = activationItems.getModel('loginScreen');

    this.syncUserData = syncUserData;
    var refs = {
        productCard : '#creditCardProductList',
        province : '#provinceTextField',
        applyButton : '#chooseProductScreen_ApplyNowButton',
        agencyProgram : '#programDropDown',
        agencyPromoCode : '#promoCodeTextField',
        // US3767
        agencyPromoCodeDropDown : '#promoCodeDropDown',
        // VZE-107
        signature:  '#chooseProductScreen_signature',
        signature_customer : '#chooseProductScreen_SingnatureContainer',
        resetSignature: '#chooseProductScreen_signature_Reset_Button',
        // VZE-108
        costOfCredit_Checkbox: '#receive_CostOfCredit_CheckBox',
        costOfCreditCheckbox_Area : '#receive_CostOfCredit_CheckBox_Area',
        cardmemberAgreement_Checkbox : '#cantireCard_Agreement_CheckBox',
        cardmemberAgreementCheckbox_Area : '#cantireCard_Agreement_CheckBoxArea',
        triangleRewardProgramCheckbox : '#triangle_Rewards_Program_TermsAndCondition_CheckBox',
        triangleRewardProgramCheckbox_Area :  '#triangle_Rewards_Program_TermsAndCondition_CheckBox_Area'
    };

    var model = new WICI.BaseModel({
        name : 'chooseProductModel',
        refs : refs,
        data : [ {
            name : 'productCard',
            value : null,
            validation : {
                type : 'presence',
                message : 'Choose one of the Credit Cards',
                group: [1]
            }
        }, {
            name : 'agencyProgram',
            value : null,
            validation : {
                type : 'presence',
                message : 'Program is not selected',
                group: [1]
            }
        }, 
        // US3767 
        { 
            name : 'agencyPromoCodeDropDown',
            value : null,
            validation : {
                type : 'presence',
                message : 'PromoCodeDropDown is not selected',
                group: [1]
            }
        }, {
            name : 'agencyPromoCode',
            value : null,
            validation : {
                type : 'format',
                message : 'Enter valid Promo Code',
                group: [1],
                matcher : /^[a-zA-Z0-9\'\-||S.O.]{1,5}$/,
                // US4433   Other then FGl store PromoCode field should not allow blank (Empty)
                canBeEmpty : (loginModel.get('retailNetWork') == "SPORTS" || loginModel.get('retailNetWork') == "PC") ? true : false
            }
        }, {
            name : 'province',
            value : null,
            validation : {
                type : 'presence',
                message : 'Province is not selected',
                group: [1]
            }
           
        },
        //VZE-107
        { notField: true, name: 'userSingnatureNative', value: null, validation: null},
        { name: 'controlConfirmation', value: null, validation: null},
        { name: 'signature_customer', value: null, validation: {type: 'presence', message: '', group: [2]}},
        { notField: true, name: 'userSingnature', value: null, validation: {type: 'presence', message: 'signatureScreen_validation_signature', group: [2]}},
        // VZE-108
        {name: 'costOfCreditAgreement',   value: null},
        {name: 'cardmemberAgreement',   value: null},
        {name: 'triangleRewardAgreement',   value: null},
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
        isDebugMode = activationItems.getModel('loginScreen').get('isDebugMode');
        
        var retailNetwork = loginModel.get('retailNetWork');
        var employerID = loginModel.get('employerID').toUpperCase();

        updateOmpCardLanguage();
        // US3766
        updateOmrCardLanguage();
        // US4989
        updateOmxCardLanguage();
        
        // Initialize model
        initModel();
        createView();
       
        // US4194
        if(retailNetwork == "MARKS") {
        	if(employerID !== 'E') {
        		showPromoCodeTextField();
        	}
        }
        // US4433 For FGL store hide program  drop down and set the value 
        else if(retailNetwork == "SPORTS"){
           	   hidePromoCodeDropDown();
        }else {
        	// US3767
        	if(employerID !== 'E') {
        		hidePromoCodeTextField();
        	}        	
        }

        bindEvents();
        populateProgramsList();
        populateProvinces();
        $('#provinceTextField').attr('disabled', 'disabled');
        //restoreCreditCardData();
        //showCOCD();

        if(employerID === 'E' && retailNetwork == "CT") {
            loadCSRWorkflowOMC();
        } else if($.inArray(retailNetwork, ['MARKS', 'SPORTS', 'FGLFRN', 'PHL', 'NS', 'MRKFRN', 'OS', 'PRTNR', 'PC']) != -1) {
            loadCSRWorkflowOMC();
        }        

        app.idleTimeService.start();

        app.logOutTriggerActionService.setActionMethod(function() {
            console.log(logPrefix + sMethod
                + " logOutTriggerActionService :: setActionMethod");
            try {
                (new WICI.DialogCloseHelper()).closeAllDialogs();

                app.idleTimeService.stop();
                app.logOutTriggerActionService.stop();
                app.abandonApplicationTriggerActionService.stop();
            } catch (e) {
            	if(isDebugMode){
                    messageDialog.error(e,translator.translateKey('errorDialog_defaultTitle'),$.noop);
                }
            	console.log(logPrefix + sMethod + " Exception: " + e);
            }
            flow.logOut();
        });
        app.logOutTriggerActionService.start();

        try {
            (new WICI.DialogCloseHelper()).closeAllDialogs();
            app.abandonApplicationTriggerActionService.stop();
            app.abandonApplicationTriggerActionService
                .setActionMethod(function() {
                    console
                        .log(logPrefix
                            + sMethod
                            + " abandonApplicationTriggerActionService :: setActionMethod");
                    app.idleTimeService.setAbandoned();
                    flow.startApplication();
                });
        } catch (e) {
        	if(isDebugMode){
                messageDialog.error(e,translator.translateKey('errorDialog_defaultTitle'),$.noop);
            }
        	console.log(logPrefix + sMethod + " Exception: " + e);
        }
        if(loginModel.get('employerID').toUpperCase() == 'E') {
        	showHandoutTabToCustomer_dialog();
		}
    }
    //----------------------------------------------------------------------------------------
    function setFrenchCTMlogo(){
        if( translator.getCurrentLanguageFSDPFormat() === "F"){
            app.translationExtender.changeCTMLogoToFrench();
        }
    }
    // ---------------------------------------------------------------------------------------
    function initModel() {
        // Get model from the store
        var currentModel = activationItems.getModel(model.name);
        if (!currentModel) {
            activationItems.addModel(model);
        } else {
            model = currentModel;
        }
    }
    // ---------------------------------------------------------------------------------------
    function show() {
        $screenContainer.show();

        updatePageTranslation();
        setFrenchCTMlogo();
    
    }
    // ---------------------------------------------------------------------------------------
    function hide() {
        $screenContainer.hide();
    }
    // ---------------------------------------------------------------------------------------
    function createView() {
        $screenContainer.empty();
        assembleNavigationBarAtTop();
        WICI.BreadcrumbsHelper.assembleBreadcrumbs(1, $screenContainer, activationItems);
        assemblePageHTML($screenContainer, "#WICIChooseProductScreen-template");
        $screenContainer.addClass("breadcrumbPadding");
        assembleCardContentsAndDisclaimerHTML();
        assembleNavigationBarAtBottom();
        updateOmxCardLanguage();
        updateOmpCardLanguage();
        // US3766
        updateOmrCardLanguage();
    }
    //----------------------------------------------------------------------------------------
    function updateOmpCardLanguage() {
        // Choose what card to display: English or French.
        if (app.translator.getCurrentLanguage() === "en") {
            $("#ompCard").removeClass("fr_card");
            $("#ompCard").addClass("en_card");
        } else {
            $("#ompCard").removeClass("en_card");
            $("#ompCard").addClass("fr_card");
        }
    }
    //----------------------------------------------------------------------------------------
    // US3766
    function updateOmrCardLanguage() {
        // Choose what card to display: English or French.
        if (app.translator.getCurrentLanguage() === "en") {
            $("#omrCard").removeClass("fr_card");
            $("#omrCard").addClass("en_card");
        } else {
            $("#omrCard").removeClass("en_card");
            $("#omrCard").addClass("fr_card");
        }
    }
    // ---------------------------------------------------------------------------------------
    function assembleNavigationBarAtTop() {
        $("#pageHeader-template").template("pageHeader");
        $.tmpl("pageHeader", {
            "logo_En" : translator.currentLanguageEnglish(),
            "settingsButtonId" : "chooseProductScreen_SettingsButton",
            "isNotEmployee" : activationItems.getModel('loginScreen').get('employerID').toUpperCase() !== "E"
        }).appendTo("#ChooseProductScreen");

        $('#chooseProductScreen_SettingsButton').addClass('rightPosition');
        $('#chooseProductScreen_SettingsButton').attr("chooseProductMenuItem",
            "false")
    }
    // ---------------------------------------------------------------------------------------
    function assembleNavigationBarAtBottom(){
        $("#pageFooter-template").template("pageFooter");
        $.tmpl("pageFooter", {}).appendTo("#ChooseProductScreen");
    }
    // ---------------------------------------------------------------------------------------
    function assemblePageHTML($element, templateName) {
        // VZE-107
        var outletProvince = getOutletProvince();
        $(templateName).tmpl( {
	        // US3767 
        	activationItems: activationItems,
            isNotEmployee: activationItems.getModel('loginScreen').get('employerID').toUpperCase !== 'E',
            loginProvince : outletProvince
            
            } ).appendTo($element);
    }
    // ---------------------------------------------------------------------------------------
    function assembleCardContentsAndDisclaimerHTML() {
        clearDescriptionAreas();
        $("#CC_OMC-template").tmpl().appendTo("#cardDescriptionArea");
        $("#CC_Legal_OMC-template").tmpl().appendTo(
            "#chooseProductScreen_disclaimerArea");
    }
    // ---------------------------------------------------------------------------------------
    function bindEvents() {
        $("#omcCard").click(omcHandler);
        $.subscribe('translatorFinished',function(){
            updateOmpCardLanguage();
            // US3766
            updateOmrCardLanguage();
            populateProvinces();
            populateProgramsList();
            // US4989
            updateOmxCardLanguage();
        });
        // VZE-107
        $("#dialog_container_customer_signature").hide();
        updateOmxCardLanguage();
        $(refs.agencyPromoCode).on('paste, input', inputLengthControlHandler);

		// US3767 
        $(refs.agencyPromoCodeDropDown).on("change", function() {  
        	if($("#promoCodeDropDown option:selected").text().toUpperCase() === "OTHER" 
        			|| $("#promoCodeDropDown option:selected").text().toUpperCase() === "AUTRE") {
        		showPromoCodeTextField();
        	} else {
        		// UAT Defect #42 fix
        		console.log($(refs.agencyPromoCodeDropDown).val().toUpperCase());
        		model.set('agencyPromoCode', $(refs.agencyPromoCodeDropDown).val().toUpperCase());
        		hidePromoCodeTextField();
        	}
        });
        
        // because Ontario is visible by default
        bindOmpCardHandler();
        $(refs.province).on("change", function() {
            var str = this.value;
            if (str == "ON" || str == "QC" || str == "NB" || str == "NL" || str == "PE" || str == "NS") {
                $("#ompCard").show();
                bindOmpCardHandler();
            } else {
            	loadCSRWorkflowOMC();
                $("#ompCard").hide();
                if($("#ompCard").hasClass('creditCardSelectedBgColor')){
                    $("#ompCard").removeClass('creditCardSelectedBgColor');
                    deActivateApplyButton();
                }
                unBindOmpCardHandler();
                
                if(model.get('productCard') == "OMP") {
                	showOMC();
                }
            };

            selectedProvince = $(refs.province).val();
            
            // US4194
            var controlRef = $(refs.agencyProgram);
            controlRef.empty();
            
            var employerID = loginModel.get('employerID');       
            var storeNumber = loginModel.get('locationFieldID');
            var retailNetwork = loginModel.get('retailNetWork');
            var programObj;
            
            if(retailNetwork == "MARKS") {
            	if (employerID.toUpperCase() != "E") {
            		if(translator.getCurrentLanguage() == 'en') {
            			
            			if(employerID.toUpperCase() !== "E" &&  $(refs.province).val() === "QC")
                	    {	 
            				programObj = JSON.parse(WICI.dictionary_en.program_Marks_PromoCode_QC);
                	    }else if (employerID.toUpperCase() !== "E" &&  $(refs.province).val() !== "QC"){
                	    	programObj = JSON.parse(WICI.dictionary_en.program_Marks_PromoCode);
                	    }
                    } else {            	
                    	if(employerID.toUpperCase() !== "E" &&  $(refs.province).val() === "QC")
                	    {	 
                    		programObj = JSON.parse(WICI.dictionary_fr.program_Marks_PromoCode_QC);
                	    }else if (employerID.toUpperCase() !== "E" &&  $(refs.province).val() !== "QC"){
                	    	programObj = JSON.parse(WICI.dictionary_fr.program_Marks_PromoCode);
                	    }
                    }
                                    
                    for (var key in programObj.FMR[0]) {
                               if (programObj.FMR[0].hasOwnProperty(key)) {
                                  console.log("key :: " + key);                             
                                  var optTempl = '<option value="' + key + '" ';
                                  optTempl = optTempl + '>' + key + '</option>';
                                  controlRef.append(optTempl);                                                               
                         }
                    }
                    //$(refs.agencyProgram).prop("disabled", true);
                    hidePromoCodeDropDown();
                    showPromoCodeTextField();
                    var promo = model.get('agencyPromoCode');
                    console.log(logPrefix + " promo :: " + promo);
                    if(promo) {
                    	$(refs.agencyPromoCode).val(model.get('agencyPromoCode'));
                    } else {
                    	$(refs.agencyPromoCode).val('MWW80');
                    }
                    model.set('agencyPromoCode', $(refs.agencyPromoCode).val().toUpperCase());
            	} else if (employerID.toUpperCase() === "E") {
                    var promo = model.get('agencyPromoCode');
                    console.log(logPrefix + " promo :: " + promo);
                    if(promo) {
                    	$(refs.agencyPromoCode).val(model.get('agencyPromoCode'));
                    } else {
                    	$(refs.agencyPromoCode).val('MWW80');
                    }
                    model.set('agencyProgram', 'MWW80');
                    model.set('agencyPromoCode', $(refs.agencyPromoCode).val().toUpperCase());                               
                    hideProgram();
                    // US3767 
                    hidePromoCodeDropDown();
                    updateOmxCardLanguage();
                }
            	//US4433 For FGl store hide and set value for  Program and show PromoCode as Empty 
            } else if(retailNetwork == "SPORTS") {
            	
            	    if(translator.getCurrentLanguage() == 'en') {
            	    	programObj = JSON.parse(WICI.dictionary_en.program_FGL_ProgramCode_intercept);
            	    }else{
            	    	programObj = JSON.parse(WICI.dictionary_fr.program_FGL_ProgramCode_intercept);
            	    }
            	    
            	    for (var key in programObj.FMR[0]) {
                        if (programObj.FMR[0].hasOwnProperty(key)) {
                           console.log("key :: " + key);                             
                           var optTempl = '<option value="' + key + '" ';
                           optTempl = optTempl + '>' + key + '</option>';
                           controlRef.append(optTempl);                                                               
                         }
                  }
                    $(refs.agencyPromoCode).val('');                    
                    $(refs.agencyProgram).prop("disabled", true);
                    model.set('agencyPromoCodeDropDown', 'OTHER');
                    showPromoCodeTextField();
                    hidePromoCodeDropDown();
            } else if(retailNetwork == "PC"){
            	
            	if(employerID.toUpperCase() === "E") {
            		if(translator.getCurrentLanguage() == 'en') {
            	    	programObj = JSON.parse(WICI.dictionary_en.program_PC_ProgramCode_CSR);
            	    }else{
            	    	programObj = JSON.parse(WICI.dictionary_fr.program_PC_ProgramCode_CSR);
            	    }
            	} else {
            		if(translator.getCurrentLanguage() == 'en') {
            	    	programObj = JSON.parse(WICI.dictionary_en.program_PC_ProgramCode_FMR);
            	    }else{
            	    	programObj = JSON.parse(WICI.dictionary_fr.program_PC_ProgramCode_FMR);
            	    }
            	}
            	
        	    for (var key in programObj.FMR[0]) {
                    if (programObj.FMR[0].hasOwnProperty(key)) {
                       console.log("key :: " + key);                             
                       var optTempl = '<option value="' + key + '" ';
                       optTempl = optTempl + '>' + key + '</option>';
                       controlRef.append(optTempl);                                                               
                     }
              }
                $(refs.agencyPromoCode).val('');                    
                $(refs.agencyProgram).prop("disabled", true);
                model.set('agencyPromoCodeDropDown', 'OTHER');
                showPromoCodeTextField();
                hidePromoCodeDropDown();
            } else {
            	if(employerID.toUpperCase() != "E") {
            		if(translator.getCurrentLanguage() == 'en') {
                    	var programObj = JSON.parse(WICI.dictionary_en.program_PromoCode);
                    	$("<option value='' >Please select ...</option>").prependTo(controlRef);
                    } else {
                    	var programObj = JSON.parse(WICI.dictionary_fr.program_PromoCode);
                    	$("<option value='' >Veuillez sélectionner...</option>").prependTo(controlRef);
                    }
                                    
                    for (var key in programObj.FMR[0]) {
                               if (programObj.FMR[0].hasOwnProperty(key)) {
                                  console.log(key);                             
                                  var optTempl = '<option value="' + key + '" ';
                                  optTempl = optTempl + '>' + key + '</option>';
                                  controlRef.append(optTempl);                                                               
                         }
                    }
            	} else if (employerID.toUpperCase() === "E") {
            		var promo = model.get('agencyPromoCode');
                    console.log(logPrefix + " promo :: " + promo);
                    if(promo) {
                    	$(refs.agencyPromoCode).val(model.get('agencyPromoCode'));
                    } else {
                    	$(refs.agencyPromoCode).val('CTR1');
                    }
                    model.set('agencyProgram', 'OTHER');
                    model.set('agencyPromoCode', $(refs.agencyPromoCode).val().toUpperCase());                               
                    hideProgram();
                    // US3767 
                    hidePromoCodeDropDown();
            	}        	
            }
            
            var program = model.get('agencyProgram');
            if (program){
            	console.log(program);
                 // selectProgram(program, model.get('agencyPromoCode'));
            }

            // $(refs.agencyProgram).trigger("change");
            
        });

        $(refs.agencyProgram).on("change", function(obj){
			// US3767 
       		hidePromoCodeTextField();
       		model.set('agencyProgram', $(refs.agencyProgram).val());
       		populatePromoCode();
        });
        // US3766                   
//        $("#omrCard").click(function(){ 
//        	console.log('omr');
//        	model.set('productCard', 'OMR'); 
//        	showOMR(); 
//        	// Update selected card style 
//        	updateSelectedCardStyle ($(this)); 
//        });
        // US4989
        $("#omcCard").click(function(){ 
        	console.log('omc');
        	model.set('productCard', 'OMX'); 
        	showOMX(); 
        	updateOmxCardLanguage();
        });
        
        // VZE-107
        $("#signatureDialogIAgree").click(function(){ 
	         var outletProvince = getOutletProvince();
              syncUserData();

              if (app.validationsOn){
	              // VZE-107 : FMR - All Province
			     if(loginModel.get('employerID').toUpperCase() !== 'E'){
				    if(isCustomerSignatureDiloge){
					   app.validationDecorator.focusControl("#chooseProductScreen_PageHeader");
				       app.validationDecorator.clearErrArrtibute();
			           var rez = model.validate(2);
		               app.validationDecorator.applyErrAttribute(rez);
		               $("#dialog_container_customer_signature").show();
			           $("#chooseProductScreen_SingnatureContainer").addClass('errorField');
			           app.validationDecorator.focusControl("#chooseProductScreen_SingnatureContainer");
		               if (rez.length > 0) {
		                  return;
		               }else{
			             model.set('signature_customer',  $(refs.signature).jSignature('getData', 'native').length > 0 ? 'data:' + $(refs.signature).jSignature('getData', 'image').join(',') : null );
			             model.set('userSingnature',  $(refs.signature).jSignature('getData', 'native').length > 0 ? 'data:' + $(refs.signature).jSignature('getData', 'image').join(',') : null );
		                 hide_dialog();
			             saveState();
			             flow.next();
			             app.abandonApplicationTriggerActionService.start();
		               }
			         }
			     }
                 // VZE-107 : Store Staff (E Login) - ROC Province 
		         if(loginModel.get('employerID').toUpperCase() === 'E' && outletProvince !== "QC"){
			         if(isCustomerSignatureDiloge){
				        app.validationDecorator.focusControl("#ChooseProductScreen");
				        app.validationDecorator.clearErrArrtibute();
			            var rez1 = model.validate(2);
		                app.validationDecorator.applyErrAttribute(rez1);
		                $("#dialog_container_customer_signature").show();
			            $("#chooseProductScreen_SingnatureContainer").addClass('errorField');
			            app.validationDecorator.focusControl("#chooseProductScreen_SingnatureContainer");
		                if (rez1.length > 0) {
		                  return;
		                }else{
			              app.validationDecorator.focusControl("#ChooseProductScreen");
			              model.set('signature_customer',  $(refs.signature).jSignature('getData', 'native').length > 0 ? 'data:' + $(refs.signature).jSignature('getData', 'image').join(',') : null );
			              model.set('userSingnature',  $(refs.signature).jSignature('getData', 'native').length > 0 ? 'data:' + $(refs.signature).jSignature('getData', 'image').join(',') : null );
		                  hide_dialog();
		               }
			         }
		         }
                 // VZE-107 : Store Staff (E Login) - QC Province 
                 if(loginModel.get('employerID').toUpperCase() === 'E' && outletProvince === "QC"){
	                if(isCustomerSignatureDiloge){
		               app.validationDecorator.focusControl("#ChooseProductScreen");
				       app.validationDecorator.clearErrArrtibute();
			           var rez2 = model.validate(2);
		               app.validationDecorator.applyErrAttribute(rez2);
		               $("#dialog_container_customer_signature").show();
			           $("#chooseProductScreen_SingnatureContainer").addClass('errorField');
			           app.validationDecorator.focusControl("#chooseProductScreen_SingnatureContainer");
		               if (rez2.length > 0) {
		                  return;
		               }else{
			              app.validationDecorator.focusControl("#ChooseProductScreen");
			              model.set('signature_customer',  $(refs.signature).jSignature('getData', 'native').length > 0 ? 'data:' + $(refs.signature).jSignature('getData', 'image').join(',') : null );
			              model.set('userSingnature',  $(refs.signature).jSignature('getData', 'native').length > 0 ? 'data:' + $(refs.signature).jSignature('getData', 'image').join(',') : null );
		                  hide_dialog();
		               }
			         }
                 }
              }
        }); 
        
        $("#signatureDialogCancel").click(function(){
	         var outletProvince = getOutletProvince();
        	// VZE-107 : FMR - All Province
            if(loginModel.get('employerID').toUpperCase() !== 'E') {
	           $("#dialog_container_customer_signature").hide();
            }
            // VZE-107 : Store Staff (E Login) - ROC Province 
            if(loginModel.get('employerID').toUpperCase() === 'E' && outletProvince !== "QC"){
	           $("#dialog_container_customer_signature").hide();
	           logout();
            }
            // VZE-107 : Store Staff (E Login) - QC Province 
        	if(loginModel.get('employerID').toUpperCase() === 'E' && outletProvince === "QC"){
	           $("#dialog_container_customer_signature").hide();
	           logout();
            }
        });

		$("#handoutOk").click(function(){
			show_dialog();
        });
   
        $("#handoutCancel").click(function(){
        	$("#handoutTabToCustomerDialog-container").hide();
        	logout();
        });

        // VZE-108
       /*var outletProvince = getOutletProvince();
       if(loginModel.get('employerID').toUpperCase() === 'E' && outletProvince !== "QC") {
	       	$.each(model.data, function(index, item) {
    		 				console.log( " Store Staff - ROC | Display Legal, CMA and Triangle Rewards T&C's on Product Info Screen. " );
    		 					if(item.name == "costOfCreditAgreement") {
    		 						 item.validation.canBeEmpty = false;
    		 					}
    		 					if(item.name == "cardmemberAgreement") {
    								 item.validation.canBeEmpty = false;
    							}
			                    if(item.name == "triangleRewardAgreement") {
    								 item.validation.canBeEmpty = false;
    							}
    		});
       }*/
        
    }
    //----------------------------------------------------------------------------------------
    function logout(){
    	app.flowController.logOut(self);
    }
    //----------------------------------------------------------------------------------------
	function showHandoutTabToCustomer_dialog() {
		$("#handoutTabToCustomerDialog-container").show();
        
	}
	//---VZE-108-------------------------------------------------------------------------------------
	function show_dialog() {
		var sMethod = 'show_dialog() ';
        console.log(logPrefix + sMethod);
        app.validationDecorator.focusControl("#ChooseProductScreen");
        isCustomerSignatureDiloge = true;
		$("#handoutTabToCustomerDialog-container").hide(); 
        $("#dialog_container_customer_signature").show();
       
        createSignatureControl();
	}
	//---VZE-108-------------------------------------------------------------------------------------
	function hide_dialog() {
		var sMethod = 'hide_dialog() ';
        console.log(logPrefix + sMethod);
        isCustomerSignatureDiloge = false;
		$("#handoutTabToCustomerDialog-container").hide(); 
        $("#dialog_container_customer_signature").hide();
	}
    // US4989
    //----------------------------------------------------------------------------------------
    function updateOmxCardLanguage() {
    	var sMethod = 'updateOmxCardLanguage() ';
        console.log(logPrefix + sMethod);
        
        // Choose what card to display: English or French.
        if (app.translator.getCurrentLanguage() === "en") {
            $("#omxCardChooseProduct").removeClass("fr_card");
            $("#omxCardChooseProduct").addClass("en_card");
        } else {
            $("#omxCardChooseProduct").removeClass("en_card");
            $("#omxCardChooseProduct").addClass("fr_card");
        }
    }
    //----------------------------------------------------------------------------------------
    function loadCSRWorkflowOMC() {
        $('.pageTitle').hide();
        $('.pageTitleCSR').show();
        $('#ompCard').parent().hide();
        // US3766
        $('#omrCard').parent().hide();
        $('#omcCard').unbind('click');
        $('#omcCard').parent().css('width', '100%');
        model.set('productCard', 'OMX');
        activateApplyButton();
        showOMC();
        updateOmxCardLanguage();
    }
    // ----------ADDED by DPS
    function omcHandler(needToUpdateButton) {
        console.log('omx');
        model.set('productCard', 'OMX');
        showOMC();

        // Update selected card style
        if (needToUpdateButton) {
            updateSelectedCardStyle($(this));
        }
    }
    function ompButtonHandler() {
        console.log('omp');
        model.set('productCard', 'OMP');
        showOMP();
        // Update selected card style
        updateSelectedCardStyle($(this));
    }
    function bindOmpCardHandler() {
        $("#ompCard").on("click", ompButtonHandler);
    }
    function unBindOmpCardHandler() {
        $("#ompCard").off("click", ompButtonHandler);
    }
    // ---------------------------------------------------------------------------------------
    function clearCardsSelection() {
        $("#omcCard").removeClass('creditCardSelectedBgColor');
        $("#ompCard").removeClass('creditCardSelectedBgColor');
        $("#omrCard").removeClass('creditCardSelectedBgColor');
    }
    // ---------------------------------------------------------------------------------------
    function updateSelectedCardStyle(card) {
        clearCardsSelection();
        card.addClass('creditCardSelectedBgColor');
        
        if(loginModel.get('retailNetWork') == "MARKS") {
        if ($("#omcCard").hasClass('creditCardSelectedBgColor')) {
			$("#omcCard").removeClass('creditCardSelectedBgColor');
		}}

        activateApplyButton();
    }
    // ---------------------------------------------------------------------------------------
    function activateApplyButton() {
        // Check if apply button is disabled
        var isDisabled = $(refs.applyButton).hasClass('grayflat');

        // If Apply button is disabled make it enabled
        if (isDisabled) {
            showGreenAplyButton();
            var employerID = loginModel.get('employerID');  

            // Bind with click event
            $(refs.applyButton).bind("click", function() {
                console.log("chooseProductScreen_ApplyNowButton.click");
                showNextScreen();                
                // US4571 starts
                //testPrint();                
                // US4571 ends 
                // US4495 -Test Print at tablet login for FMR
               /* if (employerID.toUpperCase() != "E") {
                	testPrint();
                }else{
                	showNextScreen();
                }*/
            });
        };
    }
    
    //---------------------------------------------------------------------------------------
    // US4495 -Test Print at tablet login for FMR
    function testPrint() {
		var sMethod = 'testPrint() ';
		console.log(logPrefix + sMethod);
		try {
			var isDevice = new WICI.DeviceDetectionHelper().any();
	
			if (isDevice) {
	
				if (!app.zebraPrinterWrapper.verifyPrinterMacAddress()) {
					app.accountProfileHelper.showNoPrinterSetupWarning ();	
					return;
				}
				new WICI.LoadingIndicatorController().show();
				app.zebraPrinterWrapper.testPrint(printTestFileSuccess, printTestFileFailure);
	
			} else {
				// Web print
				 new WICI.LoadingIndicatorController().hide();
				 messageDialog.confirm(translator.translateKey("testPrintStatusMsg"), testPrintConfirmationYes, testPrintConfirmationNo, translator.translateKey("printResponseStatusTitle"));
			}
		} catch (error) {
			if(isDebugMode){
                messageDialog.error(error,translator.translateKey('errorDialog_defaultTitle'),$.noop);
            }
        	console.log(logPrefix + sMethod + " Exception: " + error);
		}
		return;
	}
    
  //---------------------------------------------------------------------------------------
  // US4495 
	function printTestFileSuccess(result) {
	    var sMethod = 'printTestFileSuccess() ';
	    console.log(logPrefix + sMethod);
	    
	    new WICI.LoadingIndicatorController().hide();
	    messageDialog.confirm(translator.translateKey("testPrintStatusMsg"), testPrintConfirmationYes, testPrintConfirmationNo, translator.translateKey("printResponseStatusTitle"));
	}
	//---------------------------------------------------------------------------------------
	// US4495
	function printTestFileFailure() {
	    var sMethod = 'printTestFileFailure() ';
	    console.log(logPrefix + sMethod);
	    
	    new WICI.LoadingIndicatorController().hide();
	    messageDialog.confirm(translator.translateKey("testPrintStatusMsg"), testPrintConfirmationYes, testPrintConfirmationNo, translator.translateKey("printResponseStatusTitle"));
	}
	//---------------------------------------------------------------------------------------
	// US4495
    function testPrintConfirmationYes () {
        var sMethod = 'testPrintConfirmationYes() ';
        console.log(logPrefix + sMethod);
        showNextScreen();
    }
    //---------------------------------------------------------------------------------------
    // US4495
    function testPrintConfirmationNo () {
        var sMethod = 'testPrintConfirmationNo() ';
        console.log(logPrefix + sMethod);
        messageDialog.verifyTestPrint(translator.translateKey("testPrintVerifyPrinterMsg"),translator.translateKey("testPrintVerify_Title"),translator.translateKey("testPrintVerify_Contionue_Button"));
        showNextScreen();
    }
  
   // ---------------------------------------------------------------------------------------
    function deActivateApplyButton() {
        // Check if apply button is disabled
        var isActive = $(refs.applyButton).hasClass('greenflat');

        // If Apply button is disabled make it enabled
        if (isActive) {
            showGrayAplyButton();

            // Unbind with click event
            $(refs.applyButton).unbind("click");
        };
    }
    // ---------------------------------------------------------------------------------------
    function showGreenAplyButton(){
        $(refs.applyButton).removeClass('grayflat');
        $(refs.applyButton).addClass('greenflat');
    }
    function showGrayAplyButton(){
        $(refs.applyButton).removeClass('greenflat');
        $(refs.applyButton).addClass('grayflat');
    }
    // ---------------------------------------------------------------------------------------
    function showCOCD() {
        $("#CC_Legal_COCD-template").tmpl({
        		activationItems: activationItems,
        }).appendTo("#cardDescriptionArea");
        updatePageTranslation();
    }
    // ---------------------------------------------------------------------------------------
    function showOMC() {
        clearDescriptionAreas();

        $("#CC_OMC-template").tmpl().appendTo("#cardDescriptionArea");
        $("#CC_Legal_OMC-template").tmpl().appendTo(
            "#chooseProductScreen_disclaimerArea");
        showCOCD();

        updatePageTranslation();
    }
    // US4989
    // ---------------------------------------------------------------------------------------
    function showOMX() {
        clearDescriptionAreas();
        $("#CC_OMC-template").tmpl().appendTo("#cardDescriptionArea");
        $("#CC_Legal_OMC-template").tmpl().appendTo(
            "#chooseProductScreen_disclaimerArea");
        showCOCD();
        updatePageTranslation();
    }
    // ---------------------------------------------------------------------------------------
    function showOMP() {
        clearDescriptionAreas();

        $("#CC_OMP-template").tmpl().appendTo("#cardDescriptionArea");
        $("#CC_Legal_OMP-template").tmpl().appendTo(
            "#chooseProductScreen_disclaimerArea");
        showCOCD();

        updatePageTranslation();
    }
    // ---------------------------------------------------------------------------------------
    function showOMR() {
        clearDescriptionAreas();

        $("#CC_OMR-template").tmpl().appendTo("#cardDescriptionArea");
        $("#CC_Legal_OMR-template").tmpl().appendTo(
            "#chooseProductScreen_disclaimerArea");
        // US3766
        showCOCD();
        updatePageTranslation();
    }
    // ---------------------------------------------------------------------------------------
    function clearDescriptionAreas() {
        $("#cardDescriptionArea").empty();
        $("#chooseProductScreen_disclaimerArea").empty();
    }
    // ---------------------------------------------------------------------------------------
    function updatePageTranslation() {
        translator.run("ChooseProductScreen");
    }
    // ---------------------------------------------------------------------------------------
    function clearOutTheData () {
        var loginScreenData = activationItems.getModel('loginScreen'),
            chooseProductModelData = activationItems.getModel('chooseProductModel');

        activationItems.clearAllModels();
        activationItems.addModel(loginScreenData);
        activationItems.addModel(chooseProductModelData);
    }
    // ---------------------------------------------------------------------------------------
    function showNextScreen() {
        var sMethod = 'showNextScreen() ';
        console.log(logPrefix + sMethod);

        clearOutTheData();

        syncUserData();

        if (app.validationsOn) {
            app.validationDecorator.clearErrArrtibute();
             // VZE-107
	         
            var outletProvince = getOutletProvince();
			// VZE-108 -- Starts
			if(loginModel.get('employerID').toUpperCase() === 'E' && outletProvince !== "QC") {
				var rezCheckbox = [];
				if(!$(refs.costOfCredit_Checkbox).is(':checked') && !$(refs.cardmemberAgreement_Checkbox).is(':checked') && !$(refs.triangleRewardProgramCheckbox ).is(':checked')){
					rezCheckbox.push(refs.costOfCreditCheckbox_Area);
					rezCheckbox.push(refs.cardmemberAgreementCheckbox_Area);
					rezCheckbox.push(refs.triangleRewardProgramCheckbox_Area);
					$(refs.costOfCreditCheckbox_Area).addClass('errorField');
					$(refs.cardmemberAgreementCheckbox_Area).addClass('errorField');
					$(refs.triangleRewardProgramCheckbox_Area).addClass('errorField');
				}
				if(!$(refs.costOfCredit_Checkbox).is(':checked')){
					rezCheckbox.push(refs.costOfCreditCheckbox_Area);
					$(refs.costOfCreditCheckbox_Area).addClass('errorField');
				}
				if(!$(refs.cardmemberAgreement_Checkbox).is(':checked')){
					rezCheckbox.push(refs.cardmemberAgreementCheckbox_Area);
					$(refs.cardmemberAgreementCheckbox_Area).addClass('errorField');
				}
				if(!$(refs.triangleRewardProgramCheckbox ).is(':checked')){
					rezCheckbox.push(refs.triangleRewardProgramCheckbox_Area);
					$(refs.triangleRewardProgramCheckbox_Area).addClass('errorField');
				}
				if(rezCheckbox.length>0){
	                app.validationDecorator.applyErrAttribute(rezCheckbox);
	                return;
	            }
			}
			
			// VZE-108 -- Ends
            var rez = model.validate(1);
            if (rez.length > 0) {
                var errStrArr = [];
                $.each(rez, function(index, item) {
                    errStrArr.push(translator.translateKey(item.err));
                });
                app.validationDecorator.applyErrAttribute(rez);
                
                return;
            }
           
        }
       
        // US3981       
       	/*messageDialog.htmlConfirm(translator.translateKey("chooseProductScreen_Handoutprompts_YesNo_Message"), 
           		handleHandoutpromptsYes, handleHandoutpromptsNo, translator.translateKey("chooseProductScreen_Handoutprompts_Title"));*/ 
       // VZE-107    		
       if(loginModel.get('employerID').toUpperCase() !== 'E'){
	     show_dialog();
       }else{
	     saveState();
         flow.next();
         app.abandonApplicationTriggerActionService.start();
        
       }             
        
        
    }
    // US3981 - Start
    // ---------------------------------------------------------------------------------------
    function handleHandoutpromptsNo() {
        var sMethod = 'handleHandoutpromptsNo()';
        console.log(logPrefix + sMethod);
        messageDialog.info(translator.translateKey("chooseProductScreen_Handoutprompts_Ok_Message")
        		, translator.translateKey("chooseProductScreen_Handoutprompts_Title"), $.noop);
    }
    // ---------------------------------------------------------------------------------------    
    function handleHandoutpromptsYes() {
        var sMethod = 'handleHandoutpromptsYes()';
        console.log(logPrefix + sMethod);
        saveState();
        flow.next();
        app.abandonApplicationTriggerActionService.start();
    }    
    // US3981 - End
    // ---------------------------------------------------------------------------------------
    function syncUserData() {
        var sMethod = 'syncUserData() ';
        console.log(logPrefix + sMethod);
        model.set('province', $(refs.province).val());
        // US4194
        if(loginModel.get('retailNetWork') == "MARKS") {
        	if(loginModel.get('employerID').toUpperCase() !== 'E') {
        		model.set('agencyProgram', $(refs.agencyProgram).val());
        		model.set('agencyPromoCodeDropDown', 'OTHER');
            	model.set('agencyPromoCode', $(refs.agencyPromoCode).val().toUpperCase());
        	} else {
        		model.set('agencyProgram', 'OTHER');
        		model.set('agencyPromoCodeDropDown', 'OTHER');
            	model.set('agencyPromoCode', $(refs.agencyPromoCode).val().toUpperCase());
            }
        } // US4433 For FGL store hide and set Program value for next page
        else if(loginModel.get('retailNetWork') == "SPORTS"){
        	model.set('agencyProgram', "Intercept");
        	$(refs.agencyProgram).prop("disabled", true);
        	model.set('agencyPromoCodeDropDown', 'OTHER');
        	if($(refs.agencyPromoCode).val() === null || $(refs.agencyPromoCode).val() === ""){
        		model.set('agencyPromoCode', 'BLANK');
        	}else{
        		model.set('agencyPromoCode', $(refs.agencyPromoCode).val().toUpperCase());
        	}
        } else if(loginModel.get('retailNetWork') == "PC") {
        	model.set('agencyProgram', $(refs.agencyProgram).val());
    		model.set('agencyPromoCodeDropDown', 'OTHER');
        	model.set('agencyPromoCode', $(refs.agencyPromoCode).val().toUpperCase());
        } else {
        	// US3767
            if(loginModel.get('employerID').toUpperCase() !== 'E') {        
            	// US3920	
            	if($(refs.agencyPromoCodeDropDown).val() !== null) {
            		if($("#promoCodeDropDown option:selected").text().toUpperCase() === "OTHER" 
            			|| $("#promoCodeDropDown option:selected").text().toUpperCase() === "AUTRE") {
                		model.set('agencyPromoCodeDropDown', 'OTHER');
                	} else {
    	            	// UAT Defect #42 fix
                		model.set('agencyPromoCodeDropDown', $(refs.agencyPromoCodeDropDown).val().toUpperCase());
                	} 
            	}        	       
                model.set('agencyProgram', $(refs.agencyProgram).val());
                if($(refs.agencyPromoCodeDropDown).val() !== null) {
                	if($(refs.agencyPromoCodeDropDown).val() === "") {
                    	model.set('agencyPromoCode', $(refs.agencyPromoCode).val().toUpperCase());
                	} else {
    	            	// UAT Defect #42 fix
                		model.set('agencyPromoCode', $(refs.agencyPromoCodeDropDown).val().toUpperCase());    		
                	}
                }            
            } else {
            	model.set('agencyProgram', 'OTHER');
            	model.set('agencyPromoCodeDropDown', 'OTHER');
            	model.set('agencyPromoCode', $(refs.agencyPromoCode).val().toUpperCase());
            }        	
        }
        // VZE-107
       
        if(isCustomerSignatureDiloge){
	         model.set('signature_customer',  $(refs.signature).jSignature('getData', 'native').length > 0 ? 'data:' + $(refs.signature).jSignature('getData', 'image').join(',') : null );
             model.set('userSingnature',  $(refs.signature).jSignature('getData', 'native').length > 0 ? 'data:' + $(refs.signature).jSignature('getData', 'image').join(',') : null );
             model.set('userSingnatureNative',  $(refs.signature).jSignature('getData', 'native'));
             model.set('controlConfirmation',  'Y');
        }
	    
        var outletProvince = getOutletProvince();
        if(loginModel.get('employerID').toUpperCase() === 'E' && outletProvince !=="QC") {
	      model.set('costOfCreditAgreement',   $(refs.costOfCredit_Checkbox).is(':checked') ? 'Y' : 'N');
          model.set('cardmemberAgreement',   $(refs.cardmemberAgreement_Checkbox).is(':checked') ? 'Y' : 'N');
          model.set('triangleRewardAgreement',   $(refs.triangleRewardProgramCheckbox).is(':checked') ? 'Y' : 'N');
        }else{
	      model.set('costOfCreditAgreement',  'N');
          model.set('cardmemberAgreement', 'N');
          model.set('triangleRewardAgreement','N');
        }
        console.log(logPrefix + sMethod + ' model data: ' + model.toString());
    }
    // ---------------------------------------------------------------------------------------
    function saveState(){
        app.agencyProgram = model.get('agencyProgram');
        app.agencyPromoCode = model.get('agencyPromoCode');
    }
    // ---------------------------------------------------------------------------------------
    function populateProvinces() {
        var sMethod = 'populateProvinces() ';
        console.log(logPrefix + sMethod);
        syncUserData();
        var provinceValue = model.get('province');
        // Placeofissues list is constant so no need to re-populate it!
//		if ($(refs.province + ' option').length > 1) {
//			console.log(logPrefix + sMethod
//					+ " select control is already populated.");
//			return;
//		}

        var controlRef = $(refs.province);
        controlRef.empty();

        var list = new WICI.ProvincesList();

        var outletProvince = null;

        if (loginModel != null
            && loginModel.get('userLocationResponse') != null) {
            var locationHelper = new WICI.UserLocationResponseHelper();
            locationHelper.setUserLocationResponseObject(loginModel
                .get('userLocationResponse'));
            outletProvince = locationHelper.getOutletProvince();
        }

        var isProvincePredefined = false;
        $.each(list.data, function(index, item) {
            var optTempl = '<option value="' + item.value + '" ';
            if (outletProvince !== null && outletProvince !== ''
                && outletProvince === item.value) {
                optTempl = optTempl + "selected ";
                isProvincePredefined = true;
            }
            optTempl = optTempl + '>' + translator.translateKey(item.text)
                + '</option>';
            controlRef.append(optTempl);
        });

        // Save current province
        selectedProvince = $(refs.province).val();

        if(provinceValue){
            $(refs.province + " [value='" + provinceValue + "']").attr("selected",
                "selected");
        }

        if (isProvincePredefined) {
            // Raise province change event - to hide not needed cards
            $(refs.province).trigger("change");
        }
        // US4433 - retain promocode on change of language
        var promo = model.get('agencyPromoCode');
        var storeNumber = loginModel.get('locationFieldID');
        
        console.log(logPrefix + sMethod + " promo :: " + promo);
        if(loginModel.get('retailNetWork') == "SPORTS") {
        	if(promo === "BLANK") {
            	$(refs.agencyPromoCode).val('');
            } else if(promo !== "BLANK") {
            	$(refs.agencyPromoCode).val(model.get('agencyPromoCode'));
            }
        }
    }

    function populateProgramsList(){
        var sMethod = 'populateProgramsList() ';
        console.log(logPrefix + sMethod);

        syncUserData();

        var controlRef = $(refs.agencyProgram);
        controlRef.empty();
		// US3920
        /*var list = new WICI.ProgramsList();
        populateDropDown(controlRef, list.data);*/
        
        // US4194
        var employerID = loginModel.get('employerID');       
        var storeNumber = loginModel.get('locationFieldID');
        var programObj;
        
        if(loginModel.get('retailNetWork') == "MARKS") {
        	if (employerID.toUpperCase() != "E") {
        		if(translator.getCurrentLanguage() == 'en') {
        			
        			if(employerID.toUpperCase() !== "E" &&  $(refs.province).val() === "QC")
            	    {	 
        				programObj = JSON.parse(WICI.dictionary_en.program_Marks_PromoCode_QC);
                		// $("<option value='' >Veuillez sélectionner...</option>").prependTo(controlRef);
            	    }else if (employerID.toUpperCase() !== "E" &&  $(refs.province).val() !== "QC"){
            	    	programObj = JSON.parse(WICI.dictionary_en.program_Marks_PromoCode);
            	    	// $("<option value='' >Veuillez sélectionner...</option>").prependTo(controlRef);
            	    }
        			
        			// programObj = JSON.parse(WICI.dictionary_en.program_Marks_PromoCode);
                	// $("<option value='' >Please select ...</option>").prependTo(controlRef);
                } else {            	
                	if(employerID.toUpperCase() !== "E" &&  $(refs.province).val() === "QC")
            	    {	 
                		programObj = JSON.parse(WICI.dictionary_fr.program_Marks_PromoCode_QC);
                		// $("<option value='' >Veuillez sélectionner...</option>").prependTo(controlRef);
            	    }else if (employerID.toUpperCase() !== "E" &&  $(refs.province).val() !== "QC"){
            	    	programObj = JSON.parse(WICI.dictionary_fr.program_Marks_PromoCode);
            	    	// $("<option value='' >Veuillez sélectionner...</option>").prependTo(controlRef);
            	    }
                }
                                
                for (var key in programObj.FMR[0]) {
                           if (programObj.FMR[0].hasOwnProperty(key)) {
                              console.log("key :: " + key);                             
                              var optTempl = '<option value="' + key + '" ';
                              optTempl = optTempl + '>' + key + '</option>';
                              controlRef.append(optTempl);                                                               
                     }
                }
                var promo = model.get('agencyPromoCode');
                console.log(logPrefix + sMethod + " promo :: " + promo);
                if(promo) {
                	$(refs.agencyPromoCode).val(model.get('agencyPromoCode'));
                } else {
                	$(refs.agencyPromoCode).val('MWW80');
                }
                model.set('agencyPromoCode', $(refs.agencyPromoCode).val().toUpperCase());
        	} else if (employerID.toUpperCase() === "E") {
                if(model.get('agencyPromoCode')) {
                	$(refs.agencyPromoCode).val(model.get('agencyPromoCode'));
                } else {
                	$(refs.agencyPromoCode).val('MWW80');
                }
                model.set('agencyProgram', 'OTHER');
                model.set('agencyPromoCode', $(refs.agencyPromoCode).val().toUpperCase());
                hideProgram();
                // US3767 
                hidePromoCodeDropDown();
            }
        } // US4433 For FGl store  hide Program list and set the value  as OTHER 
        else if(loginModel.get('retailNetWork') == "SPORTS"){
        	
        	if(translator.getCurrentLanguage() == 'en') {
        		programObj = JSON.parse(WICI.dictionary_en.program_FGL_ProgramCode_intercept);
        	}else{
        		programObj = JSON.parse(WICI.dictionary_fr.program_FGL_ProgramCode_intercept);
        	}
        	
        	for (var key in programObj.FMR[0]) {
                if (programObj.FMR[0].hasOwnProperty(key)) {
                   console.log("key :: " + key);                             
                   var optTempl = '<option value="' + key + '" ';
                   optTempl = optTempl + '>' + key + '</option>';
                   controlRef.append(optTempl);                                                               
                }
           }
            $(refs.agencyProgram).prop("disabled", true);
        	model.set('agencyPromoCodeDropDown', 'OTHER');
            // US3767 
            hidePromoCodeDropDown();
            // US4433 - retain promocode on change of language
            var promo = model.get('agencyPromoCode');
            console.log(logPrefix + sMethod + " promo :: " + promo);
            if(promo === "BLANK") {
            	$(refs.agencyPromoCode).val('');
            } else if(promo !== "BLANK") {
            	$(refs.agencyPromoCode).val(model.get('agencyPromoCode'));
            }
        } else if(loginModel.get('retailNetWork') == "PC"){
        	
        	if(loginModel.get('employerID').toUpperCase() !== 'E') {
        		if(translator.getCurrentLanguage() == 'en') {
            		programObj = JSON.parse(WICI.dictionary_en.program_PC_ProgramCode_FMR);
            	}else{
            		programObj = JSON.parse(WICI.dictionary_fr.program_PC_ProgramCode_FMR);
            	}
        	} else {
        		if(translator.getCurrentLanguage() == 'en') {
            		programObj = JSON.parse(WICI.dictionary_en.program_PC_ProgramCode_CSR);
            	}else{
            		programObj = JSON.parse(WICI.dictionary_fr.program_PC_ProgramCode_CSR);
            	}
        	}
        	
        	for (var key in programObj.FMR[0]) {
                if (programObj.FMR[0].hasOwnProperty(key)) {
                   console.log("key :: " + key);                             
                   var optTempl = '<option value="' + key + '" ';
                   optTempl = optTempl + '>' + key + '</option>';
                   controlRef.append(optTempl);                                                               
                }
           }
            $(refs.agencyProgram).prop("disabled", true);
        	model.set('agencyPromoCodeDropDown', 'OTHER');
            // US3767 
            hidePromoCodeDropDown();
            // US4433 - retain promocode on change of language
            var promo = model.get('agencyPromoCode');
            console.log(logPrefix + sMethod + " promo :: " + promo);
            if(promo === "BLANK") {
            	$(refs.agencyPromoCode).val('');
            } else if(promo !== "BLANK") {
            	$(refs.agencyPromoCode).val(model.get('agencyPromoCode'));
            }
        } else {
        	if(employerID.toUpperCase() != "E") {
        		
        		 var controlRefPromo = $(refs.agencyPromoCodeDropDown);
                 controlRefPromo.empty();
                 hidePromoCodeTextField();
        		
        		if(translator.getCurrentLanguage() == 'en') {
                	var programObj = JSON.parse(WICI.dictionary_en.program_PromoCode);
                	$("<option value='' >Please select ...</option>").prependTo(controlRef);
                	$("<option value='' >Please select ...</option>").prependTo(controlRefPromo);
                } else {
                	var programObj = JSON.parse(WICI.dictionary_fr.program_PromoCode);
                	$("<option value='' >Veuillez sélectionner...</option>").prependTo(controlRef);
                	$("<option value='' >Veuillez sélectionner...</option>").prependTo(controlRefPromo);
                }
                                
                for (var key in programObj.FMR[0]) {
                           if (programObj.FMR[0].hasOwnProperty(key)) {
                              console.log(key);                             
                              var optTempl = '<option value="' + key + '" ';
                              optTempl = optTempl + '>' + key + '</option>';
                              controlRef.append(optTempl);                                                               
                     }
                }
        	} else if (employerID.toUpperCase() === "E") {
        		var promo = model.get('agencyPromoCode');
                if(promo) {
                	$(refs.agencyPromoCode).val(model.get('agencyPromoCode'));
                } else {
                	$(refs.agencyPromoCode).val('CTR1');
                }
                model.set('agencyProgram', 'OTHER');
                model.set('agencyPromoCode', $(refs.agencyPromoCode).val().toUpperCase());                               
                hideProgram();
                // US3767 
                hidePromoCodeDropDown();
        	}        	
        }
        
        // US3920
        if(loginModel.get('retailNetWork') == "MARKS"){
        	// Todo Nothing to add here now
        } //US4433
        else if(loginModel.get('retailNetWork') == "SPORTS"){
        	// Todo Nothing ,show empty PromoCode field
        } else if(loginModel.get('retailNetWork') == "PC"){
        	// Todo Nothing ,show empty PromoCode field
        } else {
        	if(loginModel.get('employerID').toUpperCase() !== 'E') {
            	var program = model.get('agencyProgram');
            	console.log("program "+program);
            	if(program){      
            		var controlRefProg = $(refs.agencyProgram);
            		controlRefProg.empty();
            		controlRefProg.trigger("change");
                    selectProgram('', model.get('agencyProgram'));
            	}        	
            }
        }
        
		/*
		E login blank screen
		var program = model.get('agencyProgram');
		console.log(sMethod+"program  : "+program);
        if (program){
        	populatePromoCode();
            selectProgram(program, model.get('agencyPromoCodeDropDown'));
        }*/
                
        // $(refs.agencyProgram).trigger("change");

    }
    // ---------------------------------------------------------------------------------------    
    // US3767 
    function populatePromoCode() {    	
    	var sMethod = 'populatePromoCode() ';
    	console.log(logPrefix + sMethod);    	
    	
    	var controlRef = $(refs.agencyPromoCodeDropDown);
        controlRef.empty();
		// US3920
        var programValue = model.get('agencyProgram');  
        // US4194
        var employerID = loginModel.get('employerID');       
        var storeNumber = loginModel.get('locationFieldID');
        
        if(loginModel.get('retailNetWork') == "MARKS"){
        	
        	console.log(logPrefix + sMethod + "Marks Store populate Promocode list");
        	
        	// To be added logic for dynamic promocode populating
        } // US4433
        else if(loginModel.get('retailNetWork') == "SPORTS"){
        	// PromoCode should be empty
        }else {
        	if(translator.getCurrentLanguage() == 'en') {
            	var programObj = JSON.parse(WICI.dictionary_en.program_PromoCode);
            	$("<option value='' >Please select ...</option>").prependTo(controlRef);
            } else {
            	var programObj = JSON.parse(WICI.dictionary_fr.program_PromoCode);
            	$("<option value='' >Veuillez sélectionner...</option>").prependTo(controlRef);
            }
            
        	if($("#promoCodeDropDown option:selected").text().toUpperCase() === "OTHER" 
    			|| $("#promoCodeDropDown option:selected").text().toUpperCase() === "AUTRE") {
        		showPromoCodeTextField();
        	} else {
        		hidePromoCodeTextField();
        	}
        	
        	$.each(programObj.FMR[0][programValue], function (index, value) {
                $.each(value, function (index, value) {
                	var optTempl = '<option value="' + value + '" ';
                    optTempl = optTempl + '>' + index
                        + '</option>';
                    controlRef.append(optTempl);
                    console.log("index:" + index); 
                    console.log("value:" + value); 
               });
            });
        }
                       
        /*var list = new WICI.PromoCodeList();
        list.data = list.getDataByProgram(programValue);        
        populateDropDown(controlRef, list.data);  */                      
    }    
    // ---------------------------------------------------------------------------------------    
    function populateDropDown(dropDown, listData){
        $.each(listData, function(index, item) {
            var optTempl = '<option value="' + item.value + '" ';
            optTempl = optTempl + '>' + translator.translateKey(item.text)
                + '</option>';
            dropDown.append(optTempl);
        });
    }
    // ---------------------------------------------------------------------------------------
    function selectProgram(programToSelect, promoCode) {
    	var sMethod = "selectProgram() :: ";
        console.log(sMethod + programToSelect + " : " + promoCode);
        // US3499
        // Update program desc in drop down for french
        /*var employerID = loginModel.get('employerID');       
        var storeNumber = loginModel.get('locationFieldID');*/
        $(refs.agencyProgram + " [value='" +programToSelect + "']").attr("selected",
        "selected");
        $(refs.agencyPromoCodeDropDown + " [value='" + promoCode + "']").attr("selected",
        "selected");
        // Old code. Logic implemented for static Quebec specific program population.
        // Now it's removed, since we are dynamically populating programs and promocode from dictionary.
        /*if(parseInt(storeNumber) >= 6000 && parseInt(storeNumber) <= 6999 && employerID.toUpperCase() !== "E" &&  $(refs.province).val() === "QC")
	    {	 
	    	$(refs.agencyProgram + " [value='" +programToSelect + "']").text(translator.translateKey("Program_"+programToSelect + "_QC") );
	    }else if (parseInt(storeNumber) >= 6000 && parseInt(storeNumber) <= 6999 && employerID.toUpperCase() !== "E" &&  $(refs.province).val() !== "QC"){
	    	
	    	$(refs.agencyProgram + " [value='" +programToSelect + "']").text(translator.translateKey("Program_"+programToSelect) );
	    }*/
	    
        if(promoCode){        	        
            //$(refs.agencyPromoCode).val(promoCode);
        }
    }
    // ---------------------------------------------------------------------------------------
    function restoreCreditCardData() {
        var sMethod = "restoreCreditCardData()";
        console.log(logPrefix + sMethod);
        // VZE-107
        /*model.set('userSingnatureNative', null);
        $(refs.signature).jSignature('reset');
        $(refs.signature).jSignature ('setData',[], 'native');
        $(refs.resetSignature).removeClass('darkgrayflat');
        $(refs.resetSignature).addClass('grayflat');
        $("#handoutTabToCustomerDialog-container").hide();
        $("#dialog_container_customer_signature").hide();*/
        hide_dialog();
        //VZE-108
        var outletProvince = null;

        if (loginModel != null
            && loginModel.get('userLocationResponse') != null) {
            var locationHelper = new WICI.UserLocationResponseHelper();
            locationHelper.setUserLocationResponseObject(loginModel
                .get('userLocationResponse'));
            outletProvince = locationHelper.getOutletProvince();
        }
      //  if(loginModel.get('employerID').toUpperCase() === 'E' && outletProvince !== "QC") {
	      $(refs.costOfCredit_Checkbox).prop('checked', model.get('costOfCreditAgreement') === 'Y' ? true : false );
          $(refs.cardmemberAgreement_Checkbox).prop('checked', model.get('cardmemberAgreement_Checkbox') === 'Y' ? true : false );
          $(refs.triangleRewardProgramCheckbox).prop('checked', model.get('triangleRewardAgreement') === 'Y' ? true : false );
      // }      
        restoreProgramAndPromoCode();
    }
    //---------------------------------------------------------------------------------------
    function revertProvince() {
        $(refs.province).val(selectedProvince);
        $(refs.province).trigger("change");
    };
    //---------------------------------------------------------------------------------------
    function restoreProgramAndPromoCode() {
        if(app.agencyProgram){
            selectProgram(app.agencyProgram, app.agencyPromoCode);
        }
        syncUserData();
        // $(refs.agencyProgram).trigger("change");
    };
    //---------------------------------------------------------------------------------------
    function hideProgram() {
        var container = $(refs.agencyProgram).parents("tr")[0];
        var sibling = $(container).next()[0];
        for (var i = 0; i < container.children.length; i++) {
            sibling.children[i].className = container.children[i].className;
        }
        $(container).hide();
    }
    //---------------------------------------------------------------------------------------
    // US3767 - Start
    function hidePromoCodeDropDown() {
        var container = $(refs.agencyPromoCodeDropDown).parents("tr")[0];
        var sibling = $(container).next()[0];
        for (var i = 0; i < container.children.length; i++) {
            sibling.children[i].className = container.children[i].className;
        }
        $(container).hide();
    }
    //---------------------------------------------------------------------------------------
    function hidePromoCodeTextField() {
    	$(refs.agencyPromoCode).val(null);
        var container = $(refs.agencyPromoCode).parents("tr")[0];
        /*var sibling = $(container).next()[0];
        for (var i = 0; i < container.children.length; i++) {
            sibling.children[i].className = container.children[i].className;
        }*/
        $(container).hide();
    }
    //---------------------------------------------------------------------------------------
    function showPromoCodeTextField() {
    	$(refs.agencyPromoCode).val(null);
        var container = $(refs.agencyPromoCode).parents("tr")[0];
        /*var sibling = $(container).next()[0];
        for (var i = 0; i < container.children.length; i++) {
            sibling.children[i].className = container.children[i].className;
        }*/
        $(container).show();
    }
    // End
    //---------------------------------------------------------------------------------------
    function toggleCTMLogo() {
        translator.getCurrentLanguage() == 'en' ? $('#choseProduct a#topBanner10XImage').addClass(
        'topBanner10XImageBlock').removeClass(
        'topBanner10XImageBlock_fr') : $('#choseProduct a#topBanner10XImage')
        .addClass('topBanner10XImageBlock_fr').removeClass(
                'topBanner10XImageBlock');
    }
    //---------------------------------------------------------------------------------------
    function inputLengthControlHandler (event) {
    	var sMethod="inputLengthControlHandler() :: ";
        var self = $(this);
        var maxlength = self.attr('maxlength');
        setTimeout(function(){
            if(self.val().length > maxlength) {
                self.val(self.val().substring(0, maxlength));
            }
        },0);
        console.log(logPrefix + sMethod + $(refs.agencyPromoCode).val().toUpperCase());
        model.set('agencyPromoCode', $(refs.agencyPromoCode).val().toUpperCase());
    }
    
    //-------------VZE- 107---------------------------------------------------------
    function createSignatureControl() {
        if (!signatureControl) {
            // Restore signature
            if (model.get('userSingnatureNative')) {
                // Create signature object
                signatureControl = $(refs.signature).jSignature({'signatureLine': true});
                // Restore signature content
                $(refs.signature).jSignature("setData", model.get('userSingnatureNative'), 'native');
                // Apply some dependencies
                onSignatureChaged();
            } else {
                signatureControl = $(refs.signature).jSignature();
            }

            $(refs.signature).bind('change', onSignatureChaged);
        }
    }
  //---------------------------------------------------------------------------------------
    function onSignatureChaged (e) {
        var sMethod = 'onSignatureChaged() ';
        console.log(logPrefix + sMethod);

        if ($(refs.signature).jSignature('getData', 'native').length > 0) {
            //isCustomerSignatureDiloge = true;
            $(refs.resetSignature).removeClass('grayflat');
            $(refs.resetSignature).addClass('blackflat');
            $("#chooseProductScreen_SingnatureContainer").removeClass('errorField');
            $("#customerSignatureWarningDIV").removeClass("popup_SignatureDialog_Red").addClass("popup_SignatureDialog_Green");
	   		$("#customerSignatureHeader").removeClass("chooseProduct_SignatureTitle_Red").addClass("chooseProduct_SignatureTitle_Green");
            $(refs.resetSignature).bind('click', onResetSignatureClicked);
            
        }
        model.set('userSingnatureNative',  $(refs.signature).jSignature('getData', 'native'));
        model.set('controlConfirmation', 'Y');
    }
    //---------------------------------------------------------------------------------------
    function onResetSignatureClicked () {
        var sMethod = 'onResetSignatureClicked() ';
        console.log(logPrefix + sMethod);
        //isCustomerSignatureDiloge = false;
        model.set('controlConfirmation', 'N');
        // Clear canvas
        $(refs.signature).jSignature('reset');
        $(refs.resetSignature).removeClass('darkgrayflat');
        $(refs.resetSignature).addClass('grayflat');
        $("#customerSignatureWarningDIV").removeClass("popup_SignatureDialog_Green").addClass("popup_SignatureDialog_Red");
	   	$("#customerSignatureHeader").removeClass("chooseProduct_SignatureTitle_Green").addClass("chooseProduct_SignatureTitle_Red");
        $(refs.resetSignature).unbind('click', onResetSignatureClicked);
    }
    
  	 //-------------VZE- 107---------------------------------------------------------
     function getOutletProvince(){
	    if (loginModel != null && loginModel.get('userLocationResponse') != null) {
                var locationHelper = new WICI.UserLocationResponseHelper();
                locationHelper.setUserLocationResponseObject(loginModel.get('userLocationResponse'));
                outletProvince = locationHelper.getOutletProvince();
        }
        return outletProvince;
	      
	 }
};
