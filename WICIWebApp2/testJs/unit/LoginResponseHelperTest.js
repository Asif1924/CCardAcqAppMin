describe("LoginResponseHelper Test", function() {

	var sut;
	
	var epamfmr_Successful_AUTHENTICATE_and_AUTHORIZE_ResponseObject = {"error":false,"msg":"SUCCESSFUL Authentication and authorization for user epamfmr","data":{"statusCode":"200","LTPAToken":"LtpaToken2\u003dBc/G3F3cuRo26yTYNnwNKMTmviEW8Cl2DNZs/I/oZxdJgLFFlVuqaoXBVYV7NaE/CJzXC6uwOak3kK+f4XziTbbi2uRg40OcoLf6Aj+vZEYlPeezKYOpIfQl5hUmIfgXQrA9x6gm5r3/bBIz4iZ/KUGJB4d8ZQ8Vm7W4LqAFICKHVLe+8uzxX9qhFkSaFFSYxwyv7vGfrAtQ0ttlXHEhxh73WTElUjF1p6tPgsaOW/C11He1N+GCOtAErkL5BDpfu87uziVzGUXAxXybfFOGMhfh2M6ClBTvYyRyzkXWoEczPUSNURE81UtBqR35qyRCEoImeCxopxbGc8Hdan+cC9gWEzfDDw+jC/mz+nwk9dObZlvZljQBaHVtTKXWLvphYgss+F8JazVI1djLKhVfAZt7xVqItuaiKwGlxSYrjULNqTj86DMqqzuOmNq1yMRGNEEP2Q/kcr3VJOkIoCgij1TOY4HQy894qNl4M43WVOGXxNzi9uWebT/G5yWJUeX7VbqgFeRlo/xPox3EnFdK6wrTNkDUUEbveGgFe+rCHKEQDDLQA9fKNZ02qXGe+3FbJpUU8YT5QMmo6mDFqnYVvsm37tZ79JwM2EDi6Je3ci+RLradrYnoKxt3YDUMe2PzmTsrFkuPYcGy+Mz0HE4iM/VaLr/BTzUWZcgnnpT0vtbCHY8sVRfgsgi497IPQoOwaGBugHzlruj8aq+q7dJSLnhajmH8fhpXpAe4Y+4kwTs\u003d; Path\u003d/"}};
	var epamwas_Successful_AUTHENTICATE_but_FAILED_AUTHORIZE_ResponseObject = {"error":false,"msg":"User epamwas successfully authenticated but is not in appropriate role.","data":{"statusCode":"403","LTPAToken":"LtpaToken2\u003dCS5xp1h/VT9mmk/lVDoi4KDlGGtUtqvdItTeJV+G52usYxOhsCEiSAZb4rf5/p7x3aY+UIcKqu6zwhe2Q/BG+0QUsvBbN7NTzK2efpaNh8VG/jP/aA5OH0/2IL2Le8j/lISKXMzJpbiIYE/u5CNwIdeBSmRx4ERKpqeUulHHn8M/hoPr6fKBY1o7EPy+R6nsBPFq8RWMwDIqwwh0sg2YXIMmv27655wBSSNFp/TrPZ2AIfjG2JXPMnwvBXUcq1kvmYegTMIZPDoUQosJvRjQpzz9YEOZejot9x4/xRe3g3CVGWmCngoQ1TkWTsvqoymrJE+vPTVdv9b6Zr/fR2ywy+AS5b02Uf6ZV7BDu7O6GGCt5tPaROaekGSgEC1WRZX+uGBJf1Ep7f9YVHQIBRspNqfisDzKUVbYWbrkAygs6oSo3s6Yw2smM116bT6A93fqDWLOTkrFUPravNx1iO1SMeXpGZ3zLXji2pJWbE5QYGuwiYcsDBTQIQZ4uBiWRsFQZU8jZbU/KL6I9nCKBrO4L7bsYeeRqC5VM8+tHEfkgQRb3pmY1slj79uLsvjSNHbgVmipwjs8Snj/I1oh0JUujFHZ/W/VLs96brRktJ1wCwb0ThC1o/rbZWhBUD1GBqkCswBdvrzo/utoon1PTKF6eg2k5kZRFKh7JQDGdoU3s+ZAQkXhLgidVzsQXOpf53tw28s6kUFQZEoXdPxAe/YEUVjf5ySf5IImj0MfGkGvRgI\u003d; Path\u003d/"}};
	var badloginpassword_FAILED_AUTHENTICATE_and_FAILED_AUTHORIZE_ResponseObject = {"error":false,"msg":"User scoobydoo failed authentication","data":{"statusCode":"403"}};
	
	var updatedLogin_with_roles = {"error":false,"msg":"SUCCESSFUL Authentication and authorization for user epamfmr","data":{"statusCode":"200","LTPAToken":"LtpaToken2\u003dKKVEycPUafb+23A7QAHpyWxKvuUfCIcgZu2BfqVGeauJvUqk35jmx34G3m0c8y+Vcln+6bgj0VtoNSn5ayWUsGQftWKM9EBCejecU7vIVS6PeV19jIezB++5jxCZsmnEw8kwjrOaIR0GqhtsbSPYkjqVU4p7TW5FmsF3uoo1n9xPyLk2Kh7xZRchZ4UpEhexe7fd3fjCnot+MvtLJDn2CUaxeNMHOR00+DUfeglstJHeWCdX7uc9eH/mu+kKRl6gHtPGlkSXEhMc8p3BDgj4hT4AZyBOYaQ33p4XNvZ2iuycwReVFw3U9JSELkL/zTriNk2DsV46dgazhKe14xEoFr/Ztti8JH9lBpU/BKQ0E9Ac8C1tPRd6TQPYLnoyuT9k+1DvoKwW7oJjFnexk6uBJiM2qFphzsUTu8O59vkva4EFHBSIMhxF8r5Pw9f54Ln+jtZpsgjhYTGTweyAgKR4xRiDcB12LBPpFYpcmF0rSPddbMcD76lBXUWqVrWWHnoSy0d0q3c+aDa+nmDxQxBtulflCfHb3joMnlUJRCo1U6K+m1Afzxbomh+u4/4wH9GKZnm/bY5s5C8fdjrF61lLXNek8IvPu3l1wJKUwMJ712TLQk7aY33kOmTRZVzWl7jRbUDlWq88LJGQLlnomyYuk+65d817tXqxdjCxGjEVi/jyrCNA6u/KeWVuWKq2oVGwxtX8KhQm7veSFzwYne/+DdSBzD5Vh7mNKyZDU2ySOEo\u003d; Path\u003d/","message":"SUCCESSFUL Authentication and authorization for user epamfmr","roles":"[\"FMR\",\"WICI-ADMIN\"]","checkLocation":{"message":"SUCCESS","outletName":"ASSOCIATE STORE     ","outletNumber":"45","outletStreet":"304 Main Street East          ","outletCity":"Hamilton                 ","outletProvince":"ON","outletPostal":"L8N1H9"}}};
	var updatedLoginReponse_with_EmployerIDCheck_and_UserLocation_with_FMR_Role = {"error":false,"msg":"SUCCESSFUL Authentication and authorization for user 01234","data":{"statusCode":"200","LTPAToken":"FakeToken","message":"SUCCESSFUL Authentication and authorization for user 01234","roles":"[\"FMR\"]","checkLocation":{"message":"SUCCESS","outletName":"ASSOCIATE STORE     ","outletNumber":"22","outletStreet":"801 Centre St.                ","outletCity":"Espanola                 ","outletProvince":"ON","outletPostal":"P5E1N2"}}};
	
	var updatedLogin_with_Invalid_EmployerID = {"error":false,"msg":"Invalid Employer Id. Please correct and try again","data":{"statusCode":"403","message":"Invalid Employer Id. Please correct and try again"}};
	
	//DDD Feature
	var loginWithDDDResponse = {"error":false,"msg":"SUCCESSFUL Authentication and authorization for user a23","data":{"statusCode":"200","LTPAToken":"FakeToken","message":"SUCCESSFUL Authentication and authorization for user a23","roles":"[\"FMR\"]","checkLocation":{"message":"SUCCESS","outletName":"ASSOCIATE STORE     ","outletNumber":"100","outletStreet":"911 Central Ave N","outletCity":"Swiftcurrent             ","outletProvince":"SK","outletPostal":"S9H3V3"},"dictionaryInfo":{"LatestDictionaryVersion":"1.1","DictionaryURLEnglish":"https://www.ctfs.com/SharedContent/wici/dict/preprod/Messages_en.js","DictionaryURLFrench":"https://www.ctfs.com/SharedContent/wici/dict/preprod/Messages_fr.js","OlderDictionaryAllowable":true}}};
	
	beforeEach(function() {
		sut = new WICI.LoginResponseHelper();
	});	

	it(" will confirm that a successful authentication and authorization can be determined by status code 200, LTPA TOKEN exists and no error", function() {
		//.loginSuccessful makes a decision based on several rules which will determine if the login is good or bad
		sut.setLoginResponseObject(epamfmr_Successful_AUTHENTICATE_and_AUTHORIZE_ResponseObject);		
		expect(sut.loginSuccessful()).toEqual(true);
	});		

	it(" will confirm that a successful authentication and authorization can be determined by status code 200, LTPA TOKEN exists and no error with new login response", function() {
		//.loginSuccessful makes a decision based on several rules which will determine if the login is good or bad
		sut.setLoginResponseObject(updatedLoginReponse_with_EmployerIDCheck_and_UserLocation_with_FMR_Role);		
		expect(sut.loginSuccessful()).toEqual(true);
	});		

	it(" will confirm that a successful authentication and authorization with roles can be determined by status code 200, LTPA TOKEN exists and no error", function() {
		//.loginSuccessful makes a decision based on several rules which will determine if the login is good or bad
		sut.setLoginResponseObject(updatedLogin_with_roles);		
		expect(sut.loginSuccessful()).toEqual(true);
	});		
	
	it(" will confirm that a successful authentication but failed authorization will result in a login failure", function() {
		//This means that the user account was authenticated but the role assigned is not authorized
		sut.setLoginResponseObject(epamwas_Successful_AUTHENTICATE_but_FAILED_AUTHORIZE_ResponseObject);		
		expect(sut.loginSuccessful()).toEqual(false);
	});			
	
	it(" will confirm that a failed authentication and authorization can be determined by status code 403 and no LTPA Token", function() {
		//This means that the user account was not authenticated for whatever reason, eg. bad username/password
		sut.setLoginResponseObject(badloginpassword_FAILED_AUTHENTICATE_and_FAILED_AUTHORIZE_ResponseObject);		
		expect(sut.loginSuccessful()).toEqual(false);
	});		
	
	it(" will confirm that a failed EmployerID lookup will also be considered a failed login", function(){
		sut.setLoginResponseObject(updatedLogin_with_Invalid_EmployerID);
		expect(sut.loginSuccessful()).toEqual(false);
	});
	
	it(" will confirm that a failed EmployerID lookup can get the error message from the response", function(){
		sut.setLoginResponseObject(updatedLogin_with_Invalid_EmployerID);
		expect(sut.getLoginResponseMessage()).toEqual("Invalid Employer Id. Please correct and try again");
	});

	it(" will confirm that a failed EmployerID lookup can get the right bundle code for the error message", function(){
		sut.setLoginResponseObject(updatedLogin_with_Invalid_EmployerID);
		expect(sut.getBundleCodeForErrorMessage()).toEqual("loginScreen_EmployerIDLookup_FailedMessage");
	});
	it(" will confirm that a failed authentication and authorization which has a status code 403 and no LTPA Token will return default bundle code for error message", function() {
		//This means that the user account was not authenticated for whatever reason, eg. bad username/password
		sut.setLoginResponseObject(badloginpassword_FAILED_AUTHENTICATE_and_FAILED_AUTHORIZE_ResponseObject);		
		expect(sut.loginSuccessful()).toEqual(false);
		expect(sut.getBundleCodeForErrorMessage()).toEqual("loginScreen_FailureMessage");
	});	
	it(" will confirm that a successful authentication and authorization can be determined by status code 200, LTPA TOKEN exists and no error on new response object with DDD response object", function() {
		//.loginSuccessful makes a decision based on several rules which will determine if the login is good or bad
		sut.setLoginResponseObject(loginWithDDDResponse);		
		expect(sut.loginSuccessful()).toEqual(true);
	});	
	
	it(" will extract the Dictionary config info from the login response object", function() {
		
		sut.setLoginResponseObject(loginWithDDDResponse);		
		expect(sut.getLatestDictionaryInfo()).not.toEqual(null);
	});

});