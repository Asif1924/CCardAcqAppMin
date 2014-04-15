ensureNamespaceExists();

WICI.ZebraPrinterController = function () {  
    var logPrefix = ' ---- [WICI.ZebraPrinterController]::';
    var printerMacAddress = null;
    
    //---------------------------------------------------------------------------------------
    this.getStoredPrinterMacAddress = function (successCallback, failureCallback) {
        cordova.exec(successCallback, failureCallback, "ZebraPrinterPlugin", "getStoredPrintMacAddress", []);
    };
    //---------------------------------------------------------------------------------------
    this.discoverPrinters = function (successCallback, failureCallback) {
        var sMethod = 'discoverPrinters() ';
        console.log(logPrefix + sMethod);
        try {
            cordova.exec(successCallback, failureCallback, "ZebraPrinterDiscoveryPlugin", "discoveryPrinters", []);
        } catch (err) {
            console.log(logPrefix + sMethod + "::Initiate ERROR::" + err);            
        }
    };
    //---------------------------------------------------------------------------------------
    this.testPrint = function (successCallback, failureCallback) {
        var sMethod = 'testPrint() ';
        console.log(logPrefix + sMethod);
        
        try {
            // Send response to mobile side  
        	
        	console.log('cordova Object:');
    		console.log(JSON.stringify(cordova));
    		
            cordova.exec(successCallback, 
                    failureCallback, 
                    "ZebraPrinterPlugin",
                    "testPrint",
                    [printerMacAddress]);
        } catch (err) {
            console.log(logPrefix + sMethod + "::Initiate ERROR::" + err);            
        } 
    };
    //---------------------------------------------------------------------------------------
    this.printFile = function (activationItems, applicationResponse, successCallback, failureCallback) {
        var sMethod = 'printFile() ';
        console.log(logPrefix + sMethod);
        console.log('----------test----------');
        console.log(activationItems.getModel('personalData').get('correspondence'));
        console.log(activationItems.getModel('OptionalProductsModel').get('insuranceCode'));
        console.log('--------------------');
        try {
            // Send response to mobile side  
            cordova.exec(successCallback, 
                failureCallback, 
                "ZebraPrinterPlugin",
                "printOutMockup", 
                [printerMacAddress,                 
                 activationItems.getModel('chooseProductModel').get('productCard'),
                 activationItems.getModel('personalData').get('firstName') ? activationItems.getModel('personalData').get('firstName') : "", 
                 activationItems.getModel('personalData').get('initial') ? activationItems.getModel('personalData').get('initial') : "",
                 activationItems.getModel('personalData').get('lastName') ? activationItems.getModel('personalData').get('lastName') : "",
                 applicationResponse.accountNumber ? applicationResponse.accountNumber : "",                       
                 applicationResponse.expiryDate ? applicationResponse.expiryDate : "",
                 applicationResponse.creditLimit ? applicationResponse.creditLimit : "",     
                 applicationResponse.apr ? applicationResponse.apr : "", 
                 applicationResponse.cashAPR ? applicationResponse.cashAPR : "",
                 activationItems.getModel('signatureModel').get('userSingnature'),
                 applicationResponse.appStatus,                 
                 activationItems.getModel('chooseProductModel').get('province') ? activationItems.getModel('chooseProductModel').get('province') : "",
                 activationItems.getModel('personalData').get('correspondence') ? activationItems.getModel('personalData').get('correspondence') : "",
                 prepareCreditProtectorYesNo(activationItems.getModel('OptionalProductsModel').get('insuranceCode'), activationItems.getModel('personalData').get('correspondence')),//creditProtectoryYesNo 
                 prepareIdentityWatchYesNo(activationItems.getModel('OptionalProductsModel').get('insuranceCode'), activationItems.getModel('personalData').get('correspondence'))]);//identityWatchYesNo 
        } catch (err) {
            console.log(logPrefix + sMethod + "::Initiate ERROR::" + err);            
        }        
      };            
      //---------------------------------------------------------------------------------------
      this.getPrinterMacAddress = function () {          
         return  printerMacAddress;
      };
      //---------------------------------------------------------------------------------------
      this.setPrinterMacAddress = function (macAddress, successCallback, failureCallback) {
          var sMethod = 'setPrinterMacAddress() ';
          console.log(logPrefix + sMethod);
          
          try {
                printerMacAddress = macAddress;
                cordova.exec(successCallback, failureCallback, "ZebraPrinterPlugin", "storePrintMacAddress", [printerMacAddress]);
          } catch (err) {
              console.log(logPrefix + sMethod + "::Initiate ERROR::" + err);            
          }  
       };
       //---------------------------------------------------------------------------------------
       this.verifyPrinterMacAddress = function () {
           var sMethod = 'verifyPrinterMacAddress() ';
           console.log(logPrefix + sMethod);                
          
           return printerMacAddress && printerMacAddress.length == 17 && printerMacAddress.indexOf("_") === -1 && printerMacAddress.indexOf("__") === -1 ? true : false;
       };
       //---------------------------------------------------------------------------------------
       function prepareCreditProtectorYesNo(insuranceCode, language) {
    	   console.log('prepareCreditProtectorYesNo');
    	   if ((insuranceCode == "W4") 
    		   || (insuranceCode == "CP")) {
    		   console.log('prepareCreditProtectorYesNoy');
    		   if(language == "E"){
    			   return "Yes";
    		   } else {
    			   return "Oui";
    		   }
    		   
    	   } else {
    		   console.log('prepareCreditProtectorYesNon');
    		   if(language == "E"){
    			   return "No";
    		   } else {
    			   return "Non";
    		   }
    	   };
       };
       function prepareIdentityWatchYesNo(insuranceCode, language) {
    	   console.log('prepareIdentityWatchYesNo');
    	   if ((insuranceCode == "W4") 
    		   || (insuranceCode == "IL")) {
    		   console.log('prepareIdentityWatchYesNoy');
    		   if(language == "E"){
    			   return "Yes";
    		   } else {
    			   return "Oui";
    		   }
    	   } else {
    		   console.log('prepareIdentityWatchYesNon');
    		   if(language == "E"){
    			   return "No";
    		   } else {
    			   return "Non";
    		   }
    	   };
       };
};