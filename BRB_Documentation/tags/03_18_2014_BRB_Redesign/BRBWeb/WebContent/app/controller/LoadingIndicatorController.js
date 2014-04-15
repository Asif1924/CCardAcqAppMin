ensureNamespaceExists();

BRB.LoadingIndicatorController = function() {
	this.hide = hide;
	this.show = show;
	this.showIdentityVerificationLoading = showIdentityVerificationLoading;
	
	function hide(){
		$('#loadingIconBackgroundPane').hide();	
		enableScrollingForApp();
		
		function enableScrollingForApp(){
			try {
				var loadingpage = document.getElementById("loadingIconBackgroundPane");
				loadingpage.ontouchmove = function(event){};

				$("html").css({"overflow" : "auto"});
			}
			catch (exception) {
				BRB.Log("AppNavigatorController.enableScrollingForApp(): [" + exception.toString() + "]");
			}
		}
	}
	
	function show(){
		disableScrollingForLoadingScreen();
		
		$('#loadingIconBackgroundPane #loadingIcon').removeClass("identityVerificationLoadingIcon")
		  											.addClass("loadingIcon");
		$('#loadingIconPane').removeClass("identityVerificationLoadingIconPane")
		  											.addClass("loadingIconPane");
		$('#loadingIconPane h2 span').attr("data-translationKey", "app_loading");
		app.translator.run("loadingIconPane");
		if (app.ieUIHelper.isIe8Browser()){
			$('#loadingIcon_ie8').hide();
			$('#loadingIcon').show();
		}
		$('#loadingIconBackgroundPane').show();
	}
	
	function showIdentityVerificationLoading(textMessage){
		disableScrollingForLoadingScreen();
		
		$('#loadingIconBackgroundPane #loadingIcon').removeClass("loadingIcon").addClass("identityVerificationLoadingIcon");
		$('#loadingIconPane').removeClass("loadingIconPane").addClass("identityVerificationLoadingIconPane");		
		
		if (!_.isEmpty(textMessage)) {
			$('#loadingIconPane h2 span').attr("data-translationKey", "");
			$('#loadingIconPane h2 span').text(textMessage);
		}
		else {
			$('#loadingIconPane h2 span').attr("data-translationKey", "identityVerification_ScreenIndicator");
			app.translator.run("loadingIconPane");
		}
		if (app.ieUIHelper.isIe8Browser()){
			$('#loadingIcon').hide();
			$('#loadingIcon_ie8').show();
		}  
		$('#loadingIconBackgroundPane').show();
	}
	
	function disableScrollingForLoadingScreen(){
		try {
			var loadingpage = document.getElementById("loadingIconBackgroundPane");
			loadingpage.ontouchmove = function(event){
				event.preventDefault();
			};

			$("html").css({"overflow" : "hidden"});
		}
		catch (exception) {
			BRB.Log("LoadingIndicatorController.disableScrollingForLoadingScreen(): [" + exception.toString() + "]");
		}
	}
};