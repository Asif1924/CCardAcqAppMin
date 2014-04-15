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
	
	this.hardwareEventsController = null;
	this.flowController = null;
	
	//---------------------------------------------------------------------------------------	
	this.init = function() {
		var sMethod = 'init() ';
        console.log(logPrefix + sMethod);

		$.event.special.swipe.horizontalDistanceThreshold = Math.min($(document).width() / 2, 160);

		this.translator = new WICI.Translate($.i18n, WICI.AppConfig.LanguageEnum);
		this.translator.init();
		
		if(this.messageDialog===null){
			this.messageDialog = new WICI.MessageDialog(this.translator);
		}
		
		this.validationDecorator = new WICI.ValidationDecorator();
		
		disableFormSubmission();

		this.validationsOn = true;
		
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