ensureNamespaceExists();

WICI.BarcodeHelper = function() {
	var logPrefix = "---- [WICI.BarcodeHelper]::";
	var scaleFactor = 2; // Possible scale factor value from 1 to 5
	var currentEncoderName = "code128";
	
	BWIPJS.load = function(path) {};
	this.convertDeviceSerialNumberToBarcode = convertDeviceSerialNumberToBarcode;
	
	function convertDeviceSerialNumberToBarcode (deviceSerialNumber)
	{
		var sMethod = 'convertDeviceSerialNumberToBarcode() ';
		console.log(logPrefix + sMethod + "::Device Serial Number::" + deviceSerialNumber);
		
		try {
			var bw = new BWIPJS;

			// Create a dictionary object and set the options
			var opts = {};
			opts.includetext = bw.value(true);

			// Create the bitmap interface and pass to the emulator
			bw.bitmap(new Bitmap);
			
			// Set the scaling factor			
			bw.scale(scaleFactor, scaleFactor);

			//var deviceSerialNumber = "RF1C7AY6REM";//app.deviceInfoHelper.getDeviceInfo().MfgSerial

			// Push the barcode text and options onto the operand stack
			bw.push(deviceSerialNumber);
			bw.push(opts);

			// Invoke the encoder and render the barcode
			bw.call(currentEncoderName);
			
			return bw.bitmap();
		} catch (err) {
			console.log(logPrefix + sMethod + "::Initiate ERROR::" + err);
		}
		
		return null;
	}
};