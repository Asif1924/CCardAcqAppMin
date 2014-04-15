ensureNamespaceExists();

WICI.START_TIME = new Date().getTime() + "-";

WICI.UniqueIDGenerator = function() {
	var logPrefix = '[WICI.UniqueIDGenerator]::';
	
	this.getUniqueID = getUniqueID;
	
	function getUniqueID( argAgentID ){
		console.log(logPrefix + ":getUniqueID");
		
		var uniqueID = _.uniqueId("WICI_" + argAgentID +"_"+ $.now() + "-");
		console.log("---uniqueID=" + uniqueID);
		//return _.uniqueId("WICI_" + argAgentID +"_"+ WICI.START_TIME);
		return uniqueID;
		//return _.uniqueId("WICI_" + argAgentID +"_"+ new Date().getUTCMilliseconds() + "-");
	}
};