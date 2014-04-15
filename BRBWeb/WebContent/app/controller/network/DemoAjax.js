ensureNamespaceExists();

BRB.DemoAjax = function() {
	var logPrefix = '[BRB.DemoAjax]::';
	
	this.AJAXrequest = function(serviceName, httpVerb, requestParams, successCallback, failureCallback, beforeSendCall, onCompleteCall, isSilent, callTimeout) {
		var sMethod = 'AJAXrequest() serviceName: ' + serviceName;
		BRB.Log(logPrefix + sMethod);
		
		var response = null;
		
		switch(serviceName){
			case BRB.ServiceNameEnum.Login:
				response = BRB.Demo_Login;
				break;
			case BRB.ServiceNameEnum.IsAlive:
				response = BRB.Demo_IsAlive;
				break;
			case BRB.ServiceNameEnum.AddressLookup:
				response = BRB.Demo_LookupResponse;
				break;
			case BRB.ServiceNameEnum.AccountApplication:
				response = BRB.Demo_AccountApplication;
				break;
			default:
				BRB.Log(logPrefix + sMethod + " ERROR!!! service name is not supported by DemoAjax!");
				return false;
		}
		
		setTimeout(	function(){successCallback(response);}, 500);
		setTimeout(	function(){onCompleteCall(response);}, 1000);

		return true;
	};
};
/*BRB.Demo_Login = {
	error: false,
	msg: "SUCCESSFUL Authentication and authorization for user ",
	data: {
		statusCode: "200",
		LTPAToken: "DemoToken",
		checkLocation:{
			message: "SUCCESS",
			outletName: "DEMO STORE ",
			outletNumber: "1",
			outletStreet: "100 Demo Street ",
			outletCity: "Oakville ",
			outletProvince: "ON",
			outletPostal: "L6L0C6"
		}
	}
};*/

BRB.Demo_Login  = {
	"error":false,
	"msg":"SUCCESSFUL Authentication and authorization for user epamfmr",
	"data":{
		"statusCode":"200",
		"LTPAToken":"LtpaToken2\u003dKKVEycPUafb+23A7QAHpyWxKvuUfCIcgZu2BfqVGeauJvUqk35jmx34G3m0c8y+Vcln+6bgj0VtoNSn5ayWUsGQftWKM9EBCejecU7vIVS6PeV19jIezB++5jxCZsmnEw8kwjrOaIR0GqhtsbSPYkjqVU4p7TW5FmsF3uoo1n9xPyLk2Kh7xZRchZ4UpEhexe7fd3fjCnot+MvtLJDn2CUaxeNMHOR00+DUfeglstJHeWCdX7uc9eH/mu+kKRl6gHtPGlkSXEhMc8p3BDgj4hT4AZyBOYaQ33p4XNvZ2iuycwReVFw3U9JSELkL/zTriNk2DsV46dgazhKe14xEoFr/Ztti8JH9lBpU/BKQ0E9Ac8C1tPRd6TQPYLnoyuT9k+1DvoKwW7oJjFnexk6uBJiM2qFphzsUTu8O59vkva4EFHBSIMhxF8r5Pw9f54Ln+jtZpsgjhYTGTweyAgKR4xRiDcB12LBPpFYpcmF0rSPddbMcD76lBXUWqVrWWHnoSy0d0q3c+aDa+nmDxQxBtulflCfHb3joMnlUJRCo1U6K+m1Afzxbomh+u4/4wH9GKZnm/bY5s5C8fdjrF61lLXNek8IvPu3l1wJKUwMJ712TLQk7aY33kOmTRZVzWl7jRbUDlWq88LJGQLlnomyYuk+65d817tXqxdjCxGjEVi/jyrCNA6u/KeWVuWKq2oVGwxtX8KhQm7veSFzwYne/+DdSBzD5Vh7mNKyZDU2ySOEo\u003d; Path\u003d/",
		"message":"SUCCESSFUL Authentication and authorization for user epamfmr",
		"roles":"[\"FMR\",\"BRB-ADMIN\"]",
		"checkLocation":{
			"message":"SUCCESS",
			"outletName":"DEMO STORE ",
			"outletNumber":"1",
			"outletStreet":"100 Demo Street ",
			"outletCity":"Oakville ",
			"outletProvince":"ON",
			"outletPostal":"L6L0C6"
		}
	}
};


BRB.Demo_LookupResponse = {
	"standardAddressLine1":["100 Demo Street"],
	"standardAddressLine2":[""],
	"standardCityName":"Oakville",
	"standardProvince":"ON",
	"standardPostalCode":"L6L0C6",
	"addressStatus":"N"
};

BRB.Demo_IsAlive = {
	error: false,
	msg: "IsAliveServlet success response",
	data: true
};


BRB.Demo_AccountApplication = {
	"error":false,
	"msg":"",
	"data":{
		//'4111111111111111'
		"accountNumber":	"I6npN1A6bWwT1hnzHfXGdPYKPnuHgsMBMJUu6oOvOk+oR9qBZ6rcUyGf6nAVVoBPRKHfjF+CPr3z7NURE/hDgk9tkNBoLHHjOShgcC/NmsFwMxd19TcuLREQXaSAETakPkrxMyqtooju84CCuRK9MmU0qDafjevQhx0Dbea0Stc4b1J33uxYztHnzqGQ1bCLhyEhOXjvwTE7tnTepTMPQZD99a9bdcJUw0heX1gW9Rd3f0q0jI8MYaf3H03wSxneey5AKJNrCjiVorSdhugjJ2130WzU6wqzRDwpDOFbb8Z8H0Gki7sANeFXqszX5poyIcYEEPScY7AbvX2rKLNnjuDM41d1KQcFq/k5I8qZPCDnhTP1VLHZJM9hXL/xlQ20EAH2cTGlNwFzpgRtyAHPUrKol4ZBcEHmptd0XlwxuqHUFcTdffvs0wdrUz4HkB0JxGnkU9elMt72AO5dazpkUhstBRsCFYtFCx3yB0yWpHlk8jR5qGr8veansQmJ/NnwdrJ3xe8sCOV2prE4XA/O7QLKgjDLtGYQMxIor2sOkP7WdD+CK0NikL+lfbchTGaOInT31MwDSeUhQ+gf3O9keTpIJSjnoExNzvpSfcbM4Ui4B8DAaPwpxuMb/hNamaKzw1ebDyUYQXDi1Q9qDfKH/0Whr91D0KCUsXWK+TSyhRg=",
		"expiryDate":"1705",
		"creditLimit":"200",
		"apr":"25.99",
		"cashAPR":"25.99",
		"appStatus":"APPROVED",
		"customerValueInd":"1"
	}
};
