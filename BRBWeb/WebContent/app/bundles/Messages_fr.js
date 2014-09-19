ensureNamespaceExists();

BRB.dictionary_fr = {

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
			
		breadCrumbItem_Overview								:	"APERÇU",
		breadCrumbItem_PersonalInformation					:	"RENSEIGNEMENTS PERSONNELS",
		breadCrumbItem_AdditionalInformation				:	"PRODUITS FACULTATIFS",
		breadCrumbItem_Confirmation							:	"CONFIRMATION",
		breadCrumbItem_IdentityVerification					:	"VÉRIFICATION D’IDENTITÉ",
			
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
		
		continue_Button_Label								:	"Continuer",
		back_Button_Label									:	"Retour",
		continue_Button_PopupMode_SaveChanges_Label			:	"Enregistrer les changements",
		continue_Button_PopupMode_CancelChanges_Label		:	"Annuler les changements",
		initiate_BRB_Web_App_ErrorTitle						:	"Échec de la récupération des renseignements du client",
		initiate_BRB_Web_App_ErrorMsg                       :   "Impossible de récupérer les renseignements du client, veuillez essayer de nouveau",
		tm							                        :   "<span class=\"superscripts\">MC</span>",
		r							                        :   "<span class=\"superscripts\">MD</span>",
		requiredFieldIndicatorLabel							:	" Indique un champ obligatoire", 		
		
		PageHeader_CanadianTireTabLogo						:	'<div class="PageHeader_CanadianTireTabLogo_fr"></div>',
				
		session_Expired_ErrorTitle							: 	"Demande timed out",
		session_Expired_ErrorMsg							:	"En raison d'une période d’inactivité prolongée, votre demande a expiré. <br>Veuillez représenter une demande afin qu’elle nous soit acheminée avec succès. <br>Remarque : votre session expirera au bout de 30 minutes ou après 10 minutes d'inactivité.",
		
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
		
		header_Phone										: '1 800 459-6415',
		//-----------------------------------------End-Common----------------------------------------------
		//----------------------------------------- Overview section ------------------------------	
		
		overview_PromoCodeError								:	"Veuillez entrer un code de promotion de 4 à 5 chiffres valable.",
		overview_ProvinceError								:	"Veuillez choisir votre province de résidence pour poursuivre la demande.",
		
		overview_PromoCodeHint								:	"Veuillez entrer le code de promotion associé à la promotion que vous avez reçue.",
		
		chooseProduct_Title									:	"IL VOUS FAUDRA DE TROIS À CINQ MINUTES POUR REMPLIR LA PRÉSENTE DEMANDE DE CARTE.",
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
		
		overview_Title										:	"Veuillez prendre connaissance des renseignements ci-dessous, puis cliquez sur Commencer pour remplir la demande de carte.",
		overview_PrintDownload_LinkText						:	"<a href='https://www.ctfs.com/SharedContent/documents/f_online_disclosure.pdf' target='_blank'>Imprimez ou téléchargez la version PDF de la déclaration.</a>",
		
		overview_TopTableLeftColTitle						:	"Suis-je admissible?",
		overview_TopTableLeftCol1							:	"Vous devez résider au Canada.",
		overview_TopTableLeftCol2							:	"Vous devez avoir atteint l'âge de la majorité dans votre province de résidence.",
		overview_TopTableLeftCol3							:	"Vous devez occuper un emploi ou être à la retraite.",
		overview_TopTableRightColTitle						:	"De quoi ai-je besoin?",
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
		overview_CustomerServiceDepartment_Text1 			:	"Au Canada : 1 800 459-6415",
		overview_CustomerServiceDepartment_Text2 			:	"Ailleurs qu'au Canada : 905 735-7256",
		overview_CustomerServiceDepartment_Text3 			:	"La carte MasterCard<span class=\"superscripts\"><sup>MD</sup></span> Options<span class=\"superscripts\"><sup>MD</sup></span> de Canadian Tire est émise par la Banque Canadian Tire en vertu d'une licence accordée par MasterCard International. Le montant de votre limite de crédit initiale ne pourra pas dépasser 25 000 $. Si votre demande est approuvée, votre carte sera expédiée dans les six (6) semaines suivant la demande. Les Services Financiers Canadian Tire Limitée (les « SFCT ») n'exigent aucuns frais pour la transmission d'une demande de carte de crédit à la Banque Canadian Tire. L'adresse de la Banque Canadian Tire et des SFCT est la suivante :",
		overview_CustomerServiceDepartment_Text4 			:	"C.P. 2000",
		overview_CustomerServiceDepartment_Text5 			:	"Welland (Ontario)  L3B 5S3",
		overview_CustomerServiceDepartment_Text6 			:	"Télécopieur : 1 888 728-5822",
		
		overview_PromoCode									:	"Code promotionnel",
		overview_Province									:	"Province",
		
		overview_SecurityMessaging_Title					:	"Message concernant la sécurité",
		overview_SecurityMessaging_Content					:	"Chez Canadian Tire, nous attachons une grande importance à la sécurité de vos renseignements personnels. Prenez connaissance des mesures mises en œuvre pour protéger les renseignements personnels de nos clients.",
		overview_SecurityMessaging_MoreInfo					:	"Pour obtenir de plus amples renseignements, consultez notre",
		overview_SecurityMessaging_PrivacyCharter			:	"<a href='https://www.ctfs.com/lang/fr/SecurityCentre/PrivacyAndSecurity/PrivacyCharter/' target='_blank'>politique en matière de protection des renseignements personnels.</a>",
		
		overview_AutoTimeout_Title							:	"Fin de session automatique",
		overview_AutoTimeout_Content						:	"Pour votre protection, votre session expirera automatiquement au bout de 30 minutes d’activité ou 10 minutes d’inactivité.",
		
		overview_startApplication_Button_Label				:	"Commencer",
		overview_RequiredField_Lable						:	"Indique un champ obligatoire",
		
		overview_footnoteContentText1						:	"Primes octroyées sous forme d'« Argent » Canadian Tire avec la Carte<span class=\"superscriptsFootnote\"><sup>MD</sup></span> ou points Avantage « Argent » Canadian Tire<span class=\"superscriptsFootnote\"><sup>MD</sup></span>, selon le cas. Sous réserve des modalités et des restrictions visant l’octroi et l’échange des primes. Détails en magasin ou sur le page Programme de primes en « Argent » Canadian Tire à l’adresse",
		overview_footnoteContentText1Extended				:	"Primes octroyées sous forme d’« Argent » Canadian Tire avec la Carte<span class=\"superscriptsFootnote\"><sup>MD</sup></span>. Sous réserve des modalités et des restrictions visant l’octroi et l’échange des primes.Détails en magasin ou sur la page Programme de primes en « Argent » Canadian Tire. Les titulaires de la carte MasterCard Options en Nouvelle-Écosse participent à un autre programme de primes; veuillez vous rendre à l’adresse ",
		overview_footnoteContentText1Link					:	"<a href='https://www.ctfs.com/lang/fr/Products/CreditCards/OptionsMasterCard/CTMoneyRewards/' target='_blank'>ctfs.com/act.</a>",
		overview_footnoteContentText2						:	" À la condition que votre compte soit en règle et que l’achat soit admissible à l’échange de primes",	
		overview_footnoteContentTextLinkBack				:	"retour",
		overview_footnoteContentText4						:	"<span class=\"superscriptsFootnote\"><sup>MD</sup></span>/<span class=\"superscriptsFootnote\"><sup>MC</sup></span> Sauf indication cont raire, toutes les marques de commerce sont la propriété de La Société Canadian Tire Limitée et sont utilisées sous licence.",
		overview_footnoteContentText5						:	"<span class=\"superscriptsFootnote\"><sup>MD</sup></span>/<span class=\"superscriptsFootnote\"><sup>MC</sup></span> MasterCard et la marque figurative de MasterCard sont des marques de commerce deposees et PayPass est une marque de commerce de MasterCard International Incorporated.",
//		overview_footnoteContentText6						:	"<span class=\"superscriptsFootnote\"><sup>MD</sup></span> Couverture-crédit et Couverture-crédit – Âge d’or sont la propriété des Services Financiers Canadian Tire Limitée. ",
		
		overview_Province_TextField							:	'<select class="fieldValuesSelectField" id="overview_Province_TextField" tabindex=2></select>',
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
		overview_NS_TableLeftColTxt5						:   "Au lieu de primes en « Argent » Canadian Tire avec la Carte<span class=\"superscriptsFootnote\"><sup>MD</sup></span>, vous obtiendrez désormais de l’« @rgent » Canadian Tire.",
		overview_NS_LeftHeadingText1	    				:	"Si vous faites la demande d’une carte MasterCard Options en Nouvelle-Écosse :",
		overview_NS_TableLeftColTxt1						:   "Le programme Avantage « Argent » Canadian Tire<span class=\"superscriptsFootnote\"><sup>MD</sup></span> deviendra le programme Mon « Argent » Canadian Tire<span class=\"superscriptsFootnote\"><sup>MC</sup></span> le 10 octobre",
		overview_NS_TableLeftColTxt2						:   "Accumulez maintenant de l’ « @rgent » Canadian Tire<span class=\"superscriptsFootnote\"><sup>MD</sup></span> au lieu de points Avantage « Argent » Canadian Tire dans nos magasins et sur le site canadiantire.ca lorsque vous achetez des articles admissibles.",
		overview_NS_TableLeftColTxt3						:   "Remarque : Le taux auquel vous obtiendrez de l’« @rgent » Canadian Tire est différent de celui auquel vous accumulez des points Avantage « Argent »<sup>2</sup>.",
		overview_NS_LeftHeadingText3						:   "Dans le cadre de ce nouveau programme, exclusivement pour vous, en tant que titulaire de carte MasterCard Options :",
		overview_NS_TableLeftColTxt7					    :   "Obtenez 10X les primes en « @rgent » Canadian Tire<sup>1</sup> tous les jours aux magasins Canadian Tire, y compris aux centres-autos, aux magasins Partsource<span class=\"superscriptsFootnote\"><sup>MD</sup></span>, Mark’s / L’Équipeur<span class=\"superscriptsFootnote\"><sup>MD</sup></span> et Sport Chek<span class=\"superscriptsFootnote\"><sup>MD 1</sup></span>.",
		overview_NS_TableLeftColTxt8						:   "Obtenez 2X les primes en « @rgent » Canadian Tire partout ailleurs où vous magasinez<sup>1</sup>.",
		overview_NS_TableLeftColTxt9						:   "Obtenez de l’« @rgent » Canadian Tire dans les postes d’essence Canadian Tire participants<sup>3</sup>.",
		overview_NS_TableLeftColTxt10						:   "C’est facile d’échanger votre « @rgent » Canadian Tire – directement à la caisse des magasins Canadian Tire ou en ligne pour les cartes-cadeaux, à l’adresse canadiantire.ca",
		overview_NS_TableLeftColTxt11						:   "Surveillez votre courrier pour en savoir plus!",
							 
		overview_NS_FootnotesTxt1							:   "<sup>1</sup> Les titulaires de carte MasterCard Options de Canadian Tire obtiennent de l’« @rgent » Canadian Tire à un taux qui est 10X (ou 2X selon le cas) le taux auquel les autres membres du programme Mon « Argent » Canadian Tire obtiennent de l’« @rgent » Canadian Tire lors d’achats effectués par ces membres dans les magasins Canadian Tire (si ces membres payent en argent comptant, avec une carte de débit ou une carte de crédit qui n’est pas liée à ce programme de fidélisation). Le taux offert est exclusif de toute prime, offre promotionnelle ou transaction d’échange.",
		overview_NS_FootnotesTxt2							:   "<sup>2</sup> L’« @rgent » Canadian Tire obtenu dans les magasins Canadian Tire ou en ligne à canadiantire.ca est calculé sur le montant avant taxes des achats admissibles et est arrondi au cent le plus proche. Pour connaître les taux actuels, composez le 1-800-226-8473.",
		overview_NS_FootnotesTxt3							:   "<sup>3</sup> Un montant d’achat d’essence minimum peut être requis. Le taux peut varier d’une région à l’autre. Rendez-vous aux postes d’essence locaux pour en savoir plus.",
		overview_NS_FootnotesTxt5							:   "<span class=\"superscriptsFootnote\"><sup>MD</sup></span>/<span class=\"superscriptsFootnote\"><sup>MC</sup></span> Canadian Tire, « Argent » Canadian Tire avec la Carte, Avantage « Argent » Canadian Tire, Options de Canadian Tire, PartSource et le triangle de Canadian Tire sont des marques de commerce déposées et Mon « Argent » Canadian Tire et « @rgent » Canadian Tire sont des marques de commerce de La Société Canadian Tire Limitée.",
		overview_NS_FootnotesTxt6						    :   "<span class=\"superscriptsFootnote\"><sup>MD</sup></span>/<span class=\"superscriptsFootnote\"><sup>MC</sup></span> MasterCard et la marque figurative de MasterCard sont des marques de commerce déposées et <i>PayPass</i> est une marque de commerce de MasterCard International Incorporated. ",
		
		 
		
		//--------------- END --------------------- Overview Nova Scotia section -------------- END -----------	
		
		
		productSelection_Title								:   "Choix de produit",
		
		//----------------------------------------- Personal Information section ------------------------------
		
		personalInformation_CTProfileLabel					:	"Cliquez ici pour copier les renseignements du profil MonCT.",
		
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
		personalInformation_GrossAnnualIncomeError			:	"Veuillez entrer le montant de votre revenu annuel brut. N’utilisez pas d’espace, de point ni de virgule (p. ex. : 35 000).",
		
		personalInformation_EmailAddressHint				:	"Vous devez fournir votre adresse courriel afin que nous puissions vous envoyer les modalités, ainsi que les détails de l'approbation de votre nouvelle carte lorsque votre demande sera approuvée. Si vous ne fournissez pas votre adresse courriel, vous devrez présenter une demande de carte de crédit par le biais d’une autre méthode.",
		personalInformation_SINHint							:	"Votre NAS nous permet de traiter vos informations financières plus efficacement.",
		personalInformation_GrossAnnualIncomeHint			:	"Comprend votre revenu avant impôts. Cela comprend vos rentes de régimes de retraite, vos rentes des régimes publics et tout autre revenu. Arrondissez le montant au dollar près. N’utilisez pas d’espace, de point ni de virgule <nobr>(p. ex. : 35 000).</nobr>",
		
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
		
		personalInformation_AboutYourself					:	"Renseignements personnels",
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
		personalInformation_SocialInsurance						:	"Numéro d'assurance sociale",
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
		personalInformation_AddressSince						:	"À cette adresse<br>depuis", // <br> tag is for proper locating in the table cell
		
		personalInformation_EmploymentInformation				:	"Renseignements sur l'emploi",
		personalInformation_EmploymentType						:	"Type d'emploi",
		personalInformation_Employer							:	"Employeur",
		personalInformation_JobTitle							:	"Catégorie d'emploi",
		personalInformation_JobDescription						:	"Titre du poste",
		personalInformation_EmployerSince						:	"Avec cet employeur depuis",
		
		personalInformation_FinancialInformation				:	"Renseignements financiers",
		personalInformation_GrossAnnualIncome					:	"Revenu annuel brut",
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
		
		employmentType_FullTime									:	"Temps plein",
		employmentType_Seasonal									:	"Saisonnier",
		employmentType_PartTime									:	"Temps partiel",
		employmentType_Retired									:	"Retraité",
		
		residentialStatus_Own									:	"Propriétaire",
		residentialStatus_Rent									:	"Locataire",
		residentialStatus_Parents								:	"Maison des parents",
		residentialStatus_Other									:	"Autre",
		
		jobTitlesList_DR                              :                         'CHAUFFEUR',
		jobTitlesList_GU                              :                         'GARDIEN',
		jobTitlesList_HO                              :                         'PERSONNE AU FOYER',
		jobTitlesList_LA                              :                         'OUVRIER',
		jobTitlesList_MA                              :                         'GESTIONNAIRE',
		jobTitlesList_MI                              :                         'MILITAIRE',
		jobTitlesList_OF                              :                         'PERSONNEL DE BUREAU',
		jobTitlesList_OW                              :                         'PROPRIÉTAIRE',
		jobTitlesList_FA                              :                         'TRAVAILLEUR À LA PRODUCTION',
		jobTitlesList_PR                              :                         'MEMBRE DU PERSONNEL PROFESSIONNEL',
		jobTitlesList_RE                              :                         'RÉPARATEUR',
		jobTitlesList_RT                              :                         ' RETRAITÉ',
		jobTitlesList_SA                              :                         'VENTES',
		jobTitlesList_SE                              :                         'SERVICE',
		jobTitlesList_ST                              :                         'ÉTUDIANT',
		jobTitlesList_TR                              :                         'GENS DE MÉTIER',
		jobTitlesList_UN                              :                         'CHÔMAGE',
		jobTitlesList_OT                              :                         'AUTRE',
		
	    personalData_MR									:	"M.",
	    personalData_MRS								:	"MME",
	    personalData_MISS								:	"MLLE", // ---
	    personalData_MS									:	"MLLE",
		
		personalInformation_useMyCTProfileButtonText	  			:	'<span class="buttonCTText_fr">Utiliser les renseignements de mon  profil  Mon CT</span>',
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
		personalInformation_EmployerSince_Month						:	'<select class="fieldValuesSelectField dateOfBirthMonthField" id="personalInformation_EmployerSince_Month" placeholder="Month" />',
		personalInformation_EmployerSince_Year						:	'<input class="fieldValuesTextField dateOfBirthYearField" id="personalInformation_EmployerSince_Year" placeholder="Année" type="text" maxlength="4"/>',
		
		personalInformation_grossIncomeError1						:	'Le revenu annuel brut entré est ',
		personalInformation_grossIncomeError2						:	' $. Est-ce exact?',
		
		//--------------- END --------------------- Personal Information section -------------- END -----------

		//----------------------------------------- OPTIONAL PRODUCTS section ------------------------------
		
		additionalInformation_RelationshipError					:   "Veuillez choisir un type de relation parmi la liste déroulante.",
		additionalInformation_NoRadioSelecedError				:   "Veuillez faire un choix.",
		additionalInformation_AgreeToTermsError					:   "Si vous aimeriez adhérer à ce produit, vous devez accepter les modalités avant de continuer.",
		
		additionalInformation_Title								:   "Produits facultatifs",
		additionalInformation_GetSuplementaryCard				:	"Obtenez une carte supplémentaire",
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
		additionalInformation_OptionalProducts					:	"ADHÉSION À DES PRODUITS FACULTATIFS<sup>&#8224;&#8224;</sup>",
		additionalInformation_AuthorizeSupplementaryCardmember	:	"! Je désire autoriser une personne à détenir une carte supplémentaire sur ce compte et vous demande d’émettre une carte supplémentaire à son nom, SANS FRAIS.",
		additionalInformation_OptionalInsurance_CreditProtector :	"- Je désire adhérer à Couverture-crédit<span class=\"superscripts\"><sup>MD</sup></span><sup>**</sup>/Couverture-crédit – Âge d’or<span class=\"superscripts\"><sup>MD</sup></span> <sup>**</sup>",
		additionalInformation_OptionalInsurance_IdentityWatch   :   "- Je veux adhérer au programme Surveillance d’identité Classique",
		additionalInformation_OptionalInsurance_ProtectionAdvantage   :   "- Je veux adhérer à Avantage Protection<span class=\"superscripts\"><sup>MC</sup></span> de Canadian Tire",
		additionalInformation_OptionalInsurance_DoNotEnrolMe 	:   "- Je ne veux pas adhérer à l’assurance facultative.",
		
		
		additionalInformation_OptionalInsurance_Details			:	"<i>(non disponible pour les résidents de la Saskatchewan)</i><br><ul><li>La prime est de 1,10 $ par tranche de 100 $ du solde mensuel courant, moins toute prime d’assurance impayée, chaque mois où le solde de votre compte est de 10 $ ou plus et est portée à votre compte MasterCard<span class=\"superscripts\"><sup>MD</sup></span> de Canadian Tire<span class=\"superscripts\"><sup>MD</sup></span></li><li>Par exemple, si votre solde était de 200 $ au moment de l’impression de votre relevé, vous ne paieriez que 2,20 $, taxe en sus.</li></ul>",
		additionalInformation_OptionalInsurance_Details1		:   " ",//we need this empty string because french and english templates have different structure
		additionalInformation_OptionalInsurance_Details2		:   "Protégez vos renseignements personnels et ceux de votre famille grâce à Surveillance d’identité Classique."
																	+ "<ul><li>Service de surveillance en ligne des renseignements personnels que vous enregistrez.</li>"
																	+ "<li>Service de retour de biens Rebound<span class=\"superscripts\"><sup>MD</sup></span>*** qui peut vous aider à récupérer les objets perdus ou volés.</li>"
																	+ "<li>Remboursement*** de 75 $ (CAD) maximum, taxes incluses, par adhésion à l’année.</li>"
																	+ "<li>De plus, la protection des cartes, la sauvegarde de données en ligne, une prime de 3 000 $ (CAD) maximum liée à l’arrestation de la personne ayant volé la carte.</li>"
																	+ "<li>4,99 $*** payable en avance chaque mois une fois votre première transaction effectuée avec votre carte de crédit de marque Canadian Tire.</li></ul>"
																	+ "Si vous souscrivez au programme Surveillance d’identité Classique, votre adhésion prendra effet à compter de la date d’inscription indiquée sur votre lettre de bienvenue, laquelle est comprise dans votre trousse de bienvenue du programme Surveillance d’identité Classique.",
																//	+ "*Certaines conditions s’appliquent."
																//	+ "<br>Surveillance d’identité Classique, 4,99 $ par mois, taxes applicables en sus."
																//	+ "J’ai lu et j’accepte les <a href='https://www.ctfs.com/lang/fr/Products/TermsandConditions/IDWatch/' target='_blank'>modalités</a>.",
		additionalInformation_OptionalInsurance_Details3		:   "<i>(non disponible en Saskatchewan)</i><br>Recevez une couverture complète grâce à la souscription à la fois au programme Couverture-crédit<span class=\"superscripts\"><sup>MD</sup></span> / Couverture-crédit – Âge d’or<span class=\"superscripts\"><sup>MD</sup></span>** et Surveillance d’identité Classique."
																	+ "<ul><li>La prime de Couverture-crédit<span class=\"superscripts\"><sup>MD</sup></span> / Couverture-crédit – Âge d’or<span class=\"superscripts\"><sup>MD</sup></span>** est de 1,10 $ par tranche de 100 $* du solde du mois courant chaque mois où le solde de votre compte est de 10 $ ou plus, et la prime de Surveillance d’identité Classique est de 4,99 $*** payable en avance chaque mois une fois votre première transaction effectuée avec votre carte de crédit de marque Canadian Tire. </li>"
																	+ "<li>Par exemple, si votre solde était de 200 $ au moment de l’impression de votre relevé, vous ne paieriez que 2,20 $, taxe en sus. </li></ul>",
		 
		additionalInformation_Final_Details                     :   "Renseignements additionnels",
		additionalInformation_Final_Details_Language            :   "Langue de correspondance",
		additionalInformation_Final_Details_Statement           :   "Préférence en matière de relevé",
		additionalInformation_Final_Details_Subscription        :   "Oui, veuillez m’envoyer des courriels sur les offres de produits et des détails sur les offres exclusives aux titulaires de carte",
		
		additionalInformation_Spouse							:	"Conjoint(e)",
		additionalInformation_Son								:	"Fils",
		additionalInformation_Daughter							:	"Fille",
		additionalInformation_Relative							:	"Parent",
		additionalInformation_Other								:	"Autre",
		additionalInformation_Credit_Protector_Text             :   "J’ai lu et j’accepte les <a href='https://www.ctfs.com/lang/fr/ApplyNow/CreditProtector/SummaryOfCoverages/' target='_blank'>modalités</a> de Couverture-crédit / Couverture-crédit – Âge d’or.",
		additionalInformation_Identity_Watch_Text               :   "J’ai lu et j’accepte les <a href='https://www.ctfs.com/lang/fr/Products/TermsandConditions/IDWatch/' target='_blank'>modalités</a> de Surveillance d’identité.",	
		additionalInformation_ProtectionAdvantage_Text          :   "J’ai lu et j’accepte les <a href='https://www.ctfs.com/lang/fr/Products/TermsandConditions/ProtectionAdvantage/' target='_blank'>modalités</a> du programme Avantage Protection.",

		additionalInformation_IdentityWatch_Terms				: " ",//we need this empty string because french and english templates have different structure
		additionalInformation_ProtectionAdvantage_Terms			: " ",//we need this empty string because french and english templates have different structure
		additionalInformation_EarnReward						: '<div class="additionalInformation_EarnReward_fr" />',
		additionalInformation_Title_TextField					: '<select class="fieldValuesSelectField titleField" id="additionalInformation_Title_TextField" />',
		additionalInformation_DateOfBirth_Month					: '<select class="fieldValuesSelectField dateOfBirthMonthField" id="additionalInformation_DateOfBirth_Month" placeholder="Month" />',
		additionalInformation_DateOfBirth_Day					: '<select class="fieldValuesSelectField dateOfBirthDayField" id="additionalInformation_DateOfBirth_Day" placeholder="Day" />',
		additionalInformation_DateOfBirth_Year					: 'Année',
		additionalInformation_Relationship_TextField			: '<select class="fieldValuesSelectField addressProvinceField" id="additionalInformation_Relationship_TextField"/>',
		additionalInformation_Province_TextField				: '<select class="fieldValuesSelectField addressProvinceField" id="additionalInformation_Province_TextField"/>',
		additionalInformation_footnoteContentText1				:	"<sup>1</sup> Primes octroyées sous forme d’« Argent » Canadian Tire avec la Carte<span class=\"superscriptsFootnote\"><sup>MD</sup></span>. Sous réserve des modalités et des restrictions visant l’octroi et l’échange des primes. Détails en magasin ou sur la page Programme de primes en « Argent » Canadian Tire. Les titulaires de la carte MasterCard Options en Nouvelle-Écosse participent à un autre programme de primes; veuillez vous rendre à l’adresse",
		additionalInformation_footnoteContentText1Link			:	"<a href='https://www.ctfs.com/Products/CreditCards/OptionsMasterCard/CTMoneyRewards/' target='_blank'>ctfs.com/act.</a>",
		additionalInformation_footnoteContentText2				:	"<sup>2</sup> À la condition que votre compte soit en règle et que l’achat soit admissible à l’échange de primes.",
		
		additionalInformation_footnoteContentText3				:	"Taxes applicables en sus. Payable mensuellement. Veuillez consulter le document Renseignements juridiques ou votre Certificat d’assurance pour prendre connaissance de toutes les modalités, conditions, limitations et les exclusions relatives à votre solde. Certaines conditions s’appliquent.",
		additionalInformation_footnoteContentText4				:	"Si vous êtes âgé de moins de 66 ans, vous adhérerez à Couverture-crédit. Si vous êtes âgé de 66 à 75 ans, vous adhérerez à Couverture-crédit – Âge d’or. Couverture-crédit et Couverture-crédit – Âge d’or est souscrite auprès de American Bankers, Compagnie d’Assurance Vie de la Floride, et de American Bankers, Compagnie d’Assurances Générales de la Floride, filiales de Assurant Solutions<span class=\"superscriptsFootnote\"><sup>MD</sup></span>.",
		additionalInformation_footnoteContentText5				:	"Plus les taxes applicables. Les frais d’adhésion débuteront une fois la première transaction effectuée avec votre carte de crédit de marque Canadian Tire. Par la suite, les frais d’adhésion seront facturés tous les mois à l'avance sur votre carte de crédit de marque Canadian Tire. Voir le document d'information juridique pour toutes les modalités, conditions, restrictions et exclusions. Certaines conditions s’appliquent.",
		additionalInformation_footnoteContentText6				:	"<sup>&#8224;&#8224;</sup> Ces produits facultatifs sont offerts à tous les nouveaux titulaires de carte MasterCard de Canadian Tire. Les renseignements que vous fournissez sur la présente demande de carte sont utilisés pour déterminer votre admissibilité à l’obtention d’une carte MasterCard de Canadian Tire et non pour votre adhésion aux produits facultatifs, lesquels sont offerts à tous les titulaires de carte Canadian Tire.MD/MC Couverture-crédit et Couverture-crédit – Âge d’or sont des marques de commerce déposées des Services Financiers Canadian Tire Limitée, et sont utilisées sous licence. Le programme Surveillance d’identité classique est commandité par les Services Financiers Canadian Tire Limitée et fourni par Aimia Proprietary Loyalty Canada Inc." +
																	"Rebound<span class=\"superscriptsFootnote\"><sup>MD</sup></span> est une marque de commerce déposée de Aimia Proprietary Loyalty Canada Inc",
		additionalInformation_footnoteContentText7				:	"<span class=\"superscriptsFootnote\"><sup>MD</sup></span>/<span class=\"superscriptsFootnote\"><sup>MC</sup></span> Sauf indication contraire, toutes les marques de commerce sont la propriété de La Société Canadian Tire Limitée et sont utilisées sous licence.<br>" +
				  												    "<span class=\"superscriptsFootnote\"><sup>MD</sup></span>/<span class=\"superscriptsFootnote\"><sup>MC</sup></span> MasterCard et la marque figurative de MasterCard sont des marques de commerce déposées et <i>PayPass</i> est une marque de commerce de MasterCard International Incorporated.",	
		//--------------- END --------------------- OPTIONAL PRODUCTS section -------------- END -----------
		
		//----------------------------------------- Confirmation section ------------------------------
		
		confirmation_EditModeError							:   "Veuillez sauvegarder vos modifications avant de continuer.",
		
		confirmation_Title									:   "Confirmation",
		confirmation_Edit_Button_Label                      :   "Modifier",
		confirmation_Terms_Conditions                       :   "Modalités et autorisation aux fins de la demande de carte",
		confirmation_Privacy_Charter                        :	"<a href='https://www.ctfs.com/lang/fr/SecurityCentre/PrivacyAndSecurity/PrivacyCharter/' target='_blank'>Consultez notre politique en matiere de protection des renseignements personnels.</a>",  
		confirmation_Privacy_Charter_Text                   :   "En cochant cette case, j'accepte les modalités décrites dans l'autorisation aux fins de la demande de carte.",
		confirmation_Application_Authorization_Title        :   "Autorisation aux fins de la demande de carte",
		confirmation_Application_Authorization_SubTitle     :   "En cochant la case ci-dessous, j'accepte ce qui suit :",
		confirmation_Application_Authorization_Item1        :   "Veuillez ouvrir un compte à mon nom pour le type de carte de crédit MasterCard<span class=\"superscriptsFootnote\"><sup>MD</sup></span> Options<span class=\"superscriptsFootnote\"><sup>MD</sup></span> de Canadian Tire indiqué ci-dessus (la « carte ») à un taux d’intérêt annuel de 19,99 % pour toutes les transactions (à l’exception des avances de fonds et des frais afférents) et de 21,99 % pour les avances de fonds et les frais afférents.",
		confirmation_Application_Authorization_Item2        :   "Si ma demande de carte à un taux d’intérêt annuel de 19,99 % n’est pas approuvée, j’accepte que vous traitiez la présente demande comme une demande distincte pour la même carte à un taux d’intérêt annuel de 25,99 % pour toutes les transactions, y compris les avances de fonds et les frais afférents, sans que je ne reçoive d’avis spécifique à cet effet.",
		confirmation_Application_Authorization_Item3        :   "La carte est émise par la Banque Canadian Tire (la « BCT »), et le compte est administré par les Services Financiers Canadian Tire Limitée (les « SFCTL »).",
		confirmation_Application_Authorization_Item4_1      :   "La BCT et les SFCTL peuvent procéder à la collecte, à l’utilisation et au partage de renseignements personnels me concernant aux fins décrites dans la politique en matière de protection des renseignements personnels de Canadian Tire, notamment à des fins de commercialisation et de vente par courriel, téléphone, dispositif de composition et d’annonce automatique ou toute autre forme de télécommunication.",
		confirmation_Application_Authorization_Item4_2      :	" ",//we need this empty string because french and english templates have different structure
		confirmation_Application_Authorization_Item4_3      :   " ",//we need this empty string because french and english templates have different structure
		confirmation_Application_Authorization_Item5        :   "Je serai lié par les modalités du contrat du titulaire de carte de la BCT que je recevrai avec la carte, lequel peut être modifié de temps à autre. Je serai la seule personne responsable de tous les débits imputés à ce compte, y compris ceux portés au compte par toute personne pour laquelle je vous ai demandé d’émettre une carte additionnelle. Je serai la seule personne qui recevra un relevé de compte.",
		confirmation_Application_Authorization_Item6        :   "Vous pouvez obtenir des renseignements sur mes antécédents de crédit et d’autres renseignements personnels me concernant auprès d’agences d’évaluation du crédit et communiquer de tels renseignements à ces agences.",
		confirmation_Application_Authorization_Item7        :   "Chaque personne pour laquelle je vous ai demandé d’émettre une carte additionnelle m’a autorisé à vous fournir les renseignements ci-dessus la concernant.",
		confirmation_Application_Authorization_Item8        :   "Si je vous fournis mon numéro d’assurance sociale, vous pouvez l’utiliser à des fins d’identification, notamment auprès d’agences d’évaluation du crédit.",
		confirmation_Application_Authorization_Item9		:	"J’accepte que, si vous approuvez ma demande, vous me transmettiez un document d’information initial et un contrat du titulaire de carte par voie électronique à l’adresse électronique fournie dans cette demande.",
		confirmation_Application_Authorization_Item10       :   "J’ai lu et j’ai compris le texte figurant sur la présente demande de carte.",
		confirmation_UnitNumber                             :   "No d'app.",
		confirmation_Suite		                            :   "Numero d'app. / bureau ",
		confirmation_prevAddressTitle                       :   "Adresse précédente",
		confirmation_Information_Accurate_Text              :   "Veuillez vous assurer que les renseignements transmis sont exacts pour nous aider à traiter votre demande aujourd'hui!",
		confirmation_Update_CT_Profile_Text					:   "Mettre à jour l’adresse du profil mon CT fournie lors de la demande.",
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
//		additionalInformation_footnoteContentText6				:	"<sup>&#8224;&#8224;</sup> Ces produits facultatifs sont offerts à tous les nouveaux titulaires de carte MasterCard de Canadian Tire. Les renseignements que vous fournissez sur la présente demande de carte sont utilisés pour déterminer votre admissibilité à l’obtention d’une carte MasterCard de Canadian Tire et non pour votre adhésion aux produits facultatifs, lesquels sont offerts à tous les titulaires de carte Canadian Tire.MD/MC Couverture-crédit et Couverture-crédit – Âge d’or sont des marques de commerce déposées des Services Financiers Canadian Tire Limitée, et sont utilisées sous licence. Le programme Surveillance d’identité classique est commandité par les Services Financiers Canadian Tire Limitée et fourni par Aimia Proprietary Loyalty Canada Inc." +
//																	"Rebound<span class=\"superscriptsFootnote\"><sup>MD</sup></span> est une marque de commerce déposée de Aimia Proprietary Loyalty Canada Inc",
//		additionalInformation_footnoteContentText7				:	"<span class=\"superscriptsFootnote\"><sup>MD</sup></span>/<span class=\"superscriptsFootnote\"><sup>MC</sup></span> Sauf indication contraire, toutes les marques de commerce sont la propriété de La Société Canadian Tire Limitée et sont utilisées sous licence.<br>" +
//				  												    "<span class=\"superscriptsFootnote\"><sup>MD</sup></span>/<span class=\"superscriptsFootnote\"><sup>MC</sup></span> MasterCard et la marque figurative de MasterCard sont des marques de commerce déposées et <i>PayPass</i> est une marque de commerce de MasterCard International Incorporated.",	

		
		//--------------- END --------------------- Confirmation section -------------- END -----------
		
		//----------------------------------------- Identity Verification section ------------------------------
		
		identityVerification_NoSelectionError				:   "Vous devez répondre à chaque question de vérification d’identité posée avant de continuer",
		
		identityVerification_Title							:   "Vérification d'identité",
		identityVerification_Congratulations				:   "BONNE NOUVELLE!",
		
		identityVerification_CardNumberText					:   "Numéro de la carte : ",
		identityVerification_CardLimitText					:   "Limite de la carte : ",
		identityVerification_CardAPRText					:   "Taux d’intérêt annuel : ",
		
		confirmation_Button_Label                           :   "Envoyer la demande et vérifier l'identité",	
		identityVerification_FinalText1						:	"Votre demande de carte MasterCard<span class=\"superscripts\"><sup>MD</sup></span> Options<span class=\"superscripts\"><sup>MD</sup></span> de Canadian Tire a été approuvée, et celle-ci sera ajoutée à votre compte Canadian Tire afin que vous puissiez commencer à l'utiliser en ligne dès aujourd'hui à l'adresse canadiantire.ca!",
		identityVerification_FinalText2						:	"Vous recevrez également votre carte MasterCard Options, que vous pourrez utiliser partout, par la poste dans les sept à dix jours ouvrables.",
		identityVerification_FinalText3						:	"Votre document d’information initial et votre contrat du titulaire de carte vous seront envoyés par courriel à l’adresse : ",
		identityVerification_FinalText4						:	"En cas d’erreur, veuillez composer le 1 800 459-6415. Vous recevrez aussi une copie de ces renseignements dans la trousse de bienvenue contenant votre carte.",
		identityVerification_FinalText5						:	"*Notez les quatre derniers chiffres pour pouvoir vous y référer lors de l’utilisation de Mon compte CT et lors du processus de paiement.",
		
		identityVerification_PendingTitle					:   "MERCI. NOUS AVONS BIEN REÇU VOTRE DEMANDE DE CARTE.",
		identityVerification_PendingText1					:	"Notre équipe passe actuellement votre demande en revue. Nous n’avons pas été en mesure de traiter votre demande instantanément.",
		identityVerification_PendingText2					:	"Le processus d’évaluation dure généralement quelques jours, mais prend parfois jusqu’à deux semaines, selon les renseignements fournis.",
		identityVerification_PendingText3					:	"Quand vais-je recevoir ma carte?",
		identityVerification_PendingText4					:	"Si votre demande est approuvée, vous en serez avisé par courrier dans les sept à dix jours ouvrables suivants.",
		identityVerification_TUPendingText1					:	"Malheureusement, nos services de crédit immédiat ne sont pas disponibles pour l’instant; toutefois, votre demande sera traitée dès que possible.",
		identityVerification_TUPendingText2					:	"REMARQUE : N’essayez <u>PAS</u> de soumettre votre demande de nouveau.",
		
		identityVerification_ContinueShopping				:	"Continuer à magasiner",
		identityVerification_ProceedToCheckout				:	"Passer à la caisse",
		identityVerification_Submit							:	"Envoyer",
		
		identityVerification_FooterText1					:	"Pour votre protection et votre sécurité, les Services Financiers Canadian Tire Limitée ont adopté le présent processus afin de remplir votre demande de carte de crédit Canadian Tire. Dans le cadre de ce processus, le système accédera à votre dossier de consommateur pour aider les Services Financiers Canadian Tire Limitée à vérifier votre identité. Ce processus ne constitue pas une vérification de crédit; il vise à vérifier l’identité de la personne qui demande une carte de crédit Canadian Tire. Veuillez répondre aux questions au meilleur de votre connaissance. Les renseignements que vous fournissez ne sont pas conservés dans les dossiers des Services Financiers Canadian Tire Limitée et de la Banque Canadian Tire.",
		identityVerification_FooterText2					:	"<span class=\"superscriptsFootnote\"><sup>MD</sup></span>/<span class=\"superscriptsFootnote\"><sup>MC</sup></span> Sauf indication contraire, toutes les marques de commerce sont la propriété de La Société Canadian Tire Limitée et sont utilisées sous licence.",
		identityVerification_FooterText3					:	"<span class=\"superscriptsFootnote\"><sup>MD</sup></span>/<span class=\"superscriptsFootnote\"><sup>MC</sup></span> MasterCard et la marque figurative de MasterCard sont des marques de commerce déposées et PayPass est une marque de commerce de MasterCard International Incorporated.",
		
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
		identityVerification_ProtectionNote 				:	"Pour votre protection et votre sécurité, nous vous poserons trois ou quatre questions auxquelles vous seul connaissez les réponses. ",
		
		identityVerification_EcommProfile_Update_Request_Failed	:	"Malheureusement, nous ne pouvons pas accéder à votre compte Mon CT en ce moment. Pour ajouter manuellement votre nouvelle carte à votre compte Mon CT, veuillez appeler le 1 800 387-8803.",
		
		identityVerification_ApplicationDataValidatonFailed	:	"Malheureusement, la demande ne pouvait pas être soumise en raison d'un problème interne. S'il vous plaît essayer à nouveau."
			
		//--------------- END --------------------- Identity Verification section -------------- END -----------	
	};	