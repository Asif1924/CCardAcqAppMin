ensureNamespaceExists();

WICI.CreditCardApplicationData = function() {

	// Choose Product Screen
	// ---------------------------------------------------------------
	var logPrefix = '[WICI.CreditCardApplicationData]';

    var nameTitleList = new WICI.TitlesList();

	var translator;
	this.setTranslator = setTranslator;
	function setTranslator(argTranslator) {
		translator = argTranslator;
	}

	var cardFriendlyNames = {
		'omx' 	: 'chooseProduct_OptionsMasterCard',
		'omp' 	: 'chooseProduct_GasAdvantageMasterCard',
		'omr' 	: 'chooseProduct_CashAdvantageMasterCard',
		'omz' 	: 'signature_World_ELiteMasterCard'	
	};
	
	var cardFriendlyNamesWithoutReg = {
		'omx' 	: 'signature_OptionsMasterCard',
		'omp' 	: 'signature_GasAdvantageMasterCard',
		'omr' 	: 'signature_CashAdvantageMasterCard',
		'omz' 	: 'signature_World_ELiteMasterCard'	
	};
	

	var employmentTypeFriendlyNames = {
		'F' : 'finEmpInfo_FullTime',
		'S' : 'finEmpInfo_Seasonal',
		'P' : 'finEmpInfo_PartTime',
		'H' : 'finEmpInfo_Homemaker',
		'R' : 'finEmpInfo_Retired',
		'U' : 'finEmpInfo_Unemployed',
		'O' : 'finEmpInfo_Other'
	};

	var residenceTypeFriendlyNames = {
		'O' : 'personalData_Address_Own',
		'R' : 'personalData_Address_Rent',
		'P' : 'personalData_Address_Parents',
		// US5131 WICI - Add Student Housing label to Residence Type list
		'S' : 'personalData_Address_Student',
		'M' : 'personalData_Address_Other'
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

	// US4282
	var homePhone = null;
	var mobilePhone = null;
	// US4797
	var consentGranted = null;
	
	var respCardType = null;
	
	var accountApplicationResponse = null;
	var newAccountApplicationResponse = null;

	var provincesList = new WICI.IdTypesProvincesList();

	var personalDataIdTypesList = new WICI.IdTypesList();

	var jobCategorysList = new WICI.JobCategoriesList;
	
	var jobTitlesList = new WICI.JobTitlesList();

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

	this.setHomePhone = function(argHomePhone) {
		homePhone = argHomePhone;
	};
	
	this.setConsentGranted = function(argConsentGranted) {
		consentGranted = argConsentGranted;
	};
	
	this.setRespCardType = function(argRespCardType) {
		respCardType = argRespCardType;
	};
	
	this.setMobilePhone = function(argMobilePhone) {
		mobilePhone = argMobilePhone;
	};
	
	this.setAccountApplicationResponse = function(argResponseObject) {
		accountApplicationResponse = argResponseObject;
	};

	this.setNewAccountApplicationResponse = function(argResponseObject) {
		newAccountApplicationResponse = argResponseObject;
	};
	
	this.getHomePhone = function() {
		return homePhone;
	};
	
	this.getRespCardType = function() {
		return respCardType;
	};
	
	this.getConsentGranted = function() {
		return consentGranted;
	};
	
	this.getMobilePhone = function() {
		return mobilePhone;
	};
	
	this.getAccountApplicationResponse = function() {
		return accountApplicationResponse;
	};

	this.getNewAccountApplicationResponse = function() {
		return newAccountApplicationResponse;
	};
	
	this.getAccountApplicationStatus = function() {

		var returnValue = 'printScreen_UnknownStatus';
		var respAn = new WICI.PollingResponseAnalyzer();
		if( respAn.isValidResponse(this.getAccountApplicationResponse()) ){
			var status = respAn.getAppStatus(this.getAccountApplicationResponse());
			var cardType = this.getRespCardType() ? this.getRespCardType() : respAn.getCardType(this.getNewAccountApplicationResponse());
			var consentGranted = this.getConsentGranted() ? this.getConsentGranted() : respAn.getConsentGranted(this.getNewAccountApplicationResponse());
			switch (status) {
				case 'PENDING': 
					if (WICI.AppConfig.PendingFeature.TreatPendsLikeDeclines) {
						returnValue = 'printScreen_ApplicationDeclined';
					} else {
						returnValue = 'printScreen_ApplicationPending';
					}
					break;
				case 'DECLINED': returnValue = 'printScreen_ApplicationDeclined'; break;
				case 'APPROVED':
					if ((cardType === "OMX" || cardType === "OMZ")) {
						returnValue = 'printScreen_ApplicationApproved_OMX_OMZ';
					} else {
						returnValue = 'printScreen_ApplicationApproved_RedLabel';
					}
					break;
				default: break;
			}
		}
		return returnValue;
	};
	
	// US4164
	this.getApplicationStatus = function() {
	
		var returnValue = '';
		var respAn = new WICI.PollingResponseAnalyzer();
		if( respAn.isValidResponse(this.getAccountApplicationResponse()) ){
			var status = respAn.getAppStatus(this.getAccountApplicationResponse());
			switch (status) {
				case 'PENDING':  returnValue = 'PENDING'; break;
				case 'DECLINED': returnValue = 'DECLINED'; break;
				case 'APPROVED': returnValue = 'APPROVED'; break;
				default: break;
			}
		}
		return returnValue;
	};
	
	// US4709
	this.getAppResponseConsentGranted = function() {
	
		var returnValue = '';
		var respAn = new WICI.PollingResponseAnalyzer();
		if( respAn.isValidResponse(this.getAccountApplicationResponse()) ){
			returnValue = respAn.getConsentGranted(this.getAccountApplicationResponse());
		}
		return returnValue;
	};
	
	this.getAppResponseTransactionID = function() {
		
		var returnValue = '';
		var respAn = new WICI.PollingResponseAnalyzer();
		if( respAn.isValidResponse(this.getAccountApplicationResponse()) ){
			returnValue = respAn.getTransactionID(this.getAccountApplicationResponse());
		}
		return returnValue;
	};
	
	this.getAppResponsePAN = function() {
		
		var returnValue = '';
		var respAn = new WICI.PollingResponseAnalyzer();
		if( respAn.isValidResponse(this.getAccountApplicationResponse()) ){
			returnValue = respAn.getPAN(this.getAccountApplicationResponse());
		}
		return returnValue;
	};

	this.isPending = function() {
		var respAn = new WICI.PollingResponseAnalyzer();
		return respAn.isPendingResponse(this.getAccountApplicationResponse());
	};

	this.getCheckBoxValueFriendlyName = function(value) {
		if (value === 'Y') {
			return "yes";

		}
		return "no";


	};

	this.getFormatedPhone = function(value) {
		if (value === '' || value == null) {
			return value;
		}

		return value.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
	};

	this.getFormatedCurrency = function(value) {
		var newValue = value.replace(',', '.').replace(/(\d)(?=(\d{3})+\b)/g, '$1,');
		if (app.translator.getCurrentLanguageFSDPFormat() == 'F') {
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
	
	// US3621
	this.getJobTitleNameByValue = function(value) {
		var sMethod = '[getJobTitleNameByValue()] ';
		console.log(sMethod + ' title:' + value);

		var title = null;
		$.each(jobTitlesList.data, function(index, item) {
			if (item.value == value) {
				title = item;
				return;
			}
		});

		console.log(sMethod + 'exit [getJobTitleNameByValue()] if: '
				+ title);
		return title.text;
	};

	this.getCardFriendlyName = function(argCardCode) {
		return cardFriendlyNames[argCardCode.toLowerCase()];
	};
	
	this.getCardFriendlyNameWithoutReg = function(argCardCode) {
		return cardFriendlyNamesWithoutReg[argCardCode.toLowerCase()];
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
    	//accountApplicationResponse=null;
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
    		//accountApplicationResponse=null;
    	}
    };
	// ---------------------------------------------------------------

	this.setQueueTransactionID = function(argQueueTransactionID) {
		var queueModel = this.getModel("queueModel");
		console.log("QueueTransactionID:" + QueueTransactionID);
		queueModel.set("queueTransactionID", argQueueTransactionID);
	};

	this.getQueueTransactionID = function() {
		var queueModel = this.getModel("queueModel");
		return queueModel.get("queueTransactionID");
	};

	this.getTranslationForPromoCode = function(argString){

		return app.translator.translateKey(argString);
	};

    //---------------------------------------------------------------
    this.getNameTitleByValue = function(value) {

    	if (value === null) {
            return "";
        }
        var nameTitle = null;
        $.each(nameTitleList.data, function(index, item) {
            if(item.value == value){
            	nameTitle = item;
                return;
            }
        });

        if (nameTitle) {
        	//return translator.translateKey(nameTitle.text);
        	return app.translator.translateKey(nameTitle.text);
        } else {
        	return '';
        }
    };

};
