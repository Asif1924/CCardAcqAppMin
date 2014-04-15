describe("Translation Test", function() {
	var sut;
	var translationLibrary;
	var realDictionary_en;
	var realDictionary_fr;
	beforeEach(function() {
		this.addMatchers({
			toHaveBeenCalledWithTheCorrectLanguage : function(expected) {
				var actualLanguage = this.actual.args[0][0].language;					
				var result = true;
				
				if(actualLanguage !== expected)
					result = false;
				
				// Define publisher only for utin tests
				$.publish = $.noop;
				
				this.message = function() {
					return "Expected language to have been " + expected + " but was " + actualLanguage;
				};
				return (result);
			}
		});		

		translationLibrary = {
			_: $.noop,
			setDictionary: $.noop
		};
		
		realDictionary_en = WICI.dictionary_en;
		realDictionary_fr = WICI.dictionary_fr;
		
		WICI.dictionary_en = {
				language : "en"
		};
		WICI.dictionary_fr = {
				language : "fr"
		};
		
		sut = new WICI.Translate(translationLibrary, WICI.AppConfig.LanguageEnum);
		
		// or else it will use the stored default
		window.localStorage.removeItem("WICI_PERSIST_LANGUAGE");
	});	
	
	afterEach(function() {
		WICI.dictionary_en = realDictionary_en;
		WICI.dictionary_fr = realDictionary_fr;
	});
	
	it("will initially set up the translation language with the default language", function() {
		var spy = sinon.spy(translationLibrary, "setDictionary");
		
		sut.init();
		
		expect(spy.callCount).toEqual(1);
		expect(spy).toHaveBeenCalledWithTheCorrectLanguage("en");
		
	});	
	
	it("will not translate text if it does not have a translation key", function() {
		/*:DOC += <span id="dontTranslateText">don't translate this text</span> */

		sut.run();

		expect(document.getElementById("dontTranslateText").innerHTML).toEqual("don't translate this text");
	});
	
	it("will translate text to french if it has a translation key and the current language is french", function() {
		/*:DOC += <span id="translateText" data-translationKey="text_translateText">translate this text</span> */

		sinon.stub(translationLibrary, "_").withArgs("text_translateText").returns("traduire ce texte");
		
		sut.run();

		expect(document.getElementById("translateText").innerHTML).toEqual("traduire ce texte");
	});		
	
	it("will toggle the current language to french if it is english", function() {
		var spy = sinon.spy(translationLibrary, "setDictionary");
		
		sut.toggleLanguage();

		expect(spy.callCount).toEqual(1);
		expect(spy).toHaveBeenCalledWithTheCorrectLanguage("fr");
	});		
	
	it("will only translate text on a specific page when a page is passed in", function() {
		/*:DOC += <div id="samplePage"><span id="translateText" data-translationKey="text_translateText"></span></div> <span id="dontTranslateText" data-translationKey="text_dontTranslateText">don't translate this text</span> */

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
		/*:DOC += <div id="samplePage"><span id="translateText" data-translationKey="text_translateText"></span></div> <span id="dontTranslateText" data-translationKey="text_dontTranslateText">don't translate this text</span> */

		sinon.stub(translationLibrary, "_").withArgs("text_translateText").returns("traduire ce texte");
		var spy = sinon.spy(translationLibrary, "setDictionary");
		
		sut.run("samplePage", true);
		
		expect(document.getElementById("translateText").innerHTML).toEqual("traduire ce texte");
		expect(spy).toHaveBeenCalledWithTheCorrectLanguage("fr");
	});	
	//Added by DPS
	/*it("will check for calling method changeLogoToFrench during toggleLanguage  ", function() {
		var spy = sinon.spy(sut,"changeLogoToFrench");
		sut.toggleLanguage();
		expect(spy.callCount).toEqual(1);
	});	*/	
	/*it("will check for calling method setFlipsValues during toggleLanguage  ", function() {
		var spy = sinon.spy(sut,"setFlipsValues");
		sut.toggleLanguage();
		expect(spy.callCount).toEqual(1);
	});	
	it("will check for calling method setFlipsValues during toggleLanguage with some logic  ", function() {
		var spy = sinon.spy(sut,"setFlipsValues");
		sut.toggleLanguage(true);
		expect(spy.callCount).toEqual(0);
	});*/	
	/*it("will check for calling method changeLogoToEnglish during toggleLanguage from French to English", function() {
		var spy = sinon.spy(sut,"changeLogoToEnglish");
		sut.toggleLanguage();
		sut.toggleLanguage();
		expect(spy.callCount).toEqual(1);
	});	
	it("will check for calling method triggerEvents during toggleLanguage ", function() {
		var spy = sinon.spy(sut,"triggerEvents");
		sut.toggleLanguage();
		sut.toggleLanguage();
		expect(spy.callCount).toEqual(2);
	});	*/
	it("will check for calling method getCurrentLanguage is return right value ", function() {
		sut.toggleLanguage();
		sut.toggleLanguage();
		expect(sut.getCurrentLanguage()).toBe(WICI.AppConfig.LanguageEnum.english);
	});
	it("will check for calling method getCurrentLanguage for French language is return right value ", function() {
		sut.toggleLanguage();
		expect(sut.getCurrentLanguage()).toBe(WICI.AppConfig.LanguageEnum.french);
	});	
	it("will check for calling method getCurrentLanguage for French language is not return right value ", function() {
		sut.toggleLanguage();
		sut.toggleLanguage();
		sut.toggleLanguage();
		expect(sut.getCurrentLanguage()).toBe(WICI.AppConfig.LanguageEnum.french);
	});	
	
	it("will check for calling method getCurrentLanguage is return not right value ", function() {
		sut.toggleLanguage();
		expect(sut.getCurrentLanguage()).not.toBe(WICI.AppConfig.LanguageEnum.english);
	});	
	/*it("will for not call method changeLogoToFrench during toggle language from French to English ", function() {
		sut.toggleLanguage();
		var spy = sinon.spy(sut,"changeLogoToFrench");
		sut.toggleLanguage();
		expect(spy).not.toHaveBeenCalled();
	});*/
	/*it("will for not call method changeLogoToEnglish during toggle language from English to French ", function() {
		var spy = sinon.spy(sut,"changeLogoToEnglish");
		sut.toggleLanguage();
		expect(spy).not.toHaveBeenCalled();
	});*/			
});