describe("DictionaryInfoHelperTest", function() {

	var sut;

	//DDD Feature
	var mockDictionaryInfoObject = {"LatestDictionaryVersion":"1.1","DictionaryURLEnglish":"https://www.ctfs.com/SharedContent/wici/dict/preprod/Messages_en.js","DictionaryURLFrench":"https://www.ctfs.com/SharedContent/wici/dict/preprod/Messages_fr.js","OlderDictionaryAllowable":true};
	
	var noObjectMockDictionary;
	
	var undefinedMockDictionary = undefined;
	
	var emptyMockDictionary = {};
	
	beforeEach(function() {
		sut = new WICI.DictionaryInfoHelper(mockDictionaryInfoObject);
	});	

	it(" will confirm that we can pull out the Dictionary config info from the login response object", function() {
		
		//sut.setDictionaryInfo(mockDictionaryInfoObject);		
		expect(sut.dictionaryInfoExists()).toEqual(true);
	});
	
	it(" will confirm that if Dictionary config info object does not exist in the login response object, we will know", function() {
		
		//sut.setDictionaryInfo(mockDictionaryInfoObject);
		sut.setDictionaryInfo(noObjectMockDictionary);
		expect(sut.dictionaryInfoExists()).toEqual(false);
	});
	
	it(" will confirm that if Dictionary config info object is undefined in the login response object, we will know", function() {
		
		//sut.setDictionaryInfo(mockDictionaryInfoObject);
		sut.setDictionaryInfo(undefinedMockDictionary);
		expect(sut.dictionaryInfoExists()).toEqual(false);
	});
	
	it(" will confirm that if Dictionary config info object is empty in the login response object, we will know", function() {
		
		//sut.setDictionaryInfo(mockDictionaryInfoObject);
		sut.setDictionaryInfo(emptyMockDictionary);
		expect(sut.dictionaryInfoExists()).toEqual(false);
	});
	
	it(" will confirm that we can pull out the Dictionary config info from the login response object and it is valid", function() {
		
		//sut.setDictionaryInfo(mockDictionaryInfoObject);		
		expect(sut.dictionaryInfoIsValid()).toEqual(true);
	});	
	it(" will confirm that we can get the latest dictionary version from the login response object with a valid dictionary object", function() {
		
		//sut.setDictionaryInfo(mockDictionaryInfoObject);		
		expect(sut.getLatestDictionaryVersion()).toEqual("1.1");
	});	
	it(" will confirm that we can get the latest english dictionary URL from the login response object with a valid dictionary object", function() {
		
		//sut.setDictionaryInfo(mockDictionaryInfoObject);		
		expect(sut.getLatestDictionaryURLEnglish()).toEqual("https://www.ctfs.com/SharedContent/wici/dict/preprod/Messages_en.js");
	});	
	it(" will confirm that we can get the latest french dictionary URL from the login response object with a valid dictionary object", function() {
		
		//sut.setDictionaryInfo(mockDictionaryInfoObject);		
		expect(sut.getLatestDictionaryURLFrench()).toEqual("https://www.ctfs.com/SharedContent/wici/dict/preprod/Messages_fr.js");
	});	
	it(" will confirm that we can get the latest Old Dictionary Allowable from the login response object with a valid dictionary object", function() {
		
		//sut.setDictionaryInfo(mockDictionaryInfoObject);		
		expect(sut.getOlderDictionaryAllowable()).toEqual(true);
	});	
	
});