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
			'screenConstructor' : WICI.PersonalDataScreenController,
			'transitionOut' : function() {
				return 'Page2';
			},
			'transitionOnFailure' : function() {
				return 'done';
			},
		},
		'Page2' : {
			'screenConstructor' : WICI.EmailInformationController,
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
				if (employerID === 'E') {
					var model = new WICI.BaseModel({
				    	name: 'OptionalProductsModel',
				        data: [
							{ notField: true, name: 'optionalProducts_PA',     value: false },
							{ notField: true, name: 'optionalProducts_CP',     value: false },
							{ notField: true, name: 'optionalProducts_IW',     value: false },
							{ notField: true, name: 'optionalProducts_NA',     value: 'Y' }
		                ]
				    });
					var currentModel = activationItems.getModel(model.name);
			        if (!currentModel) {
			            activationItems.addModel(model);
			        } else {
			            model = currentModel;
			        }

					return 'Page7';
				}
				return 'Page6';
			}
		},
		'Page6' : {
			'screenConstructor' : WICI.OptionalProductsScreenController,
			'transitionOut' : function() {
				return 'Page7';
			},
		},
		'Page7' : {
			'screenConstructor' : WICI.SummaryScreenController,
			'transitionOut' : function() {
				return 'Page8';
			}
		},
		'Page8' : {
            'screenConstructor' : WICI.PrintDemoScreenController,
            'transitionOut' : function() {
                return 'Page9';
            },
        },
		'Page9' : {
			'screenConstructor' : WICI.ConfirmationScreenController,
			'transitionOut' : function() {
				return 'done';
			},
		}
	};

	builtFlow = new WICI.FlowController(activationItems, rules.defaultBackOut, screensDefinitions, rules.defaultFinish, rules.defaultFinish, translate, messageDialog);

	return builtFlow;
};

