describe("CreditCardApplicationDataTest ", function() {
	var sut;

    var newLoginScreenModel =new WICI.BaseModel({
        name: 'loginScreen',

        data:[
            {name: 'employerID',							value: null, validation: {type: 'presence',     message: '',      group: [1]} },
            //{name: 'userID',							  	value: null, validation: {type: 'presence',     message: '',      group: [1]} },
            //{notField:true, name: 'passwordFieldID',      	value: null, validation: {type: 'presence',     message: '',      group: [1]} },
            {name: 'locationFieldID',       			  	value: null, validation: {type: 'presence',   	message: '',      group: [1]} },
            {name: 'agentID',           				  	value: null, validation: {type: 'presence',   	message: '',      group: [1]} },
            {notField:true, name: 'userLocationResponse', 	value: null, validation: null }
       ]
    }); 

    var oldLoginScreenModel =new WICI.BaseModel({
        name: 'loginScreen',

        data:[
            {name: 'userID',							  	value: null, validation: {type: 'presence',     message: '',      group: [1]} },
            {notField:true, name: 'passwordFieldID',      	value: null, validation: {type: 'presence',     message: '',      group: [1]} },
            {name: 'locationFieldID',       			  	value: null, validation: {type: 'presence',   	message: '',      group: [1]} },
            {name: 'agentID',           				  	value: null, validation: {type: 'presence',   	message: '',      group: [1]} },
            {notField:true, name: 'userLocationResponse', 	value: null, validation: null }
       ]
    }); 
    
    var chooseProductModel = new WICI.BaseModel({
        name: 'chooseProductModel',
        
        data:[              
                  {name: 'productCard',  value: null, validation: { type: 'presence', message: 'Choose one of the Credit Cards' }},
                  {name: 'agencyPromoCode',  value: null, validation: { type: 'format', message: 'Enter valid Promo Code', matcher: /^[a-zA-Z0-9\'\-]{1,5}$/, canBeEmpty: true }},                
                  {name: 'province',  value: null, validation: { type: 'presence', message: 'Province is not selected' }}
             ]
    });
    
    
    
    var personalDataModel = new WICI.BaseModel({
        name: 'personalData',
        
        data:[              
				{name: 'placeofissue',  value: null, validation: {type: 'presence',     message: 'personalData1_validation_placeofissue'} },
				{name: 'idtype',        value: null, validation: {type: 'presence',     message: 'personalData1_validation_idtype'}},
				{name: 'idnumbers',     value: null, validation: {type: 'format',       message: 'personalData1_validation_idnumbers', matcher: /^[A-Z0-9\,\_\'\-\.\~\@\[\]\}\{\)\(]{1,20}$/}},
				
				{name: 'title',         value: null, validation: null },
				{name: 'firstName',     value: null, validation: { type: 'personName',  message: 'personalData1_validation_firstName'} },
				{name: 'initial',       value: null, validation: { type: 'format',      message: 'personalData1_validation_initial', matcher: /^[A-Z]{1}/, canBeEmpty: true } },
				{name: 'lastName',      value: null, validation: { type: 'personName',  message: 'personalData1_validation_lastName' } },
				
				{name: 'birthDate',     value: null, validation: { type: 'birthDate',    message: 'personalData1_validation_birthDate' } },
				{name: 'email',         value: null, validation: { type: 'email',       message: 'personalData1_validation_email', canBeEmpty: true } },
				{name: 'homePhone',     value: null, validation: { type: 'phone',       message: 'personalData1_validation_homePhone' } },
				{name: 'cellPhone',     value: null, validation: { type: 'phone',       message: 'personalData1_validation_cellPhone' , canBeEmpty: true } },
				{name: 'correspondence',value: null, validation: { type: 'presence',    message: 'personalData1_validation_correspondence'} }
			]
    });  
	
	beforeEach(function() {
		sut = new WICI.CreditCardApplicationData();	
		sut.addModel(chooseProductModel);
		sut.addModel(personalDataModel);
	});
	
	it(" can be instantiated", function() {
		expect(sut).not.toEqual(null);
	});
	
	it(" can get the translation alias that represents the friendly name of Options MasterCard from omc", function() {
		chooseProductModel.set('productCard', 'omc');
		var cardCode = sut.getModel('chooseProductModel').get('productCard');
		expect(cardCode).toEqual('omc');
		
		expect(sut.getCardFriendlyName('omc')).toEqual('chooseProduct_OptionsMasterCard');
	});

	it(" can get the translation alias that represents the friendly name of Options MasterCard from omp", function() {
		chooseProductModel.set('productCard', 'omp');
		var cardCode = sut.getModel('chooseProductModel').get('productCard');
		expect(cardCode).toEqual('omp');
		
		expect(sut.getCardFriendlyName('omp')).toEqual('chooseProduct_GasAdvantageMasterCard');
	});
	
	it(" can get the translation alias that represents the friendly name of Options MasterCard from omr", function() {
		chooseProductModel.set('productCard', 'omr');
		var cardCode = sut.getModel('chooseProductModel').get('productCard');
		expect(cardCode).toEqual('omr');
		
		expect(sut.getCardFriendlyName('omr')).toEqual('chooseProduct_CashAdvantageMasterCard');
	});
	
	it(" can get a blank string if province is null", function() {
		expect(sut.getProvinceNameByValue(null)).toEqual("");
	});
	
	it(" will ensure that the validation model for birth date for Alberta will not validate if birthdate is less than 18 years", function(){
		personalDataModel.set('birthDate', '1996-05-23');
		var date = personalDataModel.get('birthDate');
		expect(date).toEqual('1996-05-23');
		var result = personalDataModel.validateAge(personalDataModel, 'AB');
		expect(result.err).toEqual('personalData_DOB_18YearsError');
	});
	
	it(" will ensure that the validation model for birth date for Alberta will validate if birthdate is more than 18 years", function(){
		personalDataModel.set('birthDate', '1995-05-23');
		var date = personalDataModel.get('birthDate');
		expect(date).toEqual('1995-05-23');
		var result = personalDataModel.validateAge(personalDataModel, 'AB');
		expect(result).toEqual(null);
	});
	
	
	it(" will ensure that the validation model for birth date for British Columbia will not validate if birthdate is less than 18 years", function(){
		personalDataModel.set('birthDate', '1996-05-23');
		var date = personalDataModel.get('birthDate');
		expect(date).toEqual('1996-05-23');
		var result = personalDataModel.validateAge(personalDataModel, 'BC');
		expect(result.err).toEqual('personalData_DOB_18YearsError');
	});
	
	it(" will ensure that the validation model for birth date for British Columbia will not validate if birthdate is less than 19 years", function(){
		personalDataModel.set('birthDate', '1995-05-23');
		var date = personalDataModel.get('birthDate');
		expect(date).toEqual('1995-05-23');
		var result = personalDataModel.validateAge(personalDataModel, 'BC');
		expect(result.err).toEqual('personalData_DOB_19YearsError');
	});
	
	it(" will ensure that the validation model for birth date for British Columbia will validate if birthdate is more than 19 years", function(){
		personalDataModel.set('birthDate', '1994-05-23');
		var date = personalDataModel.get('birthDate');
		expect(date).toEqual('1994-05-23');
		var result = personalDataModel.validateAge(personalDataModel, 'BC');
		expect(result).toEqual(null);
	});
	
	it(" will ensure that the validation model for birth date for Manitoba will not validate if birthdate is less than 18 years", function(){
		personalDataModel.set('birthDate', '1996-05-23');
		var date = personalDataModel.get('birthDate');
		expect(date).toEqual('1996-05-23');
		var result = personalDataModel.validateAge(personalDataModel, 'MB');
		expect(result.err).toEqual('personalData_DOB_18YearsError');
	});
	
	it(" will ensure that the validation model for birth date for Manitoba will validate if birthdate is more than 18 years", function(){
		personalDataModel.set('birthDate', '1995-05-23');
		var date = personalDataModel.get('birthDate');
		expect(date).toEqual('1995-05-23');
		var result = personalDataModel.validateAge(personalDataModel, 'MB');
		expect(result).toEqual(null);
	});
	
	it(" will ensure that the validation model for birth date for New Brunswick will not validate if birthdate is less than 18 years", function(){
		personalDataModel.set('birthDate', '1996-05-23');
		var date = personalDataModel.get('birthDate');
		expect(date).toEqual('1996-05-23');
		var result = personalDataModel.validateAge(personalDataModel, 'NB');
		expect(result.err).toEqual('personalData_DOB_18YearsError');
	});
	
	it(" will ensure that the validation model for birth date for New Brunswick will not validate if birthdate is less than 19 years", function(){
		personalDataModel.set('birthDate', '1995-05-23');
		var date = personalDataModel.get('birthDate');
		expect(date).toEqual('1995-05-23');
		var result = personalDataModel.validateAge(personalDataModel, 'NB');
		expect(result.err).toEqual('personalData_DOB_19YearsError');
	});
	
	it(" will ensure that the validation model for birth date for New Brunswick will validate if birthdate is more than 19 years", function(){
		personalDataModel.set('birthDate', '1994-05-23');
		var date = personalDataModel.get('birthDate');
		expect(date).toEqual('1994-05-23');
		var result = personalDataModel.validateAge(personalDataModel, 'NB');
		expect(result).toEqual(null);
	});
	
	it(" will ensure that the validation model for birth date for Newfoundland & Labrador will not validate if birthdate is less than 18 years", function(){
		personalDataModel.set('birthDate', '1996-05-23');
		var date = personalDataModel.get('birthDate');
		expect(date).toEqual('1996-05-23');
		var result = personalDataModel.validateAge(personalDataModel, 'NL');
		expect(result.err).toEqual('personalData_DOB_18YearsError');
	});
	
	it(" will ensure that the validation model for birth date for Newfoundland & Labrador will not validate if birthdate is less than 19 years", function(){
		personalDataModel.set('birthDate', '1995-05-23');
		var date = personalDataModel.get('birthDate');
		expect(date).toEqual('1995-05-23');
		var result = personalDataModel.validateAge(personalDataModel, 'NL');
		expect(result.err).toEqual('personalData_DOB_19YearsError');
	});
	
	it(" will ensure that the validation model for birth date for Newfoundland & Labrador will validate if birthdate is more than 19 years", function(){
		personalDataModel.set('birthDate', '1994-05-23');
		var date = personalDataModel.get('birthDate');
		expect(date).toEqual('1994-05-23');
		var result = personalDataModel.validateAge(personalDataModel, 'NL');
		expect(result).toEqual(null);
	});
	
	it(" will ensure that the validation model for birth date for Nova Scotia will not validate if birthdate is less than 18 years", function(){
		personalDataModel.set('birthDate', '1996-05-23');
		var date = personalDataModel.get('birthDate');
		expect(date).toEqual('1996-05-23');
		var result = personalDataModel.validateAge(personalDataModel, 'NS');
		expect(result.err).toEqual('personalData_DOB_18YearsError');
	});
	
	it(" will ensure that the validation model for birth date for Nova Scotia will not validate if birthdate is less than 19 years", function(){
		personalDataModel.set('birthDate', '1995-05-23');
		var date = personalDataModel.get('birthDate');
		expect(date).toEqual('1995-05-23');
		var result = personalDataModel.validateAge(personalDataModel, 'NS');
		expect(result.err).toEqual('personalData_DOB_19YearsError');
	});
	
	it(" will ensure that the validation model for birth date for Nova Scotia will validate if birthdate is more than 19 years", function(){
		personalDataModel.set('birthDate', '1994-05-23');
		var date = personalDataModel.get('birthDate');
		expect(date).toEqual('1994-05-23');
		var result = personalDataModel.validateAge(personalDataModel, 'NS');
		expect(result).toEqual(null);
	});
	
	it(" will ensure that the validation model for birth date for Northwest Territories will not validate if birthdate is less than 18 years", function(){
		personalDataModel.set('birthDate', '1996-05-23');
		var date = personalDataModel.get('birthDate');
		expect(date).toEqual('1996-05-23');
		var result = personalDataModel.validateAge(personalDataModel, 'NT');
		expect(result.err).toEqual('personalData_DOB_18YearsError');
	});
	
	it(" will ensure that the validation model for birth date for Northwest Territories will not validate if birthdate is less than 19 years", function(){
		personalDataModel.set('birthDate', '1995-05-23');
		var date = personalDataModel.get('birthDate');
		expect(date).toEqual('1995-05-23');
		var result = personalDataModel.validateAge(personalDataModel, 'NT');
		expect(result.err).toEqual('personalData_DOB_19YearsError');
	});
	
	it(" will ensure that the validation model for birth date for Northwest Territories will validate if birthdate is more than 19 years", function(){
		personalDataModel.set('birthDate', '1994-05-23');
		var date = personalDataModel.get('birthDate');
		expect(date).toEqual('1994-05-23');
		var result = personalDataModel.validateAge(personalDataModel, 'NT');
		expect(result).toEqual(null);
	});
	
	it(" will ensure that the validation model for birth date for Nunavut will not validate if birthdate is less than 18 years", function(){
		personalDataModel.set('birthDate', '1996-05-23');
		var date = personalDataModel.get('birthDate');
		expect(date).toEqual('1996-05-23');
		var result = personalDataModel.validateAge(personalDataModel, 'NU');
		expect(result.err).toEqual('personalData_DOB_18YearsError');
	});
	
	it(" will ensure that the validation model for birth date for Nunavut will not validate if birthdate is less than 19 years", function(){
		personalDataModel.set('birthDate', '1995-05-23');
		var date = personalDataModel.get('birthDate');
		expect(date).toEqual('1995-05-23');
		var result = personalDataModel.validateAge(personalDataModel, 'NU');
		expect(result.err).toEqual('personalData_DOB_19YearsError');
	});
	
	it(" will ensure that the validation model for birth date for Nunavut will validate if birthdate is more than 19 years", function(){
		personalDataModel.set('birthDate', '1994-05-23');
		var date = personalDataModel.get('birthDate');
		expect(date).toEqual('1994-05-23');
		var result = personalDataModel.validateAge(personalDataModel, 'NU');
		expect(result).toEqual(null);
	});
	
	it(" will ensure that the validation model for birth date for Ontario will not validate if birthdate is less than 18 years", function(){
		personalDataModel.set('birthDate', '1996-05-23');
		var date = personalDataModel.get('birthDate');
		expect(date).toEqual('1996-05-23');
		var result = personalDataModel.validateAge(personalDataModel, 'ON');
		expect(result.err).toEqual('personalData_DOB_18YearsError');
	});
	
	it(" will ensure that the validation model for birth date for Ontario will validate if birthdate is more than 18 years", function(){
		personalDataModel.set('birthDate', '1995-05-23');
		var date = personalDataModel.get('birthDate');
		expect(date).toEqual('1995-05-23');
		var result = personalDataModel.validateAge(personalDataModel, 'ON');
		expect(result).toEqual(null);
	});
	
	it(" will ensure that the validation model for birth date for Prince Edward Island will not validate if birthdate is less than 18 years", function(){
		personalDataModel.set('birthDate', '1996-05-23');
		var date = personalDataModel.get('birthDate');
		expect(date).toEqual('1996-05-23');
		var result = personalDataModel.validateAge(personalDataModel, 'PE');
		expect(result.err).toEqual('personalData_DOB_18YearsError');
	});
	
	it(" will ensure that the validation model for birth date for Prince Edward Island will validate if birthdate is more than 18 years", function(){
		personalDataModel.set('birthDate', '1995-05-23');
		var date = personalDataModel.get('birthDate');
		expect(date).toEqual('1995-05-23');
		var result = personalDataModel.validateAge(personalDataModel, 'PE');
		expect(result).toEqual(null);
	});
	
	it(" will ensure that the validation model for birth date for Quebec will not validate if birthdate is less than 18 years", function(){
		personalDataModel.set('birthDate', '1996-05-23');
		var date = personalDataModel.get('birthDate');
		expect(date).toEqual('1996-05-23');
		var result = personalDataModel.validateAge(personalDataModel, 'QC');
		expect(result.err).toEqual('personalData_DOB_18YearsError');
	});
	
	it(" will ensure that the validation model for birth date for Quebec will validate if birthdate is more than 18 years", function(){
		personalDataModel.set('birthDate', '1995-05-23');
		var date = personalDataModel.get('birthDate');
		expect(date).toEqual('1995-05-23');
		var result = personalDataModel.validateAge(personalDataModel, 'QC');
		expect(result).toEqual(null);
	});
	
	it(" will ensure that the validation model for birth date for Saskatchewan will not validate if birthdate is less than 18 years", function(){
		personalDataModel.set('birthDate', '1996-05-23');
		var date = personalDataModel.get('birthDate');
		expect(date).toEqual('1996-05-23');
		var result = personalDataModel.validateAge(personalDataModel, 'SK');
		expect(result.err).toEqual('personalData_DOB_18YearsError');
	});
	
	it(" will ensure that the validation model for birth date for Saskatchewan will validate if birthdate is more than 18 years", function(){
		personalDataModel.set('birthDate', '1995-05-23');
		var date = personalDataModel.get('birthDate');
		expect(date).toEqual('1995-05-23');
		var result = personalDataModel.validateAge(personalDataModel, 'SK');
		expect(result).toEqual(null);
	});
	
	it(" will ensure that the validation model for birth date for Yukon will not validate if birthdate is less than 18 years", function(){
		personalDataModel.set('birthDate', '1996-05-23');
		var date = personalDataModel.get('birthDate');
		expect(date).toEqual('1996-05-23');
		var result = personalDataModel.validateAge(personalDataModel, 'YT');
		expect(result.err).toEqual('personalData_DOB_18YearsError');
	});
	
	it(" will ensure that the validation model for birth date for Yukon will not validate if birthdate is less than 19 years", function(){
		personalDataModel.set('birthDate', '1995-05-23');
		var date = personalDataModel.get('birthDate');
		expect(date).toEqual('1995-05-23');
		var result = personalDataModel.validateAge(personalDataModel, 'YT');
		expect(result.err).toEqual('personalData_DOB_19YearsError');
	});
	
	it(" will ensure that the validation model for birth date for Yukon will validate if birthdate is more than 19 years", function(){
		personalDataModel.set('birthDate', '1994-05-23');
		var date = personalDataModel.get('birthDate');
		expect(date).toEqual('1994-05-23');
		var result = personalDataModel.validateAge(personalDataModel, 'YT');
		expect(result).toEqual(null);
	});
	
	//oldLoginScreenModel //contains userID field & password both of which are removed in the newer model
	it(" will ensure that if the old loginScreen model exists and is added to the system, we know that userID exists", function(){		
		sut.addModel(oldLoginScreenModel);
		var theModel = sut.getModel("loginScreen");
		expect(theModel.getItemByName("userID")).not.toEqual(null);
		expect(theModel.getItemByName("userID")).toBeTruthy();		
	});

	it(" will ensure that if the old loginScreen model exists and is added to the system, we know that passwordFieldID exists", function(){		
		sut.addModel(oldLoginScreenModel);
		var theModel = sut.getModel("loginScreen");
		expect(theModel.getItemByName("passwordFieldID")).not.toEqual(null);
		expect(theModel.getItemByName("passwordFieldID")).toBeTruthy();		
	});

	it(" will ensure that if the old loginScreen model exists and is added to the system, and userID is defined and initialized we can get its value", function(){
		oldLoginScreenModel.set('userID','');
		sut.addModel(oldLoginScreenModel);
		var theModel = sut.getModel("loginScreen");

		var userID = theModel.get('userID');
		expect(userID).not.toEqual(null);		
	});
	
	it(" will ensure that if the old loginScreen model exists and is added to the system, and passwordFieldID is defined and initialized we can get its value", function(){
		oldLoginScreenModel.set('passwordFieldID','');
		sut.addModel(oldLoginScreenModel);
		var theModel = sut.getModel("loginScreen");

		var passwordFieldID = theModel.get('passwordFieldID');
		expect(passwordFieldID).not.toEqual(null);		
	});

	//newLoginScreenModel //contains additional employerID field and removal of userID and password fields
	it(" will ensure that as long as the new loginScreen model is added to CreditCardData, we can get it", function(){
		sut.addModel(newLoginScreenModel);
		var theModel = sut.getModel("loginScreen");
		expect(theModel).not.toEqual(null);
	});
	
	it(" will ensure that if the new loginScreen model exists and is added to the system, we know that employerID exists", function(){
		sut.addModel(newLoginScreenModel);
		var getItemByName = sut.getModel("loginScreen");
		expect(getItemByName.getItemByName("employerID")).not.toEqual(null);		
		expect(getItemByName.getItemByName("employerID")).toBeTruthy();
	});

	it(" will ensure that if the new loginScreen model exists and is added to the system, and employerID is defined and initialized we can get its value", function(){
		newLoginScreenModel.set('employerID','');
		sut.addModel(newLoginScreenModel);
		var theModel = sut.getModel("loginScreen");

		var employerID = theModel.get('employerID');
		expect(employerID).not.toEqual(null);		
	});
	
	it(" will ensure that if the new loginScreen model exists and is added to the system, we know that userID does not exist", function(){
		sut.addModel(newLoginScreenModel);
		var theModel = sut.getModel("loginScreen");
		expect(theModel.getItemByName("userID")).toEqual(null);
		expect(theModel.getItemByName("userID")).toBeFalsy();		
	});
	
	it(" will ensure that if the new loginScreen model exists and is added to the system, we know that agentID exists", function(){
		sut.addModel(newLoginScreenModel);
		var theModel = sut.getModel("loginScreen");
		expect(theModel.getItemByName("agentID")).not.toEqual(null);
	});

	it(" will ensure that if the new loginScreen model exists and is added to the system, we know that agentID exists, and can update its value", function(){
		sut.addModel(newLoginScreenModel);
		var theModel = sut.getModel("loginScreen");
		expect(theModel.getItemByName("agentID")).not.toEqual(null);
		theModel.set("agentID","test");
		
		sut.addModel(theModel);
		expect(theModel.get("agentID")).toEqual("test");
	});

	it(" will ensure that if the new loginScreen model exists and is added to the system, we know that passwordFieldID does not exist", function(){
		sut.addModel(newLoginScreenModel);
		var theModel = sut.getModel("loginScreen");
		expect(theModel.getItemByName("passwordFieldID")).toEqual(null);
		expect(theModel.getItemByName("passwordFieldID")).toBeFalsy();		
	});
	
	it(" will ensure that instantiating a CreditCardApplicationData object will automatically have a queueModel", function(){
		expect(sut.getModel("queueModel")).not.toEqual(null);
	});
	
	it(" will ensure that a unique queueing transaction ID can be added to the CreditCardApplicationData model", function(){
		sut.setQueueTransactionID("someID");		
		expect(sut.getQueueTransactionID()).toEqual("someID");				
	});
	
	it(" will ensure that a unique queueing transaction ID can be added to the CreditCardApplicationData model and begin with a prefix of WICI_", function(){
		sut.addModel(newLoginScreenModel);
		var loginScreenModel = sut.getModel("loginScreen");
		loginScreenModel.set("agentID","A1");
		
		sut.addModel(loginScreenModel);
		
		var agentID = loginScreenModel.get("agentID");
		sut.setQueueTransactionID(_.uniqueId("WICI_" + agentID +"_"+ WICI.START_TIME));		
		
		expect(sut.getQueueTransactionID().indexOf("WICI_")).not.toEqual(-1);				
		expect(sut.getQueueTransactionID().indexOf("_A1_")).not.toEqual(-1);
	});
	
	it(" will ensure that getting groupedData on the default instantiation of CreditCardApplicationData model will have only 1 model called queueModel", function(){
		var sutDefaultInstantiation = new WICI.CreditCardApplicationData();
		var defaultListOfModels = sutDefaultInstantiation.getGroupedData();
		var expectedQueueModelName = defaultListOfModels[0].model;
		
		expect(defaultListOfModels.length).toEqual(1);
		expect(expectedQueueModelName).toEqual("queueModel");
	});
	
	it(" will ensure that getting groupedData on the re-instantiation of CreditCardApplicationData model will have only 1 model called queueModel", function(){
		var sutDefaultInstantiation = new WICI.CreditCardApplicationData();
		var defaultListOfModels = sutDefaultInstantiation.getGroupedData();
		var expectedQueueModelName = defaultListOfModels[0].model;
		
		expect(defaultListOfModels.length).toEqual(1);
		expect(expectedQueueModelName).toEqual("queueModel");
		
		sutDefaultInstantiation = null;
		sutDefaultInstantiation = new WICI.CreditCardApplicationData();
		
		var defaultListOfModels = sutDefaultInstantiation.getGroupedData();
		var expectedQueueModelName = defaultListOfModels[0].model;
		
		expect(defaultListOfModels.length).toEqual(1);
		expect(expectedQueueModelName).toEqual("queueModel");
	});

	it(" will ensure that getting groupedData on a CreditCardApplicationData object with loginScreenModel will have only 2 models", function(){
		var sutWithLoginScreenModel = new WICI.CreditCardApplicationData();
		sutWithLoginScreenModel.addModel(newLoginScreenModel);
		
		var listOfModels = sutWithLoginScreenModel.getGroupedData();
		expect(listOfModels.length).toEqual(2);
	});
	
});