describe("EmailInformationControllerTest", function() {
	
	describe("Inner Model", function() {

		var EmailInformationController = null;	
	    var emailInfoDataModel = null;

		beforeEach(function() {
			EmailInformationController = new WICI.EmailInformationController();
			if (EmailInformationController) {
				emailInfoDataModel = EmailInformationController.innerModel;
			}
		});
		
		it("will ensure correct 'email' can be empty", function() {	    	    	
    		emailInfoDataModel.set('email', '');    		
    		expect(_.isEmpty(emailInfoDataModel.validate())).toEqual(false);
	    });      
	    
        it("should validate info@knoldus.com",function(){
        	var result = emailInfoDataModel.isEmail_valid("info@knoldus.com");
        	emailInfoDataModel.set('email', ''); 
        	expect(result).toBe(true);
        });
        
        it("should validate firstname.lastname@example.com",function(){
        	var result = emailInfoDataModel.isEmail_valid("firstname.lastname@example.com");
        	emailInfoDataModel.set('email', ''); 
        	expect(result).toBe(true);
        });
        
        it("should validate email@subdomain.example.com",function(){
        	var result = emailInfoDataModel.isEmail_valid("email@subdomain.example.com");
        	emailInfoDataModel.set('email', ''); 
        	expect(result).toBe(true);
        });
        
        it("should not validate info@knoldus",function(){
        	var result = emailInfoDataModel.isEmail_valid("info@knoldus");
        	emailInfoDataModel.set('email', '');
        	expect(result).not.toBe(true);
        });
        
        it("should not validate email@111.222.333.44444",function(){
        	var result = emailInfoDataModel.isEmail_valid("email@111.222.333.44444");
        	emailInfoDataModel.set('email', '');
        	expect(result).not.toBe(true);
        });
        
	});
	
});