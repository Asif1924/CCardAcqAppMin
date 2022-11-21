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
		case WICI.ServiceNameEnum.AbbreviateCityname:
			response = WICI.Demo_AbbreviatedCityname;
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
		case WICI.ServiceNameEnum.RetrieveJobDescription:
			response = WICI.Demo_RetrieveJobDescription;
			break;
		case WICI.ServiceNameEnum.CheckCPEligibility:
			response = WICI.Demo_CheckCPEligibility;
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
				"outletProvince" : "QC",
				"outletPostal" : "L6L0C6",
				"CTFSStoreNo" : "4398",
			},
            "trainingModuleEffectiveDate":"2022-12-1",
			"checkAttestation_List":"CT|PC"
		}

};

WICI.Demo_LookupResponse = {
		"error": false,
		"msg": "",
		"data": {
			"city": "Grimsby",
			"postalCode": "L3M 0B5",
			"addressLine1": "100 Demo Street",
			"province": "ON",
			"addressValidation": false
		}
	}

WICI.Demo_AbbreviatedCityname = {
		"error": false,
		"msg": "",
		"data": {
			"abrivatedCityLookup": "Y",
			"abbrevaitedCityName": "ST-MICH-D-BEL",
		}
	}

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
	};
WICI.Demo_CheckCPEligibility = {
		"error": false,
		"msg": "",
		"data": {
			"cpType": "CP_Complete",
			"enhancementId": "7CRP",
			"planId": "01"
		}
	};
	

// WICI-9 
WICI.Demo_RetrieveJobDescription = {
	 	"error": false,
	 	"msg": "",
	 	"data": {
	 	    "jobDescriptionList": [
	 	        {
	 	            "englishDescription": "AP Clerk",
	 	            "frenchDescription": "Commis aux comptes fournisseurs",
	 	            "storedValue": "AP Clerk"
	 	        },
	 	        {
	 	            "englishDescription": "AR Clerk",
	 	            "frenchDescription": "Commis aux comptes clients",
	 	            "storedValue": "AR Clerk"
	 	        },
	 	        {
	 	            "englishDescription": "Accessory Designer",
	 	            "frenchDescription": "Concepteur d’accessoires",
	 	            "storedValue": "Accessory Designer"
	 	        },
	 	        {
	 	            "englishDescription": "Account Director",
	 	            "frenchDescription": "Directeur des comptes",
	 	            "storedValue": "Account Director"
	 	        },
	 	        {
	 	            "englishDescription": "Account Executive",
	 	            "frenchDescription": "Chargé de compte",
	 	            "storedValue": "Account Executive"
	 	        },
	 	        {
	 	            "englishDescription": "Account Manager",
	 	            "frenchDescription": "Directeur de comptes",
	 	            "storedValue": "Account Manager"
	 	        },
	 	        {
	 	            "englishDescription": "Account Rep",
	 	            "frenchDescription": "Représentant de compte",
	 	            "storedValue": "Account Rep"
	 	        },
	 	        {
	 	            "englishDescription": "Accountant",
	 	            "frenchDescription": "Comptable",
	 	            "storedValue": "Accountant"
	 	        },
	 	        {
	 	            "englishDescription": "Accounting Analyst",
	 	            "frenchDescription": "Analyste comptable",
	 	            "storedValue": "Accounting Analyst"
	 	        },
	 	        {
	 	            "englishDescription": "Accounting Clerk",
	 	            "frenchDescription": "Commis comptable",
	 	            "storedValue": "Accounting Clerk"
	 	        },
	 	        {
	 	            "englishDescription": "Accounting Director",
	 	            "frenchDescription": "Directeur comptable",
	 	            "storedValue": "Accounting Director"
	 	        },
	 	        {
	 	            "englishDescription": "Accounts Payable",
	 	            "frenchDescription": "Comptes fournisseurs",
	 	            "storedValue": "Accounts Payable"
	 	        },
	 	        {
	 	            "englishDescription": "Accounts Receivable",
	 	            "frenchDescription": "Comptes client",
	 	            "storedValue": "Accounts Receivable"
	 	        },
	 	        {
	 	            "englishDescription": "Actor",
	 	            "frenchDescription": "Acteur",
	 	            "storedValue": "Actor"
	 	        },
	 	        {
	 	            "englishDescription": "Actuary",
	 	            "frenchDescription": "Actuaire",
	 	            "storedValue": "Actuary"
	 	        },
	 	        {
	 	            "englishDescription": "Admin Assistant",
	 	            "frenchDescription": "Adjoint administratif",
	 	            "storedValue": "Admin Assistant"
	 	        },
	 	        {
	 	            "englishDescription": "Administrator",
	 	            "frenchDescription": "Administrateur",
	 	            "storedValue": "Administrator"
	 	        },
	 	        {
	 	            "englishDescription": "Advertising Designer",
	 	            "frenchDescription": "Concepteur publicitaire",
	 	            "storedValue": "Advertising Designe"
	 	        },
	 	        {
	 	            "englishDescription": "Air Ramp Attendant",
	 	            "frenchDescription": "Préposé de passerelle",
	 	            "storedValue": "Air Ramp Attendant"
	 	        },
	 	        {
	 	            "englishDescription": "Aircraft Inspector",
	 	            "frenchDescription": "Inspecteur d’avions",
	 	            "storedValue": "Aircraft Inspector"
	 	        },
	 	        {
	 	            "englishDescription": "Aircraft Mechanic",
	 	            "frenchDescription": "Mécanicien d’aéronef",
	 	            "storedValue": "Aircraft Mechanic"
	 	        },
	 	        {
	 	            "englishDescription": "Airport Manager",
	 	            "frenchDescription": "Directeur d’aéroport",
	 	            "storedValue": "Airport Manager"
	 	        },
	 	        {
	 	            "englishDescription": "Amusement Operator",
	 	            "frenchDescription": "Opérateur de loisirs",
	 	            "storedValue": "Amusement Operator"
	 	        },
	 	        {
	 	            "englishDescription": "Anchor",
	 	            "frenchDescription": "Présentateur de nouvelles",
	 	            "storedValue": "Anchor"
	 	        },
	 	        {
	 	            "englishDescription": "Anesthesiologist",
	 	            "frenchDescription": "Anesthésiste",
	 	            "storedValue": "Anesthesiologist"
	 	        },
	 	        {
	 	            "englishDescription": "Animal / Pet Care",
	 	            "frenchDescription": "Soins des animaux",
	 	            "storedValue": "Animal / Pet Care"
	 	        },
	 	        {
	 	            "englishDescription": "Animator",
	 	            "frenchDescription": "Animateur",
	 	            "storedValue": "Animator"
	 	        },
	 	        {
	 	            "englishDescription": "Appliance Repairman",
	 	            "frenchDescription": "Réparateur d’appareils",
	 	            "storedValue": "Appliance Repairman"
	 	        },
	 	        {
	 	            "englishDescription": "Appraiser",
	 	            "frenchDescription": "Estimateur",
	 	            "storedValue": "Appraiser"
	 	        },
	 	        {
	 	            "englishDescription": "Arborist",
	 	            "frenchDescription": "Arboriculteur",
	 	            "storedValue": "Arborist"
	 	        },
	 	        {
	 	            "englishDescription": "Architect",
	 	            "frenchDescription": "Architecte",
	 	            "storedValue": "Architect"
	 	        },
	 	        {
	 	            "englishDescription": "Archivist",
	 	            "frenchDescription": "Archiviste",
	 	            "storedValue": "Archivist"
	 	        },
	 	        {
	 	            "englishDescription": "Arena Attendant",
	 	            "frenchDescription": "Préposé d’aréna",
	 	            "storedValue": "Arena Attendant"
	 	        },
	 	        {
	 	            "englishDescription": "Armed Forces General",
	 	            "frenchDescription": "Général des forces armées",
	 	            "storedValue": "Armed Forces Genera"
	 	        },
	 	        {
	 	            "englishDescription": "Armed Forces Officer",
	 	            "frenchDescription": "Officier des forces armées",
	 	            "storedValue": "Armed Forces Office"
	 	        },
	 	        {
	 	            "englishDescription": "Art Administrator",
	 	            "frenchDescription": "Administrateur en art",
	 	            "storedValue": "Art Administrator"
	 	        },
	 	        {
	 	            "englishDescription": "Art Director",
	 	            "frenchDescription": "Directeur artistique",
	 	            "storedValue": "Art Director"
	 	        },
	 	        {
	 	            "englishDescription": "Art Therapist",
	 	            "frenchDescription": "Art-thérapeute",
	 	            "storedValue": "Art Therapist"
	 	        },
	 	        {
	 	            "englishDescription": "Artisan",
	 	            "frenchDescription": "Artisan",
	 	            "storedValue": "Artisan"
	 	        },
	 	        {
	 	            "englishDescription": "Assembler",
	 	            "frenchDescription": "Monteur",
	 	            "storedValue": "Assembler"
	 	        },
	 	        {
	 	            "englishDescription": "Assessor",
	 	            "frenchDescription": "Évaluateur",
	 	            "storedValue": "Assessor"
	 	        },
	 	        {
	 	            "englishDescription": "Asset Manager",
	 	            "frenchDescription": "Gestionnaire de l’actif",
	 	            "storedValue": "Asset Manager"
	 	        },
	 	        {
	 	            "englishDescription": "Assistant",
	 	            "frenchDescription": "Assistant",
	 	            "storedValue": "Assistant"
	 	        },
	 	        {
	 	            "englishDescription": "Assistant Coach",
	 	            "frenchDescription": "Entraîneur adjoint",
	 	            "storedValue": "Assistant Coach"
	 	        },
	 	        {
	 	            "englishDescription": "Assistant Dean",
	 	            "frenchDescription": "Vice-doyen",
	 	            "storedValue": "Assistant Dean"
	 	        },
	 	        {
	 	            "englishDescription": "Assistant Director",
	 	            "frenchDescription": "Directeur adjoint",
	 	            "storedValue": "Assistant Director"
	 	        },
	 	        {
	 	            "englishDescription": "Astronomer",
	 	            "frenchDescription": "Astronome",
	 	            "storedValue": "Astronomer"
	 	        },
	 	        {
	 	            "englishDescription": "Athlete",
	 	            "frenchDescription": "Athlète",
	 	            "storedValue": "Athlete"
	 	        },
	 	        {
	 	            "englishDescription": "Athletic Trainer",
	 	            "frenchDescription": "Entraîneur sportif",
	 	            "storedValue": "Athletic Trainer"
	 	        },
	 	        {
	 	            "englishDescription": "Audio Engineer",
	 	            "frenchDescription": "Ingénieur audio",
	 	            "storedValue": "Audio Engineer"
	 	        },
	 	        {
	 	            "englishDescription": "Audio Visual Tech",
	 	            "frenchDescription": "Technicien en audiovisuelle",
	 	            "storedValue": "Audio Visual Tech"
	 	        },
	 	        {
	 	            "englishDescription": "Audiologist",
	 	            "frenchDescription": "Audiologiste",
	 	            "storedValue": "Audiologist"
	 	        },
	 	        {
	 	            "englishDescription": "Auditor",
	 	            "frenchDescription": "Vérificateur",
	 	            "storedValue": "Auditor"
	 	        },
	 	        {
	 	            "englishDescription": "Author",
	 	            "frenchDescription": "Auteur",
	 	            "storedValue": "Author"
	 	        },
	 	        {
	 	            "englishDescription": "Auto Body Repairer",
	 	            "frenchDescription": "Réparateur de carrosserie",
	 	            "storedValue": "Auto Body Repairer"
	 	        },
	 	        {
	 	            "englishDescription": "Auto Service Tech",
	 	            "frenchDescription": "Technicien du centre-auto",
	 	            "storedValue": "Auto Service Tech"
	 	        },
	 	        {
	 	            "englishDescription": "Bailiff",
	 	            "frenchDescription": "Huissier",
	 	            "storedValue": "Bailiff"
	 	        },
	 	        {
	 	            "englishDescription": "Baker",
	 	            "frenchDescription": "Boulanger",
	 	            "storedValue": "Baker"
	 	        },
	 	        {
	 	            "englishDescription": "Bank Manager",
	 	            "frenchDescription": "Directeur de banque",
	 	            "storedValue": "Bank Manager"
	 	        },
	 	        {
	 	            "englishDescription": "Bank Teller",
	 	            "frenchDescription": "Employé de banque",
	 	            "storedValue": "Bank Teller"
	 	        },
	 	        {
	 	            "englishDescription": "Banker",
	 	            "frenchDescription": "Banquier",
	 	            "storedValue": "Banker"
	 	        },
	 	        {
	 	            "englishDescription": "Banquet Manager",
	 	            "frenchDescription": "Directeur de banquet",
	 	            "storedValue": "Banquet Manager"
	 	        },
	 	        {
	 	            "englishDescription": "Barber",
	 	            "frenchDescription": "Barber",
	 	            "storedValue": "Barber"
	 	        },
	 	        {
	 	            "englishDescription": "Bartender",
	 	            "frenchDescription": "Barman",
	 	            "storedValue": "Bartender"
	 	        },
	 	        {
	 	            "englishDescription": "Bellman",
	 	            "frenchDescription": "Chasseur",
	 	            "storedValue": "Bellman"
	 	        },
	 	        {
	 	            "englishDescription": "Benefits Analyst",
	 	            "frenchDescription": "Analyste des avantages sociaux",
	 	            "storedValue": "Benefits Analyst"
	 	        },
	 	        {
	 	            "englishDescription": "Benefits Director",
	 	            "frenchDescription": "Directeur des avantages sociaux",
	 	            "storedValue": "Benefits Director"
	 	        },
	 	        {
	 	            "englishDescription": "Benefits Manager",
	 	            "frenchDescription": "Responsable des avantages sociaux",
	 	            "storedValue": "Benefits Manager"
	 	        },
	 	        {
	 	            "englishDescription": "Beverage Manager",
	 	            "frenchDescription": "Responsable des boissons",
	 	            "storedValue": "Beverage Manager"
	 	        },
	 	        {
	 	            "englishDescription": "Biologist",
	 	            "frenchDescription": "Biologiste",
	 	            "storedValue": "Biologist"
	 	        },
	 	        {
	 	            "englishDescription": "Blaster",
	 	            "frenchDescription": "Dynamiteur",
	 	            "storedValue": "Blaster"
	 	        },
	 	        {
	 	            "englishDescription": "Boat Operator",
	 	            "frenchDescription": "Opérateur de bateau",
	 	            "storedValue": "Boat Operator"
	 	        },
	 	        {
	 	            "englishDescription": "Boilermaker",
	 	            "frenchDescription": "Chaudronnier",
	 	            "storedValue": "Boilermaker"
	 	        },
	 	        {
	 	            "englishDescription": "Book Editor",
	 	            "frenchDescription": "Éditeur de livres",
	 	            "storedValue": "Book Editor"
	 	        },
	 	        {
	 	            "englishDescription": "Bookkeeper",
	 	            "frenchDescription": "Comptable",
	 	            "storedValue": "Bookkeeper"
	 	        },
	 	        {
	 	            "englishDescription": "Boom Operator",
	 	            "frenchDescription": "Opérateur de rampe",
	 	            "storedValue": "Boom Operator"
	 	        },
	 	        {
	 	            "englishDescription": "Border Agent",
	 	            "frenchDescription": "Agent frontalier",
	 	            "storedValue": "Border Agent"
	 	        },
	 	        {
	 	            "englishDescription": "Branch Manager",
	 	            "frenchDescription": "Gérant de succursale",
	 	            "storedValue": "Branch Manager"
	 	        },
	 	        {
	 	            "englishDescription": "Brand Strategist",
	 	            "frenchDescription": "Stratège de marque",
	 	            "storedValue": "Brand Strategist"
	 	        },
	 	        {
	 	            "englishDescription": "Bricklayer",
	 	            "frenchDescription": "Briqueteur",
	 	            "storedValue": "Bricklayer"
	 	        },
	 	        {
	 	            "englishDescription": "Broadcast Tech",
	 	            "frenchDescription": "Technicien de diffusion",
	 	            "storedValue": "Broadcast Tech"
	 	        },
	 	        {
	 	            "englishDescription": "Broadcaster",
	 	            "frenchDescription": "Diffuseur",
	 	            "storedValue": "Broadcaster"
	 	        },
	 	        {
	 	            "englishDescription": "Broiler Cook",
	 	            "frenchDescription": "Rôtisseur",
	 	            "storedValue": "Broiler Cook"
	 	        },
	 	        {
	 	            "englishDescription": "Broker",
	 	            "frenchDescription": "Courtier",
	 	            "storedValue": "Broker"
	 	        },
	 	        {
	 	            "englishDescription": "Budget Analyst",
	 	            "frenchDescription": "Analyste du budget",
	 	            "storedValue": "Budget Analyst"
	 	        },
	 	        {
	 	            "englishDescription": "Builder Commercial",
	 	            "frenchDescription": "Entrepreneur commercial",
	 	            "storedValue": "Builder Commercial"
	 	        },
	 	        {
	 	            "englishDescription": "Builder Residential",
	 	            "frenchDescription": "Entrepreneur résidentiel",
	 	            "storedValue": "Builder Residential"
	 	        },
	 	        {
	 	            "englishDescription": "Building Inspector",
	 	            "frenchDescription": "Inspecteur des bâtiments",
	 	            "storedValue": "Building Inspector"
	 	        },
	 	        {
	 	            "englishDescription": "Building Surveyor",
	 	            "frenchDescription": "Arpenteur de bâtiment",
	 	            "storedValue": "Building Surveyor"
	 	        },
	 	        {
	 	            "englishDescription": "Bus Driver",
	 	            "frenchDescription": "Conducteur d’autobus",
	 	            "storedValue": "Bus Driver"
	 	        },
	 	        {
	 	            "englishDescription": "Bus Person",
	 	            "frenchDescription": "Commis-débarrasseur",
	 	            "storedValue": "Bus Person"
	 	        },
	 	        {
	 	            "englishDescription": "Business Analyst",
	 	            "frenchDescription": "Analyste commerciale",
	 	            "storedValue": "Business Analyst"
	 	        },
	 	        {
	 	            "englishDescription": "Business Writer",
	 	            "frenchDescription": "Rédacteur économique",
	 	            "storedValue": "Business Writer"
	 	        },
	 	        {
	 	            "englishDescription": "Busser",
	 	            "frenchDescription": "Commis-débarrasseur",
	 	            "storedValue": "Busser"
	 	        },
	 	        {
	 	            "englishDescription": "Butcher",
	 	            "frenchDescription": "Boucher",
	 	            "storedValue": "Butcher"
	 	        },
	 	        {
	 	            "englishDescription": "By-law Officer",
	 	            "frenchDescription": "Agent d’application des règlements",
	 	            "storedValue": "By-law Officer"
	 	        },
	 	        {
	 	            "englishDescription": "CEO",
	 	            "frenchDescription": "Chef de la direction",
	 	            "storedValue": "CEO"
	 	        },
	 	        {
	 	            "englishDescription": "CFO",
	 	            "frenchDescription": "Chef des finances",
	 	            "storedValue": "CFO"
	 	        },
	 	        {
	 	            "englishDescription": "COO",
	 	            "frenchDescription": "Directeur des opérations",
	 	            "storedValue": "COO"
	 	        },
	 	        {
	 	            "englishDescription": "Cabinet Maker",
	 	            "frenchDescription": "Ébéniste",
	 	            "storedValue": "Cabinet Maker"
	 	        },
	 	        {
	 	            "englishDescription": "Cable / TV Tech",
	 	            "frenchDescription": "Technicien câble/TV",
	 	            "storedValue": "Cable / TV Tech"
	 	        },
	 	        {
	 	            "englishDescription": "Cable Worker",
	 	            "frenchDescription": "Câblo-opérateur",
	 	            "storedValue": "Cable Worker"
	 	        },
	 	        {
	 	            "englishDescription": "Camera Operator",
	 	            "frenchDescription": "Opérateur de caméra",
	 	            "storedValue": "Camera Operator"
	 	        },
	 	        {
	 	            "englishDescription": "Cardio Technologist",
	 	            "frenchDescription": "Cardiotechnologue",
	 	            "storedValue": "Cardio Technologist"
	 	        },
	 	        {
	 	            "englishDescription": "Caregiver",
	 	            "frenchDescription": "Personnel soignant",
	 	            "storedValue": "Caregiver"
	 	        },
	 	        {
	 	            "englishDescription": "Caretaker",
	 	            "frenchDescription": "Gardien",
	 	            "storedValue": "Caretaker"
	 	        },
	 	        {
	 	            "englishDescription": "Carpenter",
	 	            "frenchDescription": "Charpentier",
	 	            "storedValue": "Carpenter"
	 	        },
	 	        {
	 	            "englishDescription": "Case Manager",
	 	            "frenchDescription": "Responsable de cas",
	 	            "storedValue": "Case Manager"
	 	        },
	 	        {
	 	            "englishDescription": "Cashier",
	 	            "frenchDescription": "Caissier",
	 	            "storedValue": "Cashier"
	 	        },
	 	        {
	 	            "englishDescription": "Casting Director",
	 	            "frenchDescription": "Directeur de distribution",
	 	            "storedValue": "Casting Director"
	 	        },
	 	        {
	 	            "englishDescription": "Caterer",
	 	            "frenchDescription": "Traiteur",
	 	            "storedValue": "Caterer"
	 	        },
	 	        {
	 	            "englishDescription": "Catering Manager",
	 	            "frenchDescription": "Directeur de la restauration",
	 	            "storedValue": "Catering Manager"
	 	        },
	 	        {
	 	            "englishDescription": "Ceramics Artist",
	 	            "frenchDescription": "Artiste céramiste",
	 	            "storedValue": "Ceramics Artist"
	 	        },
	 	        {
	 	            "englishDescription": "Chain Saw Operator",
	 	            "frenchDescription": "Opérateur de tronçonneuse",
	 	            "storedValue": "Chain Saw Operator"
	 	        },
	 	        {
	 	            "englishDescription": "Chauffeur",
	 	            "frenchDescription": "Conducteur",
	 	            "storedValue": "Chauffeur"
	 	        },
	 	        {
	 	            "englishDescription": "Chef",
	 	            "frenchDescription": "Chef",
	 	            "storedValue": "Chef"
	 	        },
	 	        {
	 	            "englishDescription": "Chemist",
	 	            "frenchDescription": "Chimiste",
	 	            "storedValue": "Chemist"
	 	        },
	 	        {
	 	            "englishDescription": "Chief HR Officer",
	 	            "frenchDescription": "Directeur des RH",
	 	            "storedValue": "Chief HR Officer"
	 	        },
	 	        {
	 	            "englishDescription": "Chief Info Officer",
	 	            "frenchDescription": "Directeur de l’information",
	 	            "storedValue": "Chief Info Officer"
	 	        },
	 	        {
	 	            "englishDescription": "Chief Marketing Officer",
	 	            "frenchDescription": "Directeur du marketing",
	 	            "storedValue": "Chief Marketing Off"
	 	        },
	 	        {
	 	            "englishDescription": "Chief Operating Officer",
	 	            "frenchDescription": "Chef de l’exploitation",
	 	            "storedValue": "Chief Operating Off"
	 	        },
	 	        {
	 	            "englishDescription": "Chief People Officer",
	 	            "frenchDescription": "Chef du personnel",
	 	            "storedValue": "Chief People Office"
	 	        },
	 	        {
	 	            "englishDescription": "Chief Records Officer",
	 	            "frenchDescription": "Chef des dossiers",
	 	            "storedValue": "Chief Records Offic"
	 	        },
	 	        {
	 	            "englishDescription": "Chief Risk Officer",
	 	            "frenchDescription": "Chef de la gestion des risques",
	 	            "storedValue": "Chief Risk Officer"
	 	        },
	 	        {
	 	            "englishDescription": "Child Care Worker",
	 	            "frenchDescription": "Éducateur de la petite enfance",
	 	            "storedValue": "Child Care Worker"
	 	        },
	 	        {
	 	            "englishDescription": "Childhood Educator",
	 	            "frenchDescription": "Éducateur à la petite enfance",
	 	            "storedValue": "Childhood Educator"
	 	        },
	 	        {
	 	            "englishDescription": "Chiropractor",
	 	            "frenchDescription": "Chiropraticien",
	 	            "storedValue": "Chiropractor"
	 	        },
	 	        {
	 	            "englishDescription": "Choreographer",
	 	            "frenchDescription": "Chorégraphe",
	 	            "storedValue": "Choreographer"
	 	        },
	 	        {
	 	            "englishDescription": "Cinematographer",
	 	            "frenchDescription": "Directeur de la photographie",
	 	            "storedValue": "Cinematographer"
	 	        },
	 	        {
	 	            "englishDescription": "Claims Adjuster",
	 	            "frenchDescription": "Expert en sinistres",
	 	            "storedValue": "Claims Adjuster"
	 	        },
	 	        {
	 	            "englishDescription": "Claims Examiner",
	 	            "frenchDescription": "Inspecteur des réclamations",
	 	            "storedValue": "Claims Examiner"
	 	        },
	 	        {
	 	            "englishDescription": "Cleaner",
	 	            "frenchDescription": "Nettoyeur",
	 	            "storedValue": "Cleaner"
	 	        },
	 	        {
	 	            "englishDescription": "Clerk",
	 	            "frenchDescription": "Préposé",
	 	            "storedValue": "Clerk"
	 	        },
	 	        {
	 	            "englishDescription": "Climatologist",
	 	            "frenchDescription": "Climatologue",
	 	            "storedValue": "Climatologist"
	 	        },
	 	        {
	 	            "englishDescription": "Coach",
	 	            "frenchDescription": "Entraîneur",
	 	            "storedValue": "Coach"
	 	        },
	 	        {
	 	            "englishDescription": "Collection Agent",
	 	            "frenchDescription": "Agent de recouvrement",
	 	            "storedValue": "Collection Agent"
	 	        },
	 	        {
	 	            "englishDescription": "Collector",
	 	            "frenchDescription": "Encaisseur",
	 	            "storedValue": "Collector"
	 	        },
	 	        {
	 	            "englishDescription": "Colourist",
	 	            "frenchDescription": "Coloriste",
	 	            "storedValue": "Colourist"
	 	        },
	 	        {
	 	            "englishDescription": "Comedian",
	 	            "frenchDescription": "Comédien",
	 	            "storedValue": "Comedian"
	 	        },
	 	        {
	 	            "englishDescription": "Commentator",
	 	            "frenchDescription": "Commentateur",
	 	            "storedValue": "Commentator"
	 	        },
	 	        {
	 	            "englishDescription": "Commercial Installer",
	 	            "frenchDescription": "Installateur commercial",
	 	            "storedValue": "Commercial Installe"
	 	        },
	 	        {
	 	            "englishDescription": "Comms Assistant",
	 	            "frenchDescription": "Assistant aux communications",
	 	            "storedValue": "Comms Assistant"
	 	        },
	 	        {
	 	            "englishDescription": "Comms Officer",
	 	            "frenchDescription": "Responsable des communications",
	 	            "storedValue": "Comms Officer"
	 	        },
	 	        {
	 	            "englishDescription": "Comms Specialist",
	 	            "frenchDescription": "Spécialiste des communications",
	 	            "storedValue": "Comms Specialist"
	 	        },
	 	        {
	 	            "englishDescription": "Community Services",
	 	            "frenchDescription": "Services communautaires",
	 	            "storedValue": "Community Services"
	 	        },
	 	        {
	 	            "englishDescription": "Compliance Analyst",
	 	            "frenchDescription": "Analyste de conformité",
	 	            "storedValue": "Compliance Analyst"
	 	        },
	 	        {
	 	            "englishDescription": "Compliance Manager",
	 	            "frenchDescription": "Chef de la conformité",
	 	            "storedValue": "Compliance Manager"
	 	        },
	 	        {
	 	            "englishDescription": "Compliance Officer",
	 	            "frenchDescription": "Responsable de la conformité",
	 	            "storedValue": "Compliance Officer"
	 	        },
	 	        {
	 	            "englishDescription": "Composer",
	 	            "frenchDescription": "Compositeur",
	 	            "storedValue": "Composer"
	 	        },
	 	        {
	 	            "englishDescription": "Computer Animator",
	 	            "frenchDescription": "Animateur par ordinateur",
	 	            "storedValue": "Computer Animator"
	 	        },
	 	        {
	 	            "englishDescription": "Computer Programmer",
	 	            "frenchDescription": "Programmeur informatique",
	 	            "storedValue": "Computer Programmer"
	 	        },
	 	        {
	 	            "englishDescription": "Computer Technician",
	 	            "frenchDescription": "Technicien informatique",
	 	            "storedValue": "Computer Technician"
	 	        },
	 	        {
	 	            "englishDescription": "Concept Artist",
	 	            "frenchDescription": "Artiste conceptuel",
	 	            "storedValue": "Concept Artist"
	 	        },
	 	        {
	 	            "englishDescription": "Concrete Finisher",
	 	            "frenchDescription": "Cimentier-finisseur",
	 	            "storedValue": "Concrete Finisher"
	 	        },
	 	        {
	 	            "englishDescription": "Concrete Maker",
	 	            "frenchDescription": "Cimentier",
	 	            "storedValue": "Concrete Maker"
	 	        },
	 	        {
	 	            "englishDescription": "Conductor",
	 	            "frenchDescription": "Chef",
	 	            "storedValue": "Conductor"
	 	        },
	 	        {
	 	            "englishDescription": "Conference Planner",
	 	            "frenchDescription": "Planificateur de conférences",
	 	            "storedValue": "Conference Planner"
	 	        },
	 	        {
	 	            "englishDescription": "Conservator",
	 	            "frenchDescription": "Conservateur",
	 	            "storedValue": "Conservator"
	 	        },
	 	        {
	 	            "englishDescription": "Constable",
	 	            "frenchDescription": "Agent de police",
	 	            "storedValue": "Constable"
	 	        },
	 	        {
	 	            "englishDescription": "Construction Coordinator",
	 	            "frenchDescription": "Coordinateur de la construction",
	 	            "storedValue": "Construction Coordi"
	 	        },
	 	        {
	 	            "englishDescription": "Construction Engineer",
	 	            "frenchDescription": "Ingénieur en construction",
	 	            "storedValue": "Construction Engine"
	 	        },
	 	        {
	 	            "englishDescription": "Construction Manager",
	 	            "frenchDescription": "Chef de la construction",
	 	            "storedValue": "Construction Manage"
	 	        },
	 	        {
	 	            "englishDescription": "Contract Manager",
	 	            "frenchDescription": "Gestionnaire des contrats",
	 	            "storedValue": "Contract Manager"
	 	        },
	 	        {
	 	            "englishDescription": "Contractor",
	 	            "frenchDescription": "Entrepreneurs",
	 	            "storedValue": "Contractor"
	 	        },
	 	        {
	 	            "englishDescription": "Controller",
	 	            "frenchDescription": "Contrôleur",
	 	            "storedValue": "Controller"
	 	        },
	 	        {
	 	            "englishDescription": "Cook",
	 	            "frenchDescription": "Cuisinier",
	 	            "storedValue": "Cook"
	 	        },
	 	        {
	 	            "englishDescription": "Coordinator",
	 	            "frenchDescription": "Coordonnateur",
	 	            "storedValue": "Coordinator"
	 	        },
	 	        {
	 	            "englishDescription": "Copy Editor",
	 	            "frenchDescription": "Réviseur",
	 	            "storedValue": "Copy Editor"
	 	        },
	 	        {
	 	            "englishDescription": "Copy Writer",
	 	            "frenchDescription": "Rédacteur",
	 	            "storedValue": "Copy Writer"
	 	        },
	 	        {
	 	            "englishDescription": "Coroner",
	 	            "frenchDescription": "Coroner",
	 	            "storedValue": "Coroner"
	 	        },
	 	        {
	 	            "englishDescription": "Corp Affairs Manager",
	 	            "frenchDescription": "Responsable des affaires commerciales",
	 	            "storedValue": "Corp Affairs Manage"
	 	        },
	 	        {
	 	            "englishDescription": "Correctional Officer",
	 	            "frenchDescription": "Agent correctionnel",
	 	            "storedValue": "Correctional Office"
	 	        },
	 	        {
	 	            "englishDescription": "Cosmetologist",
	 	            "frenchDescription": "Cosmétologue",
	 	            "storedValue": "Cosmetologist"
	 	        },
	 	        {
	 	            "englishDescription": "Counter Server",
	 	            "frenchDescription": "Serveur",
	 	            "storedValue": "Counter Server"
	 	        },
	 	        {
	 	            "englishDescription": "Courier",
	 	            "frenchDescription": "Messager",
	 	            "storedValue": "Courier"
	 	        },
	 	        {
	 	            "englishDescription": "Court Clerk",
	 	            "frenchDescription": "Greffier",
	 	            "storedValue": "Court Clerk"
	 	        },
	 	        {
	 	            "englishDescription": "Court Officer",
	 	            "frenchDescription": "Huissier",
	 	            "storedValue": "Court Officer"
	 	        },
	 	        {
	 	            "englishDescription": "Court Reporter",
	 	            "frenchDescription": "Sténographe judiciaire",
	 	            "storedValue": "Court Reporter"
	 	        },
	 	        {
	 	            "englishDescription": "Craftsperson",
	 	            "frenchDescription": "Artisan",
	 	            "storedValue": "Craftsperson"
	 	        },
	 	        {
	 	            "englishDescription": "Crane Operator",
	 	            "frenchDescription": "Opérateur de grue",
	 	            "storedValue": "Crane Operator"
	 	        },
	 	        {
	 	            "englishDescription": "Creative Director",
	 	            "frenchDescription": "Directeur artistique",
	 	            "storedValue": "Creative Director"
	 	        },
	 	        {
	 	            "englishDescription": "Credit Analyst",
	 	            "frenchDescription": "Analyste de crédit",
	 	            "storedValue": "Credit Analyst"
	 	        },
	 	        {
	 	            "englishDescription": "Credit Authorizer",
	 	            "frenchDescription": "Autorisateur de crédit",
	 	            "storedValue": "Credit Authorizer"
	 	        },
	 	        {
	 	            "englishDescription": "Credit Counselor",
	 	            "frenchDescription": "Conseiller en crédit",
	 	            "storedValue": "Credit Counselor"
	 	        },
	 	        {
	 	            "englishDescription": "Credit Risk Manager",
	 	            "frenchDescription": "Gestionnaire de risque",
	 	            "storedValue": "Credit Risk Manager"
	 	        },
	 	        {
	 	            "englishDescription": "Crew Member",
	 	            "frenchDescription": "Membre de l’équipe",
	 	            "storedValue": "Crew Member"
	 	        },
	 	        {
	 	            "englishDescription": "Crop Inspector",
	 	            "frenchDescription": "Inspecteur de récolte",
	 	            "storedValue": "Crop Inspector"
	 	        },
	 	        {
	 	            "englishDescription": "Crossing Guard",
	 	            "frenchDescription": "Brigadier",
	 	            "storedValue": "Crossing Guard"
	 	        },
	 	        {
	 	            "englishDescription": "Curator",
	 	            "frenchDescription": "Conservateur",
	 	            "storedValue": "Curator"
	 	        },
	 	        {
	 	            "englishDescription": "Cust Serv Manager",
	 	            "frenchDescription": "Responsable du service client",
	 	            "storedValue": "Cust Serv Manager"
	 	        },
	 	        {
	 	            "englishDescription": "Cust Service Rep",
	 	            "frenchDescription": "Représentant du service client",
	 	            "storedValue": "Cust Service Rep"
	 	        },
	 	        {
	 	            "englishDescription": "Custodian",
	 	            "frenchDescription": "Détenteur",
	 	            "storedValue": "Custodian"
	 	        },
	 	        {
	 	            "englishDescription": "Customs Broker",
	 	            "frenchDescription": "Courtier en douane",
	 	            "storedValue": "Customs Broker"
	 	        },
	 	        {
	 	            "englishDescription": "Customs Officer",
	 	            "frenchDescription": "Douanier",
	 	            "storedValue": "Customs Officer"
	 	        },
	 	        {
	 	            "englishDescription": "Dancer",
	 	            "frenchDescription": "Danseur",
	 	            "storedValue": "Dancer"
	 	        },
	 	        {
	 	            "englishDescription": "Data Analyst",
	 	            "frenchDescription": "Analyste des données",
	 	            "storedValue": "Data Analyst"
	 	        },
	 	        {
	 	            "englishDescription": "Data Entry Clerk",
	 	            "frenchDescription": "Commis à la saisie de données",
	 	            "storedValue": "Data Entry Clerk"
	 	        },
	 	        {
	 	            "englishDescription": "Daycare Staff",
	 	            "frenchDescription": "Personnel de garderie",
	 	            "storedValue": "Daycare Staff"
	 	        },
	 	        {
	 	            "englishDescription": "Dean",
	 	            "frenchDescription": "Doyen",
	 	            "storedValue": "Dean"
	 	        },
	 	        {
	 	            "englishDescription": "Deckhand",
	 	            "frenchDescription": "Matelot",
	 	            "storedValue": "Deckhand"
	 	        },
	 	        {
	 	            "englishDescription": "Delivery Driver",
	 	            "frenchDescription": "Livreur",
	 	            "storedValue": "Delivery Driver"
	 	        },
	 	        {
	 	            "englishDescription": "Dental Assistant",
	 	            "frenchDescription": "Assistant dentaire",
	 	            "storedValue": "Dental Assistant"
	 	        },
	 	        {
	 	            "englishDescription": "Dental Hygienist",
	 	            "frenchDescription": "Hygiéniste dentaire",
	 	            "storedValue": "Dental Hygienist"
	 	        },
	 	        {
	 	            "englishDescription": "Dental Technician",
	 	            "frenchDescription": "Technicien dentaire",
	 	            "storedValue": "Dental Technician"
	 	        },
	 	        {
	 	            "englishDescription": "Dental Technologist",
	 	            "frenchDescription": "Technologue dentaire",
	 	            "storedValue": "Dental Technologist"
	 	        },
	 	        {
	 	            "englishDescription": "Dental Therapist",
	 	            "frenchDescription": "Thérapeute dentaire",
	 	            "storedValue": "Dental Therapist"
	 	        },
	 	        {
	 	            "englishDescription": "Dentist",
	 	            "frenchDescription": "Dentiste",
	 	            "storedValue": "Dentist"
	 	        },
	 	        {
	 	            "englishDescription": "Denturists",
	 	            "frenchDescription": "Denturologiste",
	 	            "storedValue": "Denturists"
	 	        },
	 	        {
	 	            "englishDescription": "Design Director",
	 	            "frenchDescription": "Directeur de la conception",
	 	            "storedValue": "Design Director"
	 	        },
	 	        {
	 	            "englishDescription": "Design Strategist",
	 	            "frenchDescription": "Responsable de la stratégie de conception",
	 	            "storedValue": "Design Strategist"
	 	        },
	 	        {
	 	            "englishDescription": "Designer",
	 	            "frenchDescription": "Styliste",
	 	            "storedValue": "Designer"
	 	        },
	 	        {
	 	            "englishDescription": "Detective",
	 	            "frenchDescription": "Détective",
	 	            "storedValue": "Detective"
	 	        },
	 	        {
	 	            "englishDescription": "Developer",
	 	            "frenchDescription": "Développeur",
	 	            "storedValue": "Developer"
	 	        },
	 	        {
	 	            "englishDescription": "Dietitian",
	 	            "frenchDescription": "Diététiste",
	 	            "storedValue": "Dietitian"
	 	        },
	 	        {
	 	            "englishDescription": "Digital Strategist",
	 	            "frenchDescription": "Responsable de la stratégie numérique",
	 	            "storedValue": "Digital Strategist"
	 	        },
	 	        {
	 	            "englishDescription": "Dining Room Manager",
	 	            "frenchDescription": "Responsable de la salle à manger",
	 	            "storedValue": "Dining Room Manager"
	 	        },
	 	        {
	 	            "englishDescription": "Direct Salesperson",
	 	            "frenchDescription": "Vendeur direct",
	 	            "storedValue": "Direct Salesperson"
	 	        },
	 	        {
	 	            "englishDescription": "Director",
	 	            "frenchDescription": "Directeur",
	 	            "storedValue": "Director"
	 	        },
	 	        {
	 	            "englishDescription": "Disability Pension",
	 	            "frenchDescription": "Rente d’invalidité",
	 	            "storedValue": "Disability Pension"
	 	        },
	 	        {
	 	            "englishDescription": "Dishwasher",
	 	            "frenchDescription": "Plongeur",
	 	            "storedValue": "Dishwasher"
	 	        },
	 	        {
	 	            "englishDescription": "Dispatcher",
	 	            "frenchDescription": "Répartiteur",
	 	            "storedValue": "Dispatcher"
	 	        },
	 	        {
	 	            "englishDescription": "Dispensing Optician",
	 	            "frenchDescription": "Opticien d’ordonnances",
	 	            "storedValue": "Dispensing Optician"
	 	        },
	 	        {
	 	            "englishDescription": "Distribution Manager",
	 	            "frenchDescription": "Chef de la distribution",
	 	            "storedValue": "Distribution Manage"
	 	        },
	 	        {
	 	            "englishDescription": "Dock Worker",
	 	            "frenchDescription": "Débardeur",
	 	            "storedValue": "Dock Worker"
	 	        },
	 	        {
	 	            "englishDescription": "Doctor",
	 	            "frenchDescription": "Médecin",
	 	            "storedValue": "Doctor"
	 	        },
	 	        {
	 	            "englishDescription": "Driller",
	 	            "frenchDescription": "Foreur",
	 	            "storedValue": "Driller"
	 	        },
	 	        {
	 	            "englishDescription": "Driver",
	 	            "frenchDescription": "Conducteur",
	 	            "storedValue": "Driver"
	 	        },
	 	        {
	 	            "englishDescription": "Driving Instructor",
	 	            "frenchDescription": "Moniteur de conduite automobile",
	 	            "storedValue": "Driving Instructor"
	 	        },
	 	        {
	 	            "englishDescription": "Dry Cleaner",
	 	            "frenchDescription": "Nettoyeur à sec",
	 	            "storedValue": "Dry Cleaner"
	 	        },
	 	        {
	 	            "englishDescription": "Dry Cleaning Attendant",
	 	            "frenchDescription": "Préposé au nettoyage à sec",
	 	            "storedValue": "Dry Cleaning Attend"
	 	        },
	 	        {
	 	            "englishDescription": "Drywall Finisher",
	 	            "frenchDescription": "Finisseur de cloisons sèches",
	 	            "storedValue": "Drywall Finisher"
	 	        },
	 	        {
	 	            "englishDescription": "Drywall Installer",
	 	            "frenchDescription": "Installateur de cloisons sèches",
	 	            "storedValue": "Drywall Installer"
	 	        },
	 	        {
	 	            "englishDescription": "Drywall Plasterer",
	 	            "frenchDescription": "Plâtrier de cloisons sèches",
	 	            "storedValue": "Drywall Plasterer"
	 	        },
	 	        {
	 	            "englishDescription": "EMT",
	 	            "frenchDescription": "ÉCD",
	 	            "storedValue": "EMT"
	 	        },
	 	        {
	 	            "englishDescription": "Ecologist",
	 	            "frenchDescription": "Écologiste",
	 	            "storedValue": "Ecologist"
	 	        },
	 	        {
	 	            "englishDescription": "Economic Analyst",
	 	            "frenchDescription": "Analyste économique",
	 	            "storedValue": "Economic Analyst"
	 	        },
	 	        {
	 	            "englishDescription": "Economist",
	 	            "frenchDescription": "Économiste",
	 	            "storedValue": "Economist"
	 	        },
	 	        {
	 	            "englishDescription": "Editor",
	 	            "frenchDescription": "Rédacteur",
	 	            "storedValue": "Editor"
	 	        },
	 	        {
	 	            "englishDescription": "Education Assistant",
	 	            "frenchDescription": "Assistant pédagogique",
	 	            "storedValue": "Education Assistant"
	 	        },
	 	        {
	 	            "englishDescription": "Education Coordinator",
	 	            "frenchDescription": "Coordinateur pédagogique",
	 	            "storedValue": "Education Coordinat"
	 	        },
	 	        {
	 	            "englishDescription": "Education Counsellor",
	 	            "frenchDescription": "Conseiller pédagogique",
	 	            "storedValue": "Education Counsello"
	 	        },
	 	        {
	 	            "englishDescription": "Educator",
	 	            "frenchDescription": "Éducateur",
	 	            "storedValue": "Educator"
	 	        },
	 	        {
	 	            "englishDescription": "Electrical Mechanic",
	 	            "frenchDescription": "Mécanicien électrique",
	 	            "storedValue": "Electrical Mechanic"
	 	        },
	 	        {
	 	            "englishDescription": "Electrician",
	 	            "frenchDescription": "Électricien",
	 	            "storedValue": "Electrician"
	 	        },
	 	        {
	 	            "englishDescription": "Electrologist",
	 	            "frenchDescription": "Électrolyste",
	 	            "storedValue": "Electrologist"
	 	        },
	 	        {
	 	            "englishDescription": "Elevator Builder",
	 	            "frenchDescription": "Constructeur d’ascenseurs",
	 	            "storedValue": "Elevator Builder"
	 	        },
	 	        {
	 	            "englishDescription": "Elevator Mechanic",
	 	            "frenchDescription": "Mécanicien d’ascenseurs",
	 	            "storedValue": "Elevator Mechanic"
	 	        },
	 	        {
	 	            "englishDescription": "Emergency Med Tech",
	 	            "frenchDescription": "Technicien d’urgence médicale",
	 	            "storedValue": "Emergency Med Tech"
	 	        },
	 	        {
	 	            "englishDescription": "Employment Counsellor",
	 	            "frenchDescription": "Conseiller en emploi",
	 	            "storedValue": "Employment Counsell"
	 	        },
	 	        {
	 	            "englishDescription": "Engineer",
	 	            "frenchDescription": "Ingénieur",
	 	            "storedValue": "Engineer"
	 	        },
	 	        {
	 	            "englishDescription": "Entertainer",
	 	            "frenchDescription": "Animateur",
	 	            "storedValue": "Entertainer"
	 	        },
	 	        {
	 	            "englishDescription": "Equipment Operator",
	 	            "frenchDescription": "Opérateur d’équipement",
	 	            "storedValue": "Equipment Operator"
	 	        },
	 	        {
	 	            "englishDescription": "Equity Analyst",
	 	            "frenchDescription": "Analyste financier",
	 	            "storedValue": "Equity Analyst"
	 	        },
	 	        {
	 	            "englishDescription": "Essayist",
	 	            "frenchDescription": "Essayiste",
	 	            "storedValue": "Essayist"
	 	        },
	 	        {
	 	            "englishDescription": "Esthetician",
	 	            "frenchDescription": "Esthéticien",
	 	            "storedValue": "Esthetician"
	 	        },
	 	        {
	 	            "englishDescription": "Estimator",
	 	            "frenchDescription": "Estimateur",
	 	            "storedValue": "Estimator"
	 	        },
	 	        {
	 	            "englishDescription": "Event Planner",
	 	            "frenchDescription": "Planificateur d’événement",
	 	            "storedValue": "Event Planner"
	 	        },
	 	        {
	 	            "englishDescription": "Events Manager",
	 	            "frenchDescription": "Gestionnaire d’événements",
	 	            "storedValue": "Events Manager"
	 	        },
	 	        {
	 	            "englishDescription": "Executive Assistant",
	 	            "frenchDescription": "Adjoint administratif",
	 	            "storedValue": "Executive Assistant"
	 	        },
	 	        {
	 	            "englishDescription": "Executive Chef",
	 	            "frenchDescription": "Premier chef",
	 	            "storedValue": "Executive Chef"
	 	        },
	 	        {
	 	            "englishDescription": "Executive Director",
	 	            "frenchDescription": "Directeur général",
	 	            "storedValue": "Executive Director"
	 	        },
	 	        {
	 	            "englishDescription": "Expediter",
	 	            "frenchDescription": "Expéditeur",
	 	            "storedValue": "Expediter"
	 	        },
	 	        {
	 	            "englishDescription": "Exterminator",
	 	            "frenchDescription": "Exterminateur",
	 	            "storedValue": "Exterminator"
	 	        },
	 	        {
	 	            "englishDescription": "Fabricator",
	 	            "frenchDescription": "Fabricant",
	 	            "storedValue": "Fabricator"
	 	        },
	 	        {
	 	            "englishDescription": "Facilities Admin",
	 	            "frenchDescription": "Administrateur des installations",
	 	            "storedValue": "Facilities Admin"
	 	        },
	 	        {
	 	            "englishDescription": "Facilities Coordinator",
	 	            "frenchDescription": "Coordonnateur des installations",
	 	            "storedValue": "Facilities Coordina"
	 	        },
	 	        {
	 	            "englishDescription": "Facilities Director",
	 	            "frenchDescription": "Directeur des installations",
	 	            "storedValue": "Facilities Director"
	 	        },
	 	        {
	 	            "englishDescription": "Facilities Manager",
	 	            "frenchDescription": "Gestionnaire des installations",
	 	            "storedValue": "Facilities Manager"
	 	        },
	 	        {
	 	            "englishDescription": "Facilities Supervisor",
	 	            "frenchDescription": "Superviseur des installations",
	 	            "storedValue": "Facilities Supervis"
	 	        },
	 	        {
	 	            "englishDescription": "Facilities Worker",
	 	            "frenchDescription": "Employé des installations",
	 	            "storedValue": "Facilities Worker"
	 	        },
	 	        {
	 	            "englishDescription": "Facility Worker",
	 	            "frenchDescription": "Employé d’installation",
	 	            "storedValue": "Facility Worker"
	 	        },
	 	        {
	 	            "englishDescription": "Factory Worker",
	 	            "frenchDescription": "Employé d’usine",
	 	            "storedValue": "Factory Worker"
	 	        },
	 	        {
	 	            "englishDescription": "Family Counsellor",
	 	            "frenchDescription": "Conseiller familial",
	 	            "storedValue": "Family Counsellor"
	 	        },
	 	        {
	 	            "englishDescription": "Farm Hand",
	 	            "frenchDescription": "Ouvrier agricole",
	 	            "storedValue": "Farm Hand"
	 	        },
	 	        {
	 	            "englishDescription": "Farm Supervisor",
	 	            "frenchDescription": "Superviseur agricole",
	 	            "storedValue": "Farm Supervisor"
	 	        },
	 	        {
	 	            "englishDescription": "Farm Worker",
	 	            "frenchDescription": "Travailleur agricole",
	 	            "storedValue": "Farm Worker"
	 	        },
	 	        {
	 	            "englishDescription": "Farmer",
	 	            "frenchDescription": "Fermier",
	 	            "storedValue": "Farmer"
	 	        },
	 	        {
	 	            "englishDescription": "Fashion Designer",
	 	            "frenchDescription": "Créateur de mode",
	 	            "storedValue": "Fashion Designer"
	 	        },
	 	        {
	 	            "englishDescription": "Ferry Operator",
	 	            "frenchDescription": "Opérateur de traversier",
	 	            "storedValue": "Ferry Operator"
	 	        },
	 	        {
	 	            "englishDescription": "Field Engineer",
	 	            "frenchDescription": "Ingénieur de chantier",
	 	            "storedValue": "Field Engineer"
	 	        },
	 	        {
	 	            "englishDescription": "Finance Director",
	 	            "frenchDescription": "Directeur des finances",
	 	            "storedValue": "Finance Director"
	 	        },
	 	        {
	 	            "englishDescription": "Finance Manager",
	 	            "frenchDescription": "Directeur des finances",
	 	            "storedValue": "Finance Manager"
	 	        },
	 	        {
	 	            "englishDescription": "Financial Advisor",
	 	            "frenchDescription": "Conseiller financier",
	 	            "storedValue": "Financial Advisor"
	 	        },
	 	        {
	 	            "englishDescription": "Financial Analyst",
	 	            "frenchDescription": "Analyste financier",
	 	            "storedValue": "Financial Analyst"
	 	        },
	 	        {
	 	            "englishDescription": "Financial Planner",
	 	            "frenchDescription": "Planificateur financier",
	 	            "storedValue": "Financial Planner"
	 	        },
	 	        {
	 	            "englishDescription": "Finisher",
	 	            "frenchDescription": "Finisseur",
	 	            "storedValue": "Finisher"
	 	        },
	 	        {
	 	            "englishDescription": "Fire Chief",
	 	            "frenchDescription": "Chef des pompiers",
	 	            "storedValue": "Fire Chief"
	 	        },
	 	        {
	 	            "englishDescription": "Firefighter",
	 	            "frenchDescription": "Pompier",
	 	            "storedValue": "Firefighter"
	 	        },
	 	        {
	 	            "englishDescription": "Fisherman",
	 	            "frenchDescription": "Pêcheur",
	 	            "storedValue": "Fisherman"
	 	        },
	 	        {
	 	            "englishDescription": "Fishing Master",
	 	            "frenchDescription": "Capitaine de pêche",
	 	            "storedValue": "Fishing Master"
	 	        },
	 	        {
	 	            "englishDescription": "Fishing Officer",
	 	            "frenchDescription": "Agent des pêches",
	 	            "storedValue": "Fishing Officer"
	 	        },
	 	        {
	 	            "englishDescription": "Fitness Centre Manager",
	 	            "frenchDescription": "Gérant de centre de conditionnement physique",
	 	            "storedValue": "Fitness Centre Mana"
	 	        },
	 	        {
	 	            "englishDescription": "Fitness Instructor",
	 	            "frenchDescription": "Instructeur en conditionnement physique",
	 	            "storedValue": "Fitness Instructor"
	 	        },
	 	        {
	 	            "englishDescription": "Fitness Trainer",
	 	            "frenchDescription": "Entraîneur en conditionnement physique",
	 	            "storedValue": "Fitness Trainer"
	 	        },
	 	        {
	 	            "englishDescription": "Fitter",
	 	            "frenchDescription": "Monteur",
	 	            "storedValue": "Fitter"
	 	        },
	 	        {
	 	            "englishDescription": "Flight Attendant",
	 	            "frenchDescription": "Agent de bord",
	 	            "storedValue": "Flight Attendant"
	 	        },
	 	        {
	 	            "englishDescription": "Flight Engineer",
	 	            "frenchDescription": "Mécanicien navigant",
	 	            "storedValue": "Flight Engineer"
	 	        },
	 	        {
	 	            "englishDescription": "Flooring Installer",
	 	            "frenchDescription": "Installateur de plancher",
	 	            "storedValue": "Flooring Installer"
	 	        },
	 	        {
	 	            "englishDescription": "Floral Designer",
	 	            "frenchDescription": "Créateur floral",
	 	            "storedValue": "Floral Designer"
	 	        },
	 	        {
	 	            "englishDescription": "Florist",
	 	            "frenchDescription": "Fleuriste",
	 	            "storedValue": "Florist"
	 	        },
	 	        {
	 	            "englishDescription": "Flying Instructor",
	 	            "frenchDescription": "Instructeur de vol",
	 	            "storedValue": "Flying Instructor"
	 	        },
	 	        {
	 	            "englishDescription": "Food / Drink Server",
	 	            "frenchDescription": "Serveur de restauration",
	 	            "storedValue": "Food / Drink Server"
	 	        },
	 	        {
	 	            "englishDescription": "Foreman",
	 	            "frenchDescription": "Contremaître",
	 	            "storedValue": "Foreman"
	 	        },
	 	        {
	 	            "englishDescription": "Forest Engineers",
	 	            "frenchDescription": "Ingénieur forestier",
	 	            "storedValue": "Forest Engineers"
	 	        },
	 	        {
	 	            "englishDescription": "Forest Planners",
	 	            "frenchDescription": "Planificateur forestier",
	 	            "storedValue": "Forest Planners"
	 	        },
	 	        {
	 	            "englishDescription": "Forest Technician",
	 	            "frenchDescription": "Technicien forestier",
	 	            "storedValue": "Forest Technician"
	 	        },
	 	        {
	 	            "englishDescription": "Foresters",
	 	            "frenchDescription": "Forestier",
	 	            "storedValue": "Foresters"
	 	        },
	 	        {
	 	            "englishDescription": "Forestry Worker",
	 	            "frenchDescription": "Travailleur forestier",
	 	            "storedValue": "Forestry Worker"
	 	        },
	 	        {
	 	            "englishDescription": "Forklift Driver",
	 	            "frenchDescription": "Conducteur de chariot élévateur",
	 	            "storedValue": "Forklift Driver"
	 	        },
	 	        {
	 	            "englishDescription": "Framer",
	 	            "frenchDescription": "Encadreur",
	 	            "storedValue": "Framer"
	 	        },
	 	        {
	 	            "englishDescription": "Fraud Investigator",
	 	            "frenchDescription": "Enquêteur en matière de fraude",
	 	            "storedValue": "Fraud Investigator"
	 	        },
	 	        {
	 	            "englishDescription": "Fry / Sauté Cook",
	 	            "frenchDescription": "Chef de friture/sautés",
	 	            "storedValue": "Fry / Saute Cook"
	 	        },
	 	        {
	 	            "englishDescription": "Fumigator",
	 	            "frenchDescription": "Fumigateur",
	 	            "storedValue": "Fumigator"
	 	        },
	 	        {
	 	            "englishDescription": "Funeral Assistant",
	 	            "frenchDescription": "Assistant funéraire",
	 	            "storedValue": "Funeral Assistant"
	 	        },
	 	        {
	 	            "englishDescription": "Funeral Director",
	 	            "frenchDescription": "Directeur funéraire",
	 	            "storedValue": "Funeral Director"
	 	        },
	 	        {
	 	            "englishDescription": "Furrier",
	 	            "frenchDescription": "Fourreur",
	 	            "storedValue": "Furrier"
	 	        },
	 	        {
	 	            "englishDescription": "Game Developer",
	 	            "frenchDescription": "Développeur de jeux",
	 	            "storedValue": "Game Developer"
	 	        },
	 	        {
	 	            "englishDescription": "Garbage Collector",
	 	            "frenchDescription": "Éboueur",
	 	            "storedValue": "Garbage Collector"
	 	        },
	 	        {
	 	            "englishDescription": "Gas Fitter",
	 	            "frenchDescription": "Monteur d’installation au gaz",
	 	            "storedValue": "Gas Fitter"
	 	        },
	 	        {
	 	            "englishDescription": "Gas Station Attendant",
	 	            "frenchDescription": "Pompiste",
	 	            "storedValue": "Gas Station Attenda"
	 	        },
	 	        {
	 	            "englishDescription": "Gas Technician",
	 	            "frenchDescription": "Technicien gazier",
	 	            "storedValue": "Gas Technician"
	 	        },
	 	        {
	 	            "englishDescription": "General Contractor",
	 	            "frenchDescription": "Entrepreneur général",
	 	            "storedValue": "General Contractor"
	 	        },
	 	        {
	 	            "englishDescription": "General Labourer",
	 	            "frenchDescription": "Ouvrier général",
	 	            "storedValue": "General Labourer"
	 	        },
	 	        {
	 	            "englishDescription": "Geoscientist",
	 	            "frenchDescription": "Géoscientifique",
	 	            "storedValue": "Geoscientist"
	 	        },
	 	        {
	 	            "englishDescription": "Geospaticial Analyst",
	 	            "frenchDescription": "Analyste géospatial",
	 	            "storedValue": "Geospaticial Analys"
	 	        },
	 	        {
	 	            "englishDescription": "Glazier",
	 	            "frenchDescription": "Vitrier",
	 	            "storedValue": "Glazier"
	 	        },
	 	        {
	 	            "englishDescription": "Graphic Artist",
	 	            "frenchDescription": "Graphiste",
	 	            "storedValue": "Graphic Artist"
	 	        },
	 	        {
	 	            "englishDescription": "Graphic Designer",
	 	            "frenchDescription": "Concepteur graphique",
	 	            "storedValue": "Graphic Designer"
	 	        },
	 	        {
	 	            "englishDescription": "Graphic Illustrator",
	 	            "frenchDescription": "Illustrateur graphique",
	 	            "storedValue": "Graphic Illustrator"
	 	        },
	 	        {
	 	            "englishDescription": "Greenhouse Worker",
	 	            "frenchDescription": "Travailleur de serre",
	 	            "storedValue": "Greenhouse Worker"
	 	        },
	 	        {
	 	            "englishDescription": "Groomer",
	 	            "frenchDescription": "Toiletteur",
	 	            "storedValue": "Groomer"
	 	        },
	 	        {
	 	            "englishDescription": "Grounds Technician",
	 	            "frenchDescription": "Technicien de terrain",
	 	            "storedValue": "Grounds Technician"
	 	        },
	 	        {
	 	            "englishDescription": "Groundskeeper",
	 	            "frenchDescription": "Préposé à l’entretien des terrains",
	 	            "storedValue": "Groundskeeper"
	 	        },
	 	        {
	 	            "englishDescription": "Guidance Counselor",
	 	            "frenchDescription": "Conseiller en orientation",
	 	            "storedValue": "Guidance Counselor"
	 	        },
	 	        {
	 	            "englishDescription": "Gym Attendant",
	 	            "frenchDescription": "Préposé de salle de sport",
	 	            "storedValue": "Gym Attendant"
	 	        },
	 	        {
	 	            "englishDescription": "HR Analyst",
	 	            "frenchDescription": "Analyste des RH",
	 	            "storedValue": "HR Analyst"
	 	        },
	 	        {
	 	            "englishDescription": "HR Assistant",
	 	            "frenchDescription": "Adjoint des HR",
	 	            "storedValue": "HR Assistant"
	 	        },
	 	        {
	 	            "englishDescription": "HR Business Partner",
	 	            "frenchDescription": "Partenaire commercial des RH",
	 	            "storedValue": "HR Business Partner"
	 	        },
	 	        {
	 	            "englishDescription": "HR Coordinator",
	 	            "frenchDescription": "Coordonnateur des RH",
	 	            "storedValue": "HR Coordinator"
	 	        },
	 	        {
	 	            "englishDescription": "HR Director",
	 	            "frenchDescription": "Directeur des RH",
	 	            "storedValue": "HR Director"
	 	        },
	 	        {
	 	            "englishDescription": "HR Manager",
	 	            "frenchDescription": "Chef des RH",
	 	            "storedValue": "HR Manager"
	 	        },
	 	        {
	 	            "englishDescription": "Hairdresser",
	 	            "frenchDescription": "Coiffeur",
	 	            "storedValue": "Hairdresser"
	 	        },
	 	        {
	 	            "englishDescription": "Hairstylist",
	 	            "frenchDescription": "Styliste",
	 	            "storedValue": "Hairstylist"
	 	        },
	 	        {
	 	            "englishDescription": "Handyman",
	 	            "frenchDescription": "Homme à tout faire",
	 	            "storedValue": "Handyman"
	 	        },
	 	        {
	 	            "englishDescription": "Health Club Manager",
	 	            "frenchDescription": "Responsable de club de santé",
	 	            "storedValue": "Health Club Manager"
	 	        },
	 	        {
	 	            "englishDescription": "Healthcare Worker",
	 	            "frenchDescription": "Professionnel de la santé",
	 	            "storedValue": "Healthcare Worker"
	 	        },
	 	        {
	 	            "englishDescription": "Heavy Equipment Mechanic",
	 	            "frenchDescription": "Mécanicien d’équipement lourd",
	 	            "storedValue": "Heavy Equipment Mec"
	 	        },
	 	        {
	 	            "englishDescription": "Heavy Equipment Operator",
	 	            "frenchDescription": "Opérateur d’équipement lourd",
	 	            "storedValue": "Heavy Equipment Ope"
	 	        },
	 	        {
	 	            "englishDescription": "Home Health Aide",
	 	            "frenchDescription": "Aide de soins de santé à domicile",
	 	            "storedValue": "Home Health Aide"
	 	        },
	 	        {
	 	            "englishDescription": "Home Inspector",
	 	            "frenchDescription": "Inspecteur en bâtiment",
	 	            "storedValue": "Home Inspector"
	 	        },
	 	        {
	 	            "englishDescription": "Home Support Worker",
	 	            "frenchDescription": "Travailleur de soutien à domicile",
	 	            "storedValue": "Home Support Worker"
	 	        },
	 	        {
	 	            "englishDescription": "Horse Trainer",
	 	            "frenchDescription": "Dresseur de chevaux",
	 	            "storedValue": "Horse Trainer"
	 	        },
	 	        {
	 	            "englishDescription": "Host / Hostess",
	 	            "frenchDescription": "Hôte/hôtesse",
	 	            "storedValue": "Host / Hostess"
	 	        },
	 	        {
	 	            "englishDescription": "Hotel Clerk",
	 	            "frenchDescription": "Commis d’hôtel",
	 	            "storedValue": "Hotel Clerk"
	 	        },
	 	        {
	 	            "englishDescription": "Hotel Staff",
	 	            "frenchDescription": "Personnel d’hôtel",
	 	            "storedValue": "Hotel Staff"
	 	        },
	 	        {
	 	            "englishDescription": "Housekeeper",
	 	            "frenchDescription": "Gouvernante",
	 	            "storedValue": "Housekeeper"
	 	        },
	 	        {
	 	            "englishDescription": "Hunter",
	 	            "frenchDescription": "Chasseur",
	 	            "storedValue": "Hunter"
	 	        },
	 	        {
	 	            "englishDescription": "Illustrator",
	 	            "frenchDescription": "Illustrateur",
	 	            "storedValue": "Illustrator"
	 	        },
	 	        {
	 	            "englishDescription": "Immigration Officer",
	 	            "frenchDescription": "Agent d’immigration",
	 	            "storedValue": "Immigration Officer"
	 	        },
	 	        {
	 	            "englishDescription": "Importer / Exporter",
	 	            "frenchDescription": "Importateur/Exportateur",
	 	            "storedValue": "Importer / Exporter"
	 	        },
	 	        {
	 	            "englishDescription": "Industrial Designer",
	 	            "frenchDescription": "Concepteur industriel",
	 	            "storedValue": "Industrial Designer"
	 	        },
	 	        {
	 	            "englishDescription": "Industrial Mechanic",
	 	            "frenchDescription": "Mécanicien industriel",
	 	            "storedValue": "Industrial Mechanic"
	 	        },
	 	        {
	 	            "englishDescription": "Influencer",
	 	            "frenchDescription": "Influenceur",
	 	            "storedValue": "Influencer"
	 	        },
	 	        {
	 	            "englishDescription": "Information Analyst",
	 	            "frenchDescription": "Analyste d’information",
	 	            "storedValue": "Information Analyst"
	 	        },
	 	        {
	 	            "englishDescription": "Information Clerk",
	 	            "frenchDescription": "Agent d’information",
	 	            "storedValue": "Information Clerk"
	 	        },
	 	        {
	 	            "englishDescription": "Information Coordinator",
	 	            "frenchDescription": "Coordonnateur d’information",
	 	            "storedValue": "Information Coordin"
	 	        },
	 	        {
	 	            "englishDescription": "Inspector",
	 	            "frenchDescription": "Inspecteur",
	 	            "storedValue": "Inspector"
	 	        },
	 	        {
	 	            "englishDescription": "Instructor",
	 	            "frenchDescription": "Instructeur",
	 	            "storedValue": "Instructor"
	 	        },
	 	        {
	 	            "englishDescription": "Insulator",
	 	            "frenchDescription": "Calorifugeur",
	 	            "storedValue": "Insulator"
	 	        },
	 	        {
	 	            "englishDescription": "Insurance Adjuster",
	 	            "frenchDescription": "Expert en assurance",
	 	            "storedValue": "Insurance Adjuster"
	 	        },
	 	        {
	 	            "englishDescription": "Insurance Agent",
	 	            "frenchDescription": "Agent d’assurance",
	 	            "storedValue": "Insurance Agent"
	 	        },
	 	        {
	 	            "englishDescription": "Insurance Broker",
	 	            "frenchDescription": "Courtier d’assurance",
	 	            "storedValue": "Insurance Broker"
	 	        },
	 	        {
	 	            "englishDescription": "Intelligence Analyst",
	 	            "frenchDescription": "Analyste du renseignement",
	 	            "storedValue": "Intelligence Analys"
	 	        },
	 	        {
	 	            "englishDescription": "Interior Decorator",
	 	            "frenchDescription": "Décorateur d’intérieur",
	 	            "storedValue": "Interior Decorator"
	 	        },
	 	        {
	 	            "englishDescription": "Interior Designer",
	 	            "frenchDescription": "Architecte d’intérieur",
	 	            "storedValue": "Interior Designer"
	 	        },
	 	        {
	 	            "englishDescription": "Interpreter",
	 	            "frenchDescription": "Interprète",
	 	            "storedValue": "Interpreter"
	 	        },
	 	        {
	 	            "englishDescription": "Inventory Counter",
	 	            "frenchDescription": "Commis d’inventaire",
	 	            "storedValue": "Inventory Counter"
	 	        },
	 	        {
	 	            "englishDescription": "Investigator",
	 	            "frenchDescription": "Enquêteur",
	 	            "storedValue": "Investigator"
	 	        },
	 	        {
	 	            "englishDescription": "Investment Banker",
	 	            "frenchDescription": "Banquier d’affaires",
	 	            "storedValue": "Investment Banker"
	 	        },
	 	        {
	 	            "englishDescription": "Investment Rep",
	 	            "frenchDescription": "Représentant en investissement",
	 	            "storedValue": "Investment Rep"
	 	        },
	 	        {
	 	            "englishDescription": "Ironworker",
	 	            "frenchDescription": "Serrurier",
	 	            "storedValue": "Ironworker"
	 	        },
	 	        {
	 	            "englishDescription": "Janitor",
	 	            "frenchDescription": "Concierge",
	 	            "storedValue": "Janitor"
	 	        },
	 	        {
	 	            "englishDescription": "Jeweller",
	 	            "frenchDescription": "Bijoutier",
	 	            "storedValue": "Jeweller"
	 	        },
	 	        {
	 	            "englishDescription": "Jewellery Designer",
	 	            "frenchDescription": "Créateur de bijoux",
	 	            "storedValue": "Jewellery Designer"
	 	        },
	 	        {
	 	            "englishDescription": "Jewellery Repairer",
	 	            "frenchDescription": "Réparateur de bijoux",
	 	            "storedValue": "Jewellery Repairer"
	 	        },
	 	        {
	 	            "englishDescription": "Joiners",
	 	            "frenchDescription": "Menuisier",
	 	            "storedValue": "Joiners"
	 	        },
	 	        {
	 	            "englishDescription": "Journalist",
	 	            "frenchDescription": "Journaliste",
	 	            "storedValue": "Journalist"
	 	        },
	 	        {
	 	            "englishDescription": "Judge",
	 	            "frenchDescription": "Juge",
	 	            "storedValue": "Judge"
	 	        },
	 	        {
	 	            "englishDescription": "Justice of Peace",
	 	            "frenchDescription": "Juge de paix",
	 	            "storedValue": "Justice of Peace"
	 	        },
	 	        {
	 	            "englishDescription": "Kitchen Helper",
	 	            "frenchDescription": "Aide de cuisine",
	 	            "storedValue": "Kitchen Helper"
	 	        },
	 	        {
	 	            "englishDescription": "Kitchen Manager",
	 	            "frenchDescription": "Chef de cuisine",
	 	            "storedValue": "Kitchen Manager"
	 	        },
	 	        {
	 	            "englishDescription": "LPN",
	 	            "frenchDescription": "Infirmier/Infirmière",
	 	            "storedValue": "LPN"
	 	        },
	 	        {
	 	            "englishDescription": "Lab Assistant",
	 	            "frenchDescription": "Assistant de laboratoire",
	 	            "storedValue": "Lab Assistant"
	 	        },
	 	        {
	 	            "englishDescription": "Lab Technician",
	 	            "frenchDescription": "Technicien de laboratoire",
	 	            "storedValue": "Lab Technician"
	 	        },
	 	        {
	 	            "englishDescription": "Labourer",
	 	            "frenchDescription": "Ouvrier",
	 	            "storedValue": "Labourer"
	 	        },
	 	        {
	 	            "englishDescription": "Land Surveyor",
	 	            "frenchDescription": "Arpenteur",
	 	            "storedValue": "Land Surveyor"
	 	        },
	 	        {
	 	            "englishDescription": "Landscaper",
	 	            "frenchDescription": "Jardinier paysagiste",
	 	            "storedValue": "Landscaper"
	 	        },
	 	        {
	 	            "englishDescription": "Lather",
	 	            "frenchDescription": "Latteur",
	 	            "storedValue": "Lather"
	 	        },
	 	        {
	 	            "englishDescription": "Laundry Attendant",
	 	            "frenchDescription": "Préposé à la buanderie",
	 	            "storedValue": "Laundry Attendant"
	 	        },
	 	        {
	 	            "englishDescription": "Lawyer",
	 	            "frenchDescription": "Avocat",
	 	            "storedValue": "Lawyer"
	 	        },
	 	        {
	 	            "englishDescription": "Lecturer",
	 	            "frenchDescription": "Chargé de cours",
	 	            "storedValue": "Lecturer"
	 	        },
	 	        {
	 	            "englishDescription": "Legal Assistant",
	 	            "frenchDescription": "Assistant juridique",
	 	            "storedValue": "Legal Assistant"
	 	        },
	 	        {
	 	            "englishDescription": "Leisure Admin",
	 	            "frenchDescription": "Administrateur de loisirs",
	 	            "storedValue": "Leisure Admin"
	 	        },
	 	        {
	 	            "englishDescription": "Leisure Service Manager",
	 	            "frenchDescription": "Directeur de service de loisirs",
	 	            "storedValue": "Leisure Service Man"
	 	        },
	 	        {
	 	            "englishDescription": "Letter Carrier",
	 	            "frenchDescription": "Facteur",
	 	            "storedValue": "Letter Carrier"
	 	        },
	 	        {
	 	            "englishDescription": "Librarian",
	 	            "frenchDescription": "Libraire",
	 	            "storedValue": "Librarian"
	 	        },
	 	        {
	 	            "englishDescription": "Library Assistant",
	 	            "frenchDescription": "Adjoint bibliothécaire",
	 	            "storedValue": "Library Assistant"
	 	        },
	 	        {
	 	            "englishDescription": "Library Clerk",
	 	            "frenchDescription": "Commis de bibliothèque",
	 	            "storedValue": "Library Clerk"
	 	        },
	 	        {
	 	            "englishDescription": "Lifeguard",
	 	            "frenchDescription": "Maître-nageur",
	 	            "storedValue": "Lifeguard"
	 	        },
	 	        {
	 	            "englishDescription": "Limo Driver",
	 	            "frenchDescription": "Chauffeur de limousine",
	 	            "storedValue": "Limo Driver"
	 	        },
	 	        {
	 	            "englishDescription": "Line Cook",
	 	            "frenchDescription": "Cuisiner à la chaîne",
	 	            "storedValue": "Line Cook"
	 	        },
	 	        {
	 	            "englishDescription": "Literary Agent",
	 	            "frenchDescription": "Agent littéraire",
	 	            "storedValue": "Literary Agent"
	 	        },
	 	        {
	 	            "englishDescription": "Livestock Worker",
	 	            "frenchDescription": "Travailleur d’élevage",
	 	            "storedValue": "Livestock Worker"
	 	        },
	 	        {
	 	            "englishDescription": "Loan Clerk",
	 	            "frenchDescription": "Responsable de prêt",
	 	            "storedValue": "Loan Clerk"
	 	        },
	 	        {
	 	            "englishDescription": "Loan Officer",
	 	            "frenchDescription": "Agent de prêt",
	 	            "storedValue": "Loan Officer"
	 	        },
	 	        {
	 	            "englishDescription": "Loan Processor",
	 	            "frenchDescription": "Responsable du traitement des prêts",
	 	            "storedValue": "Loan Processor"
	 	        },
	 	        {
	 	            "englishDescription": "Location Manager",
	 	            "frenchDescription": "Gestionnaire d’emplacement",
	 	            "storedValue": "Location Manager"
	 	        },
	 	        {
	 	            "englishDescription": "Locksmith",
	 	            "frenchDescription": "Serrurier",
	 	            "storedValue": "Locksmith"
	 	        },
	 	        {
	 	            "englishDescription": "Locomotive Engineer",
	 	            "frenchDescription": "Mécanicien de locomotive",
	 	            "storedValue": "Locomotive Engineer"
	 	        },
	 	        {
	 	            "englishDescription": "Lodging Staff",
	 	            "frenchDescription": "Personnel d’hébergement",
	 	            "storedValue": "Lodging Staff"
	 	        },
	 	        {
	 	            "englishDescription": "Logger",
	 	            "frenchDescription": "Bûcheron",
	 	            "storedValue": "Logger"
	 	        },
	 	        {
	 	            "englishDescription": "Logistics Coordinator",
	 	            "frenchDescription": "Coordonnateur de la logistique",
	 	            "storedValue": "Logistics Coordinat"
	 	        },
	 	        {
	 	            "englishDescription": "Logistics Manager",
	 	            "frenchDescription": "Directeur de la logistique",
	 	            "storedValue": "Logistics Manager"
	 	        },
	 	        {
	 	            "englishDescription": "Longshore Worker",
	 	            "frenchDescription": "Débardeur",
	 	            "storedValue": "Longshore Worker"
	 	        },
	 	        {
	 	            "englishDescription": "Lunch Monitor",
	 	            "frenchDescription": "Surveillant à l’heure du dîner",
	 	            "storedValue": "Lunch Monitor"
	 	        },
	 	        {
	 	            "englishDescription": "Lyricist",
	 	            "frenchDescription": "Parolier",
	 	            "storedValue": "Lyricist"
	 	        },
	 	        {
	 	            "englishDescription": "MRI Tech",
	 	            "frenchDescription": "Technicien en IRM",
	 	            "storedValue": "MRI Tech"
	 	        },
	 	        {
	 	            "englishDescription": "Machine Fitter",
	 	            "frenchDescription": "Monteur",
	 	            "storedValue": "Machine Fitter"
	 	        },
	 	        {
	 	            "englishDescription": "Machine Operator",
	 	            "frenchDescription": "Opérateur de machine",
	 	            "storedValue": "Machine Operator"
	 	        },
	 	        {
	 	            "englishDescription": "Machining Inspector",
	 	            "frenchDescription": "Inspecteur d’usinage",
	 	            "storedValue": "Machining Inspector"
	 	        },
	 	        {
	 	            "englishDescription": "Machinist",
	 	            "frenchDescription": "Opérateur",
	 	            "storedValue": "Machinist"
	 	        },
	 	        {
	 	            "englishDescription": "Magazine Editor",
	 	            "frenchDescription": "Éditeur de magazines",
	 	            "storedValue": "Magazine Editor"
	 	        },
	 	        {
	 	            "englishDescription": "Maintenance Worker",
	 	            "frenchDescription": "Préposé à l’entretien",
	 	            "storedValue": "Maintenance Worker"
	 	        },
	 	        {
	 	            "englishDescription": "Make Up Artist",
	 	            "frenchDescription": "Maquilleur/Maquilleuse",
	 	            "storedValue": "Make Up Artist"
	 	        },
	 	        {
	 	            "englishDescription": "Management Analyst",
	 	            "frenchDescription": "Analyste de gestion",
	 	            "storedValue": "Management Analyst"
	 	        },
	 	        {
	 	            "englishDescription": "Manager Banking",
	 	            "frenchDescription": "Directeur, Banque",
	 	            "storedValue": "Manager Banking"
	 	        },
	 	        {
	 	            "englishDescription": "Manager Credit Risk",
	 	            "frenchDescription": "Directeur, Risques de crédit",
	 	            "storedValue": "Manager Credit Risk"
	 	        },
	 	        {
	 	            "englishDescription": "Manager Facilities",
	 	            "frenchDescription": "Directeur, installations",
	 	            "storedValue": "Manager Facilities"
	 	        },
	 	        {
	 	            "englishDescription": "Manager Finance",
	 	            "frenchDescription": "Directeur, Finances",
	 	            "storedValue": "Manager Finance"
	 	        },
	 	        {
	 	            "englishDescription": "Manager Office",
	 	            "frenchDescription": "Directeur, Succursale",
	 	            "storedValue": "Manager Office"
	 	        },
	 	        {
	 	            "englishDescription": "Manager Retail",
	 	            "frenchDescription": "Directeur, Vente au détail",
	 	            "storedValue": "Manager Retail"
	 	        },
	 	        {
	 	            "englishDescription": "Manager Sales",
	 	            "frenchDescription": "Directeur, Ventes",
	 	            "storedValue": "Manager Sales"
	 	        },
	 	        {
	 	            "englishDescription": "Marina Manager",
	 	            "frenchDescription": "Directeur, Marina",
	 	            "storedValue": "Marina Manager"
	 	        },
	 	        {
	 	            "englishDescription": "Marina Operator",
	 	            "frenchDescription": "Opérateur de marina",
	 	            "storedValue": "Marina Operator"
	 	        },
	 	        {
	 	            "englishDescription": "Marine Designer",
	 	            "frenchDescription": "Concepteur maritime",
	 	            "storedValue": "Marine Designer"
	 	        },
	 	        {
	 	            "englishDescription": "Marine Fitter",
	 	            "frenchDescription": "Ajusteur maritime",
	 	            "storedValue": "Marine Fitter"
	 	        },
	 	        {
	 	            "englishDescription": "Marketing Analyst",
	 	            "frenchDescription": "Analyste marketing",
	 	            "storedValue": "Marketing Analyst"
	 	        },
	 	        {
	 	            "englishDescription": "Marketing Consultant",
	 	            "frenchDescription": "Consultant marketing",
	 	            "storedValue": "Marketing Consultan"
	 	        },
	 	        {
	 	            "englishDescription": "Marketing Coordinator",
	 	            "frenchDescription": "Coordonnateur, Marketing",
	 	            "storedValue": "Marketing Coordinat"
	 	        },
	 	        {
	 	            "englishDescription": "Marketing Manager",
	 	            "frenchDescription": "Chef, Marketing",
	 	            "storedValue": "Marketing Manager"
	 	        },
	 	        {
	 	            "englishDescription": "Marketing Specialist",
	 	            "frenchDescription": "Spécialiste, Marketing",
	 	            "storedValue": "Marketing Specialis"
	 	        },
	 	        {
	 	            "englishDescription": "Marriage Counsellor",
	 	            "frenchDescription": "Conseiller matrimonial",
	 	            "storedValue": "Marriage Counsellor"
	 	        },
	 	        {
	 	            "englishDescription": "Mason",
	 	            "frenchDescription": "Maçon",
	 	            "storedValue": "Mason"
	 	        },
	 	        {
	 	            "englishDescription": "Massage Therapist",
	 	            "frenchDescription": "Massothérapeute",
	 	            "storedValue": "Massage Therapist"
	 	        },
	 	        {
	 	            "englishDescription": "Material Handler",
	 	            "frenchDescription": "Manutentionnaire",
	 	            "storedValue": "Material Handler"
	 	        },
	 	        {
	 	            "englishDescription": "Mathematician",
	 	            "frenchDescription": "Mathématicien",
	 	            "storedValue": "Mathematician"
	 	        },
	 	        {
	 	            "englishDescription": "Maître D'",
	 	            "frenchDescription": "Maître d’hôtel",
	 	            "storedValue": "Maitre D'"
	 	        },
	 	        {
	 	            "englishDescription": "Mechanic",
	 	            "frenchDescription": "Mécanicien",
	 	            "storedValue": "Mechanic"
	 	        },
	 	        {
	 	            "englishDescription": "Media Buyer",
	 	            "frenchDescription": "Acheteur de médias",
	 	            "storedValue": "Media Buyer"
	 	        },
	 	        {
	 	            "englishDescription": "Media Designer",
	 	            "frenchDescription": "Concepteur multimédia",
	 	            "storedValue": "Media Designer"
	 	        },
	 	        {
	 	            "englishDescription": "Media Developer",
	 	            "frenchDescription": "Développeur multimédia",
	 	            "storedValue": "Media Developer"
	 	        },
	 	        {
	 	            "englishDescription": "Media Relations Manager",
	 	            "frenchDescription": "Responsable des relations avec les médias",
	 	            "storedValue": "Media Relations Man"
	 	        },
	 	        {
	 	            "englishDescription": "Medical Assistant",
	 	            "frenchDescription": "Assistant médical",
	 	            "storedValue": "Medical Assistant"
	 	        },
	 	        {
	 	            "englishDescription": "Medical Record Tech",
	 	            "frenchDescription": "Technicien en dossiers médicaux",
	 	            "storedValue": "Medical Record Tech"
	 	        },
	 	        {
	 	            "englishDescription": "Medical Technician",
	 	            "frenchDescription": "Technicien médical",
	 	            "storedValue": "Medical Technician"
	 	        },
	 	        {
	 	            "englishDescription": "Messenger",
	 	            "frenchDescription": "Messager",
	 	            "storedValue": "Messenger"
	 	        },
	 	        {
	 	            "englishDescription": "Meteorologist",
	 	            "frenchDescription": "Météorologue",
	 	            "storedValue": "Meteorologist"
	 	        },
	 	        {
	 	            "englishDescription": "Milliner",
	 	            "frenchDescription": "Chapelier",
	 	            "storedValue": "Milliner"
	 	        },
	 	        {
	 	            "englishDescription": "Millwright",
	 	            "frenchDescription": "Monteur-ajusteur",
	 	            "storedValue": "Millwright"
	 	        },
	 	        {
	 	            "englishDescription": "Mining Manager",
	 	            "frenchDescription": "Directeur des opérations minières",
	 	            "storedValue": "Mining Manager"
	 	        },
	 	        {
	 	            "englishDescription": "Model",
	 	            "frenchDescription": "Modèle",
	 	            "storedValue": "Model"
	 	        },
	 	        {
	 	            "englishDescription": "Mortgage Agent",
	 	            "frenchDescription": "Agent hypothécaire",
	 	            "storedValue": "Mortgage Agent"
	 	        },
	 	        {
	 	            "englishDescription": "Mortgage Consultant",
	 	            "frenchDescription": "Conseiller en prêts hypothécaires",
	 	            "storedValue": "Mortgage Consultant"
	 	        },
	 	        {
	 	            "englishDescription": "Mortician",
	 	            "frenchDescription": "Entrepreneur de pompes funèbres",
	 	            "storedValue": "Mortician"
	 	        },
	 	        {
	 	            "englishDescription": "Motel Staff",
	 	            "frenchDescription": "Personnel de motel",
	 	            "storedValue": "Motel Staff"
	 	        },
	 	        {
	 	            "englishDescription": "Motion Pictures Worker",
	 	            "frenchDescription": "Travailleur de films",
	 	            "storedValue": "Motion Pictures Wor"
	 	        },
	 	        {
	 	            "englishDescription": "Mover",
	 	            "frenchDescription": "Déménageur",
	 	            "storedValue": "Mover"
	 	        },
	 	        {
	 	            "englishDescription": "Music Producer",
	 	            "frenchDescription": "Producteur de musique",
	 	            "storedValue": "Music Producer"
	 	        },
	 	        {
	 	            "englishDescription": "Musician",
	 	            "frenchDescription": "Musicien",
	 	            "storedValue": "Musician"
	 	        },
	 	        {
	 	            "englishDescription": "Nanny",
	 	            "frenchDescription": "Nounou",
	 	            "storedValue": "Nanny"
	 	        },
	 	        {
	 	            "englishDescription": "Network Analyst",
	 	            "frenchDescription": "Analyste réseau",
	 	            "storedValue": "Network Analyst"
	 	        },
	 	        {
	 	            "englishDescription": "Notary",
	 	            "frenchDescription": "Notaire",
	 	            "storedValue": "Notary"
	 	        },
	 	        {
	 	            "englishDescription": "Nurse",
	 	            "frenchDescription": "Infirmier",
	 	            "storedValue": "Nurse"
	 	        },
	 	        {
	 	            "englishDescription": "Nurse Aide",
	 	            "frenchDescription": "Aide-soignant",
	 	            "storedValue": "Nurse Aide"
	 	        },
	 	        {
	 	            "englishDescription": "Nurse Anesthetist",
	 	            "frenchDescription": "Infirmier/Infirmière en anesthésie",
	 	            "storedValue": "Nurse Anesthetist"
	 	        },
	 	        {
	 	            "englishDescription": "Nursery Worker",
	 	            "frenchDescription": "Travailleur de garderie",
	 	            "storedValue": "Nursery Worker"
	 	        },
	 	        {
	 	            "englishDescription": "Nursing Assistant",
	 	            "frenchDescription": "Infirmier/Infirmière auxiliaire",
	 	            "storedValue": "Nursing Assistant"
	 	        },
	 	        {
	 	            "englishDescription": "Nutritional Coach",
	 	            "frenchDescription": "Coach nutritionnel",
	 	            "storedValue": "Nutritional Coach"
	 	        },
	 	        {
	 	            "englishDescription": "Nutritionist",
	 	            "frenchDescription": "Nutritionniste",
	 	            "storedValue": "Nutritionist"
	 	        },
	 	        {
	 	            "englishDescription": "Obstetrician",
	 	            "frenchDescription": "Obstétricien",
	 	            "storedValue": "Obstetrician"
	 	        },
	 	        {
	 	            "englishDescription": "Occupation Therapy",
	 	            "frenchDescription": "Ergothérapeute",
	 	            "storedValue": "Occupation Therapy"
	 	        },
	 	        {
	 	            "englishDescription": "Oceanographer",
	 	            "frenchDescription": "Océanographe",
	 	            "storedValue": "Oceanographer"
	 	        },
	 	        {
	 	            "englishDescription": "Office Manager",
	 	            "frenchDescription": "Chef de bureau",
	 	            "storedValue": "Office Manager"
	 	        },
	 	        {
	 	            "englishDescription": "Office Support Wkr",
	 	            "frenchDescription": "Personnel de soutien administratif",
	 	            "storedValue": "Office Support Wkr"
	 	        },
	 	        {
	 	            "englishDescription": "Operating RM Tech",
	 	            "frenchDescription": "Technicien RM opératoire",
	 	            "storedValue": "Operating RM Tech"
	 	        },
	 	        {
	 	            "englishDescription": "Operating Room Tech",
	 	            "frenchDescription": "Technicien de bloc opératoire",
	 	            "storedValue": "Operating Room Tech"
	 	        },
	 	        {
	 	            "englishDescription": "Operations Analyst",
	 	            "frenchDescription": "Analyste des opérations",
	 	            "storedValue": "Operations Analyst"
	 	        },
	 	        {
	 	            "englishDescription": "Operations Director",
	 	            "frenchDescription": "Directeur de l’exploitation",
	 	            "storedValue": "Operations Director"
	 	        },
	 	        {
	 	            "englishDescription": "Operations Manager",
	 	            "frenchDescription": "Chef de l’exploitation",
	 	            "storedValue": "Operations Manager"
	 	        },
	 	        {
	 	            "englishDescription": "Optician",
	 	            "frenchDescription": "Opticien",
	 	            "storedValue": "Optician"
	 	        },
	 	        {
	 	            "englishDescription": "Optometrist",
	 	            "frenchDescription": "Optométriste",
	 	            "storedValue": "Optometrist"
	 	        },
	 	        {
	 	            "englishDescription": "Orderly",
	 	            "frenchDescription": "Aide-soignant",
	 	            "storedValue": "Ordery"
	 	        },
	 	        {
	 	            "englishDescription": "Other",
	 	            "frenchDescription": "Autre",
	 	            "storedValue": "Other"
	 	        },
	 	        {
	 	            "englishDescription": "Owner",
	 	            "frenchDescription": "Propriétaire",
	 	            "storedValue": "Owner"
	 	        },
	 	        {
	 	            "englishDescription": "PR Assistant",
	 	            "frenchDescription": "Adjoint, Relations publiques",
	 	            "storedValue": "PR Assistant"
	 	        },
	 	        {
	 	            "englishDescription": "PR Director",
	 	            "frenchDescription": "Directeur, Relations publiques",
	 	            "storedValue": "PR Director"
	 	        },
	 	        {
	 	            "englishDescription": "PR Manager",
	 	            "frenchDescription": "Chef, Relations publiques",
	 	            "storedValue": "PR Manager"
	 	        },
	 	        {
	 	            "englishDescription": "PR Specialist",
	 	            "frenchDescription": "Spécialiste, Relations publiques",
	 	            "storedValue": "PR Specialist"
	 	        },
	 	        {
	 	            "englishDescription": "PSW",
	 	            "frenchDescription": "PAB / Préposé aux bénéficiaires",
	 	            "storedValue": "PSW"
	 	        },
	 	        {
	 	            "englishDescription": "Painter",
	 	            "frenchDescription": "Peintre",
	 	            "storedValue": "Painter"
	 	        },
	 	        {
	 	            "englishDescription": "Pantry cook",
	 	            "frenchDescription": "Pâtissier",
	 	            "storedValue": "Pantry cook"
	 	        },
	 	        {
	 	            "englishDescription": "Paralegal",
	 	            "frenchDescription": "Parajuridique",
	 	            "storedValue": "Paralegal"
	 	        },
	 	        {
	 	            "englishDescription": "Paramedic",
	 	            "frenchDescription": "Ambulancier",
	 	            "storedValue": "Paramedic"
	 	        },
	 	        {
	 	            "englishDescription": "Parole Officer",
	 	            "frenchDescription": "Agent de libération conditionnelle",
	 	            "storedValue": "Parole Officer"
	 	        },
	 	        {
	 	            "englishDescription": "Parts Associate",
	 	            "frenchDescription": "Employé du comptoir des pièces",
	 	            "storedValue": "Parts Associate"
	 	        },
	 	        {
	 	            "englishDescription": "Party Planner",
	 	            "frenchDescription": "Planificateur de réceptions",
	 	            "storedValue": "Party Planner"
	 	        },
	 	        {
	 	            "englishDescription": "Pastor",
	 	            "frenchDescription": "Pasteur",
	 	            "storedValue": "Pastor"
	 	        },
	 	        {
	 	            "englishDescription": "Pastry Chef",
	 	            "frenchDescription": "Chef pâtissier",
	 	            "storedValue": "Pastry Chef"
	 	        },
	 	        {
	 	            "englishDescription": "Patient Care Assistant",
	 	            "frenchDescription": "Assistant de soins aux patients",
	 	            "storedValue": "Patient Care Assist"
	 	        },
	 	        {
	 	            "englishDescription": "Payroll Clerk",
	 	            "frenchDescription": "Commis à la paie",
	 	            "storedValue": "Payroll Clerk"
	 	        },
	 	        {
	 	            "englishDescription": "Payroll Director",
	 	            "frenchDescription": "Directeur de la paie",
	 	            "storedValue": "Payroll Director"
	 	        },
	 	        {
	 	            "englishDescription": "Payroll Manager",
	 	            "frenchDescription": "Gestionnaire de la paie",
	 	            "storedValue": "Payroll Manager"
	 	        },
	 	        {
	 	            "englishDescription": "Payroll Officer",
	 	            "frenchDescription": "Agent de la paie",
	 	            "storedValue": "Payroll Officer"
	 	        },
	 	        {
	 	            "englishDescription": "Pediatrician",
	 	            "frenchDescription": "Pédiatre",
	 	            "storedValue": "Pediatrician"
	 	        },
	 	        {
	 	            "englishDescription": "Penciller",
	 	            "frenchDescription": "Crayonneur",
	 	            "storedValue": "Penciller"
	 	        },
	 	        {
	 	            "englishDescription": "Performer",
	 	            "frenchDescription": "Artiste interprète",
	 	            "storedValue": "Performer"
	 	        },
	 	        {
	 	            "englishDescription": "Personal Advisor",
	 	            "frenchDescription": "Conseiller personnel",
	 	            "storedValue": "Personal Advisor"
	 	        },
	 	        {
	 	            "englishDescription": "Personal Banker",
	 	            "frenchDescription": "Banquier personnel",
	 	            "storedValue": "Personal Banker"
	 	        },
	 	        {
	 	            "englishDescription": "Personal Support Worker",
	 	            "frenchDescription": "Travailleur de soutien personnel",
	 	            "storedValue": "Personal Support Wo"
	 	        },
	 	        {
	 	            "englishDescription": "Pest Controller",
	 	            "frenchDescription": "Professionnel de lutte antiparasitaire",
	 	            "storedValue": "Pest Controller"
	 	        },
	 	        {
	 	            "englishDescription": "Pharmacist",
	 	            "frenchDescription": "Pharmacien",
	 	            "storedValue": "Pharmacist"
	 	        },
	 	        {
	 	            "englishDescription": "Pharmacy Assistant",
	 	            "frenchDescription": "Aide-pharmacien",
	 	            "storedValue": "Pharmacy Assistant"
	 	        },
	 	        {
	 	            "englishDescription": "Pharmacy Technician",
	 	            "frenchDescription": "Technicien de pharmacie",
	 	            "storedValue": "Pharmacy Technician"
	 	        },
	 	        {
	 	            "englishDescription": "Phlebotomist",
	 	            "frenchDescription": "Phlébotomiste",
	 	            "storedValue": "Phlebotomist"
	 	        },
	 	        {
	 	            "englishDescription": "Photographer",
	 	            "frenchDescription": "Photographe",
	 	            "storedValue": "Photographer"
	 	        },
	 	        {
	 	            "englishDescription": "Photojournalist",
	 	            "frenchDescription": "Photojournaliste",
	 	            "storedValue": "Photojournalist"
	 	        },
	 	        {
	 	            "englishDescription": "Physical Therapist",
	 	            "frenchDescription": "Physiothérapeute",
	 	            "storedValue": "Physical Therapist"
	 	        },
	 	        {
	 	            "englishDescription": "Physician",
	 	            "frenchDescription": "Médecin",
	 	            "storedValue": "Physician"
	 	        },
	 	        {
	 	            "englishDescription": "Physician Assistant",
	 	            "frenchDescription": "Médecin adjoint",
	 	            "storedValue": "Physician Assistant"
	 	        },
	 	        {
	 	            "englishDescription": "Physicist",
	 	            "frenchDescription": "Physicien",
	 	            "storedValue": "Physicist"
	 	        },
	 	        {
	 	            "englishDescription": "Physiotherapist",
	 	            "frenchDescription": "Physiothérapeute",
	 	            "storedValue": "Physiotherapist"
	 	        },
	 	        {
	 	            "englishDescription": "Pilot",
	 	            "frenchDescription": "Pilote",
	 	            "storedValue": "Pilot"
	 	        },
	 	        {
	 	            "englishDescription": "Pipefitter",
	 	            "frenchDescription": "Tuyauteur",
	 	            "storedValue": "Pipefitter"
	 	        },
	 	        {
	 	            "englishDescription": "Plant Manager",
	 	            "frenchDescription": "Directeur d’usine",
	 	            "storedValue": "Plant Manager"
	 	        },
	 	        {
	 	            "englishDescription": "Plumber",
	 	            "frenchDescription": "Plombier",
	 	            "storedValue": "Plumber"
	 	        },
	 	        {
	 	            "englishDescription": "Police Officer",
	 	            "frenchDescription": "Policier",
	 	            "storedValue": "Police Officer"
	 	        },
	 	        {
	 	            "englishDescription": "Politician",
	 	            "frenchDescription": "Politicien",
	 	            "storedValue": "Politician"
	 	        },
	 	        {
	 	            "englishDescription": "Porter",
	 	            "frenchDescription": "Porteur",
	 	            "storedValue": "Porter"
	 	        },
	 	        {
	 	            "englishDescription": "Portfolio Manager",
	 	            "frenchDescription": "Directeur de portefeuille",
	 	            "storedValue": "Portfolio Manager"
	 	        },
	 	        {
	 	            "englishDescription": "Postal Worker",
	 	            "frenchDescription": "Postier",
	 	            "storedValue": "Postal Worker"
	 	        },
	 	        {
	 	            "englishDescription": "Potter",
	 	            "frenchDescription": "Potier",
	 	            "storedValue": "Potter"
	 	        },
	 	        {
	 	            "englishDescription": "Power Line Worker",
	 	            "frenchDescription": "Monteur de lignes électriques",
	 	            "storedValue": "Power Line Worker"
	 	        },
	 	        {
	 	            "englishDescription": "Preacher",
	 	            "frenchDescription": "Prédicateur",
	 	            "storedValue": "Preacher"
	 	        },
	 	        {
	 	            "englishDescription": "President",
	 	            "frenchDescription": "Président",
	 	            "storedValue": "President"
	 	        },
	 	        {
	 	            "englishDescription": "Priest",
	 	            "frenchDescription": "Prêtre",
	 	            "storedValue": "Priest"
	 	        },
	 	        {
	 	            "englishDescription": "Principal",
	 	            "frenchDescription": "Directeur",
	 	            "storedValue": "Principal"
	 	        },
	 	        {
	 	            "englishDescription": "Printing Press Oper",
	 	            "frenchDescription": "Imprimeur",
	 	            "storedValue": "Printing Press Oper"
	 	        },
	 	        {
	 	            "englishDescription": "Probation Officer",
	 	            "frenchDescription": "Agent de probation",
	 	            "storedValue": "Probation Officer"
	 	        },
	 	        {
	 	            "englishDescription": "Procurement Officer",
	 	            "frenchDescription": "Responsable des achats",
	 	            "storedValue": "Procurement Officer"
	 	        },
	 	        {
	 	            "englishDescription": "Producer",
	 	            "frenchDescription": "Producteur",
	 	            "storedValue": "Producer"
	 	        },
	 	        {
	 	            "englishDescription": "Production Designer",
	 	            "frenchDescription": "Chef décorateur",
	 	            "storedValue": "Production Designer"
	 	        },
	 	        {
	 	            "englishDescription": "Production Editor",
	 	            "frenchDescription": "Éditeur de production",
	 	            "storedValue": "Production Editor"
	 	        },
	 	        {
	 	            "englishDescription": "Professor",
	 	            "frenchDescription": "Professeur",
	 	            "storedValue": "Professor"
	 	        },
	 	        {
	 	            "englishDescription": "Project Analyst",
	 	            "frenchDescription": "Analyste de projet",
	 	            "storedValue": "Project Analyst"
	 	        },
	 	        {
	 	            "englishDescription": "Project Manager",
	 	            "frenchDescription": "Chef de projet",
	 	            "storedValue": "Project Manager"
	 	        },
	 	        {
	 	            "englishDescription": "Property Manager",
	 	            "frenchDescription": "Gestionnaire immobilier",
	 	            "storedValue": "Property Manager"
	 	        },
	 	        {
	 	            "englishDescription": "Psychiatrist",
	 	            "frenchDescription": "Psychiatre",
	 	            "storedValue": "Psychiatrist"
	 	        },
	 	        {
	 	            "englishDescription": "Psychologist",
	 	            "frenchDescription": "Psychologue",
	 	            "storedValue": "Psychologist"
	 	        },
	 	        {
	 	            "englishDescription": "Public Works Manager",
	 	            "frenchDescription": "Gestionnaire de travaux publics",
	 	            "storedValue": "Public Works Manage"
	 	        },
	 	        {
	 	            "englishDescription": "Public Works Worker",
	 	            "frenchDescription": "Employé de travaux publics",
	 	            "storedValue": "Public Works Worker"
	 	        },
	 	        {
	 	            "englishDescription": "Publicist",
	 	            "frenchDescription": "Publiciste",
	 	            "storedValue": "Publicist"
	 	        },
	 	        {
	 	            "englishDescription": "Purchasing Agent",
	 	            "frenchDescription": "Préposé aux achats",
	 	            "storedValue": "Purchasing Agent"
	 	        },
	 	        {
	 	            "englishDescription": "Purser",
	 	            "frenchDescription": "Commissaire de bord",
	 	            "storedValue": "Purser"
	 	        },
	 	        {
	 	            "englishDescription": "Quality Control Manager",
	 	            "frenchDescription": "Directeur, Contrôle de la qualité",
	 	            "storedValue": "Quality Control Man"
	 	        },
	 	        {
	 	            "englishDescription": "Quarry Manager",
	 	            "frenchDescription": "Chef de carrière",
	 	            "storedValue": "Quarry Manager"
	 	        },
	 	        {
	 	            "englishDescription": "Quarry Operator",
	 	            "frenchDescription": "Opérateur de carrière",
	 	            "storedValue": "Quarry Operator"
	 	        },
	 	        {
	 	            "englishDescription": "RN",
	 	            "frenchDescription": "Infirmier/Infirmière autorisé(e)",
	 	            "storedValue": "RN"
	 	        },
	 	        {
	 	            "englishDescription": "Rabbi",
	 	            "frenchDescription": "Rabbin",
	 	            "storedValue": "Rabbi"
	 	        },
	 	        {
	 	            "englishDescription": "Radio Announcer",
	 	            "frenchDescription": "Annonceur radio",
	 	            "storedValue": "Radio Announcer"
	 	        },
	 	        {
	 	            "englishDescription": "Radiology Tech",
	 	            "frenchDescription": "Technicien en radiologie",
	 	            "storedValue": "Radiology Tech"
	 	        },
	 	        {
	 	            "englishDescription": "Railway Conductor",
	 	            "frenchDescription": "Chef de train",
	 	            "storedValue": "Railway Conductor"
	 	        },
	 	        {
	 	            "englishDescription": "Railway Maintenance",
	 	            "frenchDescription": "Maintenance ferroviaire",
	 	            "storedValue": "Railway Maintenance"
	 	        },
	 	        {
	 	            "englishDescription": "Railway Operator",
	 	            "frenchDescription": "Opérateur ferroviaire",
	 	            "storedValue": "Railway Operator"
	 	        },
	 	        {
	 	            "englishDescription": "Rancher",
	 	            "frenchDescription": "Éleveur",
	 	            "storedValue": "Rancher"
	 	        },
	 	        {
	 	            "englishDescription": "Real Estate Agent",
	 	            "frenchDescription": "Agent immobilier",
	 	            "storedValue": "Real Estate Agent"
	 	        },
	 	        {
	 	            "englishDescription": "Real Estate Broker",
	 	            "frenchDescription": "Courtier immobilier",
	 	            "storedValue": "Real Estate Broker"
	 	        },
	 	        {
	 	            "englishDescription": "Real Estate Developer",
	 	            "frenchDescription": "Promoteur immobilier",
	 	            "storedValue": "Real Estate Develop"
	 	        },
	 	        {
	 	            "englishDescription": "Receptionist",
	 	            "frenchDescription": "Réceptionniste",
	 	            "storedValue": "Receptionist"
	 	        },
	 	        {
	 	            "englishDescription": "Record Producer",
	 	            "frenchDescription": "Producteur de disques",
	 	            "storedValue": "Record Producer"
	 	        },
	 	        {
	 	            "englishDescription": "Recording Tech",
	 	            "frenchDescription": "Technicien d’enregistrement",
	 	            "storedValue": "Recording Tech"
	 	        },
	 	        {
	 	            "englishDescription": "Records Mngt Manager",
	 	            "frenchDescription": "Gestionnaire d’enregistrement",
	 	            "storedValue": "Records Mngt Manage"
	 	        },
	 	        {
	 	            "englishDescription": "Records Mngt Supervisor",
	 	            "frenchDescription": "Superviseur d’enregistrement",
	 	            "storedValue": "Records Mngt Superv"
	 	        },
	 	        {
	 	            "englishDescription": "Recreation Admin",
	 	            "frenchDescription": "Administrateur des loisirs",
	 	            "storedValue": "Recreation Admin"
	 	        },
	 	        {
	 	            "englishDescription": "Recruiter",
	 	            "frenchDescription": "Recruteur",
	 	            "storedValue": "Recruiter"
	 	        },
	 	        {
	 	            "englishDescription": "Referee",
	 	            "frenchDescription": "Arbitre",
	 	            "storedValue": "Referee"
	 	        },
	 	        {
	 	            "englishDescription": "Registered Nurse",
	 	            "frenchDescription": "Infirmier/Infirmière autorisé(e)",
	 	            "storedValue": "Registered Nurse"
	 	        },
	 	        {
	 	            "englishDescription": "Regulatory Officer",
	 	            "frenchDescription": "Chef de la réglementation",
	 	            "storedValue": "Regulatory Officer"
	 	        },
	 	        {
	 	            "englishDescription": "Relationship Manager",
	 	            "frenchDescription": "Gestionnaire des relations",
	 	            "storedValue": "Relationship Manage"
	 	        },
	 	        {
	 	            "englishDescription": "Renovator",
	 	            "frenchDescription": "Rénovateur",
	 	            "storedValue": "Renovator"
	 	        },
	 	        {
	 	            "englishDescription": "Reporter",
	 	            "frenchDescription": "Journaliste",
	 	            "storedValue": "Reporter"
	 	        },
	 	        {
	 	            "englishDescription": "Research Analyst",
	 	            "frenchDescription": "Analyste de recherche",
	 	            "storedValue": "Research Analyst"
	 	        },
	 	        {
	 	            "englishDescription": "Research Assistant",
	 	            "frenchDescription": "Assistant de recherche",
	 	            "storedValue": "Research Assistant"
	 	        },
	 	        {
	 	            "englishDescription": "Research Associate",
	 	            "frenchDescription": "Associé de recherche",
	 	            "storedValue": "Research Associate"
	 	        },
	 	        {
	 	            "englishDescription": "Research Coordinator",
	 	            "frenchDescription": "Coordonnateur de recherche",
	 	            "storedValue": "Research Coordinato"
	 	        },
	 	        {
	 	            "englishDescription": "Researcher",
	 	            "frenchDescription": "Chercheur",
	 	            "storedValue": "Researcher"
	 	        },
	 	        {
	 	            "englishDescription": "Residential Installer",
	 	            "frenchDescription": "Installateur résidentiel",
	 	            "storedValue": "Residential Install"
	 	        },
	 	        {
	 	            "englishDescription": "Respiratory Therapy",
	 	            "frenchDescription": "Thérapeute respiratoire",
	 	            "storedValue": "Respiratory Therapy"
	 	        },
	 	        {
	 	            "englishDescription": "Restaurant Host",
	 	            "frenchDescription": "Hôte de restaurant",
	 	            "storedValue": "Restaurant Host"
	 	        },
	 	        {
	 	            "englishDescription": "Restaurant Hostess",
	 	            "frenchDescription": "Hôtesse de restaurant",
	 	            "storedValue": "Restaurant Hostess"
	 	        },
	 	        {
	 	            "englishDescription": "Restaurant Manager",
	 	            "frenchDescription": "Gérant de restaurant",
	 	            "storedValue": "Restaurant Manager"
	 	        },
	 	        {
	 	            "englishDescription": "Restaurant Server",
	 	            "frenchDescription": "Serveur de restaurant",
	 	            "storedValue": "Restaurant Server"
	 	        },
	 	        {
	 	            "englishDescription": "Retail Buyer",
	 	            "frenchDescription": "Acheteur au détail",
	 	            "storedValue": "Retail Buyer"
	 	        },
	 	        {
	 	            "englishDescription": "Retail Manager",
	 	            "frenchDescription": "Gestionnaire de détail",
	 	            "storedValue": "Retail Manager"
	 	        },
	 	        {
	 	            "englishDescription": "Retail Salesperson",
	 	            "frenchDescription": "Vendeur au détail",
	 	            "storedValue": "Retail Salesperson"
	 	        },
	 	        {
	 	            "englishDescription": "Retail Worker",
	 	            "frenchDescription": "Employé de vente au détail",
	 	            "storedValue": "Retail Worker"
	 	        },
	 	        {
	 	            "englishDescription": "Reverend",
	 	            "frenchDescription": "Révérend",
	 	            "storedValue": "Reverend"
	 	        },
	 	        {
	 	            "englishDescription": "Ridesharing Driver",
	 	            "frenchDescription": "Chauffeur de covoiturage",
	 	            "storedValue": "Ridesharing Driver"
	 	        },
	 	        {
	 	            "englishDescription": "Risk Manager",
	 	            "frenchDescription": "Gestionnaire des risques",
	 	            "storedValue": "Risk Manager"
	 	        },
	 	        {
	 	            "englishDescription": "Road Worker",
	 	            "frenchDescription": "Ouvrier de la route",
	 	            "storedValue": "Road Worker"
	 	        },
	 	        {
	 	            "englishDescription": "Roofer",
	 	            "frenchDescription": "Couvreur",
	 	            "storedValue": "Roofer"
	 	        },
	 	        {
	 	            "englishDescription": "Safety Officer",
	 	            "frenchDescription": "Responsable de la sécurité",
	 	            "storedValue": "Safety Officer"
	 	        },
	 	        {
	 	            "englishDescription": "Sales Analyst",
	 	            "frenchDescription": "Analyste des ventes",
	 	            "storedValue": "Sales Analyst"
	 	        },
	 	        {
	 	            "englishDescription": "Sales Associate",
	 	            "frenchDescription": "Préposée aux ventes",
	 	            "storedValue": "Sales Associate"
	 	        },
	 	        {
	 	            "englishDescription": "Sales Consultant",
	 	            "frenchDescription": "Conseiller aux ventes",
	 	            "storedValue": "Sales Consultant"
	 	        },
	 	        {
	 	            "englishDescription": "Sales Director",
	 	            "frenchDescription": "Directeur des ventes",
	 	            "storedValue": "Sales Director"
	 	        },
	 	        {
	 	            "englishDescription": "Sales Engineer",
	 	            "frenchDescription": "Ingénieur des ventes",
	 	            "storedValue": "Sales Engineer"
	 	        },
	 	        {
	 	            "englishDescription": "Sales Manager",
	 	            "frenchDescription": "Directeur des ventes",
	 	            "storedValue": "Sales Manager"
	 	        },
	 	        {
	 	            "englishDescription": "Sales Person",
	 	            "frenchDescription": "Vendeur",
	 	            "storedValue": "Sales Person"
	 	        },
	 	        {
	 	            "englishDescription": "Sales Rep",
	 	            "frenchDescription": "Représentant des ventes",
	 	            "storedValue": "Sales Rep"
	 	        },
	 	        {
	 	            "englishDescription": "Sales Telemarketing",
	 	            "frenchDescription": "Télévendeur",
	 	            "storedValue": "Sales Telemarketing"
	 	        },
	 	        {
	 	            "englishDescription": "Salesperson Retail",
	 	            "frenchDescription": "Vendeur au détail",
	 	            "storedValue": "Salesperson Retail"
	 	        },
	 	        {
	 	            "englishDescription": "Sanitation Worker",
	 	            "frenchDescription": "Éboueur",
	 	            "storedValue": "Sanitation Worker"
	 	        },
	 	        {
	 	            "englishDescription": "Scaffolder",
	 	            "frenchDescription": "Échafaudeur",
	 	            "storedValue": "Scaffolder"
	 	        },
	 	        {
	 	            "englishDescription": "Scheduler",
	 	            "frenchDescription": "Planificateur",
	 	            "storedValue": "Scheduler"
	 	        },
	 	        {
	 	            "englishDescription": "Scientist",
	 	            "frenchDescription": "Scientifique",
	 	            "storedValue": "Scientist"
	 	        },
	 	        {
	 	            "englishDescription": "Screener",
	 	            "frenchDescription": "Agent de sûreté",
	 	            "storedValue": "Screener"
	 	        },
	 	        {
	 	            "englishDescription": "Sculptor",
	 	            "frenchDescription": "Sculpteur",
	 	            "storedValue": "Sculptor"
	 	        },
	 	        {
	 	            "englishDescription": "Seamstress",
	 	            "frenchDescription": "Couturier",
	 	            "storedValue": "Seamstress"
	 	        },
	 	        {
	 	            "englishDescription": "Secretary",
	 	            "frenchDescription": "Secrétaire",
	 	            "storedValue": "Secretary"
	 	        },
	 	        {
	 	            "englishDescription": "Securities Agent",
	 	            "frenchDescription": "Agent de titres",
	 	            "storedValue": "Securities Agent"
	 	        },
	 	        {
	 	            "englishDescription": "Securities Dealer",
	 	            "frenchDescription": "Courtier de titres",
	 	            "storedValue": "Securities Dealer"
	 	        },
	 	        {
	 	            "englishDescription": "Security Admin",
	 	            "frenchDescription": "Administrateur de sécurité",
	 	            "storedValue": "Security Admin"
	 	        },
	 	        {
	 	            "englishDescription": "Security Analyst",
	 	            "frenchDescription": "Analyste de sécurité",
	 	            "storedValue": "Security Analyst"
	 	        },
	 	        {
	 	            "englishDescription": "Security Architect",
	 	            "frenchDescription": "Architecte, Sécurité",
	 	            "storedValue": "Security Architect"
	 	        },
	 	        {
	 	            "englishDescription": "Security Consultant",
	 	            "frenchDescription": "Conseiller en sécurité",
	 	            "storedValue": "Security Consultant"
	 	        },
	 	        {
	 	            "englishDescription": "Security Engineer",
	 	            "frenchDescription": "Ingénieur en sécurité",
	 	            "storedValue": "Security Engineer"
	 	        },
	 	        {
	 	            "englishDescription": "Security Guard",
	 	            "frenchDescription": "Agent de sécurité",
	 	            "storedValue": "Security Guard"
	 	        },
	 	        {
	 	            "englishDescription": "Security Manager",
	 	            "frenchDescription": "Gestionnaire de sécurité",
	 	            "storedValue": "Security Manager"
	 	        },
	 	        {
	 	            "englishDescription": "Security Specialist",
	 	            "frenchDescription": "Spécialiste, Sécurité",
	 	            "storedValue": "Security Specialist"
	 	        },
	 	        {
	 	            "englishDescription": "Senior VP",
	 	            "frenchDescription": "Vice-président principal",
	 	            "storedValue": "Senior VP"
	 	        },
	 	        {
	 	            "englishDescription": "Server",
	 	            "frenchDescription": "Serveur",
	 	            "storedValue": "Server"
	 	        },
	 	        {
	 	            "englishDescription": "Service Rep",
	 	            "frenchDescription": "Représentant du service",
	 	            "storedValue": "Service Rep"
	 	        },
	 	        {
	 	            "englishDescription": "Set Decorator",
	 	            "frenchDescription": "Décorateur de plateau",
	 	            "storedValue": "Set Decorator"
	 	        },
	 	        {
	 	            "englishDescription": "Set Dresser",
	 	            "frenchDescription": "Ensemblier",
	 	            "storedValue": "Set Dresser"
	 	        },
	 	        {
	 	            "englishDescription": "Sheet Metal Worker",
	 	            "frenchDescription": "Tôlier",
	 	            "storedValue": "Sheet Metal Worker"
	 	        },
	 	        {
	 	            "englishDescription": "Shelf Stocker",
	 	            "frenchDescription": "Gondolier",
	 	            "storedValue": "Shelf Stocker"
	 	        },
	 	        {
	 	            "englishDescription": "Sheriff",
	 	            "frenchDescription": "Shérif",
	 	            "storedValue": "Sheriff"
	 	        },
	 	        {
	 	            "englishDescription": "Shingler",
	 	            "frenchDescription": "Poseur de bardeaux",
	 	            "storedValue": "Shingler"
	 	        },
	 	        {
	 	            "englishDescription": "Shoe Repairer",
	 	            "frenchDescription": "Cordonnier",
	 	            "storedValue": "Shoe Repairer"
	 	        },
	 	        {
	 	            "englishDescription": "Shoemaker",
	 	            "frenchDescription": "Fabricant de chaussures",
	 	            "storedValue": "Shoemaker"
	 	        },
	 	        {
	 	            "englishDescription": "Singer",
	 	            "frenchDescription": "Chanteur/Chanteuse",
	 	            "storedValue": "Singer"
	 	        },
	 	        {
	 	            "englishDescription": "Site Superintendent",
	 	            "frenchDescription": "Surintendant de site",
	 	            "storedValue": "Site Superintendent"
	 	        },
	 	        {
	 	            "englishDescription": "Site Supervisor",
	 	            "frenchDescription": "Superviseur de site",
	 	            "storedValue": "Site Supervisor"
	 	        },
	 	        {
	 	            "englishDescription": "Skidder Operator",
	 	            "frenchDescription": "Opérateur de débusqueuse",
	 	            "storedValue": "Skidder Operator"
	 	        },
	 	        {
	 	            "englishDescription": "Skilled Labourer",
	 	            "frenchDescription": "Ouvrier qualifié",
	 	            "storedValue": "Skilled Labourer"
	 	        },
	 	        {
	 	            "englishDescription": "Snowplough Operator",
	 	            "frenchDescription": "Opérateur de chasse-neige",
	 	            "storedValue": "Snowplough Operator"
	 	        },
	 	        {
	 	            "englishDescription": "Social Worker",
	 	            "frenchDescription": "Travailleur social",
	 	            "storedValue": "Social Worker"
	 	        },
	 	        {
	 	            "englishDescription": "Software Architect",
	 	            "frenchDescription": "Architecte logiciel",
	 	            "storedValue": "Software Architect"
	 	        },
	 	        {
	 	            "englishDescription": "Software Designer",
	 	            "frenchDescription": "Concepteur de logiciels",
	 	            "storedValue": "Software Designer"
	 	        },
	 	        {
	 	            "englishDescription": "Software Engineer",
	 	            "frenchDescription": "Ingénieur logiciel",
	 	            "storedValue": "Software Engineer"
	 	        },
	 	        {
	 	            "englishDescription": "Soldier",
	 	            "frenchDescription": "Soldat",
	 	            "storedValue": "Soldier"
	 	        },
	 	        {
	 	            "englishDescription": "Songwriter",
	 	            "frenchDescription": "Compositeur",
	 	            "storedValue": "Songwriter"
	 	        },
	 	        {
	 	            "englishDescription": "Sonographer",
	 	            "frenchDescription": "Échographiste",
	 	            "storedValue": "Sonographer"
	 	        },
	 	        {
	 	            "englishDescription": "Sous Chef",
	 	            "frenchDescription": "Sous-chef",
	 	            "storedValue": "Sous Chef"
	 	        },
	 	        {
	 	            "englishDescription": "Spa Staff",
	 	            "frenchDescription": "Personnel de spa",
	 	            "storedValue": "Spa Staff"
	 	        },
	 	        {
	 	            "englishDescription": "Speech Pathologist",
	 	            "frenchDescription": "Orthophoniste",
	 	            "storedValue": "Speech Pathologist"
	 	        },
	 	        {
	 	            "englishDescription": "Sports Official",
	 	            "frenchDescription": "Officiel de sport",
	 	            "storedValue": "Sports Official"
	 	        },
	 	        {
	 	            "englishDescription": "Sports Operator",
	 	            "frenchDescription": "Opérateur sportif",
	 	            "storedValue": "Sports Operator"
	 	        },
	 	        {
	 	            "englishDescription": "Sprinkler Installer",
	 	            "frenchDescription": "Monteur de gicleurs",
	 	            "storedValue": "Sprinkler Installer"
	 	        },
	 	        {
	 	            "englishDescription": "Statistician",
	 	            "frenchDescription": "Statisticien",
	 	            "storedValue": "Statistician"
	 	        },
	 	        {
	 	            "englishDescription": "Steamfitter",
	 	            "frenchDescription": "Monteur de tuyaux à vapeur",
	 	            "storedValue": "Steamfitter"
	 	        },
	 	        {
	 	            "englishDescription": "Stock Broker",
	 	            "frenchDescription": "Courtier en valeurs mobilières",
	 	            "storedValue": "Stock Broker"
	 	        },
	 	        {
	 	            "englishDescription": "Stock Clerk",
	 	            "frenchDescription": "Commis d’inventaire",
	 	            "storedValue": "Stock Clerk"
	 	        },
	 	        {
	 	            "englishDescription": "Store Clerk",
	 	            "frenchDescription": "Commis de magasin",
	 	            "storedValue": "Store Clerk"
	 	        },
	 	        {
	 	            "englishDescription": "Store Manager",
	 	            "frenchDescription": "Directeur de magasin",
	 	            "storedValue": "Store Manager"
	 	        },
	 	        {
	 	            "englishDescription": "Storekeeper",
	 	            "frenchDescription": "Magasinier",
	 	            "storedValue": "Storekeeper"
	 	        },
	 	        {
	 	            "englishDescription": "Structural Engineer",
	 	            "frenchDescription": "Ingénieur de structure",
	 	            "storedValue": "Structural Engineer"
	 	        },
	 	        {
	 	            "englishDescription": "Subway Operator",
	 	            "frenchDescription": "Opérateur de métro",
	 	            "storedValue": "Subway Operator"
	 	        },
	 	        {
	 	            "englishDescription": "Superintendent",
	 	            "frenchDescription": "Surintendant",
	 	            "storedValue": "Superintendent"
	 	        },
	 	        {
	 	            "englishDescription": "Supervisor",
	 	            "frenchDescription": "Superviseur",
	 	            "storedValue": "Supervisor"
	 	        },
	 	        {
	 	            "englishDescription": "Supply Chain Analyst",
	 	            "frenchDescription": "Analyste, Chaîne d’approvisionnement",
	 	            "storedValue": "Supply Chain Analys"
	 	        },
	 	        {
	 	            "englishDescription": "Supply Chain Manager",
	 	            "frenchDescription": "Chef, Chaîne d’approvisionnement",
	 	            "storedValue": "Supply Chain Manage"
	 	        },
	 	        {
	 	            "englishDescription": "Support Worker",
	 	            "frenchDescription": "Employé de soutien",
	 	            "storedValue": "Support Worker"
	 	        },
	 	        {
	 	            "englishDescription": "Surgeon",
	 	            "frenchDescription": "Chirurgien",
	 	            "storedValue": "Surgeon"
	 	        },
	 	        {
	 	            "englishDescription": "Surgical Tech",
	 	            "frenchDescription": "Technicien en chirurgie",
	 	            "storedValue": "Surgical Tech"
	 	        },
	 	        {
	 	            "englishDescription": "Surveyor",
	 	            "frenchDescription": "Géomètre",
	 	            "storedValue": "Surveyor"
	 	        },
	 	        {
	 	            "englishDescription": "Systems Analyst",
	 	            "frenchDescription": "Analyste de systèmes",
	 	            "storedValue": "Systems Analyst"
	 	        },
	 	        {
	 	            "englishDescription": "TV Reporter",
	 	            "frenchDescription": "Journaliste à la télévision",
	 	            "storedValue": "TV Reporter"
	 	        },
	 	        {
	 	            "englishDescription": "Tailor",
	 	            "frenchDescription": "Tailleur",
	 	            "storedValue": "Tailor"
	 	        },
	 	        {
	 	            "englishDescription": "Talent Agent",
	 	            "frenchDescription": "Agent de talents",
	 	            "storedValue": "Talent Agent"
	 	        },
	 	        {
	 	            "englishDescription": "Talent Director",
	 	            "frenchDescription": "Directeur de talents",
	 	            "storedValue": "Talent Director"
	 	        },
	 	        {
	 	            "englishDescription": "Talent Manager",
	 	            "frenchDescription": "Gérant de talents",
	 	            "storedValue": "Talent Manager"
	 	        },
	 	        {
	 	            "englishDescription": "Tattoo Artist",
	 	            "frenchDescription": "Tatoueur",
	 	            "storedValue": "Tattoo Artist"
	 	        },
	 	        {
	 	            "englishDescription": "Tax Analyst",
	 	            "frenchDescription": "Analyste fiscal",
	 	            "storedValue": "Tax Analyst"
	 	        },
	 	        {
	 	            "englishDescription": "Tax Assessor",
	 	            "frenchDescription": "Évaluateur fiscal",
	 	            "storedValue": "Tax Assessor"
	 	        },
	 	        {
	 	            "englishDescription": "Tax Consultant",
	 	            "frenchDescription": "Conseiller fiscal",
	 	            "storedValue": "Tax Consultant"
	 	        },
	 	        {
	 	            "englishDescription": "Taxi Driver",
	 	            "frenchDescription": "Chauffeur de taxi",
	 	            "storedValue": "Taxi Driver"
	 	        },
	 	        {
	 	            "englishDescription": "Teacher",
	 	            "frenchDescription": "Enseignant",
	 	            "storedValue": "Teacher"
	 	        },
	 	        {
	 	            "englishDescription": "Teacher Assistant",
	 	            "frenchDescription": "Aide-enseignant",
	 	            "storedValue": "Teacher Assistant"
	 	        },
	 	        {
	 	            "englishDescription": "Teaching Assistant",
	 	            "frenchDescription": "Aide d’enseignement",
	 	            "storedValue": "Teaching Assistant"
	 	        },
	 	        {
	 	            "englishDescription": "Team Leader",
	 	            "frenchDescription": "Chef d’équipe",
	 	            "storedValue": "Team Leader"
	 	        },
	 	        {
	 	            "englishDescription": "Tech Support",
	 	            "frenchDescription": "Soutien technique",
	 	            "storedValue": "Tech Support"
	 	        },
	 	        {
	 	            "englishDescription": "Technical Analyst",
	 	            "frenchDescription": "Analyste technique",
	 	            "storedValue": "Technical Analyst"
	 	        },
	 	        {
	 	            "englishDescription": "Technical Sales",
	 	            "frenchDescription": "Ventes techniques",
	 	            "storedValue": "Technical Sales"
	 	        },
	 	        {
	 	            "englishDescription": "Technician",
	 	            "frenchDescription": "Mécanicien",
	 	            "storedValue": "Technician"
	 	        },
	 	        {
	 	            "englishDescription": "Technologist",
	 	            "frenchDescription": "Technicien",
	 	            "storedValue": "Technologist"
	 	        },
	 	        {
	 	            "englishDescription": "Telemarketer",
	 	            "frenchDescription": "Télévendeur",
	 	            "storedValue": "Telemarketer"
	 	        },
	 	        {
	 	            "englishDescription": "Telephone Operator",
	 	            "frenchDescription": "Téléphoniste",
	 	            "storedValue": "Telephone Operator"
	 	        },
	 	        {
	 	            "englishDescription": "Tester",
	 	            "frenchDescription": "Testeur",
	 	            "storedValue": "Tester"
	 	        },
	 	        {
	 	            "englishDescription": "Therapist",
	 	            "frenchDescription": "Thérapeute",
	 	            "storedValue": "Therapist"
	 	        },
	 	        {
	 	            "englishDescription": "Ticket Agent",
	 	            "frenchDescription": "Agent de billetterie",
	 	            "storedValue": "Ticket Agent"
	 	        },
	 	        {
	 	            "englishDescription": "TikToker",
	 	            "frenchDescription": "Influenceur sur TikTok",
	 	            "storedValue": "TikToker"
	 	        },
	 	        {
	 	            "englishDescription": "Tilesetter",
	 	            "frenchDescription": "Carreleur",
	 	            "storedValue": "Tilesetter"
	 	        },
	 	        {
	 	            "englishDescription": "Tinsmith",
	 	            "frenchDescription": "Ferblantier",
	 	            "storedValue": "Tinsmith"
	 	        },
	 	        {
	 	            "englishDescription": "Tire Technician",
	 	            "frenchDescription": "Mécanicien de pneus",
	 	            "storedValue": "Tire Technician"
	 	        },
	 	        {
	 	            "englishDescription": "Tool and Die Maker",
	 	            "frenchDescription": "Outilleur-ajusteur",
	 	            "storedValue": "Tool and Die Maker"
	 	        },
	 	        {
	 	            "englishDescription": "Tooling Inspector",
	 	            "frenchDescription": "Inspecteur d’outillage",
	 	            "storedValue": "Tooling Inspector"
	 	        },
	 	        {
	 	            "englishDescription": "Tour Guide",
	 	            "frenchDescription": "Guide touristique",
	 	            "storedValue": "Tour Guide"
	 	        },
	 	        {
	 	            "englishDescription": "Town Planner",
	 	            "frenchDescription": "Urbaniste",
	 	            "storedValue": "Town Planner"
	 	        },
	 	        {
	 	            "englishDescription": "Trader",
	 	            "frenchDescription": "Marchand",
	 	            "storedValue": "Trader"
	 	        },
	 	        {
	 	            "englishDescription": "Trades Assistant",
	 	            "frenchDescription": "Assistant aux transactions",
	 	            "storedValue": "Trades Assistant"
	 	        },
	 	        {
	 	            "englishDescription": "Traffic Controller",
	 	            "frenchDescription": "Contrôleur de trafic",
	 	            "storedValue": "Traffic Controller"
	 	        },
	 	        {
	 	            "englishDescription": "Traffic Manager",
	 	            "frenchDescription": "Gestionnaire de trafic",
	 	            "storedValue": "Traffic Manager"
	 	        },
	 	        {
	 	            "englishDescription": "Trainer",
	 	            "frenchDescription": "Entraîneur",
	 	            "storedValue": "Trainer"
	 	        },
	 	        {
	 	            "englishDescription": "Training Analyst",
	 	            "frenchDescription": "Analyste de formation",
	 	            "storedValue": "Training Analyst"
	 	        },
	 	        {
	 	            "englishDescription": "Training Director",
	 	            "frenchDescription": "Directeur de formation",
	 	            "storedValue": "Training Director"
	 	        },
	 	        {
	 	            "englishDescription": "Training Manager",
	 	            "frenchDescription": "Responsable de formation",
	 	            "storedValue": "Training Manager"
	 	        },
	 	        {
	 	            "englishDescription": "Transcriptionist",
	 	            "frenchDescription": "Transcripteur",
	 	            "storedValue": "Transcriptionist"
	 	        },
	 	        {
	 	            "englishDescription": "Transit Operator",
	 	            "frenchDescription": "Opérateur de transit",
	 	            "storedValue": "Transit Operator"
	 	        },
	 	        {
	 	            "englishDescription": "Translator",
	 	            "frenchDescription": "Traducteur",
	 	            "storedValue": "Translator"
	 	        },
	 	        {
	 	            "englishDescription": "Transport Driver",
	 	            "frenchDescription": "Transporteur",
	 	            "storedValue": "Transport Driver"
	 	        },
	 	        {
	 	            "englishDescription": "Transportation",
	 	            "frenchDescription": "Transport",
	 	            "storedValue": "Transportation"
	 	        },
	 	        {
	 	            "englishDescription": "Trapper",
	 	            "frenchDescription": "Trappeur",
	 	            "storedValue": "Trapper"
	 	        },
	 	        {
	 	            "englishDescription": "Travel Agent",
	 	            "frenchDescription": "Agent de voyage",
	 	            "storedValue": "Travel Agent"
	 	        },
	 	        {
	 	            "englishDescription": "Travel Counsellor",
	 	            "frenchDescription": "Conseiller en voyages",
	 	            "storedValue": "Travel Counsellor"
	 	        },
	 	        {
	 	            "englishDescription": "Travel Guide",
	 	            "frenchDescription": "Guide de voyage",
	 	            "storedValue": "Travel Guide"
	 	        },
	 	        {
	 	            "englishDescription": "Treasurer",
	 	            "frenchDescription": "Trésorier",
	 	            "storedValue": "Treasurer"
	 	        },
	 	        {
	 	            "englishDescription": "Truck Driver",
	 	            "frenchDescription": "Conducteur de camion",
	 	            "storedValue": "Truck Driver"
	 	        },
	 	        {
	 	            "englishDescription": "Truck Loader",
	 	            "frenchDescription": "Chargeur de camion",
	 	            "storedValue": "Truck Loader"
	 	        },
	 	        {
	 	            "englishDescription": "Tutor",
	 	            "frenchDescription": "Formateur",
	 	            "storedValue": "Tutor"
	 	        },
	 	        {
	 	            "englishDescription": "Uber Driver",
	 	            "frenchDescription": "Chauffeur Uber",
	 	            "storedValue": "Uber Driver"
	 	        },
	 	        {
	 	            "englishDescription": "Ultrasound Tech",
	 	            "frenchDescription": "Technicien en échographie",
	 	            "storedValue": "Ultrasound Tech"
	 	        },
	 	        {
	 	            "englishDescription": "Underwriter",
	 	            "frenchDescription": "Souscripteur",
	 	            "storedValue": "Underwriter"
	 	        },
	 	        {
	 	            "englishDescription": "Upholsterer",
	 	            "frenchDescription": "Rembourreur",
	 	            "storedValue": "Upholsterer"
	 	        },
	 	        {
	 	            "englishDescription": "Urban Planner",
	 	            "frenchDescription": "Urbaniste",
	 	            "storedValue": "Urban Planner"
	 	        },
	 	        {
	 	            "englishDescription": "Utility Operator",
	 	            "frenchDescription": "Opérateur de services publics",
	 	            "storedValue": "Utility Operator"
	 	        },
	 	        {
	 	            "englishDescription": "Valet",
	 	            "frenchDescription": "Voiturier",
	 	            "storedValue": "Valet"
	 	        },
	 	        {
	 	            "englishDescription": "Vendor Analyst",
	 	            "frenchDescription": "Analyste de vente",
	 	            "storedValue": "Vendor Analyst"
	 	        },
	 	        {
	 	            "englishDescription": "Vet Assistant",
	 	            "frenchDescription": "Assistant vétérinaire",
	 	            "storedValue": "Vet Assistant"
	 	        },
	 	        {
	 	            "englishDescription": "Vet Tech",
	 	            "frenchDescription": "Technicien du vétérinaire",
	 	            "storedValue": "Vet Tech"
	 	        },
	 	        {
	 	            "englishDescription": "Veterinarian",
	 	            "frenchDescription": "Vétérinaire",
	 	            "storedValue": "Veterinarian"
	 	        },
	 	        {
	 	            "englishDescription": "Vice President",
	 	            "frenchDescription": "Vice-président",
	 	            "storedValue": "Vice President"
	 	        },
	 	        {
	 	            "englishDescription": "Vice Principal",
	 	            "frenchDescription": "Directeur adjoint",
	 	            "storedValue": "Vice Principal"
	 	        },
	 	        {
	 	            "englishDescription": "Video Game Animator",
	 	            "frenchDescription": "Animateur de jeu vidéo",
	 	            "storedValue": "Video Game Animator"
	 	        },
	 	        {
	 	            "englishDescription": "Videographer",
	 	            "frenchDescription": "Vidéographe",
	 	            "storedValue": "Videographer"
	 	        },
	 	        {
	 	            "englishDescription": "Visual Artist",
	 	            "frenchDescription": "Artiste visuel",
	 	            "storedValue": "Visual Artist"
	 	        },
	 	        {
	 	            "englishDescription": "Waiter",
	 	            "frenchDescription": "Serveur",
	 	            "storedValue": "Waiter"
	 	        },
	 	        {
	 	            "englishDescription": "Waitress",
	 	            "frenchDescription": "Serveuse",
	 	            "storedValue": "Waitress"
	 	        },
	 	        {
	 	            "englishDescription": "Warehouse Assistant",
	 	            "frenchDescription": "Assistant d’entrepôt",
	 	            "storedValue": "Warehouse Assistant"
	 	        },
	 	        {
	 	            "englishDescription": "Warehouse Manager",
	 	            "frenchDescription": "Gérant d’entrepôt",
	 	            "storedValue": "Warehouse Manager"
	 	        },
	 	        {
	 	            "englishDescription": "Warehouse Picker",
	 	            "frenchDescription": "Ramasseur d’entrepôt",
	 	            "storedValue": "Warehouse Picker"
	 	        },
	 	        {
	 	            "englishDescription": "Warehouse Supervisor",
	 	            "frenchDescription": "Superviseur de l’entrepôt",
	 	            "storedValue": "Warehouse Superviso"
	 	        },
	 	        {
	 	            "englishDescription": "Watch Repairer",
	 	            "frenchDescription": "Réparateur de montres",
	 	            "storedValue": "Watch Repairer"
	 	        },
	 	        {
	 	            "englishDescription": "Water Well Driller",
	 	            "frenchDescription": "Foreur de puits d’eau",
	 	            "storedValue": "Water Well Driller"
	 	        },
	 	        {
	 	            "englishDescription": "Web Animator",
	 	            "frenchDescription": "Animation Web",
	 	            "storedValue": "Web Animator"
	 	        },
	 	        {
	 	            "englishDescription": "Web Designer",
	 	            "frenchDescription": "Concepteur Web",
	 	            "storedValue": "Web Designer"
	 	        },
	 	        {
	 	            "englishDescription": "Web Developer",
	 	            "frenchDescription": "Développeur Web",
	 	            "storedValue": "Web Developer"
	 	        },
	 	        {
	 	            "englishDescription": "Wedding Planner",
	 	            "frenchDescription": "Planificateur de mariage",
	 	            "storedValue": "Wedding Planner"
	 	        },
	 	        {
	 	            "englishDescription": "Welder",
	 	            "frenchDescription": "Soudeur",
	 	            "storedValue": "Welder"
	 	        },
	 	        {
	 	            "englishDescription": "Wharf Worker",
	 	            "frenchDescription": "Employé de quai",
	 	            "storedValue": "Wharf Worker"
	 	        },
	 	        {
	 	            "englishDescription": "Wholesale Buyer",
	 	            "frenchDescription": "Acheteur en gros",
	 	            "storedValue": "Wholesale Buyer"
	 	        },
	 	        {
	 	            "englishDescription": "Wine Steward",
	 	            "frenchDescription": "Sommelier",
	 	            "storedValue": "Wine Steward"
	 	        },
	 	        {
	 	            "englishDescription": "Woodworker",
	 	            "frenchDescription": "Menuisier",
	 	            "storedValue": "Woodworker"
	 	        },
	 	        {
	 	            "englishDescription": "Workers Compensation",
	 	            "frenchDescription": "Indemnité pour accident du travail",
	 	            "storedValue": "Workers Comp"
	 	        },
	 	        {
	 	            "englishDescription": "Workspace Manager",
	 	            "frenchDescription": "Gestionnaire de l’espace de travail",
	 	            "storedValue": "Workspace Manager"
	 	        },
	 	        {
	 	            "englishDescription": "Writer",
	 	            "frenchDescription": "Écrivain",
	 	            "storedValue": "Writer"
	 	        },
	 	        {
	 	            "englishDescription": "X-Ray Technician",
	 	            "frenchDescription": "Technicien en radiologie",
	 	            "storedValue": "X-Ray Technician"
	 	        },
	 	        {
	 	            "englishDescription": "Yard Worker",
	 	            "frenchDescription": "Travailleur de cour",
	 	            "storedValue": "Yard Worker"
	 	        },
	 	        {
	 	            "englishDescription": "Youth Care Worker",
	 	            "frenchDescription": "Travailleur jeunesse",
	 	            "storedValue": "Youth Care Worker"
	 	        },
	 	        {
	 	            "englishDescription": "Youth Worker",
	 	            "frenchDescription": "Travailleur jeunesse",
	 	            "storedValue": "Youth Worker"
	 	        },
	 	        {
	 	            "englishDescription": "Youtuber",
	 	            "frenchDescription": "YouTubeur",
	 	            "storedValue": "Youtuber"
	 	        }
	 	    ],
	 	    "jobCategoryList": [
	 	        {
	 	            "englishDescription": "Cust Service/Hospitality/Tourism",
	 	            "frenchDescription": "Service à la clientèle/hospitalité/tourisme",
	 	            "storedValue": "SERVICE"
	 	        },
	 	        {
	 	            "englishDescription": "Driver",
	 	            "frenchDescription": "Chauffeur",
	 	            "storedValue": "DRIVER"
	 	        },
	 	        {
	 	            "englishDescription": "Factory Worker",
	 	            "frenchDescription": "Travailleur d’usine",
	 	            "storedValue": "FACTORY"
	 	        },
	 	        {
	 	            "englishDescription": "Guard/Police",
	 	            "frenchDescription": "Agent de sécurité/police",
	 	            "storedValue": "GUARD"
	 	        },
	 	        {
	 	            "englishDescription": "Internship",
	 	            "frenchDescription": "Stagiaire",
	 	            "storedValue": "INTERNSHIP"
	 	        },
	 	        {
	 	            "englishDescription": "Labourer",
	 	            "frenchDescription": "Ouvrier",
	 	            "storedValue": "LABOURER"
	 	        },
	 	        {
	 	            "englishDescription": "Management",
	 	            "frenchDescription": "Gestion",
	 	            "storedValue": "MANAGER"
	 	        },
	 	        {
	 	            "englishDescription": "Medical Field",
	 	            "frenchDescription": "Domaine médical",
	 	            "storedValue": "MEDICAL"
	 	        },
	 	        {
	 	            "englishDescription": "Military",
	 	            "frenchDescription": "Militaire",
	 	            "storedValue": "MILITARY"
	 	        },
	 	        {
	 	            "englishDescription": "Office Worker",
	 	            "frenchDescription": "Employé de bureau",
	 	            "storedValue": "OFFICE"
	 	        },
	 	        {
	 	            "englishDescription": "Other",
	 	            "frenchDescription": "Autre",
	 	            "storedValue": "OTHER"
	 	        },
	 	        {
	 	            "englishDescription": "Owner",
	 	            "frenchDescription": "Propriétaire",
	 	            "storedValue": "OWNER"
	 	        },
	 	        {
	 	            "englishDescription": "Parental Leave ",
	 	            "frenchDescription": "Congé parental",
	 	            "storedValue": "PARENTLEAV"
	 	        },
	 	        {
	 	            "englishDescription": "Professional",
	 	            "frenchDescription": "Professionnel",
	 	            "storedValue": "PROFESSION"
	 	        },
	 	        {
	 	            "englishDescription": "Retail Representative",
	 	            "frenchDescription": "Représentant de vente au détail",
	 	            "storedValue": "RETAIL"
	 	        },
	 	        {
	 	            "englishDescription": "Sabbatical",
	 	            "frenchDescription": "Année sabbatique",
	 	            "storedValue": "SABBATICAL"
	 	        },
	 	        {
	 	            "englishDescription": "Sales",
	 	            "frenchDescription": "Ventes",
	 	            "storedValue": "SALES"
	 	        },
	 	        {
	 	            "englishDescription": "Service/Repair",
	 	            "frenchDescription": "Service/réparation",
	 	            "storedValue": "REPAIRER"
	 	        },
	 	        {
	 	            "englishDescription": "Student",
	 	            "frenchDescription": "Étudiant",
	 	            "storedValue": "STUDENT"
	 	        },
	 	        {
	 	            "englishDescription": "Student Coop Placement",
	 	            "frenchDescription": "Placement d’étudiants en coopérative",
	 	            "storedValue": "STUDNTCOOP"
	 	        },
	 	        {
	 	            "englishDescription": "Trades",
	 	            "frenchDescription": "Métiers",
	 	            "storedValue": "TRADES"
	 	        }
	 	    ]
	 	}
};
	
