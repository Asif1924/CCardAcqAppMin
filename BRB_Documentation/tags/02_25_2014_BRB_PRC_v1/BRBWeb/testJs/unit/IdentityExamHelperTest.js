describe("BRB IdentityExamHelper Test", function() {
	var systemUnderTest = null;
	
	beforeEach(function() {
		
		outgoingData = new BRB.CreditCardApplicationData();
		
		//This was "borrowed" verbatim from the SignatureScreenController class. 
		//It may be stripped down but its not necessary. 
		//Its sufficient enough to serve as a good basis for mocked up data. 		
		 var overviewModel = new BRB.BaseModel({
		        name: 'overview',		      
		        data:[        
		              {name: 'provinces',  value: 'AB', validation: null}
		       ]
		    });  
		 var personalInformationModel = new BRB.BaseModel({
		        name: 'personalInformation',		        
		        data:[
		                {name: 'loyaltyMembershipNumber',   value: null, validation: null},		               
		                {name: 'firstName',     			value: 'BREDITU', validation: null },
		                {name: 'initial',       			value: 'I', validation: null },
		                {name: 'lastName',      			value: 'Narcissus', validation: null },
		                {name: 'birthDate',     			value: '1980-10-16', validation: null },
		                {name: 'email',         			value: 'kcufm@tisgh.gnm', validation: null },
		                {name: 'receiveEmail',				value: 'N', validation: null },
		                {name: 'correspondence',			value: 'E', validation: null },		              
		                {name: 'primaryPhone',     			value: '6547893214', validation: null },
		                {name: 'streetnumber',          	value: '12', validation: null },
		                {name: 'addressline1',          	value: '6, 2110 ROCKPORT ST', validation: null },
		                {name: 'suiteunit',             	value: '123', validation: null },
		                {name: 'city',                  	value: 'WINDSOR', validation: null },
		                {name: 'province',              	value: 'AB', validation: null },
		                {name: 'postalcode',            	value: 'N9G3A9', validation: null },	
		                {name: 'house',                 	value: '123', validation: null },
		                {name: 'housingpayment',        	value: '123', validation: null },
		                {name: 'sinceYears',                value: '1999', validation: null },
		                {name: 'sinceMonths',               value: '3', validation: null },
		                {name: 'isPrevAddressExist',        value: false, validation: null },		              
		                {name: 'employmentType',  			value: 'R', validation: null },
		                {name: 'employerName',     			value: 'BREDITU', validation: null },
		                {name: 'employerCity',         		value: 'WINDSOR', validation: null },
		                {name: 'jobTitle',  				value: 'Engineer', validation: null },
		                {name: 'grossIncome',     			value: '6762153', validation: null },
		                {name: 'cardVISAMCAMEX',  			value: 'Y', validation: null },
		              	{name: 'cardBankLoan',  			value: 'N', validation: null },
		              	{name: 'cardStoreCard',  			value: 'Y', validation: null },
		              	{name: 'cardChequingAcct',  		value: 'N', validation: null },
		              	{name: 'cardGasCard',  				value: 'N', validation: null },
		              	{name: 'cardSavingsAcct',  			value: 'Y', validation: null },
		              	{name: 'isAnyBankingProducts',      value: true, validation: null }
		           ]
		    });
		 
		 var additionalInformationModel = new BRB.BaseModel({
		        name: 'additionalInformation',
		        data:[
		              { name: 'suplementaryYesNo',     	 	  value: false, validation: null },
		              { name: 'sameAddressArea',   		   	  value: 'Y', validation: null },		              
		              { name: 'optionalInsurance_CP',         value: true, validation: null },
		              { name: 'optionalInsurance_IW',         value: false, validation: null },
		              { name: 'optionalInsurance_PA',         value: false, validation: null }	              
		       ]
		    });  
		 
		 var confirmationModel = new BRB.BaseModel({
		        name: 'confirmation',
		        data:[		                 
		                 { name: 'applicationAuthorizationYesNo', value: true, validation: null },
		                 { name: 'updateCTProfileYesNo', value: false, validation: null }
		       ]
		    }); 
		 
		 var identityVerificationModel = new BRB.BaseModel({
		        name: 'identityVerification',		       
		        data:[
		              { name: 'tuExamResult',    value: 'APPROVED', validation: null },
		              { name: 'transactionId',    value: '3616523', validation: null }		             
		       ]
		    });  
			    
		outgoingData.addModel(overviewModel);
		outgoingData.addModel(personalInformationModel);		
		outgoingData.addModel(additionalInformationModel);
		outgoingData.addModel(confirmationModel);
		outgoingData.addModel(identityVerificationModel);		
		
		systemUnderTest = new BRB.IdentityExamHelper();
	});	

	describe("- constructParamsForUserData Check for Value Tests", function() {
		it(" adds firstName as a parameter with value", function() {
			
			var params = systemUnderTest.constructParamsForUserData(outgoingData, "en");
			
			expect(params.firstName).toEqual("BREDITU");
		});
		it(" adds accountApplicationData as a parameter like this", function() {
			
			var params = systemUnderTest.constructParamsForUserData(outgoingData, "en");
			
			expect(params.accountApplicationData).not.toEqual({});
		});		
		it(" adds dateOfBirth as a parameter and its value is proper", function() {
			
			var params = systemUnderTest.constructParamsForUserData(outgoingData, "en");
			
			var list = params.accountApplicationData;
			expect(list[1].model).toEqual("personalInformation");
			
			var modelKVPairsData = list[1].data;
			
			expect(modelKVPairsData[3].value).toEqual("1980-10-16");
		});	
		
	});
	
	describe("- constructParamsForUserData Check for Null Tests", function() {
		
		it(" adds accountApplicationData as a parameter", function() {
			
			var params = systemUnderTest.constructParamsForUserData(outgoingData, "en");
			
			expect(params.accountApplicationData).not.toEqual(null);
		});
			
		
		it(" ensures that when accountApplicationData is added, its groupedData is added not the object itself", function() {
			
			var params = systemUnderTest.constructParamsForUserData(outgoingData, "en");
			
			expect(params.accountApplicationData.getGroupedData).toEqual(undefined);
		});			
		
		it(" adds language as a parameter", function() {
			
			var params = systemUnderTest.constructParamsForUserData(outgoingData, "en");
			
			expect(params.language).not.toEqual(null);
		});	
		it(" adds firstName as a parameter", function() {
			
			var params = systemUnderTest.constructParamsForUserData(outgoingData, "en");
			
			expect(params.firstName).not.toEqual(null);
		});	
		it(" adds middleName as a parameter", function() {
			
			var params = systemUnderTest.constructParamsForUserData(outgoingData, "en");
			
			expect(params.middleName).not.toEqual(null);
		});	
		it(" adds lastName as a parameter", function() {
			
			var params = systemUnderTest.constructParamsForUserData(outgoingData, "en");
			
			expect(params.lastName).not.toEqual(null);
		});	
		it(" adds phoneNumber as a parameter", function() {
			
			var params = systemUnderTest.constructParamsForUserData(outgoingData, "en");
			
			expect(params.phoneNumber).not.toEqual(null);
		});	
		it(" adds dateOfBirth as a parameter", function() {
			
			var params = systemUnderTest.constructParamsForUserData(outgoingData, "en");
			
			expect(params.dateOfBirth).not.toEqual(null);
		});	
		it(" adds addressLine1 as a parameter", function() {
			
			var params = systemUnderTest.constructParamsForUserData(outgoingData, "en");
			
			expect(params.addressLine1).not.toEqual(null);
		});	
		it(" adds addressLine2 as a parameter", function() {
			
			var params = systemUnderTest.constructParamsForUserData(outgoingData, "en");
			
			expect(params.addressLine2).not.toEqual(null);
		});	
		it(" adds addressLine3 as a parameter", function() {
			
			var params = systemUnderTest.constructParamsForUserData(outgoingData, "en");
			
			expect(params.addressLine3).toEqual(undefined);
		});	
		it(" adds city as a parameter", function() {
			
			var params = systemUnderTest.constructParamsForUserData(outgoingData, "en");
			
			expect(params.city).not.toEqual(null);
		});	
		it(" adds province as a parameter", function() {
			
			var params = systemUnderTest.constructParamsForUserData(outgoingData, "en");
			
			expect(params.province).not.toEqual(null);
		});	
		it(" adds postalCode as a parameter", function() {
			
			var params = systemUnderTest.constructParamsForUserData(outgoingData, "en");
			
			expect(params.postalCode).not.toEqual(null);
		});	
		it(" adds transactionId as a parameter", function() {
			
			var params = systemUnderTest.constructParamsForUserData(outgoingData, "en");
			
			expect(params.transactionId).not.toEqual(null);
		});	
	});	
	
});
