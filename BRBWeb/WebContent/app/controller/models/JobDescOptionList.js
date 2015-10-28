ensureNamespaceExists();

BRB.JobDescOptionList = function(argTranslator) {
	var logPrefix = '[BRB.JobTitlesList]::';
	this.translator = argTranslator;
	
	this.data= [
				//TRADERS
				{ value: null, text: 'jobDescList_null'},
				{ value: 'TR_BD', text: 'jobDescList_TR_BD'},
				{ value: 'TR_BL', text: 'jobDescList_TR_BL'},
				{ value: 'TR_CM', text: 'jobDescList_TR_CM'},
				{ value: 'TR_CP', text: 'jobDescList_TR_CP'},
				{ value: 'TR_CF', text: 'jobDescList_TR_CF'},
				{ value: 'TR_ET', text: 'jobDescList_TR_ET'},
				{ value: 'TR_GZ', text: 'jobDescList_TR_GZ'},
				{ value: 'TR_EO', text: 'jobDescList_TR_EO'},
				{ value: 'TR_FC', text: 'jobDescList_TR_FC'},
				{ value: 'TR_GF', text: 'jobDescList_TR_GF'},
				{ value: 'TR_GC', text: 'jobDescList_TR_GC'},
				{ value: 'TR_IS', text: 'jobDescList_TR_IS'},
				{ value: 'TR_IW', text: 'jobDescList_TR_IW'},
				{ value: 'TR_LS', text: 'jobDescList_TR_LS'},
				{ value: 'TR_MF', text: 'jobDescList_TR_MF'},
				{ value: 'TR_MW', text: 'jobDescList_TR_MW'},
				{ value: 'TR_PR', text: 'jobDescList_TR_PR'},
				{ value: 'TR_PF', text: 'jobDescList_TR_PF'},
				{ value: 'TR_PT', text: 'jobDescList_TR_PT'},
				{ value: 'TR_PB', text: 'jobDescList_TR_PB'},
				{ value: 'TR_PL', text: 'jobDescList_TR_PL'},
				{ value: 'TR_SM', text: 'jobDescList_TR_SM'},
				{ value: 'TR_TP', text: 'jobDescList_TR_TP'},
				{ value: 'TR_TS', text: 'jobDescList_TR_TS'},
				{ value: 'TR_WD', text: 'jobDescList_TR_WD'},
				{ value: 'TR_OR', text: 'jobDescList_TR_OR'},	
				
				// DRIVER
				{ value: 'DR_AD', text: 'jobDescList_DR_AD'},
				{ value: 'DR_BD', text: 'jobDescList_DR_BD'},
				{ value: 'DR_CF', text: 'jobDescList_DR_CF'},
				{ value: 'DR_CR', text: 'jobDescList_DR_CR'},
				{ value: 'DR_DI', text: 'jobDescList_DR_DI'},
				{ value: 'DR_TO', text: 'jobDescList_DR_TO'},
				{ value: 'DR_TD', text: 'jobDescList_DR_TD'},
				{ value: 'DR_OR', text: 'jobDescList_DR_OR'},
				
				// MILITARY
				{ value: 'MI_AM', text: 'jobDescList_MI_AM'},
				{ value: 'MI_AI', text: 'jobDescList_MI_AI'},
				{ value: 'MI_NY', text: 'jobDescList_MI_NY'},
				{ value: 'MI_AR', text: 'jobDescList_MI_AR'},
				{ value: 'MI_MR', text: 'jobDescList_MI_MR'},
				{ value: 'MI_OR', text: 'jobDescList_MI_OR'},
				
				// PROFESSIONAL
				{ value: 'PR_AT', text: 'jobDescList_PR_AT'},
				{ value: 'PR_AY', text: 'jobDescList_PR_AY'},
				{ value: 'PR_AD', text: 'jobDescList_PR_AD'},
				{ value: 'PR_CR', text: 'jobDescList_PR_CR'},
				{ value: 'PR_CP', text: 'jobDescList_PR_CP'},
				{ value: 'PR_CT', text: 'jobDescList_PR_CT'},
				{ value: 'PR_CL', text: 'jobDescList_PR_CL'},
				{ value: 'PR_CO', text: 'jobDescList_PR_CO'},
				{ value: 'PR_DH', text: 'jobDescList_PR_DH'},
				{ value: 'PR_DT', text: 'jobDescList_PR_DT'},
				{ value: 'PR_DI', text: 'jobDescList_PR_DI'},
				{ value: 'PR_DR', text: 'jobDescList_PR_DR'},
				{ value: 'PR_EG', text: 'jobDescList_PR_EG'},
				{ value: 'PR_EX', text: 'jobDescList_PR_EX'},
				{ value: 'PR_FA', text: 'jobDescList_PR_FA'},
				{ value: 'PR_JD', text: 'jobDescList_PR_JD'},
				{ value: 'PR_LW', text: 'jobDescList_PR_LW'},
				{ value: 'PR_MY', text: 'jobDescList_PR_MY'},
				{ value: 'PR_NU', text: 'jobDescList_PR_NU'},
				{ value: 'PR_OP', text: 'jobDescList_PR_OP'},
				{ value: 'PR_PL', text: 'jobDescList_PR_PL'},
				{ value: 'PR_PR', text: 'jobDescList_PR_PR'},
				{ value: 'PR_PC', text: 'jobDescList_PR_PC'},
				{ value: 'PR_PT', text: 'jobDescList_PR_PT'},
				{ value: 'PR_PI', text: 'jobDescList_PR_PI'},
				{ value: 'PR_PO', text: 'jobDescList_PR_PO'},
				{ value: 'PR_PA', text: 'jobDescList_PR_PA'},
				{ value: 'PR_PF', text: 'jobDescList_PR_PF'},
				{ value: 'PR_PM', text: 'jobDescList_PR_PM'},
				{ value: 'PR_RG', text: 'jobDescList_PR_RG'},
				{ value: 'PR_SW', text: 'jobDescList_PR_SW'},
				{ value: 'PR_TC', text: 'jobDescList_PR_TC'},
				{ value: 'PR_VN', text: 'jobDescList_PR_VN'},
				{ value: 'PR_OR', text: 'jobDescList_PR_OR'},	
				
				// PRODUCTION WORKER
				{ value: 'FA_AS', text: 'jobDescList_FA_AS'},
				{ value: 'FA_BD', text: 'jobDescList_FA_BD'},
				{ value: 'FA_BM', text: 'jobDescList_FA_BM'},
				{ value: 'FA_FC', text: 'jobDescList_FA_FC'},
				{ value: 'FA_FD', text: 'jobDescList_FA_FD'},
				{ value: 'FA_LH', text: 'jobDescList_FA_LH'},
				{ value: 'FA_MH', text: 'jobDescList_FA_MH'},
				{ value: 'FA_MO', text: 'jobDescList_FA_MO'},
				{ value: 'FA_MN', text: 'jobDescList_FA_MN'},
				{ value: 'FA_MW', text: 'jobDescList_FA_MW'},
				{ value: 'FA_MG', text: 'jobDescList_FA_MG'},
				{ value: 'FA_MI', text: 'jobDescList_FA_MI'},
				{ value: 'FA_OP', text: 'jobDescList_FA_OP'},
				{ value: 'FA_PK', text: 'jobDescList_FA_PK'},
				{ value: 'FA_PT', text: 'jobDescList_FA_PT'},
				{ value: 'FA_QS', text: 'jobDescList_FA_QS'},
				{ value: 'FA_ST', text: 'jobDescList_FA_ST'},
				{ value: 'FA_SW', text: 'jobDescList_FA_SW'},
				{ value: 'FA_SO', text: 'jobDescList_FA_SO'},
				{ value: 'FA_SV', text: 'jobDescList_FA_SV'},
				{ value: 'FA_TM', text: 'jobDescList_FA_TM'},
				{ value: 'FA_WW', text: 'jobDescList_FA_WW'},
				{ value: 'FA_WD', text: 'jobDescList_FA_WD'},
				{ value: 'FA_OR', text: 'jobDescList_FA_OR'},	
				
				// GUARD
				{ value: 'GU_CO', text: 'jobDescList_GU_CO'},
				{ value: 'GU_CS', text: 'jobDescList_GU_CS'},
				{ value: 'GU_DT', text: 'jobDescList_GU_DT'},
				{ value: 'GU_FF', text: 'jobDescList_GU_FF'},
				{ value: 'GU_PR', text: 'jobDescList_GU_PR'},
				{ value: 'GU_SG', text: 'jobDescList_GU_SG'},
				{ value: 'GU_OR', text: 'jobDescList_GU_OR'},	
				
				// MANAGER
				{ value: 'MA_AE', text: 'jobDescList_MA_AE'},
				{ value: 'MA_AG', text: 'jobDescList_MA_AG'},
				{ value: 'MA_CO', text: 'jobDescList_MA_CO'},
				{ value: 'MA_ED', text: 'jobDescList_MA_ED'},
				{ value: 'MA_FB', text: 'jobDescList_MA_FB'},
				{ value: 'MA_FS', text: 'jobDescList_MA_FS'},
				{ value: 'MA_MH', text: 'jobDescList_MA_MH'},
				{ value: 'MA_FO', text: 'jobDescList_MA_FO'},
				{ value: 'MA_GV', text: 'jobDescList_MA_GV'},
				{ value: 'MA_MF', text: 'jobDescList_MA_MF'},
				{ value: 'MA_ME', text: 'jobDescList_MA_ME'},
				{ value: 'MA_MI', text: 'jobDescList_MA_MI'},
				{ value: 'MA_RE', text: 'jobDescList_MA_RE'},
				{ value: 'MA_RT', text: 'jobDescList_MA_RT'},
				{ value: 'MA_TH', text: 'jobDescList_MA_TH'},
				{ value: 'MA_WS', text: 'jobDescList_MA_WS'},
				{ value: 'MA_OR', text: 'jobDescList_MA_OR'},	
				
				// OWNER
				{ value: 'OW_AO', text: 'jobDescList_OW_AO'},
				{ value: 'OW_CT', text: 'jobDescList_OW_CT'},
				{ value: 'OW_CO', text: 'jobDescList_OW_CO'},
				{ value: 'OW_FM', text: 'jobDescList_OW_FM'},
				{ value: 'OW_FO', text: 'jobDescList_OW_FO'},
				{ value: 'OW_JO', text: 'jobDescList_OW_JO'},
				{ value: 'OW_RO', text: 'jobDescList_OW_RO'},
				{ value: 'OW_SO', text: 'jobDescList_OW_SO'},
				{ value: 'OW_OR', text: 'jobDescList_OW_OR'},	
				
				// OTHER
				{ value: 'OT_AR', text: 'jobDescList_OT_AR'},
				{ value: 'OT_AT', text: 'jobDescList_OT_AT'},
				{ value: 'OT_CL', text: 'jobDescList_OT_CL'},
				{ value: 'OT_CO', text: 'jobDescList_OT_CO'},
				{ value: 'OT_CM', text: 'jobDescList_OT_CM'},
				{ value: 'OT_DC', text: 'jobDescList_OT_DC'},
				{ value: 'OT_DS', text: 'jobDescList_OT_DS'},
				{ value: 'OT_DJ', text: 'jobDescList_OT_DJ'},
				{ value: 'OT_ED', text: 'jobDescList_OT_ED'},
				{ value: 'OT_GA', text: 'jobDescList_OT_GA'},
				{ value: 'OT_LE', text: 'jobDescList_OT_LE'},
				{ value: 'OT_MS', text: 'jobDescList_OT_MS'},
				{ value: 'OT_PG', text: 'jobDescList_OT_PG'},
				{ value: 'OT_PD', text: 'jobDescList_OT_PD'},
				{ value: 'OT_RF', text: 'jobDescList_OT_RF'},
				{ value: 'OT_SE', text: 'jobDescList_OT_SE'},
				{ value: 'OT_SH', text: 'jobDescList_OT_SH'},
				{ value: 'OT_WC', text: 'jobDescList_OT_WC'},
				{ value: 'OT_WR', text: 'jobDescList_OT_WR'},
				{ value: 'OT_OR', text: 'jobDescList_OT_OR'},	
				
				// SALES
				{ value: 'SA_AT', text: 'jobDescList_SA_AT'},
				{ value: 'SA_BK', text: 'jobDescList_SA_BK'},
				{ value: 'SA_BY', text: 'jobDescList_SA_BY'},
				{ value: 'SA_DS', text: 'jobDescList_SA_DS'},
				{ value: 'SA_IA', text: 'jobDescList_SA_IA'},
				{ value: 'SA_RT', text: 'jobDescList_SA_RT'},
				{ value: 'SA_SA', text: 'jobDescList_SA_SA'},
				{ value: 'SA_SM', text: 'jobDescList_SA_SM'},
				{ value: 'SA_SB', text: 'jobDescList_SA_SB'},
				{ value: 'SA_OR', text: 'jobDescList_SA_OR'},	
				
				// SERVICE
				{ value: 'SE_BT', text: 'jobDescList_SE_BT'},
				{ value: 'SE_BP', text: 'jobDescList_SE_BP'},
				{ value: 'SE_BC', text: 'jobDescList_SE_BC'},
				{ value: 'SE_BL', text: 'jobDescList_SE_BL'},
				{ value: 'SE_CH', text: 'jobDescList_SE_CH'},
				{ value: 'SE_CW', text: 'jobDescList_SE_CW'},
				{ value: 'SE_AT', text: 'jobDescList_SE_AT'},
				{ value: 'SE_CS', text: 'jobDescList_SE_CS'},
				{ value: 'SE_CJ', text: 'jobDescList_SE_CJ'},
				{ value: 'SE_CR', text: 'jobDescList_SE_CR'},
				{ value: 'SE_FT', text: 'jobDescList_SE_FT'},
				{ value: 'SE_FA', text: 'jobDescList_SE_FA'},
				{ value: 'SE_FR', text: 'jobDescList_SE_FR'},
				{ value: 'SE_FS', text: 'jobDescList_SE_FS'},
				{ value: 'SE_GM', text: 'jobDescList_SE_GM'},
				{ value: 'SE_HB', text: 'jobDescList_SE_HB'},
				{ value: 'SE_HC', text: 'jobDescList_SE_HC'},
				{ value: 'SE_HK', text: 'jobDescList_SE_HK'},
				{ value: 'SE_IE', text: 'jobDescList_SE_IE'},
				{ value: 'SE_MT', text: 'jobDescList_SE_MT'},
				{ value: 'SE_PC', text: 'jobDescList_SE_PC'},
				{ value: 'SE_PG', text: 'jobDescList_SE_PG'},
				{ value: 'SE_PW', text: 'jobDescList_SE_PW'},
				{ value: 'SE_SW', text: 'jobDescList_SE_SW'},
				{ value: 'SE_TG', text: 'jobDescList_SE_TG'},
				{ value: 'SE_TA', text: 'jobDescList_SE_TA'},
				{ value: 'SE_WW', text: 'jobDescList_SE_WW'},
				{ value: 'SE_OR', text: 'jobDescList_SE_OR'},	
				
				// REPAIRER
				{ value: 'RE_AR', text: 'jobDescList_RE_AR'},
				{ value: 'RE_AB', text: 'jobDescList_RE_AB'},
				{ value: 'RE_CT', text: 'jobDescList_RE_CT'},
				{ value: 'RE_HP', text: 'jobDescList_RE_HP'},
				{ value: 'RE_HM', text: 'jobDescList_RE_HM'},
				{ value: 'RE_MW', text: 'jobDescList_RE_MW'},
				{ value: 'RE_MC', text: 'jobDescList_RE_MC'},
				{ value: 'RE_SS', text: 'jobDescList_RE_SS'},
				{ value: 'RE_SR', text: 'jobDescList_RE_SR'},
				{ value: 'RE_TR', text: 'jobDescList_RE_TR'},
				{ value: 'RE_TT', text: 'jobDescList_RE_TT'},
				{ value: 'RE_US', text: 'jobDescList_RE_US'},
				{ value: 'RE_OR', text: 'jobDescList_RE_OR'},	
				
				// LABOURER
				{ value: 'LA_BB', text: 'jobDescList_LA_BB'},
				{ value: 'LA_CM', text: 'jobDescList_LA_CM'},
				{ value: 'LA_CL', text: 'jobDescList_LA_CL'},
				{ value: 'LA_DM', text: 'jobDescList_LA_DM'},
				{ value: 'LA_DL', text: 'jobDescList_LA_DL'},
				{ value: 'LA_GR', text: 'jobDescList_LA_GR'},
				{ value: 'LA_EO', text: 'jobDescList_LA_EO'},
				{ value: 'LA_FH', text: 'jobDescList_LA_FH'},
				{ value: 'LA_FI', text: 'jobDescList_LA_FI'},
				{ value: 'LA_FL', text: 'jobDescList_LA_FL'},
				{ value: 'LA_GA', text: 'jobDescList_LA_GA'},
				{ value: 'LA_GD', text: 'jobDescList_LA_GD'},
				{ value: 'LA_GK', text: 'jobDescList_LA_GK'},
				{ value: 'LA_IS', text: 'jobDescList_LA_IS'},
				{ value: 'LA_LG', text: 'jobDescList_LA_LG'},
				{ value: 'LA_LA', text: 'jobDescList_LA_LA'},
				{ value: 'LA_MS', text: 'jobDescList_LA_MS'},
				{ value: 'LA_MW', text: 'jobDescList_LA_MW'},
				{ value: 'LA_MI', text: 'jobDescList_LA_MI'},
				{ value: 'LA_MO', text: 'jobDescList_LA_MO'},
				{ value: 'LA_OI', text: 'jobDescList_LA_OI'},
				{ value: 'LA_PT', text: 'jobDescList_LA_PT'},
				{ value: 'LA_PV', text: 'jobDescList_LA_PV'},
				{ value: 'LA_PR', text: 'jobDescList_LA_PR'},
				{ value: 'LA_RF', text: 'jobDescList_LA_RF'},
				{ value: 'LA_SC', text: 'jobDescList_LA_SC'},
				{ value: 'LA_SR', text: 'jobDescList_LA_SR'},
				{ value: 'LA_WW', text: 'jobDescList_LA_WW'},
				{ value: 'LA_OR', text: 'jobDescList_LA_OR'},	
				
				// OFFICE STAFF
				{ value: 'OF_AM', text: 'jobDescList_OF_AM'},
				{ value: 'OF_AR', text: 'jobDescList_OF_AR'},
				{ value: 'OF_AA', text: 'jobDescList_OF_AA'},
				{ value: 'OF_AP', text: 'jobDescList_OF_AP'},
				{ value: 'OF_BT', text: 'jobDescList_OF_BT'},
				{ value: 'OF_BI', text: 'jobDescList_OF_BI'},
				{ value: 'OF_CO', text: 'jobDescList_OF_CO'},
				{ value: 'OF_CI', text: 'jobDescList_OF_CI'},
				{ value: 'OF_CA', text: 'jobDescList_OF_CA'},
				{ value: 'OF_CT', text: 'jobDescList_OF_CT'},
				{ value: 'OF_CS', text: 'jobDescList_OF_CS'},
				{ value: 'OF_CR', text: 'jobDescList_OF_CR'},
				{ value: 'OF_DO', text: 'jobDescList_OF_DO'},
				{ value: 'OF_DP', text: 'jobDescList_OF_DP'},
				{ value: 'OF_ET', text: 'jobDescList_OF_ET'},
				{ value: 'OF_ES', text: 'jobDescList_OF_ES'},
				{ value: 'OF_HR', text: 'jobDescList_OF_HR'},
				{ value: 'OF_IC', text: 'jobDescList_OF_IC'},
				{ value: 'OF_JL', text: 'jobDescList_OF_JL'},
				{ value: 'OF_LA', text: 'jobDescList_OF_LA'},
				{ value: 'OF_LB', text: 'jobDescList_OF_LB'},
				{ value: 'OF_PM', text: 'jobDescList_OF_PM'},
				{ value: 'OF_RC', text: 'jobDescList_OF_RC'},
				{ value: 'OF_RT', text: 'jobDescList_OF_RT'},
				{ value: 'OF_TS', text: 'jobDescList_OF_TS'},
				{ value: 'OF_UW', text: 'jobDescList_OF_UW'},
				{ value: 'OF_WD', text: 'jobDescList_OF_WD'},
				{ value: 'OF_OR', text: 'jobDescList_OF_OR'},
				
				{ value: 'HO', text: 'jobDescList_HO'},
				{ value: 'RT', text: 'jobDescList_RT'},
				{ value: 'UN', text: 'jobDescList_UN'},
				{ value: 'ST', text: 'jobDescList_ST'}
				
	        ];      
	   


};
BRB.JobDescOptionList.prototype = new BRB.BaseList();