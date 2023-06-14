ensureNamespaceExists();

WICI.dictionary_en =  {
	version												:	"39",
	yes 												: 	"Yes",
	no 													: 	"No",
	yesEn 												: 	"Yes",
	noEn 												: 	"No",
    yesFr 												:	"Oui",
	noFr                                 				:	"Non",
	cancel  											:  	"Cancel",
	printerErrorShowDialogFlag						    :	"Y",
	addressLine2Flag	                                :   "Y",
	newStylePrintFlag	                                :   "N",
	testSubmitButtonEnableFlag	                        :   "N",
	storeRecallPrintStores								:	"{\"stores\":[]}",
	
	English_Language                                    :   "ENGLISH",
	French_Language										:   "FRANÇAIS",

	accents												:	'ÀÁÂÃÄÅĄĀāàáâãäåąßÒÓÔÕÕÖØŐòóôőõöøĎďDŽdžÈÉÊËĘèéêëęðÇçČčĆćÐÌÍÎÏĪìíîïīÙÚÛÜŰùűúûüĽĹŁľĺłÑŇŃňñńŔŕŠŚŞšśşŤťŸÝÿýŽŻŹžżźđĢĞģğ',
	accents_out											:	"AAAAAAAAaaaaaaaasOOOOOOOOoooooooDdDZdzEEEEEeeeeeeCcCcCcDIIIIIiiiiiUUUUUuuuuuLLLlllNNNnnnRrSSSsssTtYYyyZZZzzzdGGgg",
	
	app_loading 										:	"Loading...",
	backButtonPrompt_message 							: 	"The information collected on this application will be permanently deleted and cannot be retained. Are you sure you want to continue?",
	backButtonPrompt_title 								: 	"Exit Application",

	connectionError_unableToConnect 					: 	"Unable to connect to backend server. Please try again in a few minutes.",
	connectionError_networkDown 						: 	"Your connection has been lost. To re-connect, check the \“Alternate Process for re-connection to Wifi\” included in the Triangle Instant Credit Guide.",

	confirmDialog_defaultTitle 							: 	"Confirm",
	confirmDialog_yes 									: 	"Yes",
	confirmDialog_no 									: 	"No",

	settings											: 	"Settings",
	settings_logOutButton								: 	"Logout",
	settings_chooseProductButton						: 	"Abandon Application",
	settings_chooseProductButton						: 	"Abandon Application",
	settings_printerSetupButton							: 	"Printer Setup",
	settings_testPrintButton							:	"Test Print",
	settings_retrieveButton 							: 	"Retrieve Application",
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

	messageDialog_ok 									: 	"OK",
	pageHeader_next 									: 	"Next",
	pageHeader_previous 								: 	"Back",
	messageDialog_Close									:	"Close",

	breadCrumbItem_ProductSelection						:	"Product Selection",
	breadCrumbItem_ApplicantInfo						:	"Applicant Info",
	// US4637
	breadCrumbItem_EmailInfo							:	"Contact Information",	
	breadCrumbItem_FinancialAndEmploymentInfo			:   "Financial and Employment Info",
	breadCrumbItem_SupplementaryCard					:   "Supp Card",
	breadCrumbItem_OptionalProducts						:   "Optional Product",
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
	// WICI-83
	startTraining_Button_label                         :   "START TRAINING",
	finishTraining_Button_label                         :   "FINISH TRAINING",

	// WICI - training module 
	trainingScreen_Location_Number 						: 	"Store or Location No.",
	trainingScreen_Location_First_Name		 			: 	"Employee First Name",
	trainingScreen_Location_Last_Name		 			: 	"Employee Last Name",
	traningScreen_attest_button_label                   :   "ATTEST",
    // WICI training module 
	loginScreen_AttestionFailedMessage                  :   "You are unable to proceed without completed training. <br>Please ensure NAME and STORE NUMBER must match exact values entered during training attestation. ",
	loginScreen_AttestionFailedMessage_DialogTitle		:	"Training Error",
	attestationScreen_ConfirmDialogAttestationDone		:   "Congratulations! You have completed the training.",
	attestationScreen_ConfirmDialogTitle				:	"Confirmation",

	// WICI - training module 	
	// VZE-442
	loginScreen_Device_serial_number_error_title        :	"Error",
	loginScreen_Device_serial_number_error_message      :	"<p><b>Device Serial Number Can Not Be Retrieved</b></p>",
	loginScreen_Device_serial_number_message      		:	"To fix this issue, check the &quot;Alternative Process to re-apply &quot;WICI Custom Settings-Profile&quot; included in the Triangle Instant Credit Guide.",
	// VZE-442
	loginScreen_EmployeeNumberID_Label                  :    'Employee Number',

	loginScreen_Dialog_ErrorTitle						:	"Login Error",
	loginScreen_FailureMessage							:	"Login Failed. Please Try Again.",
	dictionary_loading_error 							:  	"Application content cannot be loaded. Please wait 15 minutes within acceptable WIFI range before starting the application and trying again. If the problem persists, please call your Administrator.",

	// US4744
	loginScreen_IncorrectUserNamaAndPassword            :   "Please check your user name and password",

	// US5413
	loginScreen_signatureBox_title     	                :    "Please sign to confirm you have completed the necessary training",
	loginscreen_toggleTitle                             :    "Did another staff member generate the lead for you?",
	
	// WICI-83 Training 
	loginScreen_Training_title                         :    "Training is available. To review training content, or login to take applications, please use the switch below.",
	loginScreen_AppModule                              :    "APPS",
	loginScreen_TrainingModule                         :    "TRAINING",
    loginScreen_AppModule1                              :    "APPLIS",
	loginScreen_TrainingModule1                         :    "FORMATION",
	loginScreen_TrainingButton                         :    "TRAINING",
	attestTrainning_Button_label                        :    "ATTEST",
	startTrainingModuleScreenTitle                     :  "You are about to start your training. <br> Please click the button when you are ready",
	attestscreen_toggleTitle                           :  "By signing, you attest that you have completed training for Store Staff (version November 2022).",
	employee_email                                     :  "Employee Email",
	// WICI-83 Trainning 

	// US4231
	loginScreen_BlackLstEmpIDAgtIDLookup_FailedMessage	:	"Login Failed. Please Contact your administrator.",

	loginScreen_UserLookupDialog_NormalTitle			:	"Location Details",
	loginScreen_UserLookupDialog_ErrorTitle				:	"Location Error",
	loginScreen_UserLookup_ConfirmMessage				:	"Is this the correct location address?",
	loginScreen_UserLookup_FailedMessage				:	"Location not found, please try again",
	loginScreen_DemoModeAlert 							:   "You are logging into \n DEMO MODE \n Are you sure?",

	loginScreen_EmployerIDLookup_FailedMessage			:	"Invalid Employer Id. Please correct and try again",
	chooseProduct_HandoutTabToCustomerDialogRetrieve	:	"Retrieve An Application",
	chooseProduct_PrinterConnected						:	"Printer is connected",
	chooseProduct_PrinterNotConnected					:	"Printer is not connected. Please ensure printer is powered on, within<br> range and Bluetooth is connected before proceeding with application.",
	loginScreen_Login_Details_In_Use					:	"Login failed. Your login details are currently in use. Please contact your supervisor for more information.",
	
	// US3766
	chooseProduct_ChooseOneOfTheCreditCards 			: 	"CHOOSE ONE OF THE FOLLOWING CREDIT CARDS",
    chooseProduct_CanadianTireOptionsMC 			    : 	"Triangle<sup>&reg;</sup> Mastercard<sup>&reg;</sup>",
    chooseProduct_OptionsMasterCard 					: 	"Triangle<sup>&reg;</sup> <br> Mastercard<sup>&reg;</sup> <br> \n <p>Triangle Rewards<sup>&trade;</sup></p>",
   	//US4590
   	//chooseProduct_Triangle_Rewards 					    : 	"Triangle  Rewards<sup>&trade;</sup>",
	chooseProduct_GasAdvantageMasterCard 				: 	"Gas Advantage<sup>&reg;</sup> Mastercard<sup>&reg;</sup>",
	chooseProduct_CashAdvantageMasterCard				: 	"Cash Advantage<sup>&reg;</sup> Mastercard<sup>&reg;</sup>",
	chooseProduct_NoSpecificCard						:	"card",
	
	// VZE-107
	chooseProduct_Customer_signatureBoxDialog_title             :  "Customer Signature Required",
	
	// CSR and ROC Province
	chooseProduct_Customer_signatureBoxDialog_Content_CSR_ROC           :  "You are about to apply for a Canadian Tire Bank issued Mastercard. If you already have a Canadian Tire Bank issued Mastercard and are approved for this credit card, this will be a new account.",
	chooseProduct_Customer_signatureBoxDialog_ListTitle_CSR_ROC         :  "By signing below:",
	chooseProduct_Customer_signatureBoxDialog_ListItem1_CSR_ROC         :  "I understand that submitting the application will lead to a credit check.",
    chooseProduct_Customer_signatureBoxDialog_ListItem2_CSR_ROC         :  "I verify that I am in control of the tablet and wish to complete the application.",
    // CSR With QC province && FMR with All Province 
    chooseProduct_Customer_signatureBoxDialog_Content_CSR_QC_And_FMR_AllProvince          :  "You are about to apply for a Canadian Tire Bank issued Mastercard. If you already have a Canadian Tire Bank issued Mastercard and are approved for this credit card, this will be a new account.",
	chooseProduct_Customer_signatureBoxDialog_ListTitle_CSR_QC_And_FMR_AllProvince         :  "By signing below:",
	chooseProduct_Customer_signatureBoxDialog_ListItem1_CSR_QC_And_FMR_AllProvince         :  "<p>I understand that submitting the application will lead to a credit check.</p>",
    chooseProduct_Customer_signatureBoxDialog_ListItem2_CSR_QC_And_FMR_AllProvince         :  "<p>I verify that I have been provided the Legal Information handout.</p>",
    chooseProduct_Customer_signatureBoxDialog_ListItem1_CSR_QC_And_FMR_AllProvince_1       :  "<p>Pour les résidents du Québec, je confirme également que j'ai reçu et que j'ai lu la version française de la charte de confidentialité, du contrat de titulaire de carte et des conditions générales du programme Récompenses Triangle et, si j'ai choisi l'anglais comme langue de préférence, je souhaite être lié exclusivement par la version anglaise de ces documents et recevoir les documents connexes en anglais.</p>",
    chooseProduct_Customer_signatureBoxDialog_ListItem1_CSR_QC_And_FMR_AllProvince_2       :  "<p>For residents of Quebec, I also confirm that I have been provided with and have reviewed the French version of the Privacy Charter, Cardmember Agreement, and the Triangle Rewards Program Terms and Conditions and, if I selected English as my language preference, I wish to be bound exclusively by the English version of such documents and to receive related documents in English.</p>",
    
    chooseProduct_Customer_signatureBoxDialog_IAgree            		:  "I AGREE",
	 
	// VZE-107

	// US3920
	program_PromoCode 									:   "{\"FMR\":[{\"Intercept\":[{\"Intercept\":\"Blank\"},{\"Grand Opening\":\"4023\"},{\"Other\":\"\"}],\"In-Store Events\":[{\"Triangle Days\":\"OMCDY\"},{\"Other\":\"\"}],\"CTP Events\":[{\"Eastern Events Program\":\"5200\"},{\"Western Events Program\":\"4024\"}],\"CTP Local\":[{\"Eastern Local Program\":\"4022\"},{\"Western Local Program\":\"4029\"}],\"Campus\":[{\"Other\":\"\"}]}]}",

	// US4194
	program_Marks_PromoCode 							:   "{\"FMR\":[{\"Marks Store\":[{\"MWW80\":\"MWW80\"}]}]}",
	program_Marks_PromoCode_QC 							:   "{\"FMR\":[{\"Marks Store\":[{\"MWW80\":\"MWW80\"}]}]}",	
	//US4433
	program_FGL_ProgramCode_intercept                   :    "{\"FMR\":[{\"Intercept\":[{\"Intercept\":\" \"}]}]}",
	program_PC_ProgramCode_FMR		                    :    "{\"FMR\":[{\"Party City Intercept\":[{\"Party City Intercept\":\" \"}]}]}",
	program_PC_ProgramCode_CSR		                    :    "{\"FMR\":[{\"Party City Staff\":[{\"Party City Staff\":\" \"}]}]}",
	// US3767
	chooseProduct_PromoCode_Other						:	"Promo code (Other)",
	
	chooseProduct_PromoCode								:	"Promo code",
	chooseProduct_Program								:	"Program",
	chooseProduct_Province								:	"Province",
	//------------------ VZE- 108 Starts ---------------------
	chooseProduct_received_and_reviewed                 : "I have received and reviewed the Cost of Credit Disclosure for Credit Card Applications.  I also understand a copy is available online at www.ctfs.com/legalinformation.",
	chooseProduct_Application_Disclosures               : "Application Disclosures",
	chooseProduct_CanadianTireAgreementTitle            : "CANADIAN TIRE BANK CARDMEMBER AGREEMENT",
	chooseProduct_CanadianTireAgreement_para1           : "<p>The agreement (also referred to as <b>this agreement</b>) between you, as primary cardmember, and us, as issuer of each card, includes the terms in this document, any amendment to or replacement of these terms, any specific instructions that we provide to you in writing about the use of a card and the disclosure statement that we provide to you with a card. Unless we notify you otherwise, this agreement applies to every card (as defined below) that we have issued or may issue in the future to you or to any supplementary cardmember and replaces any prior agreement relating to a card. The terms of this agreement apply as soon as we open an account even though you may not have received a card.</p>",
    chooseProduct_CanadianTireAgreement_para2           : "<p><b><U>Definitions You Need to Know</U></b></p><p><b>we</b>, <b>our</b> and <b>us</b> means Canadian Tire Bank.</p><p><b>you</b> and <b>your</b> refer to the <b>primary cardmember</b>, who is the person in whose name the account for a particular card has been opened.</p><p><b>account</b> means an account that is opened in your name, either with respect to a particular card or on a temporary basis to enable you to make charges before you receive a card.</p><p><b>balance due</b> means the amount shown as the balance due on your monthly statement.</p><p><b>balance transfer</b> means the payment by us on your behalf to someone else of any indebtedness that you owe which we then add to the balance on your account.</p><p><b>Canadian Tire retail card</b> means a credit card that we issue that may only be used to make purchases at retail stores of Canadian Tire Corporation, Limited (and its successors and affiliates) or on its website, or at Canadian Tire gas bars.</p><p><b>card</b> means each and every credit card we have issued to you (other than a Canadian Tire retail card or a        credit <b>card</b> primarily for business or commercial purposes) and, if you have requested a temporary replacement for any card that you have lost, the term <b>card</b> will include that replacement card even though it has not yet been delivered to you or to a supplementary cardmember. A <b>card</b> will also refer to each credit card that we have issued to a supplementary cardmember. Each reference to a <b>card</b> means each and every card.</p><p><b>cash transaction</b> means an advance of cash that is obtained at an automated teller/ banking machine (<b>ABM</b>) or from a teller, a balance transfer, any transaction in which you use a convenience cheque, a transaction for gambling purposes (whether at a casino, at a racetrack, over the internet or for the purchase of lottery tickets or any other form of gambling), a money transfer, a purchase of travellers cheques and any other transaction that we notify you is to be treated as a cash transaction.</p><p><b>charge</b> means each amount that is charged to a card as a result of any use of the card by you or by any supplementary cardmember (including a charge by way of pre-authorized payments), whether as a result of a purchase or a cash transaction, and includes all interest, fees and other amounts that you are required to pay as provided in this agreement and that are posted to the account for a card.</p><p><b>convenience cheque</b> means a cheque that we provide to you for use with a card.</p><p><b>credit limit</b> means the maximum amount that may be outstanding on the account for a card at any time. This amount will be set out in the disclosure statement.</p><p><b>deferred payment plan</b> means an arrangement that we offer and for which we may charge you a fee that allows you to defer payment on your account for a specific charge, for a period of time that is specified for such charge.</p><p><b>disclosure statement</b> means the disclosure statement that we provide to you with a card or when we open an account, as that disclosure statement may be amended or replaced from time to time.</p><p><b>equal payments plan</b> means an arrangement that we offer and for which we may charge you a fee that allows you to make payment in respect of a specific charge in twelve <b>(12)</b> approximately equal consecutive monthly instalments (or such greater or lesser number of monthly instalments as we offer), with the last instalment possibly being greater or lesser (each, <b>an equal payments plan instalment</b>), each of which when due will be included in the balance due and the minimum payment for the particular statement period, beginning with the statement period in which the equal payments plan is posted to your account.</p><p><b>event of default</b> has the meaning given to that term under the heading “Default” below.</p><p><b>PIN</b> means the personal identification number, passcode or password that may be issued or chosen by you or a supplementary cardmember for use in connection with a card.</p><p><b>purchase</b> means a charge that is not a cash transaction, interest or fees.</p><p><b>special payment plan</b> includes a deferred payment plan, an equal payments plan and any other special financing arrangement that we may offer to you under this agreement subject to any additional terms and conditions that apply to the particular plan.</p><p><b>special payment plan termination event</b> means, unless specified otherwise in any additional terms and conditions that apply to the particular plan, the occurrence of one of the following events:</p><ul><li>we do not receive the full amount of the  minimum payment due on a statement within <b>59</b> days of the date of that statement, or</li><br><li>an event of default, other than because of failure to make a payment when due under this agreement.</li></ul><p><b>supplementary cardmember</b> means any person to whom we have issued a credit card on your account at your request.</p><p><b>use of the card</b> means the presentation of the card to someone or the disclosure of an account number or card number to someone in person, over the telephone, by fax or other electronic transmission, over the internet or in any other way, in order to make a purchase or to conduct a cash transaction.</p>",
    chooseProduct_CanadianTireAgreement_para3           : "<p><b><U>Use of the Card</U></b></p><p>As the primary cardmember you must pay us for all charges made to a card whether as a result of the use of the card by you, any supplementary cardmember or by anyone who you allow to use your card and/or PIN. You may also be liable for certain unauthorized transactions (see Lost/ Stolen Cards and Unauthorized Use below). You must not use a card for any unlawful purpose, including purchasing goods or services that are illegal to purchase. You are also responsible for making sure that all supplementary cardmembers comply with this agreement.</p><p>A card allows you to obtain credit from us, up to your credit limit, by using the card to make purchases from merchants who accept the card and, subject to our discretion, to enter into cash transactions with us and others who accept the card. We cannot, however, guarantee that a card will be accepted wherever you want to use it, and we are not liable to you if we or anyone else refuses to accept a card or a convenience cheque. A stop payment on a convenience cheque is not permitted. Even though you, a supplementary cardmember or anyone else authorized to use a card may not sign a sales slip or other writing when the card is used or uses the card after its expiry date, you will still be responsible for all charges arising from that use of the card. We may at any time restrict or block the ability to use a card for a purchase or cash transaction if we have any concern as to the use of the card, your ability to make any payment to us or for any other reason.</p>",
    chooseProduct_CanadianTireAgreement_para4           : "<p><b><U>Lost/Stolen Cards and Unauthorized Use</U></b></p><p>You must take reasonable care to keep your card, account information, PIN and any convenience cheques safe from loss, theft or misuse. You must not allow anyone else to use a card other than a supplementary card member, but if you do, you will be liable for all charges resulting from such use even if the card was used for transactions that you did not authorize.</p><p>If you tell us that your card, account information or PIN have been lost or stolen or are at risk of being used in an unauthorized manner, you will not be liable for any unauthorized use that occurs after you have notified us. For any unauthorized use that occurs before you notify us, you are not liable for the unauthorized use of a lost or stolen card, unless you have been grossly negligent (or, in Quebec, have demonstrated gross fault) in safeguarding your card, account information or PIN.</p><p> You must keep your PIN separate from your card and never let anyone know your PIN. You must not select a PIN that can be easily discovered. For example, a PIN that is the same as your name, date of birth, telephone number, address or social insurance number or a set of sequential numbers must not be selected.</p><p>You must notify us immediately if your card has been lost or stolen or if you suspect that someone has discovered your account number or PIN by calling us at our <b>24</b>-hour toll-free number listed on your monthly statement.</p>",
    chooseProduct_CanadianTireAgreement_para5           : "<p><b><U>Credit Limit</U></b></p><p>The total amount of unpaid charges on a card (we refer to this as the <b>balance</b> on the card) may not at any time exceed the credit limit unless we allow you to. If you exceed the credit limit, and provided that we comply with any notification requirement applicable to such credit over limit, you must pay us the amount over the credit limit when we ask you, but you must always pay that excess amount in full not later than the due date shown on your account statement. We may reduce your credit limit without notice to you or may increase your credit limit with your consent.</p>",
	
	chooseProduct_CanadianTireAgreement_para6           :  "<p><b><U>Payments</U></b></p><p>Each month you must pay us at least the <b>minimum payment</b> that is shown on your statement by the due date on that statement. The method of calculating the <b>minimum payment</b> will be set out in the disclosure statement. Any balance on a special payment plan will be included in the “New Balance” shown on your statement, but will not be included for the purpose of calculating the minimum payment or the balance due until payment of the balance on such special payment plan is due, unless specified otherwise in the plan offering.</p><p>We may decide to reduce or waive the minimum payment for a particular statement period, but if we do so interest will still accrue on the unpaid balance and will be added to the balance on your next statement period.</p><p>You may make payments to us by cheque, bank draft or money order that you mail to us, by electronic funds transfer that you arrange through a financial institution in Canada, over the internet or by any other method of which we notify you. We cannot accept cash or coins and if you send them to us we are not responsible for any loss.</p><p>A payment is not considered to have been made until it is in our possession and has been entered into our payment processing system. To ensure that we always receive your payment prior to the due date you should allow sufficient time for your payment to reach us.</p>",
	chooseProduct_CanadianTireAgreement_para7           :  "<p><b><U>Account Statements</U></b></p><p>Subject to applicable law, we will provide you with a statement of your account once in each calendar month. The period covered by the statement will be between <b>28</b> and <b>33</b> days, depending on holidays, weekends and the number of days in a particular month. We will mail the statement to the last address that we have for you in our records, or, if you wish, we will provide it to you electronically if we are able to do so. You are responsible for notifying us of any change in your postal or email address so that you can continue to receive your statements on time.</p><p>If your statement is delayed because of problems with postal service or for any reason of which you are aware, you should contact us by telephone or, if you can, review your statement over the internet, so that you can make the required payment by the due date.</p><p> You should review your statement carefully and if you think that any charge should not have been made to your account you must notify us of any error within <b>90</b> days of the date that the charge was posted to your account. If you do not, you will have no further right to question that charge, other than those charges for which you are not responsible resulting from the unauthorized or fraudulent use of your card. However, if we have incorrectly credited an amount to your account or understated a charge, we may correct that error at any time.</p>",
	chooseProduct_CanadianTireAgreement_para8           :  "<p><b><U>How we apply payments and credits</U></b></p><ul class=\"csr_cantireAgreement_marginLeft\"><li>For payments received by us, the following will apply:</li></ul><p>&#151; each payment on account of the minimum payment will be applied in the following order:</p><p>&#151; equal payments plan instalment(s) in chronological order beginning with the instalment due under the first equal payments plan</p><p>&#151; interest charges on the current statement and unpaid interest from previous statements</p><p>&#151; fees</p><p>&#151; principal (whether it is a cash transaction or a purchase), beginning with those accruing interest at the lowest rate and ending with those accruing interest at the highest rate</p><p>&#151; If you pay more than your minimum payment, the amount that is paid in excess of the minimum payment is applied as follows:</p><p>&#151; First, we group together all transactions that have the same interest rate. For example, all transactions with a particular regular annual rate would be in one group and all transactions with the same promotional special rate of interest would be in another group.</p><p>&#151; Next, we apply the amount of your payment in excess of the minimum payment to each interest rate grouping in the proportion that such grouping bears to the balance due on your account. For example, if <b>25%</b> of the transactions are in one interest rate grouping and <b>75%</b> in another, the amount in excess of the minimum payment will be applied <b>25/75</b> against those amounts. We measure the proportion on the date that we receive the payment and do not include in the calculation any unbilled charges or balances on equal payments plans or deferred payment plans.</p><p> &#151; If you pay more than the balance due on your statement, that overpayment will be applied first against unbilled charges as of the date of receipt of payment (proportionately among such charges based on the interest rate applicable to the various charges), then to any balances on special payment plans on the following basis: firstly, proportionately among such balances based on the interest rate applicable to the various balances, secondly, in respect of special payment plans that have the same rate of interest, proportionally based on the balance that each type of plan (e.g. deferred payment plans or equal payments plans) represents of the balance of all special payment plans on the account with that interest rate, and lastly, as between special payment plans of the same type with the same interest rate, chronologically starting with the special payment plan of that type which will expire first.</p><p> &#151; When you have a credit balance on your account, that balance is applied against charges in the order that they are posted to the account.</p><p> &#151; Billed charges are always paid ahead of unbilled charges.</p><p> &#151; If you receive a credit for a charge to your account, we first apply that credit to charges made at merchants in a similar merchant category or, if there is no match, then the credit will be applied using the same method as the minimum payment (see above), although a credit is not treated as a payment either on account of the minimum payment or the balance owing on a statement. If a merchant issues you a credit voucher for a transaction we may not be able to post that credit to your account until the next statement period. In the meantime, interest will still accrue on that charge until the credit has been posted and you must still pay the balance shown on your statement in full in order to avoid having to pay interest on the entire balance of all purchases that appear on your statement for the first time.</p>",
	chooseProduct_CanadianTireAgreement_para9           :  "<p><b><U>Interest</U></b></p><p><b>Interest rate</b> &#8211; You will be charged interest on purchases and other charges at the applicable rate (which is subject to change) that is set out in the disclosure statement for the particular type of charge (each, a <b>regular annual rate</b>), unless we offer you a special rate of interest for a particular charge. Each rate that you are charged will be shown on your account statement.</p>",
	chooseProduct_CanadianTireAgreement_para10          :  "<p><i><b>How we calculate interest</i></b> &#8211; Subject to the terms of any special payment plan, interest accrues on each charge from the date of the transaction giving rise to the particular charge, which may be earlier than the date that the charge is posted to your account.We calculate interest daily at a daily interest rate which is equal to the applicable annual interest rate divided by the number of days in the particular calendar year. Interest is calculated at the applicable daily interest rate each day based on the total amount of the particular type of charge that is outstanding on that day, until that particular charge has been paid. How long a charge is outstanding will depend on the order that payments are applied as specified above. We do not pay you interest on any credit balance in your account.</p>",
    chooseProduct_CanadianTireAgreement_para11          :  "<p><b>How payments affect the interest you pay &#8211; grace period</b> &#8211; If we receive payment of the balance due in full by the due date shown on your statement you will not have to pay interest on any purchases that appear on your statement for the first time or on the balance of any deferred payment plan that expired during the billing period covered by your statement. The due date will be <b>26</b> days after your statement date if you live in Quebec or <b>21</b> days after your statement date if you live elsewhere &#8211; this is what is called the <b>grace period</b>. If your grace period ends on a Saturday, Sunday or a holiday it will be automatically extended to the next business day. The grace period does not apply to any unpaid balance due on a previous statement, cash advances, balance transfers and other cash transactions (and related fees), and so, you will be charged interest on those amounts on each statement until they have been paid in full. This means that additional interest charges could appear on a subsequent statement even though you have paid the balance due on your statement in full.</p><p> If we do not receive payment of the balance due shown on your statement in full by the due date, you will have to pay interest on the entire balance due that was outstanding each day, until you have paid the balance due on that statement in full. Any unpaid balance due from one statement period (which will include any unpaid interest), together with the interest that has accrued during your current statement period, will form part of the balance due on your next statement. As a result, interest is charged on unpaid interest, which means that interest is compounded monthly.</p>",
    chooseProduct_CanadianTireAgreement_para12          :  "<p><b><i>Equal payments plans</i></b> &#8211; Interest will not accrue on the balance outstanding on an equal payments plan unless indicated in the equal payments plan offering. If interest does accrue, it will accrue daily on the balance outstanding from the date of the transaction until that balance has been repaid in full (unless a special payment plan termination event occurs earlier) at the interest rate specified in the plan offering. Interest that has accrued during a statement period will appear on your monthly statement unless the plan offering in question indicates that interest will not be charged if you satisfy certain conditions.</p><p>If you do not pay all of an equal payments plan instalment by the due date on the particular statement, the amount that is unpaid will no longer form part of the equal payments plan and you will be charged interest on that amount from the day after the date of your next statement at the applicable regular annual rate.</p><p>If a special payment plan termination event occurs, (i) all equal payments plans on the account will be terminated, (ii) you will then be charged interest on the balances outstanding from all equal payments plans at the applicable regular annual rate from the day after the date of your next statement, and (iii) the balance outstanding on each equal payments plan will form part of the balance due on that statement.</p>",
    chooseProduct_CanadianTireAgreement_para13          :  "<p><b><i>Deferred payment plans</i></b> &#8211; Unless indicated in the deferred payment plan offering, interest will not accrue on the balance outstanding on a deferred payment plan until that plan expires or is terminated. If interest does accrue, it will accrue daily on the balance outstanding from the date of the transaction until the deferred payment plan expires (unless a special payment plan termination event occurs earlier) at the interest rate specified in the plan offering. Upon expiry, interest will accrue on the balance outstanding of a deferred payment plan at the applicable regular annual rate.</p><p>If a special payment plan termination event occurs (i) all deferred payment plans on the account will be terminated, (ii) you will then be charged interest on the balances outstanding from all deferred payment plans at the applicable regular annual rate from the day after the date of your next statement, and (iii) the balance outstanding on each deferred payment plan will form part of the balance due on that statement.</p>",
	chooseProduct_CanadianTireAgreement_para14          :  "<p><b><U>Cash advances</U></b></p><p> You may use your card to obtain cash advances at locations worldwide that we specify and (together with a PIN) from those ABMs that bear certain logos printed on your card or that we specify from time to time. We may, however, set a minimum and maximum amount for cash advances or revoke this service at any time without notice to you.</p><p> Transaction receipts issued at an ABM are for convenience only and in the event of any conflict between our records and such receipt our records will govern and be binding.</p>",
    chooseProduct_CanadianTireAgreement_para15          :  "<p><b><U>Foreign currency transactions</U></b></p><p> You must pay us for all charges in Canadian dollars. If charges are made to your card in a currency other than Canadian dollars, the foreign currency will be converted to Canadian dollars before it is posted to your account. Credits to your account involving a foreign currency will also first be converted from the foreign currency to Canadian dollars. Each conversion to Canadian currency will be made at exchange rates equal to the rate established by the credit card network (their logo is printed on the face of your card) through which transactions on your card are processed plus the percentage rate disclosed in the disclosure statement (for charges to your account) or minus such percentage rate (for credits to your account). The exchange rate that is used will be the rate on the date that a charge is posted to the account for your card and may be different from the rate in effect on the date of the transaction that resulted in such charge. As a result of such changes in exchange rates and currency exchange costs, the Canadian dollar amount that is credited to your account for a foreign currency transaction could be less than the Canadian dollar amount that was originally charged to your account for that transaction. For transactions in certain foreign currencies, the credit card network may first convert the foreign currency amounts to US dollars before conversion to Canadian dollars.</p>",
    chooseProduct_CanadianTireAgreement_para16          :  "<p><b><U>Dealing with merchants</U></b></p><p> We have no responsibility for the quality of the goods or services that you purchase with your card or if they are not suitable for your purposes. Therefore, if you have any claim or dispute with a merchant relating to any goods or services that have been charged to your card, you must still pay us in full for the charges for those goods or services and then settle your claim or dispute directly with the merchant.</p><p> If you have a dispute with a merchant that you were overcharged or did not receive the goods or services that you purchased with a card and we agree to credit your account with the amount of the disputed transaction (which we have no obligation to do unless required by applicable law), you must promptly sign and return to us any documents that we require, which could include an assignment to us of the claim that you have against the merchant.</p>",
	chooseProduct_CanadianTireAgreement_para17          :  "<p><b><U>Recurring payments</U></b></p><p>If you have arranged for recurring payments to be charged to a card, and your card number or expiry date changes or if your account is cancelled, the credit card network (the logo of which is on the face of your card) may automatically inform those merchants or institutions to whom you make recurring payments of the details of your new card information, so that your automatic bill payments are not interrupted. However, it is your responsibility to confirm whether merchants or institutions to whom you make recurring payments participate in such a program, and, if that is not the case, to notify those merchants and institutions of the new information.</p>",
    chooseProduct_CanadianTireAgreement_para18          :  "<p><b><U>Cancelling your card &#8211; closing an account</U></b></p><p> You may cancel a card held by a supplementary cardmember or close an account (which automatically cancels all cards issued on that account) at any time, but you will still be required to pay the balance owing on the particular account in accordance with this agreement. We may also cancel a card or close an account at any time without notice to you or to any supplementary cardmember even if an event of default has not occurred under this agreement. We may then require that you immediately repay the balance owing on your account in full with interest at the applicable rate(s).</p><p> If you cancel a card or close an account or if we do, you must return to us all cards on the same account since all cards are our property.</p><p> If charges are made to a card even after a card has been cancelled, you must still pay us those charges in accordance with this agreement.</p><p> If you cancel a card or close an account or if we do, your account will be suspended for up to three <b>(3)</b> months. During that time, you can request that the card or account be re-activated. We have the sole discretion to decide if a card or account will be re&#45; activated and may require that you meet certain conditions prior to qualifying for re&#45;activation. Following re-activation of an account, the suspension of the account will cease and this agreement will continue. If you have not yet returned to us any cancelled cards you may be able to start using them again following re-activation, otherwise replacement cards will be sent to you. If the account has not been re&#45;activated within three <b>(3)</b> months, the agreement will terminate but any obligations, including payment obligations, that you have not met will continue until you have met them.</p>",
    chooseProduct_CanadianTireAgreement_para19          :  "<p><b><U>Default</U></b></p><p> If (i) you do not make any payment when due under this agreement, (ii) you or any supplementary cardmember does not comply with any term or condition of this agreement or any other agreement that we have with you, (iii) you provided any incorrect or misleading information in any application for a card, (iv) you become insolvent or bankrupt or insolvency proceedings are brought by or against you or you make a proposal to your creditors,</br> (v) any of your property is seized or attached under any legal process, (vi) you die, or (vii) we reasonably believe that you are unable to make a payment or otherwise fulfill your obligations under this agreement (each, an event of default), we may (a) terminate or restrict your rights under, and modify any terms of, this agreement, (b) demand that you pay the balance of your account in full with interest at the applicable rate(s), (c) increase the minimum payment that you must make until further notice, (d) apply any balance that you have in any other account or on deposit with us against the amount that you owe us under this agreement, (e) require that you and every supplementary cardmember return all cards and unused convenience cheques, and (f) exercise all other rights and remedies that are available to us in law. Except if you are a cardholder residing in Quebec, you must pay all legal expenses that we incur to exercise our rights and remedies under this agreement.</p><p><b>For Quebec Residents Only:</b></p><p><b>Clause required under the Consumer Protection Act (Quebec)</b></p><p><b>(Clause of forfeiture of benefit of the term)</b></p><p> Before availing himself of this clause, the merchant must forward the consumer a notice in writing and unless he is exempted in accordance with section <b>69</b> of the General Regulation, he must forward him a statement of account. Within <b>30</b> days following the receipt by the consumer of the notice and, where necessary, of the statement of account, the consumer may:</p><p> &nbsp; &nbsp;(a) &nbsp;either remedy the fact that he is in default;</p><p>&nbsp; &nbsp;(b) &nbsp; or present an application to the court to have the terms and conditions of payment prescribed in this contract changed.</p><p> It is in the consumer’s interest to refer to sections <b>104</b> to <b>110</b> of the Consumer Protection Act (chapter <b>P</b>&#45;<b>40.1</b>) as well as section <b>69</b> of the General Regulation made under that Act and, where necessary, to contact the Office de la protection du consommateur.</p>",
    chooseProduct_CanadianTireAgreement_para19_VZE_518_newLine1          :  "<p><b><U>Electronic Alerts</U></b></p><p> We will be sending you an electronic alert via email or text message if you have provided us with the required contact information and the available credit on your account falls below <b>$100</b>, or such other amount as may be prescribed by law or you select. If you have provided both an email address and a mobile phone number, we will send the alert to you via email. You can change your communication channel or the threshold amount at which an alert will be sent by contacting us at the number on the back of your card or by changing your preferences in your online account. If you had previously signed&#45;up for an available credit alert via our  NotifyMe service, your selection of preferred communication channel and the threshold amount at which the alert will be sent will be retained. If you have multiple products with us and have provided the required contact information for only one product, we will use that contact information to send you any required alerts, regardless of which product the alert is for. Subject to any restrictions imposed by law, you can opt&#45;out of receiving electronic alerts in writing by sending us a letter or on-line on our website.</p>",
    chooseProduct_CanadianTireAgreement_para19_VZE_518_newLine2          :  "<p><b><U>Supplementary Cardmembers</U></b></p><p> You consent to our sharing certain account information, as detailed below, with any supplementary cardmember on your account. You acknowledge that any supplementary cardmember on your account may view, obtain or be provided with information about the account, including their own transactions, account balance, available credit, account status, payment details and loyalty balance if applicable. You can remove the access or authority available to a supplementary cardmember.</p><p> When you provide us with information about a supplementary cardmember, you confirm that the individual consents to our collection, disclosure and use of their personal information for the purpose of their use of the account. Supplementary cardmembers may be permitted to change their own information on the account or request a replacement card but are otherwise not authorized to give instructions to us with respect to the account without your express consent. For instance, a supplementary cardmember would not be able to change your information, such as your address, or request or consent to an increase in the credit limit or close the account.</p>",
    chooseProduct_CanadianTireAgreement_para20          :  "<p><b><U>Optional Services</U></b></p><p> From time to time we may offer you optional services or benefits at additional cost to you, some of which may be provided by someone other than us. Those services will be subject to separate agreements. You acknowledge that we are not liable for any services provided to you by someone else and that any dispute that you have with the provider of those services does not affect your obligation to pay us all amounts in accordance with this agreement. We may at any time modify, withdraw or terminate any such service.</p>",
    chooseProduct_CanadianTireAgreement_para21          :  "<p><b><U>Loyalty Programs</U></b></p><p> In some cases a loyalty program may be provided with a card, in some situations at no additional cost to you. The principal features of any loyalty program will be described in a benefits guide that accompanies the card. If you wish to see a complete set of the terms and conditions that apply to a particular loyalty program you may view them online at the website identified in the benefits guide or you may call one of our Customer Service Representatives at the toll-free number set out in the benefits guide. Loyalty programs may be subject to cancellation or change as provided for in the relevant loyalty program terms.</p>",
    chooseProduct_CanadianTireAgreement_para22          :  "<p><b><U>Fees and charges</U></b></p><p> The disclosure statement sets out the fees and charges (including, when applicable, charges for cheques and pre-authorized payments that are dishonoured) that you must pay relating to your card. We will notify you if we add any fee or charge or change the amount of any fee or charge.</p>",
 	chooseProduct_CanadianTireAgreement_para23          :  "<p><b><U>Assignment of this agreement</U></b></p><p> We may assign any one or more of your accounts and all of our rights under this agreement related to each assigned account to any other entity or person without your consent.</p>",
    chooseProduct_CanadianTireAgreement_para24          :  "<p><b><U>Changes to this agreement</U></b></p><p> We may make a change to any provision of this agreement, including any of the information provided in your initial disclosure statement, at any time, on <b>30</b> days prior notice to you or such longer period of time as may be required by law. We will communicate any changes to you by mail, including by a notice on your statement, or e-mail to the address to which we send your statements. It is your responsibility to let any supplementary cardmember know of any changes to this agreement. A change could apply to a charge that was made before you receive any notice from us, but any change will only take effect from the date that we specify in the notice that we give to you. If you reside in Quebec, you may refuse the change and terminate this agreement without cost, penalty or cancellation indemnity by sending us a notice to that effect no later than <b>30</b> days after the change comes into force. If you choose to terminate the agreement, you will remain responsible for any amounts outstanding under this agreement.</p>",
	chooseProduct_CanadianTireAgreement_para25          :  "<p><b>Changing your address</b></p><p> In order to receive your statements and other communication from us on time you must notify us promptly if you change your address (including your e-mail address if you are receiving your statements electronically).</p>",
    chooseProduct_CanadianTireAgreement_para26          :  "<p><b><U>Governing laws</U></b></p><p> The courts of the province or territory in Canada where you reside (or Ontario, if you reside outside Canada) will have exclusive jurisdiction over disputes arising in connection with this agreement, and in determining those disputes, you agree that such courts will apply the laws in force in that province or territory. This agreement is entered into in Welland, Ontario.</p>",
	chooseProduct_CanadianTireAgreement_para27          :  "<p><b><U>Non-waiver</U></b></p><p>Even though we accept payment from you or do not exercise any right or remedy that we have under this agreement or insist on full compliance by you of your obligations under this agreement, we may still at any other time exercise all of our rights and remedies under this agreement unless we have agreed in writing not to do so.</p>",
    chooseProduct_CanadianTireAgreement_para28          :  "<p><b><U>Severability</U></b></p><p> If any provision of this agreement is found to be unenforceable, that will not affect our ability to enforce the remainder of this agreement.</p><p><b><U>Language</U></b></p><p> It is the express wish of the parties that this agreement and all related documents be drawn up in English. Les parties ont exprimé la volonté expresse que cette convention et tous les documents s’y rattachant soient rédigés en anglais.<b>Additional Information for Residents of Quebec</b></p>",
	chooseProduct_CanadianTireAgreement_para29          :  "<center><hr class=\"op_stretchThisTable\"/></center><p><b>Clause required under the Consumer Protection Act (Quebec)</b><br><b>(Contract extending variable credit for the use of a credit card)</b></p><p>&#8220;(<b>1</b>) If the consumer uses all or part of the credit extended to make full or partial payment for the purchase or the lease of goods or for a service, the consumer may, if the open credit contract was entered into on the making of and in relation to the sale, lease or service contract, and if the merchant and the open credit merchant collaborated with a view to granting credit, plead against the lender any ground of defence urgeable against the merchant who is the vendor, lessor, contractor or service provider.</p><p>The consumer may also, in the circumstances described in the first paragraph, exercise against the open credit merchant, or against the merchant’s assignee, any right exercisable against the merchant who is the vendor, lessor, contractor or service provider if that merchant is no longer active or has no assets in Quebec, is insolvent or is declared bankrupt. The open credit merchant or the merchant’s assignee is then responsible for the performance of the obligations of the merchant who is the vendor, lessor, contractor or service provider up to the amount of, as the case may be, the debt owed to the open credit merchant at the time the contract is entered into, the debt owed to the assignee at the time it was assigned to him or the payment the open credit merchant received if he assigned the debt.</p><p> (<b>2</b>) A consumer who is solidarily liable with another consumer for the obligations arising from an open credit contract is released from the obligations resulting from any use of the open credit account after notifying the merchant in writing that he will no longer use the credit extended and no longer intends to be solidarily liable for the other consumer’s future use of the credit extended in advance, and after providing proof to the merchant, on that occasion, that he informed the other consumer by sending him a written notice to that effect at his last known address or technological address. Any subsequent payment made by the consumer must be applied to the debts contracted before the notice was sent to the merchant.</p><p>(<b>3</b>) A consumer who has entered into a preauthorized payment agreement with a merchant under which payments are made out of credit obtained under a credit card contract may end the agreement at any time by sending a notice to the merchant. On receipt of the notice, the merchant must cease to collect the preauthorized payments. On receipt of a copy of the notice, the card issuer must cease debiting the consumer’s account to make payments to the merchant.</p><p> (<b>4</b>) The consumer is not liable for debts resulting from the use of a credit card by a third person after the card issuer has been notified, by any means, of the loss, theft or fraudulent use of the card or of any other use of the card not authorized by the consumer. Even if no notice was given, consumer liability for the unauthorized use of a credit card is limited to <b>$50</b>. The consumer is held liable for the losses incurred by the card issuer if the latter proves that the consumer committed a gross fault as regards the protection of the related personal identification number.</p><p>(<b>5</b>) Without delay at the end of each period, the merchant must send the consumer a statement of account. The merchant is not required to send a statement of account to the consumer at the end of any period if there have been no advances or payments during the period and the outstanding balance at the end of period is zero.</p><p>(<b>6</b>) If the consumer makes a payment at least equal to the outstanding balance at the end of the preceding period within <b>21</b> days after the date of the end of the period, no credit charges may be required from the consumer on that outstanding balance, except as regards money advances. In the case of a money advance, charges may accrue as of the date of the advance until the date of payment.</p><p>(<b>7</b>) The consumer may demand that the merchant send, without charge, a copy of the vouchers for each of the transactions charged to the account during the period covered by the statement. The merchant must send the copy of the vouchers requested within <b>60</b> days after the date the consumer’s request was sent.</p><p> (<b>8</b>) Until the consumer receives a statement of account at his address or technological address if expressly authorized by the consumer, the merchant must not claim credit charges on the unpaid balance, except as regards money advances. It is in the consumer’s interest to refer to sections <b>103.1</b>, <b>122.1</b>, <b>123</b>, <b>123.1</b>, <b>124</b>, <b>126</b>, <b>126.2</b>, <b>126.3</b>, <b>127</b> and <b>127.1</b> of the Consumer Protection Act (chapter <b>P-40.1</b>) and, if further information is necessary, to contact the Office de la protection du consommateur.&#8221;</p>",
    chooseProduct_CanadianTireAgreement_para30          :  "<p><b>Table of Credit Charges</b></p><p>Examples of credit charges (rounded to the nearest cent) assuming that all charges are purchases bearing interest at the regular annual rates specified below, a <b>30</b> day month, no charges made on special payments plans and no other fees, additional payments or other charges: </p><p><table class=\"csr_chooseProduct\"><tr><th rowspan=\"2\" class=\"csr_chooseProductTrTd \"><center>Annual</center></th><th colspan=\"4\" class=\"csr_chooseProductTrTd\"><center>Average Balance</center></th></tr><tr><td class=\"csr_chooseProductTrTd\"><b>$100</b></td><td class=\"csr_chooseProductTrTd\"><b>$500</b></td><td class=\"csr_chooseProductTrTd\"><b>$1000</b></td><td class=\"csr_chooseProductTrTd\"><b>$2000</b></td></tr><tr><td class=\"csr_chooseProductTrTd\"><b>19.99%</b></td><td class=\"csr_chooseProductTrTd\"><b>$1.64</b></td><td class=\"csr_chooseProductTrTd\"><b>$8.22</b></td><td class=\"csr_chooseProductTrTd\"><b>$16.34</b></td><td class=\"csr_chooseProductTrTd\"><b>$32.86</b></td></tr><tr><td class=\"csr_chooseProductTrTd\"><b>21.99%</b></td><td class=\"csr_chooseProductTrTd\"><b>$1.81</b></td><td class=\"csr_chooseProductTrTd\"><b>$9.04</b></td><td class=\"csr_chooseProductTrTd\"><b>$18.07</b></td><td class=\"csr_chooseProductTrTd\"><b>$36.15</b></td></tr></table></p>",
    chooseProduct_CanadianTireAgreement_para31          :  "<p><b><center>PRIVACY AND YOUR PERSONAL INFORMATION</center></b></p><p>Personal Information about you is collected, used, and disclosed in accordance with the Canadian Tire Privacy Charter (<b>Privacy Charter</b>), including, in particular, to (a) process your application for a product or to provide a service; (b) assess and update your credit- worthiness on an ongoing basis; (c) process, service, analyze and audit your relationship with us, including collecting any monies you owe us; (d) verify your identity and protect against error and fraud:(e) administer the delivery, return or exchange of products, services, rewards and programs to you; (f) determine your interest and eligibility for, and where appropriate provide you with products, services, rewards and programs; (g) comply with applicable legal, regulatory and self&#45;regulatory requirements; and (h) better understand your product and services needs and to offer relevant information, products, service and rewards to meet those needs. As described in the Privacy Charter, Personal Information may be shared with other parties who administer accounts and with other members of the Canadian Tire family of companies to develop surveys, contests, individual and direct marketing programs and may be used to market and sell other products and services to you including by way of postal mail, e-mail, facsimile, telephone, text message, or other form of electronic message. If you decide that you do not want to receive marketing offers for products and services, you may always withdraw or refuse your consent by clicking on the unsubscribe link in our email communications or by contacting us at 1&#45;866&#45;846&#45;5841. Your request will be promptly processed but may not be in time to remove you from promotions already in progress. Please note that even if you have opted out of receiving marketing communications, we may still contact you for purposes of administering your account and sending you transactional or operational messages. The Privacy Charter is updated from time to time. You may obtain the most current version of the Privacy Charter online at <b><U>www.ctfs.com</U></b> or by calling us at 1&#45;800&#45;459&#45;6415. When your personal information is transferred to a Service Provider, we require them to protect the information in a manner that is consistent with our Privacy Charter. Our service providers may be located outside Canada and may be required to disclose your personal information under the laws of their jurisdictions.</p>",
    chooseProduct_CanadianTireAgreement_para32          :  "<p><b>Canadian Tire Bank Complaint Resolution Process</b> At Canadian Tire Bank, we are committed to building lifetime relationships with our customers by providing superior customer service. When you have a concern or complaint, we encourage you to tell us about it by following our Complaint Resolution Process.</p><p> <b>Step 1 &#150; Customer Service</b></p><p> The first step to resolving a complaint is to contact us directly. The Customer Relationship Representatives will attempt to resolve your concerns at Step 1, and as appropriate, will obtain support from a Supervisor or Manager to resolve your complaint.</p><p> If your complaint is related to a deposit or tax free savings product, you may contact us by calling 1&#45;866&#45;681&#45;2837.</p><p> If your complaint is related to a credit card product or any other matter, you may contact us by calling 1&#45;800&#45;459&#45;6415.</p><p>Alternatively, you can write to us at:</p><p> Canadian Tire Bank<br> P.O. Box 12000 Station Main <br>Welland, ON L3B 6C7</p><p> At any point during Step 1, you may request that your concerns be escalated to Canadian Tire Bank’s Complaint Resolution Team. Also, if your concern is not resolved at Step 1 within 14 days, it will automatically be escalated to the Complaint Resolution Team.</p><p> <b>Step 2 &#150; Complaint Resolution Team</b></p><p> If your complaint is not resolved to your satisfaction at Step 1, you may escalate your concerns to the Complaint Resolution Team. The Complaint Resolution Team will make every effort to resolve your concerns and keep you informed of the status of your complaint.</p><p> To escalate a complaint related to a deposit or     tax free savings product, call 1&#45;866&#45;681&#45;2837 and ask that your complaint be directed to the Complaint Resolution Team.</p><p> To escalate a complaint related to a credit card product or any other matter, call 1&#45;800&#45;459&#45;6415 and ask that your complaint be directed to the Complaint Resolution Team.</p><p> Alternatively, you can write us at: </p><p>Canadian Tire Bank<br> Attn: Complaint Resolution Team<br> P.O. Box 12000 Station Main <br>Welland, ON L3B 6C7</p><p> <b>Step 3 &#150; Ombudsman for Banking Services and Investments</b></p><p> If the steps listed above have not resolved your complaint to your satisfaction or 56 days have elapsed since we have received your complaint, you may contact the Ombudsman for Banking Services and Investments (OBSI). The OBSI is an independent, confidential and free dispute resolution service for consumers with a complaint that cannot be resolved with their financial institution.</p><p>You can contact the OBSI a few ways:</p><p> Ombudsman for Banking Services and<br> Investments<br> 20 Queen Street West, Suite 2400 P.O. Box 8<br> Toronto, ON M5H 3R3<br> Phone: 1&#45;888&#45;451&#45;4519 &#47; 416&#45;287&#45;2877<br> Fax: 1&#45;888&#45;422&#45;2865<br> Teletypewriter (TTY): 1-844-358-3442<br>Email: ombudsman@obsi.ca<br> Website: obsi.ca<br></p><p> <b>Other Escalation Options</b></p><p> If you have a complaint or concern regarding Canadian Tire’s privacy policies, you may contact Canadian Tire’s Chief Privacy Officer at:</p><p> Chief Privacy Officer<br> c&#47;o Canadian Tire Corporation, Limited<br> 2180 Yonge Street<br> P.O. Box 770, Station K<br> Toronto, ON M4P 2V8<br> Email: privacyoffice@cantire.com</p><p> If you have a complaint or concern regarding Canadian Tire Bank’s compliance with financial consumer protection measures that apply to federally regulated financial institutions, you may contact the Financial Consumer Agency of Canada (FCAC) at:</p><p> Financial Consumer Agency of Canada<br> 427 Laurier Avenue West, 6th Floor<br> Ottawa, ON K1R 1B9<br> Telephone: 1-866-461-3222</p><p> Please visit www.fcac-acfc.gc.ca for more<br> information about FCAC.</p><p><span style=\"font-size: 10pt; \"><sup>&reg;</sup>/<sup>™</sup> Unless otherwise noted, all trademarks are owned by Canadian Tire Corporation, Limited and are used under licence.</span></p>",
    chooseProduct_CanadianTireAgreement_para33          :  "<p><span style=\"font-size: 10pt; \">50378167-F CMAF 0622 • 5354</span></p>",
    chooseProduct_CanadianTireCardAgreementCheckBoxText : "<b>I agree that you can provide me the Canadian Tire Bank Cardmember Agreement for the card that I have applied for by posting it at www.ctfs.com/legalinformation.  I understand that I will receive a paper copy when my card arrives in the mail.</b>",
    chooseProduct_Triangle_reward_Program               : "Triangle Rewards<sup>TM</sup> Program",
    chooseProduct_Triangle_RewardsProgramTnC            : "I agree to the Triangle Rewards Program Terms and Conditions.",
    chooseProduct_TriangleRewardsProgram_para1          : "This page sets out important information about the Triangle Rewards program (the <b>Program</b>) – the program that rewards you with electronic Canadian Tire Money when you shop at participating Canadian Tire<sup>&reg;</sup> stores, on-line at canadiantire.ca and at Canadian Tire gas bars. The Program is made available by Canadian Tire Corporation, Limited (referred to as <b>Canadian Tire</b> or <b>we</b>) on the following terms and conditions.",
    chooseProduct_TriangleRewardsProgram_para2          : "<b>Participating in the Program</b><br> In order to collect and redeem electronic Canadian Tire Money <b>(eCTM<sup>&reg;</sup>),</b> you must become a member (a <b>Member</b>). Membership is open to you if you are an individual, you reside in Canada and you are of the age of majority in the province in which you reside. You can become a Member by <br>(i) completing the registration process online at canadiantire.ca (the <b>Program Website</b>) or <br>(ii) by downloading the Program application to your mobile phone or device (the <b>Program App</b>) which you can receive information on by calling Program customer service at 1-800-226-8473 or by visiting the Program Website, or <br>(iii) by applying for a credit card issued by Canadian Tire Bank that is designated as being linked to the Program or by being issued a debit card connected to a bank account from Canadian Tire Bank that is designated as being linked to the Program (a <b>Program Payment Card),</b> or <br>(iv) by calling customer service at 1-800-226-8473 after you have picked up a Triangle Rewards Card in store. If you apply for a credit card that is a Program Payment Card and are not approved you will still become a Member of the Triangle Rewards Program if you provided all of the necessary information unless, at time of application for such credit card, you were advised that you would have to enroll separately in the Triangle Rewards Program in the event your credit card application was declined or unless we otherwise notify you in writing.",
 	chooseProduct_TriangleRewardsProgram_para3          : "<b>Triangle Rewards Cards</b><br> Each Member may receive a Triangle Rewards Program card (a <b>Triangle Rewards Card</b>) that is linked to a <b>Triangle Rewards Account.</b> Your eCTM will be stored in that account. If you do not receive a Triangle Rewards Card you will need to use a <b>Cardless Method</b> (see below) when you collect or redeem eCTM. Any Program Payment Cards that are issued to a Member will also be linked to that Member’s Triangle Rewards Account. If a Member has multiple Program Payment Cards they cannot be linked to the same Triangle Rewards Account. A Member can request the issuance of additional Triangle Rewards Cards that have the same account number as that Member’s Triangle Rewards Account.",
	chooseProduct_TriangleRewardsProgram_para4          : "<b>Collecting electronic Canadian Tire Money</b> <br>eCTM can be collected when you purchase <b>Eligible Merchandise</b> (see below) at participating Canadian Tire stores or on-line at canadiantire.ca (or such other web site as may be designated by Canadian Tire from time to time). eCTM is calculated on the pre-tax, purchase amount (or eligible portion thereof) and is rounded to the nearest cent. To collect eCTM you must present a Triangle Rewards Card (or use a <b>Cardless Method</b> described below). You can also collect eCTM on that portion of a purchase charged to a Program Payment Card. The Program Payment Card must be linked to a Triangle Rewards Account at the time the purchase is made in order to collect eCTM. eCTM can also be collected when you purchase fuel (gasoline or diesel) at participating Canadian Tire gas bars and present a Triangle Rewards Card (or use a Cardless Method described below) and use a qualifying form of tender or if you pay for the purchase with a Program Payment Card. The amount of eCTM collected on fuel purchases depends on the number of litres purchased. A minimum fuel purchase may be required before eCTM can be collected. The rate of collection may vary from time to time and by location and by type of tender used for payment so check at your local Canadian Tire gas bar. eCTM can only be collected at Canadian Tire gas bars on fuel purchases. You can also collect eCTM on purchases that you make at other merchants that are charged to a Program Payment Card. eCTM that you collect at other merchants will also be rounded to the nearest cent until March 31, 2021 after which it will be rounded down to the nearest cent. The rate at which eCTM can be collected may vary from time to time and by location and is subject to change by Canadian Tire without notice. In addition, you may collect eCTM at a different rate if you pay with a Program Payment Card than you would if you use a Triangle Rewards Card (or <b>Cardless Method</b>) or based on the type of Program Payment Card that you use. Please call 1-800-226-8473 for current rates. When shopping at Canadian Tire stores or gas bars, if you forget your Triangle Rewards Card or choose not to use it, you may still be able to collect eCTM on a qualifying purchase if you provide the telephone number that you gave when you enrolled as a Member or you scan at a compatible point of sale device your mobile phone or other mobile device on which you have downloaded the Program App (each of these is a <b>Cardless Method</b>). Purchases made in a foreign currency with a Program Payment Card are first converted into Canadian currency (as set out in the cardmember agreement) prior to calculating the amount of eCTM that you have collected. eCTM can only be collected on one Triangle Rewards Account for each purchase transaction. If you use a Triangle Rewards Card or Cardless Method, it must be swiped or scanned or your phone number provided, as the case may be, before you make your purchase. When shopping online at canadiantire.ca (or other website as designated by Canadian Tire), you must enter your Triangle Rewards Account number at check out to collect eCTM. Members are also eligible to collect bonus eCTM, or to collect eCTM at a promotional rate offered from time to time on the purchase of select items, upon the occurrence of certain events or as part of a promotion or offer, but unless otherwise indicated, bonus eCTM or eCTM awarded at a promotional rate is awarded only once for a transaction, or for the occurrence of an event, as the case may be. You cannot use a Triangle Rewards Card (or Cardless Method) together with a Program Payment Card. If you charge a purchase to a Program Payment Card, you will only earn eCTM at the applicable Program Payment Card rate then in effect, even if you also present your Triangle Rewards Card (or Cardless Method). However, if you redeem eCTM to pay for part of a transaction and pay for the balance of the transaction with a Program Payment Card that is linked to a different Triangle Rewards Account than the account from which the redemption is occurring, all eCTM collected in respect of that transaction will be credited to the Triangle Rewards Account from which redemption is occurring. You will not be able to collect eCTM on that portion of a transaction in respect of which you redeemed eCTM. However, we may, from time to time and at our discretion, have special offers or promotions that would allow you to collect eCTM on that portion of a transaction in respect of which you redeemed eCTM. If you use more than one Program Payment Card to make a purchase (e.g. split the cost between two or more cards), all eCTM collected on that purchase will be credited only to the Triangle Rewards Account linked to the first Program Payment Card that is presented. If you make payment using a Program Payment Card in combination with some other form of tender, only that portion of the purchase charged to the Program Payment Card will earn eCTM at the then applicable Program Payment Card rate. That portion of the purchases made with the other form of tender may be eligible to earn eCTM at a different rate. Delays may occur in recording eCTM to a Triangle Rewards Account. You cannot collect paper Canadian Tire Money<sup>&reg;</sup> and eCTM on the same transaction.",
	chooseProduct_TriangleRewardsProgram_para5          : "<b>If you are the holder of a Program Payment Card and you fail to keep your credit card account, or bank account to which your debit card is linked, in good standing, any eCTM that you might have collected as a result of transactions with that Program Payment Card, may, in Canadian Tire’s sole discretion, be cancelled.</b><br><br><b>Eligible Merchandise</b><br> All merchandise sold at Canadian Tire stores, or on-line at canadiantire.ca, is <b>Eligible Merchandise</b> <U>except the following: </U>gift cards, lottery tickets, hunting and fishing licences, tire disposal fees, tire taxes, Rug Doctor<sup>&reg;</sup> rental charges, refundable deposits, environmental fees, repair charges, delivery or assembly charges, other store services (other than automobile service), inter-store sales, other store labour (other than labour for automobile repairs), donations at a discount, house account charges, towing charges, prepaid cards, phone cards, tobacco products or alcohol, Pit Stop<sup>&reg;</sup>  parts/labour charges, Canadian Tire Roadside Assistance<sup>&reg;</sup>  memberships that are purchased over the phone or on-line, premiums for credit card balance insurance or for insurance or extended warranties on items purchased with a Canadian Tire branded credit card, premiums for other Canadian Tire branded insurance products, cash advances, transactions using a convenience cheque, balance transfers and other cash transactions, any fees charged on a Program Payment Card, payments made to a credit card account, the value of any part or item traded-in in connection with a purchase, any item that we are legally precluded from awarding eCTM in respect of and such other goods or services as we may determine from time to time in our sole discretion. In addition, individual Canadian Tire stores may exclude additional items sold in that store from being Eligible Merchandise. We reserve the right, at any time without notice, to change what constitutes Eligible Merchandise.",
	chooseProduct_TriangleRewardsProgram_para6          : "<b>Redeeming electronic Canadian Tire Money</b><br> eCTM can only be redeemed for merchandise (including applicable taxes) at participating Canadian Tire stores or at other locations designated by Canadian Tire. eCTM cannot be redeemed for alcohol, tobacco, gift cards, pre-paid cards, other stored value cards or products, items that we designate on the Program Website and those items which the law does not permit to be purchased this way, or used to make a payment on any Canadian Tire Bank issued credit cards or on loans or for financial or insurance products or in respect of fees or overdraft on any Canadian Tire Bank provided bank account. To redeem your eCTM you must present your Triangle Rewards Card (or Cardless Method) or Program Payment Card to the cashier with your purchase. Please note that in some Canadian Tire stores it may not be possible to simply provide your phone number when redeeming eCTM; presentation of your Triangle Rewards Card or Program Payment Card or scanning of the Program App may be required instead. eCTM can be used in combination with paper Canadian Tire Money and/or in combination with any other form of tender. eCTM collected on a purchase transaction cannot be redeemed on the same transaction. You may not redeem eCTM from more than one Triangle Rewards Account for the same transaction. You must have enrolled in the Program, or have activated your Program Payment Card, in order to redeem eCTM.",
	chooseProduct_TriangleRewardsProgram_para7          : "<b>What Happens When an Item is Returned?</b><br> If you return an item for a refund and had received eCTM when you purchased such item, such amount of eCTM will be deducted from your Triangle Rewards Account. Merchandise that was purchased either in whole or in part by redeeming eCTM may not be returned for cash, rather, the connected Triangle Rewards Account will be credited with the same amount of eCTM used to make the original purchase.",
    chooseProduct_TriangleRewardsProgram_para8          : "<b>Expiration of Electronic Canadian Tire Money</b><br> We may expire the eCTM in your Triangle Rewards Account in the event that there has been a period of inactivity of 18 months or more. For the purposes of this section, &#34;inactivity&#34; means that there has been neither a transaction in which you have collected eCTM, nor a transaction in which you have redeemed eCTM during the period in question.",
 	chooseProduct_TriangleRewardsProgram_para9          : "<b>Termination of Membership and Cancellation of the Program</b><br> Membership may be terminated by Canadian Tire if any of the following events occur: <br>(A) the Member has failed to comply with any of these terms and conditions, or Canadian Tire determines that the Member has abused the Program or has made any misrepresentation or false statement to Canadian Tire; <br>(B) the Member dies; <br>(C) the Member becomes bankrupt or insolvent or any bankruptcy or insolvency proceedings are commenced by or against the Member, <br>(D) the Member is charged with a &#8220;designated offence&#8221; (as defined in the Criminal Code (Canada)), <br>(E) the Member’s Program Payment Card is terminated by Canadian Tire Bank, or <br>(F) Canadian Tire suspects the Member of any fraudulent activity in connection with the Program or the use of a Program Payment Card. A Member may choose to cancel his or her membership by written notice sent to the address below or by calling Program customer service.<br><br><U>Termination or cancellation of membership in the Program will result in the immediate closing of the Member’s Triangle Rewards Account and the cancellation of all eCTM in such Triangle Rewards Account without any compensation or other liability to the Member. Termination of a Member’s Triangle Rewards Account will also result in the Member no longer being able to use a Program Payment Card linked to the Program.</U><br><br>Canadian Tire may, in its sole discretion and at any time without prior notice either (i) cancel the Program or (ii) except if you are a Member residing in Quebec, Ontario or such other province where prohibited by law, establish a date upon which eCTM will expire and may no longer be used.",
	chooseProduct_TriangleRewardsProgram_para10         : "<b>Merging Triangle Rewards Accounts</b><br> At Canadian Tire’s discretion, Members may be able to merge their Triangle Rewards Accounts into a single account. That merged account will bear the Triangle Rewards Account number of one of the accounts being merged and one Member will be designated as the holder of that account with full power and authority to deal with the account, including closing it, and will become the “Member” hereunder. All Members wishing to merge their Triangle Rewards Accounts will need to consent to the merger and agree on which account number will be designated as the number for the newly merged Triangle Rewards Account and who the accountholder will be. All remaining Triangle Rewards Account numbers will be cancelled and the persons who are not designated as the accountholder will no longer be Members in the Program.",
	chooseProduct_TriangleRewardsProgram_para11         : "<b>Donating electronic Canadian Tire Money</b><br> Members may be able to donate their eCTM to select charities or community groups. Please visit the Program Website for details about donating eCTM.",
	chooseProduct_TriangleRewardsProgram_para12         : "<b>Lost or Stolen Triangle Rewards Cards</b><br> If a Triangle Rewards Card is lost, stolen or destroyed, Canadian Tire will issue a new card on presentation of proper identification, and the balance in the Member’s Triangle Rewards Account will be transferred to a new Triangle Rewards Account. Canadian Tire assumes no responsibility if eCTM has been used by anyone who presents a lost or stolen Triangle Rewards Card, Cardless Method or Program Payment Card before Canadian Tire is notified of such loss or theft.",
	chooseProduct_TriangleRewardsProgram_para13         : "<b>Partner Locations</b><br> We may, from time to time, designate certain other merchants as locations at which you can collect or redeem eCTM (a Partner). The names of Partners, the rates at which eCTM can be collected and redeemed and any items that will not be considered eligible for collecting eCTM or in respect of which you will not be able to redeem eCTM will be designated by us and will be posted on the Program Website and may be amended by us from time to time. eCTM that you collect at a Partner may not be recorded, or, if recorded, may be cancelled or may not be redeemed by us if that Partner does not provide all necessary information to us, if we cannot confirm that the eCTM was properly collected, or if that Partner is in default under its agreement with us respecting the eCTM. If you redeem eCTM at a Partner we are not responsible for any loss, damage, injury, death or expense as a result of any item or service you acquired at such Partner.",
    chooseProduct_TriangleRewardsProgram_para14         : "<b>General</b><br> e-CTM is not exchangeable and cannot be redeemed for cash or made subject to any security interest. eCTM cannot be transferred from a Member to any other Member or other person without the consent of Canadian Tire. These terms and conditions, as amended by Canadian Tire from time to time, constitute the entire agreement between the Member and Canadian Tire with respect to eCTM. On occasion, Canadian Tire, our various businesses within the Canadian Tire family of companies and any Partners may communicate special offers, information and services to Members by email, text message (standard text messaging and data rates may apply) or other communication preferences selected by you using the contact information you have provided. Any Member who does not wish to receive these offers may so indicate on the Program Website or by calling Program customer service at 1-800-226-8473. Please note that even if you have opted out of receiving marketing communications, we may still contact you for the purposes of administering your account and sending you transactional or operational messages. Any waiver by Canadian Tire of any of these terms and conditions at any time does not mean that Canadian Tire cannot rely on these terms and conditions at any subsequent time. No delay or omission by Canadian Tire in exercising any right or remedy hereunder shall operate as waiver thereof or of any other right or remedy. All Triangle Rewards Cards remain the sole property of Canadian Tire and, if requested by Canadian Tire, must be returned to Canadian Tire upon the cancellation of a Member’s membership in the Program. The Member is responsible for informing Canadian Tire of any change to his or her personal information (e.g. name, address, email, etc.), by visiting the Program Website or by calling Program customer service. Canadian Tire reserves the right to terminate a Member’s participation in the Program or to block a Member’s ability to use the Member’s eCTM if Canadian Tire has inaccurate or incomplete information respecting the Member. Enrolment in the Program constitutes acceptance of these terms and conditions and each applicant for membership in the Program consents to the collection and use of personal information in accordance with the Canadian Tire Privacy Charter, as amended from time to time. If any provision of these terms and conditions is invalid or unenforceable, such provision will not affect the validity and enforceability of any of the remaining terms and conditions. Participants are responsible for any taxes, duties or other charges associated with their participation in the Program. Any written notice to Canadian Tire may be sent by ordinary mail to:<br> Triangle Rewards Program<br> PO BOX 2000, Station Main<br> Welland, ON<br> L3B 5S3<br> We may cancel any eCTM that has not been properly issued or that we believe has been issued due to fraudulent conduct or conduct that is inconsistent with these terms and conditions or the spirit of the Program.",
 	chooseProduct_TriangleRewardsProgram_para15         : "<b>For Members resident outside of Quebec only:</b><br> Canadian Tire may amend these terms and conditions at any time without notice. The version of the terms and conditions that is posted from time to time on the Program Website will govern the Program. These terms and conditions are governed by the laws of Ontario and the federal laws of Canada applicable in Ontario.",
	chooseProduct_TriangleRewardsProgram_para16         : "<b>For Members resident in Quebec only:</b> Canadian Tire may unilaterally amend any of these terms and conditions and, subject to the following paragraph, the version of the terms and conditions that is posted from time to time on the Program Website will govern the Program. You will be provided with written notice of any amendment to these terms and conditions (setting out the new clause only or the amended clause and how it read formerly and the date that the amendment will take effect) at least 60 days, but not more than 90 days, before it is to take effect. Upon receipt of the notice, you may choose to reject the amendment and rescind these terms and conditions. These terms and conditions are governed by the laws of Quebec and the federal laws of Canada applicable in Quebec. It is your express wish that these Program terms and conditions be written in the English language. C’est à votre demande expresse que les modalités du Programme sont rédigées en anglais.",
	//------------------ VZE- 108 Ends -----------------------
	chooseProduct_ApplyNow_Button_Label					:	"START APPLICATION",
	//US4495
	chooseProduct_ApplyNow_Button_Label_with_testprint  :	"START APPLICATION / TEST PRINT",
	
	chooseProduct_ReadTandC								:	"Read Terms and Conditions",
	
	chooseProduct_HandoutTabToCustomerDialogContent		:	"Please provide the tablet to the customer to begin their application.",
	chooseProduct_HandoutTabToCustomerDialogCancel		:	"CANCEL",
	chooseProduct_HandoutTabToCustomerDialogOk			:	"OK",
	
	chooseProduct_DialogContent							:	"You are about to apply for a Canadian Tire Mastercard",
	chooseProduct_DialogContent1						:	"If you already have a Canadian Tire Bank Mastercard and are approved for this credit card, this will be a new account. ",
	chooseProduct_DialogContent2						:	"Submitting this application will lead to a credit check.",
	chooseProduct_DialogCancel							:	"CANCEL",
	chooseProduct_DialogProceed							:	"PROCEED",
	
	// US3981
	chooseProductScreen_Handoutprompts_Title			:	"Confirmation",
	chooseProductScreen_Handoutprompts_YesNo_Message	:	"Have you given the applicant the Legal Information Handout?",
	chooseProductScreen_Handoutprompts_Ok_Message		:	"All applicants must be given a Legal Information Handout before proceeding.",

    overview_CostOfCreditDisclosure_MainTitle           :   "Please read the information below and click 'Start Application' to continue.",
    overview_CostOfCreditDisclosure_Title           :   "Cost of Credit Disclosure for Credit Card Applications",
    overview_CostOfCreditDisclosure_Left1           :   "Annual Interest Rate",
    
    // Old line
    // overview_CostOfCreditDisclosure_Right1      :   "<p>These interest rates will be in effect on the day your account is opened: <br><br>All charges to your account (excluding cash advances and related fees) - <strong>19.99%</strong></p> <p>Cash advances and related fees - <strong>21.99%</strong></p> <p>If you are not approved for a card at the above rates, Canadian Tire Bank may still issue you a card at an annual interest rate of - <strong>25.99%</strong> for all charges (excluding cash advances and related fees) and <strong>27.99%</strong> for cash advances and related fees.</p>",
    overview_CostOfCreditDisclosure_Right1      :   "<p>These interest rates will be in effect on the day your account is opened:</p>"+ 
"<p><b>If you reside outside of Quebec:</b></p><p>All charges to your account (excluding cash transactions and related fees) - <strong>19.99%</strong></p>"+
"<p>Cash transactions (for example: cash advances, balance transfers, convenience cheques, money transfers, purchase of travellers cheques and gambling transactions) and related fees - <strong>22.99%</strong></p> <p><b>For the Triangle Mastercard only:</b> If you are not approved for a card at the above rates, Canadian Tire Bank may still issue you a card at the following annual interest rates: <strong>25.99%</strong> for all charges (excluding cash transactions and related fees) and <strong>27.99%</strong> for cash transactions and related fees.</p>"+
 "<p><b>If you are a resident of Quebec:</b></p><p>All charges to your account (excluding cash transactions and related fees) - <strong>19.99%</strong></p> <p>Cash transactions and related fees- <strong>21.99%</strong></p>"+ 
"<p><b>For the Triangle Mastercard only:</b> If you are not approved for a card at the above rates, Canadian Tire Bank may still issue you a card at the following annual interest rate: <strong>21.99%</strong> for all charges.</p>",
    overview_CostOfCreditDisclosure_ChooseProduct_Right1     :   "<p>These interest rates will be in effect on the day your account is opened:</p>"+ 
    															 "<p><strong>If you reside outside of Quebec: </strong></p>"+
    															 "<p>All charges to your account (excluding cash transactions and related fees) - <strong>20.99%</strong></p> <p>Cash transactions (for example: cash advances, balance transfers, convenience cheques, money transfers, purchase of travellers cheques and gambling transactions) and related fees - <strong>22.99%</strong></p> <p><strong>For the Gas Advantage Mastercard only:</strong> If you are not approved for a card at the above rates, Canadian Tire Bank may still issue you a card at the following annual interest rates: <strong>25.99%</strong> for all charges (excluding cash transactions and related fees) and <strong>27.99%</strong> for cash transactions and related fees.</p><p><strong>If you are a resident of Quebec:</strong></p><p>All charges to your account (excluding cash transactions and related fees) - <strong>20.99%</strong></p> <p>Cash transactions and related fees- <strong>21.99%</strong></p><p><strong>For the Gas Advantage Mastercard only:</strong> If you are not approved for a card at the above rates, Canadian Tire Bank may still issue you a card at the following annual interest rate: <strong>21.99%</strong> for all charges.</p>",

    overview_CostOfCreditDisclosure_ChooseProduct_Right1_OMX	:	"<p>These interest rates will be in effect on the day your account is opened:</p> <p><b>If you reside outside of Quebec:</b></p><p>All charges to your account (excluding cash transactions and related fees) - <span style=\"font-size: 12pt; font-weight: bold;\";><strong>20.99%</strong></span></p><p>Cash transactions (for example: cash advances, balance transfers, convenience cheques, money transfers, purchase of travellers cheques and gambling transactions) and related fees - <span style=\"font-size: 12pt; font-weight: bold;\";><strong>22.99%</strong></span></p><p><b>For the Triangle Mastercard only:</b> If you are not approved for a card at the above rates, Canadian Tire Bank may still issue you a card at the following annual interest rates: <span style=\"font-size: 12pt; font-weight: bold;\";><strong>25.99%</strong></span> for all charges (excluding cash transactions and related fees) and <span style=\"font-size: 12pt; font-weight: bold;\";><strong>27.99%</strong></span> for cash transactions and related fees.</p><p><b>If you are a resident of Quebec:</b></p><p>All charges to your account (excluding cash transactions and related fees) - <span style=\"font-size: 12pt; font-weight: bold;\";><strong>20.99%</strong></span></p><p>Cash transactions and related fees- <span style=\"font-size: 12pt; font-weight: bold;\";><strong>21.99%</strong></span></p> <p><b>For the Triangle Mastercard only:</b> If you are not approved for a card at the above rates, Canadian Tire Bank may still issue you a card at the following annual interest rate: <span style=\"font-size: 12pt; font-weight: bold;\";><strong>21.99%</strong></span> for all charges.</p>",
    overview_CostOfCreditDisclosure_OMZ_Right1  :   "<p>These interest rates will be in effect on the day your account is opened:</p> <p><b>If you reside outside of Quebec:</b></p><p>All charges to your account (excluding cash transactions and related fees) - <strong>19.99%</strong></p> <p>Cash transactions (for example: cash advances, balance transfers, convenience cheques, money transfers, purchase of travellers cheques and gambling transactions) and related fees - <strong>22.99%</strong></p><p><b>If you are a resident of Quebec:</b></p><p>All charges to your account (excluding cash transactions and related fees) - <strong>19.99%</strong></p><p>Cash transactions and related fees- <strong>21.99%</strong></p>",
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
    												"<p></p><strong>Credit Balance Administration Fee:</strong> The lesser of <strong>$2.00</strong> or the amount of your credit balance - Charged on the last day of a billing period when there is a credit balance on the account and the account has been inactive (other than any credit balance fees) for the previous <strong>2</strong> billing periods.</p>",
    overview_AccrualInterest					:	"<b>Accrual of Interest:</b> Interest accrues daily on each charge from the date of the transaction giving rise to the particular charge.",    												
    overview_InterestRates						:	"<p>For residents of Quebec: The credit rates are the annual interest rates specified in the chart above.</p>",
    // US3381
    overview_EffectiveDate						:	"Information effective as of <b>May 31, 2023.</b>",
    
    overview_Triangle_world_ELite_MasterCardNote :	"<b>Please note that the Triangle<sup>&trade;</sup> World Elite Mastercard<sup>&reg;</sup> can impose higher card acceptance costs on merchants.</b>",
    

	contactInfo_Heading1						:  "Contact Information",
	contactInfo_Heading2						:  "What’s your number?",
	contactInfo_PhoneToolTipMsg                 :   "Please ensure you <br> enter a valid <br> phone number",
    
	contactInfo_Heading3						:  "What's your email address? (Optional)",
	contactInfo_Heading4						:  "eStatements (Optional)",
	contactInfo_Heading5						:  "eStatements Terms & Conditions",
	contactInfo_EmailAddress					:	"Email Address",
	contactInfo_Para41							:	"Access, track and store your statements online. eStatements are a faster more convenient way to manage your credit card account while helping to protect the environment. You’ll be notified instantly when your statement is ready so you don’t have to wait for mail delivery. You can change your statement preferences at any time by logging in to your online account.",
	contactInfo_Heading6						:  "Stay in the loop with offers and promotions (Optional)",
	contactInfo_Heading7						:  "Get a $5 CT Money<sup>&reg;</sup> bonus when you sign up for offers. ",
	contactInfo_Para1							:  "All fields required unless marked as optional.",
	contactInfo_Para2							:  "By providing us with your mobile phone number, your chances of instant approval increase and you can add your card to your digital wallet right away!<br><br> "+
													"Please note, we may send you text messages to your mobile phone number for account notices, these messages will be at no cost to you.",
	contactInfo_Para3							:  "Yes, I would like to receive eStatements and have read and agree to the Terms and Conditions.",
	contactInfo_Para3_QC1                           :  "<p>Pour les résidents du Québec, je confirme également avoir reçu et pris connaissance de la version française de Modalités du service des relevés électroniques, du service de relevés électroniques et je souhaite être lié exclusivement par la version anglaise du contrat et recevoir les documents connexes en anglais.</p>",
	contactInfo_Para3_QC2                           :  "<p>For residents of Quebec, I also confirm that I have been provided with and have reviewed the French version of the eStatements Terms & Conditions and wish to be bound exclusively by the English version of the contract and to receive related documents in English.</p>",
	contactInfo_Para3_1							:  "Once your application is approved, we’ll email you. By providing your email address, you’re saying we can keep you updated on your card application.",
	contactInfo_Para3_2							:  "If you want to use a card to make a purchase today, you’ll have to provide your email. Not providing an email means you will have to wait for your card to arrive in the mail.",
	contactInfo_Para51							:  "eStatements Terms & Conditions",
	contactInfo_Para52							:  	"1. You can continue to access your account details through ctfs.com and telephone banking.<br>"+
													"2. It usually takes 1 business day for your request to be processed so, depending on your statement date, you may receive one more paper statement in the mail before your electronic statement is processed.<br>"+
													"3. If you currently receive a paper statement in the mail, it will no longer be mailed to you. As well, notices of change to the information provided in your initial disclosure statement and notices of any amendments to your cardmember agreement, will, in most cases, be sent to you electronically rather than by mail. These notices will appear either as a message on your monthly statement or you will receive notification by email that such notice is available if you log in to Your Online Account.<br>"+
													"4. You will receive email notifications indicating your statement is available. This email notification may also include some information pertaining to your account such as minimum payment and due date. If you are to receive a notice separate from your statement we will send you an email notification that such notice is available. You will be required to log in to your Online Account to view your electronic statement or any separately provided notices. Email notification will be sent to the email address that you have provided to us. If your email address changes (or you have provided an incorrect address) you are responsible for providing us with the updated email address. You may update your email address by logging in to you Online Account and selecting Manage Email Preferences from Settings.<br>"+
													"5. Documents that are provided electronically will be retained and made available to you in My Online Account for 7 years. You are responsible for retaining a copy of any such documents. You can cancel your enrolment and switch back to paper statements and notices of change at any time via My Online Account by selecting “Statement Preferences” from the Card Settings or by calling us toll-free at 1-800-459-6415. However, it's very important that you save or print any electronic documents in your My Online Account prior to cancellation as you will no longer have access to them online once the cancellation has been processed.<br>"+
													"6. Canadian Tire Bank is not liable for any technical issues related to your computer that prevent you from accessing your electronic statement or any notice or other document posted to Your Online Account or receiving any email notification from us.<br>"+
													"7. If there are supplementary cardholders on this account for which you have given access, you understand that all supplementary cardholders will have access to past information on this account, including information on the primary cardholder and other supplementary cardholders.<br>"+
													"8. If a transaction has been processed to your account in error, you must call us at 1-800- 459-6415 within 90 days of the date that the transaction was posted to your account.<br>"+
													"9. Electronic statements, notices and other documents will be in PDF format allowing you to easily print them or save them to your own computer. Adobe Reader is required to view electronic statements. Most versions of Adobe Reader are available at no cost.<br>"+
													"10. If your account falls into arrears by 3 statement periods or more, you will instead receive statements, notices and other documents in paper format. Once your account is brought up-to-date you will then be able to enrol for electronic documents again.<br>"+
													"By selecting the tick box you agree to the terms above and confirm that you now wish to receive your monthly credit card statements, notices of any change to the information provided in your initial disclosure statement and notices of any amendments to your cardmember agreement electronically. If you do not wish to proceed, select the cancel button.<br>"+
													"For more information regarding our privacy policies and how we collect, use and disclose your personal information, please visit our Privacy and Security page.<br>"+
													"Effective as of 04/26/2018<br>",
	contactInfo_Para5							:  "Make the most of your credit card by receiving offers.<br>"+
													" Check the box below to let us know you don't want to miss out!",
	contactInfo_Para6							:  "<i>I consent to receiving commercial electronic messages from Canadian Tire Corporation, Limited, and its affiliates and/or marketing partners, including Canadian Tire Bank and Canadian Tire Services Limited. You may contact us at <b>customerservice@cantire.ca</b> and may unsubscribe at any time. Standard text and data rates may apply.</i><br><br>"+
												   	"<i>If you already receive emails from Canadian Tire or its affiliates, you can ignore this box. Your preferences won’t change.</i><br>",

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
    // VZE-265
    personalData_cityNameLongerThen24CharError_msg      :    "Please enter a city name that is 24 characters or less. If you do not know your abbreviated city name, please use the address search box provided.",

	personalData_FirstName								:	"First Name",
	personalData_Initial								:	"Middle Initial",
	personalData_LastName								:	"Last Name",
	personalData_DateOfBirth							:	"Date of Birth",
	personalData_EmailAddress							:	"Email Address",
	personalData_EmailConsentText						:	"You may receive offers, promotions, contests, giveaways,  events, coupons and other information about products and services that may be of interest to you by email, text message (standard text messaging and data rates may apply) and other electronic messaging from Canadian Tire Corporation, Limited (“CTC”), Canadian Tire Services Limited (“CTS”), and Canadian Tire Bank (“CTB”), including from their respective business units operating under the Canadian Tire,  Triangle Rewards™ Program, Canadian Tire Drivers Academy®, Canadian Tire Home Services®, and Canadian Tire Roadside Assistance® brands, as well as from their other affiliates and/or marketing partners? You may contact CTC-CTS-CTB, at P.O. Box 2000 Welland, ON L3B 5S3 or <a href='' target='_blank'>customerservice@canadiantire.ca.</a>. You may withdraw your consent at any time.<br><br>&nbsp&nbspPlease respond yes or no to receiving such electronic messaging.<br><br>",
	personalData_HomePhone								:	"Home Phone",
	personalData_CellPhone								:	"Cellular Phone<sup>*</sup>",
	
	mobilePayment_HandoutTabToRepDialogContent	  	    :	"Please return the tablet to your store representative to review your application.",
	mobilePayment_HandoutTabToRepDialogCancel	  	    :	"CANCEL",
	mobilePayment_HandoutTabToRepDialogOk		  	    :	"OK",
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
	
	personalData_AddressConfirmation_Title				:	"Address Confirmation",
	personalData_AddressNotFound_Title					:	"Address Cannot be Found",
	personalData_AddressNotFound_Message				:	"Your address scanned as:",
	personalData_AddressScannedAs						:	"Your address scanned as:",
	personalData_CanadaPostNotFindAddress				:	"Canada Post could not find your address. Please enter your address manually.",
	personalData_AddressCanadaPostFormat				:	"Canada Post Recommended Format:",
	personalData_AddressAccept							:	"Accept",
	personalData_AddressContinue						:	"Continue with Scanned Address",
	canadaPostMessageDialog_ok 						: 	"Ok",
	personalData_AddressInformation						:	"ADDRESS INFORMATION",
	personalData_Address_PostalCode						:	"Postal Code",
	personalData_Address_StreetNumber					:	"Street Number",
	personalData_Address_Button_Label					:	"FIND ADDRESS",
    personalData_Scan_Id_Label                          :   "Scan Driver's Licence",
    scanID_parsingErrorText								: 	"ID type not supported. Please enter data manually",
        
	personalData_Address_AddressLine1					:	"Street Name",
	personalData_Address_AddressLine2					:	"Address Line 2",
	personalData_Address_SuiteUnit						:	"Apt # / Suite / Unit",
	personalData_Address_City							:	"City",
	personalData_Address_Province						:	"Province",


	personalData_Address_ResidenceType					:	"Home Type",
	personalData_Address_Own							:	"Own",
	personalData_Address_Rent							:	"Rent",
	personalData_Address_Parents						:	"Live with Parents",
	// US5131 WICI - Add Student Housing label to Residence Type list
	personalData_Address_Student                        :   "Student Housing",
	personalData_Address_Other							:	"Other",

	personalData_Address_MonthlyPayment				:	"Mortgage & Rent Payment (per month)",
	personalData_Address_Duration						:	"How long have you lived at your current address?",
	personalData_Address_DurationYears					:	"Years",
	personalData_Address_DurationMonths				:	"Months",
	
	// US3623
	personalData_PreviousAddressWasInCanada				:	"Was your previous address in Canada?",
	personalData_PreviousAddress_Title					:	"Previous address only required",
	personalData_PreviousAddress_Description			:	" if less than 2 years at current address",

    // VZE-52
	pesonalData_covid19LockDownYear                    : "2020",
	pesonalData_covid19LockDownMonth                    : "03",
	pesonalData_covid19LockDownDay                    : "01",
	
	// VZE-492
	personalData_ExpiryDate_validation_ON_OFF         : "false",
	// VZE-492
	
	// VZE-161
	ExpiryDateMonth_null                              :   'Month',
	ExpiryDateMonth_JA                                :   'January',
	ExpiryDateMonth_FE                                :   'February',
	ExpiryDateMonth_MR                                :   'March',
	ExpiryDateMonth_AL                                :   'April',
	ExpiryDateMonth_MA                                :   'May',
	ExpiryDateMonth_JN                                :   'June',
	ExpiryDateMonth_JL                                :   'July',
	ExpiryDateMonth_AU                                :   'August',
	ExpiryDateMonth_SE                                :   'September',
	ExpiryDateMonth_OC                                :   'October',
	ExpiryDateMonth_NO                                :   'November',
	ExpiryDateMonth_DE                                :   'December',
	
	ExpiryDateDay_null                                :   'Day',
	ExpiryDateYear_null                               :   'Year',
	expiryDate_error_title                            :   'Are you sure?',
	expiryDate_error_message                          :   'Please ensure that your ID Expiry Date is accurate.',
	expiryDate_continue_button                        :   'CONTINUE',
	expiryDate_cancel_button                          :   'CANCEL',

	personalData_PreviousAddress_PostalCode			:	"Postal Code*",
	personalData_PreviousAddress_StreetNumber			:	"Street Number",

	personalData_PreviousAddress_Button_Label			:	"FIND ADDRESS",

	 personalData_PreviousAddress_AddressLine1            :    "Mailing Address Line 1*",
    personalData_PreviousAddress_AddressLine2            :    "Mailing Address Line 2",
    personalData_PreviousAddress_SuiteUnit                :    "Unit #",
    personalData_PreviousAddress_City                    :    "City*",
    personalData_PreviousAddress_Province                :    "Province*",
	// US5414 
	chooseProductScreen_LegalHandout_PleaseSign         :   "Please sign",
	chooseProductScreen_LegalHandout_Message            :   "I verify that I have provided the applicant the Legal Information Handout.",
	
	// US3623
	personalData_PreviousAddress_NotInCanada			:	"Previous address is not in Canada:",

	personalData_Note									:	"Please note, we may send you text messages to your mobile phone number for  account notices, these messages will be at no cost to you.",
	receiveEmail_Text									:	"<i>Yes, I would like to receive details on exclusive offers and events</i>",
	receiveEmail_TextAreaText_1							:	"I consent to receiving commercial electronic messages from Canadian Tire Corporation, Limited, and its affiliates and/or marketing partners, including Canadian Tire Bank and Canadian Tire Services Limited.  You may contact us at  customerservice@cantire.ca and may unsubscribe at any time.  Standard text and data rates may apply.",
	receiveEmail_TextAreaText_2							:	"If you already receive emails from Canadian Tire or its affiliates, you can ignore this box.  Your preferences won't change.",
	receiveEstmt_Text									:	"<i>Yes, I would like to receive eStatements</i>",
	receiveEstmt_TextAreaText							:	"<p><b>Electronic Statement Terms and Conditions</b></p>"
	                                                         +"<p>1. You can continue to access your account details through ctfs.com and telephone banking.</p>" 
			                                                 +"<p>2. It usually takes 1 business day for your request to be processed so, depending on your statement date, you may receive one more paper statement in the mail before your electronic statement is processed.</p>"
	                                                         +"<p>3. If you currently receive a paper statement in the mail, it will no longer be mailed to you. As well, notices of change to the information provided in your initial disclosure statement and notices of any amendments to your cardmember agreement, will, in most cases, be sent to you electronically rather than by mail. These notices will appear either as a message on your monthly statement or you will receive notification by email that such notice is available if you log in to My Online Account.</p>"
			                                                 +"<p>4. You will receive email notifications indicating your statement is available. If you are to receive a notice separate from your statement we will send you an email notification that such notice is available. You will be required to log in to My Online Account to view your electronic statement or any separately provided notices. Email notification will be sent to the email address that you have provided to us. If your email address changes (or you have provided an incorrect address) you are responsible for providing us with the updated email address. You may update your email address by logging in to My Online Account and selecting Manage Email Preferences from Settings.</p>"
	                                                         +"<p>5. Documents that are provided electronically will be retained and made available to you in My Online Account for 7 years. You are responsible for retaining a copy of any such documents. You can cancel your enrolment and switch back to paper statements and notices of change at any time via My Online Account by selecting &#147;Change statement options&#148; from the main landing menu or by calling us toll-free at 1-800-459-6415. However, it's very important that you save or print any electronic documents in your My Online Account prior to cancellation as you will no longer have access to them online once the cancellation has been processed.</p>"
			                                                 +"<p>6. Canadian Tire Bank is not liable for any technical issues related to your computer that prevent you from accessing your electronic statement or any notice or other document posted to My Online Account or receiving any email notification from us.</p>"
	                                                         +"<p>7. If there are supplementary cardholders on this account for which you have given access, you understand that all supplementary cardholders will have access to past information on this account, including information on the primary cardholder and other supplementary cardholders.</p>"
			                                                 +"<p>8. If a transaction has been processed to your account in error, you must call us at 1-800- 459-6415 within 90 days of the date that the transaction was posted to your account.</p>"
	                                                         +"<p>9. Electronic statements, notices and other documents will be in PDF format allowing you to easily print them or save them to your own computer. Adobe Reader is required to view electronic statements. Most versions of Adobe Reader are available at no cost.</p>"
			                                                 +"<p>10. If your account falls into arrears by 3 statement periods or more, you will instead receive statements, notices and other documents in paper format. Once your account is brought up-to-date you will then be able to enrol for electronic documents again.</p>"
			                                                 +"<p>By selecting the tick box you agree to the terms above and confirm that you now wish to receive your monthly credit card statements, notices of any change to the information provided in your initial disclosure statement and notices of any amendments to your cardmember agreement electronically. If you do not wish to proceed, select the cancel button.</p>"
			                                                 +"<p>For more information regarding our privacy policies and how we collect, use and disclose your personal information, please visit our <a href='https://ctfs.com/content/ctfs/en/legal_privacy.html' target='_blank'>Privacy Communication.</a></p><p>Effective as of 11/07/2017</p>",

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
	finEmpInfo_PartTime25hrsOrMore						:	"Part Time - 25 Hours or More",
	finEmpInfo_PartTimeLessThan25hrs					:	"Part Time - Less than 25 Hours",
	finEmpInfo_Seasonal									:	"Seasonal/Contract/Temporary",
	finEmpInfo_Homemaker							    :	"Homemaker",
	finEmpInfo_Retired									:	"Retired",
	finEmpInfo_Unemployed								:	"Unemployed",
	finEmpInfoJobDesc_Other                             :   "Other",

	// US3621
	finEmpInfo_JobTitleOther							:	"Job Description (Other)",
	
	finEmpInfo_JobDescription							:	"Job Description",
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

	supCardRequest_WouldYouLikeACard					:	"Yes, please add a supplementary card.",
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
	sigScreen_OMZCard_Note                              :   "<p style='-webkit-margin-before: 0px; -webkit-margin-after: 0px;'><b>Please note the Triangle<sup>&reg;</sup> Mastercard<sup>&reg;</sup> and Triangle<sup>&reg;</sup> World Elite Mastercard<sup>&reg;</sup></p> <p style='-webkit-margin-before: 0px; -webkit-margin-after: 0px;'>have the same fees, grace period and minimum payment formula.</b></p>",
	
	sigScreen_WorldEliteCard_text                       :	"<p style='-webkit-margin-before: 0em; -webkit-margin-after: 0.3em; webkit-margin-start: 1em; '><strong>I would like to switch my <br> application to the Triangle<sup>&trade;</sup><br>World Elite Mastercard.<sup>&reg;</sup></strong></p>",
	sigScreen_WorldEliteCard_text1                       :	"<strong>application to the Triangle<sup>&trade;</sup></strong> <br>",
	sigScreen_WorldEliteCard_text2                       :	" <strong>World Elite Mastercard.<sup>&reg;</sup><strong><br>",
	sigScreen_WorldEliteCard_Note_text                   :	"<strong> Consider if:</strong> <br><br>",
	sigScreen_WorldEliteCard_Note_text1                   :	" You have excellent credit <br><br>",
	sigScreen_WorldEliteCard_Note_text2                   :	" You meet the minimum <br> ",
	sigScreen_WorldEliteCard_Note_text3                   :	" income requirement<br>",
	sigScreen_WorldEliteCard_Note_text4                   :  " ",
    sigScreen_TriangleCard_text                         :   "<p><strong>I'll stick with the</strong> <br>Triangle<sup>&reg;</sup> Mastercard<sup>&reg;</sup><br></p>", 
    sigScreen_TriangleCard_text1                        :   "Triangle<sup>&reg;</sup> Mastercard<sup>&reg;</sup>",

	ProvincesList_null									:	'Please select...',
    IdTypesList_null									:	'Please select...',
	// US4078
    IdTypesList_DR										:   'DRIVER\'S LICENCE',
    IdTypesList_HE										:   'HEALTH CARD',
    IdTypesList_PR										:   'PERMANENT RESIDENT CARD',
    IdTypesList_BI										:   'BIRTH CERTIFICATE',
    IdTypesList_CI										:   'CANADIAN CITIZENSHIP CERTIFICATE',
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

	optionalProducts_UseCaseThreeDialogContentCPC		:	"Based on your changes, you are eligible for Triangle<sup>&reg;</sup> Credit Protector Complete<sup>TM</sup>. This plan will be presented to you on the next page.",
	optionalProducts_UseCaseThreeDialogContentCPLD		:	"Based on your changes, you are eligible for Triangle<sup>&reg;</sup> Credit Protector Life & Disability<sup>TM</sup>. This plan will be presented to you on the next page.",
	optionalProducts_UseCaseThreeDialogOk				:	"OK",
	
	optionalProducts_Proceed							: 	"PROCEED TO CONFIRMATION",
	optionalProducts_PageTitle						    :	"Here is an optional product<span class=\"optionaProduct_header_sup\">&#8224;&#8224;</span> available for <br>Your Canadian Tire Bank issued credit card",

	// Old line
	// optionalProducts_SignatureAgreement1				:	"<i>I understand the(se) optional product(s) is(are) being offered separately from the Canadian Tire branded Mastercard and that they are not required to obtain the Canadian Tire branded Mastercard. I understand the optional product(s) I select will only be provided if I sign and thereby agree to the cost disclosed. If I have applied for a Canadian Tire Mastercard and I am approved, I authorize Canadian Tire Financial Services Limited to charge my Canadian Tire Mastercard account in the amount and time period indicated above. I have read and understand the product details disclosed in the terms and conditions and give my consent to be enrolled in the above selected optional product(s).</i>",
	optionalProducts_SignatureAgreement1				:	"<i>I understand the(se) optional product(s) is(are) being offered separately from the Canadian Tire Bank issued Mastercard and that they are not required to obtain the Canadian Tire Bank issued Mastercard. I understand the optional product(s) I select will only be provided if I sign and thereby agree to the cost disclosed. If I have applied for a Canadian Tire Mastercard and I am approved, I authorize Canadian Tire Financial Services Limited to charge my Canadian Tire Mastercard account in the amount and time period indicated above. I have read and understand the product details disclosed in the terms and conditions and give my consent to be enrolled in the above selected optional product(s).</i>",
	// VZE-87
	optionalProducts_SignatureAgreement_CPC_subTitle			:	"<p>By signing and checking the box below, I agree to enrol in the Optional Product below and I accept the <span style=\"font-size: 13pt;\";><strong>monthly premium of $1.15/$100 of my Average Daily Balance</strong></span> that will be charged to my Canadian Tire Bank issued Mastercard.</p><p>Residents of Quebec: I also confirm that I have been provided with and have reviewed the Summary and Fact Sheet.</p>",
	optionalProducts_SignatureAgreement_CPLD_subTitle			:	"<p>By signing and checking the box below, I agree to enrol in the Optional Product below and I accept the <span style=\"font-size: 13pt;\";><strong>monthly premium of $1.00/$100 of my Average Daily Balance</strong></span> that will be charged to my Canadian Tire Bank issued Mastercard.</p><p>Residents of Quebec: I also confirm that I have been provided with and have reviewed the Summary and Fact Sheet.</p>",

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
	// VZE-87
	optionalProducts_TermsAndConditions_16_CPC			:	"I have read, understood and accept the Summary of Coverage and Declarations for <span style=\"font-size: 13pt;\";><strong>Triangle<sup>&reg;</sup> Credit Protector Complete<sup>&trade;</sup></span></strong> insurance, which includes the Assurant privacy policy. I confirm that I meet the eligibility requirements set out above. For residents of Quebec, I also confirm that I have been provided with and have reviewed the Summary and Fact Sheet.",
	optionalProducts_TermsAndConditions_16_CPC_1		:	"I consent and agree to enrol in the optional <span style=\"font-size: 13pt;\";><strong>Triangle<sup>&reg;</sup> Credit Protector Complete<sup>&trade;</sup></span></strong> insurance plan. I accept $1.15 per $100 of my Average Daily Balance that will be charged to my Canadian Tire Bank issued Mastercard.",
	optionalProducts_TermsAndConditions_16_CPLD			:	"I have read, understood and accept the Summary of Coverage and Declarations for <span style=\"font-size: 13pt;\";><strong>Triangle<sup>&reg;</sup> Credit Protector Life & Disability<sup>&trade;</sup></span></strong> Insurance, which includes the Assurant privacy policy. I confirm that I meet the eligibility requirements set out above. For residents of Quebec, I also confirm that I have been provided with and have reviewed the Summary and Fact Sheet.",
	optionalProducts_TermsAndConditions_16_CPLD_1		:	"I consent and agree to enrol in the optional <span style=\"font-size: 13pt;\";><strong>Triangle<sup>&reg;</sup> Credit Protector Life & Disability<sup>&trade;</sup></span></strong> insurance plan. I accept $1.00 per $100 of my Average Daily Balance that will be charged to my Canadian Tire Bank issued Mastercard.",

	optionalProducts_TermsAndConditions_CPLD_QC_1       : "I have read, understood and accept the Summary of Coverage and Declarations for <span style=\"font-size: 13pt;\";><strong>Triangle<sup>&reg;</sup> Credit Protector Life & Disability<sup>&trade;</sup></span></strong> Insurance, which includes the Assurant privacy policy. I confirm that I meet the eligibility requirements set out above.",
	optionalProducts_TermsAndConditions_CPLD_QC_2       : "Pour les résidents du Québec, je confirme également avoir reçu et pris connaissance de la version française du Sommaire de la couverture et des déclarations de l’assurance Triangle<sup>MD</sup> Couverture-crédit – Assurance-vie et invalidité<sup>MC</sup>, du Sommaire et de la fiche de renseignements et du certificat d’assurance, et je souhaite être lié exclusivement par la version anglaise du ces documents et recevoir les documents connexes en anglais.",
	optionalProducts_TermsAndConditions_CPLD_QC_3       : "For residents of Quebec, I also confirm that I have been provided with and have reviewed the French version of the Summary of Coverage and Declaration of <span style=\"font-size: 13pt;\";><strong>Triangle<sup>&reg;</sup> Credit Protector Life & Disability<sup>&trade;</sup></span></strong> insurance, the Summary and Fact Sheet and Certificate of Insurance and wish to be bound exclusively by the English version of such documents and to receive related Documents in English.",
	optionalProducts_TermsAndConditions_CPLD_QC_4       : "I consent and agree to enrol in the optional <span style=\"font-size: 13pt;\";><strong>Triangle<sup>&reg;</sup> Credit Protector Life & Disability<sup>&trade;</sup></span></strong> insurance plan. I accept $1.00 per $100 of my Average Daily Balance that will be charged to my Canadian Tire Bank issued Mastercard.",
	
	optionalProducts_TermsAndConditions_CPC_QC_1        :    "I have read, understood and accept the Summary of Coverage and Declarations for <span style=\"font-size: 13pt;\";><strong>Triangle<sup>&reg;</sup> Credit Protector Complete<sup>&trade;</sup></span></strong> insurance, which includes the Assurant privacy policy. I confirm that I meet the eligibility requirements set out above.",
	optionalProducts_TermsAndConditions_CPC_QC_2        :    "Pour les résidents du Québec, je confirme également avoir reçu et pris connaissance de la version française du Sommaire de la couverture et des déclarations de l’assurance Triangle<sup>MD</sup> Couverture-crédit – Assurancevie et invalidité<sup>MC</sup>, du Sommaire et de la fiche de renseignements et du certificat d’assurance, et je souhaite être lié exclusivement par la version anglaise du ces documents et recevoir les documents connexes en anglais.",
	optionalProducts_TermsAndConditions_CPC_QC_3        :    "For residents of Quebec, I also confirm that I have been provided with and have reviewed the French version of the Summary of Coverage and Declarations of Triangle<sup>&reg;</sup> Credit Protector Complete<sup>&trade;</sup> insurance, the Summary and Fact Sheet and Certificate of Insurance and wish to be bound exclusively by the English version of such documents and to receive related documents in English.",
	optionalProducts_TermsAndConditions_CPC_QC_4        :    "I consent and agree to enrol in the optional Triangle<sup>&reg;</sup> Credit Protector Complete<sup>&trade;</sup> insurance plan. I accept $1.15 per $100 of my Average Daily Balance that will be charged to my Canadian Tire Bank issued Mastercard.",
    // VZE-87
	optionalProducts_CPC_WarningHeader 					:   "Please read carefully regarding <br>Triangle<sup>&reg;</sup> Credit Protector Complete<sup>&trade;</sup><span style=\"font-size: 19pt;\";><sup>*</sup></span>",
	optionalProducts_CPLD_WarningHeader 				:   "Please read carefully regarding <br>Triangle<sup>&reg;</sup> Credit Protector Life & Disability<sup>&trade;</sup><span style=\"font-size: 19pt;\";><sup>*</sup></span>",
	
	optionalProducts_CPLDProduct						:   "<ul><li><span style=\"font-size: 14pt;\";><strong>Triangle<sup>&reg;</sup> Credit Protector Life & Disability<sup>&trade;</sup></span></strong></ul>",
	optionalProducts_CPCProducts						:   "<ul><li><span style=\"font-size: 14pt;\";><strong>Triangle<sup>&reg;</sup> Credit Protector Complete<sup>&trade;</sup></span></strong></li></ul>",
	
	// US3981
	optionalProductScreen_Handoutprompts_Title			:	"IMPORTANT",
	optionalProductQCYES                                :   "Yes",
	optionalProductQCNO                                 :   "No",
	optionalProductScreen_Handoutprompts_YesNo_Message	:	"The Summary & Fact Sheet must be given to all customers that enrol in any Triangle Credit Protector product while in the province of Quebec. Have you given the applicant the Summary & Fact Sheet?",
	optionalProductScreen_Handoutprompts_Ok_Message		:	"All applicants that enrol in  Credit Protector must be given a Distribution Guide before proceeding.",
	
	//-------US4131 Start --------------
    helpscoverYourCardPaymentFor                        :    "Helps cover your card payments for...",
    OP_CPC_Li_InvoluntaryUnemployment                   :    "Involuntary unemployment",
    OP_CPC_Li_TotalDisability                           :    "Total disability",
    OP_CPC_Li_TerminalIllness                           :    "Terminal illness*",
    OP_CPC_Li_Dismemberment                             :    "Dismemberment or loss of sight, hand or foot*<br/>(at age 80 becomes Accidental Dismemberment)",
    OP_CPC_Li_Life                                      :    "Life* (at age 80 becomes Accidental Death)</br>* Your spouse is also covered by these 3 coverages",
    
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
	jobCategoriesList_DR								: 	'Driver',
	jobCategoriesList_FA								: 	'Factory Worker',
	jobCategoriesList_GU								: 	'Guard/Police',
	jobCategoriesList_IS								: 	'Internship',
	jobCategoriesList_LA								: 	'Labourer',
	jobCategoriesList_MA								: 	'Management',
	jobCategoriesList_MF								: 	'Medical Field',	
	jobCategoriesList_MI								: 	'Military',	
	jobCategoriesList_OF								: 	'Office Worker',
	jobCategoriesList_OT								: 	'Other',	
	jobCategoriesList_OW								: 	'Owner',
	jobCategoriesList_PL								: 	'Parental Leave',
	jobCategoriesList_PR								: 	'Professional',
	jobCategoriesList_RE								: 	'Service/Repair',
	jobCategoriesList_RR								: 	'Retail Representative',
	jobCategoriesList_SB								: 	'Sabbatical',
	jobCategoriesList_SA								: 	'Sales',
	jobCategoriesList_SE								: 	'Cust Service/Hospitality/Tourism',
	jobCategoriesList_ST								: 	'Student',
	jobCategoriesList_SC								: 	'Student Coop Placement',
	jobCategoriesList_TR								: 	'Trades',
	jobCategoriesList_RT								: 	'Retired',
	jobCategoriesList_UN								: 	'Unemployed',
	jobCategoriesList_HO								: 	'Homemaker',
	
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
	
	RetailNetWorkList_null								: 	'Please select...',
	Canadian_Tire                                       :   'Canadian Tire',
	Marks                                               :   'Mark\'\s',
	SportsCheck_OR_Atmosphere                           :   'Sport Chek',
	Gas                                                 :   'Gas+',
	Sports_Expert                                       :   'Sports Experts',
	Pro_Hockey_Life                                     :   'Pro Hockey Life',
	National_Life                                       :   'National Sports',
	Marks_Franchise			                            :   'Mark’s Franchise',
	Out_of_Store			                            :   'Out of Store',
	Partner_Locations		                            :   'Partner Locations',
	Party_City				                            :   'Party City',
	
	
	// Signature screen START ................................................................



	signatureScreen_Header								:	"By signing below, I agree as follows:",
	signatureScreen_License1							:	"Please open an account in my name for the ",
    signatureScreen_License1_1                          :   " (the \“Card\”) ",
    // UAT 25 - Jul 22, CP Revitalization
    // Old code
    // signatureScreen_License1_2                          :   " with an annual interest rate of 19.99% for all charges (excluding cash advances and related fees) and 21.99% for cash advances and related fees.",
	// signatureScreen_License2							:	"If I am not approved for the Card at an annual interest rate of 19.99% for all charges (excluding cash advances and related fees) and 21.99% for cash advances and related fees, you may, without further notice to me, treat this as a separate application for the same Card at an annual interest rate of 25.99% for all types of charges, including cash advances and related fees.",
    signatureScreen_License1_2                          :   "with annual interest rates of <span style=\"font-size: 12pt;\";><strong>20.99%</strong></span> for all charges (excluding cash transactions and related fees) and <span style=\"font-size: 12pt;\";><strong>22.99%</strong></span> for cash transactions and related fees,  if I reside outside of Quebec, or annual interest rates of <span style=\"font-size: 12pt;\";><strong>20.99%</strong></span> for all charges (excluding cash transactions and related fees) and <span style=\"font-size: 12pt;\";><strong>21.99%</strong></span> for cash transactions and related fees if I reside in Quebec.",
	signatureScreen_License2							:	"If I am not approved for the Card at an annual interest rate of 19.99% for all charges (excluding cash transactions and related fees) and 22.99% for cash transactions and related fees, you may, without further notice to me, treat this as a separate application for the same Card at an annual interest rate of 25.99% for all types of charges, including cash transactions and related fees.",
	signatureScreen_License2_OMZ						:	"<b>If I am not approved for the Card at the above rates, Canadian Tire Bank may still issue me a Triangle<sup>&reg;</sup> Mastercard<sup>&reg;</sup> at an annual interest rate of 19.99% for all charges (excluding cash transactions and related fees) and 22.99& for cash transactions and related fees.</b>",
	// signatureScreen_License3							:	"The Card is issued by Canadian Tire Bank (\"CTB\").",
	// US3766
	signatureScreen_License4							:	'Canadian Tire Bank may collect, use and share personal information about me for the purposes described in the "Canadian Tire Privacy Charter" including marketing and selling by way of email, telephone, automatic dialing-announcing device or other form of telecommunication.',
	signatureScreen_License5							:	"I will be bound by the terms and conditions of the Canadian Tire Bank Cardmember Agreement that I will receive with the Card, as such agreement may be amended from time to time. I will be solely liable for any charges to the account, including charges made by anyone to whom I have asked that you issue a supplementary card. I will be the only person who receives a monthly statement.",
	signatureScreen_License6							:	"<u> You may obtain credit and other personal information about me from, and exchange such information with, credit reporting agencies.</u>",
	signatureScreen_License6_newLine					:	"I consent to Canadian Tire Bank &#40;&#34;CTB&#34;&#41; verifying my personal information &#40;CTB Information&#41; including my name, address, date of birth, mobile number with my mobile service provider &#40;&#34;MSP&#34;&#41; and consent to my MSP providing CTB my account information &#40;account status, account type, etc.&#41;. The MSP information will be used to verify my identity and to conduct fraud analysis and fraud investigations.",
	signatureScreen_License7							:	"Each person to whom I have asked that you issue a supplementary card has authorized me to provide you with the above information about them.",
	signatureScreen_License8							:	"If I provide you with my Social Insurance Number, you may use it to identify me, including with credit reporting agencies.",
	signatureScreen_License9							:	"I have read and understood this application and I have received a brochure containing additional disclosure relating to this application.",
	signatureScreen_License10							:	"I agree that if approved, and if I provided an email address in this application, you can provide me with my Initial Disclosure Statement by way of an email to such address.",
	
	
	signatureScreen_License11_QC_OMX_1                  :  "<p>Pour les résidents du Québec, je confirme également avoir reçu et pris connaissance de la version française de la Politique en matière de protection des renseignements personnels de Canadian Tire, du Contrat du titulaire de la carte, des Modalités Récompenses Triangle, et je souhaite être lié exclusivement par la version anglaise de ces documents et recevoir les documents connexes en anglais </p>",
	signatureScreen_License11_QC_OMX_2                  :  "<p>For residents of Quebec, I also confirm that I have been provided with and have reviewed the French version of the Privacy Charter, Cardmember Agreement, and the Triangle Rewards Program Terms and Conditions and wish to be bound exclusively by the English version of such documents and to receive related documents in English.</p>",
	signatureScreen_License11_QC_OMP_1                  :  "<p>Pour les résidents du Québec, je confirme également avoir reçu et pris connaissance de la version française de la Politique en matière de protection des renseignements personnels de Canadian Tire, du Contrat du titulaire de la carte, Modalités du programme de primes de la carte Mastercard Avantage Essense, et je souhaite être lié exclusivement par la version anglaise du ces documents et recevoir les documents connexes en anglais.</p>",
	signatureScreen_License11_QC_OMP_2					: "<p>For residents of Quebec, I also confirm that I have been provided with and have reviewed the French version of the Privacy Charter, Cardmember Agreement, and the Gas Advantage Program Terms and Conditions and wish to be bound exclusively by the English version of such documents and to receive related documents in English.</p>",
	sigworldElite_MasterCardNote_1                      :  " <b>Please note that the Triangle<sup>&reg;</sup> World Elite Mastercard<sup>&reg;</sup>can impose higher card acceptance costs on merchants.</b>",

	signatureScreen_Reset_Button_Label             		:    "Clear Signature",
	// VZE-88
	signatureScreen_AllowUpSellOMZCard                  :     "false",
	
	signatureScreen_TermsAndConditions_AcceptBox     	:    "I have read, understood and agree to the terms and conditions set out above for the ",
	signatureScreen_TermsAndConditions_AcceptBox_MSPVerification              	:    " <b>and MSP verification.</b>",

	signatureScreen_validation_acceptAgreement       	:    "Please accept Terms And Contitions",
	signatureScreen_validation_signature             	:    "Please leave your signature",
	signatureScreen_validation_signDate              	:    "Signature date is not valid",

	signatureScreen_WarningHeader                  		:    "PLEASE READ CAREFULLY",
	signatureScreen_WarningText1              			:    "By signing and checking the box below, you consent to submitting an application for the:",

	 // Signature screen END ................................................................

     // Summary screen START ..............................................................
	summary_UseCaseFourDialogContentCPC					:	"Based on your changes, you are not eligible for Triangle<sup>&reg;</sup> Credit Protector Complete<sup>TM</sup> and it will be removed from your credit card application.",
	summary_UseCaseFourDialogContentCPLD				:	"Based on your changes, you are not eligible for Triangle<sup>&reg;</sup> Credit Protector Life & Disability<sup>TM</sup> and it will be removed from your credit card application.",
	summary_UseCaseFourDialogOk							:	"OK",
	
	summary_PageTitle                                 	:   "Please review and confirm the information provided is accurate as this will help us process your application today!",
	summary_SubmitButton                              	:   "SUBMIT APPLICATION",
	summary_DupeSubmitButton							:   "DUPLICATE APP SUBMISSION",
	summary_TestSubmitButton                            :   "TEST APP SUBMISSION",
	summary_SubmitApplicationError						:	"Application submission failed. Please try again.",

	summary_Status_SubTitle								:	"STATUS: ",
	summary_Status_NotReady								:	"Not Ready",
	summary_Status_Ready								:	"Ready",

	summary_SelectProduct_SubTitle						:	"Selected Product",
	summary_SelectProduct_Card							:	"Card",
	summary_SelectProduct_PromoCode						:	"Promo Code",
	summary_SelectProduct_Province						:	"Province",

	summary_TellAboutYourself_SubTitle                  :	"Customer Identification" ,
	summary_ContactInfo_SubTitle                 		:	"Contact Information" ,
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
	summary_Address_AddressLine1						:	"Mailing Address Line 1",
	summary_Address_AddressLine2						:	"Mailing Address Line 2",
	summary_Address_SuiteUnit							:	"Apt # / Suite / Unit",
	summary_Address_City								:	"City",
	summary_Address_Province							:	"Province",

	summary_Address_ResidenceType						:	"Home Type",
	summary_Address_MonthlyHousePayment					:	"Mortgage & Rent Payment (per month)",
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

	summary_FinEmp_JobDescription						:	"Job Description",
	summary_FinEmp_JobDescriptionOther					:	"Job Description (Other)",
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
	summary_SupCard_Address_AddressLine1				:	"Mailing Address Line 1",
	summary_SupCard_Address_AddressLine2				:	"Mailing Address Line 2",
	summary_SupCard_Address_SuiteUnit					:	"Apt # / Suite / Unit",
	summary_SupCard_Address_City						:	"City",
	summary_SupCard_Address_Province					:	"Province",

	summary_OptProds_ProductSelected					:	"Product selected",
	summary_OptProds_ProdName_CPLD						:	"Triangle<sup>&reg;</sup> Credit Protector Life & Disability<sup>&trade;*</sup>",
	summary_OptProds_ProdName_CPC						:	"Triangle<sup>&reg;</sup> Credit Protector Complete<sup>&trade;*</sup>",
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
	summary_submitUpdatedError							:	"<b>Oops, looks like the application didn’t submit correctly. Please re-submit by tapping “Submit Application”.</b>",
	summary_submitInitError								:	"Unfortunately, the application could not be submitted due to a back-end issue. Please try again.",
	summary_submit3AttemptError							:	"<b>Oops! Looks like the application didn’t submit correctly. Please contact the help desk for further assistance.</b><br><br>Canadian Tire: 1-866-899-3025<br>Mark’s / L’Équipeur : 1-888-670-6674<br>Sport Chek / Atmosphere : 1-866-217-1105<br>Sports Experts: 1-877-939-7272",

	summary_dataIntegrity_Error							:	"Unfortunately, the application could not be submitted due to an internal issue. Please try again.",

    summary_highlighterHeader                           :   "IMPORTANT",
    summary_highlighter_SubTitle                        :   "Your application must be verified by a ",
    summary_highlighter_Representative					:	" representative",
    
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
	
	// VZE-210
	scanFaildErrorMessageTitle                          :   "Drivers Licence Scan Error",
    scanFaildErrorMessageOne                            :   "Sorry, we are unable to scan your drivers licence today.",
    scanFaildErrorMessageTwo                            :   "Please complete the remainder of your application manually.",
    scanFaildErrorMessageOkButton                       :   "Ok",
    
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
	
	printScreen_PrinterError_Title						:	"Printer Error",
	printScreen_PrinterError_ExceptionOrMessage			:	"<b>Error: The Credit Card Application is approved but the token printing failed due to the printer connection, please restart the printer.<br><br></b>",
	printScreen_PrinterError_Message					:	"<b>STOP</b> Due to an error, the instant credit receipt will not be printing. Please contact your Service Desk immediately with details of this error message ** <u><b>before closing the application or proceeding.</b></u><br><br>Canadian Tire: 1-866-899-3025<br>Mark’s: 1-888-670-6674<br>SportChek/Atmosphere: 1-866-217-1105<br>Sports Experts: 1-877-939-7272<br><br>",
	printScreen_Pre_PrinterError_Message				:	"<b>STOP</b> Due to an error, the instant credit receipt will not be printing. Please contact your Service Desk immediately with details of this error message ** <u><b>before closing the application or proceeding.</b></u><br><br>Canadian Tire: 1-866-899-3025<br>Mark’s: 1-888-670-6674<br>SportChek/Atmosphere: 1-866-217-1105<br>Sports Experts: 1-877-939-7272<br><br>",

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
	
	pendingScreen_RetrieveFailed						:	"We could not process your application at this time. A response will be mailed to you within 5 to 7 business days.",
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
	signature_OptionsMasterCard 					    : "Triangle<sup>&reg;</sup> Mastercard<sup>&reg;</sup>",
	// VZE-3 WICI Bank Rates changes
	signature_OptionsMasterCard_withoutSuperScript 		: "Triangle<sup>&reg;</sup> Mastercard<sup>&reg;</sup>",
	signature_OptionsMasterCard_Dupconvence_text        : "Thanks for applying for a Triangle<sup>&reg;</sup> Mastercard<sup>&reg;</sup>!",
	signature_World_ELiteMasterCard 					: 	"Triangle<sup>&reg;</sup> World Elite Mastercard<sup>&reg;</sup>",
	// VZE-3 WICI Bank Rate changes
	signature_World_ELiteMasterCard_withoutSuperScript 	: 	"Triangle World Elite Mastercard",
	signature_GasAdvantageMasterCard 					: 	"Gas Advantage<sup>&reg;</sup> Mastercard<sup>&reg;</sup>",
	signature_GasAdvantageMasterCard1					:	"Gas Advantage<sup>&reg;</sup> Mastercard<sup>&reg;</sup>",
	// VZE-3 WICI Bank Rate changes
	signature_GasAdvantageMasterCard1_withoutSuperScript					:	"Gas Advantage Mastercard",
	signature_CashAdvantageMasterCard					: 	"Cash Advantage Mastercard",
	// US5147  WICI - Updated Signature Box
    signature_OptionsMasterCard_CreditCard 				: "Triangle<sup>&reg;</sup> Mastercard<sup>&reg;</sup> credit card",
	signature_OptionsMasterCard_Dupconvence_text        : "Thanks for applying for a Triangle Mastercard!",
	signature_World_ELiteMasterCard_CreditCard 			: "Triangle<sup>&reg;</sup> World Elite Mastercard<sup>&reg;</sup> credit card",
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
    personalData_CTMAccountText                         : "If you are already a Member, please enter your Triangle  Rewards<sup>&trade;</sup> Account Number. If you are approved for the credit card that you are applying for, your Triangle  Rewards<sup>&trade;</sup> Account will be linked to your new Triangle<sup>&reg;</sup> Mastercard<sup>&reg;</sup>. If left blank, Triangle  Rewards<sup>&trade;</sup> Account Number will be assigned to you.",
    
    personalData_Scan_TextField                         : "<b> Why are we scanning your licence?</b>  We scan your driver’s licence to automatically and accurately capture select information required to complete a credit card application.  This includes your name, address, date of birth, driver’s licence number and expiry date.",
    
	// VZE-185    
	personalData_current_Mailing_address                :    "Current Mailing Address",
	personalData_canadaPostAddress_1                    :    "1. Start typing a Canadian address in the box provided. Suggested addresses appear as you type.",
    personalData_canadaPostAddress_2                    :    "2. Select your address from the list of suggestions. For some addresses, you may also be prompted to select an appropriate unit number. The properly formatted address including the postal code will display.",
    personalData_canadaPostAddress_3                    :    "If you do not see your address in the list of suggestions, continue entering your complete address, including city and province, to display more suggestions.",
    personalData_canadaPostAddress_4                    :    "If you’re still having difficulty, you can enter your address manually.",
    personalData_EnterAdressManuallyButton              :    "Enter Address Manually",
    personalData_EditAddressButton			            :    "Edit Address",
    personalData_AcceptButton							:    "Accept",
    personalData_canadaPostAddressPara1             	:    "Please note that the properly formatted address including the postal code is currently displayed.",
    // VZE-187 
    personalData_POBoxToolTipMsg                        :    "If your address contains a P.O.Box, please enter it in Mailing Address Line 2",
    
    // personalData_ReceiveEmail                           : "I would like to receive offers, promotions, contests, giveaways, events, coupons and other information about products and services that may be of interest to me by email, text message (standard text messaging and data rates may apply) and other electronic messaging from Canadian Tire Corporation, Limited (\"CTC\"), Canadian Tire Financial Services Limited (\"CTFS\"), and Canadian Tire Bank (\"CTB\"), including from their respective business units operating under the Canadian Tire, My Canadian Tire Money<sup>&reg;</sup> Program, Canadian Tire Drivers Academy<sup>&reg;</sup>, Canadian Tire Home Services<sup>&reg;</sup>, and Canadian Tire Roadside Assistance<sup>&reg;</sup> brands, as well as from other CTC-CTFS-CTB affiliates and/or marketing partners. You may contact CTC-CTFS-CTB, at P.O. Box 2000 Welland, ON L3B 5S3 or customerservice@canadiantire.ca. I understand that I may withdraw my consent at any time.",
    // UAT 25 - Jul 22, CP Revitalization
    // Old code
    // signatureScreen_License2                            : "<b>If I am not approved for the Card at an annual interest rate of 19.99% for all charges (excluding cash advances and related fees) and 21.99% for cash advances and related fees, you may, without further notice to me, treat this as a separate application for the same Card at an annual interest rate of 25.99% for all charges (excluding cash advances and related fees) and 27.99% for cash advances and related fees.</b>",
    signatureScreen_License2                            :   "If I am not approved for the Card at the above rates, Canadian Tire Bank may, without further notice to me, treat this as a separate application for the same Card at the following annual interest rates:"+
                                                            "<br><br>(i) if you are a resident of Quebec, <b>21.99%</b> for all charges; or"+"<br><br>(ii) if you reside outside of Quebec, <b>25.99%</b> for all charges (excluding cash transactions and related fees) and <b>27.99%</b> for cash transactions and related fees.",
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
    
    optionalProducts_TableTitle                         :   "Yes, I am interested in learning more about the following optional product:",
    optionalProducts_CPC_title                          :   "Triangle<span class=\"radio_CPC_RegSup\">&reg;</span> Credit Protector Complete<span class=\"radio_CPC_TradeSup\">&trade;*</span>",
    optionalProducts_CPC_Helps_cover                     :   "Helps cover Your card payments in the event of ...",
    optionalProducts_CPC_LI_Involuntary                  :   "Involuntary Unemployment",
    optionalProducts_CPC_LI_Total                        :   "Total Disability",
    optionalProducts_CPC_LI_Terminal                     :   "Loss of Life",
    optionalProducts_CPC_LI_Dismemberment                :   "Dismemberment <span style=\"border-bottom: 1px solid #58595b;\">or</span> loss of sight, hand or foot*<br> (at age 80 becomes Accidental Dismemberment)",
    optionalProducts_CPC_LI_Life                         :   "Life* (at age 80 becomes Accidental Death)<br>* Your spouse is also covered by these 3 coverages",
    optionalProducts_CPC_LI_These_coverage               :   "<b>*&nbsp;&nbsp;These coverages provide benefits for your spouse,<br>&nbsp;&nbsp;&nbsp;&nbsp;except if you enroll in the province of Quebec.</b>",
    optionalProducts_CPC_text_monthly                    :   "All for a monthly premium of",
    optionalProducts_CPC_text_for_every                  :   "&#36;1.15 for every &#36;100",
    optionalProducts_CPC_text_average                    :   "of Your Average Daily Balance, plus applicable taxes",
    optionalProducts_CPC_text_average_info               :   "(at age 80, becomes $0.59 for every $100 of your Average Daily Balance, plus applicable taxes)",
    optionalProducts_CPC_text_bill                       :   "Billed to Your Canadian Tire Bank issued credit card",
    optionalProducts_CPC_text_available                  :   "Available for Primary Cardmembers who are residents of Canada aged 18 to under 75,",
    optionalProducts_CPC_text_interest                   :   "and who are Employed or Self-Employed.",

    optionalProducts_CPLD_title                          :   "Triangle<span class=\"radio_CPC_RegSup\">&reg;</span> Credit Protector Life & Disability<span class=\"radio_CPC_TradeSup\">&trade;*</span>",
    optionalProducts_CPLD_Helps_cover                    :   "Helps cover Your card payments in the event of ...",
    optionalProducts_CPLD_LI_Total                       :   "Total Disability",
    optionalProducts_CPLD_LI_Life                        :   "Loss of Life",
    optionalProducts_CPLD_text_monthly                   :   "All for a monthly premium of ",
    optionalProducts_CPLD_text_for_every                  :   "&#36;1.00 for every &#36;100",
    optionalProducts_CPLD_text_average                    :   "of Your Average Daily Balance, plus applicable taxes",
    optionalProducts_CPLD_text_bill                      :   "Billed to Your Canadian Tire Bank issued credit card",
    optionalProducts_CPLD_text_available                 :   "Available for Primary Cardmembers who are residents of Canada and aged 18 to under 76",
    
    
    //---Optional product CPC details  ends ------
    
    //-- Offer Optional product CPLD details starts  
      OP_yes_i_am_interested_for_op                      :   "Yes, I am interested in the following optional product:",
      OP_CPLD_title                                      :   "Triangle<sup>&reg;</sup> Credit Protector Life & Disability<sup>&trade;*</sup>",
      OP_CPLD_Rule_li_1_available                        :   "Available for Primary Cardmembers who are residents of Canada and aged 18 to under 76",
      OP_CPLD_P_bold                                     :   "<span class=\"cpc_mandatory_disclosure\">Mandatory Disclosures</span> <span class=\"cpc_mandatory_disclosure_subtitle\">Must be read in full prior to completing an enrolment</span>",
      OP_CPLD_P_small                                    :   "&#45;&#45; Must be read in full prior to completing an enrolment",
      OP_CPLD_disclosure                                 :   "Triangle<sup>&reg;</sup> Credit Protector Life & Disability<sup>&trade;</sup> Insurance Disclosure",
      OP_CPLD_coverage                                   :   "Summary of Coverage and Declarations for Triangle<sup>&reg;</sup> Credit Protector Life & Disability<sup>&trade;</sup>",
	  OP_CPLD_important									 :	 "IMPORTANT INSURANCE INFORMATION:",
      OP_CPLD_creator_group1                             :   "This summary provides a description of the insurance coverages and other important information concerning the Triangle<sup>&reg;</sup> Credit Protector Life & Disability<sup>&trade;</sup> group creditor insurance program.",
	  OP_CPLD_creator_group2                             :   "This insurance coverage is provided to You by American Bankers Life Assurance Company of Florida (“ABLAC”) which underwrites the insurance under Group Master Policy number TLD-0622-L (“Policy”), issued to Canadian Tire Bank and includes Life and Total Disability Coverage.",
	  OP_CPLD_creator_group3                             :   "ABLAC, its subsidiaries, and affiliates carry on business in Canada under the name of Assurant<sup>&reg;</sup>.",
	  OP_CPLD_creator_group4                             :   "The Primary Cardmember (person under whose name the Account for a Canadian Tire Bank issued credit card has been opened) will receive, within 30 days of the insurance coming into force, a Certificate of Insurance including full details of coverage, such as definitions, benefits, limitations, restrictions and exclusions, if the Primary Cardmember elects to enrol in the insurance and meets the eligibility requirements indicated below.",
	  OP_CPLD_creator_group5                             :   "Read the Certificate of Insurance carefully for full details upon receipt and store in a safe place with Your other valuable documents. The Primary Cardmember is free to cancel the insurance coverage at any time. See the Termination/Cancellation section below for details. Premium rates are subject to change. Your coverage is effective as of the date You enrol in Triangle® Credit Protector Life & Disability<sup>&trade;</sup>",
	  OP_CPLD_premium									 :	 "PREMIUM:",
	  OP_CPLD_premium_p									 :	 "Premiums are calculated as $1.00 per $100 of the Average Daily Balance on the Canadian Tire Bank issued credit card (less the outstanding amount of any Special Payment Plans not yet due), plus applicable taxes. For example, if Your Average Daily Balance is $150 You would pay just $1.50, plus applicable taxes. No insurance premium will be charged in any month where the Average Daily Balance on the Canadian Tire Bank issued credit card is less than $10.",
	  OP_CPLD_eligibility								 :	 "ELIGIBILITY FOR INSURANCE COVERAGE:",
	  OP_CPLD_eligibility_p								 :	 "To be eligible for Triangle<sup>&reg;</sup> Credit Protector Life & Disability<sup>&trade;</sup>, the Primary Cardmember must be an individual resident of Canada, at least 18 years of age and less than 76 years of age at the time of enrolment.",
	  OP_CPLD_benefits									 :	 "BENEFITS FOR TOTAL DISABILITY COVERAGE:",
	  OP_CPLD_insurer									 :	 "The Insurer may pay benefit(s) if You are insured and under the age of 80 at Date of Loss and You:",
	  OP_CPLD_insurer_para1								 :	 "become Totally Disabled and remain Total Disabled for a period of at least 30 consecutive days; and",
	  OP_CPLD_insurer_para2								 :	 "are regularly seen by a licensed physician.",
	  OP_CPLD_monthly_benefits_p						 :	 "The monthly benefit is equal to the greater of:",
	  OP_CPLD_outstanding_p								 :	 "*The outstanding amount of any Special Payment Plans not yet due are not included in the Balance Due",
      OP_CPLD_monthly_benefits_20_p						 :	 "a. 20% of the Balance Due*, to a maximum of $4,000; and",
      OP_CPLD_monthly_benefits_10_p						 :	 "b. $10.",
	  OP_CPLD_initail_benefit_p							 :	 "The initial benefit payment will be made after 30 days following the Date of Loss and will be paid retroactively to the Date of Loss. For each 30 consecutive day period You are Totally Disabled, the Insurer will pay a monthly benefit until You are no longer Totally Disabled; or the Balance Due or the Maximum Amount of Insurance of $20,000 has been paid.",
	  OP_CPLD_all_p										 :	 "All monthly benefit payments for Total Disability will remain the same during the benefit period, except for the last benefit payment which may be pro-rated based on the actual number of days that You were Totally Disabled. The total of all benefits for a Total Disability claim cannot exceed the lesser of Your Balance Due and the Maximum Amount of Insurance.",
	  OP_CPLD_life_coverage								 :	 "BENEFITS FOR LIFE COVERAGE",
	  OP_CPLD_life_coverage_para1						 :	 "The Insurer may pay a benefit if You are insured and under the age of 80 on the date of death.",
	  OP_CPLD_life_coverage_para2						 :	 "The Insurer will pay a lump sum benefit equal to the amount owing (including the outstanding amount of any Special Payment Plans) on Your Account as of the date of Your death, subject to the Maximum Amount of Insurance of $20,000.",
	  OP_CPLD_life_coverage_para3						 :	 "No benefit will be paid for death resulting from suicide within 6 months of the Effective Date.",
	  OP_CPLD_claim_procedures							 :	 "CLAIM PROCEDURES:",
	  OP_CPLD_claim_procedures_para1					 :	 "In the event of a claim, log on to <span class=\"OP_link_style\">cardbenefits.assurant.com</span> for information on how to complete and submit a claim or call the Insurer at <b>1 800 480-1853</b>.",
	  OP_CPLD_claim_procedures_para2					 :	 "Claim forms are to be completed, at Your expense, and submitted online or sent to Assurant at their office – PO Box 7200 Kingston, ON K7L 5V5 within 90 days of the loss, except for a Life insurance claim which should be sent to Assurant as soon as reasonably possible.  Failure to report the claim in the stated period may invalidate Your claim.",
	  OP_CPLD_claim_procedures_para3					 :	 "Assurant may ask for additional information or medical evidence to support Your claim.",
	  OP_CPLD_termination								 :	 "TERMINATION/CANCELLATION OF COVERAGE:",
	  OP_CPLD_termination_para1							 :	 "The Primary Cardmember may cancel this insurance coverage at any time in writing or by calling 1-800-459-6415. If the Primary Cardmember cancels within forty-five (45) days of issuance of the Certificate of Insurance, the Insurer will credit the entire premium paid to the Primary Cardmember’s Canadian Tire Bank issued credit card Account.",
	  OP_CPLD_termination_para2							 :	 "Coverage will automatically terminate upon the earliest of the following:",
	  OP_CPLD_termination_list1							 :	 "The date on which the Policy is terminated;",
	  OP_CPLD_termination_list2							 :	 "The date on which You turn 80;",
	  OP_CPLD_termination_list3							 :	 "The date of Your death;",
	  OP_CPLD_termination_list4							 :	 "The date on which Canadian Tire Bank closes Your Account, cancels Your card, or withdraws Your rights and privileges on Your Account;",
	  OP_CPLD_termination_list5							 :	 "The date Your Account becomes 90 days past due; or",
	  OP_CPLD_termination_list6							 :	 "The date on which We receive Your request to cancel Your insurance coverage.",
	  OP_CPLD_creditor								 	 :	 "CONTACTING INSURER/INTEREST OF CREDITOR:",
	  OP_CPLD_creditor_para1							 :	 "Please contact the Insurers as directed above for further information or clarification regarding the insurance coverage.<br>Canadian Tire Bank has a financial interest in the sale of this insurance.",
	  OP_CPLD_Enrolling_you_agree_this					 :	 "BY ENROLLING IN TRIANGLE<sup>&reg;</sup> CREDIT PROTECTOR LIFE & DISABILITY<sup>&trade;</sup>, YOU AGREE THAT:",
	  OP_CPLD_Enrolling_you_agree_this_1				 :	 "You are applying for Triangle<sup>&reg;</sup> Credit Protector Life & Disability<sup>&trade;</sup>;",
	  OP_CPLD_Enrolling_you_agree_this_2				 :	 "You acknowledge the information You provided is complete and true;",
	  OP_CPLD_Enrolling_you_agree_this_3				 :	 "You understand concealment, misrepresentation or false declaration concerning Your Canadian Tire Bank credit card application could cause Your coverage to be void;",
	  OP_CPLD_Enrolling_you_agree_this_4				 :	 "You have been given the opportunity to read the Triangle<sup>&reg;</sup> Credit Protector Life & Disability<sup>&trade;</sup> Certificate of Insurance, and if You are a resident of Quebec, You have been provided with and have reviewed the Summary and Fact Sheet.",
	  OP_CPLD_Enrolling_you_agree_this_5				 :	 "<b>You have read and understood the disclosures including the limitations and exclusions of Triangle<sup>&reg;</sup> Credit Protector Life & Disability<sup>&trade;</sup>;</b>",
	  OP_CPLD_Enrolling_you_agree_this_6				 :	 "You are eligible to enrol in this program as stated in Eligibility for Insurance Coverage;",
	  OP_CPLD_Enrolling_you_agree_this_7				 :	 "You authorize the Insurer to obtain, provide and exchange personal information with Canadian Tire Bank as may be required for the administration and servicing of Triangle<sup>&reg;</sup> Credit Protector Life & Disability<sup>&trade;</sup>;",
	  OP_CPLD_Enrolling_you_agree_this_8				 :	 "You acknowledge that Canadian Tire Bank is not the agent of the Insurer and no person has the authority to waive or modify any provisions of the application or Certificate of Insurance;",
	  OP_CPLD_Enrolling_you_agree_this_9				 :	 "You authorize Canadian Tire Bank to charge the premiums to Your Canadian Tire Bank issued credit card;",
	  OP_CPLD_Enrolling_you_agree_this_10				 :	 "You have requested this application and all related documents to be in English. (Vous avez demandé que ce document et tous les documents y afférents soient rédiges et signes en anglais);",
	  OP_CPLD_Enrolling_you_agree_this_11				 :	 "Your verbal or electronic agreement shall be deemed to have been signed and/or delivered and will constitute a ‘writing’ for the purpose of any law requiring the agreement to be signed. Any verbal or electronic agreement that is entered into or accepted by You, or in Your name, or reported to be entered into and accepted by You, will be considered to be binding upon You;",
	  OP_CPLD_Enrolling_you_agree_this_12				 :	 "A true copy of this authorization is as valid as the original; and",
	  OP_CPLD_Enrolling_you_agree_this_13				 :	 "Assurant is committed to safeguarding the privacy of its customers’ information in accordance with good business practices. It may collect, use, and share personal information provided by You to them, and obtained from others with Your consent, or as required or permitted by law. Personal information includes Your name, contact information, customer file, and product preferences. It may use the information to: serve You as a customer; communicate with You; create statistics about their business to better understand customer needs and preferences. It may process and store Your information in another country, which may be subject to access by government authorities under applicable laws of that country. You may obtain a copy of its privacy policy by calling 1-888-778-8023 or from its website (www.assurant.ca/privacy policy).",
      OP_CPLD_liketoenroll								 :	 "This is an optional insurance product, so unless you have any questions, would you like to enrol in Triangle<sup>&reg;</sup> Credit Protector Life & Disability<sup>&trade;</sup>?",
      OP_CPLD_consentyesorno							 :	 "Obtain a clear 'YES' (also accept 'I DO', 'I CONSENT', or 'I AGREE'). If the customer responds with any other form of YES, ask the customer: \"May I take that as a 'YES'?\"",
	  //-- Offer Optional product CPLD details end      

      // -- CPC offer details starts
      OP_CPC_title                                      :    "Triangle<sup>&reg;</sup> Credit Protector Complete<sup>&trade;*</sup>",
      OP_CPC_Li_1_not_sk                                 :   "Not available for residents of Saskatchewan",
      OP_CPC_Li_1_available                              :   "Available for Primary Cardmembers who are residents of Canada aged 18 to under 75, and who are Employed or Self-Employed.",
      OP_CPC_P_bold                                      :   "<span class=\"cpc_mandatory_disclosure\">Mandatory Disclosures</span> <span class=\"cpc_mandatory_disclosure_subtitle\">Must be read in full prior to completing an enrolment</span>",
      OP_CPC_P_small                                     :   "&#45;&#45; Must be read in full prior to completing an enrolment",
      OP_CPC_disclosure                                  :   "Triangle<sup>&reg;</sup> Credit Protector Complete<sup>&trade;</sup> Insurance Disclosure",
      OP_CPC_coverage                                    :   "Summary of Coverage and Declarations for Triangle<sup>&reg;</sup> Credit Protector Complete<sup>&trade;</sup>",
	  OP_CPC_important									 :	 "IMPORTANT INSURANCE INFORMATION:",
      OP_CPC_creator_group1                               :  "This summary provides a description of the insurance coverages and other important information concerning the Triangle<sup>&reg;</sup> Credit Protector Complete<sup>&trade;</sup> group creditor insurance program.",
	  OP_CPC_creator_group2                              :   "This insurance coverage is provided to You by American Bankers Insurance Company of Florida (“ABIC”), which underwrites the Involuntary Unemployment and Total Disability Coverage and American Bankers Life Assurance Company of Florida (“ABLAC”), which underwrites the Life Coverage under Group Master Policy numbers TC0622 and TC0622-L (“Policy”), respectively, issued to Canadian Tire Bank.",
	  OP_CPC_creator_group3                              :   "ABIC and ABLAC, their subsidiaries, and affiliates carry on business in Canada under the name of Assurant<sup>&reg;</sup>.",
	  OP_CPC_creator_group4                              :   "The Primary Cardmember (person under whose name the Account for a Canadian Tire Bank issued credit card has been opened) will receive, within 30 days of the insurance coming into force, a Certificate of Insurance including full details of coverage, such as definitions, benefits, limitations, restrictions and exclusions, if the Primary Cardmember elects to enrol in the insurance and meets the eligibility requirements indicated below.",
	  OP_CPC_creator_group5                              :   "Read the Certificate of Insurance carefully for full details upon receipt and store in a safe place with Your other valuable documents. The Primary Cardmember is free to cancel the insurance coverage at any time. See the Termination/Cancellation section below for details. Premium rates are subject to change. Your coverage is effective as of the date You enrol in Triangle<sup>&reg;</sup> Credit Protector Complete<sup>&trade;</sup>.",
	  OP_CPC_premium									 :	 "PREMIUM:",
	  OP_CPC_premium_p									 :	 "Premiums are calculated as $1.15 per $100 of the Average Daily Balance on the Canadian Tire Bank issued credit card (less the outstanding amount of any Special Payment Plans not yet due), plus applicable taxes. For example, if Your Average Daily Balance is $150 You would pay just $1.73, plus applicable taxes. No insurance premium will be charged in any month where the Average Daily Balance on the Canadian Tire Bank issued credit card is less than $10. ",
	  OP_CPC_eligibility								 :	 "ELIGIBILITY FOR ALL COVERAGES:",
	  OP_CPC_eligibility_p								 :	 "To be eligible for Triangle<sup>&reg;</sup> Credit Protector Complete<sup>&trade;</sup>, the Primary Cardmember must be an individual resident of Canada who is working at least 25 hours per week for a single employer and the employment is NOT temporary, seasonal or contract; OR Self Employed for at least 25 hours per week for their own active and registered or incorporated business and at least 18 years of age and less than 75 years of age at the time of enrolment.",
	  OP_CPC_benefits									 :	 "BENEFITS FOR INVOLUNTARY UNEMPLOYMENT COVERAGE:",
	  OP_CPC_paybenefits_p								 :	 "The Insurer may pay benefit(s) if You are insured and under the age of 80 at the Date of Loss and qualify under one of the following categories:",
	  OP_CPC_employed									 :	 "1. Employed",
	  OP_CPC_youmust_p									 :	 "You must:",
	  OP_CPC_Li_1_employed								 :	 "have been Employed immediately prior to the Date of Loss;",
	  OP_CPC_li_2_experience							 :	 "experience involuntary unemployment due to involuntary layoff, labour dispute, strike, or dismissal without cause; and",
	  OP_CPC_Li_3_remain								 :	 "remain Unemployed for at least 30 consecutive days. ",
	  OP_CPC_or											 :	 "OR",
	  OP_CPC_selfemployed								 :	 "2. Self-Employed ",
	  OP_CPC_Li_2_1_selfemployed						 :	 "have been Self-Employed immediately prior to the Date of Loss;",
	  OP_CPC_Li_2_2_experience							 :	 "experience involuntary unemployment due to the closure of Your business for financial reasons; and ",
	  OP_CPC_Li_2_3_remain								 :	 "remain Unemployed for at least 30 consecutive days.",
	  OP_CPC_monthly_benefits_p							 :	 "The monthly benefit is equal to the greater of:",
	  OP_CPC_outstanding_p								 :	 "*Outstanding amounts of any Special Payment Plans not yet due are not included in the Balance Due",
      OP_CPC_monthly_benefits_20_p						 :	 "a. 20% of the Balance Due*, to a maximum of $4,000; and",
      OP_CPC_monthly_benefits_10_p						 :	 "b. $10.",
	  OP_CPC_initail_benefit_p							 :	 "The initial benefit payment will be made after 30 days following the Date of Loss and will be paid retroactive to the Date of Loss.  For each additional 30 consecutive day period You remain unemployed the Insurer will pay a monthly benefit until You return to work; or the Balance Due or the Maximum Amount of Insurance of $20,000 has been paid.",
	  OP_CPC_all_p										 :	 "All monthly benefit payments will remain the same during the benefit period, except for the last benefit payment which may be pro-rated based on the actual number of days that You were Unemployed.  The total of all benefits paid for an Involuntary Unemployment claim cannot exceed the lesser of Your Balance Due and the Maximum Amount of Insurance.",
	  OP_CPC_no_p										 :	 "No benefit will be paid for Involuntary Unemployment due to loss of Self-Employment for any reason within 12 months of Your Effective Date.",
	  OP_CPC_totaldisability							 :	 "BENEFITS FOR TOTAL DISABILITY COVERAGE",
	  OP_CPC_insurer							 		 :	 "The Insurer may pay benefit(s) if You are insured and under the age of 80 at Date of Loss and You:",
	  OP_CPC_Li_1_were							 		 :	 "were Employed or Self-Employed immediately prior to the Date of Loss;",
	  OP_CPC_Li_2_unable							 	 :	 "are unable to work and remain Totally Disabled for at least 30 consecutive days; and",
	  OP_CPC_Li_3_regular							 	 :	 "are regularly seen by a licensed physician.",
	  OP_CPC_monthly_2_benefits_p						 :	 "The monthly benefit is equal to the greater of:",
	  OP_CPC_monthly_2_benefits_20_p					 :	 "a. 20% of the Balance Due*, to a maximum of $4,000; and",
	  OP_CPC_monthly_2_benefits_10_p					 :	 "b. $10.",
	  OP_CPC_2_outstanding_p							 :	 "*Outstanding amounts of any Special Payment Plans not yet due are not included in the Balance Due",
	  OP_CPC_2_initail_benefit_p						 :	 "The initial benefit payment will be made after 30 days following the Date of Loss and will be paid retroactively to the Date of Loss. For each 30 consecutive day period You are Totally Disabled, the Insurer will pay a monthly benefit until You are no longer Totally Disabled; You return to work; or the Balance Due or the Maximum Amount of Insurance of $20,000 has been paid.",
	  OP_CPC_2_all_p									 :	 "All monthly benefit payments for Total Disability will remain the same during the benefit period, except for the last benefit payment which may be pro-rated based on the actual number of days that You were Totally Disabled. The total of all benefits for a Total Disability claim cannot exceed the lesser of Your Balance Due and the Maximum Amount of Insurance.",
	  OP_CPC_life_coverage								 :	 "BENEFITS FOR LIFE COVERAGE",
	  OP_CPC_life_coverage_para1						 :	 "The Insurer may pay a benefit if You are insured and under the age of 80 on the date of death.",
	  OP_CPC_life_coverage_para2						 :	 "The Insurer will pay a lump sum benefit equal to the amount owing (including the outstanding amount of any Special Payment Plans) on Your Account as of the date of Your death, subject to the Maximum Amount of Insurance of $20,000.",
	  OP_CPC_life_coverage_para3						 :	 "No benefit will be paid for death resulting from suicide within 6 months of the Effective Date.",
	  OP_CPC_claim_procedures							 :	 "CLAIM PROCEDURES:",
	  OP_CPC_claim_procedures_para1						 :	 "In the event of a claim, log on to <span class=\"OP_link_style\">cardbenefits.assurant.com</span> for information on how to complete and submit a claim or call the Insurer at <b>1 800 480-1853</b>.",
	  OP_CPC_claim_procedures_para2						 :	 "Claim forms are to be completed, at Your expense, and submitted online or sent to Assurant at their office - PO Box 7200 Kingston, ON K7L 5V5 within 90 days of the loss, except for a Life insurance claim which should be sent to Assurant as soon as reasonably possible.  Failure to report the claim in the stated period may invalidate Your claim.",
	  OP_CPC_claim_procedures_para3						 :	 "Assurant may ask for additional information or medical evidence to support Your claim.",
	  OP_CPC_termination								 :	 "TERMINATION/CANCELLATION OF COVERAGE:",
	  OP_CPC_termination_para1							 :	 "The Primary Cardmember may cancel this insurance coverage at any time in writing or by calling 1-800-459-6415. If the Primary Cardmember cancels within forty-five (45) days of issuance of the Certificate of Insurance, the insurer will credit the entire premium paid to the Primary Cardmember’s Canadian Tire Bank issued credit card Account.",
	  OP_CPC_termination_para2							 :	 "Coverage will automatically terminate upon the earliest of the following:",
	  OP_CPC_termination_list1							 :	 "The date on which the Policy is terminated;",
	  OP_CPC_termination_list2							 :	 "The date on which You turn 80;",
	  OP_CPC_termination_list3							 :	 "The date of Your death;",
	  OP_CPC_termination_list4							 :	 "The date on which Canadian Tire Bank closes Your Account, cancels Your card, or withdraws Your rights and privileges on Your Account;",
	  OP_CPC_termination_list5							 :	 "The date Your Account becomes 90 days past due; or",
	  OP_CPC_termination_list6							 :	 "The date on which We receive Your request to cancel Your insurance coverage.",
	  OP_CPC_creditor								 	 :	 "CONTACTING INSURER/INTEREST OF CREDITOR:",
	  OP_CPC_creditor_para1								 :	 "Please contact the Insurers as directed above for further information or clarification regarding the insurance coverage.<br><br>Canadian Tire Bank has a financial interest in the sale of this insurance.",
	  OP_CPC_creditor_para2								 :	 "Canadian Tire Bank has a financial interest in the sale of this insurance.",
	  OP_CPC_Enrolling_you_agree_this					 :	 "BY ENROLLING IN TRIANGLE<sup>&reg;</sup> CREDIT PROTECTOR COMPLETE<sup>&trade;</sup>, YOU AGREE THAT:",
	  OP_CPC_Enrolling_you_agree_this_1					 :	 "You are applying for Triangle<sup>&reg;</sup> Credit Protector Complete<sup>&trade;</sup> ;",
	  OP_CPC_Enrolling_you_agree_this_2					 :	 "You acknowledge the information You provided is complete and true;",
	  OP_CPC_Enrolling_you_agree_this_3					 :	 "You understand concealment, misrepresentation or false declaration concerning Your Canadian Tire Bank credit card application could cause Your coverage to be void;",
	  OP_CPC_Enrolling_you_agree_this_4					 :	 "You have been given the opportunity to read the Triangle<sup>&reg;</sup> Credit Protector Complete<sup>&trade;</sup> Certificate of Insurance, and if You are a resident of Quebec, You have been provided with and have reviewed the Summary and Fact Sheet. ",
	  OP_CPC_Enrolling_you_agree_this_5					 :	 "<b>You have read and understood the disclosures including the limitations and exclusions of Triangle<sup>&reg;</sup> Credit Protector Complete<sup>&trade;</sup>;</b>",
	  OP_CPC_Enrolling_you_agree_this_6					 :	 "You are eligible to enrol in this program as stated in Eligibility for Insurance Coverage;",
	  OP_CPC_Enrolling_you_agree_this_7					 :	 "You authorize the Insurer to obtain, provide and exchange personal information with Canadian Tire Bank as may be required for the administration and servicing of Triangle<sup>&reg;</sup> Credit Protector Complete<sup>&trade;</sup>;",
	  OP_CPC_Enrolling_you_agree_this_8					 :	 "You acknowledge that Canadian Tire Bank is not the agent of the Insurer and no person has the authority to waive or modify any provisions of the application or Certificate of Insurance;",
	  OP_CPC_Enrolling_you_agree_this_9					 :	 "You authorize Canadian Tire Bank to charge the premiums to Your Canadian Tire Bank issued credit card;",
	  OP_CPC_Enrolling_you_agree_this_10				 :	 "You have requested this application and all related documents to be in English. (Vous avez demandé que ce document et tous les documents y afférents soient rédiges et signes en anglais);",
	  OP_CPC_Enrolling_you_agree_this_11				 :	 "Your verbal or electronic agreement shall be deemed to have been signed and/or delivered and will constitute a ‘writing’ for the purpose of any law requiring the agreement to be signed. Any verbal or electronic agreement that is entered into or accepted by You, or in Your name, or reported to be entered into and accepted by You, will be considered to be binding upon You;",
	  OP_CPC_Enrolling_you_agree_this_12				 :	 "A true copy of this authorization is as valid as the original; and",
	  OP_CPC_Enrolling_you_agree_this_13				 :	 "Assurant is committed to safeguarding the privacy of its customers’ information in accordance with good business practices. It may collect, use, and share personal information provided by You to them, and obtained from others with Your consent, or as required or permitted by law. Personal information includes Your name, contact information, customer file, and product preferences. It may use the information to: serve You as a customer; communicate with You; create statistics about their business to better understand customer needs and preferences. It may process and store Your information in another country, which may be subject to access by government authorities under applicable laws of that country. You may obtain a copy of its privacy policy by calling 1-888-778-8023 or from its website (www.assurant.ca/privacy policy).",
      OP_CPC_liketoenroll								 :	 "This is an optional insurance product, so unless you have any questions, would you like to enrol in Triangle<sup>&reg;</sup> Credit Protector Complete<sup>&trade;</sup>?",
      OP_CPC_consentyesorno								 :	 "Obtain a clear 'YES' (also accept 'I DO', 'I CONSENT', or 'I AGREE'). If the customer responds with any other form of YES, ask the customer: \"May I take that as a 'YES'?\"",

	  //--CPC offer details ends
      
      //Footer part of  optional products starts 
      OP_CPC_FT_there_are_op_offfers                        :   "&dagger;&dagger; This is an optional product offered to all customers approved for a Canadian Tire Bank issued Mastercard. The information on this application is used to determine eligibility for a Canadian Tire Bank issued Mastercard and not for the optional product." ,
      OP_CPC_FT_business_product		                    :   "Canadian Tire Bank has a financial interest in the sale of this product.",
      OP_CPC_FT_unless                                      :   "&reg;/&trade; Unless otherwise noted, all trademarks are owned by Canadian Tire Corporation, Limited and are used under licence.",
      OP_CPC_FT_CP                                          :   "&reg;/&trade; Credit Protector Complete is a trademark of Canadian Tire Bank.",
      OP_CPC_FT_internet                                    :   "&reg;/&trade; Internet Personal Information Patrol&reg;, iPiP&reg; and Rebound&reg; are registered trademarks of Sigma Loyalty Group Inc.",
      OP_CPC_FT_license                                     :   "&reg;/&trade; Canadian Tire, Canadian Tire logo, Canadian Tire Bank, Triangle, and the Triangle design are registered trademarks of Canadian Tire Corporation, Limited and are used under licence.",
	  OP_CPC_FT_assurant									:	"&reg; Assurant is a registered trademark of Assurant, Inc.",
      OP_CPC_FT_mastercard                                  :   "&reg;/&trade; Mastercard is a registered trademark, and the circles design is a trademark of Mastercard International Incorporated.",
	  OP_CPC_FT_TCPC										:	"*Triangle Credit Protector Complete is a group creditor insurance program underwritten by American Bankers Life Assurance Company of Florida (ABLAC) and American Bankers Insurance Company of Florida (ABIC). ABLAC and ABIC, their subsidiaries, and affiliates carry on business in Canada under the name of Assurant<sup>&reg;</sup>.",

	  OP_CPLD_FT_there_are_op_offfers                       :   "&dagger;&dagger; This is an optional product offered to all customers approved for a Canadian Tire Bank issued Mastercard. The information on this application is used to determine eligibility for a Canadian Tire Bank issued Mastercard and not for the optional product." ,
      OP_CPLD_FT_business_product		                    :   "Canadian Tire Bank has a financial interest in the sale of this product.",
      OP_CPLD_FT_unless                                     :   "&reg;/&trade; Unless otherwise noted, all trademarks are owned by Canadian Tire Corporation, Limited and are used under licence.",
      OP_CPLD_FT_CP                                         :   "&reg;/&trade; Credit Protector Life & Disability is a trademark of Canadian Tire Bank.",
      OP_CPLD_FT_internet                                   :   "&reg;/&trade; Internet Personal Information Patrol&reg;, iPiP&reg; and Rebound&reg; are registered trademarks of Sigma Loyalty Group Inc.",
      OP_CPLD_FT_license                                    :   "&reg;/&trade; Canadian Tire, Canadian Tire logo, Canadian Tire Bank, Triangle, and the Triangle design are registered trademarks of Canadian Tire Corporation, Limited and are used under licence.",
	  OP_CPLD_FT_assurant									:	"&reg; Assurant is a registered trademark of Assurant, Inc.",
      OP_CPLD_FT_mastercard                                 :   "&reg;/&trade; Mastercard is a registered trademark, and the circles design is a trademark of Mastercard International Incorporated.",
	  OP_CPLD_FT_TCPC										:	"*Triangle Credit Protector Life & Disability is a group creditor insurance program underwritten by American Bankers Life Assurance Company of Florida (ABLAC). ABLAC, its subsidiaries, and affiliates carry on business in Canada under the name of Assurant<sup>&reg;</sup>.",
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

