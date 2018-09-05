ensureNamespaceExists();

BRB.dictionary_fr = {
		
		// US4281
		version												:	"1",
		//-------------------------------------------Common----------------------------------------------
		app_loading 										:	"Chargement...",	
		backButtonPrompt_title 								: 	"Quitter la demande",
		
		pleaseSelect_Text									:	'Veuillez sélectionner...',
		
		monthSelect_Text									:	'Mois',
	    January												:	'Janvier',
	    February											:	'Février',
	    March												:	'Mars',
	    April												:	'Avril',
	    May													:	'Mai',
	    June												:	'Juin',
	    July												:	'Juillet',
	    August												:	'Août',
	    September											:	'Septembre',
	    October												:	'Octobre',
	    November											:	'Novembre',
	    December											:	'Décembre',
	    
		daySelect_Text										:	'Jour',
		
		language_English									:	'Anglais',
		language_Franch										:	'Francais',
		language_English_link								:	'English',
		
		Header_NeedHelp										:	'Avez-vous besoin d’aide?',
		Header_CallUsAt										:	'Appelez-nous au :',	
		
		connectionError_unableToConnect 					:	"Impossible de se connecter au serveur du système principal. Veuillez réessayer dans quelques minutes.",
		connectionError_networkDown 						: 	"La connectivité au réseau de données est perdue. Veuillez réessayer quand la connexion sera disponible.",

		confirmDialog_defaultTitle 							:	"Confirmer",
		confirmDialog_yes 									:	"Oui",
		confirmDialog_no 									:	"Non",
		
		settings_defaultTitle								:	"Paramètres",
		settings_logOutButton								:	"Déconnexion",
		settings_chooseProductButton						:	"Abandon Application",
		settings_chancelButton								:	"Annuler",
		settings_printerSetupButton							:	"Configuration de l’imprimante",
		
		settings_exitMessage								:	"Les renseignements recueillis dans cette demande seront supprimés de façon permanente et ne pourront être conservés. Êtes-vous certain(e) de vouloir continuer?",
		
		infoDialog_defaultTitle 							:	"Information",
		
		errorDialog_defaultTitle 							:	"Erreur",
		
		messageDialog_ok 									:	"Ok",
		messageDialog_yes 									:	"Oui",
		messageDialog_no 									:	"Non",
			
		breadCrumbItem_Overview								:	"Survol",
		breadCrumbItem_PersonalInformation					:	"Données personnelles",
		breadCrumbItem_AdditionalInformation				:	"Produits facultatifs",
		breadCrumbItem_Confirmation							:	"Confirmation",
		// US4591
		breadCrumbItem_Review_and_submit                    :   "Vérifier et envoyer",
		breadCrumbItem_IdentityVerification					:	"Vérification d’identité",
			
		loginScreen_UserID_Label							:	"Code d’utilisateur",
		loginScreen_AgentID_Label 							:	"Code de représentant",
		loginScreen_Password_Label 							:	"Mot de passe (sensible à la casse)",
		loginScreen_Location_Number 						:	"Numéro d’adresse (p. ex., 324)",
		loginScreen_Button_Label 							:	"CONNEXION",
		
		loginScreen_Dialog_ErrorTitle						:	"Erreur de connexion",
		loginScreen_FailureMessage							:	"La connexion a échoué. Veuillez essayer de nouveau. ",
		
		loginScreen_UserLookupDialog_NormalTitle			:	"Renseignements sur l’adresse",
		loginScreen_UserLookupDialog_ErrorTitle				:	"Erreur d’adresse",
		loginScreen_UserLookup_ConfirmMessage				:	"Est-ce la bonne adresse?",
		loginScreen_UserLookup_FailedMessage				:	"Adresse non trouvée, veuillez réessayer ",
			
		Generic_Yes											:	"Oui",
		Generic_No											:	"Non",
		
		Generic_English_Lang                                :	"Anglais",
		Generic_French_Lang                                 :	"Francais",
		
		continue_Button_Label								:	"CONTINUER",
		back_Button_Label									:	"<b>RETOUR</b>",
		continue_Button_PopupMode_SaveChanges_Label			:	"Enregistrer les changements",
		continue_Button_PopupMode_CancelChanges_Label		:	"Annuler les changements",
		initiate_BRB_Web_App_ErrorTitle						:	"Échec de la récupération des renseignements du client",
		initiate_BRB_Web_App_ErrorMsg                       :   "Impossible de récupérer les renseignements du client, veuillez essayer de nouveau",
		tm							                        :   "<span class=\"superscripts\">MC</span>",
		r							                        :   "<span class=\"superscripts\">MD</span>",
		requiredFieldIndicatorLabel							:	" Indique un champ obligatoire", 		
		
		PageHeader_CanadianTireTabLogo						:	'<div class="PageHeader_CanadianTireTabLogo_fr"></div>',
		PageHeader_CanadianTireNeedHelp                     :   '<div class="needHelpImage_fr"></div>',
		pageHeader_CantireBankOrTriangle                    :   '<div class="logoBankOrTriangle_fr"></div>',
				
		session_Expired_ErrorTitle							: 	"Demande timed out",
		session_Expired_ErrorMsg							:	"En raison d'une période d’inactivité prolongée, votre demande a expiré. <br>Veuillez représenter une demande afin qu’elle nous soit acheminée avec succès. <br>Remarque : votre session expirera au bout de 30 minutes ou après 10 minutes d'inactivité.",
		
		// US4653
		session_Expired_PopupMsg							: 	"Votre session expirera. <br>60 secondes",
		session_Expired_Popup_continueMsg					: 	"POURSUIVRE",
		
		ProvincesList_null									: 'Veuillez sélectionner...',
		ALBERTA												: 'ALBERTA',
		BRITISH_COLUMBIA									: 'COLOMBIE BRITANNIQUE',
		MANITOBA											: 'MANITOBA',
		NEW_BRUNSWICK										: 'NOUVEAU BRUNSWICK',
		NEWFOUNDLAND_LABRADOR								: 'NEWFOUNDLAND & LABRADOR ',
		NOVA_SCOTIA											: 'NOUVELLE ÉCOSSE',
		NORTHWEST_TERRITORIES								: 'TERRITOIRES DU NORD OUEST',
		NUNAVUT												: 'NUNAVUT',
		ONTARIO												: 'ONTARIO',
		PRINCE_EDWARD_ISLAND								: 'ÎLE DU PRINCE ÉDOUARD',
		QUEBEC												: 'QUÉBEC ',
		SASKATCHEWAN										: 'SASKATCHEWAN',
		YUKON												: 'YUKON ',
		
		header_Phone										: '<a href="tel:18004596415" style="color: #000;" target="_blank">1 800 459-6415</a>',
		//-----------------------------------------End-Common----------------------------------------------
		//----------------------------------------- Overview section ------------------------------	
		
		overview_PromoCodeError								:	"Veuillez entrer un code de promotion de 4 à 5 chiffres valable.",
		overview_ProvinceError								:	"Veuillez choisir votre province de résidence pour poursuivre la demande.",
		
		overview_PromoCodeHint								:	"Veuillez entrer le code de promotion associé à la promotion que vous avez reçue.",
		
		// US3627
		chooseProduct_Title									:	"IL VOUS FAUDRA DE TROIS À CINQ MINUTES POUR REMPLIR LA PRÉSENTE DEMANDE DE CARTE. SI VOTRE DEMANDE EST APPROUVÉE, VOUS EN SEREZ AVISÉ PAR COURRIER DANS LES DIX JOURS OUVRABLES.",
		//US4541
		chooseProduct_Title1								:	"Faites une demande de crédit immédiat sur la carte Mastercard<span class=\"header_title_MDMC\">MD</span> Options<span class=\"header_title_MDMC\">MD</span> de Canadian Tire.",
		
		chooseProduct_Title1_OMX							:	"<span class=\"overviewNSTableRedText\"> Faites une demande de carte Mastercard<sup>MD</sup> Triangle<sup>MC</sup></span>",
		chooseProduct_Title1_OMZ							:	"<span class=\"overviewNSTableRedText\"> Faites une demande de carte World Elite Mastercard<sup>MD</sup> Triangle<sup>MC</sup></span>",
		
		chooseProduct_Title2								:	"Il vous faudra de trois à cinq minutes pour remplir le formulaire de demande de carte. Si votre demande est approuvée, vous en serez avisé par courrier dans les sept à dix jours ouvrables suivants.",
		chooseProduct_Title3								:	"Faites une demande<sup>ƒ</sup> et utilisez votre carte dès aujourd'hui!",
		chooseProduct_Title4								:	"<b>Obtenez une prime de 4 %,  soit 10x le taux régulier<sup>&dagger;</sup> en « Argent » Canadian Tire</b>,<br>sur vos achats admissibles effectués en magasin ou en ligne chez Canadian Tire, Sport Chek, Mark’s/l’Équipeur et PartSource.",
		chooseProduct_Title5								:	"<b>Obtenez de l'« Argent » Canadian Tire</b> dans les postes d'essence Canadian Tire<sup>2</sup>",
		chooseProduct_Title6								:	"<b>Obtenez de l'« Argent » Canadian Tire partout ailleurs</b>, y compris chez Atmosphere.",
		chooseProduct_Title7								:	"<b>Bénéficiez du programme de financement « Aucuns frais, Aucun intérêt »</b>. Pour en savoir plus, visitez triangle.com/financement.",
		chooseProduct_Title8								:	"<b>Recevez des offres exclusives réservées aux titulaires</b> de carte directement dans<br> votre boîte de réception et sur votre téléphone mobile",
		chooseProduct_LinkText								:	"Sélectionnez une autre carte.",
		chooseProduct_DescriptionTitle						:	"APERÇU DES PRIMES",
		chooseProduct_Description1_1						:	"Accumulez des primes en « Argent » Canadian Tire",
		chooseProduct_Description1_2						:	"  partout où vous magasinez.",
		chooseProduct_Description2_1						:	"Échangez vos primes Canadian Tire instantanément dans n’importe quel magasin Canadian Tire",
		chooseProduct_Description3_1						:	"Frais annuels - ",
		chooseProduct_Description3_2						:	"Aucuns",
		chooseProduct_Description4_1						:	"Taux d'intérêt – ",
		chooseProduct_Description4_2						:	"19,99 %",
		chooseProduct_Description5_1						:	"Avances de fonds et frais afférents – ",
		chooseProduct_Description5_2						:	"21,99 %",
		//Us4591
		overview_Page_tiltle_Ecomm                          :   "<span class=\"overviewNSTableRedText\">Étape 1 de 5 :</span> Aperçu",
		overview_Page_tiltle_Decoupled                      :   "<span class=\"overviewNSTableRedText\">Étape 1 de 4 :</span> Aperçu",
		overview_page_CompareCards                          :   "Comparatif des cartes",
		overview_Page_choose_the_card                       :   "Choisissez votre carte :",
		overview_pageCompareCards_table_title               :   "Caractéristiques et avantages",
		
		overview_pageCompareCards_table_td1                 :   "<b>Aucuns frais annuels</b>",
		overview_pageCompareCards_table_td2                 :   "<b>Obtenez 4 &#37; </b> en Argent Canadian Tire<span class=\"superscripts\"><sup>MD</sup></span> sur le montant de vos achats quotidiens chez Canadian Tire, Sport Chek<span class=\"superscripts\"><sup>MD</sup></span>, Mark’s<span class=\"superscripts\"><sup>MD</sup></span>/ L'Équipeur<span class=\"superscripts\"><sup>MD</sup></span>  et PartSource<span class=\"superscripts\"><sup>MD</sup></span> .",
		overview_pageCompareCards_table_td3                 :   "<b>Obtenez</b> de l’Argent Canadian Tire dans les postes d’essence Canadian Tire participants<sup>2</sup>.",
		overview_pageCompareCards_table_td4                 :   "<b>Obtenez</b> de l’Argent Canadian Tire partout ailleurs où vous magasinez<sup>1</sup>.",
		overview_pageCompareCards_table_td5                 :   "<b>Échangez</b> votre Argent Canadian Tire chez Canadian Tire et dans certains magasins partenaires Sport Chek et Mark's<sup>1</sup>.",
		overview_pageCompareCards_table_td6                 :   "<b>Bénéficiez du programme de financement<sup>*</sup></b>  en magasin et en ligne chez Canadian Tire, Sport Check et dans les magasins Mark’s et l’Équipeur participants.",
		overview_pageCompareCards_table_td7                 :   "<b>Obtenez</b> 3 &#37; en Argent Canadian Tire sur les premiers 12 000 &#36; d’achats admissibles en épicerie.<sup>3</sup>",
		overview_pageCompareCards_table_td8                 :   "Assistance routière<sup> &#94;</sup>",
		overview_pageCompareCards_table_td9                 :   "Garantie prolongée<sup>&dagger;</sup>",
		overview_pageCompareCards_table_td10                :   "Assurance achats<sup>&dagger;</sup>",
		overview_pageCompareCards_table_td11                :   "Assurance collision/dommages pour les véhicules de location<sup>&dagger;</sup>",
		overview_pageCompareCards_table_td12                :   "Service de conciergerie disponible en tout temps&#46;<sup>&dagger;</sup>",
		overview_pageCompareCards_table_td13                :   "Un service client amélioré &#40;mise en file d’attente prioritaire&#41;",
		
		overview_page_Title_lets_get_started                :   "Commençons !",   
		overview_page_Title_it_will_take_few_min            :   "Remplir cette demande ne prendra que quelques minutes.",
		overview_Title_Ecomm								:	"Veuillez prendre connaissance des renseignements ci-dessous, choisissez la carte qui correspond le mieux à vos besoins puis cliquez sur Commencer pour remplir la demande de carte.",
		overview_Title_DEC									:	"Veuillez prendre connaissance des renseignements ci-dessous, puis cliquez sur Commencer pour remplir la demande de carte.",
		overview_PrintDownload_LinkText						:	"<a href='https://customer.ctfs.com/SharedContent/documents/f_online_disclosure.pdf' target='_blank'>Imprimez ou téléchargez la version PDF de la déclaration.</a>",
		
		overview_AmIEligibleTable_Mastercard			  	:	"<b>Mastercard<sup>MD</sup> Triangle<sup>MC</sup><b>",
		overview_AmIEligibleTable_World_elite_card          :   "<b>World Elite Mastercard<sup>MD</sup> Triangle<sup>MC</sup><b>",
		
		overview_compareCards_Masterdard			  	:	"Mastercard<sup>MD</sup><br> Triangle<sup>MC</sup>",
		overview_CompareCards_World_elite_card          :   "World Elite <br>Mastercard<sup>MD</sup> Triangle<sup>MC</sup>",
		
		overview_ChooseCard_Masterdard			  	        :	"Mastercard Triangle",
		overview_ChooseCard_World_elite_card          		:   "World Elite Mastercard Triangle",
		overview_AmIEligibleTable_Do_you_alreadyHave        :   "Avez-vous déjà une carte Mastercard<sup>MD</sup> Options<sup>MD</sup> ? La carte Mastercard Options a été rebaptisée la carte Mastercard Triangle. Vous recevrez donc une nouvelle carte Mastercard Triangle lorsque le moment sera venu de remplacer votre carte.",
		overview_ChooseCard_Note          		            :   "Veuillez noter que la carte World Elite Mastercard Triangle peut imposer aux commerçants des frais de transaction plus élevés.",
		overview_TopTableLeftColTitle						:	"Quelle carte puis-je demander?",
		overview_TopTableLeftCol1							:	"Vous devez résider au Canada",
		overview_TopTableLeftCol2							:	"Vous devez avoir atteint l'âge de la majorité dans votre province de résidence",
		overview_TopTableLeftCol3							:	"Vous devez occuper un emploi ou être à la retraite ",
		overview_TopTableLeftCol4							:	"Votre revenu personnel s'élève à au moins 80 000 $ par an ou le revenu annuel de votre ménage s'établit à 150 000 $",
		overview_TopTableLeftCol5							:	"Vous devez avoir une excellente cote de crédit",

		overview_TopTableRightColTitle						:	"De quoi ai-je besoin?",
		overview_TopTableLeftColTitle_DEC                   :   "Suis-je admissible?",
		overview_TopTableRightCol1							:	"Adresse précédente (si moins de deux ans à l'adresse actuelle)",
		overview_TopTableRightCol2							:	"Revenu annuel",
		overview_TopTableRightCol3							:	"Nom et adresse de l'employeur actuel",	
		
		overview_CostOfCreditDisclosure_Title				:   "Déclaration sur le coût du crédit relativement aux demandes de carte de crédit",
		overview_CostOfCreditDisclosure_Row1				:	"Taux d'intérêt annuel",
		overview_CostOfCreditDisclosure_Row1_1				:	"Les taux d'intérêt suivants seront en vigueur à compter de la date d'ouverture de votre compte :",
		overview_CostOfCreditDisclosure_Row1_2				:	"Tous les débits portés à votre compte (à l'exception des avances de fonds et des frais afférents) - <span class='fontStyleForBoldTextInOverWievPage'>19,99</span> %",
		overview_CostOfCreditDisclosure_Row1_3				:	"Avances de fonds et frais afférents - <span class='fontStyleForBoldTextInOverWievPage'>21,99</span> %",
		overview_CostOfCreditDisclosure_Row1_4				:	"Si votre demande de carte à ce taux n'est pas approuvée, la Banque Canadian Tire peut émettre une carte à votre nom portant un taux d'intérêt annuel de 25,99 % sur tous les frais.",
		
		overview_CostOfCreditDisclosure_Row2				:	"Délai de grâce sans intérêt",
		overview_CostOfCreditDisclosure_Row2_1				:	"Au moins <span class='fontStyleForBoldTextInOverWievPage'>26</span> jours ou, si vous résidez ailleurs qu’au Québec, au moins <span class='fontStyleForBoldTextInOverWievPage'>21</span> jours.",
		overview_CostOfCreditDisclosure_Row2_2				:	"Vous bénéficierez d'un délai de grâce d'au moins 26 jours sur les nouveaux achats (d'au moins <span class='fontStyleForBoldTextInOverWievPage'>21</span> jours si vous résidez ailleurs qu'au Québec) si nous recevons le paiement intégral du solde dû figurant sur votre relevé courant au plus tard à la date d'échéance de ce paiement.",
		overview_CostOfCreditDisclosure_Row2_3				:	"Il n'y a aucun délai de grâce sur les transactions au comptant, comme les chèques de commodité, les transferts de soldes et les avances de fonds, ni sur les frais liés à ces transactions.",
		
		overview_CostOfCreditDisclosure_Row3				:	"Paiement minimum",
		overview_CostOfCreditDisclosure_Row3_1				:	"La somme :",
		overview_CostOfCreditDisclosure_Row3_2				:	"(A) des intérêts et des frais figurant sur votre relevé; plus",
		overview_CostOfCreditDisclosure_Row3_3				:	"(B) tout montant en souffrance ou, s'il est plus élevé, tout montant qui excède votre limite de crédit; plus",
		overview_CostOfCreditDisclosure_Row3_4				:	"(C) le montant de tous les versements échelonnés en vertu de programmes de paiements égaux alors dus; plus",
		overview_CostOfCreditDisclosure_Row3_5				:	"(D) <span class='fontStyleForBoldTextInOverWievPage'>10 $</span>.",
		overview_CostOfCreditDisclosure_Row3_6				:	"Un solde inférieur à <span class='fontStyleForBoldTextInOverWievPage'>10 $</span> doit être réglé intégralement.",
		
		overview_CostOfCreditDisclosure_Row4				:	"Transactions en monnaie étrangère",
		overview_CostOfCreditDisclosure_Row4_1				:	"Toutes les transactions effectuées dans une monnaie étrangère seront converties en dollars canadiens au taux de conversion MasterCard courant majoré de <span class='fontStyleForBoldTextInOverWievPage'>2,5</span> % (dans le cas de débits portés à votre compte) ou réduit de <span class='fontStyleForBoldTextInOverWievPage'>2,5</span> % (dans le cas de crédits inscrits à votre compte).",
		
		overview_CostOfCreditDisclosure_Row5				:	"Frais annuels",
		overview_CostOfCreditDisclosure_Row5_1				:	"Aucuns",
		
		overview_CostOfCreditDisclosure_Row6				:	"Frais divers",
		overview_CostOfCreditDisclosure_Row6_1_1			:	"Avances de fonds :",
		overview_CostOfCreditDisclosure_Row6_1_2			:	" 4 $ ",
		overview_CostOfCreditDisclosure_Row6_1_3			:	"Facturés à la date à laquelle la transaction est inscrite à votre compte.",
		overview_CostOfCreditDisclosure_Row6_2_1			:	"Frais pour provision insuffisante ou paiement refusé :",
		overview_CostOfCreditDisclosure_Row6_2_2			:	" 25 $ ",
		overview_CostOfCreditDisclosure_Row6_2_3			:	" Imputés si un paiement que vous effectuez est refusé.",
		overview_CostOfCreditDisclosure_Row6_3_1			:	"Copie de rechange :",
		overview_CostOfCreditDisclosure_Row6_3_2			:	" 2 $ ",
		overview_CostOfCreditDisclosure_Row6_3_3			:	" Imputés lorsque vous demandez une copie d'un relevé ou d'une facture de vente.",
		overview_CostOfCreditDisclosure_Row6_4_1			:	"Administration du solde créditeur :",
		overview_CostOfCreditDisclosure_Row6_4_2			:	"Correspondent à ",
		overview_CostOfCreditDisclosure_Row6_4_3			:	" 10 $ ",
		overview_CostOfCreditDisclosure_Row6_4_4			:	" ou à votre solde, selon le montant le moins élevé – ",
		overview_CostOfCreditDisclosure_Row6_4_5			:	"Imputés le dernier jour d'une période de facturation lorsque le compte comporte un solde créditeur et que le compte a été inactif au cours des <span class='fontStyleForBoldTextInOverWievPage'>12</span> périodes de facturation précédentes.",
		
		overview_LostOrStolenCards_Title					:	"Cartes perdues ou volées",
		overview_LostOrStolenCards_Text						:	"Vous devez aviser la Banque Canadian Tire dès que vous croyez que votre carte est perdue ou volée en téléphonant au <span class=\"nowrap\">1 800 459-6415</span>. Vous ne serez pas tenu responsable de l'utilisation non autorisée de votre carte si celle-ci est perdue ou volée, sauf si elle est utilisée avec un numéro d'identification personnel pour obtenir une avance de fonds à un guichet automatique bancaire ou pour effectuer un achat, auquel cas vous demeurerez responsable de la totalité du montant obtenu à chaque utilisation non autorisée jusqu'au moment où vous nous aurez avisés.",
		
		overview_CustomerServiceDepartment_Title 			:	"Service à la clientèle",
		overview_CustomerServiceDepartment_Text1 			:	"Au Canada : <b>1 800 459-6415</b>",
		overview_CustomerServiceDepartment_Text2 			:	"Ailleurs qu'au Canada : 905 735-7256",
		overview_CustomerServiceDepartment_Text3 			:	"La carte Mastercard<sup>MD</sup> Triangle<sup>MC</sup> et la carte World Elite Mastercard<sup>MD</sup> Triangle<sup>MC</sup> sont émise par la Banque Canadian Tire en vertu d'une licence accordée par Mastercard International. Si votre demande est approuvée, votre carte sera expédiée dans les six (6) semaines suivant la demande. L'adresse de la Banque Canadian Tire et des SFCT est la suivante :",
		
		
		overview_CustomerServiceDepartment_Text3_DEC_OMX 			:	"Mastercard<sup>MD</sup> Triangle<sup>MC</sup> est émise par la Banque Canadian Tire en vertu d'une licence accordée par Mastercard International. Si votre demande est approuvée, votre carte sera expédiée dans les six (6) semaines suivant la demande. L'adresse de la Banque Canadian Tire et des SFCT est la suivante :",
		overview_CustomerServiceDepartment_Text3_DEC_OMZ 			:	"World Elite Mastercard<sup>MD</sup> Triangle<sup>MC</sup> est émise par la Banque Canadian Tire en vertu d'une licence accordée par Mastercard International. Si votre demande est approuvée, votre carte sera expédiée dans les six (6) semaines suivant la demande. L'adresse de la Banque Canadian Tire et des SFCT est la suivante :",
		
		overview_CustomerServiceDepartment_PleaseNoteOMX_only       :  "Veuillez noter que la carte World Elite Mastercard Triangle peut imposer aux commerçants des frais de transaction plus élevés.",
		
		overview_CustomerServiceDepartment_Text4 			:	"C.P. 2000",
		overview_CustomerServiceDepartment_Text5 			:	"Welland (Ontario)  L3B 5S3",
		overview_CustomerServiceDepartment_Text6 			:	"Télécopieur : 1 888 728-5822",
		
		overview_PromoCode									:	"Code promotionnel",
		overview_Province									:	"Province",
		
		overview_SecurityMessaging_Title					:	"Message concernant la sécurité",
		overview_SecurityMessaging_Content					:	"Chez Canadian Tire, nous attachons une grande importance à la sécurité de vos renseignements personnels. Prenez connaissance des mesures mises en œuvre pour protéger les renseignements personnels de nos clients.",
		overview_SecurityMessaging_MoreInfo					:	"Pour obtenir de plus amples renseignements, consultez notre",
		overview_SecurityMessaging_PrivacyCharter			:	"<a href='https://customer.ctfs.com/lang/fr/SecurityCentre/PrivacyAndSecurity/PrivacyCharter/' target='_blank'>politique en matière de protection des renseignements personnels.</a>",
		
		overview_AutoTimeout_Title							:	"Fin de session automatique",
		overview_AutoTimeout_Content						:	"Pour votre protection, votre session expirera automatiquement au bout de 30 minutes d’activité ou 10 minutes d’inactivité.",
		
		overview_startApplication_Button_Label				:	"Commencer",
		overview_RequiredField_Lable						:	"Indique un champ obligatoire",
		
		overview_footnoteContentText1						:	"Primes octroyées sous forme d'« Argent » Canadian Tire avec la Carte<span class=\"superscriptsFootnote\"><sup>MD</sup></span> ou points Avantage « Argent » Canadian Tire<span class=\"superscriptsFootnote\"><sup>MD</sup></span>, selon le cas. Sous réserve des modalités et des restrictions visant l’octroi et l’échange des primes. Détails en magasin ou sur le page Programme de primes en « Argent » Canadian Tire à l’adresse",
		overview_footnoteContentText1Extended				:	"Primes octroyées sous forme d’« Argent » Canadian Tire avec la Carte<span class=\"superscriptsFootnote\"><sup>MD</sup></span>. Sous réserve des modalités et des restrictions visant l’octroi et l’échange des primes.Détails en magasin ou sur la page Programme de primes en « Argent » Canadian Tire. Les titulaires de la carte MasterCard Options en Nouvelle-Écosse participent à un autre programme de primes; veuillez vous rendre à l’adresse ",
		overview_footnoteContentText1Link					:	"<a href='https://www.ctfs.com/lang/fr/Products/CreditCards/OptionsMasterCard/CTMoneyRewards/' target='_blank'>triangle.com/act.</a>",
		overview_footnoteContentText2						:	" À la condition que votre compte soit en règle et que l’achat soit admissible à l’échange de primes",	
		overview_footnoteContentTextLinkBack				:	"retour",
		overview_footnoteContentText4						:	"<span class=\"superscriptsFootnote\"><sup>MD</sup></span>/<span class=\"superscriptsFootnote\"><sup>MC</sup></span> Sauf indication cont raire, toutes les marques de commerce sont la propriété de La Société Canadian Tire Limitée et sont utilisées sous licence.",
		overview_footnoteContentText5						:	"<span class=\"superscriptsFootnote\"><sup>MD</sup></span>/<span class=\"superscriptsFootnote\"><sup>MC</sup></span> MasterCard et la marque figurative de MasterCard sont des marques de commerce deposees et PayPass est une marque de commerce de MasterCard International Incorporated.",
//		overview_footnoteContentText6						:	"<span class=\"superscriptsFootnote\"><sup>MD</sup></span> Couverture-crédit et Couverture-crédit – Âge d’or sont la propriété des Services Financiers Canadian Tire Limitée. ",
		
		overview_Province_TextField							:	'<select class="fieldCellSize100 fieldValuesSelectField" id="overview_Province_TextField" tabindex=2></select>',
		//--------------- END --------------------- Overview section -------------- END -----------	

		//----------------------------------------- Overview Nova Scotia section ------------------------------
		
		//--------------------------------------------- </old> ----------------------------------------------------
		overview_NS_Error									:	"Malheureusement, en raison du programme de fidélisation en vigueur en Nouvelle-Écosse, les services de crédits instantanés ne sont pas disponibles pour le moment.<br>Pour présenter une demande de carte de crédit, rendez-vous à l’adresse <a href='http://www.ctfs.com/faitesunedemande' target='_blank'>www.ctfs.com/faitesunedemande</a>",
		
		overview_NS_TableLeftColTitle						:	"Aux clients de la Nouvelle-Écosse :",
		overview_NS_TableLeftColText1						:	"Veuillez lire ces renseignements importants avant de faire votre demande de carte.",
		overview_NS_TableLeftColText2						:	"Grâce au programme ",
		overview_NS_TableLeftColText3						:	"Avantage « Argent » Canadian Tire",
		overview_NS_TableLeftColText4						:	" et à la carte MasterCard Options, Canadian Tire vous récompense encore plus.",
		overview_NS_TableLeftColText5						:	"Obtenez plus de primes",
		overview_NS_TableLeftColText6						:	" grâce à la carte Avantage « Argent » Canadian Tire...",
		overview_NS_TableLeftColText7						:	"1 point par dollar dépensé dans les magasins Canadian Tire",
		overview_NS_TableLeftColText8						:	"Des points multipliés lorsque vous faites le plein dans les postes d'essence Canadian Tire",
		overview_NS_TableLeftColText9						:	"Des points bonis exclusifs en magasin, sur les circulaires, par la poste ou par courriel",
		overview_NS_TableLeftColText10						:	"Le moyen ",
		overview_NS_TableLeftColText10_1					:	" ",
		overview_NS_TableLeftColText11						:	"le plus",
		overview_NS_TableLeftColText12						:	" avantageux pour régler vos achats.",
		overview_NS_TableLeftColText13						:	" ",
		overview_NS_TableLeftColText14						:	" ",
		overview_NS_TableLeftColText15						:	"MAXIMISEZ vos points Avantage « Argent » Canadian Tire",
		overview_NS_TableLeftColText16						:	" points disponibles",
		overview_NS_TableLeftColText17						:	"3 points par dollar",
		overview_NS_TableLeftColText18						:	" dépensé dans les magasins Canadian Tire lorsque vous utilisez à la fois votre carte MasterCard Options et votre carte Avantage « Argent » Canadian Tire",
		overview_NS_TableLeftColText19						:	"Multiplicateur de points réservé",
		overview_NS_TableLeftColText20						:	" aux membres lorsque vous utilisez les deux cartes pour acheter de l'essence dans un poste d'essence Canadian Tire",
		overview_NS_TableLeftColText21						:	"Accumulez des points dans  avec votre carte MasterCard Options",
		overview_NS_TableLeftColText22						:	" tous les magasins où vous réglez vos achats",
		overview_NS_TableLeftColText23						:	" avec votre carte MasterCard Options.",
		overview_NS_TableLeftColText24						:	"Èchangez",
		overview_NS_TableLeftColText25						:	"Des points contre de la marchandise en magasin, comme vous le faisiez autrefois avec votre « argent » Canadian Tire",
		overview_NS_TableLeftColText26						:	"100 points = $1",
		overview_NS_TableLeftColText27						:	"Il n'y a aucun minimum pour utiliser vos points. Vous pouvez en utiliser quelques uns seulement, ou les accumuler pour régler un achat plus important",
		overview_NS_TableLeftColText28						:	"Les points n'ont pas de date d'échéance",
		overview_NS_TableLeftColText29						:	"Donnez des points à un organisme caritatif ou à une cause qui vous tient à cœur",
		overview_NS_TableLeftColText30						:	"De plus, profitez des avantages réservés aux titulaires de la carte :",
		overview_NS_TableLeftColText31						:	"PayPass",
		overview_NS_TableLeftColText32						:	" pour payer plus rapidement",
		overview_NS_TableLeftColText33						:	"Carte à puce",
		overview_NS_TableLeftColText34						:	"pour plus de sécurité",
		overview_NS_TableLeftColText35						:	"Accès en ligne à votre compte",
		overview_NS_TableLeftColText36						:	"et offres exclusives par courriel",
		overview_NS_TableLeftColText37						:	"Carte acceptée mondialement",
		overview_NS_TableLeftColText38						:	" dans les millions de commerces du réseau MasterCard",
		overview_NS_TableLeftColText39						:	"Avances de fonds",
		overview_NS_TableLeftColText40						:	" à n'importe quel guichet automatique affichant les logos MasterCard",
		overview_NS_TableLeftColText41						:	" ou Cirrus",
		overview_NS_TableLeftColText42						:	".",
		overview_NS_TableLeftColText43						:	"Voir les règlements du concours",
		overview_NS_TableLeftColText44						:	"<span class=\"superscripts\"><sup>MC</sup></span>",
		
		overview_NS_SecurityMessaging_Content				:	"Chez Canadian Tire, nous attachons la plus grande importance à la sécurité de vos renseignements personnels. Prenez connaissance des mesures mises en oeuvre pour protéger les renseignements personnels de nos clients.",
		
		overview_NS_RightBannerText1						:	"Obtenez jusqu’à 2 000 points*",
		overview_NS_RightBannerText2						:	"lorsque vous utilisez votre carte MasterCard Options",
		
		overview_NS_FootnotesText1							:	"<sup>1</sup> Sous reserve de certaines conditions. À l'exception des cartes de parc de véhicules. Pour obtenir de plus amples renseignements sur le programme, rendez-vous à l’adresse",
		overview_NS_FootnotesText2							:	" avantageargent.com",
		overview_NS_FootnotesText3							:	" .",
		overview_NS_FootnotesText4							:	" Frais d'avances de fonds : 4 $. Des frais d'intérêt sont imputés sur les avances de fonds à compter de la date d'obtention de l'avance, et ce, jusqu'à la date du remboursement de celle-ci et de tous les intérêts courus.",
		overview_NS_FootnotesText5							:	"<span class=\"superscriptsFootnote\"><sup>MD</sup></span>/<span class=\"superscriptsFootnote\"><sup>MC</sup></span> Le logo des Services Financiers Canadian Tire et Options Canadian Tire sont des marques de commerce déposées et Avantage « Argent » Canadian Tire est une marque de commerce de La Société Canadian Tire Limitée et sont utilisées sous licence.",
		overview_NS_FootnotesText6							:	"<span class=\"superscriptsFootnote\"><sup>MD</sup></span>/<span class=\"superscriptsFootnote\"><sup>MC</sup></span> MasterCard, la marque figurative de MasterCard et ",
		overview_NS_FootnotesText7							:	" sont des marques de commerce déposées de MasterCard International Incorporated.",
		overview_NS_FootnotesText8							:	"* Le concours se déroule du 24 février 2012 au 31 décembre 2013. Pour participer, faites une demande de carte MasterCard Options. Quatre-vingt-cinq pour cent (85 %) des bons imprimés dans le cadre du concours valent cinq cents (500) points Avantage « Argent » Canadian Tire<span class=\"superscriptsFootnote\"><sup>MC</sup></span> (valeur au détail de 5 $), dix pour cent (10 %) des bons imprimés dans le cadre du concours valent mille (1 000) points Avantage « Argent » Canadian Tire<span class=\"superscriptsFootnote\"><sup>MC</sup></span> (valeur au détail de 10 $), et cinq pour cent (5 %) des bons imprimés dans le cadre du concours valent deux mille (2 000) points Avantage « Argent » Canadian Tire<span class=\"superscriptsFootnote\"><sup>MC</sup></span> (valeur au détail de 20 $). Le concours sadresse uniquement aux résidents canadiens qui ont atteint leur majorité. Vous devez faire un achat avec votre nouvelle carte MasterCard Options avant la date déchéance du coupon afin de vous prévaloir de loffre. Vous devrez également répondre correctement à une question. Pour obtenir le règlement complet du concours, consultez un représentant des cartes de crédit Canadian Tire ou le site ctfs.com/fr-ncbpc",
		
		overview_NS_moneyPlusOMCImage						:	'<a href="#" id="moneyPlusOMCImage" class="moneyPlusOMCImageBlock_fr"></a>',

		//--------------------------------------------- </old> ----------------------------------------------------
		
		overview_NS_LeftProgramAlertText0					:   "Voici une nouvelle réjouissante!",
		overview_NS_LeftProgramSidebarText					:   "UNE FAÇON PLUS RAPIDE D’OBTENIR DE L’« ARGENT » CANADIAN TIRE",
		overview_NS_LeftProgramAlertText					:	"Le programme de primes auquel participe la carte MasterCard<span class=\"superscriptsFootnote\"><sup>MD</sup></span> Options<span class=\"superscriptsFootnote\"><sup>MD</sup></span> de Canadian Tire change",
		overview_NS_LeftHeadingText2						:   "Si vous faites la demande d’une carte MasterCard Options ailleurs qu’en Nouvelle-Écosse :",
		overview_NS_TableLeftColTxt4						:   "Le programme de primes en « Argent » Canadian Tire associé à votre carte MasterCard<span class=\"superscriptsFootnote\"><sup>MD</sup></span> Options<span class=\"superscriptsFootnote\"><sup>MD</sup></span> de Canadian Tire sera remplacé le 28 octobre prochain par le programme Mon « Argent » Canadian Tire<span class=\"superscriptsFootnote\"><sup>MC</sup></span>.",
		overview_NS_TableLeftColTxt5						:   "Au lieu de primes en « Argent » Canadian Tire avec la Carte<span class=\"superscriptsFootnote\"><sup>MD</sup></span>, vous obtiendrez désormais de l’« Argent » Canadian Tire.",
		overview_NS_LeftHeadingText1	    				:	"Si vous faites la demande d’une carte MasterCard Options en Nouvelle-Écosse :",
		overview_NS_TableLeftColTxt1						:   "Le programme Avantage « Argent » Canadian Tire<span class=\"superscriptsFootnote\"><sup>MD</sup></span> deviendra le programme Mon « Argent » Canadian Tire<span class=\"superscriptsFootnote\"><sup>MC</sup></span> le 10 octobre",
		overview_NS_TableLeftColTxt2						:   "Accumulez maintenant de l’ « Argent » Canadian Tire<span class=\"superscriptsFootnote\"><sup>MD</sup></span> au lieu de points Avantage « Argent » Canadian Tire dans nos magasins et sur le site canadiantire.ca lorsque vous achetez des articles admissibles.",
		overview_NS_TableLeftColTxt3						:   "Remarque : Le taux auquel vous obtiendrez de l’« Argent » Canadian Tire est différent de celui auquel vous accumulez des points Avantage « Argent »<sup>2</sup>.",
		overview_NS_LeftHeadingText3						:   "Dans le cadre de ce nouveau programme, exclusivement pour vous, en tant que titulaire de carte MasterCard Options :",
		overview_NS_TableLeftColTxt7					    :   "Obtenez 10X les primes en « Argent » Canadian Tire<sup>1</sup> tous les jours aux magasins Canadian Tire, y compris aux centres-autos, aux magasins Partsource<span class=\"superscriptsFootnote\"><sup>MD</sup></span>, Mark’s / L’Équipeur<span class=\"superscriptsFootnote\"><sup>MD</sup></span> et Sport Chek<span class=\"superscriptsFootnote\"><sup>MD 1</sup></span>.",
		overview_NS_TableLeftColTxt8						:   "Obtenez 2X les primes en « Argent » Canadian Tire partout ailleurs où vous magasinez<sup>1</sup>.",
		overview_NS_TableLeftColTxt9						:   "Obtenez de l’« Argent » Canadian Tire dans les postes d’essence Canadian Tire participants<sup>3</sup>.",
		overview_NS_TableLeftColTxt10						:   "C’est facile d’échanger votre « Argent » Canadian Tire – directement à la caisse des magasins Canadian Tire ou en ligne pour les cartes-cadeaux, à l’adresse canadiantire.ca",
		overview_NS_TableLeftColTxt11						:   "Surveillez votre courrier pour en savoir plus!",
							 
		overview_NS_FootnotesTxt1							:   "<sup>1</sup> Les titulaires de carte MasterCard Options de Canadian Tire obtiennent de l’« Argent » Canadian Tire à un taux qui est 10X (ou 2X selon le cas) le taux auquel les autres membres du programme Mon « Argent » Canadian Tire obtiennent de l’« Argent » Canadian Tire lors d’achats effectués par ces membres dans les magasins Canadian Tire (si ces membres payent en argent comptant, avec une carte de débit ou une carte de crédit qui n’est pas liée à ce programme de fidélisation). Le taux offert est exclusif de toute prime, offre promotionnelle ou transaction d’échange.",
		overview_NS_FootnotesTxt2							:   "<sup>2</sup> L’« Argent » Canadian Tire obtenu dans les magasins Canadian Tire ou en ligne à canadiantire.ca est calculé sur le montant avant taxes des achats admissibles et est arrondi au cent le plus proche. Pour connaître les taux actuels, composez le 1-800-226-8473.",
		overview_NS_FootnotesTxt3							:   "<sup>3</sup> Un montant d’achat d’essence minimum peut être requis. Le taux peut varier d’une région à l’autre. Rendez-vous aux postes d’essence locaux pour en savoir plus.",
		overview_NS_FootnotesTxt5							:   "<span class=\"superscriptsFootnote\"><sup>MD</sup></span>/<span class=\"superscriptsFootnote\"><sup>MC</sup></span> Canadian Tire, « Argent » Canadian Tire avec la Carte, Avantage « Argent » Canadian Tire, Options de Canadian Tire, PartSource et le triangle de Canadian Tire sont des marques de commerce déposées et Mon « Argent » Canadian Tire et « Argent » Canadian Tire sont des marques de commerce de La Société Canadian Tire Limitée.",
		overview_NS_FootnotesTxt6						    :   "<span class=\"superscriptsFootnote\"><sup>MD</sup></span>/<span class=\"superscriptsFootnote\"><sup>MC</sup></span> MasterCard et la marque figurative de MasterCard sont des marques de commerce déposées et <i>PayPass</i> est une marque de commerce de MasterCard International Incorporated. ",
		
		 
		
		//--------------- END --------------------- Overview Nova Scotia section -------------- END -----------	
		
		
		productSelection_Title								:   "Choix de produit",
		
		//----------------------------------------- Personal Information section ------------------------------
		
		// US4579 Removal of CT
		personalInformation_CTProfileLabel					:	"Cliquez ici pour copier les renseignements du profil",
		
		personalInformation_LoyaltyMembershipNumberError	:	"Veuillez entrer seize chiffres",
		personalInformation_LoyaltyMembershipNumberPreError	:	"Veuillez entrer six chiffres",
		
		personalInformation_TitleError						:	"Veuillez sélectionner votre titre de civilité",
		personalInformation_FirstNameError					:	"Veuillez entrer votre prénom",
		personalInformation_LastNameError					:	"Veuillez entrer votre nom de famille",
		personalInformation_DateofBirthMonthError			:	"Veuillez entrer un mois de naissance valable",
		personalInformation_DateofBirthDateError			:	"Veuillez entrer un jour de naissance valable",
		personalInformation_DateofBirthYearError			:	"Veuillez entrer une année de naissance valable",
		personalInformation_EmailAddressError				:	"Veuillez entrer une adresse courriel valable",
		personalInformation_PreferredLanguageError			:	"Veuillez choisir une langue par défaut",
		personalInformation_PrimaryPhoneError				:	"Veuillez entrer un numéro de téléphone valabl",
		personalInformation_SINError						:	"Veuillez entrer un numéro d’assurance sociale valable",
		personalInformation_StreetError						:	"Veuillez entrer un numéro municipal",
		personalInformation_StreetNameError					:	"Veuillez entrer le nom de votre rue",
		personalInformation_AptError						:	"Veuillez entrer un numéro d’appartement / bureau valable",
		personalInformation_CityError						:	"Veuillez entrer votre ville",
		personalInformation_ProvinceError					:	"Veuillez choisir une province parmi la liste déroulante",
		personalInformation_PostalCodeError					:	"Veuillez entrer un code postal valable (p. ex. : H2H 2H2)",
		personalInformation_ResidentialStatusError			:	"Veuillez choisir un statut de résidence parmi la liste déroulante",
		personalInformation_MonthlyHousingPaymentError		:	"Veuillez entrer le montant de votre loyer ou de votre versement hypothécaire mensuel. N’utilisez pas d’espace, de point ni de virgule (p. ex. : 1500)",
		personalInformation_SinceMonthError					:	"Veuillez entrer un mois valable",
		personalInformation_SinceYearError					:	"Veuillez entrer une année valable",
		
		personalInformation_FutureDateError					:	"Impossible d’entrer une date future",
		
		personalInformation_EmploymentTypeError				:	"Veuillez choisir un type d’emploi parmi la liste déroulante.",
		personalInformation_EmployerError					:	"Veuillez entrer le nom de votre employeur actuel.",
		personalInformation_EmployerCityError				:	"Veuillez entrer la ville de votre employeur actuel.",
		personalInformation_JobTitleError					:	"Veuillez choisir un titre de poste parmi la liste déroulante.",
		personalInformation_JobDescriptionError				:	"Veuillez entrer une description de votre profession.",
		personalInformation_EmployerSinceMonthError			:	"Veuillez entrer un mois valable.",
		personalInformation_EmployerSinceYearError			:	"Veuillez entrer une année valable.",
		// US3961
		personalInformation_GrossAnnualIncomeError_OMX			:"Veuillez entrer le montant de votre revenu annuel personnel brut. N’utilisez pas d’espace, de point ni de virgule (p. ex. : 35 000)",	
		personalInformation_GrossAnnualIncomeError_OMZ			:"Critère d'admissibilité : Revenu individuel minimum de 80 000 $.",
		personalInformation_GrossAnnualHouseholdIncomeError	:	"Veuillez entrer le montant de votre revenu annuel brut du ménage. N’utilisez pas d’espace, de point ni de virgule (p. ex. : 35 000).",		
		personalInformation_EmailAddressHint				:	"Vous devez fournir votre adresse courriel afin que puissions vous envoyer les modalités, ainsi que les détails de l’approbation de votre nouvelle carte lorsque votre demande sera approuvée. Si vous ne fournissez pas votre adresse courriel, vous devrez présenter une demande de carte de crédit par le biais d’une autre méthode.",
		// US3979
		// personalInformation_EmailAddressNote				:	"Fournissez-nous votre adresse de courriel et vous obtiendrez un bon échangeable contre de l’« Argent » Canadian Tire<sup>&dagger;</sup>.",
		// US3627
		personalInformation_EmailAddressNote				:	"Fournissez-nous votre adresse de courriel et vous obtiendrez un coupon pour une prime d’« Argent » Canadian Tire<sup>&dagger;</sup>.",
		
		personalInformation_SINHint							:	"Votre NAS nous permet de traiter vos informations financières plus efficacement.",
		personalInformation_GrossAnnualIncomeHint			:	"Comprend votre revenu avant impôts. Cela comprend vos rentes de régimes de retraite, vos rentes des régimes publics et tout autre revenu. Arrondissez le montant au dollar près. N’utilisez pas d’espace, de point ni de virgule <nobr>(p. ex. : 35 000).</nobr>",
		// US3961
		personalInformation_GrossAnnualHouseholdIncomeHint	:	"Comprend votre revenu avant impôts. Cela comprend vos rentes de régimes de retraite, vos rentes des régimes publics et tout autre revenu. Arrondissez le montant au dollar près. N’utilisez pas d’espace, de point ni de virgule <nobr>(p. ex. : 35 000).</nobr>",
		
		personalInformation_Title							:	"Renseignements personnels",
		personalInformation_liTitle1						:	"Plus de facons d'obtenir des primes sur vos achats",
		personalInformation_liTitle2						:	"De plus, profitez des avantages suivants, offerts aux titulaires de carte :",
		
		personalInformation_makeCorrections					: 	"Veuillez apporter des corrections à tous les champs surlignés en rouge.",
		personalInformation_saveMeTime						:	"Oui, je veux gagner du temps en utilisant les renseignements de mon profil MonCT.",
		
		personalInformation_RewardsOnPurchases1				:	"Accumulez des primes en 'Argent' Canadian Tire<sup><small>1</small></sup>  PARTOUT où vous magasinez.",
		personalInformation_RewardsOnPurchases2				:	"Obtenez encore plus de primes dans les magasins Canadian Tire<sup><small>1</small></sup>. ",
		personalInformation_RewardsOnPurchases3				:	"Profitez des offres exclusives aux titulaires de carte.",
		personalInformation_RewardsOnPurchases4				:	"Échangez vos primes contre n'importe quelle marchandise dans les magasins Canadian Tire<sup><small>2</small></sup>  et en ligne.",
		
		personalInformation_cardmemberBenefits1				:	"PayPass<span class=\"superscripts\"><sup>MC</sup></span>  passez à la caisse plus rapidement",
		personalInformation_cardmemberBenefits2				:	"Sécurité accrue grâce à la technologie des puces",
		personalInformation_cardmemberBenefits3				:	"Accès à votre compte en ligne et offres exclusives par courriel",
		personalInformation_cardmemberBenefits4				:	"Acceptation partout dans le monde ou la carte MasterCard<span class=\"superscripts\"><sup>MD</sup></span> est acceptée",
		personalInformation_cardmemberBenefits5				:	"Avance de fonds",
		
		personalInformation_AboutYourself					:	"<b>Renseignements personnels</b>",
		personalInformation_Asterix							:	"*",
		personalInformation_requiredField					:	"Indique un champ obligatoire",
		
		personalInformation_TitleField							:	"Titre de civilité",
		personalInformation_MoneyAdvantageField					:	"Numéro <br>de carte Advantage <br>« Argent »<span class=\"superscripts\"><sup>MC</sup></span> Canadian Tire",
		personalInformation_MoneyAdvantage_MessageField	    	:	"Veuillez entrer votre numéro de compte Avantage « Argent »<span class=\"superscripts\"><sup>MC</sup></span> Canadian Tire si vous êtes déjà membre du programme. Les points Avantage « Argent » Canadian Tire que vous obtiendrez avec la carte de crédit pour laquelle vous remplissez une demande seront crédités au compte de cette carte, si votre demande est approuvée. Un compte Avantage « Argent » Canadian Tire sera ouvert à votre nom si vous laissez ce champ vide",
		personalInformation_NameField							:	"Nom",
		personalInformation_FirstName							:	"Prénom",
		personalInformation_Initial								:	"Initiale",
		personalInformation_LastName							:	"Nom de famille",
		personalInformation_DateOfBirth							:	"Date de naissance",
		personalInformation_EmailAddress						:	"Adresse électronique",
	//	personalInformation_ReceiveEmail						:	"Je veux recevoir les communications par courriel sur les offres, les promotions et les concours ainsi que des renseignements sur les produits et services de la famille d'entreprises Canadian Tire, y compris des Services Financiers Canadian Tire et des produits d'assurance Canadian Tire. L'adresse postale de la famille d'entreprises Canadian Tire et des Services Financiers Canadian Tire est: 3475, Superior Court, Oakville (Ontario)  L6L 0C6 Ils peuvent également être joints au 1 800 459-6415. Je comprends que je peux retirer mon consentement en tout temps.",
		personalInformation_ReceiveEmail						:	"J’aimerais recevoir des renseignements sur les offres, promotions, concours, cadeaux, événements, coupons et autres renseignements ayant trait aux produits et services qui pourraient m’intéresser, par courriel, messagerie texte (sous réserve des frais standards de données et de messagerie texte) et autre messagerie électronique de La Société Canadian Tire Limitée (la « Société Canadian Tire »), des Services Financiers Canadian Tire Limitée (les « SFCT »), de la Banque Canadian Tire (la « BCT »), y compris de leurs divisions commerciales respectives exploitées en vertu des marques Canadian Tire, du programme de primes en « Argent » Canadian Tire (ou du programme Avantage « Argent » Canadian Tire si vous résidez en Nouvelle-Écosse), de l’Académie des conducteurs de Canadian Tire<span class=\"superscripts\"><sup>MD</sup></span>, des Services résidentiels de Canadian Tire<span class=\"superscripts\"><sup>MC</sup></span> et de l’Assistance routière Canadian Tire<span class=\"superscripts\"><sup>MD</sup></span>, ainsi que d’autres membres du groupe de la Société Canadian Tire, des SFCT et de la BCT ou de leurs partenaires de marketing. Vous pouvez communiquer avec la Société Canadian Tire, les SFCT et la BCT à la C.P. 2000, Welland (Ontario)  L3B 5S3 ou à l’adresse customerservice@canadiantire.ca. Je comprends que je peux retirer mon consentement en tout temps.",
		personalInformation_PreferredLanguage					:	"Langue de correspondance",
		personalInformation_PreferredLanguageEnglish			:	"Anglais",
		personalInformation_PreferredLanguageFrench				:	"Français",
		personalInformation_PrimaryPhone						:	"Numéro de téléphone principal",
		// US3979
		// personalInformation_PrimaryPhoneNote					:	"<sup>*</sup> Remarque : il se peut que nous vous envoyions des avis sur votre compte par message texte. Ces messages n’entraîneront aucuns frais.",
		// US3627
		personalInformation_PrimaryPhoneNote					:	"Remarque : il se peut que nous vous envoyions des avis sur votre compte par message texte. Ces messages n’entraîneront aucuns frais.",
		
		personalInformation_SocialInsurance						:	"Numéro d'assurance sociale &#35;",
		personalInformation_Address								:	"Adresse",
		personalInformation_StreetName							:	"Rue",
		personalInformation_StreetNumber						:	"Numéro",
		personalInformation_Suite								:	"Numéro d'app. / bureau",
		personalInformation_City								:	"Ville",
		personalInformation_Province							:	"Province",
		personalInformation_PostalCode							:	"Code postal",
		personalInformation_HousingInformation					:	"Renseignements sur l'habitation",
		personalInformation_ResidentialStatus					:	"Statut de résidence",
		personalInformation_MonthlyHousingPayment				:	"Hypothèque / Loyer mensuel",
		personalInformation_MonthlyHousingPayment1				:	",00 $ / mois",
		personalInformation_AddressSince						:	"À cette adresse depuis", // <br> tag is for proper locating in the table cell
		
		personalInformation_EmploymentInformation				:	"<b>Renseignements sur l'emploi</b>",
		personalInformation_EmploymentType						:	"Situation d'emploi",
		personalInformation_Employer							:	"Employeur",
		personalInformation_JobTitle							:	"Catégorie d'emploi",
		personalInformation_JobDescription						:	"Titre du poste",
		// US3622
		personalInformation_JobDescription_Other				:	"Titre du poste (Autre)",
		personalInformation_EmployerSince						:	"Avec cet employeur depuis",
		
		personalInformation_FinancialInformation				:	"<b>Renseignements financiers</b>",
		// US3961
		// personalInformation_GrossAnnualIncome					:	"Revenu annuel brut", // Old
		personalInformation_GrossAnnualIncome					:	"Revenu Annuel Personnel Brut",
		personalInformation_GrossAnnualHouseholdIncome			:	"Revenu Annuel Brut Du Ménage",
		
		personalInformation_BankingProducts						:	"Mes produits bancaires (cochez toutes les cases appropriées)",
		personalInformation_BankLoan							:	"Prêt bancaire",
		personalInformation_SavingsAccount						:	"Compte d'épargne",
		personalInformation_ChequingAccount						:	"Compte chèque",
		personalInformation_GasCard								:	"Carte de société pétrolière",
		personalInformation_StoreCard							:	"Carte de grand magasin",
		personalInformation_CreditCard							:	"Carte de crédit",
		personalInformation_Dollar								:	" $",
		personalInformation_prevAddressTitle					:	"Adresse précédente requise seulement si moins de deux ans à l'adresse actuelle.",
		
		personalInformation_DOB_18YearsError					:	"Vous devez être âgé de 18 ans ou plus pour faire une demande",
		personalInformation_DOB_19YearsError					:	"Vous devez être âgé de 19 ans ou plus pour faire une demande",
		
		//--------------- US4591 START ---------------------
		
		personalInformation_step_2_of_5_Eomm                    :   "<span class=\"overviewNSTableRedText\">Étape 2 de 5 :</span> Renseignements personnels",
		personalInformation_step_2_of_5_Decoupled                         :   "<span class=\"overviewNSTableRedText\">Étape 2 de 4 :</span> Renseignements personnels",
		personalInformation_ApplyForTriangleMastercard			:	"Vous demandez la carte Mastercard<span class=\"superscriptsHeader\"><sup>MD</sup></span> Triangle<span class=\"superscriptsHeader\"><sup>MC</sup></span>",
		personalInformation_ApplyForWorld_elite_card			:	"Vous demandez la carte World Elite Mastercard<span class=\"superscriptsHeader\"><sup>MD</sup></span> Triangle<span class=\"superscriptsHeader\"><sup>MC</sup></span>",
		personalInformation_provide_email_to_get_bonus         :   "Indiquez votre adresse courriel et cochez la case ci-bas pour obtenir une prime de <span class=\"overviewNSTableRedText\">5 &#36; en Argent CT &#33;<sup>&#8224;</sup></span>",
		
		//--------------- US4591 ENDS  ---------------------
		overview_AmIEligibleTable_Masterdard			  	    :	"Mastercard<sup>MD</sup> Triangle<sup>MC</sup> ",
		overview_AmIEligibleTable_World_elite_card          	:   "World Elite Mastercard<sup>MD</sup> Triangle<sup>MC</sup> ",
		
		employmentType_FullTime									:	"Temps plein",
		employmentType_Seasonal									:	"Saisonnier",
		employmentType_PartTime									:	"Temps partiel",
		employmentType_Retired									:	"Retraité",
		
		residentialStatus_Own									:	"Propriétaire",
		residentialStatus_Rent									:	"Locataire",
		residentialStatus_Parents								:	"Maison des parents",
		residentialStatus_Other									:	"Autre",
		
		// -------------- US3622 START -------------

		// Job Categories - Start
		
		jobTitlesList_DR                              :    "Conducteur",
		jobTitlesList_GU                              :    "Gardien",
		jobTitlesList_HO                              :    "Personne au foyer",
		jobTitlesList_LA                              :    "Ouvrier",
		jobTitlesList_MA                              :    "Personnel de gestion",
		jobTitlesList_MI                              :    "Militaire",
		jobTitlesList_OF                              :    "Personnel de bureau",
		jobTitlesList_OW                              :    "Propriétaire",
		jobTitlesList_FA                              :    "Travailleur à la production",
		jobTitlesList_PR                              :    "Professionnel",
		jobTitlesList_RE                              :    "Réparation",
		jobTitlesList_RT                              :    "Retraité",
		jobTitlesList_SA                              :    "Ventes",
		jobTitlesList_SE                              :    "Service",
		jobTitlesList_ST                              :    "Étudiant",
		jobTitlesList_TR                              :    "Métiers",
		jobTitlesList_UN                              :    "Sans emploi",
		jobTitlesList_OT                              :    "Autre",
		
		// End
		
		// Job Titles - Start
		// TRADERS
		jobDescList_null                            :"Veuillez sélectionner...",
		jobDescList_TR_BD                           : 	'Constructeur / Promoteur',
		jobDescList_TR_BL                           : 	'Briqueteur',
		jobDescList_TR_CM                           : 	'Ébéniste',
		jobDescList_TR_CP                           : 	'Charpentier',
		jobDescList_TR_CF                           : 	'Cimentier-finisseur',
		jobDescList_TR_ET                           : 	'Électricien',
		jobDescList_TR_GZ                           : 	'Vitrier',
		jobDescList_TR_EO                           : 	'Opérateur d’équipement',
		jobDescList_TR_FC                           : 	'Poseur de clôture',
		jobDescList_TR_GF                           : 	'Ouvrier pour installations au gaz',
		jobDescList_TR_GC                           : 	'Entrepreneur général',
		jobDescList_TR_IS                           : 	'Calorifugeur',
		jobDescList_TR_IW                           : 	'Serrurier',
		jobDescList_TR_LS                           : 	'Jardinier paysagiste',
		jobDescList_TR_MF                           : 	'Marine Fitter',
		jobDescList_TR_MW                           : 	'Menuisier de préfabrication',
		jobDescList_TR_PR                           : 	'Peintre',
		jobDescList_TR_PF                           : 	'Tuyauteur',
		jobDescList_TR_PT                           : 	'Plâtrier',
		jobDescList_TR_PB                           : 	'Plombier',
		jobDescList_TR_PL                           : 	'Monteur de lignes',
		jobDescList_TR_SM                           : 	'Chef de chantier',
		jobDescList_TR_TP                           : 	'Tireur de joints',
		jobDescList_TR_TS                           : 	'Mosaïste',
		jobDescList_TR_WD                           : 	'Soudeur ',
		jobDescList_TR_OR                           : 	'Autre',

		// DRIVER
		jobDescList_DR_AD                           : 	'Conducteur d’ambulance',
		jobDescList_DR_BD                           : 	'Conducteur d’autobus',
		jobDescList_DR_CF                           : 	'Conducteur',
		jobDescList_DR_CR                           : 	'Messager',
		jobDescList_DR_DI                           : 	'Moniteur de conduite automobile',
		jobDescList_DR_TO                           : 	'Conducteur de dépanneuse',
		jobDescList_DR_TD                           : 	'Conducteur de camion',
		jobDescList_DR_OR                           : 	'Autre',

		// MILITARY
		jobDescList_MI_AM                           : 	'Armée',
		jobDescList_MI_AI                           : 	'Force aérienne',
		jobDescList_MI_NY                           : 	'Marine',
		jobDescList_MI_AR                           : 	'Forces armées',
		jobDescList_MI_MR                           : 	'Ajusteur de navire',
		jobDescList_MI_OR                           : 	'Autre',

		// PROFESSIONAL
		jobDescList_PR_AT                           : 	'Comptable',
		jobDescList_PR_AY                           : 	'Actuaire',
		jobDescList_PR_AD                           : 	'Vérificateur',
		jobDescList_PR_CR                           : 	'Chiropraticien',
		jobDescList_PR_CP                           : 	'Programmeur informatique',
		jobDescList_PR_CT                           : 	'Technicien informatique',
		jobDescList_PR_CL                           : 	'Contrôleur',
		jobDescList_PR_CO                           : 	'Préposé au crédit ',
		jobDescList_PR_DH                           : 	'Hygiéniste dentaire',
		jobDescList_PR_DT                           : 	'Dentiste',
		jobDescList_PR_DI                           : 	'Diététicien',
		jobDescList_PR_DR                           : 	'Médecin',
		jobDescList_PR_EG                           : 	'Ingénieur',
		jobDescList_PR_EX                           : 	'Direction',
		jobDescList_PR_FA                           : 	'Conseiller financier',
		jobDescList_PR_JD                           : 	'Juge',
		jobDescList_PR_LW                           : 	'Avocat ',
		jobDescList_PR_MY                           : 	'Maire',
		jobDescList_PR_NU                           : 	'Infirmier',
		jobDescList_PR_OP                           : 	'Optométriste',
		jobDescList_PR_PL                           : 	'Parajuridique',
		jobDescList_PR_PR                           : 	'Ambulancier',
		jobDescList_PR_PC                           : 	'Pharmacien',
		jobDescList_PR_PT                           : 	'Physiothérapeute',
		jobDescList_PR_PI                           : 	'Pilote',
		jobDescList_PR_PO                           : 	'Politicien',
		jobDescList_PR_PA                           : 	'Directeur',
		jobDescList_PR_PF                           : 	'Professeur',
		jobDescList_PR_PM                           : 	'Chef de projet',
		jobDescList_PR_RG                           : 	'Radiologiste',
		jobDescList_PR_SW                           : 	'Travailleur social',
		jobDescList_PR_TC                           : 	'Enseignant',
		jobDescList_PR_VN                           : 	'Vétérinaire',
		jobDescList_PR_OR                           : 	'Autre',

		// PRODUCTION WORKER
		jobDescList_FA_AS                           : 	'Monteur',
		jobDescList_FA_BD                           : 	'Relieur',
		jobDescList_FA_BM                           : 	'Chaudronnier',
		jobDescList_FA_FC                           : 	'Fabricant',
		jobDescList_FA_FD                           : 	'Conducteur de chariot élévateur',
		jobDescList_FA_LH                           : 	'Chef d’équipe',
		jobDescList_FA_MH                           : 	'Mécanicien',
		jobDescList_FA_MO                           : 	'Opérateur de machine',
		jobDescList_FA_MN                           : 	'Opérateur',
		jobDescList_FA_MW                           : 	'Préposé à l’entretien',
		jobDescList_FA_MG                           : 	'Personnel de gestion',
		jobDescList_FA_MI                           : 	'Monteur-ajusteur',
		jobDescList_FA_OP                           : 	'Opérateur',
		jobDescList_FA_PK                           : 	'Emballeur',
		jobDescList_FA_PT                           : 	'Imprimeur',
		jobDescList_FA_QS                           : 	'Spécialiste de la qualité',
		jobDescList_FA_ST                           : 	'Technicien en sécurité',
		jobDescList_FA_SW                           : 	'Couseur',
		jobDescList_FA_SO                           : 	'Trieur',
		jobDescList_FA_SV                           : 	'Superviseur',
		jobDescList_FA_TM                           : 	'Outilleur-ajusteur',
		jobDescList_FA_WW                           : 	'Employé d’entrepôt',
		jobDescList_FA_WD                           : 	'Soudeur',
		jobDescList_FA_OR                           : 	'Autre',

		// GUARD
		jobDescList_GU_CO                           : 	'Agent correctionnel',
		jobDescList_GU_CS                           : 	'Douanier',
		jobDescList_GU_DT                           : 	'Détective',
		jobDescList_GU_FF                           : 	'Pompier',
		jobDescList_GU_PR                           : 	'Garde forestier',
		jobDescList_GU_SG                           : 	'Agent de sécurité ',
		jobDescList_GU_OR                           : 	'Autre',

		// MANAGER
		jobDescList_MA_AE                           : 	'Arts et divertissements',
		jobDescList_MA_AG                           : 	'Agriculture',
		jobDescList_MA_CO                           : 	'Construction',
		jobDescList_MA_ED                           : 	'Éducation',
		jobDescList_MA_FB                           : 	'Finance ou bancaire',
		jobDescList_MA_FS                           : 	'Services alimentaires',
		jobDescList_MA_MH                           : 	'Médecine ou soins de santé',
		jobDescList_MA_FO                           : 	'Foresterie',
		jobDescList_MA_GV                           : 	'Gouvernement',
		jobDescList_MA_MF                           : 	'Fabrication',
		jobDescList_MA_ME                           : 	'Médias',
		jobDescList_MA_MI                           : 	'Exploitation minière',
		jobDescList_MA_RE                           : 	'Immobilier',
		jobDescList_MA_RT                           : 	'Détail',
		jobDescList_MA_TH                           : 	'Technologie',
		jobDescList_MA_WS                           : 	'Vente en gros',
		jobDescList_MA_OR                           : 	'Autre',

		// OWNER
		jobDescList_OW_AO                           : 	'Propriétaire d’un magasin de vêtements',
		jobDescList_OW_CT                           : 	'Traiteur',
		jobDescList_OW_CO                           : 	'Propriétaire d’une entreprise de construction',
		jobDescList_OW_FM                           : 	'Fermier',
		jobDescList_OW_FO                           : 	'Propriétaire d’une franchise ',
		jobDescList_OW_JO                           : 	'Propriétaire d’un magasin de bijoux',
		jobDescList_OW_RO                           : 	'Propriétaire d’un restaurant',
		jobDescList_OW_SO                           : 	'Propriétaire d’un salon',
		jobDescList_OW_OR                           : 	'Autre',

		// OTHER
		jobDescList_OT_AR                           : 	'Artiste',
		jobDescList_OT_AT                           : 	'Athlète',
		jobDescList_OT_CL                           : 	'Clergé',
		jobDescList_OT_CO                           : 	'Entraîneur',
		jobDescList_OT_CM                           : 	'Comédien',
		jobDescList_OT_DC                           : 	'Danseur',
		jobDescList_OT_DS                           : 	'Styliste',
		jobDescList_OT_DJ                           : 	'Animateur',
		jobDescList_OT_ED                           : 	'Rédacteur',
		jobDescList_OT_GA                           : 	'Graphiste',
		jobDescList_OT_LE                           : 	'Éclairagiste',
		jobDescList_OT_MS                           : 	'Musicien',
		jobDescList_OT_PG                           : 	'Photographe',
		jobDescList_OT_PD                           : 	'Producteur / Directeur',
		jobDescList_OT_RF                           : 	'Arbitre',
		jobDescList_OT_SE                           : 	'Preneur de son',
		jobDescList_OT_SH                           : 	'Assistant de plateau',
		jobDescList_OT_WC                           : 	'Sculpteur sur bois',
		jobDescList_OT_WR                           : 	'Écrivain',
		jobDescList_OT_OR                           : 	'Autre',

		// SALES
		jobDescList_SA_AT                           : 	'Encanteur',
		jobDescList_SA_BK                           : 	'Courtier',
		jobDescList_SA_BY                           : 	'Acheteur',
		jobDescList_SA_DS                           : 	'Ventes directes',
		jobDescList_SA_IA                           : 	'Agent d’assurance',
		jobDescList_SA_RT                           : 	'Courtier immobilier',
		jobDescList_SA_SA                           : 	'Préposé aux ventes',
		jobDescList_SA_SM                           : 	'Directeur des ventes',
		jobDescList_SA_SB                           : 	'Courtier en valeurs mobilières',
		jobDescList_SA_OR                           : 	'Autre',

		// SERVICE
		jobDescList_SE_BT                           : 	'Barman',
		jobDescList_SE_BP                           : 	'Chasseur / Bagagiste',
		jobDescList_SE_BC                           : 	'Boucher',
		jobDescList_SE_BL                           : 	'Maître d’hôtel',
		jobDescList_SE_CH                           : 	'Caissier',
		jobDescList_SE_CW                           : 	'Éducateur de la petite enfance',
		jobDescList_SE_AT                           : 	'Esthéticien',
		jobDescList_SE_CS                           : 	'Conseiller',
		jobDescList_SE_CJ                           : 	'Dépositaire / Concierge',
		jobDescList_SE_CR                           : 	'Représentant au service à la clientèle',
		jobDescList_SE_FT                           : 	'Entraîneur de conditionnement physique',
		jobDescList_SE_FA                           : 	'Agent de bord',
		jobDescList_SE_FR                           : 	'Fleuriste',
		jobDescList_SE_FS                           : 	'Services funéraires',
		jobDescList_SE_GM                           : 	'Toiletteur',
		jobDescList_SE_HB                           : 	'Coiffeur / Barbier',
		jobDescList_SE_HC                           : 	'Préposé aux services de soutien à la personne / aux soins de santé',
		jobDescList_SE_HK                           : 	'Gouvernante',
		jobDescList_SE_IE                           : 	'Import / Export',
		jobDescList_SE_MT                           : 	'Massothérapeute',
		jobDescList_SE_PC                           : 	'Soins des animaux',
		jobDescList_SE_PG                           : 	'Photographe',
		jobDescList_SE_PW                           : 	'Postier',
		jobDescList_SE_SW                           : 	'Éboueur',
		jobDescList_SE_TG                           : 	'Guide touristique ',
		jobDescList_SE_TA                           : 	'Agent de voyage',
		jobDescList_SE_WW                           : 	'Serveur',
		jobDescList_SE_OR                           : 	'Autre',

		// REPAIRER
		jobDescList_RE_AR                           : 	'Réparateur d’appareil',
		jobDescList_RE_AB                           : 	'Réparateur de carrosserie',
		jobDescList_RE_CT                           : 	'Technicien en réparation d’ordinateur',
		jobDescList_RE_HM                           : 	'Homme à tout faire',
		jobDescList_RE_HP                           : 	'Réparateur de système CVCA',
		jobDescList_RE_MW                           : 	'Préposé à l’entretien',
		jobDescList_RE_TT                           : 	'Mécanicien de pneus',
		jobDescList_RE_MC                           : 	'Mécanicien',
		jobDescList_RE_SS                           : 	'Couturier',
		jobDescList_RE_SR                           : 	'Cordonnier',
		jobDescList_RE_TR                           : 	'Tailleur',
		jobDescList_RE_US                           : 	'Rembourreur',
		jobDescList_RE_OR                           : 	'Autre',

		// LABOURER
		jobDescList_LA_BB                           : 	'Commis-débarrasseur',
		jobDescList_LA_CM                           : 	'Cimentier',
		jobDescList_LA_CL                           : 	'Travailleur de la construction',
		jobDescList_LA_DM                           : 	'Livreur',
		jobDescList_LA_DL                           : 	'Foreur',
		jobDescList_LA_GR                           : 	'Jardinier',
		jobDescList_LA_EO                           : 	'Opérateur d’excavatrice',
		jobDescList_LA_FH                           : 	'Ouvrier agricole',
		jobDescList_LA_FI                           : 	'Pêcheur',
		jobDescList_LA_FL                           : 	'Signaleur',
		jobDescList_LA_GA                           : 	'Pompiste',
		jobDescList_LA_GD                           : 	'Fossoyeur',
		jobDescList_LA_GK                           : 	'Préposé à l’entretien des terrains',
		jobDescList_LA_IS                           : 	'Calorifugeur',
		jobDescList_LA_LG                           : 	'Bûcheron',
		jobDescList_LA_LA                           : 	'Préposé au stationnement',
		jobDescList_LA_MS                           : 	'Préposée au traitement du courrier',
		jobDescList_LA_MW                           : 	'Préposé à l’entretien',
		jobDescList_LA_MI                           : 	'Mineur',
		jobDescList_LA_MO                           : 	'Déménageur',
		jobDescList_LA_OI                           : 	'Ouvrier de plates-formes pétrolières',
		jobDescList_LA_PT                           : 	'Peintre',
		jobDescList_LA_PV                           : 	'Carreleur',
		jobDescList_LA_PR                           : 	'Porteur',
		jobDescList_LA_RF                           : 	'Couvreur',
		jobDescList_LA_SC                           : 	'Collectionneur',
		jobDescList_LA_SR                           : 	'Préposé à l’expédition et à la réception',
		jobDescList_LA_WW                           : 	'Laveur de vitres',
		jobDescList_LA_OR                           : 	'Autre',

		// OFFICE STAFF
		jobDescList_OF_AM                           : 	'Directeur de comptes',
		jobDescList_OF_AR                           : 	'Commis aux comptes clients',
		jobDescList_OF_AA                           : 	'Adjoint administratif',
		jobDescList_OF_AP                           : 	'Estimateur',
		jobDescList_OF_BT                           : 	'Employé de banque',
		jobDescList_OF_BI                           : 	'Inspecteur des bâtiments',
		jobDescList_OF_CO                           : 	'Opérateur d’ordinateur',
		jobDescList_OF_CI                           : 	'Fonctionnaire',
		jobDescList_OF_CA                           : 	'Expert en sinistres',
		jobDescList_OF_CT                           : 	'Encaisseur',
		jobDescList_OF_CS                           : 	'Spécialiste des communications',
		jobDescList_OF_CR                           : 	'Représentant au service à la clientèle',
		jobDescList_OF_DO                           : 	'Opérateur de saisie de données',
		jobDescList_OF_DP                           : 	'Répartiteur',
		jobDescList_OF_ET                           : 	'Rédacteur',
		jobDescList_OF_ES                           : 	'Estimateur',
		jobDescList_OF_HR                           : 	'Ressources humaines',
		jobDescList_OF_IC                           : 	'Préposé à l’inventaire',
		jobDescList_OF_JL                           : 	'Journaliste',
		jobDescList_OF_LA                           : 	'Assistant juridique ',
		jobDescList_OF_LB                           : 	'Libraire',
		jobDescList_OF_PM                           : 	'Chef de projet',
		jobDescList_OF_RC                           : 	'Réceptionniste',
		jobDescList_OF_RT                           : 	'Recruteur',
		jobDescList_OF_TS                           : 	'Traducteur',
		jobDescList_OF_UW                           : 	'Souscripteur',
		jobDescList_OF_WD                           : 	'Concepteur Web',
		jobDescList_OF_OR                           : 	'Autre',		

		jobDescList_HO								: 	'Personne au foyer',
		jobDescList_RT								: 	'Retraité',
		jobDescList_UN								: 	'Sans emploi',		
		jobDescList_ST								: 	'Étudiant',
		
		// End
		// ----------------- END -------------------
		
	    personalData_MR									:	"M.",
	    personalData_MRS								:	"MME",
	    personalData_MISS								:	"MLLE", // ---
	    personalData_MS									:	"MLLE",
		
		// US4579 Removal of CT
		personalInformation_useMyCTProfileButtonText	  			:	'<span class="buttonCTText_fr">UTILISER LES RENSEIGNEMENTS DE MON PROFIL</span>',
		personalInformation_Title_TextField							:	'<select class=\"fieldValuesSelectField titleField\" id=\"personalInformation_Title_TextField\" />',		
		personalInformation_Month									:	'<select class=\"fieldValuesSelectField dateOfBirthMonthField\" id=\"personalData_DateOfBirth_Month\" placeholder=\"Month\" />',
		personalInformation_Day										:	'<select class=\"fieldValuesSelectField dateOfBirthDayField\" id=\"personalData_DateOfBirth_Day\" placeholder=\"Day\" />',
		personalInformation_Year									:	'Année',
		personalInformation_Province_TextField						:	'<select class="fieldValuesSelectField addressProvinceField" id="personalInformation_Province_TextField"/>',
		personalInformation_ResidentialStatus_TextField				:	'<select class="fieldValuesSelectField residentialStatusField" id="personalInformation_ResidentialStatus_TextField"/>',
		personalInformation_AddressSince_Month						:	'<select class="fieldValuesSelectField dateOfBirthMonthField" id="personalInformation_AddressSince_Month" placeholder="Month" />',
		personalInformation_AddressSince_Year						:	'<input class="fieldValuesTextField dateOfBirthYearField" id="personalInformation_AddressSince_Year" placeholder="Année" type="text" maxlength="4"/>',
		personalInformation_PrevProvince_TextField					:	'<select class="fieldValuesSelectField addressProvinceField" id="personalInformation_PrevProvince_TextField"/>',
		personalInformation_EmploymentType_TextField				:	'<select class="fieldValuesSelectField" id="personalInformation_EmploymentType_TextField" />',
		personalInformation_JobTitle_TextField						:	'<select class="fieldValuesSelectField" id="personalInformation_JobTitle_TextField" />',
		
		// US3622
		personalInformation_JobDesc_SelectField						:	'<select class="fieldValuesSelectField" id="personalInformation_JobDescription_SelectField" />',
		
		personalInformation_EmployerSince_Month						:	'<select class="fieldValuesSelectField dateOfBirthMonthField" id="personalInformation_EmployerSince_Month" placeholder="Month" />',
		personalInformation_EmployerSince_Year						:	'<input class="fieldValuesTextField dateOfBirthYearField" id="personalInformation_EmployerSince_Year" placeholder="Année" type="text" maxlength="4"/>',

		// US3961		
		//personalInformation_grossIncomeError1						:	'Le revenu annuel brut entré est ', // Old
		personalInformation_grossIncomeError1						:	'Le revenu annuel personnel brut entré est ',
		personalInformation_grossIncomeError2						:	' $. Est-ce exact?',
		// US3961
		personalInformation_grossHouseholdIncomeError1				:	'Le revenu annuel brut du ménage entré est ',
		personalInformation_grossHouseholdIncomeError2				:	' $. Est-ce exact?',
		
		//--------------- END --------------------- Personal Information section -------------- END -----------

		//----------------------------------------- OPTIONAL PRODUCTS section ------------------------------
		
		// ----- US4591 Starts --------- //
		additionalInformation_step_3_of_5_Ecomm                         :   "<span class=\"overviewNSTableRedText\">Étape 3 de 5 :</span> Produits facultatifs",
		additionalInformation_step_3_of_5_Decouple                      :   "<span class=\"overviewNSTableRedText\">Étape 3 de 4 :</span> Produits facultatifs",
		
		// ----- US4591 Ends -----------//
		
		additionalInformation_RelationshipError					:   "Veuillez choisir un type de relation parmi la liste déroulante.",
		additionalInformation_NoRadioSelecedError				:   "Veuillez faire un choix.",
		additionalInformation_AgreeToTermsError					:   "Si vous aimeriez adhérer à ce produit, vous devez accepter les modalités avant de continuer.",
		
		additionalInformation_Title								:   "Produits facultatifs",
		additionalInformation_GetSuplementaryCard				:	"<b>Obtenez une carte supplémentaire</b>",
		additionalInformation_Asterix							:	"*",
		additionalInformation_requiredField						:	"Indique un champ obligatoire",
		
		additionalInformation_TitleField						:	"Titre de civilite",
		additionalInformation_NameField							:	"Nom",
		additionalInformation_FirstName							:	"Prenom",
		additionalInformation_Initial							:	"Initiale",
		additionalInformation_LastName							:	"Nom de famille",
		additionalInformation_DateOfBirth						:	"Date de naissance",
		additionalInformation_PrimaryPhone						:	"Numero de telephone principal",
		additionalInformation_Relationship						:	"Lien de parenté",
		additionalInformation_Address							:	"Adresse",
		additionalInformation_StreetName						:	"Rue",
		additionalInformation_StreetNumber						:	"Numero",
		additionalInformation_Suite								:	"Numero d'app. / bureau",
		additionalInformation_City								:	"Ville",
		additionalInformation_Province							:	"Province",
		additionalInformation_PostalCode						:	"Code postal",
		additionalInformation_SameAddressAsPrimaryCardholder	:	"L’adresse est-elle identique à celle du titulaire de carte principal?",
		additionalInformation_SameAddresYes						:	"Oui",
		additionalInformation_SameAddresNo						:	"Non",
		additionalInformation_OptionalInsurance					:	"Assurance facultative",
		additionalInformation_OptionalProducts					:	"<b>ADHÉSION À DES PRODUITS FACULTATIFS<sup>&#8224;&#8224;</sup></b>",
		additionalInformation_AuthorizeSupplementaryCardmember	:	"&#44; je désire obtenir une carte additionnelle sur ce compte, sans frais &#33;",
		additionalInformation_AuthorizeSupplementaryCardmember_Yes	:	"&nbsp;&#33; Je désire autoriser une personne à détenir une carte supplémentaire sur ce compte et vous demande d’émettre une carte supplémentaire à son nom, SANS FRAIS.",
		additionalInformation_AuthorizeSupplementaryCardmember_No	:	"&nbsp;- Je désire autoriser une personne à détenir une carte supplémentaire sur ce compte et vous demande d’émettre une carte supplémentaire à son nom, SANS FRAIS.",
		
		// Old code
		// additionalInformation_OptionalInsurance_CreditProtector_enroll 	:	"- Je désire adhérer à Couverture-crédit<span class=\"superscripts\"><sup>MD</sup></span><sup>**</sup>/Couverture-crédit – Âge d’or<span class=\"superscripts\"><sup>MD</sup></span> <sup>***</sup>",
		additionalInformation_OptionalInsurance_CreditProtector_enroll 	:	"- Je désire adhérer à Assurance Couverture-crédit<span class=\"superscripts\"><sup>MD</sup></span>",
		additionalInformation_OptionalInsurance_IdentityWatch   		:   "- Je veux adhérer au programme Surveillance d’identité Classique<span class=\"superscripts\"><sup>MD</sup></span>",
		additionalInformation_OptionalInsurance_ProtectionAdvantage   	:   "- Je désire adhérer à Avantage Protection de Canadian Tire<span class=\"superscripts\"><sup>MD</sup>",
		additionalInformation_OptionalInsurance_DoNotEnrolMe 			:   "- Je ne veux pas adhérer à l’assurance facultative.",
		
		
		//additionalInformation_OptionalInsurance_Details			:	"<i>(non disponible pour les résidents de la Saskatchewan)</i><br><ul><li>La prime est de 1,10 $ par tranche de 100 $ du solde mensuel courant, moins toute prime d’assurance impayée, chaque mois où le solde de votre compte est de 10 $ ou plus et est portée à votre compte MasterCard<span class=\"superscripts\"><sup>MD</sup></span> de Canadian Tire<span class=\"superscripts\"><sup>MD</sup></span></li><li>Par exemple, si votre solde était de 200 $ au moment de l’impression de votre relevé, vous ne paieriez que 2,20 $, taxe en sus.</li></ul>",
		//additionalInformation_OptionalInsurance_Details1		:   " ",//we need this empty string because french and english templates have different structure
		//additionalInformation_OptionalInsurance_Details2		:   "Protégez vos renseignements personnels et ceux de votre famille grâce à Surveillance d’identité Classique."
		//															+ "<ul><li>Service de surveillance en ligne des renseignements personnels que vous enregistrez.</li>"
		//															+ "<li>Service de retour de biens Rebound<span class=\"superscripts\"><sup>MD</sup></span>*** qui peut vous aider à récupérer les objets perdus ou volés.</li>"
		//															+ "<li>Remboursement*** de 75 $ (CAD) maximum, taxes incluses, par adhésion à l’année.</li>"
		//															+ "<li>De plus, la protection des cartes, la sauvegarde de données en ligne, une prime de 3 000 $ (CAD) maximum liée à l’arrestation de la personne ayant volé la carte.</li>"
		//															+ "<li>4,99 $*** payable en avance chaque mois une fois votre première transaction effectuée avec votre carte de crédit de marque Canadian Tire.</li></ul>"
		//															+ "Si vous souscrivez au programme Surveillance d’identité Classique, votre adhésion prendra effet à compter de la date d’inscription indiquée sur votre lettre de bienvenue, laquelle est comprise dans votre trousse de bienvenue du programme Surveillance d’identité Classique.",
																//	+ "*Certaines conditions s’appliquent."
																//	+ "<br>Surveillance d’identité Classique, 4,99 $ par mois, taxes applicables en sus."
																//	+ "J’ai lu et j’accepte les <a href='https://www.ctfs.com/lang/fr/Products/TermsandConditions/IDWatch/' target='_blank'>modalités</a>.",
		//additionalInformation_OptionalInsurance_Details3		:   "<i>(non disponible en Saskatchewan)</i><br>Recevez une couverture complète grâce à la souscription à la fois au programme Couverture-crédit<span class=\"superscripts\"><sup>MD</sup></span> / Couverture-crédit – Âge d’or<span class=\"superscripts\"><sup>MD</sup></span>** et Surveillance d’identité Classique."
		//															+ "<ul><li>La prime de Couverture-crédit<span class=\"superscripts\"><sup>MD</sup></span> / Couverture-crédit – Âge d’or<span class=\"superscripts\"><sup>MD</sup></span>** est de 1,10 $ par tranche de 100 $* du solde du mois courant chaque mois où le solde de votre compte est de 10 $ ou plus, et la prime de Surveillance d’identité Classique est de 4,99 $*** payable en avance chaque mois une fois votre première transaction effectuée avec votre carte de crédit de marque Canadian Tire. </li>"
		//															+ "<li>Par exemple, si votre solde était de 200 $ au moment de l’impression de votre relevé, vous ne paieriez que 2,20 $, taxe en sus. </li></ul>",
				
		// Starting of US3307 changes
		additionalInformation_OptionalProducts					:	"<b>Produits Facultatifs<sup>&#8224;</sup><sup>&#8224;</sup></b>",
		additionalInformation_OptionalInsurance_CreditProtector :	"Couverture-crédit<sup>MD**</sup> / Couverture-crédit – <i>Âge d’or</i><sup>MD***</sup>",
		additionalInformation_OptionalInsurance_CreditProtector_subtle	:	"<i>(non disponible pour les résidents de la Saskatchewan)</i>",
		
		//additionalInformation_OptionalInsurance_Details3		:   "<i>(not available in Saskatchewan)</i> <br>Receive comprehensive coverage with the combination of Credit Protector<sup>&reg;</sup>/Credit Protector-Senior<sup>&reg;</sup>** and Identity Watch Classic<sup>&trade;</sup>."
		//+ "<ul><li>$1.10 per $100* of your monthly statement balance in any month with a statement balance of $10 or more for Credit Protector/Credit Protector Senior** and $4.99*** payable in advance monthly after the first transaction is made on your Canadian Tire branded credit card for Identity Watch Classic.</li></ul>"
		//+ "<br>For example if your balance is $200 at the time your statement prints you would pay just $2.20 plus applicable taxes for Credit Protector<sup>&reg;</sup>/Credit Protector-Senior<sup>&reg;</sup>.",
		
		additionalInformation_OptionalInsurance_Details			:	"<i>(non disponible pour les résidents de la Saskatchewan)</i><ul><li>$1.10 per $100* of your monthly statement balance, less any amount of insurance premium charged, in any month with a statement balance of $10 or more charged to the <i>Canadian Tire</i><sup>&reg;</sup> MasterCard<sup>&reg;</sup>.</li></ul><br>For example if your balance is $200 at the time your statement prints you would pay just $2.20 plus applicable taxes.",
		additionalInformation_OptionalInsurance_Details1		:   " ",
		/*additionalInformation_OptionalInsurance_Details2		:   "Cette assurance de solde de carte de crédit vous aide à régler le solde impayé de votre compte de carte de crédit de marque Canadian Tire lorsque vous et votre famille en avez le plus besoin."
																+ "<ul><li>Online monitoring  of your registered personal information</li>"
																+ "<li>Rebound<sup>&reg;</sup> Asset Return Service*** which may help you recover lost or stolen items</li>"
																+ "<li>Computer Tune-Up Reimbursement*** of up to $75 CDN, inclusive of taxes, per subscription year.</li>"
																+ "<li>Plus Card Protection, Online Data Backup, Credit Card Theft Reward Service*** a $3,000 CDN reward.</li>"
																+ "<li>$4.99*** payable in advance monthly after the first transaction is made on your Canadian Tire branded credit card.</li></ul>"
																+ "<br>If you enrol in Identity Watch Classic, your subscription will be effective as of the enrolment date indicated on your Welcome Letter which is included in your Identity Watch Classic Welcome Package.",*/
		
		// DE1549
		
		additionalInformation_OptionalInsurance_Details2		:   "Vous permet de protéger vos renseignements privés et importants, ainsi que ceux de votre famille."
																+ "<ul class=\"floatLeft simpleHyphenList\"><li>&#45; Service de surveillance en ligne des renseignements personnels que vous enregistrez**</li>"
																+ "<li>&#45; Protection des cartes, sauvegarde de données en ligne, prime de 3 000 $ maximum liée à l’arrestation de la personne ayant volé la carte**</li>"
																+ "<li>&#45; Remboursement des coûts de mise au point informatique pouvant aller jusqu’à 75 $, taxes incluses, par année d’adhésion**</li>"
																+ "<li>&#45; Service de retour de biens Rebound<sup>MD</sup>** qui peut vous aider à récupérer les objets perdus ou volés</li>"
																+ "<li>&#45; Coût de 4,99 $** par mois, payable à l’avance au mois, après que la première transaction est effectuée sur votre carte de crédit émise par la Banque Canadian</li></ul>"
																+ "<br>Si vous adhérez au programme Surveillance d'identité Classique, votre adhésion prendra effet à compter de la date d'adhésion indiquée sur votre lettre de bienvenue, laquelle est comprise dans la trousse de bienvenue."
																+ "<br><br>L’adhésion à Surveillance d’identité Classique est facultative et peut être annulée en tout temps. Si vous annulez dans les 30 premiers jours suivant votre date d’adhésion, la Banque Canadian Tire vous remboursera les frais d’adhésion payés, après votre première transaction effectuée à l’aide de votre carte. Si vous annulez après les 30 premiers jours, l’annulation prendra effet à compter du dernier jour du cycle de facturation en cours ou 30 jours après la réception de l’avis d’annulation, selon la première éventualité. Si vous annulez votre adhésion, vous êtes responsable de tous les frais engagés en raison des services offerts par l’intermédiaire d’un fournisseur d’accès Internet ou d’un tiers fournisseur de services.",
		
		additionalInformation_OptionalInsurance_Details3		:   "L’adhésion aux assurances Couverture-crédit<span class=\"superscripts\"><sup>MD</sup> et Surveillance d’identité Classique<span class=\"superscripts\"><sup>MD</sup> comprend la protection et les avantages offerts par ces deux produits, tel que mentionné ci-dessus.",
		additionalInformation_OptionalInsurance_Details4		:   "Couverture-crédit (titulaires de carte âgés de 18 à 65 ans) peut : ",
		additionalInformation_OptionalInsurance_Details5_Bullet1	:   "&#45; payer une prestation mensuelle de 3 % du solde impayé d’un compte de carte de crédit de marque Canadian Tire (excluant les programmes de modalités spéciales) jusqu’à concurrence de 1 000 $ par mois et d’une prestation maximale de 20 000 $ en cas de perte d’emploi involontaire ou d’invalidité*; ",
		additionalInformation_OptionalInsurance_Details5_Bullet2	:	"&#45; payer le solde impayé de votre compte de carte de crédit de marque Canadian Tire en cas de décès ou de maladie terminale* du titulaire de carte ou de son conjoint, jusqu’à concurrence de 20 000 $.",
		additionalInformation_OptionalInsurance_Details6		:   "Couverture-crédit – <i>Âge d’or</i> (titulaires de carte âgés de 66 à 75 ans) peut : ",
		additionalInformation_OptionalInsurance_Details7_Bullet1	:	"&#45; payer le solde impayé de votre compte de carte de crédit de marque Canadian Tire en cas de décès ou de maladie terminale* du titulaire de carte ou de son conjoint, jusqu’à concurrence de 20 000 $.",
		additionalInformation_OptionalInsurance_Details8		:	"Couverture-crédit / Couverture-crédit – <i>Âge d’or</i> coûte 1,10 $* par tranche de 100 $ du solde impayé du mois actuel, moins toute prime d’assurance impayée du mois actuel et moins le solde impayé de tout programme de modalités spéciales, plus les taxes applicables. Aucune prime n’est facturée lorsque le solde impayé est inférieur à 10 $ au moment de l’impression du relevé. Par exemple, si votre solde est de 200 $ au moment de l’impression de votre relevé de compte, vous ne payerez que 2,20 $*, plus les taxes applicables.",
		
		additionalInformation_OptionalInsurance_Details9		:   "L’adhésion à Couverture-crédit / Couverture-crédit – <i>Âge d’or</i> est volontaire et peut être annulée en tout temps. Si vous adhérez à Couverture-crédit / Couverture-crédit – <i>Âge d’or</i>, votre couverture entre en vigueur dès votre adhésion. Vous recevrez une trousse de bienvenue pour confirmer votre adhésion. Elle contient un certificat d’assurance (les résidents du Québec reçoivent également un exemplaire du Guide de distribution) et des renseignements détaillés de la protection comme les avantages, les limites, les exclusions et la manière de faire une réclamation ou d’annuler la couverture.",
		additionalInformation_OptionalInsurance_Details10		:   "On trouve d’autres produits d’assurance sur le marché qui offrent une protection semblable à ceux de Couverture-crédit / Couverture-crédit – <i>Âge d’or</i>. Vous auriez avantage à vérifier si vous ne possédez pas déjà une assurance offrant une couverture semblable.",
		additionalInformation_OptionalInsurance_Details11		:   "La Banque Canadian Tire reçoit une commission lorsque vous achetez Couverture-crédit / Couverture-crédit –<i>Âge d’or</i>.",
		
		additionalInformation_OptionalInsurance_Details13		:   "Surveillance d’identité Classique<sup>MD</sup>",
		additionalInformation_OptionalInsurance_Details14		:   "Vous permet de protéger vos renseignements privés et importants, ainsi que ceux de votre famille.",
		additionalInformation_OptionalInsurance_Details14_Bullet1	:	"&#45; <b>Assistance en cas de perte ou de vol de cartes</b>",
		additionalInformation_OptionalInsurance_Details14_Bullet2	:	"&#45; <b>Sauvegarde de données en ligne</b>",
		additionalInformation_OptionalInsurance_Details14_Bullet3	:	"&#45; <b>Service de récompense pour retour de carte de crédit en cas de vol</b>",
		additionalInformation_OptionalInsurance_Details14_Bullet4	:	"&#45; <b>Protection contre l’usurpation d’identité / Service de surveillance en ligne</b>",
		additionalInformation_OptionalInsurance_Details14_Bullet5	:	"&#45; <b>Remboursement des frais de mise au point d’ordinateur</b>",
		additionalInformation_OptionalInsurance_Details14_Bullet6	:	"&#45; <b>Service de Retour d’articles perdus<sup>MD</sup></b>",
		additionalInformation_OptionalInsurance_Details14_Bullet7	:	"&#45; <b>Frais d’adhésion de 4,99 $**, payable à l’avance tous les mois après votre première transaction effectuée avec votre carte de crédit émise par la Banque Canadian Tire.</b>",
		additionalInformation_OptionalInsurance_Details14_1		:	"Si vous adhérez à Surveillance d’identité Classique, l’adhésion entrera en vigueur à compter de la date d’inscription indiquée sur votre lettre de bienvenue. Celle-ci figure dans la trousse de bienvenue que vous devriez recevoir dans un délai de 15 jours suivant l’adhésion.",
		additionalInformation_OptionalInsurance_Details14_2		:   "L’adhésion à Surveillance d’identité Classique est facultative et peut être annulée en tout temps. Si vous annulez dans les 30 premiers jours suivant votre date d’adhésion, la Banque Canadian Tire vous remboursera les frais d’adhésion payés, après votre première transaction effectuée à l’aide de votre carte. Si vous annulez après les 30 premiers jours, l’annulation prendra effet à compter du dernier jour du cycle de facturation en cours ou 30 jours après la réception de l’avis d’annulation, selon la première éventualité. Si vous annulez votre adhésion, vous serez responsable de tous les frais engagés et changements en raison des services offerts par l’intermédiaire d’un fournisseur d’accès Internet ou de leur tiers fournisseur de services.",
		
		additionalInformation_OptionalInsurance_Details15		:   "OUI, JE DÉSIRE ADHÉRER AU(X) PRODUIT(S) FACULTATIF(S) SUIVANT(S) :",
		
		// US3382
		additionalInformation_OptionalInsurance_Details16		:	"Assurance Couverture-crédit<sup>MD</sup> (offerte aux titulaires de carte âgés d’au moins 18 et de moins de 76 ans) ",
		additionalInformation_OptionalInsurance_Details16_Bullet1		:	"Cette assurance de solde de carte de crédit offerte pour votre carte de crédit émise par la Banque Canadian Tire peut aider à payer le solde impayé de votre carte de crédit ou peut effectuer les paiements mensuels, jusqu’à concurrence de la prestation maximale de la police, 20 000 $, lorsque vous et votre famille en avez le plus besoin.",
		additionalInformation_OptionalInsurance_Details16_Bullet2		:	"Couverture-crédit pourrait :",
		additionalInformation_OptionalInsurance_Details16_Bullet3		:	"&#45; payer une prestation mensuelle correspondant à 5 % du solde impayé d’une carte de crédit émise par la Banque Canadian Tire (excluant les programmes de modalités spéciales de paiement), tel que déterminé à la date du relevé coïncidant avec, ou précédant immédiatement, la date du sinistre, jusqu’à concurrence de 1 000 $ par mois et sous réserve d’une prestation maximale totale de 20 000 $ si vous perdiez involontairement votre emploi ou deveniez totalement invalide*;",
		additionalInformation_OptionalInsurance_Details16_Bullet4		:	"&#45; payer le solde impayé de votre carte de crédit émise par la Banque Canadian Tire, sous réserve d’une prestation maximale totale de 20 000 $, si vous ou votre conjoint décédiez, subissiez une mutilation, ou étiez diagnostiqué pour une maladie terminale*.",
		additionalInformation_OptionalInsurance_Details16_Bullet5		:	"L’Assurance Couverture-crédit coûte 1,10 $ par tranche de 100 $ de votre solde quotidien moyen (moins le montant impayé de tout programme de modalités spéciales de paiement) pour tout mois où le solde quotidien moyen s’établit à 10 $ ou plus. Par exemple, si votre solde quotidien moyen s’établissait à 350 $, vous payeriez seulement 3,85, plus les taxes applicables. À l’âge de 80 ans, le taux de prime est réduit à 0,59 $ par tranche de 100 $ du solde quotidien moyen (moins le montant impayé de tout programme de modalités spéciales de paiement).",
		additionalInformation_OptionalInsurance_Details16_Bullet6		:	"L’adhésion à l’Assurance Couverture-crédit n’est pas obligatoire et vous pouvez l’annuler en tout temps. Si vous annulez dans les 45 premiers jours de l’émission du certificat d’assurance, vous recevrez un remboursement intégral de toute prime payée. Si vous adhérez à l’Assurance Couverture-crédit, votre assurance entre en vigueur au moment de votre adhésion. Vous recevrez une trousse de bienvenue pour confirmer votre adhésion. Elle contiendra un certificat d’assurance (les résidents du Québec recevront aussi un guide de distribution) qui renfermera tous les détails de la couverture, comme les définitions, les prestations, les restrictions, les limites et les exclusions, ainsi que les démarches à suivre pour demander une annulation ou pour présenter une demande de règlement.",
		additionalInformation_OptionalInsurance_Details16_Bullet7		:	"Il existe d’autres produits d’assurance sur le marché qui peuvent offrir des couvertures semblables à celles que procure l’Assurance Couverture-crédit. Vous devriez vérifier si vous bénéficiez déjà d’une assurance qui offre des couvertures semblables.",
		additionalInformation_OptionalInsurance_Details16_Bullet8		:	"La Banque Canadian Tire a un intérêt financier dans la vente de cette assurance.",
		additionalInformation_OptionalInsurance_Details16_Bullet9		:	"<sup>*</sup> Consultez votre certificat d’assurance pour connaître les modalités, restrictions, exclusions et limitations. Lorsque vous atteignez l’âge de 80 ans, la protection en cas de décès ou de mutilation devient une protection en cas de décès par accident ou de mutilation par accident avec une réduction de la prime mensuelle.",
		additionalInformation_OptionalInsurance_Details16_Bullet91		:	"<sup>&Dagger;</sup> Taxes applicables en sus, payable mensuellement.",
		additionalInformation_OptionalInsurance_Details16_Bullet10		:	"Couverture-crédit est une assurance collective souscrite auprès de American Bankers Compagnie d’Assurance Vie de la Floride et de American Bankers Compagnie d’Assurance générale de la Floride. American Bankers Compagnie d’Assurance Vie de la Floride et American Bankers Compagnie d’Assurance générale de la Floride exercent des activités au Canada sous le nom d’Assurant<span class=\"superscripts\"><sup>MD</sup></span>.",
/*		additionalInformation_OptionalInsurance_Details16_Bullet11		:	"<sup>&reg;</sup> Assurant Solutions est une marque de commerce déposée de Assurant, Inc.",
		additionalInformation_OptionalInsurance_Details16_Bullet12		:	"<sup>MD</sup>/<sup>MC</sup> Couverture-crédit est une marque de commerce déposée de la Banque Canadian Tire.",
		additionalInformation_OptionalInsurance_Details16_Bullet13		:	"<sup>MD</sup>/<sup>MC</sup> Sauf indication contraire, toutes les marques de commerce sont la propriété de La Société Canadian Tire Limitée et sont utilisées.",
*/
		additionalInformation_OptionalProducts_Title1			:	"Avantage Protection de Canadian Tire<sup>MD</sup>",
		additionalInformation_OptionalProducts_Title1_1			:	"<i>(non disponible pour les résidents de la Saskatchewan)</i>",
		
		// Old line
		// 	additionalInformation_OptionalProducts_Title1_2			:	"(Adhésion à la fois à Couverture-crédit<sup>MD</sup>** / Couverture-crédit – <i>Âge d’or</i><sup>MD</sup>** et Surveillance d’identité ClassiqueTM. Comprend la couverture et les avantages des deux produits facultatifs, comme indiqué précédemment. ",
		//	additionalInformation_OptionalProducts_Title2			:	"Couverture-crédit<sup>MD**</sup> / Couverture-crédit – <i>Âge d’or</i><sup>MD***</sup>",
		additionalInformation_OptionalProducts_Title1_2			:	"Adhésion à l’Assurance Couverture-crédit<sup>MD</sup>  et au programme Surveillance d’identité Classique<sup>MD</sup>&#46; Comprend toute la couverture et les avantages des deux produits facultatifs énoncés ci-dessus&#46;",
		additionalInformation_OptionalProducts_Title2			:	"Assurance Couverture-crédit<sup>MD</sup>",
		additionalInformation_OptionalProducts_Title2_1			:	"<i>(non disponible pour les résidents de la Saskatchewan)</i>",
		additionalInformation_OptionalProducts_Title3			:	"Surveillance d’identité Classique<sup>MD</sup>",
		additionalInformation_OptionalProducts_Title4			:	"Pas pour l’instant",
				
		// US4133
		additionalInformation_OptionalInsurance_PostalDistImpact_Title		:	"L’IMPACT DE L’INTERRUPTION POTENTIELLE DES SERVICES POSTAUX SUR LA LIVRAISON DU COURRIER",
		additionalInformation_OptionalInsurance_PostalDistImpact_Para1		:	"Une interruption des services postaux pourrait survenir à compter du 8 juillet 2016.",
		additionalInformation_OptionalInsurance_PostalDistImpact_Para11		:	"Par conséquent, en tant que nouveau titulaire d’une carte de crédit émise par la Banque Canadian Tire<span class=\"superscripts\"><sup>MD</sup></span>, la trousse de bienvenue de votre carte de crédit Canadian Tire pourrait arriver plusieurs semaines après la reprise des services postaux.",
		additionalInformation_OptionalInsurance_PostalDistImpact_Para2		:	"Par ailleurs, si vous avez souscrit un produit facultatif tel que l’assurance Couverture crédit<span class=\"superscripts\"><sup>MD</sup></span> ou Surveillance d’identité Classique<span class=\"superscripts\"><sup>MD</sup></span>, veuillez prendre note de ce qui suit :",
		additionalInformation_OptionalInsurance_PostalDistImpact_Bullet1	:	"&#45; La trousse de bienvenue pour le(s) produit(s) facultatif(s) pourrait arriver plusieurs semaines après la reprise des services postaux.",
		additionalInformation_OptionalInsurance_PostalDistImpact_Bullet2	:	"&#45; Par conséquent, votre période de révision sera prolongée.",
		additionalInformation_OptionalInsurance_PostalDistImpact_Para3		:	"Sachez toutefois que vous pouvez télécharger un exemplaire de votre certificat d’assurance Couverture crédit<span class=\"superscripts\"><sup>MD</sup></span> ",
		additionalInformation_OptionalInsurance_PostalDistImpact_Para31		:	"(votre guide de distribution pour les résidents du Québec)) et/ou des modalités de Surveillance d’identité Classique ",
		additionalInformation_OptionalInsurance_PostalDistImpact_Para32		:	"à l’adresse suivante <a href='https://www.ctfs.com/fr/optional-products.html' target='_blank'>ctfs.com/produitsfacultatifs</a>.",
		additionalInformation_OptionalInsurance_PostalDistImpact_Para4		:	"N’hésitez pas à nous téléphoner au 1 800 459-6415 pour obtenir des renseignements.",
				
		additionalInformation_footnoteContentText1				:	"* Taxes applicables en sus. Payable mensuellement. Veuillez consulter le document Renseignements juridiques et votre certificat d’assurance pour prendre connaissance de toutes les exclusions, restrictions, modalités et conditions.",
		additionalInformation_footnoteContentText2				:	"** Si vous êtes âgé de moins de 66 ans, vous adhérerez à Couverture-crédit. À l’âge de 66 ans, l’assurance-vie et l’assurance en cas de mutilation deviennent une assurance en cas de décès ou de mutilation par accident. ",
		additionalInformation_footnoteContentText3				:	"*** Si vous êtes âgé de 66 à 75 ans, vous adhérerez à Couverture-crédit – <i>Âge d’or</i>. Remarque : Les couvertures d’assurance en cas de perte d’emploi involontaire et d’invalidité totale ne font pas partie de Couverture-crédit – <i>Âge d’or</i>. À l’âge de 76 ans, l’assurance-vie et l’assurance en cas de mutilation deviennent une assurance en cas de décès ou de mutilation par accident.",
		additionalInformation_footnoteContentText4				:	"Couverture-crédit est souscrite auprès de American Bankers, Compagnie d’Assurance Vie de la Floride et de American Bankers, Compagnie d’Assurances Générales de la Floride. Couverture-crédit – <i>Âge d’or</i> est souscrite auprès de American Bankers, Compagnie d’Assurance Vie de la Floride. American Bankers, Compagnie d’Assurance Vie de la Floride et American Bankers, Compagnie d’Assurances Générales de la Floride et leurs filiales et sociétés affiliées exercent des activités au Canada sous le nom d’Assurant Solutions<sup>MC</sup>.",
		additionalInformation_footnoteContentText5				:	"<span class=\"postalStrikeContentText\">&#42;&#42;</span> Taxes applicables en sus. Vos frais d’adhésion commenceront après la première transaction effectuée à l’aide de votre carte de crédit émise par la Banque Canadian Tire. Par la suite, les frais d’adhésion seront facturés à l’avance, et ce, tous les mois, à votre compte de carte de crédit émise par la Banque Canadian Tire. Consultez le document de renseignements juridiques pour connaître les modalités, les restrictions, les exclusions et les limitations. Le programme Surveillance d’identité Classique est commandité par la Banque Canadian Tire et fourni par Sigma Loyalty Group Inc.",
		// additionalInformation_footnoteContentText6				:	"Le programme Surveillance d’identité Classique est commandité par la Banque Canadian Tire et fourni par Fidélisation propriétaire Aimia Canada Inc.",
		
/*		additionalInformation_footnoteContentText7				:	"<sup>&#8224;</sup><sup>&#8224;</sup> Ces produits facultatifs sont offerts à tous les nouveaux titulaires de carte MasterCard de Canadian Tire. Les renseignements que vous fournissez sur la présente demande de carte sont utilisés pour déterminer votre admissibilité à l’obtention d’une carte MasterCard de Canadian Tire et non pour votre adhésion aux produits facultatifs, lesquels sont offerts à tous les titulaires de carte Canadian Tire.",
		additionalInformation_footnoteContentText8				:	"<sup>MD</sup>/<sup>MC</sup> Sauf indication contraire, toutes les marques de commerce sont la propriété de La Société Canadian Tire Limitée et sont utilisées sous licence.",		
		additionalInformation_footnoteContentText9				:	"<sup>MD</sup>/<sup>MC</sup> Couverture-crédit est une marque de commerce déposée de la Banque Canadian Tire",
		additionalInformation_footnoteContentText10				:	"Rebound<sup>MD</sup> est une marque de commerce déposée de Fidélisation propriétaire Aimia Canada Inc.",
		additionalInformation_footnoteContentText11				:	"<sup>MD</sup> Assurant Solutions est une marque de commerce de Assurant Inc.",
		additionalInformation_footnoteContentText12				:	"<span class=\"superscripts\"><sup>MD</sup></span>/<span class=\"superscripts\"><sup>MC</sup></span> MasterCard et la marque figurative de MasterCard sont des marques de commerce déposées de MasterCard International Incorporated.",
*/
		// Ending of US3307 changes
		// US3979
		additionalInformation_footnoteContentText6_1			:	"Services Financiers Canadian Tire est une dénomination commerciale de la Banque Canadian Tire.",
		additionalInformation_footnoteContentText7				:	"<sup>&dagger;&dagger;</sup> Ces produits facultatifs sont offerts à tous les nouveaux titulaires de carte Mastercard émise par la Banque Canadian Tire. Les renseignements que vous fournissez sur la présente demande de carte sont utilisés pour déterminer votre admissibilité à l’obtention d’une carte Mastercard émise par la Banque Canadian Tire et non pour votre adhésion aux produits facultatifs.La Banque Canadian Tire a un intérêt financier dans la vente de cette assurance.",
		additionalInformation_footnoteContentText7_AddedLineOMX	:	"<sup>1</sup> Primes octroyées sous forme d’Argent électronique Canadian Tire<sup>MD</sup> &#40;Argent CT<sup>MD</sup>&#41;. Sous réserve de certaines modalités visant l’obtention et l’échange des primes. Rendez-vous à l’adresse triangle.com/act pour en savoir plus. Les titulaires de carte qui règlent leurs achats avec leur carte Mastercard<sup>MD</sup> Triangle<sup>MC</sup>  obtiennent 10x le taux d’Argent Canadian Tire, soit 4 % auquel les autres membres du programme Triangle Rewards ont le droit en effectuant un achat dans les magasins Canadian Tire en argent comptant ou avec une carte de débit ou une carte de crédit qui n’est pas liée à ce programme de fidélisation. Le taux offert est exclusif de toute prime, offre promotionnelle ou transaction d’échange. L’Argent CT est calculé sur le montant de l’achat avant taxes dans les magasins Canadian Tire et PartSource.",
		additionalInformation_footnoteContentText7_AddedLineOMZ	:	"<sup>1</sup> Primes octroyées sous forme d’Argent électronique Canadian Tire<sup>MD</sup> &#40;Argent CT<sup>MD</sup>&#41;. Sous réserve de certaines modalités visant l’obtention et l’échange des primes. Rendez-vous à l’adresse triangle.com/act pour en savoir plus. Les titulaires de carte qui règlent leurs achats avec leur carte World Elite Mastercard<sup>MD</sup> Triangle<sup>MC</sup>  obtiennent 10x le taux d’Argent Canadian Tire, soit 4 % auquel les autres membres du programme Triangle Rewards ont le droit en effectuant un achat dans les magasins Canadian Tire en argent comptant ou avec une carte de débit ou une carte de crédit qui n’est pas liée à ce programme de fidélisation. Le taux offert est exclusif de toute prime, offre promotionnelle ou transaction d’échange. L’Argent CT est calculé sur le montant de l’achat avant taxes dans les magasins Canadian Tire et PartSource.",
		additionalInformation_footnoteContentText8				:	"<span class=\"superscripts\"><sup>MD/MC</sup></span> Sauf indication contraire, toutes les marques de commerce sont la propriété de La Société Canadian Tire Limitée, utilisée sous licence.",		
		additionalInformation_footnoteContentText9				:	"<span class=\"superscripts\"><sup>MD/MC</sup></span> Mastercard et World Elite Mastercard sont des marques de commerce déposées et le logo des deux cercles imbriqués est une marque de commerce de Mastercard International Incorporated.",
		additionalInformation_footnoteContentText10				:	"<span class=\"superscripts\"><sup>MD</sup></span> Assurant est une marque de commerce déposée d’Assurant Inc.",
		additionalInformation_footnoteContentText11				:	"<span class=\"superscripts\"><sup>MD/MC</sup></span> Couverture-crédit est une marque de commerce déposée de la Banque Canadian Tire.",
		additionalInformation_footnoteContentText12				:	"<span class=\"superscripts\"><sup>MD/MC</sup></span> Retour est une marque de commerce déposée de Sigma Loyalty Group Inc.",
																	
		additionalInformation_Final_Details                     :   "Renseignements additionnels",
		additionalInformation_Final_Details_Language            :   "Langue de correspondance",
		additionalInformation_Final_Details_Statement           :   "Préférence en matière de relevé",
		additionalInformation_Final_Details_Subscription        :   "Oui, veuillez m’envoyer des courriels sur les offres de produits et des détails sur les offres exclusives aux titulaires de carte",
		
		additionalInformation_Spouse							:	"Conjoint(e)",
		additionalInformation_Son								:	"Fils",
		additionalInformation_Daughter							:	"Fille",
		additionalInformation_Relative							:	"Parent",
		additionalInformation_Other								:	"Autre",
		
		// Old code
		// additionalInformation_Credit_Protector_Text             :   "J’ai lu et j’accepte les <a href='https://customer.ctfs.com/lang/fr/Products/Insurance/CreditProtector/CreditProtectorTandC/' target='_blank'>modalités</a> de Couverture-crédit / Couverture-crédit – Âge d’or.",
		additionalInformation_Credit_Protector_Text             :   "<span class=\"overviewNSTableRedText\">&#42;</span>Je reconnais avoir lu, compris et accepté le <U><b><a href='https://customer.ctfs.com/lang/fr/Products/Insurance/CreditProtector/CreditProtectorTandC/' target='_blank'>sommaire des protections et les déclarations</a></b></U> de l'assurance Couverture-crédit.",
		additionalInformation_Identity_Watch_Text               :   "<span class=\"overviewNSTableRedText\">&#42;</span>Je reconnais avoir lu, compris et accepté <U><b><a href='https://customer.ctfs.com/lang/fr/Products/TermsandConditions/IDWatch/' target='_blank'>les modalités</a></b></U>  du programme Surveillance d’identité Classique.",
		additionalInformation_ProtectionAdvantage_Text          :   "<span class=\"overviewNSTableRedText\">&#42;</span>Je reconnais avoir lu, compris et accepté <U><b><a href='https://customer.ctfs.com/lang/fr/Products/TermsandConditions/ProtectionAdvantage/' target='_blank'>  les modalités et le sommaire des protections et les déclarations</a></b></U> du programme Avantage Protection de Canadian Tire.",
		
		// US4591 Newline for Quebec
		additionalInformation_Quebec_new_lineProtectionAdvantage :  "Pour les résidents du Québec, je reconnais avoir lu et compris l'Assurance Couverture-crédit <U><a href= 'https://canadiantire.scene7.com/is/content/CanadianTire/ctfs/optional_products_documents/K022_DG_MCC894125F_FINAL.pdf' target='_blank'>Guide de distribution</a></U>",
		
		additionalInformation_IdentityWatch_Terms				: " ",//we need this empty string because french and english templates have different structure
		additionalInformation_ProtectionAdvantage_Terms			: " ",//we need this empty string because french and english templates have different structure
		additionalInformation_EarnReward						: '<div class="additionalInformation_EarnReward_fr" />',
		additionalInformation_Title_TextField					: '<select class="fieldValuesSelectField titleField" id="additionalInformation_Title_TextField" />',
		additionalInformation_DateOfBirth_Month					: '<select class="fieldValuesSelectField dateOfBirthMonthField" id="additionalInformation_DateOfBirth_Month" placeholder="Month" />',
		additionalInformation_DateOfBirth_Day					: '<select class="fieldValuesSelectField dateOfBirthDayField" id="additionalInformation_DateOfBirth_Day" placeholder="Day" />',
		additionalInformation_DateOfBirth_Year					: 'Année',
		additionalInformation_Relationship_TextField			: '<select class="fieldValuesSelectField addressProvinceField" id="additionalInformation_Relationship_TextField"/>',
		additionalInformation_Province_TextField				: '<select class="fieldValuesSelectField addressProvinceField" id="additionalInformation_Province_TextField"/>',
		
		//--------------- END --------------------- OPTIONAL PRODUCTS section -------------- END -----------
		
		//----------------------------------------- Confirmation section ------------------------------
		
		//-------------- US4591 STARTS ----------------------------------------------------------------
		
		confirmation_steps4_OUT_5_Ecomm                            :  "<span class=\"overviewNSTableRedText\">Étape 4 de 5 :</span> Revue et Soumettre",
		confirmation_steps4_OUT_5_Decoupled                        :  "<span class=\"overviewNSTableRedText\">Étape 4 de 4 :</span> Revue et Soumettre",
		
		//-------------- US4591 ENDS   ----------------------------------------------------------------
		
		confirmation_EditModeError							:   "Veuillez sauvegarder vos modifications avant de continuer.",
		
		confirmation_Title									:   "Confirmation",
		confirmation_Edit_Button_Label                      :   "Modifier",
		confirmation_Terms_Conditions                       :   "<b>Modalités et autorisation aux fins de la demande de carte</b>",
		confirmation_Privacy_Charter                        :	"<a href='https://customer.ctfs.com/lang/fr/SecurityCentre/PrivacyAndSecurity/PrivacyCharter/' target='_blank'>Consultez notre politique en matiere de protection des renseignements personnels.</a>",  
		confirmation_Privacy_Charter_Text                   :   "En cochant cette case, j'accepte les modalités décrites dans l'autorisation aux fins de la demande de carte.",
		confirmation_Application_Authorization_Title        :   "Autorisation aux fins de la demande de carte",
		confirmation_Application_Authorization_SubTitle     :   "En cochant la case ci-dessous, j'accepte ce qui suit :",
		
		// Old line
		// confirmation_Application_Authorization_Item1        :   "Veuillez ouvrir un compte à mon nom pour le type de carte de crédit MasterCard<span class=\"superscriptsFootnote\"><sup>MD</sup></span> Options<span class=\"superscriptsFootnote\"><sup>MD</sup></span> de Canadian Tire indiqué ci-dessus (la « carte ») à un taux d’intérêt annuel de 19,99 % pour toutes les transactions (à l’exception des avances de fonds et des frais afférents) et de 21,99 % pour les avances de fonds et les frais afférents.",
		confirmation_Application_Authorization_Item1        :   "Veuillez ouvrir un compte à mon nom pour le type de carte de crédit émise par la Banque Canadian Tire indiqué ci-dessus (la « carte ») à un taux d’intérêt annuel de 19,99 % pour toutes les transactions (à l’exception des transactions au comptant et des frais afférents) et de 22,99 % pour les transactions au comptant et les frais afférents.",		
		confirmation_Application_Authorization_Item5        :   "Je serai lié par les modalités du contrat du titulaire de carte de la Banque Canadian Tire que je recevrai avec la carte, lequel peut être modifié de temps à autre. Je serai la seule personne responsable de tous les débits imputés à ce compte, y compris ceux portés au compte par toute personne pour laquelle je vous ai demandé d’émettre une carte additionnelle. Je serai la seule personne qui recevra un relevé de compte.",
		confirmation_Application_Authorization_Item6        :   "<u>Vous pouvez obtenir des renseignements sur mes antécédents de crédit et d’autres renseignements personnels me concernant auprès d’agences d’évaluation du crédit et communiquer de tels renseignements à ces agences.</u>",
		confirmation_Application_Authorization_Item6a       :  "Je consens à ce que la Banque Canadian Tire procède à une vérification de mes   renseignements personnels, comme mon nom, mon adresse, ma date de naissance, mon numéro de téléphone mobile auprès de mon fournisseur de services mobiles et j’autorise mon fournisseur de services mobiles à fournir ces renseignements (Tenue de compte, type de compte, etc.) à la Banque Canadian Tire. Les renseignements concernant mon compte de téléphonie mobile seront utilisés pour vérifier mon identité et d’effectuer des analyses et des enquêtes contre la fraude.",
		confirmation_Application_Authorization_Item7        :   "Chaque personne pour laquelle je vous ai demandé d’émettre une carte additionnelle m’a autorisé à vous fournir les renseignements ci-dessus la concernant.",
		confirmation_Application_Authorization_Item8        :   "Si je vous fournis mon numéro d’assurance sociale, vous pouvez l’utiliser à des fins d’identification, notamment auprès d’agences d’évaluation du crédit.",
		confirmation_Application_Authorization_Item9		:	"J’accepte que, si vous approuvez ma demande, vous me transmettiez un document d’information initial et un contrat du titulaire de carte par voie électronique à l’adresse électronique fournie dans cette demande.",
		confirmation_Application_Authorization_Item10       :   "J’ai lu et j’ai compris le texte figurant sur la présente demande de carte.",
		confirmation_UnitNumber                             :   "No d'app.",
		confirmation_Suite		                            :   "Numero d'app. / bureau ",
		confirmation_prevAddressTitle                       :   "Adresse précédente",
		confirmation_Information_Accurate_Text              :   "Veuillez vous assurer que les renseignements transmis sont exacts pour nous aider à traiter votre demande aujourd'hui !",
		// US4579 Removal of CT
		confirmation_Update_CT_Profile_Text					:   "Mettre à jour l’adresse du profil mon fournie lors de la demande.",
		confirmation_ReceiveEmail                           :    ', Je veux recevoir les communications par courriel sur les offres, les promotions et les concours ainsi que des renseignements sur les produits et services.',
		confirmation_PrintPage								:	'Imprimer cette page',
		confirmation_print_header							:	'<img src="app/images/static_header_confirmation_fr.png"  class="print_header" id="img2" alt="test" width="954">',
		confirmation_ScreenIndicator						:	"Merci de patienter...",
		confirmation_footnoteContentText1					:	"<sup>1</sup> Primes octroyées sous forme d’« Argent » Canadian Tire avec la Carte<span class=\"superscriptsFootnote\"><sup>MD</sup></span>. Sous réserve des modalités et des restrictions visant l’octroi et l’échange des primes. Détails en magasin ou sur la page Programme de primes en « Argent » Canadian Tire. Les titulaires de la carte MasterCard Options en Nouvelle-Écosse participent à un autre programme de primes; veuillez vous rendre à l’adresse ",
		confirmation_footnoteContentText1Link				:	"<a href='https://www.ctfs.com/Products/CreditCards/OptionsMasterCard/CTMoneyRewards/' target='_blank'>ctfs.com/act.</a>",
		confirmation_footnoteContentText2					:	"<sup>2</sup> À la condition que votre compte soit en règle et que l’achat soit admissible à l’échange de primes.",	
		confirmation_footnoteContentText4					:	"<span class=\"superscriptsFootnote\"><sup>MD</sup></span>/<span class=\"superscriptsFootnote\"><sup>MC</sup></span> Sauf indication contraire, toutes les marques de commerce sont la propriété de La Société Canadian Tire Limitée et sont utilisées sous licence.",
		confirmation_footnoteContentText5					:	"<span class=\"superscriptsFootnote\"><sup>MD</sup></span>/<span class=\"superscriptsFootnote\"><sup>MC</sup></span> MasterCard et la marque figurative de MasterCard sont des marques de commerce déposées et PayPass est une marque de commerce de MasterCard International Incorporated.",	
		//additionalInformation_footnoteContentText6				:	"<span class=\"superscriptsFootnote\"><sup>MD</sup></span>/<span class=\"superscriptsFootnote\"><sup>MC</sup></span> Sauf indication contraire, toutes les marques de commerce sont la propriété de La Société Canadian Tire Limitée et sont utilisées sous licence.",
		//additionalInformation_footnoteContentText7				:	"<span class=\"superscriptsFootnote\"><sup>MD</sup></span>/<span class=\"superscriptsFootnote\"><sup>MC</sup></span> MasterCard et la marque figurative de MasterCard sont des marques de commerce déposées et PayPass est une marque de commerce de MasterCard International Incorporated.<br><span class=\"superscriptsFootnote\"><sup>MD</sup></span> Couverture-crédit et Couverture-crédit – Âge d’or sont la propriété des Services Financiers Canadian Tire Limitée",	

//		additionalInformation_footnoteContentText3				:	"Taxes applicables en sus. Payable mensuellement. Veuillez consulter le document Renseignements juridiques ou votre Certificat d’assurance pour prendre connaissance de toutes les modalités, conditions, limitations et les exclusions relatives à votre solde. Certaines conditions s’appliquent.",
//		additionalInformation_footnoteContentText4				:	"Si vous êtes âgé de moins de 66 ans, vous adhérerez à Couverture-crédit. Si vous êtes âgé de 66 à 75 ans, vous adhérerez à Couverture-crédit – Âge d’or. Couverture-crédit et Couverture-crédit – Âge d’or est souscrite auprès de American Bankers, Compagnie d’Assurance Vie de la Floride, et de American Bankers, Compagnie d’Assurances Générales de la Floride, filiales de Assurant Solutions<span class=\"superscriptsFootnote\"><sup>MD</sup></span>.",
//		additionalInformation_footnoteContentText5				:	"Plus les taxes applicables. Les frais d’adhésion débuteront une fois la première transaction effectuée avec votre carte de crédit de marque Canadian Tire. Par la suite, les frais d’adhésion seront facturés tous les mois à l'avance sur votre carte de crédit de marque Canadian Tire. Voir le document d'information juridique pour toutes les modalités, conditions, restrictions et exclusions. Certaines conditions s’appliquent.",
//		additionalInformation_footnoteContentText6				:	"<sup>&#8224;&#8224;</sup> Ces produits facultatifs sont offerts à tous les nouveaux titulaires de carte MasterCard de Canadian Tire. Les renseignements que vous fournissez sur la présente demande de carte sont utilisés pour déterminer votre admissibilité à l’obtention d’une carte MasterCard de Canadian Tire et non pour votre adhésion aux produits facultatifs, lesquels sont offerts à tous les titulaires de carte Canadian Tire.MD / MC Couverture-crédit et Couverture-crédit – Âge d’or sont des marques de commerce déposées des Services Financiers Canadian Tire Limitée, et sont utilisées sous licence. Le programme Surveillance d’identité classique est commandité par les Services Financiers Canadian Tire Limitée et fourni par Aimia Proprietary Loyalty Canada Inc." +
//																	"Rebound<span class=\"superscriptsFootnote\"><sup>MD</sup></span> est une marque de commerce déposée de Aimia Proprietary Loyalty Canada Inc",
//		additionalInformation_footnoteContentText7				:	"<span class=\"superscriptsFootnote\"><sup>MD</sup></span>/<span class=\"superscriptsFootnote\"><sup>MC</sup></span> Sauf indication contraire, toutes les marques de commerce sont la propriété de La Société Canadian Tire Limitée et sont utilisées sous licence.<br>" +
//				  												    "<span class=\"superscriptsFootnote\"><sup>MD</sup></span>/<span class=\"superscriptsFootnote\"><sup>MC</sup></span> MasterCard et la marque figurative de MasterCard sont des marques de commerce déposées et <i>PayPass</i> est une marque de commerce de MasterCard International Incorporated.",	

		
		//--------------- END --------------------- Confirmation section -------------- END -----------
		
		//----------------------------------------- Identity Verification section ------------------------------
		identityVerification_steps5_OUT_5_Ecomm                            :  "<span class=\"overviewNSTableRedText\">Étape 5 de 5:</span> Vérification d'identité",
		
		identityVerification_NoSelectionError				:   "Vous devez répondre à chaque question de vérification d’identité posée avant de continuer",
		
		identityVerification_Title							:   "Vérification d'identité",
		identityVerification_Congratulations				:   "<strong>Félicitations, votre demande est acceptée!</strong>",
		identityVerification_Customer_Name                  :   "Nom du client : ",
		identityVerification_CardNumberText					:   "Numéro de carte : ",
		identityVerification_CardLimitText					:   "Limite de crédit : ",
		identityVerification_CardAPRText					:   "TIA :",
		
		/* 2016-02-22 chrch: Change confirmation_Button_Label per Legal */
		confirmation_Button_Label                           :   "SOUMETTRE ET VÉRIFIER L’IDENTITÉ",

		// US3627
		confirmation_Ctfs_Button_Label						:	"SOUMETTRE",
		
		identityVerification_FinalText1						:	"Votre demande de carte MasterCard<span class=\"superscripts\"><sup>MD</sup></span> Options<span class=\"superscripts\"><sup>MD</sup></span> de Canadian Tire a été approuvée, et celle-ci sera ajoutée à votre compte Canadian Tire afin que vous puissiez commencer à l'utiliser en ligne dès aujourd'hui à l'adresse canadiantire.ca!",
		//identityVerification_FinalText2						:	"Vous recevrez également votre carte MasterCard Options, que vous pourrez utiliser partout, par la poste dans les sept à dix jours ouvrables.",
		identityVerification_FinalText3						:	"Votre document d’information initial et votre contrat du titulaire de carte vous seront envoyés par courriel à l’adresse : ",
		identityVerification_FinalText4						:	"En cas d’erreur, veuillez composer le 1 800 459-6415. Vous recevrez aussi une copie de ces renseignements dans la trousse de bienvenue contenant votre carte.",
		identityVerification_FinalText5						:	"*Notez les quatre derniers chiffres pour pouvoir vous y référer lors de l’utilisation de Mon compte CT et lors du processus de paiement.",
		
		identityVerification_PendingTitle					:   "<strong>Merci - Nous avons reçu votre demande</strong>",

		identityVerification_PendingText1					:	"Votre demande est maintenant à l'étude par notre équipe. Le processus d’évaluation dure généralement quelques jours, mais prend parfois jusqu’à quelques semaines, selon les renseignements fournis.",

                                                              
		identityVerification_PendingText2					:	"Le processus d’évaluation dure généralement quelques jours, mais prend parfois jusqu’à deux semaines, selon les renseignements fournis.",
		identityVerification_PendingText3					:	"Quand vais-je recevoir ma carte?",
		identityVerification_PendingText4					:	"Si votre demande est approuvée, vous en serez avisé par courrier dans les sept à dix jours ouvrables suivants.",
		identityVerification_TUPendingText1					:	"Malheureusement, nos services de crédit immédiat ne sont pas disponibles pour l’instant; toutefois, votre demande sera traitée dès que possible.",
		identityVerification_TUPendingText2					:	"REMARQUE : N’essayez <u>PAS</u> de soumettre votre demande de nouveau.",
		
		identityVerification_ContinueShopping				:	"Continuer à magasiner",
		identityVerification_ProceedToCheckout				:	"Passer à la caisse",
		identityVerification_Submit							:	"SOUMETTRE",
		
		
		identityVerification_Exam1Question					:	"Sélectionnez l'un de vos employeurs précédents parmi la liste suivante :",
		identityVerification_Exam1Answer1					:	"Versina Trust",
		identityVerification_Exam1Answer2					:	"Banque HSBC Canada",
		identityVerification_Exam1Answer3					:	"Banque de Nouvelle-Écosse",
		identityVerification_Exam1Answer4					:	"TD Canada Trust",
		
		identityVerification_Exam2Question					:	"Avec laquelle des institutions suivantes avez-vous un prêt auto :",
		identityVerification_Exam2Answer1					:	"Honda Finance",
		identityVerification_Exam2Answer2					:	"Chevrolet Financing",
		identityVerification_Exam2Answer3					:	"Prêt-auto TD",
		
		identityVerification_ScreenIndicator				:	"Merci de patienter une petite minute. Votre demande est en cours de traitement.",
		identityVerification_FireFoxProblem					:	"Votre demande est maintenant complète. Vous pouvez fermer cette fenêtre et continuer à magasiner sur canadiantire.ca",
		identityVerification_ProtectionNote 				:	"Pour votre protection et sécurité, on vous demandera 3 questions auxquelles seulement vous connaîtrez les reponses.",
		
		identityVerification_EcommProfile_Update_Request_Failed	:	"Malheureusement, nous ne pouvons pas accéder à votre compte Mon CT en ce moment. Pour ajouter manuellement votre nouvelle carte à votre compte Mon CT, veuillez appeler le 1 800 387-8803.",
		
		identityVerification_ApplicationDataValidatonFailed	:	"Malheureusement, la demande ne pouvait pas être soumise en raison d'un problème interne. S'il vous plaît essayer à nouveau.",
			
		
		// -- US4675 starts -- //
		approve_you_have_been_approve_label                 :   "VOTRE DEMANDE DE CARTE DE CRÉDIT A ÉTÉ APPROUVÉE!",
		approved_title_one_OMX                              :   "Votre demande de carte Mastercard<sup>MD</sup> Triangle<sup>MC</sup> a été <span class=\"overviewNSTableRedText\">approuvée</span>.",
		approved_title_one_OMZ                              :   "Votre demande de carte World Elite Mastercard<sup>MD</sup> Triangle<sup>MC</sup> a été <span class=\"overviewNSTableRedText\">approuvée</span>.",
		approved_title_two                                  :   "Au cours des 7 aux 10 prochains jours ouvrables, vous recevrez :",
		approved_title_one_listItem1                        :   "Vous recevrez votre Déclaration initiale et votre Contrat du titulaire de carte par courriel.",
		approved_title_one_listItem2                        :   "Votre carte est dors et déjà ajoutée à votre profil d'achat en ligne, de sorte que vous pouvez commencer à l'utiliser en ligne dès aujourd'hui.",
		approved_title_one_listItem3                        :   "Veuillez noter les quatre derniers chiffres de votre numéro de carte pour le processus de paiement.",
		approved_title_two_listItem_OMX                     :   "Votre Mastercard Triangle accompagnée de votre trousse de bienvenue.",
		approved_title_two_listItem_OMZ                     :   "Votre World Elite Mastercard Triangle accompagnée de votre trousse de bienvenue.",
		approved_title_two_listItem2                        :   "Votre carte Récompense Triangle<sup>MC</sup> et votre trousse de bienvenue.",
		approved_title_two_listItem3                        :   "un courriel de confirmation.",
		approved_page_continueShoppingButton                :   "CONTINUER À MAGASINER",
		pending_page_title                                  :   "MERCI. NOUS AVONS BIEN REÇU VOTRE DEMANDE DE CARTE.",
		pending_page_statusName                             :   "État de la demande : ",
		pending_page_status                                 :   "EN ATTENTE",
		pending_page_card_type                              :   "Carte :",
		pending_page_description                            :   "Unfortunately we are unable to instantly process your application today, your application is now being reviewed by our application team. Depending on the level of information provided, processing can take from a few days to a couple of weeks.",
		pending_page_subtitle_desc                          :   "What happens next?",
		pending_page_sub_subtitle                           :   "If approved, your credit card welcome package will arrive in the mail within 7-10 business days, containing:",
		pending_page_li_one                                 :   "Your Canadian Tire Options® Mastercard® & Welcome package.",
		pending_page_li_two                                 :   "Your My Canadian Tire 'Money' card & Welcome package",
		pending_page_note                                   :   "<b>IMPORTANT: NE PRÉSENTEZ PAS UNE NOUVELLE DEMANDE.</b>",
		pending_page_close_button_text                      :   "FERMER",
		declined_message_one                                :   "Malheureusement, nous ne sommes pas en mesure de traiter instantanément votre demande aujourd'hui. Notre équipe passe actuellement votre demande de carte en revue. Le processus d’évaluation dure généralement quelques jours, mais prend parfois jusqu’à deux semaines, selon les renseignements fournis.",
		declined_message_two                                :   "<strong>Que se passe-t-il ensuite?</strong>",
		declined_message_three                              :   "Questions? Please call 1-800-459-6415.",
		pendinDeclinedPageOMX_OMZ                           :   "<span class=\"overviewNSTableRedText\"> &#91; Mastercard<sup>MD</sup> Triangle<sup>MC</sup> OR  World Elite Mastercard<sup>MD</sup> Triangle<sup>MC</sup> &#93;</span>",
		
		pendingDeclined_page_li_one                         :   "Vous recevrez également une carte Récompenses Triangle<sup>MC</sup> et une trousse de bienvenue au programme Récompenses Triangle séparément dans un délai de 7 à 10 jours ouvrables.",
		pendingDeclined_page_li_two_OMX                     :   "Si votre demande est approuvée, votre trousse de bienvenue contenant votre carte Mastercard Triangle vous parviendra par la poste dans un délai de 7 à 10 jours ouvrables.",
		pendingDeclined_page_li_two_OMZ                     :   "Si votre demande est approuvée, votre trousse de bienvenue contenant votre carte World Elite Mastercard Triangle vous parviendra par la poste dans un délai de 7 à 10 jours ouvrables.",
		
		// -- US4675 ends --//
		
		//--------------- END --------------------- Identity Verification section -------------- END -----------
			
		//-----start----US3084 iLoyalty - BRB front facing chagnes -  Loyalty Notification --------------//	
		
		overview_NS_Attention                 		        :   "À l’attention des résidents de la Nouvelle-Écosse : <br> La présente « Déclaration sur le coût du crédit relativement aux demandes de carte de crédit » ne s’applique pas aux résidents de la Nouvelle-Écosse qui demandent la carte MasterCard Options de Canadian Tire. La prochaine étape du processus de demande consiste en la déclaration sur le coût de crédit approprié.",	
		overview_NS_AttentionNote                           :   "",
		overview_NS_LeftRed                                 :   "Le programme de primes auquel participe la carte MasterCard<span class=\"superscripts\"><sup>MD</sup></span> Options<span class=\"superscripts\"><sup>MD</sup></span> de Canadian Tire a changé.",
		overview_NS_LeftTitile                              :   "À compter du 10 octobre 2014, le programme Avantage « Argent » Canadian Tire<span class=\"superscripts\"><sup>MD</sup></span> deviendra le programme Mon « Argent » Canadian Tire<span class=\"superscripts\"><sup>MC</sup></span>",
		overview_NS_LeftBullet1                             :   "Obtenez 10X l’« Argent » Canadian Tire<span class=\"superscripts\"><sup>MC1</sup></span> tous les jours aux magasins Canadian Tire, y compris aux centres-autos, aux magasins PartSource<span class=\"superscripts\"><sup>MD</sup></span>, Mark’s / L’Équipeur<span class=\"superscripts\"><sup>MD</sup></span> et Sport Chek<span class=\"superscripts\"><sup>MD2</sup></span>.",
		overview_NS_LeftBullet2                             :   "Obtenez 2X l’« Argent » Canadian Tire partout ailleurs où vous magasinez<span class=\"superscripts\"><sup>2</sup></span>.",
		overview_NS_LeftBullet3                             :   "Obtenez de l’« Argent » Canadian Tire dans les postes d’essence Canadian Tire participants<span class=\"superscripts\"><sup>4</sup></span>.",
		overview_NS_LeftNote                                :   "Remarque : Le taux auquel vous obtiendrez de l’« Argent » Canadian Tire est différent de celui auquel vous accumulez des points Avantage « Argent »<span class=\"superscripts\"><sup>3</sup></span>.",
		overview_NS_LeftText                                :   "C’est facile d’échanger votre « Argent » Canadian Tire, directement à la caisse des magasins Canadian Tire ou en ligne pour les cartes-cadeaux, à l’adresse canadiantire.ca.",
		overview_NS_DisclosureRed                                 :   "Déclaration sur le coût du crédit relativement aux demandes de carte de crédit",
		overview_NS_DisclosureLeft1                                :   "Taux d’intérêt annuel",
		
		// Old code
		// Overview_NS_DisclosureRight1                                :   "<p>Les taux d’intérêt ci-dessous seront en vigueur à compter de la date d’ouverture de votre compte : <br>Tous les débits portés à votre compte (à l’exception des avances de fonds et des frais afférents) : <strong>19,99%</strong></p> <p>Avances de fonds et frais afférents : <strong>21,99%</strong></p> <p>Si votre demande de carte à ce taux n’est pas approuvée, il se peut que la Banque Canadian Tire accepte d’émettre une carte à votre nom portant un taux d’intérêt annuel de <strong>25,99%</strong> pour toutes les transactions (à l’exception des avances de fonds et des frais afférents) et de <strong>27,99%</strong>pour les avances de fonds et les frais afférents.</p>",
		// UAT 42 - July 22, CP Revitalization 
		Overview_NS_DisclosureRight1                               :   "<p>Les taux d’intérêt ci-dessous seront en vigueur à compter de la date d’ouverture de votre compte : <br>Tous les débits portés à votre compte (à l’exception des transactions au comptant et des frais afférents) : <strong>19,99%</strong></p> <p>Transactions au comptant (avances de fonds, transferts de solde, chèques de commodité, transferts de fonds, achats de chèques de voyage et transactions liées aux jeux de hasard) et frais afférents : <strong>22,99%</strong></p><p>Pour la carte Mastercard Triangle uniquement : Si votre demande de carte à ce taux n’est pas approuvée, il se peut que la Banque Canadian Tire accepte d’émettre une carte à votre nom portant un taux d’intérêt annuel de 25,99% pour toutes les transactions (à l’exception des transactions au comptant et des frais afférents) et de 27,99% pour les transactions au comptant et les frais afférents.</p>",
		Overview_NS_DisclosureRight1_DEC_OMX                       :  "<p>Les taux d’intérêt ci-dessous seront en vigueur à compter de la date d’ouverture de votre compte : <br>Tous les débits portés à votre compte (à l’exception des transactions au comptant et des frais afférents) : <strong>19,99%</strong></p> <p>Transactions au comptant (avances de fonds, transferts de solde, chèques de commodité, transferts de fonds, achats de chèques de voyage et transactions liées aux jeux de hasard) et frais afférents : <strong>22,99%</strong></p><p>Pour la carte Mastercard Triangle uniquement : Si votre demande de carte à ce taux n’est pas approuvée, il se peut que la Banque Canadian Tire accepte d’émettre une carte à votre nom portant un taux d’intérêt annuel de 25,99% pour toutes les transactions (à l’exception des transactions au comptant et des frais afférents) et de 27,99% pour les transactions au comptant et les frais afférents.</p>",
		Overview_NS_DisclosureRight1_DEC_OMZ                       :  "<p>Les taux d’intérêt ci-dessous seront en vigueur à compter de la date d’ouverture de votre compte : <br>Tous les débits portés à votre compte (à l’exception des transactions au comptant et des frais afférents) : <strong>19,99%</strong></p> <p>Transactions au comptant (avances de fonds, transferts de solde, chèques de commodité, transferts de fonds, achats de chèques de voyage et transactions liées aux jeux de hasard) et frais afférents : <strong>22,99%</strong></p>",
		
		overview_NS_DisclosureLeft2                                :   "Délai de grâce sans intérêt",
		Overview_NS_DisclosureRight2                               :   "<p>Au moins <strong>26</strong> jours ou, si vous résidez ailleurs qu’au Québec, au moins <strong>21</strong> jours.</p><p> Vous bénéficiez d’un délai de grâce d’au moins <strong>26</strong> jours sur les nouveaux achats (d’au moins <strong>21</strong> jours si vous résidez ailleurs qu’au Québec) si nous recevons le paiement intégral du solde dû figurant sur votre relevé courant au plus tard à la date d’échéance de ce paiement.</p><p> Il n’y a aucun délai de grâce sur les transactions au comptant, comme les chèques de commodité, les transferts de solde et les avances de fonds, ni sur les frais liés à ces transactions.</p>",	
		overview_NS_DisclosureLeft3                                :   "Paiement minimum",
		Overview_NS_DisclosureRight3                               :   "<p>La somme : </p><p>(A) des intérêts et des frais figurant sur votre relevé; plus </p><p>(B) tout montant en souffrance ou, s’il est plus élevé, tout montant qui excède votre limite de crédit; plus </p><p>(C) le montant de tous les versements échelonnés en vertu de programmes de paiements égaux alors dus; plus </p><p>(D) <strong>10 $</strong> </p><p> Un solde inférieur à <strong>10 $</strong> doit être réglé intégralement.</p> ",	
		overview_NS_DisclosureLeft4                                :   "Frais pour conversion de devises",
		Overview_NS_DisclosureRight4                               :   "Toutes les transactions effectuées dans une monnaie étrangère seront converties en dollars canadiens au taux de conversion MasterCard courant majoré de <strong>2,5%</strong> (dans le cas de débits portés à votre compte) ou réduit de <strong>2,5%</strong> (dans le cas de crédits inscrits à votre compte) à la date à laquelle la transaction est inscrite à votre compte.",
		overview_NS_DisclosureLeft5                                :   "Frais annuels",
		Overview_NS_DisclosureRight5                                :   "Aucuns",
		overview_NS_DisclosureLeft6                               :   "Frais divers",
		
		// old code
		// Overview_NS_DisclosureRight6                            :   "<p><strong>Avances de fonds : 4 $ – </strong> Facturés à la date à laquelle la transaction est inscrite à votre compte.</p> <p><strong> Frais de dépassement de limite de crédit : 29 $ –</strong> Sauf si vous habitez au Québec, nous vous facturerons des frais de dépassement de limite de crédit de <strong>29 $</strong> si à la date d’un relevé votre solde excède votre limite de crédit et qu’il atteint ou excède <strong>2000 $.</strong>Cependant, pour déterminer si vous devez payer des frais de dépassement de limite de crédit, nous n’inclurons pas dans ce solde tout montant imputé sur cette facture pour des frais d’intérêts, ou pour une assurance crédit offerte par nous ou une de nos filiales. </p> <p><strong> Frais pour chèque sans provision ou refusé : 25 $ – </strong> Imputés si un paiement que vous effectuez est refusé.</p><p><strong> Copie de remplacement : 2 $ –</strong> Imputés lorsque vous demandez une copie d’un relevé ou d’une facture de vente.<p></p><strong>Administration du solde créditeur :</strong> Le moindre de <strong>10 $</strong>ou du solde du compte. – Imputés le dernier jour d’une période de facturation lorsque le compte comporte un solde créditeur et qu’il a été inactif au cours des <strong>12</strong> périodes de facturation.</p>",
		Overview_NS_DisclosureRight6                            :   "<p><strong>Avances de fonds : 4 $ – </strong> Facturés à la date à laquelle la transaction est inscrite à votre compte.</p>  <p><strong> Frais pour chèque sans provision ou refusé : 25 $ – </strong> Imputés si un paiement que vous effectuez est refusé.</p><p><strong> Copie de remplacement : 2 $ –</strong> Imputés lorsque vous demandez une copie d’un relevé ou d’une facture de vente.<p></p><strong>Administration du solde créditeur :</strong> Le moindre de <strong>10 $</strong> ou du solde du compte. – Imputés le dernier jour d’une période de facturation lorsque le compte comporte un solde créditeur et qu’il a été inactif au cours des <strong>12</strong> périodes de facturation.</p>",		
		// US3382
		Overview_NS_EffectiveDate								: "<b>Renseignements en vigueur le 23 juillet 2015.</b>",		
		
		// 2016-03-17 chrch: Adding hyperlinks as per business request US3964
		Overview_NS_LegalText1 									: "<span class=\"superscripts\"><sup>1</sup></span> Primes octroyées sous forme d’« Argent » Canadian Tire. Sous réserve de certaines modalités, conditions et restrictions. Consultez les modalités du programme à l’adresse <a href='http://www.canadiantire.ca/fr/my-canadian-tire-money.html'>www.canadiantire.ca</a> ou <a href='http://www.ctfs.com/act'>www.ctfs.com/act</a> pour en savoir plus.",
		Overview_NS_LegalText2 									: "<span class=\"superscripts\"><sup>2</sup></span> Les titulaires de carte MasterCard Options de Canadian Tire obtiennent de l’« Argent » Canadian Tire à un taux qui est 10X (ou 2X selon le cas) le taux auquel les autres membres du programme Mon « Argent » Canadian Tire obtiennent de l’« Argent » Canadian Tire lors d’achats effectués par ces membres dans les magasins Canadian Tire (si ces membres payent en argent comptant, avec une carte de débit ou une carte de crédit qui n’est pas liée à ce programme de fidélisation). Le taux offert est exclusif de toute prime, offre promotionnelle ou transaction d’échange.",
		Overview_NS_LegalText3 									: "<span class=\"superscripts\"><sup>3</sup></span> L’« Argent » Canadian Tire obtenu dans les magasins Canadian Tire ou en ligne à canadiantire.ca est calculé sur le montant avant taxes des achats admissibles et est arrondi au cent près. Pour connaître les taux actuels, composez le 1 800 226-8473.",
		Overview_NS_LegalText4 									: "<span class=\"superscripts\"><sup>4</sup></span> Un montant d’achat d’essence minimum peut être requis. Le taux peut varier d’un poste d’essence à l’autre. Rendez-vous aux postes d’essence locaux pour en savoir plus.",
		Overview_NS_LegalText5 									: "<span class=\"superscripts\"><sup>MD</sup></span>/<span class=\"superscripts\"><sup>MC</sup></span> Canadian Tire, Options Canadian Tire, PartSource et le triangle de Canadian Tire sont des marques de commerce déposées et Mon « Argent » Canadian Tire et « Argent » Canadian Tire sont des marques de commerce de La Société Canadian Tire Limitée.",
		Overview_NS_LegalText6 									: "<span class=\"superscripts\"><sup>MD</sup></span>/<span class=\"superscripts\"><sup>MC</sup></span> MasterCard et la marque figurative de MasterCard sont des marques de commerce déposées et <i>PayPass</i> est une marque de commerce, de MasterCard International Incorporated. ",
		
		personalInfo_Loyalty_HeaderRed							: "Une façon plus rapide d’obtenir de l’« Argent » Canadian Tire",
		// Old code
		//personalInfo_Loyalty_Bullet1							: "Obtenez 10X l’« Argent » Canadian Tire tous les jours aux magasins Canadian Tire (y compris aux centres-autos) et aux magasins PartSource<span class=\"superscripts\"><sup>MD</sup></span>, Mark’s / L’Équipeur<span class=\"superscripts\"><sup>MD</sup></span> et Sport Chek<span class=\"superscripts\"><sup>MD2</sup></span>",
		// US3627
		personalInfo_Loyalty_Bullet1							: "<b>Obtenez 4 &#37;</b>  en Argent Canadian Tire<sup>MD</sup> sur le montant de vos achats quotidiens chez Canadian Tire, Sport Chek<sup>MD</sup>, Mark’s<sup>MD</sup>/ L'Équipeur<sup>MD</sup> et PartSource<sup>MD</sup> .",
		personalInfo_Loyalty_Bullet2							: "<b>Obtenez </b> de l’Argent Canadian Tire dans les postes d’essence Canadian Tire participants<sup>2</sup>.",	
		personalInfo_Loyalty_Bullet3							: "<b>Obtenez</b> de l’Argent Canadian Tire partout ailleurs où vous magasinez<sup>1</sup>.",
		personalInfo_Loyalty_Bullet4							: "<b>Échangez</b> votre Argent Canadian Tire chez Canadian Tire et dans certains magasins partenaires Mark's et Sport Chek<sup>1</sup>.",
		personalInfo_Loyalty_Bullet5							: "<b>Bénéficiez du programme de financement<sup>&#42;</sup></b>  en magasin et en ligne chez Canadian Tire, Sport Check et dans les magasins Mark’s et l’Équipeur participants.",
		personalInfo_Loyalty_Bullet6							: "<b>Obtenez 3 &#37;</b> en Argent Canadian Tire sur les premiers 12 000 &#36; d’achats admissibles en épicerie.<sup>3</sup>",
		personalInfo_Loyalty_Bullet7							: "Assistance routière <sup>&#94;</sup>",
		personalInfo_Loyalty_Bullet8							: "Garantie prolongée<sup>&dagger;</sup>",
		personalInfo_Loyalty_Bullet9							: "Assurance achats<sup>&dagger;</sup>",
		personalInfo_Loyalty_Bullet10							: "Assurance collision/dommages pour les véhicules de location<sup>&dagger;</sup>",
		personalInfo_Loyalty_Bullet11							: "Service de conciergerie disponible en tout temps&#46;",
		personalInfo_Loyalty_Bullet12							: "Un service client amélioré (mise en file d’attente prioritaire)",
		personalInfo_Loyalty_Bullet13							: "Frais annuels <b>- Aucuns</b>",
		personalInfo_Loyalty_Bullet14							: "Taux d'intérêt <b>- 19.99&#37;<sup>3</sup></b>",
		personalInfo_Loyalty_Bullet15							: "Avances de fonds et frais afférents <b>- 22.99&#37;<sup>3</sup></b>",
		// US3979
		personalInfo_Loyalty_PersonalInf_Bullet1				: "Obtenez 10X l’« Argent »<span class=\"superscripts\"><sup>MD</sup></span> Canadian Tire tous les jours aux magasins Canadian Tire (y compris aux centres-autos) et aux magasins PartSource<span class=\"superscripts\"><sup>MD</sup></span>, Mark’s / L’Équipeur<span class=\"superscripts\"><sup>MD</sup></span> et Sport Chek<span class=\"superscripts\"><sup>MD1</sup></span>",		
		personalInfo_CTM_label   								:"Numéro de compte Triangle Rewards<span class=\"superscripts\"><sup>MC</sup></span>",
		personalInfo_CTM_Text_OMX   							:"Veuillez entrer votre numéro de compte Triangle Rewards si vous êtes déjà membre du programme. Si votre demande de carte de crédit est approuvée, votre compte Triangle Rewards sera associé à votre nouvelle carte Mastercard Triangle. Un numéro de compte Triangle Rewards vous sera attribué si vous laissez ce champ vide.",
		personalInfo_CTM_Text_OMZ   							:"Veuillez entrer votre numéro de compte Triangle Rewards si vous êtes déjà membre du programme. Si votre demande de carte de crédit est approuvée, votre compte Triangle Rewards sera associé à votre nouvelle carte World Elite Mastercard Triangle. Un numéro de compte Triangle Rewards vous sera attribué si vous laissez ce champ vide.",
		personalInfo_Email_Text   								:"J’aimerais recevoir des offres, promotions, concours, cadeaux, événements, coupons et autres renseignements ayant trait aux produits et services qui pourraient m’intéresser, par courriel, messagerie texte (sous réserve des frais standard de données et de messagerie texte) et autre messagerie électronique de La Société Canadian Tire Limitée (la « Société Canadian Tire »), des Services Canadian Tire Limitée (les « SCT »), de la Banque Canadian Tire (la « BCT »), y compris de leurs divisions commerciales respectives exploitées par les marques Canadian Tire, Récompenses TriangleMC, de l’Académie des conducteurs de Canadian Tire, des Services résidentiels de Canadian Tire et de l’Assistance routière Canadian Tire, ainsi que de leurs partenaires de marketing et sociétés affiliés. Vous pouvez communiquer avec la Société Canadian Tire, les SCT ou la BCT, à la C.P. 2000, Welland (Ontario) L3B 5S3 ou à l’adresse <U><a hrer=\" \">serviceclientele@canadiantire.ca.</a></U> Vous pouvez retirer votre consentement en tout temps.",
		
		// 2016-03-17 chrch: Adding hyperlinks as per business request US3964
/*		personalInfo_LegalText1 								: "<span class=\"superscripts\"><sup>1</sup></span> Primes octroyées sous forme d’« Argent » Canadian Tire. Sous réserve de certaines modalités, conditions et restrictions. Consultez les modalités du programme à l’adresse <a href='http://www.canadiantire.ca/fr/my-canadian-tire-money.html' target='_blank'>www.canadiantire.ca</a> ou <a href='http://www.ctfs.com/act' target='_blank'>www.ctfs.com/act</a> pour en savoir plus.",
		personalInfo_LegalText2 								: "<span class=\"superscripts\"><sup>2</sup></span> Les titulaires de carte MasterCard Options de Canadian Tire obtiennent de l’« Argent » Canadian Tire à un taux qui est 10X (ou 2X selon le cas) le taux auquel les autres membres du programme Mon « Argent » Canadian Tire obtiennent de l’« Argent » Canadian Tire lors d’achats effectués par ces membres dans les magasins Canadian Tire (si ces membres payent en argent comptant, avec une carte de débit ou une carte de crédit qui n’est pas liée à ce programme de fidélisation). Le taux offert est exclusif de toute prime, offre promotionnelle ou transaction d’échange.",
		personalInfo_LegalText3 								: "<span class=\"superscripts\"><sup>3</sup></span> Un montant d’achat d’essence minimum peut être requis. Le taux peut varier d’un poste d’essence à l’autre. Rendez-vous aux postes d’essence locaux pour en savoir plus.",
		personalInfo_LegalText4 								: "<span class=\"superscripts\"><sup>MD</sup></span>/<span class=\"superscripts\"><sup>MC</sup></span> Canadian Tire, Options Canadian Tire, PartSource et le triangle de Canadian Tire sont des marques de commerce déposées et Mon « Argent » Canadian Tire et « Argent » Canadian Tire sont des marques de commerce de La Société Canadian Tire Limitée.",			
		personalInfo_LegalText5									: "<span class=\"superscripts\"><sup>MD</sup></span>/<span class=\"superscripts\"><sup>MC</sup></span> MasterCard et la marque figurative de MasterCard sont des marques de commerce déposées de MasterCard International Incorporated.",
*/
		// US3979
		personalInfo_LegalText1 								: "Services Financiers Canadian Tire est une dénomination commerciale de la Banque Canadian Tire.<br><br>"+
																  "<sup>&dagger;</sup> Les titulaires de carte recevront un bon par courriel, échangeable dans les magasins Canadian Tire seulement. Le montant de la prime en « Argent » Canadian Tire sera ajouté au solde de votre compte Mon « Argent » Canadian Tire au moment de l’achat. L’« Argent » Canadian Tire peut ensuite être échangé sur un achat ultérieur, à la condition que votre compte soit en règle et que l’achat soit admissible à l’échange de primes.",
		personalInfo_LegalText2 								: "<sup>1</sup> Primes octroyées sous forme d’« Argent » Canadian Tire. Sous réserve de certaines modalités visant l’obtention et l’échange des primes. Rendez-vous à l’adresse triangle.com/act pour en savoir plus. Les titulaires de carte MasterCard Options de Canadian Tire qui règlent leurs achats avec cette dernière obtiennent de l’« Argent » Canadian Tire à un taux qui est 10X (ou 2X, selon le cas) le taux auquel les autres membres du programme Mon « Argent » Canadian Tire obtiennent de l’« Argent » Canadian Tire lors d’achats effectués par ces membres dans les magasins Canadian Tire (si ces membres payent en argent comptant ou avec une carte de débit ou de crédit qui n’est pas liée à ce programme de fidélisation). Le taux offert est exclusif de toute prime, offre promotionnelle ou transaction d’échange.",
		personalInfo_LegalText2_OMX                             :  "<sup>1</sup> Primes octroyées sous forme d’Argent électronique Canadian Tire<sup>MD</sup> (Argent CT<sup>MD</sup>). Sous réserve de certaines modalités visant l’obtention et l’échange des primes. Rendez-vous à l’adresse triangle.com/act pour en savoir plus. Les titulaires de carte qui règlent leurs achats avec leur carte Mastercard<sup>MD</sup> Triangle<sup>MC</sup> obtiennent 10x le taux d’Argent Canadian Tire, soit 4 % auquel les autres membres du programme Triangle Rewards ont le droit en effectuant un achat dans les magasins Canadian Tire en argent comptant ou avec une carte de débit ou une carte de crédit qui n’est pas liée à ce programme de fidélisation. Le taux offert est exclusif de toute prime, offre promotionnelle ou transaction d’échange. L’Argent CT est calculé sur le montant de l’achat avant taxes dans les magasins Canadian Tire et PartSource.",
		personalInfo_LegalText2_OMZ                             :  "<sup>1</sup> Primes octroyées sous forme d’Argent électronique Canadian Tire<sup>MD</sup> (Argent CT<sup>MD</sup>). Sous réserve de certaines modalités visant l’obtention et l’échange des primes. Rendez-vous à l’adresse triangle.com/act pour en savoir plus. Les titulaires de carte qui règlent leurs achats avec leur carte World Elite Mastercard<sup>MD</sup> Triangle<sup>MC</sup> obtiennent 10x le taux d’Argent Canadian Tire, soit 4 % auquel les autres membres du programme Triangle Rewards ont le droit en effectuant un achat dans les magasins Canadian Tire en argent comptant ou avec une carte de débit ou une carte de crédit qui n’est pas liée à ce programme de fidélisation. Le taux offert est exclusif de toute prime, offre promotionnelle ou transaction d’échange. L’Argent CT est calculé sur le montant de l’achat avant taxes dans les magasins Canadian Tire et PartSource.",
		personalInfo_LegalText3 								: "<sup>2</sup> Un achat minimum d’essence peut être requis. Le taux peut varier selon la région. Voir les postes d’essence régionaux pour plus de détails.",
		personalInfo_LegalText4 								: "<span class=\"superscripts\"><sup>MD/MC</sup></span> Sauf indication contraire, toutes les marques de commerce sont la propriété de La Société Canadian Tire Limitée, utilisée sous licence.",			
		personalInfo_LegalText5									: "<span class=\"superscripts\"><sup>MD/MC</sup></span> Mastercard et World Elite Mastercard sont des marques de commerce déposées et le logo des deux cercles imbriqués est une marque de commerce de Mastercard International Incorporated.",
		
 		//additionalInformation_OptionalProducts					:	"Adhésion à des produits facultatifs<span class=\"superscripts\"><sup>&#8224;</sup></span>",
		//additionalInformation_OptionalInsurance_CreditProtector :	"– Je veux adhérer à Couverture-crédit<span class=\"superscripts\"><sup>MD**</sup></span> / Couverture-crédit – Âge d’or<span class=\"superscripts\"><sup>MD**</sup></span>.",
			
		//additionalInformation_OptionalInsurance_Details3		:   "<i>(not available in Saskatchewan)</i> <br>Receive comprehensive coverage with the combination of Credit Protector<sup>&reg;</sup>/Credit Protector-Senior<sup>&reg;</sup>** and Identity Watch Classic<sup>&trade;</sup>."
		//															+ "<ul><li>$1.10 per $100* of your monthly statement balance in any month with a statement balance of $10 or more for Credit Protector/Credit Protector Senior** and $4.99*** payable in advance monthly after the first transaction is made on your Canadian Tire branded credit card for Identity Watch Classic.</li></ul>"
		//															+ "<br>Par exemple, si votre solde est de 200 $ au moment de l’impression de votre relevé de compte, vous ne payerez que 2,20 $, plus les taxes applicables pour la Couverture-crédit / Couverture-crédit – Âge d’or.",
			
		Overview_NS_LegalText4 									:  "<span class=\"superscripts\"><sup>4</sup></span> Un montant d’achat d’essence minimum peut être requis. Le taux peut varier d’un poste d’essence à l’autre. Rendez-vous aux postes d’essence locaux pour en savoir plus.",
		Overview_NS_LegalText5 									:  "<span class=\"superscripts\"><sup>MD</sup></span>/<span class=\"superscripts\"><sup>MC</sup></span> Canadian Tire, Options Canadian Tire, PartSource et le triangle de Canadian Tire sont des marques de commerce déposées et Mon « Argent » Canadian Tire et « Argent » Canadian Tire sont des marques de commerce de La Société Canadian Tire Limitée.",
		Overview_NS_LegalText6 									:  "<span class=\"superscripts\"><sup>MD</sup></span>/<span class=\"superscripts\"><sup>MC</sup></span> MasterCard et la marque figurative de MasterCard sont des marques de commerce déposées et <i>PayPass</i> est une marque de commerce, de MasterCard International Incorporated. ",
																	
		//additionalInformation_footnoteContentText3				:	"Taxes applicables en sus. Payable mensuellement. Veuillez consulter le document Renseignements juridiques ou votre Certificat d’assurance pour prendre connaissance de toutes les modalités, conditions, limitations et les exclusions relatives à votre solde. Certaines conditions s’appliquent.",
		//additionalInformation_footnoteContentText4				:	"Si vous êtes âgé de moins de 66 ans, vous adhérerez à Couverture-crédit. Si vous êtes âgé de 66 à 75 ans, vous adhérerez à Couverture-crédit – Âge d’or. Couverture-crédit est souscrite auprès de American Bankers, Compagnie d’Assurance Vie de la Floride et de American Bankers, Compagnie d’Assurances Générales de la Floride. Couverture-crédit – Âge d’or est souscrite auprès de American Bankers, Compagnie d’Assurance Vie de la Floride. American Bankers, Compagnie d’Assurance Vie de la Floride et American Bankers, Compagnie d’Assurances Générales de la Floride et leurs filiales et sociétés affiliées exercent des activités au Canada sous le nom d’Assurant Solutions<span class=\"superscriptsFootnote\"><sup>MD</sup></span>.",
		//additionalInformation_footnoteContentText5				:	"Plus les taxes applicables. Les frais d’adhésion débuteront une fois la première transaction effectuée avec votre carte de crédit de marque Canadian Tire. Par la suite, les frais d’adhésion seront facturés tous les mois à l'avance sur votre carte de crédit de marque Canadian Tire. Voir le document d'information juridique pour toutes les modalités, conditions, restrictions et exclusions. Certaines conditions s’appliquent.",
		//additionalInformation_footnoteContentText1				:   "<span class=\"superscripts\"><sup>1</sup></span> Primes octroyées sous forme d’« Argent » Canadian Tire. Sous réserve de certaines modalités, conditions et restrictions. Consultez les modalités du programme à l’adresse www.canadiantire.ca ou www.ctfs.com/act pour en savoir plus.",
		//additionalInformation_footnoteContentText1Link          :   " ",
		//additionalInformation_footnoteContentText2				:  "<span class=\"superscripts\"><sup>2</sup></span> Les titulaires de carte MasterCard Options de Canadian Tire obtiennent de l’« Argent » Canadian Tire à un taux qui est 10X (ou 2X selon le cas) le taux auquel les autres membres du programme Mon « Argent » Canadian Tire obtiennent de l’« Argent » Canadian Tire lors d’achats effectués par ces membres dans les magasins Canadian Tire (si ces membres payent en argent comptant, avec une carte de débit ou une carte de crédit qui n’est pas liée à ce programme de fidélisation). Le taux offert est exclusif de toute prime, offre promotionnelle ou transaction d’échange." +
		//														   "<br><span class=\"superscripts\"><sup>3</sup></span> Un montant d’achat d’essence minimum peut être requis. Le taux peut varier d’un poste d’essence à l’autre. Rendez-vous aux postes d’essence locaux pour en savoir plus.",
		
		//additionalInformation_footnoteContentText6				:	"<span class=\"superscripts\"><sup>&#8224;</sup></span>Ces produits facultatifs sont offerts à tous les nouveaux titulaires de carte MasterCard de Canadian Tire. Les renseignements que vous fournissez sur la présente demande de carte sont utilisés pour déterminer votre admissibilité à l’obtention d’une carte MasterCard de Canadian Tire et non pour votre adhésion aux produits facultatifs, lesquels sont offerts à tous les titulaires de carte Canadian Tire.<br>" +
		//                                                           "<span class=\"superscripts\"><sup>MD</sup></span>/<span class=\"superscripts\"><sup>MC</sup></span> Canadian Tire, Options Canadian Tire, PartSource et le triangle de Canadian Tire sont des marques de commerce déposées et Mon « Argent » Canadian Tire et « Argent » Canadian Tire sont des marques de commerce de La Société Canadian Tire Limitée.",
		//additionalInformation_footnoteContentText7				:   "<span class=\"superscripts\"><sup>MD</sup></span>/<span class=\"superscripts\"><sup>MC</sup></span> Couverture-crédit et Couverture-crédit – Âge d’or sont des marques de commerce déposées de la Banque Canadian Tire et sont utilisées sous licence.<br>Le programme Surveillance d’identité Classique est commandité par la Banque Canadian Tire et fourni par Aimia Proprietary Loyalty Canada Inc.<br>" +
		//															"Rebound<span class=\"superscripts\"><sup>MD</sup></span> est une marque de commerce déposée de Aimia Proprietary Loyalty Canada Inc.<br>"+
		//															"<span class=\"superscripts\"><sup>MD</sup></span> Assurant Solutions est une marque de commerce de Assurant Inc.<br>" +	
		//															"<span class=\"superscripts\"><sup>MD</sup></span>/<span class=\"superscripts\"><sup>MC</sup></span> MasterCard et la marque figurative de MasterCard sont des marques de commerce déposées et <i>PayPass</i> est une marque de commerce de MasterCard International Incorporated.",
		
		// Old line
		// confirmation_Application_Authorization_Item2           :   "S’il ne vous est pas possible d’approuver ma demande de carte prévoyant un taux d’intérêt annuel de 21,99 % pour les avances de fonds et les frais afférents et un taux d’intérêt annuel de 19,99 % pour tous les autres types de débit, j’accepte que vous traitiez la présente demande, sans que vous ayez à m’en aviser spécifiquement, comme s’il s’agissait d’une demande de carte à un taux d’intérêt annuel de 25,99 % pour tous les types de débit, à l’exclusion des avances de fonds et des frais afférents pour lesquels le taux d’intérêt annuel sera de 27,99 %.",
		confirmation_Application_Authorization_Item2_OMX           :   "S’il ne vous est pas possible d’approuver ma demande de carte prévoyant un taux d’intérêt annuel de 22,99 % pour les transactions au comptant et les frais afférents et un taux d’intérêt annuel de 19,99 % (à l’exception des transactions au comptant et des frais afférents) pour tous les autres types de débit, j’accepte que vous traitiez la présente demande, sans que vous ayez à m’en aviser spécifiquement, comme s’il s’agissait d’une demande de carte à un taux d’intérêt annuel de 25,99 % pour tous les types de débit, à l’exclusion des transactions au comptant et des frais afférents pour lesquels le taux d’intérêt annuel sera de 27,99 %.",
		confirmation_Application_Authorization_Item2_OMZ           :   "Si ma demande de carte à ce taux n'est pas approuvée, il se peut que la Banque Canadian Tire accepte d'émettre une carte Mastercard Triangle<sup>MC</sup> à mon nom portant un taux d’intérêt annuel de 19,99 % pour toutes les transactions, à l’exception des transactions au comptant et des frais afférents et 22,99 % pour des transactions au comptant et des frais afférents.",
		confirmation_Application_Authorization_Item3           :   "La carte est émise par la Banque Canadian Tire (les « SFCT »). Le programme Triangle Rewards est fourni et administré par La Société Canadian Tire Limitée.",
		confirmation_Application_Authorization_Item4_1         :   "Les SFCT peuvent procéder à la collecte, à l’utilisation et au partage de renseignements personnels me concernant aux fins décrites dans la politique en matière de protection des renseignements personnels de Canadian Tire, notamment à des fins de commercialisation et de vente par courriel, téléphone, dispositif de composition et d’annonce automatique ou toute autre forme de télécommunication.",
		confirmation_Application_Authorization_Item4_2         :	" ",//we need this empty string because french and english templates have different structure
		confirmation_Application_Authorization_Item4_3         :   " ",//we need this empty string because french and english templates have different structure

		
		confirmation_Application_Authorization_Item7a          :   "Je deviendrai automatiquement membre du programme Triangle Rewards si je ne le suis pas déjà, même si ma demande de carte n’est pas approuvée.",
		confirmation_Application_Authorization_Item7b          :   "Je serai lié par les modalités du programme Triangle Rewards décrites à l’adresse " +	"<a href='http://www.canadiantire.ca/fr.html' target='_blank'>canadiantire.ca</a>"+" ou "+"<a href='https://customer.ctfs.com/lang/fr/Products/CreditCards/OptionsMasterCard/CTMoneyRewards/' target='_blank'> triangle.com/act</a>.",
		
/*		confirmation_footnoteContentText01 					   :   "Taxes applicables en sus. Payable mensuellement. Veuillez consulter le document Renseignements juridiques ou votre Certificat d’assurance pour prendre connaissance de toutes les modalités, conditions, limitations et les exclusions relatives à votre solde. Certaines conditions s’appliquent.",
		confirmation_footnoteContentText02 					   :   "Si vous êtes âgé de moins de 66 ans, vous adhérerez à Couverture-crédit. Si vous êtes âgé de 66 à 75 ans, vous adhérerez à Couverture-crédit – Âge d’or. Couverture-crédit est souscrite auprès de American Bankers, Compagnie d’Assurance Vie de la Floride et de American Bankers, Compagnie d’Assurances Générales de la Floride. Couverture-crédit – Âge d’or est souscrite auprès de American Bankers, Compagnie d’Assurance Vie de la Floride. American Bankers, Compagnie d’Assurance Vie de la Floride et American Bankers, Compagnie d’Assurances Générales de la Floride et leurs filiales et sociétés affiliées exercent des activités au Canada sous le nom d’Assurant Solutions<span class=\"superscripts\"><sup>MD</sup></span>.",
		confirmation_footnoteContentText02a 				   :   "Plus les taxes applicables. Les frais d’adhésion débuteront une fois la première transaction effectuée avec votre carte de crédit de marque Canadian Tire. Par la suite, les frais d’adhésion seront facturés tous les mois à l'avance sur votre carte de crédit de marque Canadian Tire. Voir le document d'information juridique pour toutes les modalités, conditions, restrictions et exclusions. Certaines conditions s’appliquent.",
		confirmation_footnoteContentText03 					   :   "<span class=\"superscripts\"><sup>1</sup></span> Primes octroyées sous forme d’« Argent » Canadian Tire. Sous réserve de certaines modalités, conditions et restrictions. Consultez les modalités du programme à l’adresse www.canadiantire.ca ou www.ctfs.com/act pour en savoir plus." +
																   "<br><span class=\"superscripts\"><sup>2</sup></span> Les titulaires de carte MasterCard Options de Canadian Tire obtiennent de l’« Argent » Canadian Tire à un taux qui est 10X (ou 2X selon le cas) le taux auquel les autres membres du programme Mon « Argent » Canadian Tire obtiennent de l’« Argent » Canadian Tire<span class=\"superscripts\"><sup>MC</sup></span> lors d’achats effectués par ces membres dans les magasins Canadian Tire (si ces membres payent en argent comptant, avec une carte de débit ou une carte de crédit qui n’est pas liée à ce programme de fidélisation). Le taux offert est exclusif de toute prime, offre promotionnelle ou transaction d’échange." +
																   "<br><span class=\"superscripts\"><sup>3</sup></span> Un montant d’achat d’essence minimum peut être requis. Le taux peut varier d’un poste d’essence à l’autre. Rendez-vous aux postes d’essence locaux pour en savoir plus." +
																   "<br><span class=\"superscripts\"><sup>4</sup></span> Si votre demande de carte à ce taux n’est pas approuvée, il se peut que nous acceptions d’émettre une carte à votre nom portant un taux d’intérêt annuel de 27,99 % pour toutes les avances de fonds et frais afférents et de 25,99 % pour tous les autres types de débit.",
		confirmation_footnoteContentText04			           :   "<span class=\"superscripts\"><sup>&#8224;</sup></span>Ces produits facultatifs sont offerts à tous les nouveaux titulaires de carte MasterCard de Canadian Tire. Les renseignements que vous fournissez sur la présente demande de carte sont utilisés pour déterminer votre admissibilité à l’obtention d’une carte MasterCard de Canadian Tire et non pour votre adhésion aux produits facultatifs, lesquels sont offerts à tous les titulaires de carte Canadian Tire.<br>" +
		                                                           "<span class=\"superscripts\"><sup>MD</sup></span>/<span class=\"superscripts\"><sup>MC</sup></span> Canadian Tire, Options Canadian Tire, PartSource et le triangle de Canadian Tire sont des marques de commerce déposées et Mon « Argent » Canadian Tire et « Argent » Canadian Tire sont des marques de commerce de La Société Canadian Tire Limitée.",
		confirmation_footnoteContentText05			           :   "<span class=\"superscripts\"><sup>MD</sup></span>/<span class=\"superscripts\"><sup>MC</sup></span> Couverture-crédit est une des marques de commerce déposées de la Banque Canadian Tire et sont utilisées sous licence.<br>Le programme Surveillance d’identité Classique est commandité par la Banque Canadian Tire et fourni par Aimia Proprietary Loyalty Canada Inc.<br>" +
																   "Rebound<span class=\"superscripts\"><sup>MD</sup></span> est une marque de commerce déposée de Aimia Proprietary Loyalty Canada Inc.<br>"+
																   "<span class=\"superscripts\"><sup>MD</sup></span> Assurant Solutions est une marque de commerce de Assurant Inc.<br>" +	
																   "<span class=\"superscripts\"><sup>MD</sup></span>/<span class=\"superscripts\"><sup>MC</sup></span> MasterCard et la marque figurative de MasterCard sont des marques de commerce déposées de commerce de MasterCard International Incorporated.",
*/
		// US3979
		confirmation_footnoteContentText1_1					   :   "Services Financiers Canadian Tire est une dénomination commerciale de la Banque Canadian Tire.<br><br>" + 
																	"<sup>&dagger;&dagger;</sup> Ces produits facultatifs sont offerts à tous les nouveaux titulaires de carte Mastercard émise par la Banque Canadian Tire. Les renseignements que vous fournissez sur la présente demande de carte sont utilisés pour déterminer votre admissibilité à l’obtention d’une carte Mastercard émise par la Banque Canadian Tire et non pour votre adhésion aux produits facultatifs.La Banque Canadian Tire a un intérêt financier dans la vente de cette assurance.",
		confirmation_footnoteContentText01_OMX 				   :   "<span class=\"superscripts\"><sup>1</sup></span> Primes octroyées sous forme d’Argent électronique Canadian Tire<span class=\"superscripts\"><sup>MD</sup></span>  &#40;Argent CT<span class=\"superscripts\"><sup>MD</sup></span>&#41;.  Sous réserve de certaines modalités visant l’obtention et l’échange des primes. Rendez-vous à l’adresse triangle.com/act pour en savoir plus. Les titulaires de carte qui règlent leurs achats avec leur carte Mastercard<span class=\"superscripts\"><sup>MD</sup></span> Triangle<span class=\"superscripts\"><sup>MC</sup></span> obtiennent 10x le taux d’Argent Canadian Tire, soit 4 % auquel les autres membres du programme Triangle Rewards ont le droit en effectuant un achat dans les magasins Canadian Tire en argent comptant ou avec une carte de débit ou une carte de crédit qui n’est pas liée à ce programme de fidélisation. Le taux offert est exclusif de toute prime, offre promotionnelle ou transaction d’échange. L’Argent CT est calculé sur le montant de l’achat avant taxes dans les magasins Canadian Tire et PartSource.",
		confirmation_footnoteContentText01_OMZ 				   :   "<span class=\"superscripts\"><sup>1</sup></span> Primes octroyées sous forme d’Argent électronique Canadian Tire<span class=\"superscripts\"><sup>MD</sup></span>  &#40;Argent CT<span class=\"superscripts\"><sup>MD</sup></span>&#41;.  Sous réserve de certaines modalités visant l’obtention et l’échange des primes. Rendez-vous à l’adresse triangle.com/act pour en savoir plus. Les titulaires de carte qui règlent leurs achats avec leur carte World Elite Mastercard<span class=\"superscripts\"><sup>MD</sup></span> Triangle<span class=\"superscripts\"><sup>MC</sup></span> obtiennent 10x le taux d’Argent Canadian Tire, soit 4 % auquel les autres membres du programme Triangle Rewards ont le droit en effectuant un achat dans les magasins Canadian Tire en argent comptant ou avec une carte de débit ou une carte de crédit qui n’est pas liée à ce programme de fidélisation. Le taux offert est exclusif de toute prime, offre promotionnelle ou transaction d’échange. L’Argent CT est calculé sur le montant de l’achat avant taxes dans les magasins Canadian Tire et PartSource.",
		confirmation_footnoteContentText02 					   :   "Si vous êtes âgé de moins de 66 ans, vous adhérerez à Couverture-crédit. Si je suis âgé de 66 à 75 ans, j’adhérerai à Couverture-crédit – Âge d’or. Couverture-crédit est souscrite par American Bankers Compagnie d’Assurance Vie de la Floride et d’American Bankers Compagnie d’Assurance Générale de la Floride. Couverture-crédit – Âge d’or est souscrite par American Bankers Compagnie d’Assurance Vie de la Floride. American Bankers, Compagnie d’Assurance-Vie de la Floride et American Bankers, Compagnie d’Assurances Générales de la Floride et leurs filiales et sociétés affiliées exercent des activités au Canada sous le nom d’Assurant Solutions<span class=\"superscripts\"><sup>MD</sup></span>.",
		confirmation_footnoteContentText02a 				   :   "<span class=\"superscripts\"><sup>MD/MC</sup></span>  Sauf indication contraire, toutes les marques de commerce sont la propriété de La Société Canadian Tire Limitée, utilisée sous licence.",
		confirmation_footnoteContentText03 					   :   "<sup>1</sup> Primes octroyées sous forme d’« Argent » Canadian Tire. Sous réserve de certaines modalités, conditions et restrictions. Consultez les modalités du programme à l’adresse www.ctfs.com/act pour en savoir plus.",
		confirmation_footnoteContentText04					   :   	"<span class=\"superscripts\"><sup>MD/MC</sup></span> Mastercard et World Elite Mastercard sont des marques de commerce déposées et le logo des deux cercles imbriqués est une marque de commerce de Mastercard International Incorporated.",
		confirmation_footnoteContentText05					   :   	"<span class=\"superscripts\"><sup>MD</sup></span> Assurant est une marque de commerce déposée d’Assurant Inc.<br><br>" +
																	"<span class=\"superscripts\"><sup>MD/MC</sup></span> Couverture-crédit est une marque de commerce déposée de la Banque Canadian Tire.<br><br>" +
																	"L’Assurance Couverture-crédit est une assurance-crédit collective prise en charge par American Bankers Compagnie d’Assurance Vie de la Floride (ABLAC) et American Bankers Compagnie d’Assurance Générale de la Floride (ABIC). ABLAC et ABIC ainsi que leurs sociétés affiliées et filiales exercent des activités commerciales au Canada sous la dénomination sociale Assurant<sup>&reg;</sup>.<br><br>" +	
																	"Le programme Surveillance d’identité Classique est commandité par la Banque Canadian Tire et offert par Sigma Loyalty Group Inc.",
 		
		identityVerification_FinalText2						   :	"Vous recevrez également votre carte MasterCard Options, que vous pourrez utiliser partout, par la poste dans les sept à dix jours ouvrables. Veuillez prendre note que vous recevrez votre carte Mon « Argent » Canadian Tire <u>séparément de votre carte MasterCard Options.</u>",
	
		identityVerification_FooterText1 						: "<span class=\"superscripts\"><sup>1</sup></span> Primes octroyées sous forme d’« Argent » Canadian Tire. Sous réserve de certaines modalités, conditions et restrictions. Consultez les modalités du programme à l’adresse www.canadiantire.ca ou www.ctfs.com/act pour en savoir plus.",
		identityVerification_FooterText2 						: "<span class=\"superscripts\"><sup>2</sup></span> Les titulaires de carte MasterCard Options de Canadian Tire obtiennent de l’« Argent » Canadian Tire à un taux qui est 10X (ou 2X selon le cas) le taux auquel les autres membres du programme Mon « Argent » Canadian Tire obtiennent de l’« Argent » Canadian Tire lors d’achats effectués par ces membres dans les magasins Canadian Tire (si ces membres payent en argent comptant, avec une carte de débit ou une carte de crédit qui n’est pas liée à ce programme de fidélisation). Le taux offert est exclusif de toute prime, offre promotionnelle ou transaction d’échange.",
		identityVerification_FooterText3 						: "<span class=\"superscripts\"><sup>3</sup></span> Un montant d’achat d’essence minimum peut être requis. Le taux peut varier d’un poste d’essence à l’autre. Rendez-vous aux postes d’essence locaux pour en savoir plus.",
		// Old identityVerification_FooterText4 						: "<span class=\"superscripts\"><sup>MD</sup></span>/<span class=\"superscripts\"><sup>MC</sup></span> Canadian Tire, Options Canadian Tire, PartSource et le triangle de Canadian Tire sont des marques de commerce déposées et Mon « Argent » Canadian Tire et « Argent » Canadian Tire sont des marques de commerce de La Société Canadian Tire Limitée.",
		identityVerification_FooterText4 						: "Services Financiers Canadian Tire est une dénomination commerciale de la Banque Canadian Tire. <br><br>" +
																  "<span class=\"superscripts\"><sup>MD/</sup></span><span class=\"superscripts\"><sup>MC</sup></span> Sauf indication contraire, toutes les marques de commerce sont la propriété de la Société Canadian Tire Limitée et sont utilisées sous licence.",
		identityVerification_FooterText5 						: "<span class=\"superscripts\"><sup>MD/MC</sup></span> Mastercard et World Elite Mastercard sont des marques de commerce déposées et le logo des deux cercles imbriqués est une marque de commerce de Mastercard International Incorporated.",
		
		identityVerification_FooterTextTuAuth1                  :    "Services Financiers Canadian Tire est une dénomination commerciale de la Banque Canadian Tire.",
		identityVerification_FooterTextTuAuth2                  :    "<span class=\"superscripts\"><sup>MD</sup></span><sup>/</sup><span class=\"superscripts\"><sup>MC</sup></span> Sauf indication contraire, toutes les marques de commerce sont la propriété de la Société Canadian Tire Limitée et sont utilisées sous licence. ",
		
		//---old---
		additionalInformation_footnoteContentText1old				:	"<sup>1</sup> Primes octroyées sous forme d’« Argent » Canadian Tire avec la Carte<span class=\"superscriptsFootnote\"><sup>MD</sup></span>. Sous réserve des modalités et des restrictions visant l’octroi et l’échange des primes. Détails en magasin ou sur la page Programme de primes en « Argent » Canadian Tire. Les titulaires de la carte MasterCard Options en Nouvelle-Écosse participent à un autre programme de primes; veuillez vous rendre à l’adresse",
		additionalInformation_footnoteContentText1Linkold			:	"<a href='https://www.ctfs.com/Products/CreditCards/OptionsMasterCard/CTMoneyRewards/' target='_blank'>ctfs.com/act.</a>",
		additionalInformation_footnoteContentText2old				:	"<sup>2</sup> À la condition que votre compte soit en règle et que l’achat soit admissible à l’échange de primes.",
		
		additionalInformation_footnoteContentText3old				:	"Taxes applicables en sus. Payable mensuellement. Veuillez consulter le document Renseignements juridiques ou votre Certificat d’assurance pour prendre connaissance de toutes les modalités, conditions, limitations et les exclusions relatives à votre solde. Certaines conditions s’appliquent.",
		additionalInformation_footnoteContentText4old				:	"Si vous êtes âgé de moins de 66 ans, vous adhérerez à Couverture-crédit. Si vous êtes âgé de 66 à 75 ans, vous adhérerez à Couverture-crédit – Âge d’or. Couverture-crédit et Couverture-crédit – Âge d’or est souscrite auprès de American Bankers, Compagnie d’Assurance Vie de la Floride, et de American Bankers, Compagnie d’Assurances Générales de la Floride, filiales de Assurant Solutions<span class=\"superscriptsFootnote\"><sup>MD</sup></span>.",
		additionalInformation_footnoteContentText5old				:	"Plus les taxes applicables. Les frais d’adhésion débuteront une fois la première transaction effectuée avec votre carte de crédit de marque Canadian Tire. Par la suite, les frais d’adhésion seront facturés tous les mois à l'avance sur votre carte de crédit de marque Canadian Tire. Voir le document d'information juridique pour toutes les modalités, conditions, restrictions et exclusions. Certaines conditions s’appliquent.",
		additionalInformation_footnoteContentText6old				:	"<sup>&#8224;</sup> Ces produits facultatifs sont offerts à tous les nouveaux titulaires de carte MasterCard de Canadian Tire. Les renseignements que vous fournissez sur la présente demande de carte sont utilisés pour déterminer votre admissibilité à l’obtention d’une carte MasterCard de Canadian Tire et non pour votre adhésion aux produits facultatifs, lesquels sont offerts à tous les titulaires de carte Canadian Tire.MD / MC Couverture-crédit et Couverture-crédit – Âge d’or sont des marques de commerce déposées des Services Financiers Canadian Tire Limitée, et sont utilisées sous licence. Le programme Surveillance d’identité classique est commandité par les Services Financiers Canadian Tire Limitée et fourni par Aimia Proprietary Loyalty Canada Inc." +
																	    "Rebound<span class=\"superscriptsFootnote\"><sup>MD</sup></span> est une marque de commerce déposée de Aimia Proprietary Loyalty Canada Inc",
		additionalInformation_footnoteContentText7old				:	"<span class=\"superscriptsFootnote\"><sup>MD</sup></span>/<span class=\"superscriptsFootnote\"><sup>MC</sup></span> Sauf indication contraire, toutes les marques de commerce sont la propriété de La Société Canadian Tire Limitée et sont utilisées sous licence.<br>" +
				  												    "<span class=\"superscriptsFootnote\"><sup>MD</sup></span>/<span class=\"superscriptsFootnote\"><sup>MC</sup></span> MasterCard et la marque figurative de MasterCard sont des marques de commerce déposées et <i>PayPass</i> est une marque de commerce de MasterCard International Incorporated.",	
				  													
	    confirmation_Application_Authorization_Item2old        :   "Si ma demande de carte à un taux d’intérêt annuel de 19,99 % n’est pas approuvée, j’accepte que vous traitiez la présente demande comme une demande distincte pour la même carte à un taux d’intérêt annuel de 25,99 % pour toutes les transactions, y compris les avances de fonds et les frais afférents, sans que je ne reçoive d’avis spécifique à cet effet.",
		confirmation_Application_Authorization_Item3old        :   "La carte est émise par la Banque Canadian Tire (la « BCT »), et le compte est administré par les Services Financiers Canadian Tire Limitée (les « SFCTL »).",
		confirmation_Application_Authorization_Item4_1old      :   "La BCT et les SFCTL peuvent procéder à la collecte, à l’utilisation et au partage de renseignements personnels me concernant aux fins décrites dans la politique en matière de protection des renseignements personnels de Canadian Tire, notamment à des fins de commercialisation et de vente par courriel, téléphone, dispositif de composition et d’annonce automatique ou toute autre forme de télécommunication.",
		confirmation_Application_Authorization_Item4_2old      :	" ",//we need this empty string because french and english templates have different structure
		confirmation_Application_Authorization_Item4_3old      :   " ",//we need this empty string because french and english templates have different structure

		identityVerification_FinalText2old						:	"Vous recevrez également votre carte MasterCard Options, que vous pourrez utiliser partout, par la poste dans les sept à dix jours ouvrables.",
		
		identityVerification_FooterText1old					:	"Pour votre protection et votre sécurité, les Services Financiers Canadian Tire Limitée ont adopté le présent processus afin de remplir votre demande de carte de crédit Canadian Tire. Dans le cadre de ce processus, le système accédera à votre dossier de consommateur pour aider les Services Financiers Canadian Tire Limitée à vérifier votre identité. Ce processus ne constitue pas une vérification de crédit; il vise à vérifier l’identité de la personne qui demande une carte de crédit Canadian Tire. Veuillez répondre aux questions au meilleur de votre connaissance. Les renseignements que vous fournissez ne sont pas conservés dans les dossiers des Services Financiers Canadian Tire Limitée et de la Banque Canadian Tire.",
		identityVerification_FooterText2old					:	"<span class=\"superscriptsFootnote\"><sup>MD</sup></span>/<span class=\"superscriptsFootnote\"><sup>MC</sup></span> Sauf indication contraire, toutes les marques de commerce sont la propriété de La Société Canadian Tire Limitée et sont utilisées sous licence.",
		identityVerification_FooterText3old					:	"<span class=\"superscriptsFootnote\"><sup>MD</sup></span>/<span class=\"superscriptsFootnote\"><sup>MC</sup></span> MasterCard et la marque figurative de MasterCard sont des marques de commerce déposées et PayPass est une marque de commerce de MasterCard International Incorporated.",
		//---old---
		
		//----US3011------
		// chooseProduct_TitleA   							: "EXCLUSIF À VOUS EN TANT QUE TITULAIRE DE CARTE",
		// US3627
		chooseProduct_TitleA   							: "EXCLUSIVEMENT POUR VOUS EN TANT QUE TITULAIRE DE CARTE MASTERCARD<span class=\"superscriptsFootnote\"><sup>MD</sup></span> OPTIONS<span class=\"superscriptsFootnote\"><sup>MD</sup></span> DE CANADIAN TIRE",
		
		// Old code
		// chooseProduct_DescriptionA1  					: "Taux d'intérêt – <b>19.99%</b>",
		// chooseProduct_DescriptionA2   					: "Cash advances and related fees — <b>21.99%</b>",
		chooseProduct_DescriptionA0	  					: "Frais annuels &#45; <b>Aucuns</b>",
		chooseProduct_DescriptionA1  					: "Taux d'intérêt &#45; <b>19&#44;99 &#37;</b><sup>3</sup>",
		chooseProduct_DescriptionA2   					: "Avances de fonds et frais afférents &#45; <br><b>22&#44;99 &#37;</b><sup>3</sup>",
		
		chooseProduct_DescriptionA1_OMZ   : "Taux d'intérêt &#45; <b>19&#44;99 &#37;",
		chooseProduct_DescriptionA2_OMZ   : "Avances de fonds et frais afférents &#45; <br><b>22&#44;99 &#37;",
		
		
		// 2016-03-17 chrch: Adding hyperlinks as per business request US3964
/*		Overview_ctm_LegalText1 							: "<span class=\"superscripts\"><sup>1</sup></span> Primes octroyées sous forme d’« Argent » Canadian Tire. Sous réserve de certaines modalités, conditions et restrictions. Consultez les modalités du programme à l’adresse <a href='http://www.canadiantire.ca/fr/my-canadian-tire-money.html' target='_blank'>www.canadiantire.ca</a> ou <a href='http://www.ctfs.com/act' target='_blank'>www.ctfs.com/act</a> pour en savoir plus.",
		Overview_ctm_LegalText2 							: "<span class=\"superscripts\"><sup>2</sup></span> Les titulaires de carte MasterCard Options de Canadian Tire qui règlent leurs achats avec cette dernière obtiennent de l’« Argent » Canadian Tire à un taux qui est 10X (ou 2X selon le cas) le taux auquel les autres membres du programme Mon « Argent » Canadian Tire obtiennent de l’« Argent » Canadian Tire lors d’achats effectués par ces membres dans les magasins Canadian Tire (si ces membres payent en argent comptant, avec une carte de débit ou une carte de crédit qui n’est pas liée à ce programme de fidélisation). Le taux offert est exclusif de toute prime, offre promotionnelle ou transaction d’échange.",
		Overview_ctm_LegalText3 							: "<span class=\"superscripts\"><sup>3</sup></span> L’« Argent » Canadian Tire obtenu dans les magasins Canadian Tire ou en ligne à canadiantire.ca est calculé sur le montant avant taxes des achats admissibles et est arrondi au cent près. Pour connaître les taux actuels, composez le 1 800 226-8473.",
		Overview_ctm_LegalText4 							: "<span class=\"superscripts\"><sup>4</sup></span> Un montant d’achat d’essence minimum peut être requis. Le taux peut varier d’un poste d’essence à l’autre. Rendez-vous aux postes d’essence locaux pour en savoir plus. ",
		Overview_ctm_LegalText5 							: "<span class=\"superscripts\"><sup>MD</sup></span>/<span class=\"superscripts\"><sup>MC</sup></span> Canadian Tire, Options Canadian Tire, PartSource et le triangle de Canadian Tire sont des marques de commerce déposées et Mon « Argent » Canadian Tire et « Argent » Canadian Tire sont des marques de commerce de La Société Canadian Tire Limitée.",
		Overview_ctm_LegalText6 							: "<span class=\"superscripts\"><sup>MD</sup></span>/<span class=\"superscripts\"><sup>MC</sup></span> MasterCard et la marque figurative de MasterCard sont des marques de commerce déposées de MasterCard International Incorporated.",
*/
		// US3979
		Overview_ctm_LegalText1 						   			: "Canadian Tire Financial Services is a business name of Canadian Tire Bank. <br>" +
																  "<sup>1</sup> In the form of Canadian Tire 'Money'. Terms and conditions apply to collecting and redeeming. Visit ctfs.com/ctm for more information. Canadian Tire Options MasterCard cardmembers paying with their Options MasterCard collect Canadian Tire 'Money' at the rate that is 10X (or 2X as the case may be) the rate at which other members of the My Canadian Tire 'Money'<sup>&reg;</sup> program collect Canadian Tire 'Money' on purchases made by such other members at Canadian Tire stores (if other members paid by cash, debit or a credit card not linked to this loyalty program). The offered rate is exclusive of any bonus or promotional offers or redemption transactions.",
		Overview_ctm_LegalText2 									: "<sup>2</sup> Minimum fuel purchase may be required. Rate may vary by location. See local gas bars for details.",
		Overview_ctm_LegalText3 									: "<sup>3</sup> If you are not approved for the Card at these rates, we may still issue you a card at an annual interest rate of 27.99% for cash transactions and related fees and 25.99% for all other charges.",
		Overview_ctm_LegalText4 									: "<sup>&reg;</sup>/<sup>&trade;</sup> Canadian Tire , the Canadian Tire triangle design, the Canadian Tire Financial Services  design, Canadian Tire Options, Canadian Tire 'Money', My Canadian 'Money' and PartSource are registered trademarks of Canadian Tire Corporation, Limited and are used under licence.",
		Overview_ctm_LegalText5 									: "<sup>&reg;</sup>/&trade; MasterCard and the MasterCard Brand Mark are registered trademarks of MasterCard International Incorporated, and are used under licence.",	
		
		//US4541
		Overview_ctm_LegalTextEComm1							: "Les Services Financiers Canadian Tire est une dénomination commerciale de la Banque Canadian Tire.", 
		Overview_ctm_LegalTextEComm2 							: "<sup>1</sup> Primes octroyées sous forme d’Argent électronique Canadian Tire<sup>MD</sup> (Argent CT<sup>MD</sup>). Sous réserve de certaines modalités visant l’obtention et l’échange des primes. Rendez-vous à l’adresse triangle.com/act pour en savoir plus. Les titulaires de carte qui règlent leurs achats avec leur carte Mastercard Options de Canadian Tire obtiennent 10x le taux d’Argent Canadian Tire, soit 4 % auquel les autres membres du programme Triangle Rewards ont le droit en effectuant un achat dans les magasins Canadian Tire en argent comptant ou avec une carte de débit ou une carte de crédit qui n’est pas liée à ce programme de fidélisation. Le taux offert est exclusif de toute prime, offre promotionnelle ou transaction d’échange. L’Argent CT est calculé sur le montant de l’achat avant taxes dans les magasins Canadian Tire et PartSource.",
		Overview_ctm_LegalTextEComm3 							: "<span class=\"superscripts\"><sup>2</sup></span> Un achat minimum d’essence peut être requis. Le taux peut varier selon la région. Voir les postes d’essence régionaux pour plus de détails.",
		Overview_ctm_LegalTextEComm4 							: "<span class=\"superscripts\"><sup>3</sup></span>  Le taux de 3 s’applique à la première tranche de 12 000 $ sur les dépenses d’épicerie annuelles. Après cela, votre taux revient au taux courant. S’applique aux achats effectués dans les magasins ayant un code de commerçant Mastercard 5411. Pour des exemples des marchands admissibles, visitez le site triangle.com/commercants. La prime de 3 % est calculée à partir du montant après les taxes. Exclut les achats chez Walmart et Costco."+
		                                                          "<br><br><span class=\"superscripts\"><sup>&#94;</sup></span> Ce service doit être activé séparément. L’Assistance routière Canadian Tire est offerte par les Services Canadian Tire Limitée. Voir <a href='http://roadsideassistance.canadiantire.ca/fr.html' target=\"_blank\">cliquez ici</a> pour en savoir plus.",
        Overview_ctm_LegalTextEComm2_DEC_OMX 					: "<span class=\"superscripts\"><sup>1</sup></span> Primes octroyées sous forme d’Argent électronique Canadian Tire<span class=\"superscripts\"><sup>MD</sup></span> (Argent CT<span class=\"superscripts\"><sup>MD</sup></span>). Sous réserve de certaines modalités visant l’obtention et l’échange des primes. Rendez-vous à l’adresse triangle.com/act pour en savoir plus. Les titulaires de carte qui règlent leurs achats avec leur carte Mastercard<span class=\"superscripts\"><sup>MD</sup></span> Triangle<span class=\"superscripts\"><sup>MC</sup></span> obtiennent 10x le taux d’Argent Canadian Tire, soit 4 % auquel les autres membres du programme Triangle Rewards ont le droit en effectuant un achat dans les magasins Canadian Tire en argent comptant ou avec une carte de débit ou une carte de crédit qui n’est pas liée à ce programme de fidélisation. Le taux offert est exclusif de toute prime, offre promotionnelle ou transaction d’échange. L’Argent CT est calculé sur le montant de l’achat avant taxes dans les magasins Canadian Tire et PartSource.",
	    Overview_ctm_LegalTextEComm2_DEC_OMZ 					: "<span class=\"superscripts\"><sup>1</sup></span> Primes octroyées sous forme d’Argent électronique Canadian Tire<span class=\"superscripts\"><sup>MD</sup></span> (Argent CT<span class=\"superscripts\"><sup>MD</sup></span>). Sous réserve de certaines modalités visant l’obtention et l’échange des primes. Rendez-vous à l’adresse triangle.com/act pour en savoir plus. Les titulaires de carte qui règlent leurs achats avec leur carte World Elite Mastercard<span class=\"superscripts\"><sup>MD</sup></span> Triangle<span class=\"superscripts\"><sup>MC</sup></span> obtiennent 10x le taux d’Argent Canadian Tire, soit 4 % auquel les autres membres du programme Triangle Rewards ont le droit en effectuant un achat dans les magasins Canadian Tire en argent comptant ou avec une carte de débit ou une carte de crédit qui n’est pas liée à ce programme de fidélisation. Le taux offert est exclusif de toute prime, offre promotionnelle ou transaction d’échange. L’Argent CT est calculé sur le montant de l’achat avant taxes dans les magasins Canadian Tire et PartSource.",
	    
	    Overview_ctm_LegalTextEComm4_DEC_OMX 					: "<span class=\"superscripts\"><sup>3</sup></span> Si votre demande de carte à ce taux n’est pas approuvée, il se peut que nous acceptions d’émettre une carte à votre nom portant un taux d’intérêt annuel de 27,99 % pour toutes les transactions au comptant et frais afférents et de 25,99 % pour tous les autres types de débit.",
		Overview_ctm_LegalTextEComm4_DEC_OMZ					: "<span class=\"superscripts\"><sup>3</sup></span> Le taux de 3 s’applique à la première tranche de 12 000 $ sur les dépenses d’épicerie annuelles. Après cela, votre taux revient au taux courant. S’applique aux achats effectués dans les magasins ayant un code de commerçant Mastercard 5411. Pour des exemples des marchands admissibles, visitez le site triangle.com/commercants. La prime de 3 % est calculée à partir du montant après les taxes. Exclut les achats chez Walmart et Costco.<br><br><p><sup>&#94;</sup> Ce service doit être activé séparément. L’Assistance routière Canadian Tire est offerte par les Services Canadian Tire Limitée. Voir <a href='http://roadsideassistance.canadiantire.ca/fr.html' target=\"_blank\">Cliquez ici</a> pour en savoir plus.</p>",
		                                                          
		                                                          
		Overview_ctm_LegalTextEComm5 							: "<sup>*</sup> L’offre de financement « Paiements égaux, aucun intérêt » pendant 12 mois (à moins d’indications contraires) n’est accordée que sur demande et sous réserve d’une approbation de crédit préalable pour des achats de 200 $ ou plus (à l’exception des cartes-cadeaux) réglés avec une carte de crédit émise par la Banque Canadian Tire dans un magasin Canadian Tire. Aucun intérêt ne court pendant la période du programme. Si nous ne recevons pas le montant intégral du paiement minimum dû indiqué sur un relevé dans les 59 jours qui suivent la date de ce relevé ou s’il se produit une situation de manquement (autre que celle de ne pas avoir effectué un paiement) en vertu de votre contrat du titulaire de carte, tous les programmes de modalités spéciales de paiement prendront fin et i) l’intérêt sur le solde impayé de chacun des programmes vous sera facturé au taux annuel courant applicable à compter du jour qui suit la date de votre prochain relevé, et ii) le solde impayé de chaque programme sera ajouté au solde dû pour ce relevé. Les programmes de modalités spéciales de paiement ne comportent aucuns frais d’administration. Chaque mois pendant la période d’un programme de paiements égaux, vous devez payer intégralement, avant la date d’échéance, le montant du versement mensuel dû en vertu de ce programme de paiements égaux. Tout montant impayé non reçu avant la date d’échéance ne fera plus partie du programme de paiements égaux, et l’intérêt vous sera facturé sur ce montant à compter du jour qui suit la date de votre relevé suivant au taux annuel courant applicable.",
		Overview_ctm_LegalTextEComm7_newLine_1                  : "<span class=\"superscripts\"><sup>&#8224;</sup></span> Assurance Achats, Garantie prolongée et l’Assurance collision / dommages pour véhicules de location sont des assurances souscrites auprès de American Bankers Compagnie d’Assurance générale de la Floride. Les services de conciergerie sont proposés par Services Assurant Canada Inc. Les détails des services et de la couverture d’assurance, y compris les définitions, les avantages, les limites et les exclusions sont décrits dans le certificat d’assurance et l’énoncé des services fournis avec votre carte. Veuillez conserver ces documents en lieu sûr avec vos autres documents importants et prenez les avec vous en voyage. American Bankers Compagnie d’Assurance Générale, leurs filiales et sociétés affiliées, exercent des activités au Canada sous le nom Assurant<span class=\"superscripts\"><sup>MD</sup></span>.",
		Overview_ctm_LegalTextEComm6							: "<b>Renseignements additionnels à l’intention des résidents du Québec seulement :</b> Le taux annuel courant applicable aux personnes demandant la carte Mastercard Triangle et la carte World Elite Mastercard Triangle est de 22,99 % pour les transactions au comptant et les frais afférents et de 19,99 % pour tous les autres types de débit. Certaines personnes peuvent se voir accorder un taux annuel courant supérieur ou inférieur, selon les résultats de leur évaluation de crédit. Le paiement minimum correspond à la somme (a) de l’intérêt et des frais indiqués sur le relevé (b) de tout montant impayé ou, s’il est plus élevé, de tout solde dépassant la limite de crédit (c) du montant de tout versement alors dû en vertu d’un programme de paiements égaux, et (d) de 10 $. Un solde inférieur à 10 $ doit être réglé intégralement. Pour les résidents du Québec, le délai de grâce entre la date du relevé et la date d’échéance du paiement est de 26 jours. La période de facturation couverte par chaque relevé peut aller de 28 à 33 jours. La carte Mastercard Triangle et la carte World Elite Mastercard Triangle ne comporte pas de frais annuels. Exemples de coûts d’emprunt (arrondis au cent le plus proche) en supposant que tous les débits portent intérêt au taux annuel courant de 19,99 %, que le mois comporte 30 jours, qu’aucun achat ne fait l’objet d’un programme de modalités spéciales de paiement et qu’aucuns autres frais, paiements additionnels ou changements ne s’appliquent :",
		
		Overview_ctm_LegalTextEComm6_DEC_OMX			        : "<b>Renseignements additionnels à l’intention des résidents du Québec seulement :</b> Le taux annuel courant applicable aux personnes demandant la carte  Mastercard<span class=\"superscripts\"><sup>MD</sup></span>  Triangle<span class=\"superscripts\"><sup>MC</sup></span> est de 22,99 % pour les transactions au comptant et les frais afférents et de 19,99 % pour tous les autres types de débit. Certaines personnes peuvent se voir accorder un taux annuel courant supérieur ou inférieur, selon les résultats de leur évaluation de crédit. Le paiement minimum correspond à la somme (a) de l’intérêt et des frais indiqués sur le relevé (b) de tout montant impayé ou, s’il est plus élevé, de tout solde dépassant la limite de crédit (c) du montant de tout versement alors dû en vertu d’un programme de paiements égaux, et (d) de 10 $. Un solde inférieur à 10 $ doit être réglé intégralement. Pour les résidents du Québec, le délai de grâce entre la date du relevé et la date d’échéance du paiement est de 26 jours. La période de facturation couverte par chaque relevé peut aller de 28 à 33 jours. La carte Mastercard<span class=\"superscripts\"><sup>MD</sup></span>  Triangle<span class=\"superscripts\"><sup>MC</sup></span> ne comporte pas de frais annuels. Exemples de coûts d’emprunt (arrondis au cent le plus proche) en supposant que tous les débits portent intérêt au taux annuel courant de 19,99 %, que le mois comporte 30 jours, qu’aucun achat ne fait l’objet d’un programme de modalités spéciales de paiement et qu’aucuns autres frais, paiements additionnels ou changements ne s’appliquent :",
		Overview_ctm_LegalTextEComm6_DEC_OMZ				    : "<b>Renseignements additionnels à l’intention des résidents du Québec seulement :</b> Le taux annuel courant applicable aux personnes demandant la carte World Elite Mastercard<span class=\"superscripts\"><sup>MD</sup></span> Triangle<span class=\"superscripts\"><sup>MC</sup></span> est de 22,99 % pour les transactions au comptant et les frais afférents et de 19,99 % pour tous les autres types de débit. Certaines personnes peuvent se voir accorder un taux annuel courant supérieur ou inférieur, selon les résultats de leur évaluation de crédit. Le paiement minimum correspond à la somme (a) de l’intérêt et des frais indiqués sur le relevé (b) de tout montant impayé ou, s’il est plus élevé, de tout solde dépassant la limite de crédit (c) du montant de tout versement alors dû en vertu d’un programme de paiements égaux, et (d) de 10 $. Un solde inférieur à 10 $ doit être réglé intégralement. Pour les résidents du Québec, le délai de grâce entre la date du relevé et la date d’échéance du paiement est de 26 jours. La période de facturation couverte par chaque relevé peut aller de 28 à 33 jours. La carte World Elite Mastercard<span class=\"superscripts\"><sup>MD</sup></span> Triangle<span class=\"superscripts\"><sup>MC</sup></span> ne comporte pas de frais annuels. Exemples de coûts d’emprunt (arrondis au cent le plus proche) en supposant que tous les débits portent intérêt au taux annuel courant de 19,99 %, que le mois comporte 30 jours, qu’aucun achat ne fait l’objet d’un programme de modalités spéciales de paiement et qu’aucuns autres frais, paiements additionnels ou changements ne s’appliquent :",
		
		Overview_ctm_LegalTextEComm7_newLine_2				    : "<span class=\"superscripts\"><sup>MD</sup></span> Assurant est une marque de commerce déposée d'Assurant Inc.",
		Overview_ctm_LegalTextEComm7							: "<span class=\"superscripts\"><sup>MD/MC</sup></span> Sauf indication contraire, toutes les marques de commerce sont la propriété de La Société Canadian Tire Limitée, utilisée sous licence.",			
		Overview_ctm_LegalTextEComm8							: "<span class=\"superscripts\"><sup>MD/MC</sup></span> Sport Chek et Atmosphere sont des marques de commerce déposée de FGL Sport ltée, utilisée sous licence.",
		Overview_ctm_LegalTextEComm9							: "<span class=\"superscripts\"><sup>MD/MC</sup></span> L’Équipeur et L'Equipeur sont des marques de commerce déposée  de Mark’s Work Warehouse Ltd., utilisée sous licence.",
		Overview_ctm_LegalTextEComm10						    : "<span class=\"superscripts\"><sup>MD/MC</sup></span> Mastercard et World Elite Mastercard sont des marques de commerce déposées et le logo des deux cercles imbriqués est une marque de commerce de Mastercard International Incorporated.",
		
		Overview_ctm_LegalTextEComm10_DEC						: "<span class=\"superscripts\"><sup>MD/MC</sup></span> Mastercard et World Elite Mastercard sont des marques de commerce déposées et le logo des deux cercles imbriqués est une marque de commerce de Mastercard International Incorporated.",
		overview_AverageEComm									:  "Si votre solde moyen est de : ",
		overview_Average0EComm									:  "100 &#36;",
		overview_Average1EComm									:	"500 &#36;",
		overview_Average2EComm									:	"1000 &#36;",
		overview_Average3EComm									:	"2000 &#36;",
		overview_MonthlyCreditChargesEComm						:	"Le total des frais de crédit mensuels sera de :",
		overview_MonthlyCreditCharges0EComm						:	"1&#44;64 &#36;",
		overview_MonthlyCreditCharges1EComm						:	"8&#44;22 &#36;",
		overview_MonthlyCreditCharges2EComm						:	"16&#44;43 &#36;",
		overview_MonthlyCreditCharges3EComm						:	"32&#44;86 &#36;",
		sdfsfasff 												: ""	,
		decline_chapter_one_text                               :  "<b>Malheureusement, nos services de crédit instantané sont temporairement</b>",
		decline_chapter_two_text                               : "<b>indisponibles, mais votre demande sera quand même traitée dès que possible.<b>",
		decline_chapter_three_text                             :  "<strong>Vous avez des questions? Composez le 1 800 459-6415.   ",


		decline_chapter_note                                 : "<b>IMPORTANT: NE PRÉSENTEZ PAS UNE NOUVELLE DEMANDE.<b>",
		pending_verification_status                          : "<span>EN ATTENTE -<br> </span>",
		pending_verification_status_2                          : "<span class=\"peding_verification\"> vérification d’identité</span>",
		verification_message_one_omx                          :"Votre demande pour une carte Mastercard<sup>MD</sup> Triangle<sup>MC</sup> a été approuvée sous réserve de la vérification de votre identité en magasin. ",  
		verification_message_two_omx                          :"Pour répondre à  la réglementation gouvernementale, nous sommes tenus de vérifier votre identité au moyen d’une pièce d'identité avec photo délivrée par une autorité gouvernementale avant de pouvoir émettre une carte à votre nom.",
		verification_message_one_omz                          :"Votre demande pour une carte World Elite Mastercard<sup>MD</sup> Triangle<sup>MC</sup> est approuvée sous réserve de la vérification de votre identité en magasin.",
		verification_message_two_omz                          :"Pour répondre à  la réglementation gouvernementale, nous sommes tenus de vérifier votre identité au moyen d’une pièce d'identité avec photo délivrée par une autorité gouvernementale avant de pouvoir émettre une carte à votre nom.",

		pending_Verification_chapter_one 								:"<strong> Demande de vérification d’identité :</strong>  Vous recevrez une lettre par la poste vous demandant de visiter le magasin Canadian Tire le plus près de chez vous afin de vérifier votre identité à l'aide d'une pièce d'identité avec photo émise par le gouvernement.",
		pending_Verification_chapter_two 								:"<strong>Vérification d’identité :</strong> Apportez votre lettre et votre pièce d'identité avec photo au comptoir du service à la clientèle de votre magasin Canadian Tire le plus proche dans les 20 jours suivant la réception du courrier.",
		pending_Verification_chapter_three_omx					 		:"<strong>Trousse de bienvenue :</strong> Si votre demande est approuvée, votre trousse de bienvenue contenant votre carte Mastercard Triangle vous parviendra par la poste dans un délai de 7 à 10 jours ouvrables.<br>Vous recevrez également une carte Récompenses Triangle<sup>MC</sup> et une trousse de bienvenue au programme Récompenses Triangle séparément dans un délai de 7 à 10 jours ouvrables.",
		pending_Verification_chapter_three_omz 							 :"<strong>Trousse de bienvenue : </strong> Si votre demande est approuvée, votre trousse de bienvenue contenant votre carte Mastercard Triangle vous parviendra par la poste dans un délai de 10 jours ouvrables.<br>Vous recevrez également une carte Récompenses Triangle<sup>MC</sup>  et une trousse de bienvenue au programme Récompenses Triangle séparément dans un délai de 7 à 10 jours ouvrables.",
	    personalInformation_PhoneType_Field	                             : "Type de téléphone",
	    personalInformation_PhoneType_TextField							 :	'<select class=\"fieldValuesSelectField titleField\" id=\"personalInformation_PhoneType_TextField\" />',
	    personalData_HOME                                                :"Domicile",
	    personalData_MOBILE                                              :"Cellulaire",
	    personalData_OTHER                                               :"Autre",
	    personalInformation_EligibilityText                              :" <p><strong>Critères d’admissibilité : </strong> Un revenu individuel minimum de 80 000 $ est requis. Si le critère d’admissibilité pour ce produit ne peut être satisfait, nous vous suggérons d’opter pour la Mastercard<sup>MD</sup> Triangle<sup>MC</sup>.</p> <p> Sélectionnez « Oui » si vous voulez transférer vos renseignements à l'application Mastercard<sup>MD</sup> Triangle<sup>MC</sup>.</p> <p> Sélectionnez « Non » si vous voulez continuer avec la carte World Elite Mastercard<sup>MD</sup> Triangle<sup>MC</sup>.</p> ",
	    creditDisclosure_TitleText                                        :"<p class=\"creditDiscloseTitle\"><strong>Veuillez prendre connaissance des renseignements ci-dessous, puis cliquez sur Commencer pour remplir la demande de carte.</strong></p>"	 

		 


		
		//----end-----US3084 iLoyalty - BRB front facing chagnes -  Loyalty Notification --------------//	
				
	};	