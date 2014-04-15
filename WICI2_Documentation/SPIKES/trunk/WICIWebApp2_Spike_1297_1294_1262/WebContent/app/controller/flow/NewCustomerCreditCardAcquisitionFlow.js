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
			'screenConstructor' : WICI.PersonalDataScreen2Controller,
			'transitionOut' : function() {
				return 'Page3';
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
			},
		},
		'Page5' : {
			'screenConstructor' : WICI.SignatureScreenController,
			'transitionOut' : function() {
				return 'Page6';
			},
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
			},
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
	