ensureNamespaceExists();

BRB._AppConfig = function() {
	this.ConnectivityConfig = {
		// config - general
		REQUEST_PROCESS_TIMEOUT		: 300000,
		SINGLE_CONNECTION_TIMEOUT	: 300000,
		IS_ALIVE_REQUEST_INTERVAL	: 30000,
		SUBMIT_BTN_CHECK_INTERVAL	: 500,
		// US4281
		SCRIPT_REQUEST_INTERVAL		: 300000
	};

	this.BackgroundServicesConfig = {
		SESSION_TIMEOUT									:	30,			// in minutes
		AUTO_ABANDON_APPLICATION_TIMEOUT				:	15,			//minutes
		IDLE_INCREMENT									:	60000,		//in msec == 1 minute
		TRIGGER_ACTION_SERVICE_UPDATE					:	60000,		//Setting this to 1 minute
		TIME_TO_FINISH_APP_SESSION_IF_USER_INACTIVE		:	10,			//time in minutes after which if User inactive session will finish
		// US4653
		TIME_TO_SHOW_POPUP_MESSAGE_IF_USER_INACTIVE		:	9			//time in minutes after which if User is inactive for 9 minutes, show popup message to continue 
	};

	this.LanguageEnum = {
		english: "en",
		french: "fr"
	};
	
	// US4281
	this.localStorageKeys = {
    	version: "DICTIONARY_VERSION",
    	en: "DICTIONARY_LOCATION_EN",
	  	fr: "DICTIONARY_LOCATION_FR"
	};

	this.TrackingScreenID = null;
};

BRB.AppConfig = new BRB._AppConfig();