ensureNamespaceExists();
BRB.IE9SelectsHelper = function() {
	this.getRightSelectValue = function(value){
		// in Case when value is null, Browser IE9 won`t interpret that value to "null" string value.
		if(value == null || value == undefined) return "null"; 
		else return value;
	}
}