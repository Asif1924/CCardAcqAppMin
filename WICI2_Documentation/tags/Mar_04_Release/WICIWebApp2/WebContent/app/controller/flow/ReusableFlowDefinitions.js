ensureNamespaceExists();

WICI.ReusableFlowDefinitions = {
	defaultBackOut : function() {
		//TODO:Go somewhere 		
	},
	startRule : {
		'screenConstructor' : null,
		'transitionOut' : function() {
			return 'ChooseProduct';
		},
	},
	endTransition : function() {
		return 'done';
	},
	defaultFinish : function() {
		//TODO: Cleanup. This is where we delete activationItems		
	}
};