describe("AppConfig", function() {
	var sut;

	beforeEach(function() {
		sut = WICI.AppConfig;
	});

	it("will make sure Maximum submission retries are only 3", function() {
		expect(sut.SubmissionConfig.MAX_SUBMISSION_RETRIES).not.toEqual(1); //old value
		expect(sut.SubmissionConfig.MAX_SUBMISSION_RETRIES).toEqual(3);		//new value
	});
});