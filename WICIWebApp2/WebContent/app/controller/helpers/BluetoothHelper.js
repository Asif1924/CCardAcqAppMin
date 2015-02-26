'use strict';
ensureNamespaceExists();

(function ( ) {
    var LOG_TAG = 'BluetoothHelper ';

    WICI.BluetothHelper = {
        /**
         * @return jQuery.Deferred
         */
        toggle: function () {
            var deferred = WICI.cordovaExecDeferred('BluetoothPlugin', 'toggle');
            deferred.fail(function (msg) {
                console.log(LOG_TAG + 'Bluetooth toggle fail: ' + msg);
            });
            return deferred;
        }
    };
})();