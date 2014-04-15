describe("BRBDummyPageLauncherTest", function() {
	var sut;
	
	beforeEach(function() {
		sut = new BRB.DummyPageLauncher();
	});
	
	describe("- Test how the property value affects launching the app", function() {
		
		it(" ensures that a false value surrounded by double quotes is actually false", function() {
			
			sut.setDummyPageProperty("false");
			
			expect(sut.getDummyPageProperty()).toEqual(false);
			
		});
		it(" ensures that a true value surrounded by double quotes is actually true", function() {
			
			sut.setDummyPageProperty("true");
			
			expect(sut.getDummyPageProperty()).toEqual(true);
			
		});
	});
});