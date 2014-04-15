ensureNamespaceExists();

BRB.ValidationDecorator = function(config) {
    var logPrefix = '[BRB.ValidationDecorator]::';
    var errCss = 'errorField';
    
    if (app.ieUIHelper.isIe8Browser()) {
    	errCss = errCss + 'IE8';
    }
    
  //---------------------------------------------------------------
    this.clearErrArrtibute = function(){
        var sMethod = 'clearErrArrtibute() ';
        BRB.Log(logPrefix + sMethod);
        
        $.each($('.errorCell'), function(index, item){
        	var inputItemId = item.getAttribute('id');
        	if(inputItemId !== null && inputItemId !=='' && $('#' + inputItemId).length != 0)
        	{
        		//$('#' + inputItemId).hide();
        		$('#' + inputItemId).remove();
        	}
        });
        
        $('.'+errCss).attr('title', null);
        $('.'+errCss).removeClass(errCss);
    };
  //---------------------------------------------------------------
    this.applyErrAttribute = function(validationRez, skeepFocus, translator){
        var sMethod = 'applyErrAttribute() ';
        BRB.Log(logPrefix + sMethod);

        if(!validationRez || validationRez.lenght<=0){
            return;
        }
        
        $.each(validationRez, function(index, item) {
        	if (app.ieUIHelper.isIe8Browser()){
    			app.ieUIHelper.wrapSelectsOnDecoration(item); // ?????  does not work!
    		}        	

            $(item.uiid).addClass(errCss);
            
            // If we have complex UI control and want highlight simple UI element but add triangle for whole container
            var elementRefId = item.containerUiid ? item.containerUiid : item.uiid;
            
            var errorItemId = elementRefId + "_error"; 
            if($(errorItemId).length == 0 )
            {
            	$('<div class="errorCell" id="' + errorItemId.replace('#', '') + '"></div>').insertAfter(elementRefId);
            	$(elementRefId).addClass('leftalign');
            }
            else
            {
            	$(errorItemId).show();
            }            
           
            if($(errorItemId).children().length == 0)
            {
            	$(errorItemId).addClass("tooltip_err");
            	$(errorItemId).append('<span class="hint_err" data-translationkey="' + item.err + '"></span>');
            }
        });
        
        translator.run('.tooltip_err');
        
        try
        {
        	if(validationRez.length > 0 && !skeepFocus)
	        {
	        	this.focusControl(validationRez[0].uiid);
	        }
        }
        catch(error)
        {
        	BRB.Log(logPrefix + 'ERORR!!! ' + error);
        }
    };
  //---------------------------------------------------------------
    
    this.focusControl = function(controlId)
    {
    	var sMethod = 'focusControl() ';
        BRB.Log(logPrefix + sMethod);
        
        BRB.Log(controlId + ' type: ' + $(controlId).prop('tagName'));
        
        $.mobile.silentScroll($(controlId).offset().top - 120);
        $(controlId).focus();
        
        
        if($(controlId).prop('tagName') == 'SELECT')
        {
        	$(controlId).trigger('click');
        }
    };
  //---------------------------------------------------------------  
};