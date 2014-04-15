ensureNamespaceExists();

WICI.ValidationDecorator = function(config) {
    var logPrefix = '[WICI.ValidationDecorator]::';
    var errCss = 'errorField';
  //---------------------------------------------------------------
    this.clearErrArrtibute = function(){
        var sMethod = 'clearErrArrtibute() ';
        console.log(logPrefix + sMethod);
        
        $('.'+errCss).removeClass(errCss);
    };
  //---------------------------------------------------------------
    this.applyErrAttribute = function(validationRez, skeepFocus){
        var sMethod = 'applyErrAttribute() ';
        console.log(logPrefix + sMethod);
        
        if(!validationRez || validationRez.lenght<=0){
            return;
        }
        
        $.each(validationRez, function(index, item) {
            $(item.uiid).addClass(errCss);
        });
        
        try
        {
        	if(validationRez.length > 0 && !skeepFocus)
	        {
	        	this.focusControl(validationRez[0].uiid);
	        }
        }
        catch(error)
        {
        	console.log(logPrefix + 'ERORR!!! ' + error);
        }
    };
  //---------------------------------------------------------------
    
    this.focusControl = function(controlId)
    {
    	var sMethod = 'focusControl() ';
        console.log(logPrefix + sMethod);
        
        console.log(controlId + ' type: ' + $(controlId).prop('tagName'));
        
        $.mobile.silentScroll($(controlId).offset().top - 120);
        $(controlId).focus();
        
        
        if($(controlId).prop('tagName') == 'SELECT')
        {
        	$(controlId).trigger('click');
        }
/*        else if($(controlId).prop('tagName') == 'INPUT')
        {
        	$(controlId).focus();
        }
        else if($(controlId).prop('tagName') == 'TABLE')
        {
        	$('body').scrollTo(controlId, controlId);	
        }*/
    }
  //---------------------------------------------------------------  
};