// US3621
ensureNamespaceExists();

WICI.JobTitlesList = function() {
    this.data= [
			//TRADERS
			{ value: null, text: 'jobTitlesList_null'},
			{ value: 'TR_BD', text: 'jobTitlesList_TR_BD'},
			{ value: 'TR_BL', text: 'jobTitlesList_TR_BL'},
			{ value: 'TR_CM', text: 'jobTitlesList_TR_CM'},
			{ value: 'TR_CP', text: 'jobTitlesList_TR_CP'},
			{ value: 'TR_CF', text: 'jobTitlesList_TR_CF'},
			{ value: 'TR_ET', text: 'jobTitlesList_TR_ET'},
			{ value: 'TR_GZ', text: 'jobTitlesList_TR_GZ'},
			{ value: 'TR_EO', text: 'jobTitlesList_TR_EO'},
			{ value: 'TR_FC', text: 'jobTitlesList_TR_FC'},
			{ value: 'TR_GF', text: 'jobTitlesList_TR_GF'},
			{ value: 'TR_GC', text: 'jobTitlesList_TR_GC'},
			{ value: 'TR_IS', text: 'jobTitlesList_TR_IS'},
			{ value: 'TR_IW', text: 'jobTitlesList_TR_IW'},
			{ value: 'TR_LS', text: 'jobTitlesList_TR_LS'},
			{ value: 'TR_MF', text: 'jobTitlesList_TR_MF'},
			{ value: 'TR_MW', text: 'jobTitlesList_TR_MW'},
			{ value: 'TR_PR', text: 'jobTitlesList_TR_PR'},
			{ value: 'TR_PF', text: 'jobTitlesList_TR_PF'},
			{ value: 'TR_PT', text: 'jobTitlesList_TR_PT'},
			{ value: 'TR_PB', text: 'jobTitlesList_TR_PB'},
			{ value: 'TR_PL', text: 'jobTitlesList_TR_PL'},
			{ value: 'TR_SM', text: 'jobTitlesList_TR_SM'},
			{ value: 'TR_TP', text: 'jobTitlesList_TR_TP'},
			{ value: 'TR_TS', text: 'jobTitlesList_TR_TS'},
			{ value: 'TR_WD', text: 'jobTitlesList_TR_WD'},
			{ value: 'TR_OR', text: 'jobTitlesList_TR_OR'},	
			
			// DRIVER
			{ value: 'DR_AD', text: 'jobTitlesList_DR_AD'},
			{ value: 'DR_BD', text: 'jobTitlesList_DR_BD'},
			{ value: 'DR_CF', text: 'jobTitlesList_DR_CF'},
			{ value: 'DR_CR', text: 'jobTitlesList_DR_CR'},
			{ value: 'DR_DI', text: 'jobTitlesList_DR_DI'},
			{ value: 'DR_TO', text: 'jobTitlesList_DR_TO'},
			{ value: 'DR_TD', text: 'jobTitlesList_DR_TD'},
			{ value: 'DR_OR', text: 'jobTitlesList_DR_OR'},
			
			// MILITARY
			{ value: 'MI_AM', text: 'jobTitlesList_MI_AM'},
			{ value: 'MI_AI', text: 'jobTitlesList_MI_AI'},
			{ value: 'MI_NY', text: 'jobTitlesList_MI_NY'},
			{ value: 'MI_AR', text: 'jobTitlesList_MI_AR'},
			{ value: 'MI_MR', text: 'jobTitlesList_MI_MR'},
			{ value: 'MI_OR', text: 'jobTitlesList_MI_OR'},
			
			// PROFESSIONAL
			{ value: 'PR_AT', text: 'jobTitlesList_PR_AT'},
			{ value: 'PR_AY', text: 'jobTitlesList_PR_AY'},
			{ value: 'PR_AD', text: 'jobTitlesList_PR_AD'},
			{ value: 'PR_CR', text: 'jobTitlesList_PR_CR'},
			{ value: 'PR_CP', text: 'jobTitlesList_PR_CP'},
			{ value: 'PR_CT', text: 'jobTitlesList_PR_CT'},
			{ value: 'PR_CL', text: 'jobTitlesList_PR_CL'},
			{ value: 'PR_CO', text: 'jobTitlesList_PR_CO'},
			{ value: 'PR_DH', text: 'jobTitlesList_PR_DH'},
			{ value: 'PR_DT', text: 'jobTitlesList_PR_DT'},
			{ value: 'PR_DI', text: 'jobTitlesList_PR_DI'},
			{ value: 'PR_DR', text: 'jobTitlesList_PR_DR'},
			{ value: 'PR_EG', text: 'jobTitlesList_PR_EG'},
			{ value: 'PR_EX', text: 'jobTitlesList_PR_EX'},
			{ value: 'PR_FA', text: 'jobTitlesList_PR_FA'},
			{ value: 'PR_JD', text: 'jobTitlesList_PR_JD'},
			{ value: 'PR_LW', text: 'jobTitlesList_PR_LW'},
			{ value: 'PR_MY', text: 'jobTitlesList_PR_MY'},
			{ value: 'PR_NU', text: 'jobTitlesList_PR_NU'},
			{ value: 'PR_OP', text: 'jobTitlesList_PR_OP'},
			{ value: 'PR_PL', text: 'jobTitlesList_PR_PL'},
			{ value: 'PR_PR', text: 'jobTitlesList_PR_PR'},
			{ value: 'PR_PC', text: 'jobTitlesList_PR_PC'},
			{ value: 'PR_PT', text: 'jobTitlesList_PR_PT'},
			{ value: 'PR_PI', text: 'jobTitlesList_PR_PI'},
			{ value: 'PR_PO', text: 'jobTitlesList_PR_PO'},
			{ value: 'PR_PA', text: 'jobTitlesList_PR_PA'},
			{ value: 'PR_PF', text: 'jobTitlesList_PR_PF'},
			{ value: 'PR_PM', text: 'jobTitlesList_PR_PM'},
			{ value: 'PR_RG', text: 'jobTitlesList_PR_RG'},
			{ value: 'PR_SW', text: 'jobTitlesList_PR_SW'},
			{ value: 'PR_TC', text: 'jobTitlesList_PR_TC'},
			{ value: 'PR_VN', text: 'jobTitlesList_PR_VN'},
			{ value: 'PR_OR', text: 'jobTitlesList_PR_OR'},	
			
			// PRODUCTION WORKER
			{ value: 'FA_AS', text: 'jobTitlesList_FA_AS'},
			{ value: 'FA_BD', text: 'jobTitlesList_FA_BD'},
			{ value: 'FA_BM', text: 'jobTitlesList_FA_BM'},
			{ value: 'FA_FC', text: 'jobTitlesList_FA_FC'},
			{ value: 'FA_FD', text: 'jobTitlesList_FA_FD'},
			{ value: 'FA_LH', text: 'jobTitlesList_FA_LH'},
			{ value: 'FA_MH', text: 'jobTitlesList_FA_MH'},
			{ value: 'FA_MO', text: 'jobTitlesList_FA_MO'},
			{ value: 'FA_MN', text: 'jobTitlesList_FA_MN'},
			{ value: 'FA_MW', text: 'jobTitlesList_FA_MW'},
			{ value: 'FA_MG', text: 'jobTitlesList_FA_MG'},
			{ value: 'FA_MI', text: 'jobTitlesList_FA_MI'},
			{ value: 'FA_OP', text: 'jobTitlesList_FA_OP'},
			{ value: 'FA_PK', text: 'jobTitlesList_FA_PK'},
			{ value: 'FA_PT', text: 'jobTitlesList_FA_PT'},
			{ value: 'FA_QS', text: 'jobTitlesList_FA_QS'},
			{ value: 'FA_ST', text: 'jobTitlesList_FA_ST'},
			{ value: 'FA_SW', text: 'jobTitlesList_FA_SW'},
			{ value: 'FA_SO', text: 'jobTitlesList_FA_SO'},
			{ value: 'FA_SV', text: 'jobTitlesList_FA_SV'},
			{ value: 'FA_TM', text: 'jobTitlesList_FA_TM'},
			{ value: 'FA_WW', text: 'jobTitlesList_FA_WW'},
			{ value: 'FA_WD', text: 'jobTitlesList_FA_WD'},
			{ value: 'FA_OR', text: 'jobTitlesList_FA_OR'},	
			
			// GUARD
			{ value: 'GU_CO', text: 'jobTitlesList_GU_CO'},
			{ value: 'GU_CS', text: 'jobTitlesList_GU_CS'},
			{ value: 'GU_DT', text: 'jobTitlesList_GU_DT'},
			{ value: 'GU_FF', text: 'jobTitlesList_GU_FF'},
			{ value: 'GU_PR', text: 'jobTitlesList_GU_PR'},
			// US4532
			{ value: 'GU_PO', text: 'jobTitlesList_GU_PO'},	
			{ value: 'GU_SG', text: 'jobTitlesList_GU_SG'},
			{ value: 'GU_OR', text: 'jobTitlesList_GU_OR'},	
			
			
			// MANAGER
			{ value: 'MA_AE', text: 'jobTitlesList_MA_AE'},
			{ value: 'MA_AG', text: 'jobTitlesList_MA_AG'},
			{ value: 'MA_CO', text: 'jobTitlesList_MA_CO'},
			{ value: 'MA_ED', text: 'jobTitlesList_MA_ED'},
			{ value: 'MA_FB', text: 'jobTitlesList_MA_FB'},
			{ value: 'MA_FS', text: 'jobTitlesList_MA_FS'},
			{ value: 'MA_MH', text: 'jobTitlesList_MA_MH'},
			{ value: 'MA_FO', text: 'jobTitlesList_MA_FO'},
			{ value: 'MA_GV', text: 'jobTitlesList_MA_GV'},
			{ value: 'MA_MF', text: 'jobTitlesList_MA_MF'},
			{ value: 'MA_ME', text: 'jobTitlesList_MA_ME'},
			{ value: 'MA_MI', text: 'jobTitlesList_MA_MI'},
			{ value: 'MA_RE', text: 'jobTitlesList_MA_RE'},
			{ value: 'MA_RT', text: 'jobTitlesList_MA_RT'},
			{ value: 'MA_TH', text: 'jobTitlesList_MA_TH'},
			{ value: 'MA_WS', text: 'jobTitlesList_MA_WS'},
			{ value: 'MA_OR', text: 'jobTitlesList_MA_OR'},	
			
			// OWNER
			{ value: 'OW_AO', text: 'jobTitlesList_OW_AO'},
			{ value: 'OW_CT', text: 'jobTitlesList_OW_CT'},
			{ value: 'OW_CO', text: 'jobTitlesList_OW_CO'},
			{ value: 'OW_FM', text: 'jobTitlesList_OW_FM'},
			{ value: 'OW_FO', text: 'jobTitlesList_OW_FO'},
			{ value: 'OW_JO', text: 'jobTitlesList_OW_JO'},
			{ value: 'OW_RO', text: 'jobTitlesList_OW_RO'},
			{ value: 'OW_SO', text: 'jobTitlesList_OW_SO'},
			{ value: 'OW_OR', text: 'jobTitlesList_OW_OR'},	
			
			// OTHER
			{ value: 'OT_AR', text: 'jobTitlesList_OT_AR'},
			{ value: 'OT_AT', text: 'jobTitlesList_OT_AT'},
			{ value: 'OT_CL', text: 'jobTitlesList_OT_CL'},
			{ value: 'OT_CO', text: 'jobTitlesList_OT_CO'},
			{ value: 'OT_CM', text: 'jobTitlesList_OT_CM'},
			{ value: 'OT_DC', text: 'jobTitlesList_OT_DC'},
			{ value: 'OT_DS', text: 'jobTitlesList_OT_DS'},
			{ value: 'OT_DJ', text: 'jobTitlesList_OT_DJ'},
			{ value: 'OT_ED', text: 'jobTitlesList_OT_ED'},
			{ value: 'OT_GA', text: 'jobTitlesList_OT_GA'},
			{ value: 'OT_LE', text: 'jobTitlesList_OT_LE'},
			{ value: 'OT_MS', text: 'jobTitlesList_OT_MS'},
			{ value: 'OT_PG', text: 'jobTitlesList_OT_PG'},
			{ value: 'OT_PD', text: 'jobTitlesList_OT_PD'},
			{ value: 'OT_RF', text: 'jobTitlesList_OT_RF'},
			{ value: 'OT_SE', text: 'jobTitlesList_OT_SE'},
			{ value: 'OT_SH', text: 'jobTitlesList_OT_SH'},
			{ value: 'OT_WC', text: 'jobTitlesList_OT_WC'},
			{ value: 'OT_WR', text: 'jobTitlesList_OT_WR'},
			{ value: 'OT_OR', text: 'jobTitlesList_OT_OR'},	
			
			// SALES
			{ value: 'SA_AT', text: 'jobTitlesList_SA_AT'},
			{ value: 'SA_BK', text: 'jobTitlesList_SA_BK'},
			{ value: 'SA_BY', text: 'jobTitlesList_SA_BY'},
			{ value: 'SA_DS', text: 'jobTitlesList_SA_DS'},
			{ value: 'SA_IA', text: 'jobTitlesList_SA_IA'},
			{ value: 'SA_RT', text: 'jobTitlesList_SA_RT'},
			{ value: 'SA_SA', text: 'jobTitlesList_SA_SA'},
			{ value: 'SA_SM', text: 'jobTitlesList_SA_SM'},
			{ value: 'SA_SB', text: 'jobTitlesList_SA_SB'},
			{ value: 'SA_OR', text: 'jobTitlesList_SA_OR'},	
			
			// SERVICE
			{ value: 'SE_BT', text: 'jobTitlesList_SE_BT'},
			{ value: 'SE_BP', text: 'jobTitlesList_SE_BP'},
			{ value: 'SE_BC', text: 'jobTitlesList_SE_BC'},
			{ value: 'SE_BL', text: 'jobTitlesList_SE_BL'},
			{ value: 'SE_CH', text: 'jobTitlesList_SE_CH'},
			{ value: 'SE_CW', text: 'jobTitlesList_SE_CW'},
			{ value: 'SE_AT', text: 'jobTitlesList_SE_AT'},
			{ value: 'SE_CS', text: 'jobTitlesList_SE_CS'},
			{ value: 'SE_CJ', text: 'jobTitlesList_SE_CJ'},
			{ value: 'SE_CR', text: 'jobTitlesList_SE_CR'},
			{ value: 'SE_FT', text: 'jobTitlesList_SE_FT'},
			{ value: 'SE_FA', text: 'jobTitlesList_SE_FA'},
			{ value: 'SE_FR', text: 'jobTitlesList_SE_FR'},
			{ value: 'SE_FS', text: 'jobTitlesList_SE_FS'},
			{ value: 'SE_GM', text: 'jobTitlesList_SE_GM'},
			{ value: 'SE_HB', text: 'jobTitlesList_SE_HB'},
			{ value: 'SE_HC', text: 'jobTitlesList_SE_HC'},
			{ value: 'SE_HK', text: 'jobTitlesList_SE_HK'},
			{ value: 'SE_IE', text: 'jobTitlesList_SE_IE'},
			{ value: 'SE_MT', text: 'jobTitlesList_SE_MT'},
			{ value: 'SE_PC', text: 'jobTitlesList_SE_PC'},
			{ value: 'SE_PG', text: 'jobTitlesList_SE_PG'},
			{ value: 'SE_PW', text: 'jobTitlesList_SE_PW'},
			{ value: 'SE_SW', text: 'jobTitlesList_SE_SW'},
			{ value: 'SE_TG', text: 'jobTitlesList_SE_TG'},
			{ value: 'SE_TA', text: 'jobTitlesList_SE_TA'},
			{ value: 'SE_WW', text: 'jobTitlesList_SE_WW'},
			{ value: 'SE_OR', text: 'jobTitlesList_SE_OR'},	
			
			// REPAIRER
			{ value: 'RE_AR', text: 'jobTitlesList_RE_AR'},
			{ value: 'RE_AB', text: 'jobTitlesList_RE_AB'},
			{ value: 'RE_CT', text: 'jobTitlesList_RE_CT'},
			{ value: 'RE_HP', text: 'jobTitlesList_RE_HP'},
			{ value: 'RE_HM', text: 'jobTitlesList_RE_HM'},
			{ value: 'RE_MW', text: 'jobTitlesList_RE_MW'},
			{ value: 'RE_MC', text: 'jobTitlesList_RE_MC'},
			{ value: 'RE_SS', text: 'jobTitlesList_RE_SS'},
			{ value: 'RE_SR', text: 'jobTitlesList_RE_SR'},
			{ value: 'RE_TR', text: 'jobTitlesList_RE_TR'},
			{ value: 'RE_TT', text: 'jobTitlesList_RE_TT'},
			{ value: 'RE_US', text: 'jobTitlesList_RE_US'},
			{ value: 'RE_OR', text: 'jobTitlesList_RE_OR'},	
			
			// LABOURER
			{ value: 'LA_BB', text: 'jobTitlesList_LA_BB'},
			{ value: 'LA_CM', text: 'jobTitlesList_LA_CM'},
			{ value: 'LA_CL', text: 'jobTitlesList_LA_CL'},
			{ value: 'LA_DM', text: 'jobTitlesList_LA_DM'},
			{ value: 'LA_DL', text: 'jobTitlesList_LA_DL'},
			{ value: 'LA_GR', text: 'jobTitlesList_LA_GR'},
			{ value: 'LA_EO', text: 'jobTitlesList_LA_EO'},
			{ value: 'LA_FH', text: 'jobTitlesList_LA_FH'},
			{ value: 'LA_FI', text: 'jobTitlesList_LA_FI'},
			{ value: 'LA_FL', text: 'jobTitlesList_LA_FL'},
			{ value: 'LA_GA', text: 'jobTitlesList_LA_GA'},
			{ value: 'LA_GD', text: 'jobTitlesList_LA_GD'},
			{ value: 'LA_GK', text: 'jobTitlesList_LA_GK'},
			{ value: 'LA_IS', text: 'jobTitlesList_LA_IS'},
			{ value: 'LA_LG', text: 'jobTitlesList_LA_LG'},
			{ value: 'LA_LA', text: 'jobTitlesList_LA_LA'},
			{ value: 'LA_MS', text: 'jobTitlesList_LA_MS'},
			{ value: 'LA_MW', text: 'jobTitlesList_LA_MW'},
			{ value: 'LA_MI', text: 'jobTitlesList_LA_MI'},
			{ value: 'LA_MO', text: 'jobTitlesList_LA_MO'},
			{ value: 'LA_OI', text: 'jobTitlesList_LA_OI'},
			{ value: 'LA_PT', text: 'jobTitlesList_LA_PT'},
			{ value: 'LA_PV', text: 'jobTitlesList_LA_PV'},
			{ value: 'LA_PR', text: 'jobTitlesList_LA_PR'},
			{ value: 'LA_RF', text: 'jobTitlesList_LA_RF'},
			{ value: 'LA_SC', text: 'jobTitlesList_LA_SC'},
			{ value: 'LA_SR', text: 'jobTitlesList_LA_SR'},
			{ value: 'LA_WW', text: 'jobTitlesList_LA_WW'},
			{ value: 'LA_OR', text: 'jobTitlesList_LA_OR'},	
			
			// OFFICE STAFF
			{ value: 'OF_AM', text: 'jobTitlesList_OF_AM'},
			{ value: 'OF_AR', text: 'jobTitlesList_OF_AR'},
			{ value: 'OF_AA', text: 'jobTitlesList_OF_AA'},
			{ value: 'OF_AP', text: 'jobTitlesList_OF_AP'},
			{ value: 'OF_BT', text: 'jobTitlesList_OF_BT'},
			{ value: 'OF_BI', text: 'jobTitlesList_OF_BI'},
			{ value: 'OF_CO', text: 'jobTitlesList_OF_CO'},
			{ value: 'OF_CI', text: 'jobTitlesList_OF_CI'},
			{ value: 'OF_CA', text: 'jobTitlesList_OF_CA'},
			{ value: 'OF_CT', text: 'jobTitlesList_OF_CT'},
			{ value: 'OF_CS', text: 'jobTitlesList_OF_CS'},
			{ value: 'OF_CR', text: 'jobTitlesList_OF_CR'},
			{ value: 'OF_DO', text: 'jobTitlesList_OF_DO'},
			{ value: 'OF_DP', text: 'jobTitlesList_OF_DP'},
			{ value: 'OF_ET', text: 'jobTitlesList_OF_ET'},
			{ value: 'OF_ES', text: 'jobTitlesList_OF_ES'},
			{ value: 'OF_HR', text: 'jobTitlesList_OF_HR'},
			{ value: 'OF_IC', text: 'jobTitlesList_OF_IC'},
			{ value: 'OF_JL', text: 'jobTitlesList_OF_JL'},
			{ value: 'OF_LA', text: 'jobTitlesList_OF_LA'},
			{ value: 'OF_LB', text: 'jobTitlesList_OF_LB'},
			{ value: 'OF_PM', text: 'jobTitlesList_OF_PM'},
			{ value: 'OF_RC', text: 'jobTitlesList_OF_RC'},
			{ value: 'OF_RT', text: 'jobTitlesList_OF_RT'},
			{ value: 'OF_TS', text: 'jobTitlesList_OF_TS'},
			{ value: 'OF_UW', text: 'jobTitlesList_OF_UW'},
			{ value: 'OF_WD', text: 'jobTitlesList_OF_WD'},
			{ value: 'OF_OR', text: 'jobTitlesList_OF_OR'},
			
			{ value: 'ST_ST', text: 'jobTitlesList_ST'}
        ];
    //----------------------------------------------------------------------------------
    this.getDataByCategory = function(category){
        var sMethod = '[getDataByCategory()] ';
        console.log(sMethod+ ' category:'+category);
        
        if(category==='null'){
            category =null;
        }
        
        var joinRule = new WICI.JobTitlesJoinCategories();
        var idCategoriesFilter=[];
        $.each(joinRule.data, function(index, item) {  
            if(item.Category===category){
            	idCategoriesFilter = item.jobTitles;
                return;
            }
        });
        console.log(sMethod+' idCategoriesFilter: '+idCategoriesFilter);
        
        var filteredData = [];
        $.each(this.data, function(index, item) {  
            if($.inArray(item.value, idCategoriesFilter)!==-1){
                filteredData.push(item);
            }
        });
        
        console.log(sMethod+' filteredData: '+filteredData);
        return filteredData;
    };
    //----------------------------------------------------------------------------------
    
    this.getJobTitleTextByJobValue = function(value){
        var sMethod = '[getJobTitleTextByJobValue()] ';
        console.log(sMethod+ ' value:'+value);
        
        if(value==='null'){
        	value =null;
        }
                
        var filteredData="";
        var joinRule = new WICI.JobTitlesList();
        $.each(joinRule.data, function(index, item) {  
            if(item.value===value){
            	filteredData = item.text;                
            }
        });
        console.log(sMethod+' filteredData: '+filteredData);
        
        return filteredData;
    };
};
