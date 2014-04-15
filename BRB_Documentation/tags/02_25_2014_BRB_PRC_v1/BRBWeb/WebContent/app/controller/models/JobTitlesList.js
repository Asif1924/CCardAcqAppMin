ensureNamespaceExists();

BRB.JobTitlesList = function(argTranslator) {
	var logPrefix = '[BRB.JobTitlesList]::';
	this.translator = argTranslator;
	
    this.data= [
          { value: null, text: 'pleaseSelect_Text'},
          { value: 'DR', text: 'jobTitlesList_DR'},
          { value: 'GU', text: 'jobTitlesList_GU'},
          { value: 'HO', text: 'jobTitlesList_HO'},
          { value: 'LA', text: 'jobTitlesList_LA'},
          { value: 'MA', text: 'jobTitlesList_MA'},
          { value: 'MI', text: 'jobTitlesList_MI'},
          { value: 'OF', text: 'jobTitlesList_OF'},
          { value: 'OW', text: 'jobTitlesList_OW'},
          { value: 'FA', text: 'jobTitlesList_FA'},
          { value: 'PR', text: 'jobTitlesList_PR'},
          { value: 'RE', text: 'jobTitlesList_RE'},
          { value: 'RT', text: 'jobTitlesList_RT'},
          { value: 'SA', text: 'jobTitlesList_SA'},
          { value: 'SE', text: 'jobTitlesList_SE'},
          { value: 'ST', text: 'jobTitlesList_ST'},
          { value: 'TR', text: 'jobTitlesList_TR'},
          { value: 'UN', text: 'jobTitlesList_UN'},
          { value: 'OT', text: 'jobTitlesList_OT'}
      ];

};
BRB.JobTitlesList.prototype = new BRB.BaseList();