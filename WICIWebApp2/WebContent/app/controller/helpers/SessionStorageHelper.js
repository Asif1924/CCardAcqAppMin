WICI.SessionStorageHelper =  function (window /*dependency injection for testing*/) { 

    "use strict";
    
    function _getItem(key, defaultValue, undefined) {
        var sessionStorageValue = JSON.parse(window.sessionStorage.getItem(key));
        if (defaultValue === undefined) {
            defaultValue = null;
        }
        return (sessionStorageValue !== null) ? sessionStorageValue : defaultValue;
    }

    function _setItem(key, value) {
        window.sessionStorage.setItem(key, JSON.stringify(value));
    }

    function getLastPage () {
        return _getItem(WICI.AppConfig.sessionStorageKeys[lan], WICI["dictionary_"+lan]);
    }

    function  setVocabulary (lan, obj) {
        if (contains(WICI.AppConfig.LanguageEnum, lan)) {
            _setItem(WICI.AppConfig.sessionStorageKeys[lan], obj);
        } else {
            console.log("WARNING! Tried to set a vocabulary for an unsupported language");
        }
    }

    return {
        getLastPage: _getItem.bind(null, "lastpage", "loginPage"),
        setLastPage: _setItem.bind(null, "lastpage")
    };

};