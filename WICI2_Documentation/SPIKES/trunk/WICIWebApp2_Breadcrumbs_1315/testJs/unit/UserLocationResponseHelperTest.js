describe("UserLocationResponseHelper Test", function() {

	var sut = null;
	
	var epamfmr_UserLocation_ResponseObject = {"message":"SUCCESS","outletName":"GASBAR              ","outletNumber":"1893","outletStreet":"311 Confederation Dr.         ","outletCity":"Saskatoon                ","outletProvince":"SK","outletPostal":"S7L5C6"};
	
	beforeEach(function() {
		sut = new WICI.UserLocationResponseHelper();
	});	

	it(" will confirm that a successful userlocation response can get status message of success", function() {
		sut.setUserLocationResponseObject(epamfmr_UserLocation_ResponseObject);		
		expect(sut.userLocationSuccessful()).toEqual(true);
	});		

	it(" will confirm that a successful userlocation response can get outlet name", function() {
		sut.setUserLocationResponseObject(epamfmr_UserLocation_ResponseObject);		
		expect(sut.getOutletName()).toEqual("GASBAR              ");
	});		
	
	it(" will confirm that a successful userlocation response can get outletNumber", function() {
		sut.setUserLocationResponseObject(epamfmr_UserLocation_ResponseObject);		
		expect(sut.getOutletNumber()).toEqual("1893");
	});		
	
	it(" will confirm that a successful userlocation response can get outletStreet", function() {
		sut.setUserLocationResponseObject(epamfmr_UserLocation_ResponseObject);		
		expect(sut.getOutletStreet()).toEqual("311 Confederation Dr.         ");
	});		
	
	it(" will confirm that a successful userlocation response can get outletCity", function() {
		sut.setUserLocationResponseObject(epamfmr_UserLocation_ResponseObject);		
		expect(sut.getOutletCity()).toEqual("Saskatoon                ");
	});		
	
	it(" will confirm that a successful userlocation response can get outletProvince", function() {
		sut.setUserLocationResponseObject(epamfmr_UserLocation_ResponseObject);		
		expect(sut.getOutletProvince()).toEqual("SK");
	});		
	
	it(" will confirm that a successful userlocation response can get outletPostal", function() {
		sut.setUserLocationResponseObject(epamfmr_UserLocation_ResponseObject);		
		expect(sut.getOutletPostal()).toEqual("S7L5C6");
	});		
	
});