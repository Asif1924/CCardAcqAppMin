'use strict';
ensureNamespaceExists();

(function () {
    WICI.TokenPrinterHelper = {
        /**
         * @param {String} token
         * @return jQuery.Deferred
         */
        printToken: function (token) {
            var deferred = WICI.cordovaExecDeferred('TokenPrinterPlugin', 'printToken', [token]);
            deferred.fail(function () { });
            return deferred;
        }
    };
})();