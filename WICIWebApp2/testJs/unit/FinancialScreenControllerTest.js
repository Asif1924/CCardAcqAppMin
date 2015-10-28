describe("FinancialScreenController", function() {
	
	describe("Inner Model", function() {

		var financialController = null;	
	    var financialData = null;
	    
	    var employmenStatusList, jobCategoriesList, jobTitlesListMapper;	    

		beforeEach(function() {
			financialController = new WICI.FinancialScreenController();
			employmenStatusList = new WICI.EmploymentStatusList();
			jobCategoriesList = new WICI.JobCategoriesList();
			jobTitlesListMapper = new WICI.JobTitlesListMapper();
			if (financialController) {
				financialData = financialController.innerModel;
			}			
		});									
		
		it("will ensure correct Employment status in list", function() {														
				
			var idEmploymentFilter = ['F', 'S', 'P', 'H', 'R', 'U', 'O'];
		    var filteredData = [];
		    $.each(employmenStatusList.data, function(index, item) {  
		    	if($.inArray(item.value, idEmploymentFilter)!==-1){
		    		filteredData.push(item.value);
		        }				
			});
			expect(filteredData).toEqual(idEmploymentFilter);				
		});
		
		it("will ensure correct Job Categories in list", function() {														
			
			var idCategoriesFilter = ['DR', 'GU', 'HO', 'LA', 'MA', 'MI', 'OF', 'OW', 'FA', 'PR', 'RE', 'RT', 'SA', 'SE', 'ST', 'TR', 'UN', 'OT'];
		    var filteredData = [];
		    $.each(jobCategoriesList.data, function(index, item) {  
		    	if($.inArray(item.value, idCategoriesFilter)!==-1){
		    		filteredData.push(item.value);
		        }				
			});
			expect(filteredData).toEqual(idCategoriesFilter);				
		});
		
		it("will ensure correct Job Titles in list", function() {														
			
			var idTitlesFilter = [
			                     // TRADERS 
			                     'BUILDER / DEVELOPER', 'BRICKLAYER', 'CABINET MAKER', 'CARPENTER', 'CONCRETE FINISHER', 'ELECTRICIAN', 'GLAZIER', 'EQUIPMENT OPERATOR', 'FENCER', 'GASFITTER',	'GENERAL CONTRACTOR', 'INSULATOR', 'IRONWORKER', 'LANDSCAPER', 'MARINE FITTER', 'MILLWORKER', 'PAINTER', 'PIPEFITTER', 'PLASTERER', 'PLUMBER', 'POWER LINEMAN', 'SITE MANAGER', 'TAPER', 'TILE SETTER', 'WELDER', 'OTHER', 
			                     // DRIVER
			                     'AMBULANCE DRIVER', 'BUS DRIVER', 'CHAUFFEUR', 'COURIER', 'DRIVING INSTRUCTOR', 'TOW TRUCK DRIVER', 'TRUCK DRIVER', 'OTHER', 
			                     // MILITARY
			                     'ARMY', 'AIR FORCE', 'NAVY', 'ARMED FORCES', 'MARINES', 'OTHER', 
			                     // PROFESSIONAL
			                     'ACCOUNTANT', 'ACTUARY', 'AUDITOR', 'CHIROPRACTOR', 'COMPUTER PROGRAMMER', 'COMPUTER TECHNICIAN', 'CONTROLLER', 'CREDIT OFFICER', 'DENTAL HYGIENIST', 'DENTIST', 'DIETICIAN', 'DOCTOR', 'ENGINEER', 'EXECUTIVE', 'FINANCIAL ADVISOR', 'JUDGE', 'LAWYER', 'MAYOR', 'NURSE', 'OPTOMETRIST', 'PARALEGAL', 'PARAMEDIC', 'PHARMACIST', 'PHYSIOTHERAPIST', 'PILOT', 'POLITICIAN', 'PRINCIPAL', 'PROFESSOR', 'PROJECT MANAGER', 'RADIOLOGIST', 'SOCIAL WORKER', 'TEACHER', 'VETERINARIAN', 'OTHER', 
			                     // PRODUCTION WORKER
			                     'ASSEMBLER', 'BINDER', 'BOILERMAKER', 'FABRICATOR', 'FORK LIFT DRIVER', 'LEAD HAND', 'MECHANIC', 'MACHINE OPERATOR', 'MACHINIST', 'MAINTENANCE WORKER', 'MANAGER', 'MILLWRIGHT', 'OPERATOR', 'PACKER', 'PRINTER', 'QUALITY SPECIALIST', 'SAFETY TECHNICIAN', 'SEWER', 'SORTER', 'SUPERVISOR', 'TOOL AND DIE MAKER', 'WAREHOUSE WORKER', 'WELDER', 'OTHER', 
			                     // GUARD
			                     'CORRECTIONAL OFFICER', 'CUSTOMS OFFICER', 'DETECTIVE', 'FIREFIGHTER', 'PARK RANGER', 'SECURITY GUARD', 'OTHER', 
			                     // MANAGER
			                     'ARTS AND ENTERTAINMENT', 'AGRICULTURE', 'CONSTRUCTION', 'EDUCATION', 'FINANCE OR BANKING', 'FOOD SERVICES', 'MEDICAL OR HEALTHCARE', 'FORESTRY', 'GOVERNMENT', 'MANUFACTURING', 'MEDIA', 'MINING', 'REAL ESTATE', 'RETAIL', 'TECHNOLOGY', 'WHOLESALE', 'OTHER', 
			                     // OWNER
			                     'APPAREL STORE OWNER', 'CATERER', 'CONSTRUCTION COMPANY OWNER', 'FARMER', 'FRANCHISEE OWNER', 'JEWELRY STORE OWNER', 'RESTAURANT OWNER', 'SALON OWNER', 'OTHER', 
			                     // OTHER
			                     'ARTIST', 'ATHLETE', 'CLERGY', 'COACH', 'COMEDIAN', 'DANCER', 'DESIGNER', 'DISC JOCKEY', 'EDITOR', 'GRAPHIC ARTIST', 'LIGHTING ENGINEER', 'MUSICIAN', 'PHOTOGRAPHER', 'PRODUCER / DIRECTOR', 'REFEREE', 'SOUND ENGINEER', 'STAGEHAND', 'WOOD CARVER', 'WRITER', 'OTHER', 
			                     // SALES
			                     'AUCTIONEER', 'BROKER', 'BUYER', 'DIRECT SALES', 'INSURANCE AGENT', 'REALTOR', 'SALES ASSOCIATE', 'SALES MANAGER', 'STOCK BROKER', 'OTHER', 
			                     // SERVICE
			                     'BARTENDER', 'BELLMAN / PORTER', 'BUTCHER', 'BUTLER', 'CASHIER', 'CHILD CARE WORKER', 'AESTHETICIAN', 'COUNSELLOR', 'CUSTODIAN / JANITOR', 'CUSTOMER SERVICE REPRESENTATIV', 'FITNESS TRAINER', 'FLIGHT ATTENDANT', 'FLORIST', 'FUNERAL SERVICES', 'GROOMER', 'HAIRSTYLIST / BARBER', 'HEALTH CARE / PSW', 'HOUSEKEEPER', 'IMPORTER / EXPORTER', 'MASSAGE THERAPIST', 'PET CARE', 'PHOTOGRAPHER', 'POSTAL WORKER', 'SANITATION WORKER', 'TOUR GUIDE', 'TRAVEL AGENT', 'WAITER / WAITRESS', 'OTHER', 
			                     // REPAIRER
			                     'APPLIANCE REPAIRER', 'AUTO BODY REPAIRER', 'COMPUTER REPAIR TECHNICIAN', 'HANDYMAN', 'HVAC REPAIRER', 'MAINTENANCE WORKER', 'TIRE TECHNICIAN', 'MECHANIC', 'SEAMSTRESS', 'SHOE REPAIR', 'TAILOR', 'UPHOLSTERER', 'OTHER', 
			                     // LABOURER
			                     'BUSBOY', 'CONCRETE MAKER', 'CONSTRUCTION LABOURER', 'DELIVERY MAN', 'DRILLER', 'GARDENER', 'EXCAVATOR OPERATOR', 'FARM HAND', 'FISHERMAN', 'FLAGMAN', 'GAS STATION ATTENDANT', 'GRAVE DIGGER', 'GROUNDSKEEPER', 'INSULATOR', 'LOGGER', 'LOT ATTENDANT', 'MAIL SORTER', 'MAINTENANCE WORKER', 'MINER', 'MOVER', 'OIL RIGGER', 'PAINTER', 'PAVER', 'PORTER', 'ROOFER', 'SCRAP COLLECTOR', 'SHIPPER / RECEIVER', 'WINDOW WASHER', 'OTHER', 
			                     // OFFICE STAFF
			                     'ACCOUNT MANAGER', 'ACCOUNTS RECEIVABLE CLERK', 'ADMINISTRATIVE ASSISTANT', 'APPRAISER', 'BANK TELLER', 'BUILDING INSPECTOR', 'COMPUTER OPERATOR', 'CIVIL SERVANT', 'CLAIMS ADJUSTER', 'COLLECTOR', 'COMMUNICATIONS SPECIALIST', 'CUSTOMER SERVICE REPRESENTATIV', 'DATA ENTRY OPERATOR', 'DISPATCHER', 'EDITOR', 'ESTIMATOR', 'HUMAN RESOURCES', 'INVENTORY CLERK', 'JOURNALIST', 'LEGAL ASSISTANT', 'LIBRARIAN', 'PROJECT MANAGER', 'RECEPTIONIST', 'RECRUITER', 'TRANSLATOR', 'UNDERWRITER', 'WEB DESIGNER', 'OTHER',
			                     // STUDENT
			                     'STUDENT'
			                     ];
			
		    var filteredData = [];
		    $.each(jobTitlesListMapper.data, function(index, item) {  
		    	if($.inArray(item.text, idTitlesFilter)!==-1){
		    		filteredData.push(item.text);
		        }				
			});
			expect(filteredData).toEqual(idTitlesFilter);				
		});
		
		it("will ensure correct 'employmentType' cannot be empty", function() {	    	    	
    		financialData.set('employmentType', '');
    		financialData.set('jobCategory', 'OT');
    		financialData.set('jobTitle_SelectField', 'OT_OS');
    		financialData.set('jobTitle', 'MECHANIC');    		
    		financialData.set('employerName', 'ABCD');
    		financialData.set('employerCity', 'ONTARIO');
    		financialData.set('howLongYears', '3');
    		financialData.set('howLongMonthes', '3');
    		financialData.set('grossIncome', '256369');
    		
    		expect(_.isEmpty(financialData.validate())).toEqual(false);
	    });
		
		it("will ensure correct 'jobCategory' cannot be empty", function() {	    	    	
    		financialData.set('employmentType', 'F');
    		financialData.set('jobCategory', '');
    		financialData.set('jobTitle_SelectField', 'OT_OS');
    		financialData.set('jobTitle', 'MECHANIC');    		
    		financialData.set('employerName', 'ABCD');
    		financialData.set('employerCity', 'ONTARIO');
    		financialData.set('howLongYears', '3');
    		financialData.set('howLongMonthes', '3');
    		financialData.set('grossIncome', '256369');
    		
    		expect(_.isEmpty(financialData.validate())).toEqual(false);
	    });
	    
	    it("will ensure correct 'jobTitle' cannot be empty", function() {	    	    	
    		financialData.set('employmentType', 'F');
    		financialData.set('jobCategory', 'OT');
    		financialData.set('jobTitle_SelectField', 'OT_OR');
    		financialData.set('jobTitle', '');    		
    		financialData.set('employerName', 'ABCD');
    		financialData.set('employerCity', 'ONTARIO');
    		financialData.set('howLongYears', '3');
    		financialData.set('howLongMonthes', '3');
    		financialData.set('grossIncome', '256369');
    		
    		expect(_.isEmpty(financialData.validate())).toEqual(false);
	    });	    	    	    	    	    	      	   
	    	   
	});
		
});