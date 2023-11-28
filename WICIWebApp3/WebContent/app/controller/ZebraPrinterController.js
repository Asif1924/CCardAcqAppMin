ensureNamespaceExists();

WICI.ZebraPrinterController = function () {
    var logPrefix = ' ---- [WICI.ZebraPrinterController]::';
    //var printerMacAddress = null;
    var printerMacAddress = WICI.AppConfig.defaultPrinterMacAddress;
    
    this.printToken = function (argToken, successCallback, failureCallback){
        var sMethod = 'printToken() ';         
        
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
    this.printFile = function (translator, activationItems, applicationResponse, successCallback, failureCallback) {
        var sMethod = 'printFile() ';
        console.log(logPrefix + sMethod);
        console.log('---------- printFile ----------');
        console.log(activationItems.getModel('personalData').get('correspondence'));
        console.log(activationItems.getModel('OptionalProductsModel').get('insuranceCode'));
        console.log('--------------------');
        var respCardType, retailNetwork = '', performStoreRecallPrint = 'N',
			isEmailEntered = activationItems.getModel('contactInfoScreen').get('email') == '' ? false : true, 
			storeNumber = activationItems.getModel('loginScreen').get('locationFieldIDADM'),
			//storeRecallPrintStores = JSON.parse(WICI.dictionary_en.storeRecallPrintStores);
        	storeRecallPrintStores = JSON.parse(translator.translateKey("storeRecallPrintStores"));
			
		console.log(logPrefix + sMethod + " storeNumber :: " + storeNumber + " storeRecallPrintStores :: " + storeRecallPrintStores.stores.length);
		if ($.inArray(storeNumber, storeRecallPrintStores.stores) != -1 || app.getNewStylePrintFlag() == 'Y') {
			performStoreRecallPrint = 'Y';
		}
		
		console.log(logPrefix + sMethod + " performStoreRecallPrint :: " + performStoreRecallPrint);
		console.log(logPrefix + sMethod + " isEmailEntered :: " + isEmailEntered);
		
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
                         activationItems.getModel('signatureModel').get('userSignature'),
                         applicationResponse.appStatus,
                         activationItems.getModel('chooseProductModel').get('province') ? activationItems.getModel('chooseProductModel').get('province') : "",
                         activationItems.getModel('personalData').get('correspondence') ? activationItems.getModel('personalData').get('correspondence') : "",
                         prepareCreditProtectorYesNo(activationItems.getModel('financialData').get('insurance_CPType_Offered'), activationItems.getModel('financialData').get('insurance_CPType_Selected'), activationItems.getModel('personalData').get('correspondence')),//creditProtectoryYesNo
                         prepareCreditProtectCPCorCPLD(activationItems.getModel('financialData').get('insurance_CPType_Offered'), activationItems.getModel('personalData').get('correspondence')), // VZE-400
                         prepareCPProductNamesTrademarksMD(activationItems.getModel('financialData').get('insurance_CPType_Offered'), activationItems.getModel('personalData').get('correspondence')), // VZE-673
                         prepareCPProductNamesTrademarksCPCMC(activationItems.getModel('financialData').get('insurance_CPType_Offered'), activationItems.getModel('personalData').get('correspondence')), // VZE-673
                         prepareCPProductNamesTrademarksCPLMC(activationItems.getModel('financialData').get('insurance_CPType_Offered'), activationItems.getModel('personalData').get('correspondence')), // VZE-673
                         activationItems.getModel('loginScreen').get('locationFieldID'),
                         "",
                         activationItems.getModel('loginScreen').get('employerID'),
                         "",
                         "",
                         "",
                         "",
                         "",
                         "",
                         retailNetwork ? retailNetwork : "",
						 performStoreRecallPrint ? performStoreRecallPrint : "",
						 isEmailEntered]);
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
                         activationItems.getModel('signatureModel').get('userSignature'),
                         applicationResponse.appStatus,
                         activationItems.getModel('chooseProductModel').get('province') ? activationItems.getModel('chooseProductModel').get('province') : "",
                         activationItems.getModel('personalData').get('correspondence') ? activationItems.getModel('personalData').get('correspondence') : "",
                         prepareCreditProtectorYesNo(activationItems.getModel('financialData').get('insurance_CPType_Offered'), activationItems.getModel('financialData').get('insurance_CPType_Selected'), activationItems.getModel('personalData').get('correspondence')),//creditProtectoryYesNo
                         prepareCreditProtectCPCorCPLD(activationItems.getModel('financialData').get('insurance_CPType_Offered'), activationItems.getModel('personalData').get('correspondence')), // VZE-400
                         prepareCPProductNamesTrademarksMD(activationItems.getModel('financialData').get('insurance_CPType_Offered'), activationItems.getModel('personalData').get('correspondence')), // VZE-673
                         prepareCPProductNamesTrademarksCPCMC(activationItems.getModel('financialData').get('insurance_CPType_Offered'), activationItems.getModel('personalData').get('correspondence')), // VZE-673
                         prepareCPProductNamesTrademarksCPLMC(activationItems.getModel('financialData').get('insurance_CPType_Offered'), activationItems.getModel('personalData').get('correspondence')), // VZE-673
                         activationItems.getModel('loginScreen').get('locationFieldID'),
                         "",
                         activationItems.getModel('loginScreen').get('employerID'),
                         activationItems.getModel('personalData2_Address').get('suiteunit') ? activationItems.getModel('personalData2_Address').get('suiteunit') : "",
                         activationItems.getModel('personalData2_Address').get('streetnumber') ? activationItems.getModel('personalData2_Address').get('streetnumber') : "",
                         activationItems.getModel('personalData2_Address').get('addressline1') ? activationItems.getModel('personalData2_Address').get('addressline1') : "",
                         activationItems.getModel('personalData2_Address').get('city') ? activationItems.getModel('personalData2_Address').get('city') : "",
                         activationItems.getModel('personalData2_Address').get('province') ? activationItems.getModel('personalData2_Address').get('province') : "",
                         activationItems.getModel('personalData2_Address').get('postalcode') ? activationItems.getModel('personalData2_Address').get('postalcode') : "",
                         retailNetwork ? retailNetwork : "",
						 performStoreRecallPrint ? performStoreRecallPrint : "",
						 isEmailEntered]);
        	}
            
        } catch (err) {
            console.log(logPrefix + sMethod + "::Initiate ERROR::" + err);
        }
      };
      // US5240
      //---------------------------------------------------------------------------------------
      this.printFileBottom = function (translator, activationItems, applicationResponse, successCallback, failureCallback) {
          var sMethod = 'printFileBottom() ';
          console.log(logPrefix + sMethod);
          console.log('---------- printFileBottom ----------');
          console.log(activationItems.getModel('personalData').get('correspondence'));
          console.log(activationItems.getModel('OptionalProductsModel').get('insuranceCode'));
          console.log('--------------------');
          var respCardType, retailNetwork = '', performStoreRecallPrint = 'N',
			isEmailEntered = activationItems.getModel('contactInfoScreen').get('email') == '' ? false : true, 
			storeNumber = activationItems.getModel('loginScreen').get('locationFieldIDADM'),
			//storeRecallPrintStores = JSON.parse(WICI.dictionary_en.storeRecallPrintStores);
          	storeRecallPrintStores = JSON.parse(translator.translateKey("storeRecallPrintStores"));
			
		  console.log(logPrefix + sMethod + " storeNumber :: " + storeNumber + " storeRecallPrintStores :: " + storeRecallPrintStores.stores.length);
		  if ($.inArray(storeNumber, storeRecallPrintStores.stores) != -1 || app.getNewStylePrintFlag() == 'Y') {
			performStoreRecallPrint = 'Y';
		  }
		  console.log(logPrefix + sMethod + " performStoreRecallPrint :: " + performStoreRecallPrint);
		  
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
                   activationItems.getModel('signatureModel').get('userSignature'),
                   applicationResponse.appStatus,
                   activationItems.getModel('chooseProductModel').get('province') ? activationItems.getModel('chooseProductModel').get('province') : "",
                   activationItems.getModel('personalData').get('correspondence') ? activationItems.getModel('personalData').get('correspondence') : "",
                   prepareCreditProtectorYesNo(activationItems.getModel('financialData').get('insurance_CPType_Offered'), activationItems.getModel('financialData').get('insurance_CPType_Selected'), activationItems.getModel('personalData').get('correspondence')),//creditProtectoryYesNo
                   prepareCreditProtectCPCorCPLD(activationItems.getModel('financialData').get('insurance_CPType_Offered'), activationItems.getModel('personalData').get('correspondence')), // VZE-400
                   prepareCPProductNamesTrademarksMD(activationItems.getModel('financialData').get('insurance_CPType_Offered'), activationItems.getModel('personalData').get('correspondence')), // VZE-673
                   prepareCPProductNamesTrademarksCPCMC(activationItems.getModel('financialData').get('insurance_CPType_Offered'), activationItems.getModel('personalData').get('correspondence')), // VZE-673
                   prepareCPProductNamesTrademarksCPLMC(activationItems.getModel('financialData').get('insurance_CPType_Offered'), activationItems.getModel('personalData').get('correspondence')), // VZE-673
                   activationItems.getModel('loginScreen').get('locationFieldID'),
                   "",
                   activationItems.getModel('loginScreen').get('employerID'),
                   activationItems.getModel('personalData2_Address').get('suiteunit') ? activationItems.getModel('personalData2_Address').get('suiteunit') : "",
            	   activationItems.getModel('personalData2_Address').get('streetnumber') ? activationItems.getModel('personalData2_Address').get('streetnumber') : "",
               	   activationItems.getModel('personalData2_Address').get('addressline1') ? activationItems.getModel('personalData2_Address').get('addressline1') : "",
                   activationItems.getModel('personalData2_Address').get('city') ? activationItems.getModel('personalData2_Address').get('city') : "",
                   activationItems.getModel('personalData2_Address').get('province') ? activationItems.getModel('personalData2_Address').get('province') : "",
                   activationItems.getModel('personalData2_Address').get('postalcode') ? activationItems.getModel('personalData2_Address').get('postalcode') : "",
                   retailNetwork ? retailNetwork : "",
				   performStoreRecallPrint ? performStoreRecallPrint : "",
				   isEmailEntered]);
          } catch (err) {
              console.log(logPrefix + sMethod + "::Initiate ERROR::" + err);
          }
        };
      // US3462
      //---------------------------------------------------------------------------------------
      this.printCoupon = function (translator, activationItems, successCallback, failureCallback) {
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

		  var retailNetwork = '', performStoreRecallPrint = 'N', 
			isEmailEntered = activationItems.getModel('contactInfoScreen').get('email') == '' ? false : true,
			storeNumber = activationItems.getModel('loginScreen').get('locationFieldIDADM'),
          	storeRecallPrintStores = JSON.parse(translator.translateKey("storeRecallPrintStores"));
			
		  console.log(logPrefix + sMethod + " storeNumber :: " + storeNumber + " storeRecallPrintStores :: " + storeRecallPrintStores.stores.length);
		  if ($.inArray(storeNumber, storeRecallPrintStores.stores) != -1 || app.getNewStylePrintFlag() == 'Y') {
			performStoreRecallPrint = 'Y';
		  }
		  console.log(logPrefix + sMethod + " performStoreRecallPrint :: " + performStoreRecallPrint);

		  var todaysDate = new Date();
		  var todayPlus30Days = moment(todaysDate).add(30, 'd').format('M/D/YYYY');
		  console.log(logPrefix + sMethod + " todaysDate : " + moment(todaysDate).format('M/D/YYYY') + " todayPlus30Days : " + todayPlus30Days);

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
                   todayPlus30Days ? todayPlus30Days : "",
                   "",
                   "",
                   "",
                   "",
                   "DECLINED",
                   activationItems.getModel('chooseProductModel').get('province') ? activationItems.getModel('chooseProductModel').get('province') : "",
                   activationItems.getModel('personalData').get('correspondence') ? activationItems.getModel('personalData').get('correspondence') : "",
                   prepareCreditProtectorYesNo(activationItems.getModel('financialData').get('insurance_CPType_Offered'), activationItems.getModel('financialData').get('insurance_CPType_Selected'), activationItems.getModel('personalData').get('correspondence')),//creditProtectoryYesNo
                   prepareCreditProtectCPCorCPLD(activationItems.getModel('financialData').get('insurance_CPType_Offered'), activationItems.getModel('personalData').get('correspondence')), // VZE-400
                   prepareCPProductNamesTrademarksMD(activationItems.getModel('financialData').get('insurance_CPType_Offered'), activationItems.getModel('personalData').get('correspondence')), // VZE-673
                   prepareCPProductNamesTrademarksCPCMC(activationItems.getModel('financialData').get('insurance_CPType_Offered'), activationItems.getModel('personalData').get('correspondence')), // VZE-673
                   prepareCPProductNamesTrademarksCPLMC(activationItems.getModel('financialData').get('insurance_CPType_Offered'), activationItems.getModel('personalData').get('correspondence')), // VZE-673
                   activationItems.getModel('loginScreen').get('locationFieldID'),
                   "",
                   activationItems.getModel('loginScreen').get('employerID'),
				   "",
                   "",
                   "",
                   "",
                   "",
                   "",
				   activationItems.getModel('loginScreen').get('retailNetWork'),
				   performStoreRecallPrint ? performStoreRecallPrint : "",
				   isEmailEntered]);             
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
       this.getPrinterStatus = function (successCallback, failureCallback) {
           var sMethod = 'getPrinterStatus() ';
           console.log(logPrefix + sMethod);

           try {
                 cordova.exec(successCallback, failureCallback, "ZebraPrinterPlugin", "getPrinterStatus", []);
           } catch (err) {
               console.log(logPrefix + sMethod + "::Initiate ERROR::" + err);
           }
        };
       //---------------------------------------------------------------------------------------
       function prepareCreditProtectorYesNo(offered, selected, language) {
		  if(offered == "CP_Complete" || offered == "CP_LifeDisability") {
			if (selected == "CP_Complete" || selected == "CP_LifeDisability") {
    		   if(language == "E") {
    			   return "Yes";
    		   } else {
    			   return "Oui";
    		   }
    	    } else {
    		   if(language == "E") {
    			   return "No";
    		   } else {
    			   return "Non";
    		   }
    	    }
		  } else {
			   return "";
		  }
       }
       //---------------------------------------------------------------------------------------
	   // VZE-400
       function prepareCreditProtectCPCorCPLD(offered, language) {
    	   if (offered == "CP_Complete") {
    		   if(language == "E") {
    			   return "Triangle® Credit Protector Complete™";
    		   } else {
    			   return "Triangle   Couverture-crédit complète";
    		   }
    	   } else if(offered == "CP_LifeDisability") {
    		   if(language == "E") {
    			   return "Triangle® Credit Protector Life & Disability™";
    		   } else {
    			   return "Triangle   Couverture-crédit - Assurance-vie et invalidité";
    		   }
    	   } else {
				return "";
		   }
       }
      //---------------------------------------------------------------------------------------
	   // VZE-673
       function prepareCPProductNamesTrademarksMD(offered, language) {
    	   if (offered == "CP_Complete") {
    		   if(language !== "E") {
    			   return "MD";
    		   } 
    	   } else if(offered == "CP_LifeDisability") {
    		   if(language !== "E") {
    			   return "MD";
    		   } 
    	   } else {
				return "";
		   }
       }
     //---------------------------------------------------------------------------------------
	   // VZE-673
       function prepareCPProductNamesTrademarksCPCMC(offered, language) {
    	   if (offered == "CP_Complete") {
    		   if(language !== "E") {
    			   return "MC";
    		   } 
    	   }  else {
				return "";
		   }
       }
       
     //---------------------------------------------------------------------------------------
	   // VZE-673
       function prepareCPProductNamesTrademarksCPLMC(offered, language) {
    	   if(offered == "CP_LifeDisability") {
    		   if(language !== "E") {
    			   return "MC";
    		   } 
    	   } else {
				return "";
		   }
       }
       
};
