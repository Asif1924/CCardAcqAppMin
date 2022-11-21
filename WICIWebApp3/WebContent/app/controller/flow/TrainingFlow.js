ensureNamespaceExists();

WICI.TrainingFlow = function(activationItems, translate, messageDialog) {
	var rules = WICI.TrainingFlowRules;
	var builtFlow = null;

	var screensDefinitions = {
		'start' : {
			'screenConstructor' : null,
			'transitionOut' : function() {
				return 'Page1';
			},
		},
		'Page1' : {
			'screenConstructor' : WICI.TrainingModuleStartScreenController,
			'transitionOut' : function() {
				return 'Page2';
			},
			'transitionOnFailure' : function() {
				return 'done';
			},
		},
		'Page2' : {
			'screenConstructor' : WICI.TrainingModuleScreensController,
			'transitionOut' : function() {
				return 'Page3';
			},
		},
		'Page3' : {
			'screenConstructor' : WICI.TrainingModuleAttestationScreenController,
			'transitionOut' : function() {
				return 'done';
			},
		}
	};
	
	builtFlow = new WICI.FlowController(activationItems, rules.defaultBackOut, screensDefinitions, rules.defaultFinish, rules.defaultFinish, translate, messageDialog);
	return builtFlow;
	//return new WICI.FlowController({}, flowState.backOut,
	//		screensDefinitions, flowState.finish, flowState.halt, {}, {});
};