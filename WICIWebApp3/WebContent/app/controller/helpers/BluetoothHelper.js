'use strict';
ensureNamespaceExists();

(function ( ) {
    WICI.BluetothHelper = {
        /**
         * @return jQuery.Deferred
         */
        toggle: function () {
            var deferred = WICI.cordovaExecDeferred('BluetoothPlugin', 'toggle');
            deferred.fail(function () {});
            return deferred;
        }
    };
})();