ensureNamespaceExists();

BRB.Validator = function() {
			
	function notEmpty(value) {
		return _.isString(value) && !empty(value); 
	}
	this.notEmpty = notEmpty;
	
	function empty(value) {
		return _.isString(value) && $.trim(value) === "";
	}
	this.empty = empty;
	
	//---------------------------------------------------------------------------------------
	this.maxSize = function(value, length) {
		return _.isString(value) && value.length <= length;
	};
	//---------------------------------------------------------------------------------------
	this.minSize = function(value, length) {
        return _.isString(value) && value.length >= length;
    };
	//---------------------------------------------------------------------------------------
	this.postalCode = function(value) {
        // return notEmpty(value) && regexMatch(/^[a-z]\d[a-z]\d[a-z]\d$/i, $.trim(value));
        if (value === null || value ==='') {
            return false;
        }
        return regexMatch(/^[ABCEGHJKLMNPRSTVXY]{1}\d{1}[A-Z]{1} *\d{1}[A-Z]{1}\d{1}$/, value);
    };
    
    this.postalCodeFirstPart = function(value) {
        // return notEmpty(value) && regexMatch(/^[a-z]\d[a-z]\d[a-z]\d$/i, $.trim(value));
        if (value === null) {
            return false;
        }
        return regexMatch(/^[ABCEGHJKLMNPRSTVXY]{1}\d{1}[A-Z]{1}$/, value);
    };
    
    this.postalCodeSecondPart = function(value) {
        // return notEmpty(value) && regexMatch(/^[a-z]\d[a-z]\d[a-z]\d$/i, $.trim(value));
        if (value === null) {
            return false;
        }
        return regexMatch(/^\d{1}[A-Z]{1}\d{1}$/, value);
    };
    
	//---------------------------------------------------------------------------------------
	this.city = function(value) {
		if(value===null){
			return false;
		}
		return regexMatch(/^[a-z\u00C0-\u017F0-9\'\-., ]{1,24}$/i, $.trim(value));
    };
    //---------------------------------------------------------------------------------------
	function regexMatch(regex, value) {
		return value.match(regex);
	}
	
	this.emailAddress = function(value) {
		if(value===null){
			return false;
		}		
		return regexMatch(/^[,_'\-.~\[\]\}\{\)\(a-z\u00C0-\u017F0-9-]+(\.[,_'-.~\[\]\}\{\)\(a-z\u00C0-\u017F0-9+]+)*@[a-z\u00C0-\u017F0-9-]+(\.[a-z\u00C0-\u017F0-9-]+)*(\.[a-z\u00C0-\u017F]{2,4})$/i, $.trim(value));
	}; 
	
	this.moreThanZero = function(value) {
		return value > 0;
	};
	
	this.matches = function(value, otherValue) {
		return value === otherValue;
	};
	
	this.isOnlyNumeric = function(toTest) {
		var reg = new RegExp("^[0-9]+$");
		return (reg.test(toTest));
	};
	
	this.isWholeNumber = function(toTest) {
		var reg = new RegExp("^[0-9]+$|^[0-9]+\\.0*$");
		return (reg.test(toTest));
	};
	
	this.isFutureDate = function(yearToTest, monthToTest){
		var dateToTest = new Date(yearToTest, monthToTest);
		var currentDate = new Date();
		if(dateToTest>currentDate){
			return true;
		}
		return false;
	};
	//---------------------------------------------------------------------------------------
    this.personName = function(value) {
        // length:50
        // value:
        // "a-z 0-9 -'        
        // Hyphen
        // Single Quote"
        if(value===null){
            return false;
        }        
        return regexMatch(/^[a-z\u00C0-\u017F0-9\'\- ]{1,50}$/i, $.trim(value));
    };
    //---------------------------------------------------------------------------------------
    this.phone = function(value) {
        if(value===null) {
            return false;
        }        
        return regexMatch(/^[0-9]{10}$/, value);
    };
    
    this.year = function(value) {
        if(value===null){
            return false;
        }        
        return regexMatch(/^[0-9]{1,4}$/, value) && parseInt(value) >= 1900;
    };
    
    this.month = function(value) {
        if(value===null || value==='null'){
            return false;
        }        
        if(regexMatch(/^[0-9]{1,2}$/, value) && parseInt(value) > 0 && parseInt(value) <= 12)
        {
        	return true;
        }
        return false;
    };
    
    this.day = function(value) {
        if(value===null || value==='null'){
            return false;
        }        
        if(regexMatch(/^[0-9]{1,2}$/, value) && parseInt(value) > 0 && parseInt(value) <= 31)
        {
        	return true;
        }
        return false;
    };
    
    this.phoneShortPart = function(value) {
        if(value===null){
            return false;
        }        
        return regexMatch(/^[0-9]{3}$/, value);
    };
    
    this.phoneLongPart = function(value) {
        if(value===null){
            return false;
        }        
        return regexMatch(/^[0-9]{4}$/, value);
    };
    
    this.sin = function(value) {
        if(value===null){
            return false;
        }        
        return regexMatch(/^[0-9]{9}$/, value);
    };
    //---------------------------------------------------------------------------------------
    this.streetNumber = function(value) {
        if(value===null){
            return false;
        }        
        return regexMatch(/^[a-z\u00C0-\u017F0-9\'\- ]{1,6}$/i, $.trim(value));
    };
    //---------------------------------------------------------------------------------------    
    this.addressLine = function(value) {
        if(value===null){
            return false;
        }        
	     // US3303
	        // Before Change
	        // return regexMatch(/^[a-z\u00C0-\u017F0-9\'\-., ]{1,40}$/i, $.trim(value));
	        // After Change
	        // return regexMatch(/^[a-z\u00C0-\u017F0-9\'\-., ]{1,28}$/i, $.trim(value));
	        // Comment 
	        // In Broker, Street No, Street Name and Suit is accepted as one in currentAddressLine1.
	        // So it exceeds 40 in present. So in end street name is limited to 28
        	// In broker for clubbing street no, street name and App suit we are using separator like Hyphen and Space. 
        	// So instead of 30, we are limiting it to 28. 
        return regexMatch(/^[a-z\u00C0-\u017F0-9\'\-., ]{1,28}$/i, $.trim(value));
    };
    //---------------------------------------------------------------------------------------
    this.suiteUnit = function(value) {
        if(value===null){
            return false;
        }        
        return regexMatch(/^[a-z\u00C0-\u017F0-9\'\-., ]{1,10}$/i, $.trim(value));
    };
    //---------------------------------------------------------------------------------------
    this.termsAndConditions = function(value) {
       if(value === null || value === false || !value || value==='N' || value==='NO') {
            return false;
        }
        return true;
    };
    //---------------------------------------------------------------------------------------
    this.birthDate = function(value) {
        if(value === null || value === '' || !value)
        {
        	return false;
        }
        
        var dateParts = value.split("-");
		var enteredDate = new Date(dateParts[0], (dateParts[1] - 1), dateParts[2]);
		
        var currentDate = new Date();
        if(enteredDate > currentDate)
        {
        	return false;
        }
         return true;
     };  
     this.validateYearAndMonth = function(value, birthDate){
    	 if(value === null || value === '' || !value || birthDate === null || birthDate ==='' || !birthDate)
         {
         	return false;
         }
         
        var dateParts = value.split("-");
 		var enteredDate = new Date(dateParts[0], (dateParts[1] - 1), dateParts[2]);
 		 var birthDateParts = birthDate.split("-");
 		 var birthD = new Date(birthDateParts[0], (birthDateParts[1] - 1), birthDateParts[2]);
 		 if(enteredDate.getTime() == birthD.getTime()) return true;
 		  return  enteredDate.between(birthD, new Date());
     }
    //---------------------------------------------------------------------------------------
     this.birthDateYear = function(value) {
         if(value === null || value === '' || !value) {
              return false;
         }
                  
         var enteredDate = new Date();
         enteredDate.setFullYear(value);
         
         var currentDate = new Date();
         if(enteredDate > currentDate) {
             return false;
         }
          return true;
      };  
      //---------------------------------------------------------------------------------------
      // US3622
      this.jobDescription = function(value){
    	  if(value===null){
              return false;
          }        
          return regexMatch(/^[a-z\u00C0-\u017F0-9,_'-.~@\[\]\}\{\)\(\/\\ ]{1,30}$/i, $.trim(value));
      };
      
      //---------------------------------------------------------------------------------------
      this.employerName = function(value){
    	  if(value===null){
              return false;
          }        
          return regexMatch(/^[a-z\u00C0-\u017F0-9,_'-.~@\[\]\}\{\)\( ]{1,36}$/i, $.trim(value));
      };
      //---------------------------------------------------------------------------------------
      this.isNotNull = function (value) {
    	  return value !== null;
      };
      //---------------------------------------------------------------------------------------
};