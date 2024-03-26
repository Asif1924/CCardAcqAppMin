describe("RequestBuilder -", function() {
	var sut;
	
	app = new EASYFINANCIAL.WebApp();	
	
    describe("RequestBuilder", function() {
    	it("can set and change the http type", function() {
    		sut = new EASYFINANCIAL.RequestBuilder();
    		var requestDetails = { 
    								physicalServerURL : "http://localhost:9081/",
    								applicationPath : "/EASYFINANCIALWebApp2/",	
    								middlewareName: "EASYFINANCIALMWB",
    								serviceName:"AddressLookup",
    								httpType:"GET",
    								params:{}
    							};
    		sut.init(requestDetails);

    		expect(sut.getHttpType()).toEqual("GET");
    		
    		sut.setHttpType( "POST" );
    		
    		expect(sut.getHttpType()).toEqual("POST");
    		
    	});    	

    	it(" can build a request in an expected format", function() {
    		sut = new EASYFINANCIAL.RequestBuilder();
    		var storeNumber = "23";
    		var requestParams = {"storeNumber": storeNumber};
    		
    		var requestDetails = { 
    								physicalServerURL : "https://ipp-uat.herokuapp.com/",	
    								middlewareName: "api",
    								serviceName:"isStoreExists",
    								httpType:"GET",
    								params:requestParams
    							};
    		sut.init(requestDetails);
    		sut.setHttpType("GET");
    		sut.setParams(requestParams);
    		expect(sut.getHttpType()).toEqual("GET");
    		expect(sut.getParamString()).toEqual("storeNumber=23");
    	});     	
    });
});