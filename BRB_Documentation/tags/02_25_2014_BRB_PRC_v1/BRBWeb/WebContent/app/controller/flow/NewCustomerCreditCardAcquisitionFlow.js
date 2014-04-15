ensureNamespaceExists();

BRB.NewCustomerCreditCardAcquisitionFlow = function(activationItems, translate, messageDialog) {
	var rules = BRB.ReusableFlowDefinitions;
	var builtFlow = null;

	var screensDefinitions = {
		'start' : {
			'screenConstructor' : null,
			'transitionOut' : function() {
				return 'Page0';
			}
		},
		'Page0' : {
			'screenConstructor' : BRB.OverviewController,
			'transitionOut' : function() {
				return 'Page1';
			},
			'transitionOnFailure' : function() {
				return 'done';
			}
		},
	
		'Page1' : {
			'screenConstructor' : BRB.PersonalInformationController,
			'transitionOut' : function() {
				return 'Page2';
			},
			'transitionOnFailure' : function() {
				return 'done';
			}
		},
		
		'Page2' : {
			'screenConstructor' : BRB.AdditionalInformationController,
			'transitionOut' : function() {
				return 'Page3';
			},
			'transitionOnFailure' : function() {
				return 'done';
			}
		},
		
		'Page3' : {
			'screenConstructor' : BRB.ConfirmationController,
			'transitionOut' : function() {
				return 'Page4';
			},
			'transitionOnFailure' : function() {
				return 'done';
			}
		},
		
		'Page4' : {
			'screenConstructor' : BRB.IdentityVerificationController,
			'transitionOut' : function() {
				return 'done';
			}
		}
	};	

	builtFlow = new BRB.FlowController(activationItems, rules.defaultBackOut, screensDefinitions, rules.defaultFinish, rules.defaultFinish, translate, messageDialog);

	return builtFlow;
};
	