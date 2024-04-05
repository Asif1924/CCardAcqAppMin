ensureNamespaceExists();

GENERICWEBAPP.Validator = function() {

    function notEmpty(value) {
        return _.isString(value) && !empty(value);
    }
    this.notEmpty = notEmpty;

    function empty(value) {
        return _.isString(value) && $.trim(value) === "";
    }
    this.empty = empty;

    //---------------------------------------------------------------------------------------
    this.maxSize = function(value, length) {
        return _.isString(value) && value.length <= length;
    };
    //---------------------------------------------------------------------------------------
    this.mod10 = function(value, length) {
        var luhnArr = [0, 2, 4, 6, 8, 1, 3, 5, 7, 9],
            counter = 0,
            odd = false,
            incNum, i;

        for (i = value.length - 1; i >= 0; --i) {
            incNum = parseInt(value.charAt(i), 10);
            counter += (odd =! odd) ? incNum : luhnArr[incNum];
        }

        if (!(_.isString(value) && value.length >= length)) {
            return false;
        }

        if ((counter % 10) === 0) {
            return true;
        } else {
            return false;
        }
    };
    //---------------------------------------------------------------------------------------
    this.postalCode = function(value) {
        // return notEmpty(value) && regexMatch(/^[a-z]\d[a-z]\d[a-z]\d$/i, value.trim());
        if (value === null) {
            return false;
        }
        return regexMatch(/^[ABCEGHJKLMNPRSTVXY]{1}\d{1}[A-Z]{1} *\d{1}[A-Z]{1}\d{1}$/, value);
    };
    //---------------------------------------------------------------------------------------
    this.city = function(value) {
        if(value===null){
            return false;
        }
        return regexMatch(/^[A-ZàâäèéêëîïôœùûüÿçÀÂÄÈÉÊËÎÏÔŒÙÛÜŸÇ0-9\'\-., ]{1,24}$/, value.trim());
    };
    //---------------------------------------------------------------------------------------
    function regexMatch(regex, value) {
        return value.match(regex);
    }

    this.emailAddress = function(value) {
        if (value === null) {
            return false;
        }
        return empty(value) || regexMatch(/^[-a-z0-9àâäèéêëîïôœùûüÿçÀÂÄÈÉÊËÎÏÔŒÙÛÜŸÇ~!$%^&*_=+}{\'?]+(\.[-a-z0-9àâäèéêëîïôœùûüÿçÀÂÄÈÉÊËÎÏÔŒÙÛÜŸÇ~!$%^&*_=+}{\'?]+)*@([a-z0-9àâäèéêëîïôœùûüÿçÀÂÄÈÉÊËÎÏÔŒÙÛÜŸÇ_][-a-z0-9àâäèéêëîïôœùûüÿçÀÂÄÈÉÊËÎÏÔŒÙÛÜŸÇ_]*(\.[-a-z0-9àâäèéêëîïôœùûüÿçÀÂÄÈÉÊËÎÏÔŒÙÛÜŸÇ_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i, value.trim());

    };

    this.moreThanZero = function(value) {
        return value > 0;
    };

    this.matches = function(value, otherValue) {
        return value === otherValue;
    };

    this.isOnlyNumeric = function(toTest) {
        var reg = new RegExp("^[0-9]+$");
        return (reg.test(toTest));
    };

    this.isWholeNumber = function(toTest) {
        var reg = new RegExp("^[0-9]+$|^[0-9]+\\.0*$");
        return (reg.test(toTest));
    };

    this.isFutureDate = function(yearToTest, monthToTest){
        var dateToTest = new Date(yearToTest, monthToTest);
        var currentDate = new Date();
        if(dateToTest>currentDate){
            return true;
        }
        return false;
    };
    //---------------------------------------------------------------------------------------
    this.personName = function(value) {
        // length:50
        // value:
        // "A-Z 0-9 -'
        // Alpha Numeric (Upper Case)
        // Hyphen
        // Single Quote"
        if(value===null){
            return false;
        }
        //return regexMatch(/^[A-Za-zàâäèéêëîïôœùûüÿçÀÂÄÈÉÊËÎÏÔŒÙÛÜŸÇ0-9\-\' ]{2,50}$/, value.trim());
        return regexMatch(/^[A-Za-zàâäèéêëîïôœùûüÿçÀÂÄÈÉÊËÎÏÔŒÙÛÜŸÇ\-\' ]{2,50}$/, value.trim());
    };
    //---------------------------------------------------------------------------------------
    this.companyName = function(value) {
        // length:50
        // value:
        // "A-Z 0-9 -'
        // Alpha Numeric (Upper Case)
        // Hyphen
        // Single Quote"
        if(value===null){
            return false;
        }
        return regexMatch(/^[A-Za-zàâäèéêëîïôœùûüÿçÀÂÄÈÉÊËÎÏÔŒÙÛÜŸÇ0-9\-\' ]{2,50}$/, value.trim());
    };
    //---------------------------------------------------------------------------------------
    this.jobPositionTitle = function(value) {
        // length:50
        // value:
        // "A-Z 0-9 -'
        // Alpha Numeric (Upper Case)
        // Hyphen
        // Single Quote"
        if(value===null){
            return false;
        }
        return regexMatch(/^[A-Za-zàâäèéêëîïôœùûüÿçÀÂÄÈÉÊËÎÏÔŒÙÛÜŸÇ0-9\-\' ]{2,50}$/, value.trim());
    };
    //---------------------------------------------------------------------------------------
    this.jobTitle = function(value) {
        // length:50
        // value:
        // "A-Z 0-9 -'
        // Alpha Numeric (Upper Case)
        // Hyphen
        // Single Quote"
        if(value===null){
            return false;
        }
        return regexMatch(/^[A-ZàâäèéêëîïôœùûüÿçÀÂÄÈÉÊËÎÏÔŒÙÛÜŸÇ0-9,_'-.~@\[\]\}\{\)\( ]+$/, value.trim());
    };
    //---------------------------------------------------------------------------------------
    this.phone= function(value) {
        if(value===null){
            return false;
        }
        return regexMatch(/^[0-9]{10}$/, value);
    };

    this.sin= function(value) {
        if(value===null){
            return false;
        }
        return regexMatch(/^[0-9]{9}$/, value);
    };
    //---------------------------------------------------------------------------------------
    this.streetNumber= function(value) {
        if(value===null){
            return false;
        }
        return regexMatch(/^[A-ZàâäèéêëîïôœùûüÿçÀÂÄÈÉÊËÎÏÔŒÙÛÜŸÇ0-9\'\- ]{1,6}$/, value.trim());
    };
    //---------------------------------------------------------------------------------------
    this.addressLine= function(value) {
        if(value===null){
            return false;
        }
        return regexMatch(/^[A-ZàâäèéêëîïôœùûüÿçÀÂÄÈÉÊËÎÏÔŒÙÛÜŸÇ0-9\'\-., ]{1,40}$/, value.trim());
    };
    //---------------------------------------------------------------------------------------
    this.suiteUnit = function(value) {
        if(value===null){
            return false;
        }
        return regexMatch(/^[A-ZàâäèéêëîïôœùûüÿçÀÂÄÈÉÊËÎÏÔŒÙÛÜŸÇ0-9\'\-., ]{1,10}$/, value.trim());
    };
    //---------------------------------------------------------------------------------------
    this.termsAndConditions = function(value) {
        if(value === null || value === false || !value || value==='N' || value==='NO') {
            return false;
        }
        return true;
    };
    //---------------------------------------------------------------------------------------
    this.birthDate = function(value) {
        if(value === null || value === '' || !value)
        {
            return false;
        }

        var dateParts = value.split("-");
        var enteredDate = new Date(dateParts[0], dateParts[1] - 1, dateParts[2]);

        var currentDate = new Date();
        if(enteredDate > currentDate)
        {
            return false;
        }
        return true;
    };

    //---------------------------------------------------------------------------------------
    this.employerID = function(value) {
        if(value===null){
            return false;
        }
        return regexMatch(/^[a-zA-ZàâäèéêëîïôœùûüÿçÀÂÄÈÉÊËÎÏÔŒÙÛÜŸÇ]{1}$/, value.trim());
    };
};
