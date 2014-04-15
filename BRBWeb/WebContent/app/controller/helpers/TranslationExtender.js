ensureNamespaceExists();

BRB.TranslationExtender = function () {
	var logPrefix = ' ----- [BRB.TranslationExtender]::';
	this.init = init;
	
	function init() {		
		$.subscribe('languageChangedEvent', onLanguageChangedEventHandler);
	}
	
	function onLanguageChangedEventHandler (event, data) {
		var sMethod = 'onLanguageChangedEventHandler()';
		BRB.Log(logPrefix + sMethod + '::Event::' + event + '::Current Language::' + data);
		
		// Trigger events
		$('#choseProduct').trigger('translationStop');
		$('#confirmation_date_of_birth').trigger('translationStop');
		$('#personalInformation_DateOfBirth_Year').trigger('translationStop');
	}
};