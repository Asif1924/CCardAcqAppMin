describe("AppConfig", function() {
	var sut;
	
	beforeEach(function() {
		sut = WICI.AppConfig;
	});
	
	it("will make sure Maximum submission retries are only 1", function() {
		expect(sut.SubmissionConfig.MAX_SUBMISSION_RETRIES).not.toEqual(3); //old value
		expect(sut.SubmissionConfig.MAX_SUBMISSION_RETRIES).toEqual(1);		//new value
	});
});