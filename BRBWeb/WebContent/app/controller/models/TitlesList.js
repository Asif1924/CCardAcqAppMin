ensureNamespaceExists();

BRB.TitlesList = function(argTranslator) {
	var logPrefix = '[BRB.TitlesList]::';

	this.data = [
	            { value: null,    text: 'pleaseSelect_Text'},
	            { value: 'MR',    text: 'personalData_MR'},
	            { value: 'MRS',   text: 'personalData_MRS'},
	            { value: 'MISS',  text: 'personalData_MISS'},
	            { value: 'MS',    text: 'personalData_MS'}		            
	            ];

};
BRB.TitlesList.prototype = new BRB.BaseList();

