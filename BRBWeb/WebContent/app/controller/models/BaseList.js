ensureNamespaceExists();

BRB.BaseList = function() {
	var logPrefix = '[BRB.BaseList]::';
	
    this.fillSelectControl=function(controlId){
    	var sMethod = 'fillSelectControl() ';
        BRB.Log(logPrefix + sMethod);

        if($(controlId+' option').length>1){
            BRB.Log(logPrefix + sMethod +" select control is already populated.");
            return;
        }
        
        var controlRef=$(controlId);
        controlRef.empty();
        
        $.each(this.data, function(index, item) {  
        	if (item) {
       			var optTempl = '<option value="' + item.value + '">' + app.translator.translateKey(item.text) + '</option>';            
       			controlRef.append(optTempl);
        	}
        });
    };
};
