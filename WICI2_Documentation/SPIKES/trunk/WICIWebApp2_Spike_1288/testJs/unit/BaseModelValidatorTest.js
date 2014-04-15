describe("BaseModel Validator", function() {
	
	describe("LoginScreen employerID", function() {
		var loginScreenRefs = null;	
	    var loginScreenModelSUT = null;
		
		beforeEach(function() {
			loginScreenRefs = {
					employerID		: '#employerIDTextField',
			};
			
			loginScreenModelSUT =new WICI.BaseModel({
		        name: 'loginScreen',
		        refs: loginScreenRefs, 
		        data:[
		            {name: 'employerID', value: null, validation: {type: 'format', message: 'Employer ID is invalid',      matcher: /^[a-zA-Z0-9]{1}$/,		group: [1]} },
		       ]
		    });			
			
		});
		
	    it("will ensure employerID can be a letter", function() {
	    	loginScreenModelSUT.set('employerID', "E");
	    	var validates = loginScreenModelSUT.validate(1);    	

	    	//If validates is empty it means there is a match, otherwise its not a match
	    	expect(_.isEmpty(validates)).toEqual(true);
	    });

	    it("will ensure employerID can be a number", function() {
	    	loginScreenModelSUT.set('employerID', "6");
	    	var validates = loginScreenModelSUT.validate(1);    	

	    	expect(_.isEmpty(validates)).toEqual(true);
	    });

	    it("will ensure employerID cannot be a special character", function() {
	    	loginScreenModelSUT.set('employerID', "$");
	    	var validates = loginScreenModelSUT.validate(1);    	
	    	
	    	expect(_.isEmpty(validates)).toEqual(false);    	
	    });

	    it("will ensure employerID can be only 1 character", function() {
	    	loginScreenModelSUT.set('employerID', "a");
	    	var validates = loginScreenModelSUT.validate(1);    	
	    	
	    	expect(_.isEmpty(validates)).toEqual(true);  
	    	
	    	loginScreenModelSUT.set('employerID', "aa");
	    	var validates = loginScreenModelSUT.validate(1);
	    	
	    	expect(_.isEmpty(validates)).toEqual(false);  
	    });		
	});

	describe("LoginScreen agentID", function() {
		var loginScreenRefs = null;	
	    var loginScreenModelSUT = null;
		
		beforeEach(function() {
			loginScreenRefs = {
					agentID		: '#agentIDTextField',
			};
			
			loginScreenModelSUT =new WICI.BaseModel({
		        name: 'loginScreen',
		        refs: loginScreenRefs, 
		        data:[
		            {name: 'agentID', value: null, validation: {type: 'format',     message: 'Agent ID is invalid',      matcher: /^[a-zA-Z0-9]{1,20}$/,		group: [1]} },
		       ]
		    });			
			
		});
		
	    it("will ensure agentID cannot be a special character", function() {
	    	loginScreenModelSUT.set('agentID', "$");
	    	var validates = loginScreenModelSUT.validate(1);    	
	    	
	    	expect(_.isEmpty(validates)).toEqual(false);    	
	    });

	    it("will ensure agentID cannot have a special character", function() {
	    	loginScreenModelSUT.set('agentID', "1231$12313213");
	    	var validates = loginScreenModelSUT.validate(1);    	
	    	
	    	expect(_.isEmpty(validates)).toEqual(false);    	
	    });
	
	    it("will ensure agentID can have both alpha and numbers", function() {
	    	loginScreenModelSUT.set('agentID', "123ff123zG213");
	    	var validates = loginScreenModelSUT.validate(1);    	
	    	
	    	expect(_.isEmpty(validates)).toEqual(true);    	
	    });

	    it("will ensure agentID can have 20 characters", function() {
	    	loginScreenModelSUT.set('agentID', "01234567890123456789");
	    	var validates = loginScreenModelSUT.validate(1);    	
	    	
	    	expect(_.isEmpty(validates)).toEqual(true);    	
	    });
	
	    it("will ensure agentID cannot have more than 20 characters", function() {
	    	loginScreenModelSUT.set('agentID', "012345678901234567891");
	    	var validates = loginScreenModelSUT.validate(1);    	
	    	
	    	expect(_.isEmpty(validates)).toEqual(false);    	
	    });

	    it("will ensure agentID cannot have a space at the beginning of the value", function() {
	    	loginScreenModelSUT.set('agentID', " 123456789 1234567891");
	    	var validates = loginScreenModelSUT.validate(1);    	
	    	
	    	expect(_.isEmpty(validates)).toEqual(false);    	
	    });

	    it("will ensure agentID cannot have a space within the value", function() {
	    	loginScreenModelSUT.set('agentID', "0123456789 1234567891");
	    	var validates = loginScreenModelSUT.validate(1);    	
	    	
	    	expect(_.isEmpty(validates)).toEqual(false);    	
	    });

	    it("will ensure agentID cannot have spaces at the end of the value", function() {
	    	loginScreenModelSUT.set('agentID', "012345678901234567   ");
	    	var validates = loginScreenModelSUT.validate(1);    	
	    	
	    	expect(_.isEmpty(validates)).toEqual(false);    	
	    });

	    it("will ensure if agentID has spaces at the end of the value, the validator returns an error", function() {
	    	loginScreenModelSUT.set('agentID', "012345678901234567   ");
	    	var validates = loginScreenModelSUT.validate(1);    	
	    	
	    	expect(validates[0].err).toEqual("Agent ID is invalid");    	
	    });

	    it("will ensure if agentID has spaces at the beginning of the value, the validator returns an error", function() {
	    	loginScreenModelSUT.set('agentID', "   34567890123456789");
	    	var validates = loginScreenModelSUT.validate(1);    	
	    	
	    	expect(validates[0].err).toEqual("Agent ID is invalid");    	
	    });

	});
	describe("ChooseProductScreen agencyPromoCode", function() {
		var chooseProductScreenRefs = null;	
	    var chooseProductScreenModelSUT = null;
		
		beforeEach(function() {
		    chooseProductScreenRefs = {
		            agencyPromoCode: '#promoCodeTextField',            
		    };
		    
		    chooseProductScreenModelSUT = new WICI.BaseModel({
		        name: 'chooseProductModel',
		        refs: chooseProductScreenRefs, 
		        data:[              
		                  {name: 'agencyPromoCode',  value: null, validation: { type: 'format', message: 'Enter valid Promo Code', matcher: /^[a-zA-Z0-9\'\-]{1,5}$/, canBeEmpty: true,		group: [1] }},                
		             ]
		    });			
			
		});
		
	    it("will ensure agencyPromoCode can be a letter", function() {
	    	chooseProductScreenModelSUT.set('agencyPromoCode', "E");
	    	var validates = chooseProductScreenModelSUT.validate(1);    	

	    	//If validates is empty it means there is a match, otherwise its not a match
	    	expect(_.isEmpty(validates)).toEqual(true);
	    });

	    it("will ensure agencyPromoCode can be a number", function() {
	    	chooseProductScreenModelSUT.set('agencyPromoCode', "6");
	    	var validates = chooseProductScreenModelSUT.validate(1);    	

	    	expect(_.isEmpty(validates)).toEqual(true);
	    });

	    it("will ensure agencyPromoCode cannot be a special character of $", function() {
	    	chooseProductScreenModelSUT.set('agencyPromoCode', "$");
	    	var validates = chooseProductScreenModelSUT.validate(1);    	
	    	
	    	expect(_.isEmpty(validates)).toEqual(false);    	
	    });
		
	    it("will ensure agencyPromoCode can be a special character of '", function() {
	    	chooseProductScreenModelSUT.set('agencyPromoCode', "'");
	    	var validates = chooseProductScreenModelSUT.validate(1);    	
	    	
	    	expect(_.isEmpty(validates)).toEqual(true);    	
	    });
		
	    it("will ensure agencyPromoCode can be a special character of -", function() {
	    	chooseProductScreenModelSUT.set('agencyPromoCode', "-");
	    	var validates = chooseProductScreenModelSUT.validate(1);    	
	    	
	    	expect(_.isEmpty(validates)).toEqual(true);    	
	    });
		
	    it("will ensure agencyPromoCode cannot be more than 5 characters", function() {
	    	chooseProductScreenModelSUT.set('agencyPromoCode', "123456");
	    	var validates = chooseProductScreenModelSUT.validate(1);    	
	    	
	    	expect(_.isEmpty(validates)).toEqual(false);    	
	    });
	});
	
});