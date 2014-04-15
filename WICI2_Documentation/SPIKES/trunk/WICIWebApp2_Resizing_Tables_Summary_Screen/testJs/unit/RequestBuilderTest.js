describe("RequestBuilder -", function() {
	var sut;
    describe("RequestBuilder", function() {
    	it("will build a AddressLookup request from a AddressLookup service name and a physical server URL", function() {
    		sut = new WICI.RequestBuilder();
    		var requestDetails = { 
    								physicalServerURL : "http://localhost:9081/",
    								applicationPath : "/WICIWebApp2/",	
    								middlewareName: "WICIMiddlewareBroker2",
    								thisWebappName: "WICIWebApp2",
    								serviceName:"AddressLookup",
    								params:{}
    							};
    		sut.init(requestDetails);
    		var getAddressLookupRequest = sut.buildRequest();
    		expect(getAddressLookupRequest).toEqual("http://localhost:9081/WICIMiddlewareBroker2/AddressLookup");
    	});    	
    	it("will build a AddressLookup request from a AddressLookup service name and empty parameters", function() {
    		sut = new WICI.RequestBuilder();
    		var requestDetails = { 
    								applicationPath : "/WICIWebApp2/",	
    								middlewareName: "WICIMiddlewareBroker2",
    								thisWebappName: "WICIWebApp2",
    								serviceName:"AddressLookup",
    								params:{}
    							};
    		sut.init(requestDetails);
    		var getAddressLookupRequest = sut.buildRequest();
    		expect(getAddressLookupRequest).toEqual("/WICIMiddlewareBroker2/AddressLookup");
    	});
    	it("will build a AddressLookup request from a AddressLookup service name and one parameter", function() {
    		sut = new WICI.RequestBuilder();
    		var requestDetails = { 
									applicationPath : "/WICIWebApp2/",
				    				middlewareName:"WICIMiddlewareBroker2",
									thisWebappName:"WICIWebApp2",
    								serviceName:"AddressLookup",
    								params:{"streetnumber":"3215"}
    							};
    		sut.init(requestDetails);
    		var getPushNotificationsRequest = sut.buildRequest();
    		expect(getPushNotificationsRequest).toEqual("/WICIMiddlewareBroker2/AddressLookup?streetnumber=3215");
    	});
    	it("will give back the parameters portion of any arbitrary request when parameters exist", function() {
    		sut = new WICI.RequestBuilder();
    		var requestDetails = { 
									applicationPath : "/WICIWebApp2/",
				    				middlewareName:"WICIMiddlewareBroker2",
									thisWebappName:"WICIWebApp2",
									serviceName:"AddressLookup",
    								params:{"streetnumber":"3215","postalcode":"L5M0M2"}
    							};
    		sut.init(requestDetails);
    		var requestParamsOnly = sut.getParamString();    		
    		expect(requestParamsOnly).toEqual("streetnumber=3215&postalcode=L5M0M2");
    	});
    	it("will give back empty parameter string of any arbitrary request when parameters do not exist", function() {
    		sut = new WICI.RequestBuilder();
    		var requestDetails = { 
									applicationPath : "/WICIWebApp2/",
				    				middlewareName:"WICIMiddlewareBroker2",
									thisWebappName:"WICIWebApp2",
									serviceName:"AddressLookup",
    								params:{}
    							};
    		sut.init(requestDetails);
    		var requestParamsOnly = sut.getParamString();    		
    		expect(requestParamsOnly).toEqual("");
    	});
    	it("will return the parameter string by just passing it in", function() {
    		sut = new WICI.RequestBuilder();
    		var requestDetails = { 
									applicationPath : "/WICIWebApp2/",
				    				middlewareName:"WICIMiddlewareBroker2",
									thisWebappName:"WICIWebApp2",
									serviceName:"AddressLookup",
    								params:{}
    							};
    		sut.init(requestDetails);
    		sut.setParams({"streetnumber":"3215","postalcode":"L5M0M2"});
    		var paramString = sut.getParamString();    		
    		expect(paramString).toEqual("streetnumber=3215&postalcode=L5M0M2");
    	});
    	/*
    	it("will be able to get the correct target given a complex folder structure", function() {
    		sut = new WICI.RequestBuilder();
    		var requestDetails = { 
									applicationPath : "/garbage/WICIWebApp2/",
				    				middlewareName:"WICIMiddlewareBroker2",
									thisWebappName:"WICIWebApp2",
									serviceName:"AddressLookup",
    								params:{}
    							};
    		sut.init(requestDetails);
    		var someRequest = sut.buildRequest();
    		expect(someRequest).toEqual("/garbage/WICIMiddlewareBroker2/AddressLookup");
    	});
    	it("will be able to get the correct target given a complex folder structure and complex current pathname", function() {
    		sut = new WICI.RequestBuilder();
    		var requestDetails = { 
									applicationPath : "/garbage/WICIWebApp2/",
				    				middlewareName:"WICIMiddlewareBroker2",
									thisWebappName:"WICIWebApp2",
									serviceName:"AddressLookup",
    								params:{}
    							};
    		sut.init(requestDetails);
    		var someRequest = sut.buildRequest();
    		expect(someRequest).toEqual("/garbage/WICIMiddlewareBroker2/AddressLookup");
    	});
    	*/
    });
});