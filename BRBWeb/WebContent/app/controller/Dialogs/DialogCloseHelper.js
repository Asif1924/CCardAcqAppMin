ensureNamespaceExists();


BRB.DialogCloseHelper = function() {
	var logPrefix = '[BRB.DialogCloseHelper]::';
	
	this.closeAllDialogs = function(){
		var sMethod = 'closeAllDialogs() ';
        BRB.Log(logPrefix + sMethod);
        
		try {
			var dialogs = $("div[data-role='dialog']");
			if (dialogs) {
				dialogs.dialog('close');
			}
		} catch (e) {
			BRB.Log(logPrefix + sMethod+ " Exception: "+e);
		}
		
//		try {
//			$('#input').blur();
//		} catch (e) {
//			BRB.Log(logPrefix + sMethod+ " Exception: "+e);
//		}
		
		var $el = $('#BRBWebAppMainPage');
		var offset = $el.offset();
		var event = $.extend( $.Event( "mousedown" ), {which: 1, pageX: offset.left,pageY: offset.top});
		$el.trigger(event);
	};
	
};