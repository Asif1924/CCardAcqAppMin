ensureNamespaceExists();

WICI.TrainingFlowRules = {
	defaultBackOut : function() {
		//TODO:Go somewhere 		
	},
	startRule : {
		'screenConstructor' : null,
		'transitionOut' : function() {
			return 'TrainingModuleStartScreen';
		},
	},
	endTransition : function() {
		return 'done';
	},
	defaultFinish : function() {
		//TODO: Cleanup. This is where we delete activationItems		
	}
};