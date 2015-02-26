describe("LocalStorageHelperTest", function() {
	var logPrefix = "[TEST::LocalStorageHelper::] ";
	var sut, mockWindow, returnValue = "123";
	
	var keys = {
    	version: "DICTIONARY_VERSION",
    	en: "DICTIONARY_LOCATION_EN",
    	fr: "DICTIONARY_LOCATION_FR" 
    };

	mockWindow = {
		localStorage: {
			getItem: sinon.stub().returns(returnValue),
			setItem: sinon.stub()
		}
	}

	beforeEach(function() {
		sut = new WICI.LocalStorageHelper(mockWindow);

	});
	
	it("will set the version to the local storage", function() {
		var arg = 123;
		sut.setVersion(arg);

		expect(mockWindow.localStorage.setItem.calledWith(keys.version, "123")).toBeTruthy();		
	});

	it("will set the vocabulary to the local storage", function() {
		var arg = {
			a:123,
			b:456
		};

		sut.setVocabulary("en", arg);

		expect(mockWindow.localStorage.setItem.calledWith(keys.en, JSON.stringify(arg))).toBeTruthy();
	});

	it("will get the version from the local storage", function() {
		var test = sut.getVersion();
		expect(test).toEqual(123);		
	});

	it("will get the vocabulary from the local storage", function() {
		var res = {
			a:123,
			b:456
		};
		mockWindow.localStorage.getItem.returns(JSON.stringify(res));

		var fr = sut.getVocabulary("fr");

		expect(fr).toEqual(res);

	});

	it("will get a default vocabulary if the local storage is empty", function() {

		mockWindow.localStorage.getItem.returns(null);

		var fr = sut.getVocabulary("fr");
		var en = sut.getVocabulary("en");

		expect(fr).toEqual(jasmine.any(Object));
		expect(en).toEqual(jasmine.any(Object));
	});
	
});