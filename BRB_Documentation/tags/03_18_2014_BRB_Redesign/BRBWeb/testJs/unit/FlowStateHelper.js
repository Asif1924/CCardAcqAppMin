describe("FlowStateHelper Test", function() {
	var sut = null;
	BRB.AppConfig.TrackingScreenID = null;
	
	beforeEach(function() {
		sut = new BRB.FlowStateHelper();
	});
	//----------------------------------------------------------------------------------------------------------  
	it("will ensure that helper will return 'transactionIdExpire' if token expired", function() {
		sut.setTokenExpired();
		expect(sut.getStringHelperState()).toEqual('transactionIdExpire');
	});
	//----------------------------------------------------------------------------------------------------------
	it("will ensure that helper will return empty string if screen id is 11 and flow is finished", function() {
		BRB.AppConfig.TrackingScreenID = 11;
		sut.setFlowFinish();
		expect(sut.getStringHelperState()).toEqual('');
	});
	//----------------------------------------------------------------------------------------------------------
	it("will ensure that helper will return 'abandon' if abandon termination was set to true", function() {
		sut.setAbandonTermination();
		expect(sut.getStringHelperState()).toEqual('abandon');
	});	
	//----------------------------------------------------------------------------------------------------------
	it("will ensure that helper will return 'transactionIdExpire' if timeout occurs ", function() {
		expect(sut.getStringHelperState()).toEqual('timeout');
	});	
});
