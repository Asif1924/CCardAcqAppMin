describe("CreditCardApplicationDataValidatorTest ", function() {
	var sut = null;
	var outgoingData = null;
	
	beforeEach(function() {
		
		outgoingData = new WICI.CreditCardApplicationData();
			    
		//This was "borrowed" verbatim from the SignatureScreenController class. It may be stripped down but its not necessary. 
		//Its sufficient enough to serve as a good basis for mocked up data. 
		var signatureModelRefs = {
		        signature						:  	'#signature',
	            resetSignature					: 	'#signature_Reset_Button',
	            applySignature					: 	'#signature_Apply_Button',
	            capturedSignature				:  	"#captured_Signature",
	            proceedButton					:  	"#signatureScreen_ProceedButton",
	            acceptAgreement					:  	"#signatureScreen_AcceptAgreement",
	            userAcceptAgreement				: 	'#signatureScreen_AgreementBoxContainer',
	            signDate						:   '#signatureScreen_SignDate',
	            userSingnature					: 	'#signatureScreen_SingnatureContainer',
	            singnatureCardName				: 	'#singnatureCardName'
	    };
		
		//This was "borrowed" verbatim from the OptionalProductsScreenController class. It may be stripped down but its not necessary. 
		//Its sufficient enough to serve as a good basis for mocked up data. 	    
	    var optionProductsModelrefs = {
	    		signature_PA				    : 	'#signature_PA',
	    		signature_CP					: 	'#signature_CP',
	    		signature_IW					: 	'#signature_IW',
	    		resetSignature1					: 	'#signature_Reset_Button1',   	
	    		resetSignature2					: 	'#signature_Reset_Button2',
	    		resetSignature3					: 	'#signature_Reset_Button3',
	            flipCreditProtector 		    : 	'#flipCreditProtector',
	            creditProtectorYesOption	    : 	'#creditProtectorYesOption',            
	            acceptAgreement			    	: 	'#optionalProducts_AcceptConditions',
	            userAcceptAgreement		    	: 	'#optionalProducts_AgreementBoxContainer',            
	            proceedButton			     	: 	'#optionalProducts_ProceedButton',            
	            signDatePA					    : 	'#optionalProducts_SignDatePA',
	            signDateCP					    : 	'#optionalProducts_SignDateCP',
	            signDateIW					    : 	'#optionalProducts_SignDateIW',
	            
	            userSingnature_PA				: 	'#optionalProductsScreen_PA_SingnatureContainer',
	            userSingnature_CP				: 	'#optionalProductsScreen_CP_SingnatureContainer',
	            userSingnature_IW				: 	'#optionalProductsScreen_IW_SingnatureContainer',
	            
	            optionalProducts_PA_Item		:   '#optionalProductsProtectionAdvantageItem',	
	            optionalProducts_PA             :   '#optionalProducts_PA_CheckField',
	            optionalProducts_PA_Area        :   '#optionalProducts_PA_Area', 
	            optionalProducts_PA_Table       :   '#optionalProducts_PA_Table',
	            optionalProducts_PA_Agreement   :   '#optionalProducts_PA_Agreement',
	            optionalProduct_PA_AcceptBox	:	'#optionalProduct_PA_AcceptBox_Area',
	            
	            optionalProducts_CP_Item		:   '#optionalProductsCreditProtectorItem',
	            optionalProducts_CP             :   '#optionalProducts_YesNoTextField',
	            optionalProducts_CP_Area        :   '#optionalProducts_CP_Area', 
	            optionalProducts_CP_Table       :   '#optionalProducts_CP_Table',
	            optionalProducts_CP_Agreement   :   '#optionalProducts_CP_Agreement',
	            optionalProduct_CP_AcceptBox	:	'#optionalProduct_CP_AcceptBox_Area',
	            
	            optionalProducts_IW_Item		:   '#optionalProductsIdentityWatchItem',
	            optionalProducts_IW_Area        :   '#optionalProducts_IW_Area',
	            optionalProducts_IW_Table       :   '#optionalProducts_IW_Table',
	            optionalProducts_IW             :   '#optionalProducts_IW_CheckField',
	            optionalProducts_IW_Lable       :   '#optionalProducts_IW_TextField',
	            optionalProducts_IW_Agreement   :   '#optionalProducts_IW_Agreement',
	            optionalProduct_IW_AcceptBox	:	'#optionalProduct_IW_AcceptBox_Area',

	            optionalProducts_NA_Item		:   '#optionalProductsNACheckFieldItem',
	            optionalProducts_NA             :   '#optionalProducts_NA_CheckField',
	            optionalProducts_Area			:	'#optionalProducts_Area',
	            
	            optionalProducts_CheckArea		:	'#optionalProductsTable'
	    };
		
	    //I've added this as "starters" for mocked-up data.
	    //If you add more tests to vet these models you will have to structure it in the same way as the signatureModel or optionalProductsModel below.
	    //Best thing to do is to "borrow" the structure from the apporpriate controller class that has this model and then just add the values in there.
		var queueModel = new WICI.BaseModel({model:"queueModel",data:[{"name":"queueTransactionID","value":"WICI_demo_1381950094501-0"}]});
		var loginScreenModel = new WICI.BaseModel({model:"loginScreen",data:[{"name":"employerID","value":"e"},{"name":"locationFieldID","value":"1"},{"name":"agentID","value":"demo"}]});
		var chooseProductModel = new WICI.BaseModel({model:"chooseProductModel",data:[{"name":"productCard","value":"OMC"},{"name":"agencyPromoCode","value":""},{"name":"province","value":"ON"}]}); 
		var personalDataModel = new WICI.BaseModel({model:"personalData",data:[{"name":"placeofissue","value":"AB"},{"name":"idtype","value":"DR"},{"name":"idnumbers","value":"AADSF123213"},{"name":"title","value":"MR"},{"name":"firstName","value":"ASDFA"},{"name":"initial","value":"S"},{"name":"lastName","value":"DFASDF"},{"name":"birthDate","value":"1955-05-05"},{"name":"email","value":""},{"name":"homePhone","value":"1232132132"},{"name":"cellPhone","value":""},{"name":"correspondence","value":"E"}]});
		var personalData2_AddressModel = new WICI.BaseModel({model:"personalData2_Address",data:[{"name":"postalcode","value":"L5M0M2"},{"name":"streetnumber","value":"12"},{"name":"addressline1","value":"100 DEMO STREET"},{"name":"addressline2","value":""},{"name":"suiteunit","value":""},{"name":"city","value":"OAKVILLE"},{"name":"province","value":"ON"},{"name":"house","value":"O"},{"name":"housingpayment","value":"1234"},{"name":"years","value":"3"},{"name":"months","value":""},{"name":"postalcode_prev","value":""},{"name":"streetnumber_prev","value":""},{"name":"addressline1_prev","value":""},{"name":"addressline2_prev","value":""},{"name":"city_prev","value":""},{"name":"suiteunit_prev","value":""},{"name":"province_prev","value":null}]});
		var financialDataModel = new WICI.BaseModel({model:"financialData",data:[{"name":"cardVISAMCAMEX","value":"N"},{"name":"cardBankLoan","value":"N"},{"name":"cardStoreCard","value":"N"},{"name":"cardChequingAcct","value":"N"},{"name":"cardGasCard","value":"N"},{"name":"cardSavingsAcct","value":"N"},{"name":"employmentType","value":"F"},{"name":"jobTitle","value":"ASDFA"},{"name":"jobCategory","value":"HO"},{"name":"employerName","value":"ASDFAS"},{"name":"employerCity","value":"ASDFASDF"},{"name":"employerPhone","value":"2132131231"},{"name":"howLongYears","value":"3"},{"name":"howLongMonthes","value":""},{"name":"grossIncome","value":"123121"},{"name":"sin","value":""}]}); 
		var supCardRequestDataModel = new WICI.BaseModel({model:"supCardRequestData",data:[{"name":"cardYesNo","value":"N"},{"name":"cardRequestFor","value":null},{"name":"firstName","value":""},{"name":"lastName","value":""},{"name":"initial","value":""},{"name":"birthDate","value":""},{"name":"phone","value":""},{"name":"sameAddressYesNo","value":"Y"},{"name":"postalCode","value":""},{"name":"streetNumber","value":""},{"name":"addressLine1","value":""},{"name":"addressLine2","value":""},{"name":"suiteUnit","value":""},{"name":"city","value":""},{"name":"province","value":null}]});
		
		//This was "borrowed" verbatim from the SignatureScreenController class.
		//Note that the values actually have values which is what we need for mocked up data.
		//Its sufficient enough to serve as a good basis for mocked up data. 		
		var signatureModel = new WICI.BaseModel({
	        name: 'signatureModel',
	        refs: signatureModelRefs, 
	        data:[  
	                {name: 'userAcceptAgreement',   value: "Y", validation: {type: 'termsAndConditions', message: 'signatureScreen_validation_acceptAgreement'}},
	                {name: 'userSingnature', value:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAi4AAACMCAYAAABbASITAAAgAElEQ…F6IASEgBAQAkJACOREQMQlJ1DKJgSEgBAQAkJACCwegf8Hjkw1I9iiY0QAAAAASUVORK5CYII=", validation: {type: 'presence', message: 'signatureScreen_validation_signature'}},
	                
	                {notField:true, name: 'userSingnatureNative', value: null, validation: null},
	                {notField:true, name: 'modelsData', value: null, validation: null},
	                
	                {name: 'signDate',  value:"2013-10-16", validation: {type: 'presence', message: 'signatureScreen_validation_signDate'}}
	             ]
	    });		
		
		//This was "borrowed" verbatim from the OptionalProductsScreenController class.
		//Note that the values actually have values which is what we need for mocked up data.
		//Its sufficient enough to serve as a good basis for mocked up data. 		
	    var optionalProductsModel = new WICI.BaseModel({
	    	name: 'OptionalProductsModel',
	        refs: optionProductsModelrefs, 
	        data:[
					{ notField: true, name: 'optionalProducts_PA',     value: null },
					{ notField: true, name: 'optionalProducts_CP',     value: null },
					{ notField: true, name: 'optionalProducts_IW',     value: null },
					{ notField: true, name: 'optionalProducts_NA',     value: null },
					
					{ notField: true, name: 'optionalProduct_PA_AcceptBox', value: null, validation: {type: 'termsAndConditions', message: '', group: [2]}},
					{ notField: true, name: 'optionalProduct_CP_AcceptBox', value: null, validation: {type: 'termsAndConditions', message: '', group: [3]}},
					{ notField: true, name: 'optionalProduct_IW_AcceptBox', value: null, validation: {type: 'termsAndConditions', message: '', group: [4]}},
					
					{ name: 'userSingnature_PA', value: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAi4AAACMCAYAAABbASITAAAYo0lEQ…AIhgDCJZihoqEQgAAEIAABCCBcsAEIQAACEIAABIIh8Hcc65fYCfC+jwAAAABJRU5ErkJggg==", validation: {type: 'presence', message: '', group: [2]}},
					{ name: 'userSingnature_CP', value: null, validation: {type: 'presence', message: '', group: [3]}},
					{ name: 'userSingnature_IW', value: null, validation: {type: 'presence', message: '', group: [4]}},
					
					{name: 'userSingnature', value: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAi4AAACMCAYAAABbASITAAAYo0lEQ…AIhgDCJZihoqEQgAAEIAABCCBcsAEIQAACEIAABIIh8Hcc65fYCfC+jwAAAABJRU5ErkJggg==", validation: {type: 'presence', message: 'signatureScreen_validation_signature'}},
					
					{ notField: true, name: 'userSingnatureNative_PA', value: null, validation: null},
					{ notField: true, name: 'userSingnatureNative_CP', value: null, validation: null},
					{ notField: true, name: 'userSingnatureNative_IW', value: null, validation: null},
					
					{ notField: true, name: 'optionalProducts_PA_Agreement', value: null },
					{ notField: true, name: 'optionalProducts_CP_Agreement', value: null },
					{ notField: true, name: 'optionalProducts_IW_Agreement', value: null },
					
					{name: 'signDate',  value: "2013-10-16", validation: {type: 'presence', message: 'signatureScreen_validation_signDate'}},				
					{name: 'insuranceCode', value: "W4", validation: null},
					
					{name: 'insuranceAgreedFlag', value: "Y", validation: null},
					
					{ notField: true, name: 'optionalProducts_CheckArea',    value: null, validation: {type: 'termsAndConditions',     message: 'additionalInformation_NoRadioSelecedError', group:[1]}}
	              ]
	    });		
		
		var summaryDataModel = new WICI.BaseModel({model:"summaryData",data:[]}); 
			    
		outgoingData.addModel(queueModel);
		outgoingData.addModel(loginScreenModel);		
		outgoingData.addModel(chooseProductModel);		
		outgoingData.addModel(personalDataModel);		
		outgoingData.addModel(personalData2_AddressModel);		
		outgoingData.addModel(financialDataModel);		
		outgoingData.addModel(supCardRequestDataModel);		
		outgoingData.addModel(signatureModel);		
		outgoingData.addModel(optionalProductsModel);		
		outgoingData.addModel(summaryDataModel);
		
		sut = new WICI.CreditCardApplicationDataValidator(outgoingData);		
	});		  
	
	it(" can be instantiated", function() {
		expect(sut).not.toEqual(null);
	});
	
	it(" ensures that the credit card data passed in CANNOT be null", function(){
		expect(sut.outgoingCreditCardDataIsNotNULL()).toEqual(true);
	});
	
	it(" ensures that all rules for outgoing request are met", function() {
		expect(sut.fieldsAreValid()).toEqual(true);
	});
	
	it(" ensures that the outgoing request data contains signDate in the signatureModel object", function() {
		expect(sut.signDateExists()).toEqual(true);
	});	

	it(" ensures that the outgoing request data contains signature in the signatureModel object", function() {
		expect(sut.signatureExists()).toEqual(true);
	});	
	
	it(" ensures that the outgoing request data contains signDate in the optionalProductsModel object", function() {
		expect(sut.optionalProductsSignDateExists()).toEqual(true);
	});	
	
	it(" ensures that the outgoing request data contains signature in the optionalProductsModel object", function() {
		expect(sut.optionalProductsSignatureExists()).toEqual(true);
	});	
	
});