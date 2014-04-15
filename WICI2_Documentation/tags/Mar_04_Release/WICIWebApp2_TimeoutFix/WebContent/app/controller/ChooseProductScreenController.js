ensureNamespaceExists();

WICI.ChooseProductScreenController = function(activationItems, argTranslator, argMessageDialog) {
    var logPrefix = '[WICI.ChooseProductScreenController]::';
	var $screenContainer = $("#ChooseProductScreen");

	var translator;
	var messageDialog;
	
	this.show = show;
	this.init = init;
	this.hide = hide;
	
	var flow = null;
	
	this.syncUserData = syncUserData; 
    var refs = {
            productCard: '#creditCardProductList',
            agencyPromoCode: '#promoCodeTextField',            
            province:   '#provinceTextField',
            applyButton: '#chooseProductScreen_ApplyNowButton'
    };
    
    var model = new WICI.BaseModel({
        name: 'chooseProductModel',
        refs: refs, 
        data:[              
                  {name: 'productCard',  value: null, validation: { type: 'presence', message: 'Choose one of the Credit Cards' }},
                  {name: 'agencyPromoCode',  value: null, validation: { type: 'format', message: 'Enter valid Promo Code', matcher: /^[a-zA-Z0-9\'\-]{1,5}$/, canBeEmpty: true }},                
                  {name: 'province',  value: null, validation: { type: 'presence', message: 'Province is not selected' }}
             ]
    });   
    //---------------------------------------------------------------------------------------	
	function init( argFlow ) {
		var sMethod = 'init() ';
        console.log(logPrefix + sMethod);
        
        flow = argFlow;        
        translator = argTranslator; 		//(AA)Dependency Injection Principle: Allows for proper unit testing
        messageDialog = argMessageDialog; 	//(AA)Dependency Injection Principle: Allows for proper unit testing
		
        // Initialize model
        initModel();
        
		createView();
		bindEvents();
		
		populateProvinces();
		
		restoreCreditCardData();
		
		
		app.idleTimeService.start();
		
		app.logOutTriggerActionService.setActionMethod(function(){
			console.log(logPrefix + sMethod+" logOutTriggerActionService :: setActionMethod");
			try {
				(new WICI.DialogCloseHelper()).closeAllDialogs();
				
				app.idleTimeService.stop();
				app.logOutTriggerActionService.stop();
				app.abandonApplicationTriggerActionService.stop();
			} catch (e) {
				console.log(logPrefix + sMethod+ " Exception: "+e);
			}
			
			flow.logOut();
		});
		app.logOutTriggerActionService.start();
		
		try {
			(new WICI.DialogCloseHelper()).closeAllDialogs();
			app.abandonApplicationTriggerActionService.stop();
			app.abandonApplicationTriggerActionService.setActionMethod(function(){
				console.log(logPrefix + sMethod+" abandonApplicationTriggerActionService :: setActionMethod");
				flow.startApplication();
			});
		} catch (e) {
			console.log(logPrefix + sMethod+ " Exception: "+e);
		}
		
	}
	//---------------------------------------------------------------------------------------
	function initModel() {
	    // Get model from the store
	    var currentModel = activationItems.getModel(model.name);
        if (!currentModel) {
            activationItems.addModel(model);
        } else {
            model = currentModel;
        }   
	}	
	//---------------------------------------------------------------------------------------
	function show(){
		$screenContainer.show();
		
		updatePageTranslation();
	}
	//---------------------------------------------------------------------------------------
	function hide(){
		$screenContainer.hide();
	}
	//---------------------------------------------------------------------------------------
	function createView() {
		$screenContainer.empty();	
		assembleNavigationBarAtTop();
		assemblePageHTML($screenContainer, "#WICIChooseProductScreen-template");
		$screenContainer.addClass("breadcrumbPadding");		
		assembleCardContentsAndDisclaimerHTML();
	}
	//---------------------------------------------------------------------------------------
	function assembleNavigationBarAtTop(){
		$("#pageHeader-template").template("pageHeader");
		$.tmpl("pageHeader", 
			{ 		
				"settingsButtonId" : "chooseProductScreen_SettingsButton"
			}
		).appendTo("#ChooseProductScreen");
		
		$('#chooseProductScreen_SettingsButton').addClass('rightPosition');
		$('#chooseProductScreen_SettingsButton').attr("chooseProductMenuItem", "false");
	}
	//---------------------------------------------------------------------------------------
	function assemblePageHTML($element, templateName) {
		var html = $(templateName).tmpl(); 
		$element.append(html);
	}
	//---------------------------------------------------------------------------------------
	function assembleCardContentsAndDisclaimerHTML(){
	    clearDescriptionAreas();	    
		
		$("#CC_OMC-template").tmpl().appendTo("#cardDescriptionArea");
		$("#CC_Legal_OMC-template").tmpl().appendTo("#chooseProductScreen_disclaimerArea");				
	}
	//---------------------------------------------------------------------------------------
	function bindEvents(){
		$("#omcCard").click(function(){
			console.log('omc');
			model.set('productCard', 'OMC');
			showOMC();
			
			// Update selected card style
			updateSelectedCardStyle ($(this));
		});
		
		$("#ompCard").click(function(){
			console.log('omp');
			model.set('productCard', 'OMP');
			showOMP();

			// Update selected card style
			updateSelectedCardStyle ($(this));
		});
		
		$("#omrCard").click(function(){
			console.log('omr');
			model.set('productCard', 'OMR');
			showOMR();
			
			// Update selected card style
			updateSelectedCardStyle ($(this));
		});		
	}
	//---------------------------------------------------------------------------------------
	function clearCardsSelection () {
	    $("#omcCard").removeClass('creditCardSelectedBgColor');            
        $("#ompCard").removeClass('creditCardSelectedBgColor');
        $("#omrCard").removeClass('creditCardSelectedBgColor');
	}	
	//---------------------------------------------------------------------------------------
	function updateSelectedCardStyle (card) {
	    clearCardsSelection ();
	    card.addClass('creditCardSelectedBgColor');
	    
	    activateApplyButton ();
	}
	//---------------------------------------------------------------------------------------
	function activateApplyButton () {	 
	    // Check if apply button is disabled
	    var isDisabled = $(refs.applyButton).hasClass('grayflat');
	    
	    //  If Apply button is disabled make it enabled
	    if (isDisabled) {
	        $(refs.applyButton).removeClass('grayflat');
	        $(refs.applyButton).addClass('greenflat');
	        
	        // Bind with click event
	        $("#chooseProductScreen_ApplyNowButton").click(function(){
	            console.log("chooseProductScreen_ApplyNowButton.click");
	            showNextScreen();
	        });	        
	    }
	}	
	//---------------------------------------------------------------------------------------
	function showOMC(){
	    clearDescriptionAreas();
	
		$("#CC_OMC-template").tmpl().appendTo("#cardDescriptionArea");	
		$("#CC_Legal_OMC-template").tmpl().appendTo("#chooseProductScreen_disclaimerArea");
		
		updatePageTranslation();
	}
	//---------------------------------------------------------------------------------------
	function showOMP(){
	    clearDescriptionAreas();
	
		$("#CC_OMP-template").tmpl().appendTo("#cardDescriptionArea");	
		$("#CC_Legal_OMP-template").tmpl().appendTo("#chooseProductScreen_disclaimerArea");
		
		updatePageTranslation();
	}
	//---------------------------------------------------------------------------------------
	function showOMR(){
	    clearDescriptionAreas();
		
		$("#CC_OMR-template").tmpl().appendTo("#cardDescriptionArea");		
		$("#CC_Legal_OMR-template").tmpl().appendTo("#chooseProductScreen_disclaimerArea");
		
		updatePageTranslation();
	}
	//---------------------------------------------------------------------------------------
	function clearDescriptionAreas () {
	    $("#cardDescriptionArea").empty();
	    $("#chooseProductScreen_disclaimerArea").empty();
	}
	//---------------------------------------------------------------------------------------
	function updatePageTranslation () {
	    translator.run("ChooseProductScreen");
	}
	//---------------------------------------------------------------------------------------
	function showNextScreen(){	
	    var sMethod = 'showNextScreen() ';
        console.log(logPrefix + sMethod);
	    
        syncUserData();
	    
	    if (app.validationsOn) {
            app.validationDecorator.clearErrArrtibute();
            
            var rez = model.validate();
            if (rez.length > 0) {
                var errStrArr =[];
                $.each(rez, function(index, item) {
                    errStrArr.push(translator.translateKey(item.err));
                });
                
                app.validationDecorator.applyErrAttribute(rez);                
                                
                return; 
            }        
	    }	    
	    flow.next();
	    
		app.abandonApplicationTriggerActionService.start();
	}
	//---------------------------------------------------------------------------------------   
    function syncUserData(){
        var sMethod = 'syncUserData() ';
        console.log(logPrefix + sMethod);
        
        model.set('province', $(refs.province).val());        
        model.set('agencyPromoCode', $(refs.agencyPromoCode).val());
        
        console.log(logPrefix + sMethod +' model data: ' + model.toString());
    }
    //---------------------------------------------------------------------------------------
    function populateProvinces(){
        var sMethod = 'populateProvinces() ';
        console.log(logPrefix + sMethod);
        
        //Placeofissues list is constant so no need to re-populate it!
        if($(refs.province + ' option').length > 1){
            console.log(logPrefix + sMethod +" select control is already populated.");
            return;
        }
        
        var controlRef=$(refs.province);
        controlRef.empty();
        
        var list = new WICI.ProvincesList();
        
        
        var outletProvince	= null;
        
        var loginModel = activationItems.getModel('loginScreen');
        
        if(loginModel != null && loginModel.get('userLocationResponse') != null)
        {
        	var locationHelper = new WICI.UserLocationResponseHelper();
        	locationHelper.setUserLocationResponseObject(loginModel.get('userLocationResponse'));
        	outletProvince	= locationHelper.getOutletProvince();
        }
        
        $.each(list.data, function(index, item) {  
            var optTempl = '<option value="' + item.value + '" ';
            if(outletProvince !== null && outletProvince !== '' && outletProvince === item.value)
            {
            	optTempl = optTempl + "selected "; 
            }
            optTempl = optTempl + '>' + translator.translateKey(item.text) + '</option>';            
            controlRef.append(optTempl);
        });        
    }
    //---------------------------------------------------------------------------------------
    function restoreCreditCardData() {
        var sMethod = "restoreCreditCardData()";
        console.log(logPrefix + sMethod);
    }
};