// US3622
ensureNamespaceExists();

BRB.JobDescListMapping = function(argTranslator) {
	this.translator = argTranslator;
    this.data= [
			//TRADERS
			{ value: null, text: null},
			{ value: 'TR_BD', text: 'BUILDER / DEVELOPER'},
			{ value: 'TR_BL', text: 'BRICKLAYER'},
			{ value: 'TR_CM', text: 'CABINET MAKER'},
			{ value: 'TR_CP', text: 'CARPENTER'},
			{ value: 'TR_CF', text: 'CONCRETE FINISHER'},
			{ value: 'TR_ET', text: 'ELECTRICIAN'},
			{ value: 'TR_GZ', text: 'GLAZIER'},
			{ value: 'TR_EO', text: 'EQUIPMENT OPERATOR'},
			{ value: 'TR_FC', text: 'FENCER'},
			{ value: 'TR_GF', text: 'GASFITTER'},
			{ value: 'TR_GC', text: 'GENERAL CONTRACTOR'},
			{ value: 'TR_IS', text: 'INSULATOR'},
			{ value: 'TR_IW', text: 'IRONWORKER'},
			{ value: 'TR_LS', text: 'LANDSCAPER'},
			{ value: 'TR_MF', text: 'MARINE FITTER'},
			{ value: 'TR_MW', text: 'MILLWORKER'},
			{ value: 'TR_PR', text: 'PAINTER'},
			{ value: 'TR_PF', text: 'PIPEFITTER'},
			{ value: 'TR_PT', text: 'PLASTERER'},
			{ value: 'TR_PB', text: 'PLUMBER'},
			{ value: 'TR_PL', text: 'POWER LINEMAN'},
			{ value: 'TR_SM', text: 'SITE MANAGER'},
			{ value: 'TR_TP', text: 'TAPER'},
			{ value: 'TR_TS', text: 'TILE SETTER'},
			{ value: 'TR_WD', text: 'WELDER'},
			{ value: 'TR_OR', text: 'OTHER'},	
			
			// DRIVER
			{ value: 'DR_AD', text: 'AMBULANCE DRIVER'},
			{ value: 'DR_BD', text: 'BUS DRIVER'},
			{ value: 'DR_CF', text: 'CHAUFFEUR'},
			{ value: 'DR_CR', text: 'COURIER'},
			{ value: 'DR_DI', text: 'DRIVING INSTRUCTOR'},
			{ value: 'DR_TO', text: 'TOW TRUCK DRIVER'},
			{ value: 'DR_TD', text: 'TRUCK DRIVER'},
			{ value: 'DR_OR', text: 'OTHER'},
			
			// MILITARY
			{ value: 'MI_AM', text: 'ARMY'},
			{ value: 'MI_AI', text: 'AIR FORCE'},
			{ value: 'MI_NY', text: 'NAVY'},
			{ value: 'MI_AR', text: 'ARMED FORCES'},
			{ value: 'MI_MR', text: 'MARINES'},
			{ value: 'MI_OR', text: 'OTHER'},
			
			// PROFESSIONAL
			{ value: 'PR_AT', text: 'ACCOUNTANT'},
			{ value: 'PR_AY', text: 'ACTUARY'},
			{ value: 'PR_AD', text: 'AUDITOR'},
			{ value: 'PR_CR', text: 'CHIROPRACTOR'},
			{ value: 'PR_CP', text: 'COMPUTER PROGRAMMER'},
			{ value: 'PR_CT', text: 'COMPUTER TECHNICIAN'},
			{ value: 'PR_CL', text: 'CONTROLLER'},
			{ value: 'PR_CO', text: 'CREDIT OFFICER'},
			{ value: 'PR_DH', text: 'DENTAL HYGIENIST'},
			{ value: 'PR_DT', text: 'DENTIST'},
			{ value: 'PR_DI', text: 'DIETICIAN'},
			{ value: 'PR_DR', text: 'DOCTOR'},
			{ value: 'PR_EG', text: 'ENGINEER'},
			{ value: 'PR_EX', text: 'EXECUTIVE'},
			{ value: 'PR_FA', text: 'FINANCIAL ADVISOR'},
			{ value: 'PR_JD', text: 'JUDGE'},
			{ value: 'PR_LW', text: 'LAWYER'},
			{ value: 'PR_MY', text: 'MAYOR'},
			{ value: 'PR_NU', text: 'NURSE'},
			{ value: 'PR_OP', text: 'OPTOMETRIST'},
			{ value: 'PR_PL', text: 'PARALEGAL'},
			{ value: 'PR_PR', text: 'PARAMEDIC'},
			{ value: 'PR_PC', text: 'PHARMACIST'},
			{ value: 'PR_PT', text: 'PHYSIOTHERAPIST'},
			{ value: 'PR_PI', text: 'PILOT'},
			{ value: 'PR_PO', text: 'POLITICIAN'},
			{ value: 'PR_PA', text: 'PRINCIPAL'},
			{ value: 'PR_PF', text: 'PROFESSOR'},
			{ value: 'PR_PM', text: 'PROJECT MANAGER'},
			{ value: 'PR_RG', text: 'RADIOLOGIST'},
			{ value: 'PR_SW', text: 'SOCIAL WORKER'},
			{ value: 'PR_TC', text: 'TEACHER'},
			{ value: 'PR_VN', text: 'VETERINARIAN'},
			{ value: 'PR_OR', text: 'OTHER'},	
			
			// PRODUCTION WORKER
			{ value: 'FA_AS', text: 'ASSEMBLER'},
			{ value: 'FA_BD', text: 'BINDER'},
			{ value: 'FA_BM', text: 'BOILERMAKER'},
			{ value: 'FA_FC', text: 'FABRICATOR'},
			{ value: 'FA_FD', text: 'FORK LIFT DRIVER'},
			{ value: 'FA_LH', text: 'LEAD HAND'},
			{ value: 'FA_MH', text: 'MECHANIC'},
			{ value: 'FA_MO', text: 'MACHINE OPERATOR'},
			{ value: 'FA_MN', text: 'MACHINIST'},
			{ value: 'FA_MW', text: 'MAINTENANCE WORKER'},
			{ value: 'FA_MG', text: 'MANAGER'},
			{ value: 'FA_MI', text: 'MILLWRIGHT'},
			{ value: 'FA_OP', text: 'OPERATOR'},
			{ value: 'FA_PK', text: 'PACKER'},
			{ value: 'FA_PT', text: 'PRINTER'},
			{ value: 'FA_QS', text: 'QUALITY SPECIALIST'},
			{ value: 'FA_ST', text: 'SAFETY TECHNICIAN'},
			{ value: 'FA_SW', text: 'SEWER'},
			{ value: 'FA_SO', text: 'SORTER'},
			{ value: 'FA_SV', text: 'SUPERVISOR'},
			{ value: 'FA_TM', text: 'TOOL AND DIE MAKER'},
			{ value: 'FA_WW', text: 'WAREHOUSE WORKER'},
			{ value: 'FA_WD', text: 'WELDER'},
			{ value: 'FA_OR', text: 'OTHER'},	
			
			// GUARD
			{ value: 'GU_CO', text: 'CORRECTIONAL OFFICER'},
			{ value: 'GU_CS', text: 'CUSTOMS OFFICER'},
			{ value: 'GU_DT', text: 'DETECTIVE'},
			{ value: 'GU_FF', text: 'FIREFIGHTER'},
			{ value: 'GU_PR', text: 'PARK RANGER'},
			{ value: 'GU_SG', text: 'SECURITY GUARD'},
			{ value: 'GU_OR', text: 'OTHER'},	
			
			// MANAGER
			{ value: 'MA_AE', text: 'ARTS AND ENTERTAINMENT'},
			{ value: 'MA_AG', text: 'AGRICULTURE'},
			{ value: 'MA_CO', text: 'CONSTRUCTION'},
			{ value: 'MA_ED', text: 'EDUCATION'},
			{ value: 'MA_FB', text: 'FINANCE OR BANKING'},
			{ value: 'MA_FS', text: 'FOOD SERVICES'},
			{ value: 'MA_MH', text: 'MEDICAL OR HEALTHCARE'},
			{ value: 'MA_FO', text: 'FORESTRY'},
			{ value: 'MA_GV', text: 'GOVERNMENT'},
			{ value: 'MA_MF', text: 'MANUFACTURING'},
			{ value: 'MA_ME', text: 'MEDIA'},
			{ value: 'MA_MI', text: 'MINING'},
			{ value: 'MA_RE', text: 'REAL ESTATE'},
			{ value: 'MA_RT', text: 'RETAIL'},
			{ value: 'MA_TH', text: 'TECHNOLOGY'},
			{ value: 'MA_WS', text: 'WHOLESALE'},
			{ value: 'MA_OR', text: 'OTHER'},	
			
			// OWNER
			{ value: 'OW_AO', text: 'APPAREL STORE OWNER'},
			{ value: 'OW_CT', text: 'CATERER'},
			{ value: 'OW_CO', text: 'CONSTRUCTION COMPANY OWNER'},
			{ value: 'OW_FM', text: 'FARMER'},
			{ value: 'OW_FO', text: 'FRANCHISEE OWNER'},
			{ value: 'OW_JO', text: 'JEWELRY STORE OWNER'},
			{ value: 'OW_RO', text: 'RESTAURANT OWNER'},
			{ value: 'OW_SO', text: 'SALON OWNER'},
			{ value: 'OW_OR', text: 'OTHER'},	
			
			// OTHER
			{ value: 'OT_AR', text: 'ARTIST'},
			{ value: 'OT_AT', text: 'ATHLETE'},
			{ value: 'OT_CL', text: 'CLERGY'},
			{ value: 'OT_CO', text: 'COACH'},
			{ value: 'OT_CM', text: 'COMEDIAN'},
			{ value: 'OT_DC', text: 'DANCER'},
			{ value: 'OT_DS', text: 'DESIGNER'},
			{ value: 'OT_DJ', text: 'DISC JOCKEY'},
			{ value: 'OT_ED', text: 'EDITOR'},
			{ value: 'OT_GA', text: 'GRAPHIC ARTIST'},
			{ value: 'OT_LE', text: 'LIGHTING ENGINEER'},
			{ value: 'OT_MS', text: 'MUSICIAN'},
			{ value: 'OT_PG', text: 'PHOTOGRAPHER'},
			{ value: 'OT_PD', text: 'PRODUCER / DIRECTOR'},
			{ value: 'OT_RF', text: 'REFEREE'},
			{ value: 'OT_SE', text: 'SOUND ENGINEER'},
			{ value: 'OT_SH', text: 'STAGEHAND'},
			{ value: 'OT_WC', text: 'WOOD CARVER'},
			{ value: 'OT_WR', text: 'WRITER'},
			{ value: 'OT_OR', text: 'OTHER'},	
			
			// SALES
			{ value: 'SA_AT', text: 'AUCTIONEER'},
			{ value: 'SA_BK', text: 'BROKER'},
			{ value: 'SA_BY', text: 'BUYER'},
			{ value: 'SA_DS', text: 'DIRECT SALES'},
			{ value: 'SA_IA', text: 'INSURANCE AGENT'},
			{ value: 'SA_RT', text: 'REALTOR'},
			{ value: 'SA_SA', text: 'SALES ASSOCIATE'},
			{ value: 'SA_SM', text: 'SALES MANAGER'},
			{ value: 'SA_SB', text: 'STOCK BROKER'},
			{ value: 'SA_OR', text: 'OTHER'},	
			
			// SERVICE
			{ value: 'SE_BT', text: 'BARTENDER'},
			{ value: 'SE_BP', text: 'BELLMAN / PORTER'},
			{ value: 'SE_BC', text: 'BUTCHER'},
			{ value: 'SE_BL', text: 'BUTLER'},
			{ value: 'SE_CH', text: 'CASHIER'},
			{ value: 'SE_CW', text: 'CHILD CARE WORKER'},
			{ value: 'SE_AT', text: 'AESTHETICIAN'},
			{ value: 'SE_CS', text: 'COUNSELLOR'},
			{ value: 'SE_CJ', text: 'CUSTODIAN / JANITOR'},
			{ value: 'SE_CR', text: 'CUSTOMER SERVICE REPRESENTATIV'},
			{ value: 'SE_FT', text: 'FITNESS TRAINER'},
			{ value: 'SE_FA', text: 'FLIGHT ATTENDANT'},
			{ value: 'SE_FR', text: 'FLORIST'},
			{ value: 'SE_FS', text: 'FUNERAL SERVICES'},
			{ value: 'SE_GM', text: 'GROOMER'},
			{ value: 'SE_HB', text: 'HAIRSTYLIST / BARBER'},
			{ value: 'SE_HC', text: 'HEALTH CARE / PSW'},
			{ value: 'SE_HK', text: 'HOUSEKEEPER'},
			{ value: 'SE_IE', text: 'IMPORTER / EXPORTER'},
			{ value: 'SE_MT', text: 'MASSAGE THERAPIST'},
			{ value: 'SE_PC', text: 'PET CARE'},
			{ value: 'SE_PG', text: 'PHOTOGRAPHER'},
			{ value: 'SE_PW', text: 'POSTAL WORKER'},
			{ value: 'SE_SW', text: 'SANITATION WORKER'},
			{ value: 'SE_TG', text: 'TOUR GUIDE'},
			{ value: 'SE_TA', text: 'TRAVEL AGENT'},
			{ value: 'SE_WW', text: 'WAITER / WAITRESS'},
			{ value: 'SE_OR', text: 'OTHER'},	
			
			// REPAIRER
			{ value: 'RE_AR', text: 'APPLIANCE REPAIRER'},
			{ value: 'RE_AB', text: 'AUTO BODY REPAIRER'},
			{ value: 'RE_CT', text: 'COMPUTER REPAIR TECHNICIAN'},
			{ value: 'RE_HM', text: 'HANDYMAN'},
			{ value: 'RE_HP', text: 'HVAC REPAIRER'},
			{ value: 'RE_MW', text: 'MAINTENANCE WORKER'},
			{ value: 'RE_TT', text: 'TIRE TECHNICIAN'},
			{ value: 'RE_MC', text: 'MECHANIC'},
			{ value: 'RE_SS', text: 'SEAMSTRESS'},
			{ value: 'RE_SR', text: 'SHOE REPAIR'},
			{ value: 'RE_TR', text: 'TAILOR'},
			{ value: 'RE_US', text: 'UPHOLSTERER'},
			{ value: 'RE_OR', text: 'OTHER'},	
			
			// LABOURER
			{ value: 'LA_BB', text: 'BUSBOY'},
			{ value: 'LA_CM', text: 'CONCRETE MAKER'},
			{ value: 'LA_CL', text: 'CONSTRUCTION LABOURER'},
			{ value: 'LA_DM', text: 'DELIVERY MAN'},
			{ value: 'LA_DL', text: 'DRILLER'},
			{ value: 'LA_GR', text: 'GARDENER'},
			{ value: 'LA_EO', text: 'EXCAVATOR OPERATOR'},
			{ value: 'LA_FH', text: 'FARM HAND'},
			{ value: 'LA_FI', text: 'FISHERMAN'},
			{ value: 'LA_FL', text: 'FLAGMAN'},
			{ value: 'LA_GA', text: 'GAS STATION ATTENDANT'},
			{ value: 'LA_GD', text: 'GRAVE DIGGER'},
			{ value: 'LA_GK', text: 'GROUNDSKEEPER'},
			{ value: 'LA_IS', text: 'INSULATOR'},
			{ value: 'LA_LG', text: 'LOGGER'},
			{ value: 'LA_LA', text: 'LOT ATTENDANT'},
			{ value: 'LA_MS', text: 'MAIL SORTER'},
			{ value: 'LA_MW', text: 'MAINTENANCE WORKER'},
			{ value: 'LA_MI', text: 'MINER'},
			{ value: 'LA_MO', text: 'MOVER'},
			{ value: 'LA_OI', text: 'OIL RIGGER'},
			{ value: 'LA_PT', text: 'PAINTER'},
			{ value: 'LA_PV', text: 'PAVER'},
			{ value: 'LA_PR', text: 'PORTER'},
			{ value: 'LA_RF', text: 'ROOFER'},
			{ value: 'LA_SC', text: 'SCRAP COLLECTOR'},
			{ value: 'LA_SR', text: 'SHIPPER / RECEIVER'},
			{ value: 'LA_WW', text: 'WINDOW WASHER'},
			{ value: 'LA_OR', text: 'OTHER'},	
			
			// OFFICE STAFF
			{ value: 'OF_AM', text: 'ACCOUNT MANAGER'},
			{ value: 'OF_AR', text: 'ACCOUNTS RECEIVABLE CLERK'},
			{ value: 'OF_AA', text: 'ADMINISTRATIVE ASSISTANT'},
			{ value: 'OF_AP', text: 'APPRAISER'},
			{ value: 'OF_BT', text: 'BANK TELLER'},
			{ value: 'OF_BI', text: 'BUILDING INSPECTOR'},
			{ value: 'OF_CO', text: 'COMPUTER OPERATOR'},
			{ value: 'OF_CI', text: 'CIVIL SERVANT'},
			{ value: 'OF_CA', text: 'CLAIMS ADJUSTER'},
			{ value: 'OF_CT', text: 'COLLECTOR'},
			{ value: 'OF_CS', text: 'COMMUNICATIONS SPECIALIST'},
			{ value: 'OF_CR', text: 'CUSTOMER SERVICE REPRESENTATIV'},
			{ value: 'OF_DO', text: 'DATA ENTRY OPERATOR'},
			{ value: 'OF_DP', text: 'DISPATCHER'},
			{ value: 'OF_ET', text: 'EDITOR'},
			{ value: 'OF_ES', text: 'ESTIMATOR'},
			{ value: 'OF_HR', text: 'HUMAN RESOURCES'},
			{ value: 'OF_IC', text: 'INVENTORY CLERK'},
			{ value: 'OF_JL', text: 'JOURNALIST'},
			{ value: 'OF_LA', text: 'LEGAL ASSISTANT'},
			{ value: 'OF_LB', text: 'LIBRARIAN'},
			{ value: 'OF_PM', text: 'PROJECT MANAGER'},
			{ value: 'OF_RC', text: 'RECEPTIONIST'},
			{ value: 'OF_RT', text: 'RECRUITER'},
			{ value: 'OF_TS', text: 'TRANSLATOR'},
			{ value: 'OF_UW', text: 'UNDERWRITER'},
			{ value: 'OF_WD', text: 'WEB DESIGNER'},
			{ value: 'OF_OR', text: 'OTHER'},
			
			{ value: 'HO', text: 'HOME MAKER'},
			{ value: 'RT', text: 'RETIRED'},
			{ value: 'UN', text: 'UNEMPLOYED'},
			{ value: 'ST', text: 'STUDENT'},
        ];
  };
BRB.JobDescListMapping.prototype = new BRB.BaseList();