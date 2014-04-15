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
	this.getAdjudicationResponseStatus = function (){
		var sMethod = "getAdjudicationResponseStatus";
		if (!adjudicationResponseObject || _.isEmpty(adjudicationResponseObject)){
			BRB.Log(sMethod + '::Response is ' + adjudicationResponseObject);
			return null;
		}
		isSuccessful  = true;
        if (adjudicationResponseObject.error == true) {
			return appStatusTypes.Error;
        }
        if (adjudicationResponseObject.data && adjudicationResponseObject.data.appStatus && adjudicationResponseObject.data.appStatus == "APPROVED"){
            return appStatusTypes.Approved;
        }
        if (adjudicationResponseObject.data && adjudicationResponseObject.data.appStatus && adjudicationResponseObject.data.appStatus == "PENDING"){
            return appStatusTypes.Pending;
        }
        if (adjudicationResponseObject.data && adjudicationResponseObject.data.appStatus && adjudicationResponseObject.data.appStatus == "DECLINED"){
            return appStatusTypes.Declined;
        }
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