ensureNamespaceExists();

BRB.CreditCardApplicationDataValidator = function( argOutgoingCCData ) {
	var logPrefix = ' ----- [BRB.CreditCardApplicationDataValidator]::';

	var outgoingCCData = argOutgoingCCData;
	//---------------------------------------------------------------	
	this.isDataModelsValid = function (){
		var sMethod = 'isDataModelsValid()::';
		BRB.Log(logPrefix + sMethod);
		
		return 	(this.outgoingCreditCardDataIsNotNULL()&&				
				this.overviewProvinceExists() &&
				this.personalInformationFirstNameExists() &&
				this.personalInformationLastNameExists() &&
				this.personalInformationBirthDateExists() &&
				this.personalInformationEmailExists() && 
				this.personalInformationReceiveEmailExists() &&
				this.personalInformationCorrespondenceExists() &&
				this.personalInformationPrimaryPhoneExists() &&
				this.personalInformationStreetnumberExists() &&
				this.personalInformationAddressline1Exists() &&
				this.personalInformationCityExists() &&
				this.personalInformationProvinceExists() &&
				this.personalInformationPostalcodeExists() &&
				this.personalInformationHouseExists() &&
				this.personalInformationHousingPaymentExists() &&
				this.personalInformationSinceYearsExists() &&
				this.personalInformationSinceMonthsExists() &&
				this.personalInformationIsPrevAddressExists() &&
				this.personalInformationEmploymentTypeExists() &&
				this.personalInformationGrossIncomeExists() &&
				this.personalInformationCardVISAMCAMEXExists() &&
				this.personalInformationCardBankLoanExists() &&
				this.personalInformationCardStoreCardExists() &&
				this.personalInformationCardChequingAcctExists() &&
				this.personalInformationCardGasCardExists() &&
				this.personalInformationCardSavingsAcctExists() &&
				this.personalInformationIsAnyBankingProductsExists() &&
				this.additionalInformationSuplementaryYesNoExists() &&
				this.additionalInformationSameAddressAreaExists() &&
				this.additionalInformationOptionalInsuranceCPExists() &&
				this.additionalInformationOptionalInsuranceIWExists() &&
				this.additionalInformationOptionalInsurancePAExists() &&
				this.confirmationApplicationAuthorizationYesNoExists() &&
				this.confirmationUpdateCTProfileYesNoExists() 
//				&&this.identityVerificationTuExamResultExists() &&
				//this.identityVerificationTransactionIdExists()
				);
	};
	//---------------------------------------------------------------
	this.outgoingCreditCardDataIsNotNULL = function() {
		var sMethod = 'outgoingCreditCardDataIsNotNULL()::';
		BRB.Log(logPrefix + sMethod);
		
		return outgoingCCData != null;
	};
	//---------------------------------------------------------------
	this.overviewProvinceExists = function(){
		var sMethod = 'overviewProvinceExists()::';
		BRB.Log(logPrefix + sMethod);
		
		try {
			var entityModel = outgoingCCData.getModel('overview');
			var entityValue = entityModel.get('provinces');
		
			return entityValue != null && !_.isEmpty(entityValue);		
		} catch (error) {
			BRB.Log(logPrefix + sMethod + error);
		}
		
		return false;
	};
	//---------------------------------------------------------------
	this.personalInformationFirstNameExists = function(){
		var sMethod = 'personalInformationFirstNameExists()::';
		BRB.Log(logPrefix + sMethod);
		
		try {
			var entityModel = outgoingCCData.getModel('personalInformation');
			var entityValue = entityModel.get('firstName');
			
			return entityValue != null && !_.isEmpty(entityValue);
		} catch (error) {
			BRB.Log(logPrefix + sMethod + error);
		}
		
		return false;
	};
	//---------------------------------------------------------------
	this.personalInformationLastNameExists = function(){
		var sMethod = 'personalInformationLastNameExists()::';
		BRB.Log(logPrefix + sMethod);
		
		try {
			var entityModel = outgoingCCData.getModel('personalInformation');
			var entityValue = entityModel.get('lastName');
			
			return entityValue != null && !_.isEmpty(entityValue);
		} catch (error) {
			BRB.Log(logPrefix + sMethod + error);
		}
		
		return false;
	};
	//---------------------------------------------------------------
	this.personalInformationBirthDateExists = function(){
		var sMethod = 'personalInformationBirthDateExists()::';
		BRB.Log(logPrefix + sMethod);
		
		try {
			var entityModel = outgoingCCData.getModel('personalInformation');
			var entityValue = entityModel.get('birthDate');
			
			return entityValue != null && !_.isEmpty(entityValue);
		} catch (error) {
			BRB.Log(logPrefix + sMethod + error);
		}
		
		return false;
	};
	//---------------------------------------------------------------
	this.personalInformationEmailExists = function(){
		var sMethod = 'personalInformationEmailExists()::';
		BRB.Log(logPrefix + sMethod);
		
		try {
			var entityModel = outgoingCCData.getModel('personalInformation');
			var entityValue = entityModel.get('email');
			
			return entityValue != null && !_.isEmpty(entityValue);
		} catch (error) {
			BRB.Log(logPrefix + sMethod + error);
		}
		
		return false;
	};
	//---------------------------------------------------------------
	this.personalInformationReceiveEmailExists = function(){
		var sMethod = 'personalInformationReceiveEmailExists()::';
		BRB.Log(logPrefix + sMethod);
		
		try {
			var entityModel = outgoingCCData.getModel('personalInformation');
			var entityValue = entityModel.get('receiveEmail');
			
			return entityValue != null && !_.isEmpty(entityValue);
		} catch (error) {
			BRB.Log(logPrefix + sMethod + error);
		}
		
		return false;
	};
	//---------------------------------------------------------------
	this.personalInformationCorrespondenceExists = function(){
		var sMethod = 'personalInformationCorrespondenceExists()::';
		BRB.Log(logPrefix + sMethod);
		
		try {
			var entityModel = outgoingCCData.getModel('personalInformation');
			var entityValue = entityModel.get('correspondence');
			
			return entityValue != null && !_.isEmpty(entityValue);
		} catch (error) {
			BRB.Log(logPrefix + sMethod + error);
		}
		
		return false;
	};
	//---------------------------------------------------------------
	this.personalInformationPrimaryPhoneExists = function(){
		var sMethod = 'personalInformationPrimaryPhoneExists()::';
		BRB.Log(logPrefix + sMethod);
		
		try {
			var entityModel = outgoingCCData.getModel('personalInformation');
			var entityValue = entityModel.get('homePhone');
			
			return entityValue != null && !_.isEmpty(entityValue);
		} catch (error) {
			BRB.Log(logPrefix + sMethod + error);
		}
		
		return false;
	};
	//---------------------------------------------------------------
	this.personalInformationStreetnumberExists = function(){
		var sMethod = 'personalInformationStreetnumberExists()::';
		BRB.Log(logPrefix + sMethod);
		
		try {
			var entityModel = outgoingCCData.getModel('personalInformation');
			var entityValue = entityModel.get('streetnumber');
			
			return entityValue != null && !_.isEmpty(entityValue);
		} catch (error) {
			BRB.Log(logPrefix + sMethod + error);
		}
		
		return false;
	};
	//---------------------------------------------------------------
	this.personalInformationAddressline1Exists = function(){
		var sMethod = 'personalInformationAddressline1Exists()::';
		BRB.Log(logPrefix + sMethod);
		
		try {
			var entityModel = outgoingCCData.getModel('personalInformation');
			var entityValue = entityModel.get('addressline1');
			
			return entityValue != null && !_.isEmpty(entityValue);
		} catch (error) {
			BRB.Log(logPrefix + sMethod + error);
		}
		
		return false;
	};
	//---------------------------------------------------------------
	this.personalInformationCityExists = function(){
		var sMethod = 'personalInformationCityExists()::';
		BRB.Log(logPrefix + sMethod);
		
		try {
			var entityModel = outgoingCCData.getModel('personalInformation');
			var entityValue = entityModel.get('city');
			
			return entityValue != null && !_.isEmpty(entityValue);
		} catch (error) {
			BRB.Log(logPrefix + sMethod + error);
		}
		
		return false;
	};
	//---------------------------------------------------------------
	this.personalInformationProvinceExists = function(){
		var sMethod = 'personalInformationProvinceExists()::';
		BRB.Log(logPrefix + sMethod);
		
		try {
			var entityModel = outgoingCCData.getModel('personalInformation');
			var entityValue = entityModel.get('province');
			
			return entityValue != null && !_.isEmpty(entityValue);
		} catch (error) {
			BRB.Log(logPrefix + sMethod + error);
		}
		
		return false;
	};
	//---------------------------------------------------------------
	this.personalInformationPostalcodeExists = function(){
		var sMethod = 'personalInformationPostalcodeExists()::';
		BRB.Log(logPrefix + sMethod);
		
		try {
			var entityModel = outgoingCCData.getModel('personalInformation');
			var entityValue = entityModel.get('postalcode');
			
			return entityValue != null && !_.isEmpty(entityValue);
		} catch (error) {
			BRB.Log(logPrefix + sMethod + error);
		}
		
		return false;
	};
	//---------------------------------------------------------------
	this.personalInformationHouseExists = function(){
		var sMethod = 'personalInformationHouseExists()::';		
		BRB.Log(logPrefix + sMethod);
		
		try {
			var entityModel = outgoingCCData.getModel('personalInformation');
			var entityValue = entityModel.get('house');
			
			return entityValue != null && !_.isEmpty(entityValue);
		} catch (error) {
			BRB.Log(logPrefix + sMethod + error);
		}
		
		return false;
	};
	//---------------------------------------------------------------
	this.personalInformationHousingPaymentExists = function(){
		var sMethod = 'personalInformationHouseExists()::';
		BRB.Log(logPrefix + sMethod);
		
		try {
			var entityModel = outgoingCCData.getModel('personalInformation');
			var entityValue = entityModel.get('housingpayment');
			
			return entityValue != null && !_.isEmpty(entityValue);
		} catch (error) {
			BRB.Log(logPrefix + sMethod + error);
		}
		
		return false;
	};
	//---------------------------------------------------------------
	this.personalInformationSinceYearsExists = function(){
		var sMethod = 'personalInformationSinceYearsExists()::';
		BRB.Log(logPrefix + sMethod);
		
		try {
			var entityModel = outgoingCCData.getModel('personalInformation');
			var entityValue = entityModel.get('sinceYears');
			
			return entityValue != null && !_.isEmpty(entityValue);
		} catch (error) {
			BRB.Log(logPrefix + sMethod + error);
		}
		
		return false;
	};
	//---------------------------------------------------------------
	this.personalInformationSinceMonthsExists = function(){
		var sMethod = 'personalInformationSinceMonthsExists()::';
		BRB.Log(logPrefix + sMethod);
		
		try {
			var entityModel = outgoingCCData.getModel('personalInformation');
			var entityValue = entityModel.get('sinceMonths');
			
			return entityValue != null && !_.isEmpty(entityValue);
		} catch (error) {
			BRB.Log(logPrefix + sMethod + error);
		}
		
		return false;
	};
	//---------------------------------------------------------------
	this.personalInformationIsPrevAddressExists = function(){
		var sMethod = 'personalInformationIsPrevAddressExists()::';
		BRB.Log(logPrefix + sMethod);
		
		try {
			var entityModel = outgoingCCData.getModel('personalInformation');
			var entityValue = entityModel.get('isPrevAddressExist');
			
			return entityValue != null && _.isBoolean(entityValue);
		} catch (error) {
			BRB.Log(logPrefix + sMethod + error);
		}
		
		return false;
	};
	//---------------------------------------------------------------
	this.personalInformationEmploymentTypeExists = function(){
		var sMethod = 'personalInformationEmploymentTypeExists()::';
		BRB.Log(logPrefix + sMethod);
		
		try {
			var entityModel = outgoingCCData.getModel('personalInformation');
			var entityValue = entityModel.get('employmentType');
			
			return entityValue != null && !_.isEmpty(entityValue);
		} catch (error) {
			BRB.Log(logPrefix + sMethod + error);
		}
		
		return false;
	};
	//---------------------------------------------------------------
	this.personalInformationGrossIncomeExists = function(){
		var sMethod = 'personalInformationGrossIncomeExists()::';
		BRB.Log(logPrefix + sMethod);
		
		try {
			var entityModel = outgoingCCData.getModel('personalInformation');
			var entityValue = entityModel.get('grossIncome');
			
			return entityValue != null && !_.isEmpty(entityValue);
		} catch (error) {
			BRB.Log(logPrefix + sMethod + error);
		}
		
		return false;
	};
	//---------------------------------------------------------------
	this.personalInformationCardVISAMCAMEXExists = function(){
		var sMethod = 'personalInformationCardVISAMCAMEXExists()::';
		BRB.Log(logPrefix + sMethod);
		
		try {
			var entityModel = outgoingCCData.getModel('personalInformation');
			var entityValue = entityModel.get('cardVISAMCAMEX');
			
			return entityValue != null && !_.isEmpty(entityValue);
		} catch (error) {
			BRB.Log(logPrefix + sMethod + error);
		}
		
		return false;
	};
	//---------------------------------------------------------------
	this.personalInformationCardBankLoanExists = function(){
		var sMethod = 'personalInformationCardBankLoanExists()::';
		BRB.Log(logPrefix + sMethod);
		
		try {
			var entityModel = outgoingCCData.getModel('personalInformation');
			var entityValue = entityModel.get('cardBankLoan');
			
			return entityValue != null && !_.isEmpty(entityValue);
		} catch (error) {
			BRB.Log(logPrefix + sMethod + error);
		}
		
		return false;
	};
	//---------------------------------------------------------------
	this.personalInformationCardStoreCardExists = function(){
		var sMethod = 'personalInformationCardStoreCardExists()::';
		BRB.Log(logPrefix + sMethod);
		
		try {
			var entityModel = outgoingCCData.getModel('personalInformation');
			var entityValue = entityModel.get('cardStoreCard');
			
			return entityValue != null && !_.isEmpty(entityValue);
		} catch (error) {
			BRB.Log(logPrefix + sMethod + error);
		}
		
		return false;
	};
	//---------------------------------------------------------------
	this.personalInformationCardChequingAcctExists = function(){
		var sMethod = 'personalInformationCardChequingAcctExists()::';
		BRB.Log(logPrefix + sMethod);
		
		try {
			var entityModel = outgoingCCData.getModel('personalInformation');
			var entityValue = entityModel.get('cardChequingAcct');
			
			return entityValue != null && !_.isEmpty(entityValue);
		} catch (error) {
			BRB.Log(logPrefix + sMethod + error);
		}
		
		return false;
	};
	//---------------------------------------------------------------
	this.personalInformationCardGasCardExists = function(){
		var sMethod = 'personalInformationCardGasCardExists()::';
		BRB.Log(logPrefix + sMethod);
		
		try {
			var entityModel = outgoingCCData.getModel('personalInformation');
			var entityValue = entityModel.get('cardGasCard');
			
			return entityValue != null && !_.isEmpty(entityValue);
		} catch (error) {
			BRB.Log(logPrefix + sMethod + error);
		}
		
		return false;
	};
	//---------------------------------------------------------------
	this.personalInformationCardSavingsAcctExists = function(){
		var sMethod = 'personalInformationCardSavingsAcctExists()::';
		BRB.Log(logPrefix + sMethod);
		
		try {
			var entityModel = outgoingCCData.getModel('personalInformation');
			var entityValue = entityModel.get('cardSavingsAcct');
			
			return entityValue != null && !_.isEmpty(entityValue);
		} catch (error) {
			BRB.Log(logPrefix + sMethod + error);
		}
		
		return false;
	};
	//---------------------------------------------------------------
	this.personalInformationIsAnyBankingProductsExists = function(){
		var sMethod = 'personalInformationIsAnyBankingProductsExists()::';
		BRB.Log(logPrefix + sMethod);
		
		try {
			var entityModel = outgoingCCData.getModel('personalInformation');
			var entityValue = entityModel.get('isAnyBankingProducts');
			
			return entityValue != null && _.isBoolean(entityValue);
		} catch (error) {
			BRB.Log(logPrefix + sMethod + error);
		}
		
		return false;
	};
	//---------------------------------------------------------------
	this.additionalInformationSuplementaryYesNoExists = function(){
		var sMethod = 'additionalInformationSuplementaryYesNoExists()::';
		BRB.Log(logPrefix + sMethod);
		
		try {
			var entityModel = outgoingCCData.getModel('additionalInformation');
			var entityValue = entityModel.get('suplementaryYesNo');
			
			return entityValue != null && _.isBoolean(entityValue);
		} catch (error) {
			BRB.Log(logPrefix + sMethod + error);
		}
		
		return false;
	};
	//---------------------------------------------------------------
	this.additionalInformationSameAddressAreaExists = function(){
		var sMethod = 'additionalInformationSameAddressAreaExists()::';
		BRB.Log(logPrefix + sMethod);
		
		try {
			var entityModel = outgoingCCData.getModel('additionalInformation');
			var entityValue = entityModel.get('sameAddressArea');
			
			return entityValue != null && !_.isEmpty(entityValue);
		} catch (error) {
			BRB.Log(logPrefix + sMethod + error);
		}
		
		return false;
	};
	//---------------------------------------------------------------
	this.additionalInformationOptionalInsuranceCPExists = function(){
		var sMethod = 'additionalInformationOptionalInsuranceCPExists()::';
		BRB.Log(logPrefix + sMethod);
		
		try {
			var entityModel = outgoingCCData.getModel('additionalInformation');
			var entityValue = entityModel.get('optionalInsurance_CP');
			
			return entityValue != null && _.isBoolean(entityValue);
		} catch (error) {
			BRB.Log(logPrefix + sMethod + error);
		}
		
		return false;
	};
	//---------------------------------------------------------------	
	this.additionalInformationOptionalInsuranceIWExists = function(){
		var sMethod = 'additionalInformationOptionalInsuranceIWExists()::';
		BRB.Log(logPrefix + sMethod);
		
		try {
			var entityModel = outgoingCCData.getModel('additionalInformation');
			var entityValue = entityModel.get('optionalInsurance_IW');
			
			return entityValue != null && _.isBoolean(entityValue);
		} catch (error) {
			BRB.Log(logPrefix + sMethod + error);
		}
		
		return false;
	};
	//---------------------------------------------------------------
	this.additionalInformationOptionalInsurancePAExists = function(){
		var sMethod = 'additionalInformationOptionalInsurancePAExists()::';
		BRB.Log(logPrefix + sMethod);
		
		try {
			var entityModel = outgoingCCData.getModel('additionalInformation');
			var entityValue = entityModel.get('optionalInsurance_PA');
			
			return entityValue != null && _.isBoolean(entityValue);
		} catch (error) {
			BRB.Log(logPrefix + sMethod + error);
		}
		
		return false;
	};
	//---------------------------------------------------------------
	this.confirmationApplicationAuthorizationYesNoExists = function(){
		var sMethod = 'confirmationApplicationAuthorizationYesNoExists()::';
		BRB.Log(logPrefix + sMethod);
		
		try {
			var entityModel = outgoingCCData.getModel('confirmation');
			var entityValue = entityModel.get('applicationAuthorizationYesNo');
			
			return entityValue != null && _.isBoolean(entityValue);
		} catch (error) {
			BRB.Log(logPrefix + sMethod + error);
		}
		
		return false;
	};
	//---------------------------------------------------------------
	this.confirmationUpdateCTProfileYesNoExists = function(){
		var sMethod = 'confirmationUpdateCTProfileYesNoExists()::';
		BRB.Log(logPrefix + sMethod);
		
		try {
			var entityModel = outgoingCCData.getModel('confirmation');
			var entityValue = entityModel.get('updateCTProfileYesNo');
			
			return entityValue != null && _.isBoolean(entityValue);
		} catch (error) {
			BRB.Log(logPrefix + sMethod + error);
		}
		
		return false;
	};
	//---------------------------------------------------------------
	this.identityVerificationTuExamResultExists = function(){
		var sMethod = 'identityVerificationTuExamResultExists()::';
		BRB.Log(logPrefix + sMethod);
		
		try {
			var entityModel = outgoingCCData.getModel('identityVerification');
			var entityValue = entityModel.get('tuExamResult');
			
			return entityValue != null && !_.isEmpty(entityValue);
		} catch (error) {
			BRB.Log(logPrefix + sMethod + error);
		}
		
		return false;
	};
	//---------------------------------------------------------------
	this.identityVerificationTransactionIdExists = function(){
		var sMethod = 'identityVerificationTransactionIdExists()::';
		BRB.Log(logPrefix + sMethod);
		
		try {
			var entityModel = outgoingCCData.getModel('identityVerification');
			var entityValue = entityModel.get('transactionId');
			
			return entityValue != null && !_.isEmpty(entityValue);
		} catch (error) {
			BRB.Log(logPrefix + sMethod + error);
		}
		
		return false;
	};
};