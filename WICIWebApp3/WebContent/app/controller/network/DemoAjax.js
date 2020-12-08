ensureNamespaceExists();

WICI.DemoAjax = function() {
	var logPrefix = '[WICI.DemoAjax]::';

	this.AJAXrequest = function(serviceName, httpVerb, requestParams,
			successCallback, failureCallback, beforeSendCall, onCompleteCall,
			isSilent, callTimeout) {
		var sMethod = 'AJAXrequest() serviceName: ' + serviceName;
		console.log(logPrefix + sMethod);

		var response = null;

		switch (serviceName) {
		case WICI.ServiceNameEnum.Login:
			response = WICI.Demo_Login;
			break;
		case WICI.ServiceNameEnum.IsAlive:
			response = WICI.Demo_IsAlive;
			break;
		case WICI.ServiceNameEnum.AddressLookup:
			response = WICI.Demo_LookupResponse;
			break;
		case WICI.ServiceNameEnum.AccountApplication:
			response = WICI.Demo_AccountApplication;
			break;
		case WICI.ServiceNameEnum.InitAccountApplication:
			response = WICI.Demo_InitAccountApplicationResponse;
			break;
		case WICI.ServiceNameEnum.PollAccountApplicationResponse:
			response = WICI.Demo_PollAccountApplicationResponse;
			break;
		case WICI.ServiceNameEnum.InstantIssuance:
			response = WICI.Demo_InstantIssuance;
			break;
		case WICI.ServiceNameEnum.TMXProfile:
			response = WICI.Demo_TMXProfile;
			break;
		default:
			console.log(logPrefix + sMethod
					+ " ERROR!!! service name is not supported by DemoAjax!");
			return false;
		}

		setTimeout(function() {
			successCallback(response);
		}, 500);
		setTimeout(function() {
			onCompleteCall(response);
		}, 1000);

		return true;
	};
};

WICI.Demo_Login = {
	"error" : false,
	"msg" : "SUCCESSFUL Authentication and authorization for user epamfmr",
	"data" : {
		"statusCode" : "200",
		"LTPAToken" : "LtpaToken2\u003dKKVEycPUafb+23A7QAHpyWxKvuUfCIcgZu2BfqVGeauJvUqk35jmx34G3m0c8y+Vcln+6bgj0VtoNSn5ayWUsGQftWKM9EBCejecU7vIVS6PeV19jIezB++5jxCZsmnEw8kwjrOaIR0GqhtsbSPYkjqVU4p7TW5FmsF3uoo1n9xPyLk2Kh7xZRchZ4UpEhexe7fd3fjCnot+MvtLJDn2CUaxeNMHOR00+DUfeglstJHeWCdX7uc9eH/mu+kKRl6gHtPGlkSXEhMc8p3BDgj4hT4AZyBOYaQ33p4XNvZ2iuycwReVFw3U9JSELkL/zTriNk2DsV46dgazhKe14xEoFr/Ztti8JH9lBpU/BKQ0E9Ac8C1tPRd6TQPYLnoyuT9k+1DvoKwW7oJjFnexk6uBJiM2qFphzsUTu8O59vkva4EFHBSIMhxF8r5Pw9f54Ln+jtZpsgjhYTGTweyAgKR4xRiDcB12LBPpFYpcmF0rSPddbMcD76lBXUWqVrWWHnoSy0d0q3c+aDa+nmDxQxBtulflCfHb3joMnlUJRCo1U6K+m1Afzxbomh+u4/4wH9GKZnm/bY5s5C8fdjrF61lLXNek8IvPu3l1wJKUwMJ712TLQk7aY33kOmTRZVzWl7jRbUDlWq88LJGQLlnomyYuk+65d817tXqxdjCxGjEVi/jyrCNA6u/KeWVuWKq2oVGwxtX8KhQm7veSFzwYne/+DdSBzD5Vh7mNKyZDU2ySOEo\u003d; Path\u003d/",
		"message" : "SUCCESSFUL Authentication and authorization for user epamfmr",
		"roles" : "[\"FMR\",\"WICI-ADMIN\"]",
		"enableEnstreamAuth": true,
		"isDebugMode": true,
		"checkLocation" : {
			"message" : "SUCCESS",
			"outletName" : "DEMO STORE ",
			"outletNumber" : "1",
			"outletStreet" : "100 Demo Street ",
			"outletCity" : "Oakville ",
			"outletProvince" : "ON",
			"outletPostal" : "L6L0C6"
		}
	}
};

WICI.Demo_LookupResponse = {
	"error" : false,
	"msg" : "SUCCESSFUL find address for user epamfmr",
	"data" : {
		"standardAddressLine1" : [ "100 Demo Street", "200 DEMO STREET" ],
		"standardAddressLine2" : [ "" ],
		"standardCityName" : "Oakville",
		"standardProvince" : "ON",
		"standardPostalCode" : "L6L0C6",
		"addressStatus" : "N"
	}
};

WICI.Demo_IsAlive = {
	error : false,
	msg : "IsAliveServlet success response",
	data : true
};

WICI.Demo_PollAccountApplicationResponse = {
		"error": false,
		"msg": "COMPLETE",
		"data": {
			"ResponseData": {
				"error": false,
				"msg": "",
				"data": {
					//"accountNumber": "m8MWlBMYaM0WWA/0Lib1xojvk+OwOjKvgAQOzl7uccnzTYdvRJxAtZ9mhqlnyf19YwwJSxXx0prHM1vfPXDsaUqAlXGcJWQPKNhvxz6urfCvrQ881IL0v5CorFusB5bovHYZRcPLRfTHLXr38bNxlI6h6zxARxurt14lxKKusjuCf+MCWs3KJu79flDp/+qNh1rbpJkvbNz0eCge+WZCFE9j5zxZQtOvJKA1WyTBaoNuB7y3sti2H2x3I2JOpEZvOXRPunSqKJasRNKApIDOA5P4b1lTI9IBk1AJh5zfbL4fAcg+tcKRLkII4fupcRSKpzGaPMM4+XMzMrIwBqCMxo5tvO/nDXD06iGSyHBjdOn0asvfIp3MARKqR+1znXPLMQXTJTTAJN/1artOu1CYyNUx3q9V5ElRQ8Sah2ac2vhkF/y5tYgpE7RwYf3f3ZdCVcDOZI/kidv6gGfyqemhrQlNY7KU4IvdAuspvz1ixzv7W+9TwxpG1eDemgCVMXKRfkZYir/YnSDbdXyHbYaY/CNoQvTHOT1wQ0z4ryygpREwbnlm43dZOC/WRE7soO/XImBasvoNW3eivEKjA5Z3rDBG+PeFmsXZcjcmxYtT1rZ/yQVIwldLts6WZanWF/BM0NtCbPldn960qlrNtvdv2TfQlGpwUhgYxaqrIOx0My0\u003d",
					"accountNumber": "4111111111111111",
					//"maskedPAN": "525995XXXXXX2729",
					//"encryptedPan": "YZX5CmVEvNuH/6fS9/VfATc7n5UQ62M1rkcylq4/4WwLuDtTwqe4SkZOZItvw6nBjAOxtOAbbk5sm+/CRap54Nq5l8udmJE4bbbwi16RpLB1zJXdsKoBF+/HTRhCzs1urBE7nacdLnNYFuOmKIdSTevyBpbgbVfOhIXOdbizVZfvav2sywTaZmdqiADOt64YmT91T2q0/IDCIIxR/ln/ZC5jH8Y3kE54B6RFTqYlZTTH+oa558vyaCasZgSVgxl9Gj2rnlOuy3x/u4VIhH85YgObjvFJ2Daw+jPR8aOk2L2ycY6bSdZ6enNtZKX4JvXU5j5on+Rbaj0wRn4gykndSY5DS1/XfPSPq1+r4fRNW9jrSXvP+zITYRYzGp6HJ5aXM9mgq5ppmjzSLlPJPcXWPPlsmgY2nw7UUQg1DYUboBjgbnSHCAbd92uyBDCHkhE+PUc4Ol9Q1BrF/bqMMMUvID4EhGMm4IqPRZuj5n0mZ+4+ZN8nU8lcGXDidRq5kdqzrhLQLbAw2CYiaKb12Ec0NCVIYFQsX7Qh00jstOxQGjS+klC3jR1SOzyTGM6QHU+pbSiQ2MQJyxmZSuuIwm/BiIih0Ed3XQtaslRl/WbyGjVOfVO0Wyz+n0WYJzKsZxwrbNipr4y0cp5C6crvPL1T3qdI0DuHdiWMEbWbZFi6DhM\u003d",
					"expiryDate": "1705",
					"creditLimit": "5000",
					"apr": "19.99",
					"cashAPR": "22.99",
					"appStatus": "APPROVED",
					"customerValueInd": "1",
					"respCardType": "OMX",
					"queueName" : "DIIAPPRV"
				}
			},
			"RetrievalToken": "EA496B1568BD",
			"TransactionState": "COMPLETE",
			"consentGranted": "N",
			"externalReferencId": "0A48FE6D-BD61-4CEC-B523-EA496B1568BD",
			"currentTelephone":"8564125987"
		}
	}; 

WICI.Demo_InitAccountApplicationResponse = {
	error : false,
	msg : "SUBMIT",
	data : "demoTransactionID"
};

WICI.Demo_AccountApplication = {
		"error": false,
		"msg": "COMPLETE",
		"data": {
			"ResponseData": {
				"error": false,
				"msg": "",
				"data": {
					// "accountNumber": "m8MWlBMYaM0WWA/0Lib1xojvk+OwOjKvgAQOzl7uccnzTYdvRJxAtZ9mhqlnyf19YwwJSxXx0prHM1vfPXDsaUqAlXGcJWQPKNhvxz6urfCvrQ881IL0v5CorFusB5bovHYZRcPLRfTHLXr38bNxlI6h6zxARxurt14lxKKusjuCf+MCWs3KJu79flDp/+qNh1rbpJkvbNz0eCge+WZCFE9j5zxZQtOvJKA1WyTBaoNuB7y3sti2H2x3I2JOpEZvOXRPunSqKJasRNKApIDOA5P4b1lTI9IBk1AJh5zfbL4fAcg+tcKRLkII4fupcRSKpzGaPMM4+XMzMrIwBqCMxo5tvO/nDXD06iGSyHBjdOn0asvfIp3MARKqR+1znXPLMQXTJTTAJN/1artOu1CYyNUx3q9V5ElRQ8Sah2ac2vhkF/y5tYgpE7RwYf3f3ZdCVcDOZI/kidv6gGfyqemhrQlNY7KU4IvdAuspvz1ixzv7W+9TwxpG1eDemgCVMXKRfkZYir/YnSDbdXyHbYaY/CNoQvTHOT1wQ0z4ryygpREwbnlm43dZOC/WRE7soO/XImBasvoNW3eivEKjA5Z3rDBG+PeFmsXZcjcmxYtT1rZ/yQVIwldLts6WZanWF/BM0NtCbPldn960qlrNtvdv2TfQlGpwUhgYxaqrIOx0My0\u003d",
					"accountNumber": "4111111111111111",
					"maskedPAN": "525995XXXXXX2729",
					"encryptedPan": "YZX5CmVEvNuH/6fS9/VfATc7n5UQ62M1rkcylq4/4WwLuDtTwqe4SkZOZItvw6nBjAOxtOAbbk5sm+/CRap54Nq5l8udmJE4bbbwi16RpLB1zJXdsKoBF+/HTRhCzs1urBE7nacdLnNYFuOmKIdSTevyBpbgbVfOhIXOdbizVZfvav2sywTaZmdqiADOt64YmT91T2q0/IDCIIxR/ln/ZC5jH8Y3kE54B6RFTqYlZTTH+oa558vyaCasZgSVgxl9Gj2rnlOuy3x/u4VIhH85YgObjvFJ2Daw+jPR8aOk2L2ycY6bSdZ6enNtZKX4JvXU5j5on+Rbaj0wRn4gykndSY5DS1/XfPSPq1+r4fRNW9jrSXvP+zITYRYzGp6HJ5aXM9mgq5ppmjzSLlPJPcXWPPlsmgY2nw7UUQg1DYUboBjgbnSHCAbd92uyBDCHkhE+PUc4Ol9Q1BrF/bqMMMUvID4EhGMm4IqPRZuj5n0mZ+4+ZN8nU8lcGXDidRq5kdqzrhLQLbAw2CYiaKb12Ec0NCVIYFQsX7Qh00jstOxQGjS+klC3jR1SOzyTGM6QHU+pbSiQ2MQJyxmZSuuIwm/BiIih0Ed3XQtaslRl/WbyGjVOfVO0Wyz+n0WYJzKsZxwrbNipr4y0cp5C6crvPL1T3qdI0DuHdiWMEbWbZFi6DhM\u003d",
					"expiryDate": "1705",
					"creditLimit": "5000",
					"apr": "19.99",
					"cashAPR": "22.99",
					"appStatus": "APPROVED",
					"customerValueInd": "1",
					"respCardType": "OMX"
				}
			},
			"RetrievalToken": "EA496B1568BD",
			"TransactionState": "COMPLETE",
			"consentGranted": "Y",
			"externalReferencId": "0A48FE6D-BD61-4CEC-B523-EA496B1568BD",
			"currentTelephone":"8564125987"
		}
	};

WICI.Demo_InstantIssuance = {
		"error" : false,
		"msg" : "",
		"enstreamResponse" : "Y"
	};

WICI.Demo_TMXProfile = {
		"error": false,
		"msg": "",
		"data": {
			"fpsTrustscore": 100,
			"requestResult": "success",
			"tmxProfileID": "9cac5adf-2692-4ecf-ad88-b07054dca6c8"
		}
	}
