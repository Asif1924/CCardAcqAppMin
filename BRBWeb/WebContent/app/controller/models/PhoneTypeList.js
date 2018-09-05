ensureNamespaceExists();

BRB.PhoneTypeList = function(argTranslator) {
	this.translator = argTranslator;
	this.data = [
	            { value: null,     text: 'pleaseSelect_Text'},
	            { value: 'Home',   text: 'personalData_HOME'},
	            { value: 'Mobile', text: 'personalData_MOBILE'},
	            { value: 'Other',  text: 'personalData_OTHER'}		            
	            ];
};
BRB.PhoneTypeList.prototype = new BRB.BaseList();

