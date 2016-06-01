ensureNamespaceExists();

BRB.CreditCardApplicationData = function() {
	//---------------------------------------------------------------
    var logPrefix = '[BRB.CreditCardApplicationData]';
    var models = [];   
    
    var nameTitleList = new BRB.TitlesList();
    var provincesList = new BRB.ProvincesList();
    var monthsList = new BRB.MonthsList();    
    var employmentTypeList = new BRB.EmploymentTypeList();
    var jobTitleList = new BRB.JobTitlesList();
    var relationshipTypeList = new BRB.RelationshipList();
    var jobDescOptionList = new BRB.JobDescOptionList();
    
    this.getAllData=function(){
        var sMethod = 'getAllData() ';
        BRB.Log(logPrefix + sMethod);
        
        var rez =[];
        $.each(models, function(index, item) {
            BRB.Log(logPrefix + sMethod + ' adding model:'+item.name);
            //rez.push(item.getData());
            rez = rez.concat(item.getData());
        });
        
        BRB.Log(logPrefix + sMethod + 'done. Length: '+ rez.length);
        return rez;
    };
    //---------------------------------------------------------------
    this.getAllDataTillModel=function(modelName){
        var sMethod = 'getAllData() ';
        BRB.Log(logPrefix + sMethod);
        
        var rez =[];
        $.each(models, function(index, item) {
            if(item.name === modelName)
            {
            	return false;
            }
        	BRB.Log(logPrefix + sMethod + ' adding model:'+item.name);
            rez = rez.concat(item.getData());
        });
        
        BRB.Log(logPrefix + sMethod + 'done. Length: '+ rez.length);
        return rez;
    };
    //---------------------------------------------------------------
    this.getDataStringTillModel = function(modelName)
    {
    	var sMethod = 'getAllData() ';
        BRB.Log(logPrefix + sMethod);
        var rez = '';
        $.each(this.getAllDataTillModel(modelName), function(index, item) {
        	rez = rez + item.value+';';
        });
        return rez;
    };
    //---------------------------------------------------------------
    this.getGroupedData=function(){
        var sMethod = 'getGroupedData() ';
        BRB.Log(logPrefix + sMethod);
        
        var rez =[];
        $.each(models, function(index, item) {
            BRB.Log(logPrefix + sMethod + ' adding model:' + item.name); 
            rez.push({model: item.name, data: item.getNotEmtyData()});
        });
        
        BRB.Log(logPrefix + sMethod + 'done. Length: '+ rez.length);
        return rez;
    };
    //---------------------------------------------------------------
    this.getModel = function(name) {
        var sMethod = 'getModel() ';
        BRB.Log(logPrefix + sMethod + 'model name:' + name);
        
        var rez = null;
        $.each(models, function(index, item) {
            if(item.name===name){
                rez = item;
                return;
            }
        });
        
        return rez;
    };
    //---------------------------------------------------------------
    this.addModel = function(model) {
        if (model === null) {
            return;
        }

        var sMethod = 'addModel() ';
        BRB.Log(logPrefix + sMethod + 'model name:' + model.name);

        if (this.getModel(model.name) === null) {
            models.push(model);
            return;
        }
    };
    //---------------------------------------------------------------
    this.clearAllModels = function()
    {
    	models = [];
    };
    
    this.clearToLoginScreen = function()
    {
    	if(models.length > 0)
    	{
    		var userInfoModel = this.getModel('loginScreen');
    		models = [];
    		this.addModel(userInfoModel);
    	}
    };
    
    //---------------------------------------------------------------
    this.getNameTitleByValue = function(value) {
        var sMethod = '[getNameTitleByValue()] ';
        BRB.Log(sMethod+ ' province:' + value);
      
        if( value===null){
            return "";
        }
        var nameTitle = null;
        $.each(nameTitleList.data, function(index, item) {  
            if(item.value == value){
            	nameTitle = item;
                return;
            }
        });   
        
        BRB.Log(sMethod+ 'exit [getNameTitleByValue()] name title: ' + nameTitle);
        if (app && nameTitle) {
        	return app.translator.translateKey(nameTitle.text);
        } else {
        	return '';
        }
    };
    
    //---------------------------------------------------------------
    this.getProvinceNameByValue = function(value)
    {
        var sMethod = '[getProvinceByValue()] ';
        BRB.Log(sMethod+ ' province:'+value);

        if( value===null){
            return "";
        }
        var province = null;
        $.each(provincesList.data, function(index, item) {  
            if(item.value == value){
                province = item;
                return;
            }
        });
        
        BRB.Log(sMethod+ 'exit [getProvinceByValue()] province: ' + province);
        if (app && province) {
        	return app.translator.translateKey(province.text);
        } else {
        	return '';
        }
    };
    //---------------------------------------------------------------
//    this.getMonthNameByValue = function(value)
//    {
//        var sMethod = '[getMonthNameByValue()] ';
//        BRB.Log(sMethod+ ' month number:'+value);
//     
//        if( value === null){
//            return "";
//        }
//        
//        var month = null;
//        $.each(monthsList.data, function(index, item) {  
//            if(item.value == value){
//                month = item;
//                return;
//            }
//        });
//        
//        BRB.Log(sMethod+ 'exit [getMonthNameByValue()] month: ' + month);
//        return month.text;
//    };
    this.getMonthNameFromDate = function(dateValue) {
		var sMethod = '[getFormatedDate()] ';
		if (!dateValue) {
			return '';
		}

		try {
			var dateParts = dateValue.split("-");
			var date = new Date(dateParts[0], dateParts[1] - 1, dateParts[2]); //  using 'dateParts[1] - 1' for adaptation of the months' indexing 
		} catch (err) {
			BRB.Log(sMethod + ' ERROR!!!!:' + err);
			return dateValue;
		}
		return moment(date).format('MMMM');
	};
	
	this.getMonthNameByIndex = function(monthIndex) {
		var sMethod = '[getFormatedDate()] ';
		if (!monthIndex) {
			return monthIndex;
		}
		var date;
		try {
			date = new Date(1970, monthIndex - 1, 1);
		} catch (err) {
			BRB.Log(sMethod + ' ERROR!!!!:' + err);
			return monthIndex;
		}
		if (date) {
			return moment(date).format('MMMM');
		} else {
			return '';
		}
	};

	
    //---------------------------------------------------------------
    this.getEmploymentTypeFriendlyName = function(value) {
        var sMethod = '[getEmploymentTypeFriendlyName()] ';
        BRB.Log(sMethod+ ' Employment Type:'+value);
     
        if( value === null){
            return "";
        }        
        
        var employmentType = null;
        $.each(employmentTypeList.data, function(index, item) {            
            if(item.value == value){
                employmentType = item;
                return;
            }
        });
        
        return employmentType.text;        
    };
    //---------------------------------------------------------------
    this.getJobCategoryNameByValue = function(value) {
        var sMethod = '[getPersonalDataIdTypeNameByValue()] ';
        BRB.Log(sMethod+ ' id:'+value);
        
        var category= null;
        $.each(jobTitleList.data, function(index, item) {  
            if(item.value == value){
                category = item;
            return;
            }
        });
        
        return category.text;
    };    
    //---------------------------------------------------------------
    // US3622
    this.getJobTitleNameByValue = function(value) {
        var sMethod = '[getJobTitleNameByValue()] ';
        BRB.Log(sMethod+ ' title:'+value);
        
        var title= null;
        $.each(jobDescOptionList.data, function(index, item) {  
            if(item.value == value){
                title = item;
            return;
            }
        });
        
        return title.text;
    };
    //---------------------------------------------------------------
    this.getCheckBoxValueFriendlyName = function(value){
        if(value && value == 'Y') {            
            return "Generic_Yes";
        }        
        else if(value && value == 'N') {            
            return "Generic_No";
        } else if (value){
            return "Generic_Yes";
        }
        
        return "Generic_No";
    };
    //---------------------------------------------------------------  
    this.getRelationshipFriendlyName = function(value) {
        var sMethod = '[getRelationshipFriendlyName()] ';
        BRB.Log(sMethod+ ' Relationship Type:'+value);
     
        if( value === null){
            return "";
        }        
        
        var relationshipType = null;
        $.each(relationshipTypeList.data, function(index, item) {            
            if(item.value == value){
                relationshipType = item;
                return;
            }
        });
        
        return relationshipType.text;        
    };
    //---------------------------------------------------------------
    this.getLanguageFriendlyName = function(value){
        if(value && value == 'F') {
            return "Generic_French_Lang";
        }
        
        return "Generic_English_Lang";
    };
    //--------------------------------------------------------------- 
    this.getFormattedPhoneNumber = function(value) {       
        if (!value) { return; }
        
       var formattedPhone = '';
       for (var i = 0; i < value.length; i++) {
           formattedPhone += value[i];
           
           //if (i % 3 == 0) {           
           if (i == 2) {
        	   if (app.translator.isCurrentLanguageEnglish()) {
        		   formattedPhone += '-'; 
        	   }else{
        		   formattedPhone += ' ';  
        	   }
           }
           if (i == 5) {
        	   formattedPhone += '-'; 
           }
       }
       
       return formattedPhone;
    };
    //---------------------------------------------------------------
    this.getFormattedGrossAnnualIncome = function(value){
        if (!value) { return; }
        
        var formattedGrossAnnualIncome = '';
        
        if (value.length > 3) {
            for (var i = 0; i < value.length; i++) {
                formattedGrossAnnualIncome += value[i];

                if (i == ((value.length - 1) - 3) ) {
                	if (app.translator.isCurrentLanguageEnglish()) {
                		formattedGrossAnnualIncome += ',';
                	} else {
                		formattedGrossAnnualIncome += ' ';
                	}
                }
           }
        }
        else {
            formattedGrossAnnualIncome = value; 
        }
       
       return formattedGrossAnnualIncome;
    };
    //---------------------------------------------------------------
    // US3961 - Start
    this.getFormattedGrossAnnualHouseholdIncome = function(value){
        if (!value) { return; }
        
        var formattedGrossAnnualHouseholdIncome = '';
        
        if (value.length > 3) {
            for (var i = 0; i < value.length; i++) {
                formattedGrossAnnualHouseholdIncome += value[i];

                if (i == ((value.length - 1) - 3) ) {
                	if (app.translator.isCurrentLanguageEnglish()) {
                		formattedGrossAnnualHouseholdIncome += ',';
                	} else {
                		formattedGrossAnnualHouseholdIncome += ' ';
                	}
                }
           }
        }
        else {
            formattedGrossAnnualHouseholdIncome = value; 
        }
       
       return formattedGrossAnnualHouseholdIncome;
    };
    // End
    //--------------------------------------------------------------- 
    this.getFormattedSocialInsurance = function(value) {       
        if (!value) { return; }
        
       var formattedSocialInsurance = '';
       for (var i = 1; i <= value.length; i++) {
           formattedSocialInsurance += value[i-1];
           
           if (i % 3 == 0 && i < value.length) {
               formattedSocialInsurance += '-';                  
           }
       }
       
       return formattedSocialInsurance;
    };
    //---------------------------------------------------------------
};
