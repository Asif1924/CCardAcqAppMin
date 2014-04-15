describe("PersonalDataScreenController", function() {
	
	describe("Inner Model", function() {

		var personalDataController = null;	
	    var personalDataModel = null;

		beforeEach(function() {
			personalDataController = new WICI.PersonalDataScreenController();
			if (personalDataController) {
				personalDataModel = personalDataController.innerModel;
			}
		});
		
	    it("will ensure 'placeofissue' cannot be empty", function() {
	    	
    		personalDataModel.set('placeofissue', ''); // <---
    		personalDataModel.set('idtype', 'DR');
    		personalDataModel.set('idnumbers', '12345');
    		personalDataModel.set('firstName', 'JOHN');
    		personalDataModel.set('initial', 'J');
    		personalDataModel.set('lastName', 'SMITH');
    		personalDataModel.set('birthDate', '1984-01-01');
    		personalDataModel.set('homePhone', '1234567890');
    		personalDataModel.set('correspondence', 'E');

    		expect(_.isEmpty(personalDataModel.validate())).toEqual(false);
	    });
	    
	    it("will ensure 'idtype' cannot be empty", function() {
	    	
    		personalDataModel.set('placeofissue', 'AB'); 
    		personalDataModel.set('idtype', ''); // <---
    		personalDataModel.set('idnumbers', '12345');
    		personalDataModel.set('firstName', 'JOHN');
    		personalDataModel.set('initial', 'J');
    		personalDataModel.set('lastName', 'SMITH');
    		personalDataModel.set('birthDate', '1984-01-01');
    		personalDataModel.set('homePhone', '1234567890');
    		personalDataModel.set('correspondence', 'E');

    		expect(_.isEmpty(personalDataModel.validate())).toEqual(false);
	    });
	    
	    it("will ensure 'idnumbers' cannot be empty", function() {
	    	
    		personalDataModel.set('placeofissue', 'AB'); 
    		personalDataModel.set('idtype', 'DR'); 
    		personalDataModel.set('idnumbers', ''); // <---
    		personalDataModel.set('firstName', 'JOHN');
    		personalDataModel.set('initial', 'J');
    		personalDataModel.set('lastName', 'SMITH');
    		personalDataModel.set('birthDate', '1984-01-01');
    		personalDataModel.set('homePhone', '1234567890');
    		personalDataModel.set('correspondence', 'E');

    		expect(_.isEmpty(personalDataModel.validate())).toEqual(false);
	    });		    
	    
	    it("will ensure 'idnumbers' contain more then 20 characters", function() {
	    	
    		personalDataModel.set('placeofissue', 'AB'); 
    		personalDataModel.set('idtype', 'DR'); 
    		personalDataModel.set('idnumbers', '123451234512345123451'); // <---
    		personalDataModel.set('firstName', 'JOHN');
    		personalDataModel.set('initial', 'J');
    		personalDataModel.set('lastName', 'SMITH');
    		personalDataModel.set('birthDate', '1984-01-01');
    		personalDataModel.set('homePhone', '1234567890');
    		personalDataModel.set('correspondence', 'E');

    		expect(_.isEmpty(personalDataModel.validate())).toEqual(false);
	    });	    
	    
	    it("will ensure 'firstName' cannot be empty", function() {
	    	
    		personalDataModel.set('placeofissue', 'AB'); 
    		personalDataModel.set('idtype', 'DR'); 
    		personalDataModel.set('idnumbers', '12345'); 
    		personalDataModel.set('firstName', ''); // <---
    		personalDataModel.set('initial', 'J');
    		personalDataModel.set('lastName', 'SMITH');
    		personalDataModel.set('birthDate', '1984-01-01');
    		personalDataModel.set('homePhone', '1234567890');
    		personalDataModel.set('correspondence', 'E');

    		expect(_.isEmpty(personalDataModel.validate())).toEqual(false);
	    });		    
	    
	    it("will ensure 'lastName' cannot be empty", function() {
	    	
    		personalDataModel.set('placeofissue', 'AB'); 
    		personalDataModel.set('idtype', 'DR'); 
    		personalDataModel.set('idnumbers', '12345'); 
    		personalDataModel.set('firstName', 'JOHN'); 
    		personalDataModel.set('initial', 'JJ'); 
    		personalDataModel.set('lastName', ''); // <---
    		personalDataModel.set('birthDate', '1984-01-01');
    		personalDataModel.set('homePhone', '1234567890');
    		personalDataModel.set('correspondence', 'E');

    		expect(_.isEmpty(personalDataModel.validate())).toEqual(false);
	    });	    
	    
	    it("will ensure 'birthDate' cannot be empty", function() {
	    	
    		personalDataModel.set('placeofissue', 'AB'); 
    		personalDataModel.set('idtype', 'DR'); 
    		personalDataModel.set('idnumbers', '12345'); 
    		personalDataModel.set('firstName', 'JOHN'); 
    		personalDataModel.set('initial', 'JJ'); 
    		personalDataModel.set('lastName', 'SMITH'); 
    		personalDataModel.set('birthDate', ''); // <---
    		personalDataModel.set('homePhone', '1234567890');
    		personalDataModel.set('correspondence', 'E');

    		expect(_.isEmpty(personalDataModel.validate())).toEqual(false);
	    });
	    
	    it("will ensure 'homePhone' cannot be empty", function() {
	    	
    		personalDataModel.set('placeofissue', 'AB'); 
    		personalDataModel.set('idtype', 'DR'); 
    		personalDataModel.set('idnumbers', '12345'); 
    		personalDataModel.set('firstName', 'JOHN'); 
    		personalDataModel.set('initial', 'JJ'); 
    		personalDataModel.set('lastName', 'SMITH'); 
    		personalDataModel.set('birthDate', '1984-01-01'); 
    		personalDataModel.set('homePhone', ''); // <---
    		personalDataModel.set('correspondence', 'E');

    		expect(_.isEmpty(personalDataModel.validate())).toEqual(false);
	    });	 	    
	    
	    it("will ensure 'correspondence' cannot be empty", function() {
	    	
    		personalDataModel.set('placeofissue', 'AB'); 
    		personalDataModel.set('idtype', 'DR'); 
    		personalDataModel.set('idnumbers', '12345'); 
    		personalDataModel.set('firstName', 'JOHN'); 
    		personalDataModel.set('initial', 'JJ'); 
    		personalDataModel.set('lastName', 'SMITH'); 
    		personalDataModel.set('birthDate', '1984-01-01'); 
    		personalDataModel.set('homePhone', '1234567890'); 
    		personalDataModel.set('correspondence', ''); // <---

    		expect(_.isEmpty(personalDataModel.validate())).toEqual(false);
	    });	 	 	
		
	});
	
});