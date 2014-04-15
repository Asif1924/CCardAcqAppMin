ensureNamespaceExists();

BRB.Translate = function(translationLibrary, languages){
	var BRB_PERSIST_LANGUAGE = "BRB_PERSIST_LANGUAGE";
	
	var currentLanguage = languages.english;
	var alternateLanguage = languages.french;
	
	this.init = init;
	this.run = run;
	this.translateKey = translateKey;
	this.toggleLanguage = toggleLanguage;
	this.getCurrentLanguage = getCurrentLanguage;
	this.getCurrentLanguageFSDPFormat = getCurrentLanguageFSDPFormat;
	this.getAlternateLanguage = getAlternateLanguage;
	this.isCurrentLanguageEnglish = isCurrentLanguageEnglish;
	
	function init(defaultLanguage) {		
		if (defaultLanguage && !_.isEmpty(defaultLanguage)) {
			currentLanguage = defaultLanguage;
			persistCurrentLanguage();
		}		
		
		setInitialLanguage();
		run();
	}
	
	function getCurrentLanguage(){
		return currentLanguage;
	}
	
	function isCurrentLanguageEnglish(){
		return currentLanguage === languages.english;
	}
	function getCurrentLanguageFSDPFormat(){
		return currentLanguage === languages.french ? "F" : "E";
	}
	
	function getAlternateLanguage(){
		return alternateLanguage;
	}	

	function run(pageToTranslateId, useAlternateLanguage){
		var translateConf = buildTranslateConf(useAlternateLanguage);
		setDictionary(translateConf.language);
		translate(pageToTranslateId, translateConf.callback);
	}
	
	function buildTranslateConf(useAlternateLanguage){
		var translateConf = {
			language : currentLanguage,
			callback : $.noop
		};
		if(useAlternateLanguage){
			translateConf.language = alternateLanguage;
			translateConf.callback = resetDictionary;
		}
		return translateConf;
	}
	
	function resetDictionary(){
		setDictionary(currentLanguage);
	}
	
	function translate(pageToTranslateId, callback){
		$(createSelectionArgument(pageToTranslateId)).each(function(){
			$(this).html(translateKey($(this).attr("data-translationKey")));
		});
		callback();
	}
	
	function translateKey(){
		return translationLibrary._(arguments[0], _.rest(arguments, 1));
	}
	
	function createSelectionArgument(pageToTranslateId){
		return ( pageToTranslateId ? "#" + pageToTranslateId  + " " : "" ) + "[data-translationKey]";
	}
	
	function toggleLanguage(){
		$('#choseProduct').trigger('translationStart');
		if(currentLanguage === languages.english){
			currentLanguage = languages.french;
			alternateLanguage = languages.english;
			moment.lang('fr');
		} else {
			currentLanguage = languages.english;
			alternateLanguage = languages.french;
			moment.lang('en');
		}		
		persistCurrentLanguage();
		run();
		
		// Notify subscribers about languageChangedEvent event
		$.publish('languageChangedEvent', currentLanguage);
	}
	
	function setDictionary(language){
		translationLibrary.setDictionary(BRB["dictionary_" + language]);
	}
	
	function setInitialLanguage() {
		if (window.localStorage && window.localStorage.getItem(BRB_PERSIST_LANGUAGE)) {
			currentLanguage = window.localStorage.getItem(BRB_PERSIST_LANGUAGE);
			if (currentLanguage === languages.english) {
				alternateLanguage = languages.french;
				moment.lang('en');
			}
			else if (currentLanguage === languages.french) {
				alternateLanguage = languages.english;
				moment.lang('fr');
			} else {
				currentLanguage = languages.english;
				alternateLanguage = languages.french;
				moment.lang('en');
			}
		}
	}
	
	function persistCurrentLanguage() {
		if (window.localStorage) {
			window.localStorage.setItem(BRB_PERSIST_LANGUAGE, currentLanguage);
		}
	}
};