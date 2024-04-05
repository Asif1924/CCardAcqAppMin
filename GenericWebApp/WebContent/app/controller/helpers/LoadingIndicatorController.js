ensureNamespaceExists();

GENERICWEBAPP.LoadingIndicatorController = function() {
	this.hide = hide;
	this.show = show;
	
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
				console.log("AppNavigatorController.enableScrollingForApp(): [" + exception.toString() + "]");
			}
		}
	}
	
	function show(){
		disableScrollingForLoadingScreen();
		$('#loadingIconBackgroundPane').show();
		
		function disableScrollingForLoadingScreen(){
			try {
				var loadingpage = document.getElementById("loadingIconBackgroundPane");
				loadingpage.ontouchmove = function(event){
					event.preventDefault();
				};

				$("html").css({"overflow" : "hidden"});
			}
			catch (exception) {
				console.log("LoadingIndicatorController.disableScrollingForLoadingScreen(): [" + exception.toString() + "]");
			}
		}
	}
};