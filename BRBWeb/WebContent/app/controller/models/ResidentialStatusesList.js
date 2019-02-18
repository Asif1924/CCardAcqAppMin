ensureNamespaceExists();

BRB.ResidentialStatusesList = function(argTranslator) {
	var logPrefix = '[BRB.ResidentialStatusesList]::';
	this.translator = argTranslator;
	
	this.data= [
          { value: null, text: 'pleaseSelect_Text'},
          { value: 'O', text: 'residentialStatus_Own'},
          { value: 'R', text: 'residentialStatus_Rent'},
          { value: 'P', text: 'residentialStatus_Parents'},
          // US5132
          { value: 'S', text: 'residentialStatus_Student_Houseing'},
          { value: 'M', text: 'residentialStatus_Other'}
         
      ];

};
BRB.ResidentialStatusesList.prototype = new BRB.BaseList();