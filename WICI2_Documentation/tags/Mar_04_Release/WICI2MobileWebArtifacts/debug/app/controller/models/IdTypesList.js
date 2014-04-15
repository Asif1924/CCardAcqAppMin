ensureNamespaceExists();

//luk: old name: WICIWebApp.store.IdTypes
//list of all possible provinces

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
            
            /*
            { value: null, text: 'Please select...'},
            { value: 'DR', text: 'Driver\'s License'},
            { value: 'HE', text: 'Health Card'},
            { value: 'PR', text: 'Permanent Resident Card'},
            { value: 'BI', text: 'Birth Certificate'},
            { value: 'CI', text: 'Canadian Citizenship Card'},
            { value: 'PA', text: 'Passport'},
            { value: 'BC', text: 'Insurance Corporation of British Columbia'},
            { value: 'IN', text: 'Certificate of Indian Status'},
            { value: 'AB', text: 'Alberta Registries'},
            { value: 'RE', text: 'Record of Landing'},
            { value: 'NS', text: 'Dept. of Nova Scotia & Municipal Relations'},
            { value: 'NB', text: 'Service New Brunswick'},
            { value: 'NL', text: 'Dept. of Government Services and Lands of Newfoundland and Labrador'},
            { value: 'SK', text: 'Saskatchewan Government Insurance ID'},
            { value: 'MB', text: 'Manitoba Public Insurance'},
            { value: 'PE', text: 'Dept. of Transportation and Public Works of Prince Edward Island'},
            { value: 'NT', text: 'Dept. of Transportation of the Northwest Territories'},
            { value: 'NU', text: 'Dept. of Community Government and Transportation of the Territory of Nunavut'},
            { value: 'YT', text: 'Dept. of Community Services of Yukon'},
            { value: 'ON', text: 'Ontario Ministry of Transportation'}
            
            */
        ];
    //----------------------------------------------------------------------------------
    //luk: returns data list filtered by province value
    this.getDataByProvince = function(province){
        var sMethod = '[getDataByProvince()] ';
        console.log(sMethod+ ' province:'+province);
        
        //luk: quick fix: we get value from the control and it becomes 'string' null if it was assigned...
        if(province==='null'){
            province =null;
        }
        
        var joinRule = new WICI.IdTypesJoinProvinces();
        //luk: get proper item from the jointable
        var idTypesFilter=[];
        $.each(joinRule.data, function(index, item) {  
            if(item.prov===province){
                idTypesFilter = item.idTypes;
                return;
            }
        });
        console.log(sMethod+' idTypesFilter: '+idTypesFilter);
        
        //luk: filter only values that joins with 'idTypesFilter'
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
