ensureNamespaceExists();

WICI.IdTypesList = function() {
    this.data= [
			{ value: null, text: 'IdTypesList_null'},
            { value: 'DR', text: 'IdTypesList_DR'},
            { value: 'HE', text: 'IdTypesList_HE'},
            { value: 'PR', text: 'IdTypesList_PR'},
            { value: 'BI', text: 'IdTypesList_BI'},
            { value: 'CI', text: 'IdTypesList_CI'},
            { value: 'PA', text: 'IdTypesList_PA'},
            { value: 'BC', text: 'IdTypesList_BC'},
            { value: 'IN', text: 'IdTypesList_IN'},
            { value: 'AB', text: 'IdTypesList_AB'},
            { value: 'RE', text: 'IdTypesList_RE'},
            { value: 'NS', text: 'IdTypesList_NS'},
            { value: 'NB', text: 'IdTypesList_NB'},
            { value: 'NL', text: 'IdTypesList_NL'},
            { value: 'SK', text: 'IdTypesList_SK'},
            { value: 'MB', text: 'IdTypesList_MB'},
            { value: 'PE', text: 'IdTypesList_PE'},
            { value: 'NT', text: 'IdTypesList_NT'},
            { value: 'NU', text: 'IdTypesList_NU'},
            { value: 'YT', text: 'IdTypesList_YT'},
            { value: 'ON', text: 'IdTypesList_ON'}
        ];
    //----------------------------------------------------------------------------------
    this.getDataByProvince = function(province){
        var sMethod = '[getDataByProvince()] ';
        console.log(sMethod+ ' province:'+province);
        
        if(province==='null'){
            province =null;
        }
        
        var joinRule = new WICI.IdTypesJoinProvinces();
        var idTypesFilter=[];
        $.each(joinRule.data, function(index, item) {  
            if(item.prov===province){
                idTypesFilter = item.idTypes;
                return;
            }
        });
        console.log(sMethod+' idTypesFilter: '+idTypesFilter);
        
        var filteredData = [];
        $.each(this.data, function(index, item) {  
            if($.inArray(item.value, idTypesFilter)!==-1){
                filteredData.push(item);
            }
        });
        
        console.log(sMethod+' filteredData: '+filteredData);
        return filteredData;
    };
    //----------------------------------------------------------------------------------
};
