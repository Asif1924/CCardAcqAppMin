ensureNamespaceExists();

BRB.AdjudicationModel = function() {
	var adjudicationResponseObject = null;
	var isSuccessful = false;
	var appStatusTypes =
	{	 
		Approved : "APPROVED",
		Pending : "PENDING",
		Declined : "DECLINED",
		Error : "ERROR" 	
	};
	//---------------------------------------------------------------------------------------
	this.setAdjudicationResponseObject = function (argAdjudicationResponseObject){
		if (argAdjudicationResponseObject && !_.isEmpty(argAdjudicationResponseObject)){			
			adjudicationResponseObject = argAdjudicationResponseObject;			
		}
	};
	//---------------------------------------------------------------------------------------
 	this.getAdjudicationResponseObject = function(){
 		return adjudicationResponseObject;
 	};
 	//---------------------------------------------------------------------------------------
 	this.getAAResponse = function(){
 		return adjudicationResponseObject 
 		&& adjudicationResponseObject.data 
 		&& adjudicationResponseObject.data.accountAppResponse
 		&& !_.isEmpty(adjudicationResponseObject.data.accountAppResponse) ? 
 				adjudicationResponseObject.data.accountAppResponse : null;
 	};
 	//---------------------------------------------------------------------------------------
 	this.setIsSuccessful = function(argIsSuccessful){
 		isSuccessful =  argIsSuccessful;
 	};
 	//---------------------------------------------------------------------------------------
 	this.getIsSuccessful = function(argIsSuccessful){
 		return isSuccessful;
 	};
};