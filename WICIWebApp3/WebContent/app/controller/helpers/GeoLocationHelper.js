ensureNamespaceExists();

WICI.GeoLocationHelper = function () {
    var logPrefix = ' ---- [WICI.GeoLocationHelper]::';   
    
    this.getCoordinates = function (successCallback, failureCallback){
        var sMethod = 'getCoordinates() ';
        console.log(logPrefix + sMethod);   
        
        try {
        	console.log('cordova Object:');
    		console.log(JSON.stringify(cordova));

            cordova.exec(successCallback,
                    failureCallback,
                    "GeoLocationPlugin",
                    "getGeoLocation",
                    []);
        } catch (err) {
            failureCallback(err);
            console.log(logPrefix + sMethod + "::Initiate ERROR::" + err);
        }        
    }; 
};