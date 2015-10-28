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
    
    //----------------------------------------------------------------------------------
    // US3622 Start
    this.fillJobDesc = function(categorySelected){
    		    	    	  
	   	 var joinRule = new BRB.JobDescJoinTitles();
	     var idTitlesFilter=[];
	     $.each(joinRule.data, function(index, item) {  
	         if(item.Title===categorySelected){
	         	idTitlesFilter = item.jobDesc;         	
	         }
	     });
	    	
	     var filteredData = [];
	     $.each(this.data, function(index, item) {  
	         if($.inArray(item.value, idTitlesFilter)!==-1){
	             filteredData.push(item);
	         }
	     });
	            
	     $('#personalInformation_JobDescription_SelectField').empty();
	         $.each(filteredData, function (index, item) {            
	        	 var optTempl = '<option value="' + item.value + '">' + app.translator.translateKey(item.text) + '</option>';
	         	$('#personalInformation_JobDescription_SelectField').append(optTempl);         
	     });
          	
    };
    
    //----------------------------------------------------------------------------------
    
    this.getJobDescTextByJobValue = function(value){
        var sMethod = '[getJobDescTextByJobValue()] ';
                
        if(value==='null'){
        	value =null;
        }
                
        var filteredData="";
        var joinRule = new BRB.JobDescList();
        $.each(joinRule.data, function(index, item) {  
            if(item.value===value){
            	filteredData = item.text;                
            }
        });       
        
        return filteredData;
    };
    
    //----------------------------------------------------------------------------------
    
    this.getJobDescByJobValue = function(value){
        var sMethod = '[getJobDescByJobValue()] ';
                
        if(value==='null'){
        	value =null;
        }
                
        var filteredData="";
        var joinRule = new BRB.JobDescListMapping();
        $.each(joinRule.data, function(index, item) {  
            if(item.value===value){
            	filteredData = item.text;                
            }
        });
               
        return filteredData;
    };
};

// End
//----------------------------------------------------------------------------------