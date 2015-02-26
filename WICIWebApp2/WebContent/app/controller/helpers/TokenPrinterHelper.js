'use strict';
ensureNamespaceExists();

(function () {
    var LOG_TAG = 'TokenPrinterHelper ';

    WICI.TokenPrinterHelper = {
        /**
         * @param {String} token
         * @return jQuery.Deferred
         */
        printToken: function (token) {
            var deferred = WICI.cordovaExecDeferred('TokenPrinterPlugin', 'printToken', [token]);
            deferred.fail(function (msg) {
                console.log(LOG_TAG + 'printToken fail: ' + msg);
            });
            return deferred;
        }
    };
})();