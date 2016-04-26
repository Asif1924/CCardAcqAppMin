// US3767 
ensureNamespaceExists();
WICI.PromoCodeList = function() {
    this.data= [
          { value: null, text: 'PromoCodeList_null'},                    
          { value: 'BLANK', text: 'PromoCode_Intecept'},
          { value: '4023', text: 'PromoCode_Grand_Opening'},          
          { value: 'OMCDY', text: 'PromoCode_OMC_Days'},
          { value: '5200', text: 'PromoCode_Eastern_Events'},
          { value: '4024', text: 'PromoCode_Western_Events'},
          { value: '4022', text: 'PromoCode_Eastern_Local'},
          { value: '4029', text: 'PromoCode_Western_Local'},
          { value: 'OTHER', text: 'PromoCode_Other'}          
      ];    
    
    //----------------------------------------------------------------------------------
    this.getDataByProgram = function(program){
        var sMethod = '[getDataByProgram()] ';
        console.log(sMethod+ ' program:'+program);
        
        if(program==='null'){
            program =null;
        }
        
        var joinRule = new WICI.PromoCodeJoinProgram();
        var idPromoCodeFilter=[];
        $.each(joinRule.data, function(index, item) {  
            if(item.Program===program){
            	idPromoCodeFilter = item.promoCodes;
                return;
            }
        });
        console.log(sMethod+' idPromoCodeFilter: '+idPromoCodeFilter);
        
        var filteredData = [];
        $.each(this.data, function(index, item) {  
            if($.inArray(item.value, idPromoCodeFilter)!==-1){
                filteredData.push(item);
            }
        });
        
        console.log(sMethod+' filteredData: '+filteredData);
        return filteredData;
    };
    
};



