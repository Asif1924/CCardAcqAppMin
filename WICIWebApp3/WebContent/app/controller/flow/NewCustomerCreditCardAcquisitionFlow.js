ensureNamespaceExists();

WICI.NewCustomerCreditCardAcquisitionFlow = function(activationItems, translate, messageDialog) {
	var rules = WICI.ReusableFlowDefinitions;
	var builtFlow = null;

	var screensDefinitions = {
		'start' : {
			'screenConstructor' : null,
			'transitionOut' : function() {
				return 'Page0';
			},
		},
		'Page0' : {
			'screenConstructor' : WICI.ChooseProductScreenController,
			'transitionOut' : function() {
				return 'Page1';
			},
			'transitionOnFailure' : function() {
				return 'done';
			},
		},
		'Page1' : {
			'screenConstructor' : WICI.ContactInformationController,
			'transitionOut' : function() {
				return 'Page2';
			},
			'transitionOnFailure' : function() {
				return 'done';
			},
		},
		'Page2' : {
			'screenConstructor' : WICI.PersonalDataScreenController,
			'transitionOut' : function() {
				return 'Page3';
			},
			'transitionOnFailure' : function() {
				return 'done';
			},
		},
		'Page3' : {
			'screenConstructor' : WICI.FinancialScreenController,
			'transitionOut' : function() {
				return 'Page4';
			},
		},
		'Page4' : {
			'screenConstructor' : WICI.SupCardRequestScreenController,
			'transitionOut' : function() {
				return 'Page5';
			}
		},
		'Page5' : {
			'screenConstructor' : WICI.SignatureScreenController,
			'transitionOut' : function() {
				var employerID = activationItems.getModel('loginScreen').get('employerID').toUpperCase();
				var showOPProducts = enableOptionalProduct(activationItems);
				console.log(" showOPProducts in creditCardAcquisitionFlow   "+showOPProducts);
				if (employerID === 'E' || !showOPProducts ) {
					var model = new WICI.BaseModel({
				    	name: 'OptionalProductsModel', 
				        data: [
							{ notField: true, name: 'optionalProducts_PA',     value: 'N' },
							{ notField: true, name: 'optionalProducts_CP',     value: 'N' },
							{ notField: true, name: 'optionalProducts_IW',     value: 'N' },
							{ notField: true, name: 'optionalProducts_NA',     value: 'Y' }
		                ]
				    });		
					var optionalProductsScreenModel = activationItems.getModel(model.name);
					//console.log(' current model '+  optionalProductsScreenModel);
					
			        if (!optionalProductsScreenModel) {
			            activationItems.addModel(model);
			           //console.log(' current model  not available '+  activationItems);
			            
			        } else {
			        	optionalProductsScreenModel.set('optionalProducts_CP',  'N');
			        	optionalProductsScreenModel.set('optionalProducts_NA',  'Y');
			        	optionalProductsScreenModel.set('optionalProducts_NA',  'Y');
			        	optionalProductsScreenModel.set('optionalProduct_CP_AcceptBox',  false);
			        	optionalProductsScreenModel.set('userSingnature_CP',  null);
			        	optionalProductsScreenModel.set('userSingnatureNative_CP',  null);
			        	optionalProductsScreenModel.set('optionalProducts_CheckArea',  false);
			        	optionalProductsScreenModel.set('insuranceAgreedFlag',  'N');
			        	optionalProductsScreenModel.set('signDate',  null);
			        	optionalProductsScreenModel.set('insuranceCode',  null);
			            model = optionalProductsScreenModel;
			          // console.log(' update cp for YT '+  model);
			        }
			        
			        if(activationItems.getModel('contactInfoScreen').get('primaryLandline_CheckField') === 'Y' && 
							activationItems.getModel('contactInfoScreen').get('secondaryLandline_CheckField') === 'Y') {
			        	var mobilePaymentsModel = new WICI.BaseModel({
					    	name: 'mobilePaymentsScreen',
					        data: [
								{ notField: true, name: 'mobilePhone',     value: false },
								{ notField: true, name: 'androidPayCheckField',     value: false },
								{ notField: true, name: 'applePaycheckField',     value: false },
								{ notField: true, name: 'noThanksCheckField',     value: 'N' }
			                ]
					    });
						var currentModel = activationItems.getModel(mobilePaymentsModel.name);
				        if (!currentModel) {
				            activationItems.addModel(mobilePaymentsModel);
				        } else {
				        	mobilePaymentsModel = currentModel;
				        }

						return 'Page8';
			        }
					return 'Page7';
				}
				return 'Page6';
			}
		},
		'Page6' : {
			'screenConstructor' : WICI.OptionalProductsScreenController,
			'transitionOut' : function() {
				if (activationItems.getModel('contactInfoScreen').get('primaryLandline_CheckField') === 'Y' && 
						activationItems.getModel('contactInfoScreen').get('secondaryLandline_CheckField') === 'Y') {
					var model = new WICI.BaseModel({
				    	name: 'mobilePaymentsScreen',
				        data: [
							{ notField: true, name: 'mobilePhone',     value: false },
							{ notField: true, name: 'androidPayCheckField',     value: false },
							{ notField: true, name: 'applePaycheckField',     value: false },
							{ notField: true, name: 'noThanksCheckField',     value: 'N' }
		                ]
				    });
					var currentModel = activationItems.getModel(model.name);
			        if (!currentModel) {
			            activationItems.addModel(model);
			        } else {
			            model = currentModel;
			           
			        }

					return 'Page8';
				}
				return 'Page7';	
				//return 'Page7';
			},
		},
		'Page7' : {
			'screenConstructor' : WICI.MobilePaymentsScreenController,
			'transitionOut' : function() {
				return 'Page8';
			},
		},
		'Page8' : {
			'screenConstructor' : WICI.SummaryScreenController,
			'transitionOut' : function() {
				return 'Page9';
			}
		},
		'Page9' : {
            'screenConstructor' : WICI.PrintDemoScreenController,
            'transitionOut' : function() {
                return 'Page10';
            },
        },
		'Page10' : {
			'screenConstructor' : WICI.ConfirmationScreenController,
			'transitionOut' : function() {
				return 'done';
			},
		}
	};

	builtFlow = new WICI.FlowController(activationItems, rules.defaultBackOut, screensDefinitions, rules.defaultFinish, rules.defaultFinish, translate, messageDialog);

	return builtFlow;
	
	
	  function enableOptionalProduct (activationItems) {
	    	
	    	var enableOPProduct = false;
	    	    	   	
	    	if( activationItems.getModel('loginScreen').get('employerID').toUpperCase() !== "E")
	    	{
	    		enableOPProduct = true;
	    	}
	    	
	    	console.log(activationItems.getModel('loginScreen').get('outletProvince'))
	    	
	    	if( activationItems.getModel('loginScreen').get('outletProvince') != null){
	    	
	    	 if (activationItems.getModel('loginScreen') .get('outletProvince') === 'SK' || activationItems.getModel('loginScreen') .get('outletProvince') === 'MB') {
	 			if (activationItems.getModel('loginScreen').get('employerID').toUpperCase() === 'K') {
	 				
	 				enableOPProduct = true;
	 				
	 			} else {
	 				enableOPProduct = false;
	 				
	 			}
	 		}
	    	 // US5451
			 if ( activationItems.getModel('loginScreen') .get('outletProvince') === 'YT')
				 {
				 if (activationItems.getModel('loginScreen').get('employerID').toUpperCase() !== 'E') {
					 enableOPProduct = false;
				 }
			   
	    	 }
			 
			if (activationItems.getModel('loginScreen') .get('outletProvince')  === 'AB') {
				if (activationItems.getModel('loginScreen').get('employerID').toUpperCase() === 'J') {
					enableOPProduct = true;
				} else {
					enableOPProduct = false;
				}
			}

			if (activationItems.getModel('loginScreen') .get('outletProvince') === 'QC') {
				if (activationItems.getModel('loginScreen').get('employerID').toUpperCase() === 'C' || activationItems.getModel('loginScreen').get('employerID') === 'K') {
					enableOPProduct= true;
				} else {
					enableOPProduct= false;
				}
			}
	    	 
	    	}   	 
	    	 
	    	 
			 
			 if (activationItems.getModel('personalData') != null && activationItems.getModel('personalData').get('placeofissue') != null && activationItems.getModel('personalData').get('placeofissue') === 'YT'){
				 
				 if (activationItems.getModel('loginScreen').get('employerID').toUpperCase() !== 'E') {
					 enableOPProduct= false;
				 }
			   
		     }
			 
			 if ( activationItems.getModel('personalData2_Address') != null && activationItems.getModel('personalData2_Address').get('province') != null && activationItems.getModel('personalData2_Address').get('province') === 'YT')
				
				 {
				 if (activationItems.getModel('loginScreen').get('employerID') !== 'E') {
					 enableOPProduct= false;
				 }
			   
		     }
			 if (activationItems.getModel('personalData') != null){
			 var personalDataModel = activationItems.getModel('personalData');
		        console.log(" age "+personalDataModel.get('age'));
		        if(personalDataModel.get('age') > 76) {
		        	enableOPProduct= false;
		        }
			 }
	    	
	    	 console.log(enableOPProduct);
	    	 
	    	 return enableOPProduct;
	    	
	    }
	  function checkYoukonAddress(activationItems){
	    	
	    	if (activationItems.getModel('chooseProductModel').get('province') === 'YT'
				|| activationItems.getModel("personalData").get('placeofissue') === 'YT'
				|| activationItems.getModel("personalData2_Address").get('province') === 'YT') {
			 if (activationItems.getModel('loginScreen').get('employerID') !== 'E') {
				 activationItems.getModel('OptionalProductsModel').set('optionalProducts_NA',  'Y');
				 console.log( " checkYoukonAddress    "+  activationItems.getModel('OptionalProductsModel').get('optionalProducts_NA'));
				 console.log( " checkYoukonAddress cp   "+  activationItems.getModel('OptionalProductsModel').get('optionalProducts_CP'));
				 
				 activationItems.getModel('OptionalProductsModel').set('optionalProducts_CP',  'N');
				 
				 console.log( " after setting cp    "+  activationItems.getModel('OptionalProductsModel').get('optionalProducts_CP'));
				 
				 
			 }
		 }
	    	
	    }
	
	
	
	
	
	
};

