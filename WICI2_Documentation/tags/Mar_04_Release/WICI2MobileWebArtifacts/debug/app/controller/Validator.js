ensureNamespaceExists();

WICI.Validator = function() {
			
	function notEmpty(value) {
		return _.isString(value) && !empty(value); 
	}
	this.notEmpty = notEmpty;
	
	function empty(value) {
		return _.isString(value) && value.trim() === "";
	}
	this.empty = empty;
	
	this.maxSize = function(value, length) {
		return _.isString(value) && value.length <= length;
	};
	//---------------------------------------------------------------------------------------
	this.postalCode = function(value) {
        // return notEmpty(value) && regexMatch(/^[a-z]\d[a-z]\d[a-z]\d$/i, value.trim());
        if (value === null) {
            return false;
        }
        return regexMatch(/^[ABCEGHJKLMNPRSTVXY]{1}\d{1}[A-Z]{1} *\d{1}[A-Z]{1}\d{1}$/, value);
    };
	//---------------------------------------------------------------------------------------
	//luk: checks the 'city' value
	this.city = function(value) {
       if(value===null){
            return false;
        }
        return regexMatch(/^[A-Z0-9\'\- ]{1,24}$/, value);
    };
    //---------------------------------------------------------------------------------------
	function regexMatch(regex, value) {
		return value.match(regex);
	}
	
	this.emailAddress = function(value) {
		return empty(value) || regexMatch(/^[_a-z0-9-][_a-z0-9-+]+(\.[_a-z0-9+]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/i, value.trim());
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
    // luk: used to validate person first/last name
    this.personName = function(value) {
        // length:50
        // value:
        // "A-Z 0-9 -'
        // Alpha Numeric (Upper Case)
        // Hyphen
        // Single Quote"
        if(value===null){
            return false;
        }        
        return regexMatch(/^[A-Z0-9\-\']{1,50}$/, value.trim());
    };
    //---------------------------------------------------------------------------------------
    //luk: xxx-xxx-xxxx. Internal stored as 10 digits. 
    this.phone= function(value) {
        if(value===null){
            return false;
        }        
        return regexMatch(/^[0-9]{10}$/, value);
    };
    //---------------------------------------------------------------------------------------
    //luk: alphanumeric chars -{1,5}
    this.streetNumber= function(value) {
        if(value===null){
            return false;
        }        
        return regexMatch(/^[A-Z0-9]{1,5}$/, value);
    };
    //---------------------------------------------------------------------------------------    
    //luk: alphanumeric chars -{1, 40}
    this.addressLine= function(value) {
        if(value===null){
            return false;
        }        
        return regexMatch(/^[A-Z0-9 ]{1,40}$/, value);
    };
    //---------------------------------------------------------------------------------------    
    this.termsAndConditions = function(value) {
       if(value === null || value === false || !value) {
            return false;
        }
        return true;
    };
    //---------------------------------------------------------------------------------------
};