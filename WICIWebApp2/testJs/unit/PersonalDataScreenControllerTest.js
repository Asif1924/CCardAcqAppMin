describe("PersonalDataScreenController", function() {
	
	xdescribe("Inner Model", function() {

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
        
         it("will ensure 'postalcode' cannot be empty", function() {
            
            personalDataModel.set('postalcode', ''); // <---
            personalDataModel.set('streetnumber', '123');
            personalDataModel.set('addressline1', 'CITY STREET');
            personalDataModel.set('city', 'CITY');
            personalDataModel.set('province', 'NS');
            
            personalDataModel.set('house', 'O');
            personalDataModel.set('years', '6');

            expect(_.isEmpty(personalDataModel.validate())).toEqual(false);
        });
        
        it("will ensure 'postalcode' cannot contain more than 6 characters", function() {
            
            personalDataModel.set('postalcode', 'A1A1A1A1'); // <--- 
            personalDataModel.set('streetnumber', '123');
            personalDataModel.set('addressline1', 'CITY STREET');
            personalDataModel.set('city', 'CITY');
            personalDataModel.set('province', 'NS');
            
            personalDataModel.set('house', 'O');
            personalDataModel.set('years', '6');

            expect(_.isEmpty(personalDataModel.validate())).toEqual(false);
        });     
        
        it("will ensure 'postalcode' cannot contain less than 6 characters", function() {
            
            personalDataModel.set('postalcode', 'A1A1A'); // <--- 
            personalDataModel.set('streetnumber', '123');
            personalDataModel.set('addressline1', 'CITY STREET');
            personalDataModel.set('city', 'CITY');
            personalDataModel.set('province', 'NS');
            
            personalDataModel.set('house', 'O');
            personalDataModel.set('years', '6');

            expect(_.isEmpty(personalDataModel.validate())).toEqual(false);
        });         
        
        it("will ensure 'postalcode' has correct alphanumeric format", function() {
            
            personalDataModel.set('postalcode', 'D1A1A1'); // <---  'D' is not valid as a first character
            personalDataModel.set('streetnumber', '123');
            personalDataModel.set('addressline1', 'CITY STREET');
            personalDataModel.set('city', 'CITY');
            personalDataModel.set('province', 'NS');
            
            personalDataModel.set('house', 'O');
            personalDataModel.set('years', '6');

            expect(_.isEmpty(personalDataModel.validate())).toEqual(false);
        });     
        
        it("will ensure 'streetnumber' cannot be empty", function() {
            
            personalDataModel.set('postalcode', 'A1A1A1'); 
            personalDataModel.set('streetnumber', ''); // <---
            personalDataModel.set('addressline1', 'CITY STREET');
            personalDataModel.set('city', 'CITY');
            personalDataModel.set('province', 'NS');
            
            personalDataModel.set('house', 'O');
            personalDataModel.set('years', '6');

            expect(_.isEmpty(personalDataModel.validate())).toEqual(false);
        });  
        
        it("will ensure 'addressline1' cannot be empty", function() {
            
            personalDataModel.set('postalcode', 'A1A1A1'); 
            personalDataModel.set('streetnumber', '123'); 
            personalDataModel.set('addressline1', ''); // <---
            personalDataModel.set('city', 'CITY');
            personalDataModel.set('province', 'NS');
            
            personalDataModel.set('house', 'O');
            personalDataModel.set('years', '6');

            expect(_.isEmpty(personalDataModel.validate())).toEqual(false);
        });
        
        it("will ensure 'city' cannot be empty", function() {
            
            personalDataModel.set('postalcode', 'A1A1A1'); 
            personalDataModel.set('streetnumber', '123'); 
            personalDataModel.set('addressline1', 'STREET CITY'); 
            personalDataModel.set('city', ''); // <---
            personalDataModel.set('province', 'NS');
            
            personalDataModel.set('house', 'O');
            personalDataModel.set('years', '6');

            expect(_.isEmpty(personalDataModel.validate())).toEqual(false);
        });
        
        it("will ensure 'province' cannot be empty", function() {
            
            personalDataModel.set('postalcode', 'A1A1A1'); 
            personalDataModel.set('streetnumber', '123'); 
            personalDataModel.set('addressline1', 'STREET CITY'); 
            personalDataModel.set('city', 'CITY'); 
            personalDataModel.set('province', ''); // <---
            
            personalDataModel.set('house', 'O');
            personalDataModel.set('years', '6');

            expect(_.isEmpty(personalDataModel.validate())).toEqual(false);
        });         
        
        it("will ensure 'house' cannot be empty", function() {
            
            personalDataModel.set('postalcode', 'A1A1A1'); 
            personalDataModel.set('streetnumber', '123'); 
            personalDataModel.set('addressline1', 'STREET CITY'); 
            personalDataModel.set('city', 'CITY'); 
            personalDataModel.set('province', 'NS'); 
            
            personalDataModel.set('house', ''); // <---
            personalDataModel.set('years', '6');

            expect(_.isEmpty(personalDataModel.validate())).toEqual(false);
        });
        
        it("will ensure 'years' cannot be empty", function() {
            
            personalDataModel.set('postalcode', 'A1A1A1'); 
            personalDataModel.set('streetnumber', '123'); 
            personalDataModel.set('addressline1', 'STREET CITY'); 
            personalDataModel.set('city', 'CITY'); 
            personalDataModel.set('province', 'NS'); 
            
            personalDataModel.set('house', 'O'); 
            personalDataModel.set('years', ''); // <---

            expect(_.isEmpty(personalDataModel.validate())).toEqual(false);
        });
        
        it("will ensure 'years' value cannot be less than 2 without setting previous address", function() {
            
            personalDataModel.set('postalcode', 'A1A1A1'); 
            personalDataModel.set('streetnumber', '123'); 
            personalDataModel.set('addressline1', 'STREET CITY'); 
            personalDataModel.set('city', 'CITY'); 
            personalDataModel.set('province', 'NS'); 
            
            personalDataModel.set('house', 'O'); 
            personalDataModel.set('years', '1'); // <---
            
            expect(_.isEmpty(personalDataModel.validate())).toEqual(false);
        });
        
        it("will ensure 'years' value can be less than 2 if previous address set", function() {
            
            personalDataModel.set('postalcode', 'A1A1A1'); 
            personalDataModel.set('streetnumber', '123'); 
            personalDataModel.set('addressline1', 'STREET CITY'); 
            personalDataModel.set('city', 'CITY'); 
            personalDataModel.set('province', 'NS'); 
            
            personalDataModel.set('house', 'O'); 
            personalDataModel.set('years', '1'); // <---
            
            personalDataModel.set('postalcode_prev', 'A1A1A1');
            personalDataModel.set('streetnumber_prev', '321');
            personalDataModel.set('addressline1_prev', 'STREET CITY');
            personalDataModel.set('city_prev', 'PREV CITY');
            personalDataModel.set('suiteunit_prev', '123');
            personalDataModel.set('province_prev', 'AB');            

            expect(_.isEmpty(personalDataModel.validate())).toEqual(false);
        });         	 	 	
		
	});
	
});