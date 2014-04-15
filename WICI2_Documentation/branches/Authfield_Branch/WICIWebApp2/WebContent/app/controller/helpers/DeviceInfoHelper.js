ensureNamespaceExists();

WICI.DeviceInfoHelper = function () {
    var logPrefix = ' ---- [WICI.DeviceInfoHelper]::';
    var deviceInfo = null;

    this.getDeviceInfo = function() {
        var sMethod = 'getDeviceInfo() ';
        console.log(logPrefix + sMethod);
        
        return deviceInfo;
	};      
    
    this.init = function() {
    	var sMethod = 'init() ';
    	console.log(logPrefix + sMethod);
        try {
        	if (cordova) {
        		cordova.exec(getDeviceInfoSuccess, getDeviceInfoFailure, "DeviceInfoPlugin", "getDeviceInfo", []);
        	} else {
        		console.log(logPrefix + sMethod + "- Initiate ERROR: cordova === NULL");
        	}
        } catch (err) {
            console.log(logPrefix + sMethod + "- Initiate ERROR: " + err);            
        };     	
    };    
    
    function getDeviceInfoSuccess(result) {
		var sMethod = 'getDeviceInfoSuccess():: Device Info: ' + result;
        console.log(logPrefix + sMethod);
    	
        // Set APK version
        if (result) {
        	deviceInfo = result;
        } else {
        	deviceInfo = {};
        }
    };

    function getDeviceInfoFailure(error) {
		var sMethod = 'getDeviceInfoFailure():: ' + error;
        console.log(logPrefix + sMethod);
    };
    
};