ensureNamespaceExists();

BRB.BaseModel = function(config) {

	this.name = config.name;
	this.data = config.data;
	this.refs = config.refs;
	var refs = this.refs;
	var validator = new BRB.Validator();
	var logPrefix = '[BRB.BaseModel (' + this.name + ')]:: ';
	// ---------------------------------------------------------------

	this.getData = function(bIncludeNonFields) {
		var sMethod = 'getData() ';
		BRB.Log(logPrefix + sMethod);

		var rez = [];
		$.each(this.data, function(index, item) {
			if (!item.notField || (bIncludeNonFields && item.notField)) {
				rez.push({
					name : item.name,
					value : item.value
				});
			}
		});

		return rez;
	};
	// ---------------------------------------------------------------
	this.getNotEmtyData = function(bIncludeNonFields) {
		var sMethod = 'getData() ';
		BRB.Log(logPrefix + sMethod);

		var rez = [];
		$.each(this.data, function(index, item) {
			if (!item.notField || (bIncludeNonFields && item.notField)) {
				// Don't add empty field to the request
				if (!_.isEmpty(item.name) && item.value != null
						&& !_.isEmpty(item.value.toString())) {
					rez.push({
						name : item.name,
						value : item.value
					});
				}
			}
		});

		return rez;
	};
	// ---------------------------------------------------------------
	this.toString = function() {
		var rez = "";
		$.each(this.data, function(index, item) {
			rez += "[ " + item.name + ": " + item.value + "]\n";
		});
		return rez;
	};
	// ---------------------------------------------------------------
	this.set = function(name, value) {
		if (value === 'null') {
			value = null;
		}

		$.each(this.data, function(index, item) {
			if (item.name === name) {
				item.value = value;
				return item;
			}
		});
	};
	// ---------------------------------------------------------------
	this.get = function(name) {
		var value = null;
		$.each(this.data, function(index, item) {
			if (item.name === name) {
				value = item.value;
				return;
			}
		});
		return value;
	};
	// ---------------------------------------------------------------
	this.getItemByName = function(name) {
		var value = null;
		$.each(this.data, function(index, item) {
			if (item.name === name) {
				value = item;
				return;
			}
		});
		return value;
	};
	// ---------------------------------------------------------------
	var isValid = function(validation, name, value, containerUiid) {
		var rez = null;
		var isError = false;

		if (!validation) {
			return null;
		}

		if (validation.canBeEmpty && !value) {
			return null;
		}

		var validationTypes = validation.type.split(' ');

		$.each(validationTypes, function(index, validationType) {
			switch (validationType) {
			case 'presence':
				isError = !value;
				break;
			case 'format':
				if (value === null) {
					isError = true;
				} else {
					var regRez = $.trim(value).match(validation.matcher);
					isError = !regRez;
				}
				break;
			case 'email':
				isError = !validator.emailAddress(value);
				break;
			case 'phone':
				isError = !validator.phone(value);
				break;
			case 'sin':
				isError = !validator.sin(value);
				break;
			case 'postal':
				isError = !validator.postalCode(value);
				break;
			case 'personName':
				isError = !validator.personName(value);
				break;
			case 'city':
				isError = !validator.city(value);
				break;
			case 'termsAndConditions':
				isError = !validator.termsAndConditions(value);
				break;
			case 'streetNumber':
				isError = !validator.streetNumber(value);
				break;
			case 'addressLine':
				isError = !validator.addressLine(value);
				break;
			case 'birthDate':
				isError = !validator.birthDate(value);
				break;
			case 'suiteUnit':
				isError = !validator.suiteUnit(value);
				break;
			case 'minSize':
				isError = !validator.minSize(value, validation.minlength);
				break;
			case 'postalCodeFirstPart':
				isError = !validator.postalCodeFirstPart(value);
				break;
			case 'postalCodeSecondPart':
				isError = !validator.postalCodeSecondPart(value);
				break;
			case 'phoneShortPart':
				isError = !validator.phoneShortPart(value);
				break;
			case 'phoneLongPart':
				isError = !validator.phoneLongPart(value);
				break;
			case 'year':
				isError = !validator.year(value);
				break;
			case 'month':
				isError = !validator.month(value);
				break;
			case 'day':
				isError = !validator.day(value);
				break;
			case 'notNull':
				isError = !validator.isNotNull(value);
				break;
			case 'birthDateYear':
				isError = !validator.birthDateYear(value);
				break;
			case 'jobDescription':
				isError = !validator.jobDescription(value);
				break;
			case 'employerName':
				isError = !validator.employerName(value);
				break;
			}

			return !isError;
		});

		if (isError) {
			rez = {
				name : name,
				err : validation.message,
				uiid : refs[name],
				containerUiid : refs[containerUiid] 
			};
			BRB.Log('BRB.BaseModel::isValid() name:' + rez.name + '  err:'
					+ rez.err + '  uiid:' + rez.uiid + '  containerUiid:' + rez.containerUiid);
		}
		return rez;
	};
	// ---------------------------------------------------------------
	this.validate = function(groupName) {
		BRB.Log('BRB.BaseModel::isGroupValid(' + groupName + ')');
		// US3627
		if(app.getIsMOARequest()) {
			$.each(this.data, function(index, item) {
				if(item.name == "email") {
					item.validation = null;
				}
			});
		}
		
		var rez = [];
		$.each(this.data, function(index, item) {

			if (!groupName
					|| (item.validation && $.inArray(groupName,
							item.validation.group) != -1)) {

				var fieldValidationRez = isValid(item.validation, item.name,
						item.value, item.containerUiid);

				if (fieldValidationRez !== null) {
					rez.push(fieldValidationRez);
				}
			}

		});
		return rez;
	};

	this.validateForFutureDate = function(value) {
		return validator.birthDate(value);
	};
	this.validateForFutureYearMonth = function(value, birthDate) {
		return validator.validateYearAndMonth(value, birthDate);
	};

	this.validateForTimePeriod = function(year, month) {
		BRB.Log('BRB.BaseModel::ValidateForTimeGreaterThanLife');
		var birthDateMonth = this.get('dateOfBirth_Month') - 1;
		var birthDate = new Date(this.get('dateOfBirth_Year'), birthDateMonth);
		var date = new Date(year, (month - 1));
		if (birthDate.getTime() == date.getTime())
			return true;
		return date.between(birthDate, new Date());
	};

	this.validateFieldByName = function(fieldName, fieldValue) {
		BRB.Log('BRB.BaseModel::ValidateFieldByName(' + fieldName + ')');
		var result = [];

		if (fieldName && fieldName !== '' && fieldValue && fieldValue !== '') {
			$.each(this.data, function(index, item) {

				if (item.name === fieldName) {
					var fieldValidationResult = isValid(item.validation,
							item.name, fieldValue);
					if (fieldValidationResult !== null) {
						result.push(fieldValidationResult);
					}
					return false;
				}
			});
		}

		return result;
	};

	this.isEmptyValue = function(fieldName) {
		BRB.Log('BRB.BaseModel::isEmptyValue(' + fieldName + ')');
		if (fieldName && fieldName !== '') {
			var value = this.get(fieldName);
			if (value === null || value === '' || value === 'null') {
				return true;
			}
		}
		return false;
	};

	 this.getFullYears = function(date)
	    {
	    	var fullYears = 0;
	    	if(date !== null && date !== 'null' && date !== '')
	    	{
	    		var now = moment()._d;
	    		var delta = (((now.getMonth() - date.getMonth()) || (now.getDate() - date.getDate()))<0) ? 1: 0;
	    		fullYears = ( now.getFullYear() - date.getFullYear() - delta);
	    	}
	    	
	    	return fullYears;
	    };


    this.validateAge = function(birthDate, province, birthDateField) {
    	var validationResult;
    	
    	var dateParts = birthDate.split("-");

		var date = new Date(dateParts[0], dateParts[1] - 1, dateParts[2]);
		var fullYears = this.getFullYears(date);

		BRB.Log('BRB.BaseModel::validateEdge FullYears=' + fullYears);		
		BRB.Log('BRB.BaseModel::validateEdge Province=' + province);

		if (province !== null
				&& province != ''
				&& (province === 'NF' || province === 'NB' || province === 'NS'
						|| province === 'BC' || province === 'YT'
						|| province === 'NT' || province === 'NL' || province === 'NU')
				&& fullYears < 19) {
			BRB.Log('BRB.BaseModel::validateEdge < 19');
			validationResult = {
					name : 'birthDate',
					err : 'personalInformation_DOB_19YearsError',
					uiid : birthDateField,
					province : province				
			};
		} else if (fullYears < 18) {
			BRB.Log('BRB.BaseModel::validateEdge < 18');
			validationResult = {
				name : 'birthDate',
				err : 'personalInformation_DOB_18YearsError',
				uiid : birthDateField
			};
		}

		return validationResult;
	};
	// ---------------------------------------------------------------
	// ---------------------------------------------------------------
	BRB.Log(logPrefix + 'constructor end.');
};
