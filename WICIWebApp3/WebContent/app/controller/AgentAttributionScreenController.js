ensureNamespaceExists();
WICI.AgentAttributionScreenController = function(activationItems, argTranslator, argMessageDialog) {
    var logPrefix = '[WICI.AgentAttributionScreenController]::';
    var screenName = "AgentAttributionScreen";
    
    var sMethod = 'constructor() ';
    console.log(logPrefix + sMethod);    
    
    var screenID = "#" + screenName;
    var $screenContainer = $(screenID);
    this.isShown = false;
    
    var translator;
    var messageDialog;
    var connectivityController = null;
    
    this.show = show;
    this.init = init;
    this.hide = hide;
    this.destroy = destroy;
    
    var self = this;
    var flow = null;
    
    var refs = {
    	agentID				:	"#agentAttributionScreen_agentIDTextField",
    	user_agent_language_choser    :   '#user_agent_language_choser',
    	newPasswordField	:	"#newPasswordField",
    	submitButton		: 	"#agentAttributionScreen_submitButton",
    	create_CheckField	:	"#create_CheckField",
    	update_CheckField	:	"#update_CheckField",
    	delete_CheckField	:	"#delete_CheckField",
    	search_CheckField	:	"#search_CheckField",
    };
    
    var loginModel = activationItems.getModel('loginScreen');
    
    var model =new WICI.BaseModel({
        name: 'agentAttributionScreen',
        refs: refs,
        data:[
            {name: 'agentID', 
            	value: null,
            	validation: {
                    type: 'format',
                    message: '',
                    matcher: /^[a-zA-Z0-9]{1,7}$/,
                    group: [1]
                }
            },
            {name: 'userOperation',  value: null, validation: null },
            {name: 'locale',  value: null, validation: null },
        ]
    });

    // ---------------------------------------------------------------------------------------

    function init(argFlow, argState, argRetrievalParams, argResponse) {
        var sMethod = 'init() ';
        console.log(logPrefix + sMethod + " argState = " + argState + ", argRetrievalParams = " + argRetrievalParams + ", argResponse = " + argResponse);
        this.isShown = false;
        
        flow = argFlow;
        translator = argTranslator; 
        messageDialog = argMessageDialog;
        
        if (translator) {
            app.language = new WICI.AppLanguage();
            app.language.init(translator);
        } else {
            console.log(logPrefix + ' ERROR: Translator is NULL');
        }
        
        connectivityController = new WICI.ConnectivityController(new WICI.ConnectionStatus(), messageDialog, translator, WICI.AppConfig.ConnectivityConfig);
        connectivityController.init();
        
        createView();
        createSlider();
        bindEvents();
        
        setToggleLanguageSlider(translator.getCurrentLanguageFSDPFormat());
        setFrenchlogo();
        
        syncUserData();
    }
    
  // ---------------------------------------------------------------------------------------
    function setFrenchlogo() {
        if (!translator.currentLanguageEnglish()) {
            //translator.changeLogoToFrench();
            app.translationExtender.changeLogoToFrench();
        }
    }
  // --------------------------------------------------------------------------------------- 
    function setToggleLanguageSlider(language) {
        console.log('setToggleLanguageSlider : ' + language);
        $(refs.user_agent_language_choser).val(language);
        $(refs.user_agent_language_choser).slider("refresh");
    }
    function show() {    	
        var sMethod = 'show() ';
        console.log(logPrefix + sMethod);
        
        $screenContainer.show();        
        translator.run(screenName);
        app.selectorReduceHelper.init();
        this.isShown=true;
    }
    
 // ---------------------------------------------------------------------------------------  
    function createSlider() {
        $(refs.user_agent_language_choser).slider();
    }

    function hide() {    	
        var sMethod = 'hide() ';
        console.log(logPrefix + sMethod);

        $(".pageHeader").remove();        
        $screenContainer.hide();        
        this.isShown=false;
    }
    
    function destroy(){
        var sMethod = 'destroy() ';
        console.log(logPrefix + sMethod);

    	hide();
    	app.navigationController.adhocPendingScreen = null;
    }

    // ---------------------------------------------------------------------------------------

    function createView() {
        var sMethod = 'createView() ';
        console.log(logPrefix + sMethod);

        $screenContainer.empty();
        assembleNavigationBarAtTop();
        
        assemblePageHTML($screenContainer, "#WICI"+screenName+"-template");

        //$screenContainer.addClass("breadcrumbPadding");
        $screenContainer.addClass("pageHeaderPadding");
    }

    // ---------------------------------------------------------------------------------------

    function assembleNavigationBarAtTop() {
        $("#pageHeader-template").template("pageHeader");
        $.tmpl("pageHeader", {
            "logo_En" : translator.currentLanguageEnglish(),
            "settingsButtonId" : "PendingScreen_SettingsButton"
        }).appendTo(screenID);
        $('#PendingScreen_SettingsButton').addClass('rightPosition');
    }
    
    // ---------------------------------------------------------------------------------------
    function assemblePageHTML($element, templateName) {
        $(templateName).template("AgentAttributionScreen");
        
        $.tmpl("AgentAttributionScreen",
            {
                activationItems: activationItems
            }
        ).appendTo($element);
    }
    
    function syncUserData() {
    	var sMethod = 'syncUserData() ';
        console.log(logPrefix + sMethod);
        
        model.set('agentID', $(refs.agentID).val().toUpperCase());
        if($(refs.create_CheckField).is(':checked')) {
        	model.set('userOperation', "create");
        } else if($(refs.update_CheckField).is(':checked')) {
        	model.set('userOperation', "update");
        } else if($(refs.delete_CheckField).is(':checked')) {
        	model.set('userOperation', "delete");
        } else if($(refs.search_CheckField).is(':checked')) {
        	model.set('userOperation', "search");
        }
        
        if(translator.getCurrentLanguageFSDPFormat() != null) {
        	if(translator.getCurrentLanguageFSDPFormat() == "F") {
            	model.set('locale', "Fr");
            } else {
            	model.set('locale', "En");
            }
        }

        console.log(logPrefix + sMethod + ' model data: ' + model.toString());
    }
    
    function bindEvents() {
        var sMethod = 'bindEvents() ';
        console.log(logPrefix + sMethod + loginModel.get('rollId'));
        
        $(refs.submitButton).click(function(){
        	var sMethod = 'submitButton() onClick :: ';
            console.log(logPrefix + sMethod);
            
            if(isValid()) {
            	disablePasswordField();
            	syncUserData();
            	invokeAgent(loginModel.get('employerID').toUpperCase(), loginModel.get('agentID').toUpperCase(), 
            			model.get('agentID'), model.get('userOperation'), model.get('locale'), loginModel.get('rollId'), handleSuccessAgent, handleFailedAgent);
            }
        });
        
        $(refs.user_agent_language_choser).on("change", function() {
            translator.toggleLanguage(true);
            app.language.setLanguage(translator.getCurrentLanguageFSDPFormat());
        });
        
        $(refs.create_CheckField).change(function(){
        	var sMethod = 'create_CheckField() onChange :: ';
            console.log(logPrefix + sMethod);
            
        	disablePasswordField();
        	clearAgentIdField();
        });
        
        $(refs.update_CheckField).change(function(){
        	var sMethod = 'update_CheckField() onChange :: ';
            console.log(logPrefix + sMethod);
            
        	disablePasswordField();
        	clearAgentIdField();
        });
        
        $(refs.delete_CheckField).change(function(){
        	var sMethod = 'delete_CheckField() onChange :: ';
            console.log(logPrefix + sMethod);
            
        	disablePasswordField();
        	clearAgentIdField();
        });
        
        $(refs.search_CheckField).change(function(){
        	var sMethod = 'search_CheckField() onChange :: ';
            console.log(logPrefix + sMethod);
            
        	disablePasswordField();
        	clearAgentIdField();
        });
    }
    
    function invokeAgent(argEmployerID, argAgentID, argUserName, argUserOperation, argLocale, argRollId, argSuccessCB, argFailureCB) {
    	var sMethod = 'invokeAgent() ';
    	console.log(logPrefix + sMethod + " employerID : " + loginModel.get('employerID').toUpperCase());
    	
    	connectivityController.Agent(argEmployerID, argAgentID, argUserName, argUserOperation, argLocale, argRollId, argSuccessCB, argFailureCB);
    }
    
    function handleSuccessAgent(argResponse) {
    	var sMethod = 'handleSuccessAgent() ';
    	console.log(logPrefix + sMethod + JSON.stringify(argResponse));
    	
    	if(!argResponse.error) {
    		// statusCode 3000 indicates Create Agent
    		if(argResponse.data.statusCode == "3000") {
        		enablePasswordField(argResponse.data.password);
    		}
    		// statusCode 4000 indicates Agent already Exist
    		else if(argResponse.data.statusCode == "4000") {
    			 messageDialog.close(translator.translateKey("agentLoginScreen_messageDialogAgentExistMsg" ),
        	       		translator.translateKey("agentLoginScreen_messageDialogTitle"), $.noop);
    		}
    		// statusCode 3001 indicates Update Agent
    		else if(argResponse.data.statusCode == "3001") {
        		 messageDialog.confirmAgent(translator.translateKey("agentLoginScreen_messageDialogUpdateMsg" ) + argResponse.data.agentId,
         				translator.translateKey("agentLoginScreen_messageDialogEnrollmentDate" ) 
         				+ (argResponse.data.enrollmentDate).toUpperCase(), 
         				updateConfirmationYes, updateConfirmationNo, 
         				translator.translateKey("agentLoginScreen_messageDialogTitle"), translator.translateKey("confirmDialog_defaultTitle"),
         				translator.translateKey("agentLoginScreen_messageDialogCancel"));
    		}
    		// statusCode 3002 indicates Delete Agent
    		else if(argResponse.data.statusCode == "3002") {
        		 messageDialog.confirmAgent(translator.translateKey("agentLoginScreen_messageDialogDeleteMsg" ) + argResponse.data.agentId,
        				translator.translateKey("agentLoginScreen_messageDialogEnrollmentDate" ) 
        				+ (argResponse.data.enrollmentDate).toUpperCase(), 
        				deleteConfirmationYes, deleteConfirmationNo, 
        				translator.translateKey("agentLoginScreen_messageDialogTitle"), translator.translateKey("confirmDialog_defaultTitle"),
        				translator.translateKey("agentLoginScreen_messageDialogCancel"));
    		}
    		// statusCode 3003 indicates Search Agent
    		else if(argResponse.data.statusCode == "3003") {
        		 messageDialog.close(translator.translateKey("agentLoginScreen_messageDialogSearchMsg" ) + " " + argResponse.data.agentId + "<br>"
        				+ translator.translateKey("agentLoginScreen_messageDialogEnrollmentDate" ) 
        				+ (argResponse.data.enrollmentDate).toUpperCase(),
        	       		translator.translateKey("agentLoginScreen_messageSearchDialogTitle"), translator.translateKey("agentLoginScreen_messageDialogClose"));
    		}
    		// statusCode 3004 indicates Search Agent not Found
    		else if(argResponse.data.statusCode == "3004") {
        		 messageDialog.close(translator.translateKey("agentLoginScreen_messageDialogAgentNotFoundMsg" ),
        	       		translator.translateKey("agentLoginScreen_messageDialogTitle"), translator.translateKey("agentLoginScreen_messageDialogClose"));
    		}
    	}else{
    		// No  messages has given in the Docs if error is true
    	}
    }
    
    function updateConfirmationYes(){
    	var sMethod = 'updateConfirmationYes() ';
    	console.log(logPrefix + sMethod);
    	
    	invokeConfirmUpdate(loginModel.get('employerID').toUpperCase(), loginModel.get('agentID').toUpperCase(), 
    			model.get('agentID'), "confirmUpdate", model.get('locale'), loginModel.get('rollId'), successConfirmUpdateCallback, failedConfirmUpdateCallback);
    }
    
    function updateConfirmationNo(){
    	var sMethod = 'updateConfirmationNo() ';
    	console.log(logPrefix + sMethod);
    }
    
    function invokeConfirmUpdate(argEmployerID, argAgentID, argUserName, argUserOperation, argLocale, argRollId, argSuccessCB, argFailureCB) {
    	var sMethod = 'invokeConfirmUpdate() ';
    	console.log(logPrefix + sMethod);
    	
    	connectivityController.Agent(argEmployerID, argAgentID, argUserName, argUserOperation, argLocale, argRollId, argSuccessCB, argFailureCB);    	
    }
    
    function successConfirmUpdateCallback(argResponse){
    	var sMethod = 'successConfirmUpdateCallback() ';
    	console.log(logPrefix + sMethod);
    	
    	console.log(JSON.stringify(argResponse));
    	// statusCode 3005 indicates Updated Successfully
		if(argResponse.data.statusCode == "3005") {
    		 enablePasswordField(argResponse.data.password);
		}
		// statusCode 3006 indicates not Updated
		else if(argResponse.data.statusCode == "3006") {
			messageDialog.close(translator.translateKey("agentLoginScreen_messageDialogNotUpdatedMsg" ),
    	       		translator.translateKey("agentLoginScreen_messageDialogTitle"), translator.translateKey("agentLoginScreen_messageDialogClose"));
		}
    }
     function failedConfirmUpdateCallback(){
    	 var sMethod = 'failedConfirmUpdateCallback() ';
     	 console.log(logPrefix + sMethod);
     	 
     	console.log(JSON.stringify(argResponse));
     }    
        
    function deleteConfirmationYes(){
    	var sMethod = 'deleteConfirmationYes() ';
    	console.log(logPrefix + sMethod);
    	
    	invokeConfirmDelete(loginModel.get('employerID').toUpperCase(), loginModel.get('agentID').toUpperCase(), 
    			model.get('agentID'), "confirmDelete", model.get('locale'), loginModel.get('rollId'), successConfirmDeleteCallback, failedConfirmDeleteCallback);
    }
    
    function deleteConfirmationNo(){
    	var sMethod = 'deleteConfirmationNo() ';
    	console.log(logPrefix + sMethod);
    }
    
    function invokeConfirmDelete(argEmployerID, argAgentID, argUserName, argUserOperation, argLocale, argRollId, argSuccessCB, argFailureCB) {
    	var sMethod = 'invokeConfirmDelete() ';
    	console.log(logPrefix + sMethod);
    	
    	connectivityController.Agent(argEmployerID, argAgentID, argUserName, argUserOperation, argLocale, argRollId, argSuccessCB, argFailureCB);    	
    }
    
    function successConfirmDeleteCallback(argResponse){
    	var sMethod = 'successConfirmDeleteCallback() ';
    	console.log(logPrefix + sMethod);
    	
    	// statusCode 3007 indicates Deleted Successfully
		if(argResponse.data.statusCode == "3007") {
    		 messageDialog.close(translator.translateKey("agentLoginScreen_messageDialogDeletedSuccessfullyMsg" ),
    	       		translator.translateKey("agentLoginScreen_messageDialogTitle"), translator.translateKey("agentLoginScreen_messageDialogClose"));
		}
		// statusCode 3008 indicates not Deleted
		else if(argResponse.data.statusCode == "3008") {
			// Text is not given in the docs
    		// messageDialog.close(translator.translateKey("agentLoginScreen_messageDialogNotDeletedMsg" ),
    	       	//	translator.translateKey("agentLoginScreen_messageDialogTitle"), translator.translateKey("agentLoginScreen_messageDialogClose"));
		}
    }
     function failedConfirmDeleteCallback(){
    	 var sMethod = 'failedConfirmDeleteCallback() ';
     	 console.log(logPrefix + sMethod);
     	 
     	console.log(JSON.stringify(argResponse));
     }
    
    function enablePasswordField(argPassword) {
        var passwordRow = $(refs.newPasswordField).closest('tr');

        if(passwordRow.hasClass('hidden')){
           $(refs.newPasswordField).closest('tr').removeClass('hidden');
           $(refs.newPasswordField).val(argPassword);
        }
    }

    function disablePasswordField() {
        var passwordRow = $(refs.newPasswordField).closest('tr');

        if(!passwordRow.hasClass('hidden')){
           $(refs.newPasswordField).closest('tr').addClass('hidden');
        }
    }
    
    function clearAgentIdField() {
    	var sMethod = 'clearAgentIdField() ';
    	console.log(logPrefix + sMethod);
    	$(refs.agentID).val("");
    }
    
    function handleFailedAgent(argResponse) {
    	var sMethod = 'handleFailedAgent() ';
    	console.log(logPrefix + sMethod + JSON.stringify(argResponse));
    }
    
    function isValid() {
    	var sMethod = 'isValid() ';
        console.log(logPrefix + sMethod);
        
    	syncUserData();
    	
        if (app.validationsOn) {
        	app.validationDecorator.clearErrArrtibute();
        	
        	if(model.isUserAgentId_valid(model.get('agentID'))) {
        		console.log("model.isUserAgentId_valid() :: true");
        		return true;
        	} else {
        		console.log("model.isUserAgentId_valid() :: false");
        		 var rez = model.validate(1);
        		 rez[0].uiid = refs.agentID;
        		console.log("rez.length ::"+ rez.length);
                if (rez.length > 0) {                    
                	app.validationDecorator.applyErrAttribute(rez);
                    
                }
                return false;
        	}
           	/*var rez = model.validateUserAgentId(1);
           	if(rez != null) {
           		rez[0].uiid = refs.agentID;
                console.log("rez.length ::"+ rez.length);
                if (rez.length > 0) {                    
                	app.validationDecorator.applyErrAttribute(rez);
                    return false;
                }
           	} else {
            	return true;
            }*/
        }
    }
 };
