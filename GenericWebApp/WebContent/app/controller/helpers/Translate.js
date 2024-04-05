ensureNamespaceExists();

GENERICWEBAPP.Translate = function(translationLibrary, languages) {
	var GENERICWEBAPP_PERSIST_LANGUAGE = "GENERICWEBAPP_PERSIST_LANGUAGE";
	var currentLanguage = languages.english;
	var alternateLanguage = languages.french;

	this.init = init;
	this.run = run;
	this.translateKey = translateKey;
	this.toggleLanguage = toggleLanguage;
	this.getCurrentLanguage = getCurrentLanguage;
	this.getCurrentLanguageFSDPFormat = getCurrentLanguageFSDPFormat;
	this.getAlternateLanguage = getAlternateLanguage;
	this.currentLanguageEnglish = currentLanguageEnglish;	
	
	function init() {
		setInitialLanguage();
		this.run();
	}
	function getCurrentLanguage() {
		return currentLanguage;
	}
	function currentLanguageEnglish() {
		return currentLanguage === languages.english;
	}
	function getCurrentLanguageFSDPFormat() {
		return currentLanguage === languages.french ? "F" : "E";
	}

	function getAlternateLanguage() {
		return alternateLanguage;
	}

	function run(pageToTranslateId, useAlternateLanguage) {
		var translateConf = buildTranslateConf(useAlternateLanguage);
		setDictionary(translateConf.language);
		translate(pageToTranslateId, translateConf.callback);
		translateClasses(pageToTranslateId);
        translateImgSources(pageToTranslateId);
	}

	function buildTranslateConf(useAlternateLanguage) {
		var translateConf = {
			language : currentLanguage,
			callback : $.noop
		};
		if (useAlternateLanguage) {
			translateConf.language = alternateLanguage;
			translateConf.callback = resetDictionary;
		}
		return translateConf;
	}

	function resetDictionary() {
		setDictionary(currentLanguage);
	}

	function translate(pageToTranslateId, callback) {
		$(createSelectionArgument(pageToTranslateId)).each(function() {
			$(this).html(translateKey($(this).attr("data-translationKey")));
		});
		callback();
	}

    function translateClasses(pageToTranslateId) {
        $((pageToTranslateId ? "#" + pageToTranslateId + " " : "")  + "[data-lang-class]").each(function() {
            if (currentLanguageEnglish()) {
                $(this).removeClass('fr');
            } else {
                $(this).addClass('fr');
            }
        });
    }

    function translateImgSources(pageToTranslateId) {
        $((pageToTranslateId ? "#" + pageToTranslateId + " " : "")  + "[data-lang-src]").each(function() {
            var src = $(this).prop('src');
            if (currentLanguageEnglish()) {
                $(this).prop('src', src.replace('_fr', '_en'));
            } else {
                $(this).prop('src', src.replace('_en', '_fr'));
            }
        });
    }

	function translateKey() {
		return translationLibrary._(arguments[0], _.rest(arguments, 1));
	}

	function createSelectionArgument(pageToTranslateId) {
		return (pageToTranslateId ? "#" + pageToTranslateId + " " : "")
				+ "[data-translationKey]";
	}

	function toggleLanguage(needToRefreshFlips) {
		if (currentLanguage === languages.english) {
			currentLanguage = languages.french;
			moment.lang('fr');
			alternateLanguage = languages.english;
		} else {
			currentLanguage = languages.english;
			moment.lang('en');
			alternateLanguage = languages.french;
		}
		persistCurrentLanguage();
		run();
		if (!needToRefreshFlips) {
			// Notify subscribers about refreshFlipsEvent event
			$.publish('refreshFlipsEvent', currentLanguage);
		}

		// Notify subscribers about languageChangedEvent event
		$.publish('languageChangedEvent', currentLanguage);
	}
	
	function setDictionary(language) {
		//translationLibrary.setDictionary(GENERICWEBAPP.LocalStorageHelper(window).getVocabulary(language));
	}

	function setInitialLanguage() {
		if (window.localStorage
				&& window.localStorage.getItem(GENERICWEBAPP_PERSIST_LANGUAGE)) {
			var language = window.localStorage.getItem(GENERICWEBAPP_PERSIST_LANGUAGE);
			if (language === languages.english) {
				alternateLanguage = languages.french;
				currentLanguage = languages.english;
				moment.lang('en');
			} else if (language === languages.french) {
				alternateLanguage = languages.english;
				currentLanguage = languages.french;
				moment.lang('fr');
			}
		}
	}

	function persistCurrentLanguage() {
		if (window.localStorage) {
			window.localStorage.setItem(GENERICWEBAPP_PERSIST_LANGUAGE, currentLanguage);
		}
	}
};