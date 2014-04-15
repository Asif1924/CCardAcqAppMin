ensureNamespaceExists();

WICI.CreditCardApplicationDataValidator = function(argOutgoingCCData) {

	var outgoingCCData = argOutgoingCCData;
		
	this.fieldsAreValid = function() {
		return (
			this.outgoingCreditCardDataIsNotNULL() &&
			this.signDateExists() && 
			this.signatureExists() 
//			&&
//			this.optionalProductsSignDateExists() &&
//			this.optionalProductsSignatureExists()
		);
	};
	
	this.outgoingCreditCardDataIsNotNULL = function() {
		return outgoingCCData != null;
	};
	
	this.signDateExists = function() {
		var signatureModel = outgoingCCData.getModel('signatureModel');
		return signatureModel.get('signDate') != null;
	};
	
	this.signatureExists = function() {
		var signatureModel = outgoingCCData.getModel('signatureModel');
		return signatureModel.get('userSingnature') != null;
	};

	this.optionalProductsSignDateExists = function() {
		var optionalProducts = outgoingCCData.getModel('OptionalProductsModel');
		return optionalProducts.get('signDate') != null;
	};

	this.optionalProductsSignatureExists = function() {
		var optionalProducts = outgoingCCData.getModel('OptionalProductsModel');
		return optionalProducts.get('userSingnature') != null;
	};

};