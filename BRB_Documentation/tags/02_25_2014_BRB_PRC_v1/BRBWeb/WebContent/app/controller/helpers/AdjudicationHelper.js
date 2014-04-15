ensureNamespaceExists();
BRB.AdjudicationHelper = function() {
	var adjudicationModel = new BRB.AdjudicationModel();
	//---------------------------------------------------------------------------------------
	this.updateAdjudicationResponseObject = function (argAdjudicationResponseObject) {
		adjudicationModel.setAdjudicationResponseObject(argAdjudicationResponseObject);
	};
	//---------------------------------------------------------------------------------------
	this.getAdjudicationModel = function(){
		return adjudicationModel;
	};
	/*
	var testDataAproved = {
		"error" : false,
		"msg" : "",
		"data" : {
			"accountNumber" : "544612xxxxxx6887",
			"expiryDate" : "1801",
			"creditLimit" : "2000",
			"apr" : "19.99",
			"cashAPR" : "21.99",
			"appStatus" : "APPROVED",
			"customerValueInd" : "0"
		}
	}; 
	*/
};