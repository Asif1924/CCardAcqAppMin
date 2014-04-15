describe("IsAliveService", function() {
	var logPrefix = "[TEST::IsAliveService::] ";
	var service = null;

	beforeEach(function() {
		service = new WICI.IsAliveService();
	});

	it("check the initial service status if it is not started", function() {
		
		var s = service;

		try {
			assertTrue(s.getServiceState() === "notStarted");
			assertFalse(s.isAlive());
		} catch (e) {
			fail(e);
		}
	
	});
	
	it("check public and private methods in service", function() {
		
		var s = service;

		assertTrue(typeof s.start === "function");
		assertTrue(typeof s.stop === "function");
		assertTrue(typeof s.getServiceState === "function");
		assertTrue(typeof s.isAlive === "function");
		
		assertTrue(typeof s.doTimeoutRequest === "undefined");
	});
	
	it("get set interval value", function() {
		
		var s = service;

		try {
			s.setInterval(555);
			assertTrue(s.getInterval()===555);
		} catch (e) {
			fail(e);
		}
	
	});
	
	it("status service right after stop", function() {
		
		var s = service;

		try {
			s.setInterval(0);
			s.start();
			s.stop();
			assertTrue(s.getServiceState() === "stopped");
		} catch (e) {
			fail(e);
		}
	
	});

});