ensureNamespaceExists();

BRB.StreetTypeList = function(argTranslator) {
	var logPrefix = '[BRB.StreetTypeList]::';
	this.translator = argTranslator;
	
	this.data= [
          { value: null, text: 'pleaseSelect_Text'},
          { value: 'ST', text: 'personalInfo_street'},
          { value: 'CO', text: 'personalInfo_court'},
          { value: 'AL', text: 'personalInfo_Alley'},
          { value: 'BO', text: 'personalInfo_Boulevard'},
          { value: 'DR', text: 'personalInfo_Drive'},
          { value: 'CR', text: 'personalInfo_Crescent'},
          { value: 'AV', text: 'personalInfo_Avenue'},
          { value: 'WA', text: 'personalInfo_Way'},
          { value: 'LI', text: 'personalInfo_Line'},
          { value: 'TE', text: 'personalInfo_Terrace'},
          { value: 'BL', text: 'personalInfo_Blank'},
      ];
};
BRB.StreetTypeList.prototype = new BRB.BaseList();
