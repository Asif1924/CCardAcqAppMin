// US3622
ensureNamespaceExists();


BRB.JobDescJoinTitles = function(argTranslator) {
	this.translator = argTranslator;
    this.data= [        
                      {Title:null, jobDesc:[null]},
                      {Title:'TR', jobDesc:[null, 'TR_BL', 'TR_BD', 'TR_CM', 'TR_CP', 'TR_CF', 'TR_ET', 'TR_EO', 'TR_FC', 'TR_GF', 'TR_GC', 'TR_GZ', 'TR_IS', 'TR_IW', 'TR_LS', 'TR_MF', 'TR_MW', 'TR_PR', 'TR_PF', 'TR_PT', 'TR_PB', 'TR_PL', 'TR_SM', 'TR_TP', 'TR_TS', 'TR_WD', 'TR_OR' ]},
                      {Title:'DR', jobDesc:[null, 'DR_AD', 'DR_BD', 'DR_CF', 'DR_CR', 'DR_DI', 'DR_TO', 'DR_TD', 'DR_OR' ]},
                      {Title:'MI', jobDesc:[null, 'MI_AI', 'MI_AR', 'MI_AM', 'MI_MR', 'MI_NY', 'MI_OR' ]},
                      {Title:'PR', jobDesc:[null, 'PR_AT', 'PR_AY', 'PR_AD', 'PR_CR', 'PR_CP', 'PR_CT', 'PR_CL', 'PR_CO', 'PR_DH', 'PR_DT', 'PR_DI', 'PR_DR', 'PR_EG', 'PR_EX', 'PR_FA', 'PR_JD', 'PR_LW', 'PR_MY', 'PR_NU', 'PR_OP', 'PR_PL', 'PR_PR', 'PR_PC', 'PR_PT', 'PR_PI', 'PR_PO', 'PR_PA', 'PR_PF', 'PR_PM', 'PR_RG', 'PR_SW', 'PR_TC', 'PR_VN', 'PR_OR' ]},
                      {Title:'FA', jobDesc:[null, 'FA_AS', 'FA_BD', 'FA_BM', 'FA_FC', 'FA_FD', 'FA_LH', 'FA_MO', 'FA_MN', 'FA_MW', 'FA_MG', 'FA_MH', 'FA_MI', 'FA_OP', 'FA_PK', 'FA_PT', 'FA_QS', 'FA_ST', 'FA_SW', 'FA_SO', 'FA_SV', 'FA_TM', 'FA_WW', 'FA_WD', 'FA_OR' ]},
                      {Title:'GU', jobDesc:[null, 'GU_CO', 'GU_CS', 'GU_DT', 'GU_FF', 'GU_PR', 'GU_SG', 'GU_OR' ]},                      
                      {Title:'MA', jobDesc:[null, 'MA_AG', 'MA_AE', 'MA_CO', 'MA_ED', 'MA_FB', 'MA_FS', 'MA_FO', 'MA_GV', 'MA_MF', 'MA_ME', 'MA_MH', 'MA_MI', 'MA_RE', 'MA_RT', 'MA_TH', 'MA_WS', 'MA_OR' ]},
                      {Title:'OW', jobDesc:[null, 'OW_AO', 'OW_CT', 'OW_CO', 'OW_FM', 'OW_FO', 'OW_JO', 'OW_RO', 'OW_SO', 'OW_OR' ]},
                      {Title:'OT', jobDesc:[null, 'OT_AR', 'OT_AT', 'OT_CL', 'OT_CO', 'OT_CM', 'OT_DC', 'OT_DS', 'OT_DJ', 'OT_ED', 'OT_GA', 'OT_LE', 'OT_MS', 'OT_PG', 'OT_PD', 'OT_RF', 'OT_SE', 'OT_SH', 'OT_WC', 'OT_WR', 'OT_OR' ]},
                      {Title:'SA', jobDesc:[null, 'SA_AT', 'SA_BK', 'SA_BY', 'SA_DS', 'SA_IA', 'SA_RT', 'SA_SA', 'SA_SM', 'SA_SB', 'SA_OR' ]},
                      {Title:'SE', jobDesc:[null, 'SE_AT', 'SE_BT', 'SE_BP', 'SE_BC', 'SE_BL', 'SE_CH', 'SE_CW', 'SE_CS', 'SE_CJ', 'SE_CR', 'SE_FT', 'SE_FA', 'SE_FR', 'SE_FS', 'SE_GM', 'SE_HB', 'SE_HC', 'SE_HK', 'SE_IE', 'SE_MT', 'SE_PC', 'SE_PG', 'SE_PW', 'SE_SW', 'SE_TG', 'SE_TA', 'SE_WW', 'SE_OR' ]},
                      {Title:'RE', jobDesc:[null, 'RE_AR', 'RE_AB', 'RE_CT', 'RE_HP', 'RE_HM', 'RE_MW', 'RE_MC', 'RE_SS', 'RE_SR', 'RE_TR', 'RE_TT', 'RE_US', 'RE_OR' ]},
                      {Title:'LA', jobDesc:[null, 'LA_BB', 'LA_CM', 'LA_CL', 'LA_DM', 'LA_DL', 'LA_EO', 'LA_FH', 'LA_FI', 'LA_FL', 'LA_GR', 'LA_GA', 'LA_GD', 'LA_GK', 'LA_IS', 'LA_LG', 'LA_LA', 'LA_MS', 'LA_MW', 'LA_MI', 'LA_MO', 'LA_OI', 'LA_PT', 'LA_PV', 'LA_PR', 'LA_RF', 'LA_SC', 'LA_SR', 'LA_WW', 'LA_OR' ]},
                      {Title:'OF', jobDesc:[null, 'OF_AM', 'OF_AR', 'OF_AA', 'OF_AP', 'OF_BT', 'OF_BI', 'OF_CI', 'OF_CA', 'OF_CT', 'OF_CS', 'OF_CO', 'OF_CR', 'OF_DO', 'OF_DP', 'OF_ET', 'OF_ES', 'OF_HR', 'OF_IC', 'OF_JL', 'OF_LA', 'OF_LB', 'OF_PM', 'OF_RC', 'OF_RT', 'OF_TS', 'OF_UW', 'OF_WD', 'OF_OR' ]},
                      {Title:'HO', jobDesc:[null, 'HO' ]},
                      {Title:'RT', jobDesc:[null, 'RT' ]},
                      {Title:'UN', jobDesc:[null, 'UN' ]},
                      {Title:'ST', jobDesc:[null, 'ST' ]},
                  ];
};

BRB.JobDescJoinTitles.prototype = new BRB.BaseList();