ensureNamespaceExists();

WICI.AppLanguage = function () {  
    var logPrefix = ' ---- [WICI.AppLanguage]::';
    
    var appLanguage = null;
    var translate = null;
    
    this.init = function(translator) {
		var sMethod = 'init() ';
        console.log(logPrefix + sMethod);
        translate = translator;
        try {
        	if (cordova) {
                WICI.cordovaExecDeferred('AppLanguagePlugin', 'getAppLanguage')
                    .done(retrieveStoredLanguageSuccess).fail(retrieveStoredLanguageFailure);
        	} else {
        		console.log(logPrefix + sMethod + "- Initiate ERROR: cordova === NULL");
        	}
        } catch (err) {
            console.log(logPrefix + sMethod + "- Initiate ERROR: " + err);            
        }
    };
    
    function retrieveStoredLanguageSuccess(result) {    	
        // Set app language
        if (result) {
        	appLanguage = result;
        } else {
        	appLanguage = 'E'; // set app language to English in case if no result was retrieved
        }
        	
		if ((appLanguage) && (translate) && (appLanguage != translate.getCurrentLanguageFSDPFormat())) {
			translate.toggleLanguage();
		}
    }

    function retrieveStoredLanguageFailure() {		                
        if (translate) {
        	appLanguage = translate.getCurrentLanguageFSDPFormat();
        }
    }
    
    // ===========================================================================================
	
	this.getLanguage = function() {
        var sMethod = 'getLanguage() ';
        console.log(logPrefix + sMethod);
        
        return appLanguage;
	};
	
	this.setLanguage = function(language) {
        var sMethod = 'setLanguage() ';
        console.log(logPrefix + sMethod);		
        
        appLanguage = language;
        
        try {
        	if (cordova) {
                WICI.cordovaExecDeferred('AppLanguagePlugin', 'setAppLanguage', [language])
                    .done(storeLanguageSuccess).fail(storeLanguageFailure);
        	} else {
        		console.log(logPrefix + sMethod + "- Initiate ERROR: cordova === NULL");
        	}
        } catch (err) {
            console.log(logPrefix + sMethod + "::Initiate ERROR::" + err);            
        }
	};
	
    function storeLanguageSuccess(/*result*/) {
		var sMethod = 'storeLanguageSuccess():: ';
        console.log(logPrefix + sMethod);
    }

    function storeLanguageFailure() {		
        
    }
};