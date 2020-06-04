ensureNamespaceExists();

WICI.ZebraPrinterController = function () {
    var logPrefix = ' ---- [WICI.ZebraPrinterController]::';
    //var printerMacAddress = null;
    var printerMacAddress = WICI.AppConfig.defaultPrinterMacAddress;
    
    this.printToken = function (argToken, successCallback, failureCallback){
        var sMethod = 'printToken() ';
        console.log(logPrefix + sMethod + "token=" + argToken);   
        
        try {
        	console.log('cordova Object:');
    		console.log(JSON.stringify(cordova));

            cordova.exec(successCallback,
                    failureCallback,
                    "TokenPrinterPlugin",
                    "printToken",
                    [argToken]);
        } catch (err) {
            failureCallback(err);
            console.log(logPrefix + sMethod + "::Initiate ERROR::" + err);
        }        
    };
    
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
                    []);
        } catch (err) {
            failureCallback(err);
            console.log(logPrefix + sMethod + "::Initiate ERROR::" + err);
        }
    };
    //---------------------------------------------------------------------------------------
    this.printFile = function (activationItems, applicationResponse, successCallback, failureCallback) {
        var sMethod = 'printFile() ';
        console.log(logPrefix + sMethod);
        console.log('---------- printFile ----------');
        console.log(activationItems.getModel('personalData').get('correspondence'));
        console.log(activationItems.getModel('OptionalProductsModel').get('insuranceCode'));
        console.log('--------------------');
        var respCardType, retailNetwork = '';
        if(app.getDemoMode()) {
        	respCardType = activationItems.getModel('chooseProductModel').get('productCard');
        	retailNetwork = activationItems.getModel('loginScreen').get('retailNetWork');
        } else {
        // DE1735
        	if(applicationResponse.appStatus === 'APPROVED'){
        		respCardType = applicationResponse.respCardType;
        	}else{
        		respCardType = activationItems.getModel('chooseProductModel').get('productCard');
        	}
        }        
        console.log(logPrefix + sMethod + " respCardType :: " + respCardType);
        
        try {
            // Send response to mobile side
        	if(activationItems.getModel('personalData2_Address').get('province') != 'QC') {
        		cordova.exec(successCallback,
                        failureCallback,
                        "ZebraPrinterPlugin",
                        "printOutMockup",
                        [respCardType ? respCardType : "",
                         activationItems.getModel('personalData').get('firstName') ? activationItems.getModel('personalData').get('firstName') : "",
                         activationItems.getModel('personalData').get('initial') ? activationItems.getModel('personalData').get('initial') : "",
                         activationItems.getModel('personalData').get('lastName') ? activationItems.getModel('personalData').get('lastName') : "",
                         applicationResponse.accountNumber ? applicationResponse.accountNumber : "",
                         applicationResponse.maskedPAN ? applicationResponse.maskedPAN : "",
                         applicationResponse.expiryDate ? applicationResponse.expiryDate : "",
                         applicationResponse.creditLimit ? applicationResponse.creditLimit : "",
                         applicationResponse.apr ? applicationResponse.apr : "",
                         applicationResponse.cashAPR ? applicationResponse.cashAPR : "",
                         activationItems.getModel('signatureModel').get('userSingnature'),
                         applicationResponse.appStatus,
                         activationItems.getModel('chooseProductModel').get('province') ? activationItems.getModel('chooseProductModel').get('province') : "",
                         activationItems.getModel('personalData').get('correspondence') ? activationItems.getModel('personalData').get('correspondence') : "",
                         prepareCreditProtectorYesNo(activationItems.getModel('OptionalProductsModel').get('insuranceCode'), activationItems.getModel('personalData').get('correspondence')),//creditProtectoryYesNo
                         prepareIdentityWatchYesNo(activationItems.getModel('OptionalProductsModel').get('insuranceCode'), activationItems.getModel('personalData').get('correspondence')),//identityWatchYesNo
                         activationItems.getModel('loginScreen').get('locationFieldID'),
                         "",
                         activationItems.getModel('loginScreen').get('employerID'),
                         "",
                         "",
                         "",
                         "",
                         "",
                         "",
                         retailNetwork ? retailNetwork : ""]);
        	} else {
        		cordova.exec(successCallback,
                        failureCallback,
                        "ZebraPrinterPlugin",
                        "printOutMockup",
                        [respCardType ? respCardType : "",
                         activationItems.getModel('personalData').get('firstName') ? activationItems.getModel('personalData').get('firstName') : "",
                         activationItems.getModel('personalData').get('initial') ? activationItems.getModel('personalData').get('initial') : "",
                         activationItems.getModel('personalData').get('lastName') ? activationItems.getModel('personalData').get('lastName') : "",
                         applicationResponse.accountNumber ? applicationResponse.accountNumber : "",
                         applicationResponse.maskedPAN ? applicationResponse.maskedPAN : "",
                         applicationResponse.expiryDate ? applicationResponse.expiryDate : "",
                         applicationResponse.creditLimit ? applicationResponse.creditLimit : "",
                         applicationResponse.apr ? applicationResponse.apr : "",
                         applicationResponse.cashAPR ? applicationResponse.cashAPR : "",
                         activationItems.getModel('signatureModel').get('userSingnature'),
                         applicationResponse.appStatus,
                         activationItems.getModel('chooseProductModel').get('province') ? activationItems.getModel('chooseProductModel').get('province') : "",
                         activationItems.getModel('personalData').get('correspondence') ? activationItems.getModel('personalData').get('correspondence') : "",
                         prepareCreditProtectorYesNo(activationItems.getModel('OptionalProductsModel').get('insuranceCode'), activationItems.getModel('personalData').get('correspondence')),//creditProtectoryYesNo
                         prepareIdentityWatchYesNo(activationItems.getModel('OptionalProductsModel').get('insuranceCode'), activationItems.getModel('personalData').get('correspondence')),//identityWatchYesNo
                         activationItems.getModel('loginScreen').get('locationFieldID'),
                         "",
                         activationItems.getModel('loginScreen').get('employerID'),
                         activationItems.getModel('personalData2_Address').get('suiteunit') ? activationItems.getModel('personalData2_Address').get('suiteunit') : "",
                         activationItems.getModel('personalData2_Address').get('streetnumber') ? activationItems.getModel('personalData2_Address').get('streetnumber') : "",
                         activationItems.getModel('personalData2_Address').get('addressline1') ? activationItems.getModel('personalData2_Address').get('addressline1') : "",
                         activationItems.getModel('personalData2_Address').get('city') ? activationItems.getModel('personalData2_Address').get('city') : "",
                         activationItems.getModel('personalData2_Address').get('province') ? activationItems.getModel('personalData2_Address').get('province') : "",
                         activationItems.getModel('personalData2_Address').get('postalcode') ? activationItems.getModel('personalData2_Address').get('postalcode') : "",
                         retailNetwork ? retailNetwork : ""]);
        	}
            
        } catch (err) {
            console.log(logPrefix + sMethod + "::Initiate ERROR::" + err);
        }
      };
      // US5240
      //---------------------------------------------------------------------------------------
      this.printFileBottom = function (activationItems, applicationResponse, successCallback, failureCallback) {
          var sMethod = 'printFileBottom() ';
          console.log(logPrefix + sMethod);
          console.log('---------- printFileBottom ----------');
          console.log(activationItems.getModel('personalData').get('correspondence'));
          console.log(activationItems.getModel('OptionalProductsModel').get('insuranceCode'));
          console.log('--------------------');
          var respCardType, retailNetwork = '';
          if(app.getDemoMode()) {
          	respCardType = activationItems.getModel('chooseProductModel').get('productCard');
          	retailNetwork = activationItems.getModel('loginScreen').get('retailNetWork');
          } else {
          // DE1735
          	if(applicationResponse.appStatus === 'APPROVED'){
          		respCardType = applicationResponse.respCardType;
          	}else{
          		respCardType = activationItems.getModel('chooseProductModel').get('productCard');
          	}
          }        
          console.log(logPrefix + sMethod + " respCardType :: " + respCardType);
          
          try {
              // Send response to mobile side
              cordova.exec(successCallback,
                  failureCallback,
                  "ZebraPrinterPlugin",
                  "printOutMockupBottom",
                  [respCardType ? respCardType : "",
                   activationItems.getModel('personalData').get('firstName') ? activationItems.getModel('personalData').get('firstName') : "",
                   activationItems.getModel('personalData').get('initial') ? activationItems.getModel('personalData').get('initial') : "",
                   activationItems.getModel('personalData').get('lastName') ? activationItems.getModel('personalData').get('lastName') : "",
                   applicationResponse.accountNumber ? applicationResponse.accountNumber : "",
                   applicationResponse.maskedPAN ? applicationResponse.maskedPAN : "",
                   applicationResponse.expiryDate ? applicationResponse.expiryDate : "",
                   applicationResponse.creditLimit ? applicationResponse.creditLimit : "",
                   applicationResponse.apr ? applicationResponse.apr : "",
                   applicationResponse.cashAPR ? applicationResponse.cashAPR : "",
                   activationItems.getModel('signatureModel').get('userSingnature'),
                   applicationResponse.appStatus,
                   activationItems.getModel('chooseProductModel').get('province') ? activationItems.getModel('chooseProductModel').get('province') : "",
                   activationItems.getModel('personalData').get('correspondence') ? activationItems.getModel('personalData').get('correspondence') : "",
                   prepareCreditProtectorYesNo(activationItems.getModel('OptionalProductsModel').get('insuranceCode'), activationItems.getModel('personalData').get('correspondence')),//creditProtectoryYesNo
                   prepareIdentityWatchYesNo(activationItems.getModel('OptionalProductsModel').get('insuranceCode'), activationItems.getModel('personalData').get('correspondence')),//identityWatchYesNo
                   activationItems.getModel('loginScreen').get('locationFieldID'),
                   "",
                   activationItems.getModel('loginScreen').get('employerID'),
                   activationItems.getModel('personalData2_Address').get('suiteunit') ? activationItems.getModel('personalData2_Address').get('suiteunit') : "",
            	   activationItems.getModel('personalData2_Address').get('streetnumber') ? activationItems.getModel('personalData2_Address').get('streetnumber') : "",
               	   activationItems.getModel('personalData2_Address').get('addressline1') ? activationItems.getModel('personalData2_Address').get('addressline1') : "",
                   activationItems.getModel('personalData2_Address').get('city') ? activationItems.getModel('personalData2_Address').get('city') : "",
                   activationItems.getModel('personalData2_Address').get('province') ? activationItems.getModel('personalData2_Address').get('province') : "",
                   activationItems.getModel('personalData2_Address').get('postalcode') ? activationItems.getModel('personalData2_Address').get('postalcode') : "",
                   retailNetwork ? retailNetwork : ""]);
          } catch (err) {
              console.log(logPrefix + sMethod + "::Initiate ERROR::" + err);
          }
        };
      // US3462
      //---------------------------------------------------------------------------------------
      this.printCoupon = function (activationItems, successCallback, failureCallback) {
          var sMethod = 'printCoupon() ';
          console.log(logPrefix + sMethod);
          console.log('---------- printCoupon ----------');         
          console.log(activationItems.getModel('chooseProductModel').get('productCard'));
          console.log(activationItems.getModel('personalData').get('firstName'));
          console.log(activationItems.getModel('personalData').get('initial'));
          console.log(activationItems.getModel('personalData').get('lastName'));
          console.log(activationItems.getModel('chooseProductModel').get('province')); 
          console.log(activationItems.getModel('loginScreen').get('locationFieldID'));
          console.log('--------------------');
          try {
              // Send response to mobile side
              cordova.exec(successCallback,
                  failureCallback,
                  "ZebraPrinterPlugin",
                  "printOutCoupon", 
                  [activationItems.getModel('chooseProductModel').get('productCard'),
                   activationItems.getModel('personalData').get('firstName') ? activationItems.getModel('personalData').get('firstName') : "",
                   activationItems.getModel('personalData').get('initial') ? activationItems.getModel('personalData').get('initial') : "",
                   activationItems.getModel('personalData').get('lastName') ? activationItems.getModel('personalData').get('lastName') : "",
                   "",
                   "",
                   "",
                   "",
                   "",
                   "",
                   "",
                   "DECLINED",
                   activationItems.getModel('chooseProductModel').get('province') ? activationItems.getModel('chooseProductModel').get('province') : "",
                   activationItems.getModel('personalData').get('correspondence') ? activationItems.getModel('personalData').get('correspondence') : "",
                   prepareCreditProtectorYesNo(activationItems.getModel('OptionalProductsModel').get('insuranceCode'), activationItems.getModel('personalData').get('correspondence')),//creditProtectoryYesNo
                   prepareIdentityWatchYesNo(activationItems.getModel('OptionalProductsModel').get('insuranceCode'), activationItems.getModel('personalData').get('correspondence')),//identityWatchYesNo
                   activationItems.getModel('loginScreen').get('locationFieldID'),
                   "",
                   activationItems.getModel('loginScreen').get('employerID')]);             
          } catch (err) {
              console.log(logPrefix + sMethod + "::Initiate ERROR::" + err);
          }
        };
        
        //---------------------------------------------------------------------------------------
        this.getDecryptedAccountNumber = function (activationItems, successCallback, failureCallback) {
            var sMethod = 'getDecryptedAccountNumber() ';
            console.log(logPrefix + sMethod);
            console.log('---------- getDecryptedAccountNumber ----------');         
            console.log(activationItems.getModel('printScreen').get('PAN'));
            console.log('--------------------');
            try {
                // Send response to mobile side
                cordova.exec(successCallback,
                    failureCallback,
                    "InstantIssuancePlugin",
                    "InstantIssuance", 
                    [
                     activationItems.getModel('printScreen').get('PAN')
                     ]);             
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
