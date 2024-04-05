ensureNamespaceExists();

GENERICWEBAPP.errorMetaData = { agentId : null, storeId : null, appId : null, internet_disconect: [], network_loss: [] };

GENERICWEBAPP.LoginScreenController = function(argLoanApplicationData, argTranslator, argMessageDialog) {
    var logPrefix = '[GENERICWEBAPP.LoginScreenController]::';
    var $screenContainer = $("#LoginScreen");
    var translator = null;
    var messageDialog = null;
    var screenSubmissionData = null;
    var connectivityController = null;
    var commonScreenMethods = null;
    
    var loadingIndicator = new GENERICWEBAPP.LoadingIndicatorController();

    this.show = show;
    this.hide = hide;
    this.init = init;

    this.syncUserData = syncUserData;

    var refs = {
        easylogo	: '#header-container',
        userName	: '#loginScreen_storeNumberField',
        storeNumber	: '#loginScreen_salesIDField',
    	password	: '#loginScreen_salesPasswordField'
    };

    var model = new GENERICWEBAPP.BaseModel({
        name: 'loginScreen',
        refs: refs
    });


    // ---------------------------------------------------------------------------------------
    function init() {
        var sMethod = 'init() ';
        console.log(logPrefix + sMethod);

        screenSubmissionData = argLoanApplicationData;
        translator = argTranslator;
        messageDialog = argMessageDialog;
        

        connectivityController = new GENERICWEBAPP.ConnectivityController(new GENERICWEBAPP.ConnectionStatus(), messageDialog, translator, GENERICWEBAPP.AppConfig.ConnectivityConfig, screenSubmissionData);
        connectivityController.init();

        $("#WebAppMainPage").addClass("with-image");

        createView();
        bindEvents();
    }

    function syncUserData() {
        var sMethod = 'syncUserData() ';
        console.log(logPrefix + sMethod);

        console.log(logPrefix + sMethod + ' model data: \n' + model.toString());
    }

    function show() {
        loadingIndicator.hide();
        $screenContainer.show();

        //translator.run("LoginScreen");
    }

    function hide() {
        $screenContainer.hide();
    }

    function createView() {
        $screenContainer.empty();
        assembleHTML($screenContainer, "#LoginScreen-template");
    }

    function assembleHTML($element, templateName) {
        var template = $.templates(templateName);   // Get compiled template
        var html = template.render({});             // Render template using data - as HTML string
        $element.prepend( html );                   // Insert HTML string into DOM
    }

    function bindEvents() {
        var sMethod = 'bindEvents() ';
        console.log(logPrefix + sMethod);

        $('#loginScreenStartFlow').click(function(){
        	hide();
        	var flowA=[
        		{screenName:"Screen1","inputFields": [ {type:"input",name:"birth",validation:[]} ] },
        		{screenName:"Screen2"},
        		{screenName:"Screen3"},        		
        		];
        	var flowB=[
        		{screenName:"Screen1"},
        		{screenName:"Screen3"},
        		{screenName:"Screen2"},        		
        		];
        	addScreenSections(flowA);
        	var builtScreenDefinitions = buildScreenDefinitions(flowA);
        	console.log( JSON.stringify(builtScreenDefinitions));
            //app.flow = new GENERICWEBAPP.Flow1(screenSubmissionData, translator, messageDialog);
        	app.flow = new GENERICWEBAPP.DynamicFlow(builtScreenDefinitions,screenSubmissionData, translator, messageDialog);
            app.flow.start();        	
        	
        });
    }

    function addScreenSections(argFlowScreens){
        $.each(argFlowScreens, function( index, screen ) {
        	$("#WebAppMainPage").append( "<section id='"+screen.screenName+"' class='GenericScreenStyle' style='display:none'></section>" );
        });    	
    }
    
    function buildScreenDefinitions(argFlowScreens){
        var screensDefinitions = {
        		'start': {
        			'screenConstructor': GENERICWEBAPP.LoginScreenController,
        			'transitionOut': function () { return 'Page0'; }
                }
        };
        
        $.each(argFlowScreens, function( index, screen ) {
        	var screenObj = { 
        			'screenConstructor':eval('GENERICWEBAPP.'+screen.screenName+'Controller'),
        			'transitionOut': function(){return 'Page'+(index+1);},
        			'transitionOnFailure':function(){return 'done';}
        	}
        	screensDefinitions['Page'+(index)]=screenObj;
        });
        
        return screensDefinitions;
    }
    
    function invokeLogin() {
        var userInformation = {};
        connectivityController.loginUser(userInformation, loginSuccess, failureCallback);
    }

    function loginSuccess( argResponse, textStatus, jqXHR ){

    }

    function showMessageDialog(){
    }

    function failureCallback (argResponse, textStatus, jqXHR){
    }

};
