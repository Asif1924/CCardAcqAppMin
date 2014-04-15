ensureNamespaceExists();


WICI.DialogCloseHelper = function() {
	var logPrefix = '[WICI.DialogCloseHelper]::';
	
	this.closeAllDialogs = function(){
		var sMethod = 'closeAllDialogs() ';
        console.log(logPrefix + sMethod);
        
		try {
			var dialogs = $("div[data-role='dialog']");
			if (dialogs) {
				dialogs.dialog('close');
			}
		} catch (e) {
			console.log(logPrefix + sMethod+ " Exception: "+e);
		}
		
//		try {
//			$('#input').blur();
//		} catch (e) {
//			console.log(logPrefix + sMethod+ " Exception: "+e);
//		}
		
		var $el = $('#WICIWebAppMainPage');
		var offset = $el.offset();
		var event = $.extend( $.Event( "mousedown" ), {which: 1, pageX: offset.left,pageY: offset.top});
		$el.trigger(event);
	};
	
};