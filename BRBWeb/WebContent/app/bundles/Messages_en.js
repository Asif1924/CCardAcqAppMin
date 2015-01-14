ensureNamespaceExists();

BRB.dictionary_en = {
	//-------------------------------------------Common----------------------------------------------
	app_loading 										:	"Loading...",	
	backButtonPrompt_title 								: 	"Exit Application",
	
	pleaseSelect_Text									:	'Please select...',
	
	monthSelect_Text									:	'Month',
    January												:	'January',
    February											:	'February',
    March												:	'March',
    April												:	'April',
    May													:	'May',
    June												:	'June',
    July												:	'July',
    August												:	'August',
    September											:	'September',
    October												:	'October',
    November											:	'November',
    December											:	'December',
    
	daySelect_Text										:	'Day',
	
	language_English									:	'English',
	language_Franch										:	'Francais',
	language_English_link								:	'Francais',
	Header_NeedHelp										:	'Need help?',
	Header_CallUsAt										:	'Call us at',
		
	connectionError_unableToConnect 					: 	"Unable to connect to backend server. Please try again in a few minutes.",
	connectionError_networkDown 						: 	"Connectivity to the data network is lost. Please try again when a data connection is available.",

	confirmDialog_defaultTitle 							: 	"Confirm",
	confirmDialog_yes 									: 	"Yes",
	confirmDialog_no 									: 	"No",
	
	settings_defaultTitle								: 	"Settings",
	settings_logOutButton								: 	"Log Out",
	settings_chooseProductButton						: 	"Abandon Application",
	settings_chancelButton								: 	"Cancel",
	settings_printerSetupButton							: 	"Printer Setup",
	
	settings_exitMessage								:   "The information collected on this application will be permanently deleted and cannot be retained. Are you sure you want to continue?",
	
	infoDialog_defaultTitle 							: 	"Info",
	
	errorDialog_defaultTitle 							: 	"Error",
	
	messageDialog_ok 									: 	"Ok",
	messageDialog_yes 									: 	"Yes",
	messageDialog_no 									: 	"No",
	
	breadCrumbItem_Overview								:	"OVERVIEW",
	breadCrumbItem_PersonalInformation					:	"PERSONAL INFORMATION",
	breadCrumbItem_AdditionalInformation				:	"OPTIONAL PRODUCTS",
	breadCrumbItem_Confirmation							:	"CONFIRMATION",
	breadCrumbItem_IdentityVerification					:	"IDENTITY VERIFICATION",
		
	loginScreen_UserID_Label							:	"User ID",
	loginScreen_AgentID_Label 							: 	"Agent ID",
	loginScreen_Password_Label 							: 	"Password (Case Sensitive)",
	loginScreen_Location_Number 						: 	"Location Number (e.g. 324)",
	loginScreen_Button_Label 							: 	"LOG IN",
	
	loginScreen_Dialog_ErrorTitle						:	"Login Error",
	loginScreen_FailureMessage							:	"Login Failed. Please Try Again.",
	
	loginScreen_UserLookupDialog_NormalTitle			:	"Location Details",
	loginScreen_UserLookupDialog_ErrorTitle				:	"Location Error",
	loginScreen_UserLookup_ConfirmMessage				:	"Is this the correct location address?",
	loginScreen_UserLookup_FailedMessage				:	"Location not found, please try again",
	
		
	Generic_Yes											:	"Yes",
	Generic_No											:	"No",
	
	Generic_English_Lang                                :   "English",
	Generic_French_Lang                                 :   "French",
	
	continue_Button_Label								:	"Continue",
	back_Button_Label									:	"Back",
	continue_Button_PopupMode_SaveChanges_Label			:	"Save Changes",
	continue_Button_PopupMode_CancelChanges_Label		:	"Cancel Changes",
	initiate_BRB_Web_App_ErrorTitle						:	"Get Customer Data Failed",
	initiate_BRB_Web_App_ErrorMsg                       :   "Could not retrieve customer data, please try again",
	tm							                        :   "&trade;",
	r							                        :   "&reg;",
	requiredFieldIndicatorLabel							:	" Indicates Required Field",
	
	PageHeader_CanadianTireTabLogo						:	'<div class="PageHeader_CanadianTireTabLogo"></div>',	
	
	session_Expired_ErrorTitle							: 	"Application timed out",
	session_Expired_ErrorMsg							:	"Due to inactivity your application has timed out. \nPlease restart your application to have it properly submitted. \nNote: your application will timeout after 30 minutes of total time or 10 minutes of inactivity.",
	
	ProvincesList_null									: 'Please select...',
	ALBERTA												: 'ALBERTA',
	BRITISH_COLUMBIA									: 'BRITISH COLUMBIA',
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
	
	header_Phone										: '1-800-459-6415',
	//-----------------------------------------End-Common----------------------------------------------
	//----------------------------------------- Overview section ------------------------------	
	
	overview_PromoCodeError								:	"Please enter a valid 4-5 digit promo code",
	overview_ProvinceError								:	"Please select the Province in which you reside to continue with the application",
	
	overview_PromoCodeHint								:	"Please enter the promo code associated with the promotion you received",
	
	chooseProduct_Title									:	"IT WILL TAKE 3-5 MINUTES TO COMPLETE THIS APPLICATION.",
	chooseProduct_LinkText								:	"Choose a different card.",
	chooseProduct_DescriptionTitle						:	"REWARDS AT A GLANCE",
	chooseProduct_Description1_1						:	"Earn Canadian Tire &lsquo;Money&rsquo; rewards",
	chooseProduct_Description1_2						:	"  everywhere you shop.",
	chooseProduct_Description2_1						:	"Redeem Canadian Tire Rewards instantly at any Canadian Tire store",
	chooseProduct_Description3_1						:	"Annual Fee - ",
	chooseProduct_Description3_2						:	"None",
	chooseProduct_Description4_1						:	"Interest Rate - ",
	chooseProduct_Description4_2						:	"19.99%",
	chooseProduct_Description5_1						:	"Cash Advances and Related Fees - ",
	chooseProduct_Description5_2						:	"21.99%",
	
	overview_Title										:	"Please read the information below and click 'Start Application' to continue.",
	overview_PrintDownload_LinkText						:	"<a href='https://www.ctfs.com/SharedContent/documents/e_online_disclosure.pdf' target='_blank'>Print or Download PDF version of disclosure.</a>",
	
	overview_TopTableLeftColTitle						:	"Am I Eligible for this Card?",
	overview_TopTableLeftCol1							:	"You must be a Canadian resident",
	overview_TopTableLeftCol2							:	"You must be at least the age of majority in the province where you reside",
	overview_TopTableLeftCol3							:	"You must be currently employed or retired",
	overview_TopTableRightColTitle						:	"What do I need?",
	overview_TopTableRightCol1							:	"Previous address (if less than 2 years at current address)",
	overview_TopTableRightCol2							:	"Annual income",
	overview_TopTableRightCol3							:	"Current employer name & address",	
	
	overview_CostOfCreditDisclosure_Title				:   "Cost of Credit Disclosure for Credit Card Applications",
	overview_CostOfCreditDisclosure_Row1				:	"Annual Interest Rate",
	overview_CostOfCreditDisclosure_Row1_1				:	"These interest rates will be in effect on the day your account is opened:",
	overview_CostOfCreditDisclosure_Row1_2				:	"All charges to your account (excluding cash advances and related fees) - <span class='fontStyleForBoldTextInOverWievPage'>19.99</span>%",
	overview_CostOfCreditDisclosure_Row1_3				:	"Cash advances and related fees - <span class='fontStyleForBoldTextInOverWievPage'>21.99</span>%",
	overview_CostOfCreditDisclosure_Row1_4				:	"If you are not approved for a card at these rates, Canadian Tire Bank may still issue you a card at an annual interest rate of - <span class='fontStyleForBoldTextInOverWievPage'>25.99</span>% for all charges.",
	
	overview_CostOfCreditDisclosure_Row2				:	"Interest-Free Grace Period",
	overview_CostOfCreditDisclosure_Row2_1				:	"At least <span class='fontStyleForBoldTextInOverWievPage'>21</span> days or, if you are a resident of Quebec, at least <span class='fontStyleForBoldTextInOverWievPage'>26</span> days.",
	overview_CostOfCreditDisclosure_Row2_2				:	"You will benefit from an interest-free grace period of at least <span class='fontStyleForBoldTextInOverWievPage'>21</span> days (at least <span class='fontStyleForBoldTextInOverWievPage'>26</span> days if you are a resident of Quebec) on new purchases if we receive payment in full of the balance due on your current statement by the payment due date.",
	overview_CostOfCreditDisclosure_Row2_3				:	"There is no grace period for cash transactions, such as convenience cheques, balance transfers or cash advances, or for fees for such transactions.",
	
	overview_CostOfCreditDisclosure_Row3				:	"Minimum Payment",
	overview_CostOfCreditDisclosure_Row3_1				:	"The sum of:",
	overview_CostOfCreditDisclosure_Row3_2				:	"(A) Interest and fees shown on your statement, plus",
	overview_CostOfCreditDisclosure_Row3_3				:	"(B) the greater of any amount past due or any balance over your credit limit, plus",
	overview_CostOfCreditDisclosure_Row3_4				:	"(C) the amount of any equal payments plan installments then due, plus",
	overview_CostOfCreditDisclosure_Row3_5				:	"(D)<span class='fontStyleForBoldTextInOverWievPage'> $10.00</span>",
	overview_CostOfCreditDisclosure_Row3_6				:	"Balances under <span class='fontStyleForBoldTextInOverWievPage'>$10.00</span> are due in full.",
	
	overview_CostOfCreditDisclosure_Row4				:	"Foreign Currency Conversion",
	overview_CostOfCreditDisclosure_Row4_1				:	"All transactions made in a foreign currency will be converted to Canadian currency at the then current MasterCard conversion rate plus <span class='fontStyleForBoldTextInOverWievPage'>2.5</span>% (for charges to your account) or minus <span class='fontStyleForBoldTextInOverWievPage'>2.5</span>% (for credits to your account) when the transaction is posted to your account.",
	
	overview_CostOfCreditDisclosure_Row5				:	"Annual Fees",
	overview_CostOfCreditDisclosure_Row5_1				:	"None",
	
	overview_CostOfCreditDisclosure_Row6				:	"Other Fees",
	overview_CostOfCreditDisclosure_Row6_1_1			:	"<span class='fontStyleForBoldTextInOverWievPage'>Cash Advance Fee</span>",
	overview_CostOfCreditDisclosure_Row6_1_2			:	"<span class='fontStyleForBoldTextInOverWievPage'> $4</span> ",
	overview_CostOfCreditDisclosure_Row6_1_3			:	" - Charged when the transaction is posted to your account.",
	overview_CostOfCreditDisclosure_Row6_2_1			:	"<span class='fontStyleForBoldTextInOverWievPage'>NSF/Dishonoured Payment Fee</span>",
	overview_CostOfCreditDisclosure_Row6_2_2			:	"<span class='fontStyleForBoldTextInOverWievPage'> $25 </span>",
	overview_CostOfCreditDisclosure_Row6_2_3			:	" - Charged if a payment you make is dishonoured.",
	overview_CostOfCreditDisclosure_Row6_3_1			:	"<span class='fontStyleForBoldTextInOverWievPage'>Charges for Copies</span>",
	overview_CostOfCreditDisclosure_Row6_3_2			:	"<span class='fontStyleForBoldTextInOverWievPage'> $2 </span>",
	overview_CostOfCreditDisclosure_Row6_3_3			:	" - Charged when you request a copy of a statement or sales slip.",
	overview_CostOfCreditDisclosure_Row6_4_1			:	"<span class='fontStyleForBoldTextInOverWievPage'>Credit Balance Fee</span>",
	overview_CostOfCreditDisclosure_Row6_4_2			:	"The lesser of ",
	overview_CostOfCreditDisclosure_Row6_4_3			:	"<span class='fontStyleForBoldTextInOverWievPage'> $10 </span>",
	overview_CostOfCreditDisclosure_Row6_4_4			:	" or the amount of your credit balance - ",
	overview_CostOfCreditDisclosure_Row6_4_5			:	"Charged on the last day of a billing period when there is a credit balance on the account and the account has been inactive for the previous <span class='fontStyleForBoldTextInOverWievPage'>12</span> billing periods.",
	
	overview_LostOrStolenCards_Title					:	"Lost or Stolen Cards",
	overview_LostOrStolenCards_Text						:	"You must notify Canadian Tire Bank immediately if you think that your Card has been lost or stolen by calling 1-800-459-6415. You are not liable for unauthorized use of a lost or stolen Card, unless your Card is used with a Personal Identification Number to obtain a cash advance at an automated banking machine or to make a purchase, in which case you are liable for the full amount of each unauthorized use until you notify us.",
	
	overview_CustomerServiceDepartment_Title 			:	"Customer Service Department",
	overview_CustomerServiceDepartment_Text1 			:	"In Canada: <b>1-800-459-6415</b>",
	overview_CustomerServiceDepartment_Text2 			:	"Outside Canada (collect): <b>905-735-7256</b>",
	overview_CustomerServiceDepartment_Text3 			:	"The Canadian Tire Options<sup>&reg;</sup> MasterCard<sup>&reg;</sup> is issued by Canadian Tire Bank (&ldquo;CTB&rdquo;) pursuant to a licence by MasterCard International. Your initial credit limit will be an amount not to exceed $25,000. If approved, your card will be sent to you no later than six (6) weeks after application. Address for CTB:",
	overview_CustomerServiceDepartment_Text4 			:	"P.O. Box 2000,",
	overview_CustomerServiceDepartment_Text5 			:	"Welland, Ontario L3B 5S3",
	overview_CustomerServiceDepartment_Text6 			:	"Fax:  1-888-728-5822",
	
	overview_PromoCode									:	"Promo Code",
	overview_Province									:	"Province",
	
	overview_SecurityMessaging_Title					:	"Security Messaging",
	overview_SecurityMessaging_Content					:	"Canadian Tire takes the security of your personal information very seriously. Find out how we safeguard the personal information of our customers.",
	overview_SecurityMessaging_MoreInfo					:	"For more information, visit our",
	overview_SecurityMessaging_PrivacyCharter			:	"<a href='https://www.ctfs.com/SecurityCentre/PrivacyAndSecurity/' target='_blank'>Privacy Charter.</a>",
	
	overview_AutoTimeout_Title							:	"Auto Timeout",
	overview_AutoTimeout_Content						:	"For your protection, auto timeout will end your application session 30 minutes of total time or 10 minutes of inactivity.",
	
	overview_startApplication_Button_Label				:	"Start Application",
	overview_RequiredField_Lable						:	"Indicates Required Field",

	overview_footnoteContentText1						:	"In the form of Canadian Tire &lsquo;Money&rsquo; On The Card<sup>&reg;</sup> awards or Canadian Tire<sup>&reg;</sup> &lsquo;Money&rsquo; Advantage<sup>&reg;</sup> Points, as the case may be. Terms and conditions apply to earning and redeeming. Details available in-store or on the Canadian Tire &lsquo;Money&rsquo; Rewards Program page at ",
	overview_footnoteContentText1Extended				:	"In the form of Canadian Tire &lsquo;Money&rsquo; On The Card<sup>&reg;</sup> awards. Terms and conditions apply to earning and redeeming. Details available in-store or on the Canadian Tire &lsquo;Money&rsquo; Rewards Program page. Options MasterCard customers in Nova Scotia participate in a different rewards program, please go to ",
	overview_footnoteContentText1Link					:	"<a href='https://www.ctfs.com/Products/CreditCards/OptionsMasterCard/CTMoneyRewards/' target='_blank'>ctfs.com/ctm.</a>",
	overview_footnoteContentText2						:	"Provided your account is in good standing and it is a redeemable purchase.",	
	overview_footnoteContentTextLinkBack				:	"back",
	overview_footnoteContentText4						:	"<sup>&reg;</sup>/<sup>&trade;</sup>  Unless otherwise noted, all trademarks are owned by Canadian Tire Corporation, Limited and are used under licence.",
	overview_footnoteContentText5						:	"<sup>&reg;</sup>/<sup>&trade;</sup> MasterCard and the MasterCard Brand Mark are registered trademarks, and PayPass is a trademark, of MasterCard International Incorporated.",	
//	overview_footnoteContentText6 						:	"<sup>&reg;</sup> CredIncorporatedit Protector and Credit Protector-Senior are owned by Canadian Tire Financial Services Limited. ",
	overview_Province_TextField							:	'<select class="fieldValuesSelectField" id="overview_Province_TextField" tabindex=2></select>',
	//--------------- END --------------------- Overview section -------------- END -----------	
	
	//----------------------------------------- Overview Nova Scotia section ------------------------------
	
	//--------------------------------------------- <old> ----------------------------------------------------
	overview_NS_Error									:	"Unfortunately due to the rewards program being run in Nova Scotia instant credit services are unavailable at this time.<br>Go to <a href='http://www.ctfs.com/applynow' target='_blank'>www.ctfs.com/applynow</a> to submit a credit card application.",
	
	overview_NS_TableLeftColTitle						:	"Attention Nova Scotia Customers",
	overview_NS_TableLeftColText1						:	"Please review this important information before you start your application.",
	overview_NS_TableLeftColText2						:	"With the ",
	overview_NS_TableLeftColText3						:	"Canadian Tire 'Money' Advantage",
	overview_NS_TableLeftColText4						:	" program and the Options MasterCard, Canadian Tire is more rewarding for you.",
	overview_NS_TableLeftColText5						:	"Get more rewards",
	overview_NS_TableLeftColText6						:	" with the Canadian Tire 'Money' Advantage card...",
	overview_NS_TableLeftColText7						:	"1 point for every $1 you spend at Canadian Tire stores",
	overview_NS_TableLeftColText8						:	"Points with a multiplier when you fill up at Canadian Tire gas bars",
	overview_NS_TableLeftColText9						:	"Exclusive bonus points in-store, in the flyer or sent directly to you",
	overview_NS_TableLeftColText10						:	"The ",
	overview_NS_TableLeftColText10_1					:	"The ",
	overview_NS_TableLeftColText11						:	"most",
	overview_NS_TableLeftColText12						:	" rewards.",
	overview_NS_TableLeftColText13						:	"best",
	overview_NS_TableLeftColText14						:	" way to pay.",
	overview_NS_TableLeftColText15						:	"You'll collect the MOST Canadian Tire 'Money' Advantage",
	overview_NS_TableLeftColText16						:	" points available",
	overview_NS_TableLeftColText17						:	"3 points for every $1",
	overview_NS_TableLeftColText18						:	" you spend at Canadian Tire stores when you use both your Options MasterCard and your Canadian Tire 'Money' Advantage card",
	overview_NS_TableLeftColText19						:	"Exclusive cardmember multiplier",
	overview_NS_TableLeftColText20						:	" for additional points on gas every time you use both cards at Canadian Tire gas bars",
	overview_NS_TableLeftColText21						:	"Collect points",
	overview_NS_TableLeftColText22						:	" everywhere else you shop",
	overview_NS_TableLeftColText23						:	" with your Options MasterCard.",
	overview_NS_TableLeftColText24						:	"Redeem",
	overview_NS_TableLeftColText25						:	"Points for in-store merchandise &mdash; just like Canadian Tire 'Money'",
	overview_NS_TableLeftColText26						:	"100 points = $1",
	overview_NS_TableLeftColText27						:	"There's no minimum - so you can use a few or save your points up for something big &mdash; the choice is yours",
	overview_NS_TableLeftColText28						:	"Points have no expiry date",
	overview_NS_TableLeftColText29						:	"Donate points to a charity or special cause in your community",
	overview_NS_TableLeftColText30						:	"Plus, enjoy great cardmember features:",
	overview_NS_TableLeftColText31						:	"PayPass",
	overview_NS_TableLeftColText32						:	" for faster checkout",
	overview_NS_TableLeftColText33						:	"Chip technology",
	overview_NS_TableLeftColText34						:	"for added security",
	overview_NS_TableLeftColText35						:	"Online account access",
	overview_NS_TableLeftColText36						:	"including exclusive email offers",
	overview_NS_TableLeftColText37						:	"Worldwide acceptance",
	overview_NS_TableLeftColText38						:	" at millions of places that take MasterCard",
	overview_NS_TableLeftColText39						:	"Cash advances",
	overview_NS_TableLeftColText40						:	" at any Automated Bank Machine (ABM) that displays the MasterCard",
	overview_NS_TableLeftColText41						:	" or Cirrus",
	overview_NS_TableLeftColText42						:	" logos.",
	overview_NS_TableLeftColText43						:	"View Contest Rules",
	overview_NS_TableLeftColText44						:	"TM",
	
	overview_NS_SecurityMessaging_Content				:	"Canadian Tire takes the security of your personal information very seriously. Find out how we safeguard the personal information of our customers.",
	
	overview_NS_RightBannerText1						:	"Get up to 2,000 points*",
	overview_NS_RightBannerText2						:	"when you use your Options MasterCard",
	
	overview_NS_FootnotesText1							:	"<sup>1</sup> Terms, conditions and restrictions apply. Fleet cards excluded. Please see program rules at",
	overview_NS_FootnotesText2							:	" moneyadvantage.com",
	overview_NS_FootnotesText3							:	" for more details.",
	overview_NS_FootnotesText4							:	" Cash advance fee: $4.00. Interest is charged on cash advances from the day you receive the advance until the day you repay the advance and all interest accrued.",
	overview_NS_FootnotesText5							:	"<sup>&reg;</sup>/<sup>&trade;</sup> The Canadian Tire Financial Services logo and Canadian Tire Options are registered trademarks, and Canadian Tire 'Money' Advantage is a trademark, of Canadian Tire Corporation, Limited used under license.",
	overview_NS_FootnotesText6							:	"<sup>&reg;</sup>/<sup>&trade;</sup> MasterCard and the MasterCard Brand Mark are registered trademarks, and ",
	overview_NS_FootnotesText7							:	" is a trademark, of MasterCard International Incorporated.",
	overview_NS_FootnotesText8							:	"<sup>*</sup> Contest commences February 24, 2012 and ends December 31, 2013. To enter, apply for the Options MasterCard. Eighty-five percent (85%) of all coupons printed in the Contest will have a value of five hundred  (500) Canadian Tire 'Money' Advantage<sup>&trade;</sup> points (retail value $5.00), ten percent (10%) of all coupons printed in the Contest will have a value of one thousand (1,000) Canadian Tire 'Money' Advantage<sup>&trade;</sup> points (retail value $10.00), and five percent (5%) of all coupons printed in the Contest will have a value of two thousand (2,000) Canadian Tire 'Money' Advantage<sup>&trade;</sup> points (retail value $20.00). Only open to residents of Canada who have reached the age of majority. You must make a purchase with your new Options MasterCard prior to the expiry date to use the Coupon. Correct answer to skill-testing question required. For complete Contest Rules, please see the Canadian Tire credit card representative or visit ctfs.com/ncbpc.",

	overview_NS_moneyPlusOMCImage						:	'<a href="#" id="moneyPlusOMCImage" class="moneyPlusOMCImageBlock"></a>',
	//--------------------------------------------- </old> ----------------------------------------------------
	
	overview_NS_LeftProgramAlertText0					:   "Exciting News!",
	overview_NS_LeftProgramSidebarText					:   "A FASTER WAY TO COLLECT YOUR CANADIAN TIRE 'MONEY'",
	overview_NS_LeftProgramAlertText					:	"The Canadian Tire Options<sup>&reg;</sup> MasterCard<sup>&reg;</sup> rewards program participates in is changing",
	overview_NS_LeftHeadingText2						:   "If you are applying for an Options MasterCard from outside of Nova Scotia:",
	overview_NS_TableLeftColTxt4						:   "The Canadian Tire 'Money' rewards program on your Canadian Tire Options MasterCard is changing on Oct 28<sup>th</sup> to the My Canadian Tire 'Money'<sup>&trade;</sup> Program.",
	overview_NS_TableLeftColTxt5						:   "Instead of collecting Canadian Tire ‘Money’ On The Card<sup>&reg;</sup> awards, you’ll be collecting e-Canadian Tire ‘Money’<sup>&trade;</sup>.",
	overview_NS_LeftHeadingText1	    				:	"If you are applying for an Options MasterCard from Nova Scotia:",
	overview_NS_TableLeftColTxt1						:   "The Canadian Tire ‘Money’ Advantage<sup>&reg;</sup> program will be changing on October 10<sup>th</sup> to the My Canadian Tire ‘Money’ Program.",
	overview_NS_TableLeftColTxt2						:   "Now collect e-Canadian Tire ‘Money’ instead of Canadian Tire ‘Money’ Advantage points at our stores including at canadiantire.ca when you purchase qualifying merchandise.",
	overview_NS_TableLeftColTxt3						:   "Please note: The rate at which you’ll collect e-Canadian Tire ‘Money’ is different than the rate at which Canadian Tire ‘Money’ Advantage points can be collected.<sup>2</sup>",
	overview_NS_LeftHeadingText3						:   "As part of the new program, exclusive to you as an Options MasterCard cardmember:",
	overview_NS_TableLeftColTxt7					    :   "Collect 10X e-Canadian Tire ‘Money’<sup>1</sup> every day at Canadian Tire stores, including on automotive service, at Partsource<sup>&reg;</sup>, Mark’s<sup>&reg;</sup> and at Sportcheck<sup>&reg;1</sup>.",
	overview_NS_TableLeftColTxt8						:   "Collect 2X e-Canadian Tire ‘Money’ everywhere else you shop<sup>1</sup>.",
	overview_NS_TableLeftColTxt9						:   "Collect e-Canadian Tire ‘Money’ at participating Canadian Tire gas bars<sup>3</sup>.",
	overview_NS_TableLeftColTxt10						:   "Redeeming is easy, right at the checkout at Canadian Tire stores or online for gift cards at canadiantire.ca.",
	overview_NS_TableLeftColTxt11						:   "Watch your mail for details about this exciting news!",
						 
	overview_NS_FootnotesTxt1							:   "<sup>1</sup> Canadian Tire Options MasterCard cardmembers collect e-Canadian Tire ‘Money’ at a rate that is 10X (or 2X as the case may be) the rate at which other members of the My Canadian Tire ‘Money’ program collect e-Canadian Tire ‘Money’ on purchases made by such other members at Canadian Tire stores (if those other members paid by cash, debit or a credit card not linked to this loyalty program). The offered rate is exclusive of any bonus or promotional offers or redemption transactions.",
	overview_NS_FootnotesTxt2							:   "<sup>2</sup> e-Canadian Tire ‘Money’ collected at Canadian Tire stores or online at canadiantire.ca is calculated on the pre-tax amount of the qualifying purchase, and is rounded to the nearest penny. For current rate(s) call 1-800-226-8473.",
	overview_NS_FootnotesTxt3							:   "<sup>3</sup> Minimum fuel purchase may be required. Rate may vary by location. See local gas bars for details.",
	overview_NS_FootnotesTxt5							:   "<sup>&reg;</sup>/<sup>&trade;</sup> Canadian Tire, Canadian Tire ‘Money’ On The Card, Canadian Tire ‘Money’ Advantage, Canadian Tire Options, PartSource and the Canadian Tire triangle design are registered trademarks, and My Canadian Tire ‘Money’ and e-Canadian Tire ‘Money’ are trademarks, of Canadian Tire Corporation, Limited.",
	overview_NS_FootnotesTxt6						    :   "<sup>&reg;</sup>/<sup>&trade;</sup> MasterCard and the MasterCard Brand Mark are registered trademarks, and <i>PayPass</i> is a trademark, of MasterCard International Incorporated.",
	
	//--------------- END --------------------- Overview Nova Scotia section -------------- END -----------	
	
	
	productSelection_Title								:   "Product Selection",
	
	//----------------------------------------- Personal Information section ------------------------------
	
	personalInformation_CTProfileLabel					:	"Click here to copy available information from My CT Profile",
	
	personalInformation_LoyaltyMembershipNumberError	:	"Please enter sixteen digits",
	personalInformation_LoyaltyMembershipNumberPreError	:	"Please enter six digits",
	
	personalInformation_TitleError						:	"Please select your title",  
	personalInformation_FirstNameError					:	"Please enter your first name",
	personalInformation_LastNameError					:	"Please enter your last name",
	personalInformation_DateofBirthMonthError			:	"Please enter a valid birth month",
	personalInformation_DateofBirthDateError			:	"Please enter a valid birth date",
	personalInformation_DateofBirthYearError			:	"Please enter a valid birth year",
	personalInformation_EmailAddressError				:	"Please enter a valid email address",
	personalInformation_PreferredLanguageError			:	"Please choose a preferred language",
	personalInformation_PrimaryPhoneError				:	"Please enter a valid phone number",
	personalInformation_SINError						:	"Please enter a valid Social Insurance Number",
	personalInformation_StreetError						:	"Please enter a street number",
	personalInformation_StreetNameError					:	"Please enter your street name",
	personalInformation_AptError						:	"Please enter a valid Apt./Suite #",
	personalInformation_CityError						:	"Please enter your city or town",
	personalInformation_ProvinceError					:	"Please choose a province from the drop down list",
	personalInformation_PostalCodeError					:	"Pleas enter a valid postal code (e.g. A1A 1A1)",
	personalInformation_ResidentialStatusError			:	"Please choose a residential status from the drop down list",
	personalInformation_MonthlyHousingPaymentError		:	"Please enter your monthly mortgage/rent amount.  Do not include spaces, decimals or commas (e.g. 1500)",
	personalInformation_SinceMonthError					:	"Please enter a valid month",
	personalInformation_SinceYearError					:	"Please enter a valid year",
	
	personalInformation_FutureDateError					:	"Future date can not be entered",
	
	personalInformation_EmploymentTypeError				:	"Please choose an employment type from the drop down list",
	personalInformation_EmployerError				:		"Please enter the name of your current employer",
	personalInformation_EmployerCityError				:	"Please enter the city/town of your current employer",
	personalInformation_JobTitleError					:	"Please choose a job title from the drop down list",
	personalInformation_JobDescriptionError				:	"Please enter your occupation description",
	personalInformation_EmployerSinceMonthError			:	"Please enter a valid month",
	personalInformation_EmployerSinceYearError			:	"Please enter a valid year",
	personalInformation_GrossAnnualIncomeError			:	"Please enter your gross annual income.  Do not include spaces, periods or commas (e.g. 35,000 per year)",
	
	personalInformation_EmailAddressHint				:	"You must provide your email address so that we can send the terms & conditions, as well as the approval details of your new card upon approval. If you do not provide your email address you will need to apply for a credit card by different means.",
	personalInformation_SINHint							:	"Providing your SIN allows us to more efficiently process your financial information",
	personalInformation_GrossAnnualIncomeHint			:	"Includes your total income before income tax.  This includes income from employment retirement plans, pensions and other sources of income rounded to the nearest dollar.  Do not include spaces, periods or commas (e.g. 35,000)",
	
	personalInformation_Title							:	"Personal Information",
	personalInformation_liTitle1						:	"More ways to earn rewards on purchases",
	personalInformation_liTitle2						:	"Plus enjoy great cardmember benefits",
	
	personalInformation_makeCorrections					: 	"Please make corrections to all fields highlighted in red.",
	personalInformation_saveMeTime						:	"Yes, save me time by using the information from My CT profile.",
	
	personalInformation_RewardsOnPurchases1				:	"Earn Canadian Tire 'Money' rewards<sup><small>1</small></sup>  EVERYWHERE you shop",
	personalInformation_RewardsOnPurchases2				:	"Get even more rewards at Canadian Tire stores<sup><small>1</small></sup> ",
	personalInformation_RewardsOnPurchases3				:	"Enjoy Bonus Cardmember Exclusives",
	personalInformation_RewardsOnPurchases4				:	"Redeem your rewards for anything at Canadian Tire stores<sup><small>2</small></sup>  and online",
	
	personalInformation_cardmemberBenefits1				:	"PayPass<sup>&trade;</sup>  for faster checkout",
	personalInformation_cardmemberBenefits2				:	"Chip technology for added security",
	personalInformation_cardmemberBenefits3				:	"Online account access including exclusive email offers",
	personalInformation_cardmemberBenefits4				:	"Worldwide acceptance at millions of places that take MasterCard<sup>&reg;</sup>",
	personalInformation_cardmemberBenefits5				:	"Cash advance",
	
	personalInformation_AboutYourself					:	"Tell us about yourself",
	personalInformation_Asterix							:	"*",
	personalInformation_requiredField					:	"Indicates Required Field",
	
	personalInformation_TitleField						:	"Title",
	personalInformation_MoneyAdvantageField				:	"Canadian Tire 'Money' Advantage<sup>&trade;</sup> card number",	
	personalInformation_MoneyAdvantage_MessageField	    :	"If you are already a member, please enter your Canadian Tire 'Money' Advantage<sup>&trade;</sup> account number. If you are approved for the credit card that you are applying for, Canadian Tire 'Money' Advantage points collected with that card will be credited to that account. If left blank, a Canadian Tire 'Money' Advantage number will be assigned to you",	
	personalInformation_NameField							:	"Name",
	personalInformation_FirstName							:	"First Name",
	personalInformation_Initial								:	"Initial",
	personalInformation_LastName							:	"Last Name",
	personalInformation_DateOfBirth							:	"Date of Birth",
	personalInformation_EmailAddress						:	"Email Address",
	//personalInformation_ReceiveEmail						:	"I would like to receive e-mail communications on offers, promotions, contests, and information on products and services, from the Canadian Tire family of companies including Canadian Tire Financial Services Limited and Canadian Tire Bank (``CTFS-CTB``). For details on who the family of companies is, please see our Privacy Charter. The Canadian Tire family of companies and CTFS-CTBs mailing address is: 3475 Superior Crt, Oakville, ON L6L OC6. They can also be reached at 1-800-459-6415 or customerservice@canadiantire.ca . I understand that I may withdraw my consent at any time.",
	personalInformation_ReceiveEmail						:	"I would like to receive offers, promotions, contests, giveaways, events, coupons and other information about products and services that may be of interest to me by email, text message (standard text messaging and data rates may apply) and other electronic messaging from Canadian Tire Corporation, Limited (&ldquo;CTC&rdquo;), Canadian Tire Financial Services Limited (&ldquo;CTFS&rdquo;), and Canadian Tire Bank (&ldquo;CTB&rdquo;), including from their respective business units operating under the Canadian Tire,  Canadian Tire 'Money' Rewards Program (or Canadian Tire 'Money' Advantage<sup>&reg;</sup> Program if you are a resident of Nova Scotia), Canadian Tire Drivers Academy<sup>&reg;</sup>, Canadian Tire Home Services<sup>&trade;</sup>, and Canadian Tire Roadside Assistance<sup>&reg;</sup> brands, as well as from other CTC-CTFS-CTB affiliates and/or marketing partners. You may contact CTC-CTFS-CTB, at P.O. Box 2000 Welland, ON L3B 5S3 or customerservice@canadiantire.ca. I understand that I may withdraw my consent at any time.",
	personalInformation_PreferredLanguage					:	"Preferred Language",
	personalInformation_PreferredLanguageEnglish			:	"English",
	personalInformation_PreferredLanguageFrench				:	"French",
	personalInformation_PrimaryPhone						:	"Primary Phone",
	personalInformation_SocialInsurance						:	"Social Insurance #",
	personalInformation_Address								:	"Address",
	personalInformation_StreetName							:	"Street Name",
	personalInformation_StreetNumber						:	"Street Number",
	personalInformation_Suite								:	"Apt./Suite #",
	personalInformation_City								:	"City",
	personalInformation_Province							:	"Province",
	personalInformation_PostalCode							:	"Postal Code",
	personalInformation_HousingInformation					:	"Housing Information",
	personalInformation_ResidentialStatus					:	"Residential Status",
	personalInformation_MonthlyHousingPayment				:	"Monthly Housing Payment",
	personalInformation_MonthlyHousingPayment1				:	".00 / Month",
	personalInformation_AddressSince						:	"At This Address Since",
	
	personalInformation_EmploymentInformation				:	"Employment Information",
	personalInformation_EmploymentType						:	"Employment Type",
	personalInformation_Employer							:	"Employer",
	personalInformation_JobTitle							:	"Job Category",
	personalInformation_JobDescription						:	"Job Title",
	personalInformation_EmployerSince						:	"With this employer<br>since", // <br> tag is for proper locating in the table cell
	
	personalInformation_FinancialInformation				:	"Financial Information",
	personalInformation_GrossAnnualIncome					:	"Gross Annual Income",
	personalInformation_BankingProducts						:	"My Banking Products (check all that apply)",
	personalInformation_BankLoan							:	"Bank Loan",
	personalInformation_SavingsAccount						:	"Savings Account",
	personalInformation_ChequingAccount						:	"Chequing Account",
	personalInformation_GasCard								:	"Gas Card",
	personalInformation_StoreCard							:	"Store Card",
	personalInformation_CreditCard							:	"Credit Card",
	personalInformation_Dollar								:	"$",
	personalInformation_prevAddressTitle					:	"Previous address only required if less than 2 years at current address.",
	
	personalInformation_DOB_18YearsError					:	"Must be 18 years of age or older to apply",
	personalInformation_DOB_19YearsError					:	"Must be 19 years of age or older to apply",
	
	employmentType_FullTime									:	"Full Time",
	employmentType_Seasonal									:	"Seasonal",
	employmentType_PartTime									:	"Part Time",
	employmentType_Retired									:	"Retired",
	
	residentialStatus_Own									:	"Own",
	residentialStatus_Rent									:	"Rent",
	residentialStatus_Parents								:	"With Parents",
	residentialStatus_Other									:	"Other",
	
	jobTitlesList_DR								: 	'DRIVER',
	jobTitlesList_GU								: 	'GUARD',
	jobTitlesList_HO								: 	'HOMEMAKER',
	jobTitlesList_LA								: 	'LABOURER',
	jobTitlesList_MA								: 	'MANAGER',
	jobTitlesList_MI								: 	'MILITARY',
	jobTitlesList_OF								: 	'OFFICE STAFF',
	jobTitlesList_OW								: 	'OWNER',
	jobTitlesList_FA								: 	'PRODUCTION WORKER',
	jobTitlesList_PR								: 	'PROFESSIONAL',
	jobTitlesList_RE								: 	'REPAIRER',
	jobTitlesList_RT								: 	'RETIRED',
	jobTitlesList_SA								: 	'SALES',
	jobTitlesList_SE								: 	'SERVICE',
	jobTitlesList_ST								: 	'STUDENT',
	jobTitlesList_TR								: 	'TRADES',
	jobTitlesList_UN								: 	'UNEMPLOYMENT',
	jobTitlesList_OT								: 	'OTHER',
	
    personalData_MR									:	"Mr.",
    personalData_MRS								:	"Mrs.",
    personalData_MISS								:	"Miss.",
    personalData_MS									:	"Ms.",
	
	personalInformation_useMyCTProfileButtonText	  			:	'<span class="buttonCTText">Use My CT profile information</span>',
	personalInformation_Title_TextField							:	'<select class=\"fieldValuesSelectField titleField\" id=\"personalInformation_Title_TextField\" />',
	personalInformation_Month									:	'<select class=\"fieldValuesSelectField dateOfBirthMonthField\" id=\"personalData_DateOfBirth_Month\" placeholder=\"Month\" />',
	personalInformation_Day										:	'<select class=\"fieldValuesSelectField dateOfBirthDayField\" id=\"personalData_DateOfBirth_Day\" placeholder=\"Day\" />',
	personalInformation_Year									:	'Year',
	personalInformation_Province_TextField						:	'<select class="fieldValuesSelectField addressProvinceField" id="personalInformation_Province_TextField"/>',
	personalInformation_ResidentialStatus_TextField				:	'<select class="fieldValuesSelectField residentialStatusField" id="personalInformation_ResidentialStatus_TextField"/>',
	personalInformation_AddressSince_Month						:	'<select class="fieldValuesSelectField dateOfBirthMonthField" id="personalInformation_AddressSince_Month" placeholder="Month" />',
	personalInformation_AddressSince_Year						:	'Year',
	personalInformation_PrevProvince_TextField					:	'<select class="fieldValuesSelectField addressProvinceField" id="personalInformation_PrevProvince_TextField"/>',
	personalInformation_EmploymentType_TextField				:	'<select class="fieldValuesSelectField" id="personalInformation_EmploymentType_TextField" />',
	personalInformation_JobTitle_TextField						:	'<select class="fieldValuesSelectField" id="personalInformation_JobTitle_TextField" />',
	personalInformation_EmployerSince_Month						:	'<select class="fieldValuesSelectField dateOfBirthMonthField" id="personalInformation_EmployerSince_Month" placeholder="Month" />',
	personalInformation_EmployerSince_Year						:	'Year',
	
	personalInformation_grossIncomeError1						:	'The Gross Annual Income entered is $',
	personalInformation_grossIncomeError2						:	'. Is this correct?',
	
	//--------------- END --------------------- Personal Information section -------------- END -----------

	//----------------------------------------- OPTIONAL PRODUCTS section ------------------------------
	
	additionalInformation_RelationshipError					:   "Please choose a relationship type from the drop down list",
	additionalInformation_NoRadioSelecedError				:   "Please make a selection",
	additionalInformation_AgreeToTermsError					:   "If you would like to enrol in this product, you must agree to the Terms and Conditions to continue",
	
	additionalInformation_Title								:   "Optional products",
	additionalInformation_GetSuplementaryCard				:	"Get a Supplementary Card",
	additionalInformation_Asterix							:	"*",
	additionalInformation_requiredField						:	"Indicates Required Field",
	
	additionalInformation_TitleField						:	"Title",
	additionalInformation_NameField							:	"Name",
	additionalInformation_FirstName							:	"First Name",
	additionalInformation_Initial							:	"Initial",
	additionalInformation_LastName							:	"Last Name",
	additionalInformation_DateOfBirth						:	"Date of Birth",
	additionalInformation_PrimaryPhone						:	"Primary Phone",
	additionalInformation_Relationship						:	"Relationship",
	additionalInformation_Address							:	"Address",
	additionalInformation_StreetName						:	"Street Name",
	additionalInformation_StreetNumber						:	"Street Number",
	additionalInformation_Suite								:	"Apt./Suite #",
	additionalInformation_City								:	"City",
	additionalInformation_Province							:	"Province",
	additionalInformation_PostalCode						:	"Postal Code",
	additionalInformation_SameAddressAsPrimaryCardholder	:	"Same address as Primary Cardholder?",
	additionalInformation_SameAddresYes						:	"Yes",
	additionalInformation_SameAddresNo						:	"No",
	additionalInformation_OptionalInsurance					:	"Optional Insurance",
	
	additionalInformation_AuthorizeSupplementaryCardmember	:	"! I would like to authorize a supplementary cardmember for this account and request a FREE supplementary card with his/her name.",
	
	additionalInformation_OptionalInsurance_IdentityWatch   :   "- Enrol me in Identity Watch Classic<sup>&trade;</sup",
	additionalInformation_OptionalInsurance_ProtectionAdvantage   :   "- Enrol me in Protection Advantage<sup>&trade;</sup",
	additionalInformation_OptionalInsurance_DoNotEnrolMe 	:   "- Do not Enrol me in Optional Insurance.",
	
	
	additionalInformation_OptionalInsurance_Details			:	"<i>(not available for residents of Saskatchewan)</i><ul><li>$1.10 per $100* of your monthly statement balance, less any amount of insurance premium charged, in any month with a statement balance of $10 or more charged to the <i>Canadian Tire</i><sup>&reg;</sup> MasterCard<sup>&reg;</sup>.</li></ul><br>For example if your balance is $200 at the time your statement prints you would pay just $2.20 plus applicable taxes.",
	additionalInformation_OptionalInsurance_Details1		:   " ",
	additionalInformation_OptionalInsurance_Details2		:   "Help protect your and your family’s private and valuable information with Identity Watch Classic."
															+ "<ul><li>Online monitoring  of your registered personal information</li>"
															+ "<li>Rebound<sup>&reg;</sup> Asset Return Service*** which may help you recover lost or stolen items</li>"
															+ "<li>Computer Tune-Up Reimbursement*** of up to $75 CDN, inclusive of taxes, per subscription year.</li>"
															+ "<li>Plus Card Protection, Online Data Backup, Credit Card Theft Reward Service*** a $3,000 CDN reward.</li>"
															+ "<li>$4.99*** payable in advance monthly after the first transaction is made on your Canadian Tire branded credit card.</li></ul>"
															+ "<br>If you enrol in Identity Watch Classic, your subscription will be effective as of the enrolment date indicated on your Welcome Letter which is included in your Identity Watch Classic Welcome Package.",															
		 
	additionalInformation_Final_Details                     :   "A Few Final Details",
	additionalInformation_Final_Details_Language            :   "Preferred Language",
	additionalInformation_Final_Details_Statement           :   "Statement Preference",
	additionalInformation_Final_Details_Subscription        :   "Yes, please send me emails on product offers and exclusives cardmember details",
	
	additionalInformation_Spouse							:	"Spouse",
	additionalInformation_Son								:	"Son",
	additionalInformation_Daughter							:	"Daughter",
	additionalInformation_Relative							:	"Relative",
	additionalInformation_Other								:	"Other",
	additionalInformation_Credit_Protector_Text             :   "I have read and fully agree to the <a href='https://www.ctfs.com/ApplyNow/CreditProtector/SummaryOfCoverages/' target='_blank'>Terms and Conditions</a> of the Credit Protector/Credit Protector Senior.",
	additionalInformation_Identity_Watch_Text               :   "I have read and fully agree to the <a href='https://www.ctfs.com/Products/TermsandConditions/IDWatch/' target='_blank'>Terms and Conditions</a> of identity Watch.",	
	additionalInformation_ProtectionAdvantage_Text          :   "I have read and fully agree to the <a href='https://www.ctfs.com/Products/TermsandConditions/ProtectionAdvantage/' target='_blank'>Terms and Conditions</a> of Protection Advantage.",
	
	additionalInformation_IdentityWatch_Terms				: " ",
	additionalInformation_ProtectionAdvantage_Terms			: " ",
	additionalInformation_EarnReward						: '<div class="additionalInformation_EarnReward" />',
	additionalInformation_Title_TextField					: '<select class="fieldValuesSelectField titleField" id="additionalInformation_Title_TextField" />',
	additionalInformation_DateOfBirth_Month					: '<select class="fieldValuesSelectField dateOfBirthMonthField" id="additionalInformation_DateOfBirth_Month" placeholder="Month" />',
	additionalInformation_DateOfBirth_Day					: '<select class="fieldValuesSelectField dateOfBirthDayField" id="additionalInformation_DateOfBirth_Day" placeholder="Day" />',
	additionalInformation_DateOfBirth_Year					: 'Year',
	additionalInformation_Relationship_TextField			: '<select class="fieldValuesSelectField addressProvinceField" id="additionalInformation_Relationship_TextField"/>',
	additionalInformation_Province_TextField				: '<select class="fieldValuesSelectField addressProvinceField" id="additionalInformation_Province_TextField"/>',
	
	//--------------- END --------------------- OPTIONAL PRODUCTS section -------------- END -----------
	
	//----------------------------------------- Confirmation section ------------------------------
	
	confirmation_EditModeError							:   "Please save your changes to continue",
	
	confirmation_Title									:   "Confirmation",
	confirmation_Edit_Button_Label                      :   "Edit",
	confirmation_Terms_Conditions                       :   "Application Authorization and Terms and Conditions",
	confirmation_Privacy_Charter                        :   "<a href='https://www.ctfs.com/SecurityCentre/PrivacyAndSecurity/PrivacyCharter/' target='_blank'>See our Privacy Charter</a>",
	confirmation_Privacy_Charter_Text                   :   "By clicking this checkbox, I accept and agree to the Application Authorization.",
	confirmation_Application_Authorization_Title        :   "Application Authorization:",
	confirmation_Application_Authorization_SubTitle     :   "By clicking the checkbox below I agree as follows:",
	confirmation_Application_Authorization_Item1        :   "Please open an account in my name for the type of Canadian Tire Options<sup>&reg;</sup> MasterCard<sup>&reg;</sup> credit card indicated above (the \"Card\") with an annual interest rate of 19.99% for all charges (excluding cash advances and related fees) and 21.99% for cash advances and related fees.",
	
	
	confirmation_Application_Authorization_Item5        :   "I will be bound by the terms and conditions of the CTB Cardmember Agreement that I will receive with the Card, as such agreement may be amended from time to time. I will be solely liable for any charges to the account, including charges made by anyone to whom I have asked that you issue a supplementary card. I will be the only person who receives a monthly statement.",
	confirmation_Application_Authorization_Item6        :   "You may obtain credit and other personal information about me from, and exchange such information with, credit reporting agencies.",
	confirmation_Application_Authorization_Item7        :   "Each person to whom I have asked that you issue a supplementary card has authorized me to provide you with the above information about them.",
	confirmation_Application_Authorization_Item8        :   "If I provide you with my Social Insurance Number, you may use it to identify me, including with credit reporting agencies.",
	confirmation_Application_Authorization_Item9		:	"I agree that if approved you can provide me with initial disclosure statement and cardmember agreement by way of an email to the email address provided in this application.",
	confirmation_Application_Authorization_Item10       :   "I have read and understood this application.",
	confirmation_UnitNumber                             :   "unit #",
	confirmation_Suite		                            :   "Apt./Suite # ",
	confirmation_prevAddressTitle                       :   "Previous Address",
	confirmation_Information_Accurate_Text              :   "Please ensure the information submitted is accurate as this will help us process your application today!",
	confirmation_Update_CT_Profile_Text					:   "Update my CT profile with the address information provided in this application.",
	confirmation_ReceiveEmail                           :    ', I would like to receive e-mail communications on offers, promotions, contests, and information on products and services.',
	confirmation_PrintPage								:	'Print this page',
	confirmation_print_header							:	'<img src="app/images/static_header_confirmation.png"  class="print_header" id="img2" alt="test" width="954">',
	confirmation_ScreenIndicator						:	"Please wait...",
	confirmation_footnoteContentText1					:	"<sup>1</sup> In the form of Canadian Tire ‘Money’ On The Card<sup>&reg;</sup> awards. Terms and conditions apply to earning and redeeming. Details available in-store or on the Canadian Tire 'Money' Rewards Program page. Options MasterCard customers in Nova Scotia participate in a different rewards program, please go to",
	confirmation_footnoteContentText1Link				:	"<a href='https://www.ctfs.com/Products/CreditCards/OptionsMasterCard/CTMoneyRewards/' target='_blank'>ctfs.com/ctm.</a>",
	confirmation_footnoteContentText2					:	"<sup>2</sup> Provided your account is in good standing and it is a redeemable purchase.",	
	confirmation_footnoteContentText4					:	"<sup>&reg;</sup>/<sup>&trade;</sup> Unless otherwise noted, all trademarks are owned by Canadian Tire Corporation, Limited and are used under licence.",
	confirmation_footnoteContentText5					:	"<sup>&reg;</sup>/<sup>&trade;</sup> MasterCard and the MasterCard Brand Mark are registered trademarks, and PayPass is a trademark, of MasterCard International Incorporated.",	

	//--------------- END --------------------- Confirmation section -------------- END -----------
	
	//----------------------------------------- Identity Verification section ------------------------------
	
	identityVerification_NoSelectionError				:   "You must answer each identity verification question presented to continue",
	
	identityVerification_Title							:   "Identity Verification",
	identityVerification_Congratulations				:   "CONGRATULATIONS!",
	
	identityVerification_CardNumberText					:   "Card Number: ",
	identityVerification_CardLimitText					:   "Card Limit: ",
	identityVerification_CardAPRText					:   "APR: ",
	
	confirmation_Button_Label                           :   "Submit Application and Verify Identity",	
	identityVerification_FinalText1						:	"You have been approved for your new Canadian Tire Options<sup>&reg;</sup> MasterCard<sup>&reg;</sup> which will now be added to your My Canadian Tire Account, so you can start using it online on canadiantire.ca today!",
	//identityVerification_FinalText2						:	"You will also receive your Options MasterCard in the mail within 7-10 business days to use everywhere else.",
	//identityVerification_FinalText3						:	"Your initial disclosure statement and cardmember agreement will be sent to you via email at: ",
	identityVerification_FinalText3						:	"All the important information outlining your new Canadian Tire Options MasterCard and its associated benefits will be sent to you via email at: ",
	identityVerification_FinalText4						:	"If this is incorrect, please call 1-800-459-6415. You will also receive a copy of this information in the welcome package that includes your physical card.",
	identityVerification_FinalText5						:	"*Take note of your last four digits for reference in your My CT account and checkout process.",
	
	identityVerification_PendingTitle					:   "THANK YOU - WE HAVE RECEIVED YOUR APPLICATION",
	identityVerification_PendingText1					:	"Your application is now being reviewed by our application team. We were unable to process your application form instantly today.",
	identityVerification_PendingText2					:	"Depending on the level of information you provided, approval can take from a few days to couple of weeks.",
	identityVerification_PendingText3					:	"When will I receive my card?",
	identityVerification_PendingText4					:	"If approved, you will receive correspondence in the mail within 7-10 business days.",
	identityVerification_TUPendingText1					:	"Unfortunately our Instant Credit services are temporarily unavailable, however your application will still be processed.",
	identityVerification_TUPendingText2					:	"NOTE: Do <u>NOT</u> attempt to resubmit your application.",
	
	identityVerification_ContinueShopping				:	"Continue Shopping",
	identityVerification_ProceedToCheckout				:	"Proceed to Checkout",
	identityVerification_Submit							:	"Submit",
	
	
	identityVerification_Exam1Question					:	"From the following list, select one of your previous employers",
	identityVerification_Exam1Answer1					:	"Versina Trust",
	identityVerification_Exam1Answer2					:	"HSBC Bank Canada",
	identityVerification_Exam1Answer3					:	"Bank of Nova Scotia",
	identityVerification_Exam1Answer4					:	"TD Canada Trust",
	
	identityVerification_Exam2Question					:	"You have a car loan with which of the following institutions:",
	identityVerification_Exam2Answer1					:	"Honda Finance",
	identityVerification_Exam2Answer2					:	"Chevrolet Financing",
	identityVerification_Exam2Answer3					:	"TD Auto Loan",
	
	identityVerification_ScreenIndicator				:	"Just a minute - your application is currently being processed...",
	identityVerification_FireFoxProblem 				:	" You have completed the application process - you may close this window and continue shopping at canadiantire.ca",
	
	identityVerification_ProtectionNote 				:	"For your protection and security, you will be asked 3 questions that only you will know the answers to.",
		
	identityVerification_EcommProfile_Update_Request_Failed	:	"Unfortunately, we cannot access your My CT Account at this time. To have your new card manually added to your My CT Account, please call 1-800-387-8803.",
	
	identityVerification_ApplicationDataValidatonFailed	:	"Unfortunately, the application could not be submitted due to an internal issue. Please try again.",

	//---------US3084 iLoyalty - BRB front facing chagnes -  Loyalty Notification --------------//	
	
	overview_NS_Attention                 		        :   "Attention Residents of Nova Scotia: <br> The following Cost of Credit Disclosure for Credit Card Applications is not applicable to Nova Scotia residents who are applying for a Canadian Tire Options MasterCard. The next step of the application process will show the appropriate Cost of Credit Disclosure.",	
	overview_NS_AttentionNote                           :   "",
	overview_NS_LeftRed                                 :   "The rewards program that the Canadian Tire Options<sup>&reg;</sup> MasterCard<sup>&reg;</sup> participates in has changed.",
	overview_NS_LeftTitile                              :   "As of October 10 2014, the Canadian Tire ‘Money’ Advantage<sup>&reg;</sup>program has changed to the My Canadian Tire ‘Money’<sup>&trade;</sup> program",
	overview_NS_LeftBullet1                                 :   "Collect 10X e-Canadian Tire ‘Money’<sup>&trade;1</sup> every day at Canadian Tire stores, including on automotive service, at Partsource<sup>&reg;</sup>, Mark’s<sup>&reg;</sup> and at Sportcheck<sup>&reg;2</sup>.",
	overview_NS_LeftBullet2                                 :   "Collect 2X e-Canadian Tire ‘Money’ everywhere else you shop<sup>2</sup>.",
	overview_NS_LeftBullet3                                 :   "Collect e-Canadian Tire ‘Money’ at participating Canadian Tire gas bars<sup>4</sup>.",
	overview_NS_LeftNote                                 :   "Please note: The rate at which you’ll collect e-Canadian Tire ‘Money’ is different than the rate at which Canadian Tire ‘Money’ Advantage points can be collected.<sup>3</sup>",
	overview_NS_LeftText                                 :   "Redeeming is easy, right at the checkout at Canadian Tire stores or online for gift cards at canadiantire.ca ",
	overview_NS_DisclosureRed                                 :   "Cost of Credit Disclosure for Credit Card Applications",
	overview_NS_DisclosureLeft1                                :   "Annual Interest Rate",
	Overview_NS_DisclosureRight1                                :   "<p>These interest rates will be in effect on the day your account is opened: <br>All charges to your account (excluding cash advances and related fees) - <strong>19.99%</strong></p> <p>Cash advances and related fees - <strong>21.99%</strong></p> <p>If you are not approved for a card at the above rates, Canadian Tire Bank may still issue you a card at an annual interest rate of - <strong>25.99%</strong> for all charges (excluding cash advances and related fees) and <strong>27.99%</strong> for cash advances and related fees.</p>",
	overview_NS_DisclosureLeft2                                :   "Interest-Free Grace Period",
	Overview_NS_DisclosureRight2                               :   "<p>At least <strong>21</strong> days or, if you are a resident of Quebec, at least <strong>26</strong> days.</p><p> You will benefit from an interest-free grace period of at least <strong>21</strong> days (at least <strong>26</strong> days if you are a resident of Quebec) on new purchases if we receive payment in full of the balance due on your current statement by the payment due date.</p><p> There is no grace period for cash transactions, such as convenience cheques, balance transfers or cash advances, or for fees for such transactions.</p>",	
	overview_NS_DisclosureLeft3                                :   "Minimum Payment",
	Overview_NS_DisclosureRight3                               :   "<p>The sum of: </p><p>(A) interest and fees shown on your statement, plus </p><p>(B) the greater of any amount past due or any balance over your credit limit, plus </p><p>(C) the amount of any equal payments plan installments then due, plus </p><p>(D) <strong>$10.00</strong> </p><p> Balances under <strong>$10.00</strong> are due in full.</p> ",	
	overview_NS_DisclosureLeft4                                :   "Foreign Exchange Conversion",
	Overview_NS_DisclosureRight4                               :   "All transactions made in a foreign currency will be converted to Canadian currency at the then current MasterCard conversion rate plus <strong>2.5%</strong> (for charges to your account) or minus <strong>2.5%</strong> (for credits to your account) when the transaction is posted to your account.",
	overview_NS_DisclosureLeft5                                :   "Annual Fees",
	Overview_NS_DisclosureRight5                                :   "None",
	overview_NS_DisclosureLeft6                               :   "Other Fees",
	Overview_NS_DisclosureRight6                                  :   "<p><strong>Cash Advance Fee:  $4</strong> - Charged when the transaction is posted to your account.</p> <p><strong> Overlimit Fee: $29</strong> - Unless you reside in Quebec, we will charge you an overlimit fee of <strong>$29.00</strong> if on a statement date your balance exceeds your credit limit and your balance is equal to or more than <strong>$2,000.00</strong>.  However, for determining whether you must pay an overlimit fee, we will not include in that balance any amounts that have been billed on that statement for interest charges, or for credit insurance on your account that is offered by us or one of our affiliates.</p> <p><strong> NSF/Dishounoured Payment Fee: $25</strong> - Charged if a payment you make is dishonoured.</p><p><strong> Charges for Copies: $2</strong> - Charged when you request a copy of a statement or sales slip. <p></p><strong>Credit Balance Fee:</strong> The lesser of <strong>$10</strong> or the amount of your credit balance. - Charged on the last day of a billing period when there is a credit balance on the account and the account has been inactive for the previous <strong>12</strong> billing periods. </p>",
	Overview_NS_LegalText1 									: "<sup>1</sup> In the form of e-Canadian Tire 'Money'. Terms, conditions and restrictions apply. See program rules at www.canadiantire.ca or www.ctfs.com/ctm for more details.",
	Overview_NS_LegalText2 									: "<sup>2</sup> Canadian Tire Options MasterCard cardmembers collect e-Canadian Tire ‘Money’ at a rate that is 10X (or 2X as the case may be) the rate at which other members of the My Canadian Tire ‘Money’ program collect e-Canadian Tire ‘Money’ on purchases made by such other members at Canadian Tire stores (if those other members paid by cash, debit or a credit card not linked to this loyalty program). The offered rate is exclusive of any bonus or promotional offers or redemption transactions. ",
	Overview_NS_LegalText3 									: "<sup>3</sup> e-Canadian Tire ‘Money’ collected at Canadian Tire stores or online at canadiantire.ca is calculated on the pre-tax amount of the qualifying purchase, and is rounded to the nearest penny. For current rate(s) call 1-800-226-8473.",
	Overview_NS_LegalText4 									: "<sup>4</sup> Minimum fuel purchase may be required. Rate may vary by location. See local gas bars for details.",
	Overview_NS_LegalText5 									: "<sup>&reg;</sup>/<sup>&trade;</sup> Canadian Tire, Canadian Tire Options, PartSource and the Canadian Tire triangle design are registered trademarks, and My Canadian Tire ‘Money’ and e-Canadian Tire ‘Money’ are trademarks, of Canadian Tire Corporation, Limited.",
	Overview_NS_LegalText6 									: "<sup>&reg;</sup>/<sup>&trade;</sup> MasterCard and the MasterCard Brand Mark are registered trademarks, and <i>PayPass</i> is a trademark, of MasterCard International Incorporated.",
	
	personalInfo_Loyalty_HeaderRed							: "A FASTER WAY TO COLLECT YOUR CANADIAN TIRE ‘MONEY’<sup>1</sup>",
	personalInfo_Loyalty_Bullet1							: "Collect 10X e-Canadian Tire ‘Money’ every day at Canadian Tire stores (including on automotive service), at Partsource<sup>&reg;</sup>, Mark’s<sup>&reg;</sup> and at Sportcheck<sup>&reg;2</sup>.",
	personalInfo_Loyalty_Bullet2							: "Collect e-Canadian Tire ‘Money’ at participating Canadian Tire gas bars<sup>3</sup>.",	
	personalInfo_Loyalty_Bullet3							: "Collect 2X e-Canadian Tire ‘Money’ everywhere else you shop<sup>2</sup> ",
	personalInfo_Loyalty_Bullet4							: "Redeeming is easy, right at the checkout at Canadian Tire stores.",
	personalInfo_CTM_label   								:"My Canadian Tire ‘Money’<sup>&trade;</sup> Account Number",
	personalInfo_CTM_Text   								:"If you are already a Member, please enter your My Canadian Tire ‘Money’ Account number. If you are approved for the credit card that you are applying for, your My Canadian Tire ‘Money’ Account will be linked to your new Canadian Tire Options MasterCard. If left blank, a My Canadian Tire ‘Money’ Account number will be assigned to you.",
	personalInfo_Email_Text   								:"I would like to receive offers, promotions, contests, giveaways, events, coupons and other information about products and services that may be of interest to me by email, text message (standard text messaging and data rates may apply) and other electronic messaging from Canadian Tire Corporation, Limited (\"CTC\"), Canadian Tire Financial Services Limited (\"CTFS\"), and Canadian Tire Bank (\"CTB\"), including from their respective business units operating under the Canadian Tire, My Canadian Tire ‘Money’ Program, Canadian Tire Drivers Academy<sup>&reg;</sup>, Canadian Tire Home Services<sup>&reg;</sup>, and Canadian Tire Roadside Assistance<sup>&reg;</sup> brands, as well as from other CTC-CTFS-CTB affiliates and/or marketing partners. You may contact CTC-CTFS-CTB, at P.O. Box 2000 Welland, ON L3B 5S3 or customerservice@canadiantire.ca. I understand that I may withdraw my consent at any time.",
	
	personalInfo_LegalText1                                : "<sup>1</sup> In the form of e-Canadian Tire 'Money'. Terms, conditions and restrictions apply. See program rules at www.canadiantire.ca or www.ctfs.com/ctm for more details. ",
	personalInfo_LegalText2                                : "<sup>2</sup> Canadian Tire Options MasterCard cardmembers paying with their Options MasterCard collect e-Canadian Tire ‘Money’ at a rate that is 10X (or 2X as the case may be) the rate at which other members of the My Canadian Tire ‘Money’ program collect e-Canadian Tire ‘Money’<sup>&trade;</sup> on purchases made by such other members at Canadian Tire stores (if those other members paid by cash, debit or a credit card not linked to this loyalty program). The offered rate is exclusive of any bonus or promotional offers or redemption transactions. ",
	personalInfo_LegalText3                                : "<sup>3</sup> Minimum fuel purchase may be required. Rate may vary by location. See local gas bars for details.",
	personalInfo_LegalText4                                : "<sup>&reg;</sup>/<sup>&trade;</sup> Canadian Tire, Canadian Tire Options, PartSource and the Canadian Tire triangle design are registered trademarks, and My Canadian Tire ‘Money’ and e-Canadian Tire ‘Money’ are trademarks, of Canadian Tire Corporation, Limited. ",
	personalInfo_LegalText5                                : "<sup>&reg;</sup>/<sup>&trade;</sup> MasterCard and the MasterCard Brand Mark are registered trademarks, and <i>PayPass</i> is a trademark, of MasterCard International Incorporated.",
	
	additionalInformation_OptionalProducts					:	"Optional Products<sup>&#8224;</sup> Enrolment",
	additionalInformation_OptionalInsurance_CreditProtector :	"- Enrol me in Credit Protector<sup>&reg;</sup><sup>**</sup>/Credit Protector Senior<sup>&reg;</sup><sup>**</sup>.",
		
	additionalInformation_OptionalInsurance_Details3		:   "<i>(not available in Saskatchewan)</i> <br>Receive comprehensive coverage with the combination of Credit Protector<sup>&reg;</sup>/Credit Protector-Senior<sup>&reg;</sup>** and Identity Watch Classic<sup>&trade;</sup>."
																+ "<ul><li>$1.10 per $100* of your monthly statement balance in any month with a statement balance of $10 or more for Credit Protector/Credit Protector Senior** and $4.99*** payable in advance monthly after the first transaction is made on your Canadian Tire branded credit card for Identity Watch Classic.</li></ul>"
																+ "<br>For example if your balance is $200 at the time your statement prints you would pay just $2.20 plus applicable taxes for Credit Protector<sup>&reg;</sup>/Credit Protector-Senior<sup>&reg;</sup>.",
		
	additionalInformation_footnoteContentText3				:	"Plus applicable taxes, payable monthly. See the Legal Information handout or your Certificate of Insurance for all terms, conditions, limitations and exclusions. Terms and conditions apply.",
	additionalInformation_footnoteContentText4				:	"If you are less than age 66, you will be enrolled in Credit Protector. If you are between 66-75 you will be enrolled in Credit Protector-Senior. Credit Protector is underwritten by American Bankers Life Assurance Company of Florida and American Bankers Insurance Company of Florida.  Credit Protector - Senior is underwritten by American Bankers Life Assurance Company of Florida. American Bankers Life Assurance Company of Florida and American Bankers Insurance Company of Florida and their subsidiaries and affiliates carry on business in Canada under the name of Assurant Solutions<sup>&reg;</sup>.",
	additionalInformation_footnoteContentText5				:	"Plus applicable taxes. Subscription Fees will commence after the first transaction is made on your Canadian Tire branded credit card. Thereafter, subscription Fees will be charged in advance monthly to your Canadian Tire branded credit card. See the Legal Information handout for all terms, conditions, limitations  and exclusions. Terms and conditions apply.",
	additionalInformation_footnoteContentText1				:	"<sup>1</sup> In the form of e-Canadian Tire 'Money'. Terms, conditions and restrictions apply. See program rules at www.canadiantire.ca or www.ctfs.com/ctm for more details.  ",
	additionalInformation_footnoteContentText1Link			:	"<a href='https://www.ctfs.com/Products/CreditCards/OptionsMasterCard/CTMoneyRewards/' target='_blank'>ctfs.com/ctm.</a>",
	additionalInformation_footnoteContentText2				:	"<sup>2</sup> Canadian Tire Options MasterCard cardmembers paying with their Options MasterCard collect e-Canadian Tire ‘Money’ at a rate that is 10X (or 2X as the case may be) the rate at which other members of the My Canadian Tire ‘Money’ program collect e-Canadian Tire ‘Money’<sup>&trade;</sup> on purchases made by such other members at Canadian Tire stores (if those other members paid by cash, debit or a credit card not linked to this loyalty program). The offered rate is exclusive of any bonus or promotional offers or redemption transactions."+
																"<br><sup>3</sup> Minimum fuel purchase may be required. Rate may vary by location. See local gas bars for details. ",
	
	additionalInformation_footnoteContentText6				:	"<sup>&#8224;</sup> These are optional products offered to all customers approved for a Canadian Tire MasterCard. The information on this application is used to determine eligibility for a Canadian Tire MasterCard and not for the optional products, which are offered to all Canadian Tire MasterCard holders.<br>" +
	                                                            "<sup>&reg;</sup>/<sup>&trade;</sup> Canadian Tire, Canadian Tire Options, PartSource and the Canadian Tire triangle design are registered trademarks, and My Canadian Tire ‘Money’ and e-Canadian Tire ‘Money’ are trademarks, of Canadian Tire Corporation, Limited.",
	additionalInformation_footnoteContentText7				:   "<sup>&reg;</sup>/<sup>&trade;</sup> Credit Protector and Credit Protector-Senior are registered trademarks of Canadian Tire Financial Services Limited and used under licence.<br>The Identity Watch Classic program is sponsored by Canadian Tire Financial Services Limited and provided by Aimia Proprietary Loyalty Canada Inc.<br>" +
																"Rebound<sup>&reg;</sup> is a registered trademark of Aimia Proprietary Loyalty Canada Inc.<br>"+
																"<sup>&reg;</sup> Assurant Solutions is a trademark of Assurant, Inc.<br>" +	
																"<sup>&reg;</sup>/<sup>&trade;</sup> MasterCard and the MasterCard Brand Mark are registered trademarks, and <i>PayPass</i> is a trademark, of MasterCard International Incorporated.",
																								 
	confirmation_Application_Authorization_Item2           :   "If I am not approved for the Card at an annual interest rate of 19.99% for all charges (excluding cash advances and related fees) and 21.99% for cash advances and related fees, you may, without further notice to me, treat this as a separate application for the same Card at an annual interest rate of 25.99% for all charges (excluding cash advances and related fees) and 27.99% for cash advances and related fees.",
	confirmation_Application_Authorization_Item3           :   "The Card is issued by CTB. The My Canadian Tire ‘Money’ Program is provided and administered by Canadian Tire Corporation, Limited.",
	confirmation_Application_Authorization_Item4_1         :   "CTB may collect, use and share personal information about me for the purposes described in the ",
	confirmation_Application_Authorization_Item4_2         :   "<a href='https://www.ctfs.com/SecurityCentre/PrivacyAndSecurity/PrivacyCharter/' target='_blank'>\"Canadian Tire Privacy Charter\"</a>",
	confirmation_Application_Authorization_Item4_3         :   " including marketing and selling by way of e-mail, telephone, automatic dialing-announcing device or other form of telecommunication.",
	
	confirmation_Application_Authorization_Item7a          :   "If I am not already a member, I will also be automatically enrolled in the My Canadian Tire ‘Money’ Program, even if I am not approved for the Card.",
	confirmation_Application_Authorization_Item7b          :   "I will be bound by the My Canadian Tire ‘Money’ Program rules, a copy of which are available at canadiantire.ca or ctfs.com/ctm",
	
	
	confirmation_footnoteContentText01 					   :   "Plus applicable taxes, payable monthly. See the Legal Information handout or your Certificate of Insurance for all terms, conditions, limitations and exclusions. Terms and conditions apply.",
	confirmation_footnoteContentText02 					   :   "If you are less than age 66, you will be enrolled in Credit Protector. If you are between 66-75 you will be enrolled in Credit Protector-Senior. Credit Protector is underwritten by American Bankers Life Assurance Company of Florida and American Bankers Insurance Company of Florida.  Credit Protector - Senior is underwritten by American Bankers Life Assurance Company of Florida. American Bankers Life Assurance Company of Florida and American Bankers Insurance Company of Florida and their subsidiaries and affiliates carry on business in Canada under the name of Assurant Solutions<sup>&reg;</sup>.",
	confirmation_footnoteContentText02a 				   :   "Plus applicable taxes. Subscription Fees will commence after the first transaction is made on your Canadian Tire branded credit card. Thereafter, subscription Fees will be charged in advance monthly to your Canadian Tire branded credit card. See the Legal Information handout for all terms, conditions, limitations  and exclusions. Terms and conditions apply.",
	confirmation_footnoteContentText03 					   :   "<sup>1</sup> In the form of e-Canadian Tire 'Money'. Terms, conditions and restrictions apply. See program rules at www.canadiantire.ca or www.ctfs.com/ctm for more details.",
	confirmation_footnoteContentText04					   :	"<sup>&#8224;</sup> These are optional products offered to all customers approved for a Canadian Tire MasterCard. The information on this application is used to determine eligibility for a Canadian Tire MasterCard and not for the optional products, which are offered to all Canadian Tire MasterCard holders.<br>" +
   																"<sup>&reg;</sup>/<sup>&trade;</sup> Canadian Tire, Canadian Tire Options, PartSource and the Canadian Tire triangle design are registered trademarks, and My Canadian Tire ‘Money’ and e-Canadian Tire ‘Money’ are trademarks, of Canadian Tire Corporation, Limited.",
    confirmation_footnoteContentText05					   :   	"<sup>&reg;</sup>/<sup>&trade;</sup> Credit Protector and Credit Protector-Senior are registered trademarks of Canadian Tire Financial Services Limited and used under licence.<br>The Identity Watch Classic program is sponsored by Canadian Tire Financial Services Limited and provided by Aimia Proprietary Loyalty Canada Inc.<br>" +
																"Rebound<sup>&reg;</sup> is a registered trademark of Aimia Proprietary Loyalty Canada Inc.<br>"+
																"<sup>&reg;</sup> Assurant Solutions is a trademark of Assurant, Inc.<br>" +	
																"<sup>&reg;</sup>/<sup>&trade;</sup> MasterCard and the MasterCard Brand Mark are registered trademarks, and <i>PayPass</i> is a trademark, of MasterCard International Incorporated.",
   
	
	identityVerification_FinalText2						   :	"You will also receive your Options Mastercard in the mail within 7-10 business days to use everywhere else. Please note that your My Canadian Tire ‘Money’ card <u>will arrive separately from your Options MasterCard</u>.",
	
	identityVerification_FooterText1                      	:    "<sup>1</sup> In the form of e-Canadian Tire 'Money'. Terms, conditions and restrictions apply. See program rules at www.canadiantire.ca or www.ctfs.com/ctm for more details. ",
	identityVerification_FooterText2                      	:   "<sup>2</sup> Canadian Tire Options MasterCard cardmembers paying with their Options MasterCard collect e-Canadian Tire ‘Money’ at a rate that is 10X (or 2X as the case may be) the rate at which other members of the My Canadian Tire ‘Money’ program collect e-Canadian Tire ‘Money’<sup>&trade;</sup> on purchases made by such other members at Canadian Tire stores (if those other members paid by cash, debit or a credit card not linked to this loyalty program). The offered rate is exclusive of any bonus or promotional offers or redemption transactions. ",
	identityVerification_FooterText3                     	:    "<sup>3</sup> Minimum fuel purchase may be required. Rate may vary by location. See local gas bars for details.",
	identityVerification_FooterText4                      	:    "<sup>&reg;</sup>/<sup>&trade;</sup> Canadian Tire, Canadian Tire Options, PartSource and the Canadian Tire triangle design are registered trademarks, and My Canadian Tire ‘Money’ and e-Canadian Tire ‘Money’ are trademarks, of Canadian Tire Corporation, Limited. ",
	identityVerification_FooterText5                        :    "<sup>&reg;</sup>/<sup>&trade;</sup> MasterCard and the MasterCard Brand Mark are registered trademarks, and <i>PayPass</i> is a trademark, of MasterCard International Incorporated.",
	
	
	//--old--
	additionalInformation_footnoteContentText1old				:	"<sup>1</sup> In the form of Canadian Tire ‘Money’ On The Card<sup>&reg;</sup> awards. Terms and conditions apply to earning and redeeming. Details available in-store or on the Canadian Tire 'Money' Rewards Program page. Options MasterCard customers in Nova Scotia participate in a different rewards program, please go to ",
	additionalInformation_footnoteContentText1Linkold			:	"<a href='https://www.ctfs.com/Products/CreditCards/OptionsMasterCard/CTMoneyRewards/' target='_blank'>ctfs.com/ctm.</a>",
	additionalInformation_footnoteContentText2old				:	"<sup>2</sup> Provided your account is in good standing and it is a redeemable purchase.",
	additionalInformation_footnoteContentText3old				:	"Plus applicable taxes, payable monthly. See the Legal Information handout or your Certificate of Insurance for all terms, conditions, limitations  and exclusions. Terms and conditions apply.",
	additionalInformation_footnoteContentText4old				:	"If you are less than age 66, you will be enrolled in Credit Protector. If you are between 66-75 you will be enrolled in Credit Protector-Senior. Credit Protector and Credit Protector-Senior are underwritten by American Bankers Life Assurance Company of Florida and American Bankers Insurance Company of Florida, Assurant Solutions<sup>&reg;</sup> companies.",
	additionalInformation_footnoteContentText5old				:	"Plus applicable taxes. Subscription Fees will commence after the first transaction is made on your Canadian Tire branded credit card. Thereafter, subscription Fees will be charged in advance monthly to your Canadian Tire branded credit card. See the Legal Information handout for all terms, conditions, limitations  and exclusions. Terms and conditions apply.",
	additionalInformation_footnoteContentText6old				:	"<br><sup>&#8224;</sup> These are optional products offered to all customers approved for a Canadian Tire MasterCard. The information on this application is used to determine eligibility for a Canadian Tire MasterCard and not for the optional products, which are offered to all Canadian Tire MasterCard holders.<br>" +
	                                                                "<sup>&reg;</sup>/<sup>&trade;</sup> Credit Protector and Credit Protector-Senior are registered trademarks of Canadian Tire Financial Services Limited and used under licence.<br>The Identity Watch Classic program is sponsored by Canadian Tire Financial Services Limited and provided by Aimia Proprietary Loyalty Canada Inc.<br>Rebound<sup>&reg;</sup> is a registered trademarks of Aimia Proprietary Loyalty Canada Inc.",
	additionalInformation_footnoteContentText7old				:   "<sup>&reg;</sup>/<sup>&trade;</sup> Unless otherwise noted, all trademarks are owned by Canadian Tire Corporation, Limited and are used under licence.<br>" +  	
																"<sup>&reg;</sup>/<sup>&trade;</sup> MasterCard and the MasterCard Brand Mark are registered trademarks, and <i>PayPass</i> is a trademark, of MasterCard International Incorporated.",
   
	confirmation_Application_Authorization_Item2old        :   "If I am not approved for the Card at an annual interest rate of 19.99% you may, without further notice to me, treat this as a separate application for the same Card at an annual interest rate of 25.99% for all charges, including cash advances and related fees.",
	confirmation_Application_Authorization_Item3old        :   "The Card is issued by Canadian Tire Bank (\"CTB\") and the account is administered by Canadian Tire Financial Services Limited (\"CTFSL\").",
	confirmation_Application_Authorization_Item4_1old      :   "CTB and CTFSL may collect, use and share personal information about me for the purposes described in the ",
	confirmation_Application_Authorization_Item4_2old      :	"<a href='https://www.ctfs.com/SecurityCentre/PrivacyAndSecurity/PrivacyCharter/' target='_blank'>\"Canadian Tire Privacy Charter\"</a>",
	confirmation_Application_Authorization_Item4_3old      :   " including marketing and selling by way of e-mail, telephone, automatic dialing-announcing device or other form of telecommunication.",
	
	identityVerification_FinalText2old					   :	"You will also receive your Options Mastercard in the mail within 7-10 business days to use everywhere else. Please note that your My Canadian Tire ‘Money’ card will arrive separately from your Options MasterCard.",
	
	identityVerification_FooterText1old					:	"For your protection and security, Canadian Tire Financial Services Limited has implemented this process to complete your Canadian Tire credit card application. This process will access your consumer report to assist Canadian Tire Financial Services Limited in verifying your identity. This is not a credit check but a tool used to ensure that the person applying for a Canadian Tire credit card is really you. Please answer the questions to the best of your ability, understanding that the information you provide will not be retained on file by Canadian Tire Financial Services Limited and Canadian Tire Bank.",
	identityVerification_FooterText2old					:	"<sup>&reg;</sup>/<sup>&trade;</sup> Unless otherwise noted, all trademarks are owned by Canadian Tire Corporation, Limited and are used under licence.",
	identityVerification_FooterText3old					:	"<sup>&reg;</sup>/<sup>&trade;</sup> MasterCard and the MasterCard Brand Mark are registered trademarks, and PayPass is a trademark, of MasterCard International Incorporated.",
	
	//--old--
	//----US3011------
	chooseProduct_TitleA   : "EXCLUSIVE TO YOU AS A CARDMEMBER",
	chooseProduct_DescriptionA1   : "Interest Rate – <b>19.99%</b>",
	chooseProduct_DescriptionA2   : "Cash Advances and Related Fees – <b>21.99%</b>",
	
	Overview_ctm_LegalText1 						   			: "<sup>1</sup> In the form of e-Canadian Tire 'Money'. Terms, conditions and restrictions apply. See program rules at www.canadiantire.ca or www.ctfs.com/ctm for more details.",
	Overview_ctm_LegalText2 									: "<sup>2</sup> Canadian Tire Options MasterCard cardmembers collect e-Canadian Tire ‘Money’ at a rate that is 10X (or 2X as the case may be) the rate at which other members of the My Canadian Tire ‘Money’ program collect e-Canadian Tire ‘Money’ on purchases made by such other members at Canadian Tire stores (if those other members paid by cash, debit or a credit card not linked to this loyalty program). The offered rate is exclusive of any bonus or promotional offers or redemption transactions. e-Canadian Tire ‘Money’ collected at Canadian Tire stores or online at canadiantire.ca is calculated on the pre-tax amount of the qualifying purchase, and is rounded to the nearest penny. For current rate(s) call 1-800-226-8473.",
	Overview_ctm_LegalText3 									: "<sup>3</sup> Minimum fuel purchase may be required. Rate may vary by location. See local gas bars for details.",
	Overview_ctm_LegalText4 									: "<sup>4</sup> If you are not approved for the Card at these rates, we may still issue you a card at an annual interest rate of 27.99% for cash advances and related fees and 25.99% for all other charges.",
	Overview_ctm_LegalText5 									: "<sup>&reg;</sup>/<sup>&trade;</sup> Canadian Tire, Canadian Tire Options, PartSource and the Canadian Tire triangle design are registered trademarks, and My Canadian Tire ‘Money’ and e-Canadian Tire ‘Money’ are trademarks, of Canadian Tire Corporation, Limited.",
	Overview_ctm_LegalText6 									: "<sup>&reg;</sup>/<sup>&trade;</sup> MasterCard and the MasterCard Brand Mark are registered trademarks, and <i/>PayPass is a trademark, of MasterCard International Incorporated.",
	
	
		
	endstatemeant                                          :   ""
										
		
	//--------------- END --------------------- Identity Verification section -------------- END -----------		
};	

