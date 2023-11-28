'use strict';
ensureNamespaceExists();

(function () {
    var LOG_TAG = 'BarcodeHelper ';

    /**
     * Scan these barcode types
     * Available: AZTECCODE, C11, C128, C25, C39, C39_CONVERT_TO_C32, C93, CODABAR, DATABAR, DATAMATRIX, 
					DOTCODE, EAN_UCC, FOUR_STATE_AUS, FOUR_STATE_IMB, FOUR_STATE_JAP, FOUR_STATE_RMC, 
					FOUR_STATE_UPU, I2O5, MAXICODE, MICROPDF417, MSI, OCR, PDF417, PHARMACODE, PLANET, 
					POSTNET, QR, RPC, TELEPEN, UNKNOWN, UPC_EAN, VERICODE 
     */
    
    //var types = ["PDF417"];
    //For US3625 added Code 128  
    var types = ["PDF417","C128"];

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

    // This license is valid 
    var licenseAndroid = "kIM9ctlcTa4opZoHb+DNkCfnN9GmzKdVjsrSknwq9o0=";

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
            var deferred = WICI.cordovaExecDeferred('BarcodeScanner', 'scan', [types, options, licenseAndroid]);
            deferred.fail(function () {
                
            });
            deferred.done(function (res) {
                if (res.cancelled) {
                    console.log(LOG_TAG + 'Cancelled');
                }
            });
            return deferred;
        }
    };
})();
