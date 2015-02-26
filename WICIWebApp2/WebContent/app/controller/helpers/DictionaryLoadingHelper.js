WICI.DictionaryLoadingHelper =  function (messageDialog, translator, argDictionaryFromLoginResponse, WICI) { 
    "use strict";

    var prefix = "DictionaryLoadingHelper";
    var connectivityController, localStorageHelper, loadingIndicator, pendingRequests, dictionaryInfoHelper, previousPopup;

    connectivityController = new WICI.ConnectivityController(new WICI.ConnectionStatus(), messageDialog, translator, WICI.AppConfig.ConnectivityConfig);
    connectivityController.init();

    localStorageHelper = new WICI.LocalStorageHelper(window);
    loadingIndicator = new WICI.LoadingIndicatorController();
    dictionaryInfoHelper = new WICI.DictionaryInfoHelper(argDictionaryFromLoginResponse);
    pendingRequests = [];
    console.log(localStorageHelper);
    var previousPopup;

    this.determineUpdateDictionaryOrQuit = determineUpdateDictionaryOrQuit;
    /**
     * [determineUpdateDictionaryOrQuit description]
     * @return {[defer]} [description] an array of deffered objects for ajax calls
     */
    function determineUpdateDictionaryOrQuit() {
    	var currVersion = localStorageHelper.getVersion();
        previousPopup = false;
        console.log(currVersion);
        console.log(dictionaryInfoHelper.getLatestDictionaryVersion());
        if( dictionaryInfoHelper.dictionaryInfoExists(argDictionaryFromLoginResponse) ){
        	if (currVersion < dictionaryInfoHelper.getLatestDictionaryVersion()) {
                for (var language in WICI.AppConfig.LanguageEnum) {
                    var lan = WICI.AppConfig.LanguageEnum[language];
                    pendingRequests.push(loadDictionary(lan, dictionaryInfoHelper.getOlderDictionaryAllowable()));
                }
                return pendingRequests;
        	} else {
                console.log(prefix + "Dictionaries up to date");
            }        	
        }else{
        	loadingIndicator.hide();
        	getDictionaryErrorCallback(false);
        }
        	       	
        	
    }

       /**
     * [loadDictionary] loads an object with translations from the url
     * @param  lan - language
     * @param  url
     */
    function loadDictionary (argLanguage, bypassable) {
       return connectivityController.loadDictionary(
        		argLanguage,
                dictionaryInfoHelper.getDictionaryUrl(argLanguage),
                getDictionarySuccessCallback.bind(null, argLanguage),
                getDictionaryErrorCallback.bind(null,bypassable),
                getDictionaryBeforesendCallback,
                getDictionaryOnCompleteCallback
            );
    }
    
    function getDictionarySuccessCallback (lan, argument) {
        localStorageHelper.setVocabulary(lan, WICI['dictionary_' + lan]);
        localStorageHelper.setVersion(dictionaryInfoHelper.getLatestDictionaryVersion());
        translator.run();
    }

    function getDictionaryErrorCallback (bypassable) {
    	
        if (bypassable) {
            console.log(prefix + "could not update but continuing");
            
        } else {
            
                loadingIndicator.hide();
                if (!previousPopup) {
                    messageDialog.error( translator.translateKey("dictionary_loading_error"), translator.translateKey("errorDialog_defaultTitle"), $.noop);
                    previousPopup = true;
                }
                throw new Error(prefix + "Unable to update");
            
        }
        
    }

    function getDictionaryBeforesendCallback () {
        loadingIndicator.show();
    }

    function getDictionaryOnCompleteCallback () {
        loadingIndicator.hide();
    }
    
    
    return {
        loadDictionary:  loadDictionary,
        determineUpdateDictionaryOrQuit: determineUpdateDictionaryOrQuit
    };
};