ensureNamespaceExists();

WICI.ServerActivationItemsMapper =  function () {
	
	this.mapToActivationItems = mapToActivationItems;
	
	function mapToActivationItems( argServerActivationItems ){
		var mappedActivationItems = new WICI.CreditCardApplicationData();
		
		$.each(argServerActivationItems.models, function( index, modelsList ){
			var newModel;
			var thisConfig;
			var thisModelsData=[];
			
			$.each(modelsList.data, function(index,nameValuePairs){
				thisModelsData.push({name:nameValuePairs.name,value:nameValuePairs.value});
			});

			thisConfig = {name:modelsList.model,data:thisModelsData};
			newModel = new WICI.BaseModel(thisConfig);
			mappedActivationItems.addModel(newModel);
			
		});
		
		return mappedActivationItems;
	}
	/*
    [activationItems.getModel('chooseProductModel').get('productCard'),
     activationItems.getModel('personalData').get('firstName') ? activationItems.getModel('personalData').get('firstName') : "",
     activationItems.getModel('personalData').get('initial') ? activationItems.getModel('personalData').get('initial') : "",
     activationItems.getModel('personalData').get('lastName') ? activationItems.getModel('personalData').get('lastName') : "",
     applicationResponse.accountNumber ? applicationResponse.accountNumber : "",
     applicationResponse.expiryDate ? applicationResponse.expiryDate : "",
     applicationResponse.creditLimit ? applicationResponse.creditLimit : "",
     applicationResponse.apr ? applicationResponse.apr : "",
     applicationResponse.cashAPR ? applicationResponse.cashAPR : "",
     activationItems.getModel('signatureModel').get('userSignature'),
     applicationResponse.appStatus,
     activationItems.getModel('chooseProductModel').get('province') ? activationItems.getModel('chooseProductModel').get('province') : "",
     activationItems.getModel('personalData').get('correspondence') ? activationItems.getModel('personalData').get('correspondence') : "",
     prepareCreditProtectorYesNo(activationItems.getModel('OptionalProductsModel').get('insuranceCode'), activationItems.getModel('personalData').get('correspondence')),//creditProtectoryYesNo
     prepareIdentityWatchYesNo(activationItems.getModel('OptionalProductsModel').get('insuranceCode'), activationItems.getModel('personalData').get('correspondence')),//identityWatchYesNo
     activationItems.getModel('loginScreen').get('locationFieldID'),""]
*/	
	
};
