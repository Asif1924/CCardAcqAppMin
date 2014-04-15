describe("CreditCardApplicationDataValidatorTest ", function() {
	var appDataValidator = null;
	var outgoingData = null;
	
	beforeEach(function() {
		
		outgoingData = new BRB.CreditCardApplicationData();
		
		//This was "borrowed" verbatim from the SignatureScreenController class. It may be stripped down but its not necessary. 
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
		                {name: 'addressline1',          	value: '2110 ROCKPORT ST', validation: null },
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
						
		appDataValidator = new BRB.CreditCardApplicationDataValidator(outgoingData);		
	});		  
	
	it(" can be instantiated", function() {
		expect(appDataValidator).not.toEqual(null);
	});
	
	it(" ensures that the credit card data passed in CANNOT be null", function(){
		expect(appDataValidator.outgoingCreditCardDataIsNotNULL()).toEqual(true);
	});
	
	it(" ensures that all rules for outgoing request are met", function() {
		expect(appDataValidator.isDataModelsValid()).toEqual(true);
	});	
});