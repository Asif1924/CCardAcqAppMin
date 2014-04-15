ensureNamespaceExists();

BRB.IdentityExamQuestionTimer = function() {
	var incrementTime = 1000;
	var questionTimer = $.timer(updateTimer, incrementTime, false);
	var totalSeconds = 0;
	
	//---------------------------------------------------------------------------------------	 
	function updateTimer () {
		totalSeconds++;
	};	
	//---------------------------------------------------------------------------------------
	this.startTimer = function (reset) {	
		if (reset) { totalSeconds = 0; }
		
		questionTimer.play(reset);
	};
	//---------------------------------------------------------------------------------------
	this.stopTimer = function () {
		questionTimer.stop();
	};
	//---------------------------------------------------------------------------------------
	this.resetTimer = function () {
		totalSeconds = 0;
		questionTimer.reset();
	};
	//---------------------------------------------------------------------------------------
	this.isTimerAlive = function () {
		return questionTimer.isActive;
	};
	//---------------------------------------------------------------------------------------
	this.getAnswerTotalSeconds = function () {
		return totalSeconds;
	};
};