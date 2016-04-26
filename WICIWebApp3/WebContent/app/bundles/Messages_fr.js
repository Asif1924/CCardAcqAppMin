ensureNamespaceExists();

WICI.dictionary_fr =  {
	version											:							"2",
	yes 											: 							"Oui",
	no                                 				  :                         "Non",
	cancel  										  : 						"Annuler",
	app_loading                                       :                         "Chargement... ",
	backButtonPrompt_message                          :                         "Les renseignements recueillis dans cette demande seront supprimés de façon permanente et ne pourront être conservés. Êtes-vous certain(e) de vouloir continuer?",
	backButtonPrompt_title                            :                         "Quitter la demande",


	connectionError_unableToConnect                   :                         "Impossible de se connecter au serveur du système principal. Veuillez réessayer dans quelques minutes.",
	connectionError_networkDown                       :                         "Connexion au réseau WIFI perdue. Veuillez essayer l’option « Rétablir la connexion WIFI » du menu des paramètres en ouvrant une session en mode démo.",

	confirmDialog_defaultTitle                        :                         "Confirmer",
	confirmDialog_yes                                 :                         "Oui",
	confirmDialog_no                                  :                         "Non",

	settings 			                              :                         "Paramètres",
	settings_logOutButton                             :                         "Déconnexion ",
	settings_chooseProductButton                      :                         "Annuler demande de carte",
	settings_chooseProductButton                      :                         "Annuler demande de carte",
	settings_printerSetupButton                       :                         "Configuration de l'imprimante",
	settings_testPrintButton						  :							"Impression d'essai",
	settings_retrieveButton 						  : 						"Retrouver demande",
	settings_reEstablishWifiButton  				  :                         "Re-établir la connexion WIFI",
	settings_reEstablishWifiSuccess  				  :                         "Profil WIFI Re-créé",
	settings_reEstablishWifiFailure  				  :                         "Échec recréer le profil WIFI",

	infoDialog_defaultTitle                           :                         "Information",
	infoDialog_noPrinterSetupped                      :                         "Une imprimante doit être configurée. Veuillez aviser votre administrateur.",

	errorDialog_defaultTitle                          :                         "Erreur",
	errorDialog_noticeTitle                           :                         "Attention",

	incorrect_Apk_Version_Dialog					  : 						"Votre application nécessite une mise à jour. L'application va se fermer automatiquement. S'il vous plaît attendez 15 minutes en proximité acceptable du réseau WIFI avant de redémarer l'application. Si le problème persiste, appelez votre administrateur.",
	unauthorized_Device								  : 						"Cet appareil n'est pas autorisée. L'application se fermera automatiquement.",


	addressLookup_failedMessage                       :                         "Échec de la recherche d'adresse. Veuillez essayer de nouveau.",
	addressLookup_noResults                           :                         "Aucun résultat. Veuillez essayer de nouveau.",
	addressLookup_multipleItemsExist                  :                         "Il existe plusieurs noms de rues. Sélectionnez ci-dessous",

	messageDialog_ok                                  :                         "OK",

	pageHeader_next                                   :                         "Suivant",
	pageHeader_previous                               :                         "Retour",

	breadCrumbItem_ProductSelection	   				  :							"Choix de produit",
	breadCrumbItem_ApplicantInfo					  :							"Données d'appl",
	breadCrumbItem_FinancialAndEmploymentInfo		  :   						"Emploi et situation financière",
	breadCrumbItem_SupplementaryCard				  :  						"Carte additionnelle",
	breadCrumbItem_OptionalProducts					  :  						"Produits facultatifs",
	breadCrumbItem_Confirmation						  :	             			"Confirmation",

	loginScreen_UserID_Label                          :                         "Code d'utilisateur",
	loginScreen_EmployerID_Label                      :                         "Code d'employeur",
	loginScreen_AgentID_Label                         :                         "Numéro du représentant",
	loginScreen_Location_Number                       :                         "Numéro de magasin ou d'emplacement",
    loginScreen_First_Name		 					  : 	                    "Prénom de l'employé",
    loginScreen_Last_Name		 					  : 	                    "Nom de famille de l'employé",
	loginScreen_Button_Label                          :                         "CONNEXION",

	loginScreen_Dialog_ErrorTitle                     :                         "Erreur de connexion",
	loginScreen_FailureMessage                        :                         "La connexion a échoué. Veuillez essayer de nouveau. ",
	dictionary_loading_error 						  : 						"Le contenu de la demande ne peut pas être affiché. Veuillez attendre 15 minutes à portée acceptable du réseau WIFI avant de lancer la demande, puis réessayez. Si le problème persiste, veuillez appeler votre administrateur.",

	loginScreen_UserLookupDialog_NormalTitle          :                         "Renseignements sur l'adresse",
	loginScreen_UserLookupDialog_ErrorTitle           :                         "Erreur d'adresse",
	loginScreen_UserLookup_ConfirmMessage             :                         "Est-ce la bonne adresse?",
	loginScreen_UserLookup_FailedMessage              :                         "Adresse non trouvée, veuillez réessayer ",
	loginScreen_DemoModeAlert 						  :   						"Vous entrez dans\n LE MODE DÉMO\n Êtes-vous certain?",

	loginScreen_EmployerIDLookup_FailedMessage        :                         "Code d'employeur invalide. Veuillez corriger et essayer de nouveau",

	// US3766
	chooseProduct_ChooseOneOfTheCreditCards           :                         "CHOISISSEZ L'UNE DES CARTES DE CRÉDITS SUIVANTES",
    chooseProduct_CanadianTireOptionsMC 			  :                     	"MasterCard<sup style='font-size: .5em;'>MD</sup> Options<sup style='font-size: .5em;'>MD</sup> de Canadian Tire",
	chooseProduct_OptionsMasterCard                   :                         "MasterCard<sup>MD</sup> Options<sup>MD</sup> de Canadian Tire",
	chooseProduct_GasAdvantageMasterCard              :                         "Carte MasterCard<sup>MD</sup> Avantage Essence<sup>MD</sup>",
	chooseProduct_CashAdvantageMasterCard             :                         "Carte MasterCard<sup>MD</sup> Avantage Remise<sup>MD</sup>",
	chooseProduct_NoSpecificCard					  :							"carte",
	

	// US3920
	program_PromoCode								  : "{\"FMR\":[{\"Intercept\":[{\"Intercept\":\"Blank\"},{\"Ouverture officielle\":\"4023\"},{\"Autre\":\"\"}],\"Événements en magasin\":[{\"Journées carte MCO\":\"OMCDY\"},{\"Autre\":\"\"}],\"Événements DPCT\":[{\"Programme d’événement de l’Est\":\"5200\"},{\"Programme d’événement de l’Ouest\":\"4024\"}],\"Régional DCTP\":[{\"Programme régional de l’Est\":\"4022\"},{\"Programme régional de l’Ouest\":\"4029\"}]}]}",

	// US3767
	chooseProduct_PromoCode_Other					  :							"Code promotionnel (Autre)",

	chooseProduct_PromoCode                           :                         "Code promotionnel",
	chooseProduct_Program							  :							"Programme ",
	chooseProduct_Province                            :                         "Province",
	chooseProduct_ApplyNow_Button_Label               :                         "COMMENCER",

	chooseProduct_ReadTandC                           :                         "Lire les modalités",
	
	// US3981
	chooseProductScreen_Handoutprompts_Title			:	"Document juridique",
	chooseProductScreen_Handoutprompts_YesNo_Message	:	"Avez-vous fourni au demandeur le document de renseignements juridiques?",
	chooseProductScreen_Handoutprompts_Ok_Message		:	"Avant de continuer, tous les demandeurs doivent recevoir un document de renseignements juridiques.",

    overview_CostOfCreditDisclosure_MainTitle         :   "S'il vous plaît, lisez les informations ci-dessous et cliquez sur 'Commencer' pour continuer.",
	overview_CostOfCreditDisclosure_Title			:   "Déclaration sur le coût du crédit relativement aux demandes de carte de crédit",
	overview_CostOfCreditDisclosure_Left1    	:   "Taux d'intérêt annuel",
	// Old line
	// overview_CostOfCreditDisclosure_Right1   	:   "<p>Les taux d'intérêt ci-dessous seront en vigueur à compter de la date d'ouverture de votre compte : <br><br>Tous les débits portés à votre compte (à l'exception des avances de fonds et des frais afférents) : <strong>19,99%</strong></p> <p>Avances de fonds et frais afférents : <strong>21,99%</strong></p> <p>Si votre demande de carte à ce taux n'est pas approuvée, il se peut que la Banque Canadian Tire accepte d'émettre une carte à votre nom portant un taux d'intérêt annuel de <strong>25,99%</strong> pour toutes les transactions (à l'exception des avances de fonds et des frais afférents) et de <strong>27,99%</strong>pour les avances de fonds et les frais afférents.</p>",
	overview_CostOfCreditDisclosure_Right1   	:   "<p>Les taux d'intérêt ci-dessous seront en vigueur à compter de la date d'ouverture de votre compte : <br><br>Tous les débits portés à votre compte (à l’exception des transactions au comptant et des frais afférents) : <strong>19,99%</strong></p> <p>Transactions au comptant (avances de fonds, transferts de solde, chèques de commodité, transferts de fonds, achats de chèques de voyage et transactions liées aux jeux de hasard) et frais afférents : <strong>22,99%</strong></p> <p>Si votre demande de carte à ce taux n'est pas approuvée, il se peut que la Banque Canadian Tire accepte d'émettre une carte à votre nom portant un taux d'intérêt annuel de <strong>25,99%</strong> pour toutes les transactions (à l’exception des transactions au comptant et des frais afférents) et de <strong>27,99%</strong>pour les transactions au comptant et les frais afférents.</p>",
	overview_CostOfCreditDisclosure_Left2    	:   "Délai de grâce sans intérêt",
	overview_CostOfCreditDisclosure_Right2   	:   "<p>Au moins <strong>26</strong> jours ou, si vous résidez ailleurs qu'au Québec, au moins <strong>21</strong> jours.</p><p> Vous bénéficiez d'un délai de grâce d'au moins <strong>26</strong> jours sur les nouveaux achats (d'au moins <strong>21</strong> jours si vous résidez ailleurs qu'au Québec) si nous recevons le paiement intégral du solde dû figurant sur votre relevé courant au plus tard à la date d'échéance de ce paiement.</p><p> Il n'y a aucun délai de grâce sur les transactions au comptant, comme les chèques de commodité, les transferts de solde et les avances de fonds, ni sur les frais liés à ces transactions.</p>",
	overview_CostOfCreditDisclosure_Left3    	:   "Paiement minimum",
	overview_CostOfCreditDisclosure_Right3   	:   "<p>La somme : </p><p>(A) des intérêts et des frais figurant sur votre relevé; plus </p><p>(B) tout montant en souffrance ou, s'il est plus élevé, tout montant qui excède votre limite de crédit; plus </p><p>(C) le montant de tous les versements échelonnés en vertu de programmes de paiements égaux alors dus; plus </p><p>(D) <strong>10 $</strong> </p><p> Un solde inférieur à <strong>10 $</strong> doit être réglé intégralement.</p> ",
	overview_CostOfCreditDisclosure_Left4    	:   "Frais pour conversion de devises",
	overview_CostOfCreditDisclosure_Right4   	:   "Toutes les transactions effectuées dans une monnaie étrangère seront converties en dollars canadiens au taux de conversion MasterCard courant majoré de <strong>2,5%</strong> (dans le cas de débits portés à votre compte) ou réduit de <strong>2,5%</strong> (dans le cas de crédits inscrits à votre compte) à la date à laquelle la transaction est inscrite à votre compte.",
	overview_CostOfCreditDisclosure_Left5    	:   "Frais annuels",
	overview_CostOfCreditDisclosure_Right5   	:   "Aucuns",
	overview_CostOfCreditDisclosure_Left6    	:   "Frais divers",
	// Old line
	// 	overview_CostOfCreditDisclosure_Right6   	:   "<p><strong>Avances de fonds : 4&nbsp;$ – </strong> Facturés à la date à laquelle la transaction est inscrite à votre compte.</p> <p><strong> Frais de dépassement de limite de crédit : 29&nbsp;$ –</strong> Sauf si vous habitez au Québec, nous vous facturerons des frais de dépassement de limite de crédit de <strong>29 $</strong> si à la date d'un relevé votre solde excède votre limite de crédit et qu'il atteint ou excède <strong>2000 $.</strong>Cependant, pour déterminer si vous devez payer des frais de dépassement de limite de crédit, nous n'inclurons pas dans ce solde tout montant imputé sur cette facture pour des frais d'intérêts, ou pour une assurance crédit offerte par nous ou une de nos filiales. </p> <p><strong> Frais pour chèque sans provision ou refusé : 25&nbsp;$ – </strong> Imputés si un paiement que vous effectuez est refusé.</p><p><strong> Copie de remplacement : 2&nbsp;$ –</strong> Imputés lorsque vous demandez une copie d'un relevé ou d'une facture de vente.<p></p><strong>Administration du solde créditeur :</strong> Le moindre de <strong>10 $</strong>ou du solde du compte. – Imputés le dernier jour d'une période de facturation lorsque le compte comporte un solde créditeur et qu'il a été inactif au cours des <strong>12</strong> périodes de facturation.</p>",
	overview_CostOfCreditDisclosure_Right6   	:   "<p><strong>Avances de fonds : 4&nbsp;$ – </strong> Facturés à la date à laquelle la transaction est inscrite à votre compte.</p> <p><strong> Frais pour chèque sans provision ou refusé : 25&nbsp;$ – </strong> Imputés si un paiement que vous effectuez est refusé.</p><p><strong> Copie de remplacement : 2&nbsp;$ –</strong> Imputés lorsque vous demandez une copie d'un relevé ou d'une facture de vente.<p></p><strong>Administration du solde créditeur :</strong> Le moindre de <strong>10 $</strong>ou du solde du compte. – Imputés le dernier jour d'une période de facturation lorsque le compte comporte un solde créditeur et qu'il a été inactif au cours des <strong>12</strong> périodes de facturation.</p>",
	// US3381
	overview_EffectiveDate						:	"<b>Renseignements en vigueur le 23 juillet 2015.</b>",

	personalData_TellUsAboutYourself                  :                         "Renseignements personnels",
	personalData_IDType                               :                         "Type de pièce d'identité",
	personalData_ScanID  	     					  : 						"Balayer pièce ID",
	personalData_PlaceOfIssue                         :                         "Province émettrice de l'identification",
	personalData_IDNumber                             :                         "N° de la pièce d'identité",

	personalData_DOB_18YearsError                     :                         "Vous devez être âgé de 18 ans ou plus pour faire une demande.",
	personalData_DOB_19YearsError                     :                         "Vous devez être âgé de 19 ans ou plus pour faire une demande",

	personalData_Title                                :                         "Titre de civilité",
	personalData_MR                                   :                         " M.",
	personalData_MRS                                  :                         " MME",
	personalData_MISS                                 :                         " MLLE",
	personalData_MS                                   :                         " MLLE",

	personalData_FirstName                            :                         "Prénom",
	personalData_Initial                              :                         "Initiale",
	personalData_LastName                             :                         "Nom de famille",
	personalData_DateOfBirth                          :                         "Date de naissance",
	personalData_EmailAddress                         :                         "Adresse électronique",
	personalData_HomePhone                            :                         "Téléphone (rés.)",
	personalData_CellPhone                            :                         "Téléphone (cell.)<sup>*</sup>",

	personalData_Correspondence                       :                         "Langue de correspondance:",
	personalData_English                              :                         "Anglais",
	personalData_French                               :                         "Français",

	personalData_AddressInformation                   :                         "ADRESSE",
	personalData_Address_PostalCode                   :                         "Code postal",
	personalData_Address_StreetNumber                 :                         "Numéro d'Adresse",
	personalData_Address_Button_Label                 :                         "RECHERCHE D'ADRESSE",
	personalData_Scan_Id_Label                        :                         "Scanner Permis de Conduire",
	scanID_parsingErrorText							  : 						"Pièce ID non valable. Veuillez entrer les données manuellement.",

	personalData_Address_AddressLine1                :                         "Rue",
	personalData_Address_AddressLine2                :                         "Ligne d'Adresse 2",
	personalData_Address_SuiteUnit                   :                         "App. / Bureau / Unité",
	personalData_Address_City                        :                         "Ville",
	personalData_Address_Province                    :                         "Province",

	personalData_Address_ResidenceType               :                         "Êtes-vous :",
	personalData_Address_Own                         :                         "Propriétaire",
	personalData_Address_Rent                        :                         "Locataire",
	personalData_Address_Parents                     :                         "Maison des parents",
	personalData_Address_Other                       :                         "Autre",

	personalData_Address_MonthlyPayment              :                         "Loyer / hypothèque (montant mensuel)",
	personalData_Address_Duration                    :                         "Depuis combien de temps habitez-vous à votre adresse actuelle? ",
	personalData_Address_DurationYears               :                         "Années",
	personalData_Address_DurationMonths              :                         "Mois",
	
	// US3623
	personalData_PreviousAddressWasInCanada			 :						   "Votre adresse précédente se trouvait-elle au Canada?",

	personalData_PreviousAddress_Title               :                         "Adresse précédente requise seulement",
	personalData_PreviousAddress_Description         :                         " si moins de deux ans à l'adresse actuelle",

	personalData_PreviousAddress_PostalCode          :                         "Code postal",
	personalData_PreviousAddress_StreetNumber        :                         "Numéro d'adresse ",

	personalData_PreviousAddress_Button_Label        :                         "RECHERCHE D'ADRESSE",

	personalData_PreviousAddress_AddressLine1        :                         "Rue",
	personalData_PreviousAddress_AddressLine2        :                         "Ligne d'Adresse 2",
	personalData_PreviousAddress_SuiteUnit           :                         "App. / Bureau / Unité",
	personalData_PreviousAddress_City                :                         "Ville",
	personalData_PreviousAddress_Province            :                         "Province",

	// US3623
	personalData_PreviousAddress_NotInCanada		  :							"Adresse précédente est pas au Canada:",
	
	personalData_Note								  :							"<sup>*</sup> Remarque : il se peut que nous vous envoyions des avis sur votre compte par message texte. Ces messages n’entraîneront aucuns frais.",
	
	finEmpInfo_PageTitle                              :                         "EMPLOI ET SITUATION FINANCIÈRE",
	finEmpInfo_BankingProducts                        :                         "Sélectionnez les produits bancaires que vous utilisez actuellement.",
	finEmpInfo_VISAMCAMEX                             :                         "Visa/MC/Amex",
	finEmpInfo_StoreCard                              :                         "Carte de grand magasin ",
	finEmpInfo_GasCard                                :                         "Carte de poste d'essence ",
	finEmpInfo_BankLoan                               :                         "Prêt bancaire",
	finEmpInfo_ChequingAcct                           :                         "Compte chèque",
	finEmpInfo_SavingsAcct                            :                         "Compte d'épargne",

	finEmpInfo_EmpType								  :						    "Situation d'emploi",
	finEmpInfo_JobTitle                               :                         "Titre du poste",
	finEmpInfo_JobCategory                            :                         "Catégorie d'emploi",
	finEmpInfo_EmployerName                           :                         "Nom de l'employeur",
	finEmpInfo_EmployerCity                           :                         "Ville de l'employeur",
	finEmpInfo_EmployerPhone                          :                         "Numéro de téléphone de l'employeur",
	finEmpInfo_HowLongCurrentEmployer                 :                         "Durée de l'emploi actuel?",
	// US3960
	// finEmpInfo_GrossIncome                         :                         "Revenu annuel brut (par an)", // Old
	finEmpInfo_GrossIncome                            :                         "Revenu Annuel Personnel Brut",	
	finEmpInfo_GrossHouseholdIncome                   :                         "Revenu Annuel Brut Du Ménage",
	
	finEmpInfo_SIN                                    :                         "Numéro d'assurance sociale (facultatif)",
	finEmpInfo_Years                                  :                         "Années : ",
	finEmpInfo_Months                                 :                         "Mois : ",

	finEmpInfo_FullTime                				  :                         "Temps plein",
	finEmpInfo_PartTime               				  :                         "Temps partiel",
	finEmpInfo_Seasonal                 			  :                         "Saisonnier",
	finEmpInfo_Retired                				  :                         "Retraite",
	finEmpInfo_Homemaker 				 			  : 						"Personne au foyer",
	finEmpInfo_Unemployed 			 				  : 						"Sans emploi",
	finEmpInfo_Other 						     	  : 						"Autre",
	finEmpInfo_Default_Unemployed 					  : 						"Chomage",
	
	// US3621
	finEmpInfo_JobTitleOther						  :							"Titre du poste (Autre)",


	supCardRequest_PageTitle                          :                         "DEMANDE DE CARTE ADDITIONNELLE",

	supCardRequest_WouldYouLikeACard                  :                         "Aimeriez-vous une carte additionnelle?",

	supCardRequest_ForWhom                            :                         "Demande de carte additionnelle pour :",
	supCardRequest_Spouse                             :                         "Conjoint(e)",
	supCardRequest_Son                                :                         "Fils",
	supCardRequest_Daughter                           :                         "Fille",
	supCardRequest_Relative                           :                         "Parent",
	supCardRequest_Other                              :                         "Autre",

	supCardRequest_FirstName                          :                         "Prénom",
	supCardRequest_Initial                            :                         "Initiale",
	supCardRequest_LastName                           :                         "Nom de famille",
	supCardRequest_DateOfBirth                        :                         "Date de naissance",
	supCardRequest_Telephone                          :                         "Téléphone",

	supCardRequest_SameAddyPrimaryApplicant           :                         "Même adresse que le demandeur principal?",

	sigScreen_Title                                   :                         "SIGNATURE",

	sigScreen_Date                                    :                         "Date : ",
	sigScreen_ProceedToConfirmation					  : 						"PASSER À LA PAGE SUIVANTE",

	ProvincesList_null                                :"Veuillez sélectionner...",
	IdTypesList_null                                  :"Veuillez sélectionner...",
	IdTypesList_DR                                    :" PERMIS DE CONDUIRE",
	IdTypesList_HE                                    :" CARTE D'ASSURANCE MALADIE",
	IdTypesList_PR                                    :" CARTE DE RÉSIDENT PERMANENT",
	IdTypesList_BI                                    :" CERTIFICAT DE NAISSANCE",
	IdTypesList_CI                                    :"CARTE DE CITOYENNETÉ CANADIENNE",
	IdTypesList_PA                                    :"PASSEPORT",
	IdTypesList_BC                                    :"INSURANCE CORPORATION OF BRITISH COLUMBIA",
	IdTypesList_IN                                    :"CERTIFICAT DU STATUT D'INDIEN",
	IdTypesList_AB                                    :"ALBERTA REGISTRIES",
	IdTypesList_RE                                    :"FICHE RELATIVE AU DROIT D'ÉTABLISSEMENT",
	IdTypesList_NS                                    :"SERVICES NOUVELLE-ÉCOSSE ET RELATIONS AVEC LES MUNICIPALITÉS ",
	IdTypesList_NB                                    :"SERVICES NOUVEAU-BRUNSWICK",
	IdTypesList_NL                                    :"DEPT. OF GOVERNMENT SERVICES AND LANDS OF NEWFOUNDLAND AND LABRADOR",
	IdTypesList_SK                                    :"SASKATCHEWAN GOVERNMENT INSURANCE",
	IdTypesList_MB                                    :"SOCIÉTÉ D'ASSURANCE PUBLIQUE DU MANITOBA",
	IdTypesList_PE                                    :" MINISTÈRE DES TRANSPORTS ET DES TRAVAUX PUBLICS DE L'ÎLE‑DU‑PRINCE‑ÉDOUARD",
	IdTypesList_NT                                    :" MINISTÈRE DES TRANSPORTS DES TERRITOIRES DU NORD-OUEST",
	IdTypesList_NU                                    :" MINISTÈRE DU GOUVERNEMENT COMMUNAUTAIRE ET DES TRANSPORTS DU TERRITOIRE DU NUNAVUT",
	IdTypesList_YT                                    :"MINISTÈRE DES SERVICES AUX COLLECTIVITÉS DU YUKON",
	IdTypesList_ON                                    :"MINISTÈRE DES TRANSPORTS DE L'ONTARIO",

	personalData1_validation_placeofissue             :"Le lieu de délivrance n'est pas sélectionné.",
	personalData1_validation_idtype                   :"Le type de pièce d'identité n'est pas sélectionné.",
	personalData1_validation_idnumbers                :"Numéro de pièce d'identité invalide",
	personalData1_validation_firstName                :"Entrez un prénom valide.",
	personalData1_validation_lastName                 :"Entrez un nom de famille valide.",
	personalData1_validation_initial                  :"Entrez une initiale valide.",
	personalData1_validation_birthDate                :"Entrez une date de naissance valide.",
	personalData1_validation_email                    :"Entrez une adresse électronique valide.",
	personalData1_validation_homePhone                :"Entrez un numéro de téléphone (rés.) valide.",
	personalData1_validation_cellPhone                :"Entrez un numéro de téléphone (cell.) valide.",
	personalData1_validation_correspondence           :"Entrez une langue de correspondance valide.",
	// US3623
    personalData1_validation_preAddrNotInCanada			: 	'Sélectionnez valide Adresse précédente pas au Canada Oui / Non',

    //US3625
	personalData_Scan_Loyalty_Label                     :   "Balayer la carte Mon « Argent » Canadian Tire",
	scanLoyaltyDialog_holdText							:   "Tenez la carte Mon « Argent » Canadian Tire à balayer derrière la tablette, comme l’illustre la photo ci-dessus, de sorte que le code à barres soit dans le champ de vision de la caméra. Le balayage s’effectuera automatiquement. Lorsque vous entendez un signal sonore, votre carte a été balayée. L’application fermera et vous serez réacheminé à la page actuelle.",
	scanLoyaltyDialog_pressText							:   "Appuyez sur « Continuer » pour lancer la fonction « Balayer la carte Mon « Argent » Canadian Tire ».",
	scanLoyalty_parsingErrorText						: 	"Carte non valable. Veuillez entrer les données manuellement.",
    scanLoyaltyDialog_yes                               :   "Continuer",
    
	//Alex: Financial model validation messages ......................

	financialData_validation_jobTitle                 :"Entrez un titre de poste valide.",
	financialData_validation_jobCategory              :"La catégorie d'emploi n'est pas sélectionnée.",
	financialData_validation_employerName             :" Entrez un nom d'employeur valide.",
	financialData_validation_employerCity             :"Entrez une ville de l'employeur valide.",
	financialData_validation_grossIncome              :"Entrez un revenu annuel personnel brut valide. ",
	// US3960
	financialData_validation_grossHouseholdIncome     :"Entrez un annuel revenu brut du ménage valide. ",
	
	financialData_validation_sin                      :"Entrez un numéro d'assurance sociale valide.",

	financialData_grossIncomeError1                   :"Le revenu annuel personnel brut entré est ",
	financialData_grossIncomeError2                   :" $. Est-ce exact?",
	// US3960
	financialData_grossHouseholdIncomeError1          :"Le revenu annuel brut du ménage entré est ",
	financialData_grossHouseholdIncomeError2          :" $. Est-ce exact?",
	
	//................................................................

	//........................NEW ITEMS ..............................

	optionalProducts_Proceed                          :                         "PASSER À LA CONFIRMATION",
	optionalProducts_PageTitle                        :                         "PRODUITS FACULTATIFS<sup>&#8224;&#8224;</sup>",

	// Old line
	// optionalProducts_SignatureAgreement1				:	"<i>Je comprends que ce ou ces produits facultatifs sont offerts séparément de la carte MasterCard de Canadian Tire et qu'il n'est pas nécessaire d'obtenir la carte MasterCard de Canadian Tire. Je comprends que le ou les produits facultatifs que je choisis ne seront fournis que si je signe et accepte les frais indiqués. Si j'ai fait la demande d'une carte MasterCard de Canadian Tire et que celle-ci a été approuvée, j'autorise les Services Financiers Canadian Tire Limitée à porter à mon compte MasterCard de Canadian Tire le montant du paiement périodique indiqué ci-dessus. J'ai lu et compris les détails du produit indiqués dans la documentation comprenant les modalités et je consens à m'inscrire au(x) produit(s) facultatif(s) susmentionné(s).</i>",
	optionalProducts_SignatureAgreement1				:	"<i>Je comprends que ce ou ces produits facultatifs sont offerts séparément de carte MasterCard émise par la Banque Canadian Tire et qu'il n'est pas nécessaire d'obtenir carte MasterCard émise par la Banque Canadian Tire. Je comprends que le ou les produits facultatifs que je choisis ne seront fournis que si je signe et accepte les frais indiqués. Si j'ai fait la demande d'une carte MasterCard de Canadian Tire et que celle-ci a été approuvée, j'autorise les Services Financiers Canadian Tire Limitée à porter à mon compte MasterCard de Canadian Tire le montant du paiement périodique indiqué ci-dessus. J'ai lu et compris les détails du produit indiqués dans la documentation comprenant les modalités et je consens à m'inscrire au(x) produit(s) facultatif(s) susmentionné(s).</i>",
	optionalProducts_SignatureAgreement2				:	"En signant et en cochant la case ci-dessous, j'accepte de m'inscrire à ce(s) produit(s) facultatif(s) et j'accepte les modalités et les frais indiqués.",

	optionalProducts_ProtectionAdvantage_Title			:	"Avantage protection<span class=\"MC\"><sup></sup></span> de Canadian Tire",

	optionalProducts_IdentityWatch_Title				:	"<strong>Surveillance d'identité Classique<span class=\"MD\"><sup></sup></span></strong>",

	optionalProducts_TermsAndConditions_PA_Title		:	"<strong>Modalités relatives au programme Avantage Protection<span class=\"MC\"><sup></sup></span> de Canadian Tire</strong><br><br>",

	//................................................................Start Terms and Conditions for Credit Protector.......................
	// Old code
	/*
	 optionalProducts_TermsAndConditions_CP_Title		:	"<strong>Modalités d’adhésion à Avantage Protection Canadian Tire<span class=\"MC\"><sup></sup></span></strong>" +
															"<br><strong>DÉTAILS DE L’ASSURANCE COUVERTURE-CRÉDIT : </strong>",
	*/
	// UAT 12 - CP Revitalization
	optionalProducts_TermsAndConditions_CP_Title		:	"<strong>DÉTAILS DE L’ASSURANCE COUVERTURE-CRÉDIT </strong>",
	
	// Old line
	/*
	optionalProducts_TermsAndConditions_CP				:	"COUVERTURE-CRÉDIT<span class=\"MD\"><sup></sup></span><sup>1</sup>"
												 			+ "<br><br>**Couverture-crédit<span class=\"MD\"><sup></sup></span><sup>1</sup> "
															+ "<br>Offerte aux titulaires de carte âgés de 18 à 65 ans. "
															+ "En cas d'invalidité ou de perte involontaire de votre emploi<sup>2</sup>, Couverture-crédit pourrait s'appliquer à 3 % du solde impayé du compte de votre carte MasterCard<span class=\"MD\"><sup></sup></span> de <i>Canadian Tire</i><span class=\"MD\"><sup></sup></span>, jusqu'à votre retour au travail ou jusqu'à ce que votre solde soit payé en entier, et ce, jusqu'à concurrence de 20&nbsp;000&nbsp;$. "
															+ "En cas de décès ou de mutilation<sup>3</sup>, Couverture-crédit peut payer le solde impayé, jusqu'à concurrence de 20&nbsp;000&nbsp;$."
															+ "Couverture-crédit peut payer le solde impayé de votre compte, jusqu'à concurrence de 20&nbsp;000&nbsp;$, si votre conjoint ou vous-même êtes atteint d'une maladie terminale ou décédez<sup>4</sup>."
															+ "<br><br>**Couverture-crédit – <i>Âge d'or</i><span class=\"MD\"><sup></sup></span><sup>1</sup> "
															+ "<br>Offerte aux titulaires de carte âgés de 66 à 75 ans."
															+ "En cas de décès<sup>3</sup>, Couverture-crédit – <i>Âge d'or</i> peut payer le solde de votre compte, jusqu'à concurrence de 20&nbsp;000&nbsp;$."
															+ "Couverture-crédit – <i>Âge d'or</i> peut payer le solde de votre compte, jusqu'à concurrence de 20&nbsp;000&nbsp;$ si votre conjoint ou vous-même êtes atteint d'une maladie terminale<sup>4</sup>."
															+ "<br><br>COUVERTURE-CRÉDIT, COUVERTURE-CRÉDIT – ÂGE D'OR : Couverture d'assurance collective souscrite auprès de American Bankers, Compagnie d'Assurance-vie de la Floride et de American Bankers, Compagnie d'Assurances générales de la Floride, filiales de Assurant Solutions<span class=\"MD\"><sup></sup></span>, C.P. 7000, Kingston (Ontario) K7L 5V3."
															+ "<br><br>PAIEMENT DE LA PRIME D'ASSURANCE DE COUVERTURE-CRÉDIT"
															+ "<br>Le paiement des primes d'assurance de COUVERTURE-CRÉDIT est de 1,10 $ par tranche de 100&nbsp;$ du solde impayé de votre état de compte mensuel, moins le solde impayé de tout programme de modalités spéciales, plus tes taxes applicables. Aucune prime ne sera facturée à votre carte de crédit de Canadian Tire lorsque le solde mensuel impayé de votre compte est inférieur à 10&nbsp;$. Par exemple, si le solde de votre compte s'établit à 200&nbsp;$, après la déduction des primes d'assurance impayées selon votre relevé et du montant applicable en vertu de tout programme de modalités spéciales, vous payerez 2,20 $ plus les taxes applicables. Il n'y a aucune prime lorsque le solde mensuel est inférieur à 10&nbsp;$<sup>5</sup>.",
	*/
	optionalProducts_TermsAndConditions_CP				:	"<strong>RENSEIGNEMENTS IMPORTANTS SUR L’ASSURANCE : </strong>"
															+ "<br>Le présent sommaire comprend une description des couvertures d’assurance offertes par le programme d’assurance-crédit collective Assurance Couverture-crédit, de même que divers renseignements importants à cet égard. Les couvertures d’assurance en cas d’invalidité totale (sauf au Québec), de décès, de maladie terminale, de mutilation, et en cas de décès ou de mutilation par accident sont prises en charge par American Bankers Compagnie d’Assurance Vie de la Floride (ABLAC), et les couvertures d’assurance en cas de perte d’emploi involontaire ou d’invalidité totale (au Québec seulement) sont prises en charge par American Bankers Compagnie d’Assurance Générale de la Floride (ABIC). ABLAC et ABIC ainsi que leurs sociétés affiliées et filiales exercent des activités commerciales au Canada sous la dénomination sociale Assurant Solutions<sup>&reg;</sup>. Le titulaire de carte principal (la personne au nom de laquelle le compte de la carte de crédit émise par la Banque Canadian Tire a été établi) recevra, dans les 30 jours de l’entrée en vigueur de l’assurance, un certificat d’assurance décrivant tous les détails de la couverture, comme les définitions, les prestations, les restrictions, les limites et les exclusions, dans le cas où le titulaire de carte principal a choisi d’acheter l’assurance et répond aux critères d’admissibilité indiqués ci-après.Veuillez lire attentivement le certificat d’assurance dès sa réception pour en connaître tous les détails et conservez-le en lieu sûr avec vos autres documents importants. Le titulaire de carte principal peut annuler la couverture d’assurance en tout temps. Veuillez consulter la section RÉSILIATION, ANNULATION OU MODIFICATION DE LA COUVERTURE ci-après pour connaître les détails concernant les dispositions d’annulation et de résiliation. Les taux de primes peuvent être modifiés."
															+ "<br><br><strong>PRIME : </strong>"
															+ "<br>1,10 $ par tranche de 100 $ du solde quotidien moyen de la carte de crédit émise par la Banque Canadian Tire (moins le montant impayé de tout programme de modalités spéciales de paiement), plus tes taxes applicables. Par exemple, si votre solde quotidien moyen est de 350 $, vous ne payerez que 3,85 $, plus les taxes applicables. Aucune prime d’assurance ne sera facturée les mois où le solde quotidien moyen de la carte de crédit émise par la Banque Canadian Tire est inférieur à 10 $. À l’âge de 80 ans, le taux de prime est réduit à 0,59 $ par tranche de 100 $ du solde quotidien moyen (moins le montant impayé de tout programme de modalités spéciales de paiement), plus les taxes applicables."
															+ "<br><br><strong>CRITÈRES D’ADMISSIBILITÉ APPLICABLES À TOUTES LES COUVERTURES : </strong>"
															+ "<br>Pour être admissible aux couvertures de l’Assurance Couverture-crédit, le titulaire de carte principal doit être une personne physique, être âgé d’au moins 18 ans et de moins de 76 ans au moment de son adhésion, et doit être endetté en vertu de la carte de crédit émise par la Banque Canadian Tire à laquelle les primes de la Couverture-crédit sont imputées."
															+ "<br><br><strong>PRESTATIONS EN CAS D’INVALIDITÉ TOTALE OU DE PERTE D’EMPLOI INVOLONTAIRE : </strong>"
															+ "<br>La couverture en cas d’invalidité totale (sauf au Québec) est offerte en vertu de la police de base n° 960913L-1. Les couvertures en cas d’invalidité totale (au Québec seulement) et de perte d’emploi involontaire sont offertes en vertu de la police de base n° 960913-1. Dans le cas où le titulaire de carte principal est atteint d’une invalidité totale ou perd involontairement son emploi, ces couvertures d’assurance pourraient effectuer des paiements mensuels correspondant à 5 % du solde impayé de la carte de crédit émise par la Banque Canadian Tire au titulaire de carte principal, tel qu’il était à la date du relevé coïncidant avec, ou précédant immédiatement, la date de l’invalidité totale ou de la perte d’emploi involontaire, jusqu’à concurrence de 1 000 $ par mois et sous réserve d’une prestation maximale totale de 20 000 $ par carte de crédit émise par la Banque Canadian Tire. Les programmes de modalités spéciales de paiement ne sont pas inclus dans les paiements de prestations. Le titulaire de carte principal doit travailler contre rémunération au moins 25 heures par semaine auprès d’un seul employeur, excluant le travail temporaire ou contractuel, au moment du sinistre. Le titulaire de carte principal est admissible aux prestations après 30 jours consécutifs d’invalidité totale ou de chômage involontaire. Les prestations sont payables à compter de la 31<sup>e</sup> journée et sont déterminées en fonction du solde impayé de la carte de crédit émise par la Banque Canadian Tire au titulaire de carte principal, tel qu’il s’affichait à la date du relevé coïncidant avec, ou précédant immédiatement, la date de l’invalidité totale ou de la perte d’emploi involontaire. Les prestations d’invalidité totale sont payables uniquement si le titulaire de carte principal souffre d’une invalidité totale continue, est incapable d’accomplir toutes les fonctions habituelles de son emploi, reçoit régulièrement des soins et des traitements d’un médecin reconnu, et qu’une preuve satisfaisante a été fournie à l’assureur par le médecin. Les exclusions associées à la couverture en cas de perte d’emploi sont les suivantes : condamnation pour infraction au <i>Code criminel</i> du Canada; perte d’un emploi temporaire, contractuel ou à temps partiel (moins de 25 heures par semaine); perte d’un travail autonome (sauf en cas de faillite demandée par un créancier et attestée par l’ordre d’un tribunal); et mise à pied normale saisonnière. Les frais imputés au compte de la carte de crédit émise par la Banque Canadian Tire après la date du sinistre ne seront pas couverts à moins que le titulaire de carte principal demeure assuré, retourne au travail pendant plus de 30 jours consécutifs, et soit atteint d’une invalidité totale ou perde involontairement son emploi de nouveau conformément aux modalités de la police de base."
															+ "<br><br><strong>PRESTATIONS EN CAS DE DÉCÈS OU DE MUTILATION : </strong>"
															+ "<br>La couverture est offerte en vertu de la police de base n° 960913L-1. Les prestations en cas de décès ou de mutilation, lesquelles ne sont versées qu’une seule fois, sont versées pour le titulaire de carte principal (et son conjoint) âgé de moins de 80 ans. Sur réception d’une preuve du décès ou de la mutilation, tels que ceux-ci sont définis dans la police de base, ces couvertures pourraient payer le solde impayé de la carte de crédit émise par la Banque Canadian Tire, tel qu’il s’affichait au moment du décès ou de la mutilation, sous réserve d’une prestation maximale totale de 20 000 $ par compte. Le suicide et les blessures auto-infligées sont exclus de la couverture en cas de décès s’ils surviennent au cours des 6 mois suivant la date d’entrée en vigueur de la couverture d’assurance."
															+ "<br><br><strong>La couverture en cas de décès ou de mutilation se convertit en une couverture en cas de décès ou de mutilation par accident à l’âge de 80 ans</strong> et se poursuit aussi longtemps que le titulaire de carte principal (et son conjoint) est couvert par la police de base. Le décès ou la mutilation par accident doit être le résultat direct d’un accident, et non le résultat de causes naturelles. "
															+ "<br><br>En cas de décès simultanés du titulaire de carte principal et de son conjoint, une seule prestation sera versée."
															+ "<br><br><strong>PRESTATIONS EN CAS DE MALADIE TERMINALE : </strong>"
															+ "<br>La couverture est offerte en vertu de la police de base n° 960913L-1. La prestation en cas de maladie terminale, laquelle n’est payée qu’une seule fois, est versée pour le titulaire de carte principal (ou son conjoint) sur réception d’une preuve de maladie terminale qui réduit l’espérance de vie à moins de 12 mois à partir du moment du diagnostic, tel que cela est défini dans la police de base, et pourrait payer le solde impayé de la carte de crédit émise par la Banque Canadian Tire, tel qu’il s’affichait au moment où le diagnostic a été rendu, sous réserve d’une prestation maximum totale de 20 000 $ par compte."
															+ "<br><br>Aucune prestation n’est versée si le diagnostic d’une maladie terminale est rendu dans les 6 premiers mois suivant la date d’entrée en vigueur de la couverture d’assurance et que la maladie est le résultat d’une condition qui a présenté des symptômes ou qui a nécessité un traitement médical pour le titulaire de carte principal (ou pour son conjoint) dans les 6 mois précédant immédiatement la date d’entrée en vigueur. "
															+ "<br><br>La couverture en cas de maladie terminale se poursuit aussi longtemps que le titulaire de carte principal (et son conjoint) est couvert par la police de base."
															+ "<br><br>Si le titulaire de carte principal et son conjoint sont atteints simultanément d’une maladie terminale, une seule prestation sera versée. "
															+ "<br><br><strong>DEMANDES DE RÈGLEMENT : </strong>"
															+ "<br>Pour présenter une demande de règlement, communiquez avec l’assureur par téléphone au 1-800-480-1853, ou par écrit à Assurant Solutions, C.P. 7000, Kingston (Ontario), K7L 5V3. Un formulaire de demande de règlement vous sera envoyé et vous devrez le remplir et le retourner dans les 90 jours suivant la date du sinistre, sauf pour les demandes de règlement d’assurance-vie."
															+ "<br><br><strong>RÉSILIATION, ANNULATION OU MODIFICATION DE LA COUVERTURE : </strong>"
															+ "<br>Le titulaire de carte principal peut annuler la présente couverture d’assurance en tout temps en communiquant par écrit avec la Banque Canadian Tire ou en composant le 1-800-459-6415. Si le titulaire de carte principal annule la couverture dans les quarante-cinq (45) jours suivant l’émission du certificat d’assurance, les assureurs porteront un crédit égal à la totalité de la prime payée au compte de la carte émise par la Banque Canadian Tire au titulaire de carte principal. Toutefois, si le titulaire de carte principal ferme le compte de sa carte de crédit émise par la Banque Canadian Tire avant la date de résiliation de la couverture d’assurance, le titulaire de carte principal obtiendra le remboursement par chèque. La couverture prendra automatiquement fin à la première des éventualités suivantes : la date à laquelle le titulaire de carte principal demande l’annulation de la couverture; la date à laquelle les paiements mensuels exigibles pour la carte de crédit émise par la Banque Canadian Tire sont en souffrance depuis plus de 90 jours (la couverture redevient automatiquement valide à compter de la date du relevé qui suit la date à laquelle le compte de la carte de crédit émise par la Banque Canadian Tire est de nouveau en règle); la date à laquelle la carte de crédit émise par la Banque Canadian Tire au titulaire de carte principal est annulée; la date du paiement d’une demande de règlement pour cause de maladie terminale, de décès ou de décès par accident; la date du décès du titulaire de carte principal; ou la date de résiliation d’une ou de plusieurs polices de base moyennant un préavis de résiliation de 30 jours donné au titulaire de carte principal."
															+ "<br><br><strong>RENSEIGNEMENTS ADDITIONNELS/INTÉRÊT DU CRÉANCIER : </strong>"
															+ "<br>Pour obtenir des renseignements additionnels ou des précisions concernant la couverture d’assurance, veuillez communiquer avec les assureurs au numéro de téléphone ou à l’adresse mentionnés ci-dessus. La Banque Canadian Tire a un intérêt financier dans la vente de cette assurance.",
	optionalProducts_TermsAndConditions_CP_Additions	:	 "<br><sup>1</sup> La protection est assujettie aux modalités, aux limitations et aux restrictions indiquées dans le certificat d'assurance. Certaines modalités peuvent restreindre ou annuler la couverture. Si elle est approuvée, la couverture prendra effet aujourd'hui. Veuillez prendre note qu'une perte d'emploi dans les 30 prochains jours n'est pas admissible à la couverture. La couverture est au mois. Si vous désirez la résilier, veuillez appeler le service à la clientèle au numéro inscrit à l'arrière de votre carte de crédit Canadian Tire. Si vous résiliez votre couverture dans les 30 jours suivant la réception de votre certificat d'assurance, l'assureur remboursera toute prime déjà versée. Pour obtenir de plus amples renseignements, composez le 1 800 459-6415."
															+ "<br><sup>2</sup> Vous devez exercer un emploi rémunéré pendant 25 heures par semaine ou plus chez le même employeur au moment où vous perdez votre emploi involontairement ou devenez invalide. Vous devez être invalide ou sans emploi pendant 30 jours pour avoir droit aux prestations. Les exclusions de l'assurance invalidité comprennent toute tentative de suicide et toute blessure que l'assuré s'inflige. La protection en cas d'invalidité exclut également les demandes de règlement pour certaines affections préexistantes pour lesquelles vous êtes traité durant les six premiers mois suivant l'adhésion, ou résultant de la commission ou de la tentative de commission d'une infraction au Code criminel, d'une grossesse normale, d'un accident aérien (sauf si l'assuré est un passager payant et que le voyage est effectué par l'intermédiaire d'une compagnie aérienne commerciale sur un vol régulier) ou d'un voyage ou séjour à l'extérieur du Canada ou des États-Unis. Les exclusions de l'assurance en cas de perte d'emploi involontaire comprennent : perte d'emploi imminente connue de l'assuré au moment de la demande d'adhésion, perte d'emploi volontaire, y compris un congé parental, un conflit de travail ou une grève, ou perte d'emploi se produisant au cours de la période de 30 jours suivant l'adhésion ou pour un motif valable ou par suite d'une déclaration de culpabilité à l'égard d'une infraction criminelle, ou découlant d'une retraite volontaire ou obligatoire, d'une mise à pied saisonnière normale, d'un accident, d'une maladie ou d'une grossesse et d'une perte d'un emploi temporaire ou d'un travail autonome."
															+ "<br><sup>3</sup> Les exclusions de la couverture en cas de décès ou de mutilation comprennent le suicide et toute blessure que l'assuré s'inflige intentionnellement au cours de la période de deux ans qui suit l'adhésion. En ce qui concerne Couverture-crédit<span class=\"MD\"><sup></sup></span>, cette couverture est remplacée par une couverture en cas de décès ou de mutilation par accident lorsque l'assuré atteint l'âge de 66 ans. En ce qui concerne Couverture-crédit – <i>Âge-d'or</i><span class=\"MD\"><sup></sup></span>, cette couverture est remplacée par une couverture en cas de décès par accident lorsque l'assuré atteint l'âge de 76 ans. "
															+ "<br><sup>4</sup> La prestation en cas de maladie terminale exige qu'un diagnostic ait été rendu par un médecin habilité à pratiquer au Canada et que l'espérance de vie de la personne assurée soit inférieure à douze mois."
															+ "<br><sup>5</sup> Le calcul des primes s'applique à Couverture-crédit et à Couverture-crédit – <i>Âge d'or</i>."
															+ "<br><br>La Banque Canadian Tire a un intérêt financier dans la vente de Couverture-crédit/ Couverture-crédit – <i>Âge d'or</i>."
															+ "<br>	<br>Si vous souhaitez obtenir plus de renseignements sur Couverture-crédit/ Couverture-crédit – <i>Âge d'or</i>, vous pouvez obtenir un certificat d'assurance complet et des renseignements détaillés en visitant le site ctfs.com ou en appelant au 1 800 459-6415.",




	optionalProducts_TermsAndConditions_IW_Title: "Conditions d'adhésion au programme Surveillance d'identité Classique<span class=\"MC\"><sup></sup></span>",
	optionalProducts_TermsAndConditions_IW				:	"Surveillance d'identité Classique, 4,99 $ payable en avance chaque mois une fois votre première transaction effectuée avec votre carte de crédit de marque Canadian Tirepar mois, taxes applicables en sus. Ce service comprend les avantages suivants (les « avantages ») :"
															+ " Protection contre l'usurpation d'identité / Service de surveillance en ligne (iPiP<span class=\"MD\"><sup></sup></span>), service de retour de biens Rebound<span class=\"MC\"><sup></sup></span> et un remboursement"
															+ " De plus, la protection des cartes, la sauvegarde de données en ligne, et la récompense pour tout renseignement menant à la condamnation d'un fraudeur.",
	optionalProducts_TermsAndConditions_IW_Additions	: "<strong>Admissibilité : </strong>Votre adhésion prendra effet à compter de la date d'inscription indiquée sur votre lettre de bienvenue qui est comprise dans votre trousse de bienvenue de Surveillance d'identité. Vous êtes admissible aux avantages tant que votre adhésion est maintenue."
															+ " Pour être admissible aux avantages vous devez également être membre de Surveillance d'identité au moment où survient l'événement applicable. Vous, votre conjoint et vos enfants à charge âgés de moins de 21 ans qui habitent sous votre toit ou qui sont aux études (s'il y a lieu), vous avez droit aux avantages."
															+	"<br><strong>Frais d'adhésion : </strong>Vos frais d'adhésion comme indiqués dans votre lettre de bienvenue ou mis à jour ultérieurement par Aimia Proprietary Loyalty Canada Inc. <strong>(« Aimia »)</strong> au moyen d'un avis m'étant transmis <strong>(les « frais »)</strong>, et débuteront une fois la première transaction effectuée avec votre carte de crédit de marque Canadian Tire. Par la suite, les frais d'adhésion seront facturés tous les mois à l'avance sur votre carte de crédit de marque Canadian Tire. Pour assurer un service sans interruption, votre adhésion sera renouvelée automatiquement jusqu'à ce que vous décidiez de l'annuler. Nous porterons vos frais à votre compte de carte de crédit, au taux courant à la date de renouvellement."
															+ "<br><strong>Vous annulez votre demande : </strong>Si vous n'êtes pas entièrement satisfait de votre adhésion, vous pouvez l'annuler en tout temps par téléphone, ou télécopieur en utilisant les coordonnées indiquées ci-dessous. Vous cesserez alors d'être facturé les frais mensuels."
															+ " Si vous annulez dans les trente (30) jours de votre date d'adhésion, les Services Financiers Canadian Tire Limitée vous rembourseront intégralement les frais d'adhésion payés à la suite de votre première transaction effectuée avec votre carte de crédit de marque Canadian Tire. Si vous annulez après les trente (30) premiers jours, l'annulation prendra effet à compter du dernier jour du cycle de facturation en cours ou trente (30) jours après la réception de l'avis d'annulation, selon la première éventualité. Si vous annulez votre adhésion, vous êtes responsable de tous les frais engagés en raison des services offerts par l'intermédiaire d'un fournisseur d'accès Internet ou de tout tiers fournisseur de services."
															+ "<br><strong>Aimia annule votre demande : </strong>Votre adhésion peut être annulée si votre compte n'est pas en règle, si les frais d'adhésion , qui débutent une fois votre première transaction effectuée avec votre carte de crédit de marque Canadian Tire, ne sont pas payés ou s'il est établi que vous ou un membre de votre famille admissible exercez des activités frauduleuses ou que nous faisons mauvais usage des avantages. Aimia se réserve le droit de mettre fin à votre adhésion pour quelque raison que ce soit sur envoi d'un préavis écrit de trente (30) jours."
															+ " Il est de votre responsabilité d'informer Aimia si vous changez d'adresse ou d'adresse de courriel."
															+ " Pour de plus amples renseignements concernant le consentement à la Surveillance d'identité Classique, la collecte et l'utilisation de renseignements personnels, la confidentialité et la sécurité, les modifications de la politique en matière de protection des renseignements personnels, les modalités au complet ou le Guide des avantages, veuillez consulter le site www.identitywatchclassic.ca ou appeler au 1 800 263-1020 au Canada ou au 905 735-1268 1628 (aux É.-U. à frais virés); si ailleurs qu'au Canada ou aux États-Unis, télécopiez au 905 735-2644 ou écrire à : Surveillance d'identité Classique C.P. 1700, succursale D, Toronto (Ontario) M9A 5C7 Télécopieur : 905 735-2644."
															+ " Le programme Surveillance d'identité Classique est commandité par les Services Financiers Canadian Tire Limitée et offert par Aimia Proprietary Loyalty Canada Inc, situé au 2845, boulevard Matheson Est, Mississauga (Ontario)  L4W 5K2. Les Services Financiers Canadian Tire Limitée ont un intérêt financier dans la vente de Surveillance d'identité Classique."
															+ "<br><br><span class=\"MD\"><sup></sup></span>/<span class=\"MC\"><sup></sup></span>Internet Personal Information Patrol, iPiP et Rebound sont des marques de commerce de Aimia Proprietary Loyalty Canada Inc."
															+ "<br><span class=\"MD\"><sup></sup></span>/<span class=\"MC\"><sup></sup></span>Sauf indication contraire, toutes les marques de commerce sont la propriété de la Société Canadian Tire Limitée et sont utilisées sous licence."
	 														+ "<br><span class=\"MD\"><sup></sup></span>/<span class=\"MC\"><sup></sup></span>MasterCard et la marque figurative de MasterCard sont des marques de commerce déposées de MasterCard International Incorporated.",

	//................................................................End Terms and Conditions for Identity Watch Classic.......................
	optionalProducts_IdentityWatch   					:   "- Enrol me in Identity Watch<sup>&trade;</sup>",
	optionalProducts_ProtectionAdvantage   				:   "- Enrol me in Protection Advantage<sup>&trade;</sup>",
	optionalProducts_DoNotEnrolMe 						:   "Pas pour l'instant",
	//................................................................


	//....................End New Items...............................

	optionalProducts_CreditProtector                  :                         "Couverture-crédit",
	optionalProducts_License1                         :                         "1,10 $ par tranche de 100 $ du solde impayé du compte de carte de crédit Canadian Tire, moins le solde impayé de tout programme de modalités spéciales, plus les taxes applicables. Aucune prime ne sera facturée lorsque le solde mensuel impayé de votre compte de carte de crédit Canadian Tire sera inférieur à 10 $.",
	optionalProducts_License2                         :                         "Par exemple, si le solde de votre compte s'établit à 200 $, après la déduction des primes d'assurance impayées selon votre relevé et du montant applicable en vertu de tout programme de modalités spéciales, vous ne payerez que 2,20 $ plus les taxes applicables. Aucune prime n'est facturée lorsque le solde mensuel est inférieur à 10 $.",
	optionalProducts_TermsAndConditionsTitle          :                         "Modalités de la Couverture-crédit",
	optionalProducts_TermsAndConditions1              :                         "Offerte aux titulaires de carte âgés de 18 à 65 ans. ",
	optionalProducts_TermsAndConditions2              :                         "En cas d'invalidité ou de perte involontaire de votre emploi2, Couverture-crédit pourrait s'appliquer à 3 % du solde impayé du compte de votre carte MasterCard<span class=\"MD\"><sup></sup></span> de Canadian Tire<span class=\"MD\"><sup></sup></span> , jusqu'à concurrence de 1 000 $ par mois, jusqu'à votre retour au travail ou jusqu'à ce que votre solde soit payé en entier, et ce, jusqu'à concurrence de 20 000 $. Remarque : Les programmes de modalités spéciales ne sont pas inclus.",
	optionalProducts_TermsAndConditions3              :                         "En cas de décès ou de mutilation3, Couverture-crédit pourrait payer le solde de votre compte, jusqu'à concurrence de 20 000 $. Couverture-crédit pourrait payer le solde impayé de votre compte, jusqu'à concurrence de 20 000 $, si votre conjoint ou vous-même êtes atteint d'une maladie terminale ou décédez4.",
	optionalProducts_TermsAndConditions4              :                         "Paiement des primes d'assurance ",
	optionalProducts_TermsAndConditions5              :                         "Primes à payer : 1,10 $ par tranche de 100 $ du solde impayé du compte de carte de crédit Canadian Tire, moins le solde impayé de tout programme de modalités spéciales, plus les taxes applicables. Aucune prime ne sera facturée lorsque le solde mensuel impayé de votre compte de carte de crédit Canadian Tire sera inférieur à 10 $.",
	optionalProducts_TermsAndConditions6              :                         "Par exemple, si le solde de votre compte s'établit à 200 $, après la déduction des primes d'assurance impayées selon votre relevé et du montant applicable en vertu de tout programme de modalités spéciales, vous ne payerez que 2,20 $ plus les taxes applicables. Aucune prime lorsque le solde mensuel est inférieur à 10 $5.",
	optionalProducts_TermsAndConditions7              :                         "Couverture-crédit<span class=\"MD\"><sup></sup></span> et Couverture‑crédit – Âge d'or<span class=\"MD\"><sup></sup></span> sont souscrites auprès de American Bankers, Compagnie d'Assurance Vie de la Floride, et de American Bankers, Compagnie d'Assurances Générales de la Floride, filiales de Assurant Solutions<span class=\"MD\"><sup></sup></span>, C.P. 7000, Kingston (Ontario) K7L 5V3.",
	optionalProducts_TermsAndConditions8              :                         "Si vous résiliez votre couverture dans les 30 jours suivant la réception de votre certificat d'assurance, l'assureur remboursera toute prime déjà versée. Pour obtenir de plus amples renseignements, composez le 1 800 459-6415.",
	optionalProducts_TermsAndConditions9              :                         "1 La protection est assujettie aux modalités et aux restrictions stipulées dans le certificat d'assurance émis au moment de l'adhésion. Certaines modalités peuvent restreindre ou annuler la couverture. La couverture prend effet aujourd'hui. Veuillez prendre note qu'une perte d'emploi dans les 30 prochains jours n'est pas admissible à la couverture. La couverture est au mois. Si vous désirez la résilier, veuillez appeler le service à la clientèle au numéro inscrit à l'arrière de votre carte de crédit Canadian Tire.",
	optionalProducts_TermsAndConditions10             :                         "2 Vous devez exercer un emploi rémunéré pendant 25 heures par semaine ou plus chez le même employeur au moment où vous perdez votre emploi involontairement ou devenez invalide. Vous devez être invalide ou sans emploi pendant 30 jours pour avoir droit aux prestations. Les exclusions de l'assurance invalidité comprennent toute tentative de suicide et toute blessure que l'assuré s'inflige intentionnellement. La protection en cas d'invalidité exclut également les demandes de règlement pour certaines affections préexistantes pour lesquelles vous êtes traité durant les six premiers mois suivant l'adhésion, ou résultant de la commission ou de la tentative de commission d'une infraction au Code criminel, d'une grossesse normale, d'un accident aérien (sauf si l'assuré est un passager payant et que le voyage est effectué par l'intermédiaire d'une compagnie aérienne commerciale sur un vol régulier) ou d'un voyage ou séjour à l'extérieur du Canada ou des États-Unis. Les exclusions de l'assurance en cas de perte d'emploi involontaire comprennent : perte d'emploi imminente connue de l'assuré au moment de la demande d'adhésion, perte d'emploi volontaire, y compris un congé parental, un conflit de travail ou une grève, ou perte d'emploi se produisant au cours de la période de 30 jours suivant l'adhésion ou pour un motif valable ou par suite d'une déclaration de culpabilité à l'égard d'une infraction criminelle, ou découlant d'une retraite volontaire ou obligatoire, d'une mise à pied saisonnière normale, d'un accident, d'une maladie ou d'une grossesse et d'une perte d'un emploi temporaire, contractuel ou à temps partiel ou d'un travail autonome (sauf en cas de faillite à la demande d'un créancier).",
	optionalProducts_TermsAndConditions11             :                         "3 Les exclusions de la couverture en cas de décès ou de mutilation comprennent le suicide et toute blessure que l'assuré s'inflige au cours de la période de deux ans qui suit l'adhésion. En ce qui concerne Couverture‑crédit<span class=\"MD\"><sup></sup></span>, cette couverture est remplacée par une couverture en cas de décès ou de mutilation par accident lorsque l'assuré atteint l'âge de 66 ans. En ce qui concerne Couverture-crédit – Âge-d'or<span class=\"MD\"><sup></sup></span>, cette couverture est remplacée par une couverture en cas de décès par accident lorsque l'assuré atteint l'âge de 76 ans.",
	optionalProducts_TermsAndConditions12             :                         "4 La prestation en cas de maladie terminale exige qu'un diagnostic ait été rendu par un médecin habilité à pratiquer au Canada et que l'espérance de vie de la personne assurée soit inférieure à douze mois.",
	optionalProducts_TermsAndConditions13             :                         "5 Le calcul des primes s'applique à Couverture-crédit et à Couverture‑crédit ─ Âge d'or.",
	optionalProducts_TermsAndConditions14             :                         "Le créancier a un intérêt financier dans la vente de Couverture-crédit.",
	optionalProducts_TermsAndConditions15             :                         "Si vous souhaitez obtenir plus de renseignements sur Couverture-crédit, vous pouvez obtenir un certificat d'assurance complet et des renseignements détaillés en visitant le site www.ctfs.com ou en appelant au 1 800 459-6415. ",

	optionalProducts_TermsAndConditions16             :                         "J'ai lu et compris les modalités et les détails relatifs au produit et je consens à m'inscrire au(x) produit(s) facultatif(s) susmentionné(s).",
	//................................................................
	optionalProducts_WarningHeader 					  :                         "VEUILLEZ LIRE ATTENTIVEMENT CE QUI CONCERNE<br> PRODUITS FACULTATIFS",
	
	// Old line
	// optionalProducts_PAProducts					      : 						"Programme Avantage Protection de Canadian Tire, lequel comprend :<i><ul><li>Couverture-crédit / Couverture-crédit – Âge d'or</li><li>Surveillance d'identité Classique</li></ul></i>",
	// optionalProducts_CPProducts						  : 						"<ul><li>Couverture-crédit / Couverture-crédit – Âge d'or</li></ul>",
	optionalProducts_PAProducts					      : 						"Programme Avantage Protection de Canadian Tire, lequel comprend :<i><ul><li>Assurance Couverture-crédit<span class=\"MD\"><sup></sup></span></li><li>Surveillance d'identité Classique</li></ul></i>",
	optionalProducts_CPProducts						  : 						"<ul><li>Assurance Couverture-crédit<span class=\"MD\"><sup></sup></span></li></ul>",
	optionalProducts_IWProducts						  : 						"<ul><li>Surveillance d'identité Classique</li></ul>",
	
	// US3981
	optionalProductScreen_Handoutprompts_Title			:	"Guide de distribution de la Couverture-crédit",
	optionalProductScreen_Handoutprompts_YesNo_Message	:	"Avez-vous fourni au demandeur le guide de distribution pour son adhésion à la Couverture-crédit?",
	optionalProductScreen_Handoutprompts_Ok_Message		:	"Avant de continuer, tous les demandeurs souscrivant à l’assurance Couverture-crédit doivent recevoir un guide de distribution.",

	
	// ---------- US3621 Start ---------
	
	// Job Categories - Start
	
	jobCategoriesList_null                            :"Veuillez sélectionner...",
    jobCategoriesList_FT							  :"Temps plein",
	jobCategoriesList_DR                              :"Conducteur",
	jobCategoriesList_GU                              :"Gardien",
	jobCategoriesList_HO                              :"Personne au foyer",
	jobCategoriesList_LA                              :"Ouvrier",
	jobCategoriesList_MA                              :"Personnel de gestion",
	jobCategoriesList_MI                              :"Militaire",
	jobCategoriesList_OF                              :"Personnel de bureau",
	jobCategoriesList_OW                              :"Propriétaire",
	jobCategoriesList_FA                              :"Travailleur à la production",
	jobCategoriesList_PR                              :"Professionnel",
	jobCategoriesList_RE                              :"Réparation",
	jobCategoriesList_RT                              :"Retraite",
	jobCategoriesList_SA                              :"Ventes",
	jobCategoriesList_SE                              :"Service",
	jobCategoriesList_ST                              :"Étudiant",
	jobCategoriesList_TR                              :"Métiers",
	jobCategoriesList_UN                              :"Sans emploi",
	jobCategoriesList_OT                              :"Autre",
	
	// End
	
	// Job Titles - Start
	
	// TRADERS
	jobTitlesList_null                            :		"Veuillez sélectionner...",
	jobTitlesList_TR_BD                           : 	'Constructeur / Promoteur',
	jobTitlesList_TR_BL                           : 	'Briqueteur',
	jobTitlesList_TR_CM                           : 	'Ébéniste',
	jobTitlesList_TR_CP                           : 	'Charpentier',
	jobTitlesList_TR_CF                           : 	'Cimentier-finisseur',
	jobTitlesList_TR_ET                           : 	'Électricien',
	jobTitlesList_TR_GZ                           : 	'Vitrier',
	jobTitlesList_TR_EO                           : 	'Opérateur d’équipement',
	jobTitlesList_TR_FC                           : 	'Poseur de clôture',
	jobTitlesList_TR_GF                           : 	'Ouvrier pour installations au gaz',
	jobTitlesList_TR_GC                           : 	'Entrepreneur général',
	jobTitlesList_TR_IS                           : 	'Calorifugeur',
	jobTitlesList_TR_IW                           : 	'Serrurier',
	jobTitlesList_TR_LS                           : 	'Jardinier paysagiste',
	jobTitlesList_TR_MF                           : 	'Marine Fitter',
	jobTitlesList_TR_MW                           : 	'Menuisier de préfabrication',
	jobTitlesList_TR_PR                           : 	'Peintre',
	jobTitlesList_TR_PF                           : 	'Tuyauteur',
	jobTitlesList_TR_PT                           : 	'Plâtrier',
	jobTitlesList_TR_PB                           : 	'Plombier',
	jobTitlesList_TR_PL                           : 	'Monteur de lignes',
	jobTitlesList_TR_SM                           : 	'Chef de chantier',
	jobTitlesList_TR_TP                           : 	'Tireur de joints',
	jobTitlesList_TR_TS                           : 	'Mosaïste',
	jobTitlesList_TR_WD                           : 	'Soudeur ',
	jobTitlesList_TR_OR                           : 	'Autre',

	// DRIVER
	jobTitlesList_DR_AD                           : 	'Conducteur d’ambulance',
	jobTitlesList_DR_BD                           : 	'Conducteur d’autobus',
	jobTitlesList_DR_CF                           : 	'Conducteur',
	jobTitlesList_DR_CR                           : 	'Messager',
	jobTitlesList_DR_DI                           : 	'Moniteur de conduite automobile',
	jobTitlesList_DR_TO                           : 	'Conducteur de dépanneuse',
	jobTitlesList_DR_TD                           : 	'Conducteur de camion',
	jobTitlesList_DR_OR                           : 	'Autre',

	// MILITARY
	jobTitlesList_MI_AM                           : 	'Armée',
	jobTitlesList_MI_AI                           : 	'Force aérienne',
	jobTitlesList_MI_NY                           : 	'Marine',
	jobTitlesList_MI_AR                           : 	'Forces armées',
	jobTitlesList_MI_MR                           : 	'Ajusteur de navire',
	jobTitlesList_MI_OR                           : 	'Autre',

	// PROFESSIONAL
	jobTitlesList_PR_AT                           : 	'Comptable',
	jobTitlesList_PR_AY                           : 	'Actuaire',
	jobTitlesList_PR_AD                           : 	'Vérificateur',
	jobTitlesList_PR_CR                           : 	'Chiropraticien',
	jobTitlesList_PR_CP                           : 	'Programmeur informatique',
	jobTitlesList_PR_CT                           : 	'Technicien informatique',
	jobTitlesList_PR_CL                           : 	'Contrôleur',
	jobTitlesList_PR_CO                           : 	'Préposé au crédit ',
	jobTitlesList_PR_DH                           : 	'Hygiéniste dentaire',
	jobTitlesList_PR_DT                           : 	'Dentiste',
	jobTitlesList_PR_DI                           : 	'Diététicien',
	jobTitlesList_PR_DR                           : 	'Médecin',
	jobTitlesList_PR_EG                           : 	'Ingénieur',
	jobTitlesList_PR_EX                           : 	'Direction',
	jobTitlesList_PR_FA                           : 	'Conseiller financier',
	jobTitlesList_PR_JD                           : 	'Juge',
	jobTitlesList_PR_LW                           : 	'Avocat ',
	jobTitlesList_PR_MY                           : 	'Maire',
	jobTitlesList_PR_NU                           : 	'Infirmier',
	jobTitlesList_PR_OP                           : 	'Optométriste',
	jobTitlesList_PR_PL                           : 	'Parajuridique',
	jobTitlesList_PR_PR                           : 	'Ambulancier',
	jobTitlesList_PR_PC                           : 	'Pharmacien',
	jobTitlesList_PR_PT                           : 	'Physiothérapeute',
	jobTitlesList_PR_PI                           : 	'Pilote',
	jobTitlesList_PR_PO                           : 	'Politicien',
	jobTitlesList_PR_PA                           : 	'Directeur',
	jobTitlesList_PR_PF                           : 	'Professeur',
	jobTitlesList_PR_PM                           : 	'Chef de projet',
	jobTitlesList_PR_RG                           : 	'Radiologiste',
	jobTitlesList_PR_SW                           : 	'Travailleur social',
	jobTitlesList_PR_TC                           : 	'Enseignant',
	jobTitlesList_PR_VN                           : 	'Vétérinaire',
	jobTitlesList_PR_OR                           : 	'Autre',

	// PRODUCTION WORKER
	jobTitlesList_FA_AS                           : 	'Monteur',
	jobTitlesList_FA_BD                           : 	'Relieur',
	jobTitlesList_FA_BM                           : 	'Chaudronnier',
	jobTitlesList_FA_FC                           : 	'Fabricant',
	jobTitlesList_FA_FD                           : 	'Conducteur de chariot élévateur',
	jobTitlesList_FA_LH                           : 	'Chef d’équipe',
	jobTitlesList_FA_MH                           : 	'Mécanicien',
	jobTitlesList_FA_MO                           : 	'Opérateur de machine',
	jobTitlesList_FA_MN                           : 	'Opérateur',
	jobTitlesList_FA_MW                           : 	'Préposé à l’entretien',
	jobTitlesList_FA_MG                           : 	'Personnel de gestion',
	jobTitlesList_FA_MI                           : 	'Monteur-ajusteur',
	jobTitlesList_FA_OP                           : 	'Opérateur',
	jobTitlesList_FA_PK                           : 	'Emballeur',
	jobTitlesList_FA_PT                           : 	'Imprimeur',
	jobTitlesList_FA_QS                           : 	'Spécialiste de la qualité',
	jobTitlesList_FA_ST                           : 	'Technicien en sécurité',
	jobTitlesList_FA_SW                           : 	'Couseur',
	jobTitlesList_FA_SO                           : 	'Trieur',
	jobTitlesList_FA_SV                           : 	'Superviseur',
	jobTitlesList_FA_TM                           : 	'Outilleur-ajusteur',
	jobTitlesList_FA_WW                           : 	'Employé d’entrepôt',
	jobTitlesList_FA_WD                           : 	'Soudeur',
	jobTitlesList_FA_OR                           : 	'Autre',

	// GUARD
	jobTitlesList_GU_CO                           : 	'Agent correctionnel',
	jobTitlesList_GU_CS                           : 	'Douanier',
	jobTitlesList_GU_DT                           : 	'Détective',
	jobTitlesList_GU_FF                           : 	'Pompier',
	jobTitlesList_GU_PR                           : 	'Garde forestier',
	jobTitlesList_GU_SG                           : 	'Agent de sécurité ',
	jobTitlesList_GU_OR                           : 	'Autre',

	// MANAGER
	jobTitlesList_MA_AE                           : 	'Arts et divertissements',
	jobTitlesList_MA_AG                           : 	'Agriculture',
	jobTitlesList_MA_CO                           : 	'Construction',
	jobTitlesList_MA_ED                           : 	'Éducation',
	jobTitlesList_MA_FB                           : 	'Finance ou bancaire',
	jobTitlesList_MA_FS                           : 	'Services alimentaires',
	jobTitlesList_MA_MH                           : 	'Médecine ou soins de santé',
	jobTitlesList_MA_FO                           : 	'Foresterie',
	jobTitlesList_MA_GV                           : 	'Gouvernement',
	jobTitlesList_MA_MF                           : 	'Fabrication',
	jobTitlesList_MA_ME                           : 	'Médias',
	jobTitlesList_MA_MI                           : 	'Exploitation minière',
	jobTitlesList_MA_RE                           : 	'Immobilier',
	jobTitlesList_MA_RT                           : 	'Détail',
	jobTitlesList_MA_TH                           : 	'Technologie',
	jobTitlesList_MA_WS                           : 	'Vente en gros',
	jobTitlesList_MA_OR                           : 	'Autre',

	// OWNER
	jobTitlesList_OW_AO                           : 	'Propriétaire d’un magasin de vêtements',
	jobTitlesList_OW_CT                           : 	'Traiteur',
	jobTitlesList_OW_CO                           : 	'Propriétaire d’une entreprise de construction',
	jobTitlesList_OW_FM                           : 	'Fermier',
	jobTitlesList_OW_FO                           : 	'Propriétaire d’une franchise ',
	jobTitlesList_OW_JO                           : 	'Propriétaire d’un magasin de bijoux',
	jobTitlesList_OW_RO                           : 	'Propriétaire d’un restaurant',
	jobTitlesList_OW_SO                           : 	'Propriétaire d’un salon',
	jobTitlesList_OW_OR                           : 	'Autre',

	// OTHER
	jobTitlesList_OT_AR                           : 	'Artiste',
	jobTitlesList_OT_AT                           : 	'Athlète',
	jobTitlesList_OT_CL                           : 	'Clergé',
	jobTitlesList_OT_CO                           : 	'Entraîneur',
	jobTitlesList_OT_CM                           : 	'Comédien',
	jobTitlesList_OT_DC                           : 	'Danseur',
	jobTitlesList_OT_DS                           : 	'Styliste',
	jobTitlesList_OT_DJ                           : 	'Animateur',
	jobTitlesList_OT_ED                           : 	'Rédacteur',
	jobTitlesList_OT_GA                           : 	'Graphiste',
	jobTitlesList_OT_LE                           : 	'Éclairagiste',
	jobTitlesList_OT_MS                           : 	'Musicien',
	jobTitlesList_OT_PG                           : 	'Photographe',
	jobTitlesList_OT_PD                           : 	'Producteur / Directeur',
	jobTitlesList_OT_RF                           : 	'Arbitre',
	jobTitlesList_OT_SE                           : 	'Preneur de son',
	jobTitlesList_OT_SH                           : 	'Assistant de plateau',
	jobTitlesList_OT_WC                           : 	'Sculpteur sur bois',
	jobTitlesList_OT_WR                           : 	'Écrivain',
	jobTitlesList_OT_OR                           : 	'Autre',

	// SALES
	jobTitlesList_SA_AT                           : 	'Encanteur',
	jobTitlesList_SA_BK                           : 	'Courtier',
	jobTitlesList_SA_BY                           : 	'Acheteur',
	jobTitlesList_SA_DS                           : 	'Ventes directes',
	jobTitlesList_SA_IA                           : 	'Agent d’assurance',
	jobTitlesList_SA_RT                           : 	'Courtier immobilier',
	jobTitlesList_SA_SA                           : 	'Préposé aux ventes',
	jobTitlesList_SA_SM                           : 	'Directeur des ventes',
	jobTitlesList_SA_SB                           : 	'Courtier en valeurs mobilières',
	jobTitlesList_SA_OR                           : 	'Autre',

	// SERVICE
	jobTitlesList_SE_BT                           : 	'Barman',
	jobTitlesList_SE_BP                           : 	'Chasseur / Bagagiste',
	jobTitlesList_SE_BC                           : 	'Boucher',
	jobTitlesList_SE_BL                           : 	'Maître d’hôtel',
	jobTitlesList_SE_CH                           : 	'Caissier',
	jobTitlesList_SE_CW                           : 	'Éducateur de la petite enfance',
	jobTitlesList_SE_AT                           : 	'Esthéticien',
	jobTitlesList_SE_CS                           : 	'Conseiller',
	jobTitlesList_SE_CJ                           : 	'Dépositaire / Concierge',
	jobTitlesList_SE_CR                           : 	'Représentant au service à la clientèle',
	jobTitlesList_SE_FT                           : 	'Entraîneur de conditionnement physique',
	jobTitlesList_SE_FA                           : 	'Agent de bord',
	jobTitlesList_SE_FR                           : 	'Fleuriste',
	jobTitlesList_SE_FS                           : 	'Services funéraires',
	jobTitlesList_SE_GM                           : 	'Toiletteur',
	jobTitlesList_SE_HB                           : 	'Coiffeur / Barbier',
	jobTitlesList_SE_HC                           : 	'Préposé aux services de soutien à la personne / aux soins de santé',
	jobTitlesList_SE_HK                           : 	'Gouvernante',
	jobTitlesList_SE_IE                           : 	'Import / Export',
	jobTitlesList_SE_MT                           : 	'Massothérapeute',
	jobTitlesList_SE_PC                           : 	'Soins des animaux',
	jobTitlesList_SE_PG                           : 	'Photographe',
	jobTitlesList_SE_PW                           : 	'Postier',
	jobTitlesList_SE_SW                           : 	'Éboueur',
	jobTitlesList_SE_TG                           : 	'Guide touristique ',
	jobTitlesList_SE_TA                           : 	'Agent de voyage',
	jobTitlesList_SE_WW                           : 	'Serveur',
	jobTitlesList_SE_OR                           : 	'Autre',

	// REPAIRER
	jobTitlesList_RE_AR                           : 	'Réparateur d’appareil',
	jobTitlesList_RE_AB                           : 	'Réparateur de carrosserie',
	jobTitlesList_RE_CT                           : 	'Technicien en réparation d’ordinateur',
	jobTitlesList_RE_HM                           : 	'Homme à tout faire',
	jobTitlesList_RE_HP                           : 	'Réparateur de système CVCA',
	jobTitlesList_RE_MW                           : 	'Préposé à l’entretien',
	jobTitlesList_RE_TT                           : 	'Mécanicien de pneus',
	jobTitlesList_RE_MC                           : 	'Mécanicien',
	jobTitlesList_RE_SS                           : 	'Couturier',
	jobTitlesList_RE_SR                           : 	'Cordonnier',
	jobTitlesList_RE_TR                           : 	'Tailleur',
	jobTitlesList_RE_US                           : 	'Rembourreur',
	jobTitlesList_RE_OR                           : 	'Autre',

	// LABOURER
	jobTitlesList_LA_BB                           : 	'Commis-débarrasseur',
	jobTitlesList_LA_CM                           : 	'Cimentier',
	jobTitlesList_LA_CL                           : 	'Travailleur de la construction',
	jobTitlesList_LA_DM                           : 	'Livreur',
	jobTitlesList_LA_DL                           : 	'Foreur',
	jobTitlesList_LA_GR                           : 	'Jardinier',
	jobTitlesList_LA_EO                           : 	'Opérateur d’excavatrice',
	jobTitlesList_LA_FH                           : 	'Ouvrier agricole',
	jobTitlesList_LA_FI                           : 	'Pêcheur',
	jobTitlesList_LA_FL                           : 	'Signaleur',
	jobTitlesList_LA_GA                           : 	'Pompiste',
	jobTitlesList_LA_GD                           : 	'Fossoyeur',
	jobTitlesList_LA_GK                           : 	'Préposé à l’entretien des terrains',
	jobTitlesList_LA_IS                           : 	'Calorifugeur',
	jobTitlesList_LA_LG                           : 	'Bûcheron',
	jobTitlesList_LA_LA                           : 	'Préposé au stationnement',
	jobTitlesList_LA_MS                           : 	'Préposée au traitement du courrier',
	jobTitlesList_LA_MW                           : 	'Préposé à l’entretien',
	jobTitlesList_LA_MI                           : 	'Mineur',
	jobTitlesList_LA_MO                           : 	'Déménageur',
	jobTitlesList_LA_OI                           : 	'Ouvrier de plates-formes pétrolières',
	jobTitlesList_LA_PT                           : 	'Peintre',
	jobTitlesList_LA_PV                           : 	'Carreleur',
	jobTitlesList_LA_PR                           : 	'Porteur',
	jobTitlesList_LA_RF                           : 	'Couvreur',
	jobTitlesList_LA_SC                           : 	'Collectionneur',
	jobTitlesList_LA_SR                           : 	'Préposé à l’expédition et à la réception',
	jobTitlesList_LA_WW                           : 	'Laveur de vitres',
	jobTitlesList_LA_OR                           : 	'Autre',

	// OFFICE STAFF
	jobTitlesList_OF_AM                           : 	'Directeur de comptes',
	jobTitlesList_OF_AR                           : 	'Commis aux comptes clients',
	jobTitlesList_OF_AA                           : 	'Adjoint administratif',
	jobTitlesList_OF_AP                           : 	'Estimateur',
	jobTitlesList_OF_BT                           : 	'Employé de banque',
	jobTitlesList_OF_BI                           : 	'Inspecteur des bâtiments',
	jobTitlesList_OF_CO                           : 	'Opérateur d’ordinateur',
	jobTitlesList_OF_CI                           : 	'Fonctionnaire',
	jobTitlesList_OF_CA                           : 	'Expert en sinistres',
	jobTitlesList_OF_CT                           : 	'Encaisseur',
	jobTitlesList_OF_CS                           : 	'Spécialiste des communications',
	jobTitlesList_OF_CR                           : 	'Représentant au service à la clientèle',
	jobTitlesList_OF_DO                           : 	'Opérateur de saisie de données',
	jobTitlesList_OF_DP                           : 	'Répartiteur',
	jobTitlesList_OF_ET                           : 	'Rédacteur',
	jobTitlesList_OF_ES                           : 	'Estimateur',
	jobTitlesList_OF_HR                           : 	'Ressources humaines',
	jobTitlesList_OF_IC                           : 	'Préposé à l’inventaire',
	jobTitlesList_OF_JL                           : 	'Journaliste',
	jobTitlesList_OF_LA                           : 	'Assistant juridique ',
	jobTitlesList_OF_LB                           : 	'Libraire',
	jobTitlesList_OF_PM                           : 	'Chef de projet',
	jobTitlesList_OF_RC                           : 	'Réceptionniste',
	jobTitlesList_OF_RT                           : 	'Recruteur',
	jobTitlesList_OF_TS                           : 	'Traducteur',
	jobTitlesList_OF_UW                           : 	'Souscripteur',
	jobTitlesList_OF_WD                           : 	'Concepteur Web',
	jobTitlesList_OF_OR                           : 	'Autre',

	jobTitlesList_ST                           	  : 	'Étudiant',
	
	// End
	
	// ---------- US3621 End ---------
	
		//................................................................
		//alex: end

	//PATLA: few spelling correction 1-23-14
	ProvincesList_null									:"Veuillez sélectionner...",
	ALBERTA												:"ALBERTA",
	BRITISH_COLUMBIA									:"COLOMBIE-BRITANNIQUE",
	MANITOBA											:"MANITOBA",
	NEW_BRUNSWICK										:"NOUVEAU-BRUNSWICK",
	NEWFOUNDLAND_LABRADOR								:"TERRE-NEUVE-ET-LABRADOR",
	NOVA_SCOTIA											:"NOUVELLE-ÉCOSSE",
	NORTHWEST_TERRITORIES								:"TERRITOIRES DU NORD-OUEST",
	NUNAVUT												:"NUNAVUT",
	ONTARIO												:"ONTARIO",
	PRINCE_EDWARD_ISLAND								:"ÎLE DU PRINCE-ÉDOUARD",
	QUEBEC												:"QUÉBEC ",
	SASKATCHEWAN										:"SASKATCHEWAN",
	YUKON												:"YUKON ",

	//ProgramsList
	ProgramsList_null									:"Veuillez sélectionner...",
		
	/* Old
	Program_BLANK										:"Magasin CT (Ontario et Ouest) – S.O.",
	Program_4012										:"Magasin CT (Québec et Atlantique) - 4021",
	Program_5200										:"Division Pétrolière CT - Est - Événement Essence - 5200",
	Program_4022										:"Division Pétrolière CT - Est - Local - 4022",
	Program_4024										:"Division Pétrolière CT - Ouest - Événement Essence- 4024",
	Program_4029										:"Division Pétrolière CT - Ouest - Local - 4029",
	Program_Other										:"Autres",
	BLANK												:"S.O.",
	ATTN 												:"ATTN1",
	*/
	
	// US3767
	Program_Intercept									:	'Intercept',
	Program_In_Store_Events								:	'Événements en magasin',
	Program_CTP_Events									:	'Événements DPCT',
	Program_CTP_Local									:	'Régional DCTP',
	
	PromoCodeList_null									: 	'Veuillez sélectionner...',
	PromoCode_Intecept									:	'Intercept',
	PromoCode_Grand_Opening								:	'Ouverture officielle',
	PromoCode_Other										:	'Autre',
	PromoCode_OMC_Days									:	'Journées carte MCO',
	PromoCode_Eastern_Events							:	'Programme d’événement de l’Est',
	PromoCode_Western_Events							:	'Programme d’événement de l’Ouest',
	PromoCode_Eastern_Local								:	'Programme régional de l’Est',
	PromoCode_Western_Local								:	'Programme régional de l’Ouest',
	
	// US3499 Marks Store
	Program_MW999										:"Magasin Marks",
	// For QC specific french change
	Program_MW999_QC									:"L'Equipeur",

	// Signature screen START ................................................................




	signatureScreen_Header                            :                         "En signant ci-dessous, je conviens de ce qui suit :",
	signatureScreen_License1                          :                         "Veuillez ouvrir un compte en mon nom pour la carte",
	signatureScreen_License1_1                        :                         " (la « carte ») ",
	// UAT 25 - Jul 22, CP Revitalization
    // Old code
    // signatureScreen_License1_2                        :                         " à un taux d'intérêt annuel de 19,99 % pour tous les types de débits (à l'exception des avances de fonds et des frais afférents) et de 21,99 % pour les avances de fonds et les frais afférents.",
	// signatureScreen_License2                          :                         "S'il ne vous est pas possible d'approuver ma demande de carte prévoyant un taux d'intérêt annuel de 21,99 % pour les avances de fonds et les frais afférents et un taux d'intérêt annuel de 19,99 % pour tous les autres types de débit, j'accepte que vous traitiez la présente demande comme s'il s'agissait d'une demande de carte à un taux d'intérêt annuel de 25,99 % pour tous les types de débit sans que vous n'ayez à m'en aviser spécifiquement.",
	signatureScreen_License1_2                        :                         " avec un taux d’intérêt annuel de 19,99 % pour tous les débits portés à mon compte, à l’exception des transactions au comptant et des frais afférents et un taux intérêt annuel de 22,99 % pour les transactions au comptant et les frais afférents.",
	signatureScreen_License2                          :                         "S'il ne vous est pas possible d'approuver ma demande de carte prévoyant un taux d'intérêt annuel de 22,99 % pour à des transactions au comptant et des frais afférents et un taux d'intérêt annuel de 19,99 % pour tous les autres types de débit, j'accepte que vous traitiez la présente demande comme s'il s'agissait d'une demande de carte à un taux d'intérêt annuel de 25,99 % pour tous les types de débit sans que vous n'ayez à m'en aviser spécifiquement.",
	signatureScreen_License3                          :                         "La carte est émise par la Banque Canadian Tire (la « BCT »).",
	signatureScreen_License4                          :                         "La Banque Canadian Tire peuvent procéder à la collecte, à l'utilisation et à la communication de renseignements personnels me concernant aux fins décrites dans « la politique en matière de protection des renseignements personnels de Canadian Tire », notamment à des fins de commercialisation et téléphone, dispositif de composition et d'annonce automatique ou toute autre forme de télécommunication.",
	signatureScreen_License5                          :                         "Je serai lié par les modalités du contrat du titulaire de carte de la Banque Canadian Tire que je recevrai avec la carte, lequel peut être modifié de temps à autre. Je serai la seule personne responsable de tous les débits imputés à ce compte, y compris ceux portés au compte par toute personne pour laquelle je vous ai demandé d'émettre une carte additionnelle. Je serai la seule personne qui recevra un relevé de compte mensuel.",
	signatureScreen_License6                          :                         "Vous pouvez obtenir des renseignements sur mes antécédents de crédit et d'autres renseignements personnels me concernant auprès d'agences d'évaluation du crédit et communiquer de tels renseignements à ces agences.",
	signatureScreen_License7                          :                         "Chaque personne pour laquelle je vous ai demandé d'émettre une carte additionnelle m'a autorisé à vous fournir les renseignements ci-dessus la concernant.",
	signatureScreen_License8                          :                         "Si je vous fournis mon numéro d'assurance sociale, vous pouvez l'utiliser à des fins d'identification, notamment auprès d'agences d'évaluation du crédit.",
	signatureScreen_License9                          :                         "J'ai lu et compris le texte figurant sur la présente demande de carte et ai reçu un document contenant des renseignements additionnels concernant cette demande.",

	signatureScreen_Reset_Button_Label                :                         "Éfface la Signature",

	signatureScreen_TermsAndConditions_AcceptBox      :                         "Je confirme avoir lu, compris et accepté les modalités présentées ci-dessus, lesquelles sont relatives à la carte ",

	signatureScreen_validation_acceptAgreement        :                         "Veuillez accepter les modalités.",
	signatureScreen_validation_signature              :                         "Veuillez signer.",
	signatureScreen_validation_signDate               :                         "La date de signature n'est pas valide.",


	signatureScreen_WarningHeader              		  :   						"Veuillez lire attentivement",
	signatureScreen_WarningText1              		  :                         "En signant et en cochant la case ci-dessous, vous consentez à soumettre une demande pour la carte :",


	     // Signature screen END ................................................................

	     // Summary screen START ..............................................................
	summary_PageTitle                                 :                         "Veuillez vérifier et confirmer l'exactitude des renseignements fournis pour faciliter le traitement de votre demande!",
	summary_SubmitButton                              :                         "SOUMETTRE LA DEMANDE",
	summary_SubmitApplicationError                    :                         "La demande n'a pu être envoyée. Veuillez essayer de nouveau.",

	summary_Status_SubTitle                           :                         "ÉTAT : ",
	summary_Status_NotReady                           :                         "Non prêt",
	summary_Status_Ready                              :                         "Prêt",

	summary_SelectProduct_SubTitle                    :                         "Produit sélectionné",
	summary_SelectProduct_Card                        :                         "Carte",
	summary_SelectProduct_PromoCode                   :                         "Code promotionnel",
	summary_SelectProduct_Province                    :                         "Province",

	summary_TellAboutYourself_SubTitle                :                         "Identification du client",

	summary_TellAboutYourself_FirstName               :                         "Prénom",
	summary_TellAboutYourself_Initial                 :                         "Initiale",
	summary_TellAboutYourself_LastName                :                         "Nom de famille",
	summary_TellAboutYourself_DateOfBirth             :                         "Date de naissance",
	summary_TellAboutYourself_HomePhone               :                         "Téléphone (rés.)",
	summary_TellAboutYourself_CellPhone               :                         "Téléphone (cell.)",
	summary_TellAboutYourself_Correspondence          :                         "Langue de correspondance",

	summary_Address_SubTitle                          :                         "Adresse",

	summary_Address_PostalCode                        :                         "Code postal",
	summary_Address_StreetNumber                      :                         "Numéro d'Adresse ",
	summary_Address_StreetName                        :                         "Rue",
	summary_Address_AddressLine2                      :                         "Ligne d'Addresse 2",
	summary_Address_SuiteUnit                         :                         "App. / Bureau / Unité ",
	summary_Address_City                              :                         "Ville",
	summary_Address_Province                          :                         "Province",

	summary_Address_ResidenceType                     :                         "Type de résidence ",
	summary_Address_MonthlyHousePayment               :                         "Hypothèque / Loyer mensuel ",
	summary_Address_DurationCurrentAddress            :                         "Depuis combien de temps habitez-vous à votre adresse actuelle?",

	summary_PreviousAddress_SubTitle                  :                         "Ancienne adresse",

	summary_FinEmp_SubTitle1                          :                         "Renseignements financiers et ",
	summary_FinEmp_SubTitle2                          :                         "professionnel",
	summary_FinEmp_BankingProducts                    :                         "Sélectionnez les produits bancaires que vous utilisez actuellement.",

	summary_FinEmp_EmploymentType                     :                         "Type d'emploi",
	// US3960
	// summary_FinEmp_GrossAnnualIncome                  :                         "Revenu annuel brut",	// Old
	summary_FinEmp_GrossAnnualIncome                  :                         "Revenu Annuel Personnel Brut",
	summary_FinEmp_GrossAnnualHouseholdIncome         :                         "Revenu Annuel Brut Du Ménage",
	
	summary_FinEmp_SIN                                :                         "Numéro d'assurance sociale",

	summary_FinEmp_JobTitle                           :                         "Titre du poste",
	summary_FinEmp_JobCategory                        :                         "Catégorie d'emploi",
	summary_FinEmp_EmpName                            :                         "Nom de l'employeur",
	summary_FinEmp_EmpCity                            :                         "Ville de l'employeur",
	summary_FinEmp_EmpProvince                        :                         "Province de l'employeur",
	summary_FinEmp_EmpPhone                           :                         "Numéro de téléphone de l'employeur",
	summary_FinEmp_DurationCurrentEmp                 :                         "Durée de l'emploi actuel",

	summary_SupCard_SubTitle                          :                         "Renseignements sur la carte additionnelle",
	summary_SupCard_OptedIn                           :                         "Carte additionnelle",
	summary_SupCard_ForWhom                           :                         "Carte additionnelle pour",
	summary_SupCard_Telephone                         :                         "Téléphone",

	summary_SupCard_Address_SubTitle                  :                         "Adresse",
	summary_SupCard_Address_PostalCode                :                         "Code postal",
	summary_SupCard_Address_StreetNumber              :                         "Numéro d'Adresse",
	summary_SupCard_Address_StreetName                :                         "Rue",
	summary_SupCard_Address_AddressLine2              :                         "Ligne d'Addresse 2",
	summary_SupCard_Address_SuiteUnit                 :                         "App. / Bureau / Unité",
	summary_SupCard_Address_City                      :                         "Ville",

	summary_OptProds_ProductSelected				  :	                        "Article sélectionné",
	summary_OptProds_ProdName_PA					  :	                        "Avantage protection",
	summary_OptProds_ProdName_CP					  :	                        "Couverture-crédit",
	summary_OptProds_ProdName_IW					  :	                        "Surveillance d'identité classique",
	summary_OptProds_ProdName_NA					  :	                        "Aucun",

	summary_OptProds_Signature                        :                         "Signature",
	summary_OptProds_Accept                           :                         "Modalités acceptées",
	summary_OptProds_SignDate                         :                         "Date de signature",


	summary_Signature_SubTitle                        :                         "Signature",
	summary_Signature_Signature                       :                         "Signature",
	summary_Signature_Accept                          :                         "Modalités acceptées",
	summary_Signature_SignDate                        :                         "Date de signature",
	summary_Years                                     :                         "Années",
	summary_Months                                    :                         "Mois",

	summary_submitError                               :                         "Malheureusement, votre demande n'a pu être envoyée Aucune tentative d'envoi supplémentaire ne sera permise. Veuillez abandonner la demande en cours et remplir un formulaire imprimé de demande. Nous sommes désolés de cet inconvénient.",
	summary_submitInitError							  :							"Malheureusement, la demande ne pouvait pas être soumise en raison d'un problème de back-end. S'il vous plaît essayer à nouveau.",

	summary_dataIntegrity_Error						  :						    "Malheureusement, la demande ne pouvait pas être soumise en raison d'un problème interne. S'il vous plaît essayer à nouveau.",

    summary_TellAboutYourself_ApplicantInfo			  :                         "Renseignement sur le demandeur",
    summary_highlighter_SubTitle                      :                         "Votre demande doit être vérifiée par un représentant du magasin Canadian Tire.",
	summary_highlighterHeader                         : 				        "IMPORTANT",
	//US3556
    summary_marks_highlighter_SubTitle				  :							"Votre demande doit être vérifiée par un représentant du magasin L'Équipeur.",
		// Summary screen END ................................................................

		// Print screen START ..............................................................


	printScreen_Title                                 :                         "Demande Complète",
	printScreen_SubTitle                              :                         "Merci de demander la",
	printScreen_Button_Label                          :                         "Imprimer à nouveau",

	printScreen_TokenLabel								: 						"Reference&nbsp;#&nbsp;",
	
	printScreen_UnknownStatus                         :                         "État de demande inconnu",
	printScreen_ApplicationApproved                   :                         "Votre demande a été APPROUVÉE.",
	printScreen_ApplicationDeclined                   :                         "Malheureusement, la réponse à votre demande n'a pu être traitée. Veuillez vérifier votre courrier régulièrement.",

    printerSetupDialog_macLabel                       :   						"Adresse MAC de l'imprimante:",
    printerSetupDialog_ie                             :   						"Par exemple:",
    printerSetupDialog_yes                            :                         "Faites une demande",
	printerSetupDialog_no                             :                         "Annuler",

	printResponseStatusTitle                          :                         "Imprimer la confirmation",
	printResponseStatusMsg                            :                         "La réponse s'est-elle imprimée?",
	printResponseStatus_StartNewApplication_Button    :                         "Commencer une nouvelle demande",
    printResponseStatus_LogOut_Button		          :                     	"Déconnexion",

    scanDialog_yes                                      :   "Continuer",
    scanDialog_holdText                                       :   "Tenez la pièce d'identité à scanner derrière la tablette, tel qu'illustré ci-dessus pour que le code à barres soit dans le champ de vision de la caméra. Le scannage se fera automatiquement. Si vous entendez le signal sonore, le scannage a été effectué. L'application se fermera et vous serez réacheminé à la page en cours.",
    scanDialog_pressText                                       :   "Appuyez sur Continuer pour passer à Scanner Permis de Conduire",

	print_StartNewApplicationMessage                  :                         "Êtes-vous certain(e) de vouloir commencer une nouvelle demande?",
	confirmDialogPritTest_Message                     :                         "Voulez-vous procéder à un test d'impression?",
	testPrintStatusMsg                                :                         "La page de test s'est-elle imprimée?",

	// Print screen END ..............................................................

	// Pending screen START
	pendingScreen_ThankYou 								: 	"Nous vous remercions d'avoir présenté une demande de carte ",
	pendingScreen_TokenLabel							: 	"N<sup>o</sup> de référence",
	pendingScreen_PhoneNumberLabel						:	"Téléphone",
	
	pendingScreen_Retrieve_InvocationMessage 			: 	"Vous avez choisi de récupérer une demande. Les renseignements saisis sur votre demande actuelle ne pourront pas être conservés et seront supprimés définitivement. Voulez-vous continuer?",
	pendingScreen_Retrieve_Title 						: 	"Récupérer une demande en cours",

	pendingScreen_Check60 								: 	"fr_We'll check again in 60 seconds (Attempt ",
	pendingScreen_CheckXXSeconds_Text1					: 	"Nous revérifierons l'état de votre demande dans ",
	pendingScreen_CheckXXSeconds_Text2					:	" secondes (tentative ",
	pendingScreen_OfAttemptYY_Text1						: 	"de ", 
	pendingScreen_OfAttemptYY_Text2						:	" )",
	
	pendingScreen_ParaBlock_PleaseWait					:	"Veuillez patienter pendant que votre demande est en cours de traitement.<br>Le traitement pourrait prendre 15 minutes.<br><br>",
	pendingScreen_Parablock_We_are_checking				:	"Nous vérifions l'état de votre demande…",
	pendingScreen_ParaBlock_IfYouShop					:	"<br><br>Si vous voulez magasiner pendant ce temps, vous pouvez imprimer votre numéro de référence en appuyant sur le bouton ci-dessous. Revenez dans 30 minutes pour connaître l'état de votre demande.",	

	pendingScreen_Label_RefGood30mins					: 	"(Veuillez noter : le n° de référence est valide pour 30 minutes seulement.)<br><br><br>",
	pendingScreen_ParaBlock_IfUnable					:	"<br><br>OU<br><br>Si vous ne pouvez pas attendre et que vous préférez recevoir par la poste une confirmation de l'état de votre demande, appuyez sur le bouton ci-dessous.<br>",
	pendingScreen_ParaBlock_NoteDays					:	"Veuillez noter : vous devez prévoir 7 à 10 jours avant de recevoir la confirmation.<br><br><br>",
	
	
	pendingScreen_PrintButtonLabel 						: 	"<span style='font-size:16px'>IMPRIMER N° DE RÉFÉRENCE ET VÉRIFIER LA DEMANDE DANS 30 MINUTES</span>",
	pendingScreen_EmailButtonLabel 						: 	"<span style='font-size:16px'>ENVOYER CONFIRMATION PAR LA POSTE</span>",
	pendingScreen_PrintToken_Error						:	"Malheureusement, votre numéro de référence n'a pas pu être imprimé. Veuillez réessayer.",
	pendingScreen_CheckAppStatusLabel 					: 	"VÉRIFIER L'ÉTAT DE LA DEMANDE",

	pendingScreen_RetrieveFailed						:	"La demande ne peut être repérée. Veuillez réessayer.",
	// US3436
	pendingScreen_ApplicationPending				  	:	"Nous vous remercions de votre patience. Votre demande est encore à l’étude par notre équipe du service à la clientèle. Veuillez revenir dans 30 minutes.",
	
	// Pending screen end

	//Added by DPS ***************************
    //OMC_LEGAL
    legal_omc_first_chapter								: "<sup>1</sup> Terms, conditions and restrictions apply. See program rules at canadiantire.ca or cffs.comictm for more details.Canadian Tire Options MasterCard cardmembers paying with their Options MasterCard collect e-Canadian Tire 'Money' at a rate that is 10X (or 2X as the case may be) the rate at which other members of the My Canadian Tire 'Money' program collect e-Canadian Tire 'Money' on purchases made by such other members at Canadian Tire stores (if those other members paid by cash, debit or a credit card not linked to this loyalty program). The offered rate is exclusive of any bonus, or promotional offers or redemption transactions.",
    legal_omc_second_chapter 							: "<sup>2</sup> Minimum fuel purchase required. Rate may vary by location. See local gas bars for details.",
    /*
    legal_omc_third_chapter 							: "&dagger;  Frais d'avances de fonds : 4,00 $. Les frais d'intérêt sont imputés à compter de la date d'obtention de l'avance jusqu'à la date du remboursement de celle-ci et de tous les intérêts courus.",
    */
    legal_omc_fives_chapter 							: "<span class=\"MDMC\"><sup></sup></span> Sauf indication contraire, toutes les marques de commerce sont déposées par La Société Canadian Tire Limitée et sont utilisées sous licence." +
                                                          "<br><span class=\"MDMC\"><sup></sup></span> Sport Chek est une marque de commerce déposée de FGL Sports ltée." +
                                                          "<br><span class=\"MDMC\"><sup></sup></span> Mark's/L'Équipeur est une marque de commerce déposée de Mark's Work Warehouse Ltd.",    
    legal_omc_sixth_chapter 							: "<span class=\"MDMC\"><sup></sup></span> MasterCard, la marque figurative de MasterCard, MasterCard SecureCode et Cirrus sont des marques de commerce déposées de MasterCard International Incorporated.",
    //OMP_LEGAL
	legal_omp_first_chapter 							: "Selon le montant net des nouveaux achats (achats moins crédits) portés à votre compte MasterCard Avantage Essence au cours de toute période de facturation mensuelle, vous serez admissible à un rabais sur chaque litre d'essence ou de carburant diesel acheté pour un véhicule automobile dans un poste d'essence Canadian Tire au cours de la période de facturation mensuelle suivante et payé avec votre carte MasterCard Avantage Essence.",
	// US3997 
	legal_omp_second_chapter							: "Le rabais que vous obtenez au cours d'une période de facturation donnée sera ramené à 2 ¢ le litre dès que le total des achats d'essence, de carburant diesel et d'articles divers effectués dans les postes d'essence Canadian Tire et réglés avec votre carte MasterCard Avantage Essence <b>À partir du 2 mai 2016, après avoir effectué 500&nbsp; $ ou plus d’achats dans un poste d’essence Canadian Tire, le rabais passera à 2 ¢ par litre</b> dépassera la somme de 700&nbsp;$ au cours de cette période de facturation. Pour connaître les modalités, consultez le feuillet promotionnel sur la carte MasterCard Avantage Essence ou rendez-vous à l'adresse ctfs.com/avantageessence.",
	legal_omp_third_chapter 							: " En Nouvelle-Écosse, le rabais est accordé à la caisse. Il en va de même lorsqu'un distributeur d'essence n'offre pas de facilités de paiement.",
	legal_omp_fourth_chapter							: " Frais d'avances de fonds : 4,00 $. Les frais d'intérêt sont imputés à compter de la date d'obtention de l'avance jusqu'à la date du remboursement de celle-ci et de tous les intérêts courus.",
	legal_omp_fives_chapter 							: "   Couverture-crédit est souscrite auprès de American Bankers, Compagnie d'Assurance Vie de la Floride, et American Bankers, Compagnie d'Assurances Générales de la Floride, filiales de Assurant Solutions<span class=\"MD\"><sup></sup></span>.",
	// US3997	
	legal_omp_six_chapter 								: "&#8194;Lorsque votre demande de carte MasterCard Avantage Essence est approuvée, le rabais de 5 ¢ par litre entrera en vigueur à la date d’ouverture de votre compte et sera valide pendant 30 jours (« le premier mois »). Après le premier mois, votre rabais sera basé en fonction du montant net des nouveaux achats (achats moins crédits) portés à votre compte MasterCard Avantage Essence au cours du premier mois, plus un rabais supplémentaire de 3 ¢ par litre, pour un rabais d’une valeur minimum de 5 ¢ par litre pendant la nouvelle période de 30 jours (« le deuxième mois »).  Le rabais de 3 ¢ supplémentaire ne sera valable que pour une transaction par jour, par compte, cartes additionnelles incluses.  Par exemple, si le montant net des nouveaux achats inscrits à votre compte est entre :  0 $ et 499,99 $ le premier mois, votre rabais sur chaque litre d’essence restera de 5 ¢ pour le deuxième mois; 500 $ et 999,99 $ le premier mois, votre rabais sur chaque litre d’essence sera de 8 ¢ le deuxième mois; 1 000 $ et 1 999,99 $ le premier mois, votre rabais sur chaque litre d’essence sera de 11 ¢ le deuxième mois; 2 000 $ et plus le premier mois, votre rabais sur chaque litre d’essence sera de 13 ¢ le deuxième mois.  Cette prime d’activation est valide pour un achat d’essence par jour pendant la période promotionnelle. À compter de la fin du deuxième mois, le rabais admissible auquel vous aurez droit sera celui indiqué sur votre relevé de compte mensuel. En ce moment, le rabais est ramené à 2 ¢ le litre dès que le total des achats effectués dans les postes d’essence Canadian Tire dépasse 700 $. <b>À partir du 2 mai 2016, après avoir effectué 500 $ ou plus d’achats dans un poste d’essence Canadian Tire, le rabais passera à 2 ¢ par litre.</b>",
	legal_omp_seven_chapter 							: "<span class=\"MDMC\"><sup></sup></span> Sauf indication contraire, toutes les marques de commerce sont la propriété de la Société Canadian Tire Limitée et sont utilisées sous licence.",
	// Old code
	// legal_omp_eight_chapter 							: "<span class=\"MDMC\"><sup></sup></span> Couverture-crédit est une marque de commerce déposée des Services Financiers Canadian Tire Limitée.",
	legal_omp_eight_chapter 							: "<span class=\"MDMC\"><sup></sup></span> Couverture-crédit est une marque de commerce déposée des Banque Canadian Tire.",
	// Old line
	// legal_omp_nine_chapter 								: "<span class=\"MDMC\"><sup></sup></span> MasterCard, la marque figurative de MasterCard, Cirrus et SecureCode sont des marques de commerce déposées et PayPass est une marque de commerce de MasterCard International Incorporated.",
	// legal_omp_nine_chapter 								: "<span class=\"MDMC\"><sup></sup></span> MasterCard et la marque figurative de MasterCard sont des marques de commerce déposées de MasterCard International Incorporated.",
	legal_omp_nine_chapter 								:  "MasterCard, la marque figurative de MasterCard et MasterCard SecureCode sont des marques de commerce déposées de MasterCard International et sont utilisées sous licence.",
	
	// US3766
	// OMR_LEGAL
	legal_omr_first_chapter 							: "<sup>*</sup> Les primes annuelles seront utilisées pour réduire le solde servant au calcul du paiement minimum, mais elles ne réduiront pas le solde utilisé pour le calcul des frais d’intérêts ni des primes d’assurance basées sur le solde. D’autres conditions s’appliquent.",
	legal_omr_second_chapter 							: "<sup>&dagger;</sup> Certaines conditions s’appliquent. Pour obtenir de plus amples renseignements, consultez les modalités du programme de primes.",
	legal_omr_third_chapter 							: "<sup>&dagger;</sup><sup>&dagger;</sup> Pour obtenir la prime spéciale de remise en argent, vous devez régler un achat dans un magasin Canadian Tire à la date indiquée en utilisant votre numéro de compte MasterCard Avantage Remise. Vous pouvez aussi effectuer un achat dans un magasin Canadian Tire dans les 45 jours qui suivent la réception de votre carte. Après qu’un achat admissible aura été inscrit à votre compte, la prime spéciale en argent sera ajoutée à votre compte de primes au plus tard à la date de votre troisième relevé de compte suivant l’inscription de la transaction, à la condition que votre compte soit en règle.",
	legal_omr_four_chapter	 							: "<span class=\"MDMC\"><sup></sup></span> Sauf indication contraire, toutes les marques de commerce sont la propriété de La Société Canadian Tire Limitée et sont utilisées sous licence. ",	
	legal_omr_five_chapter 								: "Couverture-crédit est souscrite par American Bankers Compagnie d’Assurance Vie de la Floride et d’American Bankers Compagnie d’Assurance Générale de la Floride. American Bankers Compagnie d’Assurance Vie, American Bankers Compagnie d’Assurance générale, leurs filiales et sociétés affiliées, exercent des activités au Canada sous le nom de Assurant Solutions<span class=\"MD\"><sup></sup></span>. ",
	legal_omr_six_chapter 								: "<span class=\"MD\"><sup></sup></span> Assurant Solutions est une marque de commerce déposée de Assurant, Inc.",
	legal_omr_seven_chapter 							: "<span class=\"MDMC\"><sup></sup></span> Couverture-crédit est une marque de commerce déposée de la Banque Canadian Tire.",
	legal_omr_eight_chapter 							: "<sup>1</sup> La couverture d’assurance est offerte sous réserve des modalités, des limitations, des exclusions et des restrictions décrites dans le certificat d’assurance. Cette couverture d’assurance est offerte aux titulaires de cartes âgés d’au moins 18 ans et de moins de 76 ans. La couverture maximale offerte est de 20 000 $.",
	legal_omr_nine_chapter 								: "<span class=\"MDMC\"><sup></sup></span> MasterCard, la marque figurative de MasterCard, MasterCard SecureCode et Cirrus sont des marques de commerce déposées de MasterCard International Incorporated.",	
	
	// OMC
    omc_first_chapter 								    : "UNE FAÇON PLUS RAPIDE D'OBTENIR DE L'« ARGENT » CANADIAN TIRE",
    omc_second_chapter 								    : "Demandez la carte MasterCard Options de Canadian Tire dès aujourd'hui. C'est une façon plus rapide d'obtenir de l'« Argent » Canadian Tire.<br> Utilisez tout simplement la carte partout où vous magasinez – elle est acceptée dans le monde entier par des millions de commerçants.",


    omc_fourth_chapter_ectm                             : "<b>Obtenez <span class='RedLabel'>10X</span></b> les primes en « @rgent » Canadian Tire tous les jours<sup>1</sup> dans les magasins Canadian Tire, y compris dans les centres-autos.",
    omc_fives_chapter_ectm                              : "<b>Obtenez <span class='RedLabel'>10X</span></b> les primes en « @rgent » Canadian Tire tous les jours dans les magasins Sport Chek<span class=\"MD\"><sup></sup></span>, Mark's<span class=\"MD\"><sup></sup></span> / L'Équipeur<span class=\"MD\"><sup></sup></span>, PartSource<span class=\"MD\"><sup></sup></span>, et sur les Services résidentiels Canadian Tire<span class=\"MD1\"><sup></sup></span>",
    omc_sixt_chapter_ectm                               : "<b>Obtenez</b> de l'« @rgent » Canadian Tire dans les postes d'essence Canadian Tire participants<sup>2</sup>.",
    omc_seventh_chapter_ectm                            : "<b>Obtenez <span class='RedLabel'>2X</span></b> l'« @rgent » Canadian Tire partout ailleurs où vous magasinez<sup>1</sup>.",

    omc_eight_chapter 								    : "De plus, vous profiterez des avantages offerts aux titulaires de carte :",
    omc_nine_chapter 									: "<b><i>PayPass</i><span class=\"MD\"><sup></sup></span></b> – passez à la caisse plus rapidement",
    omc_ten_chapter 									: "Sécurité accrue grâce à la technologie des puces",
    omc_eleven_chapter 									: "Accès à votre compte en ligne et offres exclusives par courriel",
    omc_twelve_chapter									: "Acceptation dans les millions d'établissements dans le monde qui acceptent la carte MasterCard",
    omc_13_chapter 										: "Avances de fonds<sup>&dagger;</sup> à tout guichet automatique bancaire (GAB) affichant les logos MasterCard ou Cirrus",
    omc_14_chapter 										: "Aidez à protéger votre compte grâce aux puissants outils de protection.",
    omc_15_chapter 										: "SecureCode de MasterCard<span class=\"MD\"><sup></sup></span>",
    omc_16_chapter 										: "Service à la clientèle ouvert 24 heures sur 24 en cas de perte ou de vol de votre carte. Composez le 1 800 459-6415 (à l'extérieur du Canada et des États-Unis, composez le 905 735-7256; nous acceptons les frais).",
	// OMP
    // US3997
    omp_1_chapter 										: "PRIME! Économisez au moins 5 ¢ le litre dans les 60 premiers jours<sup>2</sup>",
	omp_2_chapter 										: "C'est facile d'économiser au moins 2 ¢ et jusqu'à 10 ¢* sur chaque litre d'essence acheté dans un poste d'essence Canadian Tire. Vous n'avez qu'à utiliser la carte MasterCard<span class=\"MD\"><sup></sup></span> Avantage Essence<span class=\"MD\"><sup></sup></span> pour vos achats de tous les jours et vous économiserez instantanément, directement au distributeur<sup>&dagger;</sup>!            ",
	omp_3_chapter 										: "Voyez comme c'est facile :",
	omp_4_chapter 										: "1. Insérez la carte dans le lecteur du distributeur d'essence<sup>&dagger;</sup><br>2. Voyez le prix du litre baisser INSTANTANÉMENT<br>3. Économisez jusqu'à 10 ¢ le litre.",
	omp_5_chapter 										: "En Nouvelle-Écosse, le rabais est accordé à la caisse. Il en va de même lorsqu'un distributeur d'essence n'offre pas de facilités de paiement.",
	omp_6_chapter 										: "De plus, profitez de tous les avantages de la carte MasterCard.",
	omp_7_chapter 										: "Acceptation dans des millions d'établissements au monde.",
	omp_8_chapter 										: "Avances de fonds<sup>&dagger;&dagger;</sup> dans n'importe quel guichet automatique bancaire (GAB) affichant le logo MasterCard ou Cirrus.",
	omp_9_chapter 										: "Consultation GRATUITE du compte à l'adresse ctfs.com/moncompteenligne                ",
	omp_10_chapter 										: "Cartes supplémentaires SANS FRAIS en appelant au 1 800 459-6415.",
	omp_11_chapter 										: "Service à la clientèle 24 heures sur 24 en cas de perte ou de vol de carte. Composez le 1 800 459-6415 (à l'extérieur du Canada et des États-Unis, composez le 905 735-7256; nous acceptons les frais).",
	omp_12_chapter 										: "Trois façons de payer votre compte : dans les magasins Canadian Tire, à votre banque et par la poste. Consultez le Guide des avantages ou le verso de votre relevé de compte pour obtenir de plus amples renseignements.",
	omp_13_chapter 										: "Protection de votre carte lors des transactions en ligne grâce à SecureCode de MasterCard.",
	omp_14_chapter 										: "Vous pouvez aussi aider à protéger votre carte :",
	// Old code
	// omp_15_chapter 										: "Couverture-crédit",
	omp_15_chapter 										: "Couverture-crédit<sup class=\"superscripts\">MD1</sup>",
	//OMR
	// omr_1_chapter 										: "Profitez des avantages suivants à titre de titulaire de carte :",
	
	omr_1_chapter 										: "Obtenez une prime SPÉCIALE de 6 $ de remise en argent<sup>&dagger;</sup><sup>&dagger;</sup>",
	omr_1_1_chapter 									: "Utilisez votre numéro de compte aujourd’hui dans un magasin Canadian Tire OU dans un magasin Canadian Tire dans les 45 jours qui suivent la réception de votre carte pour recevoir votre prime spéciale. ",  
	omr_1_2_chapter										: "<b>Combien puis-je accumuler :</b><br>" ,
	omr_2_chapter 										: "<b>Obtenez jusqu'à 1,5 %<sup>&dagger;</sup> de remise</b> en argent sur tous les achats admissibles.",
	omr_3_chapter 										: "<b>Obtenez jusqu'à 3 %<sup>&dagger;</sup> de remise</b> en argent sur les achats effectués dans les magasins et les postes d'essence Canadian Tire et dans les magasins L'Équipeur / Mark's Work Wearhouse.",
	omr_4_chapter 										: "Obtenez des remises illimitées et ne payez aucuns frais annuels.",
	omr_5_chapter 										: "<b>La remise en argent est versée automatiquement</b> dans votre compte chaque année*",
	
	// US3766 - Start	
	omr_6_chapter 										: "De plus, profitez de tous les avantages de la carte MasterCard.",
	omr_7_chapter 										: "<b>Acceptation dans</b> des millions d'établissements au monde.",
	omr_8_chapter 										: "<b>Avances de fonds</b><sup>&dagger;&dagger;</sup> dans n'importe quel guichet automatique bancaire (GAB) affichant le logo MasterCard ou Cirrus.",
	omr_9_chapter 										: "<b>Consultation GRATUITE du compte</b> à l'adresse ctfs.com/moncompteenligne                ",
	omr_10_chapter 										: "<b>Cartes supplémentaires SANS FRAIS</b> en appelant au 1 800 459-6415.",
	omr_11_chapter 										: "<b>Service à la clientèle 24 heures</b> sur 24 en cas de perte ou de vol de carte. Composez le 1 800 459-6415 (à l'extérieur du Canada et des États-Unis, composez le 905 735-7256; nous acceptons les frais).",
	omr_12_chapter 										: "<b>Trois façons de payer votre compte :</b> dans les magasins Canadian Tire, à votre banque et par la poste. Consultez le Guide des avantages ou le verso de votre relevé de compte pour obtenir de plus amples renseignements.",
	omr_13_chapter 										: "Protection de votre carte lors des transactions en ligne grâce à <b>SecureCode de MasterCard</b>.",
	omr_14_chapter 										: "<b>Aide à régler le solde impayé ou à effectuer des paiements mensuels sur votre carte MasterCard<sup>1</sup> émise par la Banque Canadian Tire</b>",
	omr_15_chapter 										: "Couverture-crédit<sup class=\"superscripts\">MD1</sup>",	
	// End
	
	//******************************************
	// personalData_ReceiveEmail					        : "J'aimerais recevoir des renseignements sur les offres, promotions, concours, cadeaux, événements, coupons et autres renseignements ayant trait aux produits et services qui pourraient m'intéresser, par courriel, messagerie texte (sous réserve des frais standards de données et de messagerie texte) et autre messagerie électronique de La Société Canadian Tire Limitée (la « Société Canadian Tire »), des Services Financiers Canadian Tire Limitée (les « SFCT »), de la Banque Canadian Tire (la « BCT »), y compris de leurs divisions commerciales respectives exploitées en vertu des marques Canadian Tire, du programme de primes en « Argent » Canadian Tire (ou du programme Avantage « Argent » Canadian Tire si vous résidez en Nouvelle-Écosse), de l'Académie des conducteurs de Canadian Tire<span class=\"superscripts\"><sup>MD</sup></span>, des Services résidentiels de Canadian Tire<span class=\"superscripts\"><sup>MC</sup></span> et de l'Assistance routière Canadian Tire<span class=\"superscripts\"><sup>MD</sup></span>, ainsi que d'autres membres du groupe de la Société Canadian Tire, des SFCT et de la BCT ou de leurs partenaires de marketing. Vous pouvez communiquer avec la Société Canadian Tire, les SFCT et la BCT à la C.P. 2000, Welland (Ontario)  L3B 5S3 ou à l'adresse customerservice@canadiantire.ca. Je comprends que je peux retirer mon consentement en tout temps.",
	personalData_ReceiveEmail					        : "J’aimerais recevoir des renseignements sur les offres, promotions, concours, cadeaux, événements, coupons et autres renseignements ayant trait aux produits et services qui pourraient m’intéresser, par courriel, messagerie texte (sous réserve des frais standard de données et de messagerie texte) et autre messagerie électronique de la Société Canadian Tire Limitée (la « Société Canadian Tire »), de la Banque Canadian Tire (les « SFCT ») et des Services Canadian Tire (les « SCT »), y compris de leurs divisions commerciales respectives exploitées en vertu des marques Canadian Tire, du programme Mon « Argent » Canadian Tire, de l’Académie des conducteurs de Canadian Tire<span class=\"MD\"><sup></sup></span>, des Services résidentiels de Canadian Tire<span class=\"MD\"><sup></sup></span> et de l’Assistance routière Canadian Tire<span class=\"MD\"><sup></sup></span>, ainsi que d’autres membres du groupe de la Société Canadian Tire, des SFCT et des SCT ou de leurs partenaires de marketing. Vous pouvez communiquer avec la Société Canadian Tire, les SFCT et les SCT à la C.P. 2000, Welland (Ontario) L3B 5S3 ou à l'adresse serviceclientele@canadiantire.ca. Je comprends que je peux retirer mon consentement en tout temps.",
	
	personalData_Yes									: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Oui&nbsp;&nbsp;&nbsp;",
	personalData_No								    	: "&nbsp;&nbsp;&nbsp;Non&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
	personalData1_validation_ReceiveEmail				:"Sélectionnez intérêt légitime par e-mail",
	summary_TellAboutYourself_Email_Consent             : "e-mail marketing consentement?",
	signature_OptionsMasterCard 					    : "MasterCard<sup style='font-size: .5em;'>MD</sup> Options<sup style='font-size: .5em;'>MD</sup> de Canadian Tire",
	signature_GasAdvantageMasterCard 					: "MasterCard Avantage Essence",
	signature_CashAdvantageMasterCard					: "MasterCard Avantage Remise",
	omc_first_chapter_ectm                              : "UNE FAÇON PLUS RAPIDE D'OBTENIR DE L'« ARGENT » CANADIAN TIRE<sup>1</sup>",
    omc_second_chapter_ectm								: "Demandez la carte MasterCard Options de Canadian Tire dès aujourd'hui. C'est une façon plus rapide d'obtenir de l'« Argent » Canadian Tire. Utilisez tout simplement la carte partout où vous magasinez – elle est acceptée dans le monde entier par des millions de commerçants.",


    legal_omc_first_chapter_ectm                        : "<sup>1</sup> Sous réserve de certaines modalités, conditions et restrictions. Consultez les modalités du programme à l'adresse canadiantire.ca ou ctfs.com/act pour en savoir plus. Les titulaires de carte MasterCard Options de Canadian Tire qui règlent leurs achats avec cette dernière obtiennent de l'« Argent » Canadian Tire à un taux qui est 10X (ou 2X, selon le cas) le taux auquel les autres membres du programme Mon « Argent » Canadian Tire obtiennent de l'« Argent » Canadian Tire<span class=\"MC\"><sup></sup></span> lors d'achats effectués par ces membres dans les magasins Canadian Tire (si ces membres payent en argent comptant ou avec une carte de débit ou une carte de crédit qui n'est pas liée à ce programme de fidélisation). Le taux offert est exclusif de toute prime, offre promotionnelle ou transaction d'échange.",
    legal_omc_second_chapter_ectm                       : "<sup>2</sup> Un montant d'achat d'essence minimum peut être requis. Le taux peut varier d'un poste d'essence à l'autre. Rendez-vous au poste d'essence local pour en savoir plus.",
    personalData_CTMField                               : "Numéro de compte Mon « Argent » Canadian Tire<span class=\"MC\"><sup></sup></span>",
    personalData_CTMAccountText                         : "Veuillez entrer votre numéro de compte Mon « Argent » Canadian Tire si vous êtes déjà membre du programme. Si votre demande de carte de crédit est approuvée, votre compte Mon « Argent » Canadian Tire sera associé à votre nouvelle carte MasterCard<span class=\"MD\"><sup></sup></span> Options<span class=\"MD\"><sup></sup></span> de Canadian Tire. Un numéro de compte Mon « Argent » Canadian Tire vous sera attribué si vous laissez ce champ vide.",
    // personalData_ReceiveEmail                           : "J'aimerais recevoir des renseignements sur les offres, promotions, concours, cadeaux, événements, coupons et autres renseignements ayant trait aux produits et services qui pourraient m'intéresser, par courriel, messagerie texte (sous réserve des frais standards de données et de messagerie texte) et autre messagerie électronique de La Société Canadian Tire Limitée (la « Société Canadian Tire »), des Services Financiers Canadian Tire Limitée (les « SFCT »), de la Banque Canadian Tire (la « BCT »), y compris de leurs divisions commerciales respectives exploitées en vertu des marques Canadian Tire, du programme Mon « Argent » Canadian Tire, de l'Académie des conducteurs de Canadian Tire<span class=\"MD\"><sup></sup></span>, des Services résidentiels de Canadian Tire<span class=\"MD\"><sup></sup></span> et de l'Assistance routière Canadian Tire<span class=\"MD\"><sup></sup></span>, ainsi que d'autres membres du groupe de la Société Canadian Tire, des SFCT et de la BCT ou de leurs partenaires de marketing. Vous pouvez communiquer avec la Société Canadian Tire, les SFCT et la BCT à la C.P. 2000, Welland (Ontario)  L3B 5S3 ou à l'adresse serviceclientele@canadiantire.ca. Je comprends que je peux retirer mon consentement en tout temps.",
    // UAT 25 - Jul 22, CP Revitalization
    // Old code
    // signatureScreen_License2                            : "<b>S'il ne vous est pas possible d'approuver ma demande de carte prévoyant un taux d'intérêt annuel de 21,99 % pour les avances de fonds et les frais afférents et un taux d'intérêt annuel de 19,99 % pour tous les autres types de débit, j'accepte que vous traitiez la présente demande, sans que vous ayez à m'en aviser spécifiquement, comme s'il s'agissait d'une demande de carte à un taux d'intérêt annuel de 25,99 % pour tous les types de débit, à l'exclusion des avances de fonds et des frais afférents pour lesquels le taux d'intérêt annuel sera de 27,99 %.</b>",
    signatureScreen_License2                            : "<b>S'il ne vous est pas possible d'approuver ma demande de carte prévoyant un taux d'intérêt annuel de 22,99 % pour à des transactions au comptant et des frais afférents et un taux d'intérêt annuel de 19,99 % pour tous les autres types de débit, j'accepte que vous traitiez la présente demande, sans que vous ayez à m'en aviser spécifiquement, comme s'il s'agissait d'une demande de carte à un taux d'intérêt annuel de 25,99 % pour tous les types de débit, à l’exception des transactions au comptant et des frais afférents pour lesquels le taux d'intérêt annuel sera de 27,99 %.</b>",
    signatureScreen_License3                            : "La carte est émise par la Banque Canadian Tire. Le programme Mon « Argent » Canadian Tire est fourni et administré par La Société Canadian Tire Limitée.",
    signatureScreen_License3_OMP						: "La carte est émise par la Banque Canadian Tire.",
    signatureScreen_License3_OMR						: "La carte est émise par la Banque Canadian Tire.",
    signatureScreen_License7a                           : "Je deviendrai automatiquement membre du programme Mon « Argent » Canadian Tire si je ne le suis pas déjà, même si ma demande de carte n'est pas approuvée.",
    signatureScreen_License7b                           : "Je serai lié par les modalités du programme Mon « Argent » Canadian Tire décrites à l'adresse canadiantire.ca ou ctfs.com/act.",

    // Old code
    // optionalProducts_ProtectionAdvantage_Text   		:	"<br><i>(non disponible pour les résidents de la Saskatchewan)</i><br>Adhésion à la fois à Couverture-crédit<span class=\"MD\"><sup></sup></span>** / Couverture-crédit – Âge d'or<span class=\"MD\"><sup></sup></span>** <strong>et</strong> Surveillance d'identité Classique<span class=\"MC\"><sup></sup></span>. Comprend la couverture et les avantages des deux produits facultatifs, comme indiqué précédemment.",
    // UAT 12 - CP Revitalization 
    // optionalProducts_ProtectionAdvantage_Text   		:	"<br><i>(non disponible pour les résidents de la Saskatchewan)</i><br>Adhésion à l’Assurance Couverture-crédit<span class=\"MD\"><sup></sup></span>  <strong>et</strong> au programme Surveillance d’identité Classique<span class=\"MC\"><sup></sup></span>. Comprend toute la couverture et les avantages des deux produits facultatifs énoncés ci-dessus.",
    
    optionalProducts_ProtectionAdvantage_Text   		:	"<br><i>(non disponible pour les résidents de la Saskatchewan)</i><br>Adhésion à l’Assurance Couverture-crédit<span class=\"MD\"><sup></sup></span>  <strong>et</strong> au programme Surveillance d’identité Classique<span class=\"MD\"><sup></sup></span>. Comprend toute la couverture et les avantages des deux produits facultatifs énoncés ci-dessus.",

    // Old code
    // optionalProducts_CreditProtector_Title				:	"Couverture-crédit<span class=\"MD\"><sup></sup></span>** et Couverture crédit – <i>Âge d'or</i><span class=\"MD\"><sup></sup></span>**",
    optionalProducts_CreditProtector_Title				:	"Assurance Couverture-crédit<span class=\"MD\"><sup></sup></span>",
	optionalProducts_CreditProtector_Text				:	"<br><i>(non disponible pour les résidents de la Saskatchewan)</i>",
    optionalProducts_CreditProtector_Additions          :   "*Taxes applicables en sus. Payable mensuellement. Veuillez consulter le document Renseignements juridiques ou votre Certificat d'assurance pour prendre connaissance de toutes les modalités, conditions, limites et exclusions. Certaines modalités s'appliquent." +
                                                            "<br>**Si vous êtes âgé de moins de 66 ans, vous adhérerez à Couverture-crédit. Si vous êtes âgé de 66 à 75 ans, vous adhérerez à Couverture-crédit – <i>Âge d'or</i>. Couverture-crédit est souscrite auprès de American Bankers, Compagnie d'Assurance Vie de la Floride et de American Bankers, Compagnie d'Assurances Générales de la Floride. Couverture-crédit – <i>Âge d'or<i> est souscrite auprès de American Bankers, Compagnie d'Assurance Vie de la Floride. American Bankers, Compagnie d'Assurance Vie de la Floride et American Bankers, Compagnie d'Assurances Générales de la Floride et leurs filiales et sociétés affiliées exercent des activités au Canada sous le nom d'Assurant Solutions<span class=\"MD\"><sup></sup></span>." ,
    // UAT 39 - Jul 22, CP Revitalization
    optionalProducts_TermsAndConditions25_Top           :   "<br><sup>&dagger;</sup><sup>&dagger;</sup> Ce sont des produits facultatifs offerts à tous les nouveaux titulaires de carte MasterCard émise par la Banque Canadian Tire. Les renseignements que vous fournissez sur la présente demande de carte sont utilisés pour déterminer votre admissibilité à l’obtention d’une carte MasterCard émise par la Banque Canadian Tire et non pour votre adhésion aux produits facultatifs, lesquels sont offerts à tous les titulaires de carte MasterCard émise par la Banque Canadian Tire." +
                                                            "<br><br><span class=\"MD\"><sup></sup></span>/<span class=\"MC\"><sup></sup></span> Sauf indication contraire, toutes les marques de commerce sont la propriété de La Société Canadian Tire Limitée et sont utilisées sous licence.",                                                                                                                                                                                   
    optionalProducts_TermsAndConditions25_CP			:	"<br><br><span class=\"MD\"><sup></sup></span>/<span class=\"MC\"><sup></sup></span> Couverture-crédit est une marque de commerce déposée des Banque Canadian Tire." +
    														"<br><br>Le programme Surveillance d’identité Classique est commandité par la Banque Canadian Tire et fourni par Fidélisation propriétaire Aimia Canada Inc." ,
    optionalProducts_TermsAndConditions25_Bottom		:	"<br><br>Retour<span class=\"MD\"><sup></sup></span> et iPiP sont des marques de commerce déposées de Fidélisation propriétaire Aimia Canada Inc." +
                                                            "<br><br><span class=\"MD\"><sup></sup></span> Assurant Solutions est une marque de commerce de Assurant Inc." +
                                                            "<br><br>MasterCard, la marque figurative de MasterCard et MasterCard SecureCode sont des marques de commerce déposées de MasterCard International et sont utilisées sous licence.",                                                                                                                                
    // UAT 12 - CP Revitalization
    optionalProducts_TableTitle                        :   "OUI, JE VEUX ADHÉRER AU(X) PRODUIT(S) FACULTATIF(S) SUIVANT(S): ",
    // Old line
    /*
	optionalProducts_SellingLanguageText                :   "<p><strong>Couverture-crédit<span class=\"MD\"><sup>**</sup></span>/Couverture-crédit - <em>Âge d'or<span class=\"MD\"><sup></sup></span>***</em></strong><em><br/>(non disponible pour les résidents de la Saskatchewan)</em></p>" +
        "<p>Cette assurance de solde de carte de crédit vous aide à régler le solde impayé de votre compte de carte de crédit de marque Canadian Tire lorsque vous et votre famille en avez le plus besoin. </p>" +
        "<ul style=\"list-style-type: none;\">" +
        "<li><strong>Couverture-crédit (titulaires de carte âgés de 18 à 65 ans)</strong> peut: </li>" +
        "<li> -	payer une prestation mensuelle de 3 % du solde impayé d'un compte de carte de crédit de marque Canadian Tire (excluant les programmes de modalités spéciales) jusqu'à concurrence de 1&nbsp;000&nbsp;$ par mois et d'une prestation maximale de 20&nbsp;000&nbsp;$ en cas de perte d'emploi involontaire ou d'invalidité*; <br/><br/></li>" +
        "<li> -	payer le solde impayé de votre compte de carte de crédit de marque Canadian Tire en cas de décès ou de maladie terminale* du titulaire de carte ou de son conjoint, jusqu'à concurrence de 20&nbsp;000&nbsp;$.</li></ul>" +
        "<ul style=\"list-style-type: none;\">" +
        "<li><strong>Couverture-crédit <em>– Âge d'or</em> (titulaires de carte âgés de 66 à 75 ans)</strong> peut:</li>" +
        "<li> - payer le solde impayé de votre compte de carte de crédit de marque Canadian Tire en cas de décès ou de maladie terminale* du titulaire de carte ou de son conjoint, jusqu'à concurrence de 20&nbsp;000&nbsp;$.</li></ul>" +
        "<p> - Couverture-crédit / Couverture-crédit  - <em>Âge d'or</em> coûte 1,10 $* par tranche de 100&nbsp;$ du solde impayé du mois actuel, moins toute prime d'assurance impayée du mois actuel et moins le solde" +
        " impayé de tout programme de modalités spéciales, plus les taxes applicables. Aucune prime n'est facturée lorsque le solde impayé est inférieur à 10&nbsp;$ au moment de l'impression du relevé. Par exemple, si votre solde est de 200&nbsp;$ au moment de l'impression de votre relevé de compte, vous ne payerez que 2,20 $*, plus les taxes applicables.</p>" +
        "<p>L'adhésion à Couverture-crédit / Couverture-crédit – <em>Âge d'or</em> est volontaire et peut être annulée en tout temps. Si vous adhérez à Couverture-crédit / Couverture-crédit –<em> Âge d'or, </em>votre couverture entre en vigueur dès votre adhésion. Vous recevrez une trousse de bienvenue pour confirmer votre adhésion. Elle contient un certificat d'assurance (les résidents du Québec reçoivent également un exemplaire du Guide de distribution) et des renseignements détaillés de la protection comme les avantages, les limites, les exclusions et la manière de faire une réclamation ou d'annuler la couverture.</p>" +
        "<p>On trouve d'autres produits d'assurance sur le marché qui offrent une protection semblable à ceux de Couverture-crédit / Couverture-crédit –    <em>Âge d'or</em>.<em> </em>Vous auriez avantage à vérifier si vous ne possédez pas déjà une assurance offrant une couverture semblable.</p>" +
        "<p>La Banque Canadian Tire reçoit une commission lorsque vous achetez Couverture-crédit / Couverture-crédit  - <em>Âge d'or</em>.</p>" +
        "<div style=\"font-size: 10pt\"><p>* Taxes applicables en sus. Payable mensuellement. Veuillez consulter le document Renseignements juridiques et votre certificat d'assurance pour prendre connaissance de toutes les exclusions, restrictions, modalités et conditions.</p>" +
        "<p>** Si vous êtes âgé de moins de 66 ans, vous adhérerez à Couverture-crédit. À l'âge de 66 ans, l'assurance-vie et l'assurance en cas de mutilation deviennent une assurance en cas de décès ou de mutilation par accident. </p>" +
        "<p> *** Si vous êtes âgé de 66 à 75 ans, vous adhérerez à Couverture-crédit – <em>Âge d'or</em>.<em> </em>Remarque :<em> </em>Les couvertures d'assurance en cas de perte d'emploi involontaire et d'invalidité totale ne font pas partie de <em>Couverture-crédit – Âge d'or</em>. À l'âge de 76 ans, l'assurance-vie et l'assurance en cas de mutilation deviennent une assurance en cas de décès ou de mutilation par accident.</p>" +
        "<p>Couverture-crédit est souscrite auprès de American Bankers, Compagnie d'Assurance Vie de la Floride et de American Bankers, Compagnie d'Assurances Générales de la Floride. Couverture-crédit – Âge d'or est souscrite auprès de American Bankers, Compagnie d'Assurance Vie de la Floride. American Bankers, Compagnie d'Assurance Vie de la Floride et American Bankers, Compagnie d'Assurances Générales de la Floride et leurs filiales et sociétés affiliées exercent des activités au Canada sous le nom d'Assurant Solutions<span class=\"MD\"><sup>.</p></div>" +
        "<hr/><br/><p><strong>Surveillance d'identité Classique<span class=\"MC\"><sup><em></em></strong></p>" +
        "<p>Vous permet de protéger vos renseignements privés et importants, ainsi que ceux de votre famille." +
        "<br/> - Service de surveillance en ligne des renseignements personnels que vous enregistrez****" +
        "<br/> - Protection des cartes, sauvegarde de données en ligne, prime de 3&nbsp;000&nbsp;$ maximum liée à l'arrestation de la personne ayant volé la carte****" +
        "<br/> - Remboursement des coûts de mise au point informatique pouvant aller jusqu'à 75&nbsp;$, taxes incluses, par année d'adhésion****" +
        "<br/> - Service de retour de biens Rebound<span class=\"MD\"><sup></sup></span>**** qui peut vous aider à récupérer les objets perdus ou volés" +
        "<br/> - Coût de 4,99 $**** par mois, payable à l'avance au mois, après que la première transaction est effectuée sur votre carte de crédit de marque Canadian Tire</p>" +
        "<p>Si vous adhérez au programme Surveillance d'identité Classique, votre adhésion prendra effet à compter de la date d'adhésion indiquée sur votre lettre de bienvenue, laquelle est comprise dans la trousse de bienvenue.</p>" +
        "<div style=\"font-size: 10pt\"><p>**** Taxes applicables en sus. Vos frais d'adhésion commenceront après la première transaction effectuée à l'aide de votre carte de crédit de marque Canadian Tire. Par la suite, les frais d'adhésion seront portés en avance chaque mois à votre compte de carte de crédit de marque Canadian Tire. Veuillez consulter le document Renseignements juridiques pour prendre connaissance de toutes les modalités, conditions, limites et exclusions. Certaines modalités s'appliquent.</p>" +
        "<p>Le programme Surveillance d'identité Classique est commandité par la Banque Canadian Tire et fourni par Fidélisation propriétaire Aimia Canada Inc.</p></div>",
	*/
    // UAT 39 - CP Revitalization, Missed Requirement
    optionalProducts_CPInsuranceText					:	"<p><strong>Assurance Couverture-crédit<span class=\"MD\"><sup></sup></span></strong></p>" +
        "<p>Cette assurance de solde de carte de crédit offerte pour votre carte de crédit émise par la Banque Canadian Tire peut aider à payer le solde impayé de votre carte de crédit ou peut effectuer vos paiements mensuels, jusqu’à concurrence de la prestation maximale de la police, 20 000 $, lorsque vous et votre famille en avez le plus besoin.</p>" +
        "<ul style=\"list-style-type: none;\">" +
        "<li><strong>Offerte aux titulaires de carte âgés d’au moins 18 et de moins de 76 ans, Couverture-crédit pourrait : </strong></li>" +
        "<li> -	payer une prestation mensuelle correspondant à 5 % du solde impayé d’une carte de crédit émise par la Banque Canadian Tire (excluant les programmes de modalités spéciales de paiement), tel que déterminé à la date du relevé coïncidant avec, ou précédant immédiatement, la date du sinistre, jusqu’à concurrence de 1 000 $ par mois et sous réserve d’une prestation maximale totale de 20 000 $ si vous perdiez involontairement votre emploi ou deveniez totalement invalide*;<br/><br/></li>" +
        "<li> -	payer le solde impayé de votre carte de crédit émise par la Banque Canadian Tire, sous réserve d’une prestation maximale totale de 20 000 $, si vous ou votre conjoint décédiez, subissiez une mutilation, ou étiez diagnostiqué pour une maladie terminale*.</li></ul>" +        
        "<p>L’Assurance Couverture-crédit coûte 1,10 $ par tranche de 100 $ de votre solde quotidien moyen (moins le montant impayé de tout programme de modalités spéciales de paiement) pour tout mois où le solde quotidien moyen s’établit à 10 $ ou plus. Par exemple, si votre solde quotidien moyen s’établissait à 350 $, vous payeriez seulement 3,85 $, plus les taxes applicables. À l’âge de 80 ans, le taux de prime est réduit à 0,59 $ par tranche de 100 $ du solde quotidien moyen (moins le montant impayé de tout programme de modalités spéciales de paiement). </p>" +
        "<p>L’adhésion à l’Assurance Couverture-crédit n’est pas obligatoire et vous pouvez l’annuler en tout temps. Si vous annulez dans les 45 premiers jours de l’émission du certificat d’assurance, vous recevrez un remboursement intégral de toute prime payée. Si vous adhérez à l’Assurance Couverture-crédit, votre assurance entre en vigueur au moment de votre adhésion. Vous recevrez une trousse de bienvenue pour confirmer votre adhésion. Elle contiendra un certificat d’assurance (les résidents du Québec recevront aussi un guide de distribution) qui renfermera tous les détails de la couverture, comme les définitions, les prestations, les restrictions, les limites et les exclusions, ainsi que les démarches à suivre pour demander une annulation ou pour présenter une demande de règlement.</p>" +
        "<p>Il existe d’autres produits d’assurance sur le marché qui peuvent offrir des couvertures semblables à celles que procure l’Assurance Couverture-crédit. Vous devriez vérifier si vous bénéficiez déjà d’une assurance qui offre des couvertures semblables.</p>" +
        "<p>La Banque Canadian Tire a un intérêt financier dans la vente de cette assurance.</p>" +
        "<div style=\"font-size: 10pt\"><p>*Plus les taxes applicables, payables chaque mois. Consultez le document de renseignements juridiques et votre certificat d’assurance pour connaître toutes les modalités, prestations, restrictions, limites et exclusions. La couverture en cas de décès ou de mutilation se convertit en une couverture en cas de décès ou de mutilation par accident à l’âge de 80 ans.</p>" +
        "<p>L’Assurance Couverture-crédit est une assurance-crédit collective prise en charge par American Bankers Compagnie d’Assurance Vie de la Floride (ABLAC) et American Bankers Compagnie d’Assurance Générale de la Floride (ABIC). ABLAC et ABIC ainsi que leurs sociétés affiliées et filiales exercent des activités commerciales au Canada sous la dénomination sociale Assurant Solutions<sup>&reg;</sup>.</p>",
        /*"<p><sup>&reg;</sup> Assurant Solutions est une marque de commerce déposée de Assurant, Inc.</p>" +
        "<p><span class=\"MD\"><sup></sup></span>/<span class=\"MC\"><sup></sup></span> Couverture-crédit est une marque de commerce déposée de la Banque Canadian Tire.</p>"+
        "<p><span class=\"MD\"><sup></sup></span>/<span class=\"MC\"><sup></sup></span> Sauf indication contraire, toutes les marques de commerce sont la propriété de La Société Canadian Tire Limitée et sont utilisées.</p></div><hr/><br/>",*/
        
    // UAT 39 - CP Revitalization, Missed Requirement
    optionalProducts_SellingLanguageText                :   "<p><strong>Surveillance d'identité Classique<span class=\"MC\"><sup><em></em></strong></p>" +
        "<p>Vous aide à protéger vos renseignements privés et importants, ainsi que ceux de votre famille." +
        "<br/> - Service de surveillance en ligne de toutes vos données personnelles enregistrées**" +
        "<br/> - Service de protection, de sauvegarde des données en ligne et de récompense pour retour de carte de crédit en cas de vol jusqu’à 3 000 $**" +
        "<br/> - Remboursement pour une mise au point informatique jusqu’à 75 $, taxes incluses, par année d’abonnement**" +
        "<br/> - Service de récupération de biens RetourMD** qui peut vous aider à récupérer les objets perdus ou volés" +
        "<br/> - Frais d’adhésion de 4,99 $**, payable à l’avance tous les mois après votre première transaction effectuée avec votre carte de crédit de marque Canadian Tire.</p>" +
        "<p>L’adhésion à Surveillance d’identité Classique est facultative et peut être annulée en tout temps. Si vous annulez dans les 30 premiers jours suivant votre date d’adhésion, la Banque Canadian Tire vous remboursera les frais d’adhésion payés, après votre première transaction effectuée à l’aide de votre carte. Si vous annulez après les 30 premiers jours, l’annulation prendra effet à compter du dernier jour du cycle de facturation en cours ou 30 jours après la réception de l’avis d’annulation, selon la première éventualité. Si vous annulez votre adhésion, vous êtes responsable de tous les frais engagés en raison des services offerts par l’intermédiaire d’un fournisseur d’accès Internet ou d’un tiers fournisseur de services.</p>" +
        "<div style=\"font-size: 10pt\"><p><sup>**</sup> Taxes applicables en sus. Vos frais d’adhésion commenceront après la première transaction effectuée à l’aide de votre carte de crédit émise par la Banque Canadian Tire. Par la suite, les frais d’adhésion seront facturés à l’avance, et ce, tous les mois, à votre compte de carte de crédit émise par la Banque Canadian Tire. Consultez le document de renseignements juridiques pour connaître les modalités, les limites et les exclusions. Sous réserve de certaines conditions.</p></div>" +
        "<p>Si vous adhÃ©rez au programme Surveillance d'identitÃ© Classique, votre adhÃ©sion prendra effet Ã  compter de la date d'adhÃ©sion indiquÃ©e sur votre lettre de bienvenue, laquelle est comprise dans la trousse de bienvenue.</p>",
        /* "<p>Le programme Surveillance d'identité Classique est commandité par la Banque Canadian Tire et fourni par Fidélisation propriétaire Aimia Canada Inc.</p></div>", */
    end                                                 : ""
};
