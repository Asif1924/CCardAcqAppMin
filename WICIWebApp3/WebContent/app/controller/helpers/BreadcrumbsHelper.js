ensureNamespaceExists();

WICI.BreadcrumbsHelper = (function () {
    function isNotEmployee (activationItems) {
        return activationItems.getModel('loginScreen').get('employerID').toUpperCase() !== "E";
    }

    function assembleBreadcrumbs (currentScreenNumber, $screenContainer, activationItems) {
        $('#WICIBreadcrumbs').tmpl({
            isNotEmployee: isNotEmployee(activationItems),
            current: currentScreenNumber
        }).appendTo($screenContainer);
    }

    return {
        assembleBreadcrumbs: assembleBreadcrumbs
    };
})();
