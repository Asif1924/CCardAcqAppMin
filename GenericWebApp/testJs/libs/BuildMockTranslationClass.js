BuildMockTranslationClass = function(translationLibrary) {

	translationLibrary = translationLibrary || {
		_ : $.noop,
		setDictionary : $.noop
	};

	EASYFINANCIAL.dictionary_en = {
		language : "en"
	};

	EASYFINANCIAL.dictionary_fr = {
		language : "fr"
	};

	var translate = new EASYFINANCIAL.Translate(translationLibrary, EASYFINANCIAL.AppConfig.LanguageEnum);
	translate.init();
	return translate;
};
