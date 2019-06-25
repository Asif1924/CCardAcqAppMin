ensureNamespaceExists();

WICI.dictionary_en =  {
	version												:	"39",
	yes 												: 	"Yes",
	no 													: 	"No",
	cancel  											:  	"Cancel",

	app_loading 										:	"Loading...",
	backButtonPrompt_message 							: 	"The information collected on this application will be permanently deleted and cannot be retained. Are you sure you want to continue?",
	backButtonPrompt_title 								: 	"Exit Application",

	connectionError_unableToConnect 					: 	"Unable to connect to backend server. Please try again in a few minutes.",
	connectionError_networkDown 						: 	"The WIFI connection has been lost. Please try the 'Re-establish WIFI Connection' option in the settings menu by logging in to demo mode.",

	confirmDialog_defaultTitle 							: 	"Confirm",
	confirmDialog_yes 									: 	"Yes",
	confirmDialog_no 									: 	"No",

	settings											: 	"Settings",
	settings_logOutButton								: 	"Logout",
	settings_chooseProductButton						: 	"Abandon Application",
	settings_chooseProductButton						: 	"Abandon Application",
	settings_printerSetupButton							: 	"Printer Setup",
	settings_testPrintButton							:	"Test Print",
	settings_retrieveButton 								: 	"Retrieve Application",
	settings_reEstablishWifiButton  					:   "Re-establish WIFI connection",
	settings_reEstablishWifiSuccess  					:   "WIFI Profile Re-created",
	settings_reEstablishWifiFailure  					:   "Failed to re-create the WIFI Profile",
	settings_manageRepsButton							:	"Manage Reps",

	infoDialog_NoProduct								:	"No products available for this store location. Please verify that store number is correct and try again",
	infoDialog_defaultTitle 							: 	"Info",
	infoDialog_noPrinterSetupped                        :   "A printer needs to be setup. Please inform your administrator.",

	errorDialog_defaultTitle 							: 	"Error",

	errorDialog_noticeTitle 							: 	"Attention",

	incorrect_Apk_Version_Dialog						: 	"Your application is out of date and requires an update. The application will close automatically. Please wait 15 minutes within acceptable WIFI range before starting the application and trying again. If the problem persists, please call your Administrator.",
	unauthorized_Device									: 	"This device is unauthorized. The application will close automatically.",
	
	// US4282 starts
	homePhoneMessage_Title                              :   "Reprint Request", 
	homePhoneInputTitle_one                             :   "Please enter customer home phone ",
	homePhoneInputTitle_two                             :   "number for temporary card reprint",
	homePhoneConfirmButton                              :   "Ok",
	// US4282 ends

	addressLookup_failedMessage							:	"Address Lookup Failed. Please Try Again.",
	addressLookup_noResults								:	"No results found. Please Try Again.",
	addressLookup_multipleItemsExist					:	"Multiple street names exist. Please select below",

	messageDialog_ok 									: 	"Ok",
	pageHeader_next 									: 	"Next",
	pageHeader_previous 								: 	"Back",
	messageDialog_Close									:	"Close",

	breadCrumbItem_ProductSelection						:	"Product Selection",
	breadCrumbItem_ApplicantInfo						:	"Applicant Info",
	// US4637
	breadCrumbItem_EmailInfo							:	"E-mail Info",	
	breadCrumbItem_FinancialAndEmploymentInfo			:   "Financial and Employment Info",
	breadCrumbItem_SupplementaryCard					:   "Supp Card",
	breadCrumbItem_OptionalProducts						:   "Optional Products",
	breadCrumbItem_MobilePayments					  	:	"Mobile Payments",
	breadCrumbItem_Confirmation							:	"Confirmation",

	loginScreen_UserID_Label							:	"User ID",
	loginScreen_EmployerID_Label						:	"Employer ID",
	loginScreen_RetailNetWork_Label                        : "Retail Network",
	loginScreen_AgentID_Label 							: 	"Agent ID",
	loginScreen_Location_Number 						: 	"Store or Location No.",
    loginScreen_First_Name		 						: 	"Employee First Name",
    loginScreen_Last_Name		 						: 	"Employee Last Name",
	loginScreen_Button_Label 							: 	"LOG IN",

	loginScreen_Dialog_ErrorTitle						:	"Login Error",
	loginScreen_FailureMessage							:	"Login Failed. Please Try Again.",
	dictionary_loading_error 							:  	"Application content cannot be loaded. Please wait 15 minutes within acceptable WIFI range before starting the application and trying again. If the problem persists, please call your Administrator.",
	// US4744
	loginScreen_IncorrectUserNamaAndPassword            :   "Please check your user name and password",
	
	// US4231
	loginScreen_BlackLstEmpIDAgtIDLookup_FailedMessage	:	"Login Failed. Please Contact your administrator.",

	loginScreen_UserLookupDialog_NormalTitle			:	"Location Details",
	loginScreen_UserLookupDialog_ErrorTitle				:	"Location Error",
	loginScreen_UserLookup_ConfirmMessage				:	"Is this the correct location address?",
	loginScreen_UserLookup_FailedMessage				:	"Location not found, please try again",
	loginScreen_DemoModeAlert 							:   "You are logging into \n DEMO MODE \n Are you sure?",

	loginScreen_EmployerIDLookup_FailedMessage			:	"Invalid Employer Id. Please correct and try again",
	chooseProduct_PrinterConnected						:	"Printer is connected",
	chooseProduct_PrinterNotConnected					:	"Printer is not connected. Please ensure printer is powered on, within<br> range and Bluetooth is connected before proceeding with application.",
	// US3766
	chooseProduct_ChooseOneOfTheCreditCards 			: 	"CHOOSE ONE OF THE FOLLOWING CREDIT CARDS",
    chooseProduct_CanadianTireOptionsMC 			    : 	"Triangle<sup>&trade;</sup> Mastercard<sup>&reg;</sup>",
    chooseProduct_OptionsMasterCard 					: 	"Triangle<sup>&trade;</sup> <br> Mastercard<sup>&reg;</sup> <br> \n <p>Triangle Rewards<sup>&trade;</sup></p>",
   //US4590
   // chooseProduct_Triangle_Rewards 					    : 	"Triangle  Rewards<sup>&trade;</sup>",
	chooseProduct_GasAdvantageMasterCard 				: 	"Gas Advantage<sup>&reg;</sup> Mastercard<sup>&reg;</sup>",
	chooseProduct_CashAdvantageMasterCard				: 	"Cash Advantage<sup>&reg;</sup> Mastercard<sup>&reg;</sup>",
	chooseProduct_NoSpecificCard						:	"card",

	// US3920
	program_PromoCode 									:   "{\"FMR\":[{\"Intercept\":[{\"Intercept\":\"Blank\"},{\"Grand Opening\":\"4023\"},{\"Other\":\"\"}],\"In-Store Events\":[{\"Triangle Days\":\"OMCDY\"},{\"Other\":\"\"}],\"CTP Events\":[{\"Eastern Events Program\":\"5200\"},{\"Western Events Program\":\"4024\"}],\"CTP Local\":[{\"Eastern Local Program\":\"4022\"},{\"Western Local Program\":\"4029\"}]}]}",

	// US4194
	program_Marks_PromoCode 							:   "{\"FMR\":[{\"Marks Store\":[{\"MWW80\":\"MWW80\"}]}]}",
	program_Marks_PromoCode_QC 							:   "{\"FMR\":[{\"L'Equipeur\":[{\"MWW80\":\"MWW80\"}]}]}",
	
	//US4433
	program_FGL_ProgramCode_intercept                   :    "{\"FMR\":[{\"Intercept\":[{\"Intercept\":\" \"}]}]}",
	// US3767
	chooseProduct_PromoCode_Other						:	"Promo code (Other)",
	
	chooseProduct_PromoCode								:	"Promo code",
	chooseProduct_Program								:	"Program",
	chooseProduct_Province								:	"Province",
	chooseProduct_ApplyNow_Button_Label					:	"START APPLICATION",
	//US4495
	chooseProduct_ApplyNow_Button_Label_with_testprint  :	"START APPLICATION / TEST PRINT",
	
	chooseProduct_ReadTandC								:	"Read Terms and Conditions",
	
	chooseProduct_DialogContent							:	"You are about to apply for a Canadian Tire Mastercard",
	chooseProduct_DialogContent1						:	"If you already have a Canadian Tire Bank Mastercard and are approved for this credit card, this will be a new account. ",
	chooseProduct_DialogContent2						:	"Submitting this application will lead to a credit check.",
	chooseProduct_DialogCancel							:	"CANCEL",
	chooseProduct_DialogProceed							:	"PROCEED",
	
	// US3981
	chooseProductScreen_Handoutprompts_Title			:	"Legal Handout",
	chooseProductScreen_Handoutprompts_YesNo_Message	:	"Have you given the applicant the Legal Information Handout?",
	chooseProductScreen_Handoutprompts_Ok_Message		:	"All applicants must be given a Legal Information Handout before proceeding.",

    overview_CostOfCreditDisclosure_MainTitle           :   "Please read the information below and click 'Start Application' to continue.",
    overview_CostOfCreditDisclosure_Title           :   "Cost of Credit Disclosure for Credit Card Applications",
    overview_CostOfCreditDisclosure_Left1           :   "Annual Interest Rate",
    
    // Old line
    // overview_CostOfCreditDisclosure_Right1      :   "<p>These interest rates will be in effect on the day your account is opened: <br><br>All charges to your account (excluding cash advances and related fees) - <strong>19.99%</strong></p> <p>Cash advances and related fees - <strong>21.99%</strong></p> <p>If you are not approved for a card at the above rates, Canadian Tire Bank may still issue you a card at an annual interest rate of - <strong>25.99%</strong> for all charges (excluding cash advances and related fees) and <strong>27.99%</strong> for cash advances and related fees.</p>",
    overview_CostOfCreditDisclosure_Right1      :   "<p>These interest rates will be in effect on the day your account is opened: <br><br>All charges to your account (excluding cash transactions and related fees) - <strong>19.99%</strong></p> <p>Cash transactions (for example: cash advances, balance transfers, convenience cheques, money transfers, purchase of travellers cheques and gambling transactions) and related fees - <strong>22.99%</strong></p>" +
    												"<p><b>For Triangle<sup>&trade;</sup> Mastercard<sup>&reg;</sup> only:  If you are not approved for a card at the above rates, Canadian Tire Bank may still issue you a card at the following annual interest rates:</b>" +
    												"<br><br>(i) If you are a resident of Quebec, <strong>22.99%</strong> for all charges; or" +
    												"<br><br>(ii) if you reside outside of Quebec, <strong>25.99%</strong> for all charges (excluding cash transactions and related fees) and <strong>27.99%</strong> for cash transactions and related fees.</p>",
    overview_CostOfCreditDisclosure_ChooseProduct_Right1     :   "<p>These interest rates will be in effect on the day your account is opened: <br><br>All charges to your account (excluding cash transactions and related fees) - <strong>19.99%</strong></p> <p>Cash transactions (for example: cash advances, balance transfers, convenience cheques, money transfers, purchase of travellers cheques and gambling transactions) and related fees - <strong>22.99%</strong></p> " +
    															 "<p>If you are not approved for a card at the above rates, Canadian Tire Bank may still issue you a card at the following annual interest rates:" +
    															 "<br><br>(i) If you are a resident of Quebec, <strong>22.99%</strong> for all charges or" +
    															 "<br><br>(ii) if you reside outside of Quebec, <strong>25.99%</strong> for all charges (excluding cash transactions and related fees) and <strong>27.99%</strong> for cash transactions and related fees.</p>",
    overview_CostOfCreditDisclosure_ChooseProduct_Right1_OMX	:	"<p>These interest rates will be in effect on the day your account is opened: <br><br>All charges to your account (excluding cash transactions and related fees) - <strong>19.99%</strong></p> <p>Cash transactions (for example: cash advances, balance transfers, convenience cheques, money transfers, purchase of travellers cheques and gambling transactions) and related fees - <strong>22.99%</strong></p> " +
    																"<b>For Triangle<sup>&trade;</sup> Mastercard<sup>&reg;</sup> only:  If you are not approved for a card at the above rates, Canadian Tire Bank may still issue you a card at the following annual interest rates:</b>" +
    																"<br><br>(i) If you are a resident of Quebec, <span style=\"font-size: 12pt; font-weight: bold;\";><strong>22.99%</strong></span> for all charges; or" +
    																"<br><br>(ii) if you reside outside of Quebec, <span style=\"font-size: 12pt; font-weight: bold;\";><strong>25.99%</strong></span> for all charges (excluding cash transactions and related fees) and <span style=\"font-size: 12pt; font-weight: bold;\";><strong>27.99%</strong></span> for cash transactions and related fees.",
    overview_CostOfCreditDisclosure_OMZ_Right1  :   "<p>These interest rates will be in effect on the day your account is opened: <br><br>All charges to your account (excluding cash transactions and related fees) - <strong>19.99%</strong></p> <p>Cash transactions (for example: cash advances, balance transfers, convenience cheques, money transfers, purchase of travellers cheques and gambling transactions) and related fees - <strong>22.99%</strong></p>",
    overview_CostOfCreditDisclosure_Left2       :   "Interest-Free Grace Period",
    overview_CostOfCreditDisclosure_Right2      :   "<p>At least <strong>21</strong> days or, if you are a resident of Quebec, at least <strong>26</strong> days.</p><p> You will benefit from an interest-free grace period of at least <strong>21</strong> days (at least <strong>26</strong> days if you are a resident of Quebec) on new purchases if we receive payment in full of the balance due on your current statement by the payment due date.</p><p> There is no grace period for cash transactions, such as convenience cheques, balance transfers or cash advances, or for fees for such transactions.</p>",
    overview_CostOfCreditDisclosure_Left3       :   "Minimum Payment",
    overview_CostOfCreditDisclosure_Right3      :   "If you reside in a Province other than Quebec, the Minimum Payment will be the sum of:" +
													"<br><br>(A) interest and fees shown on your statement; plus" +
													"<br>(B) the greater of any amount past due or any balance over your credit limit; plus" +
													"<br>(C) the amount of any equal payments plan installments then due; plus" +
													 "<br>(D) <strong>$10.</strong>" +
													"<br>Balances under <strong>$10</strong> are due in full." +
													"<br><br>If you reside in the Province of Quebec, the Minimum Payment will be the sum of:" +
													"<br><br>(A) the greater of (i) interest and fees shown on your statement + <span style=\"font-size: 12pt; font-weight: bold;\";><strong>$10</strong></span> or (ii) <span style=\"font-size: 12pt; font-weight: bold;\";><strong>5%</strong></span> of the New Balance, excluding amounts on special payment plans; plus" +
													"<br>(B) any balance over your credit limit; plus" +
													"<br>(C) any amounts past due not included in (B) above, plus;" +
													"<br>(D) the amount of any equal payments plan installments then due." +
													"<br>Balances under <strong>$10</strong> are due in full.",
    overview_CostOfCreditDisclosure_Left4       :   "Foreign Exchange Conversion",
    overview_CostOfCreditDisclosure_Right4      :   "All transactions made in a foreign currency will be converted to Canadian currency at the then current Mastercard conversion rate plus <strong>2.5%</strong> (for charges to your account) or minus <strong>2.5%</strong> (for credits to your account) when the transaction is posted to your account.",
    overview_CostOfCreditDisclosure_Left5       :   "Annual Fees",
    overview_CostOfCreditDisclosure_Right5      :   "None",
    overview_CostOfCreditDisclosure_Left6       :   "Other Fees",

	// Old line
	// overview_CostOfCreditDisclosure_Right6      :   "<p><strong>Cash Advance Fee:  $4</strong> - Charged when the transaction is posted to your account.</p> <p><strong> Overlimit Fee: $29</strong> - Unless you reside in Quebec, we will charge you an overlimit fee of <strong>$29.00</strong> if on a statement date your balance exceeds your credit limit and your balance is equal to or more than <strong>$2,000.00</strong>.  However, for determining whether you must pay an overlimit fee, we will not include in that balance any amounts that have been billed on that statement for interest charges, or for credit insurance on your account that is offered by us or one of our affiliates.</p> <p><strong> NSF/Dishounoured Payment Fee: $25</strong> - Charged if a payment you make is dishonoured.</p><p><strong> Charges for Copies: $2</strong> - Charged when you request a copy of a statement or sales slip. <p></p><strong>Credit Balance Fee:</strong> The lesser of <strong>$10</strong> or the amount of your credit balance. - Charged on the last day of a billing period when there is a credit balance on the account and the account has been inactive for the previous <strong>12</strong> billing periods. </p>",
    overview_CostOfCreditDisclosure_Right6      :   "<p><strong>Cash Advance Fee:  $4</strong> - Charged when the transaction is posted to your account.</p> <p><strong> NSF/Dishounoured Payment Fee: $25</strong> - Charged if a payment you make is dishonoured.</p><p><strong> Charges for Copies: $2</strong> - Charged when you request a copy of a statement.</p>" +
    												"<p></p><strong>Credit Balance Fee:</strong> The lesser of <strong>$10</strong> or the amount of your credit balance. - Charged on the last day of a billing period when there is a credit balance on the account and the account has been inactive for the previous <strong>12</strong> billing periods. </p>",
    overview_AccrualInterest					:	"<b>Accrual of Interest:</b> Interest accrues daily on each charge from the date of the transaction giving rise to the particular charge.",    												
    overview_InterestRates						:	"<p>For residents of Quebec: The credit rates are the annual interest rates specified in the chart above.</p>",
    // US3381
    overview_EffectiveDate						:	"Information effective as of <b>June 13, 2019</b>",
    
    overview_Triangle_world_ELite_MasterCardNote :	"<b>Please note that the Triangle<sup>&trade;</sup> World Elite Mastercard<sup>&reg;</sup> can impose higher card acceptance costs on merchants.</b>",
    
	personalData_TellUsAboutYourself					:	"Tell us about yourself",
	personalData_IDType									:	"ID Type",
	personalData_ScanID 								: 	"Scan ID",
	
	// US4078
	// personalData_PlaceOfIssue							:	"Issuing Province of ID", - OLD
	personalData_PlaceOfIssue							:	"ID Place of Issue",
	
	personalData_IDNumber								:	"ID Number",
    // US4976
	personalData_DOB_18YearsError						:	"You must have reached the age of majority in your province to apply",
	personalData_DOB_19YearsError						:	"Must be 19 years of age or older to apply",

	personalData_ApplicantInfo 							: 	"APPLICANT INFORMATION",
	personalData_Title 									: 	"Title",
    personalData_MR 									: 	"MR",
    personalData_MRS 									: 	"MRS",
    personalData_MISS 									: 	"MISS",
    personalData_MS 									: 	"MS",
//    personalData_DR 									: 	"DR",

	personalData_FirstName								:	"First Name",
	personalData_Initial								:	"Middle Initial",
	personalData_LastName								:	"Last Name",
	personalData_DateOfBirth							:	"Date of Birth",
	personalData_EmailAddress							:	"Email Address",
	personalData_EmailConsentText						:	"You may receive offers, promotions, contests, giveaways,  events, coupons and other information about products and services that may be of interest to you by email, text message (standard text messaging and data rates may apply) and other electronic messaging from Canadian Tire Corporation, Limited (“CTC”), Canadian Tire Services Limited (“CTS”), and Canadian Tire Bank (“CTB”), including from their respective business units operating under the Canadian Tire,  Triangle Rewards™ Program, Canadian Tire Drivers Academy®, Canadian Tire Home Services®, and Canadian Tire Roadside Assistance® brands, as well as from their other affiliates and/or marketing partners? You may contact CTC-CTS-CTB, at P.O. Box 2000 Welland, ON L3B 5S3 or <a href='' target='_blank'>customerservice@canadiantire.ca.</a>. You may withdraw your consent at any time.<br><br>&nbsp&nbspPlease respond yes or no to receiving such electronic messaging.<br><br>",
	personalData_HomePhone								:	"Home Phone",
	personalData_CellPhone								:	"Cellular Phone<sup>*</sup>",
	// US4926
	mobilePayment_mobilePhone                           :   "Mobile Phone",
	
	// US4709
	personalData_PrimaryPhone							:	"Primary Phone",
	personalData_SecondaryPhone							:	"Secondary Phone",
	personalData_Landline								:	"Landline",
	personalData_Mobile									:	"Mobile",
	
	personalData_MobilePayments							:	"Mobile Payments are Here!",
	personalData_MobilePayments_Para1					:	"Would you like to set up Apple Pay<sup>&reg;</sup> or Google Pay<sup>&trade;</sup> today if your credit card application is approved?",
	personalData_MobilePayments_Para2					:	"By selecting YES!, you consent to Canadian Tire Bank &#40;&#8220;CTB&#8221;&#41; verifying your personal information &#40;CTB Information&#41; including your name, address, date of birth and mobile number with your mobile service provider &#40;&#8220;MSP&#8221;&#41; and consent to your MSP providing CTB your account information <i><b>&#40;account status, account type, etc.&#41;</i></b>.  The MSP information will be used to verify your identity and to conduct fraud analysis and fraud investigations.",
	personalData_MobilePayments_Para3					:	"Once you complete your credit card application and if you are approved, you will be provided with instructions to set up your device. We will send you a text message with a 3-digit security code which you will need to complete the setup. Standard message and data rates may apply.",
	personalData_MobilePayments_Para4					:	"Any Android device running Android Kit Kat 4.4 or above",
	personalData_MobilePayments_Para5					:	"Any iPhone 6 or newer device",
	personalData_AndroidorApplePay_Yes					:	"YES!",
	personalData_AndroidorApplePay_NoThanks				:	"No Thanks",
	personalData_TermsandConditions_Para1				:	"Apple Pay, the Apple logo and iPhone are trademarks of Apple, Inc.",
	personalData_TermsandConditions_Para2				:	"Android, Google Pay, and the Google Logo are trademarks of Google LLC",
	
	// US4364
	personalData_ExpiryDate								:	"ID Expiry Date",

	personalData_Correspondence							:	"Preferred Language:",
	personalData_English								:	"English",
	personalData_French									:	"French",

	personalData_AddressInformation					:	"ADDRESS INFORMATION",
	personalData_Address_PostalCode					:	"Postal Code",
	personalData_Address_StreetNumber					:	"Street Number",
	personalData_Address_Button_Label					:	"FIND ADDRESS",
    personalData_Scan_Id_Label                          :   "Scan Driver's Licence",
    scanID_parsingErrorText								: 	"ID type not supported. Please enter data manually",
        
	personalData_Address_AddressLine1					:	"Street Name",
	personalData_Address_AddressLine2					:	"Address Line 2",
	personalData_Address_SuiteUnit						:	"Apt # / Suite / Unit",
	personalData_Address_City							:	"City",
	personalData_Address_Province						:	"Province",


	personalData_Address_ResidenceType					:	"Residence Type",
	personalData_Address_Own							:	"Own",
	personalData_Address_Rent							:	"Rent",
	personalData_Address_Parents						:	"With Parents",
	// US5131 WICI - Add Student Housing label to Residence Type list
	personalData_Address_Student                        :   "Student Housing",
	personalData_Address_Other							:	"Other",

	personalData_Address_MonthlyPayment				:	"Monthly House Payment (per month)",
	personalData_Address_Duration						:	"How long have you lived at your current address?",
	personalData_Address_DurationYears					:	"Years",
	personalData_Address_DurationMonths				:	"Months",
	
	// US3623
	personalData_PreviousAddressWasInCanada				:	"Was your previous address in Canada?",
	personalData_PreviousAddress_Title					:	"Previous address only required",
	personalData_PreviousAddress_Description			:	" if less than 2 years at current address",


	personalData_PreviousAddress_PostalCode			:	"Postal Code",
	personalData_PreviousAddress_StreetNumber			:	"Street Number",

	personalData_PreviousAddress_Button_Label			:	"FIND ADDRESS",

	personalData_PreviousAddress_AddressLine1			:	"Street Name",
	personalData_PreviousAddress_AddressLine2			:	"Address Line 2",
	personalData_PreviousAddress_SuiteUnit				:	"Apt # / Suite / Unit",
	personalData_PreviousAddress_City					:	"City",
	personalData_PreviousAddress_Province				:	"Province",
	
	// US3623
	personalData_PreviousAddress_NotInCanada			:	"Previous address is not in Canada:",

	personalData_Note									:	"Please note, we may send you text messages to your mobile phone number for  account notices, these messages will be at no cost to you.",
	
	// US4637
	EmailInfo_PageTitle									:	"E-MAIL INFORMATION",
	
	//US3625
	personalData_Scan_Loyalty_Label                     :   "Scan Triangle Rewards<sup>&trade;</sup> Card (Formerly My Canadian Tire Money<sup>&reg;</sup>)",
	personalData_Scan_Loyalty_Dialog_Label              :   "Scan Triangle Rewards Card",
	scanLoyaltyDialog_holdText							:   "Hold the Triangle Rewards card to be scanned behind tablet as shown in the picture above so the barcode is in view of the camera. Scanning will happen automatically. When you hear the beep, the scan is successful. The app will close, and you will return to the current page.",
	scanLoyaltyDialog_pressText							:   "Press Continue to launch Scan Triangle Rewards card.",
	scanLoyalty_parsingErrorText						: 	"Card not supported. Please enter data manually",
    scanLoyaltyDialog_yes                               :   "Continue",
    
	finEmpInfo_PageTitle								:	"FINANCIAL AND EMPLOYMENT INFORMATION",
	finEmpInfo_BankingProducts							:	"My Banking Products (select all that apply)",
	finEmpInfo_VISAMCAMEX								:	"Visa/MC/Amex",
	finEmpInfo_StoreCard								:	"Store Card",
	finEmpInfo_GasCard									:	"Gas Card",
	finEmpInfo_BankLoan									:	"Bank Loan",
	finEmpInfo_ChequingAcct								:	"Chequing Account",
	finEmpInfo_SavingsAcct								:	"Savings Account",

	finEmpInfo_EmpType									:	"Employment Status",
	finEmpInfo_FullTime									:	"Full Time",
	finEmpInfo_Seasonal									:	"Seasonal",
	finEmpInfo_PartTime									:	"Part Time",
	finEmpInfo_Homemaker							    :	"Homemaker",
	finEmpInfo_Retired									:	"Retired",
	finEmpInfo_Unemployed								:	"Unemployed",
	finEmpInfo_Other									:	"Other",

	// US3621
	finEmpInfo_JobTitleOther							:	"Job Title (Other)",
	
	finEmpInfo_JobTitle									:	"Job Title",
	finEmpInfo_JobCategory								:	"Job Category",
	finEmpInfo_EmployerName								:	"Employer Name",
	finEmpInfo_EmployerCity								:	"Employer City",
	finEmpInfo_EmployerPhone							:	"Employer Phone",
	finEmpInfo_HowLongCurrentEmployer					:	"How Long at Current Employer?",
	// US3960
	// 	finEmpInfo_GrossIncome							:	"Gross Annual Income (per year)", // Old
	finEmpInfo_GrossIncome								:	"Annual Gross Personal Income",
	finEmpInfo_GrossHouseholdIncome						:	"Annual Gross Household Income",
	
	finEmpInfo_SIN										:	"Social Insurance Number (Optional)</br>  <span style=\"font-family: Helvetica, Arial, sans-serif; font-size: 9pt; font-weight: bold; color: #1569C7\";><p>Providing your SIN minimizes the time between application and approval as it allows us to more efficiently process your financial information.</p></span>",
	finEmpInfo_Years									:	"Years: ",
	finEmpInfo_Months									:	"Months: ",

	supCardRequest_PageTitle							:	"SUPPLEMENTARY CARD REQUEST",

	supCardRequest_WouldYouLikeACard					:	"Would you like a supplementary card?",
	supCardAttention_Text								:	"Attention! When adding a supplementary card holder,<br> complete and accurate information must be included.",

	supCardRequest_ForWhom								:	"Supplementary card request for:",
	supCardRequest_Spouse								:	"Spouse",
	supCardRequest_Son									:	"Son",
	supCardRequest_Daughter								:	"Daughter",
	supCardRequest_Relative								:	"Relative",
	supCardRequest_Other								:	"Other",

	supCardRequest_FirstName							:	"First Name",
	supCardRequest_Initial								:	"Middle Initial",
	supCardRequest_LastName								:	"Last Name",
	supCardRequest_DateOfBirth							:	"Date of Birth",
	supCardRequest_Telephone							:	"Telephone",

	supCardRequest_SameAddyPrimaryApplicant				:	"Same address as the primary applicant?",

	sigScreen_Title										:	"SIGNATURE",

	sigScreen_Date										:	"Date: ",
	sigScreen_ProceedToConfirmation						:	"PROCEED TO NEXT PAGE",
	sigScreen_ChooseCardRightForYou                     :   "Choose the card that's right for you:",
	sigScreen_OMZCard_Note                              :   "<p style='-webkit-margin-before: 0px; -webkit-margin-after: 0px;'><b>Please note the Triangle<sup>&trade;</sup> Mastercard<sup>&reg;</sup> and Triangle<sup>&trade;</sup> World Elite Mastercard<sup>&reg;</sup></p> <p style='-webkit-margin-before: 0px; -webkit-margin-after: 0px;'>have the same fees, grace period and minimum payment formula.</b></p>",
	
	sigScreen_WorldEliteCard_text                       :	"<p style='-webkit-margin-before: 0em; -webkit-margin-after: 0.3em; webkit-margin-start: 1em; '><strong>I would like to switch my <br> application to the Triangle<sup>&trade;</sup><br>World Elite Mastercard.<sup>&reg;</sup></strong></p>",
	sigScreen_WorldEliteCard_text1                       :	"<strong>application to the Triangle<sup>&trade;</sup></strong> <br>",
	sigScreen_WorldEliteCard_text2                       :	" <strong>World Elite Mastercard.<sup>&reg;</sup><strong><br>",
	sigScreen_WorldEliteCard_Note_text                   :	"<strong> Consider if:</strong> <br><br>",
	sigScreen_WorldEliteCard_Note_text1                   :	" You have excellent credit <br><br>",
	sigScreen_WorldEliteCard_Note_text2                   :	" You meet the minimum <br> ",
	sigScreen_WorldEliteCard_Note_text3                   :	" income requirement<br>",
	sigScreen_WorldEliteCard_Note_text4                   :  " ",
    sigScreen_TriangleCard_text                         :   "<p><strong>I'll stick with the</strong> <br>Triangle<sup>&trade;</sup> Mastercard<sup>&reg;</sup><br></p>", 
    sigScreen_TriangleCard_text1                        :   "Triangle<sup>&trade;</sup> Mastercard<sup>&reg;</sup>",

	ProvincesList_null									:	'Please select...',
    IdTypesList_null									:	'Please select...',
	// US4078
    IdTypesList_DR										:   'DRIVER\'S LICENCE',
    IdTypesList_HE										:   'HEALTH CARD',
    IdTypesList_PR										:   'PERMANENT RESIDENT CARD',
    IdTypesList_BI										:   'BIRTH CERTIFICATE',
    IdTypesList_CI										:   'CANADIAN CITIZENSHIP CARD',
    IdTypesList_PA										:   'PASSPORT',
    // US4287
    IdTypesList_IN										:   'CERTIFICATE OF INDIAN STATUS CARD',
    IdTypesList_RE										:   'RECORD OF LANDING',
    
    IdTypesList_BC										:   'BRITISH COLUMBIA ID CARD',
    IdTypesList_AB										:   'ALBERTA ID CARD',    
    IdTypesList_NS										:   'NOVA SCOTIA ID CARD',
    IdTypesList_NB										:   'NEW BRUNSWICK ID CARD',
    IdTypesList_NL										:   'NEWFOUNDLAND & LABRADOR ID CARD',
    IdTypesList_SK										:   'SASKATCHEWAN ID CARD',
    IdTypesList_MB										:   'MANITOBA ID CARD',
    IdTypesList_PE										:   'PRINCE EDWARD ISLAND ID CARD',
    IdTypesList_NT										:   'NORTHWEST TERRITORIES ID CARD',
    IdTypesList_NU										:   'NUNAVUT ID CARD',
    IdTypesList_YT										:   'YUKON ID CARD',
    IdTypesList_ON										:   'ONTARIO ID CARD',
    IdTypesList_SC										:	'BRITISH COLUMBIA SERVICES CARD',

    /*
     * Old Idtypes
     * IdTypesList_BC										:   'INSURANCE CORPORATION OF BRITISH COLUMBIA',
    IdTypesList_AB										:   'ALBERTA REGISTRIES',    
    IdTypesList_NS										:   'DEPT. OF NOVA SCOTIA & MUNICIPAL RELATIONS',
    IdTypesList_NB										:   'SERVICE NEW BRUNSWICK',
    IdTypesList_NL										:   'DEPT. OF GOVERNMENT SERVICES AND LANDS OF NEWFOUNDLAND AND LABRADOR',
    IdTypesList_SK										:   'SASKATCHEWAN GOVERNMENT INSURANCE ID',
    IdTypesList_MB										:   'MANITOBA PUBLIC INSURANCE',
    IdTypesList_PE										:   'DEPT. OF TRANSPORTATION AND PUBLIC WORKS OF PRINCE EDWARD ISLAND',
    IdTypesList_NT										:   'DEPT. OF TRANSPORTATION OF THE NORTHWEST TERRITORIES',
    IdTypesList_NU										:   'DEPT. OF COMMUNITY GOVERNMENT AND TRANSPORTATION OF THE TERRITORY OF NUNAVUT',
    IdTypesList_YT										:   'DEPT. OF COMMUNITY SERVICES OF YUKON',
    IdTypesList_ON										:   'ONTARIO MINISTRY OF TRANSPORTATION',
     * 
     */          

    personalData1_validation_placeofissue				:	'Place of Issue is not selected',
    personalData1_validation_idtype						: 	'ID Type is not selected',
    personalData1_validation_idnumbers					: 	'Invalid ID Numbers value',
    personalData1_validation_firstName					: 	'Enter valid First Name',
    personalData1_validation_lastName					: 	'Enter valid Last Name',
    personalData1_validation_initial					: 	'Enter valid Initial',
    personalData1_validation_birthDate					: 	'Enter valid Date Of Birth',
    personalData1_validation_email						: 	'Enter a valid Email Address',
    personalData1_validation_homePhone					: 	'Enter valid Home Phone',
    personalData1_validation_cellPhone					: 	'Enter valid Cellular Telephone',
    personalData1_validation_correspondence				: 	'Select valid Correspondence',
    personalData1_validation_primaryRadio				: 	'Select valid PrimaryRadio',
    personalData1_validation_secondaryRadio				: 	'Select valid SecondaryRadio',
    personalData1_validation_MobilePaymentYesOrNo	    : 	'Select Mobile payment yes or no radio',
    // US3623
    personalData1_validation_preAddrNotInCanada			: 	'Select valid Previous address not in Canada Yes/No',

    //Alex: Financial model validation messages ......................

    financialData_validation_jobTitle					:	'Enter valid Job Title',
    financialData_validation_jobCategory				:	'Job Category is not selected',
    financialData_validation_employerName				:	'Enter valid Employer Name',
    financialData_validation_employerCity				:	'Enter valid Employer City',
    financialData_validation_grossIncome				:	'Enter valid Annual Gross Personal Income',
    // US3960
    financialData_validation_grossHouseholdIncome		:	'Enter valid Annual Gross Household Income',
    
    financialData_validation_sin						:	'Enter valid Social Insurance Number',

    financialData_grossIncomeError1						:	'The Annual Gross Personal Income entered is $',
    financialData_grossIncomeError2						:	'. Is this correct?',
    // US3960
    financialData_grossHouseholdIncomeError1			:	'The Annual Gross Household Income entered is $',
    financialData_grossHouseholdIncomeError2			:	'. Is this correct?',

	//................................................................

	//........................NEW ITEMS ..............................

	optionalProducts_Proceed							: 	"PROCEED TO CONFIRMATION",
	optionalProducts_PageTitle						    :	"Here are two optional products<span class=\"optionaProduct_header_sup\">&#8224;&#8224;</span> available for<br> your Canadian Tire Bank issued credit card",

	// Old line
	// optionalProducts_SignatureAgreement1				:	"<i>I understand the(se) optional product(s) is(are) being offered separately from the Canadian Tire branded Mastercard and that they are not required to obtain the Canadian Tire branded Mastercard. I understand the optional product(s) I select will only be provided if I sign and thereby agree to the cost disclosed. If I have applied for a Canadian Tire Mastercard and I am approved, I authorize Canadian Tire Financial Services Limited to charge my Canadian Tire Mastercard account in the amount and time period indicated above. I have read and understand the product details disclosed in the terms and conditions and give my consent to be enrolled in the above selected optional product(s).</i>",
	optionalProducts_SignatureAgreement1				:	"<i>I understand the(se) optional product(s) is(are) being offered separately from the Canadian Tire Bank issued Mastercard and that they are not required to obtain the Canadian Tire Bank issued Mastercard. I understand the optional product(s) I select will only be provided if I sign and thereby agree to the cost disclosed. If I have applied for a Canadian Tire Mastercard and I am approved, I authorize Canadian Tire Financial Services Limited to charge my Canadian Tire Mastercard account in the amount and time period indicated above. I have read and understand the product details disclosed in the terms and conditions and give my consent to be enrolled in the above selected optional product(s).</i>",
	optionalProducts_SignatureAgreement2				:	"By signing and checking the box below, I agree to enrol in the(se) optional product(s), accept the terms and conditions and to the cost(s) disclosed.",

    optionalProducts_CreditProtector_Additions			:	"*Plus applicable taxes, payable monthly. See the Legal Information handout or your Certificate of Insurance for all terms, conditions, limitations and exclusions. Terms and conditions apply." +
      														"<br>**If you are less than age 66, you will be enrolled in Credit Protector. If you are between 66-75 you will be enrolled in Credit Protector - <i>Senior</i>. Credit Protector and Credit Protector-<i>Senior</i> are underwritten by American Bankers Life Assurance Company of Florida and American Bankers Insurance Company of Florida. American Bankers Life Assurance Company of Florida and American Bankers Insurance Company of Florida and their subsidiaries and affiliates carry on business in Canada under the name of Assurant Solutions.",

	optionalProducts_IdentityWatch_Title				:	"<strong>Identity Watch Classic<sup>&reg;</sup></strong>",
	optionalProducts_IdentityWatch_Text					:	"<br>Help protect your and your family's private and valuable information with Identity Watch Classic. <br>" +
															"<ul type=\"disc\">" +
															"<li>Online monitoring of your registered personal information</li>" +
															"<li>Rebound<sup>&reg;</sup><sup>&trade;</sup> Asset Return Service*** which may help you recover lost or stolen items</li>" +
															"<li>Computer Tune-Up Reimbursement*** of up to $75 CDN, inclusive of taxes, per subscription year.</li>" +
															"<li>Plus Card Protection, Online Data Backup, Credit Card Theft Reward Service*** of up to $3,000 CDN.</li>" +
															"<li>$4.99*** payable in advance monthly after the first transaction is made on your Canadian Tire branded credit card.</li></ul>" +
															"If you enrol in Identity Watch Classic, your subscription will be effective as of the enrolment date indicated on your Welcome Letter which is included in your Identity Watch Classic welcome package.",
	optionalProducts_IdentityWatch_Additions			:	"<br><br>*** Plus applicable taxes. Subscription Fees will commence after the first transaction is made on your Canadian Tire branded credit card. Thereafter, subscription Fees will be charged in advance monthly to your Canadian Tire branded credit card. See the Legal Information handout for all terms, conditions, limitations and exclusions. Terms and conditions apply.",

	optionalProducts_TermsAndConditions_PA_Title		:	"<strong>Terms and Conditions for Canadian Tire Protection Advantage<sup>&trade;</sup></strong><br><br>",

	//................................................................Start Terms and Conditions for Credit Protector.......................
	// Old code
	/*
	 optionalProducts_TermsAndConditions_CP_Title		:	"<strong>Terms and Conditions for Canadian Tire Protection Advantage<sup>&trade;</sup></strong>" +
															"<br><strong>Credit Protector Summary of Insurance Coverage: </strong>",
	*/
	// UAT 12 - CP Revitalization
	optionalProducts_TermsAndConditions_CP_Title		:	"<strong>Credit Protector Summary of Insurance Coverage </strong>",
	
	// Old line
	/*
	optionalProducts_TermsAndConditions_CP				:	"CREDIT PROTECTOR<sup>&reg;</sup><sup>1</sup>"
															+ "<br>**Credit Protector<sup>&reg;</sup><sup>&trade;</sup><sup>1</sup>"
															+ "<br>Available to Cardmembers ages 18-65 years."
															+ " If you become disabled, or if you lose your job through no fault of your own<sup>2</sup>, Credit Protector can cover 3% of the outstanding balance on your <i>Canadian Tire</i><sup>&reg</sup> Mastercard<sup>&reg</sup> account, up to $1,000 per month, until you return to work or your balance is paid off, to a maximum of $20,000."
															+ " In the event of loss of life or dismemberment<sup>3</sup>, Credit Protector can pay your outstanding balance, to a maximum of $20,000."
															+ " If you or your spouse are diagnosed with a Terminal Illness<sup>4</sup> or pass away, Credit Protector can pay your outstanding balance to a maximum of $20,000."
															+ "<br><br>**Credit Protector-<i>Senior</i><sup>&reg;</sup><sup>1</sup>"
															+ "<br>Available to Cardmembers ages 66-75 years."
															+ " In the event of loss of life<sup>3</sup>, Credit Protector-<i>Senior</i> can pay your outstanding balance, to a maximum of $20,000."
															+ " If you or your spouse are diagnosed with a Terminal Illness<sup>4</sup>, Credit Protector-<i>Senior</i> can pay your outstanding balance to a maximum of $20,000."
															+ "<br><br>FOR CREDIT PROTECTOR AND CREDIT PROTECTOR-SENIOR: Group insurance coverage underwritten by American Bankers Life Assurance Company of Florida and American Bankers Insurance Company of Florida, Assurant Solutions<sup>&reg</sup> companies, PO Box 7000, Kingston, Ontario K7L 5V3."
															+ "<br><br>CREDIT PROTECTOR INSURANCE PREMIUM PAYMENT"
															+ "<br>Price is $1.10 per $100 of the outstanding balance on your monthly account statement less the outstanding amount of any Special Payment Plans plus applicable taxes. No premium will be charged on your <i>Canadian Tire</i> Mastercard account in any month where such outstanding balance calculation is less than $10.00. For example if your statement balance after deducting the insurance premiums charged on the statement and the amount of any Special Payment Plans is $200 you would pay $2.20 plus applicable taxes. There is no premium charged in any month where balance is less than $10.00<sup>5</sup>.",
	*/
  	optionalProducts_TermsAndConditions_CP				:	"<strong>IMPORTANT INSURANCE INFORMATION: </strong>"
															+ "<br>This summary provides a description of the insurance coverages and other important information concerning the Credit Protector Insurance group creditor insurance program. The Total Disability (excluding Quebec), Life, Terminal Illness, Dismemberment, Accidental Death and Accidental Dismemberment insurance coverages are underwritten by American Bankers Life Assurance Company of Florida (ABLAC) and the Involuntary Unemployment and Total Disability (Quebec only) insurance coverages are underwritten by American Bankers Insurance Company of Florida (ABIC). ABLAC, ABIC, their subsidiaries and affiliates carry on business in Canada under the name of Assurant Solutions<sup>&reg;</sup>. The Primary Cardmember (person whose name the account for a Canadian Tire Bank issued credit card has been opened) will receive, within 30 days of the insurance coming into force, a Certificate of Insurance including full details of coverage, such as definitions, benefits, limitations, restrictions and exclusions, if the Primary Cardmember elects to purchase the insurance and meets the eligibility requirements indicated below. Read the Certificate of Insurance carefully for full details upon receipt and store in a safe place with your other valuable documents. The Primary Cardmember is free to cancel the insurance coverage at any time. See the Termination/Cancellation/Modification of Coverage section below for details with regard to cancellation and termination provisions. Premium rates are subject to change. "
															+ "<br><br><strong>PREMIUM: </strong>"
															+ "<br>Premiums are calculated as $1.10 per $100 of the average daily balance on the Canadian Tire Bank issued credit card (less the outstanding amount of any Special Payment Plans), plus applicable taxes. For example, if your average daily balance is $350 you would pay just $3.85, plus applicable taxes. No insurance premium will be charged in any month where the average daily balance on the Canadian Tire Bank issued credit card is less than $10. At age 80, the premium rate reduces to $0.59 per $100 of the average daily balance (less the outstanding amount of any Special Payment Plan), plus applicable taxes."
															+ "<br><br><strong>ELIGIBILITY FOR ALL COVERAGES: </strong>"
															+ "<br>To be eligible for Credit Protector insurance coverages the Primary Cardmember must be an individual, at least 18 years of age and less than 76 years of age at the time of enrolment, indebted under the Canadian Tire Bank issued credit card to which the premium for Credit Protector is billed."
															+ "<br><br><strong>BENEFITS FOR TOTAL DISABILITY AND INVOLUNTARY LOSS OF EMPLOYMENT COVERAGES: </strong>"
															+ "<br>Coverage for Total Disability (excluding Quebec) is provided under Group Master Policy number 960913L-1. Coverage for Total Disability (Quebec only) and Involuntary Unemployment is provided under Group Master Policy number 960913-1. If the Primary Cardmember becomes totally disabled, or involuntarily unemployed, these insurance coverages could pay a monthly benefit of 5% of the Primary Cardmember’s Canadian Tire Bank issued credit card’s outstanding balance, as of the statement date coinciding with or immediately before the date of total disability or involuntary unemployment, subject to a monthly maximum of $1,000 and a maximum benefit payment of $20,000 per Canadian Tire Bank issued credit card. Special Payment Plans are not included in the benefit payments. The Primary Cardmember must be working for salary or wages for at least 25 hours per week for a single employer, not including temporary or contract employment, at the date of loss. The Primary Cardmember is eligible for benefits after 30 consecutive days of total disability or involuntary loss of employment. Benefits are payable as of the 31<sup>st</sup> day and are based on the Primary Cardmember’s Canadian Tire Bank issued credit card’s outstanding balance as of the statement date coinciding with or immediately before the date of total disability or involuntary loss of employment. Total Disability benefits are payable only if the Primary Cardmember is continuously totally disabled, is unable to perform all of the regular duties of his or her employment and is under the regular care and treatment of a qualified medical doctor, and satisfactory proof has been provided by the doctor to the insurer. Restrictions for loss of employment coverage include: conviction for an offence under the <i>Criminal Code</i> (Canada), loss of temporary, contract or part-time employment (less than 25 hours per week), loss of self-employment unless due to a creditor-initiated bankruptcy evidenced by a court order, or end of normal seasonal employment. Charges to the Canadian Tire Bank issued credit card made after the date of loss will not be covered unless the Primary Cardmember remains insured, returns to work for more than 30 consecutive days, and is subsequently totally disabled or involuntarily unemployed under the terms of the Group Master Policy."
															+ "<br><br><strong>BENEFITS FOR LIFE AND DISMEMBERMENT COVERAGE: </strong>"
															+ "<br>Coverage is provided under Group Master Policy number 960913L-1. The Life and Dismemberment benefits, which will be paid only once, extend to the Primary Cardmember (and the Primary Cardmember’s spouse) under the age of  80.  Upon receipt of proof of death or dismemberment, as defined in the Group Master Policy, these coverages could pay the outstanding balance of the Canadian Tire Bank issued credit card as at the date of death or dismemberment, subject to a maximum benefit payment of $20,000 per account. Excluded from life insurance coverage is self-inflicted injury or suicide if committed within 6 months from the effective date of insurance coverage.  "
															+ "<br><br><strong>The Life and Dismemberment coverage changes to Accidental Death and Accidental Dismemberment coverage at age 80</strong> and continues as long as the Primary Cardmember (and the Primary Cardmember’s spouse) are covered by the Group Master Policy. Accidental death or accidental dismemberment must be directly caused by an accident, not from any natural causes. "
															+ "<br><br>If the death of the Primary Cardmember and the Primary Cardmember’s spouse occur simultaneously, only one benefit will be paid."
															+ "<br><br><strong>BENEFITS FOR TERMINAL ILLNESS COVERAGE: </strong>"
															+ "<br>Insurance coverage is provided under Group Master Policy number 960913L-1. The Terminal Illness benefit, which will be paid only once, extends to the Primary Cardmember (and the Primary Cardmember’s spouse) and receipt of proof of terminal illness with a life expectancy of less than 12 months from the time of diagnosis, as defined in the Group Master Policy, could pay the outstanding balance of the Canadian Tire Bank issued credit card as at the date of diagnosis, subject to a maximum benefit payment of $20,000 per account."
															+ "<br><br>Excluded from insurance coverage is any diagnosis of a terminal illness that occurs within the first 6 months from the effective date of insurance coverage resulting from a medical condition which the Primary Cardmember (or Primary Cardmember’s spouse) had symptoms or received medical treatment during the 6 months immediately before the effective date."
															+ "<br><br>The Terminal Illness coverage continues as long as the Primary Cardmember (and the Primary Cardmember’s spouse) is covered by the Group Master Policy."
															+ "<br><br>In the event of simultaneous terminal illness of both the Primary Cardmember and the Primary Cardmember’s spouse, only one benefit will be paid."
															+ "<br><br><strong>CLAIM PROCEDURES: </strong>"
															+ "<br>In order to file a claim, contact the insurer by telephone at 1-800-480-1853, or by writing to Assurant Solutions, P.O. Box 7000, Kingston, Ontario, K7L 5V3, and a claim form will be sent. This form is to be filed with the insurer within 90 days from the date of loss, except for life insurance claims."
															+ "<br><br><strong>TERMINATION/CANCELLATION/MODIFICATION OF COVERAGE: </strong>"
															+ "<br>The Primary Cardmember may cancel this insurance coverage at any time by contacting Canadian Tire Bank in writing or by calling 1-800-459-6415. If the Primary Cardmember cancels within forty-five (45) days of issuance of the Certificate of Insurance, the insurer will credit the entire premium paid to the Primary Cardmember’s Canadian Tire Bank issued credit card statement; however, if the Primary Cardmember terminates the Canadian Tire Bank issued credit card prior to the date of termination of insurance coverage, the Primary Cardmember will receive a refund by cheque. Coverage will automatically terminate upon the earliest of the following: the date the Primary Cardmember requests cancellation; the date on which monthly payments on the Canadian Tire Bank issued credit card are more than 90 days past due (coverage is automatically reinstated on the statement date following the date when the Canadian Tire Bank issued credit card is once again in good standing); the date on which the Primary Cardmember’s Canadian Tire Bank issued credit card is cancelled; the date on which a life, terminal illness or accidental death claim benefit is paid; the date of death of the Primary Cardmember; and upon termination of one or more of the Group Master Policies if 30 days’ notice of such termination is given to the Primary Cardmember."
															+ "<br><br><strong>CONTACTING INSURER/INTEREST OF CREDITOR: </strong>"
															+ "<br>Please contact the insurers as directed above for further information or clarification regarding the insurance coverage. Canadian Tire Bank has a financial interest in the sale of this insurance.",
	optionalProducts_TermsAndConditions_CP_Additions	:	 "<br><sup>1</sup> Coverage is subject to the terms, conditions, limitations and restrictions outlined in the Certificate of Insurance. There are terms and conditions that may limit or exclude coverage. If approved the coverage will be effective today. Note that a job loss in the next 30 days is not covered. The coverage is month to month and if you want to cancel your coverage at any time please call the Customer Service number located on the back of your Canadian Tire branded credit card. Should you cancel your coverage within the first 30 days of receiving your Certificate of Insurance the Insurer will refund any premium that was paid. For further information call 1-800-459-6415."
															+ "<br><sup>2</sup> Must be working for salary or wages for at least 25 hours per week for a single employer at the time you become involuntarily unemployed or disabled. Must remain disabled or unemployed for 30 days to qualify for benefits. Disability coverage excludes an attempt at suicide and self-inflicted injury. Disability coverage also excludes coverage for claims resulting from certain pre-existing conditions occurring within the first 6 months of coverage, commission or attempted commission of a criminal offence, normal pregnancy, an air travel accident (unless a paying passenger on a regularly scheduled commercial airline flight) and travel or residence outside Canada or the United States. Exclusions for involuntary unemployment benefits include unemployment known by you to be impending at the time of application for the insurance, voluntary unemployment including parental leave, labour dispute or strike, or job loss occurring within the first 30 days of coverage or for cause or for conviction of a criminal offence, voluntary or mandatory retirement, normal seasonal unemployment, unemployment due to accident, illness or pregnancy, loss of temporary employment and loss of self employment."
															+ "<br><sup>3</sup> Life & Dismemberment coverage excludes suicide and intentionally self-inflicted injury that occurs"
															+ " within 2 years of enrolment. <b>For Credit Protector<sup>&reg;</sup>, this coverage is replaced with Accidental Death and"
															+ " Dismemberment at age 66. For Credit Protector-<i>Senior</i><sup>&reg;</sup>, this coverage is replaced with Accidental Death"
															+ " at age 76.</b>"
															+ "<br><sup>4</sup> Terminal Illness benefits require a diagnosis by a licenced medical practitioner in Canada as having a"
															+ " terminal illness with a life expectancy of less than 12 months."
															+ "<br><sup>5</sup> Premium calculation is for Credit Protector and Credit Protector-<i>Senior</i> coverage."
															+ "<br><br>Canadian Tire Bank has a financial interest in the sale of Credit Protector/Credit Protector-<i>Senior</i>."
															+ "<br><br>If you would like more information on Credit Protector/Credit Protector-<i>Senior<i>, you can obtain a full Certificate of Insurance and detailed information by visiting ctfs.com or by calling 1-800-459-6415.",

	optionalProducts_TermsAndConditions_IW_Title		:   "Subscription Conditions for Identity Watch Classic<sup>&reg;</sup>",
	optionalProducts_TermsAndConditions_IW				:
															"Identity Watch Classic is $4.99 payable in advance monthly after the first transaction is made on your Canadian Tire branded credit card, plus applicable taxes. This product includes the following program Benefits" +
															"<br>(&quot;Benefits&quot;): Identity Fraud Protection / Online Monitoring Services (iPiP<sup>&reg</sup>), Rebound<sup>&reg</sup> Asset Return Service and Computer Tune-Up Reimbursement. Plus, Card Protection, Online Data Backup, and Credit Card Theft Reward Service.",
	optionalProducts_TermsAndConditions_IW_Additions	:	"<strong>Eligibility: </strong>Your subscription is effective as of the enrolment date indicated on your Welcome Letter, which is included in the Identity Watch welcome package.  You are eligible to receive Benefits as long as your subscription remains current. " +
															" Eligibility for the Benefits also requires that you are a current Identity Watch subscriber at the time the applicable event occurs. Benefits are also available to you, your spouse and any dependent child(ren) up to age twenty-one (21) who are living at home or are still in school (where applicable)." +
															"<br><strong>Subscription Fees: </strong>Your subscription fees, as indicated in your Welcome Letter or as subsequently updated by Aimia Proprietary Loyalty Canada Inc. (&quot;<strong>Aimia</strong>&quot;) on notice to you (&quot;<strong>Fees</strong>&quot;), will commence after the first transaction is made on your Canadian Tire branded credit card. Thereafter, subscription Fees will be charged in advance monthly to your Canadian Tire branded credit card." +
															" To ensure uninterrupted service, your subscription will automatically renew until you cancel. Your credit card will be charged at the then current rate on the renewal date." +
															"<br><strong>Cancellation by You: </strong>If you are not completely satisfied with your subscription, you may cancel at any time by telephone or fax using the contact information indicated below and your monthly subscription fees will be stopped." +
															" If you cancel within thirty (30) days of your enrolment date, Canadian Tire Financial Services Limited will refund in full any subscription Fees you have paid after the first transaction is made on your Canadian Tire branded credit card. If you cancel after the initial thirty (30) days, cancellation will be effective as of the last day of the current billing cycle or thirty (30) days after the cancellation notification is received, whichever is earlier.  If you cancel, you are responsible for any fees or charges incurred as a result of the services offered through an internet provider or any third party service." +
															"<br><strong>Cancellation by Aimia: </strong>Your subscription may be cancelled if your account is not in good standing or if the subscription Fees which commence after the first transaction on your Canadian Tire branded credit card, are not paid, or if your family or you are found to be engaging in fraud or otherwise misusing the Benefits. Aimia reserves the right to terminate your subscription for any reason on thirty (30) days prior written notice." +
															" It is your responsibility to inform Aimia if you change your address or email contact information." +
															" More details related to Identity Watch Classic, the consent, collection and use of personal information, confidentiality and security, changes to the privacy policy, the full Terms Conditions, or Benefits Guide can be found at www.identitywatchclassic.ca or by calling 1-800-263-1020 in Canada or USA, collect at 905-735-1628, if outside Canada or USA, fax 905-735-2644 or by writing to: Identity Watch Classic, P.O. 1700, Postal Station D Toronto, Ontario M9A 5C7." +
															" The Identity Watch Classic program is sponsored by <i>Canadian Tire </i> Financial Services Limited and provided by Aimia Proprietary Loyalty Canada Inc., 2845 Matheson Blvd. East, Mississauga, ON L4W 5K2.  <i>Canadian Tire </i> Financial Services Limited has a financial interest in the sale of Identity Watch Classic." +
															"<br><br><sup>&reg;</sup>/<sup>&trade;</sup> Internet Personal Information Patrol, iPiP and Rebound are trademarks of Aimia Proprietary Loyalty Canada Inc." +
															"<br><sup>&reg;</sup>/<sup>&trade;</sup> Unless otherwise noted, all trademarks are owned by Canadian Tire Corporation, Limited and are used under licence." +
															"<br><sup>&reg;</sup>/<sup>&trade;</sup> Mastercard and the Mastercard Brand Mark are registered trademarks of Mastercard International Incorporated.",

  //................................................................End Terms and Conditions for Identity Watch Classic.......................
	optionalProducts_IdentityWatch   					:   "- Enrol me in Identity Watch<sup>&trade;</sup>",
	optionalProducts_ProtectionAdvantage   				:   "- Enrol me in Protection Advantage<sup>&trade;</sup>",
	optionalProducts_DoNotEnrolMe 						:   "Not at this time",

	optionalProducts_CreditProtector 					:	"- Enrol me in Credit Protector/Credit Protector Senior.",
	optionalProducts_TermsAndConditions16				:	"I have read and understand the product details, terms and conditions and give my consent to be enrolled in the above selected optional product(s).",


	optionalProducts_WarningHeader 						:   "PLEASE READ CAREFULLY REGARDING<br/>OPTIONAL PRODUCTS",
	
	// Old line
	// optionalProducts_PAProducts							:   "Canadian Tire Protection Advantage, which includes:<i><ul><li>Credit Protector/Credit Protector-Senior</li><li>Identity Watch Classic</li></ul></i>",
	// optionalProducts_CPProducts							:   "<i><ul><li>Credit Protector/Credit Protector-Senior</li></ul></i>",
	optionalProducts_PAProducts							:   "Canadian Tire Protection Advantage, which includes:<i><ul><li>Credit Protector<sup>&reg;</sup> Insurance</li><li>Identity Watch Classic</li></ul></i>",
	optionalProducts_CPProducts							:   "<i><ul><li>Credit Protector<sup>&reg;</sup> Insurance</li></ul></i>",
	optionalProducts_IWProducts							:   "<i><ul><li>Identity Watch Classic</li></ul></i>",
	
	// US3981
	optionalProductScreen_Handoutprompts_Title			:	"IMPORTANT",
	optionalProductQCYES                                :   "Yes",
	optionalProductQCNO                                 :   "No",
	optionalProductScreen_Handoutprompts_YesNo_Message	:	"The Distribution Guide must be given to all customers that enrol in Credit Protector while in the province of Quebec. Have you given the applicant the Distribution Guide?",
	optionalProductScreen_Handoutprompts_Ok_Message		:	"All applicants that enrol in  Credit Protector must be given a Distribution Guide before proceeding.",
	
	//-------US4131 Start --------------
    helpscoverYourCardPaymentFor                        :    "Helps cover your card payments for...",
    OP_CP_Li_InvoluntaryUnemployment                    :    "Involuntary unemployment",
    OP_CP_Li_TotalDisability                            :    "Total disability",
    OP_CP_Li_TerminalIllness                            :    "Terminal illness*",
    OP_CP_Li_Dismemberment                              :    "Dismemberment or loss of sight, hand or foot*<br/>(at age 80 becomes Accidental Dismemberment)",
    OP_CP_Li_Life                                       :    "Life* (at age 80 becomes Accidental Death)</br>* Your spouse is also covered by these 3 coverages",
    
    // IW
    optionalProductIWTitle                              :    "IDENTITY WATCH CLASSIC<span class=\"optionaProduct_cp_iw_sup\">&reg;</span>",
    OP_IW_Helps                                         :    "Helps protect you and your family with these features:",
    OP_IW_LI_lost                                       :    "Lost/Stolen Card Assistance",
    OP_IW_LI_Online                                     :    "Online Data Backup",
    OP_IW_LI_Creadit_card                               :    "Credit Card Theft Reward Service",
    OP_Iw_LI_Identity                                   :    "Identity Fraud Protection/Online Monitoring Service",
    OP_Iw_LI_Computer                                   :    "Computer Maintenance Reimbursement",
    OP_IW_LI_Rebound                                    :    "Rebound&reg; Asset Return Service",
    OP_Iw_All_for                                       :    "All for",
    OP_Iw_per_month                                     :    "<sup>&#36;</sup>4.99 per month",
    OP_Iw_Plus_app_tax                                  :    "plus applicable taxes",
    OP_Iw_Billled_your_card                             :    "Billed to your Canadian Tire Bank issued credit card",
    
    
    //-------US4131 Ends  --------------

	// ---------- US3621 Start ---------
	
	// Job Categories - Start
	
	jobCategoriesList_null 								:  	"Please select...",
	jobCategoriesList_FT								: 	'FULL TIME',
	jobCategoriesList_DR								: 	'Driver',
	jobCategoriesList_GU								: 	'Guard',
	jobCategoriesList_HO								: 	'Homemaker',
	jobCategoriesList_LA								: 	'Labourer',
	jobCategoriesList_MA								: 	'Manager',
	jobCategoriesList_MI								: 	'Military',
	jobCategoriesList_OF								: 	'Office Staff',
	jobCategoriesList_OW								: 	'Owner',
	jobCategoriesList_FA								: 	'Production Worker',
	jobCategoriesList_PR								: 	'Professional',
	jobCategoriesList_RE								: 	'Repairer',
	jobCategoriesList_RT								: 	'Retired',
	jobCategoriesList_SA								: 	'Sales',
	jobCategoriesList_SE								: 	'Service',
	jobCategoriesList_ST								: 	'Student',
	jobCategoriesList_TR								: 	'Trades',
	jobCategoriesList_UN								: 	'Unemployed',
	jobCategoriesList_OT								: 	'Other',
	
	// End
	
	// Job Titles - Start
	
	// TRADERS
	jobTitlesList_null								   :    "Please select...",
	jobTitlesList_TR_BD                                : 	'Builder / Developer',
	jobTitlesList_TR_BL                                : 	'Bricklayer',
	jobTitlesList_TR_CM                                : 	'Cabinet Maker',
	jobTitlesList_TR_CP                                : 	'Carpenter',
	jobTitlesList_TR_CF                                : 	'Concrete Finisher',
	jobTitlesList_TR_ET                                : 	'Electrician',
	jobTitlesList_TR_GZ                                : 	'Glazier',
	jobTitlesList_TR_EO                                : 	'Equipment Operator',
	jobTitlesList_TR_FC                                : 	'Fencer',
	jobTitlesList_TR_GF                                : 	'Gasfitter',
	jobTitlesList_TR_GC                                : 	'General Contractor',
	jobTitlesList_TR_IS                                : 	'Insulator',
	jobTitlesList_TR_IW                                : 	'Ironworker',
	jobTitlesList_TR_LS                                : 	'Landscaper',
	jobTitlesList_TR_MF                                : 	'Marine Fitter',
	jobTitlesList_TR_MW                                : 	'Millworker',
	jobTitlesList_TR_PR                                : 	'Painter',
	jobTitlesList_TR_PF                                : 	'Pipefitter',
	jobTitlesList_TR_PT                                : 	'Plasterer',
	jobTitlesList_TR_PB                                : 	'Plumber',
	jobTitlesList_TR_PL                                : 	'Power Lineman',
	jobTitlesList_TR_SM                                : 	'Site Manager',
	jobTitlesList_TR_TP                                : 	'Taper',
	jobTitlesList_TR_TS                                : 	'Tile Setter',
	jobTitlesList_TR_WD                                : 	'Welder ',
	jobTitlesList_TR_OR                                : 	'Other',

	// DRIVER
	jobTitlesList_DR_AD                                : 	'Ambulance Driver',
	jobTitlesList_DR_BD                                : 	'Bus Driver',
	jobTitlesList_DR_CF                                : 	'Chauffeur',
	jobTitlesList_DR_CR                                : 	'Courier',
	jobTitlesList_DR_DI                                : 	'Driving Instructor',
	jobTitlesList_DR_TO                                : 	'Tow Truck Driver',
	jobTitlesList_DR_TD                                : 	'Truck Driver',
	jobTitlesList_DR_OR                                : 	'Other',

	// MILITARY
	jobTitlesList_MI_AM                                : 	'Army',
	jobTitlesList_MI_AI                                : 	'Air Force',
	jobTitlesList_MI_NY                                : 	'Navy',
	jobTitlesList_MI_AR                                : 	'Armed Forces',
	jobTitlesList_MI_MR                                : 	'Marines',
	jobTitlesList_MI_OR                                : 	'Other',

	// PROFESSIONAL
	jobTitlesList_PR_AT                                : 	'Accountant',
	jobTitlesList_PR_AY                                : 	'Actuary',
	jobTitlesList_PR_AD                                : 	'Auditor',
	jobTitlesList_PR_CR                                : 	'Chiropractor',
	jobTitlesList_PR_CP                                : 	'Computer Programmer',
	jobTitlesList_PR_CT                                : 	'Computer Technician',
	jobTitlesList_PR_CL                                : 	'Controller',
	jobTitlesList_PR_CO                                : 	'Credit Officer ',
	jobTitlesList_PR_DH                                : 	'Dental Hygienist',
	jobTitlesList_PR_DT                                : 	'Dentist',
	jobTitlesList_PR_DI                                : 	'Dietician',
	jobTitlesList_PR_DR                                : 	'Doctor',
	jobTitlesList_PR_EG                                : 	'Engineer',
	jobTitlesList_PR_EX                                : 	'Executive',
	jobTitlesList_PR_FA                                : 	'Financial Advisor',
	jobTitlesList_PR_JD                                : 	'Judge',
	jobTitlesList_PR_LW                                : 	'Lawyer ',
	jobTitlesList_PR_MY                                : 	'Mayor',
	jobTitlesList_PR_NU                                : 	'Nurse',
	jobTitlesList_PR_OP                                : 	'Optometrist',
	jobTitlesList_PR_PL                                : 	'Paralegal',
	jobTitlesList_PR_PR                                : 	'Paramedic',
	jobTitlesList_PR_PC                                : 	'Pharmacist',
	jobTitlesList_PR_PT                                : 	'Physiotherapist',
	jobTitlesList_PR_PI                                : 	'Pilot',
	jobTitlesList_PR_PO                                : 	'Politician',
	jobTitlesList_PR_PA                                : 	'Principal',
	jobTitlesList_PR_PF                                : 	'Professor',
	jobTitlesList_PR_PM                                : 	'Project Manager',
	jobTitlesList_PR_RG                                : 	'Radiologist',
	jobTitlesList_PR_SW                                : 	'Social Worker',
	jobTitlesList_PR_TC                                : 	'Teacher',
	jobTitlesList_PR_VN                                : 	'Veterinarian',
	jobTitlesList_PR_OR                                : 	'Other',

	// PRODUCTION WORKER
	jobTitlesList_FA_AS                                : 	'Assembler',
	jobTitlesList_FA_BD                                : 	'Binder',
	jobTitlesList_FA_BM                                : 	'Boilermaker',
	jobTitlesList_FA_FC                                : 	'Fabricator',
	jobTitlesList_FA_FD                                : 	'Fork Lift Driver',
	jobTitlesList_FA_LH                                : 	'Lead Hand',
	jobTitlesList_FA_MH                                : 	'Mechanic',
	jobTitlesList_FA_MO                                : 	'Machine Operator',
	jobTitlesList_FA_MN                                : 	'Machinist',
	jobTitlesList_FA_MW                                : 	'Maintenance Worker',
	jobTitlesList_FA_MG                                : 	'Manager',
	jobTitlesList_FA_MI                                : 	'Millwright',
	jobTitlesList_FA_OP                                : 	'Operator',
	jobTitlesList_FA_PK                                : 	'Packer',
	jobTitlesList_FA_PT                                : 	'Printer',
	jobTitlesList_FA_QS                                : 	'Quality Specialist',
	jobTitlesList_FA_ST                                : 	'Safety Technician',
	jobTitlesList_FA_SW                                : 	'Sewer',
	jobTitlesList_FA_SO                                : 	'Sorter',
	jobTitlesList_FA_SV                                : 	'Supervisor',
	jobTitlesList_FA_TM                                : 	'Tool and Die Maker',
	jobTitlesList_FA_WW                                : 	'Warehouse Worker',
	jobTitlesList_FA_WD                                : 	'Welder',
	jobTitlesList_FA_OR                                : 	'Other',

	// GUARD
	jobTitlesList_GU_CO                                : 	'Correctional Officer',
	jobTitlesList_GU_CS                                : 	'Customs Officer',
	jobTitlesList_GU_DT                                : 	'Detective',
	jobTitlesList_GU_FF                                : 	'Firefighter',
	jobTitlesList_GU_PR                                : 	'Park Ranger',
	jobTitlesList_GU_SG                                : 	'Security Guard ',
	// US4532
	jobTitlesList_GU_PO                                : 	'Police Officer',
	jobTitlesList_GU_OR                                : 	'Other',

	// MANAGER
	jobTitlesList_MA_AE                                : 	'Arts and Entertainment',
	jobTitlesList_MA_AG                                : 	'Agriculture',
	jobTitlesList_MA_CO                                : 	'Construction',
	jobTitlesList_MA_ED                                : 	'Education',
	jobTitlesList_MA_FB                                : 	'Finance or Banking',
	jobTitlesList_MA_FS                                : 	'Food Services',
	jobTitlesList_MA_MH                                : 	'Medical or Healthcare',
	jobTitlesList_MA_FO                                : 	'Forestry',
	jobTitlesList_MA_GV                                : 	'Government',
	jobTitlesList_MA_MF                                : 	'Manufacturing',
	jobTitlesList_MA_ME                                : 	'Media',
	jobTitlesList_MA_MI                                : 	'Mining',
	jobTitlesList_MA_RE                                : 	'Real Estate',
	jobTitlesList_MA_RT                                : 	'Retail',
	jobTitlesList_MA_TH                                : 	'Technology',
	jobTitlesList_MA_WS                                : 	'Wholesale',
	jobTitlesList_MA_OR                                : 	'Other',

	// OWNER
	jobTitlesList_OW_AO                                : 	'Apparel Store Owner',
	jobTitlesList_OW_CT                                : 	'Caterer',
	jobTitlesList_OW_CO                                : 	'Construction Company Owner',
	jobTitlesList_OW_FM                                : 	'Farmer',
	jobTitlesList_OW_FO                                : 	'Franchisee Owner ',
	jobTitlesList_OW_JO                                : 	'Jewelry Store Owner',
	jobTitlesList_OW_RO                                : 	'Restaurant Owner',
	jobTitlesList_OW_SO                                : 	'Salon Owner',
	jobTitlesList_OW_OR                                : 	'Other',

	// OTHER
	jobTitlesList_OT_AR                                : 	'Artist',
	jobTitlesList_OT_AT                                : 	'Athlete',
	jobTitlesList_OT_CL                                : 	'Clergy',
	jobTitlesList_OT_CO                                : 	'Coach',
	jobTitlesList_OT_CM                                : 	'Comedian',
	jobTitlesList_OT_DC                                : 	'Dancer',
	jobTitlesList_OT_DS                                : 	'Designer',
	jobTitlesList_OT_DJ                                : 	'Disc Jockey',
	jobTitlesList_OT_ED                                : 	'Editor',
	jobTitlesList_OT_GA                                : 	'Graphic Artist',
	jobTitlesList_OT_LE                                : 	'Lighting Engineer',
	jobTitlesList_OT_MS                                : 	'Musician',
	jobTitlesList_OT_PG                                : 	'Photographer',
	jobTitlesList_OT_PD                                : 	'Producer / Director',
	jobTitlesList_OT_RF                                : 	'Referee',
	jobTitlesList_OT_SE                                : 	'Sound Engineer',
	jobTitlesList_OT_SH                                : 	'Stagehand',
	jobTitlesList_OT_WC                                : 	'Wood Carver',
	jobTitlesList_OT_WR                                : 	'Writer',
	jobTitlesList_OT_OR                                : 	'Other',

	// SALES
	jobTitlesList_SA_AT                                : 	'Auctioneer',
	jobTitlesList_SA_BK                                : 	'Broker',
	jobTitlesList_SA_BY                                : 	'Buyer',
	jobTitlesList_SA_DS                                : 	'Direct Sales',
	jobTitlesList_SA_IA                                : 	'Insurance Agent',
	jobTitlesList_SA_RT                                : 	'Realtor',
	jobTitlesList_SA_SA                                : 	'Sales Associate',
	jobTitlesList_SA_SM                                : 	'Sales Manager',
	jobTitlesList_SA_SB                                : 	'Stock Broker',
	jobTitlesList_SA_OR                                : 	'Other',

	// SERVICE
	jobTitlesList_SE_BT                                : 	'Bartender',
	jobTitlesList_SE_BP                                : 	'Bellman / Porter',
	jobTitlesList_SE_BC                                : 	'Butcher',
	jobTitlesList_SE_BL                                : 	'Butler',
	jobTitlesList_SE_CH                                : 	'Cashier',
	jobTitlesList_SE_CW                                : 	'Child Care Worker',
	jobTitlesList_SE_AT                                : 	'Aesthetician',
	jobTitlesList_SE_CS                                : 	'Counsellor',
	jobTitlesList_SE_CJ                                : 	'Custodian / Janitor',
	jobTitlesList_SE_CR                                : 	'Customer Service Representative',
	jobTitlesList_SE_FT                                : 	'Fitness Trainer',
	jobTitlesList_SE_FA                                : 	'Flight Attendant',
	jobTitlesList_SE_FR                                : 	'Florist',
	jobTitlesList_SE_FS                                : 	'Funeral Services',
	jobTitlesList_SE_GM                                : 	'Groomer',
	jobTitlesList_SE_HB                                : 	'Hairstylist / Barber',
	jobTitlesList_SE_HC                                : 	'Health Care / PSW',
	jobTitlesList_SE_HK                                : 	'Housekeeper',
	jobTitlesList_SE_IE                                : 	'Importer / Exporter',
	jobTitlesList_SE_MT                                : 	'Massage Therapist',
	jobTitlesList_SE_PC                                : 	'Pet Care',
	jobTitlesList_SE_PG                                : 	'Photographer',
	jobTitlesList_SE_PW                                : 	'Postal Worker',
	jobTitlesList_SE_SW                                : 	'Sanitation Worker',
	jobTitlesList_SE_TG                                : 	'Tour Guide ',
	jobTitlesList_SE_TA                                : 	'Travel Agent',
	jobTitlesList_SE_WW                                : 	'Waiter / Waitress',
	jobTitlesList_SE_OR                                : 	'Other',

	// REPAIRER
	jobTitlesList_RE_AR                                : 	'Appliance Repairer',
	jobTitlesList_RE_AB                                : 	'Auto Body Repairer',
	jobTitlesList_RE_CT                                : 	'Computer Repair Technician',
	jobTitlesList_RE_HM                                : 	'Handyman',
	jobTitlesList_RE_HP                                : 	'HVAC Repairer',
	jobTitlesList_RE_MW                                : 	'Maintenance Worker',
	jobTitlesList_RE_TT                                : 	'Tire Technician',
	jobTitlesList_RE_MC                                : 	'Mechanic',
	jobTitlesList_RE_SS                                : 	'Seamstress',
	jobTitlesList_RE_SR                                : 	'Shoe Repair',
	jobTitlesList_RE_TR                                : 	'Tailor',
	jobTitlesList_RE_US                                : 	'Upholsterer',
	jobTitlesList_RE_OR                                : 	'Other',

	// LABOURER
	jobTitlesList_LA_BB                                : 	'Busboy',
	jobTitlesList_LA_CM                                : 	'Concrete Maker',
	jobTitlesList_LA_CL                                : 	'Construction Labourer',
	jobTitlesList_LA_DM                                : 	'Delivery Man',
	jobTitlesList_LA_DL                                : 	'Driller',
	jobTitlesList_LA_GR                                : 	'Gardener',
	jobTitlesList_LA_EO                                : 	'Excavator Operator',
	jobTitlesList_LA_FH                                : 	'Farm Hand',
	jobTitlesList_LA_FI                                : 	'Fisherman',
	jobTitlesList_LA_FL                                : 	'Flagman',
	jobTitlesList_LA_GA                                : 	'Gas Station Attendant',
	jobTitlesList_LA_GD                                : 	'Grave Digger',
	jobTitlesList_LA_GK                                : 	'Groundskeeper',
	jobTitlesList_LA_IS                                : 	'Insulator',
	jobTitlesList_LA_LG                                : 	'Logger',
	jobTitlesList_LA_LA                                : 	'Lot Attendant',
	jobTitlesList_LA_MS                                : 	'Mail Sorter',
	jobTitlesList_LA_MW                                : 	'Maintenance Worker',
	jobTitlesList_LA_MI                                : 	'Miner',
	jobTitlesList_LA_MO                                : 	'Mover',
	jobTitlesList_LA_OI                                : 	'Oil Rigger',
	jobTitlesList_LA_PT                                : 	'Painter',
	jobTitlesList_LA_PV                                : 	'Paver',
	jobTitlesList_LA_PR                                : 	'Porter',
	jobTitlesList_LA_RF                                : 	'Roofer',
	jobTitlesList_LA_SC                                : 	'Scrap Collector',
	jobTitlesList_LA_SR                                : 	'Shipper / Receiver',
	jobTitlesList_LA_WW                                : 	'Window Washer',
	jobTitlesList_LA_OR                                : 	'Other',

	// OFFICE STAFF
	jobTitlesList_OF_AM                                : 	'Account Manager',
	jobTitlesList_OF_AR                                : 	'Accounts Receivable Clerk',
	jobTitlesList_OF_AA                                : 	'Administrative Assistant',
	jobTitlesList_OF_AP                                : 	'Appraiser',
	jobTitlesList_OF_BT                                : 	'Bank Teller',
	jobTitlesList_OF_BI                                : 	'Building Inspector',
	jobTitlesList_OF_CO                                : 	'Computer Operator',
	jobTitlesList_OF_CI                                : 	'Civil Servant',
	jobTitlesList_OF_CA                                : 	'Claims Adjuster',
	jobTitlesList_OF_CT                                : 	'Collector',
	jobTitlesList_OF_CS                                : 	'Communications Specialist',
	jobTitlesList_OF_CR                                : 	'Customer Service Representative',
	jobTitlesList_OF_DO                                : 	'Data Entry Operator',
	jobTitlesList_OF_DP                                : 	'Dispatcher',
	jobTitlesList_OF_ET                                : 	'Editor',
	jobTitlesList_OF_ES                                : 	'Estimator',
	jobTitlesList_OF_HR                                : 	'Human Resources',
	jobTitlesList_OF_IC                                : 	'Inventory Clerk',
	jobTitlesList_OF_JL                                : 	'Journalist',
	jobTitlesList_OF_LA                                : 	'Legal Assistant ',
	jobTitlesList_OF_LB                                : 	'Librarian',
	jobTitlesList_OF_PM                                : 	'Project Manager',
	jobTitlesList_OF_RC                                : 	'Receptionist',
	jobTitlesList_OF_RT                                : 	'Recruiter',
	jobTitlesList_OF_TS                                : 	'Translator',
	jobTitlesList_OF_UW                                : 	'Underwriter',
	jobTitlesList_OF_WD                                : 	'Web Designer',
	jobTitlesList_OF_OR                                : 	'Other',

	jobTitlesList_ST                                   : 	'Student',
	
	// End
	
	// ---------- US3621 End ---------

	//................................................................
	//alex: end

	ProvincesList_null									: 'Please select...',
	ALBERTA												: 'ALBERTA',
	BRITISH_COLUMBIA									: 'BRITISH COLUMBIA',
	// US4078
	CANADA												: 'CANADA',
	MANITOBA											: 'MANITOBA',
	NEW_BRUNSWICK										: 'NEW BRUNSWICK',
	NEWFOUNDLAND_LABRADOR								: 'NEWFOUNDLAND & LABRADOR',
	NOVA_SCOTIA											: 'NOVA SCOTIA',
	NORTHWEST_TERRITORIES								: 'NORTHWEST TERRITORIES',
	NUNAVUT												: 'NUNAVUT',
	ONTARIO												: 'ONTARIO',
	PRINCE_EDWARD_ISLAND								: 'PRINCE EDWARD ISLAND',
	QUEBEC												: 'QUEBEC',
	SASKATCHEWAN										: 'SASKATCHEWAN',
	YUKON												: 'YUKON',
	//
	//ProgramsList
	ProgramsList_null									: 	'Please select...',
	/* Old
	Program_BLANK										:	'CT Store (Ontario & West) - BLANK',
	Program_4012										:	'CT Store (Quebec & Atlantic) - 4021',
	Program_5200										:	'Eastern CTP Gas Event - 5200',
	Program_4022										:	'Eastern CTP Local - 4022',
	Program_4024										:	'Western CTP Gas Event - 4024',
	Program_4029										:	'Western CTP Local - 4029',
	Program_Other										:	'Other',	
	BLANK									            :	'BLANK',
	*/
	ATTN 												: 	'ATTN1',
	
	
	// US3767
	Program_Intercept									:	'Intercept',
	Program_In_Store_Events								:	'In-Store Events',
	Program_CTP_Events									:	'CTP Events',
	Program_CTP_Local									:	'CTP Local',
	
	PromoCodeList_null									: 	'Please select...',
	PromoCode_Intecept									:	'Intercept',
	PromoCode_Grand_Opening								:	'Grand Opening',
	PromoCode_Other										:	'Other',
	PromoCode_OMC_Days									:	'Triangle Days',
	PromoCode_Eastern_Events							:	'Eastern Events Program',
	PromoCode_Western_Events							:	'Western Events Program',
	PromoCode_Eastern_Local								:	'Eastern Local Program',
	PromoCode_Western_Local								:	'Western Local Program',
	
	// US3499 Marks Store
	Program_MW999										:	'Marks Store',
	// For QC specific french change
	Program_MW999_QC									:	'Marks Store',
	
	RetailNetWorkList_null							: 	'Please select...',
	Canadian_Tire                                       :   'Canadian Tire'    ,
	Gas                                                 :   'Gas+',
	Marks                                               :   'Mark\'\s',
	SportsCheck_OR_Atmosphere                           :   'Sport Chek/Atmosphere',
	
	loginScreen_EmployeeNumberID_Label                  :    'Employee Number',
	
	// Signature screen START ................................................................



	signatureScreen_Header								:	"By signing below, I agree as follows:",
	signatureScreen_License1							:	"Please open an account in my name for the ",
    signatureScreen_License1_1                          :   " (the \"Card\") ",
    // UAT 25 - Jul 22, CP Revitalization
    // Old code
    // signatureScreen_License1_2                          :   " with an annual interest rate of 19.99% for all charges (excluding cash advances and related fees) and 21.99% for cash advances and related fees.",
	// signatureScreen_License2							:	"If I am not approved for the Card at an annual interest rate of 19.99% for all charges (excluding cash advances and related fees) and 21.99% for cash advances and related fees, you may, without further notice to me, treat this as a separate application for the same Card at an annual interest rate of 25.99% for all types of charges, including cash advances and related fees.",
    signatureScreen_License1_2                          :   " with an annual interest rate of <span style=\"font-size: 12pt;\";><strong>19.99%</strong></span> for all charges (excluding cash transactions and related fees) and <span style=\"font-size: 12pt;\";><strong>22.99%</strong></span> for cash transactions and related fees.",
	signatureScreen_License2							:	"If I am not approved for the Card at an annual interest rate of 19.99% for all charges (excluding cash transactions and related fees) and 22.99% for cash transactions and related fees, you may, without further notice to me, treat this as a separate application for the same Card at an annual interest rate of 25.99% for all types of charges, including cash transactions and related fees.",
	signatureScreen_License2_OMZ						:	"<b>If I am not approved for the Card at the above rates, Canadian Tire Bank may still issue me a Triangle<sup>&trade;</sup> Mastercard<sup>&reg;</sup> at an annual interest rate of 19.99% for all charges (excluding cash transactions and related fees) and 22.99& for cash transactions and related fees.</b>",
	// signatureScreen_License3							:	"The Card is issued by Canadian Tire Bank (\"CTB\").",
	// US3766
	signatureScreen_License4							:	'Canadian Tire Bank may collect, use and share personal information about me for the purposes described in the "Canadian Tire Privacy Charter" including marketing and selling by way of email, telephone, automatic dialing-announcing device or other form of telecommunication.',
	signatureScreen_License5							:	"I will be bound by the terms and conditions of the Canadian Tire Bank Cardmember Agreement that I will receive with the Card, as such agreement may be amended from time to time. I will be solely liable for any charges to the account, including charges made by anyone to whom I have asked that you issue a supplementary card. I will be the only person who receives a monthly statement.",
	signatureScreen_License6							:	"<u> You may obtain credit and other personal information about me from, and exchange such information with, credit reporting agencies.</u>",
	signatureScreen_License6_newLine					:	"I consent to Canadian Tire Bank &#40;&#34;CTB&#34;&#41; verifying my personal information &#40;CTB Information&#41; including my name, address, date of birth, mobile number with my mobile service provider &#40;&#34;MSP&#34;&#41; and consent to my MSP providing CTB my account information &#40;account status, account type, etc.&#41;. The MSP information will be used to verify my identity and to conduct fraud analysis and fraud investigations.",
	signatureScreen_License7							:	"Each person to whom I have asked that you issue a supplementary card has authorized me to provide you with the above information about them.",
	signatureScreen_License8							:	"If I provide you with my Social Insurance Number, you may use it to identify me, including with credit reporting agencies.",
	signatureScreen_License9							:	"I have read and understood this application and I have received a brochure containing additional disclosure relating to this application.",
	sigworldElite_MasterCardNote_1                      :  " <b>Please note that the Triangle<sup>&trade;</sup> World Elite Mastercard<sup>&reg;</sup>can impose higher card acceptance costs on merchants.</b>",

	signatureScreen_Reset_Button_Label             		:    "Clear Signature",

	signatureScreen_TermsAndConditions_AcceptBox     	:    "I have read, understood and agree to the terms and conditions set out above for the ",
	signatureScreen_TermsAndConditions_AcceptBox_MSPVerification              	:    " <b>and MSP verification.</b>",

	signatureScreen_validation_acceptAgreement       	:    "Please accept Terms And Contitions",
	signatureScreen_validation_signature             	:    "Please leave your signature",
	signatureScreen_validation_signDate              	:    "Signature date is not valid",

	signatureScreen_WarningHeader                  		:    "PLEASE READ CAREFULLY",
	signatureScreen_WarningText1              			:    "By signing and checking the box below, you consent to submitting an application for the:",

	 // Signature screen END ................................................................

     // Summary screen START ..............................................................
	summary_PageTitle                                 	:   "Please review and confirm the information provided is accurate as this will help us process your application today!",
	summary_SubmitButton                              	:   "SUBMIT APPLICATION",
	summary_SubmitApplicationError						:	"Application submission failed. Please try again.",

	summary_Status_SubTitle								:	"STATUS: ",
	summary_Status_NotReady								:	"Not Ready",
	summary_Status_Ready								:	"Ready",

	summary_SelectProduct_SubTitle						:	"Selected Product",
	summary_SelectProduct_Card							:	"Card",
	summary_SelectProduct_PromoCode						:	"Promo Code",
	summary_SelectProduct_Province						:	"Province",

	summary_TellAboutYourself_SubTitle                  :	"Customer Identification" ,

	summary_TellAboutYourself_ApplicantInfo				:	"Applicant Information",
	summary_TellAboutYourself_FirstName					:	"First Name",
	summary_TellAboutYourself_Initial					:	"Middle Initial",
	summary_TellAboutYourself_LastName					:	"Last Name",
	summary_TellAboutYourself_DateOfBirth				:	"Date of Birth",
	summary_TellAboutYourself_HomePhone					:	"Home Phone",
	summary_TellAboutYourself_CellPhone					:	"Cellular Phone",
	summary_TellAboutYourself_Correspondence			:	"Preferred Language",

	summary_Address_SubTitle							:	"Address Information",

	summary_Address_PostalCode							:	"Postal Code",
	summary_Address_StreetNumber						:	"Street Number",
	summary_Address_StreetName							:	"Street Name",
	summary_Address_AddressLine2						:	"Address Line 2",
	summary_Address_SuiteUnit							:	"Apt # / Suite / Unit",
	summary_Address_City								:	"City",
	summary_Address_Province							:	"Province",

	summary_Address_ResidenceType						:	"Residence Type",
	summary_Address_MonthlyHousePayment					:	"Monthly House Payment",
	summary_Address_DurationCurrentAddress				:	"How long have you lived at your current address?",

	summary_PreviousAddress_SubTitle					:	"Previous Address Information",

	summary_FinEmp_SubTitle1							:	"Financial Information and ",
	summary_FinEmp_SubTitle2							:	"Employment Information",
	summary_FinEmp_BankingProducts						:	"Select the banking products you have",

	summary_FinEmp_EmploymentType						:	"Employment Type",
	// US3960
	// summary_FinEmp_GrossAnnualIncome					:	"Gross Annual Income", // Old
	summary_FinEmp_GrossAnnualIncome					:	"Annual Gross Personal Income",
	summary_FinEmp_GrossAnnualHouseholdIncome			:	"Annual Gross Household Income",
	
	summary_FinEmp_SIN									:	"Social Insurance Number",

	summary_FinEmp_JobTitle								:	"Job Title",
	summary_FinEmp_JobCategory							:	"Job Category",
	summary_FinEmp_EmpName								:	"Employer Name",
	summary_FinEmp_EmpCity								:	"Employer City",
	summary_FinEmp_EmpProvince							:	"Employer Province",
	summary_FinEmp_EmpPhone								:	"Employer Phone",
	summary_FinEmp_DurationCurrentEmp					:	"Duration at Current Employer",

	summary_SupCard_SubTitle							:	"Supplementary Card Information",
	summary_SupCard_OptedIn								:	"Supplementary card",
	summary_SupCard_ForWhom								:	"Supplementary card for",
	summary_SupCard_Telephone							:	"Telephone",

	summary_SupCard_Address_SubTitle					:	"Address Information",
	summary_SupCard_Address_PostalCode					:	"Postal Code",
	summary_SupCard_Address_StreetNumber				:	"Street Number",
	summary_SupCard_Address_StreetName					:	"Street Name",
	summary_SupCard_Address_AddressLine2				:	"Address Line 2",
	summary_SupCard_Address_SuiteUnit					:	"Apt # / Suite / Unit",
	summary_SupCard_Address_City						:	"City",

	summary_OptProds_ProductSelected					:	"Product selected",
	summary_OptProds_ProdName_PA						:	"Protection Advantage",
	summary_OptProds_ProdName_CP						:	"Credit Protector",
	summary_OptProds_ProdName_IW						:	"Identity Watch Classic",
	summary_OptProds_ProdName_NA						:	"None",
	summary_OptProds_Signature							:	"Signature",
	summary_OptProds_Accept								:	"Terms and conditions accepted",
	summary_OptProds_SignDate							:	"Sign date",


	summary_Signature_SubTitle							:	"Signature",
	summary_Signature_Signature							:	"Signature",
	summary_Signature_Accept							:	"Terms and conditions accepted",
	summary_Signature_SignDate							:	"Sign date",
	summary_Years										:	"Years",
	summary_Months										:	"Months",

	summary_submitError									:	"Unfortunately, we could not submit your application at this time. No additional submission attempts will be permitted. Please abandon the current application and complete a new paper application.<br>We apologize for the inconvenience.",
	summary_submitInitError								:	"Unfortunately, the application could not be submitted due to a back-end issue. Please try again.",

	summary_dataIntegrity_Error							:	"Unfortunately, the application could not be submitted due to an internal issue. Please try again.",

    summary_highlighterHeader                           :   "IMPORTANT",
    summary_highlighter_SubTitle                        :   "Your application must be verified by a Canadian Tire store representative",
    //US3556
    summary_marks_highlighter_SubTitle					:	"Your application must be verified by a Mark’s store representative.",
    
    // US4432
    summary_FGL_highlighter_SubTitle		            :   "Your application must be verified by a store representative",
    
    decline_World_ELiteMasterCard_Note                  :" <b>Note</b>: if a customer is declined for Elite, but approved for Triangle, they will get the Triangle approval screen.",
    
    
	// Summary screen END ................................................................

    // AgentAttribution screen STARTS
    agentAttribution_Submit_Button                      :  "Submit",
    agentAttribution_EnterAgentId_label                 :  "Enter Agent ID",
    agentAttribution_NewPassword_label                  :  "New Password",
    
    agentLoginScreen_EnterAgentID_Label					:	"Enter Agent ID",
	agentLoginScreen_NewPassword_Label					:	"New Password",
	AgentLoginScreen_Button_Label						:	"Submit",
	agentLoginScreen_Create								:	"Create",
	agentLoginScreen_Update								:	"Update",
	agentLoginScreen_Delete								:	"Delete",
	agentLoginScreen_Search								:	"Search",
	loginScreen_Password_Label                          :   "Password",
	agentLoginScreen_messageDialogTitle					:	"Confirmation",
	agentLoginScreen_messageSearchDialogTitle           :   "Search Result",
	agentLoginScreen_messageDialogAgentExistMsg			:	"Agent ID already Exists",
	agentLoginScreen_messageDialogDeleteMsg				:	"Are you sure to delete agentID ",
	agentLoginScreen_messageDialogUpdateMsg				:	"Are you sure you want to change password for ",
	agentLoginScreen_messageDialogSearchMsg				:	"Agent Id ",
	agentLoginScreen_messageDialogAgentNotFoundMsg		:	"Agent Not Found",
	agentLoginScreen_messageDialogEnrollmentDate        :   "Enrollment Date = ",
	
	agentLoginScreen_messageDialogUpdatedSuccessfullyMsg:	"Agent Updated Successfully",
	agentLoginScreen_messageDialogNotUpdatedMsg			:	"Agent Not Updated",
	agentLoginScreen_messageDialogDeletedSuccessfullyMsg:	"Agent ID Successfully Removed",
	agentLoginScreen_messageDialogNotDeletedMsg			:	"Agent Not Deleted",
	
	
	agentLoginScreen_messageDialogCancel		        :   "Cancel",
	agentLoginScreen_messageDialogClose			        :   "Close",
    // AgentAttribution screen ENDS
    
	// Print screen START ..............................................................

	printScreen_Title									:	"Application Complete!",
	printScreen_Title_OMX_OMZ                         	:   "Application Complete!",
	printScreen_SubTitle								:	"Thank you for applying",
	printScreen_SubTitle_1                              :	"You qualify for the",
	printScreen_SubTitle_OMP_OMR						:	"Thank you for applying for the",
	printScreen_Button_Label                            :   "Reprint",

	printScreen_TokenLabel								: 	"Reference&nbsp;#&nbsp;",
	// US4926
	printScreen_MobilePayments_Para4					:	"Any Android device running<br> Android Kit Kat 4.4 or above",
	printScreen_UnknownStatus                   		:   "Unknown application status",
	
	printScreen_ApplicationApproved_RedLabel          	:   "Your application has been <b class='RedLabel'>APPROVED!</b>",
	printScreen_ApplicationApproved                   	:   "Your application has been APPROVED.",
	printScreen_ApplicationApproved_OMX_OMZ            	:   "Your application for the ",
	printScreen_ApplicationApproved_OMX_OMZ_Approved   	:   " has been <b class='RedLabel'>APPROVED</b>",
	printScreen_ApplicationDeclined                   	:   "Unfortunately, we could not process your application response at this time. Please check your mail regularly.",
	printScreen_ApplicationDeclined_OMX_DUPECONV        :   "<p align=\"center\" sytle=\"font-weight:normal;\">Our system noticed that you already have a Canadian Tire Options<sup>&reg;</sup> Mastercard<sup>&reg;</sup>.The name of the Canadian Tire Options Mastercard has changed to the Triangle Mastercard.This means that a Triangle Mastercard application is not required, and a credit bureau check was not completed. You are already a member in the Triangle Rewards program and you will receive the redesigned Triangle Mastercard when your existing Options Mastercard expires.</p>",

	printerSetupDialog_yes                              :   "Apply",
	printerSetupDialog_no                               :   "Cancel",
    printerSetupDialog_macLabel                         :   "Printer MAC Address:",
    printerSetupDialog_ie                               :   "For example:",

	printResponseStatusTitle                            :   "Print confirmation",
	printResponseStatusMsg                              :   "Did the response print successfully?",
	printResponseStatus_StartNewApplication_Button		:	"Start New Application",
    printResponseStatus_LogOut_Button		            :	"Logout",

    scanDialog_yes                                      :   "Continue",
    scanDialog_holdText									:   "Hold ID to be scanned behind tablet as shown in the picture above so the ID barcode is in view of the camera. Scanning will happen automatically. When you hear the beep, the scan is successful. The app will close, and you will return to the current page.",
    scanDialog_pressText								:   "Press Continue to launch Scan Driver's Licence",

	print_StartNewApplicationMessage					:	"Are you sure you would like to start a new application?",
	confirmDialogPritTest_Message                       :   "Do you want to send a test print?",
	testPrintStatusMsg                                  :   "Did the test print successfully?",
	//US4495 - WICI - Test Print at tablet login for FMR
	testPrintVerifyPrinterMsg                           :    "Please ensure printer is on and paired to tablet before proceeding",
	testPrintVerify_Title                               :    "Verify Printer",
	testPrintVerify_Contionue_Button                    :    "Continue with Application",
	
	// US4709
	printScreen_ReceiveCard								:	"You should receive your physical card in 7-10 business days.",
	printScreen_Register_googlePay                      :   "Register for Google Pay",
	printScreen_Register_applePay                       :   "Register for Apple Pay",
	printScreen_Register								:	" and use your phone to make easy and secure payments where ‘tap and pay’ is accepted. Certain merchants may have established a maximum dollar limit for a single transaction. For example, the limit at Canadian Tire stores is $100.",
	print_BeginSetup_Button								:	"BEGIN SETUP",
	print_Done_Button									:	"DONE",
	printScreen_SetUpIns								:	"Setup Instructions",
	printScreen_SetUpInsPara1							:	"Check your mobile phone to ensure you received a text message with a 3-digit security code",
	printScreen_SetUpInsPara2							:	"Open Google Pay on any Android device <br>running Android Kit Kat 4.4 or above</span>",
	printScreen_SetUpInsApplePara2						:	"<span style=\"margin-left: -40px;\">Open</span> <a href=\"#\" id=\"applePayIns\" class=\"androidApplePay bgCenter\" data-lang-class></a> <span style=\"margin-left: 30px;\">on any iPhone 6 or newer device</span>",
	printScreen_SetUpInsPara3							:	"<span style=\"margin-left: -38px;\">Follow the on-screen prompts using the</span><br><span style=\"margin-left: -38px;\"> information below:</span>",
	printScreen_SetUpInsCardNo							:	"Card Number: ",
	printScreen_SetUpInsExpiryDate						:	"Expiry Date: ",
	printScreen_SetUpInsSecurityCode					:	"Security Code: ",
	printScreen_SetUpInsSecurityCodeIns					:	"3-digit code in a text message <br>from 1-647-493-1657",
	printScreen_PayInCompletePara1						:	"Unfortunately we are unable to register your account for Apple Pay or Google Pay at this time; however, your application is still approved. You should receive your physical card in 7-10 business days.",
	printScreen_PayInCompletePara2						:	"Please try to register for Apple Pay or Google Pay once you receive your physical card in the mail.",
	printScreen_PayInCompletePara3						:	"Remember, you can still shop in-store today with your temporary ",
	printScreen_PayParaSymbol							:	".",
	// US4787
	printScreen_safty_instuction_for_user               :   "To help safeguard your security and personal information,&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br> please do not pass your personal device to the sales associate.",
	

	// Print screen END ..............................................................

	// Pending screen START
	pendingScreen_ThankYou 								: 	"Thank you for applying for the",
	pendingScreen_TokenLabel							: 	"Reference&nbsp;#&nbsp;",
	pendingScreen_PhoneNumberLabel						:	"Phone Number",
	
	pendingScreen_Retrieve_InvocationMessage 			: 	"You have chosen to retrieve an application. The information collected on your current application will be permanently deleted and cannot be retained. Are you sure you want to continue?",
	pendingScreen_Retrieve_Title 						: 	"Retrieve Pending Application",
	
	pendingScreen_Check60Seconds_Attempt				: 	"We'll check again in 60 seconds (Attempt ",
	pendingScreen_CheckXXSeconds_Text1					: 	"We'll check again in ",
	pendingScreen_CheckXXSeconds_Text2					:	" seconds ( Attempt ",
	pendingScreen_OfAttemptYY_Text1						: 	" of ", 
	pendingScreen_OfAttemptYY_Text2						:	" )",
	
	pendingScreen_ParaBlock_PleaseWait					:	"Please wait while your application is being reviewed.<br>This process could take up to 15 minutes.<br><br>",
	pendingScreen_Parablock_We_are_checking				:	"We're checking the status of your application...",
	pendingScreen_ParaBlock_IfYouShop					:	"<br><br>If you would like to shop in the store while you're waiting, you can print your reference number using the button below and check back within 30 minutes to see the status of your application.",	
	
	pendingScreen_Label_RefGood30mins					: 	"(Please note: the reference # is only valid for 30 minutes)<br><br><br>",
	pendingScreen_ParaBlock_IfUnable					:	"<br><br>OR<br><br>If you are unable to wait at this time and would prefer your application status confirmation to be mailed to you, press the button below and we will send you an update in the mail.<br>",
	pendingScreen_ParaBlock_NoteDays					:	"<br>Please note: if can take 7-10 days for you to receive the information.<br><br><br>",
		
	pendingScreen_PrintButtonLabel 						: 	"PRINT REFERENCE # AND CHECK STATUS IN 30 MINUTES",
	pendingScreen_EmailButtonLabel 						: 	"RECEIVE STATUS IN THE MAIL",
	pendingScreen_PrintToken_Error						:	"Unfortunately, your token could not be printed. Please try again.",
	pendingScreen_CheckAppStatusLabel 					: 	"CHECK APPLICATION STATUS",
	
	// US4084
	pendingScreen_PollingInProgress_Text				:	"Polling in Progress",
	pendingScreen_PollingCompleted_Text					:	"Polling Completed",
	
	pendingScreen_RetrieveFailed						:	"Cannot retrieve this application. Please try again.",
	// US3436
	pendingScreen_ApplicationPending					:	"We appreciate your patience, however your application is still being reviewed by our customer service team. Please check again in 30 minutes.",
	// Pending screen end

	//Added by DPS ***************************
	//OMC_LEGAL
	legal_omc_first_chapter								: "<sup>1</sup> Terms, conditions and restrictions apply. See program rules at canadiantire.ca or cffs.comictm for more details.Canadian Tire Options Mastercard cardmembers paying with their Options Mastercard collect Canadian Tire Money at a rate that is 10X (or 2X as the case may be) the rate at which other members of the My Canadian Tire Money program collect Canadian Tire Money on purchases made by such other members at Canadian Tire stores (if those other members paid by cash, debit or a credit card not linked to this loyalty program). The offered rate is exclusive of any bonus, or promotional offers or redemption transactions.",
	legal_omc_second_chapter 							: "<sup>2</sup> Minimum fuel purchase required. Rate may vary by location. See local gas bars for details.",
	/*
	legal_omc_third_chapter 							: "&dagger; Cash advance fee: $4.00. Interest is charged on cash advances from the day you receive the advance until the day you repay the advance and all interest accrued.",
	*/
	legal_omc_fives_chapter                             : "<sup>&reg;/&trade;</sup> Unless otherwise noted, all trademarks are owned by Canadian Tire Corporation, Limited and are used under licence." +
                                                          "<br/><sup>&reg;/&trade;</sup> Sport Chek is a registered trademark of FGL Sports Ltd." +
                                                          "<br/><sup>&reg;/&trade;</sup> Mark's is a registered trademark of Mark's Work Warehouse Ltd.",
    // Old line
    // legal_omc_sixth_chapter 							: "<sup>&reg;/&trade;</sup> Mastercard and the Mastercard Brand Mark are registered trademarks, and Paypass and MasterPass are trademarks, of Mastercard International Incorporated.",
    legal_omc_sixth_chapter 							: "<sup>&reg;/&trade;</sup> Mastercard,SecureCode and Cirrus are registered trademarks, and the circles design is a trademark of Mastercard International Incorporated.",
    //OMP_LEGAL
	legal_omp_first_chapter 							: "Based on the level of net new purchases (purchases less credits) that are posted to your Gas Advantage Mastercard account in any monthly billing period, you will be entitled to a discount on each litre of gasoline or diesel fuel that is purchased for a motor vehicle at Canadian Tire gas bars during the following monthly billing period and that is charged to your Gas Advantage Mastercard.",
	// US3997
	legal_omp_second_chapter							: "The discount that you receive in a billing period will be reduced to 2&cent; per litre after you have made purchases of more than $500 for gasoline, diesel fuel or any other sundry items at Canadian Tire gas bars during that billing period using your Gas Advantage Mastercard. For complete terms and conditions, refer to the Gas Advantage Mastercard customer handout or visit ctfs.com/gasadvantage.",
	legal_omp_third_chapter 							: " In Nova Scotia and where pay at the pump feature is not available, pay inside to receive the discount.",
	legal_omp_fourth_chapter							: " Cash advance fee: $4.00. Interest is charged on cash advances from the day you receive the advance until the day you repay the advance and all interest accrued.",
	legal_omp_fives_chapter 							: "   Credit Protector is underwritten by American Bankers Life Assurance Company of Florida and American Bankers Insurance Company of Florida, Assurant <sup>&reg;</sup> companies.",	
	// US3997
	legal_omp_six_chapter 								: "<sup>2</sup> Upon approval for the Gas Advantage Mastercard, your 5&cent; per litre discount will be active upon account open date and valid for 30 days (&quot;Month One&quot;). When Month One is complete your discount will be based on the level of net new purchases (purchases less credits) that are posted to your Gas Advantage Mastercard account in Month One plus an additional 3&cent; off per litre, for a minimum of 5&cent; per litre for the following 30 days (&quot;Month Two&quot;). The extra 3&cent; will only be applied on one transaction per day per account (including supplementary cards). For example, if your net new purchases posted to your account are: $0-$499.99 in Month One, your discount remains at 5&cent; off per litre in Month Two; $500-$999.99 in Month One, your discount will be 8&cent; off per litre in Month Two; $1000-$1999.99 in Month One, your discount will be 11&cent; off per litre in Month Two; or $2000 or greater in Month One, your discount will be 13&cent; off per litre in Month Two. Valid for one gas purchase per day during the offer period. When Month One and Month Two are complete, you will revert to the qualified discount level indicated on your monthly statement. At this time, the discount will be reduced to 2&cent; off per litre after your Canadian Tire gas bar purchases exceed $500."+ "<br></br><sup>&reg;/&trade;</sup> Unless otherwise noted, all trademarks are owned by Canadian Tire Corporation, Limited and are used under licence.",
	// Old code
	// legal_omp_eight_chapter 							: "<sup>&reg;/&trade;</sup> Credit Protector and Credit Protector-Senior are registered trademarks of Canadian Tire Financial Services Limited.",
	legal_omp_eight_chapter 							: "<sup>&reg;/&trade;</sup> Credit Protector is a registered trademark of Canadian Tire Bank.",
	// Old line
	// legal_omp_nine_chapter 								: "<sup>&reg;/&trade;</sup> Mastercard, the Mastercard Brand Mark, Cirrus and Mastercard SecureCode are registered trademarks, and <i>PayPass</i> is a trademark, of Mastercard International Incorporated.",
	// legal_omp_nine_chapter 								: "<sup>&reg;/&trade;</sup> Mastercard and the Mastercard Brand Mark are registered trademarks of Mastercard International Incorporated.",
	legal_omp_nine_chapter 								: "<sup>&reg;/&trade;</sup> Mastercard, and World Mastercard, Secure Code and Cirrus are registered trademarks, and the circles design is a trademark of Mastercard International Incorporated.",
	
	// US3766	
	// OMR_LEGAL	
	legal_omr_first_chapter 							: "<sup>*</sup> Annual rewards will reduce the balance for determining the Minimum Due but not for the purpose of calculating interest or any balance-based insurance premium. Other Terms and Conditions apply.",
	legal_omr_second_chapter 							: "<sup>&dagger;</sup> Some conditions apply. See Rewards Program Terms and Conditions for details.",
	legal_omr_third_chapter 							: "<sup>&dagger;</sup><sup>&dagger;</sup>  To receive the cash back reward bonus, use your Cash Advantage Mastercard account number on the date provided to make a Canadian Tire store purchase. Or make a Canadian Tire store purchase within 45 days from receipt of your plastic card. Provided your account is in good standing, once the eligible purchase has been posted to your account, the bonus cash rewards will be posted to your rewards account on or before the third statement following the posted transaction.",
	legal_omr_four_chapter	 							: "<sup>&reg;/&trade;</sup> Unless otherwise noted, all trademarks are owned by Canadian Tire Corporation, Limited and are used under licence. ",	
	legal_omr_five_chapter 								: " Credit Protector is underwritten by American Bankers Life Assurance Company of Florida (ABLAC) and American Bankers Insurance Company of Florida, (ABIC). ABLAC, ABIC, their subsidiaries and affiliates carry on business in Canada under the name of Assurant<sup>&reg;</sup>.",
	legal_omr_six_chapter 								: "<sup>&reg;</sup> Assurant is a registered trademark of Assurant Inc.",
	legal_omr_seven_chapter 							: "<sup>&reg;/&trade;</sup> Credit Protector is a registered trademark of Canadian Tire Bank. ",
	legal_omr_eight_chapter 							: "<sup>1</sup> Insurance coverage is subject to terms, conditions, limitations, restrictions and exclusions outlined in the Certificate of Insurance. This insurance coverage is available to cardmembers aged 18 to under 76. Maximum coverage available is $20,000."+
	                                                       "<br><br> <sup>&reg;/&trade;</sup> Mark’s/L’Équipeur is a registered trademark of Mark’s Work Wearhouse Ltd. <p>",
	legal_omr_nine_chapter 							    :  "<sup>&reg;/&trade;</sup> Mastercard, and World Mastercard, Secure Code and Cirrus are registered trademarks, and the circles design is a trademark of Mastercard International Incorporated.",	
	// OMC
    omc_first_chapter 								: "A FASTER WAY TO COLLECT YOUR CANADIAN TIRE Money",
    omc_second_chapter 								: "Apply for a Canadian Tire Options Mastercard today. It's a faster way to collect your Canadian Tire 'Mondey'.<br /> Simply use pay with your Options Mastercard and collect Canadian Tire Money everywhere you shop - it's accepted worldwide.",
    omc_fourth_chapter 								: "<b class='RedLabel'>10X</b> Canadian Tire Money every day at Canadian Tire stores<sup>1</sup>",
    omc_fives_chapter 								: "<b style='color: #d52b1e;'>10X</b> Canadian Tire Money every day at Sport Check<sup>&reg;</sup>, Mark's<sup>&reg;</sup> and PartSource<sup>&reg;</sup>",
    omc_sixt_chapter 									: "Collect Canadian Tire Money at participating Canadian Tire gas bar locations<sup>2</sup>",
    omc_eight_chapter 								: "Plus enjoy great cardmember features",
    omc_nine_chapter 									: "<b><i>PayPass</i><span style=\"font-family: Helvetica, Arial, sans-serif;font-size: 7pt;position: relative;top: -4px;\"><sup>&trade;</sup></span></b> for faster checkout",
    omc_ten_chapter 									: "<b>Chip technology</b>  for added security",
    omc_eleven_chapter 								: "<b>Online account access</b> including exclusive email offers",
    omc_twelve_chapter								: "<b>Worldwide acceptance</b>  at millions of places that take Mastercard<sup>&reg;</sup>",
    omc_13_chapter 									: "<b>Cash advances</b><sup>&dagger;</sup> at any Automated Bank Machine (ABM) that displays the Mastercard<sup>&reg;</sup> or Cirrus<sup>&reg;</sup> logos.",
    omc_14_chapter 									: "Help protect your card with powerful security tools",
    omc_15_chapter 									: "Mastercard SecureCode<sup>&reg;</sup>",
    omc_16_chapter 									: "24-hour customer service for lost or stolen cards - call 1-800-459-6415 (outside Canada or the U.S., call collect 905-735-7256)",
	// OMP
    // US3997
    omp_1_chapter 										: "BONUS! Save at least 5&cent; per litre for the first 60 days<sup>2</sup>",
	omp_2_chapter 										: "There&rsquo;s an easy way to save at least 2 cents and up to 10 cents* off per litre of gas at Canadian Tire gas bars. Just use the Gas Advantage<sup>&reg;</sup> Mastercard<sup>&reg;</sup> for your everyday purchases and you&rsquo;ll save instantly right at the pump<sup>&dagger;</sup>!            ",
	omp_3_chapter 										: "Here&rsquo;s how easy it is:",
	omp_4_chapter 										: "1. <b>Swipe</b> the card at the pump<sup>&dagger;</sup><br/> 2. <b>Watch</b> the litre price turn back INSTANTLY<br/>3. <b>Save</b> up to 10&cent; off per litre",
	omp_5_chapter 										: "In Nova Scotia and where pay at the pump is not available, pay inside to receive the discount.",
	omp_6_chapter 										: "Plus, enjoy full Mastercard benefits:",
	omp_7_chapter 										: "<b>Worldwide acceptance</b> at millions of merchants across the globe.",
	omp_8_chapter 										: "<b>Cash advances</b><sup>&dagger;&dagger;</sup> at any Automated Bank Machine (ABM) that displays the Mastercard&reg; or Cirrus&reg; logos.",
	omp_9_chapter 										: "<b>FREE Online Account Inquiry</b> at ctfs.com/MyOnlineAccount                ",
	omp_10_chapter 										: "<b>FREE supplementary cards</b> by calling 1-800-459-6415",
	omp_11_chapter 										: "<b>24-hour customer service</b> for lost or stolen cards. Just call 1-800-459-6415 (outside Canada or the U.S., call collect 905-735-7256).",
	omp_12_chapter 										: "<b>3 ways to pay your bill:</b> at Canadian Tire stores, at your bank or by mail. See your Benefits Booklet or statement back for details.",
	omp_13_chapter 										: "Guard your card online with <b>Mastercard SecureCode<sup>&reg;</sup></b>",
	omp_14_chapter 										: "You can also help protect your card:",
	// Old code
	// omp_15_chapter 										: "Credit Protector<sup>&reg;</sup>/Credit Protector-Senior<sup>&reg;</sup><sup>1</sup>",
	omp_15_chapter 										: "Credit Protector<sup class=\"superscripts\">&reg;1</sup>",
	//OMR
	omr_1_chapter 										: "Get $6 BONUS Cash Back rewards<sup>&dagger;</sup><sup>&dagger;</sup>",
	omr_1_1_chapter 									: "Use your account today at a Canadian Tire store today, OR within 45 days from receipt of your plastic card to receive your bonus reward.",
	omr_1_2_chapter										: "<b>How Much You Can Earn:</b><br>" ,
	omr_2_chapter 										: "<b>Earn up to 1.5%<sup>&dagger;</sup> cash back</b> on all your eligible purchases",
	omr_3_chapter 										: "<b>Earn up to 3%<sup>&dagger;</sup> cash back</b> at Canadian Tire stores, Canadian Tire gas bars and Mark&rsquo;s<sup>&reg;</sup>/L&rsquo;&Eacute;quipeur stores",
	omr_4_chapter 										: "Get unlimited cash back with no annual fee",
	omr_5_chapter 										: "<b>Get your cash back automatically</b> applied to your account every year*",

	// US3766 - Start
	omr_6_chapter 										: "Plus, enjoy full Mastercard benefits:",
	omr_7_chapter 										: "<b>Worldwide acceptance</b> at millions of merchants across the globe.",
	omr_8_chapter 										: "<b>Cash advances</b><sup>&dagger;&dagger;</sup> at any Automated Bank Machine (ABM) that displays the Mastercard&reg; or Cirrus&reg; logos.",
	omr_9_chapter 										: "<b>FREE Online Account Inquiry</b> at ctfs.com/MyOnlineAccount                ",
	omr_10_chapter 										: "<b>FREE supplementary cards</b> by calling 1-800-459-6415",
	omr_11_chapter 										: "<b>24-hour customer service</b> for lost or stolen cards. Just call 1-800-459-6415 (outside Canada or the U.S., call collect 905-735-7256).",
	omr_12_chapter 										: "<b>3 ways to pay your bill:</b> at Canadian Tire stores, at your bank or by mail. See your Benefits Booklet or statement back for details.",
	omr_13_chapter 										: "Guard your card online with <b>Mastercard SecureCode<sup>&reg;</sup></b>",
	omr_14_chapter 										: "<b>Help pay down the outstanding balance or make the monthly payments on your Canadian Tire Bank issued Mastercard<sup>1</sup></b>",
	omr_15_chapter 										: "Credit Protector<sup class=\"superscripts\">&reg;1</sup>",
	// End
	
	//******************************************

	// personalData_ReceiveEmail					        : "I would like to receive offers, promotions, contests, giveaways, events, coupons and other information about products and services that may be of interest to me by email, text message (standard text messaging and data rates may apply) and other electronic messaging from Canadian Tire Corporation, Limited (&ldquo;CTC&rdquo;), Canadian Tire Financial Services Limited (&ldquo;CTFS&rdquo;), and Canadian Tire Bank (&ldquo;CTB&rdquo;), including from their respective business units operating under the Canadian Tire,  Canadian Tire Money Rewards Program (or Canadian Tire Money Advantage<sup>&reg;</sup> Program if you are a resident of Nova Scotia), Canadian Tire Drivers Academy<sup>&reg;</sup>, Canadian Tire Home Services<sup>&reg;</sup>, and Canadian Tire Roadside Assistance<sup>&reg;</sup> brands, as well as from other CTC-CTFS-CTB affiliates and/or marketing partners. You may contact CTC-CTFS-CTB, at P.O. Box 2000 Welland, ON L3B 5S3 or customerservice@canadiantire.ca. I understand that I may withdraw my consent at any time.",
	personalData_ReceiveEmail					        : "You may receive offers, promotions, contests, giveaways, events, coupons and other information about products and services that may be of interest to you by email, text message &#40;standard text messaging and data rates may apply&#41; and other electronic messaging from Canadian Tire Corporation, Limited &#40;&quot;CTC&quot;&#41;, Canadian Tire Services Limited &#40;&quot;CTS&quot;&#41;, and Canadian Tire Bank &#40;&quot;CTB&quot;&#41;, including from their respective business units operating under the Canadian Tire, Triangle Rewards<sup>&trade;</sup> Program, Canadian Tire Drivers Academy<sup>&reg;</sup>, Canadian Tire Home Services<sup>&reg;</sup>, and Canadian Tire Roadside Assistance<sup>&reg;</sup> brands, as well as from their other affiliates and/or marketing partners&#63; You may contact CTC-CTS-CTB, at P.O. Box 2000 Welland, ON L3B 5S3 or <a href='' target='_blank'>customerservice@canadiantire.ca</a>. You may withdraw your consent at any time. <br> <p>Please respond yes or no to receiving such electronic messaging.</p>",
	personalData_Yes								    : "&nbsp;&nbsp;&nbsp;&nbsp;Yes&nbsp;&nbsp;&nbsp;&nbsp;",
	personalData_No								        : "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;No&nbsp;&nbsp;&nbsp;&nbsp;",
	personalData1_validation_ReceiveEmail				: 'Select valid interest by Email',
	summary_TellAboutYourself_Email_Consent             : "E-mail Marketing Consent?",
	signature_OptionsMasterCard 					    : "Triangle<sup>&trade;</sup> Mastercard<sup>&reg;</sup>",
	signature_OptionsMasterCard_Dupconvence_text         : "Thanks for applying for a Triangle Mastercard!",
	signature_World_ELiteMasterCard 					: 	"Triangle<sup>&trade;</sup> World Elite Mastercard<sup>&reg;</sup>",
	signature_GasAdvantageMasterCard 					: 	"Gas Advantage<sup>&reg;</sup> Mastercard<sup>&reg;</sup>",
	signature_GasAdvantageMasterCard1					:	"Gas Advantage<sup>&reg;</sup> Mastercard<sup>&reg;</sup>",
	signature_CashAdvantageMasterCard					: 	"Cash Advantage Mastercard",
	// US5147  WICI - Updated Signature Box
    signature_OptionsMasterCard_CreditCard 				: "Triangle<sup>&trade;</sup> Mastercard<sup>&reg;</sup> credit card",
	signature_OptionsMasterCard_Dupconvence_text        : "Thanks for applying for a Triangle Mastercard!",
	signature_World_ELiteMasterCard_CreditCard 			: "Triangle<sup>&trade;</sup> World Elite Mastercard<sup>&reg;</sup> credit card",
	signature_GasAdvantageMasterCard_CreditCard 		: "Gas Advantage<sup>&reg;</sup> Mastercard<sup>&reg;</sup> credit card",
	signature_CashAdvantageMasterCard_CreditCard		: "Cash Advantage<sup>&reg;</sup> Mastercard<sup>&reg;</sup> credit card",
	
	//omc_first_chapter_ectm                              : "A FASTER WAY TO COLLECT YOUR CANADIAN TIRE Money<sup>&reg</sup>",
    omc_second_chapter_ectm                             : "Apply for Triangle<sup>&trade;</sup> Mastercard<sup>&reg;</sup> today. It's a faster way to collect your Canadian Tire Money<sup>&reg;</sup>.<br> Simply use your card everywhere you shop - It's accepted worldwide at millions of merchants.",

    omc_fourth_chapter_ectm                             : "<b>Collect <span class='RedLabel'>4%</span></b> in Canadian Tire Money every day at Canadian Tire stores, including on automotive service<sup>1</sup>.",
    omc_fives_chapter_ectm                              : "<b>Collect <span class='RedLabel'>4%</span></b> in Canadian Tire Money every day at Sport Chek<sup>&reg;</sup>, Mark's<sup>&reg;</sup>, and PartSource<sup>&reg;</sup><sup>1</sup>.",
    omc_sixt_chapter_ectm                               : "<b>Collect</b> Canadian Tire Money at participating Canadian Tire gas bars<sup>2</sup>.",
    omc_seventh_chapter_ectm                            : "<b>Collect </b> Canadian Tire Money everywhere else you shop<sup>1</sup>.",
    omc_eight_chapter_ectm                             : "<b>Redeem </b> your Canadian Tire Money at Canadian Tire, and at designated Partner locations<sup></sup> such as Sport Check and Marks. <sup>1</sup>",
    
    legal_omc_first_chapter_ectm                        : "<sup>1</sup> In the form of electronic Canadian Tire Money® (CT Money®). Terms and conditions apply to collecting and redeeming. Visit triangle.com for more information. The offered rate is exclusive of any bonus or promotional offers or redemption transactions.  CT Money is collected on the pre-tax amount at Canadian Tire and PartSource.",
    legal_omc_seventh_chapter_ectm                      :" Canadian Tire Financial Services is a business name of Canadian Tire Bank.",
    legal_omc_second_chapter_ectm                       : "<sup>2</sup> Minimum fuel purchase may be required. Rate may vary by location. See local gas bars for details." ,
    legal_omc_fourth_chapter_ectm		                :" † Cash advance fee: $4.00. Interest is charged on cash advances from the day you receive the advance until the day you repay the advance and all interest accrued.",
    personalData_CTMField                               : "Triangle  Rewards<sup>&trade;</sup> Account Number (formerly My Canadian Tire Money<sup>&reg;</sup>) ",
    personalData_CTMAccountText                         : "If you are already a Member, please enter your Triangle  Rewards<sup>&trade;</sup> Account Number. If you are approved for the credit card that you are applying for, your Triangle  Rewards<sup>&trade;</sup> Account will be linked to your new Triangle<sup>&trade;</sup> Mastercard<sup>&reg;</sup>. If left blank, Triangle  Rewards<sup>&trade;</sup> Account Number will be assigned to you.",
    
    personalData_Scan_TextField                         : "<b> Why are we scanning your licence?</b>  We scan your driver’s licence to automatically and accurately capture select information required to complete a credit card application.  This includes your name, address, date of birth, driver’s licence number and expiry date.",
    
    // personalData_ReceiveEmail                           : "I would like to receive offers, promotions, contests, giveaways, events, coupons and other information about products and services that may be of interest to me by email, text message (standard text messaging and data rates may apply) and other electronic messaging from Canadian Tire Corporation, Limited (\"CTC\"), Canadian Tire Financial Services Limited (\"CTFS\"), and Canadian Tire Bank (\"CTB\"), including from their respective business units operating under the Canadian Tire, My Canadian Tire Money<sup>&reg;</sup> Program, Canadian Tire Drivers Academy<sup>&reg;</sup>, Canadian Tire Home Services<sup>&reg;</sup>, and Canadian Tire Roadside Assistance<sup>&reg;</sup> brands, as well as from other CTC-CTFS-CTB affiliates and/or marketing partners. You may contact CTC-CTFS-CTB, at P.O. Box 2000 Welland, ON L3B 5S3 or customerservice@canadiantire.ca. I understand that I may withdraw my consent at any time.",
    // UAT 25 - Jul 22, CP Revitalization
    // Old code
    // signatureScreen_License2                            : "<b>If I am not approved for the Card at an annual interest rate of 19.99% for all charges (excluding cash advances and related fees) and 21.99% for cash advances and related fees, you may, without further notice to me, treat this as a separate application for the same Card at an annual interest rate of 25.99% for all charges (excluding cash advances and related fees) and 27.99% for cash advances and related fees.</b>",
    signatureScreen_License2                            :   "<b>If I am not approved for the Card at the above rates, Canadian Tire Bank may, without further notice to me, treat this as a separate application for the same Card at the following annual interest rates:" +
															"<br><br>(i) if I am a resident of Quebec, 22.99% for all charges; or" +
															"<br><br>(ii) if I reside outside of Quebec, 25.99% for all charges (excluding cash transactions and related fees) and 27.99% for cash transactions and related fees.</b>",
    signatureScreen_License3                            : "The Card is issued by Canadian Tire Bank. The Triangle Rewards<sup>&trade;</sup> Program is provided and administered by Canadian Tire Corporation, Limited.",

    signatureScreen_License3_OMP                        : "The Card is issued by Canadian Tire Bank.",
    signatureScreen_License3_OMR                        : "The Card is issued by Canadian Tire Bank.",
    signatureScreen_License7a                           : "If I am not already a member, I will also be automatically enrolled in the Triangle Rewards<sup>&trade;</sup> Program, even if I am not approved for the Card.",

    signatureScreen_License7b                           : "I will be bound by the Triangle Rewards<sup>&trade;</sup> Program rules, a copy of which are available at triangle.com.",
    
    signatureScreen_License7b_OMX						:	"I will be bound by the Triangle Rewards<sup>&trade;</sup> Program rules.",

    optionalProducts_ProtectionAdvantage_Title          :   "Canadian Tire Protection Advantage<sup>&reg;</sup>",
    // Old line
    // optionalProducts_ProtectionAdvantage_Text           :   "<br><i>(not available for residents of Saskatchewan)</i><br>Enrolment in both Credit Protector<sup>&reg;</sup>**/Credit Protector-Senior<sup>&reg;</sup>** <strong>and</strong> Identity Watch Classic<sup>&trade;</sup>. Includes the coverage and benefits of both optional products, as listed above.",
    // optionalProducts_ProtectionAdvantage_Text           :   "<br><i>(not available for residents of Saskatchewan)</i><br>Enrolment in both Credit Protector<sup>&reg;</sup> Insurance <strong>and</strong> Identity Watch Classic<sup>&trade;</sup>. Includes the coverage and benefits of both optional products, as listed above.",
    
    // US4083
    optionalProducts_ProtectionAdvantage_Text           :   "<br><i>(not available for residents of Saskatchewan)</i><br>Enrolment in both Credit Protector<sup>&reg;</sup> Insurance <strong>and</strong> Identity Watch Classic<sup>&reg;</sup>. Includes the coverage and benefits of both optional products, as listed above.",
    optionalProducts_ProtectionAdvantage_Text           :   "<br>Enrolment in both Credit Protector<sup>&reg;</sup> Insurance <strong>and</strong> Identity Watch Classic<sup>&reg;</sup>. Includes the coverage and benefits of both optional products, as listed above.",
    
	// Old line
	// optionalProducts_CreditProtector_Title              :   "Credit Protector<sup>&reg;</sup>**/Credit Protector-<i>Senior</i><sup>&reg;</sup>**",
    optionalProducts_CreditProtector_Title              :   "Credit Protector<sup>&reg;</sup> Insurance",
    optionalProducts_CreditProtector_Text               :   "<br><i>(not available for residents of Saskatchewan)</i>",
    
    // UAT 39 - Jul 22, CP Revitalization
    optionalProducts_TermsAndConditions25_Top           :   "<sup>&dagger;</sup><sup>&dagger;</sup> These are optional products offered to all customers approved for a Canadian Tire Bank issued Mastercard. The information on this application is used to determine eligibility for a Canadian Tire Bank issued Mastercard and not for the optional products, which are offered to all Canadian Tire Bank issued Mastercard holders." +
                                                            "<br><br><sup>&reg;</sup>/<sup>&trade;</sup> Unless otherwise noted, all trademarks are owned by Canadian Tire Corporation, Limited and are used under licence.",                                                                                                                                                                                    
    optionalProducts_TermsAndConditions25_CP			:	"<br><br><sup>&reg;</sup>/<sup>&trade;</sup> Credit Protector is a registered trademark of Canadian Tire Bank.",
    optionalProducts_TermsAndConditions25_ID			:	"<br><br>The Identity Watch Classic Program is sponsored by Canadian Tire Bank and provided by Aimia Proprietary Loyalty Canada Inc.",    
    														                                                            
    optionalProducts_TermsAndConditions25_Bottom		:	"<br><br>Rebound<sup>&reg;</sup> is a registered trademark and iPiP are registered trademarks of Aimia Proprietary Loyalty Canada Inc." +
                                                        	"<br><br><sup>&reg;</sup> Assurant<sup>&reg;</sup> is a trademark of Assurant, Inc." +
                                                        	"<br><br>Mastercard, the Mastercard Brand Mark and Mastercard SecureCode are registered trademarks of Mastercard International, and used under licence.",
    
    optionalProducts_TableTitle                         :   "Yes, I am interested in the following optional products:",
    //US4131
    optionalProducts_CP_title                           :   "CREDIT PROTECTOR<span class=\"optionaProduct_cp_iw_sup\">&reg;</span> INSURANCE",
    //---Optional product CP details  start ------
    optionalProducts_CP_Helps_cover                     :   "Helps cover your card payments in the event of ...",
    optionalProducts_CP_LI_Involuntary                  :   "Involuntary unemployment",
    optionalProducts_CP_LI_Total                        :   "Total disability",
    optionalProducts_CP_LI_Terminal                     :   "Terminal illness*",
    optionalProducts_CP_LI_Dismemberment                :   "Dismemberment <span style=\"border-bottom: 1px solid #58595b;\">or</span> loss of sight, hand or foot*<br> (at age 80 becomes Accidental Dismemberment)",
    optionalProducts_CP_LI_Life                         :   "Life* (at age 80 becomes Accidental Death)<br>* Your spouse is also covered by these 3 coverages",
    optionalProducts_CP_text_monthly                    :   "All for a monthly premium of",
    optionalProducts_CP_text_for_every                  :   "<sup>&#36;</sup>1.10 for every <sup>&#36;</sup>100",
    optionalProducts_CP_text_average                    :   "of your Average Daily Balance, plus applicable taxes",
    optionalProducts_CP_text_average_info               :   "(at age 80, becomes $0.59 for every $100 of your Average Daily Balance, plus applicable taxes)",
    optionalProducts_CP_text_bill                       :   "Billed to your Canadian Tire Bank issued credit card",
    optionalProducts_CP_text_available                  :   "Available for cardmembers aged 18 to under 76.",
    optionalProducts_CP_text_interest                   :   "Canadian Tire Bank has a financial interest in the sale of this insurance.",
    
    
    //---Optional product CP details  ends ------
    
    //--PA Offer  details starts  
      OP_yes_i_am_interested_for_op                     :   "Yes, I am interested in the following optional products:",
      OP_PA_title                                       :   "Canadian Tire Protection Advantage<sup>&reg;</sup>",
      OP_PA_Rule_li_1_not_available                     :   "Not available for residents of Saskatchewan",
      OP_PA_Rule_li_2_available                         :   "Available for cardmembers aged 18 to under 76",
      OP_PA_Rule_li_3_Enrolment_in                      :   "Enrolment in Credit Protector<sup>&reg;</sup> Insurance and Identity Watch Classic<sup>&reg;</sup> includes the coverage and benefits of both optional products, as listed above.",
      PA_offer_details_title_bold                       :   "Mandatory Disclosures <span>&mdash; Must be read in full prior to completing an enrolment</span>",
      PA_offer_details_title_second                     :   "&#45;&#45;Must be read in full prior to completing an enrolment",
      PA_offer_details_title_small                      :   "&mdash; Must be read in full prior to completing an enrolment",
      PA_offer_details_title_2_bold                     :   "Credit Protector Insurance Disclosure",
      PA_optional_covarage                              :   "Credit Protector is optional insurance coverage",
      PA_Credit_Protector_p_1                           :   "Credit Protector is a creditor’s group insurance product offered for a financial interest by Canadian Tire Bank on its issued credit cards, and underwritten by American Bankers Life Assurance Company of Florida (ABLAC), and American Bankers Insurance Company of Florida. ABLAC, ABIC, their subsidiaries and affiliates carry on business in Canada under the name of Assurant<sup>&reg;</sup>. What this means is that Credit Protector is a type of insurance that may help to pay down your outstanding balance, or make monthly payments, in certain situations, on the Canadian Tire Bank issued credit card, up to a maximum benefit of $20,000. <span style=\"font-weight: bold;\">For residents of Quebec: there are other similar products available on the market, which you may have already. If you are unsure, you are encouraged to look into it.</span>",
      PA_Credit_Protector_p_2                           :   "Credit Protector may cover you for one of the following situations:",
      PA_Credit_Protector_p_3_terminal_illness          :   "Terminal Illness and Life and Dismemberment",
      Pa_Credit_Protector_P_coverages                   :   "These coverages are available to you and your spouse.",
      PA_Creadit_Protector_P_benifits                   :   "If you qualify for these benefits, Credit Protector may pay down your outstanding balance with a one-time, lump sum payment, up to the maximum benefit of $20,000.",
      PA_Credit_Protector_P_Terminal                    :   "Terminal Illness",
      PA_Credit_Protector_LI_1                          :   "May cover you or your spouse if either of you becomes sick causing a life expectancy of less than 12 months from the time of diagnosis.",
      PA_Credit_Protector_LI_2                          :   "You or your spouse <span style=\"border-bottom: 1px solid #58595b;\">will not</span> qualify for benefits for a pre-existing condition, which means experiencing symptoms or treatment during the past six months and diagnosis of a terminal illness within the first six months of enrolment.",
      PA_Credit_Protector_LI_3                          :   "In the event of simultaneous terminal illness of both the Primary Cardmember and the Primary Cardmember’s spouse, only one benefit will be paid.",
      PA_Credit_Protector_Life_n_Di                     :   "Life and Dismemberment",
      PA_UL_LI_2_1                                      :   "May cover you or your spouse in the case of a death, loss of sight in one eye, or the loss of a hand or foot.",
      PA_UL_LI_2_2                                      :	"You or your spouse <span style=\"border-bottom: 1px solid #58595b;\">will not</span> qualify for a Life benefit if the death is due to suicide or self-inflicted injury within six months of enrolment.",
      PA_UL_LI_2_3                                      :   "To be eligible for Life and Dismemberment you or your spouse must be under 80 years old.",
      PA_UL_LI_2_4                                      :   "At age 80, your Life and Dismemberment coverage is replaced by <span style=\"font-weight: bold;\">Accidental Death and Accidental Dismemberment</span>, which means you or your spouse die or suffer a dismemberment directly caused by an accident. If the death of the Primary Cardmember and the Primary Cardmember’s spouse occur simultaneously, only one benefit will be paid.",
      PA_p_Involuntary                                  :   "Involuntary Unemployment and Total Disability",
      PA_P_quality_for_benifits                         :   "If you qualify for these benefits, Credit Protector may make monthly payments equal to 5% of outstanding balance (less the amount of any Special Payment Plans, like Equal Payments) up to $1,000 a month, to the maximum benefit of $20,000.",
      PA_P_To_be_eligible                               :   "To be eligible for both these coverages, you must be working permanently for salary or wages at least 25 hours a week or more for a single employer.",
      PA_P_YOU_QUALIFY_FOR                              :   "You <span style=\"border-bottom: 1px solid #58595b;\">will not</span> qualify for benefits if you lose a temporary or contract job; at the end of normal seasonal employment; or if you are convicted of a crime.",
      PA_P_Involuntary_Unemployment                     :   "Involuntary Unemployment",
      PA_LI_MAY_COVER_YOU                               :   "May cover you if you lose your job for at least 30 days through no fault of your own, such as, layoff or strike, or, if you are self-employed, bankruptcy started by your creditors.",
      PA_P_Total_Disability                             :   "Total Disability",
      PA_P_MAY_COVER_YOU_DISABLED                       :   "May cover you if you become totally disabled and are unable to work fully for at least 30 days, and are treated by a qualified physician.",
      PA_P_Pricing                                      :   "Pricing",
      PA_UL_LI_MONTHLY_PREMIUM                          :   "Monthly premium is <span style=\"font-weight: bold;\">$1.10 for every $100 of your Average Daily Balance</span>, plus applicable taxes, billed monthly to your credit card account.",
      PA_LI_AT_AGE                                      :   "At age 80, the monthly premium becomes $0.59 for every $100 of your Average Daily Balance, plus applicable taxes.",
      PA_LI_DEPENDING_HOW                               :   "The premium will fluctuate depending on how you use your card and is tied to your average daily balance.",
      PA_LI_YOU_DO_NOT                                  :   "You do not pay premium:",
      PA_LI_1_IF_YOU_HAVE_NOT                           :   "&#45; if you have not used your card that month and;",
      PA_LI_1_HAVE_NOT_CARRIED                          :   "&#45; have not carried a balance from the previous month nor had any fees, Special Payment Plan amounts come due or other charges to your account or;",

      PA_LI_1_IF_YOUR_AVERAGE                           :   "&#45; if your Average Daily Balance  for the month is less than $10.",
      PA_LI_PRICE_EXAMPLE                               :   "Price examples:",
      PA_TABLE_TD_AVERAGE_DAILY                         :   "Average Daily Balance",
      PA_TABLE_TD_PREMIUM                               :   "Premium",
      PA_TABLE_TD_150                                   :   "&#36;150",
      PA_TABLE_TD_165                                   :   "&#36;1.65&#42;",
      PA_TABLE_TD_575                                   :   "&#36;575",
      PA_TABLE_TD_633                                   :   "&#36;6.33&#42;",
      PA_TABLE_TD_825                                   :   "&#36;825",
      PA_TABLE_TD_907                                   :   "&#36;9.07&#42;",
      PA_TABLE_TD_975                                   :   "&#36;975",
      PA_TABLE_TD_1073                                  :   "&#36;10.73&#42;",
      PA_TABLE_TD_PLUS_APP_TAX                          :   "<span class=\"opTable_paddingLeft80\">&#42; Plus applicable taxes.</span>",
      PA_HOW_TO_MAKE_A_CLAIM                            :   "How to Make a Claim",
      PA_LI_you_are_always                              :   "You are always eligible to submit a claim.",
      PA_LI_call_the_insurer                            :   "Call the insurers at <span style=\"font-weight: bold;\">1-800-480-1853</span>. This number can also be found on your Certificate of Insurance.",
      PA_P_terms_of_agreement                           :   "Term of Agreement",
      PA_LI_if_you_enrol_today                          :   "If you enrol today, we will create a customer file and share that information with the insurers so your coverage begins immediately.",
      PA_LI_the_insurance_end                           :   "The insurance ends:",
      PA_Li_when_the_canadian_tire                      :   "&#45; when the Canadian Tire Bank issued credit card is cancelled;",
      PA_Li_the_accoount_become                         :   "&#45; the account becomes 90 days past due;",
      PA_Li_one_or_more_off                             :   "&#45; one or more of the Master Policies are cancelled;",
      PA_Li_your_life                                   :   "&#45; your Life, Accidental Death, or Terminal Illness benefit is paid;",
      PA_Li_the_date_the_primary                        :   "&#45; the date the primary cardmember dies;",
      PA_Li_or_when_you_request                         :   "&#45; or when you request cancellation of the insurance, which you can do any time by calling the number on the back of the Certificate of Insurance, or the number on the back of your Canadian Tire Bank issued credit card, <span style=\"font-weight: bold;\">or in the Distribution Guide for residents of Quebec.</span>",
      PA_P_Fulfillment                                  :   "Fulfillment",
      PA_ul_Li_A_welcome_package                        :   "A welcome package, including a Certificate of Insurance, will be sent to you in the mail within the next two weeks. <span style=\"font-weight: bold;\">A Distribution Guide will also be sent for residents of Quebec.</span>",
      PA_P_eligibility_requirment                       :   "Eligibility requirements, limitations and exclusions apply, and vary by benefit. Please read your Certificate of Insurance carefully and keep it in a safe place with your other important documents.",
      PA_P_Cancellation                                 :   "Cancellation",
      PA_Li_you_can_cancel_this_1                       :   "You can cancel this insurance at any time by calling the number on the back of your  card.",
      PA_Li_you_can_cancel_this_2                       :   "If you cancel <span style=\"border-bottom: 1px solid #58595b;\">within</span> the first 45 days, of issuance of the Certificate of Insurance, you will receive a refund for any premium paid.",
      PA_Li_you_can_cancel_this_3                       :   "If you cancel <span style=\"border-bottom: 1px solid #58595b;\">after</span> the first 45 days, you will be refunded any unearned premium, if applicable.",
      
      PA_P_Enrolling_you_agree_this                     :    "By enrolling in Credit Protector Insurance, you agree that:",
      PA_P_Enrolling_you_agree_this_1                   :     "<span class=\"padding_NewInsurence_Chapter\">You are applying for Credit Protector Insurance;</span>",
      PA_P_Enrolling_you_agree_this_2                   :     "<span class=\"padding_NewInsurence_Chapter\">You acknowledge the information you provided is complete and true;</span>",
      PA_P_Enrolling_you_agree_this_3                   :     "<span class=\"padding_NewInsurence_Chapter\">You understand concealment, misrepresentation or false declaration concerning your Canadian Tire Bank  credit card application could cause your coverage to be void;</span>",
      PA_P_Enrolling_you_agree_this_4                   :     "<span class=\"padding_NewInsurence_Chapter\">You have been given the opportunity to read the Credit Protector Insurance Disclosure, and if you are a  resident of Quebec, the Credit Protector Distribution Guide and agree to be bound by its terms; </span>",
      PA_P_Enrolling_you_agree_this_5                   :     "<span class=\"padding_NewInsurence_Chapter\">You have read and understood the disclosures including the limitations and exclusions of Credit Protector Insurance;</span>",
      PA_P_Enrolling_you_agree_this_6                   :     "<span class=\"padding_NewInsurence_Chapter\">You authorize the insurer to obtain, provide and exchange personal information with Canadian Tire Bank  as may be required for the administration and servicing of Credit Protector Insurance;</span>",
      PA_P_Enrolling_you_agree_this_7                   :     "<span class=\"padding_NewInsurence_Chapter\">You acknowledge that Canadian Tire Bank is not the agent of the insurer and no person has the authority  to waive or modify any provisions of the application or Certificate of Insurance;</span>",
      PA_P_Enrolling_you_agree_this_8                   :     "<span class=\"padding_NewInsurence_Chapter\">You authorize Canadian Tire Bank to charge the premiums to your Canadian Tire Bank issued credit card;</span>",
      PA_P_Enrolling_you_agree_this_9                   :     "<span class=\"padding_NewInsurence_Chapter\">You have requested this application and all related documents to be in English. (Vous avez demandé que ce document et tous les documents y afférents soient rédigés et signés en anglais);</span> ",
      PA_P_Enrolling_you_agree_this_10                   :    "<span class=\"padding_NewInsurence_Chapter\">Your verbal or electronic agreement shall be deemed to have been signed and/or delivered, and will constitute a ‘writing’ for the purpose of any law requiring the agreement to be signed. Any verbal or electronic agreement that is entered into or accepted by you, or in your name, or reported to be entered into and accepted by you, will be considered to be binding upon you;</span> ",
      PA_P_Enrolling_you_agree_this_11                   :    "<span class=\"padding_NewInsurence_Chapter\">A true copy of this authorization is as valid as the original; and</span>",
      PA_P_Enrolling_you_agree_this_12                   :    "<span class=\"padding_NewInsurence_Chapter\">Assurant is committed to safeguarding the privacy of its customers’ information in accordance with good  business practices. It may collect, use, and share personal information provided by you to it, and obtained from others with your consent, or as required or permitted by law. Personal information includes your name, contact information, customer file, and product preferences. It may use the information to: serve you as a customer; communicate with you; create statistics about its business to better understand customer needs and preferences.It may process and store your information in another country, which may be subject to access by government authorities under applicable laws of that country. You may obtain a copy of its privacy policy by calling <b>1&#8208;888&#8208;778&#8208;8023</b> or from its website (www.assurantsolutions.ca/privacy).</span><br> ",
      
      PA_P_identity_watch_disclosure                    :   "Identity Watch Classic<span class=\"radio_sup\">&reg;</span> Disclosure",
      PA_P_eligiblity                                   :   "Eligibility",
      PA_P_the_subscription                             :   "The subscription is effective as of the enrolment date indicated on your welcome letter, which is included in the Identity Watch Classic welcome package. You are eligible to receive benefits as of the enrolment date indicated on your welcome letter as long as your subscription remains current. Eligibility for the benefits also requires you to be a current Identity Watch Classic subscriber at the time the applicable event occurs.",
      PA_P_when_you_enrole                              :   "When you enrol in this product you will receive a full list of the available benefits, along with details on how to register your information, and complete Terms and Conditions in your welcome package. It will take approximately 7-10 days to arrive in the mail. Please ensure you review all this information.",
      PA_P_benefits_are_available                       :   "Benefits are available to you, your spouse and any dependent child(ren) up to age 21 who are living at your home or are still in school (&ldquo;eligible family&rdquo;).",
      PA_P_identity_fraud                               :   "Identity Fraud Protection/Online Monitoring Service",
      PA_P_this_service                                 :   "This service, currently called &lsquo;Internet Personal Information Patrol<sup>&reg;</sup>&rsquo; or &lsquo;iPiP<sup>&reg;</sup>&rsquo; is an online data monitoring tool that routinely scours the internet’s public search engines, news groups and blogs and notifies you via email of any activity that matches the information you have registered online with this service. You can simply register the information online at www.identitywatchclassic.ca. Information that can be registered includes credit card and debit card numbers, social insurance numbers, and/or other valuable information. Terms and conditions apply. <span style=\"font-weight: bold;\">Note: There may be inaccuracies in content or delays in identification of reportable incidents and/or delivery of notification with respect to iPiP.</span>",
      PA_P_lost_stolen                                  :   "Lost/Stolen Card Assistance",
      PA_P_this_service_will_assests                    :   "This service will assist you and eligible family members from the moment you or your family report a lost/stolen credit or registered debit card. Identity Watch Classic will begin to contact the applicable card issuer(s), ask them to cancel your card(s) and request that replacement card(s) be sent to you as soon as possible. <span style=\"font-weight: bold;\">Note&#58; Some card issuers have rules and&#47;or regulations that may prevent us from cancelling cards or requesting a replacement card(s). For full details about the services, please refer to the Subscription Terms and Conditions.</span>",
      PA_P_Online_data_backup                           :   "Online Data Backup",
      PA_P_Data_bak_up_desc                             :   "This service entitles you to have access to 50GB of online data backup per month. Online Data Backup is provided by a third-party service provider and is subject to additional terms and conditions. Online Data Backup can only be used on a Windows Platform.  On termination of your subscription for any reason, you have seven (7) days from the effective cancellation date to remove your stored data or you will no longer be able to retrieve it. Deletion of your stored data is subject to Sigma's Privacy Policy which can be found at <span class=\"link_style\">https://www.identitywatchclassic.ca/privacypolicy</span>.",
      PA_CC_theft_reward                                :   "Credit Card Theft Reward Service",
      PA_CC_theft_desc                                  :   "We will pay a three thousand dollar ($3,000) reward for information leading to the arrest and conviction of anyone fraudulently using your credit or registered debit card(s). You, your family and law enforcement personnel are not eligible to receive a reward. Those eligible to receive the reward must contact Sigma to complete and return a Reward Claim Form.",
      PA_P_rebound                                      :   "Rebound<sup>&reg;</sup> Asset Return Service",
      PA_P_this_service_allows_you                      :   "This service allows you to adhere stickers with a unique ID# to your valuables. If an item bearing a sticker is lost, its finder is directed to contact Sigma, who will arrange for the item to be picked up and returned to you and for payment of a fifty dollar ($50.00) reward to the finder. Terms and conditions apply.",
      PA_P_computer_tune_up                             :   "Computer Maintenance Reimbursement:",
      PA_P_you_are_eligible_to                          :   "You are entitled to redeem up to a maximum of seventy-five ($75.00) dollars inclusive of taxes, per subscription year. Computer includes personal desktop or laptop.You may only submit one computer maintenance reimbursement form once every 365 days.\n You must be an active subscriber of Identity Watch Classic on the date indicated on the receipt or invoice right through to when the request for reimbursement is received by Sigma. You must submit the reimbursement request form along with your original receipt or invoice showing the name of the computer maintenance provider, within thirty (30) days of the computer maintenance being performed or the anti-virus/anti-malware/firewall software purchase.  Processing time will take between 4 to 6 weeks from the date this form is received by Sigma.The reimbursement request form can only be used by the active subscriber and is not transferable. In no event shall Sigma's liability exceed the reimbursement amounts stated above.",
      PA_P_price                                        :   "Price",
      PA_P_subscription_fee                             :   "Subscription fee of $4.99, plus applicable taxes, will commence after the first transaction is made on the Canadian Tire Bank issued credit card. Thereafter, the subscription fee will be charged in advance monthly to the Canadian Tire Bank issued credit card. To ensure uninterrupted service, your subscription will automatically renew until you cancel. Your credit card will be charged at the then current rate on the renewal date. See the Legal Information handout for all terms, conditions, limitations and exclusions. Terms and conditions apply.",
      PA_P_cancellation_by_customer                     :   "<span style=\"font-weight: bold;\">Cancellation by the Customer:</span> The Benefits are month to month. Enrolment in Identity Watch Classic is voluntary and can be cancelled at any time by telephone (1-800-263-1020) or by fax (905-735-2644) and the subscription fees, which commence after the first transaction is made on the Canadian Tire Bank issued credit card, will be stopped. If you cancel within 30 days of your enrolment date, Canadian Tire Bank will refund in full any subscription fees you have paid after the first transaction is made on your Canadian Tire Bank issued credit card. If you cancel after the initial 30 days, cancellation will be effective as of the last day of the current billing cycle or 30 days after the cancellation notification is received, whichever is earlier. If you cancel, you are responsible for any fees or charges incurred as a result of the services offered through an internet provider or any third party service.",
      PA_P_cancellation_by_Aimia                        :   "<span style=\"font-weight: bold;\">Cancellation by Sigma:</span> The subscription may be cancelled by Sigma if the account is not in good standing or if the subscription fees, which commence after the first transaction is made on the Canadian Tire Bank issued credit card, are not paid, or if you or your eligible family are found to be engaging in fraud or otherwise misusing the Benefits. Sigma also reserves the right to terminate subscriptions for any reason on 30 days prior written notice. Upon cancellation of your subscription, for any reason, the information you or your family have provided to receive the benefits will no longer be accessible by you or your family.",
      PA_P_other                                        :   "Other",
      PA_P_Iw_is_an_optiona_product                     :   "Identity Watch Classic is an optional product and is offered separately from the Canadian Tire Bank issued Mastercard and it is not required to obtain the Canadian Tire Bank issued Mastercard. If you have applied for a Canadian Tire Bank issued Mastercard and are approved, you will be charged the Identity Watch Classic subscription fee in the amount and time period specified. (Note: Please see above.)",
      PA_P_the_iw_program                               :   "The Identity Watch Classic program is sponsored by Canadian Tire Bank and provided by Sigma Loyalty Group Inc.",
      PA_P_please_read_iw                               :   "Please read the Identity Watch Classic Subscription Terms and Conditions and benefits Guide, which are included in the welcome package for further details.",
     //-- PA Offer  details Ends 
      
     //--CP offer details starts
      OP_CP_title                                       :   "Credit Protector<sup>&reg;</sup> Insurance",
      OP_CP_Li_1_not_sk                                 :   "Not available for residents of Saskatchewan",
      OP_CP_Li_1_availbale                              :   "Available for cardmembers aged 18 to under 76",
      OP_CP_P_bold                                      :   "Mandatory Disclosure <span>&mdash; Must be read in full prior to completing an enrolment</span>",
      OP_CP_P_small                                     :   "&#45;&#45; Must be read in full prior to completing an enrolment",
      OP_CP_disclosure                                  :   "Credit Protector Insurance Disclosure",
      OP_CP_coverage                                    :   "Credit Protector is optional insurance coverage",
      OP_CP_creator_group                               :   "Credit Protector is a creditor’s group insurance product offered for a financial interest by Canadian Tire Bank on its issued credit cards, and underwritten by American Bankers Life Assurance Company of Florida (ABLAC), and American Bankers Insurance Company of Florida . ABLAC, ABIC, their subsidiaries and affiliates carry on business in Canada under the name of Assurant<sup>&reg;</sup>. What this means is that Credit Protector is a type of insurance that may help to pay down your outstanding balance, or make monthly payments, in certain situations, on the Canadian Tire Bank issued credit card, up to a maximum benefit of $20,000. <span style=\"font-weight: bold;\">For residents of Quebec: there are other similar products available on the market, which you may have already. If you are unsure, you are encouraged to look into it.</span>",
      OP_CP_P_may_cover                                 :   "Credit Protector may cover you for one of the following situations:",
      OP_CP_P_these_coverage                            :   "These coverages are available to you and your spouse.",
      OP_CP_P_if_you_qualify                            :   "If you qualify for these benefits, Credit Protector may pay down your outstanding balance with a one-time, lump sum payment, up to the maximum benefit of $20,000.",
      OP_CP_Li_1_may_cover_your                         :   "May cover you or your spouse if either of you becomes sick causing a life expectancy of less than 12 months from the time of diagnosis.",
      OP_CP_li_2_you_or_your_spouse                     :   "You or your spouse <span style=\"border-bottom: 1px solid #58595b;\">will not</span> qualify for benefits for a pre-existing condition, which means experiencing symptoms or treatment during the past six months and diagnosis of a terminal illness within the first six months of enrolment.",
      OP_CP_Li_3_in_the_event                           :   "In the event of simultaneous terminal illness of both the Primary Cardmember and the Primary Cardmember’s spouse, only one benefit will be paid.",
      OP_CP_P_life_and_dismemberment                    :   "Life and Dismemberment",
      OP_CP_Li_2_1_may_cover                            :   "May cover you or your spouse in the case of a death, loss of sight in one eye, or the loss of a hand or foot.",
      OP_CP_Li_2_2_you_or_your                          :   "You or your spouse <span style=\"border-bottom: 1px solid #58595b;\">will not</span> qualify for a Life benefit if the death is due to suicide or self-inflicted injury within six months of enrolment.",
      OP_CP_Li_2_3_to_be                                :   "To be eligible for Life and Dismemberment you or your spouse must be under 80 years old.",
      OP_CP_Li_2_4_At_age                               :   "At age 80, your Life and Dismemberment coverage is replaced by <span style=\"font-weight: bold;\">Accidental Death and Accidental Dismemberment</span>, which means you or your spouse die or suffer a dismemberment directly caused by an accident. If the death of the Primary Cardmember and the Primary Cardmember’s spouse occur simultaneously, only one benefit will be paid.",
      OP_CP_P_involuntary                               :   "Involuntary Unemployment and Total Disability",
      OP_CP_P_INVO_if_you_qualify                       :   "If you qualify for these benefits, Credit Protector may make monthly payments equal to 5% of your outstanding balance (less the amount of any Special Payment Plans, like Equal Payments) up to $1,000 a month, to the maximum benefit of $20,000.",
      OP_CP_P_both_the_coverage                         :   "To be eligible for both these coverages, you must be working permanently for salary or wages at least 25 hours a week or more for a single employer.",
      OP_CP_P_qualify_for_benifits                      :   "You <span style=\"border-bottom: 1px solid #58595b;\">will not</span> qualify for benefits if you lose a temporary or contract job; at the end of normal seasonal employment; or if you are convicted of a crime.",
      OP_CP_P_may_cover_you_if                          :   "May cover you if you lose your job for at least 30 days through no fault of your own, such as, layoff or strike, or, if you are self-employed, bankruptcy started by your creditors.",
      OP_CP_Li_total_diasability                        :   "May cover you if you become totally disabled and are unable to work fully for at least 30 days, and are treated by a qualified physician.",
      OP_CP_Li_3_1_monthly                              :   "Monthly premium is <span style=\"font-weight: bold;\">$1.10 for every $100 of your Average Daily Balance</span>, plus applicable taxes, billed monthly to your credit card account.",
      OP_CP_Li_3_2_at_age_80                            :   "At age 80, the monthly premium becomes $0.59 for every $100 of your Average Daily Balance, plus applicable taxes.",
      OP_CP_Li_3_3_depending                            :   "The premium will fluctuate depending on how you use your card and is tied to your average daily balance.",
      OP_CP_Li_4_1_if_you_have                          :   "&#45; If you have not used your card that month and;",
      OP_CP_Li_4_2_have_not_carried                     :   "&#45; have not carried a balance from the previous month nor had any fees, Special Payment Plan amounts come due or other charges to your account or;",
      OP_CP_Li_4_3_your_average                         :   "&#45; if your Average Daily Balance  for the month is less than $10.",
      OP_CP_call_the_insurance                          :   "Call the insurers at <span style=\"font-weight: bold;\">1-800-480-1853</span>. This number can also be found on your Certificate of Insurance.",
      OP_CP_Li_5_if_you_enroll_today                    :   "If you enrol today, we will create a customer file and share that information with the insurers so your coverage begins immediately.",
      OP_CP_Li_6_1_when                                 :   "&#45; when the Canadian Tire Bank issued credit card is cancelled;",
      OP_CP_Li_6_2_the_account                          :   "&#45; the account becomes 90 days past due;",
      OP_CP_Li_6_3_one_or_more                          :   "&#45; one or more of the Master Policies are cancelled;",
      OP_CP_Li_6_4_your_life                            :   "&#45; your Life, Accidental Death, or Terminal Illness benefit is paid;",
      OP_CP_Li_6_5_the_date                             :   "&#45; the date the primary cardmember dies;",
      OP_CP_Li_6_6_or_when_you                          :   "&#45; or when you request cancellation of the insurance, which you can do any time by calling the number on the back of the Certificate of Insurance, or the number on the back of your Canadian Tire Bank issued credit card, <span style=\"font-weight: bold;\">or in the Distribution Guide for residents of Quebec.</span>",
      OP_CP_Li_welcome_package                          :   "A welcome package, including a Certificate of Insurance, will be sent to you in the mail within the next two weeks. <span style=\"font-weight: bold;\">A Distribution Guide will also be sent for residents of Quebec.</span>",
      OP_CP_Li_eligibility_requirement                  :   "Eligibility requirements, limitations and exclusions apply, and vary by benefit. Please read your Certificate of Insurance carefully and keep it in a safe place with your other important documents.",
      OP_CP_Li_7_1_you_can_cancel                       :   "You can cancel this insurance at any time by calling the number on the back of your  card.",
      OP_CP_Li_7_2                                      :   "If you cancel <span style=\"border-bottom: 1px solid #58595b;\">within</span> the first 45 days, of issuance of the Certificate of Insurance, you will receive a refund for any premium paid.",
      OP_CP_Li_7_3                                      :   "If you cancel <span style=\"border-bottom: 1px solid #58595b;\">after</span> the first 45 days, you will be refunded any unearned premium, if applicable.",
    //--CP offer details ends
      
      //-- IW offer details starts 
      OP_IW_title                                       :   "Identity Watch Classic<sup>&reg;</sup>",
      OP_IW_bold                                        :   "Mandatory Disclosure <span>&mdash; Must be read in full prior to completing an enrolment</span>",
      OP_Iw_small                                       :   "&mdash; Must be read in full prior to completing an enrolment",
      OP_IW_disclosure                                  :   "Identity Watch Classic<span class=\"radio_sup\">&reg;</span> Disclosure",
      OP_IW_eligibility                                 :   "Eligibility",
      OP_IW_P_subscription                              :   "The subscription is effective as of the enrolment date indicated on your welcome letter, which is included in the Identity Watch Classic welcome package. You are eligible to receive benefits as of the enrolment date indicated on your welcome letter as long as your subscription remains current. Eligibility for the benefits also requires you to be a current Identity Watch Classic subscriber at the time the applicable event occurs.",
      OP_IW_P_when_you_enrole                           :   "When you enrol in this product you will receive a full list of the available benefits, along with details on how to register your information, and complete Terms and Conditions in your welcome package. It will take approximately 7-10 days to arrive in the mail. Please ensure you review all this information.",
      OP_IW_P_benifits_are                              :   "Benefits are available to you, your spouse and any dependent child(ren) up to age 21 who are living at your home or are still in school (&ldquo;eligible family&rdquo;).",
      OP_Iw_P_identity_fraud                            :   "Identity Fraud Protection/Online Monitoring Service",
      OP_IW_P_these_service_currently                   :   "This service, currently called &lsquo;Internet Personal Information Patrol<sup>&reg;</sup>&rsquo; or &lsquo;iPiP<sup>&reg;</sup>&rsquo; is an online data monitoring tool that routinely scours the internet’s public search engines, news groups and blogs and notifies you via email of any activity that matches the information you have registered online with this service. You can simply register the information online at www.identitywatchclassic.ca. Information that can be registered includes credit card and debit card numbers, social insurance numbers, and/or other valuable information. Terms and conditions apply. <span style=\"font-weight: bold;\">Note: There may be inaccuracies in content or delays in identification of reportable incidents and/or delivery of notification with respect to iPiP.</span>",
      OP_IW_P_service_assist                            :   "This service will assist you and eligible family members from the moment you or your family report a lost/stolen credit or registered debit card. Identity Watch Classic will begin to contact the applicable card issuer(s), ask them to cancel your card(s) and request that replacement card(s) be sent to you as soon as possible. <span style=\"font-weight: bold;\">Note: Some card issuers have rules and/or regulations that may prevent us from cancelling cards or requesting a replacement card(s). For full details about the services, please refer to the Subscription Terms and Conditions.</span>",
      OP_IW_P_service_will_allow                        :   "This service allows you to adhere stickers with a unique ID# to your valuables. If an item bearing a sticker is lost, its finder is directed to contact Sigma, who will arrange for the item to be picked up and returned to you and for payment of a fifty dollar ($50.00) reward to the finder. Terms and conditions apply.",
      OP_IW_P_you_are_eligible_to                       :   "You are eligible to be reimbursed up to seventy-five dollars ($75.00), inclusive of taxes, per subscription year towards the cost of tuning up your computer. The request for reimbursement as well as the original receipt must be submitted within 30 days of the computer tune-up being performed.",
      OP_IW_P_subscription_fee                          :   "Subscription fee of $4.99, plus applicable taxes, will commence after the first transaction is made on the Canadian Tire Bank issued credit card. Thereafter, the subscription fee will be charged in advance monthly to the Canadian Tire Bank issued credit card. To ensure uninterrupted service, your subscription will automatically renew until you cancel. Your credit card will be charged at the then current rate on the renewal date. See the Legal Information handout for all terms, conditions, limitations and exclusions. Terms and conditions apply.",
      OP_IW_P_cancel_by_customer                        :   "<span style=\"font-weight: bold;\">Cancellation by the Customer:</span> The Benefits are month to month. Enrolment in Identity Watch Classic is voluntary and can be cancelled at any time by telephone (1-800-263-1020) or by fax (905-735-2644) and the subscription fees, which commence after the first transaction is made on the Canadian Tire Bank issued credit card, will be stopped. If you cancel within 30 days of your enrolment date, Canadian Tire Bank will refund in full any subscription fees you have paid after the first transaction is made on your Canadian Tire Bank issued credit card. If you cancel after the initial 30 days, cancellation will be effective as of the last day of the current billing cycle or 30 days after the cancellation notification is received, whichever is earlier. If you cancel, you are responsible for any fees or charges incurred as a result of the services offered through an internet provider or any third party service.",
      OP_IW_P_cancel_by_aimia                           :   "<span style=\"font-weight: bold;\">Cancellation by Sigma:</span> The subscription may be cancelled by Sigma if the account is not in good standing or if the subscription fees, which commence after the first transaction is made on the Canadian Tire Bank issued credit card, are not paid, or if you or your eligible family are found to be engaging in fraud or otherwise misusing the Benefits. Sigma also reserves the right to terminate subscriptions for any reason on 30 days prior written notice. Upon cancellation of your subscription, for any reason, the information you or your family have provided to receive the benefits will no longer be accessible by you or your family.",
      OP_Iw_P_IW_is_optional                            :   "Identity Watch Classic is an optional product and is offered separately from the Canadian Tire Bank issued Mastercard and it is not required to obtain the Canadian Tire Bank issued Mastercard. If you have applied for a Canadian Tire Bank issued Mastercard and are approved, you will be charged the Identity Watch Classic subscription fee in the amount and time period specified. (Note: Please see above.)",
      OP_IW_P_classic_program                           :   "The Identity Watch Classic program is sponsored by Canadian Tire Bank and provided by Sigma Loyalty Group Inc. ",
      OP_IW_P_please_read                               :   "Please read the Identity Watch Classic Subscription Terms and Conditions and benefits Guide, which are included in the welcome package for further details.",
      OP_IW_P_CC                                        :   "We will pay a three thousand dollar ($3,000) reward for information leading to the arrest and conviction of anyone fraudulently using your credit or registered debit card(s). You, your family and law enforcement personnel are not eligible to receive a reward. Those eligible to receive the reward must contact Sigma to complete and return a Reward Claim Form.",
      //-- IW offer details ends 
      OP_Not_at_this_time                               :   "Not at this time",
      
      //Footer part of  optional products starts 
      OP_FT_there_are_op_offfers                        :   "&dagger;&dagger; These are optional products offered to all customers approved for a Canadian Tire Bank issued Mastercard. The information on this application is used to determine eligibility for a Canadian Tire Bank issued Mastercard and not for the optional products." ,
      OP_FT_business_product		                    :   "Canadian Tire Bank has a financial interest in the sale of these products.",
      OP_FT_business_name                               :   "Canadian Tire Financial Services is a business name of Canadian Tire Bank.",
      OP_FT_unless                                      :   "&reg;/&trade; Unless otherwise noted, all trademarks are owned by Canadian Tire Corporation, Limited and are used under licence.",
      OP_FT_CP                                          :   "&reg;/&trade; Credit Protector is a registered trademark of Canadian Tire Bank.",
      OP_FT_IW_programs                                 :   "The Identity Watch Classic Program is sponsored by Canadian Tire Bank and provided by Sigma Loyalty Group Inc..",
      OP_FT_internet                                    :   "&reg;/&trade; Internet Personal Information Patrol&reg;, iPiP&reg; and Rebound&reg; are registered trademarks of Sigma Loyalty Group Inc.",
      OP_FT_assurant                                    :   "&reg; Assurant is a registered trademark of Assurant, Inc.",
      OP_FT_mastercard                                  :   "&reg;/&trade; Mastercard is a registered trademark, and the circles design is a trademark of Mastercard International Incorporated.",
      //Foooter part of optional products ends 
    //US4131
	// Old line
	/*
	optionalProducts_SellingLanguageText                :   "<p><strong>Credit Protector<sup>&reg;**</sup>/Credit Protector - <em>Senior<sup>&reg;</sup>***</em></strong><em><br/>(not available for residents of Saskatchewan)</em></p>" +
        "<p>This credit card balance insurance can help pay your outstanding credit card balance on your Canadian Tire branded credit card when you and your family need it most. </p>" +
        "<ul style=\"list-style-type: none;\">" +
        "<li><strong>Credit Protector (cardmembers aged 18-65 years)</strong> can: </li>" +
        "<li> - pay a monthly benefit of 3% of the outstanding balance on a Canadian Tire branded credit card (not including Special Payment Plans) subject to a monthly maximum of $1,000 and a maximum benefit payment of $20,000 should you lose your job through no fault of your own or become totally disabled*; <br/><br/></li>" +
        "<li> - pay the outstanding balance on your Canadian Tire branded credit card if you or your spouse pass away or are diagnosed with a terminal illness*, to a maximum of $20,000.</li></ul>" +
        "<ul style=\"list-style-type: none;\">" +
        "<li><strong>Credit Protector - <em>Senior</em> (cardmembers aged 66-75 years)</strong> can:</li>" +
        "<li> - pay the outstanding balance on your Canadian Tire branded credit card if you or your spouse pass away or are diagnosed with a terminal illness*, to a maximum of $20,000.</li></ul>" +
        "<p>Credit Protector/Credit Protector - <em>Senior</em> costs $1.10* per $100 of the current month's outstanding balance, less any amount of insurance" +
        " premium charged that month and any Special Payment Plans, plus applicable taxes. No premium will be charged in any month where the outstanding balance is" +
        " less than $10 at the time the statement prints. For example, if your balance is $200 at the time your statement prints, you would pay just $2.20* plus" +
        " applicable taxes.</p>" +
        "<p>Enrolment in Credit Protector/Credit Protector - <em>Senior</em> is voluntary and can be cancelled at any time. If you enrol in Credit Protector/Credit" +
        " Protector - <em>Senior, </em>your coverage is effective upon enrolment. You will receive a welcome package to confirm your enrolment. It contains a" +
        " Certificate of Insurance (Quebec residents also receive a copy of the Distribution Guide) and the complete details of the coverage such as benefits," +
        " limitations, exclusions and information on how to cancel or make a claim.</p>" +
        "<p>There exists other insurance products on the market that may include coverage similar to those offered by Credit Protector/Credit Protector-    <em>Senior. </em>You may want to verify whether or not you already have insurance that provides similar coverage.</p>" +
        "<p>Canadian Tire Bank receives compensation when you purchase Credit Protector/Credit Protector - <em>Senior</em>.</p>" +
        "<div style=\"font-size: 10pt\"><p>* Plus applicable taxes, payable monthly. See the Legal Information handout and your Certificate of Insurance for all exclusions, restrictions, limitations, terms and conditions.</p>" +
        "<p> ** If you are less then age 66, you will be enrolled in Credit Protector. At age 66, the Life and Dismemberment coverage becomes Accidental Death and Dismemberment coverage.</p>" +
        "<p>***If you are between the ages of 66-75 you will be enrolled in Credit Protector - <em>Senior. </em>Please note:<em> </em>Involuntary Unemployment and Total Disability coverage is not included in    <em> Credit Protector &#8211; Senior</em>. At age 76, the Life and Dismemberment coverage becomes Accidental Death and Dismemberment coverage.</p>" +
        "<p>Credit Protector is underwritten by American Bankers Life Assurance Company of Florida and American Bankers Insurance Company of Florida. Credit Protector-    <em>Senior</em> is underwritten by American Bankers Life Assurance Company of Florida. American Bankers Life Assurance Company of Florida and American Bankers Insurance Company of Florida and their subsidiaries and affiliates carry on business in Canada under the name Assurant<sup>&reg;</sup>.</p></div>" +
        "<hr/><br/><p><strong>Identity Watch Classic<sup>TM</sup><em></em></strong></p>" +
        "<p>Help safeguard you and your family's private and valuable information." +
        "<br/> - Online monitoring of your registered personal information****" +
        "<br/> - Card Protection, Online Data Backup and Credit Theft Reward Service of up to $3,000****" +
        "<br/> - A Computer Tune-Up Reimbursement of up to $75, inclusive of taxes, per subscription year****" +
        "<br/> - Rebound<sup>&reg;</sup> Asset Return Service**** which may help you recover lost or stolen items" +
        "<br/> - Costs $4.99**** payable in advance monthly after the first transaction is made on your Canadian Tire branded credit card.</p>" +
        "<p>If you enrol in Identity Watch Classic, your subscription will be effective as of the enrolment date indicated on your Welcome Letter, which is included in the welcome package.</p>" +
        "<div style=\"font-size: 10pt\"><p>**** Plus applicable taxes. Subscription fees will commence after the first transaction is made on your Canadian Tire branded credit card. Thereafter, " +
        "Subscription Fees will be charged in advance monthly to your Canadian Tire branded credit card. See the Legal Information handout for all terms, " +
        "conditions, limitations and exclusions. Terms and conditions apply.</p>" +
        "<p>The Identity Watch Classic Program is sponsored by Canadian Tire Bank and provided by Aimia Proprietary Loyalty Canada Inc.</p></div>", 
*/
    // UAT 39 - CP Revitalization, Missed Requirement
    optionalProducts_CPInsuranceText				:	"<p><strong>Credit Protector<sup>&reg;</sup> Insurance</strong></p>" +
        "<p>This credit card balance insurance on your Canadian Tire Bank issued credit card can help pay your outstanding credit card balance or make your monthly payments, up to the policy maximum of $20,000, when you and your family need it most.</p>" +
        "<ul style=\"list-style-type: none;\">" +
        "<li><strong>Credit Protector (available for card members age 18 to under 76) can:</strong></li>" +
        "<li> - pay a monthly benefit of 5% of the outstanding balance (not including Special Payment Plans) as of the statement date coinciding with or immediately before the date of loss on a Canadian Tire Bank issued credit card subject to a monthly maximum of $1,000 and a maximum benefit payment of $20,000 should you lose your job through no fault of your own or become totally disabled*; <br/><br/></li>" +
        "<li> -	pay the outstanding balance on your Canadian Tire Bank issued credit card if you or your spouse pass away, suffer a dismemberment, or are diagnosed with a terminal illness*, to a maximum of $20,000.</li></ul>" +        
        "<p>Credit Protector Insurance costs $1.10 per $100* of your average daily balance (less the outstanding amount of any Special Payment Plan) in any month with an average daily balance of $10 or more. For example, if your average daily balance is $350, you would pay just $3.85* plus applicable taxes.  At age 80, the premium rate reduces to $0.59 per $100* of the average daily balance, less and the outstanding amount of any Special Payment Plan. </p>" +
        "<p>Enrolment in Credit Protector Insurance is voluntary and can be cancelled at any time.  If you cancel within the first 45 days of issuance of the Certificate of Insurance, you will receive a full refund of premiums paid.  If you enrol in Credit Protector Insurance, your coverage is effective upon enrollment.  You will receive a welcome package to confirm your enrolment.  It contains a Certificate of Insurance (Quebec residents also receive a copy of the Distribution Guide) and the complete details of the coverage such as definitions, benefits, limitations, restrictions and exclusions and information on how to cancel or make a claim.</p>" +
        "<p>There exists other insurance products on the market that may include coverage similar to those offered by Credit Protector Insurance.  You may want to verify whether or not you already have insurance that provides similar coverage.</p>" +
        "<p>Canadian Tire Bank has a financial interest in the sale of this insurance.</p>" +
        "<div style=\"font-size: 10pt\"><p>* Plus applicable taxes, payable monthly.  See the Legal Information handout and your Certificate of Insurance for all terms, conditions, restrictions, exclusions and limitations. At age 80, the Life and Dismemberment coverage changes to Accidental Death and Accidental Dismemberment coverage.</p>" +
        "<p>Credit Protector Insurance is group creditor insurance underwritten by American Bankers Life Assurance Company of Florida (ABLAC) and American Bankers Insurance Company of Florida (ABIC). ABLAC , ABIC, their subsidiaries and affiliates carry on business in Canada under the name Assurant Solutions<sup>&reg;</sup>.</p>",
        /*"<p><sup>&reg;</sup> Assurant Solutions is a registered trademark of Assurant, Inc.</p>" +
        "<p><sup>&reg;</sup> Credit Protector is a registered trademark of Canadian Tire Bank.</p>"+
        "<p><sup>&reg;</sup>/<sup>&trade;</sup>  are owned by Canadian Tire Corporation, Limited.</p></div><hr/><br/>", */
        
    // UAT 39 - CP Revitalization, Missed Requirement
    optionalProducts_SellingLanguageText                :   "<p><strong>Identity Watch Classic<sup>&reg;</sup><em></em></strong></p>" +
        "<p>Help safeguard you and your family's private and valuable information." +
        "<br/> - Online monitoring of your registered personal information**" +
        "<br/> - Card Protection, Online Data Backup and Credit Theft Reward Service of up to $3,000**" +
        "<br/> - A Computer Tune-Up Reimbursement of up to $75, inclusive of taxes, per subscription year**" +
        "<br/> - Rebound<sup>&reg;</sup> Asset Return Service** which may help you recover lost or stolen items" +
        "<br/> - Costs $4.99** payable in advance monthly after the first transaction is made on your Canadian Tire branded credit card.</p>" +
        "<p>Enrolment in Identity Watch Classic is voluntary and can be cancelled at any time. If you cancel within the first 30 days of your enrolment date, Canadian Tire Bank will refund your paid subscription fees, after the first transaction is made on your card. If you cancel after the initial 30 days, your cancellation will be effective as of the last day of your billing cycle, or 30 days after the cancellation is received, whichever is earlier. If you cancel you are responsible for any fees or changes incurred as a result of the services offered through an internet provider or their party service provider.</p>" +
        "<div style=\"font-size: 10pt\"><p><sup>**</sup> Plus applicable taxes. Subscription fees will commence after the first transaction is made on your Canadian Tire Bank issued credit card. Thereafter, Subscription Fees will be charged in advance monthly to your Canadian Tire Bank issued credit card. See the Legal Information handout for all terms, conditions, limitations and exclusions. Terms and conditions apply.</p></div>" +        
        "<p>If you enrol in Identity Watch Classic, your subscription will be effective as of the enrolment date indicated on your Welcome Letter, which is included in the welcome package.</p>" ,
        /* "<p>The Identity Watch Classic Program is sponsored by Canadian Tire Bank and provided by Aimia Proprietary Loyalty Canada Inc.</p></div>", */
    end                                                 : ""
};

