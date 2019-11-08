ensureNamespaceExists();

BRB.dictionary_fr = {
		
		// US4281
		version												:	"1",
		//-------------------------------------------Common----------------------------------------------
		app_loading 										:	"Chargement...",	
		backButtonPrompt_title 								: 	"Quitter la demande",
		
		pleaseSelect_Text									:	'Veuillez sélectionner...',
		pleaseSelect_Text1									:	'Veuillez choisir...',
		
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
		requiredFieldIndicatorLabel							:	"Champ obligatoire", 		
		requiredFieldIndicatorLabel_OMP_OMR					:	"Indique un champ obligatoire",
		
		PageHeader_CanadianTireTabLogo						:	'<div class="PageHeader_CanadianTireTabLogo_fr"></div>',
		PageHeader_CanadianTireNeedHelp                     :   '<div class="needHelpImage_fr"></div>',
		pageHeader_CantireBankOrTriangle                    :   '<div class="logoBankOrTriangle_fr"></div>',
		pageHeader_CantireBankOrTriangle_OMP_OMR            :   '<div class="logoBankOrTriangle_OMP_OMR_fr"></div>',
		
		pageHeader_ompCard                                  :   '<div class="OMPCard4percentage_fr"></div>',
		pageHeader_omrCard                                  :   '<div class="OMRCard4percentage_fr"></div>',
				
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
		
		personalInfo_street									:	'Rue',
		personalInfo_court									:	'Ruelle',
		personalInfo_Alley									:	'Allée',
		personalInfo_Boulevard								:	'Boulevard',
		personalInfo_Drive									:	'Promenade',
		personalInfo_Crescent								:	'Croissant',
		personalInfo_Avenue									:	'Avenue',
		personalInfo_Way									:	'Voie',
		personalInfo_Line									:	'Rang',
		personalInfo_Terrace								:	'Terrasse',
		personalInfo_Blank									:	' ',
		
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
		chooseProduct_Title1_OMP							:	"<span class=\"overviewNSTableRedText\">Remplissez un formulaire de demande de carte Mastercard<sup>MD</sup> Avantage Essence<sup>MD</sup>&#46;</span>",
		chooseProduct_Title1_OMR							:	"<span class=\"overviewNSTableRedText\">Faites une demande de carte Mastercard<sup>MD</sup> Avantage Remise<sup>MD</sup>&#46;</span>",
		chooseProduct_Title2								:	"Il vous faudra de trois à cinq minutes pour remplir le formulaire de demande de carte. Si votre demande est approuvée, vous en serez avisé par courrier dans les sept à dix jours ouvrables suivants.",
		chooseProduct_Title2_OMP_OMR						:	"Il vous faudra de trois à cinq minutes pour remplir la présente demande de carte. Si votre demande est approuvée, vous en serez avisé par courrier dans les sept à dix jours ouvrables suivants.",
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
		overview_pageCompareCards_table_td2                 :   "<b>Obtenez 4 &#37;</b> en Argent Canadian Tire<span class=\"superscripts\"><sup>MD</sup></span> sur le montant de vos achats quotidiens chez Canadian Tire, Sport Chek<span class=\"superscripts\"><sup>MD</sup></span>, Mark’s<span class=\"superscripts\"><sup>MD</sup></span>/ L'Équipeur<span class=\"superscripts\"><sup>MD</sup></span>,Atmosphere, Sports Experts,  Sports Rousseau, Hockey Expert, L’Entrepôt du Hockey et PartSource<span class=\"superscripts\"><sup>MD</sup></span> .",
		overview_pageCompareCards_table_td3                 :   "<b>Obtenez</b> de l’Argent Canadian Tire dans les postes Gas+/Essence+ et dans les stations-service Husky participants<sup>2</sup>.",
		overview_pageCompareCards_table_td4                 :   "<b>Obtenez</b> de l’Argent Canadian Tire partout ailleurs où vous magasinez<sup>1</sup>.",
		overview_pageCompareCards_table_td5                 :   "<b>Échangez</b> votre Argent Canadian Tire chez Canadian Tire et dans certains magasins partenaires Sport Chek et Mark's<sup>1</sup>.",
		overview_pageCompareCards_table_td6                 :   "<b>Bénéficiez du programme de financement<sup>*</sup></b> en magasin et en ligne chez Canadian Tire, Sport Check, Sports Rousseau, Hockey Expert, L’Entrepôt du Hockey et dans les magasins Mark’s et l’Équipeur et Sports Experts participants.",
		overview_pageCompareCards_table_td7                 :   "<b>Obtenez</b> 3 &#37; en Argent Canadian Tire sur les premiers 12 000 &#36; d’achats admissibles en épicerie.<sup>3</sup>",
		overview_pageCompareCards_table_td8                 :   "Assistance routière<sup> &#94;</sup>",
		overview_pageCompareCards_table_td9                 :   "Garantie prolongée<sup>&dagger;</sup>",
		overview_pageCompareCards_table_td10                :   "Assurance achats<sup>&dagger;</sup>",
		overview_pageCompareCards_table_td11                :   "Assurance collision/dommages pour les véhicules de location<sup>&dagger;</sup>",
		overview_pageCompareCards_table_td12                :   "Service de conciergerie disponible en tout temps&#46;<sup>&dagger;</sup>",
		overview_pageCompareCards_table_td13                :   "Un service client amélioré &#40;mise en file d’attente prioritaire&#41;",
		
		overview_page_Title_lets_get_started                :   "Commençons !",   
		overview_page_Title_it_will_take_few_min            :   "Remplir cette demande ne prendra que quelques minutes.",
		
		overview_page_Title_lets_get_started_OMP_CARD       :   "Ça commence ici!",   
		overview_page_Title_it_will_take_few_min_OMP_CARD   :   "Cette demande ne prend que quelques minutes à remplir.",
		
		overview_Title_Ecomm								:	"Veuillez prendre connaissance des renseignements ci-dessous, choisissez la carte qui correspond le mieux à vos besoins puis cliquez sur Commencer pour remplir la demande de carte.",
		overview_Title_DEC									:	"Veuillez prendre connaissance des renseignements ci-dessous, puis cliquez sur Commencer pour remplir la demande de carte.",
		overview_Title_DEC_OMP_OMR							:	"Veuillez prendre connaissance des renseignements ci-dessous, puis cliquez sur Commencer pour remplir la demande de carte.",
		overview_PrintDownload_LinkText						:	"<a href='https://canadiantire.scene7.com/is/content/CanadianTire/ctfs/documents/Cost_of_Borrowing_Disclosure_FRC.pdf' target='_blank'>Imprimez ou téléchargez la version PDF de la déclaration.</a>",
		
		overview_PrintDownload_LinkText						:	"<a href='https://canadiantire.scene7.com/is/content/CanadianTire/ctfs/documents/Cost_of_Borrowing_Disclosure_FRC.pdf' target='_blank'>Imprimez ou téléchargez la version PDF de la déclaration.</a>",
		overview_PrintDownload_LinkText_OMP					:	"<a href='https://canadiantire.scene7.com/is/content/CanadianTire/ctfs/documents/Cost_of_Borrowing_Disclosure_FRC.pdf' target='_blank'>Imprimer ou télécharger la version PDF de cette déclaration.</a>",
		
		overview_AmIEligibleTable_Mastercard			  	:	"<b>Mastercard<sup>MD</sup> Triangle<sup>MC</sup><b>",
		overview_AmIEligibleTable_World_elite_card          :   "<b>World Elite Mastercard<sup>MD</sup> Triangle<sup>MC</sup><b>",
		
		overview_compareCards_Masterdard			  	:	"Mastercard<sup>MD</sup><br> Triangle<sup>MC</sup>",
		overview_CompareCards_World_elite_card          :   "World Elite <br>Mastercard<sup>MD</sup> Triangle<sup>MC</sup>",
		
		overview_ChooseCard_Masterdard			  	        :	"Mastercard<sup>MD</sup> Triangle<sup>MC</sup>",
		overview_ChooseCard_World_elite_card          		:   "World Elite Mastercard<sup>MD</sup> Triangle<sup>MC</sup>",
		overview_AmIEligibleTable_Do_you_alreadyHave        :   "Avez-vous déjà une carte Mastercard<sup>MD</sup> Options<sup>MD</sup> ? La carte Mastercard Options a été rebaptisée la carte Mastercard Triangle. Vous recevrez donc une nouvelle carte Mastercard Triangle lorsque le moment sera venu de remplacer votre carte.",
		overview_ChooseCard_Note          		            :   "Veuillez noter que la carte World Elite Mastercard<sup>MD</sup> Triangle<sup>MC</sup> peut imposer aux commerçants des frais de transaction plus élevés.",
		overview_TopTableLeftColTitle						:	"Quelle carte puis-je demander?",
		overview_TopTableLeftCol1							:	"Vous devez résider au Canada",
		overview_TopTableLeftCol2							:	"Vous devez avoir atteint l'âge de la majorité dans votre province de résidence",
		overview_TopTableLeftCol3							:	"Vous devez occuper un emploi ou être à la retraite ",
		overview_TopTableLeftCol4							:	"Votre revenu personnel s'élève à au moins 80 000 $",
		overview_TopTableLeftCol5							:	"Vous devez avoir une excellente cote de crédit",

		overview_TopTableRightColTitle						:	"De quoi ai-je besoin?",
		overview_TopTableLeftColTitle_DEC                   :   "Suis-je admissible?",
		overview_TopTableLeftColTitle_OMP_CARD              :   "Suis-je admissible?  ",
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
		
		overview_CostOfCreditDisclosure_Row4				:	"Opérations de change",
		overview_CostOfCreditDisclosure_Row4_1				:	"Toutes les transactions effectuées dans une monnaie étrangère seront converties en dollars canadiens au taux de conversion Mastercard courant majoré de <span class='fontStyleForBoldTextInOverWievPage'>2,5</span> % (dans le cas de débits portés à votre compte) ou réduit de <span class='fontStyleForBoldTextInOverWievPage'>2,5</span> % (dans le cas de crédits inscrits à votre compte).",
		
		overview_CostOfCreditDisclosure_Row5				:	"Frais annuels",
		overview_CostOfCreditDisclosure_Row5_1				:	"Aucuns",
		
		overview_CostOfCreditDisclosure_Row6				:	"Autres frais",
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
		overview_CostOfCreditDisclosure_Row6_4_3			:	" <strong>10 $</strong> ",
		overview_CostOfCreditDisclosure_Row6_4_4			:	" ou à votre solde, selon le montant le moins élevé – ",
		overview_CostOfCreditDisclosure_Row6_4_5			:	"Imputés le dernier jour d'une période de facturation lorsque le compte comporte un solde créditeur et que le compte a été inactif au cours des <span class='fontStyleForBoldTextInOverWievPage'>12</span> périodes de facturation précédentes.",
		
		overview_LostOrStolenCards_Title					:	"Cartes perdues ou volées",
		overview_LostOrStolenCards_Text						:	"Vous devez aviser la Banque Canadian Tire dès que vous croyez que votre carte est perdue ou volée en téléphonant au <span class=\"nowrap\">1 800 459-6415</span>. Vous ne serez pas tenu responsable de l'utilisation non autorisée de votre carte si celle-ci est perdue ou volée, sauf si elle est utilisée avec un numéro d'identification personnel pour obtenir une avance de fonds à un guichet automatique bancaire ou pour effectuer un achat, auquel cas vous demeurerez responsable de la totalité du montant obtenu à chaque utilisation non autorisée jusqu'au moment où vous nous aurez avisés.",
		
		overview_CustomerServiceDepartment_Title 			:	"Service à la clientèle",
		overview_CustomerServiceDepartment_Text1 			:	"Au Canada : <b>1 800 459-6415</b>",
		overview_CustomerServiceDepartment_Text2 			:	"Ailleurs qu'au Canada : 905 735-7256",
		overview_CustomerServiceDepartment_Text3 			:	"La carte Mastercard<sup>MD</sup> Triangle<sup>MC</sup> et la carte World Elite Mastercard<sup>MD</sup> Triangle<sup>MC</sup> sont émise par la Banque Canadian Tire en vertu d'une licence accordée par Mastercard International. Si votre demande est approuvée, votre carte sera expédiée dans les six (6) semaines suivant la demande. L'adresse de la Banque Canadian Tire est la suivante :",
		
		
		overview_CustomerServiceDepartment_Text3_DEC_OMX 			:	"Mastercard<sup>MD</sup> Triangle<sup>MC</sup> est émise par la Banque Canadian Tire en vertu d'une licence accordée par Mastercard International. Si votre demande est approuvée, votre carte sera expédiée dans les six (6) semaines suivant la demande. L'adresse de la Banque Canadian Tire et des BCT est la suivante :",
		overview_CustomerServiceDepartment_Text3_DEC_OMZ 			:	"World Elite Mastercard<sup>MD</sup> Triangle<sup>MC</sup> est émise par la Banque Canadian Tire en vertu d'une licence accordée par Mastercard International. Si votre demande est approuvée, votre carte sera expédiée dans les six (6) semaines suivant la demande. L'adresse de la Banque Canadian Tire et des BCT est la suivante :",
		
		overview_CustomerServiceDepartment_PleaseNoteOMX_only       :  "Veuillez noter que la carte World Elite Mastercard<sup>MD</sup> Triangle<sup>MC</sup> peut imposer aux commerçants des frais de transaction plus élevés.",
		// US4997
		
		// OMP card 
		overview_CustomerServiceDepartment_OMP_CARD_Text1 			:	"Au Canada : <b>1-800-459-6415</b>",
		overview_CustomerServiceDepartment_OMP_CARD_Text2 			:	"ailleurs qu’au Canada (à frais virés) au 905 735-7256 ",
		overview_CustomerServiceDepartment_OMP_CARD_Text3 			:	"La carte Mastercard<sup>MD</sup> Avantage Essence<sup>MD</sup> est émise par la Banque Canadian Tire (la « BCT ») en vertu d’une licence accordée par Mastercard International. Si votre demande est approuvée, votre carte sera expédiée dans les 10 jours suivant la demande.",
		overview_CustomerServiceDepartment_OMR_CARD_Text3 			:	"La carte Mastercard<sup>MD</sup> Avantage Remise<sup>MD</sup> est émise par la Banque Canadian Tire (la « BCT ») en vertu d’une licence accordée par Mastercard International. Si votre demande est approuvée, votre carte sera expédiée dans les 10 jours suivant la demande.",
		overview_CustomerServiceDepartment_OMP_CARD_Text3_address 	:	"Adresse de la Banque Canadian Tire :",
		
		
		overview_CustomerServiceDepartment_Text4 			:	"C. P. 2000",
		overview_CustomerServiceDepartment_Text5 			:	"Welland (Ontario) L3B 5S3",
		overview_CustomerServiceDepartment_Text6 			:	"Télécopieur : 1-888-728-5822.",
		
		overview_PromoCode									:	"Code promotionnel",
		overview_Province									:	"Province",
		
		overview_SecurityMessaging_Title					:	"Message concernant la sécurité",
		overview_SecurityMessaging_Title_OMP				:	"Message sur la sécurité",
		overview_SecurityMessaging_Content					:	"Chez Canadian Tire, nous attachons une grande importance à la sécurité de vos renseignements personnels. Prenez connaissance des mesures mises en œuvre pour protéger les renseignements personnels de nos clients.",
		overview_SecurityMessaging_Content_OMP				:	"Canadian Tire accorde la plus grande importance à la sécurité de vos renseignements personnels. Prenez connaissance des mesures mises en œuvre pour protéger les renseignements personnels de nos clients.",
		overview_SecurityMessaging_MoreInfo					:	"Pour obtenir de plus amples renseignements, consultez notre",
		overview_SecurityMessaging_MoreInfo_OMP				:	"Pour plus d’informations, consultez notre",
		overview_SecurityMessaging_PrivacyCharter			:	"<a href='https://www.ctfs.com/content/ctfs/fr/legal_privacy/privacy_charter.html' target='_blank'>politique en matière de protection des renseignements personnels.</a>",
		overview_SecurityMessaging_PrivacyCharter_OMP		:	"<a href='https://www.ctfs.com/content/ctfs/fr/legal_privacy/privacy_charter.html' target='_blank'>politique en matière de protection des renseignements personnels.</a>",
		
		overview_AutoTimeout_Title							:	"Fin de session automatique",
		overview_AutoTimeout_Title_OMP						:	"Fin de session automatique",
		overview_AutoTimeout_Content						:	"Pour votre protection, votre session expirera automatiquement au bout de 30 minutes d’activité ou 10 minutes d’inactivité.",
		overview_AutoTimeout_Content_OMP					:	"Pour votre protection, la session sera fermée automatiquement après 30 minutes ou 10 minutes d’inactivité.",
		
		overview_startApplication_Button_Label				:	"Commencer",
		overview_RequiredField_Lable						:	"Indique un champ obligatoire",
		
		overview_footnoteContentText1						:	"Primes octroyées sous forme d'« Argent » Canadian Tire avec la Carte<span class=\"superscriptsFootnote\"><sup>MD</sup></span> ou points Avantage « Argent » Canadian Tire<span class=\"superscriptsFootnote\"><sup>MD</sup></span>, selon le cas. Sous réserve des modalités et des restrictions visant l’octroi et l’échange des primes. Détails en magasin ou sur le page Programme de primes en « Argent » Canadian Tire à l’adresse",
		overview_footnoteContentText1Extended				:	"Primes octroyées sous forme d’« Argent » Canadian Tire avec la Carte<span class=\"superscriptsFootnote\"><sup>MD</sup></span>. Sous réserve des modalités et des restrictions visant l’octroi et l’échange des primes.Détails en magasin ou sur la page Programme de primes en « Argent » Canadian Tire. Les titulaires de la carte Mastercard Options en Nouvelle-Écosse participent à un autre programme de primes; veuillez vous rendre à l’adresse ",
		overview_footnoteContentText1Link					:	"<a href='https://www.ctfs.com/lang/fr/Products/CreditCards/OptionsMasterCard/CTMoneyRewards/' target='_blank'>triangle.com/act.</a>",
		overview_footnoteContentText2						:	" À la condition que votre compte soit en règle et que l’achat soit admissible à l’échange de primes",	
		overview_footnoteContentTextLinkBack				:	"retour",
		overview_footnoteContentText4						:	"<span class=\"superscriptsFootnote\"><sup>MD</sup></span>/<span class=\"superscriptsFootnote\"><sup>MC</sup></span> Sauf indication cont raire, toutes les marques de commerce sont la propriété de La Société Canadian Tire Limitée et sont utilisées sous licence.",
		overview_footnoteContentText5						:	"<span class=\"superscriptsFootnote\"><sup>MD</sup></span>/<span class=\"superscriptsFootnote\"><sup>MC</sup></span> Mastercard et la marque figurative de Mastercard sont des marques de commerce deposees et PayPass est une marque de commerce de Mastercard International Incorporated.",
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
		overview_NS_TableLeftColText4						:	" et à la carte Mastercard Options, Canadian Tire vous récompense encore plus.",
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
		overview_NS_TableLeftColText18						:	" dépensé dans les magasins Canadian Tire lorsque vous utilisez à la fois votre carte Mastercard Options et votre carte Avantage « Argent » Canadian Tire",
		overview_NS_TableLeftColText19						:	"Multiplicateur de points réservé",
		overview_NS_TableLeftColText20						:	" aux membres lorsque vous utilisez les deux cartes pour acheter de l'essence dans un poste d'essence Canadian Tire",
		overview_NS_TableLeftColText21						:	"Accumulez des points dans  avec votre carte Mastercard Options",
		overview_NS_TableLeftColText22						:	" tous les magasins où vous réglez vos achats",
		overview_NS_TableLeftColText23						:	" avec votre carte Mastercard Options.",
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
		overview_NS_TableLeftColText38						:	" dans les millions de commerces du réseau Mastercard",
		overview_NS_TableLeftColText39						:	"Avances de fonds",
		overview_NS_TableLeftColText40						:	" à n'importe quel guichet automatique affichant les logos Mastercard",
		overview_NS_TableLeftColText41						:	" ou Cirrus",
		overview_NS_TableLeftColText42						:	".",
		overview_NS_TableLeftColText43						:	"Voir les règlements du concours",
		overview_NS_TableLeftColText44						:	"<span class=\"superscripts\"><sup>MC</sup></span>",
		
		overview_NS_SecurityMessaging_Content				:	"Chez Canadian Tire, nous attachons la plus grande importance à la sécurité de vos renseignements personnels. Prenez connaissance des mesures mises en oeuvre pour protéger les renseignements personnels de nos clients.",
		
		overview_NS_RightBannerText1						:	"Obtenez jusqu’à 2 000 points*",
		overview_NS_RightBannerText2						:	"lorsque vous utilisez votre carte Mastercard Options",
		
		overview_NS_FootnotesText1							:	"<sup>1</sup> Sous reserve de certaines conditions. À l'exception des cartes de parc de véhicules. Pour obtenir de plus amples renseignements sur le programme, rendez-vous à l’adresse",
		overview_NS_FootnotesText2							:	" avantageargent.com",
		overview_NS_FootnotesText3							:	" .",
		overview_NS_FootnotesText4							:	" Frais d'avances de fonds : 4 $. Des frais d'intérêt sont imputés sur les avances de fonds à compter de la date d'obtention de l'avance, et ce, jusqu'à la date du remboursement de celle-ci et de tous les intérêts courus.",
		overview_NS_FootnotesText5							:	"<span class=\"superscriptsFootnote\"><sup>MD</sup></span>/<span class=\"superscriptsFootnote\"><sup>MC</sup></span> Le logo des Services Financiers Canadian Tire et Options Canadian Tire sont des marques de commerce déposées et Avantage « Argent » Canadian Tire est une marque de commerce de La Société Canadian Tire Limitée et sont utilisées sous licence.",
		overview_NS_FootnotesText6							:	"<span class=\"superscriptsFootnote\"><sup>MD</sup></span>/<span class=\"superscriptsFootnote\"><sup>MC</sup></span> Mastercard, la marque figurative de Mastercard et ",
		overview_NS_FootnotesText7							:	" sont des marques de commerce déposées de Mastercard International Incorporated.",
		overview_NS_FootnotesText8							:	"* Le concours se déroule du 24 février 2012 au 31 décembre 2013. Pour participer, faites une demande de carte Mastercard Options. Quatre-vingt-cinq pour cent (85 %) des bons imprimés dans le cadre du concours valent cinq cents (500) points Avantage « Argent » Canadian Tire<span class=\"superscriptsFootnote\"><sup>MC</sup></span> (valeur au détail de 5 $), dix pour cent (10 %) des bons imprimés dans le cadre du concours valent mille (1 000) points Avantage « Argent » Canadian Tire<span class=\"superscriptsFootnote\"><sup>MC</sup></span> (valeur au détail de 10 $), et cinq pour cent (5 %) des bons imprimés dans le cadre du concours valent deux mille (2 000) points Avantage « Argent » Canadian Tire<span class=\"superscriptsFootnote\"><sup>MC</sup></span> (valeur au détail de 20 $). Le concours sadresse uniquement aux résidents canadiens qui ont atteint leur majorité. Vous devez faire un achat avec votre nouvelle carte Mastercard Options avant la date déchéance du coupon afin de vous prévaloir de loffre. Vous devrez également répondre correctement à une question. Pour obtenir le règlement complet du concours, consultez un représentant des cartes de crédit Canadian Tire ou le site ctfs.com/fr-ncbpc",
		
		overview_NS_moneyPlusOMCImage						:	'<a href="#" id="moneyPlusOMCImage" class="moneyPlusOMCImageBlock_fr"></a>',

		//--------------------------------------------- </old> ----------------------------------------------------
		
		overview_NS_LeftProgramAlertText0					:   "Voici une nouvelle réjouissante!",
		overview_NS_LeftProgramSidebarText					:   "UNE FAÇON PLUS RAPIDE D’OBTENIR DE L’« ARGENT » CANADIAN TIRE",
		overview_NS_LeftProgramAlertText					:	"Le programme de primes auquel participe la carte Mastercard<span class=\"superscriptsFootnote\"><sup>MD</sup></span> Options<span class=\"superscriptsFootnote\"><sup>MD</sup></span> de Canadian Tire change",
		overview_NS_LeftHeadingText2						:   "Si vous faites la demande d’une carte Mastercard Options ailleurs qu’en Nouvelle-Écosse :",
		overview_NS_TableLeftColTxt4						:   "Le programme de primes en « Argent » Canadian Tire associé à votre carte Mastercard<span class=\"superscriptsFootnote\"><sup>MD</sup></span> Options<span class=\"superscriptsFootnote\"><sup>MD</sup></span> de Canadian Tire sera remplacé le 28 octobre prochain par le programme Mon « Argent » Canadian Tire<span class=\"superscriptsFootnote\"><sup>MC</sup></span>.",
		overview_NS_TableLeftColTxt5						:   "Au lieu de primes en « Argent » Canadian Tire avec la Carte<span class=\"superscriptsFootnote\"><sup>MD</sup></span>, vous obtiendrez désormais de l’« Argent » Canadian Tire.",
		overview_NS_LeftHeadingText1	    				:	"Si vous faites la demande d’une carte Mastercard Options en Nouvelle-Écosse :",
		overview_NS_TableLeftColTxt1						:   "Le programme Avantage « Argent » Canadian Tire<span class=\"superscriptsFootnote\"><sup>MD</sup></span> deviendra le programme Mon « Argent » Canadian Tire<span class=\"superscriptsFootnote\"><sup>MC</sup></span> le 10 octobre",
		overview_NS_TableLeftColTxt2						:   "Accumulez maintenant de l’ « Argent » Canadian Tire<span class=\"superscriptsFootnote\"><sup>MD</sup></span> au lieu de points Avantage « Argent » Canadian Tire dans nos magasins et sur le site canadiantire.ca lorsque vous achetez des articles admissibles.",
		overview_NS_TableLeftColTxt3						:   "Remarque : Le taux auquel vous obtiendrez de l’« Argent » Canadian Tire est différent de celui auquel vous accumulez des points Avantage « Argent »<sup>2</sup>.",
		overview_NS_LeftHeadingText3						:   "Dans le cadre de ce nouveau programme, exclusivement pour vous, en tant que titulaire de carte Mastercard Options :",
		overview_NS_TableLeftColTxt7					    :   "Obtenez 10X les primes en « Argent » Canadian Tire<sup>1</sup> tous les jours aux magasins Canadian Tire, y compris aux centres-autos, aux magasins Partsource<span class=\"superscriptsFootnote\"><sup>MD</sup></span>, Mark’s / L’Équipeur<span class=\"superscriptsFootnote\"><sup>MD</sup></span> et Sport Chek<span class=\"superscriptsFootnote\"><sup>MD 1</sup></span>.",
		overview_NS_TableLeftColTxt8						:   "Obtenez 2X les primes en « Argent » Canadian Tire partout ailleurs où vous magasinez<sup>1</sup>.",
		overview_NS_TableLeftColTxt9						:   "Obtenez de l’« Argent » Canadian Tire dans les postes d’essence Canadian Tire participants<sup>3</sup>.",
		overview_NS_TableLeftColTxt10						:   "C’est facile d’échanger votre « Argent » Canadian Tire – directement à la caisse des magasins Canadian Tire ou en ligne pour les cartes-cadeaux, à l’adresse canadiantire.ca",
		overview_NS_TableLeftColTxt11						:   "Surveillez votre courrier pour en savoir plus!",
							 
		overview_NS_FootnotesTxt1							:   "<sup>1</sup> Les titulaires de carte Mastercard Options de Canadian Tire obtiennent de l’« Argent » Canadian Tire à un taux qui est 10X (ou 2X selon le cas) le taux auquel les autres membres du programme Mon « Argent » Canadian Tire obtiennent de l’« Argent » Canadian Tire lors d’achats effectués par ces membres dans les magasins Canadian Tire (si ces membres payent en argent comptant, avec une carte de débit ou une carte de crédit qui n’est pas liée à ce programme de fidélisation). Le taux offert est exclusif de toute prime, offre promotionnelle ou transaction d’échange.",
		overview_NS_FootnotesTxt2							:   "<sup>2</sup> L’« Argent » Canadian Tire obtenu dans les magasins Canadian Tire ou en ligne à canadiantire.ca est calculé sur le montant avant taxes des achats admissibles et est arrondi au cent le plus proche. Pour connaître les taux actuels, composez le 1-800-226-8473.",
		overview_NS_FootnotesTxt3							:   "<sup>3</sup> Un montant d’achat d’essence minimum peut être requis. Le taux peut varier d’une région à l’autre. Rendez-vous aux postes d’essence locaux pour en savoir plus.",
		overview_NS_FootnotesTxt5							:   "<span class=\"superscriptsFootnote\"><sup>MD</sup></span>/<span class=\"superscriptsFootnote\"><sup>MC</sup></span> Canadian Tire, « Argent » Canadian Tire avec la Carte, Avantage « Argent » Canadian Tire, Options de Canadian Tire, PartSource et le triangle de Canadian Tire sont des marques de commerce déposées et Mon « Argent » Canadian Tire et « Argent » Canadian Tire sont des marques de commerce de La Société Canadian Tire Limitée.",
		overview_NS_FootnotesTxt6						    :   "<span class=\"superscriptsFootnote\"><sup>MD</sup></span>/<span class=\"superscriptsFootnote\"><sup>MC</sup></span> Mastercard et la marque figurative de Mastercard sont des marques de commerce déposées et <i>PayPass</i> est une marque de commerce de Mastercard International Incorporated. ",
		
		 
		
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
		personalInformation_SINHint_OMP_OMR					:	"Le fait de fournir votre NAS nous permet de traiter plus efficacement vos renseignements financiers.",
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
		personalInformation_cardmemberBenefits4				:	"Acceptation partout dans le monde ou la carte Mastercard<span class=\"superscripts\"><sup>MD</sup></span> est acceptée",
		personalInformation_cardmemberBenefits5				:	"Avance de fonds",
		
		personalInformation_AboutYourself					:	"<b>Renseignements personnels</b>",
		personalInformation_AboutYourself_OMP_OMR			:	"<b>Mes renseignements personnels</b>",
		personalInformation_AboutYourself_OMP				:	"<b>Renseignements personnels</b>",
		personalInformation_Asterix							:	"*",
		personalInformation_requiredField					:	"Indique un champ obligatoire",
		
		personalInformation_TitleField							:	"Titre de civilité",
		personalInformation_TitleField_OMP_OMR					:	"Titre",
		personalInformation_MoneyAdvantageField					:	"Numéro <br>de carte Advantage <br>« Argent »<span class=\"superscripts\"><sup>MC</sup></span> Canadian Tire",
		personalInformation_MoneyAdvantage_MessageField	    	:	"Veuillez entrer votre numéro de compte Avantage « Argent »<span class=\"superscripts\"><sup>MC</sup></span> Canadian Tire si vous êtes déjà membre du programme. Les points Avantage « Argent » Canadian Tire que vous obtiendrez avec la carte de crédit pour laquelle vous remplissez une demande seront crédités au compte de cette carte, si votre demande est approuvée. Un compte Avantage « Argent » Canadian Tire sera ouvert à votre nom si vous laissez ce champ vide",
		personalInformation_NameField							:	"Nom",
		personalInformation_FirstName							:	"Prénom",
		personalInformation_Initial								:	"Initiale",
		personalInformation_LastName							:	"Nom de famille",
		personalInformation_DateOfBirth							:	"Date de naissance",
		personalInformation_EmailAddress						:	"Adresse électronique",
		personalInformation_EmailAddress_OMP_OMR				:	"Adresse de courriel",
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
		
		personalInformation_SocialInsurance						:	"Numéro d'assurance sociale",
		personalInformation_Address								:	"Adresse",
		personalInformation_StreetName							:	"Rue",
		personalInformation_StreetNumber						:	"Numéro",
		personalInformation_StreetType							:	'Type de rue',
		personalInformation_Suite								:	"Numéro d'app. / bureau",
		personalInformation_Suite_OMP_OMR						:	"Numéro d'app/bureau",
		personalInformation_City								:	"Ville",
		personalInformation_Province							:	"Province",
		personalInformation_PostalCode							:	"Code postal",
		personalInformation_HousingInformation					:	"Renseignements sur l'habitation",
		personalInformation_ResidentialStatus					:	"Statut de résidence",
		personalInformation_MonthlyHousingPayment				:	"Hypothèque/Loyer mensuel",
		personalInformation_MonthlyHousingPayment1				:	",00 $ / mois",
		personalInformation_AddressSince						:	"À cette adresse depuis", // <br> tag is for proper locating in the table cell
		
		personalInformation_EmploymentInformation				:	"<b>Renseignements sur l'emploi</b>",
		personalInformation_EmploymentInformation_OMP_OMR		:	"<b>Renseignements professionnels</b>",
		personalInformation_EmploymentType_OMP_OMR				:	"Type d’emploi",
		personalInformation_EmploymentType						:	"Situation d'emploi",
		personalInformation_Employer							:	"Employeur",
		personalInformation_JobTitle							:	"Catégorie d'emploi",
		personalInformation_JobDescription						:	"Titre du poste",
		// US3622
		personalInformation_JobDescription_Other				:	"Titre du poste (Autre)",
		personalInformation_EmployerSince						:	"Avec cet employeur depuis",
		personalInformation_EmployerSince_OMP_OMR				:	"Avec cet employeur depuis le",
		
		personalInformation_FinancialInformation				:	"<b>Renseignements financiers</b>",
		// US3961
		// personalInformation_GrossAnnualIncome					:	"Revenu annuel brut", // Old
		personalInformation_GrossAnnualIncome					:	"Revenu Annuel Personnel Brut",
		personalInformation_GrossAnnualHouseholdIncome			:	"Revenu Annuel Brut Du Ménage",
		personalInformation_GrossAnnualIncome_OMP_OMR			:	"Revenu personnel annuel brut",
		personalInformation_GrossAnnualHouseholdIncome_OMP_OMR	:	"Revenu du ménage annuel brut",
		personalInformation_DOB_16YearsError                    :   "Vous devez être âgé de 17 ans ou plus pour faire une demande",
		
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
		
		// --------------US4997 STARTS --------------------
		personalInformation_ApplyFor_OMP_CARD_OIC			:	"Vous présentez une demande pour une carte Mastercard<span class=\"superscriptsHeader\"><sup>MD</sup></span>  Avantage Essence<span class=\"superscriptsHeader\"><sup>MD</sup></span>",
		// --------------US4997 ENDS   --------------------
		
		// --------------US4997 ENDS   --------------------
		personalInformation_ApplyFor_OMR_CARD_OIC			:	"Vous présentez une demande pour une carte Mastercard<span class=\"superscriptsHeader\"><sup>MD</sup></span> Avantage Remise<span class=\"superscriptsHeader\"><sup>MD</sup></span>",
		personalInformation_ApplyFor_OMR_CARD_OIC_personalInfo	:	"Vous demandez la carte Mastercard<span class=\"superscriptsHeader\"><sup>MD</sup></span> Avantage Remise<span class=\"superscriptsHeader\"><sup>MD</sup></span>",
		overview_AmIEligibleTable_Masterdard			  	    :	"Mastercard<sup>MD</sup> Triangle<sup>MC</sup> ",
		overview_AmIEligibleTable_World_elite_card          	:   "World Elite Mastercard<sup>MD</sup> Triangle<sup>MC</sup> ",
		
		overview_AmIEligibleTable_OMP_CARD                  :  "<b>Mastercard<sup>MD</sup> Avantage Essence<sup>MD</sup></b>",
		overview_AmIEligibleTable_OMR_CARD                  :  "<b>Carte Mastercard<sup>MD</sup> Avantage Remise<sup>MD</sup></b>",
		
		overview_OMP_CARD_TopTableLeftCol1					:	"Vous devez être résident canadien",
		overview_OMP_CARD_TopTableLeftCol2					:	"Vous devez avoir atteint l’âge de la majorité dans votre province de résidence",
		overview_OMP_CARD_TopTableLeftCol3					:	"Vous exercez une activité professionnelle ou être à la retraite",
		
		overview_OMP_CARD_TopTableRightColTitle			    :	"Que dois-je faire?",
		overview_OMP_CARD_TopTableRightCol1                 :   "Adresse précédente (si moins de deux ans à l’adresse actuelle)",
		overview_OMP_CARD_TopTableRightCol2                 :   "Revenu annuel brut",
		overview_OMP_CARD_TopTableRightCol3                 :   "Nom et adresse de l’employeur actuel",
		
		
		overview_OMR_CARD_TopTableLeftCol1					:	"Vous devez résider au Canada",
		overview_OMR_CARD_TopTableLeftCol2					:	"Vous devez avoir atteint l’âge de la majorité dans votre province de résidence",
		overview_OMR_CARD_TopTableLeftCol3					:	"Vous devez occuper un emploi ou être à la retraite",
		
		overview_OMR_CARD_TopTableRightCol1                 :   "Adresse précédente (si moins de deux ans à l’adresse actuelle)",
		overview_OMR_CARD_TopTableRightCol2                 :   "Revenu annuel",
		residentialStatus_Student_Houseing                  :   "Logement étudiant",
		overview_OMR_CARD_TopTableRightCol3                 :   "Nom et adresse de l’employeur actuel",
		
		
		
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
		personalInformation_StreetType_DropDown						:	'<select class="fieldValuesSelectField addressStreetTypeField" id="personalInformation_StreetType_DropDown"/>',
		personalInformation_PreviousStreetType_DropDown				:	'<select class="fieldValuesSelectField addressPreviousStreetTypeField" id="personalInformation_PreviousStreetType_DropDown"/>',
		additionalInformation_SuppStreetType_DropDown				:	'<select class="fieldValuesSelectField addressSuppStreetTypeField" id="additionalInformation_SuppStreetType_DropDown"/>',
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
		additionalInformation_GetSuplementaryCard_OMP_OMR		:	"<b>Obtenez une carte additionnelle</b>",
		additionalInformation_GetSuplementaryCard				:	"<b>Obtenez une carte supplémentaire</b>",
		additionalInformation_Asterix							:	"*",
		additionalInformation_requiredField						:	"Indique un champ obligatoire",
		
		additionalInformation_TitleField						:	"Titre de civilité",
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
		additionalInformation_Suite								:	"Numéro d'app/bureau",
		additionalInformation_City								:	"Ville",
		additionalInformation_Province							:	"Province",
		additionalInformation_PostalCode						:	"Code postal",
		additionalInformation_SameAddressAsPrimaryCardholder	:	"L’adresse est-elle identique à celle du titulaire de carte principal ?",
		additionalInformation_SameAddresYes						:	"Oui",
		additionalInformation_SameAddresNo						:	"Non",
		additionalInformation_OptionalInsurance					:	"Assurance facultative",
		additionalInformation_OptionalProducts					:	"<b>ADHÉSION À DES PRODUITS FACULTATIFS<sup>&#8224;&#8224;</sup></b>",
		additionalInformation_AuthorizeSupplementaryCardmember	:	"&#44; je désire obtenir une carte additionnelle sur ce compte, sans frais&#33;",
		additionalInformation_AuthorizeSupplementaryCardmember_Yes	:	"&nbsp;&#33; Je désire autoriser une personne à détenir une carte supplémentaire sur ce compte et vous demande d’émettre une carte supplémentaire à son nom, SANS FRAIS.",
		additionalInformation_AuthorizeSupplementaryCardmember_No	:	"&nbsp;- Je désire autoriser une personne à détenir une carte supplémentaire sur ce compte et vous demande d’émettre une carte supplémentaire à son nom, SANS FRAIS.",
		additionalInformation_AuthorizeSupplementaryCardmember_No_OMP	:"&#44; je ne veux pas ajouter gratuitement un titulaire supplémentaire à ce compte.",
		additionalInformation_AuthorizeSupplementaryCardmember_No_OMR	:"&#33; Je ne veux pas ajouter gratuitement un titulaire supplémentaire à ce compte.",
		
		
		//US5272  
		additionalInformation_rewardProgramagreement_OMX_OMZ  :    "J’accepte les modalités du programme Récompenses Triangle.",
		additionalInformation_rewardProgramagreement_OMP      :    "J'accepte les modalités du programme Avantage Essence.",
		additionalInformation_rewardProgramagreement_OMR      :    "J’accepte les modalités du programme Avantage Remise.",
		additionalInformation_scrollbar_tiitle_OMX_OMZ            :    "Programme Récompenses Triangle<sup>MC</sup>",
		additionalInformation_scrollbar_tiitle_OMP                :    "Programme de primes de la Mastercard<sup>MD</sup> Avantage Essence<sup>MD</sup>",
		additionalInformation_scrollbar_tiitle_OMR                :    "PROGRAMME DE PRIMES EN ARGENT DE LA MASTERCARD<sup>MD</sup>  AVANTAGE REMISE<sup>MC</sup>",
		additionalInformation_PDFDownload_OMX_OMZ                 :    "<a href='http://s7d5.scene7.com/is/content/CanadianTire/ctfs/documents/Triangle_Rewards_Terms_Conditions_FR.pdf' target='_blank'><u>Imprimer ou télécharger la version PDF des modalités du programme de récompenses Mastercard Avantage Remise</u></a>",
		additionalInformation_PDFDownload_OMP                 	  :    "<a href='http://s7d5.scene7.com/is/content/CanadianTire/ctfs/documents/Gas_Terms_Conditions_FR.pdf' target='_blank'><u>Imprimer ou télécharger la version PDF des modalités du programme de récompenses  Mastercard Avantage Essence</u></a>",
		additionalInformation_PDFDownload_OMR                     :    "<a href='http://s7d5.scene7.com/is/content/CanadianTire/ctfs/documents/Cash_Terms_Conditions_FR.pdf' target='_blank'><u>Imprimer ou télécharger la version PDF des modalités du programme de récompenses Mastercard Avantage Remise</u></a>",
		// Old code
		// additionalInformation_OptionalInsurance_CreditProtector_enroll 	:	"- Je désire adhérer à Couverture-crédit<span class=\"superscripts\"><sup>MD</sup></span><sup>**</sup>/Couverture-crédit – Âge d’or<span class=\"superscripts\"><sup>MD</sup></span> <sup>***</sup>",
		additionalInformation_OptionalInsurance_CreditProtector_enroll 	:	"- Je désire adhérer à Assurance Couverture-crédit<span class=\"superscripts\"><sup>MD</sup></span>",
		additionalInformation_OptionalInsurance_IdentityWatch   		:   "- Je veux adhérer au programme Surveillance d’identité Classique<span class=\"superscripts\"><sup>MD</sup></span>",
		additionalInformation_OptionalInsurance_ProtectionAdvantage   	:   "- Je désire adhérer à Avantage Protection de Canadian Tire<span class=\"superscripts\"><sup>MD</sup>",
		additionalInformation_OptionalInsurance_DoNotEnrolMe 			:   "- Je ne veux pas adhérer à l’assurance facultative.",
		
		additionalInformation_OptionalInsurance_CreditProtector_enroll_OMP_OMR 	:	"&#44; je désire adhérer à Couverture-crédit<span class=\"superscripts\"><sup>MD</sup></span>",
		additionalInformation_OptionalInsurance_IdentityWatch_OMP_OMR   		:   "&#44; je désire adhérer à Surveillance d’identité Classique<span class=\"superscripts\"><sup>MD</sup></span>",
		additionalInformation_OptionalInsurance_ProtectionAdvantage_OMP_OMR   	:   "&#44; je désire adhérer à Avantage Protection<span class=\"superscripts\"><sup>MD</sup></span> de Canadian Tire",
		
		
		//additionalInformation_OptionalInsurance_Details			:	"<i>(non disponible pour les résidents de la Saskatchewan)</i><br><ul><li>La prime est de 1,10 $ par tranche de 100 $ du solde mensuel courant, moins toute prime d’assurance impayée, chaque mois où le solde de votre compte est de 10 $ ou plus et est portée à votre compte Mastercard<span class=\"superscripts\"><sup>MD</sup></span> de Canadian Tire<span class=\"superscripts\"><sup>MD</sup></span></li><li>Par exemple, si votre solde était de 200 $ au moment de l’impression de votre relevé, vous ne paieriez que 2,20 $, taxe en sus.</li></ul>",
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
		
		additionalInformation_OptionalInsurance_Details			:	"<i>(non disponible pour les résidents de la Saskatchewan)</i><ul><li>$1.10 per $100* of your monthly statement balance, less any amount of insurance premium charged, in any month with a statement balance of $10 or more charged to the <i>Canadian Tire</i><sup>&reg;</sup> Mastercard<sup>&reg;</sup>.</li></ul><br>For example if your balance is $200 at the time your statement prints you would pay just $2.20 plus applicable taxes.",
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
		additionalInformation_OptionalInsurance_Details14_OMP_OMR		:   "Vous aide à protéger vos renseignements privés et importants, ainsi que ceux de votre famille.",
		additionalInformation_OptionalInsurance_Details14_Bullet1_OMP_OMR	:	"&#45; <b>Assistance en cas de perte ou de vol de cartes</b>",
		additionalInformation_OptionalInsurance_Details14_Bullet2_OMP_OMR	:	"&#45; <b>Sauvegarde des données en ligne</b>",
		additionalInformation_OptionalInsurance_Details14_Bullet3_OMP_OMR	:	"&#45; <b>Service de récompense contre le vol de carte de crédit</b>",
		additionalInformation_OptionalInsurance_Details14_Bullet4_OMP_OMR	:	"&#45; <b>Protection contre la fraude d’identité/Service de surveillance en ligne</b>",
		additionalInformation_OptionalInsurance_Details14_Bullet5_OMP_OMR	:	"&#45; <b>Remboursement d’entretien informatique</b>",
		additionalInformation_OptionalInsurance_Details14_Bullet6_OMP_OMR	:	"&#45; <b>Service de retour de biens Retour<sup>MD</sup></b>",
		additionalInformation_OptionalInsurance_Details14_Bullet7_OMP_OMR	:	"&#45; <b>Frais d’adhésion de 4,99 $**, payable à l’avance tous les mois après votre première transaction effectuée avec votre carte de crédit émise par la Banque Canadian Tire</b>",
		additionalInformation_OptionalInsurance_Details14_1		:	"Si vous adhérez à Surveillance d’identité Classique, l’adhésion entrera en vigueur à compter de la date d’inscription indiquée sur votre lettre de bienvenue. Celle-ci figure dans la trousse de bienvenue que vous devriez recevoir dans un délai de 15 jours suivant l’adhésion.",
		additionalInformation_OptionalInsurance_Details14_2		:   "L’adhésion à Surveillance d’identité Classique est facultative et peut être annulée en tout temps. Si vous annulez dans les 30 premiers jours suivant votre date d’adhésion, la Banque Canadian Tire vous remboursera les frais d’adhésion payés, après votre première transaction effectuée à l’aide de votre carte. Si vous annulez après les 30 premiers jours, l’annulation prendra effet à compter du dernier jour du cycle de facturation en cours ou 30 jours après la réception de l’avis d’annulation, selon la première éventualité. Si vous annulez votre adhésion, vous serez responsable de tous les frais engagés et changements en raison des services offerts par l’intermédiaire d’un fournisseur d’accès Internet ou de leur tiers fournisseur de services.",
		
		additionalInformation_OptionalInsurance_Details15		:   "OUI, JE DÉSIRE ADHÉRER AU(X) PRODUIT(S) FACULTATIF(S) SUIVANT(S) :",
		additionalInformation_OptionalInsurance_Details15_OMP_OMR		:   "OUI, JE DÉSIRE SOUSCRIRE AUX PRODUITS FACULTATIFS SUIVANTS ",
		
		// US4997
		additionalInformation_OptionalInsurance_Details15_NewLine1		:   "Avant de vous inscrire, il est important que vous lisiez et que vous compreniez le Sommaire de la protection ci-dessus, qui décrit les modalités, les avantages, les limitations et les exclusions. ",
		additionalInformation_OptionalInsurance_Details15_NewLine2		:   "En cliquant sur l’une des deux premières cases ci-dessous, je consens et accepte de m’inscrire à l’assurance facultative Couverture-crédit et j’accepte les conditions et les coûts divulgués.",
		
		// US3382
		additionalInformation_OptionalInsurance_Details16		:	"Assurance Couverture-crédit<sup>MD</sup>  (offerte aux titulaires de carte âgés de 18 à 75 ans)",
		additionalInformation_OptionalInsurance_Details16_Bullet1		:	"Cette assurance collective facultative du solde de votre compte de carte de crédit émise par la Banque Canadian Tire peut vous aider à régler votre solde impayé de carte de crédit ou à effectuer des paiements mensuels (jusqu’à concurrence de 20 000 $), au moment où vous et votre famille en avez le plus besoin.",
		additionalInformation_OptionalInsurance_Details16_Bullet2		:	"Avantages de Couverture-crédit :",
		additionalInformation_OptionalInsurance_Details16_Bullet3		:	"&#45; payer une prestation mensuelle correspondant à 5 % du solde impayé d’une carte de crédit émise par la Banque Canadian Tire (excluant les programmes de modalités spéciales de paiement), tel que déterminé à la date du relevé coïncidant avec, ou précédant immédiatement, la date du sinistre, jusqu’à concurrence de 1 000 $ par mois et sous réserve d’une prestation maximale totale de 20 000 $ si vous perdiez involontairement votre emploi ou deveniez totalement invalide*;",
		additionalInformation_OptionalInsurance_Details16_Bullet3_OMP_OMR	:	"&#45; Payer une prestation mensuelle correspondant à 5 % du solde impayé d'une carte de crédit émise par la Banque Canadian Tire (à l’exception des programmes de modalités spéciales de paiement)  à la date du relevé coïncidant avec ou immédiatement avant la date du sinistre, jusqu’à concurrence de 1 000 $ par mois et une prestation totale maximale de 20 000 $, en cas de perte involontaire de votre emploi ou d’invalidité*; et",
		additionalInformation_OptionalInsurance_Details16_Bullet4		:	"&#45; payer le solde impayé de votre carte de crédit émise par la Banque Canadian Tire, sous réserve d’une prestation maximale totale de 20 000 $, si vous ou votre conjoint décédiez, subissiez une mutilation, ou étiez diagnostiqué pour une maladie terminale*.",
		additionalInformation_OptionalInsurance_Details16_Bullet4_OMP_OMR	:	"&#45; Payer le solde impayé de votre carte de crédit émise par la Banque Canadian Tire si vous ou votre conjoint décédez, souffrez d’une mutilation ou d’une maladie en phase terminale*, jusqu’à concurrence de 20 000 $.",
		additionalInformation_OptionalInsurance_Details16_Bullet5		:	"L’Assurance Couverture-crédit coûte 1,10 $ par tranche de 100 $ de votre solde quotidien moyen (moins le montant impayé de tout programme de modalités spéciales de paiement) pour tout mois où le solde quotidien moyen s’établit à 10 $ ou plus. Par exemple, si votre solde quotidien moyen s’établissait à 350 $, vous payeriez seulement 3,85, plus les taxes applicables. À l’âge de 80 ans, le taux de prime est réduit à 0,59 $ par tranche de 100 $ du solde quotidien moyen (moins le montant impayé de tout programme de modalités spéciales de paiement).",
		additionalInformation_OptionalInsurance_Details16_Bullet5_OMP_OMR	:	"La prime de Couverture-crédit est de 1,10 $ par tranche de 100 $‡ de votre solde quotidien moyen, moins le montant de tout programme de modalités spéciales de paiement, chaque mois où le solde quotidien moyen est de 10 $ ou plus. À titre d’exemple, si votre solde quotidien moyen est de 350 $, vous ne payerez que 3,85 $, plus les taxes applicables. À 80 ans, le taux de la prime est réduit à 0,59 $ par tranche de 100 $‡ de votre solde quotidien moyen, moins tout montant impayé au titre d’un programme spécial de paiement.",
		additionalInformation_OptionalInsurance_Details16_Bullet6		:	"L’adhésion à l’Assurance Couverture-crédit n’est pas obligatoire et vous pouvez l’annuler en tout temps. Si vous annulez dans les 45 premiers jours de l’émission du certificat d’assurance, vous recevrez un remboursement intégral de toute prime payée. Si vous adhérez à l’Assurance Couverture-crédit, votre assurance entre en vigueur au moment de votre adhésion. Vous recevrez une trousse de bienvenue pour confirmer votre adhésion. Elle contiendra un certificat d’assurance (les résidents du Québec recevront aussi un guide de distribution) qui renfermera tous les détails de la couverture, comme les définitions, les prestations, les restrictions, les limites et les exclusions, ainsi que les démarches à suivre pour demander une annulation ou pour présenter une demande de règlement.",
		additionalInformation_OptionalInsurance_Details16_Bullet6_OMP_OMR	:	"La souscription à l’assurance Couverture-crédit est facultative et peut être annulée en tout temps. Si vous annulez votre adhésion dans les 45 jours suivant l’émission du certificat d’assurance, nous vous rembourserons intégralement les primes que vous avez payées. Si vous souscrivez à l’assurance Couverture-crédit, votre protection entre en vigueur au moment de votre souscription. Vous recevrez une trousse de bienvenue pour confirmer votre souscription. Celle-ci renferme un certificat d’assurance (ainsi qu’un guide de distribution si vous habitez au Québec) et tous les détails de la couverture, notamment les définitions, les prestations, les limitations, les restrictions, les exclusions ainsi que les renseignements portant sur l’annulation et la demande de règlement.",
		additionalInformation_OptionalInsurance_Details16_Bullet7		:	"Il existe d’autres produits d’assurance sur le marché qui peuvent offrir une protection semblable à celle que procure Couverture-crédit. Vous devriez peut-être vérifier si vous avez déjà une assurance qui offre une couverture similaire.",															
		additionalInformation_OptionalInsurance_Details16_Bullet8		:	"La Banque Canadian Tire a un intérêt financier dans la vente de cette assurance.",
		additionalInformation_OptionalInsurance_Details16_Bullet8_OMP_OMR	:	"La Banque Canadian Tire possède un intérêt financier dans la vente de la présente assurance.",
		additionalInformation_OptionalInsurance_Details16_Bullet9		:	"<sup>*</sup> Consultez votre certificat d’assurance pour connaître les modalités, restrictions, exclusions et limitations. Lorsque vous atteignez l’âge de 80 ans, la protection en cas de décès ou de mutilation devient une protection en cas de décès par accident ou de mutilation par accident avec une réduction de la prime mensuelle.",		
		additionalInformation_OptionalInsurance_Details16_Bullet91		:	"<sup>&Dagger;</sup> Taxes applicables en sus, payable mensuellement.",
		additionalInformation_OptionalInsurance_Details16_Bullet10		:	"Couverture-crédit est une assurance collective souscrite auprès de American Bankers Compagnie d’Assurance Vie de la Floride et de American Bankers Compagnie d’Assurance générale de la Floride. American Bankers Compagnie d’Assurance Vie de la Floride et American Bankers Compagnie d’Assurance générale de la Floride exercent des activités au Canada sous le nom d’Assurant<span class=\"superscripts\"><sup>MD</sup></span>.",
		additionalInformation_OptionalInsurance_Details16_Bullet91_OMP_OMR	:	"<sup>&Dagger;</sup> Plus taxes applicables. Payable mensuellement.",
		additionalInformation_OptionalInsurance_Details16_Bullet10_OMP_OMR	:	"Couverture‐crédit est un produit d’assurance crédit collective offert par la Banque Canadian Tire, et dans lequel elle possède un intérêt financier, pour les cartes de crédit qu’elle émet. Couverture‐crédit est prise en charge par American Bankers Compagnie d’Assurance Vie de la Floride (ABLAC) et American Bankers Compagnie d’Assurance Générale de la Floride (ABIC) en vertu des polices collectives numéros 960913L‐1 et 960913‐1. ABLAC et ABIC ainsi que leurs sociétés affiliées et filiales exercent des activités commerciales au Canada sous le nom de Assurant<span class=\"superscripts\"><sup>&reg;</sup></span>.",
/*		additionalInformation_OptionalInsurance_Details16_Bullet11		:	"<sup>&reg;</sup> Assurant Solutions est une marque de commerce déposée de Assurant, Inc.",
		additionalInformation_OptionalInsurance_Details16_Bullet12		:	"<sup>MD</sup>/<sup>MC</sup> Couverture-crédit est une marque de commerce déposée de la Banque Canadian Tire.",
		additionalInformation_OptionalInsurance_Details16_Bullet13		:	"<sup>MD</sup>/<sup>MC</sup> Sauf indication contraire, toutes les marques de commerce sont la propriété de La Société Canadian Tire Limitée et sont utilisées.",
*/
		additionalInformation_OptionalProducts_Title1			:	"Avantage protection<sup>MD</sup> Canadian Tire",
		additionalInformation_OptionalProducts_Title1_1			:	"<i>(non disponible pour les résidents de la Saskatchewan)</i>",
		
		// Old line
		// 	additionalInformation_OptionalProducts_Title1_2			:	"(Adhésion à la fois à Couverture-crédit<sup>MD</sup>** / Couverture-crédit – <i>Âge d’or</i><sup>MD</sup>** et Surveillance d’identité ClassiqueTM. Comprend la couverture et les avantages des deux produits facultatifs, comme indiqué précédemment. ",
		//	additionalInformation_OptionalProducts_Title2			:	"Couverture-crédit<sup>MD**</sup> / Couverture-crédit – <i>Âge d’or</i><sup>MD***</sup>",
		additionalInformation_OptionalProducts_Title1_2			:	"Souscription à Couverture crédit<sup>MD</sup> et Surveillance d’identité Classique<sup>MD</sup>. Comprends les avantages qui sont offerts par les deux produits facultatifs, tel que mentionné ci-dessus.",
		additionalInformation_OptionalProducts_Title2			:	"Assurance Couverture-crédit<sup>MD</sup>",
		additionalInformation_OptionalProducts_Title2_1			:	"<i>(non disponible pour les résidents de la Saskatchewan)</i>",
		additionalInformation_OptionalProducts_Title3			:	"Surveillance d’identité Classique<sup>MD</sup>",
		additionalInformation_OptionalProducts_Title4			:	"Pas pour l’instant",
		additionalInformation_OptionalProducts_Title4_OMP_OMR	:	"Pas pour le moment",
				
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
		
/*		additionalInformation_footnoteContentText7				:	"<sup>&#8224;</sup><sup>&#8224;</sup> Ces produits facultatifs sont offerts à tous les nouveaux titulaires de carte Mastercard de Canadian Tire. Les renseignements que vous fournissez sur la présente demande de carte sont utilisés pour déterminer votre admissibilité à l’obtention d’une carte Mastercard de Canadian Tire et non pour votre adhésion aux produits facultatifs, lesquels sont offerts à tous les titulaires de carte Canadian Tire.",
		additionalInformation_footnoteContentText8				:	"<sup>MD</sup>/<sup>MC</sup> Sauf indication contraire, toutes les marques de commerce sont la propriété de La Société Canadian Tire Limitée et sont utilisées sous licence.",		
		additionalInformation_footnoteContentText9				:	"<sup>MD</sup>/<sup>MC</sup> Couverture-crédit est une marque de commerce déposée de la Banque Canadian Tire",
		additionalInformation_footnoteContentText10				:	"Rebound<sup>MD</sup> est une marque de commerce déposée de Fidélisation propriétaire Aimia Canada Inc.",
		additionalInformation_footnoteContentText11				:	"<sup>MD</sup> Assurant Solutions est une marque de commerce de Assurant Inc.",
		additionalInformation_footnoteContentText12				:	"<span class=\"superscripts\"><sup>MD</sup></span>/<span class=\"superscripts\"><sup>MC</sup></span> Mastercard et la marque figurative de Mastercard sont des marques de commerce déposées de Mastercard International Incorporated.",
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
		additionalInformation_Credit_Protector_Text             :   "<span class=\"overviewNSTableRedText\">&#42;</span> J’ai lu, compris et j’accepte entièrement le <U><b><a href='https://www.ctfs.com/content/ctfs/fr/optional-products/credit_protector_terms.html' target='_blank'>Sommaire de la couverture et des déclarations</a></b></U> de l’assurance Couverture-crédit.",
		additionalInformation_Credit_Protector_Text_OMP_OMR     :   "<span class=\"overviewNSTableRedText\">&#42;</span> J’ai lu, compris et j’accepte entièrement le <U><b><a href='https://www.ctfs.com/content/ctfs/fr/optional-products/credit_protector_terms.html' target='_blank'>Sommaire de la couverture et des déclarations</a></b></U> de l’assurance Couverture-crédit.",
		additionalInformation_Identity_Watch_Text               :   "<span class=\"overviewNSTableRedText\">&#42;</span> J’ai lu, compris et j’accepte entièrement le <U><b><a href='https://www.ctfs.com/content/ctfs/fr/optional-products/identity_watch_terms.html' target='_blank'>Sommaire de la couverture et des déclarations de</a></b></U> Surveillance d’identité Classique",
		additionalInformation_ProtectionAdvantage_Text          :   "<span class=\"overviewNSTableRedText\">&#42;</span> J’ai lu, compris et j’accepte entièrement le <U><b><a href='https://www.ctfs.com/content/ctfs/fr/optional-products/protection_advantage_terms.html' target='_blank'>Sommaire de la couverture et des déclarations ainsi que des modalités</a></b></U> de Avantage Protection de Canadian Tire.",
		
		// US4591 Newline for Quebec
		additionalInformation_Quebec_new_lineProtectionAdvantage :  "Pour les résidents du Québec, j’ai lu et compris le <U><a href= 'https://canadiantire.scene7.com/is/content/CanadianTire/ctfs/optional_products_documents/K022_DG_MCC894125F_FINAL.pdf' target='_blank'>Guide de distribution</a></U> de Couverture-crédit<sup>MD</sup>.",
		
		additionalInformation_IdentityWatch_Terms				: " ",//we need this empty string because french and english templates have different structure
		additionalInformation_ProtectionAdvantage_Terms			: " ",//we need this empty string because french and english templates have different structure
		additionalInformation_EarnReward						: '<div class="additionalInformation_EarnReward_fr" />',
		additionalInformation_Title_TextField					: '<select class="fieldValuesSelectField titleField" id="additionalInformation_Title_TextField" />',
		additionalInformation_DateOfBirth_Month					: '<select class="fieldValuesSelectField dateOfBirthMonthField" id="additionalInformation_DateOfBirth_Month" placeholder="Month" />',
		additionalInformation_DateOfBirth_Day					: '<select class="fieldValuesSelectField dateOfBirthDayField" id="additionalInformation_DateOfBirth_Day" placeholder="Day" />',
		additionalInformation_DateOfBirth_Year					: 'Année',
		additionalInformation_Relationship_TextField			: '<select class="fieldValuesSelectField addressProvinceField" id="additionalInformation_Relationship_TextField"/>',
		additionalInformation_Province_TextField				: '<select class="fieldValuesSelectField addressProvinceField" id="additionalInformation_Province_TextField"/>',
		
		// US4997 OMP CARD -------------------
		
		additionalInformation_footnoteContent_OMP_Text1				:	"<sup>&#8224;&#8224;</sup> Ce sont des produits facultatifs offerts à tous les nouveaux titulaires de carte Mastercard émise par la Banque Canadian Tire. Les renseignements que vous fournissez sur la présente demande de carte sont utilisés pour déterminer votre admissibilité à l’obtention d’une carte Mastercard émise par la Banque Canadian Tire et non pour votre adhésion aux produits facultatifs, lesquels sont offerts à tous les titulaires de carte Canadian Tire.",
		additionalInformation_footnoteContent_OMP_Text2				:	"<span class=\"superscripts\"><sup>MD/MC</sup></span>Couverture-crédit est une marque de commerce déposée de la Banque Canadian Tire.",
		additionalInformation_footnoteContent_OMP_Text3				:	"Le programme Surveillance d’identité Classique est commandité par la Banque Canadian Tire et fourni par Fidélisation propriétaire Aimia Canada Inc.",
		additionalInformation_footnoteContent_OMP_Text4				:	"<span class=\"superscripts\"><sup>MD/MC</sup></span> Suivi des informations personnelles sur Internet<span class=\"superscripts\"><sup>MD</sup></span> iPiP<span class=\"superscripts\"><sup>MD</sup></span>, et Retour<span class=\"superscripts\"><sup>MD</sup></span> sont des marques de commerce déposées de Fidélisation propriétaire Aimia Canada , Inc.",
		additionalInformation_footnoteContent_OMP_Text5				:	"<span class=\"superscripts\"><sup>MD/MC</sup></span> Sauf indication contraire, toutes les marques de commerce sont la propriété de La Société Canadian Tire Limitée et sont utilisées sous licence.",
		additionalInformation_footnoteContent_OMP_Text6				:	"<span class=\"superscripts\"><sup>MD/MC</sup></span> Mastercard est une marque de commerce déposée et le logo des deux cercles imbriqués est une marque de commerce de Mastercard International Incorporated.",
		
		// US4997 OMP CARD -------------------
		
		//--------------- END --------------------- OPTIONAL PRODUCTS section -------------- END -----------
		
		//---------------  US5272 Bill 134 – BRB/OIC---------------------Loyalty terms and consent update ------------START---------
		additionalInformation_scrollbar_OMX_OMZ_Text1           :  "<p>Cette page présente des renseignements importants sur le programme Récompenses Triangle (le <strong>programme</strong>) - le programme qui vous récompense avec de l'Argent électronique Canadian Tire lorsque vous magasinez dans les magasins Canadian Tire participants, sur <a href='https://www.canadiantire.ca/fr.html' target='_blank'><u>canadiantire.ca</u></a> et dans les postes d'essence Canadian Tire. Ce programme est mis à disposition par la Société Canadian Tire Limitée (ci-après dénommée <strong>Canadian Tire</strong> ou <strong>nous</strong>) et les modalités et conditions sont les suivantes :</p>",
		additionalInformation_scrollbar_OMX_OMZ_Text2           :   "<p><strong>Participer au programme</strong></p><p>Vous devez être membre (un <strong>membre</strong>) pour pouvoir obtenir et échanger de l’Argent électronique Canadian Tire. L’adhésion est ouverte aux personnes physiques résidant au Canada et ayant atteint l’âge de la majorité dans la province où elles résident.</p><p>Vous pouvez devenir un membre (i) en remplissant le processus d'inscription en ligne sur canadiantire.ca (le <strong>site Web du programme</strong>) ou (ii) en téléchargeant l'application sur votre téléphone ou appareil mobile (<strong>l'application du programme</strong>). Vous pouvez obtenir des renseignements sur le programme en appelant le service à la clientèle au 1 800 226-8473 ou en visitant le site Web du programme, ou (iii) en présentant une demande de carte de crédit émise par la Banque Canadian Tire désignée comme étant liée au programme, ou par l'émission d'une carte de débit reliée à un compte bancaire de la Banque Canadian Tire qui est désigné comme étant lié au Programme (une <strong>carte de paiement du programme</strong>), ou (iv) en appelant le service à la clientèle au 1 800 226-8473 après avoir pris une carte Récompenses Triangle en magasin.</p> <p>Si vous faites une demande de carte de crédit qui est une carte de paiement du programme et que votre demande n'est pas approuvée, vous deviendrez quand même membre du programme Récompenses Triangle si vous avez fourni tous les renseignements nécessaires, à moins que, au moment de la demande de carte de crédit, vous ayez été informé que vous deviez vous inscrire séparément au programme si votre demande était refusée ou si nous vous en avisions autrement par écrit.</p>",
		additionalInformation_scrollbar_OMX_OMZ_Text3           :   "<p><strong>Cartes Récompenses Triangle</strong></p><p>Chaque membre peut recevoir une carte du programme Récompenses Triangle (<strong>une carte Récompenses Triangle</strong>) qui est liée à un compte Récompenses Triangle. Votre Argent électronique Canadian Tire sera stocké dans ce compte. Si vous ne recevez pas de carte Réconpenses Triangle, vous devrez utiliser une <strong>méthode sans carte</strong> (voir ci-dessous) pour obtenir ou échanger de l’Argent électronique Canadian Tire.</p><p>Toute carte de paiement du programme émise à un membre sera également liée au compte Récompenses Triangle de ce membre. Si un membre possède plusieurs cartes de paiement du programme, elles ne peuvent pas être liées au même compte Récompenses Triangle.</p> <p>Un membre peut demander l’émission de cartes Récompenses Triangle supplémentaires avec le même numéro de compte que le compte Récompenses Triangle de ce membre.</p>",
		additionalInformation_scrollbar_OMX_OMZ_Text4           :   "<p><strong>Obtenir de l'Argent électronique Canadian Tire</strong></p><p>L’Argent électronique Canadian Tire peut être accumulé lorsque vous achetez des <strong>articles admissibles</strong> (voir ci-dessous) dans les magasins Canadian Tire participants ou en ligne sur <a href='https://www.canadiantire.ca/fr.html' target='_blank'><u>canadiantire.ca</u></a> (ou sur tout autre site Web désigné par Canadian Tire de temps à autre). L’Argent électronique Canadian Tire est calculé à partir du montant avant taxes de l'achat (ou sa portion admissible) et est arrondi au cent près. Pour obtenir de l’Argent électronique Canadian Tire, vous devez présenter une carte Récompenses Triangle (ou utiliser une <strong>méthode sans carte</strong> décrite ci-dessous). Vous pouvez également percevoir de l’Argent électronique Canadian Tire sur la portion d'un achat réglé avec une carte de paiement du programme. La carte de paiement du programme doit être liée à un compte Récompenses Triangle au moment de l'achat afin d'obtenir de l'Argent électronique Canadian Tire.</p><p>Vous accumulez également de l'Argent électronique Canadian Tire lorsque vous achetez du carburant (essence ou diesel) dans les postes d'essence Canadian Tire participants et présentez une carte Récompenses Triangle (ou utilisez une méthode sans carte telle que décrite ci-dessous) et utilisez un mode de paiement admissible ou réglez votre achat au moyen d'une carte de paiement du programme. Le montant en Argent électronique Canadian Tire obtenu sur les achats de carburant dépend du nombre de litres achetés. Un achat minimum de carburant peut être requis avant de pouvoir obtenir de l'Argent électronique Canadian Tire. Le taux de récompenses peut varier de temps à autre et selon l'endroit et le type de mode de paiement utilisé. Il vous est recommandé de vérifier auprès de votre poste d'essence Canadian Tire. L’Argent électronique Canadian Tire ne peut être recueilli que dans les postes d'essence Canadian Tire pour les achats de carburant.</p><p>Vous pouvez également obtenir de l’Argent électronique Canadian Tire sur les achats que vous effectuez chez d'autres marchands et qui sont portés à votre carte de paiement. L’Argent électronique Canadian Tire que vous obtenez chez d'autres marchands sera également arrondi au cent le plus près.</p> <p>Le taux d’obtention de l’Argent électronique Canadian Tire peut varier de temps à autre et selon l'emplacement et peut être modifié par Canadian Tire sans préavis. De plus, vous pouvez obtenir de l’Argent électronique Canadian Tire à un taux différent avec une carte de paiement du programme qu’avec une carte Récompenses Triangle (ou une <strong>méthode sans carte</strong>)  ou selon le type de carte de paiement du programme que vous utilisez. Pour obtenir les taux en vigueur, veuillez composer le 1 800 226-8473. </p><p>Lorsque vous magasinez chez Canadian Tire ou dans un poste d’essence Canadian Tire, et que vous avez oublié votre carte Récompenses Triangle ou choisi de ne pas l’utiliser, vous pouvez quand même obtenir de l’Argent électronique Canadian Tire sur vos achats admissibles si vous fournissez le numéro de téléphone que vous avez donné lorsque vous vous êtes inscrit au programme, ou en présentant votre cellulaire ou votre appareil mobile aux points de vente compatibles si vous avez téléchargé l’application du programme au préalable (ces deux options étant une <strong>méthode sans carte</strong>).</p><p>Avant de calculer le montant en Argent électronique Canadian Tire accumulé, les achats faits dans une devise étrangère avec une carte de paiement du programme sont d’abord convertis en dollars canadiens (comme énoncé dans le contrat du titulaire de carte).</p><p>L’Argent électronique Canadian Tire ne peut être crédité qu’à un seul compte Récompenses Triangle par transaction.</p><p>Si vous utilisez une carte Récompenses Triangle ou une méthode sans carte, vous devez la glisser dans le lecteur ou la présenter devant un lecteur optique ou fournir votre numéro de téléphone, selon le cas, avant de payer. Lorsque vous magasinez en ligne sur <a href='https://www.canadiantire.ca/fr.html' target='_blank'><u>canadiantire.ca</u></a> (ou sur un autre site Web désigné par Canadian Tire), vous devez entrer votre numéro de compte Récompenses Triangle au moment du paiement afin d'obtenir votre Argent électronique Canadian Tire.</p> <p>Les membres sont aussi admissibles à des primes spéciales en Argent électronique Canadian Tire de temps à autre à l'achat de certains articles, survenant dans le cadre d'un d'événement particulier ou d'une promotion ou d'une offre, toutefois, à moins d'indication contraire, la prime spéciale en Argent électronique Canadian Tire n'est octroyée qu'une seule fois pour une transaction ou pour la un événement spécial, selon le cas.</p> <p>Vous ne pouvez pas utiliser une carte Récompenses Triangle (ou une méthode sans carte) avec une carte de paiement du programme. Si vous portez un achat à une carte de paiement du programme, vous obtiendrez de l’Argent électronique Canadian Tire au taux applicable de la carte de paiement du programme alors en vigueur, même si vous présentez également votre carte Récompenses Triangle (ou méthode sans carte). De même, si vous utilisez de l’Argent électronique Canadian Tire pour payer une partie d’une transaction et que vous payez le solde avec une carte de paiement du programme liée à un compte Récompenses Triangle différent du compte à partir duquel l’échange a lieu, tout l’Argent électronique Canadian Tire obtenu pour cette transaction sera crédité au compte Récompenses Triangle à partir duquel l’échange a été effectué.</p> <p>Il n’est pas possible d’obtenir de l’Argent électronique Canadian Tire sur le montant de la transaction visé par l’échange d’Argent électronique Canadian Tire. Toutefois, nous pouvons, à l'occasion et à notre discrétion, vous proposer des offres spéciales ou des promotions vous permettant d'obtenir de l’Argent électronique Canadian Tire sur le montant de la transaction visé par l’échange d’Argent électronique Canadian Tire.</p><p>Si vous utilisez plus d’une carte de paiement du programme pour effectuer un achat (p. ex. partager le coût entre deux cartes ou plus), tout l’Argent électronique Canadian Tire recueilli sur cet achat sera crédité uniquement au compte Récompenses Triangle lié à la première carte de paiement du programme qui est présentée.</p> <p>Si vous effectuez un paiement au moyen d'une carte de paiement du programme en combinaison avec une autre forme de paiement, seule la partie de l'achat réglé avec la carte de paiement du programme permettra d'obtenir de l’Argent électronique Canadian Tire au taux de la carte de paiement du programme alors applicable. La partie des achats effectués avec l’autre forme de paiement peut être éligible à de l’Argent électronique Canadian Tire à un taux différent.</p><p>Il est à noter que des retards peuvent survenir dans l’attribution d’Argent électronique Canadian Tire sur un compte Récompenses Triangle. Vous ne pouvez pas obtenir de l’Argent Canadian Tire<sup>MD</sup> en billet d’Argent électronique Canadian Tire au cours d’une même transaction.</p>",
		additionalInformation_scrollbar_OMX_OMZ_Text5           :   "<p><strong>Si vous êtes titulaire d'une carte de paiement du programme et que vous ne maintenez pas votre compte de carte de crédit en règle, ou compte bancaire auquel votre carte de débit est liée, tout Argent électronique Canadian Tire que vous auriez pu obtenir en utilisant cette carte de paiement du programme pourrait, à l'entière discrétion de Canadian Tire, être annulé.</strong></p>",
		additionalInformation_scrollbar_OMX_OMZ_Text6           :   "<p><strong>Articles admissibles</strong></p><p>Toutes les marchandises vendues dans les magasins Canadian Tire ou en ligne sur canadiantire.ca <strong>sont admissibles</strong>, à l’exception de ce qui suit : cartes-cadeaux, billets de loterie, permis de chasse et de pêche, frais d’élimination des pneus, taxes sur les pneus, frais de location Rug Doctor<SUP>MD</SUP>, dépôts remboursables, frais environnementaux, frais de réparation, frais de livraison ou d’assemblage, autres services en magasin (autres que le service automobile), ventes entre magasins, autre main-d’œuvre en magasin (autre que celle pour les réparations automobiles), dons à prix réduit, frais de tenue de compte, frais de remorquage, cartes pré-autorisées, cartes téléphoniques, articles de tabac ou alcool, pièces et main-d’œuvre Pit Sop<SUP>MD</SUP> et abonnement au Service de l’Assistance routière Canadian Tire<SUP>MD</SUP> achetés en personne ou en ligne, les primes pour l’assurance du solde de carte de crédit ou pour l’assurance ou les garanties prolongées sur les articles achetés avec une carte de crédit de marque Canadian Tire, les primes pour d’autres produits d’assurance de marque Canadian Tire, les avances de fonds, les opérations par chèque, les transferts de solde et autres opérations en espèces, tous frais portés à une carte de paiement du programme, les paiements effectués à un compte de carte de paiement du programme, la valeur des pièces ou articles échangés relativement à un achat, tout élément pour lequel la loi nous interdit d’accorder de l’Argent Canadian Tire à l’égard de tout autre bien ou service que nous pouvons déterminer de temps à autre à notre seule discrétion. De plus, chaque magasin Canadian Tire a le droit d’exclure d’autres articles vendus dans ce magasin de la liste des articles admissibles. Nous nous réservons le droit, à tout moment et sans préavis, de changer ce qui constitue un article admissible.</p><p><strong>Échanger de l’Argent électronique Canadian Tire</strong></p><p>L’Argent électronique Canadian Tire ne peut être échangé que pour des marchandises (incluant les taxes applicables) achetées dans les magasins Canadian Tire participants ou dans d’autres magasins désignés par Canadian Tire.</p><p>L’Argent électronique Canadian Tire ne peut être échangé contre des produits comme de l’alcool, du tabac, des cartes-cadeaux, des cartes prépayées, d’autres cartes ou articles prépayés, des articles que nous indiquons sur le site Web du programme et des articles que la loi interdit de vendre de cette façon; il ne peut être utilisé pour effectuer un paiement sur une carte de crédit émise par la Banque Canadian Tire ou sur des prêts ou pour des produits financiers ou d’assurance ou à l'égard des frais ou du découvert d'un compte bancaire de la Banque Canadian Tire.</p><p>Pour échanger votre Argent électronique Canadian Tire, vous devez présenter votre carte Récompenses Triangle (ou méthode sans carte) ou votre carte de paiement à la caisse lors de votre achat. Veuillez noter que dans certains magasins Canadian Tire, il n’est pas possible de fournir simplement votre numéro de téléphone pour échanger de l’Argent électronique Canadian Tire; la présentation de votre carte Récompenses Triangle ou de votre carte de paiement du programme ou de votre application du programme peut être requise. L’Argent électronique Canadian Tire peut être utilisé en combinaison avec de l’Argent Canadian Tire en billet et toute autre forme de paiement.</p><p>L’Argent électronique Canadian Tire obtenu au cours d'une transaction ne peut pas être échangé sur la même transaction.</p><p>Vous ne pouvez pas échanger de l’Argent électronique Canadian Tire à partir de plusieurs comptes Récompenses Triangle pour la même transaction.</p><p>Vous devez être inscrit au programme ou avoir activé votre carte de crédit du programme pour pouvoir utiliser l’Argent électronique Canadian Tire.</p>",
		additionalInformation_scrollbar_OMX_OMZ_Text7           :   "<p><strong>Qu’arrive-t-il lorsqu’un article est retourné au magasin?</strong></p><p>Si vous retournez un article pour remboursement et que vous aviez reçu de l’Argent électronique Canadian Tire lorsque vous avez acheté cet article, ce montant en Argent électronique Canadian Tire sera déduit de votre compte Récompenses Triangle.</p> <p>Les marchandises qui ont été achetées en tout ou en partie en échangeant de l’Argent électronique Canadian Tire ne peuvent pas être retournées contre de l'argent comptant, mais le compte Récompenses Triangle utilisé pour la transaction sera crédité du même montant en Argent électronique Canadian Tire utilisé pour effectuer l'achat initial.</p>",
		additionalInformation_scrollbar_OMX_OMZ_Text8           :   "<p><strong>Expiration de l’Argent électronique Canadian Tire</strong></p><p>Nous pouvons annuler l’Argent électronique Canadian Tire de votre compte Récompenses Triangle après une période d'inactivité de 18 mois. Aux fins de la présente section, « inactivité » signifie qu'il n'y a pas eu d'opération au cours de laquelle vous avez obtenu ou échangé de l’Argent électronique Canadian Tire pendant la période en question.</p>",
		additionalInformation_scrollbar_OMX_OMZ_Text9           :   "<p><strong>Fin de l’adhésion au programme et annulation du programme</strong></p><p>Canadian Tire peut mettre fin au statut de membre dans l’un ou l’autre des cas suivants : (A) le membre ne s'est pas conformé à l'une ou l'autre de ces modalités ou Canadian Tire détermine que le membre a abusé du programme ou a fait de fausses déclarations ou une déclaration trompeuse à Canadian Tire; (B) le membre décède; (C) le membre fait faillite ou devient insolvable ou une procédure de faillite ou d'insolvabilité est entamée par ou contre le membre; (D) le membre est accusé d'une « infraction désignée » (au sens du Code criminel canadien; (E) la carte de paiement du programme du membre est résiliée par la Banque Canadian Tire&#44; ou (F) Canadian Tire soupçonne le membre de toute activité frauduleuse liée au programme ou à l'utilisation d'une carte de paiement du programme.</p><p>Un membre peut choisir d'annuler son adhésion&#44; en envoyant un avis écrit à l'adresse ci-dessous ou en appelant le service à la clientèle du programme.</p><p><u>La résiliation ou l’annulation de l’adhésion au programme entraînera la fermeture immédiate du compte Récompenses Triangle du membre et l’annulation de tout l’Argent électronique Canadian Tire du compte Récompenses Triangle sans compensation ni autre responsabilité envers le membre. La résiliation du compte Récompenses Triangle d’un membre aura également pour conséquence que le membre ne pourra plus utiliser une carte de paiement du Programme.</u></p><p>Canadian Tire peut&#44; à sa seule discrétion et en tout temps&#44; sans préavis&#44; (i) annuler le programme ou (ii) fixer une date à laquelle l’Argent électronique Canadian Tire expirera et ne pourra plus être utilisé sauf si vous êtes un membre résidant au Québec&#44; en Ontario ou dans une autre province où la loi l'interdit&#44;.</p>",
		additionalInformation_scrollbar_OMX_OMZ_Text10          :   "<p><strong>Fusionner des comptes Récompenses Triangle</strong></p><p>À la discrétion de Canadian Tire, les membres peuvent fusionner leurs comptes Récompenses Triangle sur un seul compte. Ce compte fusionné portera le numéro de compte Récompenses Triangle de l’un des comptes faisant l’objet de la fusion et un membre sera désigné comme titulaire de ce compte avec tous les pouvoirs et l’autorité nécessaires pour gérer le compte, y compris sa clôture, et deviendra le « Membre » aux termes de ces modalités. Tous les membres souhaitant fusionner leurs comptes Récompenses Triangle devront consentir à la fusion et s'entendre sur le numéro de compte qui sera désigné comme le numéro du compte Récompenses Triangle nouvellement fusionné ainsi que sur le membre qui en sera le titulaire. Tous les numéros de compte Récompenses Triangle restants seront annulés et les personnes qui ne sont pas désignées comme titulaires du compte ne seront plus membres du programme.</p>",
		additionalInformation_scrollbar_OMX_OMZ_Text11          :   "<p><strong>Faire un don en Argent électronique Canadian Tire</strong></p><p>Les membres peuvent être en mesure de faire don de leur Argent électronique Canadian Tire à des organismes de bienfaisance ou à des groupes communautaires choisis. Veuillez visiter le site Web du programme pour plus de détails sur le don d’Argent électronique Canadian Tire.</p><p><strong>Cartes Récompenses Triangle perdues ou volées</strong></p><p>Si une carte Récompenses Triangle est perdue, volée ou détruite, Canadian Tire émettra une nouvelle carte sur présentation d'une pièce d'identité admissible, et le solde du compte Récompenses Triangle du membre sera transféré au compte Récompenses Triangle nouvellement créé.</p><p>Canadian Tire n'assume aucune responsabilité si l’Argent Canadian Tire a été utilisé par toute personne qui présente une carte Récompenses Triangle, une méthode sans carte ou une carte de paiement du programme perdue ou volée avant que Canadian Tire ne soit avisé de la perte ou du vol.</p>",
		additionalInformation_scrollbar_OMX_OMZ_Text12          :   "<p><strong>Partenaires</strong></p><p>Nous pouvons, de temps à autre, désigner certains marchands dans lesquels vous pouvez obtenir ou échanger de l’Argent Canadian Tire (un partenaire). Nous nous réservons le droit de désigner sur le site Web du programme les noms des partenaires, les taux auxquels l’Argent électronique Canadian Tire peut être obtenu et échangé et la marchandise qui ne sera pas considérée comme admissible pour obtenir ou échanger de l’Argent électronique Canadian Tire et d’y apporter des modifications de temps à autre. L’Argent électronique Canadian Tire que vous obtenez auprès d’un partenaire peut ne pas être crédité ou peut être annulé ou peut ne pas pouvoir être échangé si ce partenaire ne nous fournit pas toutes les informations nécessaires, si nous ne pouvons pas confirmer que l’Argent électronique Canadian Tire a été obtenu correctement ou si ce partenaire ne respecte pas l’entente que nous avons avec lui concernant l’Argent électronique Canadian Tire. Si vous échangez de l’Argent électronique Canadian Tire chez un partenaire, nous ne sommes pas responsables des pertes, dommages, blessures, décès ou dépenses résultant de l’utilisation d'un article ou d’un service que vous avez acquis chez ce partenaire.</p>",
		additionalInformation_scrollbar_OMX_OMZ_Text13          :   "<p><strong>Généralités</strong></p><p>L’Argent électronique Canadian Tire n’est pas échangeable et ne peut être échangé contre de l’argent comptant ni subordonné à une garantie quelconque. L’Argent électronique Canadian Tire ne peut être transféré d’un membre à un autre membre ou à toute autre personne sans le consentement de Canadian Tire.</p><p>Les présentes modalités, telles que modifiées de temps à autre par Canadian Tire, constituent l’entente intégrale entre le membre et Canadian Tire concernant l’Argent électronique Canadian Tire.</p><p>À l’occasion, Canadian Tire, nos diverses entreprises au sein de la famille de sociétés Canadian Tire et tout partenaire peuvent vous communiquer, en utilisant les coordonnées que vous avez indiquées, des offres spéciales, des renseignements et des services par courriel, par message texte (des frais standards de messagerie texte et de transfert de données peuvent s’appliquer) ou par d’autres moyens de communication que vous avez choisis. Tout Membre qui ne désire pas recevoir ces offres peut l’indiquer sur le site Web du Programme ou en appelant le service à la clientèle du Programme au 1-800-226-8473. Il se peut également que nous communiquions avec vous pour des motifs liés à l’administration de votre compte et que nous vous envoyions des messages liés aux transactions ou à l’exploitation, même si vous avez retiré votre nom de nos listes de communication marketing.</p><p>Toute exonération par Canadian Tire de toute non-conformité d’un membre aux présentes modalités ne sera pas considérée comme une renonciation de tout droit ou recours de Canadian Tire lié à tout autre manquement du membre de se conformer aux présentes modalités. Aucun retard ou aucune omission de Canadian Tire dans l’exercice de son droit ou de son recours en vertu des présentes ne sera considéré comme une renonciation à ce droit ou recours ou à tout autre droit ou recours.</p><p>Toutes les cartes Récompenses Triangle demeurent la propriété exclusive de Canadian Tire et doivent être retournées à Canadian Tire au moment de l’annulation de l’adhésion d’un membre au programme si Canadian Tire en fait la demande.</p><p>Le membre est responsable d’informer Canadian Tire de tout changement apporté à ses renseignements personnels (p. ex., nom, adresse, adresse de courriel, etc.) au moyen du site Web du programme ou en appelant le service à la clientèle du programme. Canadian Tire se réserve le droit de mettre fin à la participation d’un membre au programme ou de bloquer la capacité d’un membre à utiliser son Argent électronique Canadian Tire si Canadian Tire possède des renseignements inexacts ou incomplets concernant le membre en question.</p><p>L’adhésion au programme constitue l’acceptation des présentes modalités et chaque personne qui présente une demande d’adhésion au programme consent à la collecte et à l’utilisation des renseignements personnels, conformément à la politique en matière de protection des renseignements personnels de Canadian Tire et conformément aux modifications qui y sont apportées de temps à autre. Si une disposition des présentes modalités est nulle ou inexécutable, elle n’aura aucune incidence sur la validité et la force exécutoire des autres dispositions des présentes modalités. Les membres sont tenus responsables des taxes, des droits ou des autres frais associés à leur adhésion au programme.</p><p>Tout avis écrit à Canadian Tire peut être envoyé par la poste à l’adresse suivante :</p><span>Programme Récompenses Triangle</span><br><span>C. P. 2000, succ. Main</span><br><span>Welland (Ontario)</span><br><span>L3B 5S3</span><br><br><p>Nous pouvons annuler tout Argent électronique Canadian Tire qui n’a pas été émis en bonne et due forme ou que nous pensons avoir été émis en raison d’une conduite frauduleuse ou d’une conduite incompatible avec les présentes modalités ou avec l’esprit du programme.</p>",
		additionalInformation_scrollbar_OMX_OMZ_Text14          :   "<p><strong>Pour les membres qui résident à l’extérieur du Québec  seulement : </strong> Canadian Tire peut modifier les présentes modalités en tout temps et sans préavis. La version des modalités affichée, le cas échéant, sur le site Web du programme régira le programme.</p><p>Les présentes modalités sont régies par les lois de l’Ontario et les lois fédérales du Canada applicables en Ontario.</p>",
		additionalInformation_scrollbar_OMX_OMZ_Text15          :   "<p><strong>Pour les membres qui résident au Québec  seulement :</strong> Canadian Tire peut modifier unilatéralement les présentes modalités et, sous réserve du paragraphe suivant, la version des modalités qui est affichée, le cas échéant, sur le site Web du programme régira le programme.</p><p>Vous serez informé par écrit de toute modification apportée aux présentes modalités (indiquant la nouvelle disposition uniquement ou la disposition modifiée et son libellé avant la modification et la date de l’entrée en vigueur de la modification) au moins 60 jours, mais pas plus de 90 jours avant son entrée en vigueur. À la réception de l’avis, vous pouvez décider de rejeter la modification et de révoquer les présentes modalités.</p><p>Les présentes modalités sont régies par les lois du Québec et les lois fédérales du Canada applicables au Québec. C’est à votre demande expresse que les modalités du programme sont rédigées en français. It is your express wish that these Program terms and conditions be written in the French language.</p><hr><hr>",
		additionalInformation_scrollbar_OMX_OMZ_Text16          :   "<p><strong>CONFIDENTIALITÉ</strong></p><p>Canadian Tire s’est engagée à protéger la confidentialité et la sécurité de vos renseignements personnels. Toutes les sociétés Canadian Tire ont adopté la politique sur la protection des renseignements personnels de Canadian Tire (<a href='https://triangle.canadiantire.ca/fr/service-client.html' target='_blank'><u>Politique sur la protection des renseignements personnels</u></a>). Une liste de questions fréquemment posées sur la protection des renseignements personnels (<a href='https://triangle.canadiantire.ca/fr/faq.html' target='_blank'><u>FAQ</u></a>) est disponible pour vous fournir des exemples et des situations concrètes de la façon dont vos renseignements personnels peuvent être recueillis, utilisés et communiqués. Nos politiques et pratiques respectent la Loi sur la protection des renseignements personnels et les documents électroniques et aux lois provinciales sur la protection des renseignements personnels du secteur privé. Notre <a href='https://triangle.canadiantire.ca/fr/service-client.html' target='_blank'><u>Politique sur la protection des renseignements personnels</u></a> peut être modifiée de temps à autre. Vous pouvez obtenir une copie de la version la plus récente de <a href='https://triangle.canadiantire.ca/fr/service-client.html' target='_blank'><u>notre politique sur la protection des renseignements personnels</u></a> et de notre <a href='https://triangle.canadiantire.ca/fr/faq.html' target='_blank'><u>Foire aux questions</u></a> en ligne sur triangle.com ou en composant le 1-800-226-8473.</p><p>La <a href='https://triangle.canadiantire.ca/fr/service-client.html' target='_blank'><u>Politique sur la protection des renseignements personnels</u></a> décrit comment nous recueillons, utilisons et divulguons les renseignements personnels dans le but de : (i) traiter et administrer votre paiement pour l’achat de produits ou de services, si vous achetez en ligne ou utilisez une carte de débit ou de crédit dans l’un de nos magasins; (ii) traiter votre demande pour un produit, fournir un service ou administrer le programme de fidélité de Canadian Tire ou tout autre programme de fidélité ou de clients privilégiés qui peut exister de temps à autre (chacun un <strong> « programme de fidélité »</strong>) ; (iii) mieux comprendre vos besoins et vous offrir de l’information, des produits, des services, des récompenses et des programmes pertinents, y compris vous envoyer (ainsi qu’à d’autres personnes en votre nom) des communications par courrier postal, courriel, télécopieur, téléphone, message texte ou autre type de message électronique ; (iv) déterminer votre intérêt et votre admissibilité aux produits, services, récompenses et programmes, et vous les fournir le cas échéant ; (v) suivre et analyser vos achats, vos autres transactions, vos habitudes d’achat, vos habitudes de magasinage, l’activité de votre compte et l’historique de vos paiements à des fins d’analyse marketing ou de personnalisation de vos offres promotionnelles ; (vi) suivre et analyser votre utilisation du site Web pour offrir une meilleure expérience client, comme des offres et annonces personnalisées ; (vii) vérifier votre identité et vous protéger contre les erreurs et la fraude ; (viii) gérer et évaluer notre risque ; (ix) évaluer et mettre votre cote de solvabilité à jour sur une base régulière ; (x) effectuer des recherches et des analyses (anonyme dans la mesure du possible) ; (xi) traiter, signifier, analyser et vérifier votre relation avec nous, y compris la perception de toute somme que vous nous devez ; (xii) respecter les exigences légales, réglementaires et autoréglementaires applicables ; (xiii) répondre à vos questions, commentaires ou demandes de service à la clientèle ; et (xiv) dans d’autres buts qui peuvent, le cas échéant, être permis par la loi.</p><p>Nous pouvons fournir vos renseignements personnels à des sociétés affiliées de Canadian Tire ou à d’autres partenaires de marketing, y compris dans le cadre d’un programme de fidélité, afin qu’ils puissent vous informer directement des produits, services, récompenses et offres spéciales qui pourraient vous intéresser. Ces renseignements peuvent vous être communiqués par courrier, courriel, télécopie, téléphone, messagerie texte ou toute autre forme de message électronique en utilisant les coordonnées que vous nous aurez fournies.</p>",
		additionalInformation_scrollbar_OMX_OMZ_Text17          :  "<p><strong>En fournissant vos renseignements à Canadian Tire&#44; vous consentez à ce que Canadian Tire utilise vos renseignements personnels aux fins décrites ci-dessus.</strong> Le retrait de votre consentement à ce que nous recueillions&#44; utilisions et communiquions vos renseignements personnels peut limiter notre capacité à vous fournir certains produits et services&#44; comme des privilèges et des avantages que procure l’adhésion à un programme de fidélité. Vous pouvez toujours retirer ou refuser votre consentement en cliquant sur le lien de désabonnement dans nos communications par courriel ou en communiquant avec nous au 1-800-226-8473. Votre demande sera traitée dans les plus brefs délais&#44; mais il se peut que votre nom ne puisse être retiré à temps de certaines listes utilisées pour des activités promotionnelles en cours. Il se peut également que nous communiquions avec vous pour des motifs liés à l’administration de votre compte et que nous vous envoyions des messages liés aux transactions ou à l’exploitation&#44; même si vous avez retiré votre nom de nos listes de communication marketing.</p><p>Elle ne vend ni ne loue les renseignements personnels qu’elle détient. Il peut arriver que nous communiquions vos renseignements personnels à des entreprises externes qui participent à la prestation de services&#44; comme des fournisseurs de services et des mandataires (les <strong> « fournisseurs de services »</strong>). Ses fournisseurs de services peuvent se trouver au Canada ou à l’étranger et peuvent être contraints de divulguer vos renseignements en conformité avec les lois de leur territoire.</p><p>Pour obtenir tous les détails sur la façon dont nous recueillons&#44; utilisons et divulguons vos renseignements personnels&#44; veuillez consulter notre <a href='https://triangle.canadiantire.ca/fr/service-client.html' target='_blank'><u>politique sur la protection des renseignements personnels</u></a> et notre <a href='https://triangle.canadiantire.ca/fr/faq.html' target='_blank'><u>FAQ.</u></a></p>",
		
		
		additionalInformation_scrollbar_OMP_Text1               : "<p>Selon le montant net des nouveaux achats (achats moins crédits) portés à votre compte Mastercard Avantage Essence au cours de toute période de facturation mensuelle&#44; vous serez admissible à un rabais sur chaque litre d’essence ou de carburant diesel acheté pour un véhicule automobile dans un poste d’essence Canadian Tire au cours de la période de facturation mensuelle suivante et payé avec la carte Mastercard Avantage Essence. À titre d’exemple&#44; si le montant net des nouveaux achats portés à votre compte Mastercard Avantage Essence au cours d’une période de facturation mensuelle s’élève à 2 100 &#36;&#44; vous deviendrez admissible à un rabais de 10 &cent; le litre pendant la période de facturation mensuelle suivante&#44; sous réserve de la limite décrite dans la phrase ci-après. Le rabais que vous obtenez au cours d’une période de facturation donnée passera à 2 &cent; le litre dès que le total des achats d’essence&#44; de carburant diesel et d’articles divers effectués dans les postes d’essence Canadian Tire et réglés avec votre carte Mastercard Avantage Essence dépassera la somme de 500 &#36; au cours de cette période de facturation. Le montant du rabais que vous recevrez sur chaque litre pendant une période de facturation mensuelle donnée sera indiqué sur votre relevé de compte Mastercard Avantage Essence pour la période de facturation mensuelle précédente. Comme les achats sont portés à votre compte après la date à laquelle ils sont effectués (ce qui pourrait être au cours de la période de facturation suivante)&#44; il se peut que certains achats ne soient compris dans le montant net des nouveaux achats qu’à la période de facturation suivante. Les crédits sont inscrits au compte d’une manière similaire et peuvent aussi modifier le montant net des nouveaux achats pour la période de facturation suivante. De plus&#44; si une période de facturation courante se termine une fin de semaine ou le jour de Noël&#44; le rabais qui s’appliquera au cours de la période de facturation suivante s’appliquera aussi le vendredi précédant la fin de semaine ou le jour précédant le jour de fête (s’il y a lieu) de la période de facturation courante. Comme le prix du litre d’essence affiché au distributeur comprend les taxes&#44; ledit rabais sur chaque litre d’essence comprend aussi les taxes.</p>",
		additionalInformation_scrollbar_OMP_Text2               : "<p><strong>Voici comment fonctionne le programme de rabais sur l’essence de la carte Mastercard Avantage Essence.</strong></p>",
		
		additionalInformation_scrollbar_OMP_table_th_td1        :  "<b>Période de facturation courante</b>",
		additionalInformation_scrollbar_OMP_table_th_td2        :  "<b>Période de facturation suivante</b>",
		
		additionalInformation_scrollbar_OMP_table_tr1_td1        :  "<p>Montant net des nouveaux achats admissibles</p>",
		additionalInformation_scrollbar_OMP_table_tr1_td2        :  "<p>Vous économisez</p>",
		
		additionalInformation_scrollbar_OMP_table_tr2_td1        :  "2 000 &#36; et plus",
		additionalInformation_scrollbar_OMP_table_tr2_td2        :  "10 &cent; le litre",
		
		additionalInformation_scrollbar_OMP_table_tr3_td1        :  "1 000 à 1999&#44;99 &#36;",
		additionalInformation_scrollbar_OMP_table_tr3_td2        :  "8 &cent; le litre&#42;",
		
		additionalInformation_scrollbar_OMP_table_tr4_td1        :  "500 &#36; à 999&#44;99 &#36;",
		additionalInformation_scrollbar_OMP_table_tr4_td2        :  "5 &cent; le litre&#42;",
		
		additionalInformation_scrollbar_OMP_table_tr5_td1        :  "0 &#36; à 499,99 &#36;",
		additionalInformation_scrollbar_OMP_table_tr5_td2        :  "2 &cent; le litre&#42;",
		
		additionalInformation_scrollbar_OMP_Text3               : "<sup>&#42;</sup> Le rabais passe à 2 &cent; le litre dès que le total des achats effectués dans les postes d’essence Canadian Tire dépasse 500 &#36;.",
		additionalInformation_scrollbar_OMP_Text4               : "<p><strong>Quels sont les achats admissibles :</strong>  Tous les achats portés à votre compte Mastercard Avantage Essence sont admissibles&#44; à l'exception des frais d'intérêt&#44; des transferts de soldes&#44; des avances de fonds&#44; des frais relatifs à la carte Mastercard Avantage Essence&#44; des primes d'assurance&#44; des frais d'adhésion à un service offert par Canadian Tire &#44; de toute transaction de jeu de hasard (incluant l'achat de billets de loterie et toute transaction effectuée dans un casino)&#44; des transferts de fonds et des paiements de taxes.</p>",
		additionalInformation_scrollbar_OMP_Text5               : "<p><strong>Prime pour achats effectués chez Canadian Tire:</strong> Le montant des achats effectués dans les magasins Canadian Tire, par téléphone dans le catalogue Canadian Tire, en ligne sur le site de Canadian Tire et dans les magasins L’Équipeur/Mark’s Work Wearhouse sera doublé aux fins de calcul du rabais sur chaque litre. À titre d’exemple, si le montant total des achats effectués à ces points de vente s’élève à 450 &#36; pendant une période de facturation, nous considérerons que vous avez dépensé 900 &#36;.</p>",
		additionalInformation_scrollbar_OMP_Text6               : "<p><strong>Rabais accordé automatiquement:</strong> Le montant du rabais au litre sera déduit automatiquement et sera imprimé sur votre reçu.Vous ne devez pas utiliser la carte Mastercard Avantage Essence dans le cadre de toute entreprise de transport commercial ni de toute entreprise qui exploite un parc de véhicules automobiles.Nous nous réservons le droit d’annuler sans préavis toute carte Mastercard Avantage Essence ainsi utilisée.</p>",
		additionalInformation_scrollbar_OMP_Text7               : "<p><strong>Modification aux présentes modalités:</strong> Nous pouvons modifier ces modalités en tout temps&#44; après vous avoir donné un préavis par la poste ou par courriel à l'adresse à laquelle nous envoyons vos relevés de compte Mastercard Avantage Remise entre le 90e et le 60e jour avant l'entrée en vigueur l'amendement. Cela inclut la modification de toute disposition des présentes modalités.  L'avis indiquera soit la nouvelle clause des modalités&#44; soit la clause modifiée et la clause telle qu'elle se lisait auparavant&#44; ainsi que la date de l'entrée en vigueur de la nouvelle clause.</P>",
		additionalInformation_scrollbar_OMP_Text8               : "<p><strong>Annulation du programme de rabais :</strong> Le programme de rabais de la carte Mastercard Avantage Essence peut être annulé moyennant un préavis de 60 jours.</P>",
		additionalInformation_scrollbar_OMP_Text9               : "<p><strong>Perte du droit au rabais :</strong> Vous ne serez plus admissible au rabais si nous annulons votre droit d’utiliser la carte Mastercard Avantage Essence en raison d’un manquement aux dispositions du contrat de titulaire de carte.</P><P><span class=\"superscriptsFootnote\"><sup>MD</sup></span>/<span class=\"superscriptsFootnote\"><sup>MC</sup></span> Sauf indication contraire, toutes les marques de commerce sont la propriété de La Société Canadian Tire Limitée et sont utilisées sous licence.</P><P><span class=\"superscriptsFootnote\"><sup>MD</sup></span>/<span class=\"superscriptsFootnote\"><sup>MC</sup></span> Mastercard est une marque de commerce déposée et le logo des deux cercles imbriqués est une marque de commerce de Mastercard International Incorporated.</P>",
		additionalInformation_scrollbar_OMP_Text10              : " ",
		
		additionalInformation_scrollbar_OMR_Text1              : "<p>Vous pouvez obtenir des primes de remise en argent d’un montant illimité sur votre carte Mastercard Avantage Remise pour chaque année de programme. Une année de programme consiste en douze mois consécutifs commençant à la date à laquelle vous avez adhéré au programme. Votre adhésion au programme entre automatiquement en vigueur le jour où votre demande de carte Mastercard Avantage Remise est approuvée.</p>",
		additionalInformation_scrollbar_OMR_Text2              : "<p><strong>Comment obtenir vos remises en argent :</strong> Vous obtenez des primes de remise en argent chaque fois qu’un achat admissible est inscrit à votre compte Mastercard Avantage Remise. Le taux utilisé pour calculer le montant de la prime de remise en argent octroyé sur un achat est déterminé d’après le montant net des nouveaux achats (achats moins crédits) effectués depuis le début de l’année de programme au moment où l’achat en question est inscrit à votre compte. Les primes de remise en argent sont calculées selon les taux suivants : 0&#44;25 &#37; sur la tranche des nouveaux achats nets qui est égale ou inférieure à 1 500 &#36;; 0&#44;5 &#37; sur la tranche des nouveaux achats nets qui est supérieure à 1 500 &#36; et égale ou inférieure à 3 000 &#36;; 1 &#37; sur la tranche des nouveaux achats nets qui est supérieure à 3 000 &#36; et égale ou inférieure à 24 000 &#36;; et 1&#44;5 &#37; sur la tranche de tous les nouveaux achats supérieure à 24 000 &#36;. À titre d’exemple&#44; si le montant net des nouveaux achats inscrits à votre compte Mastercard Avantage Remise est égal à 1 000 &#36; et que vous achetez un article de 100 &#36;&#44; vous obtiendrez une prime de remise en argent de 0&#44;25 &#36; sur cet achat de 100 &#36;; mais si le montant net des nouveaux achats inscrits à votre compte Mastercard Avantage Remise s’élève à 3 500 &#36; et que vous achetez un article de 100 &#36;&#44; votre prime de remise en argent sera de 1 &#36; sur cet achat de 100 &#36;. Si un crédit est inscrit à votre compte Mastercard Avantage Remise (parce que vous avez retourné un article&#44; par exemple)&#44; le montant net des nouveaux achats admissibles au titre de votre compte sera ajusté en utilisant la même méthode&#44; mais en sens inverse. À titre d’exemple&#44; si le montant net des nouveaux achats inscrits à votre compte est égal à 3 100 &#36; et qu’un crédit de 200 &#36; est inscrit à votre compte Mastercard Avantage Remise&#44; votre solde de primes de remise en argent sera réduit de 1&#44;50 &#36; (1 &#37; de 99&#44;99 &#36; plus 0&#44;5 &#37; de 100&#44;01 &#36;). Il est possible que votre compte comporte un solde de primes de remise en argent négatif si le total des crédits inscrits à votre compte Mastercard Avantage Remise excède le total des transactions admissibles qui y ont été inscrites. Tout solde négatif à la fin d’une année de programme sera reporté à l’année de programme suivante. Votre limite de crédit peut modifier votre capacité d’obtenir des primes de remise en argent. Vous ne pourrez pas obtenir de primes de remise en argent si vous n’avez pas effectué le paiement minimum exigé au titre de votre compte pendant deux périodes de facturation consécutives ou si votre compte n’est pas en règle pour une raison ou une autre. Aucun intérêt ne sera payé sur les primes de remise en argent.</p>",
		additionalInformation_scrollbar_OMR_Text3              : "<p><strong>Achats admissibles :</strong> Tous les achats portés à votre compte Mastercard Carte Mastercard sont admissibles&#44; à l’exception des frais d’intérêt&#44; des transferts de soldes&#44; des avances de fonds (et de toute transaction traitée comme une avance de fonds)&#44; des frais relatifs à la carte&#44; des frais relatifs aux assurances et aux services offerts par les Services Financiers Canadian Tire Limitée&#44; ou de toute transaction de jeu de hasard (incluant l’achat de billets de loterie et toute transaction effectuée dans un casino) et des transferts de fonds.</p>",
		additionalInformation_scrollbar_OMR_Text4              : "<p><strong>Paiement des remises en argent :</strong> Une fois par année&#44; à la fin de la période de facturation se terminant le mois de votre anniversaire d’adhésion (mois au cours duquel vous avez adhéré au programme de primes en argent de la carte Mastercard Avantage Remise)&#44; les primes de remise en argent que vous avez accumulées à la date de fin de cette période de facturation sont automatiquement créditées à votre compte Mastercard Avantage Remise (si vous êtes autorisé à utiliser votre compte Mastercard Avantage Remise à ce moment-là) et sont utilisées pour réduire le solde servant à déterminer le paiement minimum. Vous pouvez aussi demander en tout temps (si vous êtes autorisé à utiliser votre compte Mastercard Avantage Remise au moment de votre demande) que les primes de remise en argent que vous avez accumulées soient créditées à votre compte Mastercard Avantage Remise et utilisées pour réduire le solde servant à déterminer le paiement minimum à effectuer à la date d’échéance suivante. Pour formuler une telle demande&#44; communiquez avec le Service à la clientèle au 1 800 459-6415. Le versement des primes de remise en argent n’aura pas pour effet de réduire le solde de votre compte Mastercard Avantage Remise qui sera utilisé pour calculer l’intérêt&#44; les frais ou toute prime d’assurance dont le montant est déterminé d’après le solde du compte. Si le montant des primes de remise en argent crédité à votre compte Mastercard Avantage Remise est plus élevé que le solde de votre compte&#44; la partie excédentaire de ce montant sera inscrite comme crédit à votre compte Mastercard Avantage Remise. À titre d’exemple&#44; si vous avez obtenu 10 $ de primes de remise en argent au cours d’une année de programme et que le solde de votre compte Mastercard Avantage Remise est de 0 $ sur le relevé de votre mois anniversaire&#44; un crédit de 10 $ sera inscrit à votre compte Mastercard Avantage Remise.</p>",
		additionalInformation_scrollbar_OMR_Text5              : "<p><strong>Perte de vos primes en espèces :</strong> Vous perdrez vos remises en espèces accumulées si votre compte est en souffrance depuis plus de six périodes de facturation; si vous faites l’objet d’une procédure de faillite; si nous avons entrepris une action en justice contre vous afin de recouvrer une somme que vous nous devez; si nous avons fermé votre compte par suite d’un manquement de votre part en vertu du Contrat du titulaire de carte; ou si vous fermez votre compte Mastercard Avantage Remise.</p>",
		additionalInformation_scrollbar_OMR_Text6              : "<p><strong>Prime sur les achats effectués chez Canadian Tire :</strong> Vous obtiendrez des primes de remise en argent au double du taux applicable sur les achats effectués dans les magasins Canadian Tire, les postes d’essence Canadian Tire, les magasins L’Équipeur et Mark’s, par téléphone dans le catalogue Canadian Tire et sur le site en ligne de Canadian Tire. À titre d’exemple, si le montant net de vos nouveaux achats annuels s’élève à 1 800 &#36; à un moment donné et que vous achetez un article de 200 &#36; chez Canadian Tire, vous obtiendrez une prime de remise en argent de 2 &#36; (1&#37; montant de votre achat).</p>",
		additionalInformation_scrollbar_OMR_Text7              : "<p><strong>Modification aux présentes modalités :</strong> Nous pouvons modifier ces modalités en tout temps, après vous avoir donné un préavis par la poste ou par courriel à l'adresse à laquelle nous envoyons vos relevés de compte Mastercard Avantage Remise entre le 90e et le 60e jour avant l'entrée en vigueur l'amendement. Cela inclut la modification de toute disposition des présentes modalités.</p><p>L'avis indiquera soit la nouvelle clause des modalités, soit la clause modifiée et la clause telle qu'elle se lisait auparavant, ainsi que la date de l'entrée en vigueur de la nouvelle clause.</p>",
		additionalInformation_scrollbar_OMR_Text8              : "<p><strong>Annulation du programme de primes en argent :</strong>Chaque programme de fidélisation peut être annulé sur envoi d’un préavis de 60 jours. Dans l’éventualité où le programme serait annulé&#44; toutes les primes de remise en argent obtenues en date de la prise d’effet de l’annulation seront automatiquement créditées à votre compte Mastercard Avantage Remise selon la méthode décrite précédemment.</p><p><span class=\"superscriptsFootnote\"><sup>MD</sup></span>/<span class=\"superscriptsFootnote\"><sup>MC</sup></span> Sauf indication contraire&#44; toutes les marques de commerce sont la propriété de La Société Canadian Tire Limitée et sont utilisées sous licence.</p><p><span class=\"superscriptsFootnote\"><sup>MD</sup></span>/<span class=\"superscriptsFootnote\"><sup>MC</sup></span> Mastercard est une marque de commerce déposée de Mastercard International Incorporated&#44; utilisée sous licence.</p>",
		
		//---------------  US5272 Bill 134 – BRB/OIC---------------------Loyalty terms and consent update ------------ENDS---------
		
		
		//----------------------------------------- Confirmation section ------------------------------
		
		//-------------- US4591 STARTS ----------------------------------------------------------------
		
		confirmation_steps4_OUT_5_Ecomm                            :  "<span class=\"overviewNSTableRedText\">Étape 4 de 5 :</span> Revue et Soumettre",
		confirmation_steps4_OUT_5_Decoupled                        :  "<span class=\"overviewNSTableRedText\">Étape 4 de 4 :</span> Revue et Soumettre",
		confirmation_steps4_OUT_5_Decoupled_OMP_OMR                :  "<span class=\"overviewNSTableRedText\">Étape 4 de 4 :</span> Vérifier et envoyer",
		
		//-------------- US4591 ENDS   ----------------------------------------------------------------
		
		confirmation_EditModeError							:   "Veuillez sauvegarder vos modifications avant de continuer.",
		
		confirmation_Title									:   "Confirmation",
		confirmation_Edit_Button_Label                      :   "Modifier",
		confirmation_Terms_Conditions                       :   "<b>Modalités et autorisation aux fins de la demande de carte</b>",
		confirmation_Privacy_Charter                        :	"<a href='https://www.ctfs.com/content/ctfs/fr/legal_privacy/privacy_charter.html' target='_blank'>Consultez notre politique en matiere de protection des renseignements personnels.</a>",  
		confirmation_Privacy_Charter_OMP_OMR                :	"<a href='https://www.ctfs.com/content/ctfs/fr/legal_privacy/privacy_charter.html' target='_blank'>Voir notre politique sur la protection des renseignements personnels.</a>",
		confirmation_Privacy_Charter_Text                   :   "En cochant cette case, j'accepte les modalités décrites dans l'autorisation aux fins de la demande de carte.",
		confirmation_Application_Authorization_Title        :   "Autorisation aux fins de la demande de carte",
		confirmation_Application_Authorization_SubTitle     :   "En cochant la case ci-dessous, j'accepte ce qui suit :",
		
		// Old line
		// confirmation_Application_Authorization_Item1        :   "Veuillez ouvrir un compte à mon nom pour le type de carte de crédit Mastercard<span class=\"superscriptsFootnote\"><sup>MD</sup></span> Options<span class=\"superscriptsFootnote\"><sup>MD</sup></span> de Canadian Tire indiqué ci-dessus (la « carte ») à un taux d’intérêt annuel de 19,99 % pour toutes les transactions (à l’exception des avances de fonds et des frais afférents) et de 21,99 % pour les avances de fonds et les frais afférents.",
		confirmation_Application_Authorization_Item1        :   "Veuillez ouvrir un compte à mon nom pour le type de carte de crédit émise par la Banque Canadian Tire indiqué ci-dessus (la « carte ») à un taux d’intérêt annuel de 19,99 % pour toutes les transactions (à l’exception des transactions au comptant et des frais afférents) et de 22,99 % pour les transactions au comptant et les frais afférents.",
		confirmation_Application_Authorization_Item1_OMP_OMR    :   "Veuillez ouvrir un compte à mon nom pour la carte de crédit de la Banque Canadian Tire indiquée ci-dessus (la « carte ») à un taux d’intérêt annuel de 19,99 % pour toutes les transactions (à l’exception des avances de fonds et des frais afférents) et de 22,99 % pour les avances de fonds et les frais afférents.",
		
		// US4997 - OMP CARD
		confirmation_Application_Authorization__OMP_CARD_Item2        :   "<b><p>Si votre demande de carte aux taux susmentionnés n’est pas approuvée, il se peut que la Banque Canadian Tire accepte d’émettre une carte à votre nom aux taux d’intérêt annuels suivants :</p><p>(i) si vous êtes un résident du Québec, <b>22,99 %</b> pour tous les débits;</p><p>(ii) si vous résidez ailleurs qu’au Québec, <b>25,99 %</b> pour tous les débits (à l’exception des transactions au comptant et des frais afférents) et <b>27,99 %</b> pour les transactions au comptant et les frais afférents.</p></b>",
		confirmation_Application_Authorization__OMR_CARD_Item2        :   "<b><p>S’il ne si votre demande de carte n’est pas approuvée aux taux susmentionnés, la Banque Canadian Tire peut quand même vous émettre une carte aux taux d’intérêt annuels suivants : </p><p>(i) si vous êtes un résident du Québec, <b>22,99 %</b> pour tous les frais; ou</p><p>(ii) si vous résidez à l’extérieur du Québec, <b>25,99 %</b> pour tous les frais (à l’exception des transactions au comptant et des frais afférents) et <b>27,99 %</b> pour les transactions au comptant et les frais afférents. sera de <b>27,99 %</b>.</p></b>",
		
		confirmation_Application_Authorization_Item5        :   "Je serai lié par les modalités du contrat du titulaire de carte de la Banque Canadian Tire que je recevrai avec la carte, lequel peut être modifié de temps à autre. Je serai la seule personne responsable de tous les débits imputés à ce compte, y compris ceux portés au compte par toute personne pour laquelle je vous ai demandé d’émettre une carte additionnelle. Je serai la seule personne qui recevra un relevé de compte.",
		confirmation_Application_Authorization_Item6        :   "<u>Vous pouvez obtenir des renseignements sur mes antécédents de crédit et d’autres renseignements personnels me concernant auprès d’agences d’évaluation du crédit et communiquer de tels renseignements à ces agences.</u>",
		confirmation_Application_Authorization_Item6a_OMP       :  "Je consens à ce que la Banque Canadian Tire procède à une vérification de mes renseignements personnels, comme mon nom, mon adresse, ma date de naissance, mon numéro de téléphone mobile auprès de mon fournisseur de services mobiles et j’autorise mon fournisseur de services mobiles à fournir ces renseignements <b>(Tenue de compte, type de compte, ect.)</b> à la Banque Canadian Tire. Les renseignements concernant mon compte de téléphonie mobile seront utilisés pour vérifier mon identité et d’effectuer des analyses et des enquêtes contre la fraude.",
		confirmation_Application_Authorization_Item6a_OMR       :  "Je consens à ce que la Banque Canadian Tire procède à une vérification de mes renseignements personnels, comme mon nom, mon adresse, ma date de naissance, mon numéro de téléphone mobile auprès de mon fournisseur de services mobiles et j’autorise mon fournisseur de services mobiles à fournir ces renseignements (Tenue de compte, type de compte, etc.) à la Banque Canadian Tire. Les renseignements concernant mon compte de téléphonie mobile seront utilisés pour vérifier mon identité et d’effectuer des analyses et des enquêtes contre la fraude.",
		confirmation_Application_Authorization_Item7        :   "Chaque personne pour laquelle je vous ai demandé d’émettre une carte additionnelle m’a autorisé à vous fournir les renseignements ci-dessus la concernant.",
		confirmation_Application_Authorization_Item8        :   "Si je vous fournis mon numéro d’assurance sociale, vous pouvez l’utiliser à des fins d’identification, notamment auprès d’agences d’évaluation du crédit.",
		confirmation_Application_Authorization_Item9		:	"J’accepte que, si vous approuvez ma demande, vous me transmettiez un document d’information initial et un contrat du titulaire de carte par voie électronique à l’adresse électronique fournie dans cette demande.",
		confirmation_Application_Authorization_Item10       :   "J’ai lu et j’ai compris le texte figurant sur la présente demande de carte.",
		confirmation_UnitNumber                             :   "No d'app.",
		confirmation_Suite		                            :   "Numero d'app. / bureau ",
		confirmation_prevAddressTitle                       :   "Adresse précédente",
		confirmation_Information_Accurate_Text              :   "Veuillez vous assurer que les renseignements transmis sont exacts pour nous aider à traiter votre demande aujourd'hui !",
		confirmation_Information_Accurate_Text_OMP_OMR      :   "Veuillez vous assurer que l’information soumise est exacte, car cela nous permettra de traiter votre demande dès aujourd’hui!",
		// US4579 Removal of CT
		confirmation_Update_CT_Profile_Text					:   "Mettre à jour l’adresse du profil mon fournie lors de la demande.",
		confirmation_ReceiveEmail                           :    ', Je veux recevoir les communications par courriel sur les offres, les promotions et les concours ainsi que des renseignements sur les produits et services.',
		confirmation_PrintPage								:	'Imprimer cette page',
		confirmation_print_header							:	'<img src="app/images/static_header_confirmation_fr.png"  class="print_header" id="img2" alt="test" width="954">',
		confirmation_ScreenIndicator						:	"Merci de patienter...",
		confirmation_footnoteContentText1					:	"<sup>1</sup> Primes octroyées sous forme d’« Argent » Canadian Tire avec la Carte<span class=\"superscriptsFootnote\"><sup>MD</sup></span>. Sous réserve des modalités et des restrictions visant l’octroi et l’échange des primes. Détails en magasin ou sur la page Programme de primes en « Argent » Canadian Tire. Les titulaires de la carte Mastercard Options en Nouvelle-Écosse participent à un autre programme de primes; veuillez vous rendre à l’adresse ",
		confirmation_footnoteContentText1Link				:	"<a href='https://www.ctfs.com/Products/CreditCards/OptionsMasterCard/CTMoneyRewards/' target='_blank'>ctfs.com/act.</a>",
		confirmation_footnoteContentText2					:	"<sup>2</sup> À la condition que votre compte soit en règle et que l’achat soit admissible à l’échange de primes.",	
		confirmation_footnoteContentText4					:	"<span class=\"superscriptsFootnote\"><sup>MD</sup></span>/<span class=\"superscriptsFootnote\"><sup>MC</sup></span> Sauf indication contraire, toutes les marques de commerce sont la propriété de La Société Canadian Tire Limitée et sont utilisées sous licence.",
		confirmation_footnoteContentText5					:	"<span class=\"superscriptsFootnote\"><sup>MD</sup></span>/<span class=\"superscriptsFootnote\"><sup>MC</sup></span> Mastercard et la marque figurative de Mastercard sont des marques de commerce déposées et PayPass est une marque de commerce de Mastercard International Incorporated.",	
		//additionalInformation_footnoteContentText6				:	"<span class=\"superscriptsFootnote\"><sup>MD</sup></span>/<span class=\"superscriptsFootnote\"><sup>MC</sup></span> Sauf indication contraire, toutes les marques de commerce sont la propriété de La Société Canadian Tire Limitée et sont utilisées sous licence.",
		//additionalInformation_footnoteContentText7				:	"<span class=\"superscriptsFootnote\"><sup>MD</sup></span>/<span class=\"superscriptsFootnote\"><sup>MC</sup></span> Mastercard et la marque figurative de Mastercard sont des marques de commerce déposées et PayPass est une marque de commerce de Mastercard International Incorporated.<br><span class=\"superscriptsFootnote\"><sup>MD</sup></span> Couverture-crédit et Couverture-crédit – Âge d’or sont la propriété des Services Financiers Canadian Tire Limitée",	

//		additionalInformation_footnoteContentText3				:	"Taxes applicables en sus. Payable mensuellement. Veuillez consulter le document Renseignements juridiques ou votre Certificat d’assurance pour prendre connaissance de toutes les modalités, conditions, limitations et les exclusions relatives à votre solde. Certaines conditions s’appliquent.",
//		additionalInformation_footnoteContentText4				:	"Si vous êtes âgé de moins de 66 ans, vous adhérerez à Couverture-crédit. Si vous êtes âgé de 66 à 75 ans, vous adhérerez à Couverture-crédit – Âge d’or. Couverture-crédit et Couverture-crédit – Âge d’or est souscrite auprès de American Bankers, Compagnie d’Assurance Vie de la Floride, et de American Bankers, Compagnie d’Assurances Générales de la Floride, filiales de Assurant Solutions<span class=\"superscriptsFootnote\"><sup>MD</sup></span>.",
//		additionalInformation_footnoteContentText5				:	"Plus les taxes applicables. Les frais d’adhésion débuteront une fois la première transaction effectuée avec votre carte de crédit de marque Canadian Tire. Par la suite, les frais d’adhésion seront facturés tous les mois à l'avance sur votre carte de crédit de marque Canadian Tire. Voir le document d'information juridique pour toutes les modalités, conditions, restrictions et exclusions. Certaines conditions s’appliquent.",
//		additionalInformation_footnoteContentText6				:	"<sup>&#8224;&#8224;</sup> Ces produits facultatifs sont offerts à tous les nouveaux titulaires de carte Mastercard de Canadian Tire. Les renseignements que vous fournissez sur la présente demande de carte sont utilisés pour déterminer votre admissibilité à l’obtention d’une carte Mastercard de Canadian Tire et non pour votre adhésion aux produits facultatifs, lesquels sont offerts à tous les titulaires de carte Canadian Tire.MD / MC Couverture-crédit et Couverture-crédit – Âge d’or sont des marques de commerce déposées des Services Financiers Canadian Tire Limitée, et sont utilisées sous licence. Le programme Surveillance d’identité classique est commandité par les Services Financiers Canadian Tire Limitée et fourni par Aimia Proprietary Loyalty Canada Inc." +
//																	"Rebound<span class=\"superscriptsFootnote\"><sup>MD</sup></span> est une marque de commerce déposée de Aimia Proprietary Loyalty Canada Inc",
//		additionalInformation_footnoteContentText7				:	"<span class=\"superscriptsFootnote\"><sup>MD</sup></span>/<span class=\"superscriptsFootnote\"><sup>MC</sup></span> Sauf indication contraire, toutes les marques de commerce sont la propriété de La Société Canadian Tire Limitée et sont utilisées sous licence.<br>" +
//				  												    "<span class=\"superscriptsFootnote\"><sup>MD</sup></span>/<span class=\"superscriptsFootnote\"><sup>MC</sup></span> Mastercard et la marque figurative de Mastercard sont des marques de commerce déposées et <i>PayPass</i> est une marque de commerce de Mastercard International Incorporated.",	

		
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
		confirmation_Button_Label                           :   "SOUMETTRE",

		// US3627
		confirmation_Ctfs_Button_Label						:	"SOUMETTRE ET VÉRIFIER L’IDENTITÉ",
		
		identityVerification_FinalText1						:	"Votre demande de carte Mastercard<span class=\"superscripts\"><sup>MD</sup></span> Options<span class=\"superscripts\"><sup>MD</sup></span> de Canadian Tire a été approuvée, et celle-ci sera ajoutée à votre compte Canadian Tire afin que vous puissiez commencer à l'utiliser en ligne dès aujourd'hui à l'adresse canadiantire.ca!",
		//identityVerification_FinalText2						:	"Vous recevrez également votre carte Mastercard Options, que vous pourrez utiliser partout, par la poste dans les sept à dix jours ouvrables.",
		identityVerification_FinalText3						:	"Votre document d’information initial et votre contrat du titulaire de carte vous seront envoyés par courriel à l’adresse : ",
		identityVerification_FinalText4						:	"En cas d’erreur, veuillez composer le 1 800 459-6415. Vous recevrez aussi une copie de ces renseignements dans la trousse de bienvenue contenant votre carte.",
		identityVerification_FinalText5						:	"*Notez les quatre derniers chiffres pour pouvoir vous y référer lors de l’utilisation de Mon compte CT et lors du processus de paiement.",
		
		identityVerification_PendingTitle					:   "<strong>Merci - Nous avons reçu votre demande</strong>",

		identityVerification_PendingText1					:	"Votre demande est maintenant à l'étude par notre équipe. Le processus d’évaluation dure généralement quelques jours, mais prend parfois jusqu’à quelques semaines, selon les renseignements fournis.",
		identityVerification_PendingText1_OMP_OMR			:	"Si votre demande est approuvée, vous recevrez une Trousse de bienvenue par courrier dans les dix jours ouvrables.",

                                                              
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
		approved_title_one_OMR                              :   "You have been <span class=\"overviewNSTableRedText\">approved</span> for your Cash Advantage<sup>&trade;</sup> Mastercard<sup>&trade;</sup>",
		approved_title_one_OMP                              :   "You have been <span class=\"overviewNSTableRedText\">approved<sup>&trade;</sup>  for your Gas Advantage<sup>&reg;</sup> Mastercard<sup>&reg;</sup>",
		approved_title_one_listItem1_OMR                    :   "Over the next 7-10 business days, you will receive your Cash Advantage Mastercard &amp; Welcome Package.",
		approved_title_one_listItem1_OMP                    :   "Over the next 7-10 business days, you will receive your Gas Advantage Mastercard &amp; Welcome Package.",
		approved_title_two                                  :   "Au cours des 7 aux 10 prochains jours ouvrables, vous recevrez :",
		approved_title_one_listItem1                        :   "Vous recevrez votre Déclaration initiale et votre Contrat du titulaire de carte par courriel.",
		approved_title_one_listItem2                        :   "Votre carte est dors et déjà ajoutée à votre profil d'achat en ligne, de sorte que vous pouvez commencer à l'utiliser en ligne dès aujourd'hui.",
		approved_title_one_listItem3                        :   "Veuillez noter les quatre derniers chiffres de votre numéro de carte pour le processus de paiement.",
		approved_title_two_listItem_OMX                     :   "Votre Mastercard<sup>MD</sup> Triangle<sup>MC</sup> accompagnée de votre trousse de bienvenue.",
		approved_title_two_listItem_OMZ                     :   "Votre World Elite Mastercard<sup>MD</sup> Triangle<sup>MC</sup> accompagnée de votre trousse de bienvenue.",
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
		pending_page_note_OMR                           :   "<b>IMPORTANT : NE PRÉSENTEZ PAS UNE NOUVELLE DEMANDE.<b>",
		pending_page_note_OMP                           :   "<b>REMARQUE : NE PRÉSENTEZ PAS UNE NOUVELLE DEMANDE.<b>",
		pending_page_close_button_text                      :   "FERMER",
		declined_message_one                                :   "Malheureusement, nous ne sommes pas en mesure de traiter instantanément votre demande aujourd'hui. Notre équipe passe actuellement votre demande de carte en revue. Le processus d’évaluation dure généralement quelques jours, mais prend parfois jusqu’à deux semaines, selon les renseignements fournis.",
		declined_message_two                                :   "<strong>Que se passe-t-il ensuite?</strong>",
		declined_message_two_OMP_OMR                                :   "<strong>Que se passe-t-il-maintenant?</strong>",
		declined_message_three                              :   "Questions? Please call 1-800-459-6415.",
		pendinDeclinedPageOMX_OMZ                           :   "<span class=\"overviewNSTableRedText\"> &#91; Mastercard<sup>MD</sup> Triangle<sup>MC</sup> OR  World Elite Mastercard<sup>MD</sup> Triangle<sup>MC</sup> &#93;</span>",
		
		pendingDeclined_page_li_one                         :   "Vous recevrez également une carte Récompenses Triangle<sup>MC</sup> et une trousse de bienvenue au programme Récompenses Triangle séparément dans un délai de 7 à 10 jours ouvrables.",
		pendingDeclined_page_li_two_OMX                     :   "Si votre demande est approuvée, votre trousse de bienvenue contenant votre carte Mastercard<sup>MD</sup> Triangle<sup>MC</sup> vous parviendra par la poste dans un délai de 7 à 10 jours ouvrables.",
		pendingDeclined_page_li_two_OMZ                     :   "Si votre demande est approuvée, votre trousse de bienvenue contenant votre carte World Elite Mastercard<sup>MD</sup> Triangle<sup>MC</sup> vous parviendra par la poste dans un délai de 7 à 10 jours ouvrables.",
		pendingDeclined_page_li_two_OMP                     :   "- Si votre demande est approuvée, vous recevrez une Trousse de bienvenue par courrier dans les dix jours ouvrables.",
		
		pendingDeclined_page_li_two_OMP_footerText1                     :   "Services Financiers Canadian Tire est une dénomination commerciale de la Banque Canadian Tire.",
		pendingDeclined_page_li_two_OMP_footerText2                     :   "<span class=\"superscripts\"><sup>MD/MC</sup></span>  Sauf indication contraire, toutes les marques de commerce sont la propriété de La Société Canadian Tire et sont utilisées sous licence.",
		pendingDeclined_page_li_two_OMP_footerText3                     :   "<span class=\"superscripts\"><sup>MD/MC</sup></span> Mastercard est une marque de commerce déposée et le logo des deux cercles imbriqués est une marque de commerce de Mastercard International Incorporated.",

		
		// -- US4675 ends --//
		
		//--------------- END --------------------- Identity Verification section -------------- END -----------
			
		//-----start----US3084 iLoyalty - BRB front facing chagnes -  Loyalty Notification --------------//	
		
		overview_NS_Attention                 		        :   "À l’attention des résidents de la Nouvelle-Écosse : <br> La présente « Déclaration sur le coût du crédit relativement aux demandes de carte de crédit » ne s’applique pas aux résidents de la Nouvelle-Écosse qui demandent la carte Mastercard Options de Canadian Tire. La prochaine étape du processus de demande consiste en la déclaration sur le coût de crédit approprié.",	
		overview_NS_AttentionNote                           :   "",
		overview_NS_LeftRed                                 :   "Le programme de primes auquel participe la carte Mastercard<span class=\"superscripts\"><sup>MD</sup></span> Options<span class=\"superscripts\"><sup>MD</sup></span> de Canadian Tire a changé.",
		overview_NS_LeftTitile                              :   "À compter du 10 octobre 2014, le programme Avantage « Argent » Canadian Tire<span class=\"superscripts\"><sup>MD</sup></span> deviendra le programme Mon « Argent » Canadian Tire<span class=\"superscripts\"><sup>MC</sup></span>",
		overview_NS_LeftBullet1                             :   "Obtenez 10X l’« Argent » Canadian Tire<span class=\"superscripts\"><sup>MC1</sup></span> tous les jours aux magasins Canadian Tire, y compris aux centres-autos, aux magasins PartSource<span class=\"superscripts\"><sup>MD</sup></span>, Mark’s / L’Équipeur<span class=\"superscripts\"><sup>MD</sup></span> et Sport Chek<span class=\"superscripts\"><sup>MD2</sup></span>.",
		overview_NS_LeftBullet2                             :   "Obtenez 2X l’« Argent » Canadian Tire partout ailleurs où vous magasinez<span class=\"superscripts\"><sup>2</sup></span>.",
		overview_NS_LeftBullet3                             :   "Obtenez de l’« Argent » Canadian Tire dans les postes d’essence Canadian Tire participants<span class=\"superscripts\"><sup>4</sup></span>.",
		overview_NS_LeftNote                                :   "Remarque : Le taux auquel vous obtiendrez de l’« Argent » Canadian Tire est différent de celui auquel vous accumulez des points Avantage « Argent »<span class=\"superscripts\"><sup>3</sup></span>.",
		overview_NS_LeftText                                :   "C’est facile d’échanger votre « Argent » Canadian Tire, directement à la caisse des magasins Canadian Tire ou en ligne pour les cartes-cadeaux, à l’adresse canadiantire.ca.",
		overview_NS_DisclosureRed                                 :   "Déclaration sur le coût du crédit relativement aux demandes de carte de crédit",
		overview_NS_DisclosureLeft1                                :   "Taux d’intérêt annuel",
		
		// Old code
		// Overview_NS_DisclosureRight1                                :   "<p>Les taux d’intérêt ci-dessous seront en vigueur à compter de la date d’ouverture de votre compte : <br>Tous les débits portés à votre compte (à l’exception des avances de fonds et des frais afférents) : <strong>19,99 %</strong></p> <p>Avances de fonds et frais afférents : <strong>21,99 %</strong></p> <p>Si votre demande de carte à ce taux n’est pas approuvée, il se peut que la Banque Canadian Tire accepte d’émettre une carte à votre nom portant un taux d’intérêt annuel de <strong>25,99 %</strong> pour toutes les transactions (à l’exception des avances de fonds et des frais afférents) et de <strong>27,99 %</strong>pour les avances de fonds et les frais afférents.</p>",
		// UAT 42 - July 22, CP Revitalization 
		Overview_NS_DisclosureRight1                               :  "<p>Les taux d’intérêt ci-dessous seront en vigueur à compter de la date d’ouverture de votre compte : </p><p>Tous les débits portés à votre compte (à l’exception des transactions au comptant et des frais afférents) : <strong>19,99 %</strong></p><p>Transactions au comptant (avances de fonds, transferts de solde, chèques de commodité, transferts de fonds, achats de chèques de voyage et transactions liées aux jeux de hasard) et frais afférents: <strong> 22,99 %</strong></p><p><strong>Pour la carte Mastercard<sup>MD</sup> Triangle<sup>MC</sup>:</strong></p><p>Si votre demande de carte aux taux susmentionnés n’est pas approuvée, il se peut que la Banque Canadian Tire accepte d’émettre une carte à votre nom aux taux d’intérêt annuels suivants :</p><p>(i) si vous êtes un résident du Québec, <strong>22,99 %</strong> pour tous les débits;</p><p>(ii) si vous résidez ailleurs qu’au Québec, <strong>25,99 %</strong> pour tous les débits (à l’exception des transactions au comptant et des frais afférents) et <strong>27,99 %</strong> pour les transactions au comptant et les frais afférents.</p>",
		Overview_NS_DisclosureRight1_DEC_OMX                       :  "<p>Les taux d’intérêt ci-dessous seront en vigueur à compter de la date d’ouverture de votre compte : <br>Tous les débits portés à votre compte (à l’exception des transactions au comptant et des frais afférents) : <strong>19,99 %</strong></p> <p>Transactions au comptant (avances de fonds, transferts de solde, chèques de commodité, transferts de fonds, achats de chèques de voyage et transactions liées aux jeux de hasard) et frais afférents : <strong>22,99 %</strong></p><p><b>Pour la carte Mastercard<sup>MD</sup> Triangle<sup>MC</sup>:</b></p><p>Si votre demande de carte aux taux susmentionnés n’est pas approuvée, il se peut que la Banque Canadian Tire accepte d’émettre une carte à votre nom aux taux d’intérêt annuels suivants :</p><p>(i) si vous êtes un résident du Québec, <b>22,99 %</b> pour tous les débits;</p><p>(ii) si vous résidez ailleurs qu’au Québec, <b>25,99 %</b> pour tous les débits (à l’exception des transactions au comptant et des frais afférents) et <b>27,99 %</b> pour les transactions au comptant et les frais afférents.</p>",
		Overview_NS_DisclosureRight1_DEC_OMZ                       :  "<p>Les taux d’intérêt ci-dessous seront en vigueur à compter de la date d’ouverture de votre compte : <br>Tous les débits portés à votre compte (à l’exception des transactions au comptant et des frais afférents) : <strong>19,99 %</strong></p> <p>Transactions au comptant (avances de fonds, transferts de solde, chèques de commodité, transferts de fonds, achats de chèques de voyage et transactions liées aux jeux de hasard) et frais afférents: <strong>22,99 %</strong></p>",
		Overview_NS_DisclosureRight1_DEC_OMR                       :  "<p>Les taux d’intérêt ci-dessous seront en vigueur à compter de la date d’ouverture de votre compte.</p><p>Tous les débits portés à votre compte (à l’exception des transactions au comptant et des frais afférents) : <strong>19,99 %.</strong></p><p>Transactions au comptant (avances de fonds, transferts de solde, chèques de commodité, transferts de fonds, achats de chèques de voyage et transactions liées aux jeux de hasard) et frais afférents : <strong>22,99 %.</strong></p><p>Si votre demande de carte aux taux susmentionnés n’est pas approuvée, il se peut que la Banque Canadian Tire accepte d’émettre une carte à votre nom aux taux d’intérêt annuels suivants :</p><p>(i) si vous êtes un résident du Québec, <strong>22,99 %</strong> pour tous les frais; ou</p><p>(ii) si vous résidez à l’extérieur du Québec, <strong> 25,99 %</strong> pour tous les frais (à l’exception des transactions au comptant et des frais afférents) et <strong>27,99 %</strong> pour les transactions au comptant et les frais afférents. sera de <strong>27,99 %.</strong></p>",
		Overview_NS_DisclosureRight1_DEC_OMP                       :  "<span>Les taux d’intérêt ci-dessous seront en vigueur à compter de la date d’ouverture de votre compte. </span><br><span>Tous les débits portés à votre compte (à l’exception des transactions au comptant et des frais afférents) : <strong>19,99 %.</strong></span><br><p>Transactions au comptant (avances de fonds, transferts de solde, chèques de commodité, transferts de fonds, achats de chèques de voyage et transactions liées aux jeux de hasard) et frais afférents : <strong>22,99 %.</strong></p><p>Si votre demande de carte n’est pas approuvée aux taux susmentionnés, la Banque Canadian Tire peut quand même vous émettre une carte aux taux d’intérêt annuels suivants : </p><p>(i) si vous êtes un résident du Québec, <strong>22,99 %</strong> pour tous les frais; ou</p><p>(ii) si vous résidez à l’extérieur du Québec, <b>25,99 %</b> pour tous les frais (à l’exception des transactions au comptant et des frais afférents) et <b>27,99 %</b> pour les transactions au comptant et les frais afférents. sera de <strong>27,99 %.</strong></p>",
		
		overview_NS_DisclosureLeft2                                :   "Période sans intérêt et délai de grâce",
		Overview_NS_DisclosureRight2                               :   "<p>Au moins <b>26</b> jours ou, si vous résidez ailleurs qu’au Québec, au moins <b>21</b> jours.</p><p>Vous bénéficiez d’un délai de grâce d’au moins <b>26</b> jours sur les nouveaux achats (d’au moins <b>21</b> jours si vous résidez ailleurs qu’au Québec) si nous recevons le paiement intégral du solde dû figurant sur votre relevé courant au plus tard à la date d’échéance de ce paiement.</p><p>Il n’y a aucun délai de grâce sur les transactions au comptant, comme les chèques de commodité, les transferts de solde et les avances de fonds, ni sur les frais liés à ces transactions.</p>",
		
		Overview_NS_DisclosureRight2_OMP_CARD                      :   "<p>Au moins <b>26</b> jours ou, si vous résidez ailleurs qu’au Québec, au moins <b>21</b> jours.</p><p>Vous bénéficiez d’un délai de grâce d’au moins <b>26</b> jours sur les nouveaux achats (d’au moins <b>21</b> jours si vous résidez ailleurs qu’au Québec) si nous recevons le paiement intégral du solde dû figurant sur votre relevé courant au plus tard à la date d’échéance de ce paiement.</p><p>Il n’y a aucun délai de grâce sur les transactions au comptant, comme les chèques de commodité, les transferts de solde et les avances de fonds, ni sur les frais liés à ces transactions.</p>",
		
		overview_NS_DisclosureLeft3                                :   "Paiement minimum",
		Overview_NS_DisclosureRight3                               :   "<p>Si vous résidez dans une autre province que le Québec, le paiement minimum correspondra à la somme : </p>" +
																		"<p>(A) des intérêts et des frais figurant sur votre relevé; plus</p>" +
																		"<p>(B) tout montant en souffrance ou, s’il est plus élevé, tout montant qui excède votre limite de crédit; plus</p>" +
																		"<p>(C) le montant de tous les versements échelonnés en vertu de programmes de paiements égaux alors dus; plus</p>" +
																		"<p>(D) <b>10 $.</b></p>" +
																		"<p>Un solde inférieur à <strong>10 $</strong> doit être réglé intégralement.</p><br>" +
																		"<p>Si vous résidez dans la province de Québec, le paiement minimum correspondra à la somme :</p>" +
																		"<p>(A) du plus élevé des montants suivants,à savoir : (i) les intérêts et les frais figurant sur votre relevé plus <strong>10 $</strong>, ou (ii) <strong>5 %</strong> du nouveau solde, à l’exclusion des montants dus aux termes de programmes de modalités spéciales de paiement; plus</p>" +
																		"<p>(B) tout montant qui excède votre limite de crédit, plus</p>" +
																		"<p>(C) tout montant en souffrance qui n’est pas inclus dans le montant (B) ci-dessus, plus</p>" +
																		"<p>(D) le montant de tous les versements échelonnés en vertu de programmes de paiements égaux alors dus.</p>"+
																		"<p>Un solde inférieur à <strong>10 $</strong> doit être réglé intégralement.</p>",
		
		Overview_NS_DisclosureRight3_OMP                           :   "<p>Si vous résidez dans une autre province que le Québec, le paiement minimum correspondra à la somme :</p><p>(A) des intérêts et des frais figurant sur votre relevé; plus</p><p>(B) tout montant en souffrance ou, s’il est plus élevé, tout montant qui excède votre limite de crédit; plus</p><p>(C) le montant de tous les versements échelonnés en vertu de programmes de paiements égaux alors dus; plus</p><p>(D) <b>10 $</b>.</p><p>Un solde inférieur à <b>10 $</b> doit être réglé intégralement.</p><br><p>Si vous résidez dans la province de Québec, le paiement minimum correspondra à la somme :</p><p>(A) du plus élevé des montants suivants, à savoir : (i) les intérêts et les frais figurant sur votre relevé plus <b>10 $</b>, ou (ii) <b>5 %</b> du nouveau solde, à l’exclusion des montants dus aux termes de programmes de modalités spéciales de paiement; plus</p><p>(B) tout montant qui excède votre limite de crédit, plus</p><p>(C) tout montant en souffrance qui n’est pas inclus dans le montant (B) ci-dessus, plus</p><p>(D) le montant de tous les versements échelonnés en vertu de programmes de paiements égaux alors dus.</p><p>Un solde inférieur à <b>10 $</b> doit être réglé intégralement.</p>",
		Overview_NS_DisclosureRight3_OMR                           :   "<p>Si vous résidez dans une autre province que le Québec, le paiement minimum correspondra à la somme :</p>" +
																		"<p>(A) des intérêts et des frais figurant sur votre relevé; plus</p>" +
																		"<p>(B) tout montant en souffrance ou, s’il est plus élevé, tout montant qui excède votre limite de crédit; plus</p>" +
																		"<p>(C) le montant de tous les versements échelonnés en vertu de programmes de paiements égaux alors dus; plus</p>" +
																		"<p>(D) <b>10 $</b>.</p>" +
																		"<p>Un solde inférieur à <strong>10 $</strong> doit être réglé intégralement.</p><br>" +
																		"<p>Si vous résidez dans la province de Québec, le paiement minimum correspondra à la somme :</p>" +
																		"<p>(A) du plus élevé des montants suivants, à savoir : (i) les intérêts et les frais figurant sur votre relevé plus <b>10 $</b>, ou (ii) <b>5 %</b> du nouveau solde, à l’exclusion des montants dus aux termes de programmes de modalités spéciales de paiement; plus</p>" +
																		"<p>(B) tout montant qui excède votre limite de crédit, plus</p>" +
																		"<p>(C) tout montant en souffrance qui n’est pas inclus dans le montant (B) ci-dessus, plus</p>" +
																		"<p>(D) le montant de tous les versements échelonnés en vertu de programmes de paiements égaux alors dus.</p>" +
																		"<p>Un solde inférieur à <strong>10 $</strong> doit être réglé intégralement.</p>",		
		
		overview_NS_DisclosureLeft4                                :   "Opérations de change",
		Overview_NS_DisclosureRight4                               :   "Toutes les transactions effectuées dans une monnaie étrangère seront converties en dollars canadiens au taux de conversion Mastercard courant majoré de <strong>2,5 %</strong> (dans le cas de débits portés à votre compte) ou réduit de <strong>2,5 %</strong> (dans le cas de crédits inscrits à votre compte) à la date à laquelle la transaction est inscrite à votre compte.",
		
		Overview_NS_DisclosureRight4_OMP                           :   "Toutes les transactions effectuées dans une devise étrangère seront converties en dollars canadiens au taux de conversion Mastercard courant majoré de <strong>2,5 %</strong> (dans le cas de débits portés à votre compte) ou réduit de <strong>2,5 %</strong> (dans le cas de crédits inscrits à votre compte) à la date à laquelle la transaction est inscrite à votre compte.",
		
		Overview_NS_DisclosureRight4_OMR                           :   "Toutes les transactions effectuées dans une devise étrangère seront converties en dollars canadiens au taux de conversion Mastercard courant majoré de <strong>2,5 %</strong> (dans le cas de débits portés à votre compte) ou réduit de <strong>2,5 %</strong> (dans le cas de crédits inscrits à votre compte) à la date à laquelle la transaction est inscrite à votre compte.",
		
		overview_NS_DisclosureLeft5                                :   "Frais annuels",
		Overview_NS_DisclosureRight5                                :   "Aucuns",
		overview_NS_DisclosureLeft6                               :   "Autres frais",
		
		// old code
		// Overview_NS_DisclosureRight6                            :   "<p><strong>Avances de fonds : 4 $ – </strong> Facturés à la date à laquelle la transaction est inscrite à votre compte.</p> <p><strong> Frais de dépassement de limite de crédit : 29 $ –</strong> Sauf si vous habitez au Québec, nous vous facturerons des frais de dépassement de limite de crédit de <strong>29 $</strong> si à la date d’un relevé votre solde excède votre limite de crédit et qu’il atteint ou excède <strong>2000 $.</strong>Cependant, pour déterminer si vous devez payer des frais de dépassement de limite de crédit, nous n’inclurons pas dans ce solde tout montant imputé sur cette facture pour des frais d’intérêts, ou pour une assurance crédit offerte par nous ou une de nos filiales. </p> <p><strong> Frais pour chèque sans provision ou refusé : 25 $ – </strong> Imputés si un paiement que vous effectuez est refusé.</p><p><strong> Copie de remplacement : 2 $ –</strong> Imputés lorsque vous demandez une copie d’un relevé ou d’une facture de vente.<p></p><strong>Administration du solde créditeur :</strong> Le moindre de <strong>10 $</strong>ou du solde du compte. – Imputés le dernier jour d’une période de facturation lorsque le compte comporte un solde créditeur et qu’il a été inactif au cours des <strong>12</strong> périodes de facturation.</p>",

		Overview_NS_DisclosureRight6                            :   "<p><strong>Avances de fonds : 4 $</strong> – Facturés à la date à laquelle la transaction est inscrite à votre compte.</p><p><strong>Frais pour chèque sans provision ou refusé : 25 $</strong> – Imputés si un paiement que vous effectuez est refusé.</p><p><strong>Copie de remplacement : 2 $</strong> – Imputés lorsque vous demandez une copie d’un relevé.</p><p><strong>Administration du solde créditeur :</strong> Le moindre de <b>10 $</b> ou du solde du compte. – Imputés le dernier jour d’une période de facturation lorsque le compte comporte un solde créditeur et qu’il a été inactif au cours des <b>12</b> périodes de facturation.</p>",
		
		
		Overview_NS_DisclosureRight6_OMP                        :   "<p><b>Avances de fonds : 4 $</b> – Facturés à la date à laquelle la transaction est inscrite à votre compte.</p><p><b>Frais pour chèque sans provision ou refusé : 25 $</b> – Imputés si un paiement que vous effectuez est refusé.</p><p><b>Copie de remplacement : 2 $</b> – Imputés lorsque vous demandez une copie d’un relevé.</p><p><b>Administration du solde créditeur :</b> Le moindre de <b>10 $</b> ou du solde du compte. – Imputés le dernier jour d’une période de facturation lorsque le compte comporte un solde créditeur et qu’il a été inactif au cours des <b>12</b> périodes de facturation.</p>",
		// US3382
		Overview_NS_EffectiveDate_forQuebec					    : "<b>Pour les résidents du Québec : Les taux de crédit correspondent aux taux d’intérêt annuels indiqués dans le tableau ci-dessus.</b>",
		Overview_NS_EffectiveDate								: "<b>Renseignements en vigueur le 13 juin 2019.</b>",
		Overview_NS_EffectiveDate_OMP_forQuebec				    : "<b>Pour les résidents du Québec : Les taux de crédit sont les taux d’intérêt annuels indiqués dans le tableau ci-dessus.</b>",
		Overview_NS_EffectiveDate_OMP							: "<b>Les renseignements sont en vigueur à compter du 13 juin 2019.</b>",
		Overview_AccuralInterest								: "<b>Accumulation d’intérêt : </b> L’intérêt court quotidiennement sur chaque débit à compter de la date de la transaction donnant lieu à un débit particulier.",
		
		// 2016-03-17 chrch: Adding hyperlinks as per business request US3964
		Overview_NS_LegalText1 									: "<span class=\"superscripts\"><sup>1</sup></span> Primes octroyées sous forme d’« Argent » Canadian Tire. Sous réserve de certaines modalités, conditions et restrictions. Consultez les modalités du programme à l’adresse <a href='http://www.canadiantire.ca/fr/my-canadian-tire-money.html'>www.canadiantire.ca</a> ou <a href='http://www.ctfs.com/act'>www.ctfs.com/act</a> pour en savoir plus.",
		Overview_NS_LegalText2 									: "<span class=\"superscripts\"><sup>2</sup></span> Les titulaires de carte Mastercard Options de Canadian Tire obtiennent de l’« Argent » Canadian Tire à un taux qui est 10X (ou 2X selon le cas) le taux auquel les autres membres du programme Mon « Argent » Canadian Tire obtiennent de l’« Argent » Canadian Tire lors d’achats effectués par ces membres dans les magasins Canadian Tire (si ces membres payent en argent comptant, avec une carte de débit ou une carte de crédit qui n’est pas liée à ce programme de fidélisation). Le taux offert est exclusif de toute prime, offre promotionnelle ou transaction d’échange.",
		Overview_NS_LegalText3 									: "<span class=\"superscripts\"><sup>3</sup></span> L’« Argent » Canadian Tire obtenu dans les magasins Canadian Tire ou en ligne à canadiantire.ca est calculé sur le montant avant taxes des achats admissibles et est arrondi au cent près. Pour connaître les taux actuels, composez le 1 800 226-8473.",
		Overview_NS_LegalText4 									: "<span class=\"superscripts\"><sup>4</sup></span> Un montant d’achat d’essence minimum peut être requis. Le taux peut varier d’un poste d’essence à l’autre. Rendez-vous aux postes d’essence locaux pour en savoir plus.",
		Overview_NS_LegalText5 									: "<span class=\"superscripts\"><sup>MD</sup></span>/<span class=\"superscripts\"><sup>MC</sup></span> Canadian Tire, Options Canadian Tire, PartSource et le triangle de Canadian Tire sont des marques de commerce déposées et Mon « Argent » Canadian Tire et « Argent » Canadian Tire sont des marques de commerce de La Société Canadian Tire Limitée.",
		Overview_NS_LegalText6 									: "<span class=\"superscripts\"><sup>MD</sup></span>/<span class=\"superscripts\"><sup>MC</sup></span> Mastercard et la marque figurative de Mastercard sont des marques de commerce déposées et <i>PayPass</i> est une marque de commerce, de Mastercard International Incorporated. ",
		
		personalInfo_Loyalty_HeaderRed							: "Une façon plus rapide d’obtenir de l’« Argent » Canadian Tire",
		// Old code
		//personalInfo_Loyalty_Bullet1							: "Obtenez 10X l’« Argent » Canadian Tire tous les jours aux magasins Canadian Tire (y compris aux centres-autos) et aux magasins PartSource<span class=\"superscripts\"><sup>MD</sup></span>, Mark’s / L’Équipeur<span class=\"superscripts\"><sup>MD</sup></span> et Sport Chek<span class=\"superscripts\"><sup>MD2</sup></span>",
		// US3627
		personalInfo_Loyalty_Bullet1							: "<b>Obtenez 4 &#37;</b> en Argent Canadian Tire<sup>MD</sup> sur le montant de vos achats quotidiens chez Canadian Tire, Sport Chek<sup>MD</sup>, Mark’s<sup>MD</sup>/ L'Équipeur<sup>MD</sup>, Atmosphere, Sports Experts, Sports Rousseau, Hockey Expert, L’Entrepôt du Hockey et PartSource<sup>MD</sup> .",
		personalInfo_Loyalty_Bullet2							: "<b>Obtenez</b> de l’Argent Canadian Tire dans les postes Gas+/Essence+ et dans les stations-service Husky participants<sup>2</sup>.",	
		personalInfo_Loyalty_Bullet3							: "<b>Obtenez</b> de l’Argent Canadian Tire partout ailleurs où vous magasinez<sup>1</sup>.",
		personalInfo_Loyalty_Bullet4							: "<b>Échangez</b> votre Argent Canadian Tire chez Canadian Tire et dans certains magasins partenaires Mark's et Sport Chek<sup>1</sup>.",
		personalInfo_Loyalty_Bullet5							: "<b>Bénéficiez du programme de financement<sup>*</sup></b> en magasin et en ligne chez Canadian Tire, Sport Check, Atmosphere,  Sports Rousseau, Hockey Expert, L’Entrepôt du Hockey et dans les magasins Mark’s et l’Équipeur et Sports Experts participants.",
		personalInfo_Loyalty_Bullet6							: "<b>Obtenez 3 &#37;</b> en Argent Canadian Tire sur les premiers 12 000 &#36; d’achats admissibles en épicerie.<sup>3</sup>",
		personalInfo_Loyalty_Bullet7							: "Assistance routière<sup>&#94;</sup>",
		personalInfo_Loyalty_Bullet8							: "Garantie prolongée<sup>&dagger;</sup>",
		personalInfo_Loyalty_Bullet9							: "Assurance achats<sup>&dagger;</sup>",
		personalInfo_Loyalty_Bullet10							: "Assurance collision/dommages pour les véhicules de location<sup>&dagger;</sup>",
		personalInfo_Loyalty_Bullet11							: "Service de conciergerie disponible en tout temps&#46;",
		personalInfo_Loyalty_Bullet12							: "Un service client amélioré (mise en file d’attente prioritaire)",
		personalInfo_Loyalty_Bullet13							: "Frais annuels <b>- Aucuns</b>",
		personalInfo_Loyalty_Bullet14							: "Taux d'intérêt <b>- 19.99&#37;<sup>3</sup></b>",
		personalInfo_Loyalty_Bullet15							: "Avances de fonds et frais afférents <b>- 22.99&#37;<sup>3</sup></b>",
		// US3979
		
		// US4997 starts here
		personalInfo_OMP_CARD_Bullet1							: "<b>Économisez</b> jusqu’à 10 &cent; le litre dans les postes d’essence Canadian Tire&#8225;",
		personalInfo_OMP_CARD_Bullet2							: "Utilisez la carte pour vos achats de tous les jours et <b>économisez directement au distributeur&#8225;</b>",	
		personalInfo_OMP_CARD_Bullet3							: "<b>Bénéficiez du programme de financement<sup>&#42;</sup> en magasin et en ligne<sup>&#42;</sup></b> chez Canadian Tire, Sport Check et dans les magasins Mark’s, l’Équipeur et Atmosphere participants",
		// US4997  ends here 
		
		// US4998 Starts here
		personalInfo_OMR_CARD_Bullet1							: "<b>Obtenez jusqu’à 1,5 &#37;</b> de remise en argent sur tous vos achats admissibles<sup>&#8224;</sup>",
		personalInfo_OMR_CARD_Bullet2							: "<b>Obtenez jusqu’à 2x plus</b> (3 &#37;) de remises en argent sur les achats effectués dans les magasins et les postes d’essence Canadian Tire et dans les magasins L’Équipeur et Mark’s&#8225;",	
		personalInfo_OMR_CARD_Bullet3							: "<b>La remise en argent</b> est créditée automatiquement à votre compte chaque année et il n’y a aucune limite sur le montant de la remise.",
		personalInfo_OMR_CARD_Bullet4							: "<b>Programme de financement<sup>&#42;</sup></b> en magasin et en ligne chez Canadian Tire, Sport Check et dans les magasins Mark’s, l’Équipeur et Atmosphere participants.",
		// US4998 ends here 
		
		personalInfo_Loyalty_PersonalInf_Bullet1				: "Obtenez 10X l’« Argent »<span class=\"superscripts\"><sup>MD</sup></span> Canadian Tire tous les jours aux magasins Canadian Tire (y compris aux centres-autos) et aux magasins PartSource<span class=\"superscripts\"><sup>MD</sup></span>, Mark’s / L’Équipeur<span class=\"superscripts\"><sup>MD</sup></span> et Sport Chek<span class=\"superscripts\"><sup>MD1</sup></span>",		
		personalInfo_CTM_label   								:"Numéro de compte Triangle Rewards<span class=\"superscripts\"><sup>MC</sup></span>",
		personalInfo_CTM_Text_OMX   							:"Veuillez entrer votre numéro de compte Triangle Rewards si vous êtes déjà membre du programme. Si votre demande de carte de crédit est approuvée, votre compte Triangle Rewards sera associé à votre nouvelle carte Mastercard<sup>MD</sup> Triangle<sup>MC</sup>. Un numéro de compte Triangle Rewards vous sera attribué si vous laissez ce champ vide.",
		personalInfo_CTM_Text_OMZ   							:"Veuillez entrer votre numéro de compte Triangle Rewards si vous êtes déjà membre du programme. Si votre demande de carte de crédit est approuvée, votre compte Triangle Rewards sera associé à votre nouvelle carte World Elite Mastercard<sup>MD</sup> Triangle<sup>MC</sup>. Un numéro de compte Triangle Rewards vous sera attribué si vous laissez ce champ vide.",
		personalInfo_Email_Text   								:"J’aimerais recevoir des offres, promotions, concours, cadeaux, événements, coupons et autres renseignements ayant trait aux produits et services qui pourraient m’intéresser, par courriel, messagerie texte (sous réserve des frais standard de données et de messagerie texte) et autre messagerie électronique de La Société Canadian Tire Limitée (la « Société Canadian Tire »), des Services Canadian Tire Limitée (les « SCT »), de la Banque Canadian Tire (la « BCT »), y compris de leurs divisions commerciales respectives exploitées par les marques Canadian Tire, Récompenses TriangleMC, de l’Académie des conducteurs de Canadian Tire, des Services résidentiels de Canadian Tire et de l’Assistance routière Canadian Tire, ainsi que de leurs partenaires de marketing et sociétés affiliés. Vous pouvez communiquer avec la Société Canadian Tire, les SCT ou la BCT, à la C.P. 2000, Welland (Ontario) L3B 5S3 ou à l’adresse <U><a hrer=\" \">serviceclientele@canadiantire.ca.</a></U> Vous pouvez retirer votre consentement en tout temps.",
		
		personalInfo_Email_Text_OMP   							:"J’aimerais recevoir des renseignements sur les offres, promotions, concours, cadeaux, événements, coupons et autres renseignements ayant trait aux produits et services qui pourraient m’intéresser, par courriel, messagerie texte (sous réserve des frais standard de données et de messagerie texte) et autre messagerie électronique de La Société Canadian Tire Limitée (la « Société Canadian Tire »), de la Banque Canadian Tire (la « BCT »), des Services Canadian Tire Limitée (les « SCT »), y compris de leurs divisions commerciales respectives exploitées en vertu des marques Canadian Tire, du programme Récompenses Triangle<span class=\"superscripts\"><sup>MC</sup></span>, de l’Académie des conducteurs de Canadian Tire<span class=\"superscripts\"><sup>MD</sup></span>, des Services résidentiels Canadian Tire<span class=\"superscripts\"><sup>MD</sup></span> et de l’Assistance routière Canadian Tire<span class=\"superscripts\"><sup>MD</sup></span>, ainsi que d’autres membres du groupe de la Société Canadian Tire, de la BCT et des SCT ou de leurs partenaires de marketing. Vous pouvez communiquer avec la Société Canadian Tire, la BCT et les SCT à la C.P. 2000, Welland (Ontario) L3B 5S3 ou à l’adresse <U><a hrer=\" \">serviceclientele@canadiantire.ca. </a></U> Je comprends que je peux retirer mon consentement en tout temps.",
		
		// 2016-03-17 chrch: Adding hyperlinks as per business request US3964
/*		personalInfo_LegalText1 								: "<span class=\"superscripts\"><sup>1</sup></span> Primes octroyées sous forme d’« Argent » Canadian Tire. Sous réserve de certaines modalités, conditions et restrictions. Consultez les modalités du programme à l’adresse <a href='http://www.canadiantire.ca/fr/my-canadian-tire-money.html' target='_blank'>www.canadiantire.ca</a> ou <a href='http://www.ctfs.com/act' target='_blank'>www.ctfs.com/act</a> pour en savoir plus.",
		personalInfo_LegalText2 								: "<span class=\"superscripts\"><sup>2</sup></span> Les titulaires de carte Mastercard Options de Canadian Tire obtiennent de l’« Argent » Canadian Tire à un taux qui est 10X (ou 2X selon le cas) le taux auquel les autres membres du programme Mon « Argent » Canadian Tire obtiennent de l’« Argent » Canadian Tire lors d’achats effectués par ces membres dans les magasins Canadian Tire (si ces membres payent en argent comptant, avec une carte de débit ou une carte de crédit qui n’est pas liée à ce programme de fidélisation). Le taux offert est exclusif de toute prime, offre promotionnelle ou transaction d’échange.",
		personalInfo_LegalText3 								: "<span class=\"superscripts\"><sup>3</sup></span> Un montant d’achat d’essence minimum peut être requis. Le taux peut varier d’un poste d’essence à l’autre. Rendez-vous aux postes d’essence locaux pour en savoir plus.",
		personalInfo_LegalText4 								: "<span class=\"superscripts\"><sup>MD</sup></span>/<span class=\"superscripts\"><sup>MC</sup></span> Canadian Tire, Options Canadian Tire, PartSource et le triangle de Canadian Tire sont des marques de commerce déposées et Mon « Argent » Canadian Tire et « Argent » Canadian Tire sont des marques de commerce de La Société Canadian Tire Limitée.",			
		personalInfo_LegalText5									: "<span class=\"superscripts\"><sup>MD</sup></span>/<span class=\"superscripts\"><sup>MC</sup></span> Mastercard et la marque figurative de Mastercard sont des marques de commerce déposées de Mastercard International Incorporated.",
*/
		// US3979
		personalInfo_LegalText1 								: "Services Financiers Canadian Tire est une dénomination commerciale de la Banque Canadian Tire.<br><br>"+
																  "<sup>&dagger;</sup> Les titulaires de carte recevront un bon par courriel, échangeable dans les magasins Canadian Tire seulement. Le montant de la prime en « Argent » Canadian Tire sera ajouté au solde de votre compte Mon « Argent » Canadian Tire au moment de l’achat. L’« Argent » Canadian Tire peut ensuite être échangé sur un achat ultérieur, à la condition que votre compte soit en règle et que l’achat soit admissible à l’échange de primes.",
		personalInfo_LegalText2 								: "<sup>1</sup> Primes octroyées sous forme d’« Argent » Canadian Tire. Sous réserve de certaines modalités visant l’obtention et l’échange des primes. Rendez-vous à l’adresse triangle.com/act pour en savoir plus. Les titulaires de carte Mastercard Options de Canadian Tire qui règlent leurs achats avec cette dernière obtiennent de l’« Argent » Canadian Tire à un taux qui est 10X (ou 2X, selon le cas) le taux auquel les autres membres du programme Mon « Argent » Canadian Tire obtiennent de l’« Argent » Canadian Tire lors d’achats effectués par ces membres dans les magasins Canadian Tire (si ces membres payent en argent comptant ou avec une carte de débit ou de crédit qui n’est pas liée à ce programme de fidélisation). Le taux offert est exclusif de toute prime, offre promotionnelle ou transaction d’échange.",
		personalInfo_LegalText2_OMX                             :  "<sup>1</sup> Primes octroyées sous forme d’Argent électronique Canadian Tire<sup>MD</sup> (Argent CT<sup>MD</sup>). Sous réserve de certaines modalités visant l’obtention et l’échange des primes. Rendez-vous à l’adresse triangle.com/act pour en savoir plus. Les titulaires de carte qui règlent leurs achats avec leur carte Mastercard<sup>MD</sup> Triangle<sup>MC</sup> obtiennent 10x le taux d’Argent Canadian Tire, soit 4 % auquel les autres membres du programme Triangle Rewards ont le droit en effectuant un achat dans les magasins Canadian Tire en argent comptant ou avec une carte de débit ou une carte de crédit qui n’est pas liée à ce programme de fidélisation. Le taux offert est exclusif de toute prime, offre promotionnelle ou transaction d’échange. L’Argent CT est calculé sur le montant de l’achat avant taxes dans les magasins Canadian Tire et PartSource.",
		personalInfo_LegalText2_OMZ                             :  "<sup>1</sup> Primes octroyées sous forme d’Argent électronique Canadian Tire<sup>MD</sup> (Argent CT<sup>MD</sup>). Sous réserve de certaines modalités visant l’obtention et l’échange des primes. Rendez-vous à l’adresse triangle.com/act pour en savoir plus. Les titulaires de carte qui règlent leurs achats avec leur carte World Elite Mastercard<sup>MD</sup> Triangle<sup>MC</sup> obtiennent 10x le taux d’Argent Canadian Tire, soit 4 % auquel les autres membres du programme Triangle Rewards ont le droit en effectuant un achat dans les magasins Canadian Tire en argent comptant ou avec une carte de débit ou une carte de crédit qui n’est pas liée à ce programme de fidélisation. Le taux offert est exclusif de toute prime, offre promotionnelle ou transaction d’échange. L’Argent CT est calculé sur le montant de l’achat avant taxes dans les magasins Canadian Tire et PartSource.",
		personalInfo_LegalText3 								: "<sup>2</sup> Un achat minimum d’essence peut être requis. Le taux peut varier selon la région. Voir les postes d’essence régionaux pour plus de détails.",
		personalInfo_LegalText4 								: "<span class=\"superscripts\"><sup>MD/MC</sup></span> Sauf indication contraire, toutes les marques de commerce sont la propriété de La Société Canadian Tire Limitée, utilisée sous licence.",			
		personalInfo_LegalText5									: "<span class=\"superscripts\"><sup>MD/MC</sup></span> Mastercard et World Elite Mastercard sont des marques de commerce déposées et le logo des deux cercles imbriqués est une marque de commerce de Mastercard International Incorporated.",
		
		//------------------------------ US4997 STARTS------------------
		personalInfo_Legal_OIC_OMP_CARD_Text1 								: "Services Financiers Canadian Tire est une dénomination commerciale de la Banque Canadian Tire.",
		personalInfo_Legal_OIC_OMP_CARD_Text4 								: "<span class=\"superscripts\"><sup>MD/MC</sup></span> Sauf indication contraire, toutes les marques de commerce sont la propriété de La Société Canadian Tire Limitée et sont utilisées sous licence.",
		personalInfo_Legal_OIC_OMP_CARD_Text5								: "<span class=\"superscripts\"><sup>MD/MC</sup></span> Mastercard est une marque de commerce déposée et le logo des deux cercles imbriqués est une marque de commerce de Mastercard International Incorporated.",
		//------------------------------ US4997 ENDS  ------------------
		
 		//additionalInformation_OptionalProducts					:	"Adhésion à des produits facultatifs<span class=\"superscripts\"><sup>&#8224;</sup></span>",
		//additionalInformation_OptionalInsurance_CreditProtector :	"– Je veux adhérer à Couverture-crédit<span class=\"superscripts\"><sup>MD**</sup></span> / Couverture-crédit – Âge d’or<span class=\"superscripts\"><sup>MD**</sup></span>.",
			
		//additionalInformation_OptionalInsurance_Details3		:   "<i>(not available in Saskatchewan)</i> <br>Receive comprehensive coverage with the combination of Credit Protector<sup>&reg;</sup>/Credit Protector-Senior<sup>&reg;</sup>** and Identity Watch Classic<sup>&trade;</sup>."
		//															+ "<ul><li>$1.10 per $100* of your monthly statement balance in any month with a statement balance of $10 or more for Credit Protector/Credit Protector Senior** and $4.99*** payable in advance monthly after the first transaction is made on your Canadian Tire branded credit card for Identity Watch Classic.</li></ul>"
		//															+ "<br>Par exemple, si votre solde est de 200 $ au moment de l’impression de votre relevé de compte, vous ne payerez que 2,20 $, plus les taxes applicables pour la Couverture-crédit / Couverture-crédit – Âge d’or.",
			
		Overview_NS_LegalText4 									:  "<span class=\"superscripts\"><sup>4</sup></span> Un montant d’achat d’essence minimum peut être requis. Le taux peut varier d’un poste d’essence à l’autre. Rendez-vous aux postes d’essence locaux pour en savoir plus.",
		Overview_NS_LegalText5 									:  "<span class=\"superscripts\"><sup>MD</sup></span>/<span class=\"superscripts\"><sup>MC</sup></span> Canadian Tire, Options Canadian Tire, PartSource et le triangle de Canadian Tire sont des marques de commerce déposées et Mon « Argent » Canadian Tire et « Argent » Canadian Tire sont des marques de commerce de La Société Canadian Tire Limitée.",
		Overview_NS_LegalText6 									:  "<span class=\"superscripts\"><sup>MD</sup></span>/<span class=\"superscripts\"><sup>MC</sup></span> Mastercard et la marque figurative de Mastercard sont des marques de commerce déposées et <i>PayPass</i> est une marque de commerce, de Mastercard International Incorporated. ",
																	
		//additionalInformation_footnoteContentText3				:	"Taxes applicables en sus. Payable mensuellement. Veuillez consulter le document Renseignements juridiques ou votre Certificat d’assurance pour prendre connaissance de toutes les modalités, conditions, limitations et les exclusions relatives à votre solde. Certaines conditions s’appliquent.",
		//additionalInformation_footnoteContentText4				:	"Si vous êtes âgé de moins de 66 ans, vous adhérerez à Couverture-crédit. Si vous êtes âgé de 66 à 75 ans, vous adhérerez à Couverture-crédit – Âge d’or. Couverture-crédit est souscrite auprès de American Bankers, Compagnie d’Assurance Vie de la Floride et de American Bankers, Compagnie d’Assurances Générales de la Floride. Couverture-crédit – Âge d’or est souscrite auprès de American Bankers, Compagnie d’Assurance Vie de la Floride. American Bankers, Compagnie d’Assurance Vie de la Floride et American Bankers, Compagnie d’Assurances Générales de la Floride et leurs filiales et sociétés affiliées exercent des activités au Canada sous le nom d’Assurant Solutions<span class=\"superscriptsFootnote\"><sup>MD</sup></span>.",
		//additionalInformation_footnoteContentText5				:	"Plus les taxes applicables. Les frais d’adhésion débuteront une fois la première transaction effectuée avec votre carte de crédit de marque Canadian Tire. Par la suite, les frais d’adhésion seront facturés tous les mois à l'avance sur votre carte de crédit de marque Canadian Tire. Voir le document d'information juridique pour toutes les modalités, conditions, restrictions et exclusions. Certaines conditions s’appliquent.",
		//additionalInformation_footnoteContentText1				:   "<span class=\"superscripts\"><sup>1</sup></span> Primes octroyées sous forme d’« Argent » Canadian Tire. Sous réserve de certaines modalités, conditions et restrictions. Consultez les modalités du programme à l’adresse www.canadiantire.ca ou www.ctfs.com/act pour en savoir plus.",
		//additionalInformation_footnoteContentText1Link          :   " ",
		//additionalInformation_footnoteContentText2				:  "<span class=\"superscripts\"><sup>2</sup></span> Les titulaires de carte Mastercard Options de Canadian Tire obtiennent de l’« Argent » Canadian Tire à un taux qui est 10X (ou 2X selon le cas) le taux auquel les autres membres du programme Mon « Argent » Canadian Tire obtiennent de l’« Argent » Canadian Tire lors d’achats effectués par ces membres dans les magasins Canadian Tire (si ces membres payent en argent comptant, avec une carte de débit ou une carte de crédit qui n’est pas liée à ce programme de fidélisation). Le taux offert est exclusif de toute prime, offre promotionnelle ou transaction d’échange." +
		//														   "<br><span class=\"superscripts\"><sup>3</sup></span> Un montant d’achat d’essence minimum peut être requis. Le taux peut varier d’un poste d’essence à l’autre. Rendez-vous aux postes d’essence locaux pour en savoir plus.",
		
		//additionalInformation_footnoteContentText6				:	"<span class=\"superscripts\"><sup>&#8224;</sup></span>Ces produits facultatifs sont offerts à tous les nouveaux titulaires de carte Mastercard de Canadian Tire. Les renseignements que vous fournissez sur la présente demande de carte sont utilisés pour déterminer votre admissibilité à l’obtention d’une carte Mastercard de Canadian Tire et non pour votre adhésion aux produits facultatifs, lesquels sont offerts à tous les titulaires de carte Canadian Tire.<br>" +
		//                                                           "<span class=\"superscripts\"><sup>MD</sup></span>/<span class=\"superscripts\"><sup>MC</sup></span> Canadian Tire, Options Canadian Tire, PartSource et le triangle de Canadian Tire sont des marques de commerce déposées et Mon « Argent » Canadian Tire et « Argent » Canadian Tire sont des marques de commerce de La Société Canadian Tire Limitée.",
		//additionalInformation_footnoteContentText7				:   "<span class=\"superscripts\"><sup>MD</sup></span>/<span class=\"superscripts\"><sup>MC</sup></span> Couverture-crédit et Couverture-crédit – Âge d’or sont des marques de commerce déposées de la Banque Canadian Tire et sont utilisées sous licence.<br>Le programme Surveillance d’identité Classique est commandité par la Banque Canadian Tire et fourni par Aimia Proprietary Loyalty Canada Inc.<br>" +
		//															"Rebound<span class=\"superscripts\"><sup>MD</sup></span> est une marque de commerce déposée de Aimia Proprietary Loyalty Canada Inc.<br>"+
		//															"<span class=\"superscripts\"><sup>MD</sup></span> Assurant Solutions est une marque de commerce de Assurant Inc.<br>" +	
		//															"<span class=\"superscripts\"><sup>MD</sup></span>/<span class=\"superscripts\"><sup>MC</sup></span> Mastercard et la marque figurative de Mastercard sont des marques de commerce déposées et <i>PayPass</i> est une marque de commerce de Mastercard International Incorporated.",
		
		// Old line
		// confirmation_Application_Authorization_Item2           :   "S’il ne vous est pas possible d’approuver ma demande de carte prévoyant un taux d’intérêt annuel de 21,99 % pour les avances de fonds et les frais afférents et un taux d’intérêt annuel de 19,99 % pour tous les autres types de débit, j’accepte que vous traitiez la présente demande, sans que vous ayez à m’en aviser spécifiquement, comme s’il s’agissait d’une demande de carte à un taux d’intérêt annuel de 25,99 % pour tous les types de débit, à l’exclusion des avances de fonds et des frais afférents pour lesquels le taux d’intérêt annuel sera de 27,99 %.",
		confirmation_Application_Authorization_Item2_OMX           :   "<p>Si votre demande de carte aux taux susmentionnés n’est pas approuvée, il se peut que la Banque Canadian Tire accepte d’émettre une carte à votre nom aux taux d’intérêt annuels suivants :</p><p>(i) si vous êtes un résident du Québec, <b>22,99 %</b> pour tous les débits;</p><p>(ii) si vous résidez ailleurs qu’au Québec, <b>25,99 %</b> pour tous les débits (à l’exception des transactions au comptant et des frais afférents) et <b>27,99 %</b> pour les transactions au comptant et les frais afférents.</p>",
		confirmation_Application_Authorization_Item2_OMZ           :   "<p>S’il ne vous Si votre demande de carte n’est pas approuvée aux taux susmentionnés, la Banque Canadian Tire peut quand même vous émettre une carte aux taux d’intérêt annuels suivants :</p><p>(i) si vous êtes un résident du Québec, <strong>22,99</strong> % pour tous les frais; ou</p><p>(ii) si vous résidez à l’extérieur du Québec, <strong>25,99 %</strong> pour tous les frais  (à l’exception des transactions au comptant et des frais afférents) et <strong>27,99 %</strong> pour les transactions au comptant et les frais afférents.</p>",

		confirmation_Application_Authorization_Item3           :   "La carte est émise par la Banque Canadian Tire (les « BCT »). Le programme Triangle Rewards est fourni et administré par La Société Canadian Tire Limitée.",
		confirmation_Application_Authorization_Item3_OMP           :   "La carte est émise par la Banque Canadian Tire (les « BCT »).",

		confirmation_Application_Authorization_Item4_1         :   "Les BCT peuvent procéder à la collecte, à l’utilisation et au partage de renseignements personnels me concernant aux fins décrites dans ",
		confirmation_Application_Authorization_Item4_2         :	"<a href='https://www.ctfs.com/content/ctfs/fr/legal_privacy/privacy_charter.html' target='_blank'>la politique en matière de protection des renseignements personnels de Canadian Tire,</a>",//we need this empty string because french and english templates have different structure
		confirmation_Application_Authorization_Item4_3         :   " notamment à des fins de commercialisation et de vente par courriel, téléphone, dispositif de composition et d’annonce automatique ou toute autre forme de télécommunication.",//we need this empty string because french and english templates have different structure
		
		confirmation_Application_Authorization_Item7a          :   "Je deviendrai automatiquement membre du programme Triangle Rewards si je ne le suis pas déjà, même si ma demande de carte n’est pas approuvée.",
		confirmation_Application_Authorization_Item7b          :   "Je serai lié par les modalités du programme Triangle Rewards décrites à l’adresse " +	"<a href='http://www.canadiantire.ca/fr.html' target='_blank'>canadiantire.ca</a>"+" ou "+"<a href='https://customer.ctfs.com/lang/fr/Products/CreditCards/OptionsMasterCard/CTMoneyRewards/' target='_blank'> triangle.com/act</a>.",
		
/*		confirmation_footnoteContentText01 					   :   "Taxes applicables en sus. Payable mensuellement. Veuillez consulter le document Renseignements juridiques ou votre Certificat d’assurance pour prendre connaissance de toutes les modalités, conditions, limitations et les exclusions relatives à votre solde. Certaines conditions s’appliquent.",
		confirmation_footnoteContentText02 					   :   "Si vous êtes âgé de moins de 66 ans, vous adhérerez à Couverture-crédit. Si vous êtes âgé de 66 à 75 ans, vous adhérerez à Couverture-crédit – Âge d’or. Couverture-crédit est souscrite auprès de American Bankers, Compagnie d’Assurance Vie de la Floride et de American Bankers, Compagnie d’Assurances Générales de la Floride. Couverture-crédit – Âge d’or est souscrite auprès de American Bankers, Compagnie d’Assurance Vie de la Floride. American Bankers, Compagnie d’Assurance Vie de la Floride et American Bankers, Compagnie d’Assurances Générales de la Floride et leurs filiales et sociétés affiliées exercent des activités au Canada sous le nom d’Assurant Solutions<span class=\"superscripts\"><sup>MD</sup></span>.",
		confirmation_footnoteContentText02a 				   :   "Plus les taxes applicables. Les frais d’adhésion débuteront une fois la première transaction effectuée avec votre carte de crédit de marque Canadian Tire. Par la suite, les frais d’adhésion seront facturés tous les mois à l'avance sur votre carte de crédit de marque Canadian Tire. Voir le document d'information juridique pour toutes les modalités, conditions, restrictions et exclusions. Certaines conditions s’appliquent.",
		confirmation_footnoteContentText03 					   :   "<span class=\"superscripts\"><sup>1</sup></span> Primes octroyées sous forme d’« Argent » Canadian Tire. Sous réserve de certaines modalités, conditions et restrictions. Consultez les modalités du programme à l’adresse www.canadiantire.ca ou www.ctfs.com/act pour en savoir plus." +
																   "<br><span class=\"superscripts\"><sup>2</sup></span> Les titulaires de carte Mastercard Options de Canadian Tire obtiennent de l’« Argent » Canadian Tire à un taux qui est 10X (ou 2X selon le cas) le taux auquel les autres membres du programme Mon « Argent » Canadian Tire obtiennent de l’« Argent » Canadian Tire<span class=\"superscripts\"><sup>MC</sup></span> lors d’achats effectués par ces membres dans les magasins Canadian Tire (si ces membres payent en argent comptant, avec une carte de débit ou une carte de crédit qui n’est pas liée à ce programme de fidélisation). Le taux offert est exclusif de toute prime, offre promotionnelle ou transaction d’échange." +
																   "<br><span class=\"superscripts\"><sup>3</sup></span> Un montant d’achat d’essence minimum peut être requis. Le taux peut varier d’un poste d’essence à l’autre. Rendez-vous aux postes d’essence locaux pour en savoir plus." +
																   "<br><span class=\"superscripts\"><sup>4</sup></span> Si votre demande de carte à ce taux n’est pas approuvée, il se peut que nous acceptions d’émettre une carte à votre nom portant un taux d’intérêt annuel de 27,99 % pour toutes les avances de fonds et frais afférents et de 25,99 % pour tous les autres types de débit.",
		confirmation_footnoteContentText04			           :   "<span class=\"superscripts\"><sup>&#8224;</sup></span>Ces produits facultatifs sont offerts à tous les nouveaux titulaires de carte Mastercard de Canadian Tire. Les renseignements que vous fournissez sur la présente demande de carte sont utilisés pour déterminer votre admissibilité à l’obtention d’une carte Mastercard de Canadian Tire et non pour votre adhésion aux produits facultatifs, lesquels sont offerts à tous les titulaires de carte Canadian Tire.<br>" +
		                                                           "<span class=\"superscripts\"><sup>MD</sup></span>/<span class=\"superscripts\"><sup>MC</sup></span> Canadian Tire, Options Canadian Tire, PartSource et le triangle de Canadian Tire sont des marques de commerce déposées et Mon « Argent » Canadian Tire et « Argent » Canadian Tire sont des marques de commerce de La Société Canadian Tire Limitée.",
		confirmation_footnoteContentText05			           :   "<span class=\"superscripts\"><sup>MD</sup></span>/<span class=\"superscripts\"><sup>MC</sup></span> Couverture-crédit est une des marques de commerce déposées de la Banque Canadian Tire et sont utilisées sous licence.<br>Le programme Surveillance d’identité Classique est commandité par la Banque Canadian Tire et fourni par Aimia Proprietary Loyalty Canada Inc.<br>" +
																   "Rebound<span class=\"superscripts\"><sup>MD</sup></span> est une marque de commerce déposée de Aimia Proprietary Loyalty Canada Inc.<br>"+
																   "<span class=\"superscripts\"><sup>MD</sup></span> Assurant Solutions est une marque de commerce de Assurant Inc.<br>" +	
																   "<span class=\"superscripts\"><sup>MD</sup></span>/<span class=\"superscripts\"><sup>MC</sup></span> Mastercard et la marque figurative de Mastercard sont des marques de commerce déposées de commerce de Mastercard International Incorporated.",
*/
		// US3979
		confirmation_footnoteContentText1_1					   :   "<sup>&dagger;&dagger;</sup> Ces produits facultatifs sont offerts à tous les nouveaux titulaires de carte Mastercard émise par la Banque Canadian Tire. Les renseignements que vous fournissez sur la présente demande de carte sont utilisés pour déterminer votre admissibilité à l’obtention d’une carte Mastercard émise par la Banque Canadian Tire et non pour votre adhésion aux produits facultatifs.La Banque Canadian Tire a un intérêt financier dans la vente de cette assurance.",
		confirmation_footnoteContentText1_1_OMP_OMR			   :   "<sup>&dagger;&dagger;</sup> Ce sont des produits facultatifs offerts à tous les nouveaux titulaires de carte Mastercard émise par la Banque Canadian Tire. Les renseignements que vous fournissez sur la présente demande de carte sont utilisés pour déterminer votre admissibilité à l’obtention d’une carte Mastercard émise par la Banque Canadian Tire et non pour votre adhésion aux produits facultatifs. La Banque Canadian Tire possède un intérêt financier dans la vente de ces produits d’assurance.",
		confirmation_footnoteContentText01_OMX 				   :   "<span class=\"superscripts\"><sup>1</sup></span> Primes octroyées sous forme d’Argent électronique Canadian Tire<span class=\"superscripts\"><sup>MD</sup></span>  &#40;Argent CT<span class=\"superscripts\"><sup>MD</sup></span>&#41;.  Sous réserve de certaines modalités visant l’obtention et l’échange des primes. Rendez-vous à l’adresse triangle.com/act pour en savoir plus. Les titulaires de carte qui règlent leurs achats avec leur carte Mastercard<span class=\"superscripts\"><sup>MD</sup></span> Triangle<span class=\"superscripts\"><sup>MC</sup></span> obtiennent 10x le taux d’Argent Canadian Tire, soit 4 % auquel les autres membres du programme Triangle Rewards ont le droit en effectuant un achat dans les magasins Canadian Tire en argent comptant ou avec une carte de débit ou une carte de crédit qui n’est pas liée à ce programme de fidélisation. Le taux offert est exclusif de toute prime, offre promotionnelle ou transaction d’échange. L’Argent CT est calculé sur le montant de l’achat avant taxes dans les magasins Canadian Tire et PartSource.",
		confirmation_footnoteContentText01_OMZ 				   :   "<span class=\"superscripts\"><sup>1</sup></span> Primes octroyées sous forme d’Argent électronique Canadian Tire<span class=\"superscripts\"><sup>MD</sup></span>  &#40;Argent CT<span class=\"superscripts\"><sup>MD</sup></span>&#41;.  Sous réserve de certaines modalités visant l’obtention et l’échange des primes. Rendez-vous à l’adresse triangle.com/act pour en savoir plus. Les titulaires de carte qui règlent leurs achats avec leur carte World Elite Mastercard<span class=\"superscripts\"><sup>MD</sup></span> Triangle<span class=\"superscripts\"><sup>MC</sup></span> obtiennent 10x le taux d’Argent Canadian Tire, soit 4 % auquel les autres membres du programme Triangle Rewards ont le droit en effectuant un achat dans les magasins Canadian Tire en argent comptant ou avec une carte de débit ou une carte de crédit qui n’est pas liée à ce programme de fidélisation. Le taux offert est exclusif de toute prime, offre promotionnelle ou transaction d’échange. L’Argent CT est calculé sur le montant de l’achat avant taxes dans les magasins Canadian Tire et PartSource.",
		confirmation_footnoteContentText02 					   :   "Si vous êtes âgé de moins de 66 ans, vous adhérerez à Couverture-crédit. Si je suis âgé de 66 à 75 ans, j’adhérerai à Couverture-crédit – Âge d’or. Couverture-crédit est souscrite par American Bankers Compagnie d’Assurance Vie de la Floride et d’American Bankers Compagnie d’Assurance Générale de la Floride. Couverture-crédit – Âge d’or est souscrite par American Bankers Compagnie d’Assurance Vie de la Floride. American Bankers, Compagnie d’Assurance-Vie de la Floride et American Bankers, Compagnie d’Assurances Générales de la Floride et leurs filiales et sociétés affiliées exercent des activités au Canada sous le nom d’Assurant Solutions<span class=\"superscripts\"><sup>MD</sup></span>.",
		confirmation_footnoteContentText02a 				   :   "<span class=\"superscripts\"><sup>MD/MC</sup></span>  Sauf indication contraire, toutes les marques de commerce sont la propriété de La Société Canadian Tire Limitée, utilisée sous licence.",
		confirmation_footnoteContentText02a_OMP_OMR			   :   "<span class=\"superscripts\"><sup>MD/MC</sup></span>  Sauf indication contraire, toutes les marques de commerce sont la propriété de La Société Canadian Tire Limitée et sont utilisées sous licence.",
		confirmation_footnoteContentText03 					   :   "<sup>1</sup> Primes octroyées sous forme d’« Argent » Canadian Tire. Sous réserve de certaines modalités, conditions et restrictions. Consultez les modalités du programme à l’adresse www.ctfs.com/act pour en savoir plus.",
		confirmation_footnoteContentText04					   :   	"<span class=\"superscripts\"><sup>MD/MC</sup></span> Mastercard et World Elite Mastercard sont des marques de commerce déposées et le logo des deux cercles imbriqués est une marque de commerce de Mastercard International Incorporated.",
		confirmation_footnoteContentText04_OMP					   :   	"<span class=\"superscripts\"><sup>MD/MC</sup></span> Mastercard est une marque de commerce déposée et le logo des deux cercles imbriqués est une marque de commerce de Mastercard International Incorporated.",
		confirmation_footnoteContentText05					   :   	"<span class=\"superscripts\"><sup>MD</sup></span> Assurant est une marque de commerce déposée d’Assurant Inc.<br><br>" +
																	"<span class=\"superscripts\"><sup>MD/MC</sup></span> Couverture-crédit est une marque de commerce déposée de la Banque Canadian Tire.<br><br>" +
																	"L’Assurance Couverture-crédit est une assurance-crédit collective prise en charge par American Bankers Compagnie d’Assurance Vie de la Floride (ABLAC) et American Bankers Compagnie d’Assurance Générale de la Floride (ABIC). ABLAC et ABIC ainsi que leurs sociétés affiliées et filiales exercent des activités commerciales au Canada sous la dénomination sociale Assurant<sup>&reg;</sup>.<br><br>" +	
																	"Le programme Surveillance d’identité Classique est commandité par la Banque Canadian Tire et offert par Sigma Loyalty Group Inc.",
	    confirmation_footnoteContentText05_OMP_OMR			   :   	"<span class=\"superscripts\"><sup>MD</sup></span>  Assurant est une marque de commerce déposée de Assurant, Inc.<br><br>" +
																	"<span class=\"superscripts\"><sup>MD</sup></span> Couverture-crédit est une marque de commerce déposée de la Banque Canadian Tire.<br><br>" +
																	"Couverture‐crédit est prise en charge par American Bankers Compagnie d’Assurance Vie de la Floride (ABLAC) et American Bankers Compagnie d’Assurance Générale de la Floride (ABIC). ABLAC et ABIC ainsi que leurs sociétés affiliées et filiales exercent des activités commerciales au Canada sous le nom de Assurant<sup>&reg;</sup>.<br><br>" +	
																	"Le programme Surveillance d’identité Classique est commandité par la Banque Canadian Tire et fourni par Sigma Loyalty Group Inc.",
 		
		identityVerification_FinalText2						   :	"Vous recevrez également votre carte Mastercard Options, que vous pourrez utiliser partout, par la poste dans les sept à dix jours ouvrables. Veuillez prendre note que vous recevrez votre carte Mon « Argent » Canadian Tire <u>séparément de votre carte Mastercard Options.</u>",
	
		identityVerification_FooterText1 						: "<span class=\"superscripts\"><sup>1</sup></span> Primes octroyées sous forme d’« Argent » Canadian Tire. Sous réserve de certaines modalités, conditions et restrictions. Consultez les modalités du programme à l’adresse www.canadiantire.ca ou www.ctfs.com/act pour en savoir plus.",
		identityVerification_FooterText2 						: "<span class=\"superscripts\"><sup>2</sup></span> Les titulaires de carte Mastercard Options de Canadian Tire obtiennent de l’« Argent » Canadian Tire à un taux qui est 10X (ou 2X selon le cas) le taux auquel les autres membres du programme Mon « Argent » Canadian Tire obtiennent de l’« Argent » Canadian Tire lors d’achats effectués par ces membres dans les magasins Canadian Tire (si ces membres payent en argent comptant, avec une carte de débit ou une carte de crédit qui n’est pas liée à ce programme de fidélisation). Le taux offert est exclusif de toute prime, offre promotionnelle ou transaction d’échange.",
		identityVerification_FooterText3 						: "<span class=\"superscripts\"><sup>3</sup></span> Un montant d’achat d’essence minimum peut être requis. Le taux peut varier d’un poste d’essence à l’autre. Rendez-vous aux postes d’essence locaux pour en savoir plus.",
		// Old identityVerification_FooterText4 						: "<span class=\"superscripts\"><sup>MD</sup></span>/<span class=\"superscripts\"><sup>MC</sup></span> Canadian Tire, Options Canadian Tire, PartSource et le triangle de Canadian Tire sont des marques de commerce déposées et Mon « Argent » Canadian Tire et « Argent » Canadian Tire sont des marques de commerce de La Société Canadian Tire Limitée.",
		identityVerification_FooterText4 						: "Services Financiers Canadian Tire est une dénomination commerciale de la Banque Canadian Tire. <br><br>" +
																  "<span class=\"superscripts\"><sup>MD/</sup></span><span class=\"superscripts\"><sup>MC</sup></span> Sauf indication contraire, toutes les marques de commerce sont la propriété de la Société Canadian Tire Limitée et sont utilisées sous licence.",
		identityVerification_FooterText5 						: "<span class=\"superscripts\"><sup>MD/MC</sup></span> Mastercard et World Elite Mastercard sont des marques de commerce déposées et le logo des deux cercles imbriqués est une marque de commerce de Mastercard International Incorporated.",
		
		identityVerification_FooterTextTuAuth1                  :    "Services Financiers Canadian Tire est une dénomination commerciale de la Banque Canadian Tire.",
		identityVerification_FooterTextTuAuth2                  :    "<span class=\"superscripts\"><sup>MD</sup></span><sup>/</sup><span class=\"superscripts\"><sup>MC</sup></span> Sauf indication contraire, toutes les marques de commerce sont la propriété de la Société Canadian Tire Limitée et sont utilisées sous licence. ",
		
		//---old---
		additionalInformation_footnoteContentText1old				:	"<sup>1</sup> Primes octroyées sous forme d’« Argent » Canadian Tire avec la Carte<span class=\"superscriptsFootnote\"><sup>MD</sup></span>. Sous réserve des modalités et des restrictions visant l’octroi et l’échange des primes. Détails en magasin ou sur la page Programme de primes en « Argent » Canadian Tire. Les titulaires de la carte Mastercard Options en Nouvelle-Écosse participent à un autre programme de primes; veuillez vous rendre à l’adresse",
		additionalInformation_footnoteContentText1Linkold			:	"<a href='https://www.ctfs.com/Products/CreditCards/OptionsMasterCard/CTMoneyRewards/' target='_blank'>ctfs.com/act.</a>",
		additionalInformation_footnoteContentText2old				:	"<sup>2</sup> À la condition que votre compte soit en règle et que l’achat soit admissible à l’échange de primes.",
		
		additionalInformation_footnoteContentText3old				:	"Taxes applicables en sus. Payable mensuellement. Veuillez consulter le document Renseignements juridiques ou votre Certificat d’assurance pour prendre connaissance de toutes les modalités, conditions, limitations et les exclusions relatives à votre solde. Certaines conditions s’appliquent.",
		additionalInformation_footnoteContentText4old				:	"Si vous êtes âgé de moins de 66 ans, vous adhérerez à Couverture-crédit. Si vous êtes âgé de 66 à 75 ans, vous adhérerez à Couverture-crédit – Âge d’or. Couverture-crédit et Couverture-crédit – Âge d’or est souscrite auprès de American Bankers, Compagnie d’Assurance Vie de la Floride, et de American Bankers, Compagnie d’Assurances Générales de la Floride, filiales de Assurant Solutions<span class=\"superscriptsFootnote\"><sup>MD</sup></span>.",
		additionalInformation_footnoteContentText5old				:	"Plus les taxes applicables. Les frais d’adhésion débuteront une fois la première transaction effectuée avec votre carte de crédit de marque Canadian Tire. Par la suite, les frais d’adhésion seront facturés tous les mois à l'avance sur votre carte de crédit de marque Canadian Tire. Voir le document d'information juridique pour toutes les modalités, conditions, restrictions et exclusions. Certaines conditions s’appliquent.",
		additionalInformation_footnoteContentText6old				:	"<sup>&#8224;</sup> Ces produits facultatifs sont offerts à tous les nouveaux titulaires de carte Mastercard de Canadian Tire. Les renseignements que vous fournissez sur la présente demande de carte sont utilisés pour déterminer votre admissibilité à l’obtention d’une carte Mastercard de Canadian Tire et non pour votre adhésion aux produits facultatifs, lesquels sont offerts à tous les titulaires de carte Canadian Tire.MD / MC Couverture-crédit et Couverture-crédit – Âge d’or sont des marques de commerce déposées des Services Financiers Canadian Tire Limitée, et sont utilisées sous licence. Le programme Surveillance d’identité classique est commandité par les Services Financiers Canadian Tire Limitée et fourni par Aimia Proprietary Loyalty Canada Inc." +
																	    "Rebound<span class=\"superscriptsFootnote\"><sup>MD</sup></span> est une marque de commerce déposée de Aimia Proprietary Loyalty Canada Inc",
		additionalInformation_footnoteContentText7old				:	"<span class=\"superscriptsFootnote\"><sup>MD</sup></span>/<span class=\"superscriptsFootnote\"><sup>MC</sup></span> Sauf indication contraire, toutes les marques de commerce sont la propriété de La Société Canadian Tire Limitée et sont utilisées sous licence.<br>" +
				  												    "<span class=\"superscriptsFootnote\"><sup>MD</sup></span>/<span class=\"superscriptsFootnote\"><sup>MC</sup></span> Mastercard et la marque figurative de Mastercard sont des marques de commerce déposées et <i>PayPass</i> est une marque de commerce de Mastercard International Incorporated.",	
				  													
	    confirmation_Application_Authorization_Item2old        :   "Si ma demande de carte à un taux d’intérêt annuel de 19,99 % n’est pas approuvée, j’accepte que vous traitiez la présente demande comme une demande distincte pour la même carte à un taux d’intérêt annuel de 25,99 % pour toutes les transactions, y compris les avances de fonds et les frais afférents, sans que je ne reçoive d’avis spécifique à cet effet.",
		confirmation_Application_Authorization_Item3old        :   "La carte est émise par la Banque Canadian Tire (la « BCT »), et le compte est administré par les Services Financiers Canadian Tire Limitée (les « SFCTL »).",
		confirmation_Application_Authorization_Item4_1old      :   "La BCT et les SFCTL peuvent procéder à la collecte, à l’utilisation et au partage de renseignements personnels me concernant aux fins décrites dans la politique en matière de protection des renseignements personnels de Canadian Tire, notamment à des fins de commercialisation et de vente par courriel, téléphone, dispositif de composition et d’annonce automatique ou toute autre forme de télécommunication.",
		confirmation_Application_Authorization_Item4_2old      :	" ",//we need this empty string because french and english templates have different structure
		confirmation_Application_Authorization_Item4_3old      :   " ",//we need this empty string because french and english templates have different structure

		identityVerification_FinalText2old						:	"Vous recevrez également votre carte Mastercard Options, que vous pourrez utiliser partout, par la poste dans les sept à dix jours ouvrables.",
		
		identityVerification_FooterText1old					:	"Pour votre protection et votre sécurité, les Services Financiers Canadian Tire Limitée ont adopté le présent processus afin de remplir votre demande de carte de crédit Canadian Tire. Dans le cadre de ce processus, le système accédera à votre dossier de consommateur pour aider les Services Financiers Canadian Tire Limitée à vérifier votre identité. Ce processus ne constitue pas une vérification de crédit; il vise à vérifier l’identité de la personne qui demande une carte de crédit Canadian Tire. Veuillez répondre aux questions au meilleur de votre connaissance. Les renseignements que vous fournissez ne sont pas conservés dans les dossiers des Services Financiers Canadian Tire Limitée et de la Banque Canadian Tire.",
		identityVerification_FooterText2old					:	"<span class=\"superscriptsFootnote\"><sup>MD</sup></span>/<span class=\"superscriptsFootnote\"><sup>MC</sup></span> Sauf indication contraire, toutes les marques de commerce sont la propriété de La Société Canadian Tire Limitée et sont utilisées sous licence.",
		identityVerification_FooterText3old					:	"<span class=\"superscriptsFootnote\"><sup>MD</sup></span>/<span class=\"superscriptsFootnote\"><sup>MC</sup></span> Mastercard et la marque figurative de Mastercard sont des marques de commerce déposées et PayPass est une marque de commerce de Mastercard International Incorporated.",
		//---old---
		
		//----US3011------
		// chooseProduct_TitleA   							: "EXCLUSIF À VOUS EN TANT QUE TITULAIRE DE CARTE",
		// US3627
		chooseProduct_TitleA   							: "EXCLUSIVEMENT POUR VOUS EN TANT QUE TITULAIRE DE CARTE MASTERCARD<span class=\"superscriptsFootnote\"><sup>MD</sup></span> OPTIONS<span class=\"superscriptsFootnote\"><sup>MD</sup></span> DE CANADIAN TIRE",
		
		// Old code
		// chooseProduct_DescriptionA1  					: "Taux d'intérêt – <b>19.99%</b>",
		// chooseProduct_DescriptionA2   					: "Cash advances and related fees — <b>21.99%</b>",
		chooseProduct_DescriptionA0	  					: "Frais annuels &#45; <b>Aucuns</b>",
		chooseProduct_DescriptionA1  					: "Taux d'intérêt &#45; <b>19&#46;99&#37;<sup>3</sup>",
		chooseProduct_DescriptionA2   					: "Avances de fonds et frais afférents &#45; <br><b>22&#46;99 &#37;<sup>3</sup>",
		
		chooseProduct_DescriptionA1_OMZ   : "Taux d'intérêt &#45; <b>19&#46;99&#37;",
		chooseProduct_DescriptionA2_OMZ   : "Avances de fonds et frais afférents &#45; <br><b>22&#46;99 &#37;",
		
		// US4997 OMP card
		chooseProduct_DescriptionA0_OMP	  : "Frais annuels &#45; <b>Aucuns</b>",
		chooseProduct_DescriptionA1_OMP   : "Taux d’intérêt &#45; <b>19&#44;99 &#37;</b><sup>1</sup>",
		chooseProduct_DescriptionA2_OMP   : "Avances de fonds et frais afférents &#45; <br><b>22&#44;99 &#37;</b><sup>1</sup>",
		
		// 2016-03-17 chrch: Adding hyperlinks as per business request US3964
/*		Overview_ctm_LegalText1 							: "<span class=\"superscripts\"><sup>1</sup></span> Primes octroyées sous forme d’« Argent » Canadian Tire. Sous réserve de certaines modalités, conditions et restrictions. Consultez les modalités du programme à l’adresse <a href='http://www.canadiantire.ca/fr/my-canadian-tire-money.html' target='_blank'>www.canadiantire.ca</a> ou <a href='http://www.ctfs.com/act' target='_blank'>www.ctfs.com/act</a> pour en savoir plus.",
		Overview_ctm_LegalText2 							: "<span class=\"superscripts\"><sup>2</sup></span> Les titulaires de carte Mastercard Options de Canadian Tire qui règlent leurs achats avec cette dernière obtiennent de l’« Argent » Canadian Tire à un taux qui est 10X (ou 2X selon le cas) le taux auquel les autres membres du programme Mon « Argent » Canadian Tire obtiennent de l’« Argent » Canadian Tire lors d’achats effectués par ces membres dans les magasins Canadian Tire (si ces membres payent en argent comptant, avec une carte de débit ou une carte de crédit qui n’est pas liée à ce programme de fidélisation). Le taux offert est exclusif de toute prime, offre promotionnelle ou transaction d’échange.",
		Overview_ctm_LegalText3 							: "<span class=\"superscripts\"><sup>3</sup></span> L’« Argent » Canadian Tire obtenu dans les magasins Canadian Tire ou en ligne à canadiantire.ca est calculé sur le montant avant taxes des achats admissibles et est arrondi au cent près. Pour connaître les taux actuels, composez le 1 800 226-8473.",
		Overview_ctm_LegalText4 							: "<span class=\"superscripts\"><sup>4</sup></span> Un montant d’achat d’essence minimum peut être requis. Le taux peut varier d’un poste d’essence à l’autre. Rendez-vous aux postes d’essence locaux pour en savoir plus. ",
		Overview_ctm_LegalText5 							: "<span class=\"superscripts\"><sup>MD</sup></span>/<span class=\"superscripts\"><sup>MC</sup></span> Canadian Tire, Options Canadian Tire, PartSource et le triangle de Canadian Tire sont des marques de commerce déposées et Mon « Argent » Canadian Tire et « Argent » Canadian Tire sont des marques de commerce de La Société Canadian Tire Limitée.",
		Overview_ctm_LegalText6 							: "<span class=\"superscripts\"><sup>MD</sup></span>/<span class=\"superscripts\"><sup>MC</sup></span> Mastercard et la marque figurative de Mastercard sont des marques de commerce déposées de Mastercard International Incorporated.",
*/
		// US3979
		Overview_ctm_LegalText1 						   			: "Canadian Tire Financial Services is a business name of Canadian Tire Bank. <br>" +
																  "<sup>1</sup> In the form of Canadian Tire 'Money'. Terms and conditions apply to collecting and redeeming. Visit ctfs.com/ctm for more information. Canadian Tire Options Mastercard cardmembers paying with their Options Mastercard collect Canadian Tire 'Money' at the rate that is 10X (or 2X as the case may be) the rate at which other members of the My Canadian Tire 'Money'<sup>&reg;</sup> program collect Canadian Tire 'Money' on purchases made by such other members at Canadian Tire stores (if other members paid by cash, debit or a credit card not linked to this loyalty program). The offered rate is exclusive of any bonus or promotional offers or redemption transactions.",
		Overview_ctm_LegalText2 									: "<sup>2</sup> Minimum fuel purchase may be required. Rate may vary by location. See local gas bars for details.",
		Overview_ctm_LegalText3 									: "<sup>3</sup> If you are not approved for the Card at these rates, we may still issue you a card at an annual interest rate of 27.99% for cash transactions and related fees and 25.99% for all other charges.",
		Overview_ctm_LegalText4 									: "<sup>&reg;</sup>/<sup>&trade;</sup> Canadian Tire , the Canadian Tire triangle design, the Canadian Tire Financial Services  design, Canadian Tire Options, Canadian Tire 'Money', My Canadian 'Money' and PartSource are registered trademarks of Canadian Tire Corporation, Limited and are used under licence.",
		Overview_ctm_LegalText5 									: "<sup>&reg;</sup>/&trade; Mastercard and the Mastercard Brand Mark are registered trademarks of Mastercard International Incorporated, and are used under licence.",	
		
		//US4541
		Overview_ctm_LegalTextEComm2 							: "<sup>1</sup>Primes octroyées sous forme d’Argent électronique Canadian Tire<sup>MD</sup> (Argent CT<sup>MD</sup>). Sous réserve de certaines modalités visant l’obtention et l’échange des primes. Rendez-vous à l’adresse triangle.com/act pour en savoir plus. Les titulaires de carte qui règlent leurs achats avec leur carte Mastercard<sup style='font-size: .5em;'>MD</sup> Triangle<sup style='font-size: .5em;'>MC</sup> ou World Elite Mastercard<sup style='font-size: .5em;'>MD</sup> Triangle<sup style='font-size: .5em;'>MC</sup> obtiennent 10x le taux d’Argent Canadian Tire, soit 4 % auquel les autres membres du programme Triangle Rewards ont le droit en effectuant un achat dans les magasins Canadian Tire en argent comptant ou avec une carte de débit ou une carte de crédit qui n’est pas liée à ce programme de fidélisation. Le taux offert est exclusif de toute prime, offre promotionnelle ou transaction d’échange. L’Argent CT est calculé sur le montant de l’achat avant taxes dans les magasins Canadian Tire et PartSource.",
		Overview_ctm_LegalTextEComm3 							: "<span class=\"superscripts\"><sup>2</sup></span>Un achat minimum d’essence peut être requis. Le taux peut varier selon la région. Voir les postes d’essence régionaux pour plus de détails.",
		Overview_ctm_LegalTextEComm4 							: "<span class=\"superscripts\"><sup>3</sup></span>  Le taux de 3 s’applique à la première tranche de 12 000 $ sur les dépenses d’épicerie annuelles. Après cela, votre taux revient au taux courant. S’applique aux achats effectués dans les magasins ayant un code de commerçant Mastercard 5411. Pour des exemples des marchands admissibles, visitez le site triangle.com/commercants. La prime de 3 % est calculée à partir du montant après les taxes. Exclut les achats chez Walmart et Costco."+
		                                                          "<br><br><span class=\"superscripts\"><sup>&#94;</sup></span> Ce service doit être activé séparément. L’Assistance routière Canadian Tire est offerte par les Services Canadian Tire Limitée. Voir <a href='http://roadsideassistance.canadiantire.ca/fr.html' target=\"_blank\">cliquez ici</a> pour en savoir plus.",
        Overview_ctm_LegalTextEComm2_DEC_OMX 					: "<span class=\"superscripts\"><sup>1</sup></span> Primes octroyées sous forme d’Argent électronique Canadian Tire<span class=\"superscripts\"><sup>MD</sup></span> (Argent CT<span class=\"superscripts\"><sup>MD</sup></span>). Sous réserve de certaines modalités visant l’obtention et l’échange des primes. Rendez-vous à l’adresse triangle.com/act pour en savoir plus. Les titulaires de carte qui règlent leurs achats avec leur carte Mastercard<span class=\"superscripts\"><sup>MD</sup></span> Triangle<span class=\"superscripts\"><sup>MC</sup></span> obtiennent 10x le taux d’Argent Canadian Tire, soit 4 % auquel les autres membres du programme Triangle Rewards ont le droit en effectuant un achat dans les magasins Canadian Tire en argent comptant ou avec une carte de débit ou une carte de crédit qui n’est pas liée à ce programme de fidélisation. Le taux offert est exclusif de toute prime, offre promotionnelle ou transaction d’échange. L’Argent CT est calculé sur le montant de l’achat avant taxes dans les magasins Canadian Tire et PartSource.",
	    Overview_ctm_LegalTextEComm2_DEC_OMZ 					: "<span class=\"superscripts\"><sup>1</sup></span> Primes octroyées sous forme d’Argent électronique Canadian Tire<span class=\"superscripts\"><sup>MD</sup></span> (Argent CT<span class=\"superscripts\"><sup>MD</sup></span>). Sous réserve de certaines modalités visant l’obtention et l’échange des primes. Rendez-vous à l’adresse triangle.com/act pour en savoir plus. Les titulaires de carte qui règlent leurs achats avec leur carte World Elite Mastercard<span class=\"superscripts\"><sup>MD</sup></span> Triangle<span class=\"superscripts\"><sup>MC</sup></span> obtiennent 10x le taux d’Argent Canadian Tire, soit 4 % auquel les autres membres du programme Triangle Rewards ont le droit en effectuant un achat dans les magasins Canadian Tire en argent comptant ou avec une carte de débit ou une carte de crédit qui n’est pas liée à ce programme de fidélisation. Le taux offert est exclusif de toute prime, offre promotionnelle ou transaction d’échange. L’Argent CT est calculé sur le montant de l’achat avant taxes dans les magasins Canadian Tire et PartSource.",
		
		Overview_ctm_LegalTextEComm4_DEC_OMX 					: "<span class=\"superscripts\"><sup>3</sup></span>  Si votre demande de carte n’est pas approuvée aux taux susmentionnés, la Banque Canadian Tire peut quand même vous émettre une carte aux taux d’intérêt annuels suivants : (i) si vous êtes un résident du Québec, 22,99 &#37; pour tous les frais; ou (ii) si vous résidez à l’extérieur du Québec, 25,99 &#37; pour tous les frais (à l’exception des transactions au comptant et des frais afférents) et 27,99 &#37; pour les transactions au comptant et les frais afférents. sera de 27,99 &#37;.",
		Overview_ctm_LegalTextEComm4_DEC_OMZ					: "<span class=\"superscripts\"><sup>3</sup></span> Le taux de 3 s’applique à la première tranche de 12 000 $ sur les dépenses d’épicerie annuelles. Après cela, votre taux revient au taux courant. S’applique aux achats effectués dans les magasins ayant un code de commerçant Mastercard 5411. Pour des exemples des marchands admissibles, visitez le site triangle.com/commercants. La prime de 3 % est calculée à partir du montant après les taxes. Exclut les achats chez Walmart et Costco.<br><br><p><sup>&#94;</sup> Ce service doit être activé séparément. L’Assistance routière Canadian Tire est offerte par les Services Canadian Tire Limitée. Voir <a href='http://roadsideassistance.canadiantire.ca/fr.html' target=\"_blank\">Cliquez ici</a> pour en savoir plus.</p>",
		                                                          
		                                                          
		Overview_ctm_LegalTextEComm5 							: "<sup>*</sup> L’offre de financement « Paiements égaux, aucun intérêt » pendant 12 mois (sauf indication contraire), n’est accordée que sur demande et sur approbation du crédit pour des achats de 200 $ ou plus (à l’exception des cartes-cadeaux) réglés avec votre carte de crédit Triangle chez Canadian Tire, Sport Chek, Atmosphere, Sports Rousseau, Hockey Expert, L’Entrepôt du Hockey et participants Mark’s/L’Équipeur, Sports Experts stores. Aucun intérêt ne court pendant la période du programme. Si nous ne recevons pas le montant intégral du paiement minimum dû indiqué sur un relevé dans les 59 jours qui suivent la date de ce relevé ou s’il se produit une situation de manquement (autre que celle de ne pas avoir effectué un paiement) en vertu de votre contrat du titulaire de carte, tous les programmes de modalités spéciales de paiement prendront fin et i) l’intérêt sur le solde impayé de chacun des programmes vous sera facturé au taux annuel courant applicable à compter du jour qui suit la date de votre prochain relevé, et ii) le solde impayé de chaque programme sera ajouté au solde dû pour ce relevé. Les programmes de modalités spéciales de paiement ne comportent aucuns frais d’administration. Chaque mois pendant la période d’un programme de paiements égaux, vous devez payer intégralement, avant la date d’échéance, le montant du versement mensuel dû en vertu de ce programme de paiements égaux. Tout montant impayé non reçu avant la date d’échéance ne fera plus partie du programme de paiements égaux, et l’intérêt vous sera facturé sur ce montant à compter du jour qui suit la date de votre relevé suivant au taux annuel courant applicable.",
		Overview_ctm_LegalTextEComm7_newLine_1                  : "<span class=\"superscripts\"><sup>&#8224;</sup></span> Assurance Achats, Garantie prolongée et l’Assurance collision / dommages pour véhicules de location sont des assurances souscrites auprès de American Bankers Compagnie d’Assurance générale de la Floride. Les services de conciergerie sont proposés par Services Assurant Canada Inc. Les détails des services et de la couverture d’assurance, y compris les définitions, les avantages, les limites et les exclusions sont décrits dans le certificat d’assurance et l’énoncé des services fournis avec votre carte. Veuillez conserver ces documents en lieu sûr avec vos autres documents importants et prenez les avec vous en voyage. American Bankers Compagnie d’Assurance Générale, leurs filiales et sociétés affiliées, exercent des activités au Canada sous le nom Assurant<span class=\"superscripts\"><sup>MD</sup></span>.",
		Overview_ctm_LegalTextEComm6							: "<b>Renseignements supplémentaires à l’intention des résidents du Québec seulement : </b>Le taux annuel courant applicable aux personnes qui demandent la carte Mastercard<span class=\"superscripts\"><sup>MD</sup></span> Triangle<span class=\"superscripts\"><sup>MC</sup></span> ou World Elite Mastercard<span class=\"superscripts\"><sup>MD</sup></span> Triangle<span class=\"superscripts\"><sup>MC</sup></span> est de 22,99 &#37; pour les transactions au comptant et les frais afférents et de 19,99 &#37; pour tous les autres types de débit. Certaines personnes peuvent se voir accorder un taux annuel courant supérieur ou inférieur, selon les résultats de leur évaluation de crédit. Pour les nouveaux demandeurs, le paiement minimum correspondra à la somme (A) du plus élevé des montants suivants, à savoir (i) les intérêts et les frais figurant sur votre relevé plus 10 &#36;, ou (ii) 5 &#37; du nouveau solde, à l’exclusion des montants dus aux termes de programmes de modalités spéciales de paiement; plus (B) tout montant qui excède votre limite de crédit; plus (C) tout montant en souffrance qui n’est pas inclus dans le montant (B) ci dessus; plus (D) le montant de tous les versements échelonnés en vertu de programmes de paiements égaux alors dus. Un solde inférieur à 10 &#36; doit être réglé intégralement. Pour les résidents du Québec, le délai de grâce entre la date du relevé et la date d’échéance du paiement est de 26 jours. La période de facturation couverte par chaque relevé peut aller de 28 à 33 jours. Les cartes Mastercard<span class=\"superscripts\"><sup>MD</sup></span> Triangle<span class=\"superscripts\"><sup>MC</sup></span> et World Elite Mastercard<span class=\"superscripts\"><sup>MD</sup></span> Triangle<span class=\"superscripts\"><sup>MC</sup></span> ne comportent aucuns frais annuels. Exemples de coûts d’emprunt (arrondis au cent le plus proche) en supposant que tous les débits portent intérêt au taux annuel courant de 19,99 &#37;, que le mois comporte 30 jours, qu’aucun achat ne fait l’objet d’un programme de modalités spéciales de paiement et qu’aucuns autres frais, paiements additionnels ou changements ne s’appliquent :",
		Overview_ctm_LegalTextEComm5_newLine                    : "<sup>*</sup>L’offre de financement « Paiements égaux, aucun intérêt » pendant 12 mois (sauf indication contraire), n’est accordée que sur demande et sur approbation du crédit pour des achats de 200 $ ou plus (à l’exception des cartes-cadeaux) réglés avec votre carte de crédit Triangle chez Canadian Tire, Sport Chek, Atmosphere, Sports Rousseau, Hockey Expert, L’Entrepôt du Hockey et participants Mark’s/L’Équipeur, Sports Experts stores. Aucun intérêt ne court pendant la période du programme. Si nous ne recevons pas le montant intégral du paiement minimum dû indiqué sur un relevé dans les 59 jours qui suivent la date de ce relevé ou s’il se produit une situation de manquement (autre que celle de ne pas avoir effectué un paiement) en vertu de votre contrat du titulaire de carte, tous les programmes de modalités spéciales de paiement prendront fin et i) l’intérêt sur le solde impayé de chacun des programmes vous sera facturé au taux annuel courant applicable à compter du jour qui suit la date de votre prochain relevé, et ii) le solde impayé de chaque programme sera ajouté au solde dû pour ce relevé. Les programmes de modalités spéciales de paiement ne comportent aucuns frais d’administration. Chaque mois pendant la période d’un programme de paiements égaux, vous devez payer intégralement, avant la date d’échéance, le montant du versement mensuel dû en vertu de ce programme de paiements égaux. Tout montant impayé non reçu avant la date d’échéance ne fera plus partie du programme de paiements égaux, et l’intérêt vous sera facturé sur ce montant à compter du jour qui suit la date de votre relevé suivant au taux annuel courant applicable.",
		
		Overview_ctm_LegalTextEComm6_DEC_OMX			        : "<b>Renseignements supplémentaires à l’intention des résidents du Québec seulement :</b> Le taux annuel courant applicable aux personnes qui demandent la carte Mastercard<span class=\"superscripts\"><sup>MD</sup></span> Triangle<span class=\"superscripts\"><sup>MC</sup></span> ou World Elite Mastercard<span class=\"superscripts\"><sup>MD</sup></span> Triangle<span class=\"superscripts\"><sup>MC</sup></span> est de 22,99 &#37; pour les transactions au comptant et les frais afférents et de 19,99 &#37; pour tous les autres types de débit. Certaines personnes peuvent se voir accorder un taux annuel courant supérieur ou inférieur, selon les résultats de leur évaluation de crédit. Pour les nouveaux demandeurs, le paiement minimum correspondra à la somme (A) du plus élevé des montants suivants, à savoir (i) les intérêts et les frais figurant sur votre relevé plus 10 &#36;, ou (ii) 5 &#37; du nouveau solde, à l’exclusion des montants dus aux termes de programmes de modalités spéciales de paiement; plus (B) tout montant qui excède votre limite de crédit; plus (C) tout montant en souffrance qui n’est pas inclus dans le montant (B) ci dessus; plus (D) le montant de tous les versements échelonnés en vertu de programmes de paiements égaux alors dus. Un solde inférieur à 10 &#36; doit être réglé intégralement. Pour les résidents du Québec, le délai de grâce entre la date du relevé et la date d’échéance du paiement est de 26 jours. La période de facturation couverte par chaque relevé peut aller de 28 à 33 jours. Les cartes Mastercard<span class=\"superscripts\"><sup>MD</sup></span> Triangle<span class=\"superscripts\"><sup>MC</sup></span> et World Elite Mastercard<span class=\"superscripts\"><sup>MD</sup></span> Triangle<span class=\"superscripts\"><sup>MC</sup></span> ne comportent aucuns frais annuels. Exemples de coûts d’emprunt (arrondis au cent le plus proche) en supposant que tous les débits portent intérêt au taux annuel courant de 19,99 &#37;, que le mois comporte 30 jours, qu’aucun achat ne fait l’objet d’un programme de modalités spéciales de paiement et qu’aucuns autres frais, paiements additionnels ou changements ne s’appliquent :",
		Overview_ctm_LegalTextEComm6_DEC_OMZ				    : "<b>Renseignements supplémentaires à l’intention des résidents du Québec seulement :</b> Le taux annuel courant applicable aux personnes qui demandent la carte Mastercard<span class=\"superscripts\"><sup>MD</sup></span> Triangle<span class=\"superscripts\"><sup>MC</sup></span> ou World Elite Mastercard<span class=\"superscripts\"><sup>MD</sup></span> Triangle<span class=\"superscripts\"><sup>MC</sup></span> est de 22,99 &#37; pour les transactions au comptant et les frais afférents et de 19,99 &#37; pour tous les autres types de débit. Certaines personnes peuvent se voir accorder un taux annuel courant supérieur ou inférieur, selon les résultats de leur évaluation de crédit. Pour les nouveaux demandeurs, le paiement minimum correspondra à la somme (A) du plus élevé des montants suivants, à savoir (i) les intérêts et les frais figurant sur votre relevé plus 10 &#36;, ou (ii) 5 &#37; du nouveau solde, à l’exclusion des montants dus aux termes de programmes de modalités spéciales de paiement; plus (B) tout montant qui excède votre limite de crédit; plus (C) tout montant en souffrance qui n’est pas inclus dans le montant (B) ci dessus; plus (D) le montant de tous les versements échelonnés en vertu de programmes de paiements égaux alors dus. Un solde inférieur à 10 &#36; doit être réglé intégralement. Pour les résidents du Québec, le délai de grâce entre la date du relevé et la date d’échéance du paiement est de 26 jours. La période de facturation couverte par chaque relevé peut aller de 28 à 33 jours. Les cartes Mastercard<span class=\"superscripts\"><sup>MD</sup></span> Triangle<span class=\"superscripts\"><sup>MC</sup></span> et World Elite Mastercard<span class=\"superscripts\"><sup>MD</sup></span> Triangle<span class=\"superscripts\"><sup>MC</sup></span> ne comportent aucuns frais annuels. Exemples de coûts d’emprunt (arrondis au cent le plus proche) en supposant que tous les débits portent intérêt au taux annuel courant de 19,99 &#37;, que le mois comporte 30 jours, qu’aucun achat ne fait l’objet d’un programme de modalités spéciales de paiement et qu’aucuns autres frais, paiements additionnels ou changements ne s’appliquent :",
		
		Overview_ctm_LegalTextEComm7_newLine_2				    : "<span class=\"superscripts\"><sup>MD</sup></span>Assurant est une marque de commerce déposée d'Assurant Inc.",
		Overview_ctm_LegalTextEComm7							: "<span class=\"superscripts\"><sup>MD/MC</sup></span> Sauf indication contraire, toutes les marques de commerce sont la propriété de La Société Canadian Tire Limitée, utilisée sous licence.",			
		Overview_ctm_LegalTextEComm7_OMP						: "<span class=\"superscripts\"><sup>MD/MC</sup></span> Sauf indication contraire, toutes les marques de commerce sont la propriété de La Société Canadian Tire Limitée et sont utilisées sous licence.",			
		Overview_ctm_LegalTextEComm8							: "<span class=\"superscripts\"><sup>MD/MC</sup></span> Sport Chek et Atmosphere sont des marques de commerce déposée de FGL Sport ltée, utilisée sous licence.",
		Overview_ctm_LegalTextEComm8_OMP						: "<span class=\"superscripts\"><sup>MD/MC</sup></span> Sport Chek et Atmosphere sont des marques de commerce déposées de FGL Sport ltée, utilisées sous licence.",
		Overview_ctm_LegalTextEComm9							: "<span class=\"superscripts\"><sup>MD/MC</sup></span> L’Équipeur et L'Equipeur sont des marques de commerce déposée  de Mark’s Work Warehouse Ltd., utilisée sous licence.",
		Overview_ctm_LegalTextEComm9_OMP						: "<span class=\"superscripts\"><sup>MD/MC</sup></span> Mark’s et L’Équipeur sont des marque de commerce déposées de Mark’s Work Warehouse Ltd., utilisées sous licence.",
		Overview_ctm_LegalTextEComm9_OMR						: "<span class=\"superscripts\"><sup>MD/MC</sup></span> Mark’s et L’Équipeur sont des marques de commerce déposées de Mark’s Work Warehouse Ltd., utilisées sous licence.",
		Overview_ctm_LegalTextEComm10						    : "<span class=\"superscripts\"><sup>MD/MC</sup></span> Mastercard et World Elite Mastercard sont des marques de commerce déposées et le logo des deux cercles imbriqués est une marque de commerce de Mastercard International Incorporated.",
		
		// US5241
		Overview_ctm_LegalTextEComm11									: "HUSKY, Husky House, myHusky.ca, myHusky Rewards sont des marques de commerce détenues ou utilisées sous licence par Husky Oil Marketing Company, une division de Husky Oil Operations Limited.",
		Overview_ctm_LegalTextOIC_OMX_OMZ_11							: "HUSKY, Husky House, myHusky.ca, myHusky Rewards sont des marques de commerce détenues ou utilisées sous licence par Husky Oil Marketing Company, une division de Husky Oil Operations Limited.",
		
		Overview_ctm_LegalTextEComm10_DEC						: "<span class=\"superscripts\"><sup>MD/MC</sup></span> Mastercard et World Elite Mastercard sont des marques de commerce déposées et le logo des deux cercles imbriqués est une marque de commerce de Mastercard International Incorporated.",
		Overview_ctm_LegalTextEComm10_OIC_OMP_CARD              : "<span class=\"superscripts\"><sup>MD/MC</sup></span>  Mastercard est une marque de commerce déposée et le logo des deux cercles imbriqués est une marque de commerce de Mastercard International Incorporated.",
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
		
		// US4997
		Overview_ctm_LegalText_OIC_OMP_Card_Text2                       :   "<sup>&#42;</sup> Selon le montant net des nouveaux achats (achats moins crédits) portés à votre compte Mastercard<sup>MD</sup> Avantage Essence<sup>MD</sup> au cours de toute période de facturation mensuelle, vous serez admissible à un rabais sur chaque litre d’essence ou de carburant diesel acheté pour un véhicule automobile dans un poste d’essence Canadian Tire au cours de la période de facturation mensuelle suivante et payé avec la carte Mastercard<sup>MD</sup> Avantage Essence<sup>MD</sup>. <sup>&#42;</sup>Le rabais que vous obtenez au cours d’une période de facturation donnée sera ramené à 2 &cent; le litre dès que le total des achats d’essence, de carburant et d’articles divers effectués dans les postes d’essence Canadian Tire et réglés avec votre carte Mastercard<sup>MD</sup> Avantage Essence<sup>MD</sup> dépassera la somme de 700 &#36; au cours de cette période de facturation. En date du 2 mai 2016, le rabais est ramené à 2 &cent; le litre dès que le total des achats effectués dans les postes d’essence Canadian Tire dépasse 500 &#36;. Pour obtenir de plus amples renseignements, veuillez lire le texte des modalités du programme Mastercard<span class=\"superscripts\"><sup>MD</sup></span> Avantage Essence<span class=\"superscripts\"><sup>MD</sup></span>. Précédent",
		Overview_ctm_LegalText_OIC_OMP_Card_Text3                       :   "<sup>1</sup>  Si votre demande de carte n’est pas approuvée aux taux susmentionnés, la Banque Canadian Tire peut quand même vous émettre une carte aux taux d’intérêt annuels suivants : (i) si vous êtes un résident du Québec, <b>22,99 %</b> pour tous les frais; ou (ii) si vous résidez à l’extérieur du Québec, <b>25,99 %</b> pour tous les frais (à l’exception des transactions au comptant et des frais afférents) et <b>27,99 %</b> pour les transactions au comptant et les frais afférents. sera de <b>27,99 %</b>.",

		Overview_ctm_LegalText_OIC_OMP_Card_Text5                       :   "L’offre de financement « Paiements égaux, aucun intérêt » pendant 12 mois (à moins d’indications contraires) n’est accordée que sur demande sous réserve d’une approbation de crédit préalable pour des achats de 200 &#36; ou plus (à l’exception des cartes-cadeaux) réglés avec une carte de crédit émise par la Banque Canadian Tire dans un magasin Canadian Tire. Aucun intérêt ne court pendant la période du programme. Si nous ne recevons pas le montant intégral du paiement minimum dû indiqué sur un relevé dans les 59 jours qui suivent la date de ce relevé ou s’il se produit une situation de manquement (autre que celle de ne pas avoir effectué un paiement) en vertu de votre contrat du titulaire de carte, tous les programmes de modalités spéciales de paiement prendront fin et i) l’intérêt sur le solde impayé de chacun des programmes vous sera facturé au taux annuel courant applicable à compter du jour qui suit la date de votre prochain relevé, et ii) le solde impayé de chaque programme sera ajouté au solde dû pour ce relevé. Les programmes de modalités spéciales de paiement ne comportent aucuns frais d’administration. Chaque mois pendant la durée d’un programme de paiements égaux, vous devez payer intégralement, avant la date d’échéance, le montant de la mensualité due pour le programme de paiements égaux en question. Tout montant non reçu avant la date d’échéance ne fera plus partie du programme de paiements égaux, et l’intérêt vous sera facturé sur ce montant à compter du jour qui suit la date de votre prochain relevé au taux annuel courant applicable.",
		Overview_ctm_LegalText_OIC_OMP_Card_Text6                       :   "<b>Renseignements supplémentaires à l’intention des résidents du Québec seulement :</b> Le taux annuel courant applicable aux personnes qui demandent la carte Mastercard Avantage Essence est de 22,99 &#37; pour les transactions au comptant et les frais afférents et de 19,99 &#37; pour tous les autres types de débit. Certaines personnes peuvent se voir accorder un taux annuel courant supérieur ou inférieur, selon les résultats de leur évaluation de crédit. Pour les nouveaux demandeurs, le paiement minimum correspondra à la somme (A) du plus élevé des montants suivants, à savoir (i) les intérêts et les frais figurant sur votre relevé plus 10 &#36;, ou (ii) 5 &#37; du nouveau solde, à l’exclusion des montants dus aux termes de programmes de modalités spéciales de paiement; plus (B) tout montant qui excède votre limite de crédit; plus (C) tout montant en souffrance qui n’est pas inclus dans le montant (B) ci dessus; plus (D) le montant de tous les versements échelonnés en vertu de programmes de paiements égaux alors dus. Un solde inférieur à 10 &#36; doit être réglé intégralement. Pour les résidents du Québec, le délai de grâce entre la date du relevé et la date d’échéance du paiement est de 26 jours.La période de facturation couverte par chaque relevé peut aller de 28 à 33 jours. La carte Mastercard Avantage Essence ne comportent aucuns frais annuels. Exemples de coûts d’emprunt (arrondis au cent le plus proche) en supposant que tous les débits portent intérêt au taux annuel courant de 19,99 &#37;, que le mois comporte 30 jours, qu’aucun achat ne fait l’objet d’un programme de modalités spéciales de paiement et qu’aucuns autres frais, paiements additionnels ou changements ne s’appliquent :",
		
		Overview_ctm_LegalText_OIC_OMR_Card_Text2                       :   "<sup>&#8224;</sup> Certaines conditions s’appliquent. Consultez les modalités du programme de récompenses pour de plus amples détails.",
		Overview_ctm_LegalText_OIC_OMR_Card_Text3                       :   "&#8225; Les primes annuelles seront utilisées pour réduire le solde servant au calcul du paiement minimum, mais elles ne réduiront pas le solde utilisé pour le calcul des frais d’intérêts ni des primes d’assurance basées sur le solde. D’autres conditions s’appliquent. Pour obtenir de plus amples renseignements, consultez les modalités du programme de primes.",
		Overview_ctm_LegalText_OIC_OMR_Card_Text4                       :   "<sup>1</sup> Si votre demande de carte n’est pas approuvée aux taux susmentionnés, la Banque Canadian Tire peut quand même vous émettre une carte aux taux d’intérêt annuels suivants : (i) si vous êtes un résident du Québec, 22,99 &#37; pour tous les frais; ou (ii) si vous résidez à l’extérieur du Québec, <b>25,99 %</b> pour tous les frais (à l’exception des transactions au comptant et des frais afférents) et <b>27,99 %</b> pour les transactions au comptant et les frais afférents. sera de <b>27,99 &#37;</b>.",
		Overview_ctm_LegalText_OIC_OMR_Card_Text5                       :   "<sup>&#42;</sup> L’offre de financement « Paiements égaux, aucun intérêt » pendant 12 mois (à moins d’indications contraires) n’est accordée que sur demande sous réserve d’une approbation de crédit préalable pour des achats de 200 &#36; ou plus (à l’exception des cartes-cadeaux) réglés avec une carte de crédit émise par la Banque Canadian Tire dans un magasin Canadian Tire. Aucun intérêt ne court pendant la période du programme. Si nous ne recevons pas le montant intégral du paiement minimum dû indiqué sur un relevé dans les 59 jours qui suivent la date de ce relevé ou s’il se produit une situation de manquement (autre que celle de ne pas avoir effectué un paiement) en vertu de votre contrat du titulaire de carte, tous les programmes de modalités spéciales de paiement prendront fin et i) l’intérêt sur le solde impayé de chacun des programmes vous sera facturé au taux annuel courant applicable à compter du jour qui suit la date de votre prochain relevé, et ii) le solde impayé de chaque programme sera ajouté au solde dû pour ce relevé. Les programmes de modalités spéciales de paiement ne comportent aucuns frais d’administration. Chaque mois pendant la durée d’un programme de paiements égaux, vous devez payer intégralement, avant la date d’échéance, le montant de la mensualité due pour le programme de paiements égaux en question. Tout montant non reçu avant la date d’échéance ne fera plus partie du programme de paiements égaux, et l’intérêt vous sera facturé sur ce montant à compter du jour qui suit la date de votre prochain relevé au taux annuel courant applicable.",
		Overview_ctm_LegalText_OIC_OMR_Card_Text6                       :   "<b>Renseignements supplémentaires à l’intention des résidents du Québec seulement :</b> Le taux annuel courant applicable aux personnes qui demandent la carte Mastercard Avantage Remise est de 22,99 &#37; pour les transactions au comptant et les frais afférents et de 19,99 &#37; pour tous les autres types de débit. Certaines personnes peuvent se voir accorder un taux annuel courant supérieur ou inférieur, selon les résultats de leur évaluation de crédit. Pour les nouveaux demandeurs, le paiement minimum correspondra à la somme (A) du plus élevé des montants suivants, à savoir (i) les intérêts et les frais figurant sur votre relevé plus 10 &#36;, ou (ii) 5 &#37; du nouveau solde, à l’exclusion des montants dus aux termes de programmes de modalités spéciales de paiement; plus (B) tout montant qui excède votre limite de crédit; plus (C) tout montant en souffrance qui n’est pas inclus dans le montant (B) ci dessus; plus (D) le montant de tous les versements échelonnés en vertu de programmes de paiements égaux alors dus. Un solde inférieur à 10 &#36; doit être réglé intégralement. Pour les résidents du Québec, le délai de grâce entre la date du relevé et la date d’échéance du paiement est de 26 jours.La période de facturation couverte par chaque relevé peut aller de 28 à 33 jours. La carte Mastercard Avantage Remise ne comportent aucuns frais annuels. Exemples de coûts d’emprunt (arrondis au cent le plus proche) en supposant que tous les débits portent intérêt au taux annuel courant de 19,99 &#37;, que le mois comporte 30 jours, qu’aucun achat ne fait l’objet d’un programme de modalités spéciales de paiement et qu’aucuns autres frais, paiements additionnels ou changements ne s’appliquent :",
		
		sdfsfasff 												: ""	,
		decline_chapter_one_text                               :  "<b>Malheureusement, nos services de crédit instantané sont temporairement</b>",
		decline_chapter_one_text_OMP_OMR                       :  "<b>Malheureusement, nous ne sommes pas en mesure de traiter instantanément votre demande aujourd’hui. Notre équipe passe actuellement votre demande de carte en revue. Le processus d’évaluation dure généralement quelques jours, mais prend parfois jusqu’à deux semaines, selon les renseignements fournis.</b>",
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
		pending_Verification_chapter_three_omx					 		:"<strong>Trousse de bienvenue :</strong> Si votre demande est approuvée, votre trousse de bienvenue contenant votre carte Mastercard<span class=\"superscripts\"><sup>MD</sup></span> Triangle<span class=\"superscripts\"><sup>MC</sup></span> vous parviendra par la poste dans un délai de 7 à 10 jours ouvrables.<br>Vous recevrez également une carte Récompenses Triangle<sup>MC</sup> et une trousse de bienvenue au programme Récompenses Triangle séparément dans un délai de 7 à 10 jours ouvrables.",
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
