// US4281
BRB.DictionaryLoadingHelper =  function (messageDialog, translator, argDictionaryInfoResponse, BRB) { 
    "use strict";

    var prefix = "DictionaryLoadingHelper";
    var connectivityController, localStorageHelper, loadingIndicator, pendingRequests, dictionaryInfoHelper, previousPopup;

    connectivityController = new BRB.ConnectivityController(new BRB.ConnectionStatus(), messageDialog, translator, BRB.AppConfig.ConnectivityConfig);
    // connectivityController.init();

    localStorageHelper = new BRB.LocalStorageHelper(window);
    loadingIndicator = new BRB.LoadingIndicatorController();
    dictionaryInfoHelper = new BRB.DictionaryInfoHelper(argDictionaryInfoResponse);
    pendingRequests = [];
    BRB.Log(prefix+" localStorageHelper : "+localStorageHelper);
    var previousPopup;

    BRB.Log(" DictionaryInfoResponse : " + JSON.stringify(argDictionaryInfoResponse));
    
    this.determineUpdateDictionaryOrQuit = determineUpdateDictionaryOrQuit;
    /**
     * [determineUpdateDictionaryOrQuit description]
     * @return {[defer]} [description] an array of deffered objects for ajax calls
     */
    function determineUpdateDictionaryOrQuit() {
    	var currVersion = localStorageHelper.getVersion();
        previousPopup = false;
        BRB.Log(currVersion);
        BRB.Log(dictionaryInfoHelper.getLatestDictionaryVersion());
        if( dictionaryInfoHelper.dictionaryInfoExists(argDictionaryInfoResponse) ){
        	 BRB.Log("currVersion-->" + currVersion + " ,Latest Dic Ver-->" + dictionaryInfoHelper.getLatestDictionaryVersion());
        	//if (currVersion < dictionaryInfoHelper.getLatestDictionaryVersion()) {   -- US3398
        	 if ( ( parseInt(currVersion) > 0 ? parseInt(currVersion)  : 0 ) < parseInt(dictionaryInfoHelper.getLatestDictionaryVersion())) {
        		 BRB.Log(currVersion + " : " + dictionaryInfoHelper.getLatestDictionaryVersion());
                for (var language in BRB.AppConfig.LanguageEnum) {
                    var lan = BRB.AppConfig.LanguageEnum[language];
                    BRB.Log(prefix + "language : " + lan);
                    pendingRequests.push(loadDictionary(lan, dictionaryInfoHelper.getOlderDictionaryAllowable()));
                }
                return pendingRequests;
        	} else {
                BRB.Log(prefix + "Dictionaries up to date");
                return;
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
       BRB.Log(prefix+" loadDictionary() :: " + argLanguage + " : " + bypassable);
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
    	BRB.Log(prefix+" getDictionarySuccessCallback() :: " + lan + " : " + argument);
        localStorageHelper.setVocabulary(lan, BRB['dictionary_' + lan]);
        localStorageHelper.setVersion(dictionaryInfoHelper.getLatestDictionaryVersion());
        translator.run();
    }

    function getDictionaryErrorCallback (bypassable) {
    	BRB.Log(prefix+" getDictionaryErrorCallback() :: " + bypassable);
        if (bypassable) {
            BRB.Log(prefix + "could not update but continuing");
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
        // loadingIndicator.show();
    	new BRB.LoadingIndicatorController().showIdentityVerificationLoading(
				app.translator.translateKey("app_loading"));
    }

    function getDictionaryOnCompleteCallback () {
        loadingIndicator.hide();
    }
    
    return {
        loadDictionary:  loadDictionary,
        determineUpdateDictionaryOrQuit: determineUpdateDictionaryOrQuit
    };
};