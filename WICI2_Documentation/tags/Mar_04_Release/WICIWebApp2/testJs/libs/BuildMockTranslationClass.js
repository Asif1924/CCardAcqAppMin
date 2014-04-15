BuildMockTranslationClass = function(translationLibrary) {

	translationLibrary = translationLibrary || {
		_ : $.noop,
		setDictionary : $.noop
	};

	WICI.dictionary_en = {
		language : "en"
	};

	WICI.dictionary_fr = {
		language : "fr"
	};

	var translate = new WICI.Translate(translationLibrary, WICI.AppConfig.LanguageEnum);
	translate.init();
	return translate;
};
