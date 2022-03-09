ensureNamespaceExists();
//ID Number Rules
// US4112                          
WICI.IdNumberValidation = function() {                                       
	this.data = [
	             { prov : 'AB', idTypes : ['DR','AB' ],     idPostion :null,    regExp: /^[0-9\-\s]{5,9}$/ },
	             { prov : 'AB', idTypes : ['HE'],           idPostion :null,    regExp: /^[a-zA-Z0-9\-\s]{8,}$/ },
	             { prov : 'AB', idTypes : ['BI'],           idPostion :null,    regExp: /^[a-zA-Z0-9\-\s]{6,}$/ },
	             { prov : 'BC', idTypes : ['DR'],           idPostion :null,    regExp: /^[0-9\-\s]{7}$/}, 
	             { prov : 'BC', idTypes : ['BC', 'BI','SC'],idPostion :null,    regExp: /^[a-zA-Z0-9\-\s]{9,10}$/},
	             { prov : 'CA', idTypes : ['CI'],           idPostion :null,    regExp: /^[0-9\-\s]{8}$/},
	             { prov : 'CA', idTypes : ['IN'],  		    idPostion :null,    regExp: /^[a-zA-Z0-9\-\s]{6,12}$/},
	             { prov : 'CA', idTypes : ['PR'],      		idPostion :null,    regExp: /^[0-9\-\s]{8,9}$/},
	             { prov : 'CA', idTypes : ['PA'],		    idPostion :null,    regExp: /^[a-zA-Z]{2}[a-zA-Z0-9\-\s]{6}$/},
	             { prov : 'CA', idTypes : ['RE'],           idPostion :null,    regExp: /^[a-zA-Z0-9\-\s]{8,}$/},
	             { prov : 'MB', idTypes : ['MB'],           idPostion :null,    regExp: /^[0-9\-\s]{5,10}$/}, 
	             { prov : 'MB', idTypes : ['BI'],           idPostion :null,    regExp: /^[a-zA-Z0-9\-\s]{6,}$/}, 
	             { prov : 'MB', idTypes : ['DR'],           idPostion :null,    regExp: /^[a-zA-Z0-9\-\s]{8,15}$/}, 
	             { prov : 'NB', idTypes : ['DR','NB'],      idPostion :null,    regExp: /^[0-9\-\s]{5,7}$/ },
	             { prov : 'NB', idTypes : ['HE'],           idPostion :null,    regExp: /^[a-zA-Z0-9\-\s]{8,}$/ },
	             { prov : 'NB', idTypes : ['BI'],           idPostion :null,    regExp: /^[a-zA-Z0-9\-\s]{10,}$/ },
	             { prov : 'NL', idTypes : ['BI','HE'],      idPostion :null,    regExp: /^[a-zA-Z0-9\-\s]{10,}$/ }, 
	             { prov : 'NL', idTypes : ['NL'],           idPostion :null,    regExp: /^[a-zA-Z0-9\-\s]{9,12}$/ },
	             { prov : 'NT', idTypes : ['DR'],			idPostion :null,    regExp: /^[0-9\-\s]{5,10}$/ },
	             { prov : 'NT', idTypes : ['NT','BI'],		idPostion :null,    regExp: /^[a-zA-Z0-9\-\s]{5,10}$/ },
	             { prov : 'NS', idTypes : ['BI'],           idPostion :null,    regExp: /^[a-zA-Z0-9\-\s]{5,}$/ } ,
	             { prov : 'NS', idTypes : ['NS'],           idPostion :null,    regExp: /^[a-zA-Z0-9\-\s]{10,15}$/ } ,
	             { prov : 'NU', idTypes : ['BI','NU'],      idPostion :null,    regExp: /^[0-9\-\s]{8,9}$/ } ,
	             { prov : 'NU', idTypes : ['DR'],           idPostion :null,    regExp: /^[0-9\-\s]{6}$/ } ,
	             { prov : 'NU', idTypes : ['HE'],           idPostion :null,    regExp: /^[a-zA-Z0-9\-\s]{8,}$/ } ,
	             { prov : 'ON', idTypes : ['BI'],           idPostion :null,    regExp: /^[a-zA-Z0-9\-\s]{10,}$/ }, 
	             { prov : 'ON', idTypes : ['ON'],           idPostion :null,    regExp: /^[a-zA-Z0-9\-\s]{3}[a-zA-Z]{2}[a-zA-Z0-9\-\s]{7,9}$/ }, 
	             { prov : 'PE', idTypes : ['PE'],           idPostion :null,    regExp: /^[0-9\-\s]{5,6}$/ },
	             { prov : 'PE', idTypes : ['BI'],           idPostion :null,    regExp: /^[a-zA-Z0-9\-\s]{8,}$/ },
	             { prov : 'PE', idTypes : ['DR'],           idPostion :null,    regExp: /^[0-9\-\s]{4,6}$/ },
	             { prov : 'QC', idTypes : ['BI'],           idPostion :null,    regExp: /^[a-zA-Z0-9\-\s]{10,}$/ } ,
	             { prov : 'YT', idTypes : ['DR'], 			idPostion :null,    regExp: /^[0-9\-\s]{5,6}$/ } ,
	             { prov : 'YT', idTypes : ['YT','BI'], 		idPostion :null,    regExp: /^[0-9\-\s]{5,9}$/ } ,
	             { prov : 'SK', idTypes : ['SK','BI'],      idPostion :null,    regExp: /^[0-9\-\s]{8,9}$/ },
	             { prov : 'SK', idTypes : ['DR'],           idPostion :null,    regExp: /^[0-9\-\s]{8}$/ },
	             { prov : 'QC', idTypes : ['HE'],           idPostion : [{firstChar:4, secondChar:5,  datePostion:'Y'}, {firstChar:8, secondChar:9,datePostion:'D'}],    													  regExp:  /^[a-zA-Z]{2}[a-zA-Z0-9\-\s]{10}$/ } ,
	             { prov : 'QC', idTypes : ['DR'],           idPostion : [{firstChar:9, secondChar:10, datePostion:'Y'}, {firstChar:5, secondChar:6,datePostion:'D'},      {firstChar:7, secondChar:8,datePostion:'M'}],       regExp:  /^[a-zA-Z][a-zA-Z0-9\-\s]{12}$/  } ,
	             { prov : 'ON', idTypes : ['DR'],           idPostion : [{firstChar:9, secondChar:10, datePostion:'Y'}, {firstChar:13, secondChar:14,datePostion:'D'}],                       							  	  regExp:  /^[a-zA-Z][a-zA-Z0-9\-\s]{14}$/ } ,
	             { prov : 'NS', idTypes : ['DR'],           idPostion : [{firstChar:5, secondChar:6,  datePostion:'D'}, {firstChar:7, secondChar:8,datePostion:'M'},      {firstChar:9, secondChar:10,datePostion:'Y'}],      regExp:  /^[a-zA-Z]{5}[a-zA-Z0-9\-\s]{6,9}$/ } ,
	             { prov : 'NL', idTypes : ['DR'],           idPostion : [{firstChar:1, secondChar:2,  datePostion:'Y'}, {firstChar:3, secondChar:4,datePostion:'M'},      {firstChar:5, secondChar:6,datePostion:'D'}],       regExp:  /^[a-zA-Z][a-zA-Z0-9\-\s]{9}$/ }
	             
		
	];
	
};   
