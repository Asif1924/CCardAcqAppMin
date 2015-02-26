describe("DictionaryLoadingHelperTest", function() {
	
	var logPrefix = "[TEST::DictionaryLoadingHelperTest::] ";
	var sut, mockWindow, mockConnectivityController, mockDictonaryInfo, 
	mockLocalStorage, mockMessageDialog, mockTranslator, currVersion = 0, fakes;

	mockLocalStorage = {
		setVocabulary: jasmine.createSpy(),
		setVersion: jasmine.createSpy(),
		getVersion: function() {
			return currVersion
		}
	};

	mockMessageDialog = {
		error: jasmine.createSpy()
	};

	mockTranslator = {
		run: jasmine.createSpy(),
		translateKey: jasmine.createSpy()
	};

	var mockWici = {
		LocalStorageHelper: function() {
			return mockLocalStorage;
		},
		DictionaryInfoHelper: function() {
			return {
				getDictionaryUrl: function(lan) {
					return mockResponse[lan];
				},
				
				getOlderDictionaryAllowable: function() {
					return mockResponse.bypassable;
				},

				dictionaryInfoExists: function() {
					return mockResponse.exists;
				},

				getLatestDictionaryVersion: function() {
					return mockResponse.version
				}
			};

		},
		ConnectivityController: function() {
			return {
				loadDictionary: mockLoadDictionary,
				init: sinon.stub()
			}
		},
		ConnectionStatus: sinon.stub,
		LoadingIndicatorController: sinon.stub(),
		AppConfig: {
			ConnectivityConfig: null,
			LanguageEnum: {
				english: "en",
				french: "fr"
			}
		}
	};	

	var mockResponse = {
		version: 1,
		en: true,
		fr: true,
		bypassable: true,
		exists: true
	}

	function mockLoadDictionary (argLanguage, url, success, fail) {
		if (url) {
			success();
		} else 
		fail();
	}

	beforeEach(function() {
		sut =  WICI.DictionaryLoadingHelper(mockMessageDialog, mockTranslator, mockResponse, mockWici);
	});

	describe("success mockResponse", function() {

		beforeEach(function() {
			mockLocalStorage.setVocabulary.reset();
			sut.determineUpdateDictionaryOrQuit();
		});

		it("will save version from the server", function() {
			expect(mockLocalStorage.setVersion.calls[0].args[0]).toEqual(mockResponse.version);		
		});

		it("will save BOTH dictionaries from the server", function() {
			expect(mockLocalStorage.setVocabulary.calls.length).toEqual(2);		
		});
	
	});
	
	describe("fail mockResponse and not bypass", function() {
		
		beforeEach(function() {
			mockResponse.fr = false;
			mockResponse.en = false;
			mockResponse.bypassable = false;
		});

		it("will throw exception to block execution", function() {
			expect(function() {sut.determineUpdateDictionaryOrQuit()}).toThrow();	
		});
		
	});

	describe("fail mockResponse and bypass", function() {
		
		beforeEach(function() {
			mockResponse.fr = false;
			mockResponse.en = false;
			mockResponse.bypassable = true;
		});

		it("will not throw exception to block execution", function() {
			expect(function() {sut.determineUpdateDictionaryOrQuit()}).not.toThrow();	
		});
		
	});

});