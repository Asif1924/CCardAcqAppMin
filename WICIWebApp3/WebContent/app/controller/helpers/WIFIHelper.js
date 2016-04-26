'use strict';
ensureNamespaceExists();

(function () {
    var LOG_TAG = 'WIFIHelper ';

    WICI.WIFIHelper = {
        /**
         * @return jQuery.Deferred
         */
        createWICINetwork: function () {
            var deferred = WICI.cordovaExecDeferred('WifiPlugin', 'createWICINetwork');
            deferred.fail(function (msg) {
                console.log(LOG_TAG + 'createWICINetwork fail: ' + msg);
            });
            return deferred;
        }        
    };
})();