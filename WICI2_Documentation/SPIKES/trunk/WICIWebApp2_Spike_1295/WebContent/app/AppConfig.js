ensureNamespaceExists();

WICI._AppConfig = function() {
	this.ConnectivityConfig = {
		// config - general
		REQUEST_PROCESS_TIMEOUT: 		300000,
		SINGLE_CONNECTION_TIMEOUT: 		30000,
		IS_ALIVE_REQUEST_INTERVAL: 		30000,
		SUBMIT_BTN_CHECK_INTERVAL: 		500,
	};

	this.PollingConfig = {
		// config for interval polling requests
		POLL_DELAY: 			20000,
		POLL_MAXTIME:			300000
	};

	this.BackgroundServicesConfig = {
		AUTO_LOGOUT_TIMEOUT:				30,			//minutes
		AUTO_ABANDON_APPLICATION_TIMEOUT:	15,			//minutes
		IDLE_INCREMENT:						60000,		//in msec == 1 minute
		TRIGGER_ACTION_SERVICE_UPDATE:		60000		//Setting this to 1 minute
	};

	this.SubmissionConfig = {
		MAX_SUBMISSION_RETRIES	:			3
	};

	this.LanguageEnum = {
		english: "en",
		french: "fr"
	};

	this.DemoUserCredentials = {
	    login: "demofmr",
	    password: "demofmr2013",
	    locationID: "1",
	    agentID: "demo",
	    employerID:"e"
	};

	this.AdminBypassCredentials = {
	    login: "admin",
	    password: "epam2013ctfs",
	    locationID: "1",
	    agentID: "admin",
	    employerID:"e"
    };

	this.TestPrintConfig = {
		MAX_TEST_PRINT_RETRIES:	1
	};
};

WICI.AppConfig = new WICI._AppConfig();