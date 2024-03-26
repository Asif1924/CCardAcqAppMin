ensureNamespaceExists();

GENERICWEBAPP._AppConfig = function() {
	this.ConnectivityConfig = {
		// config - general
		REQUEST_PROCESS_TIMEOUT: 		300000,
		SINGLE_CONNECTION_TIMEOUT: 		30000,
		IS_ALIVE_REQUEST_INTERVAL: 		30000,
		SUBMIT_BTN_CHECK_INTERVAL: 		500,
		SCRIPT_REQUEST_INTERVAL: 		300000,
		AUTO_CONNECT_WIFI : true,
		AUTO_CONNECT_RETRIES : 2
	};

	this.BackgroundServicesConfig = {
		AUTO_LOGOUT_TIMEOUT:				8,			//minutes
		AUTO_ABANDON_APPLICATION_TIMEOUT:	7,			//minutes
		TRIGGER_ACTION_SERVICE_UPDATE:		1000		//Setting this to 1 minute
	};

	this.SubmissionConfig = {
		MAX_SUBMISSION_RETRIES	:			3
	};

	this.APPLICATION_TIMEOUT = 29 * 60 * 1000;

	this.LanguageEnum = {
		english: "en",
		french: "fr"
	};


    this.scrollTimeOut = 1000;
};

GENERICWEBAPP.AppConfig = new GENERICWEBAPP._AppConfig();
