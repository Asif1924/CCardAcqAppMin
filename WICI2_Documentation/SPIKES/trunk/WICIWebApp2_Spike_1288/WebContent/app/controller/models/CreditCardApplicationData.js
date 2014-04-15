ensureNamespaceExists();

WICI.CreditCardApplicationData = function() {

	// Choose Product Screen
	// ---------------------------------------------------------------
	var logPrefix = '[WICI.CreditCardApplicationData]';

	var translator;
	this.setTranslator = setTranslator;
	function setTranslator(argTranslator) {
		translator = argTranslator;
	}

	var cardFriendlyNames = {
		'omc' : 'chooseProduct_OptionsMasterCard',
		'omp' : 'chooseProduct_GasAdvantageMasterCard',
		'omr' : 'chooseProduct_CashAdvantageMasterCard'
	};

	var employmentTypeFriendlyNames = {
		'F' : 'finEmpInfo_FullTime',
		'S' : 'finEmpInfo_Seasonal',
		'P' : 'finEmpInfo_PartTime',
		'R' : 'finEmpInfo_Retired'
	};

	var residenceTypeFriendlyNames = {
		'O' : 'personalData2_Address_Own',
		'R' : 'personalData2_Address_Rent',
		'P' : 'personalData2_Address_Parents',
		'M' : 'personalData2_Address_Other'
	};

	var correspondenceFriendlyNames = {
		'E' : 'personalData_English',
		'F' : 'personalData_French'
	};
	var supCardForFriendlyNames = {
		'SPOU' : 'supCardRequest_Spouse',
		'SON' : 'supCardRequest_Son',
		'DAUG' : 'supCardRequest_Daughter',
		'RELA' : 'supCardRequest_Relative',
		'OTHE' : 'supCardRequest_Other'
	};

	var accountApplicationResponse = null;

	var provincesList = new WICI.ProvincesList();

	var personalDataIdTypesList = new WICI.IdTypesList();

	var jobCategorysList = new WICI.JobCategoriesList;

	var queueModel = new WICI.BaseModel({
		name : 'queueModel',
		data : [ {
			name : 'queueTransactionID',
			value : null,
			validation : null
		} ]
	});

	var models = [ queueModel ]; // By default every
	// CreditCardApplicationData object will
	// have a queueModel

	// //////////////////////////////////////////////////////////////////////

	this.setAccountApplicationResponse = function(argResponseObject) {
		accountApplicationResponse = argResponseObject;
	};

	this.getAccountApplicationResponse = function() {
		return accountApplicationResponse;
	};

	this.getAccountApplicationStatus = function() {

		var returnValue = 'printScreen_UnknownStatus';
		if (this.getAccountApplicationResponse()) {
			if (this.getAccountApplicationResponse().data
					&& this.getAccountApplicationResponse().data.appStatus) {
				var status = this.getAccountApplicationResponse().data.appStatus;
				if (status === 'PENDING' || status === 'DECLINED') {
					returnValue = 'printScreen_ApplicationDeclined';
				} else if (status === 'APPROVED') {
					returnValue = 'printScreen_ApplicationApproved';
				}
			}
		}

		return returnValue;
	};

	this.getCheckBoxValueFriendlyName = function(value) {
		if (value === 'Y') {
			return "messageDialog_yes";

		}
		return "messageDialog_no"; 
		

	};

	this.getFormatedPhone = function(value) {
		if (value === '' || value == null) {
			return value;
		}

		return value.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
	};

	this.getFormatedCurrency = function(value) {
		var newValue = value.replace(',', '.').replace(/(\d)(?=(\d{3})+\b)/g, '$1,');
		if (translator.getCurrentLanguageFSDPFormat() == 'F') {
			newValue = newValue.replace(/,/g, " ") + ' $';
		} else {
			newValue = '$ ' + newValue;
		};
		return newValue;
			
	};

	this.getDurationValue = function(value) {
		if (value === null || value === '' || value === NaN) {
			return 0;
		}

		return value;
	};

	this.getFormatedDate = function(value) {
		var sMethod = '[getFormatedDate()] ';
		if (!value) {
			return value;
		}

		try {
			var dateParts = value.split("-");
			var date = new Date(dateParts[0], dateParts[1] - 1, dateParts[2]);
		} catch (err) {
			console.log(sMethod + ' ERROR!!!!:' + err);
			return value;
		}
		return moment(date).format('MMMM DD, YYYY');
	};

	this.getCurrencyValue = function(value) {
		return "$ " + value;
	};

	this.getProvinceNameByValue = function(value) {
		var sMethod = '[getProvinceByValue()] ';
		console.log(sMethod + ' province:' + value);

		if (value === null) {
			return "";
		}
		var province = null;
		$.each(provincesList.data, function(index, item) {
			if (item.value == value) {
				province = item;
				return;
			}
		});

		console.log(sMethod + 'exit [getProvinceByValue()] province: '
				+ province);
		return province.text;
	};

	this.getPersonalDataIdTypeNameByValue = function(value) {
		var sMethod = '[getPersonalDataIdTypeNameByValue()] ';
		console.log(sMethod + ' id:' + value);

		var idType = null;
		$.each(personalDataIdTypesList.data, function(index, item) {
			if (item.value == value) {
				idType = item;
				return;
			}
		});

		console.log(sMethod + 'exit [getPersonalDataIdTypeNameByValue()] if: '
				+ idType);
		return idType.text;
	};

	this.getJobCategoryNameByValue = function(value) {
		var sMethod = '[getPersonalDataIdTypeNameByValue()] ';
		console.log(sMethod + ' id:' + value);

		var category = null;
		$.each(jobCategorysList.data, function(index, item) {
			if (item.value == value) {
				category = item;
				return;
			}
		});

		console.log(sMethod + 'exit [getJobCategoryNameByValue()] if: '
				+ category);
		return category.text;
	};

	this.getCardFriendlyName = function(argCardCode) {
		return cardFriendlyNames[argCardCode.toLowerCase()];
	};

	this.getEmploymentTypeFriendlyName = function(argTypeCode) {
		return employmentTypeFriendlyNames[argTypeCode];
	};

	this.getResidenceTypeFriendlyName = function(argTypeCode) {
		return residenceTypeFriendlyNames[argTypeCode];
	};
	this.getSupCardForFriendlyNames = function(argTypeCode) {
		return supCardForFriendlyNames[argTypeCode];
	};

	this.getCorrespondenceFriendlyName = function(argTypeCode) {
		return correspondenceFriendlyNames[argTypeCode];
	};

	this.getAllData = function() {
		var sMethod = 'getAllData() ';
		console.log(logPrefix + sMethod);

		var rez = [];
		$.each(models, function(index, item) {
			console.log(logPrefix + sMethod + ' adding model:' + item.name);
			// rez.push(item.getData());
			rez = rez.concat(item.getData());
		});

		console.log(logPrefix + sMethod + 'done. Length: ' + rez.length);
		return rez;
	};
	// ---------------------------------------------------------------
	this.getAllDataTillModel = function(modelName) {
		var sMethod = 'getAllData() ';
		console.log(logPrefix + sMethod);

		var rez = [];
		$.each(models, function(index, item) {
			if (item.name === modelName) {
				return false;
			}
			console.log(logPrefix + sMethod + ' adding model:' + item.name);
			rez = rez.concat(item.getData());
		});

		console.log(logPrefix + sMethod + 'done. Length: ' + rez.length);
		return rez;
	};
	// ---------------------------------------------------------------
	this.getDataStringTillModel = function(modelName) {
		var sMethod = 'getAllData() ';
		console.log(logPrefix + sMethod);
		var rez = '';
		$.each(this.getAllDataTillModel(modelName), function(index, item) {
			rez = rez + item.value + ';';
		});
		return rez;
	};
    //---------------------------------------------------------------
    this.getGroupedData = function(){
        var sMethod = 'getGroupedData() ';
        console.log(logPrefix + sMethod);
        
        var rez =[];
        $.each(models, function(index, item) {
            rez.push({model: item.name, data: item.getNotEmtyData()});
        });
        
        console.log(logPrefix + sMethod + 'done. Length: '+ rez.length);
        return rez;
    };
	// ---------------------------------------------------------------
	this.getModel = function(name) {
		var sMethod = 'getModel() ';
		console.log(logPrefix + sMethod + 'model name:' + name);

		var rez = null;
		$.each(models, function(index, item) {
			if (item.name === name) {
				rez = item;
				return;
			}
		});

		return rez;
	};
	// ---------------------------------------------------------------
	this.addModel = function(model) {
		if (model === null) {
			return;
		}

		var sMethod = 'addModel() ';
		console.log(logPrefix + sMethod + 'model name:' + model.name);

		if (this.getModel(model.name) === null) {
			models.push(model);
			return;
		}
	};
	// ---------------------------------------------------------------
    this.clearAllModels = function()
    {
    	console.log("clearAllModels");
    	//models = [];
    	models = [queueModel];
    };
    
    this.clearToLoginScreen = function()
    {
    	console.log("clearToLoginScreen");
    	if(models.length > 0)
    	{
    		var loginScreenModel = this.getModel('loginScreen');
    		//models = [];
    		models = [queueModel];
    		this.addModel(loginScreenModel);
    	}
    };
	// ---------------------------------------------------------------

	this.setQueueTransactionID = function(argQueueTransactionID) {
		var queueModel = this.getModel("queueModel");
		queueModel.set("queueTransactionID", argQueueTransactionID);
	};

	this.getQueueTransactionID = function() {
		var queueModel = this.getModel("queueModel");
		return queueModel.get("queueTransactionID");
	};
	
	this.getTranslationForPromoCode = function(argString){
		
		return translator.translateKey(argString);
	}

};
