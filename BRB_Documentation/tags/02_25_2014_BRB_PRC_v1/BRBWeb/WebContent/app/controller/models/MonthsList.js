ensureNamespaceExists();

BRB.MonthsList = function(argTranslator) {
	var logPrefix = '[BRB.MonthsList]::';
	this.translator = argTranslator;
	// values of months are according to javax.xml.datatype.XMLGregorianCalendar
	this.data= [
          { value: null, text: 'monthSelect_Text'},
          { value: '1', text: 'January'},
          { value: '2', text: 'February'},
          { value: '3', text: 'March'},
          { value: '4', text: 'April'},
          { value: '5', text: 'May'},
          { value: '6', text: 'June'},
          { value: '7', text: 'July'},
          { value: '8', text: 'August'},
          { value: '9', text: 'September'},
          { value: '10', text: 'October'},
          { value: '11', text: 'November'},
          { value: '12', text: 'December'}
      ];
    
};
BRB.MonthsList.prototype = new BRB.BaseList();