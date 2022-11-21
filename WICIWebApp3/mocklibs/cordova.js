ensureNamespaceExists();

(window.cordova = function() {
	var logPrefix = ' ---- [window.cordova]::';
	this.exec = function( success, fail, pluginName, pluginMethod, argsArray ){
		var sMethod = 'exec()';
		console.log(logPrefix + sMethod );
		console.log(logPrefix + sMethod + ":pluginName=" + pluginName);
		console.log(logPrefix + sMethod + ":pluginMethod=" + pluginMethod);
		console.log(logPrefix + sMethod + ":argsArray=" + argsArray);
		
		if(pluginName==="AppVersionPlugin"){
			if( pluginMethod==="getAPKVersion" ){
				//Set the version in local.properties major, minor, patch ...etc
				success(WICI.version);
			}			
		}

		if(pluginName==="DeviceInfoPlugin"){
			if(pluginMethod==="getDeviceInfo"){
				var  deviceInfo = "{MfgSerial : 'SCOOBY' , BuildSerial : '123213123213'}";
				success(deviceInfo);
			}
		}
		throw 'Cant find plugin'; 
	};


});

window.cordova = new window.cordova();