describe("PersonalDataScreen2Controller", function() {
	
	describe("Inner Model", function() {

		var personalData2Controller = null;	
	    var personalData2Model = null;

		beforeEach(function() {
			personalData2Controller = new WICI.PersonalDataScreen2Controller();
			if (personalData2Controller) {
				personalData2Model = personalData2Controller.innerModel;
			}
		});
		
	    it("will ensure 'postalcode' cannot be empty", function() {
	    	
    		personalData2Model.set('postalcode', ''); // <---
    		personalData2Model.set('streetnumber', '123');
    		personalData2Model.set('addressline1', 'CITY STREET');
    		personalData2Model.set('city', 'CITY');
    		personalData2Model.set('province', 'NS');
    		
    		personalData2Model.set('house', 'O');
    		personalData2Model.set('years', '6');

    		expect(_.isEmpty(personalData2Model.validate())).toEqual(false);
	    });
	    
	    it("will ensure 'postalcode' cannot contain more than 6 characters", function() {
	    	
    		personalData2Model.set('postalcode', 'A1A1A1A1'); // <--- 
    		personalData2Model.set('streetnumber', '123');
    		personalData2Model.set('addressline1', 'CITY STREET');
    		personalData2Model.set('city', 'CITY');
    		personalData2Model.set('province', 'NS');
    		
    		personalData2Model.set('house', 'O');
    		personalData2Model.set('years', '6');

    		expect(_.isEmpty(personalData2Model.validate())).toEqual(false);
	    });	    
	    
	    it("will ensure 'postalcode' cannot contain less than 6 characters", function() {
	    	
    		personalData2Model.set('postalcode', 'A1A1A'); // <--- 
    		personalData2Model.set('streetnumber', '123');
    		personalData2Model.set('addressline1', 'CITY STREET');
    		personalData2Model.set('city', 'CITY');
    		personalData2Model.set('province', 'NS');
    		
    		personalData2Model.set('house', 'O');
    		personalData2Model.set('years', '6');

    		expect(_.isEmpty(personalData2Model.validate())).toEqual(false);
	    });	  	    
	    
	    it("will ensure 'postalcode' has correct alphanumeric format", function() {
	    	
    		personalData2Model.set('postalcode', 'D1A1A1'); // <---  'D' is not valid as a first character
    		personalData2Model.set('streetnumber', '123');
    		personalData2Model.set('addressline1', 'CITY STREET');
    		personalData2Model.set('city', 'CITY');
    		personalData2Model.set('province', 'NS');
    		
    		personalData2Model.set('house', 'O');
    		personalData2Model.set('years', '6');

    		expect(_.isEmpty(personalData2Model.validate())).toEqual(false);
	    });		
	    
	    it("will ensure 'streetnumber' cannot be empty", function() {
	    	
    		personalData2Model.set('postalcode', 'A1A1A1'); 
    		personalData2Model.set('streetnumber', ''); // <---
    		personalData2Model.set('addressline1', 'CITY STREET');
    		personalData2Model.set('city', 'CITY');
    		personalData2Model.set('province', 'NS');
    		
    		personalData2Model.set('house', 'O');
    		personalData2Model.set('years', '6');

    		expect(_.isEmpty(personalData2Model.validate())).toEqual(false);
	    });	 
	    
	    it("will ensure 'addressline1' cannot be empty", function() {
	    	
    		personalData2Model.set('postalcode', 'A1A1A1'); 
    		personalData2Model.set('streetnumber', '123'); 
    		personalData2Model.set('addressline1', ''); // <---
    		personalData2Model.set('city', 'CITY');
    		personalData2Model.set('province', 'NS');
    		
    		personalData2Model.set('house', 'O');
    		personalData2Model.set('years', '6');

    		expect(_.isEmpty(personalData2Model.validate())).toEqual(false);
	    });
	    
	    it("will ensure 'city' cannot be empty", function() {
	    	
    		personalData2Model.set('postalcode', 'A1A1A1'); 
    		personalData2Model.set('streetnumber', '123'); 
    		personalData2Model.set('addressline1', 'STREET CITY'); 
    		personalData2Model.set('city', ''); // <---
    		personalData2Model.set('province', 'NS');
    		
    		personalData2Model.set('house', 'O');
    		personalData2Model.set('years', '6');

    		expect(_.isEmpty(personalData2Model.validate())).toEqual(false);
	    });
	    
	    it("will ensure 'province' cannot be empty", function() {
	    	
    		personalData2Model.set('postalcode', 'A1A1A1'); 
    		personalData2Model.set('streetnumber', '123'); 
    		personalData2Model.set('addressline1', 'STREET CITY'); 
    		personalData2Model.set('city', 'CITY'); 
    		personalData2Model.set('province', ''); // <---
    		
    		personalData2Model.set('house', 'O');
    		personalData2Model.set('years', '6');

    		expect(_.isEmpty(personalData2Model.validate())).toEqual(false);
	    });		    
	    
	    it("will ensure 'house' cannot be empty", function() {
	    	
    		personalData2Model.set('postalcode', 'A1A1A1'); 
    		personalData2Model.set('streetnumber', '123'); 
    		personalData2Model.set('addressline1', 'STREET CITY'); 
    		personalData2Model.set('city', 'CITY'); 
    		personalData2Model.set('province', 'NS'); 
    		
    		personalData2Model.set('house', ''); // <---
    		personalData2Model.set('years', '6');

    		expect(_.isEmpty(personalData2Model.validate())).toEqual(false);
	    });
	    
	    it("will ensure 'years' cannot be empty", function() {
	    	
    		personalData2Model.set('postalcode', 'A1A1A1'); 
    		personalData2Model.set('streetnumber', '123'); 
    		personalData2Model.set('addressline1', 'STREET CITY'); 
    		personalData2Model.set('city', 'CITY'); 
    		personalData2Model.set('province', 'NS'); 
    		
    		personalData2Model.set('house', 'O'); 
    		personalData2Model.set('years', ''); // <---

    		expect(_.isEmpty(personalData2Model.validate())).toEqual(false);
	    });
	    
	    it("will ensure 'years' value cannot be less than 2 without setting previous address", function() {
	    	
    		personalData2Model.set('postalcode', 'A1A1A1'); 
    		personalData2Model.set('streetnumber', '123'); 
    		personalData2Model.set('addressline1', 'STREET CITY'); 
    		personalData2Model.set('city', 'CITY'); 
    		personalData2Model.set('province', 'NS'); 
    		
    		personalData2Model.set('house', 'O'); 
    		personalData2Model.set('years', '1'); // <---
            
    		expect(_.isEmpty(personalData2Model.validate())).toEqual(false);
	    });
	    
	    it("will ensure 'years' value can be less than 2 if previous address set", function() {
	    	
    		personalData2Model.set('postalcode', 'A1A1A1'); 
    		personalData2Model.set('streetnumber', '123'); 
    		personalData2Model.set('addressline1', 'STREET CITY'); 
    		personalData2Model.set('city', 'CITY'); 
    		personalData2Model.set('province', 'NS'); 
    		
    		personalData2Model.set('house', 'O'); 
    		personalData2Model.set('years', '1'); // <---
            
    		personalData2Model.set('postalcode_prev', 'A1A1A1');
    		personalData2Model.set('streetnumber_prev', '321');
    		personalData2Model.set('addressline1_prev', 'STREET CITY');
    		personalData2Model.set('city_prev', 'PREV CITY');
    		personalData2Model.set('suiteunit_prev', '123');
    		personalData2Model.set('province_prev', 'AB');            

    		expect(_.isEmpty(personalData2Model.validate())).toEqual(false);
	    });	 	    
	    
	});
	
});