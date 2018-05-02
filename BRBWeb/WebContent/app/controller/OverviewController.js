ensureNamespaceExists();

BRB.OverviewController = function(activationItems, argTranslator, argMessageDialog, argAdditionalInfo) {

	var logPrefix = '[BRB.OverviewController]::';
	var $screenContainer = $("#OverviewScreen");

	var translator = null;
	var messageDialog = null;
	var connectivityController = null;
	this.initiateAppHelper = null;
	
	this.show = show;
	this.init = init;
	this.hide = hide;
	
	var flow = null;
	var isNSPageDisplayed = false;
	
	//---------------------------------------------------------------------------------------
	this.syncUserData = syncUserData; 
    var refs = {
    		startApplication_Button					:	'#startApplication_Button',
    		
    		overview_continueButton      		   	:   '#overview_continueButton',
    		startApplicationButtonTriangle			:	'#startApplicationButtonTriangle',
    		
    		continueButton          				:   '#startApplication_Button',
    		provinces               				:   '#overview_Province_TextField',
    		promoCode               				:   '#overview_PromoCode_TextField',
    		
    		overviewNS_continueButton				:   '#overviewNS_ContinueButton',
  			// US4580
    		promoCodeHidden							:	'#promoCodeHidden',
    		chooseCard_CheckArea                    :   '#chooseCardTable',
    		omxCard                                 :   '#triangleMastercard',
    		omzCard                                 :   '#triangleWorldEliteMastercard'
    			
    };
    
    var model = new BRB.BaseModel({
        name: 'overview',
        refs: refs, 
        data:[              
              {name: 'promoCode',  value: null, validation: { type: 'format', message: 'overview_PromoCodeError', matcher: /^[a-z\u00C0-\u017F0-9,_'\-.~@\[\]\}\{\)\( ]{4,5}$/i, canBeEmpty: true}},
              {name: 'pcid',  	   value: null, validation: null },
              {name: 'provinces',  value: null, validation: { type: 'presence', message: 'overview_ProvinceError' }},
              {name: 'cardType',   value: null, validation: null },
              {name: 'requestingSystem', value: null, validation: null },
              { notField: true, 
            	name: 'chooseCard_CheckArea',    
            	value: null, 
            	validation: {
            		type: 'termsAndConditions',     
            		message: 'additionalInformation_NoRadioSelecedError', 
            		canBeEmpty : (app.getIsMOARequest()) ? true : false,
            		group:[6]}}
              
       ]
    });
    
    var profileInfoModel = app.customerTransactionModel;
  //---------------------------------------------------------------------------------------
	function isCardSelected() {
		return  $(refs.omxCard).is(':checked') || 
		$(refs.omzCard).is(':checked');
	}
    
    //---------------------------------------------------------------------------------------
	function init( argFlow ) {		
		var sMethod = 'init() ';
        BRB.Log(logPrefix + sMethod);
        
        this.initiateAppHelper = new BRB.InitiateAppHelper();
        isMOA =  app.getIsMOARequest();
        if(isMOA){
        	cardType =  this.initiateAppHelper.getCardTypeParam();
            BRB.Log(logPrefix + "BRB OIC cardType ::" +this.initiateAppHelper.getCardTypeParam());
            if(cardType !== null || cardType!== ""){
            	if(cardType === 'OMX' || cardType === 'OMZ' || cardType === 'omx' || cardType === 'omz'){
            		model.set('cardType', cardType.toUpperCase());
        	    }else{
        	    	model.set('cardType', 'OMX');
        	    }
            }
        }
        
        createView();
        
        BRB.Log(logPrefix + this.initiateAppHelper.getPCIDParam());
        pcid = this.initiateAppHelper.getPCIDParam();
        
        BRB.AppConfig.TrackingScreenID = 1;
        flow = argFlow;        
        translator = argTranslator;         //(AA)Dependency Injection Principle: Allows for proper unit testing
        messageDialog = argMessageDialog;   //(AA)Dependency Injection Principle: Allows for proper unit testing
		
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
        
       
		
		//createView();
		
		// US4580
		hidePromoCodeField();
		
		model.set('requestingSystem', profileInfoModel.getRequestingSystem());
		BRB.Log(logPrefix + sMethod + " requestingSystem : " + model.get('requestingSystem'));
		
		// Start session timeout service
		app.sessionTimeoutActionService.start();
		toggle10XImege();
		//US4541
		toggle4PercentImage();
	}    
	//---------------------------------------------------------------------------------------
	// US4580
	function hidePromoCodeField() {
		$(refs.promoCodeHidden).hide();
	} 
	//---------------------------------------------------------------------------------------
    function fillControlsWithData()
    {
        var provincesList = new BRB.ProvincesList(translator);
        provincesList.fillSelectControl(refs.provinces);
    }
	//---------------------------------------------------------------------------------------
    function syncUserData(){
        var sMethod = 'syncUserData() ';
        BRB.Log(logPrefix + sMethod);
        
        model.set('provinces', $(refs.provinces).val());        
        if(app.getIsMOARequest()) {
        	if($(refs.promoCode).val() == null || $(refs.promoCode).val() == "") {
        		if(pcid != 0) {
        			model.set('pcid', pcid.substring(0,5).toUpperCase());
        		}
        	} else {
        		model.set('promoCode', $(refs.promoCode).val().toUpperCase());
        	}
        } else {
        	model.set('promoCode', $(refs.promoCode).val().toUpperCase());
		}
        
        if(app.getIsMOARequest()){
        	BRB.Log(logPrefix + sMethod +' cardType : ' + cardType);
        	if(cardType !== " " || cardType !== null){
        		BRB.Log(logPrefix + sMethod +' cardType : ' + cardType);
        		//model.set('cardType', cardType);
        	}
        }else{
        	if($(refs.omxCard).is(':checked')){
            	model.set('cardType', 'OMX');
            }else if($(refs.omzCard).is(':checked')){
            	model.set('cardType', 'OMZ');
            }
        	model.set('chooseCard_CheckArea',  isCardSelected());
        }
        	    
        BRB.Log(logPrefix + sMethod +' cardType : ' + model.get('cardType'));
        BRB.Log(logPrefix + sMethod +' model data: ' + model.toString());
        
    }
	//---------------------------------------------------------------------------------------
	function restoreCreditCardData(){
	    var sMethod = "restoreCreditCardData()";
        BRB.Log(logPrefix + sMethod);
        
        // Set province
        populateProvince();       
	}
	//---------------------------------------------------------------------------------------
	function restoreDataAfterTranslation(){
	    var sMethod = "restoreDataAfterTranslation()";
        BRB.Log(logPrefix + sMethod);
        var prov = model.get('provinces');
        prov = (prov == null) ? "null" : prov;
        $(refs.provinces).val(prov);
		$(refs.provinces).trigger('change');    
	}
	//---------------------------------------------------------------------------------------
	function populateProvince () {
		var sMethod = "populateProvince()";
		BRB.Log(logPrefix + sMethod);

		try {
			if (_.isEmpty(app.customerTransactionModel.getProvince())) {
				return;
			}

			// Predefine province
			$(refs.provinces).val(app.customerTransactionModel.getProvince());
			$(refs.provinces).trigger('change');
		} catch (err) {
			BRB.Log(logPrefix + sMethod + '::ERROR::' + err);
		}
	}
	// ---------------------------------------------------------------------------------------
	function show(){
		$screenContainer.show();
		translator.run("OverviewScreen");
		fillControlsWithData();
		bindEvents();
		restoreCreditCardData();

		// Work around IE8 page-proofs issue
		updatePageStylesheet();
	}
	//---------------------------------------------------------------------------------------
	function updatePageStylesheet() {
		// Work around IE8 round corners issue
		var ieUIHelper = new BRB.IeUIHelper();		
		ieUIHelper.roundLeftCornersForTag([$(refs.startApplication_Button), $(".continueButton")]);	
	}
	//---------------------------------------------------------------------------------------
	function hide(){
		$screenContainer.hide();
	}
	//---------------------------------------------------------------------------------------
	function createView() {
		$screenContainer.empty();
		assembleNavigationBarAtTop();
		//$screenContainer.addClass("breadcrumbPadding"); this style is commented out in scss
		assemblePageHTML($screenContainer, "#BRBOverview-template");
		assemblePageHTML($screenContainer, "#BRBOverviewNS-template");
		insertAfterElement($("#OverviewScreen #BreadcrumbTrailArea1"), "#chooseProduct-template");
		$("#BreadcrumbTrailArea2").hide();
		$("#overviewNSPageContents").hide();
		$("#overviewROCPageContents").hide();
		$("#overviewROCNSFooterContents").hide();
		
	}
	//---------------------------------------------------------------------------------------
	function assembleNavigationBarAtTop() {
        $("#pageHeader-template").template("pageHeader");
        $.tmpl("pageHeader", {
        	"switchLanguageButtonId" : "Overview_LanguageButton"/*,
            "previousButtonId" : "Overview_PrevButton",*/
        }).appendTo("#OverviewScreen");
    }
	//---------------------------------------------------------------------------------------
	function assemblePageHTML($element, templateName) {
		//var html = $(templateName).tmpl(); 
		//US4541
	    isMOA =  app.getIsMOARequest();
		BRB.Log("isMOA :: " + isMOA);
		
		var html = $(templateName).tmpl({'isMOA':isMOA, 'screenIsPopup':false, 'cardType' : model.get('cardType')}); 
		$element.append(html);
	}
	//---------------------------------------------------------------------------------------
	function insertAfterElement($element, templateName) {
		//US4541
		var isMOA =  app.getIsMOARequest();
		BRB.Log("isMOA :: " + isMOA);
		var html = $(templateName).tmpl({activationItems:activationItems, 'isMOA':isMOA,'screenIsPopup':false, 'cardType' : model.get('cardType')}).appendTo($element); 
		$element.after(html);
	}
	//---------------------------------------------------------------------------------------
    function bindEvents(){
	    var sMethod = 'bindEvents() ';
        BRB.Log(logPrefix + sMethod);
		bindNavigationButtons();
		
		$(refs.provinces).change(function(event){
			
	        BRB.Log(refs.provinces+'::change');
	        
	        unbindContinueButtonEvents();
            
	        if ($(this).val() != "null") {
	            
	            if (!$(refs.continueButton).hasClass('continueButton')) { $(refs.continueButton).addClass('continueButton'); }
	            if ($(refs.continueButton).hasClass('continueButtonInactive')) { $(refs.continueButton).removeClass('continueButtonInactive'); }
	            
	            if ($(refs.startApplicationButtonTriangle).hasClass('continueButtonGrayTriangle')) { $(refs.startApplicationButtonTriangle).removeClass('continueButtonGrayTriangle'); }
	            if (!$(refs.startApplicationButtonTriangle).hasClass('continueButtonTriangle')) { $(refs.startApplicationButtonTriangle).addClass('continueButtonTriangle'); }
	            
	            bindContinueButtonEvents();
	        }
	        else {
	        	unbindContinueButtonEvents();
	            
	            if (!$(refs.continueButton).hasClass('continueButtonInactive')) { $(refs.continueButton).addClass('continueButtonInactive'); }
	            if ($(refs.continueButton).hasClass('continueButton')) { $(refs.continueButton).removeClass('continueButton'); }
	            
	            if (!$(refs.startApplicationButtonTriangle).hasClass('continueButtonGrayTriangle')) { $(refs.startApplicationButtonTriangle).addClass('continueButtonGrayTriangle'); }
	            if ($(refs.startApplicationButtonTriangle).hasClass('continueButtonTriangle')) { $(refs.startApplicationButtonTriangle).removeClass('continueButtonTriangle'); }
	        }
	    });
		
        $(refs.continueButton).keydown(function(e) {
			if (e.keyCode == 13) {
				showNextScreen();
			}
		});		
		
		$(refs.startApplication_Button).on("mousedown mouseup", function(e) {
		    $(refs.continueButton).toggleClass( "active", e.type === "mousedown" );
		    $(refs.startApplicationButtonTriangle).toggleClass( "active", e.type === "mousedown" );			
		});
		
		$(refs.startApplicationButtonTriangle).on("mousedown mouseup", function(e) {
		    $(refs.continueButton).toggleClass( "active", e.type === "mousedown" );
		    $(refs.startApplicationButtonTriangle).toggleClass( "active", e.type === "mousedown" );						
		});
		
		/* 2016-02-11 chrch: Change class name due to responsive (US3964) */
		$(".ctfsTooltip").on('click mouseout', function(e){
			if(e.type === 'click'){
				$(this).children("span").addClass("hint");
			}else if (e.type === 'mouseout'){
				$(this).children("span").removeClass("hint");
			}
		});
		
		$('#choseProduct').bind('translationStart', function(){
			syncUserData();
		});
		
		$('#choseProduct').bind('translationStop', function(){
			unbindEvents();
			fillControlsWithData();
			bindEvents();
			bindContinueButtonEvents();
			restoreDataAfterTranslation();
			toggleImege();
			toggle10XImege();
			//US4541
			toggle4PercentImage();
		});
	}    
    //---------------------------------------------------------------------------------------
    function bindContinueButtonEvents(){
        $(refs.continueButton).bind("mouseup", onContinueButtonClick);
        $(refs.startApplicationButtonTriangle).bind("mouseup", onContinueButtonClick);
        $(refs.overviewNS_continueButton).bind("mouseup", onContinueButtonClick);
    }    
    //---------------------------------------------------------------------------------------
    function unbindContinueButtonEvents(){
        $(refs.continueButton).unbind("mouseup");
        $(refs.startApplicationButtonTriangle).unbind("mouseup");
        $(refs.overviewNS_continueButton).unbind("mouseup");
    }
    //---------------------------------------------------------------------------------------
    function unbindEvents(){
    	$(refs.provinces).unbind();
        $(refs.continueButton).unbind();	
		$(refs.startApplication_Button).unbind();
		$(refs.startApplicationButtonTriangle).unbind();
		$(refs.overviewNS_continueButton).unbind();
        $(refs.continueButton).unbind();
        $(refs.startApplicationButtonTriangle).unbind();        
        $(refs.overviewNS_continueButton).unbind();
        $(".tooltip").unbind();
        $('#choseProduct').unbind();
    }
	//---------------------------------------------------------------------------------------
	function bindNavigationButtons(){
        $('#Overview_PrevButton').click(function() {
        	showPrevScreen();
        });        		
	}
	//---------------------------------------------------------------------------------------
	function onContinueButtonClick () {
		var sMethod = '::onContinueButtonClick() ';
	    BRB.Log(logPrefix + sMethod);  
	    
        showNextScreen();
	}
	//---------------------------------------------------------------------------------------
	function showNextScreen(){	
		var sMethod = 'showNextScreen() ';
        BRB.Log(logPrefix + sMethod);
	           
        syncUserData();
        
	    if (app.validationsOn) {
            app.validationDecorator.clearErrArrtibute();
    		
    		if(app.getIsMOARequest()){
    			var rez1 = [];		
        		if (!model.get('chooseCard_CheckArea')){
        			rez1 = model.validate(6);
        		}
    			var rez2 = model.validate();
        	    rez = rez2.concat(rez1);
    		}else{
    		    rez = model.validate();
    		}
            
            
            if (rez.length > 0) {
                var errStrArr =[];
                $.each(rez, function(index, item) {
                    errStrArr.push(translator.translateKey(item.err));
                });
                
                app.validationDecorator.applyErrAttribute(rez, false, translator);                
                                
                return; 
            }   
	    }
	    
	    if(app.getIsMOARequest()) {
        	if($(refs.promoCode).val() == null || $(refs.promoCode).val() == "") {
        		if(pcid != 0) {
        			model.set('promoCode', model.get('pcid'));
        			model.set('pcid', null);
        			BRB.Log(logPrefix + sMethod + " PCID : " + model.get('pcid') + " Promocode : " + model.get('promoCode'));
        		}
        	}
        }
	    
	   //US3084 if (($(refs.provinces).val() === 'NS') && !isNSPageDisplayed) {
	   //US3083 if (!isNSPageDisplayed) {   
	   // if (($(refs.provinces).val() === 'NS') && !isNSPageDisplayed) {
	   //	$("#choseProduct").hide();
		//	$("#overviewPageContents").hide();
		//	$("#BreadcrumbTrailArea2").show();
		//	$("#overviewNSPageContents").show();
		//	$("#overviewROCPageContents").hide();
		//	$("#overviewROCNSFooterContents").show();
		//	$("#p_ROC_Footnotes").hide();
		//	isNSPageDisplayed = true;
		//	BRB.AppConfig.TrackingScreenID = 2;
		//	window.scrollTo(0, 0);
		//toggleImege();
	    	
	    	//messageDialog.error(translator.translateKey('overview_NS_Error'));
	   // }else  if (($(refs.provinces).val() !== 'NS') && !isNSPageDisplayed) {
	   //  $("#choseProduct").hide();
		//	$("#overviewPageContents").hide();
		//	$("#BreadcrumbTrailArea2").show();
		//	$("#overviewNSPageContents").hide();
		//	$("#overviewROCPageContents").show();
		//	$("#overviewROCNSFooterContents").show();
		//	$("#p_NS_Footnotes").hide();
		//	isNSPageDisplayed = true;
		//	BRB.AppConfig.TrackingScreenID = 2;
		//	window.scrollTo(0, 0);
		//toggleImege();
	   // } else {
	   //  	flow.next();
	    //}
	   //US3011
	   flow.next(); 
	    
	    
	}	
	//---------------------------------------------------------------------------------------
	function showPrevScreen(){
	    syncUserData(); 
		flow.back();
	}	
	//---------------------------------------------------------------------------------------
	function populateAboutYourselfArea () {		
		$("#confirmation_AboutYourselfArea").empty();
		$("#BRBConfirmationAboutYourSelfSection-template").tmpl({activationItems:activationItems}).appendTo("#confirmation_AboutYourselfArea");
		
		translator.run("ConfirmationScreen");
		$(refs.editAboutYourselfButton).click(function(){
			popUp_PersonalInformationEditScreen(populateAboutYourselfArea, 'aboutYourself');
		});
	}
	//---------------------------------------------------------------------------------------
	function toggleImege () {
		if (app.ieUIHelper.isIe8Browser()){
			app.ieUIHelper.toggleNSImege(translator);
		}else{
			translator.getCurrentLanguage() == 'en' ? $(
			'#rightBannerNSImage').addClass(
			'rightBannerNSBlock').removeClass(
			'rightBannerNSBlock_fr') : $('#rightBannerNSImage')
			.addClass('rightBannerNSBlock_fr').removeClass(
					'rightBannerNSBlock');
					
					
			translator.getCurrentLanguage() == 'en' ? $(
			'#rightBannerROCImage').addClass(
			'rightBannerNSBlock').removeClass(
			'rightBannerNSBlock_fr') : $('#rightBannerROCImage')
			.addClass('rightBannerNSBlock_fr').removeClass(
					'rightBannerNSBlock');	
						
					
		}
	}
	//-------------------------------------------------------------------------------------------
	function toggle10XImege() {
		if (app.ieUIHelper.isIe8Browser()){
		   app.ieUIHelper.toggleNSImege(translator);
		}else{
		 	translator.getCurrentLanguage() == 'en' ? $('#choseProduct a#topBannerOMXImage').addClass(
			'topBannerOMXImageBlock').removeClass(
			'topBannerOMXImageBlock_fr') : $('#choseProduct a#topBannerOMXImage')
			.addClass('topBannerOMXImageBlock_fr').removeClass(
					'topBannerOMXImageBlock');  
		}
	}  
	
	//US4541-------------------------------------------------------------------------------------------
	function toggle4PercentImage() {
		if (app.ieUIHelper.isIe8Browser()){
		   app.ieUIHelper.toggleNSImege(translator);
		}else{
		 	translator.getCurrentLanguage() == 'en' ? $('#choseProduct a#topBanner4PercentImage').addClass(
			'topBanner4PercentImageBlock').removeClass(
			'topBanner4PercentImageBlock_fr') : $('#choseProduct a#topBanner4PercentImage')
			.addClass('topBanner4PercentImageBlock_fr').removeClass(
					'topBanner4PercentImageBlock');  
		}
	}  
};