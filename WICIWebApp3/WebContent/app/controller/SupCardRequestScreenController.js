ensureNamespaceExists();

WICI.SupCardRequestScreenController = function(activationItems, argTranslator,
		argMessageDialog) {
	var logPrefix = '[WICI.SupCardRequestScreenController]::';
	var $screenContainer = $("#SupplementaryCardRequestScreen");// supCardRequest_TitleArea
																// SupCard_PersonalDetailsArea

	this.show = show;
	this.init = init;
	this.hide = hide;
	var flow = null;

	var translator = null;
	var messageDialog = null;

	var connectivityController = null;
	var chooseProductModel = null;
	var validator = new WICI.Validator();
	
	this.syncUserData = syncUserData;
	var refs = {
		flipCardYesNo : '#flipSupplementaryCard',
		flipSameAddress : '#flipSameAddress',

		firstName : '#supCardRequest_FirstName_TextField',
		initial : '#supCardRequest_Initial_TextField',
		lastName : '#supCardRequest_LastName_TextField',
		birthDate : '#supCardRequest_DateOfBirth_TextField',
		phone : '#supCardRequest_Telephone_TextField',

		cardRequestFor : '#supCardRequestType_Group',
		cardRequest_Spouse : '#supCardRequest_Spouse_RadioButton',
		cardRequest_Son : '#supCardRequest_Son_RadioButton',
		cardRequest_Daughter : '#supCardRequest_Daughter_RadioButton',
		cardRequest_Relative : '#supCardRequest_Relative_RadioButton',
		cardRequest_Other : '#supCardRequest_Other_RadioButton',

		cardDetailsPanel : '#supCardDetailsPanel',
		addressPanel : '#supAddressPanel',
		
		supStreetAddress:      			'#supStreetAddress',
		supEnterAddressManuallyButton: 	'#sup_EnterAddressManuallyButton',
		supEditAddressButton: 			'#sup_EditAddressButton',
		supAcceptButton:  				'#sup_AcceptButton',

		addressLine1 : '#sup_AddressLine1_TextField',
		addressLine2 : '#sup_AddressLine2_TextField',
		suiteUnit : '#sup_SuiteUnit_TextField',
		city : '#sup_City_TextField',
		province : '#sup_Province_TextField',
		postalCode : '#sup_PostalCode',
		
		address_supLine1:		'#address_supLine1',
		address_supLine2:		'#address_supLine2',
		address_supCity:		'#address_supCity',
		address_supProvince:	'#address_supProvince',
		address_supPostalcode:	'#address_supPostalcode',
		
		flipSupplementaryCard_no : "#flipSupplementaryCard_no",
		flipSupplementaryCard_yes : "#flipSupplementaryCard_yes",
		flipSameAddress_no : "#flipSameAddress_no",
		flipSameAddress_yes : "#flipSameAddress_yes"

	};

	var model = new WICI.BaseModel({
		name : 'supCardRequestData',
		refs : refs,
		data : [ { name : 'cardYesNo', 		value : null, validation : null },
				 { name : 'cardRequestFor', value : null, validation : { type : 'presence', message : '', group : [ 1 ] } },
				 { name : 'firstName', 		value : null, validation : { type : 'personName', message : '', group : [ 1 ] } },
				 { name : 'lastName', 		value : null, validation : { type : 'personLastName', message : '', group : [ 1 ] } },
				 { name : 'initial', 		value : null, validation : { type : 'format', message : '', matcher : /^[A-Z]{1}/, group : [ 1 ], canBeEmpty : true } },
				 { name : 'birthDate', 		value : null, validation : { type : 'birthDate', message : '', group : [ 1 ] } },
				 { name : 'phone', 			value : null, validation : { type : 'phone', message : 'Enter valid Phone', group : [ 1 ] } },
				 { name : 'sameAddressYesNo', value : null, validation : null },
				 { name : 'supStreetAddress', value : null, validation : { type : 'presence', message : '', group : [ 2 ], canBeEmpty : true } },
				 { name : 'postalCode', 	value : null, validation : { type : 'postal', message : '', group : [ 2 ] } },
				 { name : 'addressLine1', 	value : null, validation : { type : 'addressLinePOBox', message : '', group : [ 2 ] } },
				 { name : 'addressLine2', 	value : null, validation : { type : 'addressLine', message : '', group : [ 2 ], canBeEmpty : true } },
				 { name : 'suiteUnit', 		value : null, validation : { type : 'suiteUnit', message : '', group : [ 2 ], canBeEmpty : true } },
				 { name : 'city', 			value : null, validation : { type : 'city', message : '', group : [ 2 ] } },
				 { name : 'province', value : null, validation : { type : 'presence', message : '', group : [ 2 ] } }
		]
	});
	// ---------------------------------------------------------------------------------------
	function restoreCreditCardData() {
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

		list = new WICI.ProvincesList();
        $('#address_supLine1').text(model.get('addressLine1'));
        $('#address_supLine2').text(model.get('addressLine2'));
        $('#address_supunit').text(model.get('suiteUnit'));
        if($(refs.suiteUnit).val())
        	$('#address_supunit_hyphen').show();
        else 
        	$('#address_supunit_hyphen').hide();
        $('#address_supCity').text(model.get('city'));
        $.each(list.data, function (index, item) {
          if(item.value === model.get('province')){
           $('#address_supProvince').text(translator.translateKey(item.text));
           }
        });
        $('#address_supPostalcode').text(model.get('postalCode'));
        
		$(refs.postalCode).val(model.get('postalCode'));
		$(refs.addressLine1).val(model.get('addressLine1'));		
		$(refs.addressLine2).val(model.get('addressLine2'));
		$(refs.suiteUnit).val(model.get('suiteUnit'));
		$(refs.city).val(model.get('city'));
		$(refs.province).val(model.get('province'));

		updateSupCardRequestForRadioButtons();
		updatePanelsVisibility();
	}
	// ---------------------------------------------------------------------------------------
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
	function init(argFlow) {
		var sMethod = 'init() ';
		console.log(logPrefix + sMethod);

		flow = argFlow;
		translator = argTranslator;
		messageDialog = argMessageDialog;

		createView();
		bindEvents();
		chooseProductModel = activationItems.getModel('chooseProductModel');
		console.log(logPrefix + sMethod + "cardType :: " + chooseProductModel.get('productCard'));
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
		createFlips();
		hideCanadaPostSupManualEdit();
		showHideAddressLine2();
		updatePlaceholderLanguage();

		$(refs.phone).mask('999-999-9999', {
			placeholder : "",
			useDelimeter : true,
			delimeter : '-'
		});

		connectivityController = new WICI.ConnectivityController(
				new WICI.ConnectionStatus(), messageDialog, translator,
				WICI.AppConfig.ConnectivityConfig);
		connectivityController.init();
		//VZE-265
		$("#suppCard_infomation_cityName").hide();
	}
	function createFlips() {
		$(refs.flipSupplementaryCard_no + ","+ refs.flipSameAddress_no).text(translator.translateKey("no")).slider().slider("refresh");
		$(refs.flipSupplementaryCard_yes + ","+ refs.flipSameAddress_yes).text(translator.translateKey("yes")).slider().slider("refresh");
		$(refs.flipCardYesNo).slider();
		$(refs.flipSameAddress).slider();
	}
	// ---------------------------------------------------------------------------------------
	function updatePanelsVisibility() {
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
	function show() {
		$screenContainer.show();
		translator.run("SupplementaryCardRequestScreen");
		app.selectorReduceHelper.init();
	}
	//cardRequest_Spouse
	// ---------------------------------------------------------------------------------------
	function hide() {
		$screenContainer.hide();
	}
	// ---------------------------------------------------------------------------------------
	function createView() {
		$screenContainer.empty();
		assembleNavigationBarAtTop();
		// US4637
		WICI.BreadcrumbsHelper.assembleBreadcrumbs(5, $screenContainer, activationItems);
		assemblePageHTML($screenContainer, "#WICISupCardScreen-template");
		assembleNavigationBarAtBottom();
		$screenContainer.addClass("breadcrumbPadding");
	    updatePlaceholderLanguage();
	    $('#sup_infomation_phone').hide();
	}
	// ---------------------------------------------------------------------------------------
	function assembleNavigationBarAtTop() {
		$("#pageHeader-template").template("pageHeader");
		$.tmpl("pageHeader",
			{	"logo_En" : translator.currentLanguageEnglish(),
				"previousButtonId" : "SupplementaryCardRequestScreen_PrevButton",
				"nextButtonId" : "SupplementaryCardRequestScreen_NextButton",
				"settingsButtonId" : "SupplementaryCardRequestScreen_SettingsButton"
			}).appendTo("#SupplementaryCardRequestScreen");
	}
	 // ---------------------------------------------------------------------------------------
	function assembleNavigationBarAtBottom(){
		$("#pageFooter-template").template("pageFooter");
		$.tmpl("pageFooter", {
			"previousButtonId" : "SupplementaryCardRequestScreen_PrevButton",
			"nextButtonId" : "SupplementaryCardRequestScreen_NextButton"
			}
		).appendTo("#SupplementaryCardRequestScreen");
	}
	// ---------------------------------------------------------------------------------------
	function assemblePageHTML($element, templateName) {
	    $(templateName).tmpl( {
	        // US4989 
        	activationItems: activationItems,
            } ).appendTo($element);
	}
	// ---------------------------------------------------------------------------------------
	function bindEvents() {
		var sMethod = 'bindEvents() ';
		console.log(logPrefix + sMethod);
		
		$("#suppCard_infomation_cityName").hide();
		$(refs.supStreetAddress).live('paste, input', function(e) {
	        var fields = [
	        	{ element: "supStreetAddress", 	field: "" },
	            { element: "supAddressLine1", 	field: "Line1", 		mode: pca.fieldMode.POPULATE },
	            { element: "supAddressLine2", 	field: "Line2", 		mode: pca.fieldMode.POPULATE },
	            { element: "supMulti-unit", 	field: "{AcMua}", 		mode: pca.fieldMode.POPULATE },
	            { element: "supCity", 			field: "City", 			mode: pca.fieldMode.POPULATE },
	            { element: "supProvinceCode", 	field: "ProvinceCode", 	mode: pca.fieldMode.POPULATE },
	            { element: "supPostalcode", 	field: "PostalCode",	mode: pca.fieldMode.POPULATE }
	        ],
	        options = {
	        	key: "gz38-nt61-zz89-db43"
	        },
	        control = new pca.Address(fields, options);
			control.options.bar = options.bar || {};
			control.options.bar.showCountry = false;
			control.options.bar.showLogo = true;
			control.listen('populate', function(){
				app.validationDecorator.clearErrArrtibute();
				$('#sup_canadaPost_SearchedAddress').show();
		     	$('#sup_canadaPostAddressDescription1').show();
		     	$('#sup_canadaPost_addressSearch_instructions').hide();
		     	$('#sup_enterAddressManuallySection').hide();
		     	$(refs.supEditAddressButton).removeClass('hideElement');
		     	$(refs.supEnterAddressManuallyButton).addClass('hideElement');
		     	$(refs.supAcceptButton).addClass('hideElement');
                if($(refs.addressLine1).val().indexOf("-") !== -1){
					var addressLinewithUnitNumberSup = [];
					addressLinewithUnitNumberSup = $(refs.addressLine1).val().split('-');
					var addressline1SuppFull = '';
			    	for(i=1;i<addressLinewithUnitNumberSup.length;i++) {
			    		addressline1SuppFull += addressLinewithUnitNumberSup[i] + "-";
			    	}
			    	console.log(logPrefix + sMethod + "addressline1SuppFull : " + addressline1SuppFull.substring(0, addressline1SuppFull.length-1));
			    	
					// If Unit No is more then 6 char then consider as addressline1 instead of Unit no
					if(addressLinewithUnitNumberSup[0].length > 6){
						$('#address_supunit').text('');
						$('#address_supLine1').text($(refs.addressLine1).val());
						$(refs.suiteUnit).val("");
						$('#address_supunit_hyphen').hide();
					}else{
						$('#address_supunit_hyphen').show();
						$('#address_supunit').text(addressLinewithUnitNumberSup[0]);
                        $('#address_supLine1').text(addressline1SuppFull.substring(0, addressline1SuppFull.length-1));
                        $(refs.suiteUnit).val(addressLinewithUnitNumberSup[0]);
                        $(refs.addressLine1).val(addressline1SuppFull.substring(0, addressline1SuppFull.length-1));
					}
				}else{
					$('#address_supunit_hyphen').hide();
					$('#address_supunit').text("");
					$('#address_supLine1').text($(refs.addressLine1).val());
				}
				//VZE-125
                if($(refs.addressLine2).val() != ''){
                   $('#address_supLine2').show();
                   $('#address_supLine2_br').removeClass('hideElement');
	               $('address_supLine2').text($(refs.addressLine2).val());
                }else{
	               $('#address_supLine2_br').addClass('hideElement');
                   $('#address_supLine2').hide();
                }
                $('#address_supLine2').text($(refs.addressLine2).val());
                $('#address_supCity').text($(refs.city).val());
                list = new WICI.ProvincesList(),
                $.each(list.data, function (index, item) {
	              if(item.value === $(refs.province).val()){
		           $('#address_supProvince').text(translator.translateKey(item.text));
	               }
                });
                var postalCodevalSup = $(refs.postalCode).val().split(" ").join(""); 
                $('#address_supPostalcode').text(postalCodevalSup);
                $(refs.postalCode).val(postalCodevalSup);
                model.set("province", $(refs.province).val());
                
                if($(refs.city).val() != '' && $(refs.province).val() != '' && $(refs.city).val().length >= 18) 
            		invokeAbbreviateSupCityname($(refs.city).val().toUpperCase(), $(refs.province).val(), abbreviateCitynameSupSuccess, abbreviateCitynameSupFail);
			});
        });
        $(refs.suiteUnit).live('paste, input', function(e) {
            console.log(refs.suiteUnit + '::suiteUnit');
            $('#address_supunit').text($(refs.suiteUnit).val());
            if($(refs.suiteUnit).val())
            	$('#address_supunit_hyphen').show();
            else 
            	$('#address_supunit_hyphen').hide();
        });
        $(refs.addressLine1).live('paste, input', function(e) {
            console.log(refs.addressline1 + '::addressline1');
            $('#address_supLine1').text($(refs.addressLine1).val());
        });
        $(refs.addressLine2).live('paste, input', function(e) {
            console.log(refs.addressline2 + '::addressline2');
            $('#address_supLine2').text($(refs.addressLine2).val());
        });
        $(refs.city).live('paste, input', function(e) {
            console.log(refs.city + '::city');
            $('#address_supCity').text($(refs.city).val());
        });
        
        $(refs.province).live('paste, input', function(e) {
            console.log(refs.province + '::province');
            list = new WICI.ProvincesList(),
            $.each(list.data, function (index, item) {
	              if(item.value === $(refs.province).val()){
		           $('#address_supProvince').text(translator.translateKey(item.text));
	               }
            });    
        });
        $(refs.postalCode).live('paste, input', function(e) {
           console.log(refs.postalcode + '::postalcode');
            var postalCodeval = $(refs.postalCode).val().split(" ").join(""); 
            $('#address_supPostalcode').text(postalCodeval);
        });
        
        $(refs.supEnterAddressManuallyButton).click(function() {
        	console.log(refs.supEnterAddressManuallyButton + '::click');
        	$(refs.supEnterAddressManuallyButton).addClass('hideElement');
        	$(refs.supAcceptButton).removeClass('hideElement');
        	$('#sup_enterAddressManuallySection').show();
        	$('#sup_canadaPost_SearchedAddress').hide();
        	$('#sup_canadaPost_addressSearch_instructions').hide();
        	$('#sup_canadaPostAddressDescription1').show();
        });
        
        $(refs.supEditAddressButton).click(function() {
        	console.log(refs.supEnterAddressManuallyButton + '::click');
        	$(refs.supEditAddressButton).addClass('hideElement');
        	$(refs.supAcceptButton).removeClass('hideElement');
        	$('#sup_enterAddressManuallySection').show();
        	$('#sup_canadaPost_SearchedAddress').show();
        	$('#sup_canadaPost_addressSearch_instructions').hide();
        	$('#sup_canadaPostAddressDescription1').show();
            $('#suppCardInfo_infomation_button').hide();
        });
        
        $(refs.supAcceptButton).click(function() {
        	console.log(refs.supAcceptButton + '::click');
        	
        	app.validationDecorator.clearErrArrtibute();
        	var postrez = [];
            if($(refs.suiteUnit).val() && !validator.suiteUnit($(refs.suiteUnit).val().toUpperCase()))
            	postrez.push({name: 'suiteUnit', err: '', uiid: refs.suiteUnit});
            if(!$(refs.addressLine1).val().toUpperCase() && !validator.addressLine($(refs.addressLine1).val().toUpperCase())){
	            postrez.push({name: 'addressLine1', err: '', uiid: refs.addressLine1});
	        }else{
	        	// WIIC-17
		            		var regex = new RegExp("(?=.*[\\s])(?=.*[0-9])(?=.*[A-Za-z])^[a-zA-Z0-9\.\/\'\&\\s\-]{0,7}[a-zA-Z0-9\.\/\'\&\\s\-]{4,40}$"); // ^[A-Za-z0-9.'/&-]{4,40}$
		            		var isValid = $(refs.addressLine1).val().toUpperCase().match(regex);
		    	            if(isValid){
		    	            	var addressline1Value=$(refs.addressLine1).val().substring(0,8);
		    	            	if(!addressline1Value.includes(" ")){
		    	            		postrez.push({name: 'addressLine1', err: '', uiid: refs.addressLine1});
		    	            	}else{
		    	            		var poBoxArray = ["P O B O X","P O BO X","P O BOX","PO BOX","PO Box","po box","P.o box","P.O Box","P.O. Box","p.o box","p.o. box","postal box","Postal Box","postal Box","Postal box","CP","Cp","cP","cp","C.P","c.P","C.p","c.p","C.P.","c.p.","Case Postale","Case postale","case postale","Case postale"];
			    	                $.each(poBoxArray, function (index, item) {
			    	                	if($(refs.addressLine1).val().toLowerCase().includes(item.toLowerCase())){
			    	                    	$('#suppCardInfo_infomation_button').show();
			    	                    	postrez.push({name: 'addressLine1', err: '', uiid: refs.addressLine1});
			    	                    }
			    	                });
		    	            	}
		    	            } else{
		    	            	// GD, GD RPO, GD STN, GD LCD, GD BDP, GD CSP, GD SUCC, GD PDF, GENERAL DELIVERY,GEN DELIVERY,GEN DEL 
		    	            	if($.inArray($(refs.addressLine1).val().toUpperCase(), ['GD', 'GD RPO', 'GD STN', 'GD LCD', 'GD BDP', 'GD CSP', 'GD SUCC', 'GD PDF', 'GENERAL DELIVERY', 'GEN DELIVERY', 'GEN DEL']) != -1) {
									// Do Nothing. Bypass these values, since valid.
								} else{
		    	            		postrez.push({name: 'addressLine1', err: '', uiid: refs.addressLine1});
		    	            	}
		    	            }
	        }
            if($(refs.addressLine2).val() && !validator.addressLine($(refs.addressLine2).val().toUpperCase()))
            	postrez.push({name: 'addressLine2', err: '', uiid: refs.addressLine2});
            if(!validator.city($(refs.city).val().toUpperCase()))
            	postrez.push({name: 'city', err: '', uiid: refs.city});
            if($(refs.province).val() == "null")
            	postrez.push({name: 'province', err: '', uiid: refs.province});
            if(!validator.postalCode($(refs.postalCode).val().toUpperCase()))
            	postrez.push({name: 'postalCode', err: '', uiid: refs.postalCode});
            
            console.log(refs.supAcceptButton + ' :: click :: ' + postrez.length);
            if(postrez.length > 0) {
            	app.validationDecorator.applyErrAttribute(postrez);
            	if($(refs.city).val() != '' && $(refs.city).val().length > 24){
            		$("#suppCard_infomation_cityName").show();
            	}else{
            		
            		if($(refs.city).val() != '' && $(refs.province).val() != '' && $(refs.city).val().length >= 18) 
                		invokeAbbreviateSupCityname($(refs.city).val().toUpperCase(), $(refs.province).val(), abbreviateCitynameSupSuccess, abbreviateCitynameSupFail);
            		
            		$("#suppCard_infomation_cityName").hide();
            	}
            } else {
                	if($(refs.city).val().length >= 18) 
                		invokeAbbreviateSupCityname($(refs.city).val().toUpperCase(), $(refs.province).val(), abbreviateCitynameSupSuccess, abbreviateCitynameSupFail);
            	
            	$('#address_supLine1').text(model.get('addressLine1'));
                //VZE-125
                if($(refs.addressLine2).val() != ''){
                   $('#address_supLine2').show();
                   $('#address_supLine2_br').removeClass('hideElement');
	               $('address_supLine2').text($(refs.addressLine2).val());
                }else{
	               $('#address_supLine2_br').addClass('hideElement');
                   $('#address_supLine2').hide();
                }
                $('#address_supunit').text(model.get('suiteUnit'));
                if($(refs.suiteUnit).val())
	            	$('#address_supunit_hyphen').show();
	            else 
	            	$('#address_supunit_hyphen').hide();
                $('#address_supCity').text(model.get('city'));
                list = new WICI.ProvincesList();
                $.each(list.data, function (index, item) {
                  if(item.value === $(refs.province).val()){
                   $('#address_supProvince').text(translator.translateKey(item.text));
                   }
                });
                var postalCodeval = $(refs.postalCode).val().split(" ").join(""); 
            	$('#address_supPostalcode').text(postalCodeval);
            	
            	$(refs.supEditAddressButton).removeClass('hideElement');
            	$(refs.supAcceptButton).addClass('hideElement');
            	$('#sup_enterAddressManuallySection').hide();
            	$('#sup_canadaPost_SearchedAddress').show();
            }
        	
        });

		bindNavigationHandlingControls();
		bindRadioHandlingControls();

		$(refs.province).on("change", function() {
			console.log(refs.province + '::change');
			model.set("province", $(refs.province).val());
		});

		$.subscribe('translatorFinished', function(event) {
			toggleImage();
			populateProvinces();
			checkSupAddressProvince();
			updatePlaceholderLanguage();
			$(refs.province).val(model.get("province"));
		});
		
		updateOmxCardLanguage();
		updateOmpOmrCardLanguage();
	}
	//---------------------------------------------------------------------------------------
    function invokeAbbreviateSupCityname( city, province, argSuccessCB, argFailureCB ){
        new WICI.LoadingIndicatorController().show();
        connectivityController.AbbreviateCityname(city,province,argSuccessCB,argFailureCB);
    }
    //---------------------------------------------------------------------------------------
    function abbreviateCitynameSupSuccess(argResponse) {
    	var sMethod = "abbreviateCitynameSupSuccess() :: ";
    	
    	new WICI.LoadingIndicatorController().hide();
    	if(argResponse && argResponse.data && argResponse.data.abrivatedCityLookup == "Y") {
    		// City name is abbreviated
    		$(refs.city).removeClass('errorField');
        	console.log(logPrefix + sMethod + "Supp City name is abbreviated.");
    		model.set('city', argResponse.data.abbrevaitedCityName);
    		$(refs.city).val(model.get('city'));
    		$('#address_supCity').text(model.get('city'));
        } else if(argResponse && argResponse.data && argResponse.data.abrivatedCityLookup == "N") {
        	// City name is not abbreviated
        	console.log(logPrefix + sMethod + "Supp City name is not abbreviated.");
        }
    }
    //---------------------------------------------------------------------------------------
    function abbreviateCitynameSupFail(argResponse) {
    	var sMethod = "abbreviateCitynameSupFail() :: ";
    	
    	// City name abbreviation failed
    	new WICI.LoadingIndicatorController().hide();
    	console.log(logPrefix + sMethod + "City name abbreviation failed.");
    }
   // ---------------------------------------------------------------------------------------
   function updatePlaceholderLanguage() {
	    var sMethod = logPrefix + 'updatePlaceholderLanguage';
        if (app.translator.getCurrentLanguage() === "en") {
	        $('#supStreetAddress').attr('placeholder', '  Start typing a street address or postal code'); 
            $('#sup_SuiteUnit_TextField').attr('placeholder', ' Unit #');
            $('#sup_AddressLine1_TextField').attr('placeholder', ' Street Number, Street Name');
            $('#sup_AddressLine2_TextField').attr('placeholder', ' Mailing Address Line 2');
            $('#sup_City_TextField').attr('placeholder', ' City');
            $('#sup_Province_TextField').attr('placeholder', ' Province');
            $('#sup_PostalCode').attr('placeholder', ' L#L#L#');
            
        } else {
	        $('#supStreetAddress').attr('placeholder', '  Commencez à entrer une adresse ou un code postal'); 
            $('#sup_SuiteUnit_TextField').attr('placeholder', ' No unité');
            $('#sup_AddressLine1_TextField').attr('placeholder', ' Adresse postale ligne 1*');
            $('#sup_AddressLine2_TextField').attr('placeholder', ' Adresse postale ligne 2');
            $('#sup_City_TextField').attr('placeholder', ' Ville*');
            $('#sup_Province_TextField').attr('placeholder', ' Province*');
            $('#sup_PostalCode').attr('placeholder', ' Code postal*');
        }
    }
	//---------------------------------------------------------------------------------------
    function checkSupAddressProvince() {
    	var sMethod = 'checkSupAddressProvince() ';
        console.log(logPrefix + sMethod + $(refs.province).val());
        
    	list = new WICI.ProvincesList();
        $.each(list.data, function (index, item) {
          if(item.value === $(refs.province).val()){
           $('#address_supProvince').text(translator.translateKey(item.text));
           }
        });
    }
	//---------------------------------------------------------------------------------------
    function hideCanadaPostSupManualEdit(){
    	if(model.get("postalCode")) {
    		$('#sup_canadaPost_SearchedAddress').show();
    		$('#sup_canadaPostAddressDescription1').show();
        	$('#sup_enterAddressManuallySection').hide();
        	$('#sup_canadaPost_addressSearch_instructions').hide();
        	$(refs.supEnterAddressManuallyButton).addClass('hideElement');
        	$(refs.supEditAddressButton).removeClass('hideElement');
        	$(refs.supAcceptButton).addClass('hideElement');
        	$('#suppCardInfo_infomation_button').hide();
        	if($(refs.addressLine2).val() != ''){
                $('#address_supLine2').show();
                $('#address_supLine2_br').removeClass('hideElement');
	            $('address_supLine2').text($(refs.addressLine2).val());
            }else{
	            $('#address_supLine2_br').addClass('hideElement');
                $('#address_supLine2').hide();
            }
    	} else {
    		$(refs.supEditAddressButton).addClass('hideElement');
        	$(refs.supAcceptButton).addClass('hideElement');
        	$('#sup_canadaPost_SearchedAddress').hide();
            $('#sup_enterAddressManuallySection').hide();
            $('#sup_canadaPostAddressDescription1').hide();
            $('#suppCardInfo_infomation_button').hide();
    	}
    }
    //---------------------------------------------------------------------------------------
    function showHideAddressLine2() {
    	if(app.getAddressLine2Flag() == 'Y') {
    		$('#supAddressLine2Section').removeClass('hideElement');
    	} else {
    		$('#supAddressLine2Section').addClass('hideElement');
    	}
    }
	// ---------------------------------------------------------------------------------------
    function toggleImage() {
    	var sMethod = " :: toggleImage() :: ";
    	
        if(chooseProductModel.get('productCard') ===  "OMX" || chooseProductModel.get('productCard') ===  "OMZ"){
        	updateOmxCardLanguage();
        }else if(chooseProductModel.get('productCard') === "OMP" || chooseProductModel.get('productCard') === "OMR"){
        	updateOmpOmrCardLanguage();
        }
    }
	//----------------------------------------------------------------------------------------
    function updateOmxCardLanguage() {
    	var sMethod = 'updateOmxCardLanguage() ';
        console.log(logPrefix + sMethod);
        // Choose what card to display: English or French.
        if (app.translator.getCurrentLanguage() === "en") {
            $("#suppCard_OMX").removeClass("fr_card");
            $("#suppCard_OMX").addClass("en_card");
        } else {
            $("#suppCard_OMX").removeClass("en_card");
            $("#suppCard_OMX").addClass("fr_card");
        }
    }
    
    //----------------------------------------------------------------------------------------
    function updateOmpOmrCardLanguage() {
    	var sMethod = 'updateOmpOmrCardLanguage() ';
        console.log(logPrefix + sMethod);
        // Choose what card to display: English or French.
        if (app.translator.getCurrentLanguage() === "en") {
            $("#suppCard_OMP_OMR").removeClass("fr_card");
            $("#suppCard_OMP_OMR").addClass("en_card");
        } else {
            $("#suppCard_OMP_OMR").removeClass("en_card");
            $("#suppCard_OMP_OMR").addClass("fr_card");
        }
        
    }
	// ---------------------------------------------------------------------------------------
	function bindNavigationHandlingControls() {
		$('.SupplementaryCardRequestScreen_NextButton').click(function() {
			showNextScreen();
		});
		$('.SupplementaryCardRequestScreen_PrevButton').click(function() {
			showPrevScreen();
		});
	}
	// ---------------------------------------------------------------------------------------
	function bindRadioHandlingControls() {
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

		$(refs.cardRequest_Spouse).click(function() {
			clearRadios();
			$(refs.cardRequest_Spouse).addClass('ui-btn-active');
			model.set('cardRequestFor', 'SPOU');
		});

		$(refs.cardRequest_Son).click(function() {
			clearRadios();
			$(refs.cardRequest_Son).addClass('ui-btn-active');
			model.set('cardRequestFor', 'SON');
		});

		$(refs.cardRequest_Daughter).click(function() {
			clearRadios();
			$(refs.cardRequest_Daughter).addClass('ui-btn-active');
			model.set('cardRequestFor', 'DAUG');
		});

		$(refs.cardRequest_Relative).click(function() {
			clearRadios();
			$(refs.cardRequest_Relative).addClass('ui-btn-active');
			model.set('cardRequestFor', 'RELA');
		});

		$(refs.cardRequest_Other).click(function() {
			clearRadios();
			$(refs.cardRequest_Other).addClass('ui-btn-active');
			model.set('cardRequestFor', 'OTHE');
		});
	}
	// ---------------------------------------------------------------------------------------
	function showHideAddressPanel(value) {
		if ("Y" == value) {
			$(refs.addressPanel).hide();
		} else {
			$(refs.addressPanel).show();
		}
	}
	// ---------------------------------------------------------------------------------------
	function clearRadios() {
		$(refs.cardRequest_Spouse).removeClass('ui-btn-active');
		$(refs.cardRequest_Son).removeClass('ui-btn-active');
		$(refs.cardRequest_Daughter).removeClass('ui-btn-active');
		$(refs.cardRequest_Relative).removeClass('ui-btn-active');
		$(refs.cardRequest_Other).removeClass('ui-btn-active');
	}

	// ---------------------------------------------------------------------------------------
	function syncUserData() {
		var sMethod = 'syncUserData() ';
		console.log(logPrefix + sMethod);

		model.set('cardYesNo', $(refs.flipCardYesNo + ' ' + 'option:selected')
				.val());

		model.set('firstName', $(refs.firstName).val().toUpperCase());
		model.set('initial', $(refs.initial).val().toUpperCase());
		model.set('lastName', $(refs.lastName).val().toUpperCase());
		model.set('birthDate', $(refs.birthDate).val());
		model.set('phone', $(refs.phone).val().replace(/-/g, ''));

		model.set('sameAddressYesNo', $(
				refs.flipSameAddress + ' ' + 'option:selected').val());

		model.set('postalCode', $(refs.postalCode).val().toUpperCase());
		model.set('addressLine1', $(refs.addressLine1).val().toUpperCase());
		model.set('addressLine2', $(refs.addressLine2).val().toUpperCase());
		model.set('suiteUnit', $(refs.suiteUnit).val().toUpperCase());
		/*model.set('streetNumber', $(refs.streetNumber).val().toUpperCase());*/
		model.set('city', $(refs.city).val().toUpperCase());
		model.set('province', $(refs.province).val());

		console.log(logPrefix + sMethod + ' model data: ' + model.toString());
	}

	// ---------------------------------------------------------------------------------------
	function populateProvinces() {
		var sMethod = 'populateProvinces() ';
		console.log(logPrefix + sMethod);

		var provinceVal = model.get('province');

		var controlRef = $(refs.province);
		controlRef.empty();

		var list = new WICI.ProvincesList();
		$.each(list.data, function(index, item) {
			var optTempl = '<option value="' + item.value + '">'
					+ translator.translateKey(item.text) + '</option>';
			controlRef.append(optTempl);
		});
		if(provinceVal){
			$(refs.province + " [value='" + provinceVal + "']").attr("selected",
			"selected");
		}
	}
	//------------------------------------------------------------------------------------------------------------------------------
    function restrictSpecialChar(event){
	  var sMethod = "restrictSpecialChar()";
	  console.log(logPrefix + sMethod);
      var regex = new RegExp("^[a-zA-Z0-9 ]+$");
      var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
	      if (!regex.test(key)) {
			    event.preventDefault();
			    return false;
		  }
    }
	// ---------------------------------------------------------------------------------------
	function showPrevScreen() {
		syncUserData();
		flow.back();
	}
	// ---------------------------------------------------------------------------------------
	function showNextScreen() {
		var sMethod = 'showNextScreen() ';
		console.log(logPrefix + sMethod);

		syncUserData();

		// US5123 WICI - Restrict Supp Card applicants to 16 and older
        var age = model.calculateAge(model);
        var rezAge =[];
        console.log(logPrefix + sMethod + "Age :: " + age);
        
        if(age < 16 || age > 120){
           var item = model.getItemByName('birthDate');
           var itemName =  item === null ? '' : item.name;
           var itemuiid = model.refs == null ? '' : model.refs[item.name];
           var tempRez  = {name: itemName, err: 'personalData_DOB_18YearsError', uiid: itemuiid};
           rezAge.push(tempRez);
           app.validationDecorator.focusControl(refs.birthDate);
           if (rezAge.length > 0) {
                app.validationDecorator.applyErrAttribute(rezAge);
                return;
           }
        }
        
		var isValidationError = false;
		if (app.validationsOn) {
			app.validationDecorator.clearErrArrtibute();

			var rez = [];
			var rez1 = [];
			var rez2 = [];
			// VZE-286
			var temprez = [];

			if (model.get('cardYesNo') == 'Y') {
				rez1 = model.validate(1);
				var supMobile = app.validationDecorator.phoneValidation($(refs.phone).val() , refs.phone,false );
				if ($(refs.phone).val() === '') {
					$('#sup_infomation_phone').show();
					temprez.push(refs.phone);
	            	$(refs.phone).addClass('errorField');
	            	app.validationDecorator.focusControl(refs.phone);
					supMobile = false;
	            }
				if (model.get('sameAddressYesNo') == 'N') {
					rez2 = model.validate(2);
					//custom validation for Canada Post address
	                var address_supPostalcode = $('#address_supPostalcode').text();
	                if(!address_supPostalcode) {
	                	rez.push({name: 'supStreetAddress', err: '', uiid: refs.supStreetAddress});
	                }
				}

				rez = rez.concat(rez1, rez2);
				
				var validator = new WICI.Validator();
                if(!validator.addressLinePOBox($(refs.addressLine1).val().toUpperCase())) {
                	if($(refs.addressLine1).val()!=''){
	                      $('#sup_enterAddressManuallySection').show();
		                  $('#suppCardInfo_infomation_button').show();
	                      $(refs.supEditAddressButton).addClass('hideElement');
			        	  $(refs.supAcceptButton).removeClass('hideElement');
			        	  $('#sup_canadaPost_SearchedAddress').show();
			        	  $('#sup_canadaPost_addressSearch_instructions').hide();
			        	  $('#sup_canadaPostAddressDescription1').show();
                     }
                        
                } else {
                	$('#suppCardInfo_infomation_button').hide();
                }
                
                if(!validator.suiteUnit($(refs.suiteUnit).val().toUpperCase())) {
                	if($(refs.suiteUnit).val()!=''){
                		showAddressFieldsError();
                     }
                } 
                
                if(!validator.addressLine($(refs.addressLine2).val().toUpperCase())) {
                	if($(refs.addressLine2).val()!=''){
                		showAddressFieldsError();
                     }
                }
                if(!validator.city($(refs.city).val().toUpperCase())) {
                	if($(refs.city).val()!=''){
                		showAddressFieldsError();
                     }
                }
                
                if(!validator.postalCode($(refs.postalCode).val().toUpperCase())) {
                	if($(refs.postalCode).val()!=''){
                		showAddressFieldsError();
                     }
                }

				if (rez.length > 0) {
					app.validationDecorator.applyErrAttribute(rez);
					return;
				}
				if (temprez.length > 0) {
					$('#sup_infomation_phone').show();
					app.validationDecorator.applyErrAttribute(rez);
					return;
				}
				if(!supMobile){
			    	$('#sup_infomation_phone').show();
			    	return;
			    }else{
			    	$('#sup_infomation_phone').hide();
			    }
			}
		}
		
		/*if(!app.getDemoMode()) 
        	if($(refs.city).val() != '' && $(refs.province).val() != '' && $(refs.city).val().length >= 18) 
        		invokeAbbreviateSupCityname($(refs.city).val().toUpperCase(), $(refs.province).val(), abbreviateCitynameSupSuccess, abbreviateCitynameSupFail);*/
		
		flow.next();
	}
	// ---------------------------------------------------------------------------------------
	 function showAddressFieldsError() {
		 $('#sup_enterAddressManuallySection').show();
         $(refs.supEditAddressButton).addClass('hideElement');
   	  	 $(refs.supAcceptButton).removeClass('hideElement');
   	  	 $('#sup_canadaPost_SearchedAddress').show();
   	  	 $('#sup_canadaPost_addressSearch_instructions').hide();
   	  	 $('#sup_canadaPostAddressDescription1').show();
	}
};
