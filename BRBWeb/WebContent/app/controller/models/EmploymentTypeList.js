ensureNamespaceExists();

BRB.EmploymentTypeList = function(argTranslator) {
	var logPrefix = '[BRB.EmploymentTypeList]::';
	this.translator = argTranslator;
	
	this.data= [
          { value: null, text: 'pleaseSelect_Text'},
          { value: 'F', text: 'employmentType_FullTime'},
          { value: 'S', text: 'employmentType_Seasonal'},
          { value: 'P', text: 'employmentType_PartTime'},
          { value: 'R', text: 'employmentType_Retired'}
      ];
};
BRB.EmploymentTypeList.prototype = new BRB.BaseList();
