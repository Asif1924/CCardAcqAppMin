/**
 * @author Oleksandr_Moroziuk
 */

ensureNamespaceExists();

WICI.OptionalProductsScreenController = function(activationItems, argTranslator, argMessageDialog) {
    var logPrefix = '[WICI.OptionalProductsScreenController]::';
    var $screenContainer = $('#OptionalProductsScreen');
    var translator =    null; 
    var messageDialog = null; 

    this.show = show;
    this.init = init;
    this.hide = hide;
    
    var	flow = null;
    var signatureControl;
    
    this.syncUserData = syncUserData; 
    var refs = {
    		signature					: 	'#optionalProducts_signature',
    		resetSignature				:	'#optionalProductsSignature_Reset_Button',    		
            flipCreditProtector 		: 	'#flipCreditProtector',
            creditProtectorYesOption	: 	'#creditProtectorYesOption',            
            acceptAgreement				: 	'#optionalProducts_AcceptConditions',
            userAcceptAgreement			: 	'#optionalProducts_AgreementBoxContainer',            
            proceedButton				: 	'#optionalProducts_ProceedButton',            
            signDate					: 	'#optionalProducts_DateNow',
            userSingnature				: 	'#optionalProductsScreen_SingnatureContainer'
    };
    
    var model =new WICI.BaseModel({
    	name: 'OptionalProductsModel',
        refs: refs, 
        data:[

				{name: 'creditProtectorYesNo',  value: null, validation: null},
				
				{name: 'userAcceptAgreement',   value: null, validation: {type: 'termsAndConditions', message: '', group: [1]}},
				{name: 'userSingnature', 		value: null, validation: {type: 'presence', message: '', group: [1]}},                
				{name: 'signDate',  			value: null, validation: {type: 'presence', message: '', group: [1]}},
				
				{notField:true, name: 'modelsData', value: null, validation: null},
				
				{notField:true, name: 'userSingnatureNative',  value: null, validation: null}
              ]
    });

    
    //---------------------------------------------------------------------------------------
    function init( argFlow ) {
        var sMethod = 'init() ';
        console.log(logPrefix + sMethod);
        
        flow = argFlow;        
        messageDialog = argMessageDialog; 	//(AA)Dependency Injection Principle: Allows for proper unit testing
        translator = argTranslator; 		//(AA)Dependency Injection Principle: Allows for proper unit testing
        
        var currentModel = activationItems.getModel(model.name);
        if (!currentModel) {
            activationItems.addModel(model);
        } else {
            model = currentModel;
        }
        
        createView();
        
        bindEvents();
        
        $(refs.creditProtectorYesOption).hide();
        
        var currentDate = Date.now();
        $(refs.signDate).html(currentDate.toString('MMMM dd yyyy'));
        
        restoreCreditCardData();
        
        createFlips();
    }

    //---------------------------------------------------------------------------------------
	function syncUserData() {
        var sMethod = 'syncUserData() ';
        console.log(logPrefix + sMethod);
        
        model.set('creditProtectorYesNo',   $(refs.flipCreditProtector + ' ' + 'option:selected').val());
        
        model.set('userAcceptAgreement',   $(refs.acceptAgreement).is(':checked') ? 'Y' : 'N');        
        //model.set('signDate',   $(refs.signDate).text());
        model.set('signDate',   Date.now().toString('yyyy-MM-dd'));
        
        model.set('modelsData', activationItems.getDataStringTillModel(model.name));
        
        if(signatureControl)
        {
        	model.set('userSingnature',  $(refs.signature).jSignature('getData', 'native').length > 0 ? 'data:' + $(refs.signature).jSignature('getData', 'image').join(',') : null );
        	model.set('userSingnatureNative',  $(refs.signature).jSignature('getData', 'native'));
        }
        
        console.log(logPrefix + sMethod + ' model data: ' + model.toString());
    }

    //---------------------------------------------------------------------------------------
    
    function restoreCreditCardData(){
        var sMethod = "restoreCreditCardData()";
        console.log(logPrefix + sMethod);
        
        var dataEnteredInThePrevScreens = activationItems.getDataStringTillModel(model.name);
        var savedData = model.get('modelsData');
        var dataEqual = true;
        
        if(savedData === null)
        {
        	model.set('modelsData', dataEnteredInThePrevScreens);
        }
        else
        {
        	if(dataEnteredInThePrevScreens.length !== savedData.length || dataEnteredInThePrevScreens !== savedData) 
        	{
        		dataEqual = false;
        	}
        }
        
        if(!dataEqual)
        {
        	model.set('userAcceptAgreement', 'N');
        	model.set('userSingnature', null);
        	model.set('userSingnatureNative', null);
        }
        
        $(refs.flipCreditProtector).val(model.get('creditProtectorYesNo'));
        
        $(refs.acceptAgreement).prop('checked', model.get('userAcceptAgreement') === 'Y' ? true : false );
    }
    //---------------------------------------------------------------------------------------
    function updatePanelsVisibility(show)
    {
    	if(show == 'Y')
    	{
	    	$(refs.creditProtectorYesOption).show();
	    	createSignatureControl();
    	}
    	else
    	{
    		$(refs.creditProtectorYesOption).hide();
    	}
    }
    //---------------------------------------------------------------------------------------
    function createFlips (){
    	$(refs.flipCreditProtector).slider();
    }
    //---------------------------------------------------------------------------------------
    function show() {
        $screenContainer.show();
        
        if(model.get('creditProtectorYesNo') == 'Y')
        {
        	updatePanelsVisibility(model.get('creditProtectorYesNo'));
        }
        
        translator.run('OptionalProductsScreen');
    }

    function hide() {
        $screenContainer.hide();
    }

    function createView() {
        $screenContainer.empty();
        assembleNavigationBarAtTop();
        assemblePageHTML($screenContainer, '#WICIOptionalProductsScreen-template');
		$screenContainer.addClass("breadcrumbPadding");		        
    }

	function assembleNavigationBarAtTop(){
		$("#pageHeader-template").template("pageHeader");
		$.tmpl("pageHeader", 
			{ 													
				"previousButtonId" 		: "OptionalProductsScreen_PrevButton",
				"settingsButtonId" 		: "OptionalProductsScreen_SettingsButton"
				//"nextButtonId" 			: "OptionalProductsScreen_NextButton"			
			}
		).appendTo("#OptionalProductsScreen");
		
		$('#OptionalProductsScreen_SettingsButton').addClass('rightPosition');
	}    
    
    function assemblePageHTML($element, templateName) {
        var html = $(templateName).tmpl();
        $element.append(html);
    }    
	//---------------------------------------------------------------------------------------    
    function onSignatureChaged (e) {
	    var sMethod = 'onSignatureChaged() ';
        console.log(logPrefix + sMethod);
        if ($(refs.signature).jSignature('getData', 'native').length > 0) {
            $(refs.resetSignature).removeClass('grayflat');
            //$(refs.resetSignature).addClass('darkgrayflat');
            $(refs.resetSignature).addClass('blackflat');
            $(refs.resetSignature).bind('click', onResetSignatureClicked);
        }
	}
	//---------------------------------------------------------------------------------------
	function onResetSignatureClicked () {	    
	    var sMethod = 'onResetSignatureClicked() ';
	    console.log(logPrefix + sMethod);
        // Clear canvas
        $(refs.signature).jSignature('reset');
        $(refs.resetSignature).removeClass('darkgrayflat');
        $(refs.resetSignature).addClass('grayflat');
        $(refs.resetSignature).unbind('click', onResetSignatureClicked);
	}
	//---------------------------------------------------------------------------------------
    
    function bindEvents() {
        var sMethod = 'bindEvents() ';
        console.log(logPrefix + sMethod);
        
//        $('#OptionalProductsScreen_NextButton').click(function() {
//            showNextScreen();
//        });
        $('#OptionalProductsScreen_PrevButton').click(function() {
        	showPrevScreen();
        });        
        
        $(refs.proceedButton).click(function(){
            console.log("optionalProducts_ProceedButton.click");
            showNextScreen();
        });	        
        
        $(refs.flipCreditProtector).change(function() {
        	updatePanelsVisibility($(this).val());
        });
    }
    //---------------------------------------------------------------------------------------
    function createSignatureControl()
    {
    	if (!signatureControl) 
    	{
    		if (model.get('userSingnatureNative')) {
		        signatureControl = $(refs.signature).jSignature({'signatureLine': true});		       
		        $(refs.signature).jSignature ('setData', model.get('userSingnatureNative'), 'native');
                onSignatureChaged();
            }
            else {
                signatureControl = $(refs.signature).jSignature();
	            }	    
		    
		    $(refs.signature).bind('change', onSignatureChaged);
	        $(refs.signDate).text(moment().format('MMMM DD, YYYY'));
    	}	
    }
    //---------------------------------------------------------------------------------------
    
	function showPrevScreen(){
		var sMethod = 'showPrevScreen() ';
		console.log(logPrefix + sMethod);
		
		syncUserData();
		flow.back();
	}    
    function showNextScreen() {
    	
    	var sMethod = 'showNextScreen() ';
    	console.log(logPrefix + sMethod);
    	
    	syncUserData();
        
        if (app.validationsOn) {
            app.validationDecorator.clearErrArrtibute();
            
            if(model.get('creditProtectorYesNo') == 'Y')
            {
	            var rez = model.validate(1);
	            if (rez.length > 0) {
	                var errStrArr =[];
	                $.each(rez, function(index, item) {
	                    errStrArr.push(translator.translateKey(item.err));
	                });
	                
	                app.validationDecorator.applyErrAttribute(rez);
	                
	                return;
	            }
            }
        }
        
        flow.next();
    }
    //---------------------------------------------------------------------------------------
};