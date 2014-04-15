ensureNamespaceExists();

WICI.LoginResponseHelper = function() {
	
	var 	loginResponseObject = null;
	
	this.setLoginResponseObject = setLoginResponseObject;
	this.loginSuccessful = loginSuccessful;
	this.getLoginResponseMessage = getLoginResponseMessage;
	this.getBundleCodeForErrorMessage = getBundleCodeForErrorMessage;
	
	function setLoginResponseObject( argLoginResponseObject ){
		loginResponseObject = argLoginResponseObject;
	}
	
	function loginSuccessful(){
		return ( loginResponseObject && !loginResponseObject.error && loginResponseObject.data.statusCode==="200" && loginResponseObject.data.LTPAToken!=="");
	}
	
	function getLoginResponseMessage(){
		return loginResponseObject.msg;
	}
	
	function getBundleCodeForErrorMessage(){
		if( loginResponseObject && loginResponseObject.msg && loginResponseObject.msg==="Invalid Employer Id. Please correct and try again"){
			return "loginScreen_EmployerIDLookup_FailedMessage";	
		}
		return "loginScreen_FailureMessage";
	}
};