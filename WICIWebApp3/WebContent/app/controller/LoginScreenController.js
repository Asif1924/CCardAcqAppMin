ensureNamespaceExists();

WICI.LoginScreenController = function (app) {
    var logPrefix = '[WICI.LoginScreenController]::';
    var $screenContainer = $("#WICILoginScreen");
    var translator = null;
    var messageDialog = null;

    var creditCardData = null;
    var connectivityController = null;
    var testPrintFailedAttempts = null;

    var validateNameFields = false;
    var validateOtherStaff = false;
    var signatureControl;
    var flipValue;
    var isDebugMode;
    var timeout;

    // WICI-83 
    var checkAttestTrainingResponse = null;
    var checkAttestationFlag = false;
    var attestTrainingSignature = "";
    var attestTrainingDate = "";
    var isTrainingModuleFlag = false;
    var isTrainingSliderShowing = false;
    var loginResponseObject = false;

    var latestDictionary = null; //dictionaryInfo

    this.show = show;
    this.hide = hide;
    this.init = init;

    this.syncUserData = syncUserData;

    var refs = {
        employerID: '#employerIDTextField',
        //userID            : '#userIDTextField',
        agentID: '#agentIDTextField',
        // US4454
        password: '#passwordTextField',
        //passwordFieldID : '#passwordTextField',
        businessStoreNo: '#locationNumberTextField',
        firstName: '#firstNameTextField',
        lastName: '#lastNameTextField',

        loginButtonID: '#loginScreen_LoginButton',
        trainingButtonID: '#loginScreen_TrainingButton',
        CTFSLogo: '#CTFSLogo',
        language_choser: '#language_choser',
        logoType: '#CTFSLogo',
        testPrintButtonID: '#loginScreen_TestPrintButton',
        retailNetWork: '#retailNetWorkId',
        employeeNumberId: '#employeeNumberIDTextField',
        employeeNumberRowId: '#employeeNumberID_Row',
        retailNetworkSelectionId: '#retail_DropDown_Row',
        longitude: '',
        latitude: '',
        // US5415
        flipStaffMemberYesNo: '#flipStaffMember',
        flipStaffMember_no: '#flipStaffMember_no',
        flipStaffMember_yes: '#flipStaffMember_yes',
        flipStaffMemberYesNo1: '#flipStaffMember1',              
        flipStaffMember_no1: '#flipStaffMember_no1',
        flipStaffMember_yes1: '#flipStaffMember_yes1',      
        otherStaffMemberTable: '#loginFieldsTable_OtherstaffMember',
        employeeNumberIdOtherStaffMember: '#employeeNumberIDOtherStaffMemnerTextField',
        employeeNumberRowIdOtherStaffMember: '#employeeNumberID_OtherStaffMember_Row',
        firstNameOtherStaffMember: '#firstNameOtherStaffMemberTextField',
        lastNameOtherStaffMember: '#lastNameOtherStaffMemberTextField',
        otheraStaffMemberToggleArea: '#OtherStaff_TitleAreaYesNO',
        // US5413
        signatureArea: '#signature_training_completion',
        signature: '#signatureOfStaffMember',
        signature_trainee: '#loginScreen_SingnatureContainer',
        resetSignature: '#signature_Reset_Button_login_Screen',

        // WICI-83 
        modeSliderComponent: '#mode_slider_area',
        modeSliderControl: '#mode_slider',
        appModeSliderSelection: '#app_mode',
        trainingModeSliderSelection: '#training_mode',
        modeSliderControl1: '#mode_slider_Fr',
        appModeSliderSelection1: '#app_mode1',
        trainingModeSliderSelection1: '#training_mode1',
        
    };

    var model = new WICI.BaseModel({
        name: 'loginScreen',
        refs: refs,
        data: [
            { name: 'employerID', value: null, validation: { type: 'format', message: '', matcher: /^[a-zA-Z0-9]{1}$/, group: [1] } },
            { name: 'retailNetWork', value: null, validation: { type: 'presence', message: 'RetailNetWork is not selected', group: [1], canBeEmpty: true } },
            { name: 'employeeNumberId', value: null, validation: { type: 'format', message: '', group: [1], matcher: /[1-9]{1,9}/, canBeEmpty: true } },
            { name: 'firstName', value: null, validation: { type: 'format', message: '', matcher: /^[a-zA-Z]{1,30}$/, group: [2] } },
            { name: 'lastName', value: null, validation: { type: 'format', message: '', matcher: /^[a-zA-Z]{1,30}$/, group: [2] } },
            { name: 'password', value: null, validation: null },
            { name: 'locationFieldID', value: null, validation: null },
            { name: 'locationFieldIDADM', value: null, validation: null },
            { name: 'businessStoreNo', value: null, validation: { type: 'presence', message: '', matcher: /^[a-zA-Z0-9]{1,5}$/, group: [1] } },
            { name: 'agentID', value: null, validation: { type: 'format', message: '', matcher: /^[a-zA-Z0-9]{1,8}$/, group: [1] } },
            { name: 'longitude', value: null, validation: null },
            { name: 'latitude', value: null, validation: null },
            { name: 'firstNameOtherStaffMember', value: null, validation: { type: 'format', message: '', matcher: /^[a-zA-Z]{1,30}$/, group: [2], canBeEmpty: true } },
            { name: 'lastNameOtherStaffMember', value: null, validation: { type: 'format', message: '', matcher: /^[a-zA-Z]{1,30}$/, group: [2], canBeEmpty: true } },
            { name: 'employeeNumberIdOtherStaffMember', value: null, validation: { type: 'format', message: '', group: [1], matcher: /[1-9]{1,9}/, canBeEmpty: true } },

            //{ name: 'signature_trainee', value: null, validation: {type: 'presence', message: '', group: [2]}},
            { notField: true, name: 'userLocationResponse', value: null, validation: null },
            // WIIC-83
            { notField: true, name: 'trainingModule', value: null, validation: null },

            { name: 'outletProvince', value: null, validation: null },
            { name: 'outletPostalcode', value: null, validation: null },
            { notField: true, name: 'rollId', value: null, validation: null },
            { notField: true, name: 'trainingModuleEffectiveDate', value: null, validation: null },
            { notField: true, name: 'enableEnstreamAuth', value: null, validation: null },
            { notField: true, name: 'printerMacAddress', value: null, validation: null },
            { notField: true, name: 'printerInRange', value: null, validation: null },
            { notField: true, name: 'userSingnature', value: null, validation: { type: 'presence', message: 'signatureScreen_validation_signature' } },
            { notField: true, name: 'userSingnatureNative', value: null, validation: null },
            { name: 'businessStoreNumber', value: null, validation: null },
            { name: 'isDebugMode', value: null, validation: null },
        ]
    });
    this.innerModel = model;
    // ---------------------------------------------------------------------------------------
    function init(argTranslator, argMessageDialog) {
        var sMethod = 'init() ';
        console.log(logPrefix + sMethod);

        translator = argTranslator;
        messageDialog = argMessageDialog;

        // Create app language instance
        if (translator) {
            app.language = new WICI.AppLanguage();
            app.language.init(translator);
        } else {
            console.log(logPrefix + ' ERROR: Translator is NULL');
        }

        // Create app version instance
        //app.apkVersionHelper = new WICI.AppAPKVersionHelper();
        //app.apkVersionHelper.init();

        connectivityController = new WICI.ConnectivityController(new WICI.ConnectionStatus(), messageDialog, translator, WICI.AppConfig.ConnectivityConfig);
        connectivityController.init();
        createView();
        createSlider();
        getLocation();
        bindEvents();
        setToggleLanguageSlider(translator.getCurrentLanguageFSDPFormat());
        setFrenchlogo();
        populateNetworkRetailList();
        createFlips();
        // WICI-83 
        createTrainingModuleFlip();
        $(refs.otherStaffMemberTable).hide();
        $(refs.otheraStaffMemberToggleArea).hide();
        $(refs.signatureArea).hide();
        //hideRetailNetWorkData();
        // WIIC-83
        showHideTrainingModuleSlider();
    }
    function createFlips() {
        var sMethod = 'createFlips() ';
        console.log(logPrefix + sMethod);
        $(refs.flipStaffMember_no).text(translator.translateKey("noEn"));
        $(refs.flipStaffMember_yes).text(translator.translateKey("yesEn"));
        $(refs.flipStaffMember_no1).text(translator.translateKey("noFr"));
        $(refs.flipStaffMember_yes1).text(translator.translateKey("yesFr"));
        
         if (translator.currentLanguageEnglish()){
        $(refs.flipStaffMember_no).closest('td').removeClass('hidden');
        $(refs.flipStaffMember_yes1).closest('td').addClass('hidden');
 
         }else{
        $(refs.flipStaffMember_no1).closest('td').removeClass('hidden');
        $(refs.flipStaffMember_yes).closest('td').addClass('hidden');
         }
         $(refs.flipStaffMemberYesNo).slider();
         $(refs.flipStaffMemberYesNo1).slider();
    }
    //-----WICI-83-----------------------------------------------------------------------
    function createTrainingModuleFlip() {
        var sMethod = 'createModuleFlips() ';
        console.log(logPrefix + sMethod);
        
        $(refs.appModeSliderSelection).text(translator.translateKey("loginScreen_AppModule"));
        $(refs.trainingModeSliderSelection).text(translator.translateKey("loginScreen_TrainingModule"));
        $(refs.appModeSliderSelection1).text(translator.translateKey("loginScreen_AppModule1"));
        $(refs.trainingModeSliderSelection1).text(translator.translateKey("loginScreen_TrainingModule1"));
        
         if (translator.currentLanguageEnglish()){
          $(refs.appModeSliderSelection).closest('div').removeClass('hidden');
          $(refs.appModeSliderSelection1).closest('div').addClass('hidden');
         }else{
	       $(refs.appModeSliderSelection).closest('div').addClass('hidden');
	       $(refs.appModeSliderSelection1).closest('div').removeClass('hidden');
         }
         $(refs.modeSliderControl).slider();
         $(refs.modeSliderControl1).slider();
    
    }
    function isTrainingModule() {
        if ( $(refs.employerID).val().toUpperCase() == 'E') {
            isTrainingSliderShowing = true;
            return isTrainingSliderShowing;
        } else {
            isTrainingSliderShowing = false;
            return isTrainingSliderShowing;
        }
        
    }
    //-----------------------------------------------------------------------------    
    function showAndHideOtherStaffMember() {
        var sMethod = 'showAndHideOtherStaffMember() ';
        console.log(logPrefix + sMethod);
        var employerId = $(refs.employerID).val().toUpperCase();
        console.log(logPrefix + sMethod + "employerId :: " + employerId);

        $(refs.flipStaffMemberYesNo).change(function () {
            if ("Y" == $(this).val()) {
                $(refs.otherStaffMemberTable).show();
            } else {
                $(refs.otherStaffMemberTable).hide();
            }
        });
         $(refs.flipStaffMemberYesNo1).change(function () {
            if ("Y" == $(this).val()) {
                $(refs.otherStaffMemberTable).show();
            } else {
                $(refs.otherStaffMemberTable).hide();
            }
        });
    }

  function otherStaffMemberLangToggle(){
	  var sMethod = 'otherStaffMemberLangToggle()';
            if ("Y" == flipValue) {
                model.set('flipStaffYesNo', flipValue);
                validateOtherStaff = true;
                console.log(logPrefix + sMethod + "validateOtherStaff :: " + validateOtherStaff);
                console.log(logPrefix + sMethod + "flipValue ::  YES ::" + flipValue);
                $(refs.otherStaffMemberTable).show();

                if ($.inArray($(refs.retailNetWork).val(), ["MARKS", "SPORTS"]) != '-1') {
                    $.each(model.data, function (index, item) {
                        if (item.name == "employeeNumberIdOtherStaffMember") {
                            item.validation.canBeEmpty = false;
                            $(refs.employeeNumberIdOtherStaffMember).val(model.get('tempEmpNumberID'));
                        }
                    });
                }
                $.each(model.data, function (index, item) {
                    console.log(" for all retailNetWork :: Flipstaff is enable and showing :: ");
                    if (item.name == "firstNameOtherStaffMember") {
                        item.validation.canBeEmpty = false;
                        $(refs.firstNameOtherStaffMember).val('');
                    }
                    if (item.name == "lastNameOtherStaffMember") {
                        item.validation.canBeEmpty = false;
                        $(refs.lastNameOtherStaffMember).val('');
                    }
                });

            } else {
                model.set('flipStaffYesNo', flipValue);
                validateOtherStaff = false;
                console.log(logPrefix + sMethod + "validateOtherStaff :: " + validateOtherStaff);
                console.log(logPrefix + sMethod + "flipValue :: NO :: " + flipValue);
                $(refs.otherStaffMemberTable).hide();

                if ($.inArray($(refs.retailNetWork).val(), ["MARKS", "SPORTS"]) != '-1') {
                    $.each(model.data, function (index, item) {
                        if (item.name == "employeeNumberIdOtherStaffMember") {
                            item.validation.canBeEmpty = true;
                            // $(refs.employeeNumberIdOtherStaffMember).val(model.get('tempEmpNumberID'));
                        }
                    });
                }
                $.each(model.data, function (index, item) {
                    console.log(" for all retailNetWork :: Flipstaff is enable and showing :: ");
                    if (item.name == "firstNameOtherStaffMember") {
                        item.validation.canBeEmpty = true;
                        $(refs.firstNameOtherStaffMember).val('');
                    }
                    if (item.name == "lastNameOtherStaffMember") {
                        item.validation.canBeEmpty = true;
                        $(refs.lastNameOtherStaffMember).val('');
                    }


                });
            }
}


    function bindRadioHandlingControls() {
       var sMethod = 'bindRadioHandlingControls() ';
        console.log(logPrefix + sMethod);
        // console.log(logPrefix + sMethod + "validateOtherStaff :: " + validateOtherStaff);
        //var flipValue = $(refs.flipStaffMemberYesNo + ' ' + 'option:selected').val();
        var employerId = $(refs.employerID).val().toUpperCase();
        $(refs.flipStaffMemberYesNo).change(function () {
	    flipValue = $(refs.flipStaffMemberYesNo + ' ' + 'option:selected').val();
	         if ("N" == flipValue){
		        $(refs.flipStaffMember_yes1).removeAttr("selected");
	        	$(refs.flipStaffMember_no1).prop("selected",true);
	            $(refs.flipStaffMemberYesNo1).slider().slider("refresh");
	            validateOtherStaff = false;
	         }else{
		        $(refs.flipStaffMember_no1).removeAttr("selected");
	            $(refs.flipStaffMember_yes1).prop("selected",true);
	            $(refs.flipStaffMemberYesNo1).slider().slider("refresh");
	            }
               otherStaffMemberLangToggle();
          
        });
        $(refs.flipStaffMemberYesNo1).change(function () {
	    flipValue = $(refs.flipStaffMemberYesNo1 + ' ' + 'option:selected').val();
            if ("N" == flipValue){
	            $(refs.flipStaffMember_yes).removeAttr("selected");
	        	$(refs.flipStaffMember_no).prop("selected",true);
	            $(refs.flipStaffMemberYesNo).slider().slider("refresh");
	            validateOtherStaff = false;
	         }else{
		        $(refs.flipStaffMember_no).removeAttr("selected");
	            $(refs.flipStaffMember_yes).prop("selected",true);
	            $(refs.flipStaffMemberYesNo).slider().slider("refresh");
	            }
	      
               otherStaffMemberLangToggle();
          
        });
        
    }

    function setFrenchlogo() {
        if (!translator.currentLanguageEnglish()) {
            //translator.changeLogoToFrench();
            app.translationExtender.changeLogoToFrench();
        }
    }
    //US5413
    //---------------------------------------------------------------------------------------
    function createSignatureControl() {
        if (!signatureControl) {
            // Restore signature
            //        	fixSignatureWidth();
            if (model.get('userSingnatureNative')) {
                // Create signature object
                signatureControl = $(refs.signature).jSignature({ 'signatureLine': true });
                // Restore signature content
                $(refs.signature).jSignature("setData", model.get('userSingnatureNative'), 'native');
                // Apply some dependencies
                onSignatureChaged();
            } else {
                signatureControl = $(refs.signature).jSignature();
            }

            $(refs.signature).bind('change', onSignatureChaged);
        }
    }
    //---------------------------------------------------------------------------------------
    function onSignatureChaged(e) {
        var sMethod = 'onSignatureChaged() ';
        console.log(logPrefix + sMethod);

        if ($(refs.signature).jSignature('getData', 'native').length > 0) {
            $(refs.resetSignature).removeClass('grayflat');
            $(refs.resetSignature).addClass('blackflat');
            $(refs.resetSignature).bind('click', onResetSignature1Clicked);

        }
        model.set('userSingnatureNative', $(refs.signature).jSignature('getData', 'native'));
        if (isTrainingModule() && isTrainingModuleFlag) {
            validateTrainingModuleFields();
        }
    }
    //---------------------------------------------------------------------------------------
    function onResetSignature1Clicked() {
        var sMethod = 'onResetSignatureClicked() ';
        console.log(logPrefix + sMethod);

        // Clear canvas
        $(refs.signature).jSignature('reset');
        $(refs.resetSignature).removeClass('darkgrayflat');
        $(refs.resetSignature).addClass('grayflat');
        $(refs.resetSignature).unbind('click', onResetSignature1Clicked);
    }
    // ---------------------------------------------------------------------------------------
    function syncUserData() {
        var sMethod = 'syncUserData() ';
        console.log(logPrefix + sMethod);
        model.set('employerID', $(refs.employerID).val().toUpperCase());
        //model.set('userID', $(refs.userID).val());
        model.set('agentID', $(refs.agentID).val().toLowerCase());
        //model.set('passwordFieldID', $(refs.passwordFieldID).val());
        model.set('locationFieldID', $(refs.businessStoreNo).val().toUpperCase());
        model.set('businessStoreNo', $(refs.businessStoreNo).val().toUpperCase());
        model.set('retailNetWork', $(refs.retailNetWork).val());
        model.set('employeeNumberId', $(refs.employeeNumberId).val());
        model.set('password', $(refs.password).val().toUpperCase());
        if(isTrainingModule() && isTrainingModuleFlag){
              validateOtherStaff = false;  
               $.each(model.data, function (index, item) {
                    console.log(" for all retailNetWork :: Flipstaff is enable and showing :: ");
                    if (item.name == "firstNameOtherStaffMember") {
                        item.validation.canBeEmpty = true;
                        $(refs.firstNameOtherStaffMember).val('');
                    }
                    if (item.name == "lastNameOtherStaffMember") {
                        item.validation.canBeEmpty = true;
                        $(refs.lastNameOtherStaffMember).val('');
                    }
                    if (item.name == "employeeNumberIdOtherStaffMember") {
                            item.validation.canBeEmpty = true;
                    }
                   
                });
              
         }  
        if (translator.currentLanguageEnglish()){
	       model.set('flipStaffYesNo', $(refs.flipStaffMemberYesNo + ' ' + 'option:selected').val());
	     }else{
		   model.set('flipStaffYesNo', $(refs.flipStaffMemberYesNo1 + ' ' + 'option:selected').val());
	       } 

        if (validateNameFields) {
            model.set('firstName', $(refs.firstName).val().toLowerCase());
            model.set('lastName', $(refs.lastName).val().toLowerCase());

            model.set('signature_trainee', $(refs.signature).jSignature('getData', 'native').length > 0 ? 'data:' + $(refs.signature).jSignature('getData', 'image').join(',') : null);
            model.set('userSingnature', $(refs.signature).jSignature('getData', 'native').length > 0 ? 'data:' + $(refs.signature).jSignature('getData', 'image').join(',') : null);
            model.set('userSingnatureNative', $(refs.signature).jSignature('getData', 'native'));
        }
        console.log(logPrefix + sMethod + "validateOtherStaff :: " + validateOtherStaff);
        if (validateOtherStaff) {
            model.set('firstNameOtherStaffMember', $(refs.firstNameOtherStaffMember).val().toLowerCase());
            model.set('lastNameOtherStaffMember', $(refs.lastNameOtherStaffMember).val().toLowerCase());
            model.set('employeeNumberIdOtherStaffMember', $(refs.employeeNumberIdOtherStaffMember).val().toLowerCase());
        }
        // WIIC-83 
        if (isTrainingModuleFlag == true) {
            model.set('trainingModule', 'TRAINING');
        } else {
            model.set('trainingModule', 'APP');
        }
        console.log(logPrefix + sMethod + ' model data: \n' + model.toString());
    }

    function show() {
        $screenContainer.show();

        //      // Create app language instance
        //      app.language = new WICI.AppLanguage();
        //      app.language.init(translator);

        translator.run("WICILoginScreen");
    }

    function hide() {
        $screenContainer.hide();
    }

    function createView() {
        $screenContainer.empty();

        assembleTitleHTML($screenContainer, "#WICILoginScreen-template");

        //        $(refs.businessStoreNo).autoNumeric('init', {
        //            aSign: '',
        //            vMin: '0',
        //            vMax: '9999',
        //            mDec: '0',
        //            aSep: ''
        //        });

        $(refs.employeeNumberId).autoNumeric('init', {
            aSep: '',
            aDec: ',',
            vMax: '999999999',
            vMin: '0',
            lZero: 'keep'
        });
        showHideTrainingButton();
        showHideLoginButton();
    }

    function createSlider() {
        $(refs.language_choser).slider();
    }

    function setToggleLanguageSlider(language) {
        console.log('setToggleLanguageSlider : ' + language);
        $(refs.language_choser).val(language);
        createFlips();
        $(refs.language_choser).slider("refresh");
        if (validateOtherStaff) {
            $(refs.flipStaffMemberYesNo).slider("refresh");
        }
        // WICI-83 
        //createTrainingModuleFlip();
    }

    function assembleTitleHTML($element, templateName) {
        var html = $(templateName).tmpl();
        $element.prepend(html);
    }

    function bindEvents() {
        var sMethod = 'bindEvents() ';
        console.log(logPrefix + sMethod);
        bindRadioHandlingControls();
        // WICI-83 
         createFlips();
         createTrainingModuleFlip();
        $(refs.modeSliderControl).change(function () {
            var sliderValue = $(refs.modeSliderControl + ' ' + 'option:selected').val();
            if (sliderValue == "APP") {
                // show as login button 
                isTrainingModuleFlag = false;
                model.set('trainingModule', 'APP');
                $(refs.otheraStaffMemberToggleArea).show();
                $(refs.appModeSliderSelection1).attr("selected","selected");
	            $(refs.trainingModeSliderSelection1).removeAttr("selected");
	            $(refs.modeSliderControl1).slider().slider("refresh");
                //$(refs.otherStaffMemberTable).show();
                //${refs.otheraStaffMemberToggleArea).show();
    
            }
            if (sliderValue == "TRAINING") {
                // show as training button 
                isTrainingModuleFlag = true;
                validateOtherStaff = false;
                 $(refs.otheraStaffMemberToggleArea).hide();
                 $(refs.appModeSliderSelection1).removeAttr("selected");
	             $(refs.trainingModeSliderSelection1).attr("selected","selected");
	             $(refs.modeSliderControl1).slider().slider("refresh");
                 model.set('trainingModule', 'TRAINING');
                 $(refs.otherStaffMemberTable).hide();
                $(refs.flipStaffMember_yes1).removeAttr("selected");
	        	$(refs.flipStaffMember_no1).prop("selected",true);
	            $(refs.flipStaffMemberYesNo1).slider().slider("refresh");
				$(refs.flipStaffMember_yes).removeAttr("selected");
	        	$(refs.flipStaffMember_no).prop("selected",true);
	            $(refs.flipStaffMemberYesNo).slider().slider("refresh");  
                  
                             
            }/* else {
                //Default value is 
                isTrainingModuleFlag = false;
                model.set('trainingModule', 'APP');
                $(refs.otherStaffMemberTable).hide();
                $(refs.otheraStaffMemberToggleArea).hide();
            }*/
            showHideTrainingButton();
            showHideLoginButton();
            validateTrainingModuleFields();
           
        });
        
        $(refs.modeSliderControl1).change(function () {
            var sliderValue = $(refs.modeSliderControl1 + ' ' + 'option:selected').val();
            if (sliderValue == "APP") {
                // show as login button 
                isTrainingModuleFlag = false;
                $(refs.otheraStaffMemberToggleArea).show();
                model.set('trainingModule', 'APP');
                $(refs.appModeSliderSelection).attr("selected","selected");
	            $(refs.trainingModeSliderSelection).removeAttr("selected");
	            $(refs.modeSliderControl).slider().slider("refresh");
                //$(refs.otherStaffMemberTable).show();
                //${refs.otheraStaffMemberToggleArea).show();
                              
            }
            if (sliderValue == "TRAINING") {
                // show as training button 
                isTrainingModuleFlag = true;
                validateOtherStaff = false;
                model.set('trainingModule', 'TRAINING');
                 $(refs.otherStaffMemberTable).hide();
                 $(refs.otheraStaffMemberToggleArea).hide();
                 $(refs.appModeSliderSelection).removeAttr("selected");
	             $(refs.trainingModeSliderSelection).attr("selected","selected");
	             $(refs.modeSliderControl).slider().slider("refresh");
                 $(refs.otheraStaffMemberToggleArea).removeAttr("selected");
		        $(refs.flipStaffMember_yes1).removeAttr("selected");
	        	$(refs.flipStaffMember_no1).prop("selected",true);
	            $(refs.flipStaffMemberYesNo1).slider().slider("refresh");
				$(refs.flipStaffMember_yes).removeAttr("selected");
	        	$(refs.flipStaffMember_no).prop("selected",true);
	            $(refs.flipStaffMemberYesNo).slider().slider("refresh");                 
                
            }/* else {
                //Default value is 
                isTrainingModuleFlag = false;
                model.set('trainingModule', 'APP');
                $(refs.otherStaffMemberTable).hide();
                $(refs.otheraStaffMemberToggleArea).hide();
            }*/
            showHideTrainingButton();
            showHideLoginButton();
            validateTrainingModuleFields();
            
        });
        
        // showAndHideOtherStaffMember();
        $(refs.loginButtonID).click(function () {
            //VZE-442 & VZE-553
            if (app.deviceInfoHelper.getDeviceInfo().MfgSerial == "UNKNOWN" ||
                app.deviceInfoHelper.getDeviceInfo().MfgSerial == "SCOOBY") {
                messageDialog.printerError(translator.translateKey("loginScreen_Device_serial_number_error_message"), translator.translateKey("loginScreen_Device_serial_number_message"), translator.translateKey("loginScreen_Device_serial_number_error_title"), $.noop);
            }
            // VZE-442
            generateAgentId();
            //handleLoginOrAttestation();
            testPrint();
            //syncUserData();
            //invokeLogin($(refs.employerID).val().toUpperCase(), $(refs.agentID).val(), "", $(refs.password).val().toUpperCase(), $(refs.businessStoreNo).val().toUpperCase(), $(refs.firstName).val(), $(refs.lastName).val(), app.apkVersionHelper.getAPKVersion(), handleSuccessfulLoginRequest, failedLogin);            
        });
        $(refs.trainingButtonID).click(function () {
        	if($(refs.employerID).val().toUpperCase()==="" || $(refs.employerID).val().toUpperCase()===null){
       		    $(refs.employerID).addClass('errorField');
            	app.validationDecorator.focusControl(refs.employerID); 
            	showGrayTrainingButton();
            	return;
       	     }else{
       	    	generateAgentId();
                syncUserData();
                creditCardData = new WICI.CreditCardApplicationData();
                creditCardData.addModel(model);
                hide();
                app.flowController = new WICI.TrainingFlow(creditCardData, translator, messageDialog);
                app.flowController.start();
       	     }
        });

        $(refs.testPrintButtonID).click(new WICI.TestPrintHelper(translator, messageDialog).testPrint);

        $(refs.CTFSLogo).on('taphold', showVersions);
        /*Added by DPS**********************/

        $(refs.language_choser).on("change", function () {
            translator.toggleLanguage(true);
            app.language.setLanguage(translator.getCurrentLanguageFSDPFormat());
            createTrainingModuleFlip();
            createFlips();
            populateNetworkRetailList();
            // WICI-83 
           // createTrainingModuleFlip();

            if (validateOtherStaff) {
                $(refs.flipStaffMemberYesNo).slider("refresh");
            }         
        });
          $.subscribe('translatorFinished', function () {
            populateNetworkRetailList();
        });
        /****************************/
        $(refs.retailNetWork).change(function () {
            console.log("Handler for .change() called." + $(refs.retailNetWork).val());

            if ($(refs.employerID).val().toUpperCase() == 'E') {
                employeeNumberFieldHandler();
                // WICI-83
                showHideTrainingModuleSlider();
                validateTrainingModuleFields();
            }

        });

        /****************************/

        // listen to the EmployerId blur
        $(refs.employerID).on('input', employerIdChanged);
        // listen to the AgentId change       
        $(refs.agentID).on('input', hidePasswordForDEMOMODE);

        $(refs.businessStoreNo).keyup(function() {
	      clearTimeout(timeout);
       	  timeout = setTimeout( function(){
		     if(isTrainingModule() && isTrainingModuleFlag){
        	      validateTrainingModuleFields();
               }          
        	},3000)                  
        });
        
        $(refs.firstName).keyup(function() {
	      clearTimeout(timeout);
	      timeout = setTimeout( function(){
		       if(isTrainingModule() && isTrainingModuleFlag){
                 validateTrainingModuleFields();
                }          
	         },5000)
        });
        
        $(refs.lastName).keyup(function() {
	        clearTimeout(timeout);
			timeout = setTimeout( function(){ 
		      if(isTrainingModule() && isTrainingModuleFlag){
        	  validateTrainingModuleFields();
               }          
	        },2000)        
       });
        
        $(refs.employeeNumberId).keyup(function() {
	        clearTimeout(timeout);
         	timeout =  setTimeout( function(){
  		    if(isTrainingModule() && isTrainingModuleFlag){
          	    validateTrainingModuleFields();
              }          
  	      },1000)              
         });
    }

    function employeeNumberFieldHandler() {
        //VZE-522
        if ($.inArray($(refs.retailNetWork).val(), ["MARKS", "SPORTS", "PHL"]) != '-1') {
            $(refs.employeeNumberRowId).show();
            $(refs.employeeNumberRowIdOtherStaffMember).show();
            $.each(model.data, function (index, item) {
                if (item.name == "employeeNumberId") {
                    item.validation.canBeEmpty = false;
                    $(refs.employeeNumberId).val(model.get('tempEmpNumberID'));
                }
                if (validateOtherStaff) {
                    console.log("[ \"MARKS\", \"SPORTS\",\"PHL\"] for all retailNetWork :: Flipstaff is enable and showing :: ");
                    if (item.name == "employeeNumberIdOtherStaffMember") {
                        item.validation.canBeEmpty = false;
                        $(refs.employeeNumberIdOtherStaffMember).val(model.get('tempEmpNumberID'));
                    }
                    if (item.name == "firstNameOtherStaffMember") {
                        item.validation.canBeEmpty = false;
                        $(refs.firstNameOtherStaffMember).val('');
                    }
                    if (item.name == "lastNameOtherStaffMember") {
                        item.validation.canBeEmpty = false;
                        $(refs.lastNameOtherStaffMember).val('');
                    }
                } else {
                    if (item.name == "employeeNumberIdOtherStaffMember") {
                        item.validation.canBeEmpty = true;
                    }
                }
                // US5054 WICI - Expand employee number field to 9 characters
                // Expand Employee Number field to 9 characters for Marks + FGL employee apps
                if (item.name == "agentID") {
                    item.validation.matcher = /^[a-zA-Z0-9]{1,9}$/;
                }
            });
        } else {
            $.each(model.data, function (index, item) {
                if (validateOtherStaff) {
                    console.log("[ \"MARKS\", \"SPORTS\"] for all retailNetWork :: Flipstaff is enable and showing :: ");
                    if (item.name == "employeeNumberIdOtherStaffMember") {
                        item.validation.canBeEmpty = true;
                        $(refs.employeeNumberIdOtherStaffMember).val(model.get('tempEmpNumberID'));
                    }

                } else {
                    if (item.name == "employeeNumberIdOtherStaffMember") {
                        item.validation.canBeEmpty = true;
                    }
                }
                // US5054 WICI - Expand employee number field to 9 characters
                // Expand Employee Number field to 9 characters for Marks + FGL employee apps
                if (item.name == "agentID") {
                    item.validation.matcher = /^[a-zA-Z0-9]{1,9}$/;
                }
            });
            $(refs.employeeNumberId).val('');
            $(refs.employeeNumberIdOtherStaffMember).val('');
            $(refs.employeeNumberRowId).hide();
            $(refs.employeeNumberRowIdOtherStaffMember).hide();
            employeeNumberIdValidation();

        }
        retailNetWorkSelectionValidation();
    }

    function generateAgentId() {
        var agentId = {},
            employerId = $(refs.employerID).val().toUpperCase();

        if (employerId === 'E') {
            agentId.firstName = getFirstFourChars($(refs.firstName).val());
            agentId.lastName = getFirstFourChars($(refs.lastName).val());

            if (agentId.firstName && agentId.lastName) {
                agentId = agentId.firstName + agentId.lastName;

                $(refs.agentID).val(agentId);
            }
            if ($(refs.employeeNumberId).val().length > 0) {
                $(refs.agentID).val($(refs.employeeNumberId).val());
            }
        }
    }

    function getFirstFourChars(string) {
        return string.length > 0 && string.slice(0, 4);
    }

    function employerIdChanged(e) {
    	//populateNetworkRetailList();
        switch (e.target.value.toUpperCase()) {
            case 'E':
                $(refs.employeeNumberRowId).show();
                $(refs.employeeNumberId).val('');
                if(isTrainingModule() && isTrainingModuleFlag){
                	$(refs.otheraStaffMemberToggleArea).hide();
                }else{
                	$(refs.otheraStaffMemberToggleArea).show();
                }
                model.set('flipStaffYesNo', 'N');
                $(refs.flipStaffMemberYesNo).val('N');
                $(refs.flipStaffMemberYesNo1).val('N');
                //$(refs.signatureArea).show();
                changeFormForEmployer();
                validateNameFields = true;
                createSignatureControl();
                employeeNumberFieldHandler();
                $(refs.modeSliderComponent).show();
                validateTrainingModuleFields();
                createTrainingModuleFlip();
                break;
            default:
                $(refs.employeeNumberId).val('');
                $(refs.employeeNumberRowId).hide();
                employeeNumberIdValidation();
                $(refs.otheraStaffMemberToggleArea).hide();
                $(refs.otherStaffMemberTable).hide();
                $(refs.signatureArea).hide();
                createTrainingModuleFlip();
                $(refs.flipStaffMemberYesNo).val('N');
                $(refs.flipStaffMemberYesNo1).val('N');
                model.set('flipStaffYesNo', 'N');
                $(refs.modeSliderComponent).hide();
                resetForm();
                validateNameFields = false;
        }
    }

    function resetForm() {
        //hideRetailNetWorkData();
        employeeNumberIdValidation();
        $(refs.retailNetWork).val(null);
        retailNetWorkSelectionValidation();
        var firstNameRow = $(refs.firstName).closest('tr'),
            lastNameRow = $(refs.lastName).closest('tr'),
            agentIdRow = $(refs.agentID).closest('tr'),
            passwordRow = $(refs.password).closest('tr');

        if (agentIdRow.hasClass('hidden')) {
            $(refs.agentID).closest('tr').removeClass('hidden');
        }
        if (passwordRow.hasClass('hidden')) {
            $(refs.password).closest('tr').removeClass('hidden');
        }

        if (!firstNameRow.hasClass('hidden')) {
            firstNameRow.addClass('hidden');
        }

        if (!lastNameRow.hasClass('hidden')) {
            lastNameRow.addClass('hidden');
        }

        if ($(refs.agentID).val().toUpperCase() === "DEMO") {
            $(refs.password).closest('tr').addClass('hidden');
        } else {
            $(refs.password).closest('tr').removeClass('hidden');
        }

    }

    function hidePasswordForDEMOMODE() {
        var sMethod = 'hidePasswordForDEMOMODE';
        console.log(logPrefix + sMethod);

        if ($(refs.agentID).val().toUpperCase() === "DEMO") {
            $.each(model.data, function (index, item) {
                if (item.name == "employeeNumberId") {
                    item.validation.canBeEmpty = true;
                }
            });
            $(refs.password).closest('tr').addClass('hidden');
            $(refs.employeeNumberRowId).hide();
        } else {
            $(refs.password).closest('tr').removeClass('hidden');
        }
    }

    function changeFormForEmployer() {

        $(refs.retailNetworkSelectionId).show();
        //(refs.employeeNumberRowId).show();
        $(refs.agentID).closest('tr').addClass('hidden');
        $(refs.password).closest('tr').addClass('hidden');
        //showNameFields
        $(refs.firstName).closest('tr').removeClass('hidden');
        $(refs.lastName).closest('tr').removeClass('hidden');
        retailNetWorkSelectionValidation();
    }



    function showVersions() {
        var constructedMessage = "WebApp Version = " + WICI.version + "<br>";
        constructedMessage += "APK Version = " + app.apkVersionHelper.getAPKVersion() + "<br>";
        constructedMessage += "Device Info = { MfgSerial : " + app.deviceInfoHelper.getDeviceInfo().MfgSerial + ", BuildSerial : " + app.deviceInfoHelper.getDeviceInfo().BuildSerial + " } <br>";
        constructedMessage += "Physical Server = " + WICI.physicalserverURL + "<br>";
        constructedMessage += "Middleware = " + WICI.middlewareName + "<br>";
        constructedMessage += "Web Application = " + WICI.thisWebappName + "<br>";
        constructedMessage += "Dictionary Version = " + WICI.LocalStorageHelper(window).getVersion("unversioned") + "<br>";

        messageDialog.info(constructedMessage, "Versions Information", $.noop);
        console.log(constructedMessage);
    }


    // ---------------------------------------------------------------------------------------

    function invokeLogin(argRetailNetwork, argEmployerID, argAgentID, user, password, locationID, argFirstName, argLastName, apkVersion, argSuccessCB, argFailureCB) {
        var sMethod = 'invokeLogin() ';
        console.log(logPrefix + sMethod);

        function checkDemoCredentials(curCredentials, account) {
            for (var prop in curCredentials) if (curCredentials.hasOwnProperty(prop)) {
                if (curCredentials[prop] && account[prop]) {
                    if (account[prop] instanceof Array) {
                        if (account[prop].indexOf(curCredentials[prop]) === -1) {
                            return false;
                        }
                    } else {
                        if (curCredentials[prop].toLowerCase() !== account[prop].toLowerCase()) {
                            return false;
                        }
                    }
                }
            }
            return true;
        }

        function checkDemoMode(curCredentials, demoCredentials) {
            var rez;
            for (var account in demoCredentials) if (demoCredentials.hasOwnProperty(account)) {
                rez = true;
                rez = checkDemoCredentials(curCredentials, demoCredentials[account]);
                if (rez) {
                    return true;
                }
            }
            return false;
        }

        var credentials = {
            employerID: argEmployerID,
            agentID: argAgentID,
            firstName: argFirstName,
            lastName: argLastName,
            password: password
        };

        var isDemoMode = checkDemoMode(credentials, WICI.AppConfig.DemoCredentials);
        app.setDemoMode(isDemoMode);

        var isBypassMode = checkDemoCredentials(credentials, WICI.AppConfig.DemoCredentials.admin);
        if (isBypassMode) {
            //console.log(logPrefix + sMethod   + " WARNING! BYPASS CODE IS USED!!!");
            model.set('userID', 'epamfmr');
            model.set('passwordFieldID', 'epamfmr');

            new WICI.LoadingIndicatorController().show();
            handleLookupYes();
            checkForPrintSetupWarning();
            return;
        }

        if (!connectivityController.Login) {
            failedLogin();
            return;
        }

        new WICI.LoadingIndicatorController().show();

        if (apkVersion == null || apkVersion === undefined) {
            messageDialog.error(translator.translateKey("incorrect_Apk_Version_Dialog"), translator.translateKey("errorDialog_defaultTitle"), navigator.app.exitApp);
        }

        connectivityController.Login(argRetailNetwork, argEmployerID, argAgentID, user, password, locationID, apkVersion, argSuccessCB, argFailureCB);

        if (WICI.AppConfig.BluetoothConfig.TOGGLEBT_AT_LOGIN === true) {
            WICI.BluetothHelper.toggle();
        }
    }

    // ---------------------------------------------------------------------------------------
    function invokeCheckTrainingAttestation(argStoreLocationNumber, argFirstName, argLastName,argSuccessCallback, argFailureCallback) {
   	 var sMethod = 'invokeCheckTrainingAttestation() ';
        console.log(logPrefix + sMethod);
        connectivityController.CheckTrainingAttestation(argStoreLocationNumber, argFirstName, argLastName,argSuccessCallback, argFailureCallback);
    }

    // ---------------------------------------------------------------------------------------    
    function handleSuccessfulCheckAttestTrainingRequest(argResponse) {
        var sMethod = 'handleSuccessfulCheckAttestTrainingRequest() ';
        console.log(logPrefix + sMethod);
        if(!argResponse.error) {
        	try {
				model.set('checkAttestationFlag', true);
				checkAttestTrainingResponse = argResponse;
				attestTrainingSignature = JSON.stringify(argResponse.data.signature);
			    attestTrainingDate = JSON.stringify(argResponse.data.attetationDate);
			    console.log(logPrefix + sMethod + " attestTrainingSignature  : " + attestTrainingSignature);
			    console.log(logPrefix + sMethod + " attestTrainingDate : " + attestTrainingDate);
			    if((attestTrainingSignature != "" || attestTrainingSignature != null ) && (attestTrainingDate != "" || attestTrainingDate != null) ){
			    	// continue as normal app 
			    	//showNextScreen();
                    new WICI.LoadingIndicatorController().hide();
                    console.log(logPrefix+sMethod+ ": continue normal login process here...");
                    continueLoginProcess(self.loginResponseObject);
			    }else{
			    	messageDialog.printerError(translator.translateKey("loginScreen_AttestionFailedMessage"),"",translator.translateKey("loginScreen_Device_serial_number_error_title"), $.noop);
			    	return;
			    }
				console.log(logPrefix + sMethod + " : " + JSON.stringify(checkAttestTrainingResponse));
        	} catch (e) {
        		console.log(logPrefix + sMethod + "Exception : " + e);
        	}
        } else {
        	new WICI.LoadingIndicatorController().hide();
			model.set('checkAttestationFlag', false);
			messageDialog.printerError(translator.translateKey("loginScreen_AttestionFailedMessage"),"",translator.translateKey("loginScreen_AttestionFailedMessage_DialogTitle"), $.noop);
			return;
		}    	
    }

    // ---------------------------------------------------------------------------------------
    function failedCheckAttestTraining(argResponse) {
        var sMethod = 'failedCheckAttestTraining() ';
        console.log(logPrefix + sMethod + ": " + argResponse);
        new WICI.LoadingIndicatorController().hide();
    }

    function continueLoginProcess(argResponse){
        var sMethod = 'failedCheckAttestTraining() ';
        console.log(logPrefix + sMethod+"Continue Login...");

        var loginHelper = new WICI.LoginResponseHelper();
        loginHelper.setLoginResponseObject(argResponse);

        if (argResponse.data.isDebugMode != null) {
            model.set('isDebugMode', argResponse.data.isDebugMode);
        }
        //userLocationResponse = argResponse.data.checkLocation;
        // Save account profile info
        console.log("WICI Login Response  ::" + JSON.stringify(argResponse.data));
        if (argResponse.data.roleId != null) {
            model.set('rollId', argResponse.data.roleId);
        }
        console.log("WICI Login Response RollID ::" + model.get('rollId'));
        if (argResponse.data.enableEnstreamAuth != null) {
            model.set('enableEnstreamAuth', argResponse.data.enableEnstreamAuth);
        }
        if (app.getDemoMode()) {
            model.set('locationFieldID', $(refs.businessStoreNo).val().toUpperCase());
        } else {
            console.log("WICI Login Response CTFSStoreNo ::" + model.get('CTFSStoreNo'));
            if (argResponse.data.checkLocation && argResponse.data.checkLocation) {
                model.set('businessStoreNumber', argResponse.data.checkLocation.businessStoreNumber);
                if (argResponse.data.checkLocation.CTFSStoreNo) {
                    model.set('locationFieldIDADM', argResponse.data.checkLocation.CTFSStoreNo);
                    console.log("WICI Login Response locationFieldIDADM ::" + model.get('locationFieldIDADM'));
                } else {
                    model.set('locationFieldIDADM', $(refs.businessStoreNo).val().toUpperCase());
                    console.log("WICI Login Response locationFieldIDADM ::" + model.get('locationFieldIDADM'));
                }
            } else {
                model.set('locationFieldIDADM', $(refs.businessStoreNo).val().toUpperCase());
            }
        }

        console.log("WICI Login Response enableEnstreamAuth ::" + model.get('enableEnstreamAuth'));
        console.log("WICI Login Response isDebugMode ::" + model.get('isDebugMode'));
        app.accountProfileHelper.initialize(argResponse.data.roles, argResponse.data.roleId);

        //Consider this the regular login process
        if (loginHelper.loginSuccessful()) {
            if (!app.getDemoMode()) {
                if (loginHelper.getMsg() === "Your login details are currently in use") {
                    messageDialog.error(
                        translator.translateKey("loginScreen_Login_Details_In_Use"),
                        translator.translateKey("errorDialog_defaultTitle"),
                        null);
                    new WICI.LoadingIndicatorController().hide();
                } else {
                    if (loginHelper.getPendRetrievalConfig())
                        WICI.AppConfig.PendingFeature.MaxRetrievalsForApproved = loginHelper.getPendRetrievalConfig().MaxRetrievalsForApproved;

                    console.log(logPrefix + sMethod + "-WICI.AppConfig.PendingFeature.MaxRetrievalsForApproved=" + WICI.AppConfig.PendingFeature.MaxRetrievalsForApproved);

                    $.when.apply(null, retrieveLatestDictionary(argResponse)).always(function () {
                        respondToUserLocationLookup(argResponse);
                    });
                }
            } else {
                respondToUserLocationLookup(argResponse);
            }

        } else if (loginHelper.incorrectApkVersion() && navigator.app) {
            //actual version of apk is incorrect
            messageDialog.error(translator.translateKey("incorrect_Apk_Version_Dialog"), translator.translateKey("errorDialog_defaultTitle"), navigator.app.exitApp);
        } else {
            failedLogin(argResponse);
        }

    }

    // ---------------------------------------------------------------------------------------
    function handleSuccessfulLoginRequest(argResponse) {
        var sMethod = 'handleSuccessfulLoginRequest() ';
        console.log(logPrefix + sMethod);

        var loginHelper = new WICI.LoginResponseHelper();
        loginHelper.setLoginResponseObject(argResponse);
        self.loginResponseObject = argResponse;
        //var userLocationResponse = null;
        if (argResponse && argResponse.data) {

            //Check attestation first to determine whether or not to let them in
            console.log( logPrefix + sMethod + " getTrainingModuleEffectiveDate= " + loginHelper.getTrainingModuleEffectiveDate());
            console.log( logPrefix + sMethod + " hasAttestationOccurred? " + loginHelper.hasAttestationDateOccurred( loginHelper.getTrainingModuleEffectiveDate() ));
            console.log( logPrefix + sMethod + " getCheckAttestationListAsArray= " + loginHelper.getCheckAttestationListAsArray() );
            console.log( logPrefix + sMethod + "isRetailNetworkInCheckAttestationList? " + loginHelper.isRetailNetworkInCheckAttestationList($(refs.retailNetWork).val()) );
            if( ($(refs.employerID).val().toUpperCase()==='E') && loginHelper.hasAttestationDateOccurred( loginHelper.getTrainingModuleEffectiveDate() ) && loginHelper.isRetailNetworkInCheckAttestationList($(refs.retailNetWork).val())){
                console.log(logPrefix + sMethod+"Invoke CheckAttestation");
                new WICI.LoadingIndicatorController().show();
                //alert("Invoke CheckAttestation");
                if (app.getDemoMode()) {
                		new WICI.LoadingIndicatorController().hide();
                    	model.set('isDebugMode', argResponse.data.isDebugMode);
                        model.set('locationFieldID', $(refs.businessStoreNo).val().toUpperCase());
                        respondToUserLocationLookup(argResponse);
                    
                }else{
                	new WICI.LoadingIndicatorController().hide();
                	invokeCheckTrainingAttestation($(refs.businessStoreNo).val().toUpperCase(), $(refs.firstName).val(), $(refs.lastName).val(),handleSuccessfulCheckAttestTrainingRequest, failedCheckAttestTraining);
                    return;
                }
            }else{                
                console.log(logPrefix + sMethod+"Continue Login...");
                if (argResponse.data.isDebugMode != null) {
                    model.set('isDebugMode', argResponse.data.isDebugMode);
                }
                //userLocationResponse = argResponse.data.checkLocation;
                // Save account profile info
                console.log("WICI Login Response  ::" + JSON.stringify(argResponse.data));
                if (argResponse.data.roleId != null) {
                    model.set('rollId', argResponse.data.roleId);
                }
                console.log("WICI Login Response RollID ::" + model.get('rollId'));
                if (argResponse.data.enableEnstreamAuth != null) {
                    model.set('enableEnstreamAuth', argResponse.data.enableEnstreamAuth);
                }
                if (app.getDemoMode()) {
                    model.set('locationFieldID', $(refs.businessStoreNo).val().toUpperCase());
                } else {
                    console.log("WICI Login Response CTFSStoreNo ::" + model.get('CTFSStoreNo'));
                    if (argResponse.data.checkLocation && argResponse.data.checkLocation) {
                        model.set('businessStoreNumber', argResponse.data.checkLocation.businessStoreNumber);
                        if (argResponse.data.checkLocation.CTFSStoreNo) {
                            model.set('locationFieldIDADM', argResponse.data.checkLocation.CTFSStoreNo);
                            console.log("WICI Login Response locationFieldIDADM ::" + model.get('locationFieldIDADM'));
                        } else {
                            model.set('locationFieldIDADM', $(refs.businessStoreNo).val().toUpperCase());
                            console.log("WICI Login Response locationFieldIDADM ::" + model.get('locationFieldIDADM'));
                        }
                    } else {
                        model.set('locationFieldIDADM', $(refs.businessStoreNo).val().toUpperCase());
                    }
                }
    
                console.log("WICI Login Response enableEnstreamAuth ::" + model.get('enableEnstreamAuth'));
                console.log("WICI Login Response isDebugMode ::" + model.get('isDebugMode'));
                app.accountProfileHelper.initialize(argResponse.data.roles, argResponse.data.roleId);
    
                //Consider this the regular login process
                if (loginHelper.loginSuccessful()) {
                    if (!app.getDemoMode()) {
                        if (loginHelper.getMsg() === "Your login details are currently in use") {
                            messageDialog.error(
                                translator.translateKey("loginScreen_Login_Details_In_Use"),
                                translator.translateKey("errorDialog_defaultTitle"),
                                null);
                            new WICI.LoadingIndicatorController().hide();
                        } else {
                            if (loginHelper.getPendRetrievalConfig())
                                WICI.AppConfig.PendingFeature.MaxRetrievalsForApproved = loginHelper.getPendRetrievalConfig().MaxRetrievalsForApproved;
        
                            console.log(logPrefix + sMethod + "-WICI.AppConfig.PendingFeature.MaxRetrievalsForApproved=" + WICI.AppConfig.PendingFeature.MaxRetrievalsForApproved);
        
                            $.when.apply(null, retrieveLatestDictionary(argResponse)).always(function () {
                                respondToUserLocationLookup(argResponse);
                            });
                        }
                    } else {
                        respondToUserLocationLookup(argResponse);
                    }
        
                } else if (loginHelper.incorrectApkVersion() && navigator.app) {
                    //actual version of apk is incorrect
                    messageDialog.error(translator.translateKey("incorrect_Apk_Version_Dialog"), translator.translateKey("errorDialog_defaultTitle"), navigator.app.exitApp);
                } else {
                    failedLogin(argResponse);
                }

            }

        }


    }

    function retrieveLatestDictionary(argResponse, argCallBack) {
        //new WICI.LoadingIndicatorController().show();

        var dictionaryInfoHelper = new WICI.DictionaryInfoHelper(argResponse.data.dictionaryInfo);

        //var dictionaryLoadingHelper = new WICI.DictionaryLoadingHelper(messageDialog, translator, dictionaryInfoHelper.getLatestDictionaryInfo());
        var dictionaryLoadingHelper = new WICI.DictionaryLoadingHelper(app.messageDialog, app.translator, dictionaryInfoHelper.getLatestDictionaryInfo(argResponse.data.dictionaryInfo), WICI);

        //dictionaryLoadingHelper.determineUpdateDictionaryOrQuit();
        return dictionaryLoadingHelper.determineUpdateDictionaryOrQuit();
    }
    // ---------------------------------------------------------------------------------------
    function failedLogin(argResponse) {
        var loginHelper = new WICI.LoginResponseHelper();
        loginHelper.setLoginResponseObject(argResponse);

        new WICI.LoadingIndicatorController().hide();
        // US4744
        messageDialog.error(translator.translateKey(loginHelper.getBundleCodeForErrorMessage()), translator.translateKey("loginScreen_Dialog_ErrorTitle"), enableLoginCredentialsFieldsAndFocusAgentIDField);
        //messageDialog.error( translator.translateKey("loginScreen_FailureMessage"), translator.translateKey("loginScreen_Dialog_ErrorTitle"), enableLoginCredentialsFieldsAndFocusAgentIDField);
    }
    // ---------------------------------------------------------------------------------------
    function respondToUserLocationLookup(argResponse) {
        var sMethod = "respondToUserLocationLookup() : ";
        console.log(logPrefix + sMethod + JSON.stringify(argResponse.data));

        var userLocationResponse = argResponse.data.checkLocation;
        if (userLocationResponse) {
            var locationHelper = new WICI.UserLocationResponseHelper();

            locationHelper.setUserLocationResponseObject(userLocationResponse);

            var outletStreet = locationHelper.getOutletStreet();
            var outletCity = locationHelper.getOutletCity();
            var outletProvince = locationHelper.getOutletProvince();
            var outletPostal = locationHelper.getOutletPostal();

            var constructedMessage = translator.translateKey("loginScreen_UserLookup_ConfirmMessage");
            constructedMessage += "<br>";
            constructedMessage += "<br>";
            constructedMessage += outletStreet.trim() + "<br>";
            constructedMessage += outletCity.trim() + ", " + outletProvince.trim() + "<br>";
            constructedMessage += outletPostal.trim() + "<br>";
            constructedMessage += "<br>";
            if (app.getDemoMode()) {
                constructedMessage += translator.translateKey("loginScreen_DemoModeAlert").replace(/\n/g, "<br>");
            }
            model.set('outletProvince', outletProvince.trim());
            model.set('outletPostalcode', outletPostal.trim());
            console.log(logPrefix + sMethod + model.get('outletProvince'));
            messageDialog.htmlConfirm(constructedMessage, handleLookupYes, handleLookupNo, translator.translateKey("loginScreen_UserLookupDialog_NormalTitle"));
            model.set('userLocationResponse', userLocationResponse);
        } else {
            handleLookupFailed();
            model.set('userLocationResponse', null);
        }
    }
    //---------------------------------------------------------------------------------------
    function testPrint() {
        var sMethod = 'testPrint() ';
        console.log(logPrefix + sMethod);
        var rez3 = [];
        syncUserData();
        if (app.validationsOn) {
            app.validationDecorator.clearErrArrtibute();

            var rez = model.validate(1);
            app.validationDecorator.applyErrAttribute(rez);
            console.log(logPrefix + sMethod + "validateOtherStaff :: " + validateOtherStaff);
            if (validateNameFields) {
                var rez2 = model.validate(2);
                app.validationDecorator.applyErrAttribute(rez2);

                if (rez.length > 0 || rez2.length > 0) {
                    return;
                }
            } else if (validateOtherStaff) {
                rez3 = model.validate(2);
                console.log(logPrefix + sMethod + "rez3 : " + rez3.length);
                console.log(logPrefix + sMethod + "rez3 : " + rez3[0] + " rez3 [1]" + rez3[1]);
                if (rez.length > 0 || rez2.length > 0 || rez3.length > 0) {
                    return;
                }
            } else if (rez.length > 0) {
                return;
            }
        }
        new WICI.LoadingIndicatorController().show();
        try {
            var isDevice = new WICI.DeviceDetectionHelper().any();
            if (isDevice) {
                app.zebraPrinterWrapper.testPrint(printTestFileSuccess, printTestFileFailure);
            } else {
                // Web print
                model.set('printerMacAddress', false);
                model.set('printerInRange', false);
                invokeLogin($(refs.retailNetWork).val(), $(refs.employerID).val().toUpperCase(), $(refs.agentID).val(), "", $(refs.password).val().toUpperCase(), $(refs.businessStoreNo).val().toUpperCase(), $(refs.firstName).val(), $(refs.lastName).val(), app.apkVersionHelper.getAPKVersion(), handleSuccessfulLoginRequest, failedLogin);
                return;
            }
        } catch (error) {
            console.log(logPrefix + sMethod + "::[ERROR]::[" + error + "]");
        }
        return;
    }
    //---------------------------------------------------------------------------------------
    function printTestFileSuccess(result) {
        var sMethod = 'printTestFileSuccess() ';
        console.log(logPrefix + sMethod);

        model.set('printerInRange', true);
        invokeLogin($(refs.retailNetWork).val(), $(refs.employerID).val().toUpperCase(), $(refs.agentID).val(), "", $(refs.password).val().toUpperCase(), $(refs.businessStoreNo).val().toUpperCase(), $(refs.firstName).val(), $(refs.lastName).val(), app.apkVersionHelper.getAPKVersion(), handleSuccessfulLoginRequest, failedLogin);
    }
    //---------------------------------------------------------------------------------------
    function printTestFileFailure() {
        var sMethod = 'printTestFileFailure() ';
        console.log(logPrefix + sMethod);

        model.set('printerInRange', false);
        invokeLogin($(refs.retailNetWork).val(), $(refs.employerID).val().toUpperCase(), $(refs.agentID).val(), "", $(refs.password).val().toUpperCase(), $(refs.businessStoreNo).val().toUpperCase(), $(refs.firstName).val(), $(refs.lastName).val(), app.apkVersionHelper.getAPKVersion(), handleSuccessfulLoginRequest, failedLogin);
    }
    // ---------------------------------------------------------------------------------------
    function populateNetworkRetailList() {
        var sMethod = 'populateNetworkRetailList() ';
        console.log(logPrefix + sMethod);

        syncUserData();
        var controlRef = $(refs.retailNetWork);
        controlRef.empty();
        var selected = model.get('retailNetWork');
        var list = new WICI.RetailNetWorkList();

        $.each(list.data, function (index, item) {
            var optTempl = '<option value="' + item.value + '" ';
            optTempl = optTempl + '>' + translator.translateKey(item.text)
                + '</option>';
            controlRef.append(optTempl);
        });

        if (selected) {
            $(refs.retailNetWork + " [value='" + selected + "']")
                .attr("selected", "selected");
        }
    }
    // ---------------------------------------------------------------------------------------
    function handleLookupFailed() {
        new WICI.LoadingIndicatorController().hide();
        messageDialog.error(
            translator.translateKey("loginScreen_UserLookup_FailedMessage"),
            translator.translateKey("loginScreen_UserLookupDialog_ErrorTitle"),
            disableLoginCredentialsFieldsAndFocusLocationField);
    }
    // ---------------------------------------------------------------------------------------
    function handleLookupNo() {
        new WICI.LoadingIndicatorController().hide();
        disableLoginCredentialsFieldsAndFocusLocationField();
    }
    // ---------------------------------------------------------------------------------------
    function disableLoginCredentialsFieldsAndFocusLocationField() {
        $(refs.userID).attr('disabled', 'disabled');
        $(refs.agentID).attr('disabled', 'disabled');
        $(refs.passwordFieldID).attr('disabled', 'disabled');
        $(refs.businessStoreNo).focus();
    }
    // ---------------------------------------------------------------------------------------
    function enableLoginCredentialsFieldsAndFocusAgentIDField() {
        $(refs.userID).removeAttr('disabled');
        $(refs.agentID).removeAttr('disabled');
        $(refs.passwordFieldID).removeAttr('disabled');
        $(refs.userID).focus();
    }
    // ---------------------------------------------------------------------------------------
    function handleLookupYes() {
        var sMethod = 'handleLookupYes()';
        console.log(logPrefix + sMethod);

        try {
            // Retrieve latest printer mac address
            app.zebraPrinterWrapper.getStoredPrinterMacAddress(retrievePrinterMacAdrSuccess, retrievePrinterMacAdrFailure);
        } catch (err) {
            console.log(logPrefix + sMethod + " Intiate ERROR: " + err);
            checkForPrintSetupWarning();
        }
    }
    // ---------------------------------------------------------------------------------------
    // WICI-83 :
    function showHideTrainingModuleSlider() {
        var sMethod = 'showHideModuleSlider()';
        console.log(logPrefix + sMethod);
        if (isTrainingModule()) {
            $(refs.modeSliderComponent).show();
        } else {
            $(refs.modeSliderComponent).hide();
        }
    }
    // ----WICI-83-----------------------------------------------------------------------------------
    function showHideTrainingButton() {
        var sMethod = 'showHideTrainingButton()';
        console.log(logPrefix + sMethod);
        if (isTrainingModule() && isTrainingModuleFlag) {
            // show training button
            $(refs.trainingButtonID).show();
        } else {
            // hide training button 
            $(refs.trainingButtonID).hide();
        }

    }
    // ----WICI-83-----------------------------------------------------------------------------------
    function showHideLoginButton() {
        var sMethod = 'showHideLoginButton()';
        console.log(logPrefix + sMethod);
        if (isTrainingModule() && isTrainingModuleFlag) {
            // hide login button
            $(refs.loginButtonID).hide();
        } else {
            // show login button 
            $(refs.loginButtonID).show();
        }

    }
    // ---------------------------------------------------------------------------------------
    function showNextScreen() {
        new WICI.LoadingIndicatorController().hide();

        var locationHelper = new WICI.UserLocationResponseHelper();
        locationHelper.setUserLocationResponseObject(model.get('userLocationResponse'));
        var outletProvince = locationHelper.getOutletProvince();

        $screenContainer.hide();

        creditCardData = new WICI.CreditCardApplicationData();
        creditCardData.addModel(model);
        app.flowController = new WICI.NewCustomerCreditCardAcquisitionFlow(creditCardData, translator, messageDialog);
        app.flowController.start();
        testPrintOnLogin(WICI.AppConfig.TestPrintConfig.TEST_PRINT_ON_LOGIN, app.getDemoMode(), (new WICI.DeviceDetectionHelper).any());
    }
    // ---------------------------------------------------------------------------------------
    function retrievePrinterMacAdrSuccess(result) {
        new WICI.LoadingIndicatorController().hide();

        // Save latest printer mac address
        app.zebraPrinterWrapper.setPrinterMacAddress(result);

        checkForPrintSetupWarning();
    }
    //---------------------------------------------------------------------------------------
    function retrievePrinterMacAdrFailure(error) {
        new WICI.LoadingIndicatorController().hide();

        checkForPrintSetupWarning();
    }
    //---------------------------------------------------------------------------------------
    function checkForPrintSetupWarning() {
        var sMethod = 'checkForPrintSetupWarning() :: ';
        console.log(logPrefix + sMethod + " verifyPrinterMacAddress :: " + app.zebraPrinterWrapper.verifyPrinterMacAddress());

        model.set('printerMacAddress', app.zebraPrinterWrapper.verifyPrinterMacAddress());
        if (!app.accountProfileHelper.isAdminProfile() && !app.zebraPrinterWrapper.verifyPrinterMacAddress()) {
            app.accountProfileHelper.showNoPrinterSetupWarning(function () {
                showNextScreen();
            });
        } else {
            showNextScreen();
        }
    }
    // -------------------------------------------------------------------------------------
    function testPrintOnLogin(isTurnedOn, isDemo, isDevice) {
        //if (isTurnedOn && isDemo && isDevice) {
        if (isTurnedOn && isDevice) {
            new WICI.TestPrintHelper(translator, messageDialog).testPrint();
        }
    }
    // -------------------------------------------------------------------------------------
    function hideRetailNetWorkData() {
        $(refs.retailNetworkSelectionId).hide();
        $(refs.employeeNumberRowId).hide();

    }
    // -------------------------------------------------------------------------------------   
    function retailNetWorkSelectionValidation() {
        //if($(refs.retailNetWork ).val() === 'null' &&  $(refs.employerID).val().toUpperCase() == 'E') {
        $.each(model.data, function (index, item) {
            if (item.name == "retailNetWork") {
                item.validation.canBeEmpty = false;
            }
        });
        //}
        /*else {
        $.each(model.data, function(index, item) {
            if(item.name == "retailNetWork") { 
            item.validation.canBeEmpty = true;
            }
        });
    }*/
    }
    // -------------------------------------------------------------------------------------
    function employeeNumberIdValidation() {
        $.each(model.data, function (index, item) {
            if (item.name == "employeeNumberId") {
                item.validation.canBeEmpty = true;
            }
        });
    }

    // -------------------------------------------------------------------------------------

    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            console.log("Geolocation is not supported by this browser.");
        }
    }

    function showPosition(position) {
        var longitude = position.coords.longitude.toFixed(5);
        model.set('longitude', longitude);
        console.log("longitude:" + longitude);
        var latitude = position.coords.latitude.toFixed(5);;
        model.set('latitude', latitude);
        console.log("latitude", latitude);
    }
   //----------------------------------------------------------------------------------------
    function showGrayTrainingButton(){
    	var sMethod = 'showGrayTrainingButton() :: ';
        console.log(logPrefix + sMethod);
        $(refs.trainingButtonID).unbind("click");
        $(refs.trainingButtonID).removeClass('greenflat');
        $(refs.trainingButtonID).addClass('grayflat');
    }
    //----------------------------------------------------------------------------------------
    function showGreenTrainingButton(){
    	var sMethod = 'showGreenTrainingButton() :: ';
        console.log(logPrefix + sMethod);
        $(refs.trainingButtonID).removeClass('grayflat');
        $(refs.trainingButtonID).addClass('greenflat');
        $(refs.trainingButtonID).bind( "click", function() {
        	if($(refs.employerID).val().toUpperCase()==="" || $(refs.employerID).val().toUpperCase()===null){
       		    $(refs.employerID).addClass('errorField');
            	app.validationDecorator.focusControl(refs.employerID); 
            	showGrayTrainingButton();
            	return;
       	     }else{
       	    	generateAgentId();
                syncUserData();
                creditCardData = new WICI.CreditCardApplicationData();
                creditCardData.addModel(model);
                hide();
                app.flowController = new WICI.TrainingFlow(creditCardData, translator, messageDialog);
                app.flowController.start(); 
       	     }
        	});
    }
    //-----------------------------------------------------------------------------------------
    function validateTrainingModuleFields() {
    	 var sMethod = 'validateTrainingModuleFields() ';
         console.log(logPrefix + sMethod);
         var rez3 = [];
         generateAgentId();
         syncUserData();
         if (app.validationsOn) {
             app.validationDecorator.clearErrArrtibute();
             
             if (validateNameFields) {
                 var rez2 = model.validate(2);
                 app.validationDecorator.applyErrAttribute(rez2);
             }
             
             var rez = model.validate(1);
             app.validationDecorator.applyErrAttribute(rez);
             
             if (rez.length == 0 && rez2.length == 0) {
                 showGreenTrainingButton();

             } else {
                 showGrayTrainingButton();
                 return;
             }

         }
    }

};
