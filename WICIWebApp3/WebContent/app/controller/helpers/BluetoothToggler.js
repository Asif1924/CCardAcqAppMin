ensureNamespaceExists();

WICI.BluetoothToggler = function () {
    var logPrefix = ' ---- [WICI.BluetoothToggler]::';
    
    this.toggle = function (argSuccessCallback, argFailureCallback){
        var sMethod = 'toggle() ';
        console.log(logPrefix + sMethod);   
        
        try {
        	console.log('cordova Object:');
    		console.log(JSON.stringify(cordova));
            cordova.exec(argSuccessCallback, argFailureCallback, "BluetoothPlugin", "toggle");
        } catch (err) {
        	argFailureCallback(err);
            console.log(logPrefix + sMethod + "::Initiate ERROR::" + err);
        }        
    }
    
};
