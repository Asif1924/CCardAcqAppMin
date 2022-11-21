ensureNamespaceExists();

WICI.TrainingModuleScreen3Controller = function(activationItems, argTranslator,
                                              argMessageDialog) {
	 var logPrefix = '[WICI.TrainingModuleScreen3Controller]::';
	 var $screenContainer = $("#trainingModuleScreen3");
	 var screenname = "trainingModuleScreen3_PageContents";
	 var translator = null;
    var translator = null;
    var messageDialog = null;
    var isDebugMode;
    // VZE-107
    var signatureControl;
    var isCustomerSignatureDiloge = false;
    
    this.show = show;
    this.init = init;
    this.hide = hide;
    var selectedProvince = "";

    var flow = null;
    var self = this;

    var loginModel = activationItems.getModel('loginScreen');

    this.syncUserData = syncUserData;
    var refs = {
    		nextButtonId : '#trainningScreen3_next',
       
    };

    var model = new WICI.BaseModel({
        name : 'trainingModuleScreen3',
        refs : refs,
        data : [ {
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
        initModel();
        createView();
        bindEvents();
       
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
    }
    // ---------------------------------------------------------------------------------------
    function hide() {
        $screenContainer.hide();
    }
    // ---------------------------------------------------------------------------------------
    function createView() {
        $screenContainer.empty();
        assembleNavigationBarAtTop();
        WICI.BreadcrumbsHelper.assembleBreadcrumbs(3, $screenContainer, activationItems);
        assemblePageHTML($screenContainer, "#TrainingModuleScreen3-template");
        $screenContainer.addClass("breadcrumbPadding");
        assembleNavigationBarAtBottom();
    }
   
    // ---------------------------------------------------------------------------------------
    function assembleNavigationBarAtTop() {
        $("#pageHeader-template").template("pageHeader");
        $.tmpl("pageHeader", {
            "logo_En" : translator.currentLanguageEnglish(),
            "previousButtonId": "trainingModuleScreen3_PrevButton",
            "settingsButtonId" : "trainingModuleScreen3_SettingsButton",
            "isNotEmployee" : activationItems.getModel('loginScreen').get('employerID').toUpperCase() !== "E"
        }).appendTo("#trainingModuleScreen3");

        $('#trainingModuleScreen3_SettingsButton').addClass('rightPosition');
        $('#trainingModuleScreen3_SettingsButton').attr("trainingModuleScreen3",
            "false")
    }
   // ---------------------------------------------------------------------------------------
    function assembleNavigationBarAtBottom(){
        $("#pageFooter-template").template("pageFooter");
        $.tmpl("pageFooter", {}).appendTo("#trainingModuleScreen3");
    }
    // ---------------------------------------------------------------------------------------
    function assemblePageHTML($element, templateName) {
        $(templateName).tmpl( {
	        // US3767 
        	activationItems: activationItems,
            isNotEmployee: activationItems.getModel('loginScreen').get('employerID').toUpperCase !== 'E',
            } ).appendTo($element);
    }
    // ---------------------------------------------------------------------------------------
    function bindEvents() {
    	 var sMethod = 'bindEvents() ';
         console.log(logPrefix + sMethod);
    	 $(refs.nextButtonId).click(function() {
       		 console.log(logPrefix + sMethod + "nextButtonId : click ");
       		 showNextScreen();            
         });
           
    	$('.trainingModuleScreen3_PrevButton').click(function() {
 			showPrevScreen();
 		});
        $.subscribe('translatorFinished',function(){
           
        });
    }
    // ----------------------------------------------------------------------------------------
    function syncUserData() {
        var sMethod = 'syncUserData() ';
        console.log(logPrefix + sMethod);
    }
   // ---------------------------------------------------------------------------------------
    function showNextScreen() {
        var sMethod = 'showNextScreen() ';
        console.log(logPrefix + sMethod);
        
        syncUserData();
        flow.next();
        app.abandonApplicationTriggerActionService.start();
    }
   // ---------------------------------------------------------------------------------------
	function showPrevScreen() {
		var sMethod = 'showPrevScreen() ';
		console.log(logPrefix + sMethod);
		flow.back();
	}
};
