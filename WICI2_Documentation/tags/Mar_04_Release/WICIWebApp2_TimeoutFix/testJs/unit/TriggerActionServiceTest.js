describe("TriggerActionServiceTest", function() {
	var logPrefix = "[TEST::TriggerActionServiceTest::] ";
	var service = null;

	beforeEach(function() {
		service = new WICI.TriggerActionService();
	});
	
	var setUpServiceWithActionAndTrigger= function(){
		var s = service;
		
		s.setActionMethod(function(){});
		s.setTriggerMethod(function(){ return true; });
		
	};

	it("check the initial service status if it is not started", function() {
		
		var s = service;

		try {
			assertTrue(s.getServiceState() === "stopped");
		} catch (e) {
			fail(e);
		}
	
	});
	
	it("check public and private methods in service", function() {
		
		var s = service;

		assertTrue(typeof s.start === "function");
		assertTrue(typeof s.stop === "function");
		assertTrue(typeof s.setCheckInterval === "function");
		assertTrue(typeof s.setTriggerMethod === "function");
		assertTrue(typeof s.setActionMethod === "function");
		
		assertTrue(typeof s.checkIntervalMethod === "undefined");
		assertTrue(typeof s.init === "undefined");
	});
	
	
	it("status service right after stop", function() {
		
		var s = service;

		try {
			s.setCheckInterval(0);
			setUpServiceWithActionAndTrigger();
			s.start();
			assertTrue(s.getServiceState() === "working");
			s.stop();
			assertTrue(s.getServiceState() === "stopped");
		} catch (e) {
			fail(e);
		}
	
	});
	
	it("setActionMethod proper parameter set test", function() {
		var s = service;
		assertTrue(s.setActionMethod(function(){}));
	});
	it("setActionMethod wrong parameter set test", function() {
		var s = service;
		assertFalse(s.setActionMethod(555));
	});
	
	it("setTriggerMethod proper parameter set test", function() {
		var s = service;
		assertTrue(s.setTriggerMethod(function(){}));
	});
	it("setTriggerMethod wrong parameter set test", function() {
		var s = service;
		assertFalse(s.setTriggerMethod(555));
	});
	
	
	it("starting service without setting trigger", function() {
		var s = service;
		s.setActionMethod(function(){});
		assertFalse(s.start());
	});

	it("starting service without setting action", function() {
		var s = service;
		s.setTriggerMethod(function(){});
		assertFalse(s.start());
	});
	
	it("attempt to start more than one the service", function() {
		
		var s = service;

		try {
			s.setCheckInterval(0);
			setUpServiceWithActionAndTrigger();
			s.start();
			assertFalse(s.start());
			s.stop();
		} catch (e) {
			fail(e);
		}
	
	});

});