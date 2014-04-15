ensureNamespaceExists();

WICI.WICIWebApp = function() {
	var logPrefix = ' ----- [WICI.WICIWebApp]::';
	
	this.messageDialog=null;
	this.translator = null;    
	this.validationsOn = false;
	this.validationDecorator = null;
	this.creditCardData = null;
	this.isAliveService = null;
	this.zebraPrinterWrapper = null;
	this.idleTimeService = null;
	this.accountProfileHelper = null;
	
	this.isAliveService = null;
	this.idleTimeService = null;
	this.logOutTriggerActionService = null;
	this.abandonApplicationTriggerActionService = null;	
	
	var isDemoMode = false;
	this.getDemoMode = function(){return isDemoMode;};
	this.setDemoMode = function(bValue){isDemoMode = bValue;};
	
	this.language = null;
	
	this.apkVersion = null;
	this.deviceInfoHelper = null;
	
	this.agencyProgram = null;
	this.agencyPromoCode = null;
	this.hardwareEventsController = null;
	this.flowController = null;
	this.translationExtender = null;
	
	//---------------------------------------------------------------------------------------	
	this.init = function() {
		initMomentJsFrenchLanguage();
		var sMethod = 'init() ';
        console.log(logPrefix + sMethod);

		$.event.special.swipe.horizontalDistanceThreshold = Math.min($(document).width() / 2, 160);
		
		this.translationExtender = new WICI.TranslationExtender();
		this.translationExtender.init($.i18n);

		this.translator = new WICI.Translate($.i18n, WICI.AppConfig.LanguageEnum);
		this.translator.init();
		
		this.messageDialog = new WICI.MessageDialog(this.translator);
		
		this.validationDecorator = new WICI.ValidationDecorator();
		
		disableFormSubmission();

		this.validationsOn = true;
		
        app.apkVersion = new WICI.AppAPKVersion();
        app.apkVersion.init();
        
        app.deviceInfoHelper = new WICI.DeviceInfoHelper();
        app.deviceInfoHelper.init();
		
		new WICI.AppNavigatorController().init( this.translator, this.messageDialog);
		
		if(this.hardwareEventsController===null){
			this.hardwareEventsController = new WICI.HardwareEventsController(this.translator, this.messageDialog);
			this.hardwareEventsController.trapBackButton();
		}
		
		
		if(this.isAliveService!==null){
			this.isAliveService.stop();
		}
		this.isAliveService = new WICI.IsAliveService();				

		if(this.idleTimeService!==null){
			this.idleTimeService.stop();
		}
		this.idleTimeService = new WICI.IdleTimeService($(document));	
		var idleTimeServiceParam = this.idleTimeService;

		if(this.logOutTriggerActionService!==null){
			this.logOutTriggerActionService.stop();
		}
		this.logOutTriggerActionService = new WICI.TriggerActionService("logOutTriggerActionService");
		this.logOutTriggerActionService.setTriggerMethod(function(){
			return idleTimeServiceParam.getIdleTime()>=WICI.AppConfig.BackgroundServicesConfig.AUTO_LOGOUT_TIMEOUT;
		});

		if(this.abandonApplicationTriggerActionService!==null){
			this.abandonApplicationTriggerActionService.stop();
		}
		this.abandonApplicationTriggerActionService = new WICI.TriggerActionService("abandonApplicationTriggerActionService");
		this.abandonApplicationTriggerActionService.setTriggerMethod(function(){
			return idleTimeServiceParam.getIdleTime()>=WICI.AppConfig.BackgroundServicesConfig.AUTO_ABANDON_APPLICATION_TIMEOUT;
		});
		
		// Initialize Zebra Printer Wrapper
		this.zebraPrinterWrapper = new WICI.ZebraPrinterController();
		
		// Create accountProfileHelper instance
		this.accountProfileHelper = new WICI.AccountProfileHelper(this.messageDialog, this.translator);
		
		$.support.cors = true;
		$.mobile.allowCrossDomainPages = true;
	};
	
	//---------------------------------------------------------------------------------------	
	function disableFormSubmission() {
		var sMethod = 'disableFormSubmission() ';
        console.log(logPrefix + sMethod);
        
		$("form").live("submit", function(event) {
			event.preventDefault();
		});
	};
	function initMomentJsFrenchLanguage(){
		moment.lang('fr', {
		    //months : "Janvier_Février_Mars_Avril_Mai_Juin_Juillet_Août_Septembre_Octobre_Novembre_Décembre".split("_"),
			months : "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
		    monthsShort : "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
		    weekdays : "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
		    weekdaysShort : "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
		    weekdaysMin : "Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),
		    longDateFormat : {
		        LT : "HH:mm",
		        L : "DD/MM/YYYY",
		        LL : "D MMMM YYYY",
		        LLL : "D MMMM YYYY LT",
		        LLLL : "dddd D MMMM YYYY LT"
		    },
		    calendar : {
		        sameDay: "[Aujourd'hui à] LT",
		        nextDay: '[Demain à] LT',
		        nextWeek: 'dddd [à] LT',
		        lastDay: '[Hier à] LT',
		        lastWeek: 'dddd [dernier à] LT',
		        sameElse: 'L'
		    },
		    relativeTime : {
		        future : "dans %s",
		        past : "il y a %s",
		        s : "quelques secondes",
		        m : "une minute",
		        mm : "%d minutes",
		        h : "une heure",
		        hh : "%d heures",
		        d : "un jour",
		        dd : "%d jours",
		        M : "un mois",
		        MM : "%d mois",
		        y : "une année",
		        yy : "%d années"
		    },
		    ordinal : function (number) {
		        return number + (number === 1 ? 'er' : 'ème');
		    },
		    week : {
		        dow : 1, // Monday is the first day of the week.
		        doy : 4  // The week that contains Jan 4th is the first week of the year.
		    }
		});
		
		moment.lang('en');
	}
	//---------------------------------------------------------------------------------------	
	//Global override for jQuery Mobile Dialogs to make the backgrounds transparent
	$(function() {
	    $('div[data-role="dialog"]').live('pagebeforeshow', function(e, ui) {
		ui.prevPage.addClass("ui-dialog-background ");
		});
		
	    $('div[data-role="dialog"]').live('pagehide', function(e, ui) {
		$(".ui-dialog-background ").removeClass("ui-dialog-background ");
		});
	});	
	//---------------------------------------------------------------------------------------	
};