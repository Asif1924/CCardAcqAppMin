describe("IdleTimeServiceTest", function() {
	var logPrefix = "[TEST::IdleTimeServiceTest::] ";
	var service = null;
	beforeEach(function() {
		service = new WICI.IdleTimeService();
	});

	it("check the initial service status if it is not started", function() {
		
		var s = service;

		try {
			assertTrue(s.getServiceState() === "stopped");
			assertTrue(s.getIdleTime()===0);
		} catch (e) {
			fail(e);
		}
	
	});
	
	it("check public and private methods in service", function() {
		
		var s = service;

		assertTrue(typeof s.start === "function");
		assertTrue(typeof s.stop === "function");
		assertTrue(typeof s.getServiceState === "function");
		assertTrue(typeof s.getIdleTime === "function");
		
		assertTrue(typeof s.setServiceState === "undefined");
		assertTrue(typeof s.init === "undefined");
		assertTrue(typeof s.timerIncrement === "undefined");
		assertTrue(typeof s.subscribeToUserEvents === "undefined");
	});
	
	
	it("status service right after stop", function() {
		
		var s = service;

		try {
			s.setIdleIncrement(0);
			s.start();
			s.stop();
			assertTrue(s.getServiceState() === "stopped");
			assertTrue(s.getIdleTime() === 0);
		} catch (e) {
			fail(e);
		}
	
	});
	
	it("will ensure that service has status right after start", function() {
		
		var s = service;

		try {
			s.setIdleIncrement(0);
			s.start();
			assertTrue(s.getServiceState() === "working");
			s.stop();
			assertTrue(s.getServiceState() === "stopped");
			assertTrue(s.getIdleTime() === 0);
		} catch (e) {
			fail(e);
		}
	
	});
	
	it("will ensure that service is incrementing idle time", function() {
		
		var s = service;

		try {
			s.setIdleIncrement(0);
			s.start();
			assertTrue(s.getServiceState() === "working");		
			setTimeout(function() {
				assertTrue(s.getIdleTime() > 499);
				s.stop();
				assertTrue(s.getServiceState() === "stopped");
				assertTrue(s.getIdleTime() === 0);
			}, 500);			
		} catch (e) {
			fail(e);
		}
	});
	
});