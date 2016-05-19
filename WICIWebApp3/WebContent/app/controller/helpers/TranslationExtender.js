ensureNamespaceExists();

WICI.TranslationExtender = function () {
	var logPrefix = ' ----- [WICI.TranslationExtender]::';
	this.init = init;
	this.translationLib = null;
	this.changeLogoToFrench = changeLogoToFrench;
	this.changeLogoToEnglish = changeLogoToEnglish;

	this.changeCTMLogoToFrench = changeCTMLogoToFrench;
	this.changeCTMLogoToEnglish = changeCTMLogoToEnglish;

	function init(translationLibrary) {
		translationLib = translationLibrary;
		$.subscribe('languageChangedEvent', onLanguageChangedEventHandler);
		$.subscribe('refreshFlipsEvent', onRefreshFlipsEventHandler);
	}

	function onLanguageChangedEventHandler (event, data) {
		var sMethod = 'onLanguageChangedEventHandler()';
		console.log(logPrefix + sMethod + '::Event::' + event + '::Current Language::' + data);

        $.publish('translatorFinished');

		if (data == 'en'){
			//THIS reference is important because with it SINON will create SPY
			changeLogoToEnglish();
			changeSmallLogoToEnglish();
			changeCTMLogoToEnglish();
		}
		else {
			//THIS reference is important because with it SINON will create SPY
			changeLogoToFrench();
			changeSmallLogoToFrench();
			changeCTMLogoToFrench();
		}
	}

	function onRefreshFlipsEventHandler (event, data) {
		var sMethod = 'onRefreshFlipsEventHandler()';
		console.log(logPrefix + sMethod + '::Event::' + event + '::Current Language::' + data);

		setFlipsValues(data);
	}

	function changeCTMLogoToFrench() {
		var node = $(".ctmLogo_eng");
		node.removeClass("ctmLogo_eng");
		node.addClass("ctmLogo_fr");
	}

	function changeCTMLogoToEnglish() {
		var node = $(".ctmLogo_fr");
		node.removeClass("ctmLogo_fr");
		node.addClass("ctmLogo_eng");
	}

	function changeLogoToFrench() {
		var node = $(".Login_CanadianTireLogo");
		node.removeClass("Login_CanadianTireLogo");
		node.addClass("Login_CanadianTireLogo_French");
	}

	changeSmallLogoToFrench = function () {
		var node = $(".PageHeader_CanadianTireLogo");
		node.removeClass("PageHeader_CanadianTireLogo_English");
		node.addClass("PageHeader_CanadianTireLogo_French");
	};

	function changeLogoToEnglish() {
		var node = $(".Login_CanadianTireLogo_French");
		node.removeClass("Login_CanadianTireLogo_French");
		node.addClass("Login_CanadianTireLogo");
	}

	changeSmallLogoToEnglish = function () {
		var node = $(".PageHeader_CanadianTireLogo");
		node.removeClass("PageHeader_CanadianTireLogo_French");
		node.addClass("PageHeader_CanadianTireLogo_English");
	};

	setFlipsValues = function (data) {
		console.log("setFlipsValues method");
		
		//old code Begin  #UAT80 - May 24 release 
		/*
		$('.ui-slider-label-a').text(translateKey("yes"));
		$('.ui-slider-label-b').text(translateKey("no"));  
		*/		
		//old code End  #UAT80 - May 24 release
		
		//New code begin  #UAT80 - May 24 release 
		console.log("setFlipsValues method currentLanguage :: " + data);
		console.log("FlipsValues - " + $(".ui-slider-label-a").text() + " - " + $(".ui-slider-label-b").text());
		if(($(".ui-slider-label-a").text() != "Fr"  ||  $(".ui-slider-label-b").text() != "En")) {  
		    $('.ui-slider-label-a').text(translateKey("yes"));
			$('.ui-slider-label-b').text(translateKey("no"));
		}
		else{
			   if(data.toUpperCase() === "FR")
				   {
		    	$("#language_choser").val("F").slider("refresh");
				   }
			   else if(data.toUpperCase() === "EN")
				   {
				   $("#language_choser").val("E").slider("refresh");
				   }
		}
		//New code End  #UAT80 - May 24 release 
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
