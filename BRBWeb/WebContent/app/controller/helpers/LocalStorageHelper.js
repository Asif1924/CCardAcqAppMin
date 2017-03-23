// US4281
BRB.LocalStorageHelper =  function (window /*dependency injection for testing*/) { 

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
        if (contains(BRB.AppConfig.LanguageEnum, lan)) {
            return _getItem(BRB.AppConfig.localStorageKeys[lan], BRB["dictionary_"+lan]);
        } else {
            BRB.Log("WARNING! Tried to get a vocabulary for an unsupported language");
            return null;
        }
    }

    function  setVocabulary (lan, obj) {
        if (contains(BRB.AppConfig.LanguageEnum, lan)) {
            _setItem(BRB.AppConfig.localStorageKeys[lan], obj);
        } else {
            BRB.Log("WARNING! Tried to set a vocabulary for an unsupported language");
        }
    }

    return {
        getVersion: _getItem.bind(null, BRB.AppConfig.localStorageKeys.version),
        setVersion: _setItem.bind(null, BRB.AppConfig.localStorageKeys.version),
        getVocabulary: getVocabulary,
        setVocabulary: setVocabulary
    };

};