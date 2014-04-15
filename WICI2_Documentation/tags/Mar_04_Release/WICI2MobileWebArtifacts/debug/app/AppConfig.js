ensureNamespaceExists();

WICI._AppConfig = function() {
	this.ConnectivityConfig = {
		// config - general
		REQUEST_PROCESS_TIMEOUT: 300000,
		SINGLE_CONNECTION_TIMEOUT: 30000,

	};
	
	this.LanguageEnum = {
		english: "en",
		french: "fr"
	};
};

WICI.AppConfig = new WICI._AppConfig();