describe(
		"BRB.IdentityExamModel",
		function() {
			var logPrefix = "[TEST::BRB.IdentityExamModel::] ";
			var model;

			beforeEach(function() {
				model = new BRB.IdentityExamModel();
			});
			it("Test model retrieving error", function() {
				var m = model;
				m.setIdentityExamObject(retrievedError);
				expect(m.getError()!==null).toBeTruthy();
				expect(m.getId()!==null).toBeTruthy();
				expect(m.getBrbTransactionId()!==null).toBeTruthy();
				expect(m.getResult()=="FAILED").toBeTruthy();
				expect(m.getState()!=="issued").toBeTruthy();
			});
			it("Test model questions", function() {
				var m = model;
				m.setIdentityExamObject(retrievedThreeQuestions);
				expect(m.getError()==="").toBeTruthy();
				expect(m.getQuestions().length==3).toBeTruthy();
				expect(isNaN(m.getQuestions()[0].id)).toBeFalsy();
			});
			it("Test model validating method", function() {
				var m = model;
				m.setIdentityExamObject(retrievedThreeQuestions);
				expect(m.isIdentityExamResponseValid()).toBeTruthy();
				m.setIdentityExamObject(retrievedFourthQuestion);
				expect(m.isIdentityExamResponseValid()).toBeTruthy();
				m.setIdentityExamObject(retrievedError);
				expect(m.isIdentityExamResponseValid()).toBeFalsy();
			});
			it("will ensure isFourthQuestionPresentInResponse returns true only in if retrived 4th question", function() {
				var m = model;
				m.setIdentityExamObject(retrievedFourthQuestion);
		    	expect(m.isFourthQuestionPresentInResponse()).toEqual(true);
		    	m.setIdentityExamObject(retrievedError);
		    	expect(m.isFourthQuestionPresentInResponse()).toEqual(false);
		    	m.setIdentityExamObject(retrievedThreeQuestions);
		    	expect(m.isFourthQuestionPresentInResponse()).toEqual(false);
		    });
			it("will ensure isExaminationFailed returns correct value", function() {
				var m = model;
				m.setIdentityExamObject(retrievedFourthQuestion);
		    	expect(m.isExaminationFailed()).toEqual(false);
		    	m.setIdentityExamObject(retrievedError);
		    	expect(m.isExaminationFailed()).toEqual(true);
		    	m.setIdentityExamObject(retrievedThreeQuestions);
		    	expect(m.isExaminationFailed()).toEqual(false);
		    	m.setIdentityExamObject();
		    	expect(m.isExaminationFailed()).toEqual(false);
		    });
			it("will ensure isExaminationPassed returns correct value", function() {
				var m = model;
				m.setIdentityExamObject(retrievedFourthQuestion);
		    	expect(m.isExaminationPassed()).toEqual(false);
		    	m.setIdentityExamObject(retrievedError);
		    	expect(m.isExaminationPassed()).toEqual(false);
		    	m.setIdentityExamObject(retrievedThreeQuestions);
		    	expect(m.isExaminationPassed()).toEqual(false);
		    	m.setIdentityExamObject();
		    	expect(m.isExaminationPassed()).toEqual(false);
//				need add correct passed response  mock and test that part to 
		    });
			
			var retrievedError = 
				{
					"identityExam" : {
						"id" : "0",
						"transactionId" : "1377246066355",
						"result" : "FAILED",
						"state" : "completed",
						"error" : []
				}
			};
			var retrievedThreeQuestions = 
				{
					"identityExam" : {
						"id" : "1225610",
						"transactionId" : "1377182570117",
						"score" : 0.00000,
						"state" : "issued",
						"questions" : [
								{
									"id" : "159",
									"text" : "YOUR RESIDENTIAL TELEPHONE NUMBER IS REGISTERED UNDER WHICH OF THE FOLLOWING NAMES?",
									"state" : "un-scored",
									"maxTimeToAnswer" : 45,
									"possibleAnswers" : [ {
										"text" : "FRICKS",
										"id" : 0
									}, {
										"text" : "BAPAT",
										"id" : 1
									}, {
										"text" : "NONE OF THE ABOVE",
										"id" : 2
									} ]
								},
								{
									"id" : "151",
									"text" : "IN 2013, YOU LIVED IN WHICH OF THE FOLLOWING CITIES?",
									"state" : "un-scored",
									"maxTimeToAnswer" : 120,
									"possibleAnswers" : [ {
										"text" : "TRAIL",
										"id" : 0
									}, {
										"text" : "WELLAND",
										"id" : 1
									}, {
										"text" : "NONE OF THE ABOVE",
										"id" : 2
									} ]
								},
								{
									"id" : "148",
									"text" : "FROM THE FOLLOWING LIST, SELECT ONE OF YOUR PREVIOUS ADDRESSES.",
									"state" : "un-scored",
									"maxTimeToAnswer" : 45,
									"possibleAnswers" : [ {
										"text" : "128 BEDDINGTON",
										"id" : 0
									}, {
										"text" : "555 PRINCE CHARLES",
										"id" : 1
									}, {
										"text" : "NONE OF THE ABOVE",
										"id" : 2
									} ]
								} ]
				}
			};
			var retrievedFourthQuestion = 
					{
						"identityExam" : {
							"externalId" : "1377113337997",
							"sessionId" : "1224734",
							"score" : 0.00000,
							"decision" : "FAILED 4TH QUESTION",
							"questions" : [
									{
										"id" : "150",
										"text" : "IN THE PAST 5 YEARS, WHICH PROVINCE HAVE YOU LIVED IN?",
										"state" : "un-scored",
										"maxTimeToAnswer" : 45,
										"possibleAnswers" : [ {
											"text" : "MANITOBA",
											"id" : 0
										}, {
											"text" : "ONTARIO",
											"id" : 1
										}, {
											"text" : "NONE OF THE ABOVE",
											"id" : 2
										} ]
									}
								 ]
					}
				};
			
		});
	