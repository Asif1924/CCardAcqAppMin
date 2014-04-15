var app;
describe("RequestBuilder Test", function() {
	var sut;
	app = new BRB.BRBWebApp();
	
	app.customerTransactionModel = {
			getProfileId		: 	function(){	return "";	},
			getTransactionId	: 	function(){	return "";	}
	};
	
	BRB.AppConfig.TrackingScreenID = 15;
	
	it("will ensure that RequestBuilder is always adding the trackingScreenID parameter to GET requests", function() {
		sut = new BRB.RequestBuilder(null, {param:''}, 'POST');
		var rez1 = sut.getParamString().match(/TrackingScreenID/g);
		expect(rez1.length==1).toBeTruthy();
	});
	
	it("will ensure that RequestBuilder is always adding the trackingScreenID parameter to POST requests", function() {
		sut = new BRB.RequestBuilder(null, {param:''}, 'POST');
		var rez1 = sut.getParamString().match(/TrackingScreenID/g);
		expect(rez1.length==1).toBeTruthy();
	});
	
	it("will ensure that RequestBuilder is always adding the trackingScreenID parameter to Arrys requests", function() {
		var rez =[];
		rez.push({param1:''});
		rez.push({param2:''});
		sut = new BRB.RequestBuilder(null, rez, 'POST');
		var rez1 = sut.getParamString().match(/TrackingScreenID/g);
		expect(rez1.length==1).toBeTruthy();		
	});
	
	it("will ensure that RequestBuilder is always adding the brbTransactionId parameter to GET requests", function() {
		sut = new BRB.RequestBuilder(null, {param:''}, 'POST');
		var rez1 = sut.getParamString().match(/brbTransactionId/g);
		expect(rez1.length==1).toBeTruthy();
	});
	
	it("will ensure that RequestBuilder is always adding the brbTransactionId parameter to POST requests", function() {
		sut = new BRB.RequestBuilder(null, {param:''}, 'POST');
		var rez1 = sut.getParamString().match(/brbTransactionId/g);
		expect(rez1.length==1).toBeTruthy();
	});
	
	it("will ensure that RequestBuilder is always adding the brbTransactionId parameter to Arrys requests", function() {
		var rez =[];
		rez.push({param1:''});
		rez.push({param2:''});
		sut = new BRB.RequestBuilder(null, rez, 'POST');
		var rez1 = sut.getParamString().match(/brbTransactionId/g);
		expect(rez1.length==1).toBeTruthy();		
	});
		
});
