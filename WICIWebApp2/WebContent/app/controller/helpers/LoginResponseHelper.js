ensureNamespaceExists();

WICI.LoginResponseHelper = function() {
	
	var 	loginResponseObject = null;
	
	this.setLoginResponseObject = setLoginResponseObject;
	this.loginSuccessful = loginSuccessful;
	this.getLoginResponseMessage = getLoginResponseMessage;
	this.getBundleCodeForErrorMessage = getBundleCodeForErrorMessage;
	this.incorrectApkVersion = incorrectApkVersion;
	this.getLatestDictionaryInfo = getLatestDictionaryInfo;
	this.getPendRetrievalConfig = getPendRetrievalConfig;
	
	function setLoginResponseObject( argLoginResponseObject ){
		loginResponseObject = argLoginResponseObject;
	}
	
	function loginSuccessful(){
		return ( loginResponseObject && !loginResponseObject.error && loginResponseObject.data.statusCode==="200" && loginResponseObject.data.LTPAToken!=="");
	}
	
	function getLoginResponseMessage(){
		return loginResponseObject.msg;
	}
	
	function incorrectApkVersion(){
		return loginResponseObject.data && loginResponseObject.data.statusCode==="203";
	}
	
	function getBundleCodeForErrorMessage(){
		if( loginResponseObject && loginResponseObject.msg === "Invalid Employer Id. Please correct and try again"){
			return "loginScreen_EmployerIDLookup_FailedMessage";	
		}
		return "loginScreen_FailureMessage";
	}
	function getLatestDictionaryInfo(){
		return loginResponseObject.data.dictionaryInfo;
	}
	function getPendRetrievalConfig(){
		return loginResponseObject.data.pendRetrievalConfig;
	}
	
};