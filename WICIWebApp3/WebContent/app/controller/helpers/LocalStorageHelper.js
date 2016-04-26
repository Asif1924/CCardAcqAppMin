WICI.LocalStorageHelper =  function (window /*dependency injection for testing*/) { 

    "use strict";
    function contains(obj, val) {
        for (var prop in obj) {
            if (obj[prop] === val) {
                return true;
            }
        }
        return false;
    }

    function _getItem(key, defaultValue, undefined) {
        var localStorageValue = JSON.parse(window.localStorage.getItem(key));
        if (defaultValue === undefined) {
            defaultValue = null;
        }
        return (localStorageValue !== null) ? localStorageValue : defaultValue;
    }

    function _setItem(key, value) {
        window.localStorage.setItem(key, JSON.stringify(value));
    }

    function getVocabulary (lan) {
        if (contains(WICI.AppConfig.LanguageEnum, lan)) {
            return _getItem(WICI.AppConfig.localStorageKeys[lan], WICI["dictionary_"+lan]);
        } else {
            console.log("WARNING! Tried to get a vocabulary for an unsupported language");
            return null;
        }
    }

    function  setVocabulary (lan, obj) {
        if (contains(WICI.AppConfig.LanguageEnum, lan)) {
            _setItem(WICI.AppConfig.localStorageKeys[lan], obj);
        } else {
            console.log("WARNING! Tried to set a vocabulary for an unsupported language");
        }
    }

    return {
        getVersion: _getItem.bind(null, WICI.AppConfig.localStorageKeys.version),
        setVersion: _setItem.bind(null, WICI.AppConfig.localStorageKeys.version),
        getVocabulary: getVocabulary,
        setVocabulary: setVocabulary
    };

};