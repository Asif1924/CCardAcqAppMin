ensureNamespaceExists();

WICI.ChooseProductScreenController = function(activationItems, argTranslator,
		argMessageDialog) {
	var logPrefix = '[WICI.ChooseProductScreenController]::';
	var $screenContainer = $("#ChooseProductScreen");
	var translator;
	var messageDialog;

	this.show = show;
	this.init = init;
	this.hide = hide;
	var selectedProvince = "";

	var flow = null;

	this.syncUserData = syncUserData;
	var refs = {
		productCard : '#creditCardProductList',
		agencyPromoCode : '#promoCodeTextField',
		province : '#provinceTextField',
		applyButton : '#chooseProductScreen_ApplyNowButton',
		agencyProgram : '#programDropDown'
	};

	var model = new WICI.BaseModel({
		name : 'chooseProductModel',
		refs : refs,
		data : [ {
			name : 'productCard',
			value : null,
			validation : {
				type : 'presence',
				message : 'Choose one of the Credit Cards'
			}
		}, {
			name : 'agencyProgram',
			value : null,
			validation : {
				type : 'presence',
				message : 'Program is not selected'	
			}
		} , {
			name : 'agencyPromoCode',
			value : null,
			validation : {
				type : 'format',
				message : 'Enter valid Promo Code',
				matcher : /^[a-zA-Z0-9\'\-||S.O.]{1,5}$/,
				canBeEmpty : false
			}
		}, {
			name : 'province',
			value : null,
			validation : {
				type : 'presence',
				message : 'Province is not selected'
			}
		}]
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

		// Initialize model
		initModel();		
		createView();
		
		bindEvents();
		populateProgramsList();
		populateProvinces();
		
		restoreCreditCardData();

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
						flow.startApplication();
					});
		} catch (e) {
			console.log(logPrefix + sMethod + " Exception: " + e);
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
	}
	// ---------------------------------------------------------------------------------------
	function hide() {
		$screenContainer.hide();
	}
	// ---------------------------------------------------------------------------------------
	function createView() {
		$screenContainer.empty();
		assembleNavigationBarAtTop();
		assemblePageHTML($screenContainer, "#WICIChooseProductScreen-template");
		$screenContainer.addClass("breadcrumbPadding");
		assembleCardContentsAndDisclaimerHTML();
	}
	// ---------------------------------------------------------------------------------------
	function assembleNavigationBarAtTop() {
		$("#pageHeader-template").template("pageHeader");
		$.tmpl("pageHeader", {
			"logo_En" : translator.currentLanguageEnglish(),
			"settingsButtonId" : "chooseProductScreen_SettingsButton"
		}).appendTo("#ChooseProductScreen");

		$('#chooseProductScreen_SettingsButton').addClass('rightPosition');
		$('#chooseProductScreen_SettingsButton').attr("chooseProductMenuItem",
				"false")
	}

	// ---------------------------------------------------------------------------------------
	function assemblePageHTML($element, templateName) {
		var html = $(templateName).tmpl();
		$element.append(html);
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
		$(refs.province).bind('translatorFinished',function(){
			populateProvinces();
			populateProgramsList();
		});
		// because Ontario is visible by default
		bindOmpCardHandler();
		$(refs.province).on("change", function() {			
			var str = this.value;
			if (str == "ON" || str == "QC" || str == "NB" || str == "NL" || str == "PE") {
				$("#ompCard").show();
				bindOmpCardHandler();
			} else {
				$("#ompCard").hide();
				if($("#ompCard").hasClass('creditCardSelectedBgColor')){					
					$("#ompCard").removeClass('creditCardSelectedBgColor');
					deActivateApplyButton();
				}
				unBindOmpCardHandler();
				// need to show OMP because OMP is only available
				omcHandler(false);
			};
			if (str == "NS") {
				showMessageForNS();				
			} else {				
				selectedProvince = $(refs.province).val();
			}		 
		});
		
		$(refs.agencyProgram).on("change", function(obj){
			var val = this.value;
			var promoValue = $(refs.agencyPromoCode).val();
			if (val==="other" && promoValue && promoValue == model.get('agencyPromoCode')){
				$(refs.agencyPromoCode).val(promoValue)
										.removeAttr('disabled');
				$(refs.agencyPromoCode).removeClass('promoCodeDisabled');	
			}else if (val==="other") {
				$(refs.agencyPromoCode).val("")
				   					   .removeAttr('disabled');
				$(refs.agencyPromoCode).removeClass('promoCodeDisabled');	
			} else if (val==="null") {
				$(refs.agencyPromoCode).val("")
									   .attr('disabled', true);
				$(refs.agencyPromoCode).addClass('promoCodeDisabled');;
			} else if (val ==="BLANK"|| val ==="S.O."){
				$(refs.agencyPromoCode).val(translator.translateKey("BLANK"))
				   					   .attr('disabled', true);
				$(refs.agencyPromoCode).addClass('promoCodeDisabled');
			} else {
				$(refs.agencyPromoCode).val(val)
									   .attr('disabled', true);
				$(refs.agencyPromoCode).addClass('promoCodeDisabled');
			}
			model.set('agencyPromoCode', null);
		});

		/*
		 * According to story with number 700
		 * 
		 * 
		 * $("#omrCard").click(function(){ console.log('omr');
		 * model.set('productCard', 'OMR'); showOMR(); // Update selected card
		 * style updateSelectedCardStyle ($(this)); });
		 */
	}
	// ----------ADDED by DPS
	function omcHandler(needToUpdateButton) {
		console.log('omc');
		model.set('productCard', 'OMC');
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

		activateApplyButton();
	}
	// ---------------------------------------------------------------------------------------
	function activateApplyButton() {
		// Check if apply button is disabled
		var isDisabled = $(refs.applyButton).hasClass('grayflat');

		// If Apply button is disabled make it enabled
		if (isDisabled) {
			showGreenAplyButton();

			// Bind with click event
			$(refs.applyButton).bind("click", function() {
				console.log("chooseProductScreen_ApplyNowButton.click");
				showNextScreen();
			});
		};
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
	function showOMC() {
		clearDescriptionAreas();

		$("#CC_OMC-template").tmpl().appendTo("#cardDescriptionArea");
		$("#CC_Legal_OMC-template").tmpl().appendTo(
				"#chooseProductScreen_disclaimerArea");

		updatePageTranslation();
	}
	// ---------------------------------------------------------------------------------------
	function showOMP() {
		clearDescriptionAreas();

		$("#CC_OMP-template").tmpl().appendTo("#cardDescriptionArea");
		$("#CC_Legal_OMP-template").tmpl().appendTo(
				"#chooseProductScreen_disclaimerArea");

		updatePageTranslation();
	}
	// ---------------------------------------------------------------------------------------
	function showOMR() {
		clearDescriptionAreas();

		$("#CC_OMR-template").tmpl().appendTo("#cardDescriptionArea");
		$("#CC_Legal_OMR-template").tmpl().appendTo(
				"#chooseProductScreen_disclaimerArea");

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
	function showNextScreen() {
		var sMethod = 'showNextScreen() ';
		console.log(logPrefix + sMethod);

		syncUserData();

		if (app.validationsOn) {
			app.validationDecorator.clearErrArrtibute();
			
			var rez = model.validate();
			if (rez.length > 0) {
				var errStrArr = [];
				$.each(rez, function(index, item) {
					errStrArr.push(translator.translateKey(item.err));
				});

				app.validationDecorator.applyErrAttribute(rez);

				return;
			}
		}
		saveState();
		flow.next();
		app.abandonApplicationTriggerActionService.start();
	}
	// ---------------------------------------------------------------------------------------
	function syncUserData() {
		var sMethod = 'syncUserData() ';
		console.log(logPrefix + sMethod);
		
		model.set('province', $(refs.province).val());
		model.set('agencyPromoCode', $(refs.agencyPromoCode).val().toUpperCase());
		model.set('agencyProgram', $(refs.agencyProgram).val());
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

		var loginModel = activationItems.getModel('loginScreen');

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
		
	}
	
	function populateProgramsList(){
		var sMethod = 'populateProgramsList() ';
		console.log(logPrefix + sMethod);
		
		syncUserData();
		
		var controlRef = $(refs.agencyProgram);
		controlRef.empty();
		var list = new WICI.ProgramsList();
		populateDropDown(controlRef, list.data);
		
		var program = model.get('agencyProgram');
		if (program){
			selectProgram(program, model.get('agencyPromoCode'));
		}		
		
		$(refs.agencyProgram).trigger("change");
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
		$(refs.agencyProgram + " [value='" +programToSelect + "']").attr("selected",
		"selected");
		if(promoCode){
			$(refs.agencyPromoCode).val(promoCode);	
		}
	}
	// ---------------------------------------------------------------------------------------
	function restoreCreditCardData() {
		var sMethod = "restoreCreditCardData()";
		console.log(logPrefix + sMethod);
		restoreProgramAndPromoCode();
	}
	//---------------------------------------------------------------------------------------    
    //We show message that products absent for NS province
    function showMessageForNS() {    	
		messageDialog.error(
				translator.translateKey("infoDialog_NoProduct"),
				translator.translateKey("errorDialog_defaultTitle"),
				revertProvince);
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
		$(refs.agencyProgram).trigger("change");
    };
};