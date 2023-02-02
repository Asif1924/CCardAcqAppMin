ensureNamespaceExists();

WICI.BreadcrumbsHelper = (function () {
    function isNotEmployee (activationItems) {
    	var enableOPProduct = false;
    	    	   	
    	if( activationItems.getModel('loginScreen').get('employerID').toUpperCase() !== "E") {
    		enableOPProduct = true;
    	}
    	console.log(activationItems.getModel('loginScreen').get('outletProvince'))
    	
    	if( activationItems.getModel('loginScreen').get('outletProvince') != null){
    		if (activationItems.getModel('loginScreen') .get('outletProvince') === 'SK' || activationItems.getModel('loginScreen') .get('outletProvince') === 'MB') {
 				if (activationItems.getModel('loginScreen').get('employerID').toUpperCase() === 'K') {
 					enableOPProduct = true;
 				} else {
 					enableOPProduct = false;
 				}
 		 	}
		 	if ( activationItems.getModel('loginScreen') .get('outletProvince') === 'YT') {
				enableOPProduct = false;
    	 	}
    	 	// Discontinue NBO Feb 1 2023
		 	if ( activationItems.getModel('loginScreen') .get('outletProvince') === 'NB') {
				enableOPProduct = false;
    	 	}
		 	if (activationItems.getModel('loginScreen') .get('outletProvince')  === 'AB') {
				enableOPProduct = false;
		 	}
		 	if (activationItems.getModel('loginScreen') .get('outletProvince') === 'QC') {
				if (activationItems.getModel('loginScreen').get('employerID').toUpperCase() === 'C' || activationItems.getModel('loginScreen').get('employerID') === 'K') {
					enableOPProduct= true;
				} else {
					enableOPProduct= false;
				}
		 	}
    	}   	 
		if (activationItems.getModel('personalData') != null && activationItems.getModel('personalData').get('placeofissue') != null && activationItems.getModel('personalData').get('placeofissue') === 'YT'){
			 if (activationItems.getModel('loginScreen').get('employerID').toUpperCase() !== 'E') {
				 enableOPProduct= true;
			 }
	    }
		if (activationItems.getModel('personalData2_Address') != null && activationItems.getModel('personalData2_Address').get('province') != null && activationItems.getModel('personalData2_Address').get('province') === 'YT') {
			 if (activationItems.getModel('loginScreen').get('employerID') !== 'E') {
				 enableOPProduct= true;
			 }
	    }
		// Discontinue NBO Feb 1 2023
		if (activationItems.getModel('personalData') != null && activationItems.getModel('personalData').get('placeofissue') != null && activationItems.getModel('personalData').get('placeofissue') === 'NB'){
			 if (activationItems.getModel('loginScreen').get('employerID').toUpperCase() !== 'E') {
				 enableOPProduct= true;
			 }
	    }
		if (activationItems.getModel('personalData2_Address') != null && activationItems.getModel('personalData2_Address').get('province') != null && activationItems.getModel('personalData2_Address').get('province') === 'NB') {
			 if (activationItems.getModel('loginScreen').get('employerID') !== 'E') {
				 enableOPProduct= false;
			 }
	    }
		if (activationItems.getModel('personalData') != null) {
			var personalDataModel = activationItems.getModel('personalData');
	        console.log(" age "+personalDataModel.get('age'));
	        if(personalDataModel.get('age') > 76) {
	        	enableOPProduct= false;
	        }
		}
		if(activationItems.getModel('financialData') != null && activationItems.getModel('financialData').get('insurance_CPType_Available').toUpperCase() == "NONE") {
			enableOPProduct= false;
		}
    	console.log("enableOPProduct :: " +enableOPProduct);
    	return enableOPProduct;
    }
    
    function checkLandlineSelected(activationItems) {
    	return activationItems.getModel('contactInfoScreen').get('primaryLandline_CheckField') === "Y" && 
				activationItems.getModel('contactInfoScreen').get('secondaryLandline_CheckField') === "Y";
    }

    function assembleBreadcrumbs (currentScreenNumber, $screenContainer, activationItems) {
        $('#WICIBreadcrumbs').tmpl({
            isNotEmployee: isNotEmployee(activationItems),
            current: currentScreenNumber,
            landLineFlag: currentScreenNumber > 2 ? checkLandlineSelected(activationItems) : false ,
        }).appendTo($screenContainer);
    }

    return {
        assembleBreadcrumbs: assembleBreadcrumbs
    };
})();
