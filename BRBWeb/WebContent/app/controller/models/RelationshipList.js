ensureNamespaceExists();

BRB.RelationshipList = function(argTranslator) {
	//var logPrefix = '[BRB.RelationshipList]::';
	this.translator = argTranslator;
	
	this.data= [
          { value: null, text: 'pleaseSelect_Text1'},
          { value: 'SPOU', 	text: 'additionalInformation_Spouse'},
          { value: 'SON',	text: 'additionalInformation_Son'},
          { value: 'DAUG', 	text: 'additionalInformation_Daughter'},
          { value: 'RELA', 	text: 'additionalInformation_Relative'},
          { value: 'OTHE', 	text: 'additionalInformation_Other'}
      ];
};
BRB.RelationshipList.prototype = new BRB.BaseList();

