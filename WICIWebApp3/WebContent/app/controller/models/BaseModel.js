ensureNamespaceExists();

WICI.BaseModel = function(config) {

    this.name = config.name;
    this.data = config.data;
    this.refs = config.refs;
    var refs = this.refs;
    var validator = new WICI.Validator();
    var logPrefix = '[WICI.BaseModel ('+this.name+')]:: ';
    //---------------------------------------------------------------

    this.getData = function(bIncludeNonFields){
        var sMethod = 'getData() ';
        console.log(logPrefix + sMethod);

        var rez=[];
        $.each(this.data, function(index, item) {
            if(!item.notField || (bIncludeNonFields && item.notField)){
                rez.push({name: item.name, value: item.value});
            }
        });

        return rez;
    };
    //---------------------------------------------------------------
    this.getNotEmtyData = function(bIncludeNonFields){
        var sMethod = 'getData() ';
        console.log(logPrefix + sMethod);

        var rez=[];
        $.each(this.data, function(index, item) {
            if(!item.notField || (bIncludeNonFields && item.notField)){
            	 // Don't add empty field to the request
                if (!_.isEmpty(item.name)  && item.value && !_.isEmpty(item.value.toString()) && programCheck(item)) {
                	 rez.push({name: item.name, value: item.value});
                }
            }
        });

        return rez;
    };
    //---------------------------------------------------------------
    this.toString=function(){
        var rez="";
        $.each(this.data, function(index, item) {
            rez += "[ "+item.name+": "+item.value+"]\n";
        });
        return rez;
    };
    //---------------------------------------------------------------
    this.set = function(name, value){
        if(value==='null'){
            value = null;
        }

        $.each(this.data, function(index, item) {
           if(item.name===name){
               item.value = value;
               return item;
           }
        });
    };
    //---------------------------------------------------------------
    this.get = function(name){
        var value=null;
        $.each(this.data, function(index, item) {
           if(item.name===name){
               value = item.value;
               return;
           }
        });
        return value;
    };
    //---------------------------------------------------------------
    this.getItemByName = function(name){
    	var value=null;
        $.each(this.data, function(index, item) {
           if(item.name===name){
               value = item;
               return;
           }
        });
        return value;
    };
    //---------------------------------------------------------------
    var isValid = function(validation, name, value){
        var rez = null;
        var isError = false;

        if(!validation){
            return null;
        }

        if(validation.canBeEmpty && !value){
            return null;
        }

        switch(validation.type){
            case 'mod10':
                isError = !validator.mod10(value, validation.minlength);
                break;
            case 'presence':
                isError = !value;
                break;
            case 'format':
                if(value === null){
                    isError = true;
                } else {
                    //var regRez = value.trim().match(validation.matcher);     //shouldnt be trimming before evaluating
                	var regRez = value.match(validation.matcher);
                    isError = !regRez;
                }
                break;
            // US4112 
            case 'idFormat':
            	if(value === null){
                    isError = true;
                } else {
                    //var regRez = value.trim().match(validation.matcher); 
                	//shouldnt be trimming before evaluating
                	
                	var regRez = value.match(validation.matcher);
                    isError = !regRez;
                }
            	break;
            case 'email':
                isError=!validator.emailAddress(value);
                break;
            case 'phone':
                isError=!validator.phone(value);
                break;
            case 'sin':
                isError=!validator.sin(value);
                break;
            case 'postal':
                isError=!validator.postalCode(value);
                break;
            case 'personName':
                isError=!validator.personName(value);
                break;
            case 'employerName':
                isError=!validator.employerName(value);
                break;
            case 'jobTitle':
                isError=!validator.jobTitle(value);
                break;
            // US3621
            case 'jobTitle_SelectField':
                isError=!validator.jobTitle_SelectField(value);
                break;    
            case 'city':
                isError=!validator.city(value);
                break;
            case 'termsAndConditions':
                isError=!validator.termsAndConditions(value);
                break;
            case 'streetNumber':
                isError=!validator.streetNumber(value);
                break;
            case 'addressLine':
                isError=!validator.addressLine(value);
                break;
            case 'birthDate':
            	isError=!validator.birthDate(value);
                break;
            case 'idExpiryDate': // US4365
                isError=!validator.idExpiryDate(value);
                break;
            case 'suiteUnit':
            	isError=!validator.suiteUnit(value);
                break;
            case 'equalCheck':
                if(value === null){
                    isError = true;
                } else {
                	isError  = value.trim() === validation.matcher.trim() ? false : true;
                	
                }
                break;     

        }

        if(isError){
            rez= {name: name, err: validation.message, uiid: refs[name]};
            console.log('WICI.BaseModel::isValid() name:'+rez.name+'  err:'+rez.err+'  uiid:'+rez.uiid);
        }
        return rez;
    };
    //---------------------------------------------------------------
    this.validate = function(groupName) {
        console.log('WICI.BaseModel::isGroupValid(' + groupName + ')');

        var rez = [];
        $.each(this.data, function(index, item) {

            if (!groupName || (item.validation && $.inArray(groupName, item.validation.group) != -1)) {

                var fieldValidationRez = isValid(item.validation, item.name, item.value);

                if (fieldValidationRez !== null) {
                    rez.push(fieldValidationRez);
                }
            }

        });
        return rez;
    };

    this.validateFieldByName = function(fieldName, fieldValue)
    {
    	console.log('WICI.BaseModel::ValidateFieldByName(' + fieldName + ')');
    	var result = [];

    	if(fieldName && fieldName!=='' && fieldValue && fieldValue !== '')
    	{
	    	$.each(this.data, function(index, item) {

	    		if(item.name === fieldName)
	    		{
	    			var fieldValidationResult = isValid(item.validation, item.name, fieldValue);
	    			if (fieldValidationResult !== null) {
	    				result.push(fieldValidationResult);
	                }
	    			return false;
	    		}
	        });
    	}

    	return result;
    };
    
    // US4251
    this.validateAptFlag = function(fieldName, fieldValue)
    {
    	console.log('WICI.BaseModel::validateAptFlag(' + fieldName + " : " + fieldValue + ')');
    	var result = [];

    	if(fieldName!=='' && fieldValue !== '')
    	{
	    	$.each(this.data, function(index, item) {
	    		if(item.name == fieldName)
	    		{
	    			var fieldValidationResult;
	    			if(!fieldValue) {
	    				fieldValidationResult= {name: item.name, err: item.validation.message, uiid: refs[item.name]};
	    			}	    			
	    			if (fieldValidationResult !== null) {
	    				result.push(fieldValidationResult);
	                }
	    			return false;
	    		}
	        });
    	}
    	return result;
    };

    // US4168    
    this.calculateAge = function(model) {
    	var fullYears;
    	if(model.get('birthDate') != null) {
    		var dateParts = model.get('birthDate').split("-");
    		var date = new Date(dateParts[0], dateParts[1] - 1, dateParts[2]);
    		var now = moment()._d;

    		fullYears = ( now.getFullYear() - date.getFullYear() - ((now.getMonth() - date.getMonth()||now.getDate() - date.getDate())<0) );

    		console.log('WICI.BaseModel::calculateAge FullYears=' + fullYears);
    	}    	
		
    	return fullYears;
    };
    // ---------------------------------------------------------------
    this.isUserAgentId_valid = function(userAgentIdValue){
    	var pattern = /^[a-zA-Z0-9]{1,7}$/;
    	return pattern.test(userAgentIdValue);
    };
    // ---------------------------------------------------------------
    this.validateAge = function(model, province) {
    	var rez;

    	var dateParts = model.get('birthDate').split("-");
		var date = new Date(dateParts[0], dateParts[1] - 1, dateParts[2]);
		var now = moment()._d;

		var fullYears = ( now.getFullYear() - date.getFullYear() - ((now.getMonth() - date.getMonth()||now.getDate() - date.getDate())<0) );

		console.log('WICI.BaseModel::validateEdge FullYears=' + fullYears);

		var item = model.getItemByName('birthDate');

    	var itemName =  item === null ? '' : item.name;
    	var itemuiid = model.refs == null ? '' : model.refs[item.name];
        // US4976 
    	if (fullYears < 18 && province !== null && province != '' && $.inArray(province, ['AB', 'SK', 'MB', 'ON', 'QC', 'PE']) != -1) {    		
    		rez= {name: itemName, err: 'personalData_DOB_18YearsError', uiid: itemuiid, province: province};
    	} else if(fullYears < 19 && province !== null && province != '' && $.inArray(province, ['NB', 'NS', 'BC', 'YT', 'NT', 'NL', 'NU']) != -1){
    		rez= {name: itemName, err: 'personalData_DOB_18YearsError', uiid: itemuiid, province: province};
    	} else if(fullYears < 18){
    		rez= {name: itemName, err: 'personalData_DOB_18YearsError', uiid: itemuiid};
    	}

    	return rez;
    };
    // ---------------------------------------------------------------
    programCheck = function(item){
    	return !(item.name == "agencyPromoCode" &&  (item.value == "BLANK" || item.value == "S.O."));
    };
    
	console.log(logPrefix + 'constructor end.');
};
