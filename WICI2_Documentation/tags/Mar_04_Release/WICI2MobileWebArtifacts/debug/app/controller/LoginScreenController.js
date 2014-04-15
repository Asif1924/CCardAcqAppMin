ensureNamespaceExists();

WICI.LoginScreenController = function() {
	var logPrefix = '[WICI.LoginScreenController]::';
	var $screenContainer = $("#WICILoginScreen");
	var translator;
	var messageDialog;	
	var creditCardData = null;
	
	this.show = show;
	this.hide = hide;
	this.init = init;
	
	this.syncUserData = syncUserData;
	
    var refs = {
        agentID					: '#agentIDTextField',
        passwordFieldID			: '#passwordTextField',            
        locationID				: '#locationNumberTextField',
        loginButtonID			: '#loginScreen_LoginButton'
    };
    
    var model =new WICI.BaseModel({
        name: 'loginScreen',
        refs: refs, 
        data:[
            {name: 'agentID',           	value: null, validation: {type: 'presence',     message: '',      group: [1]} },
            {name: 'passwordFieldID',       value: null, validation: {type: 'presence',     message: '',      group: [1]} },
            {name: 'locationID',       		value: null, validation: {type: 'presence',   	message: '',      group: [1]} }
       ]
    }); 
	
   
	function init( argTranslator, argMessageDialog) {		
		translator=argTranslator;
		messageDialog=argMessageDialog;

		createView();
		bindEvents();
		
	}
    function syncUserData(){
        var sMethod = 'syncUserData() ';
        console.log(logPrefix + sMethod);

        model.set('agentID',    		$(refs.agentID).val());
        model.set('passwordFieldID',   	$(refs.passwordFieldID).val());
        model.set('locationID',   		$(refs.locationID).val());
        
        console.log(logPrefix + sMethod +' model data: \n'+model.toString());
    }	
	function show(){
		$screenContainer.show();		
		translator.run("WICILoginScreen");
	}

	function hide(){
		$screenContainer.hide();
	}
	
	function createView() {
		$screenContainer.empty();
		assembleTitleHTML($screenContainer, "#WICILoginScreen-template");
	}
	
    function assembleTitleHTML($element, templateName) {
		var html = $(templateName).tmpl(); 
		$element.prepend(html);
	}
    
	function bindEvents(){
		//$("#loginScreen_LoginButton").click(function(){
		//	if(app.validationsOn)
		//		validateFields(showNextScreen,failedValidation);
		//	else
		$(refs.loginButtonID).click(function(){
			showNextScreen();			
		});
		//});		
	}
    
	function validateFields( argSuccessCallback, argFailureCallback ){
		var validator = new WICI.Validator();
		var agentIDTextField = $(refs.agentID).val();
		var passwordTextField = $(refs.passwordFieldID).val();
		var locationNumberTextField = $(refs.locationID).val();
		
		if(!validator.notEmpty(agentIDTextField)){
			argFailureCallback(translator.translateKey("loginScreen_AgentID_Label"));
		}else{
			argSuccessCallback();
		}
		
	}
	
	function failedValidation( argFieldName ){
		console.log(argFieldName);
		//messageDialog.error(translator.translateKey("validation_failed_must_have_value", argFieldName));
	}
	
	function showNextScreen(){
        syncUserData();

        if (app.validationsOn) {
            app.validationDecorator.clearErrArrtibute();            //luk: remove all errors highlighting
            
            //luk: validate group 1
            var rez = model.validate(1);
            app.validationDecorator.applyErrAttribute(rez);         //luk: highlight error fields if any
            
            if (rez.length > 0 ) {
                return; // luk: cannot pass untill all errors are fixed
            }
        }
		
		$screenContainer.hide();
		creditCardData = new WICI.CreditCardApplicationData()
		creditCardData.addModel(model);

		new WICI.NewCustomerCreditCardAcquisitionFlow(creditCardData, translator, messageDialog).start();		
	}
};