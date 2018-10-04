ensureNamespaceExists();

BRB.AdditionalInformationController = function(activationItems, argTranslator, argMessageDialog, argPopup) {
    var logPrefix = '[BRB.AdditionalInformationController]::';
	var $screenContainer = $("#AdditionalInformationScreen");

	var translator = null;
	var messageDialog = null;
	var connectivityController = null;
	
	this.show = show;
	this.init = init;
	this.hide = hide;
	
	var flow = null;
	var savedFlow = null;
	var screenBelow = null;
	var blockName = null;
	var popupHideEventHandler = null;
	var _validationResult = [];
	var isSkSelected = false;  
	var	wasOptionalProductsCleared = false;
	//---------------------------------------------------------------------------------------
	this.syncUserData = syncUserData; 
    var refs = {    
    		suplementaryCardSection			:	'#additionalInfo_AboutYourselfArea',
    		
    		suplementaryYesNo				:	'#additionalInformation_AuthorizeSupplementaryCardmember_CheckBox_Field',
    		
    		suplementaryYesNoLable          :   '#additionalInformation_suplementaryYesNo_TextField',    
    		suplementaryFieldIndicatorBlock :	'#getSuplementaryCard_requiredFieldIndicatorBlock',
    		
    		title                           :   '#additionalInformation_Title_TextField',
    		
    		firstName                       :   '#additionalInformation_FirstName_TextField',
            initial                         :   '#additionalInformation_Initial_TextField',
            lastName                        :   '#additionalInformation_LastName_TextField',
    		
            dateOfBirth_Month               :   '#additionalInformation_DateOfBirth_Month',                                 
            dateOfBirth_Day                 :   '#additionalInformation_DateOfBirth_Day',
            dateOfBirth_Year                :   '#additionalInformation_DateOfBirth_Year',
                        
            primaryPhone_1                  :   '#additionalInformation_PrimaryPhone_1_TextField',
            primaryPhone_2                  :   '#additionalInformation_PrimaryPhone_2_TextField',
            primaryPhone_3                  :   '#additionalInformation_PrimaryPhone_3_TextField',
            primaryPhone                    :   '#additionalInformation_PrimaryPhone_Control',
            
            relationship                    :   '#additionalInformation_Relationship_TextField',
    		
            sameAddressArea                 :   '#additionalInformation_SameAddress_Area',            
            sameAddressRadio                :   "input[name=additionalInformation_SameAddres]",
            sameAddressNo					:   '#additionalInformation_SameAddresNo',
            sameAddressYes					:   '#additionalInformation_SameAddresYes',
            addressLine1                    :   "#additionalInformation_AddressLine1",
            addressLine2                    :   "#additionalInformation_AddressLine2",
            streetNumber					:	"#additionalInformation_StreetNumber_TextField",
            streetName				      	:	"#additionalInformation_StreetName_TextField",
            suiteUnit                       :   "#additionalInformation_Suite_TextField",
            province                        :   '#additionalInformation_Province_TextField',
            city                            :   '#additionalInformation_City_TextField',
                        
            postalCode_1                    :   '#additionalInformation_PostalCode1_TextField',
            postalCode_2                    :   '#additionalInformation_PostalCode2_TextField',
            postalCode                      :   '#additionalInformation_PostalCode_Control',
            //US4219
          
            optionalInsurance_row_one       :   '#additionalInsuranceTable_row_one',
            optionalInsurance_row_two       :   '#additionalInsuranceTable_row_two',
            optionalInsurance_row_three     :   '#additionalInsuranceTable_row_three',
            optionalInsurance_row_four      :   '#additionalInsuranceTable_row_four',
            optionalInsurance_row_five      :   '#additionalInsuranceTable_row_five',
            optionalInsurance_row_six       :   '#additionalInsuranceTable_row_six',
            
            insurance_fieldIndicatorBlock	:	'#optionalInsurance_requiredFieldIndicatorBlock',
            optionalInsurance_CheckArea		:	'#additionalInsuranceTable',
            optionalInsurance               :   '#additionalInformationTable',  
            optionalInsuranceYesNoLable     :   '#additionalInformation_OptionalInsuranceYesNo_TextField',
            optionalInsurance_CP            :   '#additionalInformation_OptionalInsurance_YesNoTextField',
            optionalInsurance_CP_Title      :   '#additionalInformation_OptionalInsurance_YesNoTextField_Title',
            optionalInsurance_CP_Area       :   '#additionalInformation_OptionalInsurance_CP_Area', 
            optionalInsurance_CP_Table      :   '#additionalInformation_OptionalInsurance_CP_Table',
            optionalInsurance_CP_Agreement  :   '#additionalInformation_optionalInsurance_CP_Agreement',
            
            optionalInsurance_IW_Area       :   '#additionalInformation_OptionalInsurance_IW_Area',
            optionalInsurance_IW_Table      :   '#additionalInformation_OptionalInsurance_IW_Table',
            optionalInsurance_IW            :   '#additionalInformation_OptionalInsurance_IW_CheckField',
            optionalInsurance_IW_Lable      :   '#additionalInformation_OptionalInsurance_IW_TextField',
            optionalInsurance_IW_Agreement  :   '#additionalInformation_optionalInsurance_IW_Agreement',
            
            optionalInsurance_PA            :   '#additionalInformation_OptionalInsurance_PA_CheckField',
            optionalInsurance_PA_Title      :   '#additionalInformation_OptionalInsurance_PA_CheckField_Title',
            optionalInsurance_PA_Area       :   '#additionalInformation_OptionalInsurance_PA_Area', 
            optionalInsurance_PA_Table      :   '#additionalInformation_OptionalInsurance_PA_Table',
            optionalInsurance_PA_Agreement  :   '#additionalInformation_optionalInsurance_PA_Agreement',
                       
            optionalInsurance_NA            :   '#additionalInformation_OptionalInsurance_NA_CheckField',
            
    		continueButtonContainer			:   '#additionalInformation_continueButtonContainer',
    		continueButton					:   '#additionalInformation_ContinueButton',
    		
    		cancelButtonContainer			:	'#additionalInformation_cancelButtonContainer',
    		cancelButton					:   '#additionalInformation_CancelButton',
    		
    		backButtonContainer				:   '#additionalInformation_BackButtonContainer',
    		backButton						:   '#additionalInformation_BackButton',
    		
    		suplementaryCardArea			:	'#additionalSuplementaryCardArea',
    		insuranceArea					:	'#additionalInsuranceArea',
    		
    		blockSuplementaryCardArea		:	'suplementaryCardArea',
    		blockInsuranceArea				:	'insurancefArea',
    		breadcrumbTrailArea				:	'#AdditionalInformationScreen #BreadcrumbTrailArea1',
    		steps3                          :   '#steps3',
    		footnoteBlock					:	'#additionalInformation_FootnoteBlock',
    		additionalBirthDateID			:	'#additionalInformation_DateOfBirth_YearID',
    		optionalProduct_horizontal_Line_1 :  '#Page_3_HR_line_1',
    		optionalProduct_horizontal_Line_2 :  '#Page_3_HR_line_2'

    			
    };
    //US4219
    //hide the CP and PA if age >76
    function hidePAandCPAgeRestriction(){
		var sMethod = " hidePAandCPAgeRestriction() :: ";    	
        var personalDataModel = activationItems.getModel('personalInformation');
        if(personalDataModel.get('age') > 76) {
        	$(refs.optionalInsurance).hide();//Protection Advantage hiding
        	$(refs.optionalInsurance_PA).hide();
        	$(refs.optionalInsurance_row_one).hide();
        	$(refs.optionalInsurance_row_two).hide();
        	$(refs.optionalInsurance_row_three).hide();
        	$(refs.optionalInsurance_row_four).hide();
        	$(refs.optionalInsurance_row_five).hide();
        	$(refs.optionalInsurance_row_six).hide();
            $(refs.optionalInsurance_PA).attr('checked', false);
            $(refs.optionalInsurance_PA_Title).hide();
            $(refs.optionalInsurance_PA_Table).hide();
            $(refs.optionalInsurance_PA_Area).hide();
            $(refs.optionalInsurance_PA_Agreement).attr('checked', false);
            $(refs.optionalInsurance_CP).hide();
            $(refs.optionalInsurance_CP).attr('checked', false);
            $(refs.optionalInsurance_CP_Table).hide();
            $(refs.optionalInsurance_CP_Title).hide();
            $(refs.optionalInsurance_CP_Area).hide();
            $(refs.optionalInsurance_CP_Agreement).attr('checked', false);
        }    	
    }
    
    var model = new BRB.BaseModel({
        name: 'additionalInformation',
        refs: refs, 
        data:[
              { name: 'suplementaryYesNo',     	   value: null, validation: null },
              
              { name: 'title',                     value: null, validation: {type: 'presence', message: 'personalInformation_TitleError'} },
              
              { name: 'firstName',                 value: null, validation: { type: 'personName',  message: 'personalInformation_FirstNameError', group:[1]} },
              { name: 'initial',                   value: null, validation: { type: 'format',      message: '', group:[1], matcher: /^[A-Z\u00C0-\u017F]{1}/i, canBeEmpty: true } },
              { name: 'lastName',                  value: null, validation: { type: 'personName',  message: 'personalInformation_LastNameError', group:[1] } },
              
              { notField: true, name: 'dateOfBirth_Month',      value: null, validation: { type: 'month',    message: 'personalInformation_DateofBirthMonthError', group:[1] } },
              { notField: true, name: 'dateOfBirth_Day',        value: null, validation: { type: 'day',    message: 'personalInformation_DateofBirthDateError', group:[1] } },
              { notField: true, name: 'dateOfBirth_Year',       value: null, validation: { type: 'year',    message: 'personalInformation_DateofBirthYearError', group:[1] } },
              { name: 'birthDate',                 value: null, validation: null },
              
              {name: 'primaryPhone',               value: null, validation: { type: 'phone',       message: 'personalInformation_PrimaryPhoneError', group:[1] } },
                            
              { name: 'relationship',              value: null, validation: { type: 'presence',    message: 'additionalInformation_RelationshipError', group:[1] } },
              
              { name: 'sameAddressArea',   		   value: 'Y', validation: { type: 'notNull',    message: 'additionalInformation_NoRadioSelecedError', group:[1] } },              
              
              { name: 'streetNumber',              value: null, validation: {type: 'streetNumber', message: 'personalInformation_StreetError', group:[2]} },
              { name: 'streetName',                value: null, validation: {type: 'addressLine',  message: 'personalInformation_StreetNameError', group:[2]} },
              { name: 'suiteUnit',                 value: null, validation: {type: 'suiteUnit',    message: 'personalInformation_AptError', canBeEmpty: true, group:[2]}  },
              { name: 'city',                      value: null, validation: {type: 'city',         message: 'personalInformation_CityError', group:[2]}},
              { name: 'province',                  value: null, validation: {type: 'presence',     message: 'personalInformation_ProvinceError', group:[2]}},              
              
              { name: 'postalCode',                value: null, validation: {type: 'postal',     message: 'personalInformation_PostalCodeError', group:[2]} },
              
              { name: 'optionalInsurance_CP',         value: null, validation: null },
              { notField: true, name: 'optionalInsurance_CP_Table',              value: null, validation: {type: 'presence',     message: 'additionalInformation_AgreeToTermsError', group:[3]}},              
              { name: 'optionalInsurance_IW',         value: null, validation: null },
              { notField: true, name: 'optionalInsurance_IW_Table',              value: null, validation: {type: 'presence',     message: 'additionalInformation_AgreeToTermsError', group:[4]}},
              { name: 'optionalInsurance_PA',         value: null, validation: null },
              { notField: true, name: 'optionalInsurance_PA_Table',              value: null, validation: {type: 'presence',     message: 'additionalInformation_AgreeToTermsError', group:[5]}},
              { notField: true, name: 'optionalInsurance_NA',         value: null, validation: null },
              
              { notField: true, name: 'optionalInsurance_CheckArea',    value: null, validation: {type: 'termsAndConditions',     message: 'additionalInformation_NoRadioSelecedError', group:[6]}}
              
       ]
    });    
    
    var url = {    
    		OptionalInsuranceCP_en		:	'https://www.ctfs.com/content/ctfs/en/optional-products/credit_protector_terms.html',
    		OptionalInsuranceIW_en		:	'https://www.ctfs.com/content/ctfs/en/optional-products/identity_watch_terms.html',
    		OptionalInsurancePA_en		:	'https://www.ctfs.com/content/ctfs/en/optional-products/protection_advantage_terms.html',
    		OptionalInsuranceCP_fr		:	'https://www.ctfs.com/content/ctfs/fr/optional-products/credit_protector_terms.html',
    		OptionalInsuranceIW_fr		:	'https://www.ctfs.com/content/ctfs/fr/optional-products/identity_watch_terms.html',
    		OptionalInsurancePA_fr		:	'https://www.ctfs.com/content/ctfs/fr/optional-products/protection_advantage_terms.html'
    };
    
    //---------------------------------------------------------------------------------------
	function init( argFlow ) {
        var sMethod = 'init() ';
        BRB.Log(logPrefix + sMethod);
        if(!argPopup){
        	BRB.AppConfig.TrackingScreenID = 4;
        }        
        flow = argFlow;        
        translator = argTranslator;         //(AA)Dependency Injection Principle: Allows for proper unit testing
        messageDialog = argMessageDialog;   //(AA)Dependency Injection Principle: Allows for proper unit testing
		
        cardTypeGlobal = activationItems.getModel('overview').get('cardType');
		BRB.Log(logPrefix + sMethod +"cardType :: "+ cardTypeGlobal);  
		
		connectivityController = new BRB.ConnectivityController(new BRB.ConnectionStatus(), messageDialog, translator, BRB.AppConfig.ConnectivityConfig);
		connectivityController.init();
		
        if (!activationItems) {
            BRB.Log(logPrefix + sMethod + ' "activationItems" is null!!!');
            activationItems = {};
        }
        var currentModel = activationItems.getModel(model.name);
        if (!currentModel) {
            activationItems.addModel(model);
        } else {
            model = currentModel;
        }

		createView();
		
		if (argFlow == null) {		
			// Work around IE8 page-proofs issue
			updatePageStylesheet(true);			
		}
		toggle10XImege();
		hidePAandCPAgeRestriction();
		toggleHeader();
		
	}    
	//---------------------------------------------------------------------------------------
	function initUI(isURLOpenFlag){
		fillControlsWithData();
		bindEvents();		
		
		restoreCreditCardData();
		
		setUIElementsMasks();
		
		showHideSuplementaryCard();
		showHideAddressContainer();
		updateOptionalInsuranceVisibility(isURLOpenFlag);
		toggle10XImege();
		toggleHeader();
	}
	//---------------------------------------------------------------------------------------
	
	function syncSuplementaryCardArea (currentModel)
	{
		 var sMethod = 'syncSuplementaryCardArea() ';
	     BRB.Log(logPrefix + sMethod);
	     if (currentModel == null || currentModel === undefined)
	     {
	    	 currentModel = model;
	     }
	     currentModel.set('suplementaryYesNo', $(refs.suplementaryYesNo).is(':checked'));
	     if (currentModel.get('suplementaryYesNo')) {        
	    	 currentModel.set('title',              $(refs.title).val());
	            
	    	 currentModel.set('firstName',          $(refs.firstName).val().toUpperCase());
	    	 currentModel.set('initial',            $(refs.initial).val().toUpperCase());
	    	 currentModel.set('lastName',           $(refs.lastName).val().toUpperCase());
	            
	    	 currentModel.set('dateOfBirth_Month',      $(refs.dateOfBirth_Month).val());
	    	 currentModel.set('dateOfBirth_Day',        $(refs.dateOfBirth_Day).val());
	    	 currentModel.set('dateOfBirth_Year',       $(refs.dateOfBirth_Year).val());
	            
	    	 if($(refs.dateOfBirth_Month).val() == "null" || $(refs.dateOfBirth_Day).val() == "null" || $(refs.dateOfBirth_Year).val()==="") {
	    		 currentModel.set('birthDate', null);
	         }
	    	 else {
	    		 currentModel.set('birthDate',      $(refs.dateOfBirth_Year).val() + "-" + $(refs.dateOfBirth_Month).val() + "-" + $(refs.dateOfBirth_Day).val());
	    	 }
	                             
	    	 currentModel.set('primaryPhone',        $(refs.primaryPhone_1).val() + $(refs.primaryPhone_2).val() + $(refs.primaryPhone_3).val());
	            
	    	 currentModel.set('relationship',       $(refs.relationship).val());
	        }
	     else {
	    	 currentModel.set('sameAddressArea', 'N');
	     }
	     currentModel.set('sameAddressArea', $(refs.sameAddressRadio + ":checked").val()==="true" ? 'Y' : 'N');
	    // currentModel.set('sameAddressRadio', $(refs.sameAddressRadio + ":checked").val());
	     if (currentModel.get('sameAddressArea') == 'N') {		
	    	 currentModel.set('streetNumber',       $(refs.streetNumber).val().toUpperCase());
	    	 currentModel.set('streetName',         $(refs.streetName).val().toUpperCase());
	    	 currentModel.set('suiteUnit',          $(refs.suiteUnit).val().toUpperCase());
	    	 currentModel.set('city',               $(refs.city).val().toUpperCase());
	    	 currentModel.set('province',           $(refs.province).val());
	    	 
	    	 currentModel.set('postalCode',        $(refs.postalCode_1).val().toUpperCase() + $(refs.postalCode_2).val().toUpperCase());
	     }		     
	      
	}
	//---------------------------------------------------------------------------------------
	function syncInsuranceData(currentModel)
	{
		 var sMethod = 'syncInsuranceData() ';
	     BRB.Log(logPrefix + sMethod);
	     if (currentModel == null || currentModel === undefined)
	     {
	    	 currentModel = model;
	     }
	     currentModel.set('optionalInsurance_IW', $(refs.optionalInsurance_IW).is(':checked'));
	     currentModel.set('optionalInsurance_CP', $(refs.optionalInsurance_CP).is(':checked'));
	     currentModel.set('optionalInsurance_PA', $(refs.optionalInsurance_PA).is(':checked'));
	     currentModel.set('optionalInsurance_NA', $(refs.optionalInsurance_NA).is(':checked'));
	     currentModel.set('optionalInsurance_CP_Table',      $(refs.optionalInsurance_CP_Agreement).is(':checked'));
	     currentModel.set('optionalInsurance_IW_Table',      $(refs.optionalInsurance_IW_Agreement).is(':checked'));
	     currentModel.set('optionalInsurance_PA_Table',      $(refs.optionalInsurance_PA_Agreement).is(':checked'));
	    
	     currentModel.set('optionalInsurance_CheckArea',  isOptionalInsuranceSelected(currentModel));	    
        
         BRB.Log(logPrefix + sMethod + ' model data: \n' + currentModel.toString());
	}
	
	//---------------------------------------------------------------------------------------
	function isOptionalInsuranceSelected (currentModel) {
		return  currentModel.get('optionalInsurance_CP') || 
	     currentModel.get('optionalInsurance_IW') ||
	     currentModel.get('optionalInsurance_PA') || 
	     currentModel.get('optionalInsurance_NA');
	}
	//---------------------------------------------------------------------------------------
    function syncAllUserData(){
       	var sMethod = 'syncAllUserData() ';
        BRB.Log(logPrefix + sMethod);
        syncSuplementaryCardArea();
        syncInsuranceData();     
           
    }
    //---------------------------------------------------------------------------------------
    function syncUserData(currentModel){
        var sMethod = 'syncUserData() ';
        BRB.Log(logPrefix + sMethod);
        
        //model.set('suplementaryYesNo', $(refs.suplementaryYesNo).is(':checked'));
 
        if(blockName)
		{
			if(blockName === refs.blockSuplementaryCardArea)
			{
				syncSuplementaryCardArea(currentModel);
			}
			else if(blockName === refs.blockInsuranceArea)
			{
				syncInsuranceData(currentModel);
			}			
		}
        else
        {
        	syncAllUserData();
        }
    }
    //---------------------------------------------------------------------------------------
    function changeIsSkSelectedFlag(){
	        	var localFlagSkSelected = app.isSkSelected();
	        	if(localFlagSkSelected != isSkSelected){
	        		isSkSelected = localFlagSkSelected;
	        		// if province was changed on other page, need to assemble new template/
	        		createView();
	        	}
	        
    }
    //---------------------------------------------------------------------------------------
	function popup(argScreenBelow, popupHideCallback, argBlockName, argFlow, optionalProductsCleared){
		blockName = argBlockName;
		wasOptionalProductsCleared = optionalProductsCleared;
		screenBelow = argScreenBelow;	
		popupHideEventHandler = popupHideCallback;
		savedFlow = argFlow;
		init(null);	
		// UAT 38 - July 22, CP Revitalization
		// changeIsSkSelectedFlag();
		$(refs.footnoteBlock).hide();
		$screenContainer.fadeIn(1000);
		translator.run("AdditionalInformationScreen");
		toggle10XImege();
		toggleHeader();
		focusFirstElement();
		initUI(false);
	}
	this.popup = popup;	
	//---------------------------------------------------------------------------------------
	function validateCustomModel(){
		var currentModel = jQuery.extend(true, {}, model);
		
		syncUserData(currentModel);
		var validationResult = [];
		
		if (app.validationsOn) {
            app.validationDecorator.clearErrArrtibute(); 
            if(argPopup){
            	//validationResult = validation();
                if(blockName)
            	{
            		if(blockName === refs.blockSuplementaryCardArea)
            		{
            			validationResult = validateSuplementaryCardArea(currentModel);
            		}
            		else if(blockName === refs.blockInsuranceArea)
            		{
            			validationResult = validateInsuranceArea(currentModel);
            		}            			
            	}
            }
		}
		return validationResult;
	}
	//---------------------------------------------------------------------------------------
	function restoreScreenBelow(currentModel){

		var validationResult = validateCustomModel();

		if (validationResult.length > 0) {
            app.validationDecorator.applyErrAttribute(validationResult, false, translator);
            $(refs.makeCorrectionSection).show();
            return; 
        }
		syncUserData();
		$(refs.footnoteBlock).show();
		hidePopupWindow();
	}
	//---------------------------------------------------------------------------------------
	function hidePopupWindow()
	{
		argPopup = false;
		blockName = null;
		init(savedFlow);
		hide();
		screenBelow.fadeIn(1000);
		popupHideEventHandler();
	}
	//---------------------------------------------------------------------------------------
	function show(){
		// UAT 38 - July 22, CP Revitalization
		// changeIsSkSelectedFlag();
		$screenContainer.show();
		translator.run("AdditionalInformationScreen");
		initUI(false);
		
		// Work around IE8 page-proofs issue
		updatePageStylesheet();
		toggle10XImege();
		toggleHeader();
	}
	//---------------------------------------------------------------------------------------
	function updatePageStylesheet(isPoup) {
		// Work around IE8 round corners issue
		var ieUIHelper = new BRB.IeUIHelper();
		if(ieUIHelper.needToAddValueToInput()){
			addValuesToInputs(ieUIHelper);
		}
		if (isPoup) {
			ieUIHelper.roundAllCornersForTag([$("#additionalInformation_cancelChangesButtonHref"), 
			                                  $("#additionalInformation_saveChangesButtonHref")]);
		} else {		
			ieUIHelper.roundRightCornersForTag([$("#additionalInformation_BackButtonHref")]);
			ieUIHelper.roundLeftCornersForTag([$("#additionalInformation_ContinueButtonHref")]);
		}
		$('body').css('height','0%');
		$('body').css('height','100%');
		//window.scrollBy(0, 0);
		toggle10XImege();
		toggleHeader();
	}
	//---------------------------------------------------------------------------------------
	function hide(){
		$screenContainer.hide();
	}
	//---------------------------------------------------------------------------------------
	function createView() {
		$screenContainer.empty();
		if( !argPopup ){
			assembleNavigationBarAtTop();
			assemblePageHTML($screenContainer, "#BRBAdditionalInformation-template");
			insertAfterElement($(refs.steps3), "#creditCardDescription-template");	
			$screenContainer.addClass("breadcrumbPadding");	
		}else{
			assemblePageHTML($screenContainer, "#BRBAdditionalInformation-template");
		}
		if(blockName)
		{
			$(refs.breadcrumbTrailArea).hide();
			$(refs.suplementaryCardArea).hide();
			$(refs.insuranceArea).hide();
			
			if(blockName === refs.blockSuplementaryCardArea)
			{
				$(refs.suplementaryCardArea).show();
			}
			else if(blockName === refs.blockInsuranceArea)
			{
				$(refs.insuranceArea).show();
			}
		}
		createAndIsertToDomInputsWithPlaceHolder();
	}
	//---------------------------------------------------------------------------------------
	function assembleNavigationBarAtTop() {
        $("#pageHeader-template").template("pageHeader");
        $.tmpl("pageHeader", {
        	"switchLanguageButtonId" : "AdditionalInformation_LanguageButton", "isMOA":isMOA, "cardType":cardTypeGlobal
        }).appendTo("#AdditionalInformationScreen");
    }
	//---------------------------------------------------------------------------------------
	function assemblePageHTML($element, templateName) {
		
		var isMOA =  app.getIsMOARequest();
		BRB.Log("assemblePageHTML() :: " + isMOA);
		var html = $(templateName).tmpl({'screenIsPopup':argPopup, 'isSkSelected':isSkSelected, 'isMOA':isMOA, 'cardType':cardTypeGlobal}); 
		$element.append(html);
	}
	//---------------------------------------------------------------------------------------
	function insertAfterElement($element, templateName) {
		
		var html = $(templateName).tmpl({'screenIsPopup':false, 'cardType':cardTypeGlobal}); 
		
		$element.after(html);
	}
	//---------------------------------------------------------------------------------------
    function bindEvents(){
	    var sMethod = 'bindEvents() ';
        BRB.Log(logPrefix + sMethod);
        unbindEvents();	
		bindNavigationButtons();
		bindAutoTabbing();
		
		$(refs.continueButton).on("mouseup", function(){
            BRB.Log("AdditionalInformation_continueButton.click");
            onContinueButtonPressed();
        });
		
		$(refs.backButton).on("mouseup", function(){
            BRB.Log("AdditionalInformation_backButton.click");
            onBackButtonPressed();
        });
		
		$(refs.cancelButton).on("mouseup", function(){
			if(wasOptionalProductsCleared){
				if ($(refs.optionalInsurance_IW).is(':checked')) {
		            $(refs.optionalInsurance_IW_Area).hide();
		            $(refs.optionalInsurance_IW_Agreement).attr('checked', false);
		        }
				$(refs.optionalInsurance_NA).attr('checked',false);
				//model.set('optionalInsurance_IW', $(refs.optionalInsurance_IW).is(':checked'));
				var validationResult = validateCustomModel();
				if (validationResult.length > 0) {
		            app.validationDecorator.applyErrAttribute(validationResult, false, translator);
		            $(refs.makeCorrectionSection).show();
		            return; 
		        }
				
			}
			hidePopupWindow();
		});
		
		$(refs.suplementaryYesNo).change(function() {
			$(refs.suplementaryYesNoLable).text(translator.translateKey(activationItems.getCheckBoxValueFriendlyName($(refs.suplementaryYesNo).is(':checked'))));			
			showHideSuplementaryCard();
		});
		
		$(refs.sameAddressRadio).change(function() {
			showHideAddressContainer();
		});
		
		$(refs.continueButtonContainer).on("mousedown mouseup", function(e){
		    $(refs.continueButton).toggleClass( "active", e.type === "mousedown" );
		});
		
		$(refs.backButtonContainer).on("mousedown mouseup", function(e){
		    $(refs.backButton).toggleClass( "active", e.type === "mousedown" );
		});
		
		$(refs.cancelButtonContainer).on("mousedown mouseup", function(e){
		    $(refs.cancelButton).toggleClass( "active", e.type === "mousedown" );
		});
		
		$(refs.optionalInsurance_CP).change(function() {
            $(refs.optionalInsuranceYesNoLable).text(translator.translateKey(activationItems.getCheckBoxValueFriendlyName($(refs.optionalInsurance_CP).is(':checked'))));
            updateOptionalInsuranceVisibility(true);
        });
		
		$(refs.optionalInsurance_IW).change(function() {
            $(refs.optionalInsurance_IW_Lable).text(translator.translateKey(activationItems.getCheckBoxValueFriendlyName($(refs.optionalInsurance_IW).is(':checked'))));
            updateOptionalInsuranceVisibility(true);
        });
		
		$(refs.optionalInsurance_PA).change(function() {
            $(refs.optionalInsurance_PA_Lable).text(translator.translateKey(activationItems.getCheckBoxValueFriendlyName($(refs.optionalInsurance_PA).is(':checked'))));
            updateOptionalInsuranceVisibility(true);
        });
		
		$(refs.optionalInsurance_NA).change(function() {
			updateOptionalInsuranceVisibility(true);
        });
		
		$(refs.title).change(function() {
			model.set('title', $(refs.title).val());
		});

		if (!argPopup) {
			bindTranslationCallbacks();
			toggle10XImege();
			toggleHeader();
		}
	}
    //---------------------------------------------------------------------------------------
    function bindTranslationCallbacks() {
		$('#choseProduct').bind('translationStart', function() {
			syncAllUserData();
		});

		$('#choseProduct').bind('translationStop', function() {
			unbindEvents();
			initUI(false);
			validationDecorate(_validationResult, true);
			var ieHelper = new BRB.IeUIHelper(); 
			toggle10XImege();
			toggleHeader();
			if(ieHelper.needToAddValueToInput()){
				addValuesToInputs(ieHelper);
			} else {
				addValuesToInputs();
			} 
		});
		
    }
    //---------------------------------------------------------------------------------------
	function unbindEvents() {
		$('#AdditionalInformation_NextButton').unbind();
		$('#AdditionalInformation_PrevButton').unbind();
		$(refs.continueButton).unbind();
		$(refs.backButton).unbind();
		$(refs.cancelButton).unbind();
		$(refs.suplementaryYesNo).unbind();
		$(refs.sameAddressRadio).unbind();
		$(refs.continueButtonContainer).unbind();
		$(refs.backButtonContainer).unbind();
		$(refs.cancelButtonContainer).unbind();
		$(refs.optionalInsurance_CP).unbind();
		$(refs.optionalInsurance_IW).unbind();
		$(refs.optionalInsurance_PA).unbind();
		$(refs.optionalInsurance_NA).unbind();
		$('#choseProduct').unbind();
	}
	//---------------------------------------------------------------------------------------
    function bindAutoTabbing(){
		$(refs.primaryPhone_1).keyup(function(event){
			if ($(this).val().length == 3) {
				if (event.keyCode != 9) {
					$(refs.primaryPhone_2).focus();
				}
			} 
		});
		
		$(refs.primaryPhone_2).keyup(function(event){
			if ($(this).val().length == 3) {
				if (event.keyCode != 9) {
					$(refs.primaryPhone_3).focus();
				}
			} 
		});
	
		$(refs.postalCode_1).keyup(function(event){
			if ($(this).val().length == 3) {
				if (event.keyCode != 9) {
					$(refs.postalCode_2).focus();
				}
			} 
		});
    }
    //---------------------------------------------------------------------------------------    
    function updateOptionalInsuranceVisibility(isURLOpenFlag)
    {
    	showHideOptionalInsuranceIW(isURLOpenFlag);
        showHideOptionalInsuranceCP(isURLOpenFlag);
        showHideOptionalInsurancePA(isURLOpenFlag);
        showHideInsuranceFieldIndicatorBlock();
    }
    //---------------------------------------------------------------------------------------
    function showHideInsuranceFieldIndicatorBlock() {
        if ($(refs.optionalInsurance_NA).is(':checked') || 
        		(!$(refs.optionalInsurance_NA).is(':checked') && 
        		 !$(refs.optionalInsurance_IW).is(':checked') && 
        		 !$(refs.optionalInsurance_CP).is(':checked') && 
        		 !$(refs.optionalInsurance_PA).is(':checked'))) {
        	$(refs.insurance_fieldIndicatorBlock).hide();
        } else {
        	$(refs.insurance_fieldIndicatorBlock).show();
        }    	
    }
    //---------------------------------------------------------------------------------------
    function onContinueButtonPressed(){
        if(argPopup){
        	restoreScreenBelow();
        }else{
        	showNextScreen();	
        }
    }    
    //---------------------------------------------------------------------------------------
    function onBackButtonPressed(){
        if(!argPopup){
        	showPrevScreen();
        }
    }    
    //---------------------------------------------------------------------------------------
    function setUIElementsMasks() {
        $(refs.primaryPhone_1).numeric();
		$(refs.primaryPhone_2).numeric();
		$(refs.primaryPhone_3).numeric();
        $(refs.dateOfBirth_Year).autoNumeric('init', {aSign:'',vMin:'0', vMax:varCurrentYear, mDec:'0', wEmpty: '', aSep:''});
        $(refs.initial).alpha({nocaps : false});
    }
	//---------------------------------------------------------------------------------------
	function bindNavigationButtons(){
        $('#AdditionalInformation_NextButton').on("mouseup", function() {
            showNextScreen();
        });
        $('#AdditionalInformation_PrevButton').on("mouseup", function() {
        	showPrevScreen();
        });        		
	}
	//---------------------------------------------------------------------------------------
	function fillControlsWithData()
	{
		var provincesList = new BRB.ProvincesList(translator);
		provincesList.fillSelectControl(refs.province);
		
		var titlesList = new BRB.TitlesList(translator);
		titlesList.fillSelectControl(refs.title);
		
		if (!translator.isCurrentLanguageEnglish()) {
			if (model.get('title') == 'MISS') {
				model.set('title', 'MS');
			}						
			$("#additionalInformation_Title_TextField").focus();
			$("#additionalInformation_Title_TextField [value='MISS']").remove();
		}
		
		var monthsList = new BRB.MonthsList(translator);
		monthsList.fillSelectControl(refs.dateOfBirth_Month);
		monthsList.fillSelectControl(refs.addressSince_Month);
		monthsList.fillSelectControl(refs.employerSince_Month);
		
		var employmentTypeList = new BRB.EmploymentTypeList(translator);
		employmentTypeList.fillSelectControl(refs.employmentType);
		
		var residentialStatusesList = new BRB.ResidentialStatusesList(translator);
		residentialStatusesList.fillSelectControl(refs.residentialStatus);
		
		var jobTitlesList = new BRB.JobTitlesList(translator);
		jobTitlesList.fillSelectControl(refs.jobTitle);
		
		var relationshipList = new BRB.RelationshipList(translator);
		relationshipList.fillSelectControl(refs.relationship);
		
		fillDaysControl(refs.dateOfBirth_Day);
		
	}
	//---------------------------------------------------------------------------------------
	function fillDaysControl(controlId)
	{
		var sMethod = 'fillDaysControl() ';
        BRB.Log(logPrefix + sMethod);
        
        if($(controlId+' option').length>1){
            BRB.Log(logPrefix + sMethod +" select control is already populated.");
            return;
        }
        
        var controlRef=$(controlId);
        controlRef.empty();
        
        var optTemplFirst = '<option value="null">' + translator.translateKey('daySelect_Text') + '</option>';            
        controlRef.append(optTemplFirst);
        
        for(var i=1; i<32; i++)
        {
        	var optTempl = '<option value="' +i+ '">'+i+'</option>';            
            controlRef.append(optTempl);
        }
	}
	//---------------------------------------------------------------------------------------
	function showHideSuplementaryCard(){
		var sMethod = 'showHideSuplementaryCard() ';
        BRB.Log(logPrefix + sMethod);
                
		if (! $(refs.suplementaryYesNo).is(':checked')) {
			$(refs.suplementaryCardSection).hide();
			$(refs.suplementaryFieldIndicatorBlock).hide();
		} else {
			$(refs.suplementaryCardSection).show();
			$(refs.suplementaryFieldIndicatorBlock).show();
		}
	}
	//---------------------------------------------------------------------------------------
	function showHideAddressContainer(){
		var sMethod = 'showHideAddressContainer() ';
        BRB.Log(logPrefix + sMethod);
        
        var value =  $(refs.sameAddressRadio + ":checked").val()==="true";
        
        if (value === null || value === true) {
        	// US4500
			$(refs.streetNumber).val("");
			$(refs.streetName).val("");
			$(refs.suiteUnit).val("");
			$(refs.city).val("");
			$(refs.province).val("");
			$(refs.postalCode_1).val("");
			$(refs.postalCode_2).val("");
			
			$(refs.addressLine1).hide();
			$(refs.addressLine2).hide();
		}
		else{
			$(refs.addressLine1).show();
			$(refs.addressLine2).show();
		}
	}
	// ---------------------------------------------------------------------------------------
	function showHideOptionalInsuranceCP(isURLOpenFlag){
        var sMethod = 'showHideOptionalInsuranceCP() ';
        BRB.Log(logPrefix + sMethod + ":: isURLOpenFlag :: " + isURLOpenFlag);    
        
        if (!$(refs.optionalInsurance_CP).is(':checked')) {
            $(refs.optionalInsurance_CP_Area).hide();
        	$(refs.optionalInsurance_CP_Agreement).attr('checked', false);
        }
        else{
            $(refs.optionalInsurance_CP_Area).show();
            if(isURLOpenFlag) {
            	if(translator.getCurrentLanguage() == 'en') {
                	var win = window.open(url.OptionalInsuranceCP_en, '_blank');
                    win.focus();
                }
                else {
                	var win = window.open(url.OptionalInsuranceCP_fr, '_blank');
                    win.focus();
                }
            }
        }
    }
    //---------------------------------------------------------------------------------------
    function showHideOptionalInsuranceIW(isURLOpenFlag){
        var sMethod = 'showHideOptionalInsuranceIW() ';
        BRB.Log(logPrefix + sMethod + ":: isURLOpenFlag :: " + isURLOpenFlag);
        
        if (!$(refs.optionalInsurance_IW).is(':checked')) {
            $(refs.optionalInsurance_IW_Area).hide();
            $(refs.optionalInsurance_IW_Agreement).attr('checked', false);
        }
        else{
            $(refs.optionalInsurance_IW_Area).show();
            if(isURLOpenFlag) {
            	if(translator.getCurrentLanguage() == 'en') {
                	var win = window.open(url.OptionalInsuranceIW_en, '_blank');
                    win.focus();
                }
                else {
                	var win = window.open(url.OptionalInsuranceIW_fr, '_blank');
                    win.focus();
                }
            }
        }
    }
	//---------------------------------------------------------------------------------------
    function showHideOptionalInsurancePA(isURLOpenFlag){
        var sMethod = 'showHideOptionalInsurancePA() ';
        BRB.Log(logPrefix + sMethod + ":: isURLOpenFlag :: " + isURLOpenFlag);
        
        if (!$(refs.optionalInsurance_PA).is(':checked')) {
            $(refs.optionalInsurance_PA_Area).hide();
            $(refs.optionalInsurance_PA_Agreement).attr('checked', false);
        }
        else{
            $(refs.optionalInsurance_PA_Area).show();
            if(isURLOpenFlag) {
            	if(translator.getCurrentLanguage() == 'en') {
                	var win = window.open(url.OptionalInsurancePA_en, '_blank');
                    win.focus();
                }
                else {
                	var win = window.open(url.OptionalInsurancePA_fr, '_blank');
                    win.focus();
                }
            }
        }
    }
	//---------------------------------------------------------------------------------------
	function showPrevScreen(){
	    syncUserData(); 
	    BRB.AppConfig.TrackingScreenID = 3;
		flow.back();
	}	
	//---------------------------------------------------------------------------------------
	function showNextScreen(){
        var sMethod = 'showNextScreen() ';
        BRB.Log(logPrefix + sMethod);
        
        syncUserData();
        if(!validate()){
        	return;
        }
 
		flow.next();
	}
	//---------------------------------------------------------------------------------------
	function validate(skeepFocus){
		_validationResult = [];
	    if (app.validationsOn) {
	       app.validationDecorator.clearErrArrtibute();
	       var rez = validateInsuranceArea();
	       rez = rez.concat(validateSuplementaryCardArea());
	       _validationResult = rez;
	       return validationDecorate(rez, skeepFocus);
	    }
	    return true;
	}
	//---------------------------------------------------------------------------------------
	function validationDecorate(validationResult, skeepFocus){
		if (validationResult.length > 0) {
			app.validationDecorator.applyErrAttribute(validationResult, skeepFocus ? true: false, translator);
			$(refs.makeCorrectionSection).show();
			return false; 
        }
		return true;
	}
	//---------------------------------------------------------------------------------------
	function focusFirstElement()
	{
		if(argPopup)
        {
        	if(blockName)
    		{
    			if(blockName === refs.blockSuplementaryCardArea)
    			{	
   					$(refs.suplementaryYesNo).focus();
       				$(refs.suplementaryYesNo).select();
    			}
    			else if(blockName === refs.blockInsuranceArea)
    			{
    				$(refs.optionalInsurance_CP).focus();
    				$(refs.optionalInsurance_CP).select();
    			}
    		}
        }
		else
		{
			$(refs.suplementaryYesNo).focus();
			$(refs.suplementaryYesNo).select();
		}
		
	}
	//---------------------------------------------------------------------------------------
	function restoreCreditCardData(){
	    var sMethod = "restoreCreditCardData()";
        BRB.Log(logPrefix + sMethod);
        $(refs.title).val(app.ie9SelectHelper.getRightSelectValue(model.get('title')));
		//$(refs.title).val(model.get('title'));
		$(refs.firstName).val(model.get('firstName'));
		$(refs.initial).val( model.get('initial'));
		$(refs.lastName).val(model.get('lastName'));
		$(refs.dateOfBirth_Month).val( model.get('dateOfBirth_Month'));
		$(refs.dateOfBirth_Day).val( model.get('dateOfBirth_Day'));
		$(refs.dateOfBirth_Year).val( model.get('dateOfBirth_Year'));
		$(refs.birthDate).val( model.get('birthDate'));		
		$(refs.primaryPhone).val(model.get('primaryPhone'));
		if (model.get('primaryPhone')){
			$(refs.primaryPhone_1).val(model.get('primaryPhone').slice(0, 3));
			$(refs.primaryPhone_2).val(model.get('primaryPhone').slice(3, 6));
			$(refs.primaryPhone_3).val(model.get('primaryPhone').slice(6, 10));
		}
		 $(refs.province).val(app.ie9SelectHelper.getRightSelectValue(model.get('province')));
		//$(refs.province).val(model.get('province'));
		$(refs.postalCode).val( model.get('postalCode'));
		if (model.get('postalCode')){
			$(refs.postalCode_1).val(model.get('postalCode').slice(0, 3));
			$(refs.postalCode_2).val(model.get('postalCode').slice(3, 6));
		}
		
		$(refs.sameAddressArea).val( model.get('sameAddressArea') == 'Y' ? true : false);
		$(refs.streetNumber).val(model.get('streetNumber'));
		$(refs.streetName).val(model.get('streetName'));
		$(refs.suiteUnit).val( model.get('suiteUnit'));
		$(refs.city).val(model.get('city'));
		$(refs.relationship).val( model.get('relationship'));
		//US4219 if age >76 then hide PA and CP
		 var personalDataModel = activationItems.getModel('personalInformation');
	        if(personalDataModel.get('age') > 76) {
	        	$(refs.optionalInsurance).hide();//Protection Advantage hiding
	        	$(refs.optionalInsurance_PA).hide();
	        	$(refs.optionalInsurance_row_one).hide();
	        	$(refs.optionalInsurance_row_two).hide();
	        	$(refs.optionalInsurance_row_three).hide();
	        	$(refs.optionalInsurance_row_four).hide();
	        	$(refs.optionalInsurance_row_five).hide();
	        	$(refs.optionalInsurance_row_six).hide();
	            $(refs.optionalInsurance_PA).attr('checked', false);
	            $(refs.optionalInsurance_PA_Title).hide();
	            $(refs.optionalInsurance_PA_Table).hide();
	            $(refs.optionalInsurance_PA_Area).hide();
	            $(refs.optionalInsurance_PA_Agreement).attr('checked', false);
	            $(refs.optionalInsurance_CP).hide();
	            $(refs.optionalInsurance_CP).attr('checked', false);
	            $(refs.optionalInsurance_CP_Table).hide();
	            $(refs.optionalInsurance_CP_Title).hide();
	            $(refs.optionalInsurance_CP_Area).hide();
	            $(refs.optionalInsurance_CP_Agreement).attr('checked', false);
	        
	        }else{
	        	$(refs.optionalInsurance).show();
	        	$(refs.optionalInsurance_PA).show();
	        	$(refs.optionalInsurance_row_one).show();
	        	$(refs.optionalInsurance_row_two).show();
	        	$(refs.optionalInsurance_row_three).show();
	        	$(refs.optionalInsurance_row_four).show();
	        	$(refs.optionalInsurance_row_five).show();
	        	$(refs.optionalInsurance_row_six).show();
	            $(refs.optionalInsurance_PA_Title).show();
	            $(refs.optionalInsurance_PA_Table).show();
	            $(refs.optionalInsurance_PA_Area).show();
	            $(refs.optionalInsurance_CP).show();
	            $(refs.optionalInsurance_CP_Table).show();
	            $(refs.optionalInsurance_CP_Title).show();
	            $(refs.optionalInsurance_CP_Area).show();
	       
	        	$(refs.optionalInsurance_CP).val(model.get('optionalInsurance_CP'));
	        	$(refs.optionalInsurance_PA).val(model.get('optionalInsurance_PA'));
	        	$(refs.optionalInsurance_IW).val(model.get('optionalInsurance_IW'));
	    		$(refs.optionalInsurance_NA).val(model.get('optionalInsurance_NA'));
	        }
		$(refs.suplementaryYesNo).attr('checked', model.get('suplementaryYesNo'));
		if (model.get('sameAddressArea') == 'Y'){
			$(refs.sameAddressYes).attr('checked', true);
		} else {
			$(refs.sameAddressNo).attr('checked', true);
		}
		
		$(refs.optionalInsurance_CP).prop('checked', model.get('optionalInsurance_CP'));
		$(refs.optionalInsurance_CP_Agreement).prop('checked', model.get('optionalInsurance_CP_Table'));
		
		$(refs.optionalInsurance_IW).prop('checked', model.get('optionalInsurance_IW'));
		$(refs.optionalInsurance_IW_Agreement).prop('checked', model.get('optionalInsurance_IW_Table'));
		
		$(refs.optionalInsurance_PA).prop('checked', model.get('optionalInsurance_PA'));
		$(refs.optionalInsurance_PA_Agreement).prop('checked', model.get('optionalInsurance_PA_Table'));
		
		$(refs.optionalInsurance_NA).prop('checked', model.get('optionalInsurance_NA'));
	}
	//---------------------------------------------------------------------------------------
	function validateSuplementaryCardArea(currentModel)
	{
        // Validate first part of the page 
	    if(currentModel == null || currentModel === undefined)
        {
        	currentModel = model;
        }
        var rez1 = [];            
        var rez2 = [];
        if (currentModel.get('suplementaryYesNo')) {
            rez1 = currentModel.validate(1);
            
//            if (!currentModel.get('title')) {
//            	rez1.push({name: 'title', err: 'personalInformation_TitleError', uiid: refs.title});
//            }
            
            if(currentModel.get('birthDate') != null)
            {
	            if(!currentModel.validateForFutureDate(currentModel.get('birthDate')))
	            {
	                rez1.push({name: 'birthdate', err: 'personalInformation_FutureDateError', uiid: refs.dateOfBirth_Month});
	                rez1.push({name: 'birthdate', err: 'personalInformation_FutureDateError', uiid: refs.dateOfBirth_Day});
	                rez1.push({name: 'birthdate', err: 'personalInformation_FutureDateError', uiid: refs.dateOfBirth_Year});
	            }
            }
            
            // Validate additional part of the page                                       
            if (currentModel.get('sameAddressArea') == 'N') {
                rez2 = currentModel.validate(2);    
            }
        }   
        
        var rez = rez1.concat(rez2);        
        return rez;

	}
	function validateInsuranceArea(currentModel)
	{
		if(currentModel == null || currentModel === undefined)
		{
			currentModel = model;
	    }
		
        var rez3 = [];                       
        if (currentModel.get('optionalInsurance_CP')) {
            rez3 = currentModel.validate(3);    
        }
        
        var rez4 = [];                       
        if (currentModel.get('optionalInsurance_IW')) {
            rez4 = currentModel.validate(4);    
        }
        
        var rez5 = [];                       
        if (currentModel.get('optionalInsurance_PA')) {
            rez5 = currentModel.validate(5);    
        } 
        
        var rez6 = [];		
		if (!currentModel.get('optionalInsurance_CheckArea')){
			rez6 = currentModel.validate(6);
		}
		
        var rez = rez3.concat(rez4, rez5);
        
        return rez.concat(rez6);
	}
	
	
	function toggle10XImege() {
		if (app.ieUIHelper.isIe8Browser()){
			app.ieUIHelper.toggleNSImege(translator);
		}else{
			translator.getCurrentLanguage() == 'en' ? $('#AdditionalInformationScreen a#topBanner10XImage').addClass(
			'topBanner10XImageBlock').removeClass(
			'topBanner10XImageBlock_fr') : $('#AdditionalInformationScreen a#topBanner10XImage')
			.addClass('topBanner10XImageBlock_fr').removeClass(
					'topBanner10XImageBlock');  
		}
	}
	
	
	//---------------------------------------------------------------------------------------
	function createAndIsertToDomInputsWithPlaceHolder(){
		var personalInformation_YearID= createInputWithPlaceHolder('additionalInformation_DateOfBirth_Year','additionalInformation_DateOfBirth_Year',refs.additionalBirthDateID);
		inputPlaceholder(personalInformation_YearID);
	}
	//---------------------------------------------------------------------------------------
	function createInputWithPlaceHolder(data_translation_key,idValue,idElementToappendAffter){
		var placeholderValue = translator.translateKey(data_translation_key);
		var input = "<input class='fieldValuesTextField dateOfBirthYearField' id='" + idValue + "' placeholder='" + placeholderValue +"' type='text' maxlength='4'/>";
		$(idElementToappendAffter).append(input);
		return document.getElementById(idValue);
	}
	//---------------------------------------------------------------------------------------
    function addValuesToInputs(ie8Helper){
    	var translatedText = translator.translateKey('personalInformation_Year');
    	if(ie8Helper){
    		var value = $('#additionalInformation_DateOfBirth_Year').val();
    		// need to restore state
    		if( value == "" || value == null || value === 'Year' || value === 'Année'){
    			$('#additionalInformation_DateOfBirth_Year').val(translatedText);
    		}
    		return;
    	}
		
		$('#additionalInformation_DateOfBirth_Year').attr('placeholder',translatedText);
    }
  //---------------------------------------------------------------------------------------
    function toggleHeader(){
		if(translator.getCurrentLanguage() == 'en'){
			$(refs.optionalProduct_horizontal_Line_1).removeClass('Width_TD_15');
			$(refs.optionalProduct_horizontal_Line_1).addClass('Width_TD_18');
			$(refs.optionalProduct_horizontal_Line_2).removeClass('Width_TD_15');
			$(refs.optionalProduct_horizontal_Line_2).addClass('Width_TD_18');
		}else {
			$(refs.optionalProduct_horizontal_Line_1).removeClass('Width_TD_18');
			$(refs.optionalProduct_horizontal_Line_1).addClass('Width_TD_15');
			$(refs.optionalProduct_horizontal_Line_2).removeClass('Width_TD_18');
			$(refs.optionalProduct_horizontal_Line_2).addClass('Width_TD_15');
		}
	}
 
};