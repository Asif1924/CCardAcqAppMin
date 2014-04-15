ensureNamespaceExists();

WICI.SignatureScreenController = function(activationItems, argTranslator, argMessageDialog) {
    var logPrefix = '[WICI.SignatureScreenController]::';	
	var $screenContainer = $("#SignatureScreen");
	var messageDialog;
	var translator;
	
	this.show = show;
	this.init = init;
	this.hide = hide;
	var IsDocumentSigned = false;
	var singnatureControl;
	
	var flow = null;
	
	var refs = {
	        signature:  '#signature',
            resetSignature: '#signature_Reset_Button',
            applySignature: '#signature_Apply_Button',
            capturedSignature:  "#captured_Signature",
            proceedButton:  "#signatureScreen_ProceedButton",
            acceptAgreement:  "#signatureScreen_AcceptAgreement",
            userAcceptAgreement: '#signatureScreen_AgreementBoxContainer',
            signDate:   '#signatureScreen_SignDate',
            userSingnature: '#signatureScreen_SingnatureContainer'
    };
	//---------------------------------------------------------------------------------------    
    var model = new WICI.BaseModel({
        refs: refs, 
        data:[  
                {name: 'userAcceptAgreement',   value: null, validation: {type: 'termsAndConditions', message: 'signatureScreen_validation_acceptAgreement'}},
                {name: 'userSingnature', value: null, validation: {type: 'presence', message: 'signatureScreen_validation_signature'}},                
                {name: 'signDate',  value: null, validation: {type: 'presence', message: 'signatureScreen_validation_signDate'}} 
             ]
    });  
    //---------------------------------------------------------------------------------------
	function init( argFlow ) {
        var sMethod = 'init() ';
        console.log(logPrefix + sMethod);
        
        flow = argFlow;        
        translator = argTranslator; 		//(AA)Dependency Injection Principle: Allows for proper unit testing
        messageDialog = argMessageDialog; 	//(AA)Dependency Injection Principle: Allows for proper unit testing
		
		createView();		
		bindEvents();
	}
	//---------------------------------------------------------------------------------------
	function show(){
		$screenContainer.show();
		translator.run("SignatureScreen");
		
		// Initialize signature if it not jet initialized 
		if (!singnatureControl) {		
		    // This is the part where jSignature is initialized.
		    singnatureControl = $(refs.signature).jSignature();
		    
		    $(refs.signature).bind('change', onSignatureChaged);
		    // Initialize signature date
	         $(refs.signDate).text(moment().format('LL'));
		}	
	}
	//---------------------------------------------------------------------------------------
	function hide(){
		$screenContainer.hide();
	}
	//---------------------------------------------------------------------------------------
	function createView() {
		$screenContainer.empty();
		assembleNavigationBarAtTop();
		assemblePageHTML($screenContainer, "#WICISignatureScreen-template");
		$screenContainer.addClass("breadcrumbPadding");
	}
	//---------------------------------------------------------------------------------------
	function assembleNavigationBarAtTop(){
		$("#pageHeader-template").template("pageHeader");
		$.tmpl("pageHeader", 
			{ 													
				"previousButtonId" 		: "SignatureScreen_PrevButton", 
				"nextButtonId" 			: "SignatureScreen_NextButton", 			
			}
		).appendTo("#SignatureScreen");
	}
	//---------------------------------------------------------------------------------------
	function assemblePageHTML($element, templateName) {
		var html = $(templateName).tmpl(); 
		$element.append(html);
	}
	//---------------------------------------------------------------------------------------
	function bindEvents(){
        $('#SignatureScreen_NextButton').click(function() {
            showNextScreen();
        });	
        $('#SignatureScreen_PrevButton').click(function() {
        	showPrevScreen();
        });        
               
        $(refs.applySignature).click(function() {                                 
            var image = new Image();
            
             // Get image data   
            image.src = 'data:' + $(refs.signature).jSignature('getData', 'image').join(',');
            
            // TODO: remove this
            // Save image to the model
            model.set('userSingnature',  'data:' + $(refs.signature).jSignature('getData', 'image').join(','));            
            
            // Clear captured image container            
            $(refs.capturedSignature).html('');
            
            // Add new image
            $(image).appendTo($(refs.capturedSignature));
        });
        
        $(refs.acceptAgreement).change(function() {
            if ( $(refs.acceptAgreement).is(':checked') ) {
                $(refs.proceedButton).removeClass('grayflat');
                $(refs.proceedButton).addClass('greenflat');
                //$(refs.proceedButton).bind('click', onProceedButtonClicked);
            }
            else{
                $(refs.proceedButton).removeClass('greenflat');
                $(refs.proceedButton).addClass('grayflat');
                //$(refs.proceedButton).unbind('click', onProceedButtonClicked);
            }            
        });       
	}	
	//---------------------------------------------------------------------------------------
	function onSignatureChaged (e) {
	    var sMethod = 'onSignatureChaged() ';
        console.log(logPrefix + sMethod);
       
        if (!IsDocumentSigned) {
            $(refs.resetSignature).removeClass('grayflat');
            $(refs.resetSignature).addClass('greenflat');
            
            $(refs.resetSignature).bind('click', onResetSignatureClicked);
        }
        
        IsDocumentSigned = true;
	}
	//---------------------------------------------------------------------------------------
	function onResetSignatureClicked () {	    
	    var sMethod = 'onResetSignatureClicked() ';
	    console.log(logPrefix + sMethod);
               
        // Clear canvas
        $(refs.signature).jSignature('reset');
        
        $(refs.resetSignature).removeClass('greenflat');
        $(refs.resetSignature).addClass('grayflat');
        $(refs.resetSignature).unbind('click', onResetSignatureClicked);
        
        IsDocumentSigned = false;
	}
	//---------------------------------------------------------------------------------------
	function showPrevScreen(){
	    var sMethod = 'showPrevScreen() ';
        console.log(logPrefix + sMethod);
        
		flow.back();
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
	}
	//---------------------------------------------------------------------------------------
	function syncUserData(){
        var sMethod = 'syncUserData() ';
        console.log(logPrefix + sMethod);
        
        model.set('userAcceptAgreement',   $(refs.acceptAgreement).is(':checked'));        
        model.set('userSingnature',  IsDocumentSigned ? 'data:' + $(refs.signature).jSignature('getData', 'image').join(',') : null );
        model.set('signDate',   $(refs.signDate).text());
        
        console.log(logPrefix + sMethod + ' model data: ' + model.toString());
    }
	//---------------------------------------------------------------------------------------
};