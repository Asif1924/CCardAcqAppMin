ensureNamespaceExists();

WICI.dictionary_fr =  {
	version											:							"39",
	yes 											: 							"Oui",
	no                                 				  :                         "Non",
	cancel  										  : 						"Annuler",
	
	printerErrorShowDialogFlag						  :							"Y",	
	addressLine2Flag	                              :    						"Y",
	newStylePrintFlag	                              :    						"N",
	storeRecallPrintStores							  :							"{\"stores\":[\"6029\",\"6323\",\"4401\",\"5141\",\"861\",\"118\",\"90\",\"145\",\"162\",\"218\",\"649\"]}",
	
	accents											  :							'ÀÁÂÃÄÅĄĀāàáâãäåąßÒÓÔÕÕÖØŐòóôőõöøĎďDŽdžÈÉÊËĘèéêëęðÇçČčĆćÐÌÍÎÏĪìíîïīÙÚÛÜŰùűúûüĽĹŁľĺłÑŇŃňñńŔŕŠŚŞšśşŤťŸÝÿýŽŻŹžżźđĢĞģğ',
	accents_out										  :							"AAAAAAAAaaaaaaaasOOOOOOOOoooooooDdDZdzEEEEEeeeeeeCcCcCcDIIIIIiiiiiUUUUUuuuuuLLLlllNNNnnnRrSSSsssTtYYyyZZZzzzdGGgg",
	
	app_loading                                       :                         "Chargement... ",
	backButtonPrompt_message                          :                         "Les renseignements recueillis dans cette demande seront supprimés de façon permanente et ne pourront être conservés. Êtes-vous certain(e) de vouloir continuer?",
	backButtonPrompt_title                            :                         "Quitter la demande",


	connectionError_unableToConnect                   :                         "Impossible de se connecter au serveur du système principal. Veuillez réessayer dans quelques minutes.",
	connectionError_networkDown                       :                         "Connexion au réseau perdue. Veuillez essayer l’option « Rétablir la connexion WIFI » si vous connectez par WIFI. Si vous connectez par réseau mobile, assurez-vous qu’une connexion sans fil appropriée existe.",

	confirmDialog_defaultTitle                        :                         "Confirmer",
	confirmDialog_yes                                 :                         "Oui",
	confirmDialog_no                                  :                         "Non",
	
	// US4282 starts
	homePhoneMessage_Title                            :                         "Requisition de réimpression", 
	homePhoneInputTitle_one                          :                         "Veuillez saisir le numéro de téléphone résidentiel ",
	homePhoneInputTitle_two                          :                         "du client pour réimprimer une carte temporaire",
	homePhoneConfirmButton                           :                         "Valider",
	// US4282 ends

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
	settings_manageRepsButton						  :							"Gérer les représentants",

	infoDialog_defaultTitle                           :                         "Information",
	infoDialog_noPrinterSetupped                      :                         "Une imprimante doit être configurée. Veuillez aviser votre administrateur.",

	errorDialog_defaultTitle                          :                         "Erreur",
	errorDialog_noticeTitle                           :                         "Attention",

	incorrect_Apk_Version_Dialog					  : 						"Votre application nécessite une mise à jour. L'application va se fermer automatiquement. S'il vous plaît attendez 15 minutes en proximité acceptable du réseau WIFI avant de redémarer l'application. Si le problème persiste, appelez votre administrateur.",
	unauthorized_Device								  : 						"Cet appareil n'est pas autorisée. L'application se fermera automatiquement.",


	addressLookup_failedMessage                       :                         "Échec de la recherche d'adresse. Veuillez essayer de nouveau.",
	addressLookup_noResults                           :                         "Aucun résultat. Veuillez essayer de nouveau.",
	addressLookup_multipleItemsExist                  :                         "Il existe plusieurs noms de rues. Sélectionnez ci-dessous",

	messageDialog_ok                                  :                         "Ok",

	pageHeader_next                                   :                         "Suivant",
	pageHeader_previous                               :                         "Retour",
	messageDialog_Close								  :							"Fermer",

	breadCrumbItem_ProductSelection	   				  :							"Choix de produit",
	breadCrumbItem_ApplicantInfo					  :							"Données d'appl",
	// US4637
	breadCrumbItem_EmailInfo						  :							"Pour nous joindre",	
	breadCrumbItem_FinancialAndEmploymentInfo		  :   						"Emploi et situation financière",
	breadCrumbItem_SupplementaryCard				  :  						"Carte additionnelle",
	breadCrumbItem_OptionalProducts					  :  						"Produits facultatifs",
	breadCrumbItem_MobilePayments					  :	             			"Paiements mobiles",
	breadCrumbItem_Confirmation						  :	             			"Confirmation",

	loginScreen_UserID_Label                          :                         "Code d'utilisateur",
	loginScreen_EmployerID_Label                      :                         "Code d'employeur",
	loginScreen_RetailNetWork_Label                                             :"Réseau de détail",
	loginScreen_AgentID_Label                         :                         "Numéro du représentant",
	loginScreen_Location_Number                       :                         "Numéro de magasin ou d'emplacement",
    loginScreen_First_Name		 					  : 	                    "Prénom de l'employé",
    loginScreen_Last_Name		 					  : 	                    "Nom de famille de l'employé",
	loginScreen_Button_Label                          :                          "CONNEXION",
	loginScreen_EmployeeNumberID_Label                  :                       "Numéro d'employé",

	loginScreen_Dialog_ErrorTitle                     :                         "Erreur de connexion",
	loginScreen_FailureMessage                        :                         "La connexion a échoué. Veuillez essayer de nouveau. ",
	dictionary_loading_error 						  : 						"Le contenu de la demande ne peut pas être affiché. Veuillez attendre 15 minutes à portée acceptable du réseau WIFI avant de lancer la demande, puis réessayez. Si le problème persiste, veuillez appeler votre administrateur.",
	// US4744
	loginScreen_IncorrectUserNamaAndPassword          :                         "SVP vérifier votre nom d’utilisateur et votre mot de passe.",
	loginScreen_signatureBox_title     	              :    "Veuillez signer pour confirmer que vous avez terminé la formation requise",
	loginscreen_toggleTitle                           :    "Est-ce qu'un autre membre du personnel vous a référé le client?",
	
	// US4231
	loginScreen_BlackLstEmpIDAgtIDLookup_FailedMessage:							"La connexion a échoué. Veuillez contacter votre administrateur.",

	loginScreen_UserLookupDialog_NormalTitle          :                         "Renseignements sur l'adresse",
	loginScreen_UserLookupDialog_ErrorTitle           :                         "Erreur d'adresse",
	loginScreen_UserLookup_ConfirmMessage             :                         "Est-ce la bonne adresse?",
	loginScreen_UserLookup_FailedMessage              :                         "Adresse non trouvée, veuillez réessayer ",
	loginScreen_DemoModeAlert 						  :   						"Vous entrez dans\n LE MODE DÉMO\n Êtes-vous certain?",

	loginScreen_EmployerIDLookup_FailedMessage        :                         "Code d'employeur invalide. Veuillez corriger et essayer de nouveau",
	chooseProduct_HandoutTabToCustomerDialogRetrieve  :							"Récupérer la demande",
	chooseProduct_PrinterConnected					  :							"L’imprimante est connectée.",
	chooseProduct_PrinterNotConnected				  :							"L’imprimante n’est pas connectée. Veuillez vous assurer que l'imprimante est en marche, <br>à portée de main et que Bluetooth est connecté avant de procéder à l'application.",
	loginScreen_Login_Details_In_Use				  :							"Échec de connexion. Votre nom d'utilisateur est courrament en utilisation. SVP contacter votre superviseur pour plus d'information.",

	// US3766
	chooseProduct_ChooseOneOfTheCreditCards           :                         "CHOISISSEZ L'UNE DES CARTES DE CRÉDIT SUIVANTES",
    chooseProduct_CanadianTireOptionsMC 			  :                     	"<strong>Carte Mastercard<sup style='font-size: .5em;'>MD</sup></strong>  <strong>Triangle<sup style='font-size: .5em;'>MC</sup></strong>",
	chooseProduct_OptionsMasterCard                   :                         "<strong>Carte Mastercard<sup style='font-size: .5em;'>MD</sup></strong>  <strong>Triangle<sup style='font-size: .5em;'>MC</sup></strong> <br><br> \n  Recompenses Triangle<sup style='font-size: .5em;'>MC</sup> ",
	 //US4590
  //  chooseProduct_Triangle_Rewards 					  : 						"Triangle &nbsp;&nbsp;  Rewards<sup>&trade;</sup>",
	chooseProduct_GasAdvantageMasterCard              :                         "Carte Mastercard<sup style='font-size: .5em;'>MD</sup> Avantage Essence<sup style='font-size: .5em;'>MD</sup>",
	chooseProduct_CashAdvantageMasterCard             :                         "Carte Mastercard<sup style='font-size: .5em;'>MD</sup> Avantage Remise<sup style='font-size: .5em;'>MD</sup>",
	chooseProduct_NoSpecificCard					  :							"carte",
	
	// VZE-107
	chooseProduct_Customer_signatureBoxDialog_title         :  "Signature du client requise",
	// CSR and ROC Province
	chooseProduct_Customer_signatureBoxDialog_Content_CSR_ROC       :  "Vous êtes sur le point de demander une Mastercard de la Banque Canadian Tire. Si vous possédez déjà une Mastercard de la Banque Canadian Tire et que votre demande de carte de crédit est approuvée, il s’agira d’un nouveau compte.",
	chooseProduct_Customer_signatureBoxDialog_ListTitle_CSR_ROC :  "En signant ci-dessous :",
	chooseProduct_Customer_signatureBoxDialog_ListItem1_CSR_ROC :  "Je comprends que cette demande donnera lieu à une vérification de crédit.",
	chooseProduct_Customer_signatureBoxDialog_ListItem2_CSR_ROC :  "Je confirme que je maîtrise la tablette et je souhaite remplir le formulaire de demande.",
	// CSR With QC province && FMR with All Province 
	chooseProduct_Customer_signatureBoxDialog_Content_CSR_QC_And_FMR_AllProvince          :  "Vous êtes sur le point de demander une Mastercard de la Banque Canadian Tire. Si vous possédez déjà une Mastercard de la Banque Canadian Tire et que votre demande de carte de crédit est approuvée, il s’agira d’un nouveau compte.",
	chooseProduct_Customer_signatureBoxDialog_ListTitle_CSR_QC_And_FMR_AllProvince         :  "En signant ci-dessous :",
	chooseProduct_Customer_signatureBoxDialog_ListItem1_CSR_QC_And_FMR_AllProvince         :  "Je comprends que cette demande donnera lieu à une vérification de crédit.",
    chooseProduct_Customer_signatureBoxDialog_ListItem2_CSR_QC_And_FMR_AllProvince         :  "Je confirme que j'ai reçu le document d'information juridique.",

	chooseProduct_Customer_signatureBoxDialog_IAgree    :  "J’ACCEPTE",
		 
    // VZE-107
	

	// US3920
	program_PromoCode								  : "{\"FMR\":[{\"Intercept\":[{\"Intercept\":\"Blank\"},{\"Ouverture officielle\":\"4023\"},{\"Autre\":\"\"}],\"Événements en magasin\":[{\"Journées Triangle\":\"OMCDY\"},{\"Autre\":\"\"}],\"Événements DPCT\":[{\"Programme d’événement de l’Est\":\"5200\"},{\"Programme d’événement de l’Ouest\":\"4024\"}],\"Régional DCTP\":[{\"Programme régional de l’Est\":\"4022\"},{\"Programme régional de l’Ouest\":\"4029\"}],\"Campus\":[{\"Autre\":\"\"}]}]}",
	
	// US4194
	program_Marks_PromoCode 						  : "{\"FMR\":[{\"Magasin Marks\":[{\"MWW80\":\"MWW80\"}]}]}",
	program_Marks_PromoCode_QC 						  : "{\"FMR\":[{\"L'Equipeur\":[{\"MWW80\":\"MWW80\"}]}]}",
	//US4433
	program_FGL_ProgramCode_intercept                 : "{\"FMR\":[{\"Intercept\":[{\"Intercept\":\" \"}]}]}",
	program_PC_ProgramCode_FMR		                  : "{\"FMR\":[{\"Party City Intercept\":[{\"Party City Intercept\":\" \"}]}]}",
	program_PC_ProgramCode_CSR		                  : "{\"FMR\":[{\"Party City Staff\":[{\"Party City Staff\":\" \"}]}]}",
	
	// US3767
	chooseProduct_PromoCode_Other					  :							"Code promotionnel (Autre)",

	chooseProduct_PromoCode                           :                         "Code promotionnel",
	chooseProduct_Program							  :							"Programme ",
	chooseProduct_Province                            :                         "Province",
	
	//------------------ VZE- 108 Starts ---------------------
	
	chooseProduct_received_and_reviewed                 : "J’ai reçu et examiné une copie de la Déclaration sur le coût du crédit relativement aux demandes de carte de crédit.  Je comprends également qu'un exemplaire est disponible en ligne à l'adresse www.ctfs.com/informationsjuridiques.",
	chooseProduct_Application_Disclosures               : "Divulgations d'application",
	chooseProduct_CanadianTireAgreementTitle            : "Banque Canadian Tire Contrat Du Titulaire De Carte",
	chooseProduct_CanadianTireAgreement_para1           : "Le contrat (aussi désigné comme <b>le présent contrat</b>) entre vous, titulaire de carte principal, et nous, société émettrice de chaque carte, comprend les modalités décrites dans le présent document, toute modification à ces modalités, y compris tout remplacement de celles-ci, toute instruction spécifique que nous vous fournissons par écrit concernant l’utilisation d’une carte, de même que le document d’information que nous vous fournissons avec une carte. À moins que nous ne vous avisions du contraire, le présent contrat s’applique à chaque carte (telle que définie ci-après) que nous avons émise ou pourrions ultérieurement émettre à votre nom ou au nom d’un détenteur de carte additionnelle et remplace tout contrat antérieur lié à une carte. Les modalités du présent contrat s’appliquent à compter du moment où nous ouvrons un compte, même si vous n’avez pas encore reçu la carte.",
	chooseProduct_CanadianTireAgreement_para2           :  "<b><U>Définitions de termes que vous devez connaître</U></b><br><b>Nous</b>, <b>nos</b> et <b>notre</b> signifient la Banque Canadian Tire. <br><b>Vous</b>, <b>vos</b> et <b>votre</b> font référence au <b>titulaire de carte principal</b>, personne au nom de laquelle un compte a été ouvert pour une carte en particulier. <b>Compte</b> signifie un compte ouvert à votre nom, soit pour une carte en particulier, soit pour une durée temporaire afin de vous permettre d’y porter des débits avant que vous ne receviez la carte. <br><b>Solde dû</b> signifie le montant indiqué comme solde dû sur votre relevé mensuel. <br><b>Transfert de solde</b> signifie le paiement que nous effectuons à votre nom à une tierce partie à l’égard de l’une de vos dettes et que nous ajoutons ensuite au solde de votre compte. <br><b>Carte personnelle Canadian Tire</b> signifie une carte de crédit que nous émettons et qui peut être utilisée uniquement pour régler des achats dans les magasins de détail de La Société Canadian Tire Limitée (et de ses successeurs et des membres de son groupe), sur son site web et dans les postes d’essence Canadian Tire.<br><b>Carte</b> signifie chaque carte de crédit que nous avons émise à votre nom (autre qu’une carte personnelle Canadian Tire ou une carte de crédit utilisée principalement à des fins commerciales) et, si vous avez demandé une carte temporaire en remplacement d’une carte perdue, cette carte de remplacement, même si elle n’a pas encore été remise à un détenteur de carte additionnelle ou à vous-même. Le mot <b>carte</b> fait aussi référence à chaque carte de crédit que nous avons émise au nom d’un détenteur de carte additionnelle. Chaque référence à une <b>carte</b> signifie chaque carte et toutes les cartes. <br><b>Transaction au comptant</b> signifie une avance de fonds obtenue à un guichet automatique bancaire <b>(GAB)</b> ou au comptoir d’une institution financière, un transfert de solde, une transaction réglée avec un chèque de commodité, une transaction aux fins de participation à un jeu de hasard (qu’elle soit effectuée dans un casino, un hippodrome ou sur l’internet, pour l’achat de billets de loterie ou pour tout autre type de jeu de hasard), un transfert de fonds, l’achat de chèques de voyage et toute autre transaction pour laquelle nous vous avisons qu’elle sera traitée comme une transaction au comptant. <br><b>Débit</b> signifie chaque montant porté au compte d’une carte par suite de l’utilisation de la carte par un détenteur de carte additionnelle ou vous-même (y compris un débit inscrit au compte en vertu d’une entente de paiement automatique), que ce soit pour un achat ou une transaction au comptant, et comprend tous les intérêts, les frais administratifs et les autres montants que vous devez payer en vertu du présent contrat et qui sont portés au compte d’une carte.<br><b>Chèque de commodité</b> signifie un chèque que nous vous fournissons pour utilisation avec une carte. <br><b>Limite de crédit</b> signifie le montant maximum qui peut être impayé au titre d’un compte de carte en tout temps. Ce montant est indiqué dans le document d’information. <br><b>Programme de paiement différé</b> signifie une entente que nous offrons et pour laquelle nous pouvons vous facturer des frais qui vous permet de différer un paiement au titre de votre compte pour un débit spécifique, pendant une période qui est spécifiée pour ce débit. <br><b>Document d’information</b> signifie une déclaration que nous vous fournissons avec une carte ou lorsque nous ouvrons un compte. Ce document peut être modifié ou remplacé de temps à autre.<br> <b>Programme de paiements</b> égaux signifie une entente que nous offrons, pour laquelle nous pouvons vous facturer des frais, et qui vous permet d’effectuer le paiement d’un débit spécifique en douze (<b>12</b>) versements mensuels consécutifs approximativement égaux (ou en un nombre inférieur ou supérieur de versements mensuels que nous pouvons offrir), le dernier versement pouvant être d’un montant inférieur ou supérieur (chacun étant un <b>versement en vertu d’un programme de paiements égaux</b>);<br> chacun de ces versements sera inclus, lorsque dû, dans le solde dû et le montant du paiement minimum qui figurent sur un relevé de compte spécifique, en commençant par la période de facturation au cours de laquelle le débit admissible au programme de paiements égaux est inscrit à votre compte. <br><b>Situation de manquement</b> a le sens donné à ce dernier terme à la section « Manquement » ci-après. <br><b>NIP</b> signifie le numéro d’identification personnel, le code ou le mot de passe fourni à un détenteur de carte additionnelle ou à vous-même, ou choisi par un détenteur de carte additionnelle ou vous-même, lié à une carte. <br><b>Achat</b> signifie un débit qui n’est ni une transaction au comptant, ni de l’intérêt, ni des frais administratifs.<br> <b>Programme de modalités spéciales de paiement</b> comprend tout programme de paiement différé, tout programme de paiements égaux et toute autre entente spéciale de financement que nous pouvons vous offrir dans le cadre du présent contrat, sous réserve des modalités additionnelles applicables à chaque programme. <br><b>Cas de cessation de programme de modalités spéciales de paiement</b> signifie, sauf si spécifié autrement dans une modalité additionnelle s’appliquant à ce programme particulier, l’occurrence de l’un ou de l’autre des cas suivants :<br><ul><li>nous ne recevons pas le plein montant du paiement minimum dû indiqué sur un relevé dans les <b>59</b> jours qui suivent la date de ce relevé; ou</li><li>il se produit une situation de manquement autre que celle de ne pas avoir effectué un paiement dû en vertu de la présente entente.</li></ul><br><b>Détenteur de carte</b> additionnelle signifie toute personne au nom de laquelle nous avons émis une carte de crédit sur votre compte, à votre demande. <br><b>Utilisation d’une carte</b> signifie la présentation de la carte à une personne ou la communication d’un numéro de compte ou d’un numéro de carte à une personne par voie orale, téléphone, télécopieur ou autre mode de transmission électronique, internet ou tout autre moyen afin d’effectuer un achat ou une transaction au comptant.",
	chooseProduct_CanadianTireAgreement_para3           :  "<b><U>Utilisation de la carte</U></b><br>À titre de titulaire de carte principal, vous devez nous payer tous les débits inscrits à votre compte, que la carte ait été utilisée par un détenteur de carte additionnelle, vous-même ou toute personne que vous avez autorisée à utiliser votre carte ou votre NIP. Vous pouvez aussi être tenu de payer certaines transactions non autorisées (voir la section Carte perdue ou volée et utilisation non autorisée ci-après). Vous ne devez pas utiliser la carte à des fins illicites, notamment pour l’achat de biens ou de services qu’il est illégal d’acheter. Il vous incombe aussi de veiller à ce que tous les détenteurs de carte additionnelle respectent le présent contrat. Une carte vous permet d’obtenir du crédit auprès de nous, jusqu’à concurrence de votre limite de crédit, en l’utilisant pour régler des achats chez des commerçants qui acceptent la carte et, sous réserve de notre approbation, pour effectuer des transactions au comptant avec nous et avec les établissements qui acceptent la carte. Toutefois, nous ne pouvons garantir qu’une carte sera acceptée partout où vous voudrez l’utiliser, et nous n’avons aucune obligation envers vous si quiconque ou nous-mêmes refusons d’accepter une carte ou un chèque de commodité. Toute demande d’opposition de paiement à l’égard d’un chèque de commodité sera refusée. Même si un détenteur de carte additionnelle, une personne autorisée à utiliser une carte ou vous-même n’avez pas signé une facture de vente ou tout autre document lorsque la carte a été utilisée ou utilisez la carte après sa date d’expiration, vous demeurez responsable du paiement de tous les débits découlant de l’utilisation de la carte. Nous pouvons en tout temps restreindre ou bloquer la capacité d’utiliser une carte pour effectuer un achat ou une transaction au comptant si nous avons quelque préoccupation concernant l’utilisation de la carte, votre capacité à effectuer vos paiements ou pour toute autre raison.",
	chooseProduct_CanadianTireAgreement_para4           :  "<b><U>Carte perdue ou volée et utilisation non autorisée</U></b><br/>Vous devez prendre des mesures raisonnables pour protéger votre carte et vos chèques de commodité contre la perte, le vol et l’utilisation illicite. Vous ne devez permettre à personne d’autre d’utiliser une carte, à l’exception des détenteurs de carte additionnelle. Cependant, si vous permettez à quelqu’un d’utiliser une carte, vous aurez la responsabilité de payer les débits découlant de l’utilisation de la carte, même si cette dernière a été utilisée pour régler des transactions que vous n’avez pas autorisées. En cas de perte, de vol ou d’utilisation frauduleuse de votre carte ou d’un chèque de commodité, vous ne serez pas tenu de payer les débits découlant de l’utilisation frauduleuse ou non autorisée de la carte, sauf si :<ul><li>vous n’avez pas assuré la confidentialité de votre NIP en appliquant les directives ci-après ou celles que nous pouvons vous communiquer de temps à autre; <I>les trois autres circonstances énumérées ci-après ne s’appliquent pas aux titulaires de carte résidant au Québec </I></li><li> vous n’avez pas pris les mesures raisonnables pour protéger votre carte ou vos chèques de commodité contrela perte ou le vol;</li><li>vous ne nous avez pas téléphoné dans les plus brefs délais après vous être rendu compte de la perte ou du vol d’une carte; ou</li><li>vous (ou tout autre détenteur de carte additionnelle) n’avez pas pleinement collaboré avec nous ou un organisme d’application de la loi au cours d’une enquête concernant l’utilisation frauduleuse ou non autorisée de la carte ou avez refusé de signer tout document que nous avons requis dans le cadre d’une enquête. Vous ne devez pas conserver votre carte et votre NIP au même endroit et ne devez jamais communiquer votre NIP à quiconque. Le NIP que vous choisissez doit être difficile à deviner. À titre d’exemple, votre NIP ne doit pas être identique à votre nom, à votre date de naissance, à votre numéro de téléphone, au numéro civique de votre adresse ou à votre numéro d’assurance sociale, ni ne doit être une suite consécutive de chiffres. Vous devez nous téléphoner sans délai au numéro sans frais indiqué sur votre relevé mensuel, à n’importe quelle heure du jour ou de la nuit, si vous croyez que votre carte a été perdue ou volée ou qu’une personne a obtenu votre numéro de compte ou votre NIP.</li></ul>",
	chooseProduct_CanadianTireAgreement_para5           : "<b><U>Limite de crédit</U></b><br>Le montant total des débits impayés dans un compte de carte (ce que nous appelons le <b>solde</b> du compte) ne doit en aucun temps dépasser la limite de crédit, à moins que nous ne l’ayons autorisé. Si le solde de votre compte dépasse la limite de crédit, et pourvu que nous respections toute obligation en matière d’avis applicable au dépassement de la limite de crédit, vous devez payer la partie du solde qui excède la limite de crédit dès que nous vous le demandons. Toutefois, vous devez toujours payer la totalité de ce montant excédentaire avant la date d’échéance figurant sur votre relevé de compte. Nous pouvons réduire la limite de crédit de votre compte sans préavis, mais nous devons obtenir votre consentement pour l’augmenter.",
	chooseProduct_CanadianTireAgreement_para6           :  "<b><U>Paiements</U></b><br>Chaque mois, vous devez nous payer au moins le montant du <b>paiement minimum</b> indiqué sur votre relevé avant la date d’échéance figurant sur ce relevé. La méthode utilisée pour déterminer le montant du paiement minimum est décrite dans le document d’information. Tout solde aux termes d’un programme de modalités spéciales de paiement sera inclus dans le nouveau solde indiqué sur votre relevé, mais il ne sera pas utilisé pour déterminer le montant du paiement minimum ni le solde dû tant que le paiement du solde aux termes de ce programme de modalités spéciales de paiement ne sera pas dû, sauf si spécifié autrement dans l’offre de programme. Nous pouvons réduire le montant du paiement minimum ou vous exempter d’effectuer ce paiement pour une période de facturation donnée, mais dans ce cas, l’intérêt continue d’être imputé sur le solde impayé et est ajouté au solde de la période de facturation suivante. Vous pouvez effectuer vos paiements en nous faisant parvenir un chèque, une traite bancaire ou un mandat par la poste, en effectuant un transfert de fonds électronique par l’entremise d’une institution financière opérant au Canada, en utilisant l’internet ou par tout autre moyen que nous autorisons. Nous ne pouvons accepter un paiement en argent comptant par la poste et ne pouvons être tenu responsable de toute perte dans un tel cas. Un paiement est considéré comme ayant été effectué uniquement après que nous l’ayons reçu et entré dans notre système de traitement des paiements. Par conséquent, vous devez toujours prévoir un délai suffisant pour que votre paiement nous parvienne au plus tard à la date d’échéance.",
	chooseProduct_CanadianTireAgreement_para7           : "<b><U>Relevés de compte</U></b><br> Sous réserve des lois applicables, nous vous fournissons un relevé de compte tous les mois. Le relevé couvre une période de facturation de <b>28</b> à <b>33</b> jours, selon le nombre de jours, de jours fériés et de fins de semaine dans le mois. Nous envoyons votre relevé par la poste à la dernière adresse inscrite dans nos registres ou par voie électronique, si vous le demandez et dans la mesure où nous en sommes capables. Il vous incombe de nous aviser de tout changement d’adresse postale ou d’adresse courriel pour que vous puissiez continuer de recevoir vos relevés à temps. Si votre relevé est retardé en raison de problèmes avec le service postal ou pour toute raison dont vous avez connaissance, vous devez communiquer avec nous par téléphone ou, si vous le pouvez, accéder à votre relevé par l’internet, afin de pouvoir effectuer le paiement requis avant la date d’échéance. Vous devez passer attentivement votre relevé en revue. Si vous croyez qu’une erreur s’est glissée ou qu’un débit n’aurait pas dû être inscrit à votre compte, vous devez nous en aviser dans les <b>90</b> jours de la date d’inscription de la transaction. À défaut de nous aviser dans ce délai, vous ne pourrez plus contester ce débit, sauf s’il s’agit d’un débit pour lequel vous n’êtes pas responsable en raison d’une utilisation frauduleuse ou non autorisée de votre carte. Toutefois, si nous avons crédité un montant par erreur à votre compte ou si nous avons sous-estimé des frais, nous pourrons corriger cette erreur en tout temps.",
	chooseProduct_CanadianTireAgreement_para8           : "<b><U>Application des paiements et des crédits</U></b><ul><li>Les paiements que nous recevons sont imputés de la façon suivante :</li></ul>− Chaque paiement au titre du compte dont le montant est égal à celui du paiement minimum est appliqué dans l’ordre suivant :<br>− versements au titre de programmes de paiements égaux, par ordre chronologique, en commençant par le versement dû au titre du premier programme de paiements égaux;<br>− intérêts facturés sur le relevé courant et intérêts impayés des relevés précédents;<br>− frais administratifs;<br>− capital (que ce soit une transaction au comptant ou un achat), en commençant par les débits assujettis au plus bas taux d’intérêt jusqu’à ceux assujettis au plus haut taux d’intérêt.<br>− Si le montant de votre paiement est supérieur à celui du paiement minimum, la partie du montant payé qui excède le montant du paiement minimum est appliquée de la façon suivante : <br>− En premier lieu, nous regroupons toutes les transactions assujetties au même taux d’intérêt. À titre d’exemple, toutes les transactions assujetties à un taux annuel courant particulier seraient dans un même groupe et toutes les transactions assujetties au même taux d’intérêt spécial lié à une promotion seraient dans un autre groupe.<br>− Ensuite, nous appliquons la partie du montant de votre paiement qui excède le montant du paiement minimum à chaque groupe de taux d’intérêt dans une proportion égale à celle que ces groupes représentent au titre du solde dû de votre compte. Par exemple, si <b>25 %</b> des transactions se retrouvent dans un groupe assujetti à un taux d’intérêt donné et <b>75 %</b> dans un autre groupe, l’excédent du paiement sera appliqué dans une proportion de <b>25/75</b> à ces groupes. Nous déterminons la proportion le jour où nous recevons le paiement et ne tenons pas compte des débits non facturés ni des soldes aux termes de programmes de paiements égaux ou de programmes de paiement différé dans le calcul.<br>− Si le montant de votre paiement est plus élevé que le solde dû indiqué sur votre relevé, l’excédent du paiement sera appliqué d’abord aux débits non facturés à la date de réception du paiement (proportionnellement, d’après le taux d’intérêt applicable à ces divers débits), puis aux soldes des programmes de modalités spéciales de paiement de la façon suivante : premièrement, proportionnellement entre ces soldes d’après le taux d’intérêt applicable aux divers soldes; deuxièmement, à l’égard des programmes de modalités spéciales de paiement assujettis au même taux d’intérêt, proportionnellement d’après le solde que chaque type de programme (paiement différé ou paiements égaux) représente par rapport au solde total de tous les programmes de modalités spéciales de paiement assujettis à ce taux d’intérêt dans le compte; et, troisièmement, parmi les programmes de modalités spéciales de paiement du même type qui sont assujettis au même taux d’intérêt, par ordre chronologique, en commençant par le programme de modalités spéciales de paiement de ce type dont la date d’échéance est la plus rapprochée.<br>− Lorsque votre compte comporte un solde créditeur, ce dernier est appliqué aux débits dans l’ordre où ceux-ci sont inscrits au compte.<br>− Les débits facturés sont toujours payés avant ceux qui n’ont pas encore été facturés.<ul><li>Si vous obtenez un crédit pour un débit porté à votre compte, nous appliquons d’abord ce crédit à des achats effectués chez des commerçants d’une catégorie similaire.</li></ul>S’il n’y en a pas, nous appliquons le crédit selon la méthode décrite pour le paiement minimum (voir précédemment). Notez qu’un crédit n’est pas traité comme un paiement du paiement minimum ou du solde impayé figurant sur un relevé. Si un commerçant vous accorde un crédit à l’égard d’une transaction, il se peut que nous ne soyons pas en mesure d’inscrire ce dernier à votre compte avant la période de facturation suivante. Dans l’intervalle, les débits demeurent assujettis à l’intérêt jusqu’à ce que le crédit ait été inscrit à votre compte. De plus, vous devez payer le solde intégral figurant sur votre relevé si vous ne voulez pas payer d’intérêt sur la totalité des achats qui figurent pour la première fois sur votre relevé.",
	chooseProduct_CanadianTireAgreement_para9           : "<b><U>Intérêts</U></b><br><b>Taux d’intérêt</b> – L’intérêt sera facturé sur les achats et les autres débits au taux applicable (lequel peut être modifié) au type de débit particulier, tel qu’il est indiqué dans le document d’information (chaque taux étant un <b>taux annuel courant</b>), sauf si nous vous offrons un taux d’intérêt spécial pour un débit en particulier. Tous les taux auxquels des débits sont assujettis seront indiqués sur votre relevé.",
	chooseProduct_CanadianTireAgreement_para10          : "<b>Calcul de l’intérêt </b> &#8211; Sous réserve des dispositions de tout programme de modalités spéciales de paiement, l’intérêt court sur chaque débit à compter de la date de la transaction ayant donné lieu à ce débit, laquelle peut être antérieure à la date à laquelle le débit est inscrit à votre compte. Nous calculons l’intérêt quotidiennement en utilisant un taux quotidien égal au taux d’intérêt annuel courant divisé par le nombre de jours compris dans l’année civile courante. L’intérêt est calculé au taux d’intérêt quotidien applicable chaque jour d’après le montant du type particulier de chaque débit impayé ce jour-là, jusqu’à ce que chaque débit particulier ait été payé. La durée durant laquelle un débit demeure impayé dépend de l’ordre dans lequel les paiements sont appliqués selon la méthode décrite précédemment. Nous ne versons aucun intérêt si votre compte comporte un solde créditeur.",
	chooseProduct_CanadianTireAgreement_para11          :  "<b>Impact des paiements sur l’intérêt que vous payez &#8211; délai de grâce </b> &#8211; Si nous recevons le paiement intégral du solde dû au plus tard à la date d’échéance figurant sur votre relevé, nous n’avez pas d’intérêt à payer sur les achats qui figurent sur ce relevé pour la première fois ni sur le solde de tout programme de paiement différé arrivé à échéance pendant la période de facturation couverte par votre relevé. La date d’échéance aura lieu <b>26</b> jours après la date de votre relevé si vous résidez au Québec ou <b>21</b> jours après la date de votre relevé si vous résidez ailleurs – c’est ce qui s’appelle le <b>délai de grâce</b>. Lorsqu’un délai de grâce se termine un samedi, un dimanche ou un jour férié, il est automatiquement prolongé jusqu’au jour ouvrable suivant. Le délai de grâce ne s’applique pas à tout solde dû impayé d’un relevé précédent, aux avances de fonds, aux transferts de solde et aux autres transactions au comptant (y compris les frais afférents), et, par conséquent, de l’intérêt vous sera facturé sur tous ces débits, sur chaque relevé, jusqu’à ce que ceux-ci aient été intégralement payés. Il se peut donc que des frais d’intérêt figurent sur un relevé même après que vous avez payé intégralement le solde figurant sur un relevé précédent. Si nous ne recevons pas le paiement intégral du solde dû indiqué sur votre relevé au plus tard à la date d’échéance, vous devez payer de l’intérêt sur la totalité du solde dû qui était impayé chaque jour, jusqu’à ce que le solde indiqué sur ce relevé ait été intégralement payé. Tout solde dû impayé d’une période de facturation donnée (lequel comprendra tout intérêt impayé), de même que l’intérêt couru pendant la période de facturation courante, seront compris dans le solde dû sur votre prochain relevé. Par conséquent, de l’intérêt est imputé sur l’intérêt impayé, ce qui signifie que l’intérêt est composé mensuellement.",
    chooseProduct_CanadianTireAgreement_para12          :  "<b>Programmes de paiements égaux</b> &#8211; L’intérêt ne court pas sur le solde impayé d’un programme de paiements égaux, sauf si indiqué autrement dans l’offre de programme de paiements égaux. Dans les cas où l’intérêt court, il court quotidiennement sur le solde impayé à compter de la date de la transaction et jusqu’à ce que ce solde ait été intégralement payé (sauf si un cas de cessation de programme de modalités spéciales de paiement se produit avant) au taux d’intérêt spécifié dans l’offre de programme. L’intérêt couru pendant une période de facturation figurera sur le relevé mensuel de cette période, sauf s’il est indiqué dans l’offre de programme que l’intérêt ne sera pas facturé si vous respectez certaines conditions. Si vous ne payez pas le montant intégral d’un versement dû aux termes d’un programme de paiements égaux au plus tard à la date d’échéance figurant sur un relevé donné, le montant impayé sera exclu du programme de paiements égaux et de l’intérêt vous sera facturé sur ce montant à compter de la date qui suit la date de votre prochain relevé au taux annuel courant applicable. S’il se produit un cas de cessation de programme de modalités spéciales de paiement,<br> i) tous les programmes de paiements égaux en cours sur le compte prendront fin,<br> ii) l’intérêt sur le solde impayé de chacun des programmes de paiements égaux vous sera facturé au taux annuel courant applicable à compter de la date qui suit la date de votre prochain relevé, et<br> iii) le solde impayé de chaque programme de paiements égaux sera ajouté au solde dû pour ce relevé.",
    chooseProduct_CanadianTireAgreement_para13          :  "<b>Programmes de paiement différé</b> &#8211; Sauf si indiqué dans l’offre de programme de paiement différé, l’intérêt ne court pas sur le solde impayé d’un programme de paiement différé tant que la date d’échéance du programme n’a pas été atteinte ou que le programme n’a pas pris fin. Si de l’intérêt court, il court quotidiennement sur le solde impayé à compter de la date de la transaction et jusqu’à la date d’échéance du programme de paiement différé (sauf si un cas de cessation de programme de modalités spéciales de paiement se produit avant) au taux d’intérêt spécifié dans l’offre de programme. À l’échéance, l’intérêt court sur le solde impayé d’un programme de paiement différé au taux annuel courant applicable. S’il se produit un cas de cessation de programme de modalités spéciales de paiement, <br>i) tous les programmes de paiement différé en cours sur le compte prendront fin,<br> ii) l’intérêt sur le solde impayé de chacun des programmes de paiement différé vous sera facturé au taux annuel courant applicable à compter de la date qui suit la date de votre prochain relevé, et</br> iii) le solde impayé de chaque programme de paiement différé sera ajouté au solde dû pour ce relevé.",
	chooseProduct_CanadianTireAgreement_para14          :  "<b><U>Avances de fonds</U></b><br> Vous pouvez utiliser votre carte pour obtenir une avance de fonds partout au monde dans les établissements que nous désignons et (si vous avez un NIP) aux GAB qui affichent les logos figurant sur votre carte et ceux que nous désignons de temps à autre. Cependant, nous nous réservons le droit d’établir des montants minimum et maximum aux avances de fonds et d’annuler ce service à tout moment sans préavis aux titulaires de carte. Les relevés de transaction imprimés aux GAB sont fournis pour votre commodité seulement. En cas de disparité entre le relevé de transaction d’un GAB et les données inscrites dans nos registres, ces dernières prévaudront et lieront les parties.",
    chooseProduct_CanadianTireAgreement_para15          :  "<b><U>Transactions en monnaie étrangère</U></b><br> Tout paiement au titre de votre compte doit être effectué en dollars canadiens. Si des débits sont portés à votre compte dans une monnaie autre que le dollar canadien, le montant de la transaction est d’abord converti en dollars canadiens avant l’inscription du débit à votre compte. Les crédits accordés en devises sont aussi convertis en dollars canadiens avant d’être inscrits à votre compte. Chaque conversion en dollars canadiens sera effectuée en utilisant les taux de change établis par le réseau de cartes de crédit qui traite les transactions portées à votre compte (le logo du réseau est imprimé au recto de votre carte), majorés du taux indiqué dans le document d’information (pour les débits portés à votre compte) ou réduits du même taux (pour les crédits inscrits à votre compte). Le taux de change utilisé pour la conversion d’une devise est celui en vigueur pour votre carte à la date à laquelle le débit est inscrit à votre compte et peut différer de celui en vigueur à la date à laquelle est effectuée la transaction ayant donné lieu à ce débit. En raison des variations dans les taux de change et du coût de change des devises, le montant en dollars canadiens crédité à votre compte pour une transaction en monnaie étrangère pourrait être inférieur au montant en dollar canadien porté initialement à votre compte pour cette transaction. Dans le cas de transactions effectuées dans certaines devises, le réseau de cartes de crédit convertit d’abord la devise en dollars américains, puis en dollars canadiens.",
    chooseProduct_CanadianTireAgreement_para16          :  "<b><U>Relations avec les commerçants</U></b><br> Nous ne pouvons être tenus responsables de la qualité des biens ou des services que vous achetez avec votre carte, ni du fait que des biens ou des services ne conviennent pas à vos fins. Par conséquent, si vous avez un différend avec un commerçant ou une réclamation envers lui relativement à des biens ou à des services que vous avez réglés avec votre carte, vous devez payer intégralement les débits relatifs à ces biens ou à ces services, puis tenter de régler le différend ou de conclure un règlement directement avec le commerçant. Si votre différend avec un commerçant concerne une surfacturation ou une non-délivrance des biens ou des services que vous avez achetés avec votre carte et que nous acceptons de créditer à votre compte le montant de la transaction contestée (ce que nous ne sommes aucunement obligés de faire, sauf si nous y sommes requis par une loi applicable), vous devez sans délai signer tout document requis à notre demande et nous les retourner, ce qui pourrait comprendre une cession en notre faveur de votre réclamation envers ce commerçant.",
	chooseProduct_CanadianTireAgreement_para17          :  "<b><U>Paiements automatiques</U></b><br> Si vous avez pris des arrangements pour que des paiements automatiques soient effectués à partir de votre compte de carte et que le numéro ou la date d’expiration de votre carte change ou que votre compte est fermé, le réseau de cartes de crédit (dont le logo figure au recto de votre carte) peut automatiquement communiquer les détails de votre nouvelle carte aux commerçants et aux institutions, de sorte que le paiement automatique de vos factures ne soit pas interrompu. Toutefois, il vous incombe de vérifier que les commerçants et les institutions avec qui vous avez conclu une entente de paiements automatiques participent à un tel programme et, dans le cas contraire, de communiquer vous-même les détails de votre nouvelle carte à ces commerçants et à ces institutions.",
    chooseProduct_CanadianTireAgreement_para18          :  "<b><U>Annulation d’une carte ou fermeture d’un compte</U></b><br> En tout temps, vous pouvez annuler une carte additionnelle émise sur votre compte ou fermer un compte (ce qui annule automatiquement toutes les cartes émises sur ce compte), mais vous devez régler le solde impayé de ce compte, conformément au présent contrat. Nous pouvons aussi annuler une carte ou fermer un compte en tout temps, sans préavis aux détenteurs de carte additionnelle ni au titulaire de carte principal, même si aucun manquement n’est survenu aux termes du présent contrat. Nous pouvons ensuite exiger le paiement immédiat et intégral du solde impayé et de tous les intérêts exigibles aux taux applicables. Dans l’éventualité où une carte est annulée ou un compte fermé, que ce soit à votre demande ou à notre discrétion, vous devez nous retourner toutes les cartes émises sur ce compte. Toutes les cartes demeurent notre propriété. Si des débits sont portés à un compte même après qu’une carte a été annulée, vous devez nous payer ces débits, conformément au présent contrat.",
    chooseProduct_CanadianTireAgreement_para19          :  "<b><U>Manquement</U></b><br> Si i) vous n’effectuez pas un paiement dû en vertu du présent contrat; <br>ii) un détenteur de carte additionnelle ou vous-même ne vous conformez pas à une disposition du présent contrat ou à toute autre entente que nous avons avec vous; <br>iii) vous fournissez un renseignement trompeur ou erroné sur un formulaire de demande de carte; <br>iv) vous devenez insolvable, faites l’objet d’une procédure de faillite ou d’insolvabilité, avez soumis une proposition à vos créditeurs ou si une partie ou la totalité de vos biens est placée sous séquestre; <br>v) l’un ou l’autre de vos biens fait l’objet d’une saisie ou d’une ordonnance de saisie-arrêt en vertu d’une procédure judiciaire; <br>vi) vous décédez; ou <br>vii) à notre avis raisonnable vous êtes incapable d’effectuer un paiement ou d’honorer quelque autre obligation en vertu du présent contrat (chacune de ces conditions constituant un <b>manquement</b>), nous pouvons <br>a) annuler ou restreindre vos droits en vertu du présent contrat et modifier toute disposition de ce dernier; <br>b) exiger que vous payiez intégralement le solde de votre compte et tous les intérêts exigibles aux taux applicables; <br>c) augmenter le montant du paiement minimum que vous devez effectuer, et ce, jusqu’à avis contraire; <br>d) appliquer tout solde créditeur que vous avez dans un autre compte ou tout montant en dépôt dans notre institution au montant que vous devez en vertu du présent contrat; <br>e) exiger que tous les détenteurs d’une carte additionnelle et vous-même retourniez toutes les cartes et tous les chèques de commodité non utilisés; et f) exercer tout autre droit ou recours légal dont nous pouvons nous prévaloir. À moins que vous soyez un titulaire de carte résidant au Québec, vous devez payer tous les frais juridiques que nous devons engager pour exercer nos droits et nos recours dans le cadre du présent contrat.<br><b>Pour les résidents du Québec seulement : Mention exigée par la Loi sur la protection du consommateur (Québec) (Clause de déchéance du bénéfice du terme)</b> Avant de se prévaloir de cette clause, le commerçant doit expédier au consommateur un avis écrit et, à moins d’en être exempté conformément à l’article <b>69</b> du Règlement général, un état de compte. Dans les <b>30</b> jours qui suivent la réception par le consommateur de l’avis et, s’il y a lieu, de l’état de compte, le consommateur peut : <br>a) soit remédier au fait qu’il est en défaut; <br>b) soit présenter une demande au tribunal pour faire modifier les modalités de paiement prévues au présent contrat. <br>Le consommateur aura avantage à consulter les articles <b>104</b> à <b>110</b> de la Loi sur la protection du consommateur (chapitre <b>P-40.1</b>) de même que l’article <b>69</b> du Règlement général adopté en vertu de cette Loi et, au besoin, à communiquer avec l’Office de la protection du consommateur.",
	chooseProduct_CanadianTireAgreement_para20          :  "<b><U>Services facultatifs</U></b><br> De temps à autre, nous pouvons vous offrir des services et des avantages facultatifs sans frais additionnels, certains pouvant être fournis par des tierces parties. Ces services sont régis par des ententes distinctes du présent contrat. Vous reconnaissez que nous n’avons aucune responsabilité à l’égard des services fournis par une tierce partie et que tout différend que vous pouvez avoir avec les fournisseurs de tels services ne réduit nullement votre obligation de payer tout montant dû en vertu du présent contrat. Nous pouvons en tout temps modifier, retirer ou annuler un service facultatif.",
    chooseProduct_CanadianTireAgreement_para21          :  "<b><U>Programmes de fidélisation</U></b><br> Dans certains cas, un programme de fidélisation est associé à une carte, parfois sans frais additionnels pour le titulaire. Les principales caractéristiques de chaque programme de fidélisation sont décrites dans un guide des avantages fourni avec la carte. Pour connaître l’ensemble des modalités applicables à un programme de fidélisation en particulier, rendez-vous sur le site web dont l’adresse figure dans le guide des avantages ou communiquez avec notre Service à la clientèle au numéro sans frais indiqué dans le guide. Les programmes de fidélisation peuvent être annulés ou modifiés conformément à leurs modalités.",
    chooseProduct_CanadianTireAgreement_para22          :  "<b><U>Frais</U></b><br> Tous les frais relatifs à votre carte sont indiqués dans le document d’information (y compris, s’il y a lieu, les frais pour un chèque ou un paiement automatique refusé). Nous communiquons avec vous lorsque nous devons ajouter des frais ou modifier le montant de certains frais.",
 	chooseProduct_CanadianTireAgreement_para23          :  "<b><U>Cession du présent contrat</U></b><br> Nous pouvons céder n’importe lequel de vos comptes et tous nos droits en vertu du présent contrat relativement à chaque compte cédé à toute personne ou entité, sans votre consentement.",
    chooseProduct_CanadianTireAgreement_para24          :  "<b><U>Modifications au présent contrat</U></b><br> Nous pouvons modifier les dispositions du présent contrat, y compris les renseignements fournis dans votre document d’information initial, en tout temps, moyennant un préavis de <b>30</b> jours ou un préavis plus long si la loi l’exige. Pour ce faire, nous vous envoyons un avis de modifications par la poste, qui peut être imprimé sur votre relevé, ou par courriel à l’adresse à laquelle nous vous faisons parvenir vos relevés. Il vous incombe d’informer les détenteurs d’une carte additionnelle émise sur votre compte de toute modification apportée au présent contrat. Une modification peut s’appliquer à un débit qui a été effectué avant que vous ne receviez notre préavis, mais toute modification entre en vigueur uniquement à la date indiquée dans le préavis que nous vous faisons parvenir. Si vous résidez au Québec, vous pouvez refuser la modification et résilier le présent contrat sans frais, ni pénalité, ni indemnité de résiliation, en nous envoyant un avis à cet effet au plus tard <b>30</b> jours après l’entrée en vigueur de la modification. Si vous choisissez de résilier le contrat, vous demeurerez responsable de toute somme impayée aux termes du présent contrat.",
	chooseProduct_CanadianTireAgreement_para25          :  "<b><U>Changement d’adresse</U></b><br> Pour que vous receviez à temps vos relevés et les communications que nous vous faisons parvenir, vous devez nous aviser dans les plus brefs délais de tout changement à votre adresse (notamment à votre adresse courriel si vous recevez vos relevés par voie électronique).",
    chooseProduct_CanadianTireAgreement_para26          :  "<b><U>Lois applicables</U></b><br> Les tribunaux de la province ou du territoire du Canada où vous résidez (ou de l’Ontario, si vous résidez à l’extérieur du Canada) ont juridiction exclusive en cas de différend aux termes du présent contrat, et vous acceptez que ces tribunaux appliquent les lois en vigueur dans votre province ou territoire aux fins de règlement de ces différends. Le présent contrat est conclu à Welland, en Ontario.",
	chooseProduct_CanadianTireAgreement_para27          :  "<b><U>Non-renonciation</U></b><br> Même si nous acceptons un paiement de votre part, n’exerçons pas un droit ou un recours conféré par le présent contrat ou n’exigeons pas que vous vous conformiez entièrement à vos obligations en vertu du présent contrat, nous pouvons en tout temps exercer tous nos droits et recours conférés par le présent contrat, à moins que nous y renoncions par écrit.",
    chooseProduct_CanadianTireAgreement_para28          :  "<b><U>Divisibilité</U></b><br> Le fait qu’une modalité du présent contrat soit déclarée inexécutoire ne modifie aucunement notre capacité à faire respecter les autres modalités du présent contrat.",
	chooseProduct_CanadianTireAgreement_para29          :  "<b>Renseignements supplémentaires pour les résidents du Québec Mention exigée par la Loi sur la protection du consommateur (Québec) (Contrat de crédit variable pour l’utilisation d’une carte de crédit)</b> <br>&#171; <b>1</b>) Si le consommateur utilise la totalité ou une partie du crédit consenti pour payer en totalité ou en partie l’achat ou le louage d’un bien ou la prestation d’un service, il peut, lorsque le contrat de crédit variable a été conclu à l’occasion et en considération du contrat de vente ou de louage d’un bien ou du contrat de service et que le commerçant et le commerçant de crédit variable ont collaboré en vue de l’octroi du crédit, opposer au commerçant de crédit variable les moyens de défense qu’il peut faire valoir à l’encontre du commerçant vendeur, locateur, entrepreneur ou prestataire du service.Le consommateur peut aussi exercer, dans les circonstances décrites ci-dessus, à l’encontre du commerçant de crédit variable ou de son cessionnaire les droits qu’il peut faire valoir à l’encontre du commerçant vendeur, locateur, entrepreneur ou prestataire du service si ce dernier a cessé ses activités ou n’a pas d’actif au Québec, est insolvable ou est déclaré failli. Le commerçant de crédit variable ou son cessionnaire est alors responsable de l’exécution des obligations du commerçant vendeur, locateur, entrepreneur ou prestataire du service jusqu’à concurrence, selon le cas, du montant de sa créance au moment de la conclusion du contrat, du montant de sa créance au moment où elle lui a été cédée ou du paiement qu’il a reçu s’il la cède. <br><br><b>2</b>) Le consommateur solidairement responsable avec un autre consommateur des obligations découlant d’un contrat de crédit variable est libéré des obligations résultant de toute utilisation du compte de crédit variable après avoir avisé par écrit le commerçant qu’il n’utilisera plus le crédit consenti et n’entend plus être solidairement responsable de l’utilisation future par l’autre consommateur du crédit consenti à l’avance et lui avoir fourni, à cette occasion, une preuve qu’il en a informé l’autre consommateur en lui transmettant un avis écrit à cet effet à sa dernière adresse ou adresse technologique connue. Tout paiement effectué par le consommateur par la suite doit être imputé aux dettes contractées avant l’envoi de l’avis au commerçant. <br><br><b>3</b>) Le consommateur, ayant conclu avec un commerçant une entente de paiements préautorisés qui se font à même un crédit consenti dans le cadre d’un contrat pour l’utilisation d’une carte de crédit, peut y mettre fin en tout temps en avisant le commerçant. Dès que le commerçant reçoit l’avis, il doit cesser de percevoir les paiements préautorisés. Dès que l’émetteur reçoit une copie de l’avis, il doit cesser de débiter le compte du consommateur pour effectuer les paiements au commerçant. <br><br><b>4</b>) Le consommateur n’est pas tenu aux dettes résultant de l’utilisation par un tiers de sa carte de crédit après que l’émetteur ait été avisé par quelque moyen que ce soit de la perte, du vol, d’une fraude ou d’une autre forme d’utilisation de la carte non autorisée par le consommateur. Même en l’absence d’un tel avis, la responsabilité du consommateur dont la carte a été utilisée sans son autorisation est limitée à la somme de <b>50 $.</b> Le consommateur est tenu des pertes subies par l’émetteur lorsque ce dernier établit que le consommateur a commis une faute lourde dans la protection de son numéro d’identification personnel. <br><br><b>5</b>) Le commerçant doit, à la fin de chaque période, transmettre sans délai au consommateur un état de compte. Le commerçant est dispensé de transmettre un état de compte au consommateur pour une période donnée lorsque, au cours de cette période, il n’y a eu ni avance ni paiement relativement au compte du consommateur et que le solde du compte à la fin de la période est nul. <br><br><b>6</b>) Si le consommateur effectue un paiement au moins égal au solde du compte à la fin de la période précédente dans les <b>21</b> jours suivant la date de la fin de la période, aucuns frais de crédit ne peuvent lui être exigés sur ce solde du compte, sauf pour les avances en argent. Dans le cas d’une avance en argent, ces frais peuvent courir à compter de la date de cette avance jusqu’à la date du paiement. <br><br><b>7</b>) Le consommateur peut exiger du commerçant qu’il lui fasse parvenir sans frais une copie des pièces justificatives de chacune des opérations portées au débit du compte au cours de la période visée. Le commerçant doit faire parvenir la copie des pièces justificatives exigées dans les <b>60</b> jours qui suivent la date d’envoi de la demande du consommateur. <br><br><b>8</b>) Tant que le consommateur n’a pas reçu à son adresse, ou à son adresse technologique s’il a donné son autorisation expresse, un état de compte, le commerçant ne peut exiger des frais de crédit sur le solde impayé, sauf sur les avances en argent. <br>Le consommateur aura avantage à consulter les articles<br> <b>103.1, 122.1, 123, 123.1, 124, 126, 126.2, 126.3, 127</b> et <b>127.1</b> de la Loi sur la protection du consommateur (chapitre <b>P-40.1</b>) et, au besoin, à communiquer avec l’Office de la protection du consommateur. &#187;",
    chooseProduct_CanadianTireAgreement_para30          :  "<b>Tableau des frais de crédit</b><br>Voici des exemples de frais de crédit (arrondis au cent près), en fonction d’un mois de 30 jours, dans l’hypothèse où tous les débits sont des achats portant intérêt aux taux annuels courants indiqués ci-après, où aucun débit n’est inscrit aux termes d’un programme de modalités spéciales de paiement et où aucuns autres frais, paiements ni débits ne s’appliquent : <br>Taux <br>annuel<br><br> Solde moyen<br> 100 $ 500 $ 1 000 $ 2 000 $<br> 19,99 % 1,64 $ 8,22 $ 16,34 $ 32,86 $<br> 21,99 % 1,81 $ 9,04 $ 18,07 $ 36,15 $<br>",
    chooseProduct_CanadianTireAgreement_para31          :  "<center><b>Protection de vos renseignements personnels</b></center><br>Des renseignements personnels à votre sujet sont recueillis, utilisés et communiqués en conformité avec la politique en matière de protection des renseignements personnels de Canadian Tire (la &laquo; <b>politique</b> &raquo;), notamment, et particulièrement, pour <br>a) traiter votre demande de produit ou fournir un service; <br>b) évaluer votre degré de solvabilité et tenir continuellement à jour votre dossier à cet égard; <br>c) traiter, gérer, analyser et vérifier votre relation avec nous, y compris pour effectuer le recouvrement de toute somme d’argent que vous nous devez; <br>d) vérifier votre identité et protéger les parties contre les erreurs et la fraude; <br>e) assurer la délivrance, le retour ou l’échange de produits, de services, de primes et de programmes; <br>f) déterminer votre intérêt envers des produits, des services, des primes et des programmes et votre admissibilité à ceux-ci et, si cela est approprié, vous les fournir; <br>g) nous conformer aux prescriptions juridiques et aux exigences réglementaires; et <br>h) mieux comprendre vos besoins en matière de produits et de services et vous offrir des renseignements, des primes, des produits et des services pertinents afin de combler ces besoins. Tel que décrit dans la politique, des renseignements personnels peuvent être communiqués à des tierces parties qui administrent des comptes et aux membres de la famille d’entreprises Canadian Tire dans le cadre de la conception ou de l’élaboration de sondages, de concours, de programmes de commercialisation individuels et de programmes de marketing direct et peuvent être utilisés pour vous offrir et vous vendre d’autres produits et services, notamment par courrier, courriel, télécopieur, téléphone, messagerie texte ou toute autre forme de message électronique. Vous pouvez retirer votre consentement en tout temps si vous ne désirez plus recevoir de communications sur les produits et les services. Il vous suffit de cliquer sur le lien de désabonnement dans nos communications par courriel ou de communiquer avec nous au 1 866 846-5841. Vous comprenez qu’il se peut que votre nom ne puisse pas être retiré à temps de certaines listes utilisées pour des activités promotionnelles en cours, car nous avons besoin d’un délai raisonnable pour traiter votre demande. Veuillez noter qu’il se peut que nous communiquions avec vous pour des motifs liés à l’administration de votre compte et l’envoi de messages transactionnels et opérationnels même si vous avez retiré votre nom de nos listes de communication à des fins de commercialisation. La politique est mise à jour de temps à autre. Vous pouvez obtenir une copie de la plus récente version de la politique de protection des renseignements personnels en vous rendant à l’adresse <U>www.ctfs.com</U> ou en téléphonant au 1 800 459-6415. Lorsque vos renseignements personnels sont communiqués à un fournisseur de service, celui-ci est tenu de les protéger et de se conformer à notre politique en matière de protection des renseignements personnels. Toutefois, certains fournisseurs peuvent être situés à l’extérieur du Canada et être tenus de communiquer des renseignements personnels en vertu des lois de leur territoire.",
    chooseProduct_CanadianTireAgreement_para32          :  "<center><b>Processus de dépôt et de traitement des plaintes</b></center><br> La Banque Canadian Tire demeure résolue à fidéliser sa clientèle en lui offrant un service de qualité supérieure. À cet effet, elle invite toute personne qui désire exprimer une préoccupation ou formuler une plainte à communiquer avec elle en suivant le processus de dépôt et de traitement des plaintes ci-après. Veuillez commencer par l’étape 1. Veuillez passer à l’étape 2 <b>seulement si</b> vous jugez que la plainte ou la préoccupation n’est pas réglée d’une manière satisfaisante. <br><b>Étape 1</b><br> La Banque Canadian Tire vous demande de communiquer d’abord avec son Service à la clientèle pour tenter de régler le différend. Nos préposés du Service à la clientèle tenteront de répondre à vos préoccupations à l’étape 1, et, si cela s’avère nécessaire, auront recours à d’autres ressources disponibles dans le cadre de l’étape 1. Ils pourront confier la résolution de votre plainte à un superviseur, tel que le superviseur du compte ou le superviseur au centre du Service à la clientèle compétent. Vous pouvez nous appeler au 1 866 846-5841. Vous pouvez aussi soumettre votre plainte par télécopieur au 905 735-2644 ou par la poste à l’adresse suivante : <br>Banque Canadian Tire<br> C.P. 12000<br> Succursale Main<br> Welland (Ontario) L3B 6C7<br><b>Étape 2</b><br> Si la plainte n’est pas réglée d’une manière satisfaisante à l’étape 1, vous pouvez demander à ce qu’elle soit traitée dans le cadre de l’étape 2, en appelant le 1 866 846-5841 et en demandant à parler au chef de service ou au cadre supérieur. Ces personnes feront tout leur possible pour régler le différend et vous indiqueront un délai de réponse. Si cela vous est plus pratique, vous pouvez aussi soumettre votre plainte par télécopieur au 905 735-2644 ou par la poste à l’adresse indiquée dans l’encadré ci-dessus. <br><b>Étape 3</b><br> Le dernier recours est le bureau de l’Ombudsman de la Banque Canadian Tire. Si la plainte ou la préoccupation n’est pas réglée de manière satisfaisante à l’étape 2, vous pouvez alors adresser votre plainte au bureau de l’Ombudsman de la Banque Canadian Tire. Pour communiquer avec l’Ombudsman, composez le 1 800 464-9166, poste 39583. Vous pouvez aussi soumettre votre plainte par télécopieur au 905 465-6033 ou par la poste à l’adresse suivante : <br>Ombudsman<br> Banque Canadian Tire<br> 3475, Superior Court<br> Oakville (Ontario) L6L 0C6<br> Si vous n’avez pas obtenu satisfaction après avoir suivi les étapes précédentes ou si 90 jours se sont écoulés depuis la réception de votre plainte à l’étape 2, vous pouvez vous adresser par téléphone ou par écrit à l’ombudsman externe, l’Ombudsman des Services Bancaires et d’Investissement (OSBI) à l’adresse suivante :<br> Ombudsman des Services Bancaires et d’Investissement<br> 401, rue Bay<br> Bureau 1505, C.P. 5<br> Toronto (Ontario) M5H 2Y4<br> Téléphone : 1 888 451-4519<br> Télécopieur : 1 888 422-2865 Courriel : <b>ombudsman@obsi.ca</b><br> Veuillez visiter le site <b>www.osbi.ca</b> pour obtenir de plus amples renseignements sur l’OSBI. Enfin, si vous avez une plainte à formuler à l’égard d’une infraction de la Banque Canadian Tire aux dispositions relatives aux consommateurs de la Loi sur les banques, vous pouvez écrire à l’Agence de la consommation en matière financière du Canada (ACFC) à l’adresse suivante :<br> Agence de la consommation en matière financière du Canada Édifice Enterprise<br> 427, avenue Laurier Ouest, 6e étage<br> Ottawa (Ontario) K1R 1B9<br> Téléphone : 1 866 461-3222<br> Télécopieur : 1 866 814-2224<br> Pour obtenir de plus amples renseignements sur l’Agence de la consommation en matière financière du Canada, veuillez visiter le site <b><U>www.fcac-acfc.gc.ca.</U></b><br> Pour obtenir de l’information sur les plaintes et les préoccupations au sujet de la confidentialité, veuillez consulter notre Politique en matière de protection des renseignements personnels et notre Foire aux questions à l’adresse www.ctfs.com. Si vous avez des questions au sujet du présent contrat, veuillez communiquer avec notre service à la clientèle au 1 866 846-5841.",
    chooseProduct_CanadianTireCardAgreementCheckBoxText :  "<b>J'accepte que vous me fournissiez le contrat du titulaire de carte de la Banque Canadian Tire pour la carte que j'ai demandée en l'affichant à www.ctfs.com/informationsjuridiques.  Je comprends que je recevrai une copie imprimée lorsque ma carte arrivera par la poste.</b>",
    chooseProduct_Triangle_reward_Program               :  "<b>Programme Récompenses Triangle<sup>MC</sup></b>",
    chooseProduct_Triangle_RewardsProgramTnC            :  "J’accepte les modalités du programme Récompenses Triangle.",   
    chooseProduct_TriangleRewardsProgram_para1          : "Cette page présente des renseignements importants sur le programme Récompenses Triangle (le <b>programme</b>) - le programme qui vous récompense avec de l’Argent électronique Canadian Tire lorsque vous magasinez dans les magasins Canadian Tire participants, sur canadiantire.ca et dans les postes d’essence Canadian Tire. Ce programme est mis à disposition par la Société Canadian Tire Limitée (ci-après dénommée <b>Canadian Tire</b> ou <b>nous</b>) et les modalités et conditions sont les suivantes :",
    chooseProduct_TriangleRewardsProgram_para2          : "<b>Participer au programme</b><br> Vous devez être membre (un <b>membre</b>) pour pouvoir obtenir et échanger de l’Argent électronique Canadian Tire. L’adhésion est ouverte aux personnes physiques résidant au Canada et ayant atteint l’âge de la majorité dans la province où elles résident. Vous pouvez devenir un membre <br>(i) en remplissant le processus d’inscription en ligne sur canadiantire.ca (le <b>site Web du programme</b>) ou <br>(ii) en téléchargeant l’application sur votre téléphone ou appareil mobile (<b>l’application du programme</b>). Vous pouvez obtenir des renseignements sur le programme en appelant le service à la clientèle au 1 800 226-8473 ou en visitant le site Web du programme, ou <br>(iii) en présentant une demande de carte de crédit émise par la Banque Canadian Tire désignée comme étant liée au programme, ou par l’émission d’une carte de débit reliée à un compte bancaire de la Banque Canadian Tire qui est désigné comme étant lié au Programme (une <b>carte de paiement du programme</b>), ou <br>(iv) en appelant le service à la clientèle au 1 800 226-8473 après avoir pris une carte Récompenses Triangle en magasin. Si vous faites une demande de carte de crédit qui est une carte de paiement du programme et que votre demande n’est pas approuvée, vous deviendrez quand même membre du programme Récompenses Triangle si vous avez fourni tous les renseignements nécessaires, à moins que, au moment de la demande de carte de crédit, vous ayez été informé que vous deviez vous inscrire séparément au programme si votre demande était refusée ou si nous vous en avisions autrement par écrit.",
 	chooseProduct_TriangleRewardsProgram_para3          : "<b>Cartes Récompenses Triangle</b><br> Chaque membre peut recevoir une carte du programme Récompenses Triangle (une <b>carte Récompenses Triangle</b>) qui est liée à un <b>compte Récompenses Triangle.</b> Votre Argent électronique Canadian Tire sera stocké dans ce compte. Si vous ne recevez pas de carte Réconpenses Triangle, vous devrez utiliser une <b>méthode sans carte</b> (voir ci-dessous) pour obtenir ou échanger de l’Argent électronique Canadian Tire. Toute carte de paiement du programme émise à un membre sera également liée au compte Récompenses Triangle de ce membre. Si un membre possède plusieurs cartes de paiement du programme, elles ne peuvent pas être liées au même compte Récompenses Triangle. Un membre peut demander l’émission de cartes Récompenses Triangle supplémentaires avec le même numéro de compte que le compte Récompenses Triangle de ce membre.",
	chooseProduct_TriangleRewardsProgram_para4          : "<b>Obtenir de l’Argent électronique Canadian Tire</b><br> L’Argent électronique Canadian Tire peut être accumulé lorsque vous achetez des <b>articles admissibles</b> (voir ci-dessous) dans les magasins Canadian Tire participants ou en ligne sur canadiantire.ca (ou sur tout autre site Web désigné par Canadian Tire de temps à autre). L’Argent électronique Canadian Tire est calculé à partir du montant avant taxes de l’achat (ou sa portion admissible) et est arrondi au cent près. Pour obtenir de l’Argent électronique Canadian Tire, vous devez présenter une carte Récompenses Triangle (ou utiliser une <b>méthode sans carte</b> décrite ci-dessous). Vous pouvez également percevoir de l’Argent électronique Canadian Tire sur la portion d’un achat réglé avec une carte de paiement du programme. La carte de paiement du programme doit être liée à un compte Récompenses Triangle au moment de l’achat afin d’obtenir de l’Argent électronique Canadian Tire. Vous accumulez également de l’Argent électronique Canadian Tire lorsque vous achetez du carburant (essence ou diesel) dans les postes d’essence Canadian Tire participants et présentez une carte Récompenses Triangle (ou utilisez une méthode sans carte telle que décrite ci-dessous) et utilisez un mode de paiement admissible ou réglez votre achat au moyen d’une carte de paiement du programme. Le montant en Argent électronique Canadian Tire obtenu sur les achats de carburant dépend du nombre de litres achetés. Un achat minimum de carburant peut être requis avant de pouvoir obtenir de l’Argent électronique Canadian Tire. Le taux de récompenses peut varier de temps à autre et selon l’endroit et le type de mode de paiement utilisé. Il vous est recommandé de vérifier auprès de votre poste d’essence Canadian Tire. L’Argent électronique Canadian Tire ne peut être recueilli dans les postes d’essence Canadian Tire pour les achats de carburant. Vous pouvez également obtenir de l’Argent électronique Canadian Tire sur les achats que vous effectuez chez d’autres marchands et qui sont portés à votre carte de paiement. L’Argent électronique Canadian Tire que vous obtenez chez d’autres marchands sera également arrondi au cent le plus près jusqu’au 31 mars 2021, après quoi il sera arrondi à la baisse au cent le plus près. Le taux d’obtention de l’Argent électronique Canadian Tire peut varier de temps à autre et selon l’emplacement et peut être modifié par Canadian Tire sans préavis. De plus, vous pouvez obtenir de l’Argent électronique Canadian Tire à un taux différent avec une carte de paiement du programme qu’avec une carte Récompenses Triangle (ou une <b>méthode sans carte</b>) ou selon le type de carte de paiement du programme que vous utilisez. Pour obtenir les taux en vigueur, veuillez composer le 1 800 226-8473. Lorsque vous magasinez chez Canadian Tire ou dans un poste d’essence Canadian Tire, et que vous avez oublié votre carte Récompenses Triangle ou choisi de ne pas l’utiliser, vous pouvez quand même obtenir de l’Argent électronique Canadian Tire sur vos achats admissibles si vous fournissez le numéro de téléphone que vous avez donné lorsque vous vous êtes inscrit au programme, ou en présentant votre cellulaire ou votre appareil mobile aux points de vente compatibles si vous avez téléchargé l’application du programme au préalable (ces deux options étant une <b>méthode sans carte</b>). Avant de calculer le montant en Argent électronique Canadian Tire accumulé, les achats faits dans une devise étrangère avec une carte de paiement du programme sont d’abord convertis en dollars canadiens (comme énoncé dans le contrat du titulaire de carte). L’Argent électronique Canadian Tire ne peut être crédité qu’à un seul compte Récompenses Triangle par transaction. Si vous utilisez une carte Récompenses Triangle ou une méthode sans carte, vous devez la glisser dans le lecteur ou la présenter devant un lecteur optique ou fournir votre numéro de téléphone, selon le cas, avant de payer. Lorsque vous magasinez en ligne sur canadiantire.ca (ou sur un autre site Web désigné par Canadian Tire), vous devez entrer votre numéro de compte Récompenses Triangle au moment du paiement afin d’obtenir votre Argent électronique Canadian Tire. Les membres sont aussi admissibles à des primes spéciales en Argent électronique Canadian Tire de temps à autre à l’achat de certains articles, survenant dans le cadre d’un d’événement particulier ou d’une promotion ou d’une offre, toutefois, à moins d’indication contraire, la prime spéciale en Argent électronique Canadian Tire n’est octroyée qu’une seule fois pour une transaction ou pour un événement spécial, selon le cas. Vous ne pouvez pas utiliser une carte Récompenses Triangle (ou une méthode sans carte) avec une carte de paiement du programme. Si vous portez un achat à une carte de paiement du programme, vous obtiendrez de l’Argent électronique Canadian Tire au taux applicable de la carte de paiement du programme alors en vigueur, même si vous présentez également votre carte Récompenses Triangle (ou méthode sans carte). De même, si vous utilisez de l’Argent électronique Canadian Tire pour payer une partie d’une transaction et que vous payez le solde avec une carte de paiement du programme liée à un compte Récompenses Triangle différent du compte à partir duquel l’échange a lieu, tout l’Argent électronique Canadian Tire obtenu pour cette transaction sera crédité au compte Récompenses Triangle à partir duquel l’échange a été effectué. Il n’est pas possible d’obtenir de l’Argent électronique Canadian Tire sur le montant de la transaction visé par l’échange d’Argent électronique Canadian Tire. Toutefois, nous pouvons, à l’occasion et à notre discrétion, vous proposer des offres spéciales ou des promotions vous permettant d’obtenir de l’Argent électronique Canadian Tire sur le montant de la transaction visé par l’échange d’Argent électronique Canadian Tire. Si vous utilisez plus d’une carte de paiement du programme pour effectuer un achat (p. ex. partager le coût entre deux cartes ou plus), tout l’Argent électronique Canadian Tire recueilli sur cet achat sera crédité uniquement au compte Récompenses Triangle lié à la première carte de paiement du programme qui est présentée. Si vous effectuez un paiement au moyen d’une carte de paiement du programme en combinaison avec une autre forme de paiement, seule la partie de l’achat réglé avec la carte de paiement du programme permettra d’obtenir de l’Argent électronique Canadian Tire au taux de la carte de paiement du programme alors applicable. La partie des achats effectués avec l’autre forme de paiement peut être éligible à de l’Argent électronique Canadian Tire à un taux différent. Il est à noter que des retards peuvent survenir dans l’attribution d’Argent électronique Canadian Tire sur un compte Récompenses Triangle. Vous ne pouvez pas obtenir de l’Argent Canadian Tire<sup>MD</sup> en billet et de l’Argent électronique Canadian Tire au cours d’une même transaction.",
	chooseProduct_TriangleRewardsProgram_para5          : "<b>Si vous êtes titulaire d’une carte de paiement du programme et que vous ne maintenez pas votre compte de carte de crédit en règle, ou compte bancaire auquel votre carte de débit est liée, tout Argent électronique Canadian Tire que vous auriez pu obtenir en utilisant cette carte de paiement du programme pourrait, à l’entière discrétion de Canadian Tire, être annulé.</b> <br><br><b>Articles admissibles</b><br>Toutes les marchandises vendues dans les magasins Canadian Tire ou en ligne sur canadiantire.ca sont <b>admissibles</b>, à <U>l’exception de ce qui suit</U> : cartes-cadeaux, billets de loterie, permis de chasse et de pêche, frais d’élimination des pneus, taxes sur les pneus, frais de location Rug Doctor<sup>MD</sup>, dépôts remboursables, frais environnementaux, frais de réparation, frais de livraison ou d’assemblage, autres services en magasin (autres que le service automobile), ventes entre magasins, autre main-d’œuvre en magasin (autre que celle pour les réparations automobiles), dons à prix réduit, frais de tenue de compte, frais de remorquage, cartes pré-autorisées, cartes téléphoniques, articles de tabac ou alcool, pièces et main-d’œuvre Pit Stop<sup>MD</sup> et abonnement au Service de l’Assistance routière Canadian Tire<sup>MD</sup> achetés en personne ou en ligne, les primes pour l’assurance du solde de carte de crédit ou pour l’assurance ou les garanties prolongées sur les articles achetés avec une carte de crédit de marque Canadian Tire, les primes pour d’autres produits d’assurance de marque Canadian Tire, les avances de fonds, les opérations par chèque, les transferts de solde et autres opérations en espèces, tous frais portés à une carte de paiement du programme, les paiements effectués à un compte de carte de paiement du programme, la valeur des pièces ou articles échangés relativement à un achat, tout élément pour lequel la loi nous interdit d’accorder de l’Argent Canadian Tire à l’égard de tout autre bien ou service que nous pouvons déterminer de temps à autre à notre seule discrétion. De plus, chaque magasin Canadian Tire a le droit d’exclure d’autres articles vendus dans ce magasin de la liste des articles admissibles. Nous nous réservons le droit, à tout moment et sans préavis, de changer ce qui constitue un article admissible.",
	chooseProduct_TriangleRewardsProgram_para6          : "<b>Échanger de l’Argent électronique Canadian Tire</b><br> L’Argent électronique Canadian Tire ne peut être échangé que pour des marchandises (incluant les taxes applicables) achetées dans les magasins Canadian Tire participants ou dans d’autres magasins désignés par Canadian Tire. L’Argent électronique Canadian Tire ne peut être échangé contre des produits comme de l’alcool, du tabac, des cartes-cadeaux, des cartes prépayées, d’autres cartes ou articles prépayés, des articles que nous indiquons sur le site Web du programme et des articles que la loi interdit de vendre de cette façon; il ne peut être utilisé pour effectuer un paiement sur une carte de crédit émise par la Banque Canadian Tire ou sur des prêts ou pour des produits financiers ou d’assurance ou à l’égard des frais ou du découvert d’un compte bancaire de la Banque Canadian Tire. Pour échanger votre Argent électronique Canadian Tire, vous devez présenter votre carte Récompenses Triangle (ou méthode sans carte) ou votre carte de paiement à la caisse lors de votre achat. Veuillez noter que dans certains magasins Canadian Tire, il n’est pas possible de fournir simplement votre numéro de téléphone pour échanger de l’Argent électronique Canadian Tire; la présentation de votre carte Récompenses Triangle ou de votre carte de paiement du programme ou de votre application du programme peut être requise. L’Argent électronique Canadian Tire peut être utilisé en combinaison avec de l’Argent Canadian Tire en billet et toute autre forme de paiement. L’Argent électronique Canadian Tire obtenu au cours d’une transaction ne peut pas être échangé sur la même transaction. Vous ne pouvez pas échanger de l’Argent électronique Canadian Tire à partir de plusieurs comptes Récompenses Triangle pour la même transaction. Vous devez être inscrit au programme ou avoir activé votre carte de crédit du programme pour pouvoir utiliser l’Argent électronique Canadian Tire.",
	chooseProduct_TriangleRewardsProgram_para7          : "<b>Qu’arrive-t-il lorsqu’un article est retourné au magasin?</b><br>Si vous retournez un article pour remboursement et que vous aviez reçu de l’Argent électronique Canadian Tire lorsque vous avez acheté cet article, ce montant en Argent électronique Canadian Tire sera déduit de votre compte Récompenses Triangle. Les marchandises qui ont été achetées en tout ou en partie en échangeant de l’Argent électronique Canadian Tire ne peuvent pas être retournées contre de l’argent comptant, mais le compte Récompenses Triangle utilisé pour la transaction sera crédité du même montant en Argent électronique Canadian Tire utilisé pour effectuer l’achat initial.",
    chooseProduct_TriangleRewardsProgram_para8          : "<b>Expiration de l’Argent électronique Canadian Tire</b><br> Nous pouvons annuler l’Argent électronique Canadian Tire de votre compte Récompenses Triangle après une période d’inactivité de 18 mois. Aux fins de la présente section, &#171; inactivité &#187; signifie qu’il n’y a pas eu d’opération au cours de laquelle vous avez obtenu ou échangé de l’Argent électronique Canadian Tire pendant la période en question.",
 	chooseProduct_TriangleRewardsProgram_para9          : "<b>Fin de l’adhésion au programme et annulation du programme</b> Canadian Tire peut mettre fin au statut de membre dans l’un ou l’autre des cas suivants : <br>(A) le membre ne s’est pas conformé à l’une ou l’autre de ces modalités ou Canadian Tire détermine que le membre a abusé du programme ou a fait de fausses déclarations ou une déclaration trompeuse à Canadian Tire; <br>(B) le membre décède; <br>(C) le membre fait faillite ou devient insolvable ou une procédure de faillite ou d’insolvabilité est entamée par ou contre le membre; <br>(D) le membre est accusé d’une  &#171; infraction désignée &#187; (au sens du Code criminel canadien; <br>(E) la carte de paiement du programme du membre est résiliée par la Banque Canadian Tire, ou <br>(F) Canadian Tire soupçonne le membre de toute activité frauduleuse liée au programme ou à l’utilisation d’une carte de paiement du programme. Un membre peut choisir d’annuler son adhésion, en envoyant un avis écrit à l’adresse ci-dessous ou en appelant le service à la clientèle du programme. <br><br><U>La résiliation ou l’annulation de l’adhésion au programme entraînera la fermeture immédiate du compte Récompenses Triangle du membre et l’annulation de tout l’Argent électronique Canadian Tire du compte Récompenses Triangle sans compensation ni autre responsabilité envers le membre. La résiliation du compte Récompenses Triangle d’un membre aura également pour conséquence que le membre ne pourra plus utiliser une carte de paiement du Programme.</U> Canadian Tire peut, à sa seule discrétion et en tout temps, sans préavis, <br>(i) annuler le programme ou <br>(ii) fixer une date à laquelle l’Argent électronique Canadian Tire expirera et ne pourra plus être utilisé sauf si vous êtes un membre résidant au Québec, en Ontario ou dans une autre province où la loi l’interdit,.",
	chooseProduct_TriangleRewardsProgram_para10         : "<b>Fusionner des comptes Récompenses Triangle</b> <br>À la discrétion de Canadian Tire, les membres peuvent fusionner leurs comptes Récompenses Triangle sur un seul compte. Ce compte fusionné portera le numéro de compte Récompenses Triangle de l’un des comptes faisant l’objet de la fusion et un membre sera désigné comme titulaire de ce compte avec tous les pouvoirs et l’autorité nécessaires pour gérer le compte, y compris sa clôture, et deviendra le « Membre » aux termes de ces modalités. Tous les membres souhaitant fusionner leurs comptes Récompenses Triangle devront consentir à la fusion et s’entendre sur le numéro de compte qui sera désigné comme le numéro du compte Récompenses Triangle nouvellement fusionné ainsi que sur le membre qui en sera le titulaire. Tous les numéros de compte Récompenses Triangle restants seront annulés et les personnes qui ne sont pas désignées comme titulaires du compte ne seront plus membres du programme.",
	chooseProduct_TriangleRewardsProgram_para11         : "<b>Faire un don en Argent électronique Canadian Tire</b> Les membres peuvent être en mesure de faire don de leur Argent électronique Canadian Tire à des organismes de bienfaisance ou à des groupes communautaires choisis. Veuillez visiter le site Web du programme pour plus de détails sur le don d’Argent électronique Canadian Tire.",
	chooseProduct_TriangleRewardsProgram_para12         : "<b>Cartes Récompenses Triangle perdues ou volées</b><br> Si une carte Récompenses Triangle est perdue, volée ou détruite, Canadian Tire émettra une nouvelle carte sur présentation d’une pièce d’identité admissible, et le solde du compte Récompenses Triangle du membre sera transféré au compte Récompenses Triangle nouvellement créé. Canadian Tire n’assume aucune responsabilité si l’Argent Canadian Tire a été utilisé par toute personne qui présente une carte Récompenses Triangle, une méthode sans carte ou une carte de paiement du programme perdue ou volée avant que Canadian Tire ne soit avisé de la perte ou du vol.",
	chooseProduct_TriangleRewardsProgram_para13         : "<b>Partenaires</b><br> Nous pouvons, de temps à autre, désigner certains marchands dans lesquels vous pouvez obtenir ou échanger de l’Argent Canadian Tire (un partenaire). Nous nous réservons le droit de désigner sur le site Web du programme les noms des partenaires, les taux auxquels l’Argent électronique Canadian Tire peut être obtenu et échangé et la marchandise qui ne sera pas considérée comme admissible pour obtenir ou échanger de l’Argent électronique Canadian Tire et d’y apporter des modifications de temps à autre. L’Argent électronique Canadian Tire que vous obtenez auprès d’un partenaire peut ne pas être crédité ou peut être annulé ou peut ne pas pouvoir être échangé si ce partenaire ne nous fournit pas toutes les informations nécessaires, si nous ne pouvons pas confirmer que l’Argent électronique Canadian Tire a été obtenu correctement ou si ce partenaire ne respecte pas l’entente que nous avons avec lui concernant l’Argent électronique Canadian Tire. Si vous échangez de l’Argent électronique Canadian Tire chez un partenaire, nous ne sommes pas responsables des pertes, dommages, blessures, décès ou dépenses résultant de l’utilisation d’un article ou d’un service que vous avez acquis chez ce partenaire.",
    chooseProduct_TriangleRewardsProgram_para14         : "<b>Généralités</b><br> L’Argent électronique Canadian Tire n’est pas échangeable et ne peut être échangé contre de l’argent comptant ni subordonné à une garantie quelconque. L’Argent électronique Canadian Tire ne peut être transféré d’un membre à un autre membre ou à toute autre personne sans le consentement de Canadian Tire. Les présentes modalités, telles que modifiées de temps à autre par Canadian Tire, constituent l’entente intégrale entre le membre et Canadian Tire concernant l’Argent électronique Canadian Tire. À l’occasion, Canadian Tire, nos diverses entreprises au sein de la famille de sociétés Canadian Tire et tout partenaire peuvent vous communiquer, en utilisant les coordonnées que vous avez indiquées, des offres spéciales, des renseignements et des services par courriel, par message texte (des frais standards de messagerie texte et de transfert de données peuvent s’appliquer) ou par d’autres moyens de communication que vous avez choisis. Tout Membre qui ne désire pas recevoir ces offres peut l’indiquer sur le site Web du Programme ou en appelant le service à la clientèle du Programme au 1 800 226-8473. Il se peut également que nous communiquions avec vous pour des motifs liés à l’administration de votre compte et que nous vous envoyions des messages liés aux transactions ou à l’exploitation, même si vous avez retiré votre nom de nos listes de communication marketing. Toute exonération par Canadian Tire de toute non-conformité d’un membre aux présentes modalités ne sera pas considérée comme une renonciation de tout droit ou recours de Canadian Tire lié à tout autre manquement du membre de se conformer aux présentes modalités. Aucun retard ou aucune omission de Canadian Tire dans l’exercice de son droit ou de son recours en vertu des présentes ne sera considéré comme une renonciation à ce droit ou recours ou à tout autre droit ou recours. Toutes les cartes Récompenses Triangle demeurent la propriété exclusive de Canadian Tire et doivent être retournées à Canadian Tire au moment de l’annulation de l’adhésion d’un membre au programme si Canadian Tire en fait la demande. Le membre est responsable d’informer Canadian Tire de tout changement apporté à ses renseignements personnels (p. ex., nom, adresse, adresse de courriel, etc.) au moyen du site Web du programme ou en appelant le service à la clientèle du programme. Canadian Tire se réserve le droit de mettre fin à la participation d’un membre au programme ou de bloquer la capacité d’un membre à utiliser son Argent électronique Canadian Tire si Canadian Tire possède des renseignements inexacts ou incomplets concernant le membre en question. L’adhésion au programme constitue l’acceptation des présentes modalités et chaque personne qui présente une demande d’adhésion au programme consent à la collecte et à l’utilisation des renseignements personnels, conformément à la politique en matière de protection des renseignements personnels de Canadian Tire et conformément aux modifications qui y sont apportées de temps à autre. Si une disposition des présentes modalités est nulle ou inexécutable, elle n’aura aucune incidence sur la validité et la force exécutoire des autres dispositions des présentes modalités. Les membres sont tenus responsables des taxes, des droits ou des autres frais associés à leur adhésion au programme. Tout avis écrit à Canadian Tire peut être envoyé par la poste à l’adresse suivante:<br> Programme Récompenses Triangle<br> C. P. 2000,<br> succ. Main<br> Welland (Ontario)<br> L3B 5S3<br> Nous pouvons annuler tout Argent électronique Canadian Tire qui n’a pas été émis en bonne et due forme ou que nous pensons avoir été émis en raison d’une conduite frauduleuse ou d’une conduite incompatible avec les présentes modalités ou avec l’esprit du programme.",
 	chooseProduct_TriangleRewardsProgram_para15         : "<b>Pour les membres qui résident à l’extérieur du Québec seulement :</b><br> Canadian Tire peut modifier les présentes modalités en tout temps et sans préavis. La version des modalités affichée, le cas échéant, sur le site Web du programme régira le programme. Les présentes modalités sont régies par les lois de l’Ontario et les lois fédérales du Canada applicables en Ontario.",
	chooseProduct_TriangleRewardsProgram_para16         : "<b>Pour les membres qui résident au Québec seulement :</b><br> Canadian Tire peut modifier unilatéralement les présentes modalités et, sous réserve du paragraphe suivant, la version des modalités qui est affichée, le cas échéant, sur le site Web du programme régira le programme. Vous serez informé par écrit de toute modification apportée aux présentes modalités (indiquant la nouvelle disposition uniquement ou la disposition modifiée et son libellé avant la modification et la date de l’entrée en vigueur de la modification) au moins 60 jours, mais pas plus de 90 jours avant son entrée en vigueur. À la réception de l’avis, vous pouvez décider de rejeter la modification et de révoquer les présentes modalités. Les présentes modalités sont régies par les lois du Québec et les lois fédérales du Canada applicables au Québec. C’est à votre demande expresse que les modalités du programme sont rédigées en français. It is your express wish that these Program terms and conditions be written in the French language.",
	
	//------------------ VZE- 108 Ends -----------------------
	
	chooseProduct_ApplyNow_Button_Label               :                         "COMMENCER",
	//US4495
	chooseProduct_ApplyNow_Button_Label_with_testprint :	"COMMENCER / IMPRESSION D'ESSAI",

	chooseProduct_ReadTandC                           :                         "Lire les modalités",
	
	chooseProduct_HandoutTabToCustomerDialogContent		:	"Veuillez remettre la tablette au client pour qu’il puisse commencer sa demande.",
	chooseProduct_HandoutTabToCustomerDialogCancel		:	"ANNULER",
	chooseProduct_HandoutTabToCustomerDialogOk			:	"OK",
	
	chooseProduct_DialogContent						  :							"Vous êtes sur le point de demander une Mastercard de la Banque Canadian Tire",
	chooseProduct_DialogContent1					  :							"Si vous avez déjà une carte Mastercard de la Banque Canadian Tire et vous êtes approuvé pour cette carte de crédit, ce sera un nouveau compte.",
	chooseProduct_DialogContent2					  :							"Cette demande donnera lieu à une vérification de crédit.",
	chooseProduct_DialogCancel						  :							"ANNULER",
	chooseProduct_DialogProceed						  :							"CONTINUER",
	
	// US3981
	chooseProductScreen_Handoutprompts_Title			:	"Confirmation",
	chooseProductScreen_Handoutprompts_YesNo_Message	:	"Avez-vous fourni au demandeur le document de renseignements juridiques?",
	chooseProductScreen_Handoutprompts_Ok_Message		:	"Avant de continuer, tous les demandeurs doivent recevoir un document de renseignements juridiques.",

    overview_CostOfCreditDisclosure_MainTitle         :   "Veuillez lire les informations ci-dessous et cliquez sur 'Commencer' pour continuer.",
	overview_CostOfCreditDisclosure_Title			:   "Déclaration sur le coût du crédit relativement aux demandes de carte de crédit",
	overview_CostOfCreditDisclosure_Left1    	:   "Taux d'intérêt annuel",
	// Old line
	// overview_CostOfCreditDisclosure_Right1   	:   "<p>Les taux d'intérêt ci-dessous seront en vigueur à compter de la date d'ouverture de votre compte : <br><br>Tous les débits portés à votre compte (à l'exception des avances de fonds et des frais afférents) : <strong>19,99%</strong></p> <p>Avances de fonds et frais afférents : <strong>21,99%</strong></p> <p>Si votre demande de carte à ce taux n'est pas approuvée, il se peut que la Banque Canadian Tire accepte d'émettre une carte à votre nom portant un taux d'intérêt annuel de <strong>25,99%</strong> pour toutes les transactions (à l'exception des avances de fonds et des frais afférents) et de <strong>27,99%</strong>pour les avances de fonds et les frais afférents.</p>",
	overview_CostOfCreditDisclosure_Right1   	:   "<p>Les taux d’intérêt ci-dessous seront en vigueur à compter de la date d’ouverture de votre compte.</p><p><b>Si vous résidez ailleurs qu’au Québec :</b></p><p>Tous les débits portés à votre compte (à l’exception des transactions au comptant et des frais afférents) — <strong>19,99 %</strong></p> <p>Transactions au comptant (avances de fonds, transferts de solde, chèques de commodité, transferts de fonds, achats de chèques de voyage et transactions liées aux jeux de hasard) et les frais afférents – <strong>22,99 %</strong></p><p><b>Pour la carte Mastercard Triangle uniquement :</b>  Si votre demande de carte aux taux susmentionnés n’est pas approuvée, il se peut que la Banque Canadian Tire accepte d’émettre une carte à votre nom aux taux d’intérêt annuels suivants : <strong>25,99 %</strong> pour toutes les transactions (à l’exception des transactions au comptant et des frais afférents) et <strong>27,99 %</strong> pour les transactions au comptant et les frais afférents.</p><p><b>Si vous êtes un résident du Québec :</b></p><p>Tous les débits portés à votre compte (à l’exception des transactions au comptant et des frais afférents) — <strong>19,99 %</strong></p><p>Transactions au comptant et les frais afférents – <strong>21,99 %</strong></p><p><b>Pour la carte Mastercard Triangle uniquement :</b> Si votre demande de carte aux taux susmentionnés n’est pas approuvée, il se peut que la Banque Canadian Tire accepte d’émettre une carte à votre nom au taux d’intérêt annuel suivant : <strong>21,99 %</strong> pour toutes les transactions.</p>",
	overview_CostOfCreditDisclosure_OMZ_Right1    : "<p>Les taux d’intérêt ci-dessous seront en vigueur à compter de la date d’ouverture de votre compte.</p><p><b>Si vous résidez ailleurs qu’au Québec :</b></p><p>Tous les débits portés à votre compte (à l’exception des transactions au comptant et des frais afférents) — <span style=\"font-size: 12pt; font-weight: bold;\";><strong>19,99 %</strong></span></p> <p>Transactions au comptant (avances de fonds, transferts de solde, chèques de commodité, transferts de fonds, achats de chèques de voyage et transactions liées aux jeux de hasard) et les frais afférents – <span style=\"font-size: 12pt; font-weight: bold;\";><strong>22,99 %</strong></span></p><p><b>Si vous êtes un résident du Québec :</b></p><p>Tous les débits portés à votre compte (à l’exception des transactions au comptant et des frais afférents) — <span style=\"font-size: 12pt; font-weight: bold;\";><strong>19,99 %</strong></span></p><p>Transactions au comptant et les frais afférents – <span style=\"font-size: 12pt; font-weight: bold;\";><strong>21,99 %</strong></span></p>", 
	overview_CostOfCreditDisclosure_Left2    	:   "Période sans intérêt et délai de grâce",
	overview_CostOfCreditDisclosure_Right2   	:   "<p>Au moins <span style=\"font-size: 12pt;\";><strong>26</strong></span> jours ou, si vous résidez ailleurs qu'au Québec, au moins <span style=\"font-size: 12pt;\";><strong>21</strong></span> jours.</p><p> Vous bénéficiez d'un délai de grâce d'au moins <span style=\"font-size: 12pt;\";><strong>26</strong></span> jours sur les nouveaux achats (d'au moins <span style=\"font-size: 12pt;\";><strong>21</strong></span> jours si vous résidez ailleurs qu'au Québec) si nous recevons le paiement intégral du solde dû figurant sur votre relevé courant au plus tard à la date d'échéance de ce paiement.</p><p> Il n'y a aucun délai de grâce sur les transactions au comptant, comme les chèques de commodité, les transferts de solde et les avances de fonds, ni sur les frais liés à ces transactions.</p>",
	overview_CostOfCreditDisclosure_Left3    	:   "Paiement minimum",
	overview_CostOfCreditDisclosure_Right3   	:   "<p>Si vous résidez dans une autre province que le Québec, le paiement minimum correspondra à la somme :" +
													"<br><br>(A) des intérêts et des frais figurant sur votre relevé; plus" +
													"<br>(B) tout montant en souffrance ou, s’il est plus élevé, tout montant qui excède votre limite de crédit; plus" +
													"<br>(C) le montant de tous les versements échelonnés en vertu de programmes de paiements égaux alors dus; plus" + 
													"<br>(D) <span style=\"font-size: 12pt;\";><strong>10 $</strong></span>" +
													"<br>Un solde inférieur à <span style=\"font-size: 12pt;\";><strong>10 $</strong></span> doit être réglé intégralement." +
													"<br><br>Si vous résidez dans la province de Québec, le paiement minimum correspondra à la somme :" +
													"<br><br>(A) du plus élevé des montants suivants, à savoir (i) les intérêts et les frais figurant sur votre relevé plus <span style=\"font-size: 12pt;\";><strong>10 $</strong></span>, ou <br>(ii) <span style=\"font-size: 12pt;\";><strong>5 %</strong></span> du nouveau solde, à l’exclusion des montants dus aux termes de programmes de modalités spéciales de paiement; plus" +
													"<br>(B) tout montant qui excède votre limite de crédit; plus" +
													"<br>(C) tout montant en souffrance qui n’est pas inclus dans le montant (B) ci-dessus; plus" +
													"<br>(D) le montant de tous les versements échelonnés en vertu de programmes de paiements   égaux alors dus." +
													"<br>Un solde inférieur à <strong>10 $</strong> doit être réglé intégralement.</p>",
	overview_CostOfCreditDisclosure_Left4    	:   "Opérations de change",
	overview_CostOfCreditDisclosure_Right4   	:   "Toutes les transactions effectuées dans une monnaie étrangère seront converties en dollars canadiens au taux de conversion Mastercard courant majoré de <span style=\"font-size: 12pt;\";><strong>2,5 %</strong></span> (dans le cas de débits portés à votre compte) ou réduit de <span style=\"font-size: 12pt;\";><strong>2,5 %</strong></span> (dans le cas de crédits inscrits à votre compte) à la date à laquelle la transaction est inscrite à votre compte",
	overview_CostOfCreditDisclosure_Left5    	:   "Frais annuels",
	overview_CostOfCreditDisclosure_Right5   	:   "Aucuns",
	overview_CostOfCreditDisclosure_Left6    	:   "Autres frais",
	// Old line
	// 	overview_CostOfCreditDisclosure_Right6   	:   "<p><strong>Avances de fonds : 4&nbsp;$ – </strong> Facturés à la date à laquelle la transaction est inscrite à votre compte.</p> <p><strong> Frais de dépassement de limite de crédit : 29&nbsp;$ –</strong> Sauf si vous habitez au Québec, nous vous facturerons des frais de dépassement de limite de crédit de <strong>29 $</strong> si à la date d'un relevé votre solde excède votre limite de crédit et qu'il atteint ou excède <strong>2000 $.</strong>Cependant, pour déterminer si vous devez payer des frais de dépassement de limite de crédit, nous n'inclurons pas dans ce solde tout montant imputé sur cette facture pour des frais d'intérêts, ou pour une assurance crédit offerte par nous ou une de nos filiales. </p> <p><strong> Frais pour chèque sans provision ou refusé : 25&nbsp;$ – </strong> Imputés si un paiement que vous effectuez est refusé.</p><p><strong> Copie de remplacement : 2&nbsp;$ –</strong> Imputés lorsque vous demandez une copie d'un relevé ou d'une facture de vente.<p></p><strong>Administration du solde créditeur :</strong> Le moindre de <strong>10 $</strong>ou du solde du compte. – Imputés le dernier jour d'une période de facturation lorsque le compte comporte un solde créditeur et qu'il a été inactif au cours des <strong>12</strong> périodes de facturation.</p>",
	overview_CostOfCreditDisclosure_Right6   	:   "<p><span style=\"font-size: 12pt;\";><strong>Frais d’avances de fonds : 4 $</strong></span> — Facturés à la date à laquelle la transaction est inscrite à votre compte." +
													"<br><br><span style=\"font-size: 12pt;\";><strong>Frais pour chèque sans provision ou refusé : 25 $</strong></span> — Imputés si un paiement que vous effectuez est refusé." +
													"<br><br><span style=\"font-size: 12pt;\";><strong>Frais pour copie de remplacement : 2 $</strong></span> – Imputés lorsque vous demandez une copie d’un relevé.</p>" +
													"<span style=\"font-size: 12pt;\";><strong>Frais d’administration du solde créditeur :</strong></span> Le moindre de <span style=\"font-size: 12pt;\";><strong>2,00 $</strong></span> ou du montant de votre solde créditeur. Imputés le dernier jour d’une période de facturation lorsque le compte comporte un solde créditeur et qu’il a été inactif (sauf l’imputation de frais d’administration du solde créditeur) au cours des <span style=\"font-size: 12pt;\";><strong>2</strong></span> périodes de facturation précédentes.</p>",
    overview_AccrualInterest					:	"<b>Accumulation d’intérêt :</b> L’intérêt court quotidiennement sur chaque débit à compter de la date de la transaction donnant lieu à un débit particulier.",	
	overview_InterestRates						:	"<p>Pour les résidents du Québec : Les taux de crédit correspondent aux taux d’intérêt annuels indiqués dans le tableau ci-dessus.</p>",
	// US3381
	overview_EffectiveDate						:	"Renseignements en vigueur le <b>1 juin 2021.</b>",
	 overview_Triangle_world_ELite_MasterCardNote :	"<b>Veuillez noter que  World Elite Mastercard<sup style='font-size: .5em;'>MD</sup> Triangle<sup style='font-size: .5em;'>MC</sup> peut imposer des frais d'acceptation de cartes plus élevés aux commerçants.</b>",
	  
    overview_CostOfCreditDisclosure_ChooseProduct_Right1 :"<p>Les taux d’intérêt ci-dessous seront en vigueur à compter de la date d’ouverture de votre compte.</p><p><b>Si vous résidez ailleurs qu’au Québec :</b></p><p>Tous les débits portés à votre compte (à l’exception des transactions au comptant et des frais afférents) — <span style=\"font-size: 12pt; font-weight: bold;\";><strong>19,99 %</strong></span></p> <p>Transactions au comptant (avances de fonds, transferts de solde, chèques de commodité, transferts de fonds, achats de chèques de voyage et transactions liées aux jeux de hasard) et les frais afférents – <span style=\"font-size: 12pt; font-weight: bold;\";><strong>22,99 %</strong></span></p><p><b>Pour la carte Mastercard Avantage Essence uniquement :</b>  Si votre demande de carte aux taux susmentionnés n’est pas approuvée, il se peut que la Banque Canadian Tire accepte d’émettre une carte à votre nom aux taux d’intérêt annuels suivants : <span style=\"font-size: 12pt; font-weight: bold;\";><strong>25,99 %</strong></span> pour toutes les transactions (à l’exception des transactions au comptant et des frais afférents) et <span style=\"font-size: 12pt; font-weight: bold;\";><strong>27,99 %</strong></span> pour les transactions au comptant et les frais afférents.</p><p><b>Si vous êtes un résident du Québec :</b></p><p>Tous les débits portés à votre compte (à l’exception des transactions au comptant et des frais afférents) — <span style=\"font-size: 12pt; font-weight: bold;\";><strong>19,99 %</strong></span></p><p>Transactions au comptant et les frais afférents – <span style=\"font-size: 12pt; font-weight: bold;\";><strong>21,99 %</strong></span></p><p><b>Pour la carte Mastercard Avantage Essence uniquement :</b> Si votre demande de carte aux taux susmentionnés n’est pas approuvée, il se peut que la Banque Canadian Tire accepte d’émettre une carte à votre nom au taux d’intérêt annuel suivant : <span style=\"font-size: 12pt; font-weight: bold;\";><strong>21,99 %</strong></span> pour toutes les transactions.</p>",
   overview_CostOfCreditDisclosure_ChooseProduct_Right1_OMX	:	"<p>Les taux d’intérêt ci-dessous seront en vigueur à compter de la date d’ouverture de votre compte.</p><p><b>Si vous résidez ailleurs qu’au Québec :</b></p><p>Tous les débits portés à votre compte (à l’exception des transactions au comptant et des frais afférents) — <span style=\"font-size: 12pt; font-weight: bold;\";><strong>19,99 %</strong></span></p><p>Transactions au comptant (avances de fonds, transferts de solde, chèques de commodité, transferts de fonds, achats de chèques de voyage et transactions liées aux jeux de hasard) et les frais afférents – <span style=\"font-size: 12pt; font-weight: bold;\";><strong>22,99 %</strong></span></p><p><b>Pour la carte Mastercard Triangle uniquement :</b>  Si votre demande de carte aux taux susmentionnés n’est pas approuvée, il se peut que la Banque Canadian Tire accepte d’émettre une carte à votre nom aux taux d’intérêt annuels suivants : <span style=\"font-size: 12pt; font-weight: bold;\";><strong>25,99 %</strong></span> pour toutes les transactions (à l’exception des transactions au comptant et des frais afférents) et <span style=\"font-size: 12pt; font-weight: bold;\";><strong>27,99 %</strong></span> pour les transactions au comptant et les frais afférents.</p><p><b>Si vous êtes un résident du Québec :</b></p><p>Tous les débits portés à votre compte (à l’exception des transactions au comptant et des frais afférents) — <span style=\"font-size: 12pt; font-weight: bold;\";><strong>19,99 %</strong></span></p><p>Transactions au comptant et les frais afférents – <span style=\"font-size: 12pt; font-weight: bold;\";><strong>21,99 %</strong></span></p><p><b>Pour la carte Mastercard Triangle uniquement :</b> Si votre demande de carte aux taux susmentionnés n’est pas approuvée, il se peut que la Banque Canadian Tire accepte d’émettre une carte à votre nom au taux d’intérêt annuel suivant : <span style=\"font-size: 12pt; font-weight: bold;\";><strong>21,99 %</strong></span> pour toutes les transactions.</p>",


	contactInfo_Heading1						:  "Pour nous joindre",
	contactInfo_Heading2						:  "Quel est votre numéro?",
	contactInfo_PhoneToolTipMsg                 :   "Veuillez entrer un<br> numéro de <br>téléphone valide",
	contactInfo_Heading3						:  "Quelle est votre courriel? (Optionnel)",
	contactInfo_Heading4						:  "Relevés électroniques (Optionnel)",
	contactInfo_Heading5						:  "Modalités du service des relevés électroniques",
	contactInfo_EmailAddress					:	"Courriel",
	contactInfo_Para41							:	"Consultez, suivez et conservez vos relevés en ligne. Le relevé électronique est un moyen plus rapide et plus pratique de gérer votre compte de carte de crédit tout en contribuant à la protection de l'environnement. Vous serez avisé instantanément lorsque votre relevé est prêt, ce qui vous évitera d'attendre que le courrier soit livré. Vous pouvez modifier vos préférences de relevé à tout moment en vous connectant à votre compte en ligne.",
	contactInfo_Heading6						:  "Recevez les dernières offres et promotions (Optionnel)",
	contactInfo_Heading7						:  "Obtenez une prime de 5 $ en Argent CT<span class=\"MD10pt\"><sup></sup></span> lorsque vous vous inscrivez pour recevoir des offres. ",
	contactInfo_Para1							:  "Tous les champs sont obligatoires, sauf ceux marqués comme facultatifs.",
	contactInfo_Para2							:  "En nous fournissant votre numéro de téléphone mobile, vous augmentez vos chances d’approbation immédiate et vous pourrez ajouter votre carte à votre portefeuille numérique tout de suite!<br><br>"+
													" Remarque : il se peut que nous vous envoyions des avis sur votre compte par message texte. Ces messages n’entraîneront aucuns frais.",
	contactInfo_Para3							:  "Oui, j’aimerais recevoir des relevés électroniques et J’ai lu et j’accepte les modalités.",
	contactInfo_Para3_1							:  "Nous vous enverrons un courriel une fois votre demande approuvée. En fournissant votre adresse électronique, vous nous indiquez que nous pouvons vous tenir au courant de votre demande de carte.",
	contactInfo_Para51							:  "Modalités du service des relevés électroniques",
	contactInfo_Para52							:  "1. Vous pouvez continuer d'accéder aux renseignements sur votre compte à partir du site ctfs.com et du service bancaire téléphonique.<br>"+
													"2. Le traitement de votre demande prend habituellement une journée ouvrable. Par conséquent, selon la date de votre relevé, vous pourriez recevoir un dernier relevé imprimé par la poste avant de recevoir vos relevés en ligne.<br>"+
													"3. Si vous recevez actuellement un relevé imprimé par la poste, celui-ci ne vous sera plus envoyé. De plus, la plupart des avis de modifications aux renseignements contenus dans le document d'information que vous avez reçu à l'ouverture de votre compte ainsi que les avis de changements à votre contrat du titulaire de carte seront envoyés par voie électronique plutôt que par la poste. Ces avis figureront sous forme de messages sur votre relevé mensuel ou vous recevrez un avis par courriel vous indiquant que vous avez reçu de tels avis et que vous pouvez les consulter en ouvrant une session Votre compte en ligne.<br>"+
													"4. Nous vous ferons parvenir un courriel vous avisant que votre relevé est disponible. Cet avis par courriel peut également inclure certains renseignements relatifs à votre compte, comme le paiement minimum et la date d’échéance. Si vous devez recevoir une communication distincte de votre relevé, nous vous enverrons un avis par courriel vous informant qu’un tel avis est disponible. Vous devrez alors ouvrir une session Votre compte en ligne pour pouvoir consulter votre relevé électronique ou tout message envoyé séparément. Les courriels seront envoyés à l’adresse que vous nous aurez fournie. Il vous incombe de nous fournir une adresse courriel valide et de nous aviser de toute modification à cette adresse. Pour modifier votre adresse, ouvrez une session Votre compte en ligne, puis sélectionnez l’option Gérer mes préférences de courriel dans Paramètres.<br>"+
													"5. Les documents fournis par voie électronique seront conservés et mis à votre disposition dans Votre compte en ligne pendant 7 ans. Il vous incombe de conserver une copie de vos relevés électroniques. Vous pouvez annuler votre inscription et revenir aux relevés et aux avis de changement envoyés par la poste en tout temps via Votre compte en ligne en sélectionnant « Préférences de relevé » dans les paramètres de la carte ou en nous appelant sans frais au 1-800-459-6415. Toutefois, il est très important que vous sauvegardiez ou imprimiez tout document électronique dans votre compte Votre compte en ligne avant l’annulation, car vous n’y aurez plus accès une fois l’annulation confirmée.<br>"+
													"6. La Banque Canadian Tire n'est pas responsable de quelque problème technique que ce soit relatif à votre ordinateur qui vous empêcherait d’accéder à votre relevé électronique ou à tout avis ou autre document versé dans Votre compte en ligne ou de recevoir quelque avis par courriel que ce soit provenant de nous.<br>"+
													"7. Vous comprenez que tous les titulaires de carte additionnelle à qui vous avez accordé l’accès au présent compte pourront accéder aux renseignements antérieurs de votre compte, y compris à ceux sur le titulaire de carte principal et les autres titulaires de carte additionnelle.<br>"+
													"8. Vous devez composer le 1 800 459-6415 dans les 90 jours de la date d’inscription d’une transaction si celle-ci a été portée à votre compte par erreur.<br>"+
													"9. Nous fournissons les relevés, les avis et les autres documents électroniques en format PDF pour que vous puissiez les imprimer ou les sauvegarder en toute facilité. Vous devez utiliser le logiciel Adobe Reader pour visionner vos relevés électroniques. La plupart des versions de ce logiciel sont gratuites.<br>"+
													"10. Vos relevés, avis et autres documents vous seront de nouveau envoyés par la poste si votre compte est en souffrance pendant trois périodes de facturation ou plus. Vous pourrez vous inscrire de nouveau au service de relevés électroniques dès que votre compte redeviendra en règle. En cochant la case correspondante, vous acceptez les modalités ci-dessus et confirmez que vous désirez maintenant recevoir par voie électronique les relevés mensuels de votre compte de carte de crédit, tout avis de modifications au document d’information reçu à l’ouverture de votre compte et tout avis de changements à votre contrat du titulaire de carte. Dans le cas contraire, cliquez sur Annuler.<br>"+
													"Pour en savoir plus sur notre politique relative à la collecte, à l’utilisation, à la communication et à la protection de vos renseignements personnels, consultez le Document relatif à la protection des renseignements personnels.<br>"+
													"En cochant la case correspondante, vous acceptez les modalités ci-dessus et confirmez que vous désirez à partir de maintenant recevoir par voie électronique les relevés mensuels de votre compte de carte de crédit et tout avis de modifications au document d’information reçu à l’ouverture de votre compte. Dans le cas contraire, cliquez sur Annuler. Pour obtenir de plus amples renseignements sur notre politique relative à la collecte, à l’utilisation, à la communication et à la protection de vos renseignements personnels, consultez notre page Modalités juridiques et renseignements personnels.<br>"+
													"En vigueur à compter du 26/04/2018",	
	contactInfo_Para5							:  "Profitez au maximum de votre carte de crédit en recevant des offres."+
													"Cochez la case ci-dessous pour nous indiquer que vous ne voulez rien manquer!",
	contactInfo_Para6							:  "<i>Je consens à recevoir des communications promotionnelles de la Société Canadian Tire Limitée et de ses sociétés affiliées et/ou partenaires commerciaux, y compris de la Banque Canadian Tire et des Services Canadian Tire Limitée. Vous pouvez nous contacter à l’adresse <b>serviceclientele@cantire.ca</b> et vous désabonner en tout temps. Les tarifs standard de messagerie et de transmission de données peuvent s’appliquer.</i><br><br>"+
													"<i>Si vous recevez déjà des courriels de Canadian Tire ou de ses sociétés affiliées, vous pouvez ignorer cette case. Vos préférences ne changeront pas.</i><br>",
    													  
	personalData_TellUsAboutYourself                  :                         "Renseignements personnels",
	personalData_IDType                               :                         "Type de pièce d'identité",
	personalData_ScanID  	     					  : 						"Balayer pièce ID",
	
	// US4078
	// personalData_PlaceOfIssue                         :                         "Province émettrice de l'identification", - OLD
	personalData_PlaceOfIssue                         :                         "Lieu de délivrance de la pièce d’identité",
	
	personalData_IDNumber                             :                         "N° de la pièce d'identité",
    // US4976
	personalData_DOB_18YearsError                     :                         "Vous devez avoir atteint l'âge de la majorité dans votre province pour fair une demande",
	personalData_DOB_19YearsError                     :                         "Vous devez être âgé de 19 ans ou plus pour faire une demande",

	personalData_Title                                :                         "Titre de civilité",
	personalData_MR                                   :                         " M.",
	personalData_MRS                                  :                         " MME",
	personalData_MISS                                 :                         " MLLE",
	personalData_MS                                   :                         " MLLE",
	// VZE-265
	personalData_cityNameLongerThen24CharError_msg    :    "Veuillez saisir le nom d’une ville de 24 caractères ou moins. Si vous ne connaissez pas le nom abrégé de votre ville, veuillez utiliser le champ de recherche d'adresse fourni.",

	personalData_FirstName                            :                         "Prénom",
	personalData_Initial                              :                         "Initiale du deuxième prénom",
	personalData_LastName                             :                         "Nom de famille",
	personalData_DateOfBirth                          :                         "Date de naissance",
	personalData_EmailAddress                         :                         "Adresse électronique",
	personalData_HomePhone                            :                         "Téléphone (rés.)",
	personalData_CellPhone                            :                         "Téléphone (cell.)<sup>*</sup>",
	
	mobilePayment_HandoutTabToRepDialogContent	  	  :							"Veuillez retourner la tablette au représentant de votre magasin pour qu'il examine votre demande.",
	mobilePayment_HandoutTabToRepDialogCancel	  	  :							"ANNULER",
	mobilePayment_HandoutTabToRepDialogOk		  	  :							"OK",
	// US4926
	mobilePayment_mobilePhone                         :                          "Téléphone mobile",
	
	// US4709
	personalData_PrimaryPhone						  :							"Numéro de téléphone principal",
	personalData_SecondaryPhone						  :							"Numéro de téléphone secondaire",
	personalData_Landline							  :							"Ligne fixe",
	personalData_Mobile								  :							"Cellulaire",
	personalData_MobilePayments						  :							"Les paiements mobiles sont arrivés!",
	personalData_MobilePayments_Para1				  :							"Souhaitez-vous configurer Apple Pay<span class=\"MD\"><sup></sup></span> ou Google Pay<span class=\"MC\"><sup></sup></span> dès aujourd’hui si votre demande de carte de crédit est approuvée?",
	personalData_MobilePayments_Para2				  :							"En sélectionnant OUI!, vous consentez à ce que la Banque Canadian Tire procède à une vérification de vos renseignements personnels, comme votre nom, votre adresse, votre date de naissance et votre numéro de téléphone mobile auprès de votre fournisseur de services mobiles et vous autorisez votre fournisseur de services mobiles à nous fournir ces renseignements <i><b>(Tenue de compte, type de compte, etc.)</i></b>.  Les renseignements concernant votre compte de téléphonie mobile seront utilisés pour vérifier votre identité et contribueront à notre stratégie de lutte contre la fraude en nous permettant d’effectuer des analyses et des enquêtes.",
	personalData_MobilePayments_Para3				  :							"Vous recevrez les instructions pour configurer votre appareil lorsque votre demande de carte de crédit sera approuvée. Nous vous enverrons un message texte avec un code de sécurité à 3 chiffres dont vous aurez besoin pour terminer la configuration. Les tarifs standard de messagerie texte et de transmission de données peuvent s’appliquer.",
	personalData_MobilePayments_Para4				  :							"Tout appareil utilisant Android Kit Kat 4.4 ou une version plus récente",
	personalData_MobilePayments_Para5				  :							"Tout iPhone 6 ou modèle plus récent",
	personalData_AndroidorApplePay_Yes				  :							"OUI!",
	personalData_AndroidorApplePay_NoThanks			  :							"Non merci",
	personalData_TermsandConditions_Para1			  :							"Apple Pay, le logo Apple et iPhone sont des marques de commerce de Apple Inc.",
	personalData_TermsandConditions_Para2			  :							"Android, Google Pay et le logo Google sont des marques de commerce de Google Inc.",
		
	
	// US4364	
	personalData_ExpiryDate							  :							"Date d'expiration de la pièce d'identité",

	personalData_Correspondence                       :                         "Langue de correspondance:",
	personalData_English                              :                         "Anglais",
	personalData_French                               :                         "Français",

	personalData_AddressConfirmation_Title			  :							"Confirmation de l’adresse",
	personalData_AddressNotFound_Title				  :							"Impossible de trou l’adresse",
	personalData_AddressNotFound_Message			  :							"Votre adresse est numérisée comme :",
	personalData_AddressScannedAs					  :							"Votre adresse a été numérisée comme suit :",
	personalData_CanadaPostNotFindAddress			  :							"Postes Canada n’a pas pu trouver votre adresse. Veuillez saisir votre adresse manuellement.",
	personalData_AddressCanadaPostFormat			  :							"Format recommandé par Postes Canada :",
	personalData_AddressAccept						  :							"Accepter",
	personalData_AddressContinue					  :							"Continuer Avec L'adresse Numérisée",
	canadaPostMessageDialog_ok 					  	  : 						"D’ACCORD",
	personalData_AddressInformation                   :                         "ADRESSE",
	personalData_Address_PostalCode                   :                         "Code postal",
	personalData_Address_StreetNumber                 :                         "Numéro de rue",
	personalData_Address_Button_Label                 :                         "RECHERCHE D'ADRESSE",
	personalData_Scan_Id_Label                        :                         "Scanner le permis de conduire",
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
	//  US5131 WICI - Add Student Housing label to Residence Type list
	personalData_Address_Student                     :                         "Logement étudiant",
	personalData_Address_Other                       :                         "Autres",

	personalData_Address_MonthlyPayment              :                         "Loyer / hypothèque (montant mensuel)",
	personalData_Address_Duration                    :                         "Depuis combien de temps habitez-vous à votre adresse actuelle? ",
	personalData_Address_DurationYears               :                         "Années",
	personalData_Address_DurationMonths              :                         "Mois",
	
	// US3623
	personalData_PreviousAddressWasInCanada			 :						   "Votre adresse précédente se trouvait-elle au Canada?",

	personalData_PreviousAddress_Title               :                         "Adresse précédente requise seulement",
	personalData_PreviousAddress_Description         :                         " si moins de deux ans à l'adresse actuelle",
	 
	 // VZE-52
	pesonalData_covid19LockDownYear                    : "2020",
	pesonalData_covid19LockDownMonth                    : "03",
	pesonalData_covid19LockDownDay                    : "01",
	
	// VZE-161
	ExpiryDateMonth_null                              :   'Mois',
	ExpiryDateMonth_JA                                :   'janvier',
	ExpiryDateMonth_FE                                :   'février',
	ExpiryDateMonth_MR                                :   'mars',
	ExpiryDateMonth_AL                                :   'avril',
	ExpiryDateMonth_MA                                :   'mai',
	ExpiryDateMonth_JN                                :   'juin',
	ExpiryDateMonth_JL                                :   'juillet',
	ExpiryDateMonth_AU                                :   'août',
	ExpiryDateMonth_SE                                :   'septembre',
	ExpiryDateMonth_OC                                :   'octobre',
	ExpiryDateMonth_NO                                :   'novembre',
	ExpiryDateMonth_DE                                :   'décembre',
	ExpiryDateDay_null                                :   'Jour',
	ExpiryDateYear_null                               :   'Année',
	expiryDate_error_title                            :   'Êtes-vous sûr?',
	expiryDate_error_message                          :   'Veuillez vous assurer que la date d’expiration de votre pièce d’identité exacte',
	expiryDate_continue_button                        :   'Continuer',
	expiryDate_cancel_button                          :   'Annuler',


	personalData_PreviousAddress_PostalCode          :                         "Code postal*",
	personalData_PreviousAddress_StreetNumber        :                         "Numéro d'adresse ",

	personalData_PreviousAddress_Button_Label        :                         "RECHERCHE D'ADRESSE",

	personalData_PreviousAddress_AddressLine1        :                         "Adresse postale ligne 1*",
	personalData_PreviousAddress_AddressLine2        :                         "Adresse postale ligne 2",
    personalData_PreviousAddress_SuiteUnit           :                         "No unité",
    personalData_PreviousAddress_City                :                         "Ville*",
	personalData_PreviousAddress_Province            :                         "Province*",
	
	// US5414 
	chooseProductScreen_LegalHandout_PleaseSign         :   "Veuillez signer ici",
	chooseProductScreen_LegalHandout_Message            :   "Je confirme que j'ai fourni au demandeur le document d'information juridique.",


	// US3623
	personalData_PreviousAddress_NotInCanada		  :							"Adresse précédente est pas au Canada:",
	
	personalData_Note								  :							"Remarque : il se peut que nous vous envoyions des avis sur votre compte par message texte. Ces messages n’entraîneront aucuns frais.",
	receiveEmail_Text									:						"<i>Oui, j’aimerais recevoir des détails sur les offres et les événements exclusifs.</i>",
	receiveEmail_TextAreaText_1							:	"Je consens à recevoir des communications promotionnelles de la Société Canadian Tire Limitée et de ses sociétés affiliées et/ou partenaires commerciaux, y compris de la Banque Canadian Tire et des Services Canadian Tire Limitée.  Vous pouvez nous contacter à l’adresse serviceclientele@cantire.ca et vous désabonner en tout temps.  Les tarifs standard de messagerie et de transmission de données peuvent s’appliquer.",
	receiveEmail_TextAreaText_2							:	"Si vous recevez déjà des courriels de Canadian Tire ou de ses sociétés affiliées, vous pouvez ignorer cette case.  Vos préférences ne changeront pas.",
	receiveEstmt_Text									:	"Oui, j’aimerais recevoir des relevés électroniques.",
	receiveEstmt_TextAreaText							:	"<p><b>Modalités du service des relevés électroniques</b></p>"+"<p>1. Vous pouvez continuer d’accéder aux renseignements sur votre compte à partir du site ctfs.com et du service bancaire téléphonique.</p>"+"<p>2. Le traitement de votre demande prend habituellement une journée ouvrable. Par conséquent, selon la date de votre relevé, vous pourriez recevoir un dernier relevé imprimé par la poste avant de recevoir vos relevés en ligne.</p>"+"<p>3. Si vous recevez actuellement un relevé imprimé par la poste, celui-ci ne vous sera plus envoyé. De plus, la plupart des avis de modifications aux renseignements contenus dans le document d’information que vous avez reçu à l’ouverture de votre compte ainsi que les avis de changements à votre contrat du titulaire de carte seront envoyés par voie électronique plutôt que par la poste. Ces avis figureront sous forme de messages sur votre relevé mensuel ou vous recevrez un avis par courriel vous indiquant que vous avez reçu de tels avis et que vous pouvez les consulter en ouvrant une session Mon compte en ligne.</p>"+"<p>4. Nous vous ferons parvenir un courriel vous avisant que votre relevé est accessible. Nous vous enverrons un courriel lorsque votre compte contiendra un message distinct de votre relevé mensuel. Vous devrez alors ouvrir une session Mon compte en ligne pour pouvoir visionner votre relevé électronique ou tout message envoyé séparément. Les courriels seront envoyés à l’adresse que vous nous aurez fournie. Il vous incombe de nous fournir une adresse courriel valide et de nous aviser de toute modification à cette adresse. Pour modifier votre adresse, ouvrez une session Mon compte en ligne, puis sélectionnez l’option Gérer mes préférences de courriel dans Paramètres.</p>"+"<p>5. Les documents fournis par voie électronique seront conservés et disponibles dans Mon compte en ligne pendant sept ans. Il vous incombe de conserver une copie de ces documents. Vous pouvez en tout temps annuler votre inscription et recommencer à recevoir des avis de changements et des relevés par la poste. Vous n’avez qu’à ouvrir Mon compte en ligne et à sélectionner Changer l’option de relevé dans le menu principal de la page d’accueil, ou encore qu’à nous téléphoner sans frais au 1 800 459-6415. Toutefois, il est important que vous enregistriez ou imprimiez tous les documents électroniques contenus dans Mon compte en ligne avant de faire le changement, car vous n’aurez alors plus accès à ceux-ci en ligne.</p>"+"<p>6. La Banque Canadian Tire n’est pas responsable de quelque problème technique que ce soit relatif à votre ordinateur qui vous empêcherait d’accéder à votre relevé électronique ou à tout avis ou autre document versé dans Mon compte en ligne ou de recevoir quelque avis par courriel que ce soit provenant de nous.</p>"+"<p>7. Vous comprenez que tous les titulaires de carte additionnelle à qui vous avez accordé l’accès au présent compte pourront accéder aux renseignements antérieurs de votre compte, y compris à ceux sur le titulaire de carte principal et les autres titulaires de carte additionnelle.</p>"+"<p>8. Vous devez composer le 1 800 459-6415 dans les 90 jours de la date d’inscription d’une transaction si celle-ci a été portée à votre compte par erreur.</p>"+"<p>9. Nous fournissons les relevés, les avis et les autres documents électroniques en format PDF pour que vous puissiez les imprimer ou les sauvegarder en toute facilité. Vous devez utiliser le logiciel Adobe Reader pour visionner vos relevés électroniques. La plupart des versions de ce logiciel sont gratuites.</p>"+"<p>10. Vos relevés, avis et autres documents vous seront de nouveau envoyés par la poste si votre compte est en souffrance pendant trois périodes de facturation ou plus. Vous pourrez vous inscrire de nouveau au service de relevés électroniques dès que votre compte redeviendra en règle. En cochant la case correspondante, vous acceptez les modalités ci-dessus et confirmez que vous désirez maintenant recevoir par voie électronique les relevés mensuels de votre compte de carte de crédit, tout avis de modifications au document d’information reçu à l’ouverture de votre compte et tout avis de changements à votre contrat du titulaire de carte. Dans le cas contraire, cliquez sur Annuler.</p>"+"<p>Pour en savoir plus sur notre politique relative à la collecte, à l’utilisation, à la communication et à la protection de vos renseignements personnels, consultez le Document relatif à la <a href='https://ctfs.com/content/ctfs/fr/legal_privacy.html' target='_blank'>protection des renseignements personnels.</a></p>"+"<p>En vigueur à compter du 17 Novembre 2017</p>",
	
	// US4637
	//EmailInfo_PageTitle								  :							"Renseignements sur le courrier électronique",
	EmailInfo_PageTitle								  :							" ",
	
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
	finEmpInfo_GrossIncome                            :                         "Revenu annuel personnel brut",	
	finEmpInfo_GrossHouseholdIncome                   :                         "Revenu annuel brut du ménage",
	
	finEmpInfo_SIN                                    :                         "Numéro d'assurance sociale (facultatif) </br> <span style=\"font-family: Helvetica, Arial, sans-serif; font-size: 9pt; font-weight: bold; color: #1569C7\";><p> En fournissant votre numéro d’assurance sociale, vous aidez à accélérer le processus d’examen de votre demande, car nous pouvons alors traiter plus rapidement vos renseignements financiers.</p></span>",
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

	supCardRequest_WouldYouLikeACard                  :                         "J'accepte, veuillez ajouter une carte additionnelle.",
	supCardAttention_Text 							  :							"Attention! Les renseignements du titulaire de carte<br>supplémentaire doivent être complets et précis.",

	supCardRequest_ForWhom                            :                         "Demande de carte additionnelle pour :",
	supCardRequest_Spouse                             :                         "Conjoint(e)",
	supCardRequest_Son                                :                         "Fils",
	supCardRequest_Daughter                           :                         "Fille",
	supCardRequest_Relative                           :                         "Parent",
	supCardRequest_Other                              :                         "Autre",

	supCardRequest_FirstName                          :                         "Prénom",
	supCardRequest_Initial                            :                         "Initiale du deuxième prénom",
	supCardRequest_LastName                           :                         "Nom de famille",
	supCardRequest_DateOfBirth                        :                         "Date de naissance",
	supCardRequest_Telephone                          :                         "Téléphone",

	supCardRequest_SameAddyPrimaryApplicant           :                         "Même adresse que le demandeur principal?",

	sigScreen_Title                                   :                         "SIGNATURE",
	sigScreen_ChooseCardRightForYou                     :    "Choisissez la carte qui répond le mieux à vos besoins :", 
	sigScreen_OMZCard_Note                              :   "<p><b>Veuillez noter que la carte Mastercard<sup style='font-size: .5em;'>MD</sup> Triangle<sup style='font-size: .5em;'>MC</sup> et World Elite Mastercard<sup style='font-size: .5em;'>MD</sup> Triangle<sup style='font-size: .5em;'>MC</sup><br> ont les mêmes frais, période de grâce et formule de paiement minimal.</b> </p>",
	sigScreen_Date                                    :                         "Date : ",
	sigScreen_ProceedToConfirmation					  : 						"PASSER À LA PAGE SUIVANTE",
	
	sigScreen_WorldEliteCard_text                       :	"<strong><p style='-webkit-margin-before: 0em; -webkit-margin-start: 0.5em; -webkit-margin-after: 0.3em; '>J’aimerais changer ma demande<br> pour la carte World Elite <br>Mastercard<sup style='font-size: .5em;'>MD</sup> Triangle<sup style='font-size: .5em;'>MC</sup><strong></p>",
	sigScreen_WorldEliteCard_text1                       :	"<strong><p>la carte World Elite Mastercard<sup style='font-size: .5em;'>MD</sup></strong></p> <br>",
	sigScreen_WorldEliteCard_text2                       :	"<strong><p>Triangle<sup style='font-size: .5em;'>MC</sup><strong></p><br>",
	sigScreen_WorldEliteCard_Note_text                   :	"<strong> Pensez-y si : </strong> <br>",
	sigScreen_WorldEliteCard_Note_text1                   :	"Vous avez une excellente  <br>",
	sigScreen_WorldEliteCard_Note_text2                   :	"cote de crédit  <br> ",
	sigScreen_WorldEliteCard_Note_text3                   :	"Vous répondez au<br>",
	sigScreen_WorldEliteCard_Note_text4                   :	"critère minimal de revenu<br>",
    sigScreen_TriangleCard_text                         :   "<p><strong>Je vais garder la </strong> <br>carte Mastercard<sup style='font-size: .5em;'>MD</sup>  Triangle<sup style='font-size: .5em;'>MC</sup></p>", 
    sigScreen_TriangleCard_text1                        :   "Mastercard<sup style='font-size: .5em;'>MD</sup>  Triangle<sup style='font-size: .5em;'>MC</sup> ",
    signature_World_ELiteMasterCard 					: 	"World Elite Mastercard<sup style='font-size: .5em;'>MD</sup> Triangle<sup style='font-size: .5em;'>MC</sup>",
    sigworldElite_MasterCardNote_1                      :	"<b>Veuillez noter que la carte World Elite  Mastercard<sup style='font-size: .5em;'>MD</sup> Triangle<sup style='font-size: .5em;'>MC</sup> peut imposer aux commerçants des frais d’acceptation plus élevés.</b>",
 

	ProvincesList_null                                :"Veuillez sélectionner...",
	IdTypesList_null                                  :"Veuillez sélectionner...",

	RetailNetWorkList_null                              :	"Veuillez sélectionner...",
	Canadian_Tire                                       :   'Canadian Tire',
	Marks                                               :   'L\'\Equipeur',
	SportsCheck_OR_Atmosphere                           :   'Sport Chek',
	Gas                                                 :   'Essence+',
	Sports_Expert                                       :   'Sports Experts',
	Pro_Hockey_Life                                     :   'Pro Hockey Life',
	National_Life                                       :   'National Sports',
	Marks_Franchise			                            :   'La franchise  L\'\Equipeur',
	Out_of_Store			                            :   'Hors Magasin',
	Partner_Locations		                            :   'Sites partenaires',
	Party_City				                            :   'Party City',
	
	IdTypesList_DR                                    :" PERMIS DE CONDUIRE",
	IdTypesList_HE                                    :" CARTE D'ASSURANCE-MALADIE",
	IdTypesList_PR                                    :" CARTE DE RÉSIDENT PERMANENT",
	IdTypesList_BI                                    :" CERTIFICAT DE NAISSANCE",
	IdTypesList_CI                                    :"CERTIFICAT DE CITOYENNETÉ CANADIENNE",
	IdTypesList_PA                                    :"PASSEPORT",
	IdTypesList_IN                                    :"CERTIFICAT DU STATUT D'INDIEN",
	//IdTypesList_RE                                    :"FICHE RELATIVE AU DROIT D'ÉTABLISSEMENT",
	IdTypesList_RE                                    :"FICHE D’ÉTABLISSEMENT",
	
	IdTypesList_BC                                    :"CARTE D’IDENTITÉ DE LA COLOMBIE-BRITANNIQUE",
	IdTypesList_AB                                    :"CARTE D’IDENTITÉ DE L’ALBERTA",	
	IdTypesList_NS                                    :"CARTE D’IDENTITÉ DE LA NOUVELLE-ÉCOSSE",
	IdTypesList_NB                                    :"CARTE D’IDENTITÉ DU NOUVEAU-BRUNSWICK",
	IdTypesList_NL                                    :"CARTE D’IDENTITÉ DE TERRE-NEUVE-ET-LABRADOR",
	IdTypesList_SK                                    :"CARTE D’IDENTITÉ DE SASKATCHEWAN",
	IdTypesList_MB                                    :"CARTE D’IDENTITÉ DU MANITOBA",
	IdTypesList_PE                                    :"CARTE D’IDENTITÉ DE L’ÎLE-DU-PRINCE-ÉDOUARD",
	IdTypesList_NT                                    :"CARTE D’IDENTITÉ DES TERRITOIRES DU NORD-OUEST",
	IdTypesList_NU                                    :"CARTE D’IDENTITÉ DU NUNAVUT",
	IdTypesList_YT                                    :"CARTE D’IDENTITÉ DU YUKON",
	IdTypesList_ON                                    :"CARTE D’IDENTITÉ DE L’ONTARIO",
	IdTypesList_SC									  : "CARTE DES SERVICES DE LA COLOMBIE-BRITANNIQUE",
	
	/*
	IdTypesList_AB									  : "CARTE D’IDENTITÉ DE L’ALBERTA",
	IdTypesList_BS									  : "CARTE DES SERVICES DE LA COLOMBIE-BRITANNIQUE",
	IdTypesList_BC									  :	"CARTE D’IDENTITÉ DE LA COLOMBIE-BRITANNIQUE",
	IdTypesList_MB									  :	"CARTE D’IDENTITÉ DU MANITOBA",
    IdTypesList_NB									  :	"CARTE D’IDENTITÉ DU NOUVEAU-BRUNSWICK",
    IdTypesList_NL									  :	"CARTE D’IDENTITÉ DE TERRE-NEUVE-ET-LABRADOR",
    IdTypesList_NS									  :	"CARTE D’IDENTITÉ DE LA NOUVELLE-ÉCOSSE",
    IdTypesList_NT									  :	"CARTE D’IDENTITÉ DES TERRITOIRES DU NORD-OUEST",
    IdTypesList_NU									  :	"CARTE D’IDENTITÉ DU NUNAVUT",
    IdTypesList_ON									  :	"CARTE D’IDENTITÉ DE L’ONTARIO",
    IdTypesList_PE									  :	"CARTE D’IDENTITÉ DE L’ÎLE-DU-PRINCE-ÉDOUARD",
    IdTypesList_SK									  :	"CARTE D’IDENTITÉ DE SASKATCHEWAN",
    IdTypesList_YT									  :	"CARTE D’IDENTITÉ DU YUKON",
	*/	

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
	personalData1_validation_primaryRadio			  :	'Sélectionnez PrimaryRadio valide',
    personalData1_validation_secondaryRadio			  :	'Sélectionnez SecondaryRadio valide',
    personalData1_validation_MobilePaymentYesOrNo	  : 'Select Mobile payment yes or no radio',
	// US3623
    personalData1_validation_preAddrNotInCanada			: 	'Sélectionnez valide Adresse précédente pas au Canada Oui / Non',

    //US3625
	personalData_Scan_Loyalty_Label                     :   "Scanner la carte recompences Triangle<sup style='font-size: .5em;'>MC</sup>( autrefois Mon Argent Canadian Tire<sup style='font-size: .5em;'>MD</sup>)",
	personalData_Scan_Loyalty_Dialog_Label              :   "Scanner la carte recompences Triangle",
	scanLoyaltyDialog_holdText							:   "Tenez la carte Recompences Triangle à balayer derrière la tablette, comme l’illustre la photo ci-dessus, de sorte que le code à barres soit dans le champ de vision de la caméra. Le balayage s’effectuera automatiquement. Lorsque vous entendez un signal sonore, votre carte a été balayée. L’application fermera et vous serez réacheminé à la page actuelle.",
	scanLoyaltyDialog_pressText							:   "Appuyez sur « Continuer » pour lancer la fonction « Balayer la carte Recompences Triangle ».",
	scanLoyalty_parsingErrorText						: 	"Carte non valable. Veuillez entrer les données manuellement.",
    scanLoyaltyDialog_yes                               :   "Continuer",
    personalData_Scan_TextField                         :   "<b> Pourquoi scannons-nous votre permis de conduire? </b> Nous scannons votre permis de conduire pour capturer automatiquement et précisément l’information nécessaire à une demande de carte de crédit. Ceci inclut vos noms, votre adresse, votre date de naissance, le numéro de permis de conduire et sa date d’expiration. ",
    
	//VZE-185
	personalData_current_Mailing_address              :  "Adresse postale actuelle",
    personalData_canadaPostAddress_1                  :  "1&#46;&#32;Commencez à saisir une adresse canadienne dans le champ fourni&#46;&#32;Des adresses apparaissent à mesure que vous tapez&#46;",
    personalData_canadaPostAddress_2                  :  "2&#46;&#32;Sélectionnez votre adresse dans la liste&#46;&#32;Pour certaines adresses&#44; vous pouvez également être invité à sélectionner un numéro d'appartement ou unité approprié&#46; L'adresse correctement formatée&#44; y compris le code postal&#44; s'affichera&#46;",
    personalData_canadaPostAddress_3                  :  "Si vous ne voyez pas votre adresse dans la liste des suggestions, continuez à saisir votre adresse complète, y compris la ville et la province, pour afficher d'autres suggestions.",
    personalData_canadaPostAddress_4                  :  "Si vous éprouvez toujours des difficultés, vous pouvez entrez l’adresse manuellement.",
    personalData_EnterAdressManuallyButton            :  "Entrez l’adresse manuellement",
    personalData_EditAddressButton		              :  "Modifier l'adresse",
    personalData_AcceptButton						  :  "Accepter",
    personalData_canadaPostAddressPara1           	  :  "Veuillez noter que l'adresse correctement formatée, y compris le code postal, est actuellement affichée.",
    
    // VZE-187 
    personalData_POBoxToolTipMsg                      :    "Si votre adresse contient une boîte postale, veuillez l'inscrire à la ligne 2 de l'adresse postale",

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
	optionalProducts_PageTitle                        :                         "Voici deux produits facultatifs offerts<span class=\"optionaProduct_header_sup\">&#8224;&#8224;</span> pour votre <br>carte de crédit émise par la Banque Canadian Tire",
	//US4131
	optionalProducts_CP_title                         :                         "L’ASSURANCE COUVERTURE-CR&Eacute;DIT<sup><span style=\"font-size: small;\">MD</span></sup>",
	//US4131
	//---Optional product CP details  start ------
    optionalProducts_CP_Helps_cover                   :   "Aide à couvrir le remboursement de vos mensualités <br>de carte de crédit dans les situations suivantes :",
    optionalProducts_CP_LI_Involuntary                :   "Perte d’emploi involontaire",
    optionalProducts_CP_LI_Total                      :   "Invalidité totale",
    optionalProducts_CP_LI_Terminal                   :   "Maladie en phase terminale*",
    optionalProducts_CP_LI_Dismemberment              :   "Mutilation <span style=\"border-bottom: 1px solid #58595b;\">ou</span> perte de la vue, d’un pied ou d’une main* <br>(à 80 ans l’assurance offre une protection en cas de mutilation<br>par accident).",
    optionalProducts_CP_LI_Life                       :   "Déces* (à 80 ans l’assurance offre une protection en cas de<br> décès par accident)<br> *Votre conjoint ou votre conjointe bénéficie également de ces<br> 3 couvertures.",
    optionalProducts_CP_LI_These_coverage             :   "<b>*&nbsp;Ces couvertures fournissent des prestations pour votre conjoint, sauf si vous<br> adhérez dans la province de Québec.</b>",
    optionalProducts_CP_text_monthly                  :   "Le tout pour une prime mensuelle de",
    optionalProducts_CP_text_for_every                :   "1,10 <sup>&#36;</sup> par tranche de 100 <sup>&#36;</sup>",
    optionalProducts_CP_text_average                  :   "du solde quotidien moyen, plus les taxes applicables",
    optionalProducts_CP_text_average_info             :   "(à l’âge de 80 ans, la prime mensuelle passe à 0,59 $ par tranche de 100 $ du solde quotidien moyen, <br>plus les taxes applicables.)",
    optionalProducts_CP_text_bill                     :   "Les frais sont facturés à votre compte de carte de crédit émise par la Banque Canadian <br>Tire.",
    optionalProducts_CP_text_available                :   "Couverture-crédit est offerte aux titulaires de carte de 18 à 76 ans.",
    optionalProducts_CP_text_interest                  :  "La Banque Canadian Tire possède un intérêt financier dans la vente de la présente assurance.",
    
    // IW
    optionalProductIWTitle                              :    "SURVEILLANCE D’IDENTITÉ CLASSIQUE<sup><span style=\"font-size: small;\">MD</span></sup>",
    OP_IW_Helps                                         :    "Une protection pour vous et votre famille <br>avec les caractéristiques suivantes :",
    OP_IW_LI_lost                                       :    "Assistance en cas de perte ou de vol de cartes",
    OP_IW_LI_Online                                     :    "Sauvegarde de données en ligne",
    OP_IW_LI_Creadit_card                               :    "Service de récompense en cas de vol de carte de crédit",
    OP_Iw_LI_Identity                                   :    "Protection contre l’usurpation d'identite / Service de <br>surveillance en ligne",
    OP_Iw_LI_Computer                                   :    "Remboursement de la maintenance informatique",
    OP_IW_LI_Rebound                                    :    "Service de récupération d’objets Retour<sup>MD</sup>",
    OP_Iw_All_for                                       :    "Tout cela pour",
    OP_Iw_per_month                                     :    "4,99 <sup>&#36;</sup> par mois,",
    OP_Iw_Plus_app_tax                                  :    "plus les taxes applicables.",
    OP_Iw_Billled_your_card                             :    "Les frais sont facturés à votre compte de carte de crédit émise par la Banque Canadian <br>Tire.",
    
    //---Optional product CP details  ends ------
    //--PA Offer  details starts  
    OP_yes_i_am_interested_for_op                     :   "Oui, je m’intéresse aux produits facultatifs suivants :",
    OP_PA_title                                       :   "Avantage Protection de Canadian Tire<span class=\"section_3_sup_iw\">MD</span>",
    OP_PA_Rule_li_1_not_available                     :   "N’est pas offert aux résidents de la Saskatchewan.",
    OP_PA_Rule_li_2_available                         :   "Offert aux titulaires de carte de 18 à 76 ans.",
    OP_PA_Rule_li_3_Enrolment_in                      :   "L’adhésion à l'assurance Couverture-crédit<sup>MD</sup> et Surveillance d’identité Classique<sup>MD</sup> comprend la protection et les avantages qui sont offerts par les deux produits facultatifs, tel que mentionné ci-dessus.",
    PA_offer_details_title_bold                       :   "Déclarations obligatoires <span>&mdash; À lire en intégralité avant de compléter l’inscription</span>",
    PA_offer_details_title_small                      :   "&mdash; À lire en intégralité avant de compléter l’inscription</span>",
    PA_offer_details_title_2_bold                     :   "Déclarations sur Couverture-crédit",
    PA_optional_covarage                              :   "La Couverture-crédit est une assurance facultative.",
    PA_Credit_Protector_p_1                           :   "Couverture-crédit est une assurance-crédit collective, souscrite auprès d'American Bankers Compagnie d’Assurance Vie de la Floride et de American Bankers Compagnie d’Assurance Générale de la Floride, que la Banque Canadian Tire offre moyennant une prime sur ses cartes de crédit. American Bankers Compagnie d’Assurance Vie de la Floride et de American Bankers Compagnie d’Assurance générale de la Floride exercent des activités au Canada sous le nom de Assurant<sup>&reg;</sup>. Cela signifie que la Couverture-crédit est un type d’assurance qui peut, dans certaines circonstances, vous aider à régler le solde impayé de votre compte de carte de crédit émise par la Banque Canadian Tire (ou à payer vos mensualités), jusqu’à concurrence de 20 000 $ de prestations. <span style=\"font-weight: bold;\">Pour les résidents du Québec : d’autres produits similaires sont offerts sur le marché, et vous en bénéficiez peut-être déjà. Si vous n’en êtes pas certain, Vous êtes encouragés à le vérifier.</span>",
    PA_Credit_Protector_p_2                           :   "La Couverture-crédit peut vous couvrir dans l’une des situations suivantes :",
    PA_Credit_Protector_p_3_terminal_illness          :   "Maladie en phase terminale, décès et mutilation",
    Pa_Credit_Protector_P_coverages                   :   "Ces garanties sont destinées tant à votre conjoint qu’à vous.",
    PA_Creadit_Protector_P_benifits                   :   "Si vous êtes admissible à une indemnité, le programme Couverture-crédit peut rembourser votre solde dû en effectuant un paiement forfaitaire unique pouvant atteindre jusqu’à 20 000 $.",
    PA_Credit_Protector_P_Terminal                    :   "Maladie en phase terminale",
    PA_Credit_Protector_LI_1                          :   "Cette garantie peut vous protéger, votre conjoint et vous, si on vous diagnostique une maladie réduisant votre espérance de vie à moins de 12 mois après la date du diagnostic.",
    PA_Credit_Protector_LI_2                          :   "Votre conjoint ou vous <span style=\"border-bottom: 1px solid #58595b;\">ne serez pas admissibles</span> à une indemnité si la maladie est causée par un état préexistant, c’est-à-dire si vous avez souffert des symptômes de la maladie ou avez reçu des traitements au cours des six derniers mois et recevez un diagnostic de maladie en phase terminale au cours des six premiers mois suivant l’adhésion.",
    PA_Credit_Protector_LI_3                          :   "Si le titulaire de carte principal et son conjoint sont atteints simultanément d’une maladie terminale, une seule prestation sera versée.",
    PA_Credit_Protector_Life_n_Di                     :   "Décès et mutilation",
    PA_UL_LI_2_1                                      :   "Cette garantie peut vous protéger, votre conjoint et vous, dans l’éventualité où vous décédez ou perdez une main, un pied ou la vue d’un &oelig;il.",
    PA_UL_LI_2_2                                      :	  "Votre conjoint ou vous <span style=\"border-bottom: 1px solid #58595b;\">ne serez pas admissibles</span> à une indemnité de décès si le décès est causé par un suicide ou une blessure volontaire au cours des six premiers mois suivant l’adhésion.",
    PA_UL_LI_2_3                                      :   "Pour avoir droit à la garantie en cas de décès et de mutilation, votre conjoint et vous devez avoir moins de 80 ans.",
    PA_UL_LI_2_4                                      :   "À l’âge de 80 ans, la garantie en cas de décès ou de mutilation est remplacée par <span style=\"font-weight: bold;\">une garantie en cas de décès ou de mutilation par accident</span>, ce qui signifie que votre conjoint ou vous décédez ou subissez une mutilation causée directement par un accident. En cas de décès simultanés du titulaire de carte principal et de son conjoint, une seule prestation sera versée.",
    PA_p_Involuntary                                  :   "Perte d’emploi involontaire et invalidité totale",
    PA_P_quality_for_benifits                         :   "Si vous êtes admissible à une indemnité, le programme Couverture-crédit peut effectuer des paiements mensuels équivalant à 5 % de votre solde dû (moins tout montant dû au titre d’un programme de modalités spéciales de paiement, comme les paiements égaux), jusqu’à concurrence de 1 000 $ par mois, pour une indemnité maximale de 20 000 $.",
    PA_P_To_be_eligible                               :   "Pour avoir droit à ces deux garanties, vous devez avoir un emploi permanent rémunéré pendant 25 heures par semaine ou plus auprès du même employeur.",
    PA_P_YOU_QUALIFY_FOR                              :   "Vous <span style=\"border-bottom: 1px solid #58595b;\">ne serez pas admissible</span> à une indemnité si vous perdez un emploi temporaire ou contractuel; s’il s’agit d’une mise à pied saisonnière courante; ou si vous êtes reconnu coupable d’un crime.",
    PA_P_Involuntary_Unemployment                     :   "Perte d’emploi involontaire",
    PA_LI_MAY_COVER_YOU                               :   "Cette garantie peut vous protéger si vous êtes sans emploi pendant au moins 30 jours, indépendamment de votre volonté, comme en cas de mise à pied ou de grève, ou, si vous êtes travailleur autonome, en cas de déclaration de faillite de la part de vos créditeurs.",
    PA_P_Total_Disability                             :   "Invalidité totale",
    PA_P_MAY_COVER_YOU_DISABLED                       :   "Cette garantie peut vous protéger si vous n’êtes pas en mesure d’effectuer pleinement votre travail pendant au moins 30 jours, et que vous êtes traité par un médecin qualifié.",
    PA_P_Pricing                                      :   "Tarification",
    PA_UL_LI_MONTHLY_PREMIUM                          :   "La prime mensuelle s’élève à <span style=\"font-weight: bold;\">1,10 $ par tranche de 100 $ de solde quotidien moyen</span>, plus les taxes applicables; elle est portée à votre compte de carte de crédit chaque mois.",
    PA_LI_AT_AGE                                      :   "À l’âge de 80 ans, la prime mensuelle passe à 0,59 $ par tranche de 100 $ de solde quotidien moyen, plus les taxes applicables..",
    PA_LI_DEPENDING_HOW                               :   "Selon l’utilisation que vous faites de votre carte, le montant de la prime fluctuera, mais la protection demeure la même.",
    PA_LI_YOU_DO_NOT                                  :   "Vous ne payez aucune prime :",
    PA_LI_1_IF_YOU_HAVE_NOT                           :   "&#45; si vous n’avez pas utilisé votre carte au cours du mois visé; et",
    PA_LI_1_HAVE_NOT_CARRIED                          :   "&#45; n’avez pas reporté un solde du mois précédent pour les montants dus relativement à un programme de modalités spéciales de paiement, comme les paiements égaux; ou",
    PA_LI_1_IF_YOUR_AVERAGE                           :   "&#45; si votre solde quotidien moyen du mois est inférieur à 10 &#36;.",
    PA_LI_PRICE_EXAMPLE                               :   "Exemples de prime",
    PA_TABLE_TD_AVERAGE_DAILY                         :   "Solde quotidien moyen",
    PA_TABLE_TD_PREMIUM                               :   "Prime",
    PA_TABLE_TD_150                                   :   "150 &#36;",
    PA_TABLE_TD_165                                   :   " 1.65 &#36;&#42;",
    PA_TABLE_TD_575                                   :   " 575 &#36;",
    PA_TABLE_TD_633                                   :   " 6.33 &#36;&#42;",
    PA_TABLE_TD_825                                   :   " 825 &#36;",
    PA_TABLE_TD_907                                   :   " 9.07 &#36;&#42;",
    PA_TABLE_TD_975                                   :   " 975 &#36;",
    PA_TABLE_TD_1073                                  :   " 10.73 &#36;&#42;",
    PA_TABLE_TD_PLUS_APP_TAX                          :   "<span class=\"opTable_paddingLeft84\">&#42; Taxes applicables en sus.</span>",
    PA_HOW_TO_MAKE_A_CLAIM                            :   "Comment faire une demande de règlement",
    PA_LI_you_are_always                              :   "Vous pouvez en tout temps présenter une demande de réglement.",
    PA_LI_call_the_insurer                            :   "Appelez les assureurs au <span style=\"font-weight: bold;\">1 800 480-1853</span>. Vous trouverez aussi ce numéro de téléphone sur votre certificat d’assurance.",
    PA_P_terms_of_agreement                           :   "Modalités de la convention",
    PA_LI_if_you_enrol_today                          :   "Si vous adhérez à cette assurance aujourd’hui, nous ouvrirons un dossier client et partagerons vos renseignements avec les assureurs pour que vous puissiez commencer à bénéficier des garanties dès maintenant.",
    PA_LI_the_insurance_end                           :   "L’assurance prend fin dans les cas suivants :",
    PA_Li_when_the_canadian_tire                      :   "&#45; la carte de crédit émise par la Banque Canadian Tire est résiliée;",
    PA_Li_the_accoount_become                         :   "&#45; le compte est en souffrance depuis 90 jours;",
    PA_Li_one_or_more_off                             :   "&#45; un ou plusieurs des contrats de base sont annulés;",
    PA_Li_your_life                                   :   "&#45; une indemnité en vertu de la garantie en cas de décès, de décès par accident ou de maladie en phase terminale est versée;",
    PA_Li_the_date_the_primary                        :   "&#45; le titulaire de carte principal meurt;",
    PA_Li_or_when_you_request                         :   "&#45; vous demandez l’annulation de l’assurance, ce que vous pouvez faire en tout temps en composant le numéro inscrit au verso du certificat d’assurance ou au verso de votre carte de crédit émise par la Banque Canadian Tire, <span style=\"font-weight: bold;\">ou encore dans le guide de distribution si vous habitez au Québec.</span>",
    PA_P_Fulfillment                                  :   "Exécution",
    PA_ul_Li_A_welcome_package                        :   "Vous recevrez une trousse de bienvenue par la poste au cours des deux prochaines semaines, qui comprendra entre autres le certificat d’assurance. <span style=\"font-weight: bold;\">Un guide de distribution sera également envoyé aux résidents du Québec.</span>",
    PA_P_eligibility_requirment                       :   "Certaines conditions d’admissibilité, restrictions et exclusions s’appliquent et peuvent varier selon la prestation. Veuillez lire votre certificat d’assurance attentivement et le conserver en lieu sûr avec vos autres documents importants.",
    PA_P_Cancellation                                 :   "Annulation",
    PA_Li_you_can_cancel_this_1                       :   "Vous pouvez en tout temps annuler cette assurance en composant le numéro inscrit au verso de votre carte.",
    PA_Li_you_can_cancel_this_2                       :   "Si vous annulez votre adhésion <span style=\"border-bottom: 1px solid #58595b;\">dans</span> les 45 jours suivant l’émission du certificat d’assurance, vous recevrez un remboursement intégral de toute prime que vous avez payée.",
    PA_Li_you_can_cancel_this_3                       :   "Si vous l’annulez <span style=\"border-bottom: 1px solid #58595b;\">après</span> les 45 premiers jours, nous rembourserons toute prime non acquise (le cas échéant).",
    PA_P_identity_watch_disclosure                    :   "Déclaration sur la Surveillance d’identité Classique<span class=\"section_3_sup_iw\">MD</span>",
    PA_P_eligiblity                                   :   "Admissibilité",
    PA_P_the_subscription                             :   "L’adhésion entre en vigueur à compter de la date d’inscription indiquée sur votre lettre de bienvenue accompagnant la trousse de bienvenue du service Surveillance d’identité Classique. Vous êtes admissible aux avantages à compter de la date d’inscription indiquée sur votre lettre de bienvenue tant que son adhésion demeure en règle. Pour être admissible aux avantages, vous devez aussi avoir adhéré au programme Surveillance d’identité Classique au moment de l’événement applicable.",
    PA_P_when_you_enrole                              :   "En vous inscrivant à ce programme, vous recevrez la trousse de bienvenue qui comprend une liste complète des avantages offerts ainsi que des détails sur la procédure d’enregistrement des renseignements personnels de même que les conditions générales d’utilisation. La trousse de bienvenue sera livrée par la poste dans un délai de sept à dix jours. Assurez-vous de prendre connaissance de tous ces renseignements.",
    PA_P_benefits_are_available                       :   "Vous, votre conjoint et vos enfants à charge âgés de moins de 21 ans qui habitent sous votre toit ou qui poursuivent leurs études (&laquo; famille admissible &raquo;) avez tous droit aux avantages.",
    PA_P_identity_fraud                               :   "Protection contre l’usurpation d’identité / Service de surveillance en ligne",
    PA_P_this_service                                 :   "Ce service est un outil de surveillance de données en ligne, appelé Suivi des informations personnelles sur l’Internet<sup>MD</sup> (iPiP<sup>MD</sup>) qui patrouille régulièrement les moteurs de recherche, les forums et les blogues et vous avertit par courriel lorsqu’il détecte toute utilisation des renseignements que vous avez  enregistrés en ligne sur ce service. Vous pouvez simplement enregistrer les renseignements en ligne à www.surveillanceidentiteclassique.ca. Les renseignements qui peuvent être enregistrés sont les numéros de carte de crédit et de débit, les numéros d’assurance sociale ou d’autres renseignements importants. Sous réserve de certaines modalités. <span style=\"font-weight: bold;\">Remarque : L’identification des incidents à signaler ou la livraison des avis concernant iPiP peuvent contenir des inexactitudes ou être retardées.</span>",
    PA_P_lost_stolen                                  :   "Assistance en cas de perte ou de vol de cartes",
    PA_P_this_service_will_assests                    :   "Ce service vous aidera vous et les membres admissibles de votre famille à partir du moment où ils signalent la perte ou le vol d’une carte de crédit ou d’une carte de débit enregistrée. Surveillance d’identité Classique communiquera avec les émetteurs de cartes applicables et leur demandera d’annuler les cartes et de les remplacer dans la mesure du possible. <span style=\"font-weight: bold;\">Remarque : Certains émetteurs de cartes doivent respecter des règles ou des règlements qui peuvent empêcher Surveillance d’identité Classique d’annuler ou de remplacer les cartes. Pour en savoir plus sur les services, veuillez consulter les modalités d’adhésion.</span>",
    PA_P_rebound                                      :   "Service de récupération d’objets Retour<span class=\"footer_p_sup\">MD</span>",
    PA_P_this_service_allows_you                      :   "Ce service permet au client d’apposer sur ses objets de valeur des autocollants sur lesquels figure un numéro d’identification unique. Si un objet muni d’un autocollant Retour est perdu, la personne qui retrouve l’objet est invitée à contacter Sigma qui fera le nécessaire pour récupérer l’objet, vous le faire parvenir et verser une prime de cinquante dollars (50,00 $) à celui qui a retrouvé l’objet. Sous réserve de certaines modalités.",
    PA_P_computer_tune_up                             :   "Remboursement de la maintenance informatique :",
	PA_P_you_are_eligible_to                          :   "Vous êtes admissible à un remboursement des coûts de maintenance de votre ordinateur jusqu’à concurrence de 75,00 $, taxes incluses, par année d’adhésion. Un ordinateur désigne un ordinateur de bureau ou un ordinateur portable personnel. Vous ne pouvez soumettre qu'un seul formulaire de remboursement de maintenace informatique tous les 365 jours. Votre adhésion à Surveillance d’identité Classique doit être active à la date indiquée sur le reçu et être en règle au moment où nous recevons la présente demande de remboursement. Vous devez soumettre le formulaire de demande de remboursement avec le reçu original ou la facture originale, indiquant le nom du fournisseur de service d’entretien de l’ordinateur, dans les trente (30) jours suivant la date inscrite sur le reçu ou la facture pour la prestation de service effectuée sur l’ordinateur ou l’achat d’un logiciel antivirus/contre les programmes malveillants/pare-feu. Le délai de traitement est de quatre à six semaines à compter de la date de réception de ce formulaire. Le formulaire de demande de remboursement pour l’entretien d’un ordinateur ne peut être utilisé que par un membre en règle et ne peut pas être transféré. Le nom du membre doit être indiqué sur le reçu ou la facture. En aucun cas, la responsabilité de Sigma ne peut dépasser les montants de remboursement indiqués ci&#8208;dessus.",
    PA_P_price                                        :   "Tarif",
    PA_P_subscription_fee                             :   "Les frais d’adhésion de 4,99 $, plus les taxes applicable, débuteront une fois que votre première transaction sera effectuée avec votre carte de crédit émise par la Banque Canadian Tire. Par la suite, les frais d’adhésion seront facturés à l’avance, tous les mois au compte de carte de crédit émise par la Banque Canadian Tire. Pour assurer un service sans interruption, votre adhésion sera renouvelée automatiquement jusqu’à ce que vous décidiez de l’annuler. Nous porterons vos frais à votre compte de carte de crédit, au taux courant applicable à la date de renouvellement. Consultez le document de renseignements juridiques pour connaître les modalités, les limites et les exclusions. Sous réserve de certaines modalités.",
    PA_P_cancellation_by_customer                     :   "<span style=\"font-weight: bold;\">Annulation par le client :</span> Les avantages sont au mois. L’adhésion à Surveillance d’identité Classique est facultative et peut être annulée en tout temps par téléphone (1 800 263-1020) ou par télécopieur (905 735-2644), et nous cesserons alors de facturer les frais d’adhésion, qui sont portés à votre carte de crédit après la première transaction réglée avec votre carte de crédit émise par la Banque Canadian Tire. Si vous annulez dans les 30 jours de votre date d’inscription, la Banque Canadian Tire vous remboursera intégralement les frais d’adhésion payés après la première transaction réglée avec votre carte de crédit émise par la Banque Canadian Tire. Si vous annulez après les 30 premiers jours, l’annulation prendra effet à compter du dernier jour du cycle de facturation en cours ou 30 jours après la réception de l’avis d’annulation, selon la première éventualité. Si vous annulez votre inscription, vous êtes responsable de tous les frais engagés en raison des services offerts par l’intermédiaire d’un fournisseur d’accès Internet ou d’un tiers fournisseur de services.",
    PA_P_cancellation_by_Aimia                        :   "<span style=\"font-weight: bold;\">Annulation par Sigma :</span> L’adhésion peut être annulée par Sigma si le compte n’est pas en règle ou si les frais d’adhésion, qui sont portés à la carte de crédit après la première transaction réglée avec la carte de crédit émise par la Banque Canadian Tire, ne sont pas payés, ou s’il est établi que vous ou un membre admissible de votre famille exercez des activités frauduleuses ou faites mauvais usage des avantages. Sigma se réserve également le droit de mettre fin à des adhésions pour quelque raison que ce soit sur envoi d’un préavis écrit de 30 jours. Lorsqu’il sera mis fin à votre adhésion, pour quelque raison que ce soit, vous et votre famille n’aurez plus accès aux renseignements que vous ou votre famille avez fournis pour profiter de tout avantage.",
    PA_P_other                                        :   "Autres",
    PA_P_Iw_is_an_optiona_product                     :   "Le programme Surveillance d’identité Classique est un produit facultatif offert séparément de la carte Mastercard émise par la Banque Canadian Tire et n’est pas obligatoire pour obtenir la carte Mastercard émise par la Banque Canadian Tire. Si le client a présenté une demande de carte Mastercard émise par la Banque Canadian Tire et que celle-ci a été approuvée, les frais d’adhésion de Surveillance d’identité Classique seront débités de son compte du montant et dans les délais déterminés. (Remarque : Voir ci-dessus.)",
    PA_P_the_iw_program                               :   "Le programme Surveillance d’identité Classique est commandité par la Banque Canadian Tire et fourni par  Sigma Loyalty Group Inc. (« Sigma »).",
    PA_P_please_read_iw                               :   "Pour obtenir plus de renseignements, veuillez prendre connaissance des modalités et du guide des avantages du programme Surveillance d’identité Classique qui sont compris dans la trousse de bienvenue.",
    PA_P_Online_data_backup                           :   "Sauvegarde de données en ligne",
    PA_P_Data_bak_up_desc                             :   "Ce service vous donne le droit d’accéder à 50 Go de sauvegarde de données en ligne par mois. Le service de sauvegarde de données en ligne est fourni par un tiers fournisseur de services et est soumis à des modalités additionnelles. Le service de sauvegarde des données en ligne peut être utilisé uniquement avec une plateforme Windows.  Lorsqu’il sera mis fin à votre adhésion pour quelque raison que ce soit, vous disposerez de sept (7) jours à compter de la date d’entrée en vigueur de l’annulation pour retirer vos données stockées ou vous ne pourrez plus y accéder. La suppression de vos données stockées est soumise à la politique de confidentialité de Sigma, disponible à l’adresse suivante : <span class=\"link_style\">www.surveillanceidentiteclassique.ca/POLITIQUEDECONFIDENTIALITÉ</span>.",
    PA_CC_theft_reward                                :   "Service de récompense en cas de vol de carte de crédit",
    PA_CC_theft_desc                                  :   "Nous verserons une prime de trois mille dollars (3 000 $) pour des renseignements menant à l’arrestation et à la condamnation de toute personne ayant frauduleusement utilisé vos cartes de crédit ou de débit enregistrées . Les membres des corps policiers, les membres de votre famille immédiate et vous-même n’êtes pas admissibles à cette récompense. Les personnes admissibles à cette récompense devront communiquer avec Sigma afin de remplir et renvoyer un formulaire pour obtenir la récompense.",
    OP_IW_P_CC                                        :   "Nous verserons une prime de trois mille dollars (3 000 $) pour des renseignements menant à l’arrestation et à la condamnation de toute personne ayant frauduleusement utilisé vos cartes de crédit ou de débit. Les membres des corps policiers, les membres de votre famille immédiate et vous-même n’êtes pas admissibles à cette récompense. Les personnes admissibles à cette récompense devront communiquer avec Sigma afin de remplir et renvoyer un formulaire pour obtenir la récompense.",
    OP_CP_Li_InvoluntaryUnemployment                  :   "Perte d’emploi involontaire",
    OP_CP_Li_TotalDisability                          :   "Invalidité totale",
   
   
    //PA offer details ends 
    
  //--CP offer details starts
    OP_CP_title                                       :   "L’assurance Couverture-crédit<span class=\"section_3_sup_iw\">MD</span>",
    OP_CP_Li_1_not_sk                                 :   "N’est pas offert aux résidents de la Saskatchewan.",
    OP_CP_Li_1_availbale                              :   "Offert aux titulaires de carte de 18 à 76 ans.",
    OP_CP_P_bold                                      :   "Déclarations obligatoires <span>&mdash; À lire en intégralité avant de compléter l’inscription</span>",
    OP_CP_P_small                                     :   "&mdash; À lire en intégralité avant de compléter l’inscription</span>",
    OP_CP_disclosure                                  :   "Déclarations sur Couverture-crédit",
    OP_CP_coverage                                    :   "La Couverture-crédit est une assurance facultative.",
    OP_CP_creator_group                               :   "Couverture-crédit est une assurance-crédit collective, souscrite auprès d’American Bankers Compagnie d’Assurance Vie de la Floride et de American Bankers Compagnie d’Assurance Générale de la Floride, que la Banque Canadian Tire offre moyennant une prime sur ses cartes de crédit. American Bankers Compagnie d’Assurance Vie de la Floride et de American Bankers Compagnie d’Assurance générale de la Floride exercent des activités au Canada sous le nom de Assurant<sup>&reg;</sup>. Cela signifie que la Couverture-crédit est un type d’assurance qui peut, dans certaines circonstances, vous aider à régler le solde impayé de votre compte de carte de crédit émise par la Banque Canadian Tire (ou à payer vos mensualités), jusqu’à concurrence de 20 000 $ de prestations. <span style=\"font-weight: bold;\">Pour les résidents du Québec : d’autres produits similaires sont offerts sur le marché, et vous en bénéficiez peut-être déjà. Si vous n’en êtes pas certain, Vous êtes encouragés à le vérifier.</span>",
    OP_CP_P_may_cover                                 :   "La Couverture-crédit peut vous couvrir dans l’une des situations suivantes :",
    OP_CP_P_these_coverage                            :   "Ces garanties sont destinées tant à votre conjoint qu’à vous.",
    OP_CP_P_if_you_qualify                            :   "Si vous êtes admissible à une indemnité, le programme Couverture-crédit peut rembourser votre solde dû en effectuant un paiement forfaitaire unique pouvant atteindre jusqu’à 20 000 $.",
    OP_CP_Li_1_may_cover_your                         :   "Cette garantie peut vous protéger, votre conjoint et vous, si on vous diagnostique une maladie réduisant votre espérance de vie à moins de 12 mois après la date du diagnostic.",
    OP_CP_li_2_you_or_your_spouse                     :   "Votre conjoint ou vous <span style=\"border-bottom: 1px solid #58595b;\">ne serez pas admissibles</span> à une indemnité si la maladie est causée par un état préexistant, c’est-à-dire si vous avez souffert des symptômes de la maladie ou avez reçu des traitements au cours des six derniers mois et recevez un diagnostic de maladie en phase terminale au cours des six premiers mois suivant l’adhésion.",
    OP_CP_Li_3_in_the_event                           :   "Si le titulaire de carte principal et son conjoint sont atteints simultanément d’une maladie terminale, une seule prestation sera versée.",
    OP_CP_P_life_and_dismemberment                    :   "Décès et mutilation",
    OP_CP_Li_2_1_may_cover                            :   "Cette garantie peut vous protéger, votre conjoint et vous, dans l’éventualité où vous décédez ou perdez une main, un pied ou la vue d’un &oelig;il.",
    OP_CP_Li_2_2_you_or_your                          :   "Votre conjoint ou vous <span style=\"border-bottom: 1px solid #58595b;\">ne serez pas admissibles</span> à une indemnité de décès si le décès est causé par un suicide ou une blessure volontaire au cours des six premiers mois suivant l’adhésion.",
    OP_CP_Li_2_3_to_be                                :   "Pour avoir droit à la garantie en cas de décès et de mutilation, votre conjoint et vous devez avoir moins de 80 ans.",
    OP_CP_Li_2_4_At_age                               :   "À l’âge de 80 ans, la garantie en cas de décès ou de mutilation est remplacée par <span style=\"font-weight: bold;\">une garantie en cas de décès ou de mutilation par accident</span>, ce qui signifie que votre conjoint ou vous décédez ou subissez une mutilation causée directement par un accident. En cas de décès simultanés du titulaire de carte principal et de son conjoint, une seule prestation sera versée.",
    OP_CP_P_involuntary                               :   "Perte d’emploi involontaire et invalidité totale",
    OP_CP_P_INVO_if_you_qualify                       :   "Si vous êtes admissible à une indemnité, le programme Couverture-crédit peut effectuer des paiements mensuels équivalant à 5 % de votre solde dû (moins tout montant dû au titre d’un programme de modalités spéciales de paiement, comme les paiements égaux), jusqu’à concurrence de 1 000 $ par mois, pour une indemnité maximale de 20 000 $.",
    OP_CP_P_both_the_coverage                         :   "Pour avoir droit à ces deux garanties, vous devez avoir un emploi permanent rémunéré pendant 25 heures par semaine ou plus auprès du même employeur.",
    OP_CP_P_qualify_for_benifits                      :   "Vous <span style=\"border-bottom: 1px solid #58595b;\">ne serez pas admissible</span> à une indemnité si vous perdez un emploi temporaire ou contractuel; s’il s’agit d’une mise à pied saisonnière courante; ou si vous êtes reconnu coupable d’un crime.",
    OP_CP_P_may_cover_you_if                          :   "Cette garantie peut vous protéger si vous êtes sans emploi pendant au moins 30 jours, indépendamment de votre volonté, comme en cas de mise à pied ou de grève, ou, si vous êtes travailleur autonome, en cas de déclaration de faillite de la part de vos créditeurs.",
    OP_CP_Li_total_diasability                        :   "Cette garantie peut vous protéger si vous n’êtes pas en mesure d’effectuer pleinement votre travail pendant au moins 30 jours, et que vous êtes traité par un médecin qualifié.",
    OP_CP_Li_3_1_monthly                              :   "La prime mensuelle s’élève à <span style=\"font-weight: bold;\">1,10 $ par tranche de 100 $ de solde quotidien moyen</span>, plus les taxes applicables; elle est portée à votre compte de carte de crédit chaque mois.",
    OP_CP_Li_3_2_at_age_80                            :   "À l’âge de 80 ans, la prime mensuelle passe à 0,59 $ par tranche de 100 $ de solde quotidien moyen, plus les taxes applicables.",
    OP_CP_Li_3_3_depending                            :   "Selon l’utilisation que vous faites de votre carte, le montant de la prime fluctuera, mais la protection demeure la même.",
    OP_CP_Li_4_1_if_you_have                          :   "&#45; si vous n’avez pas utilisé votre carte au cours du mois visé; et",
    OP_CP_Li_4_2_have_not_carried                     :   "&#45; n’avez pas reporté un solde du mois précédent pour les montants dus relativement à un programme de modalités spéciales de paiement, comme les paiements égaux; ou",
    OP_CP_Li_4_3_your_average                         :   "&#45; si votre solde quotidien moyen du mois est inférieur à 10 $.",
    OP_CP_call_the_insurance                          :   "Appelez les assureurs au <span style=\"font-weight: bold;\">1 800 480-1853</span>. Vous trouverez aussi ce numéro de téléphone sur votre certificat d’assurance.",
    OP_CP_Li_5_if_you_enroll_today                    :   "Si vous adhérez à cette assurance aujourd’hui, nous ouvrirons un dossier client et partagerons vos renseignements avec les assureurs pour que vous puissiez commencer à bénéficier des garanties dès maintenant.",
    OP_CP_Li_6_1_when                                 :   "&#45; la carte de crédit émise par la Banque Canadian Tire est résiliée;",
    OP_CP_Li_6_2_the_account                          :   "&#45; le compte est en souffrance depuis 90 jours;",
    OP_CP_Li_6_3_one_or_more                          :   "&#45; un ou plusieurs des contrats de base sont annulés;",
    OP_CP_Li_6_4_your_life                            :   "&#45; une indemnité en vertu de la garantie en cas de décès, de décès par accident ou de maladie en phase terminale est versée;",
    OP_CP_Li_6_5_the_date                             :   "&#45; le titulaire de carte principal meurt;",
    OP_CP_Li_6_6_or_when_you                          :   "&#45; vous demandez l’annulation de l’assurance, ce que vous pouvez faire en tout temps en composant le numéro inscrit au verso du certificat d’assurance ou au verso de votre carte de crédit émise par la Banque Canadian Tire, <span style=\"font-weight: bold;\">ou encore dans le guide de distribution si vous habitez au Québec.</span>",
    OP_CP_Li_welcome_package                          :   "Vous recevrez une trousse de bienvenue par la poste au cours des deux prochaines semaines, qui comprendra entre autres le certificat d’assurance. <span style=\"font-weight: bold;\">Un guide de distribution sera également envoyé aux résidents du Québec.</span>",
    OP_CP_Li_eligibility_requirement                  :   "Certaines conditions d’admissibilité, restrictions et exclusions s’appliquent et peuvent varier selon la prestation. Veuillez lire votre certificat d’assurance attentivement et le conserver en lieu sûr avec vos autres documents importants.",
    OP_CP_Li_7_1_you_can_cancel                       :   "Vous pouvez en tout temps annuler cette assurance en composant le numéro inscrit au verso de votre carte.",
    OP_CP_Li_7_2                                      :   "Si vous annulez votre adhésion <span style=\"border-bottom: 1px solid #58595b;\">dans</span> les 45 jours suivant l’émission du certificat d’assurance, vous recevrez un remboursement intégral de toute prime que vous avez payée.",
    OP_CP_Li_7_3                                      :   "Si vous l’annulez <span style=\"border-bottom: 1px solid #58595b;\">après</span> les 45 premiers jours, nous rembourserons toute prime non acquise (le cas échéant).",
  //--CP offer details ends
    
    //-- IW offer details starts 
    OP_IW_title                                       :   "Surveillance d’identité Classique<sup>MD</sup>",
    OP_IW_bold                                        :   "Déclarations obligatoires <span>&mdash; À lire en intégralité avant de compléter l’inscription</span>",
    OP_Iw_small                                       :   "&mdash; À lire en intégralité avant de compléter l’inscription</span>",
    OP_IW_disclosure                                  :   "Déclaration sur la Surveillance d’identité Classique<sup><span class=\"section_3_sup_iw\">MD</span></sup>",
    OP_IW_eligibility                                 :   "Admissibilité",
    OP_IW_P_subscription                              :   "L’adhésion entre en vigueur à compter de la date d’inscription indiquée sur votre lettre de bienvenue accompagnant la trousse de bienvenue du service Surveillance d’identité Classique. Vous êtes admissible aux avantages à compter de la date d’inscription indiquée sur votre lettre de bienvenue tant que son adhésion demeure en règle. Pour être admissible aux avantages, vous devez aussi avoir adhéré au programme Surveillance d’identité Classique au moment de l’événement applicable.",
    OP_IW_P_when_you_enrole                           :   "En vous inscrivant à ce programme, vous recevrez la trousse de bienvenue qui comprend une liste complète des avantages offerts ainsi que des détails sur la procédure d’enregistrement des renseignements personnels de même que les conditions générales d’utilisation. La trousse de bienvenue sera livrée par la poste dans un délai de sept à dix jours. Assurez-vous de prendre connaissance de tous ces renseignements.",
    OP_IW_P_benifits_are                              :   "Vous, votre conjoint et vos enfants à charge âgés de moins de 21 ans qui habitent sous votre toit ou qui poursuivent leurs études (&laquo; famille admissible &raquo;) avez tous droit aux avantages.",
    OP_Iw_P_identity_fraud                            :   "Protection contre l’usurpation d’identité / Service de surveillance en ligne",
    OP_IW_P_these_service_currently                   :   "Ce service est un outil de surveillance de données en ligne, appelé Suivi des informations personnelles sur l’Internet<sup>MD</sup> (iPiP<sup>MD</sup>) qui patrouille régulièrement les moteurs de recherche, les forums et les blogues  et vous avertit par courriel lorsqu’il détecte toute utilisation des renseignements que vous avez enregistrés en ligne sur ce service. Vous pouvez simplement enregistrer les renseignements en ligne à www.surveillanceidentiteclassique.ca. Les renseignements qui peuvent être enregistrés sont les numéros de carte de crédit et de débit, les numéros d’assurance sociale ou d’autres renseignements importants. Sous réserve de certaines modalités. <span style=\"font-weight: bold;\">Remarque : L’identification des incidents à signaler ou la livraison des avis concernant iPiP peuvent contenir des inexactitudes ou être retardées.</span>",
    OP_IW_P_service_assist                            :   "Ce service vous aidera vous et les membres admissibles de votre famille à partir du moment où ils signalent la perte ou le vol d’une carte de crédit ou d’une carte de débit enregistrée. Surveillance d’identité Classique communiquera avec les émetteurs de cartes applicables et leur demandera d’annuler les cartes et de les remplacer dans la mesure du possible. <span style=\"font-weight: bold;\">Remarque : Certains émetteurs de cartes doivent respecter des règles ou des règlements qui peuvent empêcher Surveillance d’identité Classique d’annuler ou de remplacer les cartes. Pour en savoir plus sur les services, veuillez consulter les modalités d’adhésion.</span>",
    OP_IW_P_service_will_allow                        :   "Ce service permet au client d’apposer sur ses objets de valeur des autocollants sur lesquels figure un numéro d’identification unique. Si un objet muni d’un autocollant Retour est perdu, la personne qui retrouve l’objet est invitée à contacter Sigma qui fera le nécessaire pour récupérer l’objet, vous le faire parvenir et verser une prime de cinquante dollars (50,00 $) à celui qui a retrouvé l’objet. Sous réserve de certaines modalités.",
    OP_IW_P_you_are_eligible_to                       :   "Vous êtes admissible à un remboursement des coûts de mise au point de votre ordinateur jusqu’à concurrence de 75,00 $, taxes incluses, par année d’adhésion. Vous devez soumettre votre demande de remboursement, accompagnée du reçu original, dans les 30 jours de la mise au point de votre ordinateur.",
    OP_IW_P_subscription_fee                          :   "Les frais d’adhésion de 4,99 $, taxes en sus*, débuteront une fois votre première transaction sera effectuée avec votre carte de crédit de marque Canadian Tire. Par la suite, les frais d’adhésion seront facturés à l’avance, tous les mois au compte de carte de crédit émise par la Banque Canadian Tire. Pour assurer un service sans interruption, votre adhésion sera renouvelée automatiquement jusqu’à ce que vous décidiez de l’annuler. Nous porterons vos frais à votre compte de carte de crédit, au taux courant applicable à la date de renouvellement. Consultez le document de renseignements juridiques pour connaître les modalités, les limites et les exclusions. Sous réserve de certaines modalités.",
    OP_IW_P_cancel_by_customer                        :   "<span style=\"font-weight: bold;\">Annulation par le client :</span> Les avantages sont au mois. L’adhésion à Surveillance d’identité Classique est facultative et peut être annulée en tout temps par téléphone (1 800 263-1020) ou par télécopieur (905 735-2644), et nous cesserons alors de facturer les frais d’adhésion, qui sont portés à votre carte de crédit après la première transaction réglée avec votre carte de crédit émise par la Banque Canadian Tire. Si vous annulez dans les 30 jours de votre date d’inscription, la Banque Canadian Tire vous remboursera intégralement les frais d’adhésion payés après la première transaction réglée avec votre carte de crédit émise par la Banque Canadian Tire. Si vous annulez après les 30 premiers jours, l’annulation prendra effet à compter du dernier jour du cycle de facturation en cours ou 30 jours après la réception de l’avis d’annulation, selon la première éventualité. Si vous annulez votre inscription, vous êtes responsable de tous les frais engagés en raison des services offerts par l’intermédiaire d’un fournisseur d’accès Internet ou d’un tiers fournisseur de services.",
    OP_IW_P_cancel_by_aimia                           :   "<span style=\"font-weight: bold;\">Annulation par Sigma :</span> L’adhésion peut être annulée par Sigma si le compte n’est pas en règle ou si les frais d’adhésion, qui sont portés à la carte de crédit après la première transaction réglée avec la carte de crédit émise par la Banque Canadian Tire, ne sont pas payés, ou s’il est établi que vous ou un membre admissible de votre famille exercez des activités frauduleuses ou faites mauvais usage des avantages. Sigma se réserve également le droit de mettre fin à des adhésions pour quelque raison que ce soit sur envoi d’un préavis écrit de 30 jours. Lorsqu’il sera mis fin à votre adhésion, pour quelque raison que ce soit, vous et votre famille n’aurez plus accès aux renseignements que vous ou votre famille avez fournis pour profiter de tout avantage.",
    OP_Iw_P_IW_is_optional                            :   "Le programme Surveillance d’identité Classique est un produit facultatif offert séparément de la carte Mastercard émise par la Banque Canadian Tire et n’est pas obligatoire pour obtenir la carte Mastercard émise par la Banque Canadian Tire. Si le client a présenté une demande de carte Mastercard émise par la Banque Canadian Tire et que celle-ci a été approuvée, les frais d’adhésion de Surveillance d’identité Classique seront débités de son compte du montant et dans les délais déterminés. (Remarque : Voir ci-dessus.)",
    OP_IW_P_classic_program                           :   "Le programme Surveillance d’identité Classique est commandité par la Banque Canadian Tire et fourni par Sigma Loyalty Group Inc. ",
    OP_IW_P_please_read                               :   "Pour obtenir plus de renseignements, veuillez prendre connaissance des modalités et du guide des avantages du programme Surveillance d’identité Classique qui sont compris dans la trousse de bienvenue.",
    
    PA_P_Enrolling_you_agree_this                     :    "En souscrivant l’assurance couverture-crédit, vous acceptez les points suivants :",
    PA_P_Enrolling_you_agree_this_1                   :     "<span class=\"padding_NewInsurence_Chapter\">Vous faites une demande d’assurance couverture crédit; </span>",
    PA_P_Enrolling_you_agree_this_2                   :     "<span class=\"padding_NewInsurence_Chapter\">Vous certifiez que l’information fournie est complète et exacte;</span>",
    PA_P_Enrolling_you_agree_this_3                   :     "<span class=\"padding_NewInsurence_Chapter\">Vous comprenez que toute dissimulation, falsification ou fausse déclaration au sujet de votre demande de carte de crédit émise par la Banque Canadian Tire peut annuler votre couverture; </span>",
    PA_P_Enrolling_you_agree_this_4                   :     "<span class=\"padding_NewInsurence_Chapter\">Vous avez eu l’occasion de lire des déclarations couverture-crédit et, si vous résidez au Québec, le Guide de distribution de la couverture-crédit et vous acceptez de vous conformer aux modalités énoncées; </span>",
    PA_P_Enrolling_you_agree_this_5                   :     "<span class=\"padding_NewInsurence_Chapter\">Vous avez lu et compris les déclarations, incluant les limites et exclusions, de l’assurance couverture crédit; </span>",
    PA_P_Enrolling_you_agree_this_6                   :     "<span class=\"padding_NewInsurence_Chapter\">Vous autorisez l’assureur à obtenir, fournir et échanger des renseignements personnels avec la Banque Canadian Tire, si cela est nécessaire à l’administration et la révision de l’assurance couverture-crédit; </span>",
    PA_P_Enrolling_you_agree_this_7                   :     "<span class=\"padding_NewInsurence_Chapter\">Vous reconnaissez que la Banque Canadian Tire n’est pas l’agent de l’assureur et que personne n’a autorité pour renoncer à ou modifier les dispositions de la demande ou du certificat d’assurance; </span>",
    PA_P_Enrolling_you_agree_this_8                   :     "<span class=\"padding_NewInsurence_Chapter\">Vous autorisez la Banque Canadian Tire à imputer les primes à votre carte de crédit émise par la Banque Canadian Tire. </span>",
    PA_P_Enrolling_you_agree_this_9                   :     "<span class=\"padding_NewInsurence_Chapter\">Vous avez demandé que ce document et tous les documents connexes soient rédigés en anglais. (Vous  avez demandé que ce document et tous les documents y afférents soient rédigés et signés en anglais); </span> ",
    PA_P_Enrolling_you_agree_this_10                   :    "<span class=\"padding_NewInsurence_Chapter\">Votre consentement verbal ou par voie électronique sera réputé approuvé ou livré, et constituera un « engagement écrit » aux fins de toute loi exigeant que le consentement soit signé. Tout consentement  verbal ou par voie électronique donné ou accepté par vous, ou en votre nom, ou déclaré entré ou accepté par vous, sera considéré comme approuvé et vous liera; </span> ",
    PA_P_Enrolling_you_agree_this_11                   :    "<span class=\"padding_NewInsurence_Chapter\">Une copie de la présente autorisation est aussi valide que l’original; et </span>",
    PA_P_Enrolling_you_agree_this_12                   :    "<span class=\"padding_NewInsurence_Chapter\">Assurant s’engage à protéger les renseignements personnels de ses clients, conformément aux bonnes  pratiques commerciales. La société pourra procéder à la collecte, à l’utilisation et à la communication de renseignements personnels fournis par vous et obtenus par d’autres avec votre consentement, ou tel que requis ou permis par la loi. Les renseignements personnels comprennent votre nom, vos coordonnées, votre réclamation et vos préférences de produit. La société peut utiliser l’information pour : vous servir en tant que client, communiquer avec vous, créer des statistiques au sujet de son entreprise pour mieux comprendre les besoins et préférences des clients. Elle peut traiter et entreposer vos renseignements dans un autre pays, pouvant être accédés par les autorités gouvernementales en conformité avec les lois de ce pays. Vous pouvez obtenir une copie de cette politique de confidentialité en composant le <b>1 888 778&#8208;8023</b> ou au site Web (www.assurantsolutions.com/canada/can-pri-privacy-notice-t4.html#politiquede confidentialité).</span><br> ",
    
    
 
    
    //-- IW offer details ends 
    OP_Not_at_this_time                               :   "Pas pour le moment",
    
    //Footer part of  optional products starts 
    OP_FT_there_are_op_offfers                        :   "&dagger;&dagger; Ce sont des produits facultatifs offerts à tous les nouveaux titulaires de carte Mastercard émise par la Banque Canadian Tire. Les renseignements que vous fournissez sur la présente demande de carte sont utilisés pour déterminer votre admissibilité à l’obtention d’une carte Mastercard émise par la Banque Canadian Tire et non pour votre adhésion aux produits facultatifs." ,
    OP_FT_business_product		                      :   "La Banque Canadian Tire possède un intérêt financier dans la vente de ces produits.",
    OP_FT_business_name                               :   "Services Financiers Canadian Tire est une dénomination commerciale de la Banque Canadian Tire.",
    OP_FT_unless                                      :   "<span class=\"footer_p_sup\">MD/MC</span> Sauf indication contraire, toutes les marques de commerce sont la propriété de La Société Canadian Tire Limitée et sont utilisées sous licence.",
    OP_FT_CP                                          :   "<span class=\"footer_p_sup\">MD/MC</span> Couverture-crédit est une marque de commerce déposée de la Banque Canadian Tire.",
    OP_FT_IW_programs                                 :   "Le programme Surveillance d’identité Classique est commandité par la Banque Canadian Tire et fourni par Sigma Loyalty Group Inc.",
    OP_FT_internet                                    :   "<span class=\"footer_p_sup\">MD/MC</span> Suivi des informations personnelles sur Internet<span class=\"footer_p_sup\">MD</span>, iPiP<span class=\"footer_p_sup\">MD</span>, et Retour<span class=\"footer_p_sup\">MD</span> sont des marques de commerce déposées de Sigma Loyalty Group Inc.",
    OP_FT_assurant                                    :   "<b><sup>&reg;</sup></b> Assurant est une marque déposée de Assurant, Inc.<b><sup>&reg;</sup></b>",
    OP_FT_mastercard                                  :   "<span class=\"footer_p_sup\">MD/MC</span> Mastercard est une marque déposée, et le logo des deux cercles imbriqués est une marque de commerce de Mastercard International Incorporated.",
    //Foooter part of optional products ends 
    
    //US4131
	
	// Old line
	// optionalProducts_SignatureAgreement1				:	"<i>Je comprends que ce ou ces produits facultatifs sont offerts séparément de carte Mastercard émise par la Banque Canadian Tire et qu'il n'est pas nécessaire d'obtenir carte Mastercard émise par la Banque Canadian Tire. Je comprends que le ou les produits facultatifs que je choisis ne seront fournis que si je signe et accepte les frais indiqués. Si j'ai fait la demande d'une carte Mastercard de Canadian Tire et que celle-ci a été approuvée, j'autorise les Services Financiers Canadian Tire Limitée à porter à mon compte Mastercard de Canadian Tire le montant du paiement périodique indiqué ci-dessus. J'ai lu et compris les détails du produit indiqués dans la documentation comprenant les modalités et je consens à m'inscrire au(x) produit(s) facultatif(s) susmentionné(s).</i>",
	optionalProducts_SignatureAgreement1				:	"<i>Je comprends que ce ou ces produits facultatifs sont offerts séparément de carte Mastercard émise par la Banque Canadian Tire et qu'il n'est pas nécessaire d'obtenir carte Mastercard émise par la Banque Canadian Tire. Je comprends que le ou les produits facultatifs que je choisis ne seront fournis que si je signe et accepte les frais indiqués. Si j'ai fait la demande d'une carte Mastercard de Canadian Tire et que celle-ci a été approuvée, j'autorise les Services Financiers Canadian Tire Limitée à porter à mon compte Mastercard de Canadian Tire le montant du paiement périodique indiqué ci-dessus. J'ai lu et compris les détails du produit indiqués dans la documentation comprenant les modalités et je consens à m'inscrire au(x) produit(s) facultatif(s) susmentionné(s).</i>",
	// VZE-87
	optionalProducts_SignatureAgreement_CP_subTitle				:	"<p>En signant et en cochant la case ci-dessous, j’accepte de souscrire le produit facultatif ci-dessous et j’accepte <span style=\"font-size: 13pt;\";><strong>la prime mensuelle de 1,10 $ par tranche de 100 $ de mon solde quotidien moyen</strong></span> qui sera imputée à ma carte Mastercard émise par la Banque Canadian Tire.</p><p>Pour les résidents du Québec: Je confirm également avoir reçu et consulté le sommaire et la fiche de renseignements.</p>",
	optionalProducts_SignatureAgreement_IW_subTitle				:	"<p>En signant et en cochant la case ci-dessous, j’accepte de souscrire au produit facultatif ci-dessous et j’accepte <span style=\"font-size: 13pt;\";><strong>les frais d’abonnement mensuel de 4,99 $ plus taxes</strong></span> qui seront imputés à ma carte Mastercard émise par la Banque Canadian Tire.</p>",

	optionalProducts_ProtectionAdvantage_Title			:	"Avantage protection<span class=\"MC\"><sup></sup></span> de Canadian Tire",

	optionalProducts_IdentityWatch_Title				:	"Surveillance d’identité Classique<span class=\"section_3_sup_iw\">MD</span>",

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
															+ "En cas d'invalidité ou de perte involontaire de votre emploi<sup>2</sup>, Couverture-crédit pourrait s'appliquer à 3 % du solde impayé du compte de votre carte Mastercard<span class=\"MD\"><sup></sup></span> de <i>Canadian Tire</i><span class=\"MD\"><sup></sup></span>, jusqu'à votre retour au travail ou jusqu'à ce que votre solde soit payé en entier, et ce, jusqu'à concurrence de 20&nbsp;000&nbsp;$. "
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




	optionalProducts_TermsAndConditions_IW_Title: "Conditions d'adhésion au programme Surveillance d'identité Classique<span class=\"MD\"><sup></sup></span>",
	optionalProducts_TermsAndConditions_IW				:	"Surveillance d'identité Classique, 4,99 $ payable en avance chaque mois une fois votre première transaction effectuée avec votre carte de crédit de marque Canadian Tirepar mois, taxes applicables en sus. Ce service comprend les avantages suivants (les « avantages ») :"
															+ " Protection contre l'usurpation d'identité / Service de surveillance en ligne (iPiP<span class=\"MD\"><sup></sup></span>), service de retour de biens Rebound<span class=\"MC\"><sup></sup></span> et un remboursement"
															+ " De plus, la protection des cartes, la sauvegarde de données en ligne, et la récompense pour tout renseignement menant à la condamnation d'un fraudeur.",
	optionalProducts_TermsAndConditions_IW_Additions	: "<strong>Admissibilité : </strong>Votre adhésion prendra effet à compter de la date d'inscription indiquée sur votre lettre de bienvenue qui est comprise dans votre trousse de bienvenue de Surveillance d'identité. Vous êtes admissible aux avantages tant que votre adhésion est maintenue."
															+ " Pour être admissible aux avantages vous devez également être membre de Surveillance d'identité au moment où survient l'événement applicable. Vous, votre conjoint et vos enfants à charge âgés de moins de 21 ans qui habitent sous votre toit ou qui sont aux études (s'il y a lieu), vous avez droit aux avantages."
															+	"<br><strong>Frais d'adhésion : </strong>Vos frais d'adhésion comme indiqués dans votre lettre de bienvenue ou mis à jour ultérieurement par Sigma Proprietary Loyalty Canada Inc. <strong>(« Sigma »)</strong> au moyen d'un avis m'étant transmis <strong>(les « frais »)</strong>, et débuteront une fois la première transaction effectuée avec votre carte de crédit de marque Canadian Tire. Par la suite, les frais d'adhésion seront facturés tous les mois à l'avance sur votre carte de crédit de marque Canadian Tire. Pour assurer un service sans interruption, votre adhésion sera renouvelée automatiquement jusqu'à ce que vous décidiez de l'annuler. Nous porterons vos frais à votre compte de carte de crédit, au taux courant à la date de renouvellement."
															+ "<br><strong>Vous annulez votre demande : </strong>Si vous n'êtes pas entièrement satisfait de votre adhésion, vous pouvez l'annuler en tout temps par téléphone, ou télécopieur en utilisant les coordonnées indiquées ci-dessous. Vous cesserez alors d'être facturé les frais mensuels."
															+ " Si vous annulez dans les trente (30) jours de votre date d'adhésion, les Services Financiers Canadian Tire Limitée vous rembourseront intégralement les frais d'adhésion payés à la suite de votre première transaction effectuée avec votre carte de crédit de marque Canadian Tire. Si vous annulez après les trente (30) premiers jours, l'annulation prendra effet à compter du dernier jour du cycle de facturation en cours ou trente (30) jours après la réception de l'avis d'annulation, selon la première éventualité. Si vous annulez votre adhésion, vous êtes responsable de tous les frais engagés en raison des services offerts par l'intermédiaire d'un fournisseur d'accès Internet ou de tout tiers fournisseur de services."
															+ "<br><strong>Sigma annule votre demande : </strong>Votre adhésion peut être annulée si votre compte n'est pas en règle, si les frais d'adhésion , qui débutent une fois votre première transaction effectuée avec votre carte de crédit de marque Canadian Tire, ne sont pas payés ou s'il est établi que vous ou un membre de votre famille admissible exercez des activités frauduleuses ou que nous faisons mauvais usage des avantages. Sigma se réserve le droit de mettre fin à votre adhésion pour quelque raison que ce soit sur envoi d'un préavis écrit de trente (30) jours."
															+ " Il est de votre responsabilité d'informer Sigma si vous changez d'adresse ou d'adresse de courriel."
															+ " Pour de plus amples renseignements concernant le consentement à la Surveillance d'identité Classique, la collecte et l'utilisation de renseignements personnels, la confidentialité et la sécurité, les modifications de la politique en matière de protection des renseignements personnels, les modalités au complet ou le Guide des avantages, veuillez consulter le site www.identitywatchclassic.ca ou appeler au 1 800 263-1020 au Canada ou au 905 735-1268 1628 (aux É.-U. à frais virés); si ailleurs qu'au Canada ou aux États-Unis, télécopiez au 905 735-2644 ou écrire à : Surveillance d'identité Classique C.P. 1700, succursale D, Toronto (Ontario) M9A 5C7 Télécopieur : 905 735-2644."
															+ " Le programme Surveillance d'identité Classique est commandité par les Services Financiers Canadian Tire Limitée et offert par Sigma Proprietary Loyalty Canada Inc, situé au 2845, boulevard Matheson Est, Mississauga (Ontario)  L4W 5K2. Les Services Financiers Canadian Tire Limitée ont un intérêt financier dans la vente de Surveillance d'identité Classique."
															+ "<br><br><span class=\"MD\"><sup></sup></span>/<span class=\"MC\"><sup></sup></span>Internet Personal Information Patrol, iPiP et Rebound sont des marques de commerce de Sigma Proprietary Loyalty Canada Inc."
															+ "<br><span class=\"MD\"><sup></sup></span>/<span class=\"MC\"><sup></sup></span>Sauf indication contraire, toutes les marques de commerce sont la propriété de la Société Canadian Tire Limitée et sont utilisées sous licence."
	 														+ "<br><span class=\"MD\"><sup></sup></span>/<span class=\"MC\"><sup></sup></span>Mastercard et World Mastercard sont des marques de commerce déposées de Mastercard International Incorporated.",

	//................................................................End Terms and Conditions for Identity Watch Classic.......................
	optionalProducts_IdentityWatch   					:   "- Enrol me in Identity Watch<sup>&trade;</sup>",
	optionalProducts_ProtectionAdvantage   				:   "- Enrol me in Protection Advantage<sup>&trade;</sup>",
	optionalProducts_DoNotEnrolMe 						:   "Pas pour le moment",
	//................................................................


	//....................End New Items...............................

	optionalProducts_CreditProtector                  :                         "Couverture-crédit",
	optionalProducts_License1                         :                         "1,10 $ par tranche de 100 $ du solde impayé du compte de carte de crédit Canadian Tire, moins le solde impayé de tout programme de modalités spéciales, plus les taxes applicables. Aucune prime ne sera facturée lorsque le solde mensuel impayé de votre compte de carte de crédit Canadian Tire sera inférieur à 10 $.",
	optionalProducts_License2                         :                         "Par exemple, si le solde de votre compte s'établit à 200 $, après la déduction des primes d'assurance impayées selon votre relevé et du montant applicable en vertu de tout programme de modalités spéciales, vous ne payerez que 2,20 $ plus les taxes applicables. Aucune prime n'est facturée lorsque le solde mensuel est inférieur à 10 $.",
	optionalProducts_TermsAndConditionsTitle          :                         "Modalités de la Couverture-crédit",
	optionalProducts_TermsAndConditions1              :                         "Offerte aux titulaires de carte âgés de 18 à 65 ans. ",
	optionalProducts_TermsAndConditions2              :                         "En cas d'invalidité ou de perte involontaire de votre emploi2, Couverture-crédit pourrait s'appliquer à 3 % du solde impayé du compte de votre carte Mastercard<span class=\"MD\"><sup></sup></span> de Canadian Tire<span class=\"MD\"><sup></sup></span> , jusqu'à concurrence de 1 000 $ par mois, jusqu'à votre retour au travail ou jusqu'à ce que votre solde soit payé en entier, et ce, jusqu'à concurrence de 20 000 $. Remarque : Les programmes de modalités spéciales ne sont pas inclus.",
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

	// VZE-87
	optionalProducts_TermsAndConditions_16_CP				:	"J’ai lu et compris les détails et les modalités du produit et je donne mon consentement pour souscrire <span style=\"font-size: 13pt;\";><strong>l’Assurance Couverture-crédit<span class=\"MD\"><sup></sup></span></span></strong>.",
	optionalProducts_TermsAndConditions_16_IW              :    "J’ai lu et compris les détails et les modalités du produit et je donne mon consentement pour souscrire à <span style=\"font-size: 13pt;\";><strong>Surveillance d’identité Classique</span></strong>.",
	
	
	//................................................................
	optionalProducts_CP_WarningHeader 						:   "VEUILLEZ LIRE ATTENTIVEMENT CONCERNANT<br>L'ASSURANCE COUVERTURE-CRÉDIT<sup>MD</sup>",
	optionalProducts_IW_WarningHeader 						:   "VEUILLEZ LIRE ATTENTIVEMENT CONCERNE<br>SURVEILLANCE D’IDENTITÉ CLASSIQUE",
	
	// Old line
	// optionalProducts_PAProducts					      : 						"Programme Avantage Protection de Canadian Tire, lequel comprend :<i><ul><li>Couverture-crédit / Couverture-crédit – Âge d'or</li><li>Surveillance d'identité Classique</li></ul></i>",
	// optionalProducts_CPProducts						  : 						"<ul><li>Couverture-crédit / Couverture-crédit – Âge d'or</li></ul>",
	optionalProducts_PAProducts					      : 						"Programme Avantage Protection de Canadian Tire, lequel comprend :<i><ul><li>Assurance Couverture-crédit<span class=\"MD\"><sup></sup></span></li><li>Surveillance d'identité Classique</li></ul></i>",
	optionalProducts_CPProducts						  : 						"<ul><li><span style=\"font-size: 14pt;\";><strong>L’Assurance Couverture-crédit<span class=\"MD\"><sup></sup></span></strong></span></li></ul>",
	optionalProducts_IWProducts						  : 						"<ul><li><span style=\"font-size: 14pt;\";><strong>Surveillance d'identité Classique</strong></span></li></ul>",
	
	// US3981
	optionalProductScreen_Handoutprompts_Title			:	"IMPORTANT",
	optionalProductQCYES                                :   "OUI",
	optionalProductQCNO                                 :   "NON",
	optionalProductScreen_Handoutprompts_YesNo_Message	:	"Le Guide de distribution doit être remis à tous les clients qui souscrivent Couverture-crédit dans la province du Québec. Avez-vous remis le guide de distribution au client?",
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
	// US4532
	jobTitlesList_GU_PO                           :     'Policier',
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
	// US4078	
	CANADA												:"CANADA",
	MANITOBA											:"MANITOBA",
	NEW_BRUNSWICK										:"NOUVEAU-BRUNSWICK",
	NEWFOUNDLAND_LABRADOR								:"TERRE-NEUVE ET LABRADOR",
	NOVA_SCOTIA											:"NOUVELLE-ÉCOSSE",
	NORTHWEST_TERRITORIES								:"TERRITOIRES DU NORD-OUEST",
	NUNAVUT												:"NUNAVUT",
	ONTARIO												:"ONTARIO",
	PRINCE_EDWARD_ISLAND								:"ÎLE-DU-PRINCE-ÉDOUARD",
	QUEBEC												:"QUÉBEC",
	SASKATCHEWAN										:"SASKATCHEWAN",
	YUKON												:"YUKON",

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
	*/
	ATTN 												:"ATTN1",
	
	
	// US3767
	Program_Intercept									:	'Intercept',
	Program_In_Store_Events								:	'Événements en magasin',
	Program_CTP_Events									:	'Événements DPCT',
	Program_CTP_Local									:	'Régional DCTP',
	
	PromoCodeList_null									: 	'Veuillez sélectionner...',
	PromoCode_Intecept									:	'Intercept',
	PromoCode_Grand_Opening								:	'Ouverture officielle',
	PromoCode_Other										:	'Autre',
	PromoCode_OMC_Days									:	'Journées Triangle',
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
	signatureScreen_License1                          :                         "Veuillez ouvrir un compte à mon nom pour la carte",
	signatureScreen_License1_1                        :                         " (la « carte ») ",
	// UAT 25 - Jul 22, CP Revitalization
    // Old code
    // signatureScreen_License1_2                        :                         " à un taux d'intérêt annuel de 19,99 % pour tous les types de débits (à l'exception des avances de fonds et des frais afférents) et de 21,99 % pour les avances de fonds et les frais afférents.",
	// signatureScreen_License2                          :                         "S'il ne vous est pas possible d'approuver ma demande de carte prévoyant un taux d'intérêt annuel de 21,99 % pour les avances de fonds et les frais afférents et un taux d'intérêt annuel de 19,99 % pour tous les autres types de débit, j'accepte que vous traitiez la présente demande comme s'il s'agissait d'une demande de carte à un taux d'intérêt annuel de 25,99 % pour tous les types de débit sans que vous n'ayez à m'en aviser spécifiquement.",
	signatureScreen_License1_2                        :                         "à des taux d'intérêt annuels de <span style=\"font-size: 12pt;\";><strong>19,99 %</strong></span> pour toutes les transactions (à l'exception des transactions au comptant et des frais afférents) et de <span style=\"font-size: 12pt;\";><strong>22,99 %</strong></span> pour les transactions au comptant et les frais afférents si je réside à l'extérieur du Québec, ou à des taux d'intérêt annuels de <span style=\"font-size: 12pt;\";><strong>19,99 %</strong></span> pour toutes les transactions (à l'exception des transactions au comptant et des frais afférents) et de <span style=\"font-size: 12pt;\";><strong>21,99 %</strong></span> pour les transactions au comptant et les frais afférents si je réside au Québec.",
	signatureScreen_License2                          :                         "Si votre demande de carte n'est pas approuvée aux taux susmentionnés, la Banque Canadian Tire peut quand même vous émettre une carte aux taux d'intérêt annuels suivants, sans préavis :"+" <br><br> (i)&nbsp;&nbsp;&nbsp;&nbsp;si vous êtes un résident du Québec, <span style=\"font-size: 12pt;\";><strong>21,99 %</strong></span> pour toutes les transactions; ou"+"<br><br>(ii)&nbsp;&nbsp;&nbsp;&nbsp;si vous résidez à l'extérieur du Québec, <span style=\"font-size: 12pt;\";><strong>25,99 %</strong></span> pour toutes les transactions (à l'exception des transactions au comptant et des frais afférents) et <span style=\"font-size: 12pt;\";><strong>27,99 %</strong></span> pour les transactions au comptant et les frais afférents.",
	signatureScreen_License3                          :                         "La carte est émise par la Banque Canadian Tire (la « BCT »).",
	signatureScreen_License4                          :                         "La Banque Canadian Tire peut procéder à la collecte, à l'utilisation et à la communication de renseignements personnels me concernant aux fins décrites dans « la politique en matière de protection des renseignements personnels de Canadian Tire », notamment à des fins de commercialisation par téléphone, dispositif de composition et d'annonce automatique ou toute autre forme de télécommunication.",
	signatureScreen_License5                          :                         "Je serai lié par les modalités du contrat du titulaire de carte de la Banque Canadian Tire que je recevrai avec la carte, lequel peut être modifié de temps à autre. Je serai la seule personne responsable de tous les débits imputés à ce compte, y compris ceux portés au compte par toute personne pour laquelle je vous ai demandé d'émettre une carte additionnelle. Je serai la seule personne qui recevra un relevé de compte mensuel.",
	signatureScreen_License6                          :                         "<u>Vous pouvez obtenir des renseignements sur mes antécédents de crédit et d'autres renseignements personnels me concernant auprès d'agences d'évaluation du crédit et communiquer de tels renseignements à ces agences.</u>",
	signatureScreen_License6_newLine				  :	                        "Je consens à ce que la Banque Canadian Tire procède à une vérification de mes renseignements personnels, comme mon nom, mon adresse, ma date de naissance, mon numéro de téléphone mobile auprès de mon fournisseur de services mobiles et j’autorise mon fournisseur de services mobiles à fournir ces renseignements &#40;Tenue de compte, type de compte, etc.&#41;  à la Banque Canadian Tire. Les renseignements concernant mon compte de téléphonie mobile seront utilisés pour vérifier mon identité et d’effectuer des analyses et des enquêtes contre la fraude.",
	signatureScreen_License7                          :                         "Chaque personne pour laquelle je vous ai demandé d'émettre une carte additionnelle m'a autorisé à vous fournir les renseignements ci-dessus la concernant.",
	signatureScreen_License8                          :                         "Si je vous fournis mon numéro d'assurance sociale, vous pouvez l'utiliser à des fins d'identification, notamment auprès d'agences d'évaluation du crédit.",
	signatureScreen_License9                          :                         "J'ai lu et compris le texte figurant sur la présente demande de carte et ai reçu un document contenant des renseignements additionnels concernant cette demande.",

	signatureScreen_Reset_Button_Label                :                         "Effacer Signature",
	// VZE-88
	signatureScreen_AllowUpSellOMZCard                :                         "false",

	signatureScreen_TermsAndConditions_AcceptBox      :                         "Je reconnais avoir lu, compris et accepté les modalités et les conditions, telles que définies ci-dessus, pour la carte ",
	signatureScreen_TermsAndConditions_AcceptBox_MSPVerification              	:    " <b>et mon fournisseur de services mobiles.</b>",

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
	summary_ContactInfo_SubTitle	                  :                         "Pour nous joindre",
	summary_TellAboutYourself_FirstName               :                         "Prénom",
	summary_TellAboutYourself_Initial                 :                         "Initiale du deuxième prénom",
	summary_TellAboutYourself_LastName                :                         "Nom de famille",
	summary_TellAboutYourself_DateOfBirth             :                         "Date de naissance",
	summary_TellAboutYourself_HomePhone               :                         "Téléphone (rés.)",
	summary_TellAboutYourself_CellPhone               :                         "Téléphone (cell.)",
	summary_TellAboutYourself_Correspondence          :                         "Langue de correspondance",

	summary_Address_SubTitle                          :                         "Adresse",

	summary_Address_PostalCode                        :                         "Code postal",
	summary_Address_StreetNumber                      :                         "Numéro de rue ",
	summary_Address_StreetName                        :                         "Rue",
	summary_Address_AddressLine1                      :                         "Adresse postale ligne 1",
	summary_Address_AddressLine2                      :                         "Adresse postale ligne 2",
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
	summary_FinEmp_GrossAnnualIncome                  :                         "Revenu annuel personnel brut",
	summary_FinEmp_GrossAnnualHouseholdIncome         :                         "Revenu annuel brut du ménage",
	
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
	summary_SupCard_Address_StreetNumber              :                         "Numéro d'adresse",
	summary_SupCard_Address_StreetName                :                         "Rue",
	summary_SupCard_Address_AddressLine1              :                         "Adresse postale ligne 1",
	summary_SupCard_Address_AddressLine2              :                         "Adresse postale ligne 2",
	summary_SupCard_Address_SuiteUnit                 :                         "App. / Bureau / Unité",
	summary_SupCard_Address_City                      :                         "Ville",
	summary_SupCard_Address_Province				  :							"Province",

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
    summary_highlighter_SubTitle                      :                         "Votre demande doit être vérifiée par un représentant du magasin ",
    summary_highlighter_Representative				  :							".",
	summary_highlighterHeader                         : 				        "IMPORTANT",
    
		// Summary screen END ................................................................

 // AgentAttribution screen STARTS
    agentAttribution_Submit_Button                      :  "Soumettre",
    agentAttribution_EnterAgentId_label                 :  "Entrer le code d’agent",
    agentAttribution_NewPassword_label                  :  "Nouveau mot de passe",
    
    agentLoginScreen_EnterAgentID_Label                 :   "Entrer le code d’agent",
    agentLoginScreen_NewPassword_Label                  :   "ouveau mot de passe",
    AgentLoginScreen_Button_Label                       :   "Soumettre",
    agentLoginScreen_Create                             :   "Créer",
    agentLoginScreen_Update                             :   "Modifier",
    agentLoginScreen_Delete                             :   "Supprimer",
    agentLoginScreen_Search                             :   "Rechercher",
	loginScreen_Password_Label                          :   "Mot de passe",
	agentLoginScreen_messageDialogTitle					:	"Confirmation",
	agentLoginScreen_messageSearchDialogTitle           :   "Résultat de la recherche",
	agentLoginScreen_messageDialogAgentExistMsg			:	"Le numéro de l'agent existe déjà",
	agentLoginScreen_messageDialogDeleteMsg				:	"Voulez-vous vraiment supprimer le code d’agent  ",
	agentLoginScreen_messageDialogUpdateMsg				:	"Êtes-vous sûr de vouloir modifier le mot de passe pour ",
	agentLoginScreen_messageDialogSearchMsg				:	"Code d’agent",
	agentLoginScreen_messageDialogAgentNotFoundMsg		:	"Représentant introuvable",
	
	
	agentLoginScreen_messageDialogUpdatedSuccessfullyMsg:	"Agent Updated Successfully",
	agentLoginScreen_messageDialogNotUpdatedMsg			:	"Agent Not Updated",
	agentLoginScreen_messageDialogDeletedSuccessfullyMsg:	"Le code d’agent a été supprimé",
	agentLoginScreen_messageDialogNotDeletedMsg			:	"Agent Not Deleted",
	
	agentLoginScreen_messageDialogEnrollmentDate        :   "Date d’inscription = ",
	agentLoginScreen_messageDialogCancel		        :   "Annuler",
	agentLoginScreen_messageDialogClose			        :   "Fermer",
	
    // AgentAttribution screen ENDS
    
		// Print screen START ..............................................................


	printScreen_Title                                 :                         "Demande terminée!",
	printScreen_Title_OMX_OMZ                         :                         "Demande complète!",
	printScreen_SubTitle                              :                         "Merci d’avoir fait une demande.",
	printScreen_SubTitle_1                            :                         "Vous êtes admissible à la carte",    
	printScreen_SubTitle_OMP_OMR                      :                         "Nous vous remercions d’avoir demandé la carte ",
	printScreen_Button_Label                          :                         "Imprimer à nouveau",

	printScreen_TokenLabel								: 						"Reference&nbsp;#&nbsp;",
	printScreen_MobilePayments_Para4				  :							"Tout appareil utilisant Android Kit Kat 4.4<br> ou une version plus récente",
	
	printScreen_UnknownStatus                         :                         "État de demande inconnu",
	printScreen_ApplicationApproved_RedLabel          :                         "Votre demande est <b class='RedLabel'>APPROUVÉE!</b>",
	printScreen_ApplicationApproved                   :                         "Votre demande a été APPROUVÉE.",
	printScreen_ApplicationApproved_OMX_OMZ           :   						"Votre demande pour la ",
	printScreen_ApplicationApproved_OMX_OMZ_Approved  :   						" a été <b class='RedLabel'>APPROUVÉE</b>",
	printScreen_ApplicationDeclined                   :                         "Malheureusement, la réponse à votre demande n'a pu être traitée. Veuillez vérifier votre courrier régulièrement.",
	printScreen_ApplicationDeclined_OMX_DUPECONV      :                         "<p align=\"center\" sytle=\"font-weight:normal;\" >Nous avons remarqué que vous détenez déjà une carte Mastercard<sup style='font-size: .5em;'>MD</sup> Options<sup style='font-size: .5em;'>MD</sup> Canadian Tire. La carte Mastercard Triangle est le nouveau nom de la carte Mastercard Options Canadian Tire.  Vous n’avez donc pas besoin de présenter une nouvelle demande. Nous n’avons pas non plus effectué de vérification auprès de l’agence d’évaluation du crédit. Vous êtes déjà membre du programme Récompenses Triangle et vous recevrez la nouvelle carte Mastercard Triangle à l’expiration de votre carte Mastercard Options.</p>",
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
	//VZE-210
	scanFaildErrorMessageTitle                          :   "Erreur de lecture du permis de conduire",
    scanFaildErrorMessageOne                            :   "Désolé, nous ne sommes pas en mesure de numériser votre permis de conduire aujourd'hui.",
    scanFaildErrorMessageTwo                            :   "Veuillez remplir le reste de votre demande manuellement.",
    scanFaildErrorMessageOkButton                       :   "D’ACCORD",
    
	//US4495 - WICI - Test Print at tablet login for FMR
	testPrintVerifyPrinterMsg                           :    "SVP s'assurer que l'imprimante est activée et appariée à la tablette avant de continuer",
	testPrintVerify_Title                               :    "Verifier l'imprimante",
	testPrintVerify_Contionue_Button                    :    "Continuer avec l'application",
	
	// US4709
	printScreen_ReceiveCard								:	"Vous recevrez votre carte dans les 10 prochains jours ouvrables.",
	printScreen_Register_googlePay                      :   "Inscrivez-vous à Google Pay",
	printScreen_Register_applePay                       :   "Inscrivez-vous à Apple Pay",
	printScreen_Register								:	" et utilisez votre téléphone pour effectuer des paiements sécurisés en toute simplicité partout où les paiements sans contact sont acceptés. Certains commerçants peuvent avoir établi un montant maximum de paiement par transaction. Par exemple, la limite dans les magasins Canadian Tire est de 100 $ pour effectuer un paiement sans contact.",
	print_BeginSetup_Button								:	"COMMENCER LA CONFIGURATION",
	print_Done_Button									:	"C’EST FINI!",
	printScreen_SetUpIns								:	"Instructions pour la configuration",
	printScreen_SetUpInsPara1							:	"Assurez vous d’avoir reçu un message texte avec un code de sécurité à 3 chiffres",
	printScreen_SetUpInsPara2							:	"Ouvrir l’appli Google Pay sur tout appareil fonctionnant sur Android Kit Kat 4.4 ou une version plus récente.</span>",
	printScreen_SetUpInsApplePara2						:	"<span style=\"margin-left: -40px;\">Ouvrir l’appli </span> <a href=\"#\" id=\"applePayIns_fr\" class=\"androidApplePay bgCenter\" data-lang-class></a> <span style=\"margin-left: 30px;\">sur tout iPhone 6 ou modèle plus <br>récent</span>",
	printScreen_SetUpInsPara3							:	"<span style=\"margin-left: -38px;\">Suivez les instructions à l’écran à l’aide</span><br><span style=\"margin-left: -38px;\">des renseignements suivants :</span>",
	printScreen_SetUpInsCardNo							:	"Numéro de la carte : ",
	printScreen_SetUpInsExpiryDate						:	"Date d’expiration : ",
	printScreen_SetUpInsSecurityCode					:	"Code de sécurité : ",
	printScreen_SetUpInsSecurityCodeIns					:	"Code à 3 chiffres indiqué dans <br>le message texte provenant <br>du numéro 1 647 493 1657",
	printScreen_PayInCompletePara1						:	"Malheureusement, nous ne sommes pas en mesure de lier votre compte avec Apple Pay ou Google Pay pour le moment, mais votre application est approuvée. Vous recevrez votre carte dans les 10 prochains jours ouvrables.",
	printScreen_PayInCompletePara2						:	"Veuillez essayer de vous inscrire sur Apple Pay ou Google Pay dès que vous recevez votre carte par le poste.",
	printScreen_PayInCompletePara3						:	"N’oubliez pas que vous pouvez acheter en magasin aujourd’hui avec votre carte temporaire ",
	printScreen_PayParaSymbol							:	"!",
	// US4787
	printScreen_safty_instuction_for_user               :   "Dans le souci de protéger votre sécurité et vos informations<br> personnelles, nous vous prions de ne pas donner votre<br> appareil personnel au préposé aux ventes.",
	
	printScreen_PrinterError_Title						:	"Erreur d’impression",
	printScreen_PrinterError_ExceptionOrMessage			:	"<b>La demande de carte de crédit est approuvée mais l'impression a échoué à cause de la connexion de l'imprimante, veuillez redémarrer l'imprimante.<br><br></b>",
	printScreen_PrinterError_Message					:	"<b>ATTENDEZ</b> En raison d'une erreur, le reçu de crédit immédiat ne s'imprimera pas. Veuillez communiquer avec votre équipe de soutien immédiatement avec les détails de ce message d'erreur <b>avant de terminer la demande ou de procéder.</b><br><br>Canadian Tire : 1 866 899-3025<br>Mark’s/L’Équipeur : 1 888 670-6674<br>SportChek/Atmosphere : 1 866 217-1105.<br>Sports Experts : 1 877 939-7272<br><br>",
	printScreen_Pre_PrinterError_Message				:	"<b>ATTENDEZ</b> En raison d'une erreur, le reçu de crédit immédiat ne s'imprimera pas. Veuillez communiquer avec votre équipe de soutien immédiatement avec les détails de ce message d'erreur <b>avant de terminer la demande ou de procéder.</b><br><br>Canadian Tire : 1 866 899-3025<br>Mark’s/L’Équipeur : 1 888 670-6674<br>SportChek/Atmosphere : 1 866 217-1105.<br>Sports Experts : 1 877 939-7272<br><br>",
	
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
	
	// US4084
	pendingScreen_PollingInProgress_Text				:	"sondage en cours",
	pendingScreen_PollingCompleted_Text					:	"sondage complété",

	pendingScreen_RetrieveFailed						:	"La réponse à votre demande n’a pu être traitée. Une réponse vous sera envoyée par la poste dans un délai de 5 à 7 jours ouvrables.",
	// US3436
	pendingScreen_ApplicationPending				  	:	"Nous vous remercions de votre patience. Votre demande est encore à l’étude par notre équipe du service à la clientèle. Veuillez revenir dans 30 minutes.",
	
	// Pending screen end

	//Added by DPS ***************************
    //OMC_LEGAL
    legal_omc_first_chapter								: "<sup>1</sup> Terms, conditions and restrictions apply. See program rules at canadiantire.ca or cffs.comictm for more details.Canadian Tire Options Mastercard cardmembers paying with their Options Mastercard collect e-Canadian Tire 'Money' at a rate that is 10X (or 2X as the case may be) the rate at which other members of the My Canadian Tire 'Money' program collect e-Canadian Tire 'Money' on purchases made by such other members at Canadian Tire stores (if those other members paid by cash, debit or a credit card not linked to this loyalty program). The offered rate is exclusive of any bonus, or promotional offers or redemption transactions.",
    legal_omc_second_chapter 							: "<sup>2</sup> Minimum fuel purchase required. Rate may vary by location. See local gas bars for details.",
    /*
    legal_omc_third_chapter 							: "&dagger;  Frais d'avances de fonds : 4,00 $. Les frais d'intérêt sont imputés à compter de la date d'obtention de l'avance jusqu'à la date du remboursement de celle-ci et de tous les intérêts courus.",
    */
    legal_omc_fives_chapter 							: "<span class=\"MDMC\"><sup></sup></span> Sauf indication contraire, toutes les marques de commerce sont déposées par La Société Canadian Tire Limitée et sont utilisées sous licence." +
                                                          "<br><span class=\"MDMC\"><sup></sup></span> Sport Chek est une marque de commerce déposée de FGL Sports ltée." +
                                                          "<br><span class=\"MDMC\"><sup></sup></span> Mark's/L'Équipeur est une marque de commerce déposée de Mark's Work Warehouse Ltd.",    
    legal_omc_sixth_chapter 							: "<span class=\"MDMC\"><sup></sup></span> Mastercard, SecureCode et Cirrus sont des marques de commerce déposées , et le logo des deux cercles imbriqués est une marque de commerce de Mastercard International Incorporated.",

    //OMP_LEGAL
	legal_omp_first_chapter 							: "Selon le montant net des nouveaux achats (achats moins crédits) portés à votre compte Mastercard Avantage Essence au cours de toute période de facturation mensuelle, vous serez admissible à un rabais sur chaque litre d'essence ou de carburant diesel acheté pour un véhicule automobile dans un poste d'essence Canadian Tire au cours de la période de facturation mensuelle suivante et payé avec votre carte Mastercard Avantage Essence.",
	// US3997 
	legal_omp_second_chapter							: "Le rabais que vous obtenez au cours d'une période de facturation donnée sera ramené à 2 ¢ le litre dès que le total des achats d'essence, de carburant diesel et d'articles divers effectués dans les postes d'essence Canadian Tire et réglés avec votre carte Mastercard Avantage Essence dépassera 500 $.  Pour connaître les modalités, rendez-vous à l'adresse ctfs.com/avantageessence.",
	legal_omp_third_chapter 							: " En Nouvelle-Écosse, le rabais est accordé à la caisse. Il en va de même lorsqu'un distributeur d'essence n'offre pas de facilités de paiement.",
	legal_omp_fourth_chapter							: " Frais d'avances de fonds : 4,00 $. Les frais d'intérêt sont imputés à compter de la date d'obtention de l'avance jusqu'à la date du remboursement de celle-ci et de tous les intérêts courus.",
	legal_omp_fives_chapter 							: "   Couverture-crédit est souscrite auprès de American Bankers, Compagnie d'Assurance Vie de la Floride, et American Bankers, Compagnie d'Assurances Générales de la Floride, filiales de Assurant Solutions<span class=\"MD\"><sup></sup></span>.",
	// US3997	
	legal_omp_six_chapter 								: "<sup>2</sup> Lorsque votre demande de carte Mastercard Avantage Essence est approuvée, le rabais de 5 ¢ par litre entrera en vigueur à la date d’ouverture de votre compte et sera valide pendant 30 jours (« le premier mois »). Après le premier mois, votre rabais sera basé en fonction du montant net des nouveaux achats (achats moins crédits) portés à votre compte Mastercard Avantage Essence au cours du premier mois, plus un rabais supplémentaire de 3 ¢ par litre, pour un rabais d’une valeur minimum de 5 ¢ par litre pendant la nouvelle période de 30 jours (« le deuxième mois »).  Le rabais de 3 ¢ supplémentaire ne sera valable que pour une transaction par jour, par compte, cartes additionnelles incluses.  Par exemple, si le montant net des nouveaux achats inscrits à votre compte est entre :  0 $ et 499,99 $ le premier mois, votre rabais sur chaque litre d’essence restera de 5 ¢ pour le deuxième mois; 500 $ et 999,99 $ le premier mois, votre rabais sur chaque litre d’essence sera de 8 ¢ le deuxième mois; 1 000 $ et 1 999,99 $ le premier mois, votre rabais sur chaque litre d’essence sera de 11 ¢ le deuxième mois; 2 000 $ et plus le premier mois, votre rabais sur chaque litre d’essence sera de 13 ¢ le deuxième mois.  Cette prime d’activation est valide pour un achat d’essence par jour pendant la période promotionnelle. À compter de la fin du deuxième mois, le rabais admissible auquel vous aurez droit sera celui indiqué sur votre relevé de compte mensuel. En ce moment, le rabais est ramené à 2 ¢ le litre dès que le total des achats effectués dans les postes d’essence Canadian Tire dépasse 500 $." ,
	// Old code
	// legal_omp_eight_chapter 							: "<span class=\"MDMC\"><sup></sup></span> Couverture-crédit est une marque de commerce déposée des Services Financiers Canadian Tire Limitée.",
	legal_omp_eight_chapter 							: "<span class=\"MDMC\"><sup></sup></span> Couverture-crédit est une marque de commerce déposée de la Banque Canadian Tire.",
	// Old line
	// legal_omp_nine_chapter 								: "<span class=\"MDMC\"><sup></sup></span> Mastercard, World Mastercard, Cirrus et SecureCode sont des marques de commerce déposées et PayPass est une marque de commerce de Mastercard International Incorporated.",
	// legal_omp_nine_chapter 								: "<span class=\"MDMC\"><sup></sup></span> Mastercard et World Mastercard sont des marques de commerce déposées de Mastercard International Incorporated.",
	legal_omp_nine_chapter 								:  "<span class=\"MDMC\"><sup></sup></span> Mastercard, World Mastercard et Mastercard SecureCode sont des marques de commerce déposées , et le logo des deux cercles imbriqués est une marque de commerce de Mastercard International Incorporated.",
	
	// US3766
	// OMR_LEGAL
	legal_omr_first_chapter 							: "<sup>*</sup> Les primes annuelles seront utilisées pour réduire le solde servant au calcul du paiement minimum, mais elles ne réduiront pas le solde utilisé pour le calcul des frais d’intérêts ni des primes d’assurance basées sur le solde. D’autres conditions s’appliquent.",
	legal_omr_second_chapter 							: "<sup>&dagger;</sup> Certaines conditions s’appliquent. Pour obtenir de plus amples renseignements, consultez les modalités du programme de primes.",
	legal_omr_third_chapter 							: "<sup>&dagger;</sup><sup>&dagger;</sup> Pour obtenir la prime spéciale de remise en argent, vous devez régler un achat dans un magasin Canadian Tire à la date indiquée en utilisant votre numéro de compte Mastercard Avantage Remise. Vous pouvez aussi effectuer un achat dans un magasin Canadian Tire dans les 45 jours qui suivent la réception de votre carte. Après qu’un achat admissible aura été inscrit à votre compte, la prime spéciale en argent sera ajoutée à votre compte de primes au plus tard à la date de votre troisième relevé de compte suivant l’inscription de la transaction, à la condition que votre compte soit en règle.",
	legal_omr_four_chapter	 							: "<span class=\"MDMC\"><sup></sup></span> Sauf indication contraire, toutes les marques de commerce sont la propriété de La Société Canadian Tire Limitée et sont utilisées sous licence. ",	
	legal_omr_five_chapter 								: "Couverture-crédit est souscrite par American Bankers Compagnie d’Assurance Vie de la Floride et d’American Bankers Compagnie d’Assurance Générale de la Floride. American Bankers Compagnie d’Assurance Vie, American Bankers Compagnie d’Assurance générale, leurs filiales et sociétés affiliées, exercent des activités au Canada sous le nom de Assurant Solutions<span class=\"MD\"><sup></sup></span>. ",
	legal_omr_six_chapter 								: "<span class=\"MD\"><sup></sup></span> Assurant Solutions est une marque de commerce déposée de Assurant, Inc.",
	legal_omr_seven_chapter 							: "<span class=\"MDMC\"><sup></sup></span> Couverture-crédit est une marque de commerce déposée de la Banque Canadian Tire.",
	legal_omr_eight_chapter 							: "<sup>1</sup> La couverture d’assurance est offerte sous réserve des modalités, des limitations, des exclusions et des restrictions décrites dans le certificat d’assurance. Cette couverture d’assurance est offerte aux titulaires de cartes âgés d’au moins 18 ans et de moins de 76 ans. La couverture maximale offerte est de 20 000 $.",
	legal_omr_nine_chapter 								: "<span class=\"MDMC\"><sup></sup></span> Mastercard, World Mastercard, Secure Code et Cirrus sont des marques déposées, et le logo des deux cercles imbriqués est une marque de commerce de Mastercard International Incorporated.",	
	
	// OMC
    omc_first_chapter 								    : "UNE FAÇON PLUS RAPIDE D'OBTENIR DE L'Argent  CANADIAN TIRE",
    omc_second_chapter 								    : "Demandez la carte Mastercard Options de Canadian Tire dès aujourd'hui. C'est une façon plus rapide d'obtenir de l'Argent  Canadian Tire.<br> Utilisez tout simplement la carte partout où vous magasinez – elle est acceptée dans le monde entier par des millions de commerçants.",


    omc_fourth_chapter_ectm                             : "<b>Obtenez <span class='RedLabel'> 4% </span></b> en Argent  Canadian Tire tous les jours dans les magasins Canadian Tire, y compris dans les centres-autos<sup>1</sup>.",
    omc_fives_chapter_ectm                              : "<b>Obtenez <span class='RedLabel'>4%</span></b> des primes en Argent  Canadian Tire tous les jours dans les magasins Sport Chek<span class=\"MD\"><sup></sup></span>, Mark's<span class=\"MD\"><sup></sup></span> / L'Équipeur<span class=\"MD\"><sup></sup></span>, et PartSource<span class=\"MD1\"><sup></sup></span>.",
    omc_sixt_chapter_ectm                               : "<b>Obtenez</b> de l'Argent  Canadian Tire dans les postes d'essence Canadian Tire participants<sup>2</sup>.",
    omc_seventh_chapter_ectm                            : "<b>Obtenez </b> de l'Argent  Canadian Tire partout ailleurs où vous magasinez<sup>1</sup>.",
    omc_eight_chapter_ectm                              : "<b>Échangez</b> votre Argent Canadian Tire chez Canadian Tire et dans certains magasins partenaires Sport Chek et Mark's<sup>1</sup>",
    omc_eight_chapter 								    : "De plus, vous profiterez des avantages offerts aux titulaires de carte :",
    omc_nine_chapter 									: "<b><i>PayPass</i><span class=\"MD\"><sup></sup></span></b> – passez à la caisse plus rapidement",
    omc_ten_chapter 									: "<b>Sécurité accrue</b> grâce à la technologie des puces",
    omc_eleven_chapter 									: "<b>Accès à votre compte en ligne</b> et offres exclusives par courriel",
    omc_twelve_chapter									: "<b>Acceptation chez des millions de commerçants</b> dans le monde qui acceptent la carte Mastercard<span class=\"MD\"><sup></sup></span>",
    omc_13_chapter 										: "<b>Avances de fonds</b><sup>&dagger;</sup> à tout guichet automatique bancaire (GAB) affichant les logos Mastercard<span class=\"MD\"><sup></sup></span> ou Cirrus<span class=\"MD\"><sup></sup></span>",
    omc_14_chapter 										: "Aidez à protéger votre carte grâce aux puissants outils de protection.",
    omc_15_chapter 										: "SecureCode de Mastercard<span class=\"MD\"><sup></sup></span>",
    omc_16_chapter 										: "Service à la clientèle ouvert 24 heures sur 24 en cas de perte ou de vol de votre carte. Composez le 1 800 459-6415 (à l'extérieur du Canada et des États-Unis, composez le 905 735-7256; nous acceptons les frais).",
	// OMP
    // US3997
    omp_1_chapter 										: "PRIME! Économisez au moins 5 ¢ le litre pendant les 60 premiers jours<sup>2</sup>",
	omp_2_chapter 										: "C'est facile d'économiser au moins 2 ¢ et jusqu'à 10 ¢* sur chaque litre d'essence acheté dans un poste d'essence Canadian Tire. Vous n'avez qu'à utiliser la carte Mastercard<span class=\"MD\"><sup></sup></span> Avantage Essence<span class=\"MD\"><sup></sup></span> pour vos achats de tous les jours et vous économiserez instantanément, directement au distributeur<sup>&dagger;</sup>!            ",
	omp_3_chapter 										: "Voyez comme c'est facile :",
	omp_4_chapter 										: "1. <b>Insérez</b> la carte dans le lecteur du distributeur d'essence<sup>&dagger;</sup><br>2. <b>Voyez</b> le prix du litre baisser INSTANTANÉMENT<br>3. <b>Économisez</b> jusqu'à 10 ¢ le litre.",
	omp_5_chapter 										: "En Nouvelle-Écosse, le rabais est accordé à la caisse. Il en va de même lorsqu'un distributeur d'essence n'offre pas de facilités de paiement.",
	omp_6_chapter 										:  "De plus, profitez de tous les avantages de la carte Mastercard.",
	omp_7_chapter 										: "<b>Acceptation dans le monde entier</b> dans des millions d'établissements..",
	omp_8_chapter 										: "<b>Avances de fonds</b><sup>&dagger;&dagger;</sup> dans n'importe quel guichet automatique bancaire (GAB) affichant le logo Mastercard<span class=\"MD\"><sup></sup></span> ou Cirrus<span class=\"MD\"><sup></sup></span>.",
	omp_9_chapter 										: "<b>Consultation GRATUITE du compte</b> à l'adresse ctfs.com/moncompteenligne                ",
	omp_10_chapter 										: "<b>Cartes supplémentaires SANS FRAIS</b> en appelant au 1 800 459-6415.",
	omp_11_chapter 										: "<b>Service à la clientèle 24 heures sur 24</b> en cas de perte ou de vol de carte. Composez le 1 800 459-6415 (à l'extérieur du Canada et des États-Unis, composez le 905 735-7256; nous acceptons les frais).",
	omp_12_chapter 										: "<b>Trois façons de payer votre facture</b> : dans les magasins Canadian Tire, à votre banque et par la poste. Consultez le Guide des avantages ou le verso de votre relevé de compte pour obtenir de plus amples renseignements.",
	omp_13_chapter 										: "Protection de votre carte lors des transactions en ligne grâce à SecureCode de Mastercard.",
	omp_14_chapter 										: "Vous pouvez aussi aider à protéger votre carte :",
	// Old code
	// omp_15_chapter 										: "Couverture-crédit",
	omp_15_chapter 										: "Couverture-crédit<sup class=\"superscripts\">MD1</sup>",
	//OMR
	// omr_1_chapter 										: "Profitez des avantages suivants à titre de titulaire de carte :",
	
	omr_1_chapter 										: "Obtenez une prime SPÉCIALE de 6 $ de remise en argent<sup>&dagger;</sup><sup>&dagger;</sup>",
	omr_1_1_chapter 									: "Utilisez votre numéro de compte aujourd’hui dans un magasin Canadian Tire OU les 45 jours qui suivent la réception de votre carte pour recevoir votre prime spéciale. ",  
	omr_1_2_chapter										: "<b>Combien pouvez-vous accumuler :</b><br>" ,
	omr_2_chapter 										: "<b>Obtenez jusqu'à 1,5 %<sup>&dagger;</sup> de remise</b> en argent sur tous les achats admissibles.",
	omr_3_chapter 										: "<b>Obtenez jusqu'à 3 %<sup>&dagger;</sup> de remise</b> en argent sur les achats effectués dans les magasins et les postes d'essence Canadian Tire et dans les magasins L'Équipeur<span class=\"MD\"><sup></sup></span>/Mark's<span class=\"MD\"><sup></sup></span> .",
	omr_4_chapter 										: "Obtenez des remises illimitées et ne payez aucuns frais annuels.",
	omr_5_chapter 										: "<b>La remise en argent est versée automatiquement</b> dans votre compte chaque année*",
	
	// US3766 - Start	
	omr_6_chapter 										: "De plus, profitez de tous les avantages de la carte Mastercard.",
	omr_7_chapter 										: " <b>Acceptation dans le monde entier</b> dans des millions d'établissements.",
	omr_8_chapter 										: "<b>Avances de fonds</b><sup>&dagger;&dagger;</sup> dans n'importe quel guichet automatique bancaire (GAB) affichant le logo Mastercard ou Cirrus.",
	omr_9_chapter 										: "<b>Consultation GRATUITE du compte</b> à l'adresse ctfs.com/moncompteenligne                ",
	omr_10_chapter 										: "<b>Cartes supplémentaires SANS FRAIS</b> en appelant au 1 800 459-6415.",
	omr_11_chapter 										: "<b>Service à la clientèle 24 heures</b> sur 24 en cas de perte ou de vol de carte. Composez le 1 800 459-6415 (à l'extérieur du Canada et des États-Unis, composez le 905 735-7256; nous acceptons les frais).",
	omr_12_chapter 										: "<b>Trois façons de payer votre facture :</b> dans les magasins Canadian Tire, à votre banque et par la poste. Consultez le Guide des avantages ou le verso de votre relevé de compte pour obtenir de plus amples renseignements.",
	omr_13_chapter 										: "Protection de votre carte lors des transactions en ligne grâce à <b>SecureCode de Mastercard</b>.",
	omr_14_chapter 										: "<b>Aidez à régler le solde impayé ou à effectuer des paiements mensuels sur votre carte Mastercard<sup>1</sup> émise par la Banque Canadian Tire</b>",
	omr_15_chapter 										: "Couverture-crédit<sup class=\"superscripts\">MD1</sup>",	
	// End
	
	//******************************************
	// personalData_ReceiveEmail					        : "J'aimerais recevoir des renseignements sur les offres, promotions, concours, cadeaux, événements, coupons et autres renseignements ayant trait aux produits et services qui pourraient m'intéresser, par courriel, messagerie texte (sous réserve des frais standards de données et de messagerie texte) et autre messagerie électronique de La Société Canadian Tire Limitée (la « Société Canadian Tire »), des Services Financiers Canadian Tire Limitée (les « SFCT »), de la Banque Canadian Tire (la « BCT »), y compris de leurs divisions commerciales respectives exploitées en vertu des marques Canadian Tire, du programme de primes en Argent  Canadian Tire (ou du programme Avantage Argent  Canadian Tire si vous résidez en Nouvelle-Écosse), de l'Académie des conducteurs de Canadian Tire<span class=\"superscripts\"><sup>MD</sup></span>, des Services résidentiels de Canadian Tire<span class=\"superscripts\"><sup>MC</sup></span> et de l'Assistance routière Canadian Tire<span class=\"superscripts\"><sup>MD</sup></span>, ainsi que d'autres membres du groupe de la Société Canadian Tire, des SFCT et de la BCT ou de leurs partenaires de marketing. Vous pouvez communiquer avec la Société Canadian Tire, les SFCT et la BCT à la C.P. 2000, Welland (Ontario)  L3B 5S3 ou à l'adresse customerservice@canadiantire.ca. Je comprends que je peux retirer mon consentement en tout temps.",
	personalData_ReceiveEmail					        : "Souhaitez-vous recevoir des offres, promotions, concours, cadeaux, événements, coupons et autres renseignements ayant trait aux produits et services qui pourraient vous intéresser, par courriel, messagerie texte &#40;sous réserve des frais standard de données et de messagerie texte&#41; et autre messagerie électronique de La Société Canadian Tire Limitée &#40;la « Société Canadian Tire »&#41;, des Services Canadian Tire Limitée &#40;les « SCT »&#41;, de la Banque Canadian Tire &#40;la « BCT »&#41;, y compris de leurs divisions commerciales respectives exploitées par les marques Canadian Tire, Récompenses Triangle<sup style='font-size: .5em;'>MC</sup>, de l’Académie des conducteurs de Canadian Tire, des Services résidentiels de Canadian Tire et de l’Assistance routière Canadian Tire, ainsi que de leurs partenaires de marketing et sociétés affiliés&#63; Vous pouvez communiquer avec la Société Canadian Tire, les SCT ou la BCT, à la C.P. 2000, Welland &#40;Ontario&#41; L3B 5S3 ou à l’adresse <a href='' target='_blank'>serviceclientele@canadiantire.ca</a>. Vous pouvez retirer votre consentement en tout temps. <br> <p>Veuillez répondre oui ou non pour indiquer si vous acceptez de recevoir des messages électroniques.</p>",
	
	personalData_Yes									: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Oui&nbsp;&nbsp;&nbsp;",
	personalData_No								    	: "&nbsp;&nbsp;&nbsp;Non&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
	personalData1_validation_ReceiveEmail				:"Sélectionnez intérêt légitime par e-mail",
	summary_TellAboutYourself_Email_Consent             : "Abonnement aux courriels de marketing?",
	signature_OptionsMasterCard 					    : "Mastercard<sup style='font-size: .5em;'>MD</sup> Triangle<sup style='font-size: .5em;'>MC</sup>",
	// VZE-3 WICI Bank Rates changes
	signature_OptionsMasterCard_withoutSuperScript 		: "de crédit Mastercard Triangle",
	signature_OptionsMasterCard_Dupconvence_text        : "Merci d’avoir présenté une demande de carte Mastercard Triangle!",
	// VZE-3 WICI Bank Rate changes
	signature_World_ELiteMasterCard_withoutSuperScript 	: 	"de crédit World Elite Mastercard Triangle",
	signature_GasAdvantageMasterCard 					: "Mastercard<sup style='font-size: .5em;'>MD</sup> Avantage Essence<sup style='font-size: .5em;'>MD</sup>",
	signature_GasAdvantageMasterCard1					:  "Mastercard<sup style='font-size: .5em;'>MD</sup> Avantage Essence<sup style='font-size: .5em;'>MD</sup>",
	// VZE-3 WICI Bank Rate changes
	signature_GasAdvantageMasterCard1_withoutSuperScript					:	"de crédit Mastercard Avantage Essence",
	signature_CashAdvantageMasterCard					: "Mastercard Avantage Remise",
	omc_first_chapter_ectm                              : "UNE FAÇON PLUS RAPIDE D'OBTENIR DE L'Argent  CANADIAN TIRE<sup style='font-size: .5em;'>MD</sup>",
    omc_second_chapter_ectm								: "Demandez la carte Mastercard<sup style='font-size: .5em;'>MD</sup>  Triangle<sup style='font-size: .5em;'>MC</sup> dès aujourd'hui. C'est une façon plus rapide d'obtenir de l'Argent  Canadian Tire<sup style='font-size: .5em;'>MD</sup>.</br> Utilisez tout simplement la carte partout où vous magasinez – elle est acceptée dans le monde entier par des millions de commerçants.",
    
   	// US5147 WICI - Updated Signature Box    
    // new key 
    signature_OptionsMasterCard_CreditCard 				: "Carte de crédit Mastercard<sup style='font-size: .5em;'>MD</sup> Triangle<sup style='font-size: .5em;'>MC</sup>",
    signature_World_ELiteMasterCard_CreditCard 			: "Carte de crédit World Elite Mastercard<sup style='font-size: .5em;'>MD</sup> Triangle<sup style='font-size: .5em;'>MC</sup>",
    signature_GasAdvantageMasterCard_CreditCard 		: "Carte de crédit Mastercard<sup style='font-size: .5em;'>MD</sup> Avantage Essence<sup style='font-size: .5em;'>MD</sup>",
    signature_CashAdvantageMasterCard_CreditCard		: "Carte de crédit Mastercard<sup style='font-size: .5em;'>MD</sup> Avantage Remise<sup style='font-size: .5em;'>MD</sup>",

    legal_omc_first_chapter_ectm                        : "<sup>1</sup> Primes octroyées sous forme d'Argent électronique Canadian Tire (Argent CT<span class=\"MC\"><sup></sup></span>). Sous réserve de certaines modalités visant l'obtention et l'échange des primes. Rendez-vous à triangle.com pour plus de détails. Le taux offert est exclusif de toute prime, offre promotionnelle ou transaction d'échange. L’Argent CT est calculé à partir du montant de l’achat avant taxes dans les magasins Canadian Tire et PartSource.",
    legal_omc_seventh_chapter_ectm                      : "Services Financiers Canadian Tire est une dénomination commerciale de la Banque Canadian Tire.",
    legal_omc_second_chapter_ectm                       : "<sup>2</sup> Un montant d'achat d'essence minimum peut être requis. Le taux peut varier d'un poste d'essence à l'autre. Voir les postes d’essence régionaux pour plus de détails." ,
    legal_omc_fourth_chapter_ectm		                : "† Frais d’avances de fonds : 4 $. Des frais d’intérêt sont imputés sur les avances de fonds à compter de la date d’obtention de l’avance, et ce, jusqu’à la date du remboursement de celle-ci et de tous les intérêts courus.",
    personalData_CTMField                               : "Numéro de compte de recompences Triangle<sup style='font-size: .5em;'>MC</sup>  (autrefois Mon Argent Canadian Tire<sup style='font-size: .5em;'>MD</sup>)",

    personalData_CTMAccountText                         : "Veuillez entrer votre numéro de compte Récompenses Triangle<sup style='font-size: .5em;'>MC</sup> si vous êtes déjà membre du programme. Si votre demande de carte de crédit est approuvée, votre compte Récompenses Triangle<sup style='font-size: .5em;'>MC</sup> sera associé à votre nouvelle carte Mastercard<sup style='font-size: .5em;'>MD</sup> Triangle<sup style='font-size: .5em;'>MC</sup>. Un numéro de compte Récompenses Triangle<sup style='font-size: .5em;'>MC</sup> vous sera attribué si vous laissez ce champ vide.",
    // personalData_ReceiveEmail                           : "J'aimerais recevoir des renseignements sur les offres, promotions, concours, cadeaux, événements, coupons et autres renseignements ayant trait aux produits et services qui pourraient m'intéresser, par courriel, messagerie texte (sous réserve des frais standards de données et de messagerie texte) et autre messagerie électronique de La Société Canadian Tire Limitée (la « Société Canadian Tire »), des Services Financiers Canadian Tire Limitée (les « SFCT »), de la Banque Canadian Tire (la « BCT »), y compris de leurs divisions commerciales respectives exploitées en vertu des marques Canadian Tire, du programme Mon Argent  Canadian Tire, de l'Académie des conducteurs de Canadian Tire<span class=\"MD\"><sup></sup></span>, des Services résidentiels de Canadian Tire<span class=\"MD\"><sup></sup></span> et de l'Assistance routière Canadian Tire<span class=\"MD\"><sup></sup></span>, ainsi que d'autres membres du groupe de la Société Canadian Tire, des SFCT et de la BCT ou de leurs partenaires de marketing. Vous pouvez communiquer avec la Société Canadian Tire, les SFCT et la BCT à la C.P. 2000, Welland (Ontario)  L3B 5S3 ou à l'adresse serviceclientele@canadiantire.ca. Je comprends que je peux retirer mon consentement en tout temps.",
    // UAT 25 - Jul 22, CP Revitalization
    // Old code
    // signatureScreen_License2                            : "<b>S'il ne vous est pas possible d'approuver ma demande de carte prévoyant un taux d'intérêt annuel de 21,99 % pour les avances de fonds et les frais afférents et un taux d'intérêt annuel de 19,99 % pour tous les autres types de débit, j'accepte que vous traitiez la présente demande, sans que vous ayez à m'en aviser spécifiquement, comme s'il s'agissait d'une demande de carte à un taux d'intérêt annuel de 25,99 % pour tous les types de débit, à l'exclusion des avances de fonds et des frais afférents pour lesquels le taux d'intérêt annuel sera de 27,99 %.</b>",
     signatureScreen_License2                           :  "Si votre demande de carte n'est pas approuvée aux taux susmentionnés, la Banque Canadian Tire peut quand même vous émettre une carte aux taux d'intérêt annuels suivants, sans préavis :"+" <br><br> (i)&nbsp;&nbsp;&nbsp;&nbsp;si vous êtes un résident du Québec, <span style=\"font-size: 12pt;\";><strong>21,99 %</strong></span> pour toutes les transactions; ou"+"<br><br>(ii)&nbsp;&nbsp;&nbsp;&nbsp;si vous résidez à l'extérieur du Québec, <span style=\"font-size: 12pt;\";><strong>25,99 %</strong></span> pour toutes les transactions (à l'exception des transactions au comptant et des frais afférents) et <span style=\"font-size: 12pt;\";><strong>27,99 %</strong></span> pour les transactions au comptant et les frais afférents.",
    signatureScreen_License3                            : "La carte est émise par la Banque Canadian Tire. Le programme Recompenses Triangle<sup style='font-size: .5em;'>MC</sup> est fourni et administré par La Société Canadian Tire Limitée.",
    signatureScreen_License3_OMP						: "La carte est émise par la Banque Canadian Tire.",
    signatureScreen_License3_OMR						: "La carte est émise par la Banque Canadian Tire.",
    signatureScreen_License7a                           : "Je deviendrai automatiquement membre du programme Recompenses Triangle<sup style='font-size: .5em;'>MC</sup> si je ne le suis pas déjà, même si ma demande de carte n'est pas approuvée.",
    signatureScreen_License7b                           : "Je serai lié par les modalités du programme Recompenses Triangle<sup style='font-size: .5em;'>MC</sup>  décrites à l'adresse triangle.com.",
    signatureScreen_License7b_OMX                       : "Je serai lié par les modalités du programme Recompenses Triangle<sup style='font-size: .5em;'>MC</sup>",
    signatureScreen_License2_OMZ                        : "<b>Si ma demande de carte à ce taux n’est pas approuvée, il se peut que la Banque Canadian Tire accepte d’émettre une carte Mastercard Triangle<sup style='font-size: .5em;'>MC</sup> à mon nom portant un taux d’intérêt annuel de 19,99% pour toutes les transactions, à l’exception des transactions au comptant et des frais afférents et 22,99% pour des transactions au comptant et des frais afférents.</b>",
    // Old code
    // optionalProducts_ProtectionAdvantage_Text   		:	"<br><i>(non disponible pour les résidents de la Saskatchewan)</i><br>Adhésion à la fois à Couverture-crédit<span class=\"MD\"><sup></sup></span>** / Couverture-crédit – Âge d'or<span class=\"MD\"><sup></sup></span>** <strong>et</strong> Surveillance d'identité Classique<span class=\"MC\"><sup></sup></span>. Comprend la couverture et les avantages des deux produits facultatifs, comme indiqué précédemment.",
    // UAT 12 - CP Revitalization 
    // optionalProducts_ProtectionAdvantage_Text   		:	"<br><i>(non disponible pour les résidents de la Saskatchewan)</i><br>Adhésion à l’Assurance Couverture-crédit<span class=\"MD\"><sup></sup></span>  <strong>et</strong> au programme Surveillance d’identité Classique<span class=\"MC\"><sup></sup></span>. Comprend toute la couverture et les avantages des deux produits facultatifs énoncés ci-dessus.",

    // US4083
    // optionalProducts_ProtectionAdvantage_Text   		:	"<br><i>(non disponible pour les résidents de la Saskatchewan)</i><br>Adhésion à l’Assurance Couverture-crédit<span class=\"MD\"><sup></sup></span>  <strong>et</strong> au programme Surveillance d’identité Classique<span class=\"MD\"><sup></sup></span>. Comprend toute la couverture et les avantages des deux produits facultatifs énoncés ci-dessus.",
    optionalProducts_ProtectionAdvantage_Text   		:	"<br>Adhésion à l’Assurance Couverture-crédit<span class=\"MD\"><sup></sup></span>  <strong>et</strong> au programme Surveillance d’identité Classique<span class=\"MD\"><sup></sup></span>. Comprend toute la couverture et les avantages des deux produits facultatifs énoncés ci-dessus.",
    
    // Old code
    // optionalProducts_CreditProtector_Title				:	"Couverture-crédit<span class=\"MD\"><sup></sup></span>** et Couverture crédit – <i>Âge d'or</i><span class=\"MD\"><sup></sup></span>**",
    optionalProducts_CreditProtector_Title				:	"Assurance Couverture-crédit<span class=\"MD\"><sup></sup></span>",
	optionalProducts_CreditProtector_Text				:	"<br><i>(non disponible pour les résidents de la Saskatchewan)</i>",
    optionalProducts_CreditProtector_Additions          :   "*Taxes applicables en sus. Payable mensuellement. Veuillez consulter le document Renseignements juridiques ou votre Certificat d'assurance pour prendre connaissance de toutes les modalités, conditions, limites et exclusions. Certaines modalités s'appliquent." +
                                                            "<br>**Si vous êtes âgé de moins de 66 ans, vous adhérerez à Couverture-crédit. Si vous êtes âgé de 66 à 75 ans, vous adhérerez à Couverture-crédit – <i>Âge d'or</i>. Couverture-crédit est souscrite auprès de American Bankers, Compagnie d'Assurance Vie de la Floride et de American Bankers, Compagnie d'Assurances Générales de la Floride. Couverture-crédit – <i>Âge d'or<i> est souscrite auprès de American Bankers, Compagnie d'Assurance Vie de la Floride. American Bankers, Compagnie d'Assurance Vie de la Floride et American Bankers, Compagnie d'Assurances Générales de la Floride et leurs filiales et sociétés affiliées exercent des activités au Canada sous le nom d'Assurant Solutions<span class=\"MD\"><sup></sup></span>." ,
    // UAT 39 - Jul 22, CP Revitalization
    optionalProducts_TermsAndConditions25_Top           :   "<br><sup>&dagger;</sup><sup>&dagger;</sup> Ce sont des produits facultatifs offerts à tous les nouveaux titulaires de carte Mastercard émise par la Banque Canadian Tire. Les renseignements que vous fournissez sur la présente demande de carte sont utilisés pour déterminer votre admissibilité à l’obtention d’une carte Mastercard émise par la Banque Canadian Tire et non pour votre adhésion aux produits facultatifs, lesquels sont offerts à tous les titulaires de carte Mastercard émise par la Banque Canadian Tire." +
                                                            "<br><br><span class=\"MD\"><sup></sup></span>/<span class=\"MC\"><sup></sup></span> Sauf indication contraire, toutes les marques de commerce sont la propriété de La Société Canadian Tire Limitée et sont utilisées sous licence.",                                                                                                                                                                                   
    optionalProducts_TermsAndConditions25_CP			:	"<br><br><span class=\"MD\"><sup></sup></span>/<span class=\"MC\"><sup></sup></span> Couverture-crédit est une marque de commerce déposée des Banque Canadian Tire.",
    optionalProducts_TermsAndConditions25_ID			:	"<br><br>Le programme Surveillance d’identité Classique est commandité par la Banque Canadian Tire et fourni par Fidélisation propriétaire Sigma Canada Inc." ,
    														
    optionalProducts_TermsAndConditions25_Bottom		:	"<br><br>Retour<span class=\"MD\"><sup></sup></span> et iPiP sont des marques de commerce déposées de Fidélisation propriétaire Sigma Canada Inc." +
                                                            "<br><br><span class=\"MD\"><sup></sup></span> Assurant Solutions est une marque de commerce de Assurant Inc." +
                                                            "<br><br>Mastercard, World Mastercard et Mastercard SecureCode sont des marques de commerce déposées de Mastercard International et sont utilisées sous licence.",                                                                                                                                
    // UAT 12 - CP Revitalization
    optionalProducts_TableTitle                        :   "Oui, je m’intéresse aux produits facultatifs suivants :",
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
        "<p>Le programme Surveillance d'identité Classique est commandité par la Banque Canadian Tire et fourni par Fidélisation propriétaire Sigma Canada Inc.</p></div>",
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
    optionalProducts_SellingLanguageText                :   "<p><strong>Surveillance d'identité Classique<span class=\"MD\"><sup><em></em></strong></p>" +
        "<p>Vous aide à protéger vos renseignements privés et importants, ainsi que ceux de votre famille." +
        "<br/> - Service de surveillance en ligne de toutes vos données personnelles enregistrées**" +
        "<br/> - Service de protection, de sauvegarde des données en ligne et de récompense pour retour de carte de crédit en cas de vol jusqu’à 3 000 $**" +
        "<br/> - Remboursement pour une mise au point informatique jusqu’à 75 $, taxes incluses, par année d’abonnement**" +
        "<br/> - Service de récupération de biens Retour<span class=\"MD\"><sup></sup></span>** qui peut vous aider à récupérer les objets perdus ou volés" +
        "<br/> - Frais d’adhésion de 4,99 $**, payable à l’avance tous les mois après votre première transaction effectuée avec votre carte de crédit de marque Canadian Tire.</p>" +
        "<p>L’adhésion à Surveillance d’identité Classique est facultative et peut être annulée en tout temps. Si vous annulez dans les 30 premiers jours suivant votre date d’adhésion, la Banque Canadian Tire vous remboursera les frais d’adhésion payés, après votre première transaction effectuée à l’aide de votre carte. Si vous annulez après les 30 premiers jours, l’annulation prendra effet à compter du dernier jour du cycle de facturation en cours ou 30 jours après la réception de l’avis d’annulation, selon la première éventualité. Si vous annulez votre adhésion, vous êtes responsable de tous les frais engagés en raison des services offerts par l’intermédiaire d’un fournisseur d’accès Internet ou d’un tiers fournisseur de services.</p>" +
        "<div style=\"font-size: 10pt\"><p><sup>**</sup> Taxes applicables en sus. Vos frais d’adhésion commenceront après la première transaction effectuée à l’aide de votre carte de crédit émise par la Banque Canadian Tire. Par la suite, les frais d’adhésion seront facturés à l’avance, et ce, tous les mois, à votre compte de carte de crédit émise par la Banque Canadian Tire. Consultez le document de renseignements juridiques pour connaître les modalités, les limites et les exclusions. Sous réserve de certaines conditions.</p></div>" +
        "<p>Si vous adhérez au programme Surveillance d'identité Classique, votre adhésion prendra effet à compter de la date d'adhésion indiquée sur votre lettre de bienvenue, laquelle est comprise dans la trousse de bienvenue.</p>",
        /* "<p>Le programme Surveillance d'identité Classique est commandité par la Banque Canadian Tire et fourni par Fidélisation propriétaire Sigma Canada Inc.</p></div>", */
    end                                                 : ""                                                 
};
