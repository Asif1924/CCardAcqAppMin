describe("RequestBuilder -", function() {
	var sut;
	
	app = new WICI.WICIWebApp();
	app.deviceInfoHelper = new WICI.DeviceInfoHelper();
	app.deviceInfoHelper.getDeviceInfo = function (){ return {MfgSerial:"20:50:00:00:00:00", BuildSerial:"213213123"}; };
	
    describe("RequestBuilder", function() {
    	it("can set and change the http type", function() {
    		sut = new WICI.RequestBuilder();
    		var requestDetails = { 
    								physicalServerURL : "http://localhost:9081/",
    								applicationPath : "/WICIWebApp2/",	
    								middlewareName: "WICIMiddlewareBroker2",
    								thisWebappName: "WICIWebApp2",
    								serviceName:"AddressLookup",
    								httpType:"GET",
    								params:{}
    							};
    		sut.init(requestDetails);

    		expect(sut.getHttpType()).toEqual("GET");
    		
    		sut.setHttpType( "POST" );
    		
    		expect(sut.getHttpType()).toEqual("POST");
    		
    	});    	

    	
    	it("will build an AddressLookup request from an AddressLookup service name and a physical server URL using GET", function() {
    		sut = new WICI.RequestBuilder();
    		var requestDetails = { 
    								physicalServerURL : "http://localhost:9081/",
    								applicationPath : "/WICIWebApp2/",	
    								middlewareName: "WICIMiddlewareBroker2",
    								thisWebappName: "WICIWebApp2",
    								serviceName:"AddressLookup",
    								httpType:"GET",
    								params:{}
    							};
    		sut.init(requestDetails);
    		var getAddressLookupRequest = sut.buildRequest();
    		expect(getAddressLookupRequest).toEqual("http://localhost:9081/WICIMiddlewareBroker2/AddressLookup?authfieldValue%5BMfgSerial%5D=20%3A50%3A00%3A00%3A00%3A00&authfieldValue%5BBuildSerial%5D=213213123");
    	});    	

    	it("will build an AddressLookup request from an AddressLookup service name and a physical server URL using POST", function() {
    		sut = new WICI.RequestBuilder();
    		var requestDetails = { 
    								physicalServerURL : "http://localhost:9081/",
    								applicationPath : "/WICIWebApp2/",	
    								middlewareName: "WICIMiddlewareBroker2",
    								thisWebappName: "WICIWebApp2",
    								serviceName:"AddressLookup",
    								httpType:"POST",
    								params:{}
    							};
    		sut.init(requestDetails);
    		var getAddressLookupRequest = sut.buildRequest();
    		expect(getAddressLookupRequest).toEqual('http://localhost:9081/WICIMiddlewareBroker2/AddressLookup?{"authfieldValue":{"MfgSerial":"20:50:00:00:00:00","BuildSerial":"213213123"}}');
    	});    	

    	
    	it("will build a AddressLookup request from a AddressLookup service name and empty parameters using GET", function() {
    		sut = new WICI.RequestBuilder();
    		var requestDetails = { 
    								applicationPath : "/WICIWebApp2/",	
    								middlewareName: "WICIMiddlewareBroker2",
    								thisWebappName: "WICIWebApp2",
    								serviceName:"AddressLookup",
    								httpType:"GET",
    								params:{}
    							};
    		sut.init(requestDetails);
    		var getAddressLookupRequest = sut.buildRequest();
    		expect(getAddressLookupRequest).toEqual("/WICIMiddlewareBroker2/AddressLookup?authfieldValue%5BMfgSerial%5D=20%3A50%3A00%3A00%3A00%3A00&authfieldValue%5BBuildSerial%5D=213213123");
    	});
    	it("will build a AddressLookup request from a AddressLookup service name and one parameter using GET", function() {
    		sut = new WICI.RequestBuilder();
    		var requestDetails = { 
									applicationPath : "/WICIWebApp2/",
				    				middlewareName:"WICIMiddlewareBroker2",
									thisWebappName:"WICIWebApp2",
    								serviceName:"AddressLookup",
    								httpType:"GET",
    								params:{"streetnumber":"3215"}
    							};
    		sut.init(requestDetails);
    		var getAddressLookupRequest = sut.buildRequest();
    		expect(getAddressLookupRequest).toEqual("/WICIMiddlewareBroker2/AddressLookup?streetnumber=3215&authfieldValue%5BMfgSerial%5D=20%3A50%3A00%3A00%3A00%3A00&authfieldValue%5BBuildSerial%5D=213213123");
    	});
    	it("will give back the parameters portion of any arbitrary request when parameters exist", function() {
    		sut = new WICI.RequestBuilder();
    		var requestDetails = { 
									applicationPath : "/WICIWebApp2/",
				    				middlewareName:"WICIMiddlewareBroker2",
									thisWebappName:"WICIWebApp2",
									serviceName:"AddressLookup",
    								httpType:"GET",
    								params:{"streetnumber":"3215","postalcode":"L5M0M2"}
    							};
    		sut.init(requestDetails);
    		var requestParamsOnly = sut.getParamString();    		
    		expect(requestParamsOnly).toEqual("streetnumber=3215&postalcode=L5M0M2&authfieldValue%5BMfgSerial%5D=20%3A50%3A00%3A00%3A00%3A00&authfieldValue%5BBuildSerial%5D=213213123");
    	});
    	it("will give back empty parameter string of any arbitrary request when parameters do not exist", function() {
    		sut = new WICI.RequestBuilder();
    		var requestDetails = { 
									applicationPath : "/WICIWebApp2/",
				    				middlewareName:"WICIMiddlewareBroker2",
									thisWebappName:"WICIWebApp2",
									serviceName:"AddressLookup",
    								httpType:"GET",
    								params:{}
    							};
    		sut.init(requestDetails);
    		var requestParamsOnly = sut.getParamString();    		
    		expect(requestParamsOnly).toEqual("authfieldValue%5BMfgSerial%5D=20%3A50%3A00%3A00%3A00%3A00&authfieldValue%5BBuildSerial%5D=213213123");
    	});
    	it("will return the parameter string and the serial numbers when some params are passed in on a GET request", function() {
    		sut = new WICI.RequestBuilder();
    		var requestDetails = { 
									applicationPath : "/WICIWebApp2/",
				    				middlewareName:"WICIMiddlewareBroker2",
									thisWebappName:"WICIWebApp2",
									serviceName:"AddressLookup",
    								httpType:"GET",
    								params:{}
    							};
    		sut.init(requestDetails);
    		sut.setParams({"streetnumber":"3215","postalcode":"L5M0M2"});
    		var paramString = sut.getParamString();    		
    		expect(paramString).toEqual("streetnumber=3215&postalcode=L5M0M2&authfieldValue%5BMfgSerial%5D=20%3A50%3A00%3A00%3A00%3A00&authfieldValue%5BBuildSerial%5D=213213123");
    	});

    	it("will return the parameter string and the serial numbers when some params are passed in on a POST request", function() {
    		sut = new WICI.RequestBuilder();
    		var requestDetails = { 
									applicationPath : "/WICIWebApp2/",
				    				middlewareName:"WICIMiddlewareBroker2",
									thisWebappName:"WICIWebApp2",
									serviceName:"AddressLookup",
    								httpType:"POST",
    								params:{}
    							};
    		sut.init(requestDetails);
    		sut.setParams({"streetnumber":"3215","postalcode":"L5M0M2"});
    		var paramString = sut.getParamString();    		
    		expect(paramString).toEqual('{"streetnumber":"3215","postalcode":"L5M0M2","authfieldValue":{"MfgSerial":"20:50:00:00:00:00","BuildSerial":"213213123"}}');
    		//expect(JSON.stringify(paramString)).toEqual('"{\"streetnumber\":\"3215\",\"postalcode\":\"L5M0M2\",\"authfieldValue\":{\"MfgSerial\":\"20:50:00:00:00:00\",\"BuildSerial\":\"213213123\"}}"');    		
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