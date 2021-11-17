ensureNamespaceExists();

WICI._AppConfig = function() {
	this.ConnectivityConfig = {
		// config - general
		REQUEST_PROCESS_TIMEOUT: 		300000,
		SINGLE_CONNECTION_TIMEOUT: 		60000,
		IS_ALIVE_REQUEST_INTERVAL: 		30000,
		SUBMIT_BTN_CHECK_INTERVAL: 		500,
		SCRIPT_REQUEST_INTERVAL: 		300000,
		AUTO_CONNECT_WIFI : true,
		AUTO_CONNECT_RETRIES : 2,
		INSTANTISSUANCE_REQUEST_INTERVAL: 120000, // 2 minutes
		TMXEMAILAGE_REQUEST_INTERVAL: 	  5000,   // 5 seconds
		CANADAPOST_REQUEST_INTERVAL: 	  10000,  // 10 seconds
		ABBREVIATECITYNAME_REQUEST_INTERVAL: 	  5000,   // 5 seconds
	};

	this.PollingConfig = {
		// config for interval polling requests
		POLL_DELAY: 			20000,
		POLL_MAXTIME:			300000
	};

	this.BackgroundServicesConfig = {
		AUTO_LOGOUT_TIMEOUT:				8,			//minutes
		AUTO_ABANDON_APPLICATION_TIMEOUT:	7,			//minutes
		TRIGGER_ACTION_SERVICE_UPDATE:		1000,		//Setting this to 1 minute
		PRINTER_ERROR_APPLICATION_TIMEOUT:	3,			//Setting this to 3 minutes
	};

	this.SubmissionConfig = {
		MAX_SUBMISSION_RETRIES	:			3
	};

	this.LanguageEnum = {
		english: "en",
		french: "fr"
	};

	this.DemoCredentials = {
		CSR: {
			firstName: "demo",
		    lastName: "demo",
		    employerID: ["E"]
		},
		FMR: {
		    agentID: "demo",
		    // US4309
		    employerID: ["D", "K", "C", "F", "J", "0", "G", "L", "M", "N", "P", "Q", "R", "S", "T", "U"]
		},
		admin: {
			employerID: ["D"],
		    agentID: "admin"
		}

	};

	this.TestPrintConfig = {
		MAX_TEST_PRINT_RETRIES:	1,
		TEST_PRINT_ON_LOGIN: false,
		timeout: 180*1000,
		dialogTimeout: 2*60*1000
	};
	// US4164
	this.approvedPrintConfig = {
		MAX_APPROVED_PRINT_RETRIES:	1,
		TEST_PRINT_ON_LOGIN: false,
		timeout: 180*1000,
		dialogTimeout: 2*60*1000
	};
	
	// US4282
	this.homePhoneDisplayConfig = {
		MAX_HOME_PHONE_DISPLAY:	1
	};

	this.defaultPrinterMacAddress = null;

	this.PrintDialogAutoCloseDelay = 120000;

    this.BluetoothConfig = {
        TOGGLEBT_AT_LOGIN: true
    };

    this.localStorageKeys = {
    	version: "DICTIONARY_VERSION",
    	en: "DICTIONARY_LOCATION_EN",
    	fr: "DICTIONARY_LOCATION_FR"
    };

    // For the second release we will have this feature turned off.
    this.PendingFeature = { 
    	Interval:	30000, //Time in Millis 
    	MaxTries: 10, //Max retries until it stops 
    	TreatPendsLikeDeclines: false, //AA: If true, NO Pending Page is shown; If false, Pending Page is shown along with functionality
    	AllowAppRetrieval: true,
    	MaxRetrievalsForApproved: null //We get this from the server
    };

};

WICI.AppConfig = new WICI._AppConfig();
