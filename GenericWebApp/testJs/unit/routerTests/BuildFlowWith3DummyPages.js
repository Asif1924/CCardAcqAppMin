BuildFlowWith3DummyPages = function(flowState) {
	var screensDefinitions = {
		'start' : {
			'screenConstructor' : null,
			'transitionOut' : function() {
				return 'Page1';
			},
		},
		'Page1' : {
			'screenConstructor' : CreateDummyPage(0, flowState),
			'transitionOut' : function() {
				return 'Page2';
			},
			'transitionOnFailure' : function() {
				return 'done';
			},
		},
		'Page2' : {
			'screenConstructor' : CreateDummyPage(1, flowState),
			'transitionOut' : function() {
				return 'Page3';
			},
		},
		'Page3' : {
			'screenConstructor' : CreateDummyPage(2, flowState),
			'transitionOut' : function() {
				return 'Page4';
			},
		},
		'Page4' : {
			'screenConstructor' : CreateDummyPage(3, flowState),
			'transitionOut' : function() {
				return 'Page5';
			},
		},
		'Page5' : {
			'screenConstructor' : CreateDummyPage(4, flowState),
			'transitionOut' : function() {
				return 'done';
			},
		},
	};
	
	return new GENERICWEBAPP.SPARouter({}, flowState.backOut,
			screensDefinitions, flowState.finish, flowState.halt, {}, {});
};