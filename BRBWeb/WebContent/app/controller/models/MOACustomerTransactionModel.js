ensureNamespaceExists();

BRB.MOACustomerTransactionModel = function() {	
	var _transactionId = "";
	var _cardType = "";
	
	this.initialize = function (
			transactionId, 		
			cardType) {		
		_transactionId = transactionId;
		_catdType = cardType;		
	};		
	//---------------------------------------------------------------------------------------
	this.getTransactionId = function() {
		return _transactionId;		
	};
	//---------------------------------------------------------------------------------------
	this.setTransactionId = function(transactionId) {
		_transactionId = transactionId;
	};	
	//---------------------------------------------------------------------------------------
	this.getCardType = function() {
		return _cardType;		
	};
	//---------------------------------------------------------------------------------------
	this.setCardType = function(cardType) {
		_cardType = cardType;
	};
	//---------------------------------------------------------------------------------------
};