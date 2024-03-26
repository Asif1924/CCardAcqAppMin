describe("Loan Application Flow test", function() {
    var sut;
    var	translator

    beforeEach(function() {
    	translationLibrary = {
			_: $.noop,
			setDictionary: $.noop
		};
		
		realDictionary_en = EASYFINANCIAL.dictionary_en;
		realDictionary_fr = EASYFINANCIAL.dictionary_fr;
		
		EASYFINANCIAL.dictionary_en = {
				language : "en"
		};
		EASYFINANCIAL.dictionary_fr = {
				language : "fr"
		};
    		
    	translator = new EASYFINANCIAL.Translate(translationLibrary, EASYFINANCIAL.AppConfig.LanguageEnum);


    });

    it("will initially set up the translation language with the default language", function() {
        sut = new EASYFINANCIAL.LoanApplicationFlow({}, translator, function(){ return true; });

        expect(sut).toBeDefined();
    });
});