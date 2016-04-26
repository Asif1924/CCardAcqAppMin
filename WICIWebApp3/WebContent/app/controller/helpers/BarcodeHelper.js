'use strict';
ensureNamespaceExists();

(function () {
    var LOG_TAG = 'BarcodeHelper ';

    /**
     * Scan these barcode types
     * Available: "PDF417", "QR Code", "Code 128", "Code 39", "EAN 13", "EAN 8", "ITF", "UPCA", "UPCE"
     */
    
    //var types = ["PDF417"];
    //For US3625 added Code 128  
    var types = ["PDF417","Code 128"];

    /**
     * Initiate scan with options
     * NOTE: Some features are unavailable without a license
     * Obtain your key at http://pdf417.mobi
     */
    var options = {
        beep : true,
        noDialog : true,
        removeOverlay :true,
        uncertain : false, //Recommended
        quietZone : false, //Recommended
        highRes : false, //Recommended
        frontFace : false
    };

    // This license is only valid for package name "com.ctfs.wicimobile"
    var licenseAndroid = "7I4N-R4MR-34A3-UU57-CU4I-RK5W-ZABL-W3QW";

    WICI.BarcodeHelper = {
        /**
         * @return jQuery.Deferred
         * .done(result) => {
         *      "cancelled" - true if user cancel scanning
         *      "raw" - raw data representation
         *      "data" - data decoded as string (main result field)
         *      "type" - "PDF417" or "QR Code"
         * }
         */
        scan: function () {
            var deferred = WICI.cordovaExecDeferred('Pdf417Scanner', 'scan', [types, options, licenseAndroid]);
            deferred.fail(function (msg) {
                console.log(LOG_TAG + 'Barcode scan fail: ' + msg);
            });
            deferred.done(function (res) {
                if (res.cancelled) {
                    console.log(LOG_TAG + 'Cancelled');
                } else {
                    console.log(LOG_TAG + 'Done. result: ' + JSON.stringify(res));
                }
            });
            return deferred;
        }
    };
})();
