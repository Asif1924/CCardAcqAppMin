Build2PageFlowWith2PageSubflow = function(flowState) {
	var builtFlow;
	
	var subFlowScreens = {
			'start' : {
				'screenConstructor' : null,
				'transitionOut' : function() {
					return 'Page101';
				},
			},
			'Page101' : {
				'screenConstructor' : CreateDummyPage(1, flowState),
				'transitionOut' : function() {
					return 'Page102';
				}
			},
			'Page102' : {
				'screenConstructor' : CreateDummyPage(2, flowState),
				'transitionOut' : function() {
					return 'done';
				},
			}
		};
	
	var subFlow =  new BRB.FlowController({}, function() {
		builtFlow.backIntoParentFlow();
	}, subFlowScreens, function() {
		builtFlow.showScreenAfterFlow(subFlow, 'Page2');
	}, {}, {});
	
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
				subFlow.start();
			}
		},
		'Page2' : {
			'screenConstructor' : CreateDummyPage(3, flowState),
			'transitionOut' : function() {
				return 'done';
			},
		}
	};

	builtFlow = new BRB.FlowController({}, flowState.backOut,
			screensDefinitions, flowState.finish, flowState.halt, {}, {});
	builtFlow['subFlowNext'] = function() {
		subFlow.next();
	};
	builtFlow['subFlowBack'] = function() {
		subFlow.back();
	};
	
	return builtFlow;
};