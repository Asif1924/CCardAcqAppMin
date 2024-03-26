describe("Translation Test", function() {
	var sut;
	var translationLibrary;
	var realDictionary_en;
	var realDictionary_fr;
	beforeEach(function() {
        $.publish = $.noop;

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
		
		sut = new EASYFINANCIAL.Translate(translationLibrary, EASYFINANCIAL.AppConfig.LanguageEnum);
		
		// or else it will use the stored default
		window.localStorage.removeItem("EASYFINANCIAL_PERSIST_LANGUAGE");
	});	
	
	afterEach(function() {
		EASYFINANCIAL.dictionary_en = realDictionary_en;
		EASYFINANCIAL.dictionary_fr = realDictionary_fr;
	});
	
	it("will initially set up the translation language with the default language", function() {
		var spy = sinon.spy(translationLibrary, "setDictionary");
		
		sut.init();
		
		expect(spy.callCount).toEqual(1);
	});

    it("will get current default language", function() {
        expect(sut.currentLanguageEnglish()).toBeTruthy();
    });

    it("will get Official Language Format en", function() {
        expect(sut.getOfficialLanguageFormat()).toBe("E");
    });

    it("will get Official Language Format fr", function() {
        sut = new EASYFINANCIAL.Translate(translationLibrary, "fr")
        expect(sut.getOfficialLanguageFormat()).toBe("F");
    });

    it("will get Alternate Language", function() {
        expect(sut.getAlternateLanguage()).toBe("fr");
    });

    it("will not translate text if it does not have a translation key", function() {
        setFixtures('<span id="dontTranslateText">dont translate this text</span>');

		sut.run();

        expect($('#dontTranslateText').text("dont translate this text"))
	});
	
	it("will translate text to french if it has a translation key and the current language is french", function() {
        setFixtures('<span id="translateText" data-translationKey="text_translateText">translate this text</span>');

		sinon.stub(translationLibrary, "_").withArgs("text_translateText").returns("traduire ce texte");
		
		sut.run();

        expect($('#translateText').text("traduire ce texte"))
	});		
	
	it("will toggle the current language to french if it is english", function() {
		var spy = sinon.spy(translationLibrary, "setDictionary");
		
		sut.toggleLanguage();

		expect(spy.callCount).toEqual(1);
	});		
	
	it("will only translate text on a specific page when a page is passed in", function() {
        setFixtures('<div id="samplePage"><span id="translateText" data-translationKey="text_translateText"></span></div> <span id="dontTranslateText" data-translationKey="text_dontTranslateText">don\'t translate this text</span>');

		var spy = sinon.spy(translationLibrary, "_");
		
		sut.run("samplePage");
		
		expect(spy.callCount).toEqual(1);
	});		
	
	it("will translate text on a specific text-key basis, with one formatting argument {0}", function() {

		var spy = sinon.spy(translationLibrary, "_");
		
		var element = sut.translateKey("text_translateText", "joe");

		expect(spy.calledWith("text_translateText", ["joe"])).toBeTruthy();
	});	
	
	it("will translate text on a specific text-key basis, with multiple arguments {0}, {1}, ...", function() {

		var spy = sinon.spy(translationLibrary, "_");
		
		var element = sut.translateKey("text_translateText", "joe", "christmas");

		expect(spy.calledWith("text_translateText", ["joe", "christmas"])).toBeTruthy();
	});	
	
	it("will translate text on a specific page in a language that is passed in and not the 'current' language of the app", function() {
        setFixtures('<div id="samplePage"><span id="translateText" data-translationKey="text_translateText"></span></div> <span id="dontTranslateText" data-translationKey="text_dontTranslateText">don\'t translate this text</span>');

		sinon.stub(translationLibrary, "_").withArgs("text_translateText").returns("traduire ce texte");
		var spy = sinon.spy(translationLibrary, "setDictionary");
		
		sut.run("samplePage", true);

        expect($('#translateText').text("traduire ce texte"))
	});	

	it("will check for calling method getCurrentLanguage is return right value ", function() {
		sut.toggleLanguage();
		sut.toggleLanguage();
		expect(sut.getCurrentLanguage()).toBe(EASYFINANCIAL.AppConfig.LanguageEnum.english);
	});
	it("will check for calling method getCurrentLanguage for French language is return right value ", function() {
		sut.toggleLanguage();
		expect(sut.getCurrentLanguage()).toBe(EASYFINANCIAL.AppConfig.LanguageEnum.french);
	});	
	it("will check for calling method getCurrentLanguage for French language is not return right value ", function() {
		sut.toggleLanguage();
		sut.toggleLanguage();
		sut.toggleLanguage();
		expect(sut.getCurrentLanguage()).toBe(EASYFINANCIAL.AppConfig.LanguageEnum.french);
	});	
	
	it("will check for calling method getCurrentLanguage is return not right value ", function() {
		sut.toggleLanguage();
		expect(sut.getCurrentLanguage()).not.toBe(EASYFINANCIAL.AppConfig.LanguageEnum.english);
	});	
		
});
