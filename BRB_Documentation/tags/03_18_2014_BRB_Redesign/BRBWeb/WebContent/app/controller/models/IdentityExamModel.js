ensureNamespaceExists();

BRB.IdentityExamModel = function() {
	var responseDecisionTypes =
	{	 
		Failed : "FAILED", 								// Failed the exam.
		Passed : "PASSED", 								// Passed the exam.
		FourthQuestionExist : "FAILED 4TH QUESTION", 	// 4th question presented.
		FourthQuestionPassed : "PASSED 4TH QUESTION" 	//Passed the 4th question and exam.
	};
	
	var identityExamObject = null;
	
	this.name = "identityExamModel";
	this.getId=getId;
	this.getBrbTransactionId = getBrbTransactionId;
	this.setBrbTransactionId = setBrbTransactionId;
	this.getState = getState;	
	this.getResult = getResult;
	this.getError = getError;	
	this.getScore = getScore;	
	this.getQuestions = getQuestions;
	this.setAnswerId = setAnswerId;
	this.setAnswerTime = setAnswerTime;
	this.getSessionId = getSessionId;
	this.getDecision = getDecision; 
	this.getTuExamResult = getTuExamResult;
	this.getIdentityExamObject = getIdentityExamObject;
	this.setIdentityExamObject = setIdentityExamObject;
	this.isIdentityExamResponseValid = isIdentityExamResponseValid; 	
	this.isFourthQuestionPresentInResponse  = isFourthQuestionPresentInResponse;
	this.isExaminationPassed = isExaminationPassed;
	this.isExaminationFailed = isExaminationFailed;
	
	this.setIdentityExamResponseObject = setIdentityExamResponseObject;
	
	//---------------------------------------------------------------------------------------
	function setIdentityExamResponseObject(argIdentityExamResponseObject){
		if (argIdentityExamResponseObject && !_.isEmpty(argIdentityExamResponseObject)){			
			identityExamObject = argIdentityExamResponseObject.data;			
		}
	}
	//---------------------------------------------------------------------------------------
	function getId() {
		return ( (identityExamObject.identityExam.id && !_.isEmpty(identityExamObject) )? 
				identityExamObject.identityExam.id : "");
	}
	//---------------------------------------------------------------------------------------
	function getBrbTransactionId(){
		return ( (identityExamObject.brbTransactionId && !_.isEmpty(identityExamObject) ) ? 
				identityExamObject.brbTransactionId : app.customerTransactionModel.getTransactionId());
	}
	//---------------------------------------------------------------------------------------
	function setBrbTransactionId(transactionId) {
		if (!_.isEmpty(identityExamObject)) {
			identityExamObject.brbTransactionId = transactionId;
		}
	}
	//---------------------------------------------------------------------------------------
	function getState(){
		return ( (identityExamObject.identityExam.state && !_.isEmpty(identityExamObject) )? 
				identityExamObject.identityExam.state : "");
	}
	//---------------------------------------------------------------------------------------
	function getResult(){
		return ( (identityExamObject.identityExam.result && !_.isEmpty(identityExamObject) )? 
				identityExamObject.identityExam.result : "");
	}
	//---------------------------------------------------------------------------------------
	function getError(){
		return ( (identityExamObject.identityExam.error && !_.isEmpty(identityExamObject) )? 
				identityExamObject.identityExam.error : "");
	}
	//---------------------------------------------------------------------------------------
	function getScore(){
		return ( (identityExamObject.identityExam.score && !_.isEmpty(identityExamObject) )? 
				identityExamObject.identityExam.score : "");
	}
	//---------------------------------------------------------------------------------------
	function getQuestions(){
		return ( (!_.isEmpty(identityExamObject) && !_.isEmpty(identityExamObject.identityExam.questions))? 
				identityExamObject.identityExam.questions : "");
	}
	//---------------------------------------------------------------------------------------
	function getQuestion(i){
		var questions = getQuestion();
		if (questions!=="" && !_.isEmpty(questions) && !_.isEmpty(questions[i])){
			return questions[i];
		} else {
			return "";
		}
	}
	//---------------------------------------------------------------------------------------
	function setAnswerId(i, j){
		if (identityExamObject && !_.isEmpty(identityExamObject)){
			identityExamObject.identityExam.questions[i].answerId = j;
		}
	}
	//---------------------------------------------------------------------------------------
	function getSessionId(){
		return (!_.isEmpty(identityExamObject) &&
				!_.isEmpty(identityExamObject.identityExam) &&
				!_.isEmpty(identityExamObject.identityExam.sessionId)? identityExamObject.identityExam.sessionId:""); 
	}
	//---------------------------------------------------------------------------------------
	function setAnswerTime(index, answerTimeSeconds){
		if (identityExamObject && !_.isEmpty(identityExamObject)) {			
			identityExamObject.identityExam.questions[index].timeToAnswer = answerTimeSeconds;
		}
	}
	//---------------------------------------------------------------------------------------
	/*
	 *  "FAILED" - Failed the exam.
	 * 	"PASSED" - Passed the exam.
	 * 	"FAILED 4TH QUESTION" - 4th question presented.
	 * 	"PASSED 4TH QUESTION" - Passed the 4th question and exam.
	 */ 	
	function getDecision () {
		return (identityExamObject.identityExam.decision && 
				!_.isEmpty(identityExamObject) &&
				!_.isEmpty(identityExamObject.identityExam) ?
				identityExamObject.identityExam.decision : 
				responseDecisionTypes.Failed);
	}
	//---------------------------------------------------------------------------------------
	function getTuExamResult(){
		if (!_.isEmpty(identityExamObject) && 
				!_.isEmpty(identityExamObject.identityExam) && 
				!_.isEmpty(identityExamObject.identityExam.decision) ) {
			if (identityExamObject.identityExam.decision==responseDecisionTypes.Passed || 
				identityExamObject.identityExam.decision==responseDecisionTypes.FourthQuestionPassed){
				return "Y";
			}else if (identityExamObject.identityExam.decision==responseDecisionTypes.Failed){
				return "F";
			}else{
				return "E";
			}
		}
		return "E";
	}
	//---------------------------------------------------------------------------------------
	function isIdentityExamResponseValid () {
		return (!_.isEmpty(identityExamObject) &&
				!_.isEmpty(identityExamObject.identityExam) &&
				!_.isEmpty(getQuestions())); 
	}
	//---------------------------------------------------------------------------------------
	function isFourthQuestionPresentInResponse() {		
		return (isIdentityExamResponseValid() &&
				(getDecision () == responseDecisionTypes.FourthQuestionExist)); 
	}
	//---------------------------------------------------------------------------------------
	function isExaminationPassed () {
		return (!_.isEmpty(identityExamObject) && !_.isEmpty(identityExamObject.identityExam) &&
				(getDecision () == responseDecisionTypes.Passed ||
						getDecision () == responseDecisionTypes.FourthQuestionPassed) &&
				_.isEmpty(getQuestions())); 
	}
	//---------------------------------------------------------------------------------------
	function isExaminationFailed () {
		return (!_.isEmpty(identityExamObject) && !_.isEmpty(identityExamObject.identityExam) &&
				getDecision () == responseDecisionTypes.Failed &&
				_.isEmpty(getQuestions()));  
	}
	//---------------------------------------------------------------------------------------
	function getIdentityExamObject() {
		if (identityExamObject && !_.isEmpty(identityExamObject) && !_.isEmpty(identityExamObject.identityExam)){			
			return identityExamObject;
		} else {
			return "";
		}		
	}
	//---------------------------------------------------------------------------------------
	function setIdentityExamObject(identityExam) {
		identityExamObject = identityExam;		
	}
	
	
//	var nwe = {"data":{
//		"identityExam":{
//			"id":"0",
//			"transactionId":"1377246066355",
//			"result":"FAILED",
//			"state":"completed",
//			"error":[]}}};
//
//
	/*this.testData = {"data":{
		"identityExam":{
			"id":"1225610",
			"transactionId":"1377182570117",
			"score":0.00000,
			"state":"issued",
			"questions":[
			    {
				"id":"159",
				"text":"YOUR RESIDENTIAL TELEPHONE NUMBER IS REGISTERED UNDER WHICH OF THE FOLLOWING NAMES?",
				"state":"un-scored",
				"maxTimeToAnswer":45,
				"possibleAnswers":[
                                        {
                                        	"text":"FRICKS",
                                        	"id":0},
                                        {
                                        	"text":"BAPAT",
                                        	"id":1},
                                        {
                                        	"text":"NONE OF THE ABOVE",
                                        	"id":2}]},
                            {
                                "id":"151",
                                "text":"IN 2013, YOU LIVED IN WHICH OF THE FOLLOWING CITIES?",
                                "state":"un-scored",
                                "maxTimeToAnswer":120,
                                "possibleAnswers":[
                                         {
                                        	 "text":"TRAIL",
                                        	 "id":0},
                                         {
                                        	 "text":"WELLAND",
                                        	 "id":1},
                                         {
                                        	 "text":"NONE OF THE ABOVE",
                                        	 "id":2}]},
                            {
                                "id":"148",
                                "text":"FROM THE FOLLOWING LIST, SELECT ONE OF YOUR PREVIOUS ADDRESSES.",
                                "state":"un-scored",
                                "maxTimeToAnswer":45,
                                "possibleAnswers":[
                                        {
                                        "text":"128 BEDDINGTON",
                                        "id":0},
                                        {
                                        "text":"555 PRINCE CHARLES",
                                        "id":1},
                                        {
                                        "text":"NONE OF THE ABOVE",
                                        "id":2}]}]
	}}}; */
};
