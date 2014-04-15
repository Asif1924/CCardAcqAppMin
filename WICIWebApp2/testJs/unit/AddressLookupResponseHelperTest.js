describe("AddressLookupResponseHelper Test", function() {
	//{"standardAddressLine1":["THOMAS ST"],"standardAddressLine2":[""],"standardCityName":"MISSISSAUGA","standardProvince":"ON","standardPostalCode":"L5M0M2","addressStatus":"N"}
	var sut;
	var addressLookupResponseObject;

	beforeEach(function() {
		sut = new WICI.AddressLookupResponseHelper();
		addressLookupResponseObject = {"standardAddressLine1":["THOMAS ST"],"standardAddressLine2":[""],"standardCityName":"MISSISSAUGA","standardProvince":"ON","standardPostalCode":"L5M0M2","addressStatus":"N"};
		sut.setAddressResponseObject(addressLookupResponseObject);
	});

	it("will confirm that address line 1 from response returns an array", function() {
		var addressLine1 = sut.getAddressLine1();
		expect(addressLine1).toEqual(["THOMAS ST"]);
	});
//	this test woun't pass because  address line 2 functionality was disabled 	
//	it("will confirm that address line 2 from response returns an array", function() {
//		var addressLine2 = sut.getAddressLine2();
//		expect(addressLine2).toEqual([""]);
//	});
	
	it("will ensure that even if retrived address line 2 getAddressLine2() will return '", function() {
		var addressLine2 = sut.getAddressLine2();
		expect(addressLine2).toEqual('');
	});
	
	it("will ensure that even if retrived address line 2 array getAddressLine2() will return '", function() {
		addressLookupResponseObject = {"standardAddressLine1":["THOMAS ST"],"standardAddressLine2":["first element", "second element"],"standardCityName":"MISSISSAUGA","standardProvince":"ON","standardPostalCode":"L5M0M2","addressStatus":"N"};
		sut.setAddressResponseObject(addressLookupResponseObject);
		var addressLine2 = sut.getAddressLine2();
		expect(addressLine2).toEqual('');
	});

	it("will confirm that province from response returns something", function() {
		var province = sut.getProvince();
		expect(province).toEqual("ON");
	});

	it("will confirm that cityname returns something", function() {
		var cityname = sut.getCityName();
		expect(cityname).toEqual("MISSISSAUGA");
	});
	//standardPostalCode
	it("will confirm that postalcode returns something", function() {
		var postalcode= sut.getPostalCode();
		expect(postalcode).toEqual("L5M0M2");
	});
	//addressStatus
	it("will confirm that addressStatus returns something", function() {
		var addressStatus= sut.getAddressStatus();
		expect(addressStatus).toEqual("N");
	});

	//Empty Response object
	it("will confirm that empty response objects will return empty values not null", function() {
		sut.setAddressResponseObject({});
		var addressStatus= sut.getAddressStatus();
		expect(addressStatus).toEqual("");
	});
	//Multiple
	//{"standardAddressLine1":["ARROWHEAD LANE","KENYON CRES"],"standardAddressLine2":[""],"standardCityName":"GRIMSBY","standardProvince":"ON","standardPostalCode":"L3M5M5","addressStatus":"N"}
	it("will confirm that responses with multiple streets return an array of street names", function() {
		var responseWithMultipleStreets = {"standardAddressLine1":["ARROWHEAD LANE","KENYON CRES"],"standardAddressLine2":[""],"standardCityName":"GRIMSBY","standardProvince":"ON","standardPostalCode":"L3M5M5","addressStatus":"N"};
		sut.setAddressResponseObject(responseWithMultipleStreets);
		var addressLine1= sut.getAddressLine1();
		expect(addressLine1).toEqual(["ARROWHEAD LANE","KENYON CRES"]);
	});

	//{"StreetNumber":"3215","StreetName":["Thomas Street1","Thomas Street2","Thomas Street3","Thomas Street4","Thomas Street5","Thomas Street6","Thomas Street7","Thomas Street8","Thomas Street9"],"City":"Mississauga","Province":"Ontario","PostalCode":"L5M0M2"}
	//{"StreetNumber":"3215","StreetName":"Thomas Street","City":"Mississauga","Province":"Ontario","PostalCode":"L5M0M2"}
	it("will not choke if addressResponseObject is malformed", function(){
		var malformedResponse = {"StreetNumber":"3215","StreetName":"Thomas Street","City":"Mississauga","Province":"Ontario","PostalCode":"L5M0M2"};
		sut.setAddressResponseObject(malformedResponse );
		var addressLine1 = sut.getAddressLine1();
		var addressLine2 = sut.getAddressLine2();
		var cityName = sut.getCityName();
		var postalCode = sut.getPostalCode();
		var province = sut.getProvince();

		expect(addressLine1).toEqual("");
		expect(addressLine2).toEqual("");
		expect(cityName).toEqual("");
		expect(postalCode).toEqual("");
		expect(province).toEqual("");

	});

});

