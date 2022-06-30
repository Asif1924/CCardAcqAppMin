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
				var insurance_CPType_Available = activationItems.getModel('financialData').get('insurance_CPType_Available').toUpperCase();
				//console.log("NewCustomerCreditCardAcquisitionFlow :: insurance_CPType_Available : " + insurance_CPType_Available);
				
				if (employerID === 'E' || insurance_CPType_Available == "NONE") {
					//console.log("NewCustomerCreditCardAcquisitionFlow :: insurance_CPType_Available : E login OR OP None");
					var model = new WICI.BaseModel({
				    	name: 'OptionalProductsModel', 
				        data: [
							{ notField: true, name: 'optionalProducts_CPLD',     value: 'N' },
							{ notField: true, name: 'optionalProducts_CPC',      value: 'N' },
							{ notField: true, name: 'optionalProducts_NA',       value: 'Y' }
		                ]
				    });		
					var optionalProductsScreenModel = activationItems.getModel(model.name);
					//console.log("NewCustomerCreditCardAcquisitionFlow :: optionalProductsScreenModel : " + optionalProductsScreenModel);
					
			        if(!optionalProductsScreenModel) {
			            activationItems.addModel(model);
			        } else {
			        	optionalProductsScreenModel.set('optionalProducts_CPC',  'N');
			        	optionalProductsScreenModel.set('optionalProducts_CPC_AcceptBox',  false);
			        	optionalProductsScreenModel.set('userSignature_CPC',  null);
			        	optionalProductsScreenModel.set('userSignatureNative_CPC',  null);
						optionalProductsScreenModel.set('optionalProducts_CPLD',  'N');
						optionalProductsScreenModel.set('optionalProducts_CPLD_AcceptBox',  false);
			        	optionalProductsScreenModel.set('userSignature_CPLD',  null);
			        	optionalProductsScreenModel.set('userSignatureNative_CPLD',  null);
			        	optionalProductsScreenModel.set('optionalProducts_NA',  'Y');						
			        	optionalProductsScreenModel.set('optionalProducts_CheckArea',  false);
			        	optionalProductsScreenModel.set('insuranceAgreedFlag',  'N');
			        	optionalProductsScreenModel.set('signDate',  null);
			        	optionalProductsScreenModel.set('insuranceCode',  null);
			            model = optionalProductsScreenModel;
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
				} else if(insurance_CPType_Available == "CP_COMPLETE" || insurance_CPType_Available == "CP_LIFEDISABILITY") {
					activationItems.clearToSignatureScreen();
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
						return 'Page6';
			        }
					return 'Page6';
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
};

