ensureNamespaceExists();

WICI.WICIWebApp = function() {
	
	this.messageDialog=null;
	this.translator = null;    //luk: added it to 'this' to be able get it anyplace with 'app.translator'
	this.validationsOn = false;
	this.validationDecorator = null; //luk: helper to show/clear validation failed fields
	this.creditCardData = null;
	
	this.init = function() {
		console.log("WICIWebApp.init");

		$.event.special.swipe.horizontalDistanceThreshold = Math.min($(document).width() / 2, 160);

		this.translator = new WICI.Translate($.i18n, WICI.AppConfig.LanguageEnum);
		this.translator.init();
		
		this.messageDialog = new WICI.MessageDialog(this.translator);
		this.validationDecorator = new WICI.ValidationDecorator();
		
		disableFormSubmission();

		this.validationsOn = true;
		
		new WICI.AppNavigatorController().init( this.translator, this.messageDialog);		
		
		$.support.cors = true;
		$.mobile.allowCrossDomainPages = true;
	};
	
	function disableFormSubmission() {
		console.log("WICIWebApp.disableFormSubmission");
		$("form").live("submit", function(event) {
			event.preventDefault();
		});
	};
};