ensureNamespaceExists();

WICI.PersonalDataScreenController = function(activationItems, argTranslator, argMessageDialog) {
    var logPrefix = '[WICI.PersonalDataScreenController]::';
    var $screenContainer = $('#PersonalDataScreen');
    var translator =    null; 
    var messageDialog = null; 

    this.show = show;
    this.init = init;
    this.hide = hide;

	var flow = null;
    
    this.syncUserData = syncUserData; 
    var refs = {
            placeofissue:   '#personalData_PlaceOfIssue_TextField',
            idtype:         '#personalData_IDType_TextField',
            idnumbers:      '#personalData_IDNumber_TextField',
            
            title:          '#personalData_Title_Group',                
            title_MR:       '#personalData_MR_RadioButton',
            title_MRS:      '#personalData_MRS_RadioButton',
            title_MISS:     '#personalData_MISS_RadioButton',
            title_MS:       '#personalData_MS_RadioButton',
            title_DR:       '#personalData_DR_RadioButton',
            
            firstName:      '#personalData_FirstName_TextField',
            initial:        '#personalData_Initial_TextField',
            lastName:       '#personalData_LastName_TextField',
            
            birthDate:      '#personalData_DatOfBirth_TextField',
            
            email:          '#personalData_EmailAddress_TextField',
            homePhone:      '#personalData_HomePhone_TextField',
            cellPhone:      '#personalData_CellPhone_TextField',
            
            correspondence:     '#personalData_Correspondence_Group',   
            correspondence_eng: '#personalData_English_RadioButton',
            correspondence_fre: '#personalData_French_RadioButton'
    };
    
    var model =new WICI.BaseModel({
        name: 'personalData',
        refs: refs, 
        data:[
                {name: 'placeofissue',  value: null, validation: {type: 'presence',     message: 'personalData1_validation_placeofissue'} },
                {name: 'idtype',        value: null, validation: {type: 'presence',     message: 'personalData1_validation_idtype'}},
                {name: 'idnumbers',     value: null, validation: {type: 'format',       message: 'personalData1_validation_idnumbers', matcher: /^[A-Z0-9\,\_\'\-\.\~\@\[\]\}\{\)\(]{1,20}$/}},
                
                {name: 'title',         value: null, validation: null },
                {name: 'firstName',     value: null, validation: { type: 'personName',  message: 'personalData1_validation_firstName'} },
                {name: 'initial',       value: null, validation: { type: 'format',      message: 'personalData1_validation_initial', matcher: /^[A-Z]{1}/, canBeEmpty: true } },
                {name: 'lastName',      value: null, validation: { type: 'personName',  message: 'personalData1_validation_lastName' } },
               
                {name: 'birthDate',     value: null, validation: { type: 'birthDate',    message: 'personalData1_validation_birthDate' } },
                {name: 'email',         value: null, validation: { type: 'email',       message: 'personalData1_validation_email', canBeEmpty: true } },
                {name: 'homePhone',     value: null, validation: { type: 'phone',       message: 'personalData1_validation_homePhone' } },
                {name: 'cellPhone',     value: null, validation: { type: 'phone',       message: 'personalData1_validation_cellPhone' , canBeEmpty: true } },
                {name: 'correspondence',value: null, validation: { type: 'presence',    message: 'personalData1_validation_correspondence'} }
                ]
    });    
    //---------------------------------------------------------------------------------------
    function init( argFlow ) {
        var sMethod = 'init() ';
        console.log(logPrefix + sMethod);
        
        flow = argFlow;        
        translator = argTranslator; 		//(AA)Dependency Injection Principle: Allows for proper unit testing
        messageDialog = argMessageDialog; 	//(AA)Dependency Injection Principle: Allows for proper unit testing

        if (!activationItems) {
            console.log(logPrefix + sMethod + ' "activationItems" is null!!!');
            activationItems = {};
        }
        var currentModel = activationItems.getModel(model.name);
        if (!currentModel) {
            activationItems.addModel(model);
        } else {
            model = currentModel;
        }
        
        createView();
        bindEvents();
        
        populateProvinces();
        populateIdTypesList();
        
        // Set masks for UI elements
        setUIElementsMasks();
    }
    //---------------------------------------------------------------------------------------
    function show() {
        $screenContainer.show();
        translator.run('PersonalDataScreen');
    }
    //---------------------------------------------------------------------------------------
    function hide() {
        $screenContainer.hide();
    }
    //---------------------------------------------------------------------------------------
    function setUIElementsMasks() {
        // Set phone fields mask
        $('.fieldValuesPhoneField').mask('999-999-9999', {placeholder:"", useDelimeter:true, delimeter:'-'});
    }
    //---------------------------------------------------------------------------------------
    function createView() {
        $screenContainer.empty();
        assembleNavigationBarAtTop();
        assemblePageHTML($screenContainer, '#WICIPersonalDataScreen-template');
		$screenContainer.addClass("breadcrumbPadding");
    }
   //---------------------------------------------------------------------------------------
	function assembleNavigationBarAtTop() {
        $("#pageHeader-template").template("pageHeader");
        $.tmpl("pageHeader", {
            "nextButtonId" : "PersonalDataScreen_NextButton",
            "settingsButtonId" : "PersonalDataScreen_SettingsButton"
        }).appendTo("#PersonalDataScreen");
    }    
	//---------------------------------------------------------------------------------------
    function assemblePageHTML($element, templateName) {
        var html = $(templateName).tmpl();
        $element.append(html);
    }
    
    //---------------------------------------------------------------------------------------
    function syncUserData(){
        var sMethod = 'syncUserData() ';
        console.log(logPrefix + sMethod);
        
        model.set('placeofissue', $(refs.placeofissue).val());
        
        model.set('idtype',     $(refs.idtype).val());
        model.set('idnumbers',  $(refs.idnumbers).val().toUpperCase());
        
        model.set('firstName',  $(refs.firstName).val().toUpperCase());
        model.set('initial',    $(refs.initial).val().toUpperCase());
        model.set('lastName',   $(refs.lastName).val().toUpperCase());

        model.set('birthDate',  $(refs.birthDate).val());
        model.set('email',      $(refs.email).val());
        model.set('homePhone',  $(refs.homePhone).val().replace(/-/g,''));
        model.set('cellPhone',  $(refs.cellPhone).val().replace(/-/g,''));
        
        console.log(logPrefix + sMethod +' model data: '+model.toString());
    }
    //---------------------------------------------------------------------------------------
    function restoreCreditCardData(){
        var sMethod = "restoreCreditCardData()";
        console.log(logPrefix + sMethod);

        $(refs.placeofissue).val(model.get('placeofissue'));
        $(refs.idtype).val(model.get('idtype'));
        $(refs.idnumbers).val(model.get('idnumbers'));
        $(refs.firstName).val(model.get('firstName'));
        $(refs.initial).val(model.get('initial'));
        $(refs.lastName).val(model.get('lastName'));
        $(refs.birthDate).val(model.get('birthDate'));
        $(refs.email).val(model.get('email'));
        $(refs.homePhone).val(model.get('homePhone'));
        $(refs.cellPhone).val(model.get('cellPhone'));
        
    }
    //---------------------------------------------------------------------------------------
    function validateFields( argSuccessCallback, argFailureCallback ){
        var sMethod = 'validateFields() ';
        console.log(logPrefix + sMethod);
        
        var validator = new WICI.Validator();
        syncUserData();
        
        if(!validator.notEmpty(agentIDTextField)){
            argFailureCallback(translator.translateKey("loginScreen_AgentID_Label"));
        }else{
            argSuccessCallback();
        }
        
    }
    //---------------------------------------------------------------------------------------
    function bindEvents() {
        var sMethod = 'bindEvents() ';
        console.log(logPrefix + sMethod);
        
        $(refs.placeofissue).change(function(event){
            console.log(refs.placeofissue+'::change');
            populateIdTypesList();
        });
        
        $('#PersonalDataScreen_NextButton').click(function() {
            showNextScreen();
        });
        $('#PersonalDataScreen_PrevButton').click(function() {
            showPrevScreen();
        });    
        
        $(refs.title_MR).click(function(){
            clearRadios('title');
            $(refs.title_MR).addClass('ui-btn-active');
            model.set('title', 'MR');
        });
        $(refs.title_MRS).click(function(){
            clearRadios('title');
            $(refs.title_MRS).addClass('ui-btn-active');
            model.set('title', 'MRS');
        });
        $(refs.title_MISS).click(function(){
            clearRadios('title');
            $(refs.title_MISS).addClass('ui-btn-active');
            model.set('title', 'MISS');
        });
        $(refs.title_MS).click(function(){
            clearRadios('title');
            $(refs.title_MS).addClass('ui-btn-active');
            model.set('title', 'MS');
        });
        $(refs.title_DR).click(function(){
            clearRadios('title');
            $(refs.title_DR).addClass('ui-btn-active');
            model.set('title', 'DR');
        });
        $(refs.correspondence_eng).click(function(){
            clearRadios('correspondence');
            $(refs.correspondence_eng).addClass('ui-btn-active');
            model.set('correspondence', 'E');
        });
        $(refs.correspondence_fre).click(function(){
            clearRadios('correspondence');
            $(refs.correspondence_fre).addClass('ui-btn-active');
            model.set('correspondence', 'F');
        });
    }
    //---------------------------------------------------------------------------------------
    function clearRadios(radioGroup){
        if(radioGroup==='title'){
            $(refs.title_MR).removeClass('ui-btn-active');
            $(refs.title_MRS).removeClass('ui-btn-active');
            $(refs.title_MISS).removeClass('ui-btn-active');
            $(refs.title_MS).removeClass('ui-btn-active');
            $(refs.title_DR).removeClass('ui-btn-active');
        }
        else if(radioGroup==='correspondence'){
            $(refs.correspondence_eng).removeClass('ui-btn-active');
            $(refs.correspondence_fre).removeClass('ui-btn-active');
        }
    }
    //---------------------------------------------------------------------------------------
    function populateProvinces(){
        var sMethod = 'populateProvinces() ';
        console.log(logPrefix + sMethod);
        
        if($(refs.placeofissue+' option').length>1){
            console.log(logPrefix + sMethod +" select control is already populated.");
            return;
        }
        
        var controlRef=$(refs.placeofissue);
        controlRef.empty();
        
        var list = new WICI.ProvincesList();
        $.each(list.data, function(index, item) {  
            var optTempl = '<option value="' +item.value+ '">'+translator.translateKey(item.text)+'</option>';            
            controlRef.append(optTempl);
        });
    }
    //---------------------------------------------------------------------------------------
    function populateIdTypesList() {
        var sMethod = 'populateIdTypesList() ';
        console.log(logPrefix + sMethod);
        
        syncUserData();
        var provinceValue = model.get('placeofissue');
        var idType = model.get('idtype');
        
        var controlRef=$(refs.idtype);
        controlRef.empty();
        
        
        var list = new WICI.IdTypesList();
        list.data = list.getDataByProvince(provinceValue);

        $.each(list.data, function(index, item) {  
            var optTempl = '<option value="' +item.value+ '">'+translator.translateKey(item.text)+'</option>';            
            controlRef.append(optTempl);
        });
        
        if(idType){
            $(refs.idtype+" [value='"+idType+"']").attr("selected", "selected");
        }
    }
    //---------------------------------------------------------------------------------------
	function showPrevScreen() {
        var sMethod = 'showPrevScreen() ';
        console.log(logPrefix + sMethod);
        flow.back();
    }    
	//---------------------------------------------------------------------------------------
    function showNextScreen() {
        var sMethod = 'showNextScreen() ';
        console.log(logPrefix + sMethod);
        
        syncUserData();

        if (app.validationsOn) {
            app.validationDecorator.clearErrArrtibute();            
            
            var rez = model.validate();
            if (rez.length > 0) {
                var errStrArr =[];
                $.each(rez, function(index, item) {
                    errStrArr.push(translator.translateKey(item.err));
                });
                
                app.validationDecorator.applyErrAttribute(rez);     
                return; 
            }
            
            var edgeValidation = model.validateAge(model);
            var rez = [];
            if(edgeValidation != null)
            {
            	rez.push(edgeValidation);
            	messageDialog.error(translator.translateKey(edgeValidation.err), null, selectDOBFileld);
            	app.validationDecorator.applyErrAttribute(rez, true);
            	return;
            }
        }
        //updateCreditCardData();
        flow.next();
    }
    
    function selectDOBFileld(){
    	app.validationDecorator.focusControl(refs.birthDate);
    }
    
    
    
    //---------------------------------------------------------------------------------------
};