ensureNamespaceExists();

WICI.TrainingModuleScreensController = function(activationItems, argTranslator,argMessageDialog) {
	 var logPrefix = '[WICI.TrainingModuleScreensController]::';
	 var $screenContainer = $("#TrainingModuleScreens");
	 var screenname = "trainingModuleScreens_PageContents";
	 var translator = null;
     var messageDialog = null;
     var isDebugMode;
    
    this.show = show;
    this.init = init;
    this.hide = hide;
    var selectedProvince = "";
    
    var trainingContentResponse = null; 
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
    		nextButtonId : '#trainingScreen2_next',
    		language_choser2: '#trainingModuleScreen2_LanguageButton',
    		pdf: '#pdf'
    };

    var model = new WICI.BaseModel({
        name : 'trainingModuleScreen',
        refs : refs,
        data : [ 
        	{ name: 'trainingContentVersion', value: null, validation: null },
        	{ name : 'trainingContentSuccessFlag', value : null, 	validation : null, notField: true },
        	{ name : 'trainingContentResponseData', value : null, 	validation : null, notField: true },
        ]
    });
    this.innerModel = model;
    // ---------------------------------------------------------------------------------------
    function init(argFlow) {
        var sMethod = 'init() ';
        console.log(logPrefix + sMethod);
        translator = argTranslator;
        console.log(logPrefix + sMethod + "translator : " + translator);
        flow = argFlow;
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
        translator.run("TrainingModuleScreens");
    }
    // ---------------------------------------------------------------------------------------
    function hide() {
        $screenContainer.hide();
    }
    // ---------------------------------------------------------------------------------------
    function createView() {
        $screenContainer.empty();
        assembleNavigationBarAtTop();
        //WICI.BreadcrumbsHelper.assembleBreadcrumbs(2, $screenContainer, activationItems);
        assemblePageHTML($screenContainer, "#TrainingModuleScreens-template");
        $screenContainer.addClass("breadcrumbPadding");
    }
   
    // ---------------------------------------------------------------------------------------
    function assembleNavigationBarAtTop() {
        $("#pageHeaderTrainingModule-template").template("pageHeader");
        $.tmpl("pageHeader", {
            "previousButtonId": "trainingModuleScreen2_PrevButton",
            "languageButtonId" : "trainingModuleScreen2_LanguageButton",
        }).appendTo("#TrainingModuleScreens");
    }
   // ---------------------------------------------------------------------------------------
    function assembleNavigationBarAtBottom(){
        $("#pageFooter-template").template("pageFooter");
        $.tmpl("pageFooter", {}).appendTo("#trainingModuleScreens");
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
        $(refs.language_choser2).slider();
    }
    //---------------------------------------------------------------------------------------
    function setToggleLanguageSlider(language) {
        console.log('setToggleLanguageSlider : ' + language);
        $(refs.language_choser2).val(language);
        $(refs.language_choser2).slider("refresh");
    }
    // ---------------------------------------------------------------------------------------
    function bindEvents() {
       var sMethod = 'syncUserData() ';
       console.log(logPrefix + sMethod);
       translator = argTranslator;
       $(refs.nextButtonId).click(function() {
   		 console.log(logPrefix + sMethod + "nextButtonId : click ");
   		 showNextScreen();            
       });
       
       $('.trainingModuleScreen2_PrevButton').click(function() {
			showPrevScreen();
		});
       $.subscribe('translatorFinished',function(){
             
       });

        // Old code here does
        //    $(refs.language_choser2).on("change", function() {
        //        translator.toggleLanguage(true);
        //        app.language.setLanguage(translator.getCurrentLanguageFSDPFormat());
        //        var trainingContent = model.get('trainingContentResponseData');
        //        if (app.translator.getCurrentLanguage() === "en") {
        // 			showTrainingContent(trainingContent.data.trainingContentEn);
        // 		}else{
        // 			showTrainingContent(trainingContent.data.trainingContentFr);
        // 	   }
        //    });


        $(refs.language_choser2).on("change", function() {
           translator.toggleLanguage(true);
           
           new WICI.LoadingIndicatorController().show();           

           app.language.setLanguage(translator.getCurrentLanguageFSDPFormat());
           if(model.get('trainingContentSuccessFlag')){
               var trainingContent = model.get('trainingContentResponseData');
               if (app.translator.getCurrentLanguage() === "en") {
                    showTrainingContent(trainingContent.data.trainingContentEn);
                }else{
                    showTrainingContent(trainingContent.data.trainingContentFr);
               }
               new WICI.LoadingIndicatorController().hide();           

           }else{
               if (app.translator.getCurrentLanguage() === "en") {
                   $(refs.pdf).attr('src', 'app/images/Training_Image_200DPI_1100_en.jpg','_system', 'location=yes');
               }else{
                   $(refs.pdf).attr('src', 'app/images/Training_Image_200DPI_1100_fr.jpg','_system', 'location=yes');
               }  
               new WICI.LoadingIndicatorController().hide();           

           }           
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
        //app.abandonApplicationTriggerActionService.start();
    }
    
   // ---------------------------------------------------------------------------------------
	function showPrevScreen() {
		var sMethod = 'showPrevScreen() ';
		console.log(logPrefix + sMethod);
		flow.back();
	}
	// ---------------------------------------------------------------------------------------
	function retrieveTrainingContent() {
		invokeRetrieveTrainingContent(retrieveTrainingContentSuccess, retrieveTrainingContentFailure);
	}
	// ---------------------------------------------------------------------------------------
	function invokeRetrieveTrainingContent(argSuccessCB, argFailureCB) {
    	var sMethod = "invokeRetrieveTrainingContent() :: ";
    	console.log(logPrefix + sMethod);
    	
    	new WICI.LoadingIndicatorController().show();
    	connectivityController.RetrieveTrainingContent(argSuccessCB,argFailureCB);
        
        //Simulate failure for testing
        //retrieveTrainingContentFailure();
    }
	// ---------------------------------------------------------------------------------------
    function retrieveTrainingContentSuccess(argResponse) {
    	var sMethod = "retrieveTrainingContentSuccess()";
        console.log(logPrefix + sMethod );
        
        new WICI.LoadingIndicatorController().hide();
        if(!argResponse.error) {
        	
        	try {
				model.set('trainingContentSuccessFlag', true);
				trainingContentResponse = argResponse; 
				model.set('trainingContentResponseData', trainingContentResponse);
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
				model.set('trainingContentVersion',trainingContentVersion);
				if (app.translator.getCurrentLanguage() === "en") {
					showTrainingContent(argResponse.data.trainingContentEn);
				}else{
					showTrainingContent(argResponse.data.trainingContentFr);
				}
				
        	} catch (e) {
        		console.log(logPrefix + sMethod + "Exception : " + e);
        	}
        } else {
			model.set('trainingContentSuccessFlag', false);
		}
    }
   // ---------------------------------------------------------------------------------------
    function retrieveTrainingContentFailure(argResponse) {
    	var sMethod = "retrieveTrainingContentFailure(argResponse)";
        console.log(logPrefix + sMethod);
        
        new WICI.LoadingIndicatorController().hide();
		model.set('trainingContentSuccessFlag', false);

        if (app.translator.getCurrentLanguage() === "en") {
            $(refs.pdf).attr('src', 'app/images/Training_Image_200DPI_1100_en.jpg','_system', 'location=yes');
        }else{
            $(refs.pdf).attr('src', 'app/images/Training_Image_200DPI_1100_fr.jpg','_system', 'location=yes');
        }          

    }
    //---------------------------------------------------------------------------------------
    function showTrainingContent(responseData){
    	var sampleArr = responseData;
    	var binary = '';
		var byte = new Uint8Array(sampleArr);
		var len = byte.byteLength;
 		for (var i = 0; i < len; i++) {
			binary += String.fromCharCode( byte[ i ] );
		}				
        console.log(binary);	
        let sliceSize = 512;
        var byteCharacters = atob(binary);
        var byteArrays = [];
 
        for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
               var slice = byteCharacters.slice(offset, offset + sliceSize);
               var byteNumbers = new Array(slice.length);
               for (var i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
               }
            var byteArray = new Uint8Array(byteNumbers);
			    byteArrays.push(byteArray);
        }	
        //var blob = new Blob(byteArrays, { type: "application/pdf" });
        //var blob = new Blob(byteArrays, { type: "image/png" });//image/jpeg
        var blob = new Blob(byteArrays, { type: "image/jpeg" });//image/jpeg
		var  blobURL = URL.createObjectURL(blob);
 		$(refs.pdf).attr('src', blobURL,'_system', 'location=yes');
	    $(refs.nextButtonId).show();
    }
  
};
