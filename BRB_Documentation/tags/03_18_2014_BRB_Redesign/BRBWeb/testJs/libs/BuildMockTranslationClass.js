BuildMockTranslationClass = function(translationLibrary) {
 
	translationLibrary = translationLibrary || {
		_ : $.noop,
		setDictionary : $.noop
	};

	BRB.dictionary_en = {
		language : "en"
	};

	BRB.dictionary_fr = {
		language : "fr"
	};

	var translate = new BRB.Translate(translationLibrary, BRB.AppConfig.LanguageEnum);
	translate.init();
	return translate;
};
