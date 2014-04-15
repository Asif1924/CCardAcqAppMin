ensureNamespaceExists();

WICI.TranslationExtender = function () {
	var logPrefix = ' ----- [WICI.TranslationExtender]::';
	this.init = init;		
	this.translationLib = null;
	this.changeLogoToFrench = changeLogoToFrench;
	this.changeLogoToEnglish = changeLogoToEnglish;
	
	function init(translationLibrary) {		
		translationLib = translationLibrary;
		$.subscribe('languageChangedEvent', onLanguageChangedEventHandler);
		$.subscribe('refreshFlipsEvent', onRefreshFlipsEventHandler);
	}
	
	function onLanguageChangedEventHandler (event, data) {
		var sMethod = 'onLanguageChangedEventHandler()';
		console.log(logPrefix + sMethod + '::Event::' + event + '::Current Language::' + data);
		
		// Trigger events
		triggerEvents();
		if (data == 'en'){
			//THIS reference is important because with it SINON will create SPY
			changeLogoToEnglish();
			changeSmallLogoToEnglish();
		}
		else {
			//THIS reference is important because with it SINON will create SPY
			changeLogoToFrench();
			changeSmallLogoToFrench();
		}		
	}
	
	function onRefreshFlipsEventHandler (event, data) {
		var sMethod = 'onRefreshFlipsEventHandler()';
		console.log(logPrefix + sMethod + '::Event::' + event + '::Current Language::' + 'data');
			
		setFlipsValues();
	}
	
	triggerEvents = function (){
		$('#personalData_PlaceOfIssue_TextField').trigger('translatorFinished');
		$('#finEmpInfo_JobCategory_TextField').trigger('translatorFinished');
		$('#signatureScreen_SignDate').trigger('translatorFinished');
		$('#optionalProducts_SignDatePA').trigger('translatorFinished');
		$('#optionalProducts_SignDateCP').trigger('translatorFinished');
		$('#optionalProducts_SignDateIW').trigger('translatorFinished');
		$('#birthDate_id_1').trigger('translatorFinished');
		$('#birthDate_id_2').trigger('translatorFinished');
		$('#signDate_id_1').trigger('translatorFinished');
		$('#personalData2_Address_Province_TextField').trigger('translatorFinished');
		$('#personalData2_PreviousAddress_Province_TextField').trigger('translatorFinished');
		$('#provinceTextField').trigger('translatorFinished');
		$('#sup_Province_TextField').trigger('translatorFinished');
		$('#finEmpInfo_JobCategory_TextField').trigger('translatorFinished');
		$('#summary_housingpayment').trigger('translatorFinished');
		$('#summary_grossIncome').trigger('translatorFinished');
		$('#personalData2_Address_Own_RadioButton').trigger('translatorFinished');
		$('#finEmpInfo_EmpType_Group').trigger('translatorFinished');
		$('#supCardRequestType_Group').trigger('translatorFinished');
		$('#personalData2_Address_ResidenceType').trigger('translatorFinished');
	};
	
	function changeLogoToFrench() {
		var node = $(".Login_CanadianTireLogo");
		node.removeClass("Login_CanadianTireLogo");
		node.addClass("Login_CanadianTireLogo_French");
	};
	
	changeSmallLogoToFrench = function () {
		var node = $(".PageHeader_CanadianTireLogo");
		node.removeClass("PageHeader_CanadianTireLogo");
		node.addClass("PageHeader_CanadianTireLogo_French");
	};
	
	function changeLogoToEnglish() {
		var node = $(".Login_CanadianTireLogo_French");
		node.removeClass("Login_CanadianTireLogo_French");
		node.addClass("Login_CanadianTireLogo");
	};
	
	changeSmallLogoToEnglish = function () {
		var node = $(".PageHeader_CanadianTireLogo_French");
		node.removeClass("PageHeader_CanadianTireLogo_French");
		node.addClass("PageHeader_CanadianTireLogo");
	};
	
	setFlipsValues = function () {
		console.log("setFlipsValues method");
		$('.ui-slider-label-a').text(translateKey("messageDialog_yes"));
		$('.ui-slider-label-b').text(translateKey("messageDialog_no"));
		try {
			$(
					"#flipVISAMCAMEX, #flipBankLoan, #flipStoreCard, #flipChequingAcct, #flipGasCard, #flipSavingsAcct")
					.slider("refresh", true);

		} catch (e) {
			console.log("something goes wrong :-( in refreshing sliders");
		}
	};
	
	translateKey = function () {
		return translationLib._(arguments[0], _.rest(arguments, 1));
	};
};