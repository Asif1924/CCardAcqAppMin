ensureNamespaceExists();

BRB.FlowStateHelper = function(){
	var isFlowFinish = false;
	var isAbandonTermination = false;
	var isTokenExpired = false;
	var isRecordWithTransIdAlreadyDeletedFlag = false;
	
	this.getStringHelperState = function(){
		if(isTokenExpired)
			return "transactionIdExpire";
		else if(BRB.AppConfig.TrackingScreenID == 11 && isFlowFinish) 
			return "";
		else if(isAbandonTermination) 
			return "abandon";
		else 
			return "timeout";		
	};
	
	this.setFlowFinish = function(){
		isFlowFinish = true;
	};
	
	this.setAbandonTermination = function(){
		isAbandonTermination = true;
	};
	
	this.setTokenExpired = function() {
		isTokenExpired = true;
	};
	
	this.isTokenExpired = function() {
		return isTokenExpired;
	};
	
	this.setBRBTransIdRecordAlreadyDeleted = function() {
		isRecordWithTransIdAlreadyDeletedFlag = true;
	};
	
	this.isRowWithTransIdAlreadyDeleted = function() {
		return isRecordWithTransIdAlreadyDeletedFlag;
	};
};