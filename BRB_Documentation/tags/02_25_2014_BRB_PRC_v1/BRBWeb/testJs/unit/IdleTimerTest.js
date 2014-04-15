describe("BRB idle timer tests", function() {
	var callBack = function(){
	};
	var callBackToAplicationFromService = function(){};
	beforeEach(function() {
		callBack = jasmine.createSpy('callBack');
		callBackToAplicationFromService = jasmine.createSpy('callBackToAplicationFromService');
		service = new BRB.IdleTimeService($(document),callBackToAplicationFromService);
		jasmine.Clock.useMock();
	});
	it("check the initial service status if it is  stopped", function() {
		var s = service;
		try {
			assertTrue(s.getServiceState() === "stopped");
		} catch (e) {
			fail(e);
		}
	
	});
	it("check the service status after call of start method is working ", function() {
		var s = service;
		try {
			s.start();
			assertTrue(s.getServiceState() === "working");
		} catch (e) {
			fail(e);
		}
	});
	
	it("check the callback method of IdleTimerService will be call", function() {
		var s = service;
		s.setInterval(function(){
			callBack();
		}, 100);
		expect(callBack).not.toHaveBeenCalled();
	    jasmine.Clock.tick(101);
	    expect(callBack.callCount).toEqual(1);
	});
	
	it("check if after service start callback will not be call after 5 minutes", function() {
		var s = service;
		try {
			s.start();
			jasmine.Clock.tick(300000);
			expect(callBackToAplicationFromService.callCount).toEqual(0);
		} catch (e) {
			fail(e);
		}
	});
	it("check if after service start callback will be call after 10 minutes", function() {
		var s = service;
		try {
			s.start();
			// 10 minutes is 600,000 milliseconds
			jasmine.Clock.tick(600000);
			expect(callBackToAplicationFromService.callCount).toEqual(1);
		} catch (e) {
			fail(e);
		}
	});
	it("check if count of minutes equal 5 in 5 minutes after start", function() {
		var s = service;
		try {
			s.start();
			jasmine.Clock.tick(300000);
			expect(s.getIdleTime()).toEqual(5);
		} catch (e) {
			fail(e);
		}
	});
});