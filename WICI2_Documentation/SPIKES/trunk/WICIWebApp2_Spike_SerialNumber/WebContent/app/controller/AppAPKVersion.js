ensureNamespaceExists();

WICI.AppAPKVersion = function () {  
    var logPrefix = ' ---- [WICI.AppAPKVersion]::';
    
    var apkVersion = null;
    var deviceInfo = null;

    this.init = function() {
    	var sMethod = 'init() ';
    	console.log(logPrefix + sMethod);
        try {
        	if (cordova) {
        		cordova.exec(retrieveAPKVersionSuccess, retrieveAPKVersionFailure, "AppVersionPlugin", "getAPKVersion", []);
        		cordova.exec(getDeviceInfoSuccess,getDeviceInfoFailure,"AppVersionPlugin","getDeviceInfo",[]);
        	} else {
        		console.log(logPrefix + sMethod + "- Initiate ERROR: cordova === NULL");
        	}
        } catch (err) {
            console.log(logPrefix + sMethod + "- Initiate ERROR: " + err);            
        };     	
    };
    
    function getDeviceInfoSuccess(result){
		var sMethod = 'retrieveAPKVersionSuccess():: APK version: ' + result;
        console.log(logPrefix + sMethod);
    	
        // Set Device Info
        if (result) {
        	deviceInfo = result;
        } else {
        	deviceInfo = {};
        }
    }
    
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

    function getDeviceInfoFailure(result){
		var sMethod = 'getDeviceInfoFailure():: ' + error;
        console.log(logPrefix + sMethod);    	
    }
    
    function retrieveAPKVersionFailure(error) {
		var sMethod = 'retrieveAPKVersionFailure():: ' + error;
        console.log(logPrefix + sMethod);
    };
    
    // ===========================================================================================
    this.getDeviceInfo = function() {
        var sMethod = 'getDeviceInfo() ';
        console.log(logPrefix + sMethod);
        
        return deviceInfo;
	};
    
    this.getAPKVersion = function() {
        var sMethod = 'getAPKVersion() ';
        console.log(logPrefix + sMethod);
        
        return apkVersion;
	};
    
};