ensureNamespaceExists();

WICI.FinishTrainingScreen = function(activationItems, argTranslator,
                                              argMessageDialog) {
	 var logPrefix = '[WICI.FinishTrainingScreen]::';
	 var $screenContainer = $("#finishTrainingScreen");
	 var screenname = "finishTrainingScreen_PageContents";
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
    var trainingContentResponse = null; 
	var trainingContentListArray = null;
	var trainingContentId = null;
	var trainingContentEn = null;
	var trainingContentFr = null;
	var trainingContentVersion = null;
	var activateDate = null;
    var flow = null;
    var self = this;

    var loginModel = activationItems.getModel('loginScreen');

    this.syncUserData = syncUserData;
    var refs = {
    		finishButtonId : '#finishTrainingScreen_next',
    	    finishScreenLanguage_choser: '#finishTrainingScreen_LanguageButton',
       
    };

    var model = new WICI.BaseModel({
        name : 'finishTrainningScreen',
        refs : refs,
        data : [ 
        	{ name : 'trainingContentSuccessFlag', 	 value : null, 	validation : null, notField: true },
        ]
    });
    this.innerModel = model;
    // ---------------------------------------------------------------------------------------
    function init(argFlow) {
        var sMethod = 'init() ';
        console.log(logPrefix + sMethod);

        flow = argFlow;
        translator = argTranslator; // (AA)Dependency Injection Principle:
       
        messageDialog = argMessageDialog; // (AA)Dependency Injection
        // Principle: Allows for proper unit
        connectivityController = new WICI.ConnectivityController(new WICI.ConnectionStatus(), messageDialog, translator, WICI.AppConfig.ConnectivityConfig);
        connectivityController.init();

        initModel();
        createView();
        bindEvents();
        createSlider();
        setToggleLanguageSlider(translator.getCurrentLanguageFSDPFormat());
        retrieveTrainingContent();
       
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
        translator.run("finishTrainingScreen");
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
        assemblePageHTML($screenContainer, "#FinishTrainingScreen-template");
        $screenContainer.addClass("breadcrumbPadding");
    }
   
    // ---------------------------------------------------------------------------------------
    function assembleNavigationBarAtTop() {
        $("#pageHeaderTrainingModule-template").template("pageHeader");
        $.tmpl("pageHeader", {
            "previousButtonId": "finishTrainningScreen_PrevButton",
            "languageButtonId" : "finishTrainingScreen_LanguageButton",
        }).appendTo("#finishTrainingScreen");
    }
    // ---------------------------------------------------------------------------------------
    function assemblePageHTML($element, templateName) {
        $(templateName).tmpl( {
        	activationItems: activationItems,
            isNotEmployee: activationItems.getModel('loginScreen').get('employerID').toUpperCase !== 'E',
            } ).appendTo($element);
    }
    //----------------------------------------------------------------------------------------
    function createSlider() {
        $(refs.finishScreenLanguage_choser).slider();
    }
    //---------------------------------------------------------------------------------------
    function setToggleLanguageSlider(language) {
        console.log('setToggleLanguageSlider : ' + language);
        $(refs.finishScreenLanguage_choser).val(language);
        $(refs.finishScreenLanguage_choser).slider("refresh");
    }
    // ---------------------------------------------------------------------------------------
    function bindEvents() {
       var sMethod = 'bindEvents() ';
       console.log(logPrefix + sMethod);
       $(refs.finishButtonId).click(function() {
   		 console.log(logPrefix + sMethod + "finishButtonId : click ");
   		 showNextScreen();            
       });
       
       $('.finishTrainningScreen_PrevButton').click(function() {
			showPrevScreen();
		});
       $(refs.finishScreenLanguage_choser).on("change", function() {
           translator.toggleLanguage(true);
           app.language.setLanguage(translator.getCurrentLanguageFSDPFormat());
       });
       $.subscribe('translatorFinished',function(){
          
       });
       app.flowController.bindSettingsButtonEvent();
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
	function retrieveTrainingContent() {
		invokeRetrieveTrainingContent(retrieveTrainingContentSuccess, retrieveTrainingContentFailure);
	}
	function invokeRetrieveTrainingContent(argSuccessCB, argFailureCB) {
    	var sMethod = "invokeRetrieveTrainingContent() :: ";
    	console.log(logPrefix + sMethod);
    	
    	new WICI.LoadingIndicatorController().show();
    	connectivityController.RetrieveTrainingContent(argSuccessCB,argFailureCB);
    }
    
    function retrieveTrainingContentSuccess(argResponse) {
    	var sMethod = "retrieveTrainingContentSuccess()";
        console.log(logPrefix + sMethod );
        
        new WICI.LoadingIndicatorController().hide();
        if(!argResponse.error) {
        	try {
				model.set('trainingContentSuccessFlag', true);
				trainingContentResponse = argResponse; 
				trainingContentListArray = argResponse;
				trainingContentId = JSON.stringify(argResponse.data.trainingContentId);
				trainingContentEn = JSON.stringify(argResponse.data.trainingContentEn);
				trainingContentFr = JSON.stringify(argResponse.data.trainingContentFr);
				trainingContentVersion = JSON.stringify(argResponse.data.trainingContentVersion);
				activateDate = JSON.stringify(argResponse.data.activateDate);
				console.log(logPrefix + sMethod + "argResponse : " + JSON.stringify(argResponse));
				console.log(logPrefix + sMethod + "trainingContentId : " + trainingContentId );
				console.log(logPrefix + sMethod + "trainingContentEn : " + trainingContentEn );
				console.log(logPrefix + sMethod + "trainingContentFr : " + trainingContentFr );
				console.log(logPrefix + sMethod + "trainingContentVersion : " + trainingContentVersion );
				console.log(logPrefix + sMethod + "activateDate : " + activateDate );
				openPDF(argResponse.data.trainingContentEn, "trainingContentEn" );
        	} catch (e) {
        		console.log(logPrefix + sMethod + "Exception : " + e);
        	}
        } else {
			model.set('trainingContentSuccessFlag', false);
		}
    }
   
    function retrieveTrainingContentFailure(argResponse) {
    	var sMethod = "retrieveTrainingContentFailure(argResponse)";
        console.log(logPrefix + sMethod);
        
        new WICI.LoadingIndicatorController().hide();
		model.set('trainingContentSuccessFlag', false);
    }
    // ---------------------------------------------------------------------------------------
    function openPDF(resData, fileName) {
        var ieEDGE = navigator.userAgent.match(/Edge/g);
        var ie = navigator.userAgent.match(/.NET/g); // IE 11+
        var oldIE = navigator.userAgent.match(/MSIE/g); 
        var bytes = new Uint8Array(resData); //use this if data is raw bytes else directly pass resData
        var blob = new window.Blob([bytes], { type: 'application/pdf' });
        if (ie || oldIE || ieEDGE) {
           window.navigator.msSaveBlob(blob, fileName);
        }
        else {
           var fileURL = URL.createObjectURL(blob);
           var win = window.open();
           win.document.write('<iframe src="data:base64' + fileURL + '" frameborder="0" style="border:0; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%;" allowfullscreen></iframe>'); 
           
        }
    }
};
