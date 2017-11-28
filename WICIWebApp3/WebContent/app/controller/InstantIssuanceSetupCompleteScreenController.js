ensureNamespaceExists();

WICI.InstantIssuanceSetupCompleteScreenController = function(activationItems, argTranslator, argMessageDialog) {
    var logPrefix = '[WICI.InstantIssuanceSetupCompleteScreenController]::';
    var translator;
    var messageDialog;
    var	flow = null;
    
    var self = this;
    var screenName = "InstantIssuanceSetupCompleteScreen";
    var screenID = "#" + screenName;
    var $screenContainer = $(screenID);
    
    this.show = show;
    this.hide = hide;
    this.init = init;
    this.destroy=destroy;

    this.syncUserData = syncUserData;

    var refs = { 
    		startNewApplicationBtn  : 	'#instantIssuanceComplete_StartNewApplicationButton',
            logOutBtn               : 	'#instantIssuanceComplete_LogOutButton',
    };

    var model = new WICI.BaseModel({
        name: 'InstantIssuanceSetupCompleteScreen',
        refs: refs,
        data:[
             
              ]
    });
    //---------------------------------------------------------------------------------------
    function init( argFlow ) {
        var sMethod = 'init() ';
        console.log(logPrefix + sMethod);

        flow = argFlow;
        messageDialog = argMessageDialog; 	//(AA)Dependency Injection Principle: Allows for proper unit testing
        translator = argTranslator; 		//(AA)Dependency Injection Principle: Allows for proper unit testing

        createView();
        bindEvents();
        syncUserData();
        
        app.idleTimeService.start();
        app.logOutTriggerActionService.start();
        app.abandonApplicationTriggerActionService.start();
    }
    //---------------------------------------------------------------------------------------
    function syncUserData(){
        var sMethod = 'syncUserData() ';
        
        // console.log(logPrefix + sMethod + ' model data: ' + model.toString());
    }
    //---------------------------------------------------------------------------------------
    function show(){
        var sMethod = 'show() ';
        console.log(logPrefix + sMethod);
        
        $screenContainer.show();        
        translator.run(screenName);
        // app.selectorReduceHelper.init();
        this.isShown=true;
    	
    }
    //---------------------------------------------------------------------------------------
    function hide(){
        var sMethod = 'hide() ';
        console.log(logPrefix + sMethod);
    	
    	$(".pageHeader").remove();
        $screenContainer.hide();
    }
    
    function destroy(){
        var sMethod = 'destroy() ';
        console.log(logPrefix + sMethod);
    	
    	hide();
    	app.navigationController.adhocPrintDemoScreen = null;
    }    
    
    //---------------------------------------------------------------------------------------
    
    function createView() {
        var sMethod = 'createView() ';
        console.log(logPrefix + sMethod);

        $screenContainer.empty();
        assembleNavigationBarAtTop();
        WICI.BreadcrumbsHelper.assembleBreadcrumbs(7, $screenContainer, activationItems);
        
        assemblePageHTML($screenContainer, "#WICI"+screenName+"-template");

        $screenContainer.addClass("breadcrumbPadding");
        $screenContainer.addClass("pageHeaderPadding");
    }

    // ---------------------------------------------------------------------------------------

    function assembleNavigationBarAtTop() {
        $("#pageHeader-template").template("pageHeader");
        $.tmpl("pageHeader", {
            "logo_En" : translator.currentLanguageEnglish(),
            "settingsButtonId" : "InstantIssuanceCompleteScreen_SettingsButton"
        }).appendTo(screenID);
        $('#InstantIssuanceCompleteScreen_SettingsButton').addClass('rightPosition');
    }
    
    // ---------------------------------------------------------------------------------------
    function assemblePageHTML($element, templateName) {
        $(templateName).template("InstantIssuanceSetupCompleteScreen");
        
        $.tmpl("InstantIssuanceSetupCompleteScreen", {activationItems: activationItems}).appendTo($element);
    }
    
    //---------------------------------------------------------------------------------------
    function bindEvents(){

    	$(refs.startNewApplicationBtn).click(function(){
            messageDialog.htmlConfirm(translator.translateKey("print_StartNewApplicationMessage"), startNewApplication, $.noop, translator.translateKey("backButtonPrompt_title"));
        });

        $(refs.logOutBtn).click(function(){
        	handleLogout();
        });

        app.flowController.bindSettingsButtonEvent();
    }
    
    function handleLogout(){
   		hide();
    	app.flowController.logOutClick(self);
    }
    
    //---------------------------------------------------------------------------------------
    function startNewApplication(){
        flow.startApplication();
    }
};