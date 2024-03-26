ensureNamespaceExists();

GENERICWEBAPP.ScreenToScreenAccumulatedData = function() {

	var logPrefix = '[GENERICWEBAPP.ScreenToScreenAccumulatedData]';

    var nameTitleList = new GENERICWEBAPP.TitlesList();

	var translator = null;

	var models = [];

    this.easyAuthToken = null;
    this.action = null;

	this.setTranslator = setTranslator;
	function setTranslator(argTranslator) {
		translator = argTranslator;
	}

	var provincesList = new GENERICWEBAPP.ProvincesList();

	this.getCheckBoxValueFriendlyName = function(value) {
		if (value === 'Y') {
			return "yes";

		}
		return "no";


	};

	this.getFormattedPhone = function(value) {
		if (value === '' || value == null) {
			return value;
		}

		return value.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
	};

	this.getFormattedCurrency = function(value) {
		var newValue = value.replace(',', '.').replace(/(\d)(?=(\d{3})+\b)/g, '$1,');
		if (app.translator.getOfficialLanguageFormat() == 'F') {
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

	this.getFormattedDate = function(value) {
		var sMethod = '[getFormattedDate()] ';
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

	this.getJSON = function() {
		var sMethod = 'getJSON() ';
		console.log(logPrefix + sMethod);

		var rez = [];
		var jsonData = {};
		var jsonStr;
		$.each(models, function(index, item) {
			console.log(logPrefix + sMethod + ' adding model:' + item.name);
			$.each(item.getData(), function(index, item){
				jsonData[item.name] = item.value;
				jsonStr = JSON.stringify(jsonData);
			});
		});

		console.log(logPrefix + sMethod + 'done. Length: ' + rez.length);
		return jsonStr;
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
    this.clearAllModelsExceptLogin = function()
    {
    	console.log("clearAllModelsExceptLogin");

        var rez = null;
        $.each(models, function(index, item) {
            if (item.name === "loginScreen") {
                rez = item;
            }
        });

    	models = [];

        models.push(rez);
    };

    this.clearAllModels = function()
    {
        console.log("clearAllModels");
        //models = [];
        models = [];
        //accountApplicationResponse=null;
    };

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
        	return app.translator.translateKey(nameTitle.text);
        } else {
        	return '';
        }
    };

    this.buildJson = function(){
        var rez = "";
        var myObject = {};

        $.each(models, function(index, model) {
            $.each(model.data, function(number, item) {
                myObject[item.name] = item.value;
                rez = JSON.stringify(myObject);
            });
        });

        return rez;
    };
    
    // -----------------------------------------
    // Easyauth header
    // -----------------------------------------

    this.setEasyHeader = function(Easyauth){
        this.easyAuthToken = Easyauth;
    	//this.getModel("loginScreen").getItemByName("easyAuthToken").value = Easyauth;
    };

    this.getEasyHeader = function(){
    	return this.easyAuthToken;
    };

};
