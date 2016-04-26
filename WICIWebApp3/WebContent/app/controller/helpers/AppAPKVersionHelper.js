ensureNamespaceExists();

WICI.AppAPKVersionHelper = function () {  
    var logPrefix = ' ---- [WICI.AppAPKVersionHelper]::';
    
    var apkVersion = null;

    this.init = function() {
    	var sMethod = 'init() ';
    	console.log(logPrefix + sMethod);
        try {
        	if (cordova) {
        		cordova.exec(retrieveAPKVersionSuccess, retrieveAPKVersionFailure, "AppVersionPlugin", "getAPKVersion", []);
        	} else {
        		console.log(logPrefix + sMethod + "- Initiate ERROR: cordova === NULL");
        	}
        } catch (err) {
            console.log(logPrefix + sMethod + "- Initiate ERROR: " + err);            
        };     	
    };
    
    function retrieveAPKVersionSuccess(result) {
		var sMethod = 'retrieveAPKVersionSuccess():: APK version: ' + result;
        console.log(logPrefix + sMethod);
    	
        // Set APK version
        if (result) {
        	apkVersion = result;
        } else {
        	apkVersion = 0;
        }
    };

    function retrieveAPKVersionFailure(error) {
		var sMethod = 'retrieveAPKVersionFailure():: ' + error;
        console.log(logPrefix + sMethod);
    };
    
    // ===========================================================================================
    
    this.getAPKVersion = function() {
        var sMethod = 'getAPKVersion() ';
        console.log(logPrefix + sMethod);
        
        return apkVersion;
	};    
};