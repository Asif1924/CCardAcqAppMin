ensureNamespaceExists();

BRB.IdentityExamHelper = function() {
	var logPrefix = '[BRB.IdentityExamHelper]::';
	var identityExamModel = new BRB.IdentityExamModel();
	
	//---------------------------------------------------------------------------------------
	this.updateIdentityExamResponseObject = function (argIdentityExamResponseObject) {
		var sMethod = "updateIdentityExamResponseObject()";
		BRB.Log(logPrefix + sMethod);	
		
		// Set IdentityExamResponseObject property with response from the web service
		identityExamModel.setIdentityExamResponseObject(argIdentityExamResponseObject);		
		
		// Set transaction id
		identityExamModel.setBrbTransactionId(app.customerTransactionModel.getTransactionId());		
		
		return identityExamModel;
	};
	//---------------------------------------------------------------------------------------
	this.getIdentityExamModel = function () {
		var sMethod = "getIdentityExamModel()";
		BRB.Log(logPrefix + sMethod);		
		
		return identityExamModel;
	};
	//---------------------------------------------------------------------------------------
	this.constructParamsForUserData = function ( argActivationItems, argLanguage ) {
		var sMethod = "getUserData()";
		BRB.Log(logPrefix + sMethod);		
		
		var personalInfoModel = argActivationItems.getModel("personalInformation");
		
		var address = new Object();		
		address.addressLine1 = getAddressLine1(personalInfoModel);
		var addressLine2 = getAddressLine2(personalInfoModel);
		if (addressLine2){
			address.addressLine2 = addressLine2;
		}
		//address.addressLine3 = "";
		var requestParams = {
				"accountApplicationData": argActivationItems.getGroupedData(),
				"language": argLanguage, // Indicates the language to retrieve the exam in.  Allowed Values; English = en French = fr
				"firstName": personalInfoModel.get('firstName'),
				"middleName": personalInfoModel.get('initial'),
				"lastName": personalInfoModel.get('lastName'),
				"phoneNumber": personalInfoModel.get('primaryPhone'),
				"dateOfBirth": parseInt(personalInfoModel.get('dateOfBirth_Month'))  + "/" + personalInfoModel.get('dateOfBirth_Day') + "/" + personalInfoModel.get('dateOfBirth_Year'),
				"addressLine1": address.addressLine1,
				"addressLine2": address.addressLine2,
				"addressLine3": address.addressLine3,
				"city": personalInfoModel.get('city'),
				"province": personalInfoModel.get('province'),
				"postalCode": personalInfoModel.get('postalcode'),
				"transactionId": app.customerTransactionModel.getTransactionId()
		};
		
		return requestParams;
	};
	//---------------------------------------------------------------------------------------
	function getAddressLine1(argPersonalInfoModel){
		address = argPersonalInfoModel.get('addressline1').replace(/, \d+.*/, '');
		if (argPersonalInfoModel.get('suiteunit') &&  !_.isEmpty(argPersonalInfoModel.get('suiteunit'))){
			return address = argPersonalInfoModel.get('suiteunit')+'-'+argPersonalInfoModel.get('streetnumber')+' '+address;
		}else{
			return argPersonalInfoModel.get('streetnumber')+' '+address;
		}
	};
	//---------------------------------------------------------------------------------------
	function getAddressLine2(argPersonalInfoModel){
	    var address = argPersonalInfoModel.get("addressline1").match(/, \d+.*/);
	    if (address&&!_.isEmpty(address)){
	    	address = address[0];
	    }	    	
	    return !_.isEmpty(address) ? address.replace(", ", "") : null;
	};
	//---------------------------------------------------------------------------------------	
};