CreateDummyPage = function(indicator, flowState) {
	return function() {

		var showing = false;
		function isShowing() {
			return showing;
		}
		this.isShowing = isShowing;
		function init() {
			flowState.addToPagesCreatedSoFar(this);
		}
		this.init = init;
		function show() {
			showing = true;
		}
		this.show = show;
		function hide() {
			showing = false;
		}
		this.hide = hide;
		function getIndicator() {
			return indicator;
		}
		this.getIndicator = getIndicator;
		
		
		var backWithFailureCalled = 0;
		function returnedFromFailure() {
			backWithFailureCalled++;
		}
		this.returnedFromFailure = returnedFromFailure;
		
		function timesReturnedFromFailure () {
			return backWithFailureCalled;
		}
		this.timesReturnedFromFailure = timesReturnedFromFailure;
	};
};
