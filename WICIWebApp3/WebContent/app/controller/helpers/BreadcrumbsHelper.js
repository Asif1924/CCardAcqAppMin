ensureNamespaceExists();

WICI.BreadcrumbsHelper = (function () {
    function isNotEmployee (activationItems) {
        return activationItems.getModel('loginScreen').get('employerID').toUpperCase() !== "E";
    }
    
    function checkLandlineSelected(activationItems) {
    	return activationItems.getModel('personalData').get('primaryLandline_CheckField') === "Y" && 
				activationItems.getModel('personalData').get('secondaryLandline_CheckField') === "Y";
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
