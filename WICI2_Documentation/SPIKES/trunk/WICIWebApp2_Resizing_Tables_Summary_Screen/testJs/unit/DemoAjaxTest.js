describe("WICI.DemoAjax", function() {
	var logPrefix = "[TEST::WICI.DemoAjax::] ";
	var service = null;

	beforeEach(function() {
		service = new WICI.DemoAjax();
	});
	

	it("AJAXrequest Login", function() {
		var s = service;
		assertTrue(s.AJAXrequest(WICI.ServiceNameEnum.Login));
	});
	
	it("AJAXrequest IsAlive", function() {
		var s = service;
		assertTrue(s.AJAXrequest(WICI.ServiceNameEnum.IsAlive));
	});
	it("AJAXrequest AddressLookup", function() {
		var s = service;
		assertTrue(s.AJAXrequest(WICI.ServiceNameEnum.AddressLookup));
	});
	it("AJAXrequest AccountApplication", function() {
		var s = service;
		assertTrue(s.AJAXrequest(WICI.ServiceNameEnum.AccountApplication));
	});
	it("AJAXrequest wrong service name passed", function() {
		var s = service;
		assertFalse(s.AJAXrequest(555));
	});
	
});