describe("Validator", function() {
	var sut;
	
	beforeEach(function() {
		sut = new WICI.Validator();
	});
	
	it("will make sure all values are empty", function() {
		expect(sut.notEmpty("")).toBeFalsy();
		expect(sut.notEmpty(undefined)).toBeFalsy();
		expect(sut.notEmpty(" ")).toBeFalsy();
		expect(sut.notEmpty(" asdfasd")).toBeTruthy();
	});
		
	it("will make sure string is less than a defined length", function() {
		expect(sut.maxSize("llll", 3)).toBeFalsy();
		expect(sut.maxSize("333", 3)).toBeTruthy();
		expect(sut.maxSize("", 4)).toBeTruthy();
	});
	
	it("will make sure value is more than 0", function() {
		expect(sut.moreThanZero(0)).toBeFalsy();
		expect(sut.moreThanZero(2)).toBeTruthy();
	});
			
	it("will ensure a postal code has the letter number format ", function() {
		expect(sut.postalCode("")).toBeFalsy();
		expect(sut.postalCode("444443")).toBeFalsy();
		expect(sut.postalCode("44444")).toBeFalsy();
		expect(sut.postalCode("M5T333")).toBeFalsy();
		expect(sut.postalCode("M5T3S3A")).toBeFalsy();
		expect(sut.postalCode("AM5T3S3")).toBeFalsy();
		
		expect(sut.postalCode("M2R4E4")).toBeTruthy();
		expect(sut.postalCode("X3J3G4")).toBeTruthy();
		expect(sut.postalCode("X3j3g4")).toBeFalsy();
	});	
	
	describe("email validation", function() {
		it("will allow an empty email address", function() {
			expect(sut.emailAddress("")).toBeTruthy();
			expect(sut.emailAddress(" ")).toBeTruthy();
		});
		
		it("will trim email addresses of spaces", function() {
			expect(sut.emailAddress("  someone@somewhere.com  ")).toBeTruthy();
		});
		
		it("will allow correct email addresses", function() {
			expect(sut.emailAddress("someone@somewhere.com")).toBeTruthy();
			expect(sut.emailAddress("someone@somewhere.ca")).toBeTruthy();
			expect(sut.emailAddress("someone.lastname@somewhere.com")).toBeTruthy();
			expect(sut.emailAddress("someone-lastname@some-where.com")).toBeTruthy();
			expect(sut.emailAddress("someonelastname@somewhere.co.uk")).toBeTruthy();
			expect(sut.emailAddress("someone-lastname+tag@somewhere.com")).toBeTruthy();
		});
	});
		
	it("will check that multiple values match", function() {
		expect(sut.matches("value", "other Field")).toBeFalsy();
		
		expect(sut.matches("value", "value")).toBeTruthy();
	});
	
	describe("- isOnlyNumeric && isWholeNumber", function(){
		it("integer number is a number - ", function() {
	    	expect(sut.isOnlyNumeric(10)).toBeTruthy();
	    });
	    it("integer number is a number .0 (10.0 == 10 == integerNumber)", function() {
	    	expect(sut.isOnlyNumeric(10.0)).toBeTruthy();
	    });
	    it("number is not a only numeric number .5", function() {
	    	expect(sut.isOnlyNumeric(10.5)).toBeFalsy();
	    });
	    it("string integer number is a integer number", function() {
	    	expect(sut.isOnlyNumeric("10")).toBeTruthy();
	    });
	    it("number has decimal is not an integer number .0", function() {
	    	expect(sut.isOnlyNumeric("10.0")).toBeFalsy();
	    });
	    it("number has decimal is not an integer number .5", function() {
	    	expect(sut.isOnlyNumeric("10.5")).toBeFalsy();
	    });
	    it("number is null is not an integer number", function() {
	    	expect(sut.isOnlyNumeric(null)).toBeFalsy();
	    });
	    it("number is undefined is not an integer number", function() {
	    	expect(sut.isOnlyNumeric(undefined)).toBeFalsy();
	    });
	    it("number is the empty string is not an integer number", function() {
	    	expect(sut.isOnlyNumeric("")).toBeFalsy();
	    });	    
	    
	    it("integer number is a whole number - ", function() {
	    	expect(sut.isWholeNumber(10)).toBeTruthy();
	    });
	    it("integer number is a whole number .0 (10.0 == 10 == wholeNumber)", function() {
	    	expect(sut.isWholeNumber(10.0)).toBeTruthy();
	    });
	    it("number is not a whole number .5", function() {
	    	expect(sut.isWholeNumber(10.5)).toBeFalsy();
	    });
	    it("string integer is a whole number", function() {
	    	expect(sut.isWholeNumber("10")).toBeTruthy();
	    });
	    it("string number has decimal is a whole number .0", function() {
	    	expect(sut.isWholeNumber("10.0")).toBeTruthy();
	    });
	    it("string number has decimal is not a whole number .5", function() {
	    	expect(sut.isWholeNumber("10.5")).toBeFalsy();
	    });
	    it("null is not a whole number", function() {
	    	expect(sut.isWholeNumber(null)).toBeFalsy();
	    });
	    it("undefined is not a whole number", function() {
	    	expect(sut.isWholeNumber(undefined)).toBeFalsy();
	    });
	    it("empty string is not a whole number", function() {
	    	expect(sut.isWholeNumber("")).toBeFalsy();
	    });
	    it("string that starts with a number ends with a number and has letters in the middle is not a whole number", function() {
	    	expect(sut.isWholeNumber("1qw2")).toBeFalsy();
	    });	    
	});
	
    it("2012 5 is not a future date", function() {
    	expect(sut.isFutureDate(2012, 5)).toBeFalsy();
    });

    it("2099 5 is a future date", function() {
    	expect(sut.isFutureDate(2099, 5)).toBeTruthy();
    });
    
    it("will ensure sin has correct format", function() {
    	expect(sut.sin("11")).toBeFalsy();
    	expect(sut.sin("A1")).toBeFalsy();
    	expect(sut.sin("A111111")).toBeFalsy();
    	expect(sut.sin("1111112A")).toBeFalsy();
    	expect(sut.sin("11111123A")).toBeFalsy();
    	
    	expect(sut.sin("111111234")).toBeTruthy();
    	expect(sut.sin("121334534")).toBeTruthy();
    	
    	expect(sut.sin("1213345345")).toBeFalsy();
    });

    it("will ensure phone has correct format", function() {
    	expect(sut.phone("112")).toBeFalsy();
    	expect(sut.phone("A12")).toBeFalsy();
    	expect(sut.phone("111111")).toBeFalsy();
    	expect(sut.phone("111111245")).toBeFalsy();
    	expect(sut.phone("11111123A")).toBeFalsy();
    	
    	expect(sut.phone("1111112347")).toBeTruthy();
    	expect(sut.phone("1213345344")).toBeTruthy();
    	expect(sut.phone("1234567890")).toBeTruthy();
    	
    	expect(sut.phone("12133453451")).toBeFalsy();
    	expect(sut.phone("121334534A")).toBeFalsy();
    });
  
    it("will ensure streetNumber has correct format", function() {
    	
    	expect(sut.streetNumber("1.2")).toBeFalsy();
    	expect(sut.streetNumber("45-45")).toBeTruthy();
    	expect(sut.streetNumber("4'-45")).toBeTruthy();
    	expect(sut.streetNumber("4'- 5")).toBeTruthy();
    	expect(sut.streetNumber("4'- 5A")).toBeFalsy();
    	expect(sut.streetNumber("4'5-A")).toBeTruthy();
    	
    	expect(sut.streetNumber("4/7")).toBeFalsy();
    	expect(sut.streetNumber("a 4/7")).toBeFalsy();
    	
    	expect(sut.streetNumber("asd7qw")).toBeFalsy();
    	expect(sut.streetNumber("qwe*7q")).toBeFalsy();
    	expect(sut.streetNumber("q*7q")).toBeFalsy();
    });
    
    it("will ensure addressLine has correct format", function() {
    	
    	expect(sut.addressLine("1*#@.2")).toBeFalsy();
    	expect(sut.addressLine("asdasd2353 '-sdf")).toBeFalsy();
    	expect(sut.addressLine("street 1.-2', qwerty")).toBeFalsy();
    	expect(sut.addressLine("SADqw234 -,.12")).toBeFalsy();
    	
    	expect(sut.addressLine("SAD -,.12")).toBeTruthy();
    	expect(sut.addressLine("HSSUID '-HJHG")).toBeTruthy();
    	
    	expect(sut.addressLine("+qwe")).toBeFalsy();
    	expect(sut.addressLine("~wew")).toBeFalsy();
    	
    	expect(sut.addressLine("||sdw")).toBeFalsy();
    	expect(sut.addressLine("sdsssssssssssssssdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfwerwerwerwer")).toBeFalsy();
    	
    });

    it("will ensure employerID can be a letter but not a special character", function() {
    	expect(sut.employerID("$")).toBeFalsy();
    	expect(sut.employerID("a")).toBeTruthy();
    });

    it("will ensure employerID can be only 1 alpha", function() {
    	expect(sut.employerID("aa")).toBeFalsy();
    	expect(sut.employerID("a")).toBeTruthy();
    });

    it("will ensure employerID cannot be a number", function() {
    	expect(sut.employerID("7")).toBeFalsy();
    });
    
});